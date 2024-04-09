import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Video } from '../../models/video';
import { LightboxItemAnimations } from '../../models/lightbox-item/animations/lightbox-item-animations';
import { LightboxItemZoomAnimator } from '../../models/lightbox-item/animations/lightbox-item-zoom-animator';
import { Dimensions } from '../../models/dimensions.interface';
import { filter, first } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../services/lightbox-configuration.service";
import * as i2 from "../../../cmacs-lazy-loading/directives/lazy-loading.directive";
const _c0 = ["img"];
const ZOOM_PERCENT = 10;
const ZOOM_MAX_AFTER_WIDTH = 3;
export class LightboxItemComponent {
    constructor(_elementRef, config) {
        this._elementRef = _elementRef;
        this.config = config;
        this.toggleEvent = new EventEmitter();
        this._dragging = false;
        this._zoomMax = 100 + ZOOM_MAX_AFTER_WIDTH * ZOOM_PERCENT;
    }
    ngOnInit() {
        this.lightboxItemZoomAnimator = new LightboxItemZoomAnimator();
        this.item.isVideo = this.item instanceof Video;
        this.lightboxItemZoomAnimator.animation = { value: 'state1' };
    }
    open(containerDimensions, startCb, doneCb) {
        if (this.item.dimensions) {
            let width = 100 - ZOOM_PERCENT;
            while (containerDimensions.width * (width / 100) / this.item.dimensions.ratio > containerDimensions.height * 9 / 10) {
                width -= ZOOM_PERCENT;
            }
            this._zoomMin = width;
            this._currentZoom = width;
            this.lightboxItemZoomAnimator.origin(this.item.dimensions, this.item.position, this._getContainerDimensions(), startCb, () => {
                this.resetZoom(this.config.animations.itemOpen.duration, containerDimensions, null, doneCb);
            });
        }
        else {
            if (startCb) {
                startCb();
            }
            if (doneCb) {
                doneCb();
            }
        }
    }
    resetZoom(duration, containerDimensions, startCb, doneCb) {
        if (this.item.dimensions) {
            if (containerDimensions) {
                let width = 100 - ZOOM_PERCENT;
                while (containerDimensions.width * (width / 100) / this.item.dimensions.ratio > containerDimensions.height * 9 / 10) {
                    width -= ZOOM_PERCENT;
                }
                this._zoomMin = width;
                this._currentZoom = width;
                this.lightboxItemZoomAnimator.zoom(width, this.item.dimensions, this._getItemDimensions(), containerDimensions, duration, startCb, doneCb);
            }
            else {
                let width = 100 - ZOOM_PERCENT;
                while (this._getContainerDimensions().width * (width / 100) / this.item.dimensions.ratio > this._getContainerDimensions().height * 9 / 10) {
                    width -= ZOOM_PERCENT;
                }
                this._zoomMin = width;
                this._currentZoom = width;
                this.lightboxItemZoomAnimator.zoom(width, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), duration, startCb, doneCb);
            }
        }
        else {
            if (startCb) {
                startCb();
            }
            if (doneCb) {
                doneCb();
            }
            this.item.$dimensions.pipe(filter((value) => value !== undefined), first()).subscribe(() => {
                this.resetZoom(0);
            });
        }
    }
    zoomIn(startCb, doneCb) {
        if (this.item.dimensions) {
            this.lightboxItemZoomAnimator.zoom(this._currentZoom + ZOOM_PERCENT, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), this.config.animations.zoomIn.duration, startCb, doneCb);
            this._currentZoom += ZOOM_PERCENT;
        }
        else {
            if (startCb) {
                startCb();
            }
            if (doneCb) {
                doneCb();
            }
        }
    }
    zoomOut(startCb, doneCb) {
        if (this.item.dimensions) {
            this.lightboxItemZoomAnimator.zoom(this._currentZoom - ZOOM_PERCENT, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), this.config.animations.zoomIn.duration, startCb, doneCb);
            this._currentZoom -= ZOOM_PERCENT;
        }
        else {
            if (startCb) {
                startCb();
            }
            if (doneCb) {
                doneCb();
            }
        }
    }
    feetToWidth(startCb, doneCb) {
        if (this.item.dimensions) {
            this.lightboxItemZoomAnimator.zoom(100, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), this.config.animations.zoomIn.duration, startCb, doneCb);
            this._currentZoom = 100;
        }
        else {
            if (startCb) {
                startCb();
            }
            if (doneCb) {
                doneCb();
            }
        }
    }
    onClick(event) {
        /*if (!this.item.isVideo) {

            this.toggleEvent.emit();
        }*/
    }
    isFeetToWidth() {
        return this._currentZoom === 100;
    }
    isZoomMin() {
        return this._currentZoom <= this._zoomMin;
    }
    isZoomMax() {
        return this._currentZoom >= this._zoomMax;
    }
    onDrag(event) {
        if (!this._dragging) {
            if (this._currentZoom === this._zoomMin || (this._elementRef.nativeElement.clientWidth >=
                this._img.nativeElement.clientWidth && this._elementRef.nativeElement.clientHeight >= this._img.nativeElement.clientHeight)) {
                return;
            }
            this._img.nativeElement.style.cursor = 'move';
            this._dragPosition = {
                startX: event.deltaX,
                startY: event.deltaY
            };
        }
        else {
            if (this._elementRef.nativeElement.clientWidth >= this._img.nativeElement.clientWidth) {
                this._dragPosition.endX = 0;
            }
            else {
                this._dragPosition.endX = this.lightboxItemZoomAnimator.animation.params.offsetLeft - this._dragPosition.startX + event.deltaX;
                if (this._dragPosition.endX > (this._img.nativeElement.clientWidth - this._elementRef.nativeElement.clientWidth) / 2) {
                    this._dragPosition.endX = (this._img.nativeElement.clientWidth - this._elementRef.nativeElement.clientWidth) / 2;
                }
                if (this._dragPosition.endX < -1 * (this._img.nativeElement.clientWidth - this._elementRef.nativeElement.clientWidth) / 2) {
                    this._dragPosition.endX = -1 * (this._img.nativeElement.clientWidth - this._elementRef.nativeElement.clientWidth) / 2;
                }
            }
            if (this._elementRef.nativeElement.clientHeight >= this._img.nativeElement.clientHeight) {
                this._dragPosition.endY = 0;
            }
            else {
                this._dragPosition.endY = this.lightboxItemZoomAnimator.animation.params.offsetTop - this._dragPosition.startY + event.deltaY;
                if (this._dragPosition.endY > (this._img.nativeElement.clientHeight - this._elementRef.nativeElement.clientHeight) / 2) {
                    this._dragPosition.endY = (this._img.nativeElement.clientHeight - this._elementRef.nativeElement.clientHeight) / 2;
                }
                if (this._dragPosition.endY < -1 * (this._img.nativeElement.clientHeight - this._elementRef.nativeElement.clientHeight) / 2) {
                    this._dragPosition.endY = -1 * (this._img.nativeElement.clientHeight - this._elementRef.nativeElement.clientHeight) / 2;
                }
            }
            this._img.nativeElement.parentNode.style.left = this._dragPosition.endX + 'px';
            this._img.nativeElement.parentNode.style.top = this._dragPosition.endY + 'px';
        }
        if (event.isFinal) {
            this.lightboxItemZoomAnimator.animation.params.offsetLeft = this._dragPosition.endX;
            this.lightboxItemZoomAnimator.animation.params.offsetTop = this._dragPosition.endY;
            this._img.nativeElement.style.cursor = 'default';
            this._dragging = false;
        }
        else {
            this._dragging = true;
        }
    }
    onLoad(event) {
        if (!this.item.dimensions) {
            this.item.dimensions = new Dimensions(this._img.nativeElement.naturalWidth, this._img.nativeElement.naturalHeight);
        }
    }
    getDefaultSrc() {
        if (this.item.src) {
            return this.item.src;
        }
        if (this.item.xsSrc) {
            return this.item.xsSrc;
        }
        if (this.item.smSrc) {
            return this.item.smSrc;
        }
        if (this.item.mdSrc) {
            return this.item.mdSrc;
        }
        if (this.item.lgSrc) {
            return this.item.lgSrc;
        }
        if (this.item.xlSrc) {
            return this.item.xlSrc;
        }
    }
    resize() {
        if (this.isZoomMin()) {
            this.resetZoom(0);
        }
        else {
            this.lightboxItemZoomAnimator.zoom(this._currentZoom, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), this.config.animations.zoomIn.duration);
        }
    }
    _getContainerDimensions() {
        return new Dimensions(this._elementRef.nativeElement.clientWidth, this._elementRef.nativeElement.clientHeight);
    }
    _getItemDimensions() {
        return new Dimensions(this._img.nativeElement.clientWidth, this._img.nativeElement.clientHeight);
    }
    static { this.ɵfac = function LightboxItemComponent_Factory(t) { return new (t || LightboxItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LightboxConfigurationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LightboxItemComponent, selectors: [["lightbox-item"]], viewQuery: function LightboxItemComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._img = _t.first);
        } }, inputs: { item: "item" }, outputs: { toggleEvent: "toggleEvent" }, decls: 3, vars: 11, consts: [[3, "tap"], ["lazy-loading", "", "draggable", "false", 3, "src", "xs-src", "sm-src", "md-src", "lg-src", "xl-src", "xs-breakpoint", "sm-breakpoint", "md-breakpoint", "lg-breakpoint", "load"], ["img", ""]], template: function LightboxItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("tap", function LightboxItemComponent_Template_div_tap_0_listener($event) { return ctx.onClick($event); })("@lightboxItemZoom.start", function LightboxItemComponent_Template_div_animation_lightboxItemZoom_start_0_listener($event) { return ctx.lightboxItemZoomAnimator.animationStart($event); })("@lightboxItemZoom.done", function LightboxItemComponent_Template_div_animation_lightboxItemZoom_done_0_listener($event) { return ctx.lightboxItemZoomAnimator.animationDone($event); });
            i0.ɵɵelementStart(1, "img", 1, 2);
            i0.ɵɵlistener("load", function LightboxItemComponent_Template_img_load_1_listener($event) { return ctx.onLoad($event); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("@lightboxItemZoom", ctx.lightboxItemZoomAnimator.animation);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("src", ctx.getDefaultSrc(), i0.ɵɵsanitizeUrl)("xs-src", ctx.item.xsSrc)("sm-src", ctx.item.smSrc)("md-src", ctx.item.mdSrc)("lg-src", ctx.item.lgSrc)("xl-src", ctx.item.xlSrc)("xs-breakpoint", ctx.item.xsBreakpoint)("sm-breakpoint", ctx.item.smBreakpoint)("md-breakpoint", ctx.item.mdBreakpoint)("lg-breakpoint", ctx.item.lgBreakpoint);
        } }, dependencies: [i2.LazyLoadingDirective], styles: ["[_nghost-%COMP%]{z-index:1;box-sizing:border-box;display:flex;flex-direction:column;height:100%;width:100%;flex:0 0 100%;overflow:auto}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{pointer-events:auto;position:relative;max-height:calc(100vh - 64px);margin:0 auto;top:50%!important;transform:translateY(-50%)}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{position:relative;height:auto;width:100%}"], data: { animation: [LightboxItemAnimations.zoomAnimation] } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxItemComponent, [{
        type: Component,
        args: [{ selector: 'lightbox-item', animations: [LightboxItemAnimations.zoomAnimation], template: "<!--\r\ndraggable=\"true\"\r\n(pan)=\"onDrag($event)\"\r\n-->\r\n<div (tap)=\"onClick($event)\"\r\n     [@lightboxItemZoom]=\"lightboxItemZoomAnimator.animation\"\r\n     (@lightboxItemZoom.start)=\"lightboxItemZoomAnimator.animationStart($event)\"\r\n     (@lightboxItemZoom.done)=\"lightboxItemZoomAnimator.animationDone($event)\">\r\n  <img #img lazy-loading\r\n       draggable=\"false\"\r\n       [src]=\"getDefaultSrc()\"\r\n       [xs-src]=\"item.xsSrc\"\r\n       [sm-src]=\"item.smSrc\"\r\n       [md-src]=\"item.mdSrc\"\r\n       [lg-src]=\"item.lgSrc\"\r\n       [xl-src]=\"item.xlSrc\"\r\n       [xs-breakpoint]=\"item.xsBreakpoint\"\r\n       [sm-breakpoint]=\"item.smBreakpoint\"\r\n       [md-breakpoint]=\"item.mdBreakpoint\"\r\n       [lg-breakpoint]=\"item.lgBreakpoint\"\r\n       (load)=\"onLoad($event)\" />\r\n</div>\r\n\r\n", styles: [":host{z-index:1;box-sizing:border-box;display:flex;flex-direction:column;height:100%;width:100%;flex:0 0 100%;overflow:auto}:host>div{pointer-events:auto;position:relative;max-height:calc(100vh - 64px);margin:0 auto;top:50%!important;transform:translateY(-50%)}:host img{position:relative;height:auto;width:100%}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.LightboxConfigurationService }]; }, { item: [{
            type: Input,
            args: ['item']
        }], toggleEvent: [{
            type: Output
        }], _img: [{
            type: ViewChild,
            args: ['img']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlnaHRib3gvY29tcG9uZW50cy9saWdodGJveC1pdGVtL2xpZ2h0Ym94LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtaXRlbS9saWdodGJveC1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFjLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSXRHLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUN4RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFL0MsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO0FBUS9CLE1BQU0sT0FBTyxxQkFBcUI7SUFvQjlCLFlBQ3FCLFdBQXVCLEVBQ2pDLE1BQW9DO1FBRDFCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQThCO1FBbEI5QixnQkFBVyxHQUFHLElBQUks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Q0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuSCxDQUFDO0lBRU8sa0JBQWtCO1FBQ3RCLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JHLENBQUM7c0ZBaFRRLHFCQUFxQjtvRUFBckIscUJBQXFCOzs7Ozs7WUNoQmxDLDhCQUcrRTtZQUgxRSxpR0FBTyxtQkFBZSxJQUFDLHFJQUVJLG1EQUErQyxJQUZuRCxtSUFHRyxrREFBOEMsSUFIakQ7WUFJMUIsaUNBWStCO1lBQTFCLG1HQUFRLGtCQUFjLElBQUM7WUFaNUIsaUJBWStCLEVBQUE7O1lBZjVCLDBFQUF3RDtZQUt0RCxlQUF1QjtZQUF2QiwyREFBdUIsMEJBQUEsMEJBQUEsMEJBQUEsMEJBQUEsMEJBQUEsd0NBQUEsd0NBQUEsd0NBQUEsd0NBQUE7MGREUWQsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7O3VGQUV6QyxxQkFBcUI7Y0FOakMsU0FBUzsyQkFDSSxlQUFlLGNBR2IsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7d0dBSTVCLElBQUk7a0JBQXpCLEtBQUs7bUJBQUMsTUFBTTtZQUVJLFdBQVc7a0JBQTNCLE1BQU07WUFjbUIsSUFBSTtrQkFBN0IsU0FBUzttQkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9pdGVtJztcclxuaW1wb3J0IHsgTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xpZ2h0Ym94LWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFZpZGVvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3ZpZGVvJztcclxuaW1wb3J0IHsgRHJhZ1Bvc2l0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RyYWctcG9zaXRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTGlnaHRib3hJdGVtQW5pbWF0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVscy9saWdodGJveC1pdGVtL2FuaW1hdGlvbnMvbGlnaHRib3gtaXRlbS1hbmltYXRpb25zJztcclxuaW1wb3J0IHsgTGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpZ2h0Ym94LWl0ZW0vYW5pbWF0aW9ucy9saWdodGJveC1pdGVtLXpvb20tYW5pbWF0b3InO1xyXG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RpbWVuc2lvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmNvbnN0IFpPT01fUEVSQ0VOVCA9IDEwO1xyXG5jb25zdCBaT09NX01BWF9BRlRFUl9XSURUSCA9IDM7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGlnaHRib3gtaXRlbScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2xpZ2h0Ym94LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2xpZ2h0Ym94LWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGFuaW1hdGlvbnM6IFtMaWdodGJveEl0ZW1BbmltYXRpb25zLnpvb21BbmltYXRpb25dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWdodGJveEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgnaXRlbScpIHB1YmxpYyBpdGVtOiBJdGVtO1xyXG5cclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgdG9nZ2xlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgcHVibGljIGxpZ2h0Ym94SXRlbVpvb21BbmltYXRvcjogTGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yO1xyXG5cclxuICAgIHByaXZhdGUgX2RyYWdQb3NpdGlvbjogRHJhZ1Bvc2l0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgX2RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfem9vbU1pbjogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX3pvb21NYXg6IG51bWJlciA9IDEwMCArIFpPT01fTUFYX0FGVEVSX1dJRFRIICogWk9PTV9QRVJDRU5UO1xyXG5cclxuICAgIHByaXZhdGUgX2N1cnJlbnRab29tOiBudW1iZXI7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnaW1nJykgcHJpdmF0ZSBfaW1nOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHVibGljIGNvbmZpZzogTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5saWdodGJveEl0ZW1ab29tQW5pbWF0b3IgPSBuZXcgTGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yKCk7XHJcbiAgICAgICAgdGhpcy5pdGVtLmlzVmlkZW8gPSB0aGlzLml0ZW0gaW5zdGFuY2VvZiBWaWRlbztcclxuICAgICAgICB0aGlzLmxpZ2h0Ym94SXRlbVpvb21BbmltYXRvci5hbmltYXRpb24gPSB7IHZhbHVlOiAnc3RhdGUxJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuKGNvbnRhaW5lckRpbWVuc2lvbnM6IERpbWVuc2lvbnMsIHN0YXJ0Q2I/OiAoKSA9PiB2b2lkLCBkb25lQ2I/OiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLml0ZW0uZGltZW5zaW9ucykge1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSAxMDAgLSBaT09NX1BFUkNFTlQ7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAoY29udGFpbmVyRGltZW5zaW9ucy53aWR0aCAqICh3aWR0aCAvIDEwMCkgLyB0aGlzLml0ZW0uZGltZW5zaW9ucy5yYXRpbyA+IGNvbnRhaW5lckRpbWVuc2lvbnMuaGVpZ2h0ICogOSAvIDEwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGggLT0gWk9PTV9QRVJDRU5UO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl96b29tTWluID0gd2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRab29tID0gd2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMubGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yLm9yaWdpbih0aGlzLml0ZW0uZGltZW5zaW9ucywgdGhpcy5pdGVtLnBvc2l0aW9uLCB0aGlzLl9nZXRDb250YWluZXJEaW1lbnNpb25zKCksIHN0YXJ0Q2IsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Wm9vbSh0aGlzLmNvbmZpZy5hbmltYXRpb25zLml0ZW1PcGVuLmR1cmF0aW9uLCBjb250YWluZXJEaW1lbnNpb25zLCBudWxsLCBkb25lQ2IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXJ0Q2IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydENiKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkb25lQ2IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkb25lQ2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXRab29tKGR1cmF0aW9uOiBudW1iZXIsIGNvbnRhaW5lckRpbWVuc2lvbnM/OiBEaW1lbnNpb25zLCBzdGFydENiPzogKCkgPT4gdm9pZCwgZG9uZUNiPzogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pdGVtLmRpbWVuc2lvbnMpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXJEaW1lbnNpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSAxMDAgLSBaT09NX1BFUkNFTlQ7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGNvbnRhaW5lckRpbWVuc2lvbnMud2lkdGggKiAod2lkdGggLyAxMDApIC8gdGhpcy5pdGVtLmRpbWVuc2lvbnMucmF0aW8gPiBjb250YWluZXJEaW1lbnNpb25zLmhlaWdodCAqIDkgLyAxMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCAtPSBaT09NX1BFUkNFTlQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fem9vbU1pbiA9IHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFpvb20gPSB3aWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpZ2h0Ym94SXRlbVpvb21BbmltYXRvci56b29tKHdpZHRoLCB0aGlzLml0ZW0uZGltZW5zaW9ucywgdGhpcy5fZ2V0SXRlbURpbWVuc2lvbnMoKSwgY29udGFpbmVyRGltZW5zaW9ucywgZHVyYXRpb24sIHN0YXJ0Q2IsIGRvbmVDYik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSAxMDAgLSBaT09NX1BFUkNFTlQ7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuX2dldENvbnRhaW5lckRpbWVuc2lvbnMoKS53aWR0aCAqICh3aWR0aCAvIDEwMCkgLyB0aGlzLml0ZW0uZGltZW5zaW9ucy5yYXRpbyA+IHRoaXMuX2dldENvbnRhaW5lckRpbWVuc2lvbnMoKS5oZWlnaHQgKiA5IC8gMTApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggLT0gWk9PTV9QRVJDRU5UO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3pvb21NaW4gPSB3aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRab29tID0gd2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5saWdodGJveEl0ZW1ab29tQW5pbWF0b3Iuem9vbSh3aWR0aCwgdGhpcy5pdGVtLmRpbWVuc2lvbnMsIHRoaXMuX2dldEl0ZW1EaW1lbnNpb25zKCksIHRoaXMuX2dldENvbnRhaW5lckRpbWVuc2lvbnMoKSwgZHVyYXRpb24sIHN0YXJ0Q2IsIGRvbmVDYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXJ0Q2IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydENiKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkb25lQ2IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkb25lQ2IoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuaXRlbS4kZGltZW5zaW9ucy5waXBlKFxyXG4gICAgICAgICAgICBmaWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgZmlyc3QoKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Wm9vbSgwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB6b29tSW4oc3RhcnRDYj86ICgpID0+IHZvaWQsIGRvbmVDYj86ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbS5kaW1lbnNpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yLnpvb20oXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Wm9vbSArIFpPT01fUEVSQ0VOVCxcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5kaW1lbnNpb25zLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0SXRlbURpbWVuc2lvbnMoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dldENvbnRhaW5lckRpbWVuc2lvbnMoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbnMuem9vbUluLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRDYixcclxuICAgICAgICAgICAgICAgIGRvbmVDYik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50Wm9vbSArPSBaT09NX1BFUkNFTlQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydENiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhcnRDYigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZG9uZUNiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZUNiKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHpvb21PdXQoc3RhcnRDYj86ICgpID0+IHZvaWQsIGRvbmVDYj86ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbS5kaW1lbnNpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yLnpvb20oXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Wm9vbSAtIFpPT01fUEVSQ0VOVCxcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5kaW1lbnNpb25zLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0SXRlbURpbWVuc2lvbnMoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dldENvbnRhaW5lckRpbWVuc2lvbnMoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbnMuem9vbUluLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRDYixcclxuICAgICAgICAgICAgICAgIGRvbmVDYik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50Wm9vbSAtPSBaT09NX1BFUkNFTlQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydENiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhcnRDYigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZG9uZUNiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZUNiKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZlZXRUb1dpZHRoKHN0YXJ0Q2I/OiAoKSA9PiB2b2lkLCBkb25lQ2I/OiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbS5kaW1lbnNpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yLnpvb20oMTAwLCB0aGlzLml0ZW0uZGltZW5zaW9ucywgdGhpcy5fZ2V0SXRlbURpbWVuc2lvbnMoKSwgdGhpcy5fZ2V0Q29udGFpbmVyRGltZW5zaW9ucygpLCB0aGlzLmNvbmZpZy5hbmltYXRpb25zLnpvb21Jbi5kdXJhdGlvbiwgc3RhcnRDYiwgZG9uZUNiKTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFpvb20gPSAxMDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydENiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhcnRDYigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZG9uZUNiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZUNiKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG5cclxuICAgICAgICAvKmlmICghdGhpcy5pdGVtLmlzVmlkZW8pIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRXZlbnQuZW1pdCgpO1xyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0ZlZXRUb1dpZHRoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Wm9vbSA9PT0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1pvb21NaW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRab29tIDw9IHRoaXMuX3pvb21NaW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzWm9vbU1heCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFpvb20gPj0gdGhpcy5fem9vbU1heDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25EcmFnKGV2ZW50OiBhbnkpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9kcmFnZ2luZykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudFpvb20gPT09IHRoaXMuX3pvb21NaW4gfHwgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCA+PVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCA+PSB0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ1Bvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRYOiBldmVudC5kZWx0YVgsXHJcbiAgICAgICAgICAgICAgICBzdGFydFk6IGV2ZW50LmRlbHRhWVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPj0gdGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRYID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRYID0gdGhpcy5saWdodGJveEl0ZW1ab29tQW5pbWF0b3IuYW5pbWF0aW9uLnBhcmFtcy5vZmZzZXRMZWZ0IC0gdGhpcy5fZHJhZ1Bvc2l0aW9uLnN0YXJ0WCArIGV2ZW50LmRlbHRhWDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnUG9zaXRpb24uZW5kWCA+ICh0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAtIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCkgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1Bvc2l0aW9uLmVuZFggPSAodGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnUG9zaXRpb24uZW5kWCA8IC0xICogKHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKSAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnUG9zaXRpb24uZW5kWCA9IC0xICogKHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgPj0gdGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnUG9zaXRpb24uZW5kWSA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnUG9zaXRpb24uZW5kWSA9IHRoaXMubGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yLmFuaW1hdGlvbi5wYXJhbXMub2Zmc2V0VG9wIC0gdGhpcy5fZHJhZ1Bvc2l0aW9uLnN0YXJ0WSArIGV2ZW50LmRlbHRhWTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnUG9zaXRpb24uZW5kWSA+ICh0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KSAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnUG9zaXRpb24uZW5kWSA9ICh0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZHJhZ1Bvc2l0aW9uLmVuZFkgPCAtMSAqICh0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KSAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnUG9zaXRpb24uZW5kWSA9IC0xICogKHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpIC8gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5sZWZ0ID0gdGhpcy5fZHJhZ1Bvc2l0aW9uLmVuZFggKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLnRvcCA9IHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRZICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmlzRmluYWwpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yLmFuaW1hdGlvbi5wYXJhbXMub2Zmc2V0TGVmdCA9IHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRYO1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0Ym94SXRlbVpvb21BbmltYXRvci5hbmltYXRpb24ucGFyYW1zLm9mZnNldFRvcCA9IHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRZO1xyXG4gICAgICAgICAgICB0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTG9hZChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLml0ZW0uZGltZW5zaW9ucykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtLmRpbWVuc2lvbnMgPSBuZXcgRGltZW5zaW9ucyh0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5uYXR1cmFsV2lkdGgsIHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50Lm5hdHVyYWxIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGVmYXVsdFNyYygpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmKHRoaXMuaXRlbS5zcmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5zcmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaXRlbS54c1NyYykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtLnhzU3JjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLml0ZW0uc21TcmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5zbVNyYztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5pdGVtLm1kU3JjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW0ubWRTcmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaXRlbS5sZ1NyYykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtLmxnU3JjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLml0ZW0ueGxTcmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS54bFNyYztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2l6ZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNab29tTWluKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFpvb20oMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5saWdodGJveEl0ZW1ab29tQW5pbWF0b3Iuem9vbShcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRab29tLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtLmRpbWVuc2lvbnMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRJdGVtRGltZW5zaW9ucygpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q29udGFpbmVyRGltZW5zaW9ucygpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuYW5pbWF0aW9ucy56b29tSW4uZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRDb250YWluZXJEaW1lbnNpb25zKCk6IERpbWVuc2lvbnMge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGltZW5zaW9ucyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEl0ZW1EaW1lbnNpb25zKCk6IERpbWVuc2lvbnMge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGltZW5zaW9ucyh0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCwgdGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcclxuICAgIH1cclxufVxyXG4iLCI8IS0tXHJcbmRyYWdnYWJsZT1cInRydWVcIlxyXG4ocGFuKT1cIm9uRHJhZygkZXZlbnQpXCJcclxuLS0+XHJcbjxkaXYgKHRhcCk9XCJvbkNsaWNrKCRldmVudClcIlxyXG4gICAgIFtAbGlnaHRib3hJdGVtWm9vbV09XCJsaWdodGJveEl0ZW1ab29tQW5pbWF0b3IuYW5pbWF0aW9uXCJcclxuICAgICAoQGxpZ2h0Ym94SXRlbVpvb20uc3RhcnQpPVwibGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yLmFuaW1hdGlvblN0YXJ0KCRldmVudClcIlxyXG4gICAgIChAbGlnaHRib3hJdGVtWm9vbS5kb25lKT1cImxpZ2h0Ym94SXRlbVpvb21BbmltYXRvci5hbmltYXRpb25Eb25lKCRldmVudClcIj5cclxuICA8aW1nICNpbWcgbGF6eS1sb2FkaW5nXHJcbiAgICAgICBkcmFnZ2FibGU9XCJmYWxzZVwiXHJcbiAgICAgICBbc3JjXT1cImdldERlZmF1bHRTcmMoKVwiXHJcbiAgICAgICBbeHMtc3JjXT1cIml0ZW0ueHNTcmNcIlxyXG4gICAgICAgW3NtLXNyY109XCJpdGVtLnNtU3JjXCJcclxuICAgICAgIFttZC1zcmNdPVwiaXRlbS5tZFNyY1wiXHJcbiAgICAgICBbbGctc3JjXT1cIml0ZW0ubGdTcmNcIlxyXG4gICAgICAgW3hsLXNyY109XCJpdGVtLnhsU3JjXCJcclxuICAgICAgIFt4cy1icmVha3BvaW50XT1cIml0ZW0ueHNCcmVha3BvaW50XCJcclxuICAgICAgIFtzbS1icmVha3BvaW50XT1cIml0ZW0uc21CcmVha3BvaW50XCJcclxuICAgICAgIFttZC1icmVha3BvaW50XT1cIml0ZW0ubWRCcmVha3BvaW50XCJcclxuICAgICAgIFtsZy1icmVha3BvaW50XT1cIml0ZW0ubGdCcmVha3BvaW50XCJcclxuICAgICAgIChsb2FkKT1cIm9uTG9hZCgkZXZlbnQpXCIgLz5cclxuPC9kaXY+XHJcblxyXG4iXX0=