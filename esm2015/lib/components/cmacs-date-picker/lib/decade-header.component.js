/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractPanelHeader } from './abstract-panel-header';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function DecadeHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 9);
    i0.ɵɵlistener("click", function DecadeHeaderComponent_ng_container_6_Template_button_click_1_listener() { const selector_r1 = ctx.$implicit; return selector_r1.onClick(); });
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
export class DecadeHeaderComponent extends AbstractPanelHeader {
    previous() { }
    next() { }
    get startYear() {
        return parseInt(`${this.value.getYear() / 100}`, 10) * 100;
    }
    get endYear() {
        return this.startYear + 99;
    }
    superPrevious() {
        this.changeValue(this.value.addYears(-100));
    }
    superNext() {
        this.changeValue(this.value.addYears(100));
    }
    getSelectors() {
        return [
            {
                className: `${this.prefixCls}-decade-btn`,
                title: '',
                onClick: () => {
                    // noop
                },
                label: `${this.startYear}-${this.endYear}`
            }
        ];
    }
}
DecadeHeaderComponent.ɵfac = function DecadeHeaderComponent_Factory(t) { return ɵDecadeHeaderComponent_BaseFactory(t || DecadeHeaderComponent); };
DecadeHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DecadeHeaderComponent, selectors: [["decade-header"]], exportAs: ["decadeHeader"], features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 31, consts: [["aria-label", "rewind", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], ["aria-label", "previous", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], ["aria-label", "next", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-next-icon"], ["aria-label", "fast forward", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "aria-label", "title", "click"]], template: function DecadeHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "button", 0);
        i0.ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
        i0.ɵɵelement(2, "span", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
        i0.ɵɵelement(4, "span", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵtemplate(6, DecadeHeaderComponent_ng_container_6_Template, 3, 6, "ng-container", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 5);
        i0.ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
        i0.ɵɵelement(8, "span", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 7);
        i0.ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
        i0.ɵɵelement(10, "span", 8);
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
const ɵDecadeHeaderComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(DecadeHeaderComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DecadeHeaderComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'decade-header',
                exportAs: 'decadeHeader',
                templateUrl: './abstract-panel-header.html'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2RlY2FkZS1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2xpYi9hYnN0cmFjdC1wYW5lbC1oZWFkZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0lDaUIxRCw2QkFBaUQ7SUFDL0MsaUNBTUM7SUFEQyxvSkFBUyxxQkFBa0IsSUFBQztJQUU1QixZQUNGO0lBQUEsaUJBQVM7SUFDWCwwQkFBZTs7O0lBUlgsZUFBZ0M7SUFBaEMsb0NBQWdDO0lBRDFCLHlEQUFpQztJQUl2Qyw0REFBb0M7SUFHcEMsZUFDRjtJQURFLGtEQUNGOztBRGhCTixNQUFNLE9BQU8scUJBQXNCLFNBQVEsbUJBQW1CO0lBQzVELFFBQVEsS0FBVSxDQUFDO0lBQ25CLElBQUksS0FBVSxDQUFDO0lBRWYsSUFBSSxTQUFTO1FBQ1gsT0FBTyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxZQUFZO1FBQ1YsT0FBTztZQUNMO2dCQUNFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLGFBQWE7Z0JBQ3pDLEtBQUssRUFBRSxFQUFFO2dCQUNULE9BQU8sRUFBRSxHQUFHLEVBQUU7b0JBQ1osT0FBTztnQkFDVCxDQUFDO2dCQUNELEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTthQUMzQztTQUNGLENBQUM7SUFDSixDQUFDOzt3SEEvQlUscUJBQXFCOzBEQUFyQixxQkFBcUI7UUNoQmxDLDJCQUE2QjtRQUMzQixpQ0FPQztRQURDLGtHQUFTLG1CQUFlLElBQUM7UUFFekIsMEJBQWdEO1FBQ2xELGlCQUFTO1FBQ1QsaUNBT0M7UUFEQyxrR0FBUyxjQUFVLElBQUM7UUFFcEIsMEJBQTBDO1FBQzVDLGlCQUFTO1FBRVQsMkJBQWtDO1FBQ2hDLHdGQVVlO1FBQ2pCLGlCQUFNO1FBQ04saUNBT0M7UUFEQyxrR0FBUyxVQUFNLElBQUM7UUFFaEIsMEJBQTBDO1FBQzVDLGlCQUFTO1FBQ1QsaUNBT0M7UUFEQyxrR0FBUyxlQUFXLElBQUM7UUFFckIsMkJBQWdEO1FBQ2xELGlCQUFTO1FBQ1gsaUJBQU07O1FBdkRELDRCQUF1QjtRQUd4QixlQUFzQztRQUF0QywrREFBc0M7UUFEdEMsd0VBQTJEO1FBSTNELDJEQUFrQztRQU9sQyxlQUFnQztRQUFoQyx5REFBZ0M7UUFEaEMsbUVBQXNEO1FBR3RELHNEQUE2QjtRQU8xQixlQUE0QjtRQUE1QixxREFBNEI7UUFDSSxlQUFZO1FBQVosdUNBQVk7UUFjL0MsZUFBZ0M7UUFBaEMseURBQWdDO1FBRGhDLG9FQUF1RDtRQUl2RCxrREFBeUI7UUFPekIsZUFBc0M7UUFBdEMsK0RBQXNDO1FBRHRDLHlFQUE0RDtRQUk1RCx1REFBOEI7O2tGRGxDckIscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FQakMsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsOEJBQThCO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0UGFuZWxIZWFkZXIgfSBmcm9tICcuL2Fic3RyYWN0LXBhbmVsLWhlYWRlcic7XG5pbXBvcnQgeyBQYW5lbFNlbGVjdG9yIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAnZGVjYWRlLWhlYWRlcicsIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIGV4cG9ydEFzOiAnZGVjYWRlSGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fic3RyYWN0LXBhbmVsLWhlYWRlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEZWNhZGVIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFBhbmVsSGVhZGVyIHtcbiAgcHJldmlvdXMoKTogdm9pZCB7fVxuICBuZXh0KCk6IHZvaWQge31cblxuICBnZXQgc3RhcnRZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGAke3RoaXMudmFsdWUuZ2V0WWVhcigpIC8gMTAwfWAsIDEwKSAqIDEwMDtcbiAgfVxuXG4gIGdldCBlbmRZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRZZWFyICsgOTk7XG4gIH1cblxuICBzdXBlclByZXZpb3VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy52YWx1ZS5hZGRZZWFycygtMTAwKSk7XG4gIH1cblxuICBzdXBlck5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnZhbHVlLmFkZFllYXJzKDEwMCkpO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzKCk6IFBhbmVsU2VsZWN0b3JbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByZWZpeENsc30tZGVjYWRlLWJ0bmAsXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgIC8vIG5vb3BcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IGAke3RoaXMuc3RhcnRZZWFyfS0ke3RoaXMuZW5kWWVhcn1gXG4gICAgICB9XG4gICAgXTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fVwiPlxyXG4gIDxidXR0b24gYXJpYS1sYWJlbD1cInJld2luZFwiXHJcbiAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJzaG93U3VwZXJQcmVCdG4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1zdXBlci1wcmV2LWJ0blwiXHJcbiAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgdGl0bGU9XCJ7eyBzdXBlclByZXZpb3VzVGl0bGUoKSB9fVwiXHJcbiAgICAoY2xpY2spPVwic3VwZXJQcmV2aW91cygpXCJcclxuICA+XHJcbiAgICA8c3BhbiBjbGFzcz1cImFudC1waWNrZXItc3VwZXItcHJldi1pY29uXCI+PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxidXR0b24gYXJpYS1sYWJlbD1cInByZXZpb3VzXCJcclxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dQcmVCdG4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wcmV2LWJ0blwiXHJcbiAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgIHRpdGxlPVwie3sgcHJldmlvdXNUaXRsZSgpIH19XCJcclxuICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgKGNsaWNrKT1cInByZXZpb3VzKClcIlxyXG4gID5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXBpY2tlci1wcmV2LWljb25cIj48L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tdmlld1wiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2VsZWN0b3Igb2Ygc2VsZWN0b3JzXCI+XHJcbiAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cInt7IHNlbGVjdG9yLmxhYmVsIH19XCJcclxuICAgICAgICBjbGFzcz1cInt7IHNlbGVjdG9yLmNsYXNzTmFtZSB9fVwiXHJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgdGl0bGU9XCJ7eyBzZWxlY3Rvci50aXRsZSB8fCBudWxsIH19XCJcclxuICAgICAgICAoY2xpY2spPVwic2VsZWN0b3Iub25DbGljaygpXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IHNlbGVjdG9yLmxhYmVsIH19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbiAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwibmV4dFwiXHJcbiAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJzaG93TmV4dEJ0biA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcclxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW5leHQtYnRuXCJcclxuICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICB0aXRsZT1cInt7IG5leHRUaXRsZSgpIH19XCJcclxuICAgIChjbGljayk9XCJuZXh0KClcIlxyXG4gID5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXBpY2tlci1uZXh0LWljb25cIj48L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbiAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwiZmFzdCBmb3J3YXJkXCJcclxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dTdXBlck5leHRCdG4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1zdXBlci1uZXh0LWJ0blwiXHJcbiAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgdGl0bGU9XCJ7eyBzdXBlck5leHRUaXRsZSgpIH19XCJcclxuICAgIChjbGljayk9XCJzdXBlck5leHQoKVwiXHJcbiAgPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLXN1cGVyLW5leHQtaWNvblwiPjwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuPC9kaXY+XHJcbiJdfQ==