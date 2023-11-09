import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, repeat, delay } from 'rxjs/operators';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { TemplateType } from '../core/enums/TemplateType.enum';
import { CeldType } from '../core/enums/CeldType.enum';
import { ExportType } from '../core/enums/export-type.enum';
import { isArray } from 'util';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { FormControl, Validators } from '@angular/forms';
import { CmacsInputNumberComponent } from '../cmacs-input-number/cmacs-input-number.component';
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
import { CmacsDateTimePickerComponent } from '../cmacs-datetime-picker/cmacs-datetime-picker.component';
import { SelectionModel } from '@angular/cdk/collections';
import { InputBoolean, InputNumber, toBoolean } from 'ng-zorro-antd/core/util';
import { CmacsCompactTableColumnTooltipComponent } from './components/cmacs-compact-table-column-tooltip/cmacs-compact-table-column-tooltip.component';
import { afterDate, beforeDate, greaterThan, isEqualToDate, isEqualToNumber, isNotEqualToDate, isNotEqualToNumber, lessThan, rangeDate, rangeNumber } from '../core/services/customValidators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "../core/services/excel.service";
import * as i3 from "ngx-device-detector";
import * as i4 from "@angular/common";
import * as i5 from "../cmacs-dropdown/context-menu.service";
import * as i6 from "ngx-cookie-service";
import * as i7 from "../core/services/util.service";
import * as i8 from "ng-zorro-antd/table";
import * as i9 from "../cmacs-checkbox/cmacs-checkbox.component";
import * as i10 from "@angular/forms";
import * as i11 from "ng-zorro-antd/resizable";
import * as i12 from "../cmacs-tooltip/tooltip";
import * as i13 from "./components/cmacs-compact-table-column-tooltip/cmacs-compact-table-column-tooltip.component";
import * as i14 from "./components/cmacs-compact-table-column-more/cmacs-compact-table-column-more.component";
import * as i15 from "ng-zorro-antd/core/transition-patch";
import * as i16 from "ng-zorro-antd/icon";
import * as i17 from "ng-zorro-antd/dropdown";
import * as i18 from "ng-zorro-antd/core/outlet";
import * as i19 from "@angular/cdk/drag-drop";
import * as i20 from "ng-zorro-antd/rate";
import * as i21 from "../cmacs-dropdown/dropdown-menu.component";
import * as i22 from "../cmacs-input/cmacs-input.directive";
import * as i23 from "../cmacs-date-picker/date-picker.component";
import * as i24 from "../cmacs-datetime-picker/cmacs-datetime-picker.component";
import * as i25 from "../cmacs-select/cmacs-select.component";
import * as i26 from "../cmacs-select/cmacs-option.component";
import * as i27 from "ng-zorro-antd/divider";
import * as i28 from "../cmacs-button/cmacs-button.component";
import * as i29 from "../cmacs-input-number/cmacs-input-number.component";
import * as i30 from "../cmacs-phone-number/cmacs-phone-number.component";
import * as i31 from "./components/cmacs-compact-table-attachment/cmacs-compact-table-attachment.component";
const _c0 = ["renderItemTemplate"];
const _c1 = ["gridComponent"];
const _c2 = ["fieldTypeInput"];
const _c3 = ["fieldTypeInputNumber"];
const _c4 = ["fieldTypeDatePicker"];
const _c5 = ["fieldTypeDateTimePicker"];
const _c6 = ["fieldTypeSelect"];
const _c7 = ["fieldTypeBool"];
function CmacsCompactTableComponent_thead_3_th_2_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 16);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_thead_3_th_2_i_1_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.addRow(-1); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵclassProp("cmacs-compact-table-smart-add-row-icon-visible", !_r0.data.length);
} }
function CmacsCompactTableComponent_thead_3_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 14);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_thead_3_th_2_i_1_Template, 1, 2, "i", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("min-width", "40px")("max-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th", ctx_r8.logs);
    i0.ɵɵproperty("nzLeft", ctx_r8.getStickyWidth("smartTable"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r8.hideButtons);
} }
function CmacsCompactTableComponent_thead_3_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 17);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th", ctx_r9.logs)("cmacs-compact-table-logs-header-th-font", ctx_r9.logs);
    i0.ɵɵproperty("nzLeft", ctx_r9.getStickyWidth("draggable"));
} }
function CmacsCompactTableComponent_thead_3_th_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_thead_3_th_4_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.selected = $event; })("checkedChange", function CmacsCompactTableComponent_thead_3_th_4_Template_label_checkedChange_1_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.onCheckboxAllChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "30px")("min-width", "30px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th", ctx_r10.logs)("cmacs-compact-table-logs-header-th-font", ctx_r10.logs);
    i0.ɵɵproperty("nzLeft", ctx_r10.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r10.selected)("indeterminate", ctx_r10.isIndeterminate);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 31);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r36); const fi_r23 = i0.ɵɵnextContext(3).index; const ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.addcolumn(fi_r23); });
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_cmacs_compact_table_column_tooltip_5_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-compact-table-column-tooltip", 32);
    i0.ɵɵlistener("onFieldChanged", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_cmacs_compact_table_column_tooltip_5_Template_cmacs_compact_table_column_tooltip_onFieldChanged_0_listener($event) { i0.ɵɵrestoreView(_r39); const fi_r23 = i0.ɵɵnextContext(3).index; const ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.onFieldChanged(fi_r23, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r22 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("field", field_r22)("items", ctx_r31.columnMenu);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_i_6_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 33);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_i_6_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r43); const fi_r23 = i0.ɵɵnextContext(3).index; const ctx_r41 = i0.ɵɵnextContext(2); return ctx_r41.openColumnMore(fi_r23); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fi_r23 = i0.ɵɵnextContext(3).index;
    const ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-column-more-selected", ctx_r32.selectedMore === fi_r23 && ctx_r32.selectedMore !== -1);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_cmacs_compact_table_column_more_7_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-compact-table-column-more", 34);
    i0.ɵɵlistener("onFieldChanged", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_cmacs_compact_table_column_more_7_Template_cmacs_compact_table_column_more_onFieldChanged_0_listener($event) { i0.ɵɵrestoreView(_r47); const fi_r23 = i0.ɵɵnextContext(3).index; const ctx_r45 = i0.ɵɵnextContext(2); return ctx_r45.onFieldChanged(fi_r23, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r22 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r33 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("field", field_r22)("items", ctx_r33.columnMenu)("labelSave", ctx_r33.columnMenu.advancedConfiguration.labelSave);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_i_2_Template, 1, 0, "i", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 27);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_Template_div_tap_3_listener() { i0.ɵɵrestoreView(_r50); const fi_r23 = i0.ɵɵnextContext(2).index; const ctx_r49 = i0.ɵɵnextContext(2); return ctx_r49.onFieldTapEllipsis(ctx_r49.gridID + "-column-" + fi_r23 + "-title"); })("click", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r50); const fi_r23 = i0.ɵɵnextContext(2).index; const ctx_r52 = i0.ɵɵnextContext(2); return ctx_r52.openColumnMenu(fi_r23); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_cmacs_compact_table_column_tooltip_5_Template, 1, 2, "cmacs-compact-table-column-tooltip", 28);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_i_6_Template, 1, 2, "i", 29);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_cmacs_compact_table_column_more_7_Template, 1, 3, "cmacs-compact-table-column-more", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext(2);
    const field_r22 = ctx_r54.$implicit;
    const fi_r23 = ctx_r54.index;
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("min-width", field_r22.minWidth ? field_r22.minWidth : "50px")("width", field_r22.width ? field_r22.width : "100px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.addColumn);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r27.getHeaderMaxWidth(field_r22));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-header", !ctx_r27.wrapLines)("cmacs-compact-table-column-tooltip", ctx_r27.addColumn);
    i0.ɵɵattributeInterpolate2("id", "", ctx_r27.gridID, "-column-", fi_r23, "-title");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r27.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r27.isEllipsisActive(ctx_r27.gridID + "-column-" + fi_r23 + "-title", field_r22) ? field_r22.display : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", field_r22.display, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.addColumn && ctx_r27.selectedColumnId === fi_r23 && ctx_r27.selectedColumnId !== -1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.addColumn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.addColumn && ctx_r27.selectedMore === fi_r23 && ctx_r27.selectedMore !== -1);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementContainer(1, 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r55 = i0.ɵɵnextContext(2);
    const fi_r23 = ctx_r55.index;
    const field_r22 = ctx_r55.$implicit;
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", ctx_r28.gridID + "column" + fi_r23);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", field_r22.template.ref)("ngTemplateOutletContext", field_r22.template.context);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_nz_resize_handle_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-resize-handle", 36);
    i0.ɵɵelement(1, "div", 37);
    i0.ɵɵelementEnd();
} }
const _c8 = function () { return []; };
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 22);
    i0.ɵɵlistener("nzFilterChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzFilterChange_1_listener($event) { i0.ɵɵrestoreView(_r58); const field_r22 = i0.ɵɵnextContext().$implicit; const ctx_r56 = i0.ɵɵnextContext(2); return ctx_r56.filter($event, field_r22.property); })("nzResizeEnd", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzResizeEnd_1_listener($event) { i0.ɵɵrestoreView(_r58); const field_r22 = i0.ɵɵnextContext().$implicit; const ctx_r59 = i0.ɵɵnextContext(2); return ctx_r59.onResize($event, field_r22.property, field_r22); })("nzSortOrderChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzSortOrderChange_1_listener($event) { i0.ɵɵrestoreView(_r58); const field_r22 = i0.ɵɵnextContext().$implicit; const ctx_r61 = i0.ɵɵnextContext(2); return field_r22.showSort ? field_r22.sortOrder : ctx_r61.defaultSortOrder = $event; })("nzSortOrderChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzSortOrderChange_1_listener($event) { i0.ɵɵrestoreView(_r58); const field_r22 = i0.ɵɵnextContext().$implicit; const ctx_r63 = i0.ɵɵnextContext(2); return ctx_r63.sort($event, field_r22.property); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_Template, 8, 19, "ng-container", 3);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_div_3_Template, 2, 3, "div", 23);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_nz_resize_handle_4_Template, 2, 0, "nz-resize-handle", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r65 = i0.ɵɵnextContext();
    const fi_r23 = ctx_r65.index;
    const field_r22 = ctx_r65.$implicit;
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵattributeInterpolate2("id", "", ctx_r24.gridID, "-column-", fi_r23, "");
    i0.ɵɵproperty("nzShowSort", field_r22.showSort)("nzShowFilter", field_r22.showFilter)("nzFilters", field_r22.filters ? field_r22.filters : i0.ɵɵpureFunction0(17, _c8))("nzFilterMultiple", field_r22.filterMultiple)("nzDisabled", !field_r22.resizable)("nzMinWidth", field_r22.minWidth ? field_r22.minWidth : 100)("nzMaxWidth", field_r22.maxWidth ? field_r22.maxWidth : 500)("ngClass", ctx_r24.getClassMap(field_r22))("nzSortOrder", field_r22.showSort ? field_r22.sortOrder : ctx_r24.defaultSortOrder)("nzWidth", field_r22.width)("nzLeft", field_r22.left ? field_r22.left : false)("nzRight", field_r22.right ? field_r22.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r22.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r22.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r22.resizable);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementContainer(1, 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r70 = i0.ɵɵnextContext(2);
    const fi_r23 = ctx_r70.index;
    const field_r22 = ctx_r70.$implicit;
    const ctx_r66 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", ctx_r66.gridID + "column" + fi_r23);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", field_r22.template.ref)("ngTemplateOutletContext", field_r22.template.context);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 42);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_ng_container_6_Template_div_tap_1_listener() { i0.ɵɵrestoreView(_r72); const fi_r23 = i0.ɵɵnextContext(2).index; const ctx_r71 = i0.ɵɵnextContext(2); return ctx_r71.onFieldTapEllipsis(ctx_r71.gridID + "-column-" + fi_r23 + "-title"); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r74 = i0.ɵɵnextContext(2);
    const field_r22 = ctx_r74.$implicit;
    const fi_r23 = ctx_r74.index;
    const ctx_r68 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r68.getHeaderMaxWidth(field_r22));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-header", !ctx_r68.wrapLines);
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r68.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r68.isEllipsisActive(ctx_r68.gridID + "-column-" + fi_r23 + "-title", field_r22) ? field_r22.display : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(field_r22.display);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_nz_resize_handle_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-resize-handle", 36);
    i0.ɵɵelement(1, "div", 37);
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 38);
    i0.ɵɵlistener("nzResizeEnd", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template_th_nzResizeEnd_0_listener($event) { i0.ɵɵrestoreView(_r77); const field_r22 = i0.ɵɵnextContext().$implicit; const ctx_r75 = i0.ɵɵnextContext(2); return ctx_r75.onResize($event, field_r22.property, field_r22); })("nzSortOrderChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template_th_nzSortOrderChange_0_listener($event) { i0.ɵɵrestoreView(_r77); const field_r22 = i0.ɵɵnextContext().$implicit; const ctx_r78 = i0.ɵɵnextContext(2); return field_r22.showSort ? field_r22.sortOrder : ctx_r78.defaultSortOrder = $event; })("nzSortOrderChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template_th_nzSortOrderChange_0_listener($event) { i0.ɵɵrestoreView(_r77); const field_r22 = i0.ɵɵnextContext().$implicit; const ctx_r80 = i0.ɵɵnextContext(2); return ctx_r80.sort($event, field_r22.property); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_div_1_Template, 2, 3, "div", 23);
    i0.ɵɵelementStart(2, "nz-dropdown", 39, 40);
    i0.ɵɵelement(4, "i", 41);
    i0.ɵɵelementContainer(5, 35);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_ng_container_6_Template, 3, 7, "ng-container", 3);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_nz_resize_handle_7_Template, 2, 0, "nz-resize-handle", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r67 = i0.ɵɵreference(3);
    const ctx_r82 = i0.ɵɵnextContext();
    const fi_r23 = ctx_r82.index;
    const field_r22 = ctx_r82.$implicit;
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵattributeInterpolate2("id", "", ctx_r26.gridID, "-column-", fi_r23, "");
    i0.ɵɵproperty("nzShowSort", field_r22.showSort)("nzDisabled", !field_r22.resizable)("ngClass", ctx_r26.getClassMap(field_r22))("nzSortOrder", field_r22.showSort ? field_r22.sortOrder : ctx_r26.defaultSortOrder)("nzWidth", field_r22.width)("nzMinWidth", field_r22.minWidth ? field_r22.minWidth : 100)("nzMaxWidth", field_r22.maxWidth ? field_r22.maxWidth : 500)("nzLeft", field_r22.left ? field_r22.left : false)("nzRight", field_r22.right ? field_r22.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r22.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzClickHide", false);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("ant-table-filter-open", _r67.nzVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", field_r22.customFilter.ref)("ngTemplateOutletContext", field_r22.customFilter.context);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r22.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r22.resizable);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template, 5, 18, "ng-container", 20);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template, 8, 19, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r22 = ctx.$implicit;
    const _r25 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r22.customFilter)("ngIfElse", _r25);
} }
function CmacsCompactTableComponent_thead_3_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th");
} }
function CmacsCompactTableComponent_thead_3_th_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r83 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r83.extra);
} }
function CmacsCompactTableComponent_thead_3_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 43);
    i0.ɵɵelementStart(1, "div", 44);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_th_7_ng_container_2_Template, 2, 1, "ng-container", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", ctx_r13.actionColumnWidth)("min-width", ctx_r13.actionColumnWidth);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th", ctx_r13.logs)("cmacs-compact-table-logs-header-th-font", ctx_r13.logs);
    i0.ɵɵproperty("nzWidth", ctx_r13.actionColumnWidth)("nzRight", ctx_r13.getStickyWidthRight("extra"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r13.extra);
} }
function CmacsCompactTableComponent_thead_3_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 46);
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("min-width", "40px")("max-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r14.logs);
    i0.ɵɵproperty("nzRight", ctx_r14.getStickyWidthRight("smartTable"));
} }
function CmacsCompactTableComponent_thead_3_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th");
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th", ctx_r15.logs)("cmacs-compact-table-logs-header-th-font", ctx_r15.logs);
} }
function CmacsCompactTableComponent_thead_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead");
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_th_2_Template, 2, 8, "th", 7);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_thead_3_th_3_Template, 1, 9, "th", 8);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_thead_3_th_4_Template, 2, 11, "th", 9);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_thead_3_ng_container_5_Template, 4, 2, "ng-container", 10);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_thead_3_th_6_Template, 1, 0, "th", 3);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_thead_3_th_7_Template, 3, 11, "th", 11);
    i0.ɵɵtemplate(8, CmacsCompactTableComponent_thead_3_th_8_Template, 1, 7, "th", 12);
    i0.ɵɵtemplate(9, CmacsCompactTableComponent_thead_3_th_9_Template, 1, 4, "th", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-header-logs", ctx_r1.logs);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.smartTable && ctx_r1.inLineEdit && ctx_r1.config && ctx_r1.config.fields && ctx_r1.config.fields.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.draggable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.showRate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.smartTable && ctx_r1.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.centerTable);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r101 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 56);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r101); const item_r92 = i0.ɵɵnextContext(2).$implicit; const ctx_r99 = i0.ɵɵnextContext(5); return ctx_r99.getNode(item_r92[ctx_r99.fieldID]).selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template_label_checkedChange_1_listener($event) { i0.ɵɵrestoreView(_r101); const item_r92 = i0.ɵɵnextContext(2).$implicit; const data_r89 = i0.ɵɵnextContext().$implicit; const ctx_r102 = i0.ɵɵnextContext(4); return ctx_r102.onCheckboxTreeChange($event, item_r92, ctx_r102.mapOfExpandedData[data_r89[ctx_r102.fieldID]]); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r92 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r94 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("min-width", "30px")("max-width", "30px")("width", "30px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r94.logs && !!item_r92.children);
    i0.ɵɵproperty("nzLeft", ctx_r94.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r94.getNode(item_r92[ctx_r94.fieldID]).selected)("indeterminate", ctx_r94.getNode(item_r92[ctx_r94.fieldID]).selected === -1);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c9 = function (a0, a1, a2, a3, a4) { return { field: a0, data: a1, i: a2, item: a3, ci: a4 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template, 1, 0, "ng-container", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r111 = i0.ɵɵnextContext();
    const field_r106 = ctx_r111.$implicit;
    const i_r107 = ctx_r111.index;
    const item_r92 = i0.ɵɵnextContext(2).$implicit;
    const di_r90 = i0.ɵɵnextContext().index;
    const ctx_r108 = i0.ɵɵnextContext(4);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵstyleProp("display", ctx_r108.isNumber(field_r106) || ctx_r108.isTime(field_r106) || ctx_r108.isDate(field_r106) || ctx_r108.isSelect(field_r106) ? "block" : "inline-flex")("width", item_r92.children && !i_r107 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-container-logs", ctx_r108.expandable && ctx_r108.isString(field_r106) && !i_r107);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction5(8, _c9, field_r106, item_r92, di_r90, item_r92, i_r107));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c10 = function (a0, a1, a2) { return { field: a0, data: a1, i: a2 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template, 1, 0, "ng-container", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r115 = i0.ɵɵnextContext();
    const field_r106 = ctx_r115.$implicit;
    const i_r107 = ctx_r115.index;
    const item_r92 = i0.ɵɵnextContext(2).$implicit;
    const di_r90 = i0.ɵɵnextContext().index;
    const ctx_r109 = i0.ɵɵnextContext(4);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵstyleProp("display", ctx_r109.isNumber(field_r106) ? "block" : "inline-flex")("width", item_r92.children && !i_r107 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(6, _c10, field_r106, item_r92, di_r90));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r120 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 57);
    i0.ɵɵlistener("nzExpandChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r120); const item_r92 = i0.ɵɵnextContext(2).$implicit; return item_r92.expand = $event; })("nzExpandChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r120); const item_r92 = i0.ɵɵnextContext(2).$implicit; const data_r89 = i0.ɵɵnextContext().$implicit; const ctx_r121 = i0.ɵɵnextContext(4); return ctx_r121.ExpandCollapse(ctx_r121.mapOfExpandedData[data_r89[ctx_r121.fieldID]], item_r92, $event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template, 2, 14, "div", 58);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template, 2, 10, "div", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r106 = ctx.$implicit;
    const i_r107 = ctx.index;
    const item_r92 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r95 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("padding-left", ctx_r95.getCustomPadding(item_r92, i_r107), "px")("min-width", field_r106.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r106.editable)("cmacs-compact-table-on-edit-expandable", ctx_r95.editId === item_r92[ctx_r95.config.fieldId] && ctx_r95.property === field_r106.property && field_r106.editable && (ctx_r95.isString(field_r106) || ctx_r95.isDate(field_r106) || ctx_r95.isTime(field_r106) || ctx_r95.isSelect(field_r106) || ctx_r95.isNumber(field_r106) && field_r106.editable))("cmacs-compact-table-logs-header-th-font", ctx_r95.logs && !!item_r92.children)("cmacs-compact-table-expandable-td", !i_r107);
    i0.ɵɵproperty("ngClass", ctx_r95.getCustomClass(field_r106))("nzShowExpand", !ctx_r95.isNull(item_r92.children) && !i_r107)("nzExpand", item_r92.expand)("nzLeft", field_r106.left ? field_r106.left : false)("nzRight", field_r106.right ? field_r106.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r95.showViewModeTpl(field_r106, item_r92));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r95.showEditTpl(item_r92, field_r106));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r127 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 61);
    i0.ɵɵelementStart(1, "nz-rate", 62);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r127); const data_r89 = i0.ɵɵnextContext(3).$implicit; const ctx_r125 = i0.ɵɵnextContext(4); return ctx_r125.onRateChange($event, data_r89); })("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r127); const ctx_r128 = i0.ɵɵnextContext(7); return ctx_r128.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r92 = i0.ɵɵnextContext(2).$implicit;
    const data_r89 = i0.ɵɵnextContext().$implicit;
    const ctx_r96 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r96.logs && !!item_r92.children);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r89[ctx_r96.config.fieldRate])("nzCount", ctx_r96.rateCount)("nzDisabled", !ctx_r96.inLineEdit);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 63);
} if (rf & 2) {
    const item_r92 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r97 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r97.logs && !!item_r92.children);
    i0.ɵɵproperty("nzRight", ctx_r97.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 64);
} if (rf & 2) {
    const ctx_r98 = i0.ɵɵnextContext(7);
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r98.logs);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r134 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 50);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_click_0_listener() { i0.ɵɵrestoreView(_r134); const item_r92 = i0.ɵɵnextContext().$implicit; const ctx_r132 = i0.ɵɵnextContext(5); return ctx_r132.selectTreeSingle(item_r92); })("touchstart", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r134); const item_r92 = i0.ɵɵnextContext().$implicit; const ctx_r135 = i0.ɵɵnextContext(5); return ctx_r135.tapHandler($event, item_r92); })("contextmenu", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r134); const item_r92 = i0.ɵɵnextContext().$implicit; const ctx_r137 = i0.ɵɵnextContext(5); return ctx_r137.oncontextmenuevt($event, item_r92); })("dblclick", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_dblclick_0_listener() { i0.ɵɵrestoreView(_r134); const item_r92 = i0.ɵɵnextContext().$implicit; const ctx_r139 = i0.ɵɵnextContext(5); return ctx_r139.dblClickRow(item_r92); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template, 2, 11, "td", 51);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template, 3, 19, "td", 52);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template, 2, 5, "td", 53);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_4_Template, 1, 3, "td", 54);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_5_Template, 1, 2, "td", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r92 = i0.ɵɵnextContext().$implicit;
    const ctx_r93 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-expandable-row", ctx_r93.inLineEdit)("cmacs-compact-table-row-active", ctx_r93.editId === item_r92[ctx_r93.fieldID])("cmacs-compact-table-header-logs", ctx_r93.logs && !!item_r92.children)("ant-table-selected-row", ctx_r93.checkboxSelect ? ctx_r93.getNode(item_r92[ctx_r93.fieldID]).selected : ctx_r93.selection.isSelected(item_r92[ctx_r93.fieldID]));
    i0.ɵɵpropertyInterpolate1("id", "tr-", item_r92[ctx_r93.fieldID], "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r93.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r93.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r93.showRate && ctx_r93.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r93.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r93.centerTable);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template, 6, 14, "tr", 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r92 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r92.parent && item_r92.parent.expand || !item_r92.parent);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r89 = ctx.$implicit;
    const ctx_r88 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r88.mapOfExpandedData[data_r89[ctx_r88.fieldID]]);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", _r0.data);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_4_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r157 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 16);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_4_i_1_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r157); const i_r144 = i0.ɵɵnextContext(2).index; const ctx_r155 = i0.ɵɵnextContext(4); return ctx_r155.addRow(i_r144, $event); });
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 75);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_4_i_1_Template, 1, 0, "i", 76);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r146 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵproperty("nzLeft", ctx_r146.getStickyWidth("smartTable"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r146.hideButtons);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 77);
    i0.ɵɵelement(1, "i", 78);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r147 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵproperty("nzLeft", ctx_r147.getStickyWidth("draggable"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r160 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 80);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r160); const data_r143 = i0.ɵɵnextContext(2).$implicit; const ctx_r159 = i0.ɵɵnextContext(4); return ctx_r159.checkboxCache[ctx_r159.getIndex(data_r143[ctx_r159.config.fieldId])].selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r160); const data_r143 = i0.ɵɵnextContext(2).$implicit; const ctx_r162 = i0.ɵɵnextContext(4); return ctx_r162.onCheckboxChange($event, data_r143); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r143 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r158 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngModel", ctx_r158.checkboxCache[ctx_r158.getIndex(data_r143[ctx_r158.config.fieldId])].selected);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 56);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template, 1, 1, "label", 79);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r143 = i0.ɵɵnextContext().$implicit;
    const ctx_r148 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("cmacs-compact-table-fst-td", !ctx_r148.draggable);
    i0.ɵɵproperty("nzLeft", ctx_r148.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r143[ctx_r148.config.fieldId] && ctx_r148.checkboxCache[ctx_r148.getIndex(data_r143[ctx_r148.config.fieldId])]);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c11 = function (a0, a1, a2, a3) { return { field: a0, data: a1, i: a2, ci: a3 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 83);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_ng_container_1_Template, 1, 0, "ng-container", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r171 = i0.ɵɵnextContext();
    const field_r166 = ctx_r171.$implicit;
    const j_r167 = ctx_r171.index;
    const ctx_r172 = i0.ɵɵnextContext();
    const data_r143 = ctx_r172.$implicit;
    const i_r144 = ctx_r172.index;
    i0.ɵɵnextContext(4);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c11, field_r166, data_r143, i_r144, j_r167));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 83);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_ng_container_1_Template, 1, 0, "ng-container", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r166 = i0.ɵɵnextContext().$implicit;
    const ctx_r175 = i0.ɵɵnextContext();
    const data_r143 = ctx_r175.$implicit;
    const i_r144 = ctx_r175.index;
    i0.ɵɵnextContext(4);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c10, field_r166, data_r143, i_r144));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 81);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_Template, 2, 7, "div", 82);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_Template, 2, 6, "div", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r166 = ctx.$implicit;
    const j_r167 = ctx.index;
    const data_r143 = i0.ɵɵnextContext().$implicit;
    const ctx_r149 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("min-width", field_r166.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r166.editable)("cmacs-compact-table-fst-td", !ctx_r149.draggable && !ctx_r149.checkboxSelect && !j_r167);
    i0.ɵɵproperty("ngClass", ctx_r149.getCustomClass(field_r166))("nzLeft", field_r166.left ? field_r166.left : false)("nzRight", field_r166.right ? field_r166.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r149.showViewModeTplTree(field_r166, data_r143));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r149.showEditTplTree(data_r143, field_r166));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r179 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 84);
    i0.ɵɵelementStart(1, "nz-rate", 85);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r179); const data_r143 = i0.ɵɵnextContext().$implicit; const ctx_r177 = i0.ɵɵnextContext(4); return ctx_r177.onRateChange($event, data_r143); })("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r179); const ctx_r180 = i0.ɵɵnextContext(5); return ctx_r180.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r143 = i0.ɵɵnextContext().$implicit;
    const ctx_r150 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r143[ctx_r150.config.fieldRate])("nzCount", ctx_r150.rateCount);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 63);
} if (rf & 2) {
    const ctx_r151 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("nzRight", ctx_r151.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r185 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 88);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_i_1_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r185); const i_r144 = i0.ɵɵnextContext(2).index; const ctx_r183 = i0.ɵɵnextContext(4); return ctx_r183.deleteRow(i_r144, $event); });
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 86);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_i_1_Template, 1, 0, "i", 87);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r143 = i0.ɵɵnextContext().$implicit;
    const ctx_r152 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵproperty("nzRight", ctx_r152.getStickyWidthRight("smartTable"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (data_r143.deleteEnabled === undefined || data_r143.deleteEnabled) && !ctx_r152.hideButtons);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 64);
} if (rf & 2) {
    const ctx_r153 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r153.logs);
} }
const _c12 = function (a0, a1) { return { dropdown: a0, data: a1 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r188 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 66);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r188); const data_r143 = ctx.$implicit; const ctx_r187 = i0.ɵɵnextContext(4); return ctx_r187.clickRow($event, data_r143); })("touchstart", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r188); const data_r143 = ctx.$implicit; const ctx_r189 = i0.ɵɵnextContext(4); return ctx_r189.tapHandler($event, data_r143); })("contextmenu", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r188); const _r145 = i0.ɵɵreference(2); const ctx_r190 = i0.ɵɵnextContext(4); return ctx_r190.contextMenu($event, _r145); });
    i0.ɵɵelementStart(1, "cmacs-dropdown-menu", null, 67);
    i0.ɵɵelementContainer(3, 35);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_4_Template, 2, 6, "td", 68);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_5_Template, 2, 5, "td", 69);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_Template, 2, 4, "td", 70);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_Template, 3, 11, "td", 71);
    i0.ɵɵtemplate(8, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template, 2, 2, "td", 72);
    i0.ɵɵtemplate(9, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_9_Template, 1, 1, "td", 73);
    i0.ɵɵtemplate(10, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_Template, 2, 6, "td", 74);
    i0.ɵɵtemplate(11, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_11_Template, 1, 2, "td", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r143 = ctx.$implicit;
    const ctx_r142 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("cmacs-compact-table-row-active", ctx_r142.editId === data_r143[ctx_r142.config.fieldId])("ant-table-selected-row", ctx_r142.isRowSelected(data_r143))("cmacs-compact-table-editable-row", ctx_r142.inLineEdit)("cmacs-compact-table-smart-table-row", ctx_r142.smartTable && ctx_r142.inLineEdit);
    i0.ɵɵpropertyInterpolate1("id", "tr-", data_r143[ctx_r142.config.fieldId], "");
    i0.ɵɵproperty("cdkDragDisabled", !ctx_r142.draggable);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r142.contextmenu)("ngTemplateOutletContext", i0.ɵɵpureFunction2(20, _c12, ctx_r142.dropdown, data_r143));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r142.smartTable && ctx_r142.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r142.draggable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r142.checkboxSelect && ctx_r142.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r142.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r142.showRate && ctx_r142.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r142.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r142.smartTable && ctx_r142.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r142.centerTable);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template, 12, 23, "tr", 65);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngForOf", _r0.data);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 20);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 48, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r86 = i0.ɵɵreference(3);
    const ctx_r84 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r84.expandable)("ngIfElse", _r86);
} }
function CmacsCompactTableComponent_tbody_4_Template(rf, ctx) { if (rf & 1) {
    const _r192 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tbody", 47);
    i0.ɵɵlistener("cdkDropListDropped", function CmacsCompactTableComponent_tbody_4_Template_tbody_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r192); const ctx_r191 = i0.ɵɵnextContext(); return ctx_r191.drop($event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_Template, 4, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.config && ctx_r2.config.fields && ctx_r2.config.fields.length);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r209 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 56);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r209); const item_r201 = i0.ɵɵnextContext(2).$implicit; const ctx_r207 = i0.ɵɵnextContext(5); return ctx_r207.getNode(item_r201[ctx_r207.fieldID]).selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template_label_checkedChange_1_listener($event) { i0.ɵɵrestoreView(_r209); const item_r201 = i0.ɵɵnextContext(2).$implicit; const data_r194 = i0.ɵɵnextContext(3).$implicit; const ctx_r210 = i0.ɵɵnextContext(2); return ctx_r210.onCheckboxTreeChange($event, item_r201, ctx_r210.mapOfExpandedData[data_r194[ctx_r210.fieldID]]); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r201 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r203 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("min-width", "30px")("max-width", "30px")("width", "30px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r203.logs && !!item_r201.children);
    i0.ɵɵproperty("nzLeft", ctx_r203.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r203.getNode(item_r201[ctx_r203.fieldID]).selected)("indeterminate", ctx_r203.getNode(item_r201[ctx_r203.fieldID]).selected === -1);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template, 1, 0, "ng-container", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r219 = i0.ɵɵnextContext();
    const field_r214 = ctx_r219.$implicit;
    const i_r215 = ctx_r219.index;
    const item_r201 = i0.ɵɵnextContext(2).$implicit;
    const di_r195 = i0.ɵɵnextContext(3).i;
    const ctx_r216 = i0.ɵɵnextContext(2);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵstyleProp("display", ctx_r216.isNumber(field_r214) || ctx_r216.isTime(field_r214) || ctx_r216.isDate(field_r214) || ctx_r216.isSelect(field_r214) ? "block" : "inline-flex")("width", item_r201.children && !i_r215 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-container-logs", ctx_r216.expandable && ctx_r216.isString(field_r214) && !i_r215);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction5(8, _c9, field_r214, item_r201, di_r195, item_r201, i_r215));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template, 1, 0, "ng-container", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r223 = i0.ɵɵnextContext();
    const field_r214 = ctx_r223.$implicit;
    const i_r215 = ctx_r223.index;
    const item_r201 = i0.ɵɵnextContext(2).$implicit;
    const di_r195 = i0.ɵɵnextContext(3).i;
    const ctx_r217 = i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵstyleProp("display", ctx_r217.isNumber(field_r214) ? "block" : "inline-flex")("width", item_r201.children && !i_r215 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(6, _c10, field_r214, item_r201, di_r195));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r228 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 94);
    i0.ɵɵlistener("nzExpandChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r228); const item_r201 = i0.ɵɵnextContext(2).$implicit; return item_r201.expand = $event; })("nzExpandChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r228); const item_r201 = i0.ɵɵnextContext(2).$implicit; const data_r194 = i0.ɵɵnextContext(3).$implicit; const ctx_r229 = i0.ɵɵnextContext(2); return ctx_r229.ExpandCollapse(ctx_r229.mapOfExpandedData[data_r194[ctx_r229.fieldID]], item_r201, $event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template, 2, 14, "div", 58);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template, 2, 10, "div", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r214 = ctx.$implicit;
    const i_r215 = ctx.index;
    const item_r201 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r204 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("padding-left", ctx_r204.getCustomPadding(item_r201, i_r215), "px")("min-width", field_r214.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r214.editable)("cmacs-compact-table-on-edit-expandable", ctx_r204.editId === item_r201[ctx_r204.config.fieldId] && ctx_r204.property === field_r214.property && field_r214.editable && (ctx_r204.isString(field_r214) || ctx_r204.isDate(field_r214) || ctx_r204.isTime(field_r214) || ctx_r204.isSelect(field_r214) || ctx_r204.isNumber(field_r214) && field_r214.editable))("cmacs-compact-table-logs-header-th-font", ctx_r204.logs && !!item_r201.children)("cmacs-compact-table-expandable-td", !i_r215);
    i0.ɵɵproperty("nzShowExpand", !!item_r201.children && !i_r215)("nzExpand", item_r201.expand)("nzLeft", field_r214.left ? field_r214.left : false)("nzRight", field_r214.right ? field_r214.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r204.showViewModeTpl(field_r214, item_r201));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r204.showEditTpl(item_r201, field_r214));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r235 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 61);
    i0.ɵɵelementStart(1, "nz-rate", 62);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r235); const data_r194 = i0.ɵɵnextContext(5).$implicit; const ctx_r233 = i0.ɵɵnextContext(2); return ctx_r233.onRateChange($event, data_r194); })("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r235); const ctx_r236 = i0.ɵɵnextContext(7); return ctx_r236.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r201 = i0.ɵɵnextContext(2).$implicit;
    const data_r194 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r205 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r205.logs && item_r201.children && item_r201.children.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r194[ctx_r205.config.fieldRate])("nzCount", ctx_r205.rateCount)("nzDisabled", !ctx_r205.inLineEdit);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 63);
} if (rf & 2) {
    const item_r201 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r206 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r206.logs && item_r201.children && item_r201.children.length);
    i0.ɵɵproperty("nzRight", ctx_r206.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r242 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 92);
    i0.ɵɵlistener("touchstart", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r242); const item_r201 = i0.ɵɵnextContext().$implicit; const ctx_r240 = i0.ɵɵnextContext(5); return ctx_r240.tapHandler($event, item_r201); })("contextmenu", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r242); const item_r201 = i0.ɵɵnextContext().$implicit; const ctx_r243 = i0.ɵɵnextContext(5); return ctx_r243.oncontextmenuevt($event, item_r201); })("dblclick", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template_tr_dblclick_0_listener() { i0.ɵɵrestoreView(_r242); const item_r201 = i0.ɵɵnextContext().$implicit; const ctx_r245 = i0.ɵɵnextContext(5); return ctx_r245.dblClickRow(item_r201); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template, 2, 11, "td", 51);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template, 3, 18, "td", 93);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template, 2, 5, "td", 53);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_4_Template, 1, 3, "td", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r201 = i0.ɵɵnextContext().$implicit;
    const ctx_r202 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-row-active", ctx_r202.editId === item_r201[ctx_r202.fieldID])("cmacs-compact-table-expandable-row", ctx_r202.inLineEdit)("cmacs-compact-table-header-logs", ctx_r202.logs && !!item_r201.children);
    i0.ɵɵpropertyInterpolate1("id", "tr-", item_r201[ctx_r202.fieldID], "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r202.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r202.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r202.showRate && ctx_r202.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r202.extra);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template, 5, 11, "tr", 91);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r201 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r201.parent && item_r201.parent.expand || !item_r201.parent);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r194 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r197 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r197.mapOfExpandedData[data_r194[ctx_r197.fieldID]]);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 35);
} if (rf & 2) {
    const data_r194 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r250 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r250.contextmenu)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c12, ctx_r250.dropdown, data_r194));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r262 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 16);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_i_1_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r262); const di_r195 = i0.ɵɵnextContext(4).i; const ctx_r260 = i0.ɵɵnextContext(2); return ctx_r260.addRow(di_r195, $event); });
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 75);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_i_1_Template, 1, 0, "i", 76);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r251 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r251.logs);
    i0.ɵɵproperty("nzLeft", ctx_r251.getStickyWidth("smartTable"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r251.hideButtons);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 77);
    i0.ɵɵelement(1, "i", 78);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r252 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵproperty("nzLeft", ctx_r252.getStickyWidth("draggable"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r265 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 80);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r265); const data_r194 = i0.ɵɵnextContext(4).$implicit; const ctx_r264 = i0.ɵɵnextContext(2); return ctx_r264.checkboxCache[ctx_r264.getIndex(data_r194[ctx_r264.config.fieldId])].selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r265); const data_r194 = i0.ɵɵnextContext(4).$implicit; const ctx_r267 = i0.ɵɵnextContext(2); return ctx_r267.onCheckboxChange($event, data_r194); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r194 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r263 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r263.checkboxCache[ctx_r263.getIndex(data_r194[ctx_r263.config.fieldId])].selected);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 56);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template, 1, 1, "label", 79);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r194 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r253 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-fst-td", !ctx_r253.draggable);
    i0.ɵɵproperty("nzLeft", ctx_r253.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r194[ctx_r253.config.fieldId] && ctx_r253.checkboxCache[ctx_r253.getIndex(data_r194[ctx_r253.config.fieldId])]);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 83);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_ng_container_1_Template, 1, 0, "ng-container", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r276 = i0.ɵɵnextContext();
    const field_r271 = ctx_r276.$implicit;
    const j_r272 = ctx_r276.index;
    const ctx_r277 = i0.ɵɵnextContext(3);
    const data_r194 = ctx_r277.$implicit;
    const di_r195 = ctx_r277.i;
    i0.ɵɵnextContext(2);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c11, field_r271, data_r194, di_r195, j_r272));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 83);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_ng_container_1_Template, 1, 0, "ng-container", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r271 = i0.ɵɵnextContext().$implicit;
    const ctx_r280 = i0.ɵɵnextContext(3);
    const data_r194 = ctx_r280.$implicit;
    const di_r195 = ctx_r280.i;
    i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c10, field_r271, data_r194, di_r195));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 99);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_Template, 2, 7, "div", 82);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_Template, 2, 6, "div", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r271 = ctx.$implicit;
    const j_r272 = ctx.index;
    const data_r194 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r254 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("min-width", field_r271.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r271.editable)("cmacs-compact-table-fst-td", !ctx_r254.draggable && !ctx_r254.checkboxSelect && !j_r272);
    i0.ɵɵproperty("nzLeft", field_r271.left ? field_r271.left : false)("nzRight", field_r271.right ? field_r271.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r254.showViewModeTplTree(field_r271, data_r194));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r254.showEditTplTree(data_r194, field_r271));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r284 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 84);
    i0.ɵɵelementStart(1, "nz-rate", 85);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r284); const data_r194 = i0.ɵɵnextContext(3).$implicit; const ctx_r282 = i0.ɵɵnextContext(2); return ctx_r282.onRateChange($event, data_r194); })("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r284); const ctx_r285 = i0.ɵɵnextContext(5); return ctx_r285.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r194 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r255 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r194[ctx_r255.config.fieldRate])("nzCount", ctx_r255.rateCount);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 63);
} if (rf & 2) {
    const ctx_r256 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("nzRight", ctx_r256.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r290 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 88);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_i_1_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r290); const di_r195 = i0.ɵɵnextContext(4).i; const ctx_r288 = i0.ɵɵnextContext(2); return ctx_r288.deleteRow(di_r195, $event); });
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 86);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_i_1_Template, 1, 0, "i", 87);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r194 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r257 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r257.logs);
    i0.ɵɵproperty("nzRight", ctx_r257.getStickyWidthRight("smartTable"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (data_r194.deleteEnabled === undefined || data_r194.deleteEnabled) && !ctx_r257.hideButtons);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r294 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 66);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r294); const data_r194 = i0.ɵɵnextContext(2).$implicit; const ctx_r292 = i0.ɵɵnextContext(2); return ctx_r292.clickRow($event, data_r194); })("touchstart", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r294); const data_r194 = i0.ɵɵnextContext(2).$implicit; const ctx_r295 = i0.ɵɵnextContext(2); return ctx_r295.tapHandler($event, data_r194); })("contextmenu", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r294); const _r249 = i0.ɵɵreference(2); const data_r194 = i0.ɵɵnextContext(2).$implicit; const ctx_r297 = i0.ɵɵnextContext(2); return ctx_r297.contextMenu($event, _r249, data_r194); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_ng_template_1_Template, 1, 5, "ng-template", null, 95, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_Template, 2, 8, "td", 96);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_4_Template, 2, 5, "td", 69);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_Template, 2, 4, "td", 70);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_Template, 3, 10, "td", 97);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template, 2, 2, "td", 72);
    i0.ɵɵtemplate(8, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_8_Template, 1, 1, "td", 73);
    i0.ɵɵtemplate(9, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_Template, 2, 8, "td", 98);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r194 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r199 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-row-active", ctx_r199.editId === data_r194[ctx_r199.config.fieldId])("ant-table-selected-row", ctx_r199.isRowSelected(data_r194))("cmacs-compact-table-editable-row", ctx_r199.inLineEdit)("cmacs-compact-table-smart-table-row", ctx_r199.smartTable && ctx_r199.inLineEdit);
    i0.ɵɵpropertyInterpolate1("id", "tr-", data_r194[ctx_r199.config.fieldId], "");
    i0.ɵɵproperty("cdkDragDisabled", !ctx_r199.draggable);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r199.smartTable && ctx_r199.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r199.draggable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r199.checkboxSelect && ctx_r199.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r199.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r199.showRate && ctx_r199.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r199.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r199.smartTable && ctx_r199.inLineEdit);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 20);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template, 10, 17, "ng-template", null, 90, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r198 = i0.ɵɵreference(3);
    const ctx_r196 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r196.expandable)("ngIfElse", _r198);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_Template, 4, 2, "ng-container", 3);
} if (rf & 2) {
    const ctx_r193 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r193.config && ctx_r193.config.fields && ctx_r193.config.fields.length);
} }
function CmacsCompactTableComponent_tbody_5_Template(rf, ctx) { if (rf & 1) {
    const _r301 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tbody", 47);
    i0.ɵɵlistener("cdkDropListDropped", function CmacsCompactTableComponent_tbody_5_Template_tbody_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r301); const ctx_r300 = i0.ɵɵnextContext(); return ctx_r300.drop($event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_Template, 1, 1, "ng-template", 89);
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_ng_template_6_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r317 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 109, 110);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r317); const ctx_r316 = i0.ɵɵnextContext(2); return ctx_r316.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r317); const ctx_r318 = i0.ɵɵnextContext(2); return ctx_r318.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r317); const ctx_r320 = i0.ɵɵnextContext(); const data_r303 = ctx_r320.data; const field_r302 = ctx_r320.field; return (data_r303[field_r302.property] = $event); })("keyup", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r317); const ctx_r322 = i0.ɵɵnextContext(); const i_r304 = ctx_r322.i; const data_r303 = ctx_r322.data; const ctx_r321 = i0.ɵɵnextContext(); return ctx_r321.endEditMode($event, i_r304, data_r303); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r323 = i0.ɵɵnextContext();
    const data_r303 = ctx_r323.data;
    const field_r302 = ctx_r323.field;
    const ctx_r305 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r305.validate(data_r303, field_r302));
    i0.ɵɵproperty("placeholder", field_r302.placeholder ? field_r302.placeholder : "")("ngModel", data_r303[field_r302.property]);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template(rf, ctx) { if (rf & 1) {
    const _r326 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-date-picker", 111, 112);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_click_0_listener($event) { i0.ɵɵrestoreView(_r326); const ctx_r325 = i0.ɵɵnextContext(2); return ctx_r325.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r326); const ctx_r327 = i0.ɵɵnextContext(2); return ctx_r327.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r326); const ctx_r329 = i0.ɵɵnextContext(); const data_r303 = ctx_r329.data; const field_r302 = ctx_r329.field; return (data_r303[field_r302.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r326); const ctx_r331 = i0.ɵɵnextContext(); const i_r304 = ctx_r331.i; const data_r303 = ctx_r331.data; const ctx_r330 = i0.ɵɵnextContext(); return ctx_r330.endEditModeNgModel(i_r304, data_r303); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r332 = i0.ɵɵnextContext();
    const data_r303 = ctx_r332.data;
    const field_r302 = ctx_r332.field;
    const ctx_r306 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r306.validate(data_r303, field_r302));
    i0.ɵɵproperty("allowClear", true)("ngModel", data_r303[field_r302.property]);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template(rf, ctx) { if (rf & 1) {
    const _r335 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-datetime-picker", 113, 114);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_click_0_listener($event) { i0.ɵɵrestoreView(_r335); const ctx_r334 = i0.ɵɵnextContext(2); return ctx_r334.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r335); const ctx_r336 = i0.ɵɵnextContext(2); return ctx_r336.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r335); const ctx_r338 = i0.ɵɵnextContext(); const data_r303 = ctx_r338.data; const field_r302 = ctx_r338.field; return (data_r303[field_r302.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r335); const ctx_r340 = i0.ɵɵnextContext(); const i_r304 = ctx_r340.i; const data_r303 = ctx_r340.data; const ctx_r339 = i0.ɵɵnextContext(); return ctx_r339.ngModelChange(i_r304, data_r303); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r341 = i0.ɵɵnextContext();
    const data_r303 = ctx_r341.data;
    const field_r302 = ctx_r341.field;
    const ctx_r307 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r307.validate(data_r303, field_r302));
    i0.ɵɵproperty("use12Hours", ctx_r307.use12Hours)("format", field_r302.timeFormat ? field_r302.timeFormat : "h:mm a")("defaultOpenValue", ctx_r307.defaultTimeValue)("ngModel", data_r303[field_r302.property]);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_cmacs_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 118);
} if (rf & 2) {
    const sData_r344 = ctx.$implicit;
    const field_r302 = i0.ɵɵnextContext(2).field;
    i0.ɵɵpropertyInterpolate("label", sData_r344[field_r302.select.label]);
    i0.ɵɵpropertyInterpolate("value", sData_r344[field_r302.select.value]);
    i0.ɵɵpropertyInterpolate("divider", sData_r344[field_r302.select.divider]);
    i0.ɵɵproperty("disabled", sData_r344.disabled);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r347 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-select", 115, 116);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_click_0_listener($event) { i0.ɵɵrestoreView(_r347); const ctx_r346 = i0.ɵɵnextContext(2); return ctx_r346.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r347); const ctx_r348 = i0.ɵɵnextContext(2); return ctx_r348.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r347); const ctx_r350 = i0.ɵɵnextContext(); const data_r303 = ctx_r350.data; const field_r302 = ctx_r350.field; return (data_r303[field_r302.property] = $event); })("cmacsEditedInput", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_cmacsEditedInput_0_listener($event) { i0.ɵɵrestoreView(_r347); const ctx_r351 = i0.ɵɵnextContext(2); return ctx_r351.cmacsEditedInput($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r347); const ctx_r353 = i0.ɵɵnextContext(); const i_r304 = ctx_r353.i; const data_r303 = ctx_r353.data; const field_r302 = ctx_r353.field; const ctx_r352 = i0.ɵɵnextContext(); return ctx_r352.endEditModeNgModel(i_r304, data_r303, null, field_r302); })("input", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_input_0_listener($event) { i0.ɵɵrestoreView(_r347); const ctx_r354 = i0.ɵɵnextContext(2); return ctx_r354.cmacsEditedInput($event); })("keydown.enter", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_keydown_enter_0_listener() { i0.ɵɵrestoreView(_r347); const ctx_r356 = i0.ɵɵnextContext(); const i_r304 = ctx_r356.i; const data_r303 = ctx_r356.data; const field_r302 = ctx_r356.field; const ctx_r355 = i0.ɵɵnextContext(); return ctx_r355.addOption(i_r304, data_r303, null, field_r302); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_6_cmacs_select_3_cmacs_option_2_Template, 1, 4, "cmacs-option", 117);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r357 = i0.ɵɵnextContext();
    const field_r302 = ctx_r357.field;
    const data_r303 = ctx_r357.data;
    const _r309 = i0.ɵɵreference(5);
    const ctx_r308 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-field-mode-status", field_r302.mode === "status")("cmacs-compact-table-field-mode-status-low-edit", field_r302.mode === "status" && ctx_r308.getClassStatus(data_r303, field_r302) === "low")("cmacs-compact-table-field-mode-status-medium-edit", field_r302.mode === "status" && ctx_r308.getClassStatus(data_r303, field_r302) === "medium")("cmacs-compact-table-field-mode-status-high-edit", field_r302.mode === "status" && ctx_r308.getClassStatus(data_r303, field_r302) === "high")("cmacs-compact-table-edit-mode-invalid", !ctx_r308.validate(data_r303, field_r302));
    i0.ɵɵproperty("dropdownRender", _r309)("cmacsEditable", field_r302.select.dropdownAddOption)("placeHolder", field_r302.placeholder ? field_r302.placeholder : "")("mode", field_r302.mode ? field_r302.mode : "default")("showCmacsSearch", field_r302.showCmacsSearch)("ngModel", data_r303[field_r302.property]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r302.select.selectData);
} }
function CmacsCompactTableComponent_ng_template_6_ng_template_4_nz_divider_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-divider");
} }
function CmacsCompactTableComponent_ng_template_6_ng_template_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r362 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 120);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_ng_template_4_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r362); const ctx_r361 = i0.ɵɵnextContext(2); const i_r304 = ctx_r361.i; const data_r303 = ctx_r361.data; const field_r302 = ctx_r361.field; const ctx_r360 = i0.ɵɵnextContext(); return ctx_r360.addOption(i_r304, data_r303, null, field_r302); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r302 = i0.ɵɵnextContext(2).field;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(field_r302.select == null ? null : field_r302.select.dropdownAddOptionLabel);
} }
function CmacsCompactTableComponent_ng_template_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_ng_template_6_ng_template_4_nz_divider_0_Template, 1, 0, "nz-divider", 3);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_ng_template_6_ng_template_4_button_1_Template, 2, 1, "button", 119);
} if (rf & 2) {
    const field_r302 = i0.ɵɵnextContext().field;
    i0.ɵɵproperty("ngIf", field_r302.select == null ? null : field_r302.select.dropdownAddOption);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r302.select == null ? null : field_r302.select.dropdownAddOption);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template(rf, ctx) { if (rf & 1) {
    const _r368 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 121, 122);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r368); const ctx_r367 = i0.ɵɵnextContext(); const data_r303 = ctx_r367.data; const field_r302 = ctx_r367.field; return (data_r303[field_r302.property] = $event); })("click", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r368); const ctx_r369 = i0.ɵɵnextContext(2); return ctx_r369.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r368); const ctx_r370 = i0.ɵɵnextContext(2); return ctx_r370.preventDefault($event); })("keyup", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r368); const ctx_r372 = i0.ɵɵnextContext(); const i_r304 = ctx_r372.i; const data_r303 = ctx_r372.data; const ctx_r371 = i0.ɵɵnextContext(); return ctx_r371.endEditMode($event, i_r304, data_r303); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r368); const ctx_r374 = i0.ɵɵnextContext(); const i_r304 = ctx_r374.i; const data_r303 = ctx_r374.data; const ctx_r373 = i0.ɵɵnextContext(); return ctx_r373.ngModelChange(i_r304, data_r303); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r375 = i0.ɵɵnextContext();
    const data_r303 = ctx_r375.data;
    const field_r302 = ctx_r375.field;
    const ctx_r311 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r311.validate(data_r303, field_r302));
    i0.ɵɵproperty("ngModel", data_r303[field_r302.property])("cmacsStep", field_r302.cmacsStep)("min", field_r302.min)("max", field_r302.max)("formatter", ctx_r311.formatter)("parser", ctx_r311.parser);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template(rf, ctx) { if (rf & 1) {
    const _r379 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 123, 122);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r379); const ctx_r378 = i0.ɵɵnextContext(); const data_r303 = ctx_r378.data; const field_r302 = ctx_r378.field; return (data_r303[field_r302.property] = $event); })("click", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r379); const ctx_r380 = i0.ɵɵnextContext(2); return ctx_r380.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r379); const ctx_r381 = i0.ɵɵnextContext(2); return ctx_r381.preventDefault($event); })("keyup", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r379); const ctx_r383 = i0.ɵɵnextContext(); const i_r304 = ctx_r383.i; const data_r303 = ctx_r383.data; const ctx_r382 = i0.ɵɵnextContext(); return ctx_r382.endEditMode($event, i_r304, data_r303); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r379); const ctx_r385 = i0.ɵɵnextContext(); const i_r304 = ctx_r385.i; const data_r303 = ctx_r385.data; const ctx_r384 = i0.ɵɵnextContext(); return ctx_r384.ngModelChange(i_r304, data_r303); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r386 = i0.ɵɵnextContext();
    const data_r303 = ctx_r386.data;
    const field_r302 = ctx_r386.field;
    const ctx_r312 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r312.validate(data_r303, field_r302));
    i0.ɵɵproperty("ngModel", data_r303[field_r302.property])("formatter", !ctx_r312.isNull(field_r302.formatter) ? field_r302.formatter : ctx_r312.defaultFormatter)("parser", !ctx_r312.isNull(field_r302.parser) ? field_r302.parser : ctx_r312.defaultParser)("cmacsStep", field_r302.cmacsStep ? field_r302.cmacsStep : 1)("min", field_r302.min)("max", field_r302.max);
} }
function CmacsCompactTableComponent_ng_template_6_label_8_Template(rf, ctx) { if (rf & 1) {
    const _r390 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 124, 125);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_label_8_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r390); const ctx_r389 = i0.ɵɵnextContext(); const data_r303 = ctx_r389.data; const field_r302 = ctx_r389.field; return (data_r303[field_r302.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_label_8_Template_label_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r390); const ctx_r392 = i0.ɵɵnextContext(); const i_r304 = ctx_r392.i; const data_r303 = ctx_r392.data; const field_r302 = ctx_r392.field; const ctx_r391 = i0.ɵɵnextContext(); return ctx_r391.endEditModeNgModel(i_r304, data_r303, field_r302.property, field_r302); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r393 = i0.ɵɵnextContext();
    const data_r303 = ctx_r393.data;
    const field_r302 = ctx_r393.field;
    const ctx_r313 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r313.validate(data_r303, field_r302));
    i0.ɵɵproperty("ngModel", data_r303[field_r302.property]);
} }
const _c13 = function () { return { initialCountry: "us", formatOnDisplay: false }; };
function CmacsCompactTableComponent_ng_template_6_cmacs_phone_number_9_Template(rf, ctx) { if (rf & 1) {
    const _r396 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-phone-number", 126, 127);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_phone_number_9_Template_cmacs_phone_number_click_0_listener($event) { i0.ɵɵrestoreView(_r396); const ctx_r395 = i0.ɵɵnextContext(2); return ctx_r395.preventDefault($event); })("hasError", function CmacsCompactTableComponent_ng_template_6_cmacs_phone_number_9_Template_cmacs_phone_number_hasError_0_listener($event) { i0.ɵɵrestoreView(_r396); const ctx_r398 = i0.ɵɵnextContext(); const i_r304 = ctx_r398.i; const data_r303 = ctx_r398.data; const field_r302 = ctx_r398.field; const ctx_r397 = i0.ɵɵnextContext(); return ctx_r397.hasPhoneNumberError($event, i_r304, data_r303, field_r302.property, field_r302); })("countryChange", function CmacsCompactTableComponent_ng_template_6_cmacs_phone_number_9_Template_cmacs_phone_number_countryChange_0_listener($event) { i0.ɵɵrestoreView(_r396); const ctx_r399 = i0.ɵɵnextContext(2); return ctx_r399.onCountryChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r314 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("init", i0.ɵɵpureFunction0(2, _c13))("formControlCustom", ctx_r314.formPhoneControl);
} }
function CmacsCompactTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_ng_template_6_input_0_Template, 2, 4, "input", 100);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template, 2, 4, "cmacs-date-picker", 101);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template, 2, 6, "cmacs-datetime-picker", 102);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template, 3, 17, "cmacs-select", 103);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_6_ng_template_4_Template, 2, 2, "ng-template", null, 104, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template, 2, 8, "cmacs-input-number", 105);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template, 2, 8, "cmacs-input-number", 106);
    i0.ɵɵtemplate(8, CmacsCompactTableComponent_ng_template_6_label_8_Template, 2, 3, "label", 107);
    i0.ɵɵtemplate(9, CmacsCompactTableComponent_ng_template_6_cmacs_phone_number_9_Template, 2, 3, "cmacs-phone-number", 108);
} if (rf & 2) {
    const field_r302 = ctx.field;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r5.isString(field_r302));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isDate(field_r302));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isTime(field_r302));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isSelect(field_r302));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r5.isNumber(field_r302) && !ctx_r5.isSelect(field_r302) && field_r302.useCommaMarker);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isNumber(field_r302) && !ctx_r5.isSelect(field_r302) && !field_r302.useCommaMarker);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isBoolean(field_r302));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isPhone(field_r302));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_1_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 131);
} if (rf & 2) {
    const field_r400 = i0.ɵɵnextContext(2).field;
    const ctx_r415 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-icon", ctx_r415.inLineEdit && field_r400.editable)("cmacs-compact-table-edit-icon-view", !ctx_r415.inLineEdit || !field_r400.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r419 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 128);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r419); const ctx_r418 = i0.ɵɵnextContext(); const data_r401 = ctx_r418.data; const field_r400 = ctx_r418.field; const ctx_r417 = i0.ɵɵnextContext(); return ctx_r417.startEdit(data_r401[ctx_r417.config.fieldId], field_r400.property, $event, data_r401); });
    i0.ɵɵelementStart(2, "div", 129);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r419); const ctx_r421 = i0.ɵɵnextContext(); const i_r402 = ctx_r421.i; const field_r400 = ctx_r421.field; const ctx_r420 = i0.ɵɵnextContext(); return ctx_r420.onDataTapEllipsis(ctx_r420.gridID + "-row-" + i_r402 + "-" + field_r400.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_1_i_4_Template, 1, 4, "i", 130);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r422 = i0.ɵɵnextContext();
    const data_r401 = ctx_r422.data;
    const field_r400 = ctx_r422.field;
    const item_r403 = ctx_r422.item;
    const i_r402 = ctx_r422.i;
    const ctx_r405 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r405.editId === data_r401[ctx_r405.config.fieldId] && ctx_r405.property === field_r400.property && field_r400.editable && (ctx_r405.isString(field_r400) || ctx_r405.isDate(field_r400) || ctx_r405.isSelect(field_r400) || ctx_r405.isTime(field_r400)))("cmacs-compact-table-on-edit-no-padding", ctx_r405.editId === data_r401[ctx_r405.config.fieldId] && ctx_r405.property === field_r400.property && field_r400.editable && (ctx_r405.isNumber(field_r400) || ctx_r405.isDate(field_r400) || ctx_r405.isTime(field_r400) || ctx_r405.isString(field_r400)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r405.getMaxWidth(field_r400, item_r403, i_r402));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell", !ctx_r405.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r405.isNull(data_r401[field_r400.property]) || !data_r401[field_r400.property].length)("cmacs-compact-table-invalid", !ctx_r405.validate(data_r401, field_r400));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r405.gridID, "-row-", i_r402, "-", field_r400.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r405.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r405.isEllipsisActive(ctx_r405.gridID + "-row-" + i_r402 + "-" + field_r400.property, field_r400) ? ctx_r405.getStringFieldValue(data_r401, field_r400) : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r405.getStringFieldValue(data_r401, field_r400), " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r400.editable || field_r400.editable === undefined);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r425 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 128);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r425); const ctx_r424 = i0.ɵɵnextContext(); const data_r401 = ctx_r424.data; const field_r400 = ctx_r424.field; const ctx_r423 = i0.ɵɵnextContext(); return ctx_r423.startEdit(data_r401[ctx_r423.config.fieldId], field_r400.property, $event, data_r401); });
    i0.ɵɵelementStart(2, "div", 132);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r425); const ctx_r427 = i0.ɵɵnextContext(); const i_r402 = ctx_r427.i; const field_r400 = ctx_r427.field; const ctx_r426 = i0.ɵɵnextContext(); return ctx_r426.onDataTapEllipsis(ctx_r426.gridID + "-row-" + i_r402 + "-" + field_r400.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 133);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r428 = i0.ɵɵnextContext();
    const data_r401 = ctx_r428.data;
    const field_r400 = ctx_r428.field;
    const item_r403 = ctx_r428.item;
    const i_r402 = ctx_r428.i;
    const ctx_r406 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r406.editId === data_r401[ctx_r406.config.fieldId] && ctx_r406.property === field_r400.property && field_r400.editable && (ctx_r406.isString(field_r400) || ctx_r406.isDate(field_r400) || ctx_r406.isSelect(field_r400) || ctx_r406.isTime(field_r400)))("cmacs-compact-table-on-edit-no-padding", ctx_r406.editId === data_r401[ctx_r406.config.fieldId] && ctx_r406.property === field_r400.property && field_r400.editable && (ctx_r406.isNumber(field_r400) || ctx_r406.isDate(field_r400) || ctx_r406.isTime(field_r400) || ctx_r406.isString(field_r400)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r406.getMaxWidth(field_r400, item_r403, i_r402));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r406.validate(data_r401, field_r400))("cmacs-compact-table-overflow-cell", !ctx_r406.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r406.isNull(data_r401[field_r400.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r406.gridID, "-row-", i_r402, "-", field_r400.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r406.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r406.isEllipsisActive(ctx_r406.gridID + "-row-" + i_r402 + "-" + field_r400.property, field_r400) ? data_r401[field_r400.property] ? ctx_r406.transformDate(data_r401[field_r400.property]) : field_r400.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(data_r401[field_r400.property] ? ctx_r406.transformDate(data_r401[field_r400.property]) : field_r400.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-calendar-icon", ctx_r406.inLineEdit && field_r400.editable)("cmacs-compact-table-calendar-icon-view", !ctx_r406.inLineEdit || !field_r400.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r431 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 128);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r431); const ctx_r430 = i0.ɵɵnextContext(); const data_r401 = ctx_r430.data; const field_r400 = ctx_r430.field; const ctx_r429 = i0.ɵɵnextContext(); return ctx_r429.startEdit(data_r401[ctx_r429.config.fieldId], field_r400.property, $event, data_r401); });
    i0.ɵɵelementStart(2, "div", 132);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r431); const ctx_r433 = i0.ɵɵnextContext(); const i_r402 = ctx_r433.i; const field_r400 = ctx_r433.field; const ctx_r432 = i0.ɵɵnextContext(); return ctx_r432.onDataTapEllipsis(ctx_r432.gridID + "-row-" + i_r402 + "-" + field_r400.property); });
    i0.ɵɵpipe(3, "date");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "i", 134);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r434 = i0.ɵɵnextContext();
    const data_r401 = ctx_r434.data;
    const field_r400 = ctx_r434.field;
    const item_r403 = ctx_r434.item;
    const i_r402 = ctx_r434.i;
    const ctx_r407 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r407.editId === data_r401[ctx_r407.config.fieldId] && ctx_r407.property === field_r400.property && field_r400.editable && (ctx_r407.isString(field_r400) || ctx_r407.isDate(field_r400) || ctx_r407.isSelect(field_r400) || ctx_r407.isTime(field_r400)))("cmacs-compact-table-on-edit-no-padding", ctx_r407.editId === data_r401[ctx_r407.config.fieldId] && ctx_r407.property === field_r400.property && field_r400.editable && (ctx_r407.isNumber(field_r400) || ctx_r407.isDate(field_r400) || ctx_r407.isTime(field_r400) || ctx_r407.isString(field_r400)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r407.getMaxWidth(field_r400, item_r403, i_r402));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r407.validate(data_r401, field_r400))("cmacs-compact-table-overflow-cell", !ctx_r407.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r407.isNull(data_r401[field_r400.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r407.gridID, "-row-", i_r402, "-", field_r400.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r407.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r407.isEllipsisActive(ctx_r407.gridID + "-row-" + i_r402 + "-" + field_r400.property, field_r400) ? data_r401[field_r400.property] ? i0.ɵɵpipeBind2(3, 22, data_r401[field_r400.property], field_r400.timeFormat ? field_r400.timeFormat : "h:mm a") : field_r400.placeholder : null);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r401[field_r400.property] ? i0.ɵɵpipeBind2(5, 25, data_r401[field_r400.property], field_r400.timeFormat ? field_r400.timeFormat : "h:mm a") : field_r400.placeholder);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("cmacs-compact-table-calendar-icon", ctx_r407.inLineEdit && field_r400.editable)("cmacs-compact-table-calendar-icon-view", !ctx_r407.inLineEdit || !field_r400.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_4_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 137);
} if (rf & 2) {
    const field_r400 = i0.ɵɵnextContext(2).field;
    const ctx_r435 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-select-icon", ctx_r435.inLineEdit && field_r400.editable)("cmacs-compact-table-select-icon-view", !ctx_r435.inLineEdit || !field_r400.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r439 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 128);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r439); const ctx_r438 = i0.ɵɵnextContext(); const data_r401 = ctx_r438.data; const field_r400 = ctx_r438.field; const ctx_r437 = i0.ɵɵnextContext(); return ctx_r437.startEdit(data_r401[ctx_r437.config.fieldId], field_r400.property, $event, data_r401); });
    i0.ɵɵelementStart(2, "div", 135);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r439); const ctx_r441 = i0.ɵɵnextContext(); const i_r402 = ctx_r441.i; const field_r400 = ctx_r441.field; const ctx_r440 = i0.ɵɵnextContext(); return ctx_r440.onDataTapEllipsis(ctx_r440.gridID + "-row-" + i_r402 + "-" + field_r400.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_4_i_4_Template, 1, 4, "i", 136);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r442 = i0.ɵɵnextContext();
    const data_r401 = ctx_r442.data;
    const field_r400 = ctx_r442.field;
    const item_r403 = ctx_r442.item;
    const i_r402 = ctx_r442.i;
    const ctx_r408 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r408.editId === data_r401[ctx_r408.config.fieldId] && ctx_r408.property === field_r400.property && field_r400.editable && (ctx_r408.isString(field_r400) || ctx_r408.isDate(field_r400) || ctx_r408.isSelect(field_r400) || ctx_r408.isTime(field_r400)))("cmacs-compact-table-on-edit-no-padding", ctx_r408.editId === data_r401[ctx_r408.config.fieldId] && ctx_r408.property === field_r400.property && field_r400.editable && (ctx_r408.isNumber(field_r400) || ctx_r408.isDate(field_r400) || ctx_r408.isTime(field_r400) || ctx_r408.isString(field_r400)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r408.getMaxWidth(field_r400, item_r403, i_r402));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r408.validate(data_r401, field_r400))("cmacs-compact-table-overflow-cell", !ctx_r408.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r408.isNull(ctx_r408.getLabel(data_r401, field_r400)) || !ctx_r408.getLabel(data_r401, field_r400).length)("cmacs-compact-table-field-mode-status-low", field_r400.mode === "status" && ctx_r408.getClassStatus(data_r401, field_r400) === "low")("cmacs-compact-table-field-mode-status-medium", field_r400.mode === "status" && ctx_r408.getClassStatus(data_r401, field_r400) === "medium")("cmacs-compact-table-field-mode-status-high", field_r400.mode === "status" && ctx_r408.getClassStatus(data_r401, field_r400) === "high");
    i0.ɵɵattributeInterpolate3("id", "", ctx_r408.gridID, "-row-", i_r402, "-", field_r400.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r408.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r408.isEllipsisActive(ctx_r408.gridID + "-row-" + i_r402 + "-" + field_r400.property, field_r400) ? ctx_r408.getLabel(data_r401, field_r400) && ctx_r408.getLabel(data_r401, field_r400).length ? ctx_r408.getLabel(data_r401, field_r400) : field_r400.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r408.getLabel(data_r401, field_r400) && ctx_r408.getLabel(data_r401, field_r400).length ? ctx_r408.getLabel(data_r401, field_r400) : field_r400.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r400.mode !== "status");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r445 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 128);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r445); const ctx_r444 = i0.ɵɵnextContext(); const data_r401 = ctx_r444.data; const field_r400 = ctx_r444.field; const ctx_r443 = i0.ɵɵnextContext(); return ctx_r443.startEdit(data_r401[ctx_r443.config.fieldId], field_r400.property, $event, data_r401); });
    i0.ɵɵelementStart(2, "div", 138);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r445); const ctx_r447 = i0.ɵɵnextContext(); const i_r402 = ctx_r447.i; const field_r400 = ctx_r447.field; const ctx_r446 = i0.ɵɵnextContext(); return ctx_r446.onDataTapEllipsis(ctx_r446.gridID + "-row-" + i_r402 + "-" + field_r400.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 139);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r448 = i0.ɵɵnextContext();
    const data_r401 = ctx_r448.data;
    const field_r400 = ctx_r448.field;
    const item_r403 = ctx_r448.item;
    const i_r402 = ctx_r448.i;
    const ctx_r409 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r409.editId === data_r401[ctx_r409.config.fieldId] && ctx_r409.property === field_r400.property && field_r400.editable && (ctx_r409.isString(field_r400) || ctx_r409.isDate(field_r400) || ctx_r409.isSelect(field_r400) || ctx_r409.isTime(field_r400)))("cmacs-compact-table-on-edit-no-padding", ctx_r409.editId === data_r401[ctx_r409.config.fieldId] && ctx_r409.property === field_r400.property && field_r400.editable && (ctx_r409.isNumber(field_r400) || ctx_r409.isDate(field_r400) || ctx_r409.isTime(field_r400) || ctx_r409.isString(field_r400)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r409.getMaxWidth(field_r400, item_r403, i_r402));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r409.validate(data_r401, field_r400))("cmacs-compact-table-overflow-cell", !ctx_r409.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r409.isNull(data_r401[field_r400.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r409.gridID, "-row-", i_r402, "-", field_r400.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r409.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r409.isEllipsisActive(ctx_r409.gridID + "-row-" + i_r402 + "-" + field_r400.property, field_r400) ? data_r401[field_r400.property] !== undefined ? field_r400.useCommaMarker ? data_r401[field_r400.property].toString().replace(".", ",") : data_r401[field_r400.property] : field_r400.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r409.getInputNumberValue(data_r401, field_r400));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-input-number-icon", ctx_r409.inLineEdit && field_r400.editable)("cmacs-compact-table-input-number-icon-view", !ctx_r409.inLineEdit || !field_r400.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r453 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 141);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_6_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r453); const data_r401 = i0.ɵɵnextContext(2).data; const ctx_r451 = i0.ɵɵnextContext(); return ctx_r451.clickHyperlink(data_r401); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r454 = i0.ɵɵnextContext(2);
    const data_r401 = ctx_r454.data;
    const field_r400 = ctx_r454.field;
    i0.ɵɵclassProp("cmacs-compact-table-hyperlink", !data_r401.parent);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r401[field_r400.property], " ");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r455 = i0.ɵɵnextContext(2);
    const data_r401 = ctx_r455.data;
    const field_r400 = ctx_r455.field;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r401[field_r400.property], " ");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_ng_template_8_ng_container_6_div_1_Template, 2, 3, "div", 140);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_8_ng_container_6_div_2_Template, 2, 1, "div", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r401 = i0.ɵɵnextContext().data;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !data_r401.parent);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r401.parent);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 145);
} if (rf & 2) {
    const ctx_r460 = i0.ɵɵnextContext(2);
    const data_r401 = ctx_r460.data;
    const field_r400 = ctx_r460.field;
    const ctx_r457 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r457.validate(data_r401, field_r400));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 146);
    i0.ɵɵelement(1, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r461 = i0.ɵɵnextContext(2);
    const data_r401 = ctx_r461.data;
    const field_r400 = ctx_r461.field;
    const ctx_r458 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r458.validate(data_r401, field_r400));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 148);
} if (rf & 2) {
    const ctx_r462 = i0.ɵɵnextContext(2);
    const data_r401 = ctx_r462.data;
    const field_r400 = ctx_r462.field;
    const ctx_r459 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r459.validate(data_r401, field_r400));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r465 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 128);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_7_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r465); const ctx_r464 = i0.ɵɵnextContext(); const data_r401 = ctx_r464.data; const field_r400 = ctx_r464.field; const ctx_r463 = i0.ɵɵnextContext(); return ctx_r463.startEdit(data_r401[ctx_r463.config.fieldId], field_r400.property, $event, data_r401); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_8_ng_container_7_span_2_Template, 1, 2, "span", 142);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_8_ng_container_7_span_3_Template, 2, 2, "span", 143);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_7_i_4_Template, 1, 2, "i", 144);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r466 = i0.ɵɵnextContext();
    const data_r401 = ctx_r466.data;
    const field_r400 = ctx_r466.field;
    const ctx_r411 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r411.editId === data_r401[ctx_r411.config.fieldId] && ctx_r411.property === field_r400.property && field_r400.editable && (ctx_r411.isString(field_r400) || ctx_r411.isDate(field_r400) || ctx_r411.isSelect(field_r400) || ctx_r411.isTime(field_r400)))("cmacs-compact-table-on-edit-no-padding", ctx_r411.editId === data_r401[ctx_r411.config.fieldId] && ctx_r411.property === field_r400.property && field_r400.editable && (ctx_r411.isNumber(field_r400) || ctx_r411.isDate(field_r400) || ctx_r411.isTime(field_r400) || ctx_r411.isString(field_r400)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r401[field_r400.property] == false || data_r401[field_r400.property] == "false");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r401[field_r400.property] === undefined || data_r401[field_r400.property] === null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r401[field_r400.property] === true || data_r401[field_r400.property] === "true");
} }
const _c14 = function () { return { initialCountry: "us" }; };
function CmacsCompactTableComponent_ng_template_8_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r470 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 149);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_8_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r470); const ctx_r469 = i0.ɵɵnextContext(); const data_r401 = ctx_r469.data; const field_r400 = ctx_r469.field; const ctx_r468 = i0.ɵɵnextContext(); return ctx_r468.startEdit(data_r401[ctx_r468.config.fieldId], field_r400.property, $event, data_r401); });
    i0.ɵɵelementStart(2, "div", 138);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_8_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r470); const ctx_r472 = i0.ɵɵnextContext(); const i_r402 = ctx_r472.i; const field_r400 = ctx_r472.field; const ctx_r471 = i0.ɵɵnextContext(); return ctx_r471.onDataTapEllipsis(ctx_r471.gridID + "-row-" + i_r402 + "-" + field_r400.property); });
    i0.ɵɵelementStart(3, "cmacs-phone-number", 150, 127);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_8_Template_cmacs_phone_number_click_3_listener() { i0.ɵɵrestoreView(_r470); const ctx_r474 = i0.ɵɵnextContext(); const data_r401 = ctx_r474.data; const field_r400 = ctx_r474.field; const ctx_r473 = i0.ɵɵnextContext(); return ctx_r473.currentPhoneSelected(data_r401, field_r400); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r475 = i0.ɵɵnextContext();
    const data_r401 = ctx_r475.data;
    const field_r400 = ctx_r475.field;
    const i_r402 = ctx_r475.i;
    const ctx_r412 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r412.editId === data_r401[ctx_r412.config.fieldId] && ctx_r412.property === field_r400.property && field_r400.editable && (ctx_r412.isString(field_r400) || ctx_r412.isDate(field_r400) || ctx_r412.isSelect(field_r400) || ctx_r412.isTime(field_r400) || ctx_r412.isPhone(field_r400)))("cmacs-compact-table-on-edit-no-padding", ctx_r412.editId === data_r401[ctx_r412.config.fieldId] && ctx_r412.property === field_r400.property && field_r400.editable && (ctx_r412.isNumber(field_r400) || ctx_r412.isDate(field_r400) || ctx_r412.isTime(field_r400) || ctx_r412.isString(field_r400) || ctx_r412.isPhone(field_r400)));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r412.validate(data_r401, field_r400))("cmacs-compact-table-overflow-cell", !ctx_r412.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r412.isNull(data_r401[field_r400.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r412.gridID, "-row-", i_r402, "-", field_r400.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r412.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r412.isEllipsisActive(ctx_r412.gridID + "-row-" + i_r402 + "-" + field_r400.property, field_r400) ? data_r401[field_r400.property] !== undefined ? field_r400.useCommaMarker ? data_r401[field_r400.property].toString().replace(".", ",") : data_r401[field_r400.property] : field_r400.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("init", i0.ɵɵpureFunction0(17, _c14))("formControlCustom", ctx_r412.getPhoneFieldValue(data_r401, field_r400));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r478 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "cmacs-compact-table-attachment", 151);
    i0.ɵɵlistener("onChangeAttachments", function CmacsCompactTableComponent_ng_template_8_ng_container_9_Template_cmacs_compact_table_attachment_onChangeAttachments_1_listener($event) { i0.ɵɵrestoreView(_r478); const ctx_r477 = i0.ɵɵnextContext(); const i_r402 = ctx_r477.i; const field_r400 = ctx_r477.field; const ctx_r476 = i0.ɵɵnextContext(); return ctx_r476._onChangeAttachments($event, i_r402, field_r400.property); })("onclickChooseFile", function CmacsCompactTableComponent_ng_template_8_ng_container_9_Template_cmacs_compact_table_attachment_onclickChooseFile_1_listener() { i0.ɵɵrestoreView(_r478); const ctx_r480 = i0.ɵɵnextContext(); const i_r402 = ctx_r480.i; const field_r400 = ctx_r480.field; const ctx_r479 = i0.ɵɵnextContext(); return ctx_r479._onclickChooseFile(i_r402, field_r400.property); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r481 = i0.ɵɵnextContext();
    const data_r401 = ctx_r481.data;
    const field_r400 = ctx_r481.field;
    const ctx_r413 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("conf", ctx_r413.columnMenu.attachment)("ctaDropdownOption", data_r401[field_r400.property])("inLineEdit", ctx_r413.inLineEdit);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_10_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, null, 152);
    i0.ɵɵelementStart(2, "div", 153);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_8_ng_container_10_ng_container_3_Template, 1, 0, "ng-container", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r484 = i0.ɵɵnextContext();
    const data_r401 = ctx_r484.data;
    const field_r400 = ctx_r484.field;
    const ci_r404 = ctx_r484.ci;
    const i_r402 = ctx_r484.i;
    const ctx_r414 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r414.editId === data_r401[ctx_r414.config.fieldId] && ctx_r414.property === field_r400.property && field_r400.editable && (ctx_r414.isString(field_r400) || ctx_r414.isDate(field_r400) || ctx_r414.isSelect(field_r400) || ctx_r414.isTime(field_r400)))("cmacs-compact-table-on-edit-no-padding", ctx_r414.editId === data_r401[ctx_r414.config.fieldId] && ctx_r414.property === field_r400.property && field_r400.editable && (ctx_r414.isNumber(field_r400) || ctx_r414.isDate(field_r400) || ctx_r414.isTime(field_r400) || ctx_r414.isString(field_r400)));
    i0.ɵɵproperty("id", ctx_r414.gridID + "column" + ci_r404 + "row" + i_r402);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", data_r401[field_r400.property].ref)("ngTemplateOutletContext", data_r401[field_r400.property].context);
} }
function CmacsCompactTableComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_ng_template_8_ng_container_1_Template, 5, 19, "ng-container", 3);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_8_ng_container_2_Template, 5, 22, "ng-container", 3);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_8_ng_container_3_Template, 7, 28, "ng-container", 3);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_4_Template, 5, 25, "ng-container", 3);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_ng_template_8_ng_container_5_Template, 5, 22, "ng-container", 3);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_ng_template_8_ng_container_6_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_ng_template_8_ng_container_7_Template, 5, 7, "ng-container", 3);
    i0.ɵɵtemplate(8, CmacsCompactTableComponent_ng_template_8_ng_container_8_Template, 5, 18, "ng-container", 3);
    i0.ɵɵtemplate(9, CmacsCompactTableComponent_ng_template_8_ng_container_9_Template, 2, 3, "ng-container", 3);
    i0.ɵɵtemplate(10, CmacsCompactTableComponent_ng_template_8_ng_container_10_Template, 4, 7, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r400 = ctx.field;
    const data_r401 = ctx.data;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isString(field_r400));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isDate(field_r400));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isTime(field_r400));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isSelect(field_r400));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isNumber(field_r400));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isCeldTypeHyperlink(field_r400));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isBoolean(field_r400));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isPhone(field_r400));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.columnMenu && ctx_r7.isAttachment(field_r400));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.isCeldTypeTemplateRef(field_r400) && data_r401[field_r400.property]);
} }
const moment = moment_;
export class CmacsCompactTableComponent {
    /** end output variables */
    /** constructor */
    constructor(cdr, i18n, excelService, deviceDetector, datePipe, nzDropdownService, cookies, utilService) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.excelService = excelService;
        this.deviceDetector = deviceDetector;
        this.datePipe = datePipe;
        this.nzDropdownService = nzDropdownService;
        this.cookies = cookies;
        this.utilService = utilService;
        /** local variables */
        this.locale = {}; // tslint:disable-line:no-any
        this.headerBottomStyle = {};
        this.destroy$ = new Subject();
        this.selection = new SelectionModel(false, []);
        this._onresize$ = new Subject();
        this.onresizeobs = this._onresize$.asObservable();
        this._onsort$ = new Subject();
        this.onsortobs = this._onsort$.asObservable();
        this.selected = false;
        this.phoneLocation = '1';
        this.formPhoneControl = new FormControl('', [
            Validators.pattern(/^\s*(?:\+?(\d{1,3}))?([-. (](\d{3})[-. )])?((\d{3})[-. ](\d{2,4})(?:[-.x ](\d+))?)\s*$/),
            Validators.required,
            Validators.maxLength(45)
        ]);
        this.editionOpTriggered = false;
        this.defaultSortOrder = null;
        this.checkboxCache = [];
        this.isIndeterminate = false;
        this.allChecked = false;
        this.rowOnEdition = -1;
        this.nodeOnEdition = null;
        this.mapOfExpandedData = {};
        this.defaultTimeValue = new Date();
        this.lastIdxSelected = null;
        this.fieldID = null;
        this.selectedColumnId = -1;
        this.selectedMore = -1;
        this.isAdvancedConfiguration = false;
        this.order = 0;
        this.clicks = 0;
        this.tapCount = 0;
        this.addedOption = '';
        /** end local variables */
        /** input variables */
        this.size = 'default';
        this.pageSizeOptions = [10, 20, 30, 40, 50];
        this.virtualScroll = false;
        this.exclusiveSelect = false;
        this.logs = false;
        this.expandable = false;
        this.smartTable = false;
        this.draggable = false;
        this.virtualItemSize = 0;
        this.expandAll = false;
        this.addColumn = false;
        this.loadingDelay = 0;
        this.hasCookies = true;
        this.total = 0;
        this.widthConfig = [];
        this.pageIndex = 1;
        this.pageSize = 10;
        this.actionColumnWidth = '80px';
        this.wrapLines = false;
        // tslint:disable-next-line: no-input-rename
        this.data = [];
        this.use12Hours = true;
        this.configChange = new EventEmitter();
        this.gridID = null;
        this.paginationPosition = 'bottom';
        this.scroll = { x: null, y: null };
        this.frontPagination = true;
        this.templateMode = false;
        this.bordered = false;
        this.hideButtons = false;
        this.centerTable = false;
        this.showPagination = true;
        this.loading = false;
        this.showSizeChanger = false;
        this.hideOnSinglePage = false;
        this.showQuickJumper = false;
        this.simple = false;
        this.checkboxSelect = false;
        this.inLineEdit = false;
        this.dataTable = false;
        this.showRate = false;
        this.exportEvent = new EventEmitter();
        this.indentSize = 0;
        this.virtualMaxBufferPx = 200;
        /** end input variables */
        /** output variables */
        this.buttonClick = new EventEmitter();
        this.rateChange = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.ondlclickRow = new EventEmitter();
        this.onclickRow = new EventEmitter();
        this.onclickHyperlink = new EventEmitter();
        this.onedit = new EventEmitter();
        this.onRowExpandCollapse = new EventEmitter();
        this.ondrop = new EventEmitter();
        this.rateCount = 5;
        this.multiSelect = false;
        this.sortChange = new EventEmitter();
        this.filterChange = new EventEmitter();
        this.onrowdeleted = new EventEmitter();
        this.onrowadded = new EventEmitter();
        this.oncolumnadded = new EventEmitter();
        this.oneditcolumn = new EventEmitter();
        this.onresize = new EventEmitter();
        this.oncontextmenu = new EventEmitter();
        this.onDropdownRender = new EventEmitter();
        this.onChangeAttachments = new EventEmitter();
        this.onclickChooseFile = new EventEmitter();
        this.formatter = (value) => {
            if (value) {
                return accounting.formatNumber(value, { precision: 3, thousand: ' ', decimal: ',' });
            }
            return value;
        };
        this.parser = (value) => {
            if (value) {
                return accounting.unformat(value, ',');
            }
            return value;
        };
        this.defaultFormatter = (value) => {
            return value;
        };
        this.defaultParser = (value) => {
            return value;
        };
    }
    /** end view child variables */
    currentPhoneSelected(data, field) {
        this.formPhoneControl.setValue(data[field.property] && data[field.property].length ? data[field.property] : '');
    }
    getPhoneFieldValue(data, field) {
        const phoneControl = new FormControl(data[field.property] && data[field.property].length ? data[field.property] : '');
        return phoneControl;
    }
    onCountryChange($event) {
        this.phoneLocation = $event.dialCode;
        console.log(this.formPhoneControl.value);
    }
    hasPhoneNumberError(event, index, data = null, property = null, field = null) {
        if (this.formPhoneControl.value !== '') {
            const ind = this.formPhoneControl.value.indexOf('+');
            if (ind === -1) {
                this.formPhoneControl.setValue(`+${this.phoneLocation}` + this.formPhoneControl.value);
                this.phoneLocation = '1';
            }
            const data = this.data[index];
            data.cmacsEditedProp = property ? property : this.property;
            if (field.editTemplate === TemplateType.Phone) {
                data[field.property] = data[field.property] !== '' ? this.formPhoneControl.value : '';
                this.formPhoneControl.setValue('');
            }
            this.data[index] = data;
            this.onedit.emit(this.data[index]);
        }
    }
    oncontextmenuevt($event, item) {
        this.oncontextmenu.emit(item);
    }
    openColumnMenu(idx) {
        this.selectedColumnId = idx;
    }
    openColumnMore(idx) {
        this.selectedMore = idx;
    }
    closeColumnMenu() {
        this.selectedColumnId = -1;
    }
    closeColumnMore() {
        this.selectedMore = -1;
    }
    onFieldChanged(idx, field) {
        this.selectedColumnId = -1;
        this.selectedMore = -1;
        const value = { index: idx, column: field };
        this.oneditcolumn.emit(value);
    }
    onFieldTapEllipsis(id) {
        if (this.inLineEdit || this.deviceDetector.isDesktop()) {
            return;
        }
    }
    onDataTapEllipsis(id) {
        if (this.deviceDetector.isDesktop()) {
            return;
        }
    }
    getTooltipEllipsisTrigger() {
        return this.deviceDetector.isDesktop() ? 'hover' : 'click';
    }
    isEllipsisActive(id, field) {
        if (!field.showTooltip) {
            return;
        }
        const el = document.getElementById(id);
        if (!el) {
            return;
        }
        return (el.offsetWidth < el.scrollWidth);
    }
    isTooltipActive(data, field) {
        if (!field.showTooltip || field.width === undefined) {
            return;
        }
        let width = field.width;
        width = Number(width.replace('px', ''));
        const stringFieldValue = this.getStringFieldValue(data, field);
        if (stringFieldValue !== undefined) {
            return width < this.measureText(stringFieldValue, 12);
        }
        else {
            return false;
        }
    }
    measureText(str, fontSize) {
        const widths = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0.2796875, 0.2765625, 0.3546875, 0.5546875,
            0.5546875, 0.8890625, 0.665625, 0.190625, 0.3328125, 0.3328125, 0.3890625,
            0.5828125, 0.2765625, 0.3328125, 0.2765625, 0.3015625, 0.5546875,
            0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875,
            0.5546875, 0.5546875, 0.5546875, 0.2765625, 0.2765625, 0.584375,
            0.5828125, 0.584375, 0.5546875, 1.0140625, 0.665625, 0.665625, 0.721875,
            0.721875, 0.665625, 0.609375, 0.7765625, 0.721875, 0.2765625, 0.5,
            0.665625, 0.5546875, 0.8328125, 0.721875, 0.7765625, 0.665625, 0.7765625,
            0.721875, 0.665625, 0.609375, 0.721875, 0.665625, 0.94375, 0.665625,
            0.665625, 0.609375, 0.2765625, 0.3546875, 0.2765625, 0.4765625, 0.5546875,
            0.3328125, 0.5546875, 0.5546875, 0.5, 0.5546875, 0.5546875, 0.2765625,
            0.5546875, 0.5546875, 0.221875, 0.240625, 0.5, 0.221875, 0.8328125,
            0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.3328125, 0.5, 0.2765625,
            0.5546875, 0.5, 0.721875, 0.5, 0.5, 0.5, 0.3546875, 0.259375, 0.353125,
            0.5890625,
        ];
        const avg = 0.5279276315789471;
        return Math.round(str
            .split('')
            .map((c) => c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg)
            .reduce((cur, acc) => acc + cur) * fontSize);
    }
    getInputNumberValue(data, field) {
        if (!this.isNull(data[field.property])) {
            if (field.useCommaMarker) {
                return data[field.property].toString().replace('.', ',');
            }
            if (!this.isNull(field.formatter)) {
                return field.formatter(data[field.property]);
            }
            return data[field.property];
        }
        return field.placeholder;
    }
    getStringFieldValue(data, field) {
        return data[field.property] && data[field.property].length ? data[field.property] : field.placeholder;
    }
    onResize(event, col, field) {
        this._onresize$.next({ event, col, field });
    }
    onResizeEvt({ width }, col, field) {
        if (this.config && this.config.fields) {
            for (let i = 0; i < this.config.fields.length; i++) {
                const field = this.config.fields[i];
                if (field.property === col) {
                    const elWidth = field.width ? Number(field.width.replace(/[^\d.-]/g, '')) : 0;
                    if (this.scroll.x && i + 1 === this.config.fields.length - 1 && this.config.fields[i + 1] !== null && this.config.fields[i + 1] !== undefined) {
                        const elWidthNext = this.config.fields[i + 1].width ? Number(this.config.fields[i + 1].width.replace(/[^\d.-]/g, '')) : 0;
                        const delta = width - elWidth;
                        if (delta > 0 && delta < elWidthNext) {
                            if (this.config.fields[i + 1].minWidth !== null && this.config.fields[i + 1].minWidth !== undefined) {
                                if (Number(this.config.fields[i + 1].minWidth) < (elWidthNext - delta)) {
                                    this.config.fields[i + 1].width = `${elWidthNext - delta}px`;
                                }
                            }
                            else {
                                this.config.fields[i + 1].width = `${elWidthNext - delta}px`;
                            }
                        }
                        if (delta < 0) {
                            this.config.fields[i + 1].width = `${elWidthNext - delta}px`;
                        }
                    }
                    field.width = `${width}px`;
                    continue;
                }
            }
        }
        this.onresize.emit({ col: col, config: this.config });
        this.configChange.emit(this.config);
        if (this.gridID === null || this.gridID === undefined) {
            return;
        }
        if (this.hasCookies && this.getIndexCookie()) {
            this.cookies.set(this.gridID, JSON.stringify(this.config), 365);
        }
    }
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    }
    /*Context Menu */
    contextMenu($event, template, item = null) {
        this.oncontextmenuevt($event, item);
        this.dropdown = this.nzDropdownService.create($event, template);
    }
    validate(data, field) {
        let formControl;
        if (field.validators) {
            formControl = new FormControl(data[field.property], field.validators);
        }
        else {
            formControl = new FormControl(data[field.property]);
        }
        data.valid = data.valid ? data.valid : {};
        data.valid[field.property] = formControl.valid;
        return formControl.valid;
    }
    /**
     * will loop thru every field in the configuration and set the custom validators depending on the validation rules
     * if no validation rule is present this will be ignored
     */
    setCustomValidators() {
        if (this.config === undefined || this.config === null) {
            return;
        }
        for (let index = 0; index < this.config.fields.length; index++) {
            const field = this.config.fields[index];
            if (field.validationRule === undefined || field.validationRule === null || field.validationRule == '') {
                continue;
            }
            switch (field.validationRule) {
                case 'none': {
                    field.validators = []; // this will not apply any rule
                    break;
                }
                case 'is-not-empty': {
                    field.validators = [Validators.required];
                    break;
                }
                case 'after-date': {
                    field.validators = [afterDate(field.validationValues[0])];
                    break;
                }
                case 'before-date': {
                    field.validators = [beforeDate(field.validationValues[0])];
                    break;
                }
                case 'is-equal-to': {
                    field.validators = field.editTemplate === TemplateType.Date ? [isEqualToDate(field.validationValues[0])] :
                        [isEqualToNumber(field.validationValues[0])];
                    break;
                }
                case 'is-not-equal-to': {
                    field.validators = field.editTemplate === TemplateType.Date ? [isNotEqualToDate(field.validationValues[0])] :
                        [isNotEqualToNumber(field.validationValues[0])];
                    break;
                }
                case 'range': {
                    field.validators = field.editTemplate === TemplateType.Date ? [rangeDate(field.validationValues[0], field.validationValues[1])] :
                        [rangeNumber(field.validationValues[0], field.validationValues[1])];
                    break;
                }
                case 'greater-than': {
                    field.validators = [greaterThan(field.validationValues[0])];
                    break;
                }
                case 'less-than': {
                    field.validators = [lessThan(field.validationValues[0])];
                    break;
                }
                default: field.validators = [];
            }
        }
    }
    addRow(idx, $event = null) {
        this.onrowadded.emit(idx);
        this.editionOpTriggered = true;
        if ($event) {
            this.preventDefault($event);
        }
    }
    addcolumn(idx) {
        this.oncolumnadded.emit(++idx);
    }
    cmacsEditedInput(event) {
        if (event.toString() !== "" && !(event instanceof InputEvent))
            this.addedOption = event;
    }
    addOption(index, data = null, property = null, field = null) {
        this.onDropdownRender.emit(this.addedOption);
        data[field.property] = this.addedOption;
        this.endEditModeNgModel(index, data, property, field);
    }
    drop(event) {
        if (!this.draggable) {
            return;
        }
        moveItemInArray(this.data, event.previousIndex, event.currentIndex);
        this.data = [...this.data];
        this.ondrop.emit(event);
    }
    deleteRow(idx, $event = null) {
        const itemToRemove = this.data[idx];
        this.onrowdeleted.emit(itemToRemove);
        this.editionOpTriggered = true;
        if ($event) {
            this.preventDefault($event);
        }
    }
    startEdit(id, property, event, data) {
        if (this.inLineEdit) {
            if (this.selection.isSelected(data[this.fieldID]) || this.isRowSelected(data)) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (!this.isNull(data.notEditableFields)
                && data.notEditableFields.filter(x => x === property).length) {
                return;
            }
            if (this.editId !== null) {
                this.emitOnEditEvent();
            }
            this.editId = data[this.config.fieldId];
            this.property = property;
            this.cdr.detectChanges();
            this.focusSelect(this.inputElement);
            if (this.inputNumberComponent) {
                this.focusSelect(this.inputNumberComponent.inputElement);
            }
            if (this.dateTimePicker) {
                this.focusSelect(this.dateTimePicker.inputRef);
            }
        }
    }
    focusSelect(elem) {
        if (elem) {
            elem.nativeElement.focus();
            setTimeout(() => {
                elem.nativeElement.select();
            }, 100);
        }
    }
    sort($event, fieldProperty) {
        this._onsort$.next({ sortName: fieldProperty, sortValue: $event });
    }
    filter($event, fieldProperty) {
        this.filterChange.emit({ filterName: fieldProperty, filterValue: $event });
    }
    getHeaderMaxWidth(field) {
        if (field.showSort && field.showFilter) {
            return `calc(100% - 82px)`;
        }
        else if (field.showSort || field.showFilter) {
            return `calc(100% - 58px)`;
        }
        return this.addColumn ? `calc(100% - 15px)` : `100%`;
    }
    handleMouseDown(e) {
        const element = e.target;
        const elementColumnMore = document.getElementById('compactTableColumnMore');
        const elementColumnTooltip = document.getElementById('compactTableColumnTooltip');
        if (elementColumnMore && !this.childOf(element, elementColumnMore)) {
            this.closeColumnMore();
        }
        if (elementColumnTooltip && !this.childOf(element, elementColumnTooltip)) {
            if (this.tooltipComponent !== null && this.tooltipComponent !== undefined) {
                this.tooltipComponent.updateDisplay();
            }
            this.closeColumnMenu();
        }
        if (this.editId && this.property) {
            if ((this.inputElement && this.inputElement.nativeElement !== e.target) ||
                (this.inputNumberElement && !this.childOf(element, this.inputNumberElement.nativeElement)) ||
                (this.datePickerElement && !this.childOf(element, this.datePickerElement.nativeElement)) ||
                (this.dateTimePickerElement && !this.childOf(element, this.dateTimePickerElement.nativeElement)) ||
                (this.selectElement && !this.childOf(element, this.selectElement.nativeElement))) {
                if (this.inputNumberComponent) {
                    this.inputNumberComponent.blur();
                }
                if (this.dateTimePicker) {
                    this.dateTimePicker.setCurrentValueAndClose();
                }
                this.editId = null;
                this.emitOnEditEvent();
                this.property = null;
            }
        }
    }
    getCustomPadding(item, i) {
        if (!i) {
            if (!item.level) {
                return !!item.children ? 6 : 28;
            }
            else {
                return item.level * this.indentSize;
            }
        }
        return 6;
    }
    childOf(node, ancestor) {
        let child = node;
        while (child !== null) {
            if (child === ancestor) {
                return true;
            }
            if (child.classList && child.classList.length > 0 && child.className && typeof child.className === 'string'
                && child.className.indexOf('cdk-overlay-pane') >= 0) {
                for (let i = 0; i < child.childNodes.length; ++i) {
                    const node = child.childNodes[i];
                    if (node.nodeName === 'CMACS-MODAL') {
                        return false;
                    }
                }
                return true;
            }
            ;
            child = child.parentNode;
        }
        return false;
    }
    endEditMode($event, index, data = null) {
        setTimeout(() => {
            if ($event.key === ('Enter' || 'enter')) {
                this.editId = null;
                this.rowOnEdition = -1;
                if (this.expandable) {
                    data.cmacsEditedProp = this.property;
                    this.onedit.emit(data);
                    return;
                }
                this.data[index].cmacsEditedProp = this.property;
                this.onedit.emit(this.data[index]);
                this.property = null;
            }
            else {
                if (this.expandable) {
                    this.nodeOnEdition = data;
                    return;
                }
                this.rowOnEdition = index;
            }
        }, 300);
    }
    endEditModeNgModel(index, data = null, property = null, field = null) {
        if (this.expandable) {
            data.cmacsEditedProp = property ? property : this.property;
            if (field && field.mode === 'tagsSingleSelect') {
                data[field.property] = data[field.property].length ? data[field.property][0] : null;
            }
            this.onedit.emit(data);
        }
        else {
            const data = this.data[index];
            data.cmacsEditedProp = property ? property : this.property;
            if (field && field.mode === 'tagsSingleSelect') {
                data[field.property] = data[field.property].length ? data[field.property][0] : null;
            }
            this.onedit.emit(this.data[index]);
        }
        if (this.isBoolean(field)) {
            if (this.expandable) {
                if (this.checkboxSelect && !this.getNode(data[this.fieldID]).selected) {
                    this.onCheckboxTreeChange(true, data, this.mapOfExpandedData[data[this.fieldID]]);
                }
                if (!this.checkboxSelect && !this.selection.isSelected(data[this.fieldID])) {
                    this.selectTreeSingle(data);
                }
            }
            else {
                if (!this.isRowSelected(data)) {
                    this.selectRow(new MouseEvent('click'), data);
                }
            }
            this.cdr.detectChanges();
        }
        this.editId = null;
        this.property = null;
        this.rowOnEdition = -1;
        this.nodeOnEdition = null;
    }
    ngModelChange(index, data = null) {
        if (this.expandable) {
            this.nodeOnEdition = data;
            return;
        }
        this.rowOnEdition = index;
    }
    getIndex(id) {
        let i = -1;
        i = this.checkboxCache.findIndex(item => item.data[this.config.fieldId] === id);
        return i;
    }
    updateCheckboxCache() {
        const checkboxTempCache = [];
        for (let i = 0; i < this.data.length; i++) {
            checkboxTempCache.push({
                selected: this.editionOpTriggered ? false : this.data[i].selected,
                data: Object.assign({}, this.data[i]),
                order: this.data[i].selected ? this.order++ : -1
            });
        }
        this.checkboxCache = [...checkboxTempCache];
        if (this.editionOpTriggered) {
            this.editionOpTriggered = false;
        }
    }
    updateCheckboxCacheTreeData() {
        this.convertExpandTreeToList(this.data, this.checkboxCache);
    }
    clickHyperlink(data) {
        this.onclickHyperlink.emit(data);
    }
    convertExpandTreeToList(item, plainList) {
        if (isArray(item)) {
            item.forEach(elem => {
                const elementInCache = plainList.findIndex(el => el.data[this.config.fieldId] === elem[this.config.fieldId]);
                if (elementInCache < 0) {
                    plainList.push({
                        selected: false,
                        order: -1,
                        data: Object.assign({}, elem)
                    });
                }
                if (elem.children && elem.children.length > 0) {
                    this.convertExpandTreeToList(elem.children, plainList);
                }
            });
        }
        else {
            const elementInCache = plainList.findIndex(el => el.data[this.config.fieldId] === item[this.config.fieldId]);
            if (elementInCache < 0) {
                plainList.push({
                    selected: false,
                    order: -1,
                    data: Object.assign({}, item)
                });
            }
        }
    }
    onButtonClick(field) {
        this.buttonClick.emit(field);
    }
    onCheckboxChange($event, data) {
        this.checkboxCache[this.getIndex(data[this.config.fieldId])].order = $event ? this.order++ : -1;
        this.refreshCheckboxState();
    }
    refreshCheckboxState(oninit = false) {
        const dataSelected = this.checkCheckboxState();
        if (!oninit) {
            this.selectionChange.emit(dataSelected.map(item => item.data));
        }
    }
    checkCheckboxState() {
        const dataSelected = this.checkboxCache.filter(item => item.selected === true).sort((a, b) => a.order - b.order);
        this.selected = this.allChecked = (dataSelected.length > 0 && (dataSelected.length === this.checkboxCache.length));
        this.isIndeterminate = dataSelected.length > 0 && !this.allChecked;
        return dataSelected;
    }
    // tslint:disable-next-line: no-shadowed-variable
    onRateChange(count, data) {
        data[this.config.fieldRate] = count;
        this.rateChange.emit(data);
    }
    onRateClick(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    getFields() {
        if (this.config && this.config.fields) {
            return this.config.fields.filter(item => item.hidden === undefined || !item.hidden);
        }
        return [];
    }
    onCheckboxAllChange(status) {
        this.checkboxCache.forEach(element => {
            element.selected = status;
            element.order = -1;
        });
        this.isIndeterminate = false;
        if (!this.exclusiveSelect) {
            this.selectionChange.emit((status) ? this.data : []);
        }
        else {
            const dataSelected = this.checkboxCache.sort((a, b) => a.order - b.order);
            this.selectionChange.emit((status) ? dataSelected.map(e => e.data) : []);
        }
    }
    getLabel(data, field) {
        let result = '';
        if (field.editTemplate === TemplateType.Select && field.select !== undefined) {
            // tslint:disable-next-line: no-shadowed-variable
            const item = field.select.selectData.find(item => item !== undefined && item[field.select.value] === data[field.property]);
            result = (item !== undefined) ? item[field.select.label] : '';
            if (field.mode === 'tagsSingleSelect' && result === '') {
                result = data[field.property];
            }
        }
        return result;
    }
    isSelect(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Select;
    }
    isString(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.String;
    }
    isReadOnly(field) {
        return field !== undefined && field.readonly !== undefined && field.readonly;
    }
    isNumber(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Number;
    }
    isNull(value) {
        return value === null || value === undefined;
    }
    isBoolean(field) {
        return field !== null && field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Boolean;
    }
    isObject(value) {
        return value !== undefined && typeof (value) === 'object';
    }
    isDate(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Date;
    }
    isTime(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Time;
    }
    isCeldTypeDefault(field) {
        return field !== undefined && field.celdType === CeldType.Default;
    }
    isCeldTypeButton(field) {
        return field !== undefined && field.celdType === CeldType.Button;
    }
    isCeldTypeTag(field) {
        return field !== undefined && field.celdType === CeldType.Tag;
    }
    isCeldTypeTemplateRef(field) {
        return field !== undefined && field.celdType === CeldType.TemplateRef;
    }
    isCeldTypeHyperlink(field) {
        return field !== undefined && field.celdType === CeldType.Hyperlink && field.editTemplate === TemplateType.String;
    }
    isPhone(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Phone;
    }
    isAttachment(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Attachment;
    }
    isUndefined(value) {
        return value === undefined;
    }
    isRowSelected(data) {
        if (this.config) {
            const dataSelectd = this.checkboxCache.filter(item => item.selected).map(item => item.data[this.config.fieldId]);
            return dataSelectd.indexOf(data[this.config.fieldId]) !== -1;
        }
        return false;
    }
    _onChangeAttachments(event, index, field) {
        this.data[index][field] = event;
        this.onChangeAttachments.emit(this.data[index]);
    }
    _onclickChooseFile(index, field) {
        this.onclickChooseFile.emit({ row: this.data[index], indexCol: field });
    }
    ngAfterViewInit() {
        if (this.hasCookies && this.getIndexCookie() && this.cookies.check(this.gridID)) {
            const savedConfigStr = this.cookies.get(this.gridID);
            // reset expiration date
            this.cookies.set(this.gridID, savedConfigStr, 365);
            // parse cookie value to typescript const
            const savedConfig = JSON.parse(this.cookies.get(this.gridID));
            if (typeof savedConfig === 'object') {
                this.config = savedConfig;
                this.configChange.emit(this.config);
            }
        }
        this.cdr.detectChanges();
        this.disableSelectEventOnExpand();
    }
    disableSelectEventOnExpand() {
        const expandButton = document.getElementsByClassName('ant-table-row-expand-icon');
        if (!this.isNull(expandButton)) {
            for (const b of Array.from(expandButton)) {
                b.addEventListener('click', ($event) => {
                    this.preventDefault($event);
                });
            }
        }
        this.cdr.detectChanges();
    }
    getIndexCookie() {
        return true;
        /*let allowIndexPageCookie = false;
        let consentCookie = this.cookies.get('OptanonConsent');
        if (consentCookie != "") {
          let groupIndex = consentCookie.indexOf('groups=');
          let groups = consentCookie.substring(groupIndex); //will return somethinglike groups=C0002:0,C0001:1
          let functionalGroupIndex = groups.indexOf('C0009:');
          if (functionalGroupIndex != -1) {
            const categoryValue = groups.substring(functionalGroupIndex + 6, functionalGroupIndex + 7);
            if (Number(categoryValue) === 1) {
              allowIndexPageCookie = true;
            }
          }
        }
        return allowIndexPageCookie;*/
    }
    setFieldsDefault() {
        if (this.config && this.config.fields) {
            this.config.fields.forEach(field => {
                field.editable = field.editable === null || field.editable === undefined ? true : field.editable;
            });
        }
    }
    ngOnInit() {
        if (!this.gridID) {
            this.gridID = this.utilService.uuidv4();
        }
        this.setCustomValidators();
        this.setFieldsDefault();
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        });
        if (this.checkboxSelect && !this.expandable) {
            this.updateCheckboxCache();
            this.refreshCheckboxState(true);
        }
        if (this.checkboxSelect && this.expandable && this.config) {
            this.updateCheckboxCacheTreeData();
        }
        this.checkCheckboxState();
        if (this.dataTable && this.data.length > 1) {
            while (this.data.length > 1) {
                this.data.pop();
            }
            this.showPagination = false;
        }
        this.exportEvent.pipe(takeUntil(this.destroy$)).subscribe((config) => {
            switch (config.exportType) {
                case ExportType.Pdf:
                    this.exportToPdf(config);
                    break;
                case ExportType.Xslx:
                    this.exportToExcel(config.fileName);
                    break;
                case ExportType.Png:
                    this.exportToPng(config.fileName);
                    break;
                case ExportType.PdfTree:
                    this.exportTreePdf(config.fileName);
                    break;
                case ExportType.XslxTree:
                    this.exportTreeExcel(config.fileName);
                    break;
            }
        });
        /* Convert tree to list if expandable */
        if (this.expandable && this.config) {
            this.fieldID = this.config.fieldId;
            const coerceData = this.data;
            coerceData.forEach(item => {
                this.mapOfExpandedData[item[this.fieldID]] = this.convertTreeToList(item);
            });
        }
        this.utilService.exportCompleted.subscribe(() => {
            this.loading = false;
            this.cdr.markForCheck();
        });
        this.excelService.exportCompleted.subscribe(() => {
            this.loading = false;
            this.cdr.markForCheck();
        });
        this.checkSortEvent();
        this.checkResizeEvent();
        // DROPDOWN MENU ADVANCED CONFIGURATION
        this.isAdvancedConfiguration = false;
    }
    checkSortEvent() {
        this.onsortobs.pipe(takeUntil(this._onresize$), delay(300), repeat(), takeUntil(this.destroy$)).subscribe((obj) => {
            const f = this.config.fields.find(el => el.property === obj.sortName);
            f.sortOrder = obj.sortValue;
            this.sortChange.emit({ sortName: obj.sortName, sortValue: obj.sortValue });
        });
    }
    checkResizeEvent() {
        this.onresizeobs.pipe(takeUntil(this.destroy$)).subscribe((obj) => {
            this.config = JSON.parse(JSON.stringify(this.config));
            this.onResizeEvt(obj.event, obj.col, obj.field);
        });
    }
    ngOnChanges(changes) {
        if (changes.data && this.config) {
            if (this.expandable) {
                this.mapOfExpandedData = {};
                if (!this.data.length) {
                    this.checkboxCache = [];
                }
                this.updateCheckboxCacheTreeData();
                this.fieldID = this.config.fieldId;
                const coerceData = this.data;
                coerceData.forEach(item => {
                    if (!this.mapOfExpandedData[item[this.fieldID]]) {
                        this.mapOfExpandedData[item[this.fieldID]] = this.convertTreeToList(item);
                    }
                });
                this.refreshCheckboxState();
            }
            else {
                this.updateCheckboxCache();
            }
            this.checkCheckboxState();
        }
        if (changes.config) {
            this.setFieldsDefault();
            this.setCustomValidators();
        }
        this.cdr.detectChanges();
        this.disableSelectEventOnExpand();
    }
    /* Expandable Rows */
    exportTreePdf(fileName) {
        const doc = new jsPDF();
        const columns = [];
        const rows = [];
        this.config.fields.filter(item => item.celdType === CeldType.Default).forEach(field => {
            columns.push(field.display);
        });
        this.config.fields.filter(item => item.celdType === CeldType.TemplateRef).forEach(field => {
            columns.push(field.display);
        });
        this.exportTreeToPdfRec(rows, this.data, 0);
        /*doc.autoTable({
          theme: 'striped',
          margin: { top: 5 },
          body: rows,
          columns
        });*/
        const filenameFormatted = moment().format('DD.MM.YYYY.HH.mm.ss') + '_' + fileName + '.pdf';
        doc.save(filenameFormatted);
    }
    exportTreeToPdfRec(rows, data, offSetMargin = 0) {
        data.forEach(item => {
            const itemToExport = [];
            const coercedItem = item;
            let parentStyles = { cellPadding: [2, 2, 2, 2] };
            // tslint:disable-next-line: no-shadowed-variable
            this.config.fields.filter(item => item.celdType === CeldType.Default ||
                item.celdType === CeldType.TemplateRef).forEach((field, idx) => {
                parentStyles = { cellPadding: [2, 2, 2, 2] };
                if (!idx) {
                    parentStyles.cellPadding = [2, 2, 2, 2 + offSetMargin];
                }
                if (coercedItem.children && coercedItem.children.length) {
                    parentStyles.fillColor = [153, 204, 255];
                }
                if (item.celdType === CeldType.TemplateRef) {
                    itemToExport.push({ content: item[field.property].context.exportValue, styles: parentStyles });
                }
                else {
                    switch (field.editTemplate) {
                        case TemplateType.Select:
                            const selectItem = field.select.selectData.find(option => option[field.select.value] === item[field.property]);
                            if (selectItem !== undefined) {
                                itemToExport.push({ content: selectItem[field.select.label], styles: parentStyles });
                            }
                            break;
                        case TemplateType.Date:
                            itemToExport.push({ content: this.datePipe.transform(item[field.property], 'MMMM dd yyyy'), styles: parentStyles });
                            break;
                        case TemplateType.Time:
                            itemToExport.push({ content: this.datePipe.transform(item[field.property], 'h:mm a'), styles: parentStyles });
                            break;
                        default:
                            itemToExport.push({ content: item[field.property], styles: parentStyles });
                            break;
                    }
                }
            });
            rows.push(itemToExport);
            if (coercedItem.children && coercedItem.children.length) {
                this.exportTreeToPdfRec(rows, coercedItem.children, 5 + offSetMargin);
            }
        });
    }
    convertTreeToList(root) {
        const stack = [];
        const array = [];
        const hashMap = {};
        stack.push(Object.assign(Object.assign({}, root), { level: 0, expand: this.expandAll ? this.expandAll : root.expand }));
        while (stack.length !== 0) {
            const node = stack.pop();
            this.visitNode(node, hashMap, array);
            if (node.children) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push(Object.assign(Object.assign({}, node.children[i]), { level: node.level + 1, expand: this.expandAll ? this.expandAll : node.children[i].expand, parent: node }));
                }
            }
        }
        return array;
    }
    visitNode(node, hashMap, array) {
        if (!hashMap[node[this.fieldID]]) {
            hashMap[node[this.fieldID]] = true;
            array.push(node);
        }
    }
    ExpandCollapse(array, data, $event) {
        if ($event === false) {
            this.collapseChildren(array, data, $event);
        }
        this.onRowExpandCollapse.emit({ data, $event });
    }
    collapseChildren(array, data, $event) {
        if ($event === false) {
            if (data.children) {
                data.children.forEach(d => {
                    const target = array.find(a => a[this.fieldID] === d[this.fieldID]);
                    target.expand = false;
                    this.collapseChildren(array, target, false);
                });
            }
            else {
                return;
            }
        }
    }
    onCheckboxTreeChange($event, item, subtree = null) {
        if (!this.exclusiveSelect) {
            this.updateTreeCheckboxes($event, item);
            const coercedElem = subtree.find(e => e[this.fieldID] === item[this.fieldID]);
            if (coercedElem.parent) {
                this.refreshSubTreeCheckboxes(coercedElem.parent);
            }
        }
        this.refreshCheckboxState();
    }
    updateTreeCheckboxes($event, array) {
        array.selected = $event;
        const node = this.getNode(array[this.fieldID]);
        node.selected = $event;
        node.order = $event ? this.order++ : -1;
        if (array.children) {
            array.children.forEach((d) => {
                this.updateTreeCheckboxes($event, d);
            });
        }
    }
    refreshSubTreeCheckboxes(subtree) {
        if (subtree.children) {
            let checked = 0;
            let indeterminate = 0;
            for (const child of subtree.children) {
                const node = this.getNode(child[this.fieldID]);
                if (node.selected === true) {
                    checked++;
                }
                if (node.selected === -1) {
                    indeterminate++;
                }
            }
            const node = this.getNode(subtree[this.fieldID]);
            node.selected = false;
            if (indeterminate || (checked < subtree.children.length && checked)) {
                node.selected = -1;
            }
            else if (checked === subtree.children.length) {
                node.selected = true;
            }
        }
        if (subtree.parent) {
            this.refreshSubTreeCheckboxes(subtree.parent);
        }
    }
    getNode(key) {
        const test = this.checkboxCache.filter(n => n.data[this.fieldID] === key);
        return test ? test[0] : { selected: false, data: null };
    }
    exportToPng(fileName) {
        this.loading = true;
        this.utilService.exportTable('png', fileName, this.gridID);
    }
    exportToExcel(fileName) {
        this.loading = true;
        const dataToExport = [];
        this.data.forEach(item => {
            const itemToExport = {};
            // tslint:disable-next-line: no-shadowed-variable
            this.config.fields.filter(item => item.celdType === CeldType.Default || item.celdType === CeldType.TemplateRef).forEach(field => {
                if (!field.hidden) {
                    if (field.editTemplate === TemplateType.Select) {
                        const selectItem = field.select.selectData.find(option => option[field.select.value] === item[field.property]);
                        if (selectItem !== undefined) {
                            itemToExport[field.display] = selectItem[field.select.label];
                        }
                    }
                    else if (field.celdType === CeldType.TemplateRef) {
                        itemToExport[field.display] = item[field.property].context.exportValue;
                    }
                    else {
                        itemToExport[field.display] = item[field.property];
                    }
                }
            });
            dataToExport.push(itemToExport);
        });
        const filenameFormatted = moment().format('DD.MM.YYYY.HH.mm.ss') + '_' + fileName;
        this.excelService.exportAsExcelFile(dataToExport, filenameFormatted);
    }
    /* Expandable Rows */
    exportTreeExcel(fileName) {
        const dataToExport = [];
        this.exportTreeExcelRec(this.data, dataToExport);
        const filenameFormatted = moment().format('DD.MM.YYYY.HH.mm.ss') + '_' + fileName;
        this.excelService.exportAsExcelFile(dataToExport, filenameFormatted);
    }
    exportTreeExcelRec(data, dataToExport) {
        data.forEach(item => {
            const itemToExport = {};
            // tslint:disable-next-line: no-shadowed-variable
            this.config.fields.filter(item => item.celdType === CeldType.Default || item.celdType === CeldType.TemplateRef).forEach(field => {
                if (!field.hidden) {
                    if (field.celdType === CeldType.TemplateRef) {
                        itemToExport[field.display] = item[field.property].context.exportValue;
                    }
                    else {
                        if (field.editTemplate === TemplateType.Select) {
                            const selectItem = field.select.selectData.find(option => option[field.select.value] === item[field.property]);
                            if (selectItem !== undefined) {
                                itemToExport[field.display] = selectItem[field.select.label];
                            }
                        }
                        else {
                            itemToExport[field.display] = item[field.property];
                        }
                    }
                }
            });
            dataToExport.push(itemToExport);
            const coercedItem = item;
            if (coercedItem.children && coercedItem.children.length) {
                this.exportTreeExcelRec(coercedItem.children, dataToExport);
            }
        });
    }
    exportToPdf(config) {
        this.loading = true;
        this.cdr.detectChanges();
        if (!config.useVersion2) {
            this.utilService.exportTable('pdf', config.fileName, this.gridID, config.exportCompanyName, config.exportUserName, config.exportTitle, config.exportCompanyLogoUrl, config.exportTableCustomWidth, config.exportTableCustomHeight);
        }
        else {
            const exportConfig = {
                checkboxSelect: this.checkboxSelect,
                selectedItems: this.checkboxSelect ?
                    this.checkboxCache.filter(item => item.selected).map(item => item.data[this.config.fieldId]) : [],
                fileName: config.fileName,
                datePipe: this.datePipe,
                data: this.data,
                elemID: this.gridID,
                config: this.config,
                columnStyles: config.columnStyles,
                exportCompanyName: config.exportCompanyName,
                exportUserName: config.exportUserName,
                exportTitle: config.exportTitle,
                exportCompanyLogoUrl: config.exportCompanyLogoUrl ? config.exportCompanyLogoUrl : 'assets/PToB_logo.png',
            };
            this.utilService.exportTablev2(exportConfig);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    clickRow(event, data) {
        this.clicks++;
        setTimeout(() => {
            event.preventDefault();
            event.stopImmediatePropagation();
            if (this.clicks === 1) {
                this.selectRow(event, data);
            }
            if (this.clicks > 1) {
                this.dblClickRow(data);
            }
            this.clicks = 0;
        }, 300);
    }
    selectRow(event, data) {
        this.onclickRow.emit(data);
        /* Get index of selection */
        const index = this.checkboxCache.findIndex(item => item.data[this.config.fieldId] === data[this.config.fieldId]);
        if (!this.checkboxSelect) {
            if (event && (toBoolean(event.ctrlKey) || toBoolean(event.shiftKey))) {
                /* Shift Selection */
                if (toBoolean(event.shiftKey)) {
                    this.selectMultiple(index);
                }
            }
            else {
                this.removeSelection(data);
            }
            /* Select element */
            if (index !== -1) {
                this.checkboxCache[index].selected = event && toBoolean(event.shiftKey) ? true : !this.checkboxCache[index].selected;
                /* Save last index selected */
                this.lastIdxSelected = this.checkboxCache[index].selected ? index : null;
            }
            const selectedItems = this.checkboxCache.filter(item => item.selected);
            this.checkboxCache[index].order = this.checkboxCache[index].selected ? this.order++ : -1;
            this.selectionChange.emit(selectedItems.sort((a, b) => a.order - b.order).map(item => item.data));
        }
        this.cdr.detectChanges();
    }
    removeSelection(data) {
        this.checkboxCache.filter(item => item.selected && item.data[this.config.fieldId] !== data[this.config.fieldId])
            .forEach(elem => { elem.selected = false; elem.order = -1; });
    }
    selectMultiple(currentIdx) {
        if (this.lastIdxSelected !== null) {
            while (currentIdx !== this.lastIdxSelected) {
                this.checkboxCache[this.lastIdxSelected].selected = true;
                this.checkboxCache[this.lastIdxSelected].order = this.order++;
                this.lastIdxSelected = currentIdx > this.lastIdxSelected ? this.lastIdxSelected + 1 : this.lastIdxSelected - 1;
            }
        }
        else {
            this.checkboxCache[currentIdx].selected = true;
            this.checkboxCache[currentIdx].order = this.order++;
        }
        this.lastIdxSelected = currentIdx;
    }
    dblClickRow(data) {
        this.ondlclickRow.emit(data);
    }
    tapHandler($event, data) {
        this.tapCount += 1;
        setTimeout(() => {
            if (this.tapCount === 1) {
                $event.preventDefault();
                this.clickRow(null, data);
            }
            this.tapCount = 0;
        }, 600);
        if (this.tapCount > 1) {
            $event.preventDefault();
            this.dblClickRow(data);
        }
    }
    clickBooleanCell(data, id, field, index, $event) {
        if ($event) {
            this.preventDefault($event);
        }
        if (this.inLineEdit && field.editable) {
            if (data[field.property] === null || data[field.property] === undefined) {
                data[field.property] = true;
            }
            else {
                data[field.property] = (data[field.property] === false || data[field.property] === 'false');
            }
            this.endEditModeNgModel(index, data, field.property);
        }
    }
    showViewModeTpl(field, item) {
        if (!this.isNull(item.hiddenFields)
            && item.hiddenFields.filter(x => x === field.property).length) {
            return false;
        }
        return this.config && ((this.isBoolean(field) && !this.inLineEdit) ||
            (!this.isBoolean(field) && (this.editId !== item[this.config.fieldId] ||
                this.property !== field.property || field.editable === false)));
    }
    showViewModeTplTree(field, data) {
        if (!this.isNull(data.hiddenFields)
            && data.hiddenFields.filter(x => x === field.property).length) {
            return false;
        }
        return this.config && ((this.isBoolean(field) && !this.inLineEdit) ||
            (!this.isBoolean(field) && (this.editId !== data[this.config.fieldId] ||
                this.property !== field.property || field.editable === false)));
    }
    showEditTpl(item, field) {
        if (!this.isNull(item.hiddenFields)
            && item.hiddenFields.filter(x => x === field.property).length) {
            return false;
        }
        return this.config && ((this.isBoolean(field) && this.inLineEdit &&
            (field.editable || field.editable === undefined)) ||
            (!this.isBoolean(field) && this.editId === item[this.config.fieldId] &&
                this.property === field.property && (field.editable || field.editable === undefined)));
    }
    showEditTplTree(data, field) {
        if (!this.isNull(data.hiddenFields)
            && data.hiddenFields.filter(x => x === field.property).length) {
            return false;
        }
        return this.config && ((this.isBoolean(field) && this.inLineEdit && (field.editable || field.editable === undefined)) ||
            (!this.isBoolean(field) && this.editId === data[this.config.fieldId] &&
                this.property === field.property && (field.editable || field.editable === undefined)));
    }
    emitOnEditEvent() {
        if (this.rowOnEdition >= 0) {
            this.data[this.rowOnEdition].cmacsEditedProp = this.property;
            this.onedit.emit(this.data[this.rowOnEdition]);
            this.rowOnEdition = -1;
            return;
        }
        if (this.nodeOnEdition) {
            this.nodeOnEdition.cmacsEditedProp = this.property;
            this.onedit.emit(this.nodeOnEdition);
            this.nodeOnEdition = null;
        }
    }
    getClassMap(field) {
        return {
            [`cmacs-compact-table-logs-header-th`]: this.logs,
            [`cmacs-compact-table-logs-header-th-font`]: this.logs,
            [`${field.ngClass}`]: field.ngClass && field.ngClass.length
        };
    }
    getCustomClass(field) {
        return {
            [`cmacs-compact-table-cell-${field.property}`]: true
        };
    }
    getMaxWidth(field, item, i) {
        if (this.expandable) {
            if (item.children && !i) {
                return this.inLineEdit ? `calc(100% - 17px)` : `calc(100% - ${this.getMaxWidthFieldViewMode(field, i)})`;
            }
            else {
                return this.inLineEdit ? `calc(100% - 17px)` : `calc(100% - ${this.getMaxWidthFieldViewMode(field, i)})`;
            }
        }
        return this.inLineEdit ? `calc(100% - 17px)` : `calc(100% - ${this.getMaxWidthFieldViewMode(field, i)})`;
    }
    getMaxWidthFieldViewMode(field, i) {
        if (field.editTemplate === TemplateType.Select ||
            field.editTemplate === TemplateType.Date ||
            field.editTemplate === TemplateType.Time ||
            field.editTemplate === TemplateType.Number) {
            return `18px`;
        }
        return '0px';
    }
    getStickyWidth(position) {
        if (!this.scroll.x) {
            return null;
        }
        let width = 0;
        if (position === 'smartTable') {
            return width + 'px';
        }
        if (position === 'draggable') {
            width = this.smartTable ? 40 : 0;
            return width + 'px';
        }
        if (position === 'checkboxSelect') {
            if (this.smartTable) {
                width += 40;
            }
            if (this.draggable) {
                width += 40;
            }
            return width + 'px';
        }
    }
    getStickyWidthRight(position) {
        if (!this.scroll.x) {
            return null;
        }
        let width = 0;
        if (position === 'smartTable') {
            return width + 'px';
        }
        if (this.extra) {
            if (this.smartTable) {
                width += 40;
            }
            if (position === 'extra') {
                return width + 'px';
            }
        }
    }
    getTableComponent() {
        return this.nzTableComponent;
    }
    transformDate(date) {
        const m = moment(date);
        if (m.isValid()) {
            const locale = this.i18n.getLocale().locale;
            m.locale(locale);
            return m.format(locale === 'de' ? 'DD.MM.YYYY' : locale === 'ja' ? 'YYYY年M月D日' : 'MM/DD/YYYY');
        }
        return '';
    }
    selectTreeSingle(item) {
        if (!this.checkboxSelect) {
            this.selection.toggle(item[this.fieldID]);
            if (this.selection.isSelected(item[this.fieldID])) {
                this.selectionChange.emit([item]);
            }
            else {
                this.selectionChange.emit([]);
            }
        }
    }
}
CmacsCompactTableComponent.ɵfac = function CmacsCompactTableComponent_Factory(t) { return new (t || CmacsCompactTableComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i2.ExcelService), i0.ɵɵdirectiveInject(i3.DeviceDetectorService), i0.ɵɵdirectiveInject(i4.DatePipe), i0.ɵɵdirectiveInject(i5.CmacsContextMenuService), i0.ɵɵdirectiveInject(i6.CookieService), i0.ɵɵdirectiveInject(i7.UtilService)); };
CmacsCompactTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableComponent, selectors: [["cmacs-compact-table"]], viewQuery: function CmacsCompactTableComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
        i0.ɵɵviewQuery(_c1, 1);
        i0.ɵɵviewQuery(_c2, 1, ElementRef);
        i0.ɵɵviewQuery(_c3, 1, ElementRef);
        i0.ɵɵviewQuery(_c3, 1, CmacsInputNumberComponent);
        i0.ɵɵviewQuery(_c4, 1, ElementRef);
        i0.ɵɵviewQuery(_c5, 1, ElementRef);
        i0.ɵɵviewQuery(_c6, 1, ElementRef);
        i0.ɵɵviewQuery(_c7, 1, ElementRef);
        i0.ɵɵviewQuery(CmacsDateTimePickerComponent, 1);
        i0.ɵɵviewQuery(CmacsCompactTableColumnTooltipComponent, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzItemRender = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzTableComponent = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputNumberElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputNumberComponent = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datePickerElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dateTimePickerElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.boolElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dateTimePicker = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tooltipComponent = _t.first);
    } }, hostVars: 2, hostBindings: function CmacsCompactTableComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mousedown", function CmacsCompactTableComponent_mousedown_HostBindingHandler($event) { return ctx.handleMouseDown($event); }, false, i0.ɵɵresolveDocument);
    } if (rf & 2) {
        i0.ɵɵclassProp("cmacs-compact-table-logs", ctx.logs);
    } }, inputs: { size: "size", showTotal: "showTotal", pageSizeOptions: "pageSizeOptions", virtualScroll: "virtualScroll", exclusiveSelect: "exclusiveSelect", logs: "logs", expandable: "expandable", smartTable: "smartTable", draggable: "draggable", virtualItemSize: "virtualItemSize", expandAll: "expandAll", addColumn: "addColumn", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", hasCookies: "hasCookies", total: "total", title: "title", footer: "footer", noResult: "noResult", widthConfig: "widthConfig", pageIndex: "pageIndex", pageSize: "pageSize", actionColumnWidth: "actionColumnWidth", wrapLines: "wrapLines", dropdownAddOptionTemplateRef: "dropdownAddOptionTemplateRef", data: "data", config: "config", use12Hours: "use12Hours", fieldId: "fieldId", gridID: "gridID", paginationPosition: "paginationPosition", scroll: "scroll", frontPagination: "frontPagination", templateMode: "templateMode", bordered: "bordered", hideButtons: "hideButtons", centerTable: "centerTable", showPagination: "showPagination", loading: "loading", showSizeChanger: "showSizeChanger", hideOnSinglePage: "hideOnSinglePage", showQuickJumper: "showQuickJumper", simple: "simple", checkboxSelect: "checkboxSelect", inLineEdit: "inLineEdit", dataTable: "dataTable", showRate: "showRate", exportEvent: "exportEvent", columnMenu: "columnMenu", extra: "extra", contextmenu: "contextmenu", indentSize: "indentSize", virtualMaxBufferPx: "virtualMaxBufferPx", rateCount: "rateCount", multiSelect: "multiSelect" }, outputs: { configChange: "configChange", buttonClick: "buttonClick", rateChange: "rateChange", selectionChange: "selectionChange", ondlclickRow: "ondlclickRow", onclickRow: "onclickRow", onclickHyperlink: "onclickHyperlink", onedit: "onedit", onRowExpandCollapse: "onRowExpandCollapse", ondrop: "ondrop", sortChange: "sortChange", filterChange: "filterChange", onrowdeleted: "onrowdeleted", onrowadded: "onrowadded", oncolumnadded: "oncolumnadded", oneditcolumn: "oneditcolumn", onresize: "onresize", oncontextmenu: "oncontextmenu", onDropdownRender: "onDropdownRender", onChangeAttachments: "onChangeAttachments", onclickChooseFile: "onclickChooseFile" }, exportAs: ["cmacsCompactTable"], features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 36, consts: [[3, "id"], [1, "cmacs-compact-table", 3, "nzData", "nzShowTotal", "nzPageSizeOptions", "nzVirtualItemSize", "nzLoadingDelay", "nzVirtualMaxBufferPx", "nzLoadingIndicator", "nzTotal", "nzTitle", "nzFooter", "nzNoResult", "nzWidthConfig", "nzPageIndex", "nzPageSize", "nzPaginationPosition", "nzScroll", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], ["gridComponent", ""], [4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListDropped", 4, "ngIf"], ["editTpl", ""], ["viewModeTpl", ""], ["nzWidth", "40px", "class", "cmacs-compact-table-smart-table-hot-spot-row-add cmacs-compact-table-smart-action-header", 3, "cmacs-compact-table-logs-header-th", "minWidth", "maxWidth", "nzLeft", 4, "ngIf"], ["nzWidth", "40px", 3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], ["nzWidth", "30px", "nzLeft", "0px", 3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzWidth", "maxWidth", "minWidth", "nzRight", 4, "ngIf"], ["nzWidth", "40px", "class", "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "minWidth", "maxWidth", "nzRight", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], [3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], ["nzWidth", "40px", 1, "cmacs-compact-table-smart-table-hot-spot-row-add", "cmacs-compact-table-smart-action-header", 3, "nzLeft"], ["class", "cmacs-compact-table-smart-table-hot-spot-row-add-icon iconUILarge-New", 3, "cmacs-compact-table-smart-add-row-icon-visible", "click", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-row-add-icon", "iconUILarge-New", 3, "click"], ["nzWidth", "40px", 3, "nzLeft"], ["nzWidth", "30px", "nzLeft", "0px", 3, "nzLeft"], ["cmacs-checkbox", "", 3, "ngModel", "indeterminate", "ngModelChange", "checkedChange"], [4, "ngIf", "ngIfElse"], ["thWithFilters", ""], ["nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzShowSort", "nzShowFilter", "nzFilters", "nzFilterMultiple", "nzDisabled", "nzMinWidth", "nzMaxWidth", "ngClass", "nzSortOrder", "nzWidth", "nzLeft", "nzRight", "nzFilterChange", "nzResizeEnd", "nzSortOrderChange"], [3, "id", 4, "ngIf"], ["nzDirection", "right", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-col-add-icon-container"], ["class", "cmacs-compact-table-smart-table-hot-spot-col-add-icon iconUILarge-New", 3, "click", 4, "ngIf"], ["cmacs-tooltip", "", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap", "click"], [3, "field", "items", "onFieldChanged", 4, "ngIf"], ["class", "iconUILarge-More-Veritcal_Icon cmacs-compact-table-column-more", "style", "font-size: 15px;", 3, "cmacs-compact-table-column-more-selected", "click", 4, "ngIf"], [3, "field", "items", "labelSave", "onFieldChanged", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-col-add-icon", "iconUILarge-New", 3, "click"], [3, "field", "items", "onFieldChanged"], [1, "iconUILarge-More-Veritcal_Icon", "cmacs-compact-table-column-more", 2, "font-size", "15px", 3, "click"], [3, "field", "items", "labelSave", "onFieldChanged"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nzDirection", "right"], [1, "cmacs-compact-table-resize-trigger"], ["nzCustomFilter", "", "nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzShowSort", "nzDisabled", "ngClass", "nzSortOrder", "nzWidth", "nzMinWidth", "nzMaxWidth", "nzLeft", "nzRight", "nzResizeEnd", "nzSortOrderChange"], ["nzTrigger", "click", "nzPlacement", "bottomRight", "nzTableFilter", "", 3, "nzClickHide"], ["dropdown", ""], ["nz-icon", "", "nzType", "search", "nz-dropdown", "", 1, "ant-table-filter-icon"], ["cmacs-tooltip", "", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], [3, "nzWidth", "nzRight"], [1, "cmacs-compact-table-extra"], [4, "nzStringTemplateOutlet"], ["nzWidth", "40px", 1, "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "nzRight"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["defaultTpl", ""], [3, "id", "cmacs-compact-table-expandable-row", "cmacs-compact-table-row-active", "cmacs-compact-table-header-logs", "ant-table-selected-row", "click", "touchstart", "contextmenu", "dblclick", 4, "ngIf"], [3, "id", "click", "touchstart", "contextmenu", "dblclick"], ["style", "padding: 7px 10px", 3, "nzLeft", "minWidth", "maxWidth", "width", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], [3, "ngClass", "cmacs-editable-column", "cmacs-compact-table-on-edit-expandable", "cmacs-compact-table-logs-header-th-font", "cmacs-compact-table-expandable-td", "paddingLeft", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "minWidth", "nzExpandChange", 4, "ngFor", "ngForOf"], ["class", "cmacs-compact-table-rating", "style", "padding: 7px 10px", 3, "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "cmacs-compact-table-logs-header-th-font", "nzRight", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-align-td", 3, "cmacs-compact-table-logs-td", 4, "ngIf"], [2, "padding", "7px 10px", 3, "nzLeft"], [3, "ngClass", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "nzExpandChange"], [3, "display", "cmacs-compact-table-overflow-cell-container-logs", "width", 4, "ngIf"], [3, "display", "width", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cmacs-compact-table-rating", 2, "padding", "7px 10px"], [3, "ngModel", "nzCount", "nzDisabled", "ngModelChange", "click"], [2, "padding", "7px 10px", 3, "nzRight"], [1, "cmacs-compact-table-align-td", 2, "padding", "7px 10px"], ["cdkDrag", "", "class", "cmacs-no-selection", 3, "cdkDragDisabled", "id", "cmacs-compact-table-row-active", "ant-table-selected-row", "cmacs-compact-table-editable-row", "cmacs-compact-table-smart-table-row", "click", "touchstart", "contextmenu", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "cmacs-no-selection", 3, "cdkDragDisabled", "id", "click", "touchstart", "contextmenu"], ["contextMenuTemplate", "cmacsDropdownMenu"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-add", 3, "maxWidth", "minWidth", "nzLeft", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-drag-col cmacs-compact-table-fst-td", 3, "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "nzLeft", "cmacs-compact-table-fst-td", 4, "ngIf"], [3, "ngClass", "cmacs-editable-column", "cmacs-compact-table-fst-td", "nzLeft", "nzRight", "minWidth", 4, "ngFor", "ngForOf"], ["style", "padding: 7px 10px", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "nzRight", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "nzRight", "maxWidth", "minWidth", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-row-add", 2, "padding", "7px 10px", 3, "nzLeft"], ["class", "cmacs-compact-table-smart-table-hot-spot-row-add-icon iconUILarge-New", 3, "click", 4, "ngIf"], [1, "cmacs-compact-table-drag-col", "cmacs-compact-table-fst-td", 2, "padding", "7px 10px", 3, "nzLeft"], ["cdkDragHandle", "", 1, "iconUILarge-Move", "cmacs-compact-table-drag-handler"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange"], [3, "ngClass", "nzLeft", "nzRight"], ["style", "max-width: 98%", 4, "ngIf"], [2, "max-width", "98%"], [2, "padding", "7px 10px"], [3, "ngModel", "nzCount", "ngModelChange", "click"], [1, "cmacs-compact-table-smart-table-hot-spot-row-delete", 2, "padding", "7px 10px", 3, "nzRight"], ["class", "cmacs-compact-table-smart-table-hot-spot-row-delete-icon iconUISmall-Close", 3, "click", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-row-delete-icon", "iconUISmall-Close", 3, "click"], ["nz-virtual-scroll", ""], ["defaultTplVirtualScroll", ""], [3, "id", "cmacs-compact-table-row-active", "cmacs-compact-table-expandable-row", "cmacs-compact-table-header-logs", "touchstart", "contextmenu", "dblclick", 4, "ngIf"], [3, "id", "touchstart", "contextmenu", "dblclick"], [3, "cmacs-editable-column", "cmacs-compact-table-on-edit-expandable", "cmacs-compact-table-logs-header-th-font", "cmacs-compact-table-expandable-td", "paddingLeft", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "minWidth", "nzExpandChange", 4, "ngFor", "ngForOf"], [3, "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "nzExpandChange"], ["contextMenuTemplate", ""], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-add", 3, "maxWidth", "minWidth", "cmacs-compact-table-logs-td", "nzLeft", 4, "ngIf"], [3, "cmacs-editable-column", "cmacs-compact-table-fst-td", "nzLeft", "nzRight", "minWidth", 4, "ngFor", "ngForOf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "nzRight", "maxWidth", "minWidth", "cmacs-compact-table-logs-td", 4, "ngIf"], [3, "nzLeft", "nzRight"], ["class", "cmacs-compact-table-input", "type", "text", "cmacs-input", "", 3, "cmacs-compact-table-edit-mode-invalid", "placeholder", "ngModel", "click", "dblclick", "ngModelChange", "keyup", 4, "ngIf"], ["class", "cmacs-compact-table-date-edit", 3, "allowClear", "cmacs-compact-table-edit-mode-invalid", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["class", "cmacs-compact-table-datetime-picker", "hideSeconds", "", 3, "use12Hours", "cmacs-compact-table-edit-mode-invalid", "format", "defaultOpenValue", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["class", "cmacs-compact-table-select-cell", "showSearch", "", 3, "dropdownRender", "cmacsEditable", "cmacs-compact-table-field-mode-status", "cmacs-compact-table-field-mode-status-low-edit", "cmacs-compact-table-field-mode-status-medium-edit", "cmacs-compact-table-field-mode-status-high-edit", "cmacs-compact-table-edit-mode-invalid", "placeHolder", "mode", "showCmacsSearch", "ngModel", "click", "dblclick", "ngModelChange", "cmacsEditedInput", "input", "keydown.enter", 4, "ngIf"], ["render", ""], ["class", "cmacs-compact-table-input-number-edit", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "cmacsStep", "min", "max", "formatter", "parser", "ngModelChange", "click", "dblclick", "keyup", 4, "ngIf"], ["class", "cmacs-compact-table-input-number-edit", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "formatter", "parser", "cmacsStep", "min", "max", "ngModelChange", "click", "dblclick", "keyup", 4, "ngIf"], ["cmacs-checkbox", "", "class", "cmacs-compact-tabe-editable-checkbox", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "phone-number", 3, "init", "formControlCustom", "click", "hasError", "countryChange", 4, "ngIf"], ["type", "text", "cmacs-input", "", 1, "cmacs-compact-table-input", 3, "placeholder", "ngModel", "click", "dblclick", "ngModelChange", "keyup"], ["fieldTypeInput", ""], [1, "cmacs-compact-table-date-edit", 3, "allowClear", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDatePicker", ""], ["hideSeconds", "", 1, "cmacs-compact-table-datetime-picker", 3, "use12Hours", "format", "defaultOpenValue", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDateTimePicker", ""], ["showSearch", "", 1, "cmacs-compact-table-select-cell", 3, "dropdownRender", "cmacsEditable", "placeHolder", "mode", "showCmacsSearch", "ngModel", "click", "dblclick", "ngModelChange", "cmacsEditedInput", "input", "keydown.enter"], ["fieldTypeSelect", ""], [3, "label", "value", "divider", "disabled", 4, "ngFor", "ngForOf"], [3, "label", "value", "divider", "disabled"], ["cmacs-button", "", "role", "button", "aria-label", "add item", 3, "click", 4, "ngIf"], ["cmacs-button", "", "role", "button", "aria-label", "add item", 3, "click"], [1, "cmacs-compact-table-input-number-edit", 3, "ngModel", "cmacsStep", "min", "max", "formatter", "parser", "ngModelChange", "click", "dblclick", "keyup"], ["fieldTypeInputNumber", ""], [1, "cmacs-compact-table-input-number-edit", 3, "ngModel", "formatter", "parser", "cmacsStep", "min", "max", "ngModelChange", "click", "dblclick", "keyup"], ["cmacs-checkbox", "", 1, "cmacs-compact-tabe-editable-checkbox", 3, "ngModel", "ngModelChange"], ["fieldTypeBool", ""], [1, "phone-number", 3, "init", "formControlCustom", "click", "hasError", "countryChange"], ["fieldTypePhone", ""], [2, "width", "98%", "max-width", "98%", "padding", "7px 10px", 3, "click"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], ["class", "iconUISmall-Edit", 3, "cmacs-compact-table-edit-icon", "cmacs-compact-table-edit-icon-view", 4, "ngIf"], [1, "iconUISmall-Edit"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-date", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], [1, "iconUILarge-Calendar"], [1, "iconUILarge-Time"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-select", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], ["class", "iconArrowLarge-Chevron-Down", 3, "cmacs-compact-table-select-icon", "cmacs-compact-table-select-icon-view", 4, "ngIf"], [1, "iconArrowLarge-Chevron-Down"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-input-number", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], [1, "iconArrowLarge-Solid-UpDown"], [3, "cmacs-compact-table-hyperlink", "click", 4, "ngIf"], [3, "click"], ["class", "cmacs-compact-table-boolean-false-icon cmacs-compact-table-boolean-icon", 3, "cmacs-compact-table-invalid", 4, "ngIf"], ["class", "cmacs-compact-table-boolean-indeterminate-icon cmacs-compact-table-boolean-icon", 3, "cmacs-compact-table-invalid", 4, "ngIf"], ["class", "iconUILarge-Select-All cmacs-compact-table-boolean-icon-true", 3, "cmacs-compact-table-invalid", 4, "ngIf"], [1, "cmacs-compact-table-boolean-false-icon", "cmacs-compact-table-boolean-icon"], [1, "cmacs-compact-table-boolean-indeterminate-icon", "cmacs-compact-table-boolean-icon"], [1, "cmacs-compact-table-boolean-indeterminate-icon-inner"], [1, "iconUILarge-Select-All", "cmacs-compact-table-boolean-icon-true"], [2, "width", "100%", "max-width", "100%", 3, "click"], [1, "phone-number-view-mode", 3, "init", "formControlCustom", "click"], [3, "conf", "ctaDropdownOption", "inLineEdit", "onChangeAttachments", "onclickChooseFile"], ["templateRefCeld", ""], [2, "width", "98%", "max-width", "98%", "padding", "7px 10px", 3, "id"]], template: function CmacsCompactTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "nz-table", 1, 2);
        i0.ɵɵtemplate(3, CmacsCompactTableComponent_thead_3_Template, 10, 10, "thead", 3);
        i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_4_Template, 2, 1, "tbody", 4);
        i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_5_Template, 2, 0, "tbody", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, CmacsCompactTableComponent_ng_template_6_Template, 10, 8, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(8, CmacsCompactTableComponent_ng_template_8_Template, 11, 10, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵpropertyInterpolate("id", ctx.gridID);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("cmacs-compact-table-expandable", ctx.expandable)("cmacs-compact-table-scrollable-x", ctx.scroll.x)("cmacs-compact-table-scrollable-y", ctx.scroll.y)("cmacs-compact-table-empty-table", !ctx.data.length);
        i0.ɵɵproperty("nzData", ctx.data)("nzShowTotal", ctx.showTotal)("nzPageSizeOptions", ctx.pageSizeOptions)("nzVirtualItemSize", ctx.virtualItemSize)("nzLoadingDelay", ctx.loadingDelay)("nzVirtualMaxBufferPx", ctx.virtualMaxBufferPx)("nzLoadingIndicator", ctx.loadingIndicator)("nzTotal", ctx.total)("nzTitle", ctx.title)("nzFooter", ctx.footer)("nzNoResult", ctx.noResult)("nzWidthConfig", ctx.widthConfig)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPaginationPosition", ctx.paginationPosition)("nzScroll", ctx.scroll)("nzFrontPagination", ctx.frontPagination)("nzTemplateMode", ctx.templateMode)("nzShowPagination", ctx.showPagination)("nzLoading", ctx.loading)("nzShowSizeChanger", ctx.showSizeChanger)("nzHideOnSinglePage", ctx.hideOnSinglePage)("nzShowQuickJumper", ctx.showQuickJumper)("nzSimple", ctx.simple);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.dataTable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.virtualScroll);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.virtualScroll);
    } }, directives: [i8.NzTableComponent, i4.NgIf, i8.NzTheadComponent, i8.NzTrDirective, i4.NgForOf, i8.NzTableCellDirective, i8.NzThMeasureDirective, i8.NzCellFixedDirective, i9.CmacsCheckboxComponent, i10.NgControlStatus, i10.NgModel, i8.NzThAddOnComponent, i11.NzResizableDirective, i4.NgClass, i12.CmacsTooltipDirective, i13.CmacsCompactTableColumnTooltipComponent, i14.CmacsCompactTableColumnMoreComponent, i4.NgTemplateOutlet, i11.NzResizeHandleComponent, i15.ɵNzTransitionPatchDirective, i16.NzIconDirective, i17.NzDropDownDirective, i18.NzStringTemplateOutletDirective, i8.NzTbodyComponent, i19.CdkDropList, i8.NzTdAddOnComponent, i20.NzRateComponent, i19.CdkDrag, i21.CmacsDropdownMenuComponent, i19.CdkDragHandle, i8.NzTableVirtualScrollDirective, i22.CmacsInputDirective, i10.DefaultValueAccessor, i23.CmacsDatePickerComponent, i24.CmacsDateTimePickerComponent, i25.CmacsSelectComponent, i26.CmacsOptionComponent, i27.NzDividerComponent, i28.CmacsButtonComponent, i29.CmacsInputNumberComponent, i30.CmacsPhoneNumberComponent, i31.CmacsCompactTableAttachmentComponent], pipes: [i4.DatePipe], styles: [".cmacs-context-menu-compact-table li{padding:8px 16px!important;border-top:1px solid #dee0e5;height:unset!important;line-height:unset!important;margin-bottom:0!important;font-family:Roboto-Regular;margin-top:0!important;font-size:12px!important;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.33!important;letter-spacing:normal;color:#656c79!important;overflow:visible!important}  .compact-table-more-submenu-ul-wrapper{left:25px!important;top:-9px!important}  .cmacs-context-menu-compact-table li:first-child{border-top:none!important}  .cmacs-context-menu-compact-table .ant-menu-submenu-arrow.ant-menu-submenu-arrow-cmacs{margin-right:0;right:-20px}  .cmacs-context-menu-compact-table li.ant-menu-submenu{padding-right:25px!important;border-bottom:none!important;border-right:none!important;border-left:none!important}  .cmacs-context-menu-compact-table li.ant-menu-submenu>.ant-menu-submenu-title{padding:0!important;height:unset!important;line-height:unset!important;margin-bottom:0!important;font-family:Roboto-Regular;margin-top:0!important;font-size:12px!important;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.33!important;letter-spacing:normal;color:#656c79!important;overflow:visible!important}  .cmacs-context-menu-compact-table li.ant-menu-submenu:hover,   .cmacs-context-menu-compact-table li:hover{background-color:#f6f7fb!important;color:#656c79!important}  .cmacs-context-menu-compact-table li.ant-menu-submenu:hover>.ant-menu-submenu-title,   .cmacs-context-menu-compact-table li.ant-menu-submenu:hover>.ant-menu-submenu-title span{color:#656c79!important;background-color:transparent!important}  .cmacs-context-menu-compact-table .ant-menu-submenu-title:hover .ant-menu-submenu-arrow-cmacs:before{background-color:rgba(0,0,0,.85)!important}  .cmacs-context-menu-compact-table li i{font-size:14px;margin-right:10px;color:rgba(0,0,0,.85)!important}.cmacs-compact-table-field-valid-placeholder[_ngcontent-%COMP%]{color:#bec4cd}.cmacs-compact-table-boolean-icon[_ngcontent-%COMP%]{width:14px;height:14px;position:relative;top:-1px}.cmacs-compact-table-boolean-icon-true[_ngcontent-%COMP%]{font-size:16px;position:relative;top:1px}.cmacs-compact-table-hyperlink[_ngcontent-%COMP%]:hover{color:#2a7cff;cursor:pointer}.cmacs-compact-tabe-editable-checkbox[_ngcontent-%COMP%]{padding:2px 10px}  .cmacs-compact-tabe-editable-checkbox .ant-checkbox-inner:after{top:50%;left:23%;width:4.71px;height:8px}  .cmacs-compact-tabe-editable-checkbox .ant-checkbox-inner{width:16px;height:16px}.cmacs-compact-table-resize-trigger[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#bfbfbf;position:absolute;right:0;opacity:0}  .cmacs-compact-table th:hover .cmacs-compact-table-resize-trigger{opacity:1}  .cmacs-compact-table .nz-resizable-preview{border-top:none!important;border-left:none!important;height:100%;border:solid #2a7cff;border-width:0 1px 0 0;max-height:100%;padding:0;margin:0}  .cmacs-compact-table .nz-resizable .ant-table-filter-trigger-container{right:10px;display:inline-block}  .ant-table-filter-trigger-container-open,   .ant-table-filter-trigger-container:hover,   .ant-table-thead th.ant-table-column-has-sorters:hover .ant-table-filter-trigger-container:hover{background:transparent}  .cmacs-compact-table .ant-table-filter-trigger-container .ant-table-filter-trigger{color:#656c79}  .cmacs-compact-table .ant-table-filter-trigger-container-open .ant-table-filter-trigger,   .cmacs-compact-table .ant-table-filter-trigger-container:hover .ant-table-filter-trigger,   .cmacs-compact-table .ant-table-thead th.ant-table-column-has-sorters:hover .ant-table-filter-trigger-container:hover .ant-table-filter-trigger{color:#2a7cff}  .cmacs-compact-table .ant-table-cell.ant-table-cell-fix-left,   .cmacs-compact-table .ant-table-cell.ant-table-cell-fix-right{z-index:10}  .cmacs-compact-table .nz-resizable.ant-table-cell.ant-table-cell-fix-left.ant-table-cell-fix-left-last .nz-resizable-handle-right{right:0!important}  .cmacs-compact-table .ant-table-filter-column{margin:0}  .cmacs-compact-table .ant-table-filter-column-title{padding:0}  .cmacs-compact-table .nz-resizable-handle-right{right:0}  .cmacs-compact-table-edit-mode-invalid,   .cmacs-compact-table-edit-mode-invalid .ant-select-selection,   .cmacs-compact-table-edit-mode-invalid:focus,   .cmacs-compact-table-edit-mode-invalid:focus .ant-select-selection,   .cmacs-compact-table-edit-mode-invalid:hover,   .cmacs-compact-table-edit-mode-invalid:hover .ant-select-selection,   .cmacs-compact-table-invalid.cmacs-compact-table-boolean-indeterminate-icon{border-color:#f6503c!important}.cmacs-compact-table-datetime-picker.ant-picker-focused[_ngcontent-%COMP%]:not(.cmacs-time-picker-opened),   .cmacs-compact-table .ant-picker:not(.ant-picker-disabled):not(.cmacs-time-picker-opened):not(.ant-picker-focused):hover,   .cmacs-compact-table .ant-picker:not(.ant-picker-focused):not(.cmacs-time-picker-opened){border-color:#2a7cff!important}.cmacs-compact-table-datetime-picker[_ngcontent-%COMP%]{padding:8px 11px;width:100%}  .cmacs-compact-table .ant-table-placeholder .ant-table-cell,   .cmacs-compact-table .ant-table-tbody>tr.ant-table-placeholder:hover{box-shadow:none!important;border-bottom:none!important}  .cmacs-compact-table tr.ant-table-placeholder .ant-table-expanded-row-fixed{margin:0!important;padding:0!important}  .cmacs-compact-table .ant-table-tbody>tr.ant-table-placeholder:hover>td{box-shadow:none!important}  .cmacs-compact-table .ant-table-thead>tr>th:not(.cmacs-compact-table-logs-header-th).ant-table-column-has-sorters:hover{background-color:#fff!important}  .cmacs-compact-table .ant-table-thead>tr>th.cmacs-compact-table-logs-header-th.ant-table-column-has-sorters:hover{background-color:#f6f7fb!important}  .cmacs-compact-table .ant-table-tbody>tr>td.cmacs-compact-table-align-td{border-bottom:none!important;box-shadow:none!important;background-color:#f6f7fb!important}  .cmacs-compact-table-overflow-cell-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5em}.cmacs-compact-table-column-more[_ngcontent-%COMP%]{margin-top:-18px;opacity:0;position:absolute;cursor:pointer;left:calc(100% - 49px/2 - .5px);height:16px;width:16px;display:flex;flex-direction:row;justify-content:center;align-items:center}.cmacs-compact-table-column-more-selected[_ngcontent-%COMP%], .cmacs-compact-table-column-more[_ngcontent-%COMP%]:hover, th[_ngcontent-%COMP%]:hover   .cmacs-compact-table-column-more[_ngcontent-%COMP%]{opacity:1}.cmacs-compact-table-column-tooltip[_ngcontent-%COMP%]{cursor:pointer;border-bottom:2px dotted transparent}.cmacs-compact-table-column-tooltip[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:2px dotted #656c79}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column{vertical-align:middle}  .cmacs-compact-table-smart-action-header i{position:relative!important;top:0!important}  .cmacs-compact-table .ant-table-column-sorter-inner{margin-left:0;margin-right:0}  .cmacs-compact-table .ant-table-column-sorter{width:12px;display:none!important;right:0;position:absolute}  .cmacs-compact-table th:hover .ant-table-column-sorter{display:table-cell!important;right:10px;position:absolute}  .cmacs-compact-table .ant-table-column-sorters,   .cmacs-compact-table .ant-table-header-column{width:100%;padding:0}  .cmacs-compact-table .ant-table-column-sorters span:not(.ant-table-column-sorter){width:100%}  .cmacs-compact-table-rating{min-width:105px}  .cmacs-compact-table-invalid,   .cmacs-compact-table-invalid+i{color:#f6503c!important;opacity:1!important}  .cmacs-compact-table-invalid.cmacs-compact-table-boolean-indeterminate-icon .cmacs-compact-table-boolean-indeterminate-icon-inner{background-color:#f6503c}  .cmacs-compact-table .ant-table-thead{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;color:#656c79}  .cmacs-compact-table .ant-table-thead>tr>th{padding:8px 10px}  .cmacs-compact-table-drag-handler{color:#bec4cd;font-size:20px;padding:0 0 0 8px;margin:0;vertical-align:middle}  .cmacs-compact-table-drag-placeholder{border-bottom:1px solid #2a7cff;color:#2a7cff;text-align:left;min-width:100%}  .cmacs-compact-table-drag-preview{color:#2a7cff;opacity:.5;text-align:left}  .cmacs-compact-table-drag-handler:hover{cursor:pointer;color:#2a7cff}  .cmacs-compact-table-drag-col{padding:0!important;margin:0!important}  .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-add,   .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-delete{background:#fff;border-bottom-color:transparent;border-top-color:transparent}  .cmacs-compact-table .ant-table-row-indent+.ant-table-row-expand-icon{margin-top:8.5px;margin-right:8px}  .cmacs-compact-table .ant-table-header{background:transparent}  .cmacs-compact-table-balance-padding{padding:6px!important}  .cmacs-compact-table .ant-table-tbody>tr>td{padding:0;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae;transition:none}  .cmacs-compact-table .ant-table-tbody>tr:not(.ant-table-selected-row)>td:not(.cmacs-compact-table-logs-header-th-font):not(.cmacs-compact-table-align-td){background-color:#fff!important}  .cmacs-compact-table .ant-table-thead>tr>th:not(.cmacs-compact-table-logs-header-th){background:#fff!important;border-bottom:1px solid #dee0e5}  .cmacs-compact-table .ant-table-tbody>tr:not(.ant-table-placeholder):hover td.cmacs-compact-table-fst-td,   .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):not(.ant-table-placeholder):hover td:first-child{box-shadow:inset 3px 0 0 #2a7cff}  .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td,   .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff!important}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:hover td:not(:first-child):not(.ant-table-td-right-sticky):not(.ant-table-td-left-sticky),   .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-right-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add):first-child.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(:nth-child(2))>td.cmacs-compact-table-smart-table-hot-spot-row-add{border-bottom:0}  .cmacs-compact-table .ant-table-tbody>.cmacs-compact-table-smart-table-row:hover>td:last-child,   .cmacs-compact-table .ant-table-tbody>.cmacs-compact-table-smart-table-row>td:last-child{box-shadow:none!important}  .cmacs-compact-table .editable-cell{position:relative}  .cmacs-compact-table .ant-rate-star{font-size:16px;margin:0}  .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-add:hover~td:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),   .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover~td{border-bottom-color:#2a7cff}  .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td{border-bottom-color:#f6503c}  .cmacs-compact-table-smart-table-hot-spot-row-add,   .cmacs-compact-table-smart-table-hot-spot-row-add:hover,   .cmacs-compact-table-smart-table-hot-spot-row-delete,   .cmacs-compact-table-smart-table-hot-spot-row-delete:hover{width:28px;border-bottom-color:transparent!important;border-top-color:transparent!important;background-color:#fff!important;box-shadow:none!important}  .cmacs-compact-table-logs-td,   .cmacs-compact-table-logs-td:hover{background-color:#f6f7fb!important}  .ant-table-thead>tr:hover .cmacs-compact-table-smart-table-hot-spot-row-add-icon,   .ant-table-thead>tr:hover .cmacs-compact-table-smart-table-hot-spot-row-delete-icon,   tr:hover .cmacs-compact-table-smart-table-hot-spot-row-add-icon,   tr:hover .cmacs-compact-table-smart-table-hot-spot-row-delete-icon{opacity:1!important}  .cmacs-compact-table-smart-table-hot-spot-row-add-icon:hover,   .cmacs-compact-table-smart-table-hot-spot-row-delete-icon:hover{cursor:pointer}  .cmacs-compact-table-smart-table-hot-spot-row-add.ant-table-cell-fix-left-first:after,   .cmacs-compact-table-smart-table-hot-spot-row-add.ant-table-cell-fix-left-last:after,   .cmacs-compact-table-smart-table-hot-spot-row-delete.ant-table-cell-fix-right-first:after,   .cmacs-compact-table-smart-table-hot-spot-row-delete.ant-table-cell-fix-right-last:after{bottom:0}  .cmacs-compact-table-smart-table-hot-spot-row-delete-icon{background-color:#f6503c}  .cmacs-compact-table-smart-table-hot-spot-row-add-icon,   .cmacs-compact-table-smart-table-hot-spot-row-delete-icon{font-size:14px;border-radius:100px;color:#fff;padding:2px;width:18px;height:18px;opacity:0;display:flex;flex-direction:row;justify-content:center;align-items:center;cursor:pointer}  .cmacs-compact-table-smart-table-hot-spot-row-add-icon{background-color:#2a7cff}.cmacs-compact-table-smart-table-hot-spot-col-add-icon-container[_ngcontent-%COMP%]:hover   .cmacs-compact-table-smart-table-hot-spot-col-add-icon[_ngcontent-%COMP%]{opacity:1!important}.cmacs-compact-table-smart-table-hot-spot-col-add-icon-container[_ngcontent-%COMP%]{display:flex;justify-content:end;float:right!important;margin-top:-30px;margin-right:-19px}.cmacs-compact-table-smart-table-hot-spot-col-add-icon[_ngcontent-%COMP%]{font-size:14px;border-radius:100px;background-color:#2a7cff;color:#fff;padding:2px;width:18px;height:18px;opacity:0;display:flex;flex-direction:row;justify-content:center;align-items:center;cursor:pointer}  .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add):not(.cmacs-compact-table-smart-table-hot-spot-row-delete){background-color:#f2f7ff!important}  .cmacs-compact-table .ant-spin-nested-loading{clear:both}  .cmacs-compact-table-extra,   .cmacs-compact-table-extra a,   .cmacs-compact-table-extra a i,   .cmacs-compact-table-extra i{font-size:16px;color:#656c79;display:inline-flex}  .cmacs-compact-table-extra{position:relative}  .cmacs-compact-table-extra a:hover,   .cmacs-compact-table-extra a i:hover,   .cmacs-compact-table-extra i:hover{cursor:pointer}  .cmacs-compact-table a,   .cmacs-compact-table a:hover{color:#656c79}  .cmacs-compact-table-edit-icon{float:right;font-size:16px;position:relative;opacity:0}  .cmacs-compact-table-edit-icon-view{display:none}  .cmacs-compact-table-edit-icon:hover{color:#2a7cff;cursor:pointer}  .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-edit-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-edit-icon{opacity:1}  .cmacs-compact-table-input,   .cmacs-compact-table-input:focus,   .cmacs-compact-table-input:hover,   .cmacs-compact-table-select{max-width:100%;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;border-color:#2a7cff;box-shadow:none}  .cmacs-compact-table-input{padding-left:3px}  .cmacs-compact-table-on-edit{padding:0 6px!important}  .cmacs-compact-table-on-edit-expandable{padding-top:0!important;padding-bottom:0!important}  .cmacs-compact-table-on-edit-no-padding{padding:0 0 0 6px!important}  .cmacs-compact-table-calendar-icon,   .cmacs-compact-table-calendar-icon-view,   .cmacs-compact-table-input-number-icon,   .cmacs-compact-table-input-number-icon-view,   .cmacs-compact-table-select-icon,   .cmacs-compact-table-select-icon-view{float:right;font-size:16px;position:relative;line-height:18px}  .cmacs-compact-table-editable-row:hover .cmacs-compact-table-calendar-icon,   .cmacs-compact-table-editable-row:hover .cmacs-compact-table-input-number-icon,   .cmacs-compact-table-editable-row:hover .cmacs-compact-table-select-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-calendar-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-input-number-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-select-icon{color:#656c79}  .cmacs-compact-table-calendar-icon:hover,   .cmacs-compact-table-input-number-icon:hover,   .cmacs-compact-table-select-icon:hover{cursor:pointer}  .cmacs-compact-table-date,   .cmacs-compact-table-input-number,   .cmacs-compact-table-select{border-bottom:2px dotted transparent;border-top:2px solid transparent;padding-left:2px;margin:-2px;padding-right:2px}  .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-date,   .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-input-number,   .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-select,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-date,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-input-number,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-select{border-bottom:2px dotted #656c79;border-top:2px solid transparent;padding-left:2px;margin:-2px;padding-right:2px}  .cmacs-compact-table-date-edit .ant-calendar-input,   .cmacs-compact-table-date-edit cmacs-picker span input,   .cmacs-compact-table-datetime-picker input{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal}  .cmacs-compact-table .cmacs-compact-table-select-cell{width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal}  .cmacs-compact-table .cmacs-compact-table-select-cell .ant-select-selection{height:34px!important;border:1px solid #2a7cff;margin-left:0;margin-right:0}  .cmacs-compact-table .ant-select-arrow{right:1px}  .cmacs-compact-table-date-edit cmacs-picker span input,   .cmacs-compact-table-datetime-picker input{padding-left:3px}  .cmacs-compact-table-date-edit cmacs-picker span .ant-calendar-picker-clear,   .cmacs-compact-table-date-edit cmacs-picker span .ant-calendar-picker-icon{margin-top:-8px;margin-right:-1px}  .cmacs-compact-table cmacs-input-number.ant-input-number:not(.cmacs-datetime-picker-input-number){margin-bottom:-5px;margin-left:-9px}  .cmacs-compact-table cmacs-input-number input.ant-input-number-input{height:32px;padding-left:12px}  .cmacs-compact-table .cmacs-compact-table-expandable-row .cmacs-compact-table-expandable-td input.cmacs-compact-table-input,   .cmacs-compact-table .cmacs-compact-table-expandable-row .cmacs-compact-table-on-edit-expandable input.cmacs-compact-table-input{margin-left:-4px}.cmacs-compact-table-input[_ngcontent-%COMP%]{width:96%;border-color:#2a7cff!important}  .cmacs-compact-table .cmacs-compact-table-on-edit-expandable .ant-picker,   .cmacs-compact-table .cmacs-compact-table-on-edit-expandable .cmacs-compact-table-date-edit{padding-left:2px;padding-right:2px}  .cmacs-compact-table .cmacs-compact-table-on-edit-expandable cmacs-select.cmacs-compact-table-select-cell .ant-select-selection__rendered{margin-left:7px}  .cmacs-compact-table .cmacs-compact-table-on-edit-expandable cmacs-select .ant-select-arrow{right:-2px}  .cmacs-compact-table-date-edit cmacs-picker span input,   .cmacs-compact-table-date-edit cmacs-picker span input:focus,   .cmacs-compact-table-date-edit cmacs-picker span input:focus-within,   .cmacs-compact-table-date-edit cmacs-picker span input:hover,   .cmacs-compact-table-datetime-picker input,   .cmacs-compact-table-datetime-picker input:focus,   .cmacs-compact-table-datetime-picker input:focus-within,   .cmacs-compact-table-datetime-picker input:hover,   .cmacs-compact-table-input-number-edit,   .cmacs-compact-table-input-number-edit:focus,   .cmacs-compact-table-input-number-edit:focus-within,   .cmacs-compact-table-input-number-edit:hover{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;border-color:#2a7cff!important}  .cmacs-compact-table-overflow-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:100%;vertical-align:middle;line-height:20px}  .cmacs-compact-table .ant-table-row-expand-icon-collapsed:after{font-family:ArrowSmall!important;content:\"\\e903\";transition:all .3s;width:unset;transform:unset;position:static;background:transparent}  .cmacs-compact-table .ant-table-row-expand-icon-collapsed:before{content:unset}  .cmacs-compact-table .ant-table-row-expand-icon-collapsed{margin-right:5px;border:none;transition:all .3s}  .cmacs-compact-table .ant-table-row-expand-icon-expanded:after{font-family:ArrowSmall!important;content:\"\\e900\";transition:all .3s;width:unset;transform:unset;position:static;background:transparent}  .cmacs-compact-table .ant-table-row-expand-icon-expanded{margin-right:5px;border:none;transition:all .3s}  .cmacs-compact-table .ant-table-row-expand-icon-expanded:before{content:unset}  .cmacs-compact-table-header-logs,   .cmacs-compact-table-header-logs:hover{background-color:#f6f7fb!important;color:#656c79!important}  thead .cmacs-compact-table-header-logs{box-shadow:inset 0 -1px 0 #dee0e5}  .cmacs-compact-table-logs-header-th-font,   .cmacs-compact-table-logs-header-th-font:hover{color:#656c79!important;background-color:#f6f7fb!important}  .cmacs-compact-table-logs-header-th-font.th,   .cmacs-compact-table-logs-header-th-font.th:hover{border-bottom:1px solid #dee0e5!important}  .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#f6f7fb!important}  .cmacs-compact-table-boolean-false-icon,   .cmacs-compact-table-boolean-indeterminate-icon{width:10px;border:1px solid #dee0e5;height:10px;display:block}  .cmacs-compact-table-boolean-indeterminate-icon{padding:1px}  .cmacs-compact-table-boolean-indeterminate-icon-inner{width:6px;background-color:#dee0e5;height:6px;display:block}.iti--allow-dropdown[_ngcontent-%COMP%],   .phone-number .iti--allow-dropdown input,   .phone-number input.ant-input.cmacs-input-fix{border:1px solid #2a7cff}  .phone-number-view-mode input.ant-input.cmacs-input-fix{border:0;border-radius:0;background-color:transparent!important;width:100%;height:20px;color:#3b3f46;font-weight:400;cursor:default}  .phone-number-view-mode .iti__selected-flag{border-right:transparent;cursor:default}  .phone-number-view-mode .iti__arrow{display:none}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0;border-bottom:1px solid #2a7cff!important;background-color:#fff}.cdk-drag-placeholder[_ngcontent-%COMP%]{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff;opacity:1}  .cmacs-compact-table-smart-add-row-icon-visible{z-index:2;position:absolute;opacity:1!important}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-add){box-shadow:7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-add),   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete){border-bottom:1px solid #dee0e5}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky{box-shadow:0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky+.ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky+.ant-table-th-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky+.ant-table-td-right-sticky{box-shadow:none}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-right-sticky{box-shadow:0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky~.ant-table-td-right-sticky,  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-right-sticky~.ant-table-th-right-sticky{box-shadow:none}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky~.ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky~.ant-table-td-right-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-th-left-sticky{box-shadow:7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child.ant-table-td-left-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-smart-table-row:not(.ant-table-selected-row):hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-smart-table-row:not(.ant-table-selected-row):hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-smart-table-row.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-smart-table-row.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-checkbox-wrapper{display:inline-grid;vertical-align:middle}  .cmacs-compact-table .cmacs-no-selection{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}  .cmacs-compact-table .ant-table-expand-icon-th,   .cmacs-compact-table .ant-table-row-expand-icon-cell{text-align:left}  .cmacs-compact-table table{table-layout:fixed}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters{display:inline-flex;position:relative;top:3px}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner-full{margin-left:0!important}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters:hover:before{background-color:transparent}  .cmacs-compact-table.cmacs-compact-table-scrollable-y .ant-table-fixed-header .ant-table-header{overflow:hidden!important;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1;margin-right:6px}  .cmacs-compact-table:not(.cmacs-compact-table-scrollable-y) .ant-table-fixed-header .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1;margin-right:1px}  .cmacs-compact-table .ant-table-fixed-header>.ant-table-container>.ant-table-body,   .cmacs-compact-table cdk-virtual-scroll-viewport{scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin;overflow:scroll!important;position:inherit;padding-bottom:10px;background-color:transparent}  .ant-table{background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar,   .cmacs-compact-table cdk-virtual-scroll-viewport::-webkit-scrollbar{width:6px;height:6px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb,   .cmacs-compact-table cdk-virtual-scroll-viewport::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb:hover,   .cmacs-compact-table cdk-virtual-scroll-viewport::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}  .cmacs-compact-table cmacs-datetime-picker.ant-time-picker{width:100%!important}  .cmacs-compact-table .ant-table-row-expand-icon{background:transparent!important}@media only screen and (max-device-width:1024px) and (orientation:portrait){  .cmacs-compact-table.cmacs-compact-table-scrollable-y .ant-table-fixed-header .ant-table-header{margin-right:0}}@media only screen and (max-device-width:1024px) and (orientation:landscape){  .cmacs-compact-table.cmacs-compact-table-scrollable-y .ant-table-fixed-header .ant-table-header{margin-right:0}}"], changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "virtualScroll", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "exclusiveSelect", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "logs", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "expandable", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "smartTable", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "draggable", void 0);
__decorate([
    InputNumber()
], CmacsCompactTableComponent.prototype, "virtualItemSize", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "expandAll", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "addColumn", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "hasCookies", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "wrapLines", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "use12Hours", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "frontPagination", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "templateMode", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "hideButtons", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "centerTable", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "showPagination", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "showSizeChanger", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "hideOnSinglePage", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "showQuickJumper", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "simple", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "checkboxSelect", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "inLineEdit", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "dataTable", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "showRate", void 0);
__decorate([
    InputBoolean()
], CmacsCompactTableComponent.prototype, "multiSelect", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCompactTableComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-compact-table',
                exportAs: 'cmacsCompactTable',
                templateUrl: './cmacs-compact-table.component.html',
                styleUrls: ['./cmacs-compact-table.component.css'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.cmacs-compact-table-logs]': 'logs'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzI18nService }, { type: i2.ExcelService }, { type: i3.DeviceDetectorService }, { type: i4.DatePipe }, { type: i5.CmacsContextMenuService }, { type: i6.CookieService }, { type: i7.UtilService }]; }, { size: [{
            type: Input
        }], showTotal: [{
            type: Input
        }], pageSizeOptions: [{
            type: Input
        }], virtualScroll: [{
            type: Input
        }], exclusiveSelect: [{
            type: Input
        }], logs: [{
            type: Input
        }], expandable: [{
            type: Input
        }], smartTable: [{
            type: Input
        }], draggable: [{
            type: Input
        }], virtualItemSize: [{
            type: Input
        }], expandAll: [{
            type: Input
        }], addColumn: [{
            type: Input
        }], loadingDelay: [{
            type: Input
        }], loadingIndicator: [{
            type: Input
        }], hasCookies: [{
            type: Input
        }], total: [{
            type: Input
        }], title: [{
            type: Input
        }], footer: [{
            type: Input
        }], noResult: [{
            type: Input
        }], widthConfig: [{
            type: Input
        }], pageIndex: [{
            type: Input
        }], pageSize: [{
            type: Input
        }], actionColumnWidth: [{
            type: Input
        }], wrapLines: [{
            type: Input
        }], dropdownAddOptionTemplateRef: [{
            type: Input
        }], data: [{
            type: Input
        }], config: [{
            type: Input
        }], use12Hours: [{
            type: Input
        }], configChange: [{
            type: Output
        }], fieldId: [{
            type: Input
        }], gridID: [{
            type: Input
        }], paginationPosition: [{
            type: Input
        }], scroll: [{
            type: Input
        }], nzItemRender: [{
            type: ViewChild,
            args: ['renderItemTemplate']
        }], frontPagination: [{
            type: Input
        }], templateMode: [{
            type: Input
        }], bordered: [{
            type: Input
        }], hideButtons: [{
            type: Input
        }], centerTable: [{
            type: Input
        }], showPagination: [{
            type: Input
        }], loading: [{
            type: Input
        }], showSizeChanger: [{
            type: Input
        }], hideOnSinglePage: [{
            type: Input
        }], showQuickJumper: [{
            type: Input
        }], simple: [{
            type: Input
        }], checkboxSelect: [{
            type: Input
        }], inLineEdit: [{
            type: Input
        }], dataTable: [{
            type: Input
        }], showRate: [{
            type: Input
        }], exportEvent: [{
            type: Input
        }], columnMenu: [{
            type: Input
        }], extra: [{
            type: Input
        }], contextmenu: [{
            type: Input
        }], indentSize: [{
            type: Input
        }], virtualMaxBufferPx: [{
            type: Input
        }], buttonClick: [{
            type: Output
        }], rateChange: [{
            type: Output
        }], selectionChange: [{
            type: Output
        }], ondlclickRow: [{
            type: Output
        }], onclickRow: [{
            type: Output
        }], onclickHyperlink: [{
            type: Output
        }], onedit: [{
            type: Output
        }], onRowExpandCollapse: [{
            type: Output
        }], ondrop: [{
            type: Output
        }], rateCount: [{
            type: Input
        }], multiSelect: [{
            type: Input
        }], sortChange: [{
            type: Output
        }], filterChange: [{
            type: Output
        }], onrowdeleted: [{
            type: Output
        }], onrowadded: [{
            type: Output
        }], oncolumnadded: [{
            type: Output
        }], oneditcolumn: [{
            type: Output
        }], onresize: [{
            type: Output
        }], oncontextmenu: [{
            type: Output
        }], onDropdownRender: [{
            type: Output
        }], onChangeAttachments: [{
            type: Output
        }], onclickChooseFile: [{
            type: Output
        }], nzTableComponent: [{
            type: ViewChild,
            args: ['gridComponent']
        }], inputElement: [{
            type: ViewChild,
            args: ['fieldTypeInput', { read: ElementRef }]
        }], inputNumberElement: [{
            type: ViewChild,
            args: ['fieldTypeInputNumber', { read: ElementRef }]
        }], inputNumberComponent: [{
            type: ViewChild,
            args: ['fieldTypeInputNumber', { read: CmacsInputNumberComponent }]
        }], datePickerElement: [{
            type: ViewChild,
            args: ['fieldTypeDatePicker', { read: ElementRef }]
        }], dateTimePickerElement: [{
            type: ViewChild,
            args: ['fieldTypeDateTimePicker', { read: ElementRef }]
        }], selectElement: [{
            type: ViewChild,
            args: ['fieldTypeSelect', { read: ElementRef }]
        }], boolElement: [{
            type: ViewChild,
            args: ['fieldTypeBool', { read: ElementRef }]
        }], dateTimePicker: [{
            type: ViewChild,
            args: [CmacsDateTimePickerComponent]
        }], tooltipComponent: [{
            type: ViewChild,
            args: [CmacsCompactTableColumnTooltipComponent]
        }], handleMouseDown: [{
            type: HostListener,
            args: ['document:mousedown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb21wYWN0LXRhYmxlL2NtYWNzLWNvbXBhY3QtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUlOLFNBQVMsRUFDVCxZQUFZLEVBQ1osdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBNkIsTUFBTSxFQUFFLEtBQUssRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBRy9GLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLGlCQUFpQixDQUFDO0FBR3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzVELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFD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QUFNO1lBQ0csUUFBUTtrQkFBakIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxnQkFBZ0I7a0JBQXpCLE1BQU07WUFDRyxtQkFBbUI7a0JBQTVCLE1BQU07WUFDRyxpQkFBaUI7a0JBQTFCLE1BQU07WUFvQnFCLGdCQUFnQjtrQkFBM0MsU0FBUzttQkFBQyxlQUFlO1lBQ3lCLFlBQVk7a0JBQTlELFNBQVM7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ1Esa0JBQWtCO2tCQUExRSxTQUFTO21CQUFDLHNCQUFzQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNpQixvQkFBb0I7a0JBQTNGLFNBQVM7bUJBQUMsc0JBQXNCLEVBQUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUU7WUFDZCxpQkFBaUI7a0JBQXhFLFNBQVM7bUJBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ00scUJBQXFCO2tCQUFoRixTQUFTO21CQUFDLHlCQUF5QixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNOLGFBQWE7a0JBQWhFLFNBQVM7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ0EsV0FBVztrQkFBNUQsU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ1AsY0FBYztrQkFBdEQsU0FBUzttQkFBQyw0QkFBNEI7WUFDYSxnQkFBZ0I7a0JBQW5FLFNBQVM7bUJBQUMsdUNBQXVDO1lBaVpsRCxlQUFlO2tCQURkLFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgY291bnQsIGRlYm91bmNlVGltZSwgcmFjZSwgcmVwZWF0LCBkZWxheSwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IGpzUERGIGZyb20gJ2pzcGRmJztcclxuaW1wb3J0ICdqc3BkZi1hdXRvdGFibGUnO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnLCBGaWVsZCwgRWRpdENvbHVtbkFjdGlvbiwgRWRpdENvbHVtbkV2ZW50IH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgR3JpZEV4cENvbmZpZyB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWV4cC1jb25maWcnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL1RlbXBsYXRlVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ2VsZFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL0NlbGRUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBFeGNlbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL2V4Y2VsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9leHBvcnQtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XHJcbmltcG9ydCB7IENoZWNrYm94U2VsZWN0IH0gZnJvbSAnLi4vY21hY3MtdGFibGUvY21hY3MtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ3V0aWwnO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3MtaW5wdXQtbnVtYmVyL2NtYWNzLWlucHV0LW51bWJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXRpbC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZW4taWUnO1xyXG5pbXBvcnQgeyBDbWFjc0RhdGVUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3MtZGF0ZXRpbWUtcGlja2VyL2NtYWNzLWRhdGV0aW1lLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7IE56U2l6ZU1EU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYmxlJztcclxuaW1wb3J0IHsgQ21hY3NDb250ZXh0TWVudVNlcnZpY2UgfSBmcm9tICcuLi9jbWFjcy1kcm9wZG93bi9jb250ZXh0LW1lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IE56UmVzaXplRXZlbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3Jlc2l6YWJsZSc7XHJcbmltcG9ydCB7IERldmljZURldGVjdG9yU2VydmljZSB9IGZyb20gJ25neC1kZXZpY2UtZGV0ZWN0b3InO1xyXG5pbXBvcnQgeyBDbWFjc0NvbXBhY3RUYWJsZUNvbHVtblRvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC9jbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi10b29sdGlwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGFmdGVyRGF0ZSwgYmVmb3JlRGF0ZSwgZ3JlYXRlclRoYW4sIGlzRXF1YWxUb0RhdGUsIGlzRXF1YWxUb051bWJlciwgaXNOb3RFcXVhbFRvRGF0ZSwgaXNOb3RFcXVhbFRvTnVtYmVyLCBsZXNzVGhhbiwgcmFuZ2VEYXRlLCByYW5nZU51bWJlciB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvY3VzdG9tVmFsaWRhdG9ycyc7XHJcblxyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5kZWNsYXJlIHZhciBhY2NvdW50aW5nOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29tcGFjdC10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NvbXBhY3RUYWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNvbXBhY3QtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbXBhY3QtdGFibGUuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzXSc6ICdsb2dzJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIC8qKiBsb2NhbCB2YXJpYWJsZXMgKi9cclxuXHJcbiAgbG9jYWxlOiBhbnkgPSB7fTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBoZWFkZXJCb3R0b21TdHlsZSA9IHt9O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxhbnk+KGZhbHNlLCBbXSk7XHJcbiAgcHJpdmF0ZSBfb25yZXNpemUkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHB1YmxpYyBvbnJlc2l6ZW9icyA9IHRoaXMuX29ucmVzaXplJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBfb25zb3J0JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwdWJsaWMgb25zb3J0b2JzID0gdGhpcy5fb25zb3J0JC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHVibGljIGRyb3Bkb3duOiBhbnk7XHJcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICBwaG9uZUxvY2F0aW9uID0gJzEnO1xyXG4gIGZvcm1QaG9uZUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtcclxuICAgIFZhbGlkYXRvcnMucGF0dGVybigvXlxccyooPzpcXCs/KFxcZHsxLDN9KSk/KFstLiAoXShcXGR7M30pWy0uICldKT8oKFxcZHszfSlbLS4gXShcXGR7Miw0fSkoPzpbLS54IF0oXFxkKykpPylcXHMqJC8pLFxyXG4gICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDQ1KV0pO1xyXG4gIGVkaXRpb25PcFRyaWdnZXJlZCA9IGZhbHNlO1xyXG4gIGRlZmF1bHRTb3J0T3JkZXIgPSBudWxsO1xyXG4gIGNoZWNrYm94Q2FjaGU6IENoZWNrYm94U2VsZWN0W10gPSBbXTtcclxuICBpc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBhbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgZWRpdElkOiBzdHJpbmcgfCBudWxsO1xyXG4gIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gIHJvd09uRWRpdGlvbiA9IC0xO1xyXG4gIG5vZGVPbkVkaXRpb24gPSBudWxsO1xyXG4gIG1hcE9mRXhwYW5kZWREYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueVtdIH0gPSB7fTtcclxuICBkZWZhdWx0VGltZVZhbHVlID0gbmV3IERhdGUoKTtcclxuICBsYXN0SWR4U2VsZWN0ZWQgPSBudWxsO1xyXG4gIGZpZWxkSUQ6IGFueSA9IG51bGw7XHJcbiAgc2VsZWN0ZWRDb2x1bW5JZCA9IC0xO1xyXG4gIHNlbGVjdGVkTW9yZSA9IC0xO1xyXG4gIGlzQWR2YW5jZWRDb25maWd1cmF0aW9uID0gZmFsc2U7XHJcbiAgb3JkZXIgPSAwO1xyXG4gIGNsaWNrcyA9IDA7XHJcbiAgdGFwQ291bnQgPSAwO1xyXG5cclxuICBhZGRlZE9wdGlvbiA9ICcnO1xyXG5cclxuICAvKiogZW5kIGxvY2FsIHZhcmlhYmxlcyAqL1xyXG5cclxuXHJcbiAgLyoqIGlucHV0IHZhcmlhYmxlcyAqL1xyXG5cclxuICBASW5wdXQoKSBzaXplOiBOelNpemVNRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIHNob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlcjsgcmFuZ2U6IFtudW1iZXIsIG51bWJlcl0gfT47XHJcbiAgQElucHV0KCkgcGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzAsIDQwLCA1MF07XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhjbHVzaXZlU2VsZWN0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvZ3MgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzbWFydFRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxJdGVtU2l6ZSA9IDA7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhZGRDb2x1bW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBsb2FkaW5nRGVsYXkgPSAwO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdJbmRpY2F0b3I6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNDb29raWVzID0gdHJ1ZTtcclxuICBASW5wdXQoKSB0b3RhbCA9IDA7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHdpZHRoQ29uZmlnOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHBhZ2VJbmRleCA9IDE7XHJcbiAgQElucHV0KCkgcGFnZVNpemUgPSAxMDtcclxuICBASW5wdXQoKSBhY3Rpb25Db2x1bW5XaWR0aCA9ICc4MHB4JztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgd3JhcExpbmVzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZHJvcGRvd25BZGRPcHRpb25UZW1wbGF0ZVJlZjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoKSBkYXRhID0gW107XHJcbiAgQElucHV0KCkgY29uZmlnOiBHcmlkQ29uZmlnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB1c2UxMkhvdXJzID0gdHJ1ZTtcclxuICBAT3V0cHV0KCkgY29uZmlnQ2hhbmdlOiBFdmVudEVtaXR0ZXI8R3JpZENvbmZpZz4gPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRDb25maWc+KCk7XHJcbiAgQElucHV0KCkgZmllbGRJZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nID0gbnVsbDtcclxuICBASW5wdXQoKSBwYWdpbmF0aW9uUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCcgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBzY3JvbGw6IHsgeD86IHN0cmluZyB8IG51bGw7IHk/OiBzdHJpbmcgfCBudWxsIH0gPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcclxuICBAVmlld0NoaWxkKCdyZW5kZXJJdGVtVGVtcGxhdGUnKSBuekl0ZW1SZW5kZXI6IFRlbXBsYXRlUmVmPHtcclxuICAgICRpbXBsaWNpdDogJ3BhZ2UnIHwgJ3ByZXYnIHwgJ25leHQnO1xyXG4gICAgcGFnZTogbnVtYmVyO1xyXG4gIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmcm9udFBhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0ZW1wbGF0ZU1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZUJ1dHRvbnMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2VudGVyVGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlT25TaW5nbGVQYWdlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dRdWlja0p1bXBlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaW1wbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2hlY2tib3hTZWxlY3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5MaW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkYXRhVGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1JhdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBleHBvcnRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8R3JpZEV4cENvbmZpZz4oKTtcclxuICBASW5wdXQoKSBjb2x1bW5NZW51OiBhbnk7XHJcbiAgQElucHV0KCkgZXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGNvbnRleHRtZW51OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBpbmRlbnRTaXplID0gMDtcclxuICBASW5wdXQoKSB2aXJ0dWFsTWF4QnVmZmVyUHggPSAyMDA7XHJcblxyXG5cclxuICAvKiogZW5kIGlucHV0IHZhcmlhYmxlcyAqL1xyXG5cclxuICAvKiogb3V0cHV0IHZhcmlhYmxlcyAqL1xyXG5cclxuXHJcbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHJhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuICBAT3V0cHV0KCkgb25kbGNsaWNrUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jbGlja0h5cGVybGluayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25Sb3dFeHBhbmRDb2xsYXBzZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSByYXRlQ291bnQgPSA1O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtdWx0aVNlbGVjdCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbnJvd2RlbGV0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25yb3dhZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmNvbHVtbmFkZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uZWRpdGNvbHVtbiA9IG5ldyBFdmVudEVtaXR0ZXI8RWRpdENvbHVtbkV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBvbnJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmNvbnRleHRtZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJvcGRvd25SZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VBdHRhY2htZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2tDaG9vc2VGaWxlID0gbmV3IEV2ZW50RW1pdHRlcjx7cm93OmFueSxpbmRleENvbDphbnl9PigpO1xyXG5cclxuICAvKiogZW5kIG91dHB1dCB2YXJpYWJsZXMgKi9cclxuXHJcbiAgLyoqIGNvbnN0cnVjdG9yICovXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBleGNlbFNlcnZpY2U6IEV4Y2VsU2VydmljZSxcclxuICAgIHByaXZhdGUgZGV2aWNlRGV0ZWN0b3I6IERldmljZURldGVjdG9yU2VydmljZSxcclxuICAgIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlLFxyXG4gICAgcHJpdmF0ZSBuekRyb3Bkb3duU2VydmljZTogQ21hY3NDb250ZXh0TWVudVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvb2tpZXM6IENvb2tpZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHV0aWxTZXJ2aWNlOiBVdGlsU2VydmljZVxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgLyoqIHZpZXcgY2hpbGQgdmFyaWFibGVzICovXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2dyaWRDb21wb25lbnQnKSBuelRhYmxlQ29tcG9uZW50OiBOelRhYmxlQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUlucHV0JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dE51bWJlcicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dE51bWJlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlSW5wdXROdW1iZXInLCB7IHJlYWQ6IENtYWNzSW5wdXROdW1iZXJDb21wb25lbnQgfSkgaW5wdXROdW1iZXJDb21wb25lbnQ6IENtYWNzSW5wdXROdW1iZXJDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlRGF0ZVBpY2tlcicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBkYXRlUGlja2VyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVEYXRlVGltZVBpY2tlcicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBkYXRlVGltZVBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlU2VsZWN0JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHNlbGVjdEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlQm9vbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBib29sRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKENtYWNzRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQpIGRhdGVUaW1lUGlja2VyOiBDbWFjc0RhdGVUaW1lUGlja2VyQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NDb21wYWN0VGFibGVDb2x1bW5Ub29sdGlwQ29tcG9uZW50KSB0b29sdGlwQ29tcG9uZW50OiBDbWFjc0NvbXBhY3RUYWJsZUNvbHVtblRvb2x0aXBDb21wb25lbnQ7XHJcblxyXG4gIC8qKiBlbmQgdmlldyBjaGlsZCB2YXJpYWJsZXMgKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBjdXJyZW50UGhvbmVTZWxlY3RlZChkYXRhOiBhbnksIGZpZWxkOiBhbnkpIHtcclxuICAgIHRoaXMuZm9ybVBob25lQ29udHJvbC5zZXRWYWx1ZShkYXRhW2ZpZWxkLnByb3BlcnR5XSAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XS5sZW5ndGggPyBkYXRhW2ZpZWxkLnByb3BlcnR5XSA6ICcnKTtcclxuICB9XHJcblxyXG4gIGdldFBob25lRmllbGRWYWx1ZShkYXRhOiBhbnksIGZpZWxkOiBhbnkpIHtcclxuICAgIGNvbnN0IHBob25lQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChkYXRhW2ZpZWxkLnByb3BlcnR5XSAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XS5sZW5ndGggPyBkYXRhW2ZpZWxkLnByb3BlcnR5XSA6ICcnKVxyXG4gICAgcmV0dXJuIHBob25lQ29udHJvbDtcclxuICB9XHJcblxyXG4gIG9uQ291bnRyeUNoYW5nZSgkZXZlbnQpIHtcclxuICAgIHRoaXMucGhvbmVMb2NhdGlvbiA9ICRldmVudC5kaWFsQ29kZTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybVBob25lQ29udHJvbC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBoYXNQaG9uZU51bWJlckVycm9yKGV2ZW50OiBhbnksIGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSA9IG51bGwsIHByb3BlcnR5OiBhbnkgPSBudWxsLCBmaWVsZDogRmllbGQgPSBudWxsKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtUGhvbmVDb250cm9sLnZhbHVlICE9PSAnJykge1xyXG4gICAgICBjb25zdCBpbmQgPSB0aGlzLmZvcm1QaG9uZUNvbnRyb2wudmFsdWUuaW5kZXhPZignKycpO1xyXG4gICAgICBpZiAoaW5kID09PSAtMSkge1xyXG4gICAgICAgIHRoaXMuZm9ybVBob25lQ29udHJvbC5zZXRWYWx1ZShgKyR7dGhpcy5waG9uZUxvY2F0aW9ufWAgKyB0aGlzLmZvcm1QaG9uZUNvbnRyb2wudmFsdWUpO1xyXG4gICAgICAgIHRoaXMucGhvbmVMb2NhdGlvbiA9ICcxJztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhW2luZGV4XTtcclxuICAgICAgZGF0YS5jbWFjc0VkaXRlZFByb3AgPSBwcm9wZXJ0eSA/IHByb3BlcnR5IDogdGhpcy5wcm9wZXJ0eTtcclxuICAgICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlBob25lKSB7XHJcbiAgICAgICAgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPSBkYXRhW2ZpZWxkLnByb3BlcnR5XSAhPT0gJycgPyB0aGlzLmZvcm1QaG9uZUNvbnRyb2wudmFsdWUgOiAnJztcclxuICAgICAgICB0aGlzLmZvcm1QaG9uZUNvbnRyb2wuc2V0VmFsdWUoJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGF0YVtpbmRleF0gPSBkYXRhO1xyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVtpbmRleF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGZvcm1hdHRlciA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGFjY291bnRpbmcuZm9ybWF0TnVtYmVyKHZhbHVlLCB7IHByZWNpc2lvbjogMywgdGhvdXNhbmQ6ICcgJywgZGVjaW1hbDogJywnIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH07XHJcbiAgcGFyc2VyID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gYWNjb3VudGluZy51bmZvcm1hdCh2YWx1ZSwgJywnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9O1xyXG4gIGRlZmF1bHRGb3JtYXR0ZXIgPSAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH07XHJcbiAgZGVmYXVsdFBhcnNlciA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICBvbmNvbnRleHRtZW51ZXZ0KCRldmVudCwgaXRlbSkge1xyXG4gICAgdGhpcy5vbmNvbnRleHRtZW51LmVtaXQoaXRlbSk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ29sdW1uTWVudShpZHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5zZWxlY3RlZENvbHVtbklkID0gaWR4O1xyXG4gIH1cclxuXHJcbiAgb3BlbkNvbHVtbk1vcmUoaWR4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRNb3JlID0gaWR4O1xyXG4gIH1cclxuXHJcbiAgY2xvc2VDb2x1bW5NZW51KCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZENvbHVtbklkID0gLTE7XHJcbiAgfVxyXG5cclxuICBjbG9zZUNvbHVtbk1vcmUoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkTW9yZSA9IC0xO1xyXG4gIH1cclxuXHJcbiAgb25GaWVsZENoYW5nZWQoaWR4OiBudW1iZXIsIGZpZWxkOiBFZGl0Q29sdW1uQWN0aW9uKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ29sdW1uSWQgPSAtMTtcclxuICAgIHRoaXMuc2VsZWN0ZWRNb3JlID0gLTE7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHsgaW5kZXg6IGlkeCwgY29sdW1uOiBmaWVsZCB9O1xyXG4gICAgdGhpcy5vbmVkaXRjb2x1bW4uZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkZpZWxkVGFwRWxsaXBzaXMoaWQ6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuaW5MaW5lRWRpdCB8fCB0aGlzLmRldmljZURldGVjdG9yLmlzRGVza3RvcCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRGF0YVRhcEVsbGlwc2lzKGlkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmRldmljZURldGVjdG9yLmlzRGVza3RvcCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXZpY2VEZXRlY3Rvci5pc0Rlc2t0b3AoKSA/ICdob3ZlcicgOiAnY2xpY2snO1xyXG4gIH1cclxuXHJcbiAgaXNFbGxpcHNpc0FjdGl2ZShpZDogc3RyaW5nLCBmaWVsZDogYW55KSB7XHJcbiAgICBpZiAoIWZpZWxkLnNob3dUb29sdGlwKSB7IHJldHVybjsgfVxyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAoIWVsKSB7IHJldHVybjsgfVxyXG4gICAgcmV0dXJuIChlbC5vZmZzZXRXaWR0aCA8IGVsLnNjcm9sbFdpZHRoKTtcclxuICB9XHJcblxyXG4gIGlzVG9vbHRpcEFjdGl2ZShkYXRhLCBmaWVsZDogYW55KSB7XHJcbiAgICBpZiAoIWZpZWxkLnNob3dUb29sdGlwIHx8IGZpZWxkLndpZHRoID09PSB1bmRlZmluZWQpIHsgcmV0dXJuOyB9XHJcbiAgICBsZXQgd2lkdGggPSBmaWVsZC53aWR0aDtcclxuICAgIHdpZHRoID0gTnVtYmVyKHdpZHRoLnJlcGxhY2UoJ3B4JywgJycpKTtcclxuICAgIGNvbnN0IHN0cmluZ0ZpZWxkVmFsdWUgPSB0aGlzLmdldFN0cmluZ0ZpZWxkVmFsdWUoZGF0YSwgZmllbGQpO1xyXG4gICAgaWYgKHN0cmluZ0ZpZWxkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gd2lkdGggPCB0aGlzLm1lYXN1cmVUZXh0KHN0cmluZ0ZpZWxkVmFsdWUsIDEyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1lYXN1cmVUZXh0KHN0cjogc3RyaW5nLCBmb250U2l6ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB3aWR0aHMgPSBbXHJcbiAgICAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXHJcbiAgICAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAuMjc5Njg3NSwgMC4yNzY1NjI1LCAwLjM1NDY4NzUsIDAuNTU0Njg3NSxcclxuICAgICAgMC41NTQ2ODc1LCAwLjg4OTA2MjUsIDAuNjY1NjI1LCAwLjE5MDYyNSwgMC4zMzI4MTI1LCAwLjMzMjgxMjUsIDAuMzg5MDYyNSxcclxuICAgICAgMC41ODI4MTI1LCAwLjI3NjU2MjUsIDAuMzMyODEyNSwgMC4yNzY1NjI1LCAwLjMwMTU2MjUsIDAuNTU0Njg3NSxcclxuICAgICAgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuNTU0Njg3NSxcclxuICAgICAgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuNTU0Njg3NSwgMC4yNzY1NjI1LCAwLjI3NjU2MjUsIDAuNTg0Mzc1LFxyXG4gICAgICAwLjU4MjgxMjUsIDAuNTg0Mzc1LCAwLjU1NDY4NzUsIDEuMDE0MDYyNSwgMC42NjU2MjUsIDAuNjY1NjI1LCAwLjcyMTg3NSxcclxuICAgICAgMC43MjE4NzUsIDAuNjY1NjI1LCAwLjYwOTM3NSwgMC43NzY1NjI1LCAwLjcyMTg3NSwgMC4yNzY1NjI1LCAwLjUsXHJcbiAgICAgIDAuNjY1NjI1LCAwLjU1NDY4NzUsIDAuODMyODEyNSwgMC43MjE4NzUsIDAuNzc2NTYyNSwgMC42NjU2MjUsIDAuNzc2NTYyNSxcclxuICAgICAgMC43MjE4NzUsIDAuNjY1NjI1LCAwLjYwOTM3NSwgMC43MjE4NzUsIDAuNjY1NjI1LCAwLjk0Mzc1LCAwLjY2NTYyNSxcclxuICAgICAgMC42NjU2MjUsIDAuNjA5Mzc1LCAwLjI3NjU2MjUsIDAuMzU0Njg3NSwgMC4yNzY1NjI1LCAwLjQ3NjU2MjUsIDAuNTU0Njg3NSxcclxuICAgICAgMC4zMzI4MTI1LCAwLjU1NDY4NzUsIDAuNTU0Njg3NSwgMC41LCAwLjU1NDY4NzUsIDAuNTU0Njg3NSwgMC4yNzY1NjI1LFxyXG4gICAgICAwLjU1NDY4NzUsIDAuNTU0Njg3NSwgMC4yMjE4NzUsIDAuMjQwNjI1LCAwLjUsIDAuMjIxODc1LCAwLjgzMjgxMjUsXHJcbiAgICAgIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuNTU0Njg3NSwgMC4zMzI4MTI1LCAwLjUsIDAuMjc2NTYyNSxcclxuICAgICAgMC41NTQ2ODc1LCAwLjUsIDAuNzIxODc1LCAwLjUsIDAuNSwgMC41LCAwLjM1NDY4NzUsIDAuMjU5Mzc1LCAwLjM1MzEyNSxcclxuICAgICAgMC41ODkwNjI1LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGF2ZyA9IDAuNTI3OTI3NjMxNTc4OTQ3MTtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKFxyXG4gICAgICBzdHJcclxuICAgICAgICAuc3BsaXQoJycpXHJcbiAgICAgICAgLm1hcCgoYykgPT5cclxuICAgICAgICAgIGMuY2hhckNvZGVBdCgwKSA8IHdpZHRocy5sZW5ndGggPyB3aWR0aHNbYy5jaGFyQ29kZUF0KDApXSA6IGF2Z1xyXG4gICAgICAgIClcclxuICAgICAgICAucmVkdWNlKChjdXIsIGFjYykgPT4gYWNjICsgY3VyKSAqIGZvbnRTaXplXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5wdXROdW1iZXJWYWx1ZShkYXRhOiBhbnksIGZpZWxkOiBGaWVsZCkge1xyXG5cclxuICAgIGlmICghdGhpcy5pc051bGwoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pKSB7XHJcbiAgICAgIGlmIChmaWVsZC51c2VDb21tYU1hcmtlcikge1xyXG4gICAgICAgIHJldHVybiBkYXRhW2ZpZWxkLnByb3BlcnR5XS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnLCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5pc051bGwoZmllbGQuZm9ybWF0dGVyKSkge1xyXG4gICAgICAgIHJldHVybiBmaWVsZC5mb3JtYXR0ZXIoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkYXRhW2ZpZWxkLnByb3BlcnR5XTtcclxuICAgIH1cclxuICAgIHJldHVybiBmaWVsZC5wbGFjZWhvbGRlcjtcclxuICB9XHJcblxyXG4gIGdldFN0cmluZ0ZpZWxkVmFsdWUoZGF0YTogYW55LCBmaWVsZDogYW55KSB7XHJcbiAgICByZXR1cm4gZGF0YVtmaWVsZC5wcm9wZXJ0eV0gJiYgZGF0YVtmaWVsZC5wcm9wZXJ0eV0ubGVuZ3RoID8gZGF0YVtmaWVsZC5wcm9wZXJ0eV0gOiBmaWVsZC5wbGFjZWhvbGRlcjtcclxuICB9XHJcblxyXG4gIG9uUmVzaXplKGV2ZW50OiBOelJlc2l6ZUV2ZW50LCBjb2w6IHN0cmluZywgZmllbGQ6IEZpZWxkKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5fb25yZXNpemUkLm5leHQoeyBldmVudCwgY29sLCBmaWVsZCB9KTtcclxuICB9XHJcblxyXG4gIG9uUmVzaXplRXZ0KHsgd2lkdGggfTogTnpSZXNpemVFdmVudCwgY29sOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCk6IHZvaWQge1xyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5maWVsZHMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbmZpZy5maWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuY29uZmlnLmZpZWxkc1tpXTtcclxuICAgICAgICBpZiAoZmllbGQucHJvcGVydHkgPT09IGNvbCkge1xyXG4gICAgICAgICAgY29uc3QgZWxXaWR0aCA9IGZpZWxkLndpZHRoID8gTnVtYmVyKGZpZWxkLndpZHRoLnJlcGxhY2UoL1teXFxkLi1dL2csICcnKSkgOiAwO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLnggJiYgaSArIDEgPT09IHRoaXMuY29uZmlnLmZpZWxkcy5sZW5ndGggLSAxICYmIHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0gIT09IG51bGwgJiYgdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsV2lkdGhOZXh0ID0gdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS53aWR0aCA/IE51bWJlcih0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLndpZHRoLnJlcGxhY2UoL1teXFxkLi1dL2csICcnKSkgOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IHdpZHRoIC0gZWxXaWR0aDtcclxuICAgICAgICAgICAgaWYgKGRlbHRhID4gMCAmJiBkZWx0YSA8IGVsV2lkdGhOZXh0KSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ubWluV2lkdGggIT09IG51bGwgJiYgdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS5taW5XaWR0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ubWluV2lkdGgpIDwgKGVsV2lkdGhOZXh0IC0gZGVsdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ud2lkdGggPSBgJHtlbFdpZHRoTmV4dCAtIGRlbHRhfXB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS53aWR0aCA9IGAke2VsV2lkdGhOZXh0IC0gZGVsdGF9cHhgO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGVsdGEgPCAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS53aWR0aCA9IGAke2VsV2lkdGhOZXh0IC0gZGVsdGF9cHhgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmaWVsZC53aWR0aCA9IGAke3dpZHRofXB4YDtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5vbnJlc2l6ZS5lbWl0KHsgY29sOiBjb2wsIGNvbmZpZzogdGhpcy5jb25maWcgfSk7XHJcbiAgICB0aGlzLmNvbmZpZ0NoYW5nZS5lbWl0KHRoaXMuY29uZmlnKTtcclxuICAgIGlmICh0aGlzLmdyaWRJRCA9PT0gbnVsbCB8fCB0aGlzLmdyaWRJRCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmhhc0Nvb2tpZXMgJiYgdGhpcy5nZXRJbmRleENvb2tpZSgpKSB7XHJcbiAgICAgIHRoaXMuY29va2llcy5zZXQodGhpcy5ncmlkSUQsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnKSwgMzY1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZlbnREZWZhdWx0KCRldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLypDb250ZXh0IE1lbnUgKi9cclxuICBjb250ZXh0TWVudSgkZXZlbnQ6IE1vdXNlRXZlbnQsIHRlbXBsYXRlOiBhbnksIGl0ZW06IGFueSA9IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMub25jb250ZXh0bWVudWV2dCgkZXZlbnQsIGl0ZW0pO1xyXG4gICAgdGhpcy5kcm9wZG93biA9IHRoaXMubnpEcm9wZG93blNlcnZpY2UuY3JlYXRlKCRldmVudCwgdGVtcGxhdGUpO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUoZGF0YTogYW55LCBmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIGxldCBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgICBpZiAoZmllbGQudmFsaWRhdG9ycykge1xyXG4gICAgICBmb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChkYXRhW2ZpZWxkLnByb3BlcnR5XSwgZmllbGQudmFsaWRhdG9ycyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChkYXRhW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICB9XHJcbiAgICBkYXRhLnZhbGlkID0gZGF0YS52YWxpZCA/IGRhdGEudmFsaWQgOiB7fTtcclxuICAgIGRhdGEudmFsaWRbZmllbGQucHJvcGVydHldID0gZm9ybUNvbnRyb2wudmFsaWQ7XHJcbiAgICByZXR1cm4gZm9ybUNvbnRyb2wudmFsaWQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogd2lsbCBsb29wIHRocnUgZXZlcnkgZmllbGQgaW4gdGhlIGNvbmZpZ3VyYXRpb24gYW5kIHNldCB0aGUgY3VzdG9tIHZhbGlkYXRvcnMgZGVwZW5kaW5nIG9uIHRoZSB2YWxpZGF0aW9uIHJ1bGVzXHJcbiAgICogaWYgbm8gdmFsaWRhdGlvbiBydWxlIGlzIHByZXNlbnQgdGhpcyB3aWxsIGJlIGlnbm9yZWRcclxuICAgKi9cclxuICBzZXRDdXN0b21WYWxpZGF0b3JzKCkge1xyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuY29uZmlnID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb25maWcuZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBmaWVsZCA9IHRoaXMuY29uZmlnLmZpZWxkc1tpbmRleF07XHJcblxyXG4gICAgICBpZiAoZmllbGQudmFsaWRhdGlvblJ1bGUgPT09IHVuZGVmaW5lZCB8fCBmaWVsZC52YWxpZGF0aW9uUnVsZSA9PT0gbnVsbCB8fCBmaWVsZC52YWxpZGF0aW9uUnVsZSA9PSAnJykge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzd2l0Y2ggKGZpZWxkLnZhbGlkYXRpb25SdWxlKSB7XHJcbiAgICAgICAgY2FzZSAnbm9uZSc6IHtcclxuICAgICAgICAgIGZpZWxkLnZhbGlkYXRvcnMgPSBbXTsgLy8gdGhpcyB3aWxsIG5vdCBhcHBseSBhbnkgcnVsZVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2lzLW5vdC1lbXB0eSc6IHtcclxuICAgICAgICAgIGZpZWxkLnZhbGlkYXRvcnMgPSBbVmFsaWRhdG9ycy5yZXF1aXJlZF07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnYWZ0ZXItZGF0ZSc6IHtcclxuICAgICAgICAgIGZpZWxkLnZhbGlkYXRvcnMgPSBbYWZ0ZXJEYXRlKGZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdiZWZvcmUtZGF0ZSc6IHtcclxuICAgICAgICAgIGZpZWxkLnZhbGlkYXRvcnMgPSBbYmVmb3JlRGF0ZShmaWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnaXMtZXF1YWwtdG8nOiB7XHJcbiAgICAgICAgICBmaWVsZC52YWxpZGF0b3JzID0gZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZSA/IFtpc0VxdWFsVG9EYXRlKGZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXSA6XHJcbiAgICAgICAgICAgIFtpc0VxdWFsVG9OdW1iZXIoZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2lzLW5vdC1lcXVhbC10byc6IHtcclxuICAgICAgICAgIGZpZWxkLnZhbGlkYXRvcnMgPSBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlID8gW2lzTm90RXF1YWxUb0RhdGUoZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldIDpcclxuICAgICAgICAgICAgW2lzTm90RXF1YWxUb051bWJlcihmaWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAncmFuZ2UnOiB7XHJcbiAgICAgICAgICBmaWVsZC52YWxpZGF0b3JzID0gZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZSA/IFtyYW5nZURhdGUoZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSwgZmllbGQudmFsaWRhdGlvblZhbHVlc1sxXSldIDpcclxuICAgICAgICAgICAgW3JhbmdlTnVtYmVyKGZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0sIGZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMV0pXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdncmVhdGVyLXRoYW4nOiB7XHJcbiAgICAgICAgICBmaWVsZC52YWxpZGF0b3JzID0gW2dyZWF0ZXJUaGFuKGZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdsZXNzLXRoYW4nOiB7XHJcbiAgICAgICAgICBmaWVsZC52YWxpZGF0b3JzID0gW2xlc3NUaGFuKGZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiBmaWVsZC52YWxpZGF0b3JzID0gW107XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFJvdyhpZHg6IG51bWJlciwgJGV2ZW50ID0gbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbnJvd2FkZGVkLmVtaXQoaWR4KTtcclxuICAgIHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkID0gdHJ1ZTtcclxuICAgIGlmICgkZXZlbnQpIHtcclxuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgkZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkY29sdW1uKGlkeDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uY29sdW1uYWRkZWQuZW1pdCgrK2lkeCk7XHJcbiAgfVxyXG5cclxuICBjbWFjc0VkaXRlZElucHV0KGV2ZW50OiBhbnkpIHtcclxuICAgIGlmKGV2ZW50LnRvU3RyaW5nKCkgIT09IFwiXCIgJiYgIShldmVudCBpbnN0YW5jZW9mIElucHV0RXZlbnQpKVxyXG4gICAgICB0aGlzLmFkZGVkT3B0aW9uID0gZXZlbnQ7XHJcbiAgfVxyXG5cclxuICBhZGRPcHRpb24oaW5kZXg6IG51bWJlciwgZGF0YTogYW55ID0gbnVsbCwgcHJvcGVydHk6IGFueSA9IG51bGwsIGZpZWxkOiBGaWVsZCA9IG51bGwpIHtcclxuICAgIHRoaXMub25Ecm9wZG93blJlbmRlci5lbWl0KHRoaXMuYWRkZWRPcHRpb24pO1xyXG4gICAgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPSB0aGlzLmFkZGVkT3B0aW9uO1xyXG4gICAgdGhpcy5lbmRFZGl0TW9kZU5nTW9kZWwoaW5kZXgsIGRhdGEgLHByb3BlcnR5LCBmaWVsZCk7XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kcmFnZ2FibGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIHRoaXMuZGF0YSA9IFsuLi50aGlzLmRhdGFdO1xyXG4gICAgdGhpcy5vbmRyb3AuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVSb3coaWR4OiBudW1iZXIsICRldmVudCA9IG51bGwpOiB2b2lkIHtcclxuICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9IHRoaXMuZGF0YVtpZHhdO1xyXG4gICAgdGhpcy5vbnJvd2RlbGV0ZWQuZW1pdChpdGVtVG9SZW1vdmUpO1xyXG4gICAgdGhpcy5lZGl0aW9uT3BUcmlnZ2VyZWQgPSB0cnVlO1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0KCRldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydEVkaXQoaWQ6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5MaW5lRWRpdCkge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChkYXRhW3RoaXMuZmllbGRJRF0pIHx8IHRoaXMuaXNSb3dTZWxlY3RlZChkYXRhKSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmlzTnVsbChkYXRhLm5vdEVkaXRhYmxlRmllbGRzKVxyXG4gICAgICAgICYmIGRhdGEubm90RWRpdGFibGVGaWVsZHMuZmlsdGVyKHggPT4geCA9PT0gcHJvcGVydHkpLmxlbmd0aFxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZWRpdElkICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVkaXRJZCA9IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF07XHJcbiAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLmZvY3VzU2VsZWN0KHRoaXMuaW5wdXRFbGVtZW50KTtcclxuICAgICAgaWYgKHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmZvY3VzU2VsZWN0KHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQuaW5wdXRFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kYXRlVGltZVBpY2tlcikge1xyXG4gICAgICAgIHRoaXMuZm9jdXNTZWxlY3QodGhpcy5kYXRlVGltZVBpY2tlci5pbnB1dFJlZik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzU2VsZWN0KGVsZW06IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGVsZW0pIHtcclxuICAgICAgZWxlbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW0ubmF0aXZlRWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNvcnQoJGV2ZW50OiBhbnksIGZpZWxkUHJvcGVydHk6IHN0cmluZywpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uc29ydCQubmV4dCh7IHNvcnROYW1lOiBmaWVsZFByb3BlcnR5LCBzb3J0VmFsdWU6ICRldmVudCB9KTtcclxuICB9XHJcblxyXG4gIGZpbHRlcigkZXZlbnQ6IGFueSwgZmllbGRQcm9wZXJ0eTogc3RyaW5nLCk6IHZvaWQge1xyXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7IGZpbHRlck5hbWU6IGZpZWxkUHJvcGVydHksIGZpbHRlclZhbHVlOiAkZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRIZWFkZXJNYXhXaWR0aChmaWVsZDogRmllbGQpOiBzdHJpbmcge1xyXG4gICAgaWYgKGZpZWxkLnNob3dTb3J0ICYmIGZpZWxkLnNob3dGaWx0ZXIpIHtcclxuICAgICAgcmV0dXJuIGBjYWxjKDEwMCUgLSA4MnB4KWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmaWVsZC5zaG93U29ydCB8fCBmaWVsZC5zaG93RmlsdGVyKSB7XHJcbiAgICAgIHJldHVybiBgY2FsYygxMDAlIC0gNThweClgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuYWRkQ29sdW1uID8gYGNhbGMoMTAwJSAtIDE1cHgpYCA6IGAxMDAlYDtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNlZG93bicsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlTW91c2VEb3duKGU6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgZWxlbWVudENvbHVtbk1vcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFjdFRhYmxlQ29sdW1uTW9yZScpO1xyXG4gICAgY29uc3QgZWxlbWVudENvbHVtblRvb2x0aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFjdFRhYmxlQ29sdW1uVG9vbHRpcCcpO1xyXG5cclxuICAgIGlmIChlbGVtZW50Q29sdW1uTW9yZSAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIGVsZW1lbnRDb2x1bW5Nb3JlKSkge1xyXG4gICAgICB0aGlzLmNsb3NlQ29sdW1uTW9yZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsZW1lbnRDb2x1bW5Ub29sdGlwICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgZWxlbWVudENvbHVtblRvb2x0aXApKSB7XHJcbiAgICAgIGlmICh0aGlzLnRvb2x0aXBDb21wb25lbnQgIT09IG51bGwgJiYgdGhpcy50b29sdGlwQ29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnRvb2x0aXBDb21wb25lbnQudXBkYXRlRGlzcGxheSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xvc2VDb2x1bW5NZW51KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZWRpdElkICYmIHRoaXMucHJvcGVydHkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICh0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCkgfHxcclxuICAgICAgICAodGhpcy5pbnB1dE51bWJlckVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmlucHV0TnVtYmVyRWxlbWVudC5uYXRpdmVFbGVtZW50KSkgfHxcclxuICAgICAgICAodGhpcy5kYXRlUGlja2VyRWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuZGF0ZVRpbWVQaWNrZXJFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5kYXRlVGltZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuc2VsZWN0RWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuc2VsZWN0RWxlbWVudC5uYXRpdmVFbGVtZW50KSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQpIHtcclxuICAgICAgICAgIHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQuYmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRlVGltZVBpY2tlcikge1xyXG4gICAgICAgICAgdGhpcy5kYXRlVGltZVBpY2tlci5zZXRDdXJyZW50VmFsdWVBbmRDbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3VzdG9tUGFkZGluZyhpdGVtOiBhbnksIGk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAoIWkpIHtcclxuICAgICAgaWYgKCFpdGVtLmxldmVsKSB7XHJcbiAgICAgICAgcmV0dXJuICEhaXRlbS5jaGlsZHJlbiA/IDYgOiAyODtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5sZXZlbCAqIHRoaXMuaW5kZW50U2l6ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDY7XHJcbiAgfVxyXG5cclxuICBjaGlsZE9mKG5vZGU6IGFueSwgYW5jZXN0b3I6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGNoaWxkID0gbm9kZTtcclxuICAgIHdoaWxlIChjaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICBpZiAoY2hpbGQgPT09IGFuY2VzdG9yKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QgJiYgY2hpbGQuY2xhc3NMaXN0Lmxlbmd0aCA+IDAgJiYgY2hpbGQuY2xhc3NOYW1lICYmIHR5cGVvZiBjaGlsZC5jbGFzc05hbWUgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgJiYgY2hpbGQuY2xhc3NOYW1lLmluZGV4T2YoJ2Nkay1vdmVybGF5LXBhbmUnKSA+PSAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICBjb25zdCBub2RlID0gY2hpbGQuY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSAnQ01BQ1MtTU9EQUwnKSB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfTtcclxuICAgICAgY2hpbGQgPSBjaGlsZC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGUoJGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCRldmVudC5rZXkgPT09ICgnRW50ZXInIHx8ICdlbnRlcicpKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgZGF0YS5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICAgICAgdGhpcy5vbmVkaXQuZW1pdChkYXRhKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhW2luZGV4XS5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgdGhpcy5ub2RlT25FZGl0aW9uID0gZGF0YTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSBpbmRleDtcclxuICAgICAgfVxyXG4gICAgfSwgMzAwKVxyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGVOZ01vZGVsKGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSA9IG51bGwsIHByb3BlcnR5OiBhbnkgPSBudWxsLCBmaWVsZDogRmllbGQgPSBudWxsKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIGRhdGEuY21hY3NFZGl0ZWRQcm9wID0gcHJvcGVydHkgPyBwcm9wZXJ0eSA6IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIGlmIChmaWVsZCAmJiBmaWVsZC5tb2RlID09PSAndGFnc1NpbmdsZVNlbGVjdCcpIHtcclxuICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9IGRhdGFbZmllbGQucHJvcGVydHldLmxlbmd0aCA/IGRhdGFbZmllbGQucHJvcGVydHldWzBdIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KGRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YVtpbmRleF07XHJcbiAgICAgIGRhdGEuY21hY3NFZGl0ZWRQcm9wID0gcHJvcGVydHkgPyBwcm9wZXJ0eSA6IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIGlmIChmaWVsZCAmJiBmaWVsZC5tb2RlID09PSAndGFnc1NpbmdsZVNlbGVjdCcpIHtcclxuICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9IGRhdGFbZmllbGQucHJvcGVydHldLmxlbmd0aCA/IGRhdGFbZmllbGQucHJvcGVydHldWzBdIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVtpbmRleF0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNCb29sZWFuKGZpZWxkKSkge1xyXG4gICAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tib3hTZWxlY3QgJiYgIXRoaXMuZ2V0Tm9kZShkYXRhW3RoaXMuZmllbGRJRF0pLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICB0aGlzLm9uQ2hlY2tib3hUcmVlQ2hhbmdlKHRydWUsIGRhdGEsIHRoaXMubWFwT2ZFeHBhbmRlZERhdGFbZGF0YVt0aGlzLmZpZWxkSURdXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrYm94U2VsZWN0ICYmICF0aGlzLnNlbGVjdGlvbi5pc1NlbGVjdGVkKGRhdGFbdGhpcy5maWVsZElEXSkpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0VHJlZVNpbmdsZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUm93U2VsZWN0ZWQoZGF0YSkpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0Um93KG5ldyBNb3VzZUV2ZW50KCdjbGljaycpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICB0aGlzLnJvd09uRWRpdGlvbiA9IC0xO1xyXG4gICAgdGhpcy5ub2RlT25FZGl0aW9uID0gbnVsbDtcclxuICB9XHJcblxyXG4gIG5nTW9kZWxDaGFuZ2UoaW5kZXg6IG51bWJlciwgZGF0YTogYW55ID0gbnVsbCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICB0aGlzLm5vZGVPbkVkaXRpb24gPSBkYXRhO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJvd09uRWRpdGlvbiA9IGluZGV4O1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXgoaWQpOiBudW1iZXIge1xyXG4gICAgbGV0IGkgPSAtMTtcclxuICAgIGkgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBpZCk7XHJcbiAgICByZXR1cm4gaTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjaGVja2JveFRlbXBDYWNoZSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2hlY2tib3hUZW1wQ2FjaGUucHVzaCh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkID8gZmFsc2UgOiB0aGlzLmRhdGFbaV0uc2VsZWN0ZWQsXHJcbiAgICAgICAgZGF0YTogeyAuLi50aGlzLmRhdGFbaV0gfSxcclxuICAgICAgICBvcmRlcjogdGhpcy5kYXRhW2ldLnNlbGVjdGVkID8gdGhpcy5vcmRlcisrIDogLTFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUgPSBbLi4uY2hlY2tib3hUZW1wQ2FjaGVdO1xyXG4gICAgaWYgKHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkKSB7XHJcbiAgICAgIHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2JveENhY2hlVHJlZURhdGEoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnZlcnRFeHBhbmRUcmVlVG9MaXN0KHRoaXMuZGF0YSwgdGhpcy5jaGVja2JveENhY2hlKTtcclxuICB9XHJcblxyXG4gIGNsaWNrSHlwZXJsaW5rKGRhdGE6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5vbmNsaWNrSHlwZXJsaW5rLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0RXhwYW5kVHJlZVRvTGlzdChpdGVtOiBhbnksIHBsYWluTGlzdDogYW55W10pOiB2b2lkIHtcclxuICAgIGlmIChpc0FycmF5KGl0ZW0pKSB7XHJcbiAgICAgIGl0ZW0uZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50SW5DYWNoZSA9IHBsYWluTGlzdC5maW5kSW5kZXgoZWwgPT4gZWwuZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gZWxlbVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRJbkNhY2hlIDwgMCkge1xyXG4gICAgICAgICAgcGxhaW5MaXN0LnB1c2goe1xyXG4gICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIG9yZGVyOiAtMSxcclxuICAgICAgICAgICAgZGF0YTogeyAuLi5lbGVtIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsZW0uY2hpbGRyZW4gJiYgZWxlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnZlcnRFeHBhbmRUcmVlVG9MaXN0KGVsZW0uY2hpbGRyZW4sIHBsYWluTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRJbkNhY2hlID0gcGxhaW5MaXN0LmZpbmRJbmRleChlbCA9PiBlbC5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBpdGVtW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgICAgaWYgKGVsZW1lbnRJbkNhY2hlIDwgMCkge1xyXG4gICAgICAgIHBsYWluTGlzdC5wdXNoKHtcclxuICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgIG9yZGVyOiAtMSxcclxuICAgICAgICAgIGRhdGE6IHsgLi4uaXRlbSB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQnV0dG9uQ2xpY2soZmllbGQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5idXR0b25DbGljay5lbWl0KGZpZWxkKTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hDaGFuZ2UoJGV2ZW50LCBkYXRhKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5nZXRJbmRleChkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKV0ub3JkZXIgPSAkZXZlbnQgPyB0aGlzLm9yZGVyKysgOiAtMTtcclxuICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hDaGVja2JveFN0YXRlKG9uaW5pdCA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgaWYgKCFvbmluaXQpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChkYXRhU2VsZWN0ZWQubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0NoZWNrYm94U3RhdGUoKTogQ2hlY2tib3hTZWxlY3RbXSB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCA9PT0gdHJ1ZSkuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuYWxsQ2hlY2tlZCA9IChkYXRhU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAoZGF0YVNlbGVjdGVkLmxlbmd0aCA9PT0gdGhpcy5jaGVja2JveENhY2hlLmxlbmd0aCkpO1xyXG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPSBkYXRhU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAhdGhpcy5hbGxDaGVja2VkO1xyXG4gICAgcmV0dXJuIGRhdGFTZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICBvblJhdGVDaGFuZ2UoY291bnQ6IG51bWJlciwgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICBkYXRhW3RoaXMuY29uZmlnLmZpZWxkUmF0ZV0gPSBjb3VudDtcclxuICAgIHRoaXMucmF0ZUNoYW5nZS5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgb25SYXRlQ2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRzKCk6IEZpZWxkW10ge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmZpZWxkcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uaGlkZGVuID09PSB1bmRlZmluZWQgfHwgIWl0ZW0uaGlkZGVuKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hBbGxDaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHN0YXR1cztcclxuICAgICAgZWxlbWVudC5vcmRlciA9IC0xO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlzSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmICghdGhpcy5leGNsdXNpdmVTZWxlY3QpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCgoc3RhdHVzKSA/IHRoaXMuZGF0YSA6IFtdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRhdGFTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoKHN0YXR1cykgPyBkYXRhU2VsZWN0ZWQubWFwKGUgPT4gZS5kYXRhKSA6IFtdKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbChkYXRhOiBhbnksIGZpZWxkOiBGaWVsZCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0ICYmIGZpZWxkLnNlbGVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgY29uc3QgaXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQoaXRlbSA9PiBpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbVtmaWVsZC5zZWxlY3QudmFsdWVdID09PSBkYXRhW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICAgIHJlc3VsdCA9IChpdGVtICE9PSB1bmRlZmluZWQpID8gaXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdIDogJyc7XHJcbiAgICAgIGlmIChmaWVsZC5tb2RlID09PSAndGFnc1NpbmdsZVNlbGVjdCcgJiYgcmVzdWx0ID09PSAnJykge1xyXG4gICAgICAgIHJlc3VsdCA9IGRhdGFbZmllbGQucHJvcGVydHldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gIH1cclxuXHJcbiAgaXNTdHJpbmcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQucmVhZG9ubHkgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5yZWFkb25seTtcclxuICB9XHJcblxyXG4gIGlzTnVtYmVyKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgaXNOdWxsKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaXNCb29sZWFuKGZpZWxkOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gbnVsbCAmJiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgfVxyXG5cclxuICBpc09iamVjdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgKHZhbHVlKSA9PT0gJ29iamVjdCc7XHJcbiAgfVxyXG5cclxuICBpc0RhdGUoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gIH1cclxuXHJcbiAgaXNUaW1lKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVEZWZhdWx0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlQnV0dG9uKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkJ1dHRvbjtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUYWcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGFnO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRlbXBsYXRlUmVmKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZUh5cGVybGluayhmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5IeXBlcmxpbmsgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgaXNQaG9uZShmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlBob25lO1xyXG4gIH1cclxuXHJcbiAgaXNBdHRhY2htZW50KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuQXR0YWNobWVudDtcclxuICB9XHJcblxyXG4gIGlzVW5kZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaXNSb3dTZWxlY3RlZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICBjb25zdCBkYXRhU2VsZWN0ZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICByZXR1cm4gZGF0YVNlbGVjdGQuaW5kZXhPZihkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSAhPT0gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfb25DaGFuZ2VBdHRhY2htZW50cyhldmVudDphbnksaW5kZXg6IG51bWJlcixmaWVsZDphbnkpIHtcclxuICAgIHRoaXMuZGF0YVtpbmRleF1bZmllbGRdID0gZXZlbnQ7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQXR0YWNobWVudHMuZW1pdCh0aGlzLmRhdGFbaW5kZXhdKTtcclxuICB9XHJcblxyXG4gIF9vbmNsaWNrQ2hvb3NlRmlsZShpbmRleDogbnVtYmVyLGZpZWxkOmFueSl7XHJcbiAgICB0aGlzLm9uY2xpY2tDaG9vc2VGaWxlLmVtaXQoe3Jvdzp0aGlzLmRhdGFbaW5kZXhdLGluZGV4Q29sOmZpZWxkfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5oYXNDb29raWVzICYmIHRoaXMuZ2V0SW5kZXhDb29raWUoKSAmJiB0aGlzLmNvb2tpZXMuY2hlY2sodGhpcy5ncmlkSUQpKSB7XHJcbiAgICAgIGNvbnN0IHNhdmVkQ29uZmlnU3RyID0gdGhpcy5jb29raWVzLmdldCh0aGlzLmdyaWRJRCk7XHJcbiAgICAgIC8vIHJlc2V0IGV4cGlyYXRpb24gZGF0ZVxyXG4gICAgICB0aGlzLmNvb2tpZXMuc2V0KHRoaXMuZ3JpZElELCBzYXZlZENvbmZpZ1N0ciwgMzY1KTtcclxuXHJcbiAgICAgIC8vIHBhcnNlIGNvb2tpZSB2YWx1ZSB0byB0eXBlc2NyaXB0IGNvbnN0XHJcbiAgICAgIGNvbnN0IHNhdmVkQ29uZmlnID0gSlNPTi5wYXJzZSh0aGlzLmNvb2tpZXMuZ2V0KHRoaXMuZ3JpZElEKSkgYXMgR3JpZENvbmZpZztcclxuICAgICAgaWYgKHR5cGVvZiBzYXZlZENvbmZpZyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHNhdmVkQ29uZmlnO1xyXG4gICAgICAgIHRoaXMuY29uZmlnQ2hhbmdlLmVtaXQodGhpcy5jb25maWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmRpc2FibGVTZWxlY3RFdmVudE9uRXhwYW5kKCk7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlU2VsZWN0RXZlbnRPbkV4cGFuZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FudC10YWJsZS1yb3ctZXhwYW5kLWljb24nKTtcclxuICAgIGlmICghdGhpcy5pc051bGwoZXhwYW5kQnV0dG9uKSkge1xyXG4gICAgICBmb3IgKGNvbnN0IGIgb2YgQXJyYXkuZnJvbShleHBhbmRCdXR0b24pKSB7XHJcbiAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgkZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KCRldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGdldEluZGV4Q29va2llKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgICAvKmxldCBhbGxvd0luZGV4UGFnZUNvb2tpZSA9IGZhbHNlO1xyXG4gICAgbGV0IGNvbnNlbnRDb29raWUgPSB0aGlzLmNvb2tpZXMuZ2V0KCdPcHRhbm9uQ29uc2VudCcpO1xyXG4gICAgaWYgKGNvbnNlbnRDb29raWUgIT0gXCJcIikge1xyXG4gICAgICBsZXQgZ3JvdXBJbmRleCA9IGNvbnNlbnRDb29raWUuaW5kZXhPZignZ3JvdXBzPScpO1xyXG4gICAgICBsZXQgZ3JvdXBzID0gY29uc2VudENvb2tpZS5zdWJzdHJpbmcoZ3JvdXBJbmRleCk7IC8vd2lsbCByZXR1cm4gc29tZXRoaW5nbGlrZSBncm91cHM9QzAwMDI6MCxDMDAwMToxXHJcbiAgICAgIGxldCBmdW5jdGlvbmFsR3JvdXBJbmRleCA9IGdyb3Vwcy5pbmRleE9mKCdDMDAwOTonKTtcclxuICAgICAgaWYgKGZ1bmN0aW9uYWxHcm91cEluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlWYWx1ZSA9IGdyb3Vwcy5zdWJzdHJpbmcoZnVuY3Rpb25hbEdyb3VwSW5kZXggKyA2LCBmdW5jdGlvbmFsR3JvdXBJbmRleCArIDcpO1xyXG4gICAgICAgIGlmIChOdW1iZXIoY2F0ZWdvcnlWYWx1ZSkgPT09IDEpIHtcclxuICAgICAgICAgIGFsbG93SW5kZXhQYWdlQ29va2llID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhbGxvd0luZGV4UGFnZUNvb2tpZTsqL1xyXG4gIH1cclxuXHJcbiAgc2V0RmllbGRzRGVmYXVsdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5maWVsZHMpIHtcclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGZpZWxkLmVkaXRhYmxlID0gZmllbGQuZWRpdGFibGUgPT09IG51bGwgfHwgZmllbGQuZWRpdGFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmaWVsZC5lZGl0YWJsZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5ncmlkSUQpIHtcclxuICAgICAgdGhpcy5ncmlkSUQgPSB0aGlzLnV0aWxTZXJ2aWNlLnV1aWR2NCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0Q3VzdG9tVmFsaWRhdG9ycygpO1xyXG5cclxuICAgIHRoaXMuc2V0RmllbGRzRGVmYXVsdCgpO1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGFibGUnKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5jaGVja2JveFNlbGVjdCAmJiAhdGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrYm94U2VsZWN0ICYmIHRoaXMuZXhwYW5kYWJsZSAmJiB0aGlzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGVUcmVlRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hlY2tDaGVja2JveFN0YXRlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlICYmIHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHdoaWxlICh0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dQYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5leHBvcnRFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChjb25maWc6IEdyaWRFeHBDb25maWcpID0+IHtcclxuICAgICAgc3dpdGNoIChjb25maWcuZXhwb3J0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5QZGY6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvUGRmKGNvbmZpZyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuWHNseDpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9FeGNlbChjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlBuZzpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9QbmcoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5QZGZUcmVlOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUcmVlUGRmKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuWHNseFRyZWU6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRyZWVFeGNlbChjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qIENvbnZlcnQgdHJlZSB0byBsaXN0IGlmIGV4cGFuZGFibGUgKi9cclxuICAgIGlmICh0aGlzLmV4cGFuZGFibGUgJiYgdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhpcy5maWVsZElEID0gdGhpcy5jb25maWcuZmllbGRJZDtcclxuICAgICAgY29uc3QgY29lcmNlRGF0YSA9IHRoaXMuZGF0YSBhcyBhbnlbXTtcclxuICAgICAgY29lcmNlRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHRoaXMubWFwT2ZFeHBhbmRlZERhdGFbaXRlbVt0aGlzLmZpZWxkSURdXSA9IHRoaXMuY29udmVydFRyZWVUb0xpc3QoaXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0Q29tcGxldGVkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydENvbXBsZXRlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hlY2tTb3J0RXZlbnQoKTtcclxuICAgIHRoaXMuY2hlY2tSZXNpemVFdmVudCgpO1xyXG5cclxuICAgIC8vIERST1BET1dOIE1FTlUgQURWQU5DRUQgQ09ORklHVVJBVElPTlxyXG4gICAgdGhpcy5pc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IGZhbHNlO1xyXG5cclxuICB9XHJcblxyXG4gIGNoZWNrU29ydEV2ZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbnNvcnRvYnMucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuX29ucmVzaXplJCksXHJcbiAgICAgIGRlbGF5KDMwMCksXHJcbiAgICAgIHJlcGVhdCgpLFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICkuc3Vic2NyaWJlKChvYmo6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBmID0gdGhpcy5jb25maWcuZmllbGRzLmZpbmQoZWwgPT4gZWwucHJvcGVydHkgPT09IG9iai5zb3J0TmFtZSk7XHJcbiAgICAgIGYuc29ydE9yZGVyID0gb2JqLnNvcnRWYWx1ZTtcclxuICAgICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoeyBzb3J0TmFtZTogb2JqLnNvcnROYW1lLCBzb3J0VmFsdWU6IG9iai5zb3J0VmFsdWUgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrUmVzaXplRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9ucmVzaXplb2JzLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgKS5zdWJzY3JpYmUoKG9iajogeyBldmVudDogTnpSZXNpemVFdmVudCwgY29sOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCB9KSA9PiB7XHJcbiAgICAgIHRoaXMuY29uZmlnID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmNvbmZpZykpXHJcbiAgICAgIHRoaXMub25SZXNpemVFdnQob2JqLmV2ZW50LCBvYmouY29sLCBvYmouZmllbGQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgICB0aGlzLm1hcE9mRXhwYW5kZWREYXRhID0ge307XHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGUgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZVRyZWVEYXRhKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZmllbGRJRCA9IHRoaXMuY29uZmlnLmZpZWxkSWQ7XHJcbiAgICAgICAgY29uc3QgY29lcmNlRGF0YSA9IHRoaXMuZGF0YSBhcyBhbnlbXTtcclxuICAgICAgICBjb2VyY2VEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGlzLm1hcE9mRXhwYW5kZWREYXRhW2l0ZW1bdGhpcy5maWVsZElEXV0pIHtcclxuICAgICAgICAgICAgdGhpcy5tYXBPZkV4cGFuZGVkRGF0YVtpdGVtW3RoaXMuZmllbGRJRF1dID0gdGhpcy5jb252ZXJ0VHJlZVRvTGlzdChpdGVtKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSgpO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLnNldEZpZWxkc0RlZmF1bHQoKTtcclxuICAgICAgdGhpcy5zZXRDdXN0b21WYWxpZGF0b3JzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmRpc2FibGVTZWxlY3RFdmVudE9uRXhwYW5kKCk7XHJcbiAgfVxyXG5cclxuICAvKiBFeHBhbmRhYmxlIFJvd3MgKi9cclxuICBleHBvcnRUcmVlUGRmKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRvYyA9IG5ldyBqc1BERigpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IFtdO1xyXG4gICAgY29uc3Qgcm93cyA9IFtdO1xyXG5cclxuICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0KS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgY29sdW1ucy5wdXNoKGZpZWxkLmRpc3BsYXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgY29sdW1ucy5wdXNoKGZpZWxkLmRpc3BsYXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5leHBvcnRUcmVlVG9QZGZSZWMocm93cywgdGhpcy5kYXRhLCAwKTtcclxuXHJcbiAgICAvKmRvYy5hdXRvVGFibGUoe1xyXG4gICAgICB0aGVtZTogJ3N0cmlwZWQnLFxyXG4gICAgICBtYXJnaW46IHsgdG9wOiA1IH0sXHJcbiAgICAgIGJvZHk6IHJvd3MsXHJcbiAgICAgIGNvbHVtbnNcclxuICAgIH0pOyovXHJcblxyXG4gICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoJ0RELk1NLllZWVkuSEgubW0uc3MnKSArICdfJyArIGZpbGVOYW1lICsgJy5wZGYnO1xyXG4gICAgZG9jLnNhdmUoZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VHJlZVRvUGRmUmVjKHJvd3M6IGFueSwgZGF0YTogYW55LCBvZmZTZXRNYXJnaW4gPSAwKTogdm9pZCB7XHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBpdGVtVG9FeHBvcnQgPSBbXTtcclxuICAgICAgY29uc3QgY29lcmNlZEl0ZW0gPSBpdGVtIGFzIGFueTtcclxuICAgICAgbGV0IHBhcmVudFN0eWxlczogYW55ID0geyBjZWxsUGFkZGluZzogWzIsIDIsIDIsIDJdIH07XHJcblxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8XHJcbiAgICAgICAgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goKGZpZWxkLCBpZHgpID0+IHtcclxuXHJcbiAgICAgICAgICBwYXJlbnRTdHlsZXMgPSB7IGNlbGxQYWRkaW5nOiBbMiwgMiwgMiwgMl0gfTtcclxuICAgICAgICAgIGlmICghaWR4KSB7XHJcbiAgICAgICAgICAgIHBhcmVudFN0eWxlcy5jZWxsUGFkZGluZyA9IFsyLCAyLCAyLCAyICsgb2ZmU2V0TWFyZ2luXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoY29lcmNlZEl0ZW0uY2hpbGRyZW4gJiYgY29lcmNlZEl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHBhcmVudFN0eWxlcy5maWxsQ29sb3IgPSBbMTUzLCAyMDQsIDI1NV07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHsgY29udGVudDogaXRlbVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dC5leHBvcnRWYWx1ZSwgc3R5bGVzOiBwYXJlbnRTdHlsZXMgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGZpZWxkLmVkaXRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlNlbGVjdDpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goeyBjb250ZW50OiBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF0sIHN0eWxlczogcGFyZW50U3R5bGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuRGF0ZTpcclxuICAgICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHsgY29udGVudDogdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oaXRlbVtmaWVsZC5wcm9wZXJ0eV0sICdNTU1NIGRkIHl5eXknKSwgc3R5bGVzOiBwYXJlbnRTdHlsZXMgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5UaW1lOlxyXG4gICAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goeyBjb250ZW50OiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShpdGVtW2ZpZWxkLnByb3BlcnR5XSwgJ2g6bW0gYScpLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7IGNvbnRlbnQ6IGl0ZW1bZmllbGQucHJvcGVydHldLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgcm93cy5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcbiAgICAgIGlmIChjb2VyY2VkSXRlbS5jaGlsZHJlbiAmJiBjb2VyY2VkSXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmV4cG9ydFRyZWVUb1BkZlJlYyhyb3dzLCBjb2VyY2VkSXRlbS5jaGlsZHJlbiwgNSArIG9mZlNldE1hcmdpbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRUcmVlVG9MaXN0KHJvb3Q6IGFueSk6IGFueVtdIHtcclxuICAgIGNvbnN0IHN0YWNrOiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgYXJyYXk6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBoYXNoTWFwID0ge307XHJcbiAgICBzdGFjay5wdXNoKHsgLi4ucm9vdCwgbGV2ZWw6IDAsIGV4cGFuZDogdGhpcy5leHBhbmRBbGwgPyB0aGlzLmV4cGFuZEFsbCA6IHJvb3QuZXhwYW5kIH0pO1xyXG5cclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGggIT09IDApIHtcclxuICAgICAgY29uc3Qgbm9kZSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLCBoYXNoTWFwLCBhcnJheSk7XHJcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIHN0YWNrLnB1c2goXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAuLi5ub2RlLmNoaWxkcmVuW2ldLFxyXG4gICAgICAgICAgICAgIGxldmVsOiBub2RlLmxldmVsICsgMSxcclxuICAgICAgICAgICAgICBleHBhbmQ6IHRoaXMuZXhwYW5kQWxsID8gdGhpcy5leHBhbmRBbGwgOiBub2RlLmNoaWxkcmVuW2ldLmV4cGFuZCxcclxuICAgICAgICAgICAgICBwYXJlbnQ6IG5vZGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgdmlzaXROb2RlKG5vZGU6IGFueSwgaGFzaE1hcDogYW55LCBhcnJheTogYW55W10pOiB2b2lkIHtcclxuICAgIGlmICghaGFzaE1hcFtub2RlW3RoaXMuZmllbGRJRF1dKSB7XHJcbiAgICAgIGhhc2hNYXBbbm9kZVt0aGlzLmZpZWxkSURdXSA9IHRydWU7XHJcbiAgICAgIGFycmF5LnB1c2gobm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBFeHBhbmRDb2xsYXBzZShhcnJheTogYW55W10sIGRhdGE6IGFueSwgJGV2ZW50OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoJGV2ZW50ID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmNvbGxhcHNlQ2hpbGRyZW4oYXJyYXksIGRhdGEsICRldmVudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uUm93RXhwYW5kQ29sbGFwc2UuZW1pdCh7IGRhdGEsICRldmVudCB9KTtcclxuICB9XHJcbiAgY29sbGFwc2VDaGlsZHJlbihhcnJheTogYW55W10sIGRhdGE6IGFueSwgJGV2ZW50OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoJGV2ZW50ID09PSBmYWxzZSkge1xyXG4gICAgICBpZiAoZGF0YS5jaGlsZHJlbikge1xyXG4gICAgICAgIGRhdGEuY2hpbGRyZW4uZm9yRWFjaChkID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGFycmF5LmZpbmQoYSA9PiBhW3RoaXMuZmllbGRJRF0gPT09IGRbdGhpcy5maWVsZElEXSkhO1xyXG4gICAgICAgICAgdGFyZ2V0LmV4cGFuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5jb2xsYXBzZUNoaWxkcmVuKGFycmF5LCB0YXJnZXQsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hUcmVlQ2hhbmdlKCRldmVudCwgaXRlbSwgc3VidHJlZSA9IG51bGwpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5leGNsdXNpdmVTZWxlY3QpIHtcclxuICAgICAgdGhpcy51cGRhdGVUcmVlQ2hlY2tib3hlcygkZXZlbnQsIGl0ZW0pO1xyXG4gICAgICBjb25zdCBjb2VyY2VkRWxlbSA9IHN1YnRyZWUuZmluZChlID0+IGVbdGhpcy5maWVsZElEXSA9PT0gaXRlbVt0aGlzLmZpZWxkSURdKTtcclxuICAgICAgaWYgKGNvZXJjZWRFbGVtLnBhcmVudCkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFN1YlRyZWVDaGVja2JveGVzKGNvZXJjZWRFbGVtLnBhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUcmVlQ2hlY2tib3hlcygkZXZlbnQ6IGJvb2xlYW4sIGFycmF5OiBhbnkpOiB2b2lkIHtcclxuICAgIGFycmF5LnNlbGVjdGVkID0gJGV2ZW50O1xyXG4gICAgY29uc3Qgbm9kZTogQ2hlY2tib3hTZWxlY3QgPSB0aGlzLmdldE5vZGUoYXJyYXlbdGhpcy5maWVsZElEXSk7XHJcbiAgICBub2RlLnNlbGVjdGVkID0gJGV2ZW50O1xyXG4gICAgbm9kZS5vcmRlciA9ICRldmVudCA/IHRoaXMub3JkZXIrKyA6IC0xO1xyXG4gICAgaWYgKGFycmF5LmNoaWxkcmVuISEpIHtcclxuICAgICAgYXJyYXkuY2hpbGRyZW4uZm9yRWFjaCgoZDogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUcmVlQ2hlY2tib3hlcygkZXZlbnQsIGQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZnJlc2hTdWJUcmVlQ2hlY2tib3hlcyhzdWJ0cmVlKTogdm9pZCB7XHJcbiAgICBpZiAoc3VidHJlZS5jaGlsZHJlbiEhKSB7XHJcbiAgICAgIGxldCBjaGVja2VkID0gMDtcclxuICAgICAgbGV0IGluZGV0ZXJtaW5hdGUgPSAwO1xyXG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHN1YnRyZWUuY2hpbGRyZW4pIHtcclxuICAgICAgICBjb25zdCBub2RlOiBDaGVja2JveFNlbGVjdCA9IHRoaXMuZ2V0Tm9kZShjaGlsZFt0aGlzLmZpZWxkSURdKTtcclxuICAgICAgICBpZiAobm9kZS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgY2hlY2tlZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9kZS5zZWxlY3RlZCA9PT0gLTEpIHtcclxuICAgICAgICAgIGluZGV0ZXJtaW5hdGUrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgbm9kZTogQ2hlY2tib3hTZWxlY3QgPSB0aGlzLmdldE5vZGUoc3VidHJlZVt0aGlzLmZpZWxkSURdKTtcclxuICAgICAgbm9kZS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAoaW5kZXRlcm1pbmF0ZSB8fCAoY2hlY2tlZCA8IHN1YnRyZWUuY2hpbGRyZW4ubGVuZ3RoICYmIGNoZWNrZWQpKSB7XHJcbiAgICAgICAgbm9kZS5zZWxlY3RlZCA9IC0xO1xyXG4gICAgICB9IGVsc2UgaWYgKGNoZWNrZWQgPT09IHN1YnRyZWUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgbm9kZS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpZiAoc3VidHJlZS5wYXJlbnQpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoU3ViVHJlZUNoZWNrYm94ZXMoc3VidHJlZS5wYXJlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Tm9kZShrZXk6IGFueSk6IENoZWNrYm94U2VsZWN0IHtcclxuICAgIGNvbnN0IHRlc3QgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKG4gPT4gbi5kYXRhW3RoaXMuZmllbGRJRF0gPT09IGtleSk7XHJcbiAgICByZXR1cm4gdGVzdCA/IHRlc3RbMF0gOiB7IHNlbGVjdGVkOiBmYWxzZSwgZGF0YTogbnVsbCB9O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VG9QbmcoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0VGFibGUoJ3BuZycsIGZpbGVOYW1lLCB0aGlzLmdyaWRJRCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb0V4Y2VsKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCBkYXRhVG9FeHBvcnQ6IGFueVtdID0gW107XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IHt9O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoIWZpZWxkLmhpZGRlbikge1xyXG4gICAgICAgICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RJdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChvcHRpb24gPT4gb3B0aW9uW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldLmNvbnRleHQuZXhwb3J0VmFsdWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBpdGVtW2ZpZWxkLnByb3BlcnR5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGF0YVRvRXhwb3J0LnB1c2goaXRlbVRvRXhwb3J0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KCdERC5NTS5ZWVlZLkhILm1tLnNzJykgKyAnXycgKyBmaWxlTmFtZTtcclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydEFzRXhjZWxGaWxlKGRhdGFUb0V4cG9ydCwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gIH1cclxuXHJcbiAgLyogRXhwYW5kYWJsZSBSb3dzICovXHJcbiAgZXhwb3J0VHJlZUV4Y2VsKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRhdGFUb0V4cG9ydDogYW55W10gPSBbXTtcclxuICAgIHRoaXMuZXhwb3J0VHJlZUV4Y2VsUmVjKHRoaXMuZGF0YSwgZGF0YVRvRXhwb3J0KTtcclxuICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KCdERC5NTS5ZWVlZLkhILm1tLnNzJykgKyAnXycgKyBmaWxlTmFtZTtcclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydEFzRXhjZWxGaWxlKGRhdGFUb0V4cG9ydCwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VHJlZUV4Y2VsUmVjKGRhdGE6IGFueSwgZGF0YVRvRXhwb3J0OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IHt9O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoIWZpZWxkLmhpZGRlbikge1xyXG4gICAgICAgICAgaWYgKGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBpdGVtW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0LmV4cG9ydFZhbHVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0SXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRhdGFUb0V4cG9ydC5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcblxyXG4gICAgICBjb25zdCBjb2VyY2VkSXRlbSA9IGl0ZW0gYXMgYW55O1xyXG4gICAgICBpZiAoY29lcmNlZEl0ZW0uY2hpbGRyZW4gJiYgY29lcmNlZEl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5leHBvcnRUcmVlRXhjZWxSZWMoY29lcmNlZEl0ZW0uY2hpbGRyZW4sIGRhdGFUb0V4cG9ydCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBleHBvcnRUb1BkZihjb25maWcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBpZiAoIWNvbmZpZy51c2VWZXJzaW9uMikge1xyXG4gICAgICB0aGlzLnV0aWxTZXJ2aWNlLmV4cG9ydFRhYmxlKFxyXG4gICAgICAgICdwZGYnLFxyXG4gICAgICAgIGNvbmZpZy5maWxlTmFtZSxcclxuICAgICAgICB0aGlzLmdyaWRJRCxcclxuICAgICAgICBjb25maWcuZXhwb3J0Q29tcGFueU5hbWUsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFVzZXJOYW1lLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRUaXRsZSxcclxuICAgICAgICBjb25maWcuZXhwb3J0Q29tcGFueUxvZ29VcmwsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFRhYmxlQ3VzdG9tV2lkdGgsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBleHBvcnRDb25maWcgPSB7XHJcbiAgICAgICAgY2hlY2tib3hTZWxlY3Q6IHRoaXMuY2hlY2tib3hTZWxlY3QsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtczogdGhpcy5jaGVja2JveFNlbGVjdCA/XHJcbiAgICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSA6IFtdLFxyXG4gICAgICAgIGZpbGVOYW1lOiBjb25maWcuZmlsZU5hbWUsXHJcbiAgICAgICAgZGF0ZVBpcGU6IHRoaXMuZGF0ZVBpcGUsXHJcbiAgICAgICAgZGF0YTogdGhpcy5kYXRhLFxyXG4gICAgICAgIGVsZW1JRDogdGhpcy5ncmlkSUQsXHJcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcclxuICAgICAgICBjb2x1bW5TdHlsZXM6IGNvbmZpZy5jb2x1bW5TdHlsZXMsXHJcbiAgICAgICAgZXhwb3J0Q29tcGFueU5hbWU6IGNvbmZpZy5leHBvcnRDb21wYW55TmFtZSxcclxuICAgICAgICBleHBvcnRVc2VyTmFtZTogY29uZmlnLmV4cG9ydFVzZXJOYW1lLFxyXG4gICAgICAgIGV4cG9ydFRpdGxlOiBjb25maWcuZXhwb3J0VGl0bGUsXHJcbiAgICAgICAgZXhwb3J0Q29tcGFueUxvZ29Vcmw6IGNvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybCA/IGNvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybCA6ICdhc3NldHMvUFRvQl9sb2dvLnBuZycsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0VGFibGV2MihcclxuICAgICAgICBleHBvcnRDb25maWdcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBjbGlja1JvdyhldmVudDogTW91c2VFdmVudCwgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrcysrO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICBpZiAodGhpcy5jbGlja3MgPT09IDEpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdFJvdyhldmVudCwgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID4gMSkge1xyXG4gICAgICAgIHRoaXMuZGJsQ2xpY2tSb3coZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbGlja3MgPSAwO1xyXG4gICAgfSwgMzAwKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhldmVudDogTW91c2VFdmVudCwgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICAgIC8qIEdldCBpbmRleCBvZiBzZWxlY3Rpb24gKi9cclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja2JveENhY2hlLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tib3hTZWxlY3QpIHtcclxuICAgICAgaWYgKGV2ZW50ICYmICh0b0Jvb2xlYW4oZXZlbnQuY3RybEtleSkgfHwgdG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSkpIHtcclxuICAgICAgICAvKiBTaGlmdCBTZWxlY3Rpb24gKi9cclxuICAgICAgICBpZiAodG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RNdWx0aXBsZShpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0aW9uKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFNlbGVjdCBlbGVtZW50ICovXHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkID0gZXZlbnQgJiYgdG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSA/IHRydWUgOiAhdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZDtcclxuICAgICAgICAvKiBTYXZlIGxhc3QgaW5kZXggc2VsZWN0ZWQgKi9cclxuICAgICAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPyBpbmRleCA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKTtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5vcmRlciA9IHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPyB0aGlzLm9yZGVyKysgOiAtMTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChzZWxlY3RlZEl0ZW1zLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGEpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGlvbihkYXRhKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCAmJiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gIT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pXHJcbiAgICAgIC5mb3JFYWNoKGVsZW0gPT4geyBlbGVtLnNlbGVjdGVkID0gZmFsc2U7IGVsZW0ub3JkZXIgPSAtMSB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdE11bHRpcGxlKGN1cnJlbnRJZHgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxhc3RJZHhTZWxlY3RlZCAhPT0gbnVsbCkge1xyXG4gICAgICB3aGlsZSAoY3VycmVudElkeCAhPT0gdGhpcy5sYXN0SWR4U2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5sYXN0SWR4U2VsZWN0ZWRdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5sYXN0SWR4U2VsZWN0ZWRdLm9yZGVyID0gdGhpcy5vcmRlcisrO1xyXG4gICAgICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gY3VycmVudElkeCA+IHRoaXMubGFzdElkeFNlbGVjdGVkID8gdGhpcy5sYXN0SWR4U2VsZWN0ZWQgKyAxIDogdGhpcy5sYXN0SWR4U2VsZWN0ZWQgLSAxO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbY3VycmVudElkeF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbY3VycmVudElkeF0ub3JkZXIgPSB0aGlzLm9yZGVyKys7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IGN1cnJlbnRJZHg7XHJcbiAgfVxyXG5cclxuICBkYmxDbGlja1JvdyhkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25kbGNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgdGFwSGFuZGxlcigkZXZlbnQsIGRhdGEpOiB2b2lkIHtcclxuICAgIHRoaXMudGFwQ291bnQgKz0gMTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy50YXBDb3VudCA9PT0gMSkge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuY2xpY2tSb3cobnVsbCwgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50YXBDb3VudCA9IDA7XHJcbiAgICB9LCA2MDApO1xyXG4gICAgaWYgKHRoaXMudGFwQ291bnQgPiAxKSB7XHJcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmRibENsaWNrUm93KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNsaWNrQm9vbGVhbkNlbGwoZGF0YTogYW55LCBpZDogYW55LCBmaWVsZDogRmllbGQsIGluZGV4OiBudW1iZXIsICRldmVudDogbnVsbCk6IHZvaWQge1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0KCRldmVudCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pbkxpbmVFZGl0ICYmIGZpZWxkLmVkaXRhYmxlKSB7XHJcbiAgICAgIGlmIChkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gbnVsbCB8fCBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGFbZmllbGQucHJvcGVydHldID0gKGRhdGFbZmllbGQucHJvcGVydHldID09PSBmYWxzZSB8fCBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gJ2ZhbHNlJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbmRFZGl0TW9kZU5nTW9kZWwoaW5kZXgsIGRhdGEsIGZpZWxkLnByb3BlcnR5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dWaWV3TW9kZVRwbChmaWVsZCwgaXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmlzTnVsbChpdGVtLmhpZGRlbkZpZWxkcylcclxuICAgICAgJiYgaXRlbS5oaWRkZW5GaWVsZHMuZmlsdGVyKHggPT4geCA9PT0gZmllbGQucHJvcGVydHkpLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgKCh0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgIXRoaXMuaW5MaW5lRWRpdCkgfHxcclxuICAgICAgKCF0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgKHRoaXMuZWRpdElkICE9PSBpdGVtW3RoaXMuY29uZmlnLmZpZWxkSWRdIHx8XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSAhPT0gZmllbGQucHJvcGVydHkgfHwgZmllbGQuZWRpdGFibGUgPT09IGZhbHNlKSkpO1xyXG4gIH1cclxuXHJcbiAgc2hvd1ZpZXdNb2RlVHBsVHJlZShmaWVsZCwgZGF0YSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmlzTnVsbChkYXRhLmhpZGRlbkZpZWxkcylcclxuICAgICAgJiYgZGF0YS5oaWRkZW5GaWVsZHMuZmlsdGVyKHggPT4geCA9PT0gZmllbGQucHJvcGVydHkpLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgKCh0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgIXRoaXMuaW5MaW5lRWRpdCkgfHxcclxuICAgICAgKCF0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgKHRoaXMuZWRpdElkICE9PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdIHx8XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSAhPT0gZmllbGQucHJvcGVydHkgfHwgZmllbGQuZWRpdGFibGUgPT09IGZhbHNlKSkpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0VkaXRUcGwoaXRlbSwgZmllbGQpOiBhbnkge1xyXG4gICAgaWYgKCF0aGlzLmlzTnVsbChpdGVtLmhpZGRlbkZpZWxkcylcclxuICAgICAgJiYgaXRlbS5oaWRkZW5GaWVsZHMuZmlsdGVyKHggPT4geCA9PT0gZmllbGQucHJvcGVydHkpLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgKCh0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgdGhpcy5pbkxpbmVFZGl0ICYmXHJcbiAgICAgIChmaWVsZC5lZGl0YWJsZSB8fCBmaWVsZC5lZGl0YWJsZSA9PT0gdW5kZWZpbmVkKSkgfHxcclxuICAgICAgKCF0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgdGhpcy5lZGl0SWQgPT09IGl0ZW1bdGhpcy5jb25maWcuZmllbGRJZF0gJiZcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiAoZmllbGQuZWRpdGFibGUgfHwgZmllbGQuZWRpdGFibGUgPT09IHVuZGVmaW5lZCkpKTtcclxuICB9XHJcblxyXG4gIHNob3dFZGl0VHBsVHJlZShkYXRhLCBmaWVsZCk6IGFueSB7XHJcbiAgICBpZiAoIXRoaXMuaXNOdWxsKGRhdGEuaGlkZGVuRmllbGRzKVxyXG4gICAgICAmJiBkYXRhLmhpZGRlbkZpZWxkcy5maWx0ZXIoeCA9PiB4ID09PSBmaWVsZC5wcm9wZXJ0eSkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiAoKHRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiB0aGlzLmluTGluZUVkaXQgJiYgKGZpZWxkLmVkaXRhYmxlIHx8IGZpZWxkLmVkaXRhYmxlID09PSB1bmRlZmluZWQpKSB8fFxyXG4gICAgICAoIXRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiB0aGlzLmVkaXRJZCA9PT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSAmJlxyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIChmaWVsZC5lZGl0YWJsZSB8fCBmaWVsZC5lZGl0YWJsZSA9PT0gdW5kZWZpbmVkKSkpO1xyXG4gIH1cclxuXHJcbiAgZW1pdE9uRWRpdEV2ZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucm93T25FZGl0aW9uID49IDApIHtcclxuICAgICAgdGhpcy5kYXRhW3RoaXMucm93T25FZGl0aW9uXS5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVt0aGlzLnJvd09uRWRpdGlvbl0pO1xyXG4gICAgICB0aGlzLnJvd09uRWRpdGlvbiA9IC0xO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ub2RlT25FZGl0aW9uKSB7XHJcbiAgICAgIHRoaXMubm9kZU9uRWRpdGlvbi5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMubm9kZU9uRWRpdGlvbik7XHJcbiAgICAgIHRoaXMubm9kZU9uRWRpdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc01hcChmaWVsZDogRmllbGQpOiBhbnkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW2BjbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoYF06IHRoaXMubG9ncyxcclxuICAgICAgW2BjbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRgXTogdGhpcy5sb2dzLFxyXG4gICAgICBbYCR7ZmllbGQubmdDbGFzc31gXTogZmllbGQubmdDbGFzcyAmJiBmaWVsZC5uZ0NsYXNzLmxlbmd0aFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldEN1c3RvbUNsYXNzKGZpZWxkOiBGaWVsZCk6IGFueSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbYGNtYWNzLWNvbXBhY3QtdGFibGUtY2VsbC0ke2ZpZWxkLnByb3BlcnR5fWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0TWF4V2lkdGgoZmllbGQ6IEZpZWxkLCBpdGVtOiBhbnksIGk6IG51bWJlcik6IHN0cmluZyB7XHJcblxyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiAhaSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluTGluZUVkaXQgPyBgY2FsYygxMDAlIC0gMTdweClgIDogYGNhbGMoMTAwJSAtICR7dGhpcy5nZXRNYXhXaWR0aEZpZWxkVmlld01vZGUoZmllbGQsIGkpfSlgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluTGluZUVkaXQgPyBgY2FsYygxMDAlIC0gMTdweClgIDogYGNhbGMoMTAwJSAtICR7dGhpcy5nZXRNYXhXaWR0aEZpZWxkVmlld01vZGUoZmllbGQsIGkpfSlgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaW5MaW5lRWRpdCA/IGBjYWxjKDEwMCUgLSAxN3B4KWAgOiBgY2FsYygxMDAlIC0gJHt0aGlzLmdldE1heFdpZHRoRmllbGRWaWV3TW9kZShmaWVsZCwgaSl9KWA7XHJcbiAgfVxyXG5cclxuICBnZXRNYXhXaWR0aEZpZWxkVmlld01vZGUoZmllbGQ6IEZpZWxkLCBpOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCB8fFxyXG4gICAgICBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlIHx8XHJcbiAgICAgIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlRpbWUgfHxcclxuICAgICAgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiBgMThweGA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJzBweCc7XHJcbiAgfVxyXG5cclxuICBnZXRTdGlja3lXaWR0aChwb3NpdGlvbik6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRoaXMuc2Nyb2xsLngpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBsZXQgd2lkdGggPSAwO1xyXG4gICAgaWYgKHBvc2l0aW9uID09PSAnc21hcnRUYWJsZScpIHtcclxuICAgICAgcmV0dXJuIHdpZHRoICsgJ3B4JztcclxuICAgIH1cclxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ2RyYWdnYWJsZScpIHtcclxuICAgICAgd2lkdGggPSB0aGlzLnNtYXJ0VGFibGUgPyA0MCA6IDA7XHJcbiAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgICBpZiAocG9zaXRpb24gPT09ICdjaGVja2JveFNlbGVjdCcpIHtcclxuICAgICAgaWYgKHRoaXMuc21hcnRUYWJsZSkge1xyXG4gICAgICAgIHdpZHRoICs9IDQwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZSkge1xyXG4gICAgICAgIHdpZHRoICs9IDQwO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTdGlja3lXaWR0aFJpZ2h0KHBvc2l0aW9uKTogc3RyaW5nIHtcclxuICAgIGlmICghdGhpcy5zY3JvbGwueCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGxldCB3aWR0aCA9IDA7XHJcbiAgICBpZiAocG9zaXRpb24gPT09ICdzbWFydFRhYmxlJykge1xyXG4gICAgICByZXR1cm4gd2lkdGggKyAncHgnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZXh0cmEpIHtcclxuICAgICAgaWYgKHRoaXMuc21hcnRUYWJsZSkge1xyXG4gICAgICAgIHdpZHRoICs9IDQwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ2V4dHJhJykge1xyXG4gICAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRhYmxlQ29tcG9uZW50KCk6IE56VGFibGVDb21wb25lbnQ8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRhYmxlQ29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtRGF0ZShkYXRlKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG0gPSBtb21lbnQoZGF0ZSk7XHJcbiAgICBpZiAobS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlO1xyXG4gICAgICAgIG0ubG9jYWxlKGxvY2FsZSk7XHJcbiAgICAgICAgcmV0dXJuIG0uZm9ybWF0KGxvY2FsZSA9PT0gJ2RlJyA/ICdERC5NTS5ZWVlZJyA6IGxvY2FsZSA9PT0gJ2phJyA/ICdZWVlZ5bm0TeaciETml6UnIDogJ01NL0REL1lZWVknKTtcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxufVxyXG5cclxuICBzZWxlY3RUcmVlU2luZ2xlKGl0ZW0pOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5jaGVja2JveFNlbGVjdCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbi50b2dnbGUoaXRlbVt0aGlzLmZpZWxkSURdKTtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmlzU2VsZWN0ZWQoaXRlbVt0aGlzLmZpZWxkSURdKSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoW2l0ZW1dKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KFtdKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKiogRFJPUERPV04gTUVOVSBSRUxBVEVEIENPREUgKi9cclxuXHJcblxyXG59XHJcblxyXG5cclxuIiwiPGRpdiBpZD1cInt7Z3JpZElEfX1cIj5cclxuICA8bnotdGFibGUgI2dyaWRDb21wb25lbnQgW256RGF0YV09XCJkYXRhXCIgW256U2hvd1RvdGFsXT1cInNob3dUb3RhbFwiIFtuelBhZ2VTaXplT3B0aW9uc109XCJwYWdlU2l6ZU9wdGlvbnNcIlxyXG4gICAgW256VmlydHVhbEl0ZW1TaXplXT1cInZpcnR1YWxJdGVtU2l6ZVwiIFtuekxvYWRpbmdEZWxheV09XCJsb2FkaW5nRGVsYXlcIiBbbnpWaXJ0dWFsTWF4QnVmZmVyUHhdPVwidmlydHVhbE1heEJ1ZmZlclB4XCJcclxuICAgIFtuekxvYWRpbmdJbmRpY2F0b3JdPVwibG9hZGluZ0luZGljYXRvclwiIFtuelRvdGFsXT1cInRvdGFsXCIgW256VGl0bGVdPVwidGl0bGVcIiBbbnpGb290ZXJdPVwiZm9vdGVyXCJcclxuICAgIFtuek5vUmVzdWx0XT1cIm5vUmVzdWx0XCIgW256V2lkdGhDb25maWddPVwid2lkdGhDb25maWdcIiBbbnpQYWdlSW5kZXhdPVwicGFnZUluZGV4XCIgW256UGFnZVNpemVdPVwicGFnZVNpemVcIlxyXG4gICAgW256UGFnaW5hdGlvblBvc2l0aW9uXT1cInBhZ2luYXRpb25Qb3NpdGlvblwiIFtuelNjcm9sbF09XCJzY3JvbGxcIiBbbnpGcm9udFBhZ2luYXRpb25dPVwiZnJvbnRQYWdpbmF0aW9uXCJcclxuICAgIFtuelRlbXBsYXRlTW9kZV09XCJ0ZW1wbGF0ZU1vZGVcIiBbbnpTaG93UGFnaW5hdGlvbl09XCJzaG93UGFnaW5hdGlvblwiIFtuekxvYWRpbmddPVwibG9hZGluZ1wiXHJcbiAgICBbbnpTaG93U2l6ZUNoYW5nZXJdPVwic2hvd1NpemVDaGFuZ2VyXCIgW256SGlkZU9uU2luZ2xlUGFnZV09XCJoaWRlT25TaW5nbGVQYWdlXCIgW256U2hvd1F1aWNrSnVtcGVyXT1cInNob3dRdWlja0p1bXBlclwiXHJcbiAgICBbbnpTaW1wbGVdPVwic2ltcGxlXCIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZXhwYW5kYWJsZV09XCJleHBhbmRhYmxlXCJcclxuICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXNjcm9sbGFibGUteF09XCJzY3JvbGwueCEhXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc2Nyb2xsYWJsZS15XT1cInNjcm9sbC55ISFcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZW1wdHktdGFibGVdPVwiIWRhdGEubGVuZ3RoXCI+XHJcbiAgICA8dGhlYWQgKm5nSWY9XCIhZGF0YVRhYmxlXCI+XHJcbiAgICAgIDx0ciBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1oZWFkZXItbG9nc109XCJsb2dzXCI+XHJcblxyXG4gICAgICAgIDx0aCAqbmdJZj1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdCAmJiBjb25maWcgJiYgY29uZmlnLmZpZWxkcyAmJiBjb25maWcuZmllbGRzLmxlbmd0aFwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCIgbnpXaWR0aD1cIjQwcHhcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIiBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdzbWFydFRhYmxlJylcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1hZGQgY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC1hY3Rpb24taGVhZGVyXCI+XHJcbiAgICAgICAgICA8aSAqbmdJZj1cIiFoaWRlQnV0dG9uc1wiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctYWRkLWljb24gaWNvblVJTGFyZ2UtTmV3XCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtYWRkLXJvdy1pY29uLXZpc2libGVdPVwiIWdyaWRDb21wb25lbnQuZGF0YS5sZW5ndGhcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiYWRkUm93KC0xKVwiPjwvaT5cclxuICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICA8dGggW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGhdPVwibG9nc1wiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9nc1wiXHJcbiAgICAgICAgICAqbmdJZj1cImRyYWdnYWJsZVwiIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2RyYWdnYWJsZScpXCIgbnpXaWR0aD1cIjQwcHhcIiBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCInNDBweCdcIj5cclxuICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICA8dGggW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGhdPVwibG9nc1wiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9nc1wiXHJcbiAgICAgICAgICAqbmdJZj1cImNoZWNrYm94U2VsZWN0XCIgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnY2hlY2tib3hTZWxlY3QnKVwiIG56V2lkdGg9XCIzMHB4XCIgbnpMZWZ0PVwiMHB4XCJcclxuICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInMzBweCdcIiBbc3R5bGUubWluV2lkdGhdPVwiJzMwcHgnXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJzZWxlY3RlZFwiIFtpbmRldGVybWluYXRlXT1cImlzSW5kZXRlcm1pbmF0ZVwiXHJcbiAgICAgICAgICAgIChjaGVja2VkQ2hhbmdlKT1vbkNoZWNrYm94QWxsQ2hhbmdlKCRldmVudCk+PC9sYWJlbD5cclxuICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBnZXRGaWVsZHMoKTsgaW5kZXggYXMgZmlcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmllbGQuY3VzdG9tRmlsdGVyOyBlbHNlIHRoV2l0aEZpbHRlcnNcIj5cclxuICAgICAgICAgICAgPHRoIFtuelNob3dTb3J0XT1cImZpZWxkLnNob3dTb3J0XCIgW256U2hvd0ZpbHRlcl09XCJmaWVsZC5zaG93RmlsdGVyXCJcclxuICAgICAgICAgICAgICBbbnpGaWx0ZXJzXT1cImZpZWxkLmZpbHRlcnMhISA/IGZpZWxkLmZpbHRlcnMgOiBbXVwiIFtuekZpbHRlck11bHRpcGxlXT1cImZpZWxkLmZpbHRlck11bHRpcGxlXCJcclxuICAgICAgICAgICAgICAobnpGaWx0ZXJDaGFuZ2UpPVwiZmlsdGVyKCRldmVudCwgZmllbGQucHJvcGVydHkpXCIgYXR0ci5pZD1cInt7Z3JpZElEfX0tY29sdW1uLXt7Zml9fVwiIG56LXJlc2l6YWJsZVxyXG4gICAgICAgICAgICAgIFtuekRpc2FibGVkXT1cIiFmaWVsZC5yZXNpemFibGVcIiBuekJvdW5kcz1cIndpbmRvd1wiIFtuek1pbldpZHRoXT1cImZpZWxkLm1pbldpZHRoID8gZmllbGQubWluV2lkdGggOiAxMDBcIlxyXG4gICAgICAgICAgICAgIFtuek1heFdpZHRoXT1cImZpZWxkLm1heFdpZHRoID8gZmllbGQubWF4V2lkdGggOiA1MDBcIiBuelByZXZpZXdcclxuICAgICAgICAgICAgICAobnpSZXNpemVFbmQpPVwib25SZXNpemUoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSwgZmllbGQpXCIgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NNYXAoZmllbGQpXCJcclxuICAgICAgICAgICAgICBbKG56U29ydE9yZGVyKV09XCJmaWVsZC5zaG93U29ydCA/IGZpZWxkLnNvcnRPcmRlciA6IGRlZmF1bHRTb3J0T3JkZXJcIlxyXG4gICAgICAgICAgICAgIChuelNvcnRPcmRlckNoYW5nZSk9XCJzb3J0KCRldmVudCwgZmllbGQucHJvcGVydHkpXCIgW256V2lkdGhdPVwiZmllbGQud2lkdGhcIlxyXG4gICAgICAgICAgICAgIFtuekxlZnRdPVwiZmllbGQubGVmdCA/IGZpZWxkLmxlZnQgOiBmYWxzZVwiIFtuelJpZ2h0XT1cImZpZWxkLnJpZ2h0ID8gZmllbGQucmlnaHQgOiBmYWxzZVwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmllbGQudGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LWNvbC1hZGQtaWNvbi1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiZmllbGQubWluV2lkdGg/IGZpZWxkLm1pbldpZHRoOic1MHB4J1wiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJmaWVsZC53aWR0aD8gZmllbGQud2lkdGg6JzEwMHB4J1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImFkZENvbHVtblwiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1jb2wtYWRkLWljb24gaWNvblVJTGFyZ2UtTmV3XCJcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkY29sdW1uKGZpKVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0SGVhZGVyTWF4V2lkdGgoZmllbGQpXCIgYXR0ci5pZD1cInt7Z3JpZElEfX0tY29sdW1uLXt7Zml9fS10aXRsZVwiIGNtYWNzLXRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgKHRhcCk9XCJvbkZpZWxkVGFwRWxsaXBzaXMoZ3JpZElEICsgJy1jb2x1bW4tJyArIGZpICsgJy10aXRsZScpXCJcclxuICAgICAgICAgICAgICAgICAgW2NtYWNzVG9vbHRpcFRyaWdnZXJdPVwiZ2V0VG9vbHRpcEVsbGlwc2lzVHJpZ2dlcigpXCJcclxuICAgICAgICAgICAgICAgICAgW2NtYWNzVG9vbHRpcFRpdGxlXT1cImlzRWxsaXBzaXNBY3RpdmUoZ3JpZElEICsgJy1jb2x1bW4tJyArIGZpICsgJy10aXRsZScsIGZpZWxkKSA/IGZpZWxkLmRpc3BsYXkgOiBudWxsXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbC1oZWFkZXJdPVwiIXdyYXBMaW5lc1wiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi10b29sdGlwXT1cImFkZENvbHVtblwiIChjbGljayk9XCJvcGVuQ29sdW1uTWVudShmaSlcIj5cclxuICAgICAgICAgICAgICAgICAge3tmaWVsZC5kaXNwbGF5fX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi10b29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiYWRkQ29sdW1uICYmIHNlbGVjdGVkQ29sdW1uSWQgPT09IGZpICYmIHNlbGVjdGVkQ29sdW1uSWQgIT09IC0xXCIgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgW2l0ZW1zXT1cImNvbHVtbk1lbnVcIiAob25GaWVsZENoYW5nZWQpPVwib25GaWVsZENoYW5nZWQoZmksJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPC9jbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi10b29sdGlwPlxyXG4gICAgICAgICAgICAgICAgPGkgKm5nSWY9XCJhZGRDb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS1zZWxlY3RlZF09XCJzZWxlY3RlZE1vcmUgPT09IGZpICYmIHNlbGVjdGVkTW9yZSAhPT0gLTFcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImljb25VSUxhcmdlLU1vcmUtVmVyaXRjYWxfSWNvbiBjbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlXCIgc3R5bGU9XCJmb250LXNpemU6IDE1cHg7XCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW5Db2x1bW5Nb3JlKGZpKVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlICpuZ0lmPVwiYWRkQ29sdW1uICYmIHNlbGVjdGVkTW9yZSA9PT0gZmkgJiYgc2VsZWN0ZWRNb3JlICE9PSAtMVwiXHJcbiAgICAgICAgICAgICAgICAgIFtmaWVsZF09XCJmaWVsZFwiIFtpdGVtc109XCJjb2x1bW5NZW51XCIgKG9uRmllbGRDaGFuZ2VkKT1cIm9uRmllbGRDaGFuZ2VkKGZpLCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICBbbGFiZWxTYXZlXT1cImNvbHVtbk1lbnUuYWR2YW5jZWRDb25maWd1cmF0aW9uLmxhYmVsU2F2ZVwiPjwvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZT5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8ZGl2IFtpZF09XCJncmlkSUQgKyAnY29sdW1uJyArIGZpXCIgKm5nSWY9XCJmaWVsZC50ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJmaWVsZC50ZW1wbGF0ZS5yZWZcIlxyXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiZmllbGQudGVtcGxhdGUuY29udGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPG56LXJlc2l6ZS1oYW5kbGUgbnpEaXJlY3Rpb249XCJyaWdodFwiICpuZ0lmPVwiZmllbGQucmVzaXphYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1yZXNpemUtdHJpZ2dlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbnotcmVzaXplLWhhbmRsZT5cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICN0aFdpdGhGaWx0ZXJzPlxyXG4gICAgICAgICAgICA8dGggW256U2hvd1NvcnRdPVwiZmllbGQuc2hvd1NvcnRcIiBuekN1c3RvbUZpbHRlciBuei1yZXNpemFibGUgbnpCb3VuZHM9XCJ3aW5kb3dcIiBuelByZXZpZXdcclxuICAgICAgICAgICAgICBbbnpEaXNhYmxlZF09XCIhZmllbGQucmVzaXphYmxlXCIgKG56UmVzaXplRW5kKT1cIm9uUmVzaXplKCRldmVudCwgZmllbGQucHJvcGVydHksIGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgYXR0ci5pZD1cInt7Z3JpZElEfX0tY29sdW1uLXt7Zml9fVwiIFtuZ0NsYXNzXT1cImdldENsYXNzTWFwKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgWyhuelNvcnRPcmRlcildPVwiZmllbGQuc2hvd1NvcnQgPyBmaWVsZC5zb3J0T3JkZXIgOiBkZWZhdWx0U29ydE9yZGVyXCJcclxuICAgICAgICAgICAgICAobnpTb3J0T3JkZXJDaGFuZ2UpPVwic29ydCgkZXZlbnQsIGZpZWxkLnByb3BlcnR5KVwiIFtueldpZHRoXT1cImZpZWxkLndpZHRoXCJcclxuICAgICAgICAgICAgICBbbnpNaW5XaWR0aF09XCJmaWVsZC5taW5XaWR0aCA/IGZpZWxkLm1pbldpZHRoIDogMTAwXCIgW256TWF4V2lkdGhdPVwiZmllbGQubWF4V2lkdGggPyBmaWVsZC5tYXhXaWR0aCA6IDUwMFwiXHJcbiAgICAgICAgICAgICAgW256TGVmdF09XCJmaWVsZC5sZWZ0ID8gZmllbGQubGVmdCA6IGZhbHNlIFwiIFtuelJpZ2h0XT1cImZpZWxkLnJpZ2h0ID8gZmllbGQucmlnaHQgOiBmYWxzZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgW2lkXT1cImdyaWRJRCArICdjb2x1bW4nICsgZmlcIiAqbmdJZj1cImZpZWxkLnRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZpZWxkLnRlbXBsYXRlLnJlZlwiXHJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJmaWVsZC50ZW1wbGF0ZS5jb250ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8bnotZHJvcGRvd24gbnpUcmlnZ2VyPVwiY2xpY2tcIiBuelBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgW256Q2xpY2tIaWRlXT1cImZhbHNlXCIgbnpUYWJsZUZpbHRlciAjZHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cInNlYXJjaFwiIGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmFudC10YWJsZS1maWx0ZXItb3Blbl09XCJkcm9wZG93bi5uelZpc2libGVcIiBuei1kcm9wZG93bj48L2k+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZpZWxkLmN1c3RvbUZpbHRlci5yZWZcIlxyXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiZmllbGQuY3VzdG9tRmlsdGVyLmNvbnRleHRcIj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvbnotZHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaWVsZC50ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0SGVhZGVyTWF4V2lkdGgoZmllbGQpXCIgY21hY3MtdG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAodGFwKT1cIm9uRmllbGRUYXBFbGxpcHNpcyhncmlkSUQgKyAnLWNvbHVtbi0nICsgZmkgKyAnLXRpdGxlJylcIlxyXG4gICAgICAgICAgICAgICAgICBbY21hY3NUb29sdGlwVHJpZ2dlcl09XCJnZXRUb29sdGlwRWxsaXBzaXNUcmlnZ2VyKClcIlxyXG4gICAgICAgICAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNFbGxpcHNpc0FjdGl2ZShncmlkSUQgKyAnLWNvbHVtbi0nICsgZmkgKyAnLXRpdGxlJywgZmllbGQpID8gZmllbGQuZGlzcGxheSA6IG51bGxcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsLWhlYWRlcl09XCIhd3JhcExpbmVzXCI+e3tmaWVsZC5kaXNwbGF5fX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bnotcmVzaXplLWhhbmRsZSBuekRpcmVjdGlvbj1cInJpZ2h0XCIgKm5nSWY9XCJmaWVsZC5yZXNpemFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXJlc2l6ZS10cmlnZ2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uei1yZXNpemUtaGFuZGxlPlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcblxyXG4gICAgICAgIDx0aCAqbmdJZj1cInNob3dSYXRlXCI+PC90aD5cclxuXHJcbiAgICAgICAgPHRoIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoXT1cImxvZ3NcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3NcIlxyXG4gICAgICAgICAgW256V2lkdGhdPVwiYWN0aW9uQ29sdW1uV2lkdGhcIiBbc3R5bGUubWF4V2lkdGhdPVwiYWN0aW9uQ29sdW1uV2lkdGhcIiBbc3R5bGUubWluV2lkdGhdPVwiYWN0aW9uQ29sdW1uV2lkdGhcIlxyXG4gICAgICAgICAgW256UmlnaHRdPVwiZ2V0U3RpY2t5V2lkdGhSaWdodCgnZXh0cmEnKVwiICpuZ0lmPVwiZXh0cmFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWV4dHJhXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJleHRyYVwiPnt7IGV4dHJhIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICA8dGggKm5nSWY9XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXRcIiBueldpZHRoPVwiNDBweFwiIFtzdHlsZS5taW5XaWR0aF09XCInNDBweCdcIiBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgIFtuelJpZ2h0XT1cImdldFN0aWNreVdpZHRoUmlnaHQoJ3NtYXJ0VGFibGUnKVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9nc1wiXHJcbiAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWRlbGV0ZVwiPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICpuZ0lmPVwiY2VudGVyVGFibGVcIj48L3RoPlxyXG5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGhlYWQ+XHJcbiAgICA8dGJvZHkgY2RrRHJvcExpc3QgKm5nSWY9XCIhdmlydHVhbFNjcm9sbFwiIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgY29uZmlnLmZpZWxkcyAmJiBjb25maWcuZmllbGRzLmxlbmd0aFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJleHBhbmRhYmxlOyBlbHNlIGRlZmF1bHRUcGw7XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBkYXRhIG9mIGdyaWRDb21wb25lbnQuZGF0YTsgaW5kZXggYXMgZGlcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBtYXBPZkV4cGFuZGVkRGF0YVtkYXRhW2ZpZWxkSURdXVwiPlxyXG4gICAgICAgICAgICAgIDx0ciAqbmdJZj1cIihpdGVtLnBhcmVudCAmJiBpdGVtLnBhcmVudC5leHBhbmQpIHx8ICFpdGVtLnBhcmVudFwiIGlkPVwidHIte3tpdGVtW2ZpZWxkSURdfX1cIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZXhwYW5kYWJsZS1yb3ddPVwiaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1yb3ctYWN0aXZlXT1cImVkaXRJZCA9PT0gaXRlbVtmaWVsZElEXVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1oZWFkZXItbG9nc109XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGVkLXJvd109XCJjaGVja2JveFNlbGVjdCA/IGdldE5vZGUoaXRlbVtmaWVsZElEXSkuc2VsZWN0ZWQgOiBzZWxlY3Rpb24uaXNTZWxlY3RlZChpdGVtW2ZpZWxkSURdKVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0VHJlZVNpbmdsZShpdGVtKVwiICh0b3VjaHN0YXJ0KT1cInRhcEhhbmRsZXIoJGV2ZW50LCBpdGVtKVwiXHJcbiAgICAgICAgICAgICAgICAoY29udGV4dG1lbnUpPVwib25jb250ZXh0bWVudWV2dCgkZXZlbnQsIGl0ZW0pXCIgKGRibGNsaWNrKT1cImRibENsaWNrUm93KGl0ZW0pXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiY2hlY2tib3hTZWxlY3RcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnY2hlY2tib3hTZWxlY3QnKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCInMzBweCdcIiBbc3R5bGUubWF4V2lkdGhdPVwiJzMwcHgnXCIgW3N0eWxlLndpZHRoXT1cIiczMHB4J1wiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNtYWNzLWNoZWNrYm94IFsobmdNb2RlbCldPVwiZ2V0Tm9kZShpdGVtW2ZpZWxkSURdKS5zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiZ2V0Tm9kZShpdGVtW2ZpZWxkSURdKS5zZWxlY3RlZCA9PT0gLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjaGVja2VkQ2hhbmdlKT1cIm9uQ2hlY2tib3hUcmVlQ2hhbmdlKCRldmVudCwgaXRlbSwgbWFwT2ZFeHBhbmRlZERhdGFbZGF0YVtmaWVsZElEXV0pXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBnZXRGaWVsZHMoKTsgaW5kZXggYXMgaVwiIFtuZ0NsYXNzXT1cImdldEN1c3RvbUNsYXNzKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1lZGl0YWJsZS1jb2x1bW5dPVwiZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LWV4cGFuZGFibGVdPVwiKChlZGl0SWQgPT09IGl0ZW1bY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNOdW1iZXIoZmllbGQpICYmIGZpZWxkLmVkaXRhYmxlKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1leHBhbmRhYmxlLXRkXT1cIiFpXCIgW3N0eWxlLnBhZGRpbmdMZWZ0LnB4XT1cImdldEN1c3RvbVBhZGRpbmcoaXRlbSwgaSlcIlxyXG4gICAgICAgICAgICAgICAgICBbbnpTaG93RXhwYW5kXT1cIiFpc051bGwoaXRlbS5jaGlsZHJlbikgJiYgIWlcIiBbKG56RXhwYW5kKV09XCJpdGVtLmV4cGFuZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtuekxlZnRdPVwiZmllbGQubGVmdCA/IGZpZWxkLmxlZnQgOiBmYWxzZVwiIFtuelJpZ2h0XT1cImZpZWxkLnJpZ2h0ID8gZmllbGQucmlnaHQgOiBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgIChuekV4cGFuZENoYW5nZSk9XCJFeHBhbmRDb2xsYXBzZShtYXBPZkV4cGFuZGVkRGF0YVtkYXRhW2ZpZWxkSURdXSwgaXRlbSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCJmaWVsZC53aWR0aFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cIihpc051bWJlcihmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSkgPyAnYmxvY2snIDogJ2lubGluZS1mbGV4J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbC1jb250YWluZXItbG9nc109XCJleHBhbmRhYmxlICYmIGlzU3RyaW5nKGZpZWxkKSAmJiAhaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cIml0ZW0uY2hpbGRyZW4gJiYgIWkgPyAnY2FsYygxMDAlIC0gMjVweCknIDogJzEwMCUnXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInNob3dWaWV3TW9kZVRwbChmaWVsZCwgaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cInZpZXdNb2RlVHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGl0ZW0sIGk6IGRpLCBpdGVtOiBpdGVtLCBjaTogaX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5kaXNwbGF5XT1cImlzTnVtYmVyKGZpZWxkKSA/ICdibG9jaycgOiAnaW5saW5lLWZsZXgnXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiaXRlbS5jaGlsZHJlbiAmJiAhaSA/ICdjYWxjKDEwMCUgLSAyNXB4KScgOiAnMTAwJSdcIiAqbmdJZj1cInNob3dFZGl0VHBsKGl0ZW0sIGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJlZGl0VHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGl0ZW0sIGk6IGRpfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgISFpdGVtLmNoaWxkcmVuXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXJhdGluZ1wiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiAqbmdJZj1cInNob3dSYXRlICYmIGNvbmZpZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bnotcmF0ZSBbbmdNb2RlbF09XCJkYXRhW2NvbmZpZy5maWVsZFJhdGVdXCIgW256Q291bnRdPSdyYXRlQ291bnQnIFtuekRpc2FibGVkXT1cIiFpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblJhdGVDaGFuZ2UoJGV2ZW50LCBkYXRhKVwiIChjbGljayk9XCJvblJhdGVDbGljaygkZXZlbnQpXCI+PC9uei1yYXRlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdleHRyYScpXCIgKm5nSWY9XCJleHRyYVwiPjwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiY2VudGVyVGFibGVcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy10ZF09XCJsb2dzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWFsaWduLXRkXCI+PC90ZD5cclxuXHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VHBsPlxyXG4gICAgICAgICAgPHRyIGNka0RyYWcgW2Nka0RyYWdEaXNhYmxlZF09XCIhZHJhZ2dhYmxlXCIgKm5nRm9yPVwibGV0IGRhdGEgb2YgZ3JpZENvbXBvbmVudC5kYXRhOyBpbmRleCBhcyBpXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrUm93KCRldmVudCwgZGF0YSlcIiAodG91Y2hzdGFydCk9XCJ0YXBIYW5kbGVyKCRldmVudCwgZGF0YSlcIiBpZD1cInRyLXt7ZGF0YVtjb25maWcuZmllbGRJZF19fVwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXJvdy1hY3RpdmVdPVwiZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXVwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtdGFibGUtc2VsZWN0ZWQtcm93XT1cImlzUm93U2VsZWN0ZWQoZGF0YSlcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0YWJsZS1yb3ddPVwiaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLXJvd109XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXRcIlxyXG4gICAgICAgICAgICAoY29udGV4dG1lbnUpPVwiY29udGV4dE1lbnUoJGV2ZW50LCBjb250ZXh0TWVudVRlbXBsYXRlKVwiIGNsYXNzPVwiY21hY3Mtbm8tc2VsZWN0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICA8Y21hY3MtZHJvcGRvd24tbWVudSAjY29udGV4dE1lbnVUZW1wbGF0ZT1cImNtYWNzRHJvcGRvd25NZW51XCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZXh0bWVudVwiXHJcbiAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBkcm9wZG93bjogZHJvcGRvd24sIGRhdGE6IGRhdGEgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2NtYWNzLWRyb3Bkb3duLW1lbnU+XHJcblxyXG4gICAgICAgICAgICA8dGQgKm5nSWY9XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXRcIiBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCIgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ3NtYXJ0VGFibGUnKVwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1hZGRcIj5cclxuICAgICAgICAgICAgICA8aSAqbmdJZj1cIiFoaWRlQnV0dG9uc1wiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctYWRkLWljb24gaWNvblVJTGFyZ2UtTmV3XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRSb3coaSwgJGV2ZW50KVwiPjwvaT5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdJZj1cImRyYWdnYWJsZVwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1kcmFnLWNvbCBjbWFjcy1jb21wYWN0LXRhYmxlLWZzdC10ZFwiIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2RyYWdnYWJsZScpXCJcclxuICAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCIgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtTW92ZSBjbWFjcy1jb21wYWN0LXRhYmxlLWRyYWctaGFuZGxlclwiIGNka0RyYWdIYW5kbGU+PC9pPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2NoZWNrYm94U2VsZWN0JylcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCJcclxuICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1mc3QtdGRdPVwiIWRyYWdnYWJsZVwiICpuZ0lmPVwiY2hlY2tib3hTZWxlY3QgJiYgY29uZmlnXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNtYWNzLWNoZWNrYm94IFsobmdNb2RlbCldPVwiY2hlY2tib3hDYWNoZVtnZXRJbmRleChkYXRhW2NvbmZpZy5maWVsZElkXSldLnNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgIChjaGVja2VkQ2hhbmdlKT1cIm9uQ2hlY2tib3hDaGFuZ2UoJGV2ZW50LCBkYXRhKVwiXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGFbY29uZmlnLmZpZWxkSWRdICYmIGNoZWNrYm94Q2FjaGVbZ2V0SW5kZXgoZGF0YVtjb25maWcuZmllbGRJZF0pXVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBqXCIgW25nQ2xhc3NdPVwiZ2V0Q3VzdG9tQ2xhc3MoZmllbGQpXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtZWRpdGFibGUtY29sdW1uXT1cImZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1mc3QtdGRdPVwiIWRyYWdnYWJsZSAmJiAhY2hlY2tib3hTZWxlY3QgJiYgIWpcIlxyXG4gICAgICAgICAgICAgIFtuekxlZnRdPVwiZmllbGQubGVmdCA/IGZpZWxkLmxlZnQgOiBmYWxzZVwiIFtuelJpZ2h0XT1cImZpZWxkLnJpZ2h0ID8gZmllbGQucmlnaHQgOiBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cImZpZWxkLndpZHRoXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6IDk4JVwiICpuZ0lmPVwic2hvd1ZpZXdNb2RlVHBsVHJlZShmaWVsZCwgZGF0YSlcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ2aWV3TW9kZVRwbDtjb250ZXh0OiB7ZmllbGQ6IGZpZWxkLCBkYXRhOiBkYXRhLCBpOiBpLCBjaTogan1cIj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiA5OCVcIiAqbmdJZj1cInNob3dFZGl0VHBsVHJlZShkYXRhLCBmaWVsZClcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJlZGl0VHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGRhdGEsIGk6IGl9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkICpuZ0lmPVwic2hvd1JhdGUgJiYgY29uZmlnXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiPlxyXG4gICAgICAgICAgICAgIDxuei1yYXRlIFtuZ01vZGVsXT1cImRhdGFbY29uZmlnLmZpZWxkUmF0ZV1cIiBbbnpDb3VudF09J3JhdGVDb3VudCdcclxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmF0ZUNoYW5nZSgkZXZlbnQsIGRhdGEpXCIgKGNsaWNrKT1cIm9uUmF0ZUNsaWNrKCRldmVudClcIj48L256LXJhdGU+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8dGQgKm5nSWY9XCJleHRyYVwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdleHRyYScpXCI+PC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdJZj1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdzbWFydFRhYmxlJylcIlxyXG4gICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctZGVsZXRlLWljb24gaWNvblVJU21hbGwtQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIoZGF0YS5kZWxldGVFbmFibGVkID09PSB1bmRlZmluZWQgfHwgZGF0YS5kZWxldGVFbmFibGVkKSAmJiAhaGlkZUJ1dHRvbnNcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRlbGV0ZVJvdyhpLCAkZXZlbnQpXCI+PC9pPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiAqbmdJZj1cImNlbnRlclRhYmxlXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy10ZF09XCJsb2dzXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtYWxpZ24tdGRcIj48L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8L3Rib2R5PlxyXG5cclxuICAgIDx0Ym9keSBjZGtEcm9wTGlzdCAqbmdJZj1cInZpcnR1YWxTY3JvbGxcIiAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgbnotdmlydHVhbC1zY3JvbGwgbGV0LWRhdGEgbGV0LWRpPVwiaVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgY29uZmlnLmZpZWxkcyAmJiBjb25maWcuZmllbGRzLmxlbmd0aFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImV4cGFuZGFibGU7IGVsc2UgZGVmYXVsdFRwbFZpcnR1YWxTY3JvbGw7XCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbWFwT2ZFeHBhbmRlZERhdGFbZGF0YVtmaWVsZElEXV1cIj5cclxuICAgICAgICAgICAgICA8dHIgKm5nSWY9XCIoaXRlbS5wYXJlbnQgJiYgaXRlbS5wYXJlbnQuZXhwYW5kKSB8fCAhaXRlbS5wYXJlbnRcIiBpZD1cInRyLXt7aXRlbVtmaWVsZElEXX19XCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXJvdy1hY3RpdmVdPVwiZWRpdElkID09PSBpdGVtW2ZpZWxkSURdXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWV4cGFuZGFibGUtcm93XT1cImluTGluZUVkaXRcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaGVhZGVyLWxvZ3NdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgICAgKHRvdWNoc3RhcnQpPVwidGFwSGFuZGxlcigkZXZlbnQsIGl0ZW0pXCIgKGNvbnRleHRtZW51KT1cIm9uY29udGV4dG1lbnVldnQoJGV2ZW50LCBpdGVtKVwiXHJcbiAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwiZGJsQ2xpY2tSb3coaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cImNoZWNrYm94U2VsZWN0XCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2NoZWNrYm94U2VsZWN0JylcIlxyXG4gICAgICAgICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiJzMwcHgnXCIgW3N0eWxlLm1heFdpZHRoXT1cIiczMHB4J1wiIFtzdHlsZS53aWR0aF09XCInMzBweCdcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgISFpdGVtLmNoaWxkcmVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbWFjcy1jaGVja2JveCBbKG5nTW9kZWwpXT1cImdldE5vZGUoaXRlbVtmaWVsZElEXSkuc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cImdldE5vZGUoaXRlbVtmaWVsZElEXSkuc2VsZWN0ZWQgPT09IC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAoY2hlY2tlZENoYW5nZSk9XCJvbkNoZWNrYm94VHJlZUNoYW5nZSgkZXZlbnQsIGl0ZW0sIG1hcE9mRXhwYW5kZWREYXRhW2RhdGFbZmllbGRJRF1dKVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZ2V0RmllbGRzKCk7IGluZGV4IGFzIGlcIiBbY2xhc3MuY21hY3MtZWRpdGFibGUtY29sdW1uXT1cImZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1leHBhbmRhYmxlXT1cIigoZWRpdElkID09PSBpdGVtW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzTnVtYmVyKGZpZWxkKSAmJiBmaWVsZC5lZGl0YWJsZSlcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgISFpdGVtLmNoaWxkcmVuXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZXhwYW5kYWJsZS10ZF09XCIhaVwiIFtzdHlsZS5wYWRkaW5nTGVmdC5weF09XCJnZXRDdXN0b21QYWRkaW5nKGl0ZW0sIGkpXCJcclxuICAgICAgICAgICAgICAgICAgW256U2hvd0V4cGFuZF09XCIhIWl0ZW0uY2hpbGRyZW4gJiYgIWlcIiBbKG56RXhwYW5kKV09XCJpdGVtLmV4cGFuZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtuekxlZnRdPVwiZmllbGQubGVmdCA/IGZpZWxkLmxlZnQgOiBmYWxzZVwiIFtuelJpZ2h0XT1cImZpZWxkLnJpZ2h0ID8gZmllbGQucmlnaHQgOiBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgIChuekV4cGFuZENoYW5nZSk9XCJFeHBhbmRDb2xsYXBzZShtYXBPZkV4cGFuZGVkRGF0YVtkYXRhW2ZpZWxkSURdXSwgaXRlbSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCJmaWVsZC53aWR0aFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cIihpc051bWJlcihmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSkgPyAnYmxvY2snIDogJ2lubGluZS1mbGV4J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbC1jb250YWluZXItbG9nc109XCJleHBhbmRhYmxlICYmIGlzU3RyaW5nKGZpZWxkKSAmJiAhaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cIml0ZW0uY2hpbGRyZW4gJiYgIWkgPyAnY2FsYygxMDAlIC0gMjVweCknIDogJzEwMCUnXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInNob3dWaWV3TW9kZVRwbChmaWVsZCwgaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cInZpZXdNb2RlVHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGl0ZW0sIGk6IGRpLCBpdGVtOiBpdGVtLCBjaTogaX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5kaXNwbGF5XT1cImlzTnVtYmVyKGZpZWxkKSA/ICdibG9jaycgOiAnaW5saW5lLWZsZXgnXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiaXRlbS5jaGlsZHJlbiAmJiAhaSA/ICdjYWxjKDEwMCUgLSAyNXB4KScgOiAnMTAwJSdcIiAqbmdJZj1cInNob3dFZGl0VHBsKGl0ZW0sIGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJlZGl0VHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGl0ZW0sIGk6IGRpfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1yYXRpbmdcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgKm5nSWY9XCJzaG93UmF0ZSAmJiBjb25maWdcIj5cclxuICAgICAgICAgICAgICAgICAgPG56LXJhdGUgW25nTW9kZWxdPVwiZGF0YVtjb25maWcuZmllbGRSYXRlXVwiIFtuekNvdW50XT0ncmF0ZUNvdW50JyBbbnpEaXNhYmxlZF09XCIhaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25SYXRlQ2hhbmdlKCRldmVudCwgZGF0YSlcIiAoY2xpY2spPVwib25SYXRlQ2xpY2soJGV2ZW50KVwiPjwvbnotcmF0ZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiIFtuelJpZ2h0XT1cImdldFN0aWNreVdpZHRoUmlnaHQoJ2V4dHJhJylcIiAqbmdJZj1cImV4dHJhXCI+PC90ZD5cclxuXHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VHBsVmlydHVhbFNjcm9sbD5cclxuICAgICAgICAgICAgPHRyIGNka0RyYWcgW2Nka0RyYWdEaXNhYmxlZF09XCIhZHJhZ2dhYmxlXCIgaWQ9XCJ0ci17e2RhdGFbY29uZmlnLmZpZWxkSWRdfX1cIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXJvdy1hY3RpdmVdPVwiZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXVwiIChjbGljayk9XCJjbGlja1JvdygkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICAgICAodG91Y2hzdGFydCk9XCJ0YXBIYW5kbGVyKCRldmVudCwgZGF0YSlcIiBbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGVkLXJvd109XCJpc1Jvd1NlbGVjdGVkKGRhdGEpXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0YWJsZS1yb3ddPVwiaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtcm93XT1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgKGNvbnRleHRtZW51KT1cImNvbnRleHRNZW51KCRldmVudCwgY29udGV4dE1lbnVUZW1wbGF0ZSwgZGF0YSlcIiBjbGFzcz1cImNtYWNzLW5vLXNlbGVjdGlvblwiPlxyXG5cclxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2NvbnRleHRNZW51VGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRleHRtZW51XCJcclxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgZHJvcGRvd246IGRyb3Bkb3duLCBkYXRhOiBkYXRhIH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXRcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgW3N0eWxlLm1heFdpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy10ZF09XCJsb2dzXCJcclxuICAgICAgICAgICAgICAgIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ3NtYXJ0VGFibGUnKVwiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctYWRkXCI+XHJcbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cIiFoaWRlQnV0dG9uc1wiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctYWRkLWljb24gaWNvblVJTGFyZ2UtTmV3XCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFJvdyhkaSwgJGV2ZW50KVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJkcmFnZ2FibGVcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1kcmFnLWNvbCBjbWFjcy1jb21wYWN0LXRhYmxlLWZzdC10ZFwiIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2RyYWdnYWJsZScpXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLU1vdmUgY21hY3MtY29tcGFjdC10YWJsZS1kcmFnLWhhbmRsZXJcIiBjZGtEcmFnSGFuZGxlPjwvaT5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICA8dGQgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnY2hlY2tib3hTZWxlY3QnKVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZzdC10ZF09XCIhZHJhZ2dhYmxlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiAqbmdJZj1cImNoZWNrYm94U2VsZWN0ICYmIGNvbmZpZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNtYWNzLWNoZWNrYm94IFsobmdNb2RlbCldPVwiY2hlY2tib3hDYWNoZVtnZXRJbmRleChkYXRhW2NvbmZpZy5maWVsZElkXSldLnNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPVwib25DaGVja2JveENoYW5nZSgkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBjaGVja2JveENhY2hlW2dldEluZGV4KGRhdGFbY29uZmlnLmZpZWxkSWRdKV1cIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZ2V0RmllbGRzKCk7IGluZGV4IGFzIGpcIiBbY2xhc3MuY21hY3MtZWRpdGFibGUtY29sdW1uXT1cImZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZzdC10ZF09XCIhZHJhZ2dhYmxlICYmICFjaGVja2JveFNlbGVjdCAmJiAhalwiXHJcbiAgICAgICAgICAgICAgICBbbnpMZWZ0XT1cImZpZWxkLmxlZnQgPyBmaWVsZC5sZWZ0IDogZmFsc2VcIiBbbnpSaWdodF09XCJmaWVsZC5yaWdodCA/IGZpZWxkLnJpZ2h0IDogZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cImZpZWxkLndpZHRoXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1heC13aWR0aDogOTglXCIgKm5nSWY9XCJzaG93Vmlld01vZGVUcGxUcmVlKGZpZWxkLCBkYXRhKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidmlld01vZGVUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogZGF0YSwgaTogZGksIGNpOiBqfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6IDk4JVwiICpuZ0lmPVwic2hvd0VkaXRUcGxUcmVlKGRhdGEsIGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZWRpdFRwbDtjb250ZXh0OiB7ZmllbGQ6IGZpZWxkLCBkYXRhOiBkYXRhLCBpOiBkaX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJzaG93UmF0ZSAmJiBjb25maWdcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICA8bnotcmF0ZSBbbmdNb2RlbF09XCJkYXRhW2NvbmZpZy5maWVsZFJhdGVdXCIgW256Q291bnRdPSdyYXRlQ291bnQnXHJcbiAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmF0ZUNoYW5nZSgkZXZlbnQsIGRhdGEpXCIgKGNsaWNrKT1cIm9uUmF0ZUNsaWNrKCRldmVudClcIj48L256LXJhdGU+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiZXh0cmFcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgW256UmlnaHRdPVwiZ2V0U3RpY2t5V2lkdGhSaWdodCgnZXh0cmEnKVwiPjwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgIDx0ZCAqbmdJZj1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgICAgW256UmlnaHRdPVwiZ2V0U3RpY2t5V2lkdGhSaWdodCgnc21hcnRUYWJsZScpXCIgW3N0eWxlLm1heFdpZHRoXT1cIic0MHB4J1wiIFtzdHlsZS5taW5XaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy10ZF09XCJsb2dzXCIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1kZWxldGVcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctZGVsZXRlLWljb24gaWNvblVJU21hbGwtQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIihkYXRhLmRlbGV0ZUVuYWJsZWQgPT09IHVuZGVmaW5lZCB8fCBkYXRhLmRlbGV0ZUVuYWJsZWQpICYmICFoaWRlQnV0dG9uc1wiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkZWxldGVSb3coZGksICRldmVudClcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvbnotdGFibGU+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNlZGl0VHBsIGxldC1maWVsZD1cImZpZWxkXCIgbGV0LWRhdGE9XCJkYXRhXCIgbGV0LWk9XCJpXCI+XHJcbiAgPCEtLUVkaXRhYmxlIFN0cmluZyBFZGl0IE1vZGUtLT5cclxuICA8aW5wdXQgI2ZpZWxkVHlwZUlucHV0IGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1pbnB1dFwiICpuZ0lmPVwiaXNTdHJpbmcoZmllbGQpXCIgdHlwZT1cInRleHRcIlxyXG4gICAgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIiAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LW1vZGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5wbGFjZWhvbGRlciA/IGZpZWxkLnBsYWNlaG9sZGVyIDogJydcIiBjbWFjcy1pbnB1dCBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgIChrZXl1cCk9XCJlbmRFZGl0TW9kZSgkZXZlbnQsIGksIGRhdGEpXCIgLz5cclxuXHJcbiAgPCEtLUVkaXRhYmxlIERhdGVQaWNrZXIgRWRpdCBNb2RlLS0+XHJcbiAgPGNtYWNzLWRhdGUtcGlja2VyICNmaWVsZFR5cGVEYXRlUGlja2VyIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1kYXRlLWVkaXRcIiAqbmdJZj1cImlzRGF0ZShmaWVsZClcIlxyXG4gICAgW2FsbG93Q2xlYXJdPVwidHJ1ZVwiIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCIgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwiZW5kRWRpdE1vZGVOZ01vZGVsKGksIGRhdGEpXCI+XHJcbiAgPC9jbWFjcy1kYXRlLXBpY2tlcj5cclxuXHJcbiAgPCEtLUVkaXRhYmxlIERhdGVUaW1lUGlja2VyIEVkaXQgTW9kZS0tPlxyXG4gIDxjbWFjcy1kYXRldGltZS1waWNrZXIgI2ZpZWxkVHlwZURhdGVUaW1lUGlja2VyICpuZ0lmPVwiaXNUaW1lKGZpZWxkKVwiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1kYXRldGltZS1waWNrZXJcIlxyXG4gICAgW3VzZTEySG91cnNdPVwidXNlMTJIb3Vyc1wiIGhpZGVTZWNvbmRzIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtbW9kZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgW2Zvcm1hdF09XCJmaWVsZC50aW1lRm9ybWF0ID8gZmllbGQudGltZUZvcm1hdCA6ICdoOm1tIGEnXCIgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIiBbZGVmYXVsdE9wZW5WYWx1ZV09XCJkZWZhdWx0VGltZVZhbHVlXCIgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLnByb3BlcnR5XVwiXHJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJuZ01vZGVsQ2hhbmdlKGksIGRhdGEpXCI+XHJcbiAgPC9jbWFjcy1kYXRldGltZS1waWNrZXI+XHJcblxyXG4gIDwhLS1FZGl0YWJsZSBTZWxlY3QgRWRpdCBNb2RlLS0+XHJcbiAgPGNtYWNzLXNlbGVjdCAjZmllbGRUeXBlU2VsZWN0IGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zZWxlY3QtY2VsbFwiIFtkcm9wZG93blJlbmRlcl09XCJyZW5kZXJcIlxyXG4gICAgW2NtYWNzRWRpdGFibGVdPVwiZmllbGQuc2VsZWN0LmRyb3Bkb3duQWRkT3B0aW9uXCJcclxuICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLW1vZGUtc3RhdHVzXT1cImZpZWxkLm1vZGUgPT09ICdzdGF0dXMnXCJcclxuICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLW1vZGUtc3RhdHVzLWxvdy1lZGl0XT1cImZpZWxkLm1vZGUgPT09ICdzdGF0dXMnICYmIGdldENsYXNzU3RhdHVzKGRhdGEsIGZpZWxkKSA9PT0nbG93J1wiXHJcbiAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC1tb2RlLXN0YXR1cy1tZWRpdW0tZWRpdF09XCJmaWVsZC5tb2RlID09PSAnc3RhdHVzJyAmJiBnZXRDbGFzc1N0YXR1cyhkYXRhLCBmaWVsZCkgPT09J21lZGl1bSdcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtbW9kZS1zdGF0dXMtaGlnaC1lZGl0XT1cImZpZWxkLm1vZGUgPT09ICdzdGF0dXMnICYmIGdldENsYXNzU3RhdHVzKGRhdGEsIGZpZWxkKSA9PT0naGlnaCdcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiICpuZ0lmPVwiaXNTZWxlY3QoZmllbGQpXCJcclxuICAgIFtwbGFjZUhvbGRlcl09XCJmaWVsZC5wbGFjZWhvbGRlciA/IGZpZWxkLnBsYWNlaG9sZGVyIDogJydcIiBzaG93U2VhcmNoIFttb2RlXT1cImZpZWxkLm1vZGUgPyBmaWVsZC5tb2RlIDogJ2RlZmF1bHQnXCJcclxuICAgIFtzaG93Q21hY3NTZWFyY2hdPVwiZmllbGQuc2hvd0NtYWNzU2VhcmNoXCIgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIiAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCIgKGNtYWNzRWRpdGVkSW5wdXQpPVwiY21hY3NFZGl0ZWRJbnB1dCgkZXZlbnQpXCJcclxuICAgIChuZ01vZGVsQ2hhbmdlKT1cImVuZEVkaXRNb2RlTmdNb2RlbChpLCBkYXRhLCBudWxsLCBmaWVsZClcIiAoaW5wdXQpPVwiY21hY3NFZGl0ZWRJbnB1dCgkZXZlbnQpXCIgKGtleWRvd24uZW50ZXIpPVwiYWRkT3B0aW9uKGksIGRhdGEsIG51bGwsIGZpZWxkKVwiPlxyXG4gICAgPGNtYWNzLW9wdGlvbiAqbmdGb3I9XCJsZXQgc0RhdGEgb2YgZmllbGQuc2VsZWN0LnNlbGVjdERhdGFcIiBsYWJlbD1cInt7c0RhdGFbZmllbGQuc2VsZWN0LmxhYmVsXX19XCJcclxuICAgICAgdmFsdWU9XCJ7e3NEYXRhW2ZpZWxkLnNlbGVjdC52YWx1ZV19fVwiIGRpdmlkZXI9XCJ7e3NEYXRhW2ZpZWxkLnNlbGVjdC5kaXZpZGVyXX19XCIgW2Rpc2FibGVkXT1cInNEYXRhLmRpc2FibGVkXCI+XHJcbiAgICA8L2NtYWNzLW9wdGlvbj5cclxuICA8L2NtYWNzLXNlbGVjdD5cclxuXHJcbiAgPG5nLXRlbXBsYXRlICNyZW5kZXI+XHJcbiAgICA8bnotZGl2aWRlciAqbmdJZj1cImZpZWxkLnNlbGVjdD8uZHJvcGRvd25BZGRPcHRpb25cIj48L256LWRpdmlkZXI+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiZmllbGQuc2VsZWN0Py5kcm9wZG93bkFkZE9wdGlvblwiIGNtYWNzLWJ1dHRvbiAoY2xpY2spPVwiYWRkT3B0aW9uKGksIGRhdGEsIG51bGwsIGZpZWxkKVwiIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICBhcmlhLWxhYmVsPVwiYWRkIGl0ZW1cIj57e2ZpZWxkLnNlbGVjdD8uZHJvcGRvd25BZGRPcHRpb25MYWJlbH19PC9idXR0b24+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgPCEtLUVkaXRhYmxlIElucHVOdW1iZXIgRWRpdCBNb2RlLS0+XHJcbiAgPGNtYWNzLWlucHV0LW51bWJlciAjZmllbGRUeXBlSW5wdXROdW1iZXIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlucHV0LW51bWJlci1lZGl0XCJcclxuICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtbW9kZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgKm5nSWY9XCJpc051bWJlcihmaWVsZCkgJiYgIWlzU2VsZWN0KGZpZWxkKSAmJiBmaWVsZC51c2VDb21tYU1hcmtlclwiIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgW2NtYWNzU3RlcF09XCJmaWVsZC5jbWFjc1N0ZXBcIiBbbWluXT1cImZpZWxkLm1pbiEhXCIgW21heF09XCJmaWVsZC5tYXghIVwiIFtmb3JtYXR0ZXJdPVwiZm9ybWF0dGVyXCIgW3BhcnNlcl09XCJwYXJzZXJcIlxyXG4gICAgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIiAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiIChrZXl1cCk9XCJlbmRFZGl0TW9kZSgkZXZlbnQsIGksIGRhdGEpXCJcclxuICAgIChuZ01vZGVsQ2hhbmdlKT1cIm5nTW9kZWxDaGFuZ2UoaSwgZGF0YSlcIj5cclxuICA8L2NtYWNzLWlucHV0LW51bWJlcj5cclxuXHJcbiAgPGNtYWNzLWlucHV0LW51bWJlciAjZmllbGRUeXBlSW5wdXROdW1iZXIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlucHV0LW51bWJlci1lZGl0XCJcclxuICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtbW9kZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgKm5nSWY9XCJpc051bWJlcihmaWVsZCkgJiYgIWlzU2VsZWN0KGZpZWxkKSAmJiAhZmllbGQudXNlQ29tbWFNYXJrZXJcIiBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgIFtmb3JtYXR0ZXJdPVwiIWlzTnVsbChmaWVsZC5mb3JtYXR0ZXIpID8gZmllbGQuZm9ybWF0dGVyIDogZGVmYXVsdEZvcm1hdHRlclwiXHJcbiAgICBbcGFyc2VyXT1cIiFpc051bGwoZmllbGQucGFyc2VyKSA/IGZpZWxkLnBhcnNlciA6IGRlZmF1bHRQYXJzZXJcIiBbY21hY3NTdGVwXT1cImZpZWxkLmNtYWNzU3RlcCA/IGZpZWxkLmNtYWNzU3RlcCA6IDFcIlxyXG4gICAgW21pbl09XCJmaWVsZC5taW4hIVwiIFttYXhdPVwiZmllbGQubWF4ISFcIiAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiIChkYmxjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgIChrZXl1cCk9XCJlbmRFZGl0TW9kZSgkZXZlbnQsIGksIGRhdGEpXCIgKG5nTW9kZWxDaGFuZ2UpPVwibmdNb2RlbENoYW5nZShpLCBkYXRhKVwiPlxyXG4gIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG5cclxuICA8IS0tRWRpdGFibGUgQm9vbGVhbiBFZGl0IE1vZGUtLT5cclxuICA8bGFiZWwgI2ZpZWxkVHlwZUJvb2wgY21hY3MtY2hlY2tib3ggY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmUtZWRpdGFibGUtY2hlY2tib3hcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiICpuZ0lmPVwiaXNCb29sZWFuKGZpZWxkKVwiXHJcbiAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCIgKG5nTW9kZWxDaGFuZ2UpPVwiZW5kRWRpdE1vZGVOZ01vZGVsKGksIGRhdGEsIGZpZWxkLnByb3BlcnR5LCBmaWVsZClcIj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tRWRpdGFibGUgUGhvbmUgRWRpdCBNb2RlLS0+XHJcbiAgPGNtYWNzLXBob25lLW51bWJlciAjZmllbGRUeXBlUGhvbmUgY2xhc3M9XCJwaG9uZS1udW1iZXJcIiBbaW5pdF09XCJ7aW5pdGlhbENvdW50cnk6ICd1cycsIGZvcm1hdE9uRGlzcGxheTogZmFsc2V9XCJcclxuICAgIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCIgW2Zvcm1Db250cm9sQ3VzdG9tXT1cImZvcm1QaG9uZUNvbnRyb2xcIlxyXG4gICAgKGhhc0Vycm9yKT1cImhhc1Bob25lTnVtYmVyRXJyb3IoJGV2ZW50LGksIGRhdGEsIGZpZWxkLnByb3BlcnR5LCBmaWVsZClcIiAoY291bnRyeUNoYW5nZSk9XCJvbkNvdW50cnlDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAqbmdJZj1cImlzUGhvbmUoZmllbGQpXCI+XHJcbiAgPC9jbWFjcy1waG9uZS1udW1iZXI+XHJcblxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICN2aWV3TW9kZVRwbCBsZXQtZmllbGQ9XCJmaWVsZFwiIGxldC1kYXRhPVwiZGF0YVwiIGxldC1pPVwiaVwiIGxldC1pdGVtPVwiaXRlbVwiIGxldC1jaT1cImNpXCI+XHJcbiAgPG5nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tRWRpdGFibGUgU3RyaW5nIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc1N0cmluZyhmaWVsZClcIj5cclxuICAgICAgPGRpdiAoY2xpY2spPVwic3RhcnRFZGl0KGRhdGFbY29uZmlnLmZpZWxkSWRdLCBmaWVsZC5wcm9wZXJ0eSwgJGV2ZW50LCBkYXRhKVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIlxyXG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5saW5lLWNlbGxcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtdmFsaWQtcGxhY2Vob2xkZXJdPVwiaXNOdWxsKGRhdGFbZmllbGQucHJvcGVydHldKSB8fCAhZGF0YVtmaWVsZC5wcm9wZXJ0eV0ubGVuZ3RoXCJcclxuICAgICAgICAgIGF0dHIuaWQ9XCJ7e2dyaWRJRH19LXJvdy17e2l9fS17e2ZpZWxkLnByb3BlcnR5fX1cIiBjbWFjcy10b29sdGlwXHJcbiAgICAgICAgICAodGFwKT1cIm9uRGF0YVRhcEVsbGlwc2lzKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUcmlnZ2VyXT1cImdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKVwiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNFbGxpcHNpc0FjdGl2ZShncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5LCBmaWVsZCkgPyBnZXRTdHJpbmdGaWVsZFZhbHVlKGRhdGEsIGZpZWxkKSA6IG51bGxcIlxyXG4gICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKGZpZWxkLCBpdGVtLCBpKVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiPlxyXG4gICAgICAgICAge3sgZ2V0U3RyaW5nRmllbGRWYWx1ZShkYXRhLCBmaWVsZCkgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aSAqbmdJZj1cImZpZWxkLmVkaXRhYmxlIHx8IGZpZWxkLmVkaXRhYmxlID09PSB1bmRlZmluZWRcIiBjbGFzcz1cImljb25VSVNtYWxsLUVkaXRcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1pY29uXT1cImluTGluZUVkaXQgJiYgZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1pY29uLXZpZXddPVwiIWluTGluZUVkaXQgfHwgIWZpZWxkLmVkaXRhYmxlXCI+XHJcbiAgICAgICAgPC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS1FZGl0YWJsZSBEYXRlUGlja2VyIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc0RhdGUoZmllbGQpXCI+XHJcbiAgICAgIDxkaXYgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhW2NvbmZpZy5maWVsZElkXSwgZmllbGQucHJvcGVydHksICRldmVudCwgZGF0YSlcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSlcIlxyXG4gICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXQtbm8tcGFkZGluZ109XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNOdW1iZXIoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1N0cmluZyhmaWVsZCkpXCJcclxuICAgICAgICBzdHlsZT1cIndpZHRoOiA5OCU7IG1heC13aWR0aDogOTglOyBwYWRkaW5nOiA3cHggMTBweFwiPlxyXG4gICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCIgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKGZpZWxkLCBpdGVtLCBpKVwiXHJcbiAgICAgICAgICBhdHRyLmlkPVwie3tncmlkSUR9fS1yb3cte3tpfX0te3tmaWVsZC5wcm9wZXJ0eX19XCIgY21hY3MtdG9vbHRpcFxyXG4gICAgICAgICAgKHRhcCk9XCJvbkRhdGFUYXBFbGxpcHNpcyhncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5KVwiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVHJpZ2dlcl09XCJnZXRUb29sdGlwRWxsaXBzaXNUcmlnZ2VyKClcIlxyXG4gICAgICAgICAgW2NtYWNzVG9vbHRpcFRpdGxlXT1cImlzRWxsaXBzaXNBY3RpdmUoZ3JpZElEICsgJy1yb3ctJyArIGkgKyAnLScgKyBmaWVsZC5wcm9wZXJ0eSwgZmllbGQpID8gKGRhdGFbZmllbGQucHJvcGVydHldID8gdHJhbnNmb3JtRGF0ZShkYXRhW2ZpZWxkLnByb3BlcnR5XSkgOiBmaWVsZC5wbGFjZWhvbGRlcikgOiBudWxsXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC12YWxpZC1wbGFjZWhvbGRlcl09XCJpc051bGwoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pXCJcclxuICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1pbmxpbmUtY2VsbCBjbWFjcy1jb21wYWN0LXRhYmxlLWRhdGVcIj57eyBkYXRhW2ZpZWxkLnByb3BlcnR5XSA/XHJcbiAgICAgICAgICB0cmFuc2Zvcm1EYXRlKGRhdGFbZmllbGQucHJvcGVydHldKSA6IGZpZWxkLnBsYWNlaG9sZGVyIH19PC9kaXY+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uVUlMYXJnZS1DYWxlbmRhclwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWNhbGVuZGFyLWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1jYWxlbmRhci1pY29uLXZpZXddPVwiIWluTGluZUVkaXQgfHwgIWZpZWxkLmVkaXRhYmxlXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS1FZGl0YWJsZSBEYXRlVGltZVBpY2tlciBWaWV3IE1vZGUtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgaXNUaW1lKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2IChjbGljayk9XCJzdGFydEVkaXQoZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLnByb3BlcnR5LCAkZXZlbnQsIGRhdGEpXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdF09XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzVGltZShmaWVsZCkpXCJcclxuICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LW5vLXBhZGRpbmddPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzTnVtYmVyKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTdHJpbmcoZmllbGQpKVwiXHJcbiAgICAgICAgc3R5bGU9XCJ3aWR0aDogOTglOyBtYXgtd2lkdGg6IDk4JTsgcGFkZGluZzogN3B4IDEwcHhcIj5cclxuICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiIFtzdHlsZS5tYXhXaWR0aF09XCJnZXRNYXhXaWR0aChmaWVsZCwgaXRlbSwgaSlcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCIgYXR0ci5pZD1cInt7Z3JpZElEfX0tcm93LXt7aX19LXt7ZmllbGQucHJvcGVydHl9fVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC12YWxpZC1wbGFjZWhvbGRlcl09XCJpc051bGwoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pXCIgY21hY3MtdG9vbHRpcFxyXG4gICAgICAgICAgKHRhcCk9XCJvbkRhdGFUYXBFbGxpcHNpcyhncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5KVwiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVHJpZ2dlcl09XCJnZXRUb29sdGlwRWxsaXBzaXNUcmlnZ2VyKClcIlxyXG4gICAgICAgICAgW2NtYWNzVG9vbHRpcFRpdGxlXT1cImlzRWxsaXBzaXNBY3RpdmUoZ3JpZElEICsgJy1yb3ctJyArIGkgKyAnLScgKyBmaWVsZC5wcm9wZXJ0eSwgZmllbGQpID8gKGRhdGFbZmllbGQucHJvcGVydHldID8gKCBkYXRhW2ZpZWxkLnByb3BlcnR5XSAgfCBkYXRlOiBmaWVsZC50aW1lRm9ybWF0ID8gZmllbGQudGltZUZvcm1hdCA6ICdoOm1tIGEnKSA6IGZpZWxkLnBsYWNlaG9sZGVyKSA6IG51bGxcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlubGluZS1jZWxsIGNtYWNzLWNvbXBhY3QtdGFibGUtZGF0ZVwiPnt7IGRhdGFbZmllbGQucHJvcGVydHldID8gKFxyXG4gICAgICAgICAgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gfCBkYXRlOiBmaWVsZC50aW1lRm9ybWF0ID8gZmllbGQudGltZUZvcm1hdCA6ICdoOm1tIGEnKSA6IGZpZWxkLnBsYWNlaG9sZGVyIH19PC9kaXY+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uVUlMYXJnZS1UaW1lXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtY2FsZW5kYXItaWNvbl09XCJpbkxpbmVFZGl0ICYmIGZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWNhbGVuZGFyLWljb24tdmlld109XCIhaW5MaW5lRWRpdCB8fCAhZmllbGQuZWRpdGFibGVcIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLUVkaXRhYmxlIFNlbGVjdCBWaWV3IE1vZGUtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgaXNTZWxlY3QoZmllbGQpXCI+XHJcbiAgICAgIDxkaXYgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhW2NvbmZpZy5maWVsZElkXSwgZmllbGQucHJvcGVydHksICRldmVudCwgZGF0YSlcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSlcIlxyXG4gICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXQtbm8tcGFkZGluZ109XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNOdW1iZXIoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1N0cmluZyhmaWVsZCkpXCJcclxuICAgICAgICBzdHlsZT1cIndpZHRoOiA5OCU7IG1heC13aWR0aDogOTglOyBwYWRkaW5nOiA3cHggMTBweFwiPlxyXG4gICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCIgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKGZpZWxkLCBpdGVtLCBpKVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBhdHRyLmlkPVwie3tncmlkSUR9fS1yb3cte3tpfX0te3tmaWVsZC5wcm9wZXJ0eX19XCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLXZhbGlkLXBsYWNlaG9sZGVyXT1cImlzTnVsbChnZXRMYWJlbChkYXRhLCBmaWVsZCkpIHx8ICFnZXRMYWJlbChkYXRhLCBmaWVsZCkubGVuZ3RoXCJcclxuICAgICAgICAgIGNtYWNzLXRvb2x0aXAgKHRhcCk9XCJvbkRhdGFUYXBFbGxpcHNpcyhncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5KVwiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVHJpZ2dlcl09XCJnZXRUb29sdGlwRWxsaXBzaXNUcmlnZ2VyKClcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtbW9kZS1zdGF0dXMtbG93XT1cImZpZWxkLm1vZGUgPT09ICdzdGF0dXMnICYmIGdldENsYXNzU3RhdHVzKGRhdGEsIGZpZWxkKSA9PT0nbG93J1wiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC1tb2RlLXN0YXR1cy1tZWRpdW1dPVwiZmllbGQubW9kZSA9PT0gJ3N0YXR1cycgJiYgZ2V0Q2xhc3NTdGF0dXMoZGF0YSwgZmllbGQpID09PSdtZWRpdW0nXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLW1vZGUtc3RhdHVzLWhpZ2hdPVwiZmllbGQubW9kZSA9PT0gJ3N0YXR1cycgJiYgZ2V0Q2xhc3NTdGF0dXMoZGF0YSwgZmllbGQpID09PSdoaWdoJ1wiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNFbGxpcHNpc0FjdGl2ZShncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5LCBmaWVsZCkgPyAoZ2V0TGFiZWwoZGF0YSwgZmllbGQpICYmIGdldExhYmVsKGRhdGEsIGZpZWxkKS5sZW5ndGggPyBnZXRMYWJlbChkYXRhLCBmaWVsZCkgOiBmaWVsZC5wbGFjZWhvbGRlcikgOiBudWxsXCJcclxuICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1pbmxpbmUtY2VsbCBjbWFjcy1jb21wYWN0LXRhYmxlLXNlbGVjdFwiPnt7IGdldExhYmVsKGRhdGEsIGZpZWxkKSAmJiBnZXRMYWJlbChkYXRhLFxyXG4gICAgICAgICAgZmllbGQpLmxlbmd0aCA/IGdldExhYmVsKGRhdGEsIGZpZWxkKSA6IGZpZWxkLnBsYWNlaG9sZGVyIH19PC9kaXY+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJmaWVsZC5tb2RlICE9PSAnc3RhdHVzJ1wiIGNsYXNzPVwiaWNvbkFycm93TGFyZ2UtQ2hldnJvbi1Eb3duXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXNlbGVjdC1pY29uXT1cImluTGluZUVkaXQgJiYgZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc2VsZWN0LWljb24tdmlld109XCIhaW5MaW5lRWRpdCB8fCAhZmllbGQuZWRpdGFibGVcIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLUVkaXRhYmxlIElucHV0TnVtYmVyIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc051bWJlcihmaWVsZClcIj5cclxuICAgICAgPGRpdiAoY2xpY2spPVwic3RhcnRFZGl0KGRhdGFbY29uZmlnLmZpZWxkSWRdLCBmaWVsZC5wcm9wZXJ0eSwgJGV2ZW50LCBkYXRhKVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIlxyXG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIiBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoZmllbGQsIGl0ZW0sIGkpXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIGF0dHIuaWQ9XCJ7e2dyaWRJRH19LXJvdy17e2l9fS17e2ZpZWxkLnByb3BlcnR5fX1cIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtdmFsaWQtcGxhY2Vob2xkZXJdPVwiaXNOdWxsKGRhdGFbZmllbGQucHJvcGVydHldKVwiIGNtYWNzLXRvb2x0aXBcclxuICAgICAgICAgICh0YXApPVwib25EYXRhVGFwRWxsaXBzaXMoZ3JpZElEICsgJy1yb3ctJyArIGkgKyAnLScgKyBmaWVsZC5wcm9wZXJ0eSlcIlxyXG4gICAgICAgICAgW2NtYWNzVG9vbHRpcFRyaWdnZXJdPVwiZ2V0VG9vbHRpcEVsbGlwc2lzVHJpZ2dlcigpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUaXRsZV09XCJpc0VsbGlwc2lzQWN0aXZlKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHksIGZpZWxkKSA/IChkYXRhW2ZpZWxkLnByb3BlcnR5XSAhPT0gdW5kZWZpbmVkID8gZmllbGQudXNlQ29tbWFNYXJrZXIgPyBkYXRhW2ZpZWxkLnByb3BlcnR5XS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnLCcpIDogZGF0YVtmaWVsZC5wcm9wZXJ0eV0gOiBmaWVsZC5wbGFjZWhvbGRlcikgOiBudWxsXCJcclxuICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1pbmxpbmUtY2VsbCBjbWFjcy1jb21wYWN0LXRhYmxlLWlucHV0LW51bWJlclwiPnt7IGdldElucHV0TnVtYmVyVmFsdWUoZGF0YSwgZmllbGQpXHJcbiAgICAgICAgICB9fTwvZGl2PlxyXG4gICAgICAgIDxpIGNsYXNzPVwiaWNvbkFycm93TGFyZ2UtU29saWQtVXBEb3duXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWlucHV0LW51bWJlci1pY29uXT1cImluTGluZUVkaXQgJiYgZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXQtbnVtYmVyLWljb24tdmlld109XCIhaW5MaW5lRWRpdCB8fCAhZmllbGQuZWRpdGFibGVcIj5cclxuICAgICAgICA8L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLUh5cGVybGluayBWaWV3IE1vZGUtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgaXNDZWxkVHlwZUh5cGVybGluayhmaWVsZClcIj5cclxuICAgICAgPGRpdiAqbmdJZj1cIiFkYXRhLnBhcmVudFwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWh5cGVybGlua109XCIhZGF0YS5wYXJlbnRcIiAoY2xpY2spPVwiY2xpY2tIeXBlcmxpbmsoZGF0YSlcIj5cclxuICAgICAgICB7e2RhdGFbZmllbGQucHJvcGVydHldfX0gPC9kaXY+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJkYXRhLnBhcmVudFwiPiB7e2RhdGFbZmllbGQucHJvcGVydHldfX0gPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tQm9vbGVhbiBWaWV3IE1vZGUtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgaXNCb29sZWFuKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2IChjbGljayk9XCJzdGFydEVkaXQoZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLnByb3BlcnR5LCAkZXZlbnQsIGRhdGEpXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdF09XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzVGltZShmaWVsZCkpXCJcclxuICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LW5vLXBhZGRpbmddPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzTnVtYmVyKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTdHJpbmcoZmllbGQpKVwiXHJcbiAgICAgICAgc3R5bGU9XCJ3aWR0aDogOTglOyBtYXgtd2lkdGg6IDk4JTsgcGFkZGluZzogN3B4IDEwcHhcIj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImRhdGFbZmllbGQucHJvcGVydHldID09IGZhbHNlIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09ICdmYWxzZSdcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWJvb2xlYW4tZmFsc2UtaWNvbiBjbWFjcy1jb21wYWN0LXRhYmxlLWJvb2xlYW4taWNvblwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gdW5kZWZpbmVkIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSBudWxsXCJcclxuICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1ib29sZWFuLWluZGV0ZXJtaW5hdGUtaWNvbiBjbWFjcy1jb21wYWN0LXRhYmxlLWJvb2xlYW4taWNvblwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1ib29sZWFuLWluZGV0ZXJtaW5hdGUtaWNvbi1pbm5lclwiPjwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gdHJ1ZSB8fCBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gJ3RydWUnXCJcclxuICAgICAgICAgIGNsYXNzPVwiaWNvblVJTGFyZ2UtU2VsZWN0LUFsbCBjbWFjcy1jb21wYWN0LXRhYmxlLWJvb2xlYW4taWNvbi10cnVlXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiPjwvaT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLVBob25lIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc1Bob25lKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2IChjbGljayk9XCJzdGFydEVkaXQoZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLnByb3BlcnR5LCAkZXZlbnQsIGRhdGEpXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdF09XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzUGhvbmUoZmllbGQpKVwiXHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAoaXNOdW1iZXIoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1N0cmluZyhmaWVsZCkgfHwgaXNQaG9uZShmaWVsZCkpXCJcclxuICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDEwMCVcIj5cclxuICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBhdHRyLmlkPVwie3tncmlkSUR9fS1yb3cte3tpfX0te3tmaWVsZC5wcm9wZXJ0eX19XCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLXZhbGlkLXBsYWNlaG9sZGVyXT1cImlzTnVsbChkYXRhW2ZpZWxkLnByb3BlcnR5XSlcIiBjbWFjcy10b29sdGlwXHJcbiAgICAgICAgICAodGFwKT1cIm9uRGF0YVRhcEVsbGlwc2lzKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUcmlnZ2VyXT1cImdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKVwiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNFbGxpcHNpc0FjdGl2ZShncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5LCBmaWVsZCkgPyAoZGF0YVtmaWVsZC5wcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCA/IGZpZWxkLnVzZUNvbW1hTWFya2VyID8gZGF0YVtmaWVsZC5wcm9wZXJ0eV0udG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJywnKSA6IGRhdGFbZmllbGQucHJvcGVydHldIDogZmllbGQucGxhY2Vob2xkZXIpIDogbnVsbFwiXHJcbiAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5saW5lLWNlbGwgY21hY3MtY29tcGFjdC10YWJsZS1pbnB1dC1udW1iZXJcIj5cclxuICAgICAgICAgIDxjbWFjcy1waG9uZS1udW1iZXIgI2ZpZWxkVHlwZVBob25lIGNsYXNzPVwicGhvbmUtbnVtYmVyLXZpZXctbW9kZVwiIFtpbml0XT1cIntpbml0aWFsQ291bnRyeTogJ3VzJ31cIlxyXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xDdXN0b21dPVwiZ2V0UGhvbmVGaWVsZFZhbHVlKGRhdGEsIGZpZWxkKVwiIChjbGljayk9XCJjdXJyZW50UGhvbmVTZWxlY3RlZChkYXRhLCBmaWVsZClcIj5cclxuICAgICAgICAgIDwvY21hY3MtcGhvbmUtbnVtYmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS1FZGl0YWJsZSBBdHRhY2htZW50IEVkaXQgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbk1lbnUgJiYgaXNBdHRhY2htZW50KGZpZWxkKVwiPlxyXG4gICAgICA8Y21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50IChvbkNoYW5nZUF0dGFjaG1lbnRzKT1cIl9vbkNoYW5nZUF0dGFjaG1lbnRzKCRldmVudCwgaSwgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICBbY29uZl09XCJjb2x1bW5NZW51LmF0dGFjaG1lbnRcIiAob25jbGlja0Nob29zZUZpbGUpPVwiX29uY2xpY2tDaG9vc2VGaWxlKGksZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICBbY3RhRHJvcGRvd25PcHRpb25dPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIiBbaW5MaW5lRWRpdF09XCJpbkxpbmVFZGl0XCI+XHJcbiAgICAgIDwvY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSBUZW1wbGF0ZSBWaWV3IE1vZGUgIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAjdGVtcGxhdGVSZWZDZWxkICpuZ0lmPVwiaXNDZWxkVHlwZVRlbXBsYXRlUmVmKGZpZWxkKSAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XVwiPlxyXG4gICAgICA8ZGl2IFtpZF09XCJncmlkSUQgKyAnY29sdW1uJyArIGNpICsgJ3JvdycgKyBpXCIgc3R5bGU9XCJ3aWR0aDogOTglOyBtYXgtd2lkdGg6IDk4JTsgcGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV0ucmVmOyBjb250ZXh0OiBkYXRhW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0XCI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=