import { __decorate } from "tslib";
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { POSITION_MAP } from 'ng-zorro-antd/core/overlay';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BehaviorSubject, combineLatest, EMPTY, fromEvent, merge, of, Subject } from 'rxjs';
import { auditTime, concatMap, debounceTime, distinctUntilChanged, filter, map, mapTo, switchMap, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ngx-device-detector";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/cdk/platform";
const listOfPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
export class CmacsDropDownDirective {
    setDropdownMenuValue(key, value) {
        if (this.dropdownMenu) {
            this.dropdownMenu.setValue(key, value);
        }
    }
    constructor(elementRef, deviceService, overlay, renderer, viewContainerRef, platform) {
        this.elementRef = elementRef;
        this.deviceService = deviceService;
        this.overlay = overlay;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.platform = platform;
        this.overlayRef = null;
        this.destroy$ = new Subject();
        this.longPress = false;
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
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.dropdownMenu) {
            const nativeElement = this.elementRef.nativeElement;
            /** host mouse state **/
            const hostMouseState$ = merge(fromEvent(nativeElement, 'mouseenter').pipe(mapTo(true)), fromEvent(nativeElement, 'mouseleave').pipe(mapTo(false)));
            /** context menu - right click */
            fromEvent(nativeElement, 'contextmenu').pipe(takeUntil(this.destroy$)).subscribe((event) => {
                event.stopPropagation();
                event.preventDefault();
            });
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
            /** host click state **/
            const hostRightClickState$ = this.deviceService.isDesktop() ? fromEvent(nativeElement, 'contextmenu').pipe(map(() => !this.visible)) :
                fromEvent(nativeElement, 'touchstart', {
                    once: false,
                    capture: true
                }).pipe(concatMap(() => {
                    this.longPress = true;
                    return of({});
                }), takeUntil(this.destroy$), debounceTime(300), map(() => {
                    return this.longPress;
                }));
            fromEvent(nativeElement, 'touchend', {
                once: false,
                capture: true
            }).pipe(takeUntil(this.destroy$)).subscribe(() => {
                this.longPress = false;
            });
            /** visible state switch by cmacsTrigger **/
            const visibleStateByTrigger$ = this.cmacsTrigger$.pipe(switchMap(trigger => {
                if (trigger === 'hover') {
                    return mergedMouseState$;
                }
                else if (trigger === 'click') {
                    return hostClickState$;
                }
                else if (trigger === 'contextmenu') {
                    return hostRightClickState$;
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
                            hasBackdrop: (this.hasBackdrop || this.backdrop) && (this.cmacsTrigger === 'click' || this.cmacsTrigger === 'contextmenu'),
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
        this.destroy$.next(true);
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
    static { this.ɵfac = function CmacsDropDownDirective_Factory(t) { return new (t || CmacsDropDownDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DeviceDetectorService), i0.ɵɵdirectiveInject(i2.Overlay), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i3.Platform)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsDropDownDirective, selectors: [["", "cmacs-dropdown", ""]], inputs: { dropdownMenu: "dropdownMenu", cmacsTrigger: "cmacsTrigger", matchWidthElement: "matchWidthElement", backdrop: "backdrop", hasBackdrop: "hasBackdrop", clickHide: "clickHide", disabled: "disabled", visible: "visible", overlayClassName: "overlayClassName", overlayStyle: "overlayStyle", placement: "placement" }, outputs: { visibleChange: "visibleChange" }, exportAs: ["cmacsDropdown"], features: [i0.ɵɵNgOnChangesFeature] }); }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRyb3Bkb3duL2Ryb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFJUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBSXBJLE1BQU0sZUFBZSxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBTXpILE1BQU0sT0FBTyxzQkFBc0I7SUE4QmpDLG9CQUFvQixDQUE2QyxHQUFNLEVBQUUsS0FBb0M7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QUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxlQUFlO2FBQzFCO3FNQWNVLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBS21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsV0FBVztrQkFBbkMsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsT0FBTztrQkFBL0IsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ2EsYUFBYTtrQkFBL0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVTQ0FQRSwgaGFzTW9kaWZpZXJLZXkgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XHJcbmltcG9ydCB7IFBPU0lUSU9OX01BUCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdmVybGF5JztcclxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbmRleGFibGVPYmplY3QgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgY29uY2F0LCBFTVBUWSwgZnJvbUV2ZW50LCBtZXJnZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYXVkaXRUaW1lLCBjb25jYXRNYXAsIGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBtYXBUbywgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENtYWNzRHJvcGRvd25NZW51Q29tcG9uZW50LCBOelBsYWNlbWVudFR5cGUgfSBmcm9tICcuL2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGV2aWNlRGV0ZWN0b3JTZXJ2aWNlIH0gZnJvbSAnbmd4LWRldmljZS1kZXRlY3Rvcic7XHJcblxyXG5jb25zdCBsaXN0T2ZQb3NpdGlvbnMgPSBbUE9TSVRJT05fTUFQLmJvdHRvbUxlZnQsIFBPU0lUSU9OX01BUC5ib3R0b21SaWdodCwgUE9TSVRJT05fTUFQLnRvcFJpZ2h0LCBQT1NJVElPTl9NQVAudG9wTGVmdF07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1kcm9wZG93bl0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NEcm9wZG93bidcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRHJvcERvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBwcml2YXRlIHBvcnRhbD86IFRlbXBsYXRlUG9ydGFsO1xyXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgbG9uZ1ByZXNzID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XHJcbiAgICAucG9zaXRpb24oKVxyXG4gICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpXHJcbiAgICAud2l0aExvY2tlZFBvc2l0aW9uKClcclxuICAgIC53aXRoVHJhbnNmb3JtT3JpZ2luT24oJy5hbnQtZHJvcGRvd24nKTtcclxuICBwcml2YXRlIGlucHV0VmlzaWJsZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICBwcml2YXRlIGNtYWNzVHJpZ2dlciQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PCdjbGljaycgfCAnaG92ZXInIHwgJ2NvbnRleHRtZW51Jz4oJ2hvdmVyJyk7XHJcbiAgcHJpdmF0ZSBvdmVybGF5Q2xvc2UkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBASW5wdXQoKSBkcm9wZG93bk1lbnU6IENtYWNzRHJvcGRvd25NZW51Q29tcG9uZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgY21hY3NUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyB8ICdjb250ZXh0bWVudScgPSAnaG92ZXInO1xyXG4gIEBJbnB1dCgpIG1hdGNoV2lkdGhFbGVtZW50OiBFbGVtZW50UmVmIHwgbnVsbCA9IG51bGw7XHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgTm90IHN1cHBvcnRlZCwgdXNlIGBoYXNCYWNrZHJvcGAgaW5zdGVhZC5cclxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDEyLjAuMFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBiYWNrZHJvcCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNCYWNrZHJvcCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbGlja0hpZGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgb3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgb3ZlcmxheVN0eWxlOiBJbmRleGFibGVPYmplY3QgPSB7fTtcclxuICBASW5wdXQoKSBwbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBzZXREcm9wZG93bk1lbnVWYWx1ZTxUIGV4dGVuZHMga2V5b2YgQ21hY3NEcm9wZG93bk1lbnVDb21wb25lbnQ+KGtleTogVCwgdmFsdWU6IENtYWNzRHJvcGRvd25NZW51Q29tcG9uZW50W1RdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kcm9wZG93bk1lbnUpIHtcclxuICAgICAgdGhpcy5kcm9wZG93bk1lbnUuc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VEZXRlY3RvclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxyXG4gICkge1xyXG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtZHJvcGRvd24tdHJpZ2dlcicpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZHJvcGRvd25NZW51KSB7XHJcbiAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIC8qKiBob3N0IG1vdXNlIHN0YXRlICoqL1xyXG4gICAgICBjb25zdCBob3N0TW91c2VTdGF0ZSQgPSBtZXJnZShcclxuICAgICAgICBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInKS5waXBlKG1hcFRvKHRydWUpKSxcclxuICAgICAgICBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ21vdXNlbGVhdmUnKS5waXBlKG1hcFRvKGZhbHNlKSlcclxuICAgICAgKTtcclxuICAgICAgLyoqIGNvbnRleHQgbWVudSAtIHJpZ2h0IGNsaWNrICovXHJcbiAgICAgIGZyb21FdmVudChuYXRpdmVFbGVtZW50LCAnY29udGV4dG1lbnUnKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLyoqIG1lbnUgbW91c2Ugc3RhdGUgKiovXHJcbiAgICAgIGNvbnN0IG1lbnVNb3VzZVN0YXRlJCA9IHRoaXMuZHJvcGRvd25NZW51Lm1vdXNlU3RhdGUkO1xyXG4gICAgICAvKiogbWVyZ2VkIG1vdXNlIHN0YXRlICoqL1xyXG4gICAgICBjb25zdCBtZXJnZWRNb3VzZVN0YXRlJCA9IG1lcmdlKG1lbnVNb3VzZVN0YXRlJCwgaG9zdE1vdXNlU3RhdGUkKTtcclxuICAgICAgLyoqIGhvc3QgY2xpY2sgc3RhdGUgKiovXHJcbiAgICAgIGNvbnN0IGhvc3RDbGlja1N0YXRlJCA9IHRoaXMuZGV2aWNlU2VydmljZS5pc0Rlc2t0b3AoKSA/IGZyb21FdmVudChuYXRpdmVFbGVtZW50LCAnY2xpY2snKS5waXBlKG1hcCgoKSA9PiAhdGhpcy52aXNpYmxlKSkgOlxyXG4gICAgICAgIGZyb21FdmVudChuYXRpdmVFbGVtZW50LCAndG91Y2hzdGFydCcsIHtcclxuICAgICAgICAgIG9uY2U6IGZhbHNlLFxyXG4gICAgICAgICAgY2FwdHVyZTogdHJ1ZVxyXG4gICAgICAgIH0pLnBpcGUobWFwKCgpID0+ICF0aGlzLnZpc2libGUpKTtcclxuICAgICAgLyoqIGhvc3QgY2xpY2sgc3RhdGUgKiovXHJcbiAgICAgIGNvbnN0IGhvc3RSaWdodENsaWNrU3RhdGUkID0gdGhpcy5kZXZpY2VTZXJ2aWNlLmlzRGVza3RvcCgpID8gZnJvbUV2ZW50KG5hdGl2ZUVsZW1lbnQsICdjb250ZXh0bWVudScpLnBpcGUobWFwKCgpID0+ICF0aGlzLnZpc2libGUpKSA6XHJcbiAgICAgICAgZnJvbUV2ZW50KG5hdGl2ZUVsZW1lbnQsICd0b3VjaHN0YXJ0Jywge1xyXG4gICAgICAgICAgb25jZTogZmFsc2UsXHJcbiAgICAgICAgICBjYXB0dXJlOiB0cnVlXHJcbiAgICAgICAgfSkucGlwZShcclxuICAgICAgICAgIGNvbmNhdE1hcCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9uZ1ByZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIG9mKHt9KTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgZGVib3VuY2VUaW1lKDMwMCksXHJcbiAgICAgICAgICBtYXAoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb25nUHJlc3M7XHJcbiAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ3RvdWNoZW5kJywge1xyXG4gICAgICAgIG9uY2U6IGZhbHNlLFxyXG4gICAgICAgIGNhcHR1cmU6IHRydWVcclxuICAgICAgfSkucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb25nUHJlc3MgPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICAgLyoqIHZpc2libGUgc3RhdGUgc3dpdGNoIGJ5IGNtYWNzVHJpZ2dlciAqKi9cclxuICAgICAgY29uc3QgdmlzaWJsZVN0YXRlQnlUcmlnZ2VyJCA9IHRoaXMuY21hY3NUcmlnZ2VyJC5waXBlKFxyXG4gICAgICAgIHN3aXRjaE1hcCh0cmlnZ2VyID0+IHtcclxuICAgICAgICAgIGlmICh0cmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXJnZWRNb3VzZVN0YXRlJDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgICAgICByZXR1cm4gaG9zdENsaWNrU3RhdGUkO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyID09PSAnY29udGV4dG1lbnUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBob3N0UmlnaHRDbGlja1N0YXRlJFxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVNUFRZO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJCA9IHRoaXMuZHJvcGRvd25NZW51LmRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJC5waXBlKFxyXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmNsaWNrSGlkZSksXHJcbiAgICAgICAgbWFwVG8oZmFsc2UpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRvbVRyaWdnZXJWaXNpYmxlJCA9IG1lcmdlKHZpc2libGVTdGF0ZUJ5VHJpZ2dlciQsIGRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJCwgdGhpcy5vdmVybGF5Q2xvc2UkKS5waXBlKFxyXG4gICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy5kaXNhYmxlZClcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgdmlzaWJsZSQgPSBtZXJnZSh0aGlzLmlucHV0VmlzaWJsZSQsIGRvbVRyaWdnZXJWaXNpYmxlJCk7XHJcbiAgICAgIGNvbWJpbmVMYXRlc3QoW3Zpc2libGUkLCB0aGlzLmRyb3Bkb3duTWVudS5pc0NoaWxkU3ViTWVudU9wZW4kXSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIG1hcCgoW3Zpc2libGUsIHN1Yl0pID0+IHZpc2libGUgfHwgc3ViKSxcclxuICAgICAgICAgIGF1ZGl0VGltZSgxNTApLFxyXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLnBsYXRmb3JtLmlzQnJvd3NlciksXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgodmlzaWJsZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubWF0Y2hXaWR0aEVsZW1lbnQgPyB0aGlzLm1hdGNoV2lkdGhFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBuYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgY29uc3QgdHJpZ2dlcldpZHRoID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgICAgICAgIGlmICh0aGlzLnZpc2libGUgIT09IHZpc2libGUpIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICAgICAgLyoqIHNldCB1cCBvdmVybGF5UmVmICoqL1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICAgICAgICAgIC8qKiBuZXcgb3ZlcmxheSAqKi9cclxuICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMucG9zaXRpb25TdHJhdGVneSxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiB0cmlnZ2VyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBkaXNwb3NlT25OYXZpZ2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGFzQmFja2Ryb3A6ICh0aGlzLmhhc0JhY2tkcm9wIHx8IHRoaXMuYmFja2Ryb3ApICYmICh0aGlzLmNtYWNzVHJpZ2dlciA9PT0gJ2NsaWNrJyB8fCB0aGlzLmNtYWNzVHJpZ2dlciA9PT0gJ2NvbnRleHRtZW51JyksXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgbWVyZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaG1lbnRzKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYub3V0c2lkZVBvaW50ZXJFdmVudHMoKS5waXBlKGZpbHRlcigoZTogTW91c2VFdmVudCkgPT4gIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmtleWRvd25FdmVudHMoKS5waXBlKGZpbHRlcihlID0+IGUua2V5Q29kZSA9PT0gRVNDQVBFICYmICFoYXNNb2RpZmllcktleShlKSkpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnBpcGUobWFwVG8oZmFsc2UpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHRoaXMub3ZlcmxheUNsb3NlJCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLyoqIHVwZGF0ZSBvdmVybGF5IGNvbmZpZyAqKi9cclxuICAgICAgICAgICAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpO1xyXG4gICAgICAgICAgICAgIG92ZXJsYXlDb25maWcubWluV2lkdGggPSB0cmlnZ2VyV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyoqIG9wZW4gZHJvcGRvd24gd2l0aCBhbmltYXRpb24gKiovXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFtQT1NJVElPTl9NQVBbdGhpcy5wbGFjZW1lbnRdLCAuLi5saXN0T2ZQb3NpdGlvbnNdKTtcclxuICAgICAgICAgICAgLyoqIHJlc2V0IHBvcnRhbCBpZiBuZWVkZWQgKiovXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wb3J0YWwgfHwgdGhpcy5wb3J0YWwudGVtcGxhdGVSZWYgIT09IHRoaXMuZHJvcGRvd25NZW51IS50ZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuZHJvcGRvd25NZW51IS50ZW1wbGF0ZVJlZiwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMucG9ydGFsKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8qKiBkZXRhY2ggb3ZlcmxheVJlZiBpZiBuZWVkZWQgKiovXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyB2aXNpYmxlLCBkaXNhYmxlZCwgb3ZlcmxheUNsYXNzTmFtZSwgb3ZlcmxheVN0eWxlLCBjbWFjc1RyaWdnZXIsIGJhY2tkcm9wIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKGNtYWNzVHJpZ2dlcikge1xyXG4gICAgICB0aGlzLmNtYWNzVHJpZ2dlciQubmV4dCh0aGlzLmNtYWNzVHJpZ2dlcik7XHJcbiAgICB9XHJcbiAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICB0aGlzLmlucHV0VmlzaWJsZSQubmV4dCh0aGlzLnZpc2libGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnJyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZpc2libGUkLm5leHQoZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAob3ZlcmxheUNsYXNzTmFtZSkge1xyXG4gICAgICB0aGlzLnNldERyb3Bkb3duTWVudVZhbHVlKCdvdmVybGF5Q2xhc3NOYW1lJywgdGhpcy5vdmVybGF5Q2xhc3NOYW1lKTtcclxuICAgIH1cclxuICAgIGlmIChvdmVybGF5U3R5bGUpIHtcclxuICAgICAgdGhpcy5zZXREcm9wZG93bk1lbnVWYWx1ZSgnb3ZlcmxheVN0eWxlJywgdGhpcy5vdmVybGF5U3R5bGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJhY2tkcm9wKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbignYGJhY2tkcm9wYCBpbiBkcm9wZG93biBjb21wb25lbnQgd2lsbCBiZSByZW1vdmVkIGluIDEyLjAuMCwgcGxlYXNlIHVzZSBgaGFzQmFja2Ryb3BgIGluc3RlYWQuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==