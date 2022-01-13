import { Component, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { ToolbarAnimations } from '../../models/toolbar/animations/toolbar-animations';
import { ToolbarVisibilityAnimator } from '../../models/toolbar/animations/toolbar-visibility-animator';
import * as i0 from "@angular/core";
import * as i1 from "../../services/lightbox-configuration.service";
import * as i2 from "@angular/common";
import * as i3 from "../lightbox-button/lightbox-button.component";
function LightboxToolbarComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("tap", function LightboxToolbarComponent_button_2_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onThumbnailsToggle(); });
    i0.ɵɵelement(1, "span", 12);
    i0.ɵɵelementEnd();
} }
function LightboxToolbarComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("tap", function LightboxToolbarComponent_button_4_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onFirst(); });
    i0.ɵɵelement(1, "span", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disable", ctx_r1.pagination.current === 1);
} }
function LightboxToolbarComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("tap", function LightboxToolbarComponent_button_5_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onPrevious(); });
    i0.ɵɵelement(1, "span", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disable", ctx_r2.pagination.current === 1);
} }
function LightboxToolbarComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", ctx_r3.pagination == null ? null : ctx_r3.pagination.current, " / ", ctx_r3.pagination == null ? null : ctx_r3.pagination.count, "");
} }
function LightboxToolbarComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("tap", function LightboxToolbarComponent_button_7_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onNext(); });
    i0.ɵɵelement(1, "span", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disable", ctx_r4.pagination.current === ctx_r4.pagination.count);
} }
function LightboxToolbarComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("tap", function LightboxToolbarComponent_button_8_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onLast(); });
    i0.ɵɵelement(1, "span", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disable", ctx_r5.pagination.current === ctx_r5.pagination.count);
} }
export var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
})(KEY_CODE || (KEY_CODE = {}));
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
    onKeyboardEvent($event) {
        const code = $event.keyCode;
        switch (code) {
            case KEY_CODE.LEFT_ARROW:
                this.onPrevious();
                break;
            case KEY_CODE.RIGHT_ARROW:
                this.onNext();
                break;
        }
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
        i0.ɵɵlistener("keyup", function LightboxToolbarComponent_keyup_HostBindingHandler($event) { return ctx.onKeyboardEvent($event); }, false, i0.ɵɵresolveWindow);
    } if (rf & 2) {
        i0.ɵɵsyntheticHostProperty("@toolbarVisibility", ctx.toolbarVisibilityAnimator.animation);
    } }, inputs: { title: "title", pagination: "pagination" }, outputs: { nextEvent: "nextEvent", previousEvent: "previousEvent", firstEvent: "firstEvent", lastEvent: "lastEvent", closeEvent: "closeEvent", thumbnailsToggleEvent: "thumbnailsToggleEvent" }, decls: 14, vars: 7, consts: [[1, "toolbar-container"], ["role", "button", "lightbox-icon-button", "", "title", "List", "aria-label", "List", 3, "tap", 4, "ngIf"], [1, "nav-menu"], ["role", "button", "lightbox-icon-button", "", "title", "First", "aria-label", "First", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Previous", "aria-label", "Previous", 3, "disable", "tap", 4, "ngIf"], ["class", "nav-pagination", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Next", "aria-label", "Next", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Last", "aria-label", "title", 3, "disable", "tap", 4, "ngIf"], [1, "toolbar-title"], ["lightbox-icon-button", "", "title", "Close", "role", "button", "aria-label", "Close", 3, "tap"], [1, "material-icons", "iconUILarge-Close"], ["role", "button", "lightbox-icon-button", "", "title", "List", "aria-label", "List", 3, "tap"], [1, "material-icons", "iconCreation-List"], ["role", "button", "lightbox-icon-button", "", "title", "First", "aria-label", "First", 3, "disable", "tap"], [1, "material-icons", "iconArrowLarge-Chevron-First-Rewind"], ["role", "button", "lightbox-icon-button", "", "title", "Previous", "aria-label", "Previous", 3, "disable", "tap"], [1, "material-icons", "iconArrowLarge-Chevron-Left"], [1, "nav-pagination"], ["role", "button", "lightbox-icon-button", "", "title", "Next", "aria-label", "Next", 3, "disable", "tap"], [1, "material-icons", "iconArrowLarge-Chevron-Right"], ["role", "button", "lightbox-icon-button", "", "title", "Last", "aria-label", "title", 3, "disable", "tap"], [1, "material-icons", "iconArrowLarge-Chevron-Last-FastForward"]], template: function LightboxToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵtemplate(2, LightboxToolbarComponent_button_2_Template, 2, 0, "button", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵtemplate(4, LightboxToolbarComponent_button_4_Template, 2, 1, "button", 3);
        i0.ɵɵtemplate(5, LightboxToolbarComponent_button_5_Template, 2, 1, "button", 4);
        i0.ɵɵtemplate(6, LightboxToolbarComponent_span_6_Template, 2, 2, "span", 5);
        i0.ɵɵtemplate(7, LightboxToolbarComponent_button_7_Template, 2, 1, "button", 6);
        i0.ɵɵtemplate(8, LightboxToolbarComponent_button_8_Template, 2, 1, "button", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div");
        i0.ɵɵelementStart(10, "span", 8);
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 9);
        i0.ɵɵlistener("tap", function LightboxToolbarComponent_Template_button_tap_12_listener() { return ctx.onClose(); });
        i0.ɵɵelement(13, "span", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.config.controls.thumbnails.disable);
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
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.title);
    } }, directives: [i2.NgIf, i3.LightboxButtonComponent], styles: ["[_nghost-%COMP%]{display:block;position:relative;overflow:hidden}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%]{background-color:#0d1e3b;color:#fff;height:64px;display:flex;align-content:center;justify-content:space-between;position:absolute;z-index:3;bottom:0;width:100%}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{flex:1 1 0%;justify-content:flex-start;overflow:hidden;padding-left:20px}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]{flex:0 0 auto;padding:0 12px}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-pagination[_ngcontent-%COMP%]{margin:0 12px}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{flex:1 1 0%;justify-content:flex-end;padding-right:20px}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]{overflow:hidden;margin-right:12px;white-space:nowrap;text-overflow:ellipsis;max-width:calc(100% - 52px)}@media (max-width:479px){[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]{display:none}}@media (max-width:359px){[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{display:none}}.material-icons[_ngcontent-%COMP%]{color:#656c79;font-size:20px;line-height:.9}.lightbox-icon-button[_ngcontent-%COMP%]:not(.disable):hover   .material-icons[_ngcontent-%COMP%]{color:#fff}"], data: { animation: [ToolbarAnimations.visibilityAnimation] } });
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
        }], onKeyboardEvent: [{
            type: HostListener,
            args: ['window:keyup', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlnaHRib3gvY29tcG9uZW50cy9saWdodGJveC10b29sYmFyL2xpZ2h0Ym94LXRvb2xiYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtdG9vbGJhci9saWdodGJveC10b29sYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDOzs7Ozs7O0lDRmhHLGtDQUFtSjtJQUE1RCxtTUFBNEI7SUFDakgsMkJBQWdHO0lBQ2xHLGlCQUFTOzs7O0lBR1Qsa0NBQXFOO0lBQW5ELHdMQUFpQjtJQUNqTCwyQkFBbUg7SUFDckgsaUJBQVM7OztJQUZzSCx5REFBa0M7Ozs7SUFHakssa0NBQTJOO0lBQTVELDhMQUFvQjtJQUNqTCwyQkFBd0c7SUFDMUcsaUJBQVM7OztJQUZtSCx5REFBa0M7OztJQUc5SixnQ0FBK0c7SUFBQSxZQUErQztJQUFBLGlCQUFPOzs7SUFBdEQsZUFBK0M7SUFBL0MsOEpBQStDOzs7O0lBQzlKLGtDQUE2TjtJQUFoRCwwTEFBZ0I7SUFDM0wsMkJBQXdHO0lBQzFHLGlCQUFTOzs7SUFGa0gsK0VB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cUI7a0JBQXJDLE1BQU07WUFFUyxLQUFLO2tCQUFwQixLQUFLO1lBRVUsVUFBVTtrQkFBekIsS0FBSztZQWlCTixlQUFlO2tCQURkLFlBQVk7bUJBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BhZ2luYXRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saWdodGJveC1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9vbGJhckFuaW1hdGlvbnMgfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9vbGJhci9hbmltYXRpb25zL3Rvb2xiYXItYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBUb29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rvb2xiYXIvYW5pbWF0aW9ucy90b29sYmFyLXZpc2liaWxpdHktYW5pbWF0b3InO1xuXG5leHBvcnQgZW51bSBLRVlfQ09ERSB7XG4gIFJJR0hUX0FSUk9XID0gMzksXG4gIExFRlRfQVJST1cgPSAzN1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpZ2h0Ym94LXRvb2xiYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnbGlnaHRib3gtdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2xpZ2h0Ym94LXRvb2xiYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbVG9vbGJhckFuaW1hdGlvbnMudmlzaWJpbGl0eUFuaW1hdGlvbl0sXG4gICAgaG9zdDoge1xuICAgICAgICAnW0B0b29sYmFyVmlzaWJpbGl0eV0nOiAndG9vbGJhclZpc2liaWxpdHlBbmltYXRvci5hbmltYXRpb24nLFxuICAgICAgICAnKEB0b29sYmFyVmlzaWJpbGl0eS5zdGFydCknOiAndG9vbGJhclZpc2liaWxpdHlBbmltYXRvci5hbmltYXRpb25TdGFydCgkZXZlbnQpJyxcbiAgICAgICAgJyhAdG9vbGJhclZpc2liaWxpdHkuZG9uZSknOiAndG9vbGJhclZpc2liaWxpdHlBbmltYXRvci5hbmltYXRpb25Eb25lKCRldmVudCknXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBMaWdodGJveFRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQE91dHB1dCgpIHB1YmxpYyBuZXh0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgcHVibGljIHByZXZpb3VzRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgcHVibGljIGZpcnN0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgcHVibGljIGxhc3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgdGh1bWJuYWlsc1RvZ2dsZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgcGFnaW5hdGlvbjogUGFnaW5hdGlvbjtcblxuICAgIHB1YmxpYyB0b29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yOiBUb29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yO1xuXG4gICAgcHJpdmF0ZSBfc3RhdGU6ICdvcGVuZWQnIHwgJ2Nsb3NlZCcgPSAnY2xvc2VkJztcblxuICAgIHB1YmxpYyBnZXQgY29uZmlnKCk6IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2Uge1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9saWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9saWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlXG4gICAgKSB7IH1cblxuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleXVwJywgWyckZXZlbnQnXSlcbiAgICBvbktleWJvYXJkRXZlbnQoJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBjb25zdCBjb2RlID0gJGV2ZW50LmtleUNvZGU7XG4gICAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgICAgY2FzZSBLRVlfQ09ERS5MRUZUX0FSUk9XOlxyXG4gICAgICAgICAgdGhpcy5vblByZXZpb3VzKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEtFWV9DT0RFLlJJR0hUX0FSUk9XOlxyXG4gICAgICAgICAgdGhpcy5vbk5leHQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMudG9vbGJhclZpc2liaWxpdHlBbmltYXRvciA9IG5ldyBUb29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTmV4dCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLm5leHRFdmVudC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUHJldmlvdXMoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c0V2ZW50LmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25GaXJzdCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmZpcnN0RXZlbnQuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxhc3QoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5sYXN0RXZlbnQuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsb3NlKCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuY2xvc2VFdmVudC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGh1bWJuYWlsc1RvZ2dsZSgpIHtcblxuICAgICAgICB0aGlzLnRodW1ibmFpbHNUb2dnbGVFdmVudC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSAnb3BlbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9ICdvcGVuZWQnO1xuICAgICAgICAgICAgdGhpcy50b29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yLnNob3codGhpcy5jb25maWcuYW5pbWF0aW9ucy50b29sYmFyU2hvdy5kdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSAnY2xvc2VkJykge1xuXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9ICdjbG9zZWQnO1xuICAgICAgICAgICAgdGhpcy50b29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yLmhpZGUodGhpcy5jb25maWcuYW5pbWF0aW9ucy50b29sYmFySGlkZS5kdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gJ29wZW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0b29sYmFyLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIiAqbmdJZj1cIiFjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5kaXNhYmxlXCIgbGlnaHRib3gtaWNvbi1idXR0b24gKHRhcCk9XCJvblRodW1ibmFpbHNUb2dnbGUoKVwiIHRpdGxlPVwiTGlzdFwiIGFyaWEtbGFiZWw9XCJMaXN0XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25DcmVhdGlvbi1MaXN0XCI+PCEtLXt7Y29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMuaWNvbn19LS0+PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibmF2LW1lbnVcIj5cclxuICAgICAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIiAqbmdJZj1cIiFjb25maWcuY29udHJvbHMubmF2aWdhdGlvbi5kaXNhYmxlICYmICFjb25maWcuY29udHJvbHMuanVtcFRvU3RhcnQuZGlzYWJsZVwiIGxpZ2h0Ym94LWljb24tYnV0dG9uIFtkaXNhYmxlXT1cInBhZ2luYXRpb24uY3VycmVudD09PTFcIiAodGFwKT1cIm9uRmlyc3QoKVwiIHRpdGxlPVwiRmlyc3RcIiBhcmlhLWxhYmVsPVwiRmlyc3RcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbkFycm93TGFyZ2UtQ2hldnJvbi1GaXJzdC1SZXdpbmRcIj48IS0te3tjb25maWcuY29udHJvbHMuanVtcFRvU3RhcnQuaWNvbn19LS0+PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwiIWNvbmZpZy5jb250cm9scy5uYXZpZ2F0aW9uLmRpc2FibGUgJiYgIWNvbmZpZy5jb250cm9scy5iYWNrd2FyZC5kaXNhYmxlXCIgbGlnaHRib3gtaWNvbi1idXR0b24gW2Rpc2FibGVdPVwicGFnaW5hdGlvbi5jdXJyZW50PT09MVwiICh0YXApPVwib25QcmV2aW91cygpXCIgdGl0bGU9XCJQcmV2aW91c1wiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uQXJyb3dMYXJnZS1DaGV2cm9uLUxlZnRcIj48IS0te3tjb25maWcuY29udHJvbHMuYmFja3dhcmQuaWNvbn19LS0+PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbmZpZy5jb250cm9scy5uYXZpZ2F0aW9uLmRpc2FibGUgJiYgIWNvbmZpZy5jb250cm9scy5pdGVtSW5kZXguZGlzYWJsZVwiIGNsYXNzPVwibmF2LXBhZ2luYXRpb25cIj57e3BhZ2luYXRpb24/LmN1cnJlbnR9fSAvIHt7cGFnaW5hdGlvbj8uY291bnR9fTwvc3Bhbj5cclxuICAgICAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIiAqbmdJZj1cIiFjb25maWcuY29udHJvbHMubmF2aWdhdGlvbi5kaXNhYmxlICYmICFjb25maWcuY29udHJvbHMuZm9yd2FyZC5kaXNhYmxlXCIgbGlnaHRib3gtaWNvbi1idXR0b24gW2Rpc2FibGVdPVwicGFnaW5hdGlvbi5jdXJyZW50PT09cGFnaW5hdGlvbi5jb3VudFwiICh0YXApPVwib25OZXh0KClcIiB0aXRsZT1cIk5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uQXJyb3dMYXJnZS1DaGV2cm9uLVJpZ2h0XCI+PCEtLXt7Y29uZmlnLmNvbnRyb2xzLmZvcndhcmQuaWNvbn19LS0+PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwiIWNvbmZpZy5jb250cm9scy5uYXZpZ2F0aW9uLmRpc2FibGUgJiYgIWNvbmZpZy5jb250cm9scy5qdW1wVG9FbmQuZGlzYWJsZVwiIGxpZ2h0Ym94LWljb24tYnV0dG9uIFtkaXNhYmxlXT1cInBhZ2luYXRpb24uY3VycmVudD09PXBhZ2luYXRpb24uY291bnRcIiAodGFwKT1cIm9uTGFzdCgpXCIgdGl0bGU9XCJMYXN0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25BcnJvd0xhcmdlLUNoZXZyb24tTGFzdC1GYXN0Rm9yd2FyZFwiPjwhLS17e2NvbmZpZy5jb250cm9scy5qdW1wVG9FbmQuaWNvbn19LS0+PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInRvb2xiYXItdGl0bGVcIj57e3RpdGxlfX08L3NwYW4+XHJcbiAgICAgIDxidXR0b24gbGlnaHRib3gtaWNvbi1idXR0b24gKHRhcCk9XCJvbkNsb3NlKClcIiB0aXRsZT1cIkNsb3NlXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblVJTGFyZ2UtQ2xvc2VcIj48IS0te3tjb25maWcuY29udHJvbHMuYmFjay5pY29ufX0tLT48L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+ICAgIFxyXG48L2Rpdj5cclxuIl19