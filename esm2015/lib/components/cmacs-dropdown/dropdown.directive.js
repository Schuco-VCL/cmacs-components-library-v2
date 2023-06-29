import { __decorate } from "tslib";
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { POSITION_MAP } from 'ng-zorro-antd/core/overlay';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BehaviorSubject, combineLatest, EMPTY, fromEvent, merge, Subject } from 'rxjs';
import { auditTime, distinctUntilChanged, filter, map, mapTo, switchMap, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ngx-device-detector";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/cdk/platform";
const listOfPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
export class CmacsDropDownDirective {
    constructor(elementRef, deviceService, overlay, renderer, viewContainerRef, platform) {
        this.elementRef = elementRef;
        this.deviceService = deviceService;
        this.overlay = overlay;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.platform = platform;
        this.overlayRef = null;
        this.destroy$ = new Subject();
        this.positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.elementRef.nativeElement)
            .withLockedPosition()
            .withTransformOriginOn('.ant-dropdown');
        this.inputVisible$ = new BehaviorSubject(false);
        this.cmacsTrigger$ = new BehaviorSubject('hover');
        this.overlayClose$ = new Subject();
        this.dropdownMenu = null;
        this.cmacsTrigger = 'hover';
        this.matchWidthElement = null;
        /**
         * @deprecated Not supported, use `hasBackdrop` instead.
         * @breaking-change 12.0.0
         */
        this.backdrop = false;
        this.hasBackdrop = false;
        this.clickHide = true;
        this.disabled = false;
        this.visible = false;
        this.overlayClassName = '';
        this.overlayStyle = {};
        this.placement = 'bottomLeft';
        this.visibleChange = new EventEmitter();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-dropdown-trigger');
    }
    setDropdownMenuValue(key, value) {
        if (this.dropdownMenu) {
            this.dropdownMenu.setValue(key, value);
        }
    }
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.dropdownMenu) {
            const nativeElement = this.elementRef.nativeElement;
            /** host mouse state **/
            const hostMouseState$ = merge(fromEvent(nativeElement, 'mouseenter').pipe(mapTo(true)), fromEvent(nativeElement, 'mouseleave').pipe(mapTo(false)));
            /** menu mouse state **/
            const menuMouseState$ = this.dropdownMenu.mouseState$;
            /** merged mouse state **/
            const mergedMouseState$ = merge(menuMouseState$, hostMouseState$);
            /** host click state **/
            const hostClickState$ = this.deviceService.isDesktop() ? fromEvent(nativeElement, 'click').pipe(map(() => !this.visible)) :
                fromEvent(nativeElement, 'touchstart', {
                    once: false,
                    capture: true
                }).pipe(map(() => !this.visible));
            /** visible state switch by cmacsTrigger **/
            const visibleStateByTrigger$ = this.cmacsTrigger$.pipe(switchMap(trigger => {
                if (trigger === 'hover') {
                    return mergedMouseState$;
                }
                else if (trigger === 'click') {
                    return hostClickState$;
                }
                else {
                    return EMPTY;
                }
            }));
            const descendantMenuItemClick$ = this.dropdownMenu.descendantMenuItemClick$.pipe(filter(() => this.clickHide), mapTo(false));
            const domTriggerVisible$ = merge(visibleStateByTrigger$, descendantMenuItemClick$, this.overlayClose$).pipe(filter(() => !this.disabled));
            const visible$ = merge(this.inputVisible$, domTriggerVisible$);
            combineLatest([visible$, this.dropdownMenu.isChildSubMenuOpen$])
                .pipe(map(([visible, sub]) => visible || sub), auditTime(150), distinctUntilChanged(), filter(() => this.platform.isBrowser), takeUntil(this.destroy$))
                .subscribe((visible) => {
                const element = this.matchWidthElement ? this.matchWidthElement.nativeElement : nativeElement;
                const triggerWidth = element.getBoundingClientRect().width;
                if (this.visible !== visible) {
                    this.visibleChange.emit(visible);
                }
                this.visible = visible;
                if (visible) {
                    /** set up overlayRef **/
                    if (!this.overlayRef) {
                        /** new overlay **/
                        this.overlayRef = this.overlay.create({
                            positionStrategy: this.positionStrategy,
                            minWidth: triggerWidth,
                            disposeOnNavigation: true,
                            hasBackdrop: (this.hasBackdrop || this.backdrop) && this.cmacsTrigger === 'click',
                            scrollStrategy: this.overlay.scrollStrategies.reposition()
                        });
                        merge(this.overlayRef.backdropClick(), this.overlayRef.detachments(), this.overlayRef.outsidePointerEvents().pipe(filter((e) => !this.elementRef.nativeElement.contains(e.target))), this.overlayRef.keydownEvents().pipe(filter(e => e.keyCode === ESCAPE && !hasModifierKey(e))))
                            .pipe(mapTo(false), takeUntil(this.destroy$))
                            .subscribe(this.overlayClose$);
                    }
                    else {
                        /** update overlay config **/
                        const overlayConfig = this.overlayRef.getConfig();
                        overlayConfig.minWidth = triggerWidth;
                    }
                    /** open dropdown with animation **/
                    this.positionStrategy.withPositions([POSITION_MAP[this.placement], ...listOfPositions]);
                    /** reset portal if needed **/
                    if (!this.portal || this.portal.templateRef !== this.dropdownMenu.templateRef) {
                        this.portal = new TemplatePortal(this.dropdownMenu.templateRef, this.viewContainerRef);
                    }
                    this.overlayRef.attach(this.portal);
                }
                else {
                    /** detach overlayRef if needed **/
                    if (this.overlayRef) {
                        this.overlayRef.detach();
                    }
                }
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }
    ngOnChanges(changes) {
        const { visible, disabled, overlayClassName, overlayStyle, cmacsTrigger, backdrop } = changes;
        if (cmacsTrigger) {
            this.cmacsTrigger$.next(this.cmacsTrigger);
        }
        if (visible) {
            this.inputVisible$.next(this.visible);
        }
        if (disabled) {
            const nativeElement = this.elementRef.nativeElement;
            if (this.disabled) {
                this.renderer.setAttribute(nativeElement, 'disabled', '');
                this.inputVisible$.next(false);
            }
            else {
                this.renderer.removeAttribute(nativeElement, 'disabled');
            }
        }
        if (overlayClassName) {
            this.setDropdownMenuValue('overlayClassName', this.overlayClassName);
        }
        if (overlayStyle) {
            this.setDropdownMenuValue('overlayStyle', this.overlayStyle);
        }
        if (backdrop) {
            warnDeprecation('`backdrop` in dropdown component will be removed in 12.0.0, please use `hasBackdrop` instead.');
        }
    }
}
CmacsDropDownDirective.ɵfac = function CmacsDropDownDirective_Factory(t) { return new (t || CmacsDropDownDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DeviceDetectorService), i0.ɵɵdirectiveInject(i2.Overlay), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i3.Platform)); };
CmacsDropDownDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsDropDownDirective, selectors: [["", "cmacs-dropdown", ""]], inputs: { dropdownMenu: "dropdownMenu", cmacsTrigger: "cmacsTrigger", matchWidthElement: "matchWidthElement", backdrop: "backdrop", hasBackdrop: "hasBackdrop", clickHide: "clickHide", disabled: "disabled", visible: "visible", overlayClassName: "overlayClassName", overlayStyle: "overlayStyle", placement: "placement" }, outputs: { visibleChange: "visibleChange" }, exportAs: ["cmacsDropdown"], features: [i0.ɵɵNgOnChangesFeature] });
__decorate([
    InputBoolean()
], CmacsDropDownDirective.prototype, "backdrop", void 0);
__decorate([
    InputBoolean()
], CmacsDropDownDirective.prototype, "hasBackdrop", void 0);
__decorate([
    InputBoolean()
], CmacsDropDownDirective.prototype, "clickHide", void 0);
__decorate([
    InputBoolean()
], CmacsDropDownDirective.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsDropDownDirective.prototype, "visible", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsDropDownDirective, [{
        type: Directive,
        args: [{
                selector: '[cmacs-dropdown]',
                exportAs: 'cmacsDropdown'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DeviceDetectorService }, { type: i2.Overlay }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i3.Platform }]; }, { dropdownMenu: [{
            type: Input
        }], cmacsTrigger: [{
            type: Input
        }], matchWidthElement: [{
            type: Input
        }], backdrop: [{
            type: Input
        }], hasBackdrop: [{
            type: Input
        }], clickHide: [{
            type: Input
        }], disabled: [{
            type: Input
        }], visible: [{
            type: Input
        }], overlayClassName: [{
            type: Input
        }], overlayStyle: [{
            type: Input
        }], placement: [{
            type: Input
        }], visibleChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRyb3Bkb3duL2Ryb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFJUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBSTNHLE1BQU0sZUFBZSxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBTXpILE1BQU0sT0FBTyxzQkFBc0I7SUFtQ2pDLFlBQ1MsVUFBc0IsRUFDckIsYUFBb0MsRUFDcEMsT0FBZ0IsRUFDaEIsUUFBbUIsRUFDbkIsZ0JBQWtD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WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNhLGFBQWE7a0JBQS9CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFU0NBUEUsIGhhc01vZGlmaWVyS2V5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xyXG5pbXBvcnQgeyBQT1NJVElPTl9NQVAgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3ZlcmxheSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5kZXhhYmxlT2JqZWN0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIEVNUFRZLCBmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBtYXBUbywgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENtYWNzRHJvcGRvd25NZW51Q29tcG9uZW50LCBOelBsYWNlbWVudFR5cGUgfSBmcm9tICcuL2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGV2aWNlRGV0ZWN0b3JTZXJ2aWNlIH0gZnJvbSAnbmd4LWRldmljZS1kZXRlY3Rvcic7XHJcblxyXG5jb25zdCBsaXN0T2ZQb3NpdGlvbnMgPSBbUE9TSVRJT05fTUFQLmJvdHRvbUxlZnQsIFBPU0lUSU9OX01BUC5ib3R0b21SaWdodCwgUE9TSVRJT05fTUFQLnRvcFJpZ2h0LCBQT1NJVElPTl9NQVAudG9wTGVmdF07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1kcm9wZG93bl0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NEcm9wZG93bidcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRHJvcERvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBwcml2YXRlIHBvcnRhbD86IFRlbXBsYXRlUG9ydGFsO1xyXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxyXG4gICAgLnBvc2l0aW9uKClcclxuICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KVxyXG4gICAgLndpdGhMb2NrZWRQb3NpdGlvbigpXHJcbiAgICAud2l0aFRyYW5zZm9ybU9yaWdpbk9uKCcuYW50LWRyb3Bkb3duJyk7XHJcbiAgcHJpdmF0ZSBpbnB1dFZpc2libGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgcHJpdmF0ZSBjbWFjc1RyaWdnZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDwnY2xpY2snIHwgJ2hvdmVyJz4oJ2hvdmVyJyk7XHJcbiAgcHJpdmF0ZSBvdmVybGF5Q2xvc2UkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBASW5wdXQoKSBkcm9wZG93bk1lbnU6IENtYWNzRHJvcGRvd25NZW51Q29tcG9uZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgY21hY3NUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdob3Zlcic7XHJcbiAgQElucHV0KCkgbWF0Y2hXaWR0aEVsZW1lbnQ6IEVsZW1lbnRSZWYgfCBudWxsID0gbnVsbDtcclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBOb3Qgc3VwcG9ydGVkLCB1c2UgYGhhc0JhY2tkcm9wYCBpbnN0ZWFkLlxyXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTIuMC4wXHJcbiAgICovXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJhY2tkcm9wID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhhc0JhY2tkcm9wID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNsaWNrSGlkZSA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBvdmVybGF5Q2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBvdmVybGF5U3R5bGU6IEluZGV4YWJsZU9iamVjdCA9IHt9O1xyXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogTnpQbGFjZW1lbnRUeXBlID0gJ2JvdHRvbUxlZnQnO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHNldERyb3Bkb3duTWVudVZhbHVlPFQgZXh0ZW5kcyBrZXlvZiBDbWFjc0Ryb3Bkb3duTWVudUNvbXBvbmVudD4oa2V5OiBULCB2YWx1ZTogQ21hY3NEcm9wZG93bk1lbnVDb21wb25lbnRbVF0pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRyb3Bkb3duTWVudSkge1xyXG4gICAgICB0aGlzLmRyb3Bkb3duTWVudS5zZXRWYWx1ZShrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGRldmljZVNlcnZpY2U6IERldmljZURldGVjdG9yU2VydmljZSxcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXHJcbiAgKSB7XHJcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1kcm9wZG93bi10cmlnZ2VyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRyb3Bkb3duTWVudSkge1xyXG4gICAgICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAvKiogaG9zdCBtb3VzZSBzdGF0ZSAqKi9cclxuICAgICAgY29uc3QgaG9zdE1vdXNlU3RhdGUkID0gbWVyZ2UoXHJcbiAgICAgICAgZnJvbUV2ZW50KG5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJykucGlwZShtYXBUbyh0cnVlKSksXHJcbiAgICAgICAgZnJvbUV2ZW50KG5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJykucGlwZShtYXBUbyhmYWxzZSkpXHJcbiAgICAgICk7XHJcbiAgICAgIC8qKiBtZW51IG1vdXNlIHN0YXRlICoqL1xyXG4gICAgICBjb25zdCBtZW51TW91c2VTdGF0ZSQgPSB0aGlzLmRyb3Bkb3duTWVudS5tb3VzZVN0YXRlJDtcclxuICAgICAgLyoqIG1lcmdlZCBtb3VzZSBzdGF0ZSAqKi9cclxuICAgICAgY29uc3QgbWVyZ2VkTW91c2VTdGF0ZSQgPSBtZXJnZShtZW51TW91c2VTdGF0ZSQsIGhvc3RNb3VzZVN0YXRlJCk7XHJcbiAgICAgIC8qKiBob3N0IGNsaWNrIHN0YXRlICoqL1xyXG4gICAgICBjb25zdCBob3N0Q2xpY2tTdGF0ZSQgPSB0aGlzLmRldmljZVNlcnZpY2UuaXNEZXNrdG9wKCkgPyBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ2NsaWNrJykucGlwZShtYXAoKCkgPT4gIXRoaXMudmlzaWJsZSkpIDpcclxuICAgICAgICBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ3RvdWNoc3RhcnQnLCB7XHJcbiAgICAgICAgICBvbmNlOiBmYWxzZSxcclxuICAgICAgICAgIGNhcHR1cmU6IHRydWVcclxuICAgICAgICB9KS5waXBlKG1hcCgoKSA9PiAhdGhpcy52aXNpYmxlKSk7XHJcbiAgICAgIC8qKiB2aXNpYmxlIHN0YXRlIHN3aXRjaCBieSBjbWFjc1RyaWdnZXIgKiovXHJcbiAgICAgIGNvbnN0IHZpc2libGVTdGF0ZUJ5VHJpZ2dlciQgPSB0aGlzLmNtYWNzVHJpZ2dlciQucGlwZShcclxuICAgICAgICBzd2l0Y2hNYXAodHJpZ2dlciA9PiB7XHJcbiAgICAgICAgICBpZiAodHJpZ2dlciA9PT0gJ2hvdmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkTW91c2VTdGF0ZSQ7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhvc3RDbGlja1N0YXRlJDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFTVBUWTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkZXNjZW5kYW50TWVudUl0ZW1DbGljayQgPSB0aGlzLmRyb3Bkb3duTWVudS5kZXNjZW5kYW50TWVudUl0ZW1DbGljayQucGlwZShcclxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5jbGlja0hpZGUpLFxyXG4gICAgICAgIG1hcFRvKGZhbHNlKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkb21UcmlnZ2VyVmlzaWJsZSQgPSBtZXJnZSh2aXNpYmxlU3RhdGVCeVRyaWdnZXIkLCBkZXNjZW5kYW50TWVudUl0ZW1DbGljayQsIHRoaXMub3ZlcmxheUNsb3NlJCkucGlwZShcclxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMuZGlzYWJsZWQpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHZpc2libGUkID0gbWVyZ2UodGhpcy5pbnB1dFZpc2libGUkLCBkb21UcmlnZ2VyVmlzaWJsZSQpO1xyXG4gICAgICBjb21iaW5lTGF0ZXN0KFt2aXNpYmxlJCwgdGhpcy5kcm9wZG93bk1lbnUuaXNDaGlsZFN1Yk1lbnVPcGVuJF0pXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBtYXAoKFt2aXNpYmxlLCBzdWJdKSA9PiB2aXNpYmxlIHx8IHN1YiksXHJcbiAgICAgICAgICBhdWRpdFRpbWUoMTUwKSxcclxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpLFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHZpc2libGU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLm1hdGNoV2lkdGhFbGVtZW50ID8gdGhpcy5tYXRjaFdpZHRoRWxlbWVudC5uYXRpdmVFbGVtZW50IDogbmF0aXZlRWxlbWVudDtcclxuICAgICAgICAgIGNvbnN0IHRyaWdnZXJXaWR0aCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgICBpZiAodGhpcy52aXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIC8qKiBzZXQgdXAgb3ZlcmxheVJlZiAqKi9cclxuICAgICAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgICAgICAgICAvKiogbmV3IG92ZXJsYXkgKiovXHJcbiAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogdHJpZ2dlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgZGlzcG9zZU9uTmF2aWdhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhhc0JhY2tkcm9wOiAodGhpcy5oYXNCYWNrZHJvcCB8fCB0aGlzLmJhY2tkcm9wKSAmJiB0aGlzLmNtYWNzVHJpZ2dlciA9PT0gJ2NsaWNrJyxcclxuICAgICAgICAgICAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKClcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBtZXJnZShcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNobWVudHMoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5vdXRzaWRlUG9pbnRlckV2ZW50cygpLnBpcGUoZmlsdGVyKChlOiBNb3VzZUV2ZW50KSA9PiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYua2V5ZG93bkV2ZW50cygpLnBpcGUoZmlsdGVyKGUgPT4gZS5rZXlDb2RlID09PSBFU0NBUEUgJiYgIWhhc01vZGlmaWVyS2V5KGUpKSlcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAucGlwZShtYXBUbyhmYWxzZSksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUodGhpcy5vdmVybGF5Q2xvc2UkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvKiogdXBkYXRlIG92ZXJsYXkgY29uZmlnICoqL1xyXG4gICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XHJcbiAgICAgICAgICAgICAgb3ZlcmxheUNvbmZpZy5taW5XaWR0aCA9IHRyaWdnZXJXaWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiogb3BlbiBkcm9wZG93biB3aXRoIGFuaW1hdGlvbiAqKi9cclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnMoW1BPU0lUSU9OX01BUFt0aGlzLnBsYWNlbWVudF0sIC4uLmxpc3RPZlBvc2l0aW9uc10pO1xyXG4gICAgICAgICAgICAvKiogcmVzZXQgcG9ydGFsIGlmIG5lZWRlZCAqKi9cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcnRhbCB8fCB0aGlzLnBvcnRhbC50ZW1wbGF0ZVJlZiAhPT0gdGhpcy5kcm9wZG93bk1lbnUhLnRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5kcm9wZG93bk1lbnUhLnRlbXBsYXRlUmVmLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLyoqIGRldGFjaCBvdmVybGF5UmVmIGlmIG5lZWRlZCAqKi9cclxuICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgdmlzaWJsZSwgZGlzYWJsZWQsIG92ZXJsYXlDbGFzc05hbWUsIG92ZXJsYXlTdHlsZSwgY21hY3NUcmlnZ2VyLCBiYWNrZHJvcCB9ID0gY2hhbmdlcztcclxuICAgIGlmIChjbWFjc1RyaWdnZXIpIHtcclxuICAgICAgdGhpcy5jbWFjc1RyaWdnZXIkLm5leHQodGhpcy5jbWFjc1RyaWdnZXIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgdGhpcy5pbnB1dFZpc2libGUkLm5leHQodGhpcy52aXNpYmxlKTtcclxuICAgIH1cclxuICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJycpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRWaXNpYmxlJC5uZXh0KGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG92ZXJsYXlDbGFzc05hbWUpIHtcclxuICAgICAgdGhpcy5zZXREcm9wZG93bk1lbnVWYWx1ZSgnb3ZlcmxheUNsYXNzTmFtZScsIHRoaXMub3ZlcmxheUNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBpZiAob3ZlcmxheVN0eWxlKSB7XHJcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25NZW51VmFsdWUoJ292ZXJsYXlTdHlsZScsIHRoaXMub3ZlcmxheVN0eWxlKTtcclxuICAgIH1cclxuICAgIGlmIChiYWNrZHJvcCkge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oJ2BiYWNrZHJvcGAgaW4gZHJvcGRvd24gY29tcG9uZW50IHdpbGwgYmUgcmVtb3ZlZCBpbiAxMi4wLjAsIHBsZWFzZSB1c2UgYGhhc0JhY2tkcm9wYCBpbnN0ZWFkLicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=