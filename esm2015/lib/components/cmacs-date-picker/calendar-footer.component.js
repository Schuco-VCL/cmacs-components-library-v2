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
CalendarFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CalendarFooterComponent, selectors: [["calendar-footer"]], inputs: { locale: "locale", showToday: "showToday", showNow: "showNow", hasTimePicker: "hasTimePicker", isRange: "isRange", okDisabled: "okDisabled", disabledDate: "disabledDate", extraFooter: "extraFooter", rangeQuickSelector: "rangeQuickSelector" }, outputs: { clickOk: "clickOk", clickToday: "clickToday" }, exportAs: ["calendarFooter"], features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 6, consts: [[3, "class", 4, "ngIf"], ["role", "button", 3, "class", "title", "click", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngTemplateOutlet"], [3, "innerHTML"], ["role", "button", 3, "title", "click"], [3, "click"], ["aria-label", "OK", "nz-button", "", "type", "button", "nzType", "primary", "nzSize", "small", "role", "button", 3, "disabled", "click"]], template: function CalendarFooterComponent_Template(rf, ctx) { if (rf & 1) {
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
          aria-label="OK"
            nz-button
            type="button"
            nzType="primary"
            nzSize="small"
            [disabled]="okDisabled"
            role="button"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9jYWxlbmRhci1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7OztJQWExQix3QkFBbUU7OztJQURyRSw2QkFBeUQ7SUFDdkQsK0dBQW1FO0lBQ3JFLDBCQUFlOzs7SUFERSxlQUFtQztJQUFuQyxxREFBbUM7OztJQUVwRCw2QkFBNEQ7SUFDMUQsMEJBQXVDO0lBQ3pDLDBCQUFlOzs7SUFEUCxlQUF5QjtJQUF6QixpRUFBeUI7OztJQU5yQywyQkFBOEQ7SUFDNUQsZ0NBQWdDO0lBQzlCLGdHQUVlO0lBQ2YsZ0dBRWU7SUFDakIsMEJBQWU7SUFDakIsaUJBQU07OztJQVRtQixnRUFBb0M7SUFDN0MsZUFBaUI7SUFBakIsK0JBQWlCO0lBQ2QsZUFBd0M7SUFBeEMsdUVBQXdDO0lBR3hDLGVBQTJDO0lBQTNDLDBFQUEyQzs7OztJQUs5RCw0QkFNQztJQUZDLHNMQUEyQixJQUFJLDRCQUFrQjtJQUdqRCxZQUNGO0lBQUEsaUJBQUk7OztJQU5GLDBJQUFnRztJQUdoRyxvREFBd0I7SUFFeEIsZUFDRjtJQURFLG9EQUNGOzs7SUFFRSx3QkFBb0U7Ozs7SUFDcEUsMEJBQWdEO0lBQzlDLDRCQUFxRjtJQUFsRCxnTUFBMkIsSUFBSSw2QkFBa0I7SUFDbEYsWUFDRjtJQUFBLGlCQUFJO0lBQ04saUJBQUs7OztJQUplLHVEQUEyQjtJQUMxQyxlQUErQjtJQUEvQiwyREFBK0I7SUFDaEMsZUFDRjtJQURFLGtEQUNGOzs7O0lBRUYsMEJBQXFEO0lBQ25ELGlDQVNDO0lBREMsZ01BQXNCLElBQUksR0FBRyxzQkFBYyxJQUFDO0lBRTVDLFlBQ0Y7SUFBQSxpQkFBUztJQUNYLGlCQUFLOzs7SUFicUIsdURBQTBCO0lBT2hELGVBQXVCO0lBQXZCLDZDQUF1QjtJQUl2QixlQUNGO0lBREUsa0RBQ0Y7OztJQW5CSiwwQkFBK0U7SUFDN0UsK0ZBQW9FO0lBQ3BFLDJFQUlLO0lBQ0wsMkVBYUs7SUFDUCxpQkFBSzs7O0lBckIyQywwREFBOEI7SUFDN0QsZUFBb0M7SUFBcEMsNERBQW9DO0lBQzlDLGVBQWE7SUFBYixxQ0FBYTtJQUtiLGVBQW1CO0lBQW5CLDJDQUFtQjs7QUFrQmhDLE1BQU0sT0FBTyx1QkFBdUI7SUFxQmxDLFlBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBbkJ4QyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRzVCLHVCQUFrQixHQUFrQyxJQUFJLENBQUM7UUFFL0MsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFOUQsY0FBUyxHQUFXLFlBQVksQ0FBQztRQUNqQyxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUNwQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxlQUFVLEdBQVcsRUFBRSxDQUFDO0lBRTRCLENBQUM7SUFFckQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sR0FBRyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEU7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsNkNBQTZDO1lBQzdDLE1BQU0sVUFBVSxHQUFXLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sR0FBRyxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxpRUFBaUU7SUFDdEcsQ0FBQzs7OEZBdENVLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FBN0NoQywyQkFBb0M7UUFDbEMsd0VBU007UUFDTixvRUFRSTtRQUNKLHNFQXFCSztRQUNQLGlCQUFNOztRQTFDRCx1REFBOEI7UUFDM0IsZUFBaUI7UUFBakIsc0NBQWlCO1FBV3BCLGVBQWU7UUFBZixvQ0FBZTtRQVFiLGVBQXlDO1FBQXpDLGtFQUF5Qzs7dUZBeUJ2Qyx1QkFBdUI7Y0FwRG5DLFNBQVM7ZUFBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRDVDthQUNGO29FQUVVLE1BQU07a0JBQWQsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBRUcsVUFBVTtrQkFBbEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBRWEsT0FBTztrQkFBekIsTUFBTTtZQUNZLFVBQVU7a0JBQTVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XHJcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcblxyXG5pbXBvcnQgeyBpc05vbkVtcHR5U3RyaW5nLCBpc1RlbXBsYXRlUmVmIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyB0cmFuc0NvbXBhdEZvcm1hdCB9IGZyb20gJy4vbGliL3V0aWwnO1xyXG5pbXBvcnQgeyBQUkVGSVhfQ0xBU1MgfSBmcm9tICcuL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci1mb290ZXInLFxyXG4gIGV4cG9ydEFzOiAnY2FsZW5kYXJGb290ZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWZvb3RlclwiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiZXh0cmFGb290ZXJcIiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1mb290ZXItZXh0cmFcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGV4dHJhRm9vdGVyKVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiJGFueShleHRyYUZvb3RlcilcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhleHRyYUZvb3RlcilcIj5cclxuICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJleHRyYUZvb3RlclwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGFcclxuICAgICAgICAqbmdJZj1cInNob3dUb2RheVwiXHJcbiAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tdG9kYXktYnRuIHt7IGlzVG9kYXlEaXNhYmxlZCA/IHByZWZpeENscyArICctdG9kYXktYnRuLWRpc2FibGVkJyA6ICcnIH19XCJcclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAoY2xpY2spPVwiaXNUb2RheURpc2FibGVkID8gbnVsbCA6IG9uQ2xpY2tUb2RheSgpXCJcclxuICAgICAgICB0aXRsZT1cInt7IHRvZGF5VGl0bGUgfX1cIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgbG9jYWxlLnRvZGF5IH19XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHVsICpuZ0lmPVwiaGFzVGltZVBpY2tlciB8fCByYW5nZVF1aWNrU2VsZWN0b3JcIiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1yYW5nZXNcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicmFuZ2VRdWlja1NlbGVjdG9yXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPGxpICpuZ0lmPVwic2hvd05vd1wiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW5vd1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tbm93LWJ0blwiIChjbGljayk9XCJpc1RvZGF5RGlzYWJsZWQgPyBudWxsIDogb25DbGlja1RvZGF5KClcIj5cclxuICAgICAgICAgICAge3sgbG9jYWxlLm5vdyB9fVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpICpuZ0lmPVwiaGFzVGltZVBpY2tlclwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW9rXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiT0tcIlxyXG4gICAgICAgICAgICBuei1idXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG56VHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBuelNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJva0Rpc2FibGVkXCJcclxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJva0Rpc2FibGVkID8gbnVsbCA6IGNsaWNrT2suZW1pdCgpXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3sgbG9jYWxlLm9rIH19XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGxvY2FsZSE6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIHNob3dUb2RheTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dOb3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBoYXNUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBva0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlPzogKGQ6IERhdGUpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZXh0cmFGb290ZXI/OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcclxuICBASW5wdXQoKSByYW5nZVF1aWNrU2VsZWN0b3I6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrT2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrVG9kYXkgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSBQUkVGSVhfQ0xBU1M7XHJcbiAgaXNUZW1wbGF0ZVJlZiA9IGlzVGVtcGxhdGVSZWY7XHJcbiAgaXNOb25FbXB0eVN0cmluZyA9IGlzTm9uRW1wdHlTdHJpbmc7XHJcbiAgaXNUb2RheURpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgdG9kYXlUaXRsZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5vdzogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZERhdGUpIHtcclxuICAgICAgdGhpcy5pc1RvZGF5RGlzYWJsZWQgPSAhISh0aGlzLmRpc2FibGVkRGF0ZSAmJiB0aGlzLmRpc2FibGVkRGF0ZShub3cpKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLmxvY2FsZSkge1xyXG4gICAgICAvLyBOT1RFOiBDb21wYXQgZm9yIERhdGVQaXBlIGZvcm1hdHRpbmcgcnVsZXNcclxuICAgICAgY29uc3QgZGF0ZUZvcm1hdDogc3RyaW5nID0gdHJhbnNDb21wYXRGb3JtYXQodGhpcy5sb2NhbGUuZGF0ZUZvcm1hdCk7XHJcbiAgICAgIHRoaXMudG9kYXlUaXRsZSA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQobm93LCBkYXRlRm9ybWF0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tUb2RheSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5vdzogQ2FuZHlEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xyXG4gICAgdGhpcy5jbGlja1RvZGF5LmVtaXQobm93LmNsb25lKCkpOyAvLyBUbyBwcmV2ZW50IHRoZSBcIm5vd1wiIGJlaW5nIG1vZGlmaWVkIGZyb20gb3V0c2lkZSwgd2UgdXNlIGNsb25lXHJcbiAgfVxyXG59XHJcbiJdfQ==