import { Component, ViewChild, ViewChildren, HostListener, ViewEncapsulation } from '@angular/core';
import { LightboxSliceAnimator } from '../../models/lightbox/animations/lightbox-slice-animator';
import { LightboxAnimations } from '../../models/lightbox/animations/lightbox-animations';
import { BackgroundVisibilityAnimator } from '../../models/lightbox/animations/background-visibility-animator';
import { Dimensions } from '../../models/dimensions.interface';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../services/lightbox-configuration.service";
import * as i2 from "ngx-device-detector";
import * as i3 from "../lightbox-toolbar/lightbox-toolbar.component";
import * as i4 from "@angular/common";
import * as i5 from "../lightbox-zoom/lightbox-zoom.component";
import * as i6 from "../../../cmacs-video-player/cmacs-video-player.component";
import * as i7 from "../lightbox-thumbnails/lightbox-thumbnails.component";
import * as i8 from "../lightbox-item/lightbox-item.component";
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
    constructor(_lightboxConfigurationService, deviceSelector) {
        this._lightboxConfigurationService = _lightboxConfigurationService;
        this.deviceSelector = deviceSelector;
        this.pagination = { current: 0, count: 0 };
        this.displayZoom = 'hidden';
        this.displayYoutube = false;
        this.items = {};
        this.state = 'closed';
        this._vgapi = null;
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
    getVideoSources() {
        return this.activeItem.sources;
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
        if (this.deviceSelector.isDesktop()) {
            return;
        }
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
    onPlayerReady(api) {
        this._vgapi = api;
        this._vgapi.getDefaultMedia().subscriptions.playing.subscribe(() => {
            this._closeControls();
        });
        this._vgapi.getDefaultMedia().subscriptions.pause.subscribe(() => {
            this._openControls();
        });
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
LightboxComponent.ɵfac = function LightboxComponent_Factory(t) { return new (t || LightboxComponent)(i0.ɵɵdirectiveInject(i1.LightboxConfigurationService), i0.ɵɵdirectiveInject(i2.DeviceDetectorService)); };
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
    } }, decls: 13, vars: 39, consts: [[1, "lightbox-background"], [3, "ngStyle", "pagination", "title", "closeEvent", "firstEvent", "previousEvent", "nextEvent", "lastEvent", "thumbnailsToggleEvent"], ["toolbar", ""], [1, "lightbox-container", 3, "ngStyle", "ngClass"], [1, "lightbox-items-container", 3, "ngStyle"], [1, "lightbox-items-background", 3, "ngStyle", "tap", "swipeleft", "swiperight"], ["background", ""], ["class", "item-list", 4, "ngIf"], [3, "disableZoomIn", "disableZoomOut", "disableResetZoom", "disableFeetToWidth", "zoomInEvent", "zoomOutEvent", "resetZoomEvent", "feetToWidthEvent"], ["lightboxZoom", ""], [1, "lightbox-video-player", 3, "sources", "ngStyle", "playerReady"], [3, "ngClass", "items", "ngStyle", "selectEvent"], ["thumbnails", ""], [1, "item-list"], ["itemList", ""], [3, "item", "toggleEvent", 4, "ngFor", "ngForOf"], [3, "item", "toggleEvent"], ["lightboxItem", ""]], template: function LightboxComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(10, "cmacs-video-player", 10);
        i0.ɵɵlistener("playerReady", function LightboxComponent_Template_cmacs_video_player_playerReady_10_listener($event) { return ctx.onPlayerReady($event); });
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
        i0.ɵɵproperty("sources", ctx.activeItem ? ctx.getVideoSources() : undefined)("ngStyle", i0.ɵɵpureFunction1(31, _c8, ctx.displayYoutube ? "visible" : "hidden"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(33, _c9, ctx.config.controls.thumbnails.position === "left" || ctx.config.controls.thumbnails.position === "right", ctx.config.controls.thumbnails.position === "top" || ctx.config.controls.thumbnails.position === "bottom"))("items", ctx.activeItem ? ctx.items[ctx.activeItem.container] : i0.ɵɵpureFunction0(36, _c10))("ngStyle", i0.ɵɵpureFunction1(37, _c6, ctx.config.controls.thumbnails.position === "top" || ctx.config.controls.thumbnails.position === "left" ? 1 : 2));
    } }, directives: [i3.LightboxToolbarComponent, i4.NgStyle, i4.NgClass, i4.NgIf, i5.LightboxZoomComponent, i6.CmacsVideoPlayerComponent, i7.LightboxThumbnailsComponent, i4.NgForOf, i8.LightboxItemComponent], styles: ["lightbox{pointer-events:none;top:0;left:0;height:100%;width:100%;display:flex;flex-direction:column}lightbox .lightbox-background,lightbox .lightbox-items-background{height:100%;width:100%;position:absolute;top:0;z-index:1}lightbox .lightbox-background .item-list,lightbox .lightbox-items-background .item-list{position:relative;height:100%;display:flex}lightbox .lightbox-container{display:flex;flex:1 1 0%;position:relative;overflow:hidden}lightbox .lightbox-items-container{flex:1 1 0%;box-sizing:border-box;height:100%;position:relative}.lightbox-items-background{background-color:#fff}.lightbox-overlay-container{pointer-events:none;position:fixed;z-index:10000;height:100%;width:100%;top:0;left:0}lightbox .lightbox-container.vertical-container{flex-direction:row}lightbox .lightbox-container.horizontal-container{flex-direction:column}"], encapsulation: 2, data: { animation: [LightboxAnimations.visibilityAnimation, LightboxAnimations.sliceAnimation] } });
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
    }], function () { return [{ type: i1.LightboxConfigurationService }, { type: i2.DeviceDetectorService }]; }, { background: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gvbGlnaHRib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gvbGlnaHRib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWEsWUFBWSxFQUFFLFlBQVksRUFBVSxpQkFBaUIsRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFZOUksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDMUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDL0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQTRCLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNvQnpELDZDQUF1SDtJQUF4Ryx3TkFBMEI7SUFDekMsaUJBQWdCOzs7SUFEeUYsOEJBQWE7Ozs7SUFKeEgsbUNBR3lFO0lBRHBFLDBNQUF3QixvREFBNEMsSUFBQywyTEFDOUMsbURBQTJDLElBREc7SUFFeEUsNkZBQ2dCO0lBQ2xCLGlCQUFNOzs7SUFMRCx1RUFBa0Q7SUFHb0IsZUFBOEI7SUFBOUIsbUVBQThCOzs7Ozs7O0FESi9HLE1BQU0sT0FBTyxpQkFBaUI7SUE4RDFC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LGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgSG9zdExpc3RlbmVyLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBBbmltYXRpb25FdmVudCwgcXVlcnksIGFuaW1hdGVDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BhZ2luYXRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTGlnaHRib3hUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vbGlnaHRib3gtdG9vbGJhci9saWdodGJveC10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpZ2h0Ym94VGh1bWJuYWlsc0NvbXBvbmVudCB9IGZyb20gJy4uL2xpZ2h0Ym94LXRodW1ibmFpbHMvbGlnaHRib3gtdGh1bWJuYWlscy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaWdodGJveFpvb21Db21wb25lbnQgfSBmcm9tICcuLi9saWdodGJveC16b29tL2xpZ2h0Ym94LXpvb20uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlnaHRib3hCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9saWdodGJveC1idXR0b24vbGlnaHRib3gtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvaXRlbSc7XHJcbmltcG9ydCB7IExpZ2h0Ym94SXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2xpZ2h0Ym94LWl0ZW0vbGlnaHRib3gtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGlnaHRib3gtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmlkZW8sIFZpZGVvU291cmNlcyB9IGZyb20gJy4uLy4uL21vZGVscy92aWRlbyc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Bvc2l0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IExpZ2h0Ym94U2xpY2VBbmltYXRvciB9IGZyb20gJy4uLy4uL21vZGVscy9saWdodGJveC9hbmltYXRpb25zL2xpZ2h0Ym94LXNsaWNlLWFuaW1hdG9yJztcclxuaW1wb3J0IHsgTGlnaHRib3hBbmltYXRpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpZ2h0Ym94L2FuaW1hdGlvbnMvbGlnaHRib3gtYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3IgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGlnaHRib3gvYW5pbWF0aW9ucy9iYWNrZ3JvdW5kLXZpc2liaWxpdHktYW5pbWF0b3InO1xyXG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RpbWVuc2lvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICduZ3gtdmlkZW9ndWxhcic7XHJcbmltcG9ydCB7IERldmljZURldGVjdG9yU2VydmljZSB9IGZyb20gJ25neC1kZXZpY2UtZGV0ZWN0b3InO1xyXG5cclxuZGVjbGFyZSB2YXIgWVQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsaWdodGJveCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2xpZ2h0Ym94LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydsaWdodGJveC5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgYW5pbWF0aW9uczogW0xpZ2h0Ym94QW5pbWF0aW9ucy52aXNpYmlsaXR5QW5pbWF0aW9uLCBMaWdodGJveEFuaW1hdGlvbnMuc2xpY2VBbmltYXRpb25dLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbc3R5bGUucG9pbnRlci1ldmVudHNdJzogJ19wb2ludGVyRXZlbnRzJyxcclxuICAgIH0sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWdodGJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBwdWJsaWMgcGFnaW5hdGlvbjogUGFnaW5hdGlvbiA9IHsgY3VycmVudDogMCwgY291bnQ6IDAgfTtcclxuXHJcbiAgICBwdWJsaWMgZGlzcGxheVpvb206ICdoaWRkZW4nIHwgJ3Zpc2libGUnID0gJ2hpZGRlbic7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnYmFja2dyb3VuZCcpIHB1YmxpYyBiYWNrZ3JvdW5kOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3Rvb2xiYXInKSBwdWJsaWMgdG9vbGJhcjogTGlnaHRib3hUb29sYmFyQ29tcG9uZW50O1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3RodW1ibmFpbHMnKSBwdWJsaWMgdGh1bWJuYWlsczogTGlnaHRib3hUaHVtYm5haWxzQ29tcG9uZW50O1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2xpZ2h0Ym94Wm9vbScpIHB1YmxpYyBsaWdodGJveFpvb206IExpZ2h0Ym94Wm9vbUNvbXBvbmVudDtcclxuXHJcbiAgICBwdWJsaWMgaGFzTmV4dDogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgaGFzUHJldmlvdXM6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGRpc3BsYXlZb3V0dWJlID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGl0ZW1zOiB7IFtjb250YWluZXI6IHN0cmluZ106IEl0ZW1bXSB9ID0ge307XHJcblxyXG4gICAgcHVibGljIGFjdGl2ZUl0ZW06IEl0ZW0gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgcHVibGljIGxpZ2h0Ym94U2xpY2VBbmltYXRvcjogTGlnaHRib3hTbGljZUFuaW1hdG9yO1xyXG5cclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kVmlzaWJpbGl0eUFuaW1hdG9yOiBCYWNrZ3JvdW5kVmlzaWJpbGl0eUFuaW1hdG9yO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0ZTogJ29wZW5pbmcnIHwgJ29wZW5lZCcgfCAnY2xvc2luZycgfCAnY2xvc2VkJyA9ICdjbG9zZWQnO1xyXG5cclxuICAgIHB1YmxpYyBkaXNhYmxlWm9vbUluOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBkaXNhYmxlWm9vbU91dDogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgZGlzYWJsZVJlc2V0Wm9vbTogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgZGlzYWJsZUZlZXRUb1dpZHRoOiBib29sZWFuO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2l0ZW1MaXN0JykgcHJpdmF0ZSBfaXRlbUxpc3Q6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgQFZpZXdDaGlsZHJlbignbGlnaHRib3hJdGVtJykgcHJpdmF0ZSBfaXRlbXNSZWY6IFF1ZXJ5TGlzdDxMaWdodGJveEl0ZW1Db21wb25lbnQ+O1xyXG5cclxuICAgIHByaXZhdGUgX3ZnYXBpOiBWZ0FQSSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZUJlaGF2aW9yU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PCdvcGVuaW5nJyB8ICdvcGVuZWQnIHwgJ2Nsb3NpbmcnIHwgJ2Nsb3NlZCc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDwnb3BlbmluZycgfCAnb3BlbmVkJyB8ICdjbG9zaW5nJyB8ICdjbG9zZWQnPignY2xvc2VkJyk7XHJcblxyXG4gICAgcHVibGljIGdldCAkc3RhdGUoKTogT2JzZXJ2YWJsZTwnb3BlbmluZycgfCAnb3BlbmVkJyB8ICdjbG9zaW5nJyB8ICdjbG9zZWQnPiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZUJlaGF2aW9yU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF95dFBsYXllcjogWVQuUGxheWVyO1xyXG5cclxuICAgIHByaXZhdGUgX3BvaW50ZXJFdmVudHM6IHN0cmluZyA9ICdub25lJztcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNvbmZpZygpOiBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2xpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2U6IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICAgIHByaXZhdGUgZGV2aWNlU2VsZWN0b3I6IERldmljZURldGVjdG9yU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMubGlnaHRib3hTbGljZUFuaW1hdG9yID0gbmV3IExpZ2h0Ym94U2xpY2VBbmltYXRvcigpO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFZpc2liaWxpdHlBbmltYXRvciA9IG5ldyBCYWNrZ3JvdW5kVmlzaWJpbGl0eUFuaW1hdG9yKCk7XHJcbiAgICAgICAgdGhpcy5fc3RhdGVTdWJzY3JpcHRpb24gPSB0aGlzLiRzdGF0ZS5zdWJzY3JpYmUoKHZhbHVlOiAnb3BlbmluZycgfCAnb3BlbmVkJyB8ICdjbG9zaW5nJyB8ICdjbG9zZWQnKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLl9zdGF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuSXRlbShpdGVtOiBJdGVtKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSAnY2xvc2VkJykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgdGhpcy5fcG9pbnRlckV2ZW50cyA9ICdhdXRvJztcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlSXRlbVJlZiA9IHRoaXMuX2l0ZW1SZWYoYWN0aXZlSXRlbUluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3Iuc2hvdyh0aGlzLmNvbmZpZy5hbmltYXRpb25zLmJhY2tncm91bmRGYWRlSW4ub3BhY2l0eSwgdGhpcy5jb25maWcuYW5pbWF0aW9ucy5iYWNrZ3JvdW5kRmFkZUluLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGh1bWJuYWlscy5jaGVja0RpcmVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzLmNoZWNrVGh1bWJuYWlsc0RpbWVuc2lvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29wZW5Db250cm9scygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdEl0ZW1zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpZ2h0Ym94U2xpY2VBbmltYXRvci5zbGljZSgtMSAqIGFjdGl2ZUl0ZW1JbmRleCAqIDEwMCwgMCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW1SZWYub3Blbih0aGlzLl9nZXRDb250YWluZXJEaW1lbnNpb25zQWZ0ZXJPcGVuKCksICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVlvdXR1YmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWhhdmlvclN1YmplY3QubmV4dCgnb3BlbmluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1pvb20oYWN0aXZlSXRlbVJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tZb3V0dWJlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlaGF2aW9yU3ViamVjdC5uZXh0KCdvcGVuZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRodW1ibmFpbHMuc2VsZWN0SXRlbSh0aGlzLmFjdGl2ZUl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmlkZW9Tb3VyY2VzKCk6IFZpZGVvU291cmNlc1tdIHtcclxuXHJcbiAgICAgIHJldHVybiAodGhpcy5hY3RpdmVJdGVtIGFzIFZpZGVvKS5zb3VyY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRJdGVtKGl0ZW06IEl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1zW2l0ZW0uY29udGFpbmVyXSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtc1tpdGVtLmNvbnRhaW5lcl0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXNbaXRlbS5jb250YWluZXJdLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRodW1ibmFpbHNUb2dnbGUoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGh1bWJuYWlscy50b2dnbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShpdGVtOiBJdGVtKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5faXRlbUluZGV4KGl0ZW0pO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW2l0ZW0uY29udGFpbmVyXS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Ub2dnbGUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMudG9vbGJhci50b2dnbGUoKTtcclxuICAgICAgICB0aGlzLmxpZ2h0Ym94Wm9vbS50b2dnbGUoKTtcclxuICAgICAgICB0aGlzLnRodW1ibmFpbHMudG9nZ2xlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2xvc2UoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoKCFldmVudCB8fCBldmVudC50YXJnZXQgPT09IHRoaXMuYmFja2dyb3VuZC5uYXRpdmVFbGVtZW50KSAmJiB0aGlzLnN0YXRlID09PSAnb3BlbmVkJykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUJlaGF2aW9yU3ViamVjdC5uZXh0KCdjbG9zaW5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVlvdXR1YmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVmlzaWJpbGl0eUFuaW1hdG9yLmhpZGUodGhpcy5jb25maWcuYW5pbWF0aW9ucy5iYWNrZ3JvdW5kRmFkZU91dC5kdXJhdGlvbiwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVoYXZpb3JTdWJqZWN0Lm5leHQoJ2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fY2xvc2VDb250cm9scygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5feXRQbGF5ZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl95dFBsYXllci5zdG9wVmlkZW8oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0SXRlbShpdGVtOiBJdGVtKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChpdGVtICE9PSB0aGlzLmFjdGl2ZUl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYWN0aXZlSXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RBY3RpdmVJdGVtSW5kZXggPSB0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RBY3RpdmVJdGVtUmVmID0gdGhpcy5faXRlbVJlZihsYXN0QWN0aXZlSXRlbUluZGV4KTtcclxuICAgICAgICAgICAgICAgIGxhc3RBY3RpdmVJdGVtUmVmLnJlc2V0Wm9vbSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJdGVtSW5kZXggPSB0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtKTtcclxuICAgICAgICAgICAgY29uc3QgYWN0aXZlSXRlbVJlZiA9IHRoaXMuX2l0ZW1SZWYoYWN0aXZlSXRlbUluZGV4KTtcclxuICAgICAgICAgICAgYWN0aXZlSXRlbVJlZi5yZXNldFpvb20oMCwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5WW91dHViZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpZ2h0Ym94U2xpY2VBbmltYXRvci5zbGljZSgtMSAqIGFjdGl2ZUl0ZW1JbmRleCAqIDEwMCwgdGhpcy5jb25maWcuYW5pbWF0aW9ucy5pdGVtU2xpY2UuZHVyYXRpb24sIG51bGwsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tZb3V0dWJlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHMuc2VsZWN0SXRlbSh0aGlzLmFjdGl2ZUl0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLl9jaGVja1pvb20oYWN0aXZlSXRlbVJlZik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25OZXh0KCkge1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVJdGVtSW5kZXggPSB0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtISk7XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmVJdGVtSW5kZXggPj0gMCAmJiBhY3RpdmVJdGVtSW5kZXggPCB0aGlzLml0ZW1zW3RoaXMuYWN0aXZlSXRlbSEuY29udGFpbmVyXS5sZW5ndGggLSAxKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1t0aGlzLmFjdGl2ZUl0ZW0hLmNvbnRhaW5lcl1bYWN0aXZlSXRlbUluZGV4ICsgMV07XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbShpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTGFzdCgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbUluZGV4ID0gdGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSEpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlSXRlbUluZGV4ID49IDAgJiYgYWN0aXZlSXRlbUluZGV4IDwgdGhpcy5pdGVtc1t0aGlzLmFjdGl2ZUl0ZW0hLmNvbnRhaW5lcl0ubGVuZ3RoIC0gMSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtIS5jb250YWluZXJdW3RoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtIS5jb250YWluZXJdLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkZpcnN0KCkge1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVJdGVtSW5kZXggPSB0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtISk7XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmVJdGVtSW5kZXggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1t0aGlzLmFjdGl2ZUl0ZW0hLmNvbnRhaW5lcl1bMF07XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbShpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUHJldmlvdXMoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0hKTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZUl0ZW1JbmRleCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW3RoaXMuYWN0aXZlSXRlbSEuY29udGFpbmVyXVthY3RpdmVJdGVtSW5kZXggLSAxXTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgem9vbUluKCkge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1SZWYgPSB0aGlzLl9pdGVtUmVmKHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0hKSk7XHJcbiAgICAgICAgYWN0aXZlSXRlbVJlZi56b29tSW4obnVsbCwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tab29tKGFjdGl2ZUl0ZW1SZWYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB6b29tT3V0KCkge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1SZWYgPSB0aGlzLl9pdGVtUmVmKHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0hKSk7XHJcbiAgICAgICAgYWN0aXZlSXRlbVJlZi56b29tT3V0KG51bGwsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrWm9vbShhY3RpdmVJdGVtUmVmKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXRab29tKCkge1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVJdGVtUmVmID0gdGhpcy5faXRlbVJlZih0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtISkpO1xyXG4gICAgICAgIGFjdGl2ZUl0ZW1SZWYucmVzZXRab29tKHRoaXMuY29uZmlnLmFuaW1hdGlvbnMucmVzZXRab29tLmR1cmF0aW9uLCBudWxsLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jaGVja1pvb20oYWN0aXZlSXRlbVJlZik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZlZXRUb1dpZHRoKCkge1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVJdGVtUmVmID0gdGhpcy5faXRlbVJlZih0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtISkpO1xyXG4gICAgICAgIGFjdGl2ZUl0ZW1SZWYuZmVldFRvV2lkdGgobnVsbCwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tab29tKGFjdGl2ZUl0ZW1SZWYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2lwZShhY3Rpb246IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmRldmljZVNlbGVjdG9yLmlzRGVza3RvcCgpKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0pO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1SZWYgPSB0aGlzLl9pdGVtUmVmKGl0ZW1JbmRleCk7XHJcbiAgICAgICAgaWYgKCFpdGVtUmVmLmlzWm9vbU1pbigpKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N3aXBlbGVmdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N3aXBlcmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUmVhZHkoZXZlbnQ6IFlULlBsYXllckV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuX3l0UGxheWVyID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkVycm9yKGV2ZW50OiBZVC5PbkVycm9yRXZlbnQpIHtcclxuICAgICAgICAvLyBvbiBlcnJvclxyXG4gICAgfVxyXG5cclxuICAgIG9uUGxheWVyUmVhZHkoYXBpOiBWZ0FQSSkge1xyXG5cclxuICAgICAgdGhpcy5fdmdhcGkgPSBhcGk7XHJcbiAgICAgIHRoaXMuX3ZnYXBpLmdldERlZmF1bHRNZWRpYSgpLnN1YnNjcmlwdGlvbnMucGxheWluZy5zdWJzY3JpYmUoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fY2xvc2VDb250cm9scygpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fdmdhcGkuZ2V0RGVmYXVsdE1lZGlhKCkuc3Vic2NyaXB0aW9ucy5wYXVzZS5zdWJzY3JpYmUoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fb3BlbkNvbnRyb2xzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgb25DaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xvc2VDb250cm9scygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgWVQuUGxheWVyU3RhdGUuUEFVU0VEOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3BlbkNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdEl0ZW1zKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zW3RoaXMuYWN0aXZlSXRlbS5jb250YWluZXJdLmZvckVhY2goKGVsZW1lbnQ6IEl0ZW0pID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLmFjdGl2ZUl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50SW5kZXggPSB0aGlzLl9pdGVtSW5kZXgoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50UmVmID0gdGhpcy5faXRlbVJlZihlbGVtZW50SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFJlZi5yZXNldFpvb20oMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vcGVuQ29udHJvbHMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMudG9vbGJhci5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5saWdodGJveFpvb20ub3BlbigpO1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlscy5vcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xvc2VDb250cm9scygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy50b29sYmFyLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5saWdodGJveFpvb20uY2xvc2UoKTtcclxuICAgICAgICB0aGlzLnRodW1ibmFpbHMuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRDb250YWluZXJEaW1lbnNpb25zQWZ0ZXJPcGVuKCk6IERpbWVuc2lvbnMge1xyXG5cclxuICAgICAgICBsZXQgY29udGFpbmVyRGltZW5zaW9uczogRGltZW5zaW9ucztcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLmRpc2FibGUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRodW1ibmFpbHMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckRpbWVuc2lvbnMgPSBuZXcgRGltZW5zaW9ucyh0aGlzLl9pdGVtTGlzdC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoLCB0aGlzLl9pdGVtTGlzdC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIHRoaXMudGh1bWJuYWlscy50aGlja25lc3MgLSA2NCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJEaW1lbnNpb25zID0gbmV3IERpbWVuc2lvbnModGhpcy5faXRlbUxpc3QubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAtIHRoaXMudGh1bWJuYWlscy50aGlja25lc3MsIHRoaXMuX2l0ZW1MaXN0Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gNjQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29udGFpbmVyRGltZW5zaW9ucyA9IG5ldyBEaW1lbnNpb25zKHRoaXMuX2l0ZW1MaXN0Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgsIHRoaXMuX2l0ZW1MaXN0Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gNjQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckRpbWVuc2lvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlUGFnaW5hdGlvbigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbUluZGV4ID0gdGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnQgPSBhY3RpdmVJdGVtSW5kZXggKyAxO1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5jb3VudCA9IHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtLmNvbnRhaW5lcl0ubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NoZWNrWW91dHViZShpdGVtOiBJdGVtKSB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IHRoaXMuYWN0aXZlSXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVlvdXR1YmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzVmlkZW8pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5WW91dHViZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlZb3V0dWJlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pdGVtUmVmKGluZGV4OiBudW1iZXIpOiBMaWdodGJveEl0ZW1Db21wb25lbnQge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNSZWYudG9BcnJheSgpW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pdGVtSW5kZXgoaXRlbTogSXRlbSk6IG51bWJlciB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2l0ZW0uY29udGFpbmVyXS5pbmRleE9mKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gICAgcHJpdmF0ZSBfb25SZXNpemUoZXZlbnQ6IGFueSkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJdGVtUmVmID0gdGhpcy5faXRlbVJlZih0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtISkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZUl0ZW0uaXNWaWRlbykge1xyXG5cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW1SZWYucmVzaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tab29tKGFjdGl2ZUl0ZW1SZWYpO1xyXG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHMucmVzaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NoZWNrWm9vbShpdGVtOiBMaWdodGJveEl0ZW1Db21wb25lbnQpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbS5pc1ZpZGVvKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlab29tID0gJ2hpZGRlbic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVpvb20gPSAndmlzaWJsZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpc2FibGVab29tSW4gPSBpdGVtLmlzWm9vbU1heCgpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZVpvb21PdXQgPSBpdGVtLmlzWm9vbU1pbigpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZVJlc2V0Wm9vbSA9IGl0ZW0uaXNab29tTWluKCk7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlRmVldFRvV2lkdGggPSBpdGVtLmlzRmVldFRvV2lkdGgoKTtcclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibGlnaHRib3gtYmFja2dyb3VuZFwiXG4gICAgW0BiYWNrZ3JvdW5kVmlzaWJpbGl0eV09XCJiYWNrZ3JvdW5kVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvblwiXG4gICAgKEBiYWNrZ3JvdW5kVmlzaWJpbGl0eS5zdGFydCk9XCJiYWNrZ3JvdW5kVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvblN0YXJ0KCRldmVudClcIlxuICAgIChAYmFja2dyb3VuZFZpc2liaWxpdHkuZG9uZSk9XCJiYWNrZ3JvdW5kVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiPlxuPC9kaXY+XG5cbjxsaWdodGJveC10b29sYmFyICN0b29sYmFyXG4gICAgW25nU3R5bGVdPVwieydvcmRlcic6IGNvbmZpZy5jb250cm9scy50b29sYmFyLnBvc2l0aW9uID09PSAndG9wJyA/IDEgOiAyIH1cIlxuICAgIFtwYWdpbmF0aW9uXT1cInBhZ2luYXRpb25cIlxuICAgIFt0aXRsZV09XCJhY3RpdmVJdGVtPy50aXRsZVwiXG4gICAgKGNsb3NlRXZlbnQpPVwib25DbG9zZSgkZXZlbnQpXCJcbiAgICAoZmlyc3RFdmVudCk9XCJvbkZpcnN0KClcIlxuICAgIChwcmV2aW91c0V2ZW50KT1cIm9uUHJldmlvdXMoKVwiXG4gICAgKG5leHRFdmVudCk9XCJvbk5leHQoKVwiXG4gICAgKGxhc3RFdmVudCk9XCJvbkxhc3QoKVwiXG4gICAgKHRodW1ibmFpbHNUb2dnbGVFdmVudCk9XCJ0aHVtYm5haWxzVG9nZ2xlKClcIj5cbjwvbGlnaHRib3gtdG9vbGJhcj5cblxuPGRpdiBjbGFzcz1cImxpZ2h0Ym94LWNvbnRhaW5lclwiXG4gICAgW25nU3R5bGVdPVwieydvcmRlcic6IGNvbmZpZy5jb250cm9scy50b29sYmFyLnBvc2l0aW9uID09PSAnYm90dG9tJyA/IDEgOiAyIH1cIlxuICAgIFtuZ0NsYXNzXT1cInsndmVydGljYWwtY29udGFpbmVyJzogY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICdsZWZ0JyB8fCBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ3JpZ2h0JywgJ2hvcml6b250YWwtY29udGFpbmVyJzogY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICd0b3AnIHx8IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAnYm90dG9tJ31cIj5cbiAgICBcbiAgPGRpdiBjbGFzcz1cImxpZ2h0Ym94LWl0ZW1zLWNvbnRhaW5lclwiXG4gICAgICAgW25nU3R5bGVdPVwieydvcmRlcic6IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAnYm90dG9tJyB8fCBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/IDEgOiAyIH1cIj5cblxuICAgIDxkaXYgI2JhY2tncm91bmRcbiAgICAgICAgIFtuZ1N0eWxlXT1cInsndmlzaWJpbGl0eSc6IHN0YXRlID09PSAnY2xvc2VkJyB8fCBzdGF0ZSA9PT0gJ2Nsb3NpbmcnID8gJ2hpZGRlbicgOiAndmlzaWJsZScgfVwiXG4gICAgICAgICAodGFwKT1cIm9uQ2xvc2UoJGV2ZW50KVwiXG4gICAgICAgICAoc3dpcGVsZWZ0KT1cInN3aXBlKCRldmVudC50eXBlKVwiXG4gICAgICAgICAoc3dpcGVyaWdodCk9XCJzd2lwZSgkZXZlbnQudHlwZSlcIlxuICAgICAgICAgY2xhc3M9XCJsaWdodGJveC1pdGVtcy1iYWNrZ3JvdW5kXCI+XG5cbiAgICAgIDxkaXYgKm5nSWY9XCJhY3RpdmVJdGVtXCIgY2xhc3M9XCJpdGVtLWxpc3RcIiAjaXRlbUxpc3RcbiAgICAgICAgICAgW0BsaWdodGJveFNsaWNlXT1cImxpZ2h0Ym94U2xpY2VBbmltYXRvci5hbmltYXRpb25cIlxuICAgICAgICAgICAoQGxpZ2h0Ym94U2xpY2Uuc3RhcnQpPVwibGlnaHRib3hTbGljZUFuaW1hdG9yLmFuaW1hdGlvblN0YXJ0KCRldmVudClcIlxuICAgICAgICAgICAoQGxpZ2h0Ym94U2xpY2UuZG9uZSk9XCJsaWdodGJveFNsaWNlQW5pbWF0b3IuYW5pbWF0aW9uRG9uZSgkZXZlbnQpXCI+XG4gICAgICAgIDxsaWdodGJveC1pdGVtICh0b2dnbGVFdmVudCk9XCJvblRvZ2dsZSgpXCIgI2xpZ2h0Ym94SXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1thY3RpdmVJdGVtLmNvbnRhaW5lcl1cIiBbaXRlbV09XCJpdGVtXCI+XG4gICAgICAgIDwvbGlnaHRib3gtaXRlbT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGxpZ2h0Ym94LXpvb20gI2xpZ2h0Ym94Wm9vbVxuICAgICAgICAgICAgICAgICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cImRpc3BsYXlab29tXCJcbiAgICAgICAgICAgICAgICAgICBbZGlzYWJsZVpvb21Jbl09XCJkaXNhYmxlWm9vbUluXCJcbiAgICAgICAgICAgICAgICAgICBbZGlzYWJsZVpvb21PdXRdPVwiZGlzYWJsZVpvb21PdXRcIlxuICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlUmVzZXRab29tXT1cImRpc2FibGVSZXNldFpvb21cIlxuICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlRmVldFRvV2lkdGhdPVwiZGlzYWJsZUZlZXRUb1dpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAoem9vbUluRXZlbnQpPVwiem9vbUluKClcIlxuICAgICAgICAgICAgICAgICAgICh6b29tT3V0RXZlbnQpPVwiem9vbU91dCgpXCJcbiAgICAgICAgICAgICAgICAgICAocmVzZXRab29tRXZlbnQpPVwicmVzZXRab29tKClcIlxuICAgICAgICAgICAgICAgICAgIChmZWV0VG9XaWR0aEV2ZW50KT1cImZlZXRUb1dpZHRoKClcIj5cbiAgICA8L2xpZ2h0Ym94LXpvb20+XG5cbiAgICA8Y21hY3MtdmlkZW8tcGxheWVyIFtzb3VyY2VzXT1cImFjdGl2ZUl0ZW0/IGdldFZpZGVvU291cmNlcygpIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGlnaHRib3gtdmlkZW8tcGxheWVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChwbGF5ZXJSZWFkeSk9XCJvblBsYXllclJlYWR5KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieyd2aXNpYmlsaXR5JzogZGlzcGxheVlvdXR1YmUgPyAndmlzaWJsZScgOiAnaGlkZGVuJyB9XCI+XG4gICAgPC9jbWFjcy12aWRlby1wbGF5ZXI+XG5cbiAgPC9kaXY+XG4gICAgPGxpZ2h0Ym94LXRodW1ibmFpbHMgW25nQ2xhc3NdPVwieyd2ZXJ0aWNhbC10aHVtYm5haWxzJzogY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICdsZWZ0JyB8fCBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ3JpZ2h0JywgJ2hvcml6b250YWwtdGh1bWJuYWlscyc6IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAndG9wJyB8fCBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ2JvdHRvbSd9XCIgI3RodW1ibmFpbHMgW2l0ZW1zXT1cImFjdGl2ZUl0ZW0/IGl0ZW1zW2FjdGl2ZUl0ZW0uY29udGFpbmVyXTpbXVwiIChzZWxlY3RFdmVudCk9XCJzZWxlY3RJdGVtKCRldmVudClcIlxuICAgIFtuZ1N0eWxlXT1cInsnb3JkZXInOiBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ3RvcCcgfHwgY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICdsZWZ0JyA/IDEgOiAyIH1cIj5cbiAgICA8L2xpZ2h0Ym94LXRodW1ibmFpbHM+XG48L2Rpdj5cbiJdfQ==