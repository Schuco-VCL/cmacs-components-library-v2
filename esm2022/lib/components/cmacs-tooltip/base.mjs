import { Directive, EventEmitter, Optional, TemplateRef, ViewChild } from '@angular/core';
import { asapScheduler, Subject } from 'rxjs';
import { delay, distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { DEFAULT_TOOLTIP_POSITIONS, getPlacementName, POSITION_MAP } from 'ng-zorro-antd/core/overlay';
import { isNotNil, toBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/no-animation";
import * as i2 from "ng-zorro-antd/core/config";
import * as i3 from "@angular/cdk/bidi";
const _c0 = ["overlay"];
export class NzTooltipBaseDirective {
    /**
     * This true title that would be used in other parts on this component.
     */
    get _title() {
        return this.title || this.directiveTitle || null;
    }
    get _content() {
        return this.content || this.directiveContent || null;
    }
    get _trigger() {
        return typeof this.trigger !== 'undefined' ? this.trigger : 'hover';
    }
    get _placement() {
        const p = this.placement;
        return Array.isArray(p) && p.length > 0 ? p : typeof p === 'string' && p ? [p] : ['top'];
    }
    get _visible() {
        return (typeof this.visible !== 'undefined' ? this.visible : this.internalVisible) || false;
    }
    get _mouseEnterDelay() {
        return this.mouseEnterDelay || 0.15;
    }
    get _mouseLeaveDelay() {
        return this.mouseLeaveDelay || 0.1;
    }
    get _overlayClassName() {
        return this.overlayClassName || null;
    }
    get _overlayStyle() {
        return this.overlayStyle || null;
    }
    getProxyPropertyMap() {
        return {
            noAnimation: ['noAnimation', () => !!this.noAnimation]
        };
    }
    constructor(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this.noAnimation = noAnimation;
        this.nzConfigService = nzConfigService;
        this.visibleChange = new EventEmitter();
        this.internalVisible = false;
        this.destroy$ = new Subject();
        this.triggerDisposables = [];
    }
    ngOnChanges(changes) {
        const { trigger } = changes;
        if (trigger && !trigger.isFirstChange()) {
            this.registerTriggers();
        }
        if (this.component) {
            this.updatePropertiesByChanges(changes);
        }
    }
    ngAfterViewInit() {
        this.createComponent();
        this.registerTriggers();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        // Clear toggling timer. Issue #3875 #4317 #4386
        this.clearTogglingTimer();
        this.removeTriggerListeners();
    }
    show() {
        this.component?.show();
    }
    hide() {
        this.component?.hide();
    }
    /**
     * Force the component to update its position.
     */
    updatePosition() {
        if (this.component) {
            this.component.updatePosition();
        }
    }
    /**
     * Create a dynamic tooltip component. This method can be override.
     */
    createComponent() {
        const componentRef = this.componentRef;
        this.component = componentRef.instance;
        // Remove the component's DOM because it should be in the overlay container.
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
        this.component.setOverlayOrigin(this.origin || this.elementRef);
        this.initProperties();
        const ngVisibleChange$ = this.component.cmacsVisibleChange.pipe(distinctUntilChanged());
        ngVisibleChange$.pipe(takeUntil(this.destroy$)).subscribe((visible) => {
            this.internalVisible = visible;
            this.visibleChange.emit(visible);
        });
        // In some cases, the rendering takes into account the height at which the `arrow` is in wrong place,
        // so `cdk` sets the container position incorrectly.
        // To avoid this, after placing the `arrow` in the correct position, we should `re-calculate` the position of the `overlay`.
        ngVisibleChange$
            .pipe(filter((visible) => visible), delay(0, asapScheduler), filter(() => Boolean(this.component?.overlay?.overlayRef)), takeUntil(this.destroy$))
            .subscribe(() => {
            this.component?.updatePosition();
        });
    }
    registerTriggers() {
        // When the method gets invoked, all properties has been synced to the dynamic component.
        // After removing the old API, we can just check the directive's own `nzTrigger`.
        const el = this.elementRef.nativeElement;
        const trigger = this.trigger;
        this.removeTriggerListeners();
        if (trigger === 'hover') {
            let overlayElement;
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseenter', () => {
                this.delayEnterLeave(true, true, this._mouseEnterDelay);
            }));
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseleave', () => {
                this.delayEnterLeave(true, false, this._mouseLeaveDelay);
                if (this.component?.overlay.overlayRef && !overlayElement) {
                    overlayElement = this.component.overlay.overlayRef.overlayElement;
                    this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseenter', () => {
                        this.delayEnterLeave(false, true, this._mouseEnterDelay);
                    }));
                    this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseleave', () => {
                        this.delayEnterLeave(false, false, this._mouseLeaveDelay);
                    }));
                }
            }));
        }
        else if (trigger === 'focus') {
            this.triggerDisposables.push(this.renderer.listen(el, 'focusin', () => this.show()));
            this.triggerDisposables.push(this.renderer.listen(el, 'focusout', () => this.hide()));
        }
        else if (trigger === 'click') {
            this.triggerDisposables.push(this.renderer.listen(el, 'click', (e) => {
                e.preventDefault();
                this.show();
            }));
        }
        // Else do nothing because user wants to control the visibility programmatically.
    }
    updatePropertiesByChanges(changes) {
        this.updatePropertiesByKeys(Object.keys(changes));
    }
    updatePropertiesByKeys(keys) {
        const mappingProperties = {
            // common mappings
            title: ['cmacsTitle', () => this._title],
            directiveTitle: ['cmacsTitle', () => this._title],
            content: ['cmacsContent', () => this._content],
            directiveContent: ['cmacsContent', () => this._content],
            trigger: ['cmacsTrigger', () => this._trigger],
            placement: ['cmacsPlacement', () => this._placement],
            visible: ['cmacsVisible', () => this._visible],
            mouseEnterDelay: ['cmacsMouseEnterDelay', () => this._mouseEnterDelay],
            mouseLeaveDelay: ['cmacsMouseLeaveDelay', () => this._mouseLeaveDelay],
            overlayClassName: ['cmacsOverlayClassName', () => this._overlayClassName],
            overlayStyle: ['cmacsOverlayStyle', () => this._overlayStyle],
            arrowPointAtCenter: ['cmacsArrowPointAtCenter', () => this.arrowPointAtCenter],
            ...this.getProxyPropertyMap()
        };
        (keys || Object.keys(mappingProperties).filter(key => !key.startsWith('directive'))).forEach((property) => {
            if (mappingProperties[property]) {
                const [name, valueFn] = mappingProperties[property];
                this.updateComponentValue(name, valueFn());
            }
        });
        this.component?.updateByDirective();
    }
    initProperties() {
        this.updatePropertiesByKeys();
    }
    updateComponentValue(key, value) {
        if (typeof value !== 'undefined') {
            // @ts-ignore
            this.component[key] = value;
        }
    }
    delayEnterLeave(isOrigin, isEnter, delay = -1) {
        if (this.delayTimer) {
            this.clearTogglingTimer();
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout(() => {
                this.delayTimer = undefined;
                isEnter ? this.show() : this.hide();
            }, delay * 1000);
        }
        else {
            // `isOrigin` is used due to the tooltip will not hide immediately
            // (may caused by the fade-out animation).
            isEnter && isOrigin ? this.show() : this.hide();
        }
    }
    removeTriggerListeners() {
        this.triggerDisposables.forEach(dispose => dispose());
        this.triggerDisposables.length = 0;
    }
    clearTogglingTimer() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    }
    static { this.ɵfac = function NzTooltipBaseDirective_Factory(t) { return new (t || NzTooltipBaseDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective), i0.ɵɵdirectiveInject(i2.NzConfigService)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NzTooltipBaseDirective, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzTooltipBaseDirective, [{
        type: Directive
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1.NzNoAnimationDirective }, { type: i2.NzConfigService }]; }, null); })();
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class CmacsTooltipBaseComponent {
    set cmacsVisible(value) {
        const visible = toBoolean(value);
        if (this._visible !== visible) {
            this._visible = visible;
            this.cmacsVisibleChange.next(visible);
        }
    }
    get cmacsVisible() {
        return this._visible;
    }
    set cmacsTrigger(value) {
        this._trigger = value;
    }
    get cmacsTrigger() {
        return this._trigger;
    }
    set cmacsPlacement(value) {
        const preferredPosition = value.map(placement => POSITION_MAP[placement]);
        this._positions = [...preferredPosition, ...DEFAULT_TOOLTIP_POSITIONS];
    }
    constructor(cdr, directionality, noAnimation) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.cmacsTitle = null;
        this.cmacsContent = null;
        this.cmacsArrowPointAtCenter = false;
        this.cmacsOverlayStyle = {};
        this.cmacsBackdrop = false;
        this.cmacsVisibleChange = new Subject();
        this._visible = false;
        this._trigger = 'hover';
        this.preferredPlacement = 'top';
        this.dir = 'ltr';
        this._classMap = {};
        this._prefix = 'ant-tooltip';
        this._positions = [...DEFAULT_TOOLTIP_POSITIONS];
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnDestroy() {
        this.cmacsVisibleChange.complete();
        this.destroy$.next();
        this.destroy$.complete();
    }
    show() {
        if (this.cmacsVisible) {
            return;
        }
        if (!this.isEmpty()) {
            this.cmacsVisible = true;
            this.cmacsVisibleChange.next(true);
            this.cdr.detectChanges();
        }
        // for ltr for overlay to display tooltip in correct placement in rtl direction.
        if (this.origin && this.overlay && this.overlay.overlayRef && this.overlay.overlayRef.getDirection() === 'rtl') {
            this.overlay.overlayRef.setDirection('ltr');
        }
    }
    hide() {
        if (!this.cmacsVisible) {
            return;
        }
        this.cmacsVisible = false;
        this.cmacsVisibleChange.next(false);
        this.cdr.detectChanges();
    }
    updateByDirective() {
        this.updateStyles();
        this.cdr.detectChanges();
        Promise.resolve().then(() => {
            this.updatePosition();
            this.updateVisibilityByTitle();
        });
    }
    /**
     * Force the component to update its position.
     */
    updatePosition() {
        if (this.origin && this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    }
    onPositionChange(position) {
        this.preferredPlacement = getPlacementName(position);
        this.updateStyles();
        // We have to trigger immediate change detection or the element would blink.
        this.cdr.detectChanges();
    }
    setOverlayOrigin(origin) {
        this.origin = origin;
        this.cdr.markForCheck();
    }
    onClickOutside(event) {
        if (!this.origin.nativeElement.contains(event.target) && this.cmacsTrigger !== null) {
            this.hide();
        }
    }
    /**
     * Hide the component while the content is empty.
     */
    updateVisibilityByTitle() {
        if (this.isEmpty()) {
            this.hide();
        }
    }
    updateStyles() {
        this._classMap = {
            [this.cmacsOverlayClassName]: true,
            [`${this._prefix}-placement-${this.preferredPlacement}`]: true
        };
    }
    static { this.ɵfac = function CmacsTooltipBaseComponent_Factory(t) { return new (t || CmacsTooltipBaseComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.Directionality, 8), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsTooltipBaseComponent, viewQuery: function CmacsTooltipBaseComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlay = _t.first);
        } } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTooltipBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i3.Directionality, decorators: [{
                type: Optional
            }] }, { type: i1.NzNoAnimationDirective }]; }, { overlay: [{
            type: ViewChild,
            args: ['overlay', { static: false }]
        }] }); })();
