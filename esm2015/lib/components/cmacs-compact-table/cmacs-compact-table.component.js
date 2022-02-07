import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
import * as i3 from "@angular/common";
import * as i4 from "../cmacs-dropdown/context-menu.service";
import * as i5 from "ngx-cookie-service";
import * as i6 from "../core/services/util.service";
import * as i7 from "ng-zorro-antd/table";
import * as i8 from "../cmacs-checkbox/cmacs-checkbox.component";
import * as i9 from "@angular/forms";
import * as i10 from "ng-zorro-antd/resizable";
import * as i11 from "../cmacs-tooltip/tooltip";
import * as i12 from "ng-zorro-antd/core/transition-patch";
import * as i13 from "ng-zorro-antd/icon";
import * as i14 from "ng-zorro-antd/dropdown";
import * as i15 from "ng-zorro-antd/core/outlet";
import * as i16 from "@angular/cdk/drag-drop";
import * as i17 from "ng-zorro-antd/rate";
import * as i18 from "../cmacs-dropdown/dropdown-menu.component";
import * as i19 from "../cmacs-input/cmacs-input.directive";
import * as i20 from "../cmacs-date-picker/date-picker.component";
import * as i21 from "../cmacs-datetime-picker/cmacs-datetime-picker.component";
import * as i22 from "../cmacs-select/cmacs-select.component";
import * as i23 from "../cmacs-select/cmacs-option.component";
import * as i24 from "../cmacs-input-number/cmacs-input-number.component";
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
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    const field_r21 = ctx_r29.$implicit;
    const fi_r22 = ctx_r29.index;
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r26.getHeaderMaxWidth(field_r21));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-header", !ctx_r26.wrapLines);
    i0.ɵɵattributeInterpolate2("id", "", ctx_r26.gridID, "-column-", fi_r22, "-title");
    i0.ɵɵproperty("cmacsTooltipTitle", ctx_r26.isEllipsisActive(ctx_r26.gridID + "-column-" + fi_r22 + "-title", field_r21) ? field_r21.display : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(field_r21.display);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementContainer(1, 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(2);
    const fi_r22 = ctx_r30.index;
    const field_r21 = ctx_r30.$implicit;
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
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 21);
    i0.ɵɵlistener("nzFilterChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzFilterChange_1_listener($event) { i0.ɵɵrestoreView(_r33); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.filter($event, field_r21.property); })("nzResizeEnd", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzResizeEnd_1_listener($event) { i0.ɵɵrestoreView(_r33); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.onResize($event, field_r21.property); })("nzSortChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzSortChange_1_listener($event) { i0.ɵɵrestoreView(_r33); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r36 = i0.ɵɵnextContext(2); return field_r21.showSort ? field_r21.sortOrder : ctx_r36.defaultSortOrder = $event; })("nzSortOrderChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzSortOrderChange_1_listener($event) { i0.ɵɵrestoreView(_r33); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.sort($event, field_r21.property); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_Template, 3, 8, "ng-container", 3);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_div_3_Template, 2, 3, "div", 22);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_nz_resize_handle_4_Template, 2, 0, "nz-resize-handle", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext();
    const fi_r22 = ctx_r40.index;
    const field_r21 = ctx_r40.$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵattributeInterpolate2("id", "", ctx_r23.gridID, "-column-", fi_r22, "");
    i0.ɵɵproperty("nzShowSort", field_r21.showSort)("nzShowFilter", field_r21.showFilter)("nzFilters", field_r21.filters ? field_r21.filters : i0.ɵɵpureFunction0(17, _c8))("nzFilterMultiple", field_r21.filterMultiple)("nzDisabled", !field_r21.resizable)("nzMinWidth", field_r21.minWidth ? field_r21.minWidth : 100)("nzMaxWidth", field_r21.maxWidth ? field_r21.maxWidth : 500)("ngClass", ctx_r23.getClassMap(field_r21))("nzSort", field_r21.showSort ? field_r21.sortOrder : ctx_r23.defaultSortOrder)("nzWidth", field_r21.width)("nzLeft", field_r21.left ? field_r21.left : false)("nzRight", field_r21.right ? field_r21.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r21.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r21.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r21.resizable);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext(2);
    const field_r21 = ctx_r45.$implicit;
    const fi_r22 = ctx_r45.index;
    const ctx_r41 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r41.getHeaderMaxWidth(field_r21));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-header", !ctx_r41.wrapLines);
    i0.ɵɵproperty("cmacsTooltipTitle", ctx_r41.isEllipsisActive(ctx_r41.gridID + "-column-" + fi_r22 + "-title", field_r21) ? field_r21.display : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(field_r21.display);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementContainer(1, 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r46 = i0.ɵɵnextContext(2);
    const fi_r22 = ctx_r46.index;
    const field_r21 = ctx_r46.$implicit;
    const ctx_r42 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", ctx_r42.gridID + "column" + fi_r22);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", field_r21.template.ref)("ngTemplateOutletContext", field_r21.template.context);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_nz_resize_handle_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-resize-handle", 26);
    i0.ɵɵelement(1, "div", 27);
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 28);
    i0.ɵɵlistener("nzResizeEnd", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template_th_nzResizeEnd_0_listener($event) { i0.ɵɵrestoreView(_r49); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r47 = i0.ɵɵnextContext(2); return ctx_r47.onResize($event, field_r21.property); })("nzSortChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template_th_nzSortChange_0_listener($event) { i0.ɵɵrestoreView(_r49); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r50 = i0.ɵɵnextContext(2); return field_r21.showSort ? field_r21.sortOrder : ctx_r50.defaultSortOrder = $event; })("nzSortChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template_th_nzSortChange_0_listener($event) { i0.ɵɵrestoreView(_r49); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r52 = i0.ɵɵnextContext(2); return ctx_r52.sort($event, field_r21.property); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_ng_container_1_Template, 3, 6, "ng-container", 3);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_div_2_Template, 2, 3, "div", 22);
    i0.ɵɵelementStart(3, "nz-dropdown", 29, 30);
    i0.ɵɵelement(5, "i", 31);
    i0.ɵɵelementContainer(6, 25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_nz_resize_handle_7_Template, 2, 0, "nz-resize-handle", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r43 = i0.ɵɵreference(4);
    const ctx_r54 = i0.ɵɵnextContext();
    const fi_r22 = ctx_r54.index;
    const field_r21 = ctx_r54.$implicit;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵattributeInterpolate2("id", "", ctx_r25.gridID, "-column-", fi_r22, "");
    i0.ɵɵproperty("nzShowSort", field_r21.showSort)("nzDisabled", !field_r21.resizable)("ngClass", ctx_r25.getClassMap(field_r21))("nzSort", field_r21.showSort ? field_r21.sortOrder : ctx_r25.defaultSortOrder)("nzWidth", field_r21.width)("nzMinWidth", field_r21.minWidth ? field_r21.minWidth : 100)("nzMaxWidth", field_r21.maxWidth ? field_r21.maxWidth : 500)("nzLeft", field_r21.left ? field_r21.left : false)("nzRight", field_r21.right ? field_r21.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r21.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r21.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzClickHide", false);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("ant-table-filter-open", _r43.nzVisible);
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
    const ctx_r55 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r55.extra);
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
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 45);
    i0.ɵɵelementStart(1, "label", 18);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r73); const item_r64 = i0.ɵɵnextContext(2).$implicit; const ctx_r71 = i0.ɵɵnextContext(5); return ctx_r71.getNode(item_r64[ctx_r71.fieldID]).selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template_label_checkedChange_1_listener($event) { i0.ɵɵrestoreView(_r73); const item_r64 = i0.ɵɵnextContext(2).$implicit; const data_r61 = i0.ɵɵnextContext().$implicit; const ctx_r74 = i0.ɵɵnextContext(4); return ctx_r74.onCheckboxTreeChange($event, item_r64, ctx_r74.mapOfExpandedData[data_r61[ctx_r74.fieldID]]); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r64 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r66 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("min-width", "30px")("max-width", "30px")("width", "30px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r66.logs && !!item_r64.children);
    i0.ɵɵproperty("nzLeft", ctx_r66.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r66.getNode(item_r64[ctx_r66.fieldID]).selected)("indeterminate", ctx_r66.getNode(item_r64[ctx_r66.fieldID]).selected === -1);
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
    const ctx_r83 = i0.ɵɵnextContext();
    const field_r78 = ctx_r83.$implicit;
    const i_r79 = ctx_r83.index;
    const item_r64 = i0.ɵɵnextContext(2).$implicit;
    const di_r62 = i0.ɵɵnextContext().index;
    const ctx_r80 = i0.ɵɵnextContext(4);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵstyleProp("display", ctx_r80.isNumber(field_r78) || ctx_r80.isTime(field_r78) || ctx_r80.isDate(field_r78) || ctx_r80.isSelect(field_r78) ? "block" : "inline-flex")("width", item_r64.children && !i_r79 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-container-logs", ctx_r80.expandable && ctx_r80.isString(field_r78) && !i_r79);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction5(8, _c9, field_r78, item_r64, di_r62, item_r64, i_r79));
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
    const ctx_r87 = i0.ɵɵnextContext();
    const field_r78 = ctx_r87.$implicit;
    const i_r79 = ctx_r87.index;
    const item_r64 = i0.ɵɵnextContext(2).$implicit;
    const di_r62 = i0.ɵɵnextContext().index;
    const ctx_r81 = i0.ɵɵnextContext(4);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵstyleProp("display", ctx_r81.isNumber(field_r78) ? "block" : "inline-flex")("width", item_r64.children && !i_r79 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(6, _c10, field_r78, item_r64, di_r62));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r92 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 46);
    i0.ɵɵlistener("nzExpandChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r92); const item_r64 = i0.ɵɵnextContext(2).$implicit; return item_r64.expand = $event; })("nzExpandChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r92); const item_r64 = i0.ɵɵnextContext(2).$implicit; const data_r61 = i0.ɵɵnextContext().$implicit; const ctx_r93 = i0.ɵɵnextContext(4); return ctx_r93.ExpandCollapse(ctx_r93.mapOfExpandedData[data_r61[ctx_r93.fieldID]], item_r64, $event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template, 2, 14, "div", 47);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template, 2, 10, "div", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r78 = ctx.$implicit;
    const i_r79 = ctx.index;
    const item_r64 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r67 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("padding-left", ctx_r67.getCustomPadding(item_r64, i_r79), "px")("min-width", field_r78.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r78.editable)("cmacs-compact-table-on-edit-expandable", ctx_r67.editId === item_r64[ctx_r67.config.fieldId] && ctx_r67.property === field_r78.property && field_r78.editable && (ctx_r67.isString(field_r78) || ctx_r67.isDate(field_r78) || ctx_r67.isTime(field_r78) || ctx_r67.isSelect(field_r78) || ctx_r67.isNumber(field_r78) && field_r78.editable))("cmacs-compact-table-logs-header-th-font", ctx_r67.logs && !!item_r64.children)("cmacs-compact-table-expandable-td", !i_r79);
    i0.ɵɵproperty("ngClass", ctx_r67.getCustomClass(field_r78))("nzShowExpand", !ctx_r67.isNull(item_r64.children) && !i_r79)("nzExpand", item_r64.expand)("nzLeft", field_r78.left ? field_r78.left : false)("nzRight", field_r78.right ? field_r78.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r67.showViewModeTpl(field_r78, item_r64));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r67.showEditTpl(item_r64, field_r78));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r99 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 50);
    i0.ɵɵelementStart(1, "nz-rate", 51);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r99); const data_r61 = i0.ɵɵnextContext(3).$implicit; const ctx_r97 = i0.ɵɵnextContext(4); return ctx_r97.onRateChange($event, data_r61); })("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r99); const ctx_r100 = i0.ɵɵnextContext(7); return ctx_r100.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r64 = i0.ɵɵnextContext(2).$implicit;
    const data_r61 = i0.ɵɵnextContext().$implicit;
    const ctx_r68 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r68.logs && !!item_r64.children);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r61[ctx_r68.config.fieldRate])("nzCount", ctx_r68.rateCount)("nzDisabled", !ctx_r68.inLineEdit);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 52);
} if (rf & 2) {
    const item_r64 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r69 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r69.logs && !!item_r64.children);
    i0.ɵɵproperty("nzRight", ctx_r69.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 53);
} if (rf & 2) {
    const ctx_r70 = i0.ɵɵnextContext(7);
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r70.logs);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r106 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 39);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_click_0_listener() { i0.ɵɵrestoreView(_r106); const item_r64 = i0.ɵɵnextContext().$implicit; const ctx_r104 = i0.ɵɵnextContext(5); return ctx_r104.selectTreeSingle(item_r64); })("touchstart", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r106); const item_r64 = i0.ɵɵnextContext().$implicit; const ctx_r107 = i0.ɵɵnextContext(5); return ctx_r107.tapHandler($event, item_r64); })("contextmenu", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r106); const item_r64 = i0.ɵɵnextContext().$implicit; const ctx_r109 = i0.ɵɵnextContext(5); return ctx_r109.oncontextmenuevt($event, item_r64); })("dblclick", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_dblclick_0_listener() { i0.ɵɵrestoreView(_r106); const item_r64 = i0.ɵɵnextContext().$implicit; const ctx_r111 = i0.ɵɵnextContext(5); return ctx_r111.dblClickRow(item_r64); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template, 2, 11, "td", 40);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template, 3, 19, "td", 41);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template, 2, 5, "td", 42);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_4_Template, 1, 3, "td", 43);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_5_Template, 1, 2, "td", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r64 = i0.ɵɵnextContext().$implicit;
    const ctx_r65 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-expandable-row", ctx_r65.inLineEdit)("cmacs-compact-table-header-logs", ctx_r65.logs && !!item_r64.children)("ant-table-selected-row", ctx_r65.checkboxSelect ? ctx_r65.getNode(item_r64[ctx_r65.fieldID]).selected : ctx_r65.selection.isSelected(item_r64[ctx_r65.fieldID]));
    i0.ɵɵpropertyInterpolate1("id", "tr-", item_r64[ctx_r65.fieldID], "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r65.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r65.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r65.showRate && ctx_r65.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r65.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r65.centerTable);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template, 6, 12, "tr", 38);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r64 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r64.parent && item_r64.parent.expand || !item_r64.parent);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r61 = ctx.$implicit;
    const ctx_r60 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r60.mapOfExpandedData[data_r61[ctx_r60.fieldID]]);
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
    const _r128 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 64);
    i0.ɵɵelementStart(1, "i", 15);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_4_Template_i_click_1_listener($event) { i0.ɵɵrestoreView(_r128); const i_r116 = i0.ɵɵnextContext().index; const ctx_r126 = i0.ɵɵnextContext(4); return ctx_r126.addRow(i_r116, $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r118 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r118.logs);
    i0.ɵɵproperty("nzLeft", ctx_r118.getStickyWidth("smartTable"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 65);
    i0.ɵɵelement(1, "i", 66);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r119 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵproperty("nzLeft", ctx_r119.getStickyWidth("draggable"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r131 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 68);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r131); const data_r115 = i0.ɵɵnextContext(2).$implicit; const ctx_r130 = i0.ɵɵnextContext(4); return ctx_r130.checkboxCache[ctx_r130.getIndex(data_r115[ctx_r130.config.fieldId])].selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r131); const data_r115 = i0.ɵɵnextContext(2).$implicit; const ctx_r133 = i0.ɵɵnextContext(4); return ctx_r133.onCheckboxChange($event, data_r115); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r115 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r129 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngModel", ctx_r129.checkboxCache[ctx_r129.getIndex(data_r115[ctx_r129.config.fieldId])].selected);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 45);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template, 1, 1, "label", 67);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r115 = i0.ɵɵnextContext().$implicit;
    const ctx_r120 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("cmacs-compact-table-fst-td", !ctx_r120.draggable);
    i0.ɵɵproperty("nzLeft", ctx_r120.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r115[ctx_r120.config.fieldId] && ctx_r120.checkboxCache[ctx_r120.getIndex(data_r115[ctx_r120.config.fieldId])]);
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
    const ctx_r142 = i0.ɵɵnextContext();
    const field_r137 = ctx_r142.$implicit;
    const j_r138 = ctx_r142.index;
    const ctx_r143 = i0.ɵɵnextContext();
    const data_r115 = ctx_r143.$implicit;
    const i_r116 = ctx_r143.index;
    i0.ɵɵnextContext(4);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c11, field_r137, data_r115, i_r116, j_r138));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_ng_container_1_Template, 1, 0, "ng-container", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r137 = i0.ɵɵnextContext().$implicit;
    const ctx_r146 = i0.ɵɵnextContext();
    const data_r115 = ctx_r146.$implicit;
    const i_r116 = ctx_r146.index;
    i0.ɵɵnextContext(4);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c10, field_r137, data_r115, i_r116));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 69);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_Template, 2, 7, "div", 70);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_Template, 2, 6, "div", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r137 = ctx.$implicit;
    const j_r138 = ctx.index;
    const data_r115 = i0.ɵɵnextContext().$implicit;
    const ctx_r121 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("min-width", field_r137.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r137.editable)("cmacs-compact-table-fst-td", !ctx_r121.draggable && !ctx_r121.checkboxSelect && !j_r138);
    i0.ɵɵproperty("ngClass", ctx_r121.getCustomClass(field_r137))("nzLeft", field_r137.left ? field_r137.left : false)("nzRight", field_r137.right ? field_r137.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r121.showViewModeTplTree(field_r137, data_r115));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r121.showEditTplTree(data_r115, field_r137));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r150 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 72);
    i0.ɵɵelementStart(1, "nz-rate", 73);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r150); const data_r115 = i0.ɵɵnextContext().$implicit; const ctx_r148 = i0.ɵɵnextContext(4); return ctx_r148.onRateChange($event, data_r115); })("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r150); const ctx_r151 = i0.ɵɵnextContext(5); return ctx_r151.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r115 = i0.ɵɵnextContext().$implicit;
    const ctx_r122 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r115[ctx_r122.config.fieldRate])("nzCount", ctx_r122.rateCount);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 52);
} if (rf & 2) {
    const ctx_r123 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("nzRight", ctx_r123.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r156 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 76);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_i_1_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r156); const i_r116 = i0.ɵɵnextContext(2).index; const ctx_r154 = i0.ɵɵnextContext(4); return ctx_r154.deleteRow(i_r116, $event); });
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 74);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_i_1_Template, 1, 0, "i", 75);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r115 = i0.ɵɵnextContext().$implicit;
    const ctx_r124 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r124.logs);
    i0.ɵɵproperty("nzRight", ctx_r124.getStickyWidthRight("smartTable"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r115.deleteEnabled === undefined || data_r115.deleteEnabled);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 53);
} if (rf & 2) {
    const ctx_r125 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r125.logs);
} }
const _c12 = function (a0, a1) { return { dropdown: a0, data: a1 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r159 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 55);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r159); const data_r115 = ctx.$implicit; const ctx_r158 = i0.ɵɵnextContext(4); return ctx_r158.clickRow($event, data_r115); })("touchstart", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r159); const data_r115 = ctx.$implicit; const ctx_r160 = i0.ɵɵnextContext(4); return ctx_r160.tapHandler($event, data_r115); })("contextmenu", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r159); const _r117 = i0.ɵɵreference(2); const ctx_r161 = i0.ɵɵnextContext(4); return ctx_r161.contextMenu($event, _r117); });
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
    const data_r115 = ctx.$implicit;
    const ctx_r114 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("ant-table-selected-row", ctx_r114.isRowSelected(data_r115))("cmacs-compact-table-editable-row", ctx_r114.inLineEdit)("cmacs-compact-table-smart-table-row", ctx_r114.smartTable && ctx_r114.inLineEdit);
    i0.ɵɵpropertyInterpolate1("id", "tr-", data_r115[ctx_r114.config.fieldId], "");
    i0.ɵɵproperty("cdkDragDisabled", !ctx_r114.draggable);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r114.contextmenu)("ngTemplateOutletContext", i0.ɵɵpureFunction2(18, _c12, ctx_r114.dropdown, data_r115));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r114.smartTable && ctx_r114.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r114.draggable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r114.checkboxSelect && ctx_r114.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r114.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r114.showRate && ctx_r114.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r114.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r114.smartTable && ctx_r114.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r114.centerTable);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template, 12, 21, "tr", 54);
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
    const _r58 = i0.ɵɵreference(3);
    const ctx_r56 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r56.expandable)("ngIfElse", _r58);
} }
function CmacsCompactTableComponent_tbody_4_Template(rf, ctx) { if (rf & 1) {
    const _r163 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tbody", 36);
    i0.ɵɵlistener("cdkDropListDropped", function CmacsCompactTableComponent_tbody_4_Template_tbody_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r163); const ctx_r162 = i0.ɵɵnextContext(); return ctx_r162.drop($event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_Template, 4, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.config && ctx_r2.config.fields && ctx_r2.config.fields.length);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r180 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 45);
    i0.ɵɵelementStart(1, "label", 18);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r180); const item_r172 = i0.ɵɵnextContext(2).$implicit; const ctx_r178 = i0.ɵɵnextContext(5); return ctx_r178.getNode(item_r172[ctx_r178.fieldID]).selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template_label_checkedChange_1_listener($event) { i0.ɵɵrestoreView(_r180); const item_r172 = i0.ɵɵnextContext(2).$implicit; const data_r165 = i0.ɵɵnextContext(3).$implicit; const ctx_r181 = i0.ɵɵnextContext(2); return ctx_r181.onCheckboxTreeChange($event, item_r172, ctx_r181.mapOfExpandedData[data_r165[ctx_r181.fieldID]]); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r172 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r174 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("min-width", "30px")("max-width", "30px")("width", "30px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r174.logs && !!item_r172.children);
    i0.ɵɵproperty("nzLeft", ctx_r174.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r174.getNode(item_r172[ctx_r174.fieldID]).selected)("indeterminate", ctx_r174.getNode(item_r172[ctx_r174.fieldID]).selected === -1);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template, 1, 0, "ng-container", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r190 = i0.ɵɵnextContext();
    const field_r185 = ctx_r190.$implicit;
    const i_r186 = ctx_r190.index;
    const item_r172 = i0.ɵɵnextContext(2).$implicit;
    const di_r166 = i0.ɵɵnextContext(3).i;
    const ctx_r187 = i0.ɵɵnextContext(2);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵstyleProp("display", ctx_r187.isNumber(field_r185) || ctx_r187.isTime(field_r185) || ctx_r187.isDate(field_r185) || ctx_r187.isSelect(field_r185) ? "block" : "inline-flex")("width", item_r172.children && !i_r186 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-container-logs", ctx_r187.expandable && ctx_r187.isString(field_r185) && !i_r186);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction5(8, _c9, field_r185, item_r172, di_r166, item_r172, i_r186));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template, 1, 0, "ng-container", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r194 = i0.ɵɵnextContext();
    const field_r185 = ctx_r194.$implicit;
    const i_r186 = ctx_r194.index;
    const item_r172 = i0.ɵɵnextContext(2).$implicit;
    const di_r166 = i0.ɵɵnextContext(3).i;
    const ctx_r188 = i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵstyleProp("display", ctx_r188.isNumber(field_r185) ? "block" : "inline-flex")("width", item_r172.children && !i_r186 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(6, _c10, field_r185, item_r172, di_r166));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r199 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 82);
    i0.ɵɵlistener("nzExpandChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r199); const item_r172 = i0.ɵɵnextContext(2).$implicit; return item_r172.expand = $event; })("nzExpandChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r199); const item_r172 = i0.ɵɵnextContext(2).$implicit; const data_r165 = i0.ɵɵnextContext(3).$implicit; const ctx_r200 = i0.ɵɵnextContext(2); return ctx_r200.ExpandCollapse(ctx_r200.mapOfExpandedData[data_r165[ctx_r200.fieldID]], item_r172, $event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template, 2, 14, "div", 47);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template, 2, 10, "div", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r185 = ctx.$implicit;
    const i_r186 = ctx.index;
    const item_r172 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r175 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("padding-left", ctx_r175.getCustomPadding(item_r172, i_r186), "px")("min-width", field_r185.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r185.editable)("cmacs-compact-table-on-edit-expandable", ctx_r175.editId === item_r172[ctx_r175.config.fieldId] && ctx_r175.property === field_r185.property && field_r185.editable && (ctx_r175.isString(field_r185) || ctx_r175.isDate(field_r185) || ctx_r175.isTime(field_r185) || ctx_r175.isSelect(field_r185) || ctx_r175.isNumber(field_r185) && field_r185.editable))("cmacs-compact-table-logs-header-th-font", ctx_r175.logs && !!item_r172.children)("cmacs-compact-table-expandable-td", !i_r186);
    i0.ɵɵproperty("nzShowExpand", !!item_r172.children && !i_r186)("nzExpand", item_r172.expand)("nzLeft", field_r185.left ? field_r185.left : false)("nzRight", field_r185.right ? field_r185.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r175.showViewModeTpl(field_r185, item_r172));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r175.showEditTpl(item_r172, field_r185));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r206 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 50);
    i0.ɵɵelementStart(1, "nz-rate", 51);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r206); const data_r165 = i0.ɵɵnextContext(5).$implicit; const ctx_r204 = i0.ɵɵnextContext(2); return ctx_r204.onRateChange($event, data_r165); })("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r206); const ctx_r207 = i0.ɵɵnextContext(7); return ctx_r207.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r172 = i0.ɵɵnextContext(2).$implicit;
    const data_r165 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r176 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r176.logs && item_r172.children && item_r172.children.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r165[ctx_r176.config.fieldRate])("nzCount", ctx_r176.rateCount)("nzDisabled", !ctx_r176.inLineEdit);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 52);
} if (rf & 2) {
    const item_r172 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r177 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r177.logs && item_r172.children && item_r172.children.length);
    i0.ɵɵproperty("nzRight", ctx_r177.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r213 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 80);
    i0.ɵɵlistener("touchstart", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r213); const item_r172 = i0.ɵɵnextContext().$implicit; const ctx_r211 = i0.ɵɵnextContext(5); return ctx_r211.tapHandler($event, item_r172); })("contextmenu", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r213); const item_r172 = i0.ɵɵnextContext().$implicit; const ctx_r214 = i0.ɵɵnextContext(5); return ctx_r214.oncontextmenuevt($event, item_r172); })("dblclick", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template_tr_dblclick_0_listener() { i0.ɵɵrestoreView(_r213); const item_r172 = i0.ɵɵnextContext().$implicit; const ctx_r216 = i0.ɵɵnextContext(5); return ctx_r216.dblClickRow(item_r172); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template, 2, 11, "td", 40);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template, 3, 18, "td", 81);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template, 2, 5, "td", 42);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_4_Template, 1, 3, "td", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r172 = i0.ɵɵnextContext().$implicit;
    const ctx_r173 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-expandable-row", ctx_r173.inLineEdit)("cmacs-compact-table-header-logs", ctx_r173.logs && !!item_r172.children);
    i0.ɵɵpropertyInterpolate1("id", "tr-", item_r172[ctx_r173.fieldID], "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r173.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r173.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r173.showRate && ctx_r173.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r173.extra);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template, 5, 9, "tr", 79);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r172 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r172.parent && item_r172.parent.expand || !item_r172.parent);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r165 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r168 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r168.mapOfExpandedData[data_r165[ctx_r168.fieldID]]);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 25);
} if (rf & 2) {
    const data_r165 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r221 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r221.contextmenu)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c12, ctx_r221.dropdown, data_r165));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r232 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 64);
    i0.ɵɵelementStart(1, "i", 15);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_Template_i_click_1_listener($event) { i0.ɵɵrestoreView(_r232); const di_r166 = i0.ɵɵnextContext(3).i; const ctx_r230 = i0.ɵɵnextContext(2); return ctx_r230.addRow(di_r166, $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r222 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r222.logs);
    i0.ɵɵproperty("nzLeft", ctx_r222.getStickyWidth("smartTable"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 65);
    i0.ɵɵelement(1, "i", 66);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r223 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵproperty("nzLeft", ctx_r223.getStickyWidth("draggable"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r235 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 68);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r235); const data_r165 = i0.ɵɵnextContext(4).$implicit; const ctx_r234 = i0.ɵɵnextContext(2); return ctx_r234.checkboxCache[ctx_r234.getIndex(data_r165[ctx_r234.config.fieldId])].selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r235); const data_r165 = i0.ɵɵnextContext(4).$implicit; const ctx_r237 = i0.ɵɵnextContext(2); return ctx_r237.onCheckboxChange($event, data_r165); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r165 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r233 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r233.checkboxCache[ctx_r233.getIndex(data_r165[ctx_r233.config.fieldId])].selected);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 45);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template, 1, 1, "label", 67);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r165 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r224 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-fst-td", !ctx_r224.draggable);
    i0.ɵɵproperty("nzLeft", ctx_r224.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r165[ctx_r224.config.fieldId] && ctx_r224.checkboxCache[ctx_r224.getIndex(data_r165[ctx_r224.config.fieldId])]);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_ng_container_1_Template, 1, 0, "ng-container", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r246 = i0.ɵɵnextContext();
    const field_r241 = ctx_r246.$implicit;
    const j_r242 = ctx_r246.index;
    const ctx_r247 = i0.ɵɵnextContext(3);
    const data_r165 = ctx_r247.$implicit;
    const di_r166 = ctx_r247.i;
    i0.ɵɵnextContext(2);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c11, field_r241, data_r165, di_r166, j_r242));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_ng_container_1_Template, 1, 0, "ng-container", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r241 = i0.ɵɵnextContext().$implicit;
    const ctx_r250 = i0.ɵɵnextContext(3);
    const data_r165 = ctx_r250.$implicit;
    const di_r166 = ctx_r250.i;
    i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c10, field_r241, data_r165, di_r166));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 85);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_Template, 2, 7, "div", 70);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_Template, 2, 6, "div", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r241 = ctx.$implicit;
    const j_r242 = ctx.index;
    const data_r165 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r225 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("min-width", field_r241.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r241.editable)("cmacs-compact-table-fst-td", !ctx_r225.draggable && !ctx_r225.checkboxSelect && !j_r242);
    i0.ɵɵproperty("nzLeft", field_r241.left ? field_r241.left : false)("nzRight", field_r241.right ? field_r241.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r225.showViewModeTplTree(field_r241, data_r165));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r225.showEditTplTree(data_r165, field_r241));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r254 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 72);
    i0.ɵɵelementStart(1, "nz-rate", 73);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r254); const data_r165 = i0.ɵɵnextContext(3).$implicit; const ctx_r252 = i0.ɵɵnextContext(2); return ctx_r252.onRateChange($event, data_r165); })("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r254); const ctx_r255 = i0.ɵɵnextContext(5); return ctx_r255.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r165 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r226 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r165[ctx_r226.config.fieldRate])("nzCount", ctx_r226.rateCount);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 52);
} if (rf & 2) {
    const ctx_r227 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("nzRight", ctx_r227.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r260 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 76);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_i_1_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r260); const di_r166 = i0.ɵɵnextContext(4).i; const ctx_r258 = i0.ɵɵnextContext(2); return ctx_r258.deleteRow(di_r166, $event); });
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 74);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_i_1_Template, 1, 0, "i", 75);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r165 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r228 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r228.logs);
    i0.ɵɵproperty("nzRight", ctx_r228.getStickyWidthRight("smartTable"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r165.deleteEnabled === undefined || data_r165.deleteEnabled);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r264 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 55);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r264); const data_r165 = i0.ɵɵnextContext(2).$implicit; const ctx_r262 = i0.ɵɵnextContext(2); return ctx_r262.clickRow($event, data_r165); })("touchstart", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r264); const data_r165 = i0.ɵɵnextContext(2).$implicit; const ctx_r265 = i0.ɵɵnextContext(2); return ctx_r265.tapHandler($event, data_r165); })("contextmenu", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r264); const _r220 = i0.ɵɵreference(2); const data_r165 = i0.ɵɵnextContext(2).$implicit; const ctx_r267 = i0.ɵɵnextContext(2); return ctx_r267.contextMenu($event, _r220, data_r165); });
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
    const data_r165 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r170 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("ant-table-selected-row", ctx_r170.isRowSelected(data_r165))("cmacs-compact-table-editable-row", ctx_r170.inLineEdit)("cmacs-compact-table-smart-table-row", ctx_r170.smartTable && ctx_r170.inLineEdit);
    i0.ɵɵpropertyInterpolate1("id", "tr-", data_r165[ctx_r170.config.fieldId], "");
    i0.ɵɵproperty("cdkDragDisabled", !ctx_r170.draggable);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r170.smartTable && ctx_r170.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r170.draggable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r170.checkboxSelect && ctx_r170.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r170.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r170.showRate && ctx_r170.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r170.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r170.smartTable && ctx_r170.inLineEdit);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 19);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template, 10, 15, "ng-template", null, 78, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r169 = i0.ɵɵreference(3);
    const ctx_r167 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r167.expandable)("ngIfElse", _r169);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_Template, 4, 2, "ng-container", 3);
} if (rf & 2) {
    const ctx_r164 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r164.config && ctx_r164.config.fields && ctx_r164.config.fields.length);
} }
function CmacsCompactTableComponent_tbody_5_Template(rf, ctx) { if (rf & 1) {
    const _r271 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tbody", 36);
    i0.ɵɵlistener("cdkDropListDropped", function CmacsCompactTableComponent_tbody_5_Template_tbody_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r271); const ctx_r270 = i0.ɵɵnextContext(); return ctx_r270.drop($event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_Template, 1, 1, "ng-template", 77);
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_ng_template_6_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r284 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 93, 94);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r284); const ctx_r283 = i0.ɵɵnextContext(2); return ctx_r283.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r284); const ctx_r285 = i0.ɵɵnextContext(2); return ctx_r285.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r284); const ctx_r287 = i0.ɵɵnextContext(); const data_r273 = ctx_r287.data; const field_r272 = ctx_r287.field; return (data_r273[field_r272.property] = $event); })("keyup", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r284); const ctx_r289 = i0.ɵɵnextContext(); const i_r274 = ctx_r289.i; const data_r273 = ctx_r289.data; const ctx_r288 = i0.ɵɵnextContext(); return ctx_r288.endEditMode($event, i_r274, data_r273); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r290 = i0.ɵɵnextContext();
    const data_r273 = ctx_r290.data;
    const field_r272 = ctx_r290.field;
    const ctx_r275 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r275.validate(data_r273, field_r272));
    i0.ɵɵproperty("placeholder", field_r272.placeholder ? field_r272.placeholder : "")("ngModel", data_r273[field_r272.property]);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template(rf, ctx) { if (rf & 1) {
    const _r293 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-date-picker", 95, 96);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_click_0_listener($event) { i0.ɵɵrestoreView(_r293); const ctx_r292 = i0.ɵɵnextContext(2); return ctx_r292.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r293); const ctx_r294 = i0.ɵɵnextContext(2); return ctx_r294.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r293); const ctx_r296 = i0.ɵɵnextContext(); const data_r273 = ctx_r296.data; const field_r272 = ctx_r296.field; return (data_r273[field_r272.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r293); const ctx_r298 = i0.ɵɵnextContext(); const i_r274 = ctx_r298.i; const data_r273 = ctx_r298.data; const ctx_r297 = i0.ɵɵnextContext(); return ctx_r297.endEditModeNgModel(i_r274, data_r273); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r299 = i0.ɵɵnextContext();
    const data_r273 = ctx_r299.data;
    const field_r272 = ctx_r299.field;
    const ctx_r276 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r276.validate(data_r273, field_r272));
    i0.ɵɵproperty("allowClear", true)("ngModel", data_r273[field_r272.property]);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template(rf, ctx) { if (rf & 1) {
    const _r302 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-datetime-picker", 97, 98);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_click_0_listener($event) { i0.ɵɵrestoreView(_r302); const ctx_r301 = i0.ɵɵnextContext(2); return ctx_r301.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r302); const ctx_r303 = i0.ɵɵnextContext(2); return ctx_r303.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r302); const ctx_r305 = i0.ɵɵnextContext(); const data_r273 = ctx_r305.data; const field_r272 = ctx_r305.field; return (data_r273[field_r272.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r302); const ctx_r307 = i0.ɵɵnextContext(); const i_r274 = ctx_r307.i; const data_r273 = ctx_r307.data; const ctx_r306 = i0.ɵɵnextContext(); return ctx_r306.ngModelChange(i_r274, data_r273); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r308 = i0.ɵɵnextContext();
    const data_r273 = ctx_r308.data;
    const field_r272 = ctx_r308.field;
    const ctx_r277 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r277.validate(data_r273, field_r272));
    i0.ɵɵproperty("use12Hours", ctx_r277.use12Hours)("format", field_r272.timeFormat ? field_r272.timeFormat : "h:mm a")("defaultOpenValue", ctx_r277.defaultTimeValue)("ngModel", data_r273[field_r272.property]);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_cmacs_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 102);
} if (rf & 2) {
    const sData_r311 = ctx.$implicit;
    const field_r272 = i0.ɵɵnextContext(2).field;
    i0.ɵɵpropertyInterpolate("label", sData_r311[field_r272.select.label]);
    i0.ɵɵpropertyInterpolate("value", sData_r311[field_r272.select.value]);
    i0.ɵɵpropertyInterpolate("divider", sData_r311[field_r272.select.divider]);
    i0.ɵɵproperty("disabled", sData_r311.disabled);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r314 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-select", 99, 100);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_click_0_listener($event) { i0.ɵɵrestoreView(_r314); const ctx_r313 = i0.ɵɵnextContext(2); return ctx_r313.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r314); const ctx_r315 = i0.ɵɵnextContext(2); return ctx_r315.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r314); const ctx_r317 = i0.ɵɵnextContext(); const data_r273 = ctx_r317.data; const field_r272 = ctx_r317.field; return (data_r273[field_r272.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r314); const ctx_r319 = i0.ɵɵnextContext(); const i_r274 = ctx_r319.i; const data_r273 = ctx_r319.data; const field_r272 = ctx_r319.field; const ctx_r318 = i0.ɵɵnextContext(); return ctx_r318.endEditModeNgModel(i_r274, data_r273, null, field_r272); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_6_cmacs_select_3_cmacs_option_2_Template, 1, 4, "cmacs-option", 101);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r320 = i0.ɵɵnextContext();
    const data_r273 = ctx_r320.data;
    const field_r272 = ctx_r320.field;
    const ctx_r278 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r278.validate(data_r273, field_r272));
    i0.ɵɵproperty("placeHolder", field_r272.placeholder ? field_r272.placeholder : "")("mode", field_r272.mode ? field_r272.mode : "default")("showCmacsSearch", field_r272.showCmacsSearch)("ngModel", data_r273[field_r272.property]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r272.select.selectData);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template(rf, ctx) { if (rf & 1) {
    const _r324 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 103, 104);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r324); const ctx_r323 = i0.ɵɵnextContext(); const data_r273 = ctx_r323.data; const field_r272 = ctx_r323.field; return (data_r273[field_r272.property] = $event); })("click", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r324); const ctx_r325 = i0.ɵɵnextContext(2); return ctx_r325.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r324); const ctx_r326 = i0.ɵɵnextContext(2); return ctx_r326.preventDefault($event); })("keyup", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r324); const ctx_r328 = i0.ɵɵnextContext(); const i_r274 = ctx_r328.i; const data_r273 = ctx_r328.data; const ctx_r327 = i0.ɵɵnextContext(); return ctx_r327.endEditMode($event, i_r274, data_r273); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r324); const ctx_r330 = i0.ɵɵnextContext(); const i_r274 = ctx_r330.i; const data_r273 = ctx_r330.data; const ctx_r329 = i0.ɵɵnextContext(); return ctx_r329.ngModelChange(i_r274, data_r273); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r331 = i0.ɵɵnextContext();
    const data_r273 = ctx_r331.data;
    const field_r272 = ctx_r331.field;
    const ctx_r279 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r279.validate(data_r273, field_r272));
    i0.ɵɵproperty("ngModel", data_r273[field_r272.property])("cmacsStep", field_r272.cmacsStep)("min", field_r272.min)("max", field_r272.max)("formatter", ctx_r279.formatter)("parser", ctx_r279.parser);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template(rf, ctx) { if (rf & 1) {
    const _r335 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 105, 104);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r335); const ctx_r334 = i0.ɵɵnextContext(); const data_r273 = ctx_r334.data; const field_r272 = ctx_r334.field; return (data_r273[field_r272.property] = $event); })("click", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r335); const ctx_r336 = i0.ɵɵnextContext(2); return ctx_r336.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r335); const ctx_r337 = i0.ɵɵnextContext(2); return ctx_r337.preventDefault($event); })("keyup", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r335); const ctx_r339 = i0.ɵɵnextContext(); const i_r274 = ctx_r339.i; const data_r273 = ctx_r339.data; const ctx_r338 = i0.ɵɵnextContext(); return ctx_r338.endEditMode($event, i_r274, data_r273); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r335); const ctx_r341 = i0.ɵɵnextContext(); const i_r274 = ctx_r341.i; const data_r273 = ctx_r341.data; const ctx_r340 = i0.ɵɵnextContext(); return ctx_r340.ngModelChange(i_r274, data_r273); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r342 = i0.ɵɵnextContext();
    const data_r273 = ctx_r342.data;
    const field_r272 = ctx_r342.field;
    const ctx_r280 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r280.validate(data_r273, field_r272));
    i0.ɵɵproperty("ngModel", data_r273[field_r272.property])("formatter", !ctx_r280.isNull(field_r272.formatter) ? field_r272.formatter : ctx_r280.defaultFormatter)("parser", !ctx_r280.isNull(field_r272.parser) ? field_r272.parser : ctx_r280.defaultParser)("cmacsStep", field_r272.cmacsStep ? field_r272.cmacsStep : 1)("min", field_r272.min)("max", field_r272.max);
} }
function CmacsCompactTableComponent_ng_template_6_label_6_Template(rf, ctx) { if (rf & 1) {
    const _r346 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 106, 107);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_label_6_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r346); const ctx_r345 = i0.ɵɵnextContext(); const data_r273 = ctx_r345.data; const field_r272 = ctx_r345.field; return (data_r273[field_r272.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_label_6_Template_label_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r346); const ctx_r348 = i0.ɵɵnextContext(); const i_r274 = ctx_r348.i; const data_r273 = ctx_r348.data; const ctx_r347 = i0.ɵɵnextContext(); return ctx_r347.endEditModeNgModel(i_r274, data_r273); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r349 = i0.ɵɵnextContext();
    const data_r273 = ctx_r349.data;
    const field_r272 = ctx_r349.field;
    const ctx_r281 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r281.validate(data_r273, field_r272));
    i0.ɵɵproperty("ngModel", data_r273[field_r272.property]);
} }
function CmacsCompactTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_ng_template_6_input_0_Template, 2, 4, "input", 86);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template, 2, 4, "cmacs-date-picker", 87);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template, 2, 6, "cmacs-datetime-picker", 88);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template, 3, 7, "cmacs-select", 89);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template, 2, 8, "cmacs-input-number", 90);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template, 2, 8, "cmacs-input-number", 91);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_ng_template_6_label_6_Template, 2, 3, "label", 92);
} if (rf & 2) {
    const field_r272 = ctx.field;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r5.isString(field_r272));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isDate(field_r272));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isTime(field_r272));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isSelect(field_r272));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isNumber(field_r272) && !ctx_r5.isSelect(field_r272) && field_r272.useCommaMarker);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isNumber(field_r272) && !ctx_r5.isSelect(field_r272) && !field_r272.useCommaMarker);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isBoolean(field_r272));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_1_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 111);
} if (rf & 2) {
    const field_r350 = i0.ɵɵnextContext(2).field;
    const ctx_r362 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-icon", ctx_r362.inLineEdit && field_r350.editable)("cmacs-compact-table-edit-icon-view", !ctx_r362.inLineEdit || !field_r350.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r366 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 108);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r366); const ctx_r365 = i0.ɵɵnextContext(); const data_r351 = ctx_r365.data; const field_r350 = ctx_r365.field; const ctx_r364 = i0.ɵɵnextContext(); return ctx_r364.startEdit(data_r351[ctx_r364.config.fieldId], field_r350.property, $event, data_r351); });
    i0.ɵɵelementStart(2, "div", 109);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_1_i_4_Template, 1, 4, "i", 110);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r367 = i0.ɵɵnextContext();
    const data_r351 = ctx_r367.data;
    const field_r350 = ctx_r367.field;
    const item_r353 = ctx_r367.item;
    const i_r352 = ctx_r367.i;
    const ctx_r355 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r355.editId === data_r351[ctx_r355.config.fieldId] && ctx_r355.property === field_r350.property && field_r350.editable && (ctx_r355.isString(field_r350) || ctx_r355.isDate(field_r350) || ctx_r355.isSelect(field_r350) || ctx_r355.isTime(field_r350)))("cmacs-compact-table-on-edit-no-padding", ctx_r355.editId === data_r351[ctx_r355.config.fieldId] && ctx_r355.property === field_r350.property && field_r350.editable && (ctx_r355.isNumber(field_r350) || ctx_r355.isDate(field_r350) || ctx_r355.isTime(field_r350) || ctx_r355.isString(field_r350)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r355.getMaxWidth(field_r350, item_r353, i_r352));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell", !ctx_r355.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r355.isNull(data_r351[field_r350.property]) || !data_r351[field_r350.property].length)("cmacs-compact-table-invalid", !ctx_r355.validate(data_r351, field_r350));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r355.gridID, "-row-", i_r352, "-", field_r350.property, "");
    i0.ɵɵproperty("cmacsTooltipTitle", ctx_r355.isEllipsisActive(ctx_r355.gridID + "-row-" + i_r352 + "-" + field_r350.property, field_r350) ? ctx_r355.getStringFieldValue(data_r351, field_r350) : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r355.getStringFieldValue(data_r351, field_r350), " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r350.editable || field_r350.editable === undefined);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r370 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 108);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r370); const ctx_r369 = i0.ɵɵnextContext(); const data_r351 = ctx_r369.data; const field_r350 = ctx_r369.field; const ctx_r368 = i0.ɵɵnextContext(); return ctx_r368.startEdit(data_r351[ctx_r368.config.fieldId], field_r350.property, $event, data_r351); });
    i0.ɵɵelementStart(2, "div", 112);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 113);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r371 = i0.ɵɵnextContext();
    const data_r351 = ctx_r371.data;
    const field_r350 = ctx_r371.field;
    const item_r353 = ctx_r371.item;
    const i_r352 = ctx_r371.i;
    const ctx_r356 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r356.editId === data_r351[ctx_r356.config.fieldId] && ctx_r356.property === field_r350.property && field_r350.editable && (ctx_r356.isString(field_r350) || ctx_r356.isDate(field_r350) || ctx_r356.isSelect(field_r350) || ctx_r356.isTime(field_r350)))("cmacs-compact-table-on-edit-no-padding", ctx_r356.editId === data_r351[ctx_r356.config.fieldId] && ctx_r356.property === field_r350.property && field_r350.editable && (ctx_r356.isNumber(field_r350) || ctx_r356.isDate(field_r350) || ctx_r356.isTime(field_r350) || ctx_r356.isString(field_r350)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r356.getMaxWidth(field_r350, item_r353, i_r352));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r356.validate(data_r351, field_r350))("cmacs-compact-table-overflow-cell", !ctx_r356.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r356.isNull(data_r351[field_r350.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r356.gridID, "-row-", i_r352, "-", field_r350.property, "");
    i0.ɵɵproperty("cmacsTooltipTitle", ctx_r356.isEllipsisActive(ctx_r356.gridID + "-row-" + i_r352 + "-" + field_r350.property, field_r350) ? data_r351[field_r350.property] ? ctx_r356.transformDate(data_r351[field_r350.property]) : field_r350.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(data_r351[field_r350.property] ? ctx_r356.transformDate(data_r351[field_r350.property]) : field_r350.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-calendar-icon", ctx_r356.inLineEdit && field_r350.editable)("cmacs-compact-table-calendar-icon-view", !ctx_r356.inLineEdit || !field_r350.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r374 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 108);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r374); const ctx_r373 = i0.ɵɵnextContext(); const data_r351 = ctx_r373.data; const field_r350 = ctx_r373.field; const ctx_r372 = i0.ɵɵnextContext(); return ctx_r372.startEdit(data_r351[ctx_r372.config.fieldId], field_r350.property, $event, data_r351); });
    i0.ɵɵelementStart(2, "div", 112);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "i", 114);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r375 = i0.ɵɵnextContext();
    const data_r351 = ctx_r375.data;
    const field_r350 = ctx_r375.field;
    const item_r353 = ctx_r375.item;
    const i_r352 = ctx_r375.i;
    const ctx_r357 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r357.editId === data_r351[ctx_r357.config.fieldId] && ctx_r357.property === field_r350.property && field_r350.editable && (ctx_r357.isString(field_r350) || ctx_r357.isDate(field_r350) || ctx_r357.isSelect(field_r350) || ctx_r357.isTime(field_r350)))("cmacs-compact-table-on-edit-no-padding", ctx_r357.editId === data_r351[ctx_r357.config.fieldId] && ctx_r357.property === field_r350.property && field_r350.editable && (ctx_r357.isNumber(field_r350) || ctx_r357.isDate(field_r350) || ctx_r357.isTime(field_r350) || ctx_r357.isString(field_r350)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r357.getMaxWidth(field_r350, item_r353, i_r352));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r357.validate(data_r351, field_r350))("cmacs-compact-table-overflow-cell", !ctx_r357.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r357.isNull(data_r351[field_r350.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r357.gridID, "-row-", i_r352, "-", field_r350.property, "");
    i0.ɵɵproperty("cmacsTooltipTitle", ctx_r357.isEllipsisActive(ctx_r357.gridID + "-row-" + i_r352 + "-" + field_r350.property, field_r350) ? data_r351[field_r350.property] ? i0.ɵɵpipeBind2(3, 21, data_r351[field_r350.property], field_r350.timeFormat ? field_r350.timeFormat : "h:mm a") : field_r350.placeholder : null);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r351[field_r350.property] ? i0.ɵɵpipeBind2(5, 24, data_r351[field_r350.property], field_r350.timeFormat ? field_r350.timeFormat : "h:mm a") : field_r350.placeholder);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("cmacs-compact-table-calendar-icon", ctx_r357.inLineEdit && field_r350.editable)("cmacs-compact-table-calendar-icon-view", !ctx_r357.inLineEdit || !field_r350.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r378 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 108);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r378); const ctx_r377 = i0.ɵɵnextContext(); const data_r351 = ctx_r377.data; const field_r350 = ctx_r377.field; const ctx_r376 = i0.ɵɵnextContext(); return ctx_r376.startEdit(data_r351[ctx_r376.config.fieldId], field_r350.property, $event, data_r351); });
    i0.ɵɵelementStart(2, "div", 115);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 116);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r379 = i0.ɵɵnextContext();
    const data_r351 = ctx_r379.data;
    const field_r350 = ctx_r379.field;
    const item_r353 = ctx_r379.item;
    const i_r352 = ctx_r379.i;
    const ctx_r358 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r358.editId === data_r351[ctx_r358.config.fieldId] && ctx_r358.property === field_r350.property && field_r350.editable && (ctx_r358.isString(field_r350) || ctx_r358.isDate(field_r350) || ctx_r358.isSelect(field_r350) || ctx_r358.isTime(field_r350)))("cmacs-compact-table-on-edit-no-padding", ctx_r358.editId === data_r351[ctx_r358.config.fieldId] && ctx_r358.property === field_r350.property && field_r350.editable && (ctx_r358.isNumber(field_r350) || ctx_r358.isDate(field_r350) || ctx_r358.isTime(field_r350) || ctx_r358.isString(field_r350)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r358.getMaxWidth(field_r350, item_r353, i_r352));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r358.validate(data_r351, field_r350))("cmacs-compact-table-overflow-cell", !ctx_r358.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r358.isNull(ctx_r358.getLabel(data_r351, field_r350)) || !ctx_r358.getLabel(data_r351, field_r350).length);
    i0.ɵɵattributeInterpolate3("id", "", ctx_r358.gridID, "-row-", i_r352, "-", field_r350.property, "");
    i0.ɵɵproperty("cmacsTooltipTitle", ctx_r358.isEllipsisActive(ctx_r358.gridID + "-row-" + i_r352 + "-" + field_r350.property, field_r350) ? ctx_r358.getLabel(data_r351, field_r350) && ctx_r358.getLabel(data_r351, field_r350).length ? ctx_r358.getLabel(data_r351, field_r350) : field_r350.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r358.getLabel(data_r351, field_r350) && ctx_r358.getLabel(data_r351, field_r350).length ? ctx_r358.getLabel(data_r351, field_r350) : field_r350.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-select-icon", ctx_r358.inLineEdit && field_r350.editable)("cmacs-compact-table-select-icon-view", !ctx_r358.inLineEdit || !field_r350.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r382 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 108);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r382); const ctx_r381 = i0.ɵɵnextContext(); const data_r351 = ctx_r381.data; const field_r350 = ctx_r381.field; const ctx_r380 = i0.ɵɵnextContext(); return ctx_r380.startEdit(data_r351[ctx_r380.config.fieldId], field_r350.property, $event, data_r351); });
    i0.ɵɵelementStart(2, "div", 117);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 118);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r383 = i0.ɵɵnextContext();
    const data_r351 = ctx_r383.data;
    const field_r350 = ctx_r383.field;
    const item_r353 = ctx_r383.item;
    const i_r352 = ctx_r383.i;
    const ctx_r359 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r359.editId === data_r351[ctx_r359.config.fieldId] && ctx_r359.property === field_r350.property && field_r350.editable && (ctx_r359.isString(field_r350) || ctx_r359.isDate(field_r350) || ctx_r359.isSelect(field_r350) || ctx_r359.isTime(field_r350)))("cmacs-compact-table-on-edit-no-padding", ctx_r359.editId === data_r351[ctx_r359.config.fieldId] && ctx_r359.property === field_r350.property && field_r350.editable && (ctx_r359.isNumber(field_r350) || ctx_r359.isDate(field_r350) || ctx_r359.isTime(field_r350) || ctx_r359.isString(field_r350)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r359.getMaxWidth(field_r350, item_r353, i_r352));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r359.validate(data_r351, field_r350))("cmacs-compact-table-overflow-cell", !ctx_r359.wrapLines)("cmacs-compact-table-field-valid-placeholder", ctx_r359.isNull(data_r351[field_r350.property]));
    i0.ɵɵattributeInterpolate3("id", "", ctx_r359.gridID, "-row-", i_r352, "-", field_r350.property, "");
    i0.ɵɵproperty("cmacsTooltipTitle", ctx_r359.isEllipsisActive(ctx_r359.gridID + "-row-" + i_r352 + "-" + field_r350.property, field_r350) ? data_r351[field_r350.property] !== undefined ? field_r350.useCommaMarker ? data_r351[field_r350.property].toString().replace(".", ",") : data_r351[field_r350.property] : field_r350.placeholder : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r359.getInputNumberValue(data_r351, field_r350));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-input-number-icon", ctx_r359.inLineEdit && field_r350.editable)("cmacs-compact-table-input-number-icon-view", !ctx_r359.inLineEdit || !field_r350.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 122);
} if (rf & 2) {
    const ctx_r387 = i0.ɵɵnextContext(2);
    const data_r351 = ctx_r387.data;
    const field_r350 = ctx_r387.field;
    const ctx_r384 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r384.validate(data_r351, field_r350))("cmacs-compact-table-boolean-icon", ctx_r384.inLineEdit && field_r350.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 123);
    i0.ɵɵelement(1, "span", 124);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r388 = i0.ɵɵnextContext(2);
    const data_r351 = ctx_r388.data;
    const field_r350 = ctx_r388.field;
    const ctx_r385 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r385.validate(data_r351, field_r350))("cmacs-compact-table-boolean-icon", ctx_r385.inLineEdit && field_r350.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 125);
} if (rf & 2) {
    const ctx_r389 = i0.ɵɵnextContext(2);
    const data_r351 = ctx_r389.data;
    const field_r350 = ctx_r389.field;
    const ctx_r386 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r386.validate(data_r351, field_r350))("cmacs-compact-table-boolean-icon", ctx_r386.inLineEdit && field_r350.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r392 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 108);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_6_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r392); const ctx_r391 = i0.ɵɵnextContext(); const data_r351 = ctx_r391.data; const field_r350 = ctx_r391.field; const ctx_r390 = i0.ɵɵnextContext(); return ctx_r390.startEdit(data_r351[ctx_r390.config.fieldId], field_r350.property, $event, data_r351); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_8_ng_container_6_span_2_Template, 1, 4, "span", 119);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_8_ng_container_6_span_3_Template, 2, 4, "span", 120);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_6_i_4_Template, 1, 4, "i", 121);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r393 = i0.ɵɵnextContext();
    const data_r351 = ctx_r393.data;
    const field_r350 = ctx_r393.field;
    const ctx_r360 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r360.editId === data_r351[ctx_r360.config.fieldId] && ctx_r360.property === field_r350.property && field_r350.editable && (ctx_r360.isString(field_r350) || ctx_r360.isDate(field_r350) || ctx_r360.isSelect(field_r350) || ctx_r360.isTime(field_r350)))("cmacs-compact-table-on-edit-no-padding", ctx_r360.editId === data_r351[ctx_r360.config.fieldId] && ctx_r360.property === field_r350.property && field_r350.editable && (ctx_r360.isNumber(field_r350) || ctx_r360.isDate(field_r350) || ctx_r360.isTime(field_r350) || ctx_r360.isString(field_r350)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r351[field_r350.property] == false || data_r351[field_r350.property] == "false");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r351[field_r350.property] === undefined || data_r351[field_r350.property] === null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r351[field_r350.property] === true || data_r351[field_r350.property] === "true");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, null, 126);
    i0.ɵɵelementStart(2, "div", 127);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_8_ng_container_7_ng_container_3_Template, 1, 0, "ng-container", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r396 = i0.ɵɵnextContext();
    const data_r351 = ctx_r396.data;
    const field_r350 = ctx_r396.field;
    const ci_r354 = ctx_r396.ci;
    const i_r352 = ctx_r396.i;
    const ctx_r361 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r361.editId === data_r351[ctx_r361.config.fieldId] && ctx_r361.property === field_r350.property && field_r350.editable && (ctx_r361.isString(field_r350) || ctx_r361.isDate(field_r350) || ctx_r361.isSelect(field_r350) || ctx_r361.isTime(field_r350)))("cmacs-compact-table-on-edit-no-padding", ctx_r361.editId === data_r351[ctx_r361.config.fieldId] && ctx_r361.property === field_r350.property && field_r350.editable && (ctx_r361.isNumber(field_r350) || ctx_r361.isDate(field_r350) || ctx_r361.isTime(field_r350) || ctx_r361.isString(field_r350)));
    i0.ɵɵproperty("id", ctx_r361.gridID + "column" + ci_r354 + "row" + i_r352);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", data_r351[field_r350.property].ref)("ngTemplateOutletContext", data_r351[field_r350.property].context);
} }
function CmacsCompactTableComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_ng_template_8_ng_container_1_Template, 5, 18, "ng-container", 3);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_8_ng_container_2_Template, 5, 21, "ng-container", 3);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_8_ng_container_3_Template, 7, 27, "ng-container", 3);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_4_Template, 5, 21, "ng-container", 3);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_ng_template_8_ng_container_5_Template, 5, 21, "ng-container", 3);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_ng_template_8_ng_container_6_Template, 5, 7, "ng-container", 3);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_ng_template_8_ng_container_7_Template, 4, 7, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r350 = ctx.field;
    const data_r351 = ctx.data;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isString(field_r350));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isDate(field_r350));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isTime(field_r350));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isSelect(field_r350));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isNumber(field_r350));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isBoolean(field_r350));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.isCeldTypeTemplateRef(field_r350) && data_r351[field_r350.property]);
} }
const moment = moment_;
export class CmacsCompactTableComponent {
    constructor(cdr, i18n, excelService, datePipe, nzDropdownService, cookies, utilService) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.excelService = excelService;
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
    onResize({ width }, col) {
        let found = false;
        if (this.config && this.config.fields) {
            for (let i = 0; i < this.config.fields.length; i++) {
                const field = this.config.fields[i];
                if (field.property === col) {
                    found = true;
                    field.width = `${width}px`;
                    const elWidth = field.width ? Number(field.width.replace(/[^\d.-]/g, '')) : 0;
                    this.scroll.x = this.scroll.x ? `${Number(this.scroll.x.replace(/[^\d.-]/g, '')) - elWidth + width}px` : null;
                    continue;
                }
            }
        }
        this.onresize.emit({ col: col, config: this.config });
        this.configChange.emit(this.config);
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
        this.sortChange.emit({ sortName: fieldProperty, sortValue: $event });
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
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Boolean;
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
        let allowIndexPageCookie = false;
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
        return allowIndexPageCookie;
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
CmacsCompactTableComponent.ɵfac = function CmacsCompactTableComponent_Factory(t) { return new (t || CmacsCompactTableComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i2.ExcelService), i0.ɵɵdirectiveInject(i3.DatePipe), i0.ɵɵdirectiveInject(i4.CmacsContextMenuService), i0.ɵɵdirectiveInject(i5.CookieService), i0.ɵɵdirectiveInject(i6.UtilService)); };
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
    } }, inputs: { size: "size", showTotal: "showTotal", pageSizeOptions: "pageSizeOptions", virtualScroll: "virtualScroll", exclusiveSelect: "exclusiveSelect", logs: "logs", expandable: "expandable", smartTable: "smartTable", draggable: "draggable", virtualItemSize: "virtualItemSize", expandAll: "expandAll", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", total: "total", title: "title", footer: "footer", noResult: "noResult", widthConfig: "widthConfig", pageIndex: "pageIndex", pageSize: "pageSize", actionColumnWidth: "actionColumnWidth", wrapLines: "wrapLines", data: "data", config: "config", use12Hours: "use12Hours", fieldId: "fieldId", gridID: "gridID", paginationPosition: "paginationPosition", scroll: "scroll", frontPagination: "frontPagination", templateMode: "templateMode", bordered: "bordered", centerTable: "centerTable", showPagination: "showPagination", loading: "loading", showSizeChanger: "showSizeChanger", hideOnSinglePage: "hideOnSinglePage", showQuickJumper: "showQuickJumper", simple: "simple", checkboxSelect: "checkboxSelect", inLineEdit: "inLineEdit", dataTable: "dataTable", showRate: "showRate", exportEvent: "exportEvent", rateCount: "rateCount", multiSelect: "multiSelect", extra: "extra", contextmenu: "contextmenu", indentSize: "indentSize", virtualMaxBufferPx: "virtualMaxBufferPx" }, outputs: { configChange: "configChange", buttonClick: "buttonClick", rateChange: "rateChange", selectionChange: "selectionChange", ondlclickRow: "ondlclickRow", onclickRow: "onclickRow", onedit: "onedit", onRowExpandCollapse: "onRowExpandCollapse", ondrop: "ondrop", sortChange: "sortChange", filterChange: "filterChange", onrowdeleted: "onrowdeleted", onrowadded: "onrowadded", onresize: "onresize", oncontextmenu: "oncontextmenu" }, exportAs: ["cmacsCompactTable"], features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 36, consts: [[3, "id"], [1, "cmacs-compact-table", 3, "nzData", "nzShowTotal", "nzPageSizeOptions", "nzVirtualItemSize", "nzLoadingDelay", "nzVirtualMaxBufferPx", "nzLoadingIndicator", "nzTotal", "nzTitle", "nzFooter", "nzNoResult", "nzWidthConfig", "nzPageIndex", "nzPageSize", "nzPaginationPosition", "nzScroll", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], ["gridComponent", ""], [4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListDropped", 4, "ngIf"], ["editTpl", ""], ["viewModeTpl", ""], ["nzWidth", "40px", "class", "cmacs-compact-table-smart-table-hot-spot-row-add cmacs-compact-table-smart-action-header", 3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "minWidth", "maxWidth", "nzLeft", 4, "ngIf"], ["nzWidth", "40px", 3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], ["nzWidth", "30px", "nzLeft", "0px", 3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzWidth", "maxWidth", "minWidth", "nzRight", 4, "ngIf"], ["nzWidth", "40px", "class", "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "minWidth", "maxWidth", "nzRight", "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], [3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], ["nzWidth", "40px", 1, "cmacs-compact-table-smart-table-hot-spot-row-add", "cmacs-compact-table-smart-action-header", 3, "nzLeft"], [1, "cmacs-compact-table-smart-table-hot-spot-row-add-icon", "iconUILarge-New", 3, "click"], ["nzWidth", "40px", 3, "nzLeft"], ["nzWidth", "30px", "nzLeft", "0px", 3, "nzLeft"], ["cmacs-checkbox", "", 3, "ngModel", "indeterminate", "ngModelChange", "checkedChange"], [4, "ngIf", "ngIfElse"], ["thWithFilters", ""], ["nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzShowSort", "nzShowFilter", "nzFilters", "nzFilterMultiple", "nzDisabled", "nzMinWidth", "nzMaxWidth", "ngClass", "nzSort", "nzWidth", "nzLeft", "nzRight", "nzFilterChange", "nzResizeEnd", "nzSortChange", "nzSortOrderChange"], [3, "id", 4, "ngIf"], ["nzDirection", "right", 4, "ngIf"], ["cmacs-tooltip", "", 3, "cmacsTooltipTitle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nzDirection", "right"], [1, "cmacs-compact-table-resize-trigger"], ["nzCustomFilter", "", "nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzShowSort", "nzDisabled", "ngClass", "nzSort", "nzWidth", "nzMinWidth", "nzMaxWidth", "nzLeft", "nzRight", "nzResizeEnd", "nzSortChange"], ["nzTrigger", "click", "nzPlacement", "bottomRight", "nzTableFilter", "", 3, "nzClickHide"], ["dropdown", ""], ["nz-icon", "", "nzType", "search", "nz-dropdown", "", 1, "ant-table-filter-icon"], [3, "nzWidth", "nzRight"], [1, "cmacs-compact-table-extra"], [4, "nzStringTemplateOutlet"], ["nzWidth", "40px", 1, "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "nzRight"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["defaultTpl", ""], [3, "id", "cmacs-compact-table-expandable-row", "cmacs-compact-table-header-logs", "ant-table-selected-row", "click", "touchstart", "contextmenu", "dblclick", 4, "ngIf"], [3, "id", "click", "touchstart", "contextmenu", "dblclick"], ["style", "padding: 7px 10px", 3, "nzLeft", "minWidth", "maxWidth", "width", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], [3, "ngClass", "cmacs-editable-column", "cmacs-compact-table-on-edit-expandable", "cmacs-compact-table-logs-header-th-font", "cmacs-compact-table-expandable-td", "paddingLeft", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "minWidth", "nzExpandChange", 4, "ngFor", "ngForOf"], ["class", "cmacs-compact-table-rating", "style", "padding: 7px 10px", 3, "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "cmacs-compact-table-logs-header-th-font", "nzRight", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-align-td", 3, "cmacs-compact-table-logs-td", 4, "ngIf"], [2, "padding", "7px 10px", 3, "nzLeft"], [3, "ngClass", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "nzExpandChange"], [3, "display", "cmacs-compact-table-overflow-cell-container-logs", "width", 4, "ngIf"], [3, "display", "width", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cmacs-compact-table-rating", 2, "padding", "7px 10px"], [3, "ngModel", "nzCount", "nzDisabled", "ngModelChange", "click"], [2, "padding", "7px 10px", 3, "nzRight"], [1, "cmacs-compact-table-align-td", 2, "padding", "7px 10px"], ["cdkDrag", "", "class", "cmacs-no-selection", 3, "cdkDragDisabled", "id", "ant-table-selected-row", "cmacs-compact-table-editable-row", "cmacs-compact-table-smart-table-row", "click", "touchstart", "contextmenu", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "cmacs-no-selection", 3, "cdkDragDisabled", "id", "click", "touchstart", "contextmenu"], ["contextMenuTemplate", "cmacsDropdownMenu"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-add", 3, "maxWidth", "minWidth", "cmacs-compact-table-logs-td", "nzLeft", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-drag-col cmacs-compact-table-fst-td", 3, "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "nzLeft", "cmacs-compact-table-fst-td", 4, "ngIf"], [3, "ngClass", "cmacs-editable-column", "cmacs-compact-table-fst-td", "nzLeft", "nzRight", "minWidth", 4, "ngFor", "ngForOf"], ["style", "padding: 7px 10px", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "nzRight", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "nzRight", "maxWidth", "minWidth", "cmacs-compact-table-logs-td", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-row-add", 2, "padding", "7px 10px", 3, "nzLeft"], [1, "cmacs-compact-table-drag-col", "cmacs-compact-table-fst-td", 2, "padding", "7px 10px", 3, "nzLeft"], ["cdkDragHandle", "", 1, "iconUILarge-Move", "cmacs-compact-table-drag-handler"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange"], [3, "ngClass", "nzLeft", "nzRight"], ["style", "max-width: 98%", 4, "ngIf"], [2, "max-width", "98%"], [2, "padding", "7px 10px"], [3, "ngModel", "nzCount", "ngModelChange", "click"], [1, "cmacs-compact-table-smart-table-hot-spot-row-delete", 2, "padding", "7px 10px", 3, "nzRight"], ["class", "cmacs-compact-table-smart-table-hot-spot-row-delete-icon iconUISmall-Close", 3, "click", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-row-delete-icon", "iconUISmall-Close", 3, "click"], ["nz-virtual-scroll", ""], ["defaultTplVirtualScroll", ""], [3, "id", "cmacs-compact-table-expandable-row", "cmacs-compact-table-header-logs", "touchstart", "contextmenu", "dblclick", 4, "ngIf"], [3, "id", "touchstart", "contextmenu", "dblclick"], [3, "cmacs-editable-column", "cmacs-compact-table-on-edit-expandable", "cmacs-compact-table-logs-header-th-font", "cmacs-compact-table-expandable-td", "paddingLeft", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "minWidth", "nzExpandChange", 4, "ngFor", "ngForOf"], [3, "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "nzExpandChange"], ["contextMenuTemplate", ""], [3, "cmacs-editable-column", "cmacs-compact-table-fst-td", "nzLeft", "nzRight", "minWidth", 4, "ngFor", "ngForOf"], [3, "nzLeft", "nzRight"], ["class", "cmacs-compact-table-input", "type", "text", "cmacs-input", "", 3, "cmacs-compact-table-edit-mode-invalid", "placeholder", "ngModel", "click", "dblclick", "ngModelChange", "keyup", 4, "ngIf"], ["class", "cmacs-compact-table-date-edit", 3, "allowClear", "cmacs-compact-table-edit-mode-invalid", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["class", "cmacs-compact-table-datetime-picker", "hideSeconds", "", 3, "use12Hours", "cmacs-compact-table-edit-mode-invalid", "format", "defaultOpenValue", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["class", "cmacs-compact-table-select-cell", "showSearch", "", 3, "cmacs-compact-table-edit-mode-invalid", "placeHolder", "mode", "showCmacsSearch", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["class", "cmacs-compact-table-input-number-edit", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "cmacsStep", "min", "max", "formatter", "parser", "ngModelChange", "click", "dblclick", "keyup", 4, "ngIf"], ["class", "cmacs-compact-table-input-number-edit", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "formatter", "parser", "cmacsStep", "min", "max", "ngModelChange", "click", "dblclick", "keyup", 4, "ngIf"], ["cmacs-checkbox", "", "class", "cmacs-compact-tabe-editable-checkbox", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "cmacs-input", "", 1, "cmacs-compact-table-input", 3, "placeholder", "ngModel", "click", "dblclick", "ngModelChange", "keyup"], ["fieldTypeInput", ""], [1, "cmacs-compact-table-date-edit", 3, "allowClear", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDatePicker", ""], ["hideSeconds", "", 1, "cmacs-compact-table-datetime-picker", 3, "use12Hours", "format", "defaultOpenValue", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDateTimePicker", ""], ["showSearch", "", 1, "cmacs-compact-table-select-cell", 3, "placeHolder", "mode", "showCmacsSearch", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeSelect", ""], [3, "label", "value", "divider", "disabled", 4, "ngFor", "ngForOf"], [3, "label", "value", "divider", "disabled"], [1, "cmacs-compact-table-input-number-edit", 3, "ngModel", "cmacsStep", "min", "max", "formatter", "parser", "ngModelChange", "click", "dblclick", "keyup"], ["fieldTypeInputNumber", ""], [1, "cmacs-compact-table-input-number-edit", 3, "ngModel", "formatter", "parser", "cmacsStep", "min", "max", "ngModelChange", "click", "dblclick", "keyup"], ["cmacs-checkbox", "", 1, "cmacs-compact-tabe-editable-checkbox", 3, "ngModel", "ngModelChange"], ["fieldTypeBool", ""], [2, "width", "98%", "max-width", "98%", "padding", "7px 10px", 3, "click"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", 3, "cmacsTooltipTitle"], ["class", "iconUISmall-Edit", 3, "cmacs-compact-table-edit-icon", "cmacs-compact-table-edit-icon-view", 4, "ngIf"], [1, "iconUISmall-Edit"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-date", 3, "cmacsTooltipTitle"], [1, "iconUILarge-Calendar"], [1, "iconUILarge-Time"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-select", 3, "cmacsTooltipTitle"], [1, "iconArrowLarge-Chevron-Down"], ["cmacs-tooltip", "", 1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-input-number", 3, "cmacsTooltipTitle"], [1, "iconArrowLarge-Solid-UpDown"], ["class", "cmacs-compact-table-boolean-false-icon", 3, "cmacs-compact-table-invalid", "cmacs-compact-table-boolean-icon", 4, "ngIf"], ["class", "cmacs-compact-table-boolean-indeterminate-icon", 3, "cmacs-compact-table-invalid", "cmacs-compact-table-boolean-icon", 4, "ngIf"], ["class", "iconUILarge-Select-All", 3, "cmacs-compact-table-invalid", "cmacs-compact-table-boolean-icon", 4, "ngIf"], [1, "cmacs-compact-table-boolean-false-icon"], [1, "cmacs-compact-table-boolean-indeterminate-icon"], [1, "cmacs-compact-table-boolean-indeterminate-icon-inner"], [1, "iconUILarge-Select-All"], ["templateRefCeld", ""], [2, "width", "98%", "max-width", "98%", "padding", "7px 10px", 3, "id"]], template: function CmacsCompactTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "nz-table", 1, 2);
        i0.ɵɵtemplate(3, CmacsCompactTableComponent_thead_3_Template, 10, 10, "thead", 3);
        i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_4_Template, 2, 1, "tbody", 4);
        i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_5_Template, 2, 0, "tbody", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, CmacsCompactTableComponent_ng_template_6_Template, 7, 7, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(8, CmacsCompactTableComponent_ng_template_8_Template, 8, 7, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
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
    } }, directives: [i7.NzTableComponent, i3.NgIf, i7.NzTheadComponent, i7.NzTrDirective, i3.NgForOf, i7.NzTableCellDirective, i7.NzThMeasureDirective, i7.NzCellFixedDirective, i8.CmacsCheckboxComponent, i9.NgControlStatus, i9.NgModel, i7.NzThAddOnComponent, i10.NzResizableDirective, i3.NgClass, i11.CmacsTooltipDirective, i3.NgTemplateOutlet, i10.NzResizeHandleComponent, i12.ɵNzTransitionPatchDirective, i13.NzIconDirective, i14.NzDropDownDirective, i15.NzStringTemplateOutletDirective, i7.NzTbodyComponent, i16.CdkDropList, i7.NzTdAddOnComponent, i17.NzRateComponent, i16.CdkDrag, i18.CmacsDropdownMenuComponent, i16.CdkDragHandle, i7.NzTableVirtualScrollDirective, i19.CmacsInputDirective, i9.DefaultValueAccessor, i20.CmacsDatePickerComponent, i21.CmacsDateTimePickerComponent, i22.CmacsSelectComponent, i23.CmacsOptionComponent, i24.CmacsInputNumberComponent], pipes: [i3.DatePipe], styles: [".cmacs-compact-table-field-valid-placeholder[_ngcontent-%COMP%]{color:#bec4cd}.cmacs-compact-tabe-editable-checkbox[_ngcontent-%COMP%]{padding:2px 10px}  .cmacs-compact-tabe-editable-checkbox .ant-checkbox-inner:after{top:50%;left:23%;width:4.71px;height:8px}  .cmacs-compact-tabe-editable-checkbox .ant-checkbox-inner{width:16px;height:16px}.cmacs-compact-table-resize-trigger[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#bfbfbf;position:absolute;right:10px!important}  .cmacs-compact-table .nz-resizable-preview{border-width:0 1px 0 0;border-top:none!important;border-left:none!important;height:100%;max-height:100%;padding:0;margin:0}  .cmacs-compact-table .nz-resizable .ant-table-filter-trigger-container{right:10px;display:inline-block}  .cmacs-compact-table .ant-table-cell.ant-table-cell-fix-left,   .cmacs-compact-table .ant-table-cell.ant-table-cell-fix-right{z-index:10}  .cmacs-compact-table .nz-resizable.ant-table-cell.ant-table-cell-fix-left.ant-table-cell-fix-left-last .nz-resizable-handle-right{right:0!important}  .cmacs-compact-table .ant-table-filter-column{margin:0}  .cmacs-compact-table .ant-table-filter-column-title{padding:0}  .cmacs-compact-table .nz-resizable-handle-right{right:0}  .cmacs-compact-table-edit-mode-invalid,   .cmacs-compact-table-edit-mode-invalid .ant-select-selection,   .cmacs-compact-table-edit-mode-invalid:focus,   .cmacs-compact-table-edit-mode-invalid:focus .ant-select-selection,   .cmacs-compact-table-edit-mode-invalid:hover,   .cmacs-compact-table-edit-mode-invalid:hover .ant-select-selection,   .cmacs-compact-table-invalid.cmacs-compact-table-boolean-indeterminate-icon{border-color:#f6503c!important}.cmacs-compact-table-datetime-picker.ant-picker-focused[_ngcontent-%COMP%]:not(.cmacs-time-picker-opened),   .cmacs-compact-table .ant-picker:not(.ant-picker-disabled):not(.cmacs-time-picker-opened):not(.ant-picker-focused):hover,   .cmacs-compact-table .ant-picker:not(.ant-picker-focused):not(.cmacs-time-picker-opened){border-color:#2a7cff!important}.cmacs-compact-table-datetime-picker[_ngcontent-%COMP%]{padding:8px 11px;width:100%}  .cmacs-compact-table .ant-table-placeholder .ant-table-cell,   .cmacs-compact-table .ant-table-tbody>tr.ant-table-placeholder:hover{box-shadow:none!important;border-bottom:none!important}  .cmacs-compact-table tr.ant-table-placeholder .ant-table-expanded-row-fixed{margin:0!important;padding:0!important}  .cmacs-compact-table .ant-table-tbody>tr.ant-table-placeholder:hover>td{box-shadow:none!important}  .cmacs-compact-table .ant-table-thead>tr>th:not(.cmacs-compact-table-logs-header-th).ant-table-column-has-sorters:hover{background-color:#fff!important}  .cmacs-compact-table .ant-table-thead>tr>th.cmacs-compact-table-logs-header-th.ant-table-column-has-sorters:hover{background-color:#f6f7fb!important}  .cmacs-compact-table .ant-table-tbody>tr>td.cmacs-compact-table-align-td{border-bottom:none!important;box-shadow:none!important;background-color:#f6f7fb!important}  .cmacs-compact-table-overflow-cell-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5em}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column{vertical-align:middle}  .cmacs-compact-table-smart-action-header i{position:relative!important;top:0!important}  .cmacs-compact-table .ant-table-column-sorter-inner{margin-left:0;margin-right:0}  .cmacs-compact-table .ant-table-column-sorter{width:12px;display:none!important;right:0;position:absolute}  .cmacs-compact-table th:hover .ant-table-column-sorter{display:table-cell!important;right:0;position:absolute}  .cmacs-compact-table .ant-table-column-sorters,   .cmacs-compact-table .ant-table-header-column{width:100%;padding:0}  .cmacs-compact-table .ant-table-column-sorters span:not(.ant-table-column-sorter){width:100%}  .cmacs-compact-table-rating{min-width:105px}  .cmacs-compact-table-invalid,   .cmacs-compact-table-invalid+i{color:#f6503c!important;opacity:1!important}  .cmacs-compact-table-invalid.cmacs-compact-table-boolean-indeterminate-icon .cmacs-compact-table-boolean-indeterminate-icon-inner{background-color:#f6503c}  .cmacs-compact-table .ant-table-thead{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;color:#656c79}  .cmacs-compact-table .ant-table-thead>tr>th{padding:8px 10px}  .cmacs-compact-table-drag-handler{color:#bec4cd;font-size:20px;padding:0 0 0 8px;margin:0;vertical-align:middle}  .cmacs-compact-table-drag-placeholder{border-bottom:1px solid #2a7cff;color:#2a7cff;text-align:left;min-width:100%}  .cmacs-compact-table-drag-preview{color:#2a7cff;opacity:.5;text-align:left}  .cmacs-compact-table-drag-handler:hover{cursor:pointer;color:#2a7cff}  .cmacs-compact-table-drag-col{padding:0!important;margin:0!important}  .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-add,   .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-delete{background:#fff;border-bottom-color:transparent;border-top-color:transparent}  .cmacs-compact-table .ant-table-row-indent+.ant-table-row-expand-icon{margin-top:8.5px;margin-right:8px}  .cmacs-compact-table .ant-table-header{background:transparent}  .cmacs-compact-table-balance-padding{padding:6px!important}  .cmacs-compact-table .ant-table-tbody>tr>td{padding:0;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae;transition:none}  .cmacs-compact-table .ant-table-tbody>tr:not(.ant-table-selected-row)>td:not(.cmacs-compact-table-logs-header-th-font):not(.cmacs-compact-table-align-td){background-color:#fff!important}  .cmacs-compact-table .ant-table-thead>tr>th:not(.cmacs-compact-table-logs-header-th){background:#fff!important;border-bottom:1px solid #dee0e5}  .cmacs-compact-table .ant-table-tbody>tr:not(.ant-table-placeholder):hover td.cmacs-compact-table-fst-td,   .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):not(.ant-table-placeholder):hover td:first-child{box-shadow:inset 3px 0 0 #2a7cff}  .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td,   .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff!important}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:hover td:not(:first-child):not(.ant-table-td-right-sticky):not(.ant-table-td-left-sticky),   .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-right-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add):first-child.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-add{border-bottom:0}  .cmacs-compact-table .ant-table-tbody>.cmacs-compact-table-smart-table-row:hover>td:last-child,   .cmacs-compact-table .ant-table-tbody>.cmacs-compact-table-smart-table-row>td:last-child{box-shadow:none!important}  .cmacs-compact-table .editable-cell{position:relative}  .cmacs-compact-table .ant-rate-star{font-size:16px;margin:0}  .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-add:hover~td:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),   .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover~td{border-bottom-color:#2a7cff}  .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td{border-bottom-color:#f6503c}  .cmacs-compact-table-smart-table-hot-spot-row-add,   .cmacs-compact-table-smart-table-hot-spot-row-add:hover,   .cmacs-compact-table-smart-table-hot-spot-row-delete,   .cmacs-compact-table-smart-table-hot-spot-row-delete:hover{width:28px;border-bottom-color:transparent!important;border-top-color:transparent!important;background-color:#fff!important;box-shadow:none!important;border-bottom:0}  .cmacs-compact-table-logs-td,   .cmacs-compact-table-logs-td:hover{background-color:#f6f7fb!important}  .ant-table-thead>tr:hover .cmacs-compact-table-smart-table-hot-spot-row-add-icon,   .ant-table-thead>tr:hover .cmacs-compact-table-smart-table-hot-spot-row-delete-icon,   tr:hover .cmacs-compact-table-smart-table-hot-spot-row-add-icon,   tr:hover .cmacs-compact-table-smart-table-hot-spot-row-delete-icon{opacity:1!important}  .cmacs-compact-table-smart-table-hot-spot-row-add-icon:hover,   .cmacs-compact-table-smart-table-hot-spot-row-delete-icon:hover{cursor:pointer}  .cmacs-compact-table-smart-table-hot-spot-row-delete-icon{font-size:14px;border-radius:100px;background-color:#f6503c;color:#fff;padding:2px;display:flex;width:18px;opacity:0}  .cmacs-compact-table-smart-table-hot-spot-row-add-icon{font-size:14px;border-radius:100px;background-color:#2a7cff;color:#fff;padding:2px;display:flex;opacity:0;width:18px}  .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add):not(.cmacs-compact-table-smart-table-hot-spot-row-delete){background-color:#f2f7ff!important}  .cmacs-compact-table .ant-spin-nested-loading{clear:both}  .cmacs-compact-table-extra,   .cmacs-compact-table-extra a,   .cmacs-compact-table-extra a i,   .cmacs-compact-table-extra i{font-size:16px;color:#656c79;display:inline-flex}  .cmacs-compact-table-extra{position:relative}  .cmacs-compact-table-extra a,   .cmacs-compact-table-extra a i,   .cmacs-compact-table-extra i{margin-right:5px}  .cmacs-compact-table-extra a:hover,   .cmacs-compact-table-extra a i:hover,   .cmacs-compact-table-extra i:hover{cursor:pointer}  .cmacs-compact-table a,   .cmacs-compact-table a:hover{color:#656c79}  .cmacs-compact-table-edit-icon{float:right;font-size:16px;position:relative;opacity:0}  .cmacs-compact-table-edit-icon-view{display:none}  .cmacs-compact-table-edit-icon:hover{color:#2a7cff;cursor:pointer}  .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-edit-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-edit-icon{opacity:1}  .cmacs-compact-table-input,   .cmacs-compact-table-input:focus,   .cmacs-compact-table-input:hover,   .cmacs-compact-table-select{max-width:100%;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;border-color:#2a7cff;box-shadow:none}  .cmacs-compact-table-input{padding-left:3px}  .cmacs-compact-table-on-edit{padding:0 6px!important}  .cmacs-compact-table-on-edit-expandable{padding-top:0!important;padding-bottom:0!important}  .cmacs-compact-table-on-edit-no-padding{padding:0 0 0 6px!important}  .cmacs-compact-table-calendar-icon,   .cmacs-compact-table-calendar-icon-view,   .cmacs-compact-table-input-number-icon,   .cmacs-compact-table-input-number-icon-view,   .cmacs-compact-table-select-icon,   .cmacs-compact-table-select-icon-view{float:right;font-size:16px;position:relative;line-height:18px}  .cmacs-compact-table-editable-row:hover .cmacs-compact-table-calendar-icon,   .cmacs-compact-table-editable-row:hover .cmacs-compact-table-input-number-icon,   .cmacs-compact-table-editable-row:hover .cmacs-compact-table-select-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-calendar-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-input-number-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-select-icon{color:#656c79}  .cmacs-compact-table-calendar-icon:hover,   .cmacs-compact-table-input-number-icon:hover,   .cmacs-compact-table-select-icon:hover{cursor:pointer}  .cmacs-compact-table-date,   .cmacs-compact-table-input-number,   .cmacs-compact-table-select{border-bottom:2px dotted transparent;border-top:2px solid transparent;padding-left:2px;margin:-2px;padding-right:2px}  .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-date,   .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-input-number,   .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-select,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-date,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-input-number,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-select{border-bottom:2px dotted #656c79;border-top:2px solid transparent;padding-left:2px;margin:-2px;padding-right:2px}  .cmacs-compact-table-date-edit .ant-calendar-input,   .cmacs-compact-table-date-edit cmacs-picker span input,   .cmacs-compact-table-datetime-picker input{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal}  .cmacs-compact-table .cmacs-compact-table-select-cell{width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal}  .cmacs-compact-table .cmacs-compact-table-select-cell .ant-select-selection{height:34px!important;border:1px solid #2a7cff;margin-left:0;margin-right:0}  .cmacs-compact-table .ant-select-arrow{right:1px}  .cmacs-compact-table-date-edit cmacs-picker span input,   .cmacs-compact-table-datetime-picker input{padding-left:3px}  .cmacs-compact-table-date-edit cmacs-picker span .ant-calendar-picker-clear,   .cmacs-compact-table-date-edit cmacs-picker span .ant-calendar-picker-icon{margin-top:-8px;margin-right:-1px}  .cmacs-compact-table cmacs-input-number.ant-input-number:not(.cmacs-datetime-picker-input-number){margin-bottom:-5px;margin-left:-9px}  .cmacs-compact-table cmacs-input-number input.ant-input-number-input{height:32px;padding-left:12px}  .cmacs-compact-table .cmacs-compact-table-expandable-row .cmacs-compact-table-expandable-td input.cmacs-compact-table-input,   .cmacs-compact-table .cmacs-compact-table-expandable-row .cmacs-compact-table-on-edit-expandable input.cmacs-compact-table-input{margin-left:-4px}.cmacs-compact-table-input[_ngcontent-%COMP%]{width:96%;border-color:#2a7cff!important}  .cmacs-compact-table .cmacs-compact-table-on-edit-expandable .ant-picker,   .cmacs-compact-table .cmacs-compact-table-on-edit-expandable .cmacs-compact-table-date-edit{padding-left:2px;padding-right:2px}  .cmacs-compact-table .cmacs-compact-table-on-edit-expandable cmacs-select.cmacs-compact-table-select-cell .ant-select-selection__rendered{margin-left:7px}  .cmacs-compact-table .cmacs-compact-table-on-edit-expandable cmacs-select .ant-select-arrow{right:-2px}  .cmacs-compact-table-date-edit cmacs-picker span input,   .cmacs-compact-table-date-edit cmacs-picker span input:focus,   .cmacs-compact-table-date-edit cmacs-picker span input:focus-within,   .cmacs-compact-table-date-edit cmacs-picker span input:hover,   .cmacs-compact-table-datetime-picker input,   .cmacs-compact-table-datetime-picker input:focus,   .cmacs-compact-table-datetime-picker input:focus-within,   .cmacs-compact-table-datetime-picker input:hover,   .cmacs-compact-table-input-number-edit,   .cmacs-compact-table-input-number-edit:focus,   .cmacs-compact-table-input-number-edit:focus-within,   .cmacs-compact-table-input-number-edit:hover{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;border-color:#2a7cff!important}  .cmacs-compact-table-overflow-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:100%;vertical-align:middle;line-height:20px}  .cmacs-compact-table .ant-table-row-expand-icon-collapsed:after{font-family:ArrowSmall!important;content:\"\\e903\";transition:all .3s;width:unset;transform:unset;position:static;background:transparent}  .cmacs-compact-table .ant-table-row-expand-icon-collapsed:before{content:unset}  .cmacs-compact-table .ant-table-row-expand-icon-collapsed{margin-right:5px;border:none;transition:all .3s}  .cmacs-compact-table .ant-table-row-expand-icon-expanded:after{font-family:ArrowSmall!important;content:\"\\e900\";transition:all .3s;width:unset;transform:unset;position:static;background:transparent}  .cmacs-compact-table .ant-table-row-expand-icon-expanded{margin-right:5px;border:none;transition:all .3s}  .cmacs-compact-table .ant-table-row-expand-icon-expanded:before{content:unset}  .cmacs-compact-table-header-logs,   .cmacs-compact-table-header-logs:hover{background-color:#f6f7fb!important;color:#656c79!important}  thead .cmacs-compact-table-header-logs{box-shadow:inset 0 -1px 0 #dee0e5}  .cmacs-compact-table-logs-header-th-font,   .cmacs-compact-table-logs-header-th-font:hover{color:#656c79!important;background-color:#f6f7fb!important}  .cmacs-compact-table-logs-header-th-font.th,   .cmacs-compact-table-logs-header-th-font.th:hover{border-bottom:1px solid #dee0e5!important}  .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#f6f7fb!important}  .cmacs-compact-table-boolean-false-icon,   .cmacs-compact-table-boolean-indeterminate-icon{width:10px;border:1px solid #dee0e5;height:10px;display:block}  .cmacs-compact-table-boolean-indeterminate-icon{padding:1px}  .cmacs-compact-table-boolean-indeterminate-icon-inner{width:6px;background-color:#dee0e5;height:6px;display:block}  .cmacs-compact-table-boolean-icon:hover{cursor:pointer;color:#2a7cff;border-color:#2a7cff}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0;border-bottom:1px solid #2a7cff!important;background-color:#fff}.cdk-drag-placeholder[_ngcontent-%COMP%]{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff;opacity:1}  .cmacs-compact-table-smart-add-row-icon-visible{z-index:2;position:absolute;opacity:1!important}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-add){box-shadow:7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-add),   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete){border-bottom:1px solid #dee0e5}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky{box-shadow:0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky+.ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky+.ant-table-th-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky+.ant-table-td-right-sticky{box-shadow:none}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-right-sticky{box-shadow:0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky~.ant-table-td-right-sticky,  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-right-sticky~.ant-table-th-right-sticky{box-shadow:none}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky~.ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky~.ant-table-td-right-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-th-left-sticky{box-shadow:7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child.ant-table-td-left-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-smart-table-row:not(.ant-table-selected-row):hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-smart-table-row:not(.ant-table-selected-row):hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-smart-table-row.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-smart-table-row.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-checkbox-wrapper{display:inline-grid;vertical-align:middle}  .cmacs-compact-table .cmacs-no-selection{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}  .cmacs-compact-table .ant-table-expand-icon-th,   .cmacs-compact-table .ant-table-row-expand-icon-cell{text-align:left}  .cmacs-compact-table table{table-layout:fixed}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters{display:inline-flex;position:relative;top:3px}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner-full{margin-left:0!important}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters:hover:before{background-color:transparent}  .cmacs-compact-table.cmacs-compact-table-scrollable-y .ant-table-fixed-header .ant-table-header{overflow:hidden!important;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1;margin-right:6px}  .cmacs-compact-table:not(.cmacs-compact-table-scrollable-y) .ant-table-fixed-header .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1;margin-right:1px}  .cmacs-compact-table .ant-table-fixed-header>.ant-table-container>.ant-table-body,   .cmacs-compact-table cdk-virtual-scroll-viewport{scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin;overflow:scroll!important;position:inherit;padding-bottom:10px;background-color:transparent}  .ant-table{background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar,   .cmacs-compact-table cdk-virtual-scroll-viewport::-webkit-scrollbar{width:6px;height:6px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb,   .cmacs-compact-table cdk-virtual-scroll-viewport::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb:hover,   .cmacs-compact-table cdk-virtual-scroll-viewport::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}  .cmacs-compact-table cmacs-datetime-picker.ant-time-picker{width:100%!important}  .cmacs-compact-table .ant-table-row-expand-icon{background:transparent!important}@media only screen and (max-device-width:1024px) and (orientation:portrait){  .cmacs-compact-table.cmacs-compact-table-scrollable-y .ant-table-fixed-header .ant-table-header{margin-right:0}}@media only screen and (max-device-width:1024px) and (orientation:landscape){  .cmacs-compact-table.cmacs-compact-table-scrollable-y .ant-table-fixed-header .ant-table-header{margin-right:0}}"], changeDetection: 0 });
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
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzI18nService }, { type: i2.ExcelService }, { type: i3.DatePipe }, { type: i4.CmacsContextMenuService }, { type: i5.CookieService }, { type: i6.UtilService }]; }, { nzTableComponent: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb21wYWN0LXRhYmxlL2NtYWNzLWNvbXBhY3QtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUlOLFNBQVMsRUFDVCxZQUFZLEVBQ1osdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBUyxNQUFNLGdCQUFnQixDQUFDO0FBSWxELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLGlCQUFpQixDQUFDO0FBR3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzVELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxv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QyxLQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDL0QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pOLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUs7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztlQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQy9ELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxUixDQUFDO0lBRUQsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7ZUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUMvRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMVIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxD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SSxFQUFFLFVBQVUsRUFBRTtZQUNNLHFCQUFxQjtrQkFBaEYsU0FBUzttQkFBQyx5QkFBeUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDTixhQUFhO2tCQUFoRSxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNBLFdBQVc7a0JBQTVELFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNQLGNBQWM7a0JBQXRELFNBQVM7bUJBQUMsNEJBQTRCO1lBa0p2QyxlQUFlO2tCQURkLFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgY291bnQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgRXhwb3J0QXNTZXJ2aWNlLCBFeHBvcnRBc0NvbmZpZyB9IGZyb20gJ25neC1leHBvcnQtYXMnO1xyXG5pbXBvcnQganNQREYgZnJvbSAnanNwZGYnO1xyXG5pbXBvcnQgJ2pzcGRmLWF1dG90YWJsZSc7XHJcbmltcG9ydCB7IEdyaWRDb25maWcsIEZpZWxkIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgR3JpZEV4cENvbmZpZyB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWV4cC1jb25maWcnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL1RlbXBsYXRlVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ2VsZFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL0NlbGRUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBFeGNlbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL2V4Y2VsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9leHBvcnQtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XHJcbmltcG9ydCB7IENoZWNrYm94U2VsZWN0IH0gZnJvbSBcIi4uL2NtYWNzLXRhYmxlL2NtYWNzLXRhYmxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcInV0aWxcIjtcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENtYWNzSW5wdXROdW1iZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vY21hY3MtaW5wdXQtbnVtYmVyL2NtYWNzLWlucHV0LW51bWJlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWllJztcclxuaW1wb3J0IHsgQ21hY3NEYXRlVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLWRhdGV0aW1lLXBpY2tlci9jbWFjcy1kYXRldGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xyXG5pbXBvcnQgeyBOelNpemVNRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOelRhYmxlQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XHJcbmltcG9ydCB7IENtYWNzQ29udGV4dE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vY21hY3MtZHJvcGRvd24vY29udGV4dC1tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOelJlc2l6ZUV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9yZXNpemFibGUnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5kZWNsYXJlIHZhciBhY2NvdW50aW5nOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29tcGFjdC10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NvbXBhY3RUYWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNvbXBhY3QtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbXBhY3QtdGFibGUuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzXSc6ICdsb2dzJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBoZWFkZXJCb3R0b21TdHlsZSA9IHt9O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIEBWaWV3Q2hpbGQoJ2dyaWRDb21wb25lbnQnKSBuelRhYmxlQ29tcG9uZW50OiBOelRhYmxlQ29tcG9uZW50O1xyXG4gIHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxhbnk+KGZhbHNlLCBbXSk7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTURTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBzaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+O1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4Y2x1c2l2ZVNlbGVjdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2dzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc21hcnRUYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkcmFnZ2FibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsSXRlbVNpemUgPSAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRBbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBsb2FkaW5nRGVsYXkgPSAwO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdJbmRpY2F0b3I6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHRvdGFsID0gMDtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgd2lkdGhDb25maWc6IHN0cmluZ1tdID0gW107XHJcbiAgQElucHV0KCkgcGFnZUluZGV4ID0gMTtcclxuICBASW5wdXQoKSBwYWdlU2l6ZSA9IDEwO1xyXG4gIEBJbnB1dCgpIGFjdGlvbkNvbHVtbldpZHRoID0gJzgwcHgnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB3cmFwTGluZXMgPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgpIGRhdGEgPSBbXTtcclxuICBASW5wdXQoKSBjb25maWc6IEdyaWRDb25maWc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHVzZTEySG91cnMgPSB0cnVlO1xyXG4gIEBPdXRwdXQoKSBjb25maWdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxHcmlkQ29uZmlnPiA9IG5ldyBFdmVudEVtaXR0ZXI8R3JpZENvbmZpZz4oKTtcclxuICBASW5wdXQoKSBmaWVsZElkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZ3JpZElEOiBzdHJpbmcgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHBhZ2luYXRpb25Qb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyB8ICdib3RoJyA9ICdib3R0b20nO1xyXG4gIEBJbnB1dCgpIHNjcm9sbDogeyB4Pzogc3RyaW5nIHwgbnVsbDsgeT86IHN0cmluZyB8IG51bGwgfSA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xyXG4gIEBWaWV3Q2hpbGQoJ3JlbmRlckl0ZW1UZW1wbGF0ZScpIG56SXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8e1xyXG4gICAgJGltcGxpY2l0OiAncGFnZScgfCAncHJldicgfCAnbmV4dCc7XHJcbiAgICBwYWdlOiBudW1iZXI7XHJcbiAgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZyb250UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRlbXBsYXRlTW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjZW50ZXJUYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVPblNpbmdsZVBhZ2UgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1F1aWNrSnVtcGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNpbXBsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2JveFNlbGVjdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbkxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRhdGFUYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UmF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGV4cG9ydEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkRXhwQ29uZmlnPigpO1xyXG4gIEBPdXRwdXQoKSBidXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSByYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XHJcbiAgQE91dHB1dCgpIG9uZGxjbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmNsaWNrUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvblJvd0V4cGFuZENvbGxhcHNlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIHJhdGVDb3VudCA9IDU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG11bHRpU2VsZWN0ID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9ucm93ZGVsZXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbnJvd2FkZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9ucmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY29udGV4dG1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQElucHV0KCkgZXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGNvbnRleHRtZW51OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBpbmRlbnRTaXplOiBudW1iZXIgPSAwOyBcclxuICBASW5wdXQoKSB2aXJ0dWFsTWF4QnVmZmVyUHggPSAyMDA7XHJcbiAgcHVibGljIGRyb3Bkb3duOiBhbnk7XHJcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICBmb3JtYXR0ZXIgPSAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBhY2NvdW50aW5nLmZvcm1hdE51bWJlcih2YWx1ZSwgeyBwcmVjaXNpb246IDMsIHRob3VzYW5kOiBcIiBcIiwgZGVjaW1hbDogXCIsXCIgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfTtcclxuICBwYXJzZXIgPSAodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBhY2NvdW50aW5nLnVuZm9ybWF0KHZhbHVlLCAnLCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH07XHJcbiAgZGVmYXVsdEZvcm1hdHRlciA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfTtcclxuICBkZWZhdWx0UGFyc2VyID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9O1xyXG4gIGRlZmF1bHRTb3J0T3JkZXIgPSBudWxsO1xyXG4gIGNoZWNrYm94Q2FjaGU6IENoZWNrYm94U2VsZWN0W10gPSBbXTtcclxuICBpc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBhbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgZWRpdElkOiBzdHJpbmcgfCBudWxsO1xyXG4gIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gIHJvd09uRWRpdGlvbiA9IC0xO1xyXG4gIG5vZGVPbkVkaXRpb24gPSBudWxsO1xyXG4gIG1hcE9mRXhwYW5kZWREYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueVtdIH0gPSB7fTtcclxuICBkZWZhdWx0VGltZVZhbHVlID0gbmV3IERhdGUoKTtcclxuICBsYXN0SWR4U2VsZWN0ZWQgPSBudWxsO1xyXG5cclxuICBmaWVsZElEOiBhbnkgPSBudWxsO1xyXG5cclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlSW5wdXROdW1iZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXROdW1iZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUlucHV0TnVtYmVyJywgeyByZWFkOiBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50IH0pIGlucHV0TnVtYmVyQ29tcG9uZW50OiBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZURhdGVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgZGF0ZVBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlRGF0ZVRpbWVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgZGF0ZVRpbWVQaWNrZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZVNlbGVjdCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBzZWxlY3RFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUJvb2wnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgYm9vbEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChDbWFjc0RhdGVUaW1lUGlja2VyQ29tcG9uZW50KSBkYXRlVGltZVBpY2tlcjogQ21hY3NEYXRlVGltZVBpY2tlckNvbXBvbmVudDtcclxuXHJcbiAgb25jb250ZXh0bWVudWV2dCgkZXZlbnQsIGl0ZW0pIHtcclxuICAgIHRoaXMub25jb250ZXh0bWVudS5lbWl0KGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgaXNFbGxpcHNpc0FjdGl2ZShpZDogc3RyaW5nLCBmaWVsZDogYW55KSB7XHJcbiAgICBpZiAoIWZpZWxkLnNob3dUb29sdGlwKSB7IHJldHVybjsgfVxyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAoIWVsKSB7IHJldHVybjt9XHJcbiAgICByZXR1cm4gKGVsLm9mZnNldFdpZHRoIDwgZWwuc2Nyb2xsV2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5wdXROdW1iZXJWYWx1ZShkYXRhOiBhbnksIGZpZWxkOiBGaWVsZCkge1xyXG5cclxuICAgIGlmICghdGhpcy5pc051bGwoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pKSB7XHJcbiAgICAgIGlmIChmaWVsZC51c2VDb21tYU1hcmtlcikge1xyXG4gICAgICAgIHJldHVybiBkYXRhW2ZpZWxkLnByb3BlcnR5XS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnLCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5pc051bGwoZmllbGQuZm9ybWF0dGVyKSkge1xyXG4gICAgICAgIHJldHVybiBmaWVsZC5mb3JtYXR0ZXIoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkYXRhW2ZpZWxkLnByb3BlcnR5XTtcclxuICAgIH1cclxuICAgIHJldHVybiBmaWVsZC5wbGFjZWhvbGRlcjsgICAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0U3RyaW5nRmllbGRWYWx1ZShkYXRhOiBhbnksIGZpZWxkOiBhbnkpIHtcclxuICAgIHJldHVybiBkYXRhW2ZpZWxkLnByb3BlcnR5XSAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XS5sZW5ndGggPyBkYXRhW2ZpZWxkLnByb3BlcnR5XSA6IGZpZWxkLnBsYWNlaG9sZGVyO1xyXG4gIH1cclxuXHJcbiAgb25SZXNpemUoeyB3aWR0aCB9OiBOelJlc2l6ZUV2ZW50LCBjb2w6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuZmllbGRzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25maWcuZmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmNvbmZpZy5maWVsZHNbaV07ICAgICAgXHJcbiAgICAgICAgaWYgKGZpZWxkLnByb3BlcnR5ID09PSBjb2wpIHtcclxuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgIGZpZWxkLndpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgICAgY29uc3QgZWxXaWR0aCA9IGZpZWxkLndpZHRoID8gTnVtYmVyKGZpZWxkLndpZHRoLnJlcGxhY2UoL1teXFxkLi1dL2csICcnKSkgOiAwO1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGwueCA9IHRoaXMuc2Nyb2xsLnggPyBgJHtOdW1iZXIodGhpcy5zY3JvbGwueC5yZXBsYWNlKC9bXlxcZC4tXS9nLCAnJykpIC0gZWxXaWR0aCArIHdpZHRofXB4YCA6IG51bGw7XHJcbiAgICAgICAgICBjb250aW51ZTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMub25yZXNpemUuZW1pdCh7IGNvbDogY29sLCBjb25maWc6IHRoaXMuY29uZmlnIH0pO1xyXG4gICAgdGhpcy5jb25maWdDaGFuZ2UuZW1pdCh0aGlzLmNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcmV2ZW50RGVmYXVsdCgkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIC8qQ29udGV4dCBNZW51ICovXHJcbiAgY29udGV4dE1lbnUoJGV2ZW50OiBNb3VzZUV2ZW50LCB0ZW1wbGF0ZTogYW55LCBpdGVtOiBhbnkgPSBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uY29udGV4dG1lbnVldnQoJGV2ZW50LCBpdGVtKTtcclxuICAgIHRoaXMuZHJvcGRvd24gPSB0aGlzLm56RHJvcGRvd25TZXJ2aWNlLmNyZWF0ZSgkZXZlbnQsIHRlbXBsYXRlKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKGRhdGE6IGFueSwgZmllbGQ6IEZpZWxkKSB7XHJcbiAgICBjb25zdCBmb3JtQ29udHJvbCA9IGZpZWxkLnZhbGlkYXRvcnMgPyBuZXcgRm9ybUNvbnRyb2woZGF0YVtmaWVsZC5wcm9wZXJ0eV0sIGZpZWxkLnZhbGlkYXRvcnMpIDogbmV3IEZvcm1Db250cm9sKGRhdGFbZmllbGQucHJvcGVydHldKTtcclxuICAgIGRhdGEudmFsaWQgPSBkYXRhLnZhbGlkID8gZGF0YS52YWxpZCA6IHt9O1xyXG4gICAgZGF0YS52YWxpZFtmaWVsZC5wcm9wZXJ0eV0gPSBmb3JtQ29udHJvbC52YWxpZDtcclxuICAgIHJldHVybiBmb3JtQ29udHJvbC52YWxpZDtcclxuICB9XHJcblxyXG4gIGFkZFJvdyhpZHg6IG51bWJlciwgJGV2ZW50ID0gbnVsbCkge1xyXG4gICAgdGhpcy5vbnJvd2FkZGVkLmVtaXQoaWR4KTtcclxuICAgIHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkID0gdHJ1ZTtcclxuICAgIGlmICgkZXZlbnQpIHtcclxuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgkZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICBpZiAoIXRoaXMuZHJhZ2dhYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICB0aGlzLmRhdGEgPSBbLi4udGhpcy5kYXRhXTtcclxuICAgIHRoaXMub25kcm9wLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgZWRpdGlvbk9wVHJpZ2dlcmVkID0gZmFsc2U7XHJcbiAgZGVsZXRlUm93KGlkeDogbnVtYmVyLCAkZXZlbnQgPSBudWxsKSB7XHJcbiAgICBjb25zdCBpdGVtVG9SZW1vdmUgPSB0aGlzLmRhdGFbaWR4XTtcclxuICAgIHRoaXMub25yb3dkZWxldGVkLmVtaXQoaXRlbVRvUmVtb3ZlKTtcclxuICAgIHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkID0gdHJ1ZTtcclxuICAgIGlmICgkZXZlbnQpIHtcclxuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgkZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnRFZGl0KGlkOiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcsIGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluTGluZUVkaXQpIHtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmlzU2VsZWN0ZWQoZGF0YVt0aGlzLmZpZWxkSURdKSB8fCB0aGlzLmlzUm93U2VsZWN0ZWQoZGF0YSkpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5pc051bGwoZGF0YS5ub3RFZGl0YWJsZUZpZWxkcylcclxuICAgICAgICAmJiBkYXRhLm5vdEVkaXRhYmxlRmllbGRzLmZpbHRlcih4ID0+IHggPT09IHByb3BlcnR5KS5sZW5ndGhcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmVkaXRJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZW1pdE9uRWRpdEV2ZW50KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lZGl0SWQgPSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdO1xyXG4gICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgdGhpcy5mb2N1c1NlbGVjdCh0aGlzLmlucHV0RWxlbWVudCk7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c1NlbGVjdCh0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50LmlucHV0RWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZGF0ZVRpbWVQaWNrZXIpIHtcclxuICAgICAgICB0aGlzLmZvY3VzU2VsZWN0KHRoaXMuZGF0ZVRpbWVQaWNrZXIuaW5wdXRSZWYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c1NlbGVjdChlbGVtOiBhbnkpIHtcclxuICAgIGlmIChlbGVtKSB7XHJcbiAgICAgIGVsZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtLm5hdGl2ZUVsZW1lbnQuc2VsZWN0KCk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzb3J0KCRldmVudDogYW55LCBmaWVsZFByb3BlcnR5OiBzdHJpbmcsKSB7XHJcbiAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdCh7IHNvcnROYW1lOiBmaWVsZFByb3BlcnR5LCBzb3J0VmFsdWU6ICRldmVudCB9KTtcclxuICB9XHJcblxyXG4gIGZpbHRlcigkZXZlbnQ6IGFueSwgZmllbGRQcm9wZXJ0eTogc3RyaW5nLCApIHtcclxuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoeyBmaWx0ZXJOYW1lOiBmaWVsZFByb3BlcnR5LCBmaWx0ZXJWYWx1ZTogJGV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGVhZGVyTWF4V2lkdGgoZmllbGQ6IEZpZWxkKSB7XHJcbiAgICBpZiAoZmllbGQuc2hvd1NvcnQpIHtcclxuICAgICAgcmV0dXJuIGBjYWxjKDEwMCUgLSAxNXB4KWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYDEwMCVgO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICBoYW5kbGVNb3VzZURvd24oZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICh0aGlzLmVkaXRJZCAmJiB0aGlzLnByb3BlcnR5KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCAhPT0gZS50YXJnZXQpIHx8XHJcbiAgICAgICAgKHRoaXMuaW5wdXROdW1iZXJFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5pbnB1dE51bWJlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmRhdGVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB8fFxyXG4gICAgICAgICh0aGlzLmRhdGVUaW1lUGlja2VyRWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuZGF0ZVRpbWVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB8fFxyXG4gICAgICAgICh0aGlzLnNlbGVjdEVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLnNlbGVjdEVsZW1lbnQubmF0aXZlRWxlbWVudCkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICB0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50LmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZVRpbWVQaWNrZXIpIHtcclxuICAgICAgICAgIHRoaXMuZGF0ZVRpbWVQaWNrZXIuc2V0Q3VycmVudFZhbHVlQW5kQ2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZW1pdE9uRWRpdEV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEN1c3RvbVBhZGRpbmcoaXRlbTogYW55LCBpOiBudW1iZXIpIHtcclxuICAgIGlmICghaSkge1xyXG4gICAgICBpZiAoIWl0ZW0ubGV2ZWwpIHtcclxuICAgICAgICByZXR1cm4gISFpdGVtLmNoaWxkcmVuID8gNiA6IDI4O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmxldmVsICogdGhpcy5pbmRlbnRTaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gNjtcclxuICB9XHJcblxyXG4gIGNoaWxkT2Yobm9kZTogYW55LCBhbmNlc3RvcjogYW55KSB7XHJcbiAgICBsZXQgY2hpbGQgPSBub2RlO1xyXG4gICAgd2hpbGUgKGNoaWxkICE9PSBudWxsKSB7XHJcbiAgICAgIGlmIChjaGlsZCA9PT0gYW5jZXN0b3IpIHJldHVybiB0cnVlO1xyXG4gICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0ICYmIGNoaWxkLmNsYXNzTGlzdC5sZW5ndGggPiAwICYmIGNoaWxkLmNsYXNzTmFtZSAmJiB0eXBlb2YgY2hpbGQuY2xhc3NOYW1lID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICYmIGNoaWxkLmNsYXNzTmFtZS5pbmRleE9mKCdjZGstb3ZlcmxheS1wYW5lJykgPj0gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkLmNoaWxkTm9kZXNbaV07XHJcbiAgICAgICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ0NNQUNTLU1PREFMJykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfTtcclxuICAgICAgY2hpbGQgPSBjaGlsZC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGUoJGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsKSB7XHJcbiAgICBpZiAoJGV2ZW50LmtleSA9PT0gKCdFbnRlcicgfHwgJ2VudGVyJykpIHtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICB0aGlzLnJvd09uRWRpdGlvbiA9IC0xO1xyXG4gICAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgICAgZGF0YS5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICAgIHRoaXMub25lZGl0LmVtaXQoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGF0YVtpbmRleF0uY21hY3NFZGl0ZWRQcm9wID0gdGhpcy5wcm9wZXJ0eTtcclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbaW5kZXhdKTtcclxuICAgICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlT25FZGl0aW9uID0gZGF0YTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSBpbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZEVkaXRNb2RlTmdNb2RlbChpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsLCBwcm9wZXJ0eTogYW55ID0gbnVsbCwgZmllbGQ6IEZpZWxkID0gbnVsbCkge1xyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICBkYXRhLmNtYWNzRWRpdGVkUHJvcCA9IHByb3BlcnR5ID8gcHJvcGVydHkgOiB0aGlzLnByb3BlcnR5O1xyXG4gICAgICBpZiAoZmllbGQgJiYgZmllbGQubW9kZSA9PT0gJ3RhZ3NTaW5nbGVTZWxlY3QnKSB7XHJcbiAgICAgICAgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPSBkYXRhW2ZpZWxkLnByb3BlcnR5XS5sZW5ndGggPyBkYXRhW2ZpZWxkLnByb3BlcnR5XVswXSA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdChkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFbaW5kZXhdO1xyXG4gICAgICBkYXRhLmNtYWNzRWRpdGVkUHJvcCA9IHByb3BlcnR5ID8gcHJvcGVydHkgOiB0aGlzLnByb3BlcnR5O1xyXG4gICAgICBpZiAoZmllbGQgJiYgZmllbGQubW9kZSA9PT0gJ3RhZ3NTaW5nbGVTZWxlY3QnKSB7XHJcbiAgICAgICAgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPSBkYXRhW2ZpZWxkLnByb3BlcnR5XS5sZW5ndGggPyBkYXRhW2ZpZWxkLnByb3BlcnR5XVswXSA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbaW5kZXhdKTtcclxuICAgIH1cclxuICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgIHRoaXMucHJvcGVydHkgPSBudWxsO1xyXG4gICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgIHRoaXMubm9kZU9uRWRpdGlvbiA9IG51bGw7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdNb2RlbENoYW5nZShpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsKSB7XHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIHRoaXMubm9kZU9uRWRpdGlvbiA9IGRhdGE7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucm93T25FZGl0aW9uID0gaW5kZXg7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleChpZCk6IG51bWJlciB7XHJcbiAgICBsZXQgaSA9IC0xO1xyXG4gICAgaSA9IHRoaXMuY2hlY2tib3hDYWNoZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGlkKTtcclxuICAgIHJldHVybiBpO1xyXG4gIH1cclxuXHJcbiAgb3JkZXIgPSAwO1xyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjaGVja2JveFRlbXBDYWNoZSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2hlY2tib3hUZW1wQ2FjaGUucHVzaCh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkID8gZmFsc2UgOiB0aGlzLmRhdGFbaV0uc2VsZWN0ZWQsXHJcbiAgICAgICAgZGF0YTogeyAuLi50aGlzLmRhdGFbaV0gfSxcclxuICAgICAgICBvcmRlcjogdGhpcy5kYXRhW2ldLnNlbGVjdGVkID8gdGhpcy5vcmRlcisrIDogLTFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUgPSBbLi4uY2hlY2tib3hUZW1wQ2FjaGVdO1xyXG4gICAgaWYgKHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkKSB7XHJcbiAgICAgIHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2JveENhY2hlVHJlZURhdGEoKSB7XHJcbiAgICB0aGlzLmNvbnZlcnRFeHBhbmRUcmVlVG9MaXN0KHRoaXMuZGF0YSwgdGhpcy5jaGVja2JveENhY2hlKTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRFeHBhbmRUcmVlVG9MaXN0KGl0ZW06IGFueSwgcGxhaW5MaXN0OiBhbnlbXSkge1xyXG4gICAgaWYgKGlzQXJyYXkoaXRlbSkpIHtcclxuICAgICAgaXRlbS5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgIGxldCBlbGVtZW50SW5DYWNoZSA9IHBsYWluTGlzdC5maW5kSW5kZXgoZWwgPT4gZWwuZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gZWxlbVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRJbkNhY2hlIDwgMCkge1xyXG4gICAgICAgICAgcGxhaW5MaXN0LnB1c2goe1xyXG4gICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIG9yZGVyOiAtMSxcclxuICAgICAgICAgICAgZGF0YTogeyAuLi5lbGVtIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsZW0uY2hpbGRyZW4gJiYgZWxlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnZlcnRFeHBhbmRUcmVlVG9MaXN0KGVsZW0uY2hpbGRyZW4sIHBsYWluTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBlbGVtZW50SW5DYWNoZSA9IHBsYWluTGlzdC5maW5kSW5kZXgoZWwgPT4gZWwuZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gaXRlbVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICAgIGlmIChlbGVtZW50SW5DYWNoZSA8IDApIHtcclxuICAgICAgICBwbGFpbkxpc3QucHVzaCh7XHJcbiAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICBvcmRlcjogLTEsXHJcbiAgICAgICAgICBkYXRhOiB7IC4uLml0ZW0gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJ1dHRvbkNsaWNrKGZpZWxkOiBhbnkpIHtcclxuICAgIHRoaXMuYnV0dG9uQ2xpY2suZW1pdChmaWVsZCk7XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94Q2hhbmdlKCRldmVudCwgZGF0YSkge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlW3RoaXMuZ2V0SW5kZXgoZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSldLm9yZGVyID0gJGV2ZW50ID8gdGhpcy5vcmRlcisrIDogLTE7XHJcbiAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoQ2hlY2tib3hTdGF0ZShvbmluaXQgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgZGF0YVNlbGVjdGVkID0gdGhpcy5jaGVja0NoZWNrYm94U3RhdGUoKTtcclxuICAgIGlmICghb25pbml0KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoZGF0YVNlbGVjdGVkLm1hcChpdGVtID0+IGl0ZW0uZGF0YSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tDaGVja2JveFN0YXRlKCkge1xyXG4gICAgY29uc3QgZGF0YVNlbGVjdGVkID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQgPT09IHRydWUpLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmFsbENoZWNrZWQgPSAoZGF0YVNlbGVjdGVkLmxlbmd0aCA+IDAgJiYgKGRhdGFTZWxlY3RlZC5sZW5ndGggPT09IHRoaXMuY2hlY2tib3hDYWNoZS5sZW5ndGgpKTtcclxuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gZGF0YVNlbGVjdGVkLmxlbmd0aCA+IDAgJiYgIXRoaXMuYWxsQ2hlY2tlZDtcclxuICAgIHJldHVybiBkYXRhU2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gIG9uUmF0ZUNoYW5nZShjb3VudDogbnVtYmVyLCBkYXRhOiBhbnkpIHtcclxuICAgIGRhdGFbdGhpcy5jb25maWcuZmllbGRSYXRlXSA9IGNvdW50O1xyXG4gICAgdGhpcy5yYXRlQ2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBvblJhdGVDbGljayhldmVudDogYW55KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZHMoKTogRmllbGRbXSB7XHJcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuZmllbGRzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5oaWRkZW4gPT09IHVuZGVmaW5lZCB8fCAhaXRlbS5oaWRkZW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveEFsbENoYW5nZShzdGF0dXM6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBlbGVtZW50LnNlbGVjdGVkID0gc3RhdHVzO1xyXG4gICAgICBlbGVtZW50Lm9yZGVyID0gLTE7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKCF0aGlzLmV4Y2x1c2l2ZVNlbGVjdCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KChzdGF0dXMpID8gdGhpcy5kYXRhIDogW10pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZGF0YVNlbGVjdGVkID0gdGhpcy5jaGVja2JveENhY2hlLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCgoc3RhdHVzKSA/IGRhdGFTZWxlY3RlZC5tYXAoZSA9PiBlLmRhdGEpIDogW10pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbChkYXRhOiBhbnksIGZpZWxkOiBGaWVsZCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0ICYmIGZpZWxkLnNlbGVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgY29uc3QgaXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQoaXRlbSA9PiBpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbVtmaWVsZC5zZWxlY3QudmFsdWVdID09PSBkYXRhW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICAgIHJlc3VsdCA9IChpdGVtICE9PSB1bmRlZmluZWQpID8gaXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdIDogJyc7XHJcbiAgICAgIGlmIChmaWVsZC5tb2RlID09PSAndGFnc1NpbmdsZVNlbGVjdCcgJiYgcmVzdWx0ID09PSAnJykge1xyXG4gICAgICAgIHJlc3VsdCA9IGRhdGFbZmllbGQucHJvcGVydHldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gIH1cclxuXHJcbiAgaXNTdHJpbmcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQucmVhZG9ubHkgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5yZWFkb25seTtcclxuICB9XHJcblxyXG4gIGlzTnVtYmVyKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgaXNOdWxsKHZhbHVlOiBhbnkpIHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaXNCb29sZWFuKGZpZWxkOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgfVxyXG5cclxuICBpc09iamVjdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgKHZhbHVlKSA9PT0gJ29iamVjdCc7XHJcbiAgfVxyXG5cclxuICBpc0RhdGUoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gIH1cclxuXHJcbiAgaXNUaW1lKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVEZWZhdWx0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlQnV0dG9uKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkJ1dHRvbjtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUYWcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGFnO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRlbXBsYXRlUmVmKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcblxyXG4gIGlzVW5kZWZpbmVkKHZhbHVlOiBhbnkpIHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaXNSb3dTZWxlY3RlZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICBjb25zdCBkYXRhU2VsZWN0ZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICByZXR1cm4gZGF0YVNlbGVjdGQuaW5kZXhPZihkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSAhPT0gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgZXhjZWxTZXJ2aWNlOiBFeGNlbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSxcclxuICAgIHByaXZhdGUgbnpEcm9wZG93blNlcnZpY2U6IENtYWNzQ29udGV4dE1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb29raWVzOiBDb29raWVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2VcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmdldEluZGV4Q29va2llKCkgJiYgdGhpcy5jb29raWVzLmNoZWNrKHRoaXMuZ3JpZElEKSkge1xyXG4gICAgICBjb25zdCBzYXZlZENvbmZpZ1N0ciA9IHRoaXMuY29va2llcy5nZXQodGhpcy5ncmlkSUQpO1xyXG4gICAgICAvLyByZXNldCBleHBpcmF0aW9uIGRhdGVcclxuICAgICAgdGhpcy5jb29raWVzLnNldCh0aGlzLmdyaWRJRCwgc2F2ZWRDb25maWdTdHIsIDM2NSk7XHJcblxyXG4gICAgICAvLyBwYXJzZSBjb29raWUgdmFsdWUgdG8gdHlwZXNjcmlwdCBjb25zdFxyXG4gICAgICBjb25zdCBzYXZlZENvbmZpZyA9IEpTT04ucGFyc2UodGhpcy5jb29raWVzLmdldCh0aGlzLmdyaWRJRCkpIGFzIEdyaWRDb25maWc7XHJcbiAgICAgIGlmICh0eXBlb2Ygc2F2ZWRDb25maWcgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHNhdmVkQ29uZmlnO1xyXG4gICAgICAgIHRoaXMuY29uZmlnQ2hhbmdlLmVtaXQodGhpcy5jb25maWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmRpc2FibGVTZWxlY3RFdmVudE9uRXhwYW5kKCk7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlU2VsZWN0RXZlbnRPbkV4cGFuZCgpIHtcclxuICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FudC10YWJsZS1yb3ctZXhwYW5kLWljb24nKTtcclxuICAgIGlmICghdGhpcy5pc051bGwoZXhwYW5kQnV0dG9uKSkge1xyXG4gICAgICBmb3IgKGxldCBiIG9mIEFycmF5LmZyb20oZXhwYW5kQnV0dG9uKSkge1xyXG4gICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgkZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KCRldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gICAgICBcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGdldEluZGV4Q29va2llKCkge1xyXG4gICAgbGV0IGFsbG93SW5kZXhQYWdlQ29va2llID0gZmFsc2U7XHJcbiAgICBsZXQgY29uc2VudENvb2tpZSA9IHRoaXMuY29va2llcy5nZXQoJ09wdGFub25Db25zZW50Jyk7XHJcbiAgICBpZiAoY29uc2VudENvb2tpZSAhPSBcIlwiKSB7XHJcbiAgICAgIGxldCBncm91cEluZGV4ID0gY29uc2VudENvb2tpZS5pbmRleE9mKCdncm91cHM9Jyk7XHJcbiAgICAgIGxldCBncm91cHMgPSBjb25zZW50Q29va2llLnN1YnN0cmluZyhncm91cEluZGV4KTsgLy93aWxsIHJldHVybiBzb21ldGhpbmdsaWtlIGdyb3Vwcz1DMDAwMjowLEMwMDAxOjFcclxuICAgICAgbGV0IGZ1bmN0aW9uYWxHcm91cEluZGV4ID0gZ3JvdXBzLmluZGV4T2YoJ0MwMDA5OicpO1xyXG4gICAgICBpZiAoZnVuY3Rpb25hbEdyb3VwSW5kZXggIT0gLTEpIHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeVZhbHVlID0gZ3JvdXBzLnN1YnN0cmluZyhmdW5jdGlvbmFsR3JvdXBJbmRleCArIDYsIGZ1bmN0aW9uYWxHcm91cEluZGV4ICsgNyk7XHJcbiAgICAgICAgaWYgKE51bWJlcihjYXRlZ29yeVZhbHVlKSA9PT0gMSkge1xyXG4gICAgICAgICAgYWxsb3dJbmRleFBhZ2VDb29raWUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFsbG93SW5kZXhQYWdlQ29va2llO1xyXG4gIH1cclxuXHJcbiAgc2V0RmllbGRzRGVmYXVsdCgpIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5maWVsZHMpIHtcclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGZpZWxkLmVkaXRhYmxlID0gZmllbGQuZWRpdGFibGUgPT09IG51bGwgfHwgZmllbGQuZWRpdGFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmaWVsZC5lZGl0YWJsZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5ncmlkSUQpIHtcclxuICAgICAgdGhpcy5ncmlkSUQgPSB0aGlzLnV0aWxTZXJ2aWNlLnV1aWR2NCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0RmllbGRzRGVmYXVsdCgpO1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGFibGUnKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5jaGVja2JveFNlbGVjdCAmJiAhdGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrYm94U2VsZWN0ICYmIHRoaXMuZXhwYW5kYWJsZSAmJiB0aGlzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGVUcmVlRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hlY2tDaGVja2JveFN0YXRlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlICYmIHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHdoaWxlICh0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dQYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5leHBvcnRFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChjb25maWc6IEdyaWRFeHBDb25maWcpID0+IHtcclxuICAgICAgc3dpdGNoIChjb25maWcuZXhwb3J0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5QZGY6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvUGRmKGNvbmZpZyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuWHNseDpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9FeGNlbChjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlBuZzpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9QbmcoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5QZGZUcmVlOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUcmVlUGRmKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuWHNseFRyZWU6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRyZWVFeGNlbChjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qIENvbnZlcnQgdHJlZSB0byBsaXN0IGlmIGV4cGFuZGFibGUgKi9cclxuICAgIGlmICh0aGlzLmV4cGFuZGFibGUgJiYgdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhpcy5maWVsZElEID0gdGhpcy5jb25maWcuZmllbGRJZDtcclxuICAgICAgY29uc3QgY29lcmNlRGF0YSA9IHRoaXMuZGF0YSBhcyBhbnlbXTtcclxuICAgICAgY29lcmNlRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHRoaXMubWFwT2ZFeHBhbmRlZERhdGFbaXRlbVt0aGlzLmZpZWxkSURdXSA9IHRoaXMuY29udmVydFRyZWVUb0xpc3QoaXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0Q29tcGxldGVkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydENvbXBsZXRlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgICB0aGlzLm1hcE9mRXhwYW5kZWREYXRhID0ge307XHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGUgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZVRyZWVEYXRhKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZmllbGRJRCA9IHRoaXMuY29uZmlnLmZpZWxkSWQ7XHJcbiAgICAgICAgY29uc3QgY29lcmNlRGF0YSA9IHRoaXMuZGF0YSBhcyBhbnlbXTtcclxuICAgICAgICBjb2VyY2VEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGlzLm1hcE9mRXhwYW5kZWREYXRhW2l0ZW1bdGhpcy5maWVsZElEXV0pIHtcclxuICAgICAgICAgICAgdGhpcy5tYXBPZkV4cGFuZGVkRGF0YVtpdGVtW3RoaXMuZmllbGRJRF1dID0gdGhpcy5jb252ZXJ0VHJlZVRvTGlzdChpdGVtKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSgpO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLnNldEZpZWxkc0RlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuZGlzYWJsZVNlbGVjdEV2ZW50T25FeHBhbmQoKTtcclxuICB9XHJcblxyXG4gIC8qIGdldFRyZWVOb2RlQnlLZXkobm9kZTogYW55LCBrZXk6IGFueSkge1xyXG4gICAgIGNvbnNvbGUubG9nKG5vZGUpXHJcbiAgICAgaWYgKGlzQXJyYXkobm9kZSkpIHtcclxuICAgICAgIG5vZGUuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgIHRoaXMuZ2V0VHJlZU5vZGVCeUtleShlbCwga2V5KTtcclxuICAgICAgIH0pXHJcbiAgICAgfSBlbHNlIGlmIChub2RlW3RoaXMuZmllbGRJRF0gPT09IGtleSkge1xyXG4gICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgfSBlbHNlIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICB0aGlzLmdldFRyZWVOb2RlQnlLZXkoZWwsIGtleSk7XHJcbiAgICAgICB9KVxyXG4gICAgIH1cclxuICAgfSovXHJcblxyXG4gIC8qIEV4cGFuZGFibGUgUm93cyAqL1xyXG4gIGV4cG9ydFRyZWVQZGYoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZG9jID0gbmV3IGpzUERGKCk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gW107XHJcbiAgICBjb25zdCByb3dzID0gW107XHJcblxyXG4gICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb2x1bW5zLnB1c2goZmllbGQuZGlzcGxheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb2x1bW5zLnB1c2goZmllbGQuZGlzcGxheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmV4cG9ydFRyZWVUb1BkZlJlYyhyb3dzLCB0aGlzLmRhdGEsIDApO1xyXG5cclxuICAgIC8qZG9jLmF1dG9UYWJsZSh7XHJcbiAgICAgIHRoZW1lOiAnc3RyaXBlZCcsXHJcbiAgICAgIG1hcmdpbjogeyB0b3A6IDUgfSxcclxuICAgICAgYm9keTogcm93cyxcclxuICAgICAgY29sdW1uc1xyXG4gICAgfSk7Ki9cclxuXHJcbiAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyBmaWxlTmFtZSArICcucGRmJztcclxuICAgIGRvYy5zYXZlKGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRyZWVUb1BkZlJlYyhyb3dzOiBhbnksIGRhdGE6IGFueSwgb2ZmU2V0TWFyZ2luID0gMCkge1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0gW107XHJcbiAgICAgIGNvbnN0IGNvZXJjZWRJdGVtID0gaXRlbSBhcyBhbnk7XHJcbiAgICAgIGxldCBwYXJlbnRTdHlsZXM6IGFueSA9IHsgY2VsbFBhZGRpbmc6IFsyLCAyLCAyLCAyXSB9O1xyXG5cclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCB8fCBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikuZm9yRWFjaCgoZmllbGQsIGlkeCkgPT4ge1xyXG5cclxuICAgICAgICBwYXJlbnRTdHlsZXMgPSB7IGNlbGxQYWRkaW5nOiBbMiwgMiwgMiwgMl0gfTtcclxuICAgICAgICBpZiAoIWlkeCkge1xyXG4gICAgICAgICAgcGFyZW50U3R5bGVzLmNlbGxQYWRkaW5nID0gWzIsIDIsIDIsIDIgKyBvZmZTZXRNYXJnaW5dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvZXJjZWRJdGVtLmNoaWxkcmVuICYmIGNvZXJjZWRJdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgcGFyZW50U3R5bGVzLmZpbGxDb2xvciA9IFsxNTMsIDIwNCwgMjU1XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goeyBjb250ZW50OiBpdGVtW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0LmV4cG9ydFZhbHVlLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3dpdGNoIChmaWVsZC5lZGl0VGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU2VsZWN0OlxyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0SXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7IGNvbnRlbnQ6IHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXSwgc3R5bGVzOiBwYXJlbnRTdHlsZXMgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOlxyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHsgY29udGVudDogdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oaXRlbVtmaWVsZC5wcm9wZXJ0eV0sICdNTU1NIGRkIHl5eXknKSwgc3R5bGVzOiBwYXJlbnRTdHlsZXMgfSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlRpbWU6XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goeyBjb250ZW50OiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShpdGVtW2ZpZWxkLnByb3BlcnR5XSwgJ2g6bW0gYScpLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7IGNvbnRlbnQ6IGl0ZW1bZmllbGQucHJvcGVydHldLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJvd3MucHVzaChpdGVtVG9FeHBvcnQpO1xyXG4gICAgICBpZiAoY29lcmNlZEl0ZW0uY2hpbGRyZW4gJiYgY29lcmNlZEl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5leHBvcnRUcmVlVG9QZGZSZWMocm93cywgY29lcmNlZEl0ZW0uY2hpbGRyZW4sIDUgKyBvZmZTZXRNYXJnaW4pO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0VHJlZVRvTGlzdChyb290OiBhbnkpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBzdGFjazogYW55W10gPSBbXTtcclxuICAgIGNvbnN0IGFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgaGFzaE1hcCA9IHt9O1xyXG4gICAgc3RhY2sucHVzaCh7IC4uLnJvb3QsIGxldmVsOiAwLCBleHBhbmQ6IHRoaXMuZXhwYW5kQWxsID8gdGhpcy5leHBhbmRBbGwgOiByb290LmV4cGFuZCB9KTtcclxuXHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGFjay5wb3AoKTtcclxuICAgICAgdGhpcy52aXNpdE5vZGUobm9kZSwgaGFzaE1hcCwgYXJyYXkpO1xyXG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLi4ubm9kZS5jaGlsZHJlbltpXSxcclxuICAgICAgICAgICAgICBsZXZlbDogbm9kZS5sZXZlbCArIDEsXHJcbiAgICAgICAgICAgICAgZXhwYW5kOiB0aGlzLmV4cGFuZEFsbCA/IHRoaXMuZXhwYW5kQWxsIDogbm9kZS5jaGlsZHJlbltpXS5leHBhbmQsXHJcbiAgICAgICAgICAgICAgcGFyZW50OiBub2RlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG4gIHZpc2l0Tm9kZShub2RlOiBhbnksIGhhc2hNYXA6IGFueSwgYXJyYXk6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAoIWhhc2hNYXBbbm9kZVt0aGlzLmZpZWxkSURdXSkge1xyXG4gICAgICBoYXNoTWFwW25vZGVbdGhpcy5maWVsZElEXV0gPSB0cnVlO1xyXG4gICAgICBhcnJheS5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgRXhwYW5kQ29sbGFwc2UoYXJyYXk6IGFueVtdLCBkYXRhOiBhbnksICRldmVudDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCRldmVudCA9PT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5jb2xsYXBzZUNoaWxkcmVuKGFycmF5LGRhdGEsJGV2ZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMub25Sb3dFeHBhbmRDb2xsYXBzZS5lbWl0KHtkYXRhLCRldmVudH0pO1xyXG4gIH1cclxuICBjb2xsYXBzZUNoaWxkcmVuKGFycmF5OiBhbnlbXSwgZGF0YTogYW55LCAkZXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICgkZXZlbnQgPT09IGZhbHNlKSB7XHJcbiAgICAgIGlmIChkYXRhLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgZGF0YS5jaGlsZHJlbi5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gYXJyYXkuZmluZChhID0+IGFbdGhpcy5maWVsZElEXSA9PT0gZFt0aGlzLmZpZWxkSURdKSE7XHJcbiAgICAgICAgICB0YXJnZXQuZXhwYW5kID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmNvbGxhcHNlQ2hpbGRyZW4oYXJyYXksIHRhcmdldCwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveFRyZWVDaGFuZ2UoJGV2ZW50LCBpdGVtLCBzdWJ0cmVlID0gbnVsbCkge1xyXG4gICAgaWYgKCF0aGlzLmV4Y2x1c2l2ZVNlbGVjdCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVRyZWVDaGVja2JveGVzKCRldmVudCwgaXRlbSk7XHJcbiAgICAgIGNvbnN0IGNvZXJjZWRFbGVtID0gc3VidHJlZS5maW5kKGUgPT4gZVt0aGlzLmZpZWxkSURdID09PSBpdGVtW3RoaXMuZmllbGRJRF0pO1xyXG4gICAgICBpZiAoY29lcmNlZEVsZW0ucGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoU3ViVHJlZUNoZWNrYm94ZXMoY29lcmNlZEVsZW0ucGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUcmVlQ2hlY2tib3hlcygkZXZlbnQ6IGJvb2xlYW4sIGFycmF5OiBhbnkpIHtcclxuICAgIGFycmF5LnNlbGVjdGVkID0gJGV2ZW50O1xyXG4gICAgY29uc3Qgbm9kZTogQ2hlY2tib3hTZWxlY3QgPSB0aGlzLmdldE5vZGUoYXJyYXlbdGhpcy5maWVsZElEXSk7XHJcbiAgICBub2RlLnNlbGVjdGVkID0gJGV2ZW50O1xyXG4gICAgbm9kZS5vcmRlciA9ICRldmVudCA/IHRoaXMub3JkZXIrKyA6IC0xO1xyXG4gICAgaWYgKGFycmF5LmNoaWxkcmVuISEpIHtcclxuICAgICAgYXJyYXkuY2hpbGRyZW4uZm9yRWFjaCgoZDogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUcmVlQ2hlY2tib3hlcygkZXZlbnQsIGQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZnJlc2hTdWJUcmVlQ2hlY2tib3hlcyhzdWJ0cmVlKSB7XHJcbiAgICBpZiAoc3VidHJlZS5jaGlsZHJlbiEhKSB7XHJcbiAgICAgIGxldCBjaGVja2VkID0gMDtcclxuICAgICAgbGV0IGluZGV0ZXJtaW5hdGUgPSAwO1xyXG4gICAgICBmb3IgKGxldCBjaGlsZCBvZiBzdWJ0cmVlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZTogQ2hlY2tib3hTZWxlY3QgPSB0aGlzLmdldE5vZGUoY2hpbGRbdGhpcy5maWVsZElEXSk7XHJcbiAgICAgICAgaWYgKG5vZGUuc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgIGNoZWNrZWQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vZGUuc2VsZWN0ZWQgPT09IC0xKSB7XHJcbiAgICAgICAgICBpbmRldGVybWluYXRlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG5vZGU6IENoZWNrYm94U2VsZWN0ID0gdGhpcy5nZXROb2RlKHN1YnRyZWVbdGhpcy5maWVsZElEXSk7XHJcbiAgICAgIG5vZGUuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgaWYgKGluZGV0ZXJtaW5hdGUgfHwgKGNoZWNrZWQgPCBzdWJ0cmVlLmNoaWxkcmVuLmxlbmd0aCAmJiBjaGVja2VkKSkge1xyXG4gICAgICAgIG5vZGUuc2VsZWN0ZWQgPSAtMTtcclxuICAgICAgfSBlbHNlIGlmIChjaGVja2VkID09PSBzdWJ0cmVlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIG5vZGUuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiAgICBpZiAoc3VidHJlZS5wYXJlbnQpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoU3ViVHJlZUNoZWNrYm94ZXMoc3VidHJlZS5wYXJlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Tm9kZShrZXk6IGFueSkge1xyXG4gICAgbGV0IHRlc3QgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKG4gPT4gbi5kYXRhW3RoaXMuZmllbGRJRF0gPT09IGtleSk7XHJcbiAgICByZXR1cm4gdGVzdCA/IHRlc3RbMF0gOiB7IHNlbGVjdGVkOiBmYWxzZSwgZGF0YTogbnVsbCB9O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VG9QbmcoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0VGFibGUoJ3BuZycsIGZpbGVOYW1lLCB0aGlzLmdyaWRJRCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb0V4Y2VsKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCBkYXRhVG9FeHBvcnQ6IGFueVtdID0gW107XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IHt9O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoIWZpZWxkLmhpZGRlbikge1xyXG4gICAgICAgICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RJdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChvcHRpb24gPT4gb3B0aW9uW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldLmNvbnRleHQuZXhwb3J0VmFsdWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBpdGVtW2ZpZWxkLnByb3BlcnR5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGF0YVRvRXhwb3J0LnB1c2goaXRlbVRvRXhwb3J0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KFwiREQuTU0uWVlZWS5ISC5tbS5zc1wiKSArICdfJyArIGZpbGVOYW1lO1xyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0QXNFeGNlbEZpbGUoZGF0YVRvRXhwb3J0LCBmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgfVxyXG5cclxuICAvKiBFeHBhbmRhYmxlIFJvd3MgKi9cclxuICBleHBvcnRUcmVlRXhjZWwoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0YVRvRXhwb3J0OiBhbnlbXSA9IFtdO1xyXG4gICAgdGhpcy5leHBvcnRUcmVlRXhjZWxSZWModGhpcy5kYXRhLCBkYXRhVG9FeHBvcnQpO1xyXG4gICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJERC5NTS5ZWVlZLkhILm1tLnNzXCIpICsgJ18nICsgZmlsZU5hbWU7XHJcbiAgICB0aGlzLmV4Y2VsU2VydmljZS5leHBvcnRBc0V4Y2VsRmlsZShkYXRhVG9FeHBvcnQsIGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRyZWVFeGNlbFJlYyhkYXRhOiBhbnksIGRhdGFUb0V4cG9ydDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBpdGVtVG9FeHBvcnQgPSB7fTtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCB8fCBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgaWYgKCFmaWVsZC5oaWRkZW4pIHtcclxuICAgICAgICAgIGlmIChmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpIHtcclxuICAgICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dC5leHBvcnRWYWx1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3QpIHtcclxuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RJdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChvcHRpb24gPT4gb3B0aW9uW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdEl0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gc2VsZWN0SXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBpdGVtW2ZpZWxkLnByb3BlcnR5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkYXRhVG9FeHBvcnQucHVzaChpdGVtVG9FeHBvcnQpO1xyXG5cclxuICAgICAgY29uc3QgY29lcmNlZEl0ZW0gPSBpdGVtIGFzIGFueTtcclxuICAgICAgaWYgKGNvZXJjZWRJdGVtLmNoaWxkcmVuICYmIGNvZXJjZWRJdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuZXhwb3J0VHJlZUV4Y2VsUmVjKGNvZXJjZWRJdGVtLmNoaWxkcmVuLCBkYXRhVG9FeHBvcnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgZXhwb3J0VG9QZGYoY29uZmlnKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgaWYgKCFjb25maWcudXNlVmVyc2lvbjIpIHtcclxuICAgICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRUYWJsZShcclxuICAgICAgICAncGRmJyxcclxuICAgICAgICBjb25maWcuZmlsZU5hbWUsXHJcbiAgICAgICAgdGhpcy5ncmlkSUQsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydENvbXBhbnlOYW1lLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRVc2VyTmFtZSxcclxuICAgICAgICBjb25maWcuZXhwb3J0VGl0bGUsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRUYWJsZUN1c3RvbUhlaWdodFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZXhwb3J0Q29uZmlnID0ge1xyXG4gICAgICAgIGNoZWNrYm94U2VsZWN0OiB0aGlzLmNoZWNrYm94U2VsZWN0LFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbXM6IHRoaXMuY2hlY2tib3hTZWxlY3QgPyB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSA6IFtdLFxyXG4gICAgICAgIGZpbGVOYW1lOiBjb25maWcuZmlsZU5hbWUsXHJcbiAgICAgICAgZGF0ZVBpcGU6IHRoaXMuZGF0ZVBpcGUsXHJcbiAgICAgICAgZGF0YTogdGhpcy5kYXRhLFxyXG4gICAgICAgIGVsZW1JRDogdGhpcy5ncmlkSUQsXHJcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcclxuICAgICAgICBjb2x1bW5TdHlsZXM6IGNvbmZpZy5jb2x1bW5TdHlsZXMsXHJcbiAgICAgICAgZXhwb3J0Q29tcGFueU5hbWU6IGNvbmZpZy5leHBvcnRDb21wYW55TmFtZSxcclxuICAgICAgICBleHBvcnRVc2VyTmFtZTogY29uZmlnLmV4cG9ydFVzZXJOYW1lLFxyXG4gICAgICAgIGV4cG9ydFRpdGxlOiBjb25maWcuZXhwb3J0VGl0bGUsXHJcbiAgICAgICAgZXhwb3J0Q29tcGFueUxvZ29Vcmw6IGNvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybCA/IGNvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybCA6ICdhc3NldHMvUFRvQl9sb2dvLnBuZycsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0VGFibGV2MihcclxuICAgICAgICBleHBvcnRDb25maWdcclxuICAgICAgKTtcclxuICAgIH0gICAgXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tzID0gMDtcclxuICBjbGlja1JvdyhldmVudDogTW91c2VFdmVudCwgZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLmNsaWNrcysrO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICBpZiAodGhpcy5jbGlja3MgPT09IDEpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdFJvdyhldmVudCwgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID4gMSkge1xyXG4gICAgICAgIHRoaXMuZGJsQ2xpY2tSb3coZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbGlja3MgPSAwO1xyXG4gICAgfSwgMzAwKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhldmVudDogTW91c2VFdmVudCwgZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm9uY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICAgIC8qIEdldCBpbmRleCBvZiBzZWxlY3Rpb24gKi9cclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja2JveENhY2hlLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tib3hTZWxlY3QpIHtcclxuICAgICAgaWYgKGV2ZW50ICYmICh0b0Jvb2xlYW4oZXZlbnQuY3RybEtleSkgfHwgdG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSkpIHtcclxuICAgICAgICAvKiBTaGlmdCBTZWxlY3Rpb24gKi9cclxuICAgICAgICBpZiAodG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RNdWx0aXBsZShpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0aW9uKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFNlbGVjdCBlbGVtZW50ICovXHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkID0gZXZlbnQgJiYgdG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSA/IHRydWUgOiAhdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZDtcclxuICAgICAgICAvKiBTYXZlIGxhc3QgaW5kZXggc2VsZWN0ZWQgKi9cclxuICAgICAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPyBpbmRleCA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKTtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5vcmRlciA9IHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPyB0aGlzLm9yZGVyKysgOiAtMTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChzZWxlY3RlZEl0ZW1zLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGEpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGlvbihkYXRhKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCAmJiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gIT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pXHJcbiAgICAgIC5mb3JFYWNoKGVsZW0gPT4geyBlbGVtLnNlbGVjdGVkID0gZmFsc2U7IGVsZW0ub3JkZXIgPSAtMSB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdE11bHRpcGxlKGN1cnJlbnRJZHgpIHtcclxuICAgIGlmICh0aGlzLmxhc3RJZHhTZWxlY3RlZCAhPT0gbnVsbCkge1xyXG4gICAgICB3aGlsZSAoY3VycmVudElkeCAhPT0gdGhpcy5sYXN0SWR4U2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5sYXN0SWR4U2VsZWN0ZWRdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5sYXN0SWR4U2VsZWN0ZWRdLm9yZGVyID0gdGhpcy5vcmRlcisrO1xyXG4gICAgICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gY3VycmVudElkeCA+IHRoaXMubGFzdElkeFNlbGVjdGVkID8gdGhpcy5sYXN0SWR4U2VsZWN0ZWQgKyAxIDogdGhpcy5sYXN0SWR4U2VsZWN0ZWQgLSAxO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbY3VycmVudElkeF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbY3VycmVudElkeF0ub3JkZXIgPSB0aGlzLm9yZGVyKys7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IGN1cnJlbnRJZHg7XHJcbiAgfVxyXG5cclxuICBkYmxDbGlja1JvdyhkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMub25kbGNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICB0YXBDb3VudCA9IDA7XHJcblxyXG4gIHRhcEhhbmRsZXIoJGV2ZW50LCBkYXRhKSB7XHJcbiAgICB0aGlzLnRhcENvdW50ICs9IDE7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMudGFwQ291bnQgPT09IDEpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmNsaWNrUm93KG51bGwsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudGFwQ291bnQgPSAwO1xyXG4gICAgfSwgNjAwKTtcclxuICAgIGlmICh0aGlzLnRhcENvdW50ID4gMSkge1xyXG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kYmxDbGlja1JvdyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjbGlja0Jvb2xlYW5DZWxsKGRhdGE6IGFueSwgaWQ6IGFueSwgZmllbGQ6IEZpZWxkLCBpbmRleDogbnVtYmVyLCAkZXZlbnQ6IG51bGwpOiB2b2lkIHtcclxuICAgIGlmICgkZXZlbnQpIHtcclxuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgkZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZSkge1xyXG4gICAgICBpZiAoZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09IG51bGwgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGRhdGFbZmllbGQucHJvcGVydHldID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9IChkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gZmFsc2UgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09ICdmYWxzZScpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW5kRWRpdE1vZGVOZ01vZGVsKGluZGV4LCBkYXRhLCBmaWVsZC5wcm9wZXJ0eSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93Vmlld01vZGVUcGwoZmllbGQsIGl0ZW0pIHtcclxuICAgIGlmICghdGhpcy5pc051bGwoaXRlbS5oaWRkZW5GaWVsZHMpXHJcbiAgICAgICYmIGl0ZW0uaGlkZGVuRmllbGRzLmZpbHRlcih4ID0+IHggPT09IGZpZWxkLnByb3BlcnR5KS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnICYmICgodGhpcy5pc0Jvb2xlYW4oZmllbGQpICYmICF0aGlzLmluTGluZUVkaXQpIHx8ICghdGhpcy5pc0Jvb2xlYW4oZmllbGQpICYmICh0aGlzLmVkaXRJZCAhPT0gaXRlbVt0aGlzLmNvbmZpZy5maWVsZElkXSB8fCB0aGlzLnByb3BlcnR5ICE9PSBmaWVsZC5wcm9wZXJ0eSB8fCBmaWVsZC5lZGl0YWJsZSA9PT0gZmFsc2UpKSk7XHJcbiAgfVxyXG5cclxuICBzaG93Vmlld01vZGVUcGxUcmVlKGZpZWxkLCBkYXRhKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNOdWxsKGRhdGEuaGlkZGVuRmllbGRzKVxyXG4gICAgICAmJiBkYXRhLmhpZGRlbkZpZWxkcy5maWx0ZXIoeCA9PiB4ID09PSBmaWVsZC5wcm9wZXJ0eSkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiAoKHRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiAhdGhpcy5pbkxpbmVFZGl0KSB8fCAoIXRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiAodGhpcy5lZGl0SWQgIT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gfHwgdGhpcy5wcm9wZXJ0eSAhPT0gZmllbGQucHJvcGVydHkgfHwgZmllbGQuZWRpdGFibGUgPT09IGZhbHNlKSkpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0VkaXRUcGwoaXRlbSwgZmllbGQpIHtcclxuICAgIGlmICghdGhpcy5pc051bGwoaXRlbS5oaWRkZW5GaWVsZHMpXHJcbiAgICAgICYmIGl0ZW0uaGlkZGVuRmllbGRzLmZpbHRlcih4ID0+IHggPT09IGZpZWxkLnByb3BlcnR5KS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnICYmICgodGhpcy5pc0Jvb2xlYW4oZmllbGQpICYmIHRoaXMuaW5MaW5lRWRpdCAmJiAoZmllbGQuZWRpdGFibGUgfHwgZmllbGQuZWRpdGFibGUgPT09IHVuZGVmaW5lZCkpIHx8ICghdGhpcy5pc0Jvb2xlYW4oZmllbGQpICYmIHRoaXMuZWRpdElkID09PSBpdGVtW3RoaXMuY29uZmlnLmZpZWxkSWRdICYmIHRoaXMucHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIChmaWVsZC5lZGl0YWJsZSB8fCBmaWVsZC5lZGl0YWJsZSA9PT0gdW5kZWZpbmVkKSkpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0VkaXRUcGxUcmVlKGRhdGEsIGZpZWxkKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNOdWxsKGRhdGEuaGlkZGVuRmllbGRzKVxyXG4gICAgICAmJiBkYXRhLmhpZGRlbkZpZWxkcy5maWx0ZXIoeCA9PiB4ID09PSBmaWVsZC5wcm9wZXJ0eSkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiAoKHRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiB0aGlzLmluTGluZUVkaXQgJiYgKGZpZWxkLmVkaXRhYmxlIHx8IGZpZWxkLmVkaXRhYmxlID09PSB1bmRlZmluZWQpKSB8fCAoIXRoaXMuaXNCb29sZWFuKGZpZWxkKSAmJiB0aGlzLmVkaXRJZCA9PT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSAmJiB0aGlzLnByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiAoZmllbGQuZWRpdGFibGUgfHwgZmllbGQuZWRpdGFibGUgPT09IHVuZGVmaW5lZCkpKTtcclxuICB9XHJcblxyXG4gIGVtaXRPbkVkaXRFdmVudCgpIHtcclxuICAgIGlmICh0aGlzLnJvd09uRWRpdGlvbiA+PSAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YVt0aGlzLnJvd09uRWRpdGlvbl0uY21hY3NFZGl0ZWRQcm9wID0gdGhpcy5wcm9wZXJ0eTtcclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbdGhpcy5yb3dPbkVkaXRpb25dKTtcclxuICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubm9kZU9uRWRpdGlvbikge1xyXG4gICAgICB0aGlzLm5vZGVPbkVkaXRpb24uY21hY3NFZGl0ZWRQcm9wID0gdGhpcy5wcm9wZXJ0eTtcclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLm5vZGVPbkVkaXRpb24pO1xyXG4gICAgICB0aGlzLm5vZGVPbkVkaXRpb24gPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NNYXAoZmllbGQ6IEZpZWxkKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbYGNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGhgXTogdGhpcy5sb2dzLFxyXG4gICAgICBbYGNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udGBdOiB0aGlzLmxvZ3MsXHJcbiAgICAgIFtgJHtmaWVsZC5uZ0NsYXNzfWBdOiBmaWVsZC5uZ0NsYXNzICYmIGZpZWxkLm5nQ2xhc3MubGVuZ3RoXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VzdG9tQ2xhc3MoZmllbGQ6IEZpZWxkKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbYGNtYWNzLWNvbXBhY3QtdGFibGUtY2VsbC0ke2ZpZWxkLnByb3BlcnR5fWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0TWF4V2lkdGgoZmllbGQ6IEZpZWxkLCBpdGVtOiBhbnksIGk6IG51bWJlcikge1xyXG5cclxuICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgIWkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbkxpbmVFZGl0ID8gYGNhbGMoMTAwJSAtIDE3cHgpYCA6IGBjYWxjKDEwMCUgLSAke3RoaXMuZ2V0TWF4V2lkdGhGaWVsZFZpZXdNb2RlKGZpZWxkLCBpKX0pYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbkxpbmVFZGl0ID8gYGNhbGMoMTAwJSAtIDE3cHgpYCA6IGBjYWxjKDEwMCUgLSAke3RoaXMuZ2V0TWF4V2lkdGhGaWVsZFZpZXdNb2RlKGZpZWxkLCBpKX0pYDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmluTGluZUVkaXQgPyBgY2FsYygxMDAlIC0gMTdweClgIDogYGNhbGMoMTAwJSAtICR7dGhpcy5nZXRNYXhXaWR0aEZpZWxkVmlld01vZGUoZmllbGQsIGkpfSlgO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWF4V2lkdGhGaWVsZFZpZXdNb2RlKGZpZWxkOiBGaWVsZCwgaTogbnVtYmVyKSB7XHJcbiAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0IHx8XHJcbiAgICAgIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgfHxcclxuICAgICAgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuVGltZSB8fFxyXG4gICAgICBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5OdW1iZXIpIHtcclxuICAgICAgcmV0dXJuIGAxOHB4YDtcclxuICAgIH1cclxuICAgIHJldHVybiAnMHB4JztcclxuICB9XHJcblxyXG4gIGdldFN0aWNreVdpZHRoKHBvc2l0aW9uKSB7XHJcbiAgICBpZiAoIXRoaXMuc2Nyb2xsLngpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBsZXQgd2lkdGggPSAwO1xyXG4gICAgaWYgKHBvc2l0aW9uID09PSAnc21hcnRUYWJsZScpIHtcclxuICAgICAgcmV0dXJuIHdpZHRoICsgJ3B4JztcclxuICAgIH1cclxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ2RyYWdnYWJsZScpIHtcclxuICAgICAgd2lkdGggPSB0aGlzLnNtYXJ0VGFibGUgPyA0MCA6IDA7XHJcbiAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgICBpZiAocG9zaXRpb24gPT09ICdjaGVja2JveFNlbGVjdCcpIHtcclxuICAgICAgaWYgKHRoaXMuc21hcnRUYWJsZSkge1xyXG4gICAgICAgIHdpZHRoICs9IDQwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZSkge1xyXG4gICAgICAgIHdpZHRoICs9IDQwO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTdGlja3lXaWR0aFJpZ2h0KHBvc2l0aW9uKSB7XHJcbiAgICBpZiAoIXRoaXMuc2Nyb2xsLngpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBsZXQgd2lkdGggPSAwO1xyXG4gICAgaWYgKHBvc2l0aW9uID09PSAnc21hcnRUYWJsZScpIHtcclxuICAgICAgcmV0dXJuIHdpZHRoICsgJ3B4JztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmV4dHJhKSB7XHJcbiAgICAgIGlmICh0aGlzLnNtYXJ0VGFibGUpIHtcclxuICAgICAgICB3aWR0aCArPSA0MDtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9zaXRpb24gPT09ICdleHRyYScpIHtcclxuICAgICAgICByZXR1cm4gd2lkdGggKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUYWJsZUNvbXBvbmVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLm56VGFibGVDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm1EYXRlKGRhdGUpIHtcclxuICAgIGNvbnN0IG0gPSBtb21lbnQoZGF0ZSk7XHJcbiAgICBpZiAobS5pc1ZhbGlkKCkpIHtcclxuICAgICAgbS5sb2NhbGUodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSk7XHJcbiAgICAgIHJldHVybiBtLmZvcm1hdCh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ0RELk1NLllZWVknIDogJ01NL0REL1lZWVknKTtcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHNlbGVjdFRyZWVTaW5nbGUoaXRlbSkge1xyXG4gICAgaWYgKCF0aGlzLmNoZWNrYm94U2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uLnRvZ2dsZShpdGVtW3RoaXMuZmllbGRJRF0pO1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChpdGVtW3RoaXMuZmllbGRJRF0pKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChbaXRlbV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoW10pO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSBcclxuICB9XHJcbn1cclxuXHJcbiIsIjxkaXYgaWQ9XCJ7e2dyaWRJRH19XCI+XHJcbiAgPG56LXRhYmxlICNncmlkQ29tcG9uZW50IFtuekRhdGFdPVwiZGF0YVwiIFtuelNob3dUb3RhbF09XCJzaG93VG90YWxcIiBbbnpQYWdlU2l6ZU9wdGlvbnNdPVwicGFnZVNpemVPcHRpb25zXCJcclxuICAgICAgICAgICAgW256VmlydHVhbEl0ZW1TaXplXT1cInZpcnR1YWxJdGVtU2l6ZVwiIFtuekxvYWRpbmdEZWxheV09XCJsb2FkaW5nRGVsYXlcIiBbbnpWaXJ0dWFsTWF4QnVmZmVyUHhdPVwidmlydHVhbE1heEJ1ZmZlclB4XCJcclxuICAgICAgICAgICAgW256TG9hZGluZ0luZGljYXRvcl09XCJsb2FkaW5nSW5kaWNhdG9yXCIgW256VG90YWxdPVwidG90YWxcIiBbbnpUaXRsZV09XCJ0aXRsZVwiIFtuekZvb3Rlcl09XCJmb290ZXJcIlxyXG4gICAgICAgICAgICBbbnpOb1Jlc3VsdF09XCJub1Jlc3VsdFwiIFtueldpZHRoQ29uZmlnXT1cIndpZHRoQ29uZmlnXCIgW256UGFnZUluZGV4XT1cInBhZ2VJbmRleFwiIFtuelBhZ2VTaXplXT1cInBhZ2VTaXplXCJcclxuICAgICAgICAgICAgW256UGFnaW5hdGlvblBvc2l0aW9uXT1cInBhZ2luYXRpb25Qb3NpdGlvblwiIFtuelNjcm9sbF09XCJzY3JvbGxcIiBbbnpGcm9udFBhZ2luYXRpb25dPVwiZnJvbnRQYWdpbmF0aW9uXCJcclxuICAgICAgICAgICAgW256VGVtcGxhdGVNb2RlXT1cInRlbXBsYXRlTW9kZVwiIFtuelNob3dQYWdpbmF0aW9uXT1cInNob3dQYWdpbmF0aW9uXCIgW256TG9hZGluZ109XCJsb2FkaW5nXCJcclxuICAgICAgICAgICAgW256U2hvd1NpemVDaGFuZ2VyXT1cInNob3dTaXplQ2hhbmdlclwiIFtuekhpZGVPblNpbmdsZVBhZ2VdPVwiaGlkZU9uU2luZ2xlUGFnZVwiIFtuelNob3dRdWlja0p1bXBlcl09XCJzaG93UXVpY2tKdW1wZXJcIlxyXG4gICAgICAgICAgICBbbnpTaW1wbGVdPVwic2ltcGxlXCIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZXhwYW5kYWJsZV09XCJleHBhbmRhYmxlXCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc2Nyb2xsYWJsZS14XT1cInNjcm9sbC54ISFcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1zY3JvbGxhYmxlLXldPVwic2Nyb2xsLnkhIVwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVtcHR5LXRhYmxlXT1cIiFkYXRhLmxlbmd0aFwiPlxyXG4gICAgPHRoZWFkICpuZ0lmPVwiIWRhdGFUYWJsZVwiPlxyXG4gICAgICA8dHIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaGVhZGVyLWxvZ3NdPVwibG9nc1wiPlxyXG5cclxuICAgICAgICA8dGggKm5nSWY9XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXQgJiYgY29uZmlnICYmIGNvbmZpZy5maWVsZHMgJiYgY29uZmlnLmZpZWxkcy5sZW5ndGhcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICAgbnpXaWR0aD1cIjQwcHhcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCIgW3N0eWxlLm1heFdpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ3NtYXJ0VGFibGUnKVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctYWRkIGNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtYWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1hZGQtaWNvbiBpY29uVUlMYXJnZS1OZXdcIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtYWRkLXJvdy1pY29uLXZpc2libGVdPVwiIWdyaWRDb21wb25lbnQuZGF0YS5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgKGNsaWNrKT1cImFkZFJvdygtMSlcIj48L2k+XHJcbiAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgPHRoIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoXT1cImxvZ3NcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3NcIlxyXG4gICAgICAgICAgICAqbmdJZj1cImRyYWdnYWJsZVwiXHJcbiAgICAgICAgICAgIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2RyYWdnYWJsZScpXCJcclxuICAgICAgICAgICAgbnpXaWR0aD1cIjQwcHhcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICAgKm5nSWY9XCJjaGVja2JveFNlbGVjdFwiXHJcbiAgICAgICAgICAgIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2NoZWNrYm94U2VsZWN0JylcIlxyXG4gICAgICAgICAgICBueldpZHRoPVwiMzBweFwiXHJcbiAgICAgICAgICAgIG56TGVmdD1cIjBweFwiXHJcbiAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInMzBweCdcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiJzMwcHgnXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJzZWxlY3RlZFwiIFtpbmRldGVybWluYXRlXT1cImlzSW5kZXRlcm1pbmF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPW9uQ2hlY2tib3hBbGxDaGFuZ2UoJGV2ZW50KT48L2xhYmVsPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBmaVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaWVsZC5jdXN0b21GaWx0ZXI7IGVsc2UgdGhXaXRoRmlsdGVyc1wiPlxyXG4gICAgICAgICAgICA8dGggW256U2hvd1NvcnRdPVwiZmllbGQuc2hvd1NvcnRcIlxyXG4gICAgICAgICAgICAgICAgW256U2hvd0ZpbHRlcl09XCJmaWVsZC5zaG93RmlsdGVyXCJcclxuICAgICAgICAgICAgICAgIFtuekZpbHRlcnNdPVwiZmllbGQuZmlsdGVycyEhID8gZmllbGQuZmlsdGVycyA6IFtdXCJcclxuICAgICAgICAgICAgICAgIFtuekZpbHRlck11bHRpcGxlXT1cImZpZWxkLmZpbHRlck11bHRpcGxlXCJcclxuICAgICAgICAgICAgICAgIChuekZpbHRlckNoYW5nZSk9XCJmaWx0ZXIoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSlcIlxyXG4gICAgICAgICAgICAgICAgYXR0ci5pZD1cInt7Z3JpZElEfX0tY29sdW1uLXt7Zml9fVwiXHJcbiAgICAgICAgICAgICAgICBuei1yZXNpemFibGVcclxuICAgICAgICAgICAgICAgIFtuekRpc2FibGVkXT1cIiFmaWVsZC5yZXNpemFibGVcIlxyXG4gICAgICAgICAgICAgICAgbnpCb3VuZHM9XCJ3aW5kb3dcIlxyXG4gICAgICAgICAgICAgICAgW256TWluV2lkdGhdPVwiZmllbGQubWluV2lkdGggPyBmaWVsZC5taW5XaWR0aCA6IDEwMFwiXHJcbiAgICAgICAgICAgICAgICBbbnpNYXhXaWR0aF09XCJmaWVsZC5tYXhXaWR0aCA/IGZpZWxkLm1heFdpZHRoIDogNTAwXCJcclxuICAgICAgICAgICAgICAgIG56UHJldmlld1xyXG4gICAgICAgICAgICAgICAgKG56UmVzaXplRW5kKT1cIm9uUmVzaXplKCRldmVudCwgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImdldENsYXNzTWFwKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICBbKG56U29ydCldPVwiZmllbGQuc2hvd1NvcnQgPyBmaWVsZC5zb3J0T3JkZXIgOiBkZWZhdWx0U29ydE9yZGVyXCJcclxuICAgICAgICAgICAgICAgIChuelNvcnRPcmRlckNoYW5nZSk9XCJzb3J0KCRldmVudCwgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgICAgICAgIFtueldpZHRoXT1cImZpZWxkLndpZHRoXCJcclxuICAgICAgICAgICAgICAgIFtuekxlZnRdPVwiZmllbGQubGVmdCA/IGZpZWxkLmxlZnQgOiBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICBbbnpSaWdodF09XCJmaWVsZC5yaWdodCA/IGZpZWxkLnJpZ2h0IDogZmFsc2VcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWZpZWxkLnRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5tYXhXaWR0aF09XCJnZXRIZWFkZXJNYXhXaWR0aChmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICBhdHRyLmlkPVwie3tncmlkSUR9fS1jb2x1bW4te3tmaX19LXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgY21hY3MtdG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNFbGxpcHNpc0FjdGl2ZShncmlkSUQgKyAnLWNvbHVtbi0nICsgZmkgKyAnLXRpdGxlJywgZmllbGQpID8gZmllbGQuZGlzcGxheSA6IG51bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsLWhlYWRlcl09XCIhd3JhcExpbmVzXCI+e3tmaWVsZC5kaXNwbGF5fX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8ZGl2IFtpZF09XCJncmlkSUQgKyAnY29sdW1uJyArIGZpXCIgKm5nSWY9XCJmaWVsZC50ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJmaWVsZC50ZW1wbGF0ZS5yZWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiZmllbGQudGVtcGxhdGUuY29udGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPG56LXJlc2l6ZS1oYW5kbGUgbnpEaXJlY3Rpb249XCJyaWdodFwiICpuZ0lmPVwiZmllbGQucmVzaXphYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1yZXNpemUtdHJpZ2dlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbnotcmVzaXplLWhhbmRsZT5cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICN0aFdpdGhGaWx0ZXJzPlxyXG4gICAgICAgICAgICA8dGggW256U2hvd1NvcnRdPVwiZmllbGQuc2hvd1NvcnRcIlxyXG4gICAgICAgICAgICAgICAgbnpDdXN0b21GaWx0ZXJcclxuICAgICAgICAgICAgICAgIG56LXJlc2l6YWJsZVxyXG4gICAgICAgICAgICAgICAgbnpCb3VuZHM9XCJ3aW5kb3dcIlxyXG4gICAgICAgICAgICAgICAgbnpQcmV2aWV3XHJcbiAgICAgICAgICAgICAgICBbbnpEaXNhYmxlZF09XCIhZmllbGQucmVzaXphYmxlXCJcclxuICAgICAgICAgICAgICAgIChuelJlc2l6ZUVuZCk9XCJvblJlc2l6ZSgkZXZlbnQsIGZpZWxkLnByb3BlcnR5KVwiXHJcbiAgICAgICAgICAgICAgICBhdHRyLmlkPVwie3tncmlkSUR9fS1jb2x1bW4te3tmaX19XCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImdldENsYXNzTWFwKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICBbKG56U29ydCldPVwiZmllbGQuc2hvd1NvcnQgPyBmaWVsZC5zb3J0T3JkZXIgOiBkZWZhdWx0U29ydE9yZGVyXCIgKG56U29ydENoYW5nZSk9XCJzb3J0KCRldmVudCwgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgICAgICAgIFtueldpZHRoXT1cImZpZWxkLndpZHRoXCJcclxuICAgICAgICAgICAgICAgIFtuek1pbldpZHRoXT1cImZpZWxkLm1pbldpZHRoID8gZmllbGQubWluV2lkdGggOiAxMDBcIlxyXG4gICAgICAgICAgICAgICAgW256TWF4V2lkdGhdPVwiZmllbGQubWF4V2lkdGggPyBmaWVsZC5tYXhXaWR0aCA6IDUwMFwiXHJcbiAgICAgICAgICAgICAgICBbbnpMZWZ0XT1cImZpZWxkLmxlZnQgPyBmaWVsZC5sZWZ0IDogZmFsc2UgXCJcclxuICAgICAgICAgICAgICAgIFtuelJpZ2h0XT1cImZpZWxkLnJpZ2h0ID8gZmllbGQucmlnaHQgOiBmYWxzZVwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmllbGQudGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgW3N0eWxlLm1heFdpZHRoXT1cImdldEhlYWRlck1heFdpZHRoKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGNtYWNzLXRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgW2NtYWNzVG9vbHRpcFRpdGxlXT1cImlzRWxsaXBzaXNBY3RpdmUoZ3JpZElEICsgJy1jb2x1bW4tJyArIGZpICsgJy10aXRsZScsIGZpZWxkKSA/IGZpZWxkLmRpc3BsYXkgOiBudWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbC1oZWFkZXJdPVwiIXdyYXBMaW5lc1wiPnt7ZmllbGQuZGlzcGxheX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbaWRdPVwiZ3JpZElEICsgJ2NvbHVtbicgKyBmaVwiICpuZ0lmPVwiZmllbGQudGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZmllbGQudGVtcGxhdGUucmVmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImZpZWxkLnRlbXBsYXRlLmNvbnRleHRcIj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxuei1kcm9wZG93biBuelRyaWdnZXI9XCJjbGlja1wiIG56UGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBbbnpDbGlja0hpZGVdPVwiZmFsc2VcIiBuelRhYmxlRmlsdGVyICNkcm9wZG93bj5cclxuICAgICAgICAgICAgICAgIDxpIG56LWljb25cclxuICAgICAgICAgICAgICAgICAgIG56VHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICBbY2xhc3MuYW50LXRhYmxlLWZpbHRlci1vcGVuXT1cImRyb3Bkb3duLm56VmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICBuei1kcm9wZG93bj48L2k+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZpZWxkLmN1c3RvbUZpbHRlci5yZWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiZmllbGQuY3VzdG9tRmlsdGVyLmNvbnRleHRcIj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvbnotZHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgPG56LXJlc2l6ZS1oYW5kbGUgbnpEaXJlY3Rpb249XCJyaWdodFwiICpuZ0lmPVwiZmllbGQucmVzaXphYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1yZXNpemUtdHJpZ2dlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbnotcmVzaXplLWhhbmRsZT5cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG5cclxuICAgICAgICA8dGggKm5nSWY9XCJzaG93UmF0ZVwiPjwvdGg+XHJcblxyXG4gICAgICAgIDx0aCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICAgW256V2lkdGhdPVwiYWN0aW9uQ29sdW1uV2lkdGhcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiYWN0aW9uQ29sdW1uV2lkdGhcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiYWN0aW9uQ29sdW1uV2lkdGhcIlxyXG4gICAgICAgICAgICBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdleHRyYScpXCJcclxuICAgICAgICAgICAgKm5nSWY9XCJleHRyYVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtZXh0cmFcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImV4dHJhXCI+e3sgZXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aCAqbmdJZj1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgIG56V2lkdGg9XCI0MHB4XCJcclxuICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdzbWFydFRhYmxlJylcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1kZWxldGVcIj5cclxuICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICA8dGggW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGhdPVwibG9nc1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9nc1wiICpuZ0lmPVwiY2VudGVyVGFibGVcIj48L3RoPlxyXG5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGhlYWQ+XHJcbiAgICA8dGJvZHkgY2RrRHJvcExpc3RcclxuICAgICAgICAgICAqbmdJZj1cIiF2aXJ0dWFsU2Nyb2xsXCJcclxuICAgICAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGNvbmZpZy5maWVsZHMgJiYgY29uZmlnLmZpZWxkcy5sZW5ndGhcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZXhwYW5kYWJsZTsgZWxzZSBkZWZhdWx0VHBsO1wiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBncmlkQ29tcG9uZW50LmRhdGE7IGluZGV4IGFzIGRpXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbWFwT2ZFeHBhbmRlZERhdGFbZGF0YVtmaWVsZElEXV1cIj5cclxuICAgICAgICAgICAgICA8dHIgKm5nSWY9XCIoaXRlbS5wYXJlbnQgJiYgaXRlbS5wYXJlbnQuZXhwYW5kKSB8fCAhaXRlbS5wYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInRyLXt7aXRlbVtmaWVsZElEXX19XCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZXhwYW5kYWJsZS1yb3ddPVwiaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWhlYWRlci1sb2dzXT1cImxvZ3MgJiYgISFpdGVtLmNoaWxkcmVuXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmFudC10YWJsZS1zZWxlY3RlZC1yb3ddPVwiY2hlY2tib3hTZWxlY3QgPyBnZXROb2RlKGl0ZW1bZmllbGRJRF0pLnNlbGVjdGVkIDogc2VsZWN0aW9uLmlzU2VsZWN0ZWQoaXRlbVtmaWVsZElEXSlcIlxyXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0VHJlZVNpbmdsZShpdGVtKVwiXHJcbiAgICAgICAgICAgICAgICAgICh0b3VjaHN0YXJ0KT1cInRhcEhhbmRsZXIoJGV2ZW50LCBpdGVtKVwiXHJcbiAgICAgICAgICAgICAgICAgIChjb250ZXh0bWVudSk9XCJvbmNvbnRleHRtZW51ZXZ0KCRldmVudCwgaXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwiZGJsQ2xpY2tSb3coaXRlbSlcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJjaGVja2JveFNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnY2hlY2tib3hTZWxlY3QnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIiczMHB4J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cIiczMHB4J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cIiczMHB4J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJnZXROb2RlKGl0ZW1bZmllbGRJRF0pLnNlbGVjdGVkXCIgW2luZGV0ZXJtaW5hdGVdPVwiZ2V0Tm9kZShpdGVtW2ZpZWxkSURdKS5zZWxlY3RlZCA9PT0gLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPVwib25DaGVja2JveFRyZWVDaGFuZ2UoJGV2ZW50LCBpdGVtLCBtYXBPZkV4cGFuZGVkRGF0YVtkYXRhW2ZpZWxkSURdXSlcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBpXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJnZXRDdXN0b21DbGFzcyhmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1lZGl0YWJsZS1jb2x1bW5dPVwiZmllbGQuZWRpdGFibGVcIiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1leHBhbmRhYmxlXT1cIigoZWRpdElkID09PSBpdGVtW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzTnVtYmVyKGZpZWxkKSAmJiBmaWVsZC5lZGl0YWJsZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWV4cGFuZGFibGUtdGRdPVwiIWlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS5wYWRkaW5nTGVmdC5weF09XCJnZXRDdXN0b21QYWRkaW5nKGl0ZW0sIGkpXCJcclxuICAgICAgICAgICAgICAgICAgICBbbnpTaG93RXhwYW5kXT1cIiFpc051bGwoaXRlbS5jaGlsZHJlbikgJiYgIWlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobnpFeHBhbmQpXT1cIml0ZW0uZXhwYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBbbnpMZWZ0XT1cImZpZWxkLmxlZnQgPyBmaWVsZC5sZWZ0IDogZmFsc2VcIiBbbnpSaWdodF09XCJmaWVsZC5yaWdodCA/IGZpZWxkLnJpZ2h0IDogZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIChuekV4cGFuZENoYW5nZSk9XCJFeHBhbmRDb2xsYXBzZShtYXBPZkV4cGFuZGVkRGF0YVtkYXRhW2ZpZWxkSURdXSwgaXRlbSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cImZpZWxkLndpZHRoXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5kaXNwbGF5XT1cIihpc051bWJlcihmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSkgPyAnYmxvY2snIDogJ2lubGluZS1mbGV4J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbC1jb250YWluZXItbG9nc109XCJleHBhbmRhYmxlICYmIGlzU3RyaW5nKGZpZWxkKSAmJiAhaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cIml0ZW0uY2hpbGRyZW4gJiYgIWkgPyAnY2FsYygxMDAlIC0gMjVweCknIDogJzEwMCUnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInNob3dWaWV3TW9kZVRwbChmaWVsZCwgaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidmlld01vZGVUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogaXRlbSwgaTogZGksIGl0ZW06IGl0ZW0sIGNpOiBpfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgW3N0eWxlLmRpc3BsYXldPVwiaXNOdW1iZXIoZmllbGQpID8gJ2Jsb2NrJyA6ICdpbmxpbmUtZmxleCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJpdGVtLmNoaWxkcmVuICYmICFpID8gJ2NhbGMoMTAwJSAtIDI1cHgpJyA6ICcxMDAlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93RWRpdFRwbChpdGVtLCBmaWVsZClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZWRpdFRwbDtjb250ZXh0OiB7ZmllbGQ6IGZpZWxkLCBkYXRhOiBpdGVtLCBpOiBkaX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXJhdGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93UmF0ZSAmJiBjb25maWdcIj5cclxuICAgICAgICAgICAgICAgICAgPG56LXJhdGUgW25nTW9kZWxdPVwiZGF0YVtjb25maWcuZmllbGRSYXRlXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekNvdW50XT0ncmF0ZUNvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpEaXNhYmxlZF09XCIhaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmF0ZUNoYW5nZSgkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmF0ZUNsaWNrKCRldmVudClcIj48L256LXJhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgISFpdGVtLmNoaWxkcmVuXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdleHRyYScpXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImV4dHJhXCI+PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJjZW50ZXJUYWJsZVwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtdGRdPVwibG9nc1wiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1hbGlnbi10ZFwiPjwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRwbD5cclxuICAgICAgICAgIDx0ciBjZGtEcmFnIFtjZGtEcmFnRGlzYWJsZWRdPVwiIWRyYWdnYWJsZVwiICpuZ0Zvcj1cImxldCBkYXRhIG9mIGdyaWRDb21wb25lbnQuZGF0YTsgaW5kZXggYXMgaVwiXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrUm93KCRldmVudCwgZGF0YSlcIiAodG91Y2hzdGFydCk9XCJ0YXBIYW5kbGVyKCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgICAgIGlkPVwidHIte3tkYXRhW2NvbmZpZy5maWVsZElkXX19XCJcclxuICAgICAgICAgICAgICBbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGVkLXJvd109XCJpc1Jvd1NlbGVjdGVkKGRhdGEpXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0YWJsZS1yb3ddPVwiaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtcm93XT1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgKGNvbnRleHRtZW51KT1cImNvbnRleHRNZW51KCRldmVudCwgY29udGV4dE1lbnVUZW1wbGF0ZSlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiY21hY3Mtbm8tc2VsZWN0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxjbWFjcy1kcm9wZG93bi1tZW51ICNjb250ZXh0TWVudVRlbXBsYXRlPVwiY21hY3NEcm9wZG93bk1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGV4dG1lbnVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBkcm9wZG93bjogZHJvcGRvd24sIGRhdGE6IGRhdGEgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvY21hY3MtZHJvcGRvd24tbWVudT5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdJZj1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLXRkXT1cImxvZ3NcIlxyXG4gICAgICAgICAgICAgICAgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnc21hcnRUYWJsZScpXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctYWRkXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1hZGQtaWNvbiBpY29uVUlMYXJnZS1OZXdcIlxyXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRSb3coaSwgJGV2ZW50KVwiPjwvaT5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdJZj1cImRyYWdnYWJsZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1kcmFnLWNvbCBjbWFjcy1jb21wYWN0LXRhYmxlLWZzdC10ZFwiXHJcbiAgICAgICAgICAgICAgICBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdkcmFnZ2FibGUnKVwiXHJcbiAgICAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCInNDBweCdcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLU1vdmUgY21hY3MtY29tcGFjdC10YWJsZS1kcmFnLWhhbmRsZXJcIiBjZGtEcmFnSGFuZGxlPjwvaT5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdjaGVja2JveFNlbGVjdCcpXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZnN0LXRkXT1cIiFkcmFnZ2FibGVcIlxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjaGVja2JveFNlbGVjdCAmJiBjb25maWdcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJjaGVja2JveENhY2hlW2dldEluZGV4KGRhdGFbY29uZmlnLmZpZWxkSWRdKV0uc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAoY2hlY2tlZENoYW5nZSk9XCJvbkNoZWNrYm94Q2hhbmdlKCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGFbY29uZmlnLmZpZWxkSWRdICYmIGNoZWNrYm94Q2FjaGVbZ2V0SW5kZXgoZGF0YVtjb25maWcuZmllbGRJZF0pXVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBqXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImdldEN1c3RvbUNsYXNzKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtZWRpdGFibGUtY29sdW1uXT1cImZpZWxkLmVkaXRhYmxlXCIgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1mc3QtdGRdPVwiIWRyYWdnYWJsZSAmJiAhY2hlY2tib3hTZWxlY3QgJiYgIWpcIlxyXG4gICAgICAgICAgICAgICAgW256TGVmdF09XCJmaWVsZC5sZWZ0ID8gZmllbGQubGVmdCA6IGZhbHNlXCIgW256UmlnaHRdPVwiZmllbGQucmlnaHQgPyBmaWVsZC5yaWdodCA6IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCJmaWVsZC53aWR0aFwiPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiA5OCVcIlxyXG4gICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93Vmlld01vZGVUcGxUcmVlKGZpZWxkLCBkYXRhKVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInZpZXdNb2RlVHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGRhdGEsIGk6IGksIGNpOiBqfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiA5OCVcIlxyXG4gICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93RWRpdFRwbFRyZWUoZGF0YSwgZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZWRpdFRwbDtjb250ZXh0OiB7ZmllbGQ6IGZpZWxkLCBkYXRhOiBkYXRhLCBpOiBpfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdJZj1cInNob3dSYXRlICYmIGNvbmZpZ1wiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIj5cclxuICAgICAgICAgICAgICA8bnotcmF0ZSBbbmdNb2RlbF09XCJkYXRhW2NvbmZpZy5maWVsZFJhdGVdXCIgW256Q291bnRdPSdyYXRlQ291bnQnIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmF0ZUNoYW5nZSgkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25SYXRlQ2xpY2soJGV2ZW50KVwiPjwvbnotcmF0ZT5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdJZj1cImV4dHJhXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiIFtuelJpZ2h0XT1cImdldFN0aWNreVdpZHRoUmlnaHQoJ2V4dHJhJylcIj48L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkICpuZ0lmPVwic21hcnRUYWJsZSAmJiBpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgICAgW256UmlnaHRdPVwiZ2V0U3RpY2t5V2lkdGhSaWdodCgnc21hcnRUYWJsZScpXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLXRkXT1cImxvZ3NcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1kZWxldGVcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWRlbGV0ZS1pY29uIGljb25VSVNtYWxsLUNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGEuZGVsZXRlRW5hYmxlZCA9PT0gdW5kZWZpbmVkIHx8IGRhdGEuZGVsZXRlRW5hYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImRlbGV0ZVJvdyhpLCAkZXZlbnQpXCI+PC9pPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiAqbmdJZj1cImNlbnRlclRhYmxlXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy10ZF09XCJsb2dzXCIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWFsaWduLXRkXCI+PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPC90Ym9keT5cclxuXHJcbiAgICA8dGJvZHkgY2RrRHJvcExpc3RcclxuICAgICAgICAgICAqbmdJZj1cInZpcnR1YWxTY3JvbGxcIlxyXG4gICAgICAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBuei12aXJ0dWFsLXNjcm9sbCBsZXQtZGF0YSBsZXQtZGk9XCJpXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBjb25maWcuZmllbGRzICYmIGNvbmZpZy5maWVsZHMubGVuZ3RoXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZXhwYW5kYWJsZTsgZWxzZSBkZWZhdWx0VHBsVmlydHVhbFNjcm9sbDtcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBtYXBPZkV4cGFuZGVkRGF0YVtkYXRhW2ZpZWxkSURdXVwiPlxyXG4gICAgICAgICAgICAgIDx0ciAqbmdJZj1cIihpdGVtLnBhcmVudCAmJiBpdGVtLnBhcmVudC5leHBhbmQpIHx8ICFpdGVtLnBhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidHIte3tpdGVtW2ZpZWxkSURdfX1cIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1leHBhbmRhYmxlLXJvd109XCJpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaGVhZGVyLWxvZ3NdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgICAgICAodG91Y2hzdGFydCk9XCJ0YXBIYW5kbGVyKCRldmVudCwgaXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgICAoY29udGV4dG1lbnUpPVwib25jb250ZXh0bWVudWV2dCgkZXZlbnQsIGl0ZW0pXCJcclxuICAgICAgICAgICAgICAgICAgKGRibGNsaWNrKT1cImRibENsaWNrUm93KGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJjaGVja2JveFNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnY2hlY2tib3hTZWxlY3QnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIiczMHB4J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cIiczMHB4J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cIiczMHB4J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJnZXROb2RlKGl0ZW1bZmllbGRJRF0pLnNlbGVjdGVkXCIgW2luZGV0ZXJtaW5hdGVdPVwiZ2V0Tm9kZShpdGVtW2ZpZWxkSURdKS5zZWxlY3RlZCA9PT0gLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPVwib25DaGVja2JveFRyZWVDaGFuZ2UoJGV2ZW50LCBpdGVtLCBtYXBPZkV4cGFuZGVkRGF0YVtkYXRhW2ZpZWxkSURdXSlcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBpXCJcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtZWRpdGFibGUtY29sdW1uXT1cImZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LWV4cGFuZGFibGVdPVwiKChlZGl0SWQgPT09IGl0ZW1bY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNOdW1iZXIoZmllbGQpICYmIGZpZWxkLmVkaXRhYmxlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZXhwYW5kYWJsZS10ZF09XCIhaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLnBhZGRpbmdMZWZ0LnB4XT1cImdldEN1c3RvbVBhZGRpbmcoaXRlbSwgaSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuelNob3dFeHBhbmRdPVwiISFpdGVtLmNoaWxkcmVuICYmICFpXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG56RXhwYW5kKV09XCJpdGVtLmV4cGFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW256TGVmdF09XCJmaWVsZC5sZWZ0ID8gZmllbGQubGVmdCA6IGZhbHNlXCIgW256UmlnaHRdPVwiZmllbGQucmlnaHQgPyBmaWVsZC5yaWdodCA6IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAobnpFeHBhbmRDaGFuZ2UpPVwiRXhwYW5kQ29sbGFwc2UobWFwT2ZFeHBhbmRlZERhdGFbZGF0YVtmaWVsZElEXV0sIGl0ZW0sICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCJmaWVsZC53aWR0aFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBbc3R5bGUuZGlzcGxheV09XCIoaXNOdW1iZXIoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkpID8gJ2Jsb2NrJyA6ICdpbmxpbmUtZmxleCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGwtY29udGFpbmVyLWxvZ3NdPVwiZXhwYW5kYWJsZSAmJiBpc1N0cmluZyhmaWVsZCkgJiYgIWlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJpdGVtLmNoaWxkcmVuICYmICFpID8gJ2NhbGMoMTAwJSAtIDI1cHgpJyA6ICcxMDAlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93Vmlld01vZGVUcGwoZmllbGQsIGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInZpZXdNb2RlVHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGl0ZW0sIGk6IGRpLCBpdGVtOiBpdGVtLCBjaTogaX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5kaXNwbGF5XT1cImlzTnVtYmVyKGZpZWxkKSA/ICdibG9jaycgOiAnaW5saW5lLWZsZXgnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiaXRlbS5jaGlsZHJlbiAmJiAhaSA/ICdjYWxjKDEwMCUgLSAyNXB4KScgOiAnMTAwJSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic2hvd0VkaXRUcGwoaXRlbSwgZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImVkaXRUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogaXRlbSwgaTogZGl9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtcmF0aW5nXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93UmF0ZSAmJiBjb25maWdcIj5cclxuICAgICAgICAgICAgICAgICAgPG56LXJhdGUgW25nTW9kZWxdPVwiZGF0YVtjb25maWcuZmllbGRSYXRlXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekNvdW50XT0ncmF0ZUNvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpEaXNhYmxlZF09XCIhaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmF0ZUNoYW5nZSgkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmF0ZUNsaWNrKCRldmVudClcIj48L256LXJhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW256UmlnaHRdPVwiZ2V0U3RpY2t5V2lkdGhSaWdodCgnZXh0cmEnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJleHRyYVwiPjwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRwbFZpcnR1YWxTY3JvbGw+XHJcbiAgICAgICAgICAgIDx0ciBjZGtEcmFnIFtjZGtEcmFnRGlzYWJsZWRdPVwiIWRyYWdnYWJsZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInRyLXt7ZGF0YVtjb25maWcuZmllbGRJZF19fVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tSb3coJGV2ZW50LCBkYXRhKVwiICh0b3VjaHN0YXJ0KT1cInRhcEhhbmRsZXIoJGV2ZW50LCBkYXRhKVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGVkLXJvd109XCJpc1Jvd1NlbGVjdGVkKGRhdGEpXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXRhYmxlLXJvd109XCJpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLXJvd109XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXRcIlxyXG4gICAgICAgICAgICAgICAgKGNvbnRleHRtZW51KT1cImNvbnRleHRNZW51KCRldmVudCwgY29udGV4dE1lbnVUZW1wbGF0ZSwgZGF0YSlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1uby1zZWxlY3Rpb25cIj5cclxuXHJcbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjb250ZXh0TWVudVRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZXh0bWVudVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGRyb3Bkb3duOiBkcm9wZG93biwgZGF0YTogZGF0YSB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0lmPVwic21hcnRUYWJsZSAmJiBpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy10ZF09XCJsb2dzXCJcclxuICAgICAgICAgICAgICAgICAgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnc21hcnRUYWJsZScpXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1hZGRcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctYWRkLWljb24gaWNvblVJTGFyZ2UtTmV3XCJcclxuICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRSb3coZGksICRldmVudClcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiZHJhZ2dhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1kcmFnLWNvbCBjbWFjcy1jb21wYWN0LXRhYmxlLWZzdC10ZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2RyYWdnYWJsZScpXCJcclxuICAgICAgICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCInNDBweCdcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtTW92ZSBjbWFjcy1jb21wYWN0LXRhYmxlLWRyYWctaGFuZGxlclwiIGNka0RyYWdIYW5kbGU+PC9pPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgIDx0ZCBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdjaGVja2JveFNlbGVjdCcpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZnN0LXRkXT1cIiFkcmFnZ2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGVja2JveFNlbGVjdCAmJiBjb25maWdcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbWFjcy1jaGVja2JveCBbKG5nTW9kZWwpXT1cImNoZWNrYm94Q2FjaGVbZ2V0SW5kZXgoZGF0YVtjb25maWcuZmllbGRJZF0pXS5zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPVwib25DaGVja2JveENoYW5nZSgkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGFbY29uZmlnLmZpZWxkSWRdICYmIGNoZWNrYm94Q2FjaGVbZ2V0SW5kZXgoZGF0YVtjb25maWcuZmllbGRJZF0pXVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBnZXRGaWVsZHMoKTsgaW5kZXggYXMgalwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1lZGl0YWJsZS1jb2x1bW5dPVwiZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1mc3QtdGRdPVwiIWRyYWdnYWJsZSAmJiAhY2hlY2tib3hTZWxlY3QgJiYgIWpcIlxyXG4gICAgICAgICAgICAgICAgICBbbnpMZWZ0XT1cImZpZWxkLmxlZnQgPyBmaWVsZC5sZWZ0IDogZmFsc2VcIiBbbnpSaWdodF09XCJmaWVsZC5yaWdodCA/IGZpZWxkLnJpZ2h0IDogZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiZmllbGQud2lkdGhcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiA5OCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInNob3dWaWV3TW9kZVRwbFRyZWUoZmllbGQsIGRhdGEpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ2aWV3TW9kZVRwbDtjb250ZXh0OiB7ZmllbGQ6IGZpZWxkLCBkYXRhOiBkYXRhLCBpOiBkaSwgY2k6IGp9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiA5OCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInNob3dFZGl0VHBsVHJlZShkYXRhLCBmaWVsZClcIj5cclxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImVkaXRUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogZGF0YSwgaTogZGl9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0lmPVwic2hvd1JhdGUgJiYgY29uZmlnXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiPlxyXG4gICAgICAgICAgICAgICAgPG56LXJhdGUgW25nTW9kZWxdPVwiZGF0YVtjb25maWcuZmllbGRSYXRlXVwiIFtuekNvdW50XT0ncmF0ZUNvdW50JyAobmdNb2RlbENoYW5nZSk9XCJvblJhdGVDaGFuZ2UoJGV2ZW50LCBkYXRhKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25SYXRlQ2xpY2soJGV2ZW50KVwiPjwvbnotcmF0ZT5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJleHRyYVwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdleHRyYScpXCI+PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0lmPVwic21hcnRUYWJsZSAmJiBpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgIFtuelJpZ2h0XT1cImdldFN0aWNreVdpZHRoUmlnaHQoJ3NtYXJ0VGFibGUnKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy10ZF09XCJsb2dzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1kZWxldGVcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctZGVsZXRlLWljb24gaWNvblVJU21hbGwtQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgKm5nSWY9XCJkYXRhLmRlbGV0ZUVuYWJsZWQgPT09IHVuZGVmaW5lZCB8fCBkYXRhLmRlbGV0ZUVuYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImRlbGV0ZVJvdyhkaSwgJGV2ZW50KVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT4gICAgIFxyXG4gICAgPC90Ym9keT5cclxuICA8L256LXRhYmxlPlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZWRpdFRwbCBsZXQtZmllbGQ9XCJmaWVsZFwiIGxldC1kYXRhPVwiZGF0YVwiIGxldC1pPVwiaVwiPlxyXG4gIDwhLS1FZGl0YWJsZSBTdHJpbmcgRWRpdCBNb2RlLS0+XHJcbiAgPGlucHV0ICNmaWVsZFR5cGVJbnB1dFxyXG4gICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXRcIlxyXG4gICAgICAgICAqbmdJZj1cImlzU3RyaW5nKGZpZWxkKVwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtbW9kZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQucGxhY2Vob2xkZXIgPyBmaWVsZC5wbGFjZWhvbGRlciA6ICcnXCJcclxuICAgICAgICAgY21hY3MtaW5wdXQgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLnByb3BlcnR5XVwiXHJcbiAgICAgICAgIChrZXl1cCk9XCJlbmRFZGl0TW9kZSgkZXZlbnQsIGksIGRhdGEpXCIgLz5cclxuXHJcbiAgPCEtLUVkaXRhYmxlIERhdGVQaWNrZXIgRWRpdCBNb2RlLS0+XHJcbiAgPGNtYWNzLWRhdGUtcGlja2VyICNmaWVsZFR5cGVEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1kYXRlLWVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImlzRGF0ZShmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbYWxsb3dDbGVhcl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtbW9kZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZW5kRWRpdE1vZGVOZ01vZGVsKGksIGRhdGEpXCI+XHJcbiAgPC9jbWFjcy1kYXRlLXBpY2tlcj5cclxuXHJcbiAgPCEtLUVkaXRhYmxlIERhdGVUaW1lUGlja2VyIEVkaXQgTW9kZS0tPlxyXG4gIDxjbWFjcy1kYXRldGltZS1waWNrZXIgI2ZpZWxkVHlwZURhdGVUaW1lUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImlzVGltZShmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWRhdGV0aW1lLXBpY2tlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbdXNlMTJIb3Vyc109XCJ1c2UxMkhvdXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVTZWNvbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LW1vZGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXRdPVwiZmllbGQudGltZUZvcm1hdCA/IGZpZWxkLnRpbWVGb3JtYXQgOiAnaDptbSBhJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbZGVmYXVsdE9wZW5WYWx1ZV09XCJkZWZhdWx0VGltZVZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwibmdNb2RlbENoYW5nZShpLCBkYXRhKVwiPlxyXG4gIDwvY21hY3MtZGF0ZXRpbWUtcGlja2VyPlxyXG5cclxuICA8IS0tRWRpdGFibGUgU2VsZWN0IEVkaXQgTW9kZS0tPlxyXG4gIDxjbWFjcy1zZWxlY3QgI2ZpZWxkVHlwZVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNlbGVjdC1jZWxsXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtbW9kZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpc1NlbGVjdChmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgW3BsYWNlSG9sZGVyXT1cImZpZWxkLnBsYWNlaG9sZGVyID8gZmllbGQucGxhY2Vob2xkZXIgOiAnJ1wiXHJcbiAgICAgICAgICAgICAgICBzaG93U2VhcmNoXHJcbiAgICAgICAgICAgICAgICBbbW9kZV09XCJmaWVsZC5tb2RlID8gZmllbGQubW9kZSA6ICdkZWZhdWx0J1wiXHJcbiAgICAgICAgICAgICAgICBbc2hvd0NtYWNzU2VhcmNoXT1cImZpZWxkLnNob3dDbWFjc1NlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImVuZEVkaXRNb2RlTmdNb2RlbChpLCBkYXRhLCBudWxsLCBmaWVsZClcIj5cclxuICAgIDxjbWFjcy1vcHRpb24gKm5nRm9yPVwibGV0IHNEYXRhIG9mIGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhXCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ7e3NEYXRhW2ZpZWxkLnNlbGVjdC5sYWJlbF19fVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzRGF0YVtmaWVsZC5zZWxlY3QudmFsdWVdfX1cIlxyXG4gICAgICAgICAgICAgICAgICBkaXZpZGVyPVwie3tzRGF0YVtmaWVsZC5zZWxlY3QuZGl2aWRlcl19fVwiXHJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJzRGF0YS5kaXNhYmxlZFwiPlxyXG4gICAgPC9jbWFjcy1vcHRpb24+XHJcbiAgPC9jbWFjcy1zZWxlY3Q+XHJcblxyXG4gIDwhLS1FZGl0YWJsZSBJbnB1TnVtYmVyIEVkaXQgTW9kZS0tPlxyXG4gIDxjbWFjcy1pbnB1dC1udW1iZXIgI2ZpZWxkVHlwZUlucHV0TnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXQtbnVtYmVyLWVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImlzTnVtYmVyKGZpZWxkKSAmJiAhaXNTZWxlY3QoZmllbGQpICYmIGZpZWxkLnVzZUNvbW1hTWFya2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2NtYWNzU3RlcF09XCJmaWVsZC5jbWFjc1N0ZXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW21pbl09XCJmaWVsZC5taW4hIVwiIFttYXhdPVwiZmllbGQubWF4ISFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdHRlcl09XCJmb3JtYXR0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3BhcnNlcl09XCJwYXJzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSwgZGF0YSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwibmdNb2RlbENoYW5nZShpLCBkYXRhKVwiPlxyXG4gIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG5cclxuICA8Y21hY3MtaW5wdXQtbnVtYmVyICNmaWVsZFR5cGVJbnB1dE51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlucHV0LW51bWJlci1lZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtbW9kZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpc051bWJlcihmaWVsZCkgJiYgIWlzU2VsZWN0KGZpZWxkKSAmJiAhZmllbGQudXNlQ29tbWFNYXJrZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLnByb3BlcnR5XVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0dGVyXT1cIiFpc051bGwoZmllbGQuZm9ybWF0dGVyKSA/IGZpZWxkLmZvcm1hdHRlciA6IGRlZmF1bHRGb3JtYXR0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3BhcnNlcl09XCIhaXNOdWxsKGZpZWxkLnBhcnNlcikgPyBmaWVsZC5wYXJzZXIgOiBkZWZhdWx0UGFyc2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtjbWFjc1N0ZXBdPVwiZmllbGQuY21hY3NTdGVwID8gZmllbGQuY21hY3NTdGVwIDogMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbWluXT1cImZpZWxkLm1pbiEhXCIgW21heF09XCJmaWVsZC5tYXghIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZW5kRWRpdE1vZGUoJGV2ZW50LCBpLCBkYXRhKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJuZ01vZGVsQ2hhbmdlKGksIGRhdGEpXCI+XHJcbiAgPC9jbWFjcy1pbnB1dC1udW1iZXI+XHJcblxyXG4gIDwhLS1FZGl0YWJsZSBCb29sZWFuIEVkaXQgTW9kZS0tPlxyXG4gIDxsYWJlbCAjZmllbGRUeXBlQm9vbFxyXG4gICAgICAgICBjbWFjcy1jaGVja2JveFxyXG4gICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFiZS1lZGl0YWJsZS1jaGVja2JveFwiXHJcbiAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtbW9kZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgICAgICAqbmdJZj1cImlzQm9vbGVhbihmaWVsZClcIlxyXG4gICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZW5kRWRpdE1vZGVOZ01vZGVsKGksIGRhdGEpXCI+XHJcbiAgPC9sYWJlbD5cclxuXHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI3ZpZXdNb2RlVHBsIGxldC1maWVsZD1cImZpZWxkXCIgbGV0LWRhdGE9XCJkYXRhXCIgbGV0LWk9XCJpXCIgbGV0LWl0ZW09XCJpdGVtXCIgbGV0LWNpPVwiY2lcIj5cclxuICA8bmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS1FZGl0YWJsZSBTdHJpbmcgVmlldyBNb2RlLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGlzU3RyaW5nKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2IChjbGljayk9XCJzdGFydEVkaXQoZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLnByb3BlcnR5LCAkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSlcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIlxyXG4gICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5saW5lLWNlbGxcIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCJcclxuICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZpZWxkLXZhbGlkLXBsYWNlaG9sZGVyXT1cImlzTnVsbChkYXRhW2ZpZWxkLnByb3BlcnR5XSkgfHwgIWRhdGFbZmllbGQucHJvcGVydHldLmxlbmd0aFwiXHJcbiAgICAgICAgICAgICBhdHRyLmlkPVwie3tncmlkSUR9fS1yb3cte3tpfX0te3tmaWVsZC5wcm9wZXJ0eX19XCJcclxuICAgICAgICAgICAgIGNtYWNzLXRvb2x0aXBcclxuICAgICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUaXRsZV09XCJpc0VsbGlwc2lzQWN0aXZlKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHksIGZpZWxkKSA/IGdldFN0cmluZ0ZpZWxkVmFsdWUoZGF0YSwgZmllbGQpIDogbnVsbFwiXHJcbiAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoZmllbGQsIGl0ZW0sIGkpXCJcclxuICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiPlxyXG4gICAgICAgICAge3sgZ2V0U3RyaW5nRmllbGRWYWx1ZShkYXRhLCBmaWVsZCkgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aSAqbmdJZj1cImZpZWxkLmVkaXRhYmxlIHx8IGZpZWxkLmVkaXRhYmxlID09PSB1bmRlZmluZWRcIlxyXG4gICAgICAgICAgIGNsYXNzPVwiaWNvblVJU21hbGwtRWRpdFwiXHJcbiAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1pY29uXT1cImluTGluZUVkaXQgJiYgZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtaWNvbi12aWV3XT1cIiFpbkxpbmVFZGl0IHx8ICFmaWVsZC5lZGl0YWJsZVwiPlxyXG4gICAgICAgIDwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tRWRpdGFibGUgRGF0ZVBpY2tlciBWaWV3IE1vZGUtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgaXNEYXRlKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2IChjbGljayk9XCJzdGFydEVkaXQoZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLnByb3BlcnR5LCAkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSlcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIlxyXG4gICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKGZpZWxkLCBpdGVtLCBpKVwiXHJcbiAgICAgICAgICAgICBhdHRyLmlkPVwie3tncmlkSUR9fS1yb3cte3tpfX0te3tmaWVsZC5wcm9wZXJ0eX19XCJcclxuICAgICAgICAgICAgIGNtYWNzLXRvb2x0aXBcclxuICAgICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUaXRsZV09XCJpc0VsbGlwc2lzQWN0aXZlKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHksIGZpZWxkKSA/IChkYXRhW2ZpZWxkLnByb3BlcnR5XSA/IHRyYW5zZm9ybURhdGUoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pIDogZmllbGQucGxhY2Vob2xkZXIpIDogbnVsbFwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtdmFsaWQtcGxhY2Vob2xkZXJdPVwiaXNOdWxsKGRhdGFbZmllbGQucHJvcGVydHldKVwiXHJcbiAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5saW5lLWNlbGwgY21hY3MtY29tcGFjdC10YWJsZS1kYXRlXCI+e3sgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPyB0cmFuc2Zvcm1EYXRlKGRhdGFbZmllbGQucHJvcGVydHldKSA6IGZpZWxkLnBsYWNlaG9sZGVyIH19PC9kaXY+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uVUlMYXJnZS1DYWxlbmRhclwiXHJcbiAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtY2FsZW5kYXItaWNvbl09XCJpbkxpbmVFZGl0ICYmIGZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1jYWxlbmRhci1pY29uLXZpZXddPVwiIWluTGluZUVkaXQgfHwgIWZpZWxkLmVkaXRhYmxlXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS1FZGl0YWJsZSBEYXRlVGltZVBpY2tlciBWaWV3IE1vZGUtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgaXNUaW1lKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2IChjbGljayk9XCJzdGFydEVkaXQoZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLnByb3BlcnR5LCAkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSlcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIlxyXG4gICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKGZpZWxkLCBpdGVtLCBpKVwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIlxyXG4gICAgICAgICAgICAgYXR0ci5pZD1cInt7Z3JpZElEfX0tcm93LXt7aX19LXt7ZmllbGQucHJvcGVydHl9fVwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC12YWxpZC1wbGFjZWhvbGRlcl09XCJpc051bGwoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pXCJcclxuICAgICAgICAgICAgIGNtYWNzLXRvb2x0aXBcclxuICAgICAgICAgICAgIFtjbWFjc1Rvb2x0aXBUaXRsZV09XCJpc0VsbGlwc2lzQWN0aXZlKGdyaWRJRCArICctcm93LScgKyBpICsgJy0nICsgZmllbGQucHJvcGVydHksIGZpZWxkKSA/IChkYXRhW2ZpZWxkLnByb3BlcnR5XSA/ICggZGF0YVtmaWVsZC5wcm9wZXJ0eV0gIHwgZGF0ZTogZmllbGQudGltZUZvcm1hdCA/IGZpZWxkLnRpbWVGb3JtYXQgOiAnaDptbSBhJykgOiBmaWVsZC5wbGFjZWhvbGRlcikgOiBudWxsXCJcclxuICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1pbmxpbmUtY2VsbCBjbWFjcy1jb21wYWN0LXRhYmxlLWRhdGVcIj57eyBkYXRhW2ZpZWxkLnByb3BlcnR5XSA/ICggZGF0YVtmaWVsZC5wcm9wZXJ0eV0gIHwgZGF0ZTogZmllbGQudGltZUZvcm1hdCA/IGZpZWxkLnRpbWVGb3JtYXQgOiAnaDptbSBhJykgOiBmaWVsZC5wbGFjZWhvbGRlciB9fTwvZGl2PlxyXG4gICAgICAgIDxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtVGltZVwiXHJcbiAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtY2FsZW5kYXItaWNvbl09XCJpbkxpbmVFZGl0ICYmIGZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1jYWxlbmRhci1pY29uLXZpZXddPVwiIWluTGluZUVkaXQgfHwgIWZpZWxkLmVkaXRhYmxlXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS1FZGl0YWJsZSBTZWxlY3QgVmlldyBNb2RlLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGlzU2VsZWN0KGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2IChjbGljayk9XCJzdGFydEVkaXQoZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLnByb3BlcnR5LCAkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSlcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIlxyXG4gICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKGZpZWxkLCBpdGVtLCBpKVwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIlxyXG4gICAgICAgICAgICAgYXR0ci5pZD1cInt7Z3JpZElEfX0tcm93LXt7aX19LXt7ZmllbGQucHJvcGVydHl9fVwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1maWVsZC12YWxpZC1wbGFjZWhvbGRlcl09XCJpc051bGwoZ2V0TGFiZWwoZGF0YSwgZmllbGQpKSB8fCAhZ2V0TGFiZWwoZGF0YSwgZmllbGQpLmxlbmd0aFwiXHJcbiAgICAgICAgICAgICBjbWFjcy10b29sdGlwXHJcbiAgICAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNFbGxpcHNpc0FjdGl2ZShncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5LCBmaWVsZCkgPyAoZ2V0TGFiZWwoZGF0YSwgZmllbGQpICYmIGdldExhYmVsKGRhdGEsIGZpZWxkKS5sZW5ndGggPyBnZXRMYWJlbChkYXRhLCBmaWVsZCkgOiBmaWVsZC5wbGFjZWhvbGRlcikgOiBudWxsXCJcclxuICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1pbmxpbmUtY2VsbCBjbWFjcy1jb21wYWN0LXRhYmxlLXNlbGVjdFwiPnt7IGdldExhYmVsKGRhdGEsIGZpZWxkKSAmJiBnZXRMYWJlbChkYXRhLCBmaWVsZCkubGVuZ3RoID8gZ2V0TGFiZWwoZGF0YSwgZmllbGQpIDogZmllbGQucGxhY2Vob2xkZXIgfX08L2Rpdj5cclxuICAgICAgICA8aSBjbGFzcz1cImljb25BcnJvd0xhcmdlLUNoZXZyb24tRG93blwiXHJcbiAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc2VsZWN0LWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc2VsZWN0LWljb24tdmlld109XCIhaW5MaW5lRWRpdCB8fCAhZmllbGQuZWRpdGFibGVcIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLUVkaXRhYmxlIElucHV0TnVtYmVyIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc051bWJlcihmaWVsZClcIj5cclxuICAgICAgPGRpdiAoY2xpY2spPVwic3RhcnRFZGl0KGRhdGFbY29uZmlnLmZpZWxkSWRdLCBmaWVsZC5wcm9wZXJ0eSwgJGV2ZW50LCBkYXRhKVwiXHJcbiAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdF09XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzVGltZShmaWVsZCkpXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXQtbm8tcGFkZGluZ109XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNOdW1iZXIoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1N0cmluZyhmaWVsZCkpXCJcclxuICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA5OCU7IG1heC13aWR0aDogOTglOyBwYWRkaW5nOiA3cHggMTBweFwiPlxyXG4gICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCJcclxuICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCJnZXRNYXhXaWR0aChmaWVsZCwgaXRlbSwgaSlcIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCJcclxuICAgICAgICAgICAgIGF0dHIuaWQ9XCJ7e2dyaWRJRH19LXJvdy17e2l9fS17e2ZpZWxkLnByb3BlcnR5fX1cIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZmllbGQtdmFsaWQtcGxhY2Vob2xkZXJdPVwiaXNOdWxsKGRhdGFbZmllbGQucHJvcGVydHldKVwiXHJcbiAgICAgICAgICAgICBjbWFjcy10b29sdGlwXHJcbiAgICAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwiaXNFbGxpcHNpc0FjdGl2ZShncmlkSUQgKyAnLXJvdy0nICsgaSArICctJyArIGZpZWxkLnByb3BlcnR5LCBmaWVsZCkgPyAoZGF0YVtmaWVsZC5wcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCA/IGZpZWxkLnVzZUNvbW1hTWFya2VyID8gZGF0YVtmaWVsZC5wcm9wZXJ0eV0udG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJywnKSA6IGRhdGFbZmllbGQucHJvcGVydHldIDogZmllbGQucGxhY2Vob2xkZXIpIDogbnVsbFwiXHJcbiAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5saW5lLWNlbGwgY21hY3MtY29tcGFjdC10YWJsZS1pbnB1dC1udW1iZXJcIj57eyBnZXRJbnB1dE51bWJlclZhbHVlKGRhdGEsIGZpZWxkKSB9fTwvZGl2PlxyXG4gICAgICAgIDxpIGNsYXNzPVwiaWNvbkFycm93TGFyZ2UtU29saWQtVXBEb3duXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnB1dC1udW1iZXItaWNvbl09XCJpbkxpbmVFZGl0ICYmIGZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnB1dC1udW1iZXItaWNvbi12aWV3XT1cIiFpbkxpbmVFZGl0IHx8ICFmaWVsZC5lZGl0YWJsZVwiPlxyXG4gICAgICAgIDwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tQm9vbGVhbiBWaWV3IE1vZGUtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgaXNCb29sZWFuKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2IChjbGljayk9XCJzdGFydEVkaXQoZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLnByb3BlcnR5LCAkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSlcIlxyXG4gICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXQtbm8tcGFkZGluZ109XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNOdW1iZXIoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1N0cmluZyhmaWVsZCkpXCJcclxuICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA5OCU7IG1heC13aWR0aDogOTglOyBwYWRkaW5nOiA3cHggMTBweFwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT0gZmFsc2UgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT0gJ2ZhbHNlJ1wiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWJvb2xlYW4tZmFsc2UtaWNvblwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1ib29sZWFuLWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImRhdGFbZmllbGQucHJvcGVydHldID09PSB1bmRlZmluZWQgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09IG51bGxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1ib29sZWFuLWluZGV0ZXJtaW5hdGUtaWNvblwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1ib29sZWFuLWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWJvb2xlYW4taW5kZXRlcm1pbmF0ZS1pY29uLWlubmVyXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8aSAqbmdJZj1cImRhdGFbZmllbGQucHJvcGVydHldID09PSB0cnVlIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSAndHJ1ZSdcIlxyXG4gICAgICAgICAgIGNsYXNzPVwiaWNvblVJTGFyZ2UtU2VsZWN0LUFsbFwiXHJcbiAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1ib29sZWFuLWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgPjwvaT5cclxuXHJcbiAgICAgIDwvZGl2PiAgICAgXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tIFRlbXBsYXRlIFZpZXcgTW9kZSAgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICN0ZW1wbGF0ZVJlZkNlbGQgKm5nSWY9XCJpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQpICYmIGRhdGFbZmllbGQucHJvcGVydHldXCI+XHJcbiAgICAgIDxkaXYgW2lkXT1cImdyaWRJRCArICdjb2x1bW4nICsgY2kgKyAncm93JyArIGlcIiBzdHlsZT1cIndpZHRoOiA5OCU7IG1heC13aWR0aDogOTglOyBwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdF09XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTdHJpbmcoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzVGltZShmaWVsZCkpXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXQtbm8tcGFkZGluZ109XCIoZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNOdW1iZXIoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSB8fCBpc1N0cmluZyhmaWVsZCkpXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImRhdGFbZmllbGQucHJvcGVydHldLnJlZjsgY29udGV4dDogZGF0YVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19