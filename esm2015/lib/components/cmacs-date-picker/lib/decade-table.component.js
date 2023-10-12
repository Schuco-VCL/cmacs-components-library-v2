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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9saWIvZGVjYWRlLXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9saWIvYWJzdHJhY3QtdGFibGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztJQ0gzQyx3QkFBOEM7OztJQUM5Qyw2QkFBOEU7SUFDNUUsWUFDRjtJQUFBLGlCQUFLOzs7SUFGZ0QsZ0RBQXdCO0lBQzNFLGVBQ0Y7SUFERSxnREFDRjs7O0lBTEosNkJBQTZDO0lBQzNDLDZCQUFlO0lBQ2IsMkVBQThDO0lBQzlDLDJFQUVLO0lBQ1AsaUJBQUs7SUFDUCxpQkFBUTs7O0lBTEMsZUFBYztJQUFkLHNDQUFjO0lBQ0UsZUFBVTtJQUFWLHdDQUFVOzs7SUFPL0IsOEJBQTBFO0lBQ3hFLFlBQ0Y7SUFBQSxpQkFBSzs7OztJQUZtQyw2REFBaUM7SUFDdkUsZUFDRjtJQURFLCtDQUNGOzs7SUFjVSx3QkFFZ0I7Ozs7SUFKbEIsNkJBQTZEO0lBRTNELGdJQUVnQjtJQUNsQiwwQkFBZTs7O0lBRlYsZUFBeUM7SUFBekMscURBQXlDLHNFQUFBOzs7SUFHOUMsNkJBQWdFO0lBQzlELDJCQUEyQztJQUM3QywwQkFBZTs7O0lBRFAsZUFBNkI7SUFBN0IsaUVBQTZCOzs7SUFFckMs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QUFDLElBQWdCO1FBQzFCLE9BQU87WUFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsT0FBTyxDQUFDLEVBQUUsSUFBSTtZQUNoQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtZQUNuRixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUNyRCxDQUFDO0lBQ0osQ0FBQztJQUVPLFlBQVksQ0FBQyxJQUFZO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O3FIQXJFVSxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQ3BCakMsZ0NBQThEO1FBQzVELHlFQU9RO1FBQ1IsNkJBQU87UUFDTCxtRUEyREs7UUFDUCxpQkFBUTtRQUNWLGlCQUFROztRQXRFRSxlQUFtQztRQUFuQyw0REFBbUM7UUFTckIsZUFBYTtRQUFiLHNDQUFhLG9DQUFBOztpRkRVeEIsb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FSaEMsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSxxQkFBcUI7YUFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25DaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdFRhYmxlIH0gZnJvbSAnLi9hYnN0cmFjdC10YWJsZSc7XHJcbmltcG9ydCB7IERhdGVCb2R5Um93LCBEYXRlQ2VsbCwgRGVjYWRlQ2VsbCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IE1BWF9ST1cgPSA0O1xyXG5jb25zdCBNQVhfQ09MID0gMztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZGVjYWRlLXRhYmxlJyxcclxuICBleHBvcnRBczogJ2RlY2FkZVRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2Fic3RyYWN0LXRhYmxlLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWNhZGVUYWJsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0VGFibGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIGdldCBzdGFydFllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBwYXJzZUludChgJHt0aGlzLmFjdGl2ZURhdGUuZ2V0WWVhcigpIC8gMTAwfWAsIDEwKSAqIDEwMDtcclxuICB9XHJcblxyXG4gIGdldCBlbmRZZWFyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGFydFllYXIgKyA5OTtcclxuICB9XHJcblxyXG4gIG1ha2VIZWFkUm93KCk6IERhdGVDZWxsW10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgbWFrZUJvZHlSb3dzKCk6IERhdGVCb2R5Um93W10ge1xyXG4gICAgY29uc3QgZGVjYWRlczogRGF0ZUJvZHlSb3dbXSA9IFtdO1xyXG4gICAgY29uc3QgY3VycmVudFllYXIgPSB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUuZ2V0WWVhcigpO1xyXG4gICAgY29uc3Qgc3RhcnRZZWFyID0gdGhpcy5zdGFydFllYXI7XHJcbiAgICBjb25zdCBlbmRZZWFyID0gdGhpcy5lbmRZZWFyO1xyXG4gICAgY29uc3QgcHJldmlvdXNZZWFyID0gc3RhcnRZZWFyIC0gMTA7XHJcblxyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBNQVhfUk9XOyByb3dJbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdzogRGF0ZUJvZHlSb3cgPSB7XHJcbiAgICAgICAgZGF0ZUNlbGxzOiBbXSxcclxuICAgICAgICB0cmFja0J5SW5kZXg6IHJvd0luZGV4XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgTUFYX0NPTDsgY29sSW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcHJldmlvdXNZZWFyICsgaW5kZXggKiAxMDtcclxuICAgICAgICBjb25zdCBlbmQgPSBwcmV2aW91c1llYXIgKyBpbmRleCAqIDEwICsgOTtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gYCR7c3RhcnR9LSR7ZW5kfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbGw6IERlY2FkZUNlbGwgPSB7XHJcbiAgICAgICAgICB0cmFja0J5SW5kZXg6IGNvbEluZGV4LFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHN0YXJ0KS5uYXRpdmVEYXRlLFxyXG4gICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxyXG4gICAgICAgICAgaXNEaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICBpc1NlbGVjdGVkOiBjdXJyZW50WWVhciA+PSBzdGFydCAmJiBjdXJyZW50WWVhciA8PSBlbmQsXHJcbiAgICAgICAgICBpc0xvd2VyVGhhblN0YXJ0OiBlbmQgPCBzdGFydFllYXIsXHJcbiAgICAgICAgICBpc0JpZ2dlclRoYW5FbmQ6IHN0YXJ0ID4gZW5kWWVhcixcclxuICAgICAgICAgIGNsYXNzTWFwOiB7fSxcclxuICAgICAgICAgIG9uQ2xpY2soKTogdm9pZCB7fSxcclxuICAgICAgICAgIG9uTW91c2VFbnRlcigpOiB2b2lkIHt9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHRoaXMuZ2V0Q2xhc3NNYXAoY2VsbCk7XHJcbiAgICAgICAgY2VsbC5vbkNsaWNrID0gKCkgPT4gdGhpcy5jaG9vc2VEZWNhZGUoc3RhcnQpO1xyXG4gICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgcm93LmRhdGVDZWxscy5wdXNoKGNlbGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkZWNhZGVzLnB1c2gocm93KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWNhZGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NNYXAoY2VsbDogRGVjYWRlQ2VsbCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbGBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGwtaW4tdmlld2BdOiAhY2VsbC5pc0JpZ2dlclRoYW5FbmQgJiYgIWNlbGwuaXNMb3dlclRoYW5TdGFydCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsLXNlbGVjdGVkYF06IGNlbGwuaXNTZWxlY3RlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsLWRpc2FibGVkYF06IGNlbGwuaXNEaXNhYmxlZFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hvb3NlRGVjYWRlKHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHllYXIpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxufVxyXG4iLCI8dGFibGUgY2xhc3M9XCJhbnQtcGlja2VyLWNvbnRlbnRcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwiZ3JpZFwiPlxyXG4gIDx0aGVhZCAqbmdJZj1cImhlYWRSb3cgJiYgaGVhZFJvdy5sZW5ndGggPiAwXCI+XHJcbiAgICA8dHIgcm9sZT1cInJvd1wiPlxyXG4gICAgICA8dGggKm5nSWY9XCJzaG93V2Vla1wiIHJvbGU9XCJjb2x1bW5oZWFkZXJcIj48L3RoPlxyXG4gICAgICA8dGggKm5nRm9yPVwibGV0IGNlbGwgb2YgaGVhZFJvd1wiIHJvbGU9XCJjb2x1bW5oZWFkZXJcIiB0aXRsZT1cInt7IGNlbGwudGl0bGUgfX1cIj5cclxuICAgICAgICB7eyBjZWxsLmNvbnRlbnQgfX1cclxuICAgICAgPC90aD5cclxuICAgIDwvdHI+XHJcbiAgPC90aGVhZD5cclxuICA8dGJvZHk+XHJcbiAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBib2R5Um93czsgdHJhY2tCeTogdHJhY2tCeUJvZHlSb3dcIiBbbmdDbGFzc109XCJyb3cuY2xhc3NNYXAhXCIgcm9sZT1cInJvd1wiPlxyXG4gICAgICA8dGQgKm5nSWY9XCJyb3cud2Vla051bVwiIHJvbGU9XCJncmlkY2VsbFwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWNlbGwtd2Vla1wiPlxyXG4gICAgICAgIHt7IHJvdy53ZWVrTnVtIH19XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZFxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBjZWxsIG9mIHJvdy5kYXRlQ2VsbHM7IHRyYWNrQnk6IHRyYWNrQnlCb2R5Q29sdW1uXCJcclxuICAgICAgICB0aXRsZT1cInt7IGNlbGwudGl0bGUgfX1cIlxyXG4gICAgICAgIHJvbGU9XCJncmlkY2VsbFwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwiY2VsbC5jbGFzc01hcCFcIlxyXG4gICAgICAgIChjbGljayk9XCJjZWxsLmlzRGlzYWJsZWQgPyBudWxsIDogY2VsbC5vbkNsaWNrKClcIlxyXG4gICAgICAgIChtb3VzZWVudGVyKT1cImNlbGwub25Nb3VzZUVudGVyKClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwicHJlZml4Q2xzXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYW50LXBpY2tlcidcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoY2VsbC5jZWxsUmVuZGVyKVwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgKm5nU3dpdGNoQ2FzZSBub3QgaGFzIHR5cGUgYXNzZXJ0aW9uIHN1cHBvcnQsIHRoZSBjZWxsUmVuZGVyIHR5cGUgaGVyZSBpcyBUZW1wbGF0ZVJlZiAtLT5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCIkYW55KGNlbGwuY2VsbFJlbmRlcik7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjZWxsLnZhbHVlIH1cIlxyXG4gICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoY2VsbC5jZWxsUmVuZGVyKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJjZWxsLmNlbGxSZW5kZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1jZWxsLWlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJjZWxsLmlzU2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cImNlbGwuaXNEaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt7IGNlbGwuY29udGVudCB9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYW50LXBpY2tlci1jYWxlbmRhcidcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRhdGUgYW50LXBpY2tlci1jZWxsLWlubmVyXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1jYWxlbmRhci1kYXRlLXRvZGF5XT1cImNlbGwuaXNUb2RheVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2VsbC5mdWxsQ2VsbFJlbmRlcjsgZWxzZSBkZWZhdWx0Q2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cIiRhbnkoY2VsbC5mdWxsQ2VsbFJlbmRlcik7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjZWxsLnZhbHVlIH1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0Q2VsbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZGF0ZS12YWx1ZVwiPnt7IGNlbGwuY29udGVudCB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1kYXRlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiJGFueShjZWxsLmNlbGxSZW5kZXIpOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY2VsbC52YWx1ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbiJdfQ==