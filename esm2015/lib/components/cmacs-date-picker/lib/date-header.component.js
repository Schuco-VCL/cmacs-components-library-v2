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
function DateHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 6);
    i0.ɵɵlistener("click", function DateHeaderComponent_ng_container_6_Template_button_click_1_listener() { const selector_r1 = ctx.$implicit; return selector_r1.onClick(); });
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
export class DateHeaderComponent extends AbstractPanelHeader {
    constructor(dateHelper) {
        super();
        this.dateHelper = dateHelper;
    }
    getSelectors() {
        return [
            {
                className: `${this.prefixCls}-year-btn`,
                title: this.locale.yearSelect,
                onClick: () => this.changeMode('year'),
                label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
            },
            {
                className: `${this.prefixCls}-month-btn`,
                title: this.locale.monthSelect,
                onClick: () => this.changeMode('month'),
                label: this.dateHelper.format(this.value.nativeDate, this.locale.monthFormat || 'MMM')
            }
        ];
    }
}
DateHeaderComponent.ɵfac = function DateHeaderComponent_Factory(t) { return new (t || DateHeaderComponent)(i0.ɵɵdirectiveInject(i1.DateHelperService)); };
DateHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateHeaderComponent, selectors: [["date-header"]], exportAs: ["dateHeader"], features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 31, consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]], template: function DateHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "button", 0);
        i0.ɵɵlistener("click", function DateHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
        i0.ɵɵelement(2, "span", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 0);
        i0.ɵɵlistener("click", function DateHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
        i0.ɵɵelement(4, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵtemplate(6, DateHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 0);
        i0.ɵɵlistener("click", function DateHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
        i0.ɵɵelement(8, "span", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 0);
        i0.ɵɵlistener("click", function DateHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
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
    } }, directives: [i2.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateHeaderComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'date-header',
                exportAs: 'dateHeader',
                templateUrl: './abstract-panel-header.html'
            }]
    }], function () { return [{ type: i1.DateHelperService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2xpYi9kYXRlLWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2Fic3RyYWN0LXBhbmVsLWhlYWRlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDOzs7OztJQ2F2Qyw2QkFBaUQ7SUFDL0MsaUNBTUM7SUFEQyxrSkFBUyxxQkFBa0IsSUFBQztJQUU1QixZQUNGO0lBQUEsaUJBQVM7SUFDWCwwQkFBZTs7O0lBUlgsZUFBZ0M7SUFBaEMsb0NBQWdDO0lBR2hDLDREQUFvQztJQUdwQyxlQUNGO0lBREUsa0RBQ0Y7O0FEYk4sTUFBTSxPQUFPLG1CQUFvQixTQUFRLG1CQUFtQjtJQUMxRCxZQUFvQixVQUE2QjtRQUMvQyxLQUFLLEVBQUUsQ0FBQztRQURVLGVBQVUsR0FBVixVQUFVLENBQW1CO0lBRWpELENBQUM7SUFFRCxZQUFZO1FBQ1YsT0FBTztZQUNMO2dCQUNFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLFdBQVc7Z0JBQ3ZDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7Z0JBQzdCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDdEMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDaEc7WUFDRDtnQkFDRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxZQUFZO2dCQUN4QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO2dCQUM5QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUM7YUFDdkY7U0FDRixDQUFDO0lBQ0osQ0FBQzs7c0ZBcEJVLG1CQUFtQjt3REFBbkIsbUJBQW1CO1FDbkJoQywyQkFBNkI7UUFDM0IsaUNBT0M7UUFEQyxnR0FBUyxtQkFBZSxJQUFDO1FBRXpCLDBCQUFnRDtRQUNsRCxpQkFBUztRQUNULGlDQU9DO1FBREMsZ0dBQVMsY0FBVSxJQUFDO1FBRXBCLDBCQUEwQztRQUM1QyxpQkFBUztRQUVULDJCQUFrQztRQUNoQyxzRkFVZTtRQUNqQixpQkFBTTtRQUNOLGlDQU9DO1FBREMsZ0dBQVMsVUFBTSxJQUFDO1FBRWhCLDBCQUEwQztRQUM1QyxpQkFBUztRQUNULGlDQU9DO1FBREMsZ0dBQVMsZUFBVyxJQUFDO1FBRXJCLDJCQUFnRDtRQUNsRCxpQkFBUztRQUNYLGlCQUFNOztRQXZERCw0QkFBdUI7UUFHeEIsZUFBc0M7UUFBdEMsK0RBQXNDO1FBRHRDLHdFQUEyRDtRQUkzRCwyREFBa0M7UUFPbEMsZUFBZ0M7UUFBaEMseURBQWdDO1FBRGhDLG1FQUFzRDtRQUd0RCxzREFBNkI7UUFPMUIsZUFBNEI7UUFBNUIscURBQTRCO1FBQ0ksZUFBWTtRQUFaLHVDQUFZO1FBYy9DLGVBQWdDO1FBQWhDLHlEQUFnQztRQURoQyxvRUFBdUQ7UUFJdkQsa0RBQXlCO1FBT3pCLGVBQXNDO1FBQXRDLCtEQUFzQztRQUR0Qyx5RUFBNEQ7UUFJNUQsdURBQThCOzt1RkQvQnJCLG1CQUFtQjtjQVAvQixTQUFTO2VBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSw4QkFBOEI7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBBYnN0cmFjdFBhbmVsSGVhZGVyIH0gZnJvbSAnLi9hYnN0cmFjdC1wYW5lbC1oZWFkZXInO1xuaW1wb3J0IHsgUGFuZWxTZWxlY3RvciB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IHRyYW5zQ29tcGF0Rm9ybWF0IH0gZnJvbSAnLi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ2RhdGUtaGVhZGVyJywgLy8gdHNsaW50OmRpc2FibGUtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgZXhwb3J0QXM6ICdkYXRlSGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fic3RyYWN0LXBhbmVsLWhlYWRlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRlSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQYW5lbEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzKCk6IFBhbmVsU2VsZWN0b3JbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByZWZpeENsc30teWVhci1idG5gLFxuICAgICAgICB0aXRsZTogdGhpcy5sb2NhbGUueWVhclNlbGVjdCxcbiAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5jaGFuZ2VNb2RlKCd5ZWFyJyksXG4gICAgICAgIGxhYmVsOiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHRoaXMudmFsdWUubmF0aXZlRGF0ZSwgdHJhbnNDb21wYXRGb3JtYXQodGhpcy5sb2NhbGUueWVhckZvcm1hdCkpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS1tb250aC1idG5gLFxuICAgICAgICB0aXRsZTogdGhpcy5sb2NhbGUubW9udGhTZWxlY3QsXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hhbmdlTW9kZSgnbW9udGgnKSxcbiAgICAgICAgbGFiZWw6IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQodGhpcy52YWx1ZS5uYXRpdmVEYXRlLCB0aGlzLmxvY2FsZS5tb250aEZvcm1hdCB8fCAnTU1NJylcbiAgICAgIH1cbiAgICBdO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19XCI+XG4gIDxidXR0b25cbiAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJzaG93U3VwZXJQcmVCdG4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXG4gICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tc3VwZXItcHJldi1idG5cIlxuICAgIHJvbGU9XCJidXR0b25cIlxuICAgIHRhYmluZGV4PVwiLTFcIlxuICAgIHRpdGxlPVwie3sgc3VwZXJQcmV2aW91c1RpdGxlKCkgfX1cIlxuICAgIChjbGljayk9XCJzdXBlclByZXZpb3VzKClcIlxuICA+XG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLXN1cGVyLXByZXYtaWNvblwiPjwvc3Bhbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b25cbiAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJzaG93UHJlQnRuID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIlxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXByZXYtYnRuXCJcbiAgICByb2xlPVwiYnV0dG9uXCJcbiAgICB0aXRsZT1cInt7IHByZXZpb3VzVGl0bGUoKSB9fVwiXG4gICAgdGFiaW5kZXg9XCItMVwiXG4gICAgKGNsaWNrKT1cInByZXZpb3VzKClcIlxuICA+XG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLXByZXYtaWNvblwiPjwvc3Bhbj5cbiAgPC9idXR0b24+XG5cbiAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS12aWV3XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2VsZWN0b3Igb2Ygc2VsZWN0b3JzXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzPVwie3sgc2VsZWN0b3IuY2xhc3NOYW1lIH19XCJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICB0aXRsZT1cInt7IHNlbGVjdG9yLnRpdGxlIHx8IG51bGwgfX1cIlxuICAgICAgICAoY2xpY2spPVwic2VsZWN0b3Iub25DbGljaygpXCJcbiAgICAgID5cbiAgICAgICAge3sgc2VsZWN0b3IubGFiZWwgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbiAgPGJ1dHRvblxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dOZXh0QnRuID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIlxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW5leHQtYnRuXCJcbiAgICByb2xlPVwiYnV0dG9uXCJcbiAgICB0YWJpbmRleD1cIi0xXCJcbiAgICB0aXRsZT1cInt7IG5leHRUaXRsZSgpIH19XCJcbiAgICAoY2xpY2spPVwibmV4dCgpXCJcbiAgPlxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXBpY2tlci1uZXh0LWljb25cIj48L3NwYW4+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uXG4gICAgW3N0eWxlLnZpc2liaWxpdHldPVwic2hvd1N1cGVyTmV4dEJ0biA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1zdXBlci1uZXh0LWJ0blwiXG4gICAgcm9sZT1cImJ1dHRvblwiXG4gICAgdGFiaW5kZXg9XCItMVwiXG4gICAgdGl0bGU9XCJ7eyBzdXBlck5leHRUaXRsZSgpIH19XCJcbiAgICAoY2xpY2spPVwic3VwZXJOZXh0KClcIlxuICA+XG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLXN1cGVyLW5leHQtaWNvblwiPjwvc3Bhbj5cbiAgPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==