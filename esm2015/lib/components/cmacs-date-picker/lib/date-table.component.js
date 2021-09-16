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
                [`ant-picker-week-panel-row`]: this.showWeek && !this.showWeekCustom,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2RhdGUtdGFibGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2xpYi9hYnN0cmFjdC10YWJsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7SUNUckMsd0JBQThDOzs7SUFDOUMsNkJBQThFO0lBQzVFLFlBQ0Y7SUFBQSxpQkFBSzs7O0lBRmdELGdEQUF3QjtJQUMzRSxlQUNGO0lBREUsZ0RBQ0Y7OztJQUxKLDZCQUE2QztJQUMzQyw2QkFBZTtJQUNiLHlFQUE4QztJQUM5Qyx5RUFFSztJQUNQLGlCQUFLO0lBQ1AsaUJBQVE7OztJQUxDLGVBQWM7SUFBZCxzQ0FBYztJQUNFLGVBQVU7SUFBVix3Q0FBVTs7O0lBTy9CLDhCQUEwRTtJQUN4RSxZQUNGO0lBQUEsaUJBQUs7Ozs7SUFGbUMsNkRBQWlDO0lBQ3ZFLGVBQ0Y7SUFERSwrQ0FDRjs7O0lBY1Usd0JBRWdCOzs7O0lBSmxC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QUN6QyxDQUFDLHlCQUF5QixDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQzlEO0lBQ0osQ0FBQzs7b0ZBdklVLGtCQUFrQjt1REFBbEIsa0JBQWtCO1FDdEIvQixnQ0FBOEQ7UUFDNUQsdUVBT1E7UUFDUiw2QkFBTztRQUNMLGlFQTJESztRQUNQLGlCQUFRO1FBQ1YsaUJBQVE7O1FBdEVFLGVBQW1DO1FBQW5DLDREQUFtQztRQVNyQixlQUFhO1FBQWIsc0NBQWEsb0NBQUE7O3VGRFl4QixrQkFBa0I7Y0FSOUIsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7YUFDckM7Z0dBRVUsTUFBTTtrQkFBZCxLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcbmltcG9ydCB7IHZhbHVlRnVuY3Rpb25Qcm9wIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgQWJzdHJhY3RUYWJsZSB9IGZyb20gJy4vYWJzdHJhY3QtdGFibGUnO1xuaW1wb3J0IHsgRGF0ZUJvZHlSb3csIERhdGVDZWxsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdHJhbnNDb21wYXRGb3JtYXQgfSBmcm9tICcuL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkYXRlLXRhYmxlJyxcbiAgZXhwb3J0QXM6ICdkYXRlVGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWJzdHJhY3QtdGFibGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRhYmxlQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RUYWJsZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KCkgbG9jYWxlITogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIHNob3dXZWVrQ3VzdG9tITogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VWYWx1ZUZyb21JbnNpZGUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIC8vIE9ubHkgY2hhbmdlIGRhdGUgbm90IGNoYW5nZSB0aW1lXG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5hY3RpdmVEYXRlLnNldFllYXIodmFsdWUuZ2V0WWVhcigpKS5zZXRNb250aCh2YWx1ZS5nZXRNb250aCgpKS5zZXREYXRlKHZhbHVlLmdldERhdGUoKSk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XG5cbiAgICBpZiAoIXRoaXMuYWN0aXZlRGF0ZS5pc1NhbWVNb250aCh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBtYWtlSGVhZFJvdygpOiBEYXRlQ2VsbFtdIHtcbiAgICBjb25zdCB3ZWVrRGF5czogRGF0ZUNlbGxbXSA9IFtdO1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5hY3RpdmVEYXRlLmNhbGVuZGFyU3RhcnQoeyB3ZWVrU3RhcnRzT246IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdlbicgPyB0aGlzLmRhdGVIZWxwZXIuZ2V0Rmlyc3REYXlPZldlZWsoKSA6IDEgfSk7XG4gICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IHRoaXMuTUFYX0NPTDsgY29sSW5kZXgrKykge1xuICAgICAgY29uc3QgZGF5ID0gc3RhcnQuYWRkRGF5cyhjb2xJbmRleCk7XG4gICAgICB3ZWVrRGF5cy5wdXNoKHtcbiAgICAgICAgdHJhY2tCeUluZGV4OiBudWxsLFxuICAgICAgICB2YWx1ZTogZGF5Lm5hdGl2ZURhdGUsXG4gICAgICAgIHRpdGxlOiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRheS5uYXRpdmVEYXRlLCAnRScpLCAvLyBlZy4gVHVlXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF5Lm5hdGl2ZURhdGUsIHRoaXMuZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpKSwgLy8gZWcuIFR1LFxuICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgaXNEaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIG9uQ2xpY2soKTogdm9pZCB7fSxcbiAgICAgICAgb25Nb3VzZUVudGVyKCk6IHZvaWQge31cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gd2Vla0RheXM7XG4gIH1cblxuICBwcml2YXRlIGdldFZlcnlTaG9ydFdlZWtGb3JtYXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmdldExvY2FsZUlkKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd6aCcpID09PSAwID8gJ0VFRUVFJyA6ICdFRUVFRUUnOyAvLyBVc2UgZXh0cmVtZSBzaG9ydCBmb3IgY2hpbmVzZVxuICB9XG5cbiAgbWFrZUJvZHlSb3dzKCk6IERhdGVCb2R5Um93W10ge1xuICAgIGNvbnN0IHdlZWtSb3dzOiBEYXRlQm9keVJvd1tdID0gW107XG4gICAgY29uc3QgZmlyc3REYXlPZk1vbnRoID0gdGhpcy5hY3RpdmVEYXRlLmNhbGVuZGFyU3RhcnQoeyB3ZWVrU3RhcnRzT246IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdlbicgPyB0aGlzLmRhdGVIZWxwZXIuZ2V0Rmlyc3REYXlPZldlZWsoKSA6IDEgfSk7XG5cbiAgICBmb3IgKGxldCB3ZWVrID0gMDsgd2VlayA8IHRoaXMuTUFYX1JPVzsgd2VlaysrKSB7XG4gICAgICBjb25zdCB3ZWVrU3RhcnQgPSBmaXJzdERheU9mTW9udGguYWRkRGF5cyh3ZWVrICogNyk7XG4gICAgICBjb25zdCByb3c6IERhdGVCb2R5Um93ID0ge1xuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIGRhdGVDZWxsczogW10sXG4gICAgICAgIHRyYWNrQnlJbmRleDogd2Vla1xuICAgICAgfTtcblxuICAgICAgZm9yIChsZXQgZGF5ID0gMDsgZGF5IDwgNzsgZGF5KyspIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHdlZWtTdGFydC5hZGREYXlzKGRheSk7XG4gICAgICAgIGNvbnN0IGRhdGVGb3JtYXQgPSB0cmFuc0NvbXBhdEZvcm1hdCh0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRGF0ZVBpY2tlci5sYW5nLmRhdGVGb3JtYXQnLCAnWVlZWS1NTS1ERCcpKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUubmF0aXZlRGF0ZSwgZGF0ZUZvcm1hdCk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlLm5hdGl2ZURhdGUsICdkZCcpO1xuICAgICAgICBjb25zdCBjZWxsOiBEYXRlQ2VsbCA9IHtcbiAgICAgICAgICB0cmFja0J5SW5kZXg6IGRheSxcbiAgICAgICAgICB2YWx1ZTogZGF0ZS5uYXRpdmVEYXRlLFxuICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICBpc1RvZGF5OiBmYWxzZSxcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgY2VsbFJlbmRlcjogdmFsdWVGdW5jdGlvblByb3AodGhpcy5jZWxsUmVuZGVyISwgZGF0ZSksIC8vIEN1c3RvbWl6ZWQgY29udGVudFxuICAgICAgICAgIGZ1bGxDZWxsUmVuZGVyOiB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLmZ1bGxDZWxsUmVuZGVyISwgZGF0ZSksXG4gICAgICAgICAgY29udGVudDogYCR7ZGF0ZS5nZXREYXRlKCl9YCxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZShkYXRlKSxcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6ICgpID0+IHRoaXMuY2VsbEhvdmVyLmVtaXQoZGF0ZSlcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFkZENlbGxQcm9wZXJ0eShjZWxsLCBkYXRlKTtcblxuICAgICAgICBpZiAodGhpcy5zaG93V2VlayAmJiAhcm93LndlZWtOdW0pIHtcbiAgICAgICAgICByb3cud2Vla051bSA9IHRoaXMuZGF0ZUhlbHBlci5nZXRJU09XZWVrKGRhdGUubmF0aXZlRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGUuaXNTYW1lRGF5KHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgcm93LmlzQWN0aXZlID0gZGF0ZS5pc1NhbWVEYXkodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcm93LmRhdGVDZWxscy5wdXNoKGNlbGwpO1xuICAgICAgfVxuICAgICAgcm93LmNsYXNzTWFwID0ge1xuICAgICAgICBbYGFudC1waWNrZXItd2Vlay1wYW5lbC1yb3dgXTogdGhpcy5zaG93V2VlayAmJiAhdGhpcy5zaG93V2Vla0N1c3RvbSxcbiAgICAgICAgW2BjbWFjcy1waWNrZXItd2Vlay1wYW5lbC1yb3dgXTogdGhpcy5zaG93V2Vla0N1c3RvbSxcbiAgICAgICAgW2BhbnQtcGlja2VyLXdlZWstcGFuZWwtcm93LXNlbGVjdGVkYF06IHRoaXMuc2hvd1dlZWsgJiYgIXRoaXMuc2hvd1dlZWtDdXN0b20gJiYgcm93LmlzQWN0aXZlXG4gICAgICB9O1xuICAgICAgd2Vla1Jvd3MucHVzaChyb3cpO1xuICAgIH1cbiAgICByZXR1cm4gd2Vla1Jvd3M7XG4gIH1cblxuICBhZGRDZWxsUHJvcGVydHkoY2VsbDogRGF0ZUNlbGwsIGRhdGU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmhhc1JhbmdlVmFsdWUoKSkge1xuICAgICAgY29uc3QgW3N0YXJ0SG92ZXIsIGVuZEhvdmVyXSA9IHRoaXMuaG92ZXJWYWx1ZTtcbiAgICAgIGNvbnN0IFtzdGFydFNlbGVjdGVkLCBlbmRTZWxlY3RlZF0gPSB0aGlzLnNlbGVjdGVkVmFsdWU7XG4gICAgICAvLyBTZWxlY3RlZFxuICAgICAgaWYgKHN0YXJ0U2VsZWN0ZWQ/LmlzU2FtZURheShkYXRlKSkge1xuICAgICAgICBjZWxsLmlzU2VsZWN0ZWRTdGFydCA9IHRydWU7XG4gICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRTZWxlY3RlZD8uaXNTYW1lRGF5KGRhdGUpKSB7XG4gICAgICAgIGNlbGwuaXNTZWxlY3RlZEVuZCA9IHRydWU7XG4gICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydEhvdmVyICYmIGVuZEhvdmVyKSB7XG4gICAgICAgIGNlbGwuaXNIb3ZlclN0YXJ0ID0gZmFsc2U7XG4gICAgICAgIGNlbGwuaXNIb3ZlckVuZCA9IGZhbHNlO1xuICAgICAgICBjZWxsLmlzTGFzdENlbGxJblBhbmVsID0gZGF0ZS5pc0xhc3REYXlPZk1vbnRoKCk7XG4gICAgICAgIGNlbGwuaXNGaXJzdENlbGxJblBhbmVsID0gZGF0ZS5pc0ZpcnN0RGF5T2ZNb250aCgpO1xuICAgICAgICBjZWxsLmlzSW5Ib3ZlclJhbmdlID0gc3RhcnRIb3Zlci5pc0JlZm9yZURheShkYXRlKSAmJiBkYXRlLmlzQmVmb3JlRGF5KGVuZEhvdmVyKTtcbiAgICAgIH1cbiAgICAgIGNlbGwuaXNTdGFydFNpbmdsZSA9IHN0YXJ0U2VsZWN0ZWQgJiYgIWVuZFNlbGVjdGVkO1xuICAgICAgY2VsbC5pc0VuZFNpbmdsZSA9ICFzdGFydFNlbGVjdGVkICYmIGVuZFNlbGVjdGVkO1xuICAgICAgY2VsbC5pc0luU2VsZWN0ZWRSYW5nZSA9IHN0YXJ0U2VsZWN0ZWQ/LmlzQmVmb3JlRGF5KGRhdGUpICYmIGRhdGUuaXNCZWZvcmVEYXkoZW5kU2VsZWN0ZWQpO1xuICAgICAgY2VsbC5pc1JhbmdlU3RhcnROZWFySG92ZXIgPSBmYWxzZTtcbiAgICAgIGNlbGwuaXNSYW5nZUVuZE5lYXJIb3ZlciA9IGZhbHNlXG4gICAgfVxuXG4gICAgY2VsbC5pc1RvZGF5ID0gZGF0ZS5pc1RvZGF5KCk7XG4gICAgY2VsbC5pc1NlbGVjdGVkID0gZGF0ZS5pc1NhbWVEYXkodGhpcy52YWx1ZSk7XG4gICAgY2VsbC5pc0Rpc2FibGVkID0gISF0aGlzLmRpc2FibGVkRGF0ZT8uKGRhdGUubmF0aXZlRGF0ZSk7XG4gICAgY2VsbC5jbGFzc01hcCA9IHRoaXMuZ2V0Q2xhc3NNYXAoY2VsbCk7XG4gIH1cblxuICBnZXRDbGFzc01hcChjZWxsOiBEYXRlQ2VsbCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IENhbmR5RGF0ZShjZWxsLnZhbHVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIuZ2V0Q2xhc3NNYXAoY2VsbCksXG4gICAgICBbYGFudC1waWNrZXItY2VsbC10b2RheWBdOiAhIWNlbGwuaXNUb2RheSxcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLWluLXZpZXdgXTogZGF0ZS5pc1NhbWVNb250aCh0aGlzLmFjdGl2ZURhdGUpXG4gICAgfTtcbiAgfVxufVxuIiwiPHRhYmxlIGNsYXNzPVwiYW50LXBpY2tlci1jb250ZW50XCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cImdyaWRcIj5cbiAgPHRoZWFkICpuZ0lmPVwiaGVhZFJvdyAmJiBoZWFkUm93Lmxlbmd0aCA+IDBcIj5cbiAgICA8dHIgcm9sZT1cInJvd1wiPlxuICAgICAgPHRoICpuZ0lmPVwic2hvd1dlZWtcIiByb2xlPVwiY29sdW1uaGVhZGVyXCI+PC90aD5cbiAgICAgIDx0aCAqbmdGb3I9XCJsZXQgY2VsbCBvZiBoZWFkUm93XCIgcm9sZT1cImNvbHVtbmhlYWRlclwiIHRpdGxlPVwie3sgY2VsbC50aXRsZSB9fVwiPlxuICAgICAgICB7eyBjZWxsLmNvbnRlbnQgfX1cbiAgICAgIDwvdGg+XG4gICAgPC90cj5cbiAgPC90aGVhZD5cbiAgPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGJvZHlSb3dzOyB0cmFja0J5OiB0cmFja0J5Qm9keVJvd1wiIFtuZ0NsYXNzXT1cInJvdy5jbGFzc01hcCFcIiByb2xlPVwicm93XCI+XG4gICAgICA8dGQgKm5nSWY9XCJyb3cud2Vla051bVwiIHJvbGU9XCJncmlkY2VsbFwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWNlbGwtd2Vla1wiPlxuICAgICAgICB7eyByb3cud2Vla051bSB9fVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZFxuICAgICAgICAqbmdGb3I9XCJsZXQgY2VsbCBvZiByb3cuZGF0ZUNlbGxzOyB0cmFja0J5OiB0cmFja0J5Qm9keUNvbHVtblwiXG4gICAgICAgIHRpdGxlPVwie3sgY2VsbC50aXRsZSB9fVwiXG4gICAgICAgIHJvbGU9XCJncmlkY2VsbFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cImNlbGwuY2xhc3NNYXAhXCJcbiAgICAgICAgKGNsaWNrKT1cImNlbGwuaXNEaXNhYmxlZCA/IG51bGwgOiBjZWxsLm9uQ2xpY2soKVwiXG4gICAgICAgIChtb3VzZWVudGVyKT1cImNlbGwub25Nb3VzZUVudGVyKClcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJwcmVmaXhDbHNcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYW50LXBpY2tlcidcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihjZWxsLmNlbGxSZW5kZXIpXCI+XG4gICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgKm5nU3dpdGNoQ2FzZSBub3QgaGFzIHR5cGUgYXNzZXJ0aW9uIHN1cHBvcnQsIHRoZSBjZWxsUmVuZGVyIHR5cGUgaGVyZSBpcyBUZW1wbGF0ZVJlZiAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cIiRhbnkoY2VsbC5jZWxsUmVuZGVyKTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNlbGwudmFsdWUgfVwiXG4gICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhjZWxsLmNlbGxSZW5kZXIpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJjZWxsLmNlbGxSZW5kZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tY2VsbC1pbm5lclwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cImNlbGwuaXNTZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cImNlbGwuaXNEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3sgY2VsbC5jb250ZW50IH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2FudC1waWNrZXItY2FsZW5kYXInXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRhdGUgYW50LXBpY2tlci1jZWxsLWlubmVyXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItY2FsZW5kYXItZGF0ZS10b2RheV09XCJjZWxsLmlzVG9kYXlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2VsbC5mdWxsQ2VsbFJlbmRlcjsgZWxzZSBkZWZhdWx0Q2VsbFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiJGFueShjZWxsLmZ1bGxDZWxsUmVuZGVyKTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNlbGwudmFsdWUgfVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0Q2VsbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRhdGUtdmFsdWVcIj57eyBjZWxsLmNvbnRlbnQgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRhdGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cIiRhbnkoY2VsbC5jZWxsUmVuZGVyKTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNlbGwudmFsdWUgfVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG4iXX0=