/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractTable } from './abstract-table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function DecadeTableComponent_thead_1_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 6);
} }
function DecadeTableComponent_thead_1_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("title", cell_r4.title);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", cell_r4.content, " ");
} }
function DecadeTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead")(1, "tr", 3);
    i0.ɵɵtemplate(2, DecadeTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    i0.ɵɵtemplate(3, DecadeTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.showWeek);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.headRow);
} }
function DecadeTableComponent_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
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
function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, cell_r9.value));
} }
function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", cell_r9.cellRender, i0.ɵɵsanitizeHtml);
} }
function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
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
function DecadeTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0)(1, 13);
    i0.ɵɵtemplate(2, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    i0.ɵɵtemplate(3, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    i0.ɵɵtemplate(4, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
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
function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cell_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, cell_r9.value));
} }
function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
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
function DecadeTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    i0.ɵɵtemplate(3, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
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
function DecadeTableComponent_tr_3_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵlistener("click", function DecadeTableComponent_tr_3_td_2_Template_td_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r29); const cell_r9 = restoredCtx.$implicit; return i0.ɵɵresetView(cell_r9.isDisabled ? null : cell_r9.onClick()); })("mouseenter", function DecadeTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r29); const cell_r9 = restoredCtx.$implicit; return i0.ɵɵresetView(cell_r9.onMouseEnter()); });
    i0.ɵɵelementContainerStart(1, 13);
    i0.ɵɵtemplate(2, DecadeTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    i0.ɵɵtemplate(3, DecadeTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
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
function DecadeTableComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 8);
    i0.ɵɵtemplate(1, DecadeTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    i0.ɵɵtemplate(2, DecadeTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
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
const MAX_ROW = 4;
const MAX_COL = 3;
export class DecadeTableComponent extends AbstractTable {
    get startYear() {
        return parseInt(`${this.activeDate.getYear() / 100}`, 10) * 100;
    }
    get endYear() {
        return this.startYear + 99;
    }
    makeHeadRow() {
        return [];
    }
    makeBodyRows() {
        const decades = [];
        const currentYear = this.value && this.value.getYear();
        const startYear = this.startYear;
        const endYear = this.endYear;
        const previousYear = startYear - 10;
        let index = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            const row = {
                dateCells: [],
                trackByIndex: rowIndex
            };
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                const start = previousYear + index * 10;
                const end = previousYear + index * 10 + 9;
                const content = `${start}-${end}`;
                const cell = {
                    trackByIndex: colIndex,
                    value: this.activeDate.setYear(start).nativeDate,
                    content,
                    title: content,
                    isDisabled: false,
                    isSelected: currentYear >= start && currentYear <= end,
                    isLowerThanStart: end < startYear,
                    isBiggerThanEnd: start > endYear,
                    classMap: {},
                    onClick() { },
                    onMouseEnter() { }
                };
                cell.classMap = this.getClassMap(cell);
                cell.onClick = () => this.chooseDecade(start);
                index++;
                row.dateCells.push(cell);
            }
            decades.push(row);
        }
        return decades;
    }
    getClassMap(cell) {
        return {
            [`${this.prefixCls}-cell`]: true,
            [`${this.prefixCls}-cell-in-view`]: !cell.isBiggerThanEnd && !cell.isLowerThanStart,
            [`${this.prefixCls}-cell-selected`]: cell.isSelected,
            [`${this.prefixCls}-cell-disabled`]: cell.isDisabled
        };
    }
    chooseDecade(year) {
        this.value = this.activeDate.setYear(year);
        this.valueChange.emit(this.value);
    }
    static { this.ɵfac = /*@__PURE__*/ function () { let ɵDecadeTableComponent_BaseFactory; return function DecadeTableComponent_Factory(t) { return (ɵDecadeTableComponent_BaseFactory || (ɵDecadeTableComponent_BaseFactory = i0.ɵɵgetInheritedFactory(DecadeTableComponent)))(t || DecadeTableComponent); }; }(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DecadeTableComponent, selectors: [["decade-table"]], exportAs: ["decadeTable"], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]], template: function DecadeTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵtemplate(1, DecadeTableComponent_thead_1_Template, 4, 2, "thead", 1);
            i0.ɵɵelementStart(2, "tbody");
            i0.ɵɵtemplate(3, DecadeTableComponent_tr_3_Template, 3, 4, "tr", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.headRow && ctx.headRow.length > 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DecadeTableComponent, [{
        type: Component,
        args: [{ encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: 'decade-table', exportAs: 'decadeTable', template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9saWIvZGVjYWRlLXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9saWIvYWJzdHJhY3QtdGFibGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztJQ0gzQyx3QkFBOEM7OztJQUM5Qyw2QkFBOEU7SUFDNUUsWUFDRjtJQUFBLGlCQUFLOzs7SUFGZ0QsZ0RBQXdCO0lBQzNFLGVBQ0Y7SUFERSxnREFDRjs7O0lBTEosNkJBQTZDLFlBQUE7SUFFekMsMkVBQThDO0lBQzlDLDJFQUVLO0lBQ1AsaUJBQUssRUFBQTs7O0lBSkUsZUFBYztJQUFkLHNDQUFjO0lBQ0UsZUFBVTtJQUFWLHdDQUFVOzs7SUFPL0IsOEJBQTBFO0lBQ3hFLFlBQ0Y7SUFBQSxpQkFBSzs7OztJQUZtQyw2REFBaUM7SUFDdkUsZUFDRjtJQURFLCtDQUNGOzs7SUFjVSx3QkFFZ0I7Ozs7SUFKbEIsNkJBQTZEO0lBRTNELGdJQUVnQjtJQUNsQiwwQkFBZTs7O0lBRlYsZUFBeUM7SUFBekMscURBQXlDLHNFQUFBOzs7SUFHOUMsNkJBQWdFO0lBQzlELDJCQUEyQztJQUM3QywwQkFBZTs7O0lBRFAsZUFBNkI7SUFBN0IsaUVBQTZCOzs7SUFFckMsNkJBQStCO0lBQzdC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QUFnQjtRQUMxQixPQUFPO1lBQ0wsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLE9BQU8sQ0FBQyxFQUFFLElBQUk7WUFDaEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGVBQWUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFDbkYsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDckQsQ0FBQztJQUNKLENBQUM7SUFFTyxZQUFZLENBQUMsSUFBWTtRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO3lQQXJFVSxvQkFBb0IsU0FBcEIsb0JBQW9CO29FQUFwQixvQkFBb0I7WUNwQmpDLGdDQUE4RDtZQUM1RCx5RUFPUTtZQUNSLDZCQUFPO1lBQ0wsbUVBMkRLO1lBQ1AsaUJBQVEsRUFBQTs7WUFyRUEsZUFBbUM7WUFBbkMsNERBQW1DO1lBU3JCLGVBQWE7WUFBYixzQ0FBYSxvQ0FBQTs7O3VGRFV4QixvQkFBb0I7Y0FSaEMsU0FBUztnQ0FDTyxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLFlBRXJDLGNBQWMsWUFDZCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25DaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RUYWJsZSB9IGZyb20gJy4vYWJzdHJhY3QtdGFibGUnO1xuaW1wb3J0IHsgRGF0ZUJvZHlSb3csIERhdGVDZWxsLCBEZWNhZGVDZWxsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5jb25zdCBNQVhfUk9XID0gNDtcbmNvbnN0IE1BWF9DT0wgPSAzO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkZWNhZGUtdGFibGUnLFxuICBleHBvcnRBczogJ2RlY2FkZVRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICdhYnN0cmFjdC10YWJsZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEZWNhZGVUYWJsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0VGFibGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBnZXQgc3RhcnRZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGAke3RoaXMuYWN0aXZlRGF0ZS5nZXRZZWFyKCkgLyAxMDB9YCwgMTApICogMTAwO1xuICB9XG5cbiAgZ2V0IGVuZFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFllYXIgKyA5OTtcbiAgfVxuXG4gIG1ha2VIZWFkUm93KCk6IERhdGVDZWxsW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIG1ha2VCb2R5Um93cygpOiBEYXRlQm9keVJvd1tdIHtcbiAgICBjb25zdCBkZWNhZGVzOiBEYXRlQm9keVJvd1tdID0gW107XG4gICAgY29uc3QgY3VycmVudFllYXIgPSB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUuZ2V0WWVhcigpO1xuICAgIGNvbnN0IHN0YXJ0WWVhciA9IHRoaXMuc3RhcnRZZWFyO1xuICAgIGNvbnN0IGVuZFllYXIgPSB0aGlzLmVuZFllYXI7XG4gICAgY29uc3QgcHJldmlvdXNZZWFyID0gc3RhcnRZZWFyIC0gMTA7XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBNQVhfUk9XOyByb3dJbmRleCsrKSB7XG4gICAgICBjb25zdCByb3c6IERhdGVCb2R5Um93ID0ge1xuICAgICAgICBkYXRlQ2VsbHM6IFtdLFxuICAgICAgICB0cmFja0J5SW5kZXg6IHJvd0luZGV4XG4gICAgICB9O1xuXG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgTUFYX0NPTDsgY29sSW5kZXgrKykge1xuICAgICAgICBjb25zdCBzdGFydCA9IHByZXZpb3VzWWVhciArIGluZGV4ICogMTA7XG4gICAgICAgIGNvbnN0IGVuZCA9IHByZXZpb3VzWWVhciArIGluZGV4ICogMTAgKyA5O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gYCR7c3RhcnR9LSR7ZW5kfWA7XG5cbiAgICAgICAgY29uc3QgY2VsbDogRGVjYWRlQ2VsbCA9IHtcbiAgICAgICAgICB0cmFja0J5SW5kZXg6IGNvbEluZGV4LFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmFjdGl2ZURhdGUuc2V0WWVhcihzdGFydCkubmF0aXZlRGF0ZSxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGN1cnJlbnRZZWFyID49IHN0YXJ0ICYmIGN1cnJlbnRZZWFyIDw9IGVuZCxcbiAgICAgICAgICBpc0xvd2VyVGhhblN0YXJ0OiBlbmQgPCBzdGFydFllYXIsXG4gICAgICAgICAgaXNCaWdnZXJUaGFuRW5kOiBzdGFydCA+IGVuZFllYXIsXG4gICAgICAgICAgY2xhc3NNYXA6IHt9LFxuICAgICAgICAgIG9uQ2xpY2soKTogdm9pZCB7fSxcbiAgICAgICAgICBvbk1vdXNlRW50ZXIoKTogdm9pZCB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIGNlbGwuY2xhc3NNYXAgPSB0aGlzLmdldENsYXNzTWFwKGNlbGwpO1xuICAgICAgICBjZWxsLm9uQ2xpY2sgPSAoKSA9PiB0aGlzLmNob29zZURlY2FkZShzdGFydCk7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIHJvdy5kYXRlQ2VsbHMucHVzaChjZWxsKTtcbiAgICAgIH1cblxuICAgICAgZGVjYWRlcy5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBkZWNhZGVzO1xuICB9XG5cbiAgZ2V0Q2xhc3NNYXAoY2VsbDogRGVjYWRlQ2VsbCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsYF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGwtaW4tdmlld2BdOiAhY2VsbC5pc0JpZ2dlclRoYW5FbmQgJiYgIWNlbGwuaXNMb3dlclRoYW5TdGFydCxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbC1zZWxlY3RlZGBdOiBjZWxsLmlzU2VsZWN0ZWQsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGwtZGlzYWJsZWRgXTogY2VsbC5pc0Rpc2FibGVkXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY2hvb3NlRGVjYWRlKHllYXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0WWVhcih5ZWFyKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cbn1cbiIsIjx0YWJsZSBjbGFzcz1cImFudC1waWNrZXItY29udGVudFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJncmlkXCI+XG4gIDx0aGVhZCAqbmdJZj1cImhlYWRSb3cgJiYgaGVhZFJvdy5sZW5ndGggPiAwXCI+XG4gICAgPHRyIHJvbGU9XCJyb3dcIj5cbiAgICAgIDx0aCAqbmdJZj1cInNob3dXZWVrXCIgcm9sZT1cImNvbHVtbmhlYWRlclwiPjwvdGg+XG4gICAgICA8dGggKm5nRm9yPVwibGV0IGNlbGwgb2YgaGVhZFJvd1wiIHJvbGU9XCJjb2x1bW5oZWFkZXJcIiB0aXRsZT1cInt7IGNlbGwudGl0bGUgfX1cIj5cbiAgICAgICAge3sgY2VsbC5jb250ZW50IH19XG4gICAgICA8L3RoPlxuICAgIDwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBib2R5Um93czsgdHJhY2tCeTogdHJhY2tCeUJvZHlSb3dcIiBbbmdDbGFzc109XCJyb3cuY2xhc3NNYXAhXCIgcm9sZT1cInJvd1wiPlxuICAgICAgPHRkICpuZ0lmPVwicm93LndlZWtOdW1cIiByb2xlPVwiZ3JpZGNlbGxcIiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1jZWxsLXdlZWtcIj5cbiAgICAgICAge3sgcm93LndlZWtOdW0gfX1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGRcbiAgICAgICAgKm5nRm9yPVwibGV0IGNlbGwgb2Ygcm93LmRhdGVDZWxsczsgdHJhY2tCeTogdHJhY2tCeUJvZHlDb2x1bW5cIlxuICAgICAgICB0aXRsZT1cInt7IGNlbGwudGl0bGUgfX1cIlxuICAgICAgICByb2xlPVwiZ3JpZGNlbGxcIlxuICAgICAgICBbbmdDbGFzc109XCJjZWxsLmNsYXNzTWFwIVwiXG4gICAgICAgIChjbGljayk9XCJjZWxsLmlzRGlzYWJsZWQgPyBudWxsIDogY2VsbC5vbkNsaWNrKClcIlxuICAgICAgICAobW91c2VlbnRlcik9XCJjZWxsLm9uTW91c2VFbnRlcigpXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwicHJlZml4Q2xzXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2FudC1waWNrZXInXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoY2VsbC5jZWxsUmVuZGVyKVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICpuZ1N3aXRjaENhc2Ugbm90IGhhcyB0eXBlIGFzc2VydGlvbiBzdXBwb3J0LCB0aGUgY2VsbFJlbmRlciB0eXBlIGhlcmUgaXMgVGVtcGxhdGVSZWYgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCIkYW55KGNlbGwuY2VsbFJlbmRlcik7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjZWxsLnZhbHVlIH1cIlxuICAgICAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoY2VsbC5jZWxsUmVuZGVyKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiY2VsbC5jZWxsUmVuZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWNlbGwtaW5uZXJcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJjZWxsLmlzU2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJjZWxsLmlzRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt7IGNlbGwuY29udGVudCB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidhbnQtcGlja2VyLWNhbGVuZGFyJ1wiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1kYXRlIGFudC1waWNrZXItY2VsbC1pbm5lclwiXG4gICAgICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWNhbGVuZGFyLWRhdGUtdG9kYXldPVwiY2VsbC5pc1RvZGF5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNlbGwuZnVsbENlbGxSZW5kZXI7IGVsc2UgZGVmYXVsdENlbGxcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cIiRhbnkoY2VsbC5mdWxsQ2VsbFJlbmRlcik7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjZWxsLnZhbHVlIH1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdENlbGw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1kYXRlLXZhbHVlXCI+e3sgY2VsbC5jb250ZW50IH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1kYXRlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCIkYW55KGNlbGwuY2VsbFJlbmRlcik7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjZWxsLnZhbHVlIH1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuIl19