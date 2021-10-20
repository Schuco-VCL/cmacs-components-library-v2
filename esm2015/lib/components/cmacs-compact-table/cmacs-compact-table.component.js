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
import * as i10 from "ng-zorro-antd/core/transition-patch";
import * as i11 from "ng-zorro-antd/icon";
import * as i12 from "ng-zorro-antd/dropdown";
import * as i13 from "ng-zorro-antd/core/outlet";
import * as i14 from "@angular/cdk/drag-drop";
import * as i15 from "ng-zorro-antd/rate";
import * as i16 from "../cmacs-dropdown/dropdown-menu.component";
import * as i17 from "../cmacs-input/cmacs-input.directive";
import * as i18 from "../cmacs-date-picker/date-picker.component";
import * as i19 from "../cmacs-datetime-picker/cmacs-datetime-picker.component";
import * as i20 from "../cmacs-select/cmacs-select.component";
import * as i21 from "../cmacs-select/cmacs-option.component";
import * as i22 from "../cmacs-input-number/cmacs-input-number.component";
import * as i23 from "../cmacs-tooltip/tooltip";
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
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r21 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r26.getHeaderMaxWidth(field_r21));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-header", !ctx_r26.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(field_r21.display);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementContainer(1, 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    const fi_r22 = ctx_r29.index;
    const field_r21 = ctx_r29.$implicit;
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", ctx_r27.gridID + "column" + fi_r22);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", field_r21.template.ref)("ngTemplateOutletContext", field_r21.template.context);
} }
const _c8 = function () { return []; };
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 21);
    i0.ɵɵlistener("nzFilterChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzFilterChange_1_listener($event) { i0.ɵɵrestoreView(_r32); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.filter($event, field_r21.property); })("nzSortChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzSortChange_1_listener($event) { i0.ɵɵrestoreView(_r32); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r33 = i0.ɵɵnextContext(2); return field_r21.showSort ? field_r21.sortOrder : ctx_r33.defaultSortOrder = $event; })("nzSortOrderChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template_th_nzSortOrderChange_1_listener($event) { i0.ɵɵrestoreView(_r32); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.sort($event, field_r21.property); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_ng_container_2_Template, 3, 5, "ng-container", 3);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_div_3_Template, 2, 3, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext();
    const field_r21 = ctx_r37.$implicit;
    const fi_r22 = ctx_r37.index;
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("min-width", field_r21.minWidth ? field_r21.minWidth : field_r21.width);
    i0.ɵɵattributeInterpolate2("id", "", ctx_r23.gridID, "-column-", fi_r22, "");
    i0.ɵɵproperty("nzShowSort", field_r21.showSort)("nzShowFilter", field_r21.showFilter)("nzFilters", field_r21.filters ? field_r21.filters : i0.ɵɵpureFunction0(15, _c8))("nzFilterMultiple", field_r21.filterMultiple)("ngClass", ctx_r23.getClassMap(field_r21))("nzSort", field_r21.showSort ? field_r21.sortOrder : ctx_r23.defaultSortOrder)("nzWidth", field_r21.width)("nzLeft", field_r21.left ? field_r21.left : false)("nzRight", field_r21.right ? field_r21.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r21.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r21.template);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r21 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r38 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r38.getHeaderMaxWidth(field_r21));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-header", !ctx_r38.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(field_r21.display);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementContainer(1, 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext(2);
    const fi_r22 = ctx_r42.index;
    const field_r21 = ctx_r42.$implicit;
    const ctx_r39 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", ctx_r39.gridID + "column" + fi_r22);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", field_r21.template.ref)("ngTemplateOutletContext", field_r21.template.context);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 24);
    i0.ɵɵlistener("nzSortChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template_th_nzSortChange_0_listener($event) { i0.ɵɵrestoreView(_r45); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r43 = i0.ɵɵnextContext(2); return field_r21.showSort ? field_r21.sortOrder : ctx_r43.defaultSortOrder = $event; })("nzSortChange", function CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template_th_nzSortChange_0_listener($event) { i0.ɵɵrestoreView(_r45); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r46 = i0.ɵɵnextContext(2); return ctx_r46.sort($event, field_r21.property); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_ng_container_1_Template, 3, 5, "ng-container", 3);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_div_2_Template, 2, 3, "div", 22);
    i0.ɵɵelementStart(3, "nz-dropdown", 25, 26);
    i0.ɵɵelement(5, "i", 27);
    i0.ɵɵelementContainer(6, 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r40 = i0.ɵɵreference(4);
    const ctx_r48 = i0.ɵɵnextContext();
    const field_r21 = ctx_r48.$implicit;
    const fi_r22 = ctx_r48.index;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("min-width", field_r21.minWidth ? field_r21.minWidth : field_r21.width);
    i0.ɵɵattributeInterpolate2("id", "", ctx_r25.gridID, "-column-", fi_r22, "");
    i0.ɵɵproperty("nzShowSort", field_r21.showSort)("ngClass", ctx_r25.getClassMap(field_r21))("nzSort", field_r21.showSort ? field_r21.sortOrder : ctx_r25.defaultSortOrder)("nzWidth", field_r21.width)("nzLeft", field_r21.left ? field_r21.left : false)("nzRight", field_r21.right ? field_r21.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r21.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r21.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzClickHide", false);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("ant-table-filter-open", _r40.nzVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", field_r21.customFilter.ref)("ngTemplateOutletContext", field_r21.customFilter.context);
} }
function CmacsCompactTableComponent_thead_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_thead_3_ng_container_5_ng_container_1_Template, 4, 16, "ng-container", 19);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_ng_container_5_ng_template_2_Template, 7, 17, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
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
    const ctx_r49 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r49.extra);
} }
function CmacsCompactTableComponent_thead_3_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 28);
    i0.ɵɵelementStart(1, "div", 29);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_thead_3_th_7_ng_container_2_Template, 2, 1, "ng-container", 30);
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
    i0.ɵɵelement(0, "th", 31);
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
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 41);
    i0.ɵɵelementStart(1, "label", 18);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r67); const item_r58 = i0.ɵɵnextContext(2).$implicit; const ctx_r65 = i0.ɵɵnextContext(5); return ctx_r65.getNode(item_r58[ctx_r65.fieldID]).selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template_label_checkedChange_1_listener($event) { i0.ɵɵrestoreView(_r67); const item_r58 = i0.ɵɵnextContext(2).$implicit; const data_r55 = i0.ɵɵnextContext().$implicit; const ctx_r68 = i0.ɵɵnextContext(4); return ctx_r68.onCheckboxTreeChange($event, item_r58, ctx_r68.mapOfExpandedData[data_r55[ctx_r68.fieldID]]); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r60 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("min-width", "30px")("max-width", "30px")("width", "30px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r60.logs && !!item_r58.children);
    i0.ɵɵproperty("nzLeft", ctx_r60.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r60.getNode(item_r58[ctx_r60.fieldID]).selected)("indeterminate", ctx_r60.getNode(item_r58[ctx_r60.fieldID]).selected === -1);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c9 = function (a0, a1, a2, a3, a4) { return { field: a0, data: a1, i: a2, item: a3, ci: a4 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template, 1, 0, "ng-container", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r77 = i0.ɵɵnextContext();
    const field_r72 = ctx_r77.$implicit;
    const i_r73 = ctx_r77.index;
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const di_r56 = i0.ɵɵnextContext().index;
    const ctx_r74 = i0.ɵɵnextContext(4);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵstyleProp("display", ctx_r74.isNumber(field_r72) || ctx_r74.isTime(field_r72) || ctx_r74.isDate(field_r72) || ctx_r74.isSelect(field_r72) ? "block" : "inline-flex")("width", item_r58.children && !i_r73 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-container-logs", ctx_r74.expandable && ctx_r74.isString(field_r72) && !i_r73);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction5(8, _c9, field_r72, item_r58, di_r56, item_r58, i_r73));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c10 = function (a0, a1, a2) { return { field: a0, data: a1, i: a2 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template, 1, 0, "ng-container", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r81 = i0.ɵɵnextContext();
    const field_r72 = ctx_r81.$implicit;
    const i_r73 = ctx_r81.index;
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const di_r56 = i0.ɵɵnextContext().index;
    const ctx_r75 = i0.ɵɵnextContext(4);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵstyleProp("display", ctx_r75.isNumber(field_r72) ? "block" : "inline-flex")("width", item_r58.children && !i_r73 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(6, _c10, field_r72, item_r58, di_r56));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r86 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 42);
    i0.ɵɵlistener("nzExpandChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r86); const item_r58 = i0.ɵɵnextContext(2).$implicit; return item_r58.expand = $event; })("nzExpandChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r86); const item_r58 = i0.ɵɵnextContext(2).$implicit; const data_r55 = i0.ɵɵnextContext().$implicit; const ctx_r87 = i0.ɵɵnextContext(4); return ctx_r87.ExpandCollapse(ctx_r87.mapOfExpandedData[data_r55[ctx_r87.fieldID]], item_r58, $event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template, 2, 14, "div", 43);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template, 2, 10, "div", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r72 = ctx.$implicit;
    const i_r73 = ctx.index;
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r61 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("padding-left", ctx_r61.getCustomPadding(item_r58, i_r73), "px")("min-width", field_r72.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r72.editable)("cmacs-compact-table-on-edit-expandable", ctx_r61.editId === item_r58[ctx_r61.config.fieldId] && ctx_r61.property === field_r72.property && field_r72.editable && (ctx_r61.isString(field_r72) || ctx_r61.isDate(field_r72) || ctx_r61.isTime(field_r72) || ctx_r61.isSelect(field_r72) || ctx_r61.isNumber(field_r72) && field_r72.editable))("cmacs-compact-table-logs-header-th-font", ctx_r61.logs && !!item_r58.children)("cmacs-compact-table-expandable-td", !i_r73);
    i0.ɵɵproperty("ngClass", ctx_r61.getCustomClass(field_r72))("nzShowExpand", item_r58.children && !i_r73)("nzExpand", item_r58.expand)("nzLeft", field_r72.left ? field_r72.left : false)("nzRight", field_r72.right ? field_r72.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r61.editId !== item_r58[ctx_r61.config.fieldId] || ctx_r61.property !== field_r72.property || field_r72.editable === false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r61.editId === item_r58[ctx_r61.config.fieldId] && ctx_r61.property === field_r72.property && (field_r72.editable || field_r72.editable === undefined));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 46);
    i0.ɵɵelementStart(1, "nz-rate", 47);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r93); const data_r55 = i0.ɵɵnextContext(3).$implicit; const ctx_r91 = i0.ɵɵnextContext(4); return ctx_r91.onRateChange($event, data_r55); })("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r93); const ctx_r94 = i0.ɵɵnextContext(7); return ctx_r94.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const data_r55 = i0.ɵɵnextContext().$implicit;
    const ctx_r62 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r62.logs && !!item_r58.children);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r55[ctx_r62.config.fieldRate])("nzCount", ctx_r62.rateCount)("nzDisabled", !ctx_r62.inLineEdit);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 48);
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r63 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r63.logs && !!item_r58.children);
    i0.ɵɵproperty("nzRight", ctx_r63.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 49);
} if (rf & 2) {
    const ctx_r64 = i0.ɵɵnextContext(7);
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r64.logs);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r100 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 35);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_click_0_listener() { i0.ɵɵrestoreView(_r100); const item_r58 = i0.ɵɵnextContext().$implicit; const ctx_r98 = i0.ɵɵnextContext(5); return ctx_r98.selectTreeSingle(item_r58); })("touchstart", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r100); const item_r58 = i0.ɵɵnextContext().$implicit; const ctx_r101 = i0.ɵɵnextContext(5); return ctx_r101.tapHandler($event, item_r58); })("dblclick", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template_tr_dblclick_0_listener() { i0.ɵɵrestoreView(_r100); const item_r58 = i0.ɵɵnextContext().$implicit; const ctx_r103 = i0.ɵɵnextContext(5); return ctx_r103.dblClickRow(item_r58); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_1_Template, 2, 11, "td", 36);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_2_Template, 3, 19, "td", 37);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_3_Template, 2, 5, "td", 38);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_4_Template, 1, 3, "td", 39);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_td_5_Template, 1, 2, "td", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext().$implicit;
    const ctx_r59 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-expandable-row", ctx_r59.inLineEdit)("cmacs-compact-table-header-logs", ctx_r59.logs && !!item_r58.children)("ant-table-selected-row", ctx_r59.checkboxSelect ? ctx_r59.getNode(item_r58[ctx_r59.fieldID]).selected : ctx_r59.selection.isSelected(item_r58[ctx_r59.fieldID]));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r59.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r59.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r59.showRate && ctx_r59.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r59.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r59.centerTable);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_tr_1_Template, 6, 11, "tr", 34);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r58.parent && item_r58.parent.expand || !item_r58.parent);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r55 = ctx.$implicit;
    const ctx_r54 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r54.mapOfExpandedData[data_r55[ctx_r54.fieldID]]);
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
    const _r120 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 60);
    i0.ɵɵelementStart(1, "i", 15);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_4_Template_i_click_1_listener($event) { i0.ɵɵrestoreView(_r120); const i_r108 = i0.ɵɵnextContext().index; const ctx_r118 = i0.ɵɵnextContext(4); return ctx_r118.addRow(i_r108, $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r110 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r110.logs);
    i0.ɵɵproperty("nzLeft", ctx_r110.getStickyWidth("smartTable"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 61);
    i0.ɵɵelement(1, "i", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r111 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵproperty("nzLeft", ctx_r111.getStickyWidth("draggable"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r123 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 64);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r123); const data_r107 = i0.ɵɵnextContext(2).$implicit; const ctx_r122 = i0.ɵɵnextContext(4); return ctx_r122.checkboxCache[ctx_r122.getIndex(data_r107[ctx_r122.config.fieldId])].selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r123); const data_r107 = i0.ɵɵnextContext(2).$implicit; const ctx_r125 = i0.ɵɵnextContext(4); return ctx_r125.onCheckboxChange($event, data_r107); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r107 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r121 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngModel", ctx_r121.checkboxCache[ctx_r121.getIndex(data_r107[ctx_r121.config.fieldId])].selected);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 41);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_label_1_Template, 1, 1, "label", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r107 = i0.ɵɵnextContext().$implicit;
    const ctx_r112 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("cmacs-compact-table-fst-td", !ctx_r112.draggable);
    i0.ɵɵproperty("nzLeft", ctx_r112.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r107[ctx_r112.config.fieldId] && ctx_r112.checkboxCache[ctx_r112.getIndex(data_r107[ctx_r112.config.fieldId])]);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c11 = function (a0, a1, a2, a3) { return { field: a0, data: a1, i: a2, ci: a3 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_ng_container_1_Template, 1, 0, "ng-container", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r134 = i0.ɵɵnextContext();
    const field_r129 = ctx_r134.$implicit;
    const j_r130 = ctx_r134.index;
    const ctx_r135 = i0.ɵɵnextContext();
    const data_r107 = ctx_r135.$implicit;
    const i_r108 = ctx_r135.index;
    i0.ɵɵnextContext(4);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c11, field_r129, data_r107, i_r108, j_r130));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_ng_container_1_Template, 1, 0, "ng-container", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r129 = i0.ɵɵnextContext().$implicit;
    const ctx_r138 = i0.ɵɵnextContext();
    const data_r107 = ctx_r138.$implicit;
    const i_r108 = ctx_r138.index;
    i0.ɵɵnextContext(4);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c10, field_r129, data_r107, i_r108));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 65);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_1_Template, 2, 7, "div", 66);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_div_2_Template, 2, 6, "div", 66);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r129 = ctx.$implicit;
    const j_r130 = ctx.index;
    const data_r107 = i0.ɵɵnextContext().$implicit;
    const ctx_r113 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("min-width", field_r129.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r129.editable)("cmacs-compact-table-fst-td", !ctx_r113.draggable && !ctx_r113.checkboxSelect && !j_r130);
    i0.ɵɵproperty("ngClass", ctx_r113.getCustomClass(field_r129))("nzLeft", field_r129.left ? field_r129.left : false)("nzRight", field_r129.right ? field_r129.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r113.config && (ctx_r113.editId !== data_r107[ctx_r113.config.fieldId] || ctx_r113.property !== field_r129.property || field_r129.editable === false));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r113.config && ctx_r113.editId === data_r107[ctx_r113.config.fieldId] && ctx_r113.property === field_r129.property && (field_r129.editable || field_r129.editable === undefined));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r142 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 68);
    i0.ɵɵelementStart(1, "nz-rate", 69);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r142); const data_r107 = i0.ɵɵnextContext().$implicit; const ctx_r140 = i0.ɵɵnextContext(4); return ctx_r140.onRateChange($event, data_r107); })("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r142); const ctx_r143 = i0.ɵɵnextContext(5); return ctx_r143.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r107 = i0.ɵɵnextContext().$implicit;
    const ctx_r114 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r107[ctx_r114.config.fieldRate])("nzCount", ctx_r114.rateCount);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 48);
} if (rf & 2) {
    const ctx_r115 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("nzRight", ctx_r115.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r148 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 72);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_i_1_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r148); const i_r108 = i0.ɵɵnextContext(2).index; const ctx_r146 = i0.ɵɵnextContext(4); return ctx_r146.deleteRow(i_r108, $event); });
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 70);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_i_1_Template, 1, 0, "i", 71);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r107 = i0.ɵɵnextContext().$implicit;
    const ctx_r116 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r116.logs);
    i0.ɵɵproperty("nzRight", ctx_r116.getStickyWidthRight("smartTable"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r107.deleteEnabled === undefined || data_r107.deleteEnabled);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 49);
} if (rf & 2) {
    const ctx_r117 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r117.logs);
} }
const _c12 = function (a0, a1) { return { dropdown: a0, data: a1 }; };
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r151 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 51);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r151); const data_r107 = ctx.$implicit; const ctx_r150 = i0.ɵɵnextContext(4); return ctx_r150.clickRow($event, data_r107); })("touchstart", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r151); const data_r107 = ctx.$implicit; const ctx_r152 = i0.ɵɵnextContext(4); return ctx_r152.tapHandler($event, data_r107); })("contextmenu", function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r151); const _r109 = i0.ɵɵreference(2); const ctx_r153 = i0.ɵɵnextContext(4); return ctx_r153.contextMenu($event, _r109); });
    i0.ɵɵelementStart(1, "cmacs-dropdown-menu", null, 52);
    i0.ɵɵelementContainer(3, 23);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_4_Template, 2, 7, "td", 53);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_5_Template, 2, 5, "td", 54);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_6_Template, 2, 4, "td", 55);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_7_Template, 3, 11, "td", 56);
    i0.ɵɵtemplate(8, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_8_Template, 2, 2, "td", 57);
    i0.ɵɵtemplate(9, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_9_Template, 1, 1, "td", 58);
    i0.ɵɵtemplate(10, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_10_Template, 2, 8, "td", 59);
    i0.ɵɵtemplate(11, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_td_11_Template, 1, 2, "td", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r107 = ctx.$implicit;
    const ctx_r106 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("ant-table-selected-row", ctx_r106.isRowSelected(data_r107))("cmacs-compact-table-editable-row", ctx_r106.inLineEdit)("cmacs-compact-table-smart-table-row", ctx_r106.smartTable && ctx_r106.inLineEdit);
    i0.ɵɵproperty("cdkDragDisabled", !ctx_r106.draggable);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r106.contextmenu)("ngTemplateOutletContext", i0.ɵɵpureFunction2(17, _c12, ctx_r106.dropdown, data_r107));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r106.smartTable && ctx_r106.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r106.draggable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r106.checkboxSelect && ctx_r106.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r106.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r106.showRate && ctx_r106.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r106.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r106.smartTable && ctx_r106.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r106.centerTable);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_tr_0_Template, 12, 20, "tr", 50);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngForOf", _r0.data);
} }
function CmacsCompactTableComponent_tbody_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 19);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_4_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 33, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r52 = i0.ɵɵreference(3);
    const ctx_r50 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r50.expandable)("ngIfElse", _r52);
} }
function CmacsCompactTableComponent_tbody_4_Template(rf, ctx) { if (rf & 1) {
    const _r155 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tbody", 32);
    i0.ɵɵlistener("cdkDropListDropped", function CmacsCompactTableComponent_tbody_4_Template_tbody_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r155); const ctx_r154 = i0.ɵɵnextContext(); return ctx_r154.drop($event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_4_ng_container_1_Template, 4, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.config && ctx_r2.config.fields && ctx_r2.config.fields.length);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r172 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 41);
    i0.ɵɵelementStart(1, "label", 18);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r172); const item_r164 = i0.ɵɵnextContext(2).$implicit; const ctx_r170 = i0.ɵɵnextContext(5); return ctx_r170.getNode(item_r164[ctx_r170.fieldID]).selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template_label_checkedChange_1_listener($event) { i0.ɵɵrestoreView(_r172); const item_r164 = i0.ɵɵnextContext(2).$implicit; const data_r157 = i0.ɵɵnextContext(3).$implicit; const ctx_r173 = i0.ɵɵnextContext(2); return ctx_r173.onCheckboxTreeChange($event, item_r164, ctx_r173.mapOfExpandedData[data_r157[ctx_r173.fieldID]]); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r164 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r166 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("min-width", "30px")("max-width", "30px")("width", "30px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r166.logs && !!item_r164.children);
    i0.ɵɵproperty("nzLeft", ctx_r166.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r166.getNode(item_r164[ctx_r166.fieldID]).selected)("indeterminate", ctx_r166.getNode(item_r164[ctx_r166.fieldID]).selected === -1);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_ng_container_1_Template, 1, 0, "ng-container", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r182 = i0.ɵɵnextContext();
    const field_r177 = ctx_r182.$implicit;
    const i_r178 = ctx_r182.index;
    const item_r164 = i0.ɵɵnextContext(2).$implicit;
    const di_r158 = i0.ɵɵnextContext(3).i;
    const ctx_r179 = i0.ɵɵnextContext(2);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵstyleProp("display", ctx_r179.isNumber(field_r177) || ctx_r179.isTime(field_r177) || ctx_r179.isDate(field_r177) || ctx_r179.isSelect(field_r177) ? "block" : "inline-flex")("width", item_r164.children && !i_r178 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell-container-logs", ctx_r179.expandable && ctx_r179.isString(field_r177) && !i_r178);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction5(8, _c9, field_r177, item_r164, di_r158, item_r164, i_r178));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_ng_container_1_Template, 1, 0, "ng-container", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r186 = i0.ɵɵnextContext();
    const field_r177 = ctx_r186.$implicit;
    const i_r178 = ctx_r186.index;
    const item_r164 = i0.ɵɵnextContext(2).$implicit;
    const di_r158 = i0.ɵɵnextContext(3).i;
    const ctx_r180 = i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵstyleProp("display", ctx_r180.isNumber(field_r177) ? "block" : "inline-flex")("width", item_r164.children && !i_r178 ? "calc(100% - 25px)" : "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(6, _c10, field_r177, item_r164, di_r158));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r191 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 78);
    i0.ɵɵlistener("nzExpandChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r191); const item_r164 = i0.ɵɵnextContext(2).$implicit; return item_r164.expand = $event; })("nzExpandChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template_td_nzExpandChange_0_listener($event) { i0.ɵɵrestoreView(_r191); const item_r164 = i0.ɵɵnextContext(2).$implicit; const data_r157 = i0.ɵɵnextContext(3).$implicit; const ctx_r192 = i0.ɵɵnextContext(2); return ctx_r192.ExpandCollapse(ctx_r192.mapOfExpandedData[data_r157[ctx_r192.fieldID]], item_r164, $event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_1_Template, 2, 14, "div", 43);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_div_2_Template, 2, 10, "div", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r177 = ctx.$implicit;
    const i_r178 = ctx.index;
    const item_r164 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r167 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("padding-left", ctx_r167.getCustomPadding(item_r164, i_r178), "px")("min-width", field_r177.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r177.editable)("cmacs-compact-table-on-edit-expandable", ctx_r167.editId === item_r164[ctx_r167.config.fieldId] && ctx_r167.property === field_r177.property && field_r177.editable && (ctx_r167.isString(field_r177) || ctx_r167.isDate(field_r177) || ctx_r167.isTime(field_r177) || ctx_r167.isSelect(field_r177) || ctx_r167.isNumber(field_r177) && field_r177.editable))("cmacs-compact-table-logs-header-th-font", ctx_r167.logs && !!item_r164.children)("cmacs-compact-table-expandable-td", !i_r178);
    i0.ɵɵproperty("nzShowExpand", !!item_r164.children && !i_r178)("nzExpand", item_r164.expand)("nzLeft", field_r177.left ? field_r177.left : false)("nzRight", field_r177.right ? field_r177.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r167.editId !== item_r164[ctx_r167.config.fieldId] || ctx_r167.property !== field_r177.property || field_r177.editable === false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r167.editId === item_r164[ctx_r167.config.fieldId] && ctx_r167.property === field_r177.property && (field_r177.editable || field_r177.editable === undefined));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r198 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 46);
    i0.ɵɵelementStart(1, "nz-rate", 47);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r198); const data_r157 = i0.ɵɵnextContext(5).$implicit; const ctx_r196 = i0.ɵɵnextContext(2); return ctx_r196.onRateChange($event, data_r157); })("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r198); const ctx_r199 = i0.ɵɵnextContext(7); return ctx_r199.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r164 = i0.ɵɵnextContext(2).$implicit;
    const data_r157 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r168 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r168.logs && item_r164.children && item_r164.children.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r157[ctx_r168.config.fieldRate])("nzCount", ctx_r168.rateCount)("nzDisabled", !ctx_r168.inLineEdit);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 48);
} if (rf & 2) {
    const item_r164 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r169 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-logs-header-th-font", ctx_r169.logs && item_r164.children && item_r164.children.length);
    i0.ɵɵproperty("nzRight", ctx_r169.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r205 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 76);
    i0.ɵɵlistener("touchstart", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r205); const item_r164 = i0.ɵɵnextContext().$implicit; const ctx_r203 = i0.ɵɵnextContext(5); return ctx_r203.tapHandler($event, item_r164); })("dblclick", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template_tr_dblclick_0_listener() { i0.ɵɵrestoreView(_r205); const item_r164 = i0.ɵɵnextContext().$implicit; const ctx_r206 = i0.ɵɵnextContext(5); return ctx_r206.dblClickRow(item_r164); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_1_Template, 2, 11, "td", 36);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_2_Template, 3, 18, "td", 77);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_3_Template, 2, 5, "td", 38);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_td_4_Template, 1, 3, "td", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r164 = i0.ɵɵnextContext().$implicit;
    const ctx_r165 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("cmacs-compact-table-expandable-row", ctx_r165.inLineEdit)("cmacs-compact-table-header-logs", ctx_r165.logs && !!item_r164.children);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r165.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r165.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r165.showRate && ctx_r165.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r165.extra);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_tr_1_Template, 5, 8, "tr", 75);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r164 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r164.parent && item_r164.parent.expand || !item_r164.parent);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r157 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r160 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r160.mapOfExpandedData[data_r157[ctx_r160.fieldID]]);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 23);
} if (rf & 2) {
    const data_r157 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r211 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r211.contextmenu)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c12, ctx_r211.dropdown, data_r157));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r222 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 60);
    i0.ɵɵelementStart(1, "i", 15);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_Template_i_click_1_listener($event) { i0.ɵɵrestoreView(_r222); const di_r158 = i0.ɵɵnextContext(3).i; const ctx_r220 = i0.ɵɵnextContext(2); return ctx_r220.addRow(di_r158, $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r212 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r212.logs);
    i0.ɵɵproperty("nzLeft", ctx_r212.getStickyWidth("smartTable"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 61);
    i0.ɵɵelement(1, "i", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r213 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵproperty("nzLeft", ctx_r213.getStickyWidth("draggable"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r225 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 64);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r225); const data_r157 = i0.ɵɵnextContext(4).$implicit; const ctx_r224 = i0.ɵɵnextContext(2); return ctx_r224.checkboxCache[ctx_r224.getIndex(data_r157[ctx_r224.config.fieldId])].selected = $event; })("checkedChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r225); const data_r157 = i0.ɵɵnextContext(4).$implicit; const ctx_r227 = i0.ɵɵnextContext(2); return ctx_r227.onCheckboxChange($event, data_r157); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r157 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r223 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r223.checkboxCache[ctx_r223.getIndex(data_r157[ctx_r223.config.fieldId])].selected);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 41);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_label_1_Template, 1, 1, "label", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r157 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r214 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-compact-table-fst-td", !ctx_r214.draggable);
    i0.ɵɵproperty("nzLeft", ctx_r214.getStickyWidth("checkboxSelect"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r157[ctx_r214.config.fieldId] && ctx_r214.checkboxCache[ctx_r214.getIndex(data_r157[ctx_r214.config.fieldId])]);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_ng_container_1_Template, 1, 0, "ng-container", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r236 = i0.ɵɵnextContext();
    const field_r231 = ctx_r236.$implicit;
    const j_r232 = ctx_r236.index;
    const ctx_r237 = i0.ɵɵnextContext(3);
    const data_r157 = ctx_r237.$implicit;
    const di_r158 = ctx_r237.i;
    i0.ɵɵnextContext(2);
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c11, field_r231, data_r157, di_r158, j_r232));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_ng_container_1_Template, 1, 0, "ng-container", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r231 = i0.ɵɵnextContext().$implicit;
    const ctx_r240 = i0.ɵɵnextContext(3);
    const data_r157 = ctx_r240.$implicit;
    const di_r158 = ctx_r240.i;
    i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c10, field_r231, data_r157, di_r158));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 81);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_1_Template, 2, 7, "div", 66);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_div_2_Template, 2, 6, "div", 66);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r231 = ctx.$implicit;
    const j_r232 = ctx.index;
    const data_r157 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r215 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("min-width", field_r231.width);
    i0.ɵɵclassProp("cmacs-editable-column", field_r231.editable)("cmacs-compact-table-fst-td", !ctx_r215.draggable && !ctx_r215.checkboxSelect && !j_r232);
    i0.ɵɵproperty("nzLeft", field_r231.left ? field_r231.left : false)("nzRight", field_r231.right ? field_r231.right : false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r215.config && (ctx_r215.editId !== data_r157[ctx_r215.config.fieldId] || ctx_r215.property !== field_r231.property || field_r231.editable === false));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r215.config && ctx_r215.editId === data_r157[ctx_r215.config.fieldId] && ctx_r215.property === field_r231.property && (field_r231.editable || field_r231.editable === undefined));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r244 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 68);
    i0.ɵɵelementStart(1, "nz-rate", 69);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r244); const data_r157 = i0.ɵɵnextContext(3).$implicit; const ctx_r242 = i0.ɵɵnextContext(2); return ctx_r242.onRateChange($event, data_r157); })("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r244); const ctx_r245 = i0.ɵɵnextContext(5); return ctx_r245.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r157 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r216 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r157[ctx_r216.config.fieldRate])("nzCount", ctx_r216.rateCount);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 48);
} if (rf & 2) {
    const ctx_r217 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("nzRight", ctx_r217.getStickyWidthRight("extra"));
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r250 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 72);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_i_1_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r250); const di_r158 = i0.ɵɵnextContext(4).i; const ctx_r248 = i0.ɵɵnextContext(2); return ctx_r248.deleteRow(di_r158, $event); });
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 70);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_i_1_Template, 1, 0, "i", 71);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r157 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r218 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵclassProp("cmacs-compact-table-logs-td", ctx_r218.logs);
    i0.ɵɵproperty("nzRight", ctx_r218.getStickyWidthRight("smartTable"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r157.deleteEnabled === undefined || data_r157.deleteEnabled);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r254 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 51);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r254); const data_r157 = i0.ɵɵnextContext(2).$implicit; const ctx_r252 = i0.ɵɵnextContext(2); return ctx_r252.clickRow($event, data_r157); })("touchstart", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r254); const data_r157 = i0.ɵɵnextContext(2).$implicit; const ctx_r255 = i0.ɵɵnextContext(2); return ctx_r255.tapHandler($event, data_r157); })("contextmenu", function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r254); const _r210 = i0.ɵɵreference(2); const ctx_r257 = i0.ɵɵnextContext(4); return ctx_r257.contextMenu($event, _r210); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_ng_template_1_Template, 1, 5, "ng-template", null, 79, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_3_Template, 2, 7, "td", 53);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_4_Template, 2, 5, "td", 54);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_5_Template, 2, 4, "td", 55);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_6_Template, 3, 10, "td", 80);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_7_Template, 2, 2, "td", 57);
    i0.ɵɵtemplate(8, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_8_Template, 1, 1, "td", 58);
    i0.ɵɵtemplate(9, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_td_9_Template, 2, 8, "td", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r157 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r162 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("ant-table-selected-row", ctx_r162.isRowSelected(data_r157))("cmacs-compact-table-editable-row", ctx_r162.inLineEdit)("cmacs-compact-table-smart-table-row", ctx_r162.smartTable && ctx_r162.inLineEdit);
    i0.ɵɵproperty("cdkDragDisabled", !ctx_r162.draggable);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r162.smartTable && ctx_r162.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r162.draggable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r162.checkboxSelect && ctx_r162.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r162.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r162.showRate && ctx_r162.config);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r162.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r162.smartTable && ctx_r162.inLineEdit);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 19);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_ng_template_2_Template, 10, 14, "ng-template", null, 74, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r161 = i0.ɵɵreference(3);
    const ctx_r159 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r159.expandable)("ngIfElse", _r161);
} }
function CmacsCompactTableComponent_tbody_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_tbody_5_ng_template_1_ng_container_0_Template, 4, 2, "ng-container", 3);
} if (rf & 2) {
    const ctx_r156 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r156.config && ctx_r156.config.fields && ctx_r156.config.fields.length);
} }
function CmacsCompactTableComponent_tbody_5_Template(rf, ctx) { if (rf & 1) {
    const _r260 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tbody", 32);
    i0.ɵɵlistener("cdkDropListDropped", function CmacsCompactTableComponent_tbody_5_Template_tbody_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r260); const ctx_r259 = i0.ɵɵnextContext(); return ctx_r259.drop($event); });
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_tbody_5_ng_template_1_Template, 1, 1, "ng-template", 73);
    i0.ɵɵelementEnd();
} }
function CmacsCompactTableComponent_ng_template_6_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r273 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 89, 90);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r273); const ctx_r272 = i0.ɵɵnextContext(2); return ctx_r272.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r273); const ctx_r274 = i0.ɵɵnextContext(2); return ctx_r274.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r273); const ctx_r276 = i0.ɵɵnextContext(); const data_r262 = ctx_r276.data; const field_r261 = ctx_r276.field; return (data_r262[field_r261.property] = $event); })("keyup", function CmacsCompactTableComponent_ng_template_6_input_0_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r273); const ctx_r278 = i0.ɵɵnextContext(); const i_r263 = ctx_r278.i; const data_r262 = ctx_r278.data; const ctx_r277 = i0.ɵɵnextContext(); return ctx_r277.endEditMode($event, i_r263, data_r262); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r279 = i0.ɵɵnextContext();
    const data_r262 = ctx_r279.data;
    const field_r261 = ctx_r279.field;
    const ctx_r264 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r264.validate(data_r262, field_r261));
    i0.ɵɵproperty("placeholder", field_r261.placeholder ? field_r261.placeholder : "")("ngModel", data_r262[field_r261.property]);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template(rf, ctx) { if (rf & 1) {
    const _r282 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-date-picker", 91, 92);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_click_0_listener($event) { i0.ɵɵrestoreView(_r282); const ctx_r281 = i0.ɵɵnextContext(2); return ctx_r281.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r282); const ctx_r283 = i0.ɵɵnextContext(2); return ctx_r283.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r282); const ctx_r285 = i0.ɵɵnextContext(); const data_r262 = ctx_r285.data; const field_r261 = ctx_r285.field; return (data_r262[field_r261.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template_cmacs_date_picker_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r282); const ctx_r287 = i0.ɵɵnextContext(); const i_r263 = ctx_r287.i; const data_r262 = ctx_r287.data; const ctx_r286 = i0.ɵɵnextContext(); return ctx_r286.endEditModeNgModel(i_r263, data_r262); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r288 = i0.ɵɵnextContext();
    const data_r262 = ctx_r288.data;
    const field_r261 = ctx_r288.field;
    const ctx_r265 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r265.validate(data_r262, field_r261));
    i0.ɵɵproperty("format", "MM/dd/yyyy")("allowClear", true)("ngModel", data_r262[field_r261.property]);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template(rf, ctx) { if (rf & 1) {
    const _r291 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-datetime-picker", 93, 94);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_click_0_listener($event) { i0.ɵɵrestoreView(_r291); const ctx_r290 = i0.ɵɵnextContext(2); return ctx_r290.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r291); const ctx_r292 = i0.ɵɵnextContext(2); return ctx_r292.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r291); const ctx_r294 = i0.ɵɵnextContext(); const data_r262 = ctx_r294.data; const field_r261 = ctx_r294.field; return (data_r262[field_r261.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template_cmacs_datetime_picker_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r291); const ctx_r296 = i0.ɵɵnextContext(); const i_r263 = ctx_r296.i; const data_r262 = ctx_r296.data; const ctx_r295 = i0.ɵɵnextContext(); return ctx_r295.ngModelChange(i_r263, data_r262); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r297 = i0.ɵɵnextContext();
    const data_r262 = ctx_r297.data;
    const field_r261 = ctx_r297.field;
    const ctx_r266 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r266.validate(data_r262, field_r261));
    i0.ɵɵproperty("use12Hours", ctx_r266.use12Hours)("format", field_r261.timeFormat ? field_r261.timeFormat : "h:mm a")("defaultOpenValue", ctx_r266.defaultTimeValue)("ngModel", data_r262[field_r261.property]);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_cmacs_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 98);
} if (rf & 2) {
    const sData_r300 = ctx.$implicit;
    const field_r261 = i0.ɵɵnextContext(2).field;
    i0.ɵɵpropertyInterpolate("label", sData_r300[field_r261.select.label]);
    i0.ɵɵpropertyInterpolate("value", sData_r300[field_r261.select.value]);
    i0.ɵɵpropertyInterpolate("divider", sData_r300[field_r261.select.divider]);
    i0.ɵɵproperty("disabled", sData_r300.disabled);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r303 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-select", 95, 96);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_click_0_listener($event) { i0.ɵɵrestoreView(_r303); const ctx_r302 = i0.ɵɵnextContext(2); return ctx_r302.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r303); const ctx_r304 = i0.ɵɵnextContext(2); return ctx_r304.preventDefault($event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r303); const ctx_r306 = i0.ɵɵnextContext(); const data_r262 = ctx_r306.data; const field_r261 = ctx_r306.field; return (data_r262[field_r261.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template_cmacs_select_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r303); const ctx_r308 = i0.ɵɵnextContext(); const i_r263 = ctx_r308.i; const data_r262 = ctx_r308.data; const field_r261 = ctx_r308.field; const ctx_r307 = i0.ɵɵnextContext(); return ctx_r307.endEditModeNgModel(i_r263, data_r262, null, field_r261); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_6_cmacs_select_3_cmacs_option_2_Template, 1, 4, "cmacs-option", 97);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r309 = i0.ɵɵnextContext();
    const data_r262 = ctx_r309.data;
    const field_r261 = ctx_r309.field;
    const ctx_r267 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r267.validate(data_r262, field_r261));
    i0.ɵɵproperty("placeHolder", field_r261.placeholder ? field_r261.placeholder : "")("mode", field_r261.mode ? field_r261.mode : "default")("showCmacsSearch", field_r261.showCmacsSearch)("ngModel", data_r262[field_r261.property]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r261.select.selectData);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template(rf, ctx) { if (rf & 1) {
    const _r313 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 99, 100);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r313); const ctx_r312 = i0.ɵɵnextContext(); const data_r262 = ctx_r312.data; const field_r261 = ctx_r312.field; return (data_r262[field_r261.property] = $event); })("click", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r313); const ctx_r314 = i0.ɵɵnextContext(2); return ctx_r314.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r313); const ctx_r315 = i0.ɵɵnextContext(2); return ctx_r315.preventDefault($event); })("keyup", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r313); const ctx_r317 = i0.ɵɵnextContext(); const i_r263 = ctx_r317.i; const data_r262 = ctx_r317.data; const ctx_r316 = i0.ɵɵnextContext(); return ctx_r316.endEditMode($event, i_r263, data_r262); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r313); const ctx_r319 = i0.ɵɵnextContext(); const i_r263 = ctx_r319.i; const data_r262 = ctx_r319.data; const ctx_r318 = i0.ɵɵnextContext(); return ctx_r318.ngModelChange(i_r263, data_r262); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r320 = i0.ɵɵnextContext();
    const data_r262 = ctx_r320.data;
    const field_r261 = ctx_r320.field;
    const ctx_r268 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r268.validate(data_r262, field_r261));
    i0.ɵɵproperty("ngModel", data_r262[field_r261.property])("cmacsStep", field_r261.cmacsStep)("min", field_r261.min)("max", field_r261.max)("formatter", ctx_r268.formatter)("parser", ctx_r268.parser);
} }
function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template(rf, ctx) { if (rf & 1) {
    const _r324 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 101, 100);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r324); const ctx_r323 = i0.ɵɵnextContext(); const data_r262 = ctx_r323.data; const field_r261 = ctx_r323.field; return (data_r262[field_r261.property] = $event); })("click", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r324); const ctx_r325 = i0.ɵɵnextContext(2); return ctx_r325.preventDefault($event); })("dblclick", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r324); const ctx_r326 = i0.ɵɵnextContext(2); return ctx_r326.preventDefault($event); })("keyup", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r324); const ctx_r328 = i0.ɵɵnextContext(); const i_r263 = ctx_r328.i; const data_r262 = ctx_r328.data; const ctx_r327 = i0.ɵɵnextContext(); return ctx_r327.endEditMode($event, i_r263, data_r262); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r324); const ctx_r330 = i0.ɵɵnextContext(); const i_r263 = ctx_r330.i; const data_r262 = ctx_r330.data; const ctx_r329 = i0.ɵɵnextContext(); return ctx_r329.ngModelChange(i_r263, data_r262); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r331 = i0.ɵɵnextContext();
    const data_r262 = ctx_r331.data;
    const field_r261 = ctx_r331.field;
    const ctx_r269 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r269.validate(data_r262, field_r261));
    i0.ɵɵproperty("ngModel", data_r262[field_r261.property])("cmacsStep", field_r261.cmacsStep ? field_r261.cmacsStep : 1)("min", field_r261.min)("max", field_r261.max);
} }
function CmacsCompactTableComponent_ng_template_6_label_6_Template(rf, ctx) { if (rf & 1) {
    const _r335 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 102, 103);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableComponent_ng_template_6_label_6_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r335); const ctx_r334 = i0.ɵɵnextContext(); const data_r262 = ctx_r334.data; const field_r261 = ctx_r334.field; return (data_r262[field_r261.property] = $event); })("ngModelChange", function CmacsCompactTableComponent_ng_template_6_label_6_Template_label_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r335); const ctx_r337 = i0.ɵɵnextContext(); const i_r263 = ctx_r337.i; const data_r262 = ctx_r337.data; const ctx_r336 = i0.ɵɵnextContext(); return ctx_r336.endEditModeNgModel(i_r263, data_r262); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r338 = i0.ɵɵnextContext();
    const data_r262 = ctx_r338.data;
    const field_r261 = ctx_r338.field;
    const ctx_r270 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-mode-invalid", !ctx_r270.validate(data_r262, field_r261));
    i0.ɵɵproperty("ngModel", data_r262[field_r261.property]);
} }
function CmacsCompactTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsCompactTableComponent_ng_template_6_input_0_Template, 2, 4, "input", 82);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_ng_template_6_cmacs_date_picker_1_Template, 2, 5, "cmacs-date-picker", 83);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_6_cmacs_datetime_picker_2_Template, 2, 6, "cmacs-datetime-picker", 84);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_6_cmacs_select_3_Template, 3, 7, "cmacs-select", 85);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_6_cmacs_input_number_4_Template, 2, 8, "cmacs-input-number", 86);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_ng_template_6_cmacs_input_number_5_Template, 2, 6, "cmacs-input-number", 87);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_ng_template_6_label_6_Template, 2, 3, "label", 88);
} if (rf & 2) {
    const field_r261 = ctx.field;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r5.isString(field_r261));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isDate(field_r261));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isTime(field_r261));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isSelect(field_r261));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isNumber(field_r261) && !ctx_r5.isSelect(field_r261) && field_r261.useCommaMarker);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isNumber(field_r261) && !ctx_r5.isSelect(field_r261) && !field_r261.useCommaMarker);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isBoolean(field_r261));
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r354 = i0.ɵɵnextContext(2);
    const field_r339 = ctx_r354.field;
    const item_r342 = ctx_r354.item;
    const i_r341 = ctx_r354.i;
    const data_r340 = ctx_r354.data;
    const ctx_r351 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r351.getMaxWidth(field_r339, item_r342, i_r341));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell", !ctx_r351.wrapLines)("cmacs-compact-table-invalid", !ctx_r351.validate(data_r340, field_r339));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r340[field_r339.property] && data_r340[field_r339.property].length ? data_r340[field_r339.property] : field_r339.placeholder, " ");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 109);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r355 = i0.ɵɵnextContext(2);
    const field_r339 = ctx_r355.field;
    const item_r342 = ctx_r355.item;
    const i_r341 = ctx_r355.i;
    const data_r340 = ctx_r355.data;
    const ctx_r352 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r352.getMaxWidth(field_r339, item_r342, i_r341));
    i0.ɵɵclassProp("cmacs-compact-table-overflow-cell", !ctx_r352.wrapLines)("cmacs-compact-table-invalid", !ctx_r352.validate(data_r340, field_r339));
    i0.ɵɵproperty("title", data_r340[field_r339.property]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r340[field_r339.property], " ");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_1_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 110);
} if (rf & 2) {
    const field_r339 = i0.ɵɵnextContext(2).field;
    const ctx_r353 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-edit-icon", ctx_r353.inLineEdit && field_r339.editable)("cmacs-compact-table-edit-icon-view", !ctx_r353.inLineEdit || !field_r339.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r359 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 104);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r359); const ctx_r358 = i0.ɵɵnextContext(); const data_r340 = ctx_r358.data; const field_r339 = ctx_r358.field; const ctx_r357 = i0.ɵɵnextContext(); return ctx_r357.startEdit(data_r340[ctx_r357.config.fieldId], field_r339.property, $event); });
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_8_ng_container_1_div_2_Template, 2, 7, "div", 105);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_8_ng_container_1_div_3_Template, 2, 8, "div", 106);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_1_i_4_Template, 1, 4, "i", 107);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r360 = i0.ɵɵnextContext();
    const data_r340 = ctx_r360.data;
    const field_r339 = ctx_r360.field;
    const ctx_r344 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r344.editId === data_r340[ctx_r344.config.fieldId] && ctx_r344.property === field_r339.property && field_r339.editable && (ctx_r344.isString(field_r339) || ctx_r344.isDate(field_r339) || ctx_r344.isSelect(field_r339) || ctx_r344.isTime(field_r339)))("cmacs-compact-table-on-edit-no-padding", ctx_r344.editId === data_r340[ctx_r344.config.fieldId] && ctx_r344.property === field_r339.property && field_r339.editable && (ctx_r344.isNumber(field_r339) || ctx_r344.isDate(field_r339) || ctx_r344.isTime(field_r339) || ctx_r344.isString(field_r339)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r339.showTooltip || !data_r340[field_r339.property] || !data_r340[field_r339.property].length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r339.showTooltip && data_r340[field_r339.property] && data_r340[field_r339.property].length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r339.editable || field_r339.editable === undefined);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r363 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 104);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_2_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r363); const ctx_r362 = i0.ɵɵnextContext(); const data_r340 = ctx_r362.data; const field_r339 = ctx_r362.field; const ctx_r361 = i0.ɵɵnextContext(); return ctx_r361.startEdit(data_r340[ctx_r361.config.fieldId], field_r339.property, $event); });
    i0.ɵɵelementStart(2, "div", 111);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 112);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r364 = i0.ɵɵnextContext();
    const data_r340 = ctx_r364.data;
    const field_r339 = ctx_r364.field;
    const item_r342 = ctx_r364.item;
    const i_r341 = ctx_r364.i;
    const ctx_r345 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r345.editId === data_r340[ctx_r345.config.fieldId] && ctx_r345.property === field_r339.property && field_r339.editable && (ctx_r345.isString(field_r339) || ctx_r345.isDate(field_r339) || ctx_r345.isSelect(field_r339) || ctx_r345.isTime(field_r339)))("cmacs-compact-table-on-edit-no-padding", ctx_r345.editId === data_r340[ctx_r345.config.fieldId] && ctx_r345.property === field_r339.property && field_r339.editable && (ctx_r345.isNumber(field_r339) || ctx_r345.isDate(field_r339) || ctx_r345.isTime(field_r339) || ctx_r345.isString(field_r339)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r345.getMaxWidth(field_r339, item_r342, i_r341));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r345.validate(data_r340, field_r339))("cmacs-compact-table-overflow-cell", !ctx_r345.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(data_r340[field_r339.property] ? ctx_r345.transformDate(data_r340[field_r339.property]) : field_r339.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-calendar-icon", ctx_r345.inLineEdit && field_r339.editable)("cmacs-compact-table-calendar-icon-view", !ctx_r345.inLineEdit || !field_r339.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r367 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 104);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_3_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r367); const ctx_r366 = i0.ɵɵnextContext(); const data_r340 = ctx_r366.data; const field_r339 = ctx_r366.field; const ctx_r365 = i0.ɵɵnextContext(); return ctx_r365.startEdit(data_r340[ctx_r365.config.fieldId], field_r339.property, $event); });
    i0.ɵɵelementStart(2, "div", 111);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "i", 113);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r368 = i0.ɵɵnextContext();
    const data_r340 = ctx_r368.data;
    const field_r339 = ctx_r368.field;
    const item_r342 = ctx_r368.item;
    const i_r341 = ctx_r368.i;
    const ctx_r346 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r346.editId === data_r340[ctx_r346.config.fieldId] && ctx_r346.property === field_r339.property && field_r339.editable && (ctx_r346.isString(field_r339) || ctx_r346.isDate(field_r339) || ctx_r346.isSelect(field_r339) || ctx_r346.isTime(field_r339)))("cmacs-compact-table-on-edit-no-padding", ctx_r346.editId === data_r340[ctx_r346.config.fieldId] && ctx_r346.property === field_r339.property && field_r339.editable && (ctx_r346.isNumber(field_r339) || ctx_r346.isDate(field_r339) || ctx_r346.isTime(field_r339) || ctx_r346.isString(field_r339)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r346.getMaxWidth(field_r339, item_r342, i_r341));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r346.validate(data_r340, field_r339))("cmacs-compact-table-overflow-cell", !ctx_r346.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(data_r340[field_r339.property] ? i0.ɵɵpipeBind2(4, 15, data_r340[field_r339.property], field_r339.timeFormat ? field_r339.timeFormat : "h:mm a") : field_r339.placeholder);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("cmacs-compact-table-calendar-icon", ctx_r346.inLineEdit && field_r339.editable)("cmacs-compact-table-calendar-icon-view", !ctx_r346.inLineEdit || !field_r339.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r371 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 104);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_4_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r371); const ctx_r370 = i0.ɵɵnextContext(); const data_r340 = ctx_r370.data; const field_r339 = ctx_r370.field; const ctx_r369 = i0.ɵɵnextContext(); return ctx_r369.startEdit(data_r340[ctx_r369.config.fieldId], field_r339.property, $event); });
    i0.ɵɵelementStart(2, "div", 114);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 115);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r372 = i0.ɵɵnextContext();
    const data_r340 = ctx_r372.data;
    const field_r339 = ctx_r372.field;
    const item_r342 = ctx_r372.item;
    const i_r341 = ctx_r372.i;
    const ctx_r347 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r347.editId === data_r340[ctx_r347.config.fieldId] && ctx_r347.property === field_r339.property && field_r339.editable && (ctx_r347.isString(field_r339) || ctx_r347.isDate(field_r339) || ctx_r347.isSelect(field_r339) || ctx_r347.isTime(field_r339)))("cmacs-compact-table-on-edit-no-padding", ctx_r347.editId === data_r340[ctx_r347.config.fieldId] && ctx_r347.property === field_r339.property && field_r339.editable && (ctx_r347.isNumber(field_r339) || ctx_r347.isDate(field_r339) || ctx_r347.isTime(field_r339) || ctx_r347.isString(field_r339)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r347.getMaxWidth(field_r339, item_r342, i_r341));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r347.validate(data_r340, field_r339))("cmacs-compact-table-overflow-cell", !ctx_r347.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r347.getLabel(data_r340, field_r339) && ctx_r347.getLabel(data_r340, field_r339).length ? ctx_r347.getLabel(data_r340, field_r339) : field_r339.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-select-icon", ctx_r347.inLineEdit && field_r339.editable)("cmacs-compact-table-select-icon-view", !ctx_r347.inLineEdit || !field_r339.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r375 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 104);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_5_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r375); const ctx_r374 = i0.ɵɵnextContext(); const data_r340 = ctx_r374.data; const field_r339 = ctx_r374.field; const ctx_r373 = i0.ɵɵnextContext(); return ctx_r373.startEdit(data_r340[ctx_r373.config.fieldId], field_r339.property, $event); });
    i0.ɵɵelementStart(2, "div", 116);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 117);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r376 = i0.ɵɵnextContext();
    const data_r340 = ctx_r376.data;
    const field_r339 = ctx_r376.field;
    const item_r342 = ctx_r376.item;
    const i_r341 = ctx_r376.i;
    const ctx_r348 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r348.editId === data_r340[ctx_r348.config.fieldId] && ctx_r348.property === field_r339.property && field_r339.editable && (ctx_r348.isString(field_r339) || ctx_r348.isDate(field_r339) || ctx_r348.isSelect(field_r339) || ctx_r348.isTime(field_r339)))("cmacs-compact-table-on-edit-no-padding", ctx_r348.editId === data_r340[ctx_r348.config.fieldId] && ctx_r348.property === field_r339.property && field_r339.editable && (ctx_r348.isNumber(field_r339) || ctx_r348.isDate(field_r339) || ctx_r348.isTime(field_r339) || ctx_r348.isString(field_r339)));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r348.getMaxWidth(field_r339, item_r342, i_r341));
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r348.validate(data_r340, field_r339))("cmacs-compact-table-overflow-cell", !ctx_r348.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(data_r340[field_r339.property] !== undefined ? field_r339.useCommaMarker ? data_r340[field_r339.property].toString().replace(".", ",") : data_r340[field_r339.property] : field_r339.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-input-number-icon", ctx_r348.inLineEdit && field_r339.editable)("cmacs-compact-table-input-number-icon-view", !ctx_r348.inLineEdit || !field_r339.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r382 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 122);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_6_span_2_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r382); const ctx_r381 = i0.ɵɵnextContext(2); const data_r340 = ctx_r381.data; const field_r339 = ctx_r381.field; const i_r341 = ctx_r381.i; const ctx_r380 = i0.ɵɵnextContext(); return ctx_r380.clickBooleanCell(data_r340, data_r340[ctx_r380.config.fieldId], field_r339, i_r341, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r383 = i0.ɵɵnextContext(2);
    const data_r340 = ctx_r383.data;
    const field_r339 = ctx_r383.field;
    const ctx_r377 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r377.validate(data_r340, field_r339))("cmacs-compact-table-boolean-icon", ctx_r377.inLineEdit && field_r339.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r386 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 123);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_6_span_3_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r386); const ctx_r385 = i0.ɵɵnextContext(2); const data_r340 = ctx_r385.data; const field_r339 = ctx_r385.field; const i_r341 = ctx_r385.i; const ctx_r384 = i0.ɵɵnextContext(); return ctx_r384.clickBooleanCell(data_r340, data_r340[ctx_r384.config.fieldId], field_r339, i_r341, $event); });
    i0.ɵɵelement(1, "span", 124);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r387 = i0.ɵɵnextContext(2);
    const data_r340 = ctx_r387.data;
    const field_r339 = ctx_r387.field;
    const ctx_r378 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r378.validate(data_r340, field_r339))("cmacs-compact-table-boolean-icon", ctx_r378.inLineEdit && field_r339.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r390 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 125);
    i0.ɵɵlistener("click", function CmacsCompactTableComponent_ng_template_8_ng_container_6_i_4_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r390); const ctx_r389 = i0.ɵɵnextContext(2); const data_r340 = ctx_r389.data; const field_r339 = ctx_r389.field; const i_r341 = ctx_r389.i; const ctx_r388 = i0.ɵɵnextContext(); return ctx_r388.clickBooleanCell(data_r340, data_r340[ctx_r388.config.fieldId], field_r339, i_r341, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r391 = i0.ɵɵnextContext(2);
    const data_r340 = ctx_r391.data;
    const field_r339 = ctx_r391.field;
    const ctx_r379 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-compact-table-invalid", !ctx_r379.validate(data_r340, field_r339))("cmacs-compact-table-boolean-icon", ctx_r379.inLineEdit && field_r339.editable);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 118);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_8_ng_container_6_span_2_Template, 1, 4, "span", 119);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_8_ng_container_6_span_3_Template, 2, 4, "span", 120);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_6_i_4_Template, 1, 4, "i", 121);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r392 = i0.ɵɵnextContext();
    const data_r340 = ctx_r392.data;
    const field_r339 = ctx_r392.field;
    const ctx_r349 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r349.editId === data_r340[ctx_r349.config.fieldId] && ctx_r349.property === field_r339.property && field_r339.editable && (ctx_r349.isString(field_r339) || ctx_r349.isDate(field_r339) || ctx_r349.isSelect(field_r339) || ctx_r349.isTime(field_r339)))("cmacs-compact-table-on-edit-no-padding", ctx_r349.editId === data_r340[ctx_r349.config.fieldId] && ctx_r349.property === field_r339.property && field_r339.editable && (ctx_r349.isNumber(field_r339) || ctx_r349.isDate(field_r339) || ctx_r349.isTime(field_r339) || ctx_r349.isString(field_r339)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r340[field_r339.property] == false || data_r340[field_r339.property] == "false");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r340[field_r339.property] === undefined || data_r340[field_r339.property] === null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r340[field_r339.property] === true || data_r340[field_r339.property] === "true");
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsCompactTableComponent_ng_template_8_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, null, 126);
    i0.ɵɵelementStart(2, "div", 127);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_8_ng_container_7_ng_container_3_Template, 1, 0, "ng-container", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r395 = i0.ɵɵnextContext();
    const data_r340 = ctx_r395.data;
    const field_r339 = ctx_r395.field;
    const ci_r343 = ctx_r395.ci;
    const i_r341 = ctx_r395.i;
    const ctx_r350 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("cmacs-compact-table-on-edit", ctx_r350.editId === data_r340[ctx_r350.config.fieldId] && ctx_r350.property === field_r339.property && field_r339.editable && (ctx_r350.isString(field_r339) || ctx_r350.isDate(field_r339) || ctx_r350.isSelect(field_r339) || ctx_r350.isTime(field_r339)))("cmacs-compact-table-on-edit-no-padding", ctx_r350.editId === data_r340[ctx_r350.config.fieldId] && ctx_r350.property === field_r339.property && field_r339.editable && (ctx_r350.isNumber(field_r339) || ctx_r350.isDate(field_r339) || ctx_r350.isTime(field_r339) || ctx_r350.isString(field_r339)));
    i0.ɵɵproperty("id", ctx_r350.gridID + "column" + ci_r343 + "row" + i_r341);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", data_r340[field_r339.property].ref)("ngTemplateOutletContext", data_r340[field_r339.property].context);
} }
function CmacsCompactTableComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableComponent_ng_template_8_ng_container_1_Template, 5, 7, "ng-container", 3);
    i0.ɵɵtemplate(2, CmacsCompactTableComponent_ng_template_8_ng_container_2_Template, 5, 15, "ng-container", 3);
    i0.ɵɵtemplate(3, CmacsCompactTableComponent_ng_template_8_ng_container_3_Template, 6, 18, "ng-container", 3);
    i0.ɵɵtemplate(4, CmacsCompactTableComponent_ng_template_8_ng_container_4_Template, 5, 15, "ng-container", 3);
    i0.ɵɵtemplate(5, CmacsCompactTableComponent_ng_template_8_ng_container_5_Template, 5, 15, "ng-container", 3);
    i0.ɵɵtemplate(6, CmacsCompactTableComponent_ng_template_8_ng_container_6_Template, 5, 7, "ng-container", 3);
    i0.ɵɵtemplate(7, CmacsCompactTableComponent_ng_template_8_ng_container_7_Template, 4, 7, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r339 = ctx.field;
    const data_r340 = ctx.data;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isString(field_r339));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isDate(field_r339));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isTime(field_r339));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isSelect(field_r339));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isNumber(field_r339));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config && ctx_r7.isBoolean(field_r339));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.isCeldTypeTemplateRef(field_r339) && data_r340[field_r339.property]);
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
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    }
    /*Context Menu */
    contextMenu($event, template) {
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
    startEdit(id, property, event) {
        if (this.inLineEdit) {
            event.preventDefault();
            event.stopPropagation();
            if (this.editId !== null) {
                this.emitOnEditEvent();
            }
            this.editId = id;
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
                (this.selectElement && !this.childOf(element, this.selectElement.nativeElement) ||
                    (this.boolElement && this.boolElement.nativeElement !== e.target))) {
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
            return m.format(this.i18n.getLocale().locale === 'de' ? 'DD/MM/YYYY' : 'MM/DD/YYYY');
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
    } }, inputs: { size: "size", showTotal: "showTotal", pageSizeOptions: "pageSizeOptions", virtualScroll: "virtualScroll", exclusiveSelect: "exclusiveSelect", logs: "logs", expandable: "expandable", smartTable: "smartTable", draggable: "draggable", virtualItemSize: "virtualItemSize", expandAll: "expandAll", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", total: "total", title: "title", footer: "footer", noResult: "noResult", widthConfig: "widthConfig", pageIndex: "pageIndex", pageSize: "pageSize", actionColumnWidth: "actionColumnWidth", wrapLines: "wrapLines", data: "data", config: "config", use12Hours: "use12Hours", fieldId: "fieldId", gridID: "gridID", paginationPosition: "paginationPosition", scroll: "scroll", frontPagination: "frontPagination", templateMode: "templateMode", bordered: "bordered", centerTable: "centerTable", showPagination: "showPagination", loading: "loading", showSizeChanger: "showSizeChanger", hideOnSinglePage: "hideOnSinglePage", showQuickJumper: "showQuickJumper", simple: "simple", checkboxSelect: "checkboxSelect", inLineEdit: "inLineEdit", dataTable: "dataTable", showRate: "showRate", exportEvent: "exportEvent", rateCount: "rateCount", multiSelect: "multiSelect", extra: "extra", contextmenu: "contextmenu", indentSize: "indentSize", virtualMaxBufferPx: "virtualMaxBufferPx" }, outputs: { configChange: "configChange", buttonClick: "buttonClick", rateChange: "rateChange", selectionChange: "selectionChange", ondlclickRow: "ondlclickRow", onclickRow: "onclickRow", onedit: "onedit", onRowExpandCollapse: "onRowExpandCollapse", ondrop: "ondrop", sortChange: "sortChange", filterChange: "filterChange", onrowdeleted: "onrowdeleted", onrowadded: "onrowadded" }, exportAs: ["cmacsCompactTable"], features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 36, consts: [[3, "id"], [1, "cmacs-compact-table", 3, "nzData", "nzShowTotal", "nzPageSizeOptions", "nzVirtualItemSize", "nzLoadingDelay", "nzVirtualMaxBufferPx", "nzLoadingIndicator", "nzTotal", "nzTitle", "nzFooter", "nzNoResult", "nzWidthConfig", "nzPageIndex", "nzPageSize", "nzPaginationPosition", "nzScroll", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], ["gridComponent", ""], [4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListDropped", 4, "ngIf"], ["editTpl", ""], ["viewModeTpl", ""], ["nzWidth", "40px", "class", "cmacs-compact-table-smart-table-hot-spot-row-add cmacs-compact-table-smart-action-header", 3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "minWidth", "maxWidth", "nzLeft", 4, "ngIf"], ["nzWidth", "40px", 3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], ["nzWidth", "30px", "nzLeft", "0px", 3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", "nzWidth", "maxWidth", "minWidth", "nzRight", 4, "ngIf"], ["nzWidth", "40px", "class", "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "minWidth", "maxWidth", "nzRight", "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], [3, "cmacs-compact-table-logs-header-th", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], ["nzWidth", "40px", 1, "cmacs-compact-table-smart-table-hot-spot-row-add", "cmacs-compact-table-smart-action-header", 3, "nzLeft"], [1, "cmacs-compact-table-smart-table-hot-spot-row-add-icon", "iconUILarge-New", 3, "click"], ["nzWidth", "40px", 3, "nzLeft"], ["nzWidth", "30px", "nzLeft", "0px", 3, "nzLeft"], ["cmacs-checkbox", "", 3, "ngModel", "indeterminate", "ngModelChange", "checkedChange"], [4, "ngIf", "ngIfElse"], ["thWithFilters", ""], [3, "nzShowSort", "nzShowFilter", "nzFilters", "nzFilterMultiple", "ngClass", "nzSort", "nzWidth", "nzLeft", "nzRight", "nzFilterChange", "nzSortChange", "nzSortOrderChange"], [3, "id", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nzCustomFilter", "", 3, "nzShowSort", "ngClass", "nzSort", "nzWidth", "nzLeft", "nzRight", "nzSortChange"], ["nzTrigger", "click", "nzPlacement", "bottomRight", "nzTableFilter", "", 3, "nzClickHide"], ["dropdown", ""], ["nz-icon", "", "nzType", "search", "nz-dropdown", "", 1, "ant-table-filter-icon"], [3, "nzWidth", "nzRight"], [1, "cmacs-compact-table-extra"], [4, "nzStringTemplateOutlet"], ["nzWidth", "40px", 1, "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "nzRight"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["defaultTpl", ""], [3, "cmacs-compact-table-expandable-row", "cmacs-compact-table-header-logs", "ant-table-selected-row", "click", "touchstart", "dblclick", 4, "ngIf"], [3, "click", "touchstart", "dblclick"], ["style", "padding: 7px 10px", 3, "nzLeft", "minWidth", "maxWidth", "width", "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], [3, "ngClass", "cmacs-editable-column", "cmacs-compact-table-on-edit-expandable", "cmacs-compact-table-logs-header-th-font", "cmacs-compact-table-expandable-td", "paddingLeft", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "minWidth", "nzExpandChange", 4, "ngFor", "ngForOf"], ["class", "cmacs-compact-table-rating", "style", "padding: 7px 10px", 3, "cmacs-compact-table-logs-header-th-font", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "cmacs-compact-table-logs-header-th-font", "nzRight", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-align-td", 3, "cmacs-compact-table-logs-td", 4, "ngIf"], [2, "padding", "7px 10px", 3, "nzLeft"], [3, "ngClass", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "nzExpandChange"], [3, "display", "cmacs-compact-table-overflow-cell-container-logs", "width", 4, "ngIf"], [3, "display", "width", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cmacs-compact-table-rating", 2, "padding", "7px 10px"], [3, "ngModel", "nzCount", "nzDisabled", "ngModelChange", "click"], [2, "padding", "7px 10px", 3, "nzRight"], [1, "cmacs-compact-table-align-td", 2, "padding", "7px 10px"], ["cdkDrag", "", "class", "cmacs-no-selection", 3, "cdkDragDisabled", "ant-table-selected-row", "cmacs-compact-table-editable-row", "cmacs-compact-table-smart-table-row", "click", "touchstart", "contextmenu", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "cmacs-no-selection", 3, "cdkDragDisabled", "click", "touchstart", "contextmenu"], ["contextMenuTemplate", "cmacsDropdownMenu"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-add", 3, "maxWidth", "minWidth", "cmacs-compact-table-logs-td", "nzLeft", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-drag-col cmacs-compact-table-fst-td", 3, "nzLeft", "maxWidth", "minWidth", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "nzLeft", "cmacs-compact-table-fst-td", 4, "ngIf"], [3, "ngClass", "cmacs-editable-column", "cmacs-compact-table-fst-td", "nzLeft", "nzRight", "minWidth", 4, "ngFor", "ngForOf"], ["style", "padding: 7px 10px", 4, "ngIf"], ["style", "padding: 7px 10px", 3, "nzRight", 4, "ngIf"], ["style", "padding: 7px 10px", "class", "cmacs-compact-table-smart-table-hot-spot-row-delete", 3, "nzRight", "maxWidth", "minWidth", "cmacs-compact-table-logs-td", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-row-add", 2, "padding", "7px 10px", 3, "nzLeft"], [1, "cmacs-compact-table-drag-col", "cmacs-compact-table-fst-td", 2, "padding", "7px 10px", 3, "nzLeft"], ["cdkDragHandle", "", 1, "iconUILarge-Move", "cmacs-compact-table-drag-handler"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange"], [3, "ngClass", "nzLeft", "nzRight"], ["style", "max-width: 98%", 4, "ngIf"], [2, "max-width", "98%"], [2, "padding", "7px 10px"], [3, "ngModel", "nzCount", "ngModelChange", "click"], [1, "cmacs-compact-table-smart-table-hot-spot-row-delete", 2, "padding", "7px 10px", 3, "nzRight"], ["class", "cmacs-compact-table-smart-table-hot-spot-row-delete-icon iconUISmall-Close", 3, "click", 4, "ngIf"], [1, "cmacs-compact-table-smart-table-hot-spot-row-delete-icon", "iconUISmall-Close", 3, "click"], ["nz-virtual-scroll", ""], ["defaultTplVirtualScroll", ""], [3, "cmacs-compact-table-expandable-row", "cmacs-compact-table-header-logs", "touchstart", "dblclick", 4, "ngIf"], [3, "touchstart", "dblclick"], [3, "cmacs-editable-column", "cmacs-compact-table-on-edit-expandable", "cmacs-compact-table-logs-header-th-font", "cmacs-compact-table-expandable-td", "paddingLeft", "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "minWidth", "nzExpandChange", 4, "ngFor", "ngForOf"], [3, "nzShowExpand", "nzExpand", "nzLeft", "nzRight", "nzExpandChange"], ["contextMenuTemplate", ""], [3, "cmacs-editable-column", "cmacs-compact-table-fst-td", "nzLeft", "nzRight", "minWidth", 4, "ngFor", "ngForOf"], [3, "nzLeft", "nzRight"], ["class", "cmacs-compact-table-input", "type", "text", "cmacs-input", "", 3, "cmacs-compact-table-edit-mode-invalid", "placeholder", "ngModel", "click", "dblclick", "ngModelChange", "keyup", 4, "ngIf"], ["class", "cmacs-compact-table-date-edit", 3, "format", "allowClear", "cmacs-compact-table-edit-mode-invalid", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["class", "cmacs-compact-table-datetime-picker", "hideSeconds", "", 3, "use12Hours", "cmacs-compact-table-edit-mode-invalid", "format", "defaultOpenValue", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["class", "cmacs-compact-table-select-cell", "showSearch", "", 3, "cmacs-compact-table-edit-mode-invalid", "placeHolder", "mode", "showCmacsSearch", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["class", "cmacs-compact-table-input-number-edit", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "cmacsStep", "min", "max", "formatter", "parser", "ngModelChange", "click", "dblclick", "keyup", 4, "ngIf"], ["class", "cmacs-compact-table-input-number-edit", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "cmacsStep", "min", "max", "ngModelChange", "click", "dblclick", "keyup", 4, "ngIf"], ["cmacs-checkbox", "", 3, "cmacs-compact-table-edit-mode-invalid", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "cmacs-input", "", 1, "cmacs-compact-table-input", 3, "placeholder", "ngModel", "click", "dblclick", "ngModelChange", "keyup"], ["fieldTypeInput", ""], [1, "cmacs-compact-table-date-edit", 3, "format", "allowClear", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDatePicker", ""], ["hideSeconds", "", 1, "cmacs-compact-table-datetime-picker", 3, "use12Hours", "format", "defaultOpenValue", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDateTimePicker", ""], ["showSearch", "", 1, "cmacs-compact-table-select-cell", 3, "placeHolder", "mode", "showCmacsSearch", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeSelect", ""], [3, "label", "value", "divider", "disabled", 4, "ngFor", "ngForOf"], [3, "label", "value", "divider", "disabled"], [1, "cmacs-compact-table-input-number-edit", 3, "ngModel", "cmacsStep", "min", "max", "formatter", "parser", "ngModelChange", "click", "dblclick", "keyup"], ["fieldTypeInputNumber", ""], [1, "cmacs-compact-table-input-number-edit", 3, "ngModel", "cmacsStep", "min", "max", "ngModelChange", "click", "dblclick", "keyup"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange"], ["fieldTypeBool", ""], [2, "width", "98%", "max-width", "98%", "padding", "7px 10px", 3, "click"], ["class", "cmacs-compact-table-inline-cell", 3, "cmacs-compact-table-overflow-cell", "maxWidth", "cmacs-compact-table-invalid", 4, "ngIf"], ["class", "cmacs-compact-table-inline-cell", "cmacs-tooltip", "", "placement", "right", 3, "cmacs-compact-table-overflow-cell", "maxWidth", "title", "cmacs-compact-table-invalid", 4, "ngIf"], ["class", "iconUISmall-Edit", 3, "cmacs-compact-table-edit-icon", "cmacs-compact-table-edit-icon-view", 4, "ngIf"], [1, "cmacs-compact-table-inline-cell"], ["cmacs-tooltip", "", "placement", "right", 1, "cmacs-compact-table-inline-cell", 3, "title"], [1, "iconUISmall-Edit"], [1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-date"], [1, "iconUILarge-Calendar"], [1, "iconUILarge-Time"], [1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-select"], [1, "iconArrowLarge-Chevron-Down"], [1, "cmacs-compact-table-inline-cell", "cmacs-compact-table-input-number"], [1, "iconArrowLarge-Solid-UpDown"], [2, "width", "98%", "max-width", "98%", "padding", "7px 10px"], ["class", "cmacs-compact-table-boolean-false-icon", 3, "cmacs-compact-table-invalid", "cmacs-compact-table-boolean-icon", "click", 4, "ngIf"], ["class", "cmacs-compact-table-boolean-indeterminate-icon", 3, "cmacs-compact-table-invalid", "cmacs-compact-table-boolean-icon", "click", 4, "ngIf"], ["class", "iconUILarge-Select-All", 3, "cmacs-compact-table-invalid", "cmacs-compact-table-boolean-icon", "click", 4, "ngIf"], [1, "cmacs-compact-table-boolean-false-icon", 3, "click"], [1, "cmacs-compact-table-boolean-indeterminate-icon", 3, "click"], [1, "cmacs-compact-table-boolean-indeterminate-icon-inner"], [1, "iconUILarge-Select-All", 3, "click"], ["templateRefCeld", ""], [2, "width", "98%", "max-width", "98%", "padding", "7px 10px", 3, "id"]], template: function CmacsCompactTableComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i7.NzTableComponent, i3.NgIf, i7.NzTheadComponent, i7.NzTrDirective, i3.NgForOf, i7.NzTableCellDirective, i7.NzThMeasureDirective, i7.NzCellFixedDirective, i8.CmacsCheckboxComponent, i9.NgControlStatus, i9.NgModel, i7.NzThAddOnComponent, i3.NgClass, i3.NgTemplateOutlet, i10.ɵNzTransitionPatchDirective, i11.NzIconDirective, i12.NzDropDownDirective, i13.NzStringTemplateOutletDirective, i7.NzTbodyComponent, i14.CdkDropList, i7.NzTdAddOnComponent, i15.NzRateComponent, i14.CdkDrag, i16.CmacsDropdownMenuComponent, i14.CdkDragHandle, i7.NzTableVirtualScrollDirective, i17.CmacsInputDirective, i9.DefaultValueAccessor, i18.CmacsDatePickerComponent, i19.CmacsDateTimePickerComponent, i20.CmacsSelectComponent, i21.CmacsOptionComponent, i22.CmacsInputNumberComponent, i23.CmacsTooltipDirective], pipes: [i3.DatePipe], styles: [".cmacs-compact-table-edit-mode-invalid,   .cmacs-compact-table-edit-mode-invalid .ant-select-selection,   .cmacs-compact-table-edit-mode-invalid:focus,   .cmacs-compact-table-edit-mode-invalid:focus .ant-select-selection,   .cmacs-compact-table-edit-mode-invalid:hover,   .cmacs-compact-table-edit-mode-invalid:hover .ant-select-selection,   .cmacs-compact-table-invalid.cmacs-compact-table-boolean-indeterminate-icon{border-color:#f6503c!important}.cmacs-compact-table-datetime-picker.ant-picker-focused[_ngcontent-%COMP%]:not(.cmacs-time-picker-opened),   .cmacs-compact-table .ant-picker:not(.ant-picker-disabled):not(.cmacs-time-picker-opened):not(.ant-picker-focused):hover,   .cmacs-compact-table .ant-picker:not(.ant-picker-focused):not(.cmacs-time-picker-opened){border-color:#2a7cff!important}.cmacs-compact-table-datetime-picker[_ngcontent-%COMP%]{padding:8px 11px;width:100%}  .cmacs-compact-table .ant-table-placeholder .ant-table-cell,   .cmacs-compact-table .ant-table-tbody>tr.ant-table-placeholder:hover{box-shadow:none!important;border-bottom:none!important}  .cmacs-compact-table tr.ant-table-placeholder .ant-table-expanded-row-fixed{margin:0!important;padding:0!important}  .cmacs-compact-table .ant-table-tbody>tr.ant-table-placeholder:hover>td{box-shadow:none!important}  .cmacs-compact-table .ant-table-thead>tr>th:not(.cmacs-compact-table-logs-header-th).ant-table-column-has-sorters:hover{background-color:#fff!important}  .cmacs-compact-table .ant-table-thead>tr>th.cmacs-compact-table-logs-header-th.ant-table-column-has-sorters:hover{background-color:#f6f7fb!important}  .cmacs-compact-table .ant-table-tbody>tr>td.cmacs-compact-table-align-td{border-bottom:none!important;box-shadow:none!important;background-color:#f6f7fb!important}  .cmacs-compact-table-overflow-cell-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5em}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column{vertical-align:middle}  .cmacs-compact-table-smart-action-header i{position:relative!important;top:0!important}  .cmacs-compact-table .ant-table-column-sorter-inner{margin-left:0;margin-right:0}  .cmacs-compact-table .ant-table-column-sorter{width:12px;display:none!important;right:0;position:absolute}  .cmacs-compact-table th:hover .ant-table-column-sorter{display:table-cell!important;right:0;position:absolute}  .cmacs-compact-table .ant-table-column-sorters,   .cmacs-compact-table .ant-table-header-column{width:100%;padding:0}  .cmacs-compact-table .ant-table-column-sorters span:not(.ant-table-column-sorter){width:100%}  .cmacs-compact-table-rating{min-width:105px}  .cmacs-compact-table-invalid,   .cmacs-compact-table-invalid+i{color:#f6503c!important;opacity:1!important}  .cmacs-compact-table-invalid.cmacs-compact-table-boolean-indeterminate-icon .cmacs-compact-table-boolean-indeterminate-icon-inner{background-color:#f6503c}  .cmacs-compact-table .ant-table-thead{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;color:#656c79}  .cmacs-compact-table .ant-table-thead>tr>th{padding:8px 10px}  .cmacs-compact-table-drag-handler{color:#bec4cd;font-size:20px;padding:0 10px;margin:0;vertical-align:middle}  .cmacs-compact-table-drag-placeholder{border-bottom:1px solid #2a7cff;color:#2a7cff;text-align:left;min-width:100%}  .cmacs-compact-table-drag-preview{color:#2a7cff;opacity:.5;text-align:left}  .cmacs-compact-table-drag-handler:hover{cursor:pointer;color:#2a7cff}  .cmacs-compact-table-drag-col{padding:0!important;margin:0!important}  .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-add,   .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-delete{background:#fff;border-bottom-color:transparent;border-top-color:transparent}  .cmacs-compact-table .ant-table-row-indent+.ant-table-row-expand-icon{margin-top:8.5px;margin-right:8px}  .cmacs-compact-table .ant-table-header{background:transparent}  .cmacs-compact-table-balance-padding{padding:6px!important}  .cmacs-compact-table .ant-table-tbody>tr>td{padding:0;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae;transition:none}  .cmacs-compact-table .ant-table-tbody>tr:not(.ant-table-selected-row)>td:not(.cmacs-compact-table-logs-header-th-font):not(.cmacs-compact-table-align-td){background-color:#fff!important}  .cmacs-compact-table .ant-table-thead>tr>th:not(.cmacs-compact-table-logs-header-th){background:#fff!important;border-bottom:1px solid #dee0e5}  .cmacs-compact-table .ant-table-tbody>tr:not(.ant-table-placeholder):hover td.cmacs-compact-table-fst-td,   .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):not(.ant-table-placeholder):hover td:first-child{box-shadow:inset 3px 0 0 #2a7cff}  .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td,   .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff!important}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:hover td:not(:first-child):not(.ant-table-td-right-sticky):not(.ant-table-td-left-sticky),   .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-right-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add):first-child.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-add{border-bottom:0}  .cmacs-compact-table .ant-table-tbody>.cmacs-compact-table-smart-table-row:hover>td:last-child,   .cmacs-compact-table .ant-table-tbody>.cmacs-compact-table-smart-table-row>td:last-child{box-shadow:none!important}  .cmacs-compact-table .editable-cell{position:relative}  .cmacs-compact-table .ant-rate-star{font-size:16px;margin:0}  .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-add:hover~td:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),   .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover~td{border-bottom-color:#2a7cff}  .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td{border-bottom-color:#f6503c}  .cmacs-compact-table-smart-table-hot-spot-row-add,   .cmacs-compact-table-smart-table-hot-spot-row-add:hover,   .cmacs-compact-table-smart-table-hot-spot-row-delete,   .cmacs-compact-table-smart-table-hot-spot-row-delete:hover{width:28px;border-bottom-color:transparent!important;border-top-color:transparent!important;background-color:#fff!important;box-shadow:none!important;border-bottom:0}  .cmacs-compact-table-logs-td,   .cmacs-compact-table-logs-td:hover{background-color:#f6f7fb!important}  .ant-table-thead>tr:hover .cmacs-compact-table-smart-table-hot-spot-row-add-icon,   .ant-table-thead>tr:hover .cmacs-compact-table-smart-table-hot-spot-row-delete-icon,   tr:hover .cmacs-compact-table-smart-table-hot-spot-row-add-icon,   tr:hover .cmacs-compact-table-smart-table-hot-spot-row-delete-icon{opacity:1!important}  .cmacs-compact-table-smart-table-hot-spot-row-add-icon:hover,   .cmacs-compact-table-smart-table-hot-spot-row-delete-icon:hover{cursor:pointer}  .cmacs-compact-table-smart-table-hot-spot-row-delete-icon{font-size:14px;border-radius:100px;background-color:#f6503c;color:#fff;padding:2px;display:flex;width:18px;opacity:0}  .cmacs-compact-table-smart-table-hot-spot-row-add-icon{font-size:14px;border-radius:100px;background-color:#2a7cff;color:#fff;padding:2px;display:flex;opacity:0;width:18px}  .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add):not(.cmacs-compact-table-smart-table-hot-spot-row-delete){background-color:#f2f7ff!important}  .cmacs-compact-table .ant-spin-nested-loading{clear:both}  .cmacs-compact-table-extra,   .cmacs-compact-table-extra a,   .cmacs-compact-table-extra a i,   .cmacs-compact-table-extra i{font-size:16px;color:#656c79;display:inline-flex}  .cmacs-compact-table-extra{position:relative}  .cmacs-compact-table-extra a,   .cmacs-compact-table-extra a i,   .cmacs-compact-table-extra i{margin-right:5px}  .cmacs-compact-table-extra a:hover,   .cmacs-compact-table-extra a i:hover,   .cmacs-compact-table-extra i:hover{cursor:pointer}  .cmacs-compact-table a,   .cmacs-compact-table a:hover{color:#656c79}  .cmacs-compact-table-edit-icon{float:right;font-size:16px;position:relative;opacity:0}  .cmacs-compact-table-edit-icon-view{display:none}  .cmacs-compact-table-edit-icon:hover{color:#2a7cff;cursor:pointer}  .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-edit-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-edit-icon{opacity:1}  .cmacs-compact-table-input,   .cmacs-compact-table-input:focus,   .cmacs-compact-table-input:hover,   .cmacs-compact-table-select{max-width:100%;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;border-color:#2a7cff;box-shadow:none}  .cmacs-compact-table-input{padding-left:3px}  .cmacs-compact-table-on-edit{padding:0 6px!important}  .cmacs-compact-table-on-edit-expandable{padding-top:0!important;padding-bottom:0!important}  .cmacs-compact-table-on-edit-no-padding{padding:0 0 0 6px!important}  .cmacs-compact-table-calendar-icon,   .cmacs-compact-table-calendar-icon-view,   .cmacs-compact-table-input-number-icon,   .cmacs-compact-table-input-number-icon-view,   .cmacs-compact-table-select-icon,   .cmacs-compact-table-select-icon-view{float:right;font-size:16px;position:relative;line-height:18px}  .cmacs-compact-table-editable-row:hover .cmacs-compact-table-calendar-icon,   .cmacs-compact-table-editable-row:hover .cmacs-compact-table-input-number-icon,   .cmacs-compact-table-editable-row:hover .cmacs-compact-table-select-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-calendar-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-input-number-icon,   .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-select-icon{color:#656c79}  .cmacs-compact-table-calendar-icon:hover,   .cmacs-compact-table-input-number-icon:hover,   .cmacs-compact-table-select-icon:hover{cursor:pointer}  .cmacs-compact-table-date,   .cmacs-compact-table-input-number,   .cmacs-compact-table-select{border-bottom:2px dotted transparent;border-top:2px solid transparent;padding-left:2px;margin:-2px;padding-right:2px}  .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-date,   .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-input-number,   .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-select,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-date,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-input-number,   .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-select{border-bottom:2px dotted #656c79;border-top:2px solid transparent;padding-left:2px;margin:-2px;padding-right:2px}  .cmacs-compact-table-date-edit .ant-calendar-input,   .cmacs-compact-table-date-edit cmacs-picker span input,   .cmacs-compact-table-datetime-picker input{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal}  .cmacs-compact-table .cmacs-compact-table-select-cell{width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal}  .cmacs-compact-table .cmacs-compact-table-select-cell .ant-select-selection{height:34px!important;border:1px solid #2a7cff;margin-left:0;margin-right:0}  .cmacs-compact-table .ant-select-arrow{right:1px}  .cmacs-compact-table-date-edit cmacs-picker span input,   .cmacs-compact-table-datetime-picker input{padding-left:3px}  .cmacs-compact-table-date-edit cmacs-picker span .ant-calendar-picker-clear,   .cmacs-compact-table-date-edit cmacs-picker span .ant-calendar-picker-icon{margin-top:-8px;margin-right:-1px}  .cmacs-compact-table cmacs-input-number.ant-input-number:not(.cmacs-datetime-picker-input-number){margin-bottom:-5px;margin-left:-9px}  .cmacs-compact-table cmacs-input-number input.ant-input-number-input{height:32px;padding-left:12px}  .cmacs-compact-table .cmacs-compact-table-expandable-row .cmacs-compact-table-expandable-td input.cmacs-compact-table-input,   .cmacs-compact-table .cmacs-compact-table-expandable-row .cmacs-compact-table-on-edit-expandable input.cmacs-compact-table-input{margin-left:-4px}.cmacs-compact-table-input[_ngcontent-%COMP%]{width:96%;border-color:#2a7cff!important}  .cmacs-compact-table .cmacs-compact-table-on-edit-expandable .ant-picker,   .cmacs-compact-table .cmacs-compact-table-on-edit-expandable .cmacs-compact-table-date-edit{padding-left:2px;padding-right:2px}  .cmacs-compact-table .cmacs-compact-table-on-edit-expandable cmacs-select.cmacs-compact-table-select-cell .ant-select-selection__rendered{margin-left:7px}  .cmacs-compact-table .cmacs-compact-table-on-edit-expandable cmacs-select .ant-select-arrow{right:-2px}  .cmacs-compact-table-date-edit cmacs-picker span input,   .cmacs-compact-table-date-edit cmacs-picker span input:focus,   .cmacs-compact-table-date-edit cmacs-picker span input:focus-within,   .cmacs-compact-table-date-edit cmacs-picker span input:hover,   .cmacs-compact-table-datetime-picker input,   .cmacs-compact-table-datetime-picker input:focus,   .cmacs-compact-table-datetime-picker input:focus-within,   .cmacs-compact-table-datetime-picker input:hover,   .cmacs-compact-table-input-number-edit,   .cmacs-compact-table-input-number-edit:focus,   .cmacs-compact-table-input-number-edit:focus-within,   .cmacs-compact-table-input-number-edit:hover{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;border-color:#2a7cff!important}  .cmacs-compact-table-overflow-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:100%;vertical-align:middle;line-height:20px}  .cmacs-compact-table .ant-table-row-expand-icon-collapsed:after{font-family:ArrowSmall!important;content:\"\\e903\";transition:all .3s;width:unset;transform:unset;position:static;background:transparent}  .cmacs-compact-table .ant-table-row-expand-icon-collapsed:before{content:unset}  .cmacs-compact-table .ant-table-row-expand-icon-collapsed{margin-right:5px;border:none;transition:all .3s}  .cmacs-compact-table .ant-table-row-expand-icon-expanded:after{font-family:ArrowSmall!important;content:\"\\e900\";transition:all .3s;width:unset;transform:unset;position:static;background:transparent}  .cmacs-compact-table .ant-table-row-expand-icon-expanded{margin-right:5px;border:none;transition:all .3s}  .cmacs-compact-table .ant-table-row-expand-icon-expanded:before{content:unset}  .cmacs-compact-table-header-logs,   .cmacs-compact-table-header-logs:hover{background-color:#f6f7fb!important;color:#656c79!important}  thead .cmacs-compact-table-header-logs{box-shadow:inset 0 -1px 0 #dee0e5}  .cmacs-compact-table-logs-header-th-font,   .cmacs-compact-table-logs-header-th-font:hover{color:#656c79!important;background-color:#f6f7fb!important}  .cmacs-compact-table-logs-header-th-font.th,   .cmacs-compact-table-logs-header-th-font.th:hover{border-bottom:1px solid #dee0e5!important}  .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#f6f7fb!important}  .cmacs-compact-table-boolean-false-icon,   .cmacs-compact-table-boolean-indeterminate-icon{width:10px;border:1px solid #dee0e5;height:10px;display:block}  .cmacs-compact-table-boolean-indeterminate-icon{padding:1px}  .cmacs-compact-table-boolean-indeterminate-icon-inner{width:6px;background-color:#dee0e5;height:6px;display:block}  .cmacs-compact-table-boolean-icon:hover{cursor:pointer;color:#2a7cff;border-color:#2a7cff}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0;border-bottom:1px solid #2a7cff!important;background-color:#fff}.cdk-drag-placeholder[_ngcontent-%COMP%]{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff;opacity:1}  .cmacs-compact-table-smart-add-row-icon-visible{z-index:2;position:absolute;opacity:1!important}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-add){box-shadow:7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-add),   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete){border-bottom:1px solid #dee0e5}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky{box-shadow:0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky+.ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky+.ant-table-th-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky+.ant-table-td-right-sticky{box-shadow:none}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-right-sticky{box-shadow:0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky~.ant-table-td-right-sticky,  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-right-sticky~.ant-table-th-right-sticky{box-shadow:none}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky~.ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky~.ant-table-td-right-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-th-left-sticky{box-shadow:7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-left-sticky,   .cmacs-compact-table .ant-table-scroll-position-right .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child.ant-table-td-left-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky,   .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-smart-table-row:not(.ant-table-selected-row):hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-smart-table-row:not(.ant-table-selected-row):hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-smart-table-row.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,   .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-smart-table-row.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}  .cmacs-compact-table .ant-checkbox-wrapper{display:inline-grid;vertical-align:middle}  .cmacs-compact-table .cmacs-no-selection{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}  .cmacs-compact-table .ant-table-expand-icon-th,   .cmacs-compact-table .ant-table-row-expand-icon-cell{text-align:left}  .cmacs-compact-table table{table-layout:fixed}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters{display:inline-flex;position:relative;top:3px}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner-full{margin-left:0!important}  .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters:hover:before{background-color:transparent}  .cmacs-compact-table.cmacs-compact-table-scrollable-y .ant-table-fixed-header .ant-table-header{overflow:hidden!important;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1;margin-right:6px}  .cmacs-compact-table:not(.cmacs-compact-table-scrollable-y) .ant-table-fixed-header .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1;margin-right:1px}  .cmacs-compact-table .ant-table-fixed-header>.ant-table-container>.ant-table-body,   .cmacs-compact-table cdk-virtual-scroll-viewport{scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin;overflow:scroll!important;position:inherit;padding-bottom:10px;background-color:transparent}  .ant-table{background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar,   .cmacs-compact-table cdk-virtual-scroll-viewport::-webkit-scrollbar{width:6px;height:6px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb,   .cmacs-compact-table cdk-virtual-scroll-viewport::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb:hover,   .cmacs-compact-table cdk-virtual-scroll-viewport::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}  .cmacs-compact-table cmacs-datetime-picker.ant-time-picker{width:100%!important}  .cmacs-compact-table .ant-table-row-expand-icon{background:transparent!important}@media only screen and (max-device-width:1024px) and (orientation:portrait){  .cmacs-compact-table.cmacs-compact-table-scrollable-y .ant-table-fixed-header .ant-table-header{margin-right:0}}@media only screen and (max-device-width:1024px) and (orientation:landscape){  .cmacs-compact-table.cmacs-compact-table-scrollable-y .ant-table-fixed-header .ant-table-header{margin-right:0}}"], changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb21wYWN0LXRhYmxlL2NtYWNzLWNvbXBhY3QtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUlOLFNBQVMsRUFDVCxZQUFZLEVBQ1osdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBUyxNQUFNLGdCQUFnQixDQUFDO0FBSWxELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLGlCQUFpQixDQUFDO0FBR3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzVELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxv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VUFBVSxFQUFFO1lBQ1AsY0FBYztrQkFBdEQsU0FBUzttQkFBQyw0QkFBNEI7WUEyRnZDLGVBQWU7a0JBRGQsWUFBWTttQkFBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBjb3VudCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQgeyBFeHBvcnRBc1NlcnZpY2UsIEV4cG9ydEFzQ29uZmlnIH0gZnJvbSAnbmd4LWV4cG9ydC1hcyc7XHJcbmltcG9ydCBqc1BERiBmcm9tICdqc3BkZic7XHJcbmltcG9ydCAnanNwZGYtYXV0b3RhYmxlJztcclxuaW1wb3J0IHsgR3JpZENvbmZpZywgRmllbGQgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1jb25maWcnO1xyXG5pbXBvcnQgeyBHcmlkRXhwQ29uZmlnIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtZXhwLWNvbmZpZyc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvVGVtcGxhdGVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBDZWxkVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvQ2VsZFR5cGUuZW51bSc7XHJcbmltcG9ydCB7IEV4Y2VsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvZXhjZWwuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL2V4cG9ydC10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2hlY2tib3hTZWxlY3QgfSBmcm9tIFwiLi4vY21hY3MtdGFibGUvY21hY3MtdGFibGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwidXRpbFwiO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9kcmFnLWRyb3BcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ21hY3NJbnB1dE51bWJlckNvbXBvbmVudCB9IGZyb20gXCIuLi9jbWFjcy1pbnB1dC1udW1iZXIvY21hY3MtaW5wdXQtbnVtYmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXRpbC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZW4taWUnO1xyXG5pbXBvcnQgeyBDbWFjc0RhdGVUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3MtZGF0ZXRpbWUtcGlja2VyL2NtYWNzLWRhdGV0aW1lLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7IE56U2l6ZU1EU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYmxlJztcclxuaW1wb3J0IHsgQ21hY3NDb250ZXh0TWVudVNlcnZpY2UgfSBmcm9tICcuLi9jbWFjcy1kcm9wZG93bi9jb250ZXh0LW1lbnUuc2VydmljZSc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcbmRlY2xhcmUgdmFyIGFjY291bnRpbmc6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21wYWN0LXRhYmxlJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ29tcGFjdFRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3NdJzogJ2xvZ3MnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb21wYWN0VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBsb2NhbGU6IGFueSA9IHt9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIGhlYWRlckJvdHRvbVN0eWxlID0ge307XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgQFZpZXdDaGlsZCgnZ3JpZENvbXBvbmVudCcpIG56VGFibGVDb21wb25lbnQ6IE56VGFibGVDb21wb25lbnQ7XHJcbiAgc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsPGFueT4oZmFsc2UsIFtdKTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVNRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIHNob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlcjsgcmFuZ2U6IFtudW1iZXIsIG51bWJlcl0gfT47XHJcbiAgQElucHV0KCkgcGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzAsIDQwLCA1MF07XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhjbHVzaXZlU2VsZWN0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvZ3MgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzbWFydFRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxJdGVtU2l6ZSA9IDA7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdEZWxheSA9IDA7XHJcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgdG90YWwgPSAwO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBwYWdlSW5kZXggPSAxO1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XHJcbiAgQElucHV0KCkgYWN0aW9uQ29sdW1uV2lkdGggPSAnODBweCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHdyYXBMaW5lcyA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCkgZGF0YSA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogR3JpZENvbmZpZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdXNlMTJIb3VycyA9IHRydWU7XHJcbiAgQE91dHB1dCgpIGNvbmZpZ0NoYW5nZTogRXZlbnRFbWl0dGVyPEdyaWRDb25maWc+ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkQ29uZmlnPigpO1xyXG4gIEBJbnB1dCgpIGZpZWxkSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBncmlkSUQ6IHN0cmluZyA9IG51bGw7XHJcbiAgQElucHV0KCkgcGFnaW5hdGlvblBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2JvdGgnID0gJ2JvdHRvbSc7XHJcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XHJcbiAgQFZpZXdDaGlsZCgncmVuZGVySXRlbVRlbXBsYXRlJykgbnpJdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JztcclxuICAgIHBhZ2U6IG51bWJlcjtcclxuICB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZnJvbnRQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdGVtcGxhdGVNb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNlbnRlclRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2l6ZUNoYW5nZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2ltcGxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrYm94U2VsZWN0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGluTGluZUVkaXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGF0YVRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dSYXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZXhwb3J0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRFeHBDb25maWc+KCk7XHJcbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHJhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuICBAT3V0cHV0KCkgb25kbGNsaWNrUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25lZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uUm93RXhwYW5kQ29sbGFwc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25kcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgcmF0ZUNvdW50ID0gNTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbXVsdGlTZWxlY3QgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25yb3dkZWxldGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9ucm93YWRkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQElucHV0KCkgZXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGNvbnRleHRtZW51OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBpbmRlbnRTaXplOiBudW1iZXIgPSAwOyBcclxuICBASW5wdXQoKSB2aXJ0dWFsTWF4QnVmZmVyUHggPSAyMDA7XHJcblxyXG4gIHB1YmxpYyBkcm9wZG93bjogYW55O1xyXG4gIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgZm9ybWF0dGVyID0gKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gYWNjb3VudGluZy5mb3JtYXROdW1iZXIodmFsdWUsIHsgcHJlY2lzaW9uOiAzLCB0aG91c2FuZDogXCIgXCIsIGRlY2ltYWw6IFwiLFwiIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH07XHJcbiAgcGFyc2VyID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gYWNjb3VudGluZy51bmZvcm1hdCh2YWx1ZSwgJywnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9O1xyXG4gIGRlZmF1bHRTb3J0T3JkZXIgPSBudWxsO1xyXG4gIGNoZWNrYm94Q2FjaGU6IENoZWNrYm94U2VsZWN0W10gPSBbXTtcclxuICBpc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBhbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgZWRpdElkOiBzdHJpbmcgfCBudWxsO1xyXG4gIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gIHJvd09uRWRpdGlvbiA9IC0xO1xyXG4gIG5vZGVPbkVkaXRpb24gPSBudWxsO1xyXG4gIG1hcE9mRXhwYW5kZWREYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueVtdIH0gPSB7fTtcclxuICBkZWZhdWx0VGltZVZhbHVlID0gbmV3IERhdGUoKTtcclxuICBsYXN0SWR4U2VsZWN0ZWQgPSBudWxsO1xyXG5cclxuICBmaWVsZElEOiBhbnkgPSBudWxsO1xyXG5cclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlSW5wdXROdW1iZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXROdW1iZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUlucHV0TnVtYmVyJywgeyByZWFkOiBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50IH0pIGlucHV0TnVtYmVyQ29tcG9uZW50OiBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZURhdGVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgZGF0ZVBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlRGF0ZVRpbWVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgZGF0ZVRpbWVQaWNrZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZVNlbGVjdCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBzZWxlY3RFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUJvb2wnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgYm9vbEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChDbWFjc0RhdGVUaW1lUGlja2VyQ29tcG9uZW50KSBkYXRlVGltZVBpY2tlcjogQ21hY3NEYXRlVGltZVBpY2tlckNvbXBvbmVudDtcclxuXHJcbiAgcHJldmVudERlZmF1bHQoJGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIC8qQ29udGV4dCBNZW51ICovXHJcbiAgY29udGV4dE1lbnUoJGV2ZW50OiBNb3VzZUV2ZW50LCB0ZW1wbGF0ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmRyb3Bkb3duID0gdGhpcy5uekRyb3Bkb3duU2VydmljZS5jcmVhdGUoJGV2ZW50LCB0ZW1wbGF0ZSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShkYXRhOiBhbnksIGZpZWxkOiBGaWVsZCkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSBmaWVsZC52YWxpZGF0b3JzID8gbmV3IEZvcm1Db250cm9sKGRhdGFbZmllbGQucHJvcGVydHldLCBmaWVsZC52YWxpZGF0b3JzKSA6IG5ldyBGb3JtQ29udHJvbChkYXRhW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICBkYXRhLnZhbGlkID0gZGF0YS52YWxpZCA/IGRhdGEudmFsaWQgOiB7fTtcclxuICAgIGRhdGEudmFsaWRbZmllbGQucHJvcGVydHldID0gZm9ybUNvbnRyb2wudmFsaWQ7XHJcbiAgICByZXR1cm4gZm9ybUNvbnRyb2wudmFsaWQ7XHJcbiAgfVxyXG5cclxuICBhZGRSb3coaWR4OiBudW1iZXIsICRldmVudCA9IG51bGwpIHtcclxuICAgIHRoaXMub25yb3dhZGRlZC5lbWl0KGlkeCk7XHJcbiAgICB0aGlzLmVkaXRpb25PcFRyaWdnZXJlZCA9IHRydWU7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHQoJGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xyXG4gICAgaWYgKCF0aGlzLmRyYWdnYWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgdGhpcy5kYXRhID0gWy4uLnRoaXMuZGF0YV07XHJcbiAgICB0aGlzLm9uZHJvcC5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGVkaXRpb25PcFRyaWdnZXJlZCA9IGZhbHNlO1xyXG4gIGRlbGV0ZVJvdyhpZHg6IG51bWJlciwgJGV2ZW50ID0gbnVsbCkge1xyXG4gICAgY29uc3QgaXRlbVRvUmVtb3ZlID0gdGhpcy5kYXRhW2lkeF07XHJcbiAgICB0aGlzLm9ucm93ZGVsZXRlZC5lbWl0KGl0ZW1Ub1JlbW92ZSk7XHJcbiAgICB0aGlzLmVkaXRpb25PcFRyaWdnZXJlZCA9IHRydWU7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHQoJGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0RWRpdChpZDogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5MaW5lRWRpdCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgaWYgKHRoaXMuZWRpdElkICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVkaXRJZCA9IGlkO1xyXG4gICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgdGhpcy5mb2N1c1NlbGVjdCh0aGlzLmlucHV0RWxlbWVudCk7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c1NlbGVjdCh0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50LmlucHV0RWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZGF0ZVRpbWVQaWNrZXIpIHtcclxuICAgICAgICB0aGlzLmZvY3VzU2VsZWN0KHRoaXMuZGF0ZVRpbWVQaWNrZXIuaW5wdXRSZWYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c1NlbGVjdChlbGVtOiBhbnkpIHtcclxuICAgIGlmIChlbGVtKSB7XHJcbiAgICAgIGVsZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtLm5hdGl2ZUVsZW1lbnQuc2VsZWN0KCk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzb3J0KCRldmVudDogYW55LCBmaWVsZFByb3BlcnR5OiBzdHJpbmcsKSB7XHJcbiAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdCh7IHNvcnROYW1lOiBmaWVsZFByb3BlcnR5LCBzb3J0VmFsdWU6ICRldmVudCB9KTtcclxuICB9XHJcblxyXG4gIGZpbHRlcigkZXZlbnQ6IGFueSwgZmllbGRQcm9wZXJ0eTogc3RyaW5nLCApIHtcclxuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoeyBmaWx0ZXJOYW1lOiBmaWVsZFByb3BlcnR5LCBmaWx0ZXJWYWx1ZTogJGV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGVhZGVyTWF4V2lkdGgoZmllbGQ6IEZpZWxkKSB7XHJcbiAgICBpZiAoZmllbGQuc2hvd1NvcnQpIHtcclxuICAgICAgcmV0dXJuIGBjYWxjKDEwMCUgLSAxNXB4KWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYDEwMCVgO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICBoYW5kbGVNb3VzZURvd24oZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICh0aGlzLmVkaXRJZCAmJiB0aGlzLnByb3BlcnR5KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCAhPT0gZS50YXJnZXQpIHx8XHJcbiAgICAgICAgKHRoaXMuaW5wdXROdW1iZXJFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5pbnB1dE51bWJlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmRhdGVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB8fFxyXG4gICAgICAgICh0aGlzLmRhdGVUaW1lUGlja2VyRWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuZGF0ZVRpbWVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB8fFxyXG4gICAgICAgICh0aGlzLnNlbGVjdEVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLnNlbGVjdEVsZW1lbnQubmF0aXZlRWxlbWVudCkgfHxcclxuICAgICAgICAgICh0aGlzLmJvb2xFbGVtZW50ICYmIHRoaXMuYm9vbEVsZW1lbnQubmF0aXZlRWxlbWVudCAhPT0gZS50YXJnZXQpKVxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dE51bWJlckNvbXBvbmVudCkge1xyXG4gICAgICAgICAgdGhpcy5pbnB1dE51bWJlckNvbXBvbmVudC5ibHVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGVUaW1lUGlja2VyKSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGVUaW1lUGlja2VyLnNldEN1cnJlbnRWYWx1ZUFuZENsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVtaXRPbkVkaXRFdmVudCgpO1xyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDdXN0b21QYWRkaW5nKGl0ZW06IGFueSwgaTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIWkpIHtcclxuICAgICAgaWYgKCFpdGVtLmxldmVsKSB7XHJcbiAgICAgICAgcmV0dXJuICEhaXRlbS5jaGlsZHJlbiA/IDYgOiAyODtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5sZXZlbCAqIHRoaXMuaW5kZW50U2l6ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDY7XHJcbiAgfVxyXG5cclxuICBjaGlsZE9mKG5vZGU6IGFueSwgYW5jZXN0b3I6IGFueSkge1xyXG4gICAgbGV0IGNoaWxkID0gbm9kZTtcclxuICAgIHdoaWxlIChjaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICBpZiAoY2hpbGQgPT09IGFuY2VzdG9yKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdCAmJiBjaGlsZC5jbGFzc0xpc3QubGVuZ3RoID4gMCAmJiBjaGlsZC5jbGFzc05hbWUgJiYgdHlwZW9mIGNoaWxkLmNsYXNzTmFtZSA9PT0gJ3N0cmluZydcclxuICAgICAgICAmJiBjaGlsZC5jbGFzc05hbWUuaW5kZXhPZignY2RrLW92ZXJsYXktcGFuZScpID49IDApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkLmNoaWxkTm9kZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZC5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdDTUFDUy1NT0RBTCcpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH07XHJcbiAgICAgIGNoaWxkID0gY2hpbGQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGVuZEVkaXRNb2RlKCRldmVudDogS2V5Ym9hcmRFdmVudCwgaW5kZXg6IG51bWJlciwgZGF0YTogYW55ID0gbnVsbCkge1xyXG4gICAgaWYgKCRldmVudC5rZXkgPT09ICgnRW50ZXInIHx8ICdlbnRlcicpKSB7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgIGRhdGEuY21hY3NFZGl0ZWRQcm9wID0gdGhpcy5wcm9wZXJ0eTtcclxuICAgICAgICB0aGlzLm9uZWRpdC5lbWl0KGRhdGEpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhdGFbaW5kZXhdLmNtYWNzRWRpdGVkUHJvcCA9IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgICAgIHRoaXMucHJvcGVydHkgPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgIHRoaXMubm9kZU9uRWRpdGlvbiA9IGRhdGE7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucm93T25FZGl0aW9uID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbmRFZGl0TW9kZU5nTW9kZWwoaW5kZXg6IG51bWJlciwgZGF0YTogYW55ID0gbnVsbCwgcHJvcGVydHk6IGFueSA9IG51bGwsIGZpZWxkOiBGaWVsZCA9IG51bGwpIHtcclxuICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgZGF0YS5jbWFjc0VkaXRlZFByb3AgPSBwcm9wZXJ0eSA/IHByb3BlcnR5IDogdGhpcy5wcm9wZXJ0eTtcclxuICAgICAgaWYgKGZpZWxkICYmIGZpZWxkLm1vZGUgPT09ICd0YWdzU2luZ2xlU2VsZWN0Jykge1xyXG4gICAgICAgIGRhdGFbZmllbGQucHJvcGVydHldID0gZGF0YVtmaWVsZC5wcm9wZXJ0eV0ubGVuZ3RoID8gZGF0YVtmaWVsZC5wcm9wZXJ0eV1bMF0gOiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQoZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhW2luZGV4XTtcclxuICAgICAgZGF0YS5jbWFjc0VkaXRlZFByb3AgPSBwcm9wZXJ0eSA/IHByb3BlcnR5IDogdGhpcy5wcm9wZXJ0eTtcclxuICAgICAgaWYgKGZpZWxkICYmIGZpZWxkLm1vZGUgPT09ICd0YWdzU2luZ2xlU2VsZWN0Jykge1xyXG4gICAgICAgIGRhdGFbZmllbGQucHJvcGVydHldID0gZGF0YVtmaWVsZC5wcm9wZXJ0eV0ubGVuZ3RoID8gZGF0YVtmaWVsZC5wcm9wZXJ0eV1bMF0gOiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICB0aGlzLm5vZGVPbkVkaXRpb24gPSBudWxsO1xyXG5cclxuICB9XHJcblxyXG4gIG5nTW9kZWxDaGFuZ2UoaW5kZXg6IG51bWJlciwgZGF0YTogYW55ID0gbnVsbCkge1xyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICB0aGlzLm5vZGVPbkVkaXRpb24gPSBkYXRhO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJvd09uRWRpdGlvbiA9IGluZGV4O1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXgoaWQpOiBudW1iZXIge1xyXG4gICAgbGV0IGkgPSAtMTtcclxuICAgIGkgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBpZCk7XHJcbiAgICByZXR1cm4gaTtcclxuICB9XHJcblxyXG4gIG9yZGVyID0gMDtcclxuICB1cGRhdGVDaGVja2JveENhY2hlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2hlY2tib3hUZW1wQ2FjaGUgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNoZWNrYm94VGVtcENhY2hlLnB1c2goe1xyXG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLmVkaXRpb25PcFRyaWdnZXJlZCA/IGZhbHNlIDogdGhpcy5kYXRhW2ldLnNlbGVjdGVkLFxyXG4gICAgICAgIGRhdGE6IHsgLi4udGhpcy5kYXRhW2ldIH0sXHJcbiAgICAgICAgb3JkZXI6IHRoaXMuZGF0YVtpXS5zZWxlY3RlZCA/IHRoaXMub3JkZXIrKyA6IC0xXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja2JveENhY2hlID0gWy4uLmNoZWNrYm94VGVtcENhY2hlXTtcclxuICAgIGlmICh0aGlzLmVkaXRpb25PcFRyaWdnZXJlZCkge1xyXG4gICAgICB0aGlzLmVkaXRpb25PcFRyaWdnZXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hlY2tib3hDYWNoZVRyZWVEYXRhKCkge1xyXG4gICAgdGhpcy5jb252ZXJ0RXhwYW5kVHJlZVRvTGlzdCh0aGlzLmRhdGEsIHRoaXMuY2hlY2tib3hDYWNoZSk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0RXhwYW5kVHJlZVRvTGlzdChpdGVtOiBhbnksIHBsYWluTGlzdDogYW55W10pIHtcclxuICAgIGlmIChpc0FycmF5KGl0ZW0pKSB7XHJcbiAgICAgIGl0ZW0uZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICBsZXQgZWxlbWVudEluQ2FjaGUgPSBwbGFpbkxpc3QuZmluZEluZGV4KGVsID0+IGVsLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGVsZW1bdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICAgIGlmIChlbGVtZW50SW5DYWNoZSA8IDApIHtcclxuICAgICAgICAgIHBsYWluTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBvcmRlcjogLTEsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgLi4uZWxlbSB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbGVtLmNoaWxkcmVuICYmIGVsZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5jb252ZXJ0RXhwYW5kVHJlZVRvTGlzdChlbGVtLmNoaWxkcmVuLCBwbGFpbkxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgZWxlbWVudEluQ2FjaGUgPSBwbGFpbkxpc3QuZmluZEluZGV4KGVsID0+IGVsLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGl0ZW1bdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICBpZiAoZWxlbWVudEluQ2FjaGUgPCAwKSB7XHJcbiAgICAgICAgcGxhaW5MaXN0LnB1c2goe1xyXG4gICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgb3JkZXI6IC0xLFxyXG4gICAgICAgICAgZGF0YTogeyAuLi5pdGVtIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CdXR0b25DbGljayhmaWVsZDogYW55KSB7XHJcbiAgICB0aGlzLmJ1dHRvbkNsaWNrLmVtaXQoZmllbGQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveENoYW5nZSgkZXZlbnQsIGRhdGEpIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZVt0aGlzLmdldEluZGV4KGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pXS5vcmRlciA9ICRldmVudCA/IHRoaXMub3JkZXIrKyA6IC0xO1xyXG4gICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaENoZWNrYm94U3RhdGUob25pbml0ID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGRhdGFTZWxlY3RlZCA9IHRoaXMuY2hlY2tDaGVja2JveFN0YXRlKCk7XHJcbiAgICBpZiAoIW9uaW5pdCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KGRhdGFTZWxlY3RlZC5tYXAoaXRlbSA9PiBpdGVtLmRhdGEpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrQ2hlY2tib3hTdGF0ZSgpIHtcclxuICAgIGNvbnN0IGRhdGFTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkID09PSB0cnVlKS5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5hbGxDaGVja2VkID0gKGRhdGFTZWxlY3RlZC5sZW5ndGggPiAwICYmIChkYXRhU2VsZWN0ZWQubGVuZ3RoID09PSB0aGlzLmNoZWNrYm94Q2FjaGUubGVuZ3RoKSk7XHJcbiAgICB0aGlzLmlzSW5kZXRlcm1pbmF0ZSA9IGRhdGFTZWxlY3RlZC5sZW5ndGggPiAwICYmICF0aGlzLmFsbENoZWNrZWQ7XHJcbiAgICByZXR1cm4gZGF0YVNlbGVjdGVkO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICBvblJhdGVDaGFuZ2UoY291bnQ6IG51bWJlciwgZGF0YTogYW55KSB7XHJcbiAgICBkYXRhW3RoaXMuY29uZmlnLmZpZWxkUmF0ZV0gPSBjb3VudDtcclxuICAgIHRoaXMucmF0ZUNoYW5nZS5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgb25SYXRlQ2xpY2soZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRzKCk6IEZpZWxkW10ge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmZpZWxkcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uaGlkZGVuID09PSB1bmRlZmluZWQgfHwgIWl0ZW0uaGlkZGVuKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hBbGxDaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHN0YXR1cztcclxuICAgICAgZWxlbWVudC5vcmRlciA9IC0xO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlzSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmICghdGhpcy5leGNsdXNpdmVTZWxlY3QpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCgoc3RhdHVzKSA/IHRoaXMuZGF0YSA6IFtdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRhdGFTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoKHN0YXR1cykgPyBkYXRhU2VsZWN0ZWQubWFwKGUgPT4gZS5kYXRhKSA6IFtdKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWwoZGF0YTogYW55LCBmaWVsZDogRmllbGQpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCAmJiBmaWVsZC5zZWxlY3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKGl0ZW0gPT4gaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW1bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gZGF0YVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgICByZXN1bHQgPSAoaXRlbSAhPT0gdW5kZWZpbmVkKSA/IGl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXSA6ICcnO1xyXG4gICAgICBpZiAoZmllbGQubW9kZSA9PT0gJ3RhZ3NTaW5nbGVTZWxlY3QnICYmIHJlc3VsdCA9PT0gJycpIHtcclxuICAgICAgICByZXN1bHQgPSBkYXRhW2ZpZWxkLnByb3BlcnR5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdChmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdDtcclxuICB9XHJcblxyXG4gIGlzU3RyaW5nKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgaXNSZWFkT25seShmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLnJlYWRvbmx5ICE9PSB1bmRlZmluZWQgJiYgZmllbGQucmVhZG9ubHk7XHJcbiAgfVxyXG5cclxuICBpc051bWJlcihmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLk51bWJlcjtcclxuICB9XHJcblxyXG4gIGlzQm9vbGVhbihmaWVsZDogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5Cb29sZWFuO1xyXG4gIH1cclxuXHJcbiAgaXNPYmplY3QodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mICh2YWx1ZSkgPT09ICdvYmplY3QnO1xyXG4gIH1cclxuXHJcbiAgaXNEYXRlKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICB9XHJcblxyXG4gIGlzVGltZShmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlRpbWU7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlRGVmYXVsdChmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZUJ1dHRvbihmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5CdXR0b247XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlVGFnKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRhZztcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUZW1wbGF0ZVJlZihmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG5cclxuICBpc1VuZGVmaW5lZCh2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGlzUm93U2VsZWN0ZWQoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb25maWcpIHtcclxuICAgICAgY29uc3QgZGF0YVNlbGVjdGQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgICAgcmV0dXJuIGRhdGFTZWxlY3RkLmluZGV4T2YoZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSkgIT09IC0xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGV4Y2VsU2VydmljZTogRXhjZWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsXHJcbiAgICBwcml2YXRlIG56RHJvcGRvd25TZXJ2aWNlOiBDbWFjc0NvbnRleHRNZW51U2VydmljZSxcclxuICAgIHByaXZhdGUgY29va2llczogQ29va2llU2VydmljZSxcclxuICAgIHByaXZhdGUgdXRpbFNlcnZpY2U6IFV0aWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5nZXRJbmRleENvb2tpZSgpICYmIHRoaXMuY29va2llcy5jaGVjayh0aGlzLmdyaWRJRCkpIHtcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWdTdHIgPSB0aGlzLmNvb2tpZXMuZ2V0KHRoaXMuZ3JpZElEKTtcclxuICAgICAgLy8gcmVzZXQgZXhwaXJhdGlvbiBkYXRlXHJcbiAgICAgIHRoaXMuY29va2llcy5zZXQodGhpcy5ncmlkSUQsIHNhdmVkQ29uZmlnU3RyLCAzNjUpO1xyXG5cclxuICAgICAgLy8gcGFyc2UgY29va2llIHZhbHVlIHRvIHR5cGVzY3JpcHQgY29uc3RcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWcgPSBKU09OLnBhcnNlKHRoaXMuY29va2llcy5nZXQodGhpcy5ncmlkSUQpKSBhcyBHcmlkQ29uZmlnO1xyXG4gICAgICBpZiAodHlwZW9mIHNhdmVkQ29uZmlnID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBzYXZlZENvbmZpZztcclxuICAgICAgICB0aGlzLmNvbmZpZ0NoYW5nZS5lbWl0KHRoaXMuY29uZmlnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXhDb29raWUoKSB7XHJcbiAgICBsZXQgYWxsb3dJbmRleFBhZ2VDb29raWUgPSBmYWxzZTtcclxuICAgIGxldCBjb25zZW50Q29va2llID0gdGhpcy5jb29raWVzLmdldCgnT3B0YW5vbkNvbnNlbnQnKTtcclxuICAgIGlmIChjb25zZW50Q29va2llICE9IFwiXCIpIHtcclxuICAgICAgbGV0IGdyb3VwSW5kZXggPSBjb25zZW50Q29va2llLmluZGV4T2YoJ2dyb3Vwcz0nKTtcclxuICAgICAgbGV0IGdyb3VwcyA9IGNvbnNlbnRDb29raWUuc3Vic3RyaW5nKGdyb3VwSW5kZXgpOyAvL3dpbGwgcmV0dXJuIHNvbWV0aGluZ2xpa2UgZ3JvdXBzPUMwMDAyOjAsQzAwMDE6MVxyXG4gICAgICBsZXQgZnVuY3Rpb25hbEdyb3VwSW5kZXggPSBncm91cHMuaW5kZXhPZignQzAwMDk6Jyk7XHJcbiAgICAgIGlmIChmdW5jdGlvbmFsR3JvdXBJbmRleCAhPSAtMSkge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5VmFsdWUgPSBncm91cHMuc3Vic3RyaW5nKGZ1bmN0aW9uYWxHcm91cEluZGV4ICsgNiwgZnVuY3Rpb25hbEdyb3VwSW5kZXggKyA3KTtcclxuICAgICAgICBpZiAoTnVtYmVyKGNhdGVnb3J5VmFsdWUpID09PSAxKSB7XHJcbiAgICAgICAgICBhbGxvd0luZGV4UGFnZUNvb2tpZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWxsb3dJbmRleFBhZ2VDb29raWU7XHJcbiAgfVxyXG5cclxuICBzZXRGaWVsZHNEZWZhdWx0KCkge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmZpZWxkcykge1xyXG4gICAgICB0aGlzLmNvbmZpZy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgZmllbGQuZWRpdGFibGUgPSBmaWVsZC5lZGl0YWJsZSA9PT0gbnVsbCB8fCBmaWVsZC5lZGl0YWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZpZWxkLmVkaXRhYmxlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmdyaWRJRCkge1xyXG4gICAgICB0aGlzLmdyaWRJRCA9IHRoaXMudXRpbFNlcnZpY2UudXVpZHY0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRGaWVsZHNEZWZhdWx0KCk7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrYm94U2VsZWN0ICYmICF0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlKCk7XHJcbiAgICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2tib3hTZWxlY3QgJiYgdGhpcy5leHBhbmRhYmxlICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZVRyZWVEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGVja0NoZWNrYm94U3RhdGUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhVGFibGUgJiYgdGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgd2hpbGUgKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBvcCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV4cG9ydEV2ZW50LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGNvbmZpZzogR3JpZEV4cENvbmZpZykgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGNvbmZpZy5leHBvcnRUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlBkZjpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9QZGYoY29uZmlnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5Yc2x4OlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb0V4Y2VsKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuUG5nOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb1BuZyhjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlBkZlRyZWU6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRyZWVQZGYoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5Yc2x4VHJlZTpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VHJlZUV4Y2VsKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyogQ29udmVydCB0cmVlIHRvIGxpc3QgaWYgZXhwYW5kYWJsZSAqL1xyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSAmJiB0aGlzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLmZpZWxkSUQgPSB0aGlzLmNvbmZpZy5maWVsZElkO1xyXG4gICAgICBjb25zdCBjb2VyY2VEYXRhID0gdGhpcy5kYXRhIGFzIGFueVtdO1xyXG4gICAgICBjb2VyY2VEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYXBPZkV4cGFuZGVkRGF0YVtpdGVtW3RoaXMuZmllbGRJRF1dID0gdGhpcy5jb252ZXJ0VHJlZVRvTGlzdChpdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRDb21wbGV0ZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0Q29tcGxldGVkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmRhdGEgJiYgdGhpcy5jb25maWcpIHtcclxuICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgIHRoaXMubWFwT2ZFeHBhbmRlZERhdGEgPSB7fTtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlVHJlZURhdGEoKTtcclxuXHJcbiAgICAgICAgdGhpcy5maWVsZElEID0gdGhpcy5jb25maWcuZmllbGRJZDtcclxuICAgICAgICBjb25zdCBjb2VyY2VEYXRhID0gdGhpcy5kYXRhIGFzIGFueVtdO1xyXG4gICAgICAgIGNvZXJjZURhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuXHJcbiAgICAgICAgICBpZiAoIXRoaXMubWFwT2ZFeHBhbmRlZERhdGFbaXRlbVt0aGlzLmZpZWxkSURdXSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcE9mRXhwYW5kZWREYXRhW2l0ZW1bdGhpcy5maWVsZElEXV0gPSB0aGlzLmNvbnZlcnRUcmVlVG9MaXN0KGl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKCk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2hlY2tDaGVja2JveFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuc2V0RmllbGRzRGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyogZ2V0VHJlZU5vZGVCeUtleShub2RlOiBhbnksIGtleTogYW55KSB7XHJcbiAgICAgY29uc29sZS5sb2cobm9kZSlcclxuICAgICBpZiAoaXNBcnJheShub2RlKSkge1xyXG4gICAgICAgbm9kZS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgdGhpcy5nZXRUcmVlTm9kZUJ5S2V5KGVsLCBrZXkpO1xyXG4gICAgICAgfSlcclxuICAgICB9IGVsc2UgaWYgKG5vZGVbdGhpcy5maWVsZElEXSA9PT0ga2V5KSB7XHJcbiAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICB9IGVsc2UgaWYgKG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgIHRoaXMuZ2V0VHJlZU5vZGVCeUtleShlbCwga2V5KTtcclxuICAgICAgIH0pXHJcbiAgICAgfVxyXG4gICB9Ki9cclxuXHJcbiAgLyogRXhwYW5kYWJsZSBSb3dzICovXHJcbiAgZXhwb3J0VHJlZVBkZihmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBkb2MgPSBuZXcganNQREYoKTtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcclxuICAgIGNvbnN0IHJvd3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCkuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGNvbHVtbnMucHVzaChmaWVsZC5kaXNwbGF5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGNvbHVtbnMucHVzaChmaWVsZC5kaXNwbGF5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZXhwb3J0VHJlZVRvUGRmUmVjKHJvd3MsIHRoaXMuZGF0YSwgMCk7XHJcblxyXG4gICAgLypkb2MuYXV0b1RhYmxlKHtcclxuICAgICAgdGhlbWU6ICdzdHJpcGVkJyxcclxuICAgICAgbWFyZ2luOiB7IHRvcDogNSB9LFxyXG4gICAgICBib2R5OiByb3dzLFxyXG4gICAgICBjb2x1bW5zXHJcbiAgICB9KTsqL1xyXG5cclxuICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KFwiREQuTU0uWVlZWS5ISC5tbS5zc1wiKSArICdfJyArIGZpbGVOYW1lICsgJy5wZGYnO1xyXG4gICAgZG9jLnNhdmUoZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VHJlZVRvUGRmUmVjKHJvd3M6IGFueSwgZGF0YTogYW55LCBvZmZTZXRNYXJnaW4gPSAwKSB7XHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBpdGVtVG9FeHBvcnQgPSBbXTtcclxuICAgICAgY29uc3QgY29lcmNlZEl0ZW0gPSBpdGVtIGFzIGFueTtcclxuICAgICAgbGV0IHBhcmVudFN0eWxlczogYW55ID0geyBjZWxsUGFkZGluZzogWzIsIDIsIDIsIDJdIH07XHJcblxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKChmaWVsZCwgaWR4KSA9PiB7XHJcblxyXG4gICAgICAgIHBhcmVudFN0eWxlcyA9IHsgY2VsbFBhZGRpbmc6IFsyLCAyLCAyLCAyXSB9O1xyXG4gICAgICAgIGlmICghaWR4KSB7XHJcbiAgICAgICAgICBwYXJlbnRTdHlsZXMuY2VsbFBhZGRpbmcgPSBbMiwgMiwgMiwgMiArIG9mZlNldE1hcmdpbl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29lcmNlZEl0ZW0uY2hpbGRyZW4gJiYgY29lcmNlZEl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBwYXJlbnRTdHlsZXMuZmlsbENvbG9yID0gWzE1MywgMjA0LCAyNTVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7IGNvbnRlbnQ6IGl0ZW1bZmllbGQucHJvcGVydHldLmNvbnRleHQuZXhwb3J0VmFsdWUsIHN0eWxlczogcGFyZW50U3R5bGVzIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGZpZWxkLmVkaXRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TZWxlY3Q6XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQob3B0aW9uID0+IG9wdGlvbltmaWVsZC5zZWxlY3QudmFsdWVdID09PSBpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHsgY29udGVudDogc2VsZWN0SXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLkRhdGU6XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goeyBjb250ZW50OiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShpdGVtW2ZpZWxkLnByb3BlcnR5XSwgJ01NTU0gZGQgeXl5eScpLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuVGltZTpcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7IGNvbnRlbnQ6IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGl0ZW1bZmllbGQucHJvcGVydHldLCAnaDptbSBhJyksIHN0eWxlczogcGFyZW50U3R5bGVzIH0pO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHsgY29udGVudDogaXRlbVtmaWVsZC5wcm9wZXJ0eV0sIHN0eWxlczogcGFyZW50U3R5bGVzIH0pO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcm93cy5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcbiAgICAgIGlmIChjb2VyY2VkSXRlbS5jaGlsZHJlbiAmJiBjb2VyY2VkSXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmV4cG9ydFRyZWVUb1BkZlJlYyhyb3dzLCBjb2VyY2VkSXRlbS5jaGlsZHJlbiwgNSArIG9mZlNldE1hcmdpbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRUcmVlVG9MaXN0KHJvb3Q6IGFueSk6IGFueVtdIHtcclxuICAgIGNvbnN0IHN0YWNrOiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgYXJyYXk6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBoYXNoTWFwID0ge307XHJcbiAgICBzdGFjay5wdXNoKHsgLi4ucm9vdCwgbGV2ZWw6IDAsIGV4cGFuZDogdGhpcy5leHBhbmRBbGwgPyB0aGlzLmV4cGFuZEFsbCA6IHJvb3QuZXhwYW5kIH0pO1xyXG5cclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGggIT09IDApIHtcclxuICAgICAgY29uc3Qgbm9kZSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLCBoYXNoTWFwLCBhcnJheSk7XHJcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIHN0YWNrLnB1c2goXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAuLi5ub2RlLmNoaWxkcmVuW2ldLFxyXG4gICAgICAgICAgICAgIGxldmVsOiBub2RlLmxldmVsICsgMSxcclxuICAgICAgICAgICAgICBleHBhbmQ6IHRoaXMuZXhwYW5kQWxsID8gdGhpcy5leHBhbmRBbGwgOiBub2RlLmNoaWxkcmVuW2ldLmV4cGFuZCxcclxuICAgICAgICAgICAgICBwYXJlbnQ6IG5vZGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgdmlzaXROb2RlKG5vZGU6IGFueSwgaGFzaE1hcDogYW55LCBhcnJheTogYW55W10pOiB2b2lkIHtcclxuICAgIGlmICghaGFzaE1hcFtub2RlW3RoaXMuZmllbGRJRF1dKSB7XHJcbiAgICAgIGhhc2hNYXBbbm9kZVt0aGlzLmZpZWxkSURdXSA9IHRydWU7XHJcbiAgICAgIGFycmF5LnB1c2gobm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBFeHBhbmRDb2xsYXBzZShhcnJheTogYW55W10sIGRhdGE6IGFueSwgJGV2ZW50OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoJGV2ZW50ID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmNvbGxhcHNlQ2hpbGRyZW4oYXJyYXksZGF0YSwkZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vblJvd0V4cGFuZENvbGxhcHNlLmVtaXQoe2RhdGEsJGV2ZW50fSk7XHJcbiAgfVxyXG4gIGNvbGxhcHNlQ2hpbGRyZW4oYXJyYXk6IGFueVtdLCBkYXRhOiBhbnksICRldmVudDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCRldmVudCA9PT0gZmFsc2UpIHtcclxuICAgICAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcclxuICAgICAgICBkYXRhLmNoaWxkcmVuLmZvckVhY2goZCA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBhcnJheS5maW5kKGEgPT4gYVt0aGlzLmZpZWxkSURdID09PSBkW3RoaXMuZmllbGRJRF0pITtcclxuICAgICAgICAgIHRhcmdldC5leHBhbmQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuY29sbGFwc2VDaGlsZHJlbihhcnJheSwgdGFyZ2V0LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94VHJlZUNoYW5nZSgkZXZlbnQsIGl0ZW0sIHN1YnRyZWUgPSBudWxsKSB7XHJcbiAgICBpZiAoIXRoaXMuZXhjbHVzaXZlU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVHJlZUNoZWNrYm94ZXMoJGV2ZW50LCBpdGVtKTtcclxuICAgICAgY29uc3QgY29lcmNlZEVsZW0gPSBzdWJ0cmVlLmZpbmQoZSA9PiBlW3RoaXMuZmllbGRJRF0gPT09IGl0ZW1bdGhpcy5maWVsZElEXSk7XHJcbiAgICAgIGlmIChjb2VyY2VkRWxlbS5wYXJlbnQpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hTdWJUcmVlQ2hlY2tib3hlcyhjb2VyY2VkRWxlbS5wYXJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRyZWVDaGVja2JveGVzKCRldmVudDogYm9vbGVhbiwgYXJyYXk6IGFueSkge1xyXG4gICAgYXJyYXkuc2VsZWN0ZWQgPSAkZXZlbnQ7XHJcbiAgICBjb25zdCBub2RlOiBDaGVja2JveFNlbGVjdCA9IHRoaXMuZ2V0Tm9kZShhcnJheVt0aGlzLmZpZWxkSURdKTtcclxuICAgIG5vZGUuc2VsZWN0ZWQgPSAkZXZlbnQ7XHJcbiAgICBub2RlLm9yZGVyID0gJGV2ZW50ID8gdGhpcy5vcmRlcisrIDogLTE7XHJcbiAgICBpZiAoYXJyYXkuY2hpbGRyZW4hISkge1xyXG4gICAgICBhcnJheS5jaGlsZHJlbi5mb3JFYWNoKChkOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRyZWVDaGVja2JveGVzKCRldmVudCwgZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVmcmVzaFN1YlRyZWVDaGVja2JveGVzKHN1YnRyZWUpIHtcclxuICAgIGlmIChzdWJ0cmVlLmNoaWxkcmVuISEpIHtcclxuICAgICAgbGV0IGNoZWNrZWQgPSAwO1xyXG4gICAgICBsZXQgaW5kZXRlcm1pbmF0ZSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIHN1YnRyZWUuY2hpbGRyZW4pIHtcclxuICAgICAgICBjb25zdCBub2RlOiBDaGVja2JveFNlbGVjdCA9IHRoaXMuZ2V0Tm9kZShjaGlsZFt0aGlzLmZpZWxkSURdKTtcclxuICAgICAgICBpZiAobm9kZS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgY2hlY2tlZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9kZS5zZWxlY3RlZCA9PT0gLTEpIHtcclxuICAgICAgICAgIGluZGV0ZXJtaW5hdGUrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgbm9kZTogQ2hlY2tib3hTZWxlY3QgPSB0aGlzLmdldE5vZGUoc3VidHJlZVt0aGlzLmZpZWxkSURdKTtcclxuICAgICAgbm9kZS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAoaW5kZXRlcm1pbmF0ZSB8fCAoY2hlY2tlZCA8IHN1YnRyZWUuY2hpbGRyZW4ubGVuZ3RoICYmIGNoZWNrZWQpKSB7XHJcbiAgICAgICAgbm9kZS5zZWxlY3RlZCA9IC0xO1xyXG4gICAgICB9IGVsc2UgaWYgKGNoZWNrZWQgPT09IHN1YnRyZWUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgbm9kZS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICBcclxuICAgIH1cclxuICAgIGlmIChzdWJ0cmVlLnBhcmVudCkge1xyXG4gICAgICB0aGlzLnJlZnJlc2hTdWJUcmVlQ2hlY2tib3hlcyhzdWJ0cmVlLnBhcmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXROb2RlKGtleTogYW55KSB7XHJcbiAgICBsZXQgdGVzdCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIobiA9PiBuLmRhdGFbdGhpcy5maWVsZElEXSA9PT0ga2V5KTtcclxuICAgIHJldHVybiB0ZXN0ID8gdGVzdFswXSA6IHsgc2VsZWN0ZWQ6IGZhbHNlLCBkYXRhOiBudWxsIH07XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb1BuZyhmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRUYWJsZSgncG5nJywgZmlsZU5hbWUsIHRoaXMuZ3JpZElEKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRvRXhjZWwoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnN0IGRhdGFUb0V4cG9ydDogYW55W10gPSBbXTtcclxuXHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0ge307XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHwgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGlmICghZmllbGQuaGlkZGVuKSB7XHJcbiAgICAgICAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdEl0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpIHtcclxuICAgICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dC5leHBvcnRWYWx1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkYXRhVG9FeHBvcnQucHVzaChpdGVtVG9FeHBvcnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJERC5NTS5ZWVlZLkhILm1tLnNzXCIpICsgJ18nICsgZmlsZU5hbWU7XHJcbiAgICB0aGlzLmV4Y2VsU2VydmljZS5leHBvcnRBc0V4Y2VsRmlsZShkYXRhVG9FeHBvcnQsIGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICB9XHJcblxyXG4gIC8qIEV4cGFuZGFibGUgUm93cyAqL1xyXG4gIGV4cG9ydFRyZWVFeGNlbChmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRhVG9FeHBvcnQ6IGFueVtdID0gW107XHJcbiAgICB0aGlzLmV4cG9ydFRyZWVFeGNlbFJlYyh0aGlzLmRhdGEsIGRhdGFUb0V4cG9ydCk7XHJcbiAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyBmaWxlTmFtZTtcclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydEFzRXhjZWxGaWxlKGRhdGFUb0V4cG9ydCwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VHJlZUV4Y2VsUmVjKGRhdGE6IGFueSwgZGF0YVRvRXhwb3J0OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IHt9O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoIWZpZWxkLmhpZGRlbikge1xyXG4gICAgICAgICAgaWYgKGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBpdGVtW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0LmV4cG9ydFZhbHVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0SXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRhdGFUb0V4cG9ydC5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcblxyXG4gICAgICBjb25zdCBjb2VyY2VkSXRlbSA9IGl0ZW0gYXMgYW55O1xyXG4gICAgICBpZiAoY29lcmNlZEl0ZW0uY2hpbGRyZW4gJiYgY29lcmNlZEl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5leHBvcnRUcmVlRXhjZWxSZWMoY29lcmNlZEl0ZW0uY2hpbGRyZW4sIGRhdGFUb0V4cG9ydCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBleHBvcnRUb1BkZihjb25maWcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBpZiAoIWNvbmZpZy51c2VWZXJzaW9uMikge1xyXG4gICAgICB0aGlzLnV0aWxTZXJ2aWNlLmV4cG9ydFRhYmxlKFxyXG4gICAgICAgICdwZGYnLFxyXG4gICAgICAgIGNvbmZpZy5maWxlTmFtZSxcclxuICAgICAgICB0aGlzLmdyaWRJRCxcclxuICAgICAgICBjb25maWcuZXhwb3J0Q29tcGFueU5hbWUsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFVzZXJOYW1lLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRUaXRsZSxcclxuICAgICAgICBjb25maWcuZXhwb3J0Q29tcGFueUxvZ29VcmwsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFRhYmxlQ3VzdG9tV2lkdGgsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBleHBvcnRDb25maWcgPSB7XHJcbiAgICAgICAgY2hlY2tib3hTZWxlY3Q6IHRoaXMuY2hlY2tib3hTZWxlY3QsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtczogdGhpcy5jaGVja2JveFNlbGVjdCA/IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pIDogW10sXHJcbiAgICAgICAgZmlsZU5hbWU6IGNvbmZpZy5maWxlTmFtZSxcclxuICAgICAgICBkYXRlUGlwZTogdGhpcy5kYXRlUGlwZSxcclxuICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXHJcbiAgICAgICAgZWxlbUlEOiB0aGlzLmdyaWRJRCxcclxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxyXG4gICAgICAgIGNvbHVtblN0eWxlczogY29uZmlnLmNvbHVtblN0eWxlcyxcclxuICAgICAgICBleHBvcnRDb21wYW55TmFtZTogY29uZmlnLmV4cG9ydENvbXBhbnlOYW1lLFxyXG4gICAgICAgIGV4cG9ydFVzZXJOYW1lOiBjb25maWcuZXhwb3J0VXNlck5hbWUsXHJcbiAgICAgICAgZXhwb3J0VGl0bGU6IGNvbmZpZy5leHBvcnRUaXRsZSxcclxuICAgICAgICBleHBvcnRDb21wYW55TG9nb1VybDogY29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsID8gY29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsIDogJ2Fzc2V0cy9QVG9CX2xvZ28ucG5nJyxcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRUYWJsZXYyKFxyXG4gICAgICAgIGV4cG9ydENvbmZpZ1xyXG4gICAgICApO1xyXG4gICAgfSAgICBcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBjbGlja3MgPSAwO1xyXG4gIGNsaWNrUm93KGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMuY2xpY2tzKys7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrcyA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Um93KGV2ZW50LCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5jbGlja3MgPiAxKSB7XHJcbiAgICAgICAgdGhpcy5kYmxDbGlja1JvdyhkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNsaWNrcyA9IDA7XHJcbiAgICB9LCAzMDApO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Um93KGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMub25jbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gICAgLyogR2V0IGluZGV4IG9mIHNlbGVjdGlvbiAqL1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgIGlmICghdGhpcy5jaGVja2JveFNlbGVjdCkge1xyXG4gICAgICBpZiAoZXZlbnQgJiYgKHRvQm9vbGVhbihldmVudC5jdHJsS2V5KSB8fCB0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpKSkge1xyXG4gICAgICAgIC8qIFNoaWZ0IFNlbGVjdGlvbiAqL1xyXG4gICAgICAgIGlmICh0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdE11bHRpcGxlKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3Rpb24oZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgLyogU2VsZWN0IGVsZW1lbnQgKi9cclxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPSBldmVudCAmJiB0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpID8gdHJ1ZSA6ICF0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkO1xyXG4gICAgICAgIC8qIFNhdmUgbGFzdCBpbmRleCBzZWxlY3RlZCAqL1xyXG4gICAgICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZCA/IGluZGV4IDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpO1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLm9yZGVyID0gdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZCA/IHRoaXMub3JkZXIrKyA6IC0xO1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHNlbGVjdGVkSXRlbXMuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpLm1hcChpdGVtID0+IGl0ZW0uZGF0YSkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0aW9uKGRhdGEpIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkICYmIGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSAhPT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSlcclxuICAgICAgLmZvckVhY2goZWxlbSA9PiB7IGVsZW0uc2VsZWN0ZWQgPSBmYWxzZTsgZWxlbS5vcmRlciA9IC0xIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0TXVsdGlwbGUoY3VycmVudElkeCkge1xyXG4gICAgaWYgKHRoaXMubGFzdElkeFNlbGVjdGVkICE9PSBudWxsKSB7XHJcbiAgICAgIHdoaWxlIChjdXJyZW50SWR4ICE9PSB0aGlzLmxhc3RJZHhTZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVt0aGlzLmxhc3RJZHhTZWxlY3RlZF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVt0aGlzLmxhc3RJZHhTZWxlY3RlZF0ub3JkZXIgPSB0aGlzLm9yZGVyKys7XHJcbiAgICAgICAgdGhpcy5sYXN0SWR4U2VsZWN0ZWQgPSBjdXJyZW50SWR4ID4gdGhpcy5sYXN0SWR4U2VsZWN0ZWQgPyB0aGlzLmxhc3RJZHhTZWxlY3RlZCArIDEgOiB0aGlzLmxhc3RJZHhTZWxlY3RlZCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtjdXJyZW50SWR4XS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtjdXJyZW50SWR4XS5vcmRlciA9IHRoaXMub3JkZXIrKztcclxuICAgIH1cclxuICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gY3VycmVudElkeDtcclxuICB9XHJcblxyXG4gIGRibENsaWNrUm93KGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vbmRsY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIHRhcENvdW50ID0gMDtcclxuXHJcbiAgdGFwSGFuZGxlcigkZXZlbnQsIGRhdGEpIHtcclxuICAgIHRoaXMudGFwQ291bnQgKz0gMTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy50YXBDb3VudCA9PT0gMSkge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuY2xpY2tSb3cobnVsbCwgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50YXBDb3VudCA9IDA7XHJcbiAgICB9LCA2MDApO1xyXG4gICAgaWYgKHRoaXMudGFwQ291bnQgPiAxKSB7XHJcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmRibENsaWNrUm93KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNsaWNrQm9vbGVhbkNlbGwoZGF0YTogYW55LCBpZDogYW55LCBmaWVsZDogRmllbGQsIGluZGV4OiBudW1iZXIsICRldmVudDogbnVsbCk6IHZvaWQge1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0KCRldmVudCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pbkxpbmVFZGl0ICYmIGZpZWxkLmVkaXRhYmxlKSB7XHJcbiAgICAgIGlmIChkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gbnVsbCB8fCBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGFbZmllbGQucHJvcGVydHldID0gKGRhdGFbZmllbGQucHJvcGVydHldID09PSBmYWxzZSB8fCBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gJ2ZhbHNlJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbmRFZGl0TW9kZU5nTW9kZWwoaW5kZXgsIGRhdGEsIGZpZWxkLnByb3BlcnR5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVtaXRPbkVkaXRFdmVudCgpIHtcclxuICAgIGlmICh0aGlzLnJvd09uRWRpdGlvbiA+PSAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YVt0aGlzLnJvd09uRWRpdGlvbl0uY21hY3NFZGl0ZWRQcm9wID0gdGhpcy5wcm9wZXJ0eTtcclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbdGhpcy5yb3dPbkVkaXRpb25dKTtcclxuICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubm9kZU9uRWRpdGlvbikge1xyXG4gICAgICB0aGlzLm5vZGVPbkVkaXRpb24uY21hY3NFZGl0ZWRQcm9wID0gdGhpcy5wcm9wZXJ0eTtcclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLm5vZGVPbkVkaXRpb24pO1xyXG4gICAgICB0aGlzLm5vZGVPbkVkaXRpb24gPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NNYXAoZmllbGQ6IEZpZWxkKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbYGNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGhgXTogdGhpcy5sb2dzLFxyXG4gICAgICBbYGNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udGBdOiB0aGlzLmxvZ3MsXHJcbiAgICAgIFtgJHtmaWVsZC5uZ0NsYXNzfWBdOiBmaWVsZC5uZ0NsYXNzICYmIGZpZWxkLm5nQ2xhc3MubGVuZ3RoXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VzdG9tQ2xhc3MoZmllbGQ6IEZpZWxkKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbYGNtYWNzLWNvbXBhY3QtdGFibGUtY2VsbC0ke2ZpZWxkLnByb3BlcnR5fWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0TWF4V2lkdGgoZmllbGQ6IEZpZWxkLCBpdGVtOiBhbnksIGk6IG51bWJlcikge1xyXG5cclxuICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgIWkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbkxpbmVFZGl0ID8gYGNhbGMoMTAwJSAtIDE3cHgpYCA6IGBjYWxjKDEwMCUgLSAke3RoaXMuZ2V0TWF4V2lkdGhGaWVsZFZpZXdNb2RlKGZpZWxkLCBpKX0pYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbkxpbmVFZGl0ID8gYGNhbGMoMTAwJSAtIDE3cHgpYCA6IGBjYWxjKDEwMCUgLSAke3RoaXMuZ2V0TWF4V2lkdGhGaWVsZFZpZXdNb2RlKGZpZWxkLCBpKX0pYDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmluTGluZUVkaXQgPyBgY2FsYygxMDAlIC0gMTdweClgIDogYGNhbGMoMTAwJSAtICR7dGhpcy5nZXRNYXhXaWR0aEZpZWxkVmlld01vZGUoZmllbGQsIGkpfSlgO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWF4V2lkdGhGaWVsZFZpZXdNb2RlKGZpZWxkOiBGaWVsZCwgaTogbnVtYmVyKSB7XHJcbiAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0IHx8XHJcbiAgICAgIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgfHxcclxuICAgICAgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuVGltZSB8fFxyXG4gICAgICBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5OdW1iZXIpIHtcclxuICAgICAgcmV0dXJuIGAxOHB4YDtcclxuICAgIH1cclxuICAgIHJldHVybiAnMHB4JztcclxuICB9XHJcblxyXG4gIGdldFN0aWNreVdpZHRoKHBvc2l0aW9uKSB7XHJcbiAgICBpZiAoIXRoaXMuc2Nyb2xsLngpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBsZXQgd2lkdGggPSAwO1xyXG4gICAgaWYgKHBvc2l0aW9uID09PSAnc21hcnRUYWJsZScpIHtcclxuICAgICAgcmV0dXJuIHdpZHRoICsgJ3B4JztcclxuICAgIH1cclxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ2RyYWdnYWJsZScpIHtcclxuICAgICAgd2lkdGggPSB0aGlzLnNtYXJ0VGFibGUgPyA0MCA6IDA7XHJcbiAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgICBpZiAocG9zaXRpb24gPT09ICdjaGVja2JveFNlbGVjdCcpIHtcclxuICAgICAgaWYgKHRoaXMuc21hcnRUYWJsZSkge1xyXG4gICAgICAgIHdpZHRoICs9IDQwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZSkge1xyXG4gICAgICAgIHdpZHRoICs9IDQwO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTdGlja3lXaWR0aFJpZ2h0KHBvc2l0aW9uKSB7XHJcbiAgICBpZiAoIXRoaXMuc2Nyb2xsLngpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBsZXQgd2lkdGggPSAwO1xyXG4gICAgaWYgKHBvc2l0aW9uID09PSAnc21hcnRUYWJsZScpIHtcclxuICAgICAgcmV0dXJuIHdpZHRoICsgJ3B4JztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmV4dHJhKSB7XHJcbiAgICAgIGlmICh0aGlzLnNtYXJ0VGFibGUpIHtcclxuICAgICAgICB3aWR0aCArPSA0MDtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9zaXRpb24gPT09ICdleHRyYScpIHtcclxuICAgICAgICByZXR1cm4gd2lkdGggKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUYWJsZUNvbXBvbmVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLm56VGFibGVDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm1EYXRlKGRhdGUpIHtcclxuICAgIGNvbnN0IG0gPSBtb21lbnQoZGF0ZSk7XHJcbiAgICBpZiAobS5pc1ZhbGlkKCkpIHtcclxuICAgICAgbS5sb2NhbGUodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSk7XHJcbiAgICAgIHJldHVybiBtLmZvcm1hdCh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ0REL01NL1lZWVknIDogJ01NL0REL1lZWVknKTtcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHNlbGVjdFRyZWVTaW5nbGUoaXRlbSkge1xyXG4gICAgaWYgKCF0aGlzLmNoZWNrYm94U2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uLnRvZ2dsZShpdGVtW3RoaXMuZmllbGRJRF0pO1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChpdGVtW3RoaXMuZmllbGRJRF0pKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChbaXRlbV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoW10pO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSBcclxuICB9XHJcbn1cclxuXHJcbiIsIjxkaXYgaWQ9XCJ7e2dyaWRJRH19XCI+XHJcbiAgPG56LXRhYmxlICNncmlkQ29tcG9uZW50IFtuekRhdGFdPVwiZGF0YVwiIFtuelNob3dUb3RhbF09XCJzaG93VG90YWxcIiBbbnpQYWdlU2l6ZU9wdGlvbnNdPVwicGFnZVNpemVPcHRpb25zXCJcclxuICAgICAgICAgICAgW256VmlydHVhbEl0ZW1TaXplXT1cInZpcnR1YWxJdGVtU2l6ZVwiIFtuekxvYWRpbmdEZWxheV09XCJsb2FkaW5nRGVsYXlcIiBbbnpWaXJ0dWFsTWF4QnVmZmVyUHhdPVwidmlydHVhbE1heEJ1ZmZlclB4XCJcclxuICAgICAgICAgICAgW256TG9hZGluZ0luZGljYXRvcl09XCJsb2FkaW5nSW5kaWNhdG9yXCIgW256VG90YWxdPVwidG90YWxcIiBbbnpUaXRsZV09XCJ0aXRsZVwiIFtuekZvb3Rlcl09XCJmb290ZXJcIlxyXG4gICAgICAgICAgICBbbnpOb1Jlc3VsdF09XCJub1Jlc3VsdFwiIFtueldpZHRoQ29uZmlnXT1cIndpZHRoQ29uZmlnXCIgW256UGFnZUluZGV4XT1cInBhZ2VJbmRleFwiIFtuelBhZ2VTaXplXT1cInBhZ2VTaXplXCJcclxuICAgICAgICAgICAgW256UGFnaW5hdGlvblBvc2l0aW9uXT1cInBhZ2luYXRpb25Qb3NpdGlvblwiIFtuelNjcm9sbF09XCJzY3JvbGxcIiBbbnpGcm9udFBhZ2luYXRpb25dPVwiZnJvbnRQYWdpbmF0aW9uXCJcclxuICAgICAgICAgICAgW256VGVtcGxhdGVNb2RlXT1cInRlbXBsYXRlTW9kZVwiIFtuelNob3dQYWdpbmF0aW9uXT1cInNob3dQYWdpbmF0aW9uXCIgW256TG9hZGluZ109XCJsb2FkaW5nXCJcclxuICAgICAgICAgICAgW256U2hvd1NpemVDaGFuZ2VyXT1cInNob3dTaXplQ2hhbmdlclwiIFtuekhpZGVPblNpbmdsZVBhZ2VdPVwiaGlkZU9uU2luZ2xlUGFnZVwiIFtuelNob3dRdWlja0p1bXBlcl09XCJzaG93UXVpY2tKdW1wZXJcIlxyXG4gICAgICAgICAgICBbbnpTaW1wbGVdPVwic2ltcGxlXCIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZXhwYW5kYWJsZV09XCJleHBhbmRhYmxlXCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc2Nyb2xsYWJsZS14XT1cInNjcm9sbC54ISFcIiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1zY3JvbGxhYmxlLXldPVwic2Nyb2xsLnkhIVwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVtcHR5LXRhYmxlXT1cIiFkYXRhLmxlbmd0aFwiPlxyXG4gICAgPHRoZWFkICpuZ0lmPVwiIWRhdGFUYWJsZVwiPlxyXG4gICAgICA8dHIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaGVhZGVyLWxvZ3NdPVwibG9nc1wiPlxyXG5cclxuICAgICAgICA8dGggKm5nSWY9XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXQgJiYgY29uZmlnICYmIGNvbmZpZy5maWVsZHMgJiYgY29uZmlnLmZpZWxkcy5sZW5ndGhcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICAgbnpXaWR0aD1cIjQwcHhcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCIgW3N0eWxlLm1heFdpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ3NtYXJ0VGFibGUnKVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctYWRkIGNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtYWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1hZGQtaWNvbiBpY29uVUlMYXJnZS1OZXdcIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtYWRkLXJvdy1pY29uLXZpc2libGVdPVwiIWdyaWRDb21wb25lbnQuZGF0YS5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgKGNsaWNrKT1cImFkZFJvdygtMSlcIj48L2k+XHJcbiAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgPHRoIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoXT1cImxvZ3NcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3NcIlxyXG4gICAgICAgICAgICAqbmdJZj1cImRyYWdnYWJsZVwiXHJcbiAgICAgICAgICAgIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2RyYWdnYWJsZScpXCJcclxuICAgICAgICAgICAgbnpXaWR0aD1cIjQwcHhcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICAgKm5nSWY9XCJjaGVja2JveFNlbGVjdFwiXHJcbiAgICAgICAgICAgIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2NoZWNrYm94U2VsZWN0JylcIlxyXG4gICAgICAgICAgICBueldpZHRoPVwiMzBweFwiXHJcbiAgICAgICAgICAgIG56TGVmdD1cIjBweFwiXHJcbiAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInMzBweCdcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiJzMwcHgnXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJzZWxlY3RlZFwiIFtpbmRldGVybWluYXRlXT1cImlzSW5kZXRlcm1pbmF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPW9uQ2hlY2tib3hBbGxDaGFuZ2UoJGV2ZW50KT48L2xhYmVsPlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBmaVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaWVsZC5jdXN0b21GaWx0ZXI7IGVsc2UgdGhXaXRoRmlsdGVyc1wiPlxyXG4gICAgICAgICAgICA8dGggW256U2hvd1NvcnRdPVwiZmllbGQuc2hvd1NvcnRcIlxyXG4gICAgICAgICAgICAgICAgW256U2hvd0ZpbHRlcl09XCJmaWVsZC5zaG93RmlsdGVyXCJcclxuICAgICAgICAgICAgICAgIFtuekZpbHRlcnNdPVwiZmllbGQuZmlsdGVycyEhID8gZmllbGQuZmlsdGVycyA6IFtdXCJcclxuICAgICAgICAgICAgICAgIFtuekZpbHRlck11bHRpcGxlXT1cImZpZWxkLmZpbHRlck11bHRpcGxlXCJcclxuICAgICAgICAgICAgICAgIChuekZpbHRlckNoYW5nZSk9XCJmaWx0ZXIoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSlcIlxyXG4gICAgICAgICAgICAgICAgYXR0ci5pZD1cInt7Z3JpZElEfX0tY29sdW1uLXt7Zml9fVwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJnZXRDbGFzc01hcChmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgWyhuelNvcnQpXT1cImZpZWxkLnNob3dTb3J0ID8gZmllbGQuc29ydE9yZGVyIDogZGVmYXVsdFNvcnRPcmRlclwiXHJcbiAgICAgICAgICAgICAgICAobnpTb3J0T3JkZXJDaGFuZ2UpPVwic29ydCgkZXZlbnQsIGZpZWxkLnByb3BlcnR5KVwiXHJcbiAgICAgICAgICAgICAgICBbbnpXaWR0aF09XCJmaWVsZC53aWR0aFwiXHJcbiAgICAgICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiZmllbGQubWluV2lkdGggPyBmaWVsZC5taW5XaWR0aCA6IGZpZWxkLndpZHRoXCJcclxuICAgICAgICAgICAgICAgIFtuekxlZnRdPVwiZmllbGQubGVmdCA/IGZpZWxkLmxlZnQgOiBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICBbbnpSaWdodF09XCJmaWVsZC5yaWdodCA/IGZpZWxkLnJpZ2h0IDogZmFsc2VcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWZpZWxkLnRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5tYXhXaWR0aF09XCJnZXRIZWFkZXJNYXhXaWR0aChmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsLWhlYWRlcl09XCIhd3JhcExpbmVzXCI+e3tmaWVsZC5kaXNwbGF5fX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8ZGl2IFtpZF09XCJncmlkSUQgKyAnY29sdW1uJyArIGZpXCIgKm5nSWY9XCJmaWVsZC50ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJmaWVsZC50ZW1wbGF0ZS5yZWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiZmllbGQudGVtcGxhdGUuY29udGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjdGhXaXRoRmlsdGVycz5cclxuICAgICAgICAgICAgPHRoIFtuelNob3dTb3J0XT1cImZpZWxkLnNob3dTb3J0XCJcclxuICAgICAgICAgICAgICAgIG56Q3VzdG9tRmlsdGVyXHJcbiAgICAgICAgICAgICAgICBhdHRyLmlkPVwie3tncmlkSUR9fS1jb2x1bW4te3tmaX19XCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImdldENsYXNzTWFwKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICBbKG56U29ydCldPVwiZmllbGQuc2hvd1NvcnQgPyBmaWVsZC5zb3J0T3JkZXIgOiBkZWZhdWx0U29ydE9yZGVyXCIgKG56U29ydENoYW5nZSk9XCJzb3J0KCRldmVudCwgZmllbGQucHJvcGVydHkpXCJcclxuICAgICAgICAgICAgICAgIFtueldpZHRoXT1cImZpZWxkLndpZHRoXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCJmaWVsZC5taW5XaWR0aCA/IGZpZWxkLm1pbldpZHRoIDogZmllbGQud2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgW256TGVmdF09XCJmaWVsZC5sZWZ0ID8gZmllbGQubGVmdCA6IGZhbHNlIFwiXHJcbiAgICAgICAgICAgICAgICBbbnpSaWdodF09XCJmaWVsZC5yaWdodCA/IGZpZWxkLnJpZ2h0IDogZmFsc2VcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWZpZWxkLnRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5tYXhXaWR0aF09XCJnZXRIZWFkZXJNYXhXaWR0aChmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsLWhlYWRlcl09XCIhd3JhcExpbmVzXCI+e3tmaWVsZC5kaXNwbGF5fX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8ZGl2IFtpZF09XCJncmlkSUQgKyAnY29sdW1uJyArIGZpXCIgKm5nSWY9XCJmaWVsZC50ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJmaWVsZC50ZW1wbGF0ZS5yZWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiZmllbGQudGVtcGxhdGUuY29udGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPG56LWRyb3Bkb3duIG56VHJpZ2dlcj1cImNsaWNrXCIgbnpQbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIFtuekNsaWNrSGlkZV09XCJmYWxzZVwiIG56VGFibGVGaWx0ZXIgI2Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgPGkgbnotaWNvblxyXG4gICAgICAgICAgICAgICAgICAgbnpUeXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgIFtjbGFzcy5hbnQtdGFibGUtZmlsdGVyLW9wZW5dPVwiZHJvcGRvd24ubnpWaXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgIG56LWRyb3Bkb3duPjwvaT5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZmllbGQuY3VzdG9tRmlsdGVyLnJlZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJmaWVsZC5jdXN0b21GaWx0ZXIuY29udGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uei1kcm9wZG93bj5cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG5cclxuICAgICAgICA8dGggKm5nSWY9XCJzaG93UmF0ZVwiPjwvdGg+XHJcblxyXG4gICAgICAgIDx0aCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICAgW256V2lkdGhdPVwiYWN0aW9uQ29sdW1uV2lkdGhcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiYWN0aW9uQ29sdW1uV2lkdGhcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiYWN0aW9uQ29sdW1uV2lkdGhcIlxyXG4gICAgICAgICAgICBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdleHRyYScpXCJcclxuICAgICAgICAgICAgKm5nSWY9XCJleHRyYVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtZXh0cmFcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImV4dHJhXCI+e3sgZXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgIDx0aCAqbmdJZj1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgIG56V2lkdGg9XCI0MHB4XCJcclxuICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdzbWFydFRhYmxlJylcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aF09XCJsb2dzXCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1kZWxldGVcIj5cclxuICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICA8dGggW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGhdPVwibG9nc1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9nc1wiICpuZ0lmPVwiY2VudGVyVGFibGVcIj48L3RoPlxyXG5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGhlYWQ+XHJcbiAgICA8dGJvZHkgY2RrRHJvcExpc3RcclxuICAgICAgICAgICAqbmdJZj1cIiF2aXJ0dWFsU2Nyb2xsXCJcclxuICAgICAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGNvbmZpZy5maWVsZHMgJiYgY29uZmlnLmZpZWxkcy5sZW5ndGhcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZXhwYW5kYWJsZTsgZWxzZSBkZWZhdWx0VHBsO1wiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBncmlkQ29tcG9uZW50LmRhdGE7IGluZGV4IGFzIGRpXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbWFwT2ZFeHBhbmRlZERhdGFbZGF0YVtmaWVsZElEXV1cIj5cclxuICAgICAgICAgICAgICA8dHIgKm5nSWY9XCIoaXRlbS5wYXJlbnQgJiYgaXRlbS5wYXJlbnQuZXhwYW5kKSB8fCAhaXRlbS5wYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1leHBhbmRhYmxlLXJvd109XCJpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaGVhZGVyLWxvZ3NdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGVkLXJvd109XCJjaGVja2JveFNlbGVjdCA/IGdldE5vZGUoaXRlbVtmaWVsZElEXSkuc2VsZWN0ZWQgOiBzZWxlY3Rpb24uaXNTZWxlY3RlZChpdGVtW2ZpZWxkSURdKVwiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RUcmVlU2luZ2xlKGl0ZW0pXCJcclxuICAgICAgICAgICAgICAgICAgKHRvdWNoc3RhcnQpPVwidGFwSGFuZGxlcigkZXZlbnQsIGl0ZW0pXCJcclxuICAgICAgICAgICAgICAgICAgKGRibGNsaWNrKT1cImRibENsaWNrUm93KGl0ZW0pXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiY2hlY2tib3hTZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2NoZWNrYm94U2VsZWN0JylcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCInMzBweCdcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInMzBweCdcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCInMzBweCdcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNtYWNzLWNoZWNrYm94IFsobmdNb2RlbCldPVwiZ2V0Tm9kZShpdGVtW2ZpZWxkSURdKS5zZWxlY3RlZFwiIFtpbmRldGVybWluYXRlXT1cImdldE5vZGUoaXRlbVtmaWVsZElEXSkuc2VsZWN0ZWQgPT09IC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIChjaGVja2VkQ2hhbmdlKT1cIm9uQ2hlY2tib3hUcmVlQ2hhbmdlKCRldmVudCwgaXRlbSwgbWFwT2ZFeHBhbmRlZERhdGFbZGF0YVtmaWVsZElEXV0pXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBnZXRGaWVsZHMoKTsgaW5kZXggYXMgaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiZ2V0Q3VzdG9tQ2xhc3MoZmllbGQpXCJcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtZWRpdGFibGUtY29sdW1uXT1cImZpZWxkLmVkaXRhYmxlXCIgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXQtZXhwYW5kYWJsZV09XCIoKGVkaXRJZCA9PT0gaXRlbVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc051bWJlcihmaWVsZCkgJiYgZmllbGQuZWRpdGFibGUpXCJcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgISFpdGVtLmNoaWxkcmVuXCJcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1leHBhbmRhYmxlLXRkXT1cIiFpXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUucGFkZGluZ0xlZnQucHhdPVwiZ2V0Q3VzdG9tUGFkZGluZyhpdGVtLCBpKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW256U2hvd0V4cGFuZF09XCJpdGVtLmNoaWxkcmVuICYmICFpXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG56RXhwYW5kKV09XCJpdGVtLmV4cGFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW256TGVmdF09XCJmaWVsZC5sZWZ0ID8gZmllbGQubGVmdCA6IGZhbHNlXCIgW256UmlnaHRdPVwiZmllbGQucmlnaHQgPyBmaWVsZC5yaWdodCA6IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAobnpFeHBhbmRDaGFuZ2UpPVwiRXhwYW5kQ29sbGFwc2UobWFwT2ZFeHBhbmRlZERhdGFbZGF0YVtmaWVsZElEXV0sIGl0ZW0sICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCJmaWVsZC53aWR0aFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBbc3R5bGUuZGlzcGxheV09XCIoaXNOdW1iZXIoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkpID8gJ2Jsb2NrJyA6ICdpbmxpbmUtZmxleCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGwtY29udGFpbmVyLWxvZ3NdPVwiZXhwYW5kYWJsZSAmJiBpc1N0cmluZyhmaWVsZCkgJiYgIWlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJpdGVtLmNoaWxkcmVuICYmICFpID8gJ2NhbGMoMTAwJSAtIDI1cHgpJyA6ICcxMDAlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIoZWRpdElkICE9PSBpdGVtW2NvbmZpZy5maWVsZElkXSB8fCBwcm9wZXJ0eSAhPT0gZmllbGQucHJvcGVydHkgfHwgZmllbGQuZWRpdGFibGUgPT09IGZhbHNlIClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidmlld01vZGVUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogaXRlbSwgaTogZGksIGl0ZW06IGl0ZW0sIGNpOiBpfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgW3N0eWxlLmRpc3BsYXldPVwiaXNOdW1iZXIoZmllbGQpID8gJ2Jsb2NrJyA6ICdpbmxpbmUtZmxleCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJpdGVtLmNoaWxkcmVuICYmICFpID8gJ2NhbGMoMTAwJSAtIDI1cHgpJyA6ICcxMDAlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJlZGl0SWQgPT09IGl0ZW1bY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiAoZmllbGQuZWRpdGFibGUgfHwgZmllbGQuZWRpdGFibGUgPT09IHVuZGVmaW5lZClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZWRpdFRwbDtjb250ZXh0OiB7ZmllbGQ6IGZpZWxkLCBkYXRhOiBpdGVtLCBpOiBkaX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy1oZWFkZXItdGgtZm9udF09XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXJhdGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93UmF0ZSAmJiBjb25maWdcIj5cclxuICAgICAgICAgICAgICAgICAgPG56LXJhdGUgW25nTW9kZWxdPVwiZGF0YVtjb25maWcuZmllbGRSYXRlXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekNvdW50XT0ncmF0ZUNvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpEaXNhYmxlZF09XCIhaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmF0ZUNoYW5nZSgkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmF0ZUNsaWNrKCRldmVudClcIj48L256LXJhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgISFpdGVtLmNoaWxkcmVuXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdleHRyYScpXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImV4dHJhXCI+PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJjZW50ZXJUYWJsZVwiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtdGRdPVwibG9nc1wiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1hbGlnbi10ZFwiPjwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRwbD5cclxuICAgICAgICAgIDx0ciBjZGtEcmFnIFtjZGtEcmFnRGlzYWJsZWRdPVwiIWRyYWdnYWJsZVwiICpuZ0Zvcj1cImxldCBkYXRhIG9mIGdyaWRDb21wb25lbnQuZGF0YTsgaW5kZXggYXMgaVwiXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrUm93KCRldmVudCwgZGF0YSlcIiAodG91Y2hzdGFydCk9XCJ0YXBIYW5kbGVyKCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5hbnQtdGFibGUtc2VsZWN0ZWQtcm93XT1cImlzUm93U2VsZWN0ZWQoZGF0YSlcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXRhYmxlLXJvd109XCJpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1yb3ddPVwic21hcnRUYWJsZSAmJiBpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAoY29udGV4dG1lbnUpPVwiY29udGV4dE1lbnUoJGV2ZW50LCBjb250ZXh0TWVudVRlbXBsYXRlKVwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1uby1zZWxlY3Rpb25cIj5cclxuXHJcbiAgICAgICAgICAgICAgPGNtYWNzLWRyb3Bkb3duLW1lbnUgI2NvbnRleHRNZW51VGVtcGxhdGU9XCJjbWFjc0Ryb3Bkb3duTWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZXh0bWVudVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGRyb3Bkb3duOiBkcm9wZG93biwgZGF0YTogZGF0YSB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1kcm9wZG93bi1tZW51PlxyXG5cclxuICAgICAgICAgICAgPHRkICpuZ0lmPVwic21hcnRUYWJsZSAmJiBpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtdGRdPVwibG9nc1wiXHJcbiAgICAgICAgICAgICAgICBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdzbWFydFRhYmxlJylcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1hZGRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWFkZC1pY29uIGljb25VSUxhcmdlLU5ld1wiXHJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFJvdyhpLCAkZXZlbnQpXCI+PC9pPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkICpuZ0lmPVwiZHJhZ2dhYmxlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWRyYWctY29sIGNtYWNzLWNvbXBhY3QtdGFibGUtZnN0LXRkXCJcclxuICAgICAgICAgICAgICAgIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2RyYWdnYWJsZScpXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtTW92ZSBjbWFjcy1jb21wYWN0LXRhYmxlLWRyYWctaGFuZGxlclwiIGNka0RyYWdIYW5kbGU+PC9pPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2NoZWNrYm94U2VsZWN0JylcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1mc3QtdGRdPVwiIWRyYWdnYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImNoZWNrYm94U2VsZWN0ICYmIGNvbmZpZ1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbWFjcy1jaGVja2JveCBbKG5nTW9kZWwpXT1cImNoZWNrYm94Q2FjaGVbZ2V0SW5kZXgoZGF0YVtjb25maWcuZmllbGRJZF0pXS5zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIChjaGVja2VkQ2hhbmdlKT1cIm9uQ2hlY2tib3hDaGFuZ2UoJGV2ZW50LCBkYXRhKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YVtjb25maWcuZmllbGRJZF0gJiYgY2hlY2tib3hDYWNoZVtnZXRJbmRleChkYXRhW2NvbmZpZy5maWVsZElkXSldXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZ2V0RmllbGRzKCk7IGluZGV4IGFzIGpcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiZ2V0Q3VzdG9tQ2xhc3MoZmllbGQpXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1lZGl0YWJsZS1jb2x1bW5dPVwiZmllbGQuZWRpdGFibGVcIiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWZzdC10ZF09XCIhZHJhZ2dhYmxlICYmICFjaGVja2JveFNlbGVjdCAmJiAhalwiXHJcbiAgICAgICAgICAgICAgICBbbnpMZWZ0XT1cImZpZWxkLmxlZnQgPyBmaWVsZC5sZWZ0IDogZmFsc2VcIiBbbnpSaWdodF09XCJmaWVsZC5yaWdodCA/IGZpZWxkLnJpZ2h0IDogZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cImZpZWxkLndpZHRoXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6IDk4JVwiXHJcbiAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZyAmJiAoZWRpdElkICE9PSBkYXRhW2NvbmZpZy5maWVsZElkXSB8fCBwcm9wZXJ0eSAhPT0gZmllbGQucHJvcGVydHkgfHwgZmllbGQuZWRpdGFibGUgPT09IGZhbHNlKVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInZpZXdNb2RlVHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGRhdGEsIGk6IGksIGNpOiBqfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiA5OCVcIlxyXG4gICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjb25maWcgJiYgZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgKGZpZWxkLmVkaXRhYmxlIHx8IGZpZWxkLmVkaXRhYmxlID09PSB1bmRlZmluZWQpXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZWRpdFRwbDtjb250ZXh0OiB7ZmllbGQ6IGZpZWxkLCBkYXRhOiBkYXRhLCBpOiBpfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdJZj1cInNob3dSYXRlICYmIGNvbmZpZ1wiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIj5cclxuICAgICAgICAgICAgICA8bnotcmF0ZSBbbmdNb2RlbF09XCJkYXRhW2NvbmZpZy5maWVsZFJhdGVdXCIgW256Q291bnRdPSdyYXRlQ291bnQnIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmF0ZUNoYW5nZSgkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25SYXRlQ2xpY2soJGV2ZW50KVwiPjwvbnotcmF0ZT5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdJZj1cImV4dHJhXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiIFtuelJpZ2h0XT1cImdldFN0aWNreVdpZHRoUmlnaHQoJ2V4dHJhJylcIj48L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkICpuZ0lmPVwic21hcnRUYWJsZSAmJiBpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgICAgW256UmlnaHRdPVwiZ2V0U3RpY2t5V2lkdGhSaWdodCgnc21hcnRUYWJsZScpXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLXRkXT1cImxvZ3NcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1kZWxldGVcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWRlbGV0ZS1pY29uIGljb25VSVNtYWxsLUNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGEuZGVsZXRlRW5hYmxlZCA9PT0gdW5kZWZpbmVkIHx8IGRhdGEuZGVsZXRlRW5hYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImRlbGV0ZVJvdyhpLCAkZXZlbnQpXCI+PC9pPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIiAqbmdJZj1cImNlbnRlclRhYmxlXCIgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy10ZF09XCJsb2dzXCIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWFsaWduLXRkXCI+PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPC90Ym9keT5cclxuXHJcbiAgICA8dGJvZHkgY2RrRHJvcExpc3RcclxuICAgICAgICAgICAqbmdJZj1cInZpcnR1YWxTY3JvbGxcIlxyXG4gICAgICAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBuei12aXJ0dWFsLXNjcm9sbCBsZXQtZGF0YSBsZXQtZGk9XCJpXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBjb25maWcuZmllbGRzICYmIGNvbmZpZy5maWVsZHMubGVuZ3RoXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZXhwYW5kYWJsZTsgZWxzZSBkZWZhdWx0VHBsVmlydHVhbFNjcm9sbDtcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBtYXBPZkV4cGFuZGVkRGF0YVtkYXRhW2ZpZWxkSURdXVwiPlxyXG4gICAgICAgICAgICAgIDx0ciAqbmdJZj1cIihpdGVtLnBhcmVudCAmJiBpdGVtLnBhcmVudC5leHBhbmQpIHx8ICFpdGVtLnBhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWV4cGFuZGFibGUtcm93XT1cImluTGluZUVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1oZWFkZXItbG9nc109XCJsb2dzICYmICEhaXRlbS5jaGlsZHJlblwiXHJcbiAgICAgICAgICAgICAgICAgICh0b3VjaHN0YXJ0KT1cInRhcEhhbmRsZXIoJGV2ZW50LCBpdGVtKVwiXHJcbiAgICAgICAgICAgICAgICAgIChkYmxjbGljayk9XCJkYmxDbGlja1JvdyhpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiY2hlY2tib3hTZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2NoZWNrYm94U2VsZWN0JylcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCInMzBweCdcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInMzBweCdcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCInMzBweCdcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNtYWNzLWNoZWNrYm94IFsobmdNb2RlbCldPVwiZ2V0Tm9kZShpdGVtW2ZpZWxkSURdKS5zZWxlY3RlZFwiIFtpbmRldGVybWluYXRlXT1cImdldE5vZGUoaXRlbVtmaWVsZElEXSkuc2VsZWN0ZWQgPT09IC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIChjaGVja2VkQ2hhbmdlKT1cIm9uQ2hlY2tib3hUcmVlQ2hhbmdlKCRldmVudCwgaXRlbSwgbWFwT2ZFeHBhbmRlZERhdGFbZGF0YVtmaWVsZElEXV0pXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBnZXRGaWVsZHMoKTsgaW5kZXggYXMgaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWVkaXRhYmxlLWNvbHVtbl09XCJmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1leHBhbmRhYmxlXT1cIigoZWRpdElkID09PSBpdGVtW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgZmllbGQuZWRpdGFibGUpKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpIHx8IGlzTnVtYmVyKGZpZWxkKSAmJiBmaWVsZC5lZGl0YWJsZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiAhIWl0ZW0uY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWV4cGFuZGFibGUtdGRdPVwiIWlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS5wYWRkaW5nTGVmdC5weF09XCJnZXRDdXN0b21QYWRkaW5nKGl0ZW0sIGkpXCJcclxuICAgICAgICAgICAgICAgICAgICBbbnpTaG93RXhwYW5kXT1cIiEhaXRlbS5jaGlsZHJlbiAmJiAhaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuekV4cGFuZCldPVwiaXRlbS5leHBhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuekxlZnRdPVwiZmllbGQubGVmdCA/IGZpZWxkLmxlZnQgOiBmYWxzZVwiIFtuelJpZ2h0XT1cImZpZWxkLnJpZ2h0ID8gZmllbGQucmlnaHQgOiBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKG56RXhwYW5kQ2hhbmdlKT1cIkV4cGFuZENvbGxhcHNlKG1hcE9mRXhwYW5kZWREYXRhW2RhdGFbZmllbGRJRF1dLCBpdGVtLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiZmllbGQud2lkdGhcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgW3N0eWxlLmRpc3BsYXldPVwiKGlzTnVtYmVyKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzRGF0ZShmaWVsZCkgfHwgaXNTZWxlY3QoZmllbGQpKSA/ICdibG9jaycgOiAnaW5saW5lLWZsZXgnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsLWNvbnRhaW5lci1sb2dzXT1cImV4cGFuZGFibGUgJiYgaXNTdHJpbmcoZmllbGQpICYmICFpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiaXRlbS5jaGlsZHJlbiAmJiAhaSA/ICdjYWxjKDEwMCUgLSAyNXB4KScgOiAnMTAwJSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiKGVkaXRJZCAhPT0gaXRlbVtjb25maWcuZmllbGRJZF0gfHwgcHJvcGVydHkgIT09IGZpZWxkLnByb3BlcnR5IHx8IGZpZWxkLmVkaXRhYmxlID09PSBmYWxzZSApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInZpZXdNb2RlVHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGl0ZW0sIGk6IGRpLCBpdGVtOiBpdGVtLCBjaTogaX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5kaXNwbGF5XT1cImlzTnVtYmVyKGZpZWxkKSA/ICdibG9jaycgOiAnaW5saW5lLWZsZXgnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiaXRlbS5jaGlsZHJlbiAmJiAhaSA/ICdjYWxjKDEwMCUgLSAyNXB4KScgOiAnMTAwJSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZWRpdElkID09PSBpdGVtW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgKGZpZWxkLmVkaXRhYmxlIHx8IGZpZWxkLmVkaXRhYmxlID09PSB1bmRlZmluZWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImVkaXRUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogaXRlbSwgaTogZGl9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRdPVwibG9ncyAmJiBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtcmF0aW5nXCIgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93UmF0ZSAmJiBjb25maWdcIj5cclxuICAgICAgICAgICAgICAgICAgPG56LXJhdGUgW25nTW9kZWxdPVwiZGF0YVtjb25maWcuZmllbGRSYXRlXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekNvdW50XT0ncmF0ZUNvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpEaXNhYmxlZF09XCIhaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmF0ZUNoYW5nZSgkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmF0ZUNsaWNrKCRldmVudClcIj48L256LXJhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250XT1cImxvZ3MgJiYgaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW256UmlnaHRdPVwiZ2V0U3RpY2t5V2lkdGhSaWdodCgnZXh0cmEnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJleHRyYVwiPjwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRwbFZpcnR1YWxTY3JvbGw+XHJcbiAgICAgICAgICAgIDx0ciBjZGtEcmFnIFtjZGtEcmFnRGlzYWJsZWRdPVwiIWRyYWdnYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tSb3coJGV2ZW50LCBkYXRhKVwiICh0b3VjaHN0YXJ0KT1cInRhcEhhbmRsZXIoJGV2ZW50LCBkYXRhKVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGVkLXJvd109XCJpc1Jvd1NlbGVjdGVkKGRhdGEpXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXRhYmxlLXJvd109XCJpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLXJvd109XCJzbWFydFRhYmxlICYmIGluTGluZUVkaXRcIlxyXG4gICAgICAgICAgICAgICAgKGNvbnRleHRtZW51KT1cImNvbnRleHRNZW51KCRldmVudCwgY29udGV4dE1lbnVUZW1wbGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1uby1zZWxlY3Rpb25cIj5cclxuXHJcbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjb250ZXh0TWVudVRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZXh0bWVudVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGRyb3Bkb3duOiBkcm9wZG93biwgZGF0YTogZGF0YSB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0lmPVwic21hcnRUYWJsZSAmJiBpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9ncy10ZF09XCJsb2dzXCJcclxuICAgICAgICAgICAgICAgICAgW256TGVmdF09XCJnZXRTdGlja3lXaWR0aCgnc21hcnRUYWJsZScpXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNtYXJ0LXRhYmxlLWhvdC1zcG90LXJvdy1hZGRcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctYWRkLWljb24gaWNvblVJTGFyZ2UtTmV3XCJcclxuICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRSb3coZGksICRldmVudClcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiZHJhZ2dhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiA3cHggMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1kcmFnLWNvbCBjbWFjcy1jb21wYWN0LXRhYmxlLWZzdC10ZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtuekxlZnRdPVwiZ2V0U3RpY2t5V2lkdGgoJ2RyYWdnYWJsZScpXCJcclxuICAgICAgICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCInNDBweCdcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtTW92ZSBjbWFjcy1jb21wYWN0LXRhYmxlLWRyYWctaGFuZGxlclwiIGNka0RyYWdIYW5kbGU+PC9pPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgIDx0ZCBbbnpMZWZ0XT1cImdldFN0aWNreVdpZHRoKCdjaGVja2JveFNlbGVjdCcpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZnN0LXRkXT1cIiFkcmFnZ2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGVja2JveFNlbGVjdCAmJiBjb25maWdcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbWFjcy1jaGVja2JveCBbKG5nTW9kZWwpXT1cImNoZWNrYm94Q2FjaGVbZ2V0SW5kZXgoZGF0YVtjb25maWcuZmllbGRJZF0pXS5zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPVwib25DaGVja2JveENoYW5nZSgkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGFbY29uZmlnLmZpZWxkSWRdICYmIGNoZWNrYm94Q2FjaGVbZ2V0SW5kZXgoZGF0YVtjb25maWcuZmllbGRJZF0pXVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBnZXRGaWVsZHMoKTsgaW5kZXggYXMgalwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1lZGl0YWJsZS1jb2x1bW5dPVwiZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1mc3QtdGRdPVwiIWRyYWdnYWJsZSAmJiAhY2hlY2tib3hTZWxlY3QgJiYgIWpcIlxyXG4gICAgICAgICAgICAgICAgICBbbnpMZWZ0XT1cImZpZWxkLmxlZnQgPyBmaWVsZC5sZWZ0IDogZmFsc2VcIiBbbnpSaWdodF09XCJmaWVsZC5yaWdodCA/IGZpZWxkLnJpZ2h0IDogZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiZmllbGQud2lkdGhcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiA5OCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZyAmJiAoZWRpdElkICE9PSBkYXRhW2NvbmZpZy5maWVsZElkXSB8fCBwcm9wZXJ0eSAhPT0gZmllbGQucHJvcGVydHkgfHwgZmllbGQuZWRpdGFibGUgPT09IGZhbHNlKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidmlld01vZGVUcGw7Y29udGV4dDoge2ZpZWxkOiBmaWVsZCwgZGF0YTogZGF0YSwgaTogZGksIGNpOiBqfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1heC13aWR0aDogOTglXCJcclxuICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjb25maWcgJiYgZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBwcm9wZXJ0eSA9PT0gZmllbGQucHJvcGVydHkgJiYgKGZpZWxkLmVkaXRhYmxlIHx8IGZpZWxkLmVkaXRhYmxlID09PSB1bmRlZmluZWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJlZGl0VHBsO2NvbnRleHQ6IHtmaWVsZDogZmllbGQsIGRhdGE6IGRhdGEsIGk6IGRpfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgIDx0ZCAqbmdJZj1cInNob3dSYXRlICYmIGNvbmZpZ1wiIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIj5cclxuICAgICAgICAgICAgICAgIDxuei1yYXRlIFtuZ01vZGVsXT1cImRhdGFbY29uZmlnLmZpZWxkUmF0ZV1cIiBbbnpDb3VudF09J3JhdGVDb3VudCcgKG5nTW9kZWxDaGFuZ2UpPVwib25SYXRlQ2hhbmdlKCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmF0ZUNsaWNrKCRldmVudClcIj48L256LXJhdGU+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiZXh0cmFcIiBzdHlsZT1cInBhZGRpbmc6IDdweCAxMHB4XCIgW256UmlnaHRdPVwiZ2V0U3RpY2t5V2lkdGhSaWdodCgnZXh0cmEnKVwiPjwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgIDx0ZCAqbmdJZj1cInNtYXJ0VGFibGUgJiYgaW5MaW5lRWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogN3B4IDEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICBbbnpSaWdodF09XCJnZXRTdGlja3lXaWR0aFJpZ2h0KCdzbWFydFRhYmxlJylcIlxyXG4gICAgICAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtdGRdPVwibG9nc1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1zbWFydC10YWJsZS1ob3Qtc3BvdC1yb3ctZGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtc21hcnQtdGFibGUtaG90LXNwb3Qtcm93LWRlbGV0ZS1pY29uIGljb25VSVNtYWxsLUNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YS5kZWxldGVFbmFibGVkID09PSB1bmRlZmluZWQgfHwgZGF0YS5kZWxldGVFbmFibGVkXCJcclxuICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkZWxldGVSb3coZGksICRldmVudClcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+ICAgICBcclxuICAgIDwvdGJvZHk+XHJcbiAgPC9uei10YWJsZT5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2VkaXRUcGwgbGV0LWZpZWxkPVwiZmllbGRcIiBsZXQtZGF0YT1cImRhdGFcIiBsZXQtaT1cImlcIj5cclxuICA8IS0tRWRpdGFibGUgU3RyaW5nIEVkaXQgTW9kZS0tPlxyXG4gIDxpbnB1dCAjZmllbGRUeXBlSW5wdXRcclxuICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlucHV0XCJcclxuICAgICAgICAgKm5nSWY9XCJpc1N0cmluZyhmaWVsZClcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgICAgICAgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LW1vZGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCJcclxuICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLnBsYWNlaG9sZGVyID8gZmllbGQucGxhY2Vob2xkZXIgOiAnJ1wiXHJcbiAgICAgICAgIGNtYWNzLWlucHV0IFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAoa2V5dXApPVwiZW5kRWRpdE1vZGUoJGV2ZW50LCBpLCBkYXRhKVwiIC8+XHJcblxyXG4gIDwhLS1FZGl0YWJsZSBEYXRlUGlja2VyIEVkaXQgTW9kZS0tPlxyXG4gIDxjbWFjcy1kYXRlLXBpY2tlciAjZmllbGRUeXBlRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtZGF0ZS1lZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpc0RhdGUoZmllbGQpXCIgW2Zvcm1hdF09XCInTU0vZGQveXl5eSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbYWxsb3dDbGVhcl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtbW9kZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZW5kRWRpdE1vZGVOZ01vZGVsKGksIGRhdGEpXCI+XHJcbiAgPC9jbWFjcy1kYXRlLXBpY2tlcj5cclxuXHJcbiAgPCEtLUVkaXRhYmxlIERhdGVUaW1lUGlja2VyIEVkaXQgTW9kZS0tPlxyXG4gIDxjbWFjcy1kYXRldGltZS1waWNrZXIgI2ZpZWxkVHlwZURhdGVUaW1lUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImlzVGltZShmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWRhdGV0aW1lLXBpY2tlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbdXNlMTJIb3Vyc109XCJ1c2UxMkhvdXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVTZWNvbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LW1vZGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXRdPVwiZmllbGQudGltZUZvcm1hdCA/IGZpZWxkLnRpbWVGb3JtYXQgOiAnaDptbSBhJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbZGVmYXVsdE9wZW5WYWx1ZV09XCJkZWZhdWx0VGltZVZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwibmdNb2RlbENoYW5nZShpLCBkYXRhKVwiPlxyXG4gIDwvY21hY3MtZGF0ZXRpbWUtcGlja2VyPlxyXG5cclxuICA8IS0tRWRpdGFibGUgU2VsZWN0IEVkaXQgTW9kZS0tPlxyXG4gIDxjbWFjcy1zZWxlY3QgI2ZpZWxkVHlwZVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLXNlbGVjdC1jZWxsXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtbW9kZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpc1NlbGVjdChmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgW3BsYWNlSG9sZGVyXT1cImZpZWxkLnBsYWNlaG9sZGVyID8gZmllbGQucGxhY2Vob2xkZXIgOiAnJ1wiXHJcbiAgICAgICAgICAgICAgICBzaG93U2VhcmNoXHJcbiAgICAgICAgICAgICAgICBbbW9kZV09XCJmaWVsZC5tb2RlID8gZmllbGQubW9kZSA6ICdkZWZhdWx0J1wiXHJcbiAgICAgICAgICAgICAgICBbc2hvd0NtYWNzU2VhcmNoXT1cImZpZWxkLnNob3dDbWFjc1NlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImVuZEVkaXRNb2RlTmdNb2RlbChpLCBkYXRhLCBudWxsLCBmaWVsZClcIj5cclxuICAgIDxjbWFjcy1vcHRpb24gKm5nRm9yPVwibGV0IHNEYXRhIG9mIGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhXCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ7e3NEYXRhW2ZpZWxkLnNlbGVjdC5sYWJlbF19fVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzRGF0YVtmaWVsZC5zZWxlY3QudmFsdWVdfX1cIlxyXG4gICAgICAgICAgICAgICAgICBkaXZpZGVyPVwie3tzRGF0YVtmaWVsZC5zZWxlY3QuZGl2aWRlcl19fVwiXHJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJzRGF0YS5kaXNhYmxlZFwiPlxyXG4gICAgPC9jbWFjcy1vcHRpb24+XHJcbiAgPC9jbWFjcy1zZWxlY3Q+XHJcblxyXG4gIDwhLS1FZGl0YWJsZSBJbnB1TnVtYmVyIEVkaXQgTW9kZS0tPlxyXG4gIDxjbWFjcy1pbnB1dC1udW1iZXIgI2ZpZWxkVHlwZUlucHV0TnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5wdXQtbnVtYmVyLWVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImlzTnVtYmVyKGZpZWxkKSAmJiAhaXNTZWxlY3QoZmllbGQpICYmIGZpZWxkLnVzZUNvbW1hTWFya2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2NtYWNzU3RlcF09XCJmaWVsZC5jbWFjc1N0ZXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW21pbl09XCJmaWVsZC5taW4hIVwiIFttYXhdPVwiZmllbGQubWF4ISFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdHRlcl09XCJmb3JtYXR0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3BhcnNlcl09XCJwYXJzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSwgZGF0YSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwibmdNb2RlbENoYW5nZShpLCBkYXRhKVwiPlxyXG4gIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG5cclxuICA8Y21hY3MtaW5wdXQtbnVtYmVyICNmaWVsZFR5cGVJbnB1dE51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlucHV0LW51bWJlci1lZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWVkaXQtbW9kZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpc051bWJlcihmaWVsZCkgJiYgIWlzU2VsZWN0KGZpZWxkKSAmJiAhZmllbGQudXNlQ29tbWFNYXJrZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLnByb3BlcnR5XVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbY21hY3NTdGVwXT1cImZpZWxkLmNtYWNzU3RlcCA/IGZpZWxkLmNtYWNzU3RlcCA6IDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW21pbl09XCJmaWVsZC5taW4hIVwiIFttYXhdPVwiZmllbGQubWF4ISFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSwgZGF0YSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwibmdNb2RlbENoYW5nZShpLCBkYXRhKVwiPlxyXG4gIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG5cclxuICA8IS0tRWRpdGFibGUgQm9vbGVhbiBFZGl0IE1vZGUtLT5cclxuICA8bGFiZWwgI2ZpZWxkVHlwZUJvb2xcclxuICAgICAgICAgY21hY3MtY2hlY2tib3hcclxuICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1tb2RlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICAgICAgICpuZ0lmPVwiaXNCb29sZWFuKGZpZWxkKVwiXHJcbiAgICAgICAgIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJlbmRFZGl0TW9kZU5nTW9kZWwoaSwgZGF0YSlcIj5cclxuICA8L2xhYmVsPlxyXG5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjdmlld01vZGVUcGwgbGV0LWZpZWxkPVwiZmllbGRcIiBsZXQtZGF0YT1cImRhdGFcIiBsZXQtaT1cImlcIiBsZXQtaXRlbT1cIml0ZW1cIiBsZXQtY2k9XCJjaVwiPlxyXG4gIDxuZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLUVkaXRhYmxlIFN0cmluZyBWaWV3IE1vZGUtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgaXNTdHJpbmcoZmllbGQpXCI+XHJcbiAgICAgIDxkaXYgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhW2NvbmZpZy5maWVsZElkXSwgZmllbGQucHJvcGVydHksICRldmVudClcIlxyXG4gICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LW5vLXBhZGRpbmddPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzTnVtYmVyKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTdHJpbmcoZmllbGQpKVwiXHJcbiAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogOTglOyBtYXgtd2lkdGg6IDk4JTsgcGFkZGluZzogN3B4IDEwcHhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1pbmxpbmUtY2VsbFwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIlxyXG4gICAgICAgICAgICAgKm5nSWY9XCIhZmllbGQuc2hvd1Rvb2x0aXAgfHwgIWRhdGFbZmllbGQucHJvcGVydHldIHx8ICFkYXRhW2ZpZWxkLnByb3BlcnR5XS5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKGZpZWxkLCBpdGVtLCBpKVwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIj5cclxuICAgICAgICAgIHt7IGRhdGFbZmllbGQucHJvcGVydHldICYmIGRhdGFbZmllbGQucHJvcGVydHldLmxlbmd0aCA/IGRhdGFbZmllbGQucHJvcGVydHldIDogZmllbGQucGxhY2Vob2xkZXIgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1pbmxpbmUtY2VsbFwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIlxyXG4gICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5zaG93VG9vbHRpcCAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XSAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XS5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKGZpZWxkLCBpdGVtLCBpKVwiXHJcbiAgICAgICAgICAgICBjbWFjcy10b29sdGlwXHJcbiAgICAgICAgICAgICBbdGl0bGVdPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCI+XHJcbiAgICAgICAgICB7eyBkYXRhW2ZpZWxkLnByb3BlcnR5XSB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpICpuZ0lmPVwiZmllbGQuZWRpdGFibGUgfHwgZmllbGQuZWRpdGFibGUgPT09IHVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgY2xhc3M9XCJpY29uVUlTbWFsbC1FZGl0XCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1lZGl0LWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtZWRpdC1pY29uLXZpZXddPVwiIWluTGluZUVkaXQgfHwgIWZpZWxkLmVkaXRhYmxlXCI+XHJcbiAgICAgICAgPC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS1FZGl0YWJsZSBEYXRlUGlja2VyIFZpZXcgTW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBpc0RhdGUoZmllbGQpXCI+XHJcbiAgICAgIDxkaXYgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhW2NvbmZpZy5maWVsZElkXSwgZmllbGQucHJvcGVydHksICRldmVudClcIlxyXG4gICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LW5vLXBhZGRpbmddPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzTnVtYmVyKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTdHJpbmcoZmllbGQpKVwiXHJcbiAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogOTglOyBtYXgtd2lkdGg6IDk4JTsgcGFkZGluZzogN3B4IDEwcHhcIj5cclxuICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoZmllbGQsIGl0ZW0sIGkpXCJcclxuICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiXHJcbiAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5saW5lLWNlbGwgY21hY3MtY29tcGFjdC10YWJsZS1kYXRlXCI+e3sgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPyB0cmFuc2Zvcm1EYXRlKGRhdGFbZmllbGQucHJvcGVydHldKSA6IGZpZWxkLnBsYWNlaG9sZGVyIH19PC9kaXY+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uVUlMYXJnZS1DYWxlbmRhclwiXHJcbiAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtY2FsZW5kYXItaWNvbl09XCJpbkxpbmVFZGl0ICYmIGZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1jYWxlbmRhci1pY29uLXZpZXddPVwiIWluTGluZUVkaXQgfHwgIWZpZWxkLmVkaXRhYmxlXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS1FZGl0YWJsZSBEYXRlVGltZVBpY2tlciBWaWV3IE1vZGUtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgaXNUaW1lKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2IChjbGljayk9XCJzdGFydEVkaXQoZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLnByb3BlcnR5LCAkZXZlbnQpXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSlcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIlxyXG4gICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKGZpZWxkLCBpdGVtLCBpKVwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIlxyXG4gICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWlubGluZS1jZWxsIGNtYWNzLWNvbXBhY3QtdGFibGUtZGF0ZVwiPnt7IGRhdGFbZmllbGQucHJvcGVydHldID8gKCBkYXRhW2ZpZWxkLnByb3BlcnR5XSAgfCBkYXRlOiBmaWVsZC50aW1lRm9ybWF0ID8gZmllbGQudGltZUZvcm1hdCA6ICdoOm1tIGEnKSA6IGZpZWxkLnBsYWNlaG9sZGVyIH19PC9kaXY+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uVUlMYXJnZS1UaW1lXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1jYWxlbmRhci1pY29uXT1cImluTGluZUVkaXQgJiYgZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWNhbGVuZGFyLWljb24tdmlld109XCIhaW5MaW5lRWRpdCB8fCAhZmllbGQuZWRpdGFibGVcIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLUVkaXRhYmxlIFNlbGVjdCBWaWV3IE1vZGUtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgaXNTZWxlY3QoZmllbGQpXCI+XHJcbiAgICAgIDxkaXYgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhW2NvbmZpZy5maWVsZElkXSwgZmllbGQucHJvcGVydHksICRldmVudClcIlxyXG4gICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LW5vLXBhZGRpbmddPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzTnVtYmVyKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTdHJpbmcoZmllbGQpKVwiXHJcbiAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogOTglOyBtYXgtd2lkdGg6IDk4JTsgcGFkZGluZzogN3B4IDEwcHhcIj5cclxuICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoZmllbGQsIGl0ZW0sIGkpXCJcclxuICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiXHJcbiAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5saW5lLWNlbGwgY21hY3MtY29tcGFjdC10YWJsZS1zZWxlY3RcIj57eyBnZXRMYWJlbChkYXRhLCBmaWVsZCkgJiYgZ2V0TGFiZWwoZGF0YSwgZmllbGQpLmxlbmd0aCA/IGdldExhYmVsKGRhdGEsIGZpZWxkKSA6IGZpZWxkLnBsYWNlaG9sZGVyIH19PC9kaXY+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1DaGV2cm9uLURvd25cIlxyXG4gICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXNlbGVjdC1pY29uXT1cImluTGluZUVkaXQgJiYgZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLXNlbGVjdC1pY29uLXZpZXddPVwiIWluTGluZUVkaXQgfHwgIWZpZWxkLmVkaXRhYmxlXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS1FZGl0YWJsZSBJbnB1dE51bWJlciBWaWV3IE1vZGUtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgaXNOdW1iZXIoZmllbGQpXCI+XHJcbiAgICAgIDxkaXYgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhW2NvbmZpZy5maWVsZElkXSwgZmllbGQucHJvcGVydHksICRldmVudClcIlxyXG4gICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0LW5vLXBhZGRpbmddPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzTnVtYmVyKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzVGltZShmaWVsZCkgfHwgaXNTdHJpbmcoZmllbGQpKVwiXHJcbiAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogOTglOyBtYXgtd2lkdGg6IDk4JTsgcGFkZGluZzogN3B4IDEwcHhcIj5cclxuICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoZmllbGQsIGl0ZW0sIGkpXCJcclxuICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiXHJcbiAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtaW5saW5lLWNlbGwgY21hY3MtY29tcGFjdC10YWJsZS1pbnB1dC1udW1iZXJcIj57eyBkYXRhW2ZpZWxkLnByb3BlcnR5XSAhPT0gdW5kZWZpbmVkID8gZmllbGQudXNlQ29tbWFNYXJrZXIgPyBkYXRhW2ZpZWxkLnByb3BlcnR5XS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnLCcpIDogZGF0YVtmaWVsZC5wcm9wZXJ0eV0gOiBmaWVsZC5wbGFjZWhvbGRlciB9fTwvZGl2PlxyXG4gICAgICAgIDxpIGNsYXNzPVwiaWNvbkFycm93TGFyZ2UtU29saWQtVXBEb3duXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnB1dC1udW1iZXItaWNvbl09XCJpbkxpbmVFZGl0ICYmIGZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnB1dC1udW1iZXItaWNvbi12aWV3XT1cIiFpbkxpbmVFZGl0IHx8ICFmaWVsZC5lZGl0YWJsZVwiPlxyXG4gICAgICAgIDwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tQm9vbGVhbiBWaWV3IE1vZGUtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgaXNCb29sZWFuKGZpZWxkKVwiPlxyXG4gICAgICA8ZGl2IFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLW9uLWVkaXRdPVwiKGVkaXRJZCA9PT0gZGF0YVtjb25maWcuZmllbGRJZF0gJiYgcHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5ICYmIGZpZWxkLmVkaXRhYmxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzU3RyaW5nKGZpZWxkKSB8fCBpc0RhdGUoZmllbGQpIHx8IGlzU2VsZWN0KGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpKVwiXHJcbiAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIlxyXG4gICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCI+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PSBmYWxzZSB8fCBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PSAnZmFsc2UnXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtYm9vbGVhbi1mYWxzZS1pY29uXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1pbnZhbGlkXT1cIiF2YWxpZGF0ZShkYXRhLCBmaWVsZClcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWJvb2xlYW4taWNvbl09XCJpbkxpbmVFZGl0ICYmIGZpZWxkLmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tCb29sZWFuQ2VsbChkYXRhLCBkYXRhW2NvbmZpZy5maWVsZElkXSwgZmllbGQsIGksICRldmVudClcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gdW5kZWZpbmVkIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSBudWxsXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtYm9vbGVhbi1pbmRldGVybWluYXRlLWljb25cIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWludmFsaWRdPVwiIXZhbGlkYXRlKGRhdGEsIGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtYm9vbGVhbi1pY29uXT1cImluTGluZUVkaXQgJiYgZmllbGQuZWRpdGFibGVcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJjbGlja0Jvb2xlYW5DZWxsKGRhdGEsIGRhdGFbY29uZmlnLmZpZWxkSWRdLCBmaWVsZCwgaSwgJGV2ZW50KVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWJvb2xlYW4taW5kZXRlcm1pbmF0ZS1pY29uLWlubmVyXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8aSAqbmdJZj1cImRhdGFbZmllbGQucHJvcGVydHldID09PSB0cnVlIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSAndHJ1ZSdcIlxyXG4gICAgICAgICAgIGNsYXNzPVwiaWNvblVJTGFyZ2UtU2VsZWN0LUFsbFwiXHJcbiAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtaW52YWxpZF09XCIhdmFsaWRhdGUoZGF0YSwgZmllbGQpXCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1ib29sZWFuLWljb25dPVwiaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZVwiXHJcbiAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrQm9vbGVhbkNlbGwoZGF0YSwgZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLCBpLCAkZXZlbnQpXCI+PC9pPlxyXG5cclxuICAgICAgPC9kaXY+ICAgICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS0gVGVtcGxhdGUgVmlldyBNb2RlICAtLT5cclxuICAgIDxuZy1jb250YWluZXIgI3RlbXBsYXRlUmVmQ2VsZCAqbmdJZj1cImlzQ2VsZFR5cGVUZW1wbGF0ZVJlZihmaWVsZCkgJiYgZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIj5cclxuICAgICAgPGRpdiBbaWRdPVwiZ3JpZElEICsgJ2NvbHVtbicgKyBjaSArICdyb3cnICsgaVwiIHN0eWxlPVwid2lkdGg6IDk4JTsgbWF4LXdpZHRoOiA5OCU7IHBhZGRpbmc6IDdweCAxMHB4XCJcclxuICAgICAgICAgICBbY2xhc3MuY21hY3MtY29tcGFjdC10YWJsZS1vbi1lZGl0XT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1NlbGVjdChmaWVsZCkgfHwgaXNUaW1lKGZpZWxkKSlcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtb24tZWRpdC1uby1wYWRkaW5nXT1cIihlZGl0SWQgPT09IGRhdGFbY29uZmlnLmZpZWxkSWRdICYmIHByb3BlcnR5ID09PSBmaWVsZC5wcm9wZXJ0eSAmJiBmaWVsZC5lZGl0YWJsZSkgJiZcclxuICAgICAgICAgICAgICAgIChpc051bWJlcihmaWVsZCkgfHwgaXNEYXRlKGZpZWxkKSB8fCBpc1RpbWUoZmllbGQpIHx8IGlzU3RyaW5nKGZpZWxkKSlcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV0ucmVmOyBjb250ZXh0OiBkYXRhW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=