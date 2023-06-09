import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnMenuType } from '../../../core/enums/columnMenuType.enum';
import { TemplateType } from '../../../core/enums/TemplateType.enum';
import { Validators } from '@angular/forms';
import { afterDate, beforeDate, greaterThan, isEqualToDate, isEqualToNumber, isNotEqualToDate, isNotEqualToNumber, lessThan, rangeDate, rangeNumber } from '../../../core/services/customValidators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../cmacs-menu/menu.directive";
import * as i3 from "../../../cmacs-menu/submenu.component";
import * as i4 from "../../../cmacs-menu/menu-item.directive";
import * as i5 from "ng-zorro-antd/grid";
import * as i6 from "../../../cmacs-select/cmacs-select.component";
import * as i7 from "@angular/forms";
import * as i8 from "../../../cmacs-button/cmacs-button.component";
import * as i9 from "../../../cmacs-select/cmacs-option.component";
import * as i10 from "../../../cmacs-input-number/cmacs-input-number.component";
import * as i11 from "../../../cmacs-date-picker/date-picker.component";
import * as i12 from "../../../cmacs-date-picker/range-picker.component";
import * as i13 from "../../../cmacs-input/cmacs-input.directive";
import * as i14 from "../../../cmacs-switch/switch.component";
function CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_li_1_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵlistener("click", function CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_li_1_li_7_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r11); const submenu_r9 = ctx.$implicit; const ctx_r10 = i0.ɵɵnextContext(4); return ctx_r10.fieldChanged(submenu_r9.value); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const submenu_r9 = ctx.$implicit;
    const ctx_r8 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("selected-item", ctx_r8.isSelected(submenu_r9.value, ctx_r8.field.editTemplate));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(submenu_r9.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(submenu_r9.label);
} }
function CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 9);
    i0.ɵɵelementStart(1, "span", 10);
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 0);
    i0.ɵɵelementStart(6, "ul", 11);
    i0.ɵɵtemplate(7, CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_li_1_li_7_Template, 5, 6, "li", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("menuWrapperClassName", "compact-table-more-submenu-ul-wrapper")("menuClassName", "compact-table-more-submenu-ul");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(item_r4.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.label);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", item_r4.subMenu);
} }
function CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵlistener("click", function CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_ng_template_2_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r15); const item_r4 = i0.ɵɵnextContext().$implicit; const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.fieldChanged(item_r4.value); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(item_r4.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.label);
} }
function CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_li_1_Template, 8, 7, "li", 7);
    i0.ɵɵtemplate(2, CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_ng_template_2_Template, 5, 4, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const _r6 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r4.subMenu.length)("ngIfElse", _r6);
} }
function CmacsCompactTableColumnMoreComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "div", 4);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementStart(3, "ul", 5);
    i0.ɵɵtemplate(4, CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_Template, 4, 2, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r0.items.columnOptions);
} }
function CmacsCompactTableColumnMoreComponent_div_2_cmacs_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 24);
} if (rf & 2) {
    const _item_r24 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", _item_r24.value);
    i0.ɵɵpropertyInterpolate("label", _item_r24.label);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_11_cmacs_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 24);
} if (rf & 2) {
    const rule_r26 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", rule_r26.value);
    i0.ɵɵpropertyInterpolate("label", rule_r26.label);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "div", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "cmacs-select", 20);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_11_Template_cmacs_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.selectedValidation = $event; })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_11_Template_cmacs_select_ngModelChange_4_listener() { i0.ɵɵrestoreView(_r28); const ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.onValidationChange(); });
    i0.ɵɵtemplate(5, CmacsCompactTableColumnMoreComponent_div_2_div_11_cmacs_option_5_Template, 1, 2, "cmacs-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r18.items.advancedConfiguration.labelValidation, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r18.selectedValidation);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r18.validationRules);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "div", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "cmacs-input-number", 25);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_12_Template_cmacs_input_number_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.inputValue1 = $event; })("onModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_12_Template_cmacs_input_number_onModelChange_4_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.onInputValueChange1($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r19.items.advancedConfiguration.labelNumber, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r19.inputValue1);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵelementStart(2, "div", 27);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 28);
    i0.ɵɵelementStart(5, "cmacs-input-number", 25);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.inputValue1 = $event; })("onModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_onModelChange_5_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.onInputValueChange1($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 28);
    i0.ɵɵelementStart(7, "cmacs-input-number", 25);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.inputValue2 = $event; })("onModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_onModelChange_7_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.onInputValueChange2($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.items.advancedConfiguration.labelNumber, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r20.inputValue1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r20.inputValue2);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "div", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "cmacs-date-picker", 29);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_14_Template_cmacs_date_picker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.inputValue1 = $event; })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_14_Template_cmacs_date_picker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.onInputValueChange1($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r21.items.advancedConfiguration.labelDate, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r21.inputValue1);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "div", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "cmacs-range-picker", 29);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_15_Template_cmacs_range_picker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(2); return ctx_r41.inputValue1 = $event; })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_15_Template_cmacs_range_picker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.onDateRangeChanged($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.items.advancedConfiguration.labelDate, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r22.inputValue1);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "input", 30);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_16_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(2); return ctx_r44.dropdownValues = $event; })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_16_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r46 = i0.ɵɵnextContext(2); return ctx_r46.onDropdownValuesChanged($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 31);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r23.dropdownValues);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r23.items.advancedConfiguration.dropdownDescription);
} }
function CmacsCompactTableColumnMoreComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelement(1, "div", 4);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementStart(3, "span", 15);
    i0.ɵɵelementStart(4, "div", 16);
    i0.ɵɵelementStart(5, "div", 17);
    i0.ɵɵelementStart(6, "div", 18);
    i0.ɵɵelementStart(7, "div", 19);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "cmacs-select", 20);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_Template_cmacs_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(); return ctx_r47.selectedFieldTemplate = $event; })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_Template_cmacs_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r49 = i0.ɵɵnextContext(); return ctx_r49.onChange($event); });
    i0.ɵɵtemplate(10, CmacsCompactTableColumnMoreComponent_div_2_cmacs_option_10_Template, 1, 2, "cmacs-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, CmacsCompactTableColumnMoreComponent_div_2_div_11_Template, 6, 3, "div", 22);
    i0.ɵɵtemplate(12, CmacsCompactTableColumnMoreComponent_div_2_div_12_Template, 5, 2, "div", 22);
    i0.ɵɵtemplate(13, CmacsCompactTableColumnMoreComponent_div_2_div_13_Template, 8, 3, "div", 22);
    i0.ɵɵtemplate(14, CmacsCompactTableColumnMoreComponent_div_2_div_14_Template, 5, 2, "div", 22);
    i0.ɵɵtemplate(15, CmacsCompactTableColumnMoreComponent_div_2_div_15_Template, 5, 2, "div", 22);
    i0.ɵɵtemplate(16, CmacsCompactTableColumnMoreComponent_div_2_div_16_Template, 5, 2, "div", 22);
    i0.ɵɵelementStart(17, "div", 17);
    i0.ɵɵelementStart(18, "div", 18);
    i0.ɵɵelementStart(19, "button", 23);
    i0.ɵɵlistener("click", function CmacsCompactTableColumnMoreComponent_div_2_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r48); const ctx_r50 = i0.ɵɵnextContext(); return ctx_r50.onSettingSaved(); });
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.items.advancedConfiguration.labelType, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.selectedFieldTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.typesList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.validationRules.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.inputType === 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.inputType === 2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.inputType === 3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.inputType === 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.inputType === 5);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.labelSave);
} }
function CmacsCompactTableColumnMoreComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelement(1, "div", 4);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementStart(3, "div", 15);
    i0.ɵɵelementStart(4, "div", 32);
    i0.ɵɵelementStart(5, "span", 33);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵelementStart(8, "cmacs-switch", 20);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_3_Template_cmacs_switch_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r51 = i0.ɵɵnextContext(); return ctx_r51.readOnly = $event; })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_3_Template_cmacs_switch_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r53 = i0.ɵɵnextContext(); return ctx_r53.onRestrictedEdit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.items.restrictEdit.labelReadOnly);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r2.readOnly);
} }
export class CmacsCompactTableColumnMoreComponent {
    constructor() {
        this.isAdvancedConfiguration = false;
        this.isRestrictEdit = false;
        this.selectedValidation = 'none';
        this.selectedFieldTemplate = TemplateType.String.toString();
        this.validationRules = [];
        this.inputType = 0; // 1 -> number input, 2 -> number range input, 3-> date input, 4 -> range date input, 5 -> text input
        this.dropdownValues = '';
        this.readOnly = false;
        this.labelSave = '';
        this.onFieldChanged = new EventEmitter();
    }
    ngOnInit() {
        var _a;
        this.readOnly = this.field.readonly;
        this.typesList = this.items.columnOptions[0].subMenu.filter(item => item.value !== ColumnMenuType.AdvancedConfiguration);
        // set initial values based on the field properties
        this.selectedFieldTemplate = (_a = this.field.editTemplate) === null || _a === void 0 ? void 0 : _a.toString();
        this.selectedValidation = this.field.validationRule;
        this.initAdvancedConfiguration(this.field.editTemplate);
        if ((this.inputType === 1 || this.inputType === 3) &&
            this.field.validationValues !== undefined && this.field.validationValues.length > 0) {
            // we need to set the first value
            this.inputValue1 = this.field.validationValues[0];
        }
        else if (this.inputType === 2 && this.field.validationValues !== undefined && this.field.validationValues.length > 1) {
            this.inputValue1 = this.field.validationValues[0];
            this.inputValue2 = this.field.validationValues[1];
        }
        else if (this.inputType === 4 && this.field.validationValues !== undefined && this.field.validationValues.length > 1) {
            this.inputValue1 = this.field.validationValues;
        }
        else if (this.inputType === 5 && this.field.select !== undefined) {
            // in this case we need to set the values for the options of the dropdown
            let values = '';
            for (let index = 0; index < this.field.select.selectData.length; index++) {
                const option = this.field.select.selectData[index];
                values += `${option.value};`;
            }
            this.dropdownValues = values;
        }
    }
    ngOnDestroy() {
        this.onSettingSaved();
    }
    fieldChanged(value) {
        var _a;
        if (value === ColumnMenuType.RestrictEdit) {
            this.isRestrictEdit = true;
        }
        else if (value !== ColumnMenuType.AdvancedConfiguration && value !== ColumnMenuType.Select) {
            const newType = this.getTemplateType(value);
            if (newType !== null) {
                this.field.editTemplate = newType;
            }
            this.field.validationRule = '';
            this.field.validationValues = [];
            this.field.validators = [];
            this.onFieldChanged.emit({ field: this.field, columnMenu: Number(value) });
        }
        else {
            this.selectedFieldTemplate = (_a = this.getColumnType(this.field.editTemplate.toString())) === null || _a === void 0 ? void 0 : _a.toString();
            this.selectedValidation = this.field.validationRule ? this.field.validationRule : '';
            if (value !== ColumnMenuType.AdvancedConfiguration) {
                // in this case a type was selected so we need to set it on the field
                this.field.editTemplate = this.getTemplateType(value);
            }
            if (this.field.editTemplate) {
                this.setAdvancedConfiguration(this.field.editTemplate);
            }
            this.isAdvancedConfiguration = true;
        }
    }
    getTemplateType(value) {
        switch (value) {
            case ColumnMenuType.Date: return TemplateType.Date;
            case ColumnMenuType.Boolean: return TemplateType.Boolean;
            case ColumnMenuType.Number: return TemplateType.Number;
            case ColumnMenuType.Select: return TemplateType.Select;
            case ColumnMenuType.Date: return TemplateType.Date;
            case ColumnMenuType.String: return TemplateType.String;
            case ColumnMenuType.Time: return TemplateType.Time;
            default: return null;
        }
    }
    getColumnType(value) {
        const templateType = Number(value);
        switch (templateType) {
            case TemplateType.Date: return ColumnMenuType.Date;
            case TemplateType.Boolean: return ColumnMenuType.Boolean;
            case TemplateType.Number: return ColumnMenuType.Number;
            case TemplateType.Select: return ColumnMenuType.Select;
            case TemplateType.Date: return ColumnMenuType.Date;
            case TemplateType.String: return ColumnMenuType.String;
            case TemplateType.Time: return ColumnMenuType.Time;
            default: return null;
        }
    }
    isSelected(value, templateType) {
        // it will return true if the type of the template matches the column type
        switch (value) {
            case ColumnMenuType.Date: return templateType === TemplateType.Date;
            case ColumnMenuType.Boolean: return templateType === TemplateType.Boolean;
            case ColumnMenuType.Number: return templateType === TemplateType.Number;
            case ColumnMenuType.Select: return templateType === TemplateType.Select;
            case ColumnMenuType.Date: return templateType === TemplateType.Date;
            case ColumnMenuType.String: return templateType === TemplateType.String;
            case ColumnMenuType.Time: return templateType === TemplateType.Time;
            default: return false;
        }
    }
    onChange(value) {
        const columnType = Number(value);
        const templateType = this.getTemplateType(columnType);
        this.setAdvancedConfiguration(templateType);
    }
    initAdvancedConfiguration(templateType) {
        var _a;
        this.selectedFieldTemplate = (_a = this.getColumnType(this.field.editTemplate.toString())) === null || _a === void 0 ? void 0 : _a.toString();
        switch (templateType) {
            case TemplateType.Boolean:
            case TemplateType.Date:
            case TemplateType.Number:
            case TemplateType.Phone:
            case TemplateType.String:
            case TemplateType.Time:
                this.inputType = 0;
                break;
            case TemplateType.Select:
                this.inputType = 5;
                break;
            case TemplateType.Attachment:
                this.inputType = 0;
                break;
        }
        switch (this.field.editTemplate) {
            case 0: {
                this.validationRules = this.items.validationRules.date;
                break;
            }
            case 1: {
                this.validationRules = [];
                break;
            }
            case 2: {
                this.validationRules = this.items.validationRules.number;
                break;
            }
            case 3: {
                this.validationRules = this.items.validationRules.text;
                break;
            }
            case 4: {
                this.validationRules = [];
                break;
            }
            case 5: {
                this.validationRules = [];
                break;
            }
            case 7: {
                this.validationRules = [];
                break;
            }
        }
        this.onValidationChange();
    }
    setAdvancedConfiguration(templateType) {
        var _a;
        this.field.editTemplate = templateType;
        this.selectedFieldTemplate = (_a = this.getColumnType(this.field.editTemplate.toString())) === null || _a === void 0 ? void 0 : _a.toString();
        this.field.validationRule = this.selectedValidation;
        this.field.validationValues = [];
        // depending on the template type we will set the values on the advance configuration popup
        switch (templateType) {
            case TemplateType.Boolean:
            case TemplateType.Date:
            case TemplateType.Number:
            case TemplateType.Phone:
            case TemplateType.String:
            case TemplateType.Time:
                this.inputType = 0;
                break;
            case TemplateType.Select:
                this.inputType = 5;
                break;
            case TemplateType.Attachment:
                this.inputType = 0;
        }
        this.setValidationRules(this.field.editTemplate);
        this.onValidationChange();
    }
    setValidationRules(value) {
        switch (value) {
            case 0: {
                this.validationRules = this.items.validationRules.date;
                break;
            }
            case 1: {
                this.validationRules = [];
                break;
            }
            case 2: {
                this.validationRules = this.items.validationRules.number;
                break;
            }
            case 3: {
                this.validationRules = this.items.validationRules.text;
                break;
            }
            case 4: {
                this.validationRules = [];
                break;
            }
            case 5: {
                this.validationRules = [];
                break;
            }
            case 7: {
                this.validationRules = [];
                break;
            }
        }
    }
    onValidationChange() {
        switch (this.selectedValidation) {
            case 'none': {
                this.setFieldValidator();
                break;
            }
            case 'is-not-empty': {
                this.setFieldValidator();
                break;
            }
            case 'after-date': {
                this.inputType = 3;
                break;
            }
            case 'before-date': {
                this.inputType = 3;
                break;
            }
            case 'is-equal-to': {
                this.field.editTemplate === TemplateType.Date ? this.inputType = 3 : this.inputType = 1;
                break;
            }
            case 'is-not-equal-to': {
                this.field.editTemplate === TemplateType.Date ? this.inputType = 3 : this.inputType = 1;
                break;
            }
            case 'range': {
                this.field.editTemplate === TemplateType.Date ? this.inputType = 4 : this.inputType = 2;
                break;
            }
            case 'greater-than': {
                this.inputType = 1;
                break;
            }
            case 'less-than': {
                this.inputType = 1;
                break;
            }
            default: {
                this.setFieldValidator();
            }
        }
    }
    onInputValueChange1(value) {
        // first input value was changed
        if (this.field.validationValues !== undefined && this.field.validationValues.length > 0) {
            this.field.validationValues[0] = value;
        }
        else {
            // there is no values saved so we created a new array
            this.field.validationValues = [value];
        }
        // we set the validator on the field base don the selected rule and selected value
        this.setFieldValidator();
    }
    onDropdownValuesChanged(values) {
        var _a;
        // we need to make sure the template type is select before adding the dropdown values
        if (values !== '' && values !== undefined && values !== null && this.field.editTemplate === TemplateType.Select) {
            // possible values of the select will be added using a ',' as separator
            const valuesArray = values.split(',');
            const selectConfig = {
                label: 'label',
                value: 'value',
                selectData: []
            };
            for (let index = 0; index < valuesArray.length; index++) {
                const option = (_a = valuesArray[index]) === null || _a === void 0 ? void 0 : _a.trim();
                if (option === '' || option === null || option === undefined) {
                    continue; // ignore not valid values
                }
                selectConfig.selectData.push({
                    value: option,
                    label: option
                });
            }
            this.field.select = selectConfig;
        }
    }
    onRestrictedEdit(value) {
        this.field.readonly = value;
        this.field.editable = !value;
    }
    onDateRangeChanged(value) {
        if (value.length > 1) {
            this.field.validationValues = value;
            // we set the validator on the field base don the selected rule and selected value
            this.setFieldValidator();
        }
    }
    onInputValueChange2(value) {
        // second input value was changed
        if (this.field.validationValues !== undefined && this.field.validationValues.length > 1) {
            this.field.validationValues[1] = value;
        }
        else if (this.field.validationValues !== undefined && this.field.validationValues.length > 0) {
            // the array has one value so we add it at the end
            this.field.validationValues.push(value);
        }
        else {
            // there is no values saved so we created a new array
            this.field.validationValues = [null, value];
        }
        // we set the validator on the field base don the selected rule and selected value
        this.setFieldValidator();
    }
    setFieldValidator() {
        if (this.selectedValidation === '') {
            this.field.validationRule = null;
            this.field.validators = [];
        }
        // we set the validator on the field base don the selected rule and selected value
        this.field.validationRule = this.selectedValidation;
        switch (this.selectedValidation) {
            case 'none': {
                this.field.validators = []; // this will not apply any rule
                break;
            }
            case 'is-not-empty': {
                this.field.validators = [Validators.required];
                break;
            }
            case 'after-date': {
                this.field.validators = [afterDate(this.field.validationValues[0])];
                break;
            }
            case 'before-date': {
                this.field.validators = [beforeDate(this.field.validationValues[0])];
                break;
            }
            case 'is-equal-to': {
                this.field.validators = this.field.editTemplate === TemplateType.Date ?
                    [isEqualToDate(this.field.validationValues[0])] :
                    [isEqualToNumber(this.field.validationValues[0])];
                break;
            }
            case 'is-not-equal-to': {
                this.field.validators = this.field.editTemplate === TemplateType.Date ?
                    [isNotEqualToDate(this.field.validationValues[0])] :
                    [isNotEqualToNumber(this.field.validationValues[0])];
                break;
            }
            case 'range': {
                this.field.validators = this.field.editTemplate === TemplateType.Date ?
                    [rangeDate(this.field.validationValues[0], this.field.validationValues[1])] :
                    [rangeNumber(this.field.validationValues[0], this.field.validationValues[1])];
                break;
            }
            case 'greater-than': {
                this.field.validators = [greaterThan(this.field.validationValues[0])];
                break;
            }
            case 'less-than': {
                this.field.validators = [lessThan(this.field.validationValues[0])];
                break;
            }
            default: this.field.validators = [];
        }
    }
    onSettingSaved() {
        this.onFieldChanged.emit({ field: this.field, columnMenu: this.getColumnType(this.field.editTemplate.toString()) });
    }
}
CmacsCompactTableColumnMoreComponent.ɵfac = function CmacsCompactTableColumnMoreComponent_Factory(t) { return new (t || CmacsCompactTableColumnMoreComponent)(); };
CmacsCompactTableColumnMoreComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableColumnMoreComponent, selectors: [["cmacs-compact-table-column-more"]], inputs: { labelSave: "labelSave", items: "items", field: "field" }, outputs: { onFieldChanged: "onFieldChanged" }, decls: 4, vars: 3, consts: [["id", "compactTableColumnMore"], ["class", "cmacs-compact-table-column-more", 4, "ngIf"], ["class", "additional-parameters", 4, "ngIf"], [1, "cmacs-compact-table-column-more"], [1, "arrow-up"], ["cmacs-menu", "", 1, "cmacs-context-menu-compact-table", 2, "padding-top", "2px", "min-width", "155px"], [4, "ngFor", "ngForOf"], ["cmacs-submenu", "", "cmacsContextMenu", "", 3, "menuWrapperClassName", "menuClassName", 4, "ngIf", "ngIfElse"], ["menuTemplate", ""], ["cmacs-submenu", "", "cmacsContextMenu", "", 3, "menuWrapperClassName", "menuClassName"], ["title", ""], [1, "cmacs-context-menu-compact-table"], ["cmacs-menu-item", "", 3, "selected-item", "click", 4, "ngFor", "ngForOf"], ["cmacs-menu-item", "", 3, "click"], [1, "additional-parameters"], [1, "custom-node"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], [1, "section-content"], [1, "sidepanel-subheader"], [3, "ngModel", "ngModelChange"], [3, "value", "label", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["cmacs-button", "", "type", "primary", "role", "button", "aria-label", "Primary", 3, "click"], [3, "value", "label"], [1, "validation-input", 3, "ngModel", "ngModelChange", "onModelChange"], ["nz-row", "", "nzGutter", "24", 1, "section-content"], ["nz-col", "", "nzSpan", "24", 1, "sidepanel-subheader"], ["nz-col", "", "nzSpan", "12"], [1, "validation-input", 3, "ngModel", "ngModelChange"], ["cmacs-input", "", 3, "ngModel", "ngModelChange"], [1, "dd-instruct"], ["nz-row", "", "nzType", "flex", "nzJustify", "space-between"], [2, "padding-top", "5px"]], template: function CmacsCompactTableColumnMoreComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, CmacsCompactTableColumnMoreComponent_div_1_Template, 5, 1, "div", 1);
        i0.ɵɵtemplate(2, CmacsCompactTableColumnMoreComponent_div_2_Template, 21, 10, "div", 2);
        i0.ɵɵtemplate(3, CmacsCompactTableColumnMoreComponent_div_3_Template, 9, 2, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isAdvancedConfiguration && !ctx.isRestrictEdit);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isAdvancedConfiguration);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isRestrictEdit);
    } }, directives: [i1.NgIf, i2.CmacsMenuDirective, i1.NgForOf, i3.CmacsSubMenuComponent, i4.CmacsMenuItemDirective, i5.NzRowDirective, i5.NzColDirective, i6.CmacsSelectComponent, i7.NgControlStatus, i7.NgModel, i8.CmacsButtonComponent, i9.CmacsOptionComponent, i10.CmacsInputNumberComponent, i11.CmacsDatePickerComponent, i12.CmacsRangePickerComponent, i13.CmacsInputDirective, i7.DefaultValueAccessor, i14.CmacsSwitchComponent], styles: [".cmacs-compact-table-column-more[_ngcontent-%COMP%]{background-color:#fff;position:absolute;left:calc(100% - 226px/2 - .5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11;box-shadow:0 3px 7px rgb(59 63 70/20%)!important;border-radius:3px;border:1px solid #dee0e5;min-width:190px}.cmacs-compact-table-column-more[_ngcontent-%COMP%]   .arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-19px;margin-left:-8px;border:10px solid transparent;border-bottom-color:#fff;z-index:1}.additional-parameters[_ngcontent-%COMP%]{padding:12px 20px;width:245px;background-color:#fff;position:absolute;left:calc(100% - 282px/2 - .5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11;box-shadow:0 3px 7px rgb(59 63 70/20%)!important;border-radius:3px;border:1px solid #dee0e5}.additional-parameters[_ngcontent-%COMP%]   .arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-31px;margin-left:-8px;border:10px solid transparent;border-bottom-color:#fff;z-index:1}.custom-node[_ngcontent-%COMP%]{cursor:default;width:100%;line-height:22px;display:inline-block}.custom-node[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-flex}.tooltip-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:12px;height:28px}.selected-item[_ngcontent-%COMP%]{color:#2a7cff}.section-content[_ngcontent-%COMP%]{margin-bottom:20px}.sidepanel-subheader[_ngcontent-%COMP%]{color:#acb3bf}.section-content[_ngcontent-%COMP%]   cmacs-select[_ngcontent-%COMP%]{width:100%}.dd-instruct[_ngcontent-%COMP%]{color:#acb3bf;font-style:italic}.validation-input[_ngcontent-%COMP%]{margin-bottom:0!important;margin-left:0!important}  .menu-item .ant-menu-submenu-arrow{display:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCompactTableColumnMoreComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-compact-table-column-more',
                templateUrl: './cmacs-compact-table-column-more.component.html',
                styleUrls: ['./cmacs-compact-table-column-more.component.css']
            }]
    }], function () { return []; }, { labelSave: [{
            type: Input
        }], items: [{
            type: Input
        }], field: [{
            type: Input
        }], onFieldChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsYUFBYSxFQUNiLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNaLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FqQyw4QkFFd0M7SUFBdEMscVJBQXFDO0lBQ3JDLDRCQUFNO0lBQ0osb0JBQWdDO0lBQ2hDLDRCQUFNO0lBQUEsWUFBaUI7SUFBQSxpQkFBTztJQUNoQyxpQkFBTztJQUNULGlCQUFLOzs7O0lBTkgsK0ZBQXFFO0lBR2hFLGVBQXdCO0lBQXhCLDhCQUF3QjtJQUNyQixlQUFpQjtJQUFqQixzQ0FBaUI7OztJQWRqQyw2QkFFaUQ7SUFDL0MsZ0NBQVk7SUFDVixvQkFBNkI7SUFDN0IsNEJBQU07SUFBQSxZQUFjO0lBQUEsaUJBQU87SUFDN0IsaUJBQU87SUFDUCw4QkFBaUM7SUFDL0IsOEJBQTZDO0lBQzNDLDhHQU9LO0lBQ1AsaUJBQUs7SUFDUCxpQkFBTTtJQUNSLGlCQUFLOzs7SUFuQmEsOEVBQWdFLGtEQUFBO0lBSTNFLGVBQXFCO0lBQXJCLDJCQUFxQjtJQUNsQixlQUFjO0lBQWQsbUNBQWM7SUFJc0IsZUFBZTtJQUFmLHlDQUFlOzs7O0lBWTNELDhCQUF1RDtJQUFuQyxrU0FBa0M7SUFDcEQsNEJBQU07SUFDSixvQkFBNkI7SUFDN0IsNEJBQU07SUFBQSxZQUFjO0lBQUEsaUJBQU87SUFDN0IsaUJBQU87SUFDVCxpQkFBSzs7O0lBSEUsZUFBcUI7SUFBckIsMkJBQXFCO0lBQ2xCLGVBQWM7SUFBZCxtQ0FBYzs7O0lBekI1Qiw2QkFBdUQ7SUFDckQsd0dBbUJLO0lBQ0wsMkpBT2M7SUFDaEIsMEJBQWU7Ozs7SUExQlYsZUFBMkI7SUFBM0IsNkNBQTJCLGlCQUFBOzs7SUFSdEMsOEJBQWlHO0lBQy9GLHlCQUE0QjtJQUU1QiwyQkFBSztJQUNILDZCQUFtRztJQUNqRyw2R0E2QmU7SUFDakIsaUJBQUs7SUFDUCxpQkFBTTtJQUNSLGlCQUFNOzs7SUFoQytCLGVBQXNCO0lBQXRCLG9EQUFzQjs7O0lBNkM3QyxtQ0FDZTs7O0lBRCtCLGtEQUF1QjtJQUFDLGtEQUF1Qjs7O0lBVzdGLG1DQUNlOzs7SUFEb0MsaURBQXNCO0lBQUMsaURBQXNCOzs7O0lBTnRHLCtCQUEyRDtJQUN6RCwrQkFBNkI7SUFDM0IsK0JBQWlDO0lBQy9CLFlBQ0Y7SUFBQSxpQkFBTTtJQUNOLHdDQUFzRjtJQUF4RSw4UEFBZ0Msb09BQUE7SUFDNUMscUhBQ2U7SUFDakIsaUJBQWU7SUFDakIsaUJBQU07SUFDUixpQkFBTTs7O0lBUEEsZUFDRjtJQURFLG9GQUNGO0lBQ2MsZUFBZ0M7SUFBaEMsb0RBQWdDO0lBQ2IsZUFBa0I7SUFBbEIsaURBQWtCOzs7O0lBS3ZELCtCQUFnRDtJQUM5QywrQkFBNkI7SUFDM0IsK0JBQWlDO0lBQy9CLFlBQ0Y7SUFBQSxpQkFBTTtJQUNOLDhDQUNnRDtJQURILDZQQUF5Qix1UEFBQTtJQUV0RSxpQkFBcUI7SUFDdkIsaUJBQU07SUFDUixpQkFBTTs7O0lBTkEsZUFDRjtJQURFLGdGQUNGO0lBQzZDLGVBQXlCO0lBQXpCLDZDQUF5Qjs7OztJQUsxRSwrQkFBZ0Q7SUFDOUMsK0JBQWtEO0lBQ2hELCtCQUFvRDtJQUNsRCxZQUNGO0lBQUEsaUJBQU07SUFDTiwrQkFBd0I7SUFDdEIsOENBQ2dEO0lBREgsNlBBQXlCLHVQQUFBO0lBRXRFLGlCQUFxQjtJQUN2QixpQkFBTTtJQUNOLCtCQUF3QjtJQUN0Qiw4Q0FDZ0Q7SUFESCw2UEFBeUIsdVBBQUE7SUFFdEUsaUJBQXFCO0lBQ3ZCLGlCQUFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTs7O0lBYkEsZUFDRjtJQURFLGdGQUNGO0lBRStDLGVBQXlCO0lBQXpCLDZDQUF5QjtJQUt6QixlQUF5QjtJQUF6Qiw2Q0FBeUI7Ozs7SUFNNUUsK0JBQWdEO0lBQzlDLCtCQUE2QjtJQUMzQiwrQkFBaUM7SUFDL0IsWUFDRjtJQUFBLGlCQUFNO0lBQ04sNkNBQ2dEO0lBREosNFBBQXlCLHNQQUFBO0lBRXJFLGlCQUFvQjtJQUN0QixpQkFBTTtJQUNSLGlCQUFNOzs7SUFOQSxlQUNGO0lBREUsOEVBQ0Y7SUFDNEMsZUFBeUI7SUFBekIsNkNBQXlCOzs7O0lBS3pFLCtCQUFnRDtJQUM5QywrQkFBNkI7SUFDM0IsK0JBQWlDO0lBQy9CLFlBQ0Y7SUFBQSxpQkFBTTtJQUNOLDhDQUMrQztJQURGLDZQQUF5QixzUEFBQTtJQUV0RSxpQkFBcUI7SUFDdkIsaUJBQU07SUFDUixpQkFBTTs7O0lBTkEsZUFDRjtJQURFLDhFQUNGO0lBQzZDLGVBQXlCO0lBQXpCLDZDQUF5Qjs7OztJQUsxRSwrQkFBZ0Q7SUFDOUMsK0JBQTZCO0lBQzNCLGlDQUFvRztJQUFqRixtUEFBNEIsOE9BQUE7SUFBL0MsaUJBQW9HO0lBQ3BHLCtCQUF5QjtJQUFBLFlBQW1EO0lBQUEsaUJBQU07SUFDcEYsaUJBQU07SUFDUixpQkFBTTs7O0lBSGlCLGVBQTRCO0lBQTVCLGdEQUE0QjtJQUN0QixlQUFtRDtJQUFuRCw2RUFBbUQ7Ozs7SUE3RXhGLCtCQUFtRTtJQUNqRSx5QkFBNEI7SUFDNUIsMkJBQUs7SUFDSCxnQ0FBMEI7SUFDeEIsK0JBQVk7SUFDViwrQkFBd0I7SUFDdEIsK0JBQTZCO0lBQzNCLCtCQUFpQztJQUMvQixZQUNGO0lBQUEsaUJBQU07SUFDTix3Q0FBcUY7SUFBdkUseVBBQW1DLDhOQUFBO0lBQy9DLGdIQUNlO0lBQ2pCLGlCQUFlO0lBQ2pCLGlCQUFNO0lBQ1IsaUJBQU07SUFDTiw4RkFVTTtJQUNOLDhGQVNNO0lBQ04sOEZBZ0JNO0lBQ04sOEZBU007SUFDTiw4RkFTTTtJQUNOLDhGQUtNO0lBQ04sZ0NBQXdCO0lBQ3RCLGdDQUE2QjtJQUMzQixtQ0FDNkI7SUFBM0IsZ05BQTBCO0lBQUMsYUFBYTtJQUFBLGlCQUFTO0lBQ3JELGlCQUFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTtJQUNSLGlCQUFPO0lBQ1QsaUJBQU07SUFDUixpQkFBTTs7O0lBakZRLGVBQ0Y7SUFERSw2RUFDRjtJQUNjLGVBQW1DO0lBQW5DLHNEQUFtQztJQUNmLGVBQVk7SUFBWiwwQ0FBWTtJQUt6QixlQUFnQztJQUFoQyx3REFBZ0M7SUFXaEMsZUFBcUI7SUFBckIsNkNBQXFCO0lBVXJCLGVBQXFCO0lBQXJCLDZDQUFxQjtJQWlCckIsZUFBcUI7SUFBckIsNkNBQXFCO0lBVXJCLGVBQXFCO0lBQXJCLDZDQUFxQjtJQVVyQixlQUFxQjtJQUFyQiw2Q0FBcUI7SUFTYixlQUFhO0lBQWIsc0NBQWE7Ozs7SUFRdEQsK0JBQTBEO0lBQ3hELHlCQUE0QjtJQUM1QiwyQkFBSztJQUNILCtCQUF5QjtJQUN2QiwrQkFBb0Q7SUFDbEQsZ0NBQWdDO0lBQUEsWUFBb0M7SUFBQSxpQkFBTztJQUMzRSw0QkFBTTtJQUNKLHdDQUFnRjtJQUFsRSw0T0FBc0Isc09BQUE7SUFBNEMsaUJBQWU7SUFDakcsaUJBQU87SUFDVCxpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTs7O0lBUGtDLGVBQW9DO0lBQXBDLDZEQUFvQztJQUVwRCxlQUFzQjtJQUF0Qix5Q0FBc0I7O0FEbkhoRCxNQUFNLE9BQU8sb0NBQW9DO0lBaUIvQztRQWhCQSw0QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFDaEMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsdUJBQWtCLEdBQUcsTUFBTSxDQUFDO1FBQzVCLDBCQUFxQixHQUFXLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0Qsb0JBQWUsR0FBYSxFQUFFLENBQUM7UUFDL0IsY0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLHFHQUFxRztRQUlwSCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRVIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUdkLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUFDaEQsQ0FBQztJQUVqQixRQUFROztRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUV6SCxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLHFCQUFxQixTQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSwwQ0FBRSxRQUFRLEVBQUUsQ0FBQztRQUNqRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDcEQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyRixpQ0FBaUM7WUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25EO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEgsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuRDthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztTQUNoRDthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ2xFLHlFQUF5RTtZQUN6RSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDaEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3hFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQXFCOztRQUNoQyxJQUFJLEtBQUssS0FBSyxjQUFjLENBQUMsWUFBWSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCO2FBQU0sSUFBSSxLQUFLLEtBQUssY0FBYyxDQUFDLHFCQUFxQixJQUFJLEtBQUssS0FBSyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQzVGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDNUU7YUFBTTtZQUNMLElBQUksQ0FBQyxxQkFBcUIsU0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLDBDQUFFLFFBQVEsRUFBRSxDQUFDO1lBQ2hHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNyRixJQUFJLEtBQUssS0FBSyxjQUFjLENBQUMscUJBQXFCLEVBQUU7Z0JBQ2xELHFFQUFxRTtnQkFDckUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2RDtZQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3hEO1lBQ0QsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRCxlQUFlLENBQUMsS0FBcUI7UUFDbkMsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbkQsS0FBSyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDO1lBQ3pELEtBQUssY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUN2RCxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDdkQsS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ25ELEtBQUssY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUN2RCxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbkQsT0FBTyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDekIsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLFFBQVEsWUFBWSxFQUFFO1lBQ3BCLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztZQUNuRCxLQUFLLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFDekQsS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDO1lBQ3ZELEtBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQztZQUN2RCxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDbkQsS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDO1lBQ3ZELEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztZQUNuRCxPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBcUIsRUFBRSxZQUEwQjtRQUMxRCwwRUFBMEU7UUFDMUUsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLFlBQVksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3BFLEtBQUssY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sWUFBWSxLQUFLLFlBQVksQ0FBQyxPQUFPLENBQUM7WUFDMUUsS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxZQUFZLEtBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUN4RSxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLFlBQVksS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ3hFLEtBQUssY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sWUFBWSxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDcEUsS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxZQUFZLEtBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUN4RSxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLFlBQVksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3BFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQseUJBQXlCLENBQUMsWUFBMEI7O1FBQ2xELElBQUksQ0FBQyxxQkFBcUIsU0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLDBDQUFFLFFBQVEsRUFBRSxDQUFDO1FBRWhHLFFBQVEsWUFBWSxFQUFFO1lBQ3BCLEtBQUssWUFBWSxDQUFDLE9BQU8sQ0FBQztZQUMxQixLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDdkIsS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ3pCLEtBQUssWUFBWSxDQUFDLEtBQUssQ0FBQztZQUN4QixLQUFLLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDekIsS0FBSyxZQUFZLENBQUMsSUFBSTtnQkFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE1BQU07WUFDUixLQUFLLFlBQVksQ0FBQyxNQUFNO2dCQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsTUFBTTtZQUNSLEtBQUssWUFBWSxDQUFDLFVBQVU7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixNQUFNO1NBQ1Q7UUFHRCxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO1lBQy9CLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZELE1BQU07YUFDUDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7Z0JBQzFCLE1BQU07YUFDUDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3pELE1BQU07YUFDUDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZELE1BQU07YUFDUDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7Z0JBQzFCLE1BQU07YUFDUDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7Z0JBQzFCLE1BQU07YUFDUDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7Z0JBQzFCLE1BQU07YUFDUDtTQUNGO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFFNUIsQ0FBQztJQUVELHdCQUF3QixDQUFDLFlBQTBCOztRQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLHFCQUFxQixTQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsMENBQUUsUUFBUSxFQUFFLENBQUM7UUFDaEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBRWpDLDJGQUEyRjtRQUMzRixRQUFRLFlBQVksRUFBRTtZQUNwQixLQUFLLFlBQVksQ0FBQyxPQUFPLENBQUM7WUFDMUIsS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLEtBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUN6QixLQUFLLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDeEIsS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ3pCLEtBQUssWUFBWSxDQUFDLElBQUk7Z0JBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixNQUFNO1lBQ1IsS0FBSyxZQUFZLENBQUMsTUFBTTtnQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE1BQU07WUFFUixLQUFLLFlBQVksQ0FBQyxVQUFVO2dCQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUV0QjtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFtQjtRQUNwQyxRQUFRLEtBQUssRUFBRTtZQUNiLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZELE1BQU07YUFDUDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7Z0JBQzFCLE1BQU07YUFDUDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3pELE1BQU07YUFDUDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZELE1BQU07YUFDUDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7Z0JBQzFCLE1BQU07YUFDUDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7Z0JBQzFCLE1BQU07YUFDUDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7Z0JBQzFCLE1BQU07YUFDUDtTQUNGO0lBQ0gsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixRQUFRLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMvQixLQUFLLE1BQU0sQ0FBQyxDQUFDO2dCQUNYLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUN6QixNQUFNO2FBQ1A7WUFDRCxLQUFLLGNBQWMsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDekIsTUFBTTthQUNQO1lBQ0QsS0FBSyxZQUFZLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE1BQU07YUFDUDtZQUNELEtBQUssYUFBYSxDQUFDLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixNQUFNO2FBQ1A7WUFDRCxLQUFLLGFBQWEsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hGLE1BQU07YUFDUDtZQUNELEtBQUssaUJBQWlCLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUN4RixNQUFNO2FBQ1A7WUFDRCxLQUFLLE9BQU8sQ0FBQyxDQUFDO2dCQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDeEYsTUFBTTthQUNQO1lBQ0QsS0FBSyxjQUFjLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE1BQU07YUFDUDtZQUNELEtBQUssV0FBVyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixNQUFNO2FBQ1A7WUFDRCxPQUFPLENBQUMsQ0FBQztnQkFDUCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQVU7UUFDNUIsZ0NBQWdDO1FBQ2hDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZGLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxxREFBcUQ7WUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsa0ZBQWtGO1FBQ2xGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxNQUFjOztRQUNwQyxxRkFBcUY7UUFDckYsSUFBSSxNQUFNLEtBQUssRUFBRSxJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQy9HLHVFQUF1RTtZQUV2RSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sWUFBWSxHQUFpQjtnQkFDakMsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsVUFBVSxFQUFFLEVBQUU7YUFDZixDQUFDO1lBQ0YsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3ZELE1BQU0sTUFBTSxTQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsMENBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQzFDLElBQUksTUFBTSxLQUFLLEVBQUUsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7b0JBQzVELFNBQVMsQ0FBQywwQkFBMEI7aUJBQ3JDO2dCQUNELFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUMzQixLQUFLLEVBQUUsTUFBTTtvQkFDYixLQUFLLEVBQUUsTUFBTTtpQkFDZCxDQUFDLENBQUM7YUFDSjtZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBYTtRQUM5QixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLGtGQUFrRjtZQUNsRixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFVO1FBQzVCLGlDQUFpQztRQUNqQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2RixJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN4QzthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzlGLGtEQUFrRDtZQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0wscURBQXFEO1lBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0M7UUFFRCxrRkFBa0Y7UUFDbEYsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQzVCO1FBRUQsa0ZBQWtGO1FBQ2xGLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNwRCxRQUFRLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMvQixLQUFLLE1BQU0sQ0FBQyxDQUFDO2dCQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLCtCQUErQjtnQkFDM0QsTUFBTTthQUNQO1lBQ0QsS0FBSyxjQUFjLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLE1BQU07YUFDUDtZQUNELEtBQUssWUFBWSxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwRSxNQUFNO2FBQ1A7WUFDRCxLQUFLLGFBQWEsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckUsTUFBTTthQUNQO1lBQ0QsS0FBSyxhQUFhLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqRCxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsTUFBTTthQUNQO1lBQ0QsS0FBSyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEQsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsTUFBTTthQUNQO1lBQ0QsS0FBSyxPQUFPLENBQUMsQ0FBQztnQkFDWixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0UsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEYsTUFBTTthQUNQO1lBQ0QsS0FBSyxjQUFjLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RFLE1BQU07YUFDUDtZQUNELEtBQUssV0FBVyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxNQUFNO2FBQ1A7WUFDRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEgsQ0FBQzs7d0hBMVpVLG9DQUFvQzt5RUFBcEMsb0NBQW9DO1FDdkJqRCw4QkFBaUM7UUFDL0IscUZBcUNNO1FBRU4sdUZBeUZNO1FBRU4scUZBWU07UUFDUixpQkFBTTs7UUEvSTBDLGVBQWlEO1FBQWpELDBFQUFpRDtRQXVDM0QsZUFBNkI7UUFBN0Isa0RBQTZCO1FBMkY3QixlQUFvQjtRQUFwQix5Q0FBb0I7O3VGRDVHN0Msb0NBQW9DO2NBTGhELFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxXQUFXLEVBQUUsa0RBQWtEO2dCQUMvRCxTQUFTLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQzthQUMvRDtzQ0FjVSxTQUFTO2tCQUFqQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2x1bW5NZW51VHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZW51bXMvY29sdW1uTWVudVR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZW51bXMvVGVtcGxhdGVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBFZGl0Q29sdW1uQWN0aW9uLCBGaWVsZCwgU2VsZWN0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtcclxuICBhZnRlckRhdGUsXHJcbiAgYmVmb3JlRGF0ZSxcclxuICBncmVhdGVyVGhhbixcclxuICBpc0VxdWFsVG9EYXRlLFxyXG4gIGlzRXF1YWxUb051bWJlcixcclxuICBpc05vdEVxdWFsVG9EYXRlLFxyXG4gIGlzTm90RXF1YWxUb051bWJlcixcclxuICBsZXNzVGhhbixcclxuICByYW5nZURhdGUsXHJcbiAgcmFuZ2VOdW1iZXJcclxufSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2N1c3RvbVZhbGlkYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQ29sdW1uTW9yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IGZhbHNlO1xyXG4gIGlzUmVzdHJpY3RFZGl0ID0gZmFsc2U7XHJcbiAgc2VsZWN0ZWRWYWxpZGF0aW9uID0gJ25vbmUnO1xyXG4gIHNlbGVjdGVkRmllbGRUZW1wbGF0ZTogc3RyaW5nID0gVGVtcGxhdGVUeXBlLlN0cmluZy50b1N0cmluZygpO1xyXG4gIHZhbGlkYXRpb25SdWxlczogc3RyaW5nW10gPSBbXTtcclxuICBpbnB1dFR5cGUgPSAwOyAvLyAxIC0+IG51bWJlciBpbnB1dCwgMiAtPiBudW1iZXIgcmFuZ2UgaW5wdXQsIDMtPiBkYXRlIGlucHV0LCA0IC0+IHJhbmdlIGRhdGUgaW5wdXQsIDUgLT4gdGV4dCBpbnB1dFxyXG4gIGlucHV0VmFsdWUxOiBhbnk7XHJcbiAgaW5wdXRWYWx1ZTI6IGFueTtcclxuICB0eXBlc0xpc3Q6IGFueVtdO1xyXG4gIGRyb3Bkb3duVmFsdWVzID0gJyc7XHJcbiAgcmVhZE9ubHkgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgbGFiZWxTYXZlID0gJyc7XHJcbiAgQElucHV0KCkgaXRlbXM6IGFueTtcclxuICBASW5wdXQoKSBmaWVsZDogRmllbGQ7XHJcbiAgQE91dHB1dCgpIG9uRmllbGRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxFZGl0Q29sdW1uQWN0aW9uPigpO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWFkT25seSA9IHRoaXMuZmllbGQucmVhZG9ubHk7XHJcbiAgICB0aGlzLnR5cGVzTGlzdCA9IHRoaXMuaXRlbXMuY29sdW1uT3B0aW9uc1swXS5zdWJNZW51LmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgIT09IENvbHVtbk1lbnVUeXBlLkFkdmFuY2VkQ29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgLy8gc2V0IGluaXRpYWwgdmFsdWVzIGJhc2VkIG9uIHRoZSBmaWVsZCBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLnNlbGVjdGVkRmllbGRUZW1wbGF0ZSA9IHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlPy50b1N0cmluZygpO1xyXG4gICAgdGhpcy5zZWxlY3RlZFZhbGlkYXRpb24gPSB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlO1xyXG4gICAgdGhpcy5pbml0QWR2YW5jZWRDb25maWd1cmF0aW9uKHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlKTtcclxuICAgIGlmICgodGhpcy5pbnB1dFR5cGUgPT09IDEgfHwgdGhpcy5pbnB1dFR5cGUgPT09IDMpICYmXHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIHdlIG5lZWQgdG8gc2V0IHRoZSBmaXJzdCB2YWx1ZVxyXG4gICAgICB0aGlzLmlucHV0VmFsdWUxID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gMiAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUxID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdO1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUyID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzFdO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gNCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUxID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gNSAmJiB0aGlzLmZpZWxkLnNlbGVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIHNldCB0aGUgdmFsdWVzIGZvciB0aGUgb3B0aW9ucyBvZiB0aGUgZHJvcGRvd25cclxuICAgICAgbGV0IHZhbHVlcyA9ICcnO1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5maWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmZpZWxkLnNlbGVjdC5zZWxlY3REYXRhW2luZGV4XTtcclxuICAgICAgICB2YWx1ZXMgKz0gYCR7b3B0aW9uLnZhbHVlfTtgO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZHJvcGRvd25WYWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5vblNldHRpbmdTYXZlZCgpO1xyXG4gIH1cclxuXHJcbiAgZmllbGRDaGFuZ2VkKHZhbHVlOiBDb2x1bW5NZW51VHlwZSk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlID09PSBDb2x1bW5NZW51VHlwZS5SZXN0cmljdEVkaXQpIHtcclxuICAgICAgdGhpcy5pc1Jlc3RyaWN0RWRpdCA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBDb2x1bW5NZW51VHlwZS5BZHZhbmNlZENvbmZpZ3VyYXRpb24gJiYgdmFsdWUgIT09IENvbHVtbk1lbnVUeXBlLlNlbGVjdCkge1xyXG4gICAgICBjb25zdCBuZXdUeXBlID0gdGhpcy5nZXRUZW1wbGF0ZVR5cGUodmFsdWUpO1xyXG4gICAgICBpZiAobmV3VHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID0gbmV3VHlwZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlID0gJyc7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyA9IFtdO1xyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbXTtcclxuICAgICAgdGhpcy5vbkZpZWxkQ2hhbmdlZC5lbWl0KHsgZmllbGQ6IHRoaXMuZmllbGQsIGNvbHVtbk1lbnU6IE51bWJlcih2YWx1ZSkgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkRmllbGRUZW1wbGF0ZSA9IHRoaXMuZ2V0Q29sdW1uVHlwZSh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZS50b1N0cmluZygpKT8udG9TdHJpbmcoKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbGlkYXRpb24gPSB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlID8gdGhpcy5maWVsZC52YWxpZGF0aW9uUnVsZSA6ICcnO1xyXG4gICAgICBpZiAodmFsdWUgIT09IENvbHVtbk1lbnVUeXBlLkFkdmFuY2VkQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIC8vIGluIHRoaXMgY2FzZSBhIHR5cGUgd2FzIHNlbGVjdGVkIHNvIHdlIG5lZWQgdG8gc2V0IGl0IG9uIHRoZSBmaWVsZFxyXG4gICAgICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID0gdGhpcy5nZXRUZW1wbGF0ZVR5cGUodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0QWR2YW5jZWRDb25maWd1cmF0aW9uKHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmlzQWR2YW5jZWRDb25maWd1cmF0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRlbXBsYXRlVHlwZSh2YWx1ZTogQ29sdW1uTWVudVR5cGUpOiBUZW1wbGF0ZVR5cGUgfCBudWxsIHtcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuQm9vbGVhbjogcmV0dXJuIFRlbXBsYXRlVHlwZS5Cb29sZWFuO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLk51bWJlcjogcmV0dXJuIFRlbXBsYXRlVHlwZS5OdW1iZXI7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU2VsZWN0OiByZXR1cm4gVGVtcGxhdGVUeXBlLlNlbGVjdDtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU3RyaW5nOiByZXR1cm4gVGVtcGxhdGVUeXBlLlN0cmluZztcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5UaW1lOiByZXR1cm4gVGVtcGxhdGVUeXBlLlRpbWU7XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q29sdW1uVHlwZSh2YWx1ZTogc3RyaW5nKTogQ29sdW1uTWVudVR5cGUgfCBudWxsIHtcclxuICAgIGNvbnN0IHRlbXBsYXRlVHlwZSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICBzd2l0Y2ggKHRlbXBsYXRlVHlwZSkge1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOiByZXR1cm4gQ29sdW1uTWVudVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuQm9vbGVhbjogcmV0dXJuIENvbHVtbk1lbnVUeXBlLkJvb2xlYW47XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLk51bWJlcjogcmV0dXJuIENvbHVtbk1lbnVUeXBlLk51bWJlcjtcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU2VsZWN0OiByZXR1cm4gQ29sdW1uTWVudVR5cGUuU2VsZWN0O1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOiByZXR1cm4gQ29sdW1uTWVudVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU3RyaW5nOiByZXR1cm4gQ29sdW1uTWVudVR5cGUuU3RyaW5nO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5UaW1lOiByZXR1cm4gQ29sdW1uTWVudVR5cGUuVGltZTtcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkKHZhbHVlOiBDb2x1bW5NZW51VHlwZSwgdGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIC8vIGl0IHdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIHR5cGUgb2YgdGhlIHRlbXBsYXRlIG1hdGNoZXMgdGhlIGNvbHVtbiB0eXBlXHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuRGF0ZTogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuQm9vbGVhbjogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuTnVtYmVyOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlNlbGVjdDogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdDtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TdHJpbmc6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuVGltZTogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlRpbWU7XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbHVtblR5cGUgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgY29uc3QgdGVtcGxhdGVUeXBlID0gdGhpcy5nZXRUZW1wbGF0ZVR5cGUoY29sdW1uVHlwZSk7XHJcbiAgICB0aGlzLnNldEFkdmFuY2VkQ29uZmlndXJhdGlvbih0ZW1wbGF0ZVR5cGUpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEFkdmFuY2VkQ29uZmlndXJhdGlvbih0ZW1wbGF0ZVR5cGU6IFRlbXBsYXRlVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZEZpZWxkVGVtcGxhdGUgPSB0aGlzLmdldENvbHVtblR5cGUodGhpcy5maWVsZC5lZGl0VGVtcGxhdGUudG9TdHJpbmcoKSk/LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgc3dpdGNoICh0ZW1wbGF0ZVR5cGUpIHtcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuQm9vbGVhbjpcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuRGF0ZTpcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuTnVtYmVyOlxyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5QaG9uZTpcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU3RyaW5nOlxyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5UaW1lOlxyXG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU2VsZWN0OlxyXG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gNTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuQXR0YWNobWVudDpcclxuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN3aXRjaCAodGhpcy5maWVsZC5lZGl0VGVtcGxhdGUpIHtcclxuICAgICAgY2FzZSAwOiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy5kYXRlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMToge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAyOiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy5udW1iZXI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAzOiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy50ZXh0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNDoge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA1OiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDc6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vblZhbGlkYXRpb25DaGFuZ2UoKTtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRBZHZhbmNlZENvbmZpZ3VyYXRpb24odGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID0gdGVtcGxhdGVUeXBlO1xyXG4gICAgdGhpcy5zZWxlY3RlZEZpZWxkVGVtcGxhdGUgPSB0aGlzLmdldENvbHVtblR5cGUodGhpcy5maWVsZC5lZGl0VGVtcGxhdGUudG9TdHJpbmcoKSk/LnRvU3RyaW5nKCk7XHJcbiAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlID0gdGhpcy5zZWxlY3RlZFZhbGlkYXRpb247XHJcbiAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgPSBbXTtcclxuXHJcbiAgICAvLyBkZXBlbmRpbmcgb24gdGhlIHRlbXBsYXRlIHR5cGUgd2Ugd2lsbCBzZXQgdGhlIHZhbHVlcyBvbiB0aGUgYWR2YW5jZSBjb25maWd1cmF0aW9uIHBvcHVwXHJcbiAgICBzd2l0Y2ggKHRlbXBsYXRlVHlwZSkge1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5Cb29sZWFuOlxyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOlxyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5OdW1iZXI6XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlBob25lOlxyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TdHJpbmc6XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlRpbWU6XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TZWxlY3Q6XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSA1O1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuQXR0YWNobWVudDpcclxuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IDA7XHJcblxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRWYWxpZGF0aW9uUnVsZXModGhpcy5maWVsZC5lZGl0VGVtcGxhdGUpO1xyXG4gICAgdGhpcy5vblZhbGlkYXRpb25DaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIHNldFZhbGlkYXRpb25SdWxlcyh2YWx1ZTogVGVtcGxhdGVUeXBlKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgMDoge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gdGhpcy5pdGVtcy52YWxpZGF0aW9uUnVsZXMuZGF0ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDE6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gdGhpcy5pdGVtcy52YWxpZGF0aW9uUnVsZXMubnVtYmVyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMzoge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gdGhpcy5pdGVtcy52YWxpZGF0aW9uUnVsZXMudGV4dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDQ6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNToge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA3OiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25WYWxpZGF0aW9uQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgc3dpdGNoICh0aGlzLnNlbGVjdGVkVmFsaWRhdGlvbikge1xyXG4gICAgICBjYXNlICdub25lJzoge1xyXG4gICAgICAgIHRoaXMuc2V0RmllbGRWYWxpZGF0b3IoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpcy1ub3QtZW1wdHknOiB7XHJcbiAgICAgICAgdGhpcy5zZXRGaWVsZFZhbGlkYXRvcigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2FmdGVyLWRhdGUnOiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSAzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2JlZm9yZS1kYXRlJzoge1xyXG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gMztcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpcy1lcXVhbC10byc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgPyB0aGlzLmlucHV0VHlwZSA9IDMgOiB0aGlzLmlucHV0VHlwZSA9IDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnaXMtbm90LWVxdWFsLXRvJzoge1xyXG4gICAgICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZSA/IHRoaXMuaW5wdXRUeXBlID0gMyA6IHRoaXMuaW5wdXRUeXBlID0gMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdyYW5nZSc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgPyB0aGlzLmlucHV0VHlwZSA9IDQgOiB0aGlzLmlucHV0VHlwZSA9IDI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnZ3JlYXRlci10aGFuJzoge1xyXG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdsZXNzLXRoYW4nOiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICB0aGlzLnNldEZpZWxkVmFsaWRhdG9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW5wdXRWYWx1ZUNoYW5nZTEodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gZmlyc3QgaW5wdXQgdmFsdWUgd2FzIGNoYW5nZWRcclxuICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0gPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHRoZXJlIGlzIG5vIHZhbHVlcyBzYXZlZCBzbyB3ZSBjcmVhdGVkIGEgbmV3IGFycmF5XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyA9IFt2YWx1ZV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2Ugc2V0IHRoZSB2YWxpZGF0b3Igb24gdGhlIGZpZWxkIGJhc2UgZG9uIHRoZSBzZWxlY3RlZCBydWxlIGFuZCBzZWxlY3RlZCB2YWx1ZVxyXG4gICAgdGhpcy5zZXRGaWVsZFZhbGlkYXRvcigpO1xyXG4gIH1cclxuXHJcbiAgb25Ecm9wZG93blZhbHVlc0NoYW5nZWQodmFsdWVzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoZSB0ZW1wbGF0ZSB0eXBlIGlzIHNlbGVjdCBiZWZvcmUgYWRkaW5nIHRoZSBkcm9wZG93biB2YWx1ZXNcclxuICAgIGlmICh2YWx1ZXMgIT09ICcnICYmIHZhbHVlcyAhPT0gdW5kZWZpbmVkICYmIHZhbHVlcyAhPT0gbnVsbCAmJiB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCkge1xyXG4gICAgICAvLyBwb3NzaWJsZSB2YWx1ZXMgb2YgdGhlIHNlbGVjdCB3aWxsIGJlIGFkZGVkIHVzaW5nIGEgJywnIGFzIHNlcGFyYXRvclxyXG5cclxuICAgICAgY29uc3QgdmFsdWVzQXJyYXkgPSB2YWx1ZXMuc3BsaXQoJywnKTtcclxuICAgICAgY29uc3Qgc2VsZWN0Q29uZmlnOiBTZWxlY3RDb25maWcgPSB7XHJcbiAgICAgICAgbGFiZWw6ICdsYWJlbCcsXHJcbiAgICAgICAgdmFsdWU6ICd2YWx1ZScsXHJcbiAgICAgICAgc2VsZWN0RGF0YTogW11cclxuICAgICAgfTtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlc0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHZhbHVlc0FycmF5W2luZGV4XT8udHJpbSgpO1xyXG4gICAgICAgIGlmIChvcHRpb24gPT09ICcnIHx8IG9wdGlvbiA9PT0gbnVsbCB8fCBvcHRpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY29udGludWU7IC8vIGlnbm9yZSBub3QgdmFsaWQgdmFsdWVzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdENvbmZpZy5zZWxlY3REYXRhLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IG9wdGlvbixcclxuICAgICAgICAgIGxhYmVsOiBvcHRpb25cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5maWVsZC5zZWxlY3QgPSBzZWxlY3RDb25maWc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJlc3RyaWN0ZWRFZGl0KHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmZpZWxkLnJlYWRvbmx5ID0gdmFsdWU7XHJcbiAgICB0aGlzLmZpZWxkLmVkaXRhYmxlID0gIXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb25EYXRlUmFuZ2VDaGFuZ2VkKHZhbHVlOiBEYXRlW10pOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyA9IHZhbHVlO1xyXG4gICAgICAvLyB3ZSBzZXQgdGhlIHZhbGlkYXRvciBvbiB0aGUgZmllbGQgYmFzZSBkb24gdGhlIHNlbGVjdGVkIHJ1bGUgYW5kIHNlbGVjdGVkIHZhbHVlXHJcbiAgICAgIHRoaXMuc2V0RmllbGRWYWxpZGF0b3IoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW5wdXRWYWx1ZUNoYW5nZTIodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gc2Vjb25kIGlucHV0IHZhbHVlIHdhcyBjaGFuZ2VkXHJcbiAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzFdID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIHRoZSBhcnJheSBoYXMgb25lIHZhbHVlIHNvIHdlIGFkZCBpdCBhdCB0aGUgZW5kXHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcy5wdXNoKHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHRoZXJlIGlzIG5vIHZhbHVlcyBzYXZlZCBzbyB3ZSBjcmVhdGVkIGEgbmV3IGFycmF5XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyA9IFtudWxsLCB2YWx1ZV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2Ugc2V0IHRoZSB2YWxpZGF0b3Igb24gdGhlIGZpZWxkIGJhc2UgZG9uIHRoZSBzZWxlY3RlZCBydWxlIGFuZCBzZWxlY3RlZCB2YWx1ZVxyXG4gICAgdGhpcy5zZXRGaWVsZFZhbGlkYXRvcigpO1xyXG4gIH1cclxuXHJcbiAgc2V0RmllbGRWYWxpZGF0b3IoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFZhbGlkYXRpb24gPT09ICcnKSB7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblJ1bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSBzZXQgdGhlIHZhbGlkYXRvciBvbiB0aGUgZmllbGQgYmFzZSBkb24gdGhlIHNlbGVjdGVkIHJ1bGUgYW5kIHNlbGVjdGVkIHZhbHVlXHJcbiAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlID0gdGhpcy5zZWxlY3RlZFZhbGlkYXRpb247XHJcbiAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRWYWxpZGF0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ25vbmUnOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW107IC8vIHRoaXMgd2lsbCBub3QgYXBwbHkgYW55IHJ1bGVcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpcy1ub3QtZW1wdHknOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW1ZhbGlkYXRvcnMucmVxdWlyZWRdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2FmdGVyLWRhdGUnOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW2FmdGVyRGF0ZSh0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdiZWZvcmUtZGF0ZSc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbYmVmb3JlRGF0ZSh0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpcy1lcXVhbC10byc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgP1xyXG4gICAgICAgICAgW2lzRXF1YWxUb0RhdGUodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV0gOlxyXG4gICAgICAgICAgW2lzRXF1YWxUb051bWJlcih0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpcy1ub3QtZXF1YWwtdG8nOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlID9cclxuICAgICAgICAgIFtpc05vdEVxdWFsVG9EYXRlKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldIDpcclxuICAgICAgICAgIFtpc05vdEVxdWFsVG9OdW1iZXIodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAncmFuZ2UnOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlID9cclxuICAgICAgICAgIFtyYW5nZURhdGUodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdLCB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMV0pXSA6XHJcbiAgICAgICAgICBbcmFuZ2VOdW1iZXIodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdLCB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMV0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdncmVhdGVyLXRoYW4nOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW2dyZWF0ZXJUaGFuKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2xlc3MtdGhhbic6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbbGVzc1RoYW4odGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDogdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNldHRpbmdTYXZlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMub25GaWVsZENoYW5nZWQuZW1pdCh7IGZpZWxkOiB0aGlzLmZpZWxkLCBjb2x1bW5NZW51OiB0aGlzLmdldENvbHVtblR5cGUodGhpcy5maWVsZC5lZGl0VGVtcGxhdGUudG9TdHJpbmcoKSkgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGlkPVwiY29tcGFjdFRhYmxlQ29sdW1uTW9yZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlXCIgKm5nSWY9XCIhaXNBZHZhbmNlZENvbmZpZ3VyYXRpb24gJiYgIWlzUmVzdHJpY3RFZGl0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXJyb3ctdXBcIj48L2Rpdj5cclxuICAgIDwhLS0gcmVndWxhciBjb2x1bW4gb3B0aW9ucyAtLT5cclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbWFjcy1tZW51IGNsYXNzPVwiY21hY3MtY29udGV4dC1tZW51LWNvbXBhY3QtdGFibGVcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAycHg7IG1pbi13aWR0aDogMTU1cHhcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zLmNvbHVtbk9wdGlvbnNcIj5cclxuICAgICAgICAgIDxsaSBjbWFjcy1zdWJtZW51IFttZW51V3JhcHBlckNsYXNzTmFtZV09XCInY29tcGFjdC10YWJsZS1tb3JlLXN1Ym1lbnUtdWwtd3JhcHBlcidcIlxyXG4gICAgICAgICAgICBbbWVudUNsYXNzTmFtZV09XCInY29tcGFjdC10YWJsZS1tb3JlLXN1Ym1lbnUtdWwnXCIgY21hY3NDb250ZXh0TWVudVxyXG4gICAgICAgICAgICAqbmdJZj1cIml0ZW0uc3ViTWVudS5sZW5ndGg7IGVsc2UgbWVudVRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHRpdGxlPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwie3tpdGVtLmljb259fVwiPjwvaT5cclxuICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29tcGFjdFRhYmxlQ29sdW1uTW9yZVwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNtYWNzLWNvbnRleHQtbWVudS1jb21wYWN0LXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY21hY3MtbWVudS1pdGVtICpuZ0Zvcj1cImxldCBzdWJtZW51IG9mIGl0ZW0uc3ViTWVudVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZC1pdGVtXT1cImlzU2VsZWN0ZWQoc3VibWVudS52YWx1ZSwgZmllbGQuZWRpdFRlbXBsYXRlKVwiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJmaWVsZENoYW5nZWQoc3VibWVudS52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ7e3N1Ym1lbnUuaWNvbn19XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7c3VibWVudS5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbWVudVRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8bGkgY21hY3MtbWVudS1pdGVtIChjbGljayk9XCJmaWVsZENoYW5nZWQoaXRlbS52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwie3tpdGVtLmljb259fVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImFkZGl0aW9uYWwtcGFyYW1ldGVyc1wiICpuZ0lmPVwiaXNBZHZhbmNlZENvbmZpZ3VyYXRpb25cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhcnJvdy11cFwiPjwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJjdXN0b20tbm9kZVwiPlxyXG4gICAgICAgIDxkaXYgbnotcm93PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlcGFuZWwtc3ViaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5sYWJlbFR5cGV9fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxjbWFjcy1zZWxlY3QgWyhuZ01vZGVsKV09XCJzZWxlY3RlZEZpZWxkVGVtcGxhdGVcIiAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBfaXRlbSBvZiB0eXBlc0xpc3RcIiB2YWx1ZT1cInt7X2l0ZW0udmFsdWV9fVwiIGxhYmVsPVwie3tfaXRlbS5sYWJlbH19XCI+XHJcbiAgICAgICAgICAgICAgICA8L2NtYWNzLW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L2NtYWNzLXNlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjI0XCIgKm5nSWY9XCJ2YWxpZGF0aW9uUnVsZXMubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGVwYW5lbC1zdWJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbXMuYWR2YW5jZWRDb25maWd1cmF0aW9uLmxhYmVsVmFsaWRhdGlvbn19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGNtYWNzLXNlbGVjdCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsaWRhdGlvblwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uVmFsaWRhdGlvbkNoYW5nZSgpXCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBydWxlIG9mIHZhbGlkYXRpb25SdWxlc1wiIHZhbHVlPVwie3tydWxlLnZhbHVlfX1cIiBsYWJlbD1cInt7cnVsZS5sYWJlbH19XCI+XHJcbiAgICAgICAgICAgICAgICA8L2NtYWNzLW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L2NtYWNzLXNlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjI0XCIgKm5nSWY9XCJpbnB1dFR5cGUgPT09IDFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlcGFuZWwtc3ViaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5sYWJlbE51bWJlcn19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGNtYWNzLWlucHV0LW51bWJlciBjbGFzcz1cInZhbGlkYXRpb24taW5wdXRcIiBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWUxXCJcclxuICAgICAgICAgICAgICAgIChvbk1vZGVsQ2hhbmdlKT1cIm9uSW5wdXRWYWx1ZUNoYW5nZTEoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIiAqbmdJZj1cImlucHV0VHlwZSA9PT0gMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCIgbnotcm93IG56R3V0dGVyPVwiMjRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZXBhbmVsLXN1YmhlYWRlclwiIG56LWNvbCBuelNwYW49XCIyNFwiPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtcy5hZHZhbmNlZENvbmZpZ3VyYXRpb24ubGFiZWxOdW1iZXJ9fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3MtaW5wdXQtbnVtYmVyIGNsYXNzPVwidmFsaWRhdGlvbi1pbnB1dFwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZTFcIlxyXG4gICAgICAgICAgICAgICAgICAob25Nb2RlbENoYW5nZSk9XCJvbklucHV0VmFsdWVDaGFuZ2UxKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3MtaW5wdXQtbnVtYmVyIGNsYXNzPVwidmFsaWRhdGlvbi1pbnB1dFwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZTJcIlxyXG4gICAgICAgICAgICAgICAgICAob25Nb2RlbENoYW5nZSk9XCJvbklucHV0VmFsdWVDaGFuZ2UyKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIiAqbmdJZj1cImlucHV0VHlwZSA9PT0gM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGVwYW5lbC1zdWJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbXMuYWR2YW5jZWRDb25maWd1cmF0aW9uLmxhYmVsRGF0ZX19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGNtYWNzLWRhdGUtcGlja2VyIGNsYXNzPVwidmFsaWRhdGlvbi1pbnB1dFwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZTFcIlxyXG4gICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25JbnB1dFZhbHVlQ2hhbmdlMSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1kYXRlLXBpY2tlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjI0XCIgKm5nSWY9XCJpbnB1dFR5cGUgPT09IDRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlcGFuZWwtc3ViaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5sYWJlbERhdGV9fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxjbWFjcy1yYW5nZS1waWNrZXIgY2xhc3M9XCJ2YWxpZGF0aW9uLWlucHV0XCIgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlMVwiXHJcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkRhdGVSYW5nZUNoYW5nZWQoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgIDwvY21hY3MtcmFuZ2UtcGlja2VyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIiAqbmdJZj1cImlucHV0VHlwZSA9PT0gNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNtYWNzLWlucHV0IFsobmdNb2RlbCldPVwiZHJvcGRvd25WYWx1ZXNcIiAobmdNb2RlbENoYW5nZSk9XCJvbkRyb3Bkb3duVmFsdWVzQ2hhbmdlZCgkZXZlbnQpXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGQtaW5zdHJ1Y3RcIj57e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5kcm9wZG93bkRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjI0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiUHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25TZXR0aW5nU2F2ZWQoKVwiPnt7bGFiZWxTYXZlfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJhZGRpdGlvbmFsLXBhcmFtZXRlcnNcIiAqbmdJZj1cImlzUmVzdHJpY3RFZGl0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXJyb3ctdXBcIj48L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tbm9kZVwiPlxyXG4gICAgICAgIDxkaXYgbnotcm93IG56VHlwZT1cImZsZXhcIiBuekp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT1cInBhZGRpbmctdG9wOiA1cHg7XCI+e3tpdGVtcy5yZXN0cmljdEVkaXQubGFiZWxSZWFkT25seX19PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxjbWFjcy1zd2l0Y2ggWyhuZ01vZGVsKV09XCJyZWFkT25seVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmVzdHJpY3RlZEVkaXQoJGV2ZW50KVwiPjwvY21hY3Mtc3dpdGNoPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iXX0=