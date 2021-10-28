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
    i0.ɵɵelementStart(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disable", ctx_r1.disableZoomOut);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.config.controls.zoomOut.icon);
} }
function LightboxZoomComponent_div_0_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("tap", function LightboxZoomComponent_div_0_button_2_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.onResetZoom(); });
    i0.ɵɵelementStart(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disable", ctx_r2.disableResetZoom);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.config.controls.resetZoom.icon);
} }
function LightboxZoomComponent_div_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("tap", function LightboxZoomComponent_div_0_button_3_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.onFeetToWidth(); });
    i0.ɵɵelementStart(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disable", ctx_r3.disableFeetToWidth);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.config.controls.feetToWidth.icon);
} }
function LightboxZoomComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("tap", function LightboxZoomComponent_div_0_button_4_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onZoomIn(); });
    i0.ɵɵelementStart(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disable", ctx_r4.disableZoomIn);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.config.controls.zoomIn.icon);
} }
function LightboxZoomComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LightboxZoomComponent_div_0_button_1_Template, 3, 2, "button", 1);
    i0.ɵɵtemplate(2, LightboxZoomComponent_div_0_button_2_Template, 3, 2, "button", 2);
    i0.ɵɵtemplate(3, LightboxZoomComponent_div_0_button_3_Template, 3, 2, "button", 3);
    i0.ɵɵtemplate(4, LightboxZoomComponent_div_0_button_4_Template, 3, 2, "button", 4);
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
    } }, inputs: { disableZoomIn: "disableZoomIn", disableZoomOut: "disableZoomOut", disableResetZoom: "disableResetZoom", disableFeetToWidth: "disableFeetToWidth" }, outputs: { zoomInEvent: "zoomInEvent", zoomOutEvent: "zoomOutEvent", resetZoomEvent: "resetZoomEvent", feetToWidthEvent: "feetToWidthEvent" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Zoom out", "aria-label", "Zoom out", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Reset zoom", "aria-label", "Reset zoom", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Feet to width", "aria-label", "Feet to width", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Zoom in", "aria-label", "Zoom in", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Zoom out", "aria-label", "Zoom out", 3, "disable", "tap"], [1, "material-icons"], ["role", "button", "lightbox-icon-button", "", "title", "Reset zoom", "aria-label", "Reset zoom", 3, "disable", "tap"], ["role", "button", "lightbox-icon-button", "", "title", "Feet to width", "aria-label", "Feet to width", 3, "disable", "tap"], ["role", "button", "lightbox-icon-button", "", "title", "Zoom in", "aria-label", "Zoom in", 3, "disable", "tap"]], template: function LightboxZoomComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, LightboxZoomComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.config.controls.zoom.disable);
    } }, directives: [i2.NgIf, i3.LightboxButtonComponent], styles: ["[_nghost-%COMP%]{color:#fff;height:64px;display:flex;align-items:center;align-content:center;justify-content:center;position:absolute;width:100%;z-index:2;pointer-events:none;overflow:hidden;bottom:12px}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{pointer-events:auto;padding:3px;height:40px;width:auto;border-radius:3px;display:flex}[_nghost-%COMP%] > div[_ngcontent-%COMP%], [_nghost-%COMP%]   button[_ngcontent-%COMP%]{background-color:#000}"], data: { animation: [ZoomAnimations.visibilityAnimation] } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtem9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlnaHRib3gvY29tcG9uZW50cy9saWdodGJveC16b29tL2xpZ2h0Ym94LXpvb20uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtem9vbS9saWdodGJveC16b29tLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDOzs7Ozs7O0lDSDNGLGlDQUEwSztJQUEzRCw4TEFBbUI7SUFDOUgsK0JBQTZCO0lBQUEsWUFBZ0M7SUFBQSxpQkFBTztJQUN4RSxpQkFBUzs7O0lBRnNELCtDQUEwQjtJQUN4RCxlQUFnQztJQUFoQyx5REFBZ0M7Ozs7SUFFakUsaUNBQW9MO0lBQWpFLGdNQUFxQjtJQUNwSSwrQkFBNkI7SUFBQSxZQUFrQztJQUFBLGlCQUFPO0lBQzFFLGlCQUFTOzs7SUFGd0QsaURBQTRCO0lBQzVELGVBQWtDO0lBQWxDLDJEQUFrQzs7OztJQUVuRSxpQ0FBZ007SUFBekUsbU1BQXVCO0lBQzFJLCtCQUE2QjtJQUFBLFlBQW9DO0lBQUEsaUJBQU87SUFDNUUsaUJBQVM7OztJQUYwRCxtREFBOEI7SUFDaEUsZUFBb0M7SUFBcEMsNkRBQW9D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Q0wsQ0FBQzs7MEZBbEdRLHFCQUFxQjswREFBckIscUJBQXFCOzhKQUFyQixpREFFWCw4SEFGVyxnREFFWjs7OztRQ25CRCxzRUFhTTs7UUFiQSx3REFBbUM7c2hCRFV6QixDQUFFLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBRTt1RkFPekMscUJBQXFCO2NBWGpDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzNDLFVBQVUsRUFBRSxDQUFFLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBRTtnQkFDbEQsSUFBSSxFQUFFO29CQUNGLG1CQUFtQixFQUFFLGtDQUFrQztvQkFDdkQseUJBQXlCLEVBQUUsK0NBQStDO29CQUMxRSx3QkFBd0IsRUFBRSw4Q0FBOEM7aUJBQzNFO2FBQ0o7K0VBR29CLFdBQVc7a0JBQTNCLE1BQU07WUFFVSxZQUFZO2tCQUE1QixNQUFNO1lBRVUsY0FBYztrQkFBOUIsTUFBTTtZQUVVLGdCQUFnQjtrQkFBaEMsTUFBTTtZQUVTLGFBQWE7a0JBQTVCLEtBQUs7WUFFVSxjQUFjO2tCQUE3QixLQUFLO1lBRVUsZ0JBQWdCO2tCQUEvQixLQUFLO1lBRVUsa0JBQWtCO2tCQUFqQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGlnaHRib3gtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFpvb21BbmltYXRpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3pvb20vYW5pbWF0aW9ucy96b29tLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgWm9vbVZpc2liaWxpdHlBbmltYXRvciB9IGZyb20gJy4uLy4uL21vZGVscy96b29tL2FuaW1hdGlvbnMvem9vbS12aXNpYmlsaXR5LWFuaW1hdG9yJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWdodGJveC16b29tJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2xpZ2h0Ym94LXpvb20uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydsaWdodGJveC16b29tLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgYW5pbWF0aW9uczogWyBab29tQW5pbWF0aW9ucy52aXNpYmlsaXR5QW5pbWF0aW9uIF0sXG4gICAgaG9zdDoge1xuICAgICAgICAnW0B6b29tVmlzaWJpbGl0eV0nOiAnem9vbVZpc2liaWxpdHlBbmltYXRvci5hbmltYXRpb24nLFxuICAgICAgICAnKEB6b29tVmlzaWJpbGl0eS5zdGFydCknOiAnem9vbVZpc2liaWxpdHlBbmltYXRvci5hbmltYXRpb25TdGFydCgkZXZlbnQpJyxcbiAgICAgICAgJyhAem9vbVZpc2liaWxpdHkuZG9uZSknOiAnem9vbVZpc2liaWxpdHlBbmltYXRvci5hbmltYXRpb25Eb25lKCRldmVudCknXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBMaWdodGJveFpvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQE91dHB1dCgpIHB1YmxpYyB6b29tSW5FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgem9vbU91dEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIHB1YmxpYyByZXNldFpvb21FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgZmVldFRvV2lkdGhFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlWm9vbUluOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVab29tT3V0OiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVSZXNldFpvb206IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZUZlZXRUb1dpZHRoOiBib29sZWFuO1xuXG4gICAgcHVibGljIHpvb21WaXNpYmlsaXR5QW5pbWF0b3I6IFpvb21WaXNpYmlsaXR5QW5pbWF0b3I7XG5cbiAgICBwcml2YXRlIF9zdGF0ZTogJ29wZW5lZCcgfCAnY2xvc2VkJyA9ICdjbG9zZWQnO1xuXG4gICAgcHVibGljIGdldCBjb25maWcoKTogTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2xpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2U6IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuem9vbVZpc2liaWxpdHlBbmltYXRvciA9IG5ldyBab29tVmlzaWJpbGl0eUFuaW1hdG9yKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcuY29udHJvbHMuem9vbS5kaXNhYmxlICYmIHRoaXMuX3N0YXRlICE9PSAnY2xvc2VkJykge1xuXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9ICdjbG9zZWQnO1xuICAgICAgICAgICAgdGhpcy56b29tVmlzaWJpbGl0eUFuaW1hdG9yLmhpZGUodGhpcy5jb25maWcuYW5pbWF0aW9ucy50b29sYmFySGlkZS5kdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmNvbnRyb2xzLnpvb20uZGlzYWJsZSAmJiB0aGlzLl9zdGF0ZSAhPT0gJ29wZW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAnb3BlbmVkJztcbiAgICAgICAgICAgIHRoaXMuem9vbVZpc2liaWxpdHlBbmltYXRvci5zaG93KHRoaXMuY29uZmlnLmFuaW1hdGlvbnMuem9vbVNob3cuZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmNvbnRyb2xzLnpvb20uZGlzYWJsZSkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09ICdvcGVuZWQnKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25ab29tSW4oKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVab29tSW4pIHtcblxuICAgICAgICAgICAgdGhpcy56b29tSW5FdmVudC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25ab29tT3V0KCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlWm9vbU91dCkge1xuXG4gICAgICAgICAgICB0aGlzLnpvb21PdXRFdmVudC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25SZXNldFpvb20oKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVSZXNldFpvb20pIHtcblxuICAgICAgICAgICAgdGhpcy5yZXNldFpvb21FdmVudC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25GZWV0VG9XaWR0aCgpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZUZlZXRUb1dpZHRoKSB7XG5cbiAgICAgICAgICAgIHRoaXMuZmVldFRvV2lkdGhFdmVudC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiIWNvbmZpZy5jb250cm9scy56b29tLmRpc2FibGVcIj5cclxuICAgIDxidXR0b24gcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwiIWNvbmZpZy5jb250cm9scy56b29tT3V0LmRpc2FibGVcIiBbZGlzYWJsZV09XCJkaXNhYmxlWm9vbU91dFwiIGxpZ2h0Ym94LWljb24tYnV0dG9uICh0YXApPVwib25ab29tT3V0KClcIiB0aXRsZT1cIlpvb20gb3V0XCIgYXJpYS1sYWJlbD1cIlpvb20gb3V0XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7Y29uZmlnLmNvbnRyb2xzLnpvb21PdXQuaWNvbn19PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIiAqbmdJZj1cIiFjb25maWcuY29udHJvbHMucmVzZXRab29tLmRpc2FibGVcIiBbZGlzYWJsZV09XCJkaXNhYmxlUmVzZXRab29tXCIgbGlnaHRib3gtaWNvbi1idXR0b24gKHRhcCk9XCJvblJlc2V0Wm9vbSgpXCIgdGl0bGU9XCJSZXNldCB6b29tXCIgYXJpYS1sYWJlbD1cIlJlc2V0IHpvb21cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+e3tjb25maWcuY29udHJvbHMucmVzZXRab29tLmljb259fTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgKm5nSWY9XCIhY29uZmlnLmNvbnRyb2xzLmZlZXRUb1dpZHRoLmRpc2FibGVcIiBbZGlzYWJsZV09XCJkaXNhYmxlRmVldFRvV2lkdGhcIiBsaWdodGJveC1pY29uLWJ1dHRvbiAodGFwKT1cIm9uRmVldFRvV2lkdGgoKVwiIHRpdGxlPVwiRmVldCB0byB3aWR0aFwiIGFyaWEtbGFiZWw9XCJGZWV0IHRvIHdpZHRoXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7Y29uZmlnLmNvbnRyb2xzLmZlZXRUb1dpZHRoLmljb259fTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgKm5nSWY9XCIhY29uZmlnLmNvbnRyb2xzLnpvb21Jbi5kaXNhYmxlXCIgW2Rpc2FibGVdPVwiZGlzYWJsZVpvb21JblwiIGxpZ2h0Ym94LWljb24tYnV0dG9uICh0YXApPVwib25ab29tSW4oKVwiIHRpdGxlPVwiWm9vbSBpblwiIGFyaWEtbGFiZWw9XCJab29tIGluXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7Y29uZmlnLmNvbnRyb2xzLnpvb21Jbi5pY29ufX08L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuPC9kaXY+XHJcblxyXG4iXX0=