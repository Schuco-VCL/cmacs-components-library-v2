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
import * as i5 from "../../../cmacs-video-player/cmacs-video-player.component";
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
    } }, directives: [i2.LightboxToolbarComponent, i3.NgStyle, i3.NgClass, i3.NgIf, i4.LightboxZoomComponent, i5.CmacsVideoPlayerComponent, i6.LightboxThumbnailsComponent, i3.NgForOf, i7.LightboxItemComponent], styles: ["lightbox{pointer-events:none;top:0;left:0;height:100%;width:100%;display:flex;flex-direction:column}lightbox .lightbox-background,lightbox .lightbox-items-background{height:100%;width:100%;position:absolute;top:0;z-index:1}lightbox .lightbox-background .item-list,lightbox .lightbox-items-background .item-list{position:relative;height:100%;display:flex}lightbox .lightbox-container{display:flex;flex:1 1 0%;position:relative;overflow:hidden}lightbox .lightbox-items-container{flex:1 1 0%;box-sizing:border-box;height:100%;position:relative}.lightbox-items-background{background-color:#222}.lightbox-overlay-container{pointer-events:none;position:fixed;z-index:10000;height:100%;width:100%;top:0;left:0}lightbox .lightbox-container.vertical-container{flex-direction:row}lightbox .lightbox-container.horizontal-container{flex-direction:column}"], encapsulation: 2, data: { animation: [LightboxAnimations.visibilityAnimation, LightboxAnimations.sliceAnimation] } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gvbGlnaHRib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gvbGlnaHRib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWEsWUFBWSxFQUFFLFlBQVksRUFBVSxpQkFBaUIsRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFZOUksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDMUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDL0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQTRCLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ29CekQsNkNBQXVIO0lBQXhHLHdOQUEwQjtJQUN6QyxpQkFBZ0I7OztJQUR5Riw4QkFBYTs7OztJQUp4SCxtQ0FHeUU7SUFEcEUsME1BQXdCLG9EQUE0QyxJQUFDLDJMQUM5QyxtREFBMkMsSUFERztJQUV4RSw2RkFDZ0I7SUFDbEIsaUJBQU07OztJQUxELHVFQUFrRDtJQUdvQixlQUE4QjtJQUE5QixtRUFBOEI7Ozs7Ozs7QURML0csTUFBTSxPQUFPLGlCQUFpQjtJQThEMUIs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LDhCQUFBLCtEQUFBO1FBWTFFLGVBQTZFO1FBQTdFLGdIQUE2RSw4UEFBQTtRQUkxRSxlQUFtSTtRQUFuSSwwS0FBbUk7UUFHakksZUFBNkY7UUFBN0YsK0hBQTZGO1FBTTFGLGVBQWdCO1FBQWhCLHFDQUFnQjtRQVVULGVBQWdDO1FBQWhDLDZDQUFnQztRQUNoQyxpREFBK0Isc0NBQUEsMENBQUEsOENBQUE7UUFVMUIsZUFBcUQ7UUFBckQsNEVBQXFELG1GQUFBO1FBT3BELGVBQWtRO1FBQWxRLDJRQUFrUSw4RkFBQSx5SkFBQTtnbENEbkMzUSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixFQUFFLGtCQUFrQixDQUFDLGNBQWMsQ0FBQzt1RkFNOUUsaUJBQWlCO2NBVjdCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3RDLFVBQVUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixFQUFFLGtCQUFrQixDQUFDLGNBQWMsQ0FBQztnQkFDdkYsSUFBSSxFQUFFO29CQUNGLHdCQUF3QixFQUFFLGdCQUFnQjtpQkFDN0M7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDeEM7K0VBT21DLFVBQVU7a0JBQXpDLFNBQVM7bUJBQUMsWUFBWTtZQUVNLE9BQU87a0JBQW5DLFNBQVM7bUJBQUMsU0FBUztZQUVZLFVBQVU7a0JBQXpDLFNBQVM7bUJBQUMsWUFBWTtZQUVXLFlBQVk7a0JBQTdDLFNBQVM7bUJBQUMsY0FBYztZQTBCTSxTQUFTO2tCQUF2QyxTQUFTO21CQUFDLFVBQVU7WUFFaUIsU0FBUztrQkFBOUMsWUFBWTttQkFBQyxjQUFjO1lBc1hwQixTQUFTO2tCQURoQixZQUFZO21CQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgSG9zdExpc3RlbmVyLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBBbmltYXRpb25FdmVudCwgcXVlcnksIGFuaW1hdGVDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BhZ2luYXRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTGlnaHRib3hUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vbGlnaHRib3gtdG9vbGJhci9saWdodGJveC10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpZ2h0Ym94VGh1bWJuYWlsc0NvbXBvbmVudCB9IGZyb20gJy4uL2xpZ2h0Ym94LXRodW1ibmFpbHMvbGlnaHRib3gtdGh1bWJuYWlscy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaWdodGJveFpvb21Db21wb25lbnQgfSBmcm9tICcuLi9saWdodGJveC16b29tL2xpZ2h0Ym94LXpvb20uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlnaHRib3hCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9saWdodGJveC1idXR0b24vbGlnaHRib3gtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvaXRlbSc7XHJcbmltcG9ydCB7IExpZ2h0Ym94SXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2xpZ2h0Ym94LWl0ZW0vbGlnaHRib3gtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGlnaHRib3gtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmlkZW8sIFZpZGVvU291cmNlcyB9IGZyb20gJy4uLy4uL21vZGVscy92aWRlbyc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Bvc2l0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IExpZ2h0Ym94U2xpY2VBbmltYXRvciB9IGZyb20gJy4uLy4uL21vZGVscy9saWdodGJveC9hbmltYXRpb25zL2xpZ2h0Ym94LXNsaWNlLWFuaW1hdG9yJztcclxuaW1wb3J0IHsgTGlnaHRib3hBbmltYXRpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpZ2h0Ym94L2FuaW1hdGlvbnMvbGlnaHRib3gtYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3IgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGlnaHRib3gvYW5pbWF0aW9ucy9iYWNrZ3JvdW5kLXZpc2liaWxpdHktYW5pbWF0b3InO1xyXG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RpbWVuc2lvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICduZ3gtdmlkZW9ndWxhcic7XHJcblxyXG5kZWNsYXJlIHZhciBZVDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpZ2h0Ym94JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnbGlnaHRib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2xpZ2h0Ym94LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBbTGlnaHRib3hBbmltYXRpb25zLnZpc2liaWxpdHlBbmltYXRpb24sIExpZ2h0Ym94QW5pbWF0aW9ucy5zbGljZUFuaW1hdGlvbl0sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tzdHlsZS5wb2ludGVyLWV2ZW50c10nOiAnX3BvaW50ZXJFdmVudHMnLFxyXG4gICAgfSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIExpZ2h0Ym94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHB1YmxpYyBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uID0geyBjdXJyZW50OiAwLCBjb3VudDogMCB9O1xyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5Wm9vbTogJ2hpZGRlbicgfCAndmlzaWJsZScgPSAnaGlkZGVuJztcclxuXHJcbiAgICBAVmlld0NoaWxkKCdiYWNrZ3JvdW5kJykgcHVibGljIGJhY2tncm91bmQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgndG9vbGJhcicpIHB1YmxpYyB0b29sYmFyOiBMaWdodGJveFRvb2xiYXJDb21wb25lbnQ7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgndGh1bWJuYWlscycpIHB1YmxpYyB0aHVtYm5haWxzOiBMaWdodGJveFRodW1ibmFpbHNDb21wb25lbnQ7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnbGlnaHRib3hab29tJykgcHVibGljIGxpZ2h0Ym94Wm9vbTogTGlnaHRib3hab29tQ29tcG9uZW50O1xyXG5cclxuICAgIHB1YmxpYyBoYXNOZXh0OiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBoYXNQcmV2aW91czogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgZGlzcGxheVlvdXR1YmUgPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgaXRlbXM6IHsgW2NvbnRhaW5lcjogc3RyaW5nXTogSXRlbVtdIH0gPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgYWN0aXZlSXRlbTogSXRlbSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBwdWJsaWMgbGlnaHRib3hTbGljZUFuaW1hdG9yOiBMaWdodGJveFNsaWNlQW5pbWF0b3I7XHJcblxyXG4gICAgcHVibGljIGJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3I6IEJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3I7XHJcblxyXG4gICAgcHVibGljIHN0YXRlOiAnb3BlbmluZycgfCAnb3BlbmVkJyB8ICdjbG9zaW5nJyB8ICdjbG9zZWQnID0gJ2Nsb3NlZCc7XHJcblxyXG4gICAgcHVibGljIGRpc2FibGVab29tSW46IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGRpc2FibGVab29tT3V0OiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBkaXNhYmxlUmVzZXRab29tOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBkaXNhYmxlRmVldFRvV2lkdGg6IGJvb2xlYW47XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnaXRlbUxpc3QnKSBwcml2YXRlIF9pdGVtTGlzdDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBAVmlld0NoaWxkcmVuKCdsaWdodGJveEl0ZW0nKSBwcml2YXRlIF9pdGVtc1JlZjogUXVlcnlMaXN0PExpZ2h0Ym94SXRlbUNvbXBvbmVudD47XHJcblxyXG4gICAgcHJpdmF0ZSBfdmdhcGk6IFZnQVBJID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlQmVoYXZpb3JTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8J29wZW5pbmcnIHwgJ29wZW5lZCcgfCAnY2xvc2luZycgfCAnY2xvc2VkJz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PCdvcGVuaW5nJyB8ICdvcGVuZWQnIHwgJ2Nsb3NpbmcnIHwgJ2Nsb3NlZCc+KCdjbG9zZWQnKTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0ICRzdGF0ZSgpOiBPYnNlcnZhYmxlPCdvcGVuaW5nJyB8ICdvcGVuZWQnIHwgJ2Nsb3NpbmcnIHwgJ2Nsb3NlZCc+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlQmVoYXZpb3JTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3l0UGxheWVyOiBZVC5QbGF5ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9pbnRlckV2ZW50czogc3RyaW5nID0gJ25vbmUnO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgY29uZmlnKCk6IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9saWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5saWdodGJveFNsaWNlQW5pbWF0b3IgPSBuZXcgTGlnaHRib3hTbGljZUFuaW1hdG9yKCk7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVmlzaWJpbGl0eUFuaW1hdG9yID0gbmV3IEJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3IoKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZVN1YnNjcmlwdGlvbiA9IHRoaXMuJHN0YXRlLnN1YnNjcmliZSgodmFsdWU6ICdvcGVuaW5nJyB8ICdvcGVuZWQnIHwgJ2Nsb3NpbmcnIHwgJ2Nsb3NlZCcpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5JdGVtKGl0ZW06IEl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdjbG9zZWQnKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlSXRlbUluZGV4ID0gdGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVJdGVtUmVmID0gdGhpcy5faXRlbVJlZihhY3RpdmVJdGVtSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFZpc2liaWxpdHlBbmltYXRvci5zaG93KHRoaXMuY29uZmlnLmFuaW1hdGlvbnMuYmFja2dyb3VuZEZhZGVJbi5vcGFjaXR5LCB0aGlzLmNvbmZpZy5hbmltYXRpb25zLmJhY2tncm91bmRGYWRlSW4uZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzLmNoZWNrRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1ibmFpbHMuY2hlY2tUaHVtYm5haWxzRGltZW5zaW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3BlbkNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0SXRlbXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlnaHRib3hTbGljZUFuaW1hdG9yLnNsaWNlKC0xICogYWN0aXZlSXRlbUluZGV4ICogMTAwLCAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSXRlbVJlZi5vcGVuKHRoaXMuX2dldENvbnRhaW5lckRpbWVuc2lvbnNBZnRlck9wZW4oKSwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5WW91dHViZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlaGF2aW9yU3ViamVjdC5uZXh0KCdvcGVuaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrWm9vbShhY3RpdmVJdGVtUmVmKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1lvdXR1YmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVoYXZpb3JTdWJqZWN0Lm5leHQoJ29wZW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGh1bWJuYWlscy5zZWxlY3RJdGVtKHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRWaWRlb1NvdXJjZXMoKTogVmlkZW9Tb3VyY2VzW10ge1xyXG5cclxuICAgICAgcmV0dXJuICh0aGlzLmFjdGl2ZUl0ZW0gYXMgVmlkZW8pLnNvdXJjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEl0ZW0oaXRlbTogSXRlbSk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXRlbXNbaXRlbS5jb250YWluZXJdKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW2l0ZW0uY29udGFpbmVyXSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtc1tpdGVtLmNvbnRhaW5lcl0ucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGh1bWJuYWlsc1RvZ2dsZSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxzLnRvZ2dsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGl0ZW06IEl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9pdGVtSW5kZXgoaXRlbSk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaXRlbS5jb250YWluZXJdLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRvZ2dsZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy50b29sYmFyLnRvZ2dsZSgpO1xyXG4gICAgICAgIHRoaXMubGlnaHRib3hab29tLnRvZ2dsZSgpO1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlscy50b2dnbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DbG9zZShldmVudDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICgoIWV2ZW50IHx8IGV2ZW50LnRhcmdldCA9PT0gdGhpcy5iYWNrZ3JvdW5kLm5hdGl2ZUVsZW1lbnQpICYmIHRoaXMuc3RhdGUgPT09ICdvcGVuZWQnKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVoYXZpb3JTdWJqZWN0Lm5leHQoJ2Nsb3NpbmcnKTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5WW91dHViZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3IuaGlkZSh0aGlzLmNvbmZpZy5hbmltYXRpb25zLmJhY2tncm91bmRGYWRlT3V0LmR1cmF0aW9uLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWhhdmlvclN1YmplY3QubmV4dCgnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9jbG9zZUNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl95dFBsYXllcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3l0UGxheWVyLnN0b3BWaWRlbygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RJdGVtKGl0ZW06IEl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGl0ZW0gIT09IHRoaXMuYWN0aXZlSXRlbSkge1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVJdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdEFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdEFjdGl2ZUl0ZW1SZWYgPSB0aGlzLl9pdGVtUmVmKGxhc3RBY3RpdmVJdGVtSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgbGFzdEFjdGl2ZUl0ZW1SZWYucmVzZXRab29tKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0pO1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJdGVtUmVmID0gdGhpcy5faXRlbVJlZihhY3RpdmVJdGVtSW5kZXgpO1xyXG4gICAgICAgICAgICBhY3RpdmVJdGVtUmVmLnJlc2V0Wm9vbSgwLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlZb3V0dWJlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlnaHRib3hTbGljZUFuaW1hdG9yLnNsaWNlKC0xICogYWN0aXZlSXRlbUluZGV4ICogMTAwLCB0aGlzLmNvbmZpZy5hbmltYXRpb25zLml0ZW1TbGljZS5kdXJhdGlvbiwgbnVsbCwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1lvdXR1YmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlscy5zZWxlY3RJdGVtKHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrWm9vbShhY3RpdmVJdGVtUmVmKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbk5leHQoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0hKTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZUl0ZW1JbmRleCA+PSAwICYmIGFjdGl2ZUl0ZW1JbmRleCA8IHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtIS5jb250YWluZXJdLmxlbmd0aCAtIDEpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW3RoaXMuYWN0aXZlSXRlbSEuY29udGFpbmVyXVthY3RpdmVJdGVtSW5kZXggKyAxXTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25MYXN0KCkge1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVJdGVtSW5kZXggPSB0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtISk7XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmVJdGVtSW5kZXggPj0gMCAmJiBhY3RpdmVJdGVtSW5kZXggPCB0aGlzLml0ZW1zW3RoaXMuYWN0aXZlSXRlbSEuY29udGFpbmVyXS5sZW5ndGggLSAxKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1t0aGlzLmFjdGl2ZUl0ZW0hLmNvbnRhaW5lcl1bdGhpcy5pdGVtc1t0aGlzLmFjdGl2ZUl0ZW0hLmNvbnRhaW5lcl0ubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbShpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRmlyc3QoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0hKTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZUl0ZW1JbmRleCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW3RoaXMuYWN0aXZlSXRlbSEuY29udGFpbmVyXVswXTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25QcmV2aW91cygpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbUluZGV4ID0gdGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSEpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlSXRlbUluZGV4ID4gMCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtIS5jb250YWluZXJdW2FjdGl2ZUl0ZW1JbmRleCAtIDFdO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB6b29tSW4oKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbVJlZiA9IHRoaXMuX2l0ZW1SZWYodGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSEpKTtcclxuICAgICAgICBhY3RpdmVJdGVtUmVmLnpvb21JbihudWxsLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jaGVja1pvb20oYWN0aXZlSXRlbVJlZik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHpvb21PdXQoKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbVJlZiA9IHRoaXMuX2l0ZW1SZWYodGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSEpKTtcclxuICAgICAgICBhY3RpdmVJdGVtUmVmLnpvb21PdXQobnVsbCwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tab29tKGFjdGl2ZUl0ZW1SZWYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldFpvb20oKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1SZWYgPSB0aGlzLl9pdGVtUmVmKHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0hKSk7XHJcbiAgICAgICAgYWN0aXZlSXRlbVJlZi5yZXNldFpvb20odGhpcy5jb25maWcuYW5pbWF0aW9ucy5yZXNldFpvb20uZHVyYXRpb24sIG51bGwsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrWm9vbShhY3RpdmVJdGVtUmVmKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmVldFRvV2lkdGgoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1SZWYgPSB0aGlzLl9pdGVtUmVmKHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0hKSk7XHJcbiAgICAgICAgYWN0aXZlSXRlbVJlZi5mZWV0VG9XaWR0aChudWxsLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jaGVja1pvb20oYWN0aXZlSXRlbVJlZik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN3aXBlKGFjdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5faXRlbUluZGV4KHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgICAgY29uc3QgaXRlbVJlZiA9IHRoaXMuX2l0ZW1SZWYoaXRlbUluZGV4KTtcclxuICAgICAgICBpZiAoIWl0ZW1SZWYuaXNab29tTWluKCkpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAnc3dpcGVsZWZ0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMub25OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3dpcGVyaWdodCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uUHJldmlvdXMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25SZWFkeShldmVudDogWVQuUGxheWVyRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5feXRQbGF5ZXIgPSBldmVudC50YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRXJyb3IoZXZlbnQ6IFlULk9uRXJyb3JFdmVudCkge1xyXG4gICAgICAgIC8vIG9uIGVycm9yXHJcbiAgICB9XHJcblxyXG4gICAgb25QbGF5ZXJSZWFkeShhcGk6IFZnQVBJKSB7XHJcblxyXG4gICAgICB0aGlzLl92Z2FwaSA9IGFwaTtcclxuICAgICAgdGhpcy5fdmdhcGkuZ2V0RGVmYXVsdE1lZGlhKCkuc3Vic2NyaXB0aW9ucy5wbGF5aW5nLnN1YnNjcmliZShcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9jbG9zZUNvbnRyb2xzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl92Z2FwaS5nZXREZWZhdWx0TWVkaWEoKS5zdWJzY3JpcHRpb25zLnBhdXNlLnN1YnNjcmliZShcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9vcGVuQ29udHJvbHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBvbkNoYW5nZShldmVudDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlIFlULlBsYXllclN0YXRlLlBMQVlJTkc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZUNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcGVuQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0SXRlbXMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtLmNvbnRhaW5lcl0uZm9yRWFjaCgoZWxlbWVudDogSXRlbSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuYWN0aXZlSXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRJbmRleCA9IHRoaXMuX2l0ZW1JbmRleChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRSZWYgPSB0aGlzLl9pdGVtUmVmKGVsZW1lbnRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50UmVmLnJlc2V0Wm9vbSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29wZW5Db250cm9scygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy50b29sYmFyLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmxpZ2h0Ym94Wm9vbS5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxzLm9wZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbG9zZUNvbnRyb2xzKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLnRvb2xiYXIuY2xvc2UoKTtcclxuICAgICAgICB0aGlzLmxpZ2h0Ym94Wm9vbS5jbG9zZSgpO1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlscy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldENvbnRhaW5lckRpbWVuc2lvbnNBZnRlck9wZW4oKTogRGltZW5zaW9ucyB7XHJcblxyXG4gICAgICAgIGxldCBjb250YWluZXJEaW1lbnNpb25zOiBEaW1lbnNpb25zO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMuZGlzYWJsZSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGh1bWJuYWlscy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyRGltZW5zaW9ucyA9IG5ldyBEaW1lbnNpb25zKHRoaXMuX2l0ZW1MaXN0Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgsIHRoaXMuX2l0ZW1MaXN0Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gdGhpcy50aHVtYm5haWxzLnRoaWNrbmVzcyAtIDY0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckRpbWVuc2lvbnMgPSBuZXcgRGltZW5zaW9ucyh0aGlzLl9pdGVtTGlzdC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC0gdGhpcy50aHVtYm5haWxzLnRoaWNrbmVzcywgdGhpcy5faXRlbUxpc3QubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSA2NCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb250YWluZXJEaW1lbnNpb25zID0gbmV3IERpbWVuc2lvbnModGhpcy5faXRlbUxpc3QubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCwgdGhpcy5faXRlbUxpc3QubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSA2NCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29udGFpbmVyRGltZW5zaW9ucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVQYWdpbmF0aW9uKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVJdGVtSW5kZXggPSB0aGlzLl9pdGVtSW5kZXgodGhpcy5hY3RpdmVJdGVtKTtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudCA9IGFjdGl2ZUl0ZW1JbmRleCArIDE7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmNvdW50ID0gdGhpcy5pdGVtc1t0aGlzLmFjdGl2ZUl0ZW0uY29udGFpbmVyXS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2hlY2tZb3V0dWJlKGl0ZW06IEl0ZW0pIHtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbSAhPT0gdGhpcy5hY3RpdmVJdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5WW91dHViZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNWaWRlbykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlZb3V0dWJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVlvdXR1YmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2l0ZW1SZWYoaW5kZXg6IG51bWJlcik6IExpZ2h0Ym94SXRlbUNvbXBvbmVudCB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1JlZi50b0FycmF5KClbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2l0ZW1JbmRleChpdGVtOiBJdGVtKTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaXRlbS5jb250YWluZXJdLmluZGV4T2YoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXHJcbiAgICBwcml2YXRlIF9vblJlc2l6ZShldmVudDogYW55KSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1SZWYgPSB0aGlzLl9pdGVtUmVmKHRoaXMuX2l0ZW1JbmRleCh0aGlzLmFjdGl2ZUl0ZW0hKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYWN0aXZlSXRlbS5pc1ZpZGVvKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYWN0aXZlSXRlbVJlZi5yZXNpemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jaGVja1pvb20oYWN0aXZlSXRlbVJlZik7XHJcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlscy5yZXNpemUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2hlY2tab29tKGl0ZW06IExpZ2h0Ym94SXRlbUNvbXBvbmVudCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtLmlzVmlkZW8pIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVpvb20gPSAnaGlkZGVuJztcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5Wm9vbSA9ICd2aXNpYmxlJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzYWJsZVpvb21JbiA9IGl0ZW0uaXNab29tTWF4KCk7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlWm9vbU91dCA9IGl0ZW0uaXNab29tTWluKCk7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlUmVzZXRab29tID0gaXRlbS5pc1pvb21NaW4oKTtcclxuICAgICAgICB0aGlzLmRpc2FibGVGZWV0VG9XaWR0aCA9IGl0ZW0uaXNGZWV0VG9XaWR0aCgpO1xyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJsaWdodGJveC1iYWNrZ3JvdW5kXCJcbiAgICBbQGJhY2tncm91bmRWaXNpYmlsaXR5XT1cImJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3IuYW5pbWF0aW9uXCJcbiAgICAoQGJhY2tncm91bmRWaXNpYmlsaXR5LnN0YXJ0KT1cImJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3IuYW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiXG4gICAgKEBiYWNrZ3JvdW5kVmlzaWJpbGl0eS5kb25lKT1cImJhY2tncm91bmRWaXNpYmlsaXR5QW5pbWF0b3IuYW5pbWF0aW9uRG9uZSgkZXZlbnQpXCI+XG48L2Rpdj5cblxuPGxpZ2h0Ym94LXRvb2xiYXIgI3Rvb2xiYXJcbiAgICBbbmdTdHlsZV09XCJ7J29yZGVyJzogY29uZmlnLmNvbnRyb2xzLnRvb2xiYXIucG9zaXRpb24gPT09ICd0b3AnID8gMSA6IDIgfVwiXG4gICAgW3BhZ2luYXRpb25dPVwicGFnaW5hdGlvblwiXG4gICAgW3RpdGxlXT1cImFjdGl2ZUl0ZW0/LnRpdGxlXCJcbiAgICAoY2xvc2VFdmVudCk9XCJvbkNsb3NlKCRldmVudClcIlxuICAgIChmaXJzdEV2ZW50KT1cIm9uRmlyc3QoKVwiXG4gICAgKHByZXZpb3VzRXZlbnQpPVwib25QcmV2aW91cygpXCJcbiAgICAobmV4dEV2ZW50KT1cIm9uTmV4dCgpXCJcbiAgICAobGFzdEV2ZW50KT1cIm9uTGFzdCgpXCJcbiAgICAodGh1bWJuYWlsc1RvZ2dsZUV2ZW50KT1cInRodW1ibmFpbHNUb2dnbGUoKVwiPlxuPC9saWdodGJveC10b29sYmFyPlxuXG48ZGl2IGNsYXNzPVwibGlnaHRib3gtY29udGFpbmVyXCJcbiAgICBbbmdTdHlsZV09XCJ7J29yZGVyJzogY29uZmlnLmNvbnRyb2xzLnRvb2xiYXIucG9zaXRpb24gPT09ICdib3R0b20nID8gMSA6IDIgfVwiXG4gICAgW25nQ2xhc3NdPVwieyd2ZXJ0aWNhbC1jb250YWluZXInOiBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAncmlnaHQnLCAnaG9yaXpvbnRhbC1jb250YWluZXInOiBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ3RvcCcgfHwgY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICdib3R0b20nfVwiPlxuICAgIFxuICA8ZGl2IGNsYXNzPVwibGlnaHRib3gtaXRlbXMtY29udGFpbmVyXCJcbiAgICAgICBbbmdTdHlsZV09XCJ7J29yZGVyJzogY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICdib3R0b20nIHx8IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAncmlnaHQnID8gMSA6IDIgfVwiPlxuXG4gICAgPGRpdiAjYmFja2dyb3VuZFxuICAgICAgICAgW25nU3R5bGVdPVwieyd2aXNpYmlsaXR5Jzogc3RhdGUgPT09ICdjbG9zZWQnIHx8IHN0YXRlID09PSAnY2xvc2luZycgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJyB9XCJcbiAgICAgICAgICh0YXApPVwib25DbG9zZSgkZXZlbnQpXCJcbiAgICAgICAgIChzd2lwZWxlZnQpPVwic3dpcGUoJGV2ZW50LnR5cGUpXCJcbiAgICAgICAgIChzd2lwZXJpZ2h0KT1cInN3aXBlKCRldmVudC50eXBlKVwiXG4gICAgICAgICBjbGFzcz1cImxpZ2h0Ym94LWl0ZW1zLWJhY2tncm91bmRcIj5cblxuICAgICAgPGRpdiAqbmdJZj1cImFjdGl2ZUl0ZW1cIiBjbGFzcz1cIml0ZW0tbGlzdFwiICNpdGVtTGlzdFxuICAgICAgICAgICBbQGxpZ2h0Ym94U2xpY2VdPVwibGlnaHRib3hTbGljZUFuaW1hdG9yLmFuaW1hdGlvblwiXG4gICAgICAgICAgIChAbGlnaHRib3hTbGljZS5zdGFydCk9XCJsaWdodGJveFNsaWNlQW5pbWF0b3IuYW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiXG4gICAgICAgICAgIChAbGlnaHRib3hTbGljZS5kb25lKT1cImxpZ2h0Ym94U2xpY2VBbmltYXRvci5hbmltYXRpb25Eb25lKCRldmVudClcIj5cbiAgICAgICAgPGxpZ2h0Ym94LWl0ZW0gKHRvZ2dsZUV2ZW50KT1cIm9uVG9nZ2xlKClcIiAjbGlnaHRib3hJdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zW2FjdGl2ZUl0ZW0uY29udGFpbmVyXVwiIFtpdGVtXT1cIml0ZW1cIj5cbiAgICAgICAgPC9saWdodGJveC1pdGVtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8bGlnaHRib3gtem9vbSAjbGlnaHRib3hab29tXG4gICAgICAgICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwiZGlzcGxheVpvb21cIlxuICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlWm9vbUluXT1cImRpc2FibGVab29tSW5cIlxuICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlWm9vbU91dF09XCJkaXNhYmxlWm9vbU91dFwiXG4gICAgICAgICAgICAgICAgICAgW2Rpc2FibGVSZXNldFpvb21dPVwiZGlzYWJsZVJlc2V0Wm9vbVwiXG4gICAgICAgICAgICAgICAgICAgW2Rpc2FibGVGZWV0VG9XaWR0aF09XCJkaXNhYmxlRmVldFRvV2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICh6b29tSW5FdmVudCk9XCJ6b29tSW4oKVwiXG4gICAgICAgICAgICAgICAgICAgKHpvb21PdXRFdmVudCk9XCJ6b29tT3V0KClcIlxuICAgICAgICAgICAgICAgICAgIChyZXNldFpvb21FdmVudCk9XCJyZXNldFpvb20oKVwiXG4gICAgICAgICAgICAgICAgICAgKGZlZXRUb1dpZHRoRXZlbnQpPVwiZmVldFRvV2lkdGgoKVwiPlxuICAgIDwvbGlnaHRib3gtem9vbT5cblxuICAgIDxjbWFjcy12aWRlby1wbGF5ZXIgW3NvdXJjZXNdPVwiYWN0aXZlSXRlbT8gZ2V0VmlkZW9Tb3VyY2VzKCkgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaWdodGJveC12aWRlby1wbGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKHBsYXllclJlYWR5KT1cIm9uUGxheWVyUmVhZHkoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J3Zpc2liaWxpdHknOiBkaXNwbGF5WW91dHViZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nIH1cIj5cbiAgICA8L2NtYWNzLXZpZGVvLXBsYXllcj5cblxuICA8L2Rpdj5cbiAgICA8bGlnaHRib3gtdGh1bWJuYWlscyBbbmdDbGFzc109XCJ7J3ZlcnRpY2FsLXRodW1ibmFpbHMnOiBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAncmlnaHQnLCAnaG9yaXpvbnRhbC10aHVtYm5haWxzJzogY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMucG9zaXRpb24gPT09ICd0b3AnIHx8IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAnYm90dG9tJ31cIiAjdGh1bWJuYWlscyBbaXRlbXNdPVwiYWN0aXZlSXRlbT8gaXRlbXNbYWN0aXZlSXRlbS5jb250YWluZXJdOltdXCIgKHNlbGVjdEV2ZW50KT1cInNlbGVjdEl0ZW0oJGV2ZW50KVwiXG4gICAgW25nU3R5bGVdPVwieydvcmRlcic6IGNvbmZpZy5jb250cm9scy50aHVtYm5haWxzLnBvc2l0aW9uID09PSAndG9wJyB8fCBjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5wb3NpdGlvbiA9PT0gJ2xlZnQnID8gMSA6IDIgfVwiPlxuICAgIDwvbGlnaHRib3gtdGh1bWJuYWlscz5cbjwvZGl2PlxuIl19