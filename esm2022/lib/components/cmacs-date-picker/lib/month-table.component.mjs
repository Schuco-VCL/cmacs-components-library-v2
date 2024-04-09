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
    i0.ɵɵelementStart(0, "thead")(1, "tr", 3);
    i0.ɵɵtemplate(2, MonthTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    i0.ɵɵtemplate(3, MonthTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    i0.ɵɵelementEnd()();
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
    i0.ɵɵelementContainerStart(0)(1, 13);
    i0.ɵɵtemplate(2, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    i0.ɵɵtemplate(3, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    i0.ɵɵtemplate(4, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
    i0.ɵɵelementContainerEnd()();
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
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵlistener("click", function MonthTableComponent_tr_3_td_2_Template_td_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r29); const cell_r9 = restoredCtx.$implicit; return i0.ɵɵresetView(cell_r9.isDisabled ? null : cell_r9.onClick()); })("mouseenter", function MonthTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r29); const cell_r9 = restoredCtx.$implicit; return i0.ɵɵresetView(cell_r9.onMouseEnter()); });
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
                    isToday: month.isSameMonth(new Date()),
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
            if (startSelected?.isSameMonth(month)) {
                cell.isSelectedStart = true;
                cell.isSelected = true;
            }
            if (endSelected?.isSameMonth(month)) {
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
            cell.isInSelectedRange = startSelected?.isBeforeMonth(month) && month?.isBeforeMonth(endSelected);
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
    static { this.ɵfac = function MonthTableComponent_Factory(t) { return new (t || MonthTableComponent)(i0.ɵɵdirectiveInject(i1.DateHelperService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MonthTableComponent, selectors: [["month-table"]], exportAs: ["monthTable"], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]], template: function MonthTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵtemplate(1, MonthTableComponent_thead_1_Template, 4, 2, "thead", 1);
            i0.ɵɵelementStart(2, "tbody");
            i0.ɵɵtemplate(3, MonthTableComponent_tr_3_Template, 3, 4, "tr", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.headRow && ctx.headRow.length > 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MonthTableComponent, [{
        type: Component,
        args: [{ encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: 'month-table', exportAs: 'monthTable', template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\r\n  <thead *ngIf=\"headRow && headRow.length > 0\">\r\n    <tr role=\"row\">\r\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\r\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\r\n        {{ cell.content }}\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\r\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\r\n        {{ row.weekNum }}\r\n      </td>\r\n      <td\r\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\r\n        title=\"{{ cell.title }}\"\r\n        role=\"gridcell\"\r\n        [ngClass]=\"cell.classMap!\"\r\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\r\n        (mouseenter)=\"cell.onMouseEnter()\"\r\n      >\r\n        <ng-container [ngSwitch]=\"prefixCls\">\r\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\r\n            <ng-container [ngSwitch]=\"true\">\r\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\r\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\r\n                <ng-container\r\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\r\n                ></ng-container>\r\n              </ng-container>\r\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\r\n                <span [innerHTML]=\"cell.cellRender\"></span>\r\n              </ng-container>\r\n              <ng-container *ngSwitchDefault>\r\n                <div\r\n                  class=\"{{ prefixCls }}-cell-inner\"\r\n                  [attr.aria-selected]=\"cell.isSelected\"\r\n                  [attr.aria-disabled]=\"cell.isDisabled\"\r\n                >\r\n                  {{ cell.content }}\r\n                </div>\r\n              </ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\r\n            <div\r\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\r\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\r\n            >\r\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\r\n                <ng-container\r\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\r\n                >\r\n                </ng-container>\r\n              </ng-container>\r\n              <ng-template #defaultCell>\r\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\r\n                <div class=\"{{ prefixCls }}-date-content\">\r\n                  <ng-container\r\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\r\n                  >\r\n                  </ng-container>\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n          </ng-container>\r\n        </ng-container>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n" }]
    }], function () { return [{ type: i1.DateHelperService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2xpYi9tb250aC10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2Fic3RyYWN0LXRhYmxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztJQ1AzQyx3QkFBOEM7OztJQUM5Qyw2QkFBOEU7SUFDNUUsWUFDRjtJQUFBLGlCQUFLOzs7SUFGZ0QsZ0RBQXdCO0lBQzNFLGVBQ0Y7SUFERSxnREFDRjs7O0lBTEosNkJBQTZDLFlBQUE7SUFFekMsMEVBQThDO0lBQzlDLDBFQUVLO0lBQ1AsaUJBQUssRUFBQTs7O0lBSkUsZUFBYztJQUFkLHNDQUFjO0lBQ0UsZUFBVTtJQUFWLHdDQUFVOzs7SUFPL0IsOEJBQTBFO0lBQ3hFLFlBQ0Y7SUFBQSxpQkFBSzs7OztJQUZtQyw2REFBaUM7SUFDdkUsZUFDRjtJQURFLCtDQUNGOzs7SUFjVSx3QkFFZ0I7Ozs7SUFKbEIsNkJBQTZEO0lBRTNELCtIQUVnQjtJQUNsQiwwQkFBZTs7O0lBRlYsZUFBeUM7SUFBekMscURBQXlDLHNFQUFBOzs7SUFHOUMsNkJBQWdFO0lBQzlELDJCQUEyQztJQUM3QywwQkFBZTs7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LDZCQUFPO1lBQ0wsa0VBMkRLO1lBQ1AsaUJBQVEsRUFBQTs7WUFyRUEsZUFBbUM7WUFBbkMsNERBQW1DO1lBU3JCLGVBQWE7WUFBYixzQ0FBYSxvQ0FBQTs7O3VGRFd4QixtQkFBbUI7Y0FSL0IsU0FBUztnQ0FDTyxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLFlBRXJDLGFBQWEsWUFDYixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uQ2hhbmdlcywgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBub3cgfSBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XHJcbmltcG9ydCB7IHZhbHVlRnVuY3Rpb25Qcm9wIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IEFic3RyYWN0VGFibGUgfSBmcm9tICcuL2Fic3RyYWN0LXRhYmxlJztcclxuaW1wb3J0IHsgRGF0ZUJvZHlSb3csIERhdGVDZWxsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdtb250aC10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdtb250aFRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2Fic3RyYWN0LXRhYmxlLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb250aFRhYmxlQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RUYWJsZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBNQVhfUk9XID0gNDtcclxuICBNQVhfQ09MID0gMztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG1ha2VIZWFkUm93KCk6IERhdGVDZWxsW10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgbWFrZUJvZHlSb3dzKCk6IERhdGVCb2R5Um93W10ge1xyXG4gICAgY29uc3QgbW9udGhzOiBEYXRlQm9keVJvd1tdID0gW107XHJcbiAgICBsZXQgbW9udGhWYWx1ZSA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHRoaXMuTUFYX1JPVzsgcm93SW5kZXgrKykge1xyXG4gICAgICBjb25zdCByb3c6IERhdGVCb2R5Um93ID0ge1xyXG4gICAgICAgIGRhdGVDZWxsczogW10sXHJcbiAgICAgICAgdHJhY2tCeUluZGV4OiByb3dJbmRleFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IHRoaXMuTUFYX0NPTDsgY29sSW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IG1vbnRoID0gdGhpcy5hY3RpdmVEYXRlLnNldE1vbnRoKG1vbnRoVmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWRNb250aChtb250aCk7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQobW9udGgubmF0aXZlRGF0ZSwgJ01NTScpO1xyXG4gICAgICAgIGNvbnN0IGNlbGw6IERhdGVDZWxsID0ge1xyXG4gICAgICAgICAgdHJhY2tCeUluZGV4OiBjb2xJbmRleCxcclxuICAgICAgICAgIHZhbHVlOiBtb250aC5uYXRpdmVEYXRlLFxyXG4gICAgICAgICAgaXNEaXNhYmxlZCxcclxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IG1vbnRoLmlzU2FtZU1vbnRoKHRoaXMudmFsdWUpLFxyXG4gICAgICAgICAgaXNUb2RheTogbW9udGguaXNTYW1lTW9udGgobmV3IERhdGUoKSksXHJcbiAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgdGl0bGU6IGNvbnRlbnQsXHJcbiAgICAgICAgICBjbGFzc01hcDoge30sXHJcbiAgICAgICAgICBjZWxsUmVuZGVyOiB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLmNlbGxSZW5kZXIhLCBtb250aCksIC8vIEN1c3RvbWl6ZWQgY29udGVudFxyXG4gICAgICAgICAgZnVsbENlbGxSZW5kZXI6IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuZnVsbENlbGxSZW5kZXIhLCBtb250aCksXHJcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNob29zZU1vbnRoKGNlbGwudmFsdWUuZ2V0TW9udGgoKSksIC8vIGRvbid0IHVzZSBtb250aFZhbHVlIGhlcmUsXHJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6ICgpID0+IHRoaXMuY2VsbEhvdmVyLmVtaXQobW9udGgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDZWxsUHJvcGVydHkoY2VsbCwgbW9udGgpO1xyXG4gICAgICAgIHJvdy5kYXRlQ2VsbHMucHVzaChjZWxsKTtcclxuICAgICAgICBtb250aFZhbHVlKys7XHJcbiAgICAgIH1cclxuICAgICAgbW9udGhzLnB1c2gocm93KTtcclxuICAgIH1cclxuICAgIHJldHVybiBtb250aHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRGlzYWJsZWRNb250aChtb250aDogQ2FuZHlEYXRlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWREYXRlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaXJzdE9mTW9udGggPSBtb250aC5zZXREYXRlKDEpO1xyXG5cclxuICAgIGZvciAobGV0IGRhdGUgPSBmaXJzdE9mTW9udGg7IGRhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGguZ2V0TW9udGgoKTsgZGF0ZSA9IGRhdGUuYWRkRGF5cygxKSkge1xyXG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWREYXRlKGRhdGUubmF0aXZlRGF0ZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkQ2VsbFByb3BlcnR5KGNlbGw6IERhdGVDZWxsLCBtb250aDogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5oYXNSYW5nZVZhbHVlKCkpIHtcclxuICAgICAgY29uc3QgW3N0YXJ0SG92ZXIsIGVuZEhvdmVyXSA9IHRoaXMuaG92ZXJWYWx1ZTtcclxuICAgICAgY29uc3QgW3N0YXJ0U2VsZWN0ZWQsIGVuZFNlbGVjdGVkXSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcclxuICAgICAgLy8gU2VsZWN0ZWRcclxuICAgICAgaWYgKHN0YXJ0U2VsZWN0ZWQ/LmlzU2FtZU1vbnRoKG1vbnRoKSkge1xyXG4gICAgICAgIGNlbGwuaXNTZWxlY3RlZFN0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZW5kU2VsZWN0ZWQ/LmlzU2FtZU1vbnRoKG1vbnRoKSkge1xyXG4gICAgICAgIGNlbGwuaXNTZWxlY3RlZEVuZCA9IHRydWU7XHJcbiAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN0YXJ0SG92ZXIgJiYgZW5kSG92ZXIpIHtcclxuICAgICAgICBjZWxsLmlzSG92ZXJTdGFydCA9IHN0YXJ0SG92ZXIuaXNTYW1lTW9udGgobW9udGgpO1xyXG4gICAgICAgIGNlbGwuaXNIb3ZlckVuZCA9IGVuZEhvdmVyLmlzU2FtZU1vbnRoKG1vbnRoKTtcclxuICAgICAgICBjZWxsLmlzTGFzdENlbGxJblBhbmVsID0gbW9udGguZ2V0TW9udGgoKSA9PT0gMTE7XHJcbiAgICAgICAgY2VsbC5pc0ZpcnN0Q2VsbEluUGFuZWwgPSBtb250aC5nZXRNb250aCgpID09PSAwO1xyXG4gICAgICAgIGNlbGwuaXNJbkhvdmVyUmFuZ2UgPSBzdGFydEhvdmVyLmlzQmVmb3JlTW9udGgobW9udGgpICYmIG1vbnRoLmlzQmVmb3JlTW9udGgoZW5kSG92ZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNlbGwuaXNTdGFydFNpbmdsZSA9IHN0YXJ0U2VsZWN0ZWQgJiYgIWVuZFNlbGVjdGVkO1xyXG4gICAgICBjZWxsLmlzRW5kU2luZ2xlID0gIXN0YXJ0U2VsZWN0ZWQgJiYgZW5kU2VsZWN0ZWQ7XHJcbiAgICAgIGNlbGwuaXNJblNlbGVjdGVkUmFuZ2UgPSBzdGFydFNlbGVjdGVkPy5pc0JlZm9yZU1vbnRoKG1vbnRoKSAmJiBtb250aD8uaXNCZWZvcmVNb250aChlbmRTZWxlY3RlZCk7XHJcbiAgICAgIGNlbGwuaXNSYW5nZVN0YXJ0TmVhckhvdmVyID0gc3RhcnRTZWxlY3RlZCAmJiBjZWxsLmlzSW5Ib3ZlclJhbmdlO1xyXG4gICAgICBjZWxsLmlzUmFuZ2VFbmROZWFySG92ZXIgPSBlbmRTZWxlY3RlZCAmJiBjZWxsLmlzSW5Ib3ZlclJhbmdlO1xyXG4gICAgfSBlbHNlIGlmIChtb250aC5pc1NhbWVNb250aCh0aGlzLnZhbHVlKSkge1xyXG4gICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2VsbC5jbGFzc01hcCA9IHRoaXMuZ2V0Q2xhc3NNYXAoY2VsbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNob29zZU1vbnRoKG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0TW9udGgobW9udGgpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxufVxyXG4iLCI8dGFibGUgY2xhc3M9XCJhbnQtcGlja2VyLWNvbnRlbnRcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwiZ3JpZFwiPlxyXG4gIDx0aGVhZCAqbmdJZj1cImhlYWRSb3cgJiYgaGVhZFJvdy5sZW5ndGggPiAwXCI+XHJcbiAgICA8dHIgcm9sZT1cInJvd1wiPlxyXG4gICAgICA8dGggKm5nSWY9XCJzaG93V2Vla1wiIHJvbGU9XCJjb2x1bW5oZWFkZXJcIj48L3RoPlxyXG4gICAgICA8dGggKm5nRm9yPVwibGV0IGNlbGwgb2YgaGVhZFJvd1wiIHJvbGU9XCJjb2x1bW5oZWFkZXJcIiB0aXRsZT1cInt7IGNlbGwudGl0bGUgfX1cIj5cclxuICAgICAgICB7eyBjZWxsLmNvbnRlbnQgfX1cclxuICAgICAgPC90aD5cclxuICAgIDwvdHI+XHJcbiAgPC90aGVhZD5cclxuICA8dGJvZHk+XHJcbiAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBib2R5Um93czsgdHJhY2tCeTogdHJhY2tCeUJvZHlSb3dcIiBbbmdDbGFzc109XCJyb3cuY2xhc3NNYXAhXCIgcm9sZT1cInJvd1wiPlxyXG4gICAgICA8dGQgKm5nSWY9XCJyb3cud2Vla051bVwiIHJvbGU9XCJncmlkY2VsbFwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWNlbGwtd2Vla1wiPlxyXG4gICAgICAgIHt7IHJvdy53ZWVrTnVtIH19XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZFxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBjZWxsIG9mIHJvdy5kYXRlQ2VsbHM7IHRyYWNrQnk6IHRyYWNrQnlCb2R5Q29sdW1uXCJcclxuICAgICAgICB0aXRsZT1cInt7IGNlbGwudGl0bGUgfX1cIlxyXG4gICAgICAgIHJvbGU9XCJncmlkY2VsbFwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwiY2VsbC5jbGFzc01hcCFcIlxyXG4gICAgICAgIChjbGljayk9XCJjZWxsLmlzRGlzYWJsZWQgPyBudWxsIDogY2VsbC5vbkNsaWNrKClcIlxyXG4gICAgICAgIChtb3VzZWVudGVyKT1cImNlbGwub25Nb3VzZUVudGVyKClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwicHJlZml4Q2xzXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYW50LXBpY2tlcidcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoY2VsbC5jZWxsUmVuZGVyKVwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgKm5nU3dpdGNoQ2FzZSBub3QgaGFzIHR5cGUgYXNzZXJ0aW9uIHN1cHBvcnQsIHRoZSBjZWxsUmVuZGVyIHR5cGUgaGVyZSBpcyBUZW1wbGF0ZVJlZiAtLT5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCIkYW55KGNlbGwuY2VsbFJlbmRlcik7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjZWxsLnZhbHVlIH1cIlxyXG4gICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoY2VsbC5jZWxsUmVuZGVyKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJjZWxsLmNlbGxSZW5kZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1jZWxsLWlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJjZWxsLmlzU2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cImNlbGwuaXNEaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt7IGNlbGwuY29udGVudCB9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYW50LXBpY2tlci1jYWxlbmRhcidcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRhdGUgYW50LXBpY2tlci1jZWxsLWlubmVyXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1jYWxlbmRhci1kYXRlLXRvZGF5XT1cImNlbGwuaXNUb2RheVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2VsbC5mdWxsQ2VsbFJlbmRlcjsgZWxzZSBkZWZhdWx0Q2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cIiRhbnkoY2VsbC5mdWxsQ2VsbFJlbmRlcik7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjZWxsLnZhbHVlIH1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0Q2VsbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZGF0ZS12YWx1ZVwiPnt7IGNlbGwuY29udGVudCB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1kYXRlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiJGFueShjZWxsLmNlbGxSZW5kZXIpOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY2VsbC52YWx1ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbiJdfQ==