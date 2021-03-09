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
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/cdk/platform";
const listOfPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
export class CmacsDropDownDirective {
    constructor(elementRef, overlay, renderer, viewContainerRef, platform) {
        this.elementRef = elementRef;
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
            const hostClickState$ = fromEvent(nativeElement, 'click').pipe(map(() => !this.visible));
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
CmacsDropDownDirective.ɵfac = function CmacsDropDownDirective_Factory(t) { return new (t || CmacsDropDownDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2.Platform)); };
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
    }], function () { return [{ type: i0.ElementRef }, { type: i1.Overlay }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i2.Platform }]; }, { dropdownMenu: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRyb3Bkb3duL2Ryb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFJUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHM0csTUFBTSxlQUFlLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7QUFNekgsTUFBTSxPQUFPLHNCQUFzQjtJQW1DakMsWUFDUyxVQUFzQixFQUNyQixPQUFnQixFQUNoQixRQUFtQixFQUNuQixnQkFBa0MsRUFDbEMsUUFBa0I7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QyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsSUFBSSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDOUQ7UUFDRCxJQUFJLFFBQVEsRUFBRTtZQUNaLGVBQWUsQ0FBQywrRkFBK0YsQ0FBQyxDQUFDO1NBQ2xIO0lBQ0gsQ0FBQzs7NEZBN0tVLHNCQUFzQjsyREFBdEIsc0JBQXNCO0FBbUJSO0lBQWYsWUFBWSxFQUFFO3dEQUFrQjtBQUNqQjtJQUFmLFlBQVksRUFBRTsyREFBcUI7QUFDcEI7SUFBZixZQUFZLEVBQUU7eURBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFO3dEQUFrQjtBQUNqQjtJQUFmLFlBQVksRUFBRTt1REFBaUI7dUZBdkI5QixzQkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxlQUFlO2FBQzFCO2lLQWFVLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBS21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsV0FBVztrQkFBbkMsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsT0FBTztrQkFBL0IsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ2EsYUFBYTtrQkFBL0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVTQ0FQRSwgaGFzTW9kaWZpZXJLZXkgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyBQT1NJVElPTl9NQVAgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3ZlcmxheSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIEluZGV4YWJsZU9iamVjdCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIEVNUFRZLCBmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgbWFwVG8sIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21hY3NEcm9wZG93bk1lbnVDb21wb25lbnQsIE56UGxhY2VtZW50VHlwZSB9IGZyb20gJy4vZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xuXG5jb25zdCBsaXN0T2ZQb3NpdGlvbnMgPSBbUE9TSVRJT05fTUFQLmJvdHRvbUxlZnQsIFBPU0lUSU9OX01BUC5ib3R0b21SaWdodCwgUE9TSVRJT05fTUFQLnRvcFJpZ2h0LCBQT1NJVElPTl9NQVAudG9wTGVmdF07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjbWFjcy1kcm9wZG93bl0nLFxuICBleHBvcnRBczogJ2NtYWNzRHJvcGRvd24nXG59KVxuZXhwb3J0IGNsYXNzIENtYWNzRHJvcERvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgcHJpdmF0ZSBwb3J0YWw/OiBUZW1wbGF0ZVBvcnRhbDtcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAucG9zaXRpb24oKVxuICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KVxuICAgIC53aXRoTG9ja2VkUG9zaXRpb24oKVxuICAgIC53aXRoVHJhbnNmb3JtT3JpZ2luT24oJy5hbnQtZHJvcGRvd24nKTtcbiAgcHJpdmF0ZSBpbnB1dFZpc2libGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIHByaXZhdGUgY21hY3NUcmlnZ2VyJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8J2NsaWNrJyB8ICdob3Zlcic+KCdob3ZlcicpO1xuICBwcml2YXRlIG92ZXJsYXlDbG9zZSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBASW5wdXQoKSBkcm9wZG93bk1lbnU6IENtYWNzRHJvcGRvd25NZW51Q29tcG9uZW50IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGNtYWNzVHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xuICBASW5wdXQoKSBtYXRjaFdpZHRoRWxlbWVudDogRWxlbWVudFJlZiB8IG51bGwgPSBudWxsO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgTm90IHN1cHBvcnRlZCwgdXNlIGBoYXNCYWNrZHJvcGAgaW5zdGVhZC5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxMi4wLjBcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBiYWNrZHJvcCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFzQmFja2Ryb3AgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNsaWNrSGlkZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlzaWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBvdmVybGF5Q2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgb3ZlcmxheVN0eWxlOiBJbmRleGFibGVPYmplY3QgPSB7fTtcbiAgQElucHV0KCkgcGxhY2VtZW50OiBOelBsYWNlbWVudFR5cGUgPSAnYm90dG9tTGVmdCc7XG4gIEBPdXRwdXQoKSByZWFkb25seSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgc2V0RHJvcGRvd25NZW51VmFsdWU8VCBleHRlbmRzIGtleW9mIENtYWNzRHJvcGRvd25NZW51Q29tcG9uZW50PihrZXk6IFQsIHZhbHVlOiBDbWFjc0Ryb3Bkb3duTWVudUNvbXBvbmVudFtUXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRyb3Bkb3duTWVudSkge1xuICAgICAgdGhpcy5kcm9wZG93bk1lbnUuc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LWRyb3Bkb3duLXRyaWdnZXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHJvcGRvd25NZW51KSB7XG4gICAgICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgLyoqIGhvc3QgbW91c2Ugc3RhdGUgKiovXG4gICAgICBjb25zdCBob3N0TW91c2VTdGF0ZSQgPSBtZXJnZShcbiAgICAgICAgZnJvbUV2ZW50KG5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJykucGlwZShtYXBUbyh0cnVlKSksXG4gICAgICAgIGZyb21FdmVudChuYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScpLnBpcGUobWFwVG8oZmFsc2UpKVxuICAgICAgKTtcbiAgICAgIC8qKiBtZW51IG1vdXNlIHN0YXRlICoqL1xuICAgICAgY29uc3QgbWVudU1vdXNlU3RhdGUkID0gdGhpcy5kcm9wZG93bk1lbnUubW91c2VTdGF0ZSQ7XG4gICAgICAvKiogbWVyZ2VkIG1vdXNlIHN0YXRlICoqL1xuICAgICAgY29uc3QgbWVyZ2VkTW91c2VTdGF0ZSQgPSBtZXJnZShtZW51TW91c2VTdGF0ZSQsIGhvc3RNb3VzZVN0YXRlJCk7XG4gICAgICAvKiogaG9zdCBjbGljayBzdGF0ZSAqKi9cbiAgICAgIGNvbnN0IGhvc3RDbGlja1N0YXRlJCA9IGZyb21FdmVudChuYXRpdmVFbGVtZW50LCAnY2xpY2snKS5waXBlKG1hcCgoKSA9PiAhdGhpcy52aXNpYmxlKSk7XG4gICAgICAvKiogdmlzaWJsZSBzdGF0ZSBzd2l0Y2ggYnkgY21hY3NUcmlnZ2VyICoqL1xuICAgICAgY29uc3QgdmlzaWJsZVN0YXRlQnlUcmlnZ2VyJCA9IHRoaXMuY21hY3NUcmlnZ2VyJC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAodHJpZ2dlciA9PiB7XG4gICAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXJnZWRNb3VzZVN0YXRlJDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgIHJldHVybiBob3N0Q2xpY2tTdGF0ZSQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgY29uc3QgZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skID0gdGhpcy5kcm9wZG93bk1lbnUuZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmNsaWNrSGlkZSksXG4gICAgICAgIG1hcFRvKGZhbHNlKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRvbVRyaWdnZXJWaXNpYmxlJCA9IG1lcmdlKHZpc2libGVTdGF0ZUJ5VHJpZ2dlciQsIGRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJCwgdGhpcy5vdmVybGF5Q2xvc2UkKS5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMuZGlzYWJsZWQpXG4gICAgICApO1xuICAgICAgY29uc3QgdmlzaWJsZSQgPSBtZXJnZSh0aGlzLmlucHV0VmlzaWJsZSQsIGRvbVRyaWdnZXJWaXNpYmxlJCk7XG4gICAgICBjb21iaW5lTGF0ZXN0KFt2aXNpYmxlJCwgdGhpcy5kcm9wZG93bk1lbnUuaXNDaGlsZFN1Yk1lbnVPcGVuJF0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoW3Zpc2libGUsIHN1Yl0pID0+IHZpc2libGUgfHwgc3ViKSxcbiAgICAgICAgICBhdWRpdFRpbWUoMTUwKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLnBsYXRmb3JtLmlzQnJvd3NlciksXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgodmlzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLm1hdGNoV2lkdGhFbGVtZW50ID8gdGhpcy5tYXRjaFdpZHRoRWxlbWVudC5uYXRpdmVFbGVtZW50IDogbmF0aXZlRWxlbWVudDtcbiAgICAgICAgICBjb25zdCB0cmlnZ2VyV2lkdGggPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICAgIGlmICh0aGlzLnZpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICAvKiogc2V0IHVwIG92ZXJsYXlSZWYgKiovXG4gICAgICAgICAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgICAgICAgICAvKiogbmV3IG92ZXJsYXkgKiovXG4gICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMucG9zaXRpb25TdHJhdGVneSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogdHJpZ2dlcldpZHRoLFxuICAgICAgICAgICAgICAgIGRpc3Bvc2VPbk5hdmlnYXRpb246IHRydWUsXG4gICAgICAgICAgICAgICAgaGFzQmFja2Ryb3A6ICh0aGlzLmhhc0JhY2tkcm9wIHx8IHRoaXMuYmFja2Ryb3ApICYmIHRoaXMuY21hY3NUcmlnZ2VyID09PSAnY2xpY2snLFxuICAgICAgICAgICAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCksXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaG1lbnRzKCksXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLm91dHNpZGVQb2ludGVyRXZlbnRzKCkucGlwZShmaWx0ZXIoKGU6IE1vdXNlRXZlbnQpID0+ICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpKSxcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYua2V5ZG93bkV2ZW50cygpLnBpcGUoZmlsdGVyKGUgPT4gZS5rZXlDb2RlID09PSBFU0NBUEUgJiYgIWhhc01vZGlmaWVyS2V5KGUpKSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5waXBlKG1hcFRvKGZhbHNlKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUodGhpcy5vdmVybGF5Q2xvc2UkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8qKiB1cGRhdGUgb3ZlcmxheSBjb25maWcgKiovXG4gICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XG4gICAgICAgICAgICAgIG92ZXJsYXlDb25maWcubWluV2lkdGggPSB0cmlnZ2VyV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogb3BlbiBkcm9wZG93biB3aXRoIGFuaW1hdGlvbiAqKi9cbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFtQT1NJVElPTl9NQVBbdGhpcy5wbGFjZW1lbnRdLCAuLi5saXN0T2ZQb3NpdGlvbnNdKTtcbiAgICAgICAgICAgIC8qKiByZXNldCBwb3J0YWwgaWYgbmVlZGVkICoqL1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcnRhbCB8fCB0aGlzLnBvcnRhbC50ZW1wbGF0ZVJlZiAhPT0gdGhpcy5kcm9wZG93bk1lbnUhLnRlbXBsYXRlUmVmKSB7XG4gICAgICAgICAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuZHJvcGRvd25NZW51IS50ZW1wbGF0ZVJlZiwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKiogZGV0YWNoIG92ZXJsYXlSZWYgaWYgbmVlZGVkICoqL1xuICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgdmlzaWJsZSwgZGlzYWJsZWQsIG92ZXJsYXlDbGFzc05hbWUsIG92ZXJsYXlTdHlsZSwgY21hY3NUcmlnZ2VyLCBiYWNrZHJvcCB9ID0gY2hhbmdlcztcbiAgICBpZiAoY21hY3NUcmlnZ2VyKSB7XG4gICAgICB0aGlzLmNtYWNzVHJpZ2dlciQubmV4dCh0aGlzLmNtYWNzVHJpZ2dlcik7XG4gICAgfVxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLmlucHV0VmlzaWJsZSQubmV4dCh0aGlzLnZpc2libGUpO1xuICAgIH1cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgdGhpcy5pbnB1dFZpc2libGUkLm5leHQoZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvdmVybGF5Q2xhc3NOYW1lKSB7XG4gICAgICB0aGlzLnNldERyb3Bkb3duTWVudVZhbHVlKCdvdmVybGF5Q2xhc3NOYW1lJywgdGhpcy5vdmVybGF5Q2xhc3NOYW1lKTtcbiAgICB9XG4gICAgaWYgKG92ZXJsYXlTdHlsZSkge1xuICAgICAgdGhpcy5zZXREcm9wZG93bk1lbnVWYWx1ZSgnb3ZlcmxheVN0eWxlJywgdGhpcy5vdmVybGF5U3R5bGUpO1xuICAgIH1cbiAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbignYGJhY2tkcm9wYCBpbiBkcm9wZG93biBjb21wb25lbnQgd2lsbCBiZSByZW1vdmVkIGluIDEyLjAuMCwgcGxlYXNlIHVzZSBgaGFzQmFja2Ryb3BgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4iXX0=