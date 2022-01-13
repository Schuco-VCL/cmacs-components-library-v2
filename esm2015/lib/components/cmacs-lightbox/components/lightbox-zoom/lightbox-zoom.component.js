import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ZoomAnimations } from '../../models/zoom/animations/zoom-animations';
import { ZoomVisibilityAnimator } from '../../models/zoom/animations/zoom-visibility-animator';
import * as i0 from "@angular/core";
import * as i1 from "../../services/lightbox-configuration.service";
import * as i2 from "@angular/common";
import * as i3 from "../lightbox-button/lightbox-button.component";
function LightboxZoomComponent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("tap", function LightboxZoomComponent_div_0_button_1_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.onZoomOut(); });
    i0.ɵɵelement(1, "span", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disable", ctx_r1.disableZoomOut);
} }
function LightboxZoomComponent_div_0_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("tap", function LightboxZoomComponent_div_0_button_2_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.onResetZoom(); });
    i0.ɵɵelementStart(1, "span", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disable", ctx_r2.disableResetZoom);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.config.controls.zoomOut.icon);
} }
function LightboxZoomComponent_div_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("tap", function LightboxZoomComponent_div_0_button_3_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.onFeetToWidth(); });
    i0.ɵɵelementStart(1, "span", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disable", ctx_r3.disableFeetToWidth);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.config.controls.zoomIn.icon);
} }
function LightboxZoomComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("tap", function LightboxZoomComponent_div_0_button_4_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onZoomIn(); });
    i0.ɵɵelement(1, "span", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disable", ctx_r4.disableZoomIn);
} }
function LightboxZoomComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LightboxZoomComponent_div_0_button_1_Template, 2, 1, "button", 1);
    i0.ɵɵtemplate(2, LightboxZoomComponent_div_0_button_2_Template, 3, 2, "button", 2);
    i0.ɵɵtemplate(3, LightboxZoomComponent_div_0_button_3_Template, 3, 2, "button", 3);
    i0.ɵɵtemplate(4, LightboxZoomComponent_div_0_button_4_Template, 2, 1, "button", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.config.controls.zoomOut.disable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.config.controls.resetZoom.disable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.config.controls.feetToWidth.disable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.config.controls.zoomIn.disable);
} }
export class LightboxZoomComponent {
    constructor(_lightboxConfigurationService) {
        this._lightboxConfigurationService = _lightboxConfigurationService;
        this.zoomInEvent = new EventEmitter();
        this.zoomOutEvent = new EventEmitter();
        this.resetZoomEvent = new EventEmitter();
        this.feetToWidthEvent = new EventEmitter();
        this._state = 'closed';
    }
    get config() {
        return this._lightboxConfigurationService;
    }
    ngOnInit() {
        this.zoomVisibilityAnimator = new ZoomVisibilityAnimator();
    }
    close() {
        if (!this.config.controls.zoom.disable && this._state !== 'closed') {
            this._state = 'closed';
            this.zoomVisibilityAnimator.hide(this.config.animations.toolbarHide.duration);
        }
    }
    open() {
        if (!this.config.controls.zoom.disable && this._state !== 'opened') {
            this._state = 'opened';
            this.zoomVisibilityAnimator.show(this.config.animations.zoomShow.duration);
        }
    }
    toggle() {
        if (!this.config.controls.zoom.disable) {
            if (this._state === 'opened') {
                this.close();
            }
            else {
                this.open();
            }
        }
    }
    onZoomIn() {
        if (!this.disableZoomIn) {
            this.zoomInEvent.emit();
        }
    }
    onZoomOut() {
        if (!this.disableZoomOut) {
            this.zoomOutEvent.emit();
        }
    }
    onResetZoom() {
        if (!this.disableResetZoom) {
            this.resetZoomEvent.emit();
        }
    }
    onFeetToWidth() {
        if (!this.disableFeetToWidth) {
            this.feetToWidthEvent.emit();
        }
    }
}
LightboxZoomComponent.ɵfac = function LightboxZoomComponent_Factory(t) { return new (t || LightboxZoomComponent)(i0.ɵɵdirectiveInject(i1.LightboxConfigurationService)); };
LightboxZoomComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LightboxZoomComponent, selectors: [["lightbox-zoom"]], hostVars: 1, hostBindings: function LightboxZoomComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵsyntheticHostListener("@zoomVisibility.start", function LightboxZoomComponent_animation_zoomVisibility_start_HostBindingHandler($event) { return ctx.zoomVisibilityAnimator.animationStart($event); })("@zoomVisibility.done", function LightboxZoomComponent_animation_zoomVisibility_done_HostBindingHandler($event) { return ctx.zoomVisibilityAnimator.animationDone($event); });
    } if (rf & 2) {
        i0.ɵɵsyntheticHostProperty("@zoomVisibility", ctx.zoomVisibilityAnimator.animation);
    } }, inputs: { disableZoomIn: "disableZoomIn", disableZoomOut: "disableZoomOut", disableResetZoom: "disableResetZoom", disableFeetToWidth: "disableFeetToWidth" }, outputs: { zoomInEvent: "zoomInEvent", zoomOutEvent: "zoomOutEvent", resetZoomEvent: "resetZoomEvent", feetToWidthEvent: "feetToWidthEvent" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Zoom out", "aria-label", "Zoom out", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Reset zoom", "aria-label", "Reset zoom", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Feet to width", "aria-label", "Feet to width", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Zoom in", "aria-label", "Zoom in", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Zoom out", "aria-label", "Zoom out", 3, "disable", "tap"], [1, "material-icons", "iconUILarge-Zoom-out"], ["role", "button", "lightbox-icon-button", "", "title", "Reset zoom", "aria-label", "Reset zoom", 3, "disable", "tap"], [1, "material-icons"], ["role", "button", "lightbox-icon-button", "", "title", "Feet to width", "aria-label", "Feet to width", 3, "disable", "tap"], ["role", "button", "lightbox-icon-button", "", "title", "Zoom in", "aria-label", "Zoom in", 3, "disable", "tap"], [1, "material-icons", "iconUILarge-Zoom-in"]], template: function LightboxZoomComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, LightboxZoomComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.config.controls.zoom.disable);
    } }, directives: [i2.NgIf, i3.LightboxButtonComponent], styles: ["[_nghost-%COMP%]{color:#fff;height:64px;display:flex;align-items:center;align-content:center;justify-content:center;position:absolute;width:100%;z-index:2;pointer-events:none;overflow:hidden;bottom:12px}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{pointer-events:auto;padding:5px;height:35px;width:auto;border-radius:3px;display:flex}[_nghost-%COMP%] > div[_ngcontent-%COMP%], [_nghost-%COMP%]   button[_ngcontent-%COMP%]{background-color:#0d1e3b}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin:0 6px}.lightbox-icon-button[_ngcontent-%COMP%]:not(.disable):hover   .material-icons[_ngcontent-%COMP%]{color:#fff}"], data: { animation: [ZoomAnimations.visibilityAnimation] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxZoomComponent, [{
        type: Component,
        args: [{
                selector: 'lightbox-zoom',
                templateUrl: 'lightbox-zoom.component.html',
                styleUrls: ['lightbox-zoom.component.scss'],
                animations: [ZoomAnimations.visibilityAnimation],
                host: {
                    '[@zoomVisibility]': 'zoomVisibilityAnimator.animation',
                    '(@zoomVisibility.start)': 'zoomVisibilityAnimator.animationStart($event)',
                    '(@zoomVisibility.done)': 'zoomVisibilityAnimator.animationDone($event)'
                }
            }]
    }], function () { return [{ type: i1.LightboxConfigurationService }]; }, { zoomInEvent: [{
            type: Output
        }], zoomOutEvent: [{
            type: Output
        }], resetZoomEvent: [{
            type: Output
        }], feetToWidthEvent: [{
            type: Output
        }], disableZoomIn: [{
            type: Input
        }], disableZoomOut: [{
            type: Input
        }], disableResetZoom: [{
            type: Input
        }], disableFeetToWidth: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtem9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlnaHRib3gvY29tcG9uZW50cy9saWdodGJveC16b29tL2xpZ2h0Ym94LXpvb20uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtem9vbS9saWdodGJveC16b29tLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDOzs7Ozs7O0lDSDNGLGlDQUEwSztJQUEzRCw4TEFBbUI7SUFDaEksMEJBQWtHO0lBQ3BHLGlCQUFTOzs7SUFGc0QsK0NBQTBCOzs7O0lBR3pGLGlDQUFvTDtJQUFqRSxnTUFBcUI7SUFDdEksK0JBQTZCO0lBQUEsWUFBZ0M7SUFBQSxpQkFBTztJQUN0RSxpQkFBUzs7O0lBRndELGlEQUE0QjtJQUM5RCxlQUFnQztJQUFoQyx5REFBZ0M7Ozs7SUFFL0QsaUNBQWdNO0lBQXpFLG1NQUF1QjtJQUM1SSwrQkFBNkI7SUFBQSxZQUErQjtJQUFBLGlCQUFPO0lBQ3JFLGlCQUFTOzs7SUFGMEQsbURBQThCO0lBQ2xFLGVBQStCO0lBQS9CLHdEQUErQjs7OztJQUU5RCxrQ0FBcUs7SUFBeEQsZ01BQWtCO0lBQzdILDJCQUFtRztJQUNyRyxpQkFBUzs7O0lBRnFELDhDQUF5Qjs7O0lBVjNGLDJCQUEyQztJQUN2QyxrRkFFUztJQUNULGtGQUVTO0lBQ1Qsa0ZBRVM7SUFDVCxrRkFFUztJQUNiLGlCQUFNOzs7SUFacUIsZUFBc0M7SUFBdEMsOERBQXNDO0lBR3RDLGVBQXdDO0lBQXhDLGdFQUF3QztJQUd4QyxlQUEwQztJQUExQyxrRUFBMEM7SUFHMUMsZUFBcUM7SUFBckMsNkRBQXFDOztBRE9oRSxNQUFNLE9BQU8scUJBQXFCO0lBMkI5QixZQUNxQiw2QkFBMkQ7UUFBM0Qsa0NBQTZCLEdBQTdCLDZCQUE2QixDQUE4QjtRQTFCL0QsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVkvQyxXQUFNLEdBQXdCLFFBQVEsQ0FBQztJQVMzQyxDQUFDO0lBUEwsSUFBVyxNQUFNO1FBRWIsT0FBTyxJQUFJLENBQUMsNkJBQTZCLENBQUM7SUFDOUMsQ0FBQztJQU1NLFFBQVE7UUFFWCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFTSxLQUFLO1FBRVIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFFaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDdkIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDakY7SUFDTCxDQUFDO0lBRU0sSUFBSTtRQUVQLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBRWhFLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlFO0lBQ0wsQ0FBQztJQUVNLE1BQU07UUFFVCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVwQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO2dCQUUxQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDaEI7aUJBQU07Z0JBRUgsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2Y7U0FDSjtJQUNMLENBQUM7SUFFTSxRQUFRO1FBRVgsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFFckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFTSxTQUFTO1FBRVosSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFFdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFTSxXQUFXO1FBRWQsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUV4QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQUVNLGFBQWE7UUFFaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUUxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDaEM7SUFDTCxDQUFDOzswRkFsR1EscUJBQXFCOzBEQUFyQixxQkFBcUI7OEpBQXJCLGlEQUVYLDhIQUZXLGdEQUVaOzs7O1FDbkJELHNFQWFNOztRQWJBLHdEQUFtQztnc0JEVXpCLENBQUUsY0FBYyxDQUFDLG1CQUFtQixDQUFFO3VGQU96QyxxQkFBcUI7Y0FYakMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsVUFBVSxFQUFFLENBQUUsY0FBYyxDQUFDLG1CQUFtQixDQUFFO2dCQUNsRCxJQUFJLEVBQUU7b0JBQ0YsbUJBQW1CLEVBQUUsa0NBQWtDO29CQUN2RCx5QkFBeUIsRUFBRSwrQ0FBK0M7b0JBQzFFLHdCQUF3QixFQUFFLDhDQUE4QztpQkFDM0U7YUFDSjsrRUFHb0IsV0FBVztrQkFBM0IsTUFBTTtZQUVVLFlBQVk7a0JBQTVCLE1BQU07WUFFVSxjQUFjO2tCQUE5QixNQUFNO1lBRVUsZ0JBQWdCO2tCQUFoQyxNQUFNO1lBRVMsYUFBYTtrQkFBNUIsS0FBSztZQUVVLGNBQWM7a0JBQTdCLEtBQUs7WUFFVSxnQkFBZ0I7a0JBQS9CLEtBQUs7WUFFVSxrQkFBa0I7a0JBQWpDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saWdodGJveC1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgWm9vbUFuaW1hdGlvbnMgfSBmcm9tICcuLi8uLi9tb2RlbHMvem9vbS9hbmltYXRpb25zL3pvb20tYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBab29tVmlzaWJpbGl0eUFuaW1hdG9yIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3pvb20vYW5pbWF0aW9ucy96b29tLXZpc2liaWxpdHktYW5pbWF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpZ2h0Ym94LXpvb20nLFxuICAgIHRlbXBsYXRlVXJsOiAnbGlnaHRib3gtem9vbS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2xpZ2h0Ym94LXpvb20uY29tcG9uZW50LnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbIFpvb21BbmltYXRpb25zLnZpc2liaWxpdHlBbmltYXRpb24gXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbQHpvb21WaXNpYmlsaXR5XSc6ICd6b29tVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvbicsXG4gICAgICAgICcoQHpvb21WaXNpYmlsaXR5LnN0YXJ0KSc6ICd6b29tVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvblN0YXJ0KCRldmVudCknLFxuICAgICAgICAnKEB6b29tVmlzaWJpbGl0eS5kb25lKSc6ICd6b29tVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvbkRvbmUoJGV2ZW50KSdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIExpZ2h0Ym94Wm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAT3V0cHV0KCkgcHVibGljIHpvb21JbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIHB1YmxpYyB6b29tT3V0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgcHVibGljIHJlc2V0Wm9vbUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIHB1YmxpYyBmZWV0VG9XaWR0aEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVab29tSW46IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZVpvb21PdXQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZVJlc2V0Wm9vbTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlRmVldFRvV2lkdGg6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgem9vbVZpc2liaWxpdHlBbmltYXRvcjogWm9vbVZpc2liaWxpdHlBbmltYXRvcjtcblxuICAgIHByaXZhdGUgX3N0YXRlOiAnb3BlbmVkJyB8ICdjbG9zZWQnID0gJ2Nsb3NlZCc7XG5cbiAgICBwdWJsaWMgZ2V0IGNvbmZpZygpOiBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfbGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZTogTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy56b29tVmlzaWJpbGl0eUFuaW1hdG9yID0gbmV3IFpvb21WaXNpYmlsaXR5QW5pbWF0b3IoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jb250cm9scy56b29tLmRpc2FibGUgJiYgdGhpcy5fc3RhdGUgIT09ICdjbG9zZWQnKSB7XG5cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gJ2Nsb3NlZCc7XG4gICAgICAgICAgICB0aGlzLnpvb21WaXNpYmlsaXR5QW5pbWF0b3IuaGlkZSh0aGlzLmNvbmZpZy5hbmltYXRpb25zLnRvb2xiYXJIaWRlLmR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcuY29udHJvbHMuem9vbS5kaXNhYmxlICYmIHRoaXMuX3N0YXRlICE9PSAnb3BlbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9ICdvcGVuZWQnO1xuICAgICAgICAgICAgdGhpcy56b29tVmlzaWJpbGl0eUFuaW1hdG9yLnNob3codGhpcy5jb25maWcuYW5pbWF0aW9ucy56b29tU2hvdy5kdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcuY29udHJvbHMuem9vbS5kaXNhYmxlKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gJ29wZW5lZCcpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblpvb21JbigpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZVpvb21Jbikge1xuXG4gICAgICAgICAgICB0aGlzLnpvb21JbkV2ZW50LmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblpvb21PdXQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVab29tT3V0KSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9vbU91dEV2ZW50LmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblJlc2V0Wm9vbSgpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZVJlc2V0Wm9vbSkge1xuXG4gICAgICAgICAgICB0aGlzLnJlc2V0Wm9vbUV2ZW50LmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkZlZXRUb1dpZHRoKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlRmVldFRvV2lkdGgpIHtcblxuICAgICAgICAgICAgdGhpcy5mZWV0VG9XaWR0aEV2ZW50LmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCIhY29uZmlnLmNvbnRyb2xzLnpvb20uZGlzYWJsZVwiPlxyXG4gICAgPGJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgKm5nSWY9XCIhY29uZmlnLmNvbnRyb2xzLnpvb21PdXQuZGlzYWJsZVwiIFtkaXNhYmxlXT1cImRpc2FibGVab29tT3V0XCIgbGlnaHRib3gtaWNvbi1idXR0b24gKHRhcCk9XCJvblpvb21PdXQoKVwiIHRpdGxlPVwiWm9vbSBvdXRcIiBhcmlhLWxhYmVsPVwiWm9vbSBvdXRcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uVUlMYXJnZS1ab29tLW91dFwiPjwhLS17e2NvbmZpZy5jb250cm9scy5yZXNldFpvb20uaWNvbn19LS0+PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIiAqbmdJZj1cIiFjb25maWcuY29udHJvbHMucmVzZXRab29tLmRpc2FibGVcIiBbZGlzYWJsZV09XCJkaXNhYmxlUmVzZXRab29tXCIgbGlnaHRib3gtaWNvbi1idXR0b24gKHRhcCk9XCJvblJlc2V0Wm9vbSgpXCIgdGl0bGU9XCJSZXNldCB6b29tXCIgYXJpYS1sYWJlbD1cIlJlc2V0IHpvb21cIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7Y29uZmlnLmNvbnRyb2xzLnpvb21PdXQuaWNvbn19PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIiAqbmdJZj1cIiFjb25maWcuY29udHJvbHMuZmVldFRvV2lkdGguZGlzYWJsZVwiIFtkaXNhYmxlXT1cImRpc2FibGVGZWV0VG9XaWR0aFwiIGxpZ2h0Ym94LWljb24tYnV0dG9uICh0YXApPVwib25GZWV0VG9XaWR0aCgpXCIgdGl0bGU9XCJGZWV0IHRvIHdpZHRoXCIgYXJpYS1sYWJlbD1cIkZlZXQgdG8gd2lkdGhcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7Y29uZmlnLmNvbnRyb2xzLnpvb21Jbi5pY29ufX08L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwiIWNvbmZpZy5jb250cm9scy56b29tSW4uZGlzYWJsZVwiIFtkaXNhYmxlXT1cImRpc2FibGVab29tSW5cIiBsaWdodGJveC1pY29uLWJ1dHRvbiAodGFwKT1cIm9uWm9vbUluKClcIiB0aXRsZT1cIlpvb20gaW5cIiBhcmlhLWxhYmVsPVwiWm9vbSBpblwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25VSUxhcmdlLVpvb20taW5cIj48IS0te3tjb25maWcuY29udHJvbHMuZmVldFRvV2lkdGguaWNvbn19LS0+PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbjwvZGl2PlxyXG5cclxuIl19