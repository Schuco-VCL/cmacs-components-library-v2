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
    i0.ɵɵlistener("tap", function LightboxThumbnailsComponent_div_4_Template_div_tap_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const item_r3 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onTap(item_r3)); });
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
    static { this.ɵfac = function LightboxThumbnailsComponent_Factory(t) { return new (t || LightboxThumbnailsComponent)(i0.ɵɵdirectiveInject(i1.LightboxConfigurationService), i0.ɵɵdirectiveInject(WINDOW)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LightboxThumbnailsComponent, selectors: [["lightbox-thumbnails"]], viewQuery: function LightboxThumbnailsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
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
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("@thumbnailsSlice", ctx.thumbnailsSliceAnimator.animation);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.items);
        } }, dependencies: [i2.NgClass, i2.NgForOf], styles: ["[_nghost-%COMP%]{background-color:#0d1e3b;flex:1 1 0%;box-sizing:border-box;z-index:2;position:relative}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]{overflow:hidden}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;position:relative}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;width:164px!important;height:115px!important;margin-left:10px;margin-right:10px;border:2px solid #0D1E3B}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;pointer-events:none}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail.active[_ngcontent-%COMP%]{border:2px solid #2A7CFF}[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:default}@media (max-width: 359px){[_nghost-%COMP%]{display:none}}.vertical-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]{margin:0;height:calc(100% + -0px)}.vertical-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex-direction:column}.vertical-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{margin-bottom:12px}.vertical-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 auto;height:auto;width:auto;max-height:100%;max-width:100%;min-width:100%;min-height:100%;object-fit:cover;object-position:0 0}.horizontal-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]{height:100%;margin:0;width:calc(100% + -0px)}.horizontal-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:100%;white-space:nowrap}.horizontal-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{margin-right:12px}.horizontal-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:calc(100% - 24px);margin-top:12px;margin-bottom:12px}.horizontal-thumbnails[_nghost-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:calc(100% - 12px);margin-top:6px;margin-bottom:6px}.cmacs-thumbnail-scroll[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:scroll;height:calc(100% + -0px);padding-top:20px}.cmacs-thumbnail-scroll[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px;height:6px}.cmacs-thumbnail-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px;border:3px solid #0D1E3B}.cmacs-thumbnail-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}"], data: { animation: [ThumbnailsAnimations.visibilityAnimation, ThumbnailsAnimations.sliceAnimation] } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxThumbnailsComponent, [{
        type: Component,
        args: [{ selector: 'lightbox-thumbnails', animations: [ThumbnailsAnimations.visibilityAnimation, ThumbnailsAnimations.sliceAnimation], providers: [
                    { provide: WINDOW, useFactory: _window }
                ], host: {
                    '[@thumbnailsVisibility]': 'thumbnailsVisibilityAnimator.animation',
                    '(@thumbnailsVisibility.start)': 'thumbnailsVisibilityAnimator.animationStart($event)',
                    '(@thumbnailsVisibility.done)': 'thumbnailsVisibilityAnimator.animationDone($event)'
                }, template: "<div #thumnailsContainer    \n    (swipeleft)=\"onSwipe($event)\"\n    (swiperight)=\"onSwipe($event)\"\n    (swipeup)=\"onSwipe($event)\"\n    (swipedown)=\"onSwipe($event)\"\n    (wheel)=\"onWheel($event)\"\n    class=\"thumbnail-container\">\n\n    <div #thumnailsList\n         class=\"cmacs-thumbnail-scroll\"\n    [@thumbnailsSlice]=\"thumbnailsSliceAnimator.animation\"\n    (@thumbnailsSlice.start)=\"thumbnailsSliceAnimator.animationStart($event)\"\n    (@thumbnailsSlice.done)=\"thumbnailsSliceAnimator.animationDone($event)\">\n        \n        <div #thumnails *ngFor=\"let item of items\"\n            (tap)=\"onTap(item)\"\n            [style.width]=\"thumbnailsWidth\"\n            [style.height]=\"thumbnailsHeight\"\n            [ngClass]=\"{'active': item === activeItem}\"\n            class=\"thumbnail\">\n\n            <img [src]=\"getItemSrc(item)\" title=\"{{item.title}}\"/>\n\n        </div><!-- END THUMNAILS -->\n\n    </div><!-- END THUMNAILS LIST -->\n\n</div><!-- END THUMNAILS CONTAINER -->\n\n", styles: [":host{background-color:#0d1e3b;flex:1 1 0%;box-sizing:border-box;z-index:2;position:relative}:host .thumbnail-container{overflow:hidden}:host .thumbnail-container>div{display:inline-block;position:relative}:host .thumbnail-container .thumbnail{display:inline-block;cursor:pointer;width:164px!important;height:115px!important;margin-left:10px;margin-right:10px;border:2px solid #0D1E3B}:host .thumbnail-container .thumbnail img{display:block;pointer-events:none}:host .thumbnail-container .thumbnail.active{border:2px solid #2A7CFF}:host .thumbnail-container .thumbnail.active img{cursor:default}@media (max-width: 359px){:host{display:none}}:host.vertical-thumbnails .thumbnail-container{margin:0;height:calc(100% + -0px)}:host.vertical-thumbnails .thumbnail-container>div{flex-direction:column}:host.vertical-thumbnails .thumbnail-container .thumbnail{margin-bottom:12px}:host.vertical-thumbnails .thumbnail-container .thumbnail img{margin:0 auto;height:auto;width:auto;max-height:100%;max-width:100%;min-width:100%;min-height:100%;object-fit:cover;object-position:0 0}:host.horizontal-thumbnails .thumbnail-container{height:100%;margin:0;width:calc(100% + -0px)}:host.horizontal-thumbnails .thumbnail-container>div{height:100%;white-space:nowrap}:host.horizontal-thumbnails .thumbnail-container .thumbnail{margin-right:12px}:host.horizontal-thumbnails .thumbnail-container .thumbnail img{height:calc(100% - 24px);margin-top:12px;margin-bottom:12px}:host.horizontal-thumbnails .thumbnail-container .thumbnail.active img{height:calc(100% - 12px);margin-top:6px;margin-bottom:6px}.cmacs-thumbnail-scroll{overflow-x:hidden;overflow-y:scroll;height:calc(100% + -0px);padding-top:20px}.cmacs-thumbnail-scroll::-webkit-scrollbar{width:10px;height:6px}.cmacs-thumbnail-scroll::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px;border:3px solid #0D1E3B}.cmacs-thumbnail-scroll::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtdGh1bWJuYWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlnaHRib3gvY29tcG9uZW50cy9saWdodGJveC10aHVtYm5haWxzL2xpZ2h0Ym94LXRodW1ibmFpbHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtdGh1bWJuYWlscy9saWdodGJveC10aHVtYm5haWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUF5QixTQUFTLEVBQVUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl2SixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQzs7Ozs7Ozs7OztJQ1EvRixpQ0FLc0I7SUFKbEIsNE5BQU8sZUFBQSxxQkFBVyxDQUFBLElBQUM7SUFNbkIseUJBQXNEO0lBRTFELGlCQUFNOzs7O0lBUEYsK0NBQStCLG1DQUFBO0lBRS9CLG1GQUEyQztJQUdiLGVBQXNCO0lBQXRCLGdEQUFzQjtJQUEvQyxrRUFBd0I7O0FEYnpDLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRCxNQUFNLFVBQVUsT0FB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LG9EQUFvRDtpQkFDdkY7O3NCQThCSSxNQUFNO3VCQUFDLE1BQU07d0JBMUJLLEtBQUs7a0JBQTNCLEtBQUs7bUJBQUMsT0FBTztZQUVHLFdBQVc7a0JBQTNCLE1BQU07WUFja0Msc0JBQXNCO2tCQUE5RCxTQUFTO21CQUFDLG9CQUFvQjtZQUVLLGlCQUFpQjtrQkFBcEQsU0FBUzttQkFBQyxlQUFlO1lBRVMsYUFBYTtrQkFBL0MsWUFBWTttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCwgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvaXRlbSc7XHJcbmltcG9ydCB7IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saWdodGJveC1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaHVtYm5haWxzQW5pbWF0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVscy90aHVtYm5haWxzL2FuaW1hdGlvbnMvdGh1bWJuYWlscy1hbmltYXRpb25zJztcclxuaW1wb3J0IHsgVGh1bWJuYWlsc1Zpc2liaWxpdHlBbmltYXRvciB9IGZyb20gJy4uLy4uL21vZGVscy90aHVtYm5haWxzL2FuaW1hdGlvbnMvdGh1bWJuYWlscy12aXNpYmlsaXR5LWFuaW1hdG9yJztcclxuaW1wb3J0IHsgVGh1bWJuYWlsc1NsaWNlQW5pbWF0b3IgfSBmcm9tICcuLi8uLi9tb2RlbHMvdGh1bWJuYWlscy9hbmltYXRpb25zL3RodW1ibmFpbHMtc2xpY2UtYW5pbWF0b3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdJTkRPVyA9IG5ldyBJbmplY3Rpb25Ub2tlbignV2luZG93Jyk7XHJcbmV4cG9ydCBmdW5jdGlvbiBfd2luZG93KCkgeyByZXR1cm4gd2luZG93OyB9XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGlnaHRib3gtdGh1bWJuYWlscycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2xpZ2h0Ym94LXRodW1ibmFpbHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2xpZ2h0Ym94LXRodW1ibmFpbHMuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGFuaW1hdGlvbnM6IFtUaHVtYm5haWxzQW5pbWF0aW9ucy52aXNpYmlsaXR5QW5pbWF0aW9uLCBUaHVtYm5haWxzQW5pbWF0aW9ucy5zbGljZUFuaW1hdGlvbl0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IFdJTkRPVywgdXNlRmFjdG9yeTogX3dpbmRvdyB9XHJcbiAgICBdLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbQHRodW1ibmFpbHNWaXNpYmlsaXR5XSc6ICd0aHVtYm5haWxzVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvbicsXHJcbiAgICAgICAgJyhAdGh1bWJuYWlsc1Zpc2liaWxpdHkuc3RhcnQpJzogJ3RodW1ibmFpbHNWaXNpYmlsaXR5QW5pbWF0b3IuYW5pbWF0aW9uU3RhcnQoJGV2ZW50KScsXHJcbiAgICAgICAgJyhAdGh1bWJuYWlsc1Zpc2liaWxpdHkuZG9uZSknOiAndGh1bWJuYWlsc1Zpc2liaWxpdHlBbmltYXRvci5hbmltYXRpb25Eb25lKCRldmVudCknXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWdodGJveFRodW1ibmFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgnaXRlbXMnKSBwdWJsaWMgaXRlbXM6IEl0ZW1bXSA9IFtdO1xyXG5cclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgcHVibGljIHRodW1ibmFpbHNWaXNpYmlsaXR5QW5pbWF0b3I6IFRodW1ibmFpbHNWaXNpYmlsaXR5QW5pbWF0b3I7XHJcblxyXG4gICAgcHVibGljIHRodW1ibmFpbHNTbGljZUFuaW1hdG9yOiBUaHVtYm5haWxzU2xpY2VBbmltYXRvcjtcclxuXHJcbiAgICBwdWJsaWMgYWN0aXZlSXRlbTogSXRlbTtcclxuXHJcbiAgICBwdWJsaWMgdGh1bWJuYWlsc1dpZHRoOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHRodW1ibmFpbHNIZWlnaHQ6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgdGhpY2tuZXNzOiBudW1iZXI7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgndGh1bW5haWxzQ29udGFpbmVyJykgcHJpdmF0ZSBfdGh1bW5haWxzQ29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3RodW1uYWlsc0xpc3QnKSBwcml2YXRlIF90aHVtbmFpbHNMaXN0UmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIEBWaWV3Q2hpbGRyZW4oJ3RodW1uYWlscycpIHByaXZhdGUgX3RodW1uYWlsc1JlZjogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlOiAnb3BlbmVkJyB8ICdjbG9zZWQnID0gJ2Nsb3NlZCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfbGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZTogTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgICAgICBASW5qZWN0KFdJTkRPVykgcHVibGljIHJlYWRvbmx5IF93aW46IGFueVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl93aW4uaW5uZXJXaWR0aCA8PSA3NjcpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGhpY2tuZXNzID0gMTAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fd2luLmlubmVyV2lkdGggPD0gMTAyMykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aGlja25lc3MgPSAxNDA7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl93aW4uaW5uZXJXaWR0aCA+IDEwMjMpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGhpY2tuZXNzID0gMTkwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoZWNrVGh1bWJuYWlsc0RpbWVuc2lvbnMoKTtcclxuICAgICAgICB0aGlzLnRodW1ibmFpbHNWaXNpYmlsaXR5QW5pbWF0b3IgPSBuZXcgVGh1bWJuYWlsc1Zpc2liaWxpdHlBbmltYXRvcih0aGlzLmRpcmVjdGlvbiwgdGhpcy50aGlja25lc3MpO1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlsc1NsaWNlQW5pbWF0b3IgPSBuZXcgVGh1bWJuYWlsc1NsaWNlQW5pbWF0b3IodGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uKCk6ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMuY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICdyaWdodCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29uZmlnKCk6IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlbigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLmRpc2FibGUgJiYgdGhpcy5fc3RhdGUgIT09ICdvcGVuZWQnKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9ICdvcGVuZWQnO1xyXG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNWaXNpYmlsaXR5QW5pbWF0b3Iuc2hvdyh0aGlzLmNvbmZpZy5hbmltYXRpb25zLnRodW1ibmFpbHNTaG93LmR1cmF0aW9uLCBudWxsLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMuZGlzYWJsZSAmJiB0aGlzLl9zdGF0ZSAhPT0gJ2Nsb3NlZCcpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gJ2Nsb3NlZCc7XHJcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc1Zpc2liaWxpdHlBbmltYXRvci5oaWRlKHRoaXMuY29uZmlnLmFuaW1hdGlvbnMudGh1bWJuYWlsc0hpZGUuZHVyYXRpb24sIG51bGwsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMuZGlzYWJsZSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSAnb3BlbmVkJykge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzaXplKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fd2luLmlubmVyV2lkdGggPD0gNzY3ICYmIHRoaXMudGhpY2tuZXNzICE9PSAxMDApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGhpY2tuZXNzID0gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoVGhpY2tuZXNzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl93aW4uaW5uZXJXaWR0aCA8PSAxMDIzICYmIHRoaXMuX3dpbi5pbm5lcldpZHRoID4gNzY3ICYmIHRoaXMudGhpY2tuZXNzICE9PSAxNDApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGhpY2tuZXNzID0gMTQwO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoVGhpY2tuZXNzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl93aW4uaW5uZXJXaWR0aCA+IDEwMjMgJiYgdGhpcy50aGlja25lc3MgIT09IDE5MCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aGlja25lc3MgPSAxOTA7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZnJlc2hUaGlja25lc3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fYW5pbWF0ZVNsaWNlKHRoaXMuYWN0aXZlSXRlbSwgMCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVGFwKGl0ZW06IEl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGl0ZW0gIT09IHRoaXMuYWN0aXZlSXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEV2ZW50LmVtaXQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RJdGVtKGl0ZW06IEl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLmRpc2FibGUpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGVTbGljZSh0aGlzLmFjdGl2ZUl0ZW0sIHRoaXMuY29uZmlnLmFuaW1hdGlvbnMuaXRlbVNsaWNlLmR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uV2hlZWwoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgdG9wID0gdGhpcy5fdGh1bW5haWxzTGlzdFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtIDEyO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xyXG5cclxuICAgICAgICAgICAgdG9wIC09IDUwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0b3AgKz0gNTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b3AgPSB0aGlzLl9nZXRUb3AodG9wKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGh1bW5haWxzTGlzdFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IHRvcCArICdweCc7XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxzU2xpY2VBbmltYXRvci5hbmltYXRpb24ucGFyYW1zLnRvcCA9IHRvcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Td2lwZShldmVudDogYW55KSB7XHJcblxyXG4gICAgICAgIGlmICgoZXZlbnQudHlwZSA9PT0gJ3N3aXBlbGVmdCcgfHwgZXZlbnQudHlwZSA9PT0gJ3N3aXBlcmlnaHQnKSAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGVmdCA9IHRoaXMuX3RodW1uYWlsc0xpc3RSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0IC0gMTI7XHJcblxyXG4gICAgICAgICAgICBsZWZ0ICs9IGV2ZW50LmRlbHRhWDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc1NsaWNlQW5pbWF0b3Iuc2xpY2UodGhpcy5fZ2V0TGVmdChsZWZ0KSwgdGhpcy5jb25maWcuYW5pbWF0aW9ucy50aHVtYm5haWxzU2xpY2UuZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKChldmVudC50eXBlID09PSAnc3dpcGV1cCcgfHwgZXZlbnQudHlwZSA9PT0gJ3N3aXBlZG93bicpICYmIHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdG9wID0gdGhpcy5fdGh1bW5haWxzTGlzdFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtIDEyO1xyXG5cclxuICAgICAgICAgICAgdG9wICs9IGV2ZW50LmRlbHRhWTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc1NsaWNlQW5pbWF0b3Iuc2xpY2UodGhpcy5fZ2V0VG9wKHRvcCksIHRoaXMuY29uZmlnLmFuaW1hdGlvbnMudGh1bWJuYWlsc1NsaWNlLmR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW1TcmMoaXRlbTogSXRlbSk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGlmIChpdGVtLnNyYykgeyByZXR1cm4gaXRlbS5zcmM7IH1cclxuICAgICAgICBpZiAoaXRlbS54c1NyYykgeyByZXR1cm4gaXRlbS54c1NyYzsgfVxyXG4gICAgICAgIGlmIChpdGVtLnNtU3JjKSB7IHJldHVybiBpdGVtLnNtU3JjOyB9XHJcbiAgICAgICAgaWYgKGl0ZW0ubWRTcmMpIHsgcmV0dXJuIGl0ZW0ubWRTcmM7IH1cclxuICAgICAgICBpZiAoaXRlbS5sZ1NyYykgeyByZXR1cm4gaXRlbS5sZ1NyYzsgfVxyXG4gICAgICAgIGlmIChpdGVtLnhsU3JjKSB7IHJldHVybiBpdGVtLnhsU3JjOyB9XHJcblxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hlY2tEaXJlY3Rpb24oKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNTbGljZUFuaW1hdG9yLnNldERpcmVjdGlvbigndmVydGljYWwnKTtcclxuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzVmlzaWJpbGl0eUFuaW1hdG9yLnNldERpcmVjdGlvbigndmVydGljYWwnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzU2xpY2VBbmltYXRvci5zZXREaXJlY3Rpb24oJ2hvcml6b250YWwnKTtcclxuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzVmlzaWJpbGl0eUFuaW1hdG9yLnNldERpcmVjdGlvbignaG9yaXpvbnRhbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hlY2tUaHVtYm5haWxzRGltZW5zaW9ucygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNXaWR0aCA9IHRoaXMudGhpY2tuZXNzICsgJ3B4JztcclxuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzSGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNXaWR0aCA9ICdhdXRvJztcclxuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzSGVpZ2h0ID0gdGhpcy50aGlja25lc3MgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZWZyZXNoVGhpY2tuZXNzKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLnRodW1ibmFpbHNWaXNpYmlsaXR5QW5pbWF0b3Iuc2V0VGhpY2tuZXNzKDAsIHRoaXMudGhpY2tuZXNzKTtcclxuICAgICAgICB0aGlzLmNoZWNrVGh1bWJuYWlsc0RpbWVuc2lvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hbmltYXRlU2xpY2UoaXRlbTogSXRlbSwgZHVyYXRpb246IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVJdGVtUmVmID0gdGhpcy5fdGh1bW5haWxzUmVmLnRvQXJyYXkoKVt0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSldO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGVmdCA9IE1hdGgucm91bmQoKCh0aGlzLl90aHVtbmFpbHNDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAtIGFjdGl2ZUl0ZW1SZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCkgLyAyKSAtIGFjdGl2ZUl0ZW1SZWYubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc1NsaWNlQW5pbWF0b3Iuc2xpY2UodGhpcy5fZ2V0TGVmdChsZWZ0KSwgZHVyYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b3AgPSBNYXRoLnJvdW5kKCgodGhpcy5fdGh1bW5haWxzQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gYWN0aXZlSXRlbVJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCkgLyAyKSAtIGFjdGl2ZUl0ZW1SZWYubmF0aXZlRWxlbWVudC5vZmZzZXRUb3ApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzU2xpY2VBbmltYXRvci5zbGljZSh0aGlzLl9nZXRUb3AodG9wKSwgZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRUb3AodmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcblxyXG4gICAgICAgIGxldCB0b3AgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRvcCA8ICh0aGlzLl90aHVtbmFpbHNDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSB0aGlzLl90aHVtbmFpbHNMaXN0UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgMTIpKSB7XHJcblxyXG4gICAgICAgICAgICB0b3AgPSB0aGlzLl90aHVtbmFpbHNDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSB0aGlzLl90aHVtbmFpbHNMaXN0UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgMTI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG9wID4gMCkge1xyXG5cclxuICAgICAgICAgICAgdG9wID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0b3A7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0TGVmdCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgbGV0IGxlZnQgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKGxlZnQgPCAodGhpcy5fdGh1bW5haWxzQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggLSB0aGlzLl90aHVtbmFpbHNMaXN0UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggKyAxMikpIHtcclxuXHJcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLl90aHVtbmFpbHNDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAtIHRoaXMuX3RodW1uYWlsc0xpc3RSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCArIDEyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxlZnQgPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBsZWZ0ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgI3RodW1uYWlsc0NvbnRhaW5lciAgICBcbiAgICAoc3dpcGVsZWZ0KT1cIm9uU3dpcGUoJGV2ZW50KVwiXG4gICAgKHN3aXBlcmlnaHQpPVwib25Td2lwZSgkZXZlbnQpXCJcbiAgICAoc3dpcGV1cCk9XCJvblN3aXBlKCRldmVudClcIlxuICAgIChzd2lwZWRvd24pPVwib25Td2lwZSgkZXZlbnQpXCJcbiAgICAod2hlZWwpPVwib25XaGVlbCgkZXZlbnQpXCJcbiAgICBjbGFzcz1cInRodW1ibmFpbC1jb250YWluZXJcIj5cblxuICAgIDxkaXYgI3RodW1uYWlsc0xpc3RcbiAgICAgICAgIGNsYXNzPVwiY21hY3MtdGh1bWJuYWlsLXNjcm9sbFwiXG4gICAgW0B0aHVtYm5haWxzU2xpY2VdPVwidGh1bWJuYWlsc1NsaWNlQW5pbWF0b3IuYW5pbWF0aW9uXCJcbiAgICAoQHRodW1ibmFpbHNTbGljZS5zdGFydCk9XCJ0aHVtYm5haWxzU2xpY2VBbmltYXRvci5hbmltYXRpb25TdGFydCgkZXZlbnQpXCJcbiAgICAoQHRodW1ibmFpbHNTbGljZS5kb25lKT1cInRodW1ibmFpbHNTbGljZUFuaW1hdG9yLmFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiPlxuICAgICAgICBcbiAgICAgICAgPGRpdiAjdGh1bW5haWxzICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCJcbiAgICAgICAgICAgICh0YXApPVwib25UYXAoaXRlbSlcIlxuICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cInRodW1ibmFpbHNXaWR0aFwiXG4gICAgICAgICAgICBbc3R5bGUuaGVpZ2h0XT1cInRodW1ibmFpbHNIZWlnaHRcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydhY3RpdmUnOiBpdGVtID09PSBhY3RpdmVJdGVtfVwiXG4gICAgICAgICAgICBjbGFzcz1cInRodW1ibmFpbFwiPlxuXG4gICAgICAgICAgICA8aW1nIFtzcmNdPVwiZ2V0SXRlbVNyYyhpdGVtKVwiIHRpdGxlPVwie3tpdGVtLnRpdGxlfX1cIi8+XG5cbiAgICAgICAgPC9kaXY+PCEtLSBFTkQgVEhVTU5BSUxTIC0tPlxuXG4gICAgPC9kaXY+PCEtLSBFTkQgVEhVTU5BSUxTIExJU1QgLS0+XG5cbjwvZGl2PjwhLS0gRU5EIFRIVU1OQUlMUyBDT05UQUlORVIgLS0+XG5cbiJdfQ==