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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2RlY2FkZS1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2xpYi9hYnN0cmFjdC1wYW5lbC1oZWFkZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0lDaUIxRCw2QkFBaUQ7SUFDL0MsaUNBTUM7SUFEQyxvSkFBUyxxQkFBa0IsSUFBQztJQUU1QixZQUNGO0lBQUEsaUJBQVM7SUFDWCwwQkFBZTs7O0lBUlgsZUFBZ0M7SUFBaEMsb0NBQWdDO0lBR2hDLDREQUFvQztJQUdwQyxlQUNGO0lBREUsa0RBQ0Y7O0FEaEJOLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxtQkFBbUI7SUFDNUQsUUFBUSxLQUFVLENBQUM7SUFDbkIsSUFBSSxLQUFVLENBQUM7SUFFZixJQUFJLFNBQVM7UUFDWCxPQUFPLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPO1lBQ0w7Z0JBQ0UsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsYUFBYTtnQkFDekMsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQkFDWixPQUFPO2dCQUNULENBQUM7Z0JBQ0QsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2FBQzNDO1NBQ0YsQ0FBQztJQUNKLENBQUM7O3dIQS9CVSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ2hCbEMsMkJBQTZCO1FBQzNCLGlDQU9DO1FBREMsa0dBQVMsbUJBQWUsSUFBQztRQUV6QiwwQkFBZ0Q7UUFDbEQsaUJBQVM7UUFDVCxpQ0FPQztRQURDLGtHQUFTLGNBQVUsSUFBQztRQUVwQiwwQkFBMEM7UUFDNUMsaUJBQVM7UUFFVCwyQkFBa0M7UUFDaEMsd0ZBVWU7UUFDakIsaUJBQU07UUFDTixpQ0FPQztRQURDLGtHQUFTLFVBQU0sSUFBQztRQUVoQiwwQkFBMEM7UUFDNUMsaUJBQVM7UUFDVCxpQ0FPQztRQURDLGtHQUFTLGVBQVcsSUFBQztRQUVyQiwyQkFBZ0Q7UUFDbEQsaUJBQVM7UUFDWCxpQkFBTTs7UUF2REQsNEJBQXVCO1FBR3hCLGVBQXNDO1FBQXRDLCtEQUFzQztRQUR0Qyx3RUFBMkQ7UUFJM0QsMkRBQWtDO1FBT2xDLGVBQWdDO1FBQWhDLHlEQUFnQztRQURoQyxtRUFBc0Q7UUFHdEQsc0RBQTZCO1FBTzFCLGVBQTRCO1FBQTVCLHFEQUE0QjtRQUNJLGVBQVk7UUFBWix1Q0FBWTtRQWMvQyxlQUFnQztRQUFoQyx5REFBZ0M7UUFEaEMsb0VBQXVEO1FBSXZELGtEQUF5QjtRQU96QixlQUFzQztRQUF0QywrREFBc0M7UUFEdEMseUVBQTREO1FBSTVELHVEQUE4Qjs7a0ZEbENyQixxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQVBqQyxTQUFTO2VBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSw4QkFBOEI7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RQYW5lbEhlYWRlciB9IGZyb20gJy4vYWJzdHJhY3QtcGFuZWwtaGVhZGVyJztcbmltcG9ydCB7IFBhbmVsU2VsZWN0b3IgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICdkZWNhZGUtaGVhZGVyJywgLy8gdHNsaW50OmRpc2FibGUtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgZXhwb3J0QXM6ICdkZWNhZGVIZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYWJzdHJhY3QtcGFuZWwtaGVhZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERlY2FkZUhlYWRlckNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0UGFuZWxIZWFkZXIge1xuICBwcmV2aW91cygpOiB2b2lkIHt9XG4gIG5leHQoKTogdm9pZCB7fVxuXG4gIGdldCBzdGFydFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYCR7dGhpcy52YWx1ZS5nZXRZZWFyKCkgLyAxMDB9YCwgMTApICogMTAwO1xuICB9XG5cbiAgZ2V0IGVuZFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFllYXIgKyA5OTtcbiAgfVxuXG4gIHN1cGVyUHJldmlvdXMoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnZhbHVlLmFkZFllYXJzKC0xMDApKTtcbiAgfVxuXG4gIHN1cGVyTmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUuYWRkWWVhcnMoMTAwKSk7XG4gIH1cblxuICBnZXRTZWxlY3RvcnMoKTogUGFuZWxTZWxlY3RvcltdIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS1kZWNhZGUtYnRuYCxcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgLy8gbm9vcFxuICAgICAgICB9LFxuICAgICAgICBsYWJlbDogYCR7dGhpcy5zdGFydFllYXJ9LSR7dGhpcy5lbmRZZWFyfWBcbiAgICAgIH1cbiAgICBdO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19XCI+XG4gIDxidXR0b25cbiAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJzaG93U3VwZXJQcmVCdG4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXG4gICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tc3VwZXItcHJldi1idG5cIlxuICAgIHJvbGU9XCJidXR0b25cIlxuICAgIHRhYmluZGV4PVwiLTFcIlxuICAgIHRpdGxlPVwie3sgc3VwZXJQcmV2aW91c1RpdGxlKCkgfX1cIlxuICAgIChjbGljayk9XCJzdXBlclByZXZpb3VzKClcIlxuICA+XG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLXN1cGVyLXByZXYtaWNvblwiPjwvc3Bhbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b25cbiAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJzaG93UHJlQnRuID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIlxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXByZXYtYnRuXCJcbiAgICByb2xlPVwiYnV0dG9uXCJcbiAgICB0aXRsZT1cInt7IHByZXZpb3VzVGl0bGUoKSB9fVwiXG4gICAgdGFiaW5kZXg9XCItMVwiXG4gICAgKGNsaWNrKT1cInByZXZpb3VzKClcIlxuICA+XG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLXByZXYtaWNvblwiPjwvc3Bhbj5cbiAgPC9idXR0b24+XG5cbiAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS12aWV3XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2VsZWN0b3Igb2Ygc2VsZWN0b3JzXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzPVwie3sgc2VsZWN0b3IuY2xhc3NOYW1lIH19XCJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICB0aXRsZT1cInt7IHNlbGVjdG9yLnRpdGxlIHx8IG51bGwgfX1cIlxuICAgICAgICAoY2xpY2spPVwic2VsZWN0b3Iub25DbGljaygpXCJcbiAgICAgID5cbiAgICAgICAge3sgc2VsZWN0b3IubGFiZWwgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbiAgPGJ1dHRvblxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dOZXh0QnRuID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIlxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW5leHQtYnRuXCJcbiAgICByb2xlPVwiYnV0dG9uXCJcbiAgICB0YWJpbmRleD1cIi0xXCJcbiAgICB0aXRsZT1cInt7IG5leHRUaXRsZSgpIH19XCJcbiAgICAoY2xpY2spPVwibmV4dCgpXCJcbiAgPlxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXBpY2tlci1uZXh0LWljb25cIj48L3NwYW4+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uXG4gICAgW3N0eWxlLnZpc2liaWxpdHldPVwic2hvd1N1cGVyTmV4dEJ0biA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1zdXBlci1uZXh0LWJ0blwiXG4gICAgcm9sZT1cImJ1dHRvblwiXG4gICAgdGFiaW5kZXg9XCItMVwiXG4gICAgdGl0bGU9XCJ7eyBzdXBlck5leHRUaXRsZSgpIH19XCJcbiAgICAoY2xpY2spPVwic3VwZXJOZXh0KClcIlxuICA+XG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLXN1cGVyLW5leHQtaWNvblwiPjwvc3Bhbj5cbiAgPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==