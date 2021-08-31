/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { valueFunctionProp } from 'ng-zorro-antd/core/util';
import { AbstractTable } from './abstract-table';
import { transCompatFormat } from './util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
function DateTableComponent_thead_1_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 6);
} }
function DateTableComponent_thead_1_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("title", cell_r4.title);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", cell_r4.content, " ");
} }
function DateTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead");
    i0.ɵɵelementStart(1, "tr", 3);
    i0.ɵɵtemplate(2, DateTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    i0.ɵɵtemplate(3, DateTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.showWeek);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.headRow);
} }
function DateTableComponent_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r6.prefixCls, "-cell-week");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r5.weekNum, " ");
} }
function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, cell_r9.value));
} }
function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", cell_r9.cellRender, i0.ɵɵsanitizeHtml);
} }
function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r9 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r14.prefixCls, "-cell-inner");
    i0.ɵɵattribute("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", cell_r9.content, " ");
} }
function DateTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainerStart(1, 13);
    i0.ɵɵtemplate(2, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    i0.ɵɵtemplate(3, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    i0.ɵɵtemplate(4, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
} }
function DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, cell_r9.value));
} }
function DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r9 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r22.prefixCls, "-date-value");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cell_r9.content);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r22.prefixCls, "-date-content");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(9, _c0, cell_r9.value));
} }
function DateTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    i0.ɵɵtemplate(3, DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r21 = i0.ɵɵreference(4);
    const cell_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");
    i0.ɵɵclassProp("ant-picker-calendar-date-today", cell_r9.isToday);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
} }
function DateTableComponent_tr_3_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵlistener("click", function DateTableComponent_tr_3_td_2_Template_td_click_0_listener() { const cell_r9 = ctx.$implicit; return cell_r9.isDisabled ? null : cell_r9.onClick(); })("mouseenter", function DateTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() { const cell_r9 = ctx.$implicit; return cell_r9.onMouseEnter(); });
    i0.ɵɵelementContainerStart(1, 13);
    i0.ɵɵtemplate(2, DateTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    i0.ɵɵtemplate(3, DateTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r9 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", cell_r9.title);
    i0.ɵɵproperty("ngClass", cell_r9.classMap);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r7.prefixCls);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "ant-picker");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "ant-picker-calendar");
} }
function DateTableComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 8);
    i0.ɵɵtemplate(1, DateTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    i0.ɵɵtemplate(2, DateTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", row_r5.classMap);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r5.weekNum);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
} }
export class DateTableComponent extends AbstractTable {
    constructor(i18n, dateHelper) {
        super();
        this.i18n = i18n;
        this.dateHelper = dateHelper;
    }
    changeValueFromInside(value) {
        // Only change date not change time
        this.activeDate = this.activeDate.setYear(value.getYear()).setMonth(value.getMonth()).setDate(value.getDate());
        this.valueChange.emit(this.activeDate);
        if (!this.activeDate.isSameMonth(this.value)) {
            this.render();
        }
    }
    makeHeadRow() {
        const weekDays = [];
        const start = this.activeDate.calendarStart({ weekStartsOn: this.i18n.getLocale().locale === 'en' ? this.dateHelper.getFirstDayOfWeek() : 1 });
        for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
            const day = start.addDays(colIndex);
            weekDays.push({
                trackByIndex: null,
                value: day.nativeDate,
                title: this.dateHelper.format(day.nativeDate, 'E'),
                content: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()),
                isSelected: false,
                isDisabled: false,
                onClick() { },
                onMouseEnter() { }
            });
        }
        return weekDays;
    }
    getVeryShortWeekFormat() {
        return this.i18n.getLocaleId().toLowerCase().indexOf('zh') === 0 ? 'EEEEE' : 'EEEEEE'; // Use extreme short for chinese
    }
    makeBodyRows() {
        const weekRows = [];
        const firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.i18n.getLocale().locale === 'en' ? this.dateHelper.getFirstDayOfWeek() : 1 });
        for (let week = 0; week < this.MAX_ROW; week++) {
            const weekStart = firstDayOfMonth.addDays(week * 7);
            const row = {
                isActive: false,
                dateCells: [],
                trackByIndex: week
            };
            for (let day = 0; day < 7; day++) {
                const date = weekStart.addDays(day);
                const dateFormat = transCompatFormat(this.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD'));
                const title = this.dateHelper.format(date.nativeDate, dateFormat);
                const label = this.dateHelper.format(date.nativeDate, 'dd');
                const cell = {
                    trackByIndex: day,
                    value: date.nativeDate,
                    label: label,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: title,
                    cellRender: valueFunctionProp(this.cellRender, date),
                    fullCellRender: valueFunctionProp(this.fullCellRender, date),
                    content: `${date.getDate()}`,
                    onClick: () => this.changeValueFromInside(date),
                    onMouseEnter: () => this.cellHover.emit(date)
                };
                this.addCellProperty(cell, date);
                if (this.showWeek && !row.weekNum) {
                    row.weekNum = this.dateHelper.getISOWeek(date.nativeDate);
                }
                if (date.isSameDay(this.value)) {
                    row.isActive = date.isSameDay(this.value);
                }
                row.dateCells.push(cell);
            }
            row.classMap = {
                [`ant-picker-week-panel-row`]: this.showWeek,
                [`cmacs-picker-week-panel-row`]: this.showWeekCustom,
                [`ant-picker-week-panel-row-selected`]: this.showWeek && !this.showWeekCustom && row.isActive
            };
            weekRows.push(row);
        }
        return weekRows;
    }
    addCellProperty(cell, date) {
        var _a;
        if (this.hasRangeValue()) {
            const [startHover, endHover] = this.hoverValue;
            const [startSelected, endSelected] = this.selectedValue;
            // Selected
            if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameDay(date)) {
                cell.isSelectedStart = true;
                cell.isSelected = true;
            }
            if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameDay(date)) {
                cell.isSelectedEnd = true;
                cell.isSelected = true;
            }
            if (startHover && endHover) {
                cell.isHoverStart = false;
                cell.isHoverEnd = false;
                cell.isLastCellInPanel = date.isLastDayOfMonth();
                cell.isFirstCellInPanel = date.isFirstDayOfMonth();
                cell.isInHoverRange = startHover.isBeforeDay(date) && date.isBeforeDay(endHover);
            }
            cell.isStartSingle = startSelected && !endSelected;
            cell.isEndSingle = !startSelected && endSelected;
            cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeDay(date)) && date.isBeforeDay(endSelected);
            cell.isRangeStartNearHover = false;
            cell.isRangeEndNearHover = false;
        }
        cell.isToday = date.isToday();
        cell.isSelected = date.isSameDay(this.value);
        cell.isDisabled = !!((_a = this.disabledDate) === null || _a === void 0 ? void 0 : _a.call(this, date.nativeDate));
        cell.classMap = this.getClassMap(cell);
    }
    getClassMap(cell) {
        const date = new CandyDate(cell.value);
        return Object.assign(Object.assign({}, super.getClassMap(cell)), { [`ant-picker-cell-today`]: !!cell.isToday, [`ant-picker-cell-in-view`]: date.isSameMonth(this.activeDate) });
    }
}
DateTableComponent.ɵfac = function DateTableComponent_Factory(t) { return new (t || DateTableComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i1.DateHelperService)); };
DateTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateTableComponent, selectors: [["date-table"]], inputs: { locale: "locale", showWeekCustom: "showWeekCustom" }, exportAs: ["dateTable"], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]], template: function DateTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, DateTableComponent_thead_1_Template, 4, 2, "thead", 1);
        i0.ɵɵelementStart(2, "tbody");
        i0.ɵɵtemplate(3, DateTableComponent_tr_3_Template, 3, 4, "tr", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.headRow && ctx.headRow.length > 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
    } }, directives: [i2.NgIf, i2.NgForOf, i2.NgClass, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateTableComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-table',
                exportAs: 'dateTable',
                templateUrl: './abstract-table.html'
            }]
    }], function () { return [{ type: i1.NzI18nService }, { type: i1.DateHelperService }]; }, { locale: [{
            type: Input
        }], showWeekCustom: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2RhdGUtdGFibGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2xpYi9hYnN0cmFjdC10YWJsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7SUNUckMsd0JBQThDOzs7SUFDOUMsNkJBQThFO0lBQzVFLFlBQ0Y7SUFBQSxpQkFBSzs7O0lBRmdELGdEQUF3QjtJQUMzRSxlQUNGO0lBREUsZ0RBQ0Y7OztJQUxKLDZCQUE2QztJQUMzQyw2QkFBZTtJQUNiLHlFQUE4QztJQUM5Qyx5RUFFSztJQUNQLGlCQUFLO0lBQ1AsaUJBQVE7OztJQUxDLGVBQWM7SUFBZCxzQ0FBYztJQUNFLGVBQVU7SUFBVix3Q0FBVTs7O0lBTy9CLDhCQUEwRTtJQUN4RSxZQUNGO0lBQUEsaUJBQUs7Ozs7SUFGbUMsNkRBQWlDO0lBQ3ZFLGVBQ0Y7SUFERSwrQ0FDRjs7O0lBY1Usd0JBRWdCOzs7O0lBSmxC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RSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFDOUQ7SUFDSixDQUFDOztvRkF2SVUsa0JBQWtCO3VEQUFsQixrQkFBa0I7UUN0Qi9CLGdDQUE4RDtRQUM1RCx1RUFPUTtRQUNSLDZCQUFPO1FBQ0wsaUVBMkRLO1FBQ1AsaUJBQVE7UUFDVixpQkFBUTs7UUF0RUUsZUFBbUM7UUFBbkMsNERBQW1DO1FBU3JCLGVBQWE7UUFBYixzQ0FBYSxvQ0FBQTs7dUZEWXhCLGtCQUFrQjtjQVI5QixTQUFTO2VBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLHVCQUF1QjthQUNyQztnR0FFVSxNQUFNO2tCQUFkLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xuaW1wb3J0IHsgdmFsdWVGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekNhbGVuZGFySTE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBBYnN0cmFjdFRhYmxlIH0gZnJvbSAnLi9hYnN0cmFjdC10YWJsZSc7XG5pbXBvcnQgeyBEYXRlQm9keVJvdywgRGF0ZUNlbGwgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyB0cmFuc0NvbXBhdEZvcm1hdCB9IGZyb20gJy4vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2RhdGUtdGFibGUnLFxuICBleHBvcnRBczogJ2RhdGVUYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hYnN0cmFjdC10YWJsZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFRhYmxlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKSBsb2NhbGUhOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgc2hvd1dlZWtDdXN0b20hOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSwgcHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZVZhbHVlRnJvbUluc2lkZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgLy8gT25seSBjaGFuZ2UgZGF0ZSBub3QgY2hhbmdlIHRpbWVcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0WWVhcih2YWx1ZS5nZXRZZWFyKCkpLnNldE1vbnRoKHZhbHVlLmdldE1vbnRoKCkpLnNldERhdGUodmFsdWUuZ2V0RGF0ZSgpKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcblxuICAgIGlmICghdGhpcy5hY3RpdmVEYXRlLmlzU2FtZU1vbnRoKHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VIZWFkUm93KCk6IERhdGVDZWxsW10ge1xuICAgIGNvbnN0IHdlZWtEYXlzOiBEYXRlQ2VsbFtdID0gW107XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmFjdGl2ZURhdGUuY2FsZW5kYXJTdGFydCh7IHdlZWtTdGFydHNPbjogdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2VuJyA/IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpIDogMSB9KTtcbiAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgdGhpcy5NQVhfQ09MOyBjb2xJbmRleCsrKSB7XG4gICAgICBjb25zdCBkYXkgPSBzdGFydC5hZGREYXlzKGNvbEluZGV4KTtcbiAgICAgIHdlZWtEYXlzLnB1c2goe1xuICAgICAgICB0cmFja0J5SW5kZXg6IG51bGwsXG4gICAgICAgIHZhbHVlOiBkYXkubmF0aXZlRGF0ZSxcbiAgICAgICAgdGl0bGU6IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF5Lm5hdGl2ZURhdGUsICdFJyksIC8vIGVnLiBUdWVcbiAgICAgICAgY29udGVudDogdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXkubmF0aXZlRGF0ZSwgdGhpcy5nZXRWZXJ5U2hvcnRXZWVrRm9ybWF0KCkpLCAvLyBlZy4gVHUsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgb25DbGljaygpOiB2b2lkIHt9LFxuICAgICAgICBvbk1vdXNlRW50ZXIoKTogdm9pZCB7fVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB3ZWVrRGF5cztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmkxOG4uZ2V0TG9jYWxlSWQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3poJykgPT09IDAgPyAnRUVFRUUnIDogJ0VFRUVFRSc7IC8vIFVzZSBleHRyZW1lIHNob3J0IGZvciBjaGluZXNlXG4gIH1cblxuICBtYWtlQm9keVJvd3MoKTogRGF0ZUJvZHlSb3dbXSB7XG4gICAgY29uc3Qgd2Vla1Jvd3M6IERhdGVCb2R5Um93W10gPSBbXTtcbiAgICBjb25zdCBmaXJzdERheU9mTW9udGggPSB0aGlzLmFjdGl2ZURhdGUuY2FsZW5kYXJTdGFydCh7IHdlZWtTdGFydHNPbjogdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2VuJyA/IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpIDogMSB9KTtcblxuICAgIGZvciAobGV0IHdlZWsgPSAwOyB3ZWVrIDwgdGhpcy5NQVhfUk9XOyB3ZWVrKyspIHtcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IGZpcnN0RGF5T2ZNb250aC5hZGREYXlzKHdlZWsgKiA3KTtcbiAgICAgIGNvbnN0IHJvdzogRGF0ZUJvZHlSb3cgPSB7XG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgZGF0ZUNlbGxzOiBbXSxcbiAgICAgICAgdHJhY2tCeUluZGV4OiB3ZWVrXG4gICAgICB9O1xuXG4gICAgICBmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCA3OyBkYXkrKykge1xuICAgICAgICBjb25zdCBkYXRlID0gd2Vla1N0YXJ0LmFkZERheXMoZGF5KTtcbiAgICAgICAgY29uc3QgZGF0ZUZvcm1hdCA9IHRyYW5zQ29tcGF0Rm9ybWF0KHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdEYXRlUGlja2VyLmxhbmcuZGF0ZUZvcm1hdCcsICdZWVlZLU1NLUREJykpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZS5uYXRpdmVEYXRlLCBkYXRlRm9ybWF0KTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUubmF0aXZlRGF0ZSwgJ2RkJyk7XG4gICAgICAgIGNvbnN0IGNlbGw6IERhdGVDZWxsID0ge1xuICAgICAgICAgIHRyYWNrQnlJbmRleDogZGF5LFxuICAgICAgICAgIHZhbHVlOiBkYXRlLm5hdGl2ZURhdGUsXG4gICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGlzVG9kYXk6IGZhbHNlLFxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBjZWxsUmVuZGVyOiB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLmNlbGxSZW5kZXIhLCBkYXRlKSwgLy8gQ3VzdG9taXplZCBjb250ZW50XG4gICAgICAgICAgZnVsbENlbGxSZW5kZXI6IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuZnVsbENlbGxSZW5kZXIhLCBkYXRlKSxcbiAgICAgICAgICBjb250ZW50OiBgJHtkYXRlLmdldERhdGUoKX1gLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hhbmdlVmFsdWVGcm9tSW5zaWRlKGRhdGUpLFxuICAgICAgICAgIG9uTW91c2VFbnRlcjogKCkgPT4gdGhpcy5jZWxsSG92ZXIuZW1pdChkYXRlKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWRkQ2VsbFByb3BlcnR5KGNlbGwsIGRhdGUpO1xuXG4gICAgICAgIGlmICh0aGlzLnNob3dXZWVrICYmICFyb3cud2Vla051bSkge1xuICAgICAgICAgIHJvdy53ZWVrTnVtID0gdGhpcy5kYXRlSGVscGVyLmdldElTT1dlZWsoZGF0ZS5uYXRpdmVEYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZS5pc1NhbWVEYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICByb3cuaXNBY3RpdmUgPSBkYXRlLmlzU2FtZURheSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByb3cuZGF0ZUNlbGxzLnB1c2goY2VsbCk7XG4gICAgICB9XG4gICAgICByb3cuY2xhc3NNYXAgPSB7XG4gICAgICAgIFtgYW50LXBpY2tlci13ZWVrLXBhbmVsLXJvd2BdOiB0aGlzLnNob3dXZWVrLFxuICAgICAgICBbYGNtYWNzLXBpY2tlci13ZWVrLXBhbmVsLXJvd2BdOiB0aGlzLnNob3dXZWVrQ3VzdG9tLFxuICAgICAgICBbYGFudC1waWNrZXItd2Vlay1wYW5lbC1yb3ctc2VsZWN0ZWRgXTogdGhpcy5zaG93V2VlayAmJiAhdGhpcy5zaG93V2Vla0N1c3RvbSAmJiByb3cuaXNBY3RpdmVcbiAgICAgIH07XG4gICAgICB3ZWVrUm93cy5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiB3ZWVrUm93cztcbiAgfVxuXG4gIGFkZENlbGxQcm9wZXJ0eShjZWxsOiBEYXRlQ2VsbCwgZGF0ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaGFzUmFuZ2VWYWx1ZSgpKSB7XG4gICAgICBjb25zdCBbc3RhcnRIb3ZlciwgZW5kSG92ZXJdID0gdGhpcy5ob3ZlclZhbHVlO1xuICAgICAgY29uc3QgW3N0YXJ0U2VsZWN0ZWQsIGVuZFNlbGVjdGVkXSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcbiAgICAgIC8vIFNlbGVjdGVkXG4gICAgICBpZiAoc3RhcnRTZWxlY3RlZD8uaXNTYW1lRGF5KGRhdGUpKSB7XG4gICAgICAgIGNlbGwuaXNTZWxlY3RlZFN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZFNlbGVjdGVkPy5pc1NhbWVEYXkoZGF0ZSkpIHtcbiAgICAgICAgY2VsbC5pc1NlbGVjdGVkRW5kID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0SG92ZXIgJiYgZW5kSG92ZXIpIHtcbiAgICAgICAgY2VsbC5pc0hvdmVyU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgY2VsbC5pc0hvdmVyRW5kID0gZmFsc2U7XG4gICAgICAgIGNlbGwuaXNMYXN0Q2VsbEluUGFuZWwgPSBkYXRlLmlzTGFzdERheU9mTW9udGgoKTtcbiAgICAgICAgY2VsbC5pc0ZpcnN0Q2VsbEluUGFuZWwgPSBkYXRlLmlzRmlyc3REYXlPZk1vbnRoKCk7XG4gICAgICAgIGNlbGwuaXNJbkhvdmVyUmFuZ2UgPSBzdGFydEhvdmVyLmlzQmVmb3JlRGF5KGRhdGUpICYmIGRhdGUuaXNCZWZvcmVEYXkoZW5kSG92ZXIpO1xuICAgICAgfVxuICAgICAgY2VsbC5pc1N0YXJ0U2luZ2xlID0gc3RhcnRTZWxlY3RlZCAmJiAhZW5kU2VsZWN0ZWQ7XG4gICAgICBjZWxsLmlzRW5kU2luZ2xlID0gIXN0YXJ0U2VsZWN0ZWQgJiYgZW5kU2VsZWN0ZWQ7XG4gICAgICBjZWxsLmlzSW5TZWxlY3RlZFJhbmdlID0gc3RhcnRTZWxlY3RlZD8uaXNCZWZvcmVEYXkoZGF0ZSkgJiYgZGF0ZS5pc0JlZm9yZURheShlbmRTZWxlY3RlZCk7XG4gICAgICBjZWxsLmlzUmFuZ2VTdGFydE5lYXJIb3ZlciA9IGZhbHNlO1xuICAgICAgY2VsbC5pc1JhbmdlRW5kTmVhckhvdmVyID0gZmFsc2VcbiAgICB9XG5cbiAgICBjZWxsLmlzVG9kYXkgPSBkYXRlLmlzVG9kYXkoKTtcbiAgICBjZWxsLmlzU2VsZWN0ZWQgPSBkYXRlLmlzU2FtZURheSh0aGlzLnZhbHVlKTtcbiAgICBjZWxsLmlzRGlzYWJsZWQgPSAhIXRoaXMuZGlzYWJsZWREYXRlPy4oZGF0ZS5uYXRpdmVEYXRlKTtcbiAgICBjZWxsLmNsYXNzTWFwID0gdGhpcy5nZXRDbGFzc01hcChjZWxsKTtcbiAgfVxuXG4gIGdldENsYXNzTWFwKGNlbGw6IERhdGVDZWxsKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgQ2FuZHlEYXRlKGNlbGwudmFsdWUpO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdXBlci5nZXRDbGFzc01hcChjZWxsKSxcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXRvZGF5YF06ICEhY2VsbC5pc1RvZGF5LFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtaW4tdmlld2BdOiBkYXRlLmlzU2FtZU1vbnRoKHRoaXMuYWN0aXZlRGF0ZSlcbiAgICB9O1xuICB9XG59XG4iLCI8dGFibGUgY2xhc3M9XCJhbnQtcGlja2VyLWNvbnRlbnRcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwiZ3JpZFwiPlxuICA8dGhlYWQgKm5nSWY9XCJoZWFkUm93ICYmIGhlYWRSb3cubGVuZ3RoID4gMFwiPlxuICAgIDx0ciByb2xlPVwicm93XCI+XG4gICAgICA8dGggKm5nSWY9XCJzaG93V2Vla1wiIHJvbGU9XCJjb2x1bW5oZWFkZXJcIj48L3RoPlxuICAgICAgPHRoICpuZ0Zvcj1cImxldCBjZWxsIG9mIGhlYWRSb3dcIiByb2xlPVwiY29sdW1uaGVhZGVyXCIgdGl0bGU9XCJ7eyBjZWxsLnRpdGxlIH19XCI+XG4gICAgICAgIHt7IGNlbGwuY29udGVudCB9fVxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCByb3cgb2YgYm9keVJvd3M7IHRyYWNrQnk6IHRyYWNrQnlCb2R5Um93XCIgW25nQ2xhc3NdPVwicm93LmNsYXNzTWFwIVwiIHJvbGU9XCJyb3dcIj5cbiAgICAgIDx0ZCAqbmdJZj1cInJvdy53ZWVrTnVtXCIgcm9sZT1cImdyaWRjZWxsXCIgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tY2VsbC13ZWVrXCI+XG4gICAgICAgIHt7IHJvdy53ZWVrTnVtIH19XG4gICAgICA8L3RkPlxuICAgICAgPHRkXG4gICAgICAgICpuZ0Zvcj1cImxldCBjZWxsIG9mIHJvdy5kYXRlQ2VsbHM7IHRyYWNrQnk6IHRyYWNrQnlCb2R5Q29sdW1uXCJcbiAgICAgICAgdGl0bGU9XCJ7eyBjZWxsLnRpdGxlIH19XCJcbiAgICAgICAgcm9sZT1cImdyaWRjZWxsXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiY2VsbC5jbGFzc01hcCFcIlxuICAgICAgICAoY2xpY2spPVwiY2VsbC5pc0Rpc2FibGVkID8gbnVsbCA6IGNlbGwub25DbGljaygpXCJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwiY2VsbC5vbk1vdXNlRW50ZXIoKVwiXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInByZWZpeENsc1wiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidhbnQtcGlja2VyJ1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGNlbGwuY2VsbFJlbmRlcilcIj5cbiAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAqbmdTd2l0Y2hDYXNlIG5vdCBoYXMgdHlwZSBhc3NlcnRpb24gc3VwcG9ydCwgdGhlIGNlbGxSZW5kZXIgdHlwZSBoZXJlIGlzIFRlbXBsYXRlUmVmIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiJGFueShjZWxsLmNlbGxSZW5kZXIpOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY2VsbC52YWx1ZSB9XCJcbiAgICAgICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGNlbGwuY2VsbFJlbmRlcilcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImNlbGwuY2VsbFJlbmRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1jZWxsLWlubmVyXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwiY2VsbC5pc1NlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtZGlzYWJsZWRdPVwiY2VsbC5pc0Rpc2FibGVkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7eyBjZWxsLmNvbnRlbnQgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYW50LXBpY2tlci1jYWxlbmRhcidcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZGF0ZSBhbnQtcGlja2VyLWNlbGwtaW5uZXJcIlxuICAgICAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1jYWxlbmRhci1kYXRlLXRvZGF5XT1cImNlbGwuaXNUb2RheVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjZWxsLmZ1bGxDZWxsUmVuZGVyOyBlbHNlIGRlZmF1bHRDZWxsXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCIkYW55KGNlbGwuZnVsbENlbGxSZW5kZXIpOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY2VsbC52YWx1ZSB9XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRDZWxsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZGF0ZS12YWx1ZVwiPnt7IGNlbGwuY29udGVudCB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZGF0ZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiJGFueShjZWxsLmNlbGxSZW5kZXIpOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY2VsbC52YWx1ZSB9XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICA8L3Rib2R5PlxuPC90YWJsZT5cbiJdfQ==