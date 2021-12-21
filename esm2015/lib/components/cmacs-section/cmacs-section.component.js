import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/grid";
import * as i2 from "@angular/common";
import * as i3 from "../cmacs-button/cmacs-button.component";
import * as i4 from "../cmacs-tooltip/tooltip";
function CmacsSectionComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.titleIcon);
} }
function CmacsSectionComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.extra);
} }
const _c0 = function (a0) { return { data: a0 }; };
function CmacsSectionComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, CmacsSectionComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementStart(2, "button", 10);
    i0.ɵɵlistener("click", function CmacsSectionComponent_div_8_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.collapseSection(); });
    i0.ɵɵelement(3, "i", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.extra)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c0, ctx_r1.extraData));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("action", true);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("iconArrowSmall-Chevron-Up", ctx_r1.collapsed)("iconArrowSmall-Chevron-Down", !ctx_r1.collapsed);
} }
function CmacsSectionComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
const _c1 = ["*"];
export class CmacsSectionComponent {
    constructor() {
        this.widgetSpan = '24';
        this.title = '';
        this.showCollapse = true;
        this.collapsed = false;
        this.validate = false;
        this.onbeforecollapse = new EventEmitter();
        this.oncollapse = new EventEmitter();
        this.onbeforeexpand = new EventEmitter();
        this.onexpand = new EventEmitter();
    }
    ngOnInit() {
    }
    collapseSection() {
        if (!this.validate) {
            this.collapsed = !this.collapsed;
            this.triggerCollapseEvents(false);
        }
        else {
            this.triggerCollapseEvents(true);
        }
    }
    ngOnChanges(changes) {
        if (changes.collapsed && changes.collapsed.previousValue !== undefined) {
            this.triggerCollapseEvents(false);
        }
    }
    triggerCollapseEvents(before) {
        if (before) {
            if (this.collapsed) {
                this.onbeforeexpand.emit();
            }
            else {
                this.onbeforecollapse.emit();
            }
        }
        else if (this.collapsed) {
            this.oncollapse.emit();
        }
        else {
            this.onexpand.emit();
        }
    }
}
CmacsSectionComponent.ɵfac = function CmacsSectionComponent_Factory(t) { return new (t || CmacsSectionComponent)(); };
CmacsSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSectionComponent, selectors: [["cmacs-section"]], inputs: { extra: "extra", widgetSpan: "widgetSpan", title: "title", titleIcon: "titleIcon", showCollapse: "showCollapse", extraData: "extraData", collapsed: "collapsed", validate: "validate" }, outputs: { onbeforecollapse: "onbeforecollapse", oncollapse: "oncollapse", onbeforeexpand: "onbeforeexpand", onexpand: "onexpand" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 10, vars: 5, consts: [["nz-col", "", 1, "widget-container", 3, "nzSpan"], ["nz-row", "", "nzType", "flex", "nzJustify", "space-between", 1, "widget-container-bar"], ["nz-col", ""], ["nz-row", "", 1, "widget-container-bar-title"], [3, "ngClass", 4, "ngIf"], ["nz-row", "", "class", "widget-container-bar-btns", 4, "ngIf"], ["class", "widget-container-content", 4, "ngIf"], [3, "ngClass"], ["nz-row", "", 1, "widget-container-bar-btns"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cmacs-button", "", "aria-label", "collapse/expand", "role", "button", "ghost", "", 1, "log-action-btn", 3, "action", "click"], ["cmacsTooltipPlacement", "bottom", "cmacs-tooltip", "", "cmacsTooltipTitle", "collapse/expand"], [1, "widget-container-content"]], template: function CmacsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, CmacsSectionComponent_i_4_Template, 1, 1, "i", 4);
        i0.ɵɵelementStart(5, "span");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 2);
        i0.ɵɵtemplate(8, CmacsSectionComponent_div_8_Template, 4, 9, "div", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, CmacsSectionComponent_div_9_Template, 2, 0, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("nzSpan", ctx.widgetSpan);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.titleIcon);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.extra);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.collapsed);
    } }, directives: [i1.NzColDirective, i1.NzRowDirective, i2.NgIf, i2.NgClass, i2.NgTemplateOutlet, i3.CmacsButtonComponent, i4.CmacsTooltipDirective], styles: [".widget-container[_ngcontent-%COMP%]{border-top:3px solid #00cda1;padding:20px 40px 30px;margin-bottom:40px;background-color:#f6f7fb;box-shadow:0 2px 4px rgba(0,0,0,.1);border-radius:3px 3px 8px 8px}.widget-container-bar-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;vertical-align:sub}.widget-container-bar-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:8px;font-family:Roboto-Medium;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#3b3f46}.widget-container-bar[_ngcontent-%COMP%]{margin-bottom:20px}.widget-container-content[_ngcontent-%COMP%]{overflow-x:auto;overflow-y:hidden}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSectionComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-section',
                templateUrl: 'cmacs-section.component.html',
                styleUrls: ['cmacs-section.component.css'],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { extra: [{
            type: Input
        }], widgetSpan: [{
            type: Input
        }], title: [{
            type: Input
        }], titleIcon: [{
            type: Input
        }], showCollapse: [{
            type: Input
        }], extraData: [{
            type: Input
        }], collapsed: [{
            type: Input
        }], validate: [{
            type: Input
        }], onbeforecollapse: [{
            type: Output
        }], oncollapse: [{
            type: Output
        }], onbeforeexpand: [{
            type: Output
        }], onexpand: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc2VjdGlvbi9jbWFjcy1zZWN0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWN0aW9uL2NtYWNzLXNlY3Rpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFJeEIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNOYix1QkFBK0M7OztJQUExQiwwQ0FBcUI7OztJQUsxQyw2QkFBcUU7SUFBQSxZQUFXO0lBQUEsMEJBQWU7OztJQUExQixlQUFXO0lBQVgsa0NBQVc7Ozs7O0lBRGxGLDhCQUE0RDtJQUMxRCw4RkFBK0Y7SUFDL0Ysa0NBR2M7SUFGTiw4TEFBMkI7SUFHakMsd0JBQ3dEO0lBQzFELGlCQUFTO0lBQ1gsaUJBQU07OztJQVJXLGVBQXlCO0lBQXpCLCtDQUF5Qix5RUFBQTtJQUdoQyxlQUFlO0lBQWYsNkJBQWU7SUFFbEIsZUFBNkM7SUFBN0MsNkRBQTZDLGtEQUFBOzs7SUFNeEQsK0JBQTBEO0lBQ3hELGtCQUF5QjtJQUMzQixpQkFBTTs7O0FERlYsTUFBTSxPQUFPLHFCQUFxQjtJQWdCaEM7UUFiUyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVwQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIscUJBQWdCLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDOUQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hELG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRWhELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDTCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDdEUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0lBRUgsQ0FBQztJQUVELHFCQUFxQixDQUFDLE1BQWU7UUFDbkMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO2FBQzlCO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtJQUdILENBQUM7OzBGQW5EVSxxQkFBcUI7MERBQXJCLHFCQUFxQjs7UUNwQmxDLDhCQUEyRDtRQUN2RCw4QkFBaUY7UUFDL0UsOEJBQVk7UUFDViw4QkFBK0M7UUFDN0Msa0VBQStDO1FBQUEsNEJBQU07UUFBQSxZQUFTO1FBQUEsaUJBQU87UUFDdkUsaUJBQU07UUFDUixpQkFBTTtRQUNOLDhCQUFZO1FBQ1Ysc0VBU007UUFDUixpQkFBTTtRQUNSLGlCQUFNO1FBQ04sc0VBRU07UUFDUixpQkFBTTs7UUF2QkksdUNBQXFCO1FBSW5CLGVBQWU7UUFBZixvQ0FBZTtRQUFrQyxlQUFTO1FBQVQsK0JBQVM7UUFJbkQsZUFBVztRQUFYLGdDQUFXO1FBWXRCLGVBQWdCO1FBQWhCLHFDQUFnQjs7dUZEQWIscUJBQXFCO2NBUmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzFDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO3NDQUlVLEtBQUs7a0JBQWIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUVJLGdCQUFnQjtrQkFBekIsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU07WUFDRyxjQUFjO2tCQUF2QixNQUFNO1lBQ0csUUFBUTtrQkFBakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNlY3Rpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnY21hY3Mtc2VjdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2NtYWNzLXNlY3Rpb24uY29tcG9uZW50LmNzcyddLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ21hY3NTZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBleHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgd2lkZ2V0U3BhbiA9ICcyNCc7XHJcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcclxuICBASW5wdXQoKSB0aXRsZUljb24hOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2hvd0NvbGxhcHNlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBleHRyYURhdGEhOiBhbnk7XHJcbiAgQElucHV0KCkgY29sbGFwc2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdmFsaWRhdGUgPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIG9uYmVmb3JlY29sbGFwc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY29sbGFwc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uYmVmb3JlZXhwYW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmV4cGFuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZVNlY3Rpb24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMudmFsaWRhdGUpIHtcclxuICAgICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XHJcbiAgICAgIHRoaXMudHJpZ2dlckNvbGxhcHNlRXZlbnRzKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckNvbGxhcHNlRXZlbnRzKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuY29sbGFwc2VkICYmIGNoYW5nZXMuY29sbGFwc2VkLnByZXZpb3VzVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnRyaWdnZXJDb2xsYXBzZUV2ZW50cyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgdHJpZ2dlckNvbGxhcHNlRXZlbnRzKGJlZm9yZTogYm9vbGVhbikge1xyXG4gICAgaWYgKGJlZm9yZSkge1xyXG4gICAgICBpZiAodGhpcy5jb2xsYXBzZWQpIHtcclxuICAgICAgICB0aGlzLm9uYmVmb3JlZXhwYW5kLmVtaXQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9uYmVmb3JlY29sbGFwc2UuZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sbGFwc2VkKSB7XHJcbiAgICAgIHRoaXMub25jb2xsYXBzZS5lbWl0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uZXhwYW5kLmVtaXQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIndpZGdldFNwYW5cIiBjbGFzcz1cIndpZGdldC1jb250YWluZXJcIj5cclxuICAgIDxkaXYgbnotcm93IGNsYXNzPVwid2lkZ2V0LWNvbnRhaW5lci1iYXJcIiBuelR5cGU9XCJmbGV4XCIgbnpKdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICA8ZGl2IG56LWNvbD5cclxuICAgICAgICA8ZGl2IG56LXJvdyBjbGFzcz1cIndpZGdldC1jb250YWluZXItYmFyLXRpdGxlXCI+XHJcbiAgICAgICAgICA8aSAqbmdJZj1cInRpdGxlSWNvblwiIFtuZ0NsYXNzXT1cInRpdGxlSWNvblwiPjwvaT48c3Bhbj57e3RpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IG56LWNvbD5cclxuICAgICAgICA8ZGl2IG56LXJvdyAqbmdJZj1cImV4dHJhXCIgY2xhc3M9XCJ3aWRnZXQtY29udGFpbmVyLWJhci1idG5zXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZXh0cmE7IGNvbnRleHQ6IHsgZGF0YTogZXh0cmFEYXRhfVwiPnt7IGV4dHJhIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiBjbGFzcz1cImxvZy1hY3Rpb24tYnRuXCIgYXJpYS1sYWJlbD1cImNvbGxhcHNlL2V4cGFuZFwiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjb2xsYXBzZVNlY3Rpb24oKVwiIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBbYWN0aW9uXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBnaG9zdD5cclxuICAgICAgICAgICAgPGkgW2NsYXNzLmljb25BcnJvd1NtYWxsLUNoZXZyb24tVXBdPVwiY29sbGFwc2VkXCIgY21hY3NUb29sdGlwUGxhY2VtZW50PVwiYm90dG9tXCIgY21hY3MtdG9vbHRpcCBjbWFjc1Rvb2x0aXBUaXRsZT1cImNvbGxhcHNlL2V4cGFuZFwiXHJcbiAgICAgICAgICAgICAgIFtjbGFzcy5pY29uQXJyb3dTbWFsbC1DaGV2cm9uLURvd25dPVwiIWNvbGxhcHNlZFwiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cIiFjb2xsYXBzZWRcIiBjbGFzcz1cIndpZGdldC1jb250YWluZXItY29udGVudFwiID5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiJdfQ==