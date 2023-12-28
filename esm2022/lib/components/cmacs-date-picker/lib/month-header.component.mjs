/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractPanelHeader } from './abstract-panel-header';
import { transCompatFormat } from './util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
function MonthHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 9);
    i0.ɵɵlistener("click", function MonthHeaderComponent_ng_container_6_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const selector_r1 = restoredCtx.$implicit; return i0.ɵɵresetView(selector_r1.onClick()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const selector_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(selector_r1.className);
    i0.ɵɵpropertyInterpolate("aria-label", selector_r1.label);
    i0.ɵɵpropertyInterpolate("title", selector_r1.title || null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", selector_r1.label, " ");
} }
export class MonthHeaderComponent extends AbstractPanelHeader {
    constructor(dateHelper) {
        super();
        this.dateHelper = dateHelper;
    }
    getSelectors() {
        return [
            {
                className: `${this.prefixCls}-month-btn`,
                title: this.locale.yearSelect,
                onClick: () => this.changeMode('year'),
                label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
            }
        ];
    }
    static { this.ɵfac = function MonthHeaderComponent_Factory(t) { return new (t || MonthHeaderComponent)(i0.ɵɵdirectiveInject(i1.DateHelperService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MonthHeaderComponent, selectors: [["month-header"]], exportAs: ["monthHeader"], features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 31, consts: [["aria-label", "rewind", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], ["aria-label", "previous", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], ["aria-label", "next", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-next-icon"], ["aria-label", "fast forward", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "aria-label", "title", "click"]], template: function MonthHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "button", 0);
            i0.ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
            i0.ɵɵelement(2, "span", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 2);
            i0.ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
            i0.ɵɵelement(4, "span", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div");
            i0.ɵɵtemplate(6, MonthHeaderComponent_ng_container_6_Template, 3, 6, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
            i0.ɵɵelement(8, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 7);
            i0.ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
            i0.ɵɵelement(10, "span", 8);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.prefixCls);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
            i0.ɵɵstyleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
            i0.ɵɵpropertyInterpolate("title", ctx.superPreviousTitle());
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-btn");
            i0.ɵɵstyleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
            i0.ɵɵpropertyInterpolate("title", ctx.previousTitle());
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-view");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.selectors);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-btn");
            i0.ɵɵstyleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
            i0.ɵɵpropertyInterpolate("title", ctx.nextTitle());
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
            i0.ɵɵstyleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
            i0.ɵɵpropertyInterpolate("title", ctx.superNextTitle());
        } }, dependencies: [i2.NgForOf], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MonthHeaderComponent, [{
        type: Component,
        args: [{ encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: 'month-header', exportAs: 'monthHeader', template: "<div class=\"{{ prefixCls }}\">\r\n  <button aria-label=\"rewind\"\r\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\r\n    class=\"{{ prefixCls }}-super-prev-btn\"\r\n    role=\"button\"\r\n    tabindex=\"-1\"\r\n    title=\"{{ superPreviousTitle() }}\"\r\n    (click)=\"superPrevious()\"\r\n  >\r\n    <span class=\"ant-picker-super-prev-icon\"></span>\r\n  </button>\r\n  <button aria-label=\"previous\"\r\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\r\n    class=\"{{ prefixCls }}-prev-btn\"\r\n    role=\"button\"\r\n    title=\"{{ previousTitle() }}\"\r\n    tabindex=\"-1\"\r\n    (click)=\"previous()\"\r\n  >\r\n    <span class=\"ant-picker-prev-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"{{ prefixCls }}-view\">\r\n    <ng-container *ngFor=\"let selector of selectors\">\r\n      <button aria-label=\"{{ selector.label }}\"\r\n        class=\"{{ selector.className }}\"\r\n        role=\"button\"\r\n        type=\"button\"\r\n        title=\"{{ selector.title || null }}\"\r\n        (click)=\"selector.onClick()\"\r\n      >\r\n        {{ selector.label }}\r\n      </button>\r\n    </ng-container>\r\n  </div>\r\n  <button aria-label=\"next\"\r\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\r\n    class=\"{{ prefixCls }}-next-btn\"\r\n    role=\"button\"\r\n    tabindex=\"-1\"\r\n    title=\"{{ nextTitle() }}\"\r\n    (click)=\"next()\"\r\n  >\r\n    <span class=\"ant-picker-next-icon\"></span>\r\n  </button>\r\n  <button aria-label=\"fast forward\"\r\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\r\n    class=\"{{ prefixCls }}-super-next-btn\"\r\n    role=\"button\"\r\n    tabindex=\"-1\"\r\n    title=\"{{ superNextTitle() }}\"\r\n    (click)=\"superNext()\"\r\n  >\r\n    <span class=\"ant-picker-super-next-icon\"></span>\r\n  </button>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.DateHelperService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9saWIvbW9udGgtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9saWIvYWJzdHJhY3QtcGFuZWwtaGVhZGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd0RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7OztJQ2F2Qyw2QkFBaUQ7SUFDL0MsaUNBTUM7SUFEQyxzTUFBUyxlQUFBLHFCQUFrQixDQUFBLElBQUM7SUFFNUIsWUFDRjtJQUFBLGlCQUFTO0lBQ1gsMEJBQWU7OztJQVJYLGVBQWdDO0lBQWhDLG9DQUFnQztJQUQxQix5REFBaUM7SUFJdkMsNERBQW9DO0lBR3BDLGVBQ0Y7SUFERSxrREFDRjs7QURiTixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsbUJBQW1CO0lBQzNELFlBQW9CLFVBQTZCO1FBQy9DLEtBQUssRUFBRSxDQUFDO1FBRFUsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7SUFFakQsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPO1lBQ0w7Z0JBQ0UsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsWUFBWTtnQkFDeEMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtnQkFDN0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNoRztTQUNGLENBQUM7SUFDSixDQUFDO3FGQWRVLG9CQUFvQjtvRUFBcEIsb0JBQW9CO1lDbkJqQywyQkFBNkIsZ0JBQUE7WUFPekIsaUdBQVMsbUJBQWUsSUFBQztZQUV6QiwwQkFBZ0Q7WUFDbEQsaUJBQVM7WUFDVCxpQ0FPQztZQURDLGlHQUFTLGNBQVUsSUFBQztZQUVwQiwwQkFBMEM7WUFDNUMsaUJBQVM7WUFFVCwyQkFBa0M7WUFDaEMsdUZBVWU7WUFDakIsaUJBQU07WUFDTixpQ0FPQztZQURDLGlHQUFTLFVBQU0sSUFBQztZQUVoQiwwQkFBMEM7WUFDNUMsaUJBQVM7WUFDVCxpQ0FPQztZQURDLGlHQUFTLGVBQVcsSUFBQztZQUVyQiwyQkFBZ0Q7WUFDbEQsaUJBQVMsRUFBQTs7WUF0RE4sNEJBQXVCO1lBR3hCLGVBQXNDO1lBQXRDLCtEQUFzQztZQUR0Qyx3RUFBMkQ7WUFJM0QsMkRBQWtDO1lBT2xDLGVBQWdDO1lBQWhDLHlEQUFnQztZQURoQyxtRUFBc0Q7WUFHdEQsc0RBQTZCO1lBTzFCLGVBQTRCO1lBQTVCLHFEQUE0QjtZQUNJLGVBQVk7WUFBWix1Q0FBWTtZQWMvQyxlQUFnQztZQUFoQyx5REFBZ0M7WUFEaEMsb0VBQXVEO1lBSXZELGtEQUF5QjtZQU96QixlQUFzQztZQUF0QywrREFBc0M7WUFEdEMseUVBQTREO1lBSTVELHVEQUE4Qjs7O3VGRC9CckIsb0JBQW9CO2NBUGhDLFNBQVM7Z0NBQ08saUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTSxZQUNyQyxjQUFjLFlBQ2QsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IEFic3RyYWN0UGFuZWxIZWFkZXIgfSBmcm9tICcuL2Fic3RyYWN0LXBhbmVsLWhlYWRlcic7XG5pbXBvcnQgeyBQYW5lbFNlbGVjdG9yIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdHJhbnNDb21wYXRGb3JtYXQgfSBmcm9tICcuL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAnbW9udGgtaGVhZGVyJywgLy8gdHNsaW50OmRpc2FibGUtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgZXhwb3J0QXM6ICdtb250aEhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hYnN0cmFjdC1wYW5lbC1oZWFkZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFBhbmVsSGVhZGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXRTZWxlY3RvcnMoKTogUGFuZWxTZWxlY3RvcltdIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS1tb250aC1idG5gLFxuICAgICAgICB0aXRsZTogdGhpcy5sb2NhbGUueWVhclNlbGVjdCxcbiAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5jaGFuZ2VNb2RlKCd5ZWFyJyksXG4gICAgICAgIGxhYmVsOiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHRoaXMudmFsdWUubmF0aXZlRGF0ZSwgdHJhbnNDb21wYXRGb3JtYXQodGhpcy5sb2NhbGUueWVhckZvcm1hdCkpXG4gICAgICB9XG4gICAgXTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fVwiPlxyXG4gIDxidXR0b24gYXJpYS1sYWJlbD1cInJld2luZFwiXHJcbiAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJzaG93U3VwZXJQcmVCdG4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1zdXBlci1wcmV2LWJ0blwiXHJcbiAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgdGl0bGU9XCJ7eyBzdXBlclByZXZpb3VzVGl0bGUoKSB9fVwiXHJcbiAgICAoY2xpY2spPVwic3VwZXJQcmV2aW91cygpXCJcclxuICA+XHJcbiAgICA8c3BhbiBjbGFzcz1cImFudC1waWNrZXItc3VwZXItcHJldi1pY29uXCI+PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxidXR0b24gYXJpYS1sYWJlbD1cInByZXZpb3VzXCJcclxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dQcmVCdG4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wcmV2LWJ0blwiXHJcbiAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgIHRpdGxlPVwie3sgcHJldmlvdXNUaXRsZSgpIH19XCJcclxuICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgKGNsaWNrKT1cInByZXZpb3VzKClcIlxyXG4gID5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXBpY2tlci1wcmV2LWljb25cIj48L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tdmlld1wiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2VsZWN0b3Igb2Ygc2VsZWN0b3JzXCI+XHJcbiAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cInt7IHNlbGVjdG9yLmxhYmVsIH19XCJcclxuICAgICAgICBjbGFzcz1cInt7IHNlbGVjdG9yLmNsYXNzTmFtZSB9fVwiXHJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgdGl0bGU9XCJ7eyBzZWxlY3Rvci50aXRsZSB8fCBudWxsIH19XCJcclxuICAgICAgICAoY2xpY2spPVwic2VsZWN0b3Iub25DbGljaygpXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IHNlbGVjdG9yLmxhYmVsIH19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbiAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwibmV4dFwiXHJcbiAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJzaG93TmV4dEJ0biA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcclxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW5leHQtYnRuXCJcclxuICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICB0aXRsZT1cInt7IG5leHRUaXRsZSgpIH19XCJcclxuICAgIChjbGljayk9XCJuZXh0KClcIlxyXG4gID5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXBpY2tlci1uZXh0LWljb25cIj48L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbiAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwiZmFzdCBmb3J3YXJkXCJcclxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dTdXBlck5leHRCdG4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1zdXBlci1uZXh0LWJ0blwiXHJcbiAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgdGl0bGU9XCJ7eyBzdXBlck5leHRUaXRsZSgpIH19XCJcclxuICAgIChjbGljayk9XCJzdXBlck5leHQoKVwiXHJcbiAgPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLXN1cGVyLW5leHQtaWNvblwiPjwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuPC9kaXY+XHJcbiJdfQ==