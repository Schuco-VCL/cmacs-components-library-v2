import { Component, ViewChild, ViewChildren, HostListener, ViewEncapsulation } from '@angular/core';
import { LightboxSliceAnimator } from '../../models/lightbox/animations/lightbox-slice-animator';
import { LightboxAnimations } from '../../models/lightbox/animations/lightbox-animations';
import { BackgroundVisibilityAnimator } from '../../models/lightbox/animations/background-visibility-animator';
import { Dimensions } from '../../models/dimensions.interface';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../services/lightbox-configuration.service";
import * as i2 from "../lightbox-toolbar/lightbox-toolbar.component";
import * as i3 from "@angular/common";
import * as i4 from "../lightbox-zoom/lightbox-zoom.component";
import * as i5 from "../../../cmacs-youtube/components/youtube.component";
import * as i6 from "../lightbox-thumbnails/lightbox-thumbnails.component";
import * as i7 from "../lightbox-item/lightbox-item.component";
const _c0 = ["background"];
const _c1 = ["toolbar"];
const _c2 = ["thumbnails"];
const _c3 = ["lightboxZoom"];
const _c4 = ["itemList"];
const _c5 = ["lightboxItem"];
function LightboxComponent_div_7_lightbox_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "lightbox-item", 16, 17);
    i0.ɵɵlistener("toggleEvent", function LightboxComponent_div_7_lightbox_item_2_Template_lightbox_item_toggleEvent_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.onToggle(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵproperty("item", item_r7);
} }
function LightboxComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13, 14);
    i0.ɵɵlistener("@lightboxSlice.start", function LightboxComponent_div_7_Template_div_animation_lightboxSlice_start_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.lightboxSliceAnimator.animationStart($event); })("@lightboxSlice.done", function LightboxComponent_div_7_Template_div_animation_lightboxSlice_done_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.lightboxSliceAnimator.animationDone($event); });
    i0.ɵɵtemplate(2, LightboxComponent_div_7_lightbox_item_2_Template, 2, 1, "lightbox-item", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@lightboxSlice", ctx_r2.lightboxSliceAnimator.animation);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.items[ctx_r2.activeItem.container]);
} }
const _c6 = function (a0) { return { "order": a0 }; };
const _c7 = function (a0, a1) { return { "vertical-container": a0, "horizontal-container": a1 }; };
const _c8 = function (a0) { return { "visibility": a0 }; };
const _c9 = function (a0, a1) { return { "vertical-thumbnails": a0, "horizontal-thumbnails": a1 }; };
const _c10 = function () { return []; };
export class LightboxComponent {
    constructor(_lightboxConfigurationService) {
        this._lightboxConfigurationService = _lightboxConfigurationService;
        this.pagination = { current: 0, count: 0 };
        this.displayZoom = 'hidden';
        this.displayYoutube = false;
        this.items = {};
        this.state = 'closed';
        this._stateBehaviorSubject = new BehaviorSubject('closed');
        this._pointerEvents = 'none';
    }
    get $state() {
        return this._stateBehaviorSubject.asObservable();
    }
    get config() {
        return this._lightboxConfigurationService;
    }
    ngOnInit() {
        this.lightboxSliceAnimator = new LightboxSliceAnimator();
        this.backgroundVisibilityAnimator = new BackgroundVisibilityAnimator();
        this._stateSubscription = this.$state.subscribe((value) => {
            this.state = value;
        });
    }
    ngOnDestroy() {
        this._stateSubscription.unsubscribe();
    }
    openItem(item) {
        if (this.state === 'closed') {
            this.activeItem = item;
            this._pointerEvents = 'auto';
            setTimeout(() => {
                const activeItemIndex = this._itemIndex(this.activeItem);
                const activeItemRef = this._itemRef(activeItemIndex);
                this.backgroundVisibilityAnimator.show(this.config.animations.backgroundFadeIn.opacity, this.config.animations.backgroundFadeIn.duration);
                this.thumbnails.checkDirection();
                this.thumbnails.checkThumbnailsDimensions();
                this._openControls();
                this._updatePagination();
                this._initItems();
                this.lightboxSliceAnimator.slice(-1 * activeItemIndex * 100, 0, () => {
                    activeItemRef.open(this._getContainerDimensionsAfterOpen(), () => {
                        this.displayYoutube = false;
                        this._stateBehaviorSubject.next('opening');
                        this._checkZoom(activeItemRef);
                    }, () => {
                        this._checkYoutube(item);
                        this._stateBehaviorSubject.next('opened');
                    });
                    this.thumbnails.selectItem(this.activeItem);
                });
            }, 0);
        }
    }
    getYoutubeVideoId() {
        return this.activeItem.youtubeVieoId;
    }
    addItem(item) {
        if (!this.items[item.container]) {
            this.items[item.container] = [];
        }
        this.items[item.container].push(item);
    }
    thumbnailsToggle() {
        this.thumbnails.toggle();
    }
    removeItem(item) {
        const index = this._itemIndex(item);
        if (index > -1) {
            this.items[item.container].splice(index, 1);
        }
    }
    onToggle() {
        this.toolbar.toggle();
        this.lightboxZoom.toggle();
        this.thumbnails.toggle();
    }
    onClose(event) {
        if ((!event || event.target === this.background.nativeElement) && this.state === 'opened') {
            this.activeItem = undefined;
            this._stateBehaviorSubject.next('closing');
            this.displayYoutube = false;
            this.backgroundVisibilityAnimator.hide(this.config.animations.backgroundFadeOut.duration, null, () => {
                this._pointerEvents = 'none';
                this._stateBehaviorSubject.next('closed');
            });
            this._closeControls();
            if (this._ytPlayer) {
                this._ytPlayer.stopVideo();
            }
        }
    }
    selectItem(item) {
        if (item !== this.activeItem) {
            if (this.activeItem) {
                const lastActiveItemIndex = this._itemIndex(this.activeItem);
                const lastActiveItemRef = this._itemRef(lastActiveItemIndex);
                lastActiveItemRef.resetZoom(0);
            }
            this.activeItem = item;
            const activeItemIndex = this._itemIndex(this.activeItem);
            const activeItemRef = this._itemRef(activeItemIndex);
            activeItemRef.resetZoom(0, null, () => {
                this.displayYoutube = false;
            }, () => {
                this.lightboxSliceAnimator.slice(-1 * activeItemIndex * 100, this.config.animations.itemSlice.duration, null, () => {
                    this._checkYoutube(item);
                });
            });
            this._updatePagination();
            this.thumbnails.selectItem(this.activeItem);
            this._checkZoom(activeItemRef);
        }
    }
    onNext() {
        const activeItemIndex = this._itemIndex(this.activeItem);
        if (activeItemIndex >= 0 && activeItemIndex < this.items[this.activeItem.container].length - 1) {
            const item = this.items[this.activeItem.container][activeItemIndex + 1];
            this.selectItem(item);
        }
    }
    onLast() {
        const activeItemIndex = this._itemIndex(this.activeItem);
        if (activeItemIndex >= 0 && activeItemIndex < this.items[this.activeItem.container].length - 1) {
            const item = this.items[this.activeItem.container][this.items[this.activeItem.container].length - 1];
            this.selectItem(item);
        }
    }
    onFirst() {
        const activeItemIndex = this._itemIndex(this.activeItem);
        if (activeItemIndex > 0) {
            const item = this.items[this.activeItem.container][0];
            this.selectItem(item);
        }
    }
    onPrevious() {
        const activeItemIndex = this._itemIndex(this.activeItem);
        if (activeItemIndex > 0) {
            const item = this.items[this.activeItem.container][activeItemIndex - 1];
            this.selectItem(item);
        }
    }
    zoomIn() {
        const activeItemRef = this._itemRef(this._itemIndex(this.activeItem));
        activeItemRef.zoomIn(null, () => {
            this._checkZoom(activeItemRef);
        });
    }
    zoomOut() {
        const activeItemRef = this._itemRef(this._itemIndex(this.activeItem));
        activeItemRef.zoomOut(null, () => {
            this._checkZoom(activeItemRef);
        });
    }
    resetZoom() {
        const activeItemRef = this._itemRef(this._itemIndex(this.activeItem));
        activeItemRef.resetZoom(this.config.animations.resetZoom.duration, null, () => {
            this._checkZoom(activeItemRef);
        });
    }
    feetToWidth() {
        const activeItemRef = this._itemRef(this._itemIndex(this.activeItem));
        activeItemRef.feetToWidth(null, () => {
            this._checkZoom(activeItemRef);
        });
    }
    swipe(action) {
        const itemIndex = this._itemIndex(this.activeItem);
        const itemRef = this._itemRef(itemIndex);
        if (!itemRef.isZoomMin()) {
            return;
        }
        switch (action) {
            case 'swipeleft':
                this.onNext();
                break;
            case 'swiperight':
                this.onPrevious();
                break;
        }
    }
    onReady(event) {
        this._ytPlayer = event.target;
    }
    onError(event) {
        // on error
    }
    onChange(event) {
        switch (event.data) {
            case YT.PlayerState.PLAYING:
                this._closeControls();
                break;
            case YT.PlayerState.PAUSED:
                this._openControls();
                break;
        }
    }
    _initItems() {
        this.items[this.activeItem.container].forEach((element) => {
            if (element !== this.activeItem) {
                const elementIndex = this._itemIndex(element);
                const elementRef = this._itemRef(elementIndex);
                elementRef.resetZoom(0);
            }
        });
    }
    _openControls() {
        this.toolbar.open();
        this.lightboxZoom.open();
        this.thumbnails.open();
    }
    _closeControls() {
        this.toolbar.close();
        this.lightboxZoom.close();
        this.thumbnails.close();
    }
    _getContainerDimensionsAfterOpen() {
        let containerDimensions;
        if (!this.config.controls.thumbnails.disable) {
            if (this.thumbnails.direction === 'horizontal') {
                containerDimensions = new Dimensions(this._itemList.nativeElement.clientWidth, this._itemList.nativeElement.clientHeight - this.thumbnails.thickness - 64);
            }
            else {
                containerDimensions = new Dimensions(this._itemList.nativeElement.clientWidth - this.thumbnails.thickness, this._itemList.nativeElement.clientHeight - 64);
            }
        }
        else {
            containerDimensions = new Dimensions(this._itemList.nativeElement.clientWidth, this._itemList.nativeElement.clientHeight - 64);
        }
        return containerDimensions;
    }
    _updatePagination() {
        const activeItemIndex = this._itemIndex(this.activeItem);
        this.pagination.current = activeItemIndex + 1;
        this.pagination.count = this.items[this.activeItem.container].length;
    }
    _checkYoutube(item) {
        setTimeout(() => {
            if (item !== this.activeItem) {
                this.displayYoutube = false;
            }
            else {
                if (item.isVideo) {
                    this.displayYoutube = true;
                }
                else {
                    this.displayYoutube = false;
                }
            }
        }, 0);
    }
    _itemRef(index) {
        return this._itemsRef.toArray()[index];
    }
    _itemIndex(item) {
        return this.items[item.container].indexOf(item);
    }
    _onResize(event) {
        if (this.activeItem) {
            const activeItemRef = this._itemRef(this._itemIndex(this.activeItem));
            if (!this.activeItem.isVideo) {
                activeItemRef.resize();
            }
            this._checkZoom(activeItemRef);
            this.thumbnails.resize();
        }
    }
    _checkZoom(item) {
        if (this.activeItem.isVideo) {
            this.displayZoom = 'hidden';
        }
        else {
            this.displayZoom = 'visible';
        }
        this.disableZoomIn = item.isZoomMax();
        this.disableZoomOut = item.isZoomMin();
        this.disableResetZoom = item.isZoomMin();
        this.disableFeetToWidth = item.isFeetToWidth();
    }
}
LightboxComponent.ɵfac = function LightboxComponent_Factory(t) { return new (t || LightboxComponent)(i0.ɵɵdirectiveInject(i1.LightboxConfigurationService)); };
LightboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LightboxComponent, selectors: [["lightbox"]], viewQuery: function LightboxComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
        i0.ɵɵviewQuery(_c1, 1);
        i0.ɵɵviewQuery(_c2, 1);
        i0.ɵɵviewQuery(_c3, 1);
        i0.ɵɵviewQuery(_c4, 1);
        i0.ɵɵviewQuery(_c5, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.background = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.toolbar = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.thumbnails = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.lightboxZoom = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._itemList = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._itemsRef = _t);
    } }, hostVars: 2, hostBindings: function LightboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function LightboxComponent_resize_HostBindingHandler($event) { return ctx._onResize($event); }, false, i0.ɵɵresolveWindow);
    } if (rf & 2) {
        i0.ɵɵstyleProp("pointer-events", ctx._pointerEvents);
    } }, decls: 13, vars: 39, consts: [[1, "lightbox-background"], [3, "ngStyle", "pagination", "title", "closeEvent", "firstEvent", "previousEvent", "nextEvent", "lastEvent", "thumbnailsToggleEvent"], ["toolbar", ""], [1, "lightbox-container", 3, "ngStyle", "ngClass"], [1, "lightbox-items-container", 3, "ngStyle"], [1, "lightbox-items-background", 3, "ngStyle", "tap", "swipeleft", "swiperight"], ["background", ""], ["class", "item-list", 4, "ngIf"], [3, "disableZoomIn", "disableZoomOut", "disableResetZoom", "disableFeetToWidth", "zoomInEvent", "zoomOutEvent", "resetZoomEvent", "feetToWidthEvent"], ["lightboxZoom", ""], [3, "ngStyle", "videoId", "ready", "change", "error"], [3, "ngClass", "items", "ngStyle", "selectEvent"], ["thumbnails", ""], [1, "item-list"], ["itemList", ""], [3, "item", "toggleEvent", 4, "ngFor", "ngForOf"], [3, "item", "toggleEvent"], ["lightboxItem", ""]], template: function LightboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("@backgroundVisibility.start", function LightboxComponent_Template_div_animation_backgroundVisibility_start_0_listener($event) { return ctx.backgroundVisibilityAnimator.animationStart($event); })("@backgroundVisibility.done", function LightboxComponent_Template_div_animation_backgroundVisibility_done_0_listener($event) { return ctx.backgroundVisibilityAnimator.animationDone($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "lightbox-toolbar", 1, 2);
        i0.ɵɵlistener("closeEvent", function LightboxComponent_Template_lightbox_toolbar_closeEvent_1_listener($event) { return ctx.onClose($event); })("firstEvent", function LightboxComponent_Template_lightbox_toolbar_firstEvent_1_listener() { return ctx.onFirst(); })("previousEvent", function LightboxComponent_Template_lightbox_toolbar_previousEvent_1_listener() { return ctx.onPrevious(); })("nextEvent", function LightboxComponent_Template_lightbox_toolbar_nextEvent_1_listener() { return ctx.onNext(); })("lastEvent", function LightboxComponent_Template_lightbox_toolbar_lastEvent_1_listener() { return ctx.onLast(); })("thumbnailsToggleEvent", function LightboxComponent_Template_lightbox_toolbar_thumbnailsToggleEvent_1_listener() { return ctx.thumbnailsToggle(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "div", 5, 6);
        i0.ɵɵlistener("tap", function LightboxComponent_Template_div_tap_5_listener($event) { return ctx.onClose($event); })("swipeleft", function LightboxComponent_Template_div_swipeleft_5_listener($event) { return ctx.swipe($event.type); })("swiperight", function LightboxComponent_Template_div_swiperight_5_listener($event) { return ctx.swipe($event.type); });
        i0.ɵɵtemplate(7, LightboxComponent_div_7_Template, 3, 2, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "lightbox-zoom", 8, 9);
        i0.ɵɵlistener("zoomInEvent", function LightboxComponent_Template_lightbox_zoom_zoomInEvent_8_listener() { return ctx.zoomIn(); })("zoomOutEvent", function LightboxComponent_Template_lightbox_zoom_zoomOutEvent_8_listener() { return ctx.zoomOut(); })("resetZoomEvent", function LightboxComponent_Template_lightbox_zoom_resetZoomEvent_8_listener() { return ctx.resetZoom(); })("feetToWidthEvent", function LightboxComponent_Template_lightbox_zoom_feetToWidthEvent_8_listener() { return ctx.feetToWidth(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "youtube", 10);
        i0.ɵɵlistener("ready", function LightboxComponent_Template_youtube_ready_10_listener($event) { return ctx.onReady($event); })("change", function LightboxComponent_Template_youtube_change_10_listener($event) { return ctx.onChange($event); })("error", function LightboxComponent_Template_youtube_error_10_listener($event) { return ctx.onError($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "lightbox-thumbnails", 11, 12);
        i0.ɵɵlistener("selectEvent", function LightboxComponent_Template_lightbox_thumbnails_selectEvent_11_listener($event) { return ctx.selectItem($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("@backgroundVisibility", ctx.backgroundVisibilityAnimator.animation);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(20, _c6, ctx.config.controls.toolbar.position === "top" ? 1 : 2))("pagination", ctx.pagination)("title", ctx.activeItem == null ? null : ctx.activeItem.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(22, _c6, ctx.config.controls.toolbar.position === "bottom" ? 1 : 2))("ngClass", i0.ɵɵpureFunction2(24, _c7, ctx.config.controls.thumbnails.position === "left" || ctx.config.controls.thumbnails.position === "right", ctx.config.controls.thumbnails.position === "top" || ctx.config.controls.thumbnails.position === "bottom"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(27, _c6, ctx.config.controls.thumbnails.position === "bottom" || ctx.config.controls.thumbnails.position === "right" ? 1 : 2));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(29, _c8, ctx.state === "closed" || ctx.state === "closing" ? "hidden" : "visible"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.activeItem);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("visibility", ctx.displayZoom);
        i0.ɵɵproperty("disableZoomIn", ctx.disableZoomIn)("disableZoomOut", ctx.disableZoomOut)("disableResetZoom", ctx.disableResetZoom)("disableFeetToWidth", ctx.disableFeetToWidth);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(31, _c8, ctx.displayYoutube ? "visible" : "hidden"))("videoId", ctx.activeItem ? ctx.getYoutubeVideoId() : undefined);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(33, _c9, ctx.config.controls.thumbnails.position === "left" || ctx.config.controls.thumbnails.position === "right", ctx.config.controls.thumbnails.position === "top" || ctx.config.controls.thumbnails.position === "bottom"))("items", ctx.activeItem ? ctx.items[ctx.activeItem.container] : i0.ɵɵpureFunction0(36, _c10))("ngStyle", i0.ɵɵpureFunction1(37, _c6, ctx.config.controls.thumbnails.position === "top" || ctx.config.controls.thumbnails.position === "left" ? 1 : 2));
    } }, directives: [i2.LightboxToolbarComponent, i3.NgStyle, i3.NgClass, i3.NgIf, i4.LightboxZoomComponent, i5.YoutubeComponent, i6.LightboxThumbnailsComponent, i3.NgForOf, i7.LightboxItemComponent], styles: ["lightbox{pointer-events:none;top:0;left:0;height:100%;width:100%;display:flex;flex-direction:column}lightbox .lightbox-background,lightbox .lightbox-items-background{height:100%;width:100%;position:absolute;top:0;z-index:1}lightbox .lightbox-background .item-list,lightbox .lightbox-items-background .item-list{position:relative;height:100%;display:flex}lightbox .lightbox-container{display:flex;flex:1 1 0%;position:relative;overflow:hidden}lightbox .lightbox-items-container{flex:1 1 0%;box-sizing:border-box;height:100%;position:relative}.lightbox-overlay-container{pointer-events:none;position:fixed;z-index:10000;height:100%;width:100%;top:0;left:0}lightbox .lightbox-container.vertical-container{flex-direction:row}lightbox .lightbox-container.horizontal-container{flex-direction:column}"], encapsulation: 2, data: { animation: [LightboxAnimations.visibilityAnimation, LightboxAnimations.sliceAnimation] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxComponent, [{
        type: Component,
        args: [{
                selector: 'lightbox',
                templateUrl: 'lightbox.component.html',
                styleUrls: ['lightbox.component.scss'],
                animations: [LightboxAnimations.visibilityAnimation, LightboxAnimations.sliceAnimation],
                host: {
                    '[style.pointer-events]': '_pointerEvents',
                },
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.LightboxConfigurationService }]; }, { background: [{
            type: ViewChild,
            args: ['background']
        }], toolbar: [{
            type: ViewChild,
            args: ['toolbar']
        }], thumbnails: [{
            type: ViewChild,
            args: ['thumbnails']
        }], lightboxZoom: [{
            type: ViewChild,
            args: ['lightboxZoom']
        }], _itemList: [{
            type: ViewChild,
            args: ['itemList']
        }], _itemsRef: [{
            type: ViewChildren,
            args: ['lightboxItem']
        }], _onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gvbGlnaHRib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gvbGlnaHRib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWEsWUFBWSxFQUFFLFlBQVksRUFBVSxpQkFBaUIsRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFZOUksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDMUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDL0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQTRCLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ29CakQsNkNBQXVIO0lBQXhHLHdOQUEwQjtJQUN6QyxpQkFBZ0I7OztJQUR5Riw4QkFBYTs7OztJQUoxSCxtQ0FHd0U7SUFEcEUsME1BQXdCLG9EQUE0QyxJQUFDLDJMQUM5QyxtREFBMkMsSUFERztJQUVyRSw2RkFDZ0I7SUFDcEIsaUJBQU07OztJQUxGLHVFQUFrRDtJQUd1QixlQUE4QjtJQUE5QixtRUFBOEI7Ozs7Ozs7QUROdkgsTUFBTSxPQUFPLGlCQUFpQjtJQTREMUIs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N0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdEMsVUFBVSxFQUFFLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLEVBQUUsa0JBQWtCLENBQUMsY0FBYyxDQUFDO2dCQUN2RixJQUFJLEVBQUU7b0JBQ0Ysd0JBQXdCLEVBQUUsZ0JBQWdCO2lCQUM3QztnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN4QzsrRUFPbUMsVUFBVTtrQkFBekMsU0FBUzttQkFBQyxZQUFZO1lBRU0sT0FBTztrQkFBbkMsU0FBUzttQkFBQyxTQUFTO1lBRVksVUFBVTtrQkFBekMsU0FBUzttQkFBQyxZQUFZO1lBRVcsWUFBWTtrQkFBN0MsU0FBUzttQkFBQyxjQUFjO1lBMEJNLFNBQVM7a0JBQXZDLFNBQVM7bUJBQUMsVUFBVTtZQUVpQixTQUFTO2tCQUE5QyxZQUFZO21CQUFDLGNBQWM7WUFvV3BCLFNBQVM7a0JBRGhCLFlBQVk7bUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIEFuaW1hdGlvbkV2ZW50LCBxdWVyeSwgYW5pbWF0ZUNoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvcGFnaW5hdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBMaWdodGJveFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuLi9saWdodGJveC10b29sYmFyL2xpZ2h0Ym94LXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlnaHRib3hUaHVtYm5haWxzQ29tcG9uZW50IH0gZnJvbSAnLi4vbGlnaHRib3gtdGh1bWJuYWlscy9saWdodGJveC10aHVtYm5haWxzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpZ2h0Ym94Wm9vbUNvbXBvbmVudCB9IGZyb20gJy4uL2xpZ2h0Ym94LXpvb20vbGlnaHRib3gtem9vbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaWdodGJveEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uL2xpZ2h0Ym94LWJ1dHRvbi9saWdodGJveC1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9pdGVtJztcclxuaW1wb3J0IHsgTGlnaHRib3hJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vbGlnaHRib3gtaXRlbS9saWdodGJveC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saWdodGJveC1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWaWRlbyB9IGZyb20gJy4uLy4uL21vZGVscy92aWRlbyc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Bvc2l0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IExpZ2h0Ym94U2xpY2VBbmltYXRvciB9IGZyb20gJy4uLy4uL21vZGVscy9saWdodGJveC9hbmltYXRpb25zL2xpZ2h0Ym94LXNsaWNlLWFuaW1hdG9yJztcclxuaW1wb3J0IHsgTGlnaHRib3hBbmltYXRpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpZ2h0Ym94L2FuaW1hdGlvbnMvbGlnaHRib3gtYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3IgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGlnaHRib3gvYW5pbWF0aW9ucy9iYWNrZ3JvdW5kLXZpc2liaWxpdHktYW5pbWF0b3InO1xyXG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RpbWVuc2lvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmRlY2xhcmUgdmFyIFlUOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGlnaHRib3gnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdsaWdodGJveC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnbGlnaHRib3guY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGFuaW1hdGlvbnM6IFtMaWdodGJveEFuaW1hdGlvbnMudmlzaWJpbGl0eUFuaW1hdGlvbiwgTGlnaHRib3hBbmltYXRpb25zLnNsaWNlQW5pbWF0aW9uXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW3N0eWxlLnBvaW50ZXItZXZlbnRzXSc6ICdfcG9pbnRlckV2ZW50cycsXHJcbiAgICB9LFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlnaHRib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHVibGljIHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7IGN1cnJlbnQ6IDAsIGNvdW50OiAwIH07XHJcblxyXG4gICAgcHVibGljIGRpc3BsYXlab29tOiAnaGlkZGVuJyB8ICd2aXNpYmxlJyA9ICdoaWRkZW4nO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2JhY2tncm91bmQnKSBwdWJsaWMgYmFja2dyb3VuZDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBAVmlld0NoaWxkKCd0b29sYmFyJykgcHVibGljIHRvb2xiYXI6IExpZ2h0Ym94VG9vbGJhckNvbXBvbmVudDtcclxuXHJcbiAgICBAVmlld0NoaWxkKCd0aHVtYm5haWxzJykgcHVibGljIHRodW1ibmFpbHM6IExpZ2h0Ym94VGh1bWJuYWlsc0NvbXBvbmVudDtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdsaWdodGJveFpvb20nKSBwdWJsaWMgbGlnaHRib3hab29tOiBMaWdodGJveFpvb21Db21wb25lbnQ7XHJcblxyXG4gICAgcHVibGljIGhhc05leHQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGhhc1ByZXZpb3VzOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5WW91dHViZSA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBpdGVtczogeyBbY29udGFpbmVyOiBzdHJpbmddOiBJdGVtW10gfSA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBhY3RpdmVJdGVtOiBJdGVtIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIHB1YmxpYyBsaWdodGJveFNsaWNlQW5pbWF0b3I6IExpZ2h0Ym94U2xpY2VBbmltYXRvcjtcclxuXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZFZpc2liaWxpdHlBbmltYXRvcjogQmFja2dyb3VuZFZpc2liaWxpdHlBbmltYXRvcjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGU6ICdvcGVuaW5nJyB8ICdvcGVuZWQnIHwgJ2Nsb3NpbmcnIHwgJ2Nsb3NlZCcgPSAnY2xvc2VkJztcclxuXHJcbiAgICBwdWJsaWMgZGlzYWJsZVpvb21JbjogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgZGlzYWJsZVpvb21PdXQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGRpc2FibGVSZXNldFpvb206IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGRpc2FibGVGZWV0VG9XaWR0aDogYm9vbGVhbjtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdpdGVtTGlzdCcpIHByaXZhdGUgX2l0ZW1MaXN0OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIEBWaWV3Q2hpbGRyZW4oJ2xpZ2h0Ym94SXRlbScpIHByaXZhdGUgX2l0ZW1zUmVmOiBRdWVyeUxpc3Q8TGlnaHRib3hJdGVtQ29tcG9uZW50PjtcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlQmVoYXZpb3JTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8J29wZW5pbmcnIHwgJ29wZW5lZCcgfCAnY2xvc2luZycgfCAnY2xvc2VkJz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PCdvcGVuaW5nJyB8ICdvcGVuZWQnIHwgJ2Nsb3NpbmcnIHwgJ2Nsb3NlZCc+KCdjbG9zZWQnKTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0ICRzdGF0ZSgpOiBPYnNlcnZhYmxlPCdvcGVuaW5nJyB8ICdvcGVuZWQnIHwgJ2Nsb3NpbmcnIHwgJ2Nsb3NlZCc+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlQmVoYXZpb3JTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3l0UGxheWVyOiBZVC5QbGF5ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9pbnRlckV2ZW50czogc3RyaW5nID0gJ25vbmUnO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgY29uZmlnKCk6IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9saWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5saWdodGJveFNsaWNlQW5pbWF0b3IgPSBuZXcgTGlnaHRib3hTbGljZUFuaW1hdG9yKCk7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVmlzaWJpbGl0eUFuaW1hdG9yID0gbmV3IEJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3IoKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZVN1YnNjcmlwdGlvbiA9IHRoaXMuJHN0YXRlLnN1YnNjcmliZSgodmFsdWU6ICdvcGVuaW5nJyB8ICdvcGVuZWQnIHwgJ2Nsb3NpbmcnIHwgJ2Nsb3NlZCcpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5JdGVtKGl0ZW06IEl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdjbG9zZWQnKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlSXRlbUluZGV4ID0gdGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVJdGVtUmVmID0gdGhpcy5faXRlbVJlZihhY3RpdmVJdGVtSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFZpc2liaWxpdHlBbmltYXRvci5zaG93KHRoaXMuY29uZmlnLmFuaW1hdGlvbnMuYmFja2dyb3VuZEZhZGVJbi5vcGFjaXR5LCB0aGlzLmNvbmZpZy5hbmltYXRpb25zLmJhY2tncm91bmRGYWRlSW4uZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzLmNoZWNrRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1ibmFpbHMuY2hlY2tUaHVtYm5haWxzRGltZW5zaW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3BlbkNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0SXRlbXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlnaHRib3hTbGljZUFuaW1hdG9yLnNsaWNlKC0xICogYWN0aXZlSXRlbUluZGV4ICogMTAwLCAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSXRlbVJlZi5vcGVuKHRoaXMuX2dldENvbnRhaW5lckRpbWVuc2lvbnNBZnRlck9wZW4oKSwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5WW91dHViZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlaGF2aW9yU3ViamVjdC5uZXh0KCdvcGVuaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrWm9vbShhY3RpdmVJdGVtUmVmKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1lvdXR1YmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVoYXZpb3JTdWJqZWN0Lm5leHQoJ29wZW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGh1bWJuYWlscy5zZWxlY3RJdGVtKHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRZb3V0dWJlVmlkZW9JZCgpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICByZXR1cm4gKHRoaXMuYWN0aXZlSXRlbSBhcyBWaWRlbykueW91dHViZVZpZW9JZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkSXRlbShpdGVtOiBJdGVtKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pdGVtc1tpdGVtLmNvbnRhaW5lcl0pIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaXRlbS5jb250YWluZXJdID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLml0ZW1zW2l0ZW0uY29udGFpbmVyXS5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0aHVtYm5haWxzVG9nZ2xlKCkge1xyXG5cclxuICAgICAgICB0aGlzLnRodW1ibmFpbHMudG9nZ2xlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oaXRlbTogSXRlbSk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2l0ZW1JbmRleChpdGVtKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1tpdGVtLmNvbnRhaW5lcl0uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVG9nZ2xlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLnRvb2xiYXIudG9nZ2xlKCk7XHJcbiAgICAgICAgdGhpcy5saWdodGJveFpvb20udG9nZ2xlKCk7XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxzLnRvZ2dsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsb3NlKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCghZXZlbnQgfHwgZXZlbnQudGFyZ2V0ID09PSB0aGlzLmJhY2tncm91bmQubmF0aXZlRWxlbWVudCkgJiYgdGhpcy5zdGF0ZSA9PT0gJ29wZW5lZCcpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWhhdmlvclN1YmplY3QubmV4dCgnY2xvc2luZycpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlZb3V0dWJlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFZpc2liaWxpdHlBbmltYXRvci5oaWRlKHRoaXMuY29uZmlnLmFuaW1hdGlvbnMuYmFja2dyb3VuZEZhZGVPdXQuZHVyYXRpb24sIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlaGF2aW9yU3ViamVjdC5uZXh0KCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3l0UGxheWVyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5feXRQbGF5ZXIuc3RvcFZpZGVvKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdEl0ZW0oaXRlbTogSXRlbSk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoaXRlbSAhPT0gdGhpcy5hY3RpdmVJdGVtKSB7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmFjdGl2ZUl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0QWN0aXZlSXRlbUluZGV4ID0gdGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0QWN0aXZlSXRlbVJlZiA9IHRoaXMuX2l0ZW1SZWYobGFzdEFjdGl2ZUl0ZW1JbmRleCk7XHJcbiAgICAgICAgICAgICAgICBsYXN0QWN0aXZlSXRlbVJlZi5yZXNldFpvb20oMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgY29uc3QgYWN0aXZlSXRlbUluZGV4ID0gdGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1SZWYgPSB0aGlzLl9pdGVtUmVmKGFjdGl2ZUl0ZW1JbmRleCk7XHJcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW1SZWYucmVzZXRab29tKDAsIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVlvdXR1YmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saWdodGJveFNsaWNlQW5pbWF0b3Iuc2xpY2UoLTEgKiBhY3RpdmVJdGVtSW5kZXggKiAxMDAsIHRoaXMuY29uZmlnLmFuaW1hdGlvbnMuaXRlbVNsaWNlLmR1cmF0aW9uLCBudWxsLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrWW91dHViZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVBhZ2luYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzLnNlbGVjdEl0ZW0odGhpcy5hY3RpdmVJdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tab29tKGFjdGl2ZUl0ZW1SZWYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTmV4dCgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbUluZGV4ID0gdGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSEpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlSXRlbUluZGV4ID49IDAgJiYgYWN0aXZlSXRlbUluZGV4IDwgdGhpcy5pdGVtc1t0aGlzLmFjdGl2ZUl0ZW0hLmNvbnRhaW5lcl0ubGVuZ3RoIC0gMSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtIS5jb250YWluZXJdW2FjdGl2ZUl0ZW1JbmRleCArIDFdO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkxhc3QoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0hKTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZUl0ZW1JbmRleCA+PSAwICYmIGFjdGl2ZUl0ZW1JbmRleCA8IHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtIS5jb250YWluZXJdLmxlbmd0aCAtIDEpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW3RoaXMuYWN0aXZlSXRlbSEuY29udGFpbmVyXVt0aGlzLml0ZW1zW3RoaXMuYWN0aXZlSXRlbSEuY29udGFpbmVyXS5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25GaXJzdCgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbUluZGV4ID0gdGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSEpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlSXRlbUluZGV4ID4gMCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtIS5jb250YWluZXJdWzBdO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblByZXZpb3VzKCkge1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVJdGVtSW5kZXggPSB0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtISk7XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmVJdGVtSW5kZXggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1t0aGlzLmFjdGl2ZUl0ZW0hLmNvbnRhaW5lcl1bYWN0aXZlSXRlbUluZGV4IC0gMV07XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbShpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHpvb21JbigpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVJdGVtUmVmID0gdGhpcy5faXRlbVJlZih0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtISkpO1xyXG4gICAgICAgIGFjdGl2ZUl0ZW1SZWYuem9vbUluKG51bGwsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrWm9vbShhY3RpdmVJdGVtUmVmKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgem9vbU91dCgpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVJdGVtUmVmID0gdGhpcy5faXRlbVJlZih0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtISkpO1xyXG4gICAgICAgIGFjdGl2ZUl0ZW1SZWYuem9vbU91dChudWxsLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jaGVja1pvb20oYWN0aXZlSXRlbVJlZik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0Wm9vbSgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbVJlZiA9IHRoaXMuX2l0ZW1SZWYodGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSEpKTtcclxuICAgICAgICBhY3RpdmVJdGVtUmVmLnJlc2V0Wm9vbSh0aGlzLmNvbmZpZy5hbmltYXRpb25zLnJlc2V0Wm9vbS5kdXJhdGlvbiwgbnVsbCwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tab29tKGFjdGl2ZUl0ZW1SZWYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmZWV0VG9XaWR0aCgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbVJlZiA9IHRoaXMuX2l0ZW1SZWYodGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSEpKTtcclxuICAgICAgICBhY3RpdmVJdGVtUmVmLmZlZXRUb1dpZHRoKG51bGwsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrWm9vbShhY3RpdmVJdGVtUmVmKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3dpcGUoYWN0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSB0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtKTtcclxuICAgICAgICBjb25zdCBpdGVtUmVmID0gdGhpcy5faXRlbVJlZihpdGVtSW5kZXgpO1xyXG4gICAgICAgIGlmICghaXRlbVJlZi5pc1pvb21NaW4oKSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICdzd2lwZWxlZnQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbk5leHQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzd2lwZXJpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMub25QcmV2aW91cygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblJlYWR5KGV2ZW50OiBZVC5QbGF5ZXJFdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLl95dFBsYXllciA9IGV2ZW50LnRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25FcnJvcihldmVudDogWVQuT25FcnJvckV2ZW50KSB7XHJcbiAgICAgICAgLy8gb24gZXJyb3JcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xvc2VDb250cm9scygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgWVQuUGxheWVyU3RhdGUuUEFVU0VEOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3BlbkNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdEl0ZW1zKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zW3RoaXMuYWN0aXZlSXRlbS5jb250YWluZXJdLmZvckVhY2goKGVsZW1lbnQ6IEl0ZW0pID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLmFjdGl2ZUl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50SW5kZXggPSB0aGlzLl9pdGVtSW5kZXgoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50UmVmID0gdGhpcy5faXRlbVJlZihlbGVtZW50SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFJlZi5yZXNldFpvb20oMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vcGVuQ29udHJvbHMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMudG9vbGJhci5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5saWdodGJveFpvb20ub3BlbigpO1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlscy5vcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xvc2VDb250cm9scygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy50b29sYmFyLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5saWdodGJveFpvb20uY2xvc2UoKTtcclxuICAgICAgICB0aGlzLnRodW1ibmFpbHMuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRDb250YWluZXJEaW1lbnNpb25zQWZ0ZXJPcGVuKCk6IERpbWVuc2lvbnMge1xyXG5cclxuICAgICAgICBsZXQgY29udGFpbmVyRGltZW5zaW9uczogRGltZW5zaW9ucztcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLmRpc2FibGUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRodW1ibmFpbHMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckRpbWVuc2lvbnMgPSBuZXcgRGltZW5zaW9ucyh0aGlzLl9pdGVtTGlzdC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoLCB0aGlzLl9pdGVtTGlzdC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIHRoaXMudGh1bWJuYWlscy50aGlja25lc3MgLSA2NCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJEaW1lbnNpb25zID0gbmV3IERpbWVuc2lvbnModGhpcy5faXRlbUxpc3QubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAtIHRoaXMudGh1bWJuYWlscy50aGlja25lc3MsIHRoaXMuX2l0ZW1MaXN0Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gNjQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29udGFpbmVyRGltZW5zaW9ucyA9IG5ldyBEaW1lbnNpb25zKHRoaXMuX2l0ZW1MaXN0Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgsIHRoaXMuX2l0ZW1MaXN0Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gNjQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckRpbWVuc2lvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlUGFnaW5hdGlvbigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbUluZGV4ID0gdGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnQgPSBhY3RpdmVJdGVtSW5kZXggKyAxO1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5jb3VudCA9IHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtLmNvbnRhaW5lcl0ubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NoZWNrWW91dHViZShpdGVtOiBJdGVtKSB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IHRoaXMuYWN0aXZlSXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVlvdXR1YmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzVmlkZW8pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5WW91dHViZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlZb3V0dWJlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pdGVtUmVmKGluZGV4OiBudW1iZXIpOiBMaWdodGJveEl0ZW1Db21wb25lbnQge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNSZWYudG9BcnJheSgpW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pdGVtSW5kZXgoaXRlbTogSXRlbSk6IG51bWJlciB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2l0ZW0uY29udGFpbmVyXS5pbmRleE9mKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gICAgcHJpdmF0ZSBfb25SZXNpemUoZXZlbnQ6IGFueSkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJdGVtUmVmID0gdGhpcy5faXRlbVJlZih0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtISkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZUl0ZW0uaXNWaWRlbykge1xyXG5cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW1SZWYucmVzaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tab29tKGFjdGl2ZUl0ZW1SZWYpO1xyXG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHMucmVzaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NoZWNrWm9vbShpdGVtOiBMaWdodGJveEl0ZW1Db21wb25lbnQpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbS5pc1ZpZGVvKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlab29tID0gJ2hpZGRlbic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVpvb20gPSAndmlzaWJsZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpc2FibGVab29tSW4gPSBpdGVtLmlzWm9vbU1heCgpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZVpvb21PdXQgPSBpdGVtLmlzWm9vbU1pbigpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZVJlc2V0Wm9vbSA9IGl0ZW0uaXNab29tTWluKCk7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlRmVldFRvV2lkdGggPSBpdGVtLmlzRmVldFRvV2lkdGgoKTtcclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibGlnaHRib3gtYmFja2dyb3VuZFwiXG4gICAgW0BiYWNrZ3JvdW5kVmlzaWJpbGl0eV09XCJiYWNrZ3JvdW5kVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvblwiXG4gICAgKEBiYWNrZ3JvdW5kVmlzaWJpbGl0eS5zdGFydCk9XCJiYWNrZ3JvdW5kVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvblN0YXJ0KCRldmVudClcIlxuICAgIChAYmFja2dyb3VuZFZpc2liaWxpdHkuZG9uZSk9XCJiYWNrZ3JvdW5kVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiPlxuPC9kaXY+XG5cbjxsaWdodGJveC10b29sYmFyICN0b29sYmFyXG4gICAgW25nU3R5bGVdPVwieydvcmRlcic6IGNvbmZpZy5jb250cm9scy50b29sYmFyLnBvc2l0aW9uID09PSAndG9wJyA/IDEgOiAyIH1cIlxuICAgIFtwYWdpbmF0aW9uXT1cInBhZ2luYXRpb25cIlxuICAgIFt0aXRsZV09XCJhY3RpdmVJdGVtPy50aXRsZVwiXG4gICAgKGNsb3NlRXZlbnQpPVwib25DbG9zZSgkZXZlbnQpXCJcbiAgICAoZmlyc3RFdmVudCk9XCJvbkZpcnN0KClcIlxuICAgIChwcmV2aW91c0V2ZW50KT1cIm9uUHJldmlvdXMoKVwiXG4gICAgKG5leHRFdmVudCk9XCJvbk5leHQoKVwiXG4gICAgKGxhc3RFdmVudCk9XCJvbkxhc3QoKVwiXG4gICAgKHRodW1ibmFpbHNUb2dnbGVFdmVudCk9XCJ0aHVtYm5haWxzVG9nZ2xlKClcIj5cbjwvbGlnaHRib3gtdG9vbGJhcj5cblxuPGRpdiBjbGFzcz1cImxpZ2h0Ym94LWNvbnRhaW5lclwiXG4gICAgW25nU3R5bGVdPVwieydvcmRlcic6IGNvbmZpZy5jb250cm9scy50b29sYmFyLnBvc2l0aW9uID09PSAnYm90dG9tJyA/IDEgOiAyIH1cIlxuICAgIFtuZ0NsYXNzXT1cInsndmVydGljYWwtY29udGFpbmVyJzogY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICdsZWZ0JyB8fCBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ3JpZ2h0JywgJ2hvcml6b250YWwtY29udGFpbmVyJzogY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICd0b3AnIHx8IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAnYm90dG9tJ31cIj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwibGlnaHRib3gtaXRlbXMtY29udGFpbmVyXCJcbiAgICAgICAgW25nU3R5bGVdPVwieydvcmRlcic6IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAnYm90dG9tJyB8fCBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/IDEgOiAyIH1cIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgI2JhY2tncm91bmQgXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJ7J3Zpc2liaWxpdHknOiBzdGF0ZSA9PT0gJ2Nsb3NlZCcgfHwgc3RhdGUgPT09ICdjbG9zaW5nJyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnIH1cIiBcbiAgICAgICAgICAgICh0YXApPVwib25DbG9zZSgkZXZlbnQpXCIgXG4gICAgICAgICAgICAoc3dpcGVsZWZ0KT1cInN3aXBlKCRldmVudC50eXBlKVwiIFxuICAgICAgICAgICAgKHN3aXBlcmlnaHQpPVwic3dpcGUoJGV2ZW50LnR5cGUpXCIgXG4gICAgICAgICAgICBjbGFzcz1cImxpZ2h0Ym94LWl0ZW1zLWJhY2tncm91bmRcIj5cblxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImFjdGl2ZUl0ZW1cIiBjbGFzcz1cIml0ZW0tbGlzdFwiICNpdGVtTGlzdFxuICAgICAgICAgICAgICAgIFtAbGlnaHRib3hTbGljZV09XCJsaWdodGJveFNsaWNlQW5pbWF0b3IuYW5pbWF0aW9uXCJcbiAgICAgICAgICAgICAgICAoQGxpZ2h0Ym94U2xpY2Uuc3RhcnQpPVwibGlnaHRib3hTbGljZUFuaW1hdG9yLmFuaW1hdGlvblN0YXJ0KCRldmVudClcIlxuICAgICAgICAgICAgICAgIChAbGlnaHRib3hTbGljZS5kb25lKT1cImxpZ2h0Ym94U2xpY2VBbmltYXRvci5hbmltYXRpb25Eb25lKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8bGlnaHRib3gtaXRlbSAodG9nZ2xlRXZlbnQpPVwib25Ub2dnbGUoKVwiICNsaWdodGJveEl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNbYWN0aXZlSXRlbS5jb250YWluZXJdXCIgW2l0ZW1dPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgIDwvbGlnaHRib3gtaXRlbT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bGlnaHRib3gtem9vbSAjbGlnaHRib3hab29tXG4gICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJkaXNwbGF5Wm9vbVwiXG4gICAgICAgICAgICBbZGlzYWJsZVpvb21Jbl09XCJkaXNhYmxlWm9vbUluXCJcbiAgICAgICAgICAgIFtkaXNhYmxlWm9vbU91dF09XCJkaXNhYmxlWm9vbU91dFwiXG4gICAgICAgICAgICBbZGlzYWJsZVJlc2V0Wm9vbV09XCJkaXNhYmxlUmVzZXRab29tXCJcbiAgICAgICAgICAgIFtkaXNhYmxlRmVldFRvV2lkdGhdPVwiZGlzYWJsZUZlZXRUb1dpZHRoXCJcbiAgICAgICAgICAgICh6b29tSW5FdmVudCk9XCJ6b29tSW4oKVwiXG4gICAgICAgICAgICAoem9vbU91dEV2ZW50KT1cInpvb21PdXQoKVwiXG4gICAgICAgICAgICAocmVzZXRab29tRXZlbnQpPVwicmVzZXRab29tKClcIlxuICAgICAgICAgICAgKGZlZXRUb1dpZHRoRXZlbnQpPVwiZmVldFRvV2lkdGgoKVwiPlxuICAgICAgICA8L2xpZ2h0Ym94LXpvb20+XG5cbiAgICAgICAgPHlvdXR1YmVcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsndmlzaWJpbGl0eSc6IGRpc3BsYXlZb3V0dWJlID8gJ3Zpc2libGUnIDogJ2hpZGRlbicgfVwiIFxuICAgICAgICAgICAgW3ZpZGVvSWRdPVwiYWN0aXZlSXRlbT8gZ2V0WW91dHViZVZpZGVvSWQoKSA6IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgKHJlYWR5KT1cIm9uUmVhZHkoJGV2ZW50KVwiXG4gICAgICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgKGVycm9yKT1cIm9uRXJyb3IoJGV2ZW50KVwiPlxuICAgICAgICA8L3lvdXR1YmU+XG5cbiAgICA8L2Rpdj5cbiAgICA8bGlnaHRib3gtdGh1bWJuYWlscyBbbmdDbGFzc109XCJ7J3ZlcnRpY2FsLXRodW1ibmFpbHMnOiBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAncmlnaHQnLCAnaG9yaXpvbnRhbC10aHVtYm5haWxzJzogY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICd0b3AnIHx8IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAnYm90dG9tJ31cIiAjdGh1bWJuYWlscyBbaXRlbXNdPVwiYWN0aXZlSXRlbT8gaXRlbXNbYWN0aXZlSXRlbS5jb250YWluZXJdOltdXCIgKHNlbGVjdEV2ZW50KT1cInNlbGVjdEl0ZW0oJGV2ZW50KVwiXG4gICAgW25nU3R5bGVdPVwieydvcmRlcic6IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAndG9wJyB8fCBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ2xlZnQnID8gMSA6IDIgfVwiPlxuICAgIDwvbGlnaHRib3gtdGh1bWJuYWlscz5cbjwvZGl2PlxuIl19