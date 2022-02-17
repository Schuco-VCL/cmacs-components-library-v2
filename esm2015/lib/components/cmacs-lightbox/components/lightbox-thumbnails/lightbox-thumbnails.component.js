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
    i0.ɵɵelementStart(0, "div", 5, 6);
    i0.ɵɵlistener("tap", function LightboxThumbnailsComponent_div_4_Template_div_tap_0_listener() { i0.ɵɵrestoreView(_r6); const item_r3 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onTap(item_r3); });
    i0.ɵɵelement(2, "img", 7);
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
            this.thickness = 100;
        }
        else if (this._win.innerWidth <= 1023) {
            this.thickness = 140;
        }
        else if (this._win.innerWidth > 1023) {
            this.thickness = 190;
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
        if (this._win.innerWidth <= 767 && this.thickness !== 100) {
            this.thickness = 100;
            this._refreshThickness();
        }
        else if (this._win.innerWidth <= 1023 && this._win.innerWidth > 767 && this.thickness !== 140) {
            this.thickness = 140;
            this._refreshThickness();
        }
        else if (this._win.innerWidth > 1023 && this.thickness !== 190) {
            this.thickness = 190;
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
        ])], decls: 5, vars: 2, consts: [[1, "thumbnail-container", 3, "swipeleft", "swiperight", "swipeup", "swipedown", "wheel"], ["thumnailsContainer", ""], [1, "cmacs-thumbnail-scroll"], ["thumnailsList", ""], ["class", "thumbnail", 3, "width", "height", "ngClass", "tap", 4, "ngFor", "ngForOf"], [1, "thumbnail", 3, "ngClass", "tap"], ["thumnails", ""], [3, "src", "title"]], template: function LightboxThumbnailsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("swipeleft", function LightboxThumbnailsComponent_Template_div_swipeleft_0_listener($event) { return ctx.onSwipe($event); })("swiperight", function LightboxThumbnailsComponent_Template_div_swiperight_0_listener($event) { return ctx.onSwipe($event); })("swipeup", function LightboxThumbnailsComponent_Template_div_swipeup_0_listener($event) { return ctx.onSwipe($event); })("swipedown", function LightboxThumbnailsComponent_Template_div_swipedown_0_listener($event) { return ctx.onSwipe($event); })("wheel", function LightboxThumbnailsComponent_Template_div_wheel_0_listener($event) { return ctx.onWheel($event); });
        i0.ɵɵelementStart(2, "div", 2, 3);
        i0.ɵɵlistener("@thumbnailsSlice.start", function LightboxThumbnailsComponent_Template_div_animation_thumbnailsSlice_start_2_listener($event) { return ctx.thumbnailsSliceAnimator.animationStart($event); })("@thumbnailsSlice.done", function LightboxThumbnailsComponent_Template_div_animation_thumbnailsSlice_done_2_listener($event) { return ctx.thumbnailsSliceAnimator.animationDone($event); });
        i0.ɵɵtemplate(4, LightboxThumbnailsComponent_div_4_Template, 3, 9, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("@thumbnailsSlice", ctx.thumbnailsSliceAnimator.animation);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [i2.NgForOf, i2.NgClass], styles: ["[_nghost-%COMP%]{background-color:#0d1e3b;flex:1 1 0%;box-sizing:border-box;z-index:2;position:relative}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]{overflow:hidden}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;position:relative}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;width:150px!important;margin-left:10px;margin-right:10px;border:2px solid #0d1e3b}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;pointer-events:none}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail.active[_ngcontent-%COMP%]{border:2px solid #2a7cff}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:default}@media (max-width:359px){[_nghost-%COMP%]{display:none}}.vertical-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]{margin:0;height:calc(100% - 0px)}.vertical-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex-direction:column}.vertical-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{margin-bottom:12px}.vertical-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 auto;height:95px;width:auto;max-width:100%}.horizontal-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]{height:100%;margin:0;width:calc(100% - 0px)}.horizontal-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:100%;white-space:nowrap}.horizontal-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{margin-right:12px}.horizontal-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:calc(100% - 24px);margin-top:12px;margin-bottom:12px}.horizontal-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:calc(100% - 12px);margin-top:6px;margin-bottom:6px}.cmacs-thumbnail-scroll[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:scroll;height:calc(100% - 0px);padding-top:20px}"], data: { animation: [ThumbnailsAnimations.visibilityAnimation, ThumbnailsAnimations.sliceAnimation] } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtdGh1bWJuYWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlnaHRib3gvY29tcG9uZW50cy9saWdodGJveC10aHVtYm5haWxzL2xpZ2h0Ym94LXRodW1ibmFpbHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtdGh1bWJuYWlscy9saWdodGJveC10aHVtYm5haWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUF5QixTQUFTLEVBQVUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl2SixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQzs7Ozs7Ozs7OztJQ1EvRixpQ0FLc0I7SUFKbEIseU5BQW1CO0lBTW5CLHlCQUFzRDtJQUUxRCxpQkFBTTs7OztJQVBGLCtDQUErQixtQ0FBQTtJQUUvQixtRkFBMkM7SUFHYixlQUFzQjtJQUF0QixnREFBc0I7SUFBL0Msa0VBQXdCOztBRGJ6QyxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkQsTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLE1BQU0sQ0FB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aUJBQzNDO2dCQUNELElBQUksRUFBRTtvQkFDRix5QkFBeUIsRUFBRSx3Q0FBd0M7b0JBQ25FLCtCQUErQixFQUFFLHFEQUFxRDtvQkFDdEYsOEJBQThCLEVBQUUsb0RBQW9EO2lCQUN2RjthQUNKOztzQkE2QlEsTUFBTTt1QkFBQyxNQUFNO3dCQTFCSyxLQUFLO2tCQUEzQixLQUFLO21CQUFDLE9BQU87WUFFRyxXQUFXO2tCQUEzQixNQUFNO1lBY2tDLHNCQUFzQjtrQkFBOUQsU0FBUzttQkFBQyxvQkFBb0I7WUFFSyxpQkFBaUI7a0JBQXBELFNBQVM7bUJBQUMsZUFBZTtZQUVTLGFBQWE7a0JBQS9DLFlBQVk7bUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2l0ZW0nO1xyXG5pbXBvcnQgeyBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGlnaHRib3gtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGh1bWJuYWlsc0FuaW1hdGlvbnMgfSBmcm9tICcuLi8uLi9tb2RlbHMvdGh1bWJuYWlscy9hbmltYXRpb25zL3RodW1ibmFpbHMtYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFRodW1ibmFpbHNWaXNpYmlsaXR5QW5pbWF0b3IgfSBmcm9tICcuLi8uLi9tb2RlbHMvdGh1bWJuYWlscy9hbmltYXRpb25zL3RodW1ibmFpbHMtdmlzaWJpbGl0eS1hbmltYXRvcic7XHJcbmltcG9ydCB7IFRodW1ibmFpbHNTbGljZUFuaW1hdG9yIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RodW1ibmFpbHMvYW5pbWF0aW9ucy90aHVtYm5haWxzLXNsaWNlLWFuaW1hdG9yJztcclxuXHJcbmV4cG9ydCBjb25zdCBXSU5ET1cgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ1dpbmRvdycpO1xyXG5leHBvcnQgZnVuY3Rpb24gX3dpbmRvdygpIHsgcmV0dXJuIHdpbmRvdzsgfVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpZ2h0Ym94LXRodW1ibmFpbHMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdsaWdodGJveC10aHVtYm5haWxzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydsaWdodGJveC10aHVtYm5haWxzLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBbVGh1bWJuYWlsc0FuaW1hdGlvbnMudmlzaWJpbGl0eUFuaW1hdGlvbiwgVGh1bWJuYWlsc0FuaW1hdGlvbnMuc2xpY2VBbmltYXRpb25dLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBXSU5ET1csIHVzZUZhY3Rvcnk6IF93aW5kb3cgfVxyXG4gICAgXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW0B0aHVtYm5haWxzVmlzaWJpbGl0eV0nOiAndGh1bWJuYWlsc1Zpc2liaWxpdHlBbmltYXRvci5hbmltYXRpb24nLFxyXG4gICAgICAgICcoQHRodW1ibmFpbHNWaXNpYmlsaXR5LnN0YXJ0KSc6ICd0aHVtYm5haWxzVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvblN0YXJ0KCRldmVudCknLFxyXG4gICAgICAgICcoQHRodW1ibmFpbHNWaXNpYmlsaXR5LmRvbmUpJzogJ3RodW1ibmFpbHNWaXNpYmlsaXR5QW5pbWF0b3IuYW5pbWF0aW9uRG9uZSgkZXZlbnQpJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlnaHRib3hUaHVtYm5haWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBASW5wdXQoJ2l0ZW1zJykgcHVibGljIGl0ZW1zOiBJdGVtW10gPSBbXTtcclxuXHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHNlbGVjdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHB1YmxpYyB0aHVtYm5haWxzVmlzaWJpbGl0eUFuaW1hdG9yOiBUaHVtYm5haWxzVmlzaWJpbGl0eUFuaW1hdG9yO1xyXG5cclxuICAgIHB1YmxpYyB0aHVtYm5haWxzU2xpY2VBbmltYXRvcjogVGh1bWJuYWlsc1NsaWNlQW5pbWF0b3I7XHJcblxyXG4gICAgcHVibGljIGFjdGl2ZUl0ZW06IEl0ZW07XHJcblxyXG4gICAgcHVibGljIHRodW1ibmFpbHNXaWR0aDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyB0aHVtYm5haWxzSGVpZ2h0OiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHRoaWNrbmVzczogbnVtYmVyO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3RodW1uYWlsc0NvbnRhaW5lcicpIHByaXZhdGUgX3RodW1uYWlsc0NvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBAVmlld0NoaWxkKCd0aHVtbmFpbHNMaXN0JykgcHJpdmF0ZSBfdGh1bW5haWxzTGlzdFJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBAVmlld0NoaWxkcmVuKCd0aHVtbmFpbHMnKSBwcml2YXRlIF90aHVtbmFpbHNSZWY6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZTogJ29wZW5lZCcgfCAnY2xvc2VkJyA9ICdjbG9zZWQnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2xpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2U6IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgQEluamVjdChXSU5ET1cpIHB1YmxpYyByZWFkb25seSBfd2luOiBhbnlcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fd2luLmlubmVyV2lkdGggPD0gNzY3KSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRoaWNrbmVzcyA9IDEwMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3dpbi5pbm5lcldpZHRoIDw9IDEwMjMpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGhpY2tuZXNzID0gMTQwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fd2luLmlubmVyV2lkdGggPiAxMDIzKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRoaWNrbmVzcyA9IDE5MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGVja1RodW1ibmFpbHNEaW1lbnNpb25zKCk7XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxzVmlzaWJpbGl0eUFuaW1hdG9yID0gbmV3IFRodW1ibmFpbHNWaXNpYmlsaXR5QW5pbWF0b3IodGhpcy5kaXJlY3Rpb24sIHRoaXMudGhpY2tuZXNzKTtcclxuICAgICAgICB0aGlzLnRodW1ibmFpbHNTbGljZUFuaW1hdG9yID0gbmV3IFRodW1ibmFpbHNTbGljZUFuaW1hdG9yKHRoaXMuZGlyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbigpOiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICdsZWZ0JyB8fCB0aGlzLmNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAncmlnaHQnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNvbmZpZygpOiBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW4oKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jb25maWcuY29udHJvbHMudGh1bWJuYWlscy5kaXNhYmxlICYmIHRoaXMuX3N0YXRlICE9PSAnb3BlbmVkJykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAnb3BlbmVkJztcclxuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzVmlzaWJpbGl0eUFuaW1hdG9yLnNob3codGhpcy5jb25maWcuYW5pbWF0aW9ucy50aHVtYm5haWxzU2hvdy5kdXJhdGlvbiwgbnVsbCwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLmRpc2FibGUgJiYgdGhpcy5fc3RhdGUgIT09ICdjbG9zZWQnKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9ICdjbG9zZWQnO1xyXG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNWaXNpYmlsaXR5QW5pbWF0b3IuaGlkZSh0aGlzLmNvbmZpZy5hbmltYXRpb25zLnRodW1ibmFpbHNIaWRlLmR1cmF0aW9uLCBudWxsLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLmRpc2FibGUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gJ29wZW5lZCcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2l6ZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3dpbi5pbm5lcldpZHRoIDw9IDc2NyAmJiB0aGlzLnRoaWNrbmVzcyAhPT0gMTAwKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRoaWNrbmVzcyA9IDEwMDtcclxuICAgICAgICAgICAgdGhpcy5fcmVmcmVzaFRoaWNrbmVzcygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fd2luLmlubmVyV2lkdGggPD0gMTAyMyAmJiB0aGlzLl93aW4uaW5uZXJXaWR0aCA+IDc2NyAmJiB0aGlzLnRoaWNrbmVzcyAhPT0gMTQwKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRoaWNrbmVzcyA9IDE0MDtcclxuICAgICAgICAgICAgdGhpcy5fcmVmcmVzaFRoaWNrbmVzcygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fd2luLmlubmVyV2lkdGggPiAxMDIzICYmIHRoaXMudGhpY2tuZXNzICE9PSAxOTApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGhpY2tuZXNzID0gMTkwO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoVGhpY2tuZXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGVTbGljZSh0aGlzLmFjdGl2ZUl0ZW0sIDApO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRhcChpdGVtOiBJdGVtKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChpdGVtICE9PSB0aGlzLmFjdGl2ZUl0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RFdmVudC5lbWl0KGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0SXRlbShpdGVtOiBJdGVtKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jb25maWcuY29udHJvbHMudGh1bWJuYWlscy5kaXNhYmxlKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRlU2xpY2UodGhpcy5hY3RpdmVJdGVtLCB0aGlzLmNvbmZpZy5hbmltYXRpb25zLml0ZW1TbGljZS5kdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbldoZWVsKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IHRvcCA9IHRoaXMuX3RodW1uYWlsc0xpc3RSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgLSAxMjtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LmRlbHRhWSA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIHRvcCAtPSA1MDtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdG9wICs9IDUwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdG9wID0gdGhpcy5fZ2V0VG9wKHRvcCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RodW1uYWlsc0xpc3RSZWYubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlsc1NsaWNlQW5pbWF0b3IuYW5pbWF0aW9uLnBhcmFtcy50b3AgPSB0b3A7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU3dpcGUoZXZlbnQ6IGFueSkge1xyXG5cclxuICAgICAgICBpZiAoKGV2ZW50LnR5cGUgPT09ICdzd2lwZWxlZnQnIHx8IGV2ZW50LnR5cGUgPT09ICdzd2lwZXJpZ2h0JykgJiYgdGhpcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGxlZnQgPSB0aGlzLl90aHVtbmFpbHNMaXN0UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdCAtIDEyO1xyXG5cclxuICAgICAgICAgICAgbGVmdCArPSBldmVudC5kZWx0YVg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNTbGljZUFuaW1hdG9yLnNsaWNlKHRoaXMuX2dldExlZnQobGVmdCksIHRoaXMuY29uZmlnLmFuaW1hdGlvbnMudGh1bWJuYWlsc1NsaWNlLmR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoZXZlbnQudHlwZSA9PT0gJ3N3aXBldXAnIHx8IGV2ZW50LnR5cGUgPT09ICdzd2lwZWRvd24nKSAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRvcCA9IHRoaXMuX3RodW1uYWlsc0xpc3RSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgLSAxMjtcclxuXHJcbiAgICAgICAgICAgIHRvcCArPSBldmVudC5kZWx0YVk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNTbGljZUFuaW1hdG9yLnNsaWNlKHRoaXMuX2dldFRvcCh0b3ApLCB0aGlzLmNvbmZpZy5hbmltYXRpb25zLnRodW1ibmFpbHNTbGljZS5kdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtU3JjKGl0ZW06IEl0ZW0pOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBpZiAoaXRlbS5zcmMpIHsgcmV0dXJuIGl0ZW0uc3JjOyB9XHJcbiAgICAgICAgaWYgKGl0ZW0ueHNTcmMpIHsgcmV0dXJuIGl0ZW0ueHNTcmM7IH1cclxuICAgICAgICBpZiAoaXRlbS5zbVNyYykgeyByZXR1cm4gaXRlbS5zbVNyYzsgfVxyXG4gICAgICAgIGlmIChpdGVtLm1kU3JjKSB7IHJldHVybiBpdGVtLm1kU3JjOyB9XHJcbiAgICAgICAgaWYgKGl0ZW0ubGdTcmMpIHsgcmV0dXJuIGl0ZW0ubGdTcmM7IH1cclxuICAgICAgICBpZiAoaXRlbS54bFNyYykgeyByZXR1cm4gaXRlbS54bFNyYzsgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrRGlyZWN0aW9uKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzU2xpY2VBbmltYXRvci5zZXREaXJlY3Rpb24oJ3ZlcnRpY2FsJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc1Zpc2liaWxpdHlBbmltYXRvci5zZXREaXJlY3Rpb24oJ3ZlcnRpY2FsJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc1NsaWNlQW5pbWF0b3Iuc2V0RGlyZWN0aW9uKCdob3Jpem9udGFsJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc1Zpc2liaWxpdHlBbmltYXRvci5zZXREaXJlY3Rpb24oJ2hvcml6b250YWwnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrVGh1bWJuYWlsc0RpbWVuc2lvbnMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzV2lkdGggPSB0aGlzLnRoaWNrbmVzcyArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc0hlaWdodCA9ICdhdXRvJztcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzV2lkdGggPSAnYXV0byc7XHJcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc0hlaWdodCA9IHRoaXMudGhpY2tuZXNzICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVmcmVzaFRoaWNrbmVzcygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxzVmlzaWJpbGl0eUFuaW1hdG9yLnNldFRoaWNrbmVzcygwLCB0aGlzLnRoaWNrbmVzcyk7XHJcbiAgICAgICAgdGhpcy5jaGVja1RodW1ibmFpbHNEaW1lbnNpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYW5pbWF0ZVNsaWNlKGl0ZW06IEl0ZW0sIGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbVJlZiA9IHRoaXMuX3RodW1uYWlsc1JlZi50b0FycmF5KClbdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLnJvdW5kKCgodGhpcy5fdGh1bW5haWxzQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggLSBhY3RpdmVJdGVtUmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpIC8gMikgLSBhY3RpdmVJdGVtUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNTbGljZUFuaW1hdG9yLnNsaWNlKHRoaXMuX2dldExlZnQobGVmdCksIGR1cmF0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9wID0gTWF0aC5yb3VuZCgoKHRoaXMuX3RodW1uYWlsc0NvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIGFjdGl2ZUl0ZW1SZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpIC8gMikgLSBhY3RpdmVJdGVtUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc1NsaWNlQW5pbWF0b3Iuc2xpY2UodGhpcy5fZ2V0VG9wKHRvcCksIGR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0VG9wKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG5cclxuICAgICAgICBsZXQgdG9wID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh0b3AgPCAodGhpcy5fdGh1bW5haWxzQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gdGhpcy5fdGh1bW5haWxzTGlzdFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCArIDEyKSkge1xyXG5cclxuICAgICAgICAgICAgdG9wID0gdGhpcy5fdGh1bW5haWxzQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gdGhpcy5fdGh1bW5haWxzTGlzdFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCArIDEyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRvcCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIHRvcCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdG9wO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldExlZnQodmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcblxyXG4gICAgICAgIGxldCBsZWZ0ID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChsZWZ0IDwgKHRoaXMuX3RodW1uYWlsc0NvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC0gdGhpcy5fdGh1bW5haWxzTGlzdFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoICsgMTIpKSB7XHJcblxyXG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5fdGh1bW5haWxzQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggLSB0aGlzLl90aHVtbmFpbHNMaXN0UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggKyAxMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsZWZ0ID4gMCkge1xyXG5cclxuICAgICAgICAgICAgbGVmdCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgIH1cclxufVxyXG4iLCI8ZGl2ICN0aHVtbmFpbHNDb250YWluZXIgICAgXG4gICAgKHN3aXBlbGVmdCk9XCJvblN3aXBlKCRldmVudClcIlxuICAgIChzd2lwZXJpZ2h0KT1cIm9uU3dpcGUoJGV2ZW50KVwiXG4gICAgKHN3aXBldXApPVwib25Td2lwZSgkZXZlbnQpXCJcbiAgICAoc3dpcGVkb3duKT1cIm9uU3dpcGUoJGV2ZW50KVwiXG4gICAgKHdoZWVsKT1cIm9uV2hlZWwoJGV2ZW50KVwiXG4gICAgY2xhc3M9XCJ0aHVtYm5haWwtY29udGFpbmVyXCI+XG5cbiAgICA8ZGl2ICN0aHVtbmFpbHNMaXN0XG4gICAgICAgICBjbGFzcz1cImNtYWNzLXRodW1ibmFpbC1zY3JvbGxcIlxuICAgIFtAdGh1bWJuYWlsc1NsaWNlXT1cInRodW1ibmFpbHNTbGljZUFuaW1hdG9yLmFuaW1hdGlvblwiXG4gICAgKEB0aHVtYm5haWxzU2xpY2Uuc3RhcnQpPVwidGh1bWJuYWlsc1NsaWNlQW5pbWF0b3IuYW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiXG4gICAgKEB0aHVtYm5haWxzU2xpY2UuZG9uZSk9XCJ0aHVtYm5haWxzU2xpY2VBbmltYXRvci5hbmltYXRpb25Eb25lKCRldmVudClcIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgI3RodW1uYWlscyAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiXG4gICAgICAgICAgICAodGFwKT1cIm9uVGFwKGl0ZW0pXCJcbiAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJ0aHVtYm5haWxzV2lkdGhcIlxuICAgICAgICAgICAgW3N0eWxlLmhlaWdodF09XCJ0aHVtYm5haWxzSGVpZ2h0XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogaXRlbSA9PT0gYWN0aXZlSXRlbX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJ0aHVtYm5haWxcIj5cblxuICAgICAgICAgICAgPGltZyBbc3JjXT1cImdldEl0ZW1TcmMoaXRlbSlcIiB0aXRsZT1cInt7aXRlbS50aXRsZX19XCIvPlxuXG4gICAgICAgIDwvZGl2PjwhLS0gRU5EIFRIVU1OQUlMUyAtLT5cblxuICAgIDwvZGl2PjwhLS0gRU5EIFRIVU1OQUlMUyBMSVNUIC0tPlxuXG48L2Rpdj48IS0tIEVORCBUSFVNTkFJTFMgQ09OVEFJTkVSIC0tPlxuXG4iXX0=