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
    i0.ɵɵelementStart(1, "button", 6);
    i0.ɵɵlistener("click", function DecadeHeaderComponent_ng_container_6_Template_button_click_1_listener() { const selector_r1 = ctx.$implicit; return selector_r1.onClick(); });
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
DecadeHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DecadeHeaderComponent, selectors: [["decade-header"]], exportAs: ["decadeHeader"], features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 31, consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]], template: function DecadeHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "button", 0);
        i0.ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
        i0.ɵɵelement(2, "span", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 0);
        i0.ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
        i0.ɵɵelement(4, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵtemplate(6, DecadeHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 0);
        i0.ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
        i0.ɵɵelement(8, "span", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 0);
        i0.ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2RlY2FkZS1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2xpYi9hYnN0cmFjdC1wYW5lbC1oZWFkZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0lDaUIxRCw2QkFBaUQ7SUFDL0MsaUNBTUM7SUFEQyxvSkFBUyxxQkFBa0IsSUFBQztJQUU1QixZQUNGO0lBQUEsaUJBQVM7SUFDWCwwQkFBZTs7O0lBUlgsZUFBZ0M7SUFBaEMsb0NBQWdDO0lBR2hDLDREQUFvQztJQUdwQyxlQUNGO0lBREUsa0RBQ0Y7O0FEaEJOLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxtQkFBbUI7SUFDNUQsUUFBUSxLQUFVLENBQUM7SUFDbkIsSUFBSSxLQUFVLENBQUM7SUFFZixJQUFJLFNBQVM7UUFDWCxPQUFPLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPO1lBQ0w7Z0JBQ0UsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsYUFBYTtnQkFDekMsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQkFDWixPQUFPO2dCQUNULENBQUM7Z0JBQ0QsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2FBQzNDO1NBQ0YsQ0FBQztJQUNKLENBQUM7O3dIQS9CVSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ2hCbEMsMkJBQTZCO1FBQzNCLGlDQU9DO1FBREMsa0dBQVMsbUJBQWUsSUFBQztRQUV6QiwwQkFBZ0Q7UUFDbEQsaUJBQVM7UUFDVCxpQ0FPQztRQURDLGtHQUFTLGNBQVUsSUFBQztRQUVwQiwwQkFBMEM7UUFDNUMsaUJBQVM7UUFFVCwyQkFBa0M7UUFDaEMsd0ZBVWU7UUFDakIsaUJBQU07UUFDTixpQ0FPQztRQURDLGtHQUFTLFVBQU0sSUFBQztRQUVoQiwwQkFBMEM7UUFDNUMsaUJBQVM7UUFDVCxpQ0FPQztRQURDLGtHQUFTLGVBQVcsSUFBQztRQUVyQiwyQkFBZ0Q7UUFDbEQsaUJBQVM7UUFDWCxpQkFBTTs7UUF2REQsNEJBQXVCO1FBR3hCLGVBQXNDO1FBQXRDLCtEQUFzQztRQUR0Qyx3RUFBMkQ7UUFJM0QsMkRBQWtDO1FBT2xDLGVBQWdDO1FBQWhDLHlEQUFnQztRQURoQyxtRUFBc0Q7UUFHdEQsc0RBQTZCO1FBTzFCLGVBQTRCO1FBQTVCLHFEQUE0QjtRQUNJLGVBQVk7UUFBWix1Q0FBWTtRQWMvQyxlQUFnQztRQUFoQyx5REFBZ0M7UUFEaEMsb0VBQXVEO1FBSXZELGtEQUF5QjtRQU96QixlQUFzQztRQUF0QywrREFBc0M7UUFEdEMseUVBQTREO1FBSTVELHVEQUE4Qjs7a0ZEbENyQixxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQVBqQyxTQUFTO2VBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSw4QkFBOEI7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RQYW5lbEhlYWRlciB9IGZyb20gJy4vYWJzdHJhY3QtcGFuZWwtaGVhZGVyJztcclxuaW1wb3J0IHsgUGFuZWxTZWxlY3RvciB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICdkZWNhZGUtaGVhZGVyJywgLy8gdHNsaW50OmRpc2FibGUtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBleHBvcnRBczogJ2RlY2FkZUhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Fic3RyYWN0LXBhbmVsLWhlYWRlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVjYWRlSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQYW5lbEhlYWRlciB7XHJcbiAgcHJldmlvdXMoKTogdm9pZCB7fVxyXG4gIG5leHQoKTogdm9pZCB7fVxyXG5cclxuICBnZXQgc3RhcnRZZWFyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQoYCR7dGhpcy52YWx1ZS5nZXRZZWFyKCkgLyAxMDB9YCwgMTApICogMTAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVuZFllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXJ0WWVhciArIDk5O1xyXG4gIH1cclxuXHJcbiAgc3VwZXJQcmV2aW91cygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy52YWx1ZS5hZGRZZWFycygtMTAwKSk7XHJcbiAgfVxyXG5cclxuICBzdXBlck5leHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUuYWRkWWVhcnMoMTAwKSk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RvcnMoKTogUGFuZWxTZWxlY3RvcltdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS1kZWNhZGUtYnRuYCxcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgLy8gbm9vcFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWw6IGAke3RoaXMuc3RhcnRZZWFyfS0ke3RoaXMuZW5kWWVhcn1gXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX1cIj5cclxuICA8YnV0dG9uXHJcbiAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJzaG93U3VwZXJQcmVCdG4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1zdXBlci1wcmV2LWJ0blwiXHJcbiAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgdGl0bGU9XCJ7eyBzdXBlclByZXZpb3VzVGl0bGUoKSB9fVwiXHJcbiAgICAoY2xpY2spPVwic3VwZXJQcmV2aW91cygpXCJcclxuICA+XHJcbiAgICA8c3BhbiBjbGFzcz1cImFudC1waWNrZXItc3VwZXItcHJldi1pY29uXCI+PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxidXR0b25cclxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dQcmVCdG4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wcmV2LWJ0blwiXHJcbiAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgIHRpdGxlPVwie3sgcHJldmlvdXNUaXRsZSgpIH19XCJcclxuICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgKGNsaWNrKT1cInByZXZpb3VzKClcIlxyXG4gID5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXBpY2tlci1wcmV2LWljb25cIj48L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tdmlld1wiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2VsZWN0b3Igb2Ygc2VsZWN0b3JzXCI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzcz1cInt7IHNlbGVjdG9yLmNsYXNzTmFtZSB9fVwiXHJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgdGl0bGU9XCJ7eyBzZWxlY3Rvci50aXRsZSB8fCBudWxsIH19XCJcclxuICAgICAgICAoY2xpY2spPVwic2VsZWN0b3Iub25DbGljaygpXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IHNlbGVjdG9yLmxhYmVsIH19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbiAgPGJ1dHRvblxyXG4gICAgW3N0eWxlLnZpc2liaWxpdHldPVwic2hvd05leHRCdG4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1uZXh0LWJ0blwiXHJcbiAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgdGl0bGU9XCJ7eyBuZXh0VGl0bGUoKSB9fVwiXHJcbiAgICAoY2xpY2spPVwibmV4dCgpXCJcclxuICA+XHJcbiAgICA8c3BhbiBjbGFzcz1cImFudC1waWNrZXItbmV4dC1pY29uXCI+PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxidXR0b25cclxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dTdXBlck5leHRCdG4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1zdXBlci1uZXh0LWJ0blwiXHJcbiAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgdGl0bGU9XCJ7eyBzdXBlck5leHRUaXRsZSgpIH19XCJcclxuICAgIChjbGljayk9XCJzdXBlck5leHQoKVwiXHJcbiAgPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLXN1cGVyLW5leHQtaWNvblwiPjwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuPC9kaXY+XHJcbiJdfQ==