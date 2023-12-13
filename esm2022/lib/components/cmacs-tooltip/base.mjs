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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10b29sdGlwL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUtMLFNBQVMsRUFFVCxZQUFZLEVBSVosUUFBUSxFQUdSLFdBQVcsRUFDWCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBaUIsTUFBTSw0QkFBNEIsQ0FBQztBQUV0SCxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7QUFTOUQsTUFBTSxPQUFnQixzQkFBc0I7SUFzQjFDOztPQUVHO0lBQ0gsSUFBYyxNQUFNO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBRUQsSUFBYyxRQUFRO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFjLFFBQVE7UUFDcEIsT0FBTyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDdEUsQ0FBQztJQUVELElBQWMsVUFBVTtRQUN0QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FB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QUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYXNhcFNjaGVkdWxlciwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBQb3BDb25maXJtQ29uZmlnLCBQb3BvdmVyQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBERUZBVUxUX1RPT0xUSVBfUE9TSVRJT05TLCBnZXRQbGFjZW1lbnROYW1lLCBQT1NJVElPTl9NQVAsIFBPU0lUSU9OX1RZUEUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3ZlcmxheSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nQ2xhc3NJbnRlcmZhY2UsIE5nU3R5bGVJbnRlcmZhY2UsIE56U2FmZUFueSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgaXNOb3ROaWwsIHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eU1hcHBpbmcge1xuICBba2V5OiBzdHJpbmddOiBbc3RyaW5nLCAoKSA9PiB1bmtub3duXTtcbn1cblxuZXhwb3J0IHR5cGUgTnpUb29sdGlwVHJpZ2dlciA9ICdjbGljaycgfCAnZm9jdXMnIHwgJ2hvdmVyJyB8IG51bGw7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIGFycm93UG9pbnRBdENlbnRlcj86IGJvb2xlYW47XG4gIGNvbmZpZz86IFJlcXVpcmVkPFBvcG92ZXJDb25maWcgfCBQb3BDb25maXJtQ29uZmlnPjtcbiAgZGlyZWN0aXZlVGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XG4gIGRpcmVjdGl2ZUNvbnRlbnQ/OiBOelRTVHlwZSB8IG51bGw7XG4gIHRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xuICBjb250ZW50PzogTnpUU1R5cGUgfCBudWxsO1xuICB0cmlnZ2VyPzogTnpUb29sdGlwVHJpZ2dlcjtcbiAgcGxhY2VtZW50Pzogc3RyaW5nIHwgc3RyaW5nW107XG4gIG9yaWdpbj86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbiAgbW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xuICBtb3VzZUxlYXZlRGVsYXk/OiBudW1iZXI7XG4gIG92ZXJsYXlDbGFzc05hbWU/OiBzdHJpbmc7XG4gIG92ZXJsYXlTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2U7XG4gIHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIEZvciBjcmVhdGUgdG9vbHRpcCBkeW5hbWljYWxseS4gVGhpcyBzaG91bGQgYmUgb3ZlcnJpZGUgZm9yIGVhY2ggZGlmZmVyZW50IGNvbXBvbmVudC5cbiAgICovXG4gIHByb3RlY3RlZCBjb21wb25lbnRSZWYhOiBDb21wb25lbnRSZWY8Q21hY3NUb29sdGlwQmFzZUNvbXBvbmVudD47XG5cbiAgLyoqXG4gICAqIFRoaXMgdHJ1ZSB0aXRsZSB0aGF0IHdvdWxkIGJlIHVzZWQgaW4gb3RoZXIgcGFydHMgb24gdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IF90aXRsZSgpOiBOelRTVHlwZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnRpdGxlIHx8IHRoaXMuZGlyZWN0aXZlVGl0bGUgfHwgbnVsbDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgX2NvbnRlbnQoKTogTnpUU1R5cGUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50IHx8IHRoaXMuZGlyZWN0aXZlQ29udGVudCB8fCBudWxsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBfdHJpZ2dlcigpOiBOelRvb2x0aXBUcmlnZ2VyIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMudHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnRyaWdnZXIgOiAnaG92ZXInO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBfcGxhY2VtZW50KCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBwID0gdGhpcy5wbGFjZW1lbnQ7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocCkgJiYgcC5sZW5ndGggPiAwID8gcCA6IHR5cGVvZiBwID09PSAnc3RyaW5nJyAmJiBwID8gW3BdIDogWyd0b3AnXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgX3Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0eXBlb2YgdGhpcy52aXNpYmxlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMudmlzaWJsZSA6IHRoaXMuaW50ZXJuYWxWaXNpYmxlKSB8fCBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgX21vdXNlRW50ZXJEZWxheSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vdXNlRW50ZXJEZWxheSB8fCAwLjE1O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBfbW91c2VMZWF2ZURlbGF5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VMZWF2ZURlbGF5IHx8IDAuMTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgX292ZXJsYXlDbGFzc05hbWUoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheUNsYXNzTmFtZSB8fCBudWxsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBfb3ZlcmxheVN0eWxlKCk6IE5nU3R5bGVJbnRlcmZhY2UgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5U3R5bGUgfHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaW50ZXJuYWxWaXNpYmxlID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIGdldFByb3h5UHJvcGVydHlNYXAoKTogUHJvcGVydHlNYXBwaW5nIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm9BbmltYXRpb246IFsnbm9BbmltYXRpb24nLCAoKSA9PiAhIXRoaXMubm9BbmltYXRpb25dXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudD86IENtYWNzVG9vbHRpcEJhc2VDb21wb25lbnQ7XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHRyaWdnZXJEaXNwb3NhYmxlczogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXTtcblxuICBwcml2YXRlIGRlbGF5VGltZXI/OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByb3RlY3RlZCByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByb3RlY3RlZCBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXG4gICAgcHJvdGVjdGVkIG56Q29uZmlnU2VydmljZT86IE56Q29uZmlnU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IHRyaWdnZXIgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAodHJpZ2dlciAmJiAhdHJpZ2dlci5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xuICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzQnlDaGFuZ2VzKGNoYW5nZXMpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xuICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuXG4gICAgLy8gQ2xlYXIgdG9nZ2xpbmcgdGltZXIuIElzc3VlICMzODc1ICM0MzE3ICM0Mzg2XG4gICAgdGhpcy5jbGVhclRvZ2dsaW5nVGltZXIoKTtcbiAgICB0aGlzLnJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5jb21wb25lbnQ/LnNob3coKTtcbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5jb21wb25lbnQ/LmhpZGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JjZSB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgcG9zaXRpb24uXG4gICAqL1xuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50LnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGR5bmFtaWMgdG9vbHRpcCBjb21wb25lbnQuIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZS5cbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVDb21wb25lbnQoKTogdm9pZCB7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRSZWY7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgQ21hY3NUb29sdGlwQmFzZUNvbXBvbmVudDtcblxuICAgIC8vIFJlbW92ZSB0aGUgY29tcG9uZW50J3MgRE9NIGJlY2F1c2UgaXQgc2hvdWxkIGJlIGluIHRoZSBvdmVybGF5IGNvbnRhaW5lci5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKFxuICAgICAgdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSxcbiAgICAgIGNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XG4gICAgKTtcbiAgICB0aGlzLmNvbXBvbmVudC5zZXRPdmVybGF5T3JpZ2luKHRoaXMub3JpZ2luIHx8IHRoaXMuZWxlbWVudFJlZik7XG5cbiAgICB0aGlzLmluaXRQcm9wZXJ0aWVzKCk7XG5cbiAgICBjb25zdCBuZ1Zpc2libGVDaGFuZ2UkID0gdGhpcy5jb21wb25lbnQuY21hY3NWaXNpYmxlQ2hhbmdlLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG5cbiAgICBuZ1Zpc2libGVDaGFuZ2UkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuaW50ZXJuYWxWaXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xuICAgIH0pO1xuXG4gICAgLy8gSW4gc29tZSBjYXNlcywgdGhlIHJlbmRlcmluZyB0YWtlcyBpbnRvIGFjY291bnQgdGhlIGhlaWdodCBhdCB3aGljaCB0aGUgYGFycm93YCBpcyBpbiB3cm9uZyBwbGFjZSxcbiAgICAvLyBzbyBgY2RrYCBzZXRzIHRoZSBjb250YWluZXIgcG9zaXRpb24gaW5jb3JyZWN0bHkuXG4gICAgLy8gVG8gYXZvaWQgdGhpcywgYWZ0ZXIgcGxhY2luZyB0aGUgYGFycm93YCBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbiwgd2Ugc2hvdWxkIGByZS1jYWxjdWxhdGVgIHRoZSBwb3NpdGlvbiBvZiB0aGUgYG92ZXJsYXlgLlxuICAgIG5nVmlzaWJsZUNoYW5nZSRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHZpc2libGU6IGJvb2xlYW4pID0+IHZpc2libGUpLFxuICAgICAgICBkZWxheSgwLCBhc2FwU2NoZWR1bGVyKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IEJvb2xlYW4odGhpcy5jb21wb25lbnQ/Lm92ZXJsYXk/Lm92ZXJsYXlSZWYpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQ/LnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWdpc3RlclRyaWdnZXJzKCk6IHZvaWQge1xuICAgIC8vIFdoZW4gdGhlIG1ldGhvZCBnZXRzIGludm9rZWQsIGFsbCBwcm9wZXJ0aWVzIGhhcyBiZWVuIHN5bmNlZCB0byB0aGUgZHluYW1pYyBjb21wb25lbnQuXG4gICAgLy8gQWZ0ZXIgcmVtb3ZpbmcgdGhlIG9sZCBBUEksIHdlIGNhbiBqdXN0IGNoZWNrIHRoZSBkaXJlY3RpdmUncyBvd24gYG56VHJpZ2dlcmAuXG4gICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy50cmlnZ2VyO1xuXG4gICAgdGhpcy5yZW1vdmVUcmlnZ2VyTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAodHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgbGV0IG92ZXJsYXlFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZSh0cnVlLCB0cnVlLCB0aGlzLl9tb3VzZUVudGVyRGVsYXkpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZSh0cnVlLCBmYWxzZSwgdGhpcy5fbW91c2VMZWF2ZURlbGF5KTtcbiAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnQ/Lm92ZXJsYXkub3ZlcmxheVJlZiAmJiAhb3ZlcmxheUVsZW1lbnQpIHtcbiAgICAgICAgICAgIG92ZXJsYXlFbGVtZW50ID0gdGhpcy5jb21wb25lbnQub3ZlcmxheS5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaChcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCB0cnVlLCB0aGlzLl9tb3VzZUVudGVyRGVsYXkpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgZmFsc2UsIHRoaXMuX21vdXNlTGVhdmVEZWxheSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0cmlnZ2VyID09PSAnZm9jdXMnKSB7XG4gICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnZm9jdXNpbicsICgpID0+IHRoaXMuc2hvdygpKSk7XG4gICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnZm9jdXNvdXQnLCAoKSA9PiB0aGlzLmhpZGUoKSkpO1xuICAgIH0gZWxzZSBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdjbGljaycsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gRWxzZSBkbyBub3RoaW5nIGJlY2F1c2UgdXNlciB3YW50cyB0byBjb250cm9sIHRoZSB2aXNpYmlsaXR5IHByb2dyYW1tYXRpY2FsbHkuXG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVByb3BlcnRpZXNCeUNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUHJvcGVydGllc0J5S2V5cyhPYmplY3Qua2V5cyhjaGFuZ2VzKSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVByb3BlcnRpZXNCeUtleXMoa2V5cz86IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgY29uc3QgbWFwcGluZ1Byb3BlcnRpZXM6IFByb3BlcnR5TWFwcGluZyA9IHtcbiAgICAgIC8vIGNvbW1vbiBtYXBwaW5nc1xuICAgICAgdGl0bGU6IFsnY21hY3NUaXRsZScsICgpID0+IHRoaXMuX3RpdGxlXSxcbiAgICAgIGRpcmVjdGl2ZVRpdGxlOiBbJ2NtYWNzVGl0bGUnLCAoKSA9PiB0aGlzLl90aXRsZV0sXG4gICAgICBjb250ZW50OiBbJ2NtYWNzQ29udGVudCcsICgpID0+IHRoaXMuX2NvbnRlbnRdLFxuICAgICAgZGlyZWN0aXZlQ29udGVudDogWydjbWFjc0NvbnRlbnQnLCAoKSA9PiB0aGlzLl9jb250ZW50XSxcbiAgICAgIHRyaWdnZXI6IFsnY21hY3NUcmlnZ2VyJywgKCkgPT4gdGhpcy5fdHJpZ2dlcl0sXG4gICAgICBwbGFjZW1lbnQ6IFsnY21hY3NQbGFjZW1lbnQnLCAoKSA9PiB0aGlzLl9wbGFjZW1lbnRdLFxuICAgICAgdmlzaWJsZTogWydjbWFjc1Zpc2libGUnLCAoKSA9PiB0aGlzLl92aXNpYmxlXSxcbiAgICAgIG1vdXNlRW50ZXJEZWxheTogWydjbWFjc01vdXNlRW50ZXJEZWxheScsICgpID0+IHRoaXMuX21vdXNlRW50ZXJEZWxheV0sXG4gICAgICBtb3VzZUxlYXZlRGVsYXk6IFsnY21hY3NNb3VzZUxlYXZlRGVsYXknLCAoKSA9PiB0aGlzLl9tb3VzZUxlYXZlRGVsYXldLFxuICAgICAgb3ZlcmxheUNsYXNzTmFtZTogWydjbWFjc092ZXJsYXlDbGFzc05hbWUnLCAoKSA9PiB0aGlzLl9vdmVybGF5Q2xhc3NOYW1lXSxcbiAgICAgIG92ZXJsYXlTdHlsZTogWydjbWFjc092ZXJsYXlTdHlsZScsICgpID0+IHRoaXMuX292ZXJsYXlTdHlsZV0sXG4gICAgICBhcnJvd1BvaW50QXRDZW50ZXI6IFsnY21hY3NBcnJvd1BvaW50QXRDZW50ZXInLCAoKSA9PiB0aGlzLmFycm93UG9pbnRBdENlbnRlcl0sXG4gICAgICAuLi50aGlzLmdldFByb3h5UHJvcGVydHlNYXAoKVxuICAgIH07XG5cbiAgICAoa2V5cyB8fCBPYmplY3Qua2V5cyhtYXBwaW5nUHJvcGVydGllcykuZmlsdGVyKGtleSA9PiAha2V5LnN0YXJ0c1dpdGgoJ2RpcmVjdGl2ZScpKSkuZm9yRWFjaChcbiAgICAgIChwcm9wZXJ0eTogTnpTYWZlQW55KSA9PiB7XG4gICAgICAgIGlmIChtYXBwaW5nUHJvcGVydGllc1twcm9wZXJ0eV0pIHtcbiAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVGbl0gPSBtYXBwaW5nUHJvcGVydGllc1twcm9wZXJ0eV07XG4gICAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZShuYW1lLCB2YWx1ZUZuKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMuY29tcG9uZW50Py51cGRhdGVCeURpcmVjdGl2ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0UHJvcGVydGllcygpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXNCeUtleXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ29tcG9uZW50VmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5jb21wb25lbnRba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVsYXlFbnRlckxlYXZlKGlzT3JpZ2luOiBib29sZWFuLCBpc0VudGVyOiBib29sZWFuLCBkZWxheTogbnVtYmVyID0gLTEpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XG4gICAgICB0aGlzLmNsZWFyVG9nZ2xpbmdUaW1lcigpO1xuICAgIH0gZWxzZSBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZWxheVRpbWVyID0gdW5kZWZpbmVkO1xuICAgICAgICBpc0VudGVyID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcbiAgICAgIH0sIGRlbGF5ICogMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGBpc09yaWdpbmAgaXMgdXNlZCBkdWUgdG8gdGhlIHRvb2x0aXAgd2lsbCBub3QgaGlkZSBpbW1lZGlhdGVseVxuICAgICAgLy8gKG1heSBjYXVzZWQgYnkgdGhlIGZhZGUtb3V0IGFuaW1hdGlvbikuXG4gICAgICBpc0VudGVyICYmIGlzT3JpZ2luID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMuZm9yRWFjaChkaXNwb3NlID0+IGRpc3Bvc2UoKSk7XG4gICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJUb2dnbGluZ1RpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xuICAgICAgdGhpcy5kZWxheVRpbWVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKClcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENtYWNzVG9vbHRpcEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jbWFjc1Zpc2libGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NtYWNzQXJyb3dQb2ludEF0Q2VudGVyOiBCb29sZWFuSW5wdXQ7XG5cbiAgQFZpZXdDaGlsZCgnb3ZlcmxheScsIHsgc3RhdGljOiBmYWxzZSB9KSBvdmVybGF5ITogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcblxuICBjbWFjc1RpdGxlOiBOelRTVHlwZSB8IG51bGwgPSBudWxsO1xuICBjbWFjc0NvbnRlbnQ6IE56VFNUeXBlIHwgbnVsbCA9IG51bGw7XG4gIGNtYWNzQXJyb3dQb2ludEF0Q2VudGVyOiBib29sZWFuID0gZmFsc2U7XG4gIGNtYWNzT3ZlcmxheUNsYXNzTmFtZSE6IHN0cmluZztcbiAgY21hY3NPdmVybGF5U3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcbiAgY21hY3NCYWNrZHJvcCA9IGZhbHNlO1xuICBjbWFjc01vdXNlRW50ZXJEZWxheT86IG51bWJlcjtcbiAgY21hY3NNb3VzZUxlYXZlRGVsYXk/OiBudW1iZXI7XG5cbiAgY21hY3NWaXNpYmxlQ2hhbmdlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBzZXQgY21hY3NWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgdmlzaWJsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX3Zpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgIHRoaXMuX3Zpc2libGUgPSB2aXNpYmxlO1xuICAgICAgdGhpcy5jbWFjc1Zpc2libGVDaGFuZ2UubmV4dCh2aXNpYmxlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY21hY3NWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG5cbiAgX3Zpc2libGUgPSBmYWxzZTtcblxuICBzZXQgY21hY3NUcmlnZ2VyKHZhbHVlOiBOelRvb2x0aXBUcmlnZ2VyKSB7XG4gICAgdGhpcy5fdHJpZ2dlciA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGNtYWNzVHJpZ2dlcigpOiBOelRvb2x0aXBUcmlnZ2VyIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpZ2dlcjtcbiAgfVxuXG4gIHByb3RlY3RlZCBfdHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XG5cbiAgc2V0IGNtYWNzUGxhY2VtZW50KHZhbHVlOiBQT1NJVElPTl9UWVBFW10pIHtcbiAgICBjb25zdCBwcmVmZXJyZWRQb3NpdGlvbiA9IHZhbHVlLm1hcChwbGFjZW1lbnQgPT4gUE9TSVRJT05fTUFQW3BsYWNlbWVudF0pO1xuICAgIHRoaXMuX3Bvc2l0aW9ucyA9IFsuLi5wcmVmZXJyZWRQb3NpdGlvbiwgLi4uREVGQVVMVF9UT09MVElQX1BPU0lUSU9OU107XG4gIH1cblxuICBwcmVmZXJyZWRQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xuXG4gIG9yaWdpbiE6IEVsZW1lbnRSZWY8TnpTYWZlQW55PjtcblxuICBwdWJsaWMgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBfY2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2UgPSB7fTtcblxuICBfcHJlZml4ID0gJ2FudC10b29sdGlwJztcblxuICBfcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uREVGQVVMVF9UT09MVElQX1BPU0lUSU9OU107XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgICBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY21hY3NWaXNpYmxlQ2hhbmdlLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbWFjc1Zpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICB0aGlzLmNtYWNzVmlzaWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmNtYWNzVmlzaWJsZUNoYW5nZS5uZXh0KHRydWUpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8vIGZvciBsdHIgZm9yIG92ZXJsYXkgdG8gZGlzcGxheSB0b29sdGlwIGluIGNvcnJlY3QgcGxhY2VtZW50IGluIHJ0bCBkaXJlY3Rpb24uXG4gICAgaWYgKHRoaXMub3JpZ2luICYmIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZi5nZXREaXJlY3Rpb24oKSA9PT0gJ3J0bCcpIHtcbiAgICAgIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLnNldERpcmVjdGlvbignbHRyJyk7XG4gICAgfVxuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY21hY3NWaXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbWFjc1Zpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLmNtYWNzVmlzaWJsZUNoYW5nZS5uZXh0KGZhbHNlKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICB1cGRhdGVCeURpcmVjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcblxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgdGhpcy51cGRhdGVWaXNpYmlsaXR5QnlUaXRsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBwb3NpdGlvbi5cbiAgICovXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9yaWdpbiAmJiB0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgdGhpcy5wcmVmZXJyZWRQbGFjZW1lbnQgPSBnZXRQbGFjZW1lbnROYW1lKHBvc2l0aW9uKSE7XG4gICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcblxuICAgIC8vIFdlIGhhdmUgdG8gdHJpZ2dlciBpbW1lZGlhdGUgY2hhbmdlIGRldGVjdGlvbiBvciB0aGUgZWxlbWVudCB3b3VsZCBibGluay5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBzZXRPdmVybGF5T3JpZ2luKG9yaWdpbjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pOiB2b2lkIHtcbiAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG9uQ2xpY2tPdXRzaWRlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9yaWdpbi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgdGhpcy5jbWFjc1RyaWdnZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBjb21wb25lbnQgd2hpbGUgdGhlIGNvbnRlbnQgaXMgZW1wdHkuXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZVZpc2liaWxpdHlCeVRpdGxlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVN0eWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9jbGFzc01hcCA9IHtcbiAgICAgIFt0aGlzLmNtYWNzT3ZlcmxheUNsYXNzTmFtZV06IHRydWUsXG4gICAgICBbYCR7dGhpcy5fcHJlZml4fS1wbGFjZW1lbnQtJHt0aGlzLnByZWZlcnJlZFBsYWNlbWVudH1gXTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRW1wdHkgY29tcG9uZW50IGNhbm5vdCBiZSBvcGVuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgaXNFbXB0eSgpOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb29sdGlwRW1wdHkodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiA/IGZhbHNlIDogdmFsdWUgPT09ICcnIHx8ICFpc05vdE5pbCh2YWx1ZSk7XG59XG4iXX0=