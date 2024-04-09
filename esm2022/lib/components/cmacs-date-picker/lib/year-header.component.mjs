/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractPanelHeader } from './abstract-panel-header';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function YearHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 9);
    i0.ɵɵlistener("click", function YearHeaderComponent_ng_container_6_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const selector_r1 = restoredCtx.$implicit; return i0.ɵɵresetView(selector_r1.onClick()); });
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
export class YearHeaderComponent extends AbstractPanelHeader {
    get startYear() {
        return parseInt(`${this.value.getYear() / 10}`, 10) * 10;
    }
    get endYear() {
        return this.startYear + 9;
    }
    superPrevious() {
        this.changeValue(this.value.addYears(-10));
    }
    superNext() {
        this.changeValue(this.value.addYears(10));
    }
    getSelectors() {
        return [
            {
                className: `${this.prefixCls}-year-btn`,
                title: '',
                onClick: () => this.changeMode('decade'),
                label: `${this.startYear}-${this.endYear}`
            }
        ];
    }
    static { this.ɵfac = /*@__PURE__*/ function () { let ɵYearHeaderComponent_BaseFactory; return function YearHeaderComponent_Factory(t) { return (ɵYearHeaderComponent_BaseFactory || (ɵYearHeaderComponent_BaseFactory = i0.ɵɵgetInheritedFactory(YearHeaderComponent)))(t || YearHeaderComponent); }; }(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: YearHeaderComponent, selectors: [["year-header"]], exportAs: ["yearHeader"], features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 31, consts: [["aria-label", "rewind", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], ["aria-label", "previous", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], ["aria-label", "next", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-next-icon"], ["aria-label", "fast forward", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "aria-label", "title", "click"]], template: function YearHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "button", 0);
            i0.ɵɵlistener("click", function YearHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
            i0.ɵɵelement(2, "span", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 2);
            i0.ɵɵlistener("click", function YearHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
            i0.ɵɵelement(4, "span", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div");
            i0.ɵɵtemplate(6, YearHeaderComponent_ng_container_6_Template, 3, 6, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵlistener("click", function YearHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
            i0.ɵɵelement(8, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 7);
            i0.ɵɵlistener("click", function YearHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
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
        } }, dependencies: [i1.NgForOf], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(YearHeaderComponent, [{
        type: Component,
        args: [{ encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: 'year-header', exportAs: 'yearHeader', template: "<div class=\"{{ prefixCls }}\">\r\n  <button aria-label=\"rewind\"\r\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\r\n    class=\"{{ prefixCls }}-super-prev-btn\"\r\n    role=\"button\"\r\n    tabindex=\"-1\"\r\n    title=\"{{ superPreviousTitle() }}\"\r\n    (click)=\"superPrevious()\"\r\n  >\r\n    <span class=\"ant-picker-super-prev-icon\"></span>\r\n  </button>\r\n  <button aria-label=\"previous\"\r\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\r\n    class=\"{{ prefixCls }}-prev-btn\"\r\n    role=\"button\"\r\n    title=\"{{ previousTitle() }}\"\r\n    tabindex=\"-1\"\r\n    (click)=\"previous()\"\r\n  >\r\n    <span class=\"ant-picker-prev-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"{{ prefixCls }}-view\">\r\n    <ng-container *ngFor=\"let selector of selectors\">\r\n      <button aria-label=\"{{ selector.label }}\"\r\n        class=\"{{ selector.className }}\"\r\n        role=\"button\"\r\n        type=\"button\"\r\n        title=\"{{ selector.title || null }}\"\r\n        (click)=\"selector.onClick()\"\r\n      >\r\n        {{ selector.label }}\r\n      </button>\r\n    </ng-container>\r\n  </div>\r\n  <button aria-label=\"next\"\r\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\r\n    class=\"{{ prefixCls }}-next-btn\"\r\n    role=\"button\"\r\n    tabindex=\"-1\"\r\n    title=\"{{ nextTitle() }}\"\r\n    (click)=\"next()\"\r\n  >\r\n    <span class=\"ant-picker-next-icon\"></span>\r\n  </button>\r\n  <button aria-label=\"fast forward\"\r\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\r\n    class=\"{{ prefixCls }}-super-next-btn\"\r\n    role=\"button\"\r\n    tabindex=\"-1\"\r\n    title=\"{{ superNextTitle() }}\"\r\n    (click)=\"superNext()\"\r\n  >\r\n    <span class=\"ant-picker-super-next-icon\"></span>\r\n  </button>\r\n</div>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2xpYi95ZWFyLWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2Fic3RyYWN0LXBhbmVsLWhlYWRlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0lDaUIxRCw2QkFBaUQ7SUFDL0MsaUNBTUM7SUFEQyxxTUFBUyxlQUFBLHFCQUFrQixDQUFBLElBQUM7SUFFNUIsWUFDRjtJQUFBLGlCQUFTO0lBQ1gsMEJBQWU7OztJQVJYLGVBQWdDO0lBQWhDLG9DQUFnQztJQUQxQix5REFBaUM7SUFJdkMsNERBQW9DO0lBR3BDLGVBQ0Y7SUFERSxrREFDRjs7QURoQk4sTUFBTSxPQUFPLG1CQUFvQixTQUFRLG1CQUFtQjtJQUMxRCxJQUFJLFNBQVM7UUFDWCxPQUFPLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzNELENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPO1lBQ0w7Z0JBQ0UsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsV0FBVztnQkFDdkMsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO2dCQUN4QyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7YUFDM0M7U0FDRixDQUFDO0lBQ0osQ0FBQztxUEExQlUsbUJBQW1CLFNBQW5CLG1CQUFtQjtvRUFBbkIsbUJBQW1CO1lDaEJoQywyQkFBNkIsZ0JBQUE7WUFPekIsZ0dBQVMsbUJBQWUsSUFBQztZQUV6QiwwQkFBZ0Q7WUFDbEQsaUJBQVM7WUFDVCxpQ0FPQztZQURDLGdHQUFTLGNBQVUsSUFBQztZQUVwQiwwQkFBMEM7WUFDNUMsaUJBQVM7WUFFVCwyQkFBa0M7WUFDaEMsc0ZBVWU7WUFDakIsaUJBQU07WUFDTixpQ0FPQztZQURDLGdHQUFTLFVBQU0sSUFBQztZQUVoQiwwQkFBMEM7WUFDNUMsaUJBQVM7WUFDVCxpQ0FPQztZQURDLGdHQUFTLGVBQVcsSUFBQztZQUVyQiwyQkFBZ0Q7WUFDbEQsaUJBQVMsRUFBQTs7WUF0RE4sNEJBQXVCO1lBR3hCLGVBQXNDO1lBQXRDLCtEQUFzQztZQUR0Qyx3RUFBMkQ7WUFJM0QsMkRBQWtDO1lBT2xDLGVBQWdDO1lBQWhDLHlEQUFnQztZQURoQyxtRUFBc0Q7WUFHdEQsc0RBQTZCO1lBTzFCLGVBQTRCO1lBQTVCLHFEQUE0QjtZQUNJLGVBQVk7WUFBWix1Q0FBWTtZQWMvQyxlQUFnQztZQUFoQyx5REFBZ0M7WUFEaEMsb0VBQXVEO1lBSXZELGtEQUF5QjtZQU96QixlQUFzQztZQUF0QywrREFBc0M7WUFEdEMseUVBQTREO1lBSTVELHVEQUE4Qjs7O3VGRGxDckIsbUJBQW1CO2NBUC9CLFNBQVM7Z0NBQ08saUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTSxZQUNyQyxhQUFhLFlBQ2IsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdFBhbmVsSGVhZGVyIH0gZnJvbSAnLi9hYnN0cmFjdC1wYW5lbC1oZWFkZXInO1xyXG5pbXBvcnQgeyBQYW5lbFNlbGVjdG9yIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ3llYXItaGVhZGVyJywgLy8gdHNsaW50OmRpc2FibGUtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBleHBvcnRBczogJ3llYXJIZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hYnN0cmFjdC1wYW5lbC1oZWFkZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFllYXJIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFBhbmVsSGVhZGVyIHtcclxuICBnZXQgc3RhcnRZZWFyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQoYCR7dGhpcy52YWx1ZS5nZXRZZWFyKCkgLyAxMH1gLCAxMCkgKiAxMDtcclxuICB9XHJcblxyXG4gIGdldCBlbmRZZWFyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGFydFllYXIgKyA5O1xyXG4gIH1cclxuXHJcbiAgc3VwZXJQcmV2aW91cygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy52YWx1ZS5hZGRZZWFycygtMTApKTtcclxuICB9XHJcblxyXG4gIHN1cGVyTmV4dCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy52YWx1ZS5hZGRZZWFycygxMCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0b3JzKCk6IFBhbmVsU2VsZWN0b3JbXSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByZWZpeENsc30teWVhci1idG5gLFxyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNoYW5nZU1vZGUoJ2RlY2FkZScpLFxyXG4gICAgICAgIGxhYmVsOiBgJHt0aGlzLnN0YXJ0WWVhcn0tJHt0aGlzLmVuZFllYXJ9YFxyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19XCI+XHJcbiAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwicmV3aW5kXCJcclxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dTdXBlclByZUJ0biA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcclxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXN1cGVyLXByZXYtYnRuXCJcclxuICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICB0aXRsZT1cInt7IHN1cGVyUHJldmlvdXNUaXRsZSgpIH19XCJcclxuICAgIChjbGljayk9XCJzdXBlclByZXZpb3VzKClcIlxyXG4gID5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXBpY2tlci1zdXBlci1wcmV2LWljb25cIj48L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbiAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwicHJldmlvdXNcIlxyXG4gICAgW3N0eWxlLnZpc2liaWxpdHldPVwic2hvd1ByZUJ0biA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcclxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXByZXYtYnRuXCJcclxuICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgdGl0bGU9XCJ7eyBwcmV2aW91c1RpdGxlKCkgfX1cIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAoY2xpY2spPVwicHJldmlvdXMoKVwiXHJcbiAgPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLXByZXYtaWNvblwiPjwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS12aWV3XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzZWxlY3RvciBvZiBzZWxlY3RvcnNcIj5cclxuICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwie3sgc2VsZWN0b3IubGFiZWwgfX1cIlxyXG4gICAgICAgIGNsYXNzPVwie3sgc2VsZWN0b3IuY2xhc3NOYW1lIH19XCJcclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICB0aXRsZT1cInt7IHNlbGVjdG9yLnRpdGxlIHx8IG51bGwgfX1cIlxyXG4gICAgICAgIChjbGljayk9XCJzZWxlY3Rvci5vbkNsaWNrKClcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgc2VsZWN0b3IubGFiZWwgfX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJuZXh0XCJcclxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dOZXh0QnRuID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIlxyXG4gICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tbmV4dC1idG5cIlxyXG4gICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgIHRpdGxlPVwie3sgbmV4dFRpdGxlKCkgfX1cIlxyXG4gICAgKGNsaWNrKT1cIm5leHQoKVwiXHJcbiAgPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLW5leHQtaWNvblwiPjwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJmYXN0IGZvcndhcmRcIlxyXG4gICAgW3N0eWxlLnZpc2liaWxpdHldPVwic2hvd1N1cGVyTmV4dEJ0biA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcclxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXN1cGVyLW5leHQtYnRuXCJcclxuICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICB0aXRsZT1cInt7IHN1cGVyTmV4dFRpdGxlKCkgfX1cIlxyXG4gICAgKGNsaWNrKT1cInN1cGVyTmV4dCgpXCJcclxuICA+XHJcbiAgICA8c3BhbiBjbGFzcz1cImFudC1waWNrZXItc3VwZXItbmV4dC1pY29uXCI+PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuIl19