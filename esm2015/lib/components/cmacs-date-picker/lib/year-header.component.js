/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractPanelHeader } from './abstract-panel-header';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function YearHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 6);
    i0.ɵɵlistener("click", function YearHeaderComponent_ng_container_6_Template_button_click_1_listener() { const selector_r1 = ctx.$implicit; return selector_r1.onClick(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const selector_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(selector_r1.className);
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
}
YearHeaderComponent.ɵfac = function YearHeaderComponent_Factory(t) { return ɵYearHeaderComponent_BaseFactory(t || YearHeaderComponent); };
YearHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: YearHeaderComponent, selectors: [["year-header"]], exportAs: ["yearHeader"], features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 31, consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]], template: function YearHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "button", 0);
        i0.ɵɵlistener("click", function YearHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
        i0.ɵɵelement(2, "span", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 0);
        i0.ɵɵlistener("click", function YearHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
        i0.ɵɵelement(4, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵtemplate(6, YearHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 0);
        i0.ɵɵlistener("click", function YearHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
        i0.ɵɵelement(8, "span", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 0);
        i0.ɵɵlistener("click", function YearHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
        i0.ɵɵelement(10, "span", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
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
    } }, directives: [i1.NgForOf], encapsulation: 2, changeDetection: 0 });
const ɵYearHeaderComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(YearHeaderComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(YearHeaderComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'year-header',
                exportAs: 'yearHeader',
                templateUrl: './abstract-panel-header.html'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2xpYi95ZWFyLWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2Fic3RyYWN0LXBhbmVsLWhlYWRlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7SUNpQjFELDZCQUFpRDtJQUMvQyxpQ0FNQztJQURDLGtKQUFTLHFCQUFrQixJQUFDO0lBRTVCLFlBQ0Y7SUFBQSxpQkFBUztJQUNYLDBCQUFlOzs7SUFSWCxlQUFnQztJQUFoQyxvQ0FBZ0M7SUFHaEMsNERBQW9DO0lBR3BDLGVBQ0Y7SUFERSxrREFDRjs7QURoQk4sTUFBTSxPQUFPLG1CQUFvQixTQUFRLG1CQUFtQjtJQUMxRCxJQUFJLFNBQVM7UUFDWCxPQUFPLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzNELENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPO1lBQ0w7Z0JBQ0UsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsV0FBVztnQkFDdkMsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO2dCQUN4QyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7YUFDM0M7U0FDRixDQUFDO0lBQ0osQ0FBQzs7a0hBMUJVLG1CQUFtQjt3REFBbkIsbUJBQW1CO1FDaEJoQywyQkFBNkI7UUFDM0IsaUNBT0M7UUFEQyxnR0FBUyxtQkFBZSxJQUFDO1FBRXpCLDBCQUFnRDtRQUNsRCxpQkFBUztRQUNULGlDQU9DO1FBREMsZ0dBQVMsY0FBVSxJQUFDO1FBRXBCLDBCQUEwQztRQUM1QyxpQkFBUztRQUVULDJCQUFrQztRQUNoQyxzRkFVZTtRQUNqQixpQkFBTTtRQUNOLGlDQU9DO1FBREMsZ0dBQVMsVUFBTSxJQUFDO1FBRWhCLDBCQUEwQztRQUM1QyxpQkFBUztRQUNULGlDQU9DO1FBREMsZ0dBQVMsZUFBVyxJQUFDO1FBRXJCLDJCQUFnRDtRQUNsRCxpQkFBUztRQUNYLGlCQUFNOztRQXZERCw0QkFBdUI7UUFHeEIsZUFBc0M7UUFBdEMsK0RBQXNDO1FBRHRDLHdFQUEyRDtRQUkzRCwyREFBa0M7UUFPbEMsZUFBZ0M7UUFBaEMseURBQWdDO1FBRGhDLG1FQUFzRDtRQUd0RCxzREFBNkI7UUFPMUIsZUFBNEI7UUFBNUIscURBQTRCO1FBQ0ksZUFBWTtRQUFaLHVDQUFZO1FBYy9DLGVBQWdDO1FBQWhDLHlEQUFnQztRQURoQyxvRUFBdUQ7UUFJdkQsa0RBQXlCO1FBT3pCLGVBQXNDO1FBQXRDLCtEQUFzQztRQUR0Qyx5RUFBNEQ7UUFJNUQsdURBQThCOztnRkRsQ3JCLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBUC9CLFNBQVM7ZUFBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLDhCQUE4QjthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFBhbmVsSGVhZGVyIH0gZnJvbSAnLi9hYnN0cmFjdC1wYW5lbC1oZWFkZXInO1xuaW1wb3J0IHsgUGFuZWxTZWxlY3RvciB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ3llYXItaGVhZGVyJywgLy8gdHNsaW50OmRpc2FibGUtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgZXhwb3J0QXM6ICd5ZWFySGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fic3RyYWN0LXBhbmVsLWhlYWRlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBZZWFySGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQYW5lbEhlYWRlciB7XG4gIGdldCBzdGFydFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYCR7dGhpcy52YWx1ZS5nZXRZZWFyKCkgLyAxMH1gLCAxMCkgKiAxMDtcbiAgfVxuXG4gIGdldCBlbmRZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRZZWFyICsgOTtcbiAgfVxuXG4gIHN1cGVyUHJldmlvdXMoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnZhbHVlLmFkZFllYXJzKC0xMCkpO1xuICB9XG5cbiAgc3VwZXJOZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy52YWx1ZS5hZGRZZWFycygxMCkpO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzKCk6IFBhbmVsU2VsZWN0b3JbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByZWZpeENsc30teWVhci1idG5gLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hhbmdlTW9kZSgnZGVjYWRlJyksXG4gICAgICAgIGxhYmVsOiBgJHt0aGlzLnN0YXJ0WWVhcn0tJHt0aGlzLmVuZFllYXJ9YFxuICAgICAgfVxuICAgIF07XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX1cIj5cbiAgPGJ1dHRvblxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dTdXBlclByZUJ0biA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1zdXBlci1wcmV2LWJ0blwiXG4gICAgcm9sZT1cImJ1dHRvblwiXG4gICAgdGFiaW5kZXg9XCItMVwiXG4gICAgdGl0bGU9XCJ7eyBzdXBlclByZXZpb3VzVGl0bGUoKSB9fVwiXG4gICAgKGNsaWNrKT1cInN1cGVyUHJldmlvdXMoKVwiXG4gID5cbiAgICA8c3BhbiBjbGFzcz1cImFudC1waWNrZXItc3VwZXItcHJldi1pY29uXCI+PC9zcGFuPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvblxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dQcmVCdG4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXG4gICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcHJldi1idG5cIlxuICAgIHJvbGU9XCJidXR0b25cIlxuICAgIHRpdGxlPVwie3sgcHJldmlvdXNUaXRsZSgpIH19XCJcbiAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAoY2xpY2spPVwicHJldmlvdXMoKVwiXG4gID5cbiAgICA8c3BhbiBjbGFzcz1cImFudC1waWNrZXItcHJldi1pY29uXCI+PC9zcGFuPlxuICA8L2J1dHRvbj5cblxuICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXZpZXdcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzZWxlY3RvciBvZiBzZWxlY3RvcnNcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3M9XCJ7eyBzZWxlY3Rvci5jbGFzc05hbWUgfX1cIlxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIHRpdGxlPVwie3sgc2VsZWN0b3IudGl0bGUgfHwgbnVsbCB9fVwiXG4gICAgICAgIChjbGljayk9XCJzZWxlY3Rvci5vbkNsaWNrKClcIlxuICAgICAgPlxuICAgICAgICB7eyBzZWxlY3Rvci5sYWJlbCB9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuICA8YnV0dG9uXG4gICAgW3N0eWxlLnZpc2liaWxpdHldPVwic2hvd05leHRCdG4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXG4gICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tbmV4dC1idG5cIlxuICAgIHJvbGU9XCJidXR0b25cIlxuICAgIHRhYmluZGV4PVwiLTFcIlxuICAgIHRpdGxlPVwie3sgbmV4dFRpdGxlKCkgfX1cIlxuICAgIChjbGljayk9XCJuZXh0KClcIlxuICA+XG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLW5leHQtaWNvblwiPjwvc3Bhbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b25cbiAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJzaG93U3VwZXJOZXh0QnRuID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIlxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXN1cGVyLW5leHQtYnRuXCJcbiAgICByb2xlPVwiYnV0dG9uXCJcbiAgICB0YWJpbmRleD1cIi0xXCJcbiAgICB0aXRsZT1cInt7IHN1cGVyTmV4dFRpdGxlKCkgfX1cIlxuICAgIChjbGljayk9XCJzdXBlck5leHQoKVwiXG4gID5cbiAgICA8c3BhbiBjbGFzcz1cImFudC1waWNrZXItc3VwZXItbmV4dC1pY29uXCI+PC9zcGFuPlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19