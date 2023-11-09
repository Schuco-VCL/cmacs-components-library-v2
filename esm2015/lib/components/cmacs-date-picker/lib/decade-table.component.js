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
    i0.ɵɵelementStart(0, "thead");
    i0.ɵɵelementStart(1, "tr", 3);
    i0.ɵɵtemplate(2, DecadeTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    i0.ɵɵtemplate(3, DecadeTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainerStart(1, 13);
    i0.ɵɵtemplate(2, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    i0.ɵɵtemplate(3, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    i0.ɵɵtemplate(4, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
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
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵlistener("click", function DecadeTableComponent_tr_3_td_2_Template_td_click_0_listener() { const cell_r9 = ctx.$implicit; return cell_r9.isDisabled ? null : cell_r9.onClick(); })("mouseenter", function DecadeTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() { const cell_r9 = ctx.$implicit; return cell_r9.onMouseEnter(); });
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
}
DecadeTableComponent.ɵfac = function DecadeTableComponent_Factory(t) { return ɵDecadeTableComponent_BaseFactory(t || DecadeTableComponent); };
DecadeTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DecadeTableComponent, selectors: [["decade-table"]], exportAs: ["decadeTable"], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]], template: function DecadeTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, DecadeTableComponent_thead_1_Template, 4, 2, "thead", 1);
        i0.ɵɵelementStart(2, "tbody");
        i0.ɵɵtemplate(3, DecadeTableComponent_tr_3_Template, 3, 4, "tr", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.headRow && ctx.headRow.length > 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
    } }, directives: [i1.NgIf, i1.NgForOf, i1.NgClass, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
const ɵDecadeTableComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(DecadeTableComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DecadeTableComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'decade-table',
                exportAs: 'decadeTable',
                templateUrl: 'abstract-table.html'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9saWIvZGVjYWRlLXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9saWIvYWJzdHJhY3QtdGFibGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztJQ0gzQyx3QkFBOEM7OztJQUM5Qyw2QkFBOEU7SUFDNUUsWUFDRjtJQUFBLGlCQUFLOzs7SUFGZ0QsZ0RBQXdCO0lBQzNFLGVBQ0Y7SUFERSxnREFDRjs7O0lBTEosNkJBQTZDO0lBQzNDLDZCQUFlO0lBQ2IsMkVBQThDO0lBQzlDLDJFQUVLO0lBQ1AsaUJBQUs7SUFDUCxpQkFBUTs7O0lBTEMsZUFBYztJQUFkLHNDQUFjO0lBQ0UsZUFBVTtJQUFWLHdDQUFVOzs7SUFPL0IsOEJBQTBFO0lBQ3hFLFlBQ0Y7SUFBQSxpQkFBSzs7OztJQUZtQyw2REFBaUM7SUFDdkUsZUFDRjtJQURFLCtDQUNGOzs7SUFjVSx3QkFFZ0I7Ozs7SUFKbEIsNkJBQTZEO0lBRTNELGdJQUVnQjtJQUNsQiwwQkFBZTs7O0lBRlYsZUFBeUM7SUFBekMscURBQXlDLHNFQUFBOzs7SUFHOUMsNkJBQWdFO0lBQzlELDJCQUEyQztJQUM3QywwQkFBZTs7O0lBRFAsZUFBNkI7SUFBN0IsaUVBQTZCOzs7SUFFckMs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QUFDLElBQWdCO1FBQzFCLE9BQU87WUFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsT0FBTyxDQUFDLEVBQUUsSUFBSTtZQUNoQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtZQUNuRixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUNyRCxDQUFDO0lBQ0osQ0FBQztJQUVPLFlBQVksQ0FBQyxJQUFZO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O3FIQXJFVSxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQ3BCakMsZ0NBQThEO1FBQzVELHlFQU9RO1FBQ1IsNkJBQU87UUFDTCxtRUEyREs7UUFDUCxpQkFBUTtRQUNWLGlCQUFROztRQXRFRSxlQUFtQztRQUFuQyw0REFBbUM7UUFTckIsZUFBYTtRQUFiLHNDQUFhLG9DQUFBOztpRkRVeEIsb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FSaEMsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSxxQkFBcUI7YUFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFRhYmxlIH0gZnJvbSAnLi9hYnN0cmFjdC10YWJsZSc7XG5pbXBvcnQgeyBEYXRlQm9keVJvdywgRGF0ZUNlbGwsIERlY2FkZUNlbGwgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmNvbnN0IE1BWF9ST1cgPSA0O1xuY29uc3QgTUFYX0NPTCA9IDM7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2RlY2FkZS10YWJsZScsXG4gIGV4cG9ydEFzOiAnZGVjYWRlVGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Fic3RyYWN0LXRhYmxlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERlY2FkZVRhYmxlQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RUYWJsZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIGdldCBzdGFydFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYCR7dGhpcy5hY3RpdmVEYXRlLmdldFllYXIoKSAvIDEwMH1gLCAxMCkgKiAxMDA7XG4gIH1cblxuICBnZXQgZW5kWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0WWVhciArIDk5O1xuICB9XG5cbiAgbWFrZUhlYWRSb3coKTogRGF0ZUNlbGxbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgbWFrZUJvZHlSb3dzKCk6IERhdGVCb2R5Um93W10ge1xuICAgIGNvbnN0IGRlY2FkZXM6IERhdGVCb2R5Um93W10gPSBbXTtcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5nZXRZZWFyKCk7XG4gICAgY29uc3Qgc3RhcnRZZWFyID0gdGhpcy5zdGFydFllYXI7XG4gICAgY29uc3QgZW5kWWVhciA9IHRoaXMuZW5kWWVhcjtcbiAgICBjb25zdCBwcmV2aW91c1llYXIgPSBzdGFydFllYXIgLSAxMDtcblxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IE1BWF9ST1c7IHJvd0luZGV4KyspIHtcbiAgICAgIGNvbnN0IHJvdzogRGF0ZUJvZHlSb3cgPSB7XG4gICAgICAgIGRhdGVDZWxsczogW10sXG4gICAgICAgIHRyYWNrQnlJbmRleDogcm93SW5kZXhcbiAgICAgIH07XG5cbiAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBNQVhfQ09MOyBjb2xJbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcHJldmlvdXNZZWFyICsgaW5kZXggKiAxMDtcbiAgICAgICAgY29uc3QgZW5kID0gcHJldmlvdXNZZWFyICsgaW5kZXggKiAxMCArIDk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBgJHtzdGFydH0tJHtlbmR9YDtcblxuICAgICAgICBjb25zdCBjZWxsOiBEZWNhZGVDZWxsID0ge1xuICAgICAgICAgIHRyYWNrQnlJbmRleDogY29sSW5kZXgsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHN0YXJ0KS5uYXRpdmVEYXRlLFxuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgdGl0bGU6IGNvbnRlbnQsXG4gICAgICAgICAgaXNEaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgaXNTZWxlY3RlZDogY3VycmVudFllYXIgPj0gc3RhcnQgJiYgY3VycmVudFllYXIgPD0gZW5kLFxuICAgICAgICAgIGlzTG93ZXJUaGFuU3RhcnQ6IGVuZCA8IHN0YXJ0WWVhcixcbiAgICAgICAgICBpc0JpZ2dlclRoYW5FbmQ6IHN0YXJ0ID4gZW5kWWVhcixcbiAgICAgICAgICBjbGFzc01hcDoge30sXG4gICAgICAgICAgb25DbGljaygpOiB2b2lkIHt9LFxuICAgICAgICAgIG9uTW91c2VFbnRlcigpOiB2b2lkIHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHRoaXMuZ2V0Q2xhc3NNYXAoY2VsbCk7XG4gICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMuY2hvb3NlRGVjYWRlKHN0YXJ0KTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgcm93LmRhdGVDZWxscy5wdXNoKGNlbGwpO1xuICAgICAgfVxuXG4gICAgICBkZWNhZGVzLnB1c2gocm93KTtcbiAgICB9XG4gICAgcmV0dXJuIGRlY2FkZXM7XG4gIH1cblxuICBnZXRDbGFzc01hcChjZWxsOiBEZWNhZGVDZWxsKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0ge1xuICAgIHJldHVybiB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGxgXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbC1pbi12aWV3YF06ICFjZWxsLmlzQmlnZ2VyVGhhbkVuZCAmJiAhY2VsbC5pc0xvd2VyVGhhblN0YXJ0LFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsLXNlbGVjdGVkYF06IGNlbGwuaXNTZWxlY3RlZCxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbC1kaXNhYmxlZGBdOiBjZWxsLmlzRGlzYWJsZWRcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjaG9vc2VEZWNhZGUoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHllYXIpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIiwiPHRhYmxlIGNsYXNzPVwiYW50LXBpY2tlci1jb250ZW50XCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cImdyaWRcIj5cbiAgPHRoZWFkICpuZ0lmPVwiaGVhZFJvdyAmJiBoZWFkUm93Lmxlbmd0aCA+IDBcIj5cbiAgICA8dHIgcm9sZT1cInJvd1wiPlxuICAgICAgPHRoICpuZ0lmPVwic2hvd1dlZWtcIiByb2xlPVwiY29sdW1uaGVhZGVyXCI+PC90aD5cbiAgICAgIDx0aCAqbmdGb3I9XCJsZXQgY2VsbCBvZiBoZWFkUm93XCIgcm9sZT1cImNvbHVtbmhlYWRlclwiIHRpdGxlPVwie3sgY2VsbC50aXRsZSB9fVwiPlxuICAgICAgICB7eyBjZWxsLmNvbnRlbnQgfX1cbiAgICAgIDwvdGg+XG4gICAgPC90cj5cbiAgPC90aGVhZD5cbiAgPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGJvZHlSb3dzOyB0cmFja0J5OiB0cmFja0J5Qm9keVJvd1wiIFtuZ0NsYXNzXT1cInJvdy5jbGFzc01hcCFcIiByb2xlPVwicm93XCI+XG4gICAgICA8dGQgKm5nSWY9XCJyb3cud2Vla051bVwiIHJvbGU9XCJncmlkY2VsbFwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWNlbGwtd2Vla1wiPlxuICAgICAgICB7eyByb3cud2Vla051bSB9fVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZFxuICAgICAgICAqbmdGb3I9XCJsZXQgY2VsbCBvZiByb3cuZGF0ZUNlbGxzOyB0cmFja0J5OiB0cmFja0J5Qm9keUNvbHVtblwiXG4gICAgICAgIHRpdGxlPVwie3sgY2VsbC50aXRsZSB9fVwiXG4gICAgICAgIHJvbGU9XCJncmlkY2VsbFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cImNlbGwuY2xhc3NNYXAhXCJcbiAgICAgICAgKGNsaWNrKT1cImNlbGwuaXNEaXNhYmxlZCA/IG51bGwgOiBjZWxsLm9uQ2xpY2soKVwiXG4gICAgICAgIChtb3VzZWVudGVyKT1cImNlbGwub25Nb3VzZUVudGVyKClcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJwcmVmaXhDbHNcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYW50LXBpY2tlcidcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihjZWxsLmNlbGxSZW5kZXIpXCI+XG4gICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgKm5nU3dpdGNoQ2FzZSBub3QgaGFzIHR5cGUgYXNzZXJ0aW9uIHN1cHBvcnQsIHRoZSBjZWxsUmVuZGVyIHR5cGUgaGVyZSBpcyBUZW1wbGF0ZVJlZiAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cIiRhbnkoY2VsbC5jZWxsUmVuZGVyKTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNlbGwudmFsdWUgfVwiXG4gICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhjZWxsLmNlbGxSZW5kZXIpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJjZWxsLmNlbGxSZW5kZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tY2VsbC1pbm5lclwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cImNlbGwuaXNTZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cImNlbGwuaXNEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3sgY2VsbC5jb250ZW50IH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2FudC1waWNrZXItY2FsZW5kYXInXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRhdGUgYW50LXBpY2tlci1jZWxsLWlubmVyXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItY2FsZW5kYXItZGF0ZS10b2RheV09XCJjZWxsLmlzVG9kYXlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2VsbC5mdWxsQ2VsbFJlbmRlcjsgZWxzZSBkZWZhdWx0Q2VsbFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiJGFueShjZWxsLmZ1bGxDZWxsUmVuZGVyKTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNlbGwudmFsdWUgfVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0Q2VsbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRhdGUtdmFsdWVcIj57eyBjZWxsLmNvbnRlbnQgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRhdGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cIiRhbnkoY2VsbC5jZWxsUmVuZGVyKTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNlbGwudmFsdWUgfVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG4iXX0=