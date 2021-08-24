/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { valueFunctionProp } from 'ng-zorro-antd/core/util';
import { AbstractTable } from './abstract-table';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
function MonthTableComponent_thead_1_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 6);
} }
function MonthTableComponent_thead_1_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("title", cell_r4.title);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", cell_r4.content, " ");
} }
function MonthTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead");
    i0.ɵɵelementStart(1, "tr", 3);
    i0.ɵɵtemplate(2, MonthTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    i0.ɵɵtemplate(3, MonthTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.showWeek);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.headRow);
} }
function MonthTableComponent_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
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
function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, cell_r9.value));
} }
function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", cell_r9.cellRender, i0.ɵɵsanitizeHtml);
} }
function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
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
function MonthTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainerStart(1, 13);
    i0.ɵɵtemplate(2, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    i0.ɵɵtemplate(3, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    i0.ɵɵtemplate(4, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
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
function MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, cell_r9.value));
} }
function MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
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
function MonthTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    i0.ɵɵtemplate(3, MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
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
function MonthTableComponent_tr_3_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵlistener("click", function MonthTableComponent_tr_3_td_2_Template_td_click_0_listener() { const cell_r9 = ctx.$implicit; return cell_r9.isDisabled ? null : cell_r9.onClick(); })("mouseenter", function MonthTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() { const cell_r9 = ctx.$implicit; return cell_r9.onMouseEnter(); });
    i0.ɵɵelementContainerStart(1, 13);
    i0.ɵɵtemplate(2, MonthTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    i0.ɵɵtemplate(3, MonthTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
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
function MonthTableComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 8);
    i0.ɵɵtemplate(1, MonthTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    i0.ɵɵtemplate(2, MonthTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
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
export class MonthTableComponent extends AbstractTable {
    constructor(dateHelper) {
        super();
        this.dateHelper = dateHelper;
        this.MAX_ROW = 4;
        this.MAX_COL = 3;
    }
    makeHeadRow() {
        return [];
    }
    makeBodyRows() {
        const months = [];
        let monthValue = 0;
        for (let rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
            const row = {
                dateCells: [],
                trackByIndex: rowIndex
            };
            for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
                const month = this.activeDate.setMonth(monthValue);
                const isDisabled = this.isDisabledMonth(month);
                const content = this.dateHelper.format(month.nativeDate, 'MMM');
                const cell = {
                    trackByIndex: colIndex,
                    value: month.nativeDate,
                    isDisabled,
                    isSelected: month.isSameMonth(this.value),
                    content,
                    title: content,
                    classMap: {},
                    cellRender: valueFunctionProp(this.cellRender, month),
                    fullCellRender: valueFunctionProp(this.fullCellRender, month),
                    onClick: () => this.chooseMonth(cell.value.getMonth()),
                    onMouseEnter: () => this.cellHover.emit(month)
                };
                this.addCellProperty(cell, month);
                row.dateCells.push(cell);
                monthValue++;
            }
            months.push(row);
        }
        return months;
    }
    isDisabledMonth(month) {
        if (!this.disabledDate) {
            return false;
        }
        const firstOfMonth = month.setDate(1);
        for (let date = firstOfMonth; date.getMonth() === month.getMonth(); date = date.addDays(1)) {
            if (!this.disabledDate(date.nativeDate)) {
                return false;
            }
        }
        return true;
    }
    addCellProperty(cell, month) {
        if (this.hasRangeValue()) {
            const [startHover, endHover] = this.hoverValue;
            const [startSelected, endSelected] = this.selectedValue;
            // Selected
            if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameMonth(month)) {
                cell.isSelectedStart = true;
                cell.isSelected = true;
            }
            if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameMonth(month)) {
                cell.isSelectedEnd = true;
                cell.isSelected = true;
            }
            if (startHover && endHover) {
                cell.isHoverStart = startHover.isSameMonth(month);
                cell.isHoverEnd = endHover.isSameMonth(month);
                cell.isLastCellInPanel = month.getMonth() === 11;
                cell.isFirstCellInPanel = month.getMonth() === 0;
                cell.isInHoverRange = startHover.isBeforeMonth(month) && month.isBeforeMonth(endHover);
            }
            cell.isStartSingle = startSelected && !endSelected;
            cell.isEndSingle = !startSelected && endSelected;
            cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeMonth(month)) && (month === null || month === void 0 ? void 0 : month.isBeforeMonth(endSelected));
            cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
            cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
        }
        else if (month.isSameMonth(this.value)) {
            cell.isSelected = true;
        }
        cell.classMap = this.getClassMap(cell);
    }
    chooseMonth(month) {
        this.value = this.activeDate.setMonth(month);
        this.valueChange.emit(this.value);
    }
}
MonthTableComponent.ɵfac = function MonthTableComponent_Factory(t) { return new (t || MonthTableComponent)(i0.ɵɵdirectiveInject(i1.DateHelperService)); };
MonthTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MonthTableComponent, selectors: [["month-table"]], exportAs: ["monthTable"], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]], template: function MonthTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, MonthTableComponent_thead_1_Template, 4, 2, "thead", 1);
        i0.ɵɵelementStart(2, "tbody");
        i0.ɵɵtemplate(3, MonthTableComponent_tr_3_Template, 3, 4, "tr", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.headRow && ctx.headRow.length > 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
    } }, directives: [i2.NgIf, i2.NgForOf, i2.NgClass, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MonthTableComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'month-table',
                exportAs: 'monthTable',
                templateUrl: 'abstract-table.html'
            }]
    }], function () { return [{ type: i1.DateHelperService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2xpYi9tb250aC10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2Fic3RyYWN0LXRhYmxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztJQ04zQyx3QkFBOEM7OztJQUM5Qyw2QkFBOEU7SUFDNUUsWUFDRjtJQUFBLGlCQUFLOzs7SUFGZ0QsZ0RBQXdCO0lBQzNFLGVBQ0Y7SUFERSxnREFDRjs7O0lBTEosNkJBQTZDO0lBQzNDLDZCQUFlO0lBQ2IsMEVBQThDO0lBQzlDLDBFQUVLO0lBQ1AsaUJBQUs7SUFDUCxpQkFBUTs7O0lBTEMsZUFBYztJQUFkLHNDQUFjO0lBQ0UsZUFBVTtJQUFWLHdDQUFVOzs7SUFPL0IsOEJBQTBFO0lBQ3hFLFlBQ0Y7SUFBQSxpQkFBSzs7OztJQUZtQyw2REFBaUM7SUFDdkUsZUFDRjtJQURFLCtDQUNGOzs7SUFjVSx3QkFFZ0I7Ozs7SUFKbEIsNkJBQTZEO0lBRTNELCtIQUVnQjtJQUNsQiwwQkFBZTs7O0lBRlYsZUFBeUM7SUFBekMscURBQXlDLHNFQUFBOzs7SUFHOUMsNkJBQWdFO0lBQzlELDJCQUEyQztJ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Z0NBQThEO1FBQzVELHdFQU9RO1FBQ1IsNkJBQU87UUFDTCxrRUEyREs7UUFDUCxpQkFBUTtRQUNWLGlCQUFROztRQXRFRSxlQUFtQztRQUFuQyw0REFBbUM7UUFTckIsZUFBYTtRQUFiLHNDQUFhLG9DQUFBOzt1RkRVeEIsbUJBQW1CO2NBUi9CLFNBQVM7ZUFBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUscUJBQXFCO2FBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25DaGFuZ2VzLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XG5pbXBvcnQgeyB2YWx1ZUZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IEFic3RyYWN0VGFibGUgfSBmcm9tICcuL2Fic3RyYWN0LXRhYmxlJztcbmltcG9ydCB7IERhdGVCb2R5Um93LCBEYXRlQ2VsbCB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbW9udGgtdGFibGUnLFxuICBleHBvcnRBczogJ21vbnRoVGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Fic3RyYWN0LXRhYmxlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1vbnRoVGFibGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFRhYmxlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBNQVhfUk9XID0gNDtcbiAgTUFYX0NPTCA9IDM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBtYWtlSGVhZFJvdygpOiBEYXRlQ2VsbFtdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBtYWtlQm9keVJvd3MoKTogRGF0ZUJvZHlSb3dbXSB7XG4gICAgY29uc3QgbW9udGhzOiBEYXRlQm9keVJvd1tdID0gW107XG4gICAgbGV0IG1vbnRoVmFsdWUgPSAwO1xuXG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHRoaXMuTUFYX1JPVzsgcm93SW5kZXgrKykge1xuICAgICAgY29uc3Qgcm93OiBEYXRlQm9keVJvdyA9IHtcbiAgICAgICAgZGF0ZUNlbGxzOiBbXSxcbiAgICAgICAgdHJhY2tCeUluZGV4OiByb3dJbmRleFxuICAgICAgfTtcblxuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IHRoaXMuTUFYX0NPTDsgY29sSW5kZXgrKykge1xuICAgICAgICBjb25zdCBtb250aCA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRNb250aChtb250aFZhbHVlKTtcbiAgICAgICAgY29uc3QgaXNEaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZE1vbnRoKG1vbnRoKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQobW9udGgubmF0aXZlRGF0ZSwgJ01NTScpO1xuICAgICAgICBjb25zdCBjZWxsOiBEYXRlQ2VsbCA9IHtcbiAgICAgICAgICB0cmFja0J5SW5kZXg6IGNvbEluZGV4LFxuICAgICAgICAgIHZhbHVlOiBtb250aC5uYXRpdmVEYXRlLFxuICAgICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNTZWxlY3RlZDogbW9udGguaXNTYW1lTW9udGgodGhpcy52YWx1ZSksXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICB0aXRsZTogY29udGVudCxcbiAgICAgICAgICBjbGFzc01hcDoge30sXG4gICAgICAgICAgY2VsbFJlbmRlcjogdmFsdWVGdW5jdGlvblByb3AodGhpcy5jZWxsUmVuZGVyISwgbW9udGgpLCAvLyBDdXN0b21pemVkIGNvbnRlbnRcbiAgICAgICAgICBmdWxsQ2VsbFJlbmRlcjogdmFsdWVGdW5jdGlvblByb3AodGhpcy5mdWxsQ2VsbFJlbmRlciEsIG1vbnRoKSxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNob29zZU1vbnRoKGNlbGwudmFsdWUuZ2V0TW9udGgoKSksIC8vIGRvbid0IHVzZSBtb250aFZhbHVlIGhlcmUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiAoKSA9PiB0aGlzLmNlbGxIb3Zlci5lbWl0KG1vbnRoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWRkQ2VsbFByb3BlcnR5KGNlbGwsIG1vbnRoKTtcbiAgICAgICAgcm93LmRhdGVDZWxscy5wdXNoKGNlbGwpO1xuICAgICAgICBtb250aFZhbHVlKys7XG4gICAgICB9XG4gICAgICBtb250aHMucHVzaChyb3cpO1xuICAgIH1cbiAgICByZXR1cm4gbW9udGhzO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0Rpc2FibGVkTW9udGgobW9udGg6IENhbmR5RGF0ZSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZERhdGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdE9mTW9udGggPSBtb250aC5zZXREYXRlKDEpO1xuXG4gICAgZm9yIChsZXQgZGF0ZSA9IGZpcnN0T2ZNb250aDsgZGF0ZS5nZXRNb250aCgpID09PSBtb250aC5nZXRNb250aCgpOyBkYXRlID0gZGF0ZS5hZGREYXlzKDEpKSB7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWREYXRlKGRhdGUubmF0aXZlRGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRDZWxsUHJvcGVydHkoY2VsbDogRGF0ZUNlbGwsIG1vbnRoOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oYXNSYW5nZVZhbHVlKCkpIHtcbiAgICAgIGNvbnN0IFtzdGFydEhvdmVyLCBlbmRIb3Zlcl0gPSB0aGlzLmhvdmVyVmFsdWU7XG4gICAgICBjb25zdCBbc3RhcnRTZWxlY3RlZCwgZW5kU2VsZWN0ZWRdID0gdGhpcy5zZWxlY3RlZFZhbHVlO1xuICAgICAgLy8gU2VsZWN0ZWRcbiAgICAgIGlmIChzdGFydFNlbGVjdGVkPy5pc1NhbWVNb250aChtb250aCkpIHtcbiAgICAgICAgY2VsbC5pc1NlbGVjdGVkU3RhcnQgPSB0cnVlO1xuICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kU2VsZWN0ZWQ/LmlzU2FtZU1vbnRoKG1vbnRoKSkge1xuICAgICAgICBjZWxsLmlzU2VsZWN0ZWRFbmQgPSB0cnVlO1xuICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhcnRIb3ZlciAmJiBlbmRIb3Zlcikge1xuICAgICAgICBjZWxsLmlzSG92ZXJTdGFydCA9IHN0YXJ0SG92ZXIuaXNTYW1lTW9udGgobW9udGgpO1xuICAgICAgICBjZWxsLmlzSG92ZXJFbmQgPSBlbmRIb3Zlci5pc1NhbWVNb250aChtb250aCk7XG4gICAgICAgIGNlbGwuaXNMYXN0Q2VsbEluUGFuZWwgPSBtb250aC5nZXRNb250aCgpID09PSAxMTtcbiAgICAgICAgY2VsbC5pc0ZpcnN0Q2VsbEluUGFuZWwgPSBtb250aC5nZXRNb250aCgpID09PSAwO1xuICAgICAgICBjZWxsLmlzSW5Ib3ZlclJhbmdlID0gc3RhcnRIb3Zlci5pc0JlZm9yZU1vbnRoKG1vbnRoKSAmJiBtb250aC5pc0JlZm9yZU1vbnRoKGVuZEhvdmVyKTtcbiAgICAgIH1cbiAgICAgIGNlbGwuaXNTdGFydFNpbmdsZSA9IHN0YXJ0U2VsZWN0ZWQgJiYgIWVuZFNlbGVjdGVkO1xuICAgICAgY2VsbC5pc0VuZFNpbmdsZSA9ICFzdGFydFNlbGVjdGVkICYmIGVuZFNlbGVjdGVkO1xuICAgICAgY2VsbC5pc0luU2VsZWN0ZWRSYW5nZSA9IHN0YXJ0U2VsZWN0ZWQ/LmlzQmVmb3JlTW9udGgobW9udGgpICYmIG1vbnRoPy5pc0JlZm9yZU1vbnRoKGVuZFNlbGVjdGVkKTtcbiAgICAgIGNlbGwuaXNSYW5nZVN0YXJ0TmVhckhvdmVyID0gc3RhcnRTZWxlY3RlZCAmJiBjZWxsLmlzSW5Ib3ZlclJhbmdlO1xuICAgICAgY2VsbC5pc1JhbmdlRW5kTmVhckhvdmVyID0gZW5kU2VsZWN0ZWQgJiYgY2VsbC5pc0luSG92ZXJSYW5nZTtcbiAgICB9IGVsc2UgaWYgKG1vbnRoLmlzU2FtZU1vbnRoKHRoaXMudmFsdWUpKSB7XG4gICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBjZWxsLmNsYXNzTWFwID0gdGhpcy5nZXRDbGFzc01hcChjZWxsKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hvb3NlTW9udGgobW9udGg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0TW9udGgobW9udGgpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIiwiPHRhYmxlIGNsYXNzPVwiYW50LXBpY2tlci1jb250ZW50XCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cImdyaWRcIj5cbiAgPHRoZWFkICpuZ0lmPVwiaGVhZFJvdyAmJiBoZWFkUm93Lmxlbmd0aCA+IDBcIj5cbiAgICA8dHIgcm9sZT1cInJvd1wiPlxuICAgICAgPHRoICpuZ0lmPVwic2hvd1dlZWtcIiByb2xlPVwiY29sdW1uaGVhZGVyXCI+PC90aD5cbiAgICAgIDx0aCAqbmdGb3I9XCJsZXQgY2VsbCBvZiBoZWFkUm93XCIgcm9sZT1cImNvbHVtbmhlYWRlclwiIHRpdGxlPVwie3sgY2VsbC50aXRsZSB9fVwiPlxuICAgICAgICB7eyBjZWxsLmNvbnRlbnQgfX1cbiAgICAgIDwvdGg+XG4gICAgPC90cj5cbiAgPC90aGVhZD5cbiAgPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGJvZHlSb3dzOyB0cmFja0J5OiB0cmFja0J5Qm9keVJvd1wiIFtuZ0NsYXNzXT1cInJvdy5jbGFzc01hcCFcIiByb2xlPVwicm93XCI+XG4gICAgICA8dGQgKm5nSWY9XCJyb3cud2Vla051bVwiIHJvbGU9XCJncmlkY2VsbFwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWNlbGwtd2Vla1wiPlxuICAgICAgICB7eyByb3cud2Vla051bSB9fVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZFxuICAgICAgICAqbmdGb3I9XCJsZXQgY2VsbCBvZiByb3cuZGF0ZUNlbGxzOyB0cmFja0J5OiB0cmFja0J5Qm9keUNvbHVtblwiXG4gICAgICAgIHRpdGxlPVwie3sgY2VsbC50aXRsZSB9fVwiXG4gICAgICAgIHJvbGU9XCJncmlkY2VsbFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cImNlbGwuY2xhc3NNYXAhXCJcbiAgICAgICAgKGNsaWNrKT1cImNlbGwuaXNEaXNhYmxlZCA/IG51bGwgOiBjZWxsLm9uQ2xpY2soKVwiXG4gICAgICAgIChtb3VzZWVudGVyKT1cImNlbGwub25Nb3VzZUVudGVyKClcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJwcmVmaXhDbHNcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYW50LXBpY2tlcidcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihjZWxsLmNlbGxSZW5kZXIpXCI+XG4gICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgKm5nU3dpdGNoQ2FzZSBub3QgaGFzIHR5cGUgYXNzZXJ0aW9uIHN1cHBvcnQsIHRoZSBjZWxsUmVuZGVyIHR5cGUgaGVyZSBpcyBUZW1wbGF0ZVJlZiAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cIiRhbnkoY2VsbC5jZWxsUmVuZGVyKTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNlbGwudmFsdWUgfVwiXG4gICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhjZWxsLmNlbGxSZW5kZXIpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJjZWxsLmNlbGxSZW5kZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tY2VsbC1pbm5lclwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cImNlbGwuaXNTZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cImNlbGwuaXNEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3sgY2VsbC5jb250ZW50IH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2FudC1waWNrZXItY2FsZW5kYXInXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRhdGUgYW50LXBpY2tlci1jZWxsLWlubmVyXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItY2FsZW5kYXItZGF0ZS10b2RheV09XCJjZWxsLmlzVG9kYXlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2VsbC5mdWxsQ2VsbFJlbmRlcjsgZWxzZSBkZWZhdWx0Q2VsbFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiJGFueShjZWxsLmZ1bGxDZWxsUmVuZGVyKTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNlbGwudmFsdWUgfVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0Q2VsbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRhdGUtdmFsdWVcIj57eyBjZWxsLmNvbnRlbnQgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRhdGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cIiRhbnkoY2VsbC5jZWxsUmVuZGVyKTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNlbGwudmFsdWUgfVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG4iXX0=