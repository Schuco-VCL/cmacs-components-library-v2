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
    i0.ɵɵlistener("tap", function LightboxToolbarComponent_button_2_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onThumbnailsToggle()); });
    i0.ɵɵelement(1, "span", 12);
    i0.ɵɵelementEnd();
} }
function LightboxToolbarComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("tap", function LightboxToolbarComponent_button_6_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onFirst()); });
    i0.ɵɵelement(1, "span", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disable", ctx_r1.pagination.current === 1);
} }
function LightboxToolbarComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("tap", function LightboxToolbarComponent_button_7_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.onPrevious()); });
    i0.ɵɵelement(1, "span", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disable", ctx_r2.pagination.current === 1);
} }
function LightboxToolbarComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", ctx_r3.pagination == null ? null : ctx_r3.pagination.current, " / ", ctx_r3.pagination == null ? null : ctx_r3.pagination.count, "");
} }
function LightboxToolbarComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("tap", function LightboxToolbarComponent_button_9_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.onNext()); });
    i0.ɵɵelement(1, "span", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disable", ctx_r4.pagination.current === ctx_r4.pagination.count);
} }
function LightboxToolbarComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("tap", function LightboxToolbarComponent_button_10_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.onLast()); });
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
    get config() {
        return this._lightboxConfigurationService;
    }
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
    static { this.ɵfac = function LightboxToolbarComponent_Factory(t) { return new (t || LightboxToolbarComponent)(i0.ɵɵdirectiveInject(i1.LightboxConfigurationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LightboxToolbarComponent, selectors: [["lightbox-toolbar"]], hostVars: 1, hostBindings: function LightboxToolbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵsyntheticHostListener("@toolbarVisibility.start", function LightboxToolbarComponent_animation_toolbarVisibility_start_HostBindingHandler($event) { return ctx.toolbarVisibilityAnimator.animationStart($event); })("@toolbarVisibility.done", function LightboxToolbarComponent_animation_toolbarVisibility_done_HostBindingHandler($event) { return ctx.toolbarVisibilityAnimator.animationDone($event); });
            i0.ɵɵlistener("keyup", function LightboxToolbarComponent_keyup_HostBindingHandler($event) { return ctx.onKeyboardEvent($event); }, false, i0.ɵɵresolveWindow);
        } if (rf & 2) {
            i0.ɵɵsyntheticHostProperty("@toolbarVisibility", ctx.toolbarVisibilityAnimator.animation);
        } }, inputs: { title: "title", pagination: "pagination" }, outputs: { nextEvent: "nextEvent", previousEvent: "previousEvent", firstEvent: "firstEvent", lastEvent: "lastEvent", closeEvent: "closeEvent", thumbnailsToggleEvent: "thumbnailsToggleEvent" }, decls: 14, vars: 7, consts: [[1, "toolbar-container"], ["role", "button", "lightbox-icon-button", "", "title", "List", "aria-label", "List", 3, "tap", 4, "ngIf"], [1, "toolbar-title"], [1, "nav-menu"], ["role", "button", "lightbox-icon-button", "", "title", "First", "aria-label", "First", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Previous", "aria-label", "Previous", 3, "disable", "tap", 4, "ngIf"], ["class", "nav-pagination", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Next", "aria-label", "Next", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Last", "aria-label", "title", 3, "disable", "tap", 4, "ngIf"], ["lightbox-icon-button", "", "title", "Close", "role", "button", "aria-label", "Close", 3, "tap"], [1, "material-icons", "iconUILarge-Close"], ["role", "button", "lightbox-icon-button", "", "title", "List", "aria-label", "List", 3, "tap"], [1, "material-icons", "iconUILarge-Sidebar"], ["role", "button", "lightbox-icon-button", "", "title", "First", "aria-label", "First", 3, "disable", "tap"], [1, "material-icons", "iconArrowLarge-Chevron-First-Rewind"], ["role", "button", "lightbox-icon-button", "", "title", "Previous", "aria-label", "Previous", 3, "disable", "tap"], [1, "material-icons", "iconArrowLarge-Chevron-Left"], [1, "nav-pagination"], ["role", "button", "lightbox-icon-button", "", "title", "Next", "aria-label", "Next", 3, "disable", "tap"], [1, "material-icons", "iconArrowLarge-Chevron-Right"], ["role", "button", "lightbox-icon-button", "", "title", "Last", "aria-label", "title", 3, "disable", "tap"], [1, "material-icons", "iconArrowLarge-Chevron-Last-FastForward"]], template: function LightboxToolbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div");
            i0.ɵɵtemplate(2, LightboxToolbarComponent_button_2_Template, 2, 0, "button", 1);
            i0.ɵɵelementStart(3, "span", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 3);
            i0.ɵɵtemplate(6, LightboxToolbarComponent_button_6_Template, 2, 1, "button", 4);
            i0.ɵɵtemplate(7, LightboxToolbarComponent_button_7_Template, 2, 1, "button", 5);
            i0.ɵɵtemplate(8, LightboxToolbarComponent_span_8_Template, 2, 2, "span", 6);
            i0.ɵɵtemplate(9, LightboxToolbarComponent_button_9_Template, 2, 1, "button", 7);
            i0.ɵɵtemplate(10, LightboxToolbarComponent_button_10_Template, 2, 1, "button", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div")(12, "button", 9);
            i0.ɵɵlistener("tap", function LightboxToolbarComponent_Template_button_tap_12_listener() { return ctx.onClose(); });
            i0.ɵɵelement(13, "span", 10);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.config.controls.thumbnails.disable);
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
        } }, dependencies: [i2.NgIf, i3.LightboxButtonComponent], styles: ["[_nghost-%COMP%]{display:block;position:relative;overflow:hidden}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%]{background-color:#0d1e3b;color:#fff;height:64px;display:flex;align-content:center;justify-content:space-between;position:absolute;z-index:3;bottom:0;width:100%}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{flex:1 1 0%;justify-content:flex-start;overflow:hidden;padding-left:20px}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]{flex:0 0 auto;padding:0 12px}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-pagination[_ngcontent-%COMP%]{margin:0 12px}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{flex:1 1 0%;justify-content:flex-end;padding-right:20px}[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]{overflow:hidden;margin-left:12px;white-space:nowrap;text-overflow:ellipsis;max-width:calc(100% - 52px);position:relative;top:-1px}@media (max-width: 479px){[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]{display:none}}@media (max-width: 359px){[_nghost-%COMP%]   .toolbar-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{display:none}}.material-icons[_ngcontent-%COMP%]{color:#656c79;font-size:20px;line-height:.9}.lightbox-icon-button[_ngcontent-%COMP%]:not(.disable):hover   .material-icons[_ngcontent-%COMP%]{color:#fff}"], data: { animation: [ToolbarAnimations.visibilityAnimation] } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxToolbarComponent, [{
        type: Component,
        args: [{ selector: 'lightbox-toolbar', animations: [ToolbarAnimations.visibilityAnimation], host: {
                    '[@toolbarVisibility]': 'toolbarVisibilityAnimator.animation',
                    '(@toolbarVisibility.start)': 'toolbarVisibilityAnimator.animationStart($event)',
                    '(@toolbarVisibility.done)': 'toolbarVisibilityAnimator.animationDone($event)'
                }, template: "<div class=\"toolbar-container\">\r\n    <div>\r\n        <button role=\"button\" *ngIf=\"!config.controls.thumbnails.disable\" lightbox-icon-button (tap)=\"onThumbnailsToggle()\" title=\"List\" aria-label=\"List\">\r\n          <span class=\"material-icons iconUILarge-Sidebar\"><!--{{config.controls.thumbnails.icon}}--></span>\r\n        </button>\r\n        <span class=\"toolbar-title\">{{title}}</span>\r\n    </div>\r\n    <div class=\"nav-menu\">\r\n        <button role=\"button\" *ngIf=\"!config.controls.navigation.disable && !config.controls.jumpToStart.disable\" lightbox-icon-button [disable]=\"pagination.current===1\" (tap)=\"onFirst()\" title=\"First\" aria-label=\"First\">\r\n          <span class=\"material-icons iconArrowLarge-Chevron-First-Rewind\"><!--{{config.controls.jumpToStart.icon}}--></span>\r\n        </button>\r\n        <button role=\"button\" *ngIf=\"!config.controls.navigation.disable && !config.controls.backward.disable\" lightbox-icon-button [disable]=\"pagination.current===1\" (tap)=\"onPrevious()\" title=\"Previous\" aria-label=\"Previous\">\r\n          <span class=\"material-icons iconArrowLarge-Chevron-Left\"><!--{{config.controls.backward.icon}}--></span>\r\n        </button>\r\n        <span *ngIf=\"!config.controls.navigation.disable && !config.controls.itemIndex.disable\" class=\"nav-pagination\">{{pagination?.current}} / {{pagination?.count}}</span>\r\n        <button role=\"button\" *ngIf=\"!config.controls.navigation.disable && !config.controls.forward.disable\" lightbox-icon-button [disable]=\"pagination.current===pagination.count\" (tap)=\"onNext()\" title=\"Next\" aria-label=\"Next\">\r\n          <span class=\"material-icons iconArrowLarge-Chevron-Right\"><!--{{config.controls.forward.icon}}--></span>\r\n        </button>\r\n        <button role=\"button\" *ngIf=\"!config.controls.navigation.disable && !config.controls.jumpToEnd.disable\" lightbox-icon-button [disable]=\"pagination.current===pagination.count\" (tap)=\"onLast()\" title=\"Last\" aria-label=\"title\">\r\n          <span class=\"material-icons iconArrowLarge-Chevron-Last-FastForward\"><!--{{config.controls.jumpToEnd.icon}}--></span>\r\n        </button>\r\n    </div>\r\n    <div>\r\n      <button lightbox-icon-button (tap)=\"onClose()\" title=\"Close\" role=\"button\" aria-label=\"Close\">\r\n        <span class=\"material-icons iconUILarge-Close\"><!--{{config.controls.back.icon}}--></span>\r\n      </button>\r\n    </div>    \r\n</div>\r\n", styles: [":host{display:block;position:relative;overflow:hidden}:host .toolbar-container{background-color:#0d1e3b;color:#fff;height:64px;display:flex;align-content:center;justify-content:space-between;position:absolute;z-index:3;bottom:0;width:100%}:host .toolbar-container>div{display:flex;align-items:center}:host .toolbar-container>div:first-child{flex:1 1 0%;justify-content:flex-start;overflow:hidden;padding-left:20px}:host .toolbar-container .nav-menu{flex:0 0 auto;padding:0 12px}:host .toolbar-container .nav-menu .nav-pagination{margin:0 12px}:host .toolbar-container>div:last-child{flex:1 1 0%;justify-content:flex-end;padding-right:20px}:host .toolbar-container .toolbar-title{overflow:hidden;margin-left:12px;white-space:nowrap;text-overflow:ellipsis;max-width:calc(100% - 52px);position:relative;top:-1px}@media (max-width: 479px){:host .toolbar-container .toolbar-title{display:none}}@media (max-width: 359px){:host .toolbar-container>div:last-child{display:none}}.material-icons{color:#656c79;font-size:20px;line-height:.9}.lightbox-icon-button:not(.disable):hover .material-icons{color:#fff}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlnaHRib3gvY29tcG9uZW50cy9saWdodGJveC10b29sYmFyL2xpZ2h0Ym94LXRvb2xiYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtdG9vbGJhci9saWdodGJveC10b29sYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDOzs7Ozs7O0lDRmhHLGtDQUFtSjtJQUE1RCxvS0FBTyxlQUFBLDJCQUFvQixDQUFBLElBQUM7SUFDakgsMkJBQWtHO0lBQ3BHLGlCQUFTOzs7O0lBSVQsa0NBQXFOO0lBQW5ELG9LQUFPLGVBQUEsZ0JBQVMsQ0FBQSxJQUFDO0lBQ2pMLDJCQUFtSDtJQUNySCxpQkFBUzs7O0lBRnNILHlEQUFrQzs7OztJQUdqSyxrQ0FBMk47SUFBNUQsc0tBQU8sZUFBQSxvQkFBWSxDQUFBLElBQUM7SUFDakwsMkJBQXdHO0lBQzFHLGlCQUFTOzs7SUFGbUgseURBQWtDOzs7SUFHOUosZ0NBQStHO0lBQUEsWUFBK0M7SUFBQSxpQkFBTzs7O0lBQXRELGVBQStDO0lBQS9DLDhKQUErQzs7OztJQUM5SixrQ0FBNk47SUFBaEQsc0tBQU8sZUFBQSxnQkFBUSxDQUFBLElBQUM7SUFDM0wsMkJBQXdHO0lBQzFHLGlCQUFTOzs7SUFGa0gsK0VBQWlEOzs7O0lBRzVLLGtDQUFnTztJQUFqRCx1S0FBTyxlQUFBLGdCQUFRLENBQUEsSUFBQztJQUM3TCwyQkFBcUg7SUFDdkgsaUJBQVM7OztJQUZvSCwrRUFBaUQ7O0FEWnRMLE1BQU0sQ0FBTixJQUFZLFFBR1g7QUFIRCxXQUFZLFFBQVE7SUFDbEIsc0RBQWdCLENBQUE7SUFDaEIsb0RBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSFcsUUFBUSxLQUFSLFFBQVEsUUFHbkI7QUFhRCxNQUFNLE9BQU8sd0JBQXdCO0lBc0JqQyxJQUFXLE1BQU07UUFFYixPQUFPLElBQUksQ0FBQyw2QkFBNkIsQ0FBQztJQUM5QyxDQUFDO0lBRUQsWUFDcUIsNkJBQTJEO1FBQTNELGtDQUE2QixHQUE3Qiw2QkFBNkIsQ0FBOEI7UUExQi9ELGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoQywwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBUXBELFdBQU0sR0FBd0IsUUFBUSxDQUFDO0lBUzNDLENBQUM7SUFJTCxlQUFlLENBQUMsTUFBcUI7UUFDbkMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM1QixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssUUFBUSxDQUFDLFVBQVU7Z0JBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsTUFBTTtZQUNSLEtBQUssUUFBUSxDQUFDLFdBQVc7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBRU0sUUFBUTtRQUVYLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLHlCQUF5QixFQUFFLENBQUM7SUFDckUsQ0FBQztJQUVNLE1BQU07UUFFVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSxVQUFVO1FBRWIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sT0FBTztRQUVWLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLE1BQU07UUFFVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSxPQUFPO1FBRVYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sa0JBQWtCO1FBRXJCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRU0sSUFBSTtRQUVQLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFFMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDdkIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEY7SUFDTCxDQUFDO0lBRU0sS0FBSztRQUVSLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFFMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDdkIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEY7SUFDTCxDQUFDO0lBRU0sTUFBTTtRQUVULElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFFMUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO2FBQU07WUFFSCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtJQUNMLENBQUM7eUZBM0dRLHdCQUF3QjtvRUFBeEIsd0JBQXdCOzJLQUF4QixvREFFYix1SUFGYSxtREFDWjsrR0FEWSwyQkFBdUI7Ozs7WUN0QnBDLDhCQUErQixVQUFBO1lBRXZCLCtFQUVTO1lBQ1QsK0JBQTRCO1lBQUEsWUFBUztZQUFBLGlCQUFPLEVBQUE7WUFFaEQsOEJBQXNCO1lBQ2xCLCtFQUVTO1lBQ1QsK0VBRVM7WUFDVCwyRUFBcUs7WUFDckssK0VBRVM7WUFDVCxpRkFFUztZQUNiLGlCQUFNO1lBQ04sNEJBQUssaUJBQUE7WUFDMEIsa0dBQU8sYUFBUyxJQUFDO1lBQzVDLDRCQUEwRjtZQUM1RixpQkFBUyxFQUFBLEVBQUE7O1lBdkJnQixlQUF5QztZQUF6Qyw4REFBeUM7WUFHcEMsZUFBUztZQUFULCtCQUFTO1lBR2QsZUFBaUY7WUFBakYsMEdBQWlGO1lBR2pGLGVBQThFO1lBQTlFLHVHQUE4RTtZQUc5RixlQUErRTtZQUEvRSx3R0FBK0U7WUFDL0QsZUFBNkU7WUFBN0Usc0dBQTZFO1lBRzdFLGVBQStFO1lBQS9FLHdHQUErRTtndERESDlGLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUM7O3VGQU8xQyx3QkFBd0I7Y0FYcEMsU0FBUzsyQkFDSSxrQkFBa0IsY0FHaEIsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxRQUM3QztvQkFDRixzQkFBc0IsRUFBRSxxQ0FBcUM7b0JBQzdELDRCQUE0QixFQUFFLGtEQUFrRDtvQkFDaEYsMkJBQTJCLEVBQUUsaURBQWlEO2lCQUNqRjsrRUFJZ0IsU0FBUztrQkFBekIsTUFBTTtZQUVVLGFBQWE7a0JBQTdCLE1BQU07WUFFVSxVQUFVO2tCQUExQixNQUFNO1lBRVUsU0FBUztrQkFBekIsTUFBTTtZQUVVLFVBQVU7a0JBQTFCLE1BQU07WUFFVSxxQkFBcUI7a0JBQXJDLE1BQU07WUFFUyxLQUFLO2tCQUFwQixLQUFLO1lBRVUsVUFBVTtrQkFBekIsS0FBSztZQWlCTixlQUFlO2tCQURkLFlBQVk7bUJBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvcGFnaW5hdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGlnaHRib3gtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9vbGJhckFuaW1hdGlvbnMgfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9vbGJhci9hbmltYXRpb25zL3Rvb2xiYXItYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFRvb2xiYXJWaXNpYmlsaXR5QW5pbWF0b3IgfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9vbGJhci9hbmltYXRpb25zL3Rvb2xiYXItdmlzaWJpbGl0eS1hbmltYXRvcic7XHJcblxyXG5leHBvcnQgZW51bSBLRVlfQ09ERSB7XHJcbiAgUklHSFRfQVJST1cgPSAzOSxcclxuICBMRUZUX0FSUk9XID0gMzdcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpZ2h0Ym94LXRvb2xiYXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdsaWdodGJveC10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydsaWdodGJveC10b29sYmFyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBbVG9vbGJhckFuaW1hdGlvbnMudmlzaWJpbGl0eUFuaW1hdGlvbl0sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tAdG9vbGJhclZpc2liaWxpdHldJzogJ3Rvb2xiYXJWaXNpYmlsaXR5QW5pbWF0b3IuYW5pbWF0aW9uJyxcclxuICAgICAgICAnKEB0b29sYmFyVmlzaWJpbGl0eS5zdGFydCknOiAndG9vbGJhclZpc2liaWxpdHlBbmltYXRvci5hbmltYXRpb25TdGFydCgkZXZlbnQpJyxcclxuICAgICAgICAnKEB0b29sYmFyVmlzaWJpbGl0eS5kb25lKSc6ICd0b29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvbkRvbmUoJGV2ZW50KSdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpZ2h0Ym94VG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBuZXh0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBwcmV2aW91c0V2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgZmlyc3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGxhc3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGNsb3NlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgQE91dHB1dCgpIHB1YmxpYyB0aHVtYm5haWxzVG9nZ2xlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCkgcHVibGljIHBhZ2luYXRpb246IFBhZ2luYXRpb247XHJcblxyXG4gICAgcHVibGljIHRvb2xiYXJWaXNpYmlsaXR5QW5pbWF0b3I6IFRvb2xiYXJWaXNpYmlsaXR5QW5pbWF0b3I7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGU6ICdvcGVuZWQnIHwgJ2Nsb3NlZCcgPSAnY2xvc2VkJztcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNvbmZpZygpOiBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfbGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZTogTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleXVwJywgWyckZXZlbnQnXSlcclxuICAgIG9uS2V5Ym9hcmRFdmVudCgkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgY29uc3QgY29kZSA9ICRldmVudC5rZXlDb2RlO1xyXG4gICAgICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgICAgICBjYXNlIEtFWV9DT0RFLkxFRlRfQVJST1c6XHJcbiAgICAgICAgICB0aGlzLm9uUHJldmlvdXMoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgS0VZX0NPREUuUklHSFRfQVJST1c6XHJcbiAgICAgICAgICB0aGlzLm9uTmV4dCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMudG9vbGJhclZpc2liaWxpdHlBbmltYXRvciA9IG5ldyBUb29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTmV4dCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5uZXh0RXZlbnQuZW1pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblByZXZpb3VzKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLnByZXZpb3VzRXZlbnQuZW1pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkZpcnN0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmZpcnN0RXZlbnQuZW1pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkxhc3QoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMubGFzdEV2ZW50LmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DbG9zZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5jbG9zZUV2ZW50LmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UaHVtYm5haWxzVG9nZ2xlKCkge1xyXG5cclxuICAgICAgICB0aGlzLnRodW1ibmFpbHNUb2dnbGVFdmVudC5lbWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW4oKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gJ29wZW5lZCcpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gJ29wZW5lZCc7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhclZpc2liaWxpdHlBbmltYXRvci5zaG93KHRoaXMuY29uZmlnLmFuaW1hdGlvbnMudG9vbGJhclNob3cuZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gJ2Nsb3NlZCcpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gJ2Nsb3NlZCc7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhclZpc2liaWxpdHlBbmltYXRvci5oaWRlKHRoaXMuY29uZmlnLmFuaW1hdGlvbnMudG9vbGJhckhpZGUuZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09ICdvcGVuZWQnKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwidG9vbGJhci1jb250YWluZXJcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgKm5nSWY9XCIhY29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMuZGlzYWJsZVwiIGxpZ2h0Ym94LWljb24tYnV0dG9uICh0YXApPVwib25UaHVtYm5haWxzVG9nZ2xlKClcIiB0aXRsZT1cIkxpc3RcIiBhcmlhLWxhYmVsPVwiTGlzdFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uVUlMYXJnZS1TaWRlYmFyXCI+PCEtLXt7Y29uZmlnLmNvbnRyb2xzLnRodW1ibmFpbHMuaWNvbn19LS0+PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9vbGJhci10aXRsZVwiPnt7dGl0bGV9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm5hdi1tZW51XCI+XHJcbiAgICAgICAgPGJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgKm5nSWY9XCIhY29uZmlnLmNvbnRyb2xzLm5hdmlnYXRpb24uZGlzYWJsZSAmJiAhY29uZmlnLmNvbnRyb2xzLmp1bXBUb1N0YXJ0LmRpc2FibGVcIiBsaWdodGJveC1pY29uLWJ1dHRvbiBbZGlzYWJsZV09XCJwYWdpbmF0aW9uLmN1cnJlbnQ9PT0xXCIgKHRhcCk9XCJvbkZpcnN0KClcIiB0aXRsZT1cIkZpcnN0XCIgYXJpYS1sYWJlbD1cIkZpcnN0XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25BcnJvd0xhcmdlLUNoZXZyb24tRmlyc3QtUmV3aW5kXCI+PCEtLXt7Y29uZmlnLmNvbnRyb2xzLmp1bXBUb1N0YXJ0Lmljb259fS0tPjwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIiAqbmdJZj1cIiFjb25maWcuY29udHJvbHMubmF2aWdhdGlvbi5kaXNhYmxlICYmICFjb25maWcuY29udHJvbHMuYmFja3dhcmQuZGlzYWJsZVwiIGxpZ2h0Ym94LWljb24tYnV0dG9uIFtkaXNhYmxlXT1cInBhZ2luYXRpb24uY3VycmVudD09PTFcIiAodGFwKT1cIm9uUHJldmlvdXMoKVwiIHRpdGxlPVwiUHJldmlvdXNcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbkFycm93TGFyZ2UtQ2hldnJvbi1MZWZ0XCI+PCEtLXt7Y29uZmlnLmNvbnRyb2xzLmJhY2t3YXJkLmljb259fS0tPjwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb25maWcuY29udHJvbHMubmF2aWdhdGlvbi5kaXNhYmxlICYmICFjb25maWcuY29udHJvbHMuaXRlbUluZGV4LmRpc2FibGVcIiBjbGFzcz1cIm5hdi1wYWdpbmF0aW9uXCI+e3twYWdpbmF0aW9uPy5jdXJyZW50fX0gLyB7e3BhZ2luYXRpb24/LmNvdW50fX08L3NwYW4+XHJcbiAgICAgICAgPGJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgKm5nSWY9XCIhY29uZmlnLmNvbnRyb2xzLm5hdmlnYXRpb24uZGlzYWJsZSAmJiAhY29uZmlnLmNvbnRyb2xzLmZvcndhcmQuZGlzYWJsZVwiIGxpZ2h0Ym94LWljb24tYnV0dG9uIFtkaXNhYmxlXT1cInBhZ2luYXRpb24uY3VycmVudD09PXBhZ2luYXRpb24uY291bnRcIiAodGFwKT1cIm9uTmV4dCgpXCIgdGl0bGU9XCJOZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbkFycm93TGFyZ2UtQ2hldnJvbi1SaWdodFwiPjwhLS17e2NvbmZpZy5jb250cm9scy5mb3J3YXJkLmljb259fS0tPjwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIiAqbmdJZj1cIiFjb25maWcuY29udHJvbHMubmF2aWdhdGlvbi5kaXNhYmxlICYmICFjb25maWcuY29udHJvbHMuanVtcFRvRW5kLmRpc2FibGVcIiBsaWdodGJveC1pY29uLWJ1dHRvbiBbZGlzYWJsZV09XCJwYWdpbmF0aW9uLmN1cnJlbnQ9PT1wYWdpbmF0aW9uLmNvdW50XCIgKHRhcCk9XCJvbkxhc3QoKVwiIHRpdGxlPVwiTGFzdFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uQXJyb3dMYXJnZS1DaGV2cm9uLUxhc3QtRmFzdEZvcndhcmRcIj48IS0te3tjb25maWcuY29udHJvbHMuanVtcFRvRW5kLmljb259fS0tPjwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBsaWdodGJveC1pY29uLWJ1dHRvbiAodGFwKT1cIm9uQ2xvc2UoKVwiIHRpdGxlPVwiQ2xvc2VcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uVUlMYXJnZS1DbG9zZVwiPjwhLS17e2NvbmZpZy5jb250cm9scy5iYWNrLmljb259fS0tPjwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj4gICAgXHJcbjwvZGl2PlxyXG4iXX0=