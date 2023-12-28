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
import * as i3 from "../cmacs-button/cmacs-button.component";
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
    i0.ɵɵlistener("click", function CalendarFooterComponent_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.isTodayDisabled ? null : ctx_r6.onClickToday()); });
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
    i0.ɵɵelementStart(0, "li")(1, "a", 7);
    i0.ɵɵlistener("click", function CalendarFooterComponent_ul_3_li_2_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.isTodayDisabled ? null : ctx_r11.onClickToday()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
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
    i0.ɵɵelementStart(0, "li")(1, "button", 8);
    i0.ɵɵlistener("click", function CalendarFooterComponent_ul_3_li_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.okDisabled ? null : ctx_r13.clickOk.emit()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
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
    static { this.ɵfac = function CalendarFooterComponent_Factory(t) { return new (t || CalendarFooterComponent)(i0.ɵɵdirectiveInject(i1.DateHelperService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarFooterComponent, selectors: [["calendar-footer"]], inputs: { locale: "locale", showToday: "showToday", showNow: "showNow", hasTimePicker: "hasTimePicker", isRange: "isRange", okDisabled: "okDisabled", disabledDate: "disabledDate", extraFooter: "extraFooter", rangeQuickSelector: "rangeQuickSelector" }, outputs: { clickOk: "clickOk", clickToday: "clickToday" }, exportAs: ["calendarFooter"], features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 6, consts: [[3, "class", 4, "ngIf"], ["role", "button", 3, "class", "title", "click", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngTemplateOutlet"], [3, "innerHTML"], ["role", "button", 3, "title", "click"], [3, "click"], ["aria-label", "OK", "cmacs-button", "", "type", "primary", "size", "small", "role", "button", 3, "disabled", "click"]], template: function CalendarFooterComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i2.NgIf, i2.NgTemplateOutlet, i2.NgSwitch, i2.NgSwitchCase, i3.CmacsButtonComponent], encapsulation: 2, changeDetection: 0 }); }
}
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
            cmacs-button
            type="primary"
            size="small"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9jYWxlbmRhci1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7SUFhMUIsd0JBQW1FOzs7SUFEckUsNkJBQXlEO0lBQ3ZELCtHQUFtRTtJQUNyRSwwQkFBZTs7O0lBREUsZUFBbUM7SUFBbkMscURBQW1DOzs7SUFFcEQsNkJBQTREO0lBQzFELDBCQUF1QztJQUN6QywwQkFBZTs7O0lBRFAsZUFBeUI7SUFBekIsaUVBQXlCOzs7SUFOckMsMkJBQThEO0lBQzVELGdDQUFnQztJQUM5QixnR0FFZTtJQUNmLGdHQUVlO0lBQ2pCLDBCQUFlO0lBQ2pCLGlCQUFNOzs7SUFUbUIsZ0VBQW9DO0lBQzdDLGVBQWlCO0lBQWpCLCtCQUFpQjtJQUNkLGVBQXdDO0lBQXhDLHVFQUF3QztJQUd4QyxlQUEyQztJQUEzQywwRUFBMkM7Ozs7SUFLOUQsNEJBTUM7SUFGQyw2SkFBUyx3Q0FBa0IsSUFBSSxHQUFHLHFCQUFjLENBQUEsSUFBQztJQUdqRCxZQUNGO0lBQUEs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Qy9DLDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkNUO2FBQ0Y7b0VBRVUsTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFFRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFFYSxPQUFPO2tCQUF6QixNQUFNO1lBQ1ksVUFBVTtrQkFBNUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcclxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbmltcG9ydCB7IGlzTm9uRW1wdHlTdHJpbmcsIGlzVGVtcGxhdGVSZWYgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IHRyYW5zQ29tcGF0Rm9ybWF0IH0gZnJvbSAnLi9saWIvdXRpbCc7XHJcbmltcG9ydCB7IFBSRUZJWF9DTEFTUyB9IGZyb20gJy4vdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NhbGVuZGFyLWZvb3RlcicsXHJcbiAgZXhwb3J0QXM6ICdjYWxlbmRhckZvb3RlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZm9vdGVyXCI+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJleHRyYUZvb3RlclwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWZvb3Rlci1leHRyYVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoZXh0cmFGb290ZXIpXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCIkYW55KGV4dHJhRm9vdGVyKVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGV4dHJhRm9vdGVyKVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImV4dHJhRm9vdGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YVxyXG4gICAgICAgICpuZ0lmPVwic2hvd1RvZGF5XCJcclxuICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS10b2RheS1idG4ge3sgaXNUb2RheURpc2FibGVkID8gcHJlZml4Q2xzICsgJy10b2RheS1idG4tZGlzYWJsZWQnIDogJycgfX1cIlxyXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgIChjbGljayk9XCJpc1RvZGF5RGlzYWJsZWQgPyBudWxsIDogb25DbGlja1RvZGF5KClcIlxyXG4gICAgICAgIHRpdGxlPVwie3sgdG9kYXlUaXRsZSB9fVwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyBsb2NhbGUudG9kYXkgfX1cclxuICAgICAgPC9hPlxyXG4gICAgICA8dWwgKm5nSWY9XCJoYXNUaW1lUGlja2VyIHx8IHJhbmdlUXVpY2tTZWxlY3RvclwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXJhbmdlc1wiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJyYW5nZVF1aWNrU2VsZWN0b3JcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bGkgKm5nSWY9XCJzaG93Tm93XCIgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tbm93XCI+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cInt7IHByZWZpeENscyB9fS1ub3ctYnRuXCIgKGNsaWNrKT1cImlzVG9kYXlEaXNhYmxlZCA/IG51bGwgOiBvbkNsaWNrVG9kYXkoKVwiPlxyXG4gICAgICAgICAgICB7eyBsb2NhbGUubm93IH19XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgKm5nSWY9XCJoYXNUaW1lUGlja2VyXCIgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tb2tcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk9LXCJcclxuICAgICAgICAgICAgY21hY3MtYnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cIm9rRGlzYWJsZWRcIlxyXG4gICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cIm9rRGlzYWJsZWQgPyBudWxsIDogY2xpY2tPay5lbWl0KClcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7eyBsb2NhbGUub2sgfX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbG9jYWxlITogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgc2hvd1RvZGF5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd05vdzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGhhc1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpc1JhbmdlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG9rRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU/OiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBleHRyYUZvb3Rlcj86IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJhbmdlUXVpY2tTZWxlY3RvcjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tPayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tUb2RheSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9IFBSRUZJWF9DTEFTUztcclxuICBpc1RlbXBsYXRlUmVmID0gaXNUZW1wbGF0ZVJlZjtcclxuICBpc05vbkVtcHR5U3RyaW5nID0gaXNOb25FbXB0eVN0cmluZztcclxuICBpc1RvZGF5RGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICB0b2RheVRpdGxlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3Qgbm93OiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkRGF0ZSkge1xyXG4gICAgICB0aGlzLmlzVG9kYXlEaXNhYmxlZCA9ICEhKHRoaXMuZGlzYWJsZWREYXRlICYmIHRoaXMuZGlzYWJsZWREYXRlKG5vdykpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubG9jYWxlKSB7XHJcbiAgICAgIC8vIE5PVEU6IENvbXBhdCBmb3IgRGF0ZVBpcGUgZm9ybWF0dGluZyBydWxlc1xyXG4gICAgICBjb25zdCBkYXRlRm9ybWF0OiBzdHJpbmcgPSB0cmFuc0NvbXBhdEZvcm1hdCh0aGlzLmxvY2FsZS5kYXRlRm9ybWF0KTtcclxuICAgICAgdGhpcy50b2RheVRpdGxlID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChub3csIGRhdGVGb3JtYXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGlja1RvZGF5KCk6IHZvaWQge1xyXG4gICAgY29uc3Qgbm93OiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcbiAgICB0aGlzLmNsaWNrVG9kYXkuZW1pdChub3cuY2xvbmUoKSk7IC8vIFRvIHByZXZlbnQgdGhlIFwibm93XCIgYmVpbmcgbW9kaWZpZWQgZnJvbSBvdXRzaWRlLCB3ZSB1c2UgY2xvbmVcclxuICB9XHJcbn1cclxuIl19