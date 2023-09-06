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
            const html = document.getElementsByTagName('html');
            if (html.length) {
                html[0].style.overflow = this.state === 'closed' ? 'inherit' : 'hidden';
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gvbGlnaHRib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gvbGlnaHRib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWEsWUFBWSxFQUFFLFlBQVksRUFBVSxpQkFBaUIsRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFZOUksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDMUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDL0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQTRCLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNvQnpELDZDQUF1SDtJQUF4Ryx3TkFBMEI7SUFDekMsaUJBQWdCOzs7SUFEeUYsOEJBQWE7Ozs7SUFKeEgsbUNBR3lFO0lBRHBFLDBNQUF3QixvREFBNEMsSUFBQywyTEFDOUMsbURBQTJDLElBREc7SUFFeEUsNkZBQ2dCO0lBQ2xCLGlCQUFNOzs7SUFMRCx1RUFBa0Q7SUFHb0IsZUFBOEI7SUFBOUIsbUVBQThCOzs7Ozs7O0FESi9HLE1BQU0sT0FBTyxpQkFBaUI7SUE4RDFC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ekMsU0FBUzttQkFBQyxZQUFZO1lBRU0sT0FBTztrQkFBbkMsU0FBUzttQkFBQyxTQUFTO1lBRVksVUFBVTtrQkFBekMsU0FBUzttQkFBQyxZQUFZO1lBRVcsWUFBWTtrQkFBN0MsU0FBUzttQkFBQyxjQUFjO1lBMEJNLFNBQVM7a0JBQXZDLFNBQVM7bUJBQUMsVUFBVTtZQUVpQixTQUFTO2tCQUE5QyxZQUFZO21CQUFDLGNBQWM7WUE4WHBCLFNBQVM7a0JBRGhCLFlBQVk7bUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIEFuaW1hdGlvbkV2ZW50LCBxdWVyeSwgYW5pbWF0ZUNoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvcGFnaW5hdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBMaWdodGJveFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuLi9saWdodGJveC10b29sYmFyL2xpZ2h0Ym94LXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlnaHRib3hUaHVtYm5haWxzQ29tcG9uZW50IH0gZnJvbSAnLi4vbGlnaHRib3gtdGh1bWJuYWlscy9saWdodGJveC10aHVtYm5haWxzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpZ2h0Ym94Wm9vbUNvbXBvbmVudCB9IGZyb20gJy4uL2xpZ2h0Ym94LXpvb20vbGlnaHRib3gtem9vbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaWdodGJveEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uL2xpZ2h0Ym94LWJ1dHRvbi9saWdodGJveC1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9pdGVtJztcclxuaW1wb3J0IHsgTGlnaHRib3hJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vbGlnaHRib3gtaXRlbS9saWdodGJveC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saWdodGJveC1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWaWRlbywgVmlkZW9Tb3VyY2VzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3ZpZGVvJztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvcG9zaXRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTGlnaHRib3hTbGljZUFuaW1hdG9yIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpZ2h0Ym94L2FuaW1hdGlvbnMvbGlnaHRib3gtc2xpY2UtYW5pbWF0b3InO1xyXG5pbXBvcnQgeyBMaWdodGJveEFuaW1hdGlvbnMgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGlnaHRib3gvYW5pbWF0aW9ucy9saWdodGJveC1hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQmFja2dyb3VuZFZpc2liaWxpdHlBbmltYXRvciB9IGZyb20gJy4uLy4uL21vZGVscy9saWdodGJveC9hbmltYXRpb25zL2JhY2tncm91bmQtdmlzaWJpbGl0eS1hbmltYXRvcic7XHJcbmltcG9ydCB7IERpbWVuc2lvbnMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGltZW5zaW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJ25neC12aWRlb2d1bGFyJztcclxuaW1wb3J0IHsgRGV2aWNlRGV0ZWN0b3JTZXJ2aWNlIH0gZnJvbSAnbmd4LWRldmljZS1kZXRlY3Rvcic7XHJcblxyXG5kZWNsYXJlIHZhciBZVDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpZ2h0Ym94JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnbGlnaHRib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2xpZ2h0Ym94LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBbTGlnaHRib3hBbmltYXRpb25zLnZpc2liaWxpdHlBbmltYXRpb24sIExpZ2h0Ym94QW5pbWF0aW9ucy5zbGljZUFuaW1hdGlvbl0sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tzdHlsZS5wb2ludGVyLWV2ZW50c10nOiAnX3BvaW50ZXJFdmVudHMnLFxyXG4gICAgfSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIExpZ2h0Ym94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHB1YmxpYyBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uID0geyBjdXJyZW50OiAwLCBjb3VudDogMCB9O1xyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5Wm9vbTogJ2hpZGRlbicgfCAndmlzaWJsZScgPSAnaGlkZGVuJztcclxuXHJcbiAgICBAVmlld0NoaWxkKCdiYWNrZ3JvdW5kJykgcHVibGljIGJhY2tncm91bmQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgndG9vbGJhcicpIHB1YmxpYyB0b29sYmFyOiBMaWdodGJveFRvb2xiYXJDb21wb25lbnQ7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgndGh1bWJuYWlscycpIHB1YmxpYyB0aHVtYm5haWxzOiBMaWdodGJveFRodW1ibmFpbHNDb21wb25lbnQ7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnbGlnaHRib3hab29tJykgcHVibGljIGxpZ2h0Ym94Wm9vbTogTGlnaHRib3hab29tQ29tcG9uZW50O1xyXG5cclxuICAgIHB1YmxpYyBoYXNOZXh0OiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBoYXNQcmV2aW91czogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgZGlzcGxheVlvdXR1YmUgPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgaXRlbXM6IHsgW2NvbnRhaW5lcjogc3RyaW5nXTogSXRlbVtdIH0gPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgYWN0aXZlSXRlbTogSXRlbSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBwdWJsaWMgbGlnaHRib3hTbGljZUFuaW1hdG9yOiBMaWdodGJveFNsaWNlQW5pbWF0b3I7XHJcblxyXG4gICAgcHVibGljIGJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3I6IEJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3I7XHJcblxyXG4gICAgcHVibGljIHN0YXRlOiAnb3BlbmluZycgfCAnb3BlbmVkJyB8ICdjbG9zaW5nJyB8ICdjbG9zZWQnID0gJ2Nsb3NlZCc7XHJcblxyXG4gICAgcHVibGljIGRpc2FibGVab29tSW46IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGRpc2FibGVab29tT3V0OiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBkaXNhYmxlUmVzZXRab29tOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBkaXNhYmxlRmVldFRvV2lkdGg6IGJvb2xlYW47XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnaXRlbUxpc3QnKSBwcml2YXRlIF9pdGVtTGlzdDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBAVmlld0NoaWxkcmVuKCdsaWdodGJveEl0ZW0nKSBwcml2YXRlIF9pdGVtc1JlZjogUXVlcnlMaXN0PExpZ2h0Ym94SXRlbUNvbXBvbmVudD47XHJcblxyXG4gICAgcHJpdmF0ZSBfdmdhcGk6IFZnQVBJID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlQmVoYXZpb3JTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8J29wZW5pbmcnIHwgJ29wZW5lZCcgfCAnY2xvc2luZycgfCAnY2xvc2VkJz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PCdvcGVuaW5nJyB8ICdvcGVuZWQnIHwgJ2Nsb3NpbmcnIHwgJ2Nsb3NlZCc+KCdjbG9zZWQnKTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0ICRzdGF0ZSgpOiBPYnNlcnZhYmxlPCdvcGVuaW5nJyB8ICdvcGVuZWQnIHwgJ2Nsb3NpbmcnIHwgJ2Nsb3NlZCc+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlQmVoYXZpb3JTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3l0UGxheWVyOiBZVC5QbGF5ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9pbnRlckV2ZW50czogc3RyaW5nID0gJ25vbmUnO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgY29uZmlnKCk6IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHJpdmF0ZSByZWFkb25seSBfbGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZTogTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgICAgcHJpdmF0ZSBkZXZpY2VTZWxlY3RvcjogRGV2aWNlRGV0ZWN0b3JTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5saWdodGJveFNsaWNlQW5pbWF0b3IgPSBuZXcgTGlnaHRib3hTbGljZUFuaW1hdG9yKCk7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVmlzaWJpbGl0eUFuaW1hdG9yID0gbmV3IEJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3IoKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZVN1YnNjcmlwdGlvbiA9IHRoaXMuJHN0YXRlLnN1YnNjcmliZSgodmFsdWU6ICdvcGVuaW5nJyB8ICdvcGVuZWQnIHwgJ2Nsb3NpbmcnIHwgJ2Nsb3NlZCcpID0+IHtcclxuXHJcbiAgICAgICAgICB0aGlzLnN0YXRlID0gdmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKTtcclxuICAgICAgICAgIGlmIChodG1sLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBodG1sWzBdLnN0eWxlLm92ZXJmbG93ID0gdGhpcy5zdGF0ZSA9PT0gJ2Nsb3NlZCcgPyAnaW5oZXJpdCcgOiAnaGlkZGVuJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5JdGVtKGl0ZW06IEl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdjbG9zZWQnKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlSXRlbUluZGV4ID0gdGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVJdGVtUmVmID0gdGhpcy5faXRlbVJlZihhY3RpdmVJdGVtSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFZpc2liaWxpdHlBbmltYXRvci5zaG93KHRoaXMuY29uZmlnLmFuaW1hdGlvbnMuYmFja2dyb3VuZEZhZGVJbi5vcGFjaXR5LCB0aGlzLmNvbmZpZy5hbmltYXRpb25zLmJhY2tncm91bmRGYWRlSW4uZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzLmNoZWNrRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1ibmFpbHMuY2hlY2tUaHVtYm5haWxzRGltZW5zaW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3BlbkNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0SXRlbXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlnaHRib3hTbGljZUFuaW1hdG9yLnNsaWNlKC0xICogYWN0aXZlSXRlbUluZGV4ICogMTAwLCAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSXRlbVJlZi5vcGVuKHRoaXMuX2dldENvbnRhaW5lckRpbWVuc2lvbnNBZnRlck9wZW4oKSwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5WW91dHViZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlaGF2aW9yU3ViamVjdC5uZXh0KCdvcGVuaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrWm9vbShhY3RpdmVJdGVtUmVmKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1lvdXR1YmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVoYXZpb3JTdWJqZWN0Lm5leHQoJ29wZW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGh1bWJuYWlscy5zZWxlY3RJdGVtKHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRWaWRlb1NvdXJjZXMoKTogVmlkZW9Tb3VyY2VzW10ge1xyXG5cclxuICAgICAgcmV0dXJuICh0aGlzLmFjdGl2ZUl0ZW0gYXMgVmlkZW8pLnNvdXJjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEl0ZW0oaXRlbTogSXRlbSk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXRlbXNbaXRlbS5jb250YWluZXJdKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW2l0ZW0uY29udGFpbmVyXSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtc1tpdGVtLmNvbnRhaW5lcl0ucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGh1bWJuYWlsc1RvZ2dsZSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxzLnRvZ2dsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGl0ZW06IEl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9pdGVtSW5kZXgoaXRlbSk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaXRlbS5jb250YWluZXJdLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRvZ2dsZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy50b29sYmFyLnRvZ2dsZSgpO1xyXG4gICAgICAgIHRoaXMubGlnaHRib3hab29tLnRvZ2dsZSgpO1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlscy50b2dnbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DbG9zZShldmVudDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICgoIWV2ZW50IHx8IGV2ZW50LnRhcmdldCA9PT0gdGhpcy5iYWNrZ3JvdW5kLm5hdGl2ZUVsZW1lbnQpICYmIHRoaXMuc3RhdGUgPT09ICdvcGVuZWQnKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVoYXZpb3JTdWJqZWN0Lm5leHQoJ2Nsb3NpbmcnKTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5WW91dHViZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3IuaGlkZSh0aGlzLmNvbmZpZy5hbmltYXRpb25zLmJhY2tncm91bmRGYWRlT3V0LmR1cmF0aW9uLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWhhdmlvclN1YmplY3QubmV4dCgnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9jbG9zZUNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl95dFBsYXllcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3l0UGxheWVyLnN0b3BWaWRlbygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RJdGVtKGl0ZW06IEl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGl0ZW0gIT09IHRoaXMuYWN0aXZlSXRlbSkge1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVJdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdEFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdEFjdGl2ZUl0ZW1SZWYgPSB0aGlzLl9pdGVtUmVmKGxhc3RBY3RpdmVJdGVtSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgbGFzdEFjdGl2ZUl0ZW1SZWYucmVzZXRab29tKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0pO1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJdGVtUmVmID0gdGhpcy5faXRlbVJlZihhY3RpdmVJdGVtSW5kZXgpO1xyXG4gICAgICAgICAgICBhY3RpdmVJdGVtUmVmLnJlc2V0Wm9vbSgwLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlZb3V0dWJlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlnaHRib3hTbGljZUFuaW1hdG9yLnNsaWNlKC0xICogYWN0aXZlSXRlbUluZGV4ICogMTAwLCB0aGlzLmNvbmZpZy5hbmltYXRpb25zLml0ZW1TbGljZS5kdXJhdGlvbiwgbnVsbCwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1lvdXR1YmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlscy5zZWxlY3RJdGVtKHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrWm9vbShhY3RpdmVJdGVtUmVmKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbk5leHQoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0hKTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZUl0ZW1JbmRleCA+PSAwICYmIGFjdGl2ZUl0ZW1JbmRleCA8IHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtIS5jb250YWluZXJdLmxlbmd0aCAtIDEpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW3RoaXMuYWN0aXZlSXRlbSEuY29udGFpbmVyXVthY3RpdmVJdGVtSW5kZXggKyAxXTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25MYXN0KCkge1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVJdGVtSW5kZXggPSB0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtISk7XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmVJdGVtSW5kZXggPj0gMCAmJiBhY3RpdmVJdGVtSW5kZXggPCB0aGlzLml0ZW1zW3RoaXMuYWN0aXZlSXRlbSEuY29udGFpbmVyXS5sZW5ndGggLSAxKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1t0aGlzLmFjdGl2ZUl0ZW0hLmNvbnRhaW5lcl1bdGhpcy5pdGVtc1t0aGlzLmFjdGl2ZUl0ZW0hLmNvbnRhaW5lcl0ubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbShpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRmlyc3QoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0hKTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZUl0ZW1JbmRleCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW3RoaXMuYWN0aXZlSXRlbSEuY29udGFpbmVyXVswXTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25QcmV2aW91cygpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbUluZGV4ID0gdGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSEpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlSXRlbUluZGV4ID4gMCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtIS5jb250YWluZXJdW2FjdGl2ZUl0ZW1JbmRleCAtIDFdO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB6b29tSW4oKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbVJlZiA9IHRoaXMuX2l0ZW1SZWYodGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSEpKTtcclxuICAgICAgICBhY3RpdmVJdGVtUmVmLnpvb21JbihudWxsLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jaGVja1pvb20oYWN0aXZlSXRlbVJlZik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHpvb21PdXQoKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbVJlZiA9IHRoaXMuX2l0ZW1SZWYodGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSEpKTtcclxuICAgICAgICBhY3RpdmVJdGVtUmVmLnpvb21PdXQobnVsbCwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tab29tKGFjdGl2ZUl0ZW1SZWYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldFpvb20oKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1SZWYgPSB0aGlzLl9pdGVtUmVmKHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0hKSk7XHJcbiAgICAgICAgYWN0aXZlSXRlbVJlZi5yZXNldFpvb20odGhpcy5jb25maWcuYW5pbWF0aW9ucy5yZXNldFpvb20uZHVyYXRpb24sIG51bGwsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrWm9vbShhY3RpdmVJdGVtUmVmKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmVldFRvV2lkdGgoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1SZWYgPSB0aGlzLl9pdGVtUmVmKHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0hKSk7XHJcbiAgICAgICAgYWN0aXZlSXRlbVJlZi5mZWV0VG9XaWR0aChudWxsLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jaGVja1pvb20oYWN0aXZlSXRlbVJlZik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN3aXBlKGFjdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlU2VsZWN0b3IuaXNEZXNrdG9wKCkpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgICAgY29uc3QgaXRlbVJlZiA9IHRoaXMuX2l0ZW1SZWYoaXRlbUluZGV4KTtcclxuICAgICAgICBpZiAoIWl0ZW1SZWYuaXNab29tTWluKCkpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAnc3dpcGVsZWZ0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMub25OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3dpcGVyaWdodCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uUHJldmlvdXMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25SZWFkeShldmVudDogWVQuUGxheWVyRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5feXRQbGF5ZXIgPSBldmVudC50YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRXJyb3IoZXZlbnQ6IFlULk9uRXJyb3JFdmVudCkge1xyXG4gICAgICAgIC8vIG9uIGVycm9yXHJcbiAgICB9XHJcblxyXG4gICAgb25QbGF5ZXJSZWFkeShhcGk6IFZnQVBJKSB7XHJcblxyXG4gICAgICB0aGlzLl92Z2FwaSA9IGFwaTtcclxuICAgICAgdGhpcy5fdmdhcGkuZ2V0RGVmYXVsdE1lZGlhKCkuc3Vic2NyaXB0aW9ucy5wbGF5aW5nLnN1YnNjcmliZShcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9jbG9zZUNvbnRyb2xzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl92Z2FwaS5nZXREZWZhdWx0TWVkaWEoKS5zdWJzY3JpcHRpb25zLnBhdXNlLnN1YnNjcmliZShcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9vcGVuQ29udHJvbHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBvbkNoYW5nZShldmVudDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlIFlULlBsYXllclN0YXRlLlBMQVlJTkc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZUNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcGVuQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0SXRlbXMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtLmNvbnRhaW5lcl0uZm9yRWFjaCgoZWxlbWVudDogSXRlbSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuYWN0aXZlSXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRJbmRleCA9IHRoaXMuX2l0ZW1JbmRleChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRSZWYgPSB0aGlzLl9pdGVtUmVmKGVsZW1lbnRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50UmVmLnJlc2V0Wm9vbSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29wZW5Db250cm9scygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy50b29sYmFyLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmxpZ2h0Ym94Wm9vbS5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxzLm9wZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbG9zZUNvbnRyb2xzKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLnRvb2xiYXIuY2xvc2UoKTtcclxuICAgICAgICB0aGlzLmxpZ2h0Ym94Wm9vbS5jbG9zZSgpO1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlscy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldENvbnRhaW5lckRpbWVuc2lvbnNBZnRlck9wZW4oKTogRGltZW5zaW9ucyB7XHJcblxyXG4gICAgICAgIGxldCBjb250YWluZXJEaW1lbnNpb25zOiBEaW1lbnNpb25zO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMuZGlzYWJsZSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGh1bWJuYWlscy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyRGltZW5zaW9ucyA9IG5ldyBEaW1lbnNpb25zKHRoaXMuX2l0ZW1MaXN0Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgsIHRoaXMuX2l0ZW1MaXN0Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gdGhpcy50aHVtYm5haWxzLnRoaWNrbmVzcyAtIDY0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckRpbWVuc2lvbnMgPSBuZXcgRGltZW5zaW9ucyh0aGlzLl9pdGVtTGlzdC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC0gdGhpcy50aHVtYm5haWxzLnRoaWNrbmVzcywgdGhpcy5faXRlbUxpc3QubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSA2NCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb250YWluZXJEaW1lbnNpb25zID0gbmV3IERpbWVuc2lvbnModGhpcy5faXRlbUxpc3QubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCwgdGhpcy5faXRlbUxpc3QubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSA2NCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29udGFpbmVyRGltZW5zaW9ucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVQYWdpbmF0aW9uKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVJdGVtSW5kZXggPSB0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtKTtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudCA9IGFjdGl2ZUl0ZW1JbmRleCArIDE7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmNvdW50ID0gdGhpcy5pdGVtc1t0aGlzLmFjdGl2ZUl0ZW0uY29udGFpbmVyXS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2hlY2tZb3V0dWJlKGl0ZW06IEl0ZW0pIHtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbSAhPT0gdGhpcy5hY3RpdmVJdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5WW91dHViZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNWaWRlbykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlZb3V0dWJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVlvdXR1YmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2l0ZW1SZWYoaW5kZXg6IG51bWJlcik6IExpZ2h0Ym94SXRlbUNvbXBvbmVudCB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1JlZi50b0FycmF5KClbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2l0ZW1JbmRleChpdGVtOiBJdGVtKTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaXRlbS5jb250YWluZXJdLmluZGV4T2YoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXHJcbiAgICBwcml2YXRlIF9vblJlc2l6ZShldmVudDogYW55KSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1SZWYgPSB0aGlzLl9pdGVtUmVmKHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0hKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYWN0aXZlSXRlbS5pc1ZpZGVvKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYWN0aXZlSXRlbVJlZi5yZXNpemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jaGVja1pvb20oYWN0aXZlSXRlbVJlZik7XHJcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlscy5yZXNpemUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2hlY2tab29tKGl0ZW06IExpZ2h0Ym94SXRlbUNvbXBvbmVudCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtLmlzVmlkZW8pIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVpvb20gPSAnaGlkZGVuJztcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5Wm9vbSA9ICd2aXNpYmxlJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzYWJsZVpvb21JbiA9IGl0ZW0uaXNab29tTWF4KCk7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlWm9vbU91dCA9IGl0ZW0uaXNab29tTWluKCk7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlUmVzZXRab29tID0gaXRlbS5pc1pvb21NaW4oKTtcclxuICAgICAgICB0aGlzLmRpc2FibGVGZWV0VG9XaWR0aCA9IGl0ZW0uaXNGZWV0VG9XaWR0aCgpO1xyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJsaWdodGJveC1iYWNrZ3JvdW5kXCJcbiAgICBbQGJhY2tncm91bmRWaXNpYmlsaXR5XT1cImJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3IuYW5pbWF0aW9uXCJcbiAgICAoQGJhY2tncm91bmRWaXNpYmlsaXR5LnN0YXJ0KT1cImJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3IuYW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiXG4gICAgKEBiYWNrZ3JvdW5kVmlzaWJpbGl0eS5kb25lKT1cImJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3IuYW5pbWF0aW9uRG9uZSgkZXZlbnQpXCI+XG48L2Rpdj5cblxuPGxpZ2h0Ym94LXRvb2xiYXIgI3Rvb2xiYXJcbiAgICBbbmdTdHlsZV09XCJ7J29yZGVyJzogY29uZmlnLmNvbnRyb2xzLnRvb2xiYXIucG9zaXRpb24gPT09ICd0b3AnID8gMSA6IDIgfVwiXG4gICAgW3BhZ2luYXRpb25dPVwicGFnaW5hdGlvblwiXG4gICAgW3RpdGxlXT1cImFjdGl2ZUl0ZW0/LnRpdGxlXCJcbiAgICAoY2xvc2VFdmVudCk9XCJvbkNsb3NlKCRldmVudClcIlxuICAgIChmaXJzdEV2ZW50KT1cIm9uRmlyc3QoKVwiXG4gICAgKHByZXZpb3VzRXZlbnQpPVwib25QcmV2aW91cygpXCJcbiAgICAobmV4dEV2ZW50KT1cIm9uTmV4dCgpXCJcbiAgICAobGFzdEV2ZW50KT1cIm9uTGFzdCgpXCJcbiAgICAodGh1bWJuYWlsc1RvZ2dsZUV2ZW50KT1cInRodW1ibmFpbHNUb2dnbGUoKVwiPlxuPC9saWdodGJveC10b29sYmFyPlxuXG48ZGl2IGNsYXNzPVwibGlnaHRib3gtY29udGFpbmVyXCJcbiAgICBbbmdTdHlsZV09XCJ7J29yZGVyJzogY29uZmlnLmNvbnRyb2xzLnRvb2xiYXIucG9zaXRpb24gPT09ICdib3R0b20nID8gMSA6IDIgfVwiXG4gICAgW25nQ2xhc3NdPVwieyd2ZXJ0aWNhbC1jb250YWluZXInOiBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAncmlnaHQnLCAnaG9yaXpvbnRhbC1jb250YWluZXInOiBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ3RvcCcgfHwgY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICdib3R0b20nfVwiPlxuICAgIFxuICA8ZGl2IGNsYXNzPVwibGlnaHRib3gtaXRlbXMtY29udGFpbmVyXCJcbiAgICAgICBbbmdTdHlsZV09XCJ7J29yZGVyJzogY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICdib3R0b20nIHx8IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAncmlnaHQnID8gMSA6IDIgfVwiPlxuXG4gICAgPGRpdiAjYmFja2dyb3VuZFxuICAgICAgICAgW25nU3R5bGVdPVwieyd2aXNpYmlsaXR5Jzogc3RhdGUgPT09ICdjbG9zZWQnIHx8IHN0YXRlID09PSAnY2xvc2luZycgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJyB9XCJcbiAgICAgICAgICh0YXApPVwib25DbG9zZSgkZXZlbnQpXCJcbiAgICAgICAgIChzd2lwZWxlZnQpPVwic3dpcGUoJGV2ZW50LnR5cGUpXCJcbiAgICAgICAgIChzd2lwZXJpZ2h0KT1cInN3aXBlKCRldmVudC50eXBlKVwiXG4gICAgICAgICBjbGFzcz1cImxpZ2h0Ym94LWl0ZW1zLWJhY2tncm91bmRcIj5cblxuICAgICAgPGRpdiAqbmdJZj1cImFjdGl2ZUl0ZW1cIiBjbGFzcz1cIml0ZW0tbGlzdFwiICNpdGVtTGlzdFxuICAgICAgICAgICBbQGxpZ2h0Ym94U2xpY2VdPVwibGlnaHRib3hTbGljZUFuaW1hdG9yLmFuaW1hdGlvblwiXG4gICAgICAgICAgIChAbGlnaHRib3hTbGljZS5zdGFydCk9XCJsaWdodGJveFNsaWNlQW5pbWF0b3IuYW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiXG4gICAgICAgICAgIChAbGlnaHRib3hTbGljZS5kb25lKT1cImxpZ2h0Ym94U2xpY2VBbmltYXRvci5hbmltYXRpb25Eb25lKCRldmVudClcIj5cbiAgICAgICAgPGxpZ2h0Ym94LWl0ZW0gKHRvZ2dsZUV2ZW50KT1cIm9uVG9nZ2xlKClcIiAjbGlnaHRib3hJdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zW2FjdGl2ZUl0ZW0uY29udGFpbmVyXVwiIFtpdGVtXT1cIml0ZW1cIj5cbiAgICAgICAgPC9saWdodGJveC1pdGVtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8bGlnaHRib3gtem9vbSAjbGlnaHRib3hab29tXG4gICAgICAgICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwiZGlzcGxheVpvb21cIlxuICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlWm9vbUluXT1cImRpc2FibGVab29tSW5cIlxuICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlWm9vbU91dF09XCJkaXNhYmxlWm9vbU91dFwiXG4gICAgICAgICAgICAgICAgICAgW2Rpc2FibGVSZXNldFpvb21dPVwiZGlzYWJsZVJlc2V0Wm9vbVwiXG4gICAgICAgICAgICAgICAgICAgW2Rpc2FibGVGZWV0VG9XaWR0aF09XCJkaXNhYmxlRmVldFRvV2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICh6b29tSW5FdmVudCk9XCJ6b29tSW4oKVwiXG4gICAgICAgICAgICAgICAgICAgKHpvb21PdXRFdmVudCk9XCJ6b29tT3V0KClcIlxuICAgICAgICAgICAgICAgICAgIChyZXNldFpvb21FdmVudCk9XCJyZXNldFpvb20oKVwiXG4gICAgICAgICAgICAgICAgICAgKGZlZXRUb1dpZHRoRXZlbnQpPVwiZmVldFRvV2lkdGgoKVwiPlxuICAgIDwvbGlnaHRib3gtem9vbT5cblxuICAgIDxjbWFjcy12aWRlby1wbGF5ZXIgW3NvdXJjZXNdPVwiYWN0aXZlSXRlbT8gZ2V0VmlkZW9Tb3VyY2VzKCkgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaWdodGJveC12aWRlby1wbGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKHBsYXllclJlYWR5KT1cIm9uUGxheWVyUmVhZHkoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J3Zpc2liaWxpdHknOiBkaXNwbGF5WW91dHViZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nIH1cIj5cbiAgICA8L2NtYWNzLXZpZGVvLXBsYXllcj5cblxuICA8L2Rpdj5cbiAgICA8bGlnaHRib3gtdGh1bWJuYWlscyBbbmdDbGFzc109XCJ7J3ZlcnRpY2FsLXRodW1ibmFpbHMnOiBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAncmlnaHQnLCAnaG9yaXpvbnRhbC10aHVtYm5haWxzJzogY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICd0b3AnIHx8IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAnYm90dG9tJ31cIiAjdGh1bWJuYWlscyBbaXRlbXNdPVwiYWN0aXZlSXRlbT8gaXRlbXNbYWN0aXZlSXRlbS5jb250YWluZXJdOltdXCIgKHNlbGVjdEV2ZW50KT1cInNlbGVjdEl0ZW0oJGV2ZW50KVwiXG4gICAgW25nU3R5bGVdPVwieydvcmRlcic6IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAndG9wJyB8fCBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ2xlZnQnID8gMSA6IDIgfVwiPlxuICAgIDwvbGlnaHRib3gtdGh1bWJuYWlscz5cbjwvZGl2PlxuIl19