export function isTooltipEmpty(value) {
    return value instanceof TemplateRef ? false : value === '' || !isNotNil(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10b29sdGlwL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUtMLFNBQVMsRUFFVCxZQUFZLEVBSVosUUFBUSxFQUdSLFdBQVcsRUFDWCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBaUIsTUFBTSw0QkFBNEIsQ0FBQztBQUV0SCxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7QUFTOUQsTUFBTSxPQUFnQixzQkFBc0I7SUFzQjFDOztPQUVHO0lBQ0gsSUFBYyxNQUFNO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBRUQsSUFBYyxRQUFRO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFjLFFBQVE7UUFDcEIsT0FBTyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDdEUsQ0FBQztJQUVELElBQWMsVUFBVTtRQUN0QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FB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QUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFzYXBTY2hlZHVsZXIsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVsYXksIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgUG9wQ29uZmlybUNvbmZpZywgUG9wb3ZlckNvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IERFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlMsIGdldFBsYWNlbWVudE5hbWUsIFBPU0lUSU9OX01BUCwgUE9TSVRJT05fVFlQRSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdmVybGF5JztcclxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOZ0NsYXNzSW50ZXJmYWNlLCBOZ1N0eWxlSW50ZXJmYWNlLCBOelNhZmVBbnksIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgaXNOb3ROaWwsIHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlNYXBwaW5nIHtcclxuICBba2V5OiBzdHJpbmddOiBbc3RyaW5nLCAoKSA9PiB1bmtub3duXTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTnpUb29sdGlwVHJpZ2dlciA9ICdjbGljaycgfCAnZm9jdXMnIHwgJ2hvdmVyJyB8IG51bGw7XHJcblxyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgYXJyb3dQb2ludEF0Q2VudGVyPzogYm9vbGVhbjtcclxuICBjb25maWc/OiBSZXF1aXJlZDxQb3BvdmVyQ29uZmlnIHwgUG9wQ29uZmlybUNvbmZpZz47XHJcbiAgZGlyZWN0aXZlVGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgZGlyZWN0aXZlQ29udGVudD86IE56VFNUeXBlIHwgbnVsbDtcclxuICB0aXRsZT86IE56VFNUeXBlIHwgbnVsbDtcclxuICBjb250ZW50PzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIHRyaWdnZXI/OiBOelRvb2x0aXBUcmlnZ2VyO1xyXG4gIHBsYWNlbWVudD86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIG9yaWdpbj86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG4gIHZpc2libGU/OiBib29sZWFuO1xyXG4gIG1vdXNlRW50ZXJEZWxheT86IG51bWJlcjtcclxuICBtb3VzZUxlYXZlRGVsYXk/OiBudW1iZXI7XHJcbiAgb3ZlcmxheUNsYXNzTmFtZT86IHN0cmluZztcclxuICBvdmVybGF5U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gIHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBjcmVhdGUgdG9vbHRpcCBkeW5hbWljYWxseS4gVGhpcyBzaG91bGQgYmUgb3ZlcnJpZGUgZm9yIGVhY2ggZGlmZmVyZW50IGNvbXBvbmVudC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgY29tcG9uZW50UmVmITogQ29tcG9uZW50UmVmPENtYWNzVG9vbHRpcEJhc2VDb21wb25lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIHRydWUgdGl0bGUgdGhhdCB3b3VsZCBiZSB1c2VkIGluIG90aGVyIHBhcnRzIG9uIHRoaXMgY29tcG9uZW50LlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXQgX3RpdGxlKCk6IE56VFNUeXBlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZSB8fCB0aGlzLmRpcmVjdGl2ZVRpdGxlIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IF9jb250ZW50KCk6IE56VFNUeXBlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50IHx8IHRoaXMuZGlyZWN0aXZlQ29udGVudCB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBfdHJpZ2dlcigpOiBOelRvb2x0aXBUcmlnZ2VyIHtcclxuICAgIHJldHVybiB0eXBlb2YgdGhpcy50cmlnZ2VyICE9PSAndW5kZWZpbmVkJyA/IHRoaXMudHJpZ2dlciA6ICdob3Zlcic7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IF9wbGFjZW1lbnQoKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgcCA9IHRoaXMucGxhY2VtZW50O1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocCkgJiYgcC5sZW5ndGggPiAwID8gcCA6IHR5cGVvZiBwID09PSAnc3RyaW5nJyAmJiBwID8gW3BdIDogWyd0b3AnXTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgX3Zpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiB0aGlzLnZpc2libGUgIT09ICd1bmRlZmluZWQnID8gdGhpcy52aXNpYmxlIDogdGhpcy5pbnRlcm5hbFZpc2libGUpIHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBfbW91c2VFbnRlckRlbGF5KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5tb3VzZUVudGVyRGVsYXkgfHwgMC4xNTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgX21vdXNlTGVhdmVEZWxheSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubW91c2VMZWF2ZURlbGF5IHx8IDAuMTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgX292ZXJsYXlDbGFzc05hbWUoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5Q2xhc3NOYW1lIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IF9vdmVybGF5U3R5bGUoKTogTmdTdHlsZUludGVyZmFjZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVN0eWxlIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGludGVybmFsVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgZ2V0UHJveHlQcm9wZXJ0eU1hcCgpOiBQcm9wZXJ0eU1hcHBpbmcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm9BbmltYXRpb246IFsnbm9BbmltYXRpb24nLCAoKSA9PiAhIXRoaXMubm9BbmltYXRpb25dXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50PzogQ21hY3NUb29sdGlwQmFzZUNvbXBvbmVudDtcclxuXHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgdHJpZ2dlckRpc3Bvc2FibGVzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdO1xyXG5cclxuICBwcml2YXRlIGRlbGF5VGltZXI/OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcm90ZWN0ZWQgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJvdGVjdGVkIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICAgIHByb3RlY3RlZCBuekNvbmZpZ1NlcnZpY2U/OiBOekNvbmZpZ1NlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IHRyaWdnZXIgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKHRyaWdnZXIgJiYgIXRyaWdnZXIuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXNCeUNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyaWdnZXJzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG5cclxuICAgIC8vIENsZWFyIHRvZ2dsaW5nIHRpbWVyLiBJc3N1ZSAjMzg3NSAjNDMxNyAjNDM4NlxyXG4gICAgdGhpcy5jbGVhclRvZ2dsaW5nVGltZXIoKTtcclxuICAgIHRoaXMucmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIHRoaXMuY29tcG9uZW50Py5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb21wb25lbnQ/LmhpZGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBwb3NpdGlvbi5cclxuICAgKi9cclxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmNvbXBvbmVudC51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgZHluYW1pYyB0b29sdGlwIGNvbXBvbmVudC4gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlLlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBjcmVhdGVDb21wb25lbnQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudFJlZjtcclxuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIENtYWNzVG9vbHRpcEJhc2VDb21wb25lbnQ7XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSBjb21wb25lbnQncyBET00gYmVjYXVzZSBpdCBzaG91bGQgYmUgaW4gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChcclxuICAgICAgdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSxcclxuICAgICAgY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRcclxuICAgICk7XHJcbiAgICB0aGlzLmNvbXBvbmVudC5zZXRPdmVybGF5T3JpZ2luKHRoaXMub3JpZ2luIHx8IHRoaXMuZWxlbWVudFJlZik7XHJcblxyXG4gICAgdGhpcy5pbml0UHJvcGVydGllcygpO1xyXG5cclxuICAgIGNvbnN0IG5nVmlzaWJsZUNoYW5nZSQgPSB0aGlzLmNvbXBvbmVudC5jbWFjc1Zpc2libGVDaGFuZ2UucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcclxuXHJcbiAgICBuZ1Zpc2libGVDaGFuZ2UkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKHZpc2libGU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5pbnRlcm5hbFZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEluIHNvbWUgY2FzZXMsIHRoZSByZW5kZXJpbmcgdGFrZXMgaW50byBhY2NvdW50IHRoZSBoZWlnaHQgYXQgd2hpY2ggdGhlIGBhcnJvd2AgaXMgaW4gd3JvbmcgcGxhY2UsXHJcbiAgICAvLyBzbyBgY2RrYCBzZXRzIHRoZSBjb250YWluZXIgcG9zaXRpb24gaW5jb3JyZWN0bHkuXHJcbiAgICAvLyBUbyBhdm9pZCB0aGlzLCBhZnRlciBwbGFjaW5nIHRoZSBgYXJyb3dgIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uLCB3ZSBzaG91bGQgYHJlLWNhbGN1bGF0ZWAgdGhlIHBvc2l0aW9uIG9mIHRoZSBgb3ZlcmxheWAuXHJcbiAgICBuZ1Zpc2libGVDaGFuZ2UkXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcigodmlzaWJsZTogYm9vbGVhbikgPT4gdmlzaWJsZSksXHJcbiAgICAgICAgZGVsYXkoMCwgYXNhcFNjaGVkdWxlciksXHJcbiAgICAgICAgZmlsdGVyKCgpID0+IEJvb2xlYW4odGhpcy5jb21wb25lbnQ/Lm92ZXJsYXk/Lm92ZXJsYXlSZWYpKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudD8udXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVnaXN0ZXJUcmlnZ2VycygpOiB2b2lkIHtcclxuICAgIC8vIFdoZW4gdGhlIG1ldGhvZCBnZXRzIGludm9rZWQsIGFsbCBwcm9wZXJ0aWVzIGhhcyBiZWVuIHN5bmNlZCB0byB0aGUgZHluYW1pYyBjb21wb25lbnQuXHJcbiAgICAvLyBBZnRlciByZW1vdmluZyB0aGUgb2xkIEFQSSwgd2UgY2FuIGp1c3QgY2hlY2sgdGhlIGRpcmVjdGl2ZSdzIG93biBgbnpUcmlnZ2VyYC5cclxuICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy50cmlnZ2VyO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpO1xyXG5cclxuICAgIGlmICh0cmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgIGxldCBvdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgdHJ1ZSwgdGhpcy5fbW91c2VFbnRlckRlbGF5KTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKFxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIGZhbHNlLCB0aGlzLl9tb3VzZUxlYXZlRGVsYXkpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50Py5vdmVybGF5Lm92ZXJsYXlSZWYgJiYgIW92ZXJsYXlFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXlFbGVtZW50ID0gdGhpcy5jb21wb25lbnQub3ZlcmxheS5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50O1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKFxyXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCB0cnVlLCB0aGlzLl9tb3VzZUVudGVyRGVsYXkpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIGZhbHNlLCB0aGlzLl9tb3VzZUxlYXZlRGVsYXkpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodHJpZ2dlciA9PT0gJ2ZvY3VzJykge1xyXG4gICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnZm9jdXNpbicsICgpID0+IHRoaXMuc2hvdygpKSk7XHJcbiAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2godGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdmb2N1c291dCcsICgpID0+IHRoaXMuaGlkZSgpKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaChcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBFbHNlIGRvIG5vdGhpbmcgYmVjYXVzZSB1c2VyIHdhbnRzIHRvIGNvbnRyb2wgdGhlIHZpc2liaWxpdHkgcHJvZ3JhbW1hdGljYWxseS5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUHJvcGVydGllc0J5Q2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXNCeUtleXMoT2JqZWN0LmtleXMoY2hhbmdlcykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVQcm9wZXJ0aWVzQnlLZXlzKGtleXM/OiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgY29uc3QgbWFwcGluZ1Byb3BlcnRpZXM6IFByb3BlcnR5TWFwcGluZyA9IHtcclxuICAgICAgLy8gY29tbW9uIG1hcHBpbmdzXHJcbiAgICAgIHRpdGxlOiBbJ2NtYWNzVGl0bGUnLCAoKSA9PiB0aGlzLl90aXRsZV0sXHJcbiAgICAgIGRpcmVjdGl2ZVRpdGxlOiBbJ2NtYWNzVGl0bGUnLCAoKSA9PiB0aGlzLl90aXRsZV0sXHJcbiAgICAgIGNvbnRlbnQ6IFsnY21hY3NDb250ZW50JywgKCkgPT4gdGhpcy5fY29udGVudF0sXHJcbiAgICAgIGRpcmVjdGl2ZUNvbnRlbnQ6IFsnY21hY3NDb250ZW50JywgKCkgPT4gdGhpcy5fY29udGVudF0sXHJcbiAgICAgIHRyaWdnZXI6IFsnY21hY3NUcmlnZ2VyJywgKCkgPT4gdGhpcy5fdHJpZ2dlcl0sXHJcbiAgICAgIHBsYWNlbWVudDogWydjbWFjc1BsYWNlbWVudCcsICgpID0+IHRoaXMuX3BsYWNlbWVudF0sXHJcbiAgICAgIHZpc2libGU6IFsnY21hY3NWaXNpYmxlJywgKCkgPT4gdGhpcy5fdmlzaWJsZV0sXHJcbiAgICAgIG1vdXNlRW50ZXJEZWxheTogWydjbWFjc01vdXNlRW50ZXJEZWxheScsICgpID0+IHRoaXMuX21vdXNlRW50ZXJEZWxheV0sXHJcbiAgICAgIG1vdXNlTGVhdmVEZWxheTogWydjbWFjc01vdXNlTGVhdmVEZWxheScsICgpID0+IHRoaXMuX21vdXNlTGVhdmVEZWxheV0sXHJcbiAgICAgIG92ZXJsYXlDbGFzc05hbWU6IFsnY21hY3NPdmVybGF5Q2xhc3NOYW1lJywgKCkgPT4gdGhpcy5fb3ZlcmxheUNsYXNzTmFtZV0sXHJcbiAgICAgIG92ZXJsYXlTdHlsZTogWydjbWFjc092ZXJsYXlTdHlsZScsICgpID0+IHRoaXMuX292ZXJsYXlTdHlsZV0sXHJcbiAgICAgIGFycm93UG9pbnRBdENlbnRlcjogWydjbWFjc0Fycm93UG9pbnRBdENlbnRlcicsICgpID0+IHRoaXMuYXJyb3dQb2ludEF0Q2VudGVyXSxcclxuICAgICAgLi4udGhpcy5nZXRQcm94eVByb3BlcnR5TWFwKClcclxuICAgIH07XHJcblxyXG4gICAgKGtleXMgfHwgT2JqZWN0LmtleXMobWFwcGluZ1Byb3BlcnRpZXMpLmZpbHRlcihrZXkgPT4gIWtleS5zdGFydHNXaXRoKCdkaXJlY3RpdmUnKSkpLmZvckVhY2goXHJcbiAgICAgIChwcm9wZXJ0eTogTnpTYWZlQW55KSA9PiB7XHJcbiAgICAgICAgaWYgKG1hcHBpbmdQcm9wZXJ0aWVzW3Byb3BlcnR5XSkge1xyXG4gICAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlRm5dID0gbWFwcGluZ1Byb3BlcnRpZXNbcHJvcGVydHldO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZShuYW1lLCB2YWx1ZUZuKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmNvbXBvbmVudD8udXBkYXRlQnlEaXJlY3RpdmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFByb3BlcnRpZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXNCeUtleXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ29tcG9uZW50VmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBOelNhZmVBbnkpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy5jb21wb25lbnRba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWxheUVudGVyTGVhdmUoaXNPcmlnaW46IGJvb2xlYW4sIGlzRW50ZXI6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIgPSAtMSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xyXG4gICAgICB0aGlzLmNsZWFyVG9nZ2xpbmdUaW1lcigpO1xyXG4gICAgfSBlbHNlIGlmIChkZWxheSA+IDApIHtcclxuICAgICAgdGhpcy5kZWxheVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kZWxheVRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlzRW50ZXIgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG4gICAgICB9LCBkZWxheSAqIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gYGlzT3JpZ2luYCBpcyB1c2VkIGR1ZSB0byB0aGUgdG9vbHRpcCB3aWxsIG5vdCBoaWRlIGltbWVkaWF0ZWx5XHJcbiAgICAgIC8vIChtYXkgY2F1c2VkIGJ5IHRoZSBmYWRlLW91dCBhbmltYXRpb24pLlxyXG4gICAgICBpc0VudGVyICYmIGlzT3JpZ2luID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpOiB2b2lkIHtcclxuICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLmZvckVhY2goZGlzcG9zZSA9PiBkaXNwb3NlKCkpO1xyXG4gICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJUb2dnbGluZ1RpbWVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVyKTtcclxuICAgICAgdGhpcy5kZWxheVRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSgpXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ21hY3NUb29sdGlwQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY21hY3NWaXNpYmxlOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NtYWNzQXJyb3dQb2ludEF0Q2VudGVyOiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ292ZXJsYXknLCB7IHN0YXRpYzogZmFsc2UgfSkgb3ZlcmxheSE6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcblxyXG4gIGNtYWNzVGl0bGU6IE56VFNUeXBlIHwgbnVsbCA9IG51bGw7XHJcbiAgY21hY3NDb250ZW50OiBOelRTVHlwZSB8IG51bGwgPSBudWxsO1xyXG4gIGNtYWNzQXJyb3dQb2ludEF0Q2VudGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY21hY3NPdmVybGF5Q2xhc3NOYW1lITogc3RyaW5nO1xyXG4gIGNtYWNzT3ZlcmxheVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlID0ge307XHJcbiAgY21hY3NCYWNrZHJvcCA9IGZhbHNlO1xyXG4gIGNtYWNzTW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xyXG4gIGNtYWNzTW91c2VMZWF2ZURlbGF5PzogbnVtYmVyO1xyXG5cclxuICBjbWFjc1Zpc2libGVDaGFuZ2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICBzZXQgY21hY3NWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCB2aXNpYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIGlmICh0aGlzLl92aXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuX3Zpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICB0aGlzLmNtYWNzVmlzaWJsZUNoYW5nZS5uZXh0KHZpc2libGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNtYWNzVmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgX3Zpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgc2V0IGNtYWNzVHJpZ2dlcih2YWx1ZTogTnpUb29sdGlwVHJpZ2dlcikge1xyXG4gICAgdGhpcy5fdHJpZ2dlciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNtYWNzVHJpZ2dlcigpOiBOelRvb2x0aXBUcmlnZ2VyIHtcclxuICAgIHJldHVybiB0aGlzLl90cmlnZ2VyO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF90cmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyID0gJ2hvdmVyJztcclxuXHJcbiAgc2V0IGNtYWNzUGxhY2VtZW50KHZhbHVlOiBQT1NJVElPTl9UWVBFW10pIHtcclxuICAgIGNvbnN0IHByZWZlcnJlZFBvc2l0aW9uID0gdmFsdWUubWFwKHBsYWNlbWVudCA9PiBQT1NJVElPTl9NQVBbcGxhY2VtZW50XSk7XHJcbiAgICB0aGlzLl9wb3NpdGlvbnMgPSBbLi4ucHJlZmVycmVkUG9zaXRpb24sIC4uLkRFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlNdO1xyXG4gIH1cclxuXHJcbiAgcHJlZmVycmVkUGxhY2VtZW50OiBzdHJpbmcgPSAndG9wJztcclxuXHJcbiAgb3JpZ2luITogRWxlbWVudFJlZjxOelNhZmVBbnk+O1xyXG5cclxuICBwdWJsaWMgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuXHJcbiAgX2NsYXNzTWFwOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XHJcblxyXG4gIF9wcmVmaXggPSAnYW50LXRvb2x0aXAnO1xyXG5cclxuICBfcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uREVGQVVMVF9UT09MVElQX1BPU0lUSU9OU107XHJcblxyXG4gIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcclxuICAgIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNtYWNzVmlzaWJsZUNoYW5nZS5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY21hY3NWaXNpYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHRoaXMuY21hY3NWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jbWFjc1Zpc2libGVDaGFuZ2UubmV4dCh0cnVlKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvciBsdHIgZm9yIG92ZXJsYXkgdG8gZGlzcGxheSB0b29sdGlwIGluIGNvcnJlY3QgcGxhY2VtZW50IGluIHJ0bCBkaXJlY3Rpb24uXHJcbiAgICBpZiAodGhpcy5vcmlnaW4gJiYgdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLmdldERpcmVjdGlvbigpID09PSAncnRsJykge1xyXG4gICAgICB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZi5zZXREaXJlY3Rpb24oJ2x0cicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5jbWFjc1Zpc2libGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY21hY3NWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNtYWNzVmlzaWJsZUNoYW5nZS5uZXh0KGZhbHNlKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUJ5RGlyZWN0aXZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVZpc2liaWxpdHlCeVRpdGxlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBwb3NpdGlvbi5cclxuICAgKi9cclxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9yaWdpbiAmJiB0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5wcmVmZXJyZWRQbGFjZW1lbnQgPSBnZXRQbGFjZW1lbnROYW1lKHBvc2l0aW9uKSE7XHJcbiAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xyXG5cclxuICAgIC8vIFdlIGhhdmUgdG8gdHJpZ2dlciBpbW1lZGlhdGUgY2hhbmdlIGRldGVjdGlvbiBvciB0aGUgZWxlbWVudCB3b3VsZCBibGluay5cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHNldE92ZXJsYXlPcmlnaW4ob3JpZ2luOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgdGhpcy5vcmlnaW4gPSBvcmlnaW47XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tPdXRzaWRlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3JpZ2luLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiB0aGlzLmNtYWNzVHJpZ2dlciAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGUgdGhlIGNvbXBvbmVudCB3aGlsZSB0aGUgY29udGVudCBpcyBlbXB0eS5cclxuICAgKi9cclxuICBwcml2YXRlIHVwZGF0ZVZpc2liaWxpdHlCeVRpdGxlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZVN0eWxlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NsYXNzTWFwID0ge1xyXG4gICAgICBbdGhpcy5jbWFjc092ZXJsYXlDbGFzc05hbWVdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5fcHJlZml4fS1wbGFjZW1lbnQtJHt0aGlzLnByZWZlcnJlZFBsYWNlbWVudH1gXTogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtcHR5IGNvbXBvbmVudCBjYW5ub3QgYmUgb3BlbmVkLlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpc0VtcHR5KCk6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Rvb2x0aXBFbXB0eSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgPyBmYWxzZSA6IHZhbHVlID09PSAnJyB8fCAhaXNOb3ROaWwodmFsdWUpO1xyXG59XHJcbiJdfQ==