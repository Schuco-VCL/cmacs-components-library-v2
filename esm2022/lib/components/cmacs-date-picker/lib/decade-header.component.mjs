/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractPanelHeader } from './abstract-panel-header';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function DecadeHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 9);
    i0.ɵɵlistener("click", function DecadeHeaderComponent_ng_container_6_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const selector_r1 = restoredCtx.$implicit; return i0.ɵɵresetView(selector_r1.onClick()); });
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
    static { this.ɵfac = /*@__PURE__*/ function () { let ɵDecadeHeaderComponent_BaseFactory; return function DecadeHeaderComponent_Factory(t) { return (ɵDecadeHeaderComponent_BaseFactory || (ɵDecadeHeaderComponent_BaseFactory = i0.ɵɵgetInheritedFactory(DecadeHeaderComponent)))(t || DecadeHeaderComponent); }; }(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DecadeHeaderComponent, selectors: [["decade-header"]], exportAs: ["decadeHeader"], features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 31, consts: [["aria-label", "rewind", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], ["aria-label", "previous", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], ["aria-label", "next", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-next-icon"], ["aria-label", "fast forward", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "aria-label", "title", "click"]], template: function DecadeHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "button", 0);
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DecadeHeaderComponent, [{
        type: Component,
        args: [{ encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: 'decade-header', exportAs: 'decadeHeader', template: "<div class=\"{{ prefixCls }}\">\r\n  <button aria-label=\"rewind\"\r\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\r\n    class=\"{{ prefixCls }}-super-prev-btn\"\r\n    role=\"button\"\r\n    tabindex=\"-1\"\r\n    title=\"{{ superPreviousTitle() }}\"\r\n    (click)=\"superPrevious()\"\r\n  >\r\n    <span class=\"ant-picker-super-prev-icon\"></span>\r\n  </button>\r\n  <button aria-label=\"previous\"\r\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\r\n    class=\"{{ prefixCls }}-prev-btn\"\r\n    role=\"button\"\r\n    title=\"{{ previousTitle() }}\"\r\n    tabindex=\"-1\"\r\n    (click)=\"previous()\"\r\n  >\r\n    <span class=\"ant-picker-prev-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"{{ prefixCls }}-view\">\r\n    <ng-container *ngFor=\"let selector of selectors\">\r\n      <button aria-label=\"{{ selector.label }}\"\r\n        class=\"{{ selector.className }}\"\r\n        role=\"button\"\r\n        type=\"button\"\r\n        title=\"{{ selector.title || null }}\"\r\n        (click)=\"selector.onClick()\"\r\n      >\r\n        {{ selector.label }}\r\n      </button>\r\n    </ng-container>\r\n  </div>\r\n  <button aria-label=\"next\"\r\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\r\n    class=\"{{ prefixCls }}-next-btn\"\r\n    role=\"button\"\r\n    tabindex=\"-1\"\r\n    title=\"{{ nextTitle() }}\"\r\n    (click)=\"next()\"\r\n  >\r\n    <span class=\"ant-picker-next-icon\"></span>\r\n  </button>\r\n  <button aria-label=\"fast forward\"\r\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\r\n    class=\"{{ prefixCls }}-super-next-btn\"\r\n    role=\"button\"\r\n    tabindex=\"-1\"\r\n    title=\"{{ superNextTitle() }}\"\r\n    (click)=\"superNext()\"\r\n  >\r\n    <span class=\"ant-picker-super-next-icon\"></span>\r\n  </button>\r\n</div>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2RlY2FkZS1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2xpYi9hYnN0cmFjdC1wYW5lbC1oZWFkZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztJQ2lCMUQsNkJBQWlEO0lBQy9DLGlDQU1DO0lBREMsdU1BQVMsZUFBQSxxQkFBa0IsQ0FBQSxJQUFDO0lBRTVCLFlBQ0Y7SUFBQSxpQkFBUztJQUNYLDBCQUFlOzs7SUFSWCxlQUFnQztJQUFoQyxvQ0FBZ0M7SUFEMUIseURBQWlDO0lBSXZDLDREQUFvQztJQUdwQyxlQUNGO0lBREUsa0RBQ0Y7O0FEaEJOLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxtQkFBbUI7SUFDNUQsUUFBUSxLQUFVLENBQUM7SUFDbkIsSUFBSSxLQUFVLENBQUM7SUFFZixJQUFJLFNBQVM7UUFDWCxPQUFPLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPO1lBQ0w7Z0JBQ0UsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsYUFBYTtnQkFDekMsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQkFDWixPQUFPO2dCQUNULENBQUM7Z0JBQ0QsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2FBQzNDO1NBQ0YsQ0FBQztJQUNKLENBQUM7NlBBL0JVLHFCQUFxQixTQUFyQixxQkFBcUI7b0VBQXJCLHFCQUFxQjtZQ2hCbEMsMkJBQTZCLGdCQUFBO1lBT3pCLGtHQUFTLG1CQUFlLElBQUM7WUFFekIsMEJBQWdEO1lBQ2xELGlCQUFTO1lBQ1QsaUNBT0M7WUFEQyxrR0FBUyxjQUFVLElBQUM7WUFFcEIsMEJBQTBDO1lBQzVDLGlCQUFTO1lBRVQsMkJBQWtDO1lBQ2hDLHdGQVVlO1lBQ2pCLGlCQUFNO1lBQ04saUNBT0M7WUFEQyxrR0FBUyxVQUFNLElBQUM7WUFFaEIsMEJBQTBDO1lBQzVDLGlCQUFTO1lBQ1QsaUNBT0M7WUFEQyxrR0FBUyxlQUFXLElBQUM7WUFFckIsMkJBQWdEO1lBQ2xELGlCQUFTLEVBQUE7O1lBdEROLDRCQUF1QjtZQUd4QixlQUFzQztZQUF0QywrREFBc0M7WUFEdEMsd0VBQTJEO1lBSTNELDJEQUFrQztZQU9sQyxlQUFnQztZQUFoQyx5REFBZ0M7WUFEaEMsbUVBQXNEO1lBR3RELHNEQUE2QjtZQU8xQixlQUE0QjtZQUE1QixxREFBNEI7WUFDSSxlQUFZO1lBQVosdUNBQVk7WUFjL0MsZUFBZ0M7WUFBaEMseURBQWdDO1lBRGhDLG9FQUF1RDtZQUl2RCxrREFBeUI7WUFPekIsZUFBc0M7WUFBdEMsK0RBQXNDO1lBRHRDLHlFQUE0RDtZQUk1RCx1REFBOEI7Ozt1RkRsQ3JCLHFCQUFxQjtjQVBqQyxTQUFTO2dDQUNPLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0sWUFDckMsZUFBZSxZQUNmLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RQYW5lbEhlYWRlciB9IGZyb20gJy4vYWJzdHJhY3QtcGFuZWwtaGVhZGVyJztcbmltcG9ydCB7IFBhbmVsU2VsZWN0b3IgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICdkZWNhZGUtaGVhZGVyJywgLy8gdHNsaW50OmRpc2FibGUtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgZXhwb3J0QXM6ICdkZWNhZGVIZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYWJzdHJhY3QtcGFuZWwtaGVhZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERlY2FkZUhlYWRlckNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0UGFuZWxIZWFkZXIge1xuICBwcmV2aW91cygpOiB2b2lkIHt9XG4gIG5leHQoKTogdm9pZCB7fVxuXG4gIGdldCBzdGFydFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYCR7dGhpcy52YWx1ZS5nZXRZZWFyKCkgLyAxMDB9YCwgMTApICogMTAwO1xuICB9XG5cbiAgZ2V0IGVuZFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFllYXIgKyA5OTtcbiAgfVxuXG4gIHN1cGVyUHJldmlvdXMoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnZhbHVlLmFkZFllYXJzKC0xMDApKTtcbiAgfVxuXG4gIHN1cGVyTmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUuYWRkWWVhcnMoMTAwKSk7XG4gIH1cblxuICBnZXRTZWxlY3RvcnMoKTogUGFuZWxTZWxlY3RvcltdIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS1kZWNhZGUtYnRuYCxcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgLy8gbm9vcFxuICAgICAgICB9LFxuICAgICAgICBsYWJlbDogYCR7dGhpcy5zdGFydFllYXJ9LSR7dGhpcy5lbmRZZWFyfWBcbiAgICAgIH1cbiAgICBdO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19XCI+XHJcbiAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwicmV3aW5kXCJcclxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dTdXBlclByZUJ0biA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcclxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXN1cGVyLXByZXYtYnRuXCJcclxuICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICB0aXRsZT1cInt7IHN1cGVyUHJldmlvdXNUaXRsZSgpIH19XCJcclxuICAgIChjbGljayk9XCJzdXBlclByZXZpb3VzKClcIlxyXG4gID5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXBpY2tlci1zdXBlci1wcmV2LWljb25cIj48L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbiAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwicHJldmlvdXNcIlxyXG4gICAgW3N0eWxlLnZpc2liaWxpdHldPVwic2hvd1ByZUJ0biA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcclxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXByZXYtYnRuXCJcclxuICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgdGl0bGU9XCJ7eyBwcmV2aW91c1RpdGxlKCkgfX1cIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAoY2xpY2spPVwicHJldmlvdXMoKVwiXHJcbiAgPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLXByZXYtaWNvblwiPjwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS12aWV3XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzZWxlY3RvciBvZiBzZWxlY3RvcnNcIj5cclxuICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwie3sgc2VsZWN0b3IubGFiZWwgfX1cIlxyXG4gICAgICAgIGNsYXNzPVwie3sgc2VsZWN0b3IuY2xhc3NOYW1lIH19XCJcclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICB0aXRsZT1cInt7IHNlbGVjdG9yLnRpdGxlIHx8IG51bGwgfX1cIlxyXG4gICAgICAgIChjbGljayk9XCJzZWxlY3Rvci5vbkNsaWNrKClcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgc2VsZWN0b3IubGFiZWwgfX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJuZXh0XCJcclxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dOZXh0QnRuID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIlxyXG4gICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tbmV4dC1idG5cIlxyXG4gICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgIHRpdGxlPVwie3sgbmV4dFRpdGxlKCkgfX1cIlxyXG4gICAgKGNsaWNrKT1cIm5leHQoKVwiXHJcbiAgPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLW5leHQtaWNvblwiPjwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJmYXN0IGZvcndhcmRcIlxyXG4gICAgW3N0eWxlLnZpc2liaWxpdHldPVwic2hvd1N1cGVyTmV4dEJ0biA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcclxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXN1cGVyLW5leHQtYnRuXCJcclxuICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICB0aXRsZT1cInt7IHN1cGVyTmV4dFRpdGxlKCkgfX1cIlxyXG4gICAgKGNsaWNrKT1cInN1cGVyTmV4dCgpXCJcclxuICA+XHJcbiAgICA8c3BhbiBjbGFzcz1cImFudC1waWNrZXItc3VwZXItbmV4dC1pY29uXCI+PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuIl19