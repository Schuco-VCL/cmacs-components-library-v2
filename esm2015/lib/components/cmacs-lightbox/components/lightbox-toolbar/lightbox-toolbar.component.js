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
    } }, inputs: { title: "title", pagination: "pagination" }, outputs: { nextEvent: "nextEvent", previousEvent: "previousEvent", firstEvent: "firstEvent", lastEvent: "lastEvent", closeEvent: "closeEvent", thumbnailsToggleEvent: "thumbnailsToggleEvent" }, decls: 15, vars: 8, consts: [[1, "toolbar-container"], ["lightbox-icon-button", "", "title", "Close", "role", "button", "aria-label", "Close", 3, "tap"], [1, "material-icons"], [1, "toolbar-title"], [1, "nav-menu"], ["role", "button", "lightbox-icon-button", "", "title", "First", "aria-label", "First", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Previous", "aria-label", "Previous", 3, "disable", "tap", 4, "ngIf"], ["class", "nav-pagination", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Next", "aria-label", "Next", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Last", "aria-label", "title", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "List", "aria-label", "List", 3, "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "First", "aria-label", "First", 3, "disable", "tap"], ["role", "button", "lightbox-icon-button", "", "title", "Previous", "aria-label", "Previous", 3, "disable", "tap"], [1, "nav-pagination"], ["role", "button", "lightbox-icon-button", "", "title", "Next", "aria-label", "Next", 3, "disable", "tap"], ["role", "button", "lightbox-icon-button", "", "title", "Last", "aria-label", "title", 3, "disable", "tap"], ["role", "button", "lightbox-icon-button", "", "title", "List", "aria-label", "List", 3, "tap"]], template: function LightboxToolbarComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlnaHRib3gvY29tcG9uZW50cy9saWdodGJveC10b29sYmFyL2xpZ2h0Ym94LXRvb2xiYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtdG9vbGJhci9saWdodGJveC10b29sYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkRBQTZELENBQUM7Ozs7Ozs7SUNJaEcsa0NBQXFOO0lBQW5ELHdMQUFpQjtJQUMvSywrQkFBNkI7SUFBQSxZQUFvQztJQUFBLGlCQUFPO0lBQzVFLGlCQUFTOzs7SUFGc0gseURBQWtDO0lBQ2hJLGVBQW9DO0lBQXBDLDZEQUFvQzs7OztJQUVyRSxrQ0FBMk47SUFBNUQsMkxBQW9CO0lBQy9LLCtCQUE2QjtJQUFBLFlBQWlDO0lBQUEsaUJBQU87SUFDekUsaUJBQVM7OztJQUZtSCx5REFBa0M7SUFDN0gsZUFBaUM7SUFBakMsMERBQWlDOzs7SUFFbEUsZ0NBQStHO0lBQUEsWUFBK0M7SUFBQSxpQkFBTzs7O0lBQXRELGVBQStDO0lBQS9DLDhKQUErQzs7OztJQUM5SixrQ0FBNk47SUFBaEQsMkxBQWdCO0lBQ3pM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IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvcGFnaW5hdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xpZ2h0Ym94LWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBUb29sYmFyQW5pbWF0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVscy90b29sYmFyL2FuaW1hdGlvbnMvdG9vbGJhci1hbmltYXRpb25zJztcbmltcG9ydCB7IFRvb2xiYXJWaXNpYmlsaXR5QW5pbWF0b3IgfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9vbGJhci9hbmltYXRpb25zL3Rvb2xiYXItdmlzaWJpbGl0eS1hbmltYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGlnaHRib3gtdG9vbGJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICdsaWdodGJveC10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbGlnaHRib3gtdG9vbGJhci5jb21wb25lbnQuc2NzcyddLFxuICAgIGFuaW1hdGlvbnM6IFtUb29sYmFyQW5pbWF0aW9ucy52aXNpYmlsaXR5QW5pbWF0aW9uXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbQHRvb2xiYXJWaXNpYmlsaXR5XSc6ICd0b29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvbicsXG4gICAgICAgICcoQHRvb2xiYXJWaXNpYmlsaXR5LnN0YXJ0KSc6ICd0b29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvblN0YXJ0KCRldmVudCknLFxuICAgICAgICAnKEB0b29sYmFyVmlzaWJpbGl0eS5kb25lKSc6ICd0b29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yLmFuaW1hdGlvbkRvbmUoJGV2ZW50KSdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIExpZ2h0Ym94VG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAT3V0cHV0KCkgcHVibGljIG5leHRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgcHJldmlvdXNFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgZmlyc3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgbGFzdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjbG9zZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIHB1YmxpYyB0aHVtYm5haWxzVG9nZ2xlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgdGl0bGU6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uO1xuXG4gICAgcHVibGljIHRvb2xiYXJWaXNpYmlsaXR5QW5pbWF0b3I6IFRvb2xiYXJWaXNpYmlsaXR5QW5pbWF0b3I7XG5cbiAgICBwcml2YXRlIF9zdGF0ZTogJ29wZW5lZCcgfCAnY2xvc2VkJyA9ICdjbG9zZWQnO1xuXG4gICAgcHVibGljIGdldCBjb25maWcoKTogTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2xpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2U6IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMudG9vbGJhclZpc2liaWxpdHlBbmltYXRvciA9IG5ldyBUb29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTmV4dCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLm5leHRFdmVudC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUHJldmlvdXMoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c0V2ZW50LmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25GaXJzdCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmZpcnN0RXZlbnQuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxhc3QoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5sYXN0RXZlbnQuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsb3NlKCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuY2xvc2VFdmVudC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGh1bWJuYWlsc1RvZ2dsZSgpIHtcblxuICAgICAgICB0aGlzLnRodW1ibmFpbHNUb2dnbGVFdmVudC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSAnb3BlbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9ICdvcGVuZWQnO1xuICAgICAgICAgICAgdGhpcy50b29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yLnNob3codGhpcy5jb25maWcuYW5pbWF0aW9ucy50b29sYmFyU2hvdy5kdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSAnY2xvc2VkJykge1xuXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9ICdjbG9zZWQnO1xuICAgICAgICAgICAgdGhpcy50b29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yLmhpZGUodGhpcy5jb25maWcuYW5pbWF0aW9ucy50b29sYmFySGlkZS5kdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gJ29wZW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0b29sYmFyLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGxpZ2h0Ym94LWljb24tYnV0dG9uICh0YXApPVwib25DbG9zZSgpXCIgdGl0bGU9XCJDbG9zZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7Y29uZmlnLmNvbnRyb2xzLmJhY2suaWNvbn19PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9vbGJhci10aXRsZVwiPnt7dGl0bGV9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm5hdi1tZW51XCI+XHJcbiAgICAgICAgPGJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgKm5nSWY9XCIhY29uZmlnLmNvbnRyb2xzLm5hdmlnYXRpb24uZGlzYWJsZSAmJiAhY29uZmlnLmNvbnRyb2xzLmp1bXBUb1N0YXJ0LmRpc2FibGVcIiBsaWdodGJveC1pY29uLWJ1dHRvbiBbZGlzYWJsZV09XCJwYWdpbmF0aW9uLmN1cnJlbnQ9PT0xXCIgKHRhcCk9XCJvbkZpcnN0KClcIiB0aXRsZT1cIkZpcnN0XCIgYXJpYS1sYWJlbD1cIkZpcnN0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj57e2NvbmZpZy5jb250cm9scy5qdW1wVG9TdGFydC5pY29ufX08L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgKm5nSWY9XCIhY29uZmlnLmNvbnRyb2xzLm5hdmlnYXRpb24uZGlzYWJsZSAmJiAhY29uZmlnLmNvbnRyb2xzLmJhY2t3YXJkLmRpc2FibGVcIiBsaWdodGJveC1pY29uLWJ1dHRvbiBbZGlzYWJsZV09XCJwYWdpbmF0aW9uLmN1cnJlbnQ9PT0xXCIgKHRhcCk9XCJvblByZXZpb3VzKClcIiB0aXRsZT1cIlByZXZpb3VzXCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj57e2NvbmZpZy5jb250cm9scy5iYWNrd2FyZC5pY29ufX08L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29uZmlnLmNvbnRyb2xzLm5hdmlnYXRpb24uZGlzYWJsZSAmJiAhY29uZmlnLmNvbnRyb2xzLml0ZW1JbmRleC5kaXNhYmxlXCIgY2xhc3M9XCJuYXYtcGFnaW5hdGlvblwiPnt7cGFnaW5hdGlvbj8uY3VycmVudH19IC8ge3twYWdpbmF0aW9uPy5jb3VudH19PC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwiIWNvbmZpZy5jb250cm9scy5uYXZpZ2F0aW9uLmRpc2FibGUgJiYgIWNvbmZpZy5jb250cm9scy5mb3J3YXJkLmRpc2FibGVcIiBsaWdodGJveC1pY29uLWJ1dHRvbiBbZGlzYWJsZV09XCJwYWdpbmF0aW9uLmN1cnJlbnQ9PT1wYWdpbmF0aW9uLmNvdW50XCIgKHRhcCk9XCJvbk5leHQoKVwiIHRpdGxlPVwiTmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj57e2NvbmZpZy5jb250cm9scy5mb3J3YXJkLmljb259fTwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIiAqbmdJZj1cIiFjb25maWcuY29udHJvbHMubmF2aWdhdGlvbi5kaXNhYmxlICYmICFjb25maWcuY29udHJvbHMuanVtcFRvRW5kLmRpc2FibGVcIiBsaWdodGJveC1pY29uLWJ1dHRvbiBbZGlzYWJsZV09XCJwYWdpbmF0aW9uLmN1cnJlbnQ9PT1wYWdpbmF0aW9uLmNvdW50XCIgKHRhcCk9XCJvbkxhc3QoKVwiIHRpdGxlPVwiTGFzdFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+e3tjb25maWcuY29udHJvbHMuanVtcFRvRW5kLmljb259fTwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIiAqbmdJZj1cIiFjb25maWcuY29udHJvbHMudGh1bWJuYWlscy5kaXNhYmxlXCIgbGlnaHRib3gtaWNvbi1idXR0b24gKHRhcCk9XCJvblRodW1ibmFpbHNUb2dnbGUoKVwiIHRpdGxlPVwiTGlzdFwiIGFyaWEtbGFiZWw9XCJMaXN0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj57e2NvbmZpZy5jb250cm9scy50aHVtYm5haWxzLmljb259fTwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4iXX0=