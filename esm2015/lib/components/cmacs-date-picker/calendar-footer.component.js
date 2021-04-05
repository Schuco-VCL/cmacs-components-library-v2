/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core/util';
import { transCompatFormat } from './lib/util';
import { PREFIX_CLASS } from './util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/wave";
import * as i4 from "ng-zorro-antd/button";
import * as i5 from "ng-zorro-antd/core/transition-patch";
function CalendarFooterComponent_div_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CalendarFooterComponent_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CalendarFooterComponent_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.extraFooter);
} }
function CalendarFooterComponent_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r4.extraFooter, i0.ɵɵsanitizeHtml);
} }
function CalendarFooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementContainerStart(1, 2);
    i0.ɵɵtemplate(2, CalendarFooterComponent_div_1_ng_container_2_Template, 2, 1, "ng-container", 3);
    i0.ɵɵtemplate(3, CalendarFooterComponent_div_1_ng_container_3_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-footer-extra");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r0.isTemplateRef(ctx_r0.extraFooter));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r0.isNonEmptyString(ctx_r0.extraFooter));
} }
function CalendarFooterComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵlistener("click", function CalendarFooterComponent_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.isTodayDisabled ? null : ctx_r6.onClickToday(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("", ctx_r1.prefixCls, "-today-btn ", ctx_r1.isTodayDisabled ? ctx_r1.prefixCls + "-today-btn-disabled" : "", "");
    i0.ɵɵpropertyInterpolate("title", ctx_r1.todayTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.locale.today, " ");
} }
function CalendarFooterComponent_ul_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CalendarFooterComponent_ul_3_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "a", 7);
    i0.ɵɵlistener("click", function CalendarFooterComponent_ul_3_li_2_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.isTodayDisabled ? null : ctx_r11.onClickToday(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r9.prefixCls, "-now");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r9.prefixCls, "-now-btn");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.locale.now, " ");
} }
function CalendarFooterComponent_ul_3_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "button", 8);
    i0.ɵɵlistener("click", function CalendarFooterComponent_ul_3_li_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.okDisabled ? null : ctx_r13.clickOk.emit(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r10.prefixCls, "-ok");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r10.okDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r10.locale.ok, " ");
} }
function CalendarFooterComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, CalendarFooterComponent_ul_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(2, CalendarFooterComponent_ul_3_li_2_Template, 3, 7, "li", 0);
    i0.ɵɵtemplate(3, CalendarFooterComponent_ul_3_li_3_Template, 3, 5, "li", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-ranges");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.rangeQuickSelector);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.showNow);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.hasTimePicker);
} }
export class CalendarFooterComponent {
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.showToday = false;
        this.showNow = false;
        this.hasTimePicker = false;
        this.isRange = false;
        this.okDisabled = false;
        this.rangeQuickSelector = null;
        this.clickOk = new EventEmitter();
        this.clickToday = new EventEmitter();
        this.prefixCls = PREFIX_CLASS;
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
        this.isTodayDisabled = false;
        this.todayTitle = '';
    }
    ngOnChanges(changes) {
        const now = new Date();
        if (changes.disabledDate) {
            this.isTodayDisabled = !!(this.disabledDate && this.disabledDate(now));
        }
        if (changes.locale) {
            // NOTE: Compat for DatePipe formatting rules
            const dateFormat = transCompatFormat(this.locale.dateFormat);
            this.todayTitle = this.dateHelper.format(now, dateFormat);
        }
    }
    onClickToday() {
        const now = new CandyDate();
        this.clickToday.emit(now.clone()); // To prevent the "now" being modified from outside, we use clone
    }
}
CalendarFooterComponent.ɵfac = function CalendarFooterComponent_Factory(t) { return new (t || CalendarFooterComponent)(i0.ɵɵdirectiveInject(i1.DateHelperService)); };
CalendarFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CalendarFooterComponent, selectors: [["calendar-footer"]], inputs: { locale: "locale", showToday: "showToday", showNow: "showNow", hasTimePicker: "hasTimePicker", isRange: "isRange", okDisabled: "okDisabled", disabledDate: "disabledDate", extraFooter: "extraFooter", rangeQuickSelector: "rangeQuickSelector" }, outputs: { clickOk: "clickOk", clickToday: "clickToday" }, exportAs: ["calendarFooter"], features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 6, consts: [[3, "class", 4, "ngIf"], ["role", "button", 3, "class", "title", "click", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngTemplateOutlet"], [3, "innerHTML"], ["role", "button", 3, "title", "click"], [3, "click"], ["nz-button", "", "type", "button", "nzType", "primary", "nzSize", "small", 3, "disabled", "click"]], template: function CalendarFooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, CalendarFooterComponent_div_1_Template, 4, 6, "div", 0);
        i0.ɵɵtemplate(2, CalendarFooterComponent_a_2_Template, 2, 6, "a", 1);
        i0.ɵɵtemplate(3, CalendarFooterComponent_ul_3_Template, 4, 6, "ul", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-footer");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.extraFooter);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showToday);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasTimePicker || ctx.rangeQuickSelector);
    } }, directives: [i2.NgIf, i2.NgSwitch, i2.NgSwitchCase, i2.NgTemplateOutlet, i3.NzWaveDirective, i4.NzButtonComponent, i5.ɵNzTransitionPatchDirective], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarFooterComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-footer',
                exportAs: 'calendarFooter',
                template: `
    <div class="{{ prefixCls }}-footer">
      <div *ngIf="extraFooter" class="{{ prefixCls }}-footer-extra">
        <ng-container [ngSwitch]="true">
          <ng-container *ngSwitchCase="isTemplateRef(extraFooter)">
            <ng-container *ngTemplateOutlet="$any(extraFooter)"></ng-container>
          </ng-container>
          <ng-container *ngSwitchCase="isNonEmptyString(extraFooter)">
            <span [innerHTML]="extraFooter"></span>
          </ng-container>
        </ng-container>
      </div>
      <a
        *ngIf="showToday"
        class="{{ prefixCls }}-today-btn {{ isTodayDisabled ? prefixCls + '-today-btn-disabled' : '' }}"
        role="button"
        (click)="isTodayDisabled ? null : onClickToday()"
        title="{{ todayTitle }}"
      >
        {{ locale.today }}
      </a>
      <ul *ngIf="hasTimePicker || rangeQuickSelector" class="{{ prefixCls }}-ranges">
        <ng-container *ngTemplateOutlet="rangeQuickSelector"></ng-container>
        <li *ngIf="showNow" class="{{ prefixCls }}-now">
          <a class="{{ prefixCls }}-now-btn" (click)="isTodayDisabled ? null : onClickToday()">
            {{ locale.now }}
          </a>
        </li>
        <li *ngIf="hasTimePicker" class="{{ prefixCls }}-ok">
          <button
            nz-button
            type="button"
            nzType="primary"
            nzSize="small"
            [disabled]="okDisabled"
            (click)="okDisabled ? null : clickOk.emit()"
          >
            {{ locale.ok }}
          </button>
        </li>
      </ul>
    </div>
  `
            }]
    }], function () { return [{ type: i1.DateHelperService }]; }, { locale: [{
            type: Input
        }], showToday: [{
            type: Input
        }], showNow: [{
            type: Input
        }], hasTimePicker: [{
            type: Input
        }], isRange: [{
            type: Input
        }], okDisabled: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], extraFooter: [{
            type: Input
        }], rangeQuickSelector: [{
            type: Input
        }], clickOk: [{
            type: Output
        }], clickToday: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9jYWxlbmRhci1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7OztJQWExQix3QkFBbUU7OztJQURyRSw2QkFBeUQ7SUFDdkQsK0dBQW1FO0lBQ3JFLDBCQUFlOzs7SUFERSxlQUFtQztJQUFuQyxxREFBbUM7OztJQUVwRCw2QkFBNEQ7SUFDMUQsMEJBQXVDO0lBQ3pDLDBCQUFlOzs7SUFEUCxlQUF5QjtJQUF6QixpRUFBeUI7OztJQU5yQywyQkFBOEQ7SUFDNUQsZ0NBQWdDO0lBQzlCLGdHQUVlO0lBQ2YsZ0dBRWU7SUFDakIsMEJBQWU7SUFDakIsaUJBQU07OztJQVRtQixnRUFBb0M7SUFDN0MsZUFBaUI7SUFBakIsK0JBQWlCO0lBQ2QsZUFBd0M7SUFBeEMsdUVBQXdDO0lBR3hDLGVBQTJDO0lBQTNDLDBFQUEyQzs7OztJQUs5RCw0QkFNQztJQUZDLHNMQUEyQixJQUFJLDRCQUFrQjtJQUdqRCxZQUNGO0lBQUEsaUJBQUk7OztJQU5GLDBJQUFn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USxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQ1Q7YUFDRjtvRUFFVSxNQUFNO2tCQUFkLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUVHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUVhLE9BQU87a0JBQXpCLE1BQU07WUFDWSxVQUFVO2tCQUE1QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IGlzTm9uRW1wdHlTdHJpbmcsIGlzVGVtcGxhdGVSZWYgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgdHJhbnNDb21wYXRGb3JtYXQgfSBmcm9tICcuL2xpYi91dGlsJztcbmltcG9ydCB7IFBSRUZJWF9DTEFTUyB9IGZyb20gJy4vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2NhbGVuZGFyLWZvb3RlcicsXG4gIGV4cG9ydEFzOiAnY2FsZW5kYXJGb290ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZm9vdGVyXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiZXh0cmFGb290ZXJcIiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1mb290ZXItZXh0cmFcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoZXh0cmFGb290ZXIpXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiJGFueShleHRyYUZvb3RlcilcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGV4dHJhRm9vdGVyKVwiPlxuICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJleHRyYUZvb3RlclwiPjwvc3Bhbj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhXG4gICAgICAgICpuZ0lmPVwic2hvd1RvZGF5XCJcbiAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tdG9kYXktYnRuIHt7IGlzVG9kYXlEaXNhYmxlZCA/IHByZWZpeENscyArICctdG9kYXktYnRuLWRpc2FibGVkJyA6ICcnIH19XCJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIChjbGljayk9XCJpc1RvZGF5RGlzYWJsZWQgPyBudWxsIDogb25DbGlja1RvZGF5KClcIlxuICAgICAgICB0aXRsZT1cInt7IHRvZGF5VGl0bGUgfX1cIlxuICAgICAgPlxuICAgICAgICB7eyBsb2NhbGUudG9kYXkgfX1cbiAgICAgIDwvYT5cbiAgICAgIDx1bCAqbmdJZj1cImhhc1RpbWVQaWNrZXIgfHwgcmFuZ2VRdWlja1NlbGVjdG9yXCIgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcmFuZ2VzXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJyYW5nZVF1aWNrU2VsZWN0b3JcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGxpICpuZ0lmPVwic2hvd05vd1wiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW5vd1wiPlxuICAgICAgICAgIDxhIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW5vdy1idG5cIiAoY2xpY2spPVwiaXNUb2RheURpc2FibGVkID8gbnVsbCA6IG9uQ2xpY2tUb2RheSgpXCI+XG4gICAgICAgICAgICB7eyBsb2NhbGUubm93IH19XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nSWY9XCJoYXNUaW1lUGlja2VyXCIgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tb2tcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBuei1idXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgbnpUeXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBuelNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwib2tEaXNhYmxlZFwiXG4gICAgICAgICAgICAoY2xpY2spPVwib2tEaXNhYmxlZCA/IG51bGwgOiBjbGlja09rLmVtaXQoKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgbG9jYWxlLm9rIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbG9jYWxlITogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIHNob3dUb2RheTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93Tm93OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhhc1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIG9rRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlPzogKGQ6IERhdGUpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV4dHJhRm9vdGVyPzogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHJhbmdlUXVpY2tTZWxlY3RvcjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGlja09rID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tUb2RheSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuXG4gIHByZWZpeENsczogc3RyaW5nID0gUFJFRklYX0NMQVNTO1xuICBpc1RlbXBsYXRlUmVmID0gaXNUZW1wbGF0ZVJlZjtcbiAgaXNOb25FbXB0eVN0cmluZyA9IGlzTm9uRW1wdHlTdHJpbmc7XG4gIGlzVG9kYXlEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICB0b2RheVRpdGxlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBub3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkRGF0ZSkge1xuICAgICAgdGhpcy5pc1RvZGF5RGlzYWJsZWQgPSAhISh0aGlzLmRpc2FibGVkRGF0ZSAmJiB0aGlzLmRpc2FibGVkRGF0ZShub3cpKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubG9jYWxlKSB7XG4gICAgICAvLyBOT1RFOiBDb21wYXQgZm9yIERhdGVQaXBlIGZvcm1hdHRpbmcgcnVsZXNcbiAgICAgIGNvbnN0IGRhdGVGb3JtYXQ6IHN0cmluZyA9IHRyYW5zQ29tcGF0Rm9ybWF0KHRoaXMubG9jYWxlLmRhdGVGb3JtYXQpO1xuICAgICAgdGhpcy50b2RheVRpdGxlID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChub3csIGRhdGVGb3JtYXQpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tUb2RheSgpOiB2b2lkIHtcbiAgICBjb25zdCBub3c6IENhbmR5RGF0ZSA9IG5ldyBDYW5keURhdGUoKTtcbiAgICB0aGlzLmNsaWNrVG9kYXkuZW1pdChub3cuY2xvbmUoKSk7IC8vIFRvIHByZXZlbnQgdGhlIFwibm93XCIgYmVpbmcgbW9kaWZpZWQgZnJvbSBvdXRzaWRlLCB3ZSB1c2UgY2xvbmVcbiAgfVxufVxuIl19