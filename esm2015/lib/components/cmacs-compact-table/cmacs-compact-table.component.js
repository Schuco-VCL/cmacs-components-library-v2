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
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_click_0_listener($event) { i0.ɵɵrestoreView(_r347); const ctx_r346 = i0.ɵɵnextContext(2); return ctx_r346.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r347); const ctx_r348 = i0.ɵɵnextContext(2); return ctx_r348.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r347); const ctx_r350 = i0.ɵɵnextContext(); const data_r303 = ctx_r350.data; const field_r302 = ctx_r350.field; return (data_r303[field_r302.property] = $event); })("cmacsEditedInput", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_cmacsEditedInput_0_listener($event) { i0.ɵɵrestoreView(_r347); const ctx_r351 = i0.ɵɵnextContext(2); return ctx_r351.cmacsEditedInput($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r347); const ctx_r353 = i0.ɵɵnextContext(); const i_r304 = ctx_r353.i; const data_r303 = ctx_r353.data; const field_r302 = ctx_r353.field; const ctx_r352 = i0.ɵɵnextContext(); return ctx_r352.endEditModeNgModel(i_r304, data_r303, null, field_r302); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_6_cmacs_select_3_cmacs_option_2_Template, 1, 4, "cmacs-option", 117);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r354 = i0.ɵɵnextContext();
    const field_r302 = ctx_r354.field;
    const data_r303 = ctx_r354.data;
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
    const _r359 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 120);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_ng_template_4_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r359); const ctx_r358 = i0.ɵɵnextContext(2); const i_r304 = ctx_r358.i; const data_r303 = ctx_r358.data; const field_r302 = ctx_r358.field; const ctx_r357 = i0.ɵɵnextContext(); return ctx_r357.addOption(i_r304, data_r303, null, field_r302); });
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
    const _r365 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 121, 122);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r365); const ctx_r364 = i0.ɵɵnextContext(); const data_r303 = ctx_r364.data; const field_r302 = ctx_r364.field; return (data_r303[field_r302.property] = $event); })("click", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r365); const ctx_r366 = i0.ɵɵnextContext(2); return ctx_r366.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r365); const ctx_r367 = i0.ɵɵnextContext(2); return ctx_r367.preventDefault($event); })("keyup", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r365); const ctx_r369 = i0.ɵɵnextContext(); const i_r304 = ctx_r369.i; const data_r303 = ctx_r369.data; const ctx_r368 = i0.ɵɵnextContext(); return ctx_r368.endEditMode($event, i_r304, data_r303); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_6_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r365); const ctx_r371 = i0.ɵɵnextContext(); const i_r304 = ctx_r371.i; const data_r303 = ctx_r371.data; const ctx_r370 = i0.ɵɵnextContext(); return ctx_r370.ngModelChange(i_r304, data_r303); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r372 = i0.ɵɵnextContext();
    const data_r303 = ctx_r372.data;
    const field_r302 = ctx_r372.field;
    const ctx_r311 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r311.validate(data_r303, field_r302));
    i0.ɵɵproperty("ngModel", data_r303[field_r302.property])("cmacsStep", field_r302.cmacsStep)("min", field_r302.min)("max", field_r302.max)("formatter", ctx_r311.formatter)("parser", ctx_r311.parser);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template(rf, ctx) { if (rf & 1) {
    const _r376 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 123, 122);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r376); const ctx_r375 = i0.ɵɵnextContext(); const data_r303 = ctx_r375.data; const field_r302 = ctx_r375.field; return (data_r303[field_r302.property] = $event); })("click", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r376); const ctx_r377 = i0.ɵɵnextContext(2); return ctx_r377.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r376); const ctx_r378 = i0.ɵɵnextContext(2); return ctx_r378.preventDefault($event); })("keyup", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r376); const ctx_r380 = i0.ɵɵnextContext(); const i_r304 = ctx_r380.i; const data_r303 = ctx_r380.data; const ctx_r379 = i0.ɵɵnextContext(); return ctx_r379.endEditMode($event, i_r304, data_r303); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_7_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r376); const ctx_r382 = i0.ɵɵnextContext(); const i_r304 = ctx_r382.i; const data_r303 = ctx_r382.data; const ctx_r381 = i0.ɵɵnextContext(); return ctx_r381.ngModelChange(i_r304, data_r303); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r383 = i0.ɵɵnextContext();
    const data_r303 = ctx_r383.data;
    const field_r302 = ctx_r383.field;
    const ctx_r312 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r312.validate(data_r303, field_r302));
    i0.ɵɵproperty("ngModel", data_r303[field_r302.property])("formatter", !ctx_r312.isNull(field_r302.formatter) ? field_r302.formatter : ctx_r312.defaultFormatter)("parser", !ctx_r312.isNull(field_r302.parser) ? field_r302.parser : ctx_r312.defaultParser)("cmacsStep", field_r302.cmacsStep ? field_r302.cmacsStep : 1)("min", field_r302.min)("max", field_r302.max);
} }
function CmacsCompactTableComponent_ng_template_6_label_8_Template(rf, ctx) { if (rf & 1) {
    const _r387 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 124, 125);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_label_8_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r387); const ctx_r386 = i0.ɵɵnextContext(); const data_r303 = ctx_r386.data; const field_r302 = ctx_r386.field; return (data_r303[field_r302.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_label_8_Template_label_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r387); const ctx_r389 = i0.ɵɵnextContext(); const i_r304 = ctx_r389.i; const data_r303 = ctx_r389.data; const field_r302 = ctx_r389.field; const ctx_r388 = i0.ɵɵnextContext(); return ctx_r388.endEditModeNgModel(i_r304, data_r303, field_r302.property, field_r302); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r390 = i0.ɵɵnextContext();
    const data_r303 = ctx_r390.data;
    const field_r302 = ctx_r390.field;
    const ctx_r313 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r313.validate(data_r303, field_r302));
    i0.ɵɵproperty("ngModel", data_r303[field_r302.property]);
} }
const _c13 = function () { return { initialCountry: "us", formatOnDisplay: false }; };
function CmacsCompactTableComponent_ng_template_6_cmacs_phone_number_9_Template(rf, ctx) { if (rf & 1) {
    const _r393 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-phone-number", 126, 127);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_phone_number_9_Template_cmacs_phone_number_click_0_listener($event) { i0.ɵɵrestoreView(_r393); const ctx_r392 = i0.ɵɵnextContext(2); return ctx_r392.preventDefault($event); })("hasError", function CmacsCompactTableComponent_ng_template_6_cmacs_phone_number_9_Template_cmacs_phone_number_hasError_0_listener($event) { i0.ɵɵrestoreView(_r393); const ctx_r395 = i0.ɵɵnextContext(); const i_r304 = ctx_r395.i; const data_r303 = ctx_r395.data; const field_r302 = ctx_r395.field; const ctx_r394 = i0.ɵɵnextContext(); return ctx_r394.hasPhoneNumberError($event, i_r304, data_r303, field_r302.property, field_r302); })("countryChange", function CmacsCompactTableComponent_ng_template_6_cmacs_phone_number_9_Template_cmacs_phone_number_countryChange_0_listener($event) { i0.ɵɵrestoreView(_r393); const ctx_r396 = i0.ɵɵnextContext(2); return ctx_r396.onCountryChange($event); });
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
    const field_r397 = i0.ɵɵnextContext(2).field;
    const ctx_r412 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-icon", ctx_r412.inLineEdit && field_r397.editable)("cmacs-compact-table-edit-icon-view", !ctx_r412.inLineEdit || !field_r397.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r416 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 128);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r416); const ctx_r415 = i0.ɵɵnextContext(); const data_r398 = ctx_r415.data; const field_r397 = ctx_r415.field; const ctx_r414 = i0.ɵɵnextContext(); return ctx_r414.startEdit(data_r398[ctx_r414.config.fieldId], field_r397.property, $event, data_r398); });
    i0.ɵɵelementStart(2, "div", 129);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r416); const ctx_r418 = i0.ɵɵnextContext(); const i_r399 = ctx_r418.i; const field_r397 = ctx_r418.field; const ctx_r417 = i0.ɵɵnextContext(); return ctx_r417.onDataTapEllipsis(ctx_r417.gridID + "-row-" + i_r399 + "-" + field_r397.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_1_i_4_Template, 1, 4, "i", 130);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r419 = i0.ɵɵnextContext();
    const data_r398 = ctx_r419.data;
    const field_r397 = ctx_r419.field;
    const item_r400 = ctx_r419.item;
    const i_r399 = ctx_r419.i;
    const ctx_r402 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r402.editId === data_r398[ctx_r402.config.fieldId] && ctx_r402.property === field_r397.property && field_r397.editable && (ctx_r402.isString(field_r397) || ctx_r402.isDate(field_r397) || ctx_r402.isSelect(field_r397) || ctx_r402.isTime(field_r397)))("cmacs-compact-table-on-edit-no-padding", ctx_r402.editId === data_r398[ctx_r402.config.fieldId] && ctx_r402.property === field_r397.property && field_r397.editable && (ctx_r402.isNumber(field_r397) || ctx_r402.isDate(field_r397) || ctx_r402.isTime(field_r397) || ctx_r402.isString(field_r397)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r402.getMaxWidth(field_r397, item_r400, i_r399));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell", !ctx_r402.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r402.isNull(data_r398[field_r397.property]) || !data_r398[field_r397.property].length)("cmacs-compact-table-invalid", !ctx_r402.validate(data_r398, field_r397));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r402.gridID, "-row-", i_r399, "-", field_r397.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r402.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r402.isEllipsisActive(ctx_r402.gridID + "-row-" + i_r399 + "-" + field_r397.property, field_r397) ? ctx_r402.getStringFieldValue(data_r398, field_r397) : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r402.getStringFieldValue(data_r398, field_r397), " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r397.editable || field_r397.editable === undefined);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r422 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 128);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r422); const ctx_r421 = i0.ɵɵnextContext(); const data_r398 = ctx_r421.data; const field_r397 = ctx_r421.field; const ctx_r420 = i0.ɵɵnextContext(); return ctx_r420.startEdit(data_r398[ctx_r420.config.fieldId], field_r397.property, $event, data_r398); });
    i0.ɵɵelementStart(2, "div", 132);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r422); const ctx_r424 = i0.ɵɵnextContext(); const i_r399 = ctx_r424.i; const field_r397 = ctx_r424.field; const ctx_r423 = i0.ɵɵnextContext(); return ctx_r423.onDataTapEllipsis(ctx_r423.gridID + "-row-" + i_r399 + "-" + field_r397.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 133);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r425 = i0.ɵɵnextContext();
    const data_r398 = ctx_r425.data;
    const field_r397 = ctx_r425.field;
    const item_r400 = ctx_r425.item;
    const i_r399 = ctx_r425.i;
    const ctx_r403 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r403.editId === data_r398[ctx_r403.config.fieldId] && ctx_r403.property === field_r397.property && field_r397.editable && (ctx_r403.isString(field_r397) || ctx_r403.isDate(field_r397) || ctx_r403.isSelect(field_r397) || ctx_r403.isTime(field_r397)))("cmacs-compact-table-on-edit-no-padding", ctx_r403.editId === data_r398[ctx_r403.config.fieldId] && ctx_r403.property === field_r397.property && field_r397.editable && (ctx_r403.isNumber(field_r397) || ctx_r403.isDate(field_r397) || ctx_r403.isTime(field_r397) || ctx_r403.isString(field_r397)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r403.getMaxWidth(field_r397, item_r400, i_r399));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r403.validate(data_r398, field_r397))("cmacs-compact-table-overflow-cell", !ctx_r403.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r403.isNull(data_r398[field_r397.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r403.gridID, "-row-", i_r399, "-", field_r397.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r403.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r403.isEllipsisActive(ctx_r403.gridID + "-row-" + i_r399 + "-" + field_r397.property, field_r397) ? data_r398[field_r397.property] ? ctx_r403.transformDate(data_r398[field_r397.property]) : field_r397.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(data_r398[field_r397.property] ? ctx_r403.transformDate(data_r398[field_r397.property]) : field_r397.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-calendar-icon", ctx_r403.inLineEdit && field_r397.editable)("cmacs-compact-table-calendar-icon-view", !ctx_r403.inLineEdit || !field_r397.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r428 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 128);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r428); const ctx_r427 = i0.ɵɵnextContext(); const data_r398 = ctx_r427.data; const field_r397 = ctx_r427.field; const ctx_r426 = i0.ɵɵnextContext(); return ctx_r426.startEdit(data_r398[ctx_r426.config.fieldId], field_r397.property, $event, data_r398); });
    i0.ɵɵelementStart(2, "div", 132);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r428); const ctx_r430 = i0.ɵɵnextContext(); const i_r399 = ctx_r430.i; const field_r397 = ctx_r430.field; const ctx_r429 = i0.ɵɵnextContext(); return ctx_r429.onDataTapEllipsis(ctx_r429.gridID + "-row-" + i_r399 + "-" + field_r397.property); });
    i0.ɵɵpipe(3, "date");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "i", 134);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r431 = i0.ɵɵnextContext();
    const data_r398 = ctx_r431.data;
    const field_r397 = ctx_r431.field;
    const item_r400 = ctx_r431.item;
    const i_r399 = ctx_r431.i;
    const ctx_r404 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r404.editId === data_r398[ctx_r404.config.fieldId] && ctx_r404.property === field_r397.property && field_r397.editable && (ctx_r404.isString(field_r397) || ctx_r404.isDate(field_r397) || ctx_r404.isSelect(field_r397) || ctx_r404.isTime(field_r397)))("cmacs-compact-table-on-edit-no-padding", ctx_r404.editId === data_r398[ctx_r404.config.fieldId] && ctx_r404.property === field_r397.property && field_r397.editable && (ctx_r404.isNumber(field_r397) || ctx_r404.isDate(field_r397) || ctx_r404.isTime(field_r397) || ctx_r404.isString(field_r397)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r404.getMaxWidth(field_r397, item_r400, i_r399));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r404.validate(data_r398, field_r397))("cmacs-compact-table-overflow-cell", !ctx_r404.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r404.isNull(data_r398[field_r397.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r404.gridID, "-row-", i_r399, "-", field_r397.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r404.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r404.isEllipsisActive(ctx_r404.gridID + "-row-" + i_r399 + "-" + field_r397.property, field_r397) ? data_r398[field_r397.property] ? i0.ɵɵpipeBind2(3, 22, data_r398[field_r397.property], field_r397.timeFormat ? field_r397.timeFormat : "h:mm a") : field_r397.placeholder : null);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r398[field_r397.property] ? i0.ɵɵpipeBind2(5, 25, data_r398[field_r397.property], field_r397.timeFormat ? field_r397.timeFormat : "h:mm a") : field_r397.placeholder);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("cmacs-compact-table-calendar-icon", ctx_r404.inLineEdit && field_r397.editable)("cmacs-compact-table-calendar-icon-view", !ctx_r404.inLineEdit || !field_r397.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_4_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 137);
} if (rf & 2) {
    const field_r397 = i0.ɵɵnextContext(2).field;
    const ctx_r432 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-select-icon", ctx_r432.inLineEdit && field_r397.editable)("cmacs-compact-table-select-icon-view", !ctx_r432.inLineEdit || !field_r397.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r436 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 128);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r436); const ctx_r435 = i0.ɵɵnextContext(); const data_r398 = ctx_r435.data; const field_r397 = ctx_r435.field; const ctx_r434 = i0.ɵɵnextContext(); return ctx_r434.startEdit(data_r398[ctx_r434.config.fieldId], field_r397.property, $event, data_r398); });
    i0.ɵɵelementStart(2, "div", 135);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r436); const ctx_r438 = i0.ɵɵnextContext(); const i_r399 = ctx_r438.i; const field_r397 = ctx_r438.field; const ctx_r437 = i0.ɵɵnextContext(); return ctx_r437.onDataTapEllipsis(ctx_r437.gridID + "-row-" + i_r399 + "-" + field_r397.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_4_i_4_Template, 1, 4, "i", 136);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r439 = i0.ɵɵnextContext();
    const data_r398 = ctx_r439.data;
    const field_r397 = ctx_r439.field;
    const item_r400 = ctx_r439.item;
    const i_r399 = ctx_r439.i;
    const ctx_r405 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r405.editId === data_r398[ctx_r405.config.fieldId] && ctx_r405.property === field_r397.property && field_r397.editable && (ctx_r405.isString(field_r397) || ctx_r405.isDate(field_r397) || ctx_r405.isSelect(field_r397) || ctx_r405.isTime(field_r397)))("cmacs-compact-table-on-edit-no-padding", ctx_r405.editId === data_r398[ctx_r405.config.fieldId] && ctx_r405.property === field_r397.property && field_r397.editable && (ctx_r405.isNumber(field_r397) || ctx_r405.isDate(field_r397) || ctx_r405.isTime(field_r397) || ctx_r405.isString(field_r397)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r405.getMaxWidth(field_r397, item_r400, i_r399));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r405.validate(data_r398, field_r397))("cmacs-compact-table-overflow-cell", !ctx_r405.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r405.isNull(ctx_r405.getLabel(data_r398, field_r397)) || !ctx_r405.getLabel(data_r398, field_r397).length)("cmacs-compact-table-field-mode-status-low", field_r397.mode === "status" && ctx_r405.getClassStatus(data_r398, field_r397) === "low")("cmacs-compact-table-field-mode-status-medium", field_r397.mode === "status" && ctx_r405.getClassStatus(data_r398, field_r397) === "medium")("cmacs-compact-table-field-mode-status-high", field_r397.mode === "status" && ctx_r405.getClassStatus(data_r398, field_r397) === "high");
    i0.ɵɵattributeInterpolate3("id", "", ctx_r405.gridID, "-row-", i_r399, "-", field_r397.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r405.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r405.isEllipsisActive(ctx_r405.gridID + "-row-" + i_r399 + "-" + field_r397.property, field_r397) ? ctx_r405.getLabel(data_r398, field_r397) && ctx_r405.getLabel(data_r398, field_r397).length ? ctx_r405.getLabel(data_r398, field_r397) : field_r397.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r405.getLabel(data_r398, field_r397) && ctx_r405.getLabel(data_r398, field_r397).length ? ctx_r405.getLabel(data_r398, field_r397) : field_r397.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r397.mode !== "status");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r442 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 128);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r442); const ctx_r441 = i0.ɵɵnextContext(); const data_r398 = ctx_r441.data; const field_r397 = ctx_r441.field; const ctx_r440 = i0.ɵɵnextContext(); return ctx_r440.startEdit(data_r398[ctx_r440.config.fieldId], field_r397.property, $event, data_r398); });
    i0.ɵɵelementStart(2, "div", 138);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r442); const ctx_r444 = i0.ɵɵnextContext(); const i_r399 = ctx_r444.i; const field_r397 = ctx_r444.field; const ctx_r443 = i0.ɵɵnextContext(); return ctx_r443.onDataTapEllipsis(ctx_r443.gridID + "-row-" + i_r399 + "-" + field_r397.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 139);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r445 = i0.ɵɵnextContext();
    const data_r398 = ctx_r445.data;
    const field_r397 = ctx_r445.field;
    const item_r400 = ctx_r445.item;
    const i_r399 = ctx_r445.i;
    const ctx_r406 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r406.editId === data_r398[ctx_r406.config.fieldId] && ctx_r406.property === field_r397.property && field_r397.editable && (ctx_r406.isString(field_r397) || ctx_r406.isDate(field_r397) || ctx_r406.isSelect(field_r397) || ctx_r406.isTime(field_r397)))("cmacs-compact-table-on-edit-no-padding", ctx_r406.editId === data_r398[ctx_r406.config.fieldId] && ctx_r406.property === field_r397.property && field_r397.editable && (ctx_r406.isNumber(field_r397) || ctx_r406.isDate(field_r397) || ctx_r406.isTime(field_r397) || ctx_r406.isString(field_r397)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r406.getMaxWidth(field_r397, item_r400, i_r399));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r406.validate(data_r398, field_r397))("cmacs-compact-table-overflow-cell", !ctx_r406.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r406.isNull(data_r398[field_r397.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r406.gridID, "-row-", i_r399, "-", field_r397.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r406.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r406.isEllipsisActive(ctx_r406.gridID + "-row-" + i_r399 + "-" + field_r397.property, field_r397) ? data_r398[field_r397.property] !== undefined ? field_r397.useCommaMarker ? data_r398[field_r397.property].toString().replace(".", ",") : data_r398[field_r397.property] : field_r397.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r406.getInputNumberValue(data_r398, field_r397));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-input-number-icon", ctx_r406.inLineEdit && field_r397.editable)("cmacs-compact-table-input-number-icon-view", !ctx_r406.inLineEdit || !field_r397.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r450 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 141);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_6_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r450); const data_r398 = i0.ɵɵnextContext(2).data; const ctx_r448 = i0.ɵɵnextContext(); return ctx_r448.clickHyperlink(data_r398); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r451 = i0.ɵɵnextContext(2);
    const data_r398 = ctx_r451.data;
    const field_r397 = ctx_r451.field;
    i0.ɵɵclassProp("cmacs-compact-table-hyperlink", !data_r398.parent);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r398[field_r397.property], " ");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r452 = i0.ɵɵnextContext(2);
    const data_r398 = ctx_r452.data;
    const field_r397 = ctx_r452.field;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r398[field_r397.property], " ");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_ng_template_8_ng_container_6_div_1_Template, 2, 3, "div", 140);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_8_ng_container_6_div_2_Template, 2, 1, "div", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r398 = i0.ɵɵnextContext().data;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !data_r398.parent);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r398.parent);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 145);
} if (rf & 2) {
    const ctx_r457 = i0.ɵɵnextContext(2);
    const data_r398 = ctx_r457.data;
    const field_r397 = ctx_r457.field;
    const ctx_r454 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r454.validate(data_r398, field_r397));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 146);
    i0.ɵɵelement(1, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r458 = i0.ɵɵnextContext(2);
    const data_r398 = ctx_r458.data;
    const field_r397 = ctx_r458.field;
    const ctx_r455 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r455.validate(data_r398, field_r397));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 148);
} if (rf & 2) {
    const ctx_r459 = i0.ɵɵnextContext(2);
    const data_r398 = ctx_r459.data;
    const field_r397 = ctx_r459.field;
    const ctx_r456 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r456.validate(data_r398, field_r397));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r462 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 128);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_7_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r462); const ctx_r461 = i0.ɵɵnextContext(); const data_r398 = ctx_r461.data; const field_r397 = ctx_r461.field; const ctx_r460 = i0.ɵɵnextContext(); return ctx_r460.startEdit(data_r398[ctx_r460.config.fieldId], field_r397.property, $event, data_r398); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_8_ng_container_7_span_2_Template, 1, 2, "span", 142);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_8_ng_container_7_span_3_Template, 2, 2, "span", 143);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_7_i_4_Template, 1, 2, "i", 144);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r463 = i0.ɵɵnextContext();
    const data_r398 = ctx_r463.data;
    const field_r397 = ctx_r463.field;
    const ctx_r408 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r408.editId === data_r398[ctx_r408.config.fieldId] && ctx_r408.property === field_r397.property && field_r397.editable && (ctx_r408.isString(field_r397) || ctx_r408.isDate(field_r397) || ctx_r408.isSelect(field_r397) || ctx_r408.isTime(field_r397)))("cmacs-compact-table-on-edit-no-padding", ctx_r408.editId === data_r398[ctx_r408.config.fieldId] && ctx_r408.property === field_r397.property && field_r397.editable && (ctx_r408.isNumber(field_r397) || ctx_r408.isDate(field_r397) || ctx_r408.isTime(field_r397) || ctx_r408.isString(field_r397)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r398[field_r397.property] == false || data_r398[field_r397.property] == "false");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r398[field_r397.property] === undefined || data_r398[field_r397.property] === null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r398[field_r397.property] === true || data_r398[field_r397.property] === "true");
} }
const _c14 = function () { return { initialCountry: "us" }; };
function CmacsCompactTableComponent_ng_template_8_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r467 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 149);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_8_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r467); const ctx_r466 = i0.ɵɵnextContext(); const data_r398 = ctx_r466.data; const field_r397 = ctx_r466.field; const ctx_r465 = i0.ɵɵnextContext(); return ctx_r465.startEdit(data_r398[ctx_r465.config.fieldId], field_r397.property, $event, data_r398); });
    i0.ɵɵelementStart(2, "div", 138);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_8_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r467); const ctx_r469 = i0.ɵɵnextContext(); const i_r399 = ctx_r469.i; const field_r397 = ctx_r469.field; const ctx_r468 = i0.ɵɵnextContext(); return ctx_r468.onDataTapEllipsis(ctx_r468.gridID + "-row-" + i_r399 + "-" + field_r397.property); });
    i0.ɵɵelementStart(3, "cmacs-phone-number", 150, 127);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_8_Template_cmacs_phone_number_click_3_listener() { i0.ɵɵrestoreView(_r467); const ctx_r471 = i0.ɵɵnextContext(); const data_r398 = ctx_r471.data; const field_r397 = ctx_r471.field; const ctx_r470 = i0.ɵɵnextContext(); return ctx_r470.currentPhoneSelected(data_r398, field_r397); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r472 = i0.ɵɵnextContext();
    const data_r398 = ctx_r472.data;
    const field_r397 = ctx_r472.field;
    const i_r399 = ctx_r472.i;
    const ctx_r409 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r409.editId === data_r398[ctx_r409.config.fieldId] && ctx_r409.property === field_r397.property && field_r397.editable && (ctx_r409.isString(field_r397) || ctx_r409.isDate(field_r397) || ctx_r409.isSelect(field_r397) || ctx_r409.isTime(field_r397) || ctx_r409.isPhone(field_r397)))("cmacs-compact-table-on-edit-no-padding", ctx_r409.editId === data_r398[ctx_r409.config.fieldId] && ctx_r409.property === field_r397.property && field_r397.editable && (ctx_r409.isNumber(field_r397) || ctx_r409.isDate(field_r397) || ctx_r409.isTime(field_r397) || ctx_r409.isString(field_r397) || ctx_r409.isPhone(field_r397)));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r409.validate(data_r398, field_r397))("cmacs-compact-table-overflow-cell", !ctx_r409.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r409.isNull(data_r398[field_r397.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r409.gridID, "-row-", i_r399, "-", field_r397.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r409.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r409.isEllipsisActive(ctx_r409.gridID + "-row-" + i_r399 + "-" + field_r397.property, field_r397) ? data_r398[field_r397.property] !== undefined ? field_r397.useCommaMarker ? data_r398[field_r397.property].toString().replace(".", ",") : data_r398[field_r397.property] : field_r397.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("init", i0.ɵɵpureFunction0(17, _c14))("formControlCustom", ctx_r409.getPhoneFieldValue(data_r398, field_r397));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r475 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "cmacs-compact-table-attachment", 151);
    i0.ɵɵlistener("onChangeAttachments", function CmacsCompactTableComponent_ng_template_8_ng_container_9_Template_cmacs_compact_table_attachment_onChangeAttachments_1_listener($event) { i0.ɵɵrestoreView(_r475); const ctx_r474 = i0.ɵɵnextContext(); const i_r399 = ctx_r474.i; const field_r397 = ctx_r474.field; const ctx_r473 = i0.ɵɵnextContext(); return ctx_r473._onChangeAttachments($event, i_r399, field_r397.property); })("onclickChooseFile", function CmacsCompactTableComponent_ng_template_8_ng_container_9_Template_cmacs_compact_table_attachment_onclickChooseFile_1_listener() { i0.ɵɵrestoreView(_r475); const ctx_r477 = i0.ɵɵnextContext(); const i_r399 = ctx_r477.i; const field_r397 = ctx_r477.field; const ctx_r476 = i0.ɵɵnextContext(); return ctx_r476._onclickChooseFile(i_r399, field_r397.property); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r478 = i0.ɵɵnextContext();
    const data_r398 = ctx_r478.data;
    const field_r397 = ctx_r478.field;
    const ctx_r410 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("conf", ctx_r410.columnMenu.attachment)("ctaDropdownOption", data_r398[field_r397.property]);
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
    const ctx_r481 = i0.ɵɵnextContext();
    const data_r398 = ctx_r481.data;
    const field_r397 = ctx_r481.field;
    const ci_r401 = ctx_r481.ci;
    const i_r399 = ctx_r481.i;
    const ctx_r411 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r411.editId === data_r398[ctx_r411.config.fieldId] && ctx_r411.property === field_r397.property && field_r397.editable && (ctx_r411.isString(field_r397) || ctx_r411.isDate(field_r397) || ctx_r411.isSelect(field_r397) || ctx_r411.isTime(field_r397)))("cmacs-compact-table-on-edit-no-padding", ctx_r411.editId === data_r398[ctx_r411.config.fieldId] && ctx_r411.property === field_r397.property && field_r397.editable && (ctx_r411.isNumber(field_r397) || ctx_r411.isDate(field_r397) || ctx_r411.isTime(field_r397) || ctx_r411.isString(field_r397)));
    i0.ɵɵproperty("id", ctx_r411.gridID + "column" + ci_r401 + "row" + i_r399);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", data_r398[field_r397.property].ref)("ngTemplateOutletContext", data_r398[field_r397.property].context);
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
    const field_r397 = ctx.field;
    const data_r398 = ctx.data;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isString(field_r397));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isDate(field_r397));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isTime(field_r397));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isSelect(field_r397));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isNumber(field_r397));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isCeldTypeHyperlink(field_r397));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isBoolean(field_r397));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isPhone(field_r397));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.columnMenu && ctx_r7.isAttachment(field_r397));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.isCeldTypeTemplateRef(field_r397) && data_r398[field_r397.property]);
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
    } }, inputs: { size: "size", showTotal: "showTotal", pageSizeOptions: "pageSizeOptions", virtualScroll: "virtualScroll", exclusiveSelect: "exclusiveSelect", logs: "logs", expandable: "expandable", smartTable: "smartTable", draggable: "draggable", virtualItemSize: "virtualItemSize", expandAll: "expandAll", addColumn: "addColumn", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", hasCookies: "hasCookies", total: "total", title: "title", footer: "footer", noResult: "noResult", widthConfig: "widthConfig", pageIndex: "pageIndex", pageSize: "pageSize", actionColumnWidth: "actionColumnWidth", wrapLines: "wrapLines", dropdownAddOptionTemplateRef: "dropdownAddOptionTemplateRef", data: "data", config: "config", use12Hours: "use12Hours", fieldId: "fieldId", gridID: "gridID", paginationPosition: "paginationPosition", scroll: "scroll", frontPagination: "frontPagination", templateMode: "templateMode", bordered: "bordered", hideButtons: "hideButtons", centerTable: "centerTable", showPagination: "showPagination", loading: "loading", showSizeChanger: "showSizeChanger", hideOnSinglePage: "hideOnSinglePage", showQuickJumper: "showQuickJumper", simple: "simple", checkboxSelect: "checkboxSelect", inLineEdit: "inLineEdit", dataTable: "dataTable", showRate: "showRate", exportEvent: "exportEvent", columnMenu: "columnMenu", extra: "extra", contextmenu: "contextmenu", indentSize: "indentSize", virtualMaxBufferPx: "virtualMaxBufferPx", rateCount: "rateCount", multiSelect: "multiSelect" }, outputs: { configChange: "configChange", buttonClick: "buttonClick", rateChange: "rateChange", selectionChange: "selectionChange", ondlclickRow: "ondlclickRow", onclickRow: "onclickRow", onclickHyperlink: "onclickHyperlink", onedit: "onedit", onRowExpandCollapse: "onRowExpandCollapse", ondrop: "ondrop", sortChange: "sortChange", filterChange: "filterChange", onrowdeleted: "onrowdeleted", onrowadded: "onrowadded", oncolumnadded: "oncolumnadded", oneditcolumn: "oneditcolumn", onresize: "onresize", oncontextmenu: "oncontextmenu", onDropdownRender: "onDropdownRender", onChangeAttachments: "onChangeAttachments", onclickChooseFile: "onclickChooseFile" }, exportAs: ["cmacsCompactTable"], features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 36, consts: [[3, "id"], [1, "cmacs-compact-table", 3, "nzData", "nzShowTotal", "nzPageSizeOptions", "nzVirtualItemSize", "nzLoadingDelay", "nzVirtualMaxBufferPx", "nzLoadingIndicator", "nzTotal", "nzTitle", "nzFooter", "nzNoResult", "nzWidthConfig", "nzPageIndex", "nzPageSize", "nzPaginationPosition", "nzScroll", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], ["gridComponent", ""], [4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListDropped", 4, "ngIf"], ["editTpl", ""], ["viewModeTpl", ""], ["nzWidth", "40px", "class", "cmacs-compact-table-smart-table-hot-spot-row-add cmacs-compact-table-smart-action-header", 3, "cmacs-compact-table-logs-header-th", "minWidth", "maxWidth", "nzLeft", 4, "ngIf"], ["nzWidth", "40px", 3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], ["nzWidth", "30px", "nzLeft", "0px", 3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzWidth", "maxWidth", "minWidth", "nzRight", 4, "ngIf"], ["nzWidth", "40px", "class", "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "minWidth", "maxWidth", "nzRight", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], [3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], ["nzWidth", "40px", 1, "cmacs-compact-table-smart-table-hot-spot-row-add", "cmacs-compact-table-smart-action-header", 3, "nzLeft"], ["class", "cmacs-compact-table-smart-table-hot-spot-row-add-icon iconUILarge-New", 3, "cmacs-compact-table-smart-add-row-icon-visible", "click", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-row-add-icon", "iconUILarge-New", 3, "click"], ["nzWidth", "40px", 3, "nzLeft"], ["nzWidth", "30px", "nzLeft", "0px", 3, "nzLeft"], ["cmacs-checkbox", "", 3, "ngModel", "indeterminate", "ngModelChange", "checkedChange"], [4, "ngIf", "ngIfElse"], ["thWithFilters", ""], ["nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzShowSort", "nzShowFilter", "nzFilters", "nzFilterMultiple", "nzDisabled", "nzMinWidth", "nzMaxWidth", "ngClass", "nzSortOrder", "nzWidth", "nzLeft", "nzRight", "nzFilterChange", "nzResizeEnd", "nzSortOrderChange"], [3, "id", 4, "ngIf"], ["nzDirection", "right", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-col-add-icon-container"], ["class", "cmacs-compact-table-smart-table-hot-spot-col-add-icon iconUILarge-New", 3, "click", 4, "ngIf"], ["cmacs-tooltip", "", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap", "click"], [3, "field", "items", "onFieldChanged", 4, "ngIf"], ["class", "iconUILarge-More-Veritcal_Icon cmacs-compact-table-column-more", "style", "font-size: 15px;", 3, "cmacs-compact-table-column-more-selected", "click", 4, "ngIf"], [3, "field", "items", "labelSave", "onFieldChanged", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-col-add-icon", "iconUILarge-New", 3, "click"], [3, "field", "items", "onFieldChanged"], [1, "iconUILarge-More-Veritcal_Icon", "cmacs-compact-table-column-more", 2, "font-size", "15px", 3, "click"], [3, "field", "items", "labelSave", "onFieldChanged"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nzDirection", "right"], [1, "cmacs-compact-table-resize-trigger"], ["nzCustomFilter", "", "nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzShowSort", "nzDisabled", "ngClass", "nzSortOrder", "nzWidth", "nzMinWidth", "nzMaxWidth", "nzLeft", "nzRight", "nzResizeEnd", "nzSortOrderChange"], ["nzTrigger", "click", "nzPlacement", "bottomRight", "nzTableFilter", "", 3, "nzClickHide"], ["dropdown", ""], ["nz-icon", "", "nzType", "search", "nz-dropdown", "", 1, "ant-table-filter-icon"], ["cmacs-tooltip", "", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], [3, "nzWidth", "nzRight"], [1, "cmacs-compact-table-extra"], [4, "nzStringTemplateOutlet"], ["nzWidth", "40px", 1, "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "nzRight"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["defaultTpl", ""], [3, "id", "cmacs-compact-table-expandable-row", "cmacs-compact-table-row-active", "cmacs-compact-table-header-logs", "ant-table-selected-row", "click", "touchstart", "contextmenu", "dblclick", 4, "ngIf"], [3, "id", "click", "touchstart", "contextmenu", "dblclick"], ["style", "padding: 7px 10px", 3, "nzLeft", "minWidth", "maxWidth", "width", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], [3, "ngClass", "cmacs-editable-column", "cmacs-compact-table-on-edit-expandable", "cmacs-compact-table-logs-header-th-font", "cmacs-compact-table-expandable-td", "paddingLeft", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "minWidth", "nzExpandChange", 4, "ngFor", "ngForOf"], ["class", "cmacs-compact-table-rating", "style", "padding: 7px 10px", 3, "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "cmacs-compact-table-logs-header-th-font", "nzRight", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-align-td", 3, "cmacs-compact-table-logs-td", 4, "ngIf"], [2, "padding", "7px 10px", 3, "nzLeft"], [3, "ngClass", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "nzExpandChange"], [3, "display", "cmacs-compact-table-overflow-cell-container-logs", "width", 4, "ngIf"], [3, "display", "width", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cmacs-compact-table-rating", 2, "padding", "7px 10px"], [3, "ngModel", "nzCount", "nzDisabled", "ngModelChange", "click"], [2, "padding", "7px 10px", 3, "nzRight"], [1, "cmacs-compact-table-align-td", 2, "padding", "7px 10px"], ["cdkDrag", "", "class", "cmacs-no-selection", 3, "cdkDragDisabled", "id", "cmacs-compact-table-row-active", "ant-table-selected-row", "cmacs-compact-table-editable-row", "cmacs-compact-table-smart-table-row", "click", "touchstart", "contextmenu", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "cmacs-no-selection", 3, "cdkDragDisabled", "id", "click", "touchstart", "contextmenu"], ["contextMenuTemplate", "cmacsDropdownMenu"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-add", 3, "maxWidth", "minWidth", "nzLeft", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-drag-col cmacs-compact-table-fst-td", 3, "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "nzLeft", "cmacs-compact-table-fst-td", 4, "ngIf"], [3, "ngClass", "cmacs-editable-column", "cmacs-compact-table-fst-td", "nzLeft", "nzRight", "minWidth", 4, "ngFor", "ngForOf"], ["style", "padding: 7px 10px", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "nzRight", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "nzRight", "maxWidth", "minWidth", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-row-add", 2, "padding", "7px 10px", 3, "nzLeft"], ["class", "cmacs-compact-table-smart-table-hot-spot-row-add-icon iconUILarge-New", 3, "click", 4, "ngIf"], [1, "cmacs-compact-table-drag-col", "cmacs-compact-table-fst-td", 2, "padding", "7px 10px", 3, "nzLeft"], ["cdkDragHandle", "", 1, "iconUILarge-Move", "cmacs-compact-table-drag-handler"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange"], [3, "ngClass", "nzLeft", "nzRight"], ["style", "max-width: 98%", 4, "ngIf"], [2, "max-width", "98%"], [2, "padding", "7px 10px"], [3, "ngModel", "nzCount", "ngModelChange", "click"], [1, "cmacs-compact-table-smart-table-hot-spot-row-delete", 2, "padding", "7px 10px", 3, "nzRight"], ["class", "cmacs-compact-table-smart-table-hot-spot-row-delete-icon iconUISmall-Close", 3, "click", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-row-delete-icon", "iconUISmall-Close", 3, "click"], ["nz-virtual-scroll", ""], ["defaultTplVirtualScroll", ""], [3, "id", "cmacs-compact-table-row-active", "cmacs-compact-table-expandable-row", "cmacs-compact-table-header-logs", "touchstart", "contextmenu", "dblclick", 4, "ngIf"], [3, "id", "touchstart", "contextmenu", "dblclick"], [3, "cmacs-editable-column", "cmacs-compact-table-on-edit-expandable", "cmacs-compact-table-logs-header-th-font", "cmacs-compact-table-expandable-td", "paddingLeft", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "minWidth", "nzExpandChange", 4, "ngFor", "ngForOf"], [3, "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "nzExpandChange"], ["contextMenuTemplate", ""], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-add", 3, "maxWidth", "minWidth", "cmacs-compact-table-logs-td", "nzLeft", 4, "ngIf"], [3, "cmacs-editable-column", "cmacs-compact-table-fst-td", "nzLeft", "nzRight", "minWidth", 4, "ngFor", "ngForOf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "nzRight", "maxWidth", "minWidth", "cmacs-compact-table-logs-td", 4, "ngIf"], [3, "nzLeft", "nzRight"], ["class", "cmacs-compact-table-input", "type", "text", "cmacs-input", "", 3, "cmacs-compact-table-edit-mode-invalid", "placeholder", "ngModel", "click", "dblclick", "ngModelChange", "keyup", 4, "ngIf"], ["class", "cmacs-compact-table-date-edit", 3, "allowClear", "cmacs-compact-table-edit-mode-invalid", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["class", "cmacs-compact-table-datetime-picker", "hideSeconds", "", 3, "use12Hours", "cmacs-compact-table-edit-mode-invalid", "format", "defaultOpenValue", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["class", "cmacs-compact-table-select-cell", "showSearch", "", 3, "dropdownRender", "cmacsEditable", "cmacs-compact-table-field-mode-status", "cmacs-compact-table-field-mode-status-low-edit", "cmacs-compact-table-field-mode-status-medium-edit", "cmacs-compact-table-field-mode-status-high-edit", "cmacs-compact-table-edit-mode-invalid", "placeHolder", "mode", "showCmacsSearch", "ngModel", "click", "dblclick", "ngModelChange", "cmacsEditedInput", 4, "ngIf"], ["render", ""], ["class", "cmacs-compact-table-input-number-edit", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "cmacsStep", "min", "max", "formatter", "parser", "ngModelChange", "click", "dblclick", "keyup", 4, "ngIf"], ["class", "cmacs-compact-table-input-number-edit", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "formatter", "parser", "cmacsStep", "min", "max", "ngModelChange", "click", "dblclick", "keyup", 4, "ngIf"], ["cmacs-checkbox", "", "class", "cmacs-compact-tabe-editable-checkbox", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "phone-number", 3, "init", "formControlCustom", "click", "hasError", "countryChange", 4, "ngIf"], ["type", "text", "cmacs-input", "", 1, "cmacs-compact-table-input", 3, "placeholder", "ngModel", "click", "dblclick", "ngModelChange", "keyup"], ["fieldTypeInput", ""], [1, "cmacs-compact-table-date-edit", 3, "allowClear", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDatePicker", ""], ["hideSeconds", "", 1, "cmacs-compact-table-datetime-picker", 3, "use12Hours", "format", "defaultOpenValue", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDateTimePicker", ""], ["showSearch", "", 1, "cmacs-compact-table-select-cell", 3, "dropdownRender", "cmacsEditable", "placeHolder", "mode", "showCmacsSearch", "ngModel", "click", "dblclick", "ngModelChange", "cmacsEditedInput"], ["fieldTypeSelect", ""], [3, "label", "value", "divider", "disabled", 4, "ngFor", "ngForOf"], [3, "label", "value", "divider", "disabled"], ["cmacs-button", "", "role", "button", "aria-label", "add item", 3, "click", 4, "ngIf"], ["cmacs-button", "", "role", "button", "aria-label", "add item", 3, "click"], [1, "cmacs-compact-table-input-number-edit", 3, "ngModel", "cmacsStep", "min", "max", "formatter", "parser", "ngModelChange", "click", "dblclick", "keyup"], ["fieldTypeInputNumber", ""], [1, "cmacs-compact-table-input-number-edit", 3, "ngModel", "formatter", "parser", "cmacsStep", "min", "max", "ngModelChange", "click", "dblclick", "keyup"], ["cmacs-checkbox", "", 1, "cmacs-compact-tabe-editable-checkbox", 3, "ngModel", "ngModelChange"], ["fieldTypeBool", ""], [1, "phone-number", 3, "init", "formControlCustom", "click", "hasError", "countryChange"], ["fieldTypePhone", ""], [2, "width", "98%", "max-width", "98%", "padding", "7px 10px", 3, "click"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], ["class", "iconUISmall-Edit", 3, "cmacs-compact-table-edit-icon", "cmacs-compact-table-edit-icon-view", 4, "ngIf"], [1, "iconUISmall-Edit"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-date", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], [1, "iconUILarge-Calendar"], [1, "iconUILarge-Time"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-select", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], ["class", "iconArrowLarge-Chevron-Down", 3, "cmacs-compact-table-select-icon", "cmacs-compact-table-select-icon-view", 4, "ngIf"], [1, "iconArrowLarge-Chevron-Down"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-input-number", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], [1, "iconArrowLarge-Solid-UpDown"], [3, "cmacs-compact-table-hyperlink", "click", 4, "ngIf"], [3, "click"], ["class", "cmacs-compact-table-boolean-false-icon cmacs-compact-table-boolean-icon", 3, "cmacs-compact-table-invalid", 4, "ngIf"], ["class", "cmacs-compact-table-boolean-indeterminate-icon cmacs-compact-table-boolean-icon", 3, "cmacs-compact-table-invalid", 4, "ngIf"], ["class", "iconUILarge-Select-All cmacs-compact-table-boolean-icon-true", 3, "cmacs-compact-table-invalid", 4, "ngIf"], [1, "cmacs-compact-table-boolean-false-icon", "cmacs-compact-table-boolean-icon"], [1, "cmacs-compact-table-boolean-indeterminate-icon", "cmacs-compact-table-boolean-icon"], [1, "cmacs-compact-table-boolean-indeterminate-icon-inner"], [1, "iconUILarge-Select-All", "cmacs-compact-table-boolean-icon-true"], [2, "width", "100%", "max-width", "100%", 3, "click"], [1, "phone-number-view-mode", 3, "init", "formControlCustom", "click"], [3, "conf", "ctaDropdownOption", "onChangeAttachments", "onclickChooseFile"], ["templateRefCeld", ""], [2, "width", "98%", "max-width", "98%", "padding", "7px 10px", 3, "id"]], template: function CmacsCompactTableComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb21wYWN0LXRhYmxlL2NtYWNzLWNvbXBhY3QtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUlOLFNBQVMsRUFDVCxZQUFZLEVBQ1osdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBNkIsTUFBTSxFQUFFLEtBQUssRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBRy9GLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLGlCQUFpQixDQUFDO0FBR3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzVELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFD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LElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7ZUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUMvRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQzlELENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRCxlQUFlLENB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ZUFBZTtZQUN5QixZQUFZO2tCQUE5RCxTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNRLGtCQUFrQjtrQkFBMUUsU0FBUzttQkFBQyxzQkFBc0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDaUIsb0JBQW9CO2tCQUEzRixTQUFTO21CQUFDLHNCQUFzQixFQUFFLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFO1lBQ2QsaUJBQWlCO2tCQUF4RSxTQUFTO21CQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNNLHFCQUFxQjtrQkFBaEYsU0FBUzttQkFBQyx5QkFBeUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDTixhQUFhO2tCQUFoRSxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNBLFdBQVc7a0JBQTVELFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNQLGNBQWM7a0JBQXRELFNBQVM7bUJBQUMsNEJBQTRCO1lBQ2EsZ0JBQWdCO2tCQUFuRSxTQUFTO21CQUFDLHVDQUF1QztZQWdabEQsZUFBZTtrQkFEZCxZQUFZO21CQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIGNvdW50LCBkZWJvdW5jZVRpbWUsIHJhY2UsIHJlcGVhdCwgZGVsYXksIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCBqc1BERiBmcm9tICdqc3BkZic7XHJcbmltcG9ydCAnanNwZGYtYXV0b3RhYmxlJztcclxuaW1wb3J0IHsgR3JpZENvbmZpZywgRmllbGQsIEVkaXRDb2x1bW5BY3Rpb24sIEVkaXRDb2x1bW5FdmVudCB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcbmltcG9ydCB7IEdyaWRFeHBDb25maWcgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1leHAtY29uZmlnJztcclxuaW1wb3J0IHsgVGVtcGxhdGVUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9UZW1wbGF0ZVR5cGUuZW51bSc7XHJcbmltcG9ydCB7IENlbGRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9DZWxkVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgRXhjZWxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9leGNlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXhwb3J0VHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvZXhwb3J0LXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDaGVja2JveFNlbGVjdCB9IGZyb20gJy4uL2NtYWNzLXRhYmxlL2NtYWNzLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICd1dGlsJztcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ21hY3NJbnB1dE51bWJlckNvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLWlucHV0LW51bWJlci9jbWFjcy1pbnB1dC1udW1iZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWllJztcclxuaW1wb3J0IHsgQ21hY3NEYXRlVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLWRhdGV0aW1lLXBpY2tlci9jbWFjcy1kYXRldGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xyXG5pbXBvcnQgeyBOelNpemVNRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOelRhYmxlQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XHJcbmltcG9ydCB7IENtYWNzQ29udGV4dE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vY21hY3MtZHJvcGRvd24vY29udGV4dC1tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOelJlc2l6ZUV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9yZXNpemFibGUnO1xyXG5pbXBvcnQgeyBEZXZpY2VEZXRlY3RvclNlcnZpY2UgfSBmcm9tICduZ3gtZGV2aWNlLWRldGVjdG9yJztcclxuaW1wb3J0IHsgQ21hY3NDb21wYWN0VGFibGVDb2x1bW5Ub29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBhZnRlckRhdGUsIGJlZm9yZURhdGUsIGdyZWF0ZXJUaGFuLCBpc0VxdWFsVG9EYXRlLCBpc0VxdWFsVG9OdW1iZXIsIGlzTm90RXF1YWxUb0RhdGUsIGlzTm90RXF1YWxUb051bWJlciwgbGVzc1RoYW4sIHJhbmdlRGF0ZSwgcmFuZ2VOdW1iZXIgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL2N1c3RvbVZhbGlkYXRvcnMnO1xyXG5cclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuZGVjbGFyZSB2YXIgYWNjb3VudGluZzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbXBhY3QtdGFibGUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb21wYWN0VGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9nc10nOiAnbG9ncydcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbXBhY3RUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAvKiogbG9jYWwgdmFyaWFibGVzICovXHJcblxyXG4gIGxvY2FsZTogYW55ID0ge307IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgaGVhZGVyQm90dG9tU3R5bGUgPSB7fTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWw8YW55PihmYWxzZSwgW10pO1xyXG4gIHByaXZhdGUgX29ucmVzaXplJCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwdWJsaWMgb25yZXNpemVvYnMgPSB0aGlzLl9vbnJlc2l6ZSQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgX29uc29ydCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgcHVibGljIG9uc29ydG9icyA9IHRoaXMuX29uc29ydCQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHB1YmxpYyBkcm9wZG93bjogYW55O1xyXG4gIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgcGhvbmVMb2NhdGlvbiA9ICcxJztcclxuICBmb3JtUGhvbmVDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBbXHJcbiAgICBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqKD86XFwrPyhcXGR7MSwzfSkpPyhbLS4gKF0oXFxkezN9KVstLiApXSk/KChcXGR7M30pWy0uIF0oXFxkezIsNH0pKD86Wy0ueCBdKFxcZCspKT8pXFxzKiQvKSxcclxuICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICBWYWxpZGF0b3JzLm1heExlbmd0aCg0NSldKTtcclxuICBlZGl0aW9uT3BUcmlnZ2VyZWQgPSBmYWxzZTtcclxuICBkZWZhdWx0U29ydE9yZGVyID0gbnVsbDtcclxuICBjaGVja2JveENhY2hlOiBDaGVja2JveFNlbGVjdFtdID0gW107XHJcbiAgaXNJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIGVkaXRJZDogc3RyaW5nIHwgbnVsbDtcclxuICBwcm9wZXJ0eTogc3RyaW5nIHwgbnVsbDtcclxuICByb3dPbkVkaXRpb24gPSAtMTtcclxuICBub2RlT25FZGl0aW9uID0gbnVsbDtcclxuICBtYXBPZkV4cGFuZGVkRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnlbXSB9ID0ge307XHJcbiAgZGVmYXVsdFRpbWVWYWx1ZSA9IG5ldyBEYXRlKCk7XHJcbiAgbGFzdElkeFNlbGVjdGVkID0gbnVsbDtcclxuICBmaWVsZElEOiBhbnkgPSBudWxsO1xyXG4gIHNlbGVjdGVkQ29sdW1uSWQgPSAtMTtcclxuICBzZWxlY3RlZE1vcmUgPSAtMTtcclxuICBpc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IGZhbHNlO1xyXG4gIG9yZGVyID0gMDtcclxuICBjbGlja3MgPSAwO1xyXG4gIHRhcENvdW50ID0gMDtcclxuXHJcbiAgYWRkZWRPcHRpb24gPSAnJztcclxuXHJcbiAgLyoqIGVuZCBsb2NhbCB2YXJpYWJsZXMgKi9cclxuXHJcblxyXG4gIC8qKiBpbnB1dCB2YXJpYWJsZXMgKi9cclxuXHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTURTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBzaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+O1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4Y2x1c2l2ZVNlbGVjdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2dzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc21hcnRUYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkcmFnZ2FibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsSXRlbVNpemUgPSAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRBbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWRkQ29sdW1uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbG9hZGluZ0RlbGF5ID0gMDtcclxuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFzQ29va2llcyA9IHRydWU7XHJcbiAgQElucHV0KCkgdG90YWwgPSAwO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBwYWdlSW5kZXggPSAxO1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XHJcbiAgQElucHV0KCkgYWN0aW9uQ29sdW1uV2lkdGggPSAnODBweCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHdyYXBMaW5lcyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duQWRkT3B0aW9uVGVtcGxhdGVSZWY6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCkgZGF0YSA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogR3JpZENvbmZpZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdXNlMTJIb3VycyA9IHRydWU7XHJcbiAgQE91dHB1dCgpIGNvbmZpZ0NoYW5nZTogRXZlbnRFbWl0dGVyPEdyaWRDb25maWc+ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkQ29uZmlnPigpO1xyXG4gIEBJbnB1dCgpIGZpZWxkSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBncmlkSUQ6IHN0cmluZyA9IG51bGw7XHJcbiAgQElucHV0KCkgcGFnaW5hdGlvblBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2JvdGgnID0gJ2JvdHRvbSc7XHJcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XHJcbiAgQFZpZXdDaGlsZCgncmVuZGVySXRlbVRlbXBsYXRlJykgbnpJdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JztcclxuICAgIHBhZ2U6IG51bWJlcjtcclxuICB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZnJvbnRQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdGVtcGxhdGVNb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVCdXR0b25zID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNlbnRlclRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2l6ZUNoYW5nZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2ltcGxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrYm94U2VsZWN0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGluTGluZUVkaXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGF0YVRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dSYXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZXhwb3J0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRFeHBDb25maWc+KCk7XHJcbiAgQElucHV0KCkgY29sdW1uTWVudTogYW55O1xyXG4gIEBJbnB1dCgpIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBjb250ZXh0bWVudTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgaW5kZW50U2l6ZSA9IDA7XHJcbiAgQElucHV0KCkgdmlydHVhbE1heEJ1ZmZlclB4ID0gMjAwO1xyXG5cclxuXHJcbiAgLyoqIGVuZCBpbnB1dCB2YXJpYWJsZXMgKi9cclxuXHJcbiAgLyoqIG91dHB1dCB2YXJpYWJsZXMgKi9cclxuXHJcblxyXG4gIEBPdXRwdXQoKSBidXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSByYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XHJcbiAgQE91dHB1dCgpIG9uZGxjbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmNsaWNrUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2tIeXBlcmxpbmsgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25lZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uUm93RXhwYW5kQ29sbGFwc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25kcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgcmF0ZUNvdW50ID0gNTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbXVsdGlTZWxlY3QgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25yb3dkZWxldGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9ucm93YWRkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jb2x1bW5hZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmVkaXRjb2x1bW4gPSBuZXcgRXZlbnRFbWl0dGVyPEVkaXRDb2x1bW5FdmVudD4oKTtcclxuICBAT3V0cHV0KCkgb25yZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jb250ZXh0bWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyb3Bkb3duUmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlQXR0YWNobWVudHMgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSBvbmNsaWNrQ2hvb3NlRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI8e3JvdzphbnksaW5kZXhDb2w6YW55fT4oKTtcclxuXHJcbiAgLyoqIGVuZCBvdXRwdXQgdmFyaWFibGVzICovXHJcblxyXG4gIC8qKiBjb25zdHJ1Y3RvciAqL1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgZXhjZWxTZXJ2aWNlOiBFeGNlbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRldmljZURldGVjdG9yOiBEZXZpY2VEZXRlY3RvclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSxcclxuICAgIHByaXZhdGUgbnpEcm9wZG93blNlcnZpY2U6IENtYWNzQ29udGV4dE1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb29raWVzOiBDb29raWVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2VcclxuICApIHtcclxuICB9XHJcblxyXG4gIC8qKiB2aWV3IGNoaWxkIHZhcmlhYmxlcyAqL1xyXG5cclxuICBAVmlld0NoaWxkKCdncmlkQ29tcG9uZW50JykgbnpUYWJsZUNvbXBvbmVudDogTnpUYWJsZUNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlSW5wdXROdW1iZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXROdW1iZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUlucHV0TnVtYmVyJywgeyByZWFkOiBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50IH0pIGlucHV0TnVtYmVyQ29tcG9uZW50OiBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZURhdGVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgZGF0ZVBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlRGF0ZVRpbWVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgZGF0ZVRpbWVQaWNrZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZVNlbGVjdCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBzZWxlY3RFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUJvb2wnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgYm9vbEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChDbWFjc0RhdGVUaW1lUGlja2VyQ29tcG9uZW50KSBkYXRlVGltZVBpY2tlcjogQ21hY3NEYXRlVGltZVBpY2tlckNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKENtYWNzQ29tcGFjdFRhYmxlQ29sdW1uVG9vbHRpcENvbXBvbmVudCkgdG9vbHRpcENvbXBvbmVudDogQ21hY3NDb21wYWN0VGFibGVDb2x1bW5Ub29sdGlwQ29tcG9uZW50O1xyXG5cclxuICAvKiogZW5kIHZpZXcgY2hpbGQgdmFyaWFibGVzICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgY3VycmVudFBob25lU2VsZWN0ZWQoZGF0YTogYW55LCBmaWVsZDogYW55KSB7XHJcbiAgICB0aGlzLmZvcm1QaG9uZUNvbnRyb2wuc2V0VmFsdWUoZGF0YVtmaWVsZC5wcm9wZXJ0eV0gJiYgZGF0YVtmaWVsZC5wcm9wZXJ0eV0ubGVuZ3RoID8gZGF0YVtmaWVsZC5wcm9wZXJ0eV0gOiAnJyk7XHJcbiAgfVxyXG5cclxuICBnZXRQaG9uZUZpZWxkVmFsdWUoZGF0YTogYW55LCBmaWVsZDogYW55KSB7XHJcbiAgICBjb25zdCBwaG9uZUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woZGF0YVtmaWVsZC5wcm9wZXJ0eV0gJiYgZGF0YVtmaWVsZC5wcm9wZXJ0eV0ubGVuZ3RoID8gZGF0YVtmaWVsZC5wcm9wZXJ0eV0gOiAnJylcclxuICAgIHJldHVybiBwaG9uZUNvbnRyb2w7XHJcbiAgfVxyXG5cclxuICBvbkNvdW50cnlDaGFuZ2UoJGV2ZW50KSB7XHJcbiAgICB0aGlzLnBob25lTG9jYXRpb24gPSAkZXZlbnQuZGlhbENvZGU7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1QaG9uZUNvbnRyb2wudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgaGFzUGhvbmVOdW1iZXJFcnJvcihldmVudDogYW55LCBpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsLCBwcm9wZXJ0eTogYW55ID0gbnVsbCwgZmllbGQ6IEZpZWxkID0gbnVsbCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybVBob25lQ29udHJvbC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgY29uc3QgaW5kID0gdGhpcy5mb3JtUGhvbmVDb250cm9sLnZhbHVlLmluZGV4T2YoJysnKTtcclxuICAgICAgaWYgKGluZCA9PT0gLTEpIHtcclxuICAgICAgICB0aGlzLmZvcm1QaG9uZUNvbnRyb2wuc2V0VmFsdWUoYCske3RoaXMucGhvbmVMb2NhdGlvbn1gICsgdGhpcy5mb3JtUGhvbmVDb250cm9sLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnBob25lTG9jYXRpb24gPSAnMSc7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YVtpbmRleF07XHJcbiAgICAgIGRhdGEuY21hY3NFZGl0ZWRQcm9wID0gcHJvcGVydHkgPyBwcm9wZXJ0eSA6IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIGlmIChmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5QaG9uZSkge1xyXG4gICAgICAgIGRhdGFbZmllbGQucHJvcGVydHldID0gZGF0YVtmaWVsZC5wcm9wZXJ0eV0gIT09ICcnID8gdGhpcy5mb3JtUGhvbmVDb250cm9sLnZhbHVlIDogJyc7XHJcbiAgICAgICAgdGhpcy5mb3JtUGhvbmVDb250cm9sLnNldFZhbHVlKCcnKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhdGFbaW5kZXhdID0gZGF0YTtcclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbaW5kZXhdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBmb3JtYXR0ZXIgPSAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBhY2NvdW50aW5nLmZvcm1hdE51bWJlcih2YWx1ZSwgeyBwcmVjaXNpb246IDMsIHRob3VzYW5kOiAnICcsIGRlY2ltYWw6ICcsJyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9O1xyXG4gIHBhcnNlciA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGFjY291bnRpbmcudW5mb3JtYXQodmFsdWUsICcsJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfTtcclxuICBkZWZhdWx0Rm9ybWF0dGVyID0gKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9O1xyXG4gIGRlZmF1bHRQYXJzZXIgPSAodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgb25jb250ZXh0bWVudWV2dCgkZXZlbnQsIGl0ZW0pIHtcclxuICAgIHRoaXMub25jb250ZXh0bWVudS5lbWl0KGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgb3BlbkNvbHVtbk1lbnUoaWR4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDb2x1bW5JZCA9IGlkeDtcclxuICB9XHJcblxyXG4gIG9wZW5Db2x1bW5Nb3JlKGlkeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkTW9yZSA9IGlkeDtcclxuICB9XHJcblxyXG4gIGNsb3NlQ29sdW1uTWVudSgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDb2x1bW5JZCA9IC0xO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VDb2x1bW5Nb3JlKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZE1vcmUgPSAtMTtcclxuICB9XHJcblxyXG4gIG9uRmllbGRDaGFuZ2VkKGlkeDogbnVtYmVyLCBmaWVsZDogRWRpdENvbHVtbkFjdGlvbikge1xyXG4gICAgdGhpcy5zZWxlY3RlZENvbHVtbklkID0gLTE7XHJcbiAgICB0aGlzLnNlbGVjdGVkTW9yZSA9IC0xO1xyXG4gICAgY29uc3QgdmFsdWUgPSB7IGluZGV4OiBpZHgsIGNvbHVtbjogZmllbGQgfTtcclxuICAgIHRoaXMub25lZGl0Y29sdW1uLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25GaWVsZFRhcEVsbGlwc2lzKGlkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmluTGluZUVkaXQgfHwgdGhpcy5kZXZpY2VEZXRlY3Rvci5pc0Rlc2t0b3AoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkRhdGFUYXBFbGxpcHNpcyhpZDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5kZXZpY2VEZXRlY3Rvci5pc0Rlc2t0b3AoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUb29sdGlwRWxsaXBzaXNUcmlnZ2VyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGV2aWNlRGV0ZWN0b3IuaXNEZXNrdG9wKCkgPyAnaG92ZXInIDogJ2NsaWNrJztcclxuICB9XHJcblxyXG4gIGlzRWxsaXBzaXNBY3RpdmUoaWQ6IHN0cmluZywgZmllbGQ6IGFueSkge1xyXG4gICAgaWYgKCFmaWVsZC5zaG93VG9vbHRpcCkgeyByZXR1cm47IH1cclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgaWYgKCFlbCkgeyByZXR1cm47IH1cclxuICAgIHJldHVybiAoZWwub2Zmc2V0V2lkdGggPCBlbC5zY3JvbGxXaWR0aCk7XHJcbiAgfVxyXG5cclxuICBpc1Rvb2x0aXBBY3RpdmUoZGF0YSwgZmllbGQ6IGFueSkge1xyXG4gICAgaWYgKCFmaWVsZC5zaG93VG9vbHRpcCB8fCBmaWVsZC53aWR0aCA9PT0gdW5kZWZpbmVkKSB7IHJldHVybjsgfVxyXG4gICAgbGV0IHdpZHRoID0gZmllbGQud2lkdGg7XHJcbiAgICB3aWR0aCA9IE51bWJlcih3aWR0aC5yZXBsYWNlKCdweCcsICcnKSk7XHJcbiAgICBjb25zdCBzdHJpbmdGaWVsZFZhbHVlID0gdGhpcy5nZXRTdHJpbmdGaWVsZFZhbHVlKGRhdGEsIGZpZWxkKTtcclxuICAgIGlmIChzdHJpbmdGaWVsZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHdpZHRoIDwgdGhpcy5tZWFzdXJlVGV4dChzdHJpbmdGaWVsZFZhbHVlLCAxMik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtZWFzdXJlVGV4dChzdHI6IHN0cmluZywgZm9udFNpemU6IG51bWJlcikge1xyXG4gICAgY29uc3Qgd2lkdGhzID0gW1xyXG4gICAgICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxyXG4gICAgICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLjI3OTY4NzUsIDAuMjc2NTYyNSwgMC4zNTQ2ODc1LCAwLjU1NDY4NzUsXHJcbiAgICAgIDAuNTU0Njg3NSwgMC44ODkwNjI1LCAwLjY2NTYyNSwgMC4xOTA2MjUsIDAuMzMyODEyNSwgMC4zMzI4MTI1LCAwLjM4OTA2MjUsXHJcbiAgICAgIDAuNTgyODEyNSwgMC4yNzY1NjI1LCAwLjMzMjgxMjUsIDAuMjc2NTYyNSwgMC4zMDE1NjI1LCAwLjU1NDY4NzUsXHJcbiAgICAgIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjU1NDY4NzUsXHJcbiAgICAgIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuMjc2NTYyNSwgMC4yNzY1NjI1LCAwLjU4NDM3NSxcclxuICAgICAgMC41ODI4MTI1LCAwLjU4NDM3NSwgMC41NTQ2ODc1LCAxLjAxNDA2MjUsIDAuNjY1NjI1LCAwLjY2NTYyNSwgMC43MjE4NzUsXHJcbiAgICAgIDAuNzIxODc1LCAwLjY2NTYyNSwgMC42MDkzNzUsIDAuNzc2NTYyNSwgMC43MjE4NzUsIDAuMjc2NTYyNSwgMC41LFxyXG4gICAgICAwLjY2NTYyNSwgMC41NTQ2ODc1LCAwLjgzMjgxMjUsIDAuNzIxODc1LCAwLjc3NjU2MjUsIDAuNjY1NjI1LCAwLjc3NjU2MjUsXHJcbiAgICAgIDAuNzIxODc1LCAwLjY2NTYyNSwgMC42MDkzNzUsIDAuNzIxODc1LCAwLjY2NTYyNSwgMC45NDM3NSwgMC42NjU2MjUsXHJcbiAgICAgIDAuNjY1NjI1LCAwLjYwOTM3NSwgMC4yNzY1NjI1LCAwLjM1NDY4NzUsIDAuMjc2NTYyNSwgMC40NzY1NjI1LCAwLjU1NDY4NzUsXHJcbiAgICAgIDAuMzMyODEyNSwgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuNSwgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuMjc2NTYyNSxcclxuICAgICAgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuMjIxODc1LCAwLjI0MDYyNSwgMC41LCAwLjIyMTg3NSwgMC44MzI4MTI1LFxyXG4gICAgICAwLjU1NDY4NzUsIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuMzMyODEyNSwgMC41LCAwLjI3NjU2MjUsXHJcbiAgICAgIDAuNTU0Njg3NSwgMC41LCAwLjcyMTg3NSwgMC41LCAwLjUsIDAuNSwgMC4zNTQ2ODc1LCAwLjI1OTM3NSwgMC4zNTMxMjUsXHJcbiAgICAgIDAuNTg5MDYyNSxcclxuICAgIF07XHJcbiAgICBjb25zdCBhdmcgPSAwLjUyNzkyNzYzMTU3ODk0NzE7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChcclxuICAgICAgc3RyXHJcbiAgICAgICAgLnNwbGl0KCcnKVxyXG4gICAgICAgIC5tYXAoKGMpID0+XHJcbiAgICAgICAgICBjLmNoYXJDb2RlQXQoMCkgPCB3aWR0aHMubGVuZ3RoID8gd2lkdGhzW2MuY2hhckNvZGVBdCgwKV0gOiBhdmdcclxuICAgICAgICApXHJcbiAgICAgICAgLnJlZHVjZSgoY3VyLCBhY2MpID0+IGFjYyArIGN1cikgKiBmb250U2l6ZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldElucHV0TnVtYmVyVmFsdWUoZGF0YTogYW55LCBmaWVsZDogRmllbGQpIHtcclxuXHJcbiAgICBpZiAoIXRoaXMuaXNOdWxsKGRhdGFbZmllbGQucHJvcGVydHldKSkge1xyXG4gICAgICBpZiAoZmllbGQudXNlQ29tbWFNYXJrZXIpIHtcclxuICAgICAgICByZXR1cm4gZGF0YVtmaWVsZC5wcm9wZXJ0eV0udG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJywnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMuaXNOdWxsKGZpZWxkLmZvcm1hdHRlcikpIHtcclxuICAgICAgICByZXR1cm4gZmllbGQuZm9ybWF0dGVyKGRhdGFbZmllbGQucHJvcGVydHldKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZGF0YVtmaWVsZC5wcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmllbGQucGxhY2Vob2xkZXI7XHJcbiAgfVxyXG5cclxuICBnZXRTdHJpbmdGaWVsZFZhbHVlKGRhdGE6IGFueSwgZmllbGQ6IGFueSkge1xyXG4gICAgcmV0dXJuIGRhdGFbZmllbGQucHJvcGVydHldICYmIGRhdGFbZmllbGQucHJvcGVydHldLmxlbmd0aCA/IGRhdGFbZmllbGQucHJvcGVydHldIDogZmllbGQucGxhY2Vob2xkZXI7XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZShldmVudDogTnpSZXNpemVFdmVudCwgY29sOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuX29ucmVzaXplJC5uZXh0KHsgZXZlbnQsIGNvbCwgZmllbGQgfSk7XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZUV2dCh7IHdpZHRoIH06IE56UmVzaXplRXZlbnQsIGNvbDogc3RyaW5nLCBmaWVsZDogRmllbGQpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuZmllbGRzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25maWcuZmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmNvbmZpZy5maWVsZHNbaV07XHJcbiAgICAgICAgaWYgKGZpZWxkLnByb3BlcnR5ID09PSBjb2wpIHtcclxuICAgICAgICAgIGNvbnN0IGVsV2lkdGggPSBmaWVsZC53aWR0aCA/IE51bWJlcihmaWVsZC53aWR0aC5yZXBsYWNlKC9bXlxcZC4tXS9nLCAnJykpIDogMDtcclxuICAgICAgICAgIGlmICh0aGlzLnNjcm9sbC54ICYmIGkgKyAxID09PSB0aGlzLmNvbmZpZy5maWVsZHMubGVuZ3RoIC0gMSAmJiB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdICE9PSBudWxsICYmIHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbFdpZHRoTmV4dCA9IHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ud2lkdGggPyBOdW1iZXIodGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS53aWR0aC5yZXBsYWNlKC9bXlxcZC4tXS9nLCAnJykpIDogMDtcclxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSB3aWR0aCAtIGVsV2lkdGg7XHJcbiAgICAgICAgICAgIGlmIChkZWx0YSA+IDAgJiYgZGVsdGEgPCBlbFdpZHRoTmV4dCkge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLm1pbldpZHRoICE9PSBudWxsICYmIHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ubWluV2lkdGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcih0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLm1pbldpZHRoKSA8IChlbFdpZHRoTmV4dCAtIGRlbHRhKSkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLndpZHRoID0gYCR7ZWxXaWR0aE5leHQgLSBkZWx0YX1weGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ud2lkdGggPSBgJHtlbFdpZHRoTmV4dCAtIGRlbHRhfXB4YDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ud2lkdGggPSBgJHtlbFdpZHRoTmV4dCAtIGRlbHRhfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZmllbGQud2lkdGggPSBgJHt3aWR0aH1weGA7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMub25yZXNpemUuZW1pdCh7IGNvbDogY29sLCBjb25maWc6IHRoaXMuY29uZmlnIH0pO1xyXG4gICAgdGhpcy5jb25maWdDaGFuZ2UuZW1pdCh0aGlzLmNvbmZpZyk7XHJcbiAgICBpZiAodGhpcy5ncmlkSUQgPT09IG51bGwgfHwgdGhpcy5ncmlkSUQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5oYXNDb29raWVzICYmIHRoaXMuZ2V0SW5kZXhDb29raWUoKSkge1xyXG4gICAgICB0aGlzLmNvb2tpZXMuc2V0KHRoaXMuZ3JpZElELCBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbmZpZyksIDM2NSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2ZW50RGVmYXVsdCgkZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIC8qQ29udGV4dCBNZW51ICovXHJcbiAgY29udGV4dE1lbnUoJGV2ZW50OiBNb3VzZUV2ZW50LCB0ZW1wbGF0ZTogYW55LCBpdGVtOiBhbnkgPSBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uY29udGV4dG1lbnVldnQoJGV2ZW50LCBpdGVtKTtcclxuICAgIHRoaXMuZHJvcGRvd24gPSB0aGlzLm56RHJvcGRvd25TZXJ2aWNlLmNyZWF0ZSgkZXZlbnQsIHRlbXBsYXRlKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKGRhdGE6IGFueSwgZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gICAgaWYgKGZpZWxkLnZhbGlkYXRvcnMpIHtcclxuICAgICAgZm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woZGF0YVtmaWVsZC5wcm9wZXJ0eV0sIGZpZWxkLnZhbGlkYXRvcnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woZGF0YVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgfVxyXG4gICAgZGF0YS52YWxpZCA9IGRhdGEudmFsaWQgPyBkYXRhLnZhbGlkIDoge307XHJcbiAgICBkYXRhLnZhbGlkW2ZpZWxkLnByb3BlcnR5XSA9IGZvcm1Db250cm9sLnZhbGlkO1xyXG4gICAgcmV0dXJuIGZvcm1Db250cm9sLnZhbGlkO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIHdpbGwgbG9vcCB0aHJ1IGV2ZXJ5IGZpZWxkIGluIHRoZSBjb25maWd1cmF0aW9uIGFuZCBzZXQgdGhlIGN1c3RvbSB2YWxpZGF0b3JzIGRlcGVuZGluZyBvbiB0aGUgdmFsaWRhdGlvbiBydWxlc1xyXG4gICAqIGlmIG5vIHZhbGlkYXRpb24gcnVsZSBpcyBwcmVzZW50IHRoaXMgd2lsbCBiZSBpZ25vcmVkXHJcbiAgICovXHJcbiAgc2V0Q3VzdG9tVmFsaWRhdG9ycygpIHtcclxuXHJcbiAgICBpZiAodGhpcy5jb25maWcgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmNvbmZpZyA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29uZmlnLmZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmNvbmZpZy5maWVsZHNbaW5kZXhdO1xyXG5cclxuICAgICAgaWYgKGZpZWxkLnZhbGlkYXRpb25SdWxlID09PSB1bmRlZmluZWQgfHwgZmllbGQudmFsaWRhdGlvblJ1bGUgPT09IG51bGwgfHwgZmllbGQudmFsaWRhdGlvblJ1bGUgPT0gJycpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3dpdGNoIChmaWVsZC52YWxpZGF0aW9uUnVsZSkge1xyXG4gICAgICAgIGNhc2UgJ25vbmUnOiB7XHJcbiAgICAgICAgICBmaWVsZC52YWxpZGF0b3JzID0gW107IC8vIHRoaXMgd2lsbCBub3QgYXBwbHkgYW55IHJ1bGVcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdpcy1ub3QtZW1wdHknOiB7XHJcbiAgICAgICAgICBmaWVsZC52YWxpZGF0b3JzID0gW1ZhbGlkYXRvcnMucmVxdWlyZWRdO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2FmdGVyLWRhdGUnOiB7XHJcbiAgICAgICAgICBmaWVsZC52YWxpZGF0b3JzID0gW2FmdGVyRGF0ZShmaWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnYmVmb3JlLWRhdGUnOiB7XHJcbiAgICAgICAgICBmaWVsZC52YWxpZGF0b3JzID0gW2JlZm9yZURhdGUoZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2lzLWVxdWFsLXRvJzoge1xyXG4gICAgICAgICAgZmllbGQudmFsaWRhdG9ycyA9IGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgPyBbaXNFcXVhbFRvRGF0ZShmaWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV0gOlxyXG4gICAgICAgICAgICBbaXNFcXVhbFRvTnVtYmVyKGZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdpcy1ub3QtZXF1YWwtdG8nOiB7XHJcbiAgICAgICAgICBmaWVsZC52YWxpZGF0b3JzID0gZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZSA/IFtpc05vdEVxdWFsVG9EYXRlKGZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXSA6XHJcbiAgICAgICAgICAgIFtpc05vdEVxdWFsVG9OdW1iZXIoZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ3JhbmdlJzoge1xyXG4gICAgICAgICAgZmllbGQudmFsaWRhdG9ycyA9IGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgPyBbcmFuZ2VEYXRlKGZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0sIGZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMV0pXSA6XHJcbiAgICAgICAgICAgIFtyYW5nZU51bWJlcihmaWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdLCBmaWVsZC52YWxpZGF0aW9uVmFsdWVzWzFdKV07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnZ3JlYXRlci10aGFuJzoge1xyXG4gICAgICAgICAgZmllbGQudmFsaWRhdG9ycyA9IFtncmVhdGVyVGhhbihmaWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnbGVzcy10aGFuJzoge1xyXG4gICAgICAgICAgZmllbGQudmFsaWRhdG9ycyA9IFtsZXNzVGhhbihmaWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDogZmllbGQudmFsaWRhdG9ycyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRSb3coaWR4OiBudW1iZXIsICRldmVudCA9IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMub25yb3dhZGRlZC5lbWl0KGlkeCk7XHJcbiAgICB0aGlzLmVkaXRpb25PcFRyaWdnZXJlZCA9IHRydWU7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHQoJGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZGNvbHVtbihpZHg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5vbmNvbHVtbmFkZGVkLmVtaXQoKytpZHgpO1xyXG4gIH1cclxuXHJcbiAgY21hY3NFZGl0ZWRJbnB1dChldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFkZGVkT3B0aW9uID0gZXZlbnQ7XHJcbiAgfVxyXG5cclxuICBhZGRPcHRpb24oaW5kZXg6IG51bWJlciwgZGF0YTogYW55ID0gbnVsbCwgcHJvcGVydHk6IGFueSA9IG51bGwsIGZpZWxkOiBGaWVsZCA9IG51bGwpIHtcclxuICAgIHRoaXMub25Ecm9wZG93blJlbmRlci5lbWl0KHRoaXMuYWRkZWRPcHRpb24pO1xyXG4gICAgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPSB0aGlzLmFkZGVkT3B0aW9uO1xyXG4gICAgdGhpcy5lbmRFZGl0TW9kZU5nTW9kZWwoaW5kZXgsIGRhdGEgLHByb3BlcnR5LCBmaWVsZCk7XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kcmFnZ2FibGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIHRoaXMuZGF0YSA9IFsuLi50aGlzLmRhdGFdO1xyXG4gICAgdGhpcy5vbmRyb3AuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVSb3coaWR4OiBudW1iZXIsICRldmVudCA9IG51bGwpOiB2b2lkIHtcclxuICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9IHRoaXMuZGF0YVtpZHhdO1xyXG4gICAgdGhpcy5vbnJvd2RlbGV0ZWQuZW1pdChpdGVtVG9SZW1vdmUpO1xyXG4gICAgdGhpcy5lZGl0aW9uT3BUcmlnZ2VyZWQgPSB0cnVlO1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0KCRldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydEVkaXQoaWQ6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5MaW5lRWRpdCkge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChkYXRhW3RoaXMuZmllbGRJRF0pIHx8IHRoaXMuaXNSb3dTZWxlY3RlZChkYXRhKSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmlzTnVsbChkYXRhLm5vdEVkaXRhYmxlRmllbGRzKVxyXG4gICAgICAgICYmIGRhdGEubm90RWRpdGFibGVGaWVsZHMuZmlsdGVyKHggPT4geCA9PT0gcHJvcGVydHkpLmxlbmd0aFxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZWRpdElkICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVkaXRJZCA9IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF07XHJcbiAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLmZvY3VzU2VsZWN0KHRoaXMuaW5wdXRFbGVtZW50KTtcclxuICAgICAgaWYgKHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmZvY3VzU2VsZWN0KHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQuaW5wdXRFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kYXRlVGltZVBpY2tlcikge1xyXG4gICAgICAgIHRoaXMuZm9jdXNTZWxlY3QodGhpcy5kYXRlVGltZVBpY2tlci5pbnB1dFJlZik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzU2VsZWN0KGVsZW06IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGVsZW0pIHtcclxuICAgICAgZWxlbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW0ubmF0aXZlRWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNvcnQoJGV2ZW50OiBhbnksIGZpZWxkUHJvcGVydHk6IHN0cmluZywpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uc29ydCQubmV4dCh7IHNvcnROYW1lOiBmaWVsZFByb3BlcnR5LCBzb3J0VmFsdWU6ICRldmVudCB9KTtcclxuICB9XHJcblxyXG4gIGZpbHRlcigkZXZlbnQ6IGFueSwgZmllbGRQcm9wZXJ0eTogc3RyaW5nLCk6IHZvaWQge1xyXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7IGZpbHRlck5hbWU6IGZpZWxkUHJvcGVydHksIGZpbHRlclZhbHVlOiAkZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRIZWFkZXJNYXhXaWR0aChmaWVsZDogRmllbGQpOiBzdHJpbmcge1xyXG4gICAgaWYgKGZpZWxkLnNob3dTb3J0ICYmIGZpZWxkLnNob3dGaWx0ZXIpIHtcclxuICAgICAgcmV0dXJuIGBjYWxjKDEwMCUgLSA4MnB4KWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmaWVsZC5zaG93U29ydCB8fCBmaWVsZC5zaG93RmlsdGVyKSB7XHJcbiAgICAgIHJldHVybiBgY2FsYygxMDAlIC0gNThweClgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuYWRkQ29sdW1uID8gYGNhbGMoMTAwJSAtIDE1cHgpYCA6IGAxMDAlYDtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNlZG93bicsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlTW91c2VEb3duKGU6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgZWxlbWVudENvbHVtbk1vcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFjdFRhYmxlQ29sdW1uTW9yZScpO1xyXG4gICAgY29uc3QgZWxlbWVudENvbHVtblRvb2x0aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFjdFRhYmxlQ29sdW1uVG9vbHRpcCcpO1xyXG5cclxuICAgIGlmIChlbGVtZW50Q29sdW1uTW9yZSAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIGVsZW1lbnRDb2x1bW5Nb3JlKSkge1xyXG4gICAgICB0aGlzLmNsb3NlQ29sdW1uTW9yZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsZW1lbnRDb2x1bW5Ub29sdGlwICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgZWxlbWVudENvbHVtblRvb2x0aXApKSB7XHJcbiAgICAgIGlmICh0aGlzLnRvb2x0aXBDb21wb25lbnQgIT09IG51bGwgJiYgdGhpcy50b29sdGlwQ29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnRvb2x0aXBDb21wb25lbnQudXBkYXRlRGlzcGxheSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xvc2VDb2x1bW5NZW51KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZWRpdElkICYmIHRoaXMucHJvcGVydHkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICh0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCkgfHxcclxuICAgICAgICAodGhpcy5pbnB1dE51bWJlckVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmlucHV0TnVtYmVyRWxlbWVudC5uYXRpdmVFbGVtZW50KSkgfHxcclxuICAgICAgICAodGhpcy5kYXRlUGlja2VyRWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuZGF0ZVRpbWVQaWNrZXJFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5kYXRlVGltZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuc2VsZWN0RWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuc2VsZWN0RWxlbWVudC5uYXRpdmVFbGVtZW50KSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQpIHtcclxuICAgICAgICAgIHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQuYmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRlVGltZVBpY2tlcikge1xyXG4gICAgICAgICAgdGhpcy5kYXRlVGltZVBpY2tlci5zZXRDdXJyZW50VmFsdWVBbmRDbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3VzdG9tUGFkZGluZyhpdGVtOiBhbnksIGk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAoIWkpIHtcclxuICAgICAgaWYgKCFpdGVtLmxldmVsKSB7XHJcbiAgICAgICAgcmV0dXJuICEhaXRlbS5jaGlsZHJlbiA/IDYgOiAyODtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5sZXZlbCAqIHRoaXMuaW5kZW50U2l6ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDY7XHJcbiAgfVxyXG5cclxuICBjaGlsZE9mKG5vZGU6IGFueSwgYW5jZXN0b3I6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGNoaWxkID0gbm9kZTtcclxuICAgIHdoaWxlIChjaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICBpZiAoY2hpbGQgPT09IGFuY2VzdG9yKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QgJiYgY2hpbGQuY2xhc3NMaXN0Lmxlbmd0aCA+IDAgJiYgY2hpbGQuY2xhc3NOYW1lICYmIHR5cGVvZiBjaGlsZC5jbGFzc05hbWUgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgJiYgY2hpbGQuY2xhc3NOYW1lLmluZGV4T2YoJ2Nkay1vdmVybGF5LXBhbmUnKSA+PSAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICBjb25zdCBub2RlID0gY2hpbGQuY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSAnQ01BQ1MtTU9EQUwnKSB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfTtcclxuICAgICAgY2hpbGQgPSBjaGlsZC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGUoJGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCRldmVudC5rZXkgPT09ICgnRW50ZXInIHx8ICdlbnRlcicpKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgZGF0YS5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICAgICAgdGhpcy5vbmVkaXQuZW1pdChkYXRhKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhW2luZGV4XS5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgdGhpcy5ub2RlT25FZGl0aW9uID0gZGF0YTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSBpbmRleDtcclxuICAgICAgfVxyXG4gICAgfSwgMzAwKVxyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGVOZ01vZGVsKGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSA9IG51bGwsIHByb3BlcnR5OiBhbnkgPSBudWxsLCBmaWVsZDogRmllbGQgPSBudWxsKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIGRhdGEuY21hY3NFZGl0ZWRQcm9wID0gcHJvcGVydHkgPyBwcm9wZXJ0eSA6IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIGlmIChmaWVsZCAmJiBmaWVsZC5tb2RlID09PSAndGFnc1NpbmdsZVNlbGVjdCcpIHtcclxuICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9IGRhdGFbZmllbGQucHJvcGVydHldLmxlbmd0aCA/IGRhdGFbZmllbGQucHJvcGVydHldWzBdIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KGRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YVtpbmRleF07XHJcbiAgICAgIGRhdGEuY21hY3NFZGl0ZWRQcm9wID0gcHJvcGVydHkgPyBwcm9wZXJ0eSA6IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIGlmIChmaWVsZCAmJiBmaWVsZC5tb2RlID09PSAndGFnc1NpbmdsZVNlbGVjdCcpIHtcclxuICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9IGRhdGFbZmllbGQucHJvcGVydHldLmxlbmd0aCA/IGRhdGFbZmllbGQucHJvcGVydHldWzBdIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVtpbmRleF0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNCb29sZWFuKGZpZWxkKSkge1xyXG4gICAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tib3hTZWxlY3QgJiYgIXRoaXMuZ2V0Tm9kZShkYXRhW3RoaXMuZmllbGRJRF0pLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICB0aGlzLm9uQ2hlY2tib3hUcmVlQ2hhbmdlKHRydWUsIGRhdGEsIHRoaXMubWFwT2ZFeHBhbmRlZERhdGFbZGF0YVt0aGlzLmZpZWxkSURdXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrYm94U2VsZWN0ICYmICF0aGlzLnNlbGVjdGlvbi5pc1NlbGVjdGVkKGRhdGFbdGhpcy5maWVsZElEXSkpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0VHJlZVNpbmdsZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUm93U2VsZWN0ZWQoZGF0YSkpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0Um93KG5ldyBNb3VzZUV2ZW50KCdjbGljaycpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICB0aGlzLnJvd09uRWRpdGlvbiA9IC0xO1xyXG4gICAgdGhpcy5ub2RlT25FZGl0aW9uID0gbnVsbDtcclxuICB9XHJcblxyXG4gIG5nTW9kZWxDaGFuZ2UoaW5kZXg6IG51bWJlciwgZGF0YTogYW55ID0gbnVsbCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICB0aGlzLm5vZGVPbkVkaXRpb24gPSBkYXRhO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJvd09uRWRpdGlvbiA9IGluZGV4O1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXgoaWQpOiBudW1iZXIge1xyXG4gICAgbGV0IGkgPSAtMTtcclxuICAgIGkgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBpZCk7XHJcbiAgICByZXR1cm4gaTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjaGVja2JveFRlbXBDYWNoZSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2hlY2tib3hUZW1wQ2FjaGUucHVzaCh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkID8gZmFsc2UgOiB0aGlzLmRhdGFbaV0uc2VsZWN0ZWQsXHJcbiAgICAgICAgZGF0YTogeyAuLi50aGlzLmRhdGFbaV0gfSxcclxuICAgICAgICBvcmRlcjogdGhpcy5kYXRhW2ldLnNlbGVjdGVkID8gdGhpcy5vcmRlcisrIDogLTFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUgPSBbLi4uY2hlY2tib3hUZW1wQ2FjaGVdO1xyXG4gICAgaWYgKHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkKSB7XHJcbiAgICAgIHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2JveENhY2hlVHJlZURhdGEoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnZlcnRFeHBhbmRUcmVlVG9MaXN0KHRoaXMuZGF0YSwgdGhpcy5jaGVja2JveENhY2hlKTtcclxuICB9XHJcblxyXG4gIGNsaWNrSHlwZXJsaW5rKGRhdGE6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5vbmNsaWNrSHlwZXJsaW5rLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0RXhwYW5kVHJlZVRvTGlzdChpdGVtOiBhbnksIHBsYWluTGlzdDogYW55W10pOiB2b2lkIHtcclxuICAgIGlmIChpc0FycmF5KGl0ZW0pKSB7XHJcbiAgICAgIGl0ZW0uZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50SW5DYWNoZSA9IHBsYWluTGlzdC5maW5kSW5kZXgoZWwgPT4gZWwuZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gZWxlbVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRJbkNhY2hlIDwgMCkge1xyXG4gICAgICAgICAgcGxhaW5MaXN0LnB1c2goe1xyXG4gICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIG9yZGVyOiAtMSxcclxuICAgICAgICAgICAgZGF0YTogeyAuLi5lbGVtIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsZW0uY2hpbGRyZW4gJiYgZWxlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnZlcnRFeHBhbmRUcmVlVG9MaXN0KGVsZW0uY2hpbGRyZW4sIHBsYWluTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRJbkNhY2hlID0gcGxhaW5MaXN0LmZpbmRJbmRleChlbCA9PiBlbC5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBpdGVtW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgICAgaWYgKGVsZW1lbnRJbkNhY2hlIDwgMCkge1xyXG4gICAgICAgIHBsYWluTGlzdC5wdXNoKHtcclxuICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgIG9yZGVyOiAtMSxcclxuICAgICAgICAgIGRhdGE6IHsgLi4uaXRlbSB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQnV0dG9uQ2xpY2soZmllbGQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5idXR0b25DbGljay5lbWl0KGZpZWxkKTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hDaGFuZ2UoJGV2ZW50LCBkYXRhKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5nZXRJbmRleChkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKV0ub3JkZXIgPSAkZXZlbnQgPyB0aGlzLm9yZGVyKysgOiAtMTtcclxuICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hDaGVja2JveFN0YXRlKG9uaW5pdCA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgaWYgKCFvbmluaXQpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChkYXRhU2VsZWN0ZWQubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0NoZWNrYm94U3RhdGUoKTogQ2hlY2tib3hTZWxlY3RbXSB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCA9PT0gdHJ1ZSkuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuYWxsQ2hlY2tlZCA9IChkYXRhU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAoZGF0YVNlbGVjdGVkLmxlbmd0aCA9PT0gdGhpcy5jaGVja2JveENhY2hlLmxlbmd0aCkpO1xyXG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPSBkYXRhU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAhdGhpcy5hbGxDaGVja2VkO1xyXG4gICAgcmV0dXJuIGRhdGFTZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICBvblJhdGVDaGFuZ2UoY291bnQ6IG51bWJlciwgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICBkYXRhW3RoaXMuY29uZmlnLmZpZWxkUmF0ZV0gPSBjb3VudDtcclxuICAgIHRoaXMucmF0ZUNoYW5nZS5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgb25SYXRlQ2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRzKCk6IEZpZWxkW10ge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmZpZWxkcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uaGlkZGVuID09PSB1bmRlZmluZWQgfHwgIWl0ZW0uaGlkZGVuKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hBbGxDaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHN0YXR1cztcclxuICAgICAgZWxlbWVudC5vcmRlciA9IC0xO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlzSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmICghdGhpcy5leGNsdXNpdmVTZWxlY3QpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCgoc3RhdHVzKSA/IHRoaXMuZGF0YSA6IFtdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRhdGFTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoKHN0YXR1cykgPyBkYXRhU2VsZWN0ZWQubWFwKGUgPT4gZS5kYXRhKSA6IFtdKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbChkYXRhOiBhbnksIGZpZWxkOiBGaWVsZCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0ICYmIGZpZWxkLnNlbGVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgY29uc3QgaXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQoaXRlbSA9PiBpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbVtmaWVsZC5zZWxlY3QudmFsdWVdID09PSBkYXRhW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICAgIHJlc3VsdCA9IChpdGVtICE9PSB1bmRlZmluZWQpID8gaXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdIDogJyc7XHJcbiAgICAgIGlmIChmaWVsZC5tb2RlID09PSAndGFnc1NpbmdsZVNlbGVjdCcgJiYgcmVzdWx0ID09PSAnJykge1xyXG4gICAgICAgIHJlc3VsdCA9IGRhdGFbZmllbGQucHJvcGVydHldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gIH1cclxuXHJcbiAgaXNTdHJpbmcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQucmVhZG9ubHkgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5yZWFkb25seTtcclxuICB9XHJcblxyXG4gIGlzTnVtYmVyKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgaXNOdWxsKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaXNCb29sZWFuKGZpZWxkOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gbnVsbCAmJiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgfVxyXG5cclxuICBpc09iamVjdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgKHZhbHVlKSA9PT0gJ29iamVjdCc7XHJcbiAgfVxyXG5cclxuICBpc0RhdGUoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gIH1cclxuXHJcbiAgaXNUaW1lKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVEZWZhdWx0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlQnV0dG9uKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkJ1dHRvbjtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUYWcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGFnO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRlbXBsYXRlUmVmKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZUh5cGVybGluayhmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5IeXBlcmxpbmsgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgaXNQaG9uZShmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlBob25lO1xyXG4gIH1cclxuXHJcbiAgaXNBdHRhY2htZW50KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuQXR0YWNobWVudDtcclxuICB9XHJcblxyXG4gIGlzVW5kZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaXNSb3dTZWxlY3RlZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICBjb25zdCBkYXRhU2VsZWN0ZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICByZXR1cm4gZGF0YVNlbGVjdGQuaW5kZXhPZihkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSAhPT0gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfb25DaGFuZ2VBdHRhY2htZW50cyhldmVudDphbnksaW5kZXg6IG51bWJlcixmaWVsZDphbnkpIHtcclxuICAgIHRoaXMuZGF0YVtpbmRleF1bZmllbGRdID0gZXZlbnQ7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQXR0YWNobWVudHMuZW1pdCh0aGlzLmRhdGFbaW5kZXhdKTtcclxuICB9XHJcblxyXG4gIF9vbmNsaWNrQ2hvb3NlRmlsZShpbmRleDogbnVtYmVyLGZpZWxkOmFueSl7XHJcbiAgICB0aGlzLm9uY2xpY2tDaG9vc2VGaWxlLmVtaXQoe3Jvdzp0aGlzLmRhdGFbaW5kZXhdLGluZGV4Q29sOmZpZWxkfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5oYXNDb29raWVzICYmIHRoaXMuZ2V0SW5kZXhDb29raWUoKSAmJiB0aGlzLmNvb2tpZXMuY2hlY2sodGhpcy5ncmlkSUQpKSB7XHJcbiAgICAgIGNvbnN0IHNhdmVkQ29uZmlnU3RyID0gdGhpcy5jb29raWVzLmdldCh0aGlzLmdyaWRJRCk7XHJcbiAgICAgIC8vIHJlc2V0IGV4cGlyYXRpb24gZGF0ZVxyXG4gICAgICB0aGlzLmNvb2tpZXMuc2V0KHRoaXMuZ3JpZElELCBzYXZlZENvbmZpZ1N0ciwgMzY1KTtcclxuXHJcbiAgICAgIC8vIHBhcnNlIGNvb2tpZSB2YWx1ZSB0byB0eXBlc2NyaXB0IGNvbnN0XHJcbiAgICAgIGNvbnN0IHNhdmVkQ29uZmlnID0gSlNPTi5wYXJzZSh0aGlzLmNvb2tpZXMuZ2V0KHRoaXMuZ3JpZElEKSkgYXMgR3JpZENvbmZpZztcclxuICAgICAgaWYgKHR5cGVvZiBzYXZlZENvbmZpZyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHNhdmVkQ29uZmlnO1xyXG4gICAgICAgIHRoaXMuY29uZmlnQ2hhbmdlLmVtaXQodGhpcy5jb25maWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmRpc2FibGVTZWxlY3RFdmVudE9uRXhwYW5kKCk7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlU2VsZWN0RXZlbnRPbkV4cGFuZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FudC10YWJsZS1yb3ctZXhwYW5kLWljb24nKTtcclxuICAgIGlmICghdGhpcy5pc051bGwoZXhwYW5kQnV0dG9uKSkge1xyXG4gICAgICBmb3IgKGNvbnN0IGIgb2YgQXJyYXkuZnJvbShleHBhbmRCdXR0b24pKSB7XHJcbiAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgkZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KCRldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGdldEluZGV4Q29va2llKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgICAvKmxldCBhbGxvd0luZGV4UGFnZUNvb2tpZSA9IGZhbHNlO1xyXG4gICAgbGV0IGNvbnNlbnRDb29raWUgPSB0aGlzLmNvb2tpZXMuZ2V0KCdPcHRhbm9uQ29uc2VudCcpO1xyXG4gICAgaWYgKGNvbnNlbnRDb29raWUgIT0gXCJcIikge1xyXG4gICAgICBsZXQgZ3JvdXBJbmRleCA9IGNvbnNlbnRDb29raWUuaW5kZXhPZignZ3JvdXBzPScpO1xyXG4gICAgICBsZXQgZ3JvdXBzID0gY29uc2VudENvb2tpZS5zdWJzdHJpbmcoZ3JvdXBJbmRleCk7IC8vd2lsbCByZXR1cm4gc29tZXRoaW5nbGlrZSBncm91cHM9QzAwMDI6MCxDMDAwMToxXHJcbiAgICAgIGxldCBmdW5jdGlvbmFsR3JvdXBJbmRleCA9IGdyb3Vwcy5pbmRleE9mKCdDMDAwOTonKTtcclxuICAgICAgaWYgKGZ1bmN0aW9uYWxHcm91cEluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlWYWx1ZSA9IGdyb3Vwcy5zdWJzdHJpbmcoZnVuY3Rpb25hbEdyb3VwSW5kZXggKyA2LCBmdW5jdGlvbmFsR3JvdXBJbmRleCArIDcpO1xyXG4gICAgICAgIGlmIChOdW1iZXIoY2F0ZWdvcnlWYWx1ZSkgPT09IDEpIHtcclxuICAgICAgICAgIGFsbG93SW5kZXhQYWdlQ29va2llID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhbGxvd0luZGV4UGFnZUNvb2tpZTsqL1xyXG4gIH1cclxuXHJcbiAgc2V0RmllbGRzRGVmYXVsdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5maWVsZHMpIHtcclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGZpZWxkLmVkaXRhYmxlID0gZmllbGQuZWRpdGFibGUgPT09IG51bGwgfHwgZmllbGQuZWRpdGFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmaWVsZC5lZGl0YWJsZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5ncmlkSUQpIHtcclxuICAgICAgdGhpcy5ncmlkSUQgPSB0aGlzLnV0aWxTZXJ2aWNlLnV1aWR2NCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0Q3VzdG9tVmFsaWRhdG9ycygpO1xyXG5cclxuICAgIHRoaXMuc2V0RmllbGRzRGVmYXVsdCgpO1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGFibGUnKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5jaGVja2JveFNlbGVjdCAmJiAhdGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrYm94U2VsZWN0ICYmIHRoaXMuZXhwYW5kYWJsZSAmJiB0aGlzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGVUcmVlRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hlY2tDaGVja2JveFN0YXRlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlICYmIHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHdoaWxlICh0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dQYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5leHBvcnRFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChjb25maWc6IEdyaWRFeHBDb25maWcpID0+IHtcclxuICAgICAgc3dpdGNoIChjb25maWcuZXhwb3J0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5QZGY6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvUGRmKGNvbmZpZyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuWHNseDpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9FeGNlbChjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlBuZzpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9QbmcoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5QZGZUcmVlOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUcmVlUGRmKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuWHNseFRyZWU6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRyZWVFeGNlbChjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qIENvbnZlcnQgdHJlZSB0byBsaXN0IGlmIGV4cGFuZGFibGUgKi9cclxuICAgIGlmICh0aGlzLmV4cGFuZGFibGUgJiYgdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhpcy5maWVsZElEID0gdGhpcy5jb25maWcuZmllbGRJZDtcclxuICAgICAgY29uc3QgY29lcmNlRGF0YSA9IHRoaXMuZGF0YSBhcyBhbnlbXTtcclxuICAgICAgY29lcmNlRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHRoaXMubWFwT2ZFeHBhbmRlZERhdGFbaXRlbVt0aGlzLmZpZWxkSURdXSA9IHRoaXMuY29udmVydFRyZWVUb0xpc3QoaXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0Q29tcGxldGVkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydENvbXBsZXRlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hlY2tTb3J0RXZlbnQoKTtcclxuICAgIHRoaXMuY2hlY2tSZXNpemVFdmVudCgpO1xyXG5cclxuICAgIC8vIERST1BET1dOIE1FTlUgQURWQU5DRUQgQ09ORklHVVJBVElPTlxyXG4gICAgdGhpcy5pc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IGZhbHNlO1xyXG5cclxuICB9XHJcblxyXG4gIGNoZWNrU29ydEV2ZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbnNvcnRvYnMucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuX29ucmVzaXplJCksXHJcbiAgICAgIGRlbGF5KDMwMCksXHJcbiAgICAgIHJlcGVhdCgpLFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICkuc3Vic2NyaWJlKChvYmo6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBmID0gdGhpcy5jb25maWcuZmllbGRzLmZpbmQoZWwgPT4gZWwucHJvcGVydHkgPT09IG9iai5zb3J0TmFtZSk7XHJcbiAgICAgIGYuc29ydE9yZGVyID0gb2JqLnNvcnRWYWx1ZTtcclxuICAgICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoeyBzb3J0TmFtZTogb2JqLnNvcnROYW1lLCBzb3J0VmFsdWU6IG9iai5zb3J0VmFsdWUgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrUmVzaXplRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9ucmVzaXplb2JzLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgKS5zdWJzY3JpYmUoKG9iajogeyBldmVudDogTnpSZXNpemVFdmVudCwgY29sOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCB9KSA9PiB7XHJcbiAgICAgIHRoaXMuY29uZmlnID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmNvbmZpZykpXHJcbiAgICAgIHRoaXMub25SZXNpemVFdnQob2JqLmV2ZW50LCBvYmouY29sLCBvYmouZmllbGQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgICB0aGlzLm1hcE9mRXhwYW5kZWREYXRhID0ge307XHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGUgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZVRyZWVEYXRhKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZmllbGRJRCA9IHRoaXMuY29uZmlnLmZpZWxkSWQ7XHJcbiAgICAgICAgY29uc3QgY29lcmNlRGF0YSA9IHRoaXMuZGF0YSBhcyBhbnlbXTtcclxuICAgICAgICBjb2VyY2VEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGlzLm1hcE9mRXhwYW5kZWREYXRhW2l0ZW1bdGhpcy5maWVsZElEXV0pIHtcclxuICAgICAgICAgICAgdGhpcy5tYXBPZkV4cGFuZGVkRGF0YVtpdGVtW3RoaXMuZmllbGRJRF1dID0gdGhpcy5jb252ZXJ0VHJlZVRvTGlzdChpdGVtKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSgpO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLnNldEZpZWxkc0RlZmF1bHQoKTtcclxuICAgICAgdGhpcy5zZXRDdXN0b21WYWxpZGF0b3JzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmRpc2FibGVTZWxlY3RFdmVudE9uRXhwYW5kKCk7XHJcbiAgfVxyXG5cclxuICAvKiBFeHBhbmRhYmxlIFJvd3MgKi9cclxuICBleHBvcnRUcmVlUGRmKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRvYyA9IG5ldyBqc1BERigpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IFtdO1xyXG4gICAgY29uc3Qgcm93cyA9IFtdO1xyXG5cclxuICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0KS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgY29sdW1ucy5wdXNoKGZpZWxkLmRpc3BsYXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgY29sdW1ucy5wdXNoKGZpZWxkLmRpc3BsYXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5leHBvcnRUcmVlVG9QZGZSZWMocm93cywgdGhpcy5kYXRhLCAwKTtcclxuXHJcbiAgICAvKmRvYy5hdXRvVGFibGUoe1xyXG4gICAgICB0aGVtZTogJ3N0cmlwZWQnLFxyXG4gICAgICBtYXJnaW46IHsgdG9wOiA1IH0sXHJcbiAgICAgIGJvZHk6IHJvd3MsXHJcbiAgICAgIGNvbHVtbnNcclxuICAgIH0pOyovXHJcblxyXG4gICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoJ0RELk1NLllZWVkuSEgubW0uc3MnKSArICdfJyArIGZpbGVOYW1lICsgJy5wZGYnO1xyXG4gICAgZG9jLnNhdmUoZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VHJlZVRvUGRmUmVjKHJvd3M6IGFueSwgZGF0YTogYW55LCBvZmZTZXRNYXJnaW4gPSAwKTogdm9pZCB7XHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBpdGVtVG9FeHBvcnQgPSBbXTtcclxuICAgICAgY29uc3QgY29lcmNlZEl0ZW0gPSBpdGVtIGFzIGFueTtcclxuICAgICAgbGV0IHBhcmVudFN0eWxlczogYW55ID0geyBjZWxsUGFkZGluZzogWzIsIDIsIDIsIDJdIH07XHJcblxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8XHJcbiAgICAgICAgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goKGZpZWxkLCBpZHgpID0+IHtcclxuXHJcbiAgICAgICAgICBwYXJlbnRTdHlsZXMgPSB7IGNlbGxQYWRkaW5nOiBbMiwgMiwgMiwgMl0gfTtcclxuICAgICAgICAgIGlmICghaWR4KSB7XHJcbiAgICAgICAgICAgIHBhcmVudFN0eWxlcy5jZWxsUGFkZGluZyA9IFsyLCAyLCAyLCAyICsgb2ZmU2V0TWFyZ2luXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoY29lcmNlZEl0ZW0uY2hpbGRyZW4gJiYgY29lcmNlZEl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHBhcmVudFN0eWxlcy5maWxsQ29sb3IgPSBbMTUzLCAyMDQsIDI1NV07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHsgY29udGVudDogaXRlbVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dC5leHBvcnRWYWx1ZSwgc3R5bGVzOiBwYXJlbnRTdHlsZXMgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGZpZWxkLmVkaXRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlNlbGVjdDpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goeyBjb250ZW50OiBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF0sIHN0eWxlczogcGFyZW50U3R5bGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuRGF0ZTpcclxuICAgICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHsgY29udGVudDogdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oaXRlbVtmaWVsZC5wcm9wZXJ0eV0sICdNTU1NIGRkIHl5eXknKSwgc3R5bGVzOiBwYXJlbnRTdHlsZXMgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5UaW1lOlxyXG4gICAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goeyBjb250ZW50OiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShpdGVtW2ZpZWxkLnByb3BlcnR5XSwgJ2g6bW0gYScpLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7IGNvbnRlbnQ6IGl0ZW1bZmllbGQucHJvcGVydHldLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgcm93cy5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcbiAgICAgIGlmIChjb2VyY2VkSXRlbS5jaGlsZHJlbiAmJiBjb2VyY2VkSXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmV4cG9ydFRyZWVUb1BkZlJlYyhyb3dzLCBjb2VyY2VkSXRlbS5jaGlsZHJlbiwgNSArIG9mZlNldE1hcmdpbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRUcmVlVG9MaXN0KHJvb3Q6IGFueSk6IGFueVtdIHtcclxuICAgIGNvbnN0IHN0YWNrOiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgYXJyYXk6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBoYXNoTWFwID0ge307XHJcbiAgICBzdGFjay5wdXNoKHsgLi4ucm9vdCwgbGV2ZWw6IDAsIGV4cGFuZDogdGhpcy5leHBhbmRBbGwgPyB0aGlzLmV4cGFuZEFsbCA6IHJvb3QuZXhwYW5kIH0pO1xyXG5cclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGggIT09IDApIHtcclxuICAgICAgY29uc3Qgbm9kZSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLCBoYXNoTWFwLCBhcnJheSk7XHJcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIHN0YWNrLnB1c2goXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAuLi5ub2RlLmNoaWxkcmVuW2ldLFxyXG4gICAgICAgICAgICAgIGxldmVsOiBub2RlLmxldmVsICsgMSxcclxuICAgICAgICAgICAgICBleHBhbmQ6IHRoaXMuZXhwYW5kQWxsID8gdGhpcy5leHBhbmRBbGwgOiBub2RlLmNoaWxkcmVuW2ldLmV4cGFuZCxcclxuICAgICAgICAgICAgICBwYXJlbnQ6IG5vZGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgdmlzaXROb2RlKG5vZGU6IGFueSwgaGFzaE1hcDogYW55LCBhcnJheTogYW55W10pOiB2b2lkIHtcclxuICAgIGlmICghaGFzaE1hcFtub2RlW3RoaXMuZmllbGRJRF1dKSB7XHJcbiAgICAgIGhhc2hNYXBbbm9kZVt0aGlzLmZpZWxkSURdXSA9IHRydWU7XHJcbiAgICAgIGFycmF5LnB1c2gobm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBFeHBhbmRDb2xsYXBzZShhcnJheTogYW55W10sIGRhdGE6IGFueSwgJGV2ZW50OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoJGV2ZW50ID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmNvbGxhcHNlQ2hpbGRyZW4oYXJyYXksIGRhdGEsICRldmVudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uUm93RXhwYW5kQ29sbGFwc2UuZW1pdCh7IGRhdGEsICRldmVudCB9KTtcclxuICB9XHJcbiAgY29sbGFwc2VDaGlsZHJlbihhcnJheTogYW55W10sIGRhdGE6IGFueSwgJGV2ZW50OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoJGV2ZW50ID09PSBmYWxzZSkge1xyXG4gICAgICBpZiAoZGF0YS5jaGlsZHJlbikge1xyXG4gICAgICAgIGRhdGEuY2hpbGRyZW4uZm9yRWFjaChkID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGFycmF5LmZpbmQoYSA9PiBhW3RoaXMuZmllbGRJRF0gPT09IGRbdGhpcy5maWVsZElEXSkhO1xyXG4gICAgICAgICAgdGFyZ2V0LmV4cGFuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5jb2xsYXBzZUNoaWxkcmVuKGFycmF5LCB0YXJnZXQsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hUcmVlQ2hhbmdlKCRldmVudCwgaXRlbSwgc3VidHJlZSA9IG51bGwpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5leGNsdXNpdmVTZWxlY3QpIHtcclxuICAgICAgdGhpcy51cGRhdGVUcmVlQ2hlY2tib3hlcygkZXZlbnQsIGl0ZW0pO1xyXG4gICAgICBjb25zdCBjb2VyY2VkRWxlbSA9IHN1YnRyZWUuZmluZChlID0+IGVbdGhpcy5maWVsZElEXSA9PT0gaXRlbVt0aGlzLmZpZWxkSURdKTtcclxuICAgICAgaWYgKGNvZXJjZWRFbGVtLnBhcmVudCkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFN1YlRyZWVDaGVja2JveGVzKGNvZXJjZWRFbGVtLnBhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUcmVlQ2hlY2tib3hlcygkZXZlbnQ6IGJvb2xlYW4sIGFycmF5OiBhbnkpOiB2b2lkIHtcclxuICAgIGFycmF5LnNlbGVjdGVkID0gJGV2ZW50O1xyXG4gICAgY29uc3Qgbm9kZTogQ2hlY2tib3hTZWxlY3QgPSB0aGlzLmdldE5vZGUoYXJyYXlbdGhpcy5maWVsZElEXSk7XHJcbiAgICBub2RlLnNlbGVjdGVkID0gJGV2ZW50O1xyXG4gICAgbm9kZS5vcmRlciA9ICRldmVudCA/IHRoaXMub3JkZXIrKyA6IC0xO1xyXG4gICAgaWYgKGFycmF5LmNoaWxkcmVuISEpIHtcclxuICAgICAgYXJyYXkuY2hpbGRyZW4uZm9yRWFjaCgoZDogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUcmVlQ2hlY2tib3hlcygkZXZlbnQsIGQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZnJlc2hTdWJUcmVlQ2hlY2tib3hlcyhzdWJ0cmVlKTogdm9pZCB7XHJcbiAgICBpZiAoc3VidHJlZS5jaGlsZHJlbiEhKSB7XHJcbiAgICAgIGxldCBjaGVja2VkID0gMDtcclxuICAgICAgbGV0IGluZGV0ZXJtaW5hdGUgPSAwO1xyXG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHN1YnRyZWUuY2hpbGRyZW4pIHtcclxuICAgICAgICBjb25zdCBub2RlOiBDaGVja2JveFNlbGVjdCA9IHRoaXMuZ2V0Tm9kZShjaGlsZFt0aGlzLmZpZWxkSURdKTtcclxuICAgICAgICBpZiAobm9kZS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgY2hlY2tlZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9kZS5zZWxlY3RlZCA9PT0gLTEpIHtcclxuICAgICAgICAgIGluZGV0ZXJtaW5hdGUrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgbm9kZTogQ2hlY2tib3hTZWxlY3QgPSB0aGlzLmdldE5vZGUoc3VidHJlZVt0aGlzLmZpZWxkSURdKTtcclxuICAgICAgbm9kZS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAoaW5kZXRlcm1pbmF0ZSB8fCAoY2hlY2tlZCA8IHN1YnRyZWUuY2hpbGRyZW4ubGVuZ3RoICYmIGNoZWNrZWQpKSB7XHJcbiAgICAgICAgbm9kZS5zZWxlY3RlZCA9IC0xO1xyXG4gICAgICB9IGVsc2UgaWYgKGNoZWNrZWQgPT09IHN1YnRyZWUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgbm9kZS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpZiAoc3VidHJlZS5wYXJlbnQpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoU3ViVHJlZUNoZWNrYm94ZXMoc3VidHJlZS5wYXJlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Tm9kZShrZXk6IGFueSk6IENoZWNrYm94U2VsZWN0IHtcclxuICAgIGNvbnN0IHRlc3QgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKG4gPT4gbi5kYXRhW3RoaXMuZmllbGRJRF0gPT09IGtleSk7XHJcbiAgICByZXR1cm4gdGVzdCA/IHRlc3RbMF0gOiB7IHNlbGVjdGVkOiBmYWxzZSwgZGF0YTogbnVsbCB9O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VG9QbmcoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0VGFibGUoJ3BuZycsIGZpbGVOYW1lLCB0aGlzLmdyaWRJRCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb0V4Y2VsKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCBkYXRhVG9FeHBvcnQ6IGFueVtdID0gW107XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IHt9O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoIWZpZWxkLmhpZGRlbikge1xyXG4gICAgICAgICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RJdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChvcHRpb24gPT4gb3B0aW9uW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldLmNvbnRleHQuZXhwb3J0VmFsdWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBpdGVtW2ZpZWxkLnByb3BlcnR5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGF0YVRvRXhwb3J0LnB1c2goaXRlbVRvRXhwb3J0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KCdERC5NTS5ZWVlZLkhILm1tLnNzJykgKyAnXycgKyBmaWxlTmFtZTtcclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydEFzRXhjZWxGaWxlKGRhdGFUb0V4cG9ydCwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gIH1cclxuXHJcbiAgLyogRXhwYW5kYWJsZSBSb3dzICovXHJcbiAgZXhwb3J0VHJlZUV4Y2VsKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRhdGFUb0V4cG9ydDogYW55W10gPSBbXTtcclxuICAgIHRoaXMuZXhwb3J0VHJlZUV4Y2VsUmVjKHRoaXMuZGF0YSwgZGF0YVRvRXhwb3J0KTtcclxuICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KCdERC5NTS5ZWVlZLkhILm1tLnNzJykgKyAnXycgKyBmaWxlTmFtZTtcclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydEFzRXhjZWxGaWxlKGRhdGFUb0V4cG9ydCwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VHJlZUV4Y2VsUmVjKGRhdGE6IGFueSwgZGF0YVRvRXhwb3J0OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IHt9O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoIWZpZWxkLmhpZGRlbikge1xyXG4gICAgICAgICAgaWYgKGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBpdGVtW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0LmV4cG9ydFZhbHVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0SXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRhdGFUb0V4cG9ydC5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcblxyXG4gICAgICBjb25zdCBjb2VyY2VkSXRlbSA9IGl0ZW0gYXMgYW55O1xyXG4gICAgICBpZiAoY29lcmNlZEl0ZW0uY2hpbGRyZW4gJiYgY29lcmNlZEl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5leHBvcnRUcmVlRXhjZWxSZWMoY29lcmNlZEl0ZW0uY2hpbGRyZW4sIGRhdGFUb0V4cG9ydCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBleHBvcnRUb1BkZihjb25maWcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBpZiAoIWNvbmZpZy51c2VWZXJzaW9uMikge1xyXG4gICAgICB0aGlzLnV0aWxTZXJ2aWNlLmV4cG9ydFRhYmxlKFxyXG4gICAgICAgICdwZGYnLFxyXG4gICAgICAgIGNvbmZpZy5maWxlTmFtZSxcclxuICAgICAgICB0aGlzLmdyaWRJRCxcclxuICAgICAgICBjb25maWcuZXhwb3J0Q29tcGFueU5hbWUsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFVzZXJOYW1lLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRUaXRsZSxcclxuICAgICAgICBjb25maWcuZXhwb3J0Q29tcGFueUxvZ29VcmwsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFRhYmxlQ3VzdG9tV2lkdGgsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBleHBvcnRDb25maWcgPSB7XHJcbiAgICAgICAgY2hlY2tib3hTZWxlY3Q6IHRoaXMuY2hlY2tib3hTZWxlY3QsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtczogdGhpcy5jaGVja2JveFNlbGVjdCA/XHJcbiAgICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSA6IFtdLFxyXG4gICAgICAgIGZpbGVOYW1lOiBjb25maWcuZmlsZU5hbWUsXHJcbiAgICAgICAgZGF0ZVBpcGU6IHRoaXMuZGF0ZVBpcGUsXHJcbiAgICAgICAgZGF0YTogdGhpcy5kYXRhLFxyXG4gICAgICAgIGVsZW1JRDogdGhpcy5ncmlkSUQsXHJcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcclxuICAgICAgICBjb2x1bW5TdHlsZXM6IGNvbmZpZy5jb2x1bW5TdHlsZXMsXHJcbiAgICAgICAgZXhwb3J0Q29tcGFueU5hbWU6IGNvbmZpZy5leHBvcnRDb21wYW55TmFtZSxcclxuICAgICAgICBleHBvcnRVc2VyTmFtZTogY29uZmlnLmV4cG9ydFVzZXJOYW1lLFxyXG4gICAgICAgIGV4cG9ydFRpdGxlOiBjb25maWcuZXhwb3J0VGl0bGUsXHJcbiAgICAgICAgZXhwb3J0Q29tcGFueUxvZ29Vcmw6IGNvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybCA/IGNvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybCA6ICdhc3NldHMvUFRvQl9sb2dvLnBuZycsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0VGFibGV2MihcclxuICAgICAgICBleHBvcnRDb25maWdcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBjbGlja1JvdyhldmVudDogTW91c2VFdmVudCwgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrcysrO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICBpZiAodGhpcy5jbGlja3MgPT09IDEpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdFJvdyhldmVudCwgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID4gMSkge1xyXG4gICAgICAgIHRoaXMuZGJsQ2xpY2tSb3coZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbGlja3MgPSAwO1xyXG4gICAgfSwgMzAwKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhldmVudDogTW91c2VFdmVudCwgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICAgIC8qIEdldCBpbmRleCBvZiBzZWxlY3Rpb24gKi9cclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja2JveENhY2hlLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tib3hTZWxlY3QpIHtcclxuICAgICAgaWYgKGV2ZW50ICYmICh0b0Jvb2xlYW4oZXZlbnQuY3RybEtleSkgfHwgdG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSkpIHtcclxuICAgICAgICAvKiBTaGlmdCBTZWxlY3Rpb24gKi9cclxuICAgICAgICBpZiAodG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RNdWx0aXBsZShpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0aW9uKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFNlbGVjdCBlbGVtZW50ICovXHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkID0gZXZlbnQgJiYgdG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSA/IHRydWUgOiAhdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZDtcclxuICAgICAgICAvKiBTYXZlIGxhc3QgaW5kZXggc2VsZWN0ZWQgKi9cclxuICAgICAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPyBpbmRleCA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKTtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5vcmRlciA9IHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPyB0aGlzLm9yZGVyKysgOiAtMTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChzZWxlY3RlZEl0ZW1zLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGEpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGlvbihkYXRhKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCAmJiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gIT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pXHJcbiAgICAgIC5mb3JFYWNoKGVsZW0gPT4geyBlbGVtLnNlbGVjdGVkID0gZmFsc2U7IGVsZW0ub3JkZXIgPSAtMSB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdE11bHRpcGxlKGN1cnJlbnRJZHgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxhc3RJZHhTZWxlY3RlZCAhPT0gbnVsbCkge1xyXG4gICAgICB3aGlsZSAoY3VycmVudElkeCAhPT0gdGhpcy5sYXN0SWR4U2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5sYXN0SWR4U2VsZWN0ZWRdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5sYXN0SWR4U2VsZWN0ZWRdLm9yZGVyID0gdGhpcy5vcmRlcisrO1xyXG4gICAgICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gY3VycmVudElkeCA+IHRoaXMubGFzdElkeFNlbGVjdGVkID8gdGhpcy5sYXN0SWR4U2VsZWN0ZWQgKyAxIDogdGhpcy5sYXN0SWR4U2VsZWN0ZWQgLSAxO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbY3VycmVudElkeF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbY3VycmVudElkeF0ub3JkZXIgPSB0aGlzLm9yZGVyKys7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IGN1cnJlbnRJZHg7XHJcbiAgfVxyXG5cclxuICBkYmxDbGlja1JvdyhkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25kbGNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgdGFwSGFuZGxlcigkZXZlbnQsIGRhdGEpOiB2b2lkIHtcclxuICAgIHRoaXMudGFwQ291bnQgKz0gMTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy50YXBDb3VudCA9PT0gMSkge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuY2xpY2tSb3cobnVsbCwgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50YXBDb3VudCA9IDA7XHJcbiAgICB9LCA2MDApO1xyXG4gICAgaWYgKHRoaXMudGFwQ291bnQgPiAxKSB7XHJcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmRibENsaWNrUm93KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNsaWNrQm9vbGVhbkNlbGwoZGF0YTogYW55LCBpZDogYW55LCBmaWVsZDogRmllbGQsIGluZGV4OiBudW1iZXIsICRldmVudDogbnVsbCk6IHZvaWQge1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0KCRldmVudCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pbkxpbmVFZGl0ICYmIGZpZWxkLmVkaXRhYmxlKSB7XHJcbiAgICAgIGlmIChkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gbnVsbCB8fCBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGFbZmllbGQucHJvcGVydHldID0gKGRhdGFbZmllbGQucHJvcGVydHldID09PSBmYWxzZSB8fCBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gJ2ZhbHNlJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbmRFZGl0TW9kZU5nTW9kZWwoaW5kZXgsIGRhdGEsIGZpZWxkLnByb3BlcnR5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dWaWV3TW9kZVRwbChmaWVsZCwgaXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmlzTnVsbChpdGVtLmhpZGRlbkZpZWxkcylcclxuICAgICAgJiYgaXRlbS5oaWRkZW5GaWVsZHMuZmlsdGVyKHggPT4geCA9PT0gZmllbGQucHJvcGVydHkpLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgKCh0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgIXRoaXMuaW5MaW5lRWRpdCkgfHxcclxuICAgICAgKCF0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgKHRoaXMuZWRpdElkICE9PSBpdGVtW3RoaXMuY29uZmlnLmZpZWxkSWRdIHx8XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSAhPT0gZmllbGQucHJvcGVydHkgfHwgZmllbGQuZWRpdGFibGUgPT09IGZhbHNlKSkpO1xyXG4gIH1cclxuXHJcbiAgc2hvd1ZpZXdNb2RlVHBsVHJlZShmaWVsZCwgZGF0YSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmlzTnVsbChkYXRhLmhpZGRlbkZpZWxkcylcclxuICAgICAgJiYgZGF0YS5oaWRkZW5GaWVsZHMuZmlsdGVyKHggPT4geCA9PT0gZmllbGQucHJvcGVydHkpLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgKCh0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgIXRoaXMuaW5MaW5lRWRpdCkgfHxcclxuICAgICAgKCF0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgKHRoaXMuZWRpdElkICE9PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdIHx8XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSAhPT0gZmllbGQucHJvcGVydHkgfHwgZmllbGQuZWRpdGFibGUgPT09IGZhbHNlKSkpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0VkaXRUcGwoaXRlbSwgZmllbGQpOiBhbnkge1xyXG4gICAgaWYgKCF0aGlzLmlzTnVsbChpdGVtLmhpZGRlbkZpZWxkcylcclxuICAgICAgJiYgaXRlbS5oaWRkZW5GaWVsZHMuZmlsdGVyKHggPT4geCA9PT0gZmllbGQucHJvcGVydHkpLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgKCh0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgdGhpcy5pbkxpbmVFZGl0ICYmXHJcbiAgICAgIChmaWVsZC5lZGl0YWJsZSB8fCBmaWVsZC5lZGl0YWJsZSA9PT0gdW5kZWZpbmVkKSkgfHxcclxuICAgICAgKCF0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgdGhpcy5lZGl0SWQgPT09IGl0ZW1bdGhpcy5jb25maWcuZmllbGRJZF0gJiZcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiAoZmllbGQuZWRpdGFibGUgfHwgZmllbGQuZWRpdGFibGUgPT09IHVuZGVmaW5lZCkpKTtcclxuICB9XHJcblxyXG4gIHNob3dFZGl0VHBsVHJlZShkYXRhLCBmaWVsZCk6IGFueSB7XHJcbiAgICBpZiAoIXRoaXMuaXNOdWxsKGRhdGEuaGlkZGVuRmllbGRzKVxyXG4gICAgICAmJiBkYXRhLmhpZGRlbkZpZWxkcy5maWx0ZXIoeCA9PiB4ID09PSBmaWVsZC5wcm9wZXJ0eSkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiAoKHRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiB0aGlzLmluTGluZUVkaXQgJiYgKGZpZWxkLmVkaXRhYmxlIHx8IGZpZWxkLmVkaXRhYmxlID09PSB1bmRlZmluZWQpKSB8fFxyXG4gICAgICAoIXRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiB0aGlzLmVkaXRJZCA9PT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSAmJlxyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIChmaWVsZC5lZGl0YWJsZSB8fCBmaWVsZC5lZGl0YWJsZSA9PT0gdW5kZWZpbmVkKSkpO1xyXG4gIH1cclxuXHJcbiAgZW1pdE9uRWRpdEV2ZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucm93T25FZGl0aW9uID49IDApIHtcclxuICAgICAgdGhpcy5kYXRhW3RoaXMucm93T25FZGl0aW9uXS5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVt0aGlzLnJvd09uRWRpdGlvbl0pO1xyXG4gICAgICB0aGlzLnJvd09uRWRpdGlvbiA9IC0xO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ub2RlT25FZGl0aW9uKSB7XHJcbiAgICAgIHRoaXMubm9kZU9uRWRpdGlvbi5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMubm9kZU9uRWRpdGlvbik7XHJcbiAgICAgIHRoaXMubm9kZU9uRWRpdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc01hcChmaWVsZDogRmllbGQpOiBhbnkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW2BjbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoYF06IHRoaXMubG9ncyxcclxuICAgICAgW2BjbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRgXTogdGhpcy5sb2dzLFxyXG4gICAgICBbYCR7ZmllbGQubmdDbGFzc31gXTogZmllbGQubmdDbGFzcyAmJiBmaWVsZC5uZ0NsYXNzLmxlbmd0aFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldEN1c3RvbUNsYXNzKGZpZWxkOiBGaWVsZCk6IGFueSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbYGNtYWNzLWNvbXBhY3QtdGFibGUtY2VsbC0ke2ZpZWxkLnByb3BlcnR5fWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0TWF4V2lkdGgoZmllbGQ6IEZpZWxkLCBpdGVtOiBhbnksIGk6IG51bWJlcik6IHN0cmluZyB7XHJcblxyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiAhaSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluTGluZUVkaXQgPyBgY2FsYygxMDAlIC0gMTdweClgIDogYGNhbGMoMTAwJSAtICR7dGhpcy5nZXRNYXhXaWR0aEZpZWxkVmlld01vZGUoZmllbGQsIGkpfSlgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluTGluZUVkaXQgPyBgY2FsYygxMDAlIC0gMTdweClgIDogYGNhbGMoMTAwJSAtICR7dGhpcy5nZXRNYXhXaWR0aEZpZWxkVmlld01vZGUoZmllbGQsIGkpfSlgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaW5MaW5lRWRpdCA/IGBjYWxjKDEwMCUgLSAxN3B4KWAgOiBgY2FsYygxMDAlIC0gJHt0aGlzLmdldE1heFdpZHRoRmllbGRWaWV3TW9kZShmaWVsZCwgaSl9KWA7XHJcbiAgfVxyXG5cclxuICBnZXRNYXhXaWR0aEZpZWxkVmlld01vZGUoZmllbGQ6IEZpZWxkLCBpOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCB8fFxyXG4gICAgICBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlIHx8XHJcbiAgICAgIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlRpbWUgfHxcclxuICAgICAgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiBgMThweGA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJzBweCc7XHJcbiAgfVxyXG5cclxuICBnZXRTdGlja3lXaWR0aChwb3NpdGlvbik6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRoaXMuc2Nyb2xsLngpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBsZXQgd2lkdGggPSAwO1xyXG4gICAgaWYgKHBvc2l0aW9uID09PSAnc21hcnRUYWJsZScpIHtcclxuICAgICAgcmV0dXJuIHdpZHRoICsgJ3B4JztcclxuICAgIH1cclxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ2RyYWdnYWJsZScpIHtcclxuICAgICAgd2lkdGggPSB0aGlzLnNtYXJ0VGFibGUgPyA0MCA6IDA7XHJcbiAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgICBpZiAocG9zaXRpb24gPT09ICdjaGVja2JveFNlbGVjdCcpIHtcclxuICAgICAgaWYgKHRoaXMuc21hcnRUYWJsZSkge1xyXG4gICAgICAgIHdpZHRoICs9IDQwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZSkge1xyXG4gICAgICAgIHdpZHRoICs9IDQwO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTdGlja3lXaWR0aFJpZ2h0KHBvc2l0aW9uKTogc3RyaW5nIHtcclxuICAgIGlmICghdGhpcy5zY3JvbGwueCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGxldCB3aWR0aCA9IDA7XHJcbiAgICBpZiAocG9zaXRpb24gPT09ICdzbWFydFRhYmxlJykge1xyXG4gICAgICByZXR1cm4gd2lkdGggKyAncHgnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZXh0cmEpIHtcclxuICAgICAgaWYgKHRoaXMuc21hcnRUYWJsZSkge1xyXG4gICAgICAgIHdpZHRoICs9IDQwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ2V4dHJhJykge1xyXG4gICAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRhYmxlQ29tcG9uZW50KCk6IE56VGFibGVDb21wb25lbnQ8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRhYmxlQ29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtRGF0ZShkYXRlKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG0gPSBtb21lbnQoZGF0ZSk7XHJcbiAgICBpZiAobS5pc1ZhbGlkKCkpIHtcclxuICAgICAgbS5sb2NhbGUodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSk7XHJcbiAgICAgIHJldHVybiBtLmZvcm1hdCh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ0RELk1NLllZWVknIDogJ01NL0REL1lZWVknKTtcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHNlbGVjdFRyZWVTaW5nbGUoaXRlbSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmNoZWNrYm94U2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uLnRvZ2dsZShpdGVtW3RoaXMuZmllbGRJRF0pO1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChpdGVtW3RoaXMuZmllbGRJRF0pKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChbaXRlbV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoW10pO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKiBEUk9QRE9XTiBNRU5VIFJFTEFURUQgQ09ERSAqL1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4iLCI8ZGl2IGlkPVwie3tncmlkSUR9fVwiPlxyXG4gIDxuei10YWJsZSAjZ3JpZENvbXBvbmVudCBbbnpEYXRhXT1cImRhdGFcIiBbbnpTaG93VG90YWxdPVwic2hvd1RvdGFsXCIgW256UGFnZVNpemVPcHRpb25zXT1cInBhZ2VTaXplT3B0aW9uc1wiXHJcbiAgICBbbnpWaXJ0dWFsSXRlbVNpemVdPVwidmlydHVhbEl0ZW1TaXplXCIgW256TG9hZGluZ0RlbGF5XT1cImxvYWRpbmdEZWxheVwiIFtuelZpcnR1YWxNYXhCdWZmZXJQeF09XCJ2aXJ0dWFsTWF4QnVmZmVyUHhcIlxyXG4gICAgW256TG9hZGluZ0luZGljYXRvcl09XCJsb2FkaW5nSW5kaWNhdG9yXCIgW256VG90YWxdPVwidG90YWxcIiBbbnpUaXRsZV09XCJ0aXRsZVwiIFtuekZvb3Rlcl09XCJmb290ZXJcIlxyXG4gICAgW256Tm9SZXN1bHRdPVwibm9SZXN1bHRcIiBbbnpXaWR0aENvbmZpZ109XCJ3aWR0aENvbmZpZ1wiIFtuelBhZ2VJbmRleF09XCJwYWdlSW5kZXhcIiBbbnpQYWdlU2l6ZV09XCJwYWdlU2l6ZVwiXHJcbiAgICBbbnpQYWdpbmF0aW9uUG9zaXRpb25dPVwicGFnaW5hdGlvblBvc2l0aW9uXCIgW256U2Nyb2xsXT1cInNjcm9sbFwiIFtuekZyb250UGFnaW5hdGlvbl09XCJmcm9udFBhZ2luYXRpb25cIlxyXG4gICAgW256VGVtcGxhdGVNb2RlXT1cInRlbXBsYXRlTW9kZVwiIFtuelNob3dQYWdpbmF0aW9uXT1cInNob3dQYWdpbmF0aW9uXCIgW256TG9hZGluZ109XCJsb2FkaW5nXCJcclxuICAgIFtuelNob3dTaXplQ2hhbmdlcl09XCJzaG93U2l6ZUNoYW5nZXJcIiBbbnpIaWRlT25TaW5nbGVQYWdlXT1cImhpZGVPblNpbmdsZVBhZ2VcIiBbbnpTaG93UXVpY2tKdW1wZXJdPVwic2hvd1F1aWNrSnVtcGVyXCJcclxuICAgIFtuelNpbXBsZV09XCJzaW1wbGVcIiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGVcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1leHBhbmRhYmxlXT1cImV4cGFuZGFibGVcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc2Nyb2xsYWJsZS14XT1cInNjcm9sbC54ISFcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1zY3JvbGxhYmxlLXldPVwic2Nyb2xsLnkhIVwiXHJcbiAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lbXB0eS10YWJsZV09XCIhZGF0YS5sZW5ndGhcIj5cclxuICAgIDx0aGVhZCAqbmdJZj1cIiFkYXRhVGFibGVcIj5cclxuICAgICAgPHRyIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWhlYWRlci1sb2dzXT1cImxvZ3NcIj5cclxuXHJcbiAgICAgICAgPHRoICpuZ0lmPVwic21hcnRUYWJsZSAmJiBpbkxpbmVFZGl0ICYmIGNvbmZpZyAmJiBjb25maWcuZmllbGRzICYmIGNvbmZpZy5maWVsZHMubGVuZ3RoXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoXT1cImxvZ3NcIiBueldpZHRoPVwiNDBweFwiIFtzdHlsZS5taW5XaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cIic0MHB4J1wiIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ3NtYXJ0VGFibGUnKVwiXHJcbiAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWFkZCBjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LWFjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgIDxpICpuZ0lmPVwiIWhpZGVCdXR0b25zXCIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1hZGQtaWNvbiBpY29uVUlMYXJnZS1OZXdcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC1hZGQtcm93LWljb24tdmlzaWJsZV09XCIhZ3JpZENvbXBvbmVudC5kYXRhLmxlbmd0aFwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJhZGRSb3coLTEpXCI+PC9pPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICpuZ0lmPVwiZHJhZ2dhYmxlXCIgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnZHJhZ2dhYmxlJylcIiBueldpZHRoPVwiNDBweFwiIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICpuZ0lmPVwiY2hlY2tib3hTZWxlY3RcIiBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdjaGVja2JveFNlbGVjdCcpXCIgbnpXaWR0aD1cIjMwcHhcIiBuekxlZnQ9XCIwcHhcIlxyXG4gICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cIiczMHB4J1wiIFtzdHlsZS5taW5XaWR0aF09XCInMzBweCdcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbWFjcy1jaGVja2JveCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkXCIgW2luZGV0ZXJtaW5hdGVdPVwiaXNJbmRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPW9uQ2hlY2tib3hBbGxDaGFuZ2UoJGV2ZW50KT48L2xhYmVsPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBmaVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaWVsZC5jdXN0b21GaWx0ZXI7IGVsc2UgdGhXaXRoRmlsdGVyc1wiPlxyXG4gICAgICAgICAgICA8dGggW256U2hvd1NvcnRdPVwiZmllbGQuc2hvd1NvcnRcIiBbbnpTaG93RmlsdGVyXT1cImZpZWxkLnNob3dGaWx0ZXJcIlxyXG4gICAgICAgICAgICAgIFtuekZpbHRlcnNdPVwiZmllbGQuZmlsdGVycyEhID8gZmllbGQuZmlsdGVycyA6IFtdXCIgW256RmlsdGVyTXVsdGlwbGVdPVwiZmllbGQuZmlsdGVyTXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgIChuekZpbHRlckNoYW5nZSk9XCJmaWx0ZXIoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSlcIiBhdHRyLmlkPVwie3tncmlkSUR9fS1jb2x1bW4te3tmaX19XCIgbnotcmVzaXphYmxlXHJcbiAgICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiIWZpZWxkLnJlc2l6YWJsZVwiIG56Qm91bmRzPVwid2luZG93XCIgW256TWluV2lkdGhdPVwiZmllbGQubWluV2lkdGggPyBmaWVsZC5taW5XaWR0aCA6IDEwMFwiXHJcbiAgICAgICAgICAgICAgW256TWF4V2lkdGhdPVwiZmllbGQubWF4V2lkdGggPyBmaWVsZC5tYXhXaWR0aCA6IDUwMFwiIG56UHJldmlld1xyXG4gICAgICAgICAgICAgIChuelJlc2l6ZUVuZCk9XCJvblJlc2l6ZSgkZXZlbnQsIGZpZWxkLnByb3BlcnR5LCBmaWVsZClcIiBbbmdDbGFzc109XCJnZXRDbGFzc01hcChmaWVsZClcIlxyXG4gICAgICAgICAgICAgIFsobnpTb3J0T3JkZXIpXT1cImZpZWxkLnNob3dTb3J0ID8gZmllbGQuc29ydE9yZGVyIDogZGVmYXVsdFNvcnRPcmRlclwiXHJcbiAgICAgICAgICAgICAgKG56U29ydE9yZGVyQ2hhbmdlKT1cInNvcnQoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSlcIiBbbnpXaWR0aF09XCJmaWVsZC53aWR0aFwiXHJcbiAgICAgICAgICAgICAgW256TGVmdF09XCJmaWVsZC5sZWZ0ID8gZmllbGQubGVmdCA6IGZhbHNlXCIgW256UmlnaHRdPVwiZmllbGQucmlnaHQgPyBmaWVsZC5yaWdodCA6IGZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaWVsZC50ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3QtY29sLWFkZC1pY29uLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCJmaWVsZC5taW5XaWR0aD8gZmllbGQubWluV2lkdGg6JzUwcHgnXCJcclxuICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cImZpZWxkLndpZHRoPyBmaWVsZC53aWR0aDonMTAwcHgnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwiYWRkQ29sdW1uXCIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LWNvbC1hZGQtaWNvbiBpY29uVUlMYXJnZS1OZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRjb2x1bW4oZmkpXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5tYXhXaWR0aF09XCJnZXRIZWFkZXJNYXhXaWR0aChmaWVsZClcIiBhdHRyLmlkPVwie3tncmlkSUR9fS1jb2x1bW4te3tmaX19LXRpdGxlXCIgY21hY3MtdG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAodGFwKT1cIm9uRmllbGRUYXBFbGxpcHNpcyhncmlkSUQgKyAnLWNvbHVtbi0nICsgZmkgKyAnLXRpdGxlJylcIlxyXG4gICAgICAgICAgICAgICAgICBbY21hY3NUb29sdGlwVHJpZ2dlcl09XCJnZXRUb29sdGlwRWxsaXBzaXNUcmlnZ2VyKClcIlxyXG4gICAgICAgICAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNFbGxpcHNpc0FjdGl2ZShncmlkSUQgKyAnLWNvbHVtbi0nICsgZmkgKyAnLXRpdGxlJywgZmllbGQpID8gZmllbGQuZGlzcGxheSA6IG51bGxcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsLWhlYWRlcl09XCIhd3JhcExpbmVzXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXBdPVwiYWRkQ29sdW1uXCIgKGNsaWNrKT1cIm9wZW5Db2x1bW5NZW51KGZpKVwiPlxyXG4gICAgICAgICAgICAgICAgICB7e2ZpZWxkLmRpc3BsYXl9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGNtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJhZGRDb2x1bW4gJiYgc2VsZWN0ZWRDb2x1bW5JZCA9PT0gZmkgJiYgc2VsZWN0ZWRDb2x1bW5JZCAhPT0gLTFcIiBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICBbaXRlbXNdPVwiY29sdW1uTWVudVwiIChvbkZpZWxkQ2hhbmdlZCk9XCJvbkZpZWxkQ2hhbmdlZChmaSwkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8L2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImFkZENvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlLXNlbGVjdGVkXT1cInNlbGVjdGVkTW9yZSA9PT0gZmkgJiYgc2VsZWN0ZWRNb3JlICE9PSAtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvblVJTGFyZ2UtTW9yZS1WZXJpdGNhbF9JY29uIGNtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmVcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTVweDtcIlxyXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwib3BlbkNvbHVtbk1vcmUoZmkpXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGNtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUgKm5nSWY9XCJhZGRDb2x1bW4gJiYgc2VsZWN0ZWRNb3JlID09PSBmaSAmJiBzZWxlY3RlZE1vcmUgIT09IC0xXCJcclxuICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImZpZWxkXCIgW2l0ZW1zXT1cImNvbHVtbk1lbnVcIiAob25GaWVsZENoYW5nZWQpPVwib25GaWVsZENoYW5nZWQoZmksJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgIFtsYWJlbFNhdmVdPVwiY29sdW1uTWVudS5hZHZhbmNlZENvbmZpZ3VyYXRpb24ubGFiZWxTYXZlXCI+PC9jbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgW2lkXT1cImdyaWRJRCArICdjb2x1bW4nICsgZmlcIiAqbmdJZj1cImZpZWxkLnRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZpZWxkLnRlbXBsYXRlLnJlZlwiXHJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJmaWVsZC50ZW1wbGF0ZS5jb250ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8bnotcmVzaXplLWhhbmRsZSBuekRpcmVjdGlvbj1cInJpZ2h0XCIgKm5nSWY9XCJmaWVsZC5yZXNpemFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXJlc2l6ZS10cmlnZ2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uei1yZXNpemUtaGFuZGxlPlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgI3RoV2l0aEZpbHRlcnM+XHJcbiAgICAgICAgICAgIDx0aCBbbnpTaG93U29ydF09XCJmaWVsZC5zaG93U29ydFwiIG56Q3VzdG9tRmlsdGVyIG56LXJlc2l6YWJsZSBuekJvdW5kcz1cIndpbmRvd1wiIG56UHJldmlld1xyXG4gICAgICAgICAgICAgIFtuekRpc2FibGVkXT1cIiFmaWVsZC5yZXNpemFibGVcIiAobnpSZXNpemVFbmQpPVwib25SZXNpemUoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSwgZmllbGQpXCJcclxuICAgICAgICAgICAgICBhdHRyLmlkPVwie3tncmlkSUR9fS1jb2x1bW4te3tmaX19XCIgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NNYXAoZmllbGQpXCJcclxuICAgICAgICAgICAgICBbKG56U29ydE9yZGVyKV09XCJmaWVsZC5zaG93U29ydCA/IGZpZWxkLnNvcnRPcmRlciA6IGRlZmF1bHRTb3J0T3JkZXJcIlxyXG4gICAgICAgICAgICAgIChuelNvcnRPcmRlckNoYW5nZSk9XCJzb3J0KCRldmVudCwgZmllbGQucHJvcGVydHkpXCIgW256V2lkdGhdPVwiZmllbGQud2lkdGhcIlxyXG4gICAgICAgICAgICAgIFtuek1pbldpZHRoXT1cImZpZWxkLm1pbldpZHRoID8gZmllbGQubWluV2lkdGggOiAxMDBcIiBbbnpNYXhXaWR0aF09XCJmaWVsZC5tYXhXaWR0aCA/IGZpZWxkLm1heFdpZHRoIDogNTAwXCJcclxuICAgICAgICAgICAgICBbbnpMZWZ0XT1cImZpZWxkLmxlZnQgPyBmaWVsZC5sZWZ0IDogZmFsc2UgXCIgW256UmlnaHRdPVwiZmllbGQucmlnaHQgPyBmaWVsZC5yaWdodCA6IGZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbaWRdPVwiZ3JpZElEICsgJ2NvbHVtbicgKyBmaVwiICpuZ0lmPVwiZmllbGQudGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZmllbGQudGVtcGxhdGUucmVmXCJcclxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImZpZWxkLnRlbXBsYXRlLmNvbnRleHRcIj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxuei1kcm9wZG93biBuelRyaWdnZXI9XCJjbGlja1wiIG56UGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBbbnpDbGlja0hpZGVdPVwiZmFsc2VcIiBuelRhYmxlRmlsdGVyICNkcm9wZG93bj5cclxuICAgICAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwic2VhcmNoXCIgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuYW50LXRhYmxlLWZpbHRlci1vcGVuXT1cImRyb3Bkb3duLm56VmlzaWJsZVwiIG56LWRyb3Bkb3duPjwvaT5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZmllbGQuY3VzdG9tRmlsdGVyLnJlZlwiXHJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJmaWVsZC5jdXN0b21GaWx0ZXIuY29udGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uei1kcm9wZG93bj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWZpZWxkLnRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5tYXhXaWR0aF09XCJnZXRIZWFkZXJNYXhXaWR0aChmaWVsZClcIiBjbWFjcy10b29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICh0YXApPVwib25GaWVsZFRhcEVsbGlwc2lzKGdyaWRJRCArICctY29sdW1uLScgKyBmaSArICctdGl0bGUnKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUcmlnZ2VyXT1cImdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUaXRsZV09XCJpc0VsbGlwc2lzQWN0aXZlKGdyaWRJRCArICctY29sdW1uLScgKyBmaSArICctdGl0bGUnLCBmaWVsZCkgPyBmaWVsZC5kaXNwbGF5IDogbnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGwtaGVhZGVyXT1cIiF3cmFwTGluZXNcIj57e2ZpZWxkLmRpc3BsYXl9fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxuei1yZXNpemUtaGFuZGxlIG56RGlyZWN0aW9uPVwicmlnaHRcIiAqbmdJZj1cImZpZWxkLnJlc2l6YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtcmVzaXplLXRyaWdnZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L256LXJlc2l6ZS1oYW5kbGU+XHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuXHJcbiAgICAgICAgPHRoICpuZ0lmPVwic2hvd1JhdGVcIj48L3RoPlxyXG5cclxuICAgICAgICA8dGggW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGhdPVwibG9nc1wiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9nc1wiXHJcbiAgICAgICAgICBbbnpXaWR0aF09XCJhY3Rpb25Db2x1bW5XaWR0aFwiIFtzdHlsZS5tYXhXaWR0aF09XCJhY3Rpb25Db2x1bW5XaWR0aFwiIFtzdHlsZS5taW5XaWR0aF09XCJhY3Rpb25Db2x1bW5XaWR0aFwiXHJcbiAgICAgICAgICBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdleHRyYScpXCIgKm5nSWY9XCJleHRyYVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtZXh0cmFcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImV4dHJhXCI+e3sgZXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aCAqbmdJZj1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiIG56V2lkdGg9XCI0MHB4XCIgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgW256UmlnaHRdPVwiZ2V0U3RpY2t5V2lkdGhSaWdodCgnc21hcnRUYWJsZScpXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctZGVsZXRlXCI+XHJcbiAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgPHRoIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoXT1cImxvZ3NcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3NcIlxyXG4gICAgICAgICAgKm5nSWY9XCJjZW50ZXJUYWJsZVwiPjwvdGg+XHJcblxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90aGVhZD5cclxuICAgIDx0Ym9keSBjZGtEcm9wTGlzdCAqbmdJZj1cIiF2aXJ0dWFsU2Nyb2xsXCIgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBjb25maWcuZmllbGRzICYmIGNvbmZpZy5maWVsZHMubGVuZ3RoXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImV4cGFuZGFibGU7IGVsc2UgZGVmYXVsdFRwbDtcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGRhdGEgb2YgZ3JpZENvbXBvbmVudC5kYXRhOyBpbmRleCBhcyBkaVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIG1hcE9mRXhwYW5kZWREYXRhW2RhdGFbZmllbGRJRF1dXCI+XHJcbiAgICAgICAgICAgICAgPHRyICpuZ0lmPVwiKGl0ZW0ucGFyZW50ICYmIGl0ZW0ucGFyZW50LmV4cGFuZCkgfHwgIWl0ZW0ucGFyZW50XCIgaWQ9XCJ0ci17e2l0ZW1bZmllbGRJRF19fVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1leHBhbmRhYmxlLXJvd109XCJpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXJvdy1hY3RpdmVdPVwiZWRpdElkID09PSBpdGVtW2ZpZWxkSURdXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWhlYWRlci1sb2dzXT1cImxvZ3MgJiYgISFpdGVtLmNoaWxkcmVuXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5hbnQtdGFibGUtc2VsZWN0ZWQtcm93XT1cImNoZWNrYm94U2VsZWN0ID8gZ2V0Tm9kZShpdGVtW2ZpZWxkSURdKS5zZWxlY3RlZCA6IHNlbGVjdGlvbi5pc1NlbGVjdGVkKGl0ZW1bZmllbGRJRF0pXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RUcmVlU2luZ2xlKGl0ZW0pXCIgKHRvdWNoc3RhcnQpPVwidGFwSGFuZGxlcigkZXZlbnQsIGl0ZW0pXCJcclxuICAgICAgICAgICAgICAgIChjb250ZXh0bWVudSk9XCJvbmNvbnRleHRtZW51ZXZ0KCRldmVudCwgaXRlbSlcIiAoZGJsY2xpY2spPVwiZGJsQ2xpY2tSb3coaXRlbSlcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJjaGVja2JveFNlbGVjdFwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdjaGVja2JveFNlbGVjdCcpXCJcclxuICAgICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIiczMHB4J1wiIFtzdHlsZS5tYXhXaWR0aF09XCInMzBweCdcIiBbc3R5bGUud2lkdGhdPVwiJzMwcHgnXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJnZXROb2RlKGl0ZW1bZmllbGRJRF0pLnNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJnZXROb2RlKGl0ZW1bZmllbGRJRF0pLnNlbGVjdGVkID09PSAtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPVwib25DaGVja2JveFRyZWVDaGFuZ2UoJGV2ZW50LCBpdGVtLCBtYXBPZkV4cGFuZGVkRGF0YVtkYXRhW2ZpZWxkSURdXSlcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBpXCIgW25nQ2xhc3NdPVwiZ2V0Q3VzdG9tQ2xhc3MoZmllbGQpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWVkaXRhYmxlLWNvbHVtbl09XCJmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXQtZXhwYW5kYWJsZV09XCIoKGVkaXRJZCA9PT0gaXRlbVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc051bWJlcihmaWVsZCkgJiYgZmllbGQuZWRpdGFibGUpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWV4cGFuZGFibGUtdGRdPVwiIWlcIiBbc3R5bGUucGFkZGluZ0xlZnQucHhdPVwiZ2V0Q3VzdG9tUGFkZGluZyhpdGVtLCBpKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtuelNob3dFeHBhbmRdPVwiIWlzTnVsbChpdGVtLmNoaWxkcmVuKSAmJiAhaVwiIFsobnpFeHBhbmQpXT1cIml0ZW0uZXhwYW5kXCJcclxuICAgICAgICAgICAgICAgICAgW256TGVmdF09XCJmaWVsZC5sZWZ0ID8gZmllbGQubGVmdCA6IGZhbHNlXCIgW256UmlnaHRdPVwiZmllbGQucmlnaHQgPyBmaWVsZC5yaWdodCA6IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgKG56RXhwYW5kQ2hhbmdlKT1cIkV4cGFuZENvbGxhcHNlKG1hcE9mRXhwYW5kZWREYXRhW2RhdGFbZmllbGRJRF1dLCBpdGVtLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cImZpZWxkLndpZHRoXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwiKGlzTnVtYmVyKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpKSA/ICdibG9jaycgOiAnaW5saW5lLWZsZXgnXCJcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsLWNvbnRhaW5lci1sb2dzXT1cImV4cGFuZGFibGUgJiYgaXNTdHJpbmcoZmllbGQpICYmICFpXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiaXRlbS5jaGlsZHJlbiAmJiAhaSA/ICdjYWxjKDEwMCUgLSAyNXB4KScgOiAnMTAwJSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic2hvd1ZpZXdNb2RlVHBsKGZpZWxkLCBpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwidmlld01vZGVUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogaXRlbSwgaTogZGksIGl0ZW06IGl0ZW0sIGNpOiBpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgW3N0eWxlLmRpc3BsYXldPVwiaXNOdW1iZXIoZmllbGQpID8gJ2Jsb2NrJyA6ICdpbmxpbmUtZmxleCdcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJpdGVtLmNoaWxkcmVuICYmICFpID8gJ2NhbGMoMTAwJSAtIDI1cHgpJyA6ICcxMDAlJ1wiICpuZ0lmPVwic2hvd0VkaXRUcGwoaXRlbSwgZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImVkaXRUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogaXRlbSwgaTogZGl9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtcmF0aW5nXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiICpuZ0lmPVwic2hvd1JhdGUgJiYgY29uZmlnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuei1yYXRlIFtuZ01vZGVsXT1cImRhdGFbY29uZmlnLmZpZWxkUmF0ZV1cIiBbbnpDb3VudF09J3JhdGVDb3VudCcgW256RGlzYWJsZWRdPVwiIWluTGluZUVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmF0ZUNoYW5nZSgkZXZlbnQsIGRhdGEpXCIgKGNsaWNrKT1cIm9uUmF0ZUNsaWNrKCRldmVudClcIj48L256LXJhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgISFpdGVtLmNoaWxkcmVuXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgIFtuelJpZ2h0XT1cImdldFN0aWNreVdpZHRoUmlnaHQoJ2V4dHJhJylcIiAqbmdJZj1cImV4dHJhXCI+PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJjZW50ZXJUYWJsZVwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLXRkXT1cImxvZ3NcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtYWxpZ24tdGRcIj48L3RkPlxyXG5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUcGw+XHJcbiAgICAgICAgICA8dHIgY2RrRHJhZyBbY2RrRHJhZ0Rpc2FibGVkXT1cIiFkcmFnZ2FibGVcIiAqbmdGb3I9XCJsZXQgZGF0YSBvZiBncmlkQ29tcG9uZW50LmRhdGE7IGluZGV4IGFzIGlcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tSb3coJGV2ZW50LCBkYXRhKVwiICh0b3VjaHN0YXJ0KT1cInRhcEhhbmRsZXIoJGV2ZW50LCBkYXRhKVwiIGlkPVwidHIte3tkYXRhW2NvbmZpZy5maWVsZElkXX19XCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtcm93LWFjdGl2ZV09XCJlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdXCJcclxuICAgICAgICAgICAgW2NsYXNzLmFudC10YWJsZS1zZWxlY3RlZC1yb3ddPVwiaXNSb3dTZWxlY3RlZChkYXRhKVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXRhYmxlLXJvd109XCJpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtcm93XT1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgIChjb250ZXh0bWVudSk9XCJjb250ZXh0TWVudSgkZXZlbnQsIGNvbnRleHRNZW51VGVtcGxhdGUpXCIgY2xhc3M9XCJjbWFjcy1uby1zZWxlY3Rpb25cIj5cclxuXHJcbiAgICAgICAgICAgIDxjbWFjcy1kcm9wZG93bi1tZW51ICNjb250ZXh0TWVudVRlbXBsYXRlPVwiY21hY3NEcm9wZG93bk1lbnVcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRleHRtZW51XCJcclxuICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGRyb3Bkb3duOiBkcm9wZG93biwgZGF0YTogZGF0YSB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvY21hY3MtZHJvcGRvd24tbWVudT5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdJZj1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnc21hcnRUYWJsZScpXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWFkZFwiPlxyXG4gICAgICAgICAgICAgIDxpICpuZ0lmPVwiIWhpZGVCdXR0b25zXCIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1hZGQtaWNvbiBpY29uVUlMYXJnZS1OZXdcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFJvdyhpLCAkZXZlbnQpXCI+PC9pPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkICpuZ0lmPVwiZHJhZ2dhYmxlXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWRyYWctY29sIGNtYWNzLWNvbXBhY3QtdGFibGUtZnN0LXRkXCIgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnZHJhZ2dhYmxlJylcIlxyXG4gICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uVUlMYXJnZS1Nb3ZlIGNtYWNzLWNvbXBhY3QtdGFibGUtZHJhZy1oYW5kbGVyXCIgY2RrRHJhZ0hhbmRsZT48L2k+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8dGQgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnY2hlY2tib3hTZWxlY3QnKVwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZzdC10ZF09XCIhZHJhZ2dhYmxlXCIgKm5nSWY9XCJjaGVja2JveFNlbGVjdCAmJiBjb25maWdcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJjaGVja2JveENhY2hlW2dldEluZGV4KGRhdGFbY29uZmlnLmZpZWxkSWRdKV0uc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPVwib25DaGVja2JveENoYW5nZSgkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YVtjb25maWcuZmllbGRJZF0gJiYgY2hlY2tib3hDYWNoZVtnZXRJbmRleChkYXRhW2NvbmZpZy5maWVsZElkXSldXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZ2V0RmllbGRzKCk7IGluZGV4IGFzIGpcIiBbbmdDbGFzc109XCJnZXRDdXN0b21DbGFzcyhmaWVsZClcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1lZGl0YWJsZS1jb2x1bW5dPVwiZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZzdC10ZF09XCIhZHJhZ2dhYmxlICYmICFjaGVja2JveFNlbGVjdCAmJiAhalwiXHJcbiAgICAgICAgICAgICAgW256TGVmdF09XCJmaWVsZC5sZWZ0ID8gZmllbGQubGVmdCA6IGZhbHNlXCIgW256UmlnaHRdPVwiZmllbGQucmlnaHQgPyBmaWVsZC5yaWdodCA6IGZhbHNlXCJcclxuICAgICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiZmllbGQud2lkdGhcIj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1heC13aWR0aDogOTglXCIgKm5nSWY9XCJzaG93Vmlld01vZGVUcGxUcmVlKGZpZWxkLCBkYXRhKVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInZpZXdNb2RlVHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGRhdGEsIGk6IGksIGNpOiBqfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6IDk4JVwiICpuZ0lmPVwic2hvd0VkaXRUcGxUcmVlKGRhdGEsIGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImVkaXRUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogZGF0YSwgaTogaX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8dGQgKm5nSWY9XCJzaG93UmF0ZSAmJiBjb25maWdcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgICAgICAgPG56LXJhdGUgW25nTW9kZWxdPVwiZGF0YVtjb25maWcuZmllbGRSYXRlXVwiIFtuekNvdW50XT0ncmF0ZUNvdW50J1xyXG4gICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25SYXRlQ2hhbmdlKCRldmVudCwgZGF0YSlcIiAoY2xpY2spPVwib25SYXRlQ2xpY2soJGV2ZW50KVwiPjwvbnotcmF0ZT5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdJZj1cImV4dHJhXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiIFtuelJpZ2h0XT1cImdldFN0aWNreVdpZHRoUmlnaHQoJ2V4dHJhJylcIj48L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkICpuZ0lmPVwic21hcnRUYWJsZSAmJiBpbkxpbmVFZGl0XCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiIFtuelJpZ2h0XT1cImdldFN0aWNreVdpZHRoUmlnaHQoJ3NtYXJ0VGFibGUnKVwiXHJcbiAgICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cIic0MHB4J1wiIFtzdHlsZS5taW5XaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctZGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1kZWxldGUtaWNvbiBpY29uVUlTbWFsbC1DbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIihkYXRhLmRlbGV0ZUVuYWJsZWQgPT09IHVuZGVmaW5lZCB8fCBkYXRhLmRlbGV0ZUVuYWJsZWQpICYmICFoaWRlQnV0dG9uc1wiIChjbGljayk9XCJkZWxldGVSb3coaSwgJGV2ZW50KVwiPjwvaT5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgKm5nSWY9XCJjZW50ZXJUYWJsZVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtdGRdPVwibG9nc1wiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWFsaWduLXRkXCI+PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPC90Ym9keT5cclxuXHJcbiAgICA8dGJvZHkgY2RrRHJvcExpc3QgKm5nSWY9XCJ2aXJ0dWFsU2Nyb2xsXCIgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIG56LXZpcnR1YWwtc2Nyb2xsIGxldC1kYXRhIGxldC1kaT1cImlcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGNvbmZpZy5maWVsZHMgJiYgY29uZmlnLmZpZWxkcy5sZW5ndGhcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJleHBhbmRhYmxlOyBlbHNlIGRlZmF1bHRUcGxWaXJ0dWFsU2Nyb2xsO1wiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIG1hcE9mRXhwYW5kZWREYXRhW2RhdGFbZmllbGRJRF1dXCI+XHJcbiAgICAgICAgICAgICAgPHRyICpuZ0lmPVwiKGl0ZW0ucGFyZW50ICYmIGl0ZW0ucGFyZW50LmV4cGFuZCkgfHwgIWl0ZW0ucGFyZW50XCIgaWQ9XCJ0ci17e2l0ZW1bZmllbGRJRF19fVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1yb3ctYWN0aXZlXT1cImVkaXRJZCA9PT0gaXRlbVtmaWVsZElEXVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1leHBhbmRhYmxlLXJvd109XCJpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWhlYWRlci1sb2dzXT1cImxvZ3MgJiYgISFpdGVtLmNoaWxkcmVuXCJcclxuICAgICAgICAgICAgICAgICh0b3VjaHN0YXJ0KT1cInRhcEhhbmRsZXIoJGV2ZW50LCBpdGVtKVwiIChjb250ZXh0bWVudSk9XCJvbmNvbnRleHRtZW51ZXZ0KCRldmVudCwgaXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgKGRibGNsaWNrKT1cImRibENsaWNrUm93KGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJjaGVja2JveFNlbGVjdFwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdjaGVja2JveFNlbGVjdCcpXCJcclxuICAgICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIiczMHB4J1wiIFtzdHlsZS5tYXhXaWR0aF09XCInMzBweCdcIiBbc3R5bGUud2lkdGhdPVwiJzMwcHgnXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJnZXROb2RlKGl0ZW1bZmllbGRJRF0pLnNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJnZXROb2RlKGl0ZW1bZmllbGRJRF0pLnNlbGVjdGVkID09PSAtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPVwib25DaGVja2JveFRyZWVDaGFuZ2UoJGV2ZW50LCBpdGVtLCBtYXBPZkV4cGFuZGVkRGF0YVtkYXRhW2ZpZWxkSURdXSlcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBpXCIgW2NsYXNzLmNtYWNzLWVkaXRhYmxlLWNvbHVtbl09XCJmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXQtZXhwYW5kYWJsZV09XCIoKGVkaXRJZCA9PT0gaXRlbVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc051bWJlcihmaWVsZCkgJiYgZmllbGQuZWRpdGFibGUpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWV4cGFuZGFibGUtdGRdPVwiIWlcIiBbc3R5bGUucGFkZGluZ0xlZnQucHhdPVwiZ2V0Q3VzdG9tUGFkZGluZyhpdGVtLCBpKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtuelNob3dFeHBhbmRdPVwiISFpdGVtLmNoaWxkcmVuICYmICFpXCIgWyhuekV4cGFuZCldPVwiaXRlbS5leHBhbmRcIlxyXG4gICAgICAgICAgICAgICAgICBbbnpMZWZ0XT1cImZpZWxkLmxlZnQgPyBmaWVsZC5sZWZ0IDogZmFsc2VcIiBbbnpSaWdodF09XCJmaWVsZC5yaWdodCA/IGZpZWxkLnJpZ2h0IDogZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAobnpFeHBhbmRDaGFuZ2UpPVwiRXhwYW5kQ29sbGFwc2UobWFwT2ZFeHBhbmRlZERhdGFbZGF0YVtmaWVsZElEXV0sIGl0ZW0sICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiZmllbGQud2lkdGhcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCIoaXNOdW1iZXIoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkpID8gJ2Jsb2NrJyA6ICdpbmxpbmUtZmxleCdcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGwtY29udGFpbmVyLWxvZ3NdPVwiZXhwYW5kYWJsZSAmJiBpc1N0cmluZyhmaWVsZCkgJiYgIWlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJpdGVtLmNoaWxkcmVuICYmICFpID8gJ2NhbGMoMTAwJSAtIDI1cHgpJyA6ICcxMDAlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93Vmlld01vZGVUcGwoZmllbGQsIGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ2aWV3TW9kZVRwbDtjb250ZXh0OiB7ZmllbGQ6IGZpZWxkLCBkYXRhOiBpdGVtLCBpOiBkaSwgaXRlbTogaXRlbSwgY2k6IGl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBbc3R5bGUuZGlzcGxheV09XCJpc051bWJlcihmaWVsZCkgPyAnYmxvY2snIDogJ2lubGluZS1mbGV4J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cIml0ZW0uY2hpbGRyZW4gJiYgIWkgPyAnY2FsYygxMDAlIC0gMjVweCknIDogJzEwMCUnXCIgKm5nSWY9XCJzaG93RWRpdFRwbChpdGVtLCBmaWVsZClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZWRpdFRwbDtjb250ZXh0OiB7ZmllbGQ6IGZpZWxkLCBkYXRhOiBpdGVtLCBpOiBkaX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzICYmIGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtcmF0aW5nXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiICpuZ0lmPVwic2hvd1JhdGUgJiYgY29uZmlnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuei1yYXRlIFtuZ01vZGVsXT1cImRhdGFbY29uZmlnLmZpZWxkUmF0ZV1cIiBbbnpDb3VudF09J3JhdGVDb3VudCcgW256RGlzYWJsZWRdPVwiIWluTGluZUVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmF0ZUNoYW5nZSgkZXZlbnQsIGRhdGEpXCIgKGNsaWNrKT1cIm9uUmF0ZUNsaWNrKCRldmVudClcIj48L256LXJhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdleHRyYScpXCIgKm5nSWY9XCJleHRyYVwiPjwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRwbFZpcnR1YWxTY3JvbGw+XHJcbiAgICAgICAgICAgIDx0ciBjZGtEcmFnIFtjZGtEcmFnRGlzYWJsZWRdPVwiIWRyYWdnYWJsZVwiIGlkPVwidHIte3tkYXRhW2NvbmZpZy5maWVsZElkXX19XCJcclxuICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1yb3ctYWN0aXZlXT1cImVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF1cIiAoY2xpY2spPVwiY2xpY2tSb3coJGV2ZW50LCBkYXRhKVwiXHJcbiAgICAgICAgICAgICAgKHRvdWNoc3RhcnQpPVwidGFwSGFuZGxlcigkZXZlbnQsIGRhdGEpXCIgW2NsYXNzLmFudC10YWJsZS1zZWxlY3RlZC1yb3ddPVwiaXNSb3dTZWxlY3RlZChkYXRhKVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdGFibGUtcm93XT1cImluTGluZUVkaXRcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLXJvd109XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXRcIlxyXG4gICAgICAgICAgICAgIChjb250ZXh0bWVudSk9XCJjb250ZXh0TWVudSgkZXZlbnQsIGNvbnRleHRNZW51VGVtcGxhdGUsIGRhdGEpXCIgY2xhc3M9XCJjbWFjcy1uby1zZWxlY3Rpb25cIj5cclxuXHJcbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjb250ZXh0TWVudVRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZXh0bWVudVwiXHJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGRyb3Bkb3duOiBkcm9wZG93biwgZGF0YTogZGF0YSB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0lmPVwic21hcnRUYWJsZSAmJiBpbkxpbmVFZGl0XCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtdGRdPVwibG9nc1wiXHJcbiAgICAgICAgICAgICAgICBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdzbWFydFRhYmxlJylcIiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWFkZFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgKm5nSWY9XCIhaGlkZUJ1dHRvbnNcIiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWFkZC1pY29uIGljb25VSUxhcmdlLU5ld1wiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRSb3coZGksICRldmVudClcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiZHJhZ2dhYmxlXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtZHJhZy1jb2wgY21hY3MtY29tcGFjdC10YWJsZS1mc3QtdGRcIiBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdkcmFnZ2FibGUnKVwiXHJcbiAgICAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCIgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uVUlMYXJnZS1Nb3ZlIGNtYWNzLWNvbXBhY3QtdGFibGUtZHJhZy1oYW5kbGVyXCIgY2RrRHJhZ0hhbmRsZT48L2k+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2NoZWNrYm94U2VsZWN0JylcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1mc3QtdGRdPVwiIWRyYWdnYWJsZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgKm5nSWY9XCJjaGVja2JveFNlbGVjdCAmJiBjb25maWdcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbWFjcy1jaGVja2JveCBbKG5nTW9kZWwpXT1cImNoZWNrYm94Q2FjaGVbZ2V0SW5kZXgoZGF0YVtjb25maWcuZmllbGRJZF0pXS5zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgIChjaGVja2VkQ2hhbmdlKT1cIm9uQ2hlY2tib3hDaGFuZ2UoJGV2ZW50LCBkYXRhKVwiXHJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YVtjb25maWcuZmllbGRJZF0gJiYgY2hlY2tib3hDYWNoZVtnZXRJbmRleChkYXRhW2NvbmZpZy5maWVsZElkXSldXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBqXCIgW2NsYXNzLmNtYWNzLWVkaXRhYmxlLWNvbHVtbl09XCJmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1mc3QtdGRdPVwiIWRyYWdnYWJsZSAmJiAhY2hlY2tib3hTZWxlY3QgJiYgIWpcIlxyXG4gICAgICAgICAgICAgICAgW256TGVmdF09XCJmaWVsZC5sZWZ0ID8gZmllbGQubGVmdCA6IGZhbHNlXCIgW256UmlnaHRdPVwiZmllbGQucmlnaHQgPyBmaWVsZC5yaWdodCA6IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCJmaWVsZC53aWR0aFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6IDk4JVwiICpuZ0lmPVwic2hvd1ZpZXdNb2RlVHBsVHJlZShmaWVsZCwgZGF0YSlcIj5cclxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInZpZXdNb2RlVHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGRhdGEsIGk6IGRpLCBjaTogan1cIj5cclxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiA5OCVcIiAqbmdJZj1cInNob3dFZGl0VHBsVHJlZShkYXRhLCBmaWVsZClcIj5cclxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImVkaXRUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogZGF0YSwgaTogZGl9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0lmPVwic2hvd1JhdGUgJiYgY29uZmlnXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiPlxyXG4gICAgICAgICAgICAgICAgPG56LXJhdGUgW25nTW9kZWxdPVwiZGF0YVtjb25maWcuZmllbGRSYXRlXVwiIFtuekNvdW50XT0ncmF0ZUNvdW50J1xyXG4gICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblJhdGVDaGFuZ2UoJGV2ZW50LCBkYXRhKVwiIChjbGljayk9XCJvblJhdGVDbGljaygkZXZlbnQpXCI+PC9uei1yYXRlPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgIDx0ZCAqbmdJZj1cImV4dHJhXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiIFtuelJpZ2h0XT1cImdldFN0aWNreVdpZHRoUmlnaHQoJ2V4dHJhJylcIj48L3RkPlxyXG5cclxuICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXRcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCJcclxuICAgICAgICAgICAgICAgIFtuelJpZ2h0XT1cImdldFN0aWNreVdpZHRoUmlnaHQoJ3NtYXJ0VGFibGUnKVwiIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtdGRdPVwibG9nc1wiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctZGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWRlbGV0ZS1pY29uIGljb25VSVNtYWxsLUNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCIoZGF0YS5kZWxldGVFbmFibGVkID09PSB1bmRlZmluZWQgfHwgZGF0YS5kZWxldGVFbmFibGVkKSAmJiAhaGlkZUJ1dHRvbnNcIiAoY2xpY2spPVwiZGVsZXRlUm93KGRpLCAkZXZlbnQpXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC90Ym9keT5cclxuICA8L256LXRhYmxlPlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZWRpdFRwbCBsZXQtZmllbGQ9XCJmaWVsZFwiIGxldC1kYXRhPVwiZGF0YVwiIGxldC1pPVwiaVwiPlxyXG4gIDwhLS1FZGl0YWJsZSBTdHJpbmcgRWRpdCBNb2RlLS0+XHJcbiAgPGlucHV0ICNmaWVsZFR5cGVJbnB1dCBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXRcIiAqbmdJZj1cImlzU3RyaW5nKGZpZWxkKVwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCIgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQucGxhY2Vob2xkZXIgPyBmaWVsZC5wbGFjZWhvbGRlciA6ICcnXCIgY21hY3MtaW5wdXQgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLnByb3BlcnR5XVwiXHJcbiAgICAoa2V5dXApPVwiZW5kRWRpdE1vZGUoJGV2ZW50LCBpLCBkYXRhKVwiIC8+XHJcblxyXG4gIDwhLS1FZGl0YWJsZSBEYXRlUGlja2VyIEVkaXQgTW9kZS0tPlxyXG4gIDxjbWFjcy1kYXRlLXBpY2tlciAjZmllbGRUeXBlRGF0ZVBpY2tlciBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtZGF0ZS1lZGl0XCIgKm5nSWY9XCJpc0RhdGUoZmllbGQpXCJcclxuICAgIFthbGxvd0NsZWFyXT1cInRydWVcIiAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiIChkYmxjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtbW9kZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIiBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgIChuZ01vZGVsQ2hhbmdlKT1cImVuZEVkaXRNb2RlTmdNb2RlbChpLCBkYXRhKVwiPlxyXG4gIDwvY21hY3MtZGF0ZS1waWNrZXI+XHJcblxyXG4gIDwhLS1FZGl0YWJsZSBEYXRlVGltZVBpY2tlciBFZGl0IE1vZGUtLT5cclxuICA8Y21hY3MtZGF0ZXRpbWUtcGlja2VyICNmaWVsZFR5cGVEYXRlVGltZVBpY2tlciAqbmdJZj1cImlzVGltZShmaWVsZClcIiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtZGF0ZXRpbWUtcGlja2VyXCJcclxuICAgIFt1c2UxMkhvdXJzXT1cInVzZTEySG91cnNcIiBoaWRlU2Vjb25kcyBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LW1vZGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCJcclxuICAgIFtmb3JtYXRdPVwiZmllbGQudGltZUZvcm1hdCA/IGZpZWxkLnRpbWVGb3JtYXQgOiAnaDptbSBhJ1wiIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgIChkYmxjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCIgW2RlZmF1bHRPcGVuVmFsdWVdPVwiZGVmYXVsdFRpbWVWYWx1ZVwiIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwibmdNb2RlbENoYW5nZShpLCBkYXRhKVwiPlxyXG4gIDwvY21hY3MtZGF0ZXRpbWUtcGlja2VyPlxyXG5cclxuICA8IS0tRWRpdGFibGUgU2VsZWN0IEVkaXQgTW9kZS0tPlxyXG4gIDxjbWFjcy1zZWxlY3QgI2ZpZWxkVHlwZVNlbGVjdCBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc2VsZWN0LWNlbGxcIiBbZHJvcGRvd25SZW5kZXJdPVwicmVuZGVyXCJcclxuICAgIFtjbWFjc0VkaXRhYmxlXT1cImZpZWxkLnNlbGVjdC5kcm9wZG93bkFkZE9wdGlvblwiXHJcbiAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC1tb2RlLXN0YXR1c109XCJmaWVsZC5tb2RlID09PSAnc3RhdHVzJ1wiXHJcbiAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC1tb2RlLXN0YXR1cy1sb3ctZWRpdF09XCJmaWVsZC5tb2RlID09PSAnc3RhdHVzJyAmJiBnZXRDbGFzc1N0YXR1cyhkYXRhLCBmaWVsZCkgPT09J2xvdydcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtbW9kZS1zdGF0dXMtbWVkaXVtLWVkaXRdPVwiZmllbGQubW9kZSA9PT0gJ3N0YXR1cycgJiYgZ2V0Q2xhc3NTdGF0dXMoZGF0YSwgZmllbGQpID09PSdtZWRpdW0nXCJcclxuICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLW1vZGUtc3RhdHVzLWhpZ2gtZWRpdF09XCJmaWVsZC5tb2RlID09PSAnc3RhdHVzJyAmJiBnZXRDbGFzc1N0YXR1cyhkYXRhLCBmaWVsZCkgPT09J2hpZ2gnXCJcclxuICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtbW9kZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIiAqbmdJZj1cImlzU2VsZWN0KGZpZWxkKVwiXHJcbiAgICBbcGxhY2VIb2xkZXJdPVwiZmllbGQucGxhY2Vob2xkZXIgPyBmaWVsZC5wbGFjZWhvbGRlciA6ICcnXCIgc2hvd1NlYXJjaCBbbW9kZV09XCJmaWVsZC5tb2RlID8gZmllbGQubW9kZSA6ICdkZWZhdWx0J1wiXHJcbiAgICBbc2hvd0NtYWNzU2VhcmNoXT1cImZpZWxkLnNob3dDbWFjc1NlYXJjaFwiIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCIgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLnByb3BlcnR5XVwiIChjbWFjc0VkaXRlZElucHV0KT1cImNtYWNzRWRpdGVkSW5wdXQoJGV2ZW50KVwiXHJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJlbmRFZGl0TW9kZU5nTW9kZWwoaSwgZGF0YSwgbnVsbCwgZmllbGQpXCI+XHJcbiAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBzRGF0YSBvZiBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YVwiIGxhYmVsPVwie3tzRGF0YVtmaWVsZC5zZWxlY3QubGFiZWxdfX1cIlxyXG4gICAgICB2YWx1ZT1cInt7c0RhdGFbZmllbGQuc2VsZWN0LnZhbHVlXX19XCIgZGl2aWRlcj1cInt7c0RhdGFbZmllbGQuc2VsZWN0LmRpdmlkZXJdfX1cIiBbZGlzYWJsZWRdPVwic0RhdGEuZGlzYWJsZWRcIj5cclxuICAgIDwvY21hY3Mtb3B0aW9uPlxyXG4gIDwvY21hY3Mtc2VsZWN0PlxyXG5cclxuICA8bmctdGVtcGxhdGUgI3JlbmRlcj5cclxuICAgIDxuei1kaXZpZGVyICpuZ0lmPVwiZmllbGQuc2VsZWN0Py5kcm9wZG93bkFkZE9wdGlvblwiPjwvbnotZGl2aWRlcj5cclxuICAgIDxidXR0b24gKm5nSWY9XCJmaWVsZC5zZWxlY3Q/LmRyb3Bkb3duQWRkT3B0aW9uXCIgY21hY3MtYnV0dG9uIChjbGljayk9XCJhZGRPcHRpb24oaSwgZGF0YSwgbnVsbCwgZmllbGQpXCIgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgIGFyaWEtbGFiZWw9XCJhZGQgaXRlbVwiPnt7ZmllbGQuc2VsZWN0Py5kcm9wZG93bkFkZE9wdGlvbkxhYmVsfX08L2J1dHRvbj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICA8IS0tRWRpdGFibGUgSW5wdU51bWJlciBFZGl0IE1vZGUtLT5cclxuICA8Y21hY3MtaW5wdXQtbnVtYmVyICNmaWVsZFR5cGVJbnB1dE51bWJlciBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXQtbnVtYmVyLWVkaXRcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICAqbmdJZj1cImlzTnVtYmVyKGZpZWxkKSAmJiAhaXNTZWxlY3QoZmllbGQpICYmIGZpZWxkLnVzZUNvbW1hTWFya2VyXCIgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLnByb3BlcnR5XVwiXHJcbiAgICBbY21hY3NTdGVwXT1cImZpZWxkLmNtYWNzU3RlcFwiIFttaW5dPVwiZmllbGQubWluISFcIiBbbWF4XT1cImZpZWxkLm1heCEhXCIgW2Zvcm1hdHRlcl09XCJmb3JtYXR0ZXJcIiBbcGFyc2VyXT1cInBhcnNlclwiXHJcbiAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiIChkYmxjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCIgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSwgZGF0YSlcIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwibmdNb2RlbENoYW5nZShpLCBkYXRhKVwiPlxyXG4gIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG5cclxuICA8Y21hY3MtaW5wdXQtbnVtYmVyICNmaWVsZFR5cGVJbnB1dE51bWJlciBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXQtbnVtYmVyLWVkaXRcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICAqbmdJZj1cImlzTnVtYmVyKGZpZWxkKSAmJiAhaXNTZWxlY3QoZmllbGQpICYmICFmaWVsZC51c2VDb21tYU1hcmtlclwiIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgW2Zvcm1hdHRlcl09XCIhaXNOdWxsKGZpZWxkLmZvcm1hdHRlcikgPyBmaWVsZC5mb3JtYXR0ZXIgOiBkZWZhdWx0Rm9ybWF0dGVyXCJcclxuICAgIFtwYXJzZXJdPVwiIWlzTnVsbChmaWVsZC5wYXJzZXIpID8gZmllbGQucGFyc2VyIDogZGVmYXVsdFBhcnNlclwiIFtjbWFjc1N0ZXBdPVwiZmllbGQuY21hY3NTdGVwID8gZmllbGQuY21hY3NTdGVwIDogMVwiXHJcbiAgICBbbWluXT1cImZpZWxkLm1pbiEhXCIgW21heF09XCJmaWVsZC5tYXghIVwiIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCIgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSwgZGF0YSlcIiAobmdNb2RlbENoYW5nZSk9XCJuZ01vZGVsQ2hhbmdlKGksIGRhdGEpXCI+XHJcbiAgPC9jbWFjcy1pbnB1dC1udW1iZXI+XHJcblxyXG4gIDwhLS1FZGl0YWJsZSBCb29sZWFuIEVkaXQgTW9kZS0tPlxyXG4gIDxsYWJlbCAjZmllbGRUeXBlQm9vbCBjbWFjcy1jaGVja2JveCBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFiZS1lZGl0YWJsZS1jaGVja2JveFwiXHJcbiAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LW1vZGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCIgKm5nSWY9XCJpc0Jvb2xlYW4oZmllbGQpXCJcclxuICAgIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIiAobmdNb2RlbENoYW5nZSk9XCJlbmRFZGl0TW9kZU5nTW9kZWwoaSwgZGF0YSwgZmllbGQucHJvcGVydHksIGZpZWxkKVwiPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS1FZGl0YWJsZSBQaG9uZSBFZGl0IE1vZGUtLT5cclxuICA8Y21hY3MtcGhvbmUtbnVtYmVyICNmaWVsZFR5cGVQaG9uZSBjbGFzcz1cInBob25lLW51bWJlclwiIFtpbml0XT1cIntpbml0aWFsQ291bnRyeTogJ3VzJywgZm9ybWF0T25EaXNwbGF5OiBmYWxzZX1cIlxyXG4gICAgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIiBbZm9ybUNvbnRyb2xDdXN0b21dPVwiZm9ybVBob25lQ29udHJvbFwiXHJcbiAgICAoaGFzRXJyb3IpPVwiaGFzUGhvbmVOdW1iZXJFcnJvcigkZXZlbnQsaSwgZGF0YSwgZmllbGQucHJvcGVydHksIGZpZWxkKVwiIChjb3VudHJ5Q2hhbmdlKT1cIm9uQ291bnRyeUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICpuZ0lmPVwiaXNQaG9uZShmaWVsZClcIj5cclxuICA8L2NtYWNzLXBob25lLW51bWJlcj5cclxuXHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI3ZpZXdNb2RlVHBsIGxldC1maWVsZD1cImZpZWxkXCIgbGV0LWRhdGE9XCJkYXRhXCIgbGV0LWk9XCJpXCIgbGV0LWl0ZW09XCJpdGVtXCIgbGV0LWNpPVwiY2lcIj5cclxuICA8bmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS1FZGl0YWJsZSBTdHJpbmcgVmlldyBNb2RlLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGlzU3RyaW5nKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2IChjbGljayk9XCJzdGFydEVkaXQoZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLnByb3BlcnR5LCAkZXZlbnQsIGRhdGEpXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdF09XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzVGltZShmaWVsZCkpXCJcclxuICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LW5vLXBhZGRpbmddPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzTnVtYmVyKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTdHJpbmcoZmllbGQpKVwiXHJcbiAgICAgICAgc3R5bGU9XCJ3aWR0aDogOTglOyBtYXgtd2lkdGg6IDk4JTsgcGFkZGluZzogN3B4IDEwcHhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1pbmxpbmUtY2VsbFwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC12YWxpZC1wbGFjZWhvbGRlcl09XCJpc051bGwoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pIHx8ICFkYXRhW2ZpZWxkLnByb3BlcnR5XS5sZW5ndGhcIlxyXG4gICAgICAgICAgYXR0ci5pZD1cInt7Z3JpZElEfX0tcm93LXt7aX19LXt7ZmllbGQucHJvcGVydHl9fVwiIGNtYWNzLXRvb2x0aXBcclxuICAgICAgICAgICh0YXApPVwib25EYXRhVGFwRWxsaXBzaXMoZ3JpZElEICsgJy1yb3ctJyArIGkgKyAnLScgKyBmaWVsZC5wcm9wZXJ0eSlcIlxyXG4gICAgICAgICAgW2NtYWNzVG9vbHRpcFRyaWdnZXJdPVwiZ2V0VG9vbHRpcEVsbGlwc2lzVHJpZ2dlcigpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUaXRsZV09XCJpc0VsbGlwc2lzQWN0aXZlKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHksIGZpZWxkKSA/IGdldFN0cmluZ0ZpZWxkVmFsdWUoZGF0YSwgZmllbGQpIDogbnVsbFwiXHJcbiAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoZmllbGQsIGl0ZW0sIGkpXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCI+XHJcbiAgICAgICAgICB7eyBnZXRTdHJpbmdGaWVsZFZhbHVlKGRhdGEsIGZpZWxkKSB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpICpuZ0lmPVwiZmllbGQuZWRpdGFibGUgfHwgZmllbGQuZWRpdGFibGUgPT09IHVuZGVmaW5lZFwiIGNsYXNzPVwiaWNvblVJU21hbGwtRWRpdFwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LWljb24tdmlld109XCIhaW5MaW5lRWRpdCB8fCAhZmllbGQuZWRpdGFibGVcIj5cclxuICAgICAgICA8L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLUVkaXRhYmxlIERhdGVQaWNrZXIgVmlldyBNb2RlLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGlzRGF0ZShmaWVsZClcIj5cclxuICAgICAgPGRpdiAoY2xpY2spPVwic3RhcnRFZGl0KGRhdGFbY29uZmlnLmZpZWxkSWRdLCBmaWVsZC5wcm9wZXJ0eSwgJGV2ZW50LCBkYXRhKVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIlxyXG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIiBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoZmllbGQsIGl0ZW0sIGkpXCJcclxuICAgICAgICAgIGF0dHIuaWQ9XCJ7e2dyaWRJRH19LXJvdy17e2l9fS17e2ZpZWxkLnByb3BlcnR5fX1cIiBjbWFjcy10b29sdGlwXHJcbiAgICAgICAgICAodGFwKT1cIm9uRGF0YVRhcEVsbGlwc2lzKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUcmlnZ2VyXT1cImdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKVwiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNFbGxpcHNpc0FjdGl2ZShncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5LCBmaWVsZCkgPyAoZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPyB0cmFuc2Zvcm1EYXRlKGRhdGFbZmllbGQucHJvcGVydHldKSA6IGZpZWxkLnBsYWNlaG9sZGVyKSA6IG51bGxcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLXZhbGlkLXBsYWNlaG9sZGVyXT1cImlzTnVsbChkYXRhW2ZpZWxkLnByb3BlcnR5XSlcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlubGluZS1jZWxsIGNtYWNzLWNvbXBhY3QtdGFibGUtZGF0ZVwiPnt7IGRhdGFbZmllbGQucHJvcGVydHldID9cclxuICAgICAgICAgIHRyYW5zZm9ybURhdGUoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pIDogZmllbGQucGxhY2Vob2xkZXIgfX08L2Rpdj5cclxuICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLUNhbGVuZGFyXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtY2FsZW5kYXItaWNvbl09XCJpbkxpbmVFZGl0ICYmIGZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWNhbGVuZGFyLWljb24tdmlld109XCIhaW5MaW5lRWRpdCB8fCAhZmllbGQuZWRpdGFibGVcIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLUVkaXRhYmxlIERhdGVUaW1lUGlja2VyIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc1RpbWUoZmllbGQpXCI+XHJcbiAgICAgIDxkaXYgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhW2NvbmZpZy5maWVsZElkXSwgZmllbGQucHJvcGVydHksICRldmVudCwgZGF0YSlcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSlcIlxyXG4gICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXQtbm8tcGFkZGluZ109XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNOdW1iZXIoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1N0cmluZyhmaWVsZCkpXCJcclxuICAgICAgICBzdHlsZT1cIndpZHRoOiA5OCU7IG1heC13aWR0aDogOTglOyBwYWRkaW5nOiA3cHggMTBweFwiPlxyXG4gICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCIgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKGZpZWxkLCBpdGVtLCBpKVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBhdHRyLmlkPVwie3tncmlkSUR9fS1yb3cte3tpfX0te3tmaWVsZC5wcm9wZXJ0eX19XCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLXZhbGlkLXBsYWNlaG9sZGVyXT1cImlzTnVsbChkYXRhW2ZpZWxkLnByb3BlcnR5XSlcIiBjbWFjcy10b29sdGlwXHJcbiAgICAgICAgICAodGFwKT1cIm9uRGF0YVRhcEVsbGlwc2lzKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUcmlnZ2VyXT1cImdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKVwiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNFbGxpcHNpc0FjdGl2ZShncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5LCBmaWVsZCkgPyAoZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPyAoIGRhdGFbZmllbGQucHJvcGVydHldICB8IGRhdGU6IGZpZWxkLnRpbWVGb3JtYXQgPyBmaWVsZC50aW1lRm9ybWF0IDogJ2g6bW0gYScpIDogZmllbGQucGxhY2Vob2xkZXIpIDogbnVsbFwiXHJcbiAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5saW5lLWNlbGwgY21hY3MtY29tcGFjdC10YWJsZS1kYXRlXCI+e3sgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPyAoXHJcbiAgICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSB8IGRhdGU6IGZpZWxkLnRpbWVGb3JtYXQgPyBmaWVsZC50aW1lRm9ybWF0IDogJ2g6bW0gYScpIDogZmllbGQucGxhY2Vob2xkZXIgfX08L2Rpdj5cclxuICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLVRpbWVcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1jYWxlbmRhci1pY29uXT1cImluTGluZUVkaXQgJiYgZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtY2FsZW5kYXItaWNvbi12aWV3XT1cIiFpbkxpbmVFZGl0IHx8ICFmaWVsZC5lZGl0YWJsZVwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tRWRpdGFibGUgU2VsZWN0IFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc1NlbGVjdChmaWVsZClcIj5cclxuICAgICAgPGRpdiAoY2xpY2spPVwic3RhcnRFZGl0KGRhdGFbY29uZmlnLmZpZWxkSWRdLCBmaWVsZC5wcm9wZXJ0eSwgJGV2ZW50LCBkYXRhKVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIlxyXG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIiBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoZmllbGQsIGl0ZW0sIGkpXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIGF0dHIuaWQ9XCJ7e2dyaWRJRH19LXJvdy17e2l9fS17e2ZpZWxkLnByb3BlcnR5fX1cIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtdmFsaWQtcGxhY2Vob2xkZXJdPVwiaXNOdWxsKGdldExhYmVsKGRhdGEsIGZpZWxkKSkgfHwgIWdldExhYmVsKGRhdGEsIGZpZWxkKS5sZW5ndGhcIlxyXG4gICAgICAgICAgY21hY3MtdG9vbHRpcCAodGFwKT1cIm9uRGF0YVRhcEVsbGlwc2lzKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUcmlnZ2VyXT1cImdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC1tb2RlLXN0YXR1cy1sb3ddPVwiZmllbGQubW9kZSA9PT0gJ3N0YXR1cycgJiYgZ2V0Q2xhc3NTdGF0dXMoZGF0YSwgZmllbGQpID09PSdsb3cnXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLW1vZGUtc3RhdHVzLW1lZGl1bV09XCJmaWVsZC5tb2RlID09PSAnc3RhdHVzJyAmJiBnZXRDbGFzc1N0YXR1cyhkYXRhLCBmaWVsZCkgPT09J21lZGl1bSdcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtbW9kZS1zdGF0dXMtaGlnaF09XCJmaWVsZC5tb2RlID09PSAnc3RhdHVzJyAmJiBnZXRDbGFzc1N0YXR1cyhkYXRhLCBmaWVsZCkgPT09J2hpZ2gnXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUaXRsZV09XCJpc0VsbGlwc2lzQWN0aXZlKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHksIGZpZWxkKSA/IChnZXRMYWJlbChkYXRhLCBmaWVsZCkgJiYgZ2V0TGFiZWwoZGF0YSwgZmllbGQpLmxlbmd0aCA/IGdldExhYmVsKGRhdGEsIGZpZWxkKSA6IGZpZWxkLnBsYWNlaG9sZGVyKSA6IG51bGxcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlubGluZS1jZWxsIGNtYWNzLWNvbXBhY3QtdGFibGUtc2VsZWN0XCI+e3sgZ2V0TGFiZWwoZGF0YSwgZmllbGQpICYmIGdldExhYmVsKGRhdGEsXHJcbiAgICAgICAgICBmaWVsZCkubGVuZ3RoID8gZ2V0TGFiZWwoZGF0YSwgZmllbGQpIDogZmllbGQucGxhY2Vob2xkZXIgfX08L2Rpdj5cclxuICAgICAgICA8aSAqbmdJZj1cImZpZWxkLm1vZGUgIT09ICdzdGF0dXMnXCIgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1DaGV2cm9uLURvd25cIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc2VsZWN0LWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1zZWxlY3QtaWNvbi12aWV3XT1cIiFpbkxpbmVFZGl0IHx8ICFmaWVsZC5lZGl0YWJsZVwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tRWRpdGFibGUgSW5wdXROdW1iZXIgVmlldyBNb2RlLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGlzTnVtYmVyKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2IChjbGljayk9XCJzdGFydEVkaXQoZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLnByb3BlcnR5LCAkZXZlbnQsIGRhdGEpXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdF09XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzVGltZShmaWVsZCkpXCJcclxuICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LW5vLXBhZGRpbmddPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzTnVtYmVyKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTdHJpbmcoZmllbGQpKVwiXHJcbiAgICAgICAgc3R5bGU9XCJ3aWR0aDogOTglOyBtYXgtd2lkdGg6IDk4JTsgcGFkZGluZzogN3B4IDEwcHhcIj5cclxuICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiIFtzdHlsZS5tYXhXaWR0aF09XCJnZXRNYXhXaWR0aChmaWVsZCwgaXRlbSwgaSlcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCIgYXR0ci5pZD1cInt7Z3JpZElEfX0tcm93LXt7aX19LXt7ZmllbGQucHJvcGVydHl9fVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC12YWxpZC1wbGFjZWhvbGRlcl09XCJpc051bGwoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pXCIgY21hY3MtdG9vbHRpcFxyXG4gICAgICAgICAgKHRhcCk9XCJvbkRhdGFUYXBFbGxpcHNpcyhncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5KVwiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVHJpZ2dlcl09XCJnZXRUb29sdGlwRWxsaXBzaXNUcmlnZ2VyKClcIlxyXG4gICAgICAgICAgW2NtYWNzVG9vbHRpcFRpdGxlXT1cImlzRWxsaXBzaXNBY3RpdmUoZ3JpZElEICsgJy1yb3ctJyArIGkgKyAnLScgKyBmaWVsZC5wcm9wZXJ0eSwgZmllbGQpID8gKGRhdGFbZmllbGQucHJvcGVydHldICE9PSB1bmRlZmluZWQgPyBmaWVsZC51c2VDb21tYU1hcmtlciA/IGRhdGFbZmllbGQucHJvcGVydHldLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcsJykgOiBkYXRhW2ZpZWxkLnByb3BlcnR5XSA6IGZpZWxkLnBsYWNlaG9sZGVyKSA6IG51bGxcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlubGluZS1jZWxsIGNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXQtbnVtYmVyXCI+e3sgZ2V0SW5wdXROdW1iZXJWYWx1ZShkYXRhLCBmaWVsZClcclxuICAgICAgICAgIH19PC9kaXY+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1Tb2xpZC1VcERvd25cIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXQtbnVtYmVyLWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnB1dC1udW1iZXItaWNvbi12aWV3XT1cIiFpbkxpbmVFZGl0IHx8ICFmaWVsZC5lZGl0YWJsZVwiPlxyXG4gICAgICAgIDwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tSHlwZXJsaW5rIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc0NlbGRUeXBlSHlwZXJsaW5rKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiIWRhdGEucGFyZW50XCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaHlwZXJsaW5rXT1cIiFkYXRhLnBhcmVudFwiIChjbGljayk9XCJjbGlja0h5cGVybGluayhkYXRhKVwiPlxyXG4gICAgICAgIHt7ZGF0YVtmaWVsZC5wcm9wZXJ0eV19fSA8L2Rpdj5cclxuICAgICAgPGRpdiAqbmdJZj1cImRhdGEucGFyZW50XCI+IHt7ZGF0YVtmaWVsZC5wcm9wZXJ0eV19fSA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS1Cb29sZWFuIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc0Jvb2xlYW4oZmllbGQpXCI+XHJcbiAgICAgIDxkaXYgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhW2NvbmZpZy5maWVsZElkXSwgZmllbGQucHJvcGVydHksICRldmVudCwgZGF0YSlcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSlcIlxyXG4gICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXQtbm8tcGFkZGluZ109XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNOdW1iZXIoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1N0cmluZyhmaWVsZCkpXCJcclxuICAgICAgICBzdHlsZT1cIndpZHRoOiA5OCU7IG1heC13aWR0aDogOTglOyBwYWRkaW5nOiA3cHggMTBweFwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT0gZmFsc2UgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT0gJ2ZhbHNlJ1wiXHJcbiAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtYm9vbGVhbi1mYWxzZS1pY29uIGNtYWNzLWNvbXBhY3QtdGFibGUtYm9vbGVhbi1pY29uXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImRhdGFbZmllbGQucHJvcGVydHldID09PSB1bmRlZmluZWQgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09IG51bGxcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWJvb2xlYW4taW5kZXRlcm1pbmF0ZS1pY29uIGNtYWNzLWNvbXBhY3QtdGFibGUtYm9vbGVhbi1pY29uXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWJvb2xlYW4taW5kZXRlcm1pbmF0ZS1pY29uLWlubmVyXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8aSAqbmdJZj1cImRhdGFbZmllbGQucHJvcGVydHldID09PSB0cnVlIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSAndHJ1ZSdcIlxyXG4gICAgICAgICAgY2xhc3M9XCJpY29uVUlMYXJnZS1TZWxlY3QtQWxsIGNtYWNzLWNvbXBhY3QtdGFibGUtYm9vbGVhbi1pY29uLXRydWVcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCI+PC9pPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tUGhvbmUgVmlldyBNb2RlLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGlzUGhvbmUoZmllbGQpXCI+XHJcbiAgICAgIDxkaXYgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhW2NvbmZpZy5maWVsZElkXSwgZmllbGQucHJvcGVydHksICRldmVudCwgZGF0YSlcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNQaG9uZShmaWVsZCkpXCJcclxuICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LW5vLXBhZGRpbmddPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSB8fCBpc1Bob25lKGZpZWxkKSlcIlxyXG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7IG1heC13aWR0aDogMTAwJVwiPlxyXG4gICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIGF0dHIuaWQ9XCJ7e2dyaWRJRH19LXJvdy17e2l9fS17e2ZpZWxkLnByb3BlcnR5fX1cIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtdmFsaWQtcGxhY2Vob2xkZXJdPVwiaXNOdWxsKGRhdGFbZmllbGQucHJvcGVydHldKVwiIGNtYWNzLXRvb2x0aXBcclxuICAgICAgICAgICh0YXApPVwib25EYXRhVGFwRWxsaXBzaXMoZ3JpZElEICsgJy1yb3ctJyArIGkgKyAnLScgKyBmaWVsZC5wcm9wZXJ0eSlcIlxyXG4gICAgICAgICAgW2NtYWNzVG9vbHRpcFRyaWdnZXJdPVwiZ2V0VG9vbHRpcEVsbGlwc2lzVHJpZ2dlcigpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUaXRsZV09XCJpc0VsbGlwc2lzQWN0aXZlKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHksIGZpZWxkKSA/IChkYXRhW2ZpZWxkLnByb3BlcnR5XSAhPT0gdW5kZWZpbmVkID8gZmllbGQudXNlQ29tbWFNYXJrZXIgPyBkYXRhW2ZpZWxkLnByb3BlcnR5XS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnLCcpIDogZGF0YVtmaWVsZC5wcm9wZXJ0eV0gOiBmaWVsZC5wbGFjZWhvbGRlcikgOiBudWxsXCJcclxuICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1pbmxpbmUtY2VsbCBjbWFjcy1jb21wYWN0LXRhYmxlLWlucHV0LW51bWJlclwiPlxyXG4gICAgICAgICAgPGNtYWNzLXBob25lLW51bWJlciAjZmllbGRUeXBlUGhvbmUgY2xhc3M9XCJwaG9uZS1udW1iZXItdmlldy1tb2RlXCIgW2luaXRdPVwie2luaXRpYWxDb3VudHJ5OiAndXMnfVwiXHJcbiAgICAgICAgICAgIFtmb3JtQ29udHJvbEN1c3RvbV09XCJnZXRQaG9uZUZpZWxkVmFsdWUoZGF0YSwgZmllbGQpXCIgKGNsaWNrKT1cImN1cnJlbnRQaG9uZVNlbGVjdGVkKGRhdGEsIGZpZWxkKVwiPlxyXG4gICAgICAgICAgPC9jbWFjcy1waG9uZS1udW1iZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLUVkaXRhYmxlIEF0dGFjaG1lbnQgRWRpdCBNb2RlLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uTWVudSAmJiBpc0F0dGFjaG1lbnQoZmllbGQpXCI+XHJcbiAgICAgIDxjbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQgKG9uQ2hhbmdlQXR0YWNobWVudHMpPVwiX29uQ2hhbmdlQXR0YWNobWVudHMoJGV2ZW50LCBpLCBmaWVsZC5wcm9wZXJ0eSlcIiBbY29uZl09XCJjb2x1bW5NZW51LmF0dGFjaG1lbnRcIiAob25jbGlja0Nob29zZUZpbGUpPVwiX29uY2xpY2tDaG9vc2VGaWxlKGksZmllbGQucHJvcGVydHkpXCIgW2N0YURyb3Bkb3duT3B0aW9uXT1cImRhdGFbZmllbGQucHJvcGVydHldXCI+XHJcbiAgICAgIDwvY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSBUZW1wbGF0ZSBWaWV3IE1vZGUgIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAjdGVtcGxhdGVSZWZDZWxkICpuZ0lmPVwiaXNDZWxkVHlwZVRlbXBsYXRlUmVmKGZpZWxkKSAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XVwiPlxyXG4gICAgICA8ZGl2IFtpZF09XCJncmlkSUQgKyAnY29sdW1uJyArIGNpICsgJ3JvdycgKyBpXCIgc3R5bGU9XCJ3aWR0aDogOTglOyBtYXgtd2lkdGg6IDk4JTsgcGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV0ucmVmOyBjb250ZXh0OiBkYXRhW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0XCI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPiJdfQ==