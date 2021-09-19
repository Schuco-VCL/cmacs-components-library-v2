import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ToolbarAnimations } from '../../models/toolbar/animations/toolbar-animations';
import { ToolbarVisibilityAnimator } from '../../models/toolbar/animations/toolbar-visibility-animator';
import * as i0 from "@angular/core";
import * as i1 from "../../services/lightbox-configuration.service";
import * as i2 from "../lightbox-button/lightbox-button.component";
import * as i3 from "@angular/common";
function LightboxToolbarComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("tap", function LightboxToolbarComponent_button_8_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onFirst(); });
    i0.ɵɵelementStart(1, "span", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disable", ctx_r0.pagination.current === 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.config.controls.jumpToStart.icon);
} }
function LightboxToolbarComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("tap", function LightboxToolbarComponent_button_9_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onPrevious(); });
    i0.ɵɵelementStart(1, "span", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disable", ctx_r1.pagination.current === 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.config.controls.backward.icon);
} }
function LightboxToolbarComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", ctx_r2.pagination == null ? null : ctx_r2.pagination.current, " / ", ctx_r2.pagination == null ? null : ctx_r2.pagination.count, "");
} }
function LightboxToolbarComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("tap", function LightboxToolbarComponent_button_11_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onNext(); });
    i0.ɵɵelementStart(1, "span", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disable", ctx_r3.pagination.current === ctx_r3.pagination.count);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.config.controls.forward.icon);
} }
function LightboxToolbarComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("tap", function LightboxToolbarComponent_button_12_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onLast(); });
    i0.ɵɵelementStart(1, "span", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disable", ctx_r4.pagination.current === ctx_r4.pagination.count);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.config.controls.jumpToEnd.icon);
} }
function LightboxToolbarComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("tap", function LightboxToolbarComponent_button_14_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onThumbnailsToggle(); });
    i0.ɵɵelementStart(1, "span", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.config.controls.thumbnails.icon);
} }
export class LightboxToolbarComponent {
    constructor(_lightboxConfigurationService) {
        this._lightboxConfigurationService = _lightboxConfigurationService;
        this.nextEvent = new EventEmitter();
        this.previousEvent = new EventEmitter();
        this.firstEvent = new EventEmitter();
        this.lastEvent = new EventEmitter();
        this.closeEvent = new EventEmitter();
        this.thumbnailsToggleEvent = new EventEmitter();
        this._state = 'closed';
    }
    get config() {
        return this._lightboxConfigurationService;
    }
    ngOnInit() {
        this.toolbarVisibilityAnimator = new ToolbarVisibilityAnimator();
    }
    onNext() {
        this.nextEvent.emit();
    }
    onPrevious() {
        this.previousEvent.emit();
    }
    onFirst() {
        this.firstEvent.emit();
    }
    onLast() {
        this.lastEvent.emit();
    }
    onClose() {
        this.closeEvent.emit();
    }
    onThumbnailsToggle() {
        this.thumbnailsToggleEvent.emit();
    }
    open() {
        if (this._state !== 'opened') {
            this._state = 'opened';
            this.toolbarVisibilityAnimator.show(this.config.animations.toolbarShow.duration);
        }
    }
    close() {
        if (this._state !== 'closed') {
            this._state = 'closed';
            this.toolbarVisibilityAnimator.hide(this.config.animations.toolbarHide.duration);
        }
    }
    toggle() {
        if (this._state === 'opened') {
            this.close();
        }
        else {
            this.open();
        }
    }
}
LightboxToolbarComponent.ɵfac = function LightboxToolbarComponent_Factory(t) { return new (t || LightboxToolbarComponent)(i0.ɵɵdirectiveInject(i1.LightboxConfigurationService)); };
LightboxToolbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LightboxToolbarComponent, selectors: [["lightbox-toolbar"]], hostVars: 1, hostBindings: function LightboxToolbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵsyntheticHostListener("@toolbarVisibility.start", function LightboxToolbarComponent_animation_toolbarVisibility_start_HostBindingHandler($event) { return ctx.toolbarVisibilityAnimator.animationStart($event); })("@toolbarVisibility.done", function LightboxToolbarComponent_animation_toolbarVisibility_done_HostBindingHandler($event) { return ctx.toolbarVisibilityAnimator.animationDone($event); });
    } if (rf & 2) {
        i0.ɵɵsyntheticHostProperty("@toolbarVisibility", ctx.toolbarVisibilityAnimator.animation);
    } }, inputs: { title: "title", pagination: "pagination" }, outputs: { nextEvent: "nextEvent", previousEvent: "previousEvent", firstEvent: "firstEvent", lastEvent: "lastEvent", closeEvent: "closeEvent", thumbnailsToggleEvent: "thumbnailsToggleEvent" }, decls: 15, vars: 8, consts: [[1, "toolbar-container"], ["lightbox-icon-button", "", "title", "Close", 3, "tap"], [1, "material-icons"], [1, "toolbar-title"], [1, "nav-menu"], ["lightbox-icon-button", "", "title", "First", 3, "disable", "tap", 4, "ngIf"], ["lightbox-icon-button", "", "title", "Previous", 3, "disable", "tap", 4, "ngIf"], ["class", "nav-pagination", 4, "ngIf"], ["lightbox-icon-button", "", "title", "Next", 3, "disable", "tap", 4, "ngIf"], ["lightbox-icon-button", "", "title", "Last", 3, "disable", "tap", 4, "ngIf"], ["lightbox-icon-button", "", "title", "List", 3, "tap", 4, "ngIf"], ["lightbox-icon-button", "", "title", "First", 3, "disable", "tap"], ["lightbox-icon-button", "", "title", "Previous", 3, "disable", "tap"], [1, "nav-pagination"], ["lightbox-icon-button", "", "title", "Next", 3, "disable", "tap"], ["lightbox-icon-button", "", "title", "Last", 3, "disable", "tap"], ["lightbox-icon-button", "", "title", "List", 3, "tap"]], template: function LightboxToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵelementStart(2, "button", 1);
        i0.ɵɵlistener("tap", function LightboxToolbarComponent_Template_button_tap_2_listener() { return ctx.onClose(); });
        i0.ɵɵelementStart(3, "span", 2);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "span", 3);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 4);
        i0.ɵɵtemplate(8, LightboxToolbarComponent_button_8_Template, 3, 2, "button", 5);
        i0.ɵɵtemplate(9, LightboxToolbarComponent_button_9_Template, 3, 2, "button", 6);
        i0.ɵɵtemplate(10, LightboxToolbarComponent_span_10_Template, 2, 2, "span", 7);
        i0.ɵɵtemplate(11, LightboxToolbarComponent_button_11_Template, 3, 2, "button", 8);
        i0.ɵɵtemplate(12, LightboxToolbarComponent_button_12_Template, 3, 2, "button", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div");
        i0.ɵɵtemplate(14, LightboxToolbarComponent_button_14_Template, 3, 1, "button", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.config.controls.back.icon);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.config.controls.navigation.disable && !ctx.config.controls.jumpToStart.disable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.config.controls.navigation.disable && !ctx.config.controls.backward.disable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.config.controls.navigation.disable && !ctx.config.controls.itemIndex.disable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.config.controls.navigation.disable && !ctx.config.controls.forward.disable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.config.controls.navigation.disable && !ctx.config.controls.jumpToEnd.disable);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.config.controls.thumbnails.disable);
    } }, directives: [i2.LightboxButtonComponent, i3.NgIf], styles: ["[_nghost-%COMP%]{display:block;position:relative;overflow:hidden}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%]{background-color:#000;color:#fff;height:64px;display:flex;align-content:center;justify-content:space-between;position:absolute;z-index:3;bottom:0;width:100%}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{flex:1 1 0%;justify-content:flex-start;overflow:hidden;padding-left:12px}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]{flex:0 0 auto;padding:0 12px}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-pagination[_ngcontent-%COMP%]{margin:0 12px}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{flex:1 1 0%;justify-content:flex-end;padding-right:12px}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]{overflow:hidden;margin-left:12px;white-space:nowrap;text-overflow:ellipsis;max-width:calc(100% - 52px)}@media (max-width:479px){[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]{display:none}}@media (max-width:359px){[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{display:none}}"], data: { animation: [ToolbarAnimations.visibilityAnimation] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'lightbox-toolbar',
                templateUrl: 'lightbox-toolbar.component.html',
                styleUrls: ['lightbox-toolbar.component.scss'],
                animations: [ToolbarAnimations.visibilityAnimation],
                host: {
                    '[@toolbarVisibility]': 'toolbarVisibilityAnimator.animation',
                    '(@toolbarVisibility.start)': 'toolbarVisibilityAnimator.animationStart($event)',
                    '(@toolbarVisibility.done)': 'toolbarVisibilityAnimator.animationDone($event)'
                }
            }]
    }], function () { return [{ type: i1.LightboxConfigurationService }]; }, { nextEvent: [{
            type: Output
        }], previousEvent: [{
            type: Output
        }], firstEvent: [{
            type: Output
        }], lastEvent: [{
            type: Output
        }], closeEvent: [{
            type: Output
        }], thumbnailsToggleEvent: [{
            type: Output
        }], title: [{
            type: Input
        }], pagination: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlnaHRib3gvY29tcG9uZW50cy9saWdodGJveC10b29sYmFyL2xpZ2h0Ym94LXRvb2xiYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtdG9vbGJhci9saWdodGJveC10b29sYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkRBQTZELENBQUM7Ozs7Ozs7SUNJaEcsa0NBQW9MO0lBQWhDLHdMQUFpQjtJQUNqSywrQkFBNkI7SUFBQSxZQUFvQztJQUFBLGlCQUFPO0lBQzVFLGlCQUFTOzs7SUFGd0cseURBQWtDO0lBQ2xILGVBQW9DO0lBQXBDLDZEQUFvQzs7OztJQUVyRSxrQ0FBdUw7SUFBdEMsMkxBQW9CO0lBQ2pLLCtCQUE2QjtJQUFBLFlBQWlDO0lBQUEsaUJBQU87SUFDekUsaUJBQVM7OztJQUZxRyx5REFBa0M7SUFDL0csZUFBaUM7SUFBakMsMERBQWlDOzs7SUFFbEUsZ0NBQStHO0lBQUEsWUFBK0M7SUFBQSxpQkFBTzs7O0lBQXRELGVBQStDO0lBQS9DLDhKQUErQzs7OztJQUM5SixrQ0FBNkw7SUFBOUIsMkxBQWdCO0lBQzNL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eyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BhZ2luYXRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saWdodGJveC1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9vbGJhckFuaW1hdGlvbnMgfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9vbGJhci9hbmltYXRpb25zL3Rvb2xiYXItYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBUb29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rvb2xiYXIvYW5pbWF0aW9ucy90b29sYmFyLXZpc2liaWxpdHktYW5pbWF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpZ2h0Ym94LXRvb2xiYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnbGlnaHRib3gtdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2xpZ2h0Ym94LXRvb2xiYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbVG9vbGJhckFuaW1hdGlvbnMudmlzaWJpbGl0eUFuaW1hdGlvbl0sXG4gICAgaG9zdDoge1xuICAgICAgICAnW0B0b29sYmFyVmlzaWJpbGl0eV0nOiAndG9vbGJhclZpc2liaWxpdHlBbmltYXRvci5hbmltYXRpb24nLFxuICAgICAgICAnKEB0b29sYmFyVmlzaWJpbGl0eS5zdGFydCknOiAndG9vbGJhclZpc2liaWxpdHlBbmltYXRvci5hbmltYXRpb25TdGFydCgkZXZlbnQpJyxcbiAgICAgICAgJyhAdG9vbGJhclZpc2liaWxpdHkuZG9uZSknOiAndG9vbGJhclZpc2liaWxpdHlBbmltYXRvci5hbmltYXRpb25Eb25lKCRldmVudCknXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBMaWdodGJveFRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQE91dHB1dCgpIHB1YmxpYyBuZXh0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgcHVibGljIHByZXZpb3VzRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgcHVibGljIGZpcnN0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgcHVibGljIGxhc3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgdGh1bWJuYWlsc1RvZ2dsZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgcGFnaW5hdGlvbjogUGFnaW5hdGlvbjtcblxuICAgIHB1YmxpYyB0b29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yOiBUb29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yO1xuXG4gICAgcHJpdmF0ZSBfc3RhdGU6ICdvcGVuZWQnIHwgJ2Nsb3NlZCcgPSAnY2xvc2VkJztcblxuICAgIHB1YmxpYyBnZXQgY29uZmlnKCk6IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2Uge1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9saWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9saWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnRvb2xiYXJWaXNpYmlsaXR5QW5pbWF0b3IgPSBuZXcgVG9vbGJhclZpc2liaWxpdHlBbmltYXRvcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk5leHQoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5uZXh0RXZlbnQuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblByZXZpb3VzKCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMucHJldmlvdXNFdmVudC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRmlyc3QoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5maXJzdEV2ZW50LmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25MYXN0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMubGFzdEV2ZW50LmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbG9zZSgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmNsb3NlRXZlbnQuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRodW1ibmFpbHNUb2dnbGUoKSB7XG5cbiAgICAgICAgdGhpcy50aHVtYm5haWxzVG9nZ2xlRXZlbnQuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gJ29wZW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAnb3BlbmVkJztcbiAgICAgICAgICAgIHRoaXMudG9vbGJhclZpc2liaWxpdHlBbmltYXRvci5zaG93KHRoaXMuY29uZmlnLmFuaW1hdGlvbnMudG9vbGJhclNob3cuZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gJ2Nsb3NlZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAnY2xvc2VkJztcbiAgICAgICAgICAgIHRoaXMudG9vbGJhclZpc2liaWxpdHlBbmltYXRvci5oaWRlKHRoaXMuY29uZmlnLmFuaW1hdGlvbnMudG9vbGJhckhpZGUuZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09ICdvcGVuZWQnKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidG9vbGJhci1jb250YWluZXJcIj5cbiAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIGxpZ2h0Ym94LWljb24tYnV0dG9uICh0YXApPVwib25DbG9zZSgpXCIgdGl0bGU9XCJDbG9zZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7Y29uZmlnLmNvbnRyb2xzLmJhY2suaWNvbn19PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b29sYmFyLXRpdGxlXCI+e3t0aXRsZX19PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJuYXYtbWVudVwiPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWNvbmZpZy5jb250cm9scy5uYXZpZ2F0aW9uLmRpc2FibGUgJiYgIWNvbmZpZy5jb250cm9scy5qdW1wVG9TdGFydC5kaXNhYmxlXCIgbGlnaHRib3gtaWNvbi1idXR0b24gW2Rpc2FibGVdPVwicGFnaW5hdGlvbi5jdXJyZW50PT09MVwiICh0YXApPVwib25GaXJzdCgpXCIgdGl0bGU9XCJGaXJzdFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7Y29uZmlnLmNvbnRyb2xzLmp1bXBUb1N0YXJ0Lmljb259fTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCIhY29uZmlnLmNvbnRyb2xzLm5hdmlnYXRpb24uZGlzYWJsZSAmJiAhY29uZmlnLmNvbnRyb2xzLmJhY2t3YXJkLmRpc2FibGVcIiBsaWdodGJveC1pY29uLWJ1dHRvbiBbZGlzYWJsZV09XCJwYWdpbmF0aW9uLmN1cnJlbnQ9PT0xXCIgKHRhcCk9XCJvblByZXZpb3VzKClcIiB0aXRsZT1cIlByZXZpb3VzXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+e3tjb25maWcuY29udHJvbHMuYmFja3dhcmQuaWNvbn19PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29uZmlnLmNvbnRyb2xzLm5hdmlnYXRpb24uZGlzYWJsZSAmJiAhY29uZmlnLmNvbnRyb2xzLml0ZW1JbmRleC5kaXNhYmxlXCIgY2xhc3M9XCJuYXYtcGFnaW5hdGlvblwiPnt7cGFnaW5hdGlvbj8uY3VycmVudH19IC8ge3twYWdpbmF0aW9uPy5jb3VudH19PC9zcGFuPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWNvbmZpZy5jb250cm9scy5uYXZpZ2F0aW9uLmRpc2FibGUgJiYgIWNvbmZpZy5jb250cm9scy5mb3J3YXJkLmRpc2FibGVcIiBsaWdodGJveC1pY29uLWJ1dHRvbiBbZGlzYWJsZV09XCJwYWdpbmF0aW9uLmN1cnJlbnQ9PT1wYWdpbmF0aW9uLmNvdW50XCIgKHRhcCk9XCJvbk5leHQoKVwiIHRpdGxlPVwiTmV4dFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7Y29uZmlnLmNvbnRyb2xzLmZvcndhcmQuaWNvbn19PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFjb25maWcuY29udHJvbHMubmF2aWdhdGlvbi5kaXNhYmxlICYmICFjb25maWcuY29udHJvbHMuanVtcFRvRW5kLmRpc2FibGVcIiBsaWdodGJveC1pY29uLWJ1dHRvbiBbZGlzYWJsZV09XCJwYWdpbmF0aW9uLmN1cnJlbnQ9PT1wYWdpbmF0aW9uLmNvdW50XCIgKHRhcCk9XCJvbkxhc3QoKVwiIHRpdGxlPVwiTGFzdFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7Y29uZmlnLmNvbnRyb2xzLmp1bXBUb0VuZC5pY29ufX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCIhY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMuZGlzYWJsZVwiIGxpZ2h0Ym94LWljb24tYnV0dG9uICh0YXApPVwib25UaHVtYm5haWxzVG9nZ2xlKClcIiB0aXRsZT1cIkxpc3RcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj57e2NvbmZpZy5jb250cm9scy50aHVtYm5haWxzLmljb259fTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=