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
function YearTableComponent_thead_1_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 6);
} }
function YearTableComponent_thead_1_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("title", cell_r4.title);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", cell_r4.content, " ");
} }
function YearTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead")(1, "tr", 3);
    i0.ɵɵtemplate(2, YearTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    i0.ɵɵtemplate(3, YearTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.showWeek);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.headRow);
} }
function YearTableComponent_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
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
function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, cell_r9.value));
} }
function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", cell_r9.cellRender, i0.ɵɵsanitizeHtml);
} }
function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
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
function YearTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0)(1, 13);
    i0.ɵɵtemplate(2, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    i0.ɵɵtemplate(3, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    i0.ɵɵtemplate(4, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
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
function YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, cell_r9.value));
} }
function YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
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
function YearTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    i0.ɵɵtemplate(3, YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
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
function YearTableComponent_tr_3_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵlistener("click", function YearTableComponent_tr_3_td_2_Template_td_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r29); const cell_r9 = restoredCtx.$implicit; return i0.ɵɵresetView(cell_r9.isDisabled ? null : cell_r9.onClick()); })("mouseenter", function YearTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r29); const cell_r9 = restoredCtx.$implicit; return i0.ɵɵresetView(cell_r9.onMouseEnter()); });
    i0.ɵɵelementContainerStart(1, 13);
    i0.ɵɵtemplate(2, YearTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    i0.ɵɵtemplate(3, YearTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
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
function YearTableComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 8);
    i0.ɵɵtemplate(1, YearTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    i0.ɵɵtemplate(2, YearTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
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
export class YearTableComponent extends AbstractTable {
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
        const currentYear = this.activeDate && this.activeDate.getYear();
        const startYear = parseInt(`${currentYear / 10}`, 10) * 10;
        const endYear = startYear + 9;
        const previousYear = startYear - 1;
        const years = [];
        let yearValue = 0;
        for (let rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
            const row = {
                dateCells: [],
                trackByIndex: rowIndex
            };
            for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
                const yearNum = previousYear + yearValue;
                const year = this.activeDate.setYear(yearNum);
                const content = this.dateHelper.format(year.nativeDate, 'yyyy');
                const isDisabled = this.isDisabledYear(year);
                const cell = {
                    trackByIndex: colIndex,
                    value: year.nativeDate,
                    isToday: year.isSameYear(new Date()),
                    isDisabled,
                    isSameDecade: yearNum >= startYear && yearNum <= endYear,
                    isSelected: yearNum === (this.value && this.value.getYear()),
                    content,
                    title: content,
                    classMap: {},
                    isLastCellInPanel: year.getYear() === endYear,
                    isFirstCellInPanel: year.getYear() === startYear,
                    cellRender: valueFunctionProp(this.cellRender, year),
                    fullCellRender: valueFunctionProp(this.fullCellRender, year),
                    onClick: () => this.chooseYear(cell.value.getFullYear()),
                    onMouseEnter: () => this.cellHover.emit(year)
                };
                this.addCellProperty(cell, year);
                row.dateCells.push(cell);
                yearValue++;
            }
            years.push(row);
        }
        return years;
    }
    getClassMap(cell) {
        return {
            ...super.getClassMap(cell),
            [`ant-picker-cell-in-view`]: !!cell.isSameDecade
        };
    }
    isDisabledYear(year) {
        if (!this.disabledDate) {
            return false;
        }
        const firstOfMonth = year.setMonth(0).setDate(1);
        for (let date = firstOfMonth; date.getYear() === year.getYear(); date = date.addDays(1)) {
            if (!this.disabledDate(date.nativeDate)) {
                return false;
            }
        }
        return true;
    }
    addCellProperty(cell, year) {
        if (this.hasRangeValue()) {
            const [startHover, endHover] = this.hoverValue;
            const [startSelected, endSelected] = this.selectedValue;
            // Selected
            if (startSelected?.isSameYear(year)) {
                cell.isSelectedStart = true;
                cell.isSelected = true;
            }
            if (endSelected?.isSameYear(year)) {
                cell.isSelectedEnd = true;
                cell.isSelected = true;
            }
            if (startHover && endHover) {
                cell.isHoverStart = startHover.isSameYear(year);
                cell.isHoverEnd = endHover.isSameYear(year);
                cell.isInHoverRange = startHover.isBeforeYear(year) && year.isBeforeYear(endHover);
            }
            cell.isStartSingle = startSelected && !endSelected;
            cell.isEndSingle = !startSelected && endSelected;
            cell.isInSelectedRange = startSelected?.isBeforeYear(year) && year?.isBeforeYear(endSelected);
            cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
            cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
        }
        else if (year.isSameYear(this.value)) {
            cell.isSelected = true;
        }
        cell.classMap = this.getClassMap(cell);
    }
    chooseYear(year) {
        this.value = this.activeDate.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    }
    static { this.ɵfac = function YearTableComponent_Factory(t) { return new (t || YearTableComponent)(i0.ɵɵdirectiveInject(i1.DateHelperService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: YearTableComponent, selectors: [["year-table"]], exportAs: ["yearTable"], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]], template: function YearTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵtemplate(1, YearTableComponent_thead_1_Template, 4, 2, "thead", 1);
            i0.ɵɵelementStart(2, "tbody");
            i0.ɵɵtemplate(3, YearTableComponent_tr_3_Template, 3, 4, "tr", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.headRow && ctx.headRow.length > 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(YearTableComponent, [{
        type: Component,
        args: [{ encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: 'year-table', exportAs: 'yearTable', template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n" }]
    }], function () { return [{ type: i1.DateHelperService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL3llYXItdGFibGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2xpYi9hYnN0cmFjdC10YWJsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztJQ04zQyx3QkFBOEM7OztJQUM5Qyw2QkFBOEU7SUFDNUUsWUFDRjtJQUFBLGlCQUFLOzs7SUFGZ0QsZ0RBQXdCO0lBQzNFLGVBQ0Y7SUFERSxnREFDRjs7O0lBTEosNkJBQTZDLFlBQUE7SUFFekMseUVBQThDO0lBQzlDLHlFQUVLO0lBQ1AsaUJBQUssRUFBQTs7O0lBSkUsZUFBYztJQUFkLHNDQUFjO0lBQ0UsZUFBVTtJQUFWLHdDQUFVOzs7SUFPL0IsOEJBQTBFO0lBQ3hFLFlBQ0Y7SUFBQSxpQkFBSzs7OztJQUZtQyw2REFBaUM7SUFDdkUsZUFDRjtJQURFLCtDQUNGOzs7SUFjVSx3QkFFZ0I7Ozs7SUFKbEIsNkJBQTZEO0lBRTNELDhIQUVnQjtJQUNsQiwwQkFBZTs7O0lBRlYsZUFBeUM7SUFBekMscURBQXlDLHNFQUFBOzs7SUFHOUMsNkJBQWdFO0lBQzlELDJCQUEyQztJQUM3QywwQkFBZTs7O0lB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SSxDQUFDLHFCQUFxQixHQUFHLGFBQWEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUMvRDthQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLFVBQVUsQ0FBQyxJQUFZO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO21GQW5IVSxrQkFBa0I7b0VBQWxCLGtCQUFrQjtZQ3BCL0IsZ0NBQThEO1lBQzVELHVFQU9RO1lBQ1IsNkJBQU87WUFDTCxpRUEyREs7WUFDUCxpQkFBUSxFQUFBOztZQXJFQSxlQUFtQztZQUFuQyw0REFBbUM7WUFTckIsZUFBYTtZQUFiLHNDQUFhLG9DQUFBOzs7dUZEVXhCLGtCQUFrQjtjQVI5QixTQUFTO2dDQUNPLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0sWUFFckMsWUFBWSxZQUNaLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xuaW1wb3J0IHsgdmFsdWVGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBBYnN0cmFjdFRhYmxlIH0gZnJvbSAnLi9hYnN0cmFjdC10YWJsZSc7XG5pbXBvcnQgeyBEYXRlQm9keVJvdywgRGF0ZUNlbGwsIFllYXJDZWxsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd5ZWFyLXRhYmxlJyxcbiAgZXhwb3J0QXM6ICd5ZWFyVGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Fic3RyYWN0LXRhYmxlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFllYXJUYWJsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0VGFibGUge1xuICBNQVhfUk9XID0gNDtcbiAgTUFYX0NPTCA9IDM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBtYWtlSGVhZFJvdygpOiBEYXRlQ2VsbFtdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBtYWtlQm9keVJvd3MoKTogRGF0ZUJvZHlSb3dbXSB7XG4gICAgY29uc3QgY3VycmVudFllYXIgPSB0aGlzLmFjdGl2ZURhdGUgJiYgdGhpcy5hY3RpdmVEYXRlLmdldFllYXIoKTtcbiAgICBjb25zdCBzdGFydFllYXIgPSBwYXJzZUludChgJHtjdXJyZW50WWVhciAvIDEwfWAsIDEwKSAqIDEwO1xuICAgIGNvbnN0IGVuZFllYXIgPSBzdGFydFllYXIgKyA5O1xuICAgIGNvbnN0IHByZXZpb3VzWWVhciA9IHN0YXJ0WWVhciAtIDE7XG4gICAgY29uc3QgeWVhcnM6IERhdGVCb2R5Um93W10gPSBbXTtcbiAgICBsZXQgeWVhclZhbHVlID0gMDtcblxuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCB0aGlzLk1BWF9ST1c7IHJvd0luZGV4KyspIHtcbiAgICAgIGNvbnN0IHJvdzogRGF0ZUJvZHlSb3cgPSB7XG4gICAgICAgIGRhdGVDZWxsczogW10sXG4gICAgICAgIHRyYWNrQnlJbmRleDogcm93SW5kZXhcbiAgICAgIH07XG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgdGhpcy5NQVhfQ09MOyBjb2xJbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHllYXJOdW0gPSBwcmV2aW91c1llYXIgKyB5ZWFyVmFsdWU7XG4gICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmFjdGl2ZURhdGUuc2V0WWVhcih5ZWFyTnVtKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoeWVhci5uYXRpdmVEYXRlLCAneXl5eScpO1xuICAgICAgICBjb25zdCBpc0Rpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkWWVhcih5ZWFyKTtcbiAgICAgICAgY29uc3QgY2VsbDogWWVhckNlbGwgPSB7XG4gICAgICAgICAgdHJhY2tCeUluZGV4OiBjb2xJbmRleCxcbiAgICAgICAgICB2YWx1ZTogeWVhci5uYXRpdmVEYXRlLFxuICAgICAgICAgIGlzVG9kYXk6IHllYXIuaXNTYW1lWWVhcihuZXcgRGF0ZSgpKSxcbiAgICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICAgIGlzU2FtZURlY2FkZTogeWVhck51bSA+PSBzdGFydFllYXIgJiYgeWVhck51bSA8PSBlbmRZZWFyLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IHllYXJOdW0gPT09ICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUuZ2V0WWVhcigpKSxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxuICAgICAgICAgIGNsYXNzTWFwOiB7fSxcbiAgICAgICAgICBpc0xhc3RDZWxsSW5QYW5lbDogeWVhci5nZXRZZWFyKCkgPT09IGVuZFllYXIsXG4gICAgICAgICAgaXNGaXJzdENlbGxJblBhbmVsOiB5ZWFyLmdldFllYXIoKSA9PT0gc3RhcnRZZWFyLFxuICAgICAgICAgIGNlbGxSZW5kZXI6IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuY2VsbFJlbmRlciEsIHllYXIpLCAvLyBDdXN0b21pemVkIGNvbnRlbnRcbiAgICAgICAgICBmdWxsQ2VsbFJlbmRlcjogdmFsdWVGdW5jdGlvblByb3AodGhpcy5mdWxsQ2VsbFJlbmRlciEsIHllYXIpLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hvb3NlWWVhcihjZWxsLnZhbHVlLmdldEZ1bGxZZWFyKCkpLCAvLyBkb24ndCB1c2UgeWVhclZhbHVlIGhlcmUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiAoKSA9PiB0aGlzLmNlbGxIb3Zlci5lbWl0KHllYXIpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hZGRDZWxsUHJvcGVydHkoY2VsbCwgeWVhcik7XG4gICAgICAgIHJvdy5kYXRlQ2VsbHMucHVzaChjZWxsKTtcbiAgICAgICAgeWVhclZhbHVlKys7XG4gICAgICB9XG4gICAgICB5ZWFycy5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiB5ZWFycztcbiAgfVxuXG4gIGdldENsYXNzTWFwKGNlbGw6IFllYXJDZWxsKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdXBlci5nZXRDbGFzc01hcChjZWxsKSxcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLWluLXZpZXdgXTogISFjZWxsLmlzU2FtZURlY2FkZVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGlzRGlzYWJsZWRZZWFyKHllYXI6IENhbmR5RGF0ZSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZERhdGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdE9mTW9udGggPSB5ZWFyLnNldE1vbnRoKDApLnNldERhdGUoMSk7XG5cbiAgICBmb3IgKGxldCBkYXRlID0gZmlyc3RPZk1vbnRoOyBkYXRlLmdldFllYXIoKSA9PT0geWVhci5nZXRZZWFyKCk7IGRhdGUgPSBkYXRlLmFkZERheXMoMSkpIHtcbiAgICAgIGlmICghdGhpcy5kaXNhYmxlZERhdGUoZGF0ZS5uYXRpdmVEYXRlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGFkZENlbGxQcm9wZXJ0eShjZWxsOiBEYXRlQ2VsbCwgeWVhcjogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaGFzUmFuZ2VWYWx1ZSgpKSB7XG4gICAgICBjb25zdCBbc3RhcnRIb3ZlciwgZW5kSG92ZXJdID0gdGhpcy5ob3ZlclZhbHVlO1xuICAgICAgY29uc3QgW3N0YXJ0U2VsZWN0ZWQsIGVuZFNlbGVjdGVkXSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcbiAgICAgIC8vIFNlbGVjdGVkXG4gICAgICBpZiAoc3RhcnRTZWxlY3RlZD8uaXNTYW1lWWVhcih5ZWFyKSkge1xuICAgICAgICBjZWxsLmlzU2VsZWN0ZWRTdGFydCA9IHRydWU7XG4gICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRTZWxlY3RlZD8uaXNTYW1lWWVhcih5ZWFyKSkge1xuICAgICAgICBjZWxsLmlzU2VsZWN0ZWRFbmQgPSB0cnVlO1xuICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhcnRIb3ZlciAmJiBlbmRIb3Zlcikge1xuICAgICAgICBjZWxsLmlzSG92ZXJTdGFydCA9IHN0YXJ0SG92ZXIuaXNTYW1lWWVhcih5ZWFyKTtcbiAgICAgICAgY2VsbC5pc0hvdmVyRW5kID0gZW5kSG92ZXIuaXNTYW1lWWVhcih5ZWFyKTtcbiAgICAgICAgY2VsbC5pc0luSG92ZXJSYW5nZSA9IHN0YXJ0SG92ZXIuaXNCZWZvcmVZZWFyKHllYXIpICYmIHllYXIuaXNCZWZvcmVZZWFyKGVuZEhvdmVyKTtcbiAgICAgIH1cbiAgICAgIGNlbGwuaXNTdGFydFNpbmdsZSA9IHN0YXJ0U2VsZWN0ZWQgJiYgIWVuZFNlbGVjdGVkO1xuICAgICAgY2VsbC5pc0VuZFNpbmdsZSA9ICFzdGFydFNlbGVjdGVkICYmIGVuZFNlbGVjdGVkO1xuICAgICAgY2VsbC5pc0luU2VsZWN0ZWRSYW5nZSA9IHN0YXJ0U2VsZWN0ZWQ/LmlzQmVmb3JlWWVhcih5ZWFyKSAmJiB5ZWFyPy5pc0JlZm9yZVllYXIoZW5kU2VsZWN0ZWQpO1xuICAgICAgY2VsbC5pc1JhbmdlU3RhcnROZWFySG92ZXIgPSBzdGFydFNlbGVjdGVkICYmIGNlbGwuaXNJbkhvdmVyUmFuZ2U7XG4gICAgICBjZWxsLmlzUmFuZ2VFbmROZWFySG92ZXIgPSBlbmRTZWxlY3RlZCAmJiBjZWxsLmlzSW5Ib3ZlclJhbmdlO1xuICAgIH0gZWxzZSBpZiAoeWVhci5pc1NhbWVZZWFyKHRoaXMudmFsdWUpKSB7XG4gICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBjZWxsLmNsYXNzTWFwID0gdGhpcy5nZXRDbGFzc01hcChjZWxsKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hvb3NlWWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5hY3RpdmVEYXRlLnNldFllYXIoeWVhcik7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbn1cbiIsIjx0YWJsZSBjbGFzcz1cImFudC1waWNrZXItY29udGVudFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJncmlkXCI+XG4gIDx0aGVhZCAqbmdJZj1cImhlYWRSb3cgJiYgaGVhZFJvdy5sZW5ndGggPiAwXCI+XG4gICAgPHRyIHJvbGU9XCJyb3dcIj5cbiAgICAgIDx0aCAqbmdJZj1cInNob3dXZWVrXCIgcm9sZT1cImNvbHVtbmhlYWRlclwiPjwvdGg+XG4gICAgICA8dGggKm5nRm9yPVwibGV0IGNlbGwgb2YgaGVhZFJvd1wiIHJvbGU9XCJjb2x1bW5oZWFkZXJcIiB0aXRsZT1cInt7IGNlbGwudGl0bGUgfX1cIj5cbiAgICAgICAge3sgY2VsbC5jb250ZW50IH19XG4gICAgICA8L3RoPlxuICAgIDwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBib2R5Um93czsgdHJhY2tCeTogdHJhY2tCeUJvZHlSb3dcIiBbbmdDbGFzc109XCJyb3cuY2xhc3NNYXAhXCIgcm9sZT1cInJvd1wiPlxuICAgICAgPHRkICpuZ0lmPVwicm93LndlZWtOdW1cIiByb2xlPVwiZ3JpZGNlbGxcIiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1jZWxsLXdlZWtcIj5cbiAgICAgICAge3sgcm93LndlZWtOdW0gfX1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGRcbiAgICAgICAgKm5nRm9yPVwibGV0IGNlbGwgb2Ygcm93LmRhdGVDZWxsczsgdHJhY2tCeTogdHJhY2tCeUJvZHlDb2x1bW5cIlxuICAgICAgICB0aXRsZT1cInt7IGNlbGwudGl0bGUgfX1cIlxuICAgICAgICByb2xlPVwiZ3JpZGNlbGxcIlxuICAgICAgICBbbmdDbGFzc109XCJjZWxsLmNsYXNzTWFwIVwiXG4gICAgICAgIChjbGljayk9XCJjZWxsLmlzRGlzYWJsZWQgPyBudWxsIDogY2VsbC5vbkNsaWNrKClcIlxuICAgICAgICAobW91c2VlbnRlcik9XCJjZWxsLm9uTW91c2VFbnRlcigpXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwicHJlZml4Q2xzXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2FudC1waWNrZXInXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoY2VsbC5jZWxsUmVuZGVyKVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICpuZ1N3aXRjaENhc2Ugbm90IGhhcyB0eXBlIGFzc2VydGlvbiBzdXBwb3J0LCB0aGUgY2VsbFJlbmRlciB0eXBlIGhlcmUgaXMgVGVtcGxhdGVSZWYgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCIkYW55KGNlbGwuY2VsbFJlbmRlcik7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjZWxsLnZhbHVlIH1cIlxuICAgICAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoY2VsbC5jZWxsUmVuZGVyKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiY2VsbC5jZWxsUmVuZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWNlbGwtaW5uZXJcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJjZWxsLmlzU2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJjZWxsLmlzRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt7IGNlbGwuY29udGVudCB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidhbnQtcGlja2VyLWNhbGVuZGFyJ1wiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1kYXRlIGFudC1waWNrZXItY2VsbC1pbm5lclwiXG4gICAgICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWNhbGVuZGFyLWRhdGUtdG9kYXldPVwiY2VsbC5pc1RvZGF5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNlbGwuZnVsbENlbGxSZW5kZXI7IGVsc2UgZGVmYXVsdENlbGxcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cIiRhbnkoY2VsbC5mdWxsQ2VsbFJlbmRlcik7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjZWxsLnZhbHVlIH1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdENlbGw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1kYXRlLXZhbHVlXCI+e3sgY2VsbC5jb250ZW50IH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1kYXRlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCIkYW55KGNlbGwuY2VsbFJlbmRlcik7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjZWxsLnZhbHVlIH1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuIl19