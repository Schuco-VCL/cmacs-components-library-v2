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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRyb3Bkb3duL2Ryb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFJUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHM0csTUFBTSxlQUFlLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7QUFNekgsTUFBTSxPQUFPLHNCQUFzQjtJQW1DakMsWUFDUyxVQUFzQixFQUNyQixPQUFnQixFQUNoQixRQUFtQixFQUNuQixnQkFBa0MsRUFDbEMsUUFBa0I7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QyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsSUFBSSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDOUQ7UUFDRCxJQUFJLFFBQVEsRUFBRTtZQUNaLGVBQWUsQ0FBQywrRkFBK0YsQ0FBQyxDQUFDO1NBQ2xIO0lBQ0gsQ0FBQzs7NEZBN0tVLHNCQUFzQjsyREFBdEIsc0JBQXNCO0FBbUJSO0lBQWYsWUFBWSxFQUFFO3dEQUFrQjtBQUNqQjtJQUFmLFlBQVksRUFBRTsyREFBcUI7QUFDcEI7SUFBZixZQUFZLEVBQUU7eURBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFO3dEQUFrQjtBQUNqQjtJQUFmLFlBQVksRUFBRTt1REFBaUI7dUZBdkI5QixzQkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxlQUFlO2FBQzFCO2lLQWFVLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBS21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsV0FBVztrQkFBbkMsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsT0FBTztrQkFBL0IsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ2EsYUFBYTtrQkFBL0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVTQ0FQRSwgaGFzTW9kaWZpZXJLZXkgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XHJcbmltcG9ydCB7IFBPU0lUSU9OX01BUCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdmVybGF5JztcclxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbmRleGFibGVPYmplY3QgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgRU1QVFksIGZyb21FdmVudCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYXVkaXRUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIG1hcFRvLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ21hY3NEcm9wZG93bk1lbnVDb21wb25lbnQsIE56UGxhY2VtZW50VHlwZSB9IGZyb20gJy4vZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgbGlzdE9mUG9zaXRpb25zID0gW1BPU0lUSU9OX01BUC5ib3R0b21MZWZ0LCBQT1NJVElPTl9NQVAuYm90dG9tUmlnaHQsIFBPU0lUSU9OX01BUC50b3BSaWdodCwgUE9TSVRJT05fTUFQLnRvcExlZnRdO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3MtZHJvcGRvd25dJyxcclxuICBleHBvcnRBczogJ2NtYWNzRHJvcGRvd24nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0Ryb3BEb3duRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBwb3J0YWw/OiBUZW1wbGF0ZVBvcnRhbDtcclxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcclxuICAgIC5wb3NpdGlvbigpXHJcbiAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudClcclxuICAgIC53aXRoTG9ja2VkUG9zaXRpb24oKVxyXG4gICAgLndpdGhUcmFuc2Zvcm1PcmlnaW5PbignLmFudC1kcm9wZG93bicpO1xyXG4gIHByaXZhdGUgaW5wdXRWaXNpYmxlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIHByaXZhdGUgY21hY3NUcmlnZ2VyJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8J2NsaWNrJyB8ICdob3Zlcic+KCdob3ZlcicpO1xyXG4gIHByaXZhdGUgb3ZlcmxheUNsb3NlJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgQElucHV0KCkgZHJvcGRvd25NZW51OiBDbWFjc0Ryb3Bkb3duTWVudUNvbXBvbmVudCB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGNtYWNzVHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xyXG4gIEBJbnB1dCgpIG1hdGNoV2lkdGhFbGVtZW50OiBFbGVtZW50UmVmIHwgbnVsbCA9IG51bGw7XHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgTm90IHN1cHBvcnRlZCwgdXNlIGBoYXNCYWNrZHJvcGAgaW5zdGVhZC5cclxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDEyLjAuMFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBiYWNrZHJvcCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNCYWNrZHJvcCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbGlja0hpZGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgb3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgb3ZlcmxheVN0eWxlOiBJbmRleGFibGVPYmplY3QgPSB7fTtcclxuICBASW5wdXQoKSBwbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBzZXREcm9wZG93bk1lbnVWYWx1ZTxUIGV4dGVuZHMga2V5b2YgQ21hY3NEcm9wZG93bk1lbnVDb21wb25lbnQ+KGtleTogVCwgdmFsdWU6IENtYWNzRHJvcGRvd25NZW51Q29tcG9uZW50W1RdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kcm9wZG93bk1lbnUpIHtcclxuICAgICAgdGhpcy5kcm9wZG93bk1lbnUuc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cclxuICApIHtcclxuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LWRyb3Bkb3duLXRyaWdnZXInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZHJvcGRvd25NZW51KSB7XHJcbiAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIC8qKiBob3N0IG1vdXNlIHN0YXRlICoqL1xyXG4gICAgICBjb25zdCBob3N0TW91c2VTdGF0ZSQgPSBtZXJnZShcclxuICAgICAgICBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInKS5waXBlKG1hcFRvKHRydWUpKSxcclxuICAgICAgICBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ21vdXNlbGVhdmUnKS5waXBlKG1hcFRvKGZhbHNlKSlcclxuICAgICAgKTtcclxuICAgICAgLyoqIG1lbnUgbW91c2Ugc3RhdGUgKiovXHJcbiAgICAgIGNvbnN0IG1lbnVNb3VzZVN0YXRlJCA9IHRoaXMuZHJvcGRvd25NZW51Lm1vdXNlU3RhdGUkO1xyXG4gICAgICAvKiogbWVyZ2VkIG1vdXNlIHN0YXRlICoqL1xyXG4gICAgICBjb25zdCBtZXJnZWRNb3VzZVN0YXRlJCA9IG1lcmdlKG1lbnVNb3VzZVN0YXRlJCwgaG9zdE1vdXNlU3RhdGUkKTtcclxuICAgICAgLyoqIGhvc3QgY2xpY2sgc3RhdGUgKiovXHJcbiAgICAgIGNvbnN0IGhvc3RDbGlja1N0YXRlJCA9IGZyb21FdmVudChuYXRpdmVFbGVtZW50LCAnY2xpY2snKS5waXBlKG1hcCgoKSA9PiAhdGhpcy52aXNpYmxlKSk7XHJcbiAgICAgIC8qKiB2aXNpYmxlIHN0YXRlIHN3aXRjaCBieSBjbWFjc1RyaWdnZXIgKiovXHJcbiAgICAgIGNvbnN0IHZpc2libGVTdGF0ZUJ5VHJpZ2dlciQgPSB0aGlzLmNtYWNzVHJpZ2dlciQucGlwZShcclxuICAgICAgICBzd2l0Y2hNYXAodHJpZ2dlciA9PiB7XHJcbiAgICAgICAgICBpZiAodHJpZ2dlciA9PT0gJ2hvdmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkTW91c2VTdGF0ZSQ7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhvc3RDbGlja1N0YXRlJDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFTVBUWTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkZXNjZW5kYW50TWVudUl0ZW1DbGljayQgPSB0aGlzLmRyb3Bkb3duTWVudS5kZXNjZW5kYW50TWVudUl0ZW1DbGljayQucGlwZShcclxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5jbGlja0hpZGUpLFxyXG4gICAgICAgIG1hcFRvKGZhbHNlKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkb21UcmlnZ2VyVmlzaWJsZSQgPSBtZXJnZSh2aXNpYmxlU3RhdGVCeVRyaWdnZXIkLCBkZXNjZW5kYW50TWVudUl0ZW1DbGljayQsIHRoaXMub3ZlcmxheUNsb3NlJCkucGlwZShcclxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMuZGlzYWJsZWQpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHZpc2libGUkID0gbWVyZ2UodGhpcy5pbnB1dFZpc2libGUkLCBkb21UcmlnZ2VyVmlzaWJsZSQpO1xyXG4gICAgICBjb21iaW5lTGF0ZXN0KFt2aXNpYmxlJCwgdGhpcy5kcm9wZG93bk1lbnUuaXNDaGlsZFN1Yk1lbnVPcGVuJF0pXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBtYXAoKFt2aXNpYmxlLCBzdWJdKSA9PiB2aXNpYmxlIHx8IHN1YiksXHJcbiAgICAgICAgICBhdWRpdFRpbWUoMTUwKSxcclxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpLFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHZpc2libGU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLm1hdGNoV2lkdGhFbGVtZW50ID8gdGhpcy5tYXRjaFdpZHRoRWxlbWVudC5uYXRpdmVFbGVtZW50IDogbmF0aXZlRWxlbWVudDtcclxuICAgICAgICAgIGNvbnN0IHRyaWdnZXJXaWR0aCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgICBpZiAodGhpcy52aXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIC8qKiBzZXQgdXAgb3ZlcmxheVJlZiAqKi9cclxuICAgICAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgICAgICAgICAvKiogbmV3IG92ZXJsYXkgKiovXHJcbiAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogdHJpZ2dlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgZGlzcG9zZU9uTmF2aWdhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhhc0JhY2tkcm9wOiAodGhpcy5oYXNCYWNrZHJvcCB8fCB0aGlzLmJhY2tkcm9wKSAmJiB0aGlzLmNtYWNzVHJpZ2dlciA9PT0gJ2NsaWNrJyxcclxuICAgICAgICAgICAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKClcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBtZXJnZShcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNobWVudHMoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5vdXRzaWRlUG9pbnRlckV2ZW50cygpLnBpcGUoZmlsdGVyKChlOiBNb3VzZUV2ZW50KSA9PiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYua2V5ZG93bkV2ZW50cygpLnBpcGUoZmlsdGVyKGUgPT4gZS5rZXlDb2RlID09PSBFU0NBUEUgJiYgIWhhc01vZGlmaWVyS2V5KGUpKSlcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAucGlwZShtYXBUbyhmYWxzZSksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUodGhpcy5vdmVybGF5Q2xvc2UkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvKiogdXBkYXRlIG92ZXJsYXkgY29uZmlnICoqL1xyXG4gICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XHJcbiAgICAgICAgICAgICAgb3ZlcmxheUNvbmZpZy5taW5XaWR0aCA9IHRyaWdnZXJXaWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiogb3BlbiBkcm9wZG93biB3aXRoIGFuaW1hdGlvbiAqKi9cclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnMoW1BPU0lUSU9OX01BUFt0aGlzLnBsYWNlbWVudF0sIC4uLmxpc3RPZlBvc2l0aW9uc10pO1xyXG4gICAgICAgICAgICAvKiogcmVzZXQgcG9ydGFsIGlmIG5lZWRlZCAqKi9cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcnRhbCB8fCB0aGlzLnBvcnRhbC50ZW1wbGF0ZVJlZiAhPT0gdGhpcy5kcm9wZG93bk1lbnUhLnRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5kcm9wZG93bk1lbnUhLnRlbXBsYXRlUmVmLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLyoqIGRldGFjaCBvdmVybGF5UmVmIGlmIG5lZWRlZCAqKi9cclxuICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgdmlzaWJsZSwgZGlzYWJsZWQsIG92ZXJsYXlDbGFzc05hbWUsIG92ZXJsYXlTdHlsZSwgY21hY3NUcmlnZ2VyLCBiYWNrZHJvcCB9ID0gY2hhbmdlcztcclxuICAgIGlmIChjbWFjc1RyaWdnZXIpIHtcclxuICAgICAgdGhpcy5jbWFjc1RyaWdnZXIkLm5leHQodGhpcy5jbWFjc1RyaWdnZXIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgdGhpcy5pbnB1dFZpc2libGUkLm5leHQodGhpcy52aXNpYmxlKTtcclxuICAgIH1cclxuICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJycpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRWaXNpYmxlJC5uZXh0KGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG92ZXJsYXlDbGFzc05hbWUpIHtcclxuICAgICAgdGhpcy5zZXREcm9wZG93bk1lbnVWYWx1ZSgnb3ZlcmxheUNsYXNzTmFtZScsIHRoaXMub3ZlcmxheUNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBpZiAob3ZlcmxheVN0eWxlKSB7XHJcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25NZW51VmFsdWUoJ292ZXJsYXlTdHlsZScsIHRoaXMub3ZlcmxheVN0eWxlKTtcclxuICAgIH1cclxuICAgIGlmIChiYWNrZHJvcCkge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oJ2BiYWNrZHJvcGAgaW4gZHJvcGRvd24gY29tcG9uZW50IHdpbGwgYmUgcmVtb3ZlZCBpbiAxMi4wLjAsIHBsZWFzZSB1c2UgYGhhc0JhY2tkcm9wYCBpbnN0ZWFkLicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=