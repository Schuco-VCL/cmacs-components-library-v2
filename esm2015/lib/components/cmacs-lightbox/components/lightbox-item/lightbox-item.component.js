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
}
LightboxItemComponent.ɵfac = function LightboxItemComponent_Factory(t) { return new (t || LightboxItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LightboxConfigurationService)); };
LightboxItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LightboxItemComponent, selectors: [["lightbox-item"]], viewQuery: function LightboxItemComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._img = _t.first);
    } }, inputs: { item: "item" }, outputs: { toggleEvent: "toggleEvent" }, decls: 3, vars: 11, consts: [[3, "tap"], ["lazy-loading", "", "draggable", "false", 3, "src", "xs-src", "sm-src", "md-src", "lg-src", "xl-src", "xs-breakpoint", "sm-breakpoint", "md-breakpoint", "lg-breakpoint", "load"], ["img", ""]], template: function LightboxItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("tap", function LightboxItemComponent_Template_div_tap_0_listener($event) { return ctx.onClick($event); })("@lightboxItemZoom.start", function LightboxItemComponent_Template_div_animation_lightboxItemZoom_start_0_listener($event) { return ctx.lightboxItemZoomAnimator.animationStart($event); })("@lightboxItemZoom.done", function LightboxItemComponent_Template_div_animation_lightboxItemZoom_done_0_listener($event) { return ctx.lightboxItemZoomAnimator.animationDone($event); });
        i0.ɵɵelementStart(1, "img", 1, 2);
        i0.ɵɵlistener("load", function LightboxItemComponent_Template_img_load_1_listener($event) { return ctx.onLoad($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("@lightboxItemZoom", ctx.lightboxItemZoomAnimator.animation);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("src", ctx.getDefaultSrc(), i0.ɵɵsanitizeUrl)("xs-src", ctx.item.xsSrc)("sm-src", ctx.item.smSrc)("md-src", ctx.item.mdSrc)("lg-src", ctx.item.lgSrc)("xl-src", ctx.item.xlSrc)("xs-breakpoint", ctx.item.xsBreakpoint)("sm-breakpoint", ctx.item.smBreakpoint)("md-breakpoint", ctx.item.mdBreakpoint)("lg-breakpoint", ctx.item.lgBreakpoint);
    } }, directives: [i2.LazyLoadingDirective], styles: ["[_nghost-%COMP%]{z-index:1;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;flex:0 0 100%;overflow:auto}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{pointer-events:auto;position:relative}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{position:relative;height:auto;width:100%}"], data: { animation: [LightboxItemAnimations.zoomAnimation] } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlnaHRib3gvY29tcG9uZW50cy9saWdodGJveC1pdGVtL2xpZ2h0Ym94LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtaXRlbS9saWdodGJveC1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFjLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSXRHLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUN4RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFL0MsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO0FBUS9CLE1BQU0sT0FBTyxxQkFBcUI7SUFvQjlCLFlBQ3FCLFdBQXVCLEVBQ2pDLE1BQW9DO1FBRDFCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQThCO1FBbEI5QixnQkFBVyxHQUFHLElBQUks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Q0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuSCxDQUFDO0lBRU8sa0JBQWtCO1FBQ3RCLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JHLENBQUM7OzBGQWhUUSxxQkFBcUI7MERBQXJCLHFCQUFxQjs7Ozs7O1FDaEJsQyw4QkFHK0U7UUFIMUUsaUdBQU8sbUJBQWUsSUFBQyxxSUFFSSxtREFBK0MsSUFGbkQsbUlBR0csa0RBQThDLElBSGpEO1FBSTFCLGlDQVkrQjtRQUExQixtR0FBUSxrQkFBYyxJQUFDO1FBWjVCLGlCQVkrQjtRQUNqQyxpQkFBTTs7UUFoQkQsMEVBQXdEO1FBS3RELGVBQXVCO1FBQXZCLDJEQUF1QiwwQkFBQSwwQkFBQSwwQkFBQSwwQkFBQSwwQkFBQSx3Q0FBQSx3Q0FBQSx3Q0FBQSx3Q0FBQTtxYURRZCxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQzt1RkFFekMscUJBQXFCO2NBTmpDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzNDLFVBQVUsRUFBRSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQzthQUNyRDt3R0FHeUIsSUFBSTtrQkFBekIsS0FBSzttQkFBQyxNQUFNO1lBRUksV0FBVztrQkFBM0IsTUFBTTtZQWNtQixJQUFJO2tCQUE3QixTQUFTO21CQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2l0ZW0nO1xyXG5pbXBvcnQgeyBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGlnaHRib3gtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmlkZW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvdmlkZW8nO1xyXG5pbXBvcnQgeyBEcmFnUG9zaXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvZHJhZy1wb3NpdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBMaWdodGJveEl0ZW1BbmltYXRpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpZ2h0Ym94LWl0ZW0vYW5pbWF0aW9ucy9saWdodGJveC1pdGVtLWFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBMaWdodGJveEl0ZW1ab29tQW5pbWF0b3IgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGlnaHRib3gtaXRlbS9hbmltYXRpb25zL2xpZ2h0Ym94LWl0ZW0tem9vbS1hbmltYXRvcic7XHJcbmltcG9ydCB7IERpbWVuc2lvbnMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGltZW5zaW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuY29uc3QgWk9PTV9QRVJDRU5UID0gMTA7XHJcbmNvbnN0IFpPT01fTUFYX0FGVEVSX1dJRFRIID0gMztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsaWdodGJveC1pdGVtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnbGlnaHRib3gtaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnbGlnaHRib3gtaXRlbS5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgYW5pbWF0aW9uczogW0xpZ2h0Ym94SXRlbUFuaW1hdGlvbnMuem9vbUFuaW1hdGlvbl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpZ2h0Ym94SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQElucHV0KCdpdGVtJykgcHVibGljIGl0ZW06IEl0ZW07XHJcblxyXG4gICAgQE91dHB1dCgpIHB1YmxpYyB0b2dnbGVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBwdWJsaWMgbGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yOiBMaWdodGJveEl0ZW1ab29tQW5pbWF0b3I7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ1Bvc2l0aW9uOiBEcmFnUG9zaXRpb247XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF96b29tTWluOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfem9vbU1heDogbnVtYmVyID0gMTAwICsgWk9PTV9NQVhfQUZURVJfV0lEVEggKiBaT09NX1BFUkNFTlQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfY3VycmVudFpvb206IG51bWJlcjtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdpbWcnKSBwcml2YXRlIF9pbWc6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwdWJsaWMgY29uZmlnOiBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxpZ2h0Ym94SXRlbVpvb21BbmltYXRvciA9IG5ldyBMaWdodGJveEl0ZW1ab29tQW5pbWF0b3IoKTtcclxuICAgICAgICB0aGlzLml0ZW0uaXNWaWRlbyA9IHRoaXMuaXRlbSBpbnN0YW5jZW9mIFZpZGVvO1xyXG4gICAgICAgIHRoaXMubGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yLmFuaW1hdGlvbiA9IHsgdmFsdWU6ICdzdGF0ZTEnIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW4oY29udGFpbmVyRGltZW5zaW9uczogRGltZW5zaW9ucywgc3RhcnRDYj86ICgpID0+IHZvaWQsIGRvbmVDYj86ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbS5kaW1lbnNpb25zKSB7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IDEwMCAtIFpPT01fUEVSQ0VOVDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChjb250YWluZXJEaW1lbnNpb25zLndpZHRoICogKHdpZHRoIC8gMTAwKSAvIHRoaXMuaXRlbS5kaW1lbnNpb25zLnJhdGlvID4gY29udGFpbmVyRGltZW5zaW9ucy5oZWlnaHQgKiA5IC8gMTApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aCAtPSBaT09NX1BFUkNFTlQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3pvb21NaW4gPSB3aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFpvb20gPSB3aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5saWdodGJveEl0ZW1ab29tQW5pbWF0b3Iub3JpZ2luKHRoaXMuaXRlbS5kaW1lbnNpb25zLCB0aGlzLml0ZW0ucG9zaXRpb24sIHRoaXMuX2dldENvbnRhaW5lckRpbWVuc2lvbnMoKSwgc3RhcnRDYiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRab29tKHRoaXMuY29uZmlnLmFuaW1hdGlvbnMuaXRlbU9wZW4uZHVyYXRpb24sIGNvbnRhaW5lckRpbWVuc2lvbnMsIG51bGwsIGRvbmVDYik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhcnRDYikge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXJ0Q2IoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRvbmVDYikge1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmVDYigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldFpvb20oZHVyYXRpb246IG51bWJlciwgY29udGFpbmVyRGltZW5zaW9ucz86IERpbWVuc2lvbnMsIHN0YXJ0Q2I/OiAoKSA9PiB2b2lkLCBkb25lQ2I/OiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLml0ZW0uZGltZW5zaW9ucykge1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lckRpbWVuc2lvbnMpIHtcclxuICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IDEwMCAtIFpPT01fUEVSQ0VOVDtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoY29udGFpbmVyRGltZW5zaW9ucy53aWR0aCAqICh3aWR0aCAvIDEwMCkgLyB0aGlzLml0ZW0uZGltZW5zaW9ucy5yYXRpbyA+IGNvbnRhaW5lckRpbWVuc2lvbnMuaGVpZ2h0ICogOSAvIDEwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIC09IFpPT01fUEVSQ0VOVDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl96b29tTWluID0gd2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Wm9vbSA9IHdpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yLnpvb20od2lkdGgsIHRoaXMuaXRlbS5kaW1lbnNpb25zLCB0aGlzLl9nZXRJdGVtRGltZW5zaW9ucygpLCBjb250YWluZXJEaW1lbnNpb25zLCBkdXJhdGlvbiwgc3RhcnRDYiwgZG9uZUNiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IDEwMCAtIFpPT01fUEVSQ0VOVDtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5fZ2V0Q29udGFpbmVyRGltZW5zaW9ucygpLndpZHRoICogKHdpZHRoIC8gMTAwKSAvIHRoaXMuaXRlbS5kaW1lbnNpb25zLnJhdGlvID4gdGhpcy5fZ2V0Q29udGFpbmVyRGltZW5zaW9ucygpLmhlaWdodCAqIDkgLyAxMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCAtPSBaT09NX1BFUkNFTlQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fem9vbU1pbiA9IHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFpvb20gPSB3aWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpZ2h0Ym94SXRlbVpvb21BbmltYXRvci56b29tKHdpZHRoLCB0aGlzLml0ZW0uZGltZW5zaW9ucywgdGhpcy5fZ2V0SXRlbURpbWVuc2lvbnMoKSwgdGhpcy5fZ2V0Q29udGFpbmVyRGltZW5zaW9ucygpLCBkdXJhdGlvbiwgc3RhcnRDYiwgZG9uZUNiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhcnRDYikge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXJ0Q2IoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRvbmVDYikge1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmVDYigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5pdGVtLiRkaW1lbnNpb25zLnBpcGUoXHJcbiAgICAgICAgICAgIGZpbHRlcigodmFsdWUpID0+IHZhbHVlICE9PSB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICBmaXJzdCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRab29tKDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHpvb21JbihzdGFydENiPzogKCkgPT4gdm9pZCwgZG9uZUNiPzogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pdGVtLmRpbWVuc2lvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5saWdodGJveEl0ZW1ab29tQW5pbWF0b3Iuem9vbShcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRab29tICsgWk9PTV9QRVJDRU5ULFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtLmRpbWVuc2lvbnMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRJdGVtRGltZW5zaW9ucygpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q29udGFpbmVyRGltZW5zaW9ucygpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuYW5pbWF0aW9ucy56b29tSW4uZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICBzdGFydENiLFxyXG4gICAgICAgICAgICAgICAgZG9uZUNiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRab29tICs9IFpPT01fUEVSQ0VOVDtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXJ0Q2IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydENiKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkb25lQ2IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkb25lQ2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgem9vbU91dChzdGFydENiPzogKCkgPT4gdm9pZCwgZG9uZUNiPzogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pdGVtLmRpbWVuc2lvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5saWdodGJveEl0ZW1ab29tQW5pbWF0b3Iuem9vbShcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRab29tIC0gWk9PTV9QRVJDRU5ULFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtLmRpbWVuc2lvbnMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRJdGVtRGltZW5zaW9ucygpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q29udGFpbmVyRGltZW5zaW9ucygpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuYW5pbWF0aW9ucy56b29tSW4uZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICBzdGFydENiLFxyXG4gICAgICAgICAgICAgICAgZG9uZUNiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRab29tIC09IFpPT01fUEVSQ0VOVDtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXJ0Q2IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydENiKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkb25lQ2IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkb25lQ2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmVldFRvV2lkdGgoc3RhcnRDYj86ICgpID0+IHZvaWQsIGRvbmVDYj86ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pdGVtLmRpbWVuc2lvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5saWdodGJveEl0ZW1ab29tQW5pbWF0b3Iuem9vbSgxMDAsIHRoaXMuaXRlbS5kaW1lbnNpb25zLCB0aGlzLl9nZXRJdGVtRGltZW5zaW9ucygpLCB0aGlzLl9nZXRDb250YWluZXJEaW1lbnNpb25zKCksIHRoaXMuY29uZmlnLmFuaW1hdGlvbnMuem9vbUluLmR1cmF0aW9uLCBzdGFydENiLCBkb25lQ2IpO1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50Wm9vbSA9IDEwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXJ0Q2IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydENiKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkb25lQ2IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkb25lQ2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DbGljayhldmVudDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8qaWYgKCF0aGlzLml0ZW0uaXNWaWRlbykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b2dnbGVFdmVudC5lbWl0KCk7XHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRmVldFRvV2lkdGgoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRab29tID09PSAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzWm9vbU1pbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFpvb20gPD0gdGhpcy5fem9vbU1pbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNab29tTWF4KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Wm9vbSA+PSB0aGlzLl96b29tTWF4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRyYWcoZXZlbnQ6IGFueSkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50Wm9vbSA9PT0gdGhpcy5fem9vbU1pbiB8fCAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoID49XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0ID49IHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnUG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFg6IGV2ZW50LmRlbHRhWCxcclxuICAgICAgICAgICAgICAgIHN0YXJ0WTogZXZlbnQuZGVsdGFZXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCA+PSB0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1Bvc2l0aW9uLmVuZFggPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1Bvc2l0aW9uLmVuZFggPSB0aGlzLmxpZ2h0Ym94SXRlbVpvb21BbmltYXRvci5hbmltYXRpb24ucGFyYW1zLm9mZnNldExlZnQgLSB0aGlzLl9kcmFnUG9zaXRpb24uc3RhcnRYICsgZXZlbnQuZGVsdGFYO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRYID4gKHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKSAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnUG9zaXRpb24uZW5kWCA9ICh0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAtIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRYIDwgLTEgKiAodGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpIC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRYID0gLTEgKiAodGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCA+PSB0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRZID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRZID0gdGhpcy5saWdodGJveEl0ZW1ab29tQW5pbWF0b3IuYW5pbWF0aW9uLnBhcmFtcy5vZmZzZXRUb3AgLSB0aGlzLl9kcmFnUG9zaXRpb24uc3RhcnRZICsgZXZlbnQuZGVsdGFZO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRZID4gKHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpIC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRZID0gKHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpIC8gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnUG9zaXRpb24uZW5kWSA8IC0xICogKHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpIC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdQb3NpdGlvbi5lbmRZID0gLTEgKiAodGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLmxlZnQgPSB0aGlzLl9kcmFnUG9zaXRpb24uZW5kWCArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUudG9wID0gdGhpcy5fZHJhZ1Bvc2l0aW9uLmVuZFkgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuaXNGaW5hbCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saWdodGJveEl0ZW1ab29tQW5pbWF0b3IuYW5pbWF0aW9uLnBhcmFtcy5vZmZzZXRMZWZ0ID0gdGhpcy5fZHJhZ1Bvc2l0aW9uLmVuZFg7XHJcbiAgICAgICAgICAgIHRoaXMubGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yLmFuaW1hdGlvbi5wYXJhbXMub2Zmc2V0VG9wID0gdGhpcy5fZHJhZ1Bvc2l0aW9uLmVuZFk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Mb2FkKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXRlbS5kaW1lbnNpb25zKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW0uZGltZW5zaW9ucyA9IG5ldyBEaW1lbnNpb25zKHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50Lm5hdHVyYWxXaWR0aCwgdGhpcy5faW1nLm5hdGl2ZUVsZW1lbnQubmF0dXJhbEhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREZWZhdWx0U3JjKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYodGhpcy5pdGVtLnNyYykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtLnNyYztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5pdGVtLnhzU3JjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW0ueHNTcmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaXRlbS5zbVNyYykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtLnNtU3JjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLml0ZW0ubWRTcmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5tZFNyYztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5pdGVtLmxnU3JjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW0ubGdTcmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaXRlbS54bFNyYykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtLnhsU3JjO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzaXplKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1pvb21NaW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0Wm9vbSgwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0Ym94SXRlbVpvb21BbmltYXRvci56b29tKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFpvb20sXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0uZGltZW5zaW9ucyxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dldEl0ZW1EaW1lbnNpb25zKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRDb250YWluZXJEaW1lbnNpb25zKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5hbmltYXRpb25zLnpvb21Jbi5kdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldENvbnRhaW5lckRpbWVuc2lvbnMoKTogRGltZW5zaW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEaW1lbnNpb25zKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0SXRlbURpbWVuc2lvbnMoKTogRGltZW5zaW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEaW1lbnNpb25zKHRoaXMuX2ltZy5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoLCB0aGlzLl9pbWcubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpO1xyXG4gICAgfVxyXG59XHJcbiIsIjwhLS1cbmRyYWdnYWJsZT1cInRydWVcIlxuKHBhbik9XCJvbkRyYWcoJGV2ZW50KVwiXG4tLT5cbjxkaXYgKHRhcCk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICBbQGxpZ2h0Ym94SXRlbVpvb21dPVwibGlnaHRib3hJdGVtWm9vbUFuaW1hdG9yLmFuaW1hdGlvblwiXG4gICAgIChAbGlnaHRib3hJdGVtWm9vbS5zdGFydCk9XCJsaWdodGJveEl0ZW1ab29tQW5pbWF0b3IuYW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiXG4gICAgIChAbGlnaHRib3hJdGVtWm9vbS5kb25lKT1cImxpZ2h0Ym94SXRlbVpvb21BbmltYXRvci5hbmltYXRpb25Eb25lKCRldmVudClcIj5cbiAgPGltZyAjaW1nIGxhenktbG9hZGluZ1xuICAgICAgIGRyYWdnYWJsZT1cImZhbHNlXCJcbiAgICAgICBbc3JjXT1cImdldERlZmF1bHRTcmMoKVwiXG4gICAgICAgW3hzLXNyY109XCJpdGVtLnhzU3JjXCJcbiAgICAgICBbc20tc3JjXT1cIml0ZW0uc21TcmNcIlxuICAgICAgIFttZC1zcmNdPVwiaXRlbS5tZFNyY1wiXG4gICAgICAgW2xnLXNyY109XCJpdGVtLmxnU3JjXCJcbiAgICAgICBbeGwtc3JjXT1cIml0ZW0ueGxTcmNcIlxuICAgICAgIFt4cy1icmVha3BvaW50XT1cIml0ZW0ueHNCcmVha3BvaW50XCJcbiAgICAgICBbc20tYnJlYWtwb2ludF09XCJpdGVtLnNtQnJlYWtwb2ludFwiXG4gICAgICAgW21kLWJyZWFrcG9pbnRdPVwiaXRlbS5tZEJyZWFrcG9pbnRcIlxuICAgICAgIFtsZy1icmVha3BvaW50XT1cIml0ZW0ubGdCcmVha3BvaW50XCJcbiAgICAgICAobG9hZCk9XCJvbkxvYWQoJGV2ZW50KVwiIC8+XG48L2Rpdj5cblxuIl19