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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9saWIvbW9udGgtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9saWIvYWJzdHJhY3QtcGFuZWwtaGVhZGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd0RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7OztJQ2F2Qyw2QkFBaUQ7SUFDL0MsaUNBTUM7SUFEQyxzTUFBUyxlQUFBLHFCQUFrQixDQUFBLElBQUM7SUFFNUIsWUFDRjtJQUFBLGlCQUFTO0lBQ1gsMEJBQWU7OztJQVJYLGVBQWdDO0lBQWhDLG9DQUFnQztJQUQxQix5REFBaUM7SUFJdkMsNERBQW9DO0lBR3BDLGVBQ0Y7SUFERSxrREFDRjs7QURiTixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsbUJBQW1CO0lBQzNELFlBQW9CLFVBQTZCO1FBQy9DLEtBQUssRUFBRSxDQUFDO1FBRFUsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7SUFFakQsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPO1lBQ0w7Z0JBQ0UsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsWUFBWTtnQkFDeEMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtnQkFDN0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNoRztTQUNGLENBQUM7SUFDSixDQUFDO3FGQWRVLG9CQUFvQjtvRUFBcEIsb0JBQW9CO1lDbkJqQywyQkFBNkIsZ0JBQUE7WUFPekIsaUdBQVMsbUJBQWUsSUFBQztZQUV6QiwwQkFBZ0Q7WUFDbEQsaUJBQVM7WUFDVCxpQ0FPQztZQURDLGlHQUFTLGNBQVUsSUFBQztZQUVwQiwwQkFBMEM7WUFDNUMsaUJBQVM7WUFFVCwyQkFBa0M7WUFDaEMsdUZBVWU7WUFDakIsaUJBQU07WUFDTixpQ0FPQztZQURDLGlHQUFTLFVBQU0sSUFBQztZQUVoQiwwQkFBMEM7WUFDNUMsaUJBQVM7WUFDVCxpQ0FPQztZQURDLGlHQUFTLGVBQVcsSUFBQztZQUVyQiwyQkFBZ0Q7WUFDbEQsaUJBQVMsRUFBQTs7WUF0RE4sNEJBQXVCO1lBR3hCLGVBQXNDO1lBQXRDLCtEQUFzQztZQUR0Qyx3RUFBMkQ7WUFJM0QsMkRBQWtDO1lBT2xDLGVBQWdDO1lBQWhDLHlEQUFnQztZQURoQyxtRUFBc0Q7WUFHdEQsc0RBQTZCO1lBTzFCLGVBQTRCO1lBQTVCLHFEQUE0QjtZQUNJLGVBQVk7WUFBWix1Q0FBWTtZQWMvQyxlQUFnQztZQUFoQyx5REFBZ0M7WUFEaEMsb0VBQXVEO1lBSXZELGtEQUF5QjtZQU96QixlQUFzQztZQUF0QywrREFBc0M7WUFEdEMseUVBQTREO1lBSTVELHVEQUE4Qjs7O3VGRC9CckIsb0JBQW9CO2NBUGhDLFNBQVM7Z0NBQ08saUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTSxZQUNyQyxjQUFjLFlBQ2QsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBBYnN0cmFjdFBhbmVsSGVhZGVyIH0gZnJvbSAnLi9hYnN0cmFjdC1wYW5lbC1oZWFkZXInO1xyXG5pbXBvcnQgeyBQYW5lbFNlbGVjdG9yIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyB0cmFuc0NvbXBhdEZvcm1hdCB9IGZyb20gJy4vdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHNlbGVjdG9yOiAnbW9udGgtaGVhZGVyJywgLy8gdHNsaW50OmRpc2FibGUtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBleHBvcnRBczogJ21vbnRoSGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWJzdHJhY3QtcGFuZWwtaGVhZGVyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb250aEhlYWRlckNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0UGFuZWxIZWFkZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RvcnMoKTogUGFuZWxTZWxlY3RvcltdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS1tb250aC1idG5gLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLmxvY2FsZS55ZWFyU2VsZWN0LFxyXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hhbmdlTW9kZSgneWVhcicpLFxyXG4gICAgICAgIGxhYmVsOiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHRoaXMudmFsdWUubmF0aXZlRGF0ZSwgdHJhbnNDb21wYXRGb3JtYXQodGhpcy5sb2NhbGUueWVhckZvcm1hdCkpXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX1cIj5cclxuICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJyZXdpbmRcIlxyXG4gICAgW3N0eWxlLnZpc2liaWxpdHldPVwic2hvd1N1cGVyUHJlQnRuID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIlxyXG4gICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tc3VwZXItcHJldi1idG5cIlxyXG4gICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgIHRpdGxlPVwie3sgc3VwZXJQcmV2aW91c1RpdGxlKCkgfX1cIlxyXG4gICAgKGNsaWNrKT1cInN1cGVyUHJldmlvdXMoKVwiXHJcbiAgPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLXN1cGVyLXByZXYtaWNvblwiPjwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJwcmV2aW91c1wiXHJcbiAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJzaG93UHJlQnRuID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIlxyXG4gICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcHJldi1idG5cIlxyXG4gICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICB0aXRsZT1cInt7IHByZXZpb3VzVGl0bGUoKSB9fVwiXHJcbiAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgIChjbGljayk9XCJwcmV2aW91cygpXCJcclxuICA+XHJcbiAgICA8c3BhbiBjbGFzcz1cImFudC1waWNrZXItcHJldi1pY29uXCI+PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXZpZXdcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNlbGVjdG9yIG9mIHNlbGVjdG9yc1wiPlxyXG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJ7eyBzZWxlY3Rvci5sYWJlbCB9fVwiXHJcbiAgICAgICAgY2xhc3M9XCJ7eyBzZWxlY3Rvci5jbGFzc05hbWUgfX1cIlxyXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIHRpdGxlPVwie3sgc2VsZWN0b3IudGl0bGUgfHwgbnVsbCB9fVwiXHJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdG9yLm9uQ2xpY2soKVwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyBzZWxlY3Rvci5sYWJlbCB9fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4gIDxidXR0b24gYXJpYS1sYWJlbD1cIm5leHRcIlxyXG4gICAgW3N0eWxlLnZpc2liaWxpdHldPVwic2hvd05leHRCdG4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1uZXh0LWJ0blwiXHJcbiAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgdGl0bGU9XCJ7eyBuZXh0VGl0bGUoKSB9fVwiXHJcbiAgICAoY2xpY2spPVwibmV4dCgpXCJcclxuICA+XHJcbiAgICA8c3BhbiBjbGFzcz1cImFudC1waWNrZXItbmV4dC1pY29uXCI+PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxidXR0b24gYXJpYS1sYWJlbD1cImZhc3QgZm9yd2FyZFwiXHJcbiAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJzaG93U3VwZXJOZXh0QnRuID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIlxyXG4gICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tc3VwZXItbmV4dC1idG5cIlxyXG4gICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgIHRpdGxlPVwie3sgc3VwZXJOZXh0VGl0bGUoKSB9fVwiXHJcbiAgICAoY2xpY2spPVwic3VwZXJOZXh0KClcIlxyXG4gID5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXBpY2tlci1zdXBlci1uZXh0LWljb25cIj48L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbjwvZGl2PlxyXG4iXX0=