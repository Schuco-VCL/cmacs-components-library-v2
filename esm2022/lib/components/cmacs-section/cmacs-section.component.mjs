import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/grid";
import * as i3 from "../cmacs-tooltip/tooltip";
import * as i4 from "../cmacs-button/cmacs-button.component";
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
    i0.ɵɵlistener("click", function CmacsSectionComponent_div_8_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.collapseSection()); });
    i0.ɵɵelement(3, "i", 11);
    i0.ɵɵelementEnd()();
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
    static { this.ɵfac = function CmacsSectionComponent_Factory(t) { return new (t || CmacsSectionComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsSectionComponent, selectors: [["cmacs-section"]], inputs: { extra: "extra", widgetSpan: "widgetSpan", title: "title", titleIcon: "titleIcon", showCollapse: "showCollapse", extraData: "extraData", collapsed: "collapsed", validate: "validate" }, outputs: { onbeforecollapse: "onbeforecollapse", oncollapse: "oncollapse", onbeforeexpand: "onbeforeexpand", onexpand: "onexpand" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 10, vars: 5, consts: [["nz-col", "", 1, "widget-container", 3, "nzSpan"], ["nz-row", "", "nzType", "flex", "nzJustify", "space-between", 1, "widget-container-bar"], ["nz-col", ""], ["nz-row", "", 1, "widget-container-bar-title"], [3, "ngClass", 4, "ngIf"], ["nz-row", "", "class", "widget-container-bar-btns", 4, "ngIf"], ["class", "widget-container-content", 4, "ngIf"], [3, "ngClass"], ["nz-row", "", 1, "widget-container-bar-btns"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cmacs-button", "", "aria-label", "collapse/expand", "role", "button", "ghost", "", 1, "log-action-btn", 3, "action", "click"], ["cmacsTooltipPlacement", "bottom", "cmacs-tooltip", "", "cmacsTooltipTitle", "collapse/expand"], [1, "widget-container-content"]], template: function CmacsSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵtemplate(4, CmacsSectionComponent_i_4_Template, 1, 1, "i", 4);
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "div", 2);
            i0.ɵɵtemplate(8, CmacsSectionComponent_div_8_Template, 4, 9, "div", 5);
            i0.ɵɵelementEnd()();
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
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgTemplateOutlet, i2.NzColDirective, i2.NzRowDirective, i3.CmacsTooltipDirective, i4.CmacsButtonComponent], styles: [".widget-container[_ngcontent-%COMP%]{border-top:3px solid #00cda1;padding:20px 40px 30px;margin-bottom:40px;background-color:#f6f7fb;box-shadow:0 2px 4px #0000001a;border-radius:3px 3px 8px 8px}.widget-container-bar-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;vertical-align:sub}.widget-container-bar-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:8px;font-family:Roboto-Medium;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#3b3f46}.widget-container-bar[_ngcontent-%COMP%]{margin-bottom:20px}.widget-container-content[_ngcontent-%COMP%]{overflow-x:auto;overflow-y:hidden}"], changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSectionComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-section', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div nz-col [nzSpan]=\"widgetSpan\" class=\"widget-container\">\r\n    <div nz-row class=\"widget-container-bar\" nzType=\"flex\" nzJustify=\"space-between\">\r\n      <div nz-col>\r\n        <div nz-row class=\"widget-container-bar-title\">\r\n          <i *ngIf=\"titleIcon\" [ngClass]=\"titleIcon\"></i><span>{{title}}</span>\r\n        </div>\r\n      </div>\r\n      <div nz-col>\r\n        <div nz-row *ngIf=\"extra\" class=\"widget-container-bar-btns\">\r\n          <ng-container *ngTemplateOutlet=\"extra; context: { data: extraData}\">{{ extra }}</ng-container>\r\n          <button cmacs-button class=\"log-action-btn\" aria-label=\"collapse/expand\"\r\n                  (click)=\"collapseSection()\" role=\"button\"\r\n                  [action]=\"true\"\r\n                  ghost>\r\n            <i [class.iconArrowSmall-Chevron-Up]=\"collapsed\" cmacsTooltipPlacement=\"bottom\" cmacs-tooltip cmacsTooltipTitle=\"collapse/expand\"\r\n               [class.iconArrowSmall-Chevron-Down]=\"!collapsed\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!collapsed\" class=\"widget-container-content\" >\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n", styles: [".widget-container{border-top:3px solid #00cda1;padding:20px 40px 30px;margin-bottom:40px;background-color:#f6f7fb;box-shadow:0 2px 4px #0000001a;border-radius:3px 3px 8px 8px}.widget-container-bar-title i{font-size:20px;vertical-align:sub}.widget-container-bar-title span{margin-left:8px;font-family:Roboto-Medium;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#3b3f46}.widget-container-bar{margin-bottom:20px}.widget-container-content{overflow-x:auto;overflow-y:hidden}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc2VjdGlvbi9jbWFjcy1zZWN0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWN0aW9uL2NtYWNzLXNlY3Rpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFJeEIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNOYix1QkFBK0M7OztJQUExQiwwQ0FBcUI7OztJQUsxQyw2QkFBcUU7SUFBQSxZQUFXO0lBQUEsMEJBQWU7OztJQUExQixlQUFXO0lBQVgsa0NBQVc7Ozs7O0lBRGxGLDhCQUE0RDtJQUMxRCw4RkFBK0Y7SUFDL0Ysa0NBR2M7SUFGTixrS0FBUyxlQUFBLHdCQUFpQixDQUFBLElBQUM7SUFHakMsd0JBQ3dEO0lBQzFELGlCQUFTLEVBQUE7OztJQVBNLGVBQXlCO0lBQXpCLCtDQUF5Qix5RUFBQTtJQUdoQyxlQUFlO0lBQWYsNkJBQWU7SUFFbEIsZUFBNkM7SUFBN0MsNkRBQTZDLGtEQUFBOzs7SUFNeEQsK0JBQTBEO0lBQ3hELGtCQUF5QjtJQUMzQixpQkFBTTs7O0FERlYsTUFBTSxPQUFPLHFCQUFxQjtJQWdCaEM7UUFiUyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVwQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIscUJBQWdCLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDOUQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hELG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRWhELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDTCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDdEUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0lBRUgsQ0FBQztJQUVELHFCQUFxQixDQUFDLE1BQWU7UUFDbkMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO2FBQzlCO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtJQUdILENBQUM7c0ZBbkRVLHFCQUFxQjtvRUFBckIscUJBQXFCOztZQ3BCbEMsOEJBQTJELGFBQUEsYUFBQSxhQUFBO1lBSWpELGtFQUErQztZQUFBLDRCQUFNO1lBQUEsWUFBUztZQUFBLGlCQUFPLEVBQUEsRUFBQTtZQUd6RSw4QkFBWTtZQUNWLHNFQVNNO1lBQ1IsaUJBQU0sRUFBQTtZQUVSLHNFQUVNO1lBQ1IsaUJBQU07O1lBdkJJLHVDQUFxQjtZQUluQixlQUFlO1lBQWYsb0NBQWU7WUFBa0MsZUFBUztZQUFULCtCQUFTO1lBSW5ELGVBQVc7WUFBWCxnQ0FBVztZQVl0QixlQUFnQjtZQUFoQixxQ0FBZ0I7Ozt1RkRBYixxQkFBcUI7Y0FSakMsU0FBUzsyQkFDRSxlQUFlLHVCQUdKLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTTtzQ0FLdEMsS0FBSztrQkFBYixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBRUksZ0JBQWdCO2tCQUF6QixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTTtZQUNHLGNBQWM7a0JBQXZCLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc2VjdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdjbWFjcy1zZWN0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY21hY3Mtc2VjdGlvbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB3aWRnZXRTcGFuID0gJzI0JztcclxuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHRpdGxlSWNvbiE6IHN0cmluZztcclxuICBASW5wdXQoKSBzaG93Q29sbGFwc2UgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGV4dHJhRGF0YSE6IGFueTtcclxuICBASW5wdXQoKSBjb2xsYXBzZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB2YWxpZGF0ZSA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgb25iZWZvcmVjb2xsYXBzZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jb2xsYXBzZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25iZWZvcmVleHBhbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uZXhwYW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGNvbGxhcHNlU2VjdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy52YWxpZGF0ZSkge1xyXG4gICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcclxuICAgICAgdGhpcy50cmlnZ2VyQ29sbGFwc2VFdmVudHMoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50cmlnZ2VyQ29sbGFwc2VFdmVudHModHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5jb2xsYXBzZWQgJiYgY2hhbmdlcy5jb2xsYXBzZWQucHJldmlvdXNWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckNvbGxhcHNlRXZlbnRzKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyQ29sbGFwc2VFdmVudHMoYmVmb3JlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoYmVmb3JlKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbGxhcHNlZCkge1xyXG4gICAgICAgIHRoaXMub25iZWZvcmVleHBhbmQuZW1pdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub25iZWZvcmVjb2xsYXBzZS5lbWl0KCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5jb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5vbmNvbGxhcHNlLmVtaXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25leHBhbmQuZW1pdCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgbnotY29sIFtuelNwYW5dPVwid2lkZ2V0U3BhblwiIGNsYXNzPVwid2lkZ2V0LWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBuei1yb3cgY2xhc3M9XCJ3aWRnZXQtY29udGFpbmVyLWJhclwiIG56VHlwZT1cImZsZXhcIiBuekp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgIDxkaXYgbnotY29sPlxyXG4gICAgICAgIDxkaXYgbnotcm93IGNsYXNzPVwid2lkZ2V0LWNvbnRhaW5lci1iYXItdGl0bGVcIj5cclxuICAgICAgICAgIDxpICpuZ0lmPVwidGl0bGVJY29uXCIgW25nQ2xhc3NdPVwidGl0bGVJY29uXCI+PC9pPjxzcGFuPnt7dGl0bGV9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgbnotY29sPlxyXG4gICAgICAgIDxkaXYgbnotcm93ICpuZ0lmPVwiZXh0cmFcIiBjbGFzcz1cIndpZGdldC1jb250YWluZXItYmFyLWJ0bnNcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJleHRyYTsgY29udGV4dDogeyBkYXRhOiBleHRyYURhdGF9XCI+e3sgZXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxidXR0b24gY21hY3MtYnV0dG9uIGNsYXNzPVwibG9nLWFjdGlvbi1idG5cIiBhcmlhLWxhYmVsPVwiY29sbGFwc2UvZXhwYW5kXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNvbGxhcHNlU2VjdGlvbigpXCIgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIFthY3Rpb25dPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGdob3N0PlxyXG4gICAgICAgICAgICA8aSBbY2xhc3MuaWNvbkFycm93U21hbGwtQ2hldnJvbi1VcF09XCJjb2xsYXBzZWRcIiBjbWFjc1Rvb2x0aXBQbGFjZW1lbnQ9XCJib3R0b21cIiBjbWFjcy10b29sdGlwIGNtYWNzVG9vbHRpcFRpdGxlPVwiY29sbGFwc2UvZXhwYW5kXCJcclxuICAgICAgICAgICAgICAgW2NsYXNzLmljb25BcnJvd1NtYWxsLUNoZXZyb24tRG93bl09XCIhY29sbGFwc2VkXCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiIWNvbGxhcHNlZFwiIGNsYXNzPVwid2lkZ2V0LWNvbnRhaW5lci1jb250ZW50XCIgPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIl19