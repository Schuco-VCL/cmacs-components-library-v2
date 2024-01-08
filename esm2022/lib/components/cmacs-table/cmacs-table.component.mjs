import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, delay, repeat } from 'rxjs/operators';
import { TemplateType } from '../core/enums/TemplateType.enum';
import { CeldType } from '../core/enums/CeldType.enum';
import { ExportType } from '../core/enums/export-type.enum';
import moment from 'moment';
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
import * as i8 from "ng-zorro-antd/resizable";
import * as i9 from "ng-zorro-antd/table";
import * as i10 from "ng-zorro-antd/rate";
import * as i11 from "@angular/forms";
import * as i12 from "ng-zorro-antd/core/transition-patch";
import * as i13 from "ng-zorro-antd/icon";
import * as i14 from "../cmacs-tag/tag.component";
import * as i15 from "../cmacs-tooltip/tooltip";
import * as i16 from "../cmacs-checkbox/cmacs-checkbox.component";
import * as i17 from "../cmacs-button/cmacs-button.component";
import * as i18 from "../cmacs-select/cmacs-select.component";
import * as i19 from "../cmacs-select/cmacs-option.component";
import * as i20 from "../cmacs-input/cmacs-input.directive";
import * as i21 from "../cmacs-dropdown/dropdown-menu.component";
import * as i22 from "../cmacs-date-picker/date-picker.component";
import * as i23 from "../cmacs-input-number/cmacs-input-number.component";
import * as i24 from "../cmacs-button-favorite/cmacs-button-favorite.component";
const _c0 = ["renderItemTemplate"];
const _c1 = ["fieldTypeInput"];
const _c2 = ["fieldTypeInputNumber"];
const _c3 = ["fieldTypeDatePicker"];
const _c4 = ["fieldTypeSelect"];
const _c5 = ["fieldTypeBool"];
function CmacsTableComponent_thead_3_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 8)(1, "label", 9);
    i0.ɵɵlistener("ngModelChange", function CmacsTableComponent_thead_3_th_2_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.selected = $event); })("checkedChange", function CmacsTableComponent_thead_3_th_2_Template_label_checkedChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.onCheckboxAllChange($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r3.selected)("indeterminate", ctx_r3.isIndeterminate);
} }
function CmacsTableComponent_thead_3_th_3_nz_resize_handle_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-resize-handle", 12);
    i0.ɵɵelement(1, "div", 13);
    i0.ɵɵelementEnd();
} }
const _c6 = function () { return ["ascend", "descend"]; };
function CmacsTableComponent_thead_3_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵlistener("nzResizeEnd", function CmacsTableComponent_thead_3_th_3_Template_th_nzResizeEnd_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r12); const field_r9 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.onResize($event, field_r9.property, field_r9)); })("nzSortOrderChange", function CmacsTableComponent_thead_3_th_3_Template_th_nzSortOrderChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r12); const field_r9 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(field_r9.showSort ? field_r9.sortOrder : ctx_r13.defaultSortOrder = $event); })("nzSortOrderChange", function CmacsTableComponent_thead_3_th_3_Template_th_nzSortOrderChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r12); const field_r9 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.sort($event, field_r9.property)); });
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsTableComponent_thead_3_th_3_nz_resize_handle_3_Template, 2, 0, "nz-resize-handle", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r9 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("min-width", field_r9.minWidth ? field_r9.minWidth : field_r9.width)("max-width", field_r9.width);
    i0.ɵɵclassProp("cmacs-table-sorted-null", field_r9.showSort && !field_r9.sortOrder)("cmacs-table-sorted-ascend", field_r9.showSort && field_r9.sortOrder === "ascend")("cmacs-table-sorted-descend", field_r9.showSort && field_r9.sortOrder === "descend");
    i0.ɵɵproperty("nzDisabled", !field_r9.resizable)("nzMinWidth", field_r9.minWidth ? field_r9.minWidth : 100)("nzMaxWidth", field_r9.maxWidth ? field_r9.maxWidth : 500)("nzShowSort", field_r9.showSort)("nzSortDirections", i0.ɵɵpureFunction0(23, _c6))("nzSortOrder", field_r9.showSort ? field_r9.sortOrder : ctx_r4.defaultSortOrder)("nzWidth", field_r9.width);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r4.getHeaderMaxWidth(field_r9));
    i0.ɵɵclassProp("cmacs-table-overflow-cell-header", !ctx_r4.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", field_r9.display, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r9.resizable);
} }
function CmacsTableComponent_thead_3_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 14);
} if (rf & 2) {
    i0.ɵɵstyleProp("min-width", "105px")("max-width", "105px");
    i0.ɵɵproperty("nzWidth", "105px");
} }
function CmacsTableComponent_thead_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead")(1, "tr");
    i0.ɵɵtemplate(2, CmacsTableComponent_thead_3_th_2_Template, 2, 6, "th", 5);
    i0.ɵɵtemplate(3, CmacsTableComponent_thead_3_th_3_Template, 4, 24, "th", 6);
    i0.ɵɵtemplate(4, CmacsTableComponent_thead_3_th_4_Template, 1, 5, "th", 7);
    i0.ɵɵelementEnd()();
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
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 22);
    i0.ɵɵlistener("ngModelChange", function CmacsTableComponent_tr_5_td_4_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const data_r15 = i0.ɵɵnextContext(2).$implicit; const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.checkboxCache[ctx_r22.getIndex(data_r15[ctx_r22.config.fieldId])].selected = $event); })("checkedChange", function CmacsTableComponent_tr_5_td_4_label_1_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const data_r15 = i0.ɵɵnextContext(2).$implicit; const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.onCheckboxChange($event, data_r15)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r15 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r21 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r21.checkboxCache[ctx_r21.getIndex(data_r15[ctx_r21.config.fieldId])].selected);
} }
function CmacsTableComponent_tr_5_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_4_label_1_Template, 1, 1, "label", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r18 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r15[ctx_r18.config.fieldId] && ctx_r18.checkboxCache[ctx_r18.getIndex(data_r15[ctx_r18.config.fieldId])]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(4).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r40 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r40.getMaxWidth());
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r40.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r15[field_r29.property] !== null && data_r15[field_r29.property] !== undefined && data_r15[field_r29.property] !== "" ? data_r15[field_r29.property] : field_r29.placeholder, " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(4).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r41 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r41.getMaxWidth());
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r41.wrapLines);
    i0.ɵɵproperty("title", data_r15[field_r29.property]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r15[field_r29.property], " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_div_1_Template, 2, 5, "div", 31);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_div_2_Template, 2, 6, "div", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r29.showTooltip || data_r15[field_r29.property] === null || data_r15[field_r29.property] === undefined || data_r15[field_r29.property] === "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r29.showTooltip && data_r15[field_r29.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r38 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r38.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 3, data_r15[field_r29.property], field_r29.dateFormat));
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r39 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r39.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r39.getLabel(data_r15, field_r29));
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 29);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(3, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_3_Template, 4, 6, "ng-container", 3);
    i0.ɵɵtemplate(4, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_4_Template, 3, 3, "ng-container", 3);
    i0.ɵɵelementStart(5, "i", 30);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_Template_i_click_5_listener($event) { i0.ɵɵrestoreView(_r54); const field_r29 = i0.ɵɵnextContext(2).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; const ctx_r52 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r52.startEdit(data_r15[ctx_r52.config.fieldId], field_r29.property, $event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r34 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r34.isDate(field_r29) && !ctx_r34.isSelect(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r34.isDate(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r34.isSelect(field_r29));
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 40, 41);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r64); const ctx_r63 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r63.preventDefault($event)); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r64); const ctx_r65 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r65.preventDefault($event)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r64); const field_r29 = i0.ɵɵnextContext(3).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView((data_r15[field_r29.property] = $event)); })("keyup", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r64); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r69 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r69.endEditMode($event, i_r16)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r15[field_r29.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 42, 43);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r75); const ctx_r74 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r74.preventDefault($event)); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r75); const ctx_r76 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r76.preventDefault($event)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r75); const field_r29 = i0.ɵɵnextContext(3).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView((data_r15[field_r29.property] = $event)); })("keyup", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r75); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r80 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r80.endEditMode($event, i_r16)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r75); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r82 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r82.ngModelChange(i_r16)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r15[field_r29.property])("cmacsStep", 1);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 44, 45);
    i0.ɵɵlistener("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_label_2_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r89); const field_r29 = i0.ɵɵnextContext(3).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView((data_r15[field_r29.property] = $event)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_label_2_Template_label_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r89); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r91 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r91.endEditModeNgModel(i_r16)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r15[field_r29.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template(rf, ctx) { if (rf & 1) {
    const _r97 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-date-picker", 46, 47);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_click_0_listener($event) { i0.ɵɵrestoreView(_r97); const ctx_r96 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r96.preventDefault($event)); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r97); const ctx_r98 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r98.preventDefault($event)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r97); const field_r29 = i0.ɵɵnextContext(3).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView((data_r15[field_r29.property] = $event)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r97); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r102 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r102.endEditModeNgModel(i_r16)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("allowClear", true)("ngModel", data_r15[field_r29.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_cmacs_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 51);
} if (rf & 2) {
    const sData_r108 = ctx.$implicit;
    const field_r29 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵpropertyInterpolate("label", sData_r108[field_r29.select.label]);
    i0.ɵɵpropertyInterpolate("value", sData_r108[field_r29.select.value]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template(rf, ctx) { if (rf & 1) {
    const _r111 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-select", 48, 49);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_click_0_listener($event) { i0.ɵɵrestoreView(_r111); const ctx_r110 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r110.preventDefault($event)); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r111); const ctx_r112 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r112.preventDefault($event)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r111); const field_r29 = i0.ɵɵnextContext(3).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView((data_r15[field_r29.property] = $event)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r111); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r116 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r116.endEditModeNgModel(i_r16)); });
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_cmacs_option_2_Template, 1, 2, "cmacs-option", 50);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r15[field_r29.property]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r29.select.selectData);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template, 2, 1, "input", 35);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template, 2, 2, "cmacs-input-number", 36);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_label_2_Template, 2, 1, "label", 37);
    i0.ɵɵtemplate(3, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template, 2, 2, "cmacs-date-picker", 38);
    i0.ɵɵtemplate(4, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template, 3, 2, "cmacs-select", 39);
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r36 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r36.isString(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r36.isNumber(field_r29) && !ctx_r36.isSelect(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r36.isBoolean(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r36.isDate(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r36.isSelect(field_r29));
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_Template, 6, 7, "div", 26);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_Template, 5, 5, "ng-template", null, 27, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r35 = i0.ɵɵreference(3);
    const field_r29 = i0.ɵɵnextContext().$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r31 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r31.editId !== data_r15[ctx_r31.config.fieldId] || ctx_r31.property !== field_r29.property)("ngIfElse", _r35);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, null, 54);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_0_ng_container_2_Template, 1, 0, "ng-container", 55);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", data_r15[field_r29.property].ref)("ngTemplateOutletContext", data_r15[field_r29.property].context);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 59);
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵpropertyInterpolate("type", field_r29.button.icon);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵtextInterpolate(field_r29.display);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r141 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 56);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r141); const data_r15 = i0.ɵɵnextContext(3).$implicit; const ctx_r139 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r139.onButtonClick(data_r15)); });
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_i_1_Template, 1, 1, "i", 57);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_ng_template_2_Template, 1, 1, "ng-template", null, 58, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r135 = i0.ɵɵreference(3);
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r124 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("aria-label", field_r29.display);
    i0.ɵɵpropertyInterpolate("type", field_r29.button.style);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r124.isUndefined(field_r29.button.icon))("ngIfElse", _r135);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r145 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "cmacs-button-favorite", 60);
    i0.ɵɵlistener("onChangedValue", function CmacsTableComponent_tr_5_td_5_ng_template_2_div_2_Template_cmacs_button_favorite_onChangedValue_1_listener($event) { i0.ɵɵrestoreView(_r145); const field_r29 = i0.ɵɵnextContext(2).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; const ctx_r143 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r143.onFavoriteChange($event, field_r29, data_r15)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", data_r15[field_r29.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_div_3_span_1_cmacs_tag_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cmacs-tag", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r150 = i0.ɵɵnextContext().$implicit;
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("color", field_r29.tag.color ? data_r15[field_r29.tag.color] : null)("cmacsGridType", field_r29.tag.cmacsGridType ? data_r15[field_r29.tag.cmacsGridType] : null)("cmacsStatusType", field_r29.tag.cmacsStatusType ? data_r15[field_r29.tag.cmacsStatusType] : null)("cmacsPriorityType", field_r29.tag.cmacsPriorityType ? data_r15[field_r29.tag.cmacsPriorityType] : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", tag_r150, " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_div_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_div_3_span_1_cmacs_tag_1_Template, 2, 5, "cmacs-tag", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r150 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", tag_r150.trim().length > 0);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 61);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_div_3_span_1_Template, 2, 1, "span", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r155 = i0.ɵɵnextContext(2);
    const fi_r30 = ctx_r155.index;
    const field_r29 = ctx_r155.$implicit;
    const ctx_r156 = i0.ɵɵnextContext();
    const i_r16 = ctx_r156.index;
    const data_r15 = ctx_r156.$implicit;
    const ctx_r126 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r126.gridID + "column" + fi_r30 + "row" + i_r16);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", data_r15[field_r29.property].split(","));
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r127 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r127.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r127.transformDate(data_r15[field_r29.property], field_r29.dateFormat));
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r159 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r159.getMaxWidth());
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r159.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r15[field_r29.property] !== null && data_r15[field_r29.property] !== undefined && data_r15[field_r29.property] !== "" ? data_r15[field_r29.property] : field_r29.placeholder, " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r160 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r160.getMaxWidth());
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r160.wrapLines);
    i0.ɵɵproperty("title", data_r15[field_r29.property]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r15[field_r29.property], " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_div_1_Template, 2, 5, "div", 31);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_div_2_Template, 2, 6, "div", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r29.showTooltip || data_r15[field_r29.property] === null || data_r15[field_r29.property] === undefined || data_r15[field_r29.property] === "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r29.showTooltip && data_r15[field_r29.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r129 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r129.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r129.getLabel(data_r15, field_r29));
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_0_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_Template, 4, 4, "button", 52);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_div_2_Template, 2, 1, "div", 3);
    i0.ɵɵtemplate(3, CmacsTableComponent_tr_5_td_5_ng_template_2_div_3_Template, 2, 2, "div", 53);
    i0.ɵɵtemplate(4, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_Template, 3, 3, "ng-container", 3);
    i0.ɵɵtemplate(5, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(6, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_6_Template, 3, 3, "ng-container", 3);
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext().$implicit;
    const ctx_r33 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r33.isCeldTypeTemplateRef(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r33.isCeldTypeButton(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r33.isCeldTypeButtonFavorite(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r33.isCeldTypeTag(field_r29) && field_r29.tag !== undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (!ctx_r33.inLineEdit || ctx_r33.isReadOnly(field_r29)) && ctx_r33.isDate(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (!ctx_r33.inLineEdit || ctx_r33.isReadOnly(field_r29)) && !ctx_r33.isCeldTypeButton(field_r29) && !ctx_r33.isCeldTypeButtonFavorite(field_r29) && !ctx_r33.isCeldTypeTag(field_r29) && !ctx_r33.isCeldTypeTemplateRef(field_r29) && !ctx_r33.isDate(field_r29) && !ctx_r33.isSelect(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r33.isSelect(field_r29));
} }
const _c7 = function (a1) { return ["editable-row", a1]; };
const _c8 = function (a0) { return [a0]; };
function CmacsTableComponent_tr_5_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 23);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_container_1_Template, 4, 2, "ng-container", 24);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_Template, 7, 7, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = ctx.$implicit;
    const _r32 = i0.ɵɵreference(3);
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "100%");
    i0.ɵɵproperty("ngClass", ctx_r19.isCeldTypeDefault(field_r29) && ctx_r19.inLineEdit && !ctx_r19.isReadOnly(field_r29) ? i0.ɵɵpureFunction1(5, _c7, "cmacs-table-cell-" + field_r29.property) : i0.ɵɵpureFunction1(7, _c8, "cmacs-table-cell-" + field_r29.property));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.isCeldTypeDefault(field_r29) && ctx_r19.inLineEdit && !ctx_r19.isReadOnly(field_r29))("ngIfElse", _r32);
} }
function CmacsTableComponent_tr_5_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r172 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 65)(1, "nz-rate", 66);
    i0.ɵɵlistener("ngModelChange", function CmacsTableComponent_tr_5_td_6_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r172); const data_r15 = i0.ɵɵnextContext().$implicit; const ctx_r170 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r170.onRateChange($event, data_r15)); })("click", function CmacsTableComponent_tr_5_td_6_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r172); const ctx_r173 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r173.onRateClick($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r15[ctx_r20.config.fieldRate])("nzCount", ctx_r20.rateCount)("nzDisabled", !ctx_r20.inLineEdit);
} }
const _c9 = function (a0) { return { data: a0 }; };
function CmacsTableComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r176 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 15);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_Template_tr_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r176); const data_r15 = restoredCtx.$implicit; const ctx_r175 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r175.clickRow($event, data_r15)); })("touchstart", function CmacsTableComponent_tr_5_Template_tr_touchstart_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r176); const data_r15 = restoredCtx.$implicit; const ctx_r177 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r177.tapHandler($event, data_r15)); })("contextmenu", function CmacsTableComponent_tr_5_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r176); const _r17 = i0.ɵɵreference(2); const ctx_r178 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r178.contextMenu($event, _r17)); });
    i0.ɵɵelementStart(1, "cmacs-dropdown-menu", null, 16);
    i0.ɵɵelementContainer(3, 17);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsTableComponent_tr_5_td_4_Template, 2, 5, "td", 18);
    i0.ɵɵtemplate(5, CmacsTableComponent_tr_5_td_5_Template, 4, 9, "td", 19);
    i0.ɵɵtemplate(6, CmacsTableComponent_tr_5_td_6_Template, 2, 3, "td", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r15 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-table-selected-row", ctx_r2.isRowSelected(data_r15));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.contextmenu)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c9, data_r15));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.showRate);
} }
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
        this.hasCookies = true;
        this.exportEvent = new EventEmitter();
        this.buttonClick = new EventEmitter();
        this.rateChange = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.ondlclickRow = new EventEmitter();
        this.onclickRow = new EventEmitter();
        this.onclickFavorite = new EventEmitter();
        this.onedit = new EventEmitter();
        this.rateCount = 5;
        this.multiSelect = false;
        this.sortChange = new EventEmitter();
        this.onresize = new EventEmitter();
        this.selected = false;
        this.defaultSortOrder = null;
        this.checkboxCache = [];
        this.isIndeterminate = false;
        this.allChecked = false;
        this.rowOnEdition = -1;
        this.tapCount = 0;
        this.lastIdxSelected = null;
        this._onresize$ = new Subject();
        this.onresizeobs = this._onresize$.asObservable();
        this._onsort$ = new Subject();
        this.onsortobs = this._onsort$.asObservable();
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
    sort($event, fieldProperty) {
        this.cdr.detectChanges();
        this._onsort$.next({ sortName: fieldProperty, sortValue: $event });
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
                    if (this.scroll.x && i + 1 === this.config.fields.length - 1 &&
                        this.config.fields[i + 1] !== null && this.config.fields[i + 1] !== undefined) {
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
                    // this.scroll.x = this.scroll.x ? `${Number(this.scroll.x.replace(/[^\d.-]/g, '')) - elWidth + width}px` : null;
                    continue;
                }
            }
        }
        this.onresize.emit({ col, config: this.config });
        this.configChange.emit(this.config);
        if (this.gridID === null || this.gridID === undefined) {
            return;
        }
        if (this.hasCookies && this.getIndexCookie()) {
            this.cookies.set(this.gridID, JSON.stringify(this.config), 365);
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
    getHeaderMaxWidth(field) {
        if (field.showSort) {
            return `calc(100% - 15px)`;
        }
        return `100%`;
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
                data: { ...item },
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
    onFavoriteChange(isFavorite, field, data) {
        data[field.property] = isFavorite;
        this.onclickFavorite.emit(data);
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
    isCeldTypeButtonFavorite(field) {
        return field !== undefined && field.celdType === CeldType.Favorite;
    }
    isUndefined(value) {
        return value === undefined;
    }
    isRowSelected(data) {
        const dataSelectd = this.checkboxCache.filter(item => item.selected).map(item => item.data[this.config.fieldId]);
        return dataSelectd.indexOf(data[this.config.fieldId]) !== -1;
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
        const filenameFormatted = moment().format('DD.MM.YYYY.HH.mm.ss') + '_' + fileName;
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
                selectedItems: this.checkboxSelect ?
                    this.checkboxCache.filter(item => item.selected).map(item => item.data[this.config.fieldId]) : [],
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
    transformDate(date, dateFormat = null) {
        const m = moment(date);
        if (m.isValid()) {
            if (dateFormat) {
                return m.format(dateFormat);
            }
            else {
                m.locale(this.i18n.getLocale().locale);
                switch (this.i18n.getLocale().locale) {
                    case 'de':
                        return m.format('DD.MM.YYYY');
                    case 'en':
                        return m.format('MM/DD/YYYY');
                    case 'ja':
                        return m.format('YYYY/MM/DD');
                    default:
                        return m.format('MM/DD/YYYY');
                }
            }
        }
        return '';
    }
    static { this.ɵfac = function CmacsTableComponent_Factory(t) { return new (t || CmacsTableComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i2.ExportAsService), i0.ɵɵdirectiveInject(i3.CmacsContextMenuService), i0.ɵɵdirectiveInject(i4.ExcelService), i0.ɵɵdirectiveInject(i5.UtilService), i0.ɵɵdirectiveInject(i6.DatePipe), i0.ɵɵdirectiveInject(i7.CookieService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTableComponent, selectors: [["cmacs-table"]], viewQuery: function CmacsTableComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5, ElementRef);
            i0.ɵɵviewQuery(_c2, 5, ElementRef);
            i0.ɵɵviewQuery(CmacsInputNumberComponent, 5, CmacsInputNumberComponent);
            i0.ɵɵviewQuery(_c3, 5, ElementRef);
            i0.ɵɵviewQuery(_c4, 5, ElementRef);
            i0.ɵɵviewQuery(_c5, 5, ElementRef);
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
        } }, inputs: { size: "size", showTotal: "showTotal", pageSizeOptions: "pageSizeOptions", virtualScroll: "virtualScroll", virtualItemSize: "virtualItemSize", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", total: "total", title: "title", footer: "footer", noResult: "noResult", widthConfig: "widthConfig", pageIndex: "pageIndex", pageSize: "pageSize", data: "data", config: "config", fieldId: "fieldId", gridID: "gridID", paginationPosition: "paginationPosition", scroll: "scroll", printLandscape: "printLandscape", wrapLines: "wrapLines", frontPagination: "frontPagination", templateMode: "templateMode", bordered: "bordered", showPagination: "showPagination", loading: "loading", showSizeChanger: "showSizeChanger", hideOnSinglePage: "hideOnSinglePage", showQuickJumper: "showQuickJumper", simple: "simple", checkboxSelect: "checkboxSelect", inLineEdit: "inLineEdit", dataTable: "dataTable", showRate: "showRate", hasCookies: "hasCookies", exportEvent: "exportEvent", rateCount: "rateCount", multiSelect: "multiSelect", contextmenu: "contextmenu" }, outputs: { configChange: "configChange", buttonClick: "buttonClick", rateChange: "rateChange", selectionChange: "selectionChange", ondlclickRow: "ondlclickRow", onclickRow: "onclickRow", onclickFavorite: "onclickFavorite", onedit: "onedit", sortChange: "sortChange", onresize: "onresize" }, exportAs: ["cmacsTable"], features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 26, consts: [[3, "id"], [1, "cmacs-table", 3, "nzData", "nzShowTotal", "nzPageSizeOptions", "nzVirtualItemSize", "nzLoadingDelay", "nzLoadingIndicator", "nzTotal", "nzTitle", "nzFooter", "nzNoResult", "nzWidthConfig", "nzPageIndex", "nzPageSize", "nzPaginationPosition", "nzScroll", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], ["gridComponent", ""], [4, "ngIf"], ["class", "cmacs-no-selection", 3, "ant-table-selected-row", "click", "touchstart", "contextmenu", 4, "ngFor", "ngForOf"], ["nzWidth", "40px", 3, "maxWidth", "minWidth", 4, "ngIf"], ["nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzDisabled", "nzMinWidth", "nzMaxWidth", "nzShowSort", "nzSortDirections", "cmacs-table-sorted-null", "cmacs-table-sorted-ascend", "cmacs-table-sorted-descend", "nzSortOrder", "minWidth", "maxWidth", "nzWidth", "nzResizeEnd", "nzSortOrderChange", 4, "ngFor", "ngForOf"], [3, "minWidth", "maxWidth", "nzWidth", 4, "ngIf"], ["nzWidth", "40px"], ["cmacs-checkbox", "", 3, "ngModel", "indeterminate", "ngModelChange", "checkedChange"], ["nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzDisabled", "nzMinWidth", "nzMaxWidth", "nzShowSort", "nzSortDirections", "nzSortOrder", "nzWidth", "nzResizeEnd", "nzSortOrderChange"], ["nzDirection", "right", 4, "ngIf"], ["nzDirection", "right"], [1, "cmacs-table-resize-trigger"], [3, "nzWidth"], [1, "cmacs-no-selection", 3, "click", "touchstart", "contextmenu"], ["contextMenuTemplate", "cmacsDropdownMenu"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "maxWidth", "minWidth", 4, "ngIf"], [3, "ngClass", "maxWidth", 4, "ngFor", "ngForOf"], ["class", "cmacs-table-rating", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], ["componentTpl", ""], ["class", "editable-cell", 3, "maxWidth", 4, "ngIf", "ngIfElse"], ["editTpl", ""], [1, "editable-cell"], [1, "editable-cell-value-wrap"], [1, "iconUISmall-Edit", "cmacs-table-edit-icon", 3, "click"], ["style", "word-break: break-word;", 3, "cmacs-table-overflow-cell", "maxWidth", 4, "ngIf"], ["style", "word-break: break-word;", "cmacs-tooltip", "", "placement", "right", 3, "cmacs-table-overflow-cell", "maxWidth", "title", 4, "ngIf"], [2, "word-break", "break-word"], ["cmacs-tooltip", "", "placement", "right", 2, "word-break", "break-word", 3, "title"], ["type", "text", "cmacs-input", "", "class", "tableinput", 3, "ngModel", "click", "dblclick", "ngModelChange", "keyup", 4, "ngIf"], ["id", "testing2", "class", "tableinput", 3, "ngModel", "cmacsStep", "click", "dblclick", "ngModelChange", "keyup", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "tableinput", 3, "allowClear", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["style", "width: 100%;", "showSearch", "", "class", "tableinput", 3, "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["type", "text", "cmacs-input", "", 1, "tableinput", 3, "ngModel", "click", "dblclick", "ngModelChange", "keyup"], ["fieldTypeInput", ""], ["id", "testing2", 1, "tableinput", 3, "ngModel", "cmacsStep", "click", "dblclick", "ngModelChange", "keyup"], ["fieldTypeInputNumber", ""], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange"], ["fieldTypeBool", ""], [1, "tableinput", 3, "allowClear", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDatePicker", ""], ["showSearch", "", 1, "tableinput", 2, "width", "100%", 3, "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeSelect", ""], [3, "label", "value", 4, "ngFor", "ngForOf"], [3, "label", "value"], ["role", "button", "cmacs-button", "", 3, "aria-label", "type", "click", 4, "ngIf"], ["style", "display: inline-flex;", 3, "id", 4, "ngIf"], ["templateRefCeld", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "button", "cmacs-button", "", 3, "aria-label", "type", "click"], ["nz-icon", "", 3, "type", 4, "ngIf", "ngIfElse"], ["titleTpl", ""], ["nz-icon", "", 3, "type"], [3, "value", "onChangedValue"], [2, "display", "inline-flex", 3, "id"], [4, "ngFor", "ngForOf"], [3, "color", "cmacsGridType", "cmacsStatusType", "cmacsPriorityType", 4, "ngIf"], [3, "color", "cmacsGridType", "cmacsStatusType", "cmacsPriorityType"], [1, "cmacs-table-rating"], [3, "ngModel", "nzCount", "nzDisabled", "ngModelChange", "click"]], template: function CmacsTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "nz-table", 1, 2);
            i0.ɵɵtemplate(3, CmacsTableComponent_thead_3_Template, 5, 3, "thead", 3);
            i0.ɵɵelementStart(4, "tbody");
            i0.ɵɵtemplate(5, CmacsTableComponent_tr_5_Template, 7, 9, "tr", 4);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(2);
            i0.ɵɵpropertyInterpolate("id", ctx.gridID);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzData", ctx.data)("nzShowTotal", ctx.showTotal)("nzPageSizeOptions", ctx.pageSizeOptions)("nzVirtualItemSize", ctx.virtualItemSize)("nzLoadingDelay", ctx.loadingDelay)("nzLoadingIndicator", ctx.loadingIndicator)("nzTotal", ctx.total)("nzTitle", ctx.title)("nzFooter", ctx.footer)("nzNoResult", ctx.noResult)("nzWidthConfig", ctx.widthConfig)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPaginationPosition", ctx.paginationPosition)("nzScroll", ctx.scroll)("nzFrontPagination", ctx.frontPagination)("nzTemplateMode", ctx.templateMode)("nzShowPagination", ctx.showPagination)("nzLoading", ctx.loading)("nzShowSizeChanger", ctx.showSizeChanger)("nzHideOnSinglePage", ctx.hideOnSinglePage)("nzShowQuickJumper", ctx.showQuickJumper)("nzSimple", ctx.simple);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.dataTable);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", _r0.data);
        } }, dependencies: [i8.NzResizableDirective, i8.NzResizeHandleComponent, i6.NgClass, i6.NgForOf, i6.NgIf, i6.NgTemplateOutlet, i9.NzTableComponent, i9.NzThAddOnComponent, i9.NzTableCellDirective, i9.NzThMeasureDirective, i9.NzTheadComponent, i9.NzTbodyComponent, i9.NzTrDirective, i10.NzRateComponent, i11.DefaultValueAccessor, i11.NgControlStatus, i11.NgModel, i12.ɵNzTransitionPatchDirective, i13.NzIconDirective, i14.CmacsTagComponent, i15.CmacsTooltipDirective, i16.CmacsCheckboxComponent, i17.CmacsButtonComponent, i18.CmacsSelectComponent, i19.CmacsOptionComponent, i20.CmacsInputDirective, i21.CmacsDropdownMenuComponent, i22.CmacsDatePickerComponent, i23.CmacsInputNumberComponent, i24.CmacsButtonFavoriteComponent, i6.DatePipe], styles: [".cmacs-table .cmacs-table-sorted-ascend .anticon.ant-table-column-sorter-up:before,   .cmacs-table .cmacs-table-sorted-null .anticon.ant-table-column-sorter-up:before{font-family:ArrowSmall!important;content:\"\\e90f\";display:block;font-size:25px;margin-top:24px}  .cmacs-table .ant-table-thead>tr>th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan]):before{display:none}  .cmacs-table .ant-table-thead th.ant-table-column-has-sorters{cursor:pointer;transition:none!important}  .cmacs-table .anticon.ant-table-column-sorter-up.active:before,   .cmacs-table .anticon.ant-table-column-sorter-down.active:after{color:#2a7cff}  .cmacs-table .cmacs-table-sorted-descend .anticon.ant-table-column-sorter-down:after{font-family:ArrowSmall!important;content:\"\\e90c\";display:block;font-size:25px}  .cmacs-table .ant-table-column-sorter-up+.ant-table-column-sorter-down{margin-top:0}  .cmacs-table .anticon.ant-table-column-sorter-up svg{display:none}  .cmacs-table .anticon.ant-table-column-sorter-down svg{display:none}.cmacs-table-resize-trigger[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#bfbfbf;position:absolute;right:10px;opacity:0}  .cmacs-table th:hover .cmacs-table-resize-trigger{opacity:1}  .cmacs-table .nz-resizable-preview{border-width:0;border-right-width:1px;border-color:#2a7cff;border-top:none!important;border-left:none!important;border-style:solid;height:100%;max-height:100%;padding:0;margin:0}  .cmacs-table .nz-resizable .ant-table-filter-trigger-container{right:10px;display:inline-block}  .cmacs-table .ant-table-cell.ant-table-cell-fix-left,   .cmacs-compact-table .ant-table-cell.ant-table-cell-fix-right{z-index:10}  .cmacs-table .nz-resizable.ant-table-cell.ant-table-cell-fix-left.ant-table-cell-fix-left-last .nz-resizable-handle-right{right:0!important}  .cmacs-table .ant-table-filter-column{margin:0}  .cmacs-table .ant-table-filter-column-title{padding:0}  .cmacs-table .nz-resizable-handle-right{right:0}  .cmacs-table .ant-table-column-sorter-inner{margin-left:0;margin-right:0}  .cmacs-table .ant-table-placeholder .ant-table-cell{box-shadow:none!important;border-bottom:none!important}  .cmacs-table .ant-table-tbody>tr.ant-table-placeholder:hover{box-shadow:none!important;border-bottom:none!important}  .cmacs-table tr.ant-table-placeholder .ant-table-expanded-row-fixed{margin:0!important;padding:0!important}  .cmacs-table .ant-table-tbody>tr.ant-table-placeholder:hover>td{box-shadow:none!important}.cmacs-table[_ngcontent-%COMP%]   .cmacs-table-rating[_ngcontent-%COMP%]{min-width:105px}.cmacs-table-overflow-cell[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:100%;vertical-align:middle}.cmacs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] > .cmacs-table-overflow-cell[_ngcontent-%COMP%]{line-height:24px!important}.cmacs-table[_ngcontent-%COMP%]   .cmacs-table-overflow-cell-header[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}  .cmacs-table .ant-table-column-sorter{width:12px;display:none!important;right:8px;position:absolute}  .cmacs-table th:hover .ant-table-column-sorter{display:table-cell!important;right:8px;position:absolute}  .cmacs-table .ant-table-column-sorters,   .cmacs-table .ant-table-header-column{width:100%;padding:0}  .cmacs-table .ant-table-column-sorters span:not(.ant-table-column-sorter){width:100%}  .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:hover{background-color:#f6f7fb}  .cmacs-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters:hover:before{background-color:transparent}.cmacs-table[_ngcontent-%COMP%]   .editable-cell[_ngcontent-%COMP%]{position:relative}.cmacs-table[_ngcontent-%COMP%]   .editable-cell-value-wrap[_ngcontent-%COMP%]{padding:6px 0;cursor:pointer;min-height:30px;max-height:30px}.cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover > td.editable-row[_ngcontent-%COMP%]   .cmacs-table-edit-icon[_ngcontent-%COMP%]{opacity:1}.cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td.editable-row[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]   td.editable-row[_ngcontent-%COMP%]:first-child{padding:9px 10px}  .cmacs-table .ant-rate{height:16px;font-size:16px}  .cmacs-table .ant-rate-star{font-size:16px;margin:0}.cmacs-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]{box-shadow:0 3px 7px -3px #0506062e}  .cmacs-table .ant-table-tbody>tr>td{border:none!important}  .cmacs-table .ant-table-thead>tr>th{padding:15px 10px;color:#656c79;background-color:#f6f7fb;border-bottom:1px solid #F6F7FB;border-right:none!important;border-left:none!important;border-top:none!important}  .cmacs-table .ant-table-thead th.ant-table-column-has-sorters:hover{background-color:#f6f7fb!important}  .cmacs-table .ant-table-tbody>tr>td{padding:12px 10px;border-bottom:0px;box-shadow:0 -1px #dee0e5 inset}  .cmacs-table .ant-table-tbody>tr:hover{box-shadow:0 3px 7px -3px #0506062e;position:relative}  .cmacs-table .ant-table-tbody>tr td:first-child{padding:12px 10px;box-shadow:0 -1px #dee0e5 inset}  .cmacs-table .ant-table-thead>tr>th{padding:15px 10px}  .cmacs-table .ant-table-tbody>tr:hover td:first-child{box-shadow:3px 0 #2a7cff inset,0 -1px #dee0e5 inset}  .cmacs-table .ant-table-tbody>.ant-table-selected-row:hover td:first-child{box-shadow:3px 0 #2a7cff inset,0 1px #2a7cff inset,0 -1px #2a7cff inset}  .cmacs-table .ant-table-tbody>.ant-table-selected-row:hover td{box-shadow:0 1px #2a7cff inset,0 -1px #2a7cff inset}  .cmacs-table .ant-table-thead{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:normal;position:relative}.cmacs-table[_ngcontent-%COMP%]   .editable-row[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ng-star-inserted[_ngcontent-%COMP%]{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal}.cmacs-table[_ngcontent-%COMP%]   cmacs-tag[_ngcontent-%COMP%]{padding:1px 5px;height:unset}  .cmacs-table .ant-table-thead>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td, .cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr.ant-table-row-hover[_ngcontent-%COMP%]:not(.ant-table-expanded-row):not(.ant-table-selected-row) > td[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row) > td[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row) > td[_ngcontent-%COMP%]{background-color:#fff}  .cmacs-table .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#f2f7ff}  .cmacs-table .ant-spin-nested-loading{clear:both}  .cmacs-table .ant-table table{border-collapse:collapse}  .cmacs-table .tableinput.ant-input:focus,   .cmacs-table .tableinput.ant-input:hover{box-shadow:none;border:1px solid #2A7CFF}  .cmacs-table .tableinput,   .cmacs-table .ant-input-number:not(.cmacs-datetime-picker-input-number),   .cmacs-table .tableinput>*,   .cmacs-table .tableinput .datepickerwidth,   .cmacs-table .tableinput .datepickerwidth .ant-input,   .cmacs-table .tableinput .ant-select-selection--single{height:30px!important}  .cmacs-table tr:not(.cmacs-no-selection) .tableinput{margin-left:-5px}  .cmacs-table tr:not(.cmacs-no-selection) input.tableinput{padding:5px 4px}  .cmacs-table cmacs-date-picker.tableinput{margin-left:-5px}  .cmacs-table .tableinput .datepickerwidth .ant-input{padding:0 4px}  .cmacs-table .tableinput .ant-select-selection--single .ant-select-selection__rendered{margin-left:4px;line-height:30px}  .cmacs-table .tableinput .ant-input-number-input{padding-left:4px}  .cmacs-table .ant-input-number:not(.cmacs-datetime-picker-input-number){overflow:visible}  .cmacs-table cmacs-input-number.tableinput,   .cmacs-table cmacs-select.tableinput{margin-left:-5px}  .cmacs-table .tableinput .ant-input-number-handler-wrap{height:28px!important}.cmacs-table[_ngcontent-%COMP%]   .cmacs-no-selection[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}  .cmacs-table .cmacs-no-selection .editable-cell,   .cmacs-table .cmacs-no-selection .tableinput{margin-top:-4px;margin-bottom:-3px;height:30px}  .cmacs-table .cmacs-no-selection input.tableinput{padding:6px 4px 5px;margin-left:-5px}  .cmacs-table .cmacs-no-selection .editable-cell-value-wrap{height:30px}  .cmacs-table table{table-layout:fixed}  .cmacs-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters{display:inline-flex;position:relative;top:3px}  .cmacs-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner,   .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-up:not(.on),   .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-down:not(.on){color:#bec4cd}  .cmacs-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner-full{margin-left:0!important}  .cmacs-table .ant-table-fixed-header .ant-table-scroll .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1}  .cmacs-table .ant-table-fixed-header>.ant-table-container>.ant-table-body{scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin;overflow:auto!important;position:inherit}  .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar, [_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:6px}  .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb, [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}  .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb:hover, [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}.cmacs-table-edit-icon[_ngcontent-%COMP%]{position:relative;top:3px;left:5px;opacity:0;float:right;font-size:14px}.cmacs-table-edit-icon[_ngcontent-%COMP%]:hover{color:#2a7cff}"], changeDetection: 0 }); }
}
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
], CmacsTableComponent.prototype, "hasCookies", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "multiSelect", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTableComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-table', exportAs: 'cmacsTable', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div id=\"{{gridID}}\">\r\n  <nz-table #gridComponent [nzData]=\"data\" [nzShowTotal]=\"showTotal\" [nzPageSizeOptions]=\"pageSizeOptions\"\r\n    [nzVirtualItemSize]=\"virtualItemSize\" [nzLoadingDelay]=\"loadingDelay\"\r\n    [nzLoadingIndicator]=\"loadingIndicator\" [nzTotal]=\"total\" [nzTitle]=\"title\" [nzFooter]=\"footer\"\r\n    [nzNoResult]=\"noResult\" [nzWidthConfig]=\"widthConfig\" [nzPageIndex]=\"pageIndex\" [nzPageSize]=\"pageSize\"\r\n    [nzPaginationPosition]=\"paginationPosition\" [nzScroll]=\"scroll\" [nzFrontPagination]=\"frontPagination\"\r\n    [nzTemplateMode]=\"templateMode\" [nzShowPagination]=\"showPagination\" [nzLoading]=\"loading\"\r\n    [nzShowSizeChanger]=\"showSizeChanger\" [nzHideOnSinglePage]=\"hideOnSinglePage\" [nzShowQuickJumper]=\"showQuickJumper\"\r\n    [nzSimple]=\"simple\" class=\"cmacs-table\">\r\n    <thead *ngIf=\"!dataTable\">\r\n      <tr>\r\n        <th *ngIf=\"checkboxSelect\"\r\n            nzWidth=\"40px\"\r\n            [style.maxWidth]=\"'40px'\"\r\n            [style.minWidth]=\"'40px'\">\r\n          <label cmacs-checkbox [(ngModel)]=\"selected\" [indeterminate]=\"isIndeterminate\"\r\n            (checkedChange)=onCheckboxAllChange($event)></label>\r\n        </th>\r\n        <th *ngFor=\"let field of getFields()\"\r\n            nz-resizable\r\n            [nzDisabled]=\"!field.resizable\"\r\n            nzBounds=\"window\"\r\n            [nzMinWidth]=\"field.minWidth ? field.minWidth : 100\"\r\n            [nzMaxWidth]=\"field.maxWidth ? field.maxWidth : 500\"\r\n            nzPreview\r\n            (nzResizeEnd)=\"onResize($event, field.property, field)\"\r\n            [nzShowSort]=\"field.showSort\"\r\n            [nzSortDirections]=\"['ascend', 'descend']\"\r\n            [class.cmacs-table-sorted-null]=\"field.showSort && !field.sortOrder\"\r\n            [class.cmacs-table-sorted-ascend]=\"field.showSort && field.sortOrder === 'ascend'\"\r\n            [class.cmacs-table-sorted-descend]=\"field.showSort && field.sortOrder === 'descend'\"\r\n            [(nzSortOrder)]=\"field.showSort ? field.sortOrder : defaultSortOrder\"\r\n            (nzSortOrderChange)=\"sort($event, field.property)\"\r\n            [style.minWidth]=\"field.minWidth ? field.minWidth : field.width\"\r\n            [style.maxWidth]=\"field.width\"\r\n            [nzWidth]=\"field.width\">\r\n          <div [style.maxWidth]=\"getHeaderMaxWidth(field)\"\r\n               [class.cmacs-table-overflow-cell-header]=\"!wrapLines\">\r\n            {{field.display}}\r\n          </div>\r\n          <nz-resize-handle nzDirection=\"right\" *ngIf=\"field.resizable\">\r\n            <div class=\"cmacs-table-resize-trigger\"></div>\r\n          </nz-resize-handle>\r\n        </th>\r\n        <th [style.minWidth]=\"'105px'\"\r\n            [style.maxWidth]=\"'105px'\"\r\n            [nzWidth]=\"'105px'\" *ngIf=\"showRate\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of gridComponent.data; index as i\"\r\n          (click)=\"clickRow($event, data)\"\r\n          (touchstart)=\"tapHandler($event, data)\"\r\n          class=\"cmacs-no-selection\"\r\n          [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n          (contextmenu)=\"contextMenu($event, contextMenuTemplate)\">\r\n\r\n        <cmacs-dropdown-menu #contextMenuTemplate=\"cmacsDropdownMenu\">\r\n          <ng-container [ngTemplateOutlet]=\"contextmenu\" [ngTemplateOutletContext]=\"{ data: data }\"></ng-container>\r\n        </cmacs-dropdown-menu>\r\n\r\n        <td *ngIf=\"checkboxSelect\" [style.maxWidth]=\"'40px'\" [style.minWidth]=\"'40px'\">\r\n          <label cmacs-checkbox [(ngModel)]=\"checkboxCache[getIndex(data[config.fieldId])].selected\"\r\n            (checkedChange)=\"onCheckboxChange($event, data)\"\r\n            *ngIf=\"data[config.fieldId] && checkboxCache[getIndex(data[config.fieldId])]\"></label>\r\n        </td>\r\n        <td *ngFor=\"let field of getFields(); index as fi\" [ngClass]=\"(isCeldTypeDefault(field) && inLineEdit && !isReadOnly(field)) ? ['editable-row', 'cmacs-table-cell-' + field.property] : ['cmacs-table-cell-' + field.property]\" [style.maxWidth]=\"'100%'\">\r\n          <ng-container *ngIf=\"isCeldTypeDefault(field) && inLineEdit && !isReadOnly(field); else componentTpl\">\r\n            <div class=\"editable-cell\" [style.maxWidth]=\"'100%'\"\r\n              *ngIf=\"(editId !== data[config.fieldId] || property !== field.property); else editTpl\">\r\n              <div class=\"editable-cell-value-wrap\" [style.maxWidth]=\"'100%'\">\r\n                <ng-container *ngIf=\"!isDate(field) && !isSelect(field)\">\r\n                  <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\"\r\n                       *ngIf=\"!field.showTooltip || data[field.property] === null || data[field.property] === undefined || data[field.property] === ''\"\r\n                       [style.maxWidth]=\"getMaxWidth()\">\r\n                    {{ data[field.property] !== null && data[field.property] !== undefined && data[field.property] !== '' ? data[field.property] : field.placeholder }}\r\n                  </div>\r\n                  <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\"\r\n                       *ngIf=\"field.showTooltip && data[field.property]!!\"\r\n                       [style.maxWidth]=\"getMaxWidth()\" cmacs-tooltip [title]=\"data[field.property]\" placement=\"right\">\r\n                    {{ data[field.property] }}\r\n                  </div>\r\n                  <!-- <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ data[field.property] }}</div> -->\r\n                </ng-container>\r\n                <ng-container *ngIf=\"isDate(field)\">\r\n                  <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ data[field.property]  | date: field.dateFormat}}</div>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"isSelect(field)\">\r\n                  <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ getLabel(data, field) }}</div>\r\n                </ng-container>\r\n                <i class=\"iconUISmall-Edit cmacs-table-edit-icon\" (click)=\"startEdit(data[config.fieldId], field.property, $event)\"></i>\r\n              </div>\r\n            </div>\r\n            <ng-template #editTpl>\r\n              <input #fieldTypeInput *ngIf=\"isString(field)\" type=\"text\" cmacs-input class=\"tableinput\"\r\n                 (click)=\"preventDefault($event)\"\r\n                 (dblclick)=\"preventDefault($event)\"\r\n                [(ngModel)]=\"data[field.property]\"\r\n                     (keyup)=\"endEditMode($event, i)\" />\r\n\r\n              <cmacs-input-number #fieldTypeInputNumber id=\"testing2\" class=\"tableinput\"\r\n                 (click)=\"preventDefault($event)\"\r\n                 (dblclick)=\"preventDefault($event)\"\r\n                *ngIf=\"isNumber(field) && !isSelect(field)\" [(ngModel)]=\"data[field.property]\"\r\n                [cmacsStep]=\"1\" (keyup)=\"endEditMode($event, i)\" (ngModelChange)=\"ngModelChange(i)\"></cmacs-input-number>\r\n\r\n              <label #fieldTypeBool cmacs-checkbox *ngIf=\"isBoolean(field)\"\r\n                [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\"></label>\r\n\r\n              <cmacs-date-picker\r\n                #fieldTypeDatePicker\r\n                *ngIf=\"isDate(field)\"\r\n                (click)=\"preventDefault($event)\"\r\n                (dblclick)=\"preventDefault($event)\"\r\n                [allowClear]=\"true\"\r\n                class=\"tableinput\"\r\n                [(ngModel)]=\"data[field.property]\"\r\n                (ngModelChange)=\"endEditModeNgModel(i)\">\r\n              </cmacs-date-picker>\r\n\r\n              <cmacs-select #fieldTypeSelect *ngIf=\"isSelect(field)\" style=\"width: 100%;\" showSearch class=\"tableinput\"\r\n                 (click)=\"preventDefault($event)\"\r\n                 (dblclick)=\"preventDefault($event)\"\r\n                [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\">\r\n                <cmacs-option *ngFor=\"let sData of field.select.selectData\" label=\"{{sData[field.select.label]}}\"\r\n                  value=\"{{sData[field.select.value]}}\"></cmacs-option>\r\n              </cmacs-select>\r\n            </ng-template>\r\n          </ng-container>\r\n          <ng-template #componentTpl>\r\n            <ng-container #templateRefCeld *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n              <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\">\r\n              </ng-container>\r\n            </ng-container>\r\n            <button *ngIf=\"isCeldTypeButton(field)\" aria-label=\"{{field.display}}\" role=\"button\" cmacs-button type=\"{{field.button.style}}\"\r\n                    (click)=onButtonClick(data)>\r\n              <i *ngIf=\"!isUndefined(field.button.icon); else titleTpl\" nz-icon type=\"{{field.button.icon}}\"></i>\r\n              <ng-template #titleTpl>{{field.display}}</ng-template>\r\n            </button>\r\n            <div *ngIf=\"isCeldTypeButtonFavorite(field)\">\r\n              <cmacs-button-favorite\r\n                [value]=\"data[field.property]\"\r\n                (onChangedValue)=\"onFavoriteChange($event, field, data)\">\r\n              </cmacs-button-favorite>\r\n            </div>\r\n            <div *ngIf=\"isCeldTypeTag(field) && field.tag !== undefined\" [id]=\"gridID + 'column' + fi + 'row' + i\"\r\n              style=\"display: inline-flex;\">\r\n              <span *ngFor=\"let tag of data[field.property].split(',')\">\r\n                <cmacs-tag *ngIf=\"tag.trim().length > 0\" [color]=\"field.tag.color ? data[field.tag.color] : null\"\r\n                  [cmacsGridType]=\"field.tag.cmacsGridType ? data[field.tag.cmacsGridType] : null\"\r\n                  [cmacsStatusType]=\"field.tag.cmacsStatusType ? data[field.tag.cmacsStatusType] : null\"\r\n                  [cmacsPriorityType]=\"field.tag.cmacsPriorityType ? data[field.tag.cmacsPriorityType] : null\">\r\n                  {{ tag }}\r\n                </cmacs-tag>\r\n              </span>\r\n            </div>\r\n            <ng-container *ngIf=\"(!inLineEdit ||  isReadOnly(field)) && isDate(field)\">\r\n              <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ transformDate(data[field.property], field.dateFormat) }}</div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"(!inLineEdit ||  isReadOnly(field)) && !isCeldTypeButton(field) && !isCeldTypeButtonFavorite(field) && !isCeldTypeTag(field) && !isCeldTypeTemplateRef(field) && !isDate(field) && !isSelect(field)\">\r\n              <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\"\r\n                   *ngIf=\"!field.showTooltip || data[field.property] === null || data[field.property] === undefined || data[field.property] === ''\" [style.maxWidth]=\"getMaxWidth()\">\r\n                {{ data[field.property] !== null && data[field.property] !== undefined && data[field.property] !== '' ? data[field.property] : field.placeholder }}\r\n              </div>\r\n              <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\"\r\n                   *ngIf=\"field.showTooltip && data[field.property]!!\" [style.maxWidth]=\"getMaxWidth()\"\r\n                   cmacs-tooltip [title]=\"data[field.property]\" placement=\"right\">\r\n                {{ data[field.property] }}\r\n              </div>\r\n              <!-- <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ data[field.property] }}</div> -->\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isSelect(field)\">\r\n              <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ getLabel(data, field) }}</div>\r\n            </ng-container>\r\n          </ng-template>\r\n        </td>\r\n        <td *ngIf=\"showRate\" class=\"cmacs-table-rating\">\r\n          <nz-rate [ngModel]=\"data[config.fieldRate]\"\r\n                   [nzCount]='rateCount'\r\n                   (ngModelChange)=\"onRateChange($event, data)\"\r\n                   [nzDisabled]=\"!inLineEdit\"\r\n                   (click)=\"onRateClick($event)\"></nz-rate>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n", styles: ["::ng-deep .cmacs-table .cmacs-table-sorted-ascend .anticon.ant-table-column-sorter-up:before,::ng-deep .cmacs-table .cmacs-table-sorted-null .anticon.ant-table-column-sorter-up:before{font-family:ArrowSmall!important;content:\"\\e90f\";display:block;font-size:25px;margin-top:24px}::ng-deep .cmacs-table .ant-table-thead>tr>th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan]):before{display:none}::ng-deep .cmacs-table .ant-table-thead th.ant-table-column-has-sorters{cursor:pointer;transition:none!important}::ng-deep .cmacs-table .anticon.ant-table-column-sorter-up.active:before,::ng-deep .cmacs-table .anticon.ant-table-column-sorter-down.active:after{color:#2a7cff}::ng-deep .cmacs-table .cmacs-table-sorted-descend .anticon.ant-table-column-sorter-down:after{font-family:ArrowSmall!important;content:\"\\e90c\";display:block;font-size:25px}::ng-deep .cmacs-table .ant-table-column-sorter-up+.ant-table-column-sorter-down{margin-top:0}::ng-deep .cmacs-table .anticon.ant-table-column-sorter-up svg{display:none}::ng-deep .cmacs-table .anticon.ant-table-column-sorter-down svg{display:none}.cmacs-table-resize-trigger{width:1px;height:100%;background-color:#bfbfbf;position:absolute;right:10px;opacity:0}::ng-deep .cmacs-table th:hover .cmacs-table-resize-trigger{opacity:1}::ng-deep .cmacs-table .nz-resizable-preview{border-width:0;border-right-width:1px;border-color:#2a7cff;border-top:none!important;border-left:none!important;border-style:solid;height:100%;max-height:100%;padding:0;margin:0}::ng-deep .cmacs-table .nz-resizable .ant-table-filter-trigger-container{right:10px;display:inline-block}::ng-deep .cmacs-table .ant-table-cell.ant-table-cell-fix-left,::ng-deep .cmacs-compact-table .ant-table-cell.ant-table-cell-fix-right{z-index:10}::ng-deep .cmacs-table .nz-resizable.ant-table-cell.ant-table-cell-fix-left.ant-table-cell-fix-left-last .nz-resizable-handle-right{right:0!important}::ng-deep .cmacs-table .ant-table-filter-column{margin:0}::ng-deep .cmacs-table .ant-table-filter-column-title{padding:0}::ng-deep .cmacs-table .nz-resizable-handle-right{right:0}::ng-deep .cmacs-table .ant-table-column-sorter-inner{margin-left:0;margin-right:0}::ng-deep .cmacs-table .ant-table-placeholder .ant-table-cell{box-shadow:none!important;border-bottom:none!important}::ng-deep .cmacs-table .ant-table-tbody>tr.ant-table-placeholder:hover{box-shadow:none!important;border-bottom:none!important}::ng-deep .cmacs-table tr.ant-table-placeholder .ant-table-expanded-row-fixed{margin:0!important;padding:0!important}::ng-deep .cmacs-table .ant-table-tbody>tr.ant-table-placeholder:hover>td{box-shadow:none!important}.cmacs-table .cmacs-table-rating{min-width:105px}.cmacs-table-overflow-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:100%;vertical-align:middle}.cmacs-table tbody td>.cmacs-table-overflow-cell{line-height:24px!important}.cmacs-table .cmacs-table-overflow-cell-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}::ng-deep .cmacs-table .ant-table-column-sorter{width:12px;display:none!important;right:8px;position:absolute}::ng-deep .cmacs-table th:hover .ant-table-column-sorter{display:table-cell!important;right:8px;position:absolute}::ng-deep .cmacs-table .ant-table-column-sorters,::ng-deep .cmacs-table .ant-table-header-column{width:100%;padding:0}::ng-deep .cmacs-table .ant-table-column-sorters span:not(.ant-table-column-sorter){width:100%}::ng-deep .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:hover{background-color:#f6f7fb}::ng-deep .cmacs-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters:hover:before{background-color:transparent}.cmacs-table .editable-cell{position:relative}.cmacs-table .editable-cell-value-wrap{padding:6px 0;cursor:pointer;min-height:30px;max-height:30px}.cmacs-table .ant-table-tbody>tr:hover>td.editable-row .cmacs-table-edit-icon{opacity:1}.cmacs-table .ant-table-tbody>tr>td.editable-row,.cmacs-table .ant-table-tbody>tr td.editable-row:first-child{padding:9px 10px}::ng-deep .cmacs-table .ant-rate{height:16px;font-size:16px}::ng-deep .cmacs-table .ant-rate-star{font-size:16px;margin:0}.cmacs-table .ant-table-thead>tr{box-shadow:0 3px 7px -3px #0506062e}::ng-deep .cmacs-table .ant-table-tbody>tr>td{border:none!important}::ng-deep .cmacs-table .ant-table-thead>tr>th{padding:15px 10px;color:#656c79;background-color:#f6f7fb;border-bottom:1px solid #F6F7FB;border-right:none!important;border-left:none!important;border-top:none!important}::ng-deep .cmacs-table .ant-table-thead th.ant-table-column-has-sorters:hover{background-color:#f6f7fb!important}::ng-deep .cmacs-table .ant-table-tbody>tr>td{padding:12px 10px;border-bottom:0px;box-shadow:0 -1px #dee0e5 inset}::ng-deep .cmacs-table .ant-table-tbody>tr:hover{box-shadow:0 3px 7px -3px #0506062e;position:relative}::ng-deep .cmacs-table .ant-table-tbody>tr td:first-child{padding:12px 10px;box-shadow:0 -1px #dee0e5 inset}::ng-deep .cmacs-table .ant-table-thead>tr>th{padding:15px 10px}::ng-deep .cmacs-table .ant-table-tbody>tr:hover td:first-child{box-shadow:3px 0 #2a7cff inset,0 -1px #dee0e5 inset}::ng-deep .cmacs-table .ant-table-tbody>.ant-table-selected-row:hover td:first-child{box-shadow:3px 0 #2a7cff inset,0 1px #2a7cff inset,0 -1px #2a7cff inset}::ng-deep .cmacs-table .ant-table-tbody>.ant-table-selected-row:hover td{box-shadow:0 1px #2a7cff inset,0 -1px #2a7cff inset}::ng-deep .cmacs-table .ant-table-thead{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:normal;position:relative}.cmacs-table .editable-row,.cmacs-table .ng-star-inserted{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal}.cmacs-table cmacs-tag{padding:1px 5px;height:unset}::ng-deep .cmacs-table .ant-table-thead>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.cmacs-table .ant-table-tbody>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.cmacs-table .ant-table-thead>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.cmacs-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td{background-color:#fff}::ng-deep .cmacs-table .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#f2f7ff}::ng-deep .cmacs-table .ant-spin-nested-loading{clear:both}::ng-deep .cmacs-table .ant-table table{border-collapse:collapse}::ng-deep .cmacs-table .tableinput.ant-input:focus,::ng-deep .cmacs-table .tableinput.ant-input:hover{box-shadow:none;border:1px solid #2A7CFF}::ng-deep .cmacs-table .tableinput,::ng-deep .cmacs-table .ant-input-number:not(.cmacs-datetime-picker-input-number),::ng-deep .cmacs-table .tableinput>*,::ng-deep .cmacs-table .tableinput .datepickerwidth,::ng-deep .cmacs-table .tableinput .datepickerwidth .ant-input,::ng-deep .cmacs-table .tableinput .ant-select-selection--single{height:30px!important}::ng-deep .cmacs-table tr:not(.cmacs-no-selection) .tableinput{margin-left:-5px}::ng-deep .cmacs-table tr:not(.cmacs-no-selection) input.tableinput{padding:5px 4px}::ng-deep .cmacs-table cmacs-date-picker.tableinput{margin-left:-5px}::ng-deep .cmacs-table .tableinput .datepickerwidth .ant-input{padding:0 4px}::ng-deep .cmacs-table .tableinput .ant-select-selection--single .ant-select-selection__rendered{margin-left:4px;line-height:30px}::ng-deep .cmacs-table .tableinput .ant-input-number-input{padding-left:4px}::ng-deep .cmacs-table .ant-input-number:not(.cmacs-datetime-picker-input-number){overflow:visible}::ng-deep .cmacs-table cmacs-input-number.tableinput,::ng-deep .cmacs-table cmacs-select.tableinput{margin-left:-5px}::ng-deep .cmacs-table .tableinput .ant-input-number-handler-wrap{height:28px!important}.cmacs-table .cmacs-no-selection{-webkit-user-select:none;user-select:none}::ng-deep .cmacs-table .cmacs-no-selection .editable-cell,::ng-deep .cmacs-table .cmacs-no-selection .tableinput{margin-top:-4px;margin-bottom:-3px;height:30px}::ng-deep .cmacs-table .cmacs-no-selection input.tableinput{padding:6px 4px 5px;margin-left:-5px}::ng-deep .cmacs-table .cmacs-no-selection .editable-cell-value-wrap{height:30px}::ng-deep .cmacs-table table{table-layout:fixed}::ng-deep .cmacs-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters{display:inline-flex;position:relative;top:3px}::ng-deep .cmacs-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner,::ng-deep .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-up:not(.on),::ng-deep .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-down:not(.on){color:#bec4cd}::ng-deep .cmacs-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner-full{margin-left:0!important}::ng-deep .cmacs-table .ant-table-fixed-header .ant-table-scroll .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1}::ng-deep .cmacs-table .ant-table-fixed-header>.ant-table-container>.ant-table-body{scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin;overflow:auto!important;position:inherit}::ng-deep .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar,::-webkit-scrollbar{width:6px;height:6px}::ng-deep .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb,::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::ng-deep .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb:hover,::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}.cmacs-table-edit-icon{position:relative;top:3px;left:5px;opacity:0;float:right;font-size:14px}.cmacs-table-edit-icon:hover{color:#2a7cff}\n"] }]
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
        }], hasCookies: [{
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
        }], onclickFavorite: [{
            type: Output
        }], onedit: [{
            type: Output
        }], rateCount: [{
            type: Input
        }], multiSelect: [{
            type: Input
        }], sortChange: [{
            type: Output
        }], onresize: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRhYmxlL2NtYWNzLXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10YWJsZS9jbWFjcy10YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBSU4sU0FBUyxFQUNULFlBQVksRUFDWix1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFTLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUtqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU1RCxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxxQkFBcUIsQ0FBQztBQUc3QixPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUvRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3hCdkYsNkJBRzhCLGVBQUE7SUFDTix5T0FBc0IsZ0xBQzFCLGVB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VUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO3dCQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7d0JBQy9FLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxSCxNQUFNLEtBQUssR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDO3dCQUM5QixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLFdBQVcsRUFBRTs0QkFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtnQ0FDbkcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxFQUFFO29DQUN0RSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsV0FBVyxHQUFHLEtBQUssSUFBSSxDQUFDO2lDQUM5RDs2QkFDRjtpQ0FBTTtnQ0FDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsV0FBVyxHQUFHLEtBQUssSUFBSSxDQUFDOzZCQUM5RDt5QkFDRjt3QkFDRCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7NEJBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLFdBQVcsR0FBRyxLQUFLLElBQUksQ0FBQzt5QkFDOUQ7cUJBQ0Y7b0JBQ0QsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDO29CQUMzQixpSEFBaUg7b0JBQ2pILFNBQVM7aUJBQ1Y7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3JELE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7SUFHRCxlQUFlLENBQUMsQ0FBUTtRQUN0QixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBcUIsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQyxJQUNFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNuRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDMUYsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3hGLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO29CQUM3RSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDL0U7Z0JBQ0EsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDbEM7Z0JBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO29CQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN4QjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVM7UUFDbkIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM5QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFZO1FBQzVCLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPLG1CQUFtQixDQUFDO1NBQzVCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFTLEVBQUUsUUFBYTtRQUM5QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsT0FBTyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3JCLElBQUksS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFBRSxPQUFPLElBQUksQ0FBQzthQUFFO1lBQ3hDLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxPQUFPLEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUTttQkFDdEcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtvQkFDaEQsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGFBQWEsRUFBRTt3QkFBRSxPQUFPLEtBQUssQ0FBQztxQkFBRTtpQkFDdkQ7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQXFCLEVBQUUsS0FBYTtRQUM5QyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFFBQVEsQ0FBQyxFQUFFO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDaEYsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUs7Z0JBQy9DLElBQUksRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFO2dCQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBVTtRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUk7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsS0FBSztRQUNqQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO0lBQ0gsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25ILElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25FLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsaURBQWlEO0lBQ2pELFlBQVksQ0FBQyxLQUFhLEVBQUUsSUFBUztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CLEVBQUUsS0FBWSxFQUFFLElBQVM7UUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFVO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxNQUFlO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFFN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFTLEVBQUUsS0FBWTtRQUM5QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLFlBQVksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDNUUsaURBQWlEO1lBQ2pELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNILE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUMvRDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBWTtRQUNuQixPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDO0lBQzNFLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBWTtRQUNyQixPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUMvRSxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQVk7UUFDcEIsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFDbkgsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxDQUFDO0lBQzVELENBQUM7SUFFRCxNQUFNLENBQUMsS0FBWTtRQUNqQixPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQztJQUNoSCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVk7UUFDbkIsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDbEgsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFZO1FBQ25CLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDO0lBQ2xILENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFZO1FBQzVCLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDcEUsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQVk7UUFDM0IsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNuRSxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQVk7UUFDeEIsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUNoRSxDQUFDO0lBRUQscUJBQXFCLENBQUMsS0FBWTtRQUNoQyxPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQ3hFLENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxLQUFZO1FBQ25DLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDckUsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFVO1FBQ3BCLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBRUQsYUFBYSxDQUFDLElBQVM7UUFDckIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDakgsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvRSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckQsd0JBQXdCO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRW5ELHlDQUF5QztZQUN6QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBZSxDQUFDO1lBQzVFLElBQUksT0FBTyxXQUFXLEtBQUssUUFBUSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3JDO1NBQ0Y7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUM7UUFDWjs7Ozs7Ozs7Ozs7OztzQ0FhOEI7SUFDaEMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDbkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDakI7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztTQUM3QjtRQUdELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBcUIsRUFBRSxFQUFFO1lBRW5ELFFBQVEsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDekIsS0FBSyxVQUFVLENBQUMsR0FBRztvQkFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekIsTUFBTTtnQkFDUixLQUFLLFVBQVUsQ0FBQyxJQUFJO29CQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUixLQUFLLFVBQVUsQ0FBQyxHQUFHO29CQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDbEMsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUdELGNBQWM7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDakIsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUNWLE1BQU0sRUFBRSxFQUNSLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDdkIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNuQixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QixDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQXdELEVBQUUsRUFBRTtZQUN2RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsUUFBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGFBQWEsQ0FBQyxRQUFnQjtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixNQUFNLFlBQVksR0FBVSxFQUFFLENBQUM7UUFDL0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQzlDLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU87WUFDbEMsSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsR0FBRztZQUM5QixJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDeEIsaURBQWlEO1lBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUNqQixJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLE1BQU0sRUFBRTt3QkFDOUMsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMvRyxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7NEJBQzVCLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQzlEO3FCQUNGO3lCQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsV0FBVyxFQUFFO3dCQUNsRCxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztxQkFDeEU7eUJBQU07d0JBQ0wsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNwRDtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0saUJBQWlCLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUNsRixJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBTTtRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUMxQixLQUFLLEVBQ0wsTUFBTSxDQUFDLFFBQVEsRUFDZixJQUFJLENBQUMsTUFBTSxFQUNYLE1BQU0sQ0FBQyxpQkFBaUIsRUFDeEIsTUFBTSxDQUFDLGNBQWMsRUFDckIsTUFBTSxDQUFDLFdBQVcsRUFDbEIsTUFBTSxDQUFDLG9CQUFvQixFQUMzQixNQUFNLENBQUMsc0JBQXNCLEVBQzdCLE1BQU0sQ0FBQyx1QkFBdUIsQ0FDL0IsQ0FBQztTQUNIO2FBQU07WUFDTCxNQUFNLFlBQVksR0FBRztnQkFDbkIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNuQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkcsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO2dCQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZO2dCQUNqQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsaUJBQWlCO2dCQUMzQyxjQUFjLEVBQUUsTUFBTSxDQUFDLGNBQWM7Z0JBQ3JDLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztnQkFDL0Isb0JBQW9CLEVBQUUsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjthQUN6RyxDQUFDO1lBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQzVCLFlBQVksQ0FDYixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJO1FBQ3JCLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBQ25CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtZQUNyQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUVILENBQUM7SUFDRCxRQUFRLENBQUMsS0FBaUIsRUFBRSxJQUFTO1FBQ25DLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDakMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDN0I7WUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFrQjtRQUMvQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFpQixFQUFFLElBQVM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsNEJBQTRCO1FBQzVCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDakgsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtnQkFDcEUscUJBQXFCO2dCQUNyQixJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzVCO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QjtZQUNELG9CQUFvQjtZQUNwQixJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDckgsOEJBQThCO2dCQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUMxRTtZQUNELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNuRztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFJO1FBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0csT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxjQUFjLENBQUMsVUFBVTtRQUN2QixJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxFQUFFO1lBQ2pDLE9BQU8sVUFBVSxLQUFLLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzlELElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQzthQUNoSDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7SUFDcEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFTO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxhQUFhLENBQUMsSUFBSSxFQUFFLFVBQVUsR0FBQyxJQUFJO1FBQ2pDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNmLElBQUcsVUFBVSxFQUFDO2dCQUNaLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM3QjtpQkFBSTtnQkFDSCxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEVBQUU7b0JBQ2xDLEtBQUssSUFBSTt3QkFDTCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2xDLEtBQUssSUFBSTt3QkFDTCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2xDLEtBQUssSUFBSTt3QkFDTCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2xDO3dCQUNJLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDckM7YUFDRjtTQUNGO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO29GQXJyQlksbUJBQW1CO29FQUFuQixtQkFBbUI7O21DQXVGTyxVQUFVO21DQUNKLFVBQVU7MkJBQzFDLHlCQUF5QixLQUFVLHlCQUF5QjttQ0FDN0IsVUFBVTttQ0FDZCxVQUFVO21DQUNaLFVBQVU7Ozs7Ozs7Ozs7O2tIQTVGbkMsMkJBQXVCOztZQy9DcEMsOEJBQXFCLHFCQUFBO1lBU2pCLHdFQXVDUTtZQUNSLDZCQUFPO1lBQ0wsa0VBc0lLO1lBQ1AsaUJBQVEsRUFBQSxFQUFBOzs7WUF6TFAsMENBQWU7WUFDTyxlQUFlO1lBQWYsaUNBQWUsOEJBQUEsMENBQUEsMENBQUEsb0NBQUEsNENBQUEsc0JBQUEsc0JBQUEsd0JBQUEsNEJBQUEsa0NBQUEsOEJBQUEsNEJBQUEsZ0RBQUEsd0JBQUEsMENBQUEsb0NBQUEsd0NBQUEsMEJBQUEsMENBQUEsNENBQUEsMENBQUEsd0JBQUE7WUFROUIsZUFBZ0I7WUFBaEIscUNBQWdCO1lBeUNELGVBQXVCO1lBQXZCLGtDQUF1Qjs7O0FEa0J2QjtJQUFmLFlBQVksRUFBRTswREFBdUI7QUFDdkI7SUFBZCxXQUFXLEVBQUU7NERBQXFCO0FBc0JuQjtJQUFmLFlBQVksRUFBRTsyREFBdUI7QUFDdEI7SUFBZixZQUFZLEVBQUU7c0RBQW1CO0FBQ2xCO0lBQWYsWUFBWSxFQUFFOzREQUF3QjtBQUN2QjtJQUFmLFlBQVksRUFBRTt5REFBc0I7QUFDckI7SUFBZixZQUFZLEVBQUU7cURBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFOzJEQUF1QjtBQUN0QjtJQUFmLFlBQVksRUFBRTtvREFBaUI7QUFDaEI7SUFBZixZQUFZLEVBQUU7NERBQXlCO0FBQ3hCO0lBQWYsWUFBWSxFQUFFOzZEQUEwQjtBQUN6QjtJQUFmLFlBQVksRUFBRTs0REFBeUI7QUFDeEI7SUFBZixZQUFZLEVBQUU7bURBQWdCO0FBQ2Y7SUFBZixZQUFZLEVBQUU7MkRBQXdCO0FBQ3ZCO0lBQWYsWUFBWSxFQUFFO3VEQUFvQjtBQUNuQjtJQUFmLFlBQVksRUFBRTtzREFBbUI7QUFDbEI7SUFBZixZQUFZLEVBQUU7cURBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFO3VEQUFtQjtBQVVsQjtJQUFmLFlBQVksRUFBRTt3REFBcUI7dUZBckVsQyxtQkFBbUI7Y0FUL0IsU0FBUzsyQkFFRSxhQUFhLFlBQ2IsWUFBWSxtQkFFTCx1QkFBdUIsQ0FBQyxNQUFNOzRRQXNCdEMsSUFBSTtrQkFBWixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDbUIsYUFBYTtrQkFBckMsS0FBSztZQUNrQixlQUFlO2tCQUF0QyxLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFFRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDSSxZQUFZO2tCQUFyQixNQUFNO1lBQ0UsT0FBTztrQkFBZixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQzJCLFlBQVk7a0JBQTVDLFNBQVM7bUJBQUMsb0JBQW9CO1lBSU4sY0FBYztrQkFBdEMsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLO1lBQ21CLGVBQWU7a0JBQXZDLEtBQUs7WUFDbUIsWUFBWTtrQkFBcEMsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLGNBQWM7a0JBQXRDLEtBQUs7WUFDbUIsT0FBTztrQkFBL0IsS0FBSztZQUNtQixlQUFlO2tCQUF2QyxLQUFLO1lBQ21CLGdCQUFnQjtrQkFBeEMsS0FBSztZQUNtQixlQUFlO2tCQUF2QyxLQUFLO1lBQ21CLE1BQU07a0JBQTlCLEtBQUs7WUFDbUIsY0FBYztrQkFBdEMsS0FBSztZQUNtQixVQUFVO2tCQUFsQyxLQUFLO1lBQ21CLFNBQVM7a0JBQWpDLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNtQixVQUFVO2tCQUFsQyxLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNJLFdBQVc7a0JBQXBCLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNO1lBQ0csZUFBZTtrQkFBeEIsTUFBTTtZQUNHLFlBQVk7a0JBQXJCLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNO1lBQ0csZUFBZTtrQkFBeEIsTUFBTTtZQUNHLE1BQU07a0JBQWYsTUFBTTtZQUNFLFNBQVM7a0JBQWpCLEtBQUs7WUFDbUIsV0FBVztrQkFBbkMsS0FBSztZQUNJLFVBQVU7a0JBQW5CLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNO1lBRUUsV0FBVztrQkFBbkIsS0FBSztZQWM2QyxZQUFZO2tCQUE5RCxTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNRLGtCQUFrQjtrQkFBMUUsU0FBUzttQkFBQyxzQkFBc0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDb0Isb0JBQW9CO2tCQUE5RixTQUFTO21CQUFDLHlCQUF5QixFQUFFLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFO1lBQ2pCLGlCQUFpQjtrQkFBeEUsU0FBUzttQkFBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDRixhQUFhO2tCQUFoRSxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNBLFdBQVc7a0JBQTVELFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQStFaEQsZUFBZTtrQkFEZCxZQUFZO21CQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIGNvdW50LCBkZWxheSwgcmVwZWF0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgRXhwb3J0QXNTZXJ2aWNlIH0gZnJvbSAnbmd4LWV4cG9ydC1hcyc7XHJcbmltcG9ydCB7IEdyaWRDb25maWcsIEZpZWxkIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgR3JpZEV4cENvbmZpZyB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWV4cC1jb25maWcnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL1RlbXBsYXRlVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ2VsZFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL0NlbGRUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBFeGNlbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL2V4Y2VsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9leHBvcnQtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWllJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcbmltcG9ydCB7IE56U2l6ZU1EU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IENtYWNzQ29udGV4dE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vY21hY3MtZHJvcGRvd24vY29udGV4dC1tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3MtaW5wdXQtbnVtYmVyL2NtYWNzLWlucHV0LW51bWJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelJlc2l6ZUV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9yZXNpemFibGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRhYmxlJyxcclxuICBleHBvcnRBczogJ2NtYWNzVGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdGFibGUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGV4cG9ydEFzU2VydmljZTogRXhwb3J0QXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjbWFjc0NvbnRleHRNZW51U2VydmljZTogQ21hY3NDb250ZXh0TWVudVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGV4Y2VsU2VydmljZTogRXhjZWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSxcclxuICAgIHByaXZhdGUgY29va2llczogQ29va2llU2VydmljZVxyXG4gICkge1xyXG4gICAgLy8gcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRhYmxlLXdyYXBwZXInKTtcclxuICB9XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBoZWFkZXJCb3R0b21TdHlsZSA9IHt9O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTURTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBzaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+O1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbEl0ZW1TaXplID0gMDtcclxuICBASW5wdXQoKSBsb2FkaW5nRGVsYXkgPSAwO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdJbmRpY2F0b3I6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHRvdGFsID0gMDtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgd2lkdGhDb25maWc6IHN0cmluZ1tdID0gW107XHJcbiAgQElucHV0KCkgcGFnZUluZGV4ID0gMTtcclxuICBASW5wdXQoKSBwYWdlU2l6ZSA9IDEwO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCkgZGF0YSA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogR3JpZENvbmZpZztcclxuICBAT3V0cHV0KCkgY29uZmlnQ2hhbmdlOiBFdmVudEVtaXR0ZXI8R3JpZENvbmZpZz4gPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRDb25maWc+KCk7XHJcbiAgQElucHV0KCkgZmllbGRJZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBhZ2luYXRpb25Qb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyB8ICdib3RoJyA9ICdib3R0b20nO1xyXG4gIEBJbnB1dCgpIHNjcm9sbDogeyB4Pzogc3RyaW5nIHwgbnVsbDsgeT86IHN0cmluZyB8IG51bGwgfSA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xyXG4gIEBWaWV3Q2hpbGQoJ3JlbmRlckl0ZW1UZW1wbGF0ZScpIG56SXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8e1xyXG4gICAgJGltcGxpY2l0OiAncGFnZScgfCAncHJldicgfCAnbmV4dCc7XHJcbiAgICBwYWdlOiBudW1iZXI7XHJcbiAgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHByaW50TGFuZHNjYXBlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgd3JhcExpbmVzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZyb250UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRlbXBsYXRlTW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVPblNpbmdsZVBhZ2UgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1F1aWNrSnVtcGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNpbXBsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2JveFNlbGVjdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbkxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRhdGFUYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UmF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNDb29raWVzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBleHBvcnRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8R3JpZEV4cENvbmZpZz4oKTtcclxuICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcmF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xyXG4gIEBPdXRwdXQoKSBvbmRsY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmNsaWNrRmF2b3JpdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25lZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgcmF0ZUNvdW50ID0gNTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbXVsdGlTZWxlY3QgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbnJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASW5wdXQoKSBjb250ZXh0bWVudTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgcHVibGljIGRyb3Bkb3duOiBhbnk7XHJcblxyXG4gIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgZGVmYXVsdFNvcnRPcmRlciA9IG51bGw7XHJcbiAgY2hlY2tib3hDYWNoZTogQ2hlY2tib3hTZWxlY3RbXSA9IFtdO1xyXG4gIGlzSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gIGFsbENoZWNrZWQgPSBmYWxzZTtcclxuICBlZGl0SWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgcHJvcGVydHk6IHN0cmluZyB8IG51bGw7XHJcbiAgcm93T25FZGl0aW9uID0gLTE7XHJcbiAgdGFwQ291bnQgPSAwO1xyXG4gIGxhc3RJZHhTZWxlY3RlZCA9IG51bGw7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUlucHV0JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dE51bWJlcicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dE51bWJlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50LCB7IHJlYWQ6IENtYWNzSW5wdXROdW1iZXJDb21wb25lbnQgfSkgaW5wdXROdW1iZXJDb21wb25lbnQ6IENtYWNzSW5wdXROdW1iZXJDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlRGF0ZVBpY2tlcicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBkYXRlUGlja2VyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVTZWxlY3QnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc2VsZWN0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVCb29sJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGJvb2xFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIF9vbnJlc2l6ZSQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgcHVibGljIG9ucmVzaXplb2JzID0gdGhpcy5fb25yZXNpemUkLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIF9vbnNvcnQkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHB1YmxpYyBvbnNvcnRvYnMgPSB0aGlzLl9vbnNvcnQkLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBvcmRlciA9IDA7XHJcblxyXG4gIGNsaWNrcyA9IDA7XHJcblxyXG4gIGNvbnRleHRNZW51KCRldmVudDogTW91c2VFdmVudCwgdGVtcGxhdGU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbWFjc0NvbnRleHRNZW51U2VydmljZS5jcmVhdGUoJGV2ZW50LCB0ZW1wbGF0ZSk7XHJcbiAgfVxyXG5cclxuICBzdGFydEVkaXQoaWQ6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZWRpdElkID0gaWQ7XHJcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmZvY3VzU2VsZWN0KHRoaXMuaW5wdXRFbGVtZW50KTtcclxuICAgIGlmICh0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuZm9jdXNTZWxlY3QodGhpcy5pbnB1dE51bWJlckNvbXBvbmVudC5pbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc29ydCgkZXZlbnQ6IGFueSwgZmllbGRQcm9wZXJ0eTogc3RyaW5nLCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy5fb25zb3J0JC5uZXh0KHsgc29ydE5hbWU6IGZpZWxkUHJvcGVydHksIHNvcnRWYWx1ZTogJGV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgb25SZXNpemUoZXZlbnQ6IE56UmVzaXplRXZlbnQsIGNvbDogc3RyaW5nLCBmaWVsZDogRmllbGQpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLl9vbnJlc2l6ZSQubmV4dCh7IGV2ZW50LCBjb2wsIGZpZWxkIH0pO1xyXG4gIH1cclxuXHJcbiAgb25SZXNpemVFdnQoeyB3aWR0aCB9OiBOelJlc2l6ZUV2ZW50LCBjb2w6IHN0cmluZywgZmllbGQ6IEZpZWxkKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmZpZWxkcykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uZmlnLmZpZWxkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5jb25maWcuZmllbGRzW2ldO1xyXG4gICAgICAgIGlmIChmaWVsZC5wcm9wZXJ0eSA9PT0gY29sKSB7XHJcbiAgICAgICAgICBjb25zdCBlbFdpZHRoID0gZmllbGQud2lkdGggPyBOdW1iZXIoZmllbGQud2lkdGgucmVwbGFjZSgvW15cXGQuLV0vZywgJycpKSA6IDA7XHJcbiAgICAgICAgICBpZiAodGhpcy5zY3JvbGwueCAmJiBpICsgMSA9PT0gdGhpcy5jb25maWcuZmllbGRzLmxlbmd0aCAtIDEgJiZcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXSAhPT0gbnVsbCAmJiB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxXaWR0aE5leHQgPSB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLndpZHRoID8gTnVtYmVyKHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ud2lkdGgucmVwbGFjZSgvW15cXGQuLV0vZywgJycpKSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gd2lkdGggLSBlbFdpZHRoO1xyXG4gICAgICAgICAgICBpZiAoZGVsdGEgPiAwICYmIGRlbHRhIDwgZWxXaWR0aE5leHQpIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS5taW5XaWR0aCAhPT0gbnVsbCAmJiB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLm1pbldpZHRoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIodGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS5taW5XaWR0aCkgPCAoZWxXaWR0aE5leHQgLSBkZWx0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS53aWR0aCA9IGAke2VsV2lkdGhOZXh0IC0gZGVsdGF9cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLndpZHRoID0gYCR7ZWxXaWR0aE5leHQgLSBkZWx0YX1weGA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkZWx0YSA8IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLndpZHRoID0gYCR7ZWxXaWR0aE5leHQgLSBkZWx0YX1weGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZpZWxkLndpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgICAgLy8gdGhpcy5zY3JvbGwueCA9IHRoaXMuc2Nyb2xsLnggPyBgJHtOdW1iZXIodGhpcy5zY3JvbGwueC5yZXBsYWNlKC9bXlxcZC4tXS9nLCAnJykpIC0gZWxXaWR0aCArIHdpZHRofXB4YCA6IG51bGw7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMub25yZXNpemUuZW1pdCh7IGNvbCwgY29uZmlnOiB0aGlzLmNvbmZpZyB9KTtcclxuICAgIHRoaXMuY29uZmlnQ2hhbmdlLmVtaXQodGhpcy5jb25maWcpO1xyXG4gICAgaWYgKHRoaXMuZ3JpZElEID09PSBudWxsIHx8IHRoaXMuZ3JpZElEID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaGFzQ29va2llcyAmJiB0aGlzLmdldEluZGV4Q29va2llKCkpIHtcclxuICAgICAgdGhpcy5jb29raWVzLnNldCh0aGlzLmdyaWRJRCwgSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcpLCAzNjUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICBoYW5kbGVNb3VzZURvd24oZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICh0aGlzLmVkaXRJZCAmJiB0aGlzLnByb3BlcnR5KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCAhPT0gZS50YXJnZXQpIHx8XHJcbiAgICAgICAgKHRoaXMuaW5wdXROdW1iZXJFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5pbnB1dE51bWJlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmRhdGVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB8fFxyXG4gICAgICAgICh0aGlzLnNlbGVjdEVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLnNlbGVjdEVsZW1lbnQubmF0aXZlRWxlbWVudCkgfHxcclxuICAgICAgICAgICh0aGlzLmJvb2xFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5ib29sRWxlbWVudC5uYXRpdmVFbGVtZW50KSkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICB0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50LmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLnJvd09uRWRpdGlvbiA+PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVt0aGlzLnJvd09uRWRpdGlvbl0pO1xyXG4gICAgICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzU2VsZWN0KGVsZW06IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGVsZW0pIHtcclxuICAgICAgZWxlbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW0ubmF0aXZlRWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEhlYWRlck1heFdpZHRoKGZpZWxkOiBGaWVsZCk6IHN0cmluZyB7XHJcbiAgICBpZiAoZmllbGQuc2hvd1NvcnQpIHtcclxuICAgICAgcmV0dXJuIGBjYWxjKDEwMCUgLSAxNXB4KWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYDEwMCVgO1xyXG4gIH1cclxuXHJcbiAgY2hpbGRPZihub2RlOiBhbnksIGFuY2VzdG9yOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGxldCBjaGlsZCA9IG5vZGU7XHJcbiAgICB3aGlsZSAoY2hpbGQgIT09IG51bGwpIHtcclxuICAgICAgaWYgKGNoaWxkID09PSBhbmNlc3RvcikgeyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0ICYmIGNoaWxkLmNsYXNzTGlzdC5sZW5ndGggPiAwICYmIGNoaWxkLmNsYXNzTmFtZSAmJiB0eXBlb2YgY2hpbGQuY2xhc3NOYW1lID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICYmIGNoaWxkLmNsYXNzTmFtZS5pbmRleE9mKCdjZGstb3ZlcmxheS1wYW5lJykgPj0gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkLmNoaWxkTm9kZXNbaV07XHJcbiAgICAgICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ0NNQUNTLU1PREFMJykgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgY2hpbGQgPSBjaGlsZC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGUoJGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoJGV2ZW50LmtleSA9PT0gKCdFbnRlcicgfHwgJ2VudGVyJykpIHtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbaW5kZXhdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucm93T25FZGl0aW9uID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbmRFZGl0TW9kZU5nTW9kZWwoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICB0aGlzLnJvd09uRWRpdGlvbiA9IC0xO1xyXG4gICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbaW5kZXhdKTtcclxuICB9XHJcblxyXG4gIGdldEluZGV4KGlkKTogbnVtYmVyIHtcclxuICAgIGxldCBpID0gLTE7XHJcbiAgICBpID0gdGhpcy5jaGVja2JveENhY2hlLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gaWQpO1xyXG4gICAgcmV0dXJuIGk7XHJcbiAgfVxyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGUucHVzaCh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGl0ZW0uc2VsZWN0ZWQgPyBpdGVtLnNlbGVjdGVkIDogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogeyAuLi5pdGVtIH0sXHJcbiAgICAgICAgb3JkZXI6IGl0ZW0uc2VsZWN0ZWQgPyB0aGlzLm9yZGVyKysgOiAtMVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWF4V2lkdGgoKTogc3RyaW5nIHtcclxuICAgIGlmICghdGhpcy5pbkxpbmVFZGl0KSB7XHJcbiAgICAgIHJldHVybiBgMTAwJWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYGNhbGMoMTAwJSAtIDIwcHgpYDtcclxuICB9XHJcblxyXG4gIG9uQnV0dG9uQ2xpY2soZmllbGQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5idXR0b25DbGljay5lbWl0KGZpZWxkKTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hDaGFuZ2UoJGV2ZW50LCBkYXRhKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5nZXRJbmRleChkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKV0ub3JkZXIgPSAkZXZlbnQgPyB0aGlzLm9yZGVyKysgOiAtMTtcclxuICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hDaGVja2JveFN0YXRlKG9uaW5pdCA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgaWYgKCFvbmluaXQpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChkYXRhU2VsZWN0ZWQubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0NoZWNrYm94U3RhdGUoKTogQ2hlY2tib3hTZWxlY3RbXSB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuYWxsQ2hlY2tlZCA9IChkYXRhU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAoZGF0YVNlbGVjdGVkLmxlbmd0aCA9PT0gdGhpcy5jaGVja2JveENhY2hlLmxlbmd0aCkpO1xyXG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPSBkYXRhU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAhdGhpcy5hbGxDaGVja2VkO1xyXG4gICAgcmV0dXJuIGRhdGFTZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIG5nTW9kZWxDaGFuZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5yb3dPbkVkaXRpb24gPSBpbmRleDtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICBvblJhdGVDaGFuZ2UoY291bnQ6IG51bWJlciwgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICBkYXRhW3RoaXMuY29uZmlnLmZpZWxkUmF0ZV0gPSBjb3VudDtcclxuICAgIHRoaXMucmF0ZUNoYW5nZS5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgb25GYXZvcml0ZUNoYW5nZShpc0Zhdm9yaXRlOiBib29sZWFuLCBmaWVsZDogRmllbGQsIGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPSBpc0Zhdm9yaXRlO1xyXG4gICAgdGhpcy5vbmNsaWNrRmF2b3JpdGUuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIG9uUmF0ZUNsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRzKCk6IEZpZWxkW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmhpZGRlbiA9PT0gdW5kZWZpbmVkIHx8ICFpdGVtLmhpZGRlbik7XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94QWxsQ2hhbmdlKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWQgPSBzdGF0dXM7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCgoc3RhdHVzKSA/IHRoaXMuZGF0YSA6IFtdKTtcclxuICB9XHJcblxyXG4gIGdldExhYmVsKGRhdGE6IGFueSwgZmllbGQ6IEZpZWxkKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIGlmIChmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3QgJiYgZmllbGQuc2VsZWN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICBjb25zdCBpdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChpdGVtID0+IGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGRhdGFbZmllbGQucHJvcGVydHldKTtcclxuICAgICAgcmVzdWx0ID0gKGl0ZW0gIT09IHVuZGVmaW5lZCkgPyBpdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF0gOiAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3QoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3Q7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQucmVhZG9ubHkgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5yZWFkb25seTtcclxuICB9XHJcblxyXG4gIGlzQm9vbGVhbihmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgfVxyXG5cclxuICBpc09iamVjdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgKHZhbHVlKSA9PT0gJ29iamVjdCc7XHJcbiAgfVxyXG5cclxuICBpc0RhdGUoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gIH1cclxuXHJcbiAgaXNTdHJpbmcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgfVxyXG5cclxuICBpc051bWJlcihmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLk51bWJlcjtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVEZWZhdWx0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlQnV0dG9uKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkJ1dHRvbjtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUYWcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGFnO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRlbXBsYXRlUmVmKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZUJ1dHRvbkZhdm9yaXRlKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkZhdm9yaXRlO1xyXG4gIH1cclxuXHJcbiAgaXNVbmRlZmluZWQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBpc1Jvd1NlbGVjdGVkKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZGF0YVNlbGVjdGQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgIHJldHVybiBkYXRhU2VsZWN0ZC5pbmRleE9mKGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pICE9PSAtMTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmhhc0Nvb2tpZXMgJiYgdGhpcy5nZXRJbmRleENvb2tpZSgpICYmIHRoaXMuY29va2llcy5jaGVjayh0aGlzLmdyaWRJRCkpIHtcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWdTdHIgPSB0aGlzLmNvb2tpZXMuZ2V0KHRoaXMuZ3JpZElEKTtcclxuICAgICAgLy8gcmVzZXQgZXhwaXJhdGlvbiBkYXRlXHJcbiAgICAgIHRoaXMuY29va2llcy5zZXQodGhpcy5ncmlkSUQsIHNhdmVkQ29uZmlnU3RyLCAzNjUpO1xyXG5cclxuICAgICAgLy8gcGFyc2UgY29va2llIHZhbHVlIHRvIHR5cGVzY3JpcHQgY29uc3RcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWcgPSBKU09OLnBhcnNlKHRoaXMuY29va2llcy5nZXQodGhpcy5ncmlkSUQpKSBhcyBHcmlkQ29uZmlnO1xyXG4gICAgICBpZiAodHlwZW9mIHNhdmVkQ29uZmlnID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gc2F2ZWRDb25maWc7XHJcbiAgICAgICAgdGhpcy5jb25maWdDaGFuZ2UuZW1pdCh0aGlzLmNvbmZpZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGdldEluZGV4Q29va2llKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgICAvKmxldCBhbGxvd0luZGV4UGFnZUNvb2tpZSA9IGZhbHNlO1xyXG4gICAgbGV0IGNvbnNlbnRDb29raWUgPSB0aGlzLmNvb2tpZXMuZ2V0KCdPcHRhbm9uQ29uc2VudCcpO1xyXG4gICAgaWYgKGNvbnNlbnRDb29raWUgIT0gXCJcIikge1xyXG4gICAgICBsZXQgZ3JvdXBJbmRleCA9IGNvbnNlbnRDb29raWUuaW5kZXhPZignZ3JvdXBzPScpO1xyXG4gICAgICBsZXQgZ3JvdXBzID0gY29uc2VudENvb2tpZS5zdWJzdHJpbmcoZ3JvdXBJbmRleCk7IC8vd2lsbCByZXR1cm4gc29tZXRoaW5nbGlrZSBncm91cHM9QzAwMDI6MCxDMDAwMToxXHJcbiAgICAgIGxldCBmdW5jdGlvbmFsR3JvdXBJbmRleCA9IGdyb3Vwcy5pbmRleE9mKCdDMDAwOTonKTtcclxuICAgICAgaWYgKGZ1bmN0aW9uYWxHcm91cEluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlWYWx1ZSA9IGdyb3Vwcy5zdWJzdHJpbmcoZnVuY3Rpb25hbEdyb3VwSW5kZXggKyA2LCBmdW5jdGlvbmFsR3JvdXBJbmRleCArIDcpO1xyXG4gICAgICAgIGlmIChOdW1iZXIoY2F0ZWdvcnlWYWx1ZSkgPT09IDEpIHtcclxuICAgICAgICAgIGFsbG93SW5kZXhQYWdlQ29va2llID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhbGxvd0luZGV4UGFnZUNvb2tpZTsqL1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrYm94U2VsZWN0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGFUYWJsZSAmJiB0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICB3aGlsZSAodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9wKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaG93UGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG5cclxuICAgIGlmICghdGhpcy5ncmlkSUQpIHtcclxuICAgICAgdGhpcy5ncmlkSUQgPSB0aGlzLnV0aWxTZXJ2aWNlLnV1aWR2NCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXhwb3J0RXZlbnQuc3Vic2NyaWJlKChjb25maWc6IEdyaWRFeHBDb25maWcpID0+IHtcclxuXHJcbiAgICAgIHN3aXRjaCAoY29uZmlnLmV4cG9ydFR5cGUpIHtcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuUGRmOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb1BkZihjb25maWcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlhzbHg6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvRXhjZWwoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5Qbmc6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvUG5nKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRDb21wbGV0ZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0Q29tcGxldGVkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGVja1NvcnRFdmVudCgpO1xyXG4gICAgdGhpcy5jaGVja1Jlc2l6ZUV2ZW50KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2tTb3J0RXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uc29ydG9icy5waXBlKFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5fb25yZXNpemUkKSxcclxuICAgICAgZGVsYXkoMzAwKSxcclxuICAgICAgcmVwZWF0KCksXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgKS5zdWJzY3JpYmUoKG9iajogYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IGYgPSB0aGlzLmNvbmZpZy5maWVsZHMuZmluZChlbCA9PiBlbC5wcm9wZXJ0eSA9PT0gb2JqLnNvcnROYW1lKTtcclxuICAgICAgZi5zb3J0T3JkZXIgPSBvYmouc29ydFZhbHVlO1xyXG4gICAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdCh7IHNvcnROYW1lOiBvYmouc29ydE5hbWUsIHNvcnRWYWx1ZTogb2JqLnNvcnRWYWx1ZSB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tSZXNpemVFdmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMub25yZXNpemVvYnMucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICApLnN1YnNjcmliZSgob2JqOiB7IGV2ZW50OiBOelJlc2l6ZUV2ZW50LCBjb2w6IHN0cmluZywgZmllbGQ6IEZpZWxkIH0pID0+IHtcclxuICAgICAgdGhpcy5jb25maWcgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnKSk7XHJcbiAgICAgIHRoaXMub25SZXNpemVFdnQob2JqLmV2ZW50LCBvYmouY29sLCBvYmouZmllbGQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb1BuZyhmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRUYWJsZSgncG5nJywgZmlsZU5hbWUsIHRoaXMuZ3JpZElEKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRvRXhjZWwoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnN0IGRhdGFUb0V4cG9ydDogYW55W10gPSBbXTtcclxuICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PlxyXG4gICAgICBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8XHJcbiAgICAgIGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRhZyB8fFxyXG4gICAgICBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZik7XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IHt9O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoIWZpZWxkLmhpZGRlbikge1xyXG4gICAgICAgICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RJdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChvcHRpb24gPT4gb3B0aW9uW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdEl0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpIHtcclxuICAgICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dC5leHBvcnRWYWx1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkYXRhVG9FeHBvcnQucHVzaChpdGVtVG9FeHBvcnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoJ0RELk1NLllZWVkuSEgubW0uc3MnKSArICdfJyArIGZpbGVOYW1lO1xyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0QXNFeGNlbEZpbGUoZGF0YVRvRXhwb3J0LCBmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb1BkZihjb25maWcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBpZiAoIWNvbmZpZy51c2VWZXJzaW9uMikge1xyXG4gICAgICB0aGlzLnV0aWxTZXJ2aWNlLmV4cG9ydFRhYmxlKFxyXG4gICAgICAgICdwZGYnLFxyXG4gICAgICAgIGNvbmZpZy5maWxlTmFtZSxcclxuICAgICAgICB0aGlzLmdyaWRJRCxcclxuICAgICAgICBjb25maWcuZXhwb3J0Q29tcGFueU5hbWUsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFVzZXJOYW1lLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRUaXRsZSxcclxuICAgICAgICBjb25maWcuZXhwb3J0Q29tcGFueUxvZ29VcmwsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFRhYmxlQ3VzdG9tV2lkdGgsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBleHBvcnRDb25maWcgPSB7XHJcbiAgICAgICAgY2hlY2tib3hTZWxlY3Q6IHRoaXMuY2hlY2tib3hTZWxlY3QsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtczogdGhpcy5jaGVja2JveFNlbGVjdCA/XHJcbiAgICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSA6IFtdLFxyXG4gICAgICAgIGZpbGVOYW1lOiBjb25maWcuZmlsZU5hbWUsXHJcbiAgICAgICAgZGF0ZVBpcGU6IHRoaXMuZGF0ZVBpcGUsXHJcbiAgICAgICAgZWxlbUlEOiB0aGlzLmdyaWRJRCxcclxuICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXHJcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcclxuICAgICAgICBjb2x1bW5TdHlsZXM6IGNvbmZpZy5jb2x1bW5TdHlsZXMsXHJcbiAgICAgICAgZXhwb3J0Q29tcGFueU5hbWU6IGNvbmZpZy5leHBvcnRDb21wYW55TmFtZSxcclxuICAgICAgICBleHBvcnRVc2VyTmFtZTogY29uZmlnLmV4cG9ydFVzZXJOYW1lLFxyXG4gICAgICAgIGV4cG9ydFRpdGxlOiBjb25maWcuZXhwb3J0VGl0bGUsXHJcbiAgICAgICAgZXhwb3J0Q29tcGFueUxvZ29Vcmw6IGNvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybCA/IGNvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybCA6ICdhc3NldHMvUFRvQl9sb2dvLnBuZycsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLnV0aWxTZXJ2aWNlLmV4cG9ydFRhYmxldjIoXHJcbiAgICAgICAgZXhwb3J0Q29uZmlnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgdGFwSGFuZGxlcigkZXZlbnQsIGRhdGEpOiB2b2lkIHtcclxuICAgIHRoaXMudGFwQ291bnQgKz0gMTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy50YXBDb3VudCA9PT0gMSkge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuY2xpY2tSb3cobnVsbCwgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50YXBDb3VudCA9IDA7XHJcbiAgICB9LCA2MDApO1xyXG4gICAgaWYgKHRoaXMudGFwQ291bnQgPiAxKSB7XHJcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmRibENsaWNrUm93KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgY2xpY2tSb3coZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGlja3MrKztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RSb3coZXZlbnQsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrcyA+IDEpIHtcclxuICAgICAgICB0aGlzLmRibENsaWNrUm93KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xpY2tzID0gMDtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxyXG5cclxuICBwcmV2ZW50RGVmYXVsdCgkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Um93KGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25jbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gICAgLyogR2V0IGluZGV4IG9mIHNlbGVjdGlvbiAqL1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgIGlmICghdGhpcy5jaGVja2JveFNlbGVjdCkge1xyXG4gICAgICBpZiAoZXZlbnQgJiYgKHRvQm9vbGVhbihldmVudC5jdHJsS2V5KSB8fCB0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpKSkge1xyXG4gICAgICAgIC8qIFNoaWZ0IFNlbGVjdGlvbiAqL1xyXG4gICAgICAgIGlmICh0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdE11bHRpcGxlKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3Rpb24oZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgLyogU2VsZWN0IGVsZW1lbnQgKi9cclxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPSBldmVudCAmJiB0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpID8gdHJ1ZSA6ICF0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkO1xyXG4gICAgICAgIC8qIFNhdmUgbGFzdCBpbmRleCBzZWxlY3RlZCAqL1xyXG4gICAgICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZCA/IGluZGV4IDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpO1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLm9yZGVyID0gdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZCA/IHRoaXMub3JkZXIrKyA6IC0xO1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHNlbGVjdGVkSXRlbXMuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpLm1hcChpdGVtID0+IGl0ZW0uZGF0YSkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0aW9uKGRhdGEpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkICYmIGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSAhPT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSlcclxuICAgICAgLmZvckVhY2goZWxlbSA9PiB7IGVsZW0uc2VsZWN0ZWQgPSBmYWxzZSwgZWxlbS5vcmRlciA9IC0xOyB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdE11bHRpcGxlKGN1cnJlbnRJZHgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxhc3RJZHhTZWxlY3RlZCAhPT0gbnVsbCkge1xyXG4gICAgICB3aGlsZSAoY3VycmVudElkeCAhPT0gdGhpcy5sYXN0SWR4U2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5sYXN0SWR4U2VsZWN0ZWRdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5sYXN0SWR4U2VsZWN0ZWRdLm9yZGVyID0gdGhpcy5vcmRlcisrO1xyXG4gICAgICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gY3VycmVudElkeCA+IHRoaXMubGFzdElkeFNlbGVjdGVkID8gdGhpcy5sYXN0SWR4U2VsZWN0ZWQgKyAxIDogdGhpcy5sYXN0SWR4U2VsZWN0ZWQgLSAxO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbY3VycmVudElkeF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbY3VycmVudElkeF0ub3JkZXIgPSB0aGlzLm9yZGVyKys7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IGN1cnJlbnRJZHg7XHJcbiAgfVxyXG5cclxuICBkYmxDbGlja1JvdyhkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25kbGNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm1EYXRlKGRhdGUsIGRhdGVGb3JtYXQ9bnVsbCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBtID0gbW9tZW50KGRhdGUpO1xyXG4gICAgaWYgKG0uaXNWYWxpZCgpKSB7XHJcbiAgICAgIGlmKGRhdGVGb3JtYXQpe1xyXG4gICAgICAgIHJldHVybiBtLmZvcm1hdChkYXRlRm9ybWF0KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgbS5sb2NhbGUodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSk7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtLmZvcm1hdCgnREQuTU0uWVlZWScpO1xyXG4gICAgICAgICAgICBjYXNlICdlbic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbS5mb3JtYXQoJ01NL0REL1lZWVknKTtcclxuICAgICAgICAgICAgY2FzZSAnamEnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG0uZm9ybWF0KCdZWVlZL01NL0REJyk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbS5mb3JtYXQoJ01NL0REL1lZWVknKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxufVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94U2VsZWN0IHtcclxuICBkYXRhOiBhbnk7XHJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW4gfCBudW1iZXI7XHJcbiAgb3JkZXI/OiBudW1iZXI7XHJcbn1cclxuIiwiPGRpdiBpZD1cInt7Z3JpZElEfX1cIj5cclxuICA8bnotdGFibGUgI2dyaWRDb21wb25lbnQgW256RGF0YV09XCJkYXRhXCIgW256U2hvd1RvdGFsXT1cInNob3dUb3RhbFwiIFtuelBhZ2VTaXplT3B0aW9uc109XCJwYWdlU2l6ZU9wdGlvbnNcIlxyXG4gICAgW256VmlydHVhbEl0ZW1TaXplXT1cInZpcnR1YWxJdGVtU2l6ZVwiIFtuekxvYWRpbmdEZWxheV09XCJsb2FkaW5nRGVsYXlcIlxyXG4gICAgW256TG9hZGluZ0luZGljYXRvcl09XCJsb2FkaW5nSW5kaWNhdG9yXCIgW256VG90YWxdPVwidG90YWxcIiBbbnpUaXRsZV09XCJ0aXRsZVwiIFtuekZvb3Rlcl09XCJmb290ZXJcIlxyXG4gICAgW256Tm9SZXN1bHRdPVwibm9SZXN1bHRcIiBbbnpXaWR0aENvbmZpZ109XCJ3aWR0aENvbmZpZ1wiIFtuelBhZ2VJbmRleF09XCJwYWdlSW5kZXhcIiBbbnpQYWdlU2l6ZV09XCJwYWdlU2l6ZVwiXHJcbiAgICBbbnpQYWdpbmF0aW9uUG9zaXRpb25dPVwicGFnaW5hdGlvblBvc2l0aW9uXCIgW256U2Nyb2xsXT1cInNjcm9sbFwiIFtuekZyb250UGFnaW5hdGlvbl09XCJmcm9udFBhZ2luYXRpb25cIlxyXG4gICAgW256VGVtcGxhdGVNb2RlXT1cInRlbXBsYXRlTW9kZVwiIFtuelNob3dQYWdpbmF0aW9uXT1cInNob3dQYWdpbmF0aW9uXCIgW256TG9hZGluZ109XCJsb2FkaW5nXCJcclxuICAgIFtuelNob3dTaXplQ2hhbmdlcl09XCJzaG93U2l6ZUNoYW5nZXJcIiBbbnpIaWRlT25TaW5nbGVQYWdlXT1cImhpZGVPblNpbmdsZVBhZ2VcIiBbbnpTaG93UXVpY2tKdW1wZXJdPVwic2hvd1F1aWNrSnVtcGVyXCJcclxuICAgIFtuelNpbXBsZV09XCJzaW1wbGVcIiBjbGFzcz1cImNtYWNzLXRhYmxlXCI+XHJcbiAgICA8dGhlYWQgKm5nSWY9XCIhZGF0YVRhYmxlXCI+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGggKm5nSWY9XCJjaGVja2JveFNlbGVjdFwiXHJcbiAgICAgICAgICAgIG56V2lkdGg9XCI0MHB4XCJcclxuICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCInNDBweCdcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbWFjcy1jaGVja2JveCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkXCIgW2luZGV0ZXJtaW5hdGVdPVwiaXNJbmRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgKGNoZWNrZWRDaGFuZ2UpPW9uQ2hlY2tib3hBbGxDaGFuZ2UoJGV2ZW50KT48L2xhYmVsPlxyXG4gICAgICAgIDwvdGg+XHJcbiAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBnZXRGaWVsZHMoKVwiXHJcbiAgICAgICAgICAgIG56LXJlc2l6YWJsZVxyXG4gICAgICAgICAgICBbbnpEaXNhYmxlZF09XCIhZmllbGQucmVzaXphYmxlXCJcclxuICAgICAgICAgICAgbnpCb3VuZHM9XCJ3aW5kb3dcIlxyXG4gICAgICAgICAgICBbbnpNaW5XaWR0aF09XCJmaWVsZC5taW5XaWR0aCA/IGZpZWxkLm1pbldpZHRoIDogMTAwXCJcclxuICAgICAgICAgICAgW256TWF4V2lkdGhdPVwiZmllbGQubWF4V2lkdGggPyBmaWVsZC5tYXhXaWR0aCA6IDUwMFwiXHJcbiAgICAgICAgICAgIG56UHJldmlld1xyXG4gICAgICAgICAgICAobnpSZXNpemVFbmQpPVwib25SZXNpemUoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSwgZmllbGQpXCJcclxuICAgICAgICAgICAgW256U2hvd1NvcnRdPVwiZmllbGQuc2hvd1NvcnRcIlxyXG4gICAgICAgICAgICBbbnpTb3J0RGlyZWN0aW9uc109XCJbJ2FzY2VuZCcsICdkZXNjZW5kJ11cIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtdGFibGUtc29ydGVkLW51bGxdPVwiZmllbGQuc2hvd1NvcnQgJiYgIWZpZWxkLnNvcnRPcmRlclwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy10YWJsZS1zb3J0ZWQtYXNjZW5kXT1cImZpZWxkLnNob3dTb3J0ICYmIGZpZWxkLnNvcnRPcmRlciA9PT0gJ2FzY2VuZCdcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtdGFibGUtc29ydGVkLWRlc2NlbmRdPVwiZmllbGQuc2hvd1NvcnQgJiYgZmllbGQuc29ydE9yZGVyID09PSAnZGVzY2VuZCdcIlxyXG4gICAgICAgICAgICBbKG56U29ydE9yZGVyKV09XCJmaWVsZC5zaG93U29ydCA/IGZpZWxkLnNvcnRPcmRlciA6IGRlZmF1bHRTb3J0T3JkZXJcIlxyXG4gICAgICAgICAgICAobnpTb3J0T3JkZXJDaGFuZ2UpPVwic29ydCgkZXZlbnQsIGZpZWxkLnByb3BlcnR5KVwiXHJcbiAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aF09XCJmaWVsZC5taW5XaWR0aCA/IGZpZWxkLm1pbldpZHRoIDogZmllbGQud2lkdGhcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiZmllbGQud2lkdGhcIlxyXG4gICAgICAgICAgICBbbnpXaWR0aF09XCJmaWVsZC53aWR0aFwiPlxyXG4gICAgICAgICAgPGRpdiBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0SGVhZGVyTWF4V2lkdGgoZmllbGQpXCJcclxuICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLXRhYmxlLW92ZXJmbG93LWNlbGwtaGVhZGVyXT1cIiF3cmFwTGluZXNcIj5cclxuICAgICAgICAgICAge3tmaWVsZC5kaXNwbGF5fX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPG56LXJlc2l6ZS1oYW5kbGUgbnpEaXJlY3Rpb249XCJyaWdodFwiICpuZ0lmPVwiZmllbGQucmVzaXphYmxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy10YWJsZS1yZXNpemUtdHJpZ2dlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9uei1yZXNpemUtaGFuZGxlPlxyXG4gICAgICAgIDwvdGg+XHJcbiAgICAgICAgPHRoIFtzdHlsZS5taW5XaWR0aF09XCInMTA1cHgnXCJcclxuICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cIicxMDVweCdcIlxyXG4gICAgICAgICAgICBbbnpXaWR0aF09XCInMTA1cHgnXCIgKm5nSWY9XCJzaG93UmF0ZVwiPjwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG4gICAgPHRib2R5PlxyXG4gICAgICA8dHIgKm5nRm9yPVwibGV0IGRhdGEgb2YgZ3JpZENvbXBvbmVudC5kYXRhOyBpbmRleCBhcyBpXCJcclxuICAgICAgICAgIChjbGljayk9XCJjbGlja1JvdygkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICh0b3VjaHN0YXJ0KT1cInRhcEhhbmRsZXIoJGV2ZW50LCBkYXRhKVwiXHJcbiAgICAgICAgICBjbGFzcz1cImNtYWNzLW5vLXNlbGVjdGlvblwiXHJcbiAgICAgICAgICBbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGVkLXJvd109XCJpc1Jvd1NlbGVjdGVkKGRhdGEpXCJcclxuICAgICAgICAgIChjb250ZXh0bWVudSk9XCJjb250ZXh0TWVudSgkZXZlbnQsIGNvbnRleHRNZW51VGVtcGxhdGUpXCI+XHJcblxyXG4gICAgICAgIDxjbWFjcy1kcm9wZG93bi1tZW51ICNjb250ZXh0TWVudVRlbXBsYXRlPVwiY21hY3NEcm9wZG93bk1lbnVcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGV4dG1lbnVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBkYXRhOiBkYXRhIH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2NtYWNzLWRyb3Bkb3duLW1lbnU+XHJcblxyXG4gICAgICAgIDx0ZCAqbmdJZj1cImNoZWNrYm94U2VsZWN0XCIgW3N0eWxlLm1heFdpZHRoXT1cIic0MHB4J1wiIFtzdHlsZS5taW5XaWR0aF09XCInNDBweCdcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbWFjcy1jaGVja2JveCBbKG5nTW9kZWwpXT1cImNoZWNrYm94Q2FjaGVbZ2V0SW5kZXgoZGF0YVtjb25maWcuZmllbGRJZF0pXS5zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgIChjaGVja2VkQ2hhbmdlKT1cIm9uQ2hlY2tib3hDaGFuZ2UoJGV2ZW50LCBkYXRhKVwiXHJcbiAgICAgICAgICAgICpuZ0lmPVwiZGF0YVtjb25maWcuZmllbGRJZF0gJiYgY2hlY2tib3hDYWNoZVtnZXRJbmRleChkYXRhW2NvbmZpZy5maWVsZElkXSldXCI+PC9sYWJlbD5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZ2V0RmllbGRzKCk7IGluZGV4IGFzIGZpXCIgW25nQ2xhc3NdPVwiKGlzQ2VsZFR5cGVEZWZhdWx0KGZpZWxkKSAmJiBpbkxpbmVFZGl0ICYmICFpc1JlYWRPbmx5KGZpZWxkKSkgPyBbJ2VkaXRhYmxlLXJvdycsICdjbWFjcy10YWJsZS1jZWxsLScgKyBmaWVsZC5wcm9wZXJ0eV0gOiBbJ2NtYWNzLXRhYmxlLWNlbGwtJyArIGZpZWxkLnByb3BlcnR5XVwiIFtzdHlsZS5tYXhXaWR0aF09XCInMTAwJSdcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0NlbGRUeXBlRGVmYXVsdChmaWVsZCkgJiYgaW5MaW5lRWRpdCAmJiAhaXNSZWFkT25seShmaWVsZCk7IGVsc2UgY29tcG9uZW50VHBsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0YWJsZS1jZWxsXCIgW3N0eWxlLm1heFdpZHRoXT1cIicxMDAlJ1wiXHJcbiAgICAgICAgICAgICAgKm5nSWY9XCIoZWRpdElkICE9PSBkYXRhW2NvbmZpZy5maWVsZElkXSB8fCBwcm9wZXJ0eSAhPT0gZmllbGQucHJvcGVydHkpOyBlbHNlIGVkaXRUcGxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdGFibGUtY2VsbC12YWx1ZS13cmFwXCIgW3N0eWxlLm1heFdpZHRoXT1cIicxMDAlJ1wiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0RhdGUoZmllbGQpICYmICFpc1NlbGVjdChmaWVsZClcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCIgc3R5bGU9XCJ3b3JkLWJyZWFrOiBicmVhay13b3JkO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhZmllbGQuc2hvd1Rvb2x0aXAgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09IG51bGwgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCB8fCBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gJydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCJnZXRNYXhXaWR0aCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gIT09IG51bGwgJiYgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XSAhPT0gJycgPyBkYXRhW2ZpZWxkLnByb3BlcnR5XSA6IGZpZWxkLnBsYWNlaG9sZGVyIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBzdHlsZT1cIndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnNob3dUb29sdGlwICYmIGRhdGFbZmllbGQucHJvcGVydHldISFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCJnZXRNYXhXaWR0aCgpXCIgY21hY3MtdG9vbHRpcCBbdGl0bGVdPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIiBwbGFjZW1lbnQ9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGRhdGFbZmllbGQucHJvcGVydHldIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgW2NsYXNzLmNtYWNzLXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIHN0eWxlPVwid29yZC1icmVhazogYnJlYWstd29yZDtcIj57eyBkYXRhW2ZpZWxkLnByb3BlcnR5XSB9fTwvZGl2PiAtLT5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzRGF0ZShmaWVsZClcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCIgc3R5bGU9XCJ3b3JkLWJyZWFrOiBicmVhay13b3JkO1wiPnt7IGRhdGFbZmllbGQucHJvcGVydHldICB8IGRhdGU6IGZpZWxkLmRhdGVGb3JtYXR9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNTZWxlY3QoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIHN0eWxlPVwid29yZC1icmVhazogYnJlYWstd29yZDtcIj57eyBnZXRMYWJlbChkYXRhLCBmaWVsZCkgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uVUlTbWFsbC1FZGl0IGNtYWNzLXRhYmxlLWVkaXQtaWNvblwiIChjbGljayk9XCJzdGFydEVkaXQoZGF0YVtjb25maWcuZmllbGRJZF0sIGZpZWxkLnByb3BlcnR5LCAkZXZlbnQpXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNlZGl0VHBsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCAjZmllbGRUeXBlSW5wdXQgKm5nSWY9XCJpc1N0cmluZyhmaWVsZClcIiB0eXBlPVwidGV4dFwiIGNtYWNzLWlucHV0IGNsYXNzPVwidGFibGVpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgIChkYmxjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZW5kRWRpdE1vZGUoJGV2ZW50LCBpKVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxjbWFjcy1pbnB1dC1udW1iZXIgI2ZpZWxkVHlwZUlucHV0TnVtYmVyIGlkPVwidGVzdGluZzJcIiBjbGFzcz1cInRhYmxlaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImlzTnVtYmVyKGZpZWxkKSAmJiAhaXNTZWxlY3QoZmllbGQpXCIgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLnByb3BlcnR5XVwiXHJcbiAgICAgICAgICAgICAgICBbY21hY3NTdGVwXT1cIjFcIiAoa2V5dXApPVwiZW5kRWRpdE1vZGUoJGV2ZW50LCBpKVwiIChuZ01vZGVsQ2hhbmdlKT1cIm5nTW9kZWxDaGFuZ2UoaSlcIj48L2NtYWNzLWlucHV0LW51bWJlcj5cclxuXHJcbiAgICAgICAgICAgICAgPGxhYmVsICNmaWVsZFR5cGVCb29sIGNtYWNzLWNoZWNrYm94ICpuZ0lmPVwiaXNCb29sZWFuKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCIgKG5nTW9kZWxDaGFuZ2UpPVwiZW5kRWRpdE1vZGVOZ01vZGVsKGkpXCI+PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgPGNtYWNzLWRhdGUtcGlja2VyXHJcbiAgICAgICAgICAgICAgICAjZmllbGRUeXBlRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpc0RhdGUoZmllbGQpXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIChkYmxjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIFthbGxvd0NsZWFyXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0YWJsZWlucHV0XCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZW5kRWRpdE1vZGVOZ01vZGVsKGkpXCI+XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1kYXRlLXBpY2tlcj5cclxuXHJcbiAgICAgICAgICAgICAgPGNtYWNzLXNlbGVjdCAjZmllbGRUeXBlU2VsZWN0ICpuZ0lmPVwiaXNTZWxlY3QoZmllbGQpXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIiBzaG93U2VhcmNoIGNsYXNzPVwidGFibGVpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgIChkYmxjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIiAobmdNb2RlbENoYW5nZSk9XCJlbmRFZGl0TW9kZU5nTW9kZWwoaSlcIj5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy1vcHRpb24gKm5nRm9yPVwibGV0IHNEYXRhIG9mIGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhXCIgbGFiZWw9XCJ7e3NEYXRhW2ZpZWxkLnNlbGVjdC5sYWJlbF19fVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzRGF0YVtmaWVsZC5zZWxlY3QudmFsdWVdfX1cIj48L2NtYWNzLW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L2NtYWNzLXNlbGVjdD5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNjb21wb25lbnRUcGw+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgI3RlbXBsYXRlUmVmQ2VsZCAqbmdJZj1cImlzQ2VsZFR5cGVUZW1wbGF0ZVJlZihmaWVsZClcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV0ucmVmOyBjb250ZXh0OiBkYXRhW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0XCI+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNDZWxkVHlwZUJ1dHRvbihmaWVsZClcIiBhcmlhLWxhYmVsPVwie3tmaWVsZC5kaXNwbGF5fX1cIiByb2xlPVwiYnV0dG9uXCIgY21hY3MtYnV0dG9uIHR5cGU9XCJ7e2ZpZWxkLmJ1dHRvbi5zdHlsZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPW9uQnV0dG9uQ2xpY2soZGF0YSk+XHJcbiAgICAgICAgICAgICAgPGkgKm5nSWY9XCIhaXNVbmRlZmluZWQoZmllbGQuYnV0dG9uLmljb24pOyBlbHNlIHRpdGxlVHBsXCIgbnotaWNvbiB0eXBlPVwie3tmaWVsZC5idXR0b24uaWNvbn19XCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjdGl0bGVUcGw+e3tmaWVsZC5kaXNwbGF5fX08L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzQ2VsZFR5cGVCdXR0b25GYXZvcml0ZShmaWVsZClcIj5cclxuICAgICAgICAgICAgICA8Y21hY3MtYnV0dG9uLWZhdm9yaXRlXHJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAgICAgICAgKG9uQ2hhbmdlZFZhbHVlKT1cIm9uRmF2b3JpdGVDaGFuZ2UoJGV2ZW50LCBmaWVsZCwgZGF0YSlcIj5cclxuICAgICAgICAgICAgICA8L2NtYWNzLWJ1dHRvbi1mYXZvcml0ZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpc0NlbGRUeXBlVGFnKGZpZWxkKSAmJiBmaWVsZC50YWcgIT09IHVuZGVmaW5lZFwiIFtpZF09XCJncmlkSUQgKyAnY29sdW1uJyArIGZpICsgJ3JvdycgKyBpXCJcclxuICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1mbGV4O1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCB0YWcgb2YgZGF0YVtmaWVsZC5wcm9wZXJ0eV0uc3BsaXQoJywnKVwiPlxyXG4gICAgICAgICAgICAgICAgPGNtYWNzLXRhZyAqbmdJZj1cInRhZy50cmltKCkubGVuZ3RoID4gMFwiIFtjb2xvcl09XCJmaWVsZC50YWcuY29sb3IgPyBkYXRhW2ZpZWxkLnRhZy5jb2xvcl0gOiBudWxsXCJcclxuICAgICAgICAgICAgICAgICAgW2NtYWNzR3JpZFR5cGVdPVwiZmllbGQudGFnLmNtYWNzR3JpZFR5cGUgPyBkYXRhW2ZpZWxkLnRhZy5jbWFjc0dyaWRUeXBlXSA6IG51bGxcIlxyXG4gICAgICAgICAgICAgICAgICBbY21hY3NTdGF0dXNUeXBlXT1cImZpZWxkLnRhZy5jbWFjc1N0YXR1c1R5cGUgPyBkYXRhW2ZpZWxkLnRhZy5jbWFjc1N0YXR1c1R5cGVdIDogbnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbWFjc1ByaW9yaXR5VHlwZV09XCJmaWVsZC50YWcuY21hY3NQcmlvcml0eVR5cGUgPyBkYXRhW2ZpZWxkLnRhZy5jbWFjc1ByaW9yaXR5VHlwZV0gOiBudWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IHRhZyB9fVxyXG4gICAgICAgICAgICAgICAgPC9jbWFjcy10YWc+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIighaW5MaW5lRWRpdCB8fCAgaXNSZWFkT25seShmaWVsZCkpICYmIGlzRGF0ZShmaWVsZClcIj5cclxuICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBzdHlsZT1cIndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XCI+e3sgdHJhbnNmb3JtRGF0ZShkYXRhW2ZpZWxkLnByb3BlcnR5XSwgZmllbGQuZGF0ZUZvcm1hdCkgfX08L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIoIWluTGluZUVkaXQgfHwgIGlzUmVhZE9ubHkoZmllbGQpKSAmJiAhaXNDZWxkVHlwZUJ1dHRvbihmaWVsZCkgJiYgIWlzQ2VsZFR5cGVCdXR0b25GYXZvcml0ZShmaWVsZCkgJiYgIWlzQ2VsZFR5cGVUYWcoZmllbGQpICYmICFpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQpICYmICFpc0RhdGUoZmllbGQpICYmICFpc1NlbGVjdChmaWVsZClcIj5cclxuICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBzdHlsZT1cIndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XCJcclxuICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWZpZWxkLnNob3dUb29sdGlwIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSBudWxsIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSB1bmRlZmluZWQgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09ICcnXCIgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKClcIj5cclxuICAgICAgICAgICAgICAgIHt7IGRhdGFbZmllbGQucHJvcGVydHldICE9PSBudWxsICYmIGRhdGFbZmllbGQucHJvcGVydHldICE9PSB1bmRlZmluZWQgJiYgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gIT09ICcnID8gZGF0YVtmaWVsZC5wcm9wZXJ0eV0gOiBmaWVsZC5wbGFjZWhvbGRlciB9fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIHN0eWxlPVwid29yZC1icmVhazogYnJlYWstd29yZDtcIlxyXG4gICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5zaG93VG9vbHRpcCAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XSEhXCIgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKClcIlxyXG4gICAgICAgICAgICAgICAgICAgY21hY3MtdG9vbHRpcCBbdGl0bGVdPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIiBwbGFjZW1lbnQ9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAge3sgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8IS0tIDxkaXYgW2NsYXNzLmNtYWNzLXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIHN0eWxlPVwid29yZC1icmVhazogYnJlYWstd29yZDtcIj57eyBkYXRhW2ZpZWxkLnByb3BlcnR5XSB9fTwvZGl2PiAtLT5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNTZWxlY3QoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCIgc3R5bGU9XCJ3b3JkLWJyZWFrOiBicmVhay13b3JkO1wiPnt7IGdldExhYmVsKGRhdGEsIGZpZWxkKSB9fTwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgKm5nSWY9XCJzaG93UmF0ZVwiIGNsYXNzPVwiY21hY3MtdGFibGUtcmF0aW5nXCI+XHJcbiAgICAgICAgICA8bnotcmF0ZSBbbmdNb2RlbF09XCJkYXRhW2NvbmZpZy5maWVsZFJhdGVdXCJcclxuICAgICAgICAgICAgICAgICAgIFtuekNvdW50XT0ncmF0ZUNvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25SYXRlQ2hhbmdlKCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiIWluTGluZUVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmF0ZUNsaWNrKCRldmVudClcIj48L256LXJhdGU+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGJvZHk+XHJcbiAgPC9uei10YWJsZT5cclxuPC9kaXY+XHJcbiJdfQ==