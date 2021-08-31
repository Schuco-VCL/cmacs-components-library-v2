import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TemplateType } from '../core/enums/TemplateType.enum';
import { CeldType } from '../core/enums/CeldType.enum';
import { ExportType } from '../core/enums/export-type.enum';
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
import { InputBoolean, InputNumber, toBoolean } from 'ng-zorro-antd/core/util';
import { CmacsInputNumberComponent } from '../cmacs-input-number/cmacs-input-number.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "ngx-export-as";
import * as i3 from "../cmacs-dropdown/context-menu.service";
import * as i4 from "../core/services/excel.service";
import * as i5 from "../core/services/util.service";
import * as i6 from "@angular/common";
import * as i7 from "ngx-cookie-service";
import * as i8 from "ng-zorro-antd/table";
import * as i9 from "../cmacs-checkbox/cmacs-checkbox.component";
import * as i10 from "@angular/forms";
import * as i11 from "../cmacs-dropdown/dropdown-menu.component";
import * as i12 from "../cmacs-tooltip/tooltip";
import * as i13 from "../cmacs-input/cmacs-input.directive";
import * as i14 from "../cmacs-input-number/cmacs-input-number.component";
import * as i15 from "../cmacs-date-picker/date-picker.component";
import * as i16 from "../cmacs-select/cmacs-select.component";
import * as i17 from "../cmacs-select/cmacs-option.component";
import * as i18 from "../cmacs-button/cmacs-button.component";
import * as i19 from "ng-zorro-antd/core/transition-patch";
import * as i20 from "ng-zorro-antd/icon";
import * as i21 from "../cmacs-tag/tag.component";
import * as i22 from "ng-zorro-antd/rate";
const _c0 = ["renderItemTemplate"];
const _c1 = ["fieldTypeInput"];
const _c2 = ["fieldTypeInputNumber"];
const _c3 = ["fieldTypeDatePicker"];
const _c4 = ["fieldTypeSelect"];
const _c5 = ["fieldTypeBool"];
function CmacsTableComponent_thead_3_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 8);
    i0.ɵɵelementStart(1, "label", 9);
    i0.ɵɵlistener("ngModelChange", function CmacsTableComponent_thead_3_th_2_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.selected = $event; })("checkedChange", function CmacsTableComponent_thead_3_th_2_Template_label_checkedChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.onCheckboxAllChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r3.selected)("indeterminate", ctx_r3.isIndeterminate);
} }
function CmacsTableComponent_thead_3_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵlistener("nzSortChange", function CmacsTableComponent_thead_3_th_3_Template_th_nzSortChange_0_listener($event) { i0.ɵɵrestoreView(_r11); const field_r9 = ctx.$implicit; const ctx_r10 = i0.ɵɵnextContext(2); return field_r9.showSort ? field_r9.sortOrder : ctx_r10.defaultSortOrder = $event; })("nzSortOrderChange", function CmacsTableComponent_thead_3_th_3_Template_th_nzSortOrderChange_0_listener($event) { i0.ɵɵrestoreView(_r11); const field_r9 = ctx.$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.sort($event, field_r9.property); });
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r9 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("min-width", field_r9.minWidth ? field_r9.minWidth : field_r9.width)("max-width", field_r9.width);
    i0.ɵɵproperty("nzShowSort", field_r9.showSort)("nzSort", field_r9.showSort ? field_r9.sortOrder : ctx_r4.defaultSortOrder)("nzWidth", field_r9.width);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r4.getHeaderMaxWidth(field_r9));
    i0.ɵɵclassProp("cmacs-table-overflow-cell-header", !ctx_r4.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", field_r9.display, " ");
} }
function CmacsTableComponent_thead_3_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 11);
} if (rf & 2) {
    i0.ɵɵstyleProp("min-width", "105px")("max-width", "105px");
    i0.ɵɵproperty("nzWidth", "105px");
} }
function CmacsTableComponent_thead_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead");
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵtemplate(2, CmacsTableComponent_thead_3_th_2_Template, 2, 6, "th", 5);
    i0.ɵɵtemplate(3, CmacsTableComponent_thead_3_th_3_Template, 3, 12, "th", 6);
    i0.ɵɵtemplate(4, CmacsTableComponent_thead_3_th_4_Template, 1, 5, "th", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.showRate);
} }
function CmacsTableComponent_tr_5_td_4_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 19);
    i0.ɵɵlistener("ngModelChange", function CmacsTableComponent_tr_5_td_4_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r21); const data_r13 = i0.ɵɵnextContext(2).$implicit; const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.checkboxCache[ctx_r20.getIndex(data_r13[ctx_r20.config.fieldId])].selected = $event; })("checkedChange", function CmacsTableComponent_tr_5_td_4_label_1_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r21); const data_r13 = i0.ɵɵnextContext(2).$implicit; const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onCheckboxChange($event, data_r13); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r13 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r19 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r19.checkboxCache[ctx_r19.getIndex(data_r13[ctx_r19.config.fieldId])].selected);
} }
function CmacsTableComponent_tr_5_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_4_label_1_Template, 1, 1, "label", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r13[ctx_r16.config.fieldId] && ctx_r16.checkboxCache[ctx_r16.getIndex(data_r13[ctx_r16.config.fieldId])]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(4).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r38 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r38.getMaxWidth());
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r38.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r13[field_r27.property] !== null && data_r13[field_r27.property] !== undefined && data_r13[field_r27.property] !== "" ? data_r13[field_r27.property] : field_r27.placeholder, " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(4).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r39 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r39.getMaxWidth());
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r39.wrapLines);
    i0.ɵɵproperty("title", data_r13[field_r27.property]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r13[field_r27.property], " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_div_1_Template, 2, 5, "div", 28);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_div_2_Template, 2, 6, "div", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(3).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r27.showTooltip || data_r13[field_r27.property] === null || data_r13[field_r27.property] === undefined || data_r13[field_r27.property] === "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r27.showTooltip && data_r13[field_r27.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 30);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(3).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r36 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r36.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 3, data_r13[field_r27.property], field_r27.dateFormat));
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(3).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r37 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r37.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r37.getLabel(data_r13, field_r27));
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(3, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_3_Template, 4, 6, "ng-container", 3);
    i0.ɵɵtemplate(4, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_4_Template, 3, 3, "ng-container", 3);
    i0.ɵɵelementStart(5, "i", 27);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_Template_i_click_5_listener($event) { i0.ɵɵrestoreView(_r52); const field_r27 = i0.ɵɵnextContext(2).$implicit; const data_r13 = i0.ɵɵnextContext().$implicit; const ctx_r50 = i0.ɵɵnextContext(); return ctx_r50.startEdit(data_r13[ctx_r50.config.fieldId], field_r27.property, $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r32.isDate(field_r27) && !ctx_r32.isSelect(field_r27));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r32.isDate(field_r27));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r32.isSelect(field_r27));
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 37, 38);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r61 = i0.ɵɵnextContext(5); return ctx_r61.preventDefault($event); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r63 = i0.ɵɵnextContext(5); return ctx_r63.preventDefault($event); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r62); const field_r27 = i0.ɵɵnextContext(3).$implicit; const data_r13 = i0.ɵɵnextContext().$implicit; return (data_r13[field_r27.property] = $event); })("keyup", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r62); const i_r14 = i0.ɵɵnextContext(4).index; const ctx_r67 = i0.ɵɵnextContext(); return ctx_r67.endEditMode($event, i_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(3).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r13[field_r27.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 39, 40);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r72 = i0.ɵɵnextContext(5); return ctx_r72.preventDefault($event); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r74 = i0.ɵɵnextContext(5); return ctx_r74.preventDefault($event); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r73); const field_r27 = i0.ɵɵnextContext(3).$implicit; const data_r13 = i0.ɵɵnextContext().$implicit; return (data_r13[field_r27.property] = $event); })("keyup", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r73); const i_r14 = i0.ɵɵnextContext(4).index; const ctx_r78 = i0.ɵɵnextContext(); return ctx_r78.endEditMode($event, i_r14); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r73); const i_r14 = i0.ɵɵnextContext(4).index; const ctx_r80 = i0.ɵɵnextContext(); return ctx_r80.ngModelChange(i_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(3).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r13[field_r27.property])("cmacsStep", 1);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 41, 42);
    i0.ɵɵlistener("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_label_2_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r87); const field_r27 = i0.ɵɵnextContext(3).$implicit; const data_r13 = i0.ɵɵnextContext().$implicit; return (data_r13[field_r27.property] = $event); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_label_2_Template_label_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r87); const i_r14 = i0.ɵɵnextContext(4).index; const ctx_r89 = i0.ɵɵnextContext(); return ctx_r89.endEditModeNgModel(i_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(3).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r13[field_r27.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template(rf, ctx) { if (rf & 1) {
    const _r95 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-date-picker", 43, 44);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_click_0_listener($event) { i0.ɵɵrestoreView(_r95); const ctx_r94 = i0.ɵɵnextContext(5); return ctx_r94.preventDefault($event); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r95); const ctx_r96 = i0.ɵɵnextContext(5); return ctx_r96.preventDefault($event); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r95); const field_r27 = i0.ɵɵnextContext(3).$implicit; const data_r13 = i0.ɵɵnextContext().$implicit; return (data_r13[field_r27.property] = $event); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r95); const i_r14 = i0.ɵɵnextContext(4).index; const ctx_r100 = i0.ɵɵnextContext(); return ctx_r100.endEditModeNgModel(i_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(3).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("format", "MM/dd/yyyy")("allowClear", true)("ngModel", data_r13[field_r27.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_cmacs_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 48);
} if (rf & 2) {
    const sData_r106 = ctx.$implicit;
    const field_r27 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵpropertyInterpolate("label", sData_r106[field_r27.select.label]);
    i0.ɵɵpropertyInterpolate("value", sData_r106[field_r27.select.value]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template(rf, ctx) { if (rf & 1) {
    const _r109 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-select", 45, 46);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_click_0_listener($event) { i0.ɵɵrestoreView(_r109); const ctx_r108 = i0.ɵɵnextContext(5); return ctx_r108.preventDefault($event); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r109); const ctx_r110 = i0.ɵɵnextContext(5); return ctx_r110.preventDefault($event); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r109); const field_r27 = i0.ɵɵnextContext(3).$implicit; const data_r13 = i0.ɵɵnextContext().$implicit; return (data_r13[field_r27.property] = $event); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r109); const i_r14 = i0.ɵɵnextContext(4).index; const ctx_r114 = i0.ɵɵnextContext(); return ctx_r114.endEditModeNgModel(i_r14); });
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_cmacs_option_2_Template, 1, 2, "cmacs-option", 47);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(3).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r13[field_r27.property]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r27.select.selectData);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template, 2, 1, "input", 32);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template, 2, 2, "cmacs-input-number", 33);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_label_2_Template, 2, 1, "label", 34);
    i0.ɵɵtemplate(3, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template, 2, 3, "cmacs-date-picker", 35);
    i0.ɵɵtemplate(4, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template, 3, 2, "cmacs-select", 36);
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r34 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r34.isString(field_r27));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r34.isNumber(field_r27) && !ctx_r34.isSelect(field_r27));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r34.isBoolean(field_r27));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r34.isDate(field_r27));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r34.isSelect(field_r27));
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_Template, 6, 7, "div", 23);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_Template, 5, 5, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r33 = i0.ɵɵreference(3);
    const field_r27 = i0.ɵɵnextContext().$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r29 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r29.editId !== data_r13[ctx_r29.config.fieldId] || ctx_r29.property !== field_r27.property)("ngIfElse", _r33);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, null, 51);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_0_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(2).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", data_r13[field_r27.property].ref)("ngTemplateOutletContext", data_r13[field_r27.property].context);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 56);
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵpropertyInterpolate("type", field_r27.button.icon);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵtextInterpolate(field_r27.display);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r138 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 53);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r138); const data_r13 = i0.ɵɵnextContext(3).$implicit; const ctx_r136 = i0.ɵɵnextContext(); return ctx_r136.onButtonClick(data_r13); });
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_i_1_Template, 1, 1, "i", 54);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_ng_template_2_Template, 1, 1, "ng-template", null, 55, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r132 = i0.ɵɵreference(3);
    const field_r27 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r122 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("aria-label", field_r27.display);
    i0.ɵɵpropertyInterpolate("type", field_r27.button.style);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r122.isUndefined(field_r27.button.icon))("ngIfElse", _r132);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "cmacs-tag", 57);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r140 = i0.ɵɵnextContext(2);
    const fi_r28 = ctx_r140.index;
    const field_r27 = ctx_r140.$implicit;
    const ctx_r141 = i0.ɵɵnextContext();
    const i_r14 = ctx_r141.index;
    const data_r13 = ctx_r141.$implicit;
    const ctx_r123 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r123.gridID + "column" + fi_r28 + "row" + i_r14);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", field_r27.tag.color ? data_r13[field_r27.tag.color] : null)("cmacsGridType", field_r27.tag.cmacsGridType ? data_r13[field_r27.tag.cmacsGridType] : null)("cmacsStatusType", field_r27.tag.cmacsStatusType ? data_r13[field_r27.tag.cmacsStatusType] : null)("cmacsPriorityType", field_r27.tag.cmacsPriorityType ? data_r13[field_r27.tag.cmacsPriorityType] : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r13[field_r27.property], " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(2).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r124 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r124.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r124.transformDate(data_r13[field_r27.property]));
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(3).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r144 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r144.getMaxWidth());
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r144.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r13[field_r27.property] !== null && data_r13[field_r27.property] !== undefined && data_r13[field_r27.property] !== "" ? data_r13[field_r27.property] : field_r27.placeholder, " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(3).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r145 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r145.getMaxWidth());
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r145.wrapLines);
    i0.ɵɵproperty("title", data_r13[field_r27.property]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r13[field_r27.property], " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_div_1_Template, 2, 5, "div", 28);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_div_2_Template, 2, 6, "div", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(2).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r27.showTooltip || data_r13[field_r27.property] === null || data_r13[field_r27.property] === undefined || data_r13[field_r27.property] === "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r27.showTooltip && data_r13[field_r27.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext(2).$implicit;
    const data_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r126 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r126.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r126.getLabel(data_r13, field_r27));
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_0_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_Template, 4, 4, "button", 49);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_div_2_Template, 3, 6, "div", 50);
    i0.ɵɵtemplate(3, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_3_Template, 3, 3, "ng-container", 3);
    i0.ɵɵtemplate(4, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(5, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_Template, 3, 3, "ng-container", 3);
} if (rf & 2) {
    const field_r27 = i0.ɵɵnextContext().$implicit;
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r31.isCeldTypeTemplateRef(field_r27));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r31.isCeldTypeButton(field_r27));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r31.isCeldTypeTag(field_r27) && field_r27.tag !== undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (!ctx_r31.inLineEdit || ctx_r31.isReadOnly(field_r27)) && ctx_r31.isDate(field_r27));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (!ctx_r31.inLineEdit || ctx_r31.isReadOnly(field_r27)) && !ctx_r31.isCeldTypeButton(field_r27) && !ctx_r31.isCeldTypeTag(field_r27) && !ctx_r31.isCeldTypeTemplateRef(field_r27) && !ctx_r31.isDate(field_r27) && !ctx_r31.isSelect(field_r27));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r31.isSelect(field_r27));
} }
const _c6 = function (a1) { return ["editable-row", a1]; };
const _c7 = function (a0) { return [a0]; };
function CmacsTableComponent_tr_5_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 20);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_container_1_Template, 4, 2, "ng-container", 21);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_Template, 6, 6, "ng-template", null, 22, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r27 = ctx.$implicit;
    const _r30 = i0.ɵɵreference(3);
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "100%");
    i0.ɵɵproperty("ngClass", ctx_r17.isCeldTypeDefault(field_r27) && ctx_r17.inLineEdit && !ctx_r17.isReadOnly(field_r27) ? i0.ɵɵpureFunction1(5, _c6, "cmacs-table-cell-" + field_r27.property) : i0.ɵɵpureFunction1(7, _c7, "cmacs-table-cell-" + field_r27.property));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r17.isCeldTypeDefault(field_r27) && ctx_r17.inLineEdit && !ctx_r17.isReadOnly(field_r27))("ngIfElse", _r30);
} }
function CmacsTableComponent_tr_5_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r157 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 58);
    i0.ɵɵelementStart(1, "nz-rate", 59);
    i0.ɵɵlistener("ngModelChange", function CmacsTableComponent_tr_5_td_6_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r157); const data_r13 = i0.ɵɵnextContext().$implicit; const ctx_r155 = i0.ɵɵnextContext(); return ctx_r155.onRateChange($event, data_r13); })("click", function CmacsTableComponent_tr_5_td_6_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r157); const ctx_r158 = i0.ɵɵnextContext(2); return ctx_r158.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r18 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r13[ctx_r18.config.fieldRate])("nzCount", ctx_r18.rateCount)("nzDisabled", !ctx_r18.inLineEdit);
} }
const _c8 = function (a0) { return { data: a0 }; };
function CmacsTableComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r161 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 12);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r161); const data_r13 = ctx.$implicit; const ctx_r160 = i0.ɵɵnextContext(); return ctx_r160.clickRow($event, data_r13); })("touchstart", function CmacsTableComponent_tr_5_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r161); const data_r13 = ctx.$implicit; const ctx_r162 = i0.ɵɵnextContext(); return ctx_r162.tapHandler($event, data_r13); })("contextmenu", function CmacsTableComponent_tr_5_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r161); const _r15 = i0.ɵɵreference(2); const ctx_r163 = i0.ɵɵnextContext(); return ctx_r163.contextMenu($event, _r15); });
    i0.ɵɵelementStart(1, "cmacs-dropdown-menu", null, 13);
    i0.ɵɵelementContainer(3, 14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsTableComponent_tr_5_td_4_Template, 2, 5, "td", 15);
    i0.ɵɵtemplate(5, CmacsTableComponent_tr_5_td_5_Template, 4, 9, "td", 16);
    i0.ɵɵtemplate(6, CmacsTableComponent_tr_5_td_6_Template, 2, 3, "td", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-table-selected-row", ctx_r2.isRowSelected(data_r13));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.contextmenu)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c8, data_r13));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.showRate);
} }
const moment = moment_;
// tslint:disable-next-line no-any
export class CmacsTableComponent {
    constructor(cdr, i18n, exportAsService, cmacsContextMenuService, excelService, utilService, datePipe, cookies) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.exportAsService = exportAsService;
        this.cmacsContextMenuService = cmacsContextMenuService;
        this.excelService = excelService;
        this.utilService = utilService;
        this.datePipe = datePipe;
        this.cookies = cookies;
        this.locale = {}; // tslint:disable-line:no-any
        this.headerBottomStyle = {};
        this.destroy$ = new Subject();
        // tslint:disable-next-line: no-input-rename
        this.size = 'default';
        this.pageSizeOptions = [10, 20, 30, 40, 50];
        this.virtualScroll = false;
        this.virtualItemSize = 0;
        this.loadingDelay = 0;
        this.total = 0;
        this.widthConfig = [];
        this.pageIndex = 1;
        this.pageSize = 10;
        // tslint:disable-next-line: no-input-rename
        this.data = [];
        this.configChange = new EventEmitter();
        this.paginationPosition = 'bottom';
        this.scroll = { x: null, y: null };
        this.printLandscape = true;
        this.wrapLines = false;
        this.frontPagination = true;
        this.templateMode = false;
        this.bordered = false;
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
        this.rateCount = 5;
        this.multiSelect = false;
        this.sortChange = new EventEmitter();
        this.selected = false;
        this.defaultSortOrder = null;
        this.checkboxCache = [];
        this.isIndeterminate = false;
        this.allChecked = false;
        this.rowOnEdition = -1;
        this.tapCount = 0;
        this.lastIdxSelected = null;
        this.order = 0;
        this.clicks = 0;
        // renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
    }
    contextMenu($event, template) {
        this.cmacsContextMenuService.create($event, template);
    }
    startEdit(id, property, event) {
        event.preventDefault();
        event.stopPropagation();
        this.editId = id;
        this.property = property;
        this.cdr.detectChanges();
        this.focusSelect(this.inputElement);
        if (this.inputNumberComponent) {
            this.focusSelect(this.inputNumberComponent.inputElement);
        }
    }
    handleMouseDown(e) {
        const element = e.target;
        if (this.editId && this.property) {
            if ((this.inputElement && this.inputElement.nativeElement !== e.target) ||
                (this.inputNumberElement && !this.childOf(element, this.inputNumberElement.nativeElement)) ||
                (this.datePickerElement && !this.childOf(element, this.datePickerElement.nativeElement)) ||
                (this.selectElement && !this.childOf(element, this.selectElement.nativeElement) ||
                    (this.boolElement && !this.childOf(element, this.boolElement.nativeElement)))) {
                if (this.inputNumberComponent) {
                    this.inputNumberComponent.blur();
                }
                this.editId = null;
                this.property = null;
                if (this.rowOnEdition >= 0) {
                    this.onedit.emit(this.data[this.rowOnEdition]);
                    this.rowOnEdition = -1;
                }
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
    getHeaderMaxWidth(field) {
        if (field.showSort) {
            return `calc(100% - 15px)`;
        }
        return `100%`;
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
    endEditMode($event, index) {
        if ($event.key === ('Enter' || 'enter')) {
            this.editId = null;
            this.property = null;
            this.rowOnEdition = -1;
            this.onedit.emit(this.data[index]);
        }
        else {
            this.rowOnEdition = index;
        }
    }
    endEditModeNgModel(index) {
        this.editId = null;
        this.property = null;
        this.rowOnEdition = -1;
        this.onedit.emit(this.data[index]);
    }
    getIndex(id) {
        let i = -1;
        i = this.checkboxCache.findIndex(item => item.data[this.config.fieldId] === id);
        return i;
    }
    updateCheckboxCache() {
        this.checkboxCache.length = 0;
        this.data.forEach(item => {
            this.checkboxCache.push({
                selected: item.selected ? item.selected : false,
                data: Object.assign({}, item),
                order: item.selected ? this.order++ : -1
            });
        });
    }
    getMaxWidth() {
        if (!this.inLineEdit) {
            return `100%`;
        }
        return `calc(100% - 20px)`;
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
        const dataSelected = this.checkboxCache.filter(item => item.selected).sort((a, b) => a.order - b.order);
        this.selected = this.allChecked = (dataSelected.length > 0 && (dataSelected.length === this.checkboxCache.length));
        this.isIndeterminate = dataSelected.length > 0 && !this.allChecked;
        return dataSelected;
    }
    ngModelChange(index) {
        this.rowOnEdition = index;
    }
    // tslint:disable-next-line: no-shadowed-variable
    onRateChange(count, data) {
        data[this.config.fieldRate] = count;
        this.rateChange.emit(data);
    }
    onRateClick(event) {
        this.preventDefault(event);
    }
    getFields() {
        return this.config.fields.filter(item => item.hidden === undefined || !item.hidden);
    }
    onCheckboxAllChange(status) {
        this.checkboxCache.forEach(element => {
            element.selected = status;
        });
        this.isIndeterminate = false;
        this.selectionChange.emit((status) ? this.data : []);
    }
    getLabel(data, field) {
        let result = '';
        if (field.editTemplate === TemplateType.Select && field.select !== undefined) {
            // tslint:disable-next-line: no-shadowed-variable
            const item = field.select.selectData.find(item => item !== undefined && item[field.select.value] === data[field.property]);
            result = (item !== undefined) ? item[field.select.label] : '';
        }
        return result;
    }
    isSelect(field) {
        return field !== undefined && field.editTemplate === TemplateType.Select;
    }
    isReadOnly(field) {
        return field !== undefined && field.readonly !== undefined && field.readonly;
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
    isString(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.String;
    }
    isNumber(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Number;
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
        const dataSelectd = this.checkboxCache.filter(item => item.selected).map(item => item.data[this.config.fieldId]);
        return dataSelectd.indexOf(data[this.config.fieldId]) !== -1;
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
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        });
        if (this.checkboxSelect) {
            this.updateCheckboxCache();
            this.refreshCheckboxState(true);
        }
        if (this.dataTable && this.data.length > 1) {
            while (this.data.length > 1) {
                this.data.pop();
            }
            this.showPagination = false;
        }
        this.checkCheckboxState();
        if (!this.gridID) {
            this.gridID = this.utilService.uuidv4();
        }
        this.exportEvent.subscribe((config) => {
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
            }
        });
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
        if (changes.data) {
            this.updateCheckboxCache();
            this.refreshCheckboxState();
        }
    }
    exportToPng(fileName) {
        this.loading = true;
        this.utilService.exportTable('png', fileName, this.gridID);
    }
    exportToExcel(fileName) {
        this.loading = true;
        const dataToExport = [];
        const fields = this.config.fields.filter(item => item.celdType === CeldType.Default ||
            item.celdType === CeldType.Tag ||
            item.celdType === CeldType.TemplateRef);
        this.data.forEach(item => {
            const itemToExport = {};
            // tslint:disable-next-line: no-shadowed-variable
            fields.forEach(field => {
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
                elemID: this.gridID,
                data: this.data,
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
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
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
            .forEach(elem => { elem.selected = false, elem.order = -1; });
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
    transformDate(date) {
        const m = moment(date);
        m.locale(this.i18n.getLocale().locale);
        return m.format(this.i18n.getLocale().locale === 'de' ? 'DD/MM/YYYY' : 'MM/DD/YYYY');
    }
}
CmacsTableComponent.ɵfac = function CmacsTableComponent_Factory(t) { return new (t || CmacsTableComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i2.ExportAsService), i0.ɵɵdirectiveInject(i3.CmacsContextMenuService), i0.ɵɵdirectiveInject(i4.ExcelService), i0.ɵɵdirectiveInject(i5.UtilService), i0.ɵɵdirectiveInject(i6.DatePipe), i0.ɵɵdirectiveInject(i7.CookieService)); };
CmacsTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTableComponent, selectors: [["cmacs-table"]], viewQuery: function CmacsTableComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
        i0.ɵɵviewQuery(_c1, 1, ElementRef);
        i0.ɵɵviewQuery(_c2, 1, ElementRef);
        i0.ɵɵviewQuery(CmacsInputNumberComponent, 1, CmacsInputNumberComponent);
        i0.ɵɵviewQuery(_c3, 1, ElementRef);
        i0.ɵɵviewQuery(_c4, 1, ElementRef);
        i0.ɵɵviewQuery(_c5, 1, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzItemRender = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputNumberElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputNumberComponent = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datePickerElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.boolElement = _t.first);
    } }, hostBindings: function CmacsTableComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mousedown", function CmacsTableComponent_mousedown_HostBindingHandler($event) { return ctx.handleMouseDown($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { size: "size", showTotal: "showTotal", pageSizeOptions: "pageSizeOptions", virtualScroll: "virtualScroll", virtualItemSize: "virtualItemSize", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", total: "total", title: "title", footer: "footer", noResult: "noResult", widthConfig: "widthConfig", pageIndex: "pageIndex", pageSize: "pageSize", data: "data", config: "config", fieldId: "fieldId", gridID: "gridID", paginationPosition: "paginationPosition", scroll: "scroll", printLandscape: "printLandscape", wrapLines: "wrapLines", frontPagination: "frontPagination", templateMode: "templateMode", bordered: "bordered", showPagination: "showPagination", loading: "loading", showSizeChanger: "showSizeChanger", hideOnSinglePage: "hideOnSinglePage", showQuickJumper: "showQuickJumper", simple: "simple", checkboxSelect: "checkboxSelect", inLineEdit: "inLineEdit", dataTable: "dataTable", showRate: "showRate", exportEvent: "exportEvent", rateCount: "rateCount", multiSelect: "multiSelect", contextmenu: "contextmenu" }, outputs: { configChange: "configChange", buttonClick: "buttonClick", rateChange: "rateChange", selectionChange: "selectionChange", ondlclickRow: "ondlclickRow", onclickRow: "onclickRow", onedit: "onedit", sortChange: "sortChange" }, exportAs: ["cmacsTable"], features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 26, consts: [[3, "id"], [1, "cmacs-table", 3, "nzData", "nzShowTotal", "nzPageSizeOptions", "nzVirtualItemSize", "nzLoadingDelay", "nzLoadingIndicator", "nzTotal", "nzTitle", "nzFooter", "nzNoResult", "nzWidthConfig", "nzPageIndex", "nzPageSize", "nzPaginationPosition", "nzScroll", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], ["gridComponent", ""], [4, "ngIf"], ["class", "cmacs-no-selection", 3, "ant-table-selected-row", "click", "touchstart", "contextmenu", 4, "ngFor", "ngForOf"], ["nzWidth", "40px", 3, "maxWidth", "minWidth", 4, "ngIf"], [3, "nzShowSort", "nzSort", "minWidth", "maxWidth", "nzWidth", "nzSortChange", "nzSortOrderChange", 4, "ngFor", "ngForOf"], [3, "minWidth", "maxWidth", "nzWidth", 4, "ngIf"], ["nzWidth", "40px"], ["cmacs-checkbox", "", 3, "ngModel", "indeterminate", "ngModelChange", "checkedChange"], [3, "nzShowSort", "nzSort", "nzWidth", "nzSortChange", "nzSortOrderChange"], [3, "nzWidth"], [1, "cmacs-no-selection", 3, "click", "touchstart", "contextmenu"], ["contextMenuTemplate", "cmacsDropdownMenu"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "maxWidth", "minWidth", 4, "ngIf"], [3, "ngClass", "maxWidth", 4, "ngFor", "ngForOf"], ["class", "cmacs-table-rating", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], ["componentTpl", ""], ["class", "editable-cell", 3, "maxWidth", 4, "ngIf", "ngIfElse"], ["editTpl", ""], [1, "editable-cell"], [1, "editable-cell-value-wrap"], [1, "iconUISmall-Edit", "cmacs-table-edit-icon", 3, "click"], ["style", "word-break: break-word;", 3, "cmacs-table-overflow-cell", "maxWidth", 4, "ngIf"], ["style", "word-break: break-word;", "cmacs-tooltip", "", "placement", "right", 3, "cmacs-table-overflow-cell", "maxWidth", "title", 4, "ngIf"], [2, "word-break", "break-word"], ["cmacs-tooltip", "", "placement", "right", 2, "word-break", "break-word", 3, "title"], ["type", "text", "cmacs-input", "", "class", "tableinput", 3, "ngModel", "click", "dblclick", "ngModelChange", "keyup", 4, "ngIf"], ["id", "testing2", "class", "tableinput", 3, "ngModel", "cmacsStep", "click", "dblclick", "ngModelChange", "keyup", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "tableinput", 3, "format", "allowClear", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["style", "width: 100%;", "showSearch", "", "class", "tableinput", 3, "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["type", "text", "cmacs-input", "", 1, "tableinput", 3, "ngModel", "click", "dblclick", "ngModelChange", "keyup"], ["fieldTypeInput", ""], ["id", "testing2", 1, "tableinput", 3, "ngModel", "cmacsStep", "click", "dblclick", "ngModelChange", "keyup"], ["fieldTypeInputNumber", ""], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange"], ["fieldTypeBool", ""], [1, "tableinput", 3, "format", "allowClear", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDatePicker", ""], ["showSearch", "", 1, "tableinput", 2, "width", "100%", 3, "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeSelect", ""], [3, "label", "value", 4, "ngFor", "ngForOf"], [3, "label", "value"], ["role", "button", "cmacs-button", "", 3, "aria-label", "type", "click", 4, "ngIf"], [3, "id", 4, "ngIf"], ["templateRefCeld", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "button", "cmacs-button", "", 3, "aria-label", "type", "click"], ["nz-icon", "", 3, "type", 4, "ngIf", "ngIfElse"], ["titleTpl", ""], ["nz-icon", "", 3, "type"], [3, "color", "cmacsGridType", "cmacsStatusType", "cmacsPriorityType"], [1, "cmacs-table-rating"], [3, "ngModel", "nzCount", "nzDisabled", "ngModelChange", "click"]], template: function CmacsTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "nz-table", 1, 2);
        i0.ɵɵtemplate(3, CmacsTableComponent_thead_3_Template, 5, 3, "thead", 3);
        i0.ɵɵelementStart(4, "tbody");
        i0.ɵɵtemplate(5, CmacsTableComponent_tr_5_Template, 7, 9, "tr", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵpropertyInterpolate("id", ctx.gridID);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzData", ctx.data)("nzShowTotal", ctx.showTotal)("nzPageSizeOptions", ctx.pageSizeOptions)("nzVirtualItemSize", ctx.virtualItemSize)("nzLoadingDelay", ctx.loadingDelay)("nzLoadingIndicator", ctx.loadingIndicator)("nzTotal", ctx.total)("nzTitle", ctx.title)("nzFooter", ctx.footer)("nzNoResult", ctx.noResult)("nzWidthConfig", ctx.widthConfig)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPaginationPosition", ctx.paginationPosition)("nzScroll", ctx.scroll)("nzFrontPagination", ctx.frontPagination)("nzTemplateMode", ctx.templateMode)("nzShowPagination", ctx.showPagination)("nzLoading", ctx.loading)("nzShowSizeChanger", ctx.showSizeChanger)("nzHideOnSinglePage", ctx.hideOnSinglePage)("nzShowQuickJumper", ctx.showQuickJumper)("nzSimple", ctx.simple);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.dataTable);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", _r0.data);
    } }, directives: [i8.NzTableComponent, i6.NgIf, i8.NzTbodyComponent, i6.NgForOf, i8.NzTheadComponent, i8.NzTrDirective, i8.NzTableCellDirective, i8.NzThMeasureDirective, i9.CmacsCheckboxComponent, i10.NgControlStatus, i10.NgModel, i8.NzThAddOnComponent, i11.CmacsDropdownMenuComponent, i6.NgTemplateOutlet, i6.NgClass, i12.CmacsTooltipDirective, i13.CmacsInputDirective, i10.DefaultValueAccessor, i14.CmacsInputNumberComponent, i15.CmacsDatePickerComponent, i16.CmacsSelectComponent, i17.CmacsOptionComponent, i18.CmacsButtonComponent, i19.ɵNzTransitionPatchDirective, i20.NzIconDirective, i21.CmacsTagComponent, i22.NzRateComponent], pipes: [i6.DatePipe], styles: [".cmacs-table .ant-table-column-sorter-inner{margin-left:0;margin-right:0}  .cmacs-table .ant-table-placeholder .ant-table-cell,   .cmacs-table .ant-table-tbody>tr.ant-table-placeholder:hover{box-shadow:none!important;border-bottom:none!important}  .cmacs-table tr.ant-table-placeholder .ant-table-expanded-row-fixed{margin:0!important;padding:0!important}  .cmacs-table .ant-table-tbody>tr.ant-table-placeholder:hover>td{box-shadow:none!important}.cmacs-table[_ngcontent-%COMP%]   .cmacs-table-rating[_ngcontent-%COMP%]{min-width:105px}.cmacs-table-overflow-cell[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:100%;vertical-align:middle}.cmacs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] > .cmacs-table-overflow-cell[_ngcontent-%COMP%]{line-height:24px!important}.cmacs-table[_ngcontent-%COMP%]   .cmacs-table-overflow-cell-header[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}  .cmacs-table .ant-table-column-sorter{width:12px;display:none!important;right:0;position:absolute}  .cmacs-table th:hover .ant-table-column-sorter{display:table-cell!important;right:0;position:absolute}  .cmacs-table .ant-table-column-sorters,   .cmacs-table .ant-table-header-column{width:100%;padding:0}  .cmacs-table .ant-table-column-sorters span:not(.ant-table-column-sorter){width:100%}  .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:hover{background-color:#f6f7fb}  .cmacs-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters:hover:before{background-color:transparent}.cmacs-table[_ngcontent-%COMP%]   .editable-cell[_ngcontent-%COMP%]{position:relative}.cmacs-table[_ngcontent-%COMP%]   .editable-cell-value-wrap[_ngcontent-%COMP%]{padding:6px 0;cursor:pointer;min-height:30px;max-height:30px}.cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover > td.editable-row[_ngcontent-%COMP%]   .cmacs-table-edit-icon[_ngcontent-%COMP%]{opacity:1}.cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td.editable-row[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]   td.editable-row[_ngcontent-%COMP%]:first-child{padding:9px 10px}  .cmacs-table .ant-rate{height:16px;font-size:16px}  .cmacs-table .ant-rate-star{font-size:16px;margin:0}.cmacs-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]{box-shadow:0 3px 7px -3px rgba(5,6,6,.18)}  .cmacs-table .ant-table-thead>tr>th{color:#656c79;background-color:#f6f7fb;border-bottom:1px solid transparent}  .cmacs-table .ant-table-thead th.ant-table-column-has-sorters:hover{background-color:#f6f7fb!important}  .cmacs-table .ant-table-tbody>tr>td{padding:12px 10px;border-bottom:0;box-shadow:inset 0 -1px 0 #dee0e5}  .cmacs-table .ant-table-tbody>tr:hover{box-shadow:0 3px 7px -3px rgba(5,6,6,.18);position:relative}  .cmacs-table .ant-table-tbody>tr td:first-child{padding:12px 10px;box-shadow:inset 0 -1px 0 #dee0e5}  .cmacs-table .ant-table-thead>tr>th{padding:15px 10px}  .cmacs-table .ant-table-tbody>tr:hover td:first-child{box-shadow:inset 3px 0 0 #2a7cff,inset 0 -1px 0 #dee0e5}  .cmacs-table .ant-table-tbody>.ant-table-selected-row:hover td:first-child{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-table .ant-table-tbody>.ant-table-selected-row:hover td{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-table .ant-table-thead{line-height:1.25;position:relative}.cmacs-table[_ngcontent-%COMP%]   .editable-row[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ng-star-inserted[_ngcontent-%COMP%],   .cmacs-table .ant-table-thead{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal}.cmacs-table[_ngcontent-%COMP%]   .editable-row[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ng-star-inserted[_ngcontent-%COMP%]{line-height:1.5}.cmacs-table[_ngcontent-%COMP%]   cmacs-tag[_ngcontent-%COMP%]{padding:1px 5px!important;height:unset}.cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr.ant-table-row-hover[_ngcontent-%COMP%]:not(.ant-table-expanded-row):not(.ant-table-selected-row) > td[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row) > td[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row) > td[_ngcontent-%COMP%],   .cmacs-table .ant-table-thead>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td{background-color:#fff}  .cmacs-table .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#f2f7ff}  .cmacs-table .ant-spin-nested-loading{clear:both}  .cmacs-table .ant-table table{border-collapse:collapse}  .cmacs-table .tableinput.ant-input:focus,   .cmacs-table .tableinput.ant-input:hover{box-shadow:none;border:1px solid #2a7cff}  .cmacs-table .ant-input-number:not(.cmacs-datetime-picker-input-number),   .cmacs-table .tableinput,   .cmacs-table .tableinput .ant-select-selection--single,   .cmacs-table .tableinput .datepickerwidth,   .cmacs-table .tableinput .datepickerwidth .ant-input,   .cmacs-table .tableinput>*{height:30px!important}  .cmacs-table tr:not(.cmacs-no-selection) .tableinput{margin-left:-5px}  .cmacs-table tr:not(.cmacs-no-selection) input.tableinput{padding:5px 4px}  .cmacs-table cmacs-date-picker.tableinput{margin-left:-5px}  .cmacs-table .tableinput .datepickerwidth .ant-input{padding:0 4px}  .cmacs-table .tableinput .ant-select-selection--single .ant-select-selection__rendered{margin-left:4px;line-height:30px}  .cmacs-table .tableinput .ant-input-number-input{padding-left:4px}  .cmacs-table .ant-input-number:not(.cmacs-datetime-picker-input-number){overflow:visible}  .cmacs-table cmacs-input-number.tableinput,   .cmacs-table cmacs-select.tableinput{margin-left:-5px}  .cmacs-table .tableinput .ant-input-number-handler-wrap{height:28px!important}.cmacs-table[_ngcontent-%COMP%]   .cmacs-no-selection[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}  .cmacs-table .cmacs-no-selection .editable-cell,   .cmacs-table .cmacs-no-selection .tableinput{margin-top:-4px;margin-bottom:-3px;height:30px}  .cmacs-table .cmacs-no-selection input.tableinput{padding:6px 4px 5px;margin-left:-5px}  .cmacs-table .cmacs-no-selection .editable-cell-value-wrap{height:30px}  .cmacs-table table{table-layout:fixed}  .cmacs-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters{display:inline-flex;position:relative;top:3px}  .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-down:not(.on),   .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-up:not(.on),   .cmacs-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{color:#bec4cd}  .cmacs-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner-full{margin-left:0!important}  .cmacs-table .ant-table-fixed-header .ant-table-scroll .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1}  .cmacs-table .ant-table-fixed-header>.ant-table-container>.ant-table-body{scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin;overflow:auto!important;position:inherit}[_ngcontent-%COMP%]::-webkit-scrollbar,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar{width:6px;height:6px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}.cmacs-table-edit-icon[_ngcontent-%COMP%]{position:relative;top:3px;left:5px;opacity:0;float:right;font-size:14px}.cmacs-table-edit-icon[_ngcontent-%COMP%]:hover{color:#2a7cff}"], changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "virtualScroll", void 0);
__decorate([
    InputNumber()
], CmacsTableComponent.prototype, "virtualItemSize", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "printLandscape", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "wrapLines", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "frontPagination", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "templateMode", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "showPagination", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "showSizeChanger", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "hideOnSinglePage", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "showQuickJumper", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "simple", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "checkboxSelect", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "inLineEdit", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "dataTable", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "showRate", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "multiSelect", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTableComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-table',
                exportAs: 'cmacsTable',
                templateUrl: './cmacs-table.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styleUrls: ['./cmacs-table.component.css']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzI18nService }, { type: i2.ExportAsService }, { type: i3.CmacsContextMenuService }, { type: i4.ExcelService }, { type: i5.UtilService }, { type: i6.DatePipe }, { type: i7.CookieService }]; }, { size: [{
            type: Input
        }], showTotal: [{
            type: Input
        }], pageSizeOptions: [{
            type: Input
        }], virtualScroll: [{
            type: Input
        }], virtualItemSize: [{
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
        }], data: [{
            type: Input
        }], config: [{
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
        }], printLandscape: [{
            type: Input
        }], wrapLines: [{
            type: Input
        }], frontPagination: [{
            type: Input
        }], templateMode: [{
            type: Input
        }], bordered: [{
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
        }], rateCount: [{
            type: Input
        }], multiSelect: [{
            type: Input
        }], sortChange: [{
            type: Output
        }], contextmenu: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['fieldTypeInput', { read: ElementRef }]
        }], inputNumberElement: [{
            type: ViewChild,
            args: ['fieldTypeInputNumber', { read: ElementRef }]
        }], inputNumberComponent: [{
            type: ViewChild,
            args: [CmacsInputNumberComponent, { read: CmacsInputNumberComponent }]
        }], datePickerElement: [{
            type: ViewChild,
            args: ['fieldTypeDatePicker', { read: ElementRef }]
        }], selectElement: [{
            type: ViewChild,
            args: ['fieldTypeSelect', { read: ElementRef }]
        }], boolElement: [{
            type: ViewChild,
            args: ['fieldTypeBool', { read: ElementRef }]
        }], handleMouseDown: [{
            type: HostListener,
            args: ['document:mousedown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRhYmxlL2NtYWNzLXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10YWJsZS9jbWFjcy10YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBSU4sU0FBUyxFQUNULFlBQVksRUFDWix1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFLbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFNUQsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFDbEMsT0FBTyxxQkFBcUIsQ0FBQztBQUk3QixPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUcvRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMxQnZGLDZCQUc4QjtJQUM1QixnQ0FDOEM7SUFEeEIseU5BQXNCLHNOQUFBO0lBQ0UsaUJBQVE7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ZW50IjpbImltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBjb3VudCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IEV4cG9ydEFzU2VydmljZSwgRXhwb3J0QXNDb25maWcgfSBmcm9tICduZ3gtZXhwb3J0LWFzJztcclxuaW1wb3J0IHsgR3JpZENvbmZpZywgRmllbGQgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1jb25maWcnO1xyXG5pbXBvcnQgeyBHcmlkRXhwQ29uZmlnIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtZXhwLWNvbmZpZyc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvVGVtcGxhdGVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBDZWxkVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvQ2VsZFR5cGUuZW51bSc7XHJcbmltcG9ydCB7IEV4Y2VsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvZXhjZWwuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL2V4cG9ydC10eXBlLmVudW0nO1xyXG5pbXBvcnQge0Nvb2tpZVNlcnZpY2V9IGZyb20gXCJuZ3gtY29va2llLXNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZW4taWUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXRpbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpTaXplTURTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgQ21hY3NDb250ZXh0TWVudVNlcnZpY2UgfSBmcm9tICcuLi9jbWFjcy1kcm9wZG93bi9jb250ZXh0LW1lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzRHJvcGRvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3MtZHJvcGRvd24vZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3MtaW5wdXQtbnVtYmVyL2NtYWNzLWlucHV0LW51bWJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc0RhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi9jbWFjcy1kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRhYmxlJyxcclxuICBleHBvcnRBczogJ2NtYWNzVGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdGFibGUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBsb2NhbGU6IGFueSA9IHt9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIGhlYWRlckJvdHRvbVN0eWxlID0ge307XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVNRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIHNob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlcjsgcmFuZ2U6IFtudW1iZXIsIG51bWJlcl0gfT47XHJcbiAgQElucHV0KCkgcGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzAsIDQwLCA1MF07XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsSXRlbVNpemUgPSAwO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdEZWxheSA9IDA7XHJcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgdG90YWwgPSAwO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBwYWdlSW5kZXggPSAxO1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoKSBkYXRhID0gW107XHJcbiAgQElucHV0KCkgY29uZmlnOiBHcmlkQ29uZmlnO1xyXG4gIEBPdXRwdXQoKSBjb25maWdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxHcmlkQ29uZmlnPiA9IG5ldyBFdmVudEVtaXR0ZXI8R3JpZENvbmZpZz4oKTtcclxuICBASW5wdXQoKSBmaWVsZElkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZ3JpZElEOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGFnaW5hdGlvblBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2JvdGgnID0gJ2JvdHRvbSc7XHJcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XHJcbiAgQFZpZXdDaGlsZCgncmVuZGVySXRlbVRlbXBsYXRlJykgbnpJdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JztcclxuICAgIHBhZ2U6IG51bWJlcjtcclxuICB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcHJpbnRMYW5kc2NhcGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB3cmFwTGluZXMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZnJvbnRQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdGVtcGxhdGVNb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2l6ZUNoYW5nZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2ltcGxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrYm94U2VsZWN0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGluTGluZUVkaXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGF0YVRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dSYXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZXhwb3J0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRFeHBDb25maWc+KCk7XHJcbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHJhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuICBAT3V0cHV0KCkgb25kbGNsaWNrUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25lZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgcmF0ZUNvdW50ID0gNTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbXVsdGlTZWxlY3QgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASW5wdXQoKSBjb250ZXh0bWVudTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgcHVibGljIGRyb3Bkb3duOiBhbnk7XHJcblxyXG4gIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgZGVmYXVsdFNvcnRPcmRlciA9IG51bGw7XHJcbiAgY2hlY2tib3hDYWNoZTogQ2hlY2tib3hTZWxlY3RbXSA9IFtdO1xyXG4gIGlzSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gIGFsbENoZWNrZWQgPSBmYWxzZTtcclxuICBlZGl0SWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgcHJvcGVydHk6IHN0cmluZyB8IG51bGw7XHJcbiAgcm93T25FZGl0aW9uID0gLTE7XHJcbiAgdGFwQ291bnQgPSAwO1xyXG4gIGxhc3RJZHhTZWxlY3RlZCA9IG51bGw7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUlucHV0JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dE51bWJlcicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dE51bWJlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50LCB7IHJlYWQ6IENtYWNzSW5wdXROdW1iZXJDb21wb25lbnQgfSkgaW5wdXROdW1iZXJDb21wb25lbnQ6IENtYWNzSW5wdXROdW1iZXJDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlRGF0ZVBpY2tlcicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBkYXRlUGlja2VyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVTZWxlY3QnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc2VsZWN0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVCb29sJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGJvb2xFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBjb250ZXh0TWVudSgkZXZlbnQ6IE1vdXNlRXZlbnQsIHRlbXBsYXRlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuY21hY3NDb250ZXh0TWVudVNlcnZpY2UuY3JlYXRlKCRldmVudCwgdGVtcGxhdGUpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRFZGl0KGlkOiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcsIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmVkaXRJZCA9IGlkO1xyXG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy5mb2N1c1NlbGVjdCh0aGlzLmlucHV0RWxlbWVudCk7XHJcbiAgICBpZiAodGhpcy5pbnB1dE51bWJlckNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmZvY3VzU2VsZWN0KHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQuaW5wdXRFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNlZG93bicsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlTW91c2VEb3duKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5lZGl0SWQgJiYgdGhpcy5wcm9wZXJ0eSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgKHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgIT09IGUudGFyZ2V0KSB8fFxyXG4gICAgICAgICh0aGlzLmlucHV0TnVtYmVyRWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuaW5wdXROdW1iZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB8fFxyXG4gICAgICAgICh0aGlzLmRhdGVQaWNrZXJFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5kYXRlUGlja2VyRWxlbWVudC5uYXRpdmVFbGVtZW50KSkgfHxcclxuICAgICAgICAodGhpcy5zZWxlY3RFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5zZWxlY3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHx8XHJcbiAgICAgICAgICAodGhpcy5ib29sRWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuYm9vbEVsZW1lbnQubmF0aXZlRWxlbWVudCkpKVxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dE51bWJlckNvbXBvbmVudCkge1xyXG4gICAgICAgICAgdGhpcy5pbnB1dE51bWJlckNvbXBvbmVudC5ibHVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5yb3dPbkVkaXRpb24gPj0gMCkge1xyXG4gICAgICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbdGhpcy5yb3dPbkVkaXRpb25dKTtcclxuICAgICAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c1NlbGVjdChlbGVtOiBhbnkpIHtcclxuICAgIGlmIChlbGVtKSB7XHJcbiAgICAgIGVsZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtLm5hdGl2ZUVsZW1lbnQuc2VsZWN0KCk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzb3J0KCRldmVudDogYW55LCBmaWVsZFByb3BlcnR5OiBzdHJpbmcsICl7XHJcbiAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdCh7c29ydE5hbWU6IGZpZWxkUHJvcGVydHksIHNvcnRWYWx1ZTogJGV2ZW50fSk7XHJcbiAgfVxyXG5cclxuICBnZXRIZWFkZXJNYXhXaWR0aChmaWVsZDogRmllbGQpIHtcclxuICAgIGlmIChmaWVsZC5zaG93U29ydCkge1xyXG4gICAgICByZXR1cm4gYGNhbGMoMTAwJSAtIDE1cHgpYDtcclxuICAgIH1cclxuICAgIHJldHVybiBgMTAwJWA7XHJcbiAgfVxyXG5cclxuICBjaGlsZE9mKG5vZGU6IGFueSwgYW5jZXN0b3I6IGFueSkge1xyXG4gICAgbGV0IGNoaWxkID0gbm9kZTtcclxuICAgIHdoaWxlIChjaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICBpZiAoY2hpbGQgPT09IGFuY2VzdG9yKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdCAmJiBjaGlsZC5jbGFzc0xpc3QubGVuZ3RoID4gMCAmJiBjaGlsZC5jbGFzc05hbWUgJiYgdHlwZW9mIGNoaWxkLmNsYXNzTmFtZSA9PT0gJ3N0cmluZydcclxuICAgICAgICAmJiBjaGlsZC5jbGFzc05hbWUuaW5kZXhPZignY2RrLW92ZXJsYXktcGFuZScpID49IDApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkLmNoaWxkTm9kZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZC5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdDTUFDUy1NT0RBTCcpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH07XHJcbiAgICAgIGNoaWxkID0gY2hpbGQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGVuZEVkaXRNb2RlKCRldmVudDogS2V5Ym9hcmRFdmVudCwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKCRldmVudC5rZXkgPT09ICgnRW50ZXInIHx8ICdlbnRlcicpKSB7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJvd09uRWRpdGlvbiA9IGluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGVOZ01vZGVsKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgIHRoaXMucHJvcGVydHkgPSBudWxsO1xyXG4gICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleChpZCk6IG51bWJlciB7XHJcbiAgICBsZXQgaSA9IC0xO1xyXG4gICAgaSA9IHRoaXMuY2hlY2tib3hDYWNoZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGlkKTtcclxuICAgIHJldHVybiBpO1xyXG4gIH1cclxuXHJcbiAgb3JkZXIgPSAwO1xyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGUucHVzaCh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGl0ZW0uc2VsZWN0ZWQgPyBpdGVtLnNlbGVjdGVkIDogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogeyAuLi5pdGVtIH0sXHJcbiAgICAgICAgb3JkZXI6IGl0ZW0uc2VsZWN0ZWQgPyB0aGlzLm9yZGVyKysgOiAtMVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWF4V2lkdGgoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5MaW5lRWRpdCkge1xyXG4gICAgICByZXR1cm4gYDEwMCVgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBjYWxjKDEwMCUgLSAyMHB4KWA7XHJcbiAgfVxyXG5cclxuICBvbkJ1dHRvbkNsaWNrKGZpZWxkOiBhbnkpIHtcclxuICAgIHRoaXMuYnV0dG9uQ2xpY2suZW1pdChmaWVsZCk7XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94Q2hhbmdlKCRldmVudCwgZGF0YSkge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlW3RoaXMuZ2V0SW5kZXgoZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSldLm9yZGVyID0gJGV2ZW50ID8gdGhpcy5vcmRlcisrIDogLTE7XHJcbiAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoQ2hlY2tib3hTdGF0ZShvbmluaXQgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgZGF0YVNlbGVjdGVkID0gdGhpcy5jaGVja0NoZWNrYm94U3RhdGUoKTtcclxuICAgIGlmICghb25pbml0KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoZGF0YVNlbGVjdGVkLm1hcChpdGVtID0+IGl0ZW0uZGF0YSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tDaGVja2JveFN0YXRlKCkge1xyXG4gICAgY29uc3QgZGF0YVNlbGVjdGVkID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmFsbENoZWNrZWQgPSAoZGF0YVNlbGVjdGVkLmxlbmd0aCA+IDAgJiYgKGRhdGFTZWxlY3RlZC5sZW5ndGggPT09IHRoaXMuY2hlY2tib3hDYWNoZS5sZW5ndGgpKTtcclxuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gZGF0YVNlbGVjdGVkLmxlbmd0aCA+IDAgJiYgIXRoaXMuYWxsQ2hlY2tlZDtcclxuICAgIHJldHVybiBkYXRhU2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBuZ01vZGVsQ2hhbmdlKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMucm93T25FZGl0aW9uID0gaW5kZXg7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgb25SYXRlQ2hhbmdlKGNvdW50OiBudW1iZXIsIGRhdGE6IGFueSkge1xyXG4gICAgZGF0YVt0aGlzLmNvbmZpZy5maWVsZFJhdGVdID0gY291bnQ7XHJcbiAgICB0aGlzLnJhdGVDaGFuZ2UuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIG9uUmF0ZUNsaWNrKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRzKCk6IEZpZWxkW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmhpZGRlbiA9PT0gdW5kZWZpbmVkIHx8ICFpdGVtLmhpZGRlbik7XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94QWxsQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWQgPSBzdGF0dXM7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCgoc3RhdHVzKSA/IHRoaXMuZGF0YSA6IFtdKTtcclxuICB9XHJcblxyXG4gIGdldExhYmVsKGRhdGE6IGFueSwgZmllbGQ6IEZpZWxkKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIGlmIChmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3QgJiYgZmllbGQuc2VsZWN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICBjb25zdCBpdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChpdGVtID0+IGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGRhdGFbZmllbGQucHJvcGVydHldKTtcclxuICAgICAgcmVzdWx0ID0gKGl0ZW0gIT09IHVuZGVmaW5lZCkgPyBpdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF0gOiAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3QoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3Q7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW57XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5yZWFkb25seSAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLnJlYWRvbmx5O1xyXG4gIH1cclxuXHJcbiAgaXNCb29sZWFuKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuQm9vbGVhbjtcclxuICB9XHJcblxyXG4gIGlzT2JqZWN0KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiAodmFsdWUpID09PSAnb2JqZWN0JztcclxuICB9XHJcblxyXG4gIGlzRGF0ZShmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgfVxyXG5cclxuICBpc1N0cmluZyhmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlN0cmluZztcclxuICB9XHJcblxyXG4gIGlzTnVtYmVyKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZURlZmF1bHQoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVCdXR0b24oZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuQnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRhZyhmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UYWc7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuXHJcbiAgaXNVbmRlZmluZWQodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBpc1Jvd1NlbGVjdGVkKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZGF0YVNlbGVjdGQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgIHJldHVybiBkYXRhU2VsZWN0ZC5pbmRleE9mKGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pICE9PSAtMTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBleHBvcnRBc1NlcnZpY2U6IEV4cG9ydEFzU2VydmljZSxcclxuICAgIHByaXZhdGUgY21hY3NDb250ZXh0TWVudVNlcnZpY2U6IENtYWNzQ29udGV4dE1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBleGNlbFNlcnZpY2U6IEV4Y2VsU2VydmljZSxcclxuICAgIHByaXZhdGUgdXRpbFNlcnZpY2U6IFV0aWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsXHJcbiAgICBwcml2YXRlIGNvb2tpZXM6IENvb2tpZVNlcnZpY2VcclxuICApIHtcclxuICAgIC8vIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJsZS13cmFwcGVyJyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5nZXRJbmRleENvb2tpZSgpICYmIHRoaXMuY29va2llcy5jaGVjayh0aGlzLmdyaWRJRCkpIHtcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWdTdHIgPSB0aGlzLmNvb2tpZXMuZ2V0KHRoaXMuZ3JpZElEKTtcclxuICAgICAgLy8gcmVzZXQgZXhwaXJhdGlvbiBkYXRlXHJcbiAgICAgIHRoaXMuY29va2llcy5zZXQodGhpcy5ncmlkSUQsIHNhdmVkQ29uZmlnU3RyLCAzNjUpO1xyXG5cclxuICAgICAgLy8gcGFyc2UgY29va2llIHZhbHVlIHRvIHR5cGVzY3JpcHQgY29uc3RcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWcgPSBKU09OLnBhcnNlKHRoaXMuY29va2llcy5nZXQodGhpcy5ncmlkSUQpKSBhcyBHcmlkQ29uZmlnO1xyXG4gICAgICBpZiAodHlwZW9mIHNhdmVkQ29uZmlnID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBzYXZlZENvbmZpZztcclxuICAgICAgICB0aGlzLmNvbmZpZ0NoYW5nZS5lbWl0KHRoaXMuY29uZmlnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXhDb29raWUoKSB7XHJcbiAgICBsZXQgYWxsb3dJbmRleFBhZ2VDb29raWUgPSBmYWxzZTtcclxuICAgIGxldCBjb25zZW50Q29va2llID0gdGhpcy5jb29raWVzLmdldCgnT3B0YW5vbkNvbnNlbnQnKTtcclxuICAgIGlmIChjb25zZW50Q29va2llICE9IFwiXCIpIHtcclxuICAgICAgbGV0IGdyb3VwSW5kZXggPSBjb25zZW50Q29va2llLmluZGV4T2YoJ2dyb3Vwcz0nKTtcclxuICAgICAgbGV0IGdyb3VwcyA9IGNvbnNlbnRDb29raWUuc3Vic3RyaW5nKGdyb3VwSW5kZXgpOyAvL3dpbGwgcmV0dXJuIHNvbWV0aGluZ2xpa2UgZ3JvdXBzPUMwMDAyOjAsQzAwMDE6MVxyXG4gICAgICBsZXQgZnVuY3Rpb25hbEdyb3VwSW5kZXggPSBncm91cHMuaW5kZXhPZignQzAwMDk6Jyk7XHJcbiAgICAgIGlmIChmdW5jdGlvbmFsR3JvdXBJbmRleCAhPSAtMSkge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5VmFsdWUgPSBncm91cHMuc3Vic3RyaW5nKGZ1bmN0aW9uYWxHcm91cEluZGV4ICsgNiwgZnVuY3Rpb25hbEdyb3VwSW5kZXggKyA3KTtcclxuICAgICAgICBpZiAoTnVtYmVyKGNhdGVnb3J5VmFsdWUpID09PSAxKSB7XHJcbiAgICAgICAgICBhbGxvd0luZGV4UGFnZUNvb2tpZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWxsb3dJbmRleFBhZ2VDb29raWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RhYmxlJyk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2tib3hTZWxlY3QpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlKCk7XHJcbiAgICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlICYmIHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHdoaWxlICh0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dQYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGVja0NoZWNrYm94U3RhdGUoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuZ3JpZElEKSB7XHJcbiAgICAgIHRoaXMuZ3JpZElEID0gdGhpcy51dGlsU2VydmljZS51dWlkdjQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV4cG9ydEV2ZW50LnN1YnNjcmliZSgoY29uZmlnOiBHcmlkRXhwQ29uZmlnKSA9PiB7XHJcblxyXG4gICAgICBzd2l0Y2ggKGNvbmZpZy5leHBvcnRUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlBkZjpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9QZGYoY29uZmlnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5Yc2x4OlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb0V4Y2VsKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuUG5nOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb1BuZyhjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0Q29tcGxldGVkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydENvbXBsZXRlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmRhdGEpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlKCk7XHJcbiAgICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydFRvUG5nKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnV0aWxTZXJ2aWNlLmV4cG9ydFRhYmxlKCdwbmcnLCBmaWxlTmFtZSwgdGhpcy5ncmlkSUQpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VG9FeGNlbChmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgY29uc3QgZGF0YVRvRXhwb3J0OiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgZmllbGRzID0gdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRhZyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKTtcclxuXHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0ge307XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGlmICghZmllbGQuaGlkZGVuKSB7XHJcbiAgICAgICAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0SXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gc2VsZWN0SXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBpdGVtW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0LmV4cG9ydFZhbHVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRhdGFUb0V4cG9ydC5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyBmaWxlTmFtZTtcclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydEFzRXhjZWxGaWxlKGRhdGFUb0V4cG9ydCwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VG9QZGYoY29uZmlnKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgaWYgKCFjb25maWcudXNlVmVyc2lvbjIpIHtcclxuICAgICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRUYWJsZShcclxuICAgICAgICAncGRmJyxcclxuICAgICAgICBjb25maWcuZmlsZU5hbWUsXHJcbiAgICAgICAgdGhpcy5ncmlkSUQsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydENvbXBhbnlOYW1lLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRVc2VyTmFtZSxcclxuICAgICAgICBjb25maWcuZXhwb3J0VGl0bGUsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRUYWJsZUN1c3RvbUhlaWdodFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZXhwb3J0Q29uZmlnID0ge1xyXG4gICAgICAgIGNoZWNrYm94U2VsZWN0OiB0aGlzLmNoZWNrYm94U2VsZWN0LFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbXM6IHRoaXMuY2hlY2tib3hTZWxlY3QgPyB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSA6IFtdLFxyXG4gICAgICAgIGZpbGVOYW1lOiBjb25maWcuZmlsZU5hbWUsXHJcbiAgICAgICAgZGF0ZVBpcGU6IHRoaXMuZGF0ZVBpcGUsXHJcbiAgICAgICAgZWxlbUlEOiB0aGlzLmdyaWRJRCxcclxuICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXHJcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcclxuICAgICAgICBjb2x1bW5TdHlsZXM6IGNvbmZpZy5jb2x1bW5TdHlsZXMsXHJcbiAgICAgICAgZXhwb3J0Q29tcGFueU5hbWU6IGNvbmZpZy5leHBvcnRDb21wYW55TmFtZSxcclxuICAgICAgICBleHBvcnRVc2VyTmFtZTogY29uZmlnLmV4cG9ydFVzZXJOYW1lLFxyXG4gICAgICAgIGV4cG9ydFRpdGxlOiBjb25maWcuZXhwb3J0VGl0bGUsXHJcbiAgICAgICAgZXhwb3J0Q29tcGFueUxvZ29Vcmw6IGNvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybCA/IGNvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybCA6ICdhc3NldHMvUFRvQl9sb2dvLnBuZycsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0VGFibGV2MihcclxuICAgICAgICBleHBvcnRDb25maWdcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICB0YXBIYW5kbGVyKCRldmVudCwgZGF0YSl7XHJcbiAgICB0aGlzLnRhcENvdW50ICs9IDE7XHJcbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnRhcENvdW50ID09PSAxKSB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5jbGlja1JvdyhudWxsLCBkYXRhICk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50YXBDb3VudCA9IDA7XHJcbiAgICB9LCA2MDAgKTtcclxuICAgIGlmICh0aGlzLnRhcENvdW50ID4gMSkge1xyXG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kYmxDbGlja1JvdyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjbGlja3MgPSAwO1xyXG4gIGNsaWNrUm93KGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMuY2xpY2tzKys7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrcyA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Um93KGV2ZW50LCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5jbGlja3MgPiAxKSB7XHJcbiAgICAgICAgdGhpcy5kYmxDbGlja1JvdyhkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNsaWNrcyA9IDA7XHJcbiAgICB9LCAzMDApO1xyXG4gIH1cclxuXHJcbiAgcHJldmVudERlZmF1bHQoJGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhldmVudDogTW91c2VFdmVudCwgZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm9uY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICAgIC8qIEdldCBpbmRleCBvZiBzZWxlY3Rpb24gKi9cclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja2JveENhY2hlLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tib3hTZWxlY3QpIHtcclxuICAgICAgaWYgKGV2ZW50ICYmICh0b0Jvb2xlYW4oZXZlbnQuY3RybEtleSkgfHwgdG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSkpIHtcclxuICAgICAgICAvKiBTaGlmdCBTZWxlY3Rpb24gKi9cclxuICAgICAgICBpZiAodG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RNdWx0aXBsZShpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0aW9uKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFNlbGVjdCBlbGVtZW50ICovXHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkID0gZXZlbnQgJiYgdG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSA/IHRydWUgOiAhdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZDtcclxuICAgICAgICAvKiBTYXZlIGxhc3QgaW5kZXggc2VsZWN0ZWQgKi9cclxuICAgICAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPyBpbmRleCA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKTtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5vcmRlciA9IHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPyB0aGlzLm9yZGVyKysgOiAtMTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChzZWxlY3RlZEl0ZW1zLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGEpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGlvbihkYXRhKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCAmJiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gIT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pXHJcbiAgICAgIC5mb3JFYWNoKGVsZW0gPT4geyBlbGVtLnNlbGVjdGVkID0gZmFsc2UsIGVsZW0ub3JkZXIgPSAtMSB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdE11bHRpcGxlKGN1cnJlbnRJZHgpIHtcclxuICAgIGlmICh0aGlzLmxhc3RJZHhTZWxlY3RlZCAhPT0gbnVsbCkge1xyXG4gICAgICB3aGlsZSAoY3VycmVudElkeCAhPT0gdGhpcy5sYXN0SWR4U2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5sYXN0SWR4U2VsZWN0ZWRdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5sYXN0SWR4U2VsZWN0ZWRdLm9yZGVyID0gdGhpcy5vcmRlcisrO1xyXG4gICAgICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gY3VycmVudElkeCA+IHRoaXMubGFzdElkeFNlbGVjdGVkID8gdGhpcy5sYXN0SWR4U2VsZWN0ZWQgKyAxIDogdGhpcy5sYXN0SWR4U2VsZWN0ZWQgLSAxO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbY3VycmVudElkeF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbY3VycmVudElkeF0ub3JkZXIgPSB0aGlzLm9yZGVyKys7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IGN1cnJlbnRJZHg7XHJcbiAgfVxyXG5cclxuICBkYmxDbGlja1JvdyhkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMub25kbGNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm1EYXRlKGRhdGUpIHtcclxuICAgIGNvbnN0IG0gPSBtb21lbnQoZGF0ZSk7XHJcbiAgICBtLmxvY2FsZSh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKTtcclxuICAgIHJldHVybiBtLmZvcm1hdCh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ0REL01NL1lZWVknIDogJ01NL0REL1lZWVknKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hTZWxlY3Qge1xyXG4gIGRhdGE6IGFueTtcclxuICBzZWxlY3RlZDogYm9vbGVhbiB8IG51bWJlcjtcclxuICBvcmRlcj86IG51bWJlcjtcclxufVxyXG4iLCI8ZGl2IGlkPVwie3tncmlkSUR9fVwiPlxyXG4gIDxuei10YWJsZSAjZ3JpZENvbXBvbmVudCBbbnpEYXRhXT1cImRhdGFcIiBbbnpTaG93VG90YWxdPVwic2hvd1RvdGFsXCIgW256UGFnZVNpemVPcHRpb25zXT1cInBhZ2VTaXplT3B0aW9uc1wiXHJcbiAgICBbbnpWaXJ0dWFsSXRlbVNpemVdPVwidmlydHVhbEl0ZW1TaXplXCIgW256TG9hZGluZ0RlbGF5XT1cImxvYWRpbmdEZWxheVwiXHJcbiAgICBbbnpMb2FkaW5nSW5kaWNhdG9yXT1cImxvYWRpbmdJbmRpY2F0b3JcIiBbbnpUb3RhbF09XCJ0b3RhbFwiIFtuelRpdGxlXT1cInRpdGxlXCIgW256Rm9vdGVyXT1cImZvb3RlclwiXHJcbiAgICBbbnpOb1Jlc3VsdF09XCJub1Jlc3VsdFwiIFtueldpZHRoQ29uZmlnXT1cIndpZHRoQ29uZmlnXCIgW256UGFnZUluZGV4XT1cInBhZ2VJbmRleFwiIFtuelBhZ2VTaXplXT1cInBhZ2VTaXplXCJcclxuICAgIFtuelBhZ2luYXRpb25Qb3NpdGlvbl09XCJwYWdpbmF0aW9uUG9zaXRpb25cIiBbbnpTY3JvbGxdPVwic2Nyb2xsXCIgW256RnJvbnRQYWdpbmF0aW9uXT1cImZyb250UGFnaW5hdGlvblwiXHJcbiAgICBbbnpUZW1wbGF0ZU1vZGVdPVwidGVtcGxhdGVNb2RlXCIgW256U2hvd1BhZ2luYXRpb25dPVwic2hvd1BhZ2luYXRpb25cIiBbbnpMb2FkaW5nXT1cImxvYWRpbmdcIlxyXG4gICAgW256U2hvd1NpemVDaGFuZ2VyXT1cInNob3dTaXplQ2hhbmdlclwiIFtuekhpZGVPblNpbmdsZVBhZ2VdPVwiaGlkZU9uU2luZ2xlUGFnZVwiIFtuelNob3dRdWlja0p1bXBlcl09XCJzaG93UXVpY2tKdW1wZXJcIlxyXG4gICAgW256U2ltcGxlXT1cInNpbXBsZVwiIGNsYXNzPVwiY21hY3MtdGFibGVcIj5cclxuICAgIDx0aGVhZCAqbmdJZj1cIiFkYXRhVGFibGVcIj5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0aCAqbmdJZj1cImNoZWNrYm94U2VsZWN0XCJcclxuICAgICAgICAgICAgbnpXaWR0aD1cIjQwcHhcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiJzQwcHgnXCJcclxuICAgICAgICAgICAgW3N0eWxlLm1pbldpZHRoXT1cIic0MHB4J1wiPlxyXG4gICAgICAgICAgPGxhYmVsIGNtYWNzLWNoZWNrYm94IFsobmdNb2RlbCldPVwic2VsZWN0ZWRcIiBbaW5kZXRlcm1pbmF0ZV09XCJpc0luZGV0ZXJtaW5hdGVcIlxyXG4gICAgICAgICAgICAoY2hlY2tlZENoYW5nZSk9b25DaGVja2JveEFsbENoYW5nZSgkZXZlbnQpPjwvbGFiZWw+XHJcbiAgICAgICAgPC90aD5cclxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpXCJcclxuICAgICAgICAgICAgW256U2hvd1NvcnRdPVwiZmllbGQuc2hvd1NvcnRcIlxyXG4gICAgICAgICAgICBbKG56U29ydCldPVwiZmllbGQuc2hvd1NvcnQgPyBmaWVsZC5zb3J0T3JkZXIgOiBkZWZhdWx0U29ydE9yZGVyXCJcclxuICAgICAgICAgICAgKG56U29ydE9yZGVyQ2hhbmdlKT1cInNvcnQoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSlcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiZmllbGQubWluV2lkdGggPyBmaWVsZC5taW5XaWR0aCA6IGZpZWxkLndpZHRoXCJcclxuICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cImZpZWxkLndpZHRoXCJcclxuICAgICAgICAgICAgW256V2lkdGhdPVwiZmllbGQud2lkdGhcIj5cclxuICAgICAgICAgIDxkaXYgW3N0eWxlLm1heFdpZHRoXT1cImdldEhlYWRlck1heFdpZHRoKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsLWhlYWRlcl09XCIhd3JhcExpbmVzXCJcclxuICAgICAgICAgICAgICAgPnt7ZmllbGQuZGlzcGxheX19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RoPlxyXG4gICAgICAgIDx0aCBbc3R5bGUubWluV2lkdGhdPVwiJzEwNXB4J1wiXHJcbiAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInMTA1cHgnXCJcclxuICAgICAgICAgICAgW256V2lkdGhdPVwiJzEwNXB4J1wiICpuZ0lmPVwic2hvd1JhdGVcIj48L3RoPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90aGVhZD5cclxuICAgIDx0Ym9keT5cclxuICAgICAgPHRyICpuZ0Zvcj1cImxldCBkYXRhIG9mIGdyaWRDb21wb25lbnQuZGF0YTsgaW5kZXggYXMgaVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwiY2xpY2tSb3coJGV2ZW50LCBkYXRhKVwiXHJcbiAgICAgICAgICAodG91Y2hzdGFydCk9XCJ0YXBIYW5kbGVyKCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1uby1zZWxlY3Rpb25cIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC10YWJsZS1zZWxlY3RlZC1yb3ddPVwiaXNSb3dTZWxlY3RlZChkYXRhKVwiXHJcbiAgICAgICAgICAoY29udGV4dG1lbnUpPVwiY29udGV4dE1lbnUoJGV2ZW50LCBjb250ZXh0TWVudVRlbXBsYXRlKVwiPlxyXG5cclxuICAgICAgICA8Y21hY3MtZHJvcGRvd24tbWVudSAjY29udGV4dE1lbnVUZW1wbGF0ZT1cImNtYWNzRHJvcGRvd25NZW51XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRleHRtZW51XCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgZGF0YTogZGF0YSB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9jbWFjcy1kcm9wZG93bi1tZW51PlxyXG5cclxuICAgICAgICA8dGQgKm5nSWY9XCJjaGVja2JveFNlbGVjdFwiIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJjaGVja2JveENhY2hlW2dldEluZGV4KGRhdGFbY29uZmlnLmZpZWxkSWRdKV0uc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAoY2hlY2tlZENoYW5nZSk9XCJvbkNoZWNrYm94Q2hhbmdlKCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgICAqbmdJZj1cImRhdGFbY29uZmlnLmZpZWxkSWRdICYmIGNoZWNrYm94Q2FjaGVbZ2V0SW5kZXgoZGF0YVtjb25maWcuZmllbGRJZF0pXVwiPjwvbGFiZWw+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBmaVwiIFtuZ0NsYXNzXT1cIihpc0NlbGRUeXBlRGVmYXVsdChmaWVsZCkgJiYgaW5MaW5lRWRpdCAmJiAhaXNSZWFkT25seShmaWVsZCkpID8gWydlZGl0YWJsZS1yb3cnLCAnY21hY3MtdGFibGUtY2VsbC0nICsgZmllbGQucHJvcGVydHldIDogWydjbWFjcy10YWJsZS1jZWxsLScgKyBmaWVsZC5wcm9wZXJ0eV1cIiBbc3R5bGUubWF4V2lkdGhdPVwiJzEwMCUnXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNDZWxkVHlwZURlZmF1bHQoZmllbGQpICYmIGluTGluZUVkaXQgJiYgIWlzUmVhZE9ubHkoZmllbGQpOyBlbHNlIGNvbXBvbmVudFRwbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdGFibGUtY2VsbFwiIFtzdHlsZS5tYXhXaWR0aF09XCInMTAwJSdcIlxyXG4gICAgICAgICAgICAgICpuZ0lmPVwiKGVkaXRJZCAhPT0gZGF0YVtjb25maWcuZmllbGRJZF0gfHwgcHJvcGVydHkgIT09IGZpZWxkLnByb3BlcnR5KTsgZWxzZSBlZGl0VHBsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRhYmxlLWNlbGwtdmFsdWUtd3JhcFwiIFtzdHlsZS5tYXhXaWR0aF09XCInMTAwJSdcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNEYXRlKGZpZWxkKSAmJiAhaXNTZWxlY3QoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIHN0eWxlPVwid29yZC1icmVhazogYnJlYWstd29yZDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWZpZWxkLnNob3dUb29sdGlwIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSBudWxsIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSB1bmRlZmluZWQgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09ICcnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGRhdGFbZmllbGQucHJvcGVydHldICE9PSBudWxsICYmIGRhdGFbZmllbGQucHJvcGVydHldICE9PSB1bmRlZmluZWQgJiYgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gIT09ICcnID8gZGF0YVtmaWVsZC5wcm9wZXJ0eV0gOiBmaWVsZC5wbGFjZWhvbGRlciB9fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCIgc3R5bGU9XCJ3b3JkLWJyZWFrOiBicmVhay13b3JkO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5zaG93VG9vbHRpcCAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XSEhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoKVwiIGNtYWNzLXRvb2x0aXAgW3RpdGxlXT1cImRhdGFbZmllbGQucHJvcGVydHldXCIgcGxhY2VtZW50PVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyBkYXRhW2ZpZWxkLnByb3BlcnR5XSB9fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2IFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBzdHlsZT1cIndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XCI+e3sgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gfX08L2Rpdj4gLS0+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0RhdGUoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIHN0eWxlPVwid29yZC1icmVhazogYnJlYWstd29yZDtcIj57eyBkYXRhW2ZpZWxkLnByb3BlcnR5XSAgfCBkYXRlOiBmaWVsZC5kYXRlRm9ybWF0fX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzU2VsZWN0KGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBzdHlsZT1cIndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XCI+e3sgZ2V0TGFiZWwoZGF0YSwgZmllbGQpIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblVJU21hbGwtRWRpdCBjbWFjcy10YWJsZS1lZGl0LWljb25cIiAoY2xpY2spPVwic3RhcnRFZGl0KGRhdGFbY29uZmlnLmZpZWxkSWRdLCBmaWVsZC5wcm9wZXJ0eSwgJGV2ZW50KVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZWRpdFRwbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgI2ZpZWxkVHlwZUlucHV0ICpuZ0lmPVwiaXNTdHJpbmcoZmllbGQpXCIgdHlwZT1cInRleHRcIiBjbWFjcy1pbnB1dCBjbGFzcz1cInRhYmxlaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSlcIiAvPlxyXG5cclxuICAgICAgICAgICAgICA8Y21hY3MtaW5wdXQtbnVtYmVyICNmaWVsZFR5cGVJbnB1dE51bWJlciBpZD1cInRlc3RpbmcyXCIgY2xhc3M9XCJ0YWJsZWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpc051bWJlcihmaWVsZCkgJiYgIWlzU2VsZWN0KGZpZWxkKVwiIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAgICAgICAgW2NtYWNzU3RlcF09XCIxXCIgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSlcIiAobmdNb2RlbENoYW5nZSk9XCJuZ01vZGVsQ2hhbmdlKGkpXCI+PC9jbWFjcy1pbnB1dC1udW1iZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxsYWJlbCAjZmllbGRUeXBlQm9vbCBjbWFjcy1jaGVja2JveCAqbmdJZj1cImlzQm9vbGVhbihmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLnByb3BlcnR5XVwiIChuZ01vZGVsQ2hhbmdlKT1cImVuZEVkaXRNb2RlTmdNb2RlbChpKVwiPjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxjbWFjcy1kYXRlLXBpY2tlclxyXG4gICAgICAgICAgICAgICAgI2ZpZWxkVHlwZURhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNEYXRlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbZm9ybWF0XT1cIidNTS9kZC95eXl5J1wiXHJcbiAgICAgICAgICAgICAgICBbYWxsb3dDbGVhcl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGFibGVpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImVuZEVkaXRNb2RlTmdNb2RlbChpKVwiPlxyXG4gICAgICAgICAgICAgIDwvY21hY3MtZGF0ZS1waWNrZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxjbWFjcy1zZWxlY3QgI2ZpZWxkVHlwZVNlbGVjdCAqbmdJZj1cImlzU2VsZWN0KGZpZWxkKVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgc2hvd1NlYXJjaCBjbGFzcz1cInRhYmxlaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCIgKG5nTW9kZWxDaGFuZ2UpPVwiZW5kRWRpdE1vZGVOZ01vZGVsKGkpXCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBzRGF0YSBvZiBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YVwiIGxhYmVsPVwie3tzRGF0YVtmaWVsZC5zZWxlY3QubGFiZWxdfX1cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7c0RhdGFbZmllbGQuc2VsZWN0LnZhbHVlXX19XCI+PC9jbWFjcy1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY29tcG9uZW50VHBsPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICN0ZW1wbGF0ZVJlZkNlbGQgKm5nSWY9XCJpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImRhdGFbZmllbGQucHJvcGVydHldLnJlZjsgY29udGV4dDogZGF0YVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dFwiPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzQ2VsZFR5cGVCdXR0b24oZmllbGQpXCIgYXJpYS1sYWJlbD1cInt7ZmllbGQuZGlzcGxheX19XCIgcm9sZT1cImJ1dHRvblwiIGNtYWNzLWJ1dHRvbiB0eXBlPVwie3tmaWVsZC5idXR0b24uc3R5bGV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1vbkJ1dHRvbkNsaWNrKGRhdGEpPlxyXG4gICAgICAgICAgICAgIDxpICpuZ0lmPVwiIWlzVW5kZWZpbmVkKGZpZWxkLmJ1dHRvbi5pY29uKTsgZWxzZSB0aXRsZVRwbFwiIG56LWljb24gdHlwZT1cInt7ZmllbGQuYnV0dG9uLmljb259fVwiPjwvaT5cclxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3RpdGxlVHBsPnt7ZmllbGQuZGlzcGxheX19PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNDZWxkVHlwZVRhZyhmaWVsZCkgJiYgZmllbGQudGFnICE9PSB1bmRlZmluZWRcIiBbaWRdPVwiZ3JpZElEICsgJ2NvbHVtbicgKyBmaSArICdyb3cnICsgaVwiPlxyXG4gICAgICAgICAgICAgIDxjbWFjcy10YWcgW2NvbG9yXT1cImZpZWxkLnRhZy5jb2xvciA/IGRhdGFbZmllbGQudGFnLmNvbG9yXSA6IG51bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2NtYWNzR3JpZFR5cGVdPVwiZmllbGQudGFnLmNtYWNzR3JpZFR5cGUgPyBkYXRhW2ZpZWxkLnRhZy5jbWFjc0dyaWRUeXBlXSA6IG51bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2NtYWNzU3RhdHVzVHlwZV09XCJmaWVsZC50YWcuY21hY3NTdGF0dXNUeXBlID8gZGF0YVtmaWVsZC50YWcuY21hY3NTdGF0dXNUeXBlXSA6IG51bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2NtYWNzUHJpb3JpdHlUeXBlXT1cImZpZWxkLnRhZy5jbWFjc1ByaW9yaXR5VHlwZSA/IGRhdGFbZmllbGQudGFnLmNtYWNzUHJpb3JpdHlUeXBlXSA6IG51bGxcIj5cclxuICAgICAgICAgICAgICAgIHt7ICBkYXRhW2ZpZWxkLnByb3BlcnR5XSB9fVxyXG4gICAgICAgICAgICAgIDwvY21hY3MtdGFnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIoIWluTGluZUVkaXQgfHwgIGlzUmVhZE9ubHkoZmllbGQpKSAmJiBpc0RhdGUoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCIgc3R5bGU9XCJ3b3JkLWJyZWFrOiBicmVhay13b3JkO1wiPnt7IHRyYW5zZm9ybURhdGUoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pIH19PC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKCFpbkxpbmVFZGl0IHx8ICBpc1JlYWRPbmx5KGZpZWxkKSkgJiYgIWlzQ2VsZFR5cGVCdXR0b24oZmllbGQpICYmICFpc0NlbGRUeXBlVGFnKGZpZWxkKSAmJiAhaXNDZWxkVHlwZVRlbXBsYXRlUmVmKGZpZWxkKSAmJiAhaXNEYXRlKGZpZWxkKSAmJiAhaXNTZWxlY3QoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCIgc3R5bGU9XCJ3b3JkLWJyZWFrOiBicmVhay13b3JkO1wiXHJcbiAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiFmaWVsZC5zaG93VG9vbHRpcCB8fCBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gbnVsbCB8fCBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gdW5kZWZpbmVkIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSAnJ1wiIFtzdHlsZS5tYXhXaWR0aF09XCJnZXRNYXhXaWR0aCgpXCI+XHJcbiAgICAgICAgICAgICAgICB7eyBkYXRhW2ZpZWxkLnByb3BlcnR5XSAhPT0gbnVsbCAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XSAhPT0gdW5kZWZpbmVkICYmIGRhdGFbZmllbGQucHJvcGVydHldICE9PSAnJyA/IGRhdGFbZmllbGQucHJvcGVydHldIDogZmllbGQucGxhY2Vob2xkZXIgfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBzdHlsZT1cIndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XCJcclxuICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuc2hvd1Rvb2x0aXAgJiYgZGF0YVtmaWVsZC5wcm9wZXJ0eV0hIVwiIFtzdHlsZS5tYXhXaWR0aF09XCJnZXRNYXhXaWR0aCgpXCJcclxuICAgICAgICAgICAgICAgICAgIGNtYWNzLXRvb2x0aXAgW3RpdGxlXT1cImRhdGFbZmllbGQucHJvcGVydHldXCIgcGxhY2VtZW50PVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIHt7IGRhdGFbZmllbGQucHJvcGVydHldIH19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPCEtLSA8ZGl2IFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBzdHlsZT1cIndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XCI+e3sgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gfX08L2Rpdj4gLS0+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzU2VsZWN0KGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIHN0eWxlPVwid29yZC1icmVhazogYnJlYWstd29yZDtcIj57eyBnZXRMYWJlbChkYXRhLCBmaWVsZCkgfX08L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkICpuZ0lmPVwic2hvd1JhdGVcIiBjbGFzcz1cImNtYWNzLXRhYmxlLXJhdGluZ1wiPlxyXG4gICAgICAgICAgPG56LXJhdGUgW25nTW9kZWxdPVwiZGF0YVtjb25maWcuZmllbGRSYXRlXVwiXHJcbiAgICAgICAgICAgICAgICAgICBbbnpDb3VudF09J3JhdGVDb3VudCdcclxuICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmF0ZUNoYW5nZSgkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICAgICAgICAgIFtuekRpc2FibGVkXT1cIiFpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJhdGVDbGljaygkZXZlbnQpXCI+PC9uei1yYXRlPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvbnotdGFibGU+XHJcbjwvZGl2PlxyXG4iXX0=