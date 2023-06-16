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
    i0.ɵɵproperty("placeholder", ctx_r23.items.advancedConfiguration.placeholder)("ngModel", ctx_r23.dropdownValues);
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
    i0.ɵɵtemplate(16, CmacsCompactTableColumnMoreComponent_div_2_div_16_Template, 5, 3, "div", 22);
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
            this.dropdownValues = this.dropdownValues.split(';').join(',');
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
            case ColumnMenuType.Attachment: return TemplateType.Attachment;
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
            case TemplateType.Attachment: return ColumnMenuType.Attachment;
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
            case ColumnMenuType.Attachment: return templateType === TemplateType.Attachment;
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
CmacsCompactTableColumnMoreComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableColumnMoreComponent, selectors: [["cmacs-compact-table-column-more"]], inputs: { labelSave: "labelSave", items: "items", field: "field" }, outputs: { onFieldChanged: "onFieldChanged" }, decls: 4, vars: 3, consts: [["id", "compactTableColumnMore"], ["class", "cmacs-compact-table-column-more", 4, "ngIf"], ["class", "additional-parameters", 4, "ngIf"], [1, "cmacs-compact-table-column-more"], [1, "arrow-up"], ["cmacs-menu", "", 1, "cmacs-context-menu-compact-table", 2, "padding-top", "2px", "min-width", "155px"], [4, "ngFor", "ngForOf"], ["cmacs-submenu", "", "cmacsContextMenu", "", 3, "menuWrapperClassName", "menuClassName", 4, "ngIf", "ngIfElse"], ["menuTemplate", ""], ["cmacs-submenu", "", "cmacsContextMenu", "", 3, "menuWrapperClassName", "menuClassName"], ["title", ""], [1, "cmacs-context-menu-compact-table"], ["cmacs-menu-item", "", 3, "selected-item", "click", 4, "ngFor", "ngForOf"], ["cmacs-menu-item", "", 3, "click"], [1, "additional-parameters"], [1, "custom-node"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], [1, "section-content"], [1, "sidepanel-subheader"], [3, "ngModel", "ngModelChange"], [3, "value", "label", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["cmacs-button", "", "type", "primary", "role", "button", "aria-label", "Primary", 3, "click"], [3, "value", "label"], [1, "validation-input", 3, "ngModel", "ngModelChange", "onModelChange"], ["nz-row", "", "nzGutter", "24", 1, "section-content"], ["nz-col", "", "nzSpan", "24", 1, "sidepanel-subheader"], ["nz-col", "", "nzSpan", "12"], [1, "validation-input", 3, "ngModel", "ngModelChange"], ["cmacs-input", "", 3, "placeholder", "ngModel", "ngModelChange"], [1, "dd-instruct"], ["nz-row", "", "nzType", "flex", "nzJustify", "space-between"], [2, "padding-top", "5px"]], template: function CmacsCompactTableColumnMoreComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsYUFBYSxFQUNiLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNaLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FqQyw4QkFFd0M7SUFBdEMscVJBQXFDO0lBQ3JDLDRCQUFNO0lBQ0osb0JBQWdDO0lB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LGNBQWM7UUFDWixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RILENBQUM7O3dIQTlaVSxvQ0FBb0M7eUVBQXBDLG9DQUFvQztRQ3ZCakQsOEJBQWlDO1FBQy9CLHFGQXFDTTtRQUVOLHVGQXlGTTtRQUVOLHFGQVlNO1FBQ1IsaUJBQU07O1FBL0kwQyxlQUFpRDtRQUFqRCwwRUFBaUQ7UUF1QzNELGVBQTZCO1FBQTdCLGtEQUE2QjtRQTJGN0IsZUFBb0I7UUFBcEIseUNBQW9COzt1RkQ1RzdDLG9DQUFvQztjQUxoRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsV0FBVyxFQUFFLGtEQUFrRDtnQkFDL0QsU0FBUyxFQUFFLENBQUMsaURBQWlELENBQUM7YUFDL0Q7c0NBY1UsU0FBUztrQkFBakIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNJLGNBQWM7a0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sdW1uTWVudVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zL2NvbHVtbk1lbnVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zL1RlbXBsYXRlVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgRWRpdENvbHVtbkFjdGlvbiwgRmllbGQsIFNlbGVjdENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7XHJcbiAgYWZ0ZXJEYXRlLFxyXG4gIGJlZm9yZURhdGUsXHJcbiAgZ3JlYXRlclRoYW4sXHJcbiAgaXNFcXVhbFRvRGF0ZSxcclxuICBpc0VxdWFsVG9OdW1iZXIsXHJcbiAgaXNOb3RFcXVhbFRvRGF0ZSxcclxuICBpc05vdEVxdWFsVG9OdW1iZXIsXHJcbiAgbGVzc1RoYW4sXHJcbiAgcmFuZ2VEYXRlLFxyXG4gIHJhbmdlTnVtYmVyXHJcbn0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jdXN0b21WYWxpZGF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbXBhY3RUYWJsZUNvbHVtbk1vcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaXNBZHZhbmNlZENvbmZpZ3VyYXRpb24gPSBmYWxzZTtcclxuICBpc1Jlc3RyaWN0RWRpdCA9IGZhbHNlO1xyXG4gIHNlbGVjdGVkVmFsaWRhdGlvbiA9ICdub25lJztcclxuICBzZWxlY3RlZEZpZWxkVGVtcGxhdGU6IHN0cmluZyA9IFRlbXBsYXRlVHlwZS5TdHJpbmcudG9TdHJpbmcoKTtcclxuICB2YWxpZGF0aW9uUnVsZXM6IHN0cmluZ1tdID0gW107XHJcbiAgaW5wdXRUeXBlID0gMDsgLy8gMSAtPiBudW1iZXIgaW5wdXQsIDIgLT4gbnVtYmVyIHJhbmdlIGlucHV0LCAzLT4gZGF0ZSBpbnB1dCwgNCAtPiByYW5nZSBkYXRlIGlucHV0LCA1IC0+IHRleHQgaW5wdXRcclxuICBpbnB1dFZhbHVlMTogYW55O1xyXG4gIGlucHV0VmFsdWUyOiBhbnk7XHJcbiAgdHlwZXNMaXN0OiBhbnlbXTtcclxuICBkcm9wZG93blZhbHVlcyA9ICcnO1xyXG4gIHJlYWRPbmx5ID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIGxhYmVsU2F2ZSA9ICcnO1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnk7XHJcbiAgQElucHV0KCkgZmllbGQ6IEZpZWxkO1xyXG4gIEBPdXRwdXQoKSBvbkZpZWxkQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RWRpdENvbHVtbkFjdGlvbj4oKTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVhZE9ubHkgPSB0aGlzLmZpZWxkLnJlYWRvbmx5O1xyXG4gICAgdGhpcy50eXBlc0xpc3QgPSB0aGlzLml0ZW1zLmNvbHVtbk9wdGlvbnNbMF0uc3ViTWVudS5maWx0ZXIoaXRlbSA9PiBpdGVtLnZhbHVlICE9PSBDb2x1bW5NZW51VHlwZS5BZHZhbmNlZENvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIC8vIHNldCBpbml0aWFsIHZhbHVlcyBiYXNlZCBvbiB0aGUgZmllbGQgcHJvcGVydGllc1xyXG4gICAgdGhpcy5zZWxlY3RlZEZpZWxkVGVtcGxhdGUgPSB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZT8udG9TdHJpbmcoKTtcclxuICAgIHRoaXMuc2VsZWN0ZWRWYWxpZGF0aW9uID0gdGhpcy5maWVsZC52YWxpZGF0aW9uUnVsZTtcclxuICAgIHRoaXMuaW5pdEFkdmFuY2VkQ29uZmlndXJhdGlvbih0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSk7XHJcbiAgICBpZiAoKHRoaXMuaW5wdXRUeXBlID09PSAxIHx8IHRoaXMuaW5wdXRUeXBlID09PSAzKSAmJlxyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyB3ZSBuZWVkIHRvIHNldCB0aGUgZmlyc3QgdmFsdWVcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlMSA9IHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dFR5cGUgPT09IDIgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlMSA9IHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXTtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlMiA9IHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1sxXTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dFR5cGUgPT09IDQgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlMSA9IHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dFR5cGUgPT09IDUgJiYgdGhpcy5maWVsZC5zZWxlY3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyBpbiB0aGlzIGNhc2Ugd2UgbmVlZCB0byBzZXQgdGhlIHZhbHVlcyBmb3IgdGhlIG9wdGlvbnMgb2YgdGhlIGRyb3Bkb3duXHJcbiAgICAgIGxldCB2YWx1ZXMgPSAnJztcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZmllbGQuc2VsZWN0LnNlbGVjdERhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5maWVsZC5zZWxlY3Quc2VsZWN0RGF0YVtpbmRleF07XHJcbiAgICAgICAgdmFsdWVzICs9IGAke29wdGlvbi52YWx1ZX07YDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRyb3Bkb3duVmFsdWVzID0gdmFsdWVzO1xyXG4gICAgICB0aGlzLmRyb3Bkb3duVmFsdWVzID0gdGhpcy5kcm9wZG93blZhbHVlcy5zcGxpdCgnOycpLmpvaW4oJywnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLm9uU2V0dGluZ1NhdmVkKCk7XHJcbiAgfVxyXG5cclxuICBmaWVsZENoYW5nZWQodmFsdWU6IENvbHVtbk1lbnVUeXBlKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUgPT09IENvbHVtbk1lbnVUeXBlLlJlc3RyaWN0RWRpdCkge1xyXG4gICAgICB0aGlzLmlzUmVzdHJpY3RFZGl0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IENvbHVtbk1lbnVUeXBlLkFkdmFuY2VkQ29uZmlndXJhdGlvbiAmJiB2YWx1ZSAhPT0gQ29sdW1uTWVudVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgIGNvbnN0IG5ld1R5cGUgPSB0aGlzLmdldFRlbXBsYXRlVHlwZSh2YWx1ZSk7XHJcbiAgICAgIGlmIChuZXdUeXBlICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPSBuZXdUeXBlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblJ1bGUgPSAnJztcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzID0gW107XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdG9ycyA9IFtdO1xyXG4gICAgICB0aGlzLm9uRmllbGRDaGFuZ2VkLmVtaXQoeyBmaWVsZDogdGhpcy5maWVsZCwgY29sdW1uTWVudTogTnVtYmVyKHZhbHVlKSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWVsZFRlbXBsYXRlID0gdGhpcy5nZXRDb2x1bW5UeXBlKHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlLnRvU3RyaW5nKCkpPy50b1N0cmluZygpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVmFsaWRhdGlvbiA9IHRoaXMuZmllbGQudmFsaWRhdGlvblJ1bGUgPyB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlIDogJyc7XHJcbiAgICAgIGlmICh2YWx1ZSAhPT0gQ29sdW1uTWVudVR5cGUuQWR2YW5jZWRDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgLy8gaW4gdGhpcyBjYXNlIGEgdHlwZSB3YXMgc2VsZWN0ZWQgc28gd2UgbmVlZCB0byBzZXQgaXQgb24gdGhlIGZpZWxkXHJcbiAgICAgICAgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPSB0aGlzLmdldFRlbXBsYXRlVHlwZSh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBZHZhbmNlZENvbmZpZ3VyYXRpb24odGhpcy5maWVsZC5lZGl0VGVtcGxhdGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaXNBZHZhbmNlZENvbmZpZ3VyYXRpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGVtcGxhdGVUeXBlKHZhbHVlOiBDb2x1bW5NZW51VHlwZSk6IFRlbXBsYXRlVHlwZSB8IG51bGwge1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5Cb29sZWFuOiByZXR1cm4gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuTnVtYmVyOiByZXR1cm4gVGVtcGxhdGVUeXBlLk51bWJlcjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TZWxlY3Q6IHJldHVybiBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TdHJpbmc6IHJldHVybiBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlRpbWU6IHJldHVybiBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5BdHRhY2htZW50OiByZXR1cm4gVGVtcGxhdGVUeXBlLkF0dGFjaG1lbnQ7ICAgICAgXHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q29sdW1uVHlwZSh2YWx1ZTogc3RyaW5nKTogQ29sdW1uTWVudVR5cGUgfCBudWxsIHtcclxuICAgIGNvbnN0IHRlbXBsYXRlVHlwZSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICBzd2l0Y2ggKHRlbXBsYXRlVHlwZSkge1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOiByZXR1cm4gQ29sdW1uTWVudVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuQm9vbGVhbjogcmV0dXJuIENvbHVtbk1lbnVUeXBlLkJvb2xlYW47XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLk51bWJlcjogcmV0dXJuIENvbHVtbk1lbnVUeXBlLk51bWJlcjtcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU2VsZWN0OiByZXR1cm4gQ29sdW1uTWVudVR5cGUuU2VsZWN0O1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOiByZXR1cm4gQ29sdW1uTWVudVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU3RyaW5nOiByZXR1cm4gQ29sdW1uTWVudVR5cGUuU3RyaW5nO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5UaW1lOiByZXR1cm4gQ29sdW1uTWVudVR5cGUuVGltZTtcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuQXR0YWNobWVudDogcmV0dXJuIENvbHVtbk1lbnVUeXBlLkF0dGFjaG1lbnQ7ICBcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkKHZhbHVlOiBDb2x1bW5NZW51VHlwZSwgdGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIC8vIGl0IHdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIHR5cGUgb2YgdGhlIHRlbXBsYXRlIG1hdGNoZXMgdGhlIGNvbHVtbiB0eXBlXHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuRGF0ZTogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuQm9vbGVhbjogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuTnVtYmVyOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlNlbGVjdDogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdDtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TdHJpbmc6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuVGltZTogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlRpbWU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuQXR0YWNobWVudDogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLkF0dGFjaG1lbnQ7XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbHVtblR5cGUgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgY29uc3QgdGVtcGxhdGVUeXBlID0gdGhpcy5nZXRUZW1wbGF0ZVR5cGUoY29sdW1uVHlwZSk7XHJcbiAgICB0aGlzLnNldEFkdmFuY2VkQ29uZmlndXJhdGlvbih0ZW1wbGF0ZVR5cGUpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEFkdmFuY2VkQ29uZmlndXJhdGlvbih0ZW1wbGF0ZVR5cGU6IFRlbXBsYXRlVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZEZpZWxkVGVtcGxhdGUgPSB0aGlzLmdldENvbHVtblR5cGUodGhpcy5maWVsZC5lZGl0VGVtcGxhdGUudG9TdHJpbmcoKSk/LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgc3dpdGNoICh0ZW1wbGF0ZVR5cGUpIHtcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuQm9vbGVhbjpcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuRGF0ZTpcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuTnVtYmVyOlxyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5QaG9uZTpcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU3RyaW5nOlxyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5UaW1lOlxyXG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU2VsZWN0OlxyXG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gNTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuQXR0YWNobWVudDpcclxuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN3aXRjaCAodGhpcy5maWVsZC5lZGl0VGVtcGxhdGUpIHtcclxuICAgICAgY2FzZSAwOiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy5kYXRlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMToge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAyOiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy5udW1iZXI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAzOiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy50ZXh0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNDoge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA1OiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDc6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vblZhbGlkYXRpb25DaGFuZ2UoKTtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRBZHZhbmNlZENvbmZpZ3VyYXRpb24odGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID0gdGVtcGxhdGVUeXBlO1xyXG4gICAgdGhpcy5zZWxlY3RlZEZpZWxkVGVtcGxhdGUgPSB0aGlzLmdldENvbHVtblR5cGUodGhpcy5maWVsZC5lZGl0VGVtcGxhdGUudG9TdHJpbmcoKSk/LnRvU3RyaW5nKCk7XHJcbiAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlID0gdGhpcy5zZWxlY3RlZFZhbGlkYXRpb247XHJcbiAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgPSBbXTtcclxuXHJcbiAgICAvLyBkZXBlbmRpbmcgb24gdGhlIHRlbXBsYXRlIHR5cGUgd2Ugd2lsbCBzZXQgdGhlIHZhbHVlcyBvbiB0aGUgYWR2YW5jZSBjb25maWd1cmF0aW9uIHBvcHVwXHJcbiAgICBzd2l0Y2ggKHRlbXBsYXRlVHlwZSkge1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5Cb29sZWFuOlxyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOlxyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5OdW1iZXI6XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlBob25lOlxyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TdHJpbmc6XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlRpbWU6XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TZWxlY3Q6XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSA1O1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuQXR0YWNobWVudDpcclxuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IDA7XHJcblxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRWYWxpZGF0aW9uUnVsZXModGhpcy5maWVsZC5lZGl0VGVtcGxhdGUpO1xyXG4gICAgdGhpcy5vblZhbGlkYXRpb25DaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIHNldFZhbGlkYXRpb25SdWxlcyh2YWx1ZTogVGVtcGxhdGVUeXBlKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgMDoge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gdGhpcy5pdGVtcy52YWxpZGF0aW9uUnVsZXMuZGF0ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDE6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gdGhpcy5pdGVtcy52YWxpZGF0aW9uUnVsZXMubnVtYmVyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMzoge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gdGhpcy5pdGVtcy52YWxpZGF0aW9uUnVsZXMudGV4dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDQ6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNToge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA3OiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25WYWxpZGF0aW9uQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgc3dpdGNoICh0aGlzLnNlbGVjdGVkVmFsaWRhdGlvbikge1xyXG4gICAgICBjYXNlICdub25lJzoge1xyXG4gICAgICAgIHRoaXMuc2V0RmllbGRWYWxpZGF0b3IoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpcy1ub3QtZW1wdHknOiB7XHJcbiAgICAgICAgdGhpcy5zZXRGaWVsZFZhbGlkYXRvcigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2FmdGVyLWRhdGUnOiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSAzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2JlZm9yZS1kYXRlJzoge1xyXG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gMztcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpcy1lcXVhbC10byc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgPyB0aGlzLmlucHV0VHlwZSA9IDMgOiB0aGlzLmlucHV0VHlwZSA9IDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnaXMtbm90LWVxdWFsLXRvJzoge1xyXG4gICAgICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZSA/IHRoaXMuaW5wdXRUeXBlID0gMyA6IHRoaXMuaW5wdXRUeXBlID0gMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdyYW5nZSc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgPyB0aGlzLmlucHV0VHlwZSA9IDQgOiB0aGlzLmlucHV0VHlwZSA9IDI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnZ3JlYXRlci10aGFuJzoge1xyXG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdsZXNzLXRoYW4nOiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICB0aGlzLnNldEZpZWxkVmFsaWRhdG9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW5wdXRWYWx1ZUNoYW5nZTEodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gZmlyc3QgaW5wdXQgdmFsdWUgd2FzIGNoYW5nZWRcclxuICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0gPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHRoZXJlIGlzIG5vIHZhbHVlcyBzYXZlZCBzbyB3ZSBjcmVhdGVkIGEgbmV3IGFycmF5XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyA9IFt2YWx1ZV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2Ugc2V0IHRoZSB2YWxpZGF0b3Igb24gdGhlIGZpZWxkIGJhc2UgZG9uIHRoZSBzZWxlY3RlZCBydWxlIGFuZCBzZWxlY3RlZCB2YWx1ZVxyXG4gICAgdGhpcy5zZXRGaWVsZFZhbGlkYXRvcigpO1xyXG4gIH1cclxuXHJcbiAgb25Ecm9wZG93blZhbHVlc0NoYW5nZWQodmFsdWVzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoZSB0ZW1wbGF0ZSB0eXBlIGlzIHNlbGVjdCBiZWZvcmUgYWRkaW5nIHRoZSBkcm9wZG93biB2YWx1ZXNcclxuICAgIGlmICh2YWx1ZXMgIT09ICcnICYmIHZhbHVlcyAhPT0gdW5kZWZpbmVkICYmIHZhbHVlcyAhPT0gbnVsbCAmJiB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCkge1xyXG4gICAgICAvLyBwb3NzaWJsZSB2YWx1ZXMgb2YgdGhlIHNlbGVjdCB3aWxsIGJlIGFkZGVkIHVzaW5nIGEgJywnIGFzIHNlcGFyYXRvclxyXG5cclxuICAgICAgY29uc3QgdmFsdWVzQXJyYXkgPSB2YWx1ZXMuc3BsaXQoJywnKTtcclxuICAgICAgY29uc3Qgc2VsZWN0Q29uZmlnOiBTZWxlY3RDb25maWcgPSB7XHJcbiAgICAgICAgbGFiZWw6ICdsYWJlbCcsXHJcbiAgICAgICAgdmFsdWU6ICd2YWx1ZScsXHJcbiAgICAgICAgc2VsZWN0RGF0YTogW11cclxuICAgICAgfTtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlc0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHZhbHVlc0FycmF5W2luZGV4XT8udHJpbSgpO1xyXG4gICAgICAgIGlmIChvcHRpb24gPT09ICcnIHx8IG9wdGlvbiA9PT0gbnVsbCB8fCBvcHRpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY29udGludWU7IC8vIGlnbm9yZSBub3QgdmFsaWQgdmFsdWVzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdENvbmZpZy5zZWxlY3REYXRhLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IG9wdGlvbixcclxuICAgICAgICAgIGxhYmVsOiBvcHRpb25cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5maWVsZC5zZWxlY3QgPSBzZWxlY3RDb25maWc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJlc3RyaWN0ZWRFZGl0KHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmZpZWxkLnJlYWRvbmx5ID0gdmFsdWU7XHJcbiAgICB0aGlzLmZpZWxkLmVkaXRhYmxlID0gIXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb25EYXRlUmFuZ2VDaGFuZ2VkKHZhbHVlOiBEYXRlW10pOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyA9IHZhbHVlO1xyXG4gICAgICAvLyB3ZSBzZXQgdGhlIHZhbGlkYXRvciBvbiB0aGUgZmllbGQgYmFzZSBkb24gdGhlIHNlbGVjdGVkIHJ1bGUgYW5kIHNlbGVjdGVkIHZhbHVlXHJcbiAgICAgIHRoaXMuc2V0RmllbGRWYWxpZGF0b3IoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW5wdXRWYWx1ZUNoYW5nZTIodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gc2Vjb25kIGlucHV0IHZhbHVlIHdhcyBjaGFuZ2VkXHJcbiAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzFdID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIHRoZSBhcnJheSBoYXMgb25lIHZhbHVlIHNvIHdlIGFkZCBpdCBhdCB0aGUgZW5kXHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcy5wdXNoKHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHRoZXJlIGlzIG5vIHZhbHVlcyBzYXZlZCBzbyB3ZSBjcmVhdGVkIGEgbmV3IGFycmF5XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyA9IFtudWxsLCB2YWx1ZV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2Ugc2V0IHRoZSB2YWxpZGF0b3Igb24gdGhlIGZpZWxkIGJhc2UgZG9uIHRoZSBzZWxlY3RlZCBydWxlIGFuZCBzZWxlY3RlZCB2YWx1ZVxyXG4gICAgdGhpcy5zZXRGaWVsZFZhbGlkYXRvcigpO1xyXG4gIH1cclxuXHJcbiAgc2V0RmllbGRWYWxpZGF0b3IoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFZhbGlkYXRpb24gPT09ICcnKSB7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblJ1bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSBzZXQgdGhlIHZhbGlkYXRvciBvbiB0aGUgZmllbGQgYmFzZSBkb24gdGhlIHNlbGVjdGVkIHJ1bGUgYW5kIHNlbGVjdGVkIHZhbHVlXHJcbiAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlID0gdGhpcy5zZWxlY3RlZFZhbGlkYXRpb247XHJcbiAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRWYWxpZGF0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ25vbmUnOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW107IC8vIHRoaXMgd2lsbCBub3QgYXBwbHkgYW55IHJ1bGVcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpcy1ub3QtZW1wdHknOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW1ZhbGlkYXRvcnMucmVxdWlyZWRdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2FmdGVyLWRhdGUnOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW2FmdGVyRGF0ZSh0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdiZWZvcmUtZGF0ZSc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbYmVmb3JlRGF0ZSh0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpcy1lcXVhbC10byc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgP1xyXG4gICAgICAgICAgW2lzRXF1YWxUb0RhdGUodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV0gOlxyXG4gICAgICAgICAgW2lzRXF1YWxUb051bWJlcih0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpcy1ub3QtZXF1YWwtdG8nOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlID9cclxuICAgICAgICAgIFtpc05vdEVxdWFsVG9EYXRlKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldIDpcclxuICAgICAgICAgIFtpc05vdEVxdWFsVG9OdW1iZXIodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAncmFuZ2UnOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlID9cclxuICAgICAgICAgIFtyYW5nZURhdGUodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdLCB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMV0pXSA6XHJcbiAgICAgICAgICBbcmFuZ2VOdW1iZXIodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdLCB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMV0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdncmVhdGVyLXRoYW4nOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW2dyZWF0ZXJUaGFuKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2xlc3MtdGhhbic6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbbGVzc1RoYW4odGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDogdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNldHRpbmdTYXZlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMub25GaWVsZENoYW5nZWQuZW1pdCh7IGZpZWxkOiB0aGlzLmZpZWxkLCBjb2x1bW5NZW51OiB0aGlzLmdldENvbHVtblR5cGUodGhpcy5maWVsZC5lZGl0VGVtcGxhdGUudG9TdHJpbmcoKSkgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGlkPVwiY29tcGFjdFRhYmxlQ29sdW1uTW9yZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlXCIgKm5nSWY9XCIhaXNBZHZhbmNlZENvbmZpZ3VyYXRpb24gJiYgIWlzUmVzdHJpY3RFZGl0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXJyb3ctdXBcIj48L2Rpdj5cclxuICAgIDwhLS0gcmVndWxhciBjb2x1bW4gb3B0aW9ucyAtLT5cclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbWFjcy1tZW51IGNsYXNzPVwiY21hY3MtY29udGV4dC1tZW51LWNvbXBhY3QtdGFibGVcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAycHg7IG1pbi13aWR0aDogMTU1cHhcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zLmNvbHVtbk9wdGlvbnNcIj5cclxuICAgICAgICAgIDxsaSBjbWFjcy1zdWJtZW51IFttZW51V3JhcHBlckNsYXNzTmFtZV09XCInY29tcGFjdC10YWJsZS1tb3JlLXN1Ym1lbnUtdWwtd3JhcHBlcidcIlxyXG4gICAgICAgICAgICBbbWVudUNsYXNzTmFtZV09XCInY29tcGFjdC10YWJsZS1tb3JlLXN1Ym1lbnUtdWwnXCIgY21hY3NDb250ZXh0TWVudVxyXG4gICAgICAgICAgICAqbmdJZj1cIml0ZW0uc3ViTWVudS5sZW5ndGg7IGVsc2UgbWVudVRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHRpdGxlPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwie3tpdGVtLmljb259fVwiPjwvaT5cclxuICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29tcGFjdFRhYmxlQ29sdW1uTW9yZVwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNtYWNzLWNvbnRleHQtbWVudS1jb21wYWN0LXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY21hY3MtbWVudS1pdGVtICpuZ0Zvcj1cImxldCBzdWJtZW51IG9mIGl0ZW0uc3ViTWVudVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZC1pdGVtXT1cImlzU2VsZWN0ZWQoc3VibWVudS52YWx1ZSwgZmllbGQuZWRpdFRlbXBsYXRlKVwiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJmaWVsZENoYW5nZWQoc3VibWVudS52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ7e3N1Ym1lbnUuaWNvbn19XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7c3VibWVudS5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbWVudVRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8bGkgY21hY3MtbWVudS1pdGVtIChjbGljayk9XCJmaWVsZENoYW5nZWQoaXRlbS52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwie3tpdGVtLmljb259fVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImFkZGl0aW9uYWwtcGFyYW1ldGVyc1wiICpuZ0lmPVwiaXNBZHZhbmNlZENvbmZpZ3VyYXRpb25cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhcnJvdy11cFwiPjwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJjdXN0b20tbm9kZVwiPlxyXG4gICAgICAgIDxkaXYgbnotcm93PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlcGFuZWwtc3ViaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5sYWJlbFR5cGV9fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxjbWFjcy1zZWxlY3QgWyhuZ01vZGVsKV09XCJzZWxlY3RlZEZpZWxkVGVtcGxhdGVcIiAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBfaXRlbSBvZiB0eXBlc0xpc3RcIiB2YWx1ZT1cInt7X2l0ZW0udmFsdWV9fVwiIGxhYmVsPVwie3tfaXRlbS5sYWJlbH19XCI+XHJcbiAgICAgICAgICAgICAgICA8L2NtYWNzLW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L2NtYWNzLXNlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjI0XCIgKm5nSWY9XCJ2YWxpZGF0aW9uUnVsZXMubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGVwYW5lbC1zdWJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbXMuYWR2YW5jZWRDb25maWd1cmF0aW9uLmxhYmVsVmFsaWRhdGlvbn19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGNtYWNzLXNlbGVjdCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsaWRhdGlvblwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uVmFsaWRhdGlvbkNoYW5nZSgpXCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBydWxlIG9mIHZhbGlkYXRpb25SdWxlc1wiIHZhbHVlPVwie3tydWxlLnZhbHVlfX1cIiBsYWJlbD1cInt7cnVsZS5sYWJlbH19XCI+XHJcbiAgICAgICAgICAgICAgICA8L2NtYWNzLW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L2NtYWNzLXNlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjI0XCIgKm5nSWY9XCJpbnB1dFR5cGUgPT09IDFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlcGFuZWwtc3ViaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5sYWJlbE51bWJlcn19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGNtYWNzLWlucHV0LW51bWJlciBjbGFzcz1cInZhbGlkYXRpb24taW5wdXRcIiBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWUxXCJcclxuICAgICAgICAgICAgICAgIChvbk1vZGVsQ2hhbmdlKT1cIm9uSW5wdXRWYWx1ZUNoYW5nZTEoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIiAqbmdJZj1cImlucHV0VHlwZSA9PT0gMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCIgbnotcm93IG56R3V0dGVyPVwiMjRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZXBhbmVsLXN1YmhlYWRlclwiIG56LWNvbCBuelNwYW49XCIyNFwiPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtcy5hZHZhbmNlZENvbmZpZ3VyYXRpb24ubGFiZWxOdW1iZXJ9fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3MtaW5wdXQtbnVtYmVyIGNsYXNzPVwidmFsaWRhdGlvbi1pbnB1dFwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZTFcIlxyXG4gICAgICAgICAgICAgICAgICAob25Nb2RlbENoYW5nZSk9XCJvbklucHV0VmFsdWVDaGFuZ2UxKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3MtaW5wdXQtbnVtYmVyIGNsYXNzPVwidmFsaWRhdGlvbi1pbnB1dFwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZTJcIlxyXG4gICAgICAgICAgICAgICAgICAob25Nb2RlbENoYW5nZSk9XCJvbklucHV0VmFsdWVDaGFuZ2UyKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIiAqbmdJZj1cImlucHV0VHlwZSA9PT0gM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGVwYW5lbC1zdWJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbXMuYWR2YW5jZWRDb25maWd1cmF0aW9uLmxhYmVsRGF0ZX19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGNtYWNzLWRhdGUtcGlja2VyIGNsYXNzPVwidmFsaWRhdGlvbi1pbnB1dFwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZTFcIlxyXG4gICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25JbnB1dFZhbHVlQ2hhbmdlMSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1kYXRlLXBpY2tlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjI0XCIgKm5nSWY9XCJpbnB1dFR5cGUgPT09IDRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlcGFuZWwtc3ViaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5sYWJlbERhdGV9fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxjbWFjcy1yYW5nZS1waWNrZXIgY2xhc3M9XCJ2YWxpZGF0aW9uLWlucHV0XCIgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlMVwiXHJcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkRhdGVSYW5nZUNoYW5nZWQoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgIDwvY21hY3MtcmFuZ2UtcGlja2VyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIiAqbmdJZj1cImlucHV0VHlwZSA9PT0gNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNtYWNzLWlucHV0IFtwbGFjZWhvbGRlcl09XCJpdGVtcy5hZHZhbmNlZENvbmZpZ3VyYXRpb24ucGxhY2Vob2xkZXJcIiBbKG5nTW9kZWwpXT1cImRyb3Bkb3duVmFsdWVzXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25Ecm9wZG93blZhbHVlc0NoYW5nZWQoJGV2ZW50KVwiIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRkLWluc3RydWN0XCI+e3tpdGVtcy5hZHZhbmNlZENvbmZpZ3VyYXRpb24uZHJvcGRvd25EZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCIyNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbWFjcy1idXR0b24gdHlwZT1cInByaW1hcnlcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIlByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uU2V0dGluZ1NhdmVkKClcIj57e2xhYmVsU2F2ZX19PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiYWRkaXRpb25hbC1wYXJhbWV0ZXJzXCIgKm5nSWY9XCJpc1Jlc3RyaWN0RWRpdFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFycm93LXVwXCI+PC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLW5vZGVcIj5cclxuICAgICAgICA8ZGl2IG56LXJvdyBuelR5cGU9XCJmbGV4XCIgbnpKdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJwYWRkaW5nLXRvcDogNXB4O1wiPnt7aXRlbXMucmVzdHJpY3RFZGl0LmxhYmVsUmVhZE9ubHl9fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8Y21hY3Mtc3dpdGNoIFsobmdNb2RlbCldPVwicmVhZE9ubHlcIiAobmdNb2RlbENoYW5nZSk9XCJvblJlc3RyaWN0ZWRFZGl0KCRldmVudClcIj48L2NtYWNzLXN3aXRjaD5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+Il19