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
        if (!this.item.isVideo) {
            this.toggleEvent.emit();
        }
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
}
LightboxItemComponent.ɵfac = function LightboxItemComponent_Factory(t) { return new (t || LightboxItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LightboxConfigurationService)); };
LightboxItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LightboxItemComponent, selectors: [["lightbox-item"]], viewQuery: function LightboxItemComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._img = _t.first);
    } }, inputs: { item: "item" }, outputs: { toggleEvent: "toggleEvent" }, decls: 3, vars: 11, consts: [["draggable", "true", 3, "tap", "pan"], ["lazy-loading", "", "draggable", "false", 3, "src", "xs-src", "sm-src", "md-src", "lg-src", "xl-src", "xs-breakpoint", "sm-breakpoint", "md-breakpoint", "lg-breakpoint", "load"], ["img", ""]], template: function LightboxItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("tap", function LightboxItemComponent_Template_div_tap_0_listener($event) { return ctx.onClick($event); })("pan", function LightboxItemComponent_Template_div_pan_0_listener($event) { return ctx.onDrag($event); })("@lightboxItemZoom.start", function LightboxItemComponent_Template_div_animation_lightboxItemZoom_start_0_listener($event) { return ctx.lightboxItemZoomAnimator.animationStart($event); })("@lightboxItemZoom.done", function LightboxItemComponent_Template_div_animation_lightboxItemZoom_done_0_listener($event) { return ctx.lightboxItemZoomAnimator.animationDone($event); });
        i0.ɵɵelementStart(1, "img", 1, 2);
        i0.ɵɵlistener("load", function LightboxItemComponent_Template_img_load_1_listener($event) { return ctx.onLoad($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("@lightboxItemZoom", ctx.lightboxItemZoomAnimator.animation);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("src", ctx.getDefaultSrc(), i0.ɵɵsanitizeUrl)("xs-src", ctx.item.xsSrc)("sm-src", ctx.item.smSrc)("md-src", ctx.item.mdSrc)("lg-src", ctx.item.lgSrc)("xl-src", ctx.item.xlSrc)("xs-breakpoint", ctx.item.xsBreakpoint)("sm-breakpoint", ctx.item.smBreakpoint)("md-breakpoint", ctx.item.mdBreakpoint)("lg-breakpoint", ctx.item.lgBreakpoint);
    } }, directives: [i2.LazyLoadingDirective], styles: ["[_nghost-%COMP%]{z-index:1;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;flex:0 0 100%;pointer-events:none}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{pointer-events:auto;position:relative}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{position:relative;height:auto;width:100%}"], data: { animation: [LightboxItemAnimations.zoomAnimation] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxItemComponent, [{
        type: Component,
        args: [{
                selector: 'lightbox-item',
                templateUrl: 'lightbox-item.component.html',
                styleUrls: ['lightbox-item.component.scss'],
                animations: [LightboxItemAnimations.zoomAnimation]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.LightboxConfigurationService }]; }, { item: [{
            type: Input,
            args: ['item']
        }], toggleEvent: [{
            type: Output
        }], _img: [{
            type: ViewChild,
            args: ['img']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlnaHRib3gvY29tcG9uZW50cy9saWdodGJveC1pdGVtL2xpZ2h0Ym94LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtaXRlbS9saWdodGJveC1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFjLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSXRHLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUN4RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFL0MsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO0FBUS9CLE1BQU0sT0FBTyxxQkFBcUI7SUFvQjlCLFlBQ3FCLFdBQXVCLEVBQ2pDLE1BQW9DO1FBRDFCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQThCO1FBbEI5QixnQkFBVyxHQUFHLElBQUks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SUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25ILENBQUM7SUFFTyxrQkFBa0I7UUFDdEIsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckcsQ0FBQzs7MEZBaFRRLHFCQUFxQjswREFBckIscUJBQXFCOzs7Ozs7UUNwQmxDLDhCQU04RTtRQUoxRSxpR0FBTyxtQkFBZSxJQUFDLG9GQUNoQixrQkFBYyxJQURFLHFJQUdJLG1EQUErQyxJQUhuRCxtSUFJRyxrREFBOEMsSUFKakQ7UUFLdkIsaUNBWTZCO1FBQXpCLG1HQUFRLGtCQUFjLElBQUM7UUFaM0IsaUJBWTZCO1FBQ2pDLGlCQUFNOztRQWhCRiwwRUFBd0Q7UUFLcEQsZUFBdUI7UUFBdkIsMkRBQXVCLDBCQUFBLDBCQUFBLDBCQUFBLDBCQUFBLDBCQUFBLHdDQUFBLHdDQUFBLHdDQUFBLHdDQUFBOzJhRFNmLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDO3VGQUV6QyxxQkFBcUI7Y0FOakMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsVUFBVSxFQUFFLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDO2FBQ3JEO3dHQUd5QixJQUFJO2tCQUF6QixLQUFLO21CQUFDLE1BQU07WUFFSSxXQUFXO2tCQUEzQixNQUFNO1lBY21CLElBQUk7a0JBQTdCLFNBQVM7bUJBQUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvaXRlbSc7XHJcbmltcG9ydCB7IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saWdodGJveC1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWaWRlbyB9IGZyb20gJy4uLy4uL21vZGVscy92aWRlbyc7XHJcbmltcG9ydCB7IERyYWdQb3NpdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9kcmFnLXBvc2l0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IExpZ2h0Ym94SXRlbUFuaW1hdGlvbnMgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGlnaHRib3gtaXRlbS9hbmltYXRpb25zL2xpZ2h0Ym94LWl0ZW0tYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IExpZ2h0Ym94SXRlbVpvb21BbmltYXRvciB9IGZyb20gJy4uLy4uL21vZGVscy9saWdodGJveC1pdGVtL2FuaW1hdGlvbnMvbGlnaHRib3gtaXRlbS16b29tLWFuaW1hdG9yJztcclxuaW1wb3J0IHsgRGltZW5zaW9ucyB9IGZyb20gJy4uLy4uL21vZGVscy9kaW1lbnNpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5jb25zdCBaT09NX1BFUkNFTlQgPSAxMDtcclxuY29uc3QgWk9PTV9NQVhfQUZURVJfV0lEVEggPSAzO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpZ2h0Ym94LWl0ZW0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdsaWdodGJveC1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydsaWdodGJveC1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBbTGlnaHRib3hJdGVtQW5pbWF0aW9ucy56b29tQW5pbWF0aW9uXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlnaHRib3hJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBASW5wdXQoJ2l0ZW0nKSBwdWJsaWMgaXRlbTogSXRlbTtcclxuXHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHRvZ2dsZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHB1YmxpYyBsaWdodGJveEl0ZW1ab29tQW5pbWF0b3I6IExpZ2h0Ym94SXRlbVpvb21BbmltYXRvcjtcclxuXHJcbiAgICBwcml2YXRlIF9kcmFnUG9zaXRpb246IERyYWdQb3NpdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIF9kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3pvb21NaW46IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF96b29tTWF4OiBudW1iZXIgPSAxMDAgKyBaT09NX01BWF9BRlRFUl9XSURUSCAqIFpPT01fUEVSQ0VOVDtcclxuXHJcbiAgICBwcml2YXRlIF9jdXJyZW50Wm9vbTogbnVtYmVyO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2ltZycpIHByaXZhdGUgX2ltZzogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHB1YmxpYyBjb25maWc6IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yID0gbmV3IExpZ2h0Ym94SXRlbVpvb21BbmltYXRvcigpO1xyXG4gICAgICAgIHRoaXMuaXRlbS5pc1ZpZGVvID0gdGhpcy5pdGVtIGluc3RhbmNlb2YgVmlkZW87XHJcbiAgICAgICAgdGhpcy5saWdodGJveEl0ZW1ab29tQW5pbWF0b3IuYW5pbWF0aW9uID0geyB2YWx1ZTogJ3N0YXRlMScgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3Blbihjb250YWluZXJEaW1lbnNpb25zOiBEaW1lbnNpb25zLCBzdGFydENiPzogKCkgPT4gdm9pZCwgZG9uZUNiPzogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pdGVtLmRpbWVuc2lvbnMpIHtcclxuICAgICAgICAgICAgbGV0IHdpZHRoID0gMTAwIC0gWk9PTV9QRVJDRU5UO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKGNvbnRhaW5lckRpbWVuc2lvbnMud2lkdGggKiAod2lkdGggLyAxMDApIC8gdGhpcy5pdGVtLmRpbWVuc2lvbnMucmF0aW8gPiBjb250YWluZXJEaW1lbnNpb25zLmhlaWdodCAqIDkgLyAxMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoIC09IFpPT01fUEVSQ0VOVDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fem9vbU1pbiA9IHdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50Wm9vbSA9IHdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0Ym94SXRlbVpvb21BbmltYXRvci5vcmlnaW4odGhpcy5pdGVtLmRpbWVuc2lvbnMsIHRoaXMuaXRlbS5wb3NpdGlvbiwgdGhpcy5fZ2V0Q29udGFpbmVyRGltZW5zaW9ucygpLCBzdGFydENiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFpvb20odGhpcy5jb25maWcuYW5pbWF0aW9ucy5pdGVtT3Blbi5kdXJhdGlvbiwgY29udGFpbmVyRGltZW5zaW9ucywgbnVsbCwgZG9uZUNiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydENiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhcnRDYigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZG9uZUNiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZUNiKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0Wm9vbShkdXJhdGlvbjogbnVtYmVyLCBjb250YWluZXJEaW1lbnNpb25zPzogRGltZW5zaW9ucywgc3RhcnRDYj86ICgpID0+IHZvaWQsIGRvbmVDYj86ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbS5kaW1lbnNpb25zKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyRGltZW5zaW9ucykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gMTAwIC0gWk9PTV9QRVJDRU5UO1xyXG5cclxuICAgICAgICAgICAgICAgIHdoaWxlIChjb250YWluZXJEaW1lbnNpb25zLndpZHRoICogKHdpZHRoIC8gMTAwKSAvIHRoaXMuaXRlbS5kaW1lbnNpb25zLnJhdGlvID4gY29udGFpbmVyRGltZW5zaW9ucy5oZWlnaHQgKiA5IC8gMTApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggLT0gWk9PTV9QRVJDRU5UO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3pvb21NaW4gPSB3aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRab29tID0gd2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5saWdodGJveEl0ZW1ab29tQW5pbWF0b3Iuem9vbSh3aWR0aCwgdGhpcy5pdGVtLmRpbWVuc2lvbnMsIHRoaXMuX2dldEl0ZW1EaW1lbnNpb25zKCksIGNvbnRhaW5lckRpbWVuc2lvbnMsIGR1cmF0aW9uLCBzdGFydENiLCBkb25lQ2IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gMTAwIC0gWk9PTV9QRVJDRU5UO1xyXG5cclxuICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLl9nZXRDb250YWluZXJEaW1lbnNpb25zKCkud2lkdGggKiAod2lkdGggLyAxMDApIC8gdGhpcy5pdGVtLmRpbWVuc2lvbnMucmF0aW8gPiB0aGlzLl9nZXRDb250YWluZXJEaW1lbnNpb25zKCkuaGVpZ2h0ICogOSAvIDEwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIC09IFpPT01fUEVSQ0VOVDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl96b29tTWluID0gd2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Wm9vbSA9IHdpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yLnpvb20od2lkdGgsIHRoaXMuaXRlbS5kaW1lbnNpb25zLCB0aGlzLl9nZXRJdGVtRGltZW5zaW9ucygpLCB0aGlzLl9nZXRDb250YWluZXJEaW1lbnNpb25zKCksIGR1cmF0aW9uLCBzdGFydENiLCBkb25lQ2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydENiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhcnRDYigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZG9uZUNiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZUNiKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLml0ZW0uJGRpbWVuc2lvbnMucGlwZShcclxuICAgICAgICAgICAgZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgIGZpcnN0KCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFpvb20oMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgem9vbUluKHN0YXJ0Q2I/OiAoKSA9PiB2b2lkLCBkb25lQ2I/OiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLml0ZW0uZGltZW5zaW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0Ym94SXRlbVpvb21BbmltYXRvci56b29tKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFpvb20gKyBaT09NX1BFUkNFTlQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0uZGltZW5zaW9ucyxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dldEl0ZW1EaW1lbnNpb25zKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRDb250YWluZXJEaW1lbnNpb25zKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5hbmltYXRpb25zLnpvb21Jbi5kdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIHN0YXJ0Q2IsXHJcbiAgICAgICAgICAgICAgICBkb25lQ2IpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFpvb20gKz0gWk9PTV9QRVJDRU5UO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhcnRDYikge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXJ0Q2IoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRvbmVDYikge1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmVDYigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB6b29tT3V0KHN0YXJ0Q2I/OiAoKSA9PiB2b2lkLCBkb25lQ2I/OiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLml0ZW0uZGltZW5zaW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0Ym94SXRlbVpvb21BbmltYXRvci56b29tKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFpvb20gLSBaT09NX1BFUkNFTlQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0uZGltZW5zaW9ucyxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dldEl0ZW1EaW1lbnNpb25zKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRDb250YWluZXJEaW1lbnNpb25zKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5hbmltYXRpb25zLnpvb21Jbi5kdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIHN0YXJ0Q2IsXHJcbiAgICAgICAgICAgICAgICBkb25lQ2IpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFpvb20gLT0gWk9PTV9QRVJDRU5UO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhcnRDYikge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXJ0Q2IoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRvbmVDYikge1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmVDYigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmZWV0VG9XaWR0aChzdGFydENiPzogKCkgPT4gdm9pZCwgZG9uZUNiPzogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW0uZGltZW5zaW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0Ym94SXRlbVpvb21BbmltYXRvci56b29tKDEwMCwgdGhpcy5pdGVtLmRpbWVuc2lvbnMsIHRoaXMuX2dldEl0ZW1EaW1lbnNpb25zKCksIHRoaXMuX2dldENvbnRhaW5lckRpbWVuc2lvbnMoKSwgdGhpcy5jb25maWcuYW5pbWF0aW9ucy56b29tSW4uZHVyYXRpb24sIHN0YXJ0Q2IsIGRvbmVDYik7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRab29tID0gMTAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhcnRDYikge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXJ0Q2IoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRvbmVDYikge1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmVDYigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLml0ZW0uaXNWaWRlbykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b2dnbGVFdmVudC5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0ZlZXRUb1dpZHRoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Wm9vbSA9PT0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1pvb21NaW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRab29tIDw9IHRoaXMuX3pvb21NaW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzWm9vbU1heCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFpvb20gPj0gdGhpcy5fem9vbU1heDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25EcmFnKGV2ZW50OiBhbnkpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9kcmFnZ2luZykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudFpvb20gPT09IHRoaXMuX3pvb21NaW4gfHwgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCA+PVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCA+PSB0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ1Bvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRYOiBldmVudC5kZWx0YVgsXHJcbiAgICAgICAgICAgICAgICBzdGFydFk6IGV2ZW50LmRlbHRhWVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPj0gdGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRYID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRYID0gdGhpcy5saWdodGJveEl0ZW1ab29tQW5pbWF0b3IuYW5pbWF0aW9uLnBhcmFtcy5vZmZzZXRMZWZ0IC0gdGhpcy5fZHJhZ1Bvc2l0aW9uLnN0YXJ0WCArIGV2ZW50LmRlbHRhWDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnUG9zaXRpb24uZW5kWCA+ICh0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAtIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCkgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1Bvc2l0aW9uLmVuZFggPSAodGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnUG9zaXRpb24uZW5kWCA8IC0xICogKHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKSAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnUG9zaXRpb24uZW5kWCA9IC0xICogKHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgPj0gdGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnUG9zaXRpb24uZW5kWSA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnUG9zaXRpb24uZW5kWSA9IHRoaXMubGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yLmFuaW1hdGlvbi5wYXJhbXMub2Zmc2V0VG9wIC0gdGhpcy5fZHJhZ1Bvc2l0aW9uLnN0YXJ0WSArIGV2ZW50LmRlbHRhWTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnUG9zaXRpb24uZW5kWSA+ICh0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KSAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnUG9zaXRpb24uZW5kWSA9ICh0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZHJhZ1Bvc2l0aW9uLmVuZFkgPCAtMSAqICh0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KSAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnUG9zaXRpb24uZW5kWSA9IC0xICogKHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpIC8gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5sZWZ0ID0gdGhpcy5fZHJhZ1Bvc2l0aW9uLmVuZFggKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLnRvcCA9IHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRZICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmlzRmluYWwpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yLmFuaW1hdGlvbi5wYXJhbXMub2Zmc2V0TGVmdCA9IHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRYO1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0Ym94SXRlbVpvb21BbmltYXRvci5hbmltYXRpb24ucGFyYW1zLm9mZnNldFRvcCA9IHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRZO1xyXG4gICAgICAgICAgICB0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTG9hZChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLml0ZW0uZGltZW5zaW9ucykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtLmRpbWVuc2lvbnMgPSBuZXcgRGltZW5zaW9ucyh0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5uYXR1cmFsV2lkdGgsIHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50Lm5hdHVyYWxIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGVmYXVsdFNyYygpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmKHRoaXMuaXRlbS5zcmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5zcmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaXRlbS54c1NyYykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtLnhzU3JjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLml0ZW0uc21TcmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5zbVNyYztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5pdGVtLm1kU3JjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW0ubWRTcmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaXRlbS5sZ1NyYykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtLmxnU3JjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLml0ZW0ueGxTcmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS54bFNyYztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2l6ZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNab29tTWluKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFpvb20oMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5saWdodGJveEl0ZW1ab29tQW5pbWF0b3Iuem9vbShcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRab29tLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtLmRpbWVuc2lvbnMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRJdGVtRGltZW5zaW9ucygpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q29udGFpbmVyRGltZW5zaW9ucygpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuYW5pbWF0aW9ucy56b29tSW4uZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRDb250YWluZXJEaW1lbnNpb25zKCk6IERpbWVuc2lvbnMge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGltZW5zaW9ucyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEl0ZW1EaW1lbnNpb25zKCk6IERpbWVuc2lvbnMge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGltZW5zaW9ucyh0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCwgdGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcclxuICAgIH1cclxufVxyXG4iLCI8ZGl2XG4gICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXG4gICAgKHRhcCk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgIChwYW4pPVwib25EcmFnKCRldmVudClcIlxuICAgIFtAbGlnaHRib3hJdGVtWm9vbV09XCJsaWdodGJveEl0ZW1ab29tQW5pbWF0b3IuYW5pbWF0aW9uXCJcbiAgICAoQGxpZ2h0Ym94SXRlbVpvb20uc3RhcnQpPVwibGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yLmFuaW1hdGlvblN0YXJ0KCRldmVudClcIlxuICAgIChAbGlnaHRib3hJdGVtWm9vbS5kb25lKT1cImxpZ2h0Ym94SXRlbVpvb21BbmltYXRvci5hbmltYXRpb25Eb25lKCRldmVudClcIj5cbiAgICA8aW1nICNpbWcgbGF6eS1sb2FkaW5nXG4gICAgICAgIGRyYWdnYWJsZT1cImZhbHNlXCJcbiAgICAgICAgW3NyY109XCJnZXREZWZhdWx0U3JjKClcIlxuICAgICAgICBbeHMtc3JjXT1cIml0ZW0ueHNTcmNcIlxuICAgICAgICBbc20tc3JjXT1cIml0ZW0uc21TcmNcIlxuICAgICAgICBbbWQtc3JjXT1cIml0ZW0ubWRTcmNcIlxuICAgICAgICBbbGctc3JjXT1cIml0ZW0ubGdTcmNcIlxuICAgICAgICBbeGwtc3JjXT1cIml0ZW0ueGxTcmNcIlxuICAgICAgICBbeHMtYnJlYWtwb2ludF09XCJpdGVtLnhzQnJlYWtwb2ludFwiXG4gICAgICAgIFtzbS1icmVha3BvaW50XT1cIml0ZW0uc21CcmVha3BvaW50XCJcbiAgICAgICAgW21kLWJyZWFrcG9pbnRdPVwiaXRlbS5tZEJyZWFrcG9pbnRcIlxuICAgICAgICBbbGctYnJlYWtwb2ludF09XCJpdGVtLmxnQnJlYWtwb2ludFwiXG4gICAgICAgIChsb2FkKT1cIm9uTG9hZCgkZXZlbnQpXCIvPlxuPC9kaXY+XG5cbiJdfQ==