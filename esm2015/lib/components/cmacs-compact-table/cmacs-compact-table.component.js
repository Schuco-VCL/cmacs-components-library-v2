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
function CmacsCompactTableComponent_thead_3_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 14);
    i0.ɵɵelementStart(1, "i", 15);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_thead_3_th_2_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.addRow(-1); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵstyleProp("min-width", "40px")("max-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th", ctx_r8.logs);
    i0.ɵɵproperty("nzLeft", ctx_r8.getStickyWidth("smartTable"));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-smart-add-row-icon-visible", !_r0.data.length);
} }
function CmacsCompactTableComponent_thead_3_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 16);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th", ctx_r9.logs)("cmacs-compact-table-logs-header-th-font", ctx_r9.logs);
    i0.ɵɵproperty("nzLeft", ctx_r9.getStickyWidth("draggable"));
} }
function CmacsCompactTableComponent_thead_3_th_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 17);
    i0.ɵɵelementStart(1, "label", 18);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_thead_3_th_4_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.selected = $event; })("checkedChange", function CmacsCompactTableComponent_thead_3_th_4_Template_label_checkedChange_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.onCheckboxAllChange($event); });
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
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 30);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r35); const fi_r22 = i0.ɵɵnextContext(3).index; const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.addcolumn(fi_r22); });
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_cmacs_compact_table_column_tooltip_5_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-compact-table-column-tooltip", 31);
    i0.ɵɵlistener("onFieldChanged", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_cmacs_compact_table_column_tooltip_5_Template_cmacs_compact_table_column_tooltip_onFieldChanged_0_listener($event) { i0.ɵɵrestoreView(_r38); const fi_r22 = i0.ɵɵnextContext(3).index; const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.onFieldChanged(fi_r22, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r21 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("field", field_r21)("items", ctx_r30.columnMenu);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_i_6_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 32);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_i_6_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r42); const fi_r22 = i0.ɵɵnextContext(3).index; const ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.openColumnMore(fi_r22); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fi_r22 = i0.ɵɵnextContext(3).index;
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-column-more-selected", ctx_r31.selectedMore === fi_r22 && ctx_r31.selectedMore !== -1);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_cmacs_compact_table_column_more_7_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-compact-table-column-more", 33);
    i0.ɵɵlistener("onFieldChanged", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_cmacs_compact_table_column_more_7_Template_cmacs_compact_table_column_more_onFieldChanged_0_listener($event) { i0.ɵɵrestoreView(_r46); const fi_r22 = i0.ɵɵnextContext(3).index; const ctx_r44 = i0.ɵɵnextContext(2); return ctx_r44.onFieldChanged(fi_r22, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r21 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("field", field_r21)("items", ctx_r32.columnMenu)("labelSave", ctx_r32.columnMenu.advancedConfiguration.labelSave);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_i_2_Template, 1, 0, "i", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 26);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_Template_div_tap_3_listener() { i0.ɵɵrestoreView(_r49); const fi_r22 = i0.ɵɵnextContext(2).index; const ctx_r48 = i0.ɵɵnextContext(2); return ctx_r48.onFieldTapEllipsis(ctx_r48.gridID + "-column-" + fi_r22 + "-title"); })("click", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r49); const fi_r22 = i0.ɵɵnextContext(2).index; const ctx_r51 = i0.ɵɵnextContext(2); return ctx_r51.openColumnMenu(fi_r22); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_cmacs_compact_table_column_tooltip_5_Template, 1, 2, "cmacs-compact-table-column-tooltip", 27);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_i_6_Template, 1, 2, "i", 28);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_cmacs_compact_table_column_more_7_Template, 1, 3, "cmacs-compact-table-column-more", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r53 = i0.ɵɵnextContext(2);
    const field_r21 = ctx_r53.$implicit;
    const fi_r22 = ctx_r53.index;
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("min-width", field_r21.minWidth ? field_r21.minWidth : "50px")("width", field_r21.width ? field_r21.width : "100px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r26.addColumn);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r26.getHeaderMaxWidth(field_r21));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-header", !ctx_r26.wrapLines)("cmacs-compact-table-column-tooltip", ctx_r26.addColumn);
    i0.ɵɵattributeInterpolate2("id", "", ctx_r26.gridID, "-column-", fi_r22, "-title");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r26.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r26.isEllipsisActive(ctx_r26.gridID + "-column-" + fi_r22 + "-title", field_r21) ? field_r21.display : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", field_r21.display, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r26.addColumn && ctx_r26.selectedColumnId === fi_r22 && ctx_r26.selectedColumnId !== -1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r26.addColumn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r26.addColumn && ctx_r26.selectedMore === fi_r22 && ctx_r26.selectedMore !== -1);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementContainer(1, 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext(2);
    const fi_r22 = ctx_r54.index;
    const field_r21 = ctx_r54.$implicit;
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", ctx_r27.gridID + "column" + fi_r22);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", field_r21.template.ref)("ngTemplateOutletContext", field_r21.template.context);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_nz_resize_handle_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-resize-handle", 35);
    i0.ɵɵelement(1, "div", 36);
    i0.ɵɵelementEnd();
} }
const _c8 = function () { return []; };
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 21);
    i0.ɵɵlistener("nzFilterChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzFilterChange_1_listener($event) { i0.ɵɵrestoreView(_r57); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r55 = i0.ɵɵnextContext(2); return ctx_r55.filter($event, field_r21.property); })("nzResizeEnd", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzResizeEnd_1_listener($event) { i0.ɵɵrestoreView(_r57); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r58 = i0.ɵɵnextContext(2); return ctx_r58.onResize($event, field_r21.property, field_r21); })("nzSortOrderChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzSortOrderChange_1_listener($event) { i0.ɵɵrestoreView(_r57); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r60 = i0.ɵɵnextContext(2); return field_r21.showSort ? field_r21.sortOrder : ctx_r60.defaultSortOrder = $event; })("nzSortOrderChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzSortOrderChange_1_listener($event) { i0.ɵɵrestoreView(_r57); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r62 = i0.ɵɵnextContext(2); return ctx_r62.sort($event, field_r21.property); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_Template, 8, 19, "ng-container", 3);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_div_3_Template, 2, 3, "div", 22);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_nz_resize_handle_4_Template, 2, 0, "nz-resize-handle", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r64 = i0.ɵɵnextContext();
    const fi_r22 = ctx_r64.index;
    const field_r21 = ctx_r64.$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵattributeInterpolate2("id", "", ctx_r23.gridID, "-column-", fi_r22, "");
    i0.ɵɵproperty("nzShowSort", field_r21.showSort)("nzShowFilter", field_r21.showFilter)("nzFilters", field_r21.filters ? field_r21.filters : i0.ɵɵpureFunction0(17, _c8))("nzFilterMultiple", field_r21.filterMultiple)("nzDisabled", !field_r21.resizable)("nzMinWidth", field_r21.minWidth ? field_r21.minWidth : 100)("nzMaxWidth", field_r21.maxWidth ? field_r21.maxWidth : 500)("ngClass", ctx_r23.getClassMap(field_r21))("nzSortOrder", field_r21.showSort ? field_r21.sortOrder : ctx_r23.defaultSortOrder)("nzWidth", field_r21.width)("nzLeft", field_r21.left ? field_r21.left : false)("nzRight", field_r21.right ? field_r21.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r21.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r21.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r21.resizable);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementContainer(1, 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r69 = i0.ɵɵnextContext(2);
    const fi_r22 = ctx_r69.index;
    const field_r21 = ctx_r69.$implicit;
    const ctx_r65 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", ctx_r65.gridID + "column" + fi_r22);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", field_r21.template.ref)("ngTemplateOutletContext", field_r21.template.context);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 41);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_ng_container_6_Template_div_tap_1_listener() { i0.ɵɵrestoreView(_r71); const fi_r22 = i0.ɵɵnextContext(2).index; const ctx_r70 = i0.ɵɵnextContext(2); return ctx_r70.onFieldTapEllipsis(ctx_r70.gridID + "-column-" + fi_r22 + "-title"); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r73 = i0.ɵɵnextContext(2);
    const field_r21 = ctx_r73.$implicit;
    const fi_r22 = ctx_r73.index;
    const ctx_r67 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r67.getHeaderMaxWidth(field_r21));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-header", !ctx_r67.wrapLines);
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r67.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r67.isEllipsisActive(ctx_r67.gridID + "-column-" + fi_r22 + "-title", field_r21) ? field_r21.display : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(field_r21.display);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_nz_resize_handle_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-resize-handle", 35);
    i0.ɵɵelement(1, "div", 36);
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r76 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 37);
    i0.ɵɵlistener("nzResizeEnd", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template_th_nzResizeEnd_0_listener($event) { i0.ɵɵrestoreView(_r76); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r74 = i0.ɵɵnextContext(2); return ctx_r74.onResize($event, field_r21.property, field_r21); })("nzSortOrderChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template_th_nzSortOrderChange_0_listener($event) { i0.ɵɵrestoreView(_r76); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r77 = i0.ɵɵnextContext(2); return field_r21.showSort ? field_r21.sortOrder : ctx_r77.defaultSortOrder = $event; })("nzSortOrderChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template_th_nzSortOrderChange_0_listener($event) { i0.ɵɵrestoreView(_r76); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r79 = i0.ɵɵnextContext(2); return ctx_r79.sort($event, field_r21.property); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_div_1_Template, 2, 3, "div", 22);
    i0.ɵɵelementStart(2, "nz-dropdown", 38, 39);
    i0.ɵɵelement(4, "i", 40);
    i0.ɵɵelementContainer(5, 34);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_ng_container_6_Template, 3, 7, "ng-container", 3);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_nz_resize_handle_7_Template, 2, 0, "nz-resize-handle", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r66 = i0.ɵɵreference(3);
    const ctx_r81 = i0.ɵɵnextContext();
    const fi_r22 = ctx_r81.index;
    const field_r21 = ctx_r81.$implicit;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵattributeInterpolate2("id", "", ctx_r25.gridID, "-column-", fi_r22, "");
    i0.ɵɵproperty("nzShowSort", field_r21.showSort)("nzDisabled", !field_r21.resizable)("ngClass", ctx_r25.getClassMap(field_r21))("nzSortOrder", field_r21.showSort ? field_r21.sortOrder : ctx_r25.defaultSortOrder)("nzWidth", field_r21.width)("nzMinWidth", field_r21.minWidth ? field_r21.minWidth : 100)("nzMaxWidth", field_r21.maxWidth ? field_r21.maxWidth : 500)("nzLeft", field_r21.left ? field_r21.left : false)("nzRight", field_r21.right ? field_r21.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r21.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzClickHide", false);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("ant-table-filter-open", _r66.nzVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", field_r21.customFilter.ref)("ngTemplateOutletContext", field_r21.customFilter.context);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r21.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r21.resizable);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template, 5, 18, "ng-container", 19);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template, 8, 19, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r21 = ctx.$implicit;
    const _r24 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r21.customFilter)("ngIfElse", _r24);
} }
function CmacsCompactTableComponent_thead_3_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th");
} }
function CmacsCompactTableComponent_thead_3_th_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r82 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r82.extra);
} }
function CmacsCompactTableComponent_thead_3_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 42);
    i0.ɵɵelementStart(1, "div", 43);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_th_7_ng_container_2_Template, 2, 1, "ng-container", 44);
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
    i0.ɵɵelement(0, "th", 45);
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
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_th_2_Template, 2, 9, "th", 7);
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
    const _r100 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 55);
    i0.ɵɵelementStart(1, "label", 18);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r100); const item_r91 = i0.ɵɵnextContext(2).$implicit; const ctx_r98 = i0.ɵɵnextContext(5); return ctx_r98.getNode(item_r91[ctx_r98.fieldID]).selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template_label_checkedChange_1_listener($event) { i0.ɵɵrestoreView(_r100); const item_r91 = i0.ɵɵnextContext(2).$implicit; const data_r88 = i0.ɵɵnextContext().$implicit; const ctx_r101 = i0.ɵɵnextContext(4); return ctx_r101.onCheckboxTreeChange($event, item_r91, ctx_r101.mapOfExpandedData[data_r88[ctx_r101.fieldID]]); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r91 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r93 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("min-width", "30px")("max-width", "30px")("width", "30px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r93.logs && !!item_r91.children);
    i0.ɵɵproperty("nzLeft", ctx_r93.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r93.getNode(item_r91[ctx_r93.fieldID]).selected)("indeterminate", ctx_r93.getNode(item_r91[ctx_r93.fieldID]).selected === -1);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c9 = function (a0, a1, a2, a3, a4) { return { field: a0, data: a1, i: a2, item: a3, ci: a4 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template, 1, 0, "ng-container", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r110 = i0.ɵɵnextContext();
    const field_r105 = ctx_r110.$implicit;
    const i_r106 = ctx_r110.index;
    const item_r91 = i0.ɵɵnextContext(2).$implicit;
    const di_r89 = i0.ɵɵnextContext().index;
    const ctx_r107 = i0.ɵɵnextContext(4);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵstyleProp("display", ctx_r107.isNumber(field_r105) || ctx_r107.isTime(field_r105) || ctx_r107.isDate(field_r105) || ctx_r107.isSelect(field_r105) ? "block" : "inline-flex")("width", item_r91.children && !i_r106 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-container-logs", ctx_r107.expandable && ctx_r107.isString(field_r105) && !i_r106);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction5(8, _c9, field_r105, item_r91, di_r89, item_r91, i_r106));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c10 = function (a0, a1, a2) { return { field: a0, data: a1, i: a2 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template, 1, 0, "ng-container", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r114 = i0.ɵɵnextContext();
    const field_r105 = ctx_r114.$implicit;
    const i_r106 = ctx_r114.index;
    const item_r91 = i0.ɵɵnextContext(2).$implicit;
    const di_r89 = i0.ɵɵnextContext().index;
    const ctx_r108 = i0.ɵɵnextContext(4);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵstyleProp("display", ctx_r108.isNumber(field_r105) ? "block" : "inline-flex")("width", item_r91.children && !i_r106 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(6, _c10, field_r105, item_r91, di_r89));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r119 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 56);
    i0.ɵɵlistener("nzExpandChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r119); const item_r91 = i0.ɵɵnextContext(2).$implicit; return item_r91.expand = $event; })("nzExpandChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r119); const item_r91 = i0.ɵɵnextContext(2).$implicit; const data_r88 = i0.ɵɵnextContext().$implicit; const ctx_r120 = i0.ɵɵnextContext(4); return ctx_r120.ExpandCollapse(ctx_r120.mapOfExpandedData[data_r88[ctx_r120.fieldID]], item_r91, $event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template, 2, 14, "div", 57);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template, 2, 10, "div", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r105 = ctx.$implicit;
    const i_r106 = ctx.index;
    const item_r91 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r94 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("padding-left", ctx_r94.getCustomPadding(item_r91, i_r106), "px")("min-width", field_r105.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r105.editable)("cmacs-compact-table-on-edit-expandable", ctx_r94.editId === item_r91[ctx_r94.config.fieldId] && ctx_r94.property === field_r105.property && field_r105.editable && (ctx_r94.isString(field_r105) || ctx_r94.isDate(field_r105) || ctx_r94.isTime(field_r105) || ctx_r94.isSelect(field_r105) || ctx_r94.isNumber(field_r105) && field_r105.editable))("cmacs-compact-table-logs-header-th-font", ctx_r94.logs && !!item_r91.children)("cmacs-compact-table-expandable-td", !i_r106);
    i0.ɵɵproperty("ngClass", ctx_r94.getCustomClass(field_r105))("nzShowExpand", !ctx_r94.isNull(item_r91.children) && !i_r106)("nzExpand", item_r91.expand)("nzLeft", field_r105.left ? field_r105.left : false)("nzRight", field_r105.right ? field_r105.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r94.showViewModeTpl(field_r105, item_r91));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r94.showEditTpl(item_r91, field_r105));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r126 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 60);
    i0.ɵɵelementStart(1, "nz-rate", 61);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r126); const data_r88 = i0.ɵɵnextContext(3).$implicit; const ctx_r124 = i0.ɵɵnextContext(4); return ctx_r124.onRateChange($event, data_r88); })("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r126); const ctx_r127 = i0.ɵɵnextContext(7); return ctx_r127.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r91 = i0.ɵɵnextContext(2).$implicit;
    const data_r88 = i0.ɵɵnextContext().$implicit;
    const ctx_r95 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r95.logs && !!item_r91.children);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r88[ctx_r95.config.fieldRate])("nzCount", ctx_r95.rateCount)("nzDisabled", !ctx_r95.inLineEdit);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 62);
} if (rf & 2) {
    const item_r91 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r96 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r96.logs && !!item_r91.children);
    i0.ɵɵproperty("nzRight", ctx_r96.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 63);
} if (rf & 2) {
    const ctx_r97 = i0.ɵɵnextContext(7);
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r97.logs);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r133 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 49);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_click_0_listener() { i0.ɵɵrestoreView(_r133); const item_r91 = i0.ɵɵnextContext().$implicit; const ctx_r131 = i0.ɵɵnextContext(5); return ctx_r131.selectTreeSingle(item_r91); })("touchstart", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r133); const item_r91 = i0.ɵɵnextContext().$implicit; const ctx_r134 = i0.ɵɵnextContext(5); return ctx_r134.tapHandler($event, item_r91); })("contextmenu", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r133); const item_r91 = i0.ɵɵnextContext().$implicit; const ctx_r136 = i0.ɵɵnextContext(5); return ctx_r136.oncontextmenuevt($event, item_r91); })("dblclick", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_dblclick_0_listener() { i0.ɵɵrestoreView(_r133); const item_r91 = i0.ɵɵnextContext().$implicit; const ctx_r138 = i0.ɵɵnextContext(5); return ctx_r138.dblClickRow(item_r91); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template, 2, 11, "td", 50);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template, 3, 19, "td", 51);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template, 2, 5, "td", 52);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_4_Template, 1, 3, "td", 53);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_5_Template, 1, 2, "td", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r91 = i0.ɵɵnextContext().$implicit;
    const ctx_r92 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-expandable-row", ctx_r92.inLineEdit)("cmacs-compact-table-row-active", ctx_r92.editId === item_r91[ctx_r92.fieldID])("cmacs-compact-table-header-logs", ctx_r92.logs && !!item_r91.children)("ant-table-selected-row", ctx_r92.checkboxSelect ? ctx_r92.getNode(item_r91[ctx_r92.fieldID]).selected : ctx_r92.selection.isSelected(item_r91[ctx_r92.fieldID]));
    i0.ɵɵpropertyInterpolate1("id", "tr-", item_r91[ctx_r92.fieldID], "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r92.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r92.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r92.showRate && ctx_r92.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r92.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r92.centerTable);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template, 6, 14, "tr", 48);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r91 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r91.parent && item_r91.parent.expand || !item_r91.parent);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r88 = ctx.$implicit;
    const ctx_r87 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r87.mapOfExpandedData[data_r88[ctx_r87.fieldID]]);
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
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r155 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 74);
    i0.ɵɵelementStart(1, "i", 15);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_4_Template_i_click_1_listener($event) { i0.ɵɵrestoreView(_r155); const i_r143 = i0.ɵɵnextContext().index; const ctx_r153 = i0.ɵɵnextContext(4); return ctx_r153.addRow(i_r143, $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r145 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵproperty("nzLeft", ctx_r145.getStickyWidth("smartTable"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 75);
    i0.ɵɵelement(1, "i", 76);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r146 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵproperty("nzLeft", ctx_r146.getStickyWidth("draggable"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r158 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 78);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r158); const data_r142 = i0.ɵɵnextContext(2).$implicit; const ctx_r157 = i0.ɵɵnextContext(4); return ctx_r157.checkboxCache[ctx_r157.getIndex(data_r142[ctx_r157.config.fieldId])].selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r158); const data_r142 = i0.ɵɵnextContext(2).$implicit; const ctx_r160 = i0.ɵɵnextContext(4); return ctx_r160.onCheckboxChange($event, data_r142); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r142 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r156 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngModel", ctx_r156.checkboxCache[ctx_r156.getIndex(data_r142[ctx_r156.config.fieldId])].selected);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 55);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template, 1, 1, "label", 77);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r142 = i0.ɵɵnextContext().$implicit;
    const ctx_r147 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("cmacs-compact-table-fst-td", !ctx_r147.draggable);
    i0.ɵɵproperty("nzLeft", ctx_r147.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r142[ctx_r147.config.fieldId] && ctx_r147.checkboxCache[ctx_r147.getIndex(data_r142[ctx_r147.config.fieldId])]);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c11 = function (a0, a1, a2, a3) { return { field: a0, data: a1, i: a2, ci: a3 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_ng_container_1_Template, 1, 0, "ng-container", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r169 = i0.ɵɵnextContext();
    const field_r164 = ctx_r169.$implicit;
    const j_r165 = ctx_r169.index;
    const ctx_r170 = i0.ɵɵnextContext();
    const data_r142 = ctx_r170.$implicit;
    const i_r143 = ctx_r170.index;
    i0.ɵɵnextContext(4);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c11, field_r164, data_r142, i_r143, j_r165));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_ng_container_1_Template, 1, 0, "ng-container", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r164 = i0.ɵɵnextContext().$implicit;
    const ctx_r173 = i0.ɵɵnextContext();
    const data_r142 = ctx_r173.$implicit;
    const i_r143 = ctx_r173.index;
    i0.ɵɵnextContext(4);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c10, field_r164, data_r142, i_r143));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 79);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_Template, 2, 7, "div", 80);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_Template, 2, 6, "div", 80);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r164 = ctx.$implicit;
    const j_r165 = ctx.index;
    const data_r142 = i0.ɵɵnextContext().$implicit;
    const ctx_r148 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("min-width", field_r164.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r164.editable)("cmacs-compact-table-fst-td", !ctx_r148.draggable && !ctx_r148.checkboxSelect && !j_r165);
    i0.ɵɵproperty("ngClass", ctx_r148.getCustomClass(field_r164))("nzLeft", field_r164.left ? field_r164.left : false)("nzRight", field_r164.right ? field_r164.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r148.showViewModeTplTree(field_r164, data_r142));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r148.showEditTplTree(data_r142, field_r164));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r177 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 82);
    i0.ɵɵelementStart(1, "nz-rate", 83);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r177); const data_r142 = i0.ɵɵnextContext().$implicit; const ctx_r175 = i0.ɵɵnextContext(4); return ctx_r175.onRateChange($event, data_r142); })("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r177); const ctx_r178 = i0.ɵɵnextContext(5); return ctx_r178.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r142 = i0.ɵɵnextContext().$implicit;
    const ctx_r149 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r142[ctx_r149.config.fieldRate])("nzCount", ctx_r149.rateCount);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 62);
} if (rf & 2) {
    const ctx_r150 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("nzRight", ctx_r150.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r183 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 86);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_i_1_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r183); const i_r143 = i0.ɵɵnextContext(2).index; const ctx_r181 = i0.ɵɵnextContext(4); return ctx_r181.deleteRow(i_r143, $event); });
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 84);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_i_1_Template, 1, 0, "i", 85);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r142 = i0.ɵɵnextContext().$implicit;
    const ctx_r151 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵproperty("nzRight", ctx_r151.getStickyWidthRight("smartTable"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r142.deleteEnabled === undefined || data_r142.deleteEnabled);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 63);
} if (rf & 2) {
    const ctx_r152 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r152.logs);
} }
const _c12 = function (a0, a1) { return { dropdown: a0, data: a1 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r186 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 65);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r186); const data_r142 = ctx.$implicit; const ctx_r185 = i0.ɵɵnextContext(4); return ctx_r185.clickRow($event, data_r142); })("touchstart", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r186); const data_r142 = ctx.$implicit; const ctx_r187 = i0.ɵɵnextContext(4); return ctx_r187.tapHandler($event, data_r142); })("contextmenu", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r186); const _r144 = i0.ɵɵreference(2); const ctx_r188 = i0.ɵɵnextContext(4); return ctx_r188.contextMenu($event, _r144); });
    i0.ɵɵelementStart(1, "cmacs-dropdown-menu", null, 66);
    i0.ɵɵelementContainer(3, 34);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_4_Template, 2, 5, "td", 67);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_5_Template, 2, 5, "td", 68);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_Template, 2, 4, "td", 69);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_Template, 3, 11, "td", 70);
    i0.ɵɵtemplate(8, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template, 2, 2, "td", 71);
    i0.ɵɵtemplate(9, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_9_Template, 1, 1, "td", 72);
    i0.ɵɵtemplate(10, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_Template, 2, 6, "td", 73);
    i0.ɵɵtemplate(11, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_11_Template, 1, 2, "td", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r142 = ctx.$implicit;
    const ctx_r141 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("cmacs-compact-table-row-active", ctx_r141.editId === data_r142[ctx_r141.config.fieldId])("ant-table-selected-row", ctx_r141.isRowSelected(data_r142))("cmacs-compact-table-editable-row", ctx_r141.inLineEdit)("cmacs-compact-table-smart-table-row", ctx_r141.smartTable && ctx_r141.inLineEdit);
    i0.ɵɵpropertyInterpolate1("id", "tr-", data_r142[ctx_r141.config.fieldId], "");
    i0.ɵɵproperty("cdkDragDisabled", !ctx_r141.draggable);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r141.contextmenu)("ngTemplateOutletContext", i0.ɵɵpureFunction2(20, _c12, ctx_r141.dropdown, data_r142));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r141.smartTable && ctx_r141.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r141.draggable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r141.checkboxSelect && ctx_r141.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r141.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r141.showRate && ctx_r141.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r141.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r141.smartTable && ctx_r141.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r141.centerTable);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template, 12, 23, "tr", 64);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngForOf", _r0.data);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 19);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 47, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r85 = i0.ɵɵreference(3);
    const ctx_r83 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r83.expandable)("ngIfElse", _r85);
} }
function CmacsCompactTableComponent_tbody_4_Template(rf, ctx) { if (rf & 1) {
    const _r190 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tbody", 46);
    i0.ɵɵlistener("cdkDropListDropped", function CmacsCompactTableComponent_tbody_4_Template_tbody_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r190); const ctx_r189 = i0.ɵɵnextContext(); return ctx_r189.drop($event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_Template, 4, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.config && ctx_r2.config.fields && ctx_r2.config.fields.length);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r207 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 55);
    i0.ɵɵelementStart(1, "label", 18);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r207); const item_r199 = i0.ɵɵnextContext(2).$implicit; const ctx_r205 = i0.ɵɵnextContext(5); return ctx_r205.getNode(item_r199[ctx_r205.fieldID]).selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template_label_checkedChange_1_listener($event) { i0.ɵɵrestoreView(_r207); const item_r199 = i0.ɵɵnextContext(2).$implicit; const data_r192 = i0.ɵɵnextContext(3).$implicit; const ctx_r208 = i0.ɵɵnextContext(2); return ctx_r208.onCheckboxTreeChange($event, item_r199, ctx_r208.mapOfExpandedData[data_r192[ctx_r208.fieldID]]); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r199 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r201 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("min-width", "30px")("max-width", "30px")("width", "30px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r201.logs && !!item_r199.children);
    i0.ɵɵproperty("nzLeft", ctx_r201.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r201.getNode(item_r199[ctx_r201.fieldID]).selected)("indeterminate", ctx_r201.getNode(item_r199[ctx_r201.fieldID]).selected === -1);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template, 1, 0, "ng-container", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r217 = i0.ɵɵnextContext();
    const field_r212 = ctx_r217.$implicit;
    const i_r213 = ctx_r217.index;
    const item_r199 = i0.ɵɵnextContext(2).$implicit;
    const di_r193 = i0.ɵɵnextContext(3).i;
    const ctx_r214 = i0.ɵɵnextContext(2);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵstyleProp("display", ctx_r214.isNumber(field_r212) || ctx_r214.isTime(field_r212) || ctx_r214.isDate(field_r212) || ctx_r214.isSelect(field_r212) ? "block" : "inline-flex")("width", item_r199.children && !i_r213 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-container-logs", ctx_r214.expandable && ctx_r214.isString(field_r212) && !i_r213);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction5(8, _c9, field_r212, item_r199, di_r193, item_r199, i_r213));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template, 1, 0, "ng-container", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r221 = i0.ɵɵnextContext();
    const field_r212 = ctx_r221.$implicit;
    const i_r213 = ctx_r221.index;
    const item_r199 = i0.ɵɵnextContext(2).$implicit;
    const di_r193 = i0.ɵɵnextContext(3).i;
    const ctx_r215 = i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵstyleProp("display", ctx_r215.isNumber(field_r212) ? "block" : "inline-flex")("width", item_r199.children && !i_r213 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(6, _c10, field_r212, item_r199, di_r193));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r226 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 92);
    i0.ɵɵlistener("nzExpandChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r226); const item_r199 = i0.ɵɵnextContext(2).$implicit; return item_r199.expand = $event; })("nzExpandChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r226); const item_r199 = i0.ɵɵnextContext(2).$implicit; const data_r192 = i0.ɵɵnextContext(3).$implicit; const ctx_r227 = i0.ɵɵnextContext(2); return ctx_r227.ExpandCollapse(ctx_r227.mapOfExpandedData[data_r192[ctx_r227.fieldID]], item_r199, $event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template, 2, 14, "div", 57);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template, 2, 10, "div", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r212 = ctx.$implicit;
    const i_r213 = ctx.index;
    const item_r199 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r202 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("padding-left", ctx_r202.getCustomPadding(item_r199, i_r213), "px")("min-width", field_r212.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r212.editable)("cmacs-compact-table-on-edit-expandable", ctx_r202.editId === item_r199[ctx_r202.config.fieldId] && ctx_r202.property === field_r212.property && field_r212.editable && (ctx_r202.isString(field_r212) || ctx_r202.isDate(field_r212) || ctx_r202.isTime(field_r212) || ctx_r202.isSelect(field_r212) || ctx_r202.isNumber(field_r212) && field_r212.editable))("cmacs-compact-table-logs-header-th-font", ctx_r202.logs && !!item_r199.children)("cmacs-compact-table-expandable-td", !i_r213);
    i0.ɵɵproperty("nzShowExpand", !!item_r199.children && !i_r213)("nzExpand", item_r199.expand)("nzLeft", field_r212.left ? field_r212.left : false)("nzRight", field_r212.right ? field_r212.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r202.showViewModeTpl(field_r212, item_r199));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r202.showEditTpl(item_r199, field_r212));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r233 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 60);
    i0.ɵɵelementStart(1, "nz-rate", 61);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r233); const data_r192 = i0.ɵɵnextContext(5).$implicit; const ctx_r231 = i0.ɵɵnextContext(2); return ctx_r231.onRateChange($event, data_r192); })("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r233); const ctx_r234 = i0.ɵɵnextContext(7); return ctx_r234.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r199 = i0.ɵɵnextContext(2).$implicit;
    const data_r192 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r203 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r203.logs && item_r199.children && item_r199.children.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r192[ctx_r203.config.fieldRate])("nzCount", ctx_r203.rateCount)("nzDisabled", !ctx_r203.inLineEdit);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 62);
} if (rf & 2) {
    const item_r199 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r204 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r204.logs && item_r199.children && item_r199.children.length);
    i0.ɵɵproperty("nzRight", ctx_r204.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r240 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 90);
    i0.ɵɵlistener("touchstart", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r240); const item_r199 = i0.ɵɵnextContext().$implicit; const ctx_r238 = i0.ɵɵnextContext(5); return ctx_r238.tapHandler($event, item_r199); })("contextmenu", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r240); const item_r199 = i0.ɵɵnextContext().$implicit; const ctx_r241 = i0.ɵɵnextContext(5); return ctx_r241.oncontextmenuevt($event, item_r199); })("dblclick", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template_tr_dblclick_0_listener() { i0.ɵɵrestoreView(_r240); const item_r199 = i0.ɵɵnextContext().$implicit; const ctx_r243 = i0.ɵɵnextContext(5); return ctx_r243.dblClickRow(item_r199); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template, 2, 11, "td", 50);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template, 3, 18, "td", 91);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template, 2, 5, "td", 52);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_4_Template, 1, 3, "td", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r199 = i0.ɵɵnextContext().$implicit;
    const ctx_r200 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-row-active", ctx_r200.editId === item_r199[ctx_r200.fieldID])("cmacs-compact-table-expandable-row", ctx_r200.inLineEdit)("cmacs-compact-table-header-logs", ctx_r200.logs && !!item_r199.children);
    i0.ɵɵpropertyInterpolate1("id", "tr-", item_r199[ctx_r200.fieldID], "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r200.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r200.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r200.showRate && ctx_r200.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r200.extra);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template, 5, 11, "tr", 89);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r199 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r199.parent && item_r199.parent.expand || !item_r199.parent);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r192 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r195 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r195.mapOfExpandedData[data_r192[ctx_r195.fieldID]]);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 34);
} if (rf & 2) {
    const data_r192 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r248 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r248.contextmenu)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c12, ctx_r248.dropdown, data_r192));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r259 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 74);
    i0.ɵɵelementStart(1, "i", 15);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_Template_i_click_1_listener($event) { i0.ɵɵrestoreView(_r259); const di_r193 = i0.ɵɵnextContext(3).i; const ctx_r257 = i0.ɵɵnextContext(2); return ctx_r257.addRow(di_r193, $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r249 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r249.logs);
    i0.ɵɵproperty("nzLeft", ctx_r249.getStickyWidth("smartTable"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 75);
    i0.ɵɵelement(1, "i", 76);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r250 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵproperty("nzLeft", ctx_r250.getStickyWidth("draggable"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r262 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 78);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r262); const data_r192 = i0.ɵɵnextContext(4).$implicit; const ctx_r261 = i0.ɵɵnextContext(2); return ctx_r261.checkboxCache[ctx_r261.getIndex(data_r192[ctx_r261.config.fieldId])].selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r262); const data_r192 = i0.ɵɵnextContext(4).$implicit; const ctx_r264 = i0.ɵɵnextContext(2); return ctx_r264.onCheckboxChange($event, data_r192); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r192 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r260 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r260.checkboxCache[ctx_r260.getIndex(data_r192[ctx_r260.config.fieldId])].selected);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 55);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template, 1, 1, "label", 77);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r192 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r251 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-fst-td", !ctx_r251.draggable);
    i0.ɵɵproperty("nzLeft", ctx_r251.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r192[ctx_r251.config.fieldId] && ctx_r251.checkboxCache[ctx_r251.getIndex(data_r192[ctx_r251.config.fieldId])]);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_ng_container_1_Template, 1, 0, "ng-container", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r273 = i0.ɵɵnextContext();
    const field_r268 = ctx_r273.$implicit;
    const j_r269 = ctx_r273.index;
    const ctx_r274 = i0.ɵɵnextContext(3);
    const data_r192 = ctx_r274.$implicit;
    const di_r193 = ctx_r274.i;
    i0.ɵɵnextContext(2);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c11, field_r268, data_r192, di_r193, j_r269));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_ng_container_1_Template, 1, 0, "ng-container", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r268 = i0.ɵɵnextContext().$implicit;
    const ctx_r277 = i0.ɵɵnextContext(3);
    const data_r192 = ctx_r277.$implicit;
    const di_r193 = ctx_r277.i;
    i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c10, field_r268, data_r192, di_r193));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 97);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_Template, 2, 7, "div", 80);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_Template, 2, 6, "div", 80);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r268 = ctx.$implicit;
    const j_r269 = ctx.index;
    const data_r192 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r252 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("min-width", field_r268.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r268.editable)("cmacs-compact-table-fst-td", !ctx_r252.draggable && !ctx_r252.checkboxSelect && !j_r269);
    i0.ɵɵproperty("nzLeft", field_r268.left ? field_r268.left : false)("nzRight", field_r268.right ? field_r268.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r252.showViewModeTplTree(field_r268, data_r192));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r252.showEditTplTree(data_r192, field_r268));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r281 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 82);
    i0.ɵɵelementStart(1, "nz-rate", 83);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r281); const data_r192 = i0.ɵɵnextContext(3).$implicit; const ctx_r279 = i0.ɵɵnextContext(2); return ctx_r279.onRateChange($event, data_r192); })("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r281); const ctx_r282 = i0.ɵɵnextContext(5); return ctx_r282.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r192 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r253 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r192[ctx_r253.config.fieldRate])("nzCount", ctx_r253.rateCount);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 62);
} if (rf & 2) {
    const ctx_r254 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("nzRight", ctx_r254.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r287 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 86);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_i_1_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r287); const di_r193 = i0.ɵɵnextContext(4).i; const ctx_r285 = i0.ɵɵnextContext(2); return ctx_r285.deleteRow(di_r193, $event); });
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 84);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_i_1_Template, 1, 0, "i", 85);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r192 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r255 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r255.logs);
    i0.ɵɵproperty("nzRight", ctx_r255.getStickyWidthRight("smartTable"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r192.deleteEnabled === undefined || data_r192.deleteEnabled);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r291 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 65);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r291); const data_r192 = i0.ɵɵnextContext(2).$implicit; const ctx_r289 = i0.ɵɵnextContext(2); return ctx_r289.clickRow($event, data_r192); })("touchstart", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r291); const data_r192 = i0.ɵɵnextContext(2).$implicit; const ctx_r292 = i0.ɵɵnextContext(2); return ctx_r292.tapHandler($event, data_r192); })("contextmenu", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r291); const _r247 = i0.ɵɵreference(2); const data_r192 = i0.ɵɵnextContext(2).$implicit; const ctx_r294 = i0.ɵɵnextContext(2); return ctx_r294.contextMenu($event, _r247, data_r192); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_ng_template_1_Template, 1, 5, "ng-template", null, 93, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_Template, 2, 7, "td", 94);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_4_Template, 2, 5, "td", 68);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_Template, 2, 4, "td", 69);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_Template, 3, 10, "td", 95);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template, 2, 2, "td", 71);
    i0.ɵɵtemplate(8, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_8_Template, 1, 1, "td", 72);
    i0.ɵɵtemplate(9, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_Template, 2, 8, "td", 96);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r192 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r197 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-row-active", ctx_r197.editId === data_r192[ctx_r197.config.fieldId])("ant-table-selected-row", ctx_r197.isRowSelected(data_r192))("cmacs-compact-table-editable-row", ctx_r197.inLineEdit)("cmacs-compact-table-smart-table-row", ctx_r197.smartTable && ctx_r197.inLineEdit);
    i0.ɵɵpropertyInterpolate1("id", "tr-", data_r192[ctx_r197.config.fieldId], "");
    i0.ɵɵproperty("cdkDragDisabled", !ctx_r197.draggable);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r197.smartTable && ctx_r197.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r197.draggable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r197.checkboxSelect && ctx_r197.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r197.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r197.showRate && ctx_r197.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r197.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r197.smartTable && ctx_r197.inLineEdit);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 19);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template, 10, 17, "ng-template", null, 88, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r196 = i0.ɵɵreference(3);
    const ctx_r194 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r194.expandable)("ngIfElse", _r196);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_Template, 4, 2, "ng-container", 3);
} if (rf & 2) {
    const ctx_r191 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r191.config && ctx_r191.config.fields && ctx_r191.config.fields.length);
} }
function CmacsCompactTableComponent_tbody_5_Template(rf, ctx) { if (rf & 1) {
    const _r298 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tbody", 46);
    i0.ɵɵlistener("cdkDropListDropped", function CmacsCompactTableComponent_tbody_5_Template_tbody_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r298); const ctx_r297 = i0.ɵɵnextContext(); return ctx_r297.drop($event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_Template, 1, 1, "ng-template", 87);
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_ng_template_6_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r314 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 107, 108);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r314); const ctx_r313 = i0.ɵɵnextContext(2); return ctx_r313.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r314); const ctx_r315 = i0.ɵɵnextContext(2); return ctx_r315.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r314); const ctx_r317 = i0.ɵɵnextContext(); const data_r300 = ctx_r317.data; const field_r299 = ctx_r317.field; return (data_r300[field_r299.property] = $event); })("keyup", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r314); const ctx_r319 = i0.ɵɵnextContext(); const i_r301 = ctx_r319.i; const data_r300 = ctx_r319.data; const ctx_r318 = i0.ɵɵnextContext(); return ctx_r318.endEditMode($event, i_r301, data_r300); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r320 = i0.ɵɵnextContext();
    const data_r300 = ctx_r320.data;
    const field_r299 = ctx_r320.field;
    const ctx_r302 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r302.validate(data_r300, field_r299));
    i0.ɵɵproperty("placeholder", field_r299.placeholder ? field_r299.placeholder : "")("ngModel", data_r300[field_r299.property]);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template(rf, ctx) { if (rf & 1) {
    const _r323 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-date-picker", 109, 110);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_click_0_listener($event) { i0.ɵɵrestoreView(_r323); const ctx_r322 = i0.ɵɵnextContext(2); return ctx_r322.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r323); const ctx_r324 = i0.ɵɵnextContext(2); return ctx_r324.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r323); const ctx_r326 = i0.ɵɵnextContext(); const data_r300 = ctx_r326.data; const field_r299 = ctx_r326.field; return (data_r300[field_r299.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r323); const ctx_r328 = i0.ɵɵnextContext(); const i_r301 = ctx_r328.i; const data_r300 = ctx_r328.data; const ctx_r327 = i0.ɵɵnextContext(); return ctx_r327.endEditModeNgModel(i_r301, data_r300); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r329 = i0.ɵɵnextContext();
    const data_r300 = ctx_r329.data;
    const field_r299 = ctx_r329.field;
    const ctx_r303 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r303.validate(data_r300, field_r299));
    i0.ɵɵproperty("allowClear", true)("ngModel", data_r300[field_r299.property]);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template(rf, ctx) { if (rf & 1) {
    const _r332 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-datetime-picker", 111, 112);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_click_0_listener($event) { i0.ɵɵrestoreView(_r332); const ctx_r331 = i0.ɵɵnextContext(2); return ctx_r331.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r332); const ctx_r333 = i0.ɵɵnextContext(2); return ctx_r333.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r332); const ctx_r335 = i0.ɵɵnextContext(); const data_r300 = ctx_r335.data; const field_r299 = ctx_r335.field; return (data_r300[field_r299.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r332); const ctx_r337 = i0.ɵɵnextContext(); const i_r301 = ctx_r337.i; const data_r300 = ctx_r337.data; const ctx_r336 = i0.ɵɵnextContext(); return ctx_r336.ngModelChange(i_r301, data_r300); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r338 = i0.ɵɵnextContext();
    const data_r300 = ctx_r338.data;
    const field_r299 = ctx_r338.field;
    const ctx_r304 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r304.validate(data_r300, field_r299));
    i0.ɵɵproperty("use12Hours", ctx_r304.use12Hours)("format", field_r299.timeFormat ? field_r299.timeFormat : "h:mm a")("defaultOpenValue", ctx_r304.defaultTimeValue)("ngModel", data_r300[field_r299.property]);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_cmacs_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 116);
} if (rf & 2) {
    const sData_r341 = ctx.$implicit;
    const field_r299 = i0.ɵɵnextContext(2).field;
    i0.ɵɵpropertyInterpolate("label", sData_r341[field_r299.select.label]);
    i0.ɵɵpropertyInterpolate("value", sData_r341[field_r299.select.value]);
    i0.ɵɵpropertyInterpolate("divider", sData_r341[field_r299.select.divider]);
    i0.ɵɵproperty("disabled", sData_r341.disabled);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r344 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-select", 113, 114);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_click_0_listener($event) { i0.ɵɵrestoreView(_r344); const ctx_r343 = i0.ɵɵnextContext(2); return ctx_r343.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r344); const ctx_r345 = i0.ɵɵnextContext(2); return ctx_r345.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r344); const ctx_r347 = i0.ɵɵnextContext(); const data_r300 = ctx_r347.data; const field_r299 = ctx_r347.field; return (data_r300[field_r299.property] = $event); })("cmacsEditedInput", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_cmacsEditedInput_0_listener($event) { i0.ɵɵrestoreView(_r344); const ctx_r348 = i0.ɵɵnextContext(2); return ctx_r348.cmacsEditedInput($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r344); const ctx_r350 = i0.ɵɵnextContext(); const i_r301 = ctx_r350.i; const data_r300 = ctx_r350.data; const field_r299 = ctx_r350.field; const ctx_r349 = i0.ɵɵnextContext(); return ctx_r349.endEditModeNgModel(i_r301, data_r300, null, field_r299); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_6_cmacs_select_3_cmacs_option_2_Template, 1, 4, "cmacs-option", 115);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r351 = i0.ɵɵnextContext();
    const field_r299 = ctx_r351.field;
    const data_r300 = ctx_r351.data;
    const _r306 = i0.ɵɵreference(5);
    const ctx_r305 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-field-mode-status", field_r299.mode === "status")("cmacs-compact-table-field-mode-status-low-edit", field_r299.mode === "status" && ctx_r305.getClassStatus(data_r300, field_r299) === "low")("cmacs-compact-table-field-mode-status-medium-edit", field_r299.mode === "status" && ctx_r305.getClassStatus(data_r300, field_r299) === "medium")("cmacs-compact-table-field-mode-status-high-edit", field_r299.mode === "status" && ctx_r305.getClassStatus(data_r300, field_r299) === "high")("cmacs-compact-table-edit-mode-invalid", !ctx_r305.validate(data_r300, field_r299));
    i0.ɵɵproperty("dropdownRender", _r306)("cmacsEditable", field_r299.select.dropdownAddOption)("placeHolder", field_r299.placeholder ? field_r299.placeholder : "")("mode", field_r299.mode ? field_r299.mode : "default")("showCmacsSearch", field_r299.showCmacsSearch)("ngModel", data_r300[field_r299.property]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r299.select.selectData);
} }
function CmacsCompactTableComponent_ng_template_6_ng_template_4_nz_divider_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-divider");
} }
function CmacsCompactTableComponent_ng_template_6_ng_template_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r355 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 118);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_ng_template_4_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r355); const ctx_r354 = i0.ɵɵnextContext(3); return ctx_r354.addOption(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r299 = i0.ɵɵnextContext(2).field;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(field_r299.select == null ? null : field_r299.select.dropdownAddOptionLabel);
} }
function CmacsCompactTableComponent_ng_template_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_ng_template_6_ng_template_4_nz_divider_0_Template, 1, 0, "nz-divider", 3);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_ng_template_6_ng_template_4_button_1_Template, 2, 1, "button", 117);
} if (rf & 2) {
    const field_r299 = i0.ɵɵnextContext().field;
    i0.ɵɵproperty("ngIf", field_r299.select == null ? null : field_r299.select.dropdownAddOption);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r299.select == null ? null : field_r299.select.dropdownAddOption);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template(rf, ctx) { if (rf & 1) {
    const _r361 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 119, 120);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r361); const ctx_r360 = i0.ɵɵnextContext(); const data_r300 = ctx_r360.data; const field_r299 = ctx_r360.field; return (data_r300[field_r299.property] = $event); })("click", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r361); const ctx_r362 = i0.ɵɵnextContext(2); return ctx_r362.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r361); const ctx_r363 = i0.ɵɵnextContext(2); return ctx_r363.preventDefault($event); })("keyup", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r361); const ctx_r365 = i0.ɵɵnextContext(); const i_r301 = ctx_r365.i; const data_r300 = ctx_r365.data; const ctx_r364 = i0.ɵɵnextContext(); return ctx_r364.endEditMode($event, i_r301, data_r300); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r361); const ctx_r367 = i0.ɵɵnextContext(); const i_r301 = ctx_r367.i; const data_r300 = ctx_r367.data; const ctx_r366 = i0.ɵɵnextContext(); return ctx_r366.ngModelChange(i_r301, data_r300); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r368 = i0.ɵɵnextContext();
    const data_r300 = ctx_r368.data;
    const field_r299 = ctx_r368.field;
    const ctx_r308 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r308.validate(data_r300, field_r299));
    i0.ɵɵproperty("ngModel", data_r300[field_r299.property])("cmacsStep", field_r299.cmacsStep)("min", field_r299.min)("max", field_r299.max)("formatter", ctx_r308.formatter)("parser", ctx_r308.parser);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template(rf, ctx) { if (rf & 1) {
    const _r372 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 121, 120);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r372); const ctx_r371 = i0.ɵɵnextContext(); const data_r300 = ctx_r371.data; const field_r299 = ctx_r371.field; return (data_r300[field_r299.property] = $event); })("click", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r372); const ctx_r373 = i0.ɵɵnextContext(2); return ctx_r373.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r372); const ctx_r374 = i0.ɵɵnextContext(2); return ctx_r374.preventDefault($event); })("keyup", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r372); const ctx_r376 = i0.ɵɵnextContext(); const i_r301 = ctx_r376.i; const data_r300 = ctx_r376.data; const ctx_r375 = i0.ɵɵnextContext(); return ctx_r375.endEditMode($event, i_r301, data_r300); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r372); const ctx_r378 = i0.ɵɵnextContext(); const i_r301 = ctx_r378.i; const data_r300 = ctx_r378.data; const ctx_r377 = i0.ɵɵnextContext(); return ctx_r377.ngModelChange(i_r301, data_r300); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r379 = i0.ɵɵnextContext();
    const data_r300 = ctx_r379.data;
    const field_r299 = ctx_r379.field;
    const ctx_r309 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r309.validate(data_r300, field_r299));
    i0.ɵɵproperty("ngModel", data_r300[field_r299.property])("formatter", !ctx_r309.isNull(field_r299.formatter) ? field_r299.formatter : ctx_r309.defaultFormatter)("parser", !ctx_r309.isNull(field_r299.parser) ? field_r299.parser : ctx_r309.defaultParser)("cmacsStep", field_r299.cmacsStep ? field_r299.cmacsStep : 1)("min", field_r299.min)("max", field_r299.max);
} }
function CmacsCompactTableComponent_ng_template_6_label_8_Template(rf, ctx) { if (rf & 1) {
    const _r383 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 122, 123);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_label_8_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r383); const ctx_r382 = i0.ɵɵnextContext(); const data_r300 = ctx_r382.data; const field_r299 = ctx_r382.field; return (data_r300[field_r299.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_label_8_Template_label_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r383); const ctx_r385 = i0.ɵɵnextContext(); const i_r301 = ctx_r385.i; const data_r300 = ctx_r385.data; const field_r299 = ctx_r385.field; const ctx_r384 = i0.ɵɵnextContext(); return ctx_r384.endEditModeNgModel(i_r301, data_r300, field_r299.property, field_r299); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r386 = i0.ɵɵnextContext();
    const data_r300 = ctx_r386.data;
    const field_r299 = ctx_r386.field;
    const ctx_r310 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r310.validate(data_r300, field_r299));
    i0.ɵɵproperty("ngModel", data_r300[field_r299.property]);
} }
const _c13 = function () { return { initialCountry: "us", formatOnDisplay: false }; };
function CmacsCompactTableComponent_ng_template_6_cmacs_phone_number_9_Template(rf, ctx) { if (rf & 1) {
    const _r389 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-phone-number", 124, 125);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_phone_number_9_Template_cmacs_phone_number_click_0_listener($event) { i0.ɵɵrestoreView(_r389); const ctx_r388 = i0.ɵɵnextContext(2); return ctx_r388.preventDefault($event); })("hasError", function CmacsCompactTableComponent_ng_template_6_cmacs_phone_number_9_Template_cmacs_phone_number_hasError_0_listener($event) { i0.ɵɵrestoreView(_r389); const ctx_r391 = i0.ɵɵnextContext(); const i_r301 = ctx_r391.i; const data_r300 = ctx_r391.data; const field_r299 = ctx_r391.field; const ctx_r390 = i0.ɵɵnextContext(); return ctx_r390.hasPhoneNumberError($event, i_r301, data_r300, field_r299.property, field_r299); })("countryChange", function CmacsCompactTableComponent_ng_template_6_cmacs_phone_number_9_Template_cmacs_phone_number_countryChange_0_listener($event) { i0.ɵɵrestoreView(_r389); const ctx_r392 = i0.ɵɵnextContext(2); return ctx_r392.onCountryChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r311 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("init", i0.ɵɵpureFunction0(2, _c13))("formControlCustom", ctx_r311.formPhoneControl);
} }
function CmacsCompactTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_ng_template_6_input_0_Template, 2, 4, "input", 98);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template, 2, 4, "cmacs-date-picker", 99);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template, 2, 6, "cmacs-datetime-picker", 100);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template, 3, 17, "cmacs-select", 101);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_6_ng_template_4_Template, 2, 2, "ng-template", null, 102, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template, 2, 8, "cmacs-input-number", 103);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template, 2, 8, "cmacs-input-number", 104);
    i0.ɵɵtemplate(8, CmacsCompactTableComponent_ng_template_6_label_8_Template, 2, 3, "label", 105);
    i0.ɵɵtemplate(9, CmacsCompactTableComponent_ng_template_6_cmacs_phone_number_9_Template, 2, 3, "cmacs-phone-number", 106);
} if (rf & 2) {
    const field_r299 = ctx.field;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r5.isString(field_r299));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isDate(field_r299));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isTime(field_r299));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isSelect(field_r299));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r5.isNumber(field_r299) && !ctx_r5.isSelect(field_r299) && field_r299.useCommaMarker);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isNumber(field_r299) && !ctx_r5.isSelect(field_r299) && !field_r299.useCommaMarker);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isBoolean(field_r299));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isPhone(field_r299));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_1_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 129);
} if (rf & 2) {
    const field_r393 = i0.ɵɵnextContext(2).field;
    const ctx_r408 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-icon", ctx_r408.inLineEdit && field_r393.editable)("cmacs-compact-table-edit-icon-view", !ctx_r408.inLineEdit || !field_r393.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r412 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 126);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r412); const ctx_r411 = i0.ɵɵnextContext(); const data_r394 = ctx_r411.data; const field_r393 = ctx_r411.field; const ctx_r410 = i0.ɵɵnextContext(); return ctx_r410.startEdit(data_r394[ctx_r410.config.fieldId], field_r393.property, $event, data_r394); });
    i0.ɵɵelementStart(2, "div", 127);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r412); const ctx_r414 = i0.ɵɵnextContext(); const i_r395 = ctx_r414.i; const field_r393 = ctx_r414.field; const ctx_r413 = i0.ɵɵnextContext(); return ctx_r413.onDataTapEllipsis(ctx_r413.gridID + "-row-" + i_r395 + "-" + field_r393.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_1_i_4_Template, 1, 4, "i", 128);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r415 = i0.ɵɵnextContext();
    const data_r394 = ctx_r415.data;
    const field_r393 = ctx_r415.field;
    const item_r396 = ctx_r415.item;
    const i_r395 = ctx_r415.i;
    const ctx_r398 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r398.editId === data_r394[ctx_r398.config.fieldId] && ctx_r398.property === field_r393.property && field_r393.editable && (ctx_r398.isString(field_r393) || ctx_r398.isDate(field_r393) || ctx_r398.isSelect(field_r393) || ctx_r398.isTime(field_r393)))("cmacs-compact-table-on-edit-no-padding", ctx_r398.editId === data_r394[ctx_r398.config.fieldId] && ctx_r398.property === field_r393.property && field_r393.editable && (ctx_r398.isNumber(field_r393) || ctx_r398.isDate(field_r393) || ctx_r398.isTime(field_r393) || ctx_r398.isString(field_r393)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r398.getMaxWidth(field_r393, item_r396, i_r395));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell", !ctx_r398.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r398.isNull(data_r394[field_r393.property]) || !data_r394[field_r393.property].length)("cmacs-compact-table-invalid", !ctx_r398.validate(data_r394, field_r393));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r398.gridID, "-row-", i_r395, "-", field_r393.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r398.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r398.isEllipsisActive(ctx_r398.gridID + "-row-" + i_r395 + "-" + field_r393.property, field_r393) ? ctx_r398.getStringFieldValue(data_r394, field_r393) : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r398.getStringFieldValue(data_r394, field_r393), " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r393.editable || field_r393.editable === undefined);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r418 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 126);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r418); const ctx_r417 = i0.ɵɵnextContext(); const data_r394 = ctx_r417.data; const field_r393 = ctx_r417.field; const ctx_r416 = i0.ɵɵnextContext(); return ctx_r416.startEdit(data_r394[ctx_r416.config.fieldId], field_r393.property, $event, data_r394); });
    i0.ɵɵelementStart(2, "div", 130);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r418); const ctx_r420 = i0.ɵɵnextContext(); const i_r395 = ctx_r420.i; const field_r393 = ctx_r420.field; const ctx_r419 = i0.ɵɵnextContext(); return ctx_r419.onDataTapEllipsis(ctx_r419.gridID + "-row-" + i_r395 + "-" + field_r393.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 131);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r421 = i0.ɵɵnextContext();
    const data_r394 = ctx_r421.data;
    const field_r393 = ctx_r421.field;
    const item_r396 = ctx_r421.item;
    const i_r395 = ctx_r421.i;
    const ctx_r399 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r399.editId === data_r394[ctx_r399.config.fieldId] && ctx_r399.property === field_r393.property && field_r393.editable && (ctx_r399.isString(field_r393) || ctx_r399.isDate(field_r393) || ctx_r399.isSelect(field_r393) || ctx_r399.isTime(field_r393)))("cmacs-compact-table-on-edit-no-padding", ctx_r399.editId === data_r394[ctx_r399.config.fieldId] && ctx_r399.property === field_r393.property && field_r393.editable && (ctx_r399.isNumber(field_r393) || ctx_r399.isDate(field_r393) || ctx_r399.isTime(field_r393) || ctx_r399.isString(field_r393)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r399.getMaxWidth(field_r393, item_r396, i_r395));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r399.validate(data_r394, field_r393))("cmacs-compact-table-overflow-cell", !ctx_r399.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r399.isNull(data_r394[field_r393.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r399.gridID, "-row-", i_r395, "-", field_r393.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r399.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r399.isEllipsisActive(ctx_r399.gridID + "-row-" + i_r395 + "-" + field_r393.property, field_r393) ? data_r394[field_r393.property] ? ctx_r399.transformDate(data_r394[field_r393.property]) : field_r393.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(data_r394[field_r393.property] ? ctx_r399.transformDate(data_r394[field_r393.property]) : field_r393.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-calendar-icon", ctx_r399.inLineEdit && field_r393.editable)("cmacs-compact-table-calendar-icon-view", !ctx_r399.inLineEdit || !field_r393.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r424 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 126);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r424); const ctx_r423 = i0.ɵɵnextContext(); const data_r394 = ctx_r423.data; const field_r393 = ctx_r423.field; const ctx_r422 = i0.ɵɵnextContext(); return ctx_r422.startEdit(data_r394[ctx_r422.config.fieldId], field_r393.property, $event, data_r394); });
    i0.ɵɵelementStart(2, "div", 130);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r424); const ctx_r426 = i0.ɵɵnextContext(); const i_r395 = ctx_r426.i; const field_r393 = ctx_r426.field; const ctx_r425 = i0.ɵɵnextContext(); return ctx_r425.onDataTapEllipsis(ctx_r425.gridID + "-row-" + i_r395 + "-" + field_r393.property); });
    i0.ɵɵpipe(3, "date");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "i", 132);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r427 = i0.ɵɵnextContext();
    const data_r394 = ctx_r427.data;
    const field_r393 = ctx_r427.field;
    const item_r396 = ctx_r427.item;
    const i_r395 = ctx_r427.i;
    const ctx_r400 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r400.editId === data_r394[ctx_r400.config.fieldId] && ctx_r400.property === field_r393.property && field_r393.editable && (ctx_r400.isString(field_r393) || ctx_r400.isDate(field_r393) || ctx_r400.isSelect(field_r393) || ctx_r400.isTime(field_r393)))("cmacs-compact-table-on-edit-no-padding", ctx_r400.editId === data_r394[ctx_r400.config.fieldId] && ctx_r400.property === field_r393.property && field_r393.editable && (ctx_r400.isNumber(field_r393) || ctx_r400.isDate(field_r393) || ctx_r400.isTime(field_r393) || ctx_r400.isString(field_r393)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r400.getMaxWidth(field_r393, item_r396, i_r395));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r400.validate(data_r394, field_r393))("cmacs-compact-table-overflow-cell", !ctx_r400.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r400.isNull(data_r394[field_r393.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r400.gridID, "-row-", i_r395, "-", field_r393.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r400.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r400.isEllipsisActive(ctx_r400.gridID + "-row-" + i_r395 + "-" + field_r393.property, field_r393) ? data_r394[field_r393.property] ? i0.ɵɵpipeBind2(3, 22, data_r394[field_r393.property], field_r393.timeFormat ? field_r393.timeFormat : "h:mm a") : field_r393.placeholder : null);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r394[field_r393.property] ? i0.ɵɵpipeBind2(5, 25, data_r394[field_r393.property], field_r393.timeFormat ? field_r393.timeFormat : "h:mm a") : field_r393.placeholder);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("cmacs-compact-table-calendar-icon", ctx_r400.inLineEdit && field_r393.editable)("cmacs-compact-table-calendar-icon-view", !ctx_r400.inLineEdit || !field_r393.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_4_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 135);
} if (rf & 2) {
    const field_r393 = i0.ɵɵnextContext(2).field;
    const ctx_r428 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-select-icon", ctx_r428.inLineEdit && field_r393.editable)("cmacs-compact-table-select-icon-view", !ctx_r428.inLineEdit || !field_r393.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r432 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 126);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r432); const ctx_r431 = i0.ɵɵnextContext(); const data_r394 = ctx_r431.data; const field_r393 = ctx_r431.field; const ctx_r430 = i0.ɵɵnextContext(); return ctx_r430.startEdit(data_r394[ctx_r430.config.fieldId], field_r393.property, $event, data_r394); });
    i0.ɵɵelementStart(2, "div", 133);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r432); const ctx_r434 = i0.ɵɵnextContext(); const i_r395 = ctx_r434.i; const field_r393 = ctx_r434.field; const ctx_r433 = i0.ɵɵnextContext(); return ctx_r433.onDataTapEllipsis(ctx_r433.gridID + "-row-" + i_r395 + "-" + field_r393.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_4_i_4_Template, 1, 4, "i", 134);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r435 = i0.ɵɵnextContext();
    const data_r394 = ctx_r435.data;
    const field_r393 = ctx_r435.field;
    const item_r396 = ctx_r435.item;
    const i_r395 = ctx_r435.i;
    const ctx_r401 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r401.editId === data_r394[ctx_r401.config.fieldId] && ctx_r401.property === field_r393.property && field_r393.editable && (ctx_r401.isString(field_r393) || ctx_r401.isDate(field_r393) || ctx_r401.isSelect(field_r393) || ctx_r401.isTime(field_r393)))("cmacs-compact-table-on-edit-no-padding", ctx_r401.editId === data_r394[ctx_r401.config.fieldId] && ctx_r401.property === field_r393.property && field_r393.editable && (ctx_r401.isNumber(field_r393) || ctx_r401.isDate(field_r393) || ctx_r401.isTime(field_r393) || ctx_r401.isString(field_r393)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r401.getMaxWidth(field_r393, item_r396, i_r395));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r401.validate(data_r394, field_r393))("cmacs-compact-table-overflow-cell", !ctx_r401.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r401.isNull(ctx_r401.getLabel(data_r394, field_r393)) || !ctx_r401.getLabel(data_r394, field_r393).length)("cmacs-compact-table-field-mode-status-low", field_r393.mode === "status" && ctx_r401.getClassStatus(data_r394, field_r393) === "low")("cmacs-compact-table-field-mode-status-medium", field_r393.mode === "status" && ctx_r401.getClassStatus(data_r394, field_r393) === "medium")("cmacs-compact-table-field-mode-status-high", field_r393.mode === "status" && ctx_r401.getClassStatus(data_r394, field_r393) === "high");
    i0.ɵɵattributeInterpolate3("id", "", ctx_r401.gridID, "-row-", i_r395, "-", field_r393.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r401.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r401.isEllipsisActive(ctx_r401.gridID + "-row-" + i_r395 + "-" + field_r393.property, field_r393) ? ctx_r401.getLabel(data_r394, field_r393) && ctx_r401.getLabel(data_r394, field_r393).length ? ctx_r401.getLabel(data_r394, field_r393) : field_r393.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r401.getLabel(data_r394, field_r393) && ctx_r401.getLabel(data_r394, field_r393).length ? ctx_r401.getLabel(data_r394, field_r393) : field_r393.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r393.mode !== "status");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r438 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 126);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r438); const ctx_r437 = i0.ɵɵnextContext(); const data_r394 = ctx_r437.data; const field_r393 = ctx_r437.field; const ctx_r436 = i0.ɵɵnextContext(); return ctx_r436.startEdit(data_r394[ctx_r436.config.fieldId], field_r393.property, $event, data_r394); });
    i0.ɵɵelementStart(2, "div", 136);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r438); const ctx_r440 = i0.ɵɵnextContext(); const i_r395 = ctx_r440.i; const field_r393 = ctx_r440.field; const ctx_r439 = i0.ɵɵnextContext(); return ctx_r439.onDataTapEllipsis(ctx_r439.gridID + "-row-" + i_r395 + "-" + field_r393.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 137);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r441 = i0.ɵɵnextContext();
    const data_r394 = ctx_r441.data;
    const field_r393 = ctx_r441.field;
    const item_r396 = ctx_r441.item;
    const i_r395 = ctx_r441.i;
    const ctx_r402 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r402.editId === data_r394[ctx_r402.config.fieldId] && ctx_r402.property === field_r393.property && field_r393.editable && (ctx_r402.isString(field_r393) || ctx_r402.isDate(field_r393) || ctx_r402.isSelect(field_r393) || ctx_r402.isTime(field_r393)))("cmacs-compact-table-on-edit-no-padding", ctx_r402.editId === data_r394[ctx_r402.config.fieldId] && ctx_r402.property === field_r393.property && field_r393.editable && (ctx_r402.isNumber(field_r393) || ctx_r402.isDate(field_r393) || ctx_r402.isTime(field_r393) || ctx_r402.isString(field_r393)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r402.getMaxWidth(field_r393, item_r396, i_r395));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r402.validate(data_r394, field_r393))("cmacs-compact-table-overflow-cell", !ctx_r402.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r402.isNull(data_r394[field_r393.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r402.gridID, "-row-", i_r395, "-", field_r393.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r402.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r402.isEllipsisActive(ctx_r402.gridID + "-row-" + i_r395 + "-" + field_r393.property, field_r393) ? data_r394[field_r393.property] !== undefined ? field_r393.useCommaMarker ? data_r394[field_r393.property].toString().replace(".", ",") : data_r394[field_r393.property] : field_r393.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r402.getInputNumberValue(data_r394, field_r393));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-input-number-icon", ctx_r402.inLineEdit && field_r393.editable)("cmacs-compact-table-input-number-icon-view", !ctx_r402.inLineEdit || !field_r393.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r446 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 139);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_6_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r446); const data_r394 = i0.ɵɵnextContext(2).data; const ctx_r444 = i0.ɵɵnextContext(); return ctx_r444.clickHyperlink(data_r394); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r447 = i0.ɵɵnextContext(2);
    const data_r394 = ctx_r447.data;
    const field_r393 = ctx_r447.field;
    i0.ɵɵclassProp("cmacs-compact-table-hyperlink", !data_r394.parent);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r394[field_r393.property], " ");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r448 = i0.ɵɵnextContext(2);
    const data_r394 = ctx_r448.data;
    const field_r393 = ctx_r448.field;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r394[field_r393.property], " ");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_ng_template_8_ng_container_6_div_1_Template, 2, 3, "div", 138);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_8_ng_container_6_div_2_Template, 2, 1, "div", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r394 = i0.ɵɵnextContext().data;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !data_r394.parent);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r394.parent);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 143);
} if (rf & 2) {
    const ctx_r453 = i0.ɵɵnextContext(2);
    const data_r394 = ctx_r453.data;
    const field_r393 = ctx_r453.field;
    const ctx_r450 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r450.validate(data_r394, field_r393));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 144);
    i0.ɵɵelement(1, "span", 145);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r454 = i0.ɵɵnextContext(2);
    const data_r394 = ctx_r454.data;
    const field_r393 = ctx_r454.field;
    const ctx_r451 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r451.validate(data_r394, field_r393));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 146);
} if (rf & 2) {
    const ctx_r455 = i0.ɵɵnextContext(2);
    const data_r394 = ctx_r455.data;
    const field_r393 = ctx_r455.field;
    const ctx_r452 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r452.validate(data_r394, field_r393));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r458 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 126);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_7_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r458); const ctx_r457 = i0.ɵɵnextContext(); const data_r394 = ctx_r457.data; const field_r393 = ctx_r457.field; const ctx_r456 = i0.ɵɵnextContext(); return ctx_r456.startEdit(data_r394[ctx_r456.config.fieldId], field_r393.property, $event, data_r394); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_8_ng_container_7_span_2_Template, 1, 2, "span", 140);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_8_ng_container_7_span_3_Template, 2, 2, "span", 141);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_7_i_4_Template, 1, 2, "i", 142);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r459 = i0.ɵɵnextContext();
    const data_r394 = ctx_r459.data;
    const field_r393 = ctx_r459.field;
    const ctx_r404 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r404.editId === data_r394[ctx_r404.config.fieldId] && ctx_r404.property === field_r393.property && field_r393.editable && (ctx_r404.isString(field_r393) || ctx_r404.isDate(field_r393) || ctx_r404.isSelect(field_r393) || ctx_r404.isTime(field_r393)))("cmacs-compact-table-on-edit-no-padding", ctx_r404.editId === data_r394[ctx_r404.config.fieldId] && ctx_r404.property === field_r393.property && field_r393.editable && (ctx_r404.isNumber(field_r393) || ctx_r404.isDate(field_r393) || ctx_r404.isTime(field_r393) || ctx_r404.isString(field_r393)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r394[field_r393.property] == false || data_r394[field_r393.property] == "false");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r394[field_r393.property] === undefined || data_r394[field_r393.property] === null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r394[field_r393.property] === true || data_r394[field_r393.property] === "true");
} }
const _c14 = function () { return { initialCountry: "us" }; };
function CmacsCompactTableComponent_ng_template_8_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r463 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 147);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_8_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r463); const ctx_r462 = i0.ɵɵnextContext(); const data_r394 = ctx_r462.data; const field_r393 = ctx_r462.field; const ctx_r461 = i0.ɵɵnextContext(); return ctx_r461.startEdit(data_r394[ctx_r461.config.fieldId], field_r393.property, $event, data_r394); });
    i0.ɵɵelementStart(2, "div", 136);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_8_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r463); const ctx_r465 = i0.ɵɵnextContext(); const i_r395 = ctx_r465.i; const field_r393 = ctx_r465.field; const ctx_r464 = i0.ɵɵnextContext(); return ctx_r464.onDataTapEllipsis(ctx_r464.gridID + "-row-" + i_r395 + "-" + field_r393.property); });
    i0.ɵɵelementStart(3, "cmacs-phone-number", 148, 125);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_8_Template_cmacs_phone_number_click_3_listener() { i0.ɵɵrestoreView(_r463); const ctx_r467 = i0.ɵɵnextContext(); const data_r394 = ctx_r467.data; const field_r393 = ctx_r467.field; const ctx_r466 = i0.ɵɵnextContext(); return ctx_r466.currentPhoneSelected(data_r394, field_r393); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r468 = i0.ɵɵnextContext();
    const data_r394 = ctx_r468.data;
    const field_r393 = ctx_r468.field;
    const i_r395 = ctx_r468.i;
    const ctx_r405 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r405.editId === data_r394[ctx_r405.config.fieldId] && ctx_r405.property === field_r393.property && field_r393.editable && (ctx_r405.isString(field_r393) || ctx_r405.isDate(field_r393) || ctx_r405.isSelect(field_r393) || ctx_r405.isTime(field_r393) || ctx_r405.isPhone(field_r393)))("cmacs-compact-table-on-edit-no-padding", ctx_r405.editId === data_r394[ctx_r405.config.fieldId] && ctx_r405.property === field_r393.property && field_r393.editable && (ctx_r405.isNumber(field_r393) || ctx_r405.isDate(field_r393) || ctx_r405.isTime(field_r393) || ctx_r405.isString(field_r393) || ctx_r405.isPhone(field_r393)));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r405.validate(data_r394, field_r393))("cmacs-compact-table-overflow-cell", !ctx_r405.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r405.isNull(data_r394[field_r393.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r405.gridID, "-row-", i_r395, "-", field_r393.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r405.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r405.isEllipsisActive(ctx_r405.gridID + "-row-" + i_r395 + "-" + field_r393.property, field_r393) ? data_r394[field_r393.property] !== undefined ? field_r393.useCommaMarker ? data_r394[field_r393.property].toString().replace(".", ",") : data_r394[field_r393.property] : field_r393.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("init", i0.ɵɵpureFunction0(17, _c14))("formControlCustom", ctx_r405.getPhoneFieldValue(data_r394, field_r393));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r471 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "cmacs-compact-table-attachment", 149);
    i0.ɵɵlistener("onChangeAttachments", function CmacsCompactTableComponent_ng_template_8_ng_container_9_Template_cmacs_compact_table_attachment_onChangeAttachments_1_listener() { i0.ɵɵrestoreView(_r471); const i_r395 = i0.ɵɵnextContext().i; const ctx_r469 = i0.ɵɵnextContext(); return ctx_r469._onChangeAttachments(i_r395); })("onclickChooseFile", function CmacsCompactTableComponent_ng_template_8_ng_container_9_Template_cmacs_compact_table_attachment_onclickChooseFile_1_listener() { i0.ɵɵrestoreView(_r471); const i_r395 = i0.ɵɵnextContext().i; const ctx_r472 = i0.ɵɵnextContext(); return ctx_r472._onclickChooseFile(i_r395); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r474 = i0.ɵɵnextContext();
    const field_r393 = ctx_r474.field;
    const data_r394 = ctx_r474.data;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("conf", field_r393.attachment)("ctaDropdownOption", data_r394[field_r393.property]);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_10_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, null, 150);
    i0.ɵɵelementStart(2, "div", 151);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_8_ng_container_10_ng_container_3_Template, 1, 0, "ng-container", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r477 = i0.ɵɵnextContext();
    const data_r394 = ctx_r477.data;
    const field_r393 = ctx_r477.field;
    const ci_r397 = ctx_r477.ci;
    const i_r395 = ctx_r477.i;
    const ctx_r407 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r407.editId === data_r394[ctx_r407.config.fieldId] && ctx_r407.property === field_r393.property && field_r393.editable && (ctx_r407.isString(field_r393) || ctx_r407.isDate(field_r393) || ctx_r407.isSelect(field_r393) || ctx_r407.isTime(field_r393)))("cmacs-compact-table-on-edit-no-padding", ctx_r407.editId === data_r394[ctx_r407.config.fieldId] && ctx_r407.property === field_r393.property && field_r393.editable && (ctx_r407.isNumber(field_r393) || ctx_r407.isDate(field_r393) || ctx_r407.isTime(field_r393) || ctx_r407.isString(field_r393)));
    i0.ɵɵproperty("id", ctx_r407.gridID + "column" + ci_r397 + "row" + i_r395);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", data_r394[field_r393.property].ref)("ngTemplateOutletContext", data_r394[field_r393.property].context);
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
    i0.ɵɵtemplate(9, CmacsCompactTableComponent_ng_template_8_ng_container_9_Template, 2, 2, "ng-container", 3);
    i0.ɵɵtemplate(10, CmacsCompactTableComponent_ng_template_8_ng_container_10_Template, 4, 7, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r393 = ctx.field;
    const data_r394 = ctx.data;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isString(field_r393));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isDate(field_r393));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isTime(field_r393));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isSelect(field_r393));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isNumber(field_r393));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isCeldTypeHyperlink(field_r393));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isBoolean(field_r393));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isPhone(field_r393));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isAttachment(field_r393));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.isCeldTypeTemplateRef(field_r393) && data_r394[field_r393.property]);
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
                    field.editTemplate === TemplateType.Date ? field.validators = [isEqualToDate(field.validationValues[0])] :
                        [isEqualToNumber(field.validationValues[0])];
                    break;
                }
                case 'is-not-equal-to': {
                    field.editTemplate === TemplateType.Date ? field.validators = [isNotEqualToDate(field.validationValues[0])] :
                        [isNotEqualToNumber(field.validationValues[0])];
                    break;
                }
                case 'range': {
                    field.editTemplate === TemplateType.Date ? field.validators = [rangeDate(field.validationValues[0], field.validationValues[1])] :
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
        this.addedOption = event;
    }
    addOption() {
        this.onDropdownRender.emit(this.addedOption);
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
    _onChangeAttachments(index) {
        this.onChangeAttachments.emit(this.data[index]);
    }
    _onclickChooseFile(index) {
        this.onclickChooseFile.emit(this.data[index]);
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
            m.locale(this.i18n.getLocale().locale);
            return m.format(this.i18n.getLocale().locale === 'de' ? 'DD.MM.YYYY' : 'MM/DD/YYYY');
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
    } }, inputs: { size: "size", showTotal: "showTotal", pageSizeOptions: "pageSizeOptions", virtualScroll: "virtualScroll", exclusiveSelect: "exclusiveSelect", logs: "logs", expandable: "expandable", smartTable: "smartTable", draggable: "draggable", virtualItemSize: "virtualItemSize", expandAll: "expandAll", addColumn: "addColumn", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", hasCookies: "hasCookies", total: "total", title: "title", footer: "footer", noResult: "noResult", widthConfig: "widthConfig", pageIndex: "pageIndex", pageSize: "pageSize", actionColumnWidth: "actionColumnWidth", wrapLines: "wrapLines", dropdownAddOptionTemplateRef: "dropdownAddOptionTemplateRef", data: "data", config: "config", use12Hours: "use12Hours", fieldId: "fieldId", gridID: "gridID", paginationPosition: "paginationPosition", scroll: "scroll", frontPagination: "frontPagination", templateMode: "templateMode", bordered: "bordered", centerTable: "centerTable", showPagination: "showPagination", loading: "loading", showSizeChanger: "showSizeChanger", hideOnSinglePage: "hideOnSinglePage", showQuickJumper: "showQuickJumper", simple: "simple", checkboxSelect: "checkboxSelect", inLineEdit: "inLineEdit", dataTable: "dataTable", showRate: "showRate", exportEvent: "exportEvent", columnMenu: "columnMenu", extra: "extra", contextmenu: "contextmenu", indentSize: "indentSize", virtualMaxBufferPx: "virtualMaxBufferPx", rateCount: "rateCount", multiSelect: "multiSelect" }, outputs: { configChange: "configChange", buttonClick: "buttonClick", rateChange: "rateChange", selectionChange: "selectionChange", ondlclickRow: "ondlclickRow", onclickRow: "onclickRow", onclickHyperlink: "onclickHyperlink", onedit: "onedit", onRowExpandCollapse: "onRowExpandCollapse", ondrop: "ondrop", sortChange: "sortChange", filterChange: "filterChange", onrowdeleted: "onrowdeleted", onrowadded: "onrowadded", oncolumnadded: "oncolumnadded", oneditcolumn: "oneditcolumn", onresize: "onresize", oncontextmenu: "oncontextmenu", onDropdownRender: "onDropdownRender", onChangeAttachments: "onChangeAttachments", onclickChooseFile: "onclickChooseFile" }, exportAs: ["cmacsCompactTable"], features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 36, consts: [[3, "id"], [1, "cmacs-compact-table", 3, "nzData", "nzShowTotal", "nzPageSizeOptions", "nzVirtualItemSize", "nzLoadingDelay", "nzVirtualMaxBufferPx", "nzLoadingIndicator", "nzTotal", "nzTitle", "nzFooter", "nzNoResult", "nzWidthConfig", "nzPageIndex", "nzPageSize", "nzPaginationPosition", "nzScroll", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], ["gridComponent", ""], [4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListDropped", 4, "ngIf"], ["editTpl", ""], ["viewModeTpl", ""], ["nzWidth", "40px", "class", "cmacs-compact-table-smart-table-hot-spot-row-add cmacs-compact-table-smart-action-header", 3, "cmacs-compact-table-logs-header-th", "minWidth", "maxWidth", "nzLeft", 4, "ngIf"], ["nzWidth", "40px", 3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], ["nzWidth", "30px", "nzLeft", "0px", 3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzWidth", "maxWidth", "minWidth", "nzRight", 4, "ngIf"], ["nzWidth", "40px", "class", "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "minWidth", "maxWidth", "nzRight", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], [3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], ["nzWidth", "40px", 1, "cmacs-compact-table-smart-table-hot-spot-row-add", "cmacs-compact-table-smart-action-header", 3, "nzLeft"], [1, "cmacs-compact-table-smart-table-hot-spot-row-add-icon", "iconUILarge-New", 3, "click"], ["nzWidth", "40px", 3, "nzLeft"], ["nzWidth", "30px", "nzLeft", "0px", 3, "nzLeft"], ["cmacs-checkbox", "", 3, "ngModel", "indeterminate", "ngModelChange", "checkedChange"], [4, "ngIf", "ngIfElse"], ["thWithFilters", ""], ["nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzShowSort", "nzShowFilter", "nzFilters", "nzFilterMultiple", "nzDisabled", "nzMinWidth", "nzMaxWidth", "ngClass", "nzSortOrder", "nzWidth", "nzLeft", "nzRight", "nzFilterChange", "nzResizeEnd", "nzSortOrderChange"], [3, "id", 4, "ngIf"], ["nzDirection", "right", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-col-add-icon-container"], ["class", "cmacs-compact-table-smart-table-hot-spot-col-add-icon iconUILarge-New", 3, "click", 4, "ngIf"], ["cmacs-tooltip", "", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap", "click"], [3, "field", "items", "onFieldChanged", 4, "ngIf"], ["class", "iconUILarge-More-Veritcal_Icon cmacs-compact-table-column-more", "style", "font-size: 15px;", 3, "cmacs-compact-table-column-more-selected", "click", 4, "ngIf"], [3, "field", "items", "labelSave", "onFieldChanged", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-col-add-icon", "iconUILarge-New", 3, "click"], [3, "field", "items", "onFieldChanged"], [1, "iconUILarge-More-Veritcal_Icon", "cmacs-compact-table-column-more", 2, "font-size", "15px", 3, "click"], [3, "field", "items", "labelSave", "onFieldChanged"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nzDirection", "right"], [1, "cmacs-compact-table-resize-trigger"], ["nzCustomFilter", "", "nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzShowSort", "nzDisabled", "ngClass", "nzSortOrder", "nzWidth", "nzMinWidth", "nzMaxWidth", "nzLeft", "nzRight", "nzResizeEnd", "nzSortOrderChange"], ["nzTrigger", "click", "nzPlacement", "bottomRight", "nzTableFilter", "", 3, "nzClickHide"], ["dropdown", ""], ["nz-icon", "", "nzType", "search", "nz-dropdown", "", 1, "ant-table-filter-icon"], ["cmacs-tooltip", "", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], [3, "nzWidth", "nzRight"], [1, "cmacs-compact-table-extra"], [4, "nzStringTemplateOutlet"], ["nzWidth", "40px", 1, "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "nzRight"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["defaultTpl", ""], [3, "id", "cmacs-compact-table-expandable-row", "cmacs-compact-table-row-active", "cmacs-compact-table-header-logs", "ant-table-selected-row", "click", "touchstart", "contextmenu", "dblclick", 4, "ngIf"], [3, "id", "click", "touchstart", "contextmenu", "dblclick"], ["style", "padding: 7px 10px", 3, "nzLeft", "minWidth", "maxWidth", "width", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], [3, "ngClass", "cmacs-editable-column", "cmacs-compact-table-on-edit-expandable", "cmacs-compact-table-logs-header-th-font", "cmacs-compact-table-expandable-td", "paddingLeft", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "minWidth", "nzExpandChange", 4, "ngFor", "ngForOf"], ["class", "cmacs-compact-table-rating", "style", "padding: 7px 10px", 3, "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "cmacs-compact-table-logs-header-th-font", "nzRight", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-align-td", 3, "cmacs-compact-table-logs-td", 4, "ngIf"], [2, "padding", "7px 10px", 3, "nzLeft"], [3, "ngClass", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "nzExpandChange"], [3, "display", "cmacs-compact-table-overflow-cell-container-logs", "width", 4, "ngIf"], [3, "display", "width", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cmacs-compact-table-rating", 2, "padding", "7px 10px"], [3, "ngModel", "nzCount", "nzDisabled", "ngModelChange", "click"], [2, "padding", "7px 10px", 3, "nzRight"], [1, "cmacs-compact-table-align-td", 2, "padding", "7px 10px"], ["cdkDrag", "", "class", "cmacs-no-selection", 3, "cdkDragDisabled", "id", "cmacs-compact-table-row-active", "ant-table-selected-row", "cmacs-compact-table-editable-row", "cmacs-compact-table-smart-table-row", "click", "touchstart", "contextmenu", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "cmacs-no-selection", 3, "cdkDragDisabled", "id", "click", "touchstart", "contextmenu"], ["contextMenuTemplate", "cmacsDropdownMenu"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-add", 3, "maxWidth", "minWidth", "nzLeft", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-drag-col cmacs-compact-table-fst-td", 3, "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "nzLeft", "cmacs-compact-table-fst-td", 4, "ngIf"], [3, "ngClass", "cmacs-editable-column", "cmacs-compact-table-fst-td", "nzLeft", "nzRight", "minWidth", 4, "ngFor", "ngForOf"], ["style", "padding: 7px 10px", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "nzRight", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "nzRight", "maxWidth", "minWidth", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-row-add", 2, "padding", "7px 10px", 3, "nzLeft"], [1, "cmacs-compact-table-drag-col", "cmacs-compact-table-fst-td", 2, "padding", "7px 10px", 3, "nzLeft"], ["cdkDragHandle", "", 1, "iconUILarge-Move", "cmacs-compact-table-drag-handler"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange"], [3, "ngClass", "nzLeft", "nzRight"], ["style", "max-width: 98%", 4, "ngIf"], [2, "max-width", "98%"], [2, "padding", "7px 10px"], [3, "ngModel", "nzCount", "ngModelChange", "click"], [1, "cmacs-compact-table-smart-table-hot-spot-row-delete", 2, "padding", "7px 10px", 3, "nzRight"], ["class", "cmacs-compact-table-smart-table-hot-spot-row-delete-icon iconUISmall-Close", 3, "click", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-row-delete-icon", "iconUISmall-Close", 3, "click"], ["nz-virtual-scroll", ""], ["defaultTplVirtualScroll", ""], [3, "id", "cmacs-compact-table-row-active", "cmacs-compact-table-expandable-row", "cmacs-compact-table-header-logs", "touchstart", "contextmenu", "dblclick", 4, "ngIf"], [3, "id", "touchstart", "contextmenu", "dblclick"], [3, "cmacs-editable-column", "cmacs-compact-table-on-edit-expandable", "cmacs-compact-table-logs-header-th-font", "cmacs-compact-table-expandable-td", "paddingLeft", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "minWidth", "nzExpandChange", 4, "ngFor", "ngForOf"], [3, "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "nzExpandChange"], ["contextMenuTemplate", ""], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-add", 3, "maxWidth", "minWidth", "cmacs-compact-table-logs-td", "nzLeft", 4, "ngIf"], [3, "cmacs-editable-column", "cmacs-compact-table-fst-td", "nzLeft", "nzRight", "minWidth", 4, "ngFor", "ngForOf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "nzRight", "maxWidth", "minWidth", "cmacs-compact-table-logs-td", 4, "ngIf"], [3, "nzLeft", "nzRight"], ["class", "cmacs-compact-table-input", "type", "text", "cmacs-input", "", 3, "cmacs-compact-table-edit-mode-invalid", "placeholder", "ngModel", "click", "dblclick", "ngModelChange", "keyup", 4, "ngIf"], ["class", "cmacs-compact-table-date-edit", 3, "allowClear", "cmacs-compact-table-edit-mode-invalid", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["class", "cmacs-compact-table-datetime-picker", "hideSeconds", "", 3, "use12Hours", "cmacs-compact-table-edit-mode-invalid", "format", "defaultOpenValue", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["class", "cmacs-compact-table-select-cell", "showSearch", "", 3, "dropdownRender", "cmacsEditable", "cmacs-compact-table-field-mode-status", "cmacs-compact-table-field-mode-status-low-edit", "cmacs-compact-table-field-mode-status-medium-edit", "cmacs-compact-table-field-mode-status-high-edit", "cmacs-compact-table-edit-mode-invalid", "placeHolder", "mode", "showCmacsSearch", "ngModel", "click", "dblclick", "ngModelChange", "cmacsEditedInput", 4, "ngIf"], ["render", ""], ["class", "cmacs-compact-table-input-number-edit", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "cmacsStep", "min", "max", "formatter", "parser", "ngModelChange", "click", "dblclick", "keyup", 4, "ngIf"], ["class", "cmacs-compact-table-input-number-edit", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "formatter", "parser", "cmacsStep", "min", "max", "ngModelChange", "click", "dblclick", "keyup", 4, "ngIf"], ["cmacs-checkbox", "", "class", "cmacs-compact-tabe-editable-checkbox", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "phone-number", 3, "init", "formControlCustom", "click", "hasError", "countryChange", 4, "ngIf"], ["type", "text", "cmacs-input", "", 1, "cmacs-compact-table-input", 3, "placeholder", "ngModel", "click", "dblclick", "ngModelChange", "keyup"], ["fieldTypeInput", ""], [1, "cmacs-compact-table-date-edit", 3, "allowClear", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDatePicker", ""], ["hideSeconds", "", 1, "cmacs-compact-table-datetime-picker", 3, "use12Hours", "format", "defaultOpenValue", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDateTimePicker", ""], ["showSearch", "", 1, "cmacs-compact-table-select-cell", 3, "dropdownRender", "cmacsEditable", "placeHolder", "mode", "showCmacsSearch", "ngModel", "click", "dblclick", "ngModelChange", "cmacsEditedInput"], ["fieldTypeSelect", ""], [3, "label", "value", "divider", "disabled", 4, "ngFor", "ngForOf"], [3, "label", "value", "divider", "disabled"], ["cmacs-button", "", "role", "button", "aria-label", "add item", 3, "click", 4, "ngIf"], ["cmacs-button", "", "role", "button", "aria-label", "add item", 3, "click"], [1, "cmacs-compact-table-input-number-edit", 3, "ngModel", "cmacsStep", "min", "max", "formatter", "parser", "ngModelChange", "click", "dblclick", "keyup"], ["fieldTypeInputNumber", ""], [1, "cmacs-compact-table-input-number-edit", 3, "ngModel", "formatter", "parser", "cmacsStep", "min", "max", "ngModelChange", "click", "dblclick", "keyup"], ["cmacs-checkbox", "", 1, "cmacs-compact-tabe-editable-checkbox", 3, "ngModel", "ngModelChange"], ["fieldTypeBool", ""], [1, "phone-number", 3, "init", "formControlCustom", "click", "hasError", "countryChange"], ["fieldTypePhone", ""], [2, "width", "98%", "max-width", "98%", "padding", "7px 10px", 3, "click"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], ["class", "iconUISmall-Edit", 3, "cmacs-compact-table-edit-icon", "cmacs-compact-table-edit-icon-view", 4, "ngIf"], [1, "iconUISmall-Edit"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-date", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], [1, "iconUILarge-Calendar"], [1, "iconUILarge-Time"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-select", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], ["class", "iconArrowLarge-Chevron-Down", 3, "cmacs-compact-table-select-icon", "cmacs-compact-table-select-icon-view", 4, "ngIf"], [1, "iconArrowLarge-Chevron-Down"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-input-number", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], [1, "iconArrowLarge-Solid-UpDown"], [3, "cmacs-compact-table-hyperlink", "click", 4, "ngIf"], [3, "click"], ["class", "cmacs-compact-table-boolean-false-icon cmacs-compact-table-boolean-icon", 3, "cmacs-compact-table-invalid", 4, "ngIf"], ["class", "cmacs-compact-table-boolean-indeterminate-icon cmacs-compact-table-boolean-icon", 3, "cmacs-compact-table-invalid", 4, "ngIf"], ["class", "iconUILarge-Select-All cmacs-compact-table-boolean-icon-true", 3, "cmacs-compact-table-invalid", 4, "ngIf"], [1, "cmacs-compact-table-boolean-false-icon", "cmacs-compact-table-boolean-icon"], [1, "cmacs-compact-table-boolean-indeterminate-icon", "cmacs-compact-table-boolean-icon"], [1, "cmacs-compact-table-boolean-indeterminate-icon-inner"], [1, "iconUILarge-Select-All", "cmacs-compact-table-boolean-icon-true"], [2, "width", "100%", "max-width", "100%", 3, "click"], [1, "phone-number-view-mode", 3, "init", "formControlCustom", "click"], [3, "conf", "ctaDropdownOption", "onChangeAttachments", "onclickChooseFile"], ["templateRefCeld", ""], [2, "width", "98%", "max-width", "98%", "padding", "7px 10px", 3, "id"]], template: function CmacsCompactTableComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb21wYWN0LXRhYmxlL2NtYWNzLWNvbXBhY3QtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUlOLFNBQVMsRUFDVCxZQUFZLEVBQ1osdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBNkIsTUFBTSxFQUFFLEtBQUssRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBRy9GLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLGlCQUFpQixDQUFDO0FBR3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzVELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFD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LENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsbUJBQW1CLENBQUMsS0FBSyxFQUFFLElBQUk7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztlQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQy9ELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7ZUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUMvRCxPQUFP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O21CQUFDLHVDQUF1QztZQThZbEQsZUFBZTtrQkFEZCxZQUFZO21CQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIGNvdW50LCBkZWJvdW5jZVRpbWUsIHJhY2UsIHJlcGVhdCwgZGVsYXksIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCBqc1BERiBmcm9tICdqc3BkZic7XHJcbmltcG9ydCAnanNwZGYtYXV0b3RhYmxlJztcclxuaW1wb3J0IHsgR3JpZENvbmZpZywgRmllbGQsIEVkaXRDb2x1bW5BY3Rpb24sIEVkaXRDb2x1bW5FdmVudCB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcbmltcG9ydCB7IEdyaWRFeHBDb25maWcgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1leHAtY29uZmlnJztcclxuaW1wb3J0IHsgVGVtcGxhdGVUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9UZW1wbGF0ZVR5cGUuZW51bSc7XHJcbmltcG9ydCB7IENlbGRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9DZWxkVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgRXhjZWxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9leGNlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXhwb3J0VHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvZXhwb3J0LXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDaGVja2JveFNlbGVjdCB9IGZyb20gJy4uL2NtYWNzLXRhYmxlL2NtYWNzLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICd1dGlsJztcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ21hY3NJbnB1dE51bWJlckNvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLWlucHV0LW51bWJlci9jbWFjcy1pbnB1dC1udW1iZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWllJztcclxuaW1wb3J0IHsgQ21hY3NEYXRlVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLWRhdGV0aW1lLXBpY2tlci9jbWFjcy1kYXRldGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xyXG5pbXBvcnQgeyBOelNpemVNRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOelRhYmxlQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XHJcbmltcG9ydCB7IENtYWNzQ29udGV4dE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vY21hY3MtZHJvcGRvd24vY29udGV4dC1tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOelJlc2l6ZUV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9yZXNpemFibGUnO1xyXG5pbXBvcnQgeyBEZXZpY2VEZXRlY3RvclNlcnZpY2UgfSBmcm9tICduZ3gtZGV2aWNlLWRldGVjdG9yJztcclxuaW1wb3J0IHsgQ21hY3NDb21wYWN0VGFibGVDb2x1bW5Ub29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBhZnRlckRhdGUsIGJlZm9yZURhdGUsIGdyZWF0ZXJUaGFuLCBpc0VxdWFsVG9EYXRlLCBpc0VxdWFsVG9OdW1iZXIsIGlzTm90RXF1YWxUb0RhdGUsIGlzTm90RXF1YWxUb051bWJlciwgbGVzc1RoYW4sIHJhbmdlRGF0ZSwgcmFuZ2VOdW1iZXIgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL2N1c3RvbVZhbGlkYXRvcnMnO1xyXG5cclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuZGVjbGFyZSB2YXIgYWNjb3VudGluZzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbXBhY3QtdGFibGUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb21wYWN0VGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9nc10nOiAnbG9ncydcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbXBhY3RUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAvKiogbG9jYWwgdmFyaWFibGVzICovXHJcblxyXG4gIGxvY2FsZTogYW55ID0ge307IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgaGVhZGVyQm90dG9tU3R5bGUgPSB7fTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWw8YW55PihmYWxzZSwgW10pO1xyXG4gIHByaXZhdGUgX29ucmVzaXplJCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwdWJsaWMgb25yZXNpemVvYnMgPSB0aGlzLl9vbnJlc2l6ZSQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgX29uc29ydCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgcHVibGljIG9uc29ydG9icyA9IHRoaXMuX29uc29ydCQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHB1YmxpYyBkcm9wZG93bjogYW55O1xyXG4gIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgcGhvbmVMb2NhdGlvbiA9ICcxJztcclxuICBmb3JtUGhvbmVDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBbXHJcbiAgICBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqKD86XFwrPyhcXGR7MSwzfSkpPyhbLS4gKF0oXFxkezN9KVstLiApXSk/KChcXGR7M30pWy0uIF0oXFxkezIsNH0pKD86Wy0ueCBdKFxcZCspKT8pXFxzKiQvKSxcclxuICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICBWYWxpZGF0b3JzLm1heExlbmd0aCg0NSldKTtcclxuICBlZGl0aW9uT3BUcmlnZ2VyZWQgPSBmYWxzZTtcclxuICBkZWZhdWx0U29ydE9yZGVyID0gbnVsbDtcclxuICBjaGVja2JveENhY2hlOiBDaGVja2JveFNlbGVjdFtdID0gW107XHJcbiAgaXNJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIGVkaXRJZDogc3RyaW5nIHwgbnVsbDtcclxuICBwcm9wZXJ0eTogc3RyaW5nIHwgbnVsbDtcclxuICByb3dPbkVkaXRpb24gPSAtMTtcclxuICBub2RlT25FZGl0aW9uID0gbnVsbDtcclxuICBtYXBPZkV4cGFuZGVkRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnlbXSB9ID0ge307XHJcbiAgZGVmYXVsdFRpbWVWYWx1ZSA9IG5ldyBEYXRlKCk7XHJcbiAgbGFzdElkeFNlbGVjdGVkID0gbnVsbDtcclxuICBmaWVsZElEOiBhbnkgPSBudWxsO1xyXG4gIHNlbGVjdGVkQ29sdW1uSWQgPSAtMTtcclxuICBzZWxlY3RlZE1vcmUgPSAtMTtcclxuICBpc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IGZhbHNlO1xyXG4gIG9yZGVyID0gMDtcclxuICBjbGlja3MgPSAwO1xyXG4gIHRhcENvdW50ID0gMDtcclxuXHJcbiAgYWRkZWRPcHRpb24gPSAnJztcclxuXHJcbiAgLyoqIGVuZCBsb2NhbCB2YXJpYWJsZXMgKi9cclxuXHJcblxyXG4gIC8qKiBpbnB1dCB2YXJpYWJsZXMgKi9cclxuXHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTURTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBzaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+O1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4Y2x1c2l2ZVNlbGVjdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2dzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc21hcnRUYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkcmFnZ2FibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsSXRlbVNpemUgPSAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRBbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWRkQ29sdW1uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbG9hZGluZ0RlbGF5ID0gMDtcclxuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFzQ29va2llcyA9IHRydWU7XHJcbiAgQElucHV0KCkgdG90YWwgPSAwO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBwYWdlSW5kZXggPSAxO1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XHJcbiAgQElucHV0KCkgYWN0aW9uQ29sdW1uV2lkdGggPSAnODBweCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHdyYXBMaW5lcyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duQWRkT3B0aW9uVGVtcGxhdGVSZWY6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCkgZGF0YSA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogR3JpZENvbmZpZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdXNlMTJIb3VycyA9IHRydWU7XHJcbiAgQE91dHB1dCgpIGNvbmZpZ0NoYW5nZTogRXZlbnRFbWl0dGVyPEdyaWRDb25maWc+ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkQ29uZmlnPigpO1xyXG4gIEBJbnB1dCgpIGZpZWxkSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBncmlkSUQ6IHN0cmluZyA9IG51bGw7XHJcbiAgQElucHV0KCkgcGFnaW5hdGlvblBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2JvdGgnID0gJ2JvdHRvbSc7XHJcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XHJcbiAgQFZpZXdDaGlsZCgncmVuZGVySXRlbVRlbXBsYXRlJykgbnpJdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JztcclxuICAgIHBhZ2U6IG51bWJlcjtcclxuICB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZnJvbnRQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdGVtcGxhdGVNb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNlbnRlclRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2l6ZUNoYW5nZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2ltcGxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrYm94U2VsZWN0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGluTGluZUVkaXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGF0YVRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dSYXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZXhwb3J0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRFeHBDb25maWc+KCk7XHJcbiAgQElucHV0KCkgY29sdW1uTWVudTogYW55O1xyXG4gIEBJbnB1dCgpIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBjb250ZXh0bWVudTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgaW5kZW50U2l6ZSA9IDA7XHJcbiAgQElucHV0KCkgdmlydHVhbE1heEJ1ZmZlclB4ID0gMjAwO1xyXG5cclxuXHJcbiAgLyoqIGVuZCBpbnB1dCB2YXJpYWJsZXMgKi9cclxuXHJcbiAgLyoqIG91dHB1dCB2YXJpYWJsZXMgKi9cclxuXHJcblxyXG4gIEBPdXRwdXQoKSBidXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSByYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XHJcbiAgQE91dHB1dCgpIG9uZGxjbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmNsaWNrUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2tIeXBlcmxpbmsgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25lZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uUm93RXhwYW5kQ29sbGFwc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25kcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgcmF0ZUNvdW50ID0gNTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbXVsdGlTZWxlY3QgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25yb3dkZWxldGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9ucm93YWRkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jb2x1bW5hZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmVkaXRjb2x1bW4gPSBuZXcgRXZlbnRFbWl0dGVyPEVkaXRDb2x1bW5FdmVudD4oKTtcclxuICBAT3V0cHV0KCkgb25yZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jb250ZXh0bWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyb3Bkb3duUmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlQXR0YWNobWVudHMgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSBvbmNsaWNrQ2hvb3NlRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIFxyXG4gIC8qKiBlbmQgb3V0cHV0IHZhcmlhYmxlcyAqL1xyXG5cclxuICAvKiogY29uc3RydWN0b3IgKi9cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGV4Y2VsU2VydmljZTogRXhjZWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkZXZpY2VEZXRlY3RvcjogRGV2aWNlRGV0ZWN0b3JTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsXHJcbiAgICBwcml2YXRlIG56RHJvcGRvd25TZXJ2aWNlOiBDbWFjc0NvbnRleHRNZW51U2VydmljZSxcclxuICAgIHByaXZhdGUgY29va2llczogQ29va2llU2VydmljZSxcclxuICAgIHByaXZhdGUgdXRpbFNlcnZpY2U6IFV0aWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICAvKiogdmlldyBjaGlsZCB2YXJpYWJsZXMgKi9cclxuXHJcbiAgQFZpZXdDaGlsZCgnZ3JpZENvbXBvbmVudCcpIG56VGFibGVDb21wb25lbnQ6IE56VGFibGVDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlSW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUlucHV0TnVtYmVyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0TnVtYmVyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dE51bWJlcicsIHsgcmVhZDogQ21hY3NJbnB1dE51bWJlckNvbXBvbmVudCB9KSBpbnB1dE51bWJlckNvbXBvbmVudDogQ21hY3NJbnB1dE51bWJlckNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVEYXRlUGlja2VyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGRhdGVQaWNrZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZURhdGVUaW1lUGlja2VyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGRhdGVUaW1lUGlja2VyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVTZWxlY3QnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc2VsZWN0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVCb29sJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGJvb2xFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NEYXRlVGltZVBpY2tlckNvbXBvbmVudCkgZGF0ZVRpbWVQaWNrZXI6IENtYWNzRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZChDbWFjc0NvbXBhY3RUYWJsZUNvbHVtblRvb2x0aXBDb21wb25lbnQpIHRvb2x0aXBDb21wb25lbnQ6IENtYWNzQ29tcGFjdFRhYmxlQ29sdW1uVG9vbHRpcENvbXBvbmVudDtcclxuXHJcbiAgLyoqIGVuZCB2aWV3IGNoaWxkIHZhcmlhYmxlcyAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIGN1cnJlbnRQaG9uZVNlbGVjdGVkKGRhdGE6IGFueSwgZmllbGQ6IGFueSkge1xyXG4gICAgdGhpcy5mb3JtUGhvbmVDb250cm9sLnNldFZhbHVlKGRhdGFbZmllbGQucHJvcGVydHldICYmIGRhdGFbZmllbGQucHJvcGVydHldLmxlbmd0aCA/IGRhdGFbZmllbGQucHJvcGVydHldIDogJycpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGhvbmVGaWVsZFZhbHVlKGRhdGE6IGFueSwgZmllbGQ6IGFueSkge1xyXG4gICAgY29uc3QgcGhvbmVDb250cm9sID0gbmV3IEZvcm1Db250cm9sKGRhdGFbZmllbGQucHJvcGVydHldICYmIGRhdGFbZmllbGQucHJvcGVydHldLmxlbmd0aCA/IGRhdGFbZmllbGQucHJvcGVydHldIDogJycpXHJcbiAgICByZXR1cm4gcGhvbmVDb250cm9sO1xyXG4gIH1cclxuXHJcbiAgb25Db3VudHJ5Q2hhbmdlKCRldmVudCkge1xyXG4gICAgdGhpcy5waG9uZUxvY2F0aW9uID0gJGV2ZW50LmRpYWxDb2RlO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtUGhvbmVDb250cm9sLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGhhc1Bob25lTnVtYmVyRXJyb3IoZXZlbnQ6IGFueSwgaW5kZXg6IG51bWJlciwgZGF0YTogYW55ID0gbnVsbCwgcHJvcGVydHk6IGFueSA9IG51bGwsIGZpZWxkOiBGaWVsZCA9IG51bGwpIHtcclxuICAgIGlmICh0aGlzLmZvcm1QaG9uZUNvbnRyb2wudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IGluZCA9IHRoaXMuZm9ybVBob25lQ29udHJvbC52YWx1ZS5pbmRleE9mKCcrJyk7XHJcbiAgICAgIGlmIChpbmQgPT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtUGhvbmVDb250cm9sLnNldFZhbHVlKGArJHt0aGlzLnBob25lTG9jYXRpb259YCArIHRoaXMuZm9ybVBob25lQ29udHJvbC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5waG9uZUxvY2F0aW9uID0gJzEnO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFbaW5kZXhdO1xyXG4gICAgICBkYXRhLmNtYWNzRWRpdGVkUHJvcCA9IHByb3BlcnR5ID8gcHJvcGVydHkgOiB0aGlzLnByb3BlcnR5O1xyXG4gICAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuUGhvbmUpIHtcclxuICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9IGRhdGFbZmllbGQucHJvcGVydHldICE9PSAnJyA/IHRoaXMuZm9ybVBob25lQ29udHJvbC52YWx1ZSA6ICcnO1xyXG4gICAgICAgIHRoaXMuZm9ybVBob25lQ29udHJvbC5zZXRWYWx1ZSgnJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRhW2luZGV4XSA9IGRhdGE7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgZm9ybWF0dGVyID0gKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gYWNjb3VudGluZy5mb3JtYXROdW1iZXIodmFsdWUsIHsgcHJlY2lzaW9uOiAzLCB0aG91c2FuZDogJyAnLCBkZWNpbWFsOiAnLCcgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfTtcclxuICBwYXJzZXIgPSAodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBhY2NvdW50aW5nLnVuZm9ybWF0KHZhbHVlLCAnLCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH07XHJcbiAgZGVmYXVsdEZvcm1hdHRlciA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfTtcclxuICBkZWZhdWx0UGFyc2VyID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIG9uY29udGV4dG1lbnVldnQoJGV2ZW50LCBpdGVtKSB7XHJcbiAgICB0aGlzLm9uY29udGV4dG1lbnUuZW1pdChpdGVtKTtcclxuICB9XHJcblxyXG4gIG9wZW5Db2x1bW5NZW51KGlkeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ29sdW1uSWQgPSBpZHg7XHJcbiAgfVxyXG5cclxuICBvcGVuQ29sdW1uTW9yZShpZHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5zZWxlY3RlZE1vcmUgPSBpZHg7XHJcbiAgfVxyXG5cclxuICBjbG9zZUNvbHVtbk1lbnUoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ29sdW1uSWQgPSAtMTtcclxuICB9XHJcblxyXG4gIGNsb3NlQ29sdW1uTW9yZSgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRNb3JlID0gLTE7XHJcbiAgfVxyXG5cclxuICBvbkZpZWxkQ2hhbmdlZChpZHg6IG51bWJlciwgZmllbGQ6IEVkaXRDb2x1bW5BY3Rpb24pIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDb2x1bW5JZCA9IC0xO1xyXG4gICAgdGhpcy5zZWxlY3RlZE1vcmUgPSAtMTtcclxuICAgIGNvbnN0IHZhbHVlID0geyBpbmRleDogaWR4LCBjb2x1bW46IGZpZWxkIH07XHJcbiAgICB0aGlzLm9uZWRpdGNvbHVtbi5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uRmllbGRUYXBFbGxpcHNpcyhpZDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5pbkxpbmVFZGl0IHx8IHRoaXMuZGV2aWNlRGV0ZWN0b3IuaXNEZXNrdG9wKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25EYXRhVGFwRWxsaXBzaXMoaWQ6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuZGV2aWNlRGV0ZWN0b3IuaXNEZXNrdG9wKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VG9vbHRpcEVsbGlwc2lzVHJpZ2dlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmRldmljZURldGVjdG9yLmlzRGVza3RvcCgpID8gJ2hvdmVyJyA6ICdjbGljayc7XHJcbiAgfVxyXG5cclxuICBpc0VsbGlwc2lzQWN0aXZlKGlkOiBzdHJpbmcsIGZpZWxkOiBhbnkpIHtcclxuICAgIGlmICghZmllbGQuc2hvd1Rvb2x0aXApIHsgcmV0dXJuOyB9XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGlmICghZWwpIHsgcmV0dXJuOyB9XHJcbiAgICByZXR1cm4gKGVsLm9mZnNldFdpZHRoIDwgZWwuc2Nyb2xsV2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgaXNUb29sdGlwQWN0aXZlKGRhdGEsIGZpZWxkOiBhbnkpIHtcclxuICAgIGlmICghZmllbGQuc2hvd1Rvb2x0aXAgfHwgZmllbGQud2lkdGggPT09IHVuZGVmaW5lZCkgeyByZXR1cm47IH1cclxuICAgIGxldCB3aWR0aCA9IGZpZWxkLndpZHRoO1xyXG4gICAgd2lkdGggPSBOdW1iZXIod2lkdGgucmVwbGFjZSgncHgnLCAnJykpO1xyXG4gICAgY29uc3Qgc3RyaW5nRmllbGRWYWx1ZSA9IHRoaXMuZ2V0U3RyaW5nRmllbGRWYWx1ZShkYXRhLCBmaWVsZCk7XHJcbiAgICBpZiAoc3RyaW5nRmllbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB3aWR0aCA8IHRoaXMubWVhc3VyZVRleHQoc3RyaW5nRmllbGRWYWx1ZSwgMTIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWVhc3VyZVRleHQoc3RyOiBzdHJpbmcsIGZvbnRTaXplOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHdpZHRocyA9IFtcclxuICAgICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcclxuICAgICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMC4yNzk2ODc1LCAwLjI3NjU2MjUsIDAuMzU0Njg3NSwgMC41NTQ2ODc1LFxyXG4gICAgICAwLjU1NDY4NzUsIDAuODg5MDYyNSwgMC42NjU2MjUsIDAuMTkwNjI1LCAwLjMzMjgxMjUsIDAuMzMyODEyNSwgMC4zODkwNjI1LFxyXG4gICAgICAwLjU4MjgxMjUsIDAuMjc2NTYyNSwgMC4zMzI4MTI1LCAwLjI3NjU2MjUsIDAuMzAxNTYyNSwgMC41NTQ2ODc1LFxyXG4gICAgICAwLjU1NDY4NzUsIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuNTU0Njg3NSwgMC41NTQ2ODc1LFxyXG4gICAgICAwLjU1NDY4NzUsIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjI3NjU2MjUsIDAuMjc2NTYyNSwgMC41ODQzNzUsXHJcbiAgICAgIDAuNTgyODEyNSwgMC41ODQzNzUsIDAuNTU0Njg3NSwgMS4wMTQwNjI1LCAwLjY2NTYyNSwgMC42NjU2MjUsIDAuNzIxODc1LFxyXG4gICAgICAwLjcyMTg3NSwgMC42NjU2MjUsIDAuNjA5Mzc1LCAwLjc3NjU2MjUsIDAuNzIxODc1LCAwLjI3NjU2MjUsIDAuNSxcclxuICAgICAgMC42NjU2MjUsIDAuNTU0Njg3NSwgMC44MzI4MTI1LCAwLjcyMTg3NSwgMC43NzY1NjI1LCAwLjY2NTYyNSwgMC43NzY1NjI1LFxyXG4gICAgICAwLjcyMTg3NSwgMC42NjU2MjUsIDAuNjA5Mzc1LCAwLjcyMTg3NSwgMC42NjU2MjUsIDAuOTQzNzUsIDAuNjY1NjI1LFxyXG4gICAgICAwLjY2NTYyNSwgMC42MDkzNzUsIDAuMjc2NTYyNSwgMC4zNTQ2ODc1LCAwLjI3NjU2MjUsIDAuNDc2NTYyNSwgMC41NTQ2ODc1LFxyXG4gICAgICAwLjMzMjgxMjUsIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjUsIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjI3NjU2MjUsXHJcbiAgICAgIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjIyMTg3NSwgMC4yNDA2MjUsIDAuNSwgMC4yMjE4NzUsIDAuODMyODEyNSxcclxuICAgICAgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjMzMjgxMjUsIDAuNSwgMC4yNzY1NjI1LFxyXG4gICAgICAwLjU1NDY4NzUsIDAuNSwgMC43MjE4NzUsIDAuNSwgMC41LCAwLjUsIDAuMzU0Njg3NSwgMC4yNTkzNzUsIDAuMzUzMTI1LFxyXG4gICAgICAwLjU4OTA2MjUsXHJcbiAgICBdO1xyXG4gICAgY29uc3QgYXZnID0gMC41Mjc5Mjc2MzE1Nzg5NDcxO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoXHJcbiAgICAgIHN0clxyXG4gICAgICAgIC5zcGxpdCgnJylcclxuICAgICAgICAubWFwKChjKSA9PlxyXG4gICAgICAgICAgYy5jaGFyQ29kZUF0KDApIDwgd2lkdGhzLmxlbmd0aCA/IHdpZHRoc1tjLmNoYXJDb2RlQXQoMCldIDogYXZnXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5yZWR1Y2UoKGN1ciwgYWNjKSA9PiBhY2MgKyBjdXIpICogZm9udFNpemVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRJbnB1dE51bWJlclZhbHVlKGRhdGE6IGFueSwgZmllbGQ6IEZpZWxkKSB7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzTnVsbChkYXRhW2ZpZWxkLnByb3BlcnR5XSkpIHtcclxuICAgICAgaWYgKGZpZWxkLnVzZUNvbW1hTWFya2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFbZmllbGQucHJvcGVydHldLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcsJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmlzTnVsbChmaWVsZC5mb3JtYXR0ZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkLmZvcm1hdHRlcihkYXRhW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGRhdGFbZmllbGQucHJvcGVydHldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpZWxkLnBsYWNlaG9sZGVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RyaW5nRmllbGRWYWx1ZShkYXRhOiBhbnksIGZpZWxkOiBhbnkpIHtcclxuICAgIHJldHVybiBkYXRhW2ZpZWxkLnByb3BlcnR5XSAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XS5sZW5ndGggPyBkYXRhW2ZpZWxkLnByb3BlcnR5XSA6IGZpZWxkLnBsYWNlaG9sZGVyO1xyXG4gIH1cclxuXHJcbiAgb25SZXNpemUoZXZlbnQ6IE56UmVzaXplRXZlbnQsIGNvbDogc3RyaW5nLCBmaWVsZDogRmllbGQpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLl9vbnJlc2l6ZSQubmV4dCh7IGV2ZW50LCBjb2wsIGZpZWxkIH0pO1xyXG4gIH1cclxuXHJcbiAgb25SZXNpemVFdnQoeyB3aWR0aCB9OiBOelJlc2l6ZUV2ZW50LCBjb2w6IHN0cmluZywgZmllbGQ6IEZpZWxkKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmZpZWxkcykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uZmlnLmZpZWxkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5jb25maWcuZmllbGRzW2ldO1xyXG4gICAgICAgIGlmIChmaWVsZC5wcm9wZXJ0eSA9PT0gY29sKSB7XHJcbiAgICAgICAgICBjb25zdCBlbFdpZHRoID0gZmllbGQud2lkdGggPyBOdW1iZXIoZmllbGQud2lkdGgucmVwbGFjZSgvW15cXGQuLV0vZywgJycpKSA6IDA7XHJcbiAgICAgICAgICBpZiAodGhpcy5zY3JvbGwueCAmJiBpICsgMSA9PT0gdGhpcy5jb25maWcuZmllbGRzLmxlbmd0aCAtIDEgJiYgdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXSAhPT0gbnVsbCAmJiB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxXaWR0aE5leHQgPSB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLndpZHRoID8gTnVtYmVyKHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ud2lkdGgucmVwbGFjZSgvW15cXGQuLV0vZywgJycpKSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gd2lkdGggLSBlbFdpZHRoO1xyXG4gICAgICAgICAgICBpZiAoZGVsdGEgPiAwICYmIGRlbHRhIDwgZWxXaWR0aE5leHQpIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS5taW5XaWR0aCAhPT0gbnVsbCAmJiB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLm1pbldpZHRoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIodGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS5taW5XaWR0aCkgPCAoZWxXaWR0aE5leHQgLSBkZWx0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS53aWR0aCA9IGAke2VsV2lkdGhOZXh0IC0gZGVsdGF9cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLndpZHRoID0gYCR7ZWxXaWR0aE5leHQgLSBkZWx0YX1weGA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkZWx0YSA8IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLndpZHRoID0gYCR7ZWxXaWR0aE5leHQgLSBkZWx0YX1weGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZpZWxkLndpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm9ucmVzaXplLmVtaXQoeyBjb2w6IGNvbCwgY29uZmlnOiB0aGlzLmNvbmZpZyB9KTtcclxuICAgIHRoaXMuY29uZmlnQ2hhbmdlLmVtaXQodGhpcy5jb25maWcpO1xyXG4gICAgaWYgKHRoaXMuZ3JpZElEID09PSBudWxsIHx8IHRoaXMuZ3JpZElEID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaGFzQ29va2llcyAmJiB0aGlzLmdldEluZGV4Q29va2llKCkpIHtcclxuICAgICAgdGhpcy5jb29raWVzLnNldCh0aGlzLmdyaWRJRCwgSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcpLCAzNjUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJldmVudERlZmF1bHQoJGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICAvKkNvbnRleHQgTWVudSAqL1xyXG4gIGNvbnRleHRNZW51KCRldmVudDogTW91c2VFdmVudCwgdGVtcGxhdGU6IGFueSwgaXRlbTogYW55ID0gbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbmNvbnRleHRtZW51ZXZ0KCRldmVudCwgaXRlbSk7XHJcbiAgICB0aGlzLmRyb3Bkb3duID0gdGhpcy5uekRyb3Bkb3duU2VydmljZS5jcmVhdGUoJGV2ZW50LCB0ZW1wbGF0ZSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShkYXRhOiBhbnksIGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcclxuICAgIGlmIChmaWVsZC52YWxpZGF0b3JzKSB7XHJcbiAgICAgIGZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKGRhdGFbZmllbGQucHJvcGVydHldLCBmaWVsZC52YWxpZGF0b3JzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKGRhdGFbZmllbGQucHJvcGVydHldKTtcclxuICAgIH1cclxuICAgIGRhdGEudmFsaWQgPSBkYXRhLnZhbGlkID8gZGF0YS52YWxpZCA6IHt9O1xyXG4gICAgZGF0YS52YWxpZFtmaWVsZC5wcm9wZXJ0eV0gPSBmb3JtQ29udHJvbC52YWxpZDtcclxuICAgIHJldHVybiBmb3JtQ29udHJvbC52YWxpZDtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiB3aWxsIGxvb3AgdGhydSBldmVyeSBmaWVsZCBpbiB0aGUgY29uZmlndXJhdGlvbiBhbmQgc2V0IHRoZSBjdXN0b20gdmFsaWRhdG9ycyBkZXBlbmRpbmcgb24gdGhlIHZhbGlkYXRpb24gcnVsZXNcclxuICAgKiBpZiBubyB2YWxpZGF0aW9uIHJ1bGUgaXMgcHJlc2VudCB0aGlzIHdpbGwgYmUgaWdub3JlZFxyXG4gICAqL1xyXG4gIHNldEN1c3RvbVZhbGlkYXRvcnMoKSB7XHJcblxyXG4gICAgaWYgKHRoaXMuY29uZmlnID09PSB1bmRlZmluZWQgfHwgdGhpcy5jb25maWcgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvbmZpZy5maWVsZHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5jb25maWcuZmllbGRzW2luZGV4XTtcclxuXHJcbiAgICAgIGlmIChmaWVsZC52YWxpZGF0aW9uUnVsZSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkLnZhbGlkYXRpb25SdWxlID09PSBudWxsIHx8IGZpZWxkLnZhbGlkYXRpb25SdWxlID09ICcnKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN3aXRjaCAoZmllbGQudmFsaWRhdGlvblJ1bGUpIHtcclxuICAgICAgICBjYXNlICdub25lJzoge1xyXG4gICAgICAgICAgZmllbGQudmFsaWRhdG9ycyA9IFtdOyAvLyB0aGlzIHdpbGwgbm90IGFwcGx5IGFueSBydWxlXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnaXMtbm90LWVtcHR5Jzoge1xyXG4gICAgICAgICAgZmllbGQudmFsaWRhdG9ycyA9IFtWYWxpZGF0b3JzLnJlcXVpcmVkXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdhZnRlci1kYXRlJzoge1xyXG4gICAgICAgICAgZmllbGQudmFsaWRhdG9ycyA9IFthZnRlckRhdGUoZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2JlZm9yZS1kYXRlJzoge1xyXG4gICAgICAgICAgZmllbGQudmFsaWRhdG9ycyA9IFtiZWZvcmVEYXRlKGZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdpcy1lcXVhbC10byc6IHtcclxuICAgICAgICAgIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgPyBmaWVsZC52YWxpZGF0b3JzID0gW2lzRXF1YWxUb0RhdGUoZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldIDpcclxuICAgICAgICAgICAgW2lzRXF1YWxUb051bWJlcihmaWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnaXMtbm90LWVxdWFsLXRvJzoge1xyXG4gICAgICAgICAgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZSA/IGZpZWxkLnZhbGlkYXRvcnMgPSBbaXNOb3RFcXVhbFRvRGF0ZShmaWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV0gOlxyXG4gICAgICAgICAgICBbaXNOb3RFcXVhbFRvTnVtYmVyKGZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdyYW5nZSc6IHtcclxuICAgICAgICAgIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgPyBmaWVsZC52YWxpZGF0b3JzID0gW3JhbmdlRGF0ZShmaWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdLCBmaWVsZC52YWxpZGF0aW9uVmFsdWVzWzFdKV0gOlxyXG4gICAgICAgICAgICBbcmFuZ2VOdW1iZXIoZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSwgZmllbGQudmFsaWRhdGlvblZhbHVlc1sxXSldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2dyZWF0ZXItdGhhbic6IHtcclxuICAgICAgICAgIGZpZWxkLnZhbGlkYXRvcnMgPSBbZ3JlYXRlclRoYW4oZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2xlc3MtdGhhbic6IHtcclxuICAgICAgICAgIGZpZWxkLnZhbGlkYXRvcnMgPSBbbGVzc1RoYW4oZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IGZpZWxkLnZhbGlkYXRvcnMgPSBbXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkUm93KGlkeDogbnVtYmVyLCAkZXZlbnQgPSBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLm9ucm93YWRkZWQuZW1pdChpZHgpO1xyXG4gICAgdGhpcy5lZGl0aW9uT3BUcmlnZ2VyZWQgPSB0cnVlO1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0KCRldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRjb2x1bW4oaWR4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMub25jb2x1bW5hZGRlZC5lbWl0KCsraWR4KTtcclxuICB9XHJcblxyXG4gIGNtYWNzRWRpdGVkSW5wdXQoZXZlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5hZGRlZE9wdGlvbiA9IGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgYWRkT3B0aW9uKCkge1xyXG4gICAgdGhpcy5vbkRyb3Bkb3duUmVuZGVyLmVtaXQodGhpcy5hZGRlZE9wdGlvbik7XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kcmFnZ2FibGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIHRoaXMuZGF0YSA9IFsuLi50aGlzLmRhdGFdO1xyXG4gICAgdGhpcy5vbmRyb3AuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVSb3coaWR4OiBudW1iZXIsICRldmVudCA9IG51bGwpOiB2b2lkIHtcclxuICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9IHRoaXMuZGF0YVtpZHhdO1xyXG4gICAgdGhpcy5vbnJvd2RlbGV0ZWQuZW1pdChpdGVtVG9SZW1vdmUpO1xyXG4gICAgdGhpcy5lZGl0aW9uT3BUcmlnZ2VyZWQgPSB0cnVlO1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0KCRldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydEVkaXQoaWQ6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5MaW5lRWRpdCkge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChkYXRhW3RoaXMuZmllbGRJRF0pIHx8IHRoaXMuaXNSb3dTZWxlY3RlZChkYXRhKSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmlzTnVsbChkYXRhLm5vdEVkaXRhYmxlRmllbGRzKVxyXG4gICAgICAgICYmIGRhdGEubm90RWRpdGFibGVGaWVsZHMuZmlsdGVyKHggPT4geCA9PT0gcHJvcGVydHkpLmxlbmd0aFxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZWRpdElkICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVkaXRJZCA9IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF07XHJcbiAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLmZvY3VzU2VsZWN0KHRoaXMuaW5wdXRFbGVtZW50KTtcclxuICAgICAgaWYgKHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmZvY3VzU2VsZWN0KHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQuaW5wdXRFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kYXRlVGltZVBpY2tlcikge1xyXG4gICAgICAgIHRoaXMuZm9jdXNTZWxlY3QodGhpcy5kYXRlVGltZVBpY2tlci5pbnB1dFJlZik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzU2VsZWN0KGVsZW06IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGVsZW0pIHtcclxuICAgICAgZWxlbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW0ubmF0aXZlRWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNvcnQoJGV2ZW50OiBhbnksIGZpZWxkUHJvcGVydHk6IHN0cmluZywpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uc29ydCQubmV4dCh7IHNvcnROYW1lOiBmaWVsZFByb3BlcnR5LCBzb3J0VmFsdWU6ICRldmVudCB9KTtcclxuICB9XHJcblxyXG4gIGZpbHRlcigkZXZlbnQ6IGFueSwgZmllbGRQcm9wZXJ0eTogc3RyaW5nLCk6IHZvaWQge1xyXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7IGZpbHRlck5hbWU6IGZpZWxkUHJvcGVydHksIGZpbHRlclZhbHVlOiAkZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRIZWFkZXJNYXhXaWR0aChmaWVsZDogRmllbGQpOiBzdHJpbmcge1xyXG4gICAgaWYgKGZpZWxkLnNob3dTb3J0ICYmIGZpZWxkLnNob3dGaWx0ZXIpIHtcclxuICAgICAgcmV0dXJuIGBjYWxjKDEwMCUgLSA4MnB4KWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmaWVsZC5zaG93U29ydCB8fCBmaWVsZC5zaG93RmlsdGVyKSB7XHJcbiAgICAgIHJldHVybiBgY2FsYygxMDAlIC0gNThweClgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuYWRkQ29sdW1uID8gYGNhbGMoMTAwJSAtIDE1cHgpYCA6IGAxMDAlYDtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNlZG93bicsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlTW91c2VEb3duKGU6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgZWxlbWVudENvbHVtbk1vcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFjdFRhYmxlQ29sdW1uTW9yZScpO1xyXG4gICAgY29uc3QgZWxlbWVudENvbHVtblRvb2x0aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFjdFRhYmxlQ29sdW1uVG9vbHRpcCcpO1xyXG5cclxuICAgIGlmIChlbGVtZW50Q29sdW1uTW9yZSAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIGVsZW1lbnRDb2x1bW5Nb3JlKSkge1xyXG4gICAgICB0aGlzLmNsb3NlQ29sdW1uTW9yZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsZW1lbnRDb2x1bW5Ub29sdGlwICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgZWxlbWVudENvbHVtblRvb2x0aXApKSB7XHJcbiAgICAgIGlmICh0aGlzLnRvb2x0aXBDb21wb25lbnQgIT09IG51bGwgJiYgdGhpcy50b29sdGlwQ29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnRvb2x0aXBDb21wb25lbnQudXBkYXRlRGlzcGxheSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xvc2VDb2x1bW5NZW51KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZWRpdElkICYmIHRoaXMucHJvcGVydHkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICh0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCkgfHxcclxuICAgICAgICAodGhpcy5pbnB1dE51bWJlckVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmlucHV0TnVtYmVyRWxlbWVudC5uYXRpdmVFbGVtZW50KSkgfHxcclxuICAgICAgICAodGhpcy5kYXRlUGlja2VyRWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuZGF0ZVRpbWVQaWNrZXJFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5kYXRlVGltZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuc2VsZWN0RWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuc2VsZWN0RWxlbWVudC5uYXRpdmVFbGVtZW50KSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQpIHtcclxuICAgICAgICAgIHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQuYmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRlVGltZVBpY2tlcikge1xyXG4gICAgICAgICAgdGhpcy5kYXRlVGltZVBpY2tlci5zZXRDdXJyZW50VmFsdWVBbmRDbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3VzdG9tUGFkZGluZyhpdGVtOiBhbnksIGk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAoIWkpIHtcclxuICAgICAgaWYgKCFpdGVtLmxldmVsKSB7XHJcbiAgICAgICAgcmV0dXJuICEhaXRlbS5jaGlsZHJlbiA/IDYgOiAyODtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5sZXZlbCAqIHRoaXMuaW5kZW50U2l6ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDY7XHJcbiAgfVxyXG5cclxuICBjaGlsZE9mKG5vZGU6IGFueSwgYW5jZXN0b3I6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGNoaWxkID0gbm9kZTtcclxuICAgIHdoaWxlIChjaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICBpZiAoY2hpbGQgPT09IGFuY2VzdG9yKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QgJiYgY2hpbGQuY2xhc3NMaXN0Lmxlbmd0aCA+IDAgJiYgY2hpbGQuY2xhc3NOYW1lICYmIHR5cGVvZiBjaGlsZC5jbGFzc05hbWUgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgJiYgY2hpbGQuY2xhc3NOYW1lLmluZGV4T2YoJ2Nkay1vdmVybGF5LXBhbmUnKSA+PSAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICBjb25zdCBub2RlID0gY2hpbGQuY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSAnQ01BQ1MtTU9EQUwnKSB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfTtcclxuICAgICAgY2hpbGQgPSBjaGlsZC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGUoJGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCRldmVudC5rZXkgPT09ICgnRW50ZXInIHx8ICdlbnRlcicpKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgZGF0YS5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICAgICAgdGhpcy5vbmVkaXQuZW1pdChkYXRhKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhW2luZGV4XS5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgdGhpcy5ub2RlT25FZGl0aW9uID0gZGF0YTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSBpbmRleDtcclxuICAgICAgfVxyXG4gICAgfSwgMzAwKVxyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGVOZ01vZGVsKGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSA9IG51bGwsIHByb3BlcnR5OiBhbnkgPSBudWxsLCBmaWVsZDogRmllbGQgPSBudWxsKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIGRhdGEuY21hY3NFZGl0ZWRQcm9wID0gcHJvcGVydHkgPyBwcm9wZXJ0eSA6IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIGlmIChmaWVsZCAmJiBmaWVsZC5tb2RlID09PSAndGFnc1NpbmdsZVNlbGVjdCcpIHtcclxuICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9IGRhdGFbZmllbGQucHJvcGVydHldLmxlbmd0aCA/IGRhdGFbZmllbGQucHJvcGVydHldWzBdIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KGRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YVtpbmRleF07XHJcbiAgICAgIGRhdGEuY21hY3NFZGl0ZWRQcm9wID0gcHJvcGVydHkgPyBwcm9wZXJ0eSA6IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIGlmIChmaWVsZCAmJiBmaWVsZC5tb2RlID09PSAndGFnc1NpbmdsZVNlbGVjdCcpIHtcclxuICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9IGRhdGFbZmllbGQucHJvcGVydHldLmxlbmd0aCA/IGRhdGFbZmllbGQucHJvcGVydHldWzBdIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVtpbmRleF0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNCb29sZWFuKGZpZWxkKSkge1xyXG4gICAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tib3hTZWxlY3QgJiYgIXRoaXMuZ2V0Tm9kZShkYXRhW3RoaXMuZmllbGRJRF0pLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICB0aGlzLm9uQ2hlY2tib3hUcmVlQ2hhbmdlKHRydWUsIGRhdGEsIHRoaXMubWFwT2ZFeHBhbmRlZERhdGFbZGF0YVt0aGlzLmZpZWxkSURdXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrYm94U2VsZWN0ICYmICF0aGlzLnNlbGVjdGlvbi5pc1NlbGVjdGVkKGRhdGFbdGhpcy5maWVsZElEXSkpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0VHJlZVNpbmdsZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUm93U2VsZWN0ZWQoZGF0YSkpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0Um93KG5ldyBNb3VzZUV2ZW50KCdjbGljaycpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICB0aGlzLnJvd09uRWRpdGlvbiA9IC0xO1xyXG4gICAgdGhpcy5ub2RlT25FZGl0aW9uID0gbnVsbDtcclxuICB9XHJcblxyXG4gIG5nTW9kZWxDaGFuZ2UoaW5kZXg6IG51bWJlciwgZGF0YTogYW55ID0gbnVsbCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICB0aGlzLm5vZGVPbkVkaXRpb24gPSBkYXRhO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJvd09uRWRpdGlvbiA9IGluZGV4O1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXgoaWQpOiBudW1iZXIge1xyXG4gICAgbGV0IGkgPSAtMTtcclxuICAgIGkgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBpZCk7XHJcbiAgICByZXR1cm4gaTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjaGVja2JveFRlbXBDYWNoZSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2hlY2tib3hUZW1wQ2FjaGUucHVzaCh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkID8gZmFsc2UgOiB0aGlzLmRhdGFbaV0uc2VsZWN0ZWQsXHJcbiAgICAgICAgZGF0YTogeyAuLi50aGlzLmRhdGFbaV0gfSxcclxuICAgICAgICBvcmRlcjogdGhpcy5kYXRhW2ldLnNlbGVjdGVkID8gdGhpcy5vcmRlcisrIDogLTFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUgPSBbLi4uY2hlY2tib3hUZW1wQ2FjaGVdO1xyXG4gICAgaWYgKHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkKSB7XHJcbiAgICAgIHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2JveENhY2hlVHJlZURhdGEoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnZlcnRFeHBhbmRUcmVlVG9MaXN0KHRoaXMuZGF0YSwgdGhpcy5jaGVja2JveENhY2hlKTtcclxuICB9XHJcblxyXG4gIGNsaWNrSHlwZXJsaW5rKGRhdGE6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5vbmNsaWNrSHlwZXJsaW5rLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0RXhwYW5kVHJlZVRvTGlzdChpdGVtOiBhbnksIHBsYWluTGlzdDogYW55W10pOiB2b2lkIHtcclxuICAgIGlmIChpc0FycmF5KGl0ZW0pKSB7XHJcbiAgICAgIGl0ZW0uZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50SW5DYWNoZSA9IHBsYWluTGlzdC5maW5kSW5kZXgoZWwgPT4gZWwuZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gZWxlbVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRJbkNhY2hlIDwgMCkge1xyXG4gICAgICAgICAgcGxhaW5MaXN0LnB1c2goe1xyXG4gICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIG9yZGVyOiAtMSxcclxuICAgICAgICAgICAgZGF0YTogeyAuLi5lbGVtIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsZW0uY2hpbGRyZW4gJiYgZWxlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnZlcnRFeHBhbmRUcmVlVG9MaXN0KGVsZW0uY2hpbGRyZW4sIHBsYWluTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRJbkNhY2hlID0gcGxhaW5MaXN0LmZpbmRJbmRleChlbCA9PiBlbC5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBpdGVtW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgICAgaWYgKGVsZW1lbnRJbkNhY2hlIDwgMCkge1xyXG4gICAgICAgIHBsYWluTGlzdC5wdXNoKHtcclxuICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgIG9yZGVyOiAtMSxcclxuICAgICAgICAgIGRhdGE6IHsgLi4uaXRlbSB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQnV0dG9uQ2xpY2soZmllbGQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5idXR0b25DbGljay5lbWl0KGZpZWxkKTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hDaGFuZ2UoJGV2ZW50LCBkYXRhKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5nZXRJbmRleChkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKV0ub3JkZXIgPSAkZXZlbnQgPyB0aGlzLm9yZGVyKysgOiAtMTtcclxuICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hDaGVja2JveFN0YXRlKG9uaW5pdCA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgaWYgKCFvbmluaXQpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChkYXRhU2VsZWN0ZWQubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0NoZWNrYm94U3RhdGUoKTogQ2hlY2tib3hTZWxlY3RbXSB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCA9PT0gdHJ1ZSkuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuYWxsQ2hlY2tlZCA9IChkYXRhU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAoZGF0YVNlbGVjdGVkLmxlbmd0aCA9PT0gdGhpcy5jaGVja2JveENhY2hlLmxlbmd0aCkpO1xyXG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPSBkYXRhU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAhdGhpcy5hbGxDaGVja2VkO1xyXG4gICAgcmV0dXJuIGRhdGFTZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICBvblJhdGVDaGFuZ2UoY291bnQ6IG51bWJlciwgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICBkYXRhW3RoaXMuY29uZmlnLmZpZWxkUmF0ZV0gPSBjb3VudDtcclxuICAgIHRoaXMucmF0ZUNoYW5nZS5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgb25SYXRlQ2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRzKCk6IEZpZWxkW10ge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmZpZWxkcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uaGlkZGVuID09PSB1bmRlZmluZWQgfHwgIWl0ZW0uaGlkZGVuKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hBbGxDaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHN0YXR1cztcclxuICAgICAgZWxlbWVudC5vcmRlciA9IC0xO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlzSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmICghdGhpcy5leGNsdXNpdmVTZWxlY3QpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCgoc3RhdHVzKSA/IHRoaXMuZGF0YSA6IFtdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRhdGFTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoKHN0YXR1cykgPyBkYXRhU2VsZWN0ZWQubWFwKGUgPT4gZS5kYXRhKSA6IFtdKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbChkYXRhOiBhbnksIGZpZWxkOiBGaWVsZCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0ICYmIGZpZWxkLnNlbGVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgY29uc3QgaXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQoaXRlbSA9PiBpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbVtmaWVsZC5zZWxlY3QudmFsdWVdID09PSBkYXRhW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICAgIHJlc3VsdCA9IChpdGVtICE9PSB1bmRlZmluZWQpID8gaXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdIDogJyc7XHJcbiAgICAgIGlmIChmaWVsZC5tb2RlID09PSAndGFnc1NpbmdsZVNlbGVjdCcgJiYgcmVzdWx0ID09PSAnJykge1xyXG4gICAgICAgIHJlc3VsdCA9IGRhdGFbZmllbGQucHJvcGVydHldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gIH1cclxuXHJcbiAgaXNTdHJpbmcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQucmVhZG9ubHkgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5yZWFkb25seTtcclxuICB9XHJcblxyXG4gIGlzTnVtYmVyKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgaXNOdWxsKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaXNCb29sZWFuKGZpZWxkOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gbnVsbCAmJiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgfVxyXG5cclxuICBpc09iamVjdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgKHZhbHVlKSA9PT0gJ29iamVjdCc7XHJcbiAgfVxyXG5cclxuICBpc0RhdGUoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gIH1cclxuXHJcbiAgaXNUaW1lKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVEZWZhdWx0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlQnV0dG9uKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkJ1dHRvbjtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUYWcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGFnO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRlbXBsYXRlUmVmKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZUh5cGVybGluayhmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5IeXBlcmxpbmsgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgaXNQaG9uZShmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlBob25lO1xyXG4gIH1cclxuXHJcbiAgaXNBdHRhY2htZW50KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuQXR0YWNobWVudDtcclxuICB9XHJcblxyXG4gIGlzVW5kZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaXNSb3dTZWxlY3RlZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICBjb25zdCBkYXRhU2VsZWN0ZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICByZXR1cm4gZGF0YVNlbGVjdGQuaW5kZXhPZihkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSAhPT0gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfb25DaGFuZ2VBdHRhY2htZW50cyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQXR0YWNobWVudHMuZW1pdCh0aGlzLmRhdGFbaW5kZXhdKTtcclxuICB9XHJcblxyXG4gIF9vbmNsaWNrQ2hvb3NlRmlsZShpbmRleDogbnVtYmVyKXtcclxuICAgIHRoaXMub25jbGlja0Nob29zZUZpbGUuZW1pdCh0aGlzLmRhdGFbaW5kZXhdKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmhhc0Nvb2tpZXMgJiYgdGhpcy5nZXRJbmRleENvb2tpZSgpICYmIHRoaXMuY29va2llcy5jaGVjayh0aGlzLmdyaWRJRCkpIHtcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWdTdHIgPSB0aGlzLmNvb2tpZXMuZ2V0KHRoaXMuZ3JpZElEKTtcclxuICAgICAgLy8gcmVzZXQgZXhwaXJhdGlvbiBkYXRlXHJcbiAgICAgIHRoaXMuY29va2llcy5zZXQodGhpcy5ncmlkSUQsIHNhdmVkQ29uZmlnU3RyLCAzNjUpO1xyXG5cclxuICAgICAgLy8gcGFyc2UgY29va2llIHZhbHVlIHRvIHR5cGVzY3JpcHQgY29uc3RcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWcgPSBKU09OLnBhcnNlKHRoaXMuY29va2llcy5nZXQodGhpcy5ncmlkSUQpKSBhcyBHcmlkQ29uZmlnO1xyXG4gICAgICBpZiAodHlwZW9mIHNhdmVkQ29uZmlnID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gc2F2ZWRDb25maWc7XHJcbiAgICAgICAgdGhpcy5jb25maWdDaGFuZ2UuZW1pdCh0aGlzLmNvbmZpZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuZGlzYWJsZVNlbGVjdEV2ZW50T25FeHBhbmQoKTtcclxuICB9XHJcblxyXG4gIGRpc2FibGVTZWxlY3RFdmVudE9uRXhwYW5kKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYW50LXRhYmxlLXJvdy1leHBhbmQtaWNvbicpO1xyXG4gICAgaWYgKCF0aGlzLmlzTnVsbChleHBhbmRCdXR0b24pKSB7XHJcbiAgICAgIGZvciAoY29uc3QgYiBvZiBBcnJheS5mcm9tKGV4cGFuZEJ1dHRvbikpIHtcclxuICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCRldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHQoJGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXhDb29raWUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8qbGV0IGFsbG93SW5kZXhQYWdlQ29va2llID0gZmFsc2U7XHJcbiAgICBsZXQgY29uc2VudENvb2tpZSA9IHRoaXMuY29va2llcy5nZXQoJ09wdGFub25Db25zZW50Jyk7XHJcbiAgICBpZiAoY29uc2VudENvb2tpZSAhPSBcIlwiKSB7XHJcbiAgICAgIGxldCBncm91cEluZGV4ID0gY29uc2VudENvb2tpZS5pbmRleE9mKCdncm91cHM9Jyk7XHJcbiAgICAgIGxldCBncm91cHMgPSBjb25zZW50Q29va2llLnN1YnN0cmluZyhncm91cEluZGV4KTsgLy93aWxsIHJldHVybiBzb21ldGhpbmdsaWtlIGdyb3Vwcz1DMDAwMjowLEMwMDAxOjFcclxuICAgICAgbGV0IGZ1bmN0aW9uYWxHcm91cEluZGV4ID0gZ3JvdXBzLmluZGV4T2YoJ0MwMDA5OicpO1xyXG4gICAgICBpZiAoZnVuY3Rpb25hbEdyb3VwSW5kZXggIT0gLTEpIHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeVZhbHVlID0gZ3JvdXBzLnN1YnN0cmluZyhmdW5jdGlvbmFsR3JvdXBJbmRleCArIDYsIGZ1bmN0aW9uYWxHcm91cEluZGV4ICsgNyk7XHJcbiAgICAgICAgaWYgKE51bWJlcihjYXRlZ29yeVZhbHVlKSA9PT0gMSkge1xyXG4gICAgICAgICAgYWxsb3dJbmRleFBhZ2VDb29raWUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFsbG93SW5kZXhQYWdlQ29va2llOyovXHJcbiAgfVxyXG5cclxuICBzZXRGaWVsZHNEZWZhdWx0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmZpZWxkcykge1xyXG4gICAgICB0aGlzLmNvbmZpZy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgZmllbGQuZWRpdGFibGUgPSBmaWVsZC5lZGl0YWJsZSA9PT0gbnVsbCB8fCBmaWVsZC5lZGl0YWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZpZWxkLmVkaXRhYmxlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmdyaWRJRCkge1xyXG4gICAgICB0aGlzLmdyaWRJRCA9IHRoaXMudXRpbFNlcnZpY2UudXVpZHY0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRDdXN0b21WYWxpZGF0b3JzKCk7XHJcblxyXG4gICAgdGhpcy5zZXRGaWVsZHNEZWZhdWx0KCk7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrYm94U2VsZWN0ICYmICF0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlKCk7XHJcbiAgICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2tib3hTZWxlY3QgJiYgdGhpcy5leHBhbmRhYmxlICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZVRyZWVEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGVja0NoZWNrYm94U3RhdGUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhVGFibGUgJiYgdGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgd2hpbGUgKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBvcCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV4cG9ydEV2ZW50LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGNvbmZpZzogR3JpZEV4cENvbmZpZykgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGNvbmZpZy5leHBvcnRUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlBkZjpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9QZGYoY29uZmlnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5Yc2x4OlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb0V4Y2VsKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuUG5nOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb1BuZyhjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlBkZlRyZWU6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRyZWVQZGYoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5Yc2x4VHJlZTpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VHJlZUV4Y2VsKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyogQ29udmVydCB0cmVlIHRvIGxpc3QgaWYgZXhwYW5kYWJsZSAqL1xyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSAmJiB0aGlzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLmZpZWxkSUQgPSB0aGlzLmNvbmZpZy5maWVsZElkO1xyXG4gICAgICBjb25zdCBjb2VyY2VEYXRhID0gdGhpcy5kYXRhIGFzIGFueVtdO1xyXG4gICAgICBjb2VyY2VEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYXBPZkV4cGFuZGVkRGF0YVtpdGVtW3RoaXMuZmllbGRJRF1dID0gdGhpcy5jb252ZXJ0VHJlZVRvTGlzdChpdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRDb21wbGV0ZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0Q29tcGxldGVkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGVja1NvcnRFdmVudCgpO1xyXG4gICAgdGhpcy5jaGVja1Jlc2l6ZUV2ZW50KCk7XHJcblxyXG4gICAgLy8gRFJPUERPV04gTUVOVSBBRFZBTkNFRCBDT05GSUdVUkFUSU9OXHJcbiAgICB0aGlzLmlzQWR2YW5jZWRDb25maWd1cmF0aW9uID0gZmFsc2U7XHJcblxyXG4gIH1cclxuXHJcbiAgY2hlY2tTb3J0RXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uc29ydG9icy5waXBlKFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5fb25yZXNpemUkKSxcclxuICAgICAgZGVsYXkoMzAwKSxcclxuICAgICAgcmVwZWF0KCksXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgKS5zdWJzY3JpYmUoKG9iajogYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IGYgPSB0aGlzLmNvbmZpZy5maWVsZHMuZmluZChlbCA9PiBlbC5wcm9wZXJ0eSA9PT0gb2JqLnNvcnROYW1lKTtcclxuICAgICAgZi5zb3J0T3JkZXIgPSBvYmouc29ydFZhbHVlO1xyXG4gICAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdCh7IHNvcnROYW1lOiBvYmouc29ydE5hbWUsIHNvcnRWYWx1ZTogb2JqLnNvcnRWYWx1ZSB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tSZXNpemVFdmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMub25yZXNpemVvYnMucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICApLnN1YnNjcmliZSgob2JqOiB7IGV2ZW50OiBOelJlc2l6ZUV2ZW50LCBjb2w6IHN0cmluZywgZmllbGQ6IEZpZWxkIH0pID0+IHtcclxuICAgICAgdGhpcy5jb25maWcgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnKSlcclxuICAgICAgdGhpcy5vblJlc2l6ZUV2dChvYmouZXZlbnQsIG9iai5jb2wsIG9iai5maWVsZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmRhdGEgJiYgdGhpcy5jb25maWcpIHtcclxuICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgIHRoaXMubWFwT2ZFeHBhbmRlZERhdGEgPSB7fTtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlVHJlZURhdGEoKTtcclxuXHJcbiAgICAgICAgdGhpcy5maWVsZElEID0gdGhpcy5jb25maWcuZmllbGRJZDtcclxuICAgICAgICBjb25zdCBjb2VyY2VEYXRhID0gdGhpcy5kYXRhIGFzIGFueVtdO1xyXG4gICAgICAgIGNvZXJjZURhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuXHJcbiAgICAgICAgICBpZiAoIXRoaXMubWFwT2ZFeHBhbmRlZERhdGFbaXRlbVt0aGlzLmZpZWxkSURdXSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcE9mRXhwYW5kZWREYXRhW2l0ZW1bdGhpcy5maWVsZElEXV0gPSB0aGlzLmNvbnZlcnRUcmVlVG9MaXN0KGl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKCk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2hlY2tDaGVja2JveFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuc2V0RmllbGRzRGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLnNldEN1c3RvbVZhbGlkYXRvcnMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuZGlzYWJsZVNlbGVjdEV2ZW50T25FeHBhbmQoKTtcclxuICB9XHJcblxyXG4gIC8qIEV4cGFuZGFibGUgUm93cyAqL1xyXG4gIGV4cG9ydFRyZWVQZGYoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZG9jID0gbmV3IGpzUERGKCk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gW107XHJcbiAgICBjb25zdCByb3dzID0gW107XHJcblxyXG4gICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb2x1bW5zLnB1c2goZmllbGQuZGlzcGxheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb2x1bW5zLnB1c2goZmllbGQuZGlzcGxheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmV4cG9ydFRyZWVUb1BkZlJlYyhyb3dzLCB0aGlzLmRhdGEsIDApO1xyXG5cclxuICAgIC8qZG9jLmF1dG9UYWJsZSh7XHJcbiAgICAgIHRoZW1lOiAnc3RyaXBlZCcsXHJcbiAgICAgIG1hcmdpbjogeyB0b3A6IDUgfSxcclxuICAgICAgYm9keTogcm93cyxcclxuICAgICAgY29sdW1uc1xyXG4gICAgfSk7Ki9cclxuXHJcbiAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdCgnREQuTU0uWVlZWS5ISC5tbS5zcycpICsgJ18nICsgZmlsZU5hbWUgKyAnLnBkZic7XHJcbiAgICBkb2Muc2F2ZShmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUcmVlVG9QZGZSZWMocm93czogYW55LCBkYXRhOiBhbnksIG9mZlNldE1hcmdpbiA9IDApOiB2b2lkIHtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IFtdO1xyXG4gICAgICBjb25zdCBjb2VyY2VkSXRlbSA9IGl0ZW0gYXMgYW55O1xyXG4gICAgICBsZXQgcGFyZW50U3R5bGVzOiBhbnkgPSB7IGNlbGxQYWRkaW5nOiBbMiwgMiwgMiwgMl0gfTtcclxuXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHxcclxuICAgICAgICBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikuZm9yRWFjaCgoZmllbGQsIGlkeCkgPT4ge1xyXG5cclxuICAgICAgICAgIHBhcmVudFN0eWxlcyA9IHsgY2VsbFBhZGRpbmc6IFsyLCAyLCAyLCAyXSB9O1xyXG4gICAgICAgICAgaWYgKCFpZHgpIHtcclxuICAgICAgICAgICAgcGFyZW50U3R5bGVzLmNlbGxQYWRkaW5nID0gWzIsIDIsIDIsIDIgKyBvZmZTZXRNYXJnaW5dO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChjb2VyY2VkSXRlbS5jaGlsZHJlbiAmJiBjb2VyY2VkSXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcGFyZW50U3R5bGVzLmZpbGxDb2xvciA9IFsxNTMsIDIwNCwgMjU1XTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpIHtcclxuICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goeyBjb250ZW50OiBpdGVtW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0LmV4cG9ydFZhbHVlLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZmllbGQuZWRpdFRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU2VsZWN0OlxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQob3B0aW9uID0+IG9wdGlvbltmaWVsZC5zZWxlY3QudmFsdWVdID09PSBpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdEl0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7IGNvbnRlbnQ6IHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXSwgc3R5bGVzOiBwYXJlbnRTdHlsZXMgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOlxyXG4gICAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goeyBjb250ZW50OiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShpdGVtW2ZpZWxkLnByb3BlcnR5XSwgJ01NTU0gZGQgeXl5eScpLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlRpbWU6XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7IGNvbnRlbnQ6IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGl0ZW1bZmllbGQucHJvcGVydHldLCAnaDptbSBhJyksIHN0eWxlczogcGFyZW50U3R5bGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHsgY29udGVudDogaXRlbVtmaWVsZC5wcm9wZXJ0eV0sIHN0eWxlczogcGFyZW50U3R5bGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICByb3dzLnB1c2goaXRlbVRvRXhwb3J0KTtcclxuICAgICAgaWYgKGNvZXJjZWRJdGVtLmNoaWxkcmVuICYmIGNvZXJjZWRJdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuZXhwb3J0VHJlZVRvUGRmUmVjKHJvd3MsIGNvZXJjZWRJdGVtLmNoaWxkcmVuLCA1ICsgb2ZmU2V0TWFyZ2luKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29udmVydFRyZWVUb0xpc3Qocm9vdDogYW55KTogYW55W10ge1xyXG4gICAgY29uc3Qgc3RhY2s6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBhcnJheTogYW55W10gPSBbXTtcclxuICAgIGNvbnN0IGhhc2hNYXAgPSB7fTtcclxuICAgIHN0YWNrLnB1c2goeyAuLi5yb290LCBsZXZlbDogMCwgZXhwYW5kOiB0aGlzLmV4cGFuZEFsbCA/IHRoaXMuZXhwYW5kQWxsIDogcm9vdC5leHBhbmQgfSk7XHJcblxyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBjb25zdCBub2RlID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUsIGhhc2hNYXAsIGFycmF5KTtcclxuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gbm9kZS5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgc3RhY2sucHVzaChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC4uLm5vZGUuY2hpbGRyZW5baV0sXHJcbiAgICAgICAgICAgICAgbGV2ZWw6IG5vZGUubGV2ZWwgKyAxLFxyXG4gICAgICAgICAgICAgIGV4cGFuZDogdGhpcy5leHBhbmRBbGwgPyB0aGlzLmV4cGFuZEFsbCA6IG5vZGUuY2hpbGRyZW5baV0uZXhwYW5kLFxyXG4gICAgICAgICAgICAgIHBhcmVudDogbm9kZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxuICB2aXNpdE5vZGUobm9kZTogYW55LCBoYXNoTWFwOiBhbnksIGFycmF5OiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKCFoYXNoTWFwW25vZGVbdGhpcy5maWVsZElEXV0pIHtcclxuICAgICAgaGFzaE1hcFtub2RlW3RoaXMuZmllbGRJRF1dID0gdHJ1ZTtcclxuICAgICAgYXJyYXkucHVzaChub2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEV4cGFuZENvbGxhcHNlKGFycmF5OiBhbnlbXSwgZGF0YTogYW55LCAkZXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICgkZXZlbnQgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuY29sbGFwc2VDaGlsZHJlbihhcnJheSwgZGF0YSwgJGV2ZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMub25Sb3dFeHBhbmRDb2xsYXBzZS5lbWl0KHsgZGF0YSwgJGV2ZW50IH0pO1xyXG4gIH1cclxuICBjb2xsYXBzZUNoaWxkcmVuKGFycmF5OiBhbnlbXSwgZGF0YTogYW55LCAkZXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICgkZXZlbnQgPT09IGZhbHNlKSB7XHJcbiAgICAgIGlmIChkYXRhLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgZGF0YS5jaGlsZHJlbi5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gYXJyYXkuZmluZChhID0+IGFbdGhpcy5maWVsZElEXSA9PT0gZFt0aGlzLmZpZWxkSURdKSE7XHJcbiAgICAgICAgICB0YXJnZXQuZXhwYW5kID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmNvbGxhcHNlQ2hpbGRyZW4oYXJyYXksIHRhcmdldCwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveFRyZWVDaGFuZ2UoJGV2ZW50LCBpdGVtLCBzdWJ0cmVlID0gbnVsbCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmV4Y2x1c2l2ZVNlbGVjdCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVRyZWVDaGVja2JveGVzKCRldmVudCwgaXRlbSk7XHJcbiAgICAgIGNvbnN0IGNvZXJjZWRFbGVtID0gc3VidHJlZS5maW5kKGUgPT4gZVt0aGlzLmZpZWxkSURdID09PSBpdGVtW3RoaXMuZmllbGRJRF0pO1xyXG4gICAgICBpZiAoY29lcmNlZEVsZW0ucGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoU3ViVHJlZUNoZWNrYm94ZXMoY29lcmNlZEVsZW0ucGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRyZWVDaGVja2JveGVzKCRldmVudDogYm9vbGVhbiwgYXJyYXk6IGFueSk6IHZvaWQge1xyXG4gICAgYXJyYXkuc2VsZWN0ZWQgPSAkZXZlbnQ7XHJcbiAgICBjb25zdCBub2RlOiBDaGVja2JveFNlbGVjdCA9IHRoaXMuZ2V0Tm9kZShhcnJheVt0aGlzLmZpZWxkSURdKTtcclxuICAgIG5vZGUuc2VsZWN0ZWQgPSAkZXZlbnQ7XHJcbiAgICBub2RlLm9yZGVyID0gJGV2ZW50ID8gdGhpcy5vcmRlcisrIDogLTE7XHJcbiAgICBpZiAoYXJyYXkuY2hpbGRyZW4hISkge1xyXG4gICAgICBhcnJheS5jaGlsZHJlbi5mb3JFYWNoKChkOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRyZWVDaGVja2JveGVzKCRldmVudCwgZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVmcmVzaFN1YlRyZWVDaGVja2JveGVzKHN1YnRyZWUpOiB2b2lkIHtcclxuICAgIGlmIChzdWJ0cmVlLmNoaWxkcmVuISEpIHtcclxuICAgICAgbGV0IGNoZWNrZWQgPSAwO1xyXG4gICAgICBsZXQgaW5kZXRlcm1pbmF0ZSA9IDA7XHJcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygc3VidHJlZS5jaGlsZHJlbikge1xyXG4gICAgICAgIGNvbnN0IG5vZGU6IENoZWNrYm94U2VsZWN0ID0gdGhpcy5nZXROb2RlKGNoaWxkW3RoaXMuZmllbGRJRF0pO1xyXG4gICAgICAgIGlmIChub2RlLnNlbGVjdGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBjaGVja2VkKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub2RlLnNlbGVjdGVkID09PSAtMSkge1xyXG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBub2RlOiBDaGVja2JveFNlbGVjdCA9IHRoaXMuZ2V0Tm9kZShzdWJ0cmVlW3RoaXMuZmllbGRJRF0pO1xyXG4gICAgICBub2RlLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgIGlmIChpbmRldGVybWluYXRlIHx8IChjaGVja2VkIDwgc3VidHJlZS5jaGlsZHJlbi5sZW5ndGggJiYgY2hlY2tlZCkpIHtcclxuICAgICAgICBub2RlLnNlbGVjdGVkID0gLTE7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2hlY2tlZCA9PT0gc3VidHJlZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICBub2RlLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGlmIChzdWJ0cmVlLnBhcmVudCkge1xyXG4gICAgICB0aGlzLnJlZnJlc2hTdWJUcmVlQ2hlY2tib3hlcyhzdWJ0cmVlLnBhcmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXROb2RlKGtleTogYW55KTogQ2hlY2tib3hTZWxlY3Qge1xyXG4gICAgY29uc3QgdGVzdCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIobiA9PiBuLmRhdGFbdGhpcy5maWVsZElEXSA9PT0ga2V5KTtcclxuICAgIHJldHVybiB0ZXN0ID8gdGVzdFswXSA6IHsgc2VsZWN0ZWQ6IGZhbHNlLCBkYXRhOiBudWxsIH07XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb1BuZyhmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRUYWJsZSgncG5nJywgZmlsZU5hbWUsIHRoaXMuZ3JpZElEKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRvRXhjZWwoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnN0IGRhdGFUb0V4cG9ydDogYW55W10gPSBbXTtcclxuXHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0ge307XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHwgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGlmICghZmllbGQuaGlkZGVuKSB7XHJcbiAgICAgICAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdEl0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpIHtcclxuICAgICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dC5leHBvcnRWYWx1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkYXRhVG9FeHBvcnQucHVzaChpdGVtVG9FeHBvcnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoJ0RELk1NLllZWVkuSEgubW0uc3MnKSArICdfJyArIGZpbGVOYW1lO1xyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0QXNFeGNlbEZpbGUoZGF0YVRvRXhwb3J0LCBmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgfVxyXG5cclxuICAvKiBFeHBhbmRhYmxlIFJvd3MgKi9cclxuICBleHBvcnRUcmVlRXhjZWwoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0YVRvRXhwb3J0OiBhbnlbXSA9IFtdO1xyXG4gICAgdGhpcy5leHBvcnRUcmVlRXhjZWxSZWModGhpcy5kYXRhLCBkYXRhVG9FeHBvcnQpO1xyXG4gICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoJ0RELk1NLllZWVkuSEgubW0uc3MnKSArICdfJyArIGZpbGVOYW1lO1xyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0QXNFeGNlbEZpbGUoZGF0YVRvRXhwb3J0LCBmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUcmVlRXhjZWxSZWMoZGF0YTogYW55LCBkYXRhVG9FeHBvcnQ6IGFueSk6IHZvaWQge1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0ge307XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHwgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGlmICghZmllbGQuaGlkZGVuKSB7XHJcbiAgICAgICAgICBpZiAoZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldLmNvbnRleHQuZXhwb3J0VmFsdWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQob3B0aW9uID0+IG9wdGlvbltmaWVsZC5zZWxlY3QudmFsdWVdID09PSBpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGF0YVRvRXhwb3J0LnB1c2goaXRlbVRvRXhwb3J0KTtcclxuXHJcbiAgICAgIGNvbnN0IGNvZXJjZWRJdGVtID0gaXRlbSBhcyBhbnk7XHJcbiAgICAgIGlmIChjb2VyY2VkSXRlbS5jaGlsZHJlbiAmJiBjb2VyY2VkSXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmV4cG9ydFRyZWVFeGNlbFJlYyhjb2VyY2VkSXRlbS5jaGlsZHJlbiwgZGF0YVRvRXhwb3J0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGV4cG9ydFRvUGRmKGNvbmZpZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIGlmICghY29uZmlnLnVzZVZlcnNpb24yKSB7XHJcbiAgICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0VGFibGUoXHJcbiAgICAgICAgJ3BkZicsXHJcbiAgICAgICAgY29uZmlnLmZpbGVOYW1lLFxyXG4gICAgICAgIHRoaXMuZ3JpZElELFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRDb21wYW55TmFtZSxcclxuICAgICAgICBjb25maWcuZXhwb3J0VXNlck5hbWUsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFRpdGxlLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybCxcclxuICAgICAgICBjb25maWcuZXhwb3J0VGFibGVDdXN0b21XaWR0aCxcclxuICAgICAgICBjb25maWcuZXhwb3J0VGFibGVDdXN0b21IZWlnaHRcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGV4cG9ydENvbmZpZyA9IHtcclxuICAgICAgICBjaGVja2JveFNlbGVjdDogdGhpcy5jaGVja2JveFNlbGVjdCxcclxuICAgICAgICBzZWxlY3RlZEl0ZW1zOiB0aGlzLmNoZWNrYm94U2VsZWN0ID9cclxuICAgICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pIDogW10sXHJcbiAgICAgICAgZmlsZU5hbWU6IGNvbmZpZy5maWxlTmFtZSxcclxuICAgICAgICBkYXRlUGlwZTogdGhpcy5kYXRlUGlwZSxcclxuICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXHJcbiAgICAgICAgZWxlbUlEOiB0aGlzLmdyaWRJRCxcclxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxyXG4gICAgICAgIGNvbHVtblN0eWxlczogY29uZmlnLmNvbHVtblN0eWxlcyxcclxuICAgICAgICBleHBvcnRDb21wYW55TmFtZTogY29uZmlnLmV4cG9ydENvbXBhbnlOYW1lLFxyXG4gICAgICAgIGV4cG9ydFVzZXJOYW1lOiBjb25maWcuZXhwb3J0VXNlck5hbWUsXHJcbiAgICAgICAgZXhwb3J0VGl0bGU6IGNvbmZpZy5leHBvcnRUaXRsZSxcclxuICAgICAgICBleHBvcnRDb21wYW55TG9nb1VybDogY29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsID8gY29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsIDogJ2Fzc2V0cy9QVG9CX2xvZ28ucG5nJyxcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRUYWJsZXYyKFxyXG4gICAgICAgIGV4cG9ydENvbmZpZ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGNsaWNrUm93KGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tzKys7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrcyA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Um93KGV2ZW50LCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5jbGlja3MgPiAxKSB7XHJcbiAgICAgICAgdGhpcy5kYmxDbGlja1JvdyhkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNsaWNrcyA9IDA7XHJcbiAgICB9LCAzMDApO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Um93KGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25jbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gICAgLyogR2V0IGluZGV4IG9mIHNlbGVjdGlvbiAqL1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgIGlmICghdGhpcy5jaGVja2JveFNlbGVjdCkge1xyXG4gICAgICBpZiAoZXZlbnQgJiYgKHRvQm9vbGVhbihldmVudC5jdHJsS2V5KSB8fCB0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpKSkge1xyXG4gICAgICAgIC8qIFNoaWZ0IFNlbGVjdGlvbiAqL1xyXG4gICAgICAgIGlmICh0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdE11bHRpcGxlKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3Rpb24oZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgLyogU2VsZWN0IGVsZW1lbnQgKi9cclxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPSBldmVudCAmJiB0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpID8gdHJ1ZSA6ICF0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkO1xyXG4gICAgICAgIC8qIFNhdmUgbGFzdCBpbmRleCBzZWxlY3RlZCAqL1xyXG4gICAgICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZCA/IGluZGV4IDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpO1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLm9yZGVyID0gdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZCA/IHRoaXMub3JkZXIrKyA6IC0xO1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHNlbGVjdGVkSXRlbXMuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpLm1hcChpdGVtID0+IGl0ZW0uZGF0YSkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0aW9uKGRhdGEpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkICYmIGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSAhPT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSlcclxuICAgICAgLmZvckVhY2goZWxlbSA9PiB7IGVsZW0uc2VsZWN0ZWQgPSBmYWxzZTsgZWxlbS5vcmRlciA9IC0xIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0TXVsdGlwbGUoY3VycmVudElkeCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGFzdElkeFNlbGVjdGVkICE9PSBudWxsKSB7XHJcbiAgICAgIHdoaWxlIChjdXJyZW50SWR4ICE9PSB0aGlzLmxhc3RJZHhTZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVt0aGlzLmxhc3RJZHhTZWxlY3RlZF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVt0aGlzLmxhc3RJZHhTZWxlY3RlZF0ub3JkZXIgPSB0aGlzLm9yZGVyKys7XHJcbiAgICAgICAgdGhpcy5sYXN0SWR4U2VsZWN0ZWQgPSBjdXJyZW50SWR4ID4gdGhpcy5sYXN0SWR4U2VsZWN0ZWQgPyB0aGlzLmxhc3RJZHhTZWxlY3RlZCArIDEgOiB0aGlzLmxhc3RJZHhTZWxlY3RlZCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtjdXJyZW50SWR4XS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtjdXJyZW50SWR4XS5vcmRlciA9IHRoaXMub3JkZXIrKztcclxuICAgIH1cclxuICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gY3VycmVudElkeDtcclxuICB9XHJcblxyXG4gIGRibENsaWNrUm93KGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbmRsY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG5cclxuICB0YXBIYW5kbGVyKCRldmVudCwgZGF0YSk6IHZvaWQge1xyXG4gICAgdGhpcy50YXBDb3VudCArPSAxO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnRhcENvdW50ID09PSAxKSB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5jbGlja1JvdyhudWxsLCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRhcENvdW50ID0gMDtcclxuICAgIH0sIDYwMCk7XHJcbiAgICBpZiAodGhpcy50YXBDb3VudCA+IDEpIHtcclxuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuZGJsQ2xpY2tSb3coZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY2xpY2tCb29sZWFuQ2VsbChkYXRhOiBhbnksIGlkOiBhbnksIGZpZWxkOiBGaWVsZCwgaW5kZXg6IG51bWJlciwgJGV2ZW50OiBudWxsKTogdm9pZCB7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHQoJGV2ZW50KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmluTGluZUVkaXQgJiYgZmllbGQuZWRpdGFibGUpIHtcclxuICAgICAgaWYgKGRhdGFbZmllbGQucHJvcGVydHldID09PSBudWxsIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPSAoZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09IGZhbHNlIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSAnZmFsc2UnKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVuZEVkaXRNb2RlTmdNb2RlbChpbmRleCwgZGF0YSwgZmllbGQucHJvcGVydHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd1ZpZXdNb2RlVHBsKGZpZWxkLCBpdGVtKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuaXNOdWxsKGl0ZW0uaGlkZGVuRmllbGRzKVxyXG4gICAgICAmJiBpdGVtLmhpZGRlbkZpZWxkcy5maWx0ZXIoeCA9PiB4ID09PSBmaWVsZC5wcm9wZXJ0eSkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiAoKHRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiAhdGhpcy5pbkxpbmVFZGl0KSB8fFxyXG4gICAgICAoIXRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiAodGhpcy5lZGl0SWQgIT09IGl0ZW1bdGhpcy5jb25maWcuZmllbGRJZF0gfHxcclxuICAgICAgICB0aGlzLnByb3BlcnR5ICE9PSBmaWVsZC5wcm9wZXJ0eSB8fCBmaWVsZC5lZGl0YWJsZSA9PT0gZmFsc2UpKSk7XHJcbiAgfVxyXG5cclxuICBzaG93Vmlld01vZGVUcGxUcmVlKGZpZWxkLCBkYXRhKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuaXNOdWxsKGRhdGEuaGlkZGVuRmllbGRzKVxyXG4gICAgICAmJiBkYXRhLmhpZGRlbkZpZWxkcy5maWx0ZXIoeCA9PiB4ID09PSBmaWVsZC5wcm9wZXJ0eSkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiAoKHRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiAhdGhpcy5pbkxpbmVFZGl0KSB8fFxyXG4gICAgICAoIXRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiAodGhpcy5lZGl0SWQgIT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gfHxcclxuICAgICAgICB0aGlzLnByb3BlcnR5ICE9PSBmaWVsZC5wcm9wZXJ0eSB8fCBmaWVsZC5lZGl0YWJsZSA9PT0gZmFsc2UpKSk7XHJcbiAgfVxyXG5cclxuICBzaG93RWRpdFRwbChpdGVtLCBmaWVsZCk6IGFueSB7XHJcbiAgICBpZiAoIXRoaXMuaXNOdWxsKGl0ZW0uaGlkZGVuRmllbGRzKVxyXG4gICAgICAmJiBpdGVtLmhpZGRlbkZpZWxkcy5maWx0ZXIoeCA9PiB4ID09PSBmaWVsZC5wcm9wZXJ0eSkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiAoKHRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiB0aGlzLmluTGluZUVkaXQgJiZcclxuICAgICAgKGZpZWxkLmVkaXRhYmxlIHx8IGZpZWxkLmVkaXRhYmxlID09PSB1bmRlZmluZWQpKSB8fFxyXG4gICAgICAoIXRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiB0aGlzLmVkaXRJZCA9PT0gaXRlbVt0aGlzLmNvbmZpZy5maWVsZElkXSAmJlxyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIChmaWVsZC5lZGl0YWJsZSB8fCBmaWVsZC5lZGl0YWJsZSA9PT0gdW5kZWZpbmVkKSkpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0VkaXRUcGxUcmVlKGRhdGEsIGZpZWxkKTogYW55IHtcclxuICAgIGlmICghdGhpcy5pc051bGwoZGF0YS5oaWRkZW5GaWVsZHMpXHJcbiAgICAgICYmIGRhdGEuaGlkZGVuRmllbGRzLmZpbHRlcih4ID0+IHggPT09IGZpZWxkLnByb3BlcnR5KS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnICYmICgodGhpcy5pc0Jvb2xlYW4oZmllbGQpICYmIHRoaXMuaW5MaW5lRWRpdCAmJiAoZmllbGQuZWRpdGFibGUgfHwgZmllbGQuZWRpdGFibGUgPT09IHVuZGVmaW5lZCkpIHx8XHJcbiAgICAgICghdGhpcy5pc0Jvb2xlYW4oZmllbGQpICYmIHRoaXMuZWRpdElkID09PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdICYmXHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgKGZpZWxkLmVkaXRhYmxlIHx8IGZpZWxkLmVkaXRhYmxlID09PSB1bmRlZmluZWQpKSk7XHJcbiAgfVxyXG5cclxuICBlbWl0T25FZGl0RXZlbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5yb3dPbkVkaXRpb24gPj0gMCkge1xyXG4gICAgICB0aGlzLmRhdGFbdGhpcy5yb3dPbkVkaXRpb25dLmNtYWNzRWRpdGVkUHJvcCA9IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW3RoaXMucm93T25FZGl0aW9uXSk7XHJcbiAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm5vZGVPbkVkaXRpb24pIHtcclxuICAgICAgdGhpcy5ub2RlT25FZGl0aW9uLmNtYWNzRWRpdGVkUHJvcCA9IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5ub2RlT25FZGl0aW9uKTtcclxuICAgICAgdGhpcy5ub2RlT25FZGl0aW9uID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENsYXNzTWFwKGZpZWxkOiBGaWVsZCk6IGFueSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbYGNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGhgXTogdGhpcy5sb2dzLFxyXG4gICAgICBbYGNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udGBdOiB0aGlzLmxvZ3MsXHJcbiAgICAgIFtgJHtmaWVsZC5uZ0NsYXNzfWBdOiBmaWVsZC5uZ0NsYXNzICYmIGZpZWxkLm5nQ2xhc3MubGVuZ3RoXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VzdG9tQ2xhc3MoZmllbGQ6IEZpZWxkKTogYW55IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFtgY21hY3MtY29tcGFjdC10YWJsZS1jZWxsLSR7ZmllbGQucHJvcGVydHl9YF06IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRNYXhXaWR0aChmaWVsZDogRmllbGQsIGl0ZW06IGFueSwgaTogbnVtYmVyKTogc3RyaW5nIHtcclxuXHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmICFpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5MaW5lRWRpdCA/IGBjYWxjKDEwMCUgLSAxN3B4KWAgOiBgY2FsYygxMDAlIC0gJHt0aGlzLmdldE1heFdpZHRoRmllbGRWaWV3TW9kZShmaWVsZCwgaSl9KWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5MaW5lRWRpdCA/IGBjYWxjKDEwMCUgLSAxN3B4KWAgOiBgY2FsYygxMDAlIC0gJHt0aGlzLmdldE1heFdpZHRoRmllbGRWaWV3TW9kZShmaWVsZCwgaSl9KWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5pbkxpbmVFZGl0ID8gYGNhbGMoMTAwJSAtIDE3cHgpYCA6IGBjYWxjKDEwMCUgLSAke3RoaXMuZ2V0TWF4V2lkdGhGaWVsZFZpZXdNb2RlKGZpZWxkLCBpKX0pYDtcclxuICB9XHJcblxyXG4gIGdldE1heFdpZHRoRmllbGRWaWV3TW9kZShmaWVsZDogRmllbGQsIGk6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0IHx8XHJcbiAgICAgIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgfHxcclxuICAgICAgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuVGltZSB8fFxyXG4gICAgICBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5OdW1iZXIpIHtcclxuICAgICAgcmV0dXJuIGAxOHB4YDtcclxuICAgIH1cclxuICAgIHJldHVybiAnMHB4JztcclxuICB9XHJcblxyXG4gIGdldFN0aWNreVdpZHRoKHBvc2l0aW9uKTogc3RyaW5nIHtcclxuICAgIGlmICghdGhpcy5zY3JvbGwueCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGxldCB3aWR0aCA9IDA7XHJcbiAgICBpZiAocG9zaXRpb24gPT09ICdzbWFydFRhYmxlJykge1xyXG4gICAgICByZXR1cm4gd2lkdGggKyAncHgnO1xyXG4gICAgfVxyXG4gICAgaWYgKHBvc2l0aW9uID09PSAnZHJhZ2dhYmxlJykge1xyXG4gICAgICB3aWR0aCA9IHRoaXMuc21hcnRUYWJsZSA/IDQwIDogMDtcclxuICAgICAgcmV0dXJuIHdpZHRoICsgJ3B4JztcclxuICAgIH1cclxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ2NoZWNrYm94U2VsZWN0Jykge1xyXG4gICAgICBpZiAodGhpcy5zbWFydFRhYmxlKSB7XHJcbiAgICAgICAgd2lkdGggKz0gNDA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlKSB7XHJcbiAgICAgICAgd2lkdGggKz0gNDA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHdpZHRoICsgJ3B4JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFN0aWNreVdpZHRoUmlnaHQocG9zaXRpb24pOiBzdHJpbmcge1xyXG4gICAgaWYgKCF0aGlzLnNjcm9sbC54KSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgbGV0IHdpZHRoID0gMDtcclxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3NtYXJ0VGFibGUnKSB7XHJcbiAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5leHRyYSkge1xyXG4gICAgICBpZiAodGhpcy5zbWFydFRhYmxlKSB7XHJcbiAgICAgICAgd2lkdGggKz0gNDA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBvc2l0aW9uID09PSAnZXh0cmEnKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpZHRoICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGFibGVDb21wb25lbnQoKTogTnpUYWJsZUNvbXBvbmVudDxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLm56VGFibGVDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm1EYXRlKGRhdGUpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbSA9IG1vbWVudChkYXRlKTtcclxuICAgIGlmIChtLmlzVmFsaWQoKSkge1xyXG4gICAgICBtLmxvY2FsZSh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKTtcclxuICAgICAgcmV0dXJuIG0uZm9ybWF0KHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnREQuTU0uWVlZWScgOiAnTU0vREQvWVlZWScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0VHJlZVNpbmdsZShpdGVtKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tib3hTZWxlY3QpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb24udG9nZ2xlKGl0ZW1bdGhpcy5maWVsZElEXSk7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5pc1NlbGVjdGVkKGl0ZW1bdGhpcy5maWVsZElEXSkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KFtpdGVtXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChbXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIERST1BET1dOIE1FTlUgUkVMQVRFRCBDT0RFICovXHJcblxyXG5cclxufVxyXG5cclxuXHJcbiIsIjxkaXYgaWQ9XCJ7e2dyaWRJRH19XCI+XHJcbiAgPG56LXRhYmxlICNncmlkQ29tcG9uZW50IFtuekRhdGFdPVwiZGF0YVwiIFtuelNob3dUb3RhbF09XCJzaG93VG90YWxcIiBbbnpQYWdlU2l6ZU9wdGlvbnNdPVwicGFnZVNpemVPcHRpb25zXCJcclxuICAgIFtuelZpcnR1YWxJdGVtU2l6ZV09XCJ2aXJ0dWFsSXRlbVNpemVcIiBbbnpMb2FkaW5nRGVsYXldPVwibG9hZGluZ0RlbGF5XCIgW256VmlydHVhbE1heEJ1ZmZlclB4XT1cInZpcnR1YWxNYXhCdWZmZXJQeFwiXHJcbiAgICBbbnpMb2FkaW5nSW5kaWNhdG9yXT1cImxvYWRpbmdJbmRpY2F0b3JcIiBbbnpUb3RhbF09XCJ0b3RhbFwiIFtuelRpdGxlXT1cInRpdGxlXCIgW256Rm9vdGVyXT1cImZvb3RlclwiXHJcbiAgICBbbnpOb1Jlc3VsdF09XCJub1Jlc3VsdFwiIFtueldpZHRoQ29uZmlnXT1cIndpZHRoQ29uZmlnXCIgW256UGFnZUluZGV4XT1cInBhZ2VJbmRleFwiIFtuelBhZ2VTaXplXT1cInBhZ2VTaXplXCJcclxuICAgIFtuelBhZ2luYXRpb25Qb3NpdGlvbl09XCJwYWdpbmF0aW9uUG9zaXRpb25cIiBbbnpTY3JvbGxdPVwic2Nyb2xsXCIgW256RnJvbnRQYWdpbmF0aW9uXT1cImZyb250UGFnaW5hdGlvblwiXHJcbiAgICBbbnpUZW1wbGF0ZU1vZGVdPVwidGVtcGxhdGVNb2RlXCIgW256U2hvd1BhZ2luYXRpb25dPVwic2hvd1BhZ2luYXRpb25cIiBbbnpMb2FkaW5nXT1cImxvYWRpbmdcIlxyXG4gICAgW256U2hvd1NpemVDaGFuZ2VyXT1cInNob3dTaXplQ2hhbmdlclwiIFtuekhpZGVPblNpbmdsZVBhZ2VdPVwiaGlkZU9uU2luZ2xlUGFnZVwiIFtuelNob3dRdWlja0p1bXBlcl09XCJzaG93UXVpY2tKdW1wZXJcIlxyXG4gICAgW256U2ltcGxlXT1cInNpbXBsZVwiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWV4cGFuZGFibGVdPVwiZXhwYW5kYWJsZVwiXHJcbiAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1zY3JvbGxhYmxlLXhdPVwic2Nyb2xsLnghIVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXNjcm9sbGFibGUteV09XCJzY3JvbGwueSEhXCJcclxuICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVtcHR5LXRhYmxlXT1cIiFkYXRhLmxlbmd0aFwiPlxyXG4gICAgPHRoZWFkICpuZ0lmPVwiIWRhdGFUYWJsZVwiPlxyXG4gICAgICA8dHIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaGVhZGVyLWxvZ3NdPVwibG9nc1wiPlxyXG5cclxuICAgICAgICA8dGggKm5nSWY9XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXQgJiYgY29uZmlnICYmIGNvbmZpZy5maWVsZHMgJiYgY29uZmlnLmZpZWxkcy5sZW5ndGhcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGhdPVwibG9nc1wiIG56V2lkdGg9XCI0MHB4XCIgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCIgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnc21hcnRUYWJsZScpXCJcclxuICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctYWRkIGNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtYWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1hZGQtaWNvbiBpY29uVUlMYXJnZS1OZXdcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC1hZGQtcm93LWljb24tdmlzaWJsZV09XCIhZ3JpZENvbXBvbmVudC5kYXRhLmxlbmd0aFwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJhZGRSb3coLTEpXCI+PC9pPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICpuZ0lmPVwiZHJhZ2dhYmxlXCIgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnZHJhZ2dhYmxlJylcIiBueldpZHRoPVwiNDBweFwiIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICpuZ0lmPVwiY2hlY2tib3hTZWxlY3RcIiBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdjaGVja2JveFNlbGVjdCcpXCIgbnpXaWR0aD1cIjMwcHhcIiBuekxlZnQ9XCIwcHhcIlxyXG4gICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cIiczMHB4J1wiIFtzdHlsZS5taW5XaWR0aF09XCInMzBweCdcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbWFjcy1jaGVja2JveCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkXCIgW2luZGV0ZXJtaW5hdGVdPVwiaXNJbmRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPW9uQ2hlY2tib3hBbGxDaGFuZ2UoJGV2ZW50KT48L2xhYmVsPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBmaVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaWVsZC5jdXN0b21GaWx0ZXI7IGVsc2UgdGhXaXRoRmlsdGVyc1wiPlxyXG4gICAgICAgICAgICA8dGggW256U2hvd1NvcnRdPVwiZmllbGQuc2hvd1NvcnRcIiBbbnpTaG93RmlsdGVyXT1cImZpZWxkLnNob3dGaWx0ZXJcIlxyXG4gICAgICAgICAgICAgIFtuekZpbHRlcnNdPVwiZmllbGQuZmlsdGVycyEhID8gZmllbGQuZmlsdGVycyA6IFtdXCIgW256RmlsdGVyTXVsdGlwbGVdPVwiZmllbGQuZmlsdGVyTXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgIChuekZpbHRlckNoYW5nZSk9XCJmaWx0ZXIoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSlcIiBhdHRyLmlkPVwie3tncmlkSUR9fS1jb2x1bW4te3tmaX19XCIgbnotcmVzaXphYmxlXHJcbiAgICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiIWZpZWxkLnJlc2l6YWJsZVwiIG56Qm91bmRzPVwid2luZG93XCIgW256TWluV2lkdGhdPVwiZmllbGQubWluV2lkdGggPyBmaWVsZC5taW5XaWR0aCA6IDEwMFwiXHJcbiAgICAgICAgICAgICAgW256TWF4V2lkdGhdPVwiZmllbGQubWF4V2lkdGggPyBmaWVsZC5tYXhXaWR0aCA6IDUwMFwiIG56UHJldmlld1xyXG4gICAgICAgICAgICAgIChuelJlc2l6ZUVuZCk9XCJvblJlc2l6ZSgkZXZlbnQsIGZpZWxkLnByb3BlcnR5LCBmaWVsZClcIiBbbmdDbGFzc109XCJnZXRDbGFzc01hcChmaWVsZClcIlxyXG4gICAgICAgICAgICAgIFsobnpTb3J0T3JkZXIpXT1cImZpZWxkLnNob3dTb3J0ID8gZmllbGQuc29ydE9yZGVyIDogZGVmYXVsdFNvcnRPcmRlclwiXHJcbiAgICAgICAgICAgICAgKG56U29ydE9yZGVyQ2hhbmdlKT1cInNvcnQoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSlcIiBbbnpXaWR0aF09XCJmaWVsZC53aWR0aFwiXHJcbiAgICAgICAgICAgICAgW256TGVmdF09XCJmaWVsZC5sZWZ0ID8gZmllbGQubGVmdCA6IGZhbHNlXCIgW256UmlnaHRdPVwiZmllbGQucmlnaHQgPyBmaWVsZC5yaWdodCA6IGZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaWVsZC50ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3QtY29sLWFkZC1pY29uLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCJmaWVsZC5taW5XaWR0aD8gZmllbGQubWluV2lkdGg6JzUwcHgnXCJcclxuICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cImZpZWxkLndpZHRoPyBmaWVsZC53aWR0aDonMTAwcHgnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwiYWRkQ29sdW1uXCIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LWNvbC1hZGQtaWNvbiBpY29uVUlMYXJnZS1OZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRjb2x1bW4oZmkpXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5tYXhXaWR0aF09XCJnZXRIZWFkZXJNYXhXaWR0aChmaWVsZClcIiBhdHRyLmlkPVwie3tncmlkSUR9fS1jb2x1bW4te3tmaX19LXRpdGxlXCIgY21hY3MtdG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAodGFwKT1cIm9uRmllbGRUYXBFbGxpcHNpcyhncmlkSUQgKyAnLWNvbHVtbi0nICsgZmkgKyAnLXRpdGxlJylcIlxyXG4gICAgICAgICAgICAgICAgICBbY21hY3NUb29sdGlwVHJpZ2dlcl09XCJnZXRUb29sdGlwRWxsaXBzaXNUcmlnZ2VyKClcIlxyXG4gICAgICAgICAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNFbGxpcHNpc0FjdGl2ZShncmlkSUQgKyAnLWNvbHVtbi0nICsgZmkgKyAnLXRpdGxlJywgZmllbGQpID8gZmllbGQuZGlzcGxheSA6IG51bGxcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsLWhlYWRlcl09XCIhd3JhcExpbmVzXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXBdPVwiYWRkQ29sdW1uXCIgKGNsaWNrKT1cIm9wZW5Db2x1bW5NZW51KGZpKVwiPlxyXG4gICAgICAgICAgICAgICAgICB7e2ZpZWxkLmRpc3BsYXl9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGNtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJhZGRDb2x1bW4gJiYgc2VsZWN0ZWRDb2x1bW5JZCA9PT0gZmkgJiYgc2VsZWN0ZWRDb2x1bW5JZCAhPT0gLTFcIiBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICBbaXRlbXNdPVwiY29sdW1uTWVudVwiIChvbkZpZWxkQ2hhbmdlZCk9XCJvbkZpZWxkQ2hhbmdlZChmaSwkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8L2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImFkZENvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlLXNlbGVjdGVkXT1cInNlbGVjdGVkTW9yZSA9PT0gZmkgJiYgc2VsZWN0ZWRNb3JlICE9PSAtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvblVJTGFyZ2UtTW9yZS1WZXJpdGNhbF9JY29uIGNtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmVcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTVweDtcIlxyXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwib3BlbkNvbHVtbk1vcmUoZmkpXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGNtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUgKm5nSWY9XCJhZGRDb2x1bW4gJiYgc2VsZWN0ZWRNb3JlID09PSBmaSAmJiBzZWxlY3RlZE1vcmUgIT09IC0xXCJcclxuICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImZpZWxkXCIgW2l0ZW1zXT1cImNvbHVtbk1lbnVcIiAob25GaWVsZENoYW5nZWQpPVwib25GaWVsZENoYW5nZWQoZmksJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgIFtsYWJlbFNhdmVdPVwiY29sdW1uTWVudS5hZHZhbmNlZENvbmZpZ3VyYXRpb24ubGFiZWxTYXZlXCI+PC9jbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgW2lkXT1cImdyaWRJRCArICdjb2x1bW4nICsgZmlcIiAqbmdJZj1cImZpZWxkLnRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZpZWxkLnRlbXBsYXRlLnJlZlwiXHJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJmaWVsZC50ZW1wbGF0ZS5jb250ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8bnotcmVzaXplLWhhbmRsZSBuekRpcmVjdGlvbj1cInJpZ2h0XCIgKm5nSWY9XCJmaWVsZC5yZXNpemFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXJlc2l6ZS10cmlnZ2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uei1yZXNpemUtaGFuZGxlPlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgI3RoV2l0aEZpbHRlcnM+XHJcbiAgICAgICAgICAgIDx0aCBbbnpTaG93U29ydF09XCJmaWVsZC5zaG93U29ydFwiIG56Q3VzdG9tRmlsdGVyIG56LXJlc2l6YWJsZSBuekJvdW5kcz1cIndpbmRvd1wiIG56UHJldmlld1xyXG4gICAgICAgICAgICAgIFtuekRpc2FibGVkXT1cIiFmaWVsZC5yZXNpemFibGVcIiAobnpSZXNpemVFbmQpPVwib25SZXNpemUoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSwgZmllbGQpXCJcclxuICAgICAgICAgICAgICBhdHRyLmlkPVwie3tncmlkSUR9fS1jb2x1bW4te3tmaX19XCIgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NNYXAoZmllbGQpXCJcclxuICAgICAgICAgICAgICBbKG56U29ydE9yZGVyKV09XCJmaWVsZC5zaG93U29ydCA/IGZpZWxkLnNvcnRPcmRlciA6IGRlZmF1bHRTb3J0T3JkZXJcIlxyXG4gICAgICAgICAgICAgIChuelNvcnRPcmRlckNoYW5nZSk9XCJzb3J0KCRldmVudCwgZmllbGQucHJvcGVydHkpXCIgW256V2lkdGhdPVwiZmllbGQud2lkdGhcIlxyXG4gICAgICAgICAgICAgIFtuek1pbldpZHRoXT1cImZpZWxkLm1pbldpZHRoID8gZmllbGQubWluV2lkdGggOiAxMDBcIiBbbnpNYXhXaWR0aF09XCJmaWVsZC5tYXhXaWR0aCA/IGZpZWxkLm1heFdpZHRoIDogNTAwXCJcclxuICAgICAgICAgICAgICBbbnpMZWZ0XT1cImZpZWxkLmxlZnQgPyBmaWVsZC5sZWZ0IDogZmFsc2UgXCIgW256UmlnaHRdPVwiZmllbGQucmlnaHQgPyBmaWVsZC5yaWdodCA6IGZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbaWRdPVwiZ3JpZElEICsgJ2NvbHVtbicgKyBmaVwiICpuZ0lmPVwiZmllbGQudGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZmllbGQudGVtcGxhdGUucmVmXCJcclxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImZpZWxkLnRlbXBsYXRlLmNvbnRleHRcIj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxuei1kcm9wZG93biBuelRyaWdnZXI9XCJjbGlja1wiIG56UGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBbbnpDbGlja0hpZGVdPVwiZmFsc2VcIiBuelRhYmxlRmlsdGVyICNkcm9wZG93bj5cclxuICAgICAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwic2VhcmNoXCIgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuYW50LXRhYmxlLWZpbHRlci1vcGVuXT1cImRyb3Bkb3duLm56VmlzaWJsZVwiIG56LWRyb3Bkb3duPjwvaT5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZmllbGQuY3VzdG9tRmlsdGVyLnJlZlwiXHJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJmaWVsZC5jdXN0b21GaWx0ZXIuY29udGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uei1kcm9wZG93bj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWZpZWxkLnRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5tYXhXaWR0aF09XCJnZXRIZWFkZXJNYXhXaWR0aChmaWVsZClcIiBjbWFjcy10b29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICh0YXApPVwib25GaWVsZFRhcEVsbGlwc2lzKGdyaWRJRCArICctY29sdW1uLScgKyBmaSArICctdGl0bGUnKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUcmlnZ2VyXT1cImdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUaXRsZV09XCJpc0VsbGlwc2lzQWN0aXZlKGdyaWRJRCArICctY29sdW1uLScgKyBmaSArICctdGl0bGUnLCBmaWVsZCkgPyBmaWVsZC5kaXNwbGF5IDogbnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGwtaGVhZGVyXT1cIiF3cmFwTGluZXNcIj57e2ZpZWxkLmRpc3BsYXl9fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxuei1yZXNpemUtaGFuZGxlIG56RGlyZWN0aW9uPVwicmlnaHRcIiAqbmdJZj1cImZpZWxkLnJlc2l6YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtcmVzaXplLXRyaWdnZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L256LXJlc2l6ZS1oYW5kbGU+XHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuXHJcbiAgICAgICAgPHRoICpuZ0lmPVwic2hvd1JhdGVcIj48L3RoPlxyXG5cclxuICAgICAgICA8dGggW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGhdPVwibG9nc1wiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9nc1wiXHJcbiAgICAgICAgICBbbnpXaWR0aF09XCJhY3Rpb25Db2x1bW5XaWR0aFwiIFtzdHlsZS5tYXhXaWR0aF09XCJhY3Rpb25Db2x1bW5XaWR0aFwiIFtzdHlsZS5taW5XaWR0aF09XCJhY3Rpb25Db2x1bW5XaWR0aFwiXHJcbiAgICAgICAgICBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdleHRyYScpXCIgKm5nSWY9XCJleHRyYVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtZXh0cmFcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImV4dHJhXCI+e3sgZXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aCAqbmdJZj1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiIG56V2lkdGg9XCI0MHB4XCIgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgW256UmlnaHRdPVwiZ2V0U3RpY2t5V2lkdGhSaWdodCgnc21hcnRUYWJsZScpXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctZGVsZXRlXCI+XHJcbiAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgPHRoIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoXT1cImxvZ3NcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3NcIlxyXG4gICAgICAgICAgKm5nSWY9XCJjZW50ZXJUYWJsZVwiPjwvdGg+XHJcblxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90aGVhZD5cclxuICAgIDx0Ym9keSBjZGtEcm9wTGlzdCAqbmdJZj1cIiF2aXJ0dWFsU2Nyb2xsXCIgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBjb25maWcuZmllbGRzICYmIGNvbmZpZy5maWVsZHMubGVuZ3RoXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImV4cGFuZGFibGU7IGVsc2UgZGVmYXVsdFRwbDtcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGRhdGEgb2YgZ3JpZENvbXBvbmVudC5kYXRhOyBpbmRleCBhcyBkaVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIG1hcE9mRXhwYW5kZWREYXRhW2RhdGFbZmllbGRJRF1dXCI+XHJcbiAgICAgICAgICAgICAgPHRyICpuZ0lmPVwiKGl0ZW0ucGFyZW50ICYmIGl0ZW0ucGFyZW50LmV4cGFuZCkgfHwgIWl0ZW0ucGFyZW50XCIgaWQ9XCJ0ci17e2l0ZW1bZmllbGRJRF19fVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1leHBhbmRhYmxlLXJvd109XCJpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXJvdy1hY3RpdmVdPVwiZWRpdElkID09PSBpdGVtW2ZpZWxkSURdXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWhlYWRlci1sb2dzXT1cImxvZ3MgJiYgISFpdGVtLmNoaWxkcmVuXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5hbnQtdGFibGUtc2VsZWN0ZWQtcm93XT1cImNoZWNrYm94U2VsZWN0ID8gZ2V0Tm9kZShpdGVtW2ZpZWxkSURdKS5zZWxlY3RlZCA6IHNlbGVjdGlvbi5pc1NlbGVjdGVkKGl0ZW1bZmllbGRJRF0pXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RUcmVlU2luZ2xlKGl0ZW0pXCIgKHRvdWNoc3RhcnQpPVwidGFwSGFuZGxlcigkZXZlbnQsIGl0ZW0pXCJcclxuICAgICAgICAgICAgICAgIChjb250ZXh0bWVudSk9XCJvbmNvbnRleHRtZW51ZXZ0KCRldmVudCwgaXRlbSlcIiAoZGJsY2xpY2spPVwiZGJsQ2xpY2tSb3coaXRlbSlcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJjaGVja2JveFNlbGVjdFwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdjaGVja2JveFNlbGVjdCcpXCJcclxuICAgICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIiczMHB4J1wiIFtzdHlsZS5tYXhXaWR0aF09XCInMzBweCdcIiBbc3R5bGUud2lkdGhdPVwiJzMwcHgnXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJnZXROb2RlKGl0ZW1bZmllbGRJRF0pLnNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJnZXROb2RlKGl0ZW1bZmllbGRJRF0pLnNlbGVjdGVkID09PSAtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPVwib25DaGVja2JveFRyZWVDaGFuZ2UoJGV2ZW50LCBpdGVtLCBtYXBPZkV4cGFuZGVkRGF0YVtkYXRhW2ZpZWxkSURdXSlcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBpXCIgW25nQ2xhc3NdPVwiZ2V0Q3VzdG9tQ2xhc3MoZmllbGQpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWVkaXRhYmxlLWNvbHVtbl09XCJmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXQtZXhwYW5kYWJsZV09XCIoKGVkaXRJZCA9PT0gaXRlbVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc051bWJlcihmaWVsZCkgJiYgZmllbGQuZWRpdGFibGUpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWV4cGFuZGFibGUtdGRdPVwiIWlcIiBbc3R5bGUucGFkZGluZ0xlZnQucHhdPVwiZ2V0Q3VzdG9tUGFkZGluZyhpdGVtLCBpKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtuelNob3dFeHBhbmRdPVwiIWlzTnVsbChpdGVtLmNoaWxkcmVuKSAmJiAhaVwiIFsobnpFeHBhbmQpXT1cIml0ZW0uZXhwYW5kXCJcclxuICAgICAgICAgICAgICAgICAgW256TGVmdF09XCJmaWVsZC5sZWZ0ID8gZmllbGQubGVmdCA6IGZhbHNlXCIgW256UmlnaHRdPVwiZmllbGQucmlnaHQgPyBmaWVsZC5yaWdodCA6IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgKG56RXhwYW5kQ2hhbmdlKT1cIkV4cGFuZENvbGxhcHNlKG1hcE9mRXhwYW5kZWREYXRhW2RhdGFbZmllbGRJRF1dLCBpdGVtLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cImZpZWxkLndpZHRoXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwiKGlzTnVtYmVyKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpKSA/ICdibG9jaycgOiAnaW5saW5lLWZsZXgnXCJcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsLWNvbnRhaW5lci1sb2dzXT1cImV4cGFuZGFibGUgJiYgaXNTdHJpbmcoZmllbGQpICYmICFpXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiaXRlbS5jaGlsZHJlbiAmJiAhaSA/ICdjYWxjKDEwMCUgLSAyNXB4KScgOiAnMTAwJSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic2hvd1ZpZXdNb2RlVHBsKGZpZWxkLCBpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwidmlld01vZGVUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogaXRlbSwgaTogZGksIGl0ZW06IGl0ZW0sIGNpOiBpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgW3N0eWxlLmRpc3BsYXldPVwiaXNOdW1iZXIoZmllbGQpID8gJ2Jsb2NrJyA6ICdpbmxpbmUtZmxleCdcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJpdGVtLmNoaWxkcmVuICYmICFpID8gJ2NhbGMoMTAwJSAtIDI1cHgpJyA6ICcxMDAlJ1wiICpuZ0lmPVwic2hvd0VkaXRUcGwoaXRlbSwgZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImVkaXRUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogaXRlbSwgaTogZGl9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtcmF0aW5nXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiICpuZ0lmPVwic2hvd1JhdGUgJiYgY29uZmlnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuei1yYXRlIFtuZ01vZGVsXT1cImRhdGFbY29uZmlnLmZpZWxkUmF0ZV1cIiBbbnpDb3VudF09J3JhdGVDb3VudCcgW256RGlzYWJsZWRdPVwiIWluTGluZUVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmF0ZUNoYW5nZSgkZXZlbnQsIGRhdGEpXCIgKGNsaWNrKT1cIm9uUmF0ZUNsaWNrKCRldmVudClcIj48L256LXJhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgISFpdGVtLmNoaWxkcmVuXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgIFtuelJpZ2h0XT1cImdldFN0aWNreVdpZHRoUmlnaHQoJ2V4dHJhJylcIiAqbmdJZj1cImV4dHJhXCI+PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJjZW50ZXJUYWJsZVwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLXRkXT1cImxvZ3NcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtYWxpZ24tdGRcIj48L3RkPlxyXG5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUcGw+XHJcbiAgICAgICAgICA8dHIgY2RrRHJhZyBbY2RrRHJhZ0Rpc2FibGVkXT1cIiFkcmFnZ2FibGVcIiAqbmdGb3I9XCJsZXQgZGF0YSBvZiBncmlkQ29tcG9uZW50LmRhdGE7IGluZGV4IGFzIGlcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tSb3coJGV2ZW50LCBkYXRhKVwiICh0b3VjaHN0YXJ0KT1cInRhcEhhbmRsZXIoJGV2ZW50LCBkYXRhKVwiIGlkPVwidHIte3tkYXRhW2NvbmZpZy5maWVsZElkXX19XCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtcm93LWFjdGl2ZV09XCJlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdXCJcclxuICAgICAgICAgICAgW2NsYXNzLmFudC10YWJsZS1zZWxlY3RlZC1yb3ddPVwiaXNSb3dTZWxlY3RlZChkYXRhKVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXRhYmxlLXJvd109XCJpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtcm93XT1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgIChjb250ZXh0bWVudSk9XCJjb250ZXh0TWVudSgkZXZlbnQsIGNvbnRleHRNZW51VGVtcGxhdGUpXCIgY2xhc3M9XCJjbWFjcy1uby1zZWxlY3Rpb25cIj5cclxuXHJcbiAgICAgICAgICAgIDxjbWFjcy1kcm9wZG93bi1tZW51ICNjb250ZXh0TWVudVRlbXBsYXRlPVwiY21hY3NEcm9wZG93bk1lbnVcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRleHRtZW51XCJcclxuICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGRyb3Bkb3duOiBkcm9wZG93biwgZGF0YTogZGF0YSB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvY21hY3MtZHJvcGRvd24tbWVudT5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdJZj1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnc21hcnRUYWJsZScpXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWFkZFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctYWRkLWljb24gaWNvblVJTGFyZ2UtTmV3XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRSb3coaSwgJGV2ZW50KVwiPjwvaT5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdJZj1cImRyYWdnYWJsZVwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1kcmFnLWNvbCBjbWFjcy1jb21wYWN0LXRhYmxlLWZzdC10ZFwiIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2RyYWdnYWJsZScpXCJcclxuICAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCIgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtTW92ZSBjbWFjcy1jb21wYWN0LXRhYmxlLWRyYWctaGFuZGxlclwiIGNka0RyYWdIYW5kbGU+PC9pPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2NoZWNrYm94U2VsZWN0JylcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCJcclxuICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1mc3QtdGRdPVwiIWRyYWdnYWJsZVwiICpuZ0lmPVwiY2hlY2tib3hTZWxlY3QgJiYgY29uZmlnXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNtYWNzLWNoZWNrYm94IFsobmdNb2RlbCldPVwiY2hlY2tib3hDYWNoZVtnZXRJbmRleChkYXRhW2NvbmZpZy5maWVsZElkXSldLnNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgIChjaGVja2VkQ2hhbmdlKT1cIm9uQ2hlY2tib3hDaGFuZ2UoJGV2ZW50LCBkYXRhKVwiXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGFbY29uZmlnLmZpZWxkSWRdICYmIGNoZWNrYm94Q2FjaGVbZ2V0SW5kZXgoZGF0YVtjb25maWcuZmllbGRJZF0pXVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBqXCIgW25nQ2xhc3NdPVwiZ2V0Q3VzdG9tQ2xhc3MoZmllbGQpXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtZWRpdGFibGUtY29sdW1uXT1cImZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1mc3QtdGRdPVwiIWRyYWdnYWJsZSAmJiAhY2hlY2tib3hTZWxlY3QgJiYgIWpcIlxyXG4gICAgICAgICAgICAgIFtuekxlZnRdPVwiZmllbGQubGVmdCA/IGZpZWxkLmxlZnQgOiBmYWxzZVwiIFtuelJpZ2h0XT1cImZpZWxkLnJpZ2h0ID8gZmllbGQucmlnaHQgOiBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cImZpZWxkLndpZHRoXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6IDk4JVwiICpuZ0lmPVwic2hvd1ZpZXdNb2RlVHBsVHJlZShmaWVsZCwgZGF0YSlcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ2aWV3TW9kZVRwbDtjb250ZXh0OiB7ZmllbGQ6IGZpZWxkLCBkYXRhOiBkYXRhLCBpOiBpLCBjaTogan1cIj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiA5OCVcIiAqbmdJZj1cInNob3dFZGl0VHBsVHJlZShkYXRhLCBmaWVsZClcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJlZGl0VHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGRhdGEsIGk6IGl9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkICpuZ0lmPVwic2hvd1JhdGUgJiYgY29uZmlnXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiPlxyXG4gICAgICAgICAgICAgIDxuei1yYXRlIFtuZ01vZGVsXT1cImRhdGFbY29uZmlnLmZpZWxkUmF0ZV1cIiBbbnpDb3VudF09J3JhdGVDb3VudCdcclxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmF0ZUNoYW5nZSgkZXZlbnQsIGRhdGEpXCIgKGNsaWNrKT1cIm9uUmF0ZUNsaWNrKCRldmVudClcIj48L256LXJhdGU+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8dGQgKm5nSWY9XCJleHRyYVwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdleHRyYScpXCI+PC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdJZj1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdzbWFydFRhYmxlJylcIlxyXG4gICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctZGVsZXRlLWljb24gaWNvblVJU21hbGwtQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJkYXRhLmRlbGV0ZUVuYWJsZWQgPT09IHVuZGVmaW5lZCB8fCBkYXRhLmRlbGV0ZUVuYWJsZWRcIiAoY2xpY2spPVwiZGVsZXRlUm93KGksICRldmVudClcIj48L2k+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiICpuZ0lmPVwiY2VudGVyVGFibGVcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLXRkXT1cImxvZ3NcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1hbGlnbi10ZFwiPjwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwvdGJvZHk+XHJcblxyXG4gICAgPHRib2R5IGNka0Ryb3BMaXN0ICpuZ0lmPVwidmlydHVhbFNjcm9sbFwiIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBuei12aXJ0dWFsLXNjcm9sbCBsZXQtZGF0YSBsZXQtZGk9XCJpXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBjb25maWcuZmllbGRzICYmIGNvbmZpZy5maWVsZHMubGVuZ3RoXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZXhwYW5kYWJsZTsgZWxzZSBkZWZhdWx0VHBsVmlydHVhbFNjcm9sbDtcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBtYXBPZkV4cGFuZGVkRGF0YVtkYXRhW2ZpZWxkSURdXVwiPlxyXG4gICAgICAgICAgICAgIDx0ciAqbmdJZj1cIihpdGVtLnBhcmVudCAmJiBpdGVtLnBhcmVudC5leHBhbmQpIHx8ICFpdGVtLnBhcmVudFwiIGlkPVwidHIte3tpdGVtW2ZpZWxkSURdfX1cIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtcm93LWFjdGl2ZV09XCJlZGl0SWQgPT09IGl0ZW1bZmllbGRJRF1cIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZXhwYW5kYWJsZS1yb3ddPVwiaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1oZWFkZXItbG9nc109XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiXHJcbiAgICAgICAgICAgICAgICAodG91Y2hzdGFydCk9XCJ0YXBIYW5kbGVyKCRldmVudCwgaXRlbSlcIiAoY29udGV4dG1lbnUpPVwib25jb250ZXh0bWVudWV2dCgkZXZlbnQsIGl0ZW0pXCJcclxuICAgICAgICAgICAgICAgIChkYmxjbGljayk9XCJkYmxDbGlja1JvdyhpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiY2hlY2tib3hTZWxlY3RcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnY2hlY2tib3hTZWxlY3QnKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCInMzBweCdcIiBbc3R5bGUubWF4V2lkdGhdPVwiJzMwcHgnXCIgW3N0eWxlLndpZHRoXT1cIiczMHB4J1wiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNtYWNzLWNoZWNrYm94IFsobmdNb2RlbCldPVwiZ2V0Tm9kZShpdGVtW2ZpZWxkSURdKS5zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiZ2V0Tm9kZShpdGVtW2ZpZWxkSURdKS5zZWxlY3RlZCA9PT0gLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjaGVja2VkQ2hhbmdlKT1cIm9uQ2hlY2tib3hUcmVlQ2hhbmdlKCRldmVudCwgaXRlbSwgbWFwT2ZFeHBhbmRlZERhdGFbZGF0YVtmaWVsZElEXV0pXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBnZXRGaWVsZHMoKTsgaW5kZXggYXMgaVwiIFtjbGFzcy5jbWFjcy1lZGl0YWJsZS1jb2x1bW5dPVwiZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LWV4cGFuZGFibGVdPVwiKChlZGl0SWQgPT09IGl0ZW1bY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNOdW1iZXIoZmllbGQpICYmIGZpZWxkLmVkaXRhYmxlKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1leHBhbmRhYmxlLXRkXT1cIiFpXCIgW3N0eWxlLnBhZGRpbmdMZWZ0LnB4XT1cImdldEN1c3RvbVBhZGRpbmcoaXRlbSwgaSlcIlxyXG4gICAgICAgICAgICAgICAgICBbbnpTaG93RXhwYW5kXT1cIiEhaXRlbS5jaGlsZHJlbiAmJiAhaVwiIFsobnpFeHBhbmQpXT1cIml0ZW0uZXhwYW5kXCJcclxuICAgICAgICAgICAgICAgICAgW256TGVmdF09XCJmaWVsZC5sZWZ0ID8gZmllbGQubGVmdCA6IGZhbHNlXCIgW256UmlnaHRdPVwiZmllbGQucmlnaHQgPyBmaWVsZC5yaWdodCA6IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgKG56RXhwYW5kQ2hhbmdlKT1cIkV4cGFuZENvbGxhcHNlKG1hcE9mRXhwYW5kZWREYXRhW2RhdGFbZmllbGRJRF1dLCBpdGVtLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cImZpZWxkLndpZHRoXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwiKGlzTnVtYmVyKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpKSA/ICdibG9jaycgOiAnaW5saW5lLWZsZXgnXCJcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsLWNvbnRhaW5lci1sb2dzXT1cImV4cGFuZGFibGUgJiYgaXNTdHJpbmcoZmllbGQpICYmICFpXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiaXRlbS5jaGlsZHJlbiAmJiAhaSA/ICdjYWxjKDEwMCUgLSAyNXB4KScgOiAnMTAwJSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic2hvd1ZpZXdNb2RlVHBsKGZpZWxkLCBpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwidmlld01vZGVUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogaXRlbSwgaTogZGksIGl0ZW06IGl0ZW0sIGNpOiBpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgW3N0eWxlLmRpc3BsYXldPVwiaXNOdW1iZXIoZmllbGQpID8gJ2Jsb2NrJyA6ICdpbmxpbmUtZmxleCdcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJpdGVtLmNoaWxkcmVuICYmICFpID8gJ2NhbGMoMTAwJSAtIDI1cHgpJyA6ICcxMDAlJ1wiICpuZ0lmPVwic2hvd0VkaXRUcGwoaXRlbSwgZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImVkaXRUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogaXRlbSwgaTogZGl9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXJhdGluZ1wiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiAqbmdJZj1cInNob3dSYXRlICYmIGNvbmZpZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bnotcmF0ZSBbbmdNb2RlbF09XCJkYXRhW2NvbmZpZy5maWVsZFJhdGVdXCIgW256Q291bnRdPSdyYXRlQ291bnQnIFtuekRpc2FibGVkXT1cIiFpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblJhdGVDaGFuZ2UoJGV2ZW50LCBkYXRhKVwiIChjbGljayk9XCJvblJhdGVDbGljaygkZXZlbnQpXCI+PC9uei1yYXRlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzICYmIGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgW256UmlnaHRdPVwiZ2V0U3RpY2t5V2lkdGhSaWdodCgnZXh0cmEnKVwiICpuZ0lmPVwiZXh0cmFcIj48L3RkPlxyXG5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUcGxWaXJ0dWFsU2Nyb2xsPlxyXG4gICAgICAgICAgICA8dHIgY2RrRHJhZyBbY2RrRHJhZ0Rpc2FibGVkXT1cIiFkcmFnZ2FibGVcIiBpZD1cInRyLXt7ZGF0YVtjb25maWcuZmllbGRJZF19fVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtcm93LWFjdGl2ZV09XCJlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdXCIgKGNsaWNrKT1cImNsaWNrUm93KCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgICAgICh0b3VjaHN0YXJ0KT1cInRhcEhhbmRsZXIoJGV2ZW50LCBkYXRhKVwiIFtjbGFzcy5hbnQtdGFibGUtc2VsZWN0ZWQtcm93XT1cImlzUm93U2VsZWN0ZWQoZGF0YSlcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXRhYmxlLXJvd109XCJpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1yb3ddPVwic21hcnRUYWJsZSAmJiBpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAoY29udGV4dG1lbnUpPVwiY29udGV4dE1lbnUoJGV2ZW50LCBjb250ZXh0TWVudVRlbXBsYXRlLCBkYXRhKVwiIGNsYXNzPVwiY21hY3Mtbm8tc2VsZWN0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY29udGV4dE1lbnVUZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGV4dG1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBkcm9wZG93bjogZHJvcGRvd24sIGRhdGE6IGRhdGEgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICAgIDx0ZCAqbmdJZj1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCInNDBweCdcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLXRkXT1cImxvZ3NcIlxyXG4gICAgICAgICAgICAgICAgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnc21hcnRUYWJsZScpXCIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1hZGRcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctYWRkLWljb24gaWNvblVJTGFyZ2UtTmV3XCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFJvdyhkaSwgJGV2ZW50KVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJkcmFnZ2FibGVcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1kcmFnLWNvbCBjbWFjcy1jb21wYWN0LXRhYmxlLWZzdC10ZFwiIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2RyYWdnYWJsZScpXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLU1vdmUgY21hY3MtY29tcGFjdC10YWJsZS1kcmFnLWhhbmRsZXJcIiBjZGtEcmFnSGFuZGxlPjwvaT5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICA8dGQgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnY2hlY2tib3hTZWxlY3QnKVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZzdC10ZF09XCIhZHJhZ2dhYmxlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiAqbmdJZj1cImNoZWNrYm94U2VsZWN0ICYmIGNvbmZpZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNtYWNzLWNoZWNrYm94IFsobmdNb2RlbCldPVwiY2hlY2tib3hDYWNoZVtnZXRJbmRleChkYXRhW2NvbmZpZy5maWVsZElkXSldLnNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPVwib25DaGVja2JveENoYW5nZSgkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBjaGVja2JveENhY2hlW2dldEluZGV4KGRhdGFbY29uZmlnLmZpZWxkSWRdKV1cIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZ2V0RmllbGRzKCk7IGluZGV4IGFzIGpcIiBbY2xhc3MuY21hY3MtZWRpdGFibGUtY29sdW1uXT1cImZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZzdC10ZF09XCIhZHJhZ2dhYmxlICYmICFjaGVja2JveFNlbGVjdCAmJiAhalwiXHJcbiAgICAgICAgICAgICAgICBbbnpMZWZ0XT1cImZpZWxkLmxlZnQgPyBmaWVsZC5sZWZ0IDogZmFsc2VcIiBbbnpSaWdodF09XCJmaWVsZC5yaWdodCA/IGZpZWxkLnJpZ2h0IDogZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cImZpZWxkLndpZHRoXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1heC13aWR0aDogOTglXCIgKm5nSWY9XCJzaG93Vmlld01vZGVUcGxUcmVlKGZpZWxkLCBkYXRhKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidmlld01vZGVUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogZGF0YSwgaTogZGksIGNpOiBqfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6IDk4JVwiICpuZ0lmPVwic2hvd0VkaXRUcGxUcmVlKGRhdGEsIGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZWRpdFRwbDtjb250ZXh0OiB7ZmllbGQ6IGZpZWxkLCBkYXRhOiBkYXRhLCBpOiBkaX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJzaG93UmF0ZSAmJiBjb25maWdcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICA8bnotcmF0ZSBbbmdNb2RlbF09XCJkYXRhW2NvbmZpZy5maWVsZFJhdGVdXCIgW256Q291bnRdPSdyYXRlQ291bnQnXHJcbiAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmF0ZUNoYW5nZSgkZXZlbnQsIGRhdGEpXCIgKGNsaWNrKT1cIm9uUmF0ZUNsaWNrKCRldmVudClcIj48L256LXJhdGU+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiZXh0cmFcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgW256UmlnaHRdPVwiZ2V0U3RpY2t5V2lkdGhSaWdodCgnZXh0cmEnKVwiPjwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgIDx0ZCAqbmdJZj1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgICAgW256UmlnaHRdPVwiZ2V0U3RpY2t5V2lkdGhSaWdodCgnc21hcnRUYWJsZScpXCIgW3N0eWxlLm1heFdpZHRoXT1cIic0MHB4J1wiIFtzdHlsZS5taW5XaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy10ZF09XCJsb2dzXCIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1kZWxldGVcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctZGVsZXRlLWljb24gaWNvblVJU21hbGwtQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGEuZGVsZXRlRW5hYmxlZCA9PT0gdW5kZWZpbmVkIHx8IGRhdGEuZGVsZXRlRW5hYmxlZFwiIChjbGljayk9XCJkZWxldGVSb3coZGksICRldmVudClcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvbnotdGFibGU+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNlZGl0VHBsIGxldC1maWVsZD1cImZpZWxkXCIgbGV0LWRhdGE9XCJkYXRhXCIgbGV0LWk9XCJpXCI+XHJcbiAgPCEtLUVkaXRhYmxlIFN0cmluZyBFZGl0IE1vZGUtLT5cclxuICA8aW5wdXQgI2ZpZWxkVHlwZUlucHV0IGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1pbnB1dFwiICpuZ0lmPVwiaXNTdHJpbmcoZmllbGQpXCIgdHlwZT1cInRleHRcIlxyXG4gICAgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIiAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LW1vZGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5wbGFjZWhvbGRlciA/IGZpZWxkLnBsYWNlaG9sZGVyIDogJydcIiBjbWFjcy1pbnB1dCBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgIChrZXl1cCk9XCJlbmRFZGl0TW9kZSgkZXZlbnQsIGksIGRhdGEpXCIgLz5cclxuXHJcbiAgPCEtLUVkaXRhYmxlIERhdGVQaWNrZXIgRWRpdCBNb2RlLS0+XHJcbiAgPGNtYWNzLWRhdGUtcGlja2VyICNmaWVsZFR5cGVEYXRlUGlja2VyIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1kYXRlLWVkaXRcIiAqbmdJZj1cImlzRGF0ZShmaWVsZClcIlxyXG4gICAgW2FsbG93Q2xlYXJdPVwidHJ1ZVwiIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCIgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwiZW5kRWRpdE1vZGVOZ01vZGVsKGksIGRhdGEpXCI+XHJcbiAgPC9jbWFjcy1kYXRlLXBpY2tlcj5cclxuXHJcbiAgPCEtLUVkaXRhYmxlIERhdGVUaW1lUGlja2VyIEVkaXQgTW9kZS0tPlxyXG4gIDxjbWFjcy1kYXRldGltZS1waWNrZXIgI2ZpZWxkVHlwZURhdGVUaW1lUGlja2VyICpuZ0lmPVwiaXNUaW1lKGZpZWxkKVwiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1kYXRldGltZS1waWNrZXJcIlxyXG4gICAgW3VzZTEySG91cnNdPVwidXNlMTJIb3Vyc1wiIGhpZGVTZWNvbmRzIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtbW9kZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgW2Zvcm1hdF09XCJmaWVsZC50aW1lRm9ybWF0ID8gZmllbGQudGltZUZvcm1hdCA6ICdoOm1tIGEnXCIgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIiBbZGVmYXVsdE9wZW5WYWx1ZV09XCJkZWZhdWx0VGltZVZhbHVlXCIgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLnByb3BlcnR5XVwiXHJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJuZ01vZGVsQ2hhbmdlKGksIGRhdGEpXCI+XHJcbiAgPC9jbWFjcy1kYXRldGltZS1waWNrZXI+XHJcblxyXG4gIDwhLS1FZGl0YWJsZSBTZWxlY3QgRWRpdCBNb2RlLS0+XHJcbiAgPGNtYWNzLXNlbGVjdCAjZmllbGRUeXBlU2VsZWN0IGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zZWxlY3QtY2VsbFwiIFtkcm9wZG93blJlbmRlcl09XCJyZW5kZXJcIlxyXG4gICAgW2NtYWNzRWRpdGFibGVdPVwiZmllbGQuc2VsZWN0LmRyb3Bkb3duQWRkT3B0aW9uXCJcclxuICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLW1vZGUtc3RhdHVzXT1cImZpZWxkLm1vZGUgPT09ICdzdGF0dXMnXCJcclxuICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLW1vZGUtc3RhdHVzLWxvdy1lZGl0XT1cImZpZWxkLm1vZGUgPT09ICdzdGF0dXMnICYmIGdldENsYXNzU3RhdHVzKGRhdGEsIGZpZWxkKSA9PT0nbG93J1wiXHJcbiAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC1tb2RlLXN0YXR1cy1tZWRpdW0tZWRpdF09XCJmaWVsZC5tb2RlID09PSAnc3RhdHVzJyAmJiBnZXRDbGFzc1N0YXR1cyhkYXRhLCBmaWVsZCkgPT09J21lZGl1bSdcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtbW9kZS1zdGF0dXMtaGlnaC1lZGl0XT1cImZpZWxkLm1vZGUgPT09ICdzdGF0dXMnICYmIGdldENsYXNzU3RhdHVzKGRhdGEsIGZpZWxkKSA9PT0naGlnaCdcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiICpuZ0lmPVwiaXNTZWxlY3QoZmllbGQpXCJcclxuICAgIFtwbGFjZUhvbGRlcl09XCJmaWVsZC5wbGFjZWhvbGRlciA/IGZpZWxkLnBsYWNlaG9sZGVyIDogJydcIiBzaG93U2VhcmNoIFttb2RlXT1cImZpZWxkLm1vZGUgPyBmaWVsZC5tb2RlIDogJ2RlZmF1bHQnXCJcclxuICAgIFtzaG93Q21hY3NTZWFyY2hdPVwiZmllbGQuc2hvd0NtYWNzU2VhcmNoXCIgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIiAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCIgKGNtYWNzRWRpdGVkSW5wdXQpPVwiY21hY3NFZGl0ZWRJbnB1dCgkZXZlbnQpXCJcclxuICAgIChuZ01vZGVsQ2hhbmdlKT1cImVuZEVkaXRNb2RlTmdNb2RlbChpLCBkYXRhLCBudWxsLCBmaWVsZClcIj5cclxuICAgIDxjbWFjcy1vcHRpb24gKm5nRm9yPVwibGV0IHNEYXRhIG9mIGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhXCIgbGFiZWw9XCJ7e3NEYXRhW2ZpZWxkLnNlbGVjdC5sYWJlbF19fVwiXHJcbiAgICAgIHZhbHVlPVwie3tzRGF0YVtmaWVsZC5zZWxlY3QudmFsdWVdfX1cIiBkaXZpZGVyPVwie3tzRGF0YVtmaWVsZC5zZWxlY3QuZGl2aWRlcl19fVwiIFtkaXNhYmxlZF09XCJzRGF0YS5kaXNhYmxlZFwiPlxyXG4gICAgPC9jbWFjcy1vcHRpb24+XHJcbiAgPC9jbWFjcy1zZWxlY3Q+XHJcblxyXG4gIDxuZy10ZW1wbGF0ZSAjcmVuZGVyPlxyXG4gICAgPG56LWRpdmlkZXIgKm5nSWY9XCJmaWVsZC5zZWxlY3Q/LmRyb3Bkb3duQWRkT3B0aW9uXCI+PC9uei1kaXZpZGVyPlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cImZpZWxkLnNlbGVjdD8uZHJvcGRvd25BZGRPcHRpb25cIiBjbWFjcy1idXR0b24gKGNsaWNrKT1cImFkZE9wdGlvbigpXCIgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgIGFyaWEtbGFiZWw9XCJhZGQgaXRlbVwiPnt7ZmllbGQuc2VsZWN0Py5kcm9wZG93bkFkZE9wdGlvbkxhYmVsfX08L2J1dHRvbj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICA8IS0tRWRpdGFibGUgSW5wdU51bWJlciBFZGl0IE1vZGUtLT5cclxuICA8Y21hY3MtaW5wdXQtbnVtYmVyICNmaWVsZFR5cGVJbnB1dE51bWJlciBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXQtbnVtYmVyLWVkaXRcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICAqbmdJZj1cImlzTnVtYmVyKGZpZWxkKSAmJiAhaXNTZWxlY3QoZmllbGQpICYmIGZpZWxkLnVzZUNvbW1hTWFya2VyXCIgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLnByb3BlcnR5XVwiXHJcbiAgICBbY21hY3NTdGVwXT1cImZpZWxkLmNtYWNzU3RlcFwiIFttaW5dPVwiZmllbGQubWluISFcIiBbbWF4XT1cImZpZWxkLm1heCEhXCIgW2Zvcm1hdHRlcl09XCJmb3JtYXR0ZXJcIiBbcGFyc2VyXT1cInBhcnNlclwiXHJcbiAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiIChkYmxjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCIgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSwgZGF0YSlcIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwibmdNb2RlbENoYW5nZShpLCBkYXRhKVwiPlxyXG4gIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG5cclxuICA8Y21hY3MtaW5wdXQtbnVtYmVyICNmaWVsZFR5cGVJbnB1dE51bWJlciBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXQtbnVtYmVyLWVkaXRcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICAqbmdJZj1cImlzTnVtYmVyKGZpZWxkKSAmJiAhaXNTZWxlY3QoZmllbGQpICYmICFmaWVsZC51c2VDb21tYU1hcmtlclwiIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgW2Zvcm1hdHRlcl09XCIhaXNOdWxsKGZpZWxkLmZvcm1hdHRlcikgPyBmaWVsZC5mb3JtYXR0ZXIgOiBkZWZhdWx0Rm9ybWF0dGVyXCJcclxuICAgIFtwYXJzZXJdPVwiIWlzTnVsbChmaWVsZC5wYXJzZXIpID8gZmllbGQucGFyc2VyIDogZGVmYXVsdFBhcnNlclwiIFtjbWFjc1N0ZXBdPVwiZmllbGQuY21hY3NTdGVwID8gZmllbGQuY21hY3NTdGVwIDogMVwiXHJcbiAgICBbbWluXT1cImZpZWxkLm1pbiEhXCIgW21heF09XCJmaWVsZC5tYXghIVwiIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCIgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSwgZGF0YSlcIiAobmdNb2RlbENoYW5nZSk9XCJuZ01vZGVsQ2hhbmdlKGksIGRhdGEpXCI+XHJcbiAgPC9jbWFjcy1pbnB1dC1udW1iZXI+XHJcblxyXG4gIDwhLS1FZGl0YWJsZSBCb29sZWFuIEVkaXQgTW9kZS0tPlxyXG4gIDxsYWJlbCAjZmllbGRUeXBlQm9vbCBjbWFjcy1jaGVja2JveCBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFiZS1lZGl0YWJsZS1jaGVja2JveFwiXHJcbiAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LW1vZGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCIgKm5nSWY9XCJpc0Jvb2xlYW4oZmllbGQpXCJcclxuICAgIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIiAobmdNb2RlbENoYW5nZSk9XCJlbmRFZGl0TW9kZU5nTW9kZWwoaSwgZGF0YSwgZmllbGQucHJvcGVydHksIGZpZWxkKVwiPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS1FZGl0YWJsZSBQaG9uZSBFZGl0IE1vZGUtLT5cclxuICA8Y21hY3MtcGhvbmUtbnVtYmVyICNmaWVsZFR5cGVQaG9uZSBjbGFzcz1cInBob25lLW51bWJlclwiIFtpbml0XT1cIntpbml0aWFsQ291bnRyeTogJ3VzJywgZm9ybWF0T25EaXNwbGF5OiBmYWxzZX1cIlxyXG4gICAgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIiBbZm9ybUNvbnRyb2xDdXN0b21dPVwiZm9ybVBob25lQ29udHJvbFwiXHJcbiAgICAoaGFzRXJyb3IpPVwiaGFzUGhvbmVOdW1iZXJFcnJvcigkZXZlbnQsaSwgZGF0YSwgZmllbGQucHJvcGVydHksIGZpZWxkKVwiIChjb3VudHJ5Q2hhbmdlKT1cIm9uQ291bnRyeUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICpuZ0lmPVwiaXNQaG9uZShmaWVsZClcIj5cclxuICA8L2NtYWNzLXBob25lLW51bWJlcj5cclxuXHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI3ZpZXdNb2RlVHBsIGxldC1maWVsZD1cImZpZWxkXCIgbGV0LWRhdGE9XCJkYXRhXCIgbGV0LWk9XCJpXCIgbGV0LWl0ZW09XCJpdGVtXCIgbGV0LWNpPVwiY2lcIj5cclxuICA8bmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS1FZGl0YWJsZSBTdHJpbmcgVmlldyBNb2RlLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGlzU3RyaW5nKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2IChjbGljayk9XCJzdGFydEVkaXQoZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLnByb3BlcnR5LCAkZXZlbnQsIGRhdGEpXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdF09XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzVGltZShmaWVsZCkpXCJcclxuICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LW5vLXBhZGRpbmddPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzTnVtYmVyKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTdHJpbmcoZmllbGQpKVwiXHJcbiAgICAgICAgc3R5bGU9XCJ3aWR0aDogOTglOyBtYXgtd2lkdGg6IDk4JTsgcGFkZGluZzogN3B4IDEwcHhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1pbmxpbmUtY2VsbFwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC12YWxpZC1wbGFjZWhvbGRlcl09XCJpc051bGwoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pIHx8ICFkYXRhW2ZpZWxkLnByb3BlcnR5XS5sZW5ndGhcIlxyXG4gICAgICAgICAgYXR0ci5pZD1cInt7Z3JpZElEfX0tcm93LXt7aX19LXt7ZmllbGQucHJvcGVydHl9fVwiIGNtYWNzLXRvb2x0aXBcclxuICAgICAgICAgICh0YXApPVwib25EYXRhVGFwRWxsaXBzaXMoZ3JpZElEICsgJy1yb3ctJyArIGkgKyAnLScgKyBmaWVsZC5wcm9wZXJ0eSlcIlxyXG4gICAgICAgICAgW2NtYWNzVG9vbHRpcFRyaWdnZXJdPVwiZ2V0VG9vbHRpcEVsbGlwc2lzVHJpZ2dlcigpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUaXRsZV09XCJpc0VsbGlwc2lzQWN0aXZlKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHksIGZpZWxkKSA/IGdldFN0cmluZ0ZpZWxkVmFsdWUoZGF0YSwgZmllbGQpIDogbnVsbFwiXHJcbiAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoZmllbGQsIGl0ZW0sIGkpXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCI+XHJcbiAgICAgICAgICB7eyBnZXRTdHJpbmdGaWVsZFZhbHVlKGRhdGEsIGZpZWxkKSB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpICpuZ0lmPVwiZmllbGQuZWRpdGFibGUgfHwgZmllbGQuZWRpdGFibGUgPT09IHVuZGVmaW5lZFwiIGNsYXNzPVwiaWNvblVJU21hbGwtRWRpdFwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LWljb24tdmlld109XCIhaW5MaW5lRWRpdCB8fCAhZmllbGQuZWRpdGFibGVcIj5cclxuICAgICAgICA8L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLUVkaXRhYmxlIERhdGVQaWNrZXIgVmlldyBNb2RlLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGlzRGF0ZShmaWVsZClcIj5cclxuICAgICAgPGRpdiAoY2xpY2spPVwic3RhcnRFZGl0KGRhdGFbY29uZmlnLmZpZWxkSWRdLCBmaWVsZC5wcm9wZXJ0eSwgJGV2ZW50LCBkYXRhKVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIlxyXG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIiBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoZmllbGQsIGl0ZW0sIGkpXCJcclxuICAgICAgICAgIGF0dHIuaWQ9XCJ7e2dyaWRJRH19LXJvdy17e2l9fS17e2ZpZWxkLnByb3BlcnR5fX1cIiBjbWFjcy10b29sdGlwXHJcbiAgICAgICAgICAodGFwKT1cIm9uRGF0YVRhcEVsbGlwc2lzKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUcmlnZ2VyXT1cImdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKVwiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNFbGxpcHNpc0FjdGl2ZShncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5LCBmaWVsZCkgPyAoZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPyB0cmFuc2Zvcm1EYXRlKGRhdGFbZmllbGQucHJvcGVydHldKSA6IGZpZWxkLnBsYWNlaG9sZGVyKSA6IG51bGxcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLXZhbGlkLXBsYWNlaG9sZGVyXT1cImlzTnVsbChkYXRhW2ZpZWxkLnByb3BlcnR5XSlcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlubGluZS1jZWxsIGNtYWNzLWNvbXBhY3QtdGFibGUtZGF0ZVwiPnt7IGRhdGFbZmllbGQucHJvcGVydHldID9cclxuICAgICAgICAgIHRyYW5zZm9ybURhdGUoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pIDogZmllbGQucGxhY2Vob2xkZXIgfX08L2Rpdj5cclxuICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLUNhbGVuZGFyXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtY2FsZW5kYXItaWNvbl09XCJpbkxpbmVFZGl0ICYmIGZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWNhbGVuZGFyLWljb24tdmlld109XCIhaW5MaW5lRWRpdCB8fCAhZmllbGQuZWRpdGFibGVcIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLUVkaXRhYmxlIERhdGVUaW1lUGlja2VyIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc1RpbWUoZmllbGQpXCI+XHJcbiAgICAgIDxkaXYgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhW2NvbmZpZy5maWVsZElkXSwgZmllbGQucHJvcGVydHksICRldmVudCwgZGF0YSlcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSlcIlxyXG4gICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXQtbm8tcGFkZGluZ109XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNOdW1iZXIoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1N0cmluZyhmaWVsZCkpXCJcclxuICAgICAgICBzdHlsZT1cIndpZHRoOiA5OCU7IG1heC13aWR0aDogOTglOyBwYWRkaW5nOiA3cHggMTBweFwiPlxyXG4gICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCIgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKGZpZWxkLCBpdGVtLCBpKVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBhdHRyLmlkPVwie3tncmlkSUR9fS1yb3cte3tpfX0te3tmaWVsZC5wcm9wZXJ0eX19XCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLXZhbGlkLXBsYWNlaG9sZGVyXT1cImlzTnVsbChkYXRhW2ZpZWxkLnByb3BlcnR5XSlcIiBjbWFjcy10b29sdGlwXHJcbiAgICAgICAgICAodGFwKT1cIm9uRGF0YVRhcEVsbGlwc2lzKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUcmlnZ2VyXT1cImdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKVwiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNFbGxpcHNpc0FjdGl2ZShncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5LCBmaWVsZCkgPyAoZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPyAoIGRhdGFbZmllbGQucHJvcGVydHldICB8IGRhdGU6IGZpZWxkLnRpbWVGb3JtYXQgPyBmaWVsZC50aW1lRm9ybWF0IDogJ2g6bW0gYScpIDogZmllbGQucGxhY2Vob2xkZXIpIDogbnVsbFwiXHJcbiAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5saW5lLWNlbGwgY21hY3MtY29tcGFjdC10YWJsZS1kYXRlXCI+e3sgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPyAoXHJcbiAgICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSB8IGRhdGU6IGZpZWxkLnRpbWVGb3JtYXQgPyBmaWVsZC50aW1lRm9ybWF0IDogJ2g6bW0gYScpIDogZmllbGQucGxhY2Vob2xkZXIgfX08L2Rpdj5cclxuICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLVRpbWVcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1jYWxlbmRhci1pY29uXT1cImluTGluZUVkaXQgJiYgZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtY2FsZW5kYXItaWNvbi12aWV3XT1cIiFpbkxpbmVFZGl0IHx8ICFmaWVsZC5lZGl0YWJsZVwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tRWRpdGFibGUgU2VsZWN0IFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc1NlbGVjdChmaWVsZClcIj5cclxuICAgICAgPGRpdiAoY2xpY2spPVwic3RhcnRFZGl0KGRhdGFbY29uZmlnLmZpZWxkSWRdLCBmaWVsZC5wcm9wZXJ0eSwgJGV2ZW50LCBkYXRhKVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIlxyXG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIiBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoZmllbGQsIGl0ZW0sIGkpXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIGF0dHIuaWQ9XCJ7e2dyaWRJRH19LXJvdy17e2l9fS17e2ZpZWxkLnByb3BlcnR5fX1cIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtdmFsaWQtcGxhY2Vob2xkZXJdPVwiaXNOdWxsKGdldExhYmVsKGRhdGEsIGZpZWxkKSkgfHwgIWdldExhYmVsKGRhdGEsIGZpZWxkKS5sZW5ndGhcIlxyXG4gICAgICAgICAgY21hY3MtdG9vbHRpcCAodGFwKT1cIm9uRGF0YVRhcEVsbGlwc2lzKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUcmlnZ2VyXT1cImdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC1tb2RlLXN0YXR1cy1sb3ddPVwiZmllbGQubW9kZSA9PT0gJ3N0YXR1cycgJiYgZ2V0Q2xhc3NTdGF0dXMoZGF0YSwgZmllbGQpID09PSdsb3cnXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLW1vZGUtc3RhdHVzLW1lZGl1bV09XCJmaWVsZC5tb2RlID09PSAnc3RhdHVzJyAmJiBnZXRDbGFzc1N0YXR1cyhkYXRhLCBmaWVsZCkgPT09J21lZGl1bSdcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtbW9kZS1zdGF0dXMtaGlnaF09XCJmaWVsZC5tb2RlID09PSAnc3RhdHVzJyAmJiBnZXRDbGFzc1N0YXR1cyhkYXRhLCBmaWVsZCkgPT09J2hpZ2gnXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUaXRsZV09XCJpc0VsbGlwc2lzQWN0aXZlKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHksIGZpZWxkKSA/IChnZXRMYWJlbChkYXRhLCBmaWVsZCkgJiYgZ2V0TGFiZWwoZGF0YSwgZmllbGQpLmxlbmd0aCA/IGdldExhYmVsKGRhdGEsIGZpZWxkKSA6IGZpZWxkLnBsYWNlaG9sZGVyKSA6IG51bGxcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlubGluZS1jZWxsIGNtYWNzLWNvbXBhY3QtdGFibGUtc2VsZWN0XCI+e3sgZ2V0TGFiZWwoZGF0YSwgZmllbGQpICYmIGdldExhYmVsKGRhdGEsXHJcbiAgICAgICAgICBmaWVsZCkubGVuZ3RoID8gZ2V0TGFiZWwoZGF0YSwgZmllbGQpIDogZmllbGQucGxhY2Vob2xkZXIgfX08L2Rpdj5cclxuICAgICAgICA8aSAqbmdJZj1cImZpZWxkLm1vZGUgIT09ICdzdGF0dXMnXCIgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1DaGV2cm9uLURvd25cIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc2VsZWN0LWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1zZWxlY3QtaWNvbi12aWV3XT1cIiFpbkxpbmVFZGl0IHx8ICFmaWVsZC5lZGl0YWJsZVwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tRWRpdGFibGUgSW5wdXROdW1iZXIgVmlldyBNb2RlLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGlzTnVtYmVyKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2IChjbGljayk9XCJzdGFydEVkaXQoZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLnByb3BlcnR5LCAkZXZlbnQsIGRhdGEpXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdF09XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzVGltZShmaWVsZCkpXCJcclxuICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LW5vLXBhZGRpbmddPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzTnVtYmVyKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTdHJpbmcoZmllbGQpKVwiXHJcbiAgICAgICAgc3R5bGU9XCJ3aWR0aDogOTglOyBtYXgtd2lkdGg6IDk4JTsgcGFkZGluZzogN3B4IDEwcHhcIj5cclxuICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiIFtzdHlsZS5tYXhXaWR0aF09XCJnZXRNYXhXaWR0aChmaWVsZCwgaXRlbSwgaSlcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCIgYXR0ci5pZD1cInt7Z3JpZElEfX0tcm93LXt7aX19LXt7ZmllbGQucHJvcGVydHl9fVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC12YWxpZC1wbGFjZWhvbGRlcl09XCJpc051bGwoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pXCIgY21hY3MtdG9vbHRpcFxyXG4gICAgICAgICAgKHRhcCk9XCJvbkRhdGFUYXBFbGxpcHNpcyhncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5KVwiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVHJpZ2dlcl09XCJnZXRUb29sdGlwRWxsaXBzaXNUcmlnZ2VyKClcIlxyXG4gICAgICAgICAgW2NtYWNzVG9vbHRpcFRpdGxlXT1cImlzRWxsaXBzaXNBY3RpdmUoZ3JpZElEICsgJy1yb3ctJyArIGkgKyAnLScgKyBmaWVsZC5wcm9wZXJ0eSwgZmllbGQpID8gKGRhdGFbZmllbGQucHJvcGVydHldICE9PSB1bmRlZmluZWQgPyBmaWVsZC51c2VDb21tYU1hcmtlciA/IGRhdGFbZmllbGQucHJvcGVydHldLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcsJykgOiBkYXRhW2ZpZWxkLnByb3BlcnR5XSA6IGZpZWxkLnBsYWNlaG9sZGVyKSA6IG51bGxcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlubGluZS1jZWxsIGNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXQtbnVtYmVyXCI+e3sgZ2V0SW5wdXROdW1iZXJWYWx1ZShkYXRhLCBmaWVsZClcclxuICAgICAgICAgIH19PC9kaXY+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1Tb2xpZC1VcERvd25cIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXQtbnVtYmVyLWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnB1dC1udW1iZXItaWNvbi12aWV3XT1cIiFpbkxpbmVFZGl0IHx8ICFmaWVsZC5lZGl0YWJsZVwiPlxyXG4gICAgICAgIDwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tSHlwZXJsaW5rIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc0NlbGRUeXBlSHlwZXJsaW5rKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiIWRhdGEucGFyZW50XCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaHlwZXJsaW5rXT1cIiFkYXRhLnBhcmVudFwiIChjbGljayk9XCJjbGlja0h5cGVybGluayhkYXRhKVwiPlxyXG4gICAgICAgIHt7ZGF0YVtmaWVsZC5wcm9wZXJ0eV19fSA8L2Rpdj5cclxuICAgICAgPGRpdiAqbmdJZj1cImRhdGEucGFyZW50XCI+IHt7ZGF0YVtmaWVsZC5wcm9wZXJ0eV19fSA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS1Cb29sZWFuIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc0Jvb2xlYW4oZmllbGQpXCI+XHJcbiAgICAgIDxkaXYgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhW2NvbmZpZy5maWVsZElkXSwgZmllbGQucHJvcGVydHksICRldmVudCwgZGF0YSlcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSlcIlxyXG4gICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXQtbm8tcGFkZGluZ109XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNOdW1iZXIoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1N0cmluZyhmaWVsZCkpXCJcclxuICAgICAgICBzdHlsZT1cIndpZHRoOiA5OCU7IG1heC13aWR0aDogOTglOyBwYWRkaW5nOiA3cHggMTBweFwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT0gZmFsc2UgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT0gJ2ZhbHNlJ1wiXHJcbiAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtYm9vbGVhbi1mYWxzZS1pY29uIGNtYWNzLWNvbXBhY3QtdGFibGUtYm9vbGVhbi1pY29uXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImRhdGFbZmllbGQucHJvcGVydHldID09PSB1bmRlZmluZWQgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09IG51bGxcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWJvb2xlYW4taW5kZXRlcm1pbmF0ZS1pY29uIGNtYWNzLWNvbXBhY3QtdGFibGUtYm9vbGVhbi1pY29uXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWJvb2xlYW4taW5kZXRlcm1pbmF0ZS1pY29uLWlubmVyXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8aSAqbmdJZj1cImRhdGFbZmllbGQucHJvcGVydHldID09PSB0cnVlIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSAndHJ1ZSdcIlxyXG4gICAgICAgICAgY2xhc3M9XCJpY29uVUlMYXJnZS1TZWxlY3QtQWxsIGNtYWNzLWNvbXBhY3QtdGFibGUtYm9vbGVhbi1pY29uLXRydWVcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCI+PC9pPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tUGhvbmUgVmlldyBNb2RlLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGlzUGhvbmUoZmllbGQpXCI+XHJcbiAgICAgIDxkaXYgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhW2NvbmZpZy5maWVsZElkXSwgZmllbGQucHJvcGVydHksICRldmVudCwgZGF0YSlcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNQaG9uZShmaWVsZCkpXCJcclxuICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LW5vLXBhZGRpbmddPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSB8fCBpc1Bob25lKGZpZWxkKSlcIlxyXG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7IG1heC13aWR0aDogMTAwJVwiPlxyXG4gICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIGF0dHIuaWQ9XCJ7e2dyaWRJRH19LXJvdy17e2l9fS17e2ZpZWxkLnByb3BlcnR5fX1cIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtdmFsaWQtcGxhY2Vob2xkZXJdPVwiaXNOdWxsKGRhdGFbZmllbGQucHJvcGVydHldKVwiIGNtYWNzLXRvb2x0aXBcclxuICAgICAgICAgICh0YXApPVwib25EYXRhVGFwRWxsaXBzaXMoZ3JpZElEICsgJy1yb3ctJyArIGkgKyAnLScgKyBmaWVsZC5wcm9wZXJ0eSlcIlxyXG4gICAgICAgICAgW2NtYWNzVG9vbHRpcFRyaWdnZXJdPVwiZ2V0VG9vbHRpcEVsbGlwc2lzVHJpZ2dlcigpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUaXRsZV09XCJpc0VsbGlwc2lzQWN0aXZlKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHksIGZpZWxkKSA/IChkYXRhW2ZpZWxkLnByb3BlcnR5XSAhPT0gdW5kZWZpbmVkID8gZmllbGQudXNlQ29tbWFNYXJrZXIgPyBkYXRhW2ZpZWxkLnByb3BlcnR5XS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnLCcpIDogZGF0YVtmaWVsZC5wcm9wZXJ0eV0gOiBmaWVsZC5wbGFjZWhvbGRlcikgOiBudWxsXCJcclxuICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1pbmxpbmUtY2VsbCBjbWFjcy1jb21wYWN0LXRhYmxlLWlucHV0LW51bWJlclwiPlxyXG4gICAgICAgICAgPGNtYWNzLXBob25lLW51bWJlciAjZmllbGRUeXBlUGhvbmUgY2xhc3M9XCJwaG9uZS1udW1iZXItdmlldy1tb2RlXCIgW2luaXRdPVwie2luaXRpYWxDb3VudHJ5OiAndXMnfVwiXHJcbiAgICAgICAgICAgIFtmb3JtQ29udHJvbEN1c3RvbV09XCJnZXRQaG9uZUZpZWxkVmFsdWUoZGF0YSwgZmllbGQpXCIgKGNsaWNrKT1cImN1cnJlbnRQaG9uZVNlbGVjdGVkKGRhdGEsIGZpZWxkKVwiPlxyXG4gICAgICAgICAgPC9jbWFjcy1waG9uZS1udW1iZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLUVkaXRhYmxlIEF0dGFjaG1lbnQgRWRpdCBNb2RlLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGlzQXR0YWNobWVudChmaWVsZClcIj5cclxuICAgICAgPGNtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudCAob25DaGFuZ2VBdHRhY2htZW50cyk9XCJfb25DaGFuZ2VBdHRhY2htZW50cyhpKVwiIFtjb25mXT1cImZpZWxkLmF0dGFjaG1lbnRcIiAob25jbGlja0Nob29zZUZpbGUpPVwiX29uY2xpY2tDaG9vc2VGaWxlKGkpXCIgW2N0YURyb3Bkb3duT3B0aW9uXT1cImRhdGFbZmllbGQucHJvcGVydHldXCI+XHJcbiAgICAgIDwvY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSBUZW1wbGF0ZSBWaWV3IE1vZGUgIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAjdGVtcGxhdGVSZWZDZWxkICpuZ0lmPVwiaXNDZWxkVHlwZVRlbXBsYXRlUmVmKGZpZWxkKSAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XVwiPlxyXG4gICAgICA8ZGl2IFtpZF09XCJncmlkSUQgKyAnY29sdW1uJyArIGNpICsgJ3JvdycgKyBpXCIgc3R5bGU9XCJ3aWR0aDogOTglOyBtYXgtd2lkdGg6IDk4JTsgcGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV0ucmVmOyBjb250ZXh0OiBkYXRhW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0XCI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPiJdfQ==