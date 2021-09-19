import { Component, Output, EventEmitter, Input, ViewChildren, ViewChild, Inject, InjectionToken } from '@angular/core';
import { ThumbnailsAnimations } from '../../models/thumbnails/animations/thumbnails-animations';
import { ThumbnailsVisibilityAnimator } from '../../models/thumbnails/animations/thumbnails-visibility-animator';
import { ThumbnailsSliceAnimator } from '../../models/thumbnails/animations/thumbnails-slice-animator';
import * as i0 from "@angular/core";
import * as i1 from "../../services/lightbox-configuration.service";
import * as i2 from "@angular/common";
const _c0 = ["thumnailsContainer"];
const _c1 = ["thumnailsList"];
const _c2 = ["thumnails"];
const _c3 = function (a0) { return { "active": a0 }; };
function LightboxThumbnailsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4, 5);
    i0.ɵɵlistener("tap", function LightboxThumbnailsComponent_div_4_Template_div_tap_0_listener() { i0.ɵɵrestoreView(_r6); const item_r3 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onTap(item_r3); });
    i0.ɵɵelement(2, "img", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r2.thumbnailsWidth)("height", ctx_r2.thumbnailsHeight);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c3, item_r3 === ctx_r2.activeItem));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("title", item_r3.title);
    i0.ɵɵproperty("src", ctx_r2.getItemSrc(item_r3), i0.ɵɵsanitizeUrl);
} }
export const WINDOW = new InjectionToken('Window');
export function _window() { return window; }
export class LightboxThumbnailsComponent {
    constructor(_lightboxConfigurationService, _win) {
        this._lightboxConfigurationService = _lightboxConfigurationService;
        this._win = _win;
        this.items = [];
        this.selectEvent = new EventEmitter();
        this._state = 'closed';
    }
    ngOnInit() {
        if (this._win.innerWidth <= 767) {
            this.thickness = 80;
        }
        else if (this._win.innerWidth <= 1023) {
            this.thickness = 120;
        }
        else if (this._win.innerWidth > 1023) {
            this.thickness = 170;
        }
        this.checkThumbnailsDimensions();
        this.thumbnailsVisibilityAnimator = new ThumbnailsVisibilityAnimator(this.direction, this.thickness);
        this.thumbnailsSliceAnimator = new ThumbnailsSliceAnimator(this.direction);
    }
    get direction() {
        return this.config.controls.thumbnails.position === 'left' || this.config.controls.thumbnails.position === 'right' ? 'vertical' : 'horizontal';
    }
    get config() {
        return this._lightboxConfigurationService;
    }
    open() {
        if (!this.config.controls.thumbnails.disable && this._state !== 'opened') {
            this._state = 'opened';
            this.thumbnailsVisibilityAnimator.show(this.config.animations.thumbnailsShow.duration, null, null);
        }
    }
    close() {
        if (!this.config.controls.thumbnails.disable && this._state !== 'closed') {
            this._state = 'closed';
            this.thumbnailsVisibilityAnimator.hide(this.config.animations.thumbnailsHide.duration, null, null);
        }
    }
    toggle() {
        if (!this.config.controls.thumbnails.disable) {
            if (this._state === 'opened') {
                this.close();
            }
            else {
                this.open();
            }
        }
    }
    resize() {
        if (this._win.innerWidth <= 767 && this.thickness !== 80) {
            this.thickness = 80;
            this._refreshThickness();
        }
        else if (this._win.innerWidth <= 1023 && this._win.innerWidth > 767 && this.thickness !== 120) {
            this.thickness = 120;
            this._refreshThickness();
        }
        else if (this._win.innerWidth > 1023 && this.thickness !== 170) {
            this.thickness = 170;
            this._refreshThickness();
        }
        setTimeout(() => {
            this._animateSlice(this.activeItem, 0);
        }, 0);
    }
    onTap(item) {
        if (item !== this.activeItem) {
            this.selectEvent.emit(item);
        }
    }
    selectItem(item) {
        if (!this.config.controls.thumbnails.disable) {
            this.activeItem = item;
            this._animateSlice(this.activeItem, this.config.animations.itemSlice.duration);
        }
    }
    onWheel(event) {
        let top = this._thumnailsListRef.nativeElement.offsetTop - 12;
        if (event.deltaY > 0) {
            top -= 50;
        }
        else {
            top += 50;
        }
        top = this._getTop(top);
        this._thumnailsListRef.nativeElement.style.top = top + 'px';
        this.thumbnailsSliceAnimator.animation.params.top = top;
    }
    onSwipe(event) {
        if ((event.type === 'swipeleft' || event.type === 'swiperight') && this.direction === 'horizontal') {
            let left = this._thumnailsListRef.nativeElement.offsetLeft - 12;
            left += event.deltaX;
            this.thumbnailsSliceAnimator.slice(this._getLeft(left), this.config.animations.thumbnailsSlice.duration);
        }
        if ((event.type === 'swipeup' || event.type === 'swipedown') && this.direction === 'vertical') {
            let top = this._thumnailsListRef.nativeElement.offsetTop - 12;
            top += event.deltaY;
            this.thumbnailsSliceAnimator.slice(this._getTop(top), this.config.animations.thumbnailsSlice.duration);
        }
    }
    getItemSrc(item) {
        if (item.src) {
            return item.src;
        }
        if (item.xsSrc) {
            return item.xsSrc;
        }
        if (item.smSrc) {
            return item.smSrc;
        }
        if (item.mdSrc) {
            return item.mdSrc;
        }
        if (item.lgSrc) {
            return item.lgSrc;
        }
        if (item.xlSrc) {
            return item.xlSrc;
        }
        return '';
    }
    checkDirection() {
        if (this.direction === 'vertical') {
            this.thumbnailsSliceAnimator.setDirection('vertical');
            this.thumbnailsVisibilityAnimator.setDirection('vertical');
        }
        else {
            this.thumbnailsSliceAnimator.setDirection('horizontal');
            this.thumbnailsVisibilityAnimator.setDirection('horizontal');
        }
    }
    checkThumbnailsDimensions() {
        if (this.direction === 'vertical') {
            this.thumbnailsWidth = this.thickness + 'px';
            this.thumbnailsHeight = 'auto';
        }
        else {
            this.thumbnailsWidth = 'auto';
            this.thumbnailsHeight = this.thickness + 'px';
        }
    }
    _refreshThickness() {
        this.thumbnailsVisibilityAnimator.setThickness(0, this.thickness);
        this.checkThumbnailsDimensions();
    }
    _animateSlice(item, duration) {
        const activeItemRef = this._thumnailsRef.toArray()[this.items.indexOf(item)];
        if (this.direction === 'horizontal') {
            const left = Math.round(((this._thumnailsContainerRef.nativeElement.clientWidth - activeItemRef.nativeElement.clientWidth) / 2) - activeItemRef.nativeElement.offsetLeft);
            this.thumbnailsSliceAnimator.slice(this._getLeft(left), duration);
        }
        else {
            const top = Math.round(((this._thumnailsContainerRef.nativeElement.clientHeight - activeItemRef.nativeElement.clientHeight) / 2) - activeItemRef.nativeElement.offsetTop);
            this.thumbnailsSliceAnimator.slice(this._getTop(top), duration);
        }
    }
    _getTop(value) {
        let top = value;
        if (top < (this._thumnailsContainerRef.nativeElement.clientHeight - this._thumnailsListRef.nativeElement.clientHeight + 12)) {
            top = this._thumnailsContainerRef.nativeElement.clientHeight - this._thumnailsListRef.nativeElement.clientHeight + 12;
        }
        if (top > 0) {
            top = 0;
        }
        return top;
    }
    _getLeft(value) {
        let left = value;
        if (left < (this._thumnailsContainerRef.nativeElement.clientWidth - this._thumnailsListRef.nativeElement.clientWidth + 12)) {
            left = this._thumnailsContainerRef.nativeElement.clientWidth - this._thumnailsListRef.nativeElement.clientWidth + 12;
        }
        if (left > 0) {
            left = 0;
        }
        return left;
    }
}
LightboxThumbnailsComponent.ɵfac = function LightboxThumbnailsComponent_Factory(t) { return new (t || LightboxThumbnailsComponent)(i0.ɵɵdirectiveInject(i1.LightboxConfigurationService), i0.ɵɵdirectiveInject(WINDOW)); };
LightboxThumbnailsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LightboxThumbnailsComponent, selectors: [["lightbox-thumbnails"]], viewQuery: function LightboxThumbnailsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
        i0.ɵɵviewQuery(_c1, 1);
        i0.ɵɵviewQuery(_c2, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._thumnailsContainerRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._thumnailsListRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._thumnailsRef = _t);
    } }, hostVars: 1, hostBindings: function LightboxThumbnailsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵsyntheticHostListener("@thumbnailsVisibility.start", function LightboxThumbnailsComponent_animation_thumbnailsVisibility_start_HostBindingHandler($event) { return ctx.thumbnailsVisibilityAnimator.animationStart($event); })("@thumbnailsVisibility.done", function LightboxThumbnailsComponent_animation_thumbnailsVisibility_done_HostBindingHandler($event) { return ctx.thumbnailsVisibilityAnimator.animationDone($event); });
    } if (rf & 2) {
        i0.ɵɵsyntheticHostProperty("@thumbnailsVisibility", ctx.thumbnailsVisibilityAnimator.animation);
    } }, inputs: { items: "items" }, outputs: { selectEvent: "selectEvent" }, features: [i0.ɵɵProvidersFeature([
            { provide: WINDOW, useFactory: _window }
        ])], decls: 5, vars: 2, consts: [[1, "thumbnail-container", 3, "swipeleft", "swiperight", "swipeup", "swipedown", "wheel"], ["thumnailsContainer", ""], ["thumnailsList", ""], ["class", "thumbnail", 3, "width", "height", "ngClass", "tap", 4, "ngFor", "ngForOf"], [1, "thumbnail", 3, "ngClass", "tap"], ["thumnails", ""], [3, "src", "title"]], template: function LightboxThumbnailsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("swipeleft", function LightboxThumbnailsComponent_Template_div_swipeleft_0_listener($event) { return ctx.onSwipe($event); })("swiperight", function LightboxThumbnailsComponent_Template_div_swiperight_0_listener($event) { return ctx.onSwipe($event); })("swipeup", function LightboxThumbnailsComponent_Template_div_swipeup_0_listener($event) { return ctx.onSwipe($event); })("swipedown", function LightboxThumbnailsComponent_Template_div_swipedown_0_listener($event) { return ctx.onSwipe($event); })("wheel", function LightboxThumbnailsComponent_Template_div_wheel_0_listener($event) { return ctx.onWheel($event); });
        i0.ɵɵelementStart(2, "div", null, 2);
        i0.ɵɵlistener("@thumbnailsSlice.start", function LightboxThumbnailsComponent_Template_div_animation_thumbnailsSlice_start_2_listener($event) { return ctx.thumbnailsSliceAnimator.animationStart($event); })("@thumbnailsSlice.done", function LightboxThumbnailsComponent_Template_div_animation_thumbnailsSlice_done_2_listener($event) { return ctx.thumbnailsSliceAnimator.animationDone($event); });
        i0.ɵɵtemplate(4, LightboxThumbnailsComponent_div_4_Template, 3, 9, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("@thumbnailsSlice", ctx.thumbnailsSliceAnimator.animation);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [i2.NgForOf, i2.NgClass], styles: ["[_nghost-%COMP%]{background-color:#222;flex:1 1 0%;box-sizing:border-box;z-index:2;position:relative}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]{overflow:hidden}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;position:relative}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{display:inline-block;cursor:pointer}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;pointer-events:none}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:default}@media (max-width:359px){[_nghost-%COMP%]{display:none}}.vertical-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]{margin:12px 0 0;height:calc(100% - 24px)}.vertical-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex-direction:column}.vertical-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{margin-bottom:12px}.vertical-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:calc(100% - 24px);margin-left:12px;margin-right:12px}.vertical-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:calc(100% - 12px);margin-left:6px;margin-right:6px}.horizontal-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]{height:100%;margin:0 0 0 12px;width:calc(100% - 24px)}.horizontal-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:100%;white-space:nowrap}.horizontal-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{margin-right:12px}.horizontal-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:calc(100% - 24px);margin-top:12px;margin-bottom:12px}.horizontal-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:calc(100% - 12px);margin-top:6px;margin-bottom:6px}"], data: { animation: [ThumbnailsAnimations.visibilityAnimation, ThumbnailsAnimations.sliceAnimation] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxThumbnailsComponent, [{
        type: Component,
        args: [{
                selector: 'lightbox-thumbnails',
                templateUrl: 'lightbox-thumbnails.component.html',
                styleUrls: ['lightbox-thumbnails.component.scss'],
                animations: [ThumbnailsAnimations.visibilityAnimation, ThumbnailsAnimations.sliceAnimation],
                providers: [
                    { provide: WINDOW, useFactory: _window }
                ],
                host: {
                    '[@thumbnailsVisibility]': 'thumbnailsVisibilityAnimator.animation',
                    '(@thumbnailsVisibility.start)': 'thumbnailsVisibilityAnimator.animationStart($event)',
                    '(@thumbnailsVisibility.done)': 'thumbnailsVisibilityAnimator.animationDone($event)'
                }
            }]
    }], function () { return [{ type: i1.LightboxConfigurationService }, { type: undefined, decorators: [{
                type: Inject,
                args: [WINDOW]
            }] }]; }, { items: [{
            type: Input,
            args: ['items']
        }], selectEvent: [{
            type: Output
        }], _thumnailsContainerRef: [{
            type: ViewChild,
            args: ['thumnailsContainer']
        }], _thumnailsListRef: [{
            type: ViewChild,
            args: ['thumnailsList']
        }], _thumnailsRef: [{
            type: ViewChildren,
            args: ['thumnails']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtdGh1bWJuYWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlnaHRib3gvY29tcG9uZW50cy9saWdodGJveC10aHVtYm5haWxzL2xpZ2h0Ym94LXRodW1ibmFpbHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtdGh1bWJuYWlscy9saWdodGJveC10aHVtYm5haWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUF5QixTQUFTLEVBQVUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl2SixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQzs7Ozs7Ozs7OztJQ08vRixpQ0FLc0I7SUFKbEIseU5BQW1CO0lBTW5CLHlCQUFzRDtJQUUxRCxpQkFBTTs7OztJQVBGLCtDQUErQixtQ0FBQTtJQUUvQixtRkFBMkM7SUFHYixlQUFzQjtJQUF0QixnREFBc0I7SUFBL0Msa0VBQXdCOztBRFp6QyxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkQsTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLE1BQU0sQ0FB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aUJBQzNDO2dCQUNELElBQUksRUFBRTtvQkFDRix5QkFBeUIsRUFBRSx3Q0FBd0M7b0JBQ25FLCtCQUErQixFQUFFLHFEQUFxRDtvQkFDdEYsOEJBQThCLEVBQUUsb0RBQW9EO2lCQUN2RjthQUNKOztzQkE2QlEsTUFBTTt1QkFBQyxNQUFNO3dCQTFCSyxLQUFLO2tCQUEzQixLQUFLO21CQUFDLE9BQU87WUFFRyxXQUFXO2tCQUEzQixNQUFNO1lBY2tDLHNCQUFzQjtrQkFBOUQsU0FBUzttQkFBQyxvQkFBb0I7WUFFSyxpQkFBaUI7a0JBQXBELFNBQVM7bUJBQUMsZUFBZTtZQUVTLGFBQWE7a0JBQS9DLFlBQVk7bUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvaXRlbSc7XG5pbXBvcnQgeyBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGlnaHRib3gtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFRodW1ibmFpbHNBbmltYXRpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RodW1ibmFpbHMvYW5pbWF0aW9ucy90aHVtYm5haWxzLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgVGh1bWJuYWlsc1Zpc2liaWxpdHlBbmltYXRvciB9IGZyb20gJy4uLy4uL21vZGVscy90aHVtYm5haWxzL2FuaW1hdGlvbnMvdGh1bWJuYWlscy12aXNpYmlsaXR5LWFuaW1hdG9yJztcbmltcG9ydCB7IFRodW1ibmFpbHNTbGljZUFuaW1hdG9yIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RodW1ibmFpbHMvYW5pbWF0aW9ucy90aHVtYm5haWxzLXNsaWNlLWFuaW1hdG9yJztcblxuZXhwb3J0IGNvbnN0IFdJTkRPVyA9IG5ldyBJbmplY3Rpb25Ub2tlbignV2luZG93Jyk7XG5leHBvcnQgZnVuY3Rpb24gX3dpbmRvdygpIHsgcmV0dXJuIHdpbmRvdzsgfVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpZ2h0Ym94LXRodW1ibmFpbHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnbGlnaHRib3gtdGh1bWJuYWlscy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2xpZ2h0Ym94LXRodW1ibmFpbHMuY29tcG9uZW50LnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbVGh1bWJuYWlsc0FuaW1hdGlvbnMudmlzaWJpbGl0eUFuaW1hdGlvbiwgVGh1bWJuYWlsc0FuaW1hdGlvbnMuc2xpY2VBbmltYXRpb25dLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFdJTkRPVywgdXNlRmFjdG9yeTogX3dpbmRvdyB9XG4gICAgXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbQHRodW1ibmFpbHNWaXNpYmlsaXR5XSc6ICd0aHVtYm5haWxzVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvbicsXG4gICAgICAgICcoQHRodW1ibmFpbHNWaXNpYmlsaXR5LnN0YXJ0KSc6ICd0aHVtYm5haWxzVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvblN0YXJ0KCRldmVudCknLFxuICAgICAgICAnKEB0aHVtYm5haWxzVmlzaWJpbGl0eS5kb25lKSc6ICd0aHVtYm5haWxzVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvbkRvbmUoJGV2ZW50KSdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIExpZ2h0Ym94VGh1bWJuYWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoJ2l0ZW1zJykgcHVibGljIGl0ZW1zOiBJdGVtW10gPSBbXTtcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBwdWJsaWMgdGh1bWJuYWlsc1Zpc2liaWxpdHlBbmltYXRvcjogVGh1bWJuYWlsc1Zpc2liaWxpdHlBbmltYXRvcjtcblxuICAgIHB1YmxpYyB0aHVtYm5haWxzU2xpY2VBbmltYXRvcjogVGh1bWJuYWlsc1NsaWNlQW5pbWF0b3I7XG5cbiAgICBwdWJsaWMgYWN0aXZlSXRlbTogSXRlbTtcblxuICAgIHB1YmxpYyB0aHVtYm5haWxzV2lkdGg6IHN0cmluZztcblxuICAgIHB1YmxpYyB0aHVtYm5haWxzSGVpZ2h0OiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgdGhpY2tuZXNzOiBudW1iZXI7XG5cbiAgICBAVmlld0NoaWxkKCd0aHVtbmFpbHNDb250YWluZXInKSBwcml2YXRlIF90aHVtbmFpbHNDb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCd0aHVtbmFpbHNMaXN0JykgcHJpdmF0ZSBfdGh1bW5haWxzTGlzdFJlZjogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGRyZW4oJ3RodW1uYWlscycpIHByaXZhdGUgX3RodW1uYWlsc1JlZjogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gICAgcHJpdmF0ZSBfc3RhdGU6ICdvcGVuZWQnIHwgJ2Nsb3NlZCcgPSAnY2xvc2VkJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9saWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KFdJTkRPVykgcHVibGljIHJlYWRvbmx5IF93aW46IGFueVxuICAgICkgeyB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuX3dpbi5pbm5lcldpZHRoIDw9IDc2Nykge1xuXG4gICAgICAgICAgICB0aGlzLnRoaWNrbmVzcyA9IDgwO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3dpbi5pbm5lcldpZHRoIDw9IDEwMjMpIHtcblxuICAgICAgICAgICAgdGhpcy50aGlja25lc3MgPSAxMjA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fd2luLmlubmVyV2lkdGggPiAxMDIzKSB7XG5cbiAgICAgICAgICAgIHRoaXMudGhpY2tuZXNzID0gMTcwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tUaHVtYm5haWxzRGltZW5zaW9ucygpO1xuICAgICAgICB0aGlzLnRodW1ibmFpbHNWaXNpYmlsaXR5QW5pbWF0b3IgPSBuZXcgVGh1bWJuYWlsc1Zpc2liaWxpdHlBbmltYXRvcih0aGlzLmRpcmVjdGlvbiwgdGhpcy50aGlja25lc3MpO1xuICAgICAgICB0aGlzLnRodW1ibmFpbHNTbGljZUFuaW1hdG9yID0gbmV3IFRodW1ibmFpbHNTbGljZUFuaW1hdG9yKHRoaXMuZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbigpOiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMuY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICdyaWdodCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY29uZmlnKCk6IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2Uge1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9saWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcuY29udHJvbHMudGh1bWJuYWlscy5kaXNhYmxlICYmIHRoaXMuX3N0YXRlICE9PSAnb3BlbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9ICdvcGVuZWQnO1xuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzVmlzaWJpbGl0eUFuaW1hdG9yLnNob3codGhpcy5jb25maWcuYW5pbWF0aW9ucy50aHVtYm5haWxzU2hvdy5kdXJhdGlvbiwgbnVsbCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLmRpc2FibGUgJiYgdGhpcy5fc3RhdGUgIT09ICdjbG9zZWQnKSB7XG5cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gJ2Nsb3NlZCc7XG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNWaXNpYmlsaXR5QW5pbWF0b3IuaGlkZSh0aGlzLmNvbmZpZy5hbmltYXRpb25zLnRodW1ibmFpbHNIaWRlLmR1cmF0aW9uLCBudWxsLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLmRpc2FibGUpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSAnb3BlbmVkJykge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2l6ZSgpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5fd2luLmlubmVyV2lkdGggPD0gNzY3ICYmIHRoaXMudGhpY2tuZXNzICE9PSA4MCkge1xuXG4gICAgICAgICAgICB0aGlzLnRoaWNrbmVzcyA9IDgwO1xuICAgICAgICAgICAgdGhpcy5fcmVmcmVzaFRoaWNrbmVzcygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3dpbi5pbm5lcldpZHRoIDw9IDEwMjMgJiYgdGhpcy5fd2luLmlubmVyV2lkdGggPiA3NjcgJiYgdGhpcy50aGlja25lc3MgIT09IDEyMCkge1xuXG4gICAgICAgICAgICB0aGlzLnRoaWNrbmVzcyA9IDEyMDtcbiAgICAgICAgICAgIHRoaXMuX3JlZnJlc2hUaGlja25lc3MoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl93aW4uaW5uZXJXaWR0aCA+IDEwMjMgJiYgdGhpcy50aGlja25lc3MgIT09IDE3MCkge1xuXG4gICAgICAgICAgICB0aGlzLnRoaWNrbmVzcyA9IDE3MDtcbiAgICAgICAgICAgIHRoaXMuX3JlZnJlc2hUaGlja25lc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRlU2xpY2UodGhpcy5hY3RpdmVJdGVtLCAwKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGFwKGl0ZW06IEl0ZW0pOiB2b2lkIHtcblxuICAgICAgICBpZiAoaXRlbSAhPT0gdGhpcy5hY3RpdmVJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEV2ZW50LmVtaXQoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0SXRlbShpdGVtOiBJdGVtKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLmRpc2FibGUpIHtcblxuICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gaXRlbTtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGVTbGljZSh0aGlzLmFjdGl2ZUl0ZW0sIHRoaXMuY29uZmlnLmFuaW1hdGlvbnMuaXRlbVNsaWNlLmR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbldoZWVsKGV2ZW50OiBhbnkpOiB2b2lkIHtcblxuICAgICAgICBsZXQgdG9wID0gdGhpcy5fdGh1bW5haWxzTGlzdFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtIDEyO1xuXG4gICAgICAgIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XG5cbiAgICAgICAgICAgIHRvcCAtPSA1MDtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdG9wICs9IDUwO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9wID0gdGhpcy5fZ2V0VG9wKHRvcCk7XG5cbiAgICAgICAgdGhpcy5fdGh1bW5haWxzTGlzdFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG4gICAgICAgIHRoaXMudGh1bWJuYWlsc1NsaWNlQW5pbWF0b3IuYW5pbWF0aW9uLnBhcmFtcy50b3AgPSB0b3A7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU3dpcGUoZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIGlmICgoZXZlbnQudHlwZSA9PT0gJ3N3aXBlbGVmdCcgfHwgZXZlbnQudHlwZSA9PT0gJ3N3aXBlcmlnaHQnKSAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG5cbiAgICAgICAgICAgIGxldCBsZWZ0ID0gdGhpcy5fdGh1bW5haWxzTGlzdFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQgLSAxMjtcblxuICAgICAgICAgICAgbGVmdCArPSBldmVudC5kZWx0YVg7XG5cbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc1NsaWNlQW5pbWF0b3Iuc2xpY2UodGhpcy5fZ2V0TGVmdChsZWZ0KSwgdGhpcy5jb25maWcuYW5pbWF0aW9ucy50aHVtYm5haWxzU2xpY2UuZHVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChldmVudC50eXBlID09PSAnc3dpcGV1cCcgfHwgZXZlbnQudHlwZSA9PT0gJ3N3aXBlZG93bicpICYmIHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG5cbiAgICAgICAgICAgIGxldCB0b3AgPSB0aGlzLl90aHVtbmFpbHNMaXN0UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wIC0gMTI7XG5cbiAgICAgICAgICAgIHRvcCArPSBldmVudC5kZWx0YVk7XG5cbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc1NsaWNlQW5pbWF0b3Iuc2xpY2UodGhpcy5fZ2V0VG9wKHRvcCksIHRoaXMuY29uZmlnLmFuaW1hdGlvbnMudGh1bWJuYWlsc1NsaWNlLmR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtU3JjKGl0ZW06IEl0ZW0pOiBzdHJpbmcge1xuXG4gICAgICAgIGlmIChpdGVtLnNyYykgeyByZXR1cm4gaXRlbS5zcmM7IH1cbiAgICAgICAgaWYgKGl0ZW0ueHNTcmMpIHsgcmV0dXJuIGl0ZW0ueHNTcmM7IH1cbiAgICAgICAgaWYgKGl0ZW0uc21TcmMpIHsgcmV0dXJuIGl0ZW0uc21TcmM7IH1cbiAgICAgICAgaWYgKGl0ZW0ubWRTcmMpIHsgcmV0dXJuIGl0ZW0ubWRTcmM7IH1cbiAgICAgICAgaWYgKGl0ZW0ubGdTcmMpIHsgcmV0dXJuIGl0ZW0ubGdTcmM7IH1cbiAgICAgICAgaWYgKGl0ZW0ueGxTcmMpIHsgcmV0dXJuIGl0ZW0ueGxTcmM7IH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrRGlyZWN0aW9uKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzU2xpY2VBbmltYXRvci5zZXREaXJlY3Rpb24oJ3ZlcnRpY2FsJyk7XG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNWaXNpYmlsaXR5QW5pbWF0b3Iuc2V0RGlyZWN0aW9uKCd2ZXJ0aWNhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNTbGljZUFuaW1hdG9yLnNldERpcmVjdGlvbignaG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzVmlzaWJpbGl0eUFuaW1hdG9yLnNldERpcmVjdGlvbignaG9yaXpvbnRhbCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrVGh1bWJuYWlsc0RpbWVuc2lvbnMoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG5cbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc1dpZHRoID0gdGhpcy50aGlja25lc3MgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzSGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNXaWR0aCA9ICdhdXRvJztcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc0hlaWdodCA9IHRoaXMudGhpY2tuZXNzICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3JlZnJlc2hUaGlja25lc3MoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy50aHVtYm5haWxzVmlzaWJpbGl0eUFuaW1hdG9yLnNldFRoaWNrbmVzcygwLCB0aGlzLnRoaWNrbmVzcyk7XG4gICAgICAgIHRoaXMuY2hlY2tUaHVtYm5haWxzRGltZW5zaW9ucygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FuaW1hdGVTbGljZShpdGVtOiBJdGVtLCBkdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbVJlZiA9IHRoaXMuX3RodW1uYWlsc1JlZi50b0FycmF5KClbdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pXTtcblxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5yb3VuZCgoKHRoaXMuX3RodW1uYWlsc0NvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC0gYWN0aXZlSXRlbVJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKSAvIDIpIC0gYWN0aXZlSXRlbVJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQpO1xuXG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNTbGljZUFuaW1hdG9yLnNsaWNlKHRoaXMuX2dldExlZnQobGVmdCksIGR1cmF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc3QgdG9wID0gTWF0aC5yb3VuZCgoKHRoaXMuX3RodW1uYWlsc0NvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIGFjdGl2ZUl0ZW1SZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpIC8gMikgLSBhY3RpdmVJdGVtUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wKTtcblxuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzU2xpY2VBbmltYXRvci5zbGljZSh0aGlzLl9nZXRUb3AodG9wKSwgZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0VG9wKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICAgIGxldCB0b3AgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodG9wIDwgKHRoaXMuX3RodW1uYWlsc0NvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIHRoaXMuX3RodW1uYWlsc0xpc3RSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgKyAxMikpIHtcblxuICAgICAgICAgICAgdG9wID0gdGhpcy5fdGh1bW5haWxzQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gdGhpcy5fdGh1bW5haWxzTGlzdFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCArIDEyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvcCA+IDApIHtcblxuICAgICAgICAgICAgdG9wID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0b3A7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0TGVmdCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgICBsZXQgbGVmdCA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChsZWZ0IDwgKHRoaXMuX3RodW1uYWlsc0NvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC0gdGhpcy5fdGh1bW5haWxzTGlzdFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoICsgMTIpKSB7XG5cbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLl90aHVtbmFpbHNDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAtIHRoaXMuX3RodW1uYWlsc0xpc3RSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCArIDEyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxlZnQgPiAwKSB7XG5cbiAgICAgICAgICAgIGxlZnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxufVxuIiwiPGRpdiAjdGh1bW5haWxzQ29udGFpbmVyXG4gICAgKHN3aXBlbGVmdCk9XCJvblN3aXBlKCRldmVudClcIlxuICAgIChzd2lwZXJpZ2h0KT1cIm9uU3dpcGUoJGV2ZW50KVwiXG4gICAgKHN3aXBldXApPVwib25Td2lwZSgkZXZlbnQpXCJcbiAgICAoc3dpcGVkb3duKT1cIm9uU3dpcGUoJGV2ZW50KVwiXG4gICAgKHdoZWVsKT1cIm9uV2hlZWwoJGV2ZW50KVwiXG4gICAgY2xhc3M9XCJ0aHVtYm5haWwtY29udGFpbmVyXCI+XG5cbiAgICA8ZGl2ICN0aHVtbmFpbHNMaXN0XG4gICAgW0B0aHVtYm5haWxzU2xpY2VdPVwidGh1bWJuYWlsc1NsaWNlQW5pbWF0b3IuYW5pbWF0aW9uXCJcbiAgICAoQHRodW1ibmFpbHNTbGljZS5zdGFydCk9XCJ0aHVtYm5haWxzU2xpY2VBbmltYXRvci5hbmltYXRpb25TdGFydCgkZXZlbnQpXCJcbiAgICAoQHRodW1ibmFpbHNTbGljZS5kb25lKT1cInRodW1ibmFpbHNTbGljZUFuaW1hdG9yLmFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiPlxuICAgICAgICBcbiAgICAgICAgPGRpdiAjdGh1bW5haWxzICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCJcbiAgICAgICAgICAgICh0YXApPVwib25UYXAoaXRlbSlcIlxuICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cInRodW1ibmFpbHNXaWR0aFwiXG4gICAgICAgICAgICBbc3R5bGUuaGVpZ2h0XT1cInRodW1ibmFpbHNIZWlnaHRcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydhY3RpdmUnOiBpdGVtID09PSBhY3RpdmVJdGVtfVwiXG4gICAgICAgICAgICBjbGFzcz1cInRodW1ibmFpbFwiPlxuXG4gICAgICAgICAgICA8aW1nIFtzcmNdPVwiZ2V0SXRlbVNyYyhpdGVtKVwiIHRpdGxlPVwie3tpdGVtLnRpdGxlfX1cIi8+XG5cbiAgICAgICAgPC9kaXY+PCEtLSBFTkQgVEhVTU5BSUxTIC0tPlxuXG4gICAgPC9kaXY+PCEtLSBFTkQgVEhVTU5BSUxTIExJU1QgLS0+XG5cbjwvZGl2PjwhLS0gRU5EIFRIVU1OQUlMUyBDT05UQUlORVIgLS0+XG5cbiJdfQ==