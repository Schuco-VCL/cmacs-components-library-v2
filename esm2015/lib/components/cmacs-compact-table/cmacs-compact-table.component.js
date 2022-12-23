import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, repeat, delay } from 'rxjs/operators';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { TemplateType } from '../core/enums/TemplateType.enum';
import { CeldType } from '../core/enums/CeldType.enum';
import { ExportType } from '../core/enums/export-type.enum';
import { isArray } from "util";
import { moveItemInArray } from "@angular/cdk/drag-drop";
import { FormControl } from "@angular/forms";
import { CmacsInputNumberComponent } from "../cmacs-input-number/cmacs-input-number.component";
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
import { CmacsDateTimePickerComponent } from '../cmacs-datetime-picker/cmacs-datetime-picker.component';
import { SelectionModel } from '@angular/cdk/collections';
import { InputBoolean, InputNumber, toBoolean } from 'ng-zorro-antd/core/util';
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
import * as i13 from "ng-zorro-antd/core/transition-patch";
import * as i14 from "ng-zorro-antd/icon";
import * as i15 from "ng-zorro-antd/dropdown";
import * as i16 from "ng-zorro-antd/core/outlet";
import * as i17 from "@angular/cdk/drag-drop";
import * as i18 from "ng-zorro-antd/rate";
import * as i19 from "../cmacs-dropdown/dropdown-menu.component";
import * as i20 from "../cmacs-input/cmacs-input.directive";
import * as i21 from "../cmacs-date-picker/date-picker.component";
import * as i22 from "../cmacs-datetime-picker/cmacs-datetime-picker.component";
import * as i23 from "../cmacs-select/cmacs-select.component";
import * as i24 from "../cmacs-select/cmacs-option.component";
import * as i25 from "../cmacs-input-number/cmacs-input-number.component";
const _c0 = ["gridComponent"];
const _c1 = ["renderItemTemplate"];
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
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th", ctx_r8.logs)("cmacs-compact-table-logs-header-th-font", ctx_r8.logs);
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
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_Template_div_tap_1_listener() { i0.ɵɵrestoreView(_r30); const fi_r22 = i0.ɵɵnextContext(2).index; const ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.onFieldTapEllipsis(ctx_r29.gridID + "-column-" + fi_r22 + "-title"); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(2);
    const field_r21 = ctx_r32.$implicit;
    const fi_r22 = ctx_r32.index;
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r26.getHeaderMaxWidth(field_r21));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-header", !ctx_r26.wrapLines);
    i0.ɵɵattributeInterpolate2("id", "", ctx_r26.gridID, "-column-", fi_r22, "-title");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r26.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r26.isEllipsisActive(ctx_r26.gridID + "-column-" + fi_r22 + "-title", field_r21) ? field_r21.display : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(field_r21.display);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementContainer(1, 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(2);
    const fi_r22 = ctx_r33.index;
    const field_r21 = ctx_r33.$implicit;
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", ctx_r27.gridID + "column" + fi_r22);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", field_r21.template.ref)("ngTemplateOutletContext", field_r21.template.context);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_nz_resize_handle_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-resize-handle", 26);
    i0.ɵɵelement(1, "div", 27);
    i0.ɵɵelementEnd();
} }
const _c8 = function () { return []; };
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 21);
    i0.ɵɵlistener("nzFilterChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzFilterChange_1_listener($event) { i0.ɵɵrestoreView(_r36); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.filter($event, field_r21.property); })("nzResizeEnd", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzResizeEnd_1_listener($event) { i0.ɵɵrestoreView(_r36); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.onResize($event, field_r21.property, field_r21); })("nzSortOrderChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzSortOrderChange_1_listener($event) { i0.ɵɵrestoreView(_r36); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r39 = i0.ɵɵnextContext(2); return field_r21.showSort ? field_r21.sortOrder : ctx_r39.defaultSortOrder = $event; })("nzSortOrderChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzSortOrderChange_1_listener($event) { i0.ɵɵrestoreView(_r36); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r41 = i0.ɵɵnextContext(2); return ctx_r41.sort($event, field_r21.property); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_Template, 3, 9, "ng-container", 3);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_div_3_Template, 2, 3, "div", 22);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_nz_resize_handle_4_Template, 2, 0, "nz-resize-handle", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r43 = i0.ɵɵnextContext();
    const fi_r22 = ctx_r43.index;
    const field_r21 = ctx_r43.$implicit;
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
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_ng_container_1_Template_div_tap_1_listener() { i0.ɵɵrestoreView(_r49); const fi_r22 = i0.ɵɵnextContext(2).index; const ctx_r48 = i0.ɵɵnextContext(2); return ctx_r48.onFieldTapEllipsis(ctx_r48.gridID + "-column-" + fi_r22 + "-title"); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r51 = i0.ɵɵnextContext(2);
    const field_r21 = ctx_r51.$implicit;
    const fi_r22 = ctx_r51.index;
    const ctx_r44 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r44.getHeaderMaxWidth(field_r21));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-header", !ctx_r44.wrapLines);
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r44.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r44.isEllipsisActive(ctx_r44.gridID + "-column-" + fi_r22 + "-title", field_r21) ? field_r21.display : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(field_r21.display);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementContainer(1, 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r52 = i0.ɵɵnextContext(2);
    const fi_r22 = ctx_r52.index;
    const field_r21 = ctx_r52.$implicit;
    const ctx_r45 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", ctx_r45.gridID + "column" + fi_r22);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", field_r21.template.ref)("ngTemplateOutletContext", field_r21.template.context);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_nz_resize_handle_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-resize-handle", 26);
    i0.ɵɵelement(1, "div", 27);
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 28);
    i0.ɵɵlistener("nzResizeEnd", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template_th_nzResizeEnd_0_listener($event) { i0.ɵɵrestoreView(_r55); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r53 = i0.ɵɵnextContext(2); return ctx_r53.onResize($event, field_r21.property, field_r21); })("nzSortOrderChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template_th_nzSortOrderChange_0_listener($event) { i0.ɵɵrestoreView(_r55); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r56 = i0.ɵɵnextContext(2); return field_r21.showSort ? field_r21.sortOrder : ctx_r56.defaultSortOrder = $event; })("nzSortOrderChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template_th_nzSortOrderChange_0_listener($event) { i0.ɵɵrestoreView(_r55); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r58 = i0.ɵɵnextContext(2); return ctx_r58.sort($event, field_r21.property); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_ng_container_1_Template, 3, 7, "ng-container", 3);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_div_2_Template, 2, 3, "div", 22);
    i0.ɵɵelementStart(3, "nz-dropdown", 29, 30);
    i0.ɵɵelement(5, "i", 31);
    i0.ɵɵelementContainer(6, 25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_nz_resize_handle_7_Template, 2, 0, "nz-resize-handle", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r46 = i0.ɵɵreference(4);
    const ctx_r60 = i0.ɵɵnextContext();
    const fi_r22 = ctx_r60.index;
    const field_r21 = ctx_r60.$implicit;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵattributeInterpolate2("id", "", ctx_r25.gridID, "-column-", fi_r22, "");
    i0.ɵɵproperty("nzShowSort", field_r21.showSort)("nzDisabled", !field_r21.resizable)("ngClass", ctx_r25.getClassMap(field_r21))("nzSortOrder", field_r21.showSort ? field_r21.sortOrder : ctx_r25.defaultSortOrder)("nzWidth", field_r21.width)("nzMinWidth", field_r21.minWidth ? field_r21.minWidth : 100)("nzMaxWidth", field_r21.maxWidth ? field_r21.maxWidth : 500)("nzLeft", field_r21.left ? field_r21.left : false)("nzRight", field_r21.right ? field_r21.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r21.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r21.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzClickHide", false);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("ant-table-filter-open", _r46.nzVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", field_r21.customFilter.ref)("ngTemplateOutletContext", field_r21.customFilter.context);
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
    const ctx_r61 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r61.extra);
} }
function CmacsCompactTableComponent_thead_3_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 32);
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_th_7_ng_container_2_Template, 2, 1, "ng-container", 34);
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
    i0.ɵɵelement(0, "th", 35);
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("min-width", "40px")("max-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th", ctx_r14.logs)("cmacs-compact-table-logs-header-th-font", ctx_r14.logs);
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
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_th_2_Template, 2, 11, "th", 7);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_thead_3_th_3_Template, 1, 9, "th", 8);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_thead_3_th_4_Template, 2, 11, "th", 9);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_thead_3_ng_container_5_Template, 4, 2, "ng-container", 10);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_thead_3_th_6_Template, 1, 0, "th", 3);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_thead_3_th_7_Template, 3, 11, "th", 11);
    i0.ɵɵtemplate(8, CmacsCompactTableComponent_thead_3_th_8_Template, 1, 9, "th", 12);
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
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 45);
    i0.ɵɵelementStart(1, "label", 18);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r79); const item_r70 = i0.ɵɵnextContext(2).$implicit; const ctx_r77 = i0.ɵɵnextContext(5); return ctx_r77.getNode(item_r70[ctx_r77.fieldID]).selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template_label_checkedChange_1_listener($event) { i0.ɵɵrestoreView(_r79); const item_r70 = i0.ɵɵnextContext(2).$implicit; const data_r67 = i0.ɵɵnextContext().$implicit; const ctx_r80 = i0.ɵɵnextContext(4); return ctx_r80.onCheckboxTreeChange($event, item_r70, ctx_r80.mapOfExpandedData[data_r67[ctx_r80.fieldID]]); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r70 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r72 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("min-width", "30px")("max-width", "30px")("width", "30px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r72.logs && !!item_r70.children);
    i0.ɵɵproperty("nzLeft", ctx_r72.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r72.getNode(item_r70[ctx_r72.fieldID]).selected)("indeterminate", ctx_r72.getNode(item_r70[ctx_r72.fieldID]).selected === -1);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c9 = function (a0, a1, a2, a3, a4) { return { field: a0, data: a1, i: a2, item: a3, ci: a4 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template, 1, 0, "ng-container", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r89 = i0.ɵɵnextContext();
    const field_r84 = ctx_r89.$implicit;
    const i_r85 = ctx_r89.index;
    const item_r70 = i0.ɵɵnextContext(2).$implicit;
    const di_r68 = i0.ɵɵnextContext().index;
    const ctx_r86 = i0.ɵɵnextContext(4);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵstyleProp("display", ctx_r86.isNumber(field_r84) || ctx_r86.isTime(field_r84) || ctx_r86.isDate(field_r84) || ctx_r86.isSelect(field_r84) ? "block" : "inline-flex")("width", item_r70.children && !i_r85 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-container-logs", ctx_r86.expandable && ctx_r86.isString(field_r84) && !i_r85);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction5(8, _c9, field_r84, item_r70, di_r68, item_r70, i_r85));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c10 = function (a0, a1, a2) { return { field: a0, data: a1, i: a2 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template, 1, 0, "ng-container", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r93 = i0.ɵɵnextContext();
    const field_r84 = ctx_r93.$implicit;
    const i_r85 = ctx_r93.index;
    const item_r70 = i0.ɵɵnextContext(2).$implicit;
    const di_r68 = i0.ɵɵnextContext().index;
    const ctx_r87 = i0.ɵɵnextContext(4);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵstyleProp("display", ctx_r87.isNumber(field_r84) ? "block" : "inline-flex")("width", item_r70.children && !i_r85 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(6, _c10, field_r84, item_r70, di_r68));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r98 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 46);
    i0.ɵɵlistener("nzExpandChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r98); const item_r70 = i0.ɵɵnextContext(2).$implicit; return item_r70.expand = $event; })("nzExpandChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r98); const item_r70 = i0.ɵɵnextContext(2).$implicit; const data_r67 = i0.ɵɵnextContext().$implicit; const ctx_r99 = i0.ɵɵnextContext(4); return ctx_r99.ExpandCollapse(ctx_r99.mapOfExpandedData[data_r67[ctx_r99.fieldID]], item_r70, $event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template, 2, 14, "div", 47);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template, 2, 10, "div", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r84 = ctx.$implicit;
    const i_r85 = ctx.index;
    const item_r70 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r73 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("padding-left", ctx_r73.getCustomPadding(item_r70, i_r85), "px")("min-width", field_r84.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r84.editable)("cmacs-compact-table-on-edit-expandable", ctx_r73.editId === item_r70[ctx_r73.config.fieldId] && ctx_r73.property === field_r84.property && field_r84.editable && (ctx_r73.isString(field_r84) || ctx_r73.isDate(field_r84) || ctx_r73.isTime(field_r84) || ctx_r73.isSelect(field_r84) || ctx_r73.isNumber(field_r84) && field_r84.editable))("cmacs-compact-table-logs-header-th-font", ctx_r73.logs && !!item_r70.children)("cmacs-compact-table-expandable-td", !i_r85);
    i0.ɵɵproperty("ngClass", ctx_r73.getCustomClass(field_r84))("nzShowExpand", !ctx_r73.isNull(item_r70.children) && !i_r85)("nzExpand", item_r70.expand)("nzLeft", field_r84.left ? field_r84.left : false)("nzRight", field_r84.right ? field_r84.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r73.showViewModeTpl(field_r84, item_r70));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r73.showEditTpl(item_r70, field_r84));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r105 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 50);
    i0.ɵɵelementStart(1, "nz-rate", 51);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r105); const data_r67 = i0.ɵɵnextContext(3).$implicit; const ctx_r103 = i0.ɵɵnextContext(4); return ctx_r103.onRateChange($event, data_r67); })("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r105); const ctx_r106 = i0.ɵɵnextContext(7); return ctx_r106.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r70 = i0.ɵɵnextContext(2).$implicit;
    const data_r67 = i0.ɵɵnextContext().$implicit;
    const ctx_r74 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r74.logs && !!item_r70.children);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r67[ctx_r74.config.fieldRate])("nzCount", ctx_r74.rateCount)("nzDisabled", !ctx_r74.inLineEdit);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 52);
} if (rf & 2) {
    const item_r70 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r75 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r75.logs && !!item_r70.children);
    i0.ɵɵproperty("nzRight", ctx_r75.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 53);
} if (rf & 2) {
    const ctx_r76 = i0.ɵɵnextContext(7);
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r76.logs);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r112 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 39);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_click_0_listener() { i0.ɵɵrestoreView(_r112); const item_r70 = i0.ɵɵnextContext().$implicit; const ctx_r110 = i0.ɵɵnextContext(5); return ctx_r110.selectTreeSingle(item_r70); })("touchstart", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r112); const item_r70 = i0.ɵɵnextContext().$implicit; const ctx_r113 = i0.ɵɵnextContext(5); return ctx_r113.tapHandler($event, item_r70); })("contextmenu", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r112); const item_r70 = i0.ɵɵnextContext().$implicit; const ctx_r115 = i0.ɵɵnextContext(5); return ctx_r115.oncontextmenuevt($event, item_r70); })("dblclick", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_dblclick_0_listener() { i0.ɵɵrestoreView(_r112); const item_r70 = i0.ɵɵnextContext().$implicit; const ctx_r117 = i0.ɵɵnextContext(5); return ctx_r117.dblClickRow(item_r70); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template, 2, 11, "td", 40);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template, 3, 19, "td", 41);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template, 2, 5, "td", 42);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_4_Template, 1, 3, "td", 43);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_5_Template, 1, 2, "td", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r70 = i0.ɵɵnextContext().$implicit;
    const ctx_r71 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-expandable-row", ctx_r71.inLineEdit)("cmacs-compact-table-row-active", ctx_r71.editId === item_r70[ctx_r71.fieldID])("cmacs-compact-table-header-logs", ctx_r71.logs && !!item_r70.children)("ant-table-selected-row", ctx_r71.checkboxSelect ? ctx_r71.getNode(item_r70[ctx_r71.fieldID]).selected : ctx_r71.selection.isSelected(item_r70[ctx_r71.fieldID]));
    i0.ɵɵpropertyInterpolate1("id", "tr-", item_r70[ctx_r71.fieldID], "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r71.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r71.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r71.showRate && ctx_r71.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r71.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r71.centerTable);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template, 6, 14, "tr", 38);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r70 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r70.parent && item_r70.parent.expand || !item_r70.parent);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r67 = ctx.$implicit;
    const ctx_r66 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r66.mapOfExpandedData[data_r67[ctx_r66.fieldID]]);
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
    const _r134 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 64);
    i0.ɵɵelementStart(1, "i", 15);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_4_Template_i_click_1_listener($event) { i0.ɵɵrestoreView(_r134); const i_r122 = i0.ɵɵnextContext().index; const ctx_r132 = i0.ɵɵnextContext(4); return ctx_r132.addRow(i_r122, $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r124 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r124.logs);
    i0.ɵɵproperty("nzLeft", ctx_r124.getStickyWidth("smartTable"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 65);
    i0.ɵɵelement(1, "i", 66);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r125 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵproperty("nzLeft", ctx_r125.getStickyWidth("draggable"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r137 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 68);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r137); const data_r121 = i0.ɵɵnextContext(2).$implicit; const ctx_r136 = i0.ɵɵnextContext(4); return ctx_r136.checkboxCache[ctx_r136.getIndex(data_r121[ctx_r136.config.fieldId])].selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r137); const data_r121 = i0.ɵɵnextContext(2).$implicit; const ctx_r139 = i0.ɵɵnextContext(4); return ctx_r139.onCheckboxChange($event, data_r121); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r121 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r135 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngModel", ctx_r135.checkboxCache[ctx_r135.getIndex(data_r121[ctx_r135.config.fieldId])].selected);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 45);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template, 1, 1, "label", 67);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r121 = i0.ɵɵnextContext().$implicit;
    const ctx_r126 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("cmacs-compact-table-fst-td", !ctx_r126.draggable);
    i0.ɵɵproperty("nzLeft", ctx_r126.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r121[ctx_r126.config.fieldId] && ctx_r126.checkboxCache[ctx_r126.getIndex(data_r121[ctx_r126.config.fieldId])]);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c11 = function (a0, a1, a2, a3) { return { field: a0, data: a1, i: a2, ci: a3 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_ng_container_1_Template, 1, 0, "ng-container", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r148 = i0.ɵɵnextContext();
    const field_r143 = ctx_r148.$implicit;
    const j_r144 = ctx_r148.index;
    const ctx_r149 = i0.ɵɵnextContext();
    const data_r121 = ctx_r149.$implicit;
    const i_r122 = ctx_r149.index;
    i0.ɵɵnextContext(4);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c11, field_r143, data_r121, i_r122, j_r144));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_ng_container_1_Template, 1, 0, "ng-container", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r143 = i0.ɵɵnextContext().$implicit;
    const ctx_r152 = i0.ɵɵnextContext();
    const data_r121 = ctx_r152.$implicit;
    const i_r122 = ctx_r152.index;
    i0.ɵɵnextContext(4);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c10, field_r143, data_r121, i_r122));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 69);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_Template, 2, 7, "div", 70);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_Template, 2, 6, "div", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r143 = ctx.$implicit;
    const j_r144 = ctx.index;
    const data_r121 = i0.ɵɵnextContext().$implicit;
    const ctx_r127 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("min-width", field_r143.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r143.editable)("cmacs-compact-table-fst-td", !ctx_r127.draggable && !ctx_r127.checkboxSelect && !j_r144);
    i0.ɵɵproperty("ngClass", ctx_r127.getCustomClass(field_r143))("nzLeft", field_r143.left ? field_r143.left : false)("nzRight", field_r143.right ? field_r143.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r127.showViewModeTplTree(field_r143, data_r121));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r127.showEditTplTree(data_r121, field_r143));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r156 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 72);
    i0.ɵɵelementStart(1, "nz-rate", 73);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r156); const data_r121 = i0.ɵɵnextContext().$implicit; const ctx_r154 = i0.ɵɵnextContext(4); return ctx_r154.onRateChange($event, data_r121); })("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r156); const ctx_r157 = i0.ɵɵnextContext(5); return ctx_r157.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r121 = i0.ɵɵnextContext().$implicit;
    const ctx_r128 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r121[ctx_r128.config.fieldRate])("nzCount", ctx_r128.rateCount);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 52);
} if (rf & 2) {
    const ctx_r129 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("nzRight", ctx_r129.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r162 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 76);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_i_1_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r162); const i_r122 = i0.ɵɵnextContext(2).index; const ctx_r160 = i0.ɵɵnextContext(4); return ctx_r160.deleteRow(i_r122, $event); });
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 74);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_i_1_Template, 1, 0, "i", 75);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r121 = i0.ɵɵnextContext().$implicit;
    const ctx_r130 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r130.logs);
    i0.ɵɵproperty("nzRight", ctx_r130.getStickyWidthRight("smartTable"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r121.deleteEnabled === undefined || data_r121.deleteEnabled);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 53);
} if (rf & 2) {
    const ctx_r131 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r131.logs);
} }
const _c12 = function (a0, a1) { return { dropdown: a0, data: a1 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r165 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 55);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r165); const data_r121 = ctx.$implicit; const ctx_r164 = i0.ɵɵnextContext(4); return ctx_r164.clickRow($event, data_r121); })("touchstart", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r165); const data_r121 = ctx.$implicit; const ctx_r166 = i0.ɵɵnextContext(4); return ctx_r166.tapHandler($event, data_r121); })("contextmenu", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r165); const _r123 = i0.ɵɵreference(2); const ctx_r167 = i0.ɵɵnextContext(4); return ctx_r167.contextMenu($event, _r123); });
    i0.ɵɵelementStart(1, "cmacs-dropdown-menu", null, 56);
    i0.ɵɵelementContainer(3, 25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_4_Template, 2, 7, "td", 57);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_5_Template, 2, 5, "td", 58);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_Template, 2, 4, "td", 59);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_Template, 3, 11, "td", 60);
    i0.ɵɵtemplate(8, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template, 2, 2, "td", 61);
    i0.ɵɵtemplate(9, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_9_Template, 1, 1, "td", 62);
    i0.ɵɵtemplate(10, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_Template, 2, 8, "td", 63);
    i0.ɵɵtemplate(11, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_11_Template, 1, 2, "td", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r121 = ctx.$implicit;
    const ctx_r120 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("cmacs-compact-table-row-active", ctx_r120.editId === data_r121[ctx_r120.config.fieldId])("ant-table-selected-row", ctx_r120.isRowSelected(data_r121))("cmacs-compact-table-editable-row", ctx_r120.inLineEdit)("cmacs-compact-table-smart-table-row", ctx_r120.smartTable && ctx_r120.inLineEdit);
    i0.ɵɵpropertyInterpolate1("id", "tr-", data_r121[ctx_r120.config.fieldId], "");
    i0.ɵɵproperty("cdkDragDisabled", !ctx_r120.draggable);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r120.contextmenu)("ngTemplateOutletContext", i0.ɵɵpureFunction2(20, _c12, ctx_r120.dropdown, data_r121));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r120.smartTable && ctx_r120.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r120.draggable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r120.checkboxSelect && ctx_r120.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r120.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r120.showRate && ctx_r120.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r120.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r120.smartTable && ctx_r120.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r120.centerTable);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template, 12, 23, "tr", 54);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngForOf", _r0.data);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 19);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 37, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r64 = i0.ɵɵreference(3);
    const ctx_r62 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r62.expandable)("ngIfElse", _r64);
} }
function CmacsCompactTableComponent_tbody_4_Template(rf, ctx) { if (rf & 1) {
    const _r169 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tbody", 36);
    i0.ɵɵlistener("cdkDropListDropped", function CmacsCompactTableComponent_tbody_4_Template_tbody_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r169); const ctx_r168 = i0.ɵɵnextContext(); return ctx_r168.drop($event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_Template, 4, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.config && ctx_r2.config.fields && ctx_r2.config.fields.length);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r186 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 45);
    i0.ɵɵelementStart(1, "label", 18);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r186); const item_r178 = i0.ɵɵnextContext(2).$implicit; const ctx_r184 = i0.ɵɵnextContext(5); return ctx_r184.getNode(item_r178[ctx_r184.fieldID]).selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template_label_checkedChange_1_listener($event) { i0.ɵɵrestoreView(_r186); const item_r178 = i0.ɵɵnextContext(2).$implicit; const data_r171 = i0.ɵɵnextContext(3).$implicit; const ctx_r187 = i0.ɵɵnextContext(2); return ctx_r187.onCheckboxTreeChange($event, item_r178, ctx_r187.mapOfExpandedData[data_r171[ctx_r187.fieldID]]); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r178 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r180 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("min-width", "30px")("max-width", "30px")("width", "30px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r180.logs && !!item_r178.children);
    i0.ɵɵproperty("nzLeft", ctx_r180.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r180.getNode(item_r178[ctx_r180.fieldID]).selected)("indeterminate", ctx_r180.getNode(item_r178[ctx_r180.fieldID]).selected === -1);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template, 1, 0, "ng-container", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r196 = i0.ɵɵnextContext();
    const field_r191 = ctx_r196.$implicit;
    const i_r192 = ctx_r196.index;
    const item_r178 = i0.ɵɵnextContext(2).$implicit;
    const di_r172 = i0.ɵɵnextContext(3).i;
    const ctx_r193 = i0.ɵɵnextContext(2);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵstyleProp("display", ctx_r193.isNumber(field_r191) || ctx_r193.isTime(field_r191) || ctx_r193.isDate(field_r191) || ctx_r193.isSelect(field_r191) ? "block" : "inline-flex")("width", item_r178.children && !i_r192 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-container-logs", ctx_r193.expandable && ctx_r193.isString(field_r191) && !i_r192);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction5(8, _c9, field_r191, item_r178, di_r172, item_r178, i_r192));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template, 1, 0, "ng-container", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r200 = i0.ɵɵnextContext();
    const field_r191 = ctx_r200.$implicit;
    const i_r192 = ctx_r200.index;
    const item_r178 = i0.ɵɵnextContext(2).$implicit;
    const di_r172 = i0.ɵɵnextContext(3).i;
    const ctx_r194 = i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵstyleProp("display", ctx_r194.isNumber(field_r191) ? "block" : "inline-flex")("width", item_r178.children && !i_r192 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(6, _c10, field_r191, item_r178, di_r172));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r205 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 82);
    i0.ɵɵlistener("nzExpandChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r205); const item_r178 = i0.ɵɵnextContext(2).$implicit; return item_r178.expand = $event; })("nzExpandChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r205); const item_r178 = i0.ɵɵnextContext(2).$implicit; const data_r171 = i0.ɵɵnextContext(3).$implicit; const ctx_r206 = i0.ɵɵnextContext(2); return ctx_r206.ExpandCollapse(ctx_r206.mapOfExpandedData[data_r171[ctx_r206.fieldID]], item_r178, $event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template, 2, 14, "div", 47);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template, 2, 10, "div", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r191 = ctx.$implicit;
    const i_r192 = ctx.index;
    const item_r178 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r181 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("padding-left", ctx_r181.getCustomPadding(item_r178, i_r192), "px")("min-width", field_r191.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r191.editable)("cmacs-compact-table-on-edit-expandable", ctx_r181.editId === item_r178[ctx_r181.config.fieldId] && ctx_r181.property === field_r191.property && field_r191.editable && (ctx_r181.isString(field_r191) || ctx_r181.isDate(field_r191) || ctx_r181.isTime(field_r191) || ctx_r181.isSelect(field_r191) || ctx_r181.isNumber(field_r191) && field_r191.editable))("cmacs-compact-table-logs-header-th-font", ctx_r181.logs && !!item_r178.children)("cmacs-compact-table-expandable-td", !i_r192);
    i0.ɵɵproperty("nzShowExpand", !!item_r178.children && !i_r192)("nzExpand", item_r178.expand)("nzLeft", field_r191.left ? field_r191.left : false)("nzRight", field_r191.right ? field_r191.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r181.showViewModeTpl(field_r191, item_r178));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r181.showEditTpl(item_r178, field_r191));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r212 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 50);
    i0.ɵɵelementStart(1, "nz-rate", 51);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r212); const data_r171 = i0.ɵɵnextContext(5).$implicit; const ctx_r210 = i0.ɵɵnextContext(2); return ctx_r210.onRateChange($event, data_r171); })("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r212); const ctx_r213 = i0.ɵɵnextContext(7); return ctx_r213.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r178 = i0.ɵɵnextContext(2).$implicit;
    const data_r171 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r182 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r182.logs && item_r178.children && item_r178.children.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r171[ctx_r182.config.fieldRate])("nzCount", ctx_r182.rateCount)("nzDisabled", !ctx_r182.inLineEdit);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 52);
} if (rf & 2) {
    const item_r178 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r183 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r183.logs && item_r178.children && item_r178.children.length);
    i0.ɵɵproperty("nzRight", ctx_r183.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r219 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 80);
    i0.ɵɵlistener("touchstart", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r219); const item_r178 = i0.ɵɵnextContext().$implicit; const ctx_r217 = i0.ɵɵnextContext(5); return ctx_r217.tapHandler($event, item_r178); })("contextmenu", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r219); const item_r178 = i0.ɵɵnextContext().$implicit; const ctx_r220 = i0.ɵɵnextContext(5); return ctx_r220.oncontextmenuevt($event, item_r178); })("dblclick", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template_tr_dblclick_0_listener() { i0.ɵɵrestoreView(_r219); const item_r178 = i0.ɵɵnextContext().$implicit; const ctx_r222 = i0.ɵɵnextContext(5); return ctx_r222.dblClickRow(item_r178); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template, 2, 11, "td", 40);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template, 3, 18, "td", 81);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template, 2, 5, "td", 42);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_4_Template, 1, 3, "td", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r178 = i0.ɵɵnextContext().$implicit;
    const ctx_r179 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-row-active", ctx_r179.editId === item_r178[ctx_r179.fieldID])("cmacs-compact-table-expandable-row", ctx_r179.inLineEdit)("cmacs-compact-table-header-logs", ctx_r179.logs && !!item_r178.children);
    i0.ɵɵpropertyInterpolate1("id", "tr-", item_r178[ctx_r179.fieldID], "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r179.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r179.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r179.showRate && ctx_r179.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r179.extra);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template, 5, 11, "tr", 79);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r178 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r178.parent && item_r178.parent.expand || !item_r178.parent);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r171 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r174 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r174.mapOfExpandedData[data_r171[ctx_r174.fieldID]]);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 25);
} if (rf & 2) {
    const data_r171 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r227 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r227.contextmenu)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c12, ctx_r227.dropdown, data_r171));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r238 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 64);
    i0.ɵɵelementStart(1, "i", 15);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_Template_i_click_1_listener($event) { i0.ɵɵrestoreView(_r238); const di_r172 = i0.ɵɵnextContext(3).i; const ctx_r236 = i0.ɵɵnextContext(2); return ctx_r236.addRow(di_r172, $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r228 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r228.logs);
    i0.ɵɵproperty("nzLeft", ctx_r228.getStickyWidth("smartTable"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 65);
    i0.ɵɵelement(1, "i", 66);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r229 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵproperty("nzLeft", ctx_r229.getStickyWidth("draggable"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r241 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 68);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r241); const data_r171 = i0.ɵɵnextContext(4).$implicit; const ctx_r240 = i0.ɵɵnextContext(2); return ctx_r240.checkboxCache[ctx_r240.getIndex(data_r171[ctx_r240.config.fieldId])].selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r241); const data_r171 = i0.ɵɵnextContext(4).$implicit; const ctx_r243 = i0.ɵɵnextContext(2); return ctx_r243.onCheckboxChange($event, data_r171); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r171 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r239 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r239.checkboxCache[ctx_r239.getIndex(data_r171[ctx_r239.config.fieldId])].selected);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 45);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template, 1, 1, "label", 67);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r171 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r230 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-fst-td", !ctx_r230.draggable);
    i0.ɵɵproperty("nzLeft", ctx_r230.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r171[ctx_r230.config.fieldId] && ctx_r230.checkboxCache[ctx_r230.getIndex(data_r171[ctx_r230.config.fieldId])]);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_ng_container_1_Template, 1, 0, "ng-container", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r252 = i0.ɵɵnextContext();
    const field_r247 = ctx_r252.$implicit;
    const j_r248 = ctx_r252.index;
    const ctx_r253 = i0.ɵɵnextContext(3);
    const data_r171 = ctx_r253.$implicit;
    const di_r172 = ctx_r253.i;
    i0.ɵɵnextContext(2);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c11, field_r247, data_r171, di_r172, j_r248));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_ng_container_1_Template, 1, 0, "ng-container", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r247 = i0.ɵɵnextContext().$implicit;
    const ctx_r256 = i0.ɵɵnextContext(3);
    const data_r171 = ctx_r256.$implicit;
    const di_r172 = ctx_r256.i;
    i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c10, field_r247, data_r171, di_r172));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 85);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_Template, 2, 7, "div", 70);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_Template, 2, 6, "div", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r247 = ctx.$implicit;
    const j_r248 = ctx.index;
    const data_r171 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r231 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("min-width", field_r247.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r247.editable)("cmacs-compact-table-fst-td", !ctx_r231.draggable && !ctx_r231.checkboxSelect && !j_r248);
    i0.ɵɵproperty("nzLeft", field_r247.left ? field_r247.left : false)("nzRight", field_r247.right ? field_r247.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r231.showViewModeTplTree(field_r247, data_r171));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r231.showEditTplTree(data_r171, field_r247));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r260 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 72);
    i0.ɵɵelementStart(1, "nz-rate", 73);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r260); const data_r171 = i0.ɵɵnextContext(3).$implicit; const ctx_r258 = i0.ɵɵnextContext(2); return ctx_r258.onRateChange($event, data_r171); })("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r260); const ctx_r261 = i0.ɵɵnextContext(5); return ctx_r261.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r171 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r232 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r171[ctx_r232.config.fieldRate])("nzCount", ctx_r232.rateCount);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 52);
} if (rf & 2) {
    const ctx_r233 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("nzRight", ctx_r233.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r266 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 76);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_i_1_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r266); const di_r172 = i0.ɵɵnextContext(4).i; const ctx_r264 = i0.ɵɵnextContext(2); return ctx_r264.deleteRow(di_r172, $event); });
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 74);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_i_1_Template, 1, 0, "i", 75);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r171 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r234 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r234.logs);
    i0.ɵɵproperty("nzRight", ctx_r234.getStickyWidthRight("smartTable"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r171.deleteEnabled === undefined || data_r171.deleteEnabled);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r270 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 55);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r270); const data_r171 = i0.ɵɵnextContext(2).$implicit; const ctx_r268 = i0.ɵɵnextContext(2); return ctx_r268.clickRow($event, data_r171); })("touchstart", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r270); const data_r171 = i0.ɵɵnextContext(2).$implicit; const ctx_r271 = i0.ɵɵnextContext(2); return ctx_r271.tapHandler($event, data_r171); })("contextmenu", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r270); const _r226 = i0.ɵɵreference(2); const data_r171 = i0.ɵɵnextContext(2).$implicit; const ctx_r273 = i0.ɵɵnextContext(2); return ctx_r273.contextMenu($event, _r226, data_r171); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_ng_template_1_Template, 1, 5, "ng-template", null, 83, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_Template, 2, 7, "td", 57);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_4_Template, 2, 5, "td", 58);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_Template, 2, 4, "td", 59);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_Template, 3, 10, "td", 84);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template, 2, 2, "td", 61);
    i0.ɵɵtemplate(8, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_8_Template, 1, 1, "td", 62);
    i0.ɵɵtemplate(9, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_Template, 2, 8, "td", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r171 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r176 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-row-active", ctx_r176.editId === data_r171[ctx_r176.config.fieldId])("ant-table-selected-row", ctx_r176.isRowSelected(data_r171))("cmacs-compact-table-editable-row", ctx_r176.inLineEdit)("cmacs-compact-table-smart-table-row", ctx_r176.smartTable && ctx_r176.inLineEdit);
    i0.ɵɵpropertyInterpolate1("id", "tr-", data_r171[ctx_r176.config.fieldId], "");
    i0.ɵɵproperty("cdkDragDisabled", !ctx_r176.draggable);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r176.smartTable && ctx_r176.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r176.draggable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r176.checkboxSelect && ctx_r176.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r176.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r176.showRate && ctx_r176.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r176.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r176.smartTable && ctx_r176.inLineEdit);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 19);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template, 10, 17, "ng-template", null, 78, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r175 = i0.ɵɵreference(3);
    const ctx_r173 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r173.expandable)("ngIfElse", _r175);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_Template, 4, 2, "ng-container", 3);
} if (rf & 2) {
    const ctx_r170 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r170.config && ctx_r170.config.fields && ctx_r170.config.fields.length);
} }
function CmacsCompactTableComponent_tbody_5_Template(rf, ctx) { if (rf & 1) {
    const _r277 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tbody", 36);
    i0.ɵɵlistener("cdkDropListDropped", function CmacsCompactTableComponent_tbody_5_Template_tbody_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r277); const ctx_r276 = i0.ɵɵnextContext(); return ctx_r276.drop($event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_Template, 1, 1, "ng-template", 77);
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_ng_template_6_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r290 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 93, 94);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r290); const ctx_r289 = i0.ɵɵnextContext(2); return ctx_r289.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r290); const ctx_r291 = i0.ɵɵnextContext(2); return ctx_r291.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r290); const ctx_r293 = i0.ɵɵnextContext(); const data_r279 = ctx_r293.data; const field_r278 = ctx_r293.field; return (data_r279[field_r278.property] = $event); })("keyup", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r290); const ctx_r295 = i0.ɵɵnextContext(); const i_r280 = ctx_r295.i; const data_r279 = ctx_r295.data; const ctx_r294 = i0.ɵɵnextContext(); return ctx_r294.endEditMode($event, i_r280, data_r279); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r296 = i0.ɵɵnextContext();
    const data_r279 = ctx_r296.data;
    const field_r278 = ctx_r296.field;
    const ctx_r281 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r281.validate(data_r279, field_r278));
    i0.ɵɵproperty("placeholder", field_r278.placeholder ? field_r278.placeholder : "")("ngModel", data_r279[field_r278.property]);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template(rf, ctx) { if (rf & 1) {
    const _r299 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-date-picker", 95, 96);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_click_0_listener($event) { i0.ɵɵrestoreView(_r299); const ctx_r298 = i0.ɵɵnextContext(2); return ctx_r298.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r299); const ctx_r300 = i0.ɵɵnextContext(2); return ctx_r300.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r299); const ctx_r302 = i0.ɵɵnextContext(); const data_r279 = ctx_r302.data; const field_r278 = ctx_r302.field; return (data_r279[field_r278.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r299); const ctx_r304 = i0.ɵɵnextContext(); const i_r280 = ctx_r304.i; const data_r279 = ctx_r304.data; const ctx_r303 = i0.ɵɵnextContext(); return ctx_r303.endEditModeNgModel(i_r280, data_r279); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r305 = i0.ɵɵnextContext();
    const data_r279 = ctx_r305.data;
    const field_r278 = ctx_r305.field;
    const ctx_r282 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r282.validate(data_r279, field_r278));
    i0.ɵɵproperty("allowClear", true)("ngModel", data_r279[field_r278.property]);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template(rf, ctx) { if (rf & 1) {
    const _r308 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-datetime-picker", 97, 98);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_click_0_listener($event) { i0.ɵɵrestoreView(_r308); const ctx_r307 = i0.ɵɵnextContext(2); return ctx_r307.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r308); const ctx_r309 = i0.ɵɵnextContext(2); return ctx_r309.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r308); const ctx_r311 = i0.ɵɵnextContext(); const data_r279 = ctx_r311.data; const field_r278 = ctx_r311.field; return (data_r279[field_r278.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r308); const ctx_r313 = i0.ɵɵnextContext(); const i_r280 = ctx_r313.i; const data_r279 = ctx_r313.data; const ctx_r312 = i0.ɵɵnextContext(); return ctx_r312.ngModelChange(i_r280, data_r279); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r314 = i0.ɵɵnextContext();
    const data_r279 = ctx_r314.data;
    const field_r278 = ctx_r314.field;
    const ctx_r283 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r283.validate(data_r279, field_r278));
    i0.ɵɵproperty("use12Hours", ctx_r283.use12Hours)("format", field_r278.timeFormat ? field_r278.timeFormat : "h:mm a")("defaultOpenValue", ctx_r283.defaultTimeValue)("ngModel", data_r279[field_r278.property]);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_cmacs_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 102);
} if (rf & 2) {
    const sData_r317 = ctx.$implicit;
    const field_r278 = i0.ɵɵnextContext(2).field;
    i0.ɵɵpropertyInterpolate("label", sData_r317[field_r278.select.label]);
    i0.ɵɵpropertyInterpolate("value", sData_r317[field_r278.select.value]);
    i0.ɵɵpropertyInterpolate("divider", sData_r317[field_r278.select.divider]);
    i0.ɵɵproperty("disabled", sData_r317.disabled);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r320 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-select", 99, 100);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_click_0_listener($event) { i0.ɵɵrestoreView(_r320); const ctx_r319 = i0.ɵɵnextContext(2); return ctx_r319.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r320); const ctx_r321 = i0.ɵɵnextContext(2); return ctx_r321.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r320); const ctx_r323 = i0.ɵɵnextContext(); const data_r279 = ctx_r323.data; const field_r278 = ctx_r323.field; return (data_r279[field_r278.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r320); const ctx_r325 = i0.ɵɵnextContext(); const i_r280 = ctx_r325.i; const data_r279 = ctx_r325.data; const field_r278 = ctx_r325.field; const ctx_r324 = i0.ɵɵnextContext(); return ctx_r324.endEditModeNgModel(i_r280, data_r279, null, field_r278); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_6_cmacs_select_3_cmacs_option_2_Template, 1, 4, "cmacs-option", 101);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r326 = i0.ɵɵnextContext();
    const field_r278 = ctx_r326.field;
    const data_r279 = ctx_r326.data;
    const ctx_r284 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-field-mode-status", field_r278.mode === "status")("cmacs-compact-table-field-mode-status-low-edit", field_r278.mode === "status" && ctx_r284.getClassStatus(data_r279, field_r278) === "low")("cmacs-compact-table-field-mode-status-medium-edit", field_r278.mode === "status" && ctx_r284.getClassStatus(data_r279, field_r278) === "medium")("cmacs-compact-table-field-mode-status-high-edit", field_r278.mode === "status" && ctx_r284.getClassStatus(data_r279, field_r278) === "high")("cmacs-compact-table-edit-mode-invalid", !ctx_r284.validate(data_r279, field_r278));
    i0.ɵɵproperty("placeHolder", field_r278.placeholder ? field_r278.placeholder : "")("mode", field_r278.mode ? field_r278.mode : "default")("showCmacsSearch", field_r278.showCmacsSearch)("ngModel", data_r279[field_r278.property]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r278.select.selectData);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template(rf, ctx) { if (rf & 1) {
    const _r330 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 103, 104);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r330); const ctx_r329 = i0.ɵɵnextContext(); const data_r279 = ctx_r329.data; const field_r278 = ctx_r329.field; return (data_r279[field_r278.property] = $event); })("click", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r330); const ctx_r331 = i0.ɵɵnextContext(2); return ctx_r331.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r330); const ctx_r332 = i0.ɵɵnextContext(2); return ctx_r332.preventDefault($event); })("keyup", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r330); const ctx_r334 = i0.ɵɵnextContext(); const i_r280 = ctx_r334.i; const data_r279 = ctx_r334.data; const ctx_r333 = i0.ɵɵnextContext(); return ctx_r333.endEditMode($event, i_r280, data_r279); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r330); const ctx_r336 = i0.ɵɵnextContext(); const i_r280 = ctx_r336.i; const data_r279 = ctx_r336.data; const ctx_r335 = i0.ɵɵnextContext(); return ctx_r335.ngModelChange(i_r280, data_r279); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r337 = i0.ɵɵnextContext();
    const data_r279 = ctx_r337.data;
    const field_r278 = ctx_r337.field;
    const ctx_r285 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r285.validate(data_r279, field_r278));
    i0.ɵɵproperty("ngModel", data_r279[field_r278.property])("cmacsStep", field_r278.cmacsStep)("min", field_r278.min)("max", field_r278.max)("formatter", ctx_r285.formatter)("parser", ctx_r285.parser);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template(rf, ctx) { if (rf & 1) {
    const _r341 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 105, 104);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r340 = i0.ɵɵnextContext(); const data_r279 = ctx_r340.data; const field_r278 = ctx_r340.field; return (data_r279[field_r278.property] = $event); })("click", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r342 = i0.ɵɵnextContext(2); return ctx_r342.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r343 = i0.ɵɵnextContext(2); return ctx_r343.preventDefault($event); })("keyup", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r345 = i0.ɵɵnextContext(); const i_r280 = ctx_r345.i; const data_r279 = ctx_r345.data; const ctx_r344 = i0.ɵɵnextContext(); return ctx_r344.endEditMode($event, i_r280, data_r279); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r341); const ctx_r347 = i0.ɵɵnextContext(); const i_r280 = ctx_r347.i; const data_r279 = ctx_r347.data; const ctx_r346 = i0.ɵɵnextContext(); return ctx_r346.ngModelChange(i_r280, data_r279); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r348 = i0.ɵɵnextContext();
    const data_r279 = ctx_r348.data;
    const field_r278 = ctx_r348.field;
    const ctx_r286 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r286.validate(data_r279, field_r278));
    i0.ɵɵproperty("ngModel", data_r279[field_r278.property])("formatter", !ctx_r286.isNull(field_r278.formatter) ? field_r278.formatter : ctx_r286.defaultFormatter)("parser", !ctx_r286.isNull(field_r278.parser) ? field_r278.parser : ctx_r286.defaultParser)("cmacsStep", field_r278.cmacsStep ? field_r278.cmacsStep : 1)("min", field_r278.min)("max", field_r278.max);
} }
function CmacsCompactTableComponent_ng_template_6_label_6_Template(rf, ctx) { if (rf & 1) {
    const _r352 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 106, 107);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_label_6_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r352); const ctx_r351 = i0.ɵɵnextContext(); const data_r279 = ctx_r351.data; const field_r278 = ctx_r351.field; return (data_r279[field_r278.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_label_6_Template_label_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r352); const ctx_r354 = i0.ɵɵnextContext(); const i_r280 = ctx_r354.i; const data_r279 = ctx_r354.data; const field_r278 = ctx_r354.field; const ctx_r353 = i0.ɵɵnextContext(); return ctx_r353.endEditModeNgModel(i_r280, data_r279, field_r278.property, field_r278); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r355 = i0.ɵɵnextContext();
    const data_r279 = ctx_r355.data;
    const field_r278 = ctx_r355.field;
    const ctx_r287 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r287.validate(data_r279, field_r278));
    i0.ɵɵproperty("ngModel", data_r279[field_r278.property]);
} }
function CmacsCompactTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_ng_template_6_input_0_Template, 2, 4, "input", 86);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template, 2, 4, "cmacs-date-picker", 87);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template, 2, 6, "cmacs-datetime-picker", 88);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template, 3, 15, "cmacs-select", 89);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template, 2, 8, "cmacs-input-number", 90);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template, 2, 8, "cmacs-input-number", 91);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_ng_template_6_label_6_Template, 2, 3, "label", 92);
} if (rf & 2) {
    const field_r278 = ctx.field;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r5.isString(field_r278));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isDate(field_r278));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isTime(field_r278));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isSelect(field_r278));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isNumber(field_r278) && !ctx_r5.isSelect(field_r278) && field_r278.useCommaMarker);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isNumber(field_r278) && !ctx_r5.isSelect(field_r278) && !field_r278.useCommaMarker);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isBoolean(field_r278));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_1_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 111);
} if (rf & 2) {
    const field_r356 = i0.ɵɵnextContext(2).field;
    const ctx_r369 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-icon", ctx_r369.inLineEdit && field_r356.editable)("cmacs-compact-table-edit-icon-view", !ctx_r369.inLineEdit || !field_r356.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r373 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 108);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r373); const ctx_r372 = i0.ɵɵnextContext(); const data_r357 = ctx_r372.data; const field_r356 = ctx_r372.field; const ctx_r371 = i0.ɵɵnextContext(); return ctx_r371.startEdit(data_r357[ctx_r371.config.fieldId], field_r356.property, $event, data_r357); });
    i0.ɵɵelementStart(2, "div", 109);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r373); const ctx_r375 = i0.ɵɵnextContext(); const i_r358 = ctx_r375.i; const field_r356 = ctx_r375.field; const ctx_r374 = i0.ɵɵnextContext(); return ctx_r374.onDataTapEllipsis(ctx_r374.gridID + "-row-" + i_r358 + "-" + field_r356.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_1_i_4_Template, 1, 4, "i", 110);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r376 = i0.ɵɵnextContext();
    const data_r357 = ctx_r376.data;
    const field_r356 = ctx_r376.field;
    const item_r359 = ctx_r376.item;
    const i_r358 = ctx_r376.i;
    const ctx_r361 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r361.editId === data_r357[ctx_r361.config.fieldId] && ctx_r361.property === field_r356.property && field_r356.editable && (ctx_r361.isString(field_r356) || ctx_r361.isDate(field_r356) || ctx_r361.isSelect(field_r356) || ctx_r361.isTime(field_r356)))("cmacs-compact-table-on-edit-no-padding", ctx_r361.editId === data_r357[ctx_r361.config.fieldId] && ctx_r361.property === field_r356.property && field_r356.editable && (ctx_r361.isNumber(field_r356) || ctx_r361.isDate(field_r356) || ctx_r361.isTime(field_r356) || ctx_r361.isString(field_r356)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r361.getMaxWidth(field_r356, item_r359, i_r358));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell", !ctx_r361.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r361.isNull(data_r357[field_r356.property]) || !data_r357[field_r356.property].length)("cmacs-compact-table-invalid", !ctx_r361.validate(data_r357, field_r356));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r361.gridID, "-row-", i_r358, "-", field_r356.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r361.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r361.isTooltipActive(data_r357, field_r356) ? ctx_r361.getStringFieldValue(data_r357, field_r356) : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r361.getStringFieldValue(data_r357, field_r356), " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r356.editable || field_r356.editable === undefined);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r379 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 108);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r379); const ctx_r378 = i0.ɵɵnextContext(); const data_r357 = ctx_r378.data; const field_r356 = ctx_r378.field; const ctx_r377 = i0.ɵɵnextContext(); return ctx_r377.startEdit(data_r357[ctx_r377.config.fieldId], field_r356.property, $event, data_r357); });
    i0.ɵɵelementStart(2, "div", 112);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r379); const ctx_r381 = i0.ɵɵnextContext(); const i_r358 = ctx_r381.i; const field_r356 = ctx_r381.field; const ctx_r380 = i0.ɵɵnextContext(); return ctx_r380.onDataTapEllipsis(ctx_r380.gridID + "-row-" + i_r358 + "-" + field_r356.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 113);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r382 = i0.ɵɵnextContext();
    const data_r357 = ctx_r382.data;
    const field_r356 = ctx_r382.field;
    const item_r359 = ctx_r382.item;
    const i_r358 = ctx_r382.i;
    const ctx_r362 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r362.editId === data_r357[ctx_r362.config.fieldId] && ctx_r362.property === field_r356.property && field_r356.editable && (ctx_r362.isString(field_r356) || ctx_r362.isDate(field_r356) || ctx_r362.isSelect(field_r356) || ctx_r362.isTime(field_r356)))("cmacs-compact-table-on-edit-no-padding", ctx_r362.editId === data_r357[ctx_r362.config.fieldId] && ctx_r362.property === field_r356.property && field_r356.editable && (ctx_r362.isNumber(field_r356) || ctx_r362.isDate(field_r356) || ctx_r362.isTime(field_r356) || ctx_r362.isString(field_r356)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r362.getMaxWidth(field_r356, item_r359, i_r358));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r362.validate(data_r357, field_r356))("cmacs-compact-table-overflow-cell", !ctx_r362.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r362.isNull(data_r357[field_r356.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r362.gridID, "-row-", i_r358, "-", field_r356.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r362.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r362.isEllipsisActive(ctx_r362.gridID + "-row-" + i_r358 + "-" + field_r356.property, field_r356) ? data_r357[field_r356.property] ? ctx_r362.transformDate(data_r357[field_r356.property]) : field_r356.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(data_r357[field_r356.property] ? ctx_r362.transformDate(data_r357[field_r356.property]) : field_r356.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-calendar-icon", ctx_r362.inLineEdit && field_r356.editable)("cmacs-compact-table-calendar-icon-view", !ctx_r362.inLineEdit || !field_r356.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r385 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 108);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r385); const ctx_r384 = i0.ɵɵnextContext(); const data_r357 = ctx_r384.data; const field_r356 = ctx_r384.field; const ctx_r383 = i0.ɵɵnextContext(); return ctx_r383.startEdit(data_r357[ctx_r383.config.fieldId], field_r356.property, $event, data_r357); });
    i0.ɵɵelementStart(2, "div", 112);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r385); const ctx_r387 = i0.ɵɵnextContext(); const i_r358 = ctx_r387.i; const field_r356 = ctx_r387.field; const ctx_r386 = i0.ɵɵnextContext(); return ctx_r386.onDataTapEllipsis(ctx_r386.gridID + "-row-" + i_r358 + "-" + field_r356.property); });
    i0.ɵɵpipe(3, "date");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "i", 114);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r388 = i0.ɵɵnextContext();
    const data_r357 = ctx_r388.data;
    const field_r356 = ctx_r388.field;
    const item_r359 = ctx_r388.item;
    const i_r358 = ctx_r388.i;
    const ctx_r363 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r363.editId === data_r357[ctx_r363.config.fieldId] && ctx_r363.property === field_r356.property && field_r356.editable && (ctx_r363.isString(field_r356) || ctx_r363.isDate(field_r356) || ctx_r363.isSelect(field_r356) || ctx_r363.isTime(field_r356)))("cmacs-compact-table-on-edit-no-padding", ctx_r363.editId === data_r357[ctx_r363.config.fieldId] && ctx_r363.property === field_r356.property && field_r356.editable && (ctx_r363.isNumber(field_r356) || ctx_r363.isDate(field_r356) || ctx_r363.isTime(field_r356) || ctx_r363.isString(field_r356)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r363.getMaxWidth(field_r356, item_r359, i_r358));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r363.validate(data_r357, field_r356))("cmacs-compact-table-overflow-cell", !ctx_r363.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r363.isNull(data_r357[field_r356.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r363.gridID, "-row-", i_r358, "-", field_r356.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r363.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r363.isEllipsisActive(ctx_r363.gridID + "-row-" + i_r358 + "-" + field_r356.property, field_r356) ? data_r357[field_r356.property] ? i0.ɵɵpipeBind2(3, 22, data_r357[field_r356.property], field_r356.timeFormat ? field_r356.timeFormat : "h:mm a") : field_r356.placeholder : null);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r357[field_r356.property] ? i0.ɵɵpipeBind2(5, 25, data_r357[field_r356.property], field_r356.timeFormat ? field_r356.timeFormat : "h:mm a") : field_r356.placeholder);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("cmacs-compact-table-calendar-icon", ctx_r363.inLineEdit && field_r356.editable)("cmacs-compact-table-calendar-icon-view", !ctx_r363.inLineEdit || !field_r356.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_4_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 117);
} if (rf & 2) {
    const field_r356 = i0.ɵɵnextContext(2).field;
    const ctx_r389 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-select-icon", ctx_r389.inLineEdit && field_r356.editable)("cmacs-compact-table-select-icon-view", !ctx_r389.inLineEdit || !field_r356.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r393 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 108);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r393); const ctx_r392 = i0.ɵɵnextContext(); const data_r357 = ctx_r392.data; const field_r356 = ctx_r392.field; const ctx_r391 = i0.ɵɵnextContext(); return ctx_r391.startEdit(data_r357[ctx_r391.config.fieldId], field_r356.property, $event, data_r357); });
    i0.ɵɵelementStart(2, "div", 115);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r393); const ctx_r395 = i0.ɵɵnextContext(); const i_r358 = ctx_r395.i; const field_r356 = ctx_r395.field; const ctx_r394 = i0.ɵɵnextContext(); return ctx_r394.onDataTapEllipsis(ctx_r394.gridID + "-row-" + i_r358 + "-" + field_r356.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_4_i_4_Template, 1, 4, "i", 116);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r396 = i0.ɵɵnextContext();
    const data_r357 = ctx_r396.data;
    const field_r356 = ctx_r396.field;
    const item_r359 = ctx_r396.item;
    const i_r358 = ctx_r396.i;
    const ctx_r364 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r364.editId === data_r357[ctx_r364.config.fieldId] && ctx_r364.property === field_r356.property && field_r356.editable && (ctx_r364.isString(field_r356) || ctx_r364.isDate(field_r356) || ctx_r364.isSelect(field_r356) || ctx_r364.isTime(field_r356)))("cmacs-compact-table-on-edit-no-padding", ctx_r364.editId === data_r357[ctx_r364.config.fieldId] && ctx_r364.property === field_r356.property && field_r356.editable && (ctx_r364.isNumber(field_r356) || ctx_r364.isDate(field_r356) || ctx_r364.isTime(field_r356) || ctx_r364.isString(field_r356)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r364.getMaxWidth(field_r356, item_r359, i_r358));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r364.validate(data_r357, field_r356))("cmacs-compact-table-overflow-cell", !ctx_r364.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r364.isNull(ctx_r364.getLabel(data_r357, field_r356)) || !ctx_r364.getLabel(data_r357, field_r356).length)("cmacs-compact-table-field-mode-status-low", field_r356.mode === "status" && ctx_r364.getClassStatus(data_r357, field_r356) === "low")("cmacs-compact-table-field-mode-status-medium", field_r356.mode === "status" && ctx_r364.getClassStatus(data_r357, field_r356) === "medium")("cmacs-compact-table-field-mode-status-high", field_r356.mode === "status" && ctx_r364.getClassStatus(data_r357, field_r356) === "high");
    i0.ɵɵattributeInterpolate3("id", "", ctx_r364.gridID, "-row-", i_r358, "-", field_r356.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r364.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r364.isEllipsisActive(ctx_r364.gridID + "-row-" + i_r358 + "-" + field_r356.property, field_r356) ? ctx_r364.getLabel(data_r357, field_r356) && ctx_r364.getLabel(data_r357, field_r356).length ? ctx_r364.getLabel(data_r357, field_r356) : field_r356.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r364.getLabel(data_r357, field_r356) && ctx_r364.getLabel(data_r357, field_r356).length ? ctx_r364.getLabel(data_r357, field_r356) : field_r356.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r356.mode !== "status");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r399 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 108);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r399); const ctx_r398 = i0.ɵɵnextContext(); const data_r357 = ctx_r398.data; const field_r356 = ctx_r398.field; const ctx_r397 = i0.ɵɵnextContext(); return ctx_r397.startEdit(data_r357[ctx_r397.config.fieldId], field_r356.property, $event, data_r357); });
    i0.ɵɵelementStart(2, "div", 118);
    i0.ɵɵlistener("tap", function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template_div_tap_2_listener() { i0.ɵɵrestoreView(_r399); const ctx_r401 = i0.ɵɵnextContext(); const i_r358 = ctx_r401.i; const field_r356 = ctx_r401.field; const ctx_r400 = i0.ɵɵnextContext(); return ctx_r400.onDataTapEllipsis(ctx_r400.gridID + "-row-" + i_r358 + "-" + field_r356.property); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 119);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r402 = i0.ɵɵnextContext();
    const data_r357 = ctx_r402.data;
    const field_r356 = ctx_r402.field;
    const item_r359 = ctx_r402.item;
    const i_r358 = ctx_r402.i;
    const ctx_r365 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r365.editId === data_r357[ctx_r365.config.fieldId] && ctx_r365.property === field_r356.property && field_r356.editable && (ctx_r365.isString(field_r356) || ctx_r365.isDate(field_r356) || ctx_r365.isSelect(field_r356) || ctx_r365.isTime(field_r356)))("cmacs-compact-table-on-edit-no-padding", ctx_r365.editId === data_r357[ctx_r365.config.fieldId] && ctx_r365.property === field_r356.property && field_r356.editable && (ctx_r365.isNumber(field_r356) || ctx_r365.isDate(field_r356) || ctx_r365.isTime(field_r356) || ctx_r365.isString(field_r356)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r365.getMaxWidth(field_r356, item_r359, i_r358));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r365.validate(data_r357, field_r356))("cmacs-compact-table-overflow-cell", !ctx_r365.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r365.isNull(data_r357[field_r356.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r365.gridID, "-row-", i_r358, "-", field_r356.property, "");
    i0.ɵɵproperty("cmacsTooltipTrigger", ctx_r365.getTooltipEllipsisTrigger())("cmacsTooltipTitle", ctx_r365.isEllipsisActive(ctx_r365.gridID + "-row-" + i_r358 + "-" + field_r356.property, field_r356) ? data_r357[field_r356.property] !== undefined ? field_r356.useCommaMarker ? data_r357[field_r356.property].toString().replace(".", ",") : data_r357[field_r356.property] : field_r356.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r365.getInputNumberValue(data_r357, field_r356));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-input-number-icon", ctx_r365.inLineEdit && field_r356.editable)("cmacs-compact-table-input-number-icon-view", !ctx_r365.inLineEdit || !field_r356.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r407 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 121);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_6_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r407); const data_r357 = i0.ɵɵnextContext(2).data; const ctx_r405 = i0.ɵɵnextContext(); return ctx_r405.clickHyperlink(data_r357); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r408 = i0.ɵɵnextContext(2);
    const data_r357 = ctx_r408.data;
    const field_r356 = ctx_r408.field;
    i0.ɵɵclassProp("cmacs-compact-table-hyperlink", !data_r357.parent);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r357[field_r356.property], " ");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r409 = i0.ɵɵnextContext(2);
    const data_r357 = ctx_r409.data;
    const field_r356 = ctx_r409.field;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r357[field_r356.property], " ");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_ng_template_8_ng_container_6_div_1_Template, 2, 3, "div", 120);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_8_ng_container_6_div_2_Template, 2, 1, "div", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r357 = i0.ɵɵnextContext().data;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !data_r357.parent);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r357.parent);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 125);
} if (rf & 2) {
    const ctx_r414 = i0.ɵɵnextContext(2);
    const data_r357 = ctx_r414.data;
    const field_r356 = ctx_r414.field;
    const ctx_r411 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r411.validate(data_r357, field_r356));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 126);
    i0.ɵɵelement(1, "span", 127);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r415 = i0.ɵɵnextContext(2);
    const data_r357 = ctx_r415.data;
    const field_r356 = ctx_r415.field;
    const ctx_r412 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r412.validate(data_r357, field_r356));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 128);
} if (rf & 2) {
    const ctx_r416 = i0.ɵɵnextContext(2);
    const data_r357 = ctx_r416.data;
    const field_r356 = ctx_r416.field;
    const ctx_r413 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r413.validate(data_r357, field_r356));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r419 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 108);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_7_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r419); const ctx_r418 = i0.ɵɵnextContext(); const data_r357 = ctx_r418.data; const field_r356 = ctx_r418.field; const ctx_r417 = i0.ɵɵnextContext(); return ctx_r417.startEdit(data_r357[ctx_r417.config.fieldId], field_r356.property, $event, data_r357); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_8_ng_container_7_span_2_Template, 1, 2, "span", 122);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_8_ng_container_7_span_3_Template, 2, 2, "span", 123);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_7_i_4_Template, 1, 2, "i", 124);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r420 = i0.ɵɵnextContext();
    const data_r357 = ctx_r420.data;
    const field_r356 = ctx_r420.field;
    const ctx_r367 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r367.editId === data_r357[ctx_r367.config.fieldId] && ctx_r367.property === field_r356.property && field_r356.editable && (ctx_r367.isString(field_r356) || ctx_r367.isDate(field_r356) || ctx_r367.isSelect(field_r356) || ctx_r367.isTime(field_r356)))("cmacs-compact-table-on-edit-no-padding", ctx_r367.editId === data_r357[ctx_r367.config.fieldId] && ctx_r367.property === field_r356.property && field_r356.editable && (ctx_r367.isNumber(field_r356) || ctx_r367.isDate(field_r356) || ctx_r367.isTime(field_r356) || ctx_r367.isString(field_r356)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r357[field_r356.property] == false || data_r357[field_r356.property] == "false");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r357[field_r356.property] === undefined || data_r357[field_r356.property] === null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r357[field_r356.property] === true || data_r357[field_r356.property] === "true");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, null, 129);
    i0.ɵɵelementStart(2, "div", 130);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_8_ng_container_8_ng_container_3_Template, 1, 0, "ng-container", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r423 = i0.ɵɵnextContext();
    const data_r357 = ctx_r423.data;
    const field_r356 = ctx_r423.field;
    const ci_r360 = ctx_r423.ci;
    const i_r358 = ctx_r423.i;
    const ctx_r368 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r368.editId === data_r357[ctx_r368.config.fieldId] && ctx_r368.property === field_r356.property && field_r356.editable && (ctx_r368.isString(field_r356) || ctx_r368.isDate(field_r356) || ctx_r368.isSelect(field_r356) || ctx_r368.isTime(field_r356)))("cmacs-compact-table-on-edit-no-padding", ctx_r368.editId === data_r357[ctx_r368.config.fieldId] && ctx_r368.property === field_r356.property && field_r356.editable && (ctx_r368.isNumber(field_r356) || ctx_r368.isDate(field_r356) || ctx_r368.isTime(field_r356) || ctx_r368.isString(field_r356)));
    i0.ɵɵproperty("id", ctx_r368.gridID + "column" + ci_r360 + "row" + i_r358);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", data_r357[field_r356.property].ref)("ngTemplateOutletContext", data_r357[field_r356.property].context);
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
    i0.ɵɵtemplate(8, CmacsCompactTableComponent_ng_template_8_ng_container_8_Template, 4, 7, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r356 = ctx.field;
    const data_r357 = ctx.data;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isString(field_r356));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isDate(field_r356));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isTime(field_r356));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isSelect(field_r356));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isNumber(field_r356));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isCeldTypeHyperlink(field_r356));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isBoolean(field_r356));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.isCeldTypeTemplateRef(field_r356) && data_r357[field_r356.property]);
} }
const moment = moment_;
export class CmacsCompactTableComponent {
    constructor(cdr, i18n, excelService, deviceDetector, datePipe, nzDropdownService, cookies, utilService) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.excelService = excelService;
        this.deviceDetector = deviceDetector;
        this.datePipe = datePipe;
        this.nzDropdownService = nzDropdownService;
        this.cookies = cookies;
        this.utilService = utilService;
        this.locale = {}; // tslint:disable-line:no-any
        this.headerBottomStyle = {};
        this.destroy$ = new Subject();
        this.selection = new SelectionModel(false, []);
        // tslint:disable-next-line: no-input-rename
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
        this.loadingDelay = 0;
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
        this.onresize = new EventEmitter();
        this.oncontextmenu = new EventEmitter();
        this.indentSize = 0;
        this.virtualMaxBufferPx = 200;
        this._onresize$ = new Subject();
        this.onresizeobs = this._onresize$.asObservable();
        this._onsort$ = new Subject();
        this.onsortobs = this._onsort$.asObservable();
        this.selected = false;
        this.formatter = (value) => {
            if (value) {
                return accounting.formatNumber(value, { precision: 3, thousand: " ", decimal: "," });
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
        this.editionOpTriggered = false;
        this.order = 0;
        this.clicks = 0;
        this.tapCount = 0;
    }
    oncontextmenuevt($event, item) {
        this.oncontextmenu.emit(item);
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
            .split("")
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
                                if (this.config.fields[i + 1].minWidth < (elWidthNext - delta)) {
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
        if (this.getIndexCookie()) {
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
        const formControl = field.validators ? new FormControl(data[field.property], field.validators) : new FormControl(data[field.property]);
        data.valid = data.valid ? data.valid : {};
        data.valid[field.property] = formControl.valid;
        return formControl.valid;
    }
    addRow(idx, $event = null) {
        this.onrowadded.emit(idx);
        this.editionOpTriggered = true;
        if ($event) {
            this.preventDefault($event);
        }
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
        if (field.showSort) {
            return `calc(100% - 15px)`;
        }
        return `100%`;
    }
    handleMouseDown(e) {
        const element = e.target;
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
            if (child === ancestor)
                return true;
            if (child.classList && child.classList.length > 0 && child.className && typeof child.className === 'string'
                && child.className.indexOf('cdk-overlay-pane') >= 0) {
                for (let i = 0; i < child.childNodes.length; ++i) {
                    const node = child.childNodes[i];
                    if (node.nodeName === 'CMACS-MODAL')
                        return false;
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
                let elementInCache = plainList.findIndex(el => el.data[this.config.fieldId] === elem[this.config.fieldId]);
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
            let elementInCache = plainList.findIndex(el => el.data[this.config.fieldId] === item[this.config.fieldId]);
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
    ngAfterViewInit() {
        if (this.getIndexCookie() && this.cookies.check(this.gridID)) {
            const savedConfigStr = this.cookies.get(this.gridID);
            // reset expiration date
            this.cookies.set(this.gridID, savedConfigStr, 365);
            // parse cookie value to typescript const
            const savedConfig = JSON.parse(this.cookies.get(this.gridID));
            if (typeof savedConfig === "object") {
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
            for (let b of Array.from(expandButton)) {
                b.addEventListener("click", ($event) => {
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
        }
        this.cdr.detectChanges();
        this.disableSelectEventOnExpand();
    }
    /* getTreeNodeByKey(node: any, key: any) {
       console.log(node)
       if (isArray(node)) {
         node.forEach(el => {
           this.getTreeNodeByKey(el, key);
         })
       } else if (node[this.fieldID] === key) {
         return node;
       } else if (node.children) {
         node.children.forEach(el => {
           this.getTreeNodeByKey(el, key);
         })
       }
     }*/
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
        const filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + fileName + '.pdf';
        doc.save(filenameFormatted);
    }
    exportTreeToPdfRec(rows, data, offSetMargin = 0) {
        data.forEach(item => {
            const itemToExport = [];
            const coercedItem = item;
            let parentStyles = { cellPadding: [2, 2, 2, 2] };
            // tslint:disable-next-line: no-shadowed-variable
            this.config.fields.filter(item => item.celdType === CeldType.Default || item.celdType === CeldType.TemplateRef).forEach((field, idx) => {
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
            for (let child of subtree.children) {
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
        let test = this.checkboxCache.filter(n => n.data[this.fieldID] === key);
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
        const filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + fileName;
        this.excelService.exportAsExcelFile(dataToExport, filenameFormatted);
    }
    /* Expandable Rows */
    exportTreeExcel(fileName) {
        const dataToExport = [];
        this.exportTreeExcelRec(this.data, dataToExport);
        const filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + fileName;
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
                selectedItems: this.checkboxSelect ? this.checkboxCache.filter(item => item.selected).map(item => item.data[this.config.fieldId]) : [],
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
        return this.config && ((this.isBoolean(field) && !this.inLineEdit) || (!this.isBoolean(field) && (this.editId !== item[this.config.fieldId] || this.property !== field.property || field.editable === false)));
    }
    showViewModeTplTree(field, data) {
        if (!this.isNull(data.hiddenFields)
            && data.hiddenFields.filter(x => x === field.property).length) {
            return false;
        }
        return this.config && ((this.isBoolean(field) && !this.inLineEdit) || (!this.isBoolean(field) && (this.editId !== data[this.config.fieldId] || this.property !== field.property || field.editable === false)));
    }
    showEditTpl(item, field) {
        if (!this.isNull(item.hiddenFields)
            && item.hiddenFields.filter(x => x === field.property).length) {
            return false;
        }
        return this.config && ((this.isBoolean(field) && this.inLineEdit && (field.editable || field.editable === undefined)) || (!this.isBoolean(field) && this.editId === item[this.config.fieldId] && this.property === field.property && (field.editable || field.editable === undefined)));
    }
    showEditTplTree(data, field) {
        if (!this.isNull(data.hiddenFields)
            && data.hiddenFields.filter(x => x === field.property).length) {
            return false;
        }
        return this.config && ((this.isBoolean(field) && this.inLineEdit && (field.editable || field.editable === undefined)) || (!this.isBoolean(field) && this.editId === data[this.config.fieldId] && this.property === field.property && (field.editable || field.editable === undefined)));
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
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzTableComponent = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzItemRender = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputNumberElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputNumberComponent = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datePickerElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dateTimePickerElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.boolElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dateTimePicker = _t.first);
    } }, hostVars: 2, hostBindings: function CmacsCompactTableComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mousedown", function CmacsCompactTableComponent_mousedown_HostBindingHandler($event) { return ctx.handleMouseDown($event); }, false, i0.ɵɵresolveDocument);
    } if (rf & 2) {
        i0.ɵɵclassProp("cmacs-compact-table-logs", ctx.logs);
    } }, inputs: { size: "size", showTotal: "showTotal", pageSizeOptions: "pageSizeOptions", virtualScroll: "virtualScroll", exclusiveSelect: "exclusiveSelect", logs: "logs", expandable: "expandable", smartTable: "smartTable", draggable: "draggable", virtualItemSize: "virtualItemSize", expandAll: "expandAll", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", total: "total", title: "title", footer: "footer", noResult: "noResult", widthConfig: "widthConfig", pageIndex: "pageIndex", pageSize: "pageSize", actionColumnWidth: "actionColumnWidth", wrapLines: "wrapLines", data: "data", config: "config", use12Hours: "use12Hours", fieldId: "fieldId", gridID: "gridID", paginationPosition: "paginationPosition", scroll: "scroll", frontPagination: "frontPagination", templateMode: "templateMode", bordered: "bordered", centerTable: "centerTable", showPagination: "showPagination", loading: "loading", showSizeChanger: "showSizeChanger", hideOnSinglePage: "hideOnSinglePage", showQuickJumper: "showQuickJumper", simple: "simple", checkboxSelect: "checkboxSelect", inLineEdit: "inLineEdit", dataTable: "dataTable", showRate: "showRate", exportEvent: "exportEvent", rateCount: "rateCount", multiSelect: "multiSelect", extra: "extra", contextmenu: "contextmenu", indentSize: "indentSize", virtualMaxBufferPx: "virtualMaxBufferPx" }, outputs: { configChange: "configChange", buttonClick: "buttonClick", rateChange: "rateChange", selectionChange: "selectionChange", ondlclickRow: "ondlclickRow", onclickRow: "onclickRow", onclickHyperlink: "onclickHyperlink", onedit: "onedit", onRowExpandCollapse: "onRowExpandCollapse", ondrop: "ondrop", sortChange: "sortChange", filterChange: "filterChange", onrowdeleted: "onrowdeleted", onrowadded: "onrowadded", onresize: "onresize", oncontextmenu: "oncontextmenu" }, exportAs: ["cmacsCompactTable"], features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 36, consts: [[3, "id"], [1, "cmacs-compact-table", 3, "nzData", "nzShowTotal", "nzPageSizeOptions", "nzVirtualItemSize", "nzLoadingDelay", "nzVirtualMaxBufferPx", "nzLoadingIndicator", "nzTotal", "nzTitle", "nzFooter", "nzNoResult", "nzWidthConfig", "nzPageIndex", "nzPageSize", "nzPaginationPosition", "nzScroll", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], ["gridComponent", ""], [4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListDropped", 4, "ngIf"], ["editTpl", ""], ["viewModeTpl", ""], ["nzWidth", "40px", "class", "cmacs-compact-table-smart-table-hot-spot-row-add cmacs-compact-table-smart-action-header", 3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "minWidth", "maxWidth", "nzLeft", 4, "ngIf"], ["nzWidth", "40px", 3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], ["nzWidth", "30px", "nzLeft", "0px", 3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzWidth", "maxWidth", "minWidth", "nzRight", 4, "ngIf"], ["nzWidth", "40px", "class", "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "minWidth", "maxWidth", "nzRight", "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], [3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], ["nzWidth", "40px", 1, "cmacs-compact-table-smart-table-hot-spot-row-add", "cmacs-compact-table-smart-action-header", 3, "nzLeft"], [1, "cmacs-compact-table-smart-table-hot-spot-row-add-icon", "iconUILarge-New", 3, "click"], ["nzWidth", "40px", 3, "nzLeft"], ["nzWidth", "30px", "nzLeft", "0px", 3, "nzLeft"], ["cmacs-checkbox", "", 3, "ngModel", "indeterminate", "ngModelChange", "checkedChange"], [4, "ngIf", "ngIfElse"], ["thWithFilters", ""], ["nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzShowSort", "nzShowFilter", "nzFilters", "nzFilterMultiple", "nzDisabled", "nzMinWidth", "nzMaxWidth", "ngClass", "nzSortOrder", "nzWidth", "nzLeft", "nzRight", "nzFilterChange", "nzResizeEnd", "nzSortOrderChange"], [3, "id", 4, "ngIf"], ["nzDirection", "right", 4, "ngIf"], ["cmacs-tooltip", "", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nzDirection", "right"], [1, "cmacs-compact-table-resize-trigger"], ["nzCustomFilter", "", "nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzShowSort", "nzDisabled", "ngClass", "nzSortOrder", "nzWidth", "nzMinWidth", "nzMaxWidth", "nzLeft", "nzRight", "nzResizeEnd", "nzSortOrderChange"], ["nzTrigger", "click", "nzPlacement", "bottomRight", "nzTableFilter", "", 3, "nzClickHide"], ["dropdown", ""], ["nz-icon", "", "nzType", "search", "nz-dropdown", "", 1, "ant-table-filter-icon"], [3, "nzWidth", "nzRight"], [1, "cmacs-compact-table-extra"], [4, "nzStringTemplateOutlet"], ["nzWidth", "40px", 1, "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "nzRight"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["defaultTpl", ""], [3, "id", "cmacs-compact-table-expandable-row", "cmacs-compact-table-row-active", "cmacs-compact-table-header-logs", "ant-table-selected-row", "click", "touchstart", "contextmenu", "dblclick", 4, "ngIf"], [3, "id", "click", "touchstart", "contextmenu", "dblclick"], ["style", "padding: 7px 10px", 3, "nzLeft", "minWidth", "maxWidth", "width", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], [3, "ngClass", "cmacs-editable-column", "cmacs-compact-table-on-edit-expandable", "cmacs-compact-table-logs-header-th-font", "cmacs-compact-table-expandable-td", "paddingLeft", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "minWidth", "nzExpandChange", 4, "ngFor", "ngForOf"], ["class", "cmacs-compact-table-rating", "style", "padding: 7px 10px", 3, "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "cmacs-compact-table-logs-header-th-font", "nzRight", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-align-td", 3, "cmacs-compact-table-logs-td", 4, "ngIf"], [2, "padding", "7px 10px", 3, "nzLeft"], [3, "ngClass", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "nzExpandChange"], [3, "display", "cmacs-compact-table-overflow-cell-container-logs", "width", 4, "ngIf"], [3, "display", "width", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cmacs-compact-table-rating", 2, "padding", "7px 10px"], [3, "ngModel", "nzCount", "nzDisabled", "ngModelChange", "click"], [2, "padding", "7px 10px", 3, "nzRight"], [1, "cmacs-compact-table-align-td", 2, "padding", "7px 10px"], ["cdkDrag", "", "class", "cmacs-no-selection", 3, "cdkDragDisabled", "id", "cmacs-compact-table-row-active", "ant-table-selected-row", "cmacs-compact-table-editable-row", "cmacs-compact-table-smart-table-row", "click", "touchstart", "contextmenu", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "cmacs-no-selection", 3, "cdkDragDisabled", "id", "click", "touchstart", "contextmenu"], ["contextMenuTemplate", "cmacsDropdownMenu"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-add", 3, "maxWidth", "minWidth", "cmacs-compact-table-logs-td", "nzLeft", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-drag-col cmacs-compact-table-fst-td", 3, "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "nzLeft", "cmacs-compact-table-fst-td", 4, "ngIf"], [3, "ngClass", "cmacs-editable-column", "cmacs-compact-table-fst-td", "nzLeft", "nzRight", "minWidth", 4, "ngFor", "ngForOf"], ["style", "padding: 7px 10px", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "nzRight", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "nzRight", "maxWidth", "minWidth", "cmacs-compact-table-logs-td", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-row-add", 2, "padding", "7px 10px", 3, "nzLeft"], [1, "cmacs-compact-table-drag-col", "cmacs-compact-table-fst-td", 2, "padding", "7px 10px", 3, "nzLeft"], ["cdkDragHandle", "", 1, "iconUILarge-Move", "cmacs-compact-table-drag-handler"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange"], [3, "ngClass", "nzLeft", "nzRight"], ["style", "max-width: 98%", 4, "ngIf"], [2, "max-width", "98%"], [2, "padding", "7px 10px"], [3, "ngModel", "nzCount", "ngModelChange", "click"], [1, "cmacs-compact-table-smart-table-hot-spot-row-delete", 2, "padding", "7px 10px", 3, "nzRight"], ["class", "cmacs-compact-table-smart-table-hot-spot-row-delete-icon iconUISmall-Close", 3, "click", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-row-delete-icon", "iconUISmall-Close", 3, "click"], ["nz-virtual-scroll", ""], ["defaultTplVirtualScroll", ""], [3, "id", "cmacs-compact-table-row-active", "cmacs-compact-table-expandable-row", "cmacs-compact-table-header-logs", "touchstart", "contextmenu", "dblclick", 4, "ngIf"], [3, "id", "touchstart", "contextmenu", "dblclick"], [3, "cmacs-editable-column", "cmacs-compact-table-on-edit-expandable", "cmacs-compact-table-logs-header-th-font", "cmacs-compact-table-expandable-td", "paddingLeft", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "minWidth", "nzExpandChange", 4, "ngFor", "ngForOf"], [3, "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "nzExpandChange"], ["contextMenuTemplate", ""], [3, "cmacs-editable-column", "cmacs-compact-table-fst-td", "nzLeft", "nzRight", "minWidth", 4, "ngFor", "ngForOf"], [3, "nzLeft", "nzRight"], ["class", "cmacs-compact-table-input", "type", "text", "cmacs-input", "", 3, "cmacs-compact-table-edit-mode-invalid", "placeholder", "ngModel", "click", "dblclick", "ngModelChange", "keyup", 4, "ngIf"], ["class", "cmacs-compact-table-date-edit", 3, "allowClear", "cmacs-compact-table-edit-mode-invalid", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["class", "cmacs-compact-table-datetime-picker", "hideSeconds", "", 3, "use12Hours", "cmacs-compact-table-edit-mode-invalid", "format", "defaultOpenValue", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["class", "cmacs-compact-table-select-cell", "showSearch", "", 3, "cmacs-compact-table-field-mode-status", "cmacs-compact-table-field-mode-status-low-edit", "cmacs-compact-table-field-mode-status-medium-edit", "cmacs-compact-table-field-mode-status-high-edit", "cmacs-compact-table-edit-mode-invalid", "placeHolder", "mode", "showCmacsSearch", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["class", "cmacs-compact-table-input-number-edit", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "cmacsStep", "min", "max", "formatter", "parser", "ngModelChange", "click", "dblclick", "keyup", 4, "ngIf"], ["class", "cmacs-compact-table-input-number-edit", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "formatter", "parser", "cmacsStep", "min", "max", "ngModelChange", "click", "dblclick", "keyup", 4, "ngIf"], ["cmacs-checkbox", "", "class", "cmacs-compact-tabe-editable-checkbox", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "cmacs-input", "", 1, "cmacs-compact-table-input", 3, "placeholder", "ngModel", "click", "dblclick", "ngModelChange", "keyup"], ["fieldTypeInput", ""], [1, "cmacs-compact-table-date-edit", 3, "allowClear", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDatePicker", ""], ["hideSeconds", "", 1, "cmacs-compact-table-datetime-picker", 3, "use12Hours", "format", "defaultOpenValue", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDateTimePicker", ""], ["showSearch", "", 1, "cmacs-compact-table-select-cell", 3, "placeHolder", "mode", "showCmacsSearch", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeSelect", ""], [3, "label", "value", "divider", "disabled", 4, "ngFor", "ngForOf"], [3, "label", "value", "divider", "disabled"], [1, "cmacs-compact-table-input-number-edit", 3, "ngModel", "cmacsStep", "min", "max", "formatter", "parser", "ngModelChange", "click", "dblclick", "keyup"], ["fieldTypeInputNumber", ""], [1, "cmacs-compact-table-input-number-edit", 3, "ngModel", "formatter", "parser", "cmacsStep", "min", "max", "ngModelChange", "click", "dblclick", "keyup"], ["cmacs-checkbox", "", 1, "cmacs-compact-tabe-editable-checkbox", 3, "ngModel", "ngModelChange"], ["fieldTypeBool", ""], [2, "width", "98%", "max-width", "98%", "padding", "7px 10px", 3, "click"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], ["class", "iconUISmall-Edit", 3, "cmacs-compact-table-edit-icon", "cmacs-compact-table-edit-icon-view", 4, "ngIf"], [1, "iconUISmall-Edit"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-date", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], [1, "iconUILarge-Calendar"], [1, "iconUILarge-Time"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-select", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], ["class", "iconArrowLarge-Chevron-Down", 3, "cmacs-compact-table-select-icon", "cmacs-compact-table-select-icon-view", 4, "ngIf"], [1, "iconArrowLarge-Chevron-Down"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-input-number", 3, "cmacsTooltipTrigger", "cmacsTooltipTitle", "tap"], [1, "iconArrowLarge-Solid-UpDown"], [3, "cmacs-compact-table-hyperlink", "click", 4, "ngIf"], [3, "click"], ["class", "cmacs-compact-table-boolean-false-icon cmacs-compact-table-boolean-icon", 3, "cmacs-compact-table-invalid", 4, "ngIf"], ["class", "cmacs-compact-table-boolean-indeterminate-icon cmacs-compact-table-boolean-icon", 3, "cmacs-compact-table-invalid", 4, "ngIf"], ["class", "iconUILarge-Select-All cmacs-compact-table-boolean-icon-true", 3, "cmacs-compact-table-invalid", 4, "ngIf"], [1, "cmacs-compact-table-boolean-false-icon", "cmacs-compact-table-boolean-icon"], [1, "cmacs-compact-table-boolean-indeterminate-icon", "cmacs-compact-table-boolean-icon"], [1, "cmacs-compact-table-boolean-indeterminate-icon-inner"], [1, "iconUILarge-Select-All", "cmacs-compact-table-boolean-icon-true"], ["templateRefCeld", ""], [2, "width", "98%", "max-width", "98%", "padding", "7px 10px", 3, "id"]], template: function CmacsCompactTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "nz-table", 1, 2);
        i0.ɵɵtemplate(3, CmacsCompactTableComponent_thead_3_Template, 10, 10, "thead", 3);
        i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_4_Template, 2, 1, "tbody", 4);
        i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_5_Template, 2, 0, "tbody", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, CmacsCompactTableComponent_ng_template_6_Template, 7, 7, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(8, CmacsCompactTableComponent_ng_template_8_Template, 9, 8, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
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
    } }, directives: [i8.NzTableComponent, i4.NgIf, i8.NzTheadComponent, i8.NzTrDirective, i4.NgForOf, i8.NzTableCellDirective, i8.NzThMeasureDirective, i8.NzCellFixedDirective, i9.CmacsCheckboxComponent, i10.NgControlStatus, i10.NgModel, i8.NzThAddOnComponent, i11.NzResizableDirective, i4.NgClass, i12.CmacsTooltipDirective, i4.NgTemplateOutlet, i11.NzResizeHandleComponent, i13.ɵNzTransitionPatchDirective, i14.NzIconDirective, i15.NzDropDownDirective, i16.NzStringTemplateOutletDirective, i8.NzTbodyComponent, i17.CdkDropList, i8.NzTdAddOnComponent, i18.NzRateComponent, i17.CdkDrag, i19.CmacsDropdownMenuComponent, i17.CdkDragHandle, i8.NzTableVirtualScrollDirective, i20.CmacsInputDirective, i10.DefaultValueAccessor, i21.CmacsDatePickerComponent, i22.CmacsDateTimePickerComponent, i23.CmacsSelectComponent, i24.CmacsOptionComponent, i25.CmacsInputNumberComponent], pipes: [i4.DatePipe], styles: [".cmacs-compact-table-field-valid-placeholder[_ngcontent-%COMP%]{color:#bec4cd}.cmacs-compact-table-boolean-icon[_ngcontent-%COMP%]{width:14px;height:14px;position:relative;top:-1px}.cmacs-compact-table-boolean-icon-true[_ngcontent-%COMP%]{font-size:16px;position:relative;top:1px}.cmacs-compact-table-hyperlink[_ngcontent-%COMP%]:hover{color:#2a7cff;cursor:pointer}.cmacs-compact-tabe-editable-checkbox[_ngcontent-%COMP%]{padding:2px 10px}  .cmacs-compact-tabe-editable-checkbox .ant-checkbox-inner:after{top:50%;left:23%;width:4.71px;height:8px}  .cmacs-compact-tabe-editable-checkbox .ant-checkbox-inner{width:16px;height:16px}.cmacs-compact-table-resize-trigger[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#bfbfbf;position:absolute;right:10px;opacity:0}  .cmacs-compact-table th:hover .cmacs-compact-table-resize-trigger{opacity:1}  .cmacs-compact-table .nz-resizable-preview{border-top:none!important;border-left:none!important;height:100%;border:solid #2a7cff;border-width:0 1px 0 0;max-height:100%;padding:0;margin:0}  .cmacs-compact-table .nz-resizable .ant-table-filter-trigger-container{right:10px;display:inline-block}  .cmacs-compact-table .ant-table-cell.ant-table-cell-fix-left,   .cmacs-compact-table .ant-table-cell.ant-table-cell-fix-right{z-index:10}  .cmacs-compact-table .nz-resizable.ant-table-cell.ant-table-cell-fix-left.ant-table-cell-fix-left-last .nz-resizable-handle-right{right:0!important}  .cmacs-compact-table .ant-table-filter-column{margin:0}  .cmacs-compact-table .ant-table-filter-column-title{padding:0}  .cmacs-compact-table .nz-resizable-handle-right{right:0}  .cmacs-compact-table-edit-mode-invalid,   .cmacs-compact-table-edit-mode-invalid .ant-select-selection,   .cmacs-compact-table-edit-mode-invalid:focus,   .cmacs-compact-table-edit-mode-invalid:focus .ant-select-selection,   .cmacs-compact-table-edit-mode-invalid:hover,   .cmacs-compact-table-edit-mode-invalid:hover .ant-select-selection,   .cmacs-compact-table-invalid.cmacs-compact-table-boolean-indeterminate-icon{border-color:#f6503c!important}.cmacs-compact-table-datetime-picker.ant-picker-focused[_ngcontent-%COMP%]:not(.cmacs-time-picker-opened),   .cmacs-compact-table .ant-picker:not(.ant-picker-disabled):not(.cmacs-time-picker-opened):not(.ant-picker-focused):hover,   .cmacs-compact-table .ant-picker:not(.ant-picker-focused):not(.cmacs-time-picker-opened){border-color:#2a7cff!important}.cmacs-compact-table-datetime-picker[_ngcontent-%COMP%]{padding:8px 11px;width:100%}  .cmacs-compact-table .ant-table-placeholder .ant-table-cell,   .cmacs-compact-table .ant-table-tbody>tr.ant-table-placeholder:hover{box-shadow:none!important;border-bottom:none!important}  .cmacs-compact-table tr.ant-table-placeholder .ant-table-expanded-row-fixed{margin:0!important;padding:0!important}  .cmacs-compact-table .ant-table-tbody>tr.ant-table-placeholder:hover>td{box-shadow:none!important}  .cmacs-compact-table .ant-table-thead>tr>th:not(.cmacs-compact-table-logs-header-th).ant-table-column-has-sorters:hover{background-color:#fff!important}  .cmacs-compact-table .ant-table-thead>tr>th.cmacs-compact-table-logs-header-th.ant-table-column-has-sorters:hover{background-color:#f6f7fb!important}  .cmacs-compact-table .ant-table-tbody>tr>td.cmacs-compact-table-align-td{border-bottom:none!important;box-shadow:none!important;background-color:#f6f7fb!important}  .cmacs-compact-table-overflow-cell-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5em}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column{vertical-align:middle}  .cmacs-compact-table-smart-action-header i{position:relative!important;top:0!important}  .cmacs-compact-table .ant-table-column-sorter-inner{margin-left:0;margin-right:0}  .cmacs-compact-table .ant-table-column-sorter{width:12px;display:none!important;right:0;position:absolute}  .cmacs-compact-table th:hover .ant-table-column-sorter{display:table-cell!important;right:0;position:absolute}  .cmacs-compact-table .ant-table-column-sorters,   .cmacs-compact-table .ant-table-header-column{width:100%;padding:0}  .cmacs-compact-table .ant-table-column-sorters span:not(.ant-table-column-sorter){width:100%}  .cmacs-compact-table-rating{min-width:105px}  .cmacs-compact-table-invalid,   .cmacs-compact-table-invalid+i{color:#f6503c!important;opacity:1!important}  .cmacs-compact-table-invalid.cmacs-compact-table-boolean-indeterminate-icon .cmacs-compact-table-boolean-indeterminate-icon-inner{background-color:#f6503c}  .cmacs-compact-table .ant-table-thead{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;color:#656c79}  .cmacs-compact-table .ant-table-thead>tr>th{padding:8px 10px}  .cmacs-compact-table-drag-handler{color:#bec4cd;font-size:20px;padding:0 0 0 8px;margin:0;vertical-align:middle}  .cmacs-compact-table-drag-placeholder{border-bottom:1px solid #2a7cff;color:#2a7cff;text-align:left;min-width:100%}  .cmacs-compact-table-drag-preview{color:#2a7cff;opacity:.5;text-align:left}  .cmacs-compact-table-drag-handler:hover{cursor:pointer;color:#2a7cff}  .cmacs-compact-table-drag-col{padding:0!important;margin:0!important}  .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-add,   .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-delete{background:#fff;border-bottom-color:transparent;border-top-color:transparent}  .cmacs-compact-table .ant-table-row-indent+.ant-table-row-expand-icon{margin-top:8.5px;margin-right:8px}  .cmacs-compact-table .ant-table-header{background:transparent}  .cmacs-compact-table-balance-padding{padding:6px!important}  .cmacs-compact-table .ant-table-tbody>tr>td{padding:0;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae;transition:none}  .cmacs-compact-table .ant-table-tbody>tr:not(.ant-table-selected-row)>td:not(.cmacs-compact-table-logs-header-th-font):not(.cmacs-compact-table-align-td){background-color:#fff!important}  .cmacs-compact-table .ant-table-thead>tr>th:not(.cmacs-compact-table-logs-header-th){background:#fff!important;border-bottom:1px solid #dee0e5}  .cmacs-compact-table .ant-table-tbody>tr:not(.ant-table-placeholder):hover td.cmacs-compact-table-fst-td,   .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):not(.ant-table-placeholder):hover td:first-child{box-shadow:inset 3px 0 0 #2a7cff}  .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td,   .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff!important}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:hover td:not(:first-child):not(.ant-table-td-right-sticky):not(.ant-table-td-left-sticky),   .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-right-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add):first-child.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-add{border-bottom:0}  .cmacs-compact-table .ant-table-tbody>.cmacs-compact-table-smart-table-row:hover>td:last-child,   .cmacs-compact-table .ant-table-tbody>.cmacs-compact-table-smart-table-row>td:last-child{box-shadow:none!important}  .cmacs-compact-table .editable-cell{position:relative}  .cmacs-compact-table .ant-rate-star{font-size:16px;margin:0}  .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-add:hover~td:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),   .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover~td{border-bottom-color:#2a7cff}  .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td{border-bottom-color:#f6503c}  .cmacs-compact-table-smart-table-hot-spot-row-add,   .cmacs-compact-table-smart-table-hot-spot-row-add:hover,   .cmacs-compact-table-smart-table-hot-spot-row-delete,   .cmacs-compact-table-smart-table-hot-spot-row-delete:hover{width:28px;border-bottom-color:transparent!important;border-top-color:transparent!important;background-color:#fff!important;box-shadow:none!important;border-bottom:0}  .cmacs-compact-table-logs-td,   .cmacs-compact-table-logs-td:hover{background-color:#f6f7fb!important}  .ant-table-thead>tr:hover .cmacs-compact-table-smart-table-hot-spot-row-add-icon,   .ant-table-thead>tr:hover .cmacs-compact-table-smart-table-hot-spot-row-delete-icon,   tr:hover .cmacs-compact-table-smart-table-hot-spot-row-add-icon,   tr:hover .cmacs-compact-table-smart-table-hot-spot-row-delete-icon{opacity:1!important}  .cmacs-compact-table-smart-table-hot-spot-row-add-icon:hover,   .cmacs-compact-table-smart-table-hot-spot-row-delete-icon:hover{cursor:pointer}  .cmacs-compact-table-smart-table-hot-spot-row-delete-icon{font-size:14px;border-radius:100px;background-color:#f6503c;color:#fff;padding:2px;display:flex;width:18px;opacity:0}  .cmacs-compact-table-smart-table-hot-spot-row-add-icon{font-size:14px;border-radius:100px;background-color:#2a7cff;color:#fff;padding:2px;display:flex;opacity:0;width:18px}  .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add):not(.cmacs-compact-table-smart-table-hot-spot-row-delete){background-color:#f2f7ff!important}  .cmacs-compact-table .ant-spin-nested-loading{clear:both}  .cmacs-compact-table-extra,   .cmacs-compact-table-extra a,   .cmacs-compact-table-extra a i,   .cmacs-compact-table-extra i{font-size:16px;color:#656c79;display:inline-flex}  .cmacs-compact-table-extra{position:relative}  .cmacs-compact-table-extra a,   .cmacs-compact-table-extra a i,   .cmacs-compact-table-extra i{margin-right:5px}  .cmacs-compact-table-extra a:hover,   .cmacs-compact-table-extra a i:hover,   .cmacs-compact-table-extra i:hover{cursor:pointer}  .cmacs-compact-table a,   .cmacs-compact-table a:hover{color:#656c79}  .cmacs-compact-table-edit-icon{float:right;font-size:16px;position:relative;opacity:0}  .cmacs-compact-table-edit-icon-view{display:none}  .cmacs-compact-table-edit-icon:hover{color:#2a7cff;cursor:pointer}  .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-edit-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-edit-icon{opacity:1}  .cmacs-compact-table-input,   .cmacs-compact-table-input:focus,   .cmacs-compact-table-input:hover,   .cmacs-compact-table-select{max-width:100%;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;border-color:#2a7cff;box-shadow:none}  .cmacs-compact-table-input{padding-left:3px}  .cmacs-compact-table-on-edit{padding:0 6px!important}  .cmacs-compact-table-on-edit-expandable{padding-top:0!important;padding-bottom:0!important}  .cmacs-compact-table-on-edit-no-padding{padding:0 0 0 6px!important}  .cmacs-compact-table-calendar-icon,   .cmacs-compact-table-calendar-icon-view,   .cmacs-compact-table-input-number-icon,   .cmacs-compact-table-input-number-icon-view,   .cmacs-compact-table-select-icon,   .cmacs-compact-table-select-icon-view{float:right;font-size:16px;position:relative;line-height:18px}  .cmacs-compact-table-editable-row:hover .cmacs-compact-table-calendar-icon,   .cmacs-compact-table-editable-row:hover .cmacs-compact-table-input-number-icon,   .cmacs-compact-table-editable-row:hover .cmacs-compact-table-select-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-calendar-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-input-number-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-select-icon{color:#656c79}  .cmacs-compact-table-calendar-icon:hover,   .cmacs-compact-table-input-number-icon:hover,   .cmacs-compact-table-select-icon:hover{cursor:pointer}  .cmacs-compact-table-date,   .cmacs-compact-table-input-number,   .cmacs-compact-table-select{border-bottom:2px dotted transparent;border-top:2px solid transparent;padding-left:2px;margin:-2px;padding-right:2px}  .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-date,   .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-input-number,   .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-select,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-date,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-input-number,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-select{border-bottom:2px dotted #656c79;border-top:2px solid transparent;padding-left:2px;margin:-2px;padding-right:2px}  .cmacs-compact-table-date-edit .ant-calendar-input,   .cmacs-compact-table-date-edit cmacs-picker span input,   .cmacs-compact-table-datetime-picker input{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal}  .cmacs-compact-table .cmacs-compact-table-select-cell{width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal}  .cmacs-compact-table .cmacs-compact-table-select-cell .ant-select-selection{height:34px!important;border:1px solid #2a7cff;margin-left:0;margin-right:0}  .cmacs-compact-table .ant-select-arrow{right:1px}  .cmacs-compact-table-date-edit cmacs-picker span input,   .cmacs-compact-table-datetime-picker input{padding-left:3px}  .cmacs-compact-table-date-edit cmacs-picker span .ant-calendar-picker-clear,   .cmacs-compact-table-date-edit cmacs-picker span .ant-calendar-picker-icon{margin-top:-8px;margin-right:-1px}  .cmacs-compact-table cmacs-input-number.ant-input-number:not(.cmacs-datetime-picker-input-number){margin-bottom:-5px;margin-left:-9px}  .cmacs-compact-table cmacs-input-number input.ant-input-number-input{height:32px;padding-left:12px}  .cmacs-compact-table .cmacs-compact-table-expandable-row .cmacs-compact-table-expandable-td input.cmacs-compact-table-input,   .cmacs-compact-table .cmacs-compact-table-expandable-row .cmacs-compact-table-on-edit-expandable input.cmacs-compact-table-input{margin-left:-4px}.cmacs-compact-table-input[_ngcontent-%COMP%]{width:96%;border-color:#2a7cff!important}  .cmacs-compact-table .cmacs-compact-table-on-edit-expandable .ant-picker,   .cmacs-compact-table .cmacs-compact-table-on-edit-expandable .cmacs-compact-table-date-edit{padding-left:2px;padding-right:2px}  .cmacs-compact-table .cmacs-compact-table-on-edit-expandable cmacs-select.cmacs-compact-table-select-cell .ant-select-selection__rendered{margin-left:7px}  .cmacs-compact-table .cmacs-compact-table-on-edit-expandable cmacs-select .ant-select-arrow{right:-2px}  .cmacs-compact-table-date-edit cmacs-picker span input,   .cmacs-compact-table-date-edit cmacs-picker span input:focus,   .cmacs-compact-table-date-edit cmacs-picker span input:focus-within,   .cmacs-compact-table-date-edit cmacs-picker span input:hover,   .cmacs-compact-table-datetime-picker input,   .cmacs-compact-table-datetime-picker input:focus,   .cmacs-compact-table-datetime-picker input:focus-within,   .cmacs-compact-table-datetime-picker input:hover,   .cmacs-compact-table-input-number-edit,   .cmacs-compact-table-input-number-edit:focus,   .cmacs-compact-table-input-number-edit:focus-within,   .cmacs-compact-table-input-number-edit:hover{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;border-color:#2a7cff!important}  .cmacs-compact-table-overflow-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:100%;vertical-align:middle;line-height:20px}  .cmacs-compact-table .ant-table-row-expand-icon-collapsed:after{font-family:ArrowSmall!important;content:\"\\e903\";transition:all .3s;width:unset;transform:unset;position:static;background:transparent}  .cmacs-compact-table .ant-table-row-expand-icon-collapsed:before{content:unset}  .cmacs-compact-table .ant-table-row-expand-icon-collapsed{margin-right:5px;border:none;transition:all .3s}  .cmacs-compact-table .ant-table-row-expand-icon-expanded:after{font-family:ArrowSmall!important;content:\"\\e900\";transition:all .3s;width:unset;transform:unset;position:static;background:transparent}  .cmacs-compact-table .ant-table-row-expand-icon-expanded{margin-right:5px;border:none;transition:all .3s}  .cmacs-compact-table .ant-table-row-expand-icon-expanded:before{content:unset}  .cmacs-compact-table-header-logs,   .cmacs-compact-table-header-logs:hover{background-color:#f6f7fb!important;color:#656c79!important}  thead .cmacs-compact-table-header-logs{box-shadow:inset 0 -1px 0 #dee0e5}  .cmacs-compact-table-logs-header-th-font,   .cmacs-compact-table-logs-header-th-font:hover{color:#656c79!important;background-color:#f6f7fb!important}  .cmacs-compact-table-logs-header-th-font.th,   .cmacs-compact-table-logs-header-th-font.th:hover{border-bottom:1px solid #dee0e5!important}  .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#f6f7fb!important}  .cmacs-compact-table-boolean-false-icon,   .cmacs-compact-table-boolean-indeterminate-icon{width:10px;border:1px solid #dee0e5;height:10px;display:block}  .cmacs-compact-table-boolean-indeterminate-icon{padding:1px}  .cmacs-compact-table-boolean-indeterminate-icon-inner{width:6px;background-color:#dee0e5;height:6px;display:block}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0;border-bottom:1px solid #2a7cff!important;background-color:#fff}.cdk-drag-placeholder[_ngcontent-%COMP%]{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff;opacity:1}  .cmacs-compact-table-smart-add-row-icon-visible{z-index:2;position:absolute;opacity:1!important}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-add){box-shadow:7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-add),   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete){border-bottom:1px solid #dee0e5}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky{box-shadow:0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky+.ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky+.ant-table-th-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky+.ant-table-td-right-sticky{box-shadow:none}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-right-sticky{box-shadow:0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky~.ant-table-td-right-sticky,  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-right-sticky~.ant-table-th-right-sticky{box-shadow:none}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky~.ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky~.ant-table-td-right-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-th-left-sticky{box-shadow:7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child.ant-table-td-left-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-smart-table-row:not(.ant-table-selected-row):hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-smart-table-row:not(.ant-table-selected-row):hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-smart-table-row.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-smart-table-row.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-checkbox-wrapper{display:inline-grid;vertical-align:middle}  .cmacs-compact-table .cmacs-no-selection{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}  .cmacs-compact-table .ant-table-expand-icon-th,   .cmacs-compact-table .ant-table-row-expand-icon-cell{text-align:left}  .cmacs-compact-table table{table-layout:fixed}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters{display:inline-flex;position:relative;top:3px}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner-full{margin-left:0!important}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters:hover:before{background-color:transparent}  .cmacs-compact-table.cmacs-compact-table-scrollable-y .ant-table-fixed-header .ant-table-header{overflow:hidden!important;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1;margin-right:6px}  .cmacs-compact-table:not(.cmacs-compact-table-scrollable-y) .ant-table-fixed-header .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1;margin-right:1px}  .cmacs-compact-table .ant-table-fixed-header>.ant-table-container>.ant-table-body,   .cmacs-compact-table cdk-virtual-scroll-viewport{scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin;overflow:scroll!important;position:inherit;padding-bottom:10px;background-color:transparent}  .ant-table{background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar,   .cmacs-compact-table cdk-virtual-scroll-viewport::-webkit-scrollbar{width:6px;height:6px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb,   .cmacs-compact-table cdk-virtual-scroll-viewport::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb:hover,   .cmacs-compact-table cdk-virtual-scroll-viewport::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}  .cmacs-compact-table cmacs-datetime-picker.ant-time-picker{width:100%!important}  .cmacs-compact-table .ant-table-row-expand-icon{background:transparent!important}@media only screen and (max-device-width:1024px) and (orientation:portrait){  .cmacs-compact-table.cmacs-compact-table-scrollable-y .ant-table-fixed-header .ant-table-header{margin-right:0}}@media only screen and (max-device-width:1024px) and (orientation:landscape){  .cmacs-compact-table.cmacs-compact-table-scrollable-y .ant-table-fixed-header .ant-table-header{margin-right:0}}"], changeDetection: 0 });
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
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzI18nService }, { type: i2.ExcelService }, { type: i3.DeviceDetectorService }, { type: i4.DatePipe }, { type: i5.CmacsContextMenuService }, { type: i6.CookieService }, { type: i7.UtilService }]; }, { nzTableComponent: [{
            type: ViewChild,
            args: ['gridComponent']
        }], size: [{
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
        }], loadingDelay: [{
            type: Input
        }], loadingIndicator: [{
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
        }], onresize: [{
            type: Output
        }], oncontextmenu: [{
            type: Output
        }], extra: [{
            type: Input
        }], contextmenu: [{
            type: Input
        }], indentSize: [{
            type: Input
        }], virtualMaxBufferPx: [{
            type: Input
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
        }], handleMouseDown: [{
            type: HostListener,
            args: ['document:mousedown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb21wYWN0LXRhYmxlL2NtYWNzLWNvbXBhY3QtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUlOLFNBQVMsRUFDVCxZQUFZLEVBQ1osdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBNkIsTUFBTSxFQUFFLEtBQUssRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBSS9GLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLGlCQUFpQixDQUFDO0FBR3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzVELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVB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QUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5RSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7d0JBQzdJLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxSCxNQUFNLEtBQUssR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDO3dCQUM5QixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLFdBQVcsRUFBRTs0QkFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtnQ0FDbkcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxFQUFFO29DQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsV0FBVyxHQUFHLEtBQUssSUFBSSxDQUFDO2lDQUM5RDs2QkFDRjtpQ0FBTTtnQ0FDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsV0FBVyxHQUFHLEtBQUssSUFBSSxDQUFDOzZCQUM5RDt5QkFDRjt3QkFDRCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7NEJBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLFdBQVcsR0FBRyxLQUFLLElBQUksQ0FBQzt5QkFDOUQ7cUJBQ0Y7b0JBQ0QsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDO29CQUMzQixTQUFTO2lCQUNWO2FBQ0Y7U0FDRjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDckQsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7SUFFRCxjQUFjLENBQUMsTUFBYTtRQUMxQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELGlCQUFpQjtJQUNqQixXQUFXLENBQUMsTUFBa0IsRUFBRSxRQUFhLEVBQUUsT0FBWSxJQUFJO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVMsRUFBRSxLQUFZO1FBQzlCLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdkksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUMvQyxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFXLEVBQUUsTUFBTSxHQUFHLElBQUk7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQTRCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUNELGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBR0QsU0FBUyxDQUFDLEdBQVcsRUFBRSxNQUFNLEdBQUcsSUFBSTtRQUNsQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELFNBQVMsQ0FBQyxFQUFVLEVBQUUsUUFBZ0IsRUFBRSxLQUFpQixFQUFFLElBQVM7UUFDbEUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO21CQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFDNUQ7Z0JBQ0EsT0FBTzthQUNSO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BDLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMxRDtZQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVM7UUFDbkIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM5QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7SUFFRCxJQUFJLENBQUMsTUFBVyxFQUFFLGFBQXFCO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQVcsRUFBRSxhQUFxQjtRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQVk7UUFDNUIsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU8sbUJBQW1CLENBQUM7U0FDNUI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBR0QsZUFBZSxDQUFDLENBQVE7UUFDdEIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQXFCLENBQUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEMsSUFDRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDbkUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzFGLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN4RixDQUFDLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDaEcsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUNoRjtnQkFDQSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNsQztnQkFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztpQkFDL0M7Z0JBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDdEI7U0FDRjtJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFTLEVBQUUsQ0FBUztRQUNuQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDakM7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDckM7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFTLEVBQUUsUUFBYTtRQUM5QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsT0FBTyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3JCLElBQUksS0FBSyxLQUFLLFFBQVE7Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFDcEMsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLE9BQU8sS0FBSyxDQUFDLFNBQVMsS0FBSyxRQUFRO21CQUN0RyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDckQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO29CQUNoRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssYUFBYTt3QkFBRSxPQUFPLEtBQUssQ0FBQztpQkFDbkQ7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUFBLENBQUM7WUFDRixLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztTQUMxQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFxQixFQUFFLEtBQWEsRUFBRSxPQUFZLElBQUk7UUFDaEUsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkIsT0FBTztpQkFDUjtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7b0JBQzFCLE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDM0I7UUFDSCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDVCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBYSxFQUFFLE9BQVksSUFBSSxFQUFFLFdBQWdCLElBQUksRUFBRSxRQUFlLElBQUk7UUFDM0YsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDM0QsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxrQkFBa0IsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQ3JGO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNMLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMzRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLGtCQUFrQixFQUFFO2dCQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDckY7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDcEM7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7b0JBQ3JFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDbEY7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7b0JBQzFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDN0I7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDL0M7YUFDRjtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYSxFQUFFLE9BQVksSUFBSTtRQUMzQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELFFBQVEsQ0FBQyxFQUFFO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDaEYsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBR0QsbUJBQW1CO1FBQ2pCLE1BQU0saUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO2dCQUNqRSxJQUFJLG9CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUU7Z0JBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsMkJBQTJCO1FBQ3pCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQVk7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsdUJBQXVCLENBQUMsSUFBUyxFQUFFLFNBQWdCO1FBQ2pELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xCLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDM0csSUFBSSxjQUFjLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixTQUFTLENBQUMsSUFBSSxDQUFDO3dCQUNiLFFBQVEsRUFBRSxLQUFLO3dCQUNmLEtBQUssRUFBRSxDQUFDLENBQUM7d0JBQ1QsSUFBSSxvQkFBTyxJQUFJLENBQUU7cUJBQ2xCLENBQUMsQ0FBQztpQkFDSjtnQkFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUM3QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztpQkFDeEQ7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLGNBQWMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDM0csSUFBSSxjQUFjLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QixTQUFTLENBQUMsSUFBSSxDQUFDO29CQUNiLFFBQVEsRUFBRSxLQUFLO29CQUNmLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQ1QsSUFBSSxvQkFBTyxJQUFJLENBQUU7aUJBQ2xCLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsb0JBQW9CLENBQUMsTUFBTSxHQUFHLEtBQUs7UUFDakMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNoRTtJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbkgsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkUsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELGlEQUFpRDtJQUNqRCxZQUFZLENBQUMsS0FBYSxFQUFFLElBQVM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBVTtRQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckY7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxNQUFlO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN0RDthQUFNO1lBQ0wsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxRTtJQUVILENBQUM7SUFFRCxRQUFRLENBQUMsSUFBUyxFQUFFLEtBQVk7UUFDOUIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzVFLGlEQUFpRDtZQUNqRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzSCxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDOUQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLGtCQUFrQixJQUFJLE1BQU0sS0FBSyxFQUFFLEVBQUU7Z0JBQ3RELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVk7UUFDbkIsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDbEgsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFZO1FBQ25CLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDO0lBQ2xILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBWTtRQUNyQixPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUMvRSxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVk7UUFDbkIsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDbEgsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFVO1FBQ2YsT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFVO1FBQ2xCLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFDckksQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxDQUFDO0lBQzVELENBQUM7SUFFRCxNQUFNLENBQUMsS0FBWTtRQUNqQixPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQztJQUNoSCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVk7UUFDakIsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDaEgsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQVk7UUFDNUIsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUNwRSxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBWTtRQUMzQixPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ25FLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBWTtRQUN4QixPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsR0FBRyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxLQUFZO1FBQ2hDLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFDeEUsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQVk7UUFDOUIsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDcEgsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFVO1FBQ3BCLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBRUQsYUFBYSxDQUFDLElBQVM7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakgsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDOUQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFjRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRCx3QkFBd0I7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFbkQseUNBQXlDO1lBQ3pDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFlLENBQUM7WUFDNUUsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckM7U0FDRjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELDBCQUEwQjtRQUN4QixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUM5QixLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ3RDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFhLEVBQUUsRUFBRTtvQkFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDO1FBQ1o7Ozs7Ozs7Ozs7Ozs7c0NBYThCO0lBQ2hDLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDbkcsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ25FLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0MsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN6RCxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztTQUNwQztRQUVELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDakI7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztTQUM3QjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFxQixFQUFFLEVBQUU7WUFDbEYsUUFBUSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUN6QixLQUFLLFVBQVUsQ0FBQyxHQUFHO29CQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6QixNQUFNO2dCQUNSLEtBQUssVUFBVSxDQUFDLElBQUk7b0JBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwQyxNQUFNO2dCQUNSLEtBQUssVUFBVSxDQUFDLEdBQUc7b0JBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNsQyxNQUFNO2dCQUNSLEtBQUssVUFBVSxDQUFDLE9BQU87b0JBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwQyxNQUFNO2dCQUNSLEtBQUssVUFBVSxDQUFDLFFBQVE7b0JBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILHdDQUF3QztRQUN4QyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ25DLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFhLENBQUM7WUFDdEMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUUsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNqQixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUMxQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQ1YsTUFBTSxFQUFFLEVBQ1IsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUN2QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RSxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDN0UsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBd0QsRUFBRSxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1lBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2lCQUN6QjtnQkFFRCxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztnQkFFbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDbkMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQWEsQ0FBQztnQkFDdEMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7d0JBQy9DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUMzRTtnQkFFSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUU3QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUM1QjtZQUNELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7UUFhSTtJQUVKLHFCQUFxQjtJQUNyQixhQUFhLENBQUMsUUFBZ0I7UUFDNUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN4QixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwRixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4RixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU1Qzs7Ozs7YUFLSztRQUVMLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsR0FBRyxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDM0YsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxJQUFTLEVBQUUsSUFBUyxFQUFFLFlBQVksR0FBRyxDQUFDO1FBRXZELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEIsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sV0FBVyxHQUFHLElBQVcsQ0FBQztZQUNoQyxJQUFJLFlBQVksR0FBUSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFdEQsaURBQWlEO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBRXJJLFlBQVksR0FBRyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ1IsWUFBWSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztpQkFDeEQ7Z0JBRUQsSUFBSSxXQUFXLENBQUMsUUFBUSxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUN2RCxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDMUM7Z0JBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxXQUFXLEVBQUU7b0JBQzFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO2lCQUNoRztxQkFBTTtvQkFDTCxRQUFRLEtBQUssQ0FBQyxZQUFZLEVBQUU7d0JBQzFCLEtBQUssWUFBWSxDQUFDLE1BQU07NEJBQ3RCLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs0QkFFL0csSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO2dDQUM1QixZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDOzZCQUN0Rjs0QkFDRCxNQUFNO3dCQUNSLEtBQUssWUFBWSxDQUFDLElBQUk7NEJBQ3BCLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQzs0QkFDcEgsTUFBTTt3QkFDUixLQUFLLFlBQVksQ0FBQyxJQUFJOzRCQUNwQixZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7NEJBQzlHLE1BQU07d0JBQ1I7NEJBQ0UsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDOzRCQUMzRSxNQUFNO3FCQUNUO2lCQUNGO1lBRUgsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hCLElBQUksV0FBVyxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDdkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQzthQUN2RTtRQUVILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQVM7UUFDekIsTUFBTSxLQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sS0FBSyxHQUFVLEVBQUUsQ0FBQztRQUN4QixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsS0FBSyxDQUFDLElBQUksaUNBQU0sSUFBSSxLQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUcsQ0FBQztRQUV6RixPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNsRCxLQUFLLENBQUMsSUFBSSxpQ0FFSCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFDakUsTUFBTSxFQUFFLElBQUksSUFDWixDQUFDO2lCQUNOO2FBQ0Y7U0FDRjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUFTLEVBQUUsT0FBWSxFQUFFLEtBQVk7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRCxjQUFjLENBQUMsS0FBWSxFQUFFLElBQVMsRUFBRSxNQUFlO1FBQ3JELElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtZQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsS0FBWSxFQUFFLElBQVMsRUFBRSxNQUFlO1FBQ3ZELElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN4QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFFLENBQUM7b0JBQ3JFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUMsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxPQUFPO2FBQ1I7U0FDRjtJQUNILENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sR0FBRyxJQUFJO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTtnQkFDdEIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuRDtTQUNGO1FBRUQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELG9CQUFvQixDQUFDLE1BQWUsRUFBRSxLQUFVO1FBQzlDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLE1BQU0sSUFBSSxHQUFtQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLEtBQUssQ0FBQyxRQUFVLEVBQUU7WUFDcEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELHdCQUF3QixDQUFDLE9BQU87UUFDOUIsSUFBSSxPQUFPLENBQUMsUUFBVSxFQUFFO1lBQ3RCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDdEIsS0FBSyxJQUFJLEtBQUssSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO2dCQUNsQyxNQUFNLElBQUksR0FBbUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQy9ELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7b0JBQzFCLE9BQU8sRUFBRSxDQUFDO2lCQUNYO2dCQUNELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDeEIsYUFBYSxFQUFFLENBQUM7aUJBQ2pCO2FBQ0Y7WUFDRCxNQUFNLElBQUksR0FBbUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxhQUFhLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLEVBQUU7Z0JBQ25FLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDcEI7aUJBQU0sSUFBSSxPQUFPLEtBQUssT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1NBRUY7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsR0FBUTtRQUNkLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDeEUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQWdCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxhQUFhLENBQUMsUUFBZ0I7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxZQUFZLEdBQVUsRUFBRSxDQUFDO1FBRS9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN4QixpREFBaUQ7WUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDOUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ2pCLElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsTUFBTSxFQUFFO3dCQUM5QyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBRS9HLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTs0QkFDNUIsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDOUQ7cUJBQ0Y7eUJBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxXQUFXLEVBQUU7d0JBQ2xELFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO3FCQUN4RTt5QkFBTTt3QkFDTCxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ3BEO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ2xGLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELHFCQUFxQjtJQUNyQixlQUFlLENBQUMsUUFBZ0I7UUFDOUIsTUFBTSxZQUFZLEdBQVUsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2pELE1BQU0saUJBQWlCLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUNsRixJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxJQUFTLEVBQUUsWUFBaUI7UUFFN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQixNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDeEIsaURBQWlEO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzlILElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUNqQixJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLFdBQVcsRUFBRTt3QkFDM0MsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7cUJBQ3hFO3lCQUFNO3dCQUNMLElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsTUFBTSxFQUFFOzRCQUM5QyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7NEJBRS9HLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtnQ0FDNUIsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzs2QkFDOUQ7eUJBQ0Y7NkJBQU07NEJBQ0wsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUNwRDtxQkFDRjtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUVoQyxNQUFNLFdBQVcsR0FBRyxJQUFXLENBQUM7WUFDaEMsSUFBSSxXQUFXLENBQUMsUUFBUSxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQzthQUM3RDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUdELFdBQVcsQ0FBQyxNQUFNO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQzFCLEtBQUssRUFDTCxNQUFNLENBQUMsUUFBUSxFQUNmLElBQUksQ0FBQyxNQUFNLEVBQ1gsTUFBTSxDQUFDLGlCQUFpQixFQUN4QixNQUFNLENBQUMsY0FBYyxFQUNyQixNQUFNLENBQUMsV0FBVyxFQUNsQixNQUFNLENBQUMsb0JBQW9CLEVBQzNCLE1BQU0sQ0FBQyxzQkFBc0IsRUFDN0IsTUFBTSxDQUFDLHVCQUF1QixDQUMvQixDQUFDO1NBQ0g7YUFBTTtZQUNMLE1BQU0sWUFBWSxHQUFHO2dCQUNuQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQ25DLGFBQWEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdEksUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO2dCQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZO2dCQUNqQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsaUJBQWlCO2dCQUMzQyxjQUFjLEVBQUUsTUFBTSxDQUFDLGNBQWM7Z0JBQ3JDLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztnQkFDL0Isb0JBQW9CLEVBQUUsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjthQUN6RyxDQUFBO1lBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQzVCLFlBQVksQ0FDYixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBR0QsUUFBUSxDQUFDLEtBQWlCLEVBQUUsSUFBUztRQUNuQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ2pDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QjtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBaUIsRUFBRSxJQUFTO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLDRCQUE0QjtRQUM1QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2pILElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hCLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BFLHFCQUFxQjtnQkFDckIsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM1QjthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7WUFDRCxvQkFBb0I7WUFDcEIsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JILDhCQUE4QjtnQkFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDMUU7WUFDRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDbkc7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBSTtRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdHLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxjQUFjLENBQUMsVUFBVTtRQUN2QixJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxFQUFFO1lBQ2pDLE9BQU8sVUFBVSxLQUFLLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzlELElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQzthQUNoSDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7SUFDcEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFTO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFJRCxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUk7UUFDckIsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFDbkIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDM0I7WUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0lBRUgsQ0FBQztJQUVELGdCQUFnQixDQUFDLElBQVMsRUFBRSxFQUFPLEVBQUUsS0FBWSxFQUFFLEtBQWEsRUFBRSxNQUFZO1FBQzVFLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ3JDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQzdCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFDO2FBQzdGO1lBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2VBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDL0QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pOLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2VBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDL0QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pOLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUs7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztlQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQy9ELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxUixDQUFDO0lBRUQsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7ZUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFD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SSxFQUFFLFVBQVUsRUFBRTtZQUNQLGNBQWM7a0JBQXRELFNBQVM7bUJBQUMsNEJBQTRCO1lBcU92QyxlQUFlO2tCQURkLFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgY291bnQsIGRlYm91bmNlVGltZSwgcmFjZSwgcmVwZWF0LCBkZWxheSwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgRXhwb3J0QXNTZXJ2aWNlLCBFeHBvcnRBc0NvbmZpZyB9IGZyb20gJ25neC1leHBvcnQtYXMnO1xyXG5pbXBvcnQganNQREYgZnJvbSAnanNwZGYnO1xyXG5pbXBvcnQgJ2pzcGRmLWF1dG90YWJsZSc7XHJcbmltcG9ydCB7IEdyaWRDb25maWcsIEZpZWxkIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgR3JpZEV4cENvbmZpZyB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWV4cC1jb25maWcnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL1RlbXBsYXRlVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ2VsZFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL0NlbGRUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBFeGNlbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL2V4Y2VsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9leHBvcnQtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XHJcbmltcG9ydCB7IENoZWNrYm94U2VsZWN0IH0gZnJvbSBcIi4uL2NtYWNzLXRhYmxlL2NtYWNzLXRhYmxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcInV0aWxcIjtcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENtYWNzSW5wdXROdW1iZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vY21hY3MtaW5wdXQtbnVtYmVyL2NtYWNzLWlucHV0LW51bWJlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWllJztcclxuaW1wb3J0IHsgQ21hY3NEYXRlVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLWRhdGV0aW1lLXBpY2tlci9jbWFjcy1kYXRldGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xyXG5pbXBvcnQgeyBOelNpemVNRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOelRhYmxlQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XHJcbmltcG9ydCB7IENtYWNzQ29udGV4dE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vY21hY3MtZHJvcGRvd24vY29udGV4dC1tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOelJlc2l6ZUV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9yZXNpemFibGUnO1xyXG5pbXBvcnQgeyBEZXZpY2VEZXRlY3RvclNlcnZpY2UgfSBmcm9tICduZ3gtZGV2aWNlLWRldGVjdG9yJztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuZGVjbGFyZSB2YXIgYWNjb3VudGluZzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbXBhY3QtdGFibGUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb21wYWN0VGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9nc10nOiAnbG9ncydcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbXBhY3RUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIGxvY2FsZTogYW55ID0ge307IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgaGVhZGVyQm90dG9tU3R5bGUgPSB7fTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBAVmlld0NoaWxkKCdncmlkQ29tcG9uZW50JykgbnpUYWJsZUNvbXBvbmVudDogTnpUYWJsZUNvbXBvbmVudDtcclxuICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWw8YW55PihmYWxzZSwgW10pO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZU1EU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgc2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyOyByYW5nZTogW251bWJlciwgbnVtYmVyXSB9PjtcclxuICBASW5wdXQoKSBwYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDIwLCAzMCwgNDAsIDUwXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlydHVhbFNjcm9sbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleGNsdXNpdmVTZWxlY3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9ncyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNtYXJ0VGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbEl0ZW1TaXplID0gMDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kQWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbG9hZGluZ0RlbGF5ID0gMDtcclxuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB0b3RhbCA9IDA7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHdpZHRoQ29uZmlnOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHBhZ2VJbmRleCA9IDE7XHJcbiAgQElucHV0KCkgcGFnZVNpemUgPSAxMDtcclxuICBASW5wdXQoKSBhY3Rpb25Db2x1bW5XaWR0aCA9ICc4MHB4JztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgd3JhcExpbmVzID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoKSBkYXRhID0gW107XHJcbiAgQElucHV0KCkgY29uZmlnOiBHcmlkQ29uZmlnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB1c2UxMkhvdXJzID0gdHJ1ZTtcclxuICBAT3V0cHV0KCkgY29uZmlnQ2hhbmdlOiBFdmVudEVtaXR0ZXI8R3JpZENvbmZpZz4gPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRDb25maWc+KCk7XHJcbiAgQElucHV0KCkgZmllbGRJZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nID0gbnVsbDtcclxuICBASW5wdXQoKSBwYWdpbmF0aW9uUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCcgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBzY3JvbGw6IHsgeD86IHN0cmluZyB8IG51bGw7IHk/OiBzdHJpbmcgfCBudWxsIH0gPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcclxuICBAVmlld0NoaWxkKCdyZW5kZXJJdGVtVGVtcGxhdGUnKSBuekl0ZW1SZW5kZXI6IFRlbXBsYXRlUmVmPHtcclxuICAgICRpbXBsaWNpdDogJ3BhZ2UnIHwgJ3ByZXYnIHwgJ25leHQnO1xyXG4gICAgcGFnZTogbnVtYmVyO1xyXG4gIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmcm9udFBhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0ZW1wbGF0ZU1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2VudGVyVGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlT25TaW5nbGVQYWdlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dRdWlja0p1bXBlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaW1wbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2hlY2tib3hTZWxlY3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5MaW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkYXRhVGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1JhdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBleHBvcnRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8R3JpZEV4cENvbmZpZz4oKTtcclxuICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcmF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xyXG4gIEBPdXRwdXQoKSBvbmRsY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmNsaWNrSHlwZXJsaW5rID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvblJvd0V4cGFuZENvbGxhcHNlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIHJhdGVDb3VudCA9IDU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG11bHRpU2VsZWN0ID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9ucm93ZGVsZXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbnJvd2FkZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9ucmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY29udGV4dG1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQElucHV0KCkgZXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGNvbnRleHRtZW51OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBpbmRlbnRTaXplOiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIHZpcnR1YWxNYXhCdWZmZXJQeCA9IDIwMDtcclxuXHJcbiAgcHJpdmF0ZSBfb25yZXNpemUkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHB1YmxpYyBvbnJlc2l6ZW9icyA9IHRoaXMuX29ucmVzaXplJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBfb25zb3J0JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwdWJsaWMgb25zb3J0b2JzID0gdGhpcy5fb25zb3J0JC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHVibGljIGRyb3Bkb3duOiBhbnk7XHJcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICBmb3JtYXR0ZXIgPSAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBhY2NvdW50aW5nLmZvcm1hdE51bWJlcih2YWx1ZSwgeyBwcmVjaXNpb246IDMsIHRob3VzYW5kOiBcIiBcIiwgZGVjaW1hbDogXCIsXCIgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfTtcclxuICBwYXJzZXIgPSAodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBhY2NvdW50aW5nLnVuZm9ybWF0KHZhbHVlLCAnLCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH07XHJcbiAgZGVmYXVsdEZvcm1hdHRlciA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfTtcclxuICBkZWZhdWx0UGFyc2VyID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9O1xyXG4gIGRlZmF1bHRTb3J0T3JkZXIgPSBudWxsO1xyXG4gIGNoZWNrYm94Q2FjaGU6IENoZWNrYm94U2VsZWN0W10gPSBbXTtcclxuICBpc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBhbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgZWRpdElkOiBzdHJpbmcgfCBudWxsO1xyXG4gIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gIHJvd09uRWRpdGlvbiA9IC0xO1xyXG4gIG5vZGVPbkVkaXRpb24gPSBudWxsO1xyXG4gIG1hcE9mRXhwYW5kZWREYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueVtdIH0gPSB7fTtcclxuICBkZWZhdWx0VGltZVZhbHVlID0gbmV3IERhdGUoKTtcclxuICBsYXN0SWR4U2VsZWN0ZWQgPSBudWxsO1xyXG5cclxuICBmaWVsZElEOiBhbnkgPSBudWxsO1xyXG5cclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlSW5wdXROdW1iZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXROdW1iZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUlucHV0TnVtYmVyJywgeyByZWFkOiBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50IH0pIGlucHV0TnVtYmVyQ29tcG9uZW50OiBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZURhdGVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgZGF0ZVBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlRGF0ZVRpbWVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgZGF0ZVRpbWVQaWNrZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZVNlbGVjdCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBzZWxlY3RFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUJvb2wnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgYm9vbEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChDbWFjc0RhdGVUaW1lUGlja2VyQ29tcG9uZW50KSBkYXRlVGltZVBpY2tlcjogQ21hY3NEYXRlVGltZVBpY2tlckNvbXBvbmVudDtcclxuXHJcbiAgb25jb250ZXh0bWVudWV2dCgkZXZlbnQsIGl0ZW0pIHtcclxuICAgIHRoaXMub25jb250ZXh0bWVudS5lbWl0KGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgb25GaWVsZFRhcEVsbGlwc2lzKGlkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmluTGluZUVkaXQgfHwgdGhpcy5kZXZpY2VEZXRlY3Rvci5pc0Rlc2t0b3AoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkRhdGFUYXBFbGxpcHNpcyhpZDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5kZXZpY2VEZXRlY3Rvci5pc0Rlc2t0b3AoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUb29sdGlwRWxsaXBzaXNUcmlnZ2VyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGV2aWNlRGV0ZWN0b3IuaXNEZXNrdG9wKCkgPyAnaG92ZXInIDogJ2NsaWNrJztcclxuICB9XHJcblxyXG4gIGlzRWxsaXBzaXNBY3RpdmUoaWQ6IHN0cmluZywgZmllbGQ6IGFueSkge1xyXG4gICAgaWYgKCFmaWVsZC5zaG93VG9vbHRpcCkgeyByZXR1cm47IH1cclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgaWYgKCFlbCkgeyByZXR1cm47IH1cclxuICAgIHJldHVybiAoZWwub2Zmc2V0V2lkdGggPCBlbC5zY3JvbGxXaWR0aCk7XHJcbiAgfVxyXG5cclxuICBpc1Rvb2x0aXBBY3RpdmUoZGF0YSwgZmllbGQ6IGFueSkge1xyXG4gICAgaWYgKCFmaWVsZC5zaG93VG9vbHRpcCB8fCBmaWVsZC53aWR0aCA9PT0gdW5kZWZpbmVkKSB7IHJldHVybjsgfVxyXG4gICAgbGV0IHdpZHRoID0gZmllbGQud2lkdGg7XHJcbiAgICB3aWR0aCA9IE51bWJlcih3aWR0aC5yZXBsYWNlKCdweCcsICcnKSk7XHJcbiAgICBjb25zdCBzdHJpbmdGaWVsZFZhbHVlID0gdGhpcy5nZXRTdHJpbmdGaWVsZFZhbHVlKGRhdGEsIGZpZWxkKTtcclxuICAgIGlmIChzdHJpbmdGaWVsZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHdpZHRoIDwgdGhpcy5tZWFzdXJlVGV4dChzdHJpbmdGaWVsZFZhbHVlLCAxMik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtZWFzdXJlVGV4dChzdHI6IHN0cmluZywgZm9udFNpemU6IG51bWJlcikge1xyXG4gICAgY29uc3Qgd2lkdGhzID0gW1xyXG4gICAgICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxyXG4gICAgICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLjI3OTY4NzUsIDAuMjc2NTYyNSwgMC4zNTQ2ODc1LCAwLjU1NDY4NzUsXHJcbiAgICAgIDAuNTU0Njg3NSwgMC44ODkwNjI1LCAwLjY2NTYyNSwgMC4xOTA2MjUsIDAuMzMyODEyNSwgMC4zMzI4MTI1LCAwLjM4OTA2MjUsXHJcbiAgICAgIDAuNTgyODEyNSwgMC4yNzY1NjI1LCAwLjMzMjgxMjUsIDAuMjc2NTYyNSwgMC4zMDE1NjI1LCAwLjU1NDY4NzUsXHJcbiAgICAgIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjU1NDY4NzUsXHJcbiAgICAgIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuMjc2NTYyNSwgMC4yNzY1NjI1LCAwLjU4NDM3NSxcclxuICAgICAgMC41ODI4MTI1LCAwLjU4NDM3NSwgMC41NTQ2ODc1LCAxLjAxNDA2MjUsIDAuNjY1NjI1LCAwLjY2NTYyNSwgMC43MjE4NzUsXHJcbiAgICAgIDAuNzIxODc1LCAwLjY2NTYyNSwgMC42MDkzNzUsIDAuNzc2NTYyNSwgMC43MjE4NzUsIDAuMjc2NTYyNSwgMC41LFxyXG4gICAgICAwLjY2NTYyNSwgMC41NTQ2ODc1LCAwLjgzMjgxMjUsIDAuNzIxODc1LCAwLjc3NjU2MjUsIDAuNjY1NjI1LCAwLjc3NjU2MjUsXHJcbiAgICAgIDAuNzIxODc1LCAwLjY2NTYyNSwgMC42MDkzNzUsIDAuNzIxODc1LCAwLjY2NTYyNSwgMC45NDM3NSwgMC42NjU2MjUsXHJcbiAgICAgIDAuNjY1NjI1LCAwLjYwOTM3NSwgMC4yNzY1NjI1LCAwLjM1NDY4NzUsIDAuMjc2NTYyNSwgMC40NzY1NjI1LCAwLjU1NDY4NzUsXHJcbiAgICAgIDAuMzMyODEyNSwgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuNSwgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuMjc2NTYyNSxcclxuICAgICAgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuMjIxODc1LCAwLjI0MDYyNSwgMC41LCAwLjIyMTg3NSwgMC44MzI4MTI1LFxyXG4gICAgICAwLjU1NDY4NzUsIDAuNTU0Njg3NSwgMC41NTQ2ODc1LCAwLjU1NDY4NzUsIDAuMzMyODEyNSwgMC41LCAwLjI3NjU2MjUsXHJcbiAgICAgIDAuNTU0Njg3NSwgMC41LCAwLjcyMTg3NSwgMC41LCAwLjUsIDAuNSwgMC4zNTQ2ODc1LCAwLjI1OTM3NSwgMC4zNTMxMjUsXHJcbiAgICAgIDAuNTg5MDYyNSxcclxuICAgIF07XHJcbiAgICBjb25zdCBhdmcgPSAwLjUyNzkyNzYzMTU3ODk0NzE7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChcclxuICAgICAgc3RyXHJcbiAgICAgICAgLnNwbGl0KFwiXCIpXHJcbiAgICAgICAgLm1hcCgoYykgPT5cclxuICAgICAgICAgIGMuY2hhckNvZGVBdCgwKSA8IHdpZHRocy5sZW5ndGggPyB3aWR0aHNbYy5jaGFyQ29kZUF0KDApXSA6IGF2Z1xyXG4gICAgICAgIClcclxuICAgICAgICAucmVkdWNlKChjdXIsIGFjYykgPT4gYWNjICsgY3VyKSAqIGZvbnRTaXplXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5wdXROdW1iZXJWYWx1ZShkYXRhOiBhbnksIGZpZWxkOiBGaWVsZCkge1xyXG5cclxuICAgIGlmICghdGhpcy5pc051bGwoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pKSB7XHJcbiAgICAgIGlmIChmaWVsZC51c2VDb21tYU1hcmtlcikge1xyXG4gICAgICAgIHJldHVybiBkYXRhW2ZpZWxkLnByb3BlcnR5XS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnLCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5pc051bGwoZmllbGQuZm9ybWF0dGVyKSkge1xyXG4gICAgICAgIHJldHVybiBmaWVsZC5mb3JtYXR0ZXIoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkYXRhW2ZpZWxkLnByb3BlcnR5XTtcclxuICAgIH1cclxuICAgIHJldHVybiBmaWVsZC5wbGFjZWhvbGRlcjtcclxuICB9XHJcblxyXG4gIGdldFN0cmluZ0ZpZWxkVmFsdWUoZGF0YTogYW55LCBmaWVsZDogYW55KSB7XHJcbiAgICByZXR1cm4gZGF0YVtmaWVsZC5wcm9wZXJ0eV0gJiYgZGF0YVtmaWVsZC5wcm9wZXJ0eV0ubGVuZ3RoID8gZGF0YVtmaWVsZC5wcm9wZXJ0eV0gOiBmaWVsZC5wbGFjZWhvbGRlcjtcclxuICB9XHJcblxyXG4gIG9uUmVzaXplKGV2ZW50OiBOelJlc2l6ZUV2ZW50LCBjb2w6IHN0cmluZywgZmllbGQ6IEZpZWxkKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5fb25yZXNpemUkLm5leHQoeyBldmVudCwgY29sLCBmaWVsZCB9KTtcclxuICB9XHJcblxyXG4gIG9uUmVzaXplRXZ0KHsgd2lkdGggfTogTnpSZXNpemVFdmVudCwgY29sOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCk6IHZvaWQge1xyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5maWVsZHMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbmZpZy5maWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuY29uZmlnLmZpZWxkc1tpXTtcclxuICAgICAgICBpZiAoZmllbGQucHJvcGVydHkgPT09IGNvbCkge1xyXG4gICAgICAgICAgY29uc3QgZWxXaWR0aCA9IGZpZWxkLndpZHRoID8gTnVtYmVyKGZpZWxkLndpZHRoLnJlcGxhY2UoL1teXFxkLi1dL2csICcnKSkgOiAwO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLnggJiYgaSArIDEgPT09IHRoaXMuY29uZmlnLmZpZWxkcy5sZW5ndGggLSAxICYmIHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0gIT09IG51bGwgJiYgdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsV2lkdGhOZXh0ID0gdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS53aWR0aCA/IE51bWJlcih0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLndpZHRoLnJlcGxhY2UoL1teXFxkLi1dL2csICcnKSkgOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IHdpZHRoIC0gZWxXaWR0aDtcclxuICAgICAgICAgICAgaWYgKGRlbHRhID4gMCAmJiBkZWx0YSA8IGVsV2lkdGhOZXh0KSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ubWluV2lkdGggIT09IG51bGwgJiYgdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS5taW5XaWR0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS5taW5XaWR0aCA8IChlbFdpZHRoTmV4dCAtIGRlbHRhKSkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLndpZHRoID0gYCR7ZWxXaWR0aE5leHQgLSBkZWx0YX1weGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ud2lkdGggPSBgJHtlbFdpZHRoTmV4dCAtIGRlbHRhfXB4YDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ud2lkdGggPSBgJHtlbFdpZHRoTmV4dCAtIGRlbHRhfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZmllbGQud2lkdGggPSBgJHt3aWR0aH1weGA7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMub25yZXNpemUuZW1pdCh7IGNvbDogY29sLCBjb25maWc6IHRoaXMuY29uZmlnIH0pO1xyXG4gICAgdGhpcy5jb25maWdDaGFuZ2UuZW1pdCh0aGlzLmNvbmZpZyk7XHJcbiAgICBpZiAodGhpcy5ncmlkSUQgPT09IG51bGwgfHwgdGhpcy5ncmlkSUQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5nZXRJbmRleENvb2tpZSgpKSB7XHJcbiAgICAgIHRoaXMuY29va2llcy5zZXQodGhpcy5ncmlkSUQsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnKSwgMzY1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZlbnREZWZhdWx0KCRldmVudDogRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLypDb250ZXh0IE1lbnUgKi9cclxuICBjb250ZXh0TWVudSgkZXZlbnQ6IE1vdXNlRXZlbnQsIHRlbXBsYXRlOiBhbnksIGl0ZW06IGFueSA9IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMub25jb250ZXh0bWVudWV2dCgkZXZlbnQsIGl0ZW0pO1xyXG4gICAgdGhpcy5kcm9wZG93biA9IHRoaXMubnpEcm9wZG93blNlcnZpY2UuY3JlYXRlKCRldmVudCwgdGVtcGxhdGUpO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUoZGF0YTogYW55LCBmaWVsZDogRmllbGQpIHtcclxuICAgIGNvbnN0IGZvcm1Db250cm9sID0gZmllbGQudmFsaWRhdG9ycyA/IG5ldyBGb3JtQ29udHJvbChkYXRhW2ZpZWxkLnByb3BlcnR5XSwgZmllbGQudmFsaWRhdG9ycykgOiBuZXcgRm9ybUNvbnRyb2woZGF0YVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgZGF0YS52YWxpZCA9IGRhdGEudmFsaWQgPyBkYXRhLnZhbGlkIDoge307XHJcbiAgICBkYXRhLnZhbGlkW2ZpZWxkLnByb3BlcnR5XSA9IGZvcm1Db250cm9sLnZhbGlkO1xyXG4gICAgcmV0dXJuIGZvcm1Db250cm9sLnZhbGlkO1xyXG4gIH1cclxuXHJcbiAgYWRkUm93KGlkeDogbnVtYmVyLCAkZXZlbnQgPSBudWxsKSB7XHJcbiAgICB0aGlzLm9ucm93YWRkZWQuZW1pdChpZHgpO1xyXG4gICAgdGhpcy5lZGl0aW9uT3BUcmlnZ2VyZWQgPSB0cnVlO1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0KCRldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIGlmICghdGhpcy5kcmFnZ2FibGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIHRoaXMuZGF0YSA9IFsuLi50aGlzLmRhdGFdO1xyXG4gICAgdGhpcy5vbmRyb3AuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBlZGl0aW9uT3BUcmlnZ2VyZWQgPSBmYWxzZTtcclxuICBkZWxldGVSb3coaWR4OiBudW1iZXIsICRldmVudCA9IG51bGwpIHtcclxuICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9IHRoaXMuZGF0YVtpZHhdO1xyXG4gICAgdGhpcy5vbnJvd2RlbGV0ZWQuZW1pdChpdGVtVG9SZW1vdmUpO1xyXG4gICAgdGhpcy5lZGl0aW9uT3BUcmlnZ2VyZWQgPSB0cnVlO1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0KCRldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydEVkaXQoaWQ6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5MaW5lRWRpdCkge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChkYXRhW3RoaXMuZmllbGRJRF0pIHx8IHRoaXMuaXNSb3dTZWxlY3RlZChkYXRhKSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmlzTnVsbChkYXRhLm5vdEVkaXRhYmxlRmllbGRzKVxyXG4gICAgICAgICYmIGRhdGEubm90RWRpdGFibGVGaWVsZHMuZmlsdGVyKHggPT4geCA9PT0gcHJvcGVydHkpLmxlbmd0aFxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZWRpdElkICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVkaXRJZCA9IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF07XHJcbiAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLmZvY3VzU2VsZWN0KHRoaXMuaW5wdXRFbGVtZW50KTtcclxuICAgICAgaWYgKHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmZvY3VzU2VsZWN0KHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQuaW5wdXRFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kYXRlVGltZVBpY2tlcikge1xyXG4gICAgICAgIHRoaXMuZm9jdXNTZWxlY3QodGhpcy5kYXRlVGltZVBpY2tlci5pbnB1dFJlZik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzU2VsZWN0KGVsZW06IGFueSkge1xyXG4gICAgaWYgKGVsZW0pIHtcclxuICAgICAgZWxlbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW0ubmF0aXZlRWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNvcnQoJGV2ZW50OiBhbnksIGZpZWxkUHJvcGVydHk6IHN0cmluZywpIHtcclxuICAgIHRoaXMuX29uc29ydCQubmV4dCh7IHNvcnROYW1lOiBmaWVsZFByb3BlcnR5LCBzb3J0VmFsdWU6ICRldmVudCB9KTtcclxuICB9XHJcblxyXG4gIGZpbHRlcigkZXZlbnQ6IGFueSwgZmllbGRQcm9wZXJ0eTogc3RyaW5nLCkge1xyXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7IGZpbHRlck5hbWU6IGZpZWxkUHJvcGVydHksIGZpbHRlclZhbHVlOiAkZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRIZWFkZXJNYXhXaWR0aChmaWVsZDogRmllbGQpIHtcclxuICAgIGlmIChmaWVsZC5zaG93U29ydCkge1xyXG4gICAgICByZXR1cm4gYGNhbGMoMTAwJSAtIDE1cHgpYDtcclxuICAgIH1cclxuICAgIHJldHVybiBgMTAwJWA7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZWRvd24nLCBbJyRldmVudCddKVxyXG4gIGhhbmRsZU1vdXNlRG93bihlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuZWRpdElkICYmIHRoaXMucHJvcGVydHkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICh0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCkgfHxcclxuICAgICAgICAodGhpcy5pbnB1dE51bWJlckVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmlucHV0TnVtYmVyRWxlbWVudC5uYXRpdmVFbGVtZW50KSkgfHxcclxuICAgICAgICAodGhpcy5kYXRlUGlja2VyRWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuZGF0ZVRpbWVQaWNrZXJFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5kYXRlVGltZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuc2VsZWN0RWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuc2VsZWN0RWxlbWVudC5uYXRpdmVFbGVtZW50KSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQpIHtcclxuICAgICAgICAgIHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQuYmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRlVGltZVBpY2tlcikge1xyXG4gICAgICAgICAgdGhpcy5kYXRlVGltZVBpY2tlci5zZXRDdXJyZW50VmFsdWVBbmRDbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3VzdG9tUGFkZGluZyhpdGVtOiBhbnksIGk6IG51bWJlcikge1xyXG4gICAgaWYgKCFpKSB7XHJcbiAgICAgIGlmICghaXRlbS5sZXZlbCkge1xyXG4gICAgICAgIHJldHVybiAhIWl0ZW0uY2hpbGRyZW4gPyA2IDogMjg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0ubGV2ZWwgKiB0aGlzLmluZGVudFNpemU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiA2O1xyXG4gIH1cclxuXHJcbiAgY2hpbGRPZihub2RlOiBhbnksIGFuY2VzdG9yOiBhbnkpIHtcclxuICAgIGxldCBjaGlsZCA9IG5vZGU7XHJcbiAgICB3aGlsZSAoY2hpbGQgIT09IG51bGwpIHtcclxuICAgICAgaWYgKGNoaWxkID09PSBhbmNlc3RvcikgcmV0dXJuIHRydWU7XHJcbiAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QgJiYgY2hpbGQuY2xhc3NMaXN0Lmxlbmd0aCA+IDAgJiYgY2hpbGQuY2xhc3NOYW1lICYmIHR5cGVvZiBjaGlsZC5jbGFzc05hbWUgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgJiYgY2hpbGQuY2xhc3NOYW1lLmluZGV4T2YoJ2Nkay1vdmVybGF5LXBhbmUnKSA+PSAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICBjb25zdCBub2RlID0gY2hpbGQuY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSAnQ01BQ1MtTU9EQUwnKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9O1xyXG4gICAgICBjaGlsZCA9IGNoaWxkLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBlbmRFZGl0TW9kZSgkZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSA9IG51bGwpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoJGV2ZW50LmtleSA9PT0gKCdFbnRlcicgfHwgJ2VudGVyJykpIHtcclxuICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgICAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgICAgICBkYXRhLmNtYWNzRWRpdGVkUHJvcCA9IHRoaXMucHJvcGVydHk7XHJcbiAgICAgICAgICB0aGlzLm9uZWRpdC5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFbaW5kZXhdLmNtYWNzRWRpdGVkUHJvcCA9IHRoaXMucHJvcGVydHk7XHJcbiAgICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbaW5kZXhdKTtcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVPbkVkaXRpb24gPSBkYXRhO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvd09uRWRpdGlvbiA9IGluZGV4O1xyXG4gICAgICB9XHJcbiAgICB9LCAzMDApXHJcbiAgfVxyXG5cclxuICBlbmRFZGl0TW9kZU5nTW9kZWwoaW5kZXg6IG51bWJlciwgZGF0YTogYW55ID0gbnVsbCwgcHJvcGVydHk6IGFueSA9IG51bGwsIGZpZWxkOiBGaWVsZCA9IG51bGwpIHtcclxuICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgZGF0YS5jbWFjc0VkaXRlZFByb3AgPSBwcm9wZXJ0eSA/IHByb3BlcnR5IDogdGhpcy5wcm9wZXJ0eTtcclxuICAgICAgaWYgKGZpZWxkICYmIGZpZWxkLm1vZGUgPT09ICd0YWdzU2luZ2xlU2VsZWN0Jykge1xyXG4gICAgICAgIGRhdGFbZmllbGQucHJvcGVydHldID0gZGF0YVtmaWVsZC5wcm9wZXJ0eV0ubGVuZ3RoID8gZGF0YVtmaWVsZC5wcm9wZXJ0eV1bMF0gOiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQoZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhW2luZGV4XTtcclxuICAgICAgZGF0YS5jbWFjc0VkaXRlZFByb3AgPSBwcm9wZXJ0eSA/IHByb3BlcnR5IDogdGhpcy5wcm9wZXJ0eTtcclxuICAgICAgaWYgKGZpZWxkICYmIGZpZWxkLm1vZGUgPT09ICd0YWdzU2luZ2xlU2VsZWN0Jykge1xyXG4gICAgICAgIGRhdGFbZmllbGQucHJvcGVydHldID0gZGF0YVtmaWVsZC5wcm9wZXJ0eV0ubGVuZ3RoID8gZGF0YVtmaWVsZC5wcm9wZXJ0eV1bMF0gOiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc0Jvb2xlYW4oZmllbGQpKSB7XHJcbiAgICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja2JveFNlbGVjdCAmJiAhdGhpcy5nZXROb2RlKGRhdGFbdGhpcy5maWVsZElEXSkuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIHRoaXMub25DaGVja2JveFRyZWVDaGFuZ2UodHJ1ZSwgZGF0YSwgdGhpcy5tYXBPZkV4cGFuZGVkRGF0YVtkYXRhW3RoaXMuZmllbGRJRF1dKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tib3hTZWxlY3QgJiYgIXRoaXMuc2VsZWN0aW9uLmlzU2VsZWN0ZWQoZGF0YVt0aGlzLmZpZWxkSURdKSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RUcmVlU2luZ2xlKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSb3dTZWxlY3RlZChkYXRhKSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RSb3cobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJyksIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICB0aGlzLm5vZGVPbkVkaXRpb24gPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgbmdNb2RlbENoYW5nZShpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsKSB7XHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIHRoaXMubm9kZU9uRWRpdGlvbiA9IGRhdGE7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucm93T25FZGl0aW9uID0gaW5kZXg7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleChpZCk6IG51bWJlciB7XHJcbiAgICBsZXQgaSA9IC0xO1xyXG4gICAgaSA9IHRoaXMuY2hlY2tib3hDYWNoZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGlkKTtcclxuICAgIHJldHVybiBpO1xyXG4gIH1cclxuXHJcbiAgb3JkZXIgPSAwO1xyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjaGVja2JveFRlbXBDYWNoZSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2hlY2tib3hUZW1wQ2FjaGUucHVzaCh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkID8gZmFsc2UgOiB0aGlzLmRhdGFbaV0uc2VsZWN0ZWQsXHJcbiAgICAgICAgZGF0YTogeyAuLi50aGlzLmRhdGFbaV0gfSxcclxuICAgICAgICBvcmRlcjogdGhpcy5kYXRhW2ldLnNlbGVjdGVkID8gdGhpcy5vcmRlcisrIDogLTFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUgPSBbLi4uY2hlY2tib3hUZW1wQ2FjaGVdO1xyXG4gICAgaWYgKHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkKSB7XHJcbiAgICAgIHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2JveENhY2hlVHJlZURhdGEoKSB7XHJcbiAgICB0aGlzLmNvbnZlcnRFeHBhbmRUcmVlVG9MaXN0KHRoaXMuZGF0YSwgdGhpcy5jaGVja2JveENhY2hlKTtcclxuICB9XHJcblxyXG4gIGNsaWNrSHlwZXJsaW5rKGRhdGE6IHN0cmluZykge1xyXG4gICAgdGhpcy5vbmNsaWNrSHlwZXJsaW5rLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0RXhwYW5kVHJlZVRvTGlzdChpdGVtOiBhbnksIHBsYWluTGlzdDogYW55W10pIHtcclxuICAgIGlmIChpc0FycmF5KGl0ZW0pKSB7XHJcbiAgICAgIGl0ZW0uZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICBsZXQgZWxlbWVudEluQ2FjaGUgPSBwbGFpbkxpc3QuZmluZEluZGV4KGVsID0+IGVsLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGVsZW1bdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICAgIGlmIChlbGVtZW50SW5DYWNoZSA8IDApIHtcclxuICAgICAgICAgIHBsYWluTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBvcmRlcjogLTEsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgLi4uZWxlbSB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbGVtLmNoaWxkcmVuICYmIGVsZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5jb252ZXJ0RXhwYW5kVHJlZVRvTGlzdChlbGVtLmNoaWxkcmVuLCBwbGFpbkxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgZWxlbWVudEluQ2FjaGUgPSBwbGFpbkxpc3QuZmluZEluZGV4KGVsID0+IGVsLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGl0ZW1bdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICBpZiAoZWxlbWVudEluQ2FjaGUgPCAwKSB7XHJcbiAgICAgICAgcGxhaW5MaXN0LnB1c2goe1xyXG4gICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgb3JkZXI6IC0xLFxyXG4gICAgICAgICAgZGF0YTogeyAuLi5pdGVtIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CdXR0b25DbGljayhmaWVsZDogYW55KSB7XHJcbiAgICB0aGlzLmJ1dHRvbkNsaWNrLmVtaXQoZmllbGQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveENoYW5nZSgkZXZlbnQsIGRhdGEpIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZVt0aGlzLmdldEluZGV4KGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pXS5vcmRlciA9ICRldmVudCA/IHRoaXMub3JkZXIrKyA6IC0xO1xyXG4gICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaENoZWNrYm94U3RhdGUob25pbml0ID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGRhdGFTZWxlY3RlZCA9IHRoaXMuY2hlY2tDaGVja2JveFN0YXRlKCk7XHJcbiAgICBpZiAoIW9uaW5pdCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KGRhdGFTZWxlY3RlZC5tYXAoaXRlbSA9PiBpdGVtLmRhdGEpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrQ2hlY2tib3hTdGF0ZSgpIHtcclxuICAgIGNvbnN0IGRhdGFTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkID09PSB0cnVlKS5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5hbGxDaGVja2VkID0gKGRhdGFTZWxlY3RlZC5sZW5ndGggPiAwICYmIChkYXRhU2VsZWN0ZWQubGVuZ3RoID09PSB0aGlzLmNoZWNrYm94Q2FjaGUubGVuZ3RoKSk7XHJcbiAgICB0aGlzLmlzSW5kZXRlcm1pbmF0ZSA9IGRhdGFTZWxlY3RlZC5sZW5ndGggPiAwICYmICF0aGlzLmFsbENoZWNrZWQ7XHJcbiAgICByZXR1cm4gZGF0YVNlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gIG9uUmF0ZUNoYW5nZShjb3VudDogbnVtYmVyLCBkYXRhOiBhbnkpIHtcclxuICAgIGRhdGFbdGhpcy5jb25maWcuZmllbGRSYXRlXSA9IGNvdW50O1xyXG4gICAgdGhpcy5yYXRlQ2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBvblJhdGVDbGljayhldmVudDogYW55KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZHMoKTogRmllbGRbXSB7XHJcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuZmllbGRzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5oaWRkZW4gPT09IHVuZGVmaW5lZCB8fCAhaXRlbS5oaWRkZW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveEFsbENoYW5nZShzdGF0dXM6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBlbGVtZW50LnNlbGVjdGVkID0gc3RhdHVzO1xyXG4gICAgICBlbGVtZW50Lm9yZGVyID0gLTE7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKCF0aGlzLmV4Y2x1c2l2ZVNlbGVjdCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KChzdGF0dXMpID8gdGhpcy5kYXRhIDogW10pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZGF0YVNlbGVjdGVkID0gdGhpcy5jaGVja2JveENhY2hlLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCgoc3RhdHVzKSA/IGRhdGFTZWxlY3RlZC5tYXAoZSA9PiBlLmRhdGEpIDogW10pO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldExhYmVsKGRhdGE6IGFueSwgZmllbGQ6IEZpZWxkKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIGlmIChmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3QgJiYgZmllbGQuc2VsZWN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICBjb25zdCBpdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChpdGVtID0+IGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGRhdGFbZmllbGQucHJvcGVydHldKTtcclxuICAgICAgcmVzdWx0ID0gKGl0ZW0gIT09IHVuZGVmaW5lZCkgPyBpdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF0gOiAnJztcclxuICAgICAgaWYgKGZpZWxkLm1vZGUgPT09ICd0YWdzU2luZ2xlU2VsZWN0JyAmJiByZXN1bHQgPT09ICcnKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gZGF0YVtmaWVsZC5wcm9wZXJ0eV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3QoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3Q7XHJcbiAgfVxyXG5cclxuICBpc1N0cmluZyhmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlN0cmluZztcclxuICB9XHJcblxyXG4gIGlzUmVhZE9ubHkoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5yZWFkb25seSAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLnJlYWRvbmx5O1xyXG4gIH1cclxuXHJcbiAgaXNOdW1iZXIoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5OdW1iZXI7XHJcbiAgfVxyXG5cclxuICBpc051bGwodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBpc0Jvb2xlYW4oZmllbGQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSBudWxsICYmIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuQm9vbGVhbjtcclxuICB9XHJcblxyXG4gIGlzT2JqZWN0KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiAodmFsdWUpID09PSAnb2JqZWN0JztcclxuICB9XHJcblxyXG4gIGlzRGF0ZShmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgfVxyXG5cclxuICBpc1RpbWUoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5UaW1lO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZURlZmF1bHQoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVCdXR0b24oZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuQnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRhZyhmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UYWc7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlSHlwZXJsaW5rKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkh5cGVybGluayAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgfVxyXG5cclxuICBpc1VuZGVmaW5lZCh2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGlzUm93U2VsZWN0ZWQoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb25maWcpIHtcclxuICAgICAgY29uc3QgZGF0YVNlbGVjdGQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgICAgcmV0dXJuIGRhdGFTZWxlY3RkLmluZGV4T2YoZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSkgIT09IC0xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGV4Y2VsU2VydmljZTogRXhjZWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkZXZpY2VEZXRlY3RvcjogRGV2aWNlRGV0ZWN0b3JTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsXHJcbiAgICBwcml2YXRlIG56RHJvcGRvd25TZXJ2aWNlOiBDbWFjc0NvbnRleHRNZW51U2VydmljZSxcclxuICAgIHByaXZhdGUgY29va2llczogQ29va2llU2VydmljZSxcclxuICAgIHByaXZhdGUgdXRpbFNlcnZpY2U6IFV0aWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5nZXRJbmRleENvb2tpZSgpICYmIHRoaXMuY29va2llcy5jaGVjayh0aGlzLmdyaWRJRCkpIHtcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWdTdHIgPSB0aGlzLmNvb2tpZXMuZ2V0KHRoaXMuZ3JpZElEKTtcclxuICAgICAgLy8gcmVzZXQgZXhwaXJhdGlvbiBkYXRlXHJcbiAgICAgIHRoaXMuY29va2llcy5zZXQodGhpcy5ncmlkSUQsIHNhdmVkQ29uZmlnU3RyLCAzNjUpO1xyXG5cclxuICAgICAgLy8gcGFyc2UgY29va2llIHZhbHVlIHRvIHR5cGVzY3JpcHQgY29uc3RcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWcgPSBKU09OLnBhcnNlKHRoaXMuY29va2llcy5nZXQodGhpcy5ncmlkSUQpKSBhcyBHcmlkQ29uZmlnO1xyXG4gICAgICBpZiAodHlwZW9mIHNhdmVkQ29uZmlnID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBzYXZlZENvbmZpZztcclxuICAgICAgICB0aGlzLmNvbmZpZ0NoYW5nZS5lbWl0KHRoaXMuY29uZmlnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy5kaXNhYmxlU2VsZWN0RXZlbnRPbkV4cGFuZCgpO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZVNlbGVjdEV2ZW50T25FeHBhbmQoKSB7XHJcbiAgICBjb25zdCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhbnQtdGFibGUtcm93LWV4cGFuZC1pY29uJyk7XHJcbiAgICBpZiAoIXRoaXMuaXNOdWxsKGV4cGFuZEJ1dHRvbikpIHtcclxuICAgICAgZm9yIChsZXQgYiBvZiBBcnJheS5mcm9tKGV4cGFuZEJ1dHRvbikpIHtcclxuICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoJGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgkZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleENvb2tpZSgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gICAgLypsZXQgYWxsb3dJbmRleFBhZ2VDb29raWUgPSBmYWxzZTtcclxuICAgIGxldCBjb25zZW50Q29va2llID0gdGhpcy5jb29raWVzLmdldCgnT3B0YW5vbkNvbnNlbnQnKTtcclxuICAgIGlmIChjb25zZW50Q29va2llICE9IFwiXCIpIHtcclxuICAgICAgbGV0IGdyb3VwSW5kZXggPSBjb25zZW50Q29va2llLmluZGV4T2YoJ2dyb3Vwcz0nKTtcclxuICAgICAgbGV0IGdyb3VwcyA9IGNvbnNlbnRDb29raWUuc3Vic3RyaW5nKGdyb3VwSW5kZXgpOyAvL3dpbGwgcmV0dXJuIHNvbWV0aGluZ2xpa2UgZ3JvdXBzPUMwMDAyOjAsQzAwMDE6MVxyXG4gICAgICBsZXQgZnVuY3Rpb25hbEdyb3VwSW5kZXggPSBncm91cHMuaW5kZXhPZignQzAwMDk6Jyk7XHJcbiAgICAgIGlmIChmdW5jdGlvbmFsR3JvdXBJbmRleCAhPSAtMSkge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5VmFsdWUgPSBncm91cHMuc3Vic3RyaW5nKGZ1bmN0aW9uYWxHcm91cEluZGV4ICsgNiwgZnVuY3Rpb25hbEdyb3VwSW5kZXggKyA3KTtcclxuICAgICAgICBpZiAoTnVtYmVyKGNhdGVnb3J5VmFsdWUpID09PSAxKSB7XHJcbiAgICAgICAgICBhbGxvd0luZGV4UGFnZUNvb2tpZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWxsb3dJbmRleFBhZ2VDb29raWU7Ki9cclxuICB9XHJcblxyXG4gIHNldEZpZWxkc0RlZmF1bHQoKSB7XHJcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuZmllbGRzKSB7XHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBmaWVsZC5lZGl0YWJsZSA9IGZpZWxkLmVkaXRhYmxlID09PSBudWxsIHx8IGZpZWxkLmVkaXRhYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmllbGQuZWRpdGFibGU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZ3JpZElEKSB7XHJcbiAgICAgIHRoaXMuZ3JpZElEID0gdGhpcy51dGlsU2VydmljZS51dWlkdjQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldEZpZWxkc0RlZmF1bHQoKTtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RhYmxlJyk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2tib3hTZWxlY3QgJiYgIXRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICAgICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jaGVja2JveFNlbGVjdCAmJiB0aGlzLmV4cGFuZGFibGUgJiYgdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlVHJlZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGFUYWJsZSAmJiB0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICB3aGlsZSAodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9wKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaG93UGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXhwb3J0RXZlbnQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoY29uZmlnOiBHcmlkRXhwQ29uZmlnKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoY29uZmlnLmV4cG9ydFR5cGUpIHtcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuUGRmOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb1BkZihjb25maWcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlhzbHg6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvRXhjZWwoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5Qbmc6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvUG5nKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuUGRmVHJlZTpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VHJlZVBkZihjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlhzbHhUcmVlOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUcmVlRXhjZWwoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiBDb252ZXJ0IHRyZWUgdG8gbGlzdCBpZiBleHBhbmRhYmxlICovXHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuZmllbGRJRCA9IHRoaXMuY29uZmlnLmZpZWxkSWQ7XHJcbiAgICAgIGNvbnN0IGNvZXJjZURhdGEgPSB0aGlzLmRhdGEgYXMgYW55W107XHJcbiAgICAgIGNvZXJjZURhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICB0aGlzLm1hcE9mRXhwYW5kZWREYXRhW2l0ZW1bdGhpcy5maWVsZElEXV0gPSB0aGlzLmNvbnZlcnRUcmVlVG9MaXN0KGl0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnV0aWxTZXJ2aWNlLmV4cG9ydENvbXBsZXRlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmV4Y2VsU2VydmljZS5leHBvcnRDb21wbGV0ZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNoZWNrU29ydEV2ZW50KCk7XHJcbiAgICB0aGlzLmNoZWNrUmVzaXplRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrU29ydEV2ZW50KCkge1xyXG4gICAgdGhpcy5vbnNvcnRvYnMucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuX29ucmVzaXplJCksXHJcbiAgICAgIGRlbGF5KDMwMCksXHJcbiAgICAgIHJlcGVhdCgpLFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICkuc3Vic2NyaWJlKChvYmo6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBmID0gdGhpcy5jb25maWcuZmllbGRzLmZpbmQoZWwgPT4gZWwucHJvcGVydHkgPT09IG9iai5zb3J0TmFtZSk7XHJcbiAgICAgIGYuc29ydE9yZGVyID0gb2JqLnNvcnRWYWx1ZTtcclxuICAgICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoeyBzb3J0TmFtZTogb2JqLnNvcnROYW1lLCBzb3J0VmFsdWU6IG9iai5zb3J0VmFsdWUgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrUmVzaXplRXZlbnQoKSB7XHJcbiAgICB0aGlzLm9ucmVzaXplb2JzLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgKS5zdWJzY3JpYmUoKG9iajogeyBldmVudDogTnpSZXNpemVFdmVudCwgY29sOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCB9KSA9PiB7XHJcbiAgICAgIHRoaXMuY29uZmlnID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmNvbmZpZykpXHJcbiAgICAgIHRoaXMub25SZXNpemVFdnQob2JqLmV2ZW50LCBvYmouY29sLCBvYmouZmllbGQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgICB0aGlzLm1hcE9mRXhwYW5kZWREYXRhID0ge307XHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGUgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZVRyZWVEYXRhKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZmllbGRJRCA9IHRoaXMuY29uZmlnLmZpZWxkSWQ7XHJcbiAgICAgICAgY29uc3QgY29lcmNlRGF0YSA9IHRoaXMuZGF0YSBhcyBhbnlbXTtcclxuICAgICAgICBjb2VyY2VEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGlzLm1hcE9mRXhwYW5kZWREYXRhW2l0ZW1bdGhpcy5maWVsZElEXV0pIHtcclxuICAgICAgICAgICAgdGhpcy5tYXBPZkV4cGFuZGVkRGF0YVtpdGVtW3RoaXMuZmllbGRJRF1dID0gdGhpcy5jb252ZXJ0VHJlZVRvTGlzdChpdGVtKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSgpO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLnNldEZpZWxkc0RlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuZGlzYWJsZVNlbGVjdEV2ZW50T25FeHBhbmQoKTtcclxuICB9XHJcblxyXG4gIC8qIGdldFRyZWVOb2RlQnlLZXkobm9kZTogYW55LCBrZXk6IGFueSkge1xyXG4gICAgIGNvbnNvbGUubG9nKG5vZGUpXHJcbiAgICAgaWYgKGlzQXJyYXkobm9kZSkpIHtcclxuICAgICAgIG5vZGUuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgIHRoaXMuZ2V0VHJlZU5vZGVCeUtleShlbCwga2V5KTtcclxuICAgICAgIH0pXHJcbiAgICAgfSBlbHNlIGlmIChub2RlW3RoaXMuZmllbGRJRF0gPT09IGtleSkge1xyXG4gICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgfSBlbHNlIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICB0aGlzLmdldFRyZWVOb2RlQnlLZXkoZWwsIGtleSk7XHJcbiAgICAgICB9KVxyXG4gICAgIH1cclxuICAgfSovXHJcblxyXG4gIC8qIEV4cGFuZGFibGUgUm93cyAqL1xyXG4gIGV4cG9ydFRyZWVQZGYoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZG9jID0gbmV3IGpzUERGKCk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gW107XHJcbiAgICBjb25zdCByb3dzID0gW107XHJcblxyXG4gICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb2x1bW5zLnB1c2goZmllbGQuZGlzcGxheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb2x1bW5zLnB1c2goZmllbGQuZGlzcGxheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmV4cG9ydFRyZWVUb1BkZlJlYyhyb3dzLCB0aGlzLmRhdGEsIDApO1xyXG5cclxuICAgIC8qZG9jLmF1dG9UYWJsZSh7XHJcbiAgICAgIHRoZW1lOiAnc3RyaXBlZCcsXHJcbiAgICAgIG1hcmdpbjogeyB0b3A6IDUgfSxcclxuICAgICAgYm9keTogcm93cyxcclxuICAgICAgY29sdW1uc1xyXG4gICAgfSk7Ki9cclxuXHJcbiAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyBmaWxlTmFtZSArICcucGRmJztcclxuICAgIGRvYy5zYXZlKGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRyZWVUb1BkZlJlYyhyb3dzOiBhbnksIGRhdGE6IGFueSwgb2ZmU2V0TWFyZ2luID0gMCkge1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0gW107XHJcbiAgICAgIGNvbnN0IGNvZXJjZWRJdGVtID0gaXRlbSBhcyBhbnk7XHJcbiAgICAgIGxldCBwYXJlbnRTdHlsZXM6IGFueSA9IHsgY2VsbFBhZGRpbmc6IFsyLCAyLCAyLCAyXSB9O1xyXG5cclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCB8fCBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikuZm9yRWFjaCgoZmllbGQsIGlkeCkgPT4ge1xyXG5cclxuICAgICAgICBwYXJlbnRTdHlsZXMgPSB7IGNlbGxQYWRkaW5nOiBbMiwgMiwgMiwgMl0gfTtcclxuICAgICAgICBpZiAoIWlkeCkge1xyXG4gICAgICAgICAgcGFyZW50U3R5bGVzLmNlbGxQYWRkaW5nID0gWzIsIDIsIDIsIDIgKyBvZmZTZXRNYXJnaW5dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvZXJjZWRJdGVtLmNoaWxkcmVuICYmIGNvZXJjZWRJdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgcGFyZW50U3R5bGVzLmZpbGxDb2xvciA9IFsxNTMsIDIwNCwgMjU1XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goeyBjb250ZW50OiBpdGVtW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0LmV4cG9ydFZhbHVlLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3dpdGNoIChmaWVsZC5lZGl0VGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU2VsZWN0OlxyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0SXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7IGNvbnRlbnQ6IHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXSwgc3R5bGVzOiBwYXJlbnRTdHlsZXMgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOlxyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHsgY29udGVudDogdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oaXRlbVtmaWVsZC5wcm9wZXJ0eV0sICdNTU1NIGRkIHl5eXknKSwgc3R5bGVzOiBwYXJlbnRTdHlsZXMgfSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlRpbWU6XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goeyBjb250ZW50OiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShpdGVtW2ZpZWxkLnByb3BlcnR5XSwgJ2g6bW0gYScpLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7IGNvbnRlbnQ6IGl0ZW1bZmllbGQucHJvcGVydHldLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJvd3MucHVzaChpdGVtVG9FeHBvcnQpO1xyXG4gICAgICBpZiAoY29lcmNlZEl0ZW0uY2hpbGRyZW4gJiYgY29lcmNlZEl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5leHBvcnRUcmVlVG9QZGZSZWMocm93cywgY29lcmNlZEl0ZW0uY2hpbGRyZW4sIDUgKyBvZmZTZXRNYXJnaW4pO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0VHJlZVRvTGlzdChyb290OiBhbnkpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBzdGFjazogYW55W10gPSBbXTtcclxuICAgIGNvbnN0IGFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgaGFzaE1hcCA9IHt9O1xyXG4gICAgc3RhY2sucHVzaCh7IC4uLnJvb3QsIGxldmVsOiAwLCBleHBhbmQ6IHRoaXMuZXhwYW5kQWxsID8gdGhpcy5leHBhbmRBbGwgOiByb290LmV4cGFuZCB9KTtcclxuXHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGFjay5wb3AoKTtcclxuICAgICAgdGhpcy52aXNpdE5vZGUobm9kZSwgaGFzaE1hcCwgYXJyYXkpO1xyXG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLi4ubm9kZS5jaGlsZHJlbltpXSxcclxuICAgICAgICAgICAgICBsZXZlbDogbm9kZS5sZXZlbCArIDEsXHJcbiAgICAgICAgICAgICAgZXhwYW5kOiB0aGlzLmV4cGFuZEFsbCA/IHRoaXMuZXhwYW5kQWxsIDogbm9kZS5jaGlsZHJlbltpXS5leHBhbmQsXHJcbiAgICAgICAgICAgICAgcGFyZW50OiBub2RlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG4gIHZpc2l0Tm9kZShub2RlOiBhbnksIGhhc2hNYXA6IGFueSwgYXJyYXk6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAoIWhhc2hNYXBbbm9kZVt0aGlzLmZpZWxkSURdXSkge1xyXG4gICAgICBoYXNoTWFwW25vZGVbdGhpcy5maWVsZElEXV0gPSB0cnVlO1xyXG4gICAgICBhcnJheS5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgRXhwYW5kQ29sbGFwc2UoYXJyYXk6IGFueVtdLCBkYXRhOiBhbnksICRldmVudDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCRldmVudCA9PT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5jb2xsYXBzZUNoaWxkcmVuKGFycmF5LCBkYXRhLCAkZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vblJvd0V4cGFuZENvbGxhcHNlLmVtaXQoeyBkYXRhLCAkZXZlbnQgfSk7XHJcbiAgfVxyXG4gIGNvbGxhcHNlQ2hpbGRyZW4oYXJyYXk6IGFueVtdLCBkYXRhOiBhbnksICRldmVudDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCRldmVudCA9PT0gZmFsc2UpIHtcclxuICAgICAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcclxuICAgICAgICBkYXRhLmNoaWxkcmVuLmZvckVhY2goZCA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBhcnJheS5maW5kKGEgPT4gYVt0aGlzLmZpZWxkSURdID09PSBkW3RoaXMuZmllbGRJRF0pITtcclxuICAgICAgICAgIHRhcmdldC5leHBhbmQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuY29sbGFwc2VDaGlsZHJlbihhcnJheSwgdGFyZ2V0LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94VHJlZUNoYW5nZSgkZXZlbnQsIGl0ZW0sIHN1YnRyZWUgPSBudWxsKSB7XHJcbiAgICBpZiAoIXRoaXMuZXhjbHVzaXZlU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVHJlZUNoZWNrYm94ZXMoJGV2ZW50LCBpdGVtKTtcclxuICAgICAgY29uc3QgY29lcmNlZEVsZW0gPSBzdWJ0cmVlLmZpbmQoZSA9PiBlW3RoaXMuZmllbGRJRF0gPT09IGl0ZW1bdGhpcy5maWVsZElEXSk7XHJcbiAgICAgIGlmIChjb2VyY2VkRWxlbS5wYXJlbnQpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hTdWJUcmVlQ2hlY2tib3hlcyhjb2VyY2VkRWxlbS5wYXJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVHJlZUNoZWNrYm94ZXMoJGV2ZW50OiBib29sZWFuLCBhcnJheTogYW55KSB7XHJcbiAgICBhcnJheS5zZWxlY3RlZCA9ICRldmVudDtcclxuICAgIGNvbnN0IG5vZGU6IENoZWNrYm94U2VsZWN0ID0gdGhpcy5nZXROb2RlKGFycmF5W3RoaXMuZmllbGRJRF0pO1xyXG4gICAgbm9kZS5zZWxlY3RlZCA9ICRldmVudDtcclxuICAgIG5vZGUub3JkZXIgPSAkZXZlbnQgPyB0aGlzLm9yZGVyKysgOiAtMTtcclxuICAgIGlmIChhcnJheS5jaGlsZHJlbiEhKSB7XHJcbiAgICAgIGFycmF5LmNoaWxkcmVuLmZvckVhY2goKGQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVHJlZUNoZWNrYm94ZXMoJGV2ZW50LCBkKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWZyZXNoU3ViVHJlZUNoZWNrYm94ZXMoc3VidHJlZSkge1xyXG4gICAgaWYgKHN1YnRyZWUuY2hpbGRyZW4hISkge1xyXG4gICAgICBsZXQgY2hlY2tlZCA9IDA7XHJcbiAgICAgIGxldCBpbmRldGVybWluYXRlID0gMDtcclxuICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygc3VidHJlZS5jaGlsZHJlbikge1xyXG4gICAgICAgIGNvbnN0IG5vZGU6IENoZWNrYm94U2VsZWN0ID0gdGhpcy5nZXROb2RlKGNoaWxkW3RoaXMuZmllbGRJRF0pO1xyXG4gICAgICAgIGlmIChub2RlLnNlbGVjdGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBjaGVja2VkKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub2RlLnNlbGVjdGVkID09PSAtMSkge1xyXG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBub2RlOiBDaGVja2JveFNlbGVjdCA9IHRoaXMuZ2V0Tm9kZShzdWJ0cmVlW3RoaXMuZmllbGRJRF0pO1xyXG4gICAgICBub2RlLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgIGlmIChpbmRldGVybWluYXRlIHx8IChjaGVja2VkIDwgc3VidHJlZS5jaGlsZHJlbi5sZW5ndGggJiYgY2hlY2tlZCkpIHtcclxuICAgICAgICBub2RlLnNlbGVjdGVkID0gLTE7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2hlY2tlZCA9PT0gc3VidHJlZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICBub2RlLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGlmIChzdWJ0cmVlLnBhcmVudCkge1xyXG4gICAgICB0aGlzLnJlZnJlc2hTdWJUcmVlQ2hlY2tib3hlcyhzdWJ0cmVlLnBhcmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXROb2RlKGtleTogYW55KSB7XHJcbiAgICBsZXQgdGVzdCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIobiA9PiBuLmRhdGFbdGhpcy5maWVsZElEXSA9PT0ga2V5KTtcclxuICAgIHJldHVybiB0ZXN0ID8gdGVzdFswXSA6IHsgc2VsZWN0ZWQ6IGZhbHNlLCBkYXRhOiBudWxsIH07XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb1BuZyhmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRUYWJsZSgncG5nJywgZmlsZU5hbWUsIHRoaXMuZ3JpZElEKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRvRXhjZWwoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnN0IGRhdGFUb0V4cG9ydDogYW55W10gPSBbXTtcclxuXHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0ge307XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHwgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGlmICghZmllbGQuaGlkZGVuKSB7XHJcbiAgICAgICAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdEl0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpIHtcclxuICAgICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dC5leHBvcnRWYWx1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkYXRhVG9FeHBvcnQucHVzaChpdGVtVG9FeHBvcnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJERC5NTS5ZWVlZLkhILm1tLnNzXCIpICsgJ18nICsgZmlsZU5hbWU7XHJcbiAgICB0aGlzLmV4Y2VsU2VydmljZS5leHBvcnRBc0V4Y2VsRmlsZShkYXRhVG9FeHBvcnQsIGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICB9XHJcblxyXG4gIC8qIEV4cGFuZGFibGUgUm93cyAqL1xyXG4gIGV4cG9ydFRyZWVFeGNlbChmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRhVG9FeHBvcnQ6IGFueVtdID0gW107XHJcbiAgICB0aGlzLmV4cG9ydFRyZWVFeGNlbFJlYyh0aGlzLmRhdGEsIGRhdGFUb0V4cG9ydCk7XHJcbiAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyBmaWxlTmFtZTtcclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydEFzRXhjZWxGaWxlKGRhdGFUb0V4cG9ydCwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VHJlZUV4Y2VsUmVjKGRhdGE6IGFueSwgZGF0YVRvRXhwb3J0OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IHt9O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoIWZpZWxkLmhpZGRlbikge1xyXG4gICAgICAgICAgaWYgKGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBpdGVtW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0LmV4cG9ydFZhbHVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0SXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRhdGFUb0V4cG9ydC5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcblxyXG4gICAgICBjb25zdCBjb2VyY2VkSXRlbSA9IGl0ZW0gYXMgYW55O1xyXG4gICAgICBpZiAoY29lcmNlZEl0ZW0uY2hpbGRyZW4gJiYgY29lcmNlZEl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5leHBvcnRUcmVlRXhjZWxSZWMoY29lcmNlZEl0ZW0uY2hpbGRyZW4sIGRhdGFUb0V4cG9ydCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBleHBvcnRUb1BkZihjb25maWcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBpZiAoIWNvbmZpZy51c2VWZXJzaW9uMikge1xyXG4gICAgICB0aGlzLnV0aWxTZXJ2aWNlLmV4cG9ydFRhYmxlKFxyXG4gICAgICAgICdwZGYnLFxyXG4gICAgICAgIGNvbmZpZy5maWxlTmFtZSxcclxuICAgICAgICB0aGlzLmdyaWRJRCxcclxuICAgICAgICBjb25maWcuZXhwb3J0Q29tcGFueU5hbWUsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFVzZXJOYW1lLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRUaXRsZSxcclxuICAgICAgICBjb25maWcuZXhwb3J0Q29tcGFueUxvZ29VcmwsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFRhYmxlQ3VzdG9tV2lkdGgsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBleHBvcnRDb25maWcgPSB7XHJcbiAgICAgICAgY2hlY2tib3hTZWxlY3Q6IHRoaXMuY2hlY2tib3hTZWxlY3QsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtczogdGhpcy5jaGVja2JveFNlbGVjdCA/IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pIDogW10sXHJcbiAgICAgICAgZmlsZU5hbWU6IGNvbmZpZy5maWxlTmFtZSxcclxuICAgICAgICBkYXRlUGlwZTogdGhpcy5kYXRlUGlwZSxcclxuICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXHJcbiAgICAgICAgZWxlbUlEOiB0aGlzLmdyaWRJRCxcclxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxyXG4gICAgICAgIGNvbHVtblN0eWxlczogY29uZmlnLmNvbHVtblN0eWxlcyxcclxuICAgICAgICBleHBvcnRDb21wYW55TmFtZTogY29uZmlnLmV4cG9ydENvbXBhbnlOYW1lLFxyXG4gICAgICAgIGV4cG9ydFVzZXJOYW1lOiBjb25maWcuZXhwb3J0VXNlck5hbWUsXHJcbiAgICAgICAgZXhwb3J0VGl0bGU6IGNvbmZpZy5leHBvcnRUaXRsZSxcclxuICAgICAgICBleHBvcnRDb21wYW55TG9nb1VybDogY29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsID8gY29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsIDogJ2Fzc2V0cy9QVG9CX2xvZ28ucG5nJyxcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRUYWJsZXYyKFxyXG4gICAgICAgIGV4cG9ydENvbmZpZ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGNsaWNrcyA9IDA7XHJcbiAgY2xpY2tSb3coZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5jbGlja3MrKztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RSb3coZXZlbnQsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrcyA+IDEpIHtcclxuICAgICAgICB0aGlzLmRibENsaWNrUm93KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xpY2tzID0gMDtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RSb3coZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vbmNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgICAvKiBHZXQgaW5kZXggb2Ygc2VsZWN0aW9uICovXHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgaWYgKCF0aGlzLmNoZWNrYm94U2VsZWN0KSB7XHJcbiAgICAgIGlmIChldmVudCAmJiAodG9Cb29sZWFuKGV2ZW50LmN0cmxLZXkpIHx8IHRvQm9vbGVhbihldmVudC5zaGlmdEtleSkpKSB7XHJcbiAgICAgICAgLyogU2hpZnQgU2VsZWN0aW9uICovXHJcbiAgICAgICAgaWYgKHRvQm9vbGVhbihldmVudC5zaGlmdEtleSkpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0TXVsdGlwbGUoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGlvbihkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICAvKiBTZWxlY3QgZWxlbWVudCAqL1xyXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZCA9IGV2ZW50ICYmIHRvQm9vbGVhbihldmVudC5zaGlmdEtleSkgPyB0cnVlIDogIXRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQ7XHJcbiAgICAgICAgLyogU2F2ZSBsYXN0IGluZGV4IHNlbGVjdGVkICovXHJcbiAgICAgICAgdGhpcy5sYXN0SWR4U2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkID8gaW5kZXggOiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCk7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0ub3JkZXIgPSB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkID8gdGhpcy5vcmRlcisrIDogLTE7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoc2VsZWN0ZWRJdGVtcy5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcikubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVTZWxlY3Rpb24oZGF0YSkge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQgJiYgaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdICE9PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKVxyXG4gICAgICAuZm9yRWFjaChlbGVtID0+IHsgZWxlbS5zZWxlY3RlZCA9IGZhbHNlOyBlbGVtLm9yZGVyID0gLTEgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RNdWx0aXBsZShjdXJyZW50SWR4KSB7XHJcbiAgICBpZiAodGhpcy5sYXN0SWR4U2VsZWN0ZWQgIT09IG51bGwpIHtcclxuICAgICAgd2hpbGUgKGN1cnJlbnRJZHggIT09IHRoaXMubGFzdElkeFNlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENhY2hlW3RoaXMubGFzdElkeFNlbGVjdGVkXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENhY2hlW3RoaXMubGFzdElkeFNlbGVjdGVkXS5vcmRlciA9IHRoaXMub3JkZXIrKztcclxuICAgICAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IGN1cnJlbnRJZHggPiB0aGlzLmxhc3RJZHhTZWxlY3RlZCA/IHRoaXMubGFzdElkeFNlbGVjdGVkICsgMSA6IHRoaXMubGFzdElkeFNlbGVjdGVkIC0gMTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlW2N1cnJlbnRJZHhdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlW2N1cnJlbnRJZHhdLm9yZGVyID0gdGhpcy5vcmRlcisrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sYXN0SWR4U2VsZWN0ZWQgPSBjdXJyZW50SWR4O1xyXG4gIH1cclxuXHJcbiAgZGJsQ2xpY2tSb3coZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm9uZGxjbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdGFwQ291bnQgPSAwO1xyXG5cclxuICB0YXBIYW5kbGVyKCRldmVudCwgZGF0YSkge1xyXG4gICAgdGhpcy50YXBDb3VudCArPSAxO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnRhcENvdW50ID09PSAxKSB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5jbGlja1JvdyhudWxsLCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRhcENvdW50ID0gMDtcclxuICAgIH0sIDYwMCk7XHJcbiAgICBpZiAodGhpcy50YXBDb3VudCA+IDEpIHtcclxuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuZGJsQ2xpY2tSb3coZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY2xpY2tCb29sZWFuQ2VsbChkYXRhOiBhbnksIGlkOiBhbnksIGZpZWxkOiBGaWVsZCwgaW5kZXg6IG51bWJlciwgJGV2ZW50OiBudWxsKTogdm9pZCB7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHQoJGV2ZW50KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmluTGluZUVkaXQgJiYgZmllbGQuZWRpdGFibGUpIHtcclxuICAgICAgaWYgKGRhdGFbZmllbGQucHJvcGVydHldID09PSBudWxsIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPSAoZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09IGZhbHNlIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSAnZmFsc2UnKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVuZEVkaXRNb2RlTmdNb2RlbChpbmRleCwgZGF0YSwgZmllbGQucHJvcGVydHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd1ZpZXdNb2RlVHBsKGZpZWxkLCBpdGVtKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNOdWxsKGl0ZW0uaGlkZGVuRmllbGRzKVxyXG4gICAgICAmJiBpdGVtLmhpZGRlbkZpZWxkcy5maWx0ZXIoeCA9PiB4ID09PSBmaWVsZC5wcm9wZXJ0eSkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiAoKHRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiAhdGhpcy5pbkxpbmVFZGl0KSB8fCAoIXRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiAodGhpcy5lZGl0SWQgIT09IGl0ZW1bdGhpcy5jb25maWcuZmllbGRJZF0gfHwgdGhpcy5wcm9wZXJ0eSAhPT0gZmllbGQucHJvcGVydHkgfHwgZmllbGQuZWRpdGFibGUgPT09IGZhbHNlKSkpO1xyXG4gIH1cclxuXHJcbiAgc2hvd1ZpZXdNb2RlVHBsVHJlZShmaWVsZCwgZGF0YSkge1xyXG4gICAgaWYgKCF0aGlzLmlzTnVsbChkYXRhLmhpZGRlbkZpZWxkcylcclxuICAgICAgJiYgZGF0YS5oaWRkZW5GaWVsZHMuZmlsdGVyKHggPT4geCA9PT0gZmllbGQucHJvcGVydHkpLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgKCh0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgIXRoaXMuaW5MaW5lRWRpdCkgfHwgKCF0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgKHRoaXMuZWRpdElkICE9PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdIHx8IHRoaXMucHJvcGVydHkgIT09IGZpZWxkLnByb3BlcnR5IHx8IGZpZWxkLmVkaXRhYmxlID09PSBmYWxzZSkpKTtcclxuICB9XHJcblxyXG4gIHNob3dFZGl0VHBsKGl0ZW0sIGZpZWxkKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNOdWxsKGl0ZW0uaGlkZGVuRmllbGRzKVxyXG4gICAgICAmJiBpdGVtLmhpZGRlbkZpZWxkcy5maWx0ZXIoeCA9PiB4ID09PSBmaWVsZC5wcm9wZXJ0eSkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiAoKHRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiB0aGlzLmluTGluZUVkaXQgJiYgKGZpZWxkLmVkaXRhYmxlIHx8IGZpZWxkLmVkaXRhYmxlID09PSB1bmRlZmluZWQpKSB8fCAoIXRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiB0aGlzLmVkaXRJZCA9PT0gaXRlbVt0aGlzLmNvbmZpZy5maWVsZElkXSAmJiB0aGlzLnByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiAoZmllbGQuZWRpdGFibGUgfHwgZmllbGQuZWRpdGFibGUgPT09IHVuZGVmaW5lZCkpKTtcclxuICB9XHJcblxyXG4gIHNob3dFZGl0VHBsVHJlZShkYXRhLCBmaWVsZCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTnVsbChkYXRhLmhpZGRlbkZpZWxkcylcclxuICAgICAgJiYgZGF0YS5oaWRkZW5GaWVsZHMuZmlsdGVyKHggPT4geCA9PT0gZmllbGQucHJvcGVydHkpLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgKCh0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgdGhpcy5pbkxpbmVFZGl0ICYmIChmaWVsZC5lZGl0YWJsZSB8fCBmaWVsZC5lZGl0YWJsZSA9PT0gdW5kZWZpbmVkKSkgfHwgKCF0aGlzLmlzQm9vbGVhbihmaWVsZCkgJiYgdGhpcy5lZGl0SWQgPT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gJiYgdGhpcy5wcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgKGZpZWxkLmVkaXRhYmxlIHx8IGZpZWxkLmVkaXRhYmxlID09PSB1bmRlZmluZWQpKSk7XHJcbiAgfVxyXG5cclxuICBlbWl0T25FZGl0RXZlbnQoKSB7XHJcbiAgICBpZiAodGhpcy5yb3dPbkVkaXRpb24gPj0gMCkge1xyXG4gICAgICB0aGlzLmRhdGFbdGhpcy5yb3dPbkVkaXRpb25dLmNtYWNzRWRpdGVkUHJvcCA9IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW3RoaXMucm93T25FZGl0aW9uXSk7XHJcbiAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm5vZGVPbkVkaXRpb24pIHtcclxuICAgICAgdGhpcy5ub2RlT25FZGl0aW9uLmNtYWNzRWRpdGVkUHJvcCA9IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5ub2RlT25FZGl0aW9uKTtcclxuICAgICAgdGhpcy5ub2RlT25FZGl0aW9uID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENsYXNzTWFwKGZpZWxkOiBGaWVsZCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW2BjbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoYF06IHRoaXMubG9ncyxcclxuICAgICAgW2BjbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRgXTogdGhpcy5sb2dzLFxyXG4gICAgICBbYCR7ZmllbGQubmdDbGFzc31gXTogZmllbGQubmdDbGFzcyAmJiBmaWVsZC5uZ0NsYXNzLmxlbmd0aFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldEN1c3RvbUNsYXNzKGZpZWxkOiBGaWVsZCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW2BjbWFjcy1jb21wYWN0LXRhYmxlLWNlbGwtJHtmaWVsZC5wcm9wZXJ0eX1gXTogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldE1heFdpZHRoKGZpZWxkOiBGaWVsZCwgaXRlbTogYW55LCBpOiBudW1iZXIpIHtcclxuXHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmICFpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5MaW5lRWRpdCA/IGBjYWxjKDEwMCUgLSAxN3B4KWAgOiBgY2FsYygxMDAlIC0gJHt0aGlzLmdldE1heFdpZHRoRmllbGRWaWV3TW9kZShmaWVsZCwgaSl9KWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5MaW5lRWRpdCA/IGBjYWxjKDEwMCUgLSAxN3B4KWAgOiBgY2FsYygxMDAlIC0gJHt0aGlzLmdldE1heFdpZHRoRmllbGRWaWV3TW9kZShmaWVsZCwgaSl9KWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5pbkxpbmVFZGl0ID8gYGNhbGMoMTAwJSAtIDE3cHgpYCA6IGBjYWxjKDEwMCUgLSAke3RoaXMuZ2V0TWF4V2lkdGhGaWVsZFZpZXdNb2RlKGZpZWxkLCBpKX0pYDtcclxuICB9XHJcblxyXG4gIGdldE1heFdpZHRoRmllbGRWaWV3TW9kZShmaWVsZDogRmllbGQsIGk6IG51bWJlcikge1xyXG4gICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCB8fFxyXG4gICAgICBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlIHx8XHJcbiAgICAgIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlRpbWUgfHxcclxuICAgICAgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiBgMThweGA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJzBweCc7XHJcbiAgfVxyXG5cclxuICBnZXRTdGlja3lXaWR0aChwb3NpdGlvbikge1xyXG4gICAgaWYgKCF0aGlzLnNjcm9sbC54KSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgbGV0IHdpZHRoID0gMDtcclxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3NtYXJ0VGFibGUnKSB7XHJcbiAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgICBpZiAocG9zaXRpb24gPT09ICdkcmFnZ2FibGUnKSB7XHJcbiAgICAgIHdpZHRoID0gdGhpcy5zbWFydFRhYmxlID8gNDAgOiAwO1xyXG4gICAgICByZXR1cm4gd2lkdGggKyAncHgnO1xyXG4gICAgfVxyXG4gICAgaWYgKHBvc2l0aW9uID09PSAnY2hlY2tib3hTZWxlY3QnKSB7XHJcbiAgICAgIGlmICh0aGlzLnNtYXJ0VGFibGUpIHtcclxuICAgICAgICB3aWR0aCArPSA0MDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGUpIHtcclxuICAgICAgICB3aWR0aCArPSA0MDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gd2lkdGggKyAncHgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U3RpY2t5V2lkdGhSaWdodChwb3NpdGlvbikge1xyXG4gICAgaWYgKCF0aGlzLnNjcm9sbC54KSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgbGV0IHdpZHRoID0gMDtcclxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3NtYXJ0VGFibGUnKSB7XHJcbiAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5leHRyYSkge1xyXG4gICAgICBpZiAodGhpcy5zbWFydFRhYmxlKSB7XHJcbiAgICAgICAgd2lkdGggKz0gNDA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBvc2l0aW9uID09PSAnZXh0cmEnKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpZHRoICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGFibGVDb21wb25lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRhYmxlQ29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtRGF0ZShkYXRlKSB7XHJcbiAgICBjb25zdCBtID0gbW9tZW50KGRhdGUpO1xyXG4gICAgaWYgKG0uaXNWYWxpZCgpKSB7XHJcbiAgICAgIG0ubG9jYWxlKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUpO1xyXG4gICAgICByZXR1cm4gbS5mb3JtYXQodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/ICdERC5NTS5ZWVlZJyA6ICdNTS9ERC9ZWVlZJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RUcmVlU2luZ2xlKGl0ZW0pIHtcclxuICAgIGlmICghdGhpcy5jaGVja2JveFNlbGVjdCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbi50b2dnbGUoaXRlbVt0aGlzLmZpZWxkSURdKTtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmlzU2VsZWN0ZWQoaXRlbVt0aGlzLmZpZWxkSURdKSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoW2l0ZW1dKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KFtdKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiIsIjxkaXYgaWQ9XCJ7e2dyaWRJRH19XCI+XHJcbiAgPG56LXRhYmxlICNncmlkQ29tcG9uZW50IFtuekRhdGFdPVwiZGF0YVwiIFtuelNob3dUb3RhbF09XCJzaG93VG90YWxcIiBbbnpQYWdlU2l6ZU9wdGlvbnNdPVwicGFnZVNpemVPcHRpb25zXCJcclxuICAgIFtuelZpcnR1YWxJdGVtU2l6ZV09XCJ2aXJ0dWFsSXRlbVNpemVcIiBbbnpMb2FkaW5nRGVsYXldPVwibG9hZGluZ0RlbGF5XCIgW256VmlydHVhbE1heEJ1ZmZlclB4XT1cInZpcnR1YWxNYXhCdWZmZXJQeFwiXHJcbiAgICBbbnpMb2FkaW5nSW5kaWNhdG9yXT1cImxvYWRpbmdJbmRpY2F0b3JcIiBbbnpUb3RhbF09XCJ0b3RhbFwiIFtuelRpdGxlXT1cInRpdGxlXCIgW256Rm9vdGVyXT1cImZvb3RlclwiXHJcbiAgICBbbnpOb1Jlc3VsdF09XCJub1Jlc3VsdFwiIFtueldpZHRoQ29uZmlnXT1cIndpZHRoQ29uZmlnXCIgW256UGFnZUluZGV4XT1cInBhZ2VJbmRleFwiIFtuelBhZ2VTaXplXT1cInBhZ2VTaXplXCJcclxuICAgIFtuelBhZ2luYXRpb25Qb3NpdGlvbl09XCJwYWdpbmF0aW9uUG9zaXRpb25cIiBbbnpTY3JvbGxdPVwic2Nyb2xsXCIgW256RnJvbnRQYWdpbmF0aW9uXT1cImZyb250UGFnaW5hdGlvblwiXHJcbiAgICBbbnpUZW1wbGF0ZU1vZGVdPVwidGVtcGxhdGVNb2RlXCIgW256U2hvd1BhZ2luYXRpb25dPVwic2hvd1BhZ2luYXRpb25cIiBbbnpMb2FkaW5nXT1cImxvYWRpbmdcIlxyXG4gICAgW256U2hvd1NpemVDaGFuZ2VyXT1cInNob3dTaXplQ2hhbmdlclwiIFtuekhpZGVPblNpbmdsZVBhZ2VdPVwiaGlkZU9uU2luZ2xlUGFnZVwiIFtuelNob3dRdWlja0p1bXBlcl09XCJzaG93UXVpY2tKdW1wZXJcIlxyXG4gICAgW256U2ltcGxlXT1cInNpbXBsZVwiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWV4cGFuZGFibGVdPVwiZXhwYW5kYWJsZVwiXHJcbiAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1zY3JvbGxhYmxlLXhdPVwic2Nyb2xsLnghIVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXNjcm9sbGFibGUteV09XCJzY3JvbGwueSEhXCJcclxuICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVtcHR5LXRhYmxlXT1cIiFkYXRhLmxlbmd0aFwiPlxyXG4gICAgPHRoZWFkICpuZ0lmPVwiIWRhdGFUYWJsZVwiPlxyXG4gICAgICA8dHIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaGVhZGVyLWxvZ3NdPVwibG9nc1wiPlxyXG5cclxuICAgICAgICA8dGggKm5nSWY9XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXQgJiYgY29uZmlnICYmIGNvbmZpZy5maWVsZHMgJiYgY29uZmlnLmZpZWxkcy5sZW5ndGhcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGhdPVwibG9nc1wiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9nc1wiXHJcbiAgICAgICAgICBueldpZHRoPVwiNDBweFwiIFtzdHlsZS5taW5XaWR0aF09XCInNDBweCdcIiBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCIgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnc21hcnRUYWJsZScpXCJcclxuICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctYWRkIGNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtYWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1hZGQtaWNvbiBpY29uVUlMYXJnZS1OZXdcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC1hZGQtcm93LWljb24tdmlzaWJsZV09XCIhZ3JpZENvbXBvbmVudC5kYXRhLmxlbmd0aFwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJhZGRSb3coLTEpXCI+PC9pPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICpuZ0lmPVwiZHJhZ2dhYmxlXCIgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnZHJhZ2dhYmxlJylcIiBueldpZHRoPVwiNDBweFwiIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICpuZ0lmPVwiY2hlY2tib3hTZWxlY3RcIiBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdjaGVja2JveFNlbGVjdCcpXCIgbnpXaWR0aD1cIjMwcHhcIiBuekxlZnQ9XCIwcHhcIlxyXG4gICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cIiczMHB4J1wiIFtzdHlsZS5taW5XaWR0aF09XCInMzBweCdcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbWFjcy1jaGVja2JveCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkXCIgW2luZGV0ZXJtaW5hdGVdPVwiaXNJbmRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPW9uQ2hlY2tib3hBbGxDaGFuZ2UoJGV2ZW50KT48L2xhYmVsPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBmaVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaWVsZC5jdXN0b21GaWx0ZXI7IGVsc2UgdGhXaXRoRmlsdGVyc1wiPlxyXG4gICAgICAgICAgICA8dGggW256U2hvd1NvcnRdPVwiZmllbGQuc2hvd1NvcnRcIiBbbnpTaG93RmlsdGVyXT1cImZpZWxkLnNob3dGaWx0ZXJcIlxyXG4gICAgICAgICAgICAgIFtuekZpbHRlcnNdPVwiZmllbGQuZmlsdGVycyEhID8gZmllbGQuZmlsdGVycyA6IFtdXCIgW256RmlsdGVyTXVsdGlwbGVdPVwiZmllbGQuZmlsdGVyTXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgIChuekZpbHRlckNoYW5nZSk9XCJmaWx0ZXIoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSlcIiBhdHRyLmlkPVwie3tncmlkSUR9fS1jb2x1bW4te3tmaX19XCIgbnotcmVzaXphYmxlXHJcbiAgICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiIWZpZWxkLnJlc2l6YWJsZVwiIG56Qm91bmRzPVwid2luZG93XCIgW256TWluV2lkdGhdPVwiZmllbGQubWluV2lkdGggPyBmaWVsZC5taW5XaWR0aCA6IDEwMFwiXHJcbiAgICAgICAgICAgICAgW256TWF4V2lkdGhdPVwiZmllbGQubWF4V2lkdGggPyBmaWVsZC5tYXhXaWR0aCA6IDUwMFwiIG56UHJldmlld1xyXG4gICAgICAgICAgICAgIChuelJlc2l6ZUVuZCk9XCJvblJlc2l6ZSgkZXZlbnQsIGZpZWxkLnByb3BlcnR5LCBmaWVsZClcIiBbbmdDbGFzc109XCJnZXRDbGFzc01hcChmaWVsZClcIlxyXG4gICAgICAgICAgICAgIFsobnpTb3J0T3JkZXIpXT1cImZpZWxkLnNob3dTb3J0ID8gZmllbGQuc29ydE9yZGVyIDogZGVmYXVsdFNvcnRPcmRlclwiXHJcbiAgICAgICAgICAgICAgKG56U29ydE9yZGVyQ2hhbmdlKT1cInNvcnQoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSlcIiBbbnpXaWR0aF09XCJmaWVsZC53aWR0aFwiXHJcbiAgICAgICAgICAgICAgW256TGVmdF09XCJmaWVsZC5sZWZ0ID8gZmllbGQubGVmdCA6IGZhbHNlXCIgW256UmlnaHRdPVwiZmllbGQucmlnaHQgPyBmaWVsZC5yaWdodCA6IGZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaWVsZC50ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0SGVhZGVyTWF4V2lkdGgoZmllbGQpXCIgYXR0ci5pZD1cInt7Z3JpZElEfX0tY29sdW1uLXt7Zml9fS10aXRsZVwiIGNtYWNzLXRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgKHRhcCk9XCJvbkZpZWxkVGFwRWxsaXBzaXMoZ3JpZElEICsgJy1jb2x1bW4tJyArIGZpICsgJy10aXRsZScpXCJcclxuICAgICAgICAgICAgICAgICAgW2NtYWNzVG9vbHRpcFRyaWdnZXJdPVwiZ2V0VG9vbHRpcEVsbGlwc2lzVHJpZ2dlcigpXCJcclxuICAgICAgICAgICAgICAgICAgW2NtYWNzVG9vbHRpcFRpdGxlXT1cImlzRWxsaXBzaXNBY3RpdmUoZ3JpZElEICsgJy1jb2x1bW4tJyArIGZpICsgJy10aXRsZScsIGZpZWxkKSA/IGZpZWxkLmRpc3BsYXkgOiBudWxsXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbC1oZWFkZXJdPVwiIXdyYXBMaW5lc1wiPnt7ZmllbGQuZGlzcGxheX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbaWRdPVwiZ3JpZElEICsgJ2NvbHVtbicgKyBmaVwiICpuZ0lmPVwiZmllbGQudGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZmllbGQudGVtcGxhdGUucmVmXCJcclxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImZpZWxkLnRlbXBsYXRlLmNvbnRleHRcIj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxuei1yZXNpemUtaGFuZGxlIG56RGlyZWN0aW9uPVwicmlnaHRcIiAqbmdJZj1cImZpZWxkLnJlc2l6YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtcmVzaXplLXRyaWdnZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L256LXJlc2l6ZS1oYW5kbGU+XHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjdGhXaXRoRmlsdGVycz5cclxuICAgICAgICAgICAgPHRoIFtuelNob3dTb3J0XT1cImZpZWxkLnNob3dTb3J0XCIgbnpDdXN0b21GaWx0ZXIgbnotcmVzaXphYmxlIG56Qm91bmRzPVwid2luZG93XCIgbnpQcmV2aWV3XHJcbiAgICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiIWZpZWxkLnJlc2l6YWJsZVwiIChuelJlc2l6ZUVuZCk9XCJvblJlc2l6ZSgkZXZlbnQsIGZpZWxkLnByb3BlcnR5LCBmaWVsZClcIlxyXG4gICAgICAgICAgICAgIGF0dHIuaWQ9XCJ7e2dyaWRJRH19LWNvbHVtbi17e2ZpfX1cIiBbbmdDbGFzc109XCJnZXRDbGFzc01hcChmaWVsZClcIlxyXG4gICAgICAgICAgICAgIFsobnpTb3J0T3JkZXIpXT1cImZpZWxkLnNob3dTb3J0ID8gZmllbGQuc29ydE9yZGVyIDogZGVmYXVsdFNvcnRPcmRlclwiXHJcbiAgICAgICAgICAgICAgKG56U29ydE9yZGVyQ2hhbmdlKT1cInNvcnQoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSlcIiBbbnpXaWR0aF09XCJmaWVsZC53aWR0aFwiXHJcbiAgICAgICAgICAgICAgW256TWluV2lkdGhdPVwiZmllbGQubWluV2lkdGggPyBmaWVsZC5taW5XaWR0aCA6IDEwMFwiIFtuek1heFdpZHRoXT1cImZpZWxkLm1heFdpZHRoID8gZmllbGQubWF4V2lkdGggOiA1MDBcIlxyXG4gICAgICAgICAgICAgIFtuekxlZnRdPVwiZmllbGQubGVmdCA/IGZpZWxkLmxlZnQgOiBmYWxzZSBcIiBbbnpSaWdodF09XCJmaWVsZC5yaWdodCA/IGZpZWxkLnJpZ2h0IDogZmFsc2VcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWZpZWxkLnRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5tYXhXaWR0aF09XCJnZXRIZWFkZXJNYXhXaWR0aChmaWVsZClcIiBjbWFjcy10b29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICh0YXApPVwib25GaWVsZFRhcEVsbGlwc2lzKGdyaWRJRCArICctY29sdW1uLScgKyBmaSArICctdGl0bGUnKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUcmlnZ2VyXT1cImdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUaXRsZV09XCJpc0VsbGlwc2lzQWN0aXZlKGdyaWRJRCArICctY29sdW1uLScgKyBmaSArICctdGl0bGUnLCBmaWVsZCkgPyBmaWVsZC5kaXNwbGF5IDogbnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGwtaGVhZGVyXT1cIiF3cmFwTGluZXNcIj57e2ZpZWxkLmRpc3BsYXl9fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgW2lkXT1cImdyaWRJRCArICdjb2x1bW4nICsgZmlcIiAqbmdJZj1cImZpZWxkLnRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZpZWxkLnRlbXBsYXRlLnJlZlwiXHJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJmaWVsZC50ZW1wbGF0ZS5jb250ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8bnotZHJvcGRvd24gbnpUcmlnZ2VyPVwiY2xpY2tcIiBuelBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgW256Q2xpY2tIaWRlXT1cImZhbHNlXCIgbnpUYWJsZUZpbHRlciAjZHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cInNlYXJjaFwiIGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmFudC10YWJsZS1maWx0ZXItb3Blbl09XCJkcm9wZG93bi5uelZpc2libGVcIiBuei1kcm9wZG93bj48L2k+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZpZWxkLmN1c3RvbUZpbHRlci5yZWZcIlxyXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiZmllbGQuY3VzdG9tRmlsdGVyLmNvbnRleHRcIj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvbnotZHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgPG56LXJlc2l6ZS1oYW5kbGUgbnpEaXJlY3Rpb249XCJyaWdodFwiICpuZ0lmPVwiZmllbGQucmVzaXphYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1yZXNpemUtdHJpZ2dlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbnotcmVzaXplLWhhbmRsZT5cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG5cclxuICAgICAgICA8dGggKm5nSWY9XCJzaG93UmF0ZVwiPjwvdGg+XHJcblxyXG4gICAgICAgIDx0aCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgIFtueldpZHRoXT1cImFjdGlvbkNvbHVtbldpZHRoXCIgW3N0eWxlLm1heFdpZHRoXT1cImFjdGlvbkNvbHVtbldpZHRoXCIgW3N0eWxlLm1pbldpZHRoXT1cImFjdGlvbkNvbHVtbldpZHRoXCJcclxuICAgICAgICAgIFtuelJpZ2h0XT1cImdldFN0aWNreVdpZHRoUmlnaHQoJ2V4dHJhJylcIiAqbmdJZj1cImV4dHJhXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1leHRyYVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZXh0cmFcIj57eyBleHRyYSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgPHRoICpuZ0lmPVwic21hcnRUYWJsZSAmJiBpbkxpbmVFZGl0XCIgbnpXaWR0aD1cIjQwcHhcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCIgW3N0eWxlLm1heFdpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdzbWFydFRhYmxlJylcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9nc1wiXHJcbiAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWRlbGV0ZVwiPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICpuZ0lmPVwiY2VudGVyVGFibGVcIj48L3RoPlxyXG5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGhlYWQ+XHJcbiAgICA8dGJvZHkgY2RrRHJvcExpc3QgKm5nSWY9XCIhdmlydHVhbFNjcm9sbFwiIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgY29uZmlnLmZpZWxkcyAmJiBjb25maWcuZmllbGRzLmxlbmd0aFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJleHBhbmRhYmxlOyBlbHNlIGRlZmF1bHRUcGw7XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBkYXRhIG9mIGdyaWRDb21wb25lbnQuZGF0YTsgaW5kZXggYXMgZGlcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBtYXBPZkV4cGFuZGVkRGF0YVtkYXRhW2ZpZWxkSURdXVwiPlxyXG4gICAgICAgICAgICAgIDx0ciAqbmdJZj1cIihpdGVtLnBhcmVudCAmJiBpdGVtLnBhcmVudC5leHBhbmQpIHx8ICFpdGVtLnBhcmVudFwiIGlkPVwidHIte3tpdGVtW2ZpZWxkSURdfX1cIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZXhwYW5kYWJsZS1yb3ddPVwiaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1yb3ctYWN0aXZlXT1cImVkaXRJZCA9PT0gaXRlbVtmaWVsZElEXVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1oZWFkZXItbG9nc109XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGVkLXJvd109XCJjaGVja2JveFNlbGVjdCA/IGdldE5vZGUoaXRlbVtmaWVsZElEXSkuc2VsZWN0ZWQgOiBzZWxlY3Rpb24uaXNTZWxlY3RlZChpdGVtW2ZpZWxkSURdKVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0VHJlZVNpbmdsZShpdGVtKVwiICh0b3VjaHN0YXJ0KT1cInRhcEhhbmRsZXIoJGV2ZW50LCBpdGVtKVwiXHJcbiAgICAgICAgICAgICAgICAoY29udGV4dG1lbnUpPVwib25jb250ZXh0bWVudWV2dCgkZXZlbnQsIGl0ZW0pXCIgKGRibGNsaWNrKT1cImRibENsaWNrUm93KGl0ZW0pXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiY2hlY2tib3hTZWxlY3RcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnY2hlY2tib3hTZWxlY3QnKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCInMzBweCdcIiBbc3R5bGUubWF4V2lkdGhdPVwiJzMwcHgnXCIgW3N0eWxlLndpZHRoXT1cIiczMHB4J1wiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNtYWNzLWNoZWNrYm94IFsobmdNb2RlbCldPVwiZ2V0Tm9kZShpdGVtW2ZpZWxkSURdKS5zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiZ2V0Tm9kZShpdGVtW2ZpZWxkSURdKS5zZWxlY3RlZCA9PT0gLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjaGVja2VkQ2hhbmdlKT1cIm9uQ2hlY2tib3hUcmVlQ2hhbmdlKCRldmVudCwgaXRlbSwgbWFwT2ZFeHBhbmRlZERhdGFbZGF0YVtmaWVsZElEXV0pXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBnZXRGaWVsZHMoKTsgaW5kZXggYXMgaVwiIFtuZ0NsYXNzXT1cImdldEN1c3RvbUNsYXNzKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1lZGl0YWJsZS1jb2x1bW5dPVwiZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LWV4cGFuZGFibGVdPVwiKChlZGl0SWQgPT09IGl0ZW1bY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNOdW1iZXIoZmllbGQpICYmIGZpZWxkLmVkaXRhYmxlKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1leHBhbmRhYmxlLXRkXT1cIiFpXCIgW3N0eWxlLnBhZGRpbmdMZWZ0LnB4XT1cImdldEN1c3RvbVBhZGRpbmcoaXRlbSwgaSlcIlxyXG4gICAgICAgICAgICAgICAgICBbbnpTaG93RXhwYW5kXT1cIiFpc051bGwoaXRlbS5jaGlsZHJlbikgJiYgIWlcIiBbKG56RXhwYW5kKV09XCJpdGVtLmV4cGFuZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtuekxlZnRdPVwiZmllbGQubGVmdCA/IGZpZWxkLmxlZnQgOiBmYWxzZVwiIFtuelJpZ2h0XT1cImZpZWxkLnJpZ2h0ID8gZmllbGQucmlnaHQgOiBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgIChuekV4cGFuZENoYW5nZSk9XCJFeHBhbmRDb2xsYXBzZShtYXBPZkV4cGFuZGVkRGF0YVtkYXRhW2ZpZWxkSURdXSwgaXRlbSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCJmaWVsZC53aWR0aFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cIihpc051bWJlcihmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSkgPyAnYmxvY2snIDogJ2lubGluZS1mbGV4J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbC1jb250YWluZXItbG9nc109XCJleHBhbmRhYmxlICYmIGlzU3RyaW5nKGZpZWxkKSAmJiAhaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cIml0ZW0uY2hpbGRyZW4gJiYgIWkgPyAnY2FsYygxMDAlIC0gMjVweCknIDogJzEwMCUnXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInNob3dWaWV3TW9kZVRwbChmaWVsZCwgaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cInZpZXdNb2RlVHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGl0ZW0sIGk6IGRpLCBpdGVtOiBpdGVtLCBjaTogaX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5kaXNwbGF5XT1cImlzTnVtYmVyKGZpZWxkKSA/ICdibG9jaycgOiAnaW5saW5lLWZsZXgnXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiaXRlbS5jaGlsZHJlbiAmJiAhaSA/ICdjYWxjKDEwMCUgLSAyNXB4KScgOiAnMTAwJSdcIiAqbmdJZj1cInNob3dFZGl0VHBsKGl0ZW0sIGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJlZGl0VHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGl0ZW0sIGk6IGRpfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgISFpdGVtLmNoaWxkcmVuXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXJhdGluZ1wiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiAqbmdJZj1cInNob3dSYXRlICYmIGNvbmZpZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bnotcmF0ZSBbbmdNb2RlbF09XCJkYXRhW2NvbmZpZy5maWVsZFJhdGVdXCIgW256Q291bnRdPSdyYXRlQ291bnQnIFtuekRpc2FibGVkXT1cIiFpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblJhdGVDaGFuZ2UoJGV2ZW50LCBkYXRhKVwiIChjbGljayk9XCJvblJhdGVDbGljaygkZXZlbnQpXCI+PC9uei1yYXRlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdleHRyYScpXCIgKm5nSWY9XCJleHRyYVwiPjwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiY2VudGVyVGFibGVcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy10ZF09XCJsb2dzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWFsaWduLXRkXCI+PC90ZD5cclxuXHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VHBsPlxyXG4gICAgICAgICAgPHRyIGNka0RyYWcgW2Nka0RyYWdEaXNhYmxlZF09XCIhZHJhZ2dhYmxlXCIgKm5nRm9yPVwibGV0IGRhdGEgb2YgZ3JpZENvbXBvbmVudC5kYXRhOyBpbmRleCBhcyBpXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrUm93KCRldmVudCwgZGF0YSlcIiAodG91Y2hzdGFydCk9XCJ0YXBIYW5kbGVyKCRldmVudCwgZGF0YSlcIiBpZD1cInRyLXt7ZGF0YVtjb25maWcuZmllbGRJZF19fVwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXJvdy1hY3RpdmVdPVwiZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXVwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtdGFibGUtc2VsZWN0ZWQtcm93XT1cImlzUm93U2VsZWN0ZWQoZGF0YSlcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0YWJsZS1yb3ddPVwiaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLXJvd109XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXRcIlxyXG4gICAgICAgICAgICAoY29udGV4dG1lbnUpPVwiY29udGV4dE1lbnUoJGV2ZW50LCBjb250ZXh0TWVudVRlbXBsYXRlKVwiIGNsYXNzPVwiY21hY3Mtbm8tc2VsZWN0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICA8Y21hY3MtZHJvcGRvd24tbWVudSAjY29udGV4dE1lbnVUZW1wbGF0ZT1cImNtYWNzRHJvcGRvd25NZW51XCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZXh0bWVudVwiXHJcbiAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBkcm9wZG93bjogZHJvcGRvd24sIGRhdGE6IGRhdGEgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2NtYWNzLWRyb3Bkb3duLW1lbnU+XHJcblxyXG4gICAgICAgICAgICA8dGQgKm5nSWY9XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXRcIiBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCIgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtdGRdPVwibG9nc1wiXHJcbiAgICAgICAgICAgICAgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnc21hcnRUYWJsZScpXCIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1hZGRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWFkZC1pY29uIGljb25VSUxhcmdlLU5ld1wiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkUm93KGksICRldmVudClcIj48L2k+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8dGQgKm5nSWY9XCJkcmFnZ2FibGVcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtZHJhZy1jb2wgY21hY3MtY29tcGFjdC10YWJsZS1mc3QtdGRcIiBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdkcmFnZ2FibGUnKVwiXHJcbiAgICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cIic0MHB4J1wiIFtzdHlsZS5taW5XaWR0aF09XCInNDBweCdcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLU1vdmUgY21hY3MtY29tcGFjdC10YWJsZS1kcmFnLWhhbmRsZXJcIiBjZGtEcmFnSGFuZGxlPjwvaT5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdjaGVja2JveFNlbGVjdCcpXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZnN0LXRkXT1cIiFkcmFnZ2FibGVcIiAqbmdJZj1cImNoZWNrYm94U2VsZWN0ICYmIGNvbmZpZ1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbWFjcy1jaGVja2JveCBbKG5nTW9kZWwpXT1cImNoZWNrYm94Q2FjaGVbZ2V0SW5kZXgoZGF0YVtjb25maWcuZmllbGRJZF0pXS5zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAoY2hlY2tlZENoYW5nZSk9XCJvbkNoZWNrYm94Q2hhbmdlKCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBjaGVja2JveENhY2hlW2dldEluZGV4KGRhdGFbY29uZmlnLmZpZWxkSWRdKV1cIj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBnZXRGaWVsZHMoKTsgaW5kZXggYXMgalwiIFtuZ0NsYXNzXT1cImdldEN1c3RvbUNsYXNzKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWVkaXRhYmxlLWNvbHVtbl09XCJmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZnN0LXRkXT1cIiFkcmFnZ2FibGUgJiYgIWNoZWNrYm94U2VsZWN0ICYmICFqXCJcclxuICAgICAgICAgICAgICBbbnpMZWZ0XT1cImZpZWxkLmxlZnQgPyBmaWVsZC5sZWZ0IDogZmFsc2VcIiBbbnpSaWdodF09XCJmaWVsZC5yaWdodCA/IGZpZWxkLnJpZ2h0IDogZmFsc2VcIlxyXG4gICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCJmaWVsZC53aWR0aFwiPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiA5OCVcIiAqbmdJZj1cInNob3dWaWV3TW9kZVRwbFRyZWUoZmllbGQsIGRhdGEpXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidmlld01vZGVUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogZGF0YSwgaTogaSwgY2k6IGp9XCI+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1heC13aWR0aDogOTglXCIgKm5nSWY9XCJzaG93RWRpdFRwbFRyZWUoZGF0YSwgZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZWRpdFRwbDtjb250ZXh0OiB7ZmllbGQ6IGZpZWxkLCBkYXRhOiBkYXRhLCBpOiBpfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdJZj1cInNob3dSYXRlICYmIGNvbmZpZ1wiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIj5cclxuICAgICAgICAgICAgICA8bnotcmF0ZSBbbmdNb2RlbF09XCJkYXRhW2NvbmZpZy5maWVsZFJhdGVdXCIgW256Q291bnRdPSdyYXRlQ291bnQnXHJcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblJhdGVDaGFuZ2UoJGV2ZW50LCBkYXRhKVwiIChjbGljayk9XCJvblJhdGVDbGljaygkZXZlbnQpXCI+PC9uei1yYXRlPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkICpuZ0lmPVwiZXh0cmFcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgW256UmlnaHRdPVwiZ2V0U3RpY2t5V2lkdGhSaWdodCgnZXh0cmEnKVwiPjwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8dGQgKm5nSWY9XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXRcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgW256UmlnaHRdPVwiZ2V0U3RpY2t5V2lkdGhSaWdodCgnc21hcnRUYWJsZScpXCJcclxuICAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCIgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtdGRdPVwibG9nc1wiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1kZWxldGVcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWRlbGV0ZS1pY29uIGljb25VSVNtYWxsLUNsb3NlXCJcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YS5kZWxldGVFbmFibGVkID09PSB1bmRlZmluZWQgfHwgZGF0YS5kZWxldGVFbmFibGVkXCIgKGNsaWNrKT1cImRlbGV0ZVJvdyhpLCAkZXZlbnQpXCI+PC9pPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiAqbmdJZj1cImNlbnRlclRhYmxlXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy10ZF09XCJsb2dzXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtYWxpZ24tdGRcIj48L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8L3Rib2R5PlxyXG5cclxuICAgIDx0Ym9keSBjZGtEcm9wTGlzdCAqbmdJZj1cInZpcnR1YWxTY3JvbGxcIiAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgbnotdmlydHVhbC1zY3JvbGwgbGV0LWRhdGEgbGV0LWRpPVwiaVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgY29uZmlnLmZpZWxkcyAmJiBjb25maWcuZmllbGRzLmxlbmd0aFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImV4cGFuZGFibGU7IGVsc2UgZGVmYXVsdFRwbFZpcnR1YWxTY3JvbGw7XCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbWFwT2ZFeHBhbmRlZERhdGFbZGF0YVtmaWVsZElEXV1cIj5cclxuICAgICAgICAgICAgICA8dHIgKm5nSWY9XCIoaXRlbS5wYXJlbnQgJiYgaXRlbS5wYXJlbnQuZXhwYW5kKSB8fCAhaXRlbS5wYXJlbnRcIiBpZD1cInRyLXt7aXRlbVtmaWVsZElEXX19XCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXJvdy1hY3RpdmVdPVwiZWRpdElkID09PSBpdGVtW2ZpZWxkSURdXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWV4cGFuZGFibGUtcm93XT1cImluTGluZUVkaXRcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaGVhZGVyLWxvZ3NdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgICAgKHRvdWNoc3RhcnQpPVwidGFwSGFuZGxlcigkZXZlbnQsIGl0ZW0pXCIgKGNvbnRleHRtZW51KT1cIm9uY29udGV4dG1lbnVldnQoJGV2ZW50LCBpdGVtKVwiXHJcbiAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwiZGJsQ2xpY2tSb3coaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cImNoZWNrYm94U2VsZWN0XCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2NoZWNrYm94U2VsZWN0JylcIlxyXG4gICAgICAgICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiJzMwcHgnXCIgW3N0eWxlLm1heFdpZHRoXT1cIiczMHB4J1wiIFtzdHlsZS53aWR0aF09XCInMzBweCdcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgISFpdGVtLmNoaWxkcmVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbWFjcy1jaGVja2JveCBbKG5nTW9kZWwpXT1cImdldE5vZGUoaXRlbVtmaWVsZElEXSkuc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cImdldE5vZGUoaXRlbVtmaWVsZElEXSkuc2VsZWN0ZWQgPT09IC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAoY2hlY2tlZENoYW5nZSk9XCJvbkNoZWNrYm94VHJlZUNoYW5nZSgkZXZlbnQsIGl0ZW0sIG1hcE9mRXhwYW5kZWREYXRhW2RhdGFbZmllbGRJRF1dKVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZ2V0RmllbGRzKCk7IGluZGV4IGFzIGlcIiBbY2xhc3MuY21hY3MtZWRpdGFibGUtY29sdW1uXT1cImZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1leHBhbmRhYmxlXT1cIigoZWRpdElkID09PSBpdGVtW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzTnVtYmVyKGZpZWxkKSAmJiBmaWVsZC5lZGl0YWJsZSlcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgISFpdGVtLmNoaWxkcmVuXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZXhwYW5kYWJsZS10ZF09XCIhaVwiIFtzdHlsZS5wYWRkaW5nTGVmdC5weF09XCJnZXRDdXN0b21QYWRkaW5nKGl0ZW0sIGkpXCJcclxuICAgICAgICAgICAgICAgICAgW256U2hvd0V4cGFuZF09XCIhIWl0ZW0uY2hpbGRyZW4gJiYgIWlcIiBbKG56RXhwYW5kKV09XCJpdGVtLmV4cGFuZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtuekxlZnRdPVwiZmllbGQubGVmdCA/IGZpZWxkLmxlZnQgOiBmYWxzZVwiIFtuelJpZ2h0XT1cImZpZWxkLnJpZ2h0ID8gZmllbGQucmlnaHQgOiBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgIChuekV4cGFuZENoYW5nZSk9XCJFeHBhbmRDb2xsYXBzZShtYXBPZkV4cGFuZGVkRGF0YVtkYXRhW2ZpZWxkSURdXSwgaXRlbSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCJmaWVsZC53aWR0aFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cIihpc051bWJlcihmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSkgPyAnYmxvY2snIDogJ2lubGluZS1mbGV4J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbC1jb250YWluZXItbG9nc109XCJleHBhbmRhYmxlICYmIGlzU3RyaW5nKGZpZWxkKSAmJiAhaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cIml0ZW0uY2hpbGRyZW4gJiYgIWkgPyAnY2FsYygxMDAlIC0gMjVweCknIDogJzEwMCUnXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInNob3dWaWV3TW9kZVRwbChmaWVsZCwgaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cInZpZXdNb2RlVHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGl0ZW0sIGk6IGRpLCBpdGVtOiBpdGVtLCBjaTogaX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5kaXNwbGF5XT1cImlzTnVtYmVyKGZpZWxkKSA/ICdibG9jaycgOiAnaW5saW5lLWZsZXgnXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiaXRlbS5jaGlsZHJlbiAmJiAhaSA/ICdjYWxjKDEwMCUgLSAyNXB4KScgOiAnMTAwJSdcIiAqbmdJZj1cInNob3dFZGl0VHBsKGl0ZW0sIGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJlZGl0VHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGl0ZW0sIGk6IGRpfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1yYXRpbmdcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgKm5nSWY9XCJzaG93UmF0ZSAmJiBjb25maWdcIj5cclxuICAgICAgICAgICAgICAgICAgPG56LXJhdGUgW25nTW9kZWxdPVwiZGF0YVtjb25maWcuZmllbGRSYXRlXVwiIFtuekNvdW50XT0ncmF0ZUNvdW50JyBbbnpEaXNhYmxlZF09XCIhaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25SYXRlQ2hhbmdlKCRldmVudCwgZGF0YSlcIiAoY2xpY2spPVwib25SYXRlQ2xpY2soJGV2ZW50KVwiPjwvbnotcmF0ZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiIFtuelJpZ2h0XT1cImdldFN0aWNreVdpZHRoUmlnaHQoJ2V4dHJhJylcIiAqbmdJZj1cImV4dHJhXCI+PC90ZD5cclxuXHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VHBsVmlydHVhbFNjcm9sbD5cclxuICAgICAgICAgICAgPHRyIGNka0RyYWcgW2Nka0RyYWdEaXNhYmxlZF09XCIhZHJhZ2dhYmxlXCIgaWQ9XCJ0ci17e2RhdGFbY29uZmlnLmZpZWxkSWRdfX1cIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXJvdy1hY3RpdmVdPVwiZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXVwiIChjbGljayk9XCJjbGlja1JvdygkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICAgICAodG91Y2hzdGFydCk9XCJ0YXBIYW5kbGVyKCRldmVudCwgZGF0YSlcIiBbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGVkLXJvd109XCJpc1Jvd1NlbGVjdGVkKGRhdGEpXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0YWJsZS1yb3ddPVwiaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtcm93XT1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgKGNvbnRleHRtZW51KT1cImNvbnRleHRNZW51KCRldmVudCwgY29udGV4dE1lbnVUZW1wbGF0ZSwgZGF0YSlcIiBjbGFzcz1cImNtYWNzLW5vLXNlbGVjdGlvblwiPlxyXG5cclxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2NvbnRleHRNZW51VGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRleHRtZW51XCJcclxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgZHJvcGRvd246IGRyb3Bkb3duLCBkYXRhOiBkYXRhIH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXRcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgW3N0eWxlLm1heFdpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy10ZF09XCJsb2dzXCJcclxuICAgICAgICAgICAgICAgIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ3NtYXJ0VGFibGUnKVwiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctYWRkXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWFkZC1pY29uIGljb25VSUxhcmdlLU5ld1wiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRSb3coZGksICRldmVudClcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiZHJhZ2dhYmxlXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtZHJhZy1jb2wgY21hY3MtY29tcGFjdC10YWJsZS1mc3QtdGRcIiBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdkcmFnZ2FibGUnKVwiXHJcbiAgICAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCIgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uVUlMYXJnZS1Nb3ZlIGNtYWNzLWNvbXBhY3QtdGFibGUtZHJhZy1oYW5kbGVyXCIgY2RrRHJhZ0hhbmRsZT48L2k+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2NoZWNrYm94U2VsZWN0JylcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1mc3QtdGRdPVwiIWRyYWdnYWJsZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgKm5nSWY9XCJjaGVja2JveFNlbGVjdCAmJiBjb25maWdcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbWFjcy1jaGVja2JveCBbKG5nTW9kZWwpXT1cImNoZWNrYm94Q2FjaGVbZ2V0SW5kZXgoZGF0YVtjb25maWcuZmllbGRJZF0pXS5zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgIChjaGVja2VkQ2hhbmdlKT1cIm9uQ2hlY2tib3hDaGFuZ2UoJGV2ZW50LCBkYXRhKVwiXHJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YVtjb25maWcuZmllbGRJZF0gJiYgY2hlY2tib3hDYWNoZVtnZXRJbmRleChkYXRhW2NvbmZpZy5maWVsZElkXSldXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBqXCIgW2NsYXNzLmNtYWNzLWVkaXRhYmxlLWNvbHVtbl09XCJmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1mc3QtdGRdPVwiIWRyYWdnYWJsZSAmJiAhY2hlY2tib3hTZWxlY3QgJiYgIWpcIlxyXG4gICAgICAgICAgICAgICAgW256TGVmdF09XCJmaWVsZC5sZWZ0ID8gZmllbGQubGVmdCA6IGZhbHNlXCIgW256UmlnaHRdPVwiZmllbGQucmlnaHQgPyBmaWVsZC5yaWdodCA6IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCJmaWVsZC53aWR0aFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6IDk4JVwiICpuZ0lmPVwic2hvd1ZpZXdNb2RlVHBsVHJlZShmaWVsZCwgZGF0YSlcIj5cclxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInZpZXdNb2RlVHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGRhdGEsIGk6IGRpLCBjaTogan1cIj5cclxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiA5OCVcIiAqbmdJZj1cInNob3dFZGl0VHBsVHJlZShkYXRhLCBmaWVsZClcIj5cclxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImVkaXRUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogZGF0YSwgaTogZGl9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0lmPVwic2hvd1JhdGUgJiYgY29uZmlnXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiPlxyXG4gICAgICAgICAgICAgICAgPG56LXJhdGUgW25nTW9kZWxdPVwiZGF0YVtjb25maWcuZmllbGRSYXRlXVwiIFtuekNvdW50XT0ncmF0ZUNvdW50J1xyXG4gICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblJhdGVDaGFuZ2UoJGV2ZW50LCBkYXRhKVwiIChjbGljayk9XCJvblJhdGVDbGljaygkZXZlbnQpXCI+PC9uei1yYXRlPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgIDx0ZCAqbmdJZj1cImV4dHJhXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiIFtuelJpZ2h0XT1cImdldFN0aWNreVdpZHRoUmlnaHQoJ2V4dHJhJylcIj48L3RkPlxyXG5cclxuICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXRcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCJcclxuICAgICAgICAgICAgICAgIFtuelJpZ2h0XT1cImdldFN0aWNreVdpZHRoUmlnaHQoJ3NtYXJ0VGFibGUnKVwiIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtdGRdPVwibG9nc1wiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctZGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWRlbGV0ZS1pY29uIGljb25VSVNtYWxsLUNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJkYXRhLmRlbGV0ZUVuYWJsZWQgPT09IHVuZGVmaW5lZCB8fCBkYXRhLmRlbGV0ZUVuYWJsZWRcIiAoY2xpY2spPVwiZGVsZXRlUm93KGRpLCAkZXZlbnQpXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC90Ym9keT5cclxuICA8L256LXRhYmxlPlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZWRpdFRwbCBsZXQtZmllbGQ9XCJmaWVsZFwiIGxldC1kYXRhPVwiZGF0YVwiIGxldC1pPVwiaVwiPlxyXG4gIDwhLS1FZGl0YWJsZSBTdHJpbmcgRWRpdCBNb2RlLS0+XHJcbiAgPGlucHV0ICNmaWVsZFR5cGVJbnB1dCBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXRcIiAqbmdJZj1cImlzU3RyaW5nKGZpZWxkKVwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCIgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQucGxhY2Vob2xkZXIgPyBmaWVsZC5wbGFjZWhvbGRlciA6ICcnXCIgY21hY3MtaW5wdXQgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLnByb3BlcnR5XVwiXHJcbiAgICAoa2V5dXApPVwiZW5kRWRpdE1vZGUoJGV2ZW50LCBpLCBkYXRhKVwiIC8+XHJcblxyXG4gIDwhLS1FZGl0YWJsZSBEYXRlUGlja2VyIEVkaXQgTW9kZS0tPlxyXG4gIDxjbWFjcy1kYXRlLXBpY2tlciAjZmllbGRUeXBlRGF0ZVBpY2tlciBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtZGF0ZS1lZGl0XCIgKm5nSWY9XCJpc0RhdGUoZmllbGQpXCJcclxuICAgIFthbGxvd0NsZWFyXT1cInRydWVcIiAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiIChkYmxjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtbW9kZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIiBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgIChuZ01vZGVsQ2hhbmdlKT1cImVuZEVkaXRNb2RlTmdNb2RlbChpLCBkYXRhKVwiPlxyXG4gIDwvY21hY3MtZGF0ZS1waWNrZXI+XHJcblxyXG4gIDwhLS1FZGl0YWJsZSBEYXRlVGltZVBpY2tlciBFZGl0IE1vZGUtLT5cclxuICA8Y21hY3MtZGF0ZXRpbWUtcGlja2VyICNmaWVsZFR5cGVEYXRlVGltZVBpY2tlciAqbmdJZj1cImlzVGltZShmaWVsZClcIiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtZGF0ZXRpbWUtcGlja2VyXCJcclxuICAgIFt1c2UxMkhvdXJzXT1cInVzZTEySG91cnNcIiBoaWRlU2Vjb25kcyBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LW1vZGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCJcclxuICAgIFtmb3JtYXRdPVwiZmllbGQudGltZUZvcm1hdCA/IGZpZWxkLnRpbWVGb3JtYXQgOiAnaDptbSBhJ1wiIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgIChkYmxjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCIgW2RlZmF1bHRPcGVuVmFsdWVdPVwiZGVmYXVsdFRpbWVWYWx1ZVwiIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwibmdNb2RlbENoYW5nZShpLCBkYXRhKVwiPlxyXG4gIDwvY21hY3MtZGF0ZXRpbWUtcGlja2VyPlxyXG5cclxuICA8IS0tRWRpdGFibGUgU2VsZWN0IEVkaXQgTW9kZS0tPlxyXG4gIDxjbWFjcy1zZWxlY3QgI2ZpZWxkVHlwZVNlbGVjdCBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc2VsZWN0LWNlbGxcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtbW9kZS1zdGF0dXNdPVwiZmllbGQubW9kZSA9PT0gJ3N0YXR1cydcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtbW9kZS1zdGF0dXMtbG93LWVkaXRdPVwiZmllbGQubW9kZSA9PT0gJ3N0YXR1cycgJiYgZ2V0Q2xhc3NTdGF0dXMoZGF0YSwgZmllbGQpID09PSdsb3cnXCJcclxuICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLW1vZGUtc3RhdHVzLW1lZGl1bS1lZGl0XT1cImZpZWxkLm1vZGUgPT09ICdzdGF0dXMnICYmIGdldENsYXNzU3RhdHVzKGRhdGEsIGZpZWxkKSA9PT0nbWVkaXVtJ1wiXHJcbiAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC1tb2RlLXN0YXR1cy1oaWdoLWVkaXRdPVwiZmllbGQubW9kZSA9PT0gJ3N0YXR1cycgJiYgZ2V0Q2xhc3NTdGF0dXMoZGF0YSwgZmllbGQpID09PSdoaWdoJ1wiXHJcbiAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LW1vZGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCIgKm5nSWY9XCJpc1NlbGVjdChmaWVsZClcIlxyXG4gICAgW3BsYWNlSG9sZGVyXT1cImZpZWxkLnBsYWNlaG9sZGVyID8gZmllbGQucGxhY2Vob2xkZXIgOiAnJ1wiIHNob3dTZWFyY2ggW21vZGVdPVwiZmllbGQubW9kZSA/IGZpZWxkLm1vZGUgOiAnZGVmYXVsdCdcIlxyXG4gICAgW3Nob3dDbWFjc1NlYXJjaF09XCJmaWVsZC5zaG93Q21hY3NTZWFyY2hcIiAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiIChkYmxjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIiAobmdNb2RlbENoYW5nZSk9XCJlbmRFZGl0TW9kZU5nTW9kZWwoaSwgZGF0YSwgbnVsbCwgZmllbGQpXCI+XHJcbiAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBzRGF0YSBvZiBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YVwiIGxhYmVsPVwie3tzRGF0YVtmaWVsZC5zZWxlY3QubGFiZWxdfX1cIlxyXG4gICAgICB2YWx1ZT1cInt7c0RhdGFbZmllbGQuc2VsZWN0LnZhbHVlXX19XCIgZGl2aWRlcj1cInt7c0RhdGFbZmllbGQuc2VsZWN0LmRpdmlkZXJdfX1cIiBbZGlzYWJsZWRdPVwic0RhdGEuZGlzYWJsZWRcIj5cclxuICAgIDwvY21hY3Mtb3B0aW9uPlxyXG4gIDwvY21hY3Mtc2VsZWN0PlxyXG5cclxuICA8IS0tRWRpdGFibGUgSW5wdU51bWJlciBFZGl0IE1vZGUtLT5cclxuICA8Y21hY3MtaW5wdXQtbnVtYmVyICNmaWVsZFR5cGVJbnB1dE51bWJlciBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXQtbnVtYmVyLWVkaXRcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICAqbmdJZj1cImlzTnVtYmVyKGZpZWxkKSAmJiAhaXNTZWxlY3QoZmllbGQpICYmIGZpZWxkLnVzZUNvbW1hTWFya2VyXCIgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLnByb3BlcnR5XVwiXHJcbiAgICBbY21hY3NTdGVwXT1cImZpZWxkLmNtYWNzU3RlcFwiIFttaW5dPVwiZmllbGQubWluISFcIiBbbWF4XT1cImZpZWxkLm1heCEhXCIgW2Zvcm1hdHRlcl09XCJmb3JtYXR0ZXJcIiBbcGFyc2VyXT1cInBhcnNlclwiXHJcbiAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiIChkYmxjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCIgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSwgZGF0YSlcIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwibmdNb2RlbENoYW5nZShpLCBkYXRhKVwiPlxyXG4gIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG5cclxuICA8Y21hY3MtaW5wdXQtbnVtYmVyICNmaWVsZFR5cGVJbnB1dE51bWJlciBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXQtbnVtYmVyLWVkaXRcIlxyXG4gICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICAqbmdJZj1cImlzTnVtYmVyKGZpZWxkKSAmJiAhaXNTZWxlY3QoZmllbGQpICYmICFmaWVsZC51c2VDb21tYU1hcmtlclwiIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgW2Zvcm1hdHRlcl09XCIhaXNOdWxsKGZpZWxkLmZvcm1hdHRlcikgPyBmaWVsZC5mb3JtYXR0ZXIgOiBkZWZhdWx0Rm9ybWF0dGVyXCJcclxuICAgIFtwYXJzZXJdPVwiIWlzTnVsbChmaWVsZC5wYXJzZXIpID8gZmllbGQucGFyc2VyIDogZGVmYXVsdFBhcnNlclwiIFtjbWFjc1N0ZXBdPVwiZmllbGQuY21hY3NTdGVwID8gZmllbGQuY21hY3NTdGVwIDogMVwiXHJcbiAgICBbbWluXT1cImZpZWxkLm1pbiEhXCIgW21heF09XCJmaWVsZC5tYXghIVwiIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCIgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSwgZGF0YSlcIiAobmdNb2RlbENoYW5nZSk9XCJuZ01vZGVsQ2hhbmdlKGksIGRhdGEpXCI+XHJcbiAgPC9jbWFjcy1pbnB1dC1udW1iZXI+XHJcblxyXG4gIDwhLS1FZGl0YWJsZSBCb29sZWFuIEVkaXQgTW9kZS0tPlxyXG4gIDxsYWJlbCAjZmllbGRUeXBlQm9vbCBjbWFjcy1jaGVja2JveCBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFiZS1lZGl0YWJsZS1jaGVja2JveFwiXHJcbiAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LW1vZGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCIgKm5nSWY9XCJpc0Jvb2xlYW4oZmllbGQpXCJcclxuICAgIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIiAobmdNb2RlbENoYW5nZSk9XCJlbmRFZGl0TW9kZU5nTW9kZWwoaSwgZGF0YSwgZmllbGQucHJvcGVydHksIGZpZWxkKVwiPlxyXG4gIDwvbGFiZWw+XHJcblxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICN2aWV3TW9kZVRwbCBsZXQtZmllbGQ9XCJmaWVsZFwiIGxldC1kYXRhPVwiZGF0YVwiIGxldC1pPVwiaVwiIGxldC1pdGVtPVwiaXRlbVwiIGxldC1jaT1cImNpXCI+XHJcbiAgPG5nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tRWRpdGFibGUgU3RyaW5nIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc1N0cmluZyhmaWVsZClcIj5cclxuICAgICAgPGRpdiAoY2xpY2spPVwic3RhcnRFZGl0KGRhdGFbY29uZmlnLmZpZWxkSWRdLCBmaWVsZC5wcm9wZXJ0eSwgJGV2ZW50LCBkYXRhKVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIlxyXG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5saW5lLWNlbGxcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtdmFsaWQtcGxhY2Vob2xkZXJdPVwiaXNOdWxsKGRhdGFbZmllbGQucHJvcGVydHldKSB8fCAhZGF0YVtmaWVsZC5wcm9wZXJ0eV0ubGVuZ3RoXCJcclxuICAgICAgICAgIGF0dHIuaWQ9XCJ7e2dyaWRJRH19LXJvdy17e2l9fS17e2ZpZWxkLnByb3BlcnR5fX1cIiBjbWFjcy10b29sdGlwXHJcbiAgICAgICAgICAodGFwKT1cIm9uRGF0YVRhcEVsbGlwc2lzKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUcmlnZ2VyXT1cImdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKVwiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNUb29sdGlwQWN0aXZlKGRhdGEsIGZpZWxkKSA/IGdldFN0cmluZ0ZpZWxkVmFsdWUoZGF0YSwgZmllbGQpIDogbnVsbFwiXHJcbiAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoZmllbGQsIGl0ZW0sIGkpXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCI+XHJcbiAgICAgICAgICB7eyBnZXRTdHJpbmdGaWVsZFZhbHVlKGRhdGEsIGZpZWxkKSB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpICpuZ0lmPVwiZmllbGQuZWRpdGFibGUgfHwgZmllbGQuZWRpdGFibGUgPT09IHVuZGVmaW5lZFwiIGNsYXNzPVwiaWNvblVJU21hbGwtRWRpdFwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LWljb24tdmlld109XCIhaW5MaW5lRWRpdCB8fCAhZmllbGQuZWRpdGFibGVcIj5cclxuICAgICAgICA8L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLUVkaXRhYmxlIERhdGVQaWNrZXIgVmlldyBNb2RlLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGlzRGF0ZShmaWVsZClcIj5cclxuICAgICAgPGRpdiAoY2xpY2spPVwic3RhcnRFZGl0KGRhdGFbY29uZmlnLmZpZWxkSWRdLCBmaWVsZC5wcm9wZXJ0eSwgJGV2ZW50LCBkYXRhKVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIlxyXG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIiBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoZmllbGQsIGl0ZW0sIGkpXCJcclxuICAgICAgICAgIGF0dHIuaWQ9XCJ7e2dyaWRJRH19LXJvdy17e2l9fS17e2ZpZWxkLnByb3BlcnR5fX1cIiBjbWFjcy10b29sdGlwXHJcbiAgICAgICAgICAodGFwKT1cIm9uRGF0YVRhcEVsbGlwc2lzKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUcmlnZ2VyXT1cImdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKVwiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNFbGxpcHNpc0FjdGl2ZShncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5LCBmaWVsZCkgPyAoZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPyB0cmFuc2Zvcm1EYXRlKGRhdGFbZmllbGQucHJvcGVydHldKSA6IGZpZWxkLnBsYWNlaG9sZGVyKSA6IG51bGxcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLXZhbGlkLXBsYWNlaG9sZGVyXT1cImlzTnVsbChkYXRhW2ZpZWxkLnByb3BlcnR5XSlcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlubGluZS1jZWxsIGNtYWNzLWNvbXBhY3QtdGFibGUtZGF0ZVwiPnt7IGRhdGFbZmllbGQucHJvcGVydHldID9cclxuICAgICAgICAgIHRyYW5zZm9ybURhdGUoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pIDogZmllbGQucGxhY2Vob2xkZXIgfX08L2Rpdj5cclxuICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLUNhbGVuZGFyXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtY2FsZW5kYXItaWNvbl09XCJpbkxpbmVFZGl0ICYmIGZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWNhbGVuZGFyLWljb24tdmlld109XCIhaW5MaW5lRWRpdCB8fCAhZmllbGQuZWRpdGFibGVcIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLUVkaXRhYmxlIERhdGVUaW1lUGlja2VyIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc1RpbWUoZmllbGQpXCI+XHJcbiAgICAgIDxkaXYgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhW2NvbmZpZy5maWVsZElkXSwgZmllbGQucHJvcGVydHksICRldmVudCwgZGF0YSlcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSlcIlxyXG4gICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXQtbm8tcGFkZGluZ109XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNOdW1iZXIoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1N0cmluZyhmaWVsZCkpXCJcclxuICAgICAgICBzdHlsZT1cIndpZHRoOiA5OCU7IG1heC13aWR0aDogOTglOyBwYWRkaW5nOiA3cHggMTBweFwiPlxyXG4gICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCIgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKGZpZWxkLCBpdGVtLCBpKVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBhdHRyLmlkPVwie3tncmlkSUR9fS1yb3cte3tpfX0te3tmaWVsZC5wcm9wZXJ0eX19XCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLXZhbGlkLXBsYWNlaG9sZGVyXT1cImlzTnVsbChkYXRhW2ZpZWxkLnByb3BlcnR5XSlcIiBjbWFjcy10b29sdGlwXHJcbiAgICAgICAgICAodGFwKT1cIm9uRGF0YVRhcEVsbGlwc2lzKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUcmlnZ2VyXT1cImdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKVwiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNFbGxpcHNpc0FjdGl2ZShncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5LCBmaWVsZCkgPyAoZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPyAoIGRhdGFbZmllbGQucHJvcGVydHldICB8IGRhdGU6IGZpZWxkLnRpbWVGb3JtYXQgPyBmaWVsZC50aW1lRm9ybWF0IDogJ2g6bW0gYScpIDogZmllbGQucGxhY2Vob2xkZXIpIDogbnVsbFwiXHJcbiAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5saW5lLWNlbGwgY21hY3MtY29tcGFjdC10YWJsZS1kYXRlXCI+e3sgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPyAoXHJcbiAgICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSB8IGRhdGU6IGZpZWxkLnRpbWVGb3JtYXQgPyBmaWVsZC50aW1lRm9ybWF0IDogJ2g6bW0gYScpIDogZmllbGQucGxhY2Vob2xkZXIgfX08L2Rpdj5cclxuICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLVRpbWVcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1jYWxlbmRhci1pY29uXT1cImluTGluZUVkaXQgJiYgZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtY2FsZW5kYXItaWNvbi12aWV3XT1cIiFpbkxpbmVFZGl0IHx8ICFmaWVsZC5lZGl0YWJsZVwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tRWRpdGFibGUgU2VsZWN0IFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc1NlbGVjdChmaWVsZClcIj5cclxuICAgICAgPGRpdiAoY2xpY2spPVwic3RhcnRFZGl0KGRhdGFbY29uZmlnLmZpZWxkSWRdLCBmaWVsZC5wcm9wZXJ0eSwgJGV2ZW50LCBkYXRhKVwiIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIlxyXG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIiBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoZmllbGQsIGl0ZW0sIGkpXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIGF0dHIuaWQ9XCJ7e2dyaWRJRH19LXJvdy17e2l9fS17e2ZpZWxkLnByb3BlcnR5fX1cIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtdmFsaWQtcGxhY2Vob2xkZXJdPVwiaXNOdWxsKGdldExhYmVsKGRhdGEsIGZpZWxkKSkgfHwgIWdldExhYmVsKGRhdGEsIGZpZWxkKS5sZW5ndGhcIlxyXG4gICAgICAgICAgY21hY3MtdG9vbHRpcCAodGFwKT1cIm9uRGF0YVRhcEVsbGlwc2lzKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUcmlnZ2VyXT1cImdldFRvb2x0aXBFbGxpcHNpc1RyaWdnZXIoKVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC1tb2RlLXN0YXR1cy1sb3ddPVwiZmllbGQubW9kZSA9PT0gJ3N0YXR1cycgJiYgZ2V0Q2xhc3NTdGF0dXMoZGF0YSwgZmllbGQpID09PSdsb3cnXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLW1vZGUtc3RhdHVzLW1lZGl1bV09XCJmaWVsZC5tb2RlID09PSAnc3RhdHVzJyAmJiBnZXRDbGFzc1N0YXR1cyhkYXRhLCBmaWVsZCkgPT09J21lZGl1bSdcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtbW9kZS1zdGF0dXMtaGlnaF09XCJmaWVsZC5tb2RlID09PSAnc3RhdHVzJyAmJiBnZXRDbGFzc1N0YXR1cyhkYXRhLCBmaWVsZCkgPT09J2hpZ2gnXCJcclxuICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUaXRsZV09XCJpc0VsbGlwc2lzQWN0aXZlKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHksIGZpZWxkKSA/IChnZXRMYWJlbChkYXRhLCBmaWVsZCkgJiYgZ2V0TGFiZWwoZGF0YSwgZmllbGQpLmxlbmd0aCA/IGdldExhYmVsKGRhdGEsIGZpZWxkKSA6IGZpZWxkLnBsYWNlaG9sZGVyKSA6IG51bGxcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlubGluZS1jZWxsIGNtYWNzLWNvbXBhY3QtdGFibGUtc2VsZWN0XCI+e3sgZ2V0TGFiZWwoZGF0YSwgZmllbGQpICYmIGdldExhYmVsKGRhdGEsXHJcbiAgICAgICAgICBmaWVsZCkubGVuZ3RoID8gZ2V0TGFiZWwoZGF0YSwgZmllbGQpIDogZmllbGQucGxhY2Vob2xkZXIgfX08L2Rpdj5cclxuICAgICAgICA8aSAqbmdJZj1cImZpZWxkLm1vZGUgIT09ICdzdGF0dXMnXCIgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1DaGV2cm9uLURvd25cIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc2VsZWN0LWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1zZWxlY3QtaWNvbi12aWV3XT1cIiFpbkxpbmVFZGl0IHx8ICFmaWVsZC5lZGl0YWJsZVwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tRWRpdGFibGUgSW5wdXROdW1iZXIgVmlldyBNb2RlLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGlzTnVtYmVyKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2IChjbGljayk9XCJzdGFydEVkaXQoZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLnByb3BlcnR5LCAkZXZlbnQsIGRhdGEpXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdF09XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzVGltZShmaWVsZCkpXCJcclxuICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LW5vLXBhZGRpbmddPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzTnVtYmVyKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTdHJpbmcoZmllbGQpKVwiXHJcbiAgICAgICAgc3R5bGU9XCJ3aWR0aDogOTglOyBtYXgtd2lkdGg6IDk4JTsgcGFkZGluZzogN3B4IDEwcHhcIj5cclxuICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiIFtzdHlsZS5tYXhXaWR0aF09XCJnZXRNYXhXaWR0aChmaWVsZCwgaXRlbSwgaSlcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCIgYXR0ci5pZD1cInt7Z3JpZElEfX0tcm93LXt7aX19LXt7ZmllbGQucHJvcGVydHl9fVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC12YWxpZC1wbGFjZWhvbGRlcl09XCJpc051bGwoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pXCIgY21hY3MtdG9vbHRpcFxyXG4gICAgICAgICAgKHRhcCk9XCJvbkRhdGFUYXBFbGxpcHNpcyhncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5KVwiXHJcbiAgICAgICAgICBbY21hY3NUb29sdGlwVHJpZ2dlcl09XCJnZXRUb29sdGlwRWxsaXBzaXNUcmlnZ2VyKClcIlxyXG4gICAgICAgICAgW2NtYWNzVG9vbHRpcFRpdGxlXT1cImlzRWxsaXBzaXNBY3RpdmUoZ3JpZElEICsgJy1yb3ctJyArIGkgKyAnLScgKyBmaWVsZC5wcm9wZXJ0eSwgZmllbGQpID8gKGRhdGFbZmllbGQucHJvcGVydHldICE9PSB1bmRlZmluZWQgPyBmaWVsZC51c2VDb21tYU1hcmtlciA/IGRhdGFbZmllbGQucHJvcGVydHldLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcsJykgOiBkYXRhW2ZpZWxkLnByb3BlcnR5XSA6IGZpZWxkLnBsYWNlaG9sZGVyKSA6IG51bGxcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlubGluZS1jZWxsIGNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXQtbnVtYmVyXCI+e3sgZ2V0SW5wdXROdW1iZXJWYWx1ZShkYXRhLCBmaWVsZClcclxuICAgICAgICAgIH19PC9kaXY+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1Tb2xpZC1VcERvd25cIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXQtbnVtYmVyLWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnB1dC1udW1iZXItaWNvbi12aWV3XT1cIiFpbkxpbmVFZGl0IHx8ICFmaWVsZC5lZGl0YWJsZVwiPlxyXG4gICAgICAgIDwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tSHlwZXJsaW5rIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc0NlbGRUeXBlSHlwZXJsaW5rKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiIWRhdGEucGFyZW50XCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaHlwZXJsaW5rXT1cIiFkYXRhLnBhcmVudFwiXHJcbiAgICAgICAgKGNsaWNrKT1cImNsaWNrSHlwZXJsaW5rKGRhdGEpXCI+IHt7ZGF0YVtmaWVsZC5wcm9wZXJ0eV19fSA8L2Rpdj5cclxuICAgICAgPGRpdiAqbmdJZj1cImRhdGEucGFyZW50XCI+IHt7ZGF0YVtmaWVsZC5wcm9wZXJ0eV19fSA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS1Cb29sZWFuIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc0Jvb2xlYW4oZmllbGQpXCI+XHJcbiAgICAgIDxkaXYgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhW2NvbmZpZy5maWVsZElkXSwgZmllbGQucHJvcGVydHksICRldmVudCwgZGF0YSlcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSlcIlxyXG4gICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXQtbm8tcGFkZGluZ109XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNOdW1iZXIoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1N0cmluZyhmaWVsZCkpXCJcclxuICAgICAgICBzdHlsZT1cIndpZHRoOiA5OCU7IG1heC13aWR0aDogOTglOyBwYWRkaW5nOiA3cHggMTBweFwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT0gZmFsc2UgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT0gJ2ZhbHNlJ1wiXHJcbiAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtYm9vbGVhbi1mYWxzZS1pY29uIGNtYWNzLWNvbXBhY3QtdGFibGUtYm9vbGVhbi1pY29uXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImRhdGFbZmllbGQucHJvcGVydHldID09PSB1bmRlZmluZWQgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09IG51bGxcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWJvb2xlYW4taW5kZXRlcm1pbmF0ZS1pY29uIGNtYWNzLWNvbXBhY3QtdGFibGUtYm9vbGVhbi1pY29uXCJcclxuICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWJvb2xlYW4taW5kZXRlcm1pbmF0ZS1pY29uLWlubmVyXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8aSAqbmdJZj1cImRhdGFbZmllbGQucHJvcGVydHldID09PSB0cnVlIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSAndHJ1ZSdcIlxyXG4gICAgICAgICAgY2xhc3M9XCJpY29uVUlMYXJnZS1TZWxlY3QtQWxsIGNtYWNzLWNvbXBhY3QtdGFibGUtYm9vbGVhbi1pY29uLXRydWVcIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCI+PC9pPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tIFRlbXBsYXRlIFZpZXcgTW9kZSAgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICN0ZW1wbGF0ZVJlZkNlbGQgKm5nSWY9XCJpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQpICYmIGRhdGFbZmllbGQucHJvcGVydHldXCI+XHJcbiAgICAgIDxkaXYgW2lkXT1cImdyaWRJRCArICdjb2x1bW4nICsgY2kgKyAncm93JyArIGlcIiBzdHlsZT1cIndpZHRoOiA5OCU7IG1heC13aWR0aDogOTglOyBwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdF09XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzVGltZShmaWVsZCkpXCJcclxuICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LW5vLXBhZGRpbmddPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzTnVtYmVyKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTdHJpbmcoZmllbGQpKVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkYXRhW2ZpZWxkLnByb3BlcnR5XS5yZWY7IGNvbnRleHQ6IGRhdGFbZmllbGQucHJvcGVydHldLmNvbnRleHRcIj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==