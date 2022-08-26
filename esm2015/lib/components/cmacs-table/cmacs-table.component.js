import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, delay, repeat } from 'rxjs/operators';
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
import * as i11 from "ng-zorro-antd/resizable";
import * as i12 from "../cmacs-dropdown/dropdown-menu.component";
import * as i13 from "../cmacs-tooltip/tooltip";
import * as i14 from "../cmacs-input/cmacs-input.directive";
import * as i15 from "../cmacs-input-number/cmacs-input-number.component";
import * as i16 from "../cmacs-date-picker/date-picker.component";
import * as i17 from "../cmacs-select/cmacs-select.component";
import * as i18 from "../cmacs-select/cmacs-option.component";
import * as i19 from "../cmacs-button/cmacs-button.component";
import * as i20 from "ng-zorro-antd/core/transition-patch";
import * as i21 from "ng-zorro-antd/icon";
import * as i22 from "../cmacs-tag/tag.component";
import * as i23 from "ng-zorro-antd/rate";
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
function CmacsTableComponent_thead_3_th_3_nz_resize_handle_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-resize-handle", 12);
    i0.ɵɵelement(1, "div", 13);
    i0.ɵɵelementEnd();
} }
function CmacsTableComponent_thead_3_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵlistener("nzResizeEnd", function CmacsTableComponent_thead_3_th_3_Template_th_nzResizeEnd_0_listener($event) { i0.ɵɵrestoreView(_r12); const field_r9 = ctx.$implicit; const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onResize($event, field_r9.property, field_r9); })("nzSortOrderChange", function CmacsTableComponent_thead_3_th_3_Template_th_nzSortOrderChange_0_listener($event) { i0.ɵɵrestoreView(_r12); const field_r9 = ctx.$implicit; const ctx_r13 = i0.ɵɵnextContext(2); return field_r9.showSort ? field_r9.sortOrder : ctx_r13.defaultSortOrder = $event; })("nzSortOrderChange", function CmacsTableComponent_thead_3_th_3_Template_th_nzSortOrderChange_0_listener($event) { i0.ɵɵrestoreView(_r12); const field_r9 = ctx.$implicit; const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.sort($event, field_r9.property); });
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
    i0.ɵɵproperty("nzDisabled", !field_r9.resizable)("nzMinWidth", field_r9.minWidth ? field_r9.minWidth : 100)("nzMaxWidth", field_r9.maxWidth ? field_r9.maxWidth : 500)("nzShowSort", field_r9.showSort)("nzSortOrder", field_r9.showSort ? field_r9.sortOrder : ctx_r4.defaultSortOrder)("nzWidth", field_r9.width);
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
    i0.ɵɵelementStart(0, "thead");
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵtemplate(2, CmacsTableComponent_thead_3_th_2_Template, 2, 6, "th", 5);
    i0.ɵɵtemplate(3, CmacsTableComponent_thead_3_th_3_Template, 4, 22, "th", 6);
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
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 22);
    i0.ɵɵlistener("ngModelChange", function CmacsTableComponent_tr_5_td_4_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const data_r15 = i0.ɵɵnextContext(2).$implicit; const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.checkboxCache[ctx_r22.getIndex(data_r15[ctx_r22.config.fieldId])].selected = $event; })("checkedChange", function CmacsTableComponent_tr_5_td_4_label_1_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const data_r15 = i0.ɵɵnextContext(2).$implicit; const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.onCheckboxChange($event, data_r15); });
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
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "div", 29);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(3, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_3_Template, 4, 6, "ng-container", 3);
    i0.ɵɵtemplate(4, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_4_Template, 3, 3, "ng-container", 3);
    i0.ɵɵelementStart(5, "i", 30);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_Template_i_click_5_listener($event) { i0.ɵɵrestoreView(_r54); const field_r29 = i0.ɵɵnextContext(2).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; const ctx_r52 = i0.ɵɵnextContext(); return ctx_r52.startEdit(data_r15[ctx_r52.config.fieldId], field_r29.property, $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r64); const ctx_r63 = i0.ɵɵnextContext(5); return ctx_r63.preventDefault($event); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r64); const ctx_r65 = i0.ɵɵnextContext(5); return ctx_r65.preventDefault($event); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r64); const field_r29 = i0.ɵɵnextContext(3).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; return (data_r15[field_r29.property] = $event); })("keyup", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r64); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r69 = i0.ɵɵnextContext(); return ctx_r69.endEditMode($event, i_r16); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r15[field_r29.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 42, 43);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r75); const ctx_r74 = i0.ɵɵnextContext(5); return ctx_r74.preventDefault($event); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r75); const ctx_r76 = i0.ɵɵnextContext(5); return ctx_r76.preventDefault($event); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r75); const field_r29 = i0.ɵɵnextContext(3).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; return (data_r15[field_r29.property] = $event); })("keyup", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r75); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r80 = i0.ɵɵnextContext(); return ctx_r80.endEditMode($event, i_r16); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r75); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r82 = i0.ɵɵnextContext(); return ctx_r82.ngModelChange(i_r16); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r15[field_r29.property])("cmacsStep", 1);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 44, 45);
    i0.ɵɵlistener("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_label_2_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r89); const field_r29 = i0.ɵɵnextContext(3).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; return (data_r15[field_r29.property] = $event); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_label_2_Template_label_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r89); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r91 = i0.ɵɵnextContext(); return ctx_r91.endEditModeNgModel(i_r16); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r15[field_r29.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template(rf, ctx) { if (rf & 1) {
    const _r97 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-date-picker", 46, 47);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_click_0_listener($event) { i0.ɵɵrestoreView(_r97); const ctx_r96 = i0.ɵɵnextContext(5); return ctx_r96.preventDefault($event); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r97); const ctx_r98 = i0.ɵɵnextContext(5); return ctx_r98.preventDefault($event); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r97); const field_r29 = i0.ɵɵnextContext(3).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; return (data_r15[field_r29.property] = $event); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r97); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r102 = i0.ɵɵnextContext(); return ctx_r102.endEditModeNgModel(i_r16); });
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
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_click_0_listener($event) { i0.ɵɵrestoreView(_r111); const ctx_r110 = i0.ɵɵnextContext(5); return ctx_r110.preventDefault($event); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r111); const ctx_r112 = i0.ɵɵnextContext(5); return ctx_r112.preventDefault($event); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r111); const field_r29 = i0.ɵɵnextContext(3).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; return (data_r15[field_r29.property] = $event); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r111); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r116 = i0.ɵɵnextContext(); return ctx_r116.endEditModeNgModel(i_r16); });
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
    const _r140 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 56);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r140); const data_r15 = i0.ɵɵnextContext(3).$implicit; const ctx_r138 = i0.ɵɵnextContext(); return ctx_r138.onButtonClick(data_r15); });
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_i_1_Template, 1, 1, "i", 57);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_ng_template_2_Template, 1, 1, "ng-template", null, 58, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r134 = i0.ɵɵreference(3);
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r124 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("aria-label", field_r29.display);
    i0.ɵɵpropertyInterpolate("type", field_r29.button.style);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r124.isUndefined(field_r29.button.icon))("ngIfElse", _r134);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "cmacs-tag", 60);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r142 = i0.ɵɵnextContext(2);
    const fi_r30 = ctx_r142.index;
    const field_r29 = ctx_r142.$implicit;
    const ctx_r143 = i0.ɵɵnextContext();
    const i_r16 = ctx_r143.index;
    const data_r15 = ctx_r143.$implicit;
    const ctx_r125 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r125.gridID + "column" + fi_r30 + "row" + i_r16);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", field_r29.tag.color ? data_r15[field_r29.tag.color] : null)("cmacsGridType", field_r29.tag.cmacsGridType ? data_r15[field_r29.tag.cmacsGridType] : null)("cmacsStatusType", field_r29.tag.cmacsStatusType ? data_r15[field_r29.tag.cmacsStatusType] : null)("cmacsPriorityType", field_r29.tag.cmacsPriorityType ? data_r15[field_r29.tag.cmacsPriorityType] : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r15[field_r29.property], " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r126 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r126.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r126.transformDate(data_r15[field_r29.property]));
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r146 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r146.getMaxWidth());
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r146.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r15[field_r29.property] !== null && data_r15[field_r29.property] !== undefined && data_r15[field_r29.property] !== "" ? data_r15[field_r29.property] : field_r29.placeholder, " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r147 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r147.getMaxWidth());
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r147.wrapLines);
    i0.ɵɵproperty("title", data_r15[field_r29.property]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r15[field_r29.property], " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_div_1_Template, 2, 5, "div", 31);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_div_2_Template, 2, 6, "div", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r29.showTooltip || data_r15[field_r29.property] === null || data_r15[field_r29.property] === undefined || data_r15[field_r29.property] === "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r29.showTooltip && data_r15[field_r29.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r128 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r128.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r128.getLabel(data_r15, field_r29));
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_0_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_Template, 4, 4, "button", 52);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_div_2_Template, 3, 6, "div", 53);
    i0.ɵɵtemplate(3, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_3_Template, 3, 3, "ng-container", 3);
    i0.ɵɵtemplate(4, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(5, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_Template, 3, 3, "ng-container", 3);
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext().$implicit;
    const ctx_r33 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r33.isCeldTypeTemplateRef(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r33.isCeldTypeButton(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r33.isCeldTypeTag(field_r29) && field_r29.tag !== undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (!ctx_r33.inLineEdit || ctx_r33.isReadOnly(field_r29)) && ctx_r33.isDate(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (!ctx_r33.inLineEdit || ctx_r33.isReadOnly(field_r29)) && !ctx_r33.isCeldTypeButton(field_r29) && !ctx_r33.isCeldTypeTag(field_r29) && !ctx_r33.isCeldTypeTemplateRef(field_r29) && !ctx_r33.isDate(field_r29) && !ctx_r33.isSelect(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r33.isSelect(field_r29));
} }
const _c6 = function (a1) { return ["editable-row", a1]; };
const _c7 = function (a0) { return [a0]; };
function CmacsTableComponent_tr_5_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 23);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_container_1_Template, 4, 2, "ng-container", 24);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_Template, 6, 6, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = ctx.$implicit;
    const _r32 = i0.ɵɵreference(3);
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "100%");
    i0.ɵɵproperty("ngClass", ctx_r19.isCeldTypeDefault(field_r29) && ctx_r19.inLineEdit && !ctx_r19.isReadOnly(field_r29) ? i0.ɵɵpureFunction1(5, _c6, "cmacs-table-cell-" + field_r29.property) : i0.ɵɵpureFunction1(7, _c7, "cmacs-table-cell-" + field_r29.property));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.isCeldTypeDefault(field_r29) && ctx_r19.inLineEdit && !ctx_r19.isReadOnly(field_r29))("ngIfElse", _r32);
} }
function CmacsTableComponent_tr_5_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r159 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 61);
    i0.ɵɵelementStart(1, "nz-rate", 62);
    i0.ɵɵlistener("ngModelChange", function CmacsTableComponent_tr_5_td_6_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r159); const data_r15 = i0.ɵɵnextContext().$implicit; const ctx_r157 = i0.ɵɵnextContext(); return ctx_r157.onRateChange($event, data_r15); })("click", function CmacsTableComponent_tr_5_td_6_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r159); const ctx_r160 = i0.ɵɵnextContext(2); return ctx_r160.onRateClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r15[ctx_r20.config.fieldRate])("nzCount", ctx_r20.rateCount)("nzDisabled", !ctx_r20.inLineEdit);
} }
const _c8 = function (a0) { return { data: a0 }; };
function CmacsTableComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r163 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 15);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r163); const data_r15 = ctx.$implicit; const ctx_r162 = i0.ɵɵnextContext(); return ctx_r162.clickRow($event, data_r15); })("touchstart", function CmacsTableComponent_tr_5_Template_tr_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r163); const data_r15 = ctx.$implicit; const ctx_r164 = i0.ɵɵnextContext(); return ctx_r164.tapHandler($event, data_r15); })("contextmenu", function CmacsTableComponent_tr_5_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r163); const _r17 = i0.ɵɵreference(2); const ctx_r165 = i0.ɵɵnextContext(); return ctx_r165.contextMenu($event, _r17); });
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
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.contextmenu)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c8, data_r15));
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
                    //this.scroll.x = this.scroll.x ? `${Number(this.scroll.x.replace(/[^\d.-]/g, '')) - elWidth + width}px` : null;
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
        if (m.isValid()) {
            m.locale(this.i18n.getLocale().locale);
            return m.format(this.i18n.getLocale().locale === 'de' ? 'DD.MM.YYYY' : 'MM/DD/YYYY');
        }
        return '';
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
    } }, inputs: { size: "size", showTotal: "showTotal", pageSizeOptions: "pageSizeOptions", virtualScroll: "virtualScroll", virtualItemSize: "virtualItemSize", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", total: "total", title: "title", footer: "footer", noResult: "noResult", widthConfig: "widthConfig", pageIndex: "pageIndex", pageSize: "pageSize", data: "data", config: "config", fieldId: "fieldId", gridID: "gridID", paginationPosition: "paginationPosition", scroll: "scroll", printLandscape: "printLandscape", wrapLines: "wrapLines", frontPagination: "frontPagination", templateMode: "templateMode", bordered: "bordered", showPagination: "showPagination", loading: "loading", showSizeChanger: "showSizeChanger", hideOnSinglePage: "hideOnSinglePage", showQuickJumper: "showQuickJumper", simple: "simple", checkboxSelect: "checkboxSelect", inLineEdit: "inLineEdit", dataTable: "dataTable", showRate: "showRate", exportEvent: "exportEvent", rateCount: "rateCount", multiSelect: "multiSelect", contextmenu: "contextmenu" }, outputs: { configChange: "configChange", buttonClick: "buttonClick", rateChange: "rateChange", selectionChange: "selectionChange", ondlclickRow: "ondlclickRow", onclickRow: "onclickRow", onedit: "onedit", sortChange: "sortChange", onresize: "onresize" }, exportAs: ["cmacsTable"], features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 26, consts: [[3, "id"], [1, "cmacs-table", 3, "nzData", "nzShowTotal", "nzPageSizeOptions", "nzVirtualItemSize", "nzLoadingDelay", "nzLoadingIndicator", "nzTotal", "nzTitle", "nzFooter", "nzNoResult", "nzWidthConfig", "nzPageIndex", "nzPageSize", "nzPaginationPosition", "nzScroll", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], ["gridComponent", ""], [4, "ngIf"], ["class", "cmacs-no-selection", 3, "ant-table-selected-row", "click", "touchstart", "contextmenu", 4, "ngFor", "ngForOf"], ["nzWidth", "40px", 3, "maxWidth", "minWidth", 4, "ngIf"], ["nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzDisabled", "nzMinWidth", "nzMaxWidth", "nzShowSort", "cmacs-table-sorted-null", "cmacs-table-sorted-ascend", "cmacs-table-sorted-descend", "nzSortOrder", "minWidth", "maxWidth", "nzWidth", "nzResizeEnd", "nzSortOrderChange", 4, "ngFor", "ngForOf"], [3, "minWidth", "maxWidth", "nzWidth", 4, "ngIf"], ["nzWidth", "40px"], ["cmacs-checkbox", "", 3, "ngModel", "indeterminate", "ngModelChange", "checkedChange"], ["nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzDisabled", "nzMinWidth", "nzMaxWidth", "nzShowSort", "nzSortOrder", "nzWidth", "nzResizeEnd", "nzSortOrderChange"], ["nzDirection", "right", 4, "ngIf"], ["nzDirection", "right"], [1, "cmacs-table-resize-trigger"], [3, "nzWidth"], [1, "cmacs-no-selection", 3, "click", "touchstart", "contextmenu"], ["contextMenuTemplate", "cmacsDropdownMenu"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "maxWidth", "minWidth", 4, "ngIf"], [3, "ngClass", "maxWidth", 4, "ngFor", "ngForOf"], ["class", "cmacs-table-rating", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], ["componentTpl", ""], ["class", "editable-cell", 3, "maxWidth", 4, "ngIf", "ngIfElse"], ["editTpl", ""], [1, "editable-cell"], [1, "editable-cell-value-wrap"], [1, "iconUISmall-Edit", "cmacs-table-edit-icon", 3, "click"], ["style", "word-break: break-word;", 3, "cmacs-table-overflow-cell", "maxWidth", 4, "ngIf"], ["style", "word-break: break-word;", "cmacs-tooltip", "", "placement", "right", 3, "cmacs-table-overflow-cell", "maxWidth", "title", 4, "ngIf"], [2, "word-break", "break-word"], ["cmacs-tooltip", "", "placement", "right", 2, "word-break", "break-word", 3, "title"], ["type", "text", "cmacs-input", "", "class", "tableinput", 3, "ngModel", "click", "dblclick", "ngModelChange", "keyup", 4, "ngIf"], ["id", "testing2", "class", "tableinput", 3, "ngModel", "cmacsStep", "click", "dblclick", "ngModelChange", "keyup", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "tableinput", 3, "allowClear", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["style", "width: 100%;", "showSearch", "", "class", "tableinput", 3, "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["type", "text", "cmacs-input", "", 1, "tableinput", 3, "ngModel", "click", "dblclick", "ngModelChange", "keyup"], ["fieldTypeInput", ""], ["id", "testing2", 1, "tableinput", 3, "ngModel", "cmacsStep", "click", "dblclick", "ngModelChange", "keyup"], ["fieldTypeInputNumber", ""], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange"], ["fieldTypeBool", ""], [1, "tableinput", 3, "allowClear", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDatePicker", ""], ["showSearch", "", 1, "tableinput", 2, "width", "100%", 3, "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeSelect", ""], [3, "label", "value", 4, "ngFor", "ngForOf"], [3, "label", "value"], ["role", "button", "cmacs-button", "", 3, "aria-label", "type", "click", 4, "ngIf"], [3, "id", 4, "ngIf"], ["templateRefCeld", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "button", "cmacs-button", "", 3, "aria-label", "type", "click"], ["nz-icon", "", 3, "type", 4, "ngIf", "ngIfElse"], ["titleTpl", ""], ["nz-icon", "", 3, "type"], [3, "color", "cmacsGridType", "cmacsStatusType", "cmacsPriorityType"], [1, "cmacs-table-rating"], [3, "ngModel", "nzCount", "nzDisabled", "ngModelChange", "click"]], template: function CmacsTableComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i8.NzTableComponent, i6.NgIf, i8.NzTbodyComponent, i6.NgForOf, i8.NzTheadComponent, i8.NzTrDirective, i8.NzTableCellDirective, i8.NzThMeasureDirective, i9.CmacsCheckboxComponent, i10.NgControlStatus, i10.NgModel, i8.NzThAddOnComponent, i11.NzResizableDirective, i11.NzResizeHandleComponent, i12.CmacsDropdownMenuComponent, i6.NgTemplateOutlet, i6.NgClass, i13.CmacsTooltipDirective, i14.CmacsInputDirective, i10.DefaultValueAccessor, i15.CmacsInputNumberComponent, i16.CmacsDatePickerComponent, i17.CmacsSelectComponent, i18.CmacsOptionComponent, i19.CmacsButtonComponent, i20.ɵNzTransitionPatchDirective, i21.NzIconDirective, i22.CmacsTagComponent, i23.NzRateComponent], pipes: [i6.DatePipe], styles: [".cmacs-table .cmacs-table-sorted-ascend .anticon.ant-table-column-sorter-up:before,   .cmacs-table .cmacs-table-sorted-null .anticon.ant-table-column-sorter-up:before{font-family:ArrowSmall!important;content:\"\\e90f\";display:block;font-size:25px;margin-top:24px}  .cmacs-table .ant-table-thead th.ant-table-column-has-sorters{cursor:pointer;transition:none!important}  .cmacs-table .anticon.ant-table-column-sorter-down.active:after,   .cmacs-table .anticon.ant-table-column-sorter-up.active:before{color:#2a7cff}  .cmacs-table .cmacs-table-sorted-descend .anticon.ant-table-column-sorter-down:after{font-family:ArrowSmall!important;content:\"\\e90c\";display:block;font-size:25px}  .cmacs-table .ant-table-column-sorter-up+.ant-table-column-sorter-down{margin-top:0}  .cmacs-table .anticon.ant-table-column-sorter-down svg,   .cmacs-table .anticon.ant-table-column-sorter-up svg{display:none}.cmacs-table-resize-trigger[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#bfbfbf;position:absolute;right:10px;opacity:0}  .cmacs-table th:hover .cmacs-table-resize-trigger{opacity:1}  .cmacs-table .nz-resizable-preview{border-top:none!important;border-left:none!important;border:solid #2a7cff;border-width:0 1px 0 0;height:100%;max-height:100%;padding:0;margin:0}  .cmacs-table .nz-resizable .ant-table-filter-trigger-container{right:10px;display:inline-block}  .cmacs-compact-table .ant-table-cell.ant-table-cell-fix-right,   .cmacs-table .ant-table-cell.ant-table-cell-fix-left{z-index:10}  .cmacs-table .nz-resizable.ant-table-cell.ant-table-cell-fix-left.ant-table-cell-fix-left-last .nz-resizable-handle-right{right:0!important}  .cmacs-table .ant-table-filter-column{margin:0}  .cmacs-table .ant-table-filter-column-title{padding:0}  .cmacs-table .nz-resizable-handle-right{right:0}  .cmacs-table .ant-table-column-sorter-inner{margin-left:0;margin-right:0}  .cmacs-table .ant-table-placeholder .ant-table-cell,   .cmacs-table .ant-table-tbody>tr.ant-table-placeholder:hover{box-shadow:none!important;border-bottom:none!important}  .cmacs-table tr.ant-table-placeholder .ant-table-expanded-row-fixed{margin:0!important;padding:0!important}  .cmacs-table .ant-table-tbody>tr.ant-table-placeholder:hover>td{box-shadow:none!important}.cmacs-table[_ngcontent-%COMP%]   .cmacs-table-rating[_ngcontent-%COMP%]{min-width:105px}.cmacs-table-overflow-cell[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:100%;vertical-align:middle}.cmacs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] > .cmacs-table-overflow-cell[_ngcontent-%COMP%]{line-height:24px!important}.cmacs-table[_ngcontent-%COMP%]   .cmacs-table-overflow-cell-header[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}  .cmacs-table .ant-table-column-sorter{width:12px;display:none!important;right:8px;position:absolute}  .cmacs-table th:hover .ant-table-column-sorter{display:table-cell!important;right:8px;position:absolute}  .cmacs-table .ant-table-column-sorters,   .cmacs-table .ant-table-header-column{width:100%;padding:0}  .cmacs-table .ant-table-column-sorters span:not(.ant-table-column-sorter){width:100%}  .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:hover{background-color:#f6f7fb}  .cmacs-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters:hover:before{background-color:transparent}.cmacs-table[_ngcontent-%COMP%]   .editable-cell[_ngcontent-%COMP%]{position:relative}.cmacs-table[_ngcontent-%COMP%]   .editable-cell-value-wrap[_ngcontent-%COMP%]{padding:6px 0;cursor:pointer;min-height:30px;max-height:30px}.cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover > td.editable-row[_ngcontent-%COMP%]   .cmacs-table-edit-icon[_ngcontent-%COMP%]{opacity:1}.cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td.editable-row[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]   td.editable-row[_ngcontent-%COMP%]:first-child{padding:9px 10px}  .cmacs-table .ant-rate{height:16px;font-size:16px}  .cmacs-table .ant-rate-star{font-size:16px;margin:0}.cmacs-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]{box-shadow:0 3px 7px -3px rgba(5,6,6,.18)}  .cmacs-table .ant-table-thead>tr>th{color:#656c79;background-color:#f6f7fb;border-bottom:1px solid transparent}  .cmacs-table .ant-table-thead th.ant-table-column-has-sorters:hover{background-color:#f6f7fb!important}  .cmacs-table .ant-table-tbody>tr>td{padding:12px 10px;border-bottom:0;box-shadow:inset 0 -1px 0 #dee0e5}  .cmacs-table .ant-table-tbody>tr:hover{box-shadow:0 3px 7px -3px rgba(5,6,6,.18);position:relative}  .cmacs-table .ant-table-tbody>tr td:first-child{padding:12px 10px;box-shadow:inset 0 -1px 0 #dee0e5}  .cmacs-table .ant-table-thead>tr>th{padding:15px 10px}  .cmacs-table .ant-table-tbody>tr:hover td:first-child{box-shadow:inset 3px 0 0 #2a7cff,inset 0 -1px 0 #dee0e5}  .cmacs-table .ant-table-tbody>.ant-table-selected-row:hover td:first-child{box-shadow:inset 3px 0 0 #2a7cff,inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-table .ant-table-tbody>.ant-table-selected-row:hover td{box-shadow:inset 0 1px 0 #2a7cff,inset 0 -1px 0 #2a7cff}  .cmacs-table .ant-table-thead{line-height:1.25;position:relative}.cmacs-table[_ngcontent-%COMP%]   .editable-row[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ng-star-inserted[_ngcontent-%COMP%],   .cmacs-table .ant-table-thead{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal}.cmacs-table[_ngcontent-%COMP%]   .editable-row[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ng-star-inserted[_ngcontent-%COMP%]{line-height:1.5}.cmacs-table[_ngcontent-%COMP%]   cmacs-tag[_ngcontent-%COMP%]{padding:1px 5px!important;height:unset}.cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr.ant-table-row-hover[_ngcontent-%COMP%]:not(.ant-table-expanded-row):not(.ant-table-selected-row) > td[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row) > td[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row) > td[_ngcontent-%COMP%],   .cmacs-table .ant-table-thead>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td{background-color:#fff}  .cmacs-table .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#f2f7ff}  .cmacs-table .ant-spin-nested-loading{clear:both}  .cmacs-table .ant-table table{border-collapse:collapse}  .cmacs-table .tableinput.ant-input:focus,   .cmacs-table .tableinput.ant-input:hover{box-shadow:none;border:1px solid #2a7cff}  .cmacs-table .ant-input-number:not(.cmacs-datetime-picker-input-number),   .cmacs-table .tableinput,   .cmacs-table .tableinput .ant-select-selection--single,   .cmacs-table .tableinput .datepickerwidth,   .cmacs-table .tableinput .datepickerwidth .ant-input,   .cmacs-table .tableinput>*{height:30px!important}  .cmacs-table tr:not(.cmacs-no-selection) .tableinput{margin-left:-5px}  .cmacs-table tr:not(.cmacs-no-selection) input.tableinput{padding:5px 4px}  .cmacs-table cmacs-date-picker.tableinput{margin-left:-5px}  .cmacs-table .tableinput .datepickerwidth .ant-input{padding:0 4px}  .cmacs-table .tableinput .ant-select-selection--single .ant-select-selection__rendered{margin-left:4px;line-height:30px}  .cmacs-table .tableinput .ant-input-number-input{padding-left:4px}  .cmacs-table .ant-input-number:not(.cmacs-datetime-picker-input-number){overflow:visible}  .cmacs-table cmacs-input-number.tableinput,   .cmacs-table cmacs-select.tableinput{margin-left:-5px}  .cmacs-table .tableinput .ant-input-number-handler-wrap{height:28px!important}.cmacs-table[_ngcontent-%COMP%]   .cmacs-no-selection[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}  .cmacs-table .cmacs-no-selection .editable-cell,   .cmacs-table .cmacs-no-selection .tableinput{margin-top:-4px;margin-bottom:-3px;height:30px}  .cmacs-table .cmacs-no-selection input.tableinput{padding:6px 4px 5px;margin-left:-5px}  .cmacs-table .cmacs-no-selection .editable-cell-value-wrap{height:30px}  .cmacs-table table{table-layout:fixed}  .cmacs-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters{display:inline-flex;position:relative;top:3px}  .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-down:not(.on),   .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-up:not(.on),   .cmacs-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{color:#bec4cd}  .cmacs-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner-full{margin-left:0!important}  .cmacs-table .ant-table-fixed-header .ant-table-scroll .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1}  .cmacs-table .ant-table-fixed-header>.ant-table-container>.ant-table-body{scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin;overflow:auto!important;position:inherit}[_ngcontent-%COMP%]::-webkit-scrollbar,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar{width:6px;height:6px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover,   .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}.cmacs-table-edit-icon[_ngcontent-%COMP%]{position:relative;top:3px;left:5px;opacity:0;float:right;font-size:14px}.cmacs-table-edit-icon[_ngcontent-%COMP%]:hover{color:#2a7cff}"], changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRhYmxlL2NtYWNzLXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10YWJsZS9jbWFjcy10YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBSU4sU0FBUyxFQUNULFlBQVksRUFDWix1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFTLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUtqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU1RCxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLHFCQUFxQixDQUFDO0FBSTdCLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRy9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMxQnZGLDZCQUc4QjtJQUM1QixnQ0FDOEM7SUFEeEIseU5B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RTtvQkFDMUIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTt3QkFDN0ksTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFILE1BQU0sS0FBSyxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7d0JBQzlCLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsV0FBVyxFQUFFOzRCQUNwQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO2dDQUNuRyxJQUFJLElBQUksQ0FBQyxNQUFN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LE1BQU07WUFFRSxXQUFXO2tCQUFuQixLQUFLO1lBYzZDLFlBQVk7a0JBQTlELFNBQVM7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ1Esa0JBQWtCO2tCQUExRSxTQUFTO21CQUFDLHNCQUFzQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNvQixvQkFBb0I7a0JBQTlGLFNBQVM7bUJBQUMseUJBQXlCLEVBQUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUU7WUFDakIsaUJBQWlCO2tCQUF4RSxTQUFTO21CQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNGLGFBQWE7a0JBQWhFLFNBQVM7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ0EsV0FBVztrQkFBNUQsU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBMEVoRCxlQUFlO2tCQURkLFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgY291bnQsIGRlbGF5LCByZXBlYXQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBFeHBvcnRBc1NlcnZpY2UsIEV4cG9ydEFzQ29uZmlnIH0gZnJvbSAnbmd4LWV4cG9ydC1hcyc7XHJcbmltcG9ydCB7IEdyaWRDb25maWcsIEZpZWxkIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgR3JpZEV4cENvbmZpZyB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWV4cC1jb25maWcnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL1RlbXBsYXRlVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ2VsZFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL0NlbGRUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBFeGNlbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL2V4Y2VsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9leHBvcnQtdHlwZS5lbnVtJztcclxuaW1wb3J0IHtDb29raWVTZXJ2aWNlfSBmcm9tIFwibmd4LWNvb2tpZS1zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWllJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcbmltcG9ydCB7IE56U2l6ZU1EU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IENtYWNzQ29udGV4dE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vY21hY3MtZHJvcGRvd24vY29udGV4dC1tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbWFjc0Ryb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLWRyb3Bkb3duL2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NJbnB1dE51bWJlckNvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLWlucHV0LW51bWJlci9jbWFjcy1pbnB1dC1udW1iZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3MtZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpSZXNpemVFdmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmVzaXphYmxlJztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRhYmxlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBoZWFkZXJCb3R0b21TdHlsZSA9IHt9O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTURTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBzaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+O1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbEl0ZW1TaXplID0gMDtcclxuICBASW5wdXQoKSBsb2FkaW5nRGVsYXkgPSAwO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdJbmRpY2F0b3I6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHRvdGFsID0gMDtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgd2lkdGhDb25maWc6IHN0cmluZ1tdID0gW107XHJcbiAgQElucHV0KCkgcGFnZUluZGV4ID0gMTtcclxuICBASW5wdXQoKSBwYWdlU2l6ZSA9IDEwO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCkgZGF0YSA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogR3JpZENvbmZpZztcclxuICBAT3V0cHV0KCkgY29uZmlnQ2hhbmdlOiBFdmVudEVtaXR0ZXI8R3JpZENvbmZpZz4gPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRDb25maWc+KCk7XHJcbiAgQElucHV0KCkgZmllbGRJZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBhZ2luYXRpb25Qb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyB8ICdib3RoJyA9ICdib3R0b20nO1xyXG4gIEBJbnB1dCgpIHNjcm9sbDogeyB4Pzogc3RyaW5nIHwgbnVsbDsgeT86IHN0cmluZyB8IG51bGwgfSA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xyXG4gIEBWaWV3Q2hpbGQoJ3JlbmRlckl0ZW1UZW1wbGF0ZScpIG56SXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8e1xyXG4gICAgJGltcGxpY2l0OiAncGFnZScgfCAncHJldicgfCAnbmV4dCc7XHJcbiAgICBwYWdlOiBudW1iZXI7XHJcbiAgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHByaW50TGFuZHNjYXBlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgd3JhcExpbmVzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZyb250UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRlbXBsYXRlTW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVPblNpbmdsZVBhZ2UgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1F1aWNrSnVtcGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNpbXBsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2JveFNlbGVjdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbkxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRhdGFUYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UmF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGV4cG9ydEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkRXhwQ29uZmlnPigpO1xyXG4gIEBPdXRwdXQoKSBidXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSByYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XHJcbiAgQE91dHB1dCgpIG9uZGxjbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmNsaWNrUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIHJhdGVDb3VudCA9IDU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG11bHRpU2VsZWN0ID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25yZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQElucHV0KCkgY29udGV4dG1lbnU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIHB1YmxpYyBkcm9wZG93bjogYW55O1xyXG5cclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGRlZmF1bHRTb3J0T3JkZXIgPSBudWxsO1xyXG4gIGNoZWNrYm94Q2FjaGU6IENoZWNrYm94U2VsZWN0W10gPSBbXTtcclxuICBpc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBhbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgZWRpdElkOiBzdHJpbmcgfCBudWxsO1xyXG4gIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gIHJvd09uRWRpdGlvbiA9IC0xO1xyXG4gIHRhcENvdW50ID0gMDtcclxuICBsYXN0SWR4U2VsZWN0ZWQgPSBudWxsO1xyXG5cclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlSW5wdXROdW1iZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXROdW1iZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NJbnB1dE51bWJlckNvbXBvbmVudCwgeyByZWFkOiBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50IH0pIGlucHV0TnVtYmVyQ29tcG9uZW50OiBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZURhdGVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgZGF0ZVBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlU2VsZWN0JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHNlbGVjdEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlQm9vbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBib29sRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBfb25yZXNpemUkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHB1YmxpYyBvbnJlc2l6ZW9icyA9IHRoaXMuX29ucmVzaXplJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBfb25zb3J0JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwdWJsaWMgb25zb3J0b2JzID0gdGhpcy5fb25zb3J0JC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29udGV4dE1lbnUoJGV2ZW50OiBNb3VzZUV2ZW50LCB0ZW1wbGF0ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmNtYWNzQ29udGV4dE1lbnVTZXJ2aWNlLmNyZWF0ZSgkZXZlbnQsIHRlbXBsYXRlKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0RWRpdChpZDogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5lZGl0SWQgPSBpZDtcclxuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuZm9jdXNTZWxlY3QodGhpcy5pbnB1dEVsZW1lbnQpO1xyXG4gICAgaWYgKHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5mb2N1c1NlbGVjdCh0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50LmlucHV0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzb3J0KCRldmVudDogYW55LCBmaWVsZFByb3BlcnR5OiBzdHJpbmcsKSB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLl9vbnNvcnQkLm5leHQoeyBzb3J0TmFtZTogZmllbGRQcm9wZXJ0eSwgc29ydFZhbHVlOiAkZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZShldmVudDogTnpSZXNpemVFdmVudCwgY29sOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuX29ucmVzaXplJC5uZXh0KHsgZXZlbnQsIGNvbCwgZmllbGQgfSk7XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZUV2dCh7IHdpZHRoIH06IE56UmVzaXplRXZlbnQsIGNvbDogc3RyaW5nLCBmaWVsZDogRmllbGQpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuZmllbGRzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25maWcuZmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmNvbmZpZy5maWVsZHNbaV07XHJcbiAgICAgICAgaWYgKGZpZWxkLnByb3BlcnR5ID09PSBjb2wpIHtcclxuICAgICAgICAgIGNvbnN0IGVsV2lkdGggPSBmaWVsZC53aWR0aCA/IE51bWJlcihmaWVsZC53aWR0aC5yZXBsYWNlKC9bXlxcZC4tXS9nLCAnJykpIDogMDtcclxuICAgICAgICAgIGlmICh0aGlzLnNjcm9sbC54ICYmIGkgKyAxID09PSB0aGlzLmNvbmZpZy5maWVsZHMubGVuZ3RoIC0gMSAmJiB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdICE9PSBudWxsICYmIHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbFdpZHRoTmV4dCA9IHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ud2lkdGggPyBOdW1iZXIodGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS53aWR0aC5yZXBsYWNlKC9bXlxcZC4tXS9nLCAnJykpIDogMDtcclxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSB3aWR0aCAtIGVsV2lkdGg7XHJcbiAgICAgICAgICAgIGlmIChkZWx0YSA+IDAgJiYgZGVsdGEgPCBlbFdpZHRoTmV4dCkge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLm1pbldpZHRoICE9PSBudWxsICYmIHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ubWluV2lkdGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ubWluV2lkdGggPCAoZWxXaWR0aE5leHQgLSBkZWx0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS53aWR0aCA9IGAke2VsV2lkdGhOZXh0IC0gZGVsdGF9cHhgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLndpZHRoID0gYCR7ZWxXaWR0aE5leHQgLSBkZWx0YX1weGA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkZWx0YSA8IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLndpZHRoID0gYCR7ZWxXaWR0aE5leHQgLSBkZWx0YX1weGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZpZWxkLndpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgICAgLy90aGlzLnNjcm9sbC54ID0gdGhpcy5zY3JvbGwueCA/IGAke051bWJlcih0aGlzLnNjcm9sbC54LnJlcGxhY2UoL1teXFxkLi1dL2csICcnKSkgLSBlbFdpZHRoICsgd2lkdGh9cHhgIDogbnVsbDtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5vbnJlc2l6ZS5lbWl0KHsgY29sOiBjb2wsIGNvbmZpZzogdGhpcy5jb25maWcgfSk7XHJcbiAgICB0aGlzLmNvbmZpZ0NoYW5nZS5lbWl0KHRoaXMuY29uZmlnKTtcclxuICAgIGlmICh0aGlzLmdyaWRJRCA9PT0gbnVsbCB8fCB0aGlzLmdyaWRJRCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdldEluZGV4Q29va2llKCkpIHtcclxuICAgICAgdGhpcy5jb29raWVzLnNldCh0aGlzLmdyaWRJRCwgSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcpLCAzNjUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICBoYW5kbGVNb3VzZURvd24oZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICh0aGlzLmVkaXRJZCAmJiB0aGlzLnByb3BlcnR5KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCAhPT0gZS50YXJnZXQpIHx8XHJcbiAgICAgICAgKHRoaXMuaW5wdXROdW1iZXJFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5pbnB1dE51bWJlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmRhdGVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB8fFxyXG4gICAgICAgICh0aGlzLnNlbGVjdEVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLnNlbGVjdEVsZW1lbnQubmF0aXZlRWxlbWVudCkgfHxcclxuICAgICAgICAgICh0aGlzLmJvb2xFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5ib29sRWxlbWVudC5uYXRpdmVFbGVtZW50KSkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICB0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50LmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLnJvd09uRWRpdGlvbiA+PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVt0aGlzLnJvd09uRWRpdGlvbl0pO1xyXG4gICAgICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzU2VsZWN0KGVsZW06IGFueSkge1xyXG4gICAgaWYgKGVsZW0pIHtcclxuICAgICAgZWxlbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW0ubmF0aXZlRWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEhlYWRlck1heFdpZHRoKGZpZWxkOiBGaWVsZCkge1xyXG4gICAgaWYgKGZpZWxkLnNob3dTb3J0KSB7XHJcbiAgICAgIHJldHVybiBgY2FsYygxMDAlIC0gMTVweClgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAxMDAlYDtcclxuICB9XHJcblxyXG4gIGNoaWxkT2Yobm9kZTogYW55LCBhbmNlc3RvcjogYW55KSB7XHJcbiAgICBsZXQgY2hpbGQgPSBub2RlO1xyXG4gICAgd2hpbGUgKGNoaWxkICE9PSBudWxsKSB7XHJcbiAgICAgIGlmIChjaGlsZCA9PT0gYW5jZXN0b3IpIHJldHVybiB0cnVlO1xyXG4gICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0ICYmIGNoaWxkLmNsYXNzTGlzdC5sZW5ndGggPiAwICYmIGNoaWxkLmNsYXNzTmFtZSAmJiB0eXBlb2YgY2hpbGQuY2xhc3NOYW1lID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICYmIGNoaWxkLmNsYXNzTmFtZS5pbmRleE9mKCdjZGstb3ZlcmxheS1wYW5lJykgPj0gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkLmNoaWxkTm9kZXNbaV07XHJcbiAgICAgICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ0NNQUNTLU1PREFMJykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfTtcclxuICAgICAgY2hpbGQgPSBjaGlsZC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGUoJGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoJGV2ZW50LmtleSA9PT0gKCdFbnRlcicgfHwgJ2VudGVyJykpIHtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbaW5kZXhdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucm93T25FZGl0aW9uID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbmRFZGl0TW9kZU5nTW9kZWwoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICB0aGlzLnJvd09uRWRpdGlvbiA9IC0xO1xyXG4gICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbaW5kZXhdKTtcclxuICB9XHJcblxyXG4gIGdldEluZGV4KGlkKTogbnVtYmVyIHtcclxuICAgIGxldCBpID0gLTE7XHJcbiAgICBpID0gdGhpcy5jaGVja2JveENhY2hlLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gaWQpO1xyXG4gICAgcmV0dXJuIGk7XHJcbiAgfVxyXG5cclxuICBvcmRlciA9IDA7XHJcbiAgdXBkYXRlQ2hlY2tib3hDYWNoZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZS5wdXNoKHtcclxuICAgICAgICBzZWxlY3RlZDogaXRlbS5zZWxlY3RlZCA/IGl0ZW0uc2VsZWN0ZWQgOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiB7IC4uLml0ZW0gfSxcclxuICAgICAgICBvcmRlcjogaXRlbS5zZWxlY3RlZCA/IHRoaXMub3JkZXIrKyA6IC0xXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRNYXhXaWR0aCgpIHtcclxuICAgIGlmICghdGhpcy5pbkxpbmVFZGl0KSB7XHJcbiAgICAgIHJldHVybiBgMTAwJWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYGNhbGMoMTAwJSAtIDIwcHgpYDtcclxuICB9XHJcblxyXG4gIG9uQnV0dG9uQ2xpY2soZmllbGQ6IGFueSkge1xyXG4gICAgdGhpcy5idXR0b25DbGljay5lbWl0KGZpZWxkKTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hDaGFuZ2UoJGV2ZW50LCBkYXRhKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5nZXRJbmRleChkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKV0ub3JkZXIgPSAkZXZlbnQgPyB0aGlzLm9yZGVyKysgOiAtMTtcclxuICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hDaGVja2JveFN0YXRlKG9uaW5pdCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgaWYgKCFvbmluaXQpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChkYXRhU2VsZWN0ZWQubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0NoZWNrYm94U3RhdGUoKSB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuYWxsQ2hlY2tlZCA9IChkYXRhU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAoZGF0YVNlbGVjdGVkLmxlbmd0aCA9PT0gdGhpcy5jaGVja2JveENhY2hlLmxlbmd0aCkpO1xyXG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPSBkYXRhU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAhdGhpcy5hbGxDaGVja2VkO1xyXG4gICAgcmV0dXJuIGRhdGFTZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIG5nTW9kZWxDaGFuZ2UoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5yb3dPbkVkaXRpb24gPSBpbmRleDtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICBvblJhdGVDaGFuZ2UoY291bnQ6IG51bWJlciwgZGF0YTogYW55KSB7XHJcbiAgICBkYXRhW3RoaXMuY29uZmlnLmZpZWxkUmF0ZV0gPSBjb3VudDtcclxuICAgIHRoaXMucmF0ZUNoYW5nZS5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgb25SYXRlQ2xpY2soZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZHMoKTogRmllbGRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uaGlkZGVuID09PSB1bmRlZmluZWQgfHwgIWl0ZW0uaGlkZGVuKTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hBbGxDaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHN0YXR1cztcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KChzdGF0dXMpID8gdGhpcy5kYXRhIDogW10pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWwoZGF0YTogYW55LCBmaWVsZDogRmllbGQpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCAmJiBmaWVsZC5zZWxlY3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKGl0ZW0gPT4gaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW1bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gZGF0YVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgICByZXN1bHQgPSAoaXRlbSAhPT0gdW5kZWZpbmVkKSA/IGl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXSA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdChmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdDtcclxuICB9XHJcblxyXG4gIGlzUmVhZE9ubHkoZmllbGQ6IEZpZWxkKTogYm9vbGVhbntcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLnJlYWRvbmx5ICE9PSB1bmRlZmluZWQgJiYgZmllbGQucmVhZG9ubHk7XHJcbiAgfVxyXG5cclxuICBpc0Jvb2xlYW4oZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5Cb29sZWFuO1xyXG4gIH1cclxuXHJcbiAgaXNPYmplY3QodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mICh2YWx1ZSkgPT09ICdvYmplY3QnO1xyXG4gIH1cclxuXHJcbiAgaXNEYXRlKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICB9XHJcblxyXG4gIGlzU3RyaW5nKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgaXNOdW1iZXIoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5OdW1iZXI7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlRGVmYXVsdChmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZUJ1dHRvbihmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5CdXR0b247XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlVGFnKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRhZztcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUZW1wbGF0ZVJlZihmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG5cclxuICBpc1VuZGVmaW5lZCh2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGlzUm93U2VsZWN0ZWQoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgcmV0dXJuIGRhdGFTZWxlY3RkLmluZGV4T2YoZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSkgIT09IC0xO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGV4cG9ydEFzU2VydmljZTogRXhwb3J0QXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjbWFjc0NvbnRleHRNZW51U2VydmljZTogQ21hY3NDb250ZXh0TWVudVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGV4Y2VsU2VydmljZTogRXhjZWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSxcclxuICAgIHByaXZhdGUgY29va2llczogQ29va2llU2VydmljZVxyXG4gICkge1xyXG4gICAgLy8gcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRhYmxlLXdyYXBwZXInKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmdldEluZGV4Q29va2llKCkgJiYgdGhpcy5jb29raWVzLmNoZWNrKHRoaXMuZ3JpZElEKSkge1xyXG4gICAgICBjb25zdCBzYXZlZENvbmZpZ1N0ciA9IHRoaXMuY29va2llcy5nZXQodGhpcy5ncmlkSUQpO1xyXG4gICAgICAvLyByZXNldCBleHBpcmF0aW9uIGRhdGVcclxuICAgICAgdGhpcy5jb29raWVzLnNldCh0aGlzLmdyaWRJRCwgc2F2ZWRDb25maWdTdHIsIDM2NSk7XHJcblxyXG4gICAgICAvLyBwYXJzZSBjb29raWUgdmFsdWUgdG8gdHlwZXNjcmlwdCBjb25zdFxyXG4gICAgICBjb25zdCBzYXZlZENvbmZpZyA9IEpTT04ucGFyc2UodGhpcy5jb29raWVzLmdldCh0aGlzLmdyaWRJRCkpIGFzIEdyaWRDb25maWc7XHJcbiAgICAgIGlmICh0eXBlb2Ygc2F2ZWRDb25maWcgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHNhdmVkQ29uZmlnO1xyXG4gICAgICAgIHRoaXMuY29uZmlnQ2hhbmdlLmVtaXQodGhpcy5jb25maWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleENvb2tpZSgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gICAgLypsZXQgYWxsb3dJbmRleFBhZ2VDb29raWUgPSBmYWxzZTtcclxuICAgIGxldCBjb25zZW50Q29va2llID0gdGhpcy5jb29raWVzLmdldCgnT3B0YW5vbkNvbnNlbnQnKTtcclxuICAgIGlmIChjb25zZW50Q29va2llICE9IFwiXCIpIHtcclxuICAgICAgbGV0IGdyb3VwSW5kZXggPSBjb25zZW50Q29va2llLmluZGV4T2YoJ2dyb3Vwcz0nKTtcclxuICAgICAgbGV0IGdyb3VwcyA9IGNvbnNlbnRDb29raWUuc3Vic3RyaW5nKGdyb3VwSW5kZXgpOyAvL3dpbGwgcmV0dXJuIHNvbWV0aGluZ2xpa2UgZ3JvdXBzPUMwMDAyOjAsQzAwMDE6MVxyXG4gICAgICBsZXQgZnVuY3Rpb25hbEdyb3VwSW5kZXggPSBncm91cHMuaW5kZXhPZignQzAwMDk6Jyk7XHJcbiAgICAgIGlmIChmdW5jdGlvbmFsR3JvdXBJbmRleCAhPSAtMSkge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5VmFsdWUgPSBncm91cHMuc3Vic3RyaW5nKGZ1bmN0aW9uYWxHcm91cEluZGV4ICsgNiwgZnVuY3Rpb25hbEdyb3VwSW5kZXggKyA3KTtcclxuICAgICAgICBpZiAoTnVtYmVyKGNhdGVnb3J5VmFsdWUpID09PSAxKSB7XHJcbiAgICAgICAgICBhbGxvd0luZGV4UGFnZUNvb2tpZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWxsb3dJbmRleFBhZ2VDb29raWU7Ki9cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGFibGUnKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5jaGVja2JveFNlbGVjdCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICAgICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRhVGFibGUgJiYgdGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgd2hpbGUgKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBvcCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG5cclxuICAgIGlmICghdGhpcy5ncmlkSUQpIHtcclxuICAgICAgdGhpcy5ncmlkSUQgPSB0aGlzLnV0aWxTZXJ2aWNlLnV1aWR2NCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXhwb3J0RXZlbnQuc3Vic2NyaWJlKChjb25maWc6IEdyaWRFeHBDb25maWcpID0+IHtcclxuXHJcbiAgICAgIHN3aXRjaCAoY29uZmlnLmV4cG9ydFR5cGUpIHtcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuUGRmOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb1BkZihjb25maWcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlhzbHg6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvRXhjZWwoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5Qbmc6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvUG5nKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRDb21wbGV0ZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0Q29tcGxldGVkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGVja1NvcnRFdmVudCgpO1xyXG4gICAgdGhpcy5jaGVja1Jlc2l6ZUV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBjaGVja1NvcnRFdmVudCgpIHtcclxuICAgIHRoaXMub25zb3J0b2JzLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9vbnJlc2l6ZSQpLFxyXG4gICAgICBkZWxheSgzMDApLFxyXG4gICAgICByZXBlYXQoKSxcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICApLnN1YnNjcmliZSgob2JqOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgZiA9IHRoaXMuY29uZmlnLmZpZWxkcy5maW5kKGVsID0+IGVsLnByb3BlcnR5ID09PSBvYmouc29ydE5hbWUpO1xyXG4gICAgICBmLnNvcnRPcmRlciA9IG9iai5zb3J0VmFsdWU7XHJcbiAgICAgIHRoaXMuc29ydENoYW5nZS5lbWl0KHsgc29ydE5hbWU6IG9iai5zb3J0TmFtZSwgc29ydFZhbHVlOiBvYmouc29ydFZhbHVlIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja1Jlc2l6ZUV2ZW50KCkge1xyXG4gICAgdGhpcy5vbnJlc2l6ZW9icy5waXBlKFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICkuc3Vic2NyaWJlKChvYmo6IHsgZXZlbnQ6IE56UmVzaXplRXZlbnQsIGNvbDogc3RyaW5nLCBmaWVsZDogRmllbGQgfSkgPT4ge1xyXG4gICAgICB0aGlzLmNvbmZpZyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcpKVxyXG4gICAgICB0aGlzLm9uUmVzaXplRXZ0KG9iai5ldmVudCwgb2JqLmNvbCwgb2JqLmZpZWxkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuZGF0YSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICAgICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0VG9QbmcoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0VGFibGUoJ3BuZycsIGZpbGVOYW1lLCB0aGlzLmdyaWRJRCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb0V4Y2VsKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCBkYXRhVG9FeHBvcnQ6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBmaWVsZHMgPSB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT5cclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGFnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpO1xyXG5cclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBpdGVtVG9FeHBvcnQgPSB7fTtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgaWYgKCFmaWVsZC5oaWRkZW4pIHtcclxuICAgICAgICAgIGlmIChmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3QpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQob3B0aW9uID0+IG9wdGlvbltmaWVsZC5zZWxlY3QudmFsdWVdID09PSBpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldLmNvbnRleHQuZXhwb3J0VmFsdWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBpdGVtW2ZpZWxkLnByb3BlcnR5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGF0YVRvRXhwb3J0LnB1c2goaXRlbVRvRXhwb3J0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KFwiREQuTU0uWVlZWS5ISC5tbS5zc1wiKSArICdfJyArIGZpbGVOYW1lO1xyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0QXNFeGNlbEZpbGUoZGF0YVRvRXhwb3J0LCBmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb1BkZihjb25maWcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBpZiAoIWNvbmZpZy51c2VWZXJzaW9uMikge1xyXG4gICAgICB0aGlzLnV0aWxTZXJ2aWNlLmV4cG9ydFRhYmxlKFxyXG4gICAgICAgICdwZGYnLFxyXG4gICAgICAgIGNvbmZpZy5maWxlTmFtZSxcclxuICAgICAgICB0aGlzLmdyaWRJRCxcclxuICAgICAgICBjb25maWcuZXhwb3J0Q29tcGFueU5hbWUsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFVzZXJOYW1lLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRUaXRsZSxcclxuICAgICAgICBjb25maWcuZXhwb3J0Q29tcGFueUxvZ29VcmwsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFRhYmxlQ3VzdG9tV2lkdGgsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBleHBvcnRDb25maWcgPSB7XHJcbiAgICAgICAgY2hlY2tib3hTZWxlY3Q6IHRoaXMuY2hlY2tib3hTZWxlY3QsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtczogdGhpcy5jaGVja2JveFNlbGVjdCA/IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pIDogW10sXHJcbiAgICAgICAgZmlsZU5hbWU6IGNvbmZpZy5maWxlTmFtZSxcclxuICAgICAgICBkYXRlUGlwZTogdGhpcy5kYXRlUGlwZSxcclxuICAgICAgICBlbGVtSUQ6IHRoaXMuZ3JpZElELFxyXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcclxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxyXG4gICAgICAgIGNvbHVtblN0eWxlczogY29uZmlnLmNvbHVtblN0eWxlcyxcclxuICAgICAgICBleHBvcnRDb21wYW55TmFtZTogY29uZmlnLmV4cG9ydENvbXBhbnlOYW1lLFxyXG4gICAgICAgIGV4cG9ydFVzZXJOYW1lOiBjb25maWcuZXhwb3J0VXNlck5hbWUsXHJcbiAgICAgICAgZXhwb3J0VGl0bGU6IGNvbmZpZy5leHBvcnRUaXRsZSxcclxuICAgICAgICBleHBvcnRDb21wYW55TG9nb1VybDogY29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsID8gY29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsIDogJ2Fzc2V0cy9QVG9CX2xvZ28ucG5nJyxcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRUYWJsZXYyKFxyXG4gICAgICAgIGV4cG9ydENvbmZpZ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHRhcEhhbmRsZXIoJGV2ZW50LCBkYXRhKXtcclxuICAgIHRoaXMudGFwQ291bnQgKz0gMTtcclxuICAgIHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMudGFwQ291bnQgPT09IDEpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmNsaWNrUm93KG51bGwsIGRhdGEgKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRhcENvdW50ID0gMDtcclxuICAgIH0sIDYwMCApO1xyXG4gICAgaWYgKHRoaXMudGFwQ291bnQgPiAxKSB7XHJcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmRibENsaWNrUm93KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNsaWNrcyA9IDA7XHJcbiAgY2xpY2tSb3coZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5jbGlja3MrKztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RSb3coZXZlbnQsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrcyA+IDEpIHtcclxuICAgICAgICB0aGlzLmRibENsaWNrUm93KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xpY2tzID0gMDtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxyXG5cclxuICBwcmV2ZW50RGVmYXVsdCgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Um93KGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMub25jbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gICAgLyogR2V0IGluZGV4IG9mIHNlbGVjdGlvbiAqL1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgIGlmICghdGhpcy5jaGVja2JveFNlbGVjdCkge1xyXG4gICAgICBpZiAoZXZlbnQgJiYgKHRvQm9vbGVhbihldmVudC5jdHJsS2V5KSB8fCB0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpKSkge1xyXG4gICAgICAgIC8qIFNoaWZ0IFNlbGVjdGlvbiAqL1xyXG4gICAgICAgIGlmICh0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdE11bHRpcGxlKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3Rpb24oZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgLyogU2VsZWN0IGVsZW1lbnQgKi9cclxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPSBldmVudCAmJiB0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpID8gdHJ1ZSA6ICF0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkO1xyXG4gICAgICAgIC8qIFNhdmUgbGFzdCBpbmRleCBzZWxlY3RlZCAqL1xyXG4gICAgICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZCA/IGluZGV4IDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpO1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLm9yZGVyID0gdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZCA/IHRoaXMub3JkZXIrKyA6IC0xO1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHNlbGVjdGVkSXRlbXMuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpLm1hcChpdGVtID0+IGl0ZW0uZGF0YSkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0aW9uKGRhdGEpIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkICYmIGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSAhPT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSlcclxuICAgICAgLmZvckVhY2goZWxlbSA9PiB7IGVsZW0uc2VsZWN0ZWQgPSBmYWxzZSwgZWxlbS5vcmRlciA9IC0xIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0TXVsdGlwbGUoY3VycmVudElkeCkge1xyXG4gICAgaWYgKHRoaXMubGFzdElkeFNlbGVjdGVkICE9PSBudWxsKSB7XHJcbiAgICAgIHdoaWxlIChjdXJyZW50SWR4ICE9PSB0aGlzLmxhc3RJZHhTZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVt0aGlzLmxhc3RJZHhTZWxlY3RlZF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVt0aGlzLmxhc3RJZHhTZWxlY3RlZF0ub3JkZXIgPSB0aGlzLm9yZGVyKys7XHJcbiAgICAgICAgdGhpcy5sYXN0SWR4U2VsZWN0ZWQgPSBjdXJyZW50SWR4ID4gdGhpcy5sYXN0SWR4U2VsZWN0ZWQgPyB0aGlzLmxhc3RJZHhTZWxlY3RlZCArIDEgOiB0aGlzLmxhc3RJZHhTZWxlY3RlZCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtjdXJyZW50SWR4XS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtjdXJyZW50SWR4XS5vcmRlciA9IHRoaXMub3JkZXIrKztcclxuICAgIH1cclxuICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gY3VycmVudElkeDtcclxuICB9XHJcblxyXG4gIGRibENsaWNrUm93KGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vbmRsY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybURhdGUoZGF0ZSkge1xyXG4gICAgY29uc3QgbSA9IG1vbWVudChkYXRlKTtcclxuICAgIGlmIChtLmlzVmFsaWQoKSkge1xyXG4gICAgICBtLmxvY2FsZSh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKTtcclxuICAgICAgcmV0dXJuIG0uZm9ybWF0KHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnREQuTU0uWVlZWScgOiAnTU0vREQvWVlZWScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGVja2JveFNlbGVjdCB7XHJcbiAgZGF0YTogYW55O1xyXG4gIHNlbGVjdGVkOiBib29sZWFuIHwgbnVtYmVyO1xyXG4gIG9yZGVyPzogbnVtYmVyO1xyXG59XHJcbiIsIjxkaXYgaWQ9XCJ7e2dyaWRJRH19XCI+XHJcbiAgPG56LXRhYmxlICNncmlkQ29tcG9uZW50IFtuekRhdGFdPVwiZGF0YVwiIFtuelNob3dUb3RhbF09XCJzaG93VG90YWxcIiBbbnpQYWdlU2l6ZU9wdGlvbnNdPVwicGFnZVNpemVPcHRpb25zXCJcclxuICAgIFtuelZpcnR1YWxJdGVtU2l6ZV09XCJ2aXJ0dWFsSXRlbVNpemVcIiBbbnpMb2FkaW5nRGVsYXldPVwibG9hZGluZ0RlbGF5XCJcclxuICAgIFtuekxvYWRpbmdJbmRpY2F0b3JdPVwibG9hZGluZ0luZGljYXRvclwiIFtuelRvdGFsXT1cInRvdGFsXCIgW256VGl0bGVdPVwidGl0bGVcIiBbbnpGb290ZXJdPVwiZm9vdGVyXCJcclxuICAgIFtuek5vUmVzdWx0XT1cIm5vUmVzdWx0XCIgW256V2lkdGhDb25maWddPVwid2lkdGhDb25maWdcIiBbbnpQYWdlSW5kZXhdPVwicGFnZUluZGV4XCIgW256UGFnZVNpemVdPVwicGFnZVNpemVcIlxyXG4gICAgW256UGFnaW5hdGlvblBvc2l0aW9uXT1cInBhZ2luYXRpb25Qb3NpdGlvblwiIFtuelNjcm9sbF09XCJzY3JvbGxcIiBbbnpGcm9udFBhZ2luYXRpb25dPVwiZnJvbnRQYWdpbmF0aW9uXCJcclxuICAgIFtuelRlbXBsYXRlTW9kZV09XCJ0ZW1wbGF0ZU1vZGVcIiBbbnpTaG93UGFnaW5hdGlvbl09XCJzaG93UGFnaW5hdGlvblwiIFtuekxvYWRpbmddPVwibG9hZGluZ1wiXHJcbiAgICBbbnpTaG93U2l6ZUNoYW5nZXJdPVwic2hvd1NpemVDaGFuZ2VyXCIgW256SGlkZU9uU2luZ2xlUGFnZV09XCJoaWRlT25TaW5nbGVQYWdlXCIgW256U2hvd1F1aWNrSnVtcGVyXT1cInNob3dRdWlja0p1bXBlclwiXHJcbiAgICBbbnpTaW1wbGVdPVwic2ltcGxlXCIgY2xhc3M9XCJjbWFjcy10YWJsZVwiPlxyXG4gICAgPHRoZWFkICpuZ0lmPVwiIWRhdGFUYWJsZVwiPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRoICpuZ0lmPVwiY2hlY2tib3hTZWxlY3RcIlxyXG4gICAgICAgICAgICBueldpZHRoPVwiNDBweFwiXHJcbiAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJzZWxlY3RlZFwiIFtpbmRldGVybWluYXRlXT1cImlzSW5kZXRlcm1pbmF0ZVwiXHJcbiAgICAgICAgICAgIChjaGVja2VkQ2hhbmdlKT1vbkNoZWNrYm94QWxsQ2hhbmdlKCRldmVudCk+PC9sYWJlbD5cclxuICAgICAgICA8L3RoPlxyXG4gICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZ2V0RmllbGRzKClcIlxyXG4gICAgICAgICAgICBuei1yZXNpemFibGVcclxuICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiIWZpZWxkLnJlc2l6YWJsZVwiXHJcbiAgICAgICAgICAgIG56Qm91bmRzPVwid2luZG93XCJcclxuICAgICAgICAgICAgW256TWluV2lkdGhdPVwiZmllbGQubWluV2lkdGggPyBmaWVsZC5taW5XaWR0aCA6IDEwMFwiXHJcbiAgICAgICAgICAgIFtuek1heFdpZHRoXT1cImZpZWxkLm1heFdpZHRoID8gZmllbGQubWF4V2lkdGggOiA1MDBcIlxyXG4gICAgICAgICAgICBuelByZXZpZXdcclxuICAgICAgICAgICAgKG56UmVzaXplRW5kKT1cIm9uUmVzaXplKCRldmVudCwgZmllbGQucHJvcGVydHksIGZpZWxkKVwiXHJcbiAgICAgICAgICAgIFtuelNob3dTb3J0XT1cImZpZWxkLnNob3dTb3J0XCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLXRhYmxlLXNvcnRlZC1udWxsXT1cImZpZWxkLnNob3dTb3J0ICYmICFmaWVsZC5zb3J0T3JkZXJcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtdGFibGUtc29ydGVkLWFzY2VuZF09XCJmaWVsZC5zaG93U29ydCAmJiBmaWVsZC5zb3J0T3JkZXIgPT09ICdhc2NlbmQnXCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLXRhYmxlLXNvcnRlZC1kZXNjZW5kXT1cImZpZWxkLnNob3dTb3J0ICYmIGZpZWxkLnNvcnRPcmRlciA9PT0gJ2Rlc2NlbmQnXCJcclxuICAgICAgICAgICAgWyhuelNvcnRPcmRlcildPVwiZmllbGQuc2hvd1NvcnQgPyBmaWVsZC5zb3J0T3JkZXIgOiBkZWZhdWx0U29ydE9yZGVyXCJcclxuICAgICAgICAgICAgKG56U29ydE9yZGVyQ2hhbmdlKT1cInNvcnQoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSlcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiZmllbGQubWluV2lkdGggPyBmaWVsZC5taW5XaWR0aCA6IGZpZWxkLndpZHRoXCJcclxuICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cImZpZWxkLndpZHRoXCJcclxuICAgICAgICAgICAgW256V2lkdGhdPVwiZmllbGQud2lkdGhcIj5cclxuICAgICAgICAgIDxkaXYgW3N0eWxlLm1heFdpZHRoXT1cImdldEhlYWRlck1heFdpZHRoKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsLWhlYWRlcl09XCIhd3JhcExpbmVzXCI+XHJcbiAgICAgICAgICAgIHt7ZmllbGQuZGlzcGxheX19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxuei1yZXNpemUtaGFuZGxlIG56RGlyZWN0aW9uPVwicmlnaHRcIiAqbmdJZj1cImZpZWxkLnJlc2l6YWJsZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdGFibGUtcmVzaXplLXRyaWdnZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvbnotcmVzaXplLWhhbmRsZT5cclxuICAgICAgICA8L3RoPlxyXG4gICAgICAgIDx0aCBbc3R5bGUubWluV2lkdGhdPVwiJzEwNXB4J1wiXHJcbiAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInMTA1cHgnXCJcclxuICAgICAgICAgICAgW256V2lkdGhdPVwiJzEwNXB4J1wiICpuZ0lmPVwic2hvd1JhdGVcIj48L3RoPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90aGVhZD5cclxuICAgIDx0Ym9keT5cclxuICAgICAgPHRyICpuZ0Zvcj1cImxldCBkYXRhIG9mIGdyaWRDb21wb25lbnQuZGF0YTsgaW5kZXggYXMgaVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwiY2xpY2tSb3coJGV2ZW50LCBkYXRhKVwiXHJcbiAgICAgICAgICAodG91Y2hzdGFydCk9XCJ0YXBIYW5kbGVyKCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1uby1zZWxlY3Rpb25cIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC10YWJsZS1zZWxlY3RlZC1yb3ddPVwiaXNSb3dTZWxlY3RlZChkYXRhKVwiXHJcbiAgICAgICAgICAoY29udGV4dG1lbnUpPVwiY29udGV4dE1lbnUoJGV2ZW50LCBjb250ZXh0TWVudVRlbXBsYXRlKVwiPlxyXG5cclxuICAgICAgICA8Y21hY3MtZHJvcGRvd24tbWVudSAjY29udGV4dE1lbnVUZW1wbGF0ZT1cImNtYWNzRHJvcGRvd25NZW51XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRleHRtZW51XCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgZGF0YTogZGF0YSB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9jbWFjcy1kcm9wZG93bi1tZW51PlxyXG5cclxuICAgICAgICA8dGQgKm5nSWY9XCJjaGVja2JveFNlbGVjdFwiIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJjaGVja2JveENhY2hlW2dldEluZGV4KGRhdGFbY29uZmlnLmZpZWxkSWRdKV0uc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAoY2hlY2tlZENoYW5nZSk9XCJvbkNoZWNrYm94Q2hhbmdlKCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgICAqbmdJZj1cImRhdGFbY29uZmlnLmZpZWxkSWRdICYmIGNoZWNrYm94Q2FjaGVbZ2V0SW5kZXgoZGF0YVtjb25maWcuZmllbGRJZF0pXVwiPjwvbGFiZWw+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBmaVwiIFtuZ0NsYXNzXT1cIihpc0NlbGRUeXBlRGVmYXVsdChmaWVsZCkgJiYgaW5MaW5lRWRpdCAmJiAhaXNSZWFkT25seShmaWVsZCkpID8gWydlZGl0YWJsZS1yb3cnLCAnY21hY3MtdGFibGUtY2VsbC0nICsgZmllbGQucHJvcGVydHldIDogWydjbWFjcy10YWJsZS1jZWxsLScgKyBmaWVsZC5wcm9wZXJ0eV1cIiBbc3R5bGUubWF4V2lkdGhdPVwiJzEwMCUnXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNDZWxkVHlwZURlZmF1bHQoZmllbGQpICYmIGluTGluZUVkaXQgJiYgIWlzUmVhZE9ubHkoZmllbGQpOyBlbHNlIGNvbXBvbmVudFRwbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdGFibGUtY2VsbFwiIFtzdHlsZS5tYXhXaWR0aF09XCInMTAwJSdcIlxyXG4gICAgICAgICAgICAgICpuZ0lmPVwiKGVkaXRJZCAhPT0gZGF0YVtjb25maWcuZmllbGRJZF0gfHwgcHJvcGVydHkgIT09IGZpZWxkLnByb3BlcnR5KTsgZWxzZSBlZGl0VHBsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRhYmxlLWNlbGwtdmFsdWUtd3JhcFwiIFtzdHlsZS5tYXhXaWR0aF09XCInMTAwJSdcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNEYXRlKGZpZWxkKSAmJiAhaXNTZWxlY3QoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIHN0eWxlPVwid29yZC1icmVhazogYnJlYWstd29yZDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWZpZWxkLnNob3dUb29sdGlwIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSBudWxsIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSB1bmRlZmluZWQgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09ICcnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGRhdGFbZmllbGQucHJvcGVydHldICE9PSBudWxsICYmIGRhdGFbZmllbGQucHJvcGVydHldICE9PSB1bmRlZmluZWQgJiYgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gIT09ICcnID8gZGF0YVtmaWVsZC5wcm9wZXJ0eV0gOiBmaWVsZC5wbGFjZWhvbGRlciB9fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCIgc3R5bGU9XCJ3b3JkLWJyZWFrOiBicmVhay13b3JkO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5zaG93VG9vbHRpcCAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XSEhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoKVwiIGNtYWNzLXRvb2x0aXAgW3RpdGxlXT1cImRhdGFbZmllbGQucHJvcGVydHldXCIgcGxhY2VtZW50PVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyBkYXRhW2ZpZWxkLnByb3BlcnR5XSB9fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2IFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBzdHlsZT1cIndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XCI+e3sgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gfX08L2Rpdj4gLS0+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0RhdGUoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIHN0eWxlPVwid29yZC1icmVhazogYnJlYWstd29yZDtcIj57eyBkYXRhW2ZpZWxkLnByb3BlcnR5XSAgfCBkYXRlOiBmaWVsZC5kYXRlRm9ybWF0fX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzU2VsZWN0KGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBzdHlsZT1cIndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XCI+e3sgZ2V0TGFiZWwoZGF0YSwgZmllbGQpIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblVJU21hbGwtRWRpdCBjbWFjcy10YWJsZS1lZGl0LWljb25cIiAoY2xpY2spPVwic3RhcnRFZGl0KGRhdGFbY29uZmlnLmZpZWxkSWRdLCBmaWVsZC5wcm9wZXJ0eSwgJGV2ZW50KVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZWRpdFRwbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgI2ZpZWxkVHlwZUlucHV0ICpuZ0lmPVwiaXNTdHJpbmcoZmllbGQpXCIgdHlwZT1cInRleHRcIiBjbWFjcy1pbnB1dCBjbGFzcz1cInRhYmxlaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSlcIiAvPlxyXG5cclxuICAgICAgICAgICAgICA8Y21hY3MtaW5wdXQtbnVtYmVyICNmaWVsZFR5cGVJbnB1dE51bWJlciBpZD1cInRlc3RpbmcyXCIgY2xhc3M9XCJ0YWJsZWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpc051bWJlcihmaWVsZCkgJiYgIWlzU2VsZWN0KGZpZWxkKVwiIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAgICAgICAgW2NtYWNzU3RlcF09XCIxXCIgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSlcIiAobmdNb2RlbENoYW5nZSk9XCJuZ01vZGVsQ2hhbmdlKGkpXCI+PC9jbWFjcy1pbnB1dC1udW1iZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxsYWJlbCAjZmllbGRUeXBlQm9vbCBjbWFjcy1jaGVja2JveCAqbmdJZj1cImlzQm9vbGVhbihmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLnByb3BlcnR5XVwiIChuZ01vZGVsQ2hhbmdlKT1cImVuZEVkaXRNb2RlTmdNb2RlbChpKVwiPjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxjbWFjcy1kYXRlLXBpY2tlclxyXG4gICAgICAgICAgICAgICAgI2ZpZWxkVHlwZURhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNEYXRlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbYWxsb3dDbGVhcl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGFibGVpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImVuZEVkaXRNb2RlTmdNb2RlbChpKVwiPlxyXG4gICAgICAgICAgICAgIDwvY21hY3MtZGF0ZS1waWNrZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxjbWFjcy1zZWxlY3QgI2ZpZWxkVHlwZVNlbGVjdCAqbmdJZj1cImlzU2VsZWN0KGZpZWxkKVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgc2hvd1NlYXJjaCBjbGFzcz1cInRhYmxlaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCIgKG5nTW9kZWxDaGFuZ2UpPVwiZW5kRWRpdE1vZGVOZ01vZGVsKGkpXCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBzRGF0YSBvZiBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YVwiIGxhYmVsPVwie3tzRGF0YVtmaWVsZC5zZWxlY3QubGFiZWxdfX1cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7c0RhdGFbZmllbGQuc2VsZWN0LnZhbHVlXX19XCI+PC9jbWFjcy1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY29tcG9uZW50VHBsPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICN0ZW1wbGF0ZVJlZkNlbGQgKm5nSWY9XCJpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImRhdGFbZmllbGQucHJvcGVydHldLnJlZjsgY29udGV4dDogZGF0YVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dFwiPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzQ2VsZFR5cGVCdXR0b24oZmllbGQpXCIgYXJpYS1sYWJlbD1cInt7ZmllbGQuZGlzcGxheX19XCIgcm9sZT1cImJ1dHRvblwiIGNtYWNzLWJ1dHRvbiB0eXBlPVwie3tmaWVsZC5idXR0b24uc3R5bGV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1vbkJ1dHRvbkNsaWNrKGRhdGEpPlxyXG4gICAgICAgICAgICAgIDxpICpuZ0lmPVwiIWlzVW5kZWZpbmVkKGZpZWxkLmJ1dHRvbi5pY29uKTsgZWxzZSB0aXRsZVRwbFwiIG56LWljb24gdHlwZT1cInt7ZmllbGQuYnV0dG9uLmljb259fVwiPjwvaT5cclxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3RpdGxlVHBsPnt7ZmllbGQuZGlzcGxheX19PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNDZWxkVHlwZVRhZyhmaWVsZCkgJiYgZmllbGQudGFnICE9PSB1bmRlZmluZWRcIiBbaWRdPVwiZ3JpZElEICsgJ2NvbHVtbicgKyBmaSArICdyb3cnICsgaVwiPlxyXG4gICAgICAgICAgICAgIDxjbWFjcy10YWcgW2NvbG9yXT1cImZpZWxkLnRhZy5jb2xvciA/IGRhdGFbZmllbGQudGFnLmNvbG9yXSA6IG51bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2NtYWNzR3JpZFR5cGVdPVwiZmllbGQudGFnLmNtYWNzR3JpZFR5cGUgPyBkYXRhW2ZpZWxkLnRhZy5jbWFjc0dyaWRUeXBlXSA6IG51bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2NtYWNzU3RhdHVzVHlwZV09XCJmaWVsZC50YWcuY21hY3NTdGF0dXNUeXBlID8gZGF0YVtmaWVsZC50YWcuY21hY3NTdGF0dXNUeXBlXSA6IG51bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2NtYWNzUHJpb3JpdHlUeXBlXT1cImZpZWxkLnRhZy5jbWFjc1ByaW9yaXR5VHlwZSA/IGRhdGFbZmllbGQudGFnLmNtYWNzUHJpb3JpdHlUeXBlXSA6IG51bGxcIj5cclxuICAgICAgICAgICAgICAgIHt7ICBkYXRhW2ZpZWxkLnByb3BlcnR5XSB9fVxyXG4gICAgICAgICAgICAgIDwvY21hY3MtdGFnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIoIWluTGluZUVkaXQgfHwgIGlzUmVhZE9ubHkoZmllbGQpKSAmJiBpc0RhdGUoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCIgc3R5bGU9XCJ3b3JkLWJyZWFrOiBicmVhay13b3JkO1wiPnt7IHRyYW5zZm9ybURhdGUoZGF0YVtmaWVsZC5wcm9wZXJ0eV0pIH19PC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKCFpbkxpbmVFZGl0IHx8ICBpc1JlYWRPbmx5KGZpZWxkKSkgJiYgIWlzQ2VsZFR5cGVCdXR0b24oZmllbGQpICYmICFpc0NlbGRUeXBlVGFnKGZpZWxkKSAmJiAhaXNDZWxkVHlwZVRlbXBsYXRlUmVmKGZpZWxkKSAmJiAhaXNEYXRlKGZpZWxkKSAmJiAhaXNTZWxlY3QoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCIgc3R5bGU9XCJ3b3JkLWJyZWFrOiBicmVhay13b3JkO1wiXHJcbiAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiFmaWVsZC5zaG93VG9vbHRpcCB8fCBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gbnVsbCB8fCBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gdW5kZWZpbmVkIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSAnJ1wiIFtzdHlsZS5tYXhXaWR0aF09XCJnZXRNYXhXaWR0aCgpXCI+XHJcbiAgICAgICAgICAgICAgICB7eyBkYXRhW2ZpZWxkLnByb3BlcnR5XSAhPT0gbnVsbCAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XSAhPT0gdW5kZWZpbmVkICYmIGRhdGFbZmllbGQucHJvcGVydHldICE9PSAnJyA/IGRhdGFbZmllbGQucHJvcGVydHldIDogZmllbGQucGxhY2Vob2xkZXIgfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBzdHlsZT1cIndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XCJcclxuICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuc2hvd1Rvb2x0aXAgJiYgZGF0YVtmaWVsZC5wcm9wZXJ0eV0hIVwiIFtzdHlsZS5tYXhXaWR0aF09XCJnZXRNYXhXaWR0aCgpXCJcclxuICAgICAgICAgICAgICAgICAgIGNtYWNzLXRvb2x0aXAgW3RpdGxlXT1cImRhdGFbZmllbGQucHJvcGVydHldXCIgcGxhY2VtZW50PVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIHt7IGRhdGFbZmllbGQucHJvcGVydHldIH19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPCEtLSA8ZGl2IFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBzdHlsZT1cIndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XCI+e3sgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gfX08L2Rpdj4gLS0+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzU2VsZWN0KGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIHN0eWxlPVwid29yZC1icmVhazogYnJlYWstd29yZDtcIj57eyBnZXRMYWJlbChkYXRhLCBmaWVsZCkgfX08L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkICpuZ0lmPVwic2hvd1JhdGVcIiBjbGFzcz1cImNtYWNzLXRhYmxlLXJhdGluZ1wiPlxyXG4gICAgICAgICAgPG56LXJhdGUgW25nTW9kZWxdPVwiZGF0YVtjb25maWcuZmllbGRSYXRlXVwiXHJcbiAgICAgICAgICAgICAgICAgICBbbnpDb3VudF09J3JhdGVDb3VudCdcclxuICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmF0ZUNoYW5nZSgkZXZlbnQsIGRhdGEpXCJcclxuICAgICAgICAgICAgICAgICAgIFtuekRpc2FibGVkXT1cIiFpbkxpbmVFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJhdGVDbGljaygkZXZlbnQpXCI+PC9uei1yYXRlPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvbnotdGFibGU+XHJcbjwvZGl2PlxyXG4iXX0=