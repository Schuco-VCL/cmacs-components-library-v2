import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnMenuType } from '../../../core/enums/columnMenuType.enum';
import { TemplateType } from '../../../core/enums/templateType.enum';
import { Validators } from '@angular/forms';
import { afterDate, beforeDate, greaterThan, isEqualToDate, isEqualToNumber, isNotEqualToDate, isNotEqualToNumber, lessThan, rangeDate, rangeNumber } from '../../../core/services/customValidators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/grid";
import * as i3 from "@angular/forms";
import * as i4 from "../../../cmacs-switch/switch.component";
import * as i5 from "../../../cmacs-button/cmacs-button.component";
import * as i6 from "../../../cmacs-select/cmacs-select.component";
import * as i7 from "../../../cmacs-select/cmacs-option.component";
import * as i8 from "../../../cmacs-input/cmacs-input.directive";
import * as i9 from "../../../cmacs-menu/menu.directive";
import * as i10 from "../../../cmacs-menu/submenu.component";
import * as i11 from "../../../cmacs-menu/menu-item.directive";
import * as i12 from "../../../cmacs-date-picker/date-picker.component";
import * as i13 from "../../../cmacs-date-picker/range-picker.component";
import * as i14 from "../../../cmacs-input-number/cmacs-input-number.component";
function CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_li_1_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵlistener("click", function CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_li_1_li_7_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r11); const submenu_r9 = restoredCtx.$implicit; const ctx_r10 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r10.fieldChanged(submenu_r9.value)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
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
    i0.ɵɵelementStart(0, "li", 9)(1, "span", 10);
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 0)(6, "ul", 11);
    i0.ɵɵtemplate(7, CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_li_1_li_7_Template, 5, 6, "li", 12);
    i0.ɵɵelementEnd()()();
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
    i0.ɵɵlistener("click", function CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_ng_template_2_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r15); const item_r4 = i0.ɵɵnextContext().$implicit; const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.fieldChanged(item_r4.value)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
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
    i0.ɵɵelementStart(2, "div")(3, "ul", 5);
    i0.ɵɵtemplate(4, CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_Template, 4, 2, "ng-container", 6);
    i0.ɵɵelementEnd()()();
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
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "cmacs-select", 20);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_11_Template_cmacs_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r27.selectedValidation = $event); })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_11_Template_cmacs_select_ngModelChange_4_listener() { i0.ɵɵrestoreView(_r28); const ctx_r29 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r29.onValidationChange()); });
    i0.ɵɵtemplate(5, CmacsCompactTableColumnMoreComponent_div_2_div_11_cmacs_option_5_Template, 1, 2, "cmacs-option", 21);
    i0.ɵɵelementEnd()()();
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
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "cmacs-input-number", 25);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_12_Template_cmacs_input_number_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r30.inputValue1 = $event); })("onModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_12_Template_cmacs_input_number_onModelChange_4_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r32 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r32.onInputValueChange1($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r19.items.advancedConfiguration.labelNumber, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r19.inputValue1);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 26)(2, "div", 27);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 28)(5, "cmacs-input-number", 25);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r33.inputValue1 = $event); })("onModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_onModelChange_5_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r35 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r35.onInputValueChange1($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 28)(7, "cmacs-input-number", 25);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r36 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r36.inputValue2 = $event); })("onModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_onModelChange_7_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r37 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r37.onInputValueChange2($event)); });
    i0.ɵɵelementEnd()()()();
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
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "cmacs-date-picker", 29);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_14_Template_cmacs_date_picker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r38.inputValue1 = $event); })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_14_Template_cmacs_date_picker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r40 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r40.onInputValueChange1($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r21.items.advancedConfiguration.labelDate, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r21.inputValue1);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "cmacs-range-picker", 29);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_15_Template_cmacs_range_picker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r41.inputValue1 = $event); })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_15_Template_cmacs_range_picker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r43 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r43.onDateRangeChanged($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.items.advancedConfiguration.labelDate, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r22.inputValue1);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "input", 30);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_16_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r44.dropdownValues = $event); })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_16_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r46 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r46.onDropdownValuesChanged($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 31);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
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
    i0.ɵɵelementStart(2, "div")(3, "span", 15)(4, "div", 16)(5, "div", 17)(6, "div", 18)(7, "div", 19);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "cmacs-select", 20);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_Template_cmacs_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r47.selectedFieldTemplate = $event); })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_Template_cmacs_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r49 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r49.onChange($event)); });
    i0.ɵɵtemplate(10, CmacsCompactTableColumnMoreComponent_div_2_cmacs_option_10_Template, 1, 2, "cmacs-option", 21);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(11, CmacsCompactTableColumnMoreComponent_div_2_div_11_Template, 6, 3, "div", 22);
    i0.ɵɵtemplate(12, CmacsCompactTableColumnMoreComponent_div_2_div_12_Template, 5, 2, "div", 22);
    i0.ɵɵtemplate(13, CmacsCompactTableColumnMoreComponent_div_2_div_13_Template, 8, 3, "div", 22);
    i0.ɵɵtemplate(14, CmacsCompactTableColumnMoreComponent_div_2_div_14_Template, 5, 2, "div", 22);
    i0.ɵɵtemplate(15, CmacsCompactTableColumnMoreComponent_div_2_div_15_Template, 5, 2, "div", 22);
    i0.ɵɵtemplate(16, CmacsCompactTableColumnMoreComponent_div_2_div_16_Template, 5, 3, "div", 22);
    i0.ɵɵelementStart(17, "div", 17)(18, "div", 18)(19, "button", 23);
    i0.ɵɵlistener("click", function CmacsCompactTableColumnMoreComponent_div_2_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r48); const ctx_r50 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r50.onSettingSaved()); });
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()()()()()()();
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
    i0.ɵɵelementStart(2, "div")(3, "div", 15)(4, "div", 32)(5, "span", 33);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span")(8, "cmacs-switch", 20);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_3_Template_cmacs_switch_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r51 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r51.readOnly = $event); })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_3_Template_cmacs_switch_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r53 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r53.onRestrictedEdit($event)); });
    i0.ɵɵelementEnd()()()()()();
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
        this.readOnly = this.field.readonly;
        this.typesList = this.items.columnOptions[0].subMenu.filter(item => item.value !== ColumnMenuType.AdvancedConfiguration);
        // set initial values based on the field properties
        this.selectedFieldTemplate = this.field.editTemplate?.toString();
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
            this.selectedFieldTemplate = this.getColumnType(this.field.editTemplate.toString())?.toString();
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
        this.selectedFieldTemplate = this.getColumnType(this.field.editTemplate.toString())?.toString();
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
        this.field.editTemplate = templateType;
        this.selectedFieldTemplate = this.getColumnType(this.field.editTemplate.toString())?.toString();
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
                const option = valuesArray[index]?.trim();
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
    static { this.ɵfac = function CmacsCompactTableColumnMoreComponent_Factory(t) { return new (t || CmacsCompactTableColumnMoreComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsCompactTableColumnMoreComponent, selectors: [["cmacs-compact-table-column-more"]], inputs: { labelSave: "labelSave", items: "items", field: "field" }, outputs: { onFieldChanged: "onFieldChanged" }, decls: 4, vars: 3, consts: [["id", "compactTableColumnMore"], ["class", "cmacs-compact-table-column-more", 4, "ngIf"], ["class", "additional-parameters", 4, "ngIf"], [1, "cmacs-compact-table-column-more"], [1, "arrow-up"], ["cmacs-menu", "", 1, "cmacs-context-menu-compact-table", 2, "padding-top", "2px", "min-width", "155px"], [4, "ngFor", "ngForOf"], ["cmacs-submenu", "", "cmacsContextMenu", "", 3, "menuWrapperClassName", "menuClassName", 4, "ngIf", "ngIfElse"], ["menuTemplate", ""], ["cmacs-submenu", "", "cmacsContextMenu", "", 3, "menuWrapperClassName", "menuClassName"], ["title", ""], [1, "cmacs-context-menu-compact-table"], ["cmacs-menu-item", "", 3, "selected-item", "click", 4, "ngFor", "ngForOf"], ["cmacs-menu-item", "", 3, "click"], [1, "additional-parameters"], [1, "custom-node"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], [1, "section-content"], [1, "sidepanel-subheader"], [3, "ngModel", "ngModelChange"], [3, "value", "label", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["cmacs-button", "", "type", "primary", "role", "button", "aria-label", "Primary", 3, "click"], [3, "value", "label"], [1, "validation-input", 3, "ngModel", "ngModelChange", "onModelChange"], ["nz-row", "", "nzGutter", "24", 1, "section-content"], ["nz-col", "", "nzSpan", "24", 1, "sidepanel-subheader"], ["nz-col", "", "nzSpan", "12"], [1, "validation-input", 3, "ngModel", "ngModelChange"], ["cmacs-input", "", 3, "placeholder", "ngModel", "ngModelChange"], [1, "dd-instruct"], ["nz-row", "", "nzType", "flex", "nzJustify", "space-between"], [2, "padding-top", "5px"]], template: function CmacsCompactTableColumnMoreComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.NzColDirective, i2.NzRowDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.CmacsSwitchComponent, i5.CmacsButtonComponent, i6.CmacsSelectComponent, i7.CmacsOptionComponent, i8.CmacsInputDirective, i9.CmacsMenuDirective, i10.CmacsSubMenuComponent, i11.CmacsMenuItemDirective, i12.CmacsDatePickerComponent, i13.CmacsRangePickerComponent, i14.CmacsInputNumberComponent], styles: [".cmacs-compact-table-column-more[_ngcontent-%COMP%]{background-color:#fff;position:absolute;left:calc(100% - 113.5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11;box-shadow:0 3px 7px #3b3f4633!important;border-radius:3px;border:1px solid #DEE0E5;min-width:190px}.cmacs-compact-table-column-more[_ngcontent-%COMP%]   .arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-19px;margin-left:-8px;border-width:10px;border-style:solid;border-color:transparent transparent #FFFFFF transparent;z-index:1}.additional-parameters[_ngcontent-%COMP%]{padding:12px 20px;width:245px;background-color:#fff;position:absolute;left:calc(100% - 141.5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11;box-shadow:0 3px 7px #3b3f4633!important;border-radius:3px;border:1px solid #DEE0E5}.additional-parameters[_ngcontent-%COMP%]   .arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-31px;margin-left:-8px;border-width:10px;border-style:solid;border-color:transparent transparent #FFFFFF transparent;z-index:1}.custom-node[_ngcontent-%COMP%]{cursor:default;width:100%;line-height:22px;display:inline-block}.custom-node[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-flex}.tooltip-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:12px;height:28px}.selected-item[_ngcontent-%COMP%]{color:#2a7cff}.section-content[_ngcontent-%COMP%]{margin-bottom:20px}.sidepanel-subheader[_ngcontent-%COMP%]{color:#acb3bf}.section-content[_ngcontent-%COMP%]   cmacs-select[_ngcontent-%COMP%]{width:100%}.dd-instruct[_ngcontent-%COMP%]{color:#acb3bf;font-style:italic}.validation-input[_ngcontent-%COMP%]{margin-bottom:0!important;margin-left:0!important}  .menu-item .ant-menu-submenu-arrow{display:none}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCompactTableColumnMoreComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-compact-table-column-more', template: "<div id=\"compactTableColumnMore\">\r\n  <div class=\"cmacs-compact-table-column-more\" *ngIf=\"!isAdvancedConfiguration && !isRestrictEdit\">\r\n    <div class=\"arrow-up\"></div>\r\n    <!-- regular column options -->\r\n    <div>\r\n      <ul cmacs-menu class=\"cmacs-context-menu-compact-table\" style=\"padding-top: 2px; min-width: 155px\">\r\n        <ng-container *ngFor=\"let item of items.columnOptions\">\r\n          <li cmacs-submenu [menuWrapperClassName]=\"'compact-table-more-submenu-ul-wrapper'\"\r\n            [menuClassName]=\"'compact-table-more-submenu-ul'\" cmacsContextMenu\r\n            *ngIf=\"item.subMenu.length; else menuTemplate\">\r\n            <span title>\r\n              <i class=\"{{item.icon}}\"></i>\r\n              <span>{{item.label}}</span>\r\n            </span>\r\n            <div id=\"compactTableColumnMore\">\r\n              <ul class=\"cmacs-context-menu-compact-table\">\r\n                <li cmacs-menu-item *ngFor=\"let submenu of item.subMenu\"\r\n                  [class.selected-item]=\"isSelected(submenu.value, field.editTemplate)\"\r\n                  (click)=\"fieldChanged(submenu.value)\">\r\n                  <span>\r\n                    <i class=\"{{submenu.icon}}\"></i>\r\n                    <span>{{submenu.label}}</span>\r\n                  </span>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <ng-template #menuTemplate>\r\n            <li cmacs-menu-item (click)=\"fieldChanged(item.value)\">\r\n              <span>\r\n                <i class=\"{{item.icon}}\"></i>\r\n                <span>{{item.label}}</span>\r\n              </span>\r\n            </li>\r\n          </ng-template>\r\n        </ng-container>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"additional-parameters\" *ngIf=\"isAdvancedConfiguration\">\r\n    <div class=\"arrow-up\"></div>\r\n    <div>\r\n      <span class=\"custom-node\">\r\n        <div nz-row>\r\n          <div nz-col nzSpan=\"24\">\r\n            <div class=\"section-content\">\r\n              <div class=\"sidepanel-subheader\">\r\n                {{items.advancedConfiguration.labelType}}\r\n              </div>\r\n              <cmacs-select [(ngModel)]=\"selectedFieldTemplate\" (ngModelChange)=\"onChange($event)\">\r\n                <cmacs-option *ngFor=\"let _item of typesList\" value=\"{{_item.value}}\" label=\"{{_item.label}}\">\r\n                </cmacs-option>\r\n              </cmacs-select>\r\n            </div>\r\n          </div>\r\n          <div nz-col nzSpan=\"24\" *ngIf=\"validationRules.length > 0\">\r\n            <div class=\"section-content\">\r\n              <div class=\"sidepanel-subheader\">\r\n                {{items.advancedConfiguration.labelValidation}}\r\n              </div>\r\n              <cmacs-select [(ngModel)]=\"selectedValidation\" (ngModelChange)=\"onValidationChange()\">\r\n                <cmacs-option *ngFor=\"let rule of validationRules\" value=\"{{rule.value}}\" label=\"{{rule.label}}\">\r\n                </cmacs-option>\r\n              </cmacs-select>\r\n            </div>\r\n          </div>\r\n          <div nz-col nzSpan=\"24\" *ngIf=\"inputType === 1\">\r\n            <div class=\"section-content\">\r\n              <div class=\"sidepanel-subheader\">\r\n                {{items.advancedConfiguration.labelNumber}}\r\n              </div>\r\n              <cmacs-input-number class=\"validation-input\" [(ngModel)]=\"inputValue1\"\r\n                (onModelChange)=\"onInputValueChange1($event)\">\r\n              </cmacs-input-number>\r\n            </div>\r\n          </div>\r\n          <div nz-col nzSpan=\"24\" *ngIf=\"inputType === 2\">\r\n            <div class=\"section-content\" nz-row nzGutter=\"24\">\r\n              <div class=\"sidepanel-subheader\" nz-col nzSpan=\"24\">\r\n                {{items.advancedConfiguration.labelNumber}}\r\n              </div>\r\n              <div nz-col nzSpan=\"12\">\r\n                <cmacs-input-number class=\"validation-input\" [(ngModel)]=\"inputValue1\"\r\n                  (onModelChange)=\"onInputValueChange1($event)\">\r\n                </cmacs-input-number>\r\n              </div>\r\n              <div nz-col nzSpan=\"12\">\r\n                <cmacs-input-number class=\"validation-input\" [(ngModel)]=\"inputValue2\"\r\n                  (onModelChange)=\"onInputValueChange2($event)\">\r\n                </cmacs-input-number>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div nz-col nzSpan=\"24\" *ngIf=\"inputType === 3\">\r\n            <div class=\"section-content\">\r\n              <div class=\"sidepanel-subheader\">\r\n                {{items.advancedConfiguration.labelDate}}\r\n              </div>\r\n              <cmacs-date-picker class=\"validation-input\" [(ngModel)]=\"inputValue1\"\r\n                (ngModelChange)=\"onInputValueChange1($event)\">\r\n              </cmacs-date-picker>\r\n            </div>\r\n          </div>\r\n          <div nz-col nzSpan=\"24\" *ngIf=\"inputType === 4\">\r\n            <div class=\"section-content\">\r\n              <div class=\"sidepanel-subheader\">\r\n                {{items.advancedConfiguration.labelDate}}\r\n              </div>\r\n              <cmacs-range-picker class=\"validation-input\" [(ngModel)]=\"inputValue1\"\r\n                (ngModelChange)=\"onDateRangeChanged($event)\">\r\n              </cmacs-range-picker>\r\n            </div>\r\n          </div>\r\n          <div nz-col nzSpan=\"24\" *ngIf=\"inputType === 5\">\r\n            <div class=\"section-content\">\r\n              <input cmacs-input [placeholder]=\"items.advancedConfiguration.placeholder\" [(ngModel)]=\"dropdownValues\" (ngModelChange)=\"onDropdownValuesChanged($event)\" />\r\n              <div class=\"dd-instruct\">{{items.advancedConfiguration.dropdownDescription}}</div>\r\n            </div>\r\n          </div>\r\n          <div nz-col nzSpan=\"24\">\r\n            <div class=\"section-content\">\r\n              <button cmacs-button type=\"primary\" role=\"button\" aria-label=\"Primary\"\r\n                (click)=\"onSettingSaved()\">{{labelSave}}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"additional-parameters\" *ngIf=\"isRestrictEdit\">\r\n    <div class=\"arrow-up\"></div>\r\n    <div>\r\n      <div class=\"custom-node\">\r\n        <div nz-row nzType=\"flex\" nzJustify=\"space-between\">\r\n          <span style=\"padding-top: 5px;\">{{items.restrictEdit.labelReadOnly}}</span>\r\n          <span>\r\n            <cmacs-switch [(ngModel)]=\"readOnly\" (ngModelChange)=\"onRestrictedEdit($event)\"></cmacs-switch>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".cmacs-compact-table-column-more{background-color:#fff;position:absolute;left:calc(100% - 113.5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11;box-shadow:0 3px 7px #3b3f4633!important;border-radius:3px;border:1px solid #DEE0E5;min-width:190px}.cmacs-compact-table-column-more .arrow-up{position:absolute;left:50%;margin-top:-19px;margin-left:-8px;border-width:10px;border-style:solid;border-color:transparent transparent #FFFFFF transparent;z-index:1}.additional-parameters{padding:12px 20px;width:245px;background-color:#fff;position:absolute;left:calc(100% - 141.5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11;box-shadow:0 3px 7px #3b3f4633!important;border-radius:3px;border:1px solid #DEE0E5}.additional-parameters .arrow-up{position:absolute;left:50%;margin-top:-31px;margin-left:-8px;border-width:10px;border-style:solid;border-color:transparent transparent #FFFFFF transparent;z-index:1}.custom-node{cursor:default;width:100%;line-height:22px;display:inline-block}.custom-node>span{display:inline-flex}.tooltip-input input{font-size:12px;height:28px}.selected-item{color:#2a7cff}.section-content{margin-bottom:20px}.sidepanel-subheader{color:#acb3bf}.section-content cmacs-select{width:100%}.dd-instruct{color:#acb3bf;font-style:italic}.validation-input{margin-bottom:0!important;margin-left:0!important}::ng-deep .menu-item .ant-menu-submenu-arrow{display:none}\n"] }]
    }], function () { return []; }, { labelSave: [{
            type: Input
        }], items: [{
            type: Input
        }], field: [{
            type: Input
        }], onFieldChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsYUFBYSxFQUNiLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNaLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FqQyw4QkFFd0M7SUFBdEMsdVFBQVMsZUFBQSxzQ0FBMkIsQ0FBQSxJQUFDO0lBQ3JD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Q0FBQztJQUN0SCxDQUFDO3FHQTlaVSxvQ0FBb0M7b0VBQXBDLG9DQUFvQztZQ3ZCakQsOEJBQWlDO1lBQy9CLHFGQXFDTTtZQUVOLHVGQXlGTTtZQUVOLHFGQVlNO1lBQ1IsaUJBQU07O1lBL0kwQyxlQUFpRDtZQUFqRCwwRUFBaUQ7WUF1QzNELGVBQTZCO1lBQTdCLGtEQUE2QjtZQTJGN0IsZUFBb0I7WUFBcEIseUNBQW9COzs7dUZENUc3QyxvQ0FBb0M7Y0FMaEQsU0FBUzsyQkFDRSxpQ0FBaUM7c0NBaUJsQyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2x1bW5NZW51VHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZW51bXMvY29sdW1uTWVudVR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZW51bXMvdGVtcGxhdGVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBFZGl0Q29sdW1uQWN0aW9uLCBGaWVsZCwgU2VsZWN0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtcclxuICBhZnRlckRhdGUsXHJcbiAgYmVmb3JlRGF0ZSxcclxuICBncmVhdGVyVGhhbixcclxuICBpc0VxdWFsVG9EYXRlLFxyXG4gIGlzRXF1YWxUb051bWJlcixcclxuICBpc05vdEVxdWFsVG9EYXRlLFxyXG4gIGlzTm90RXF1YWxUb051bWJlcixcclxuICBsZXNzVGhhbixcclxuICByYW5nZURhdGUsXHJcbiAgcmFuZ2VOdW1iZXJcclxufSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2N1c3RvbVZhbGlkYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQ29sdW1uTW9yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IGZhbHNlO1xyXG4gIGlzUmVzdHJpY3RFZGl0ID0gZmFsc2U7XHJcbiAgc2VsZWN0ZWRWYWxpZGF0aW9uID0gJ25vbmUnO1xyXG4gIHNlbGVjdGVkRmllbGRUZW1wbGF0ZTogc3RyaW5nID0gVGVtcGxhdGVUeXBlLlN0cmluZy50b1N0cmluZygpO1xyXG4gIHZhbGlkYXRpb25SdWxlczogc3RyaW5nW10gPSBbXTtcclxuICBpbnB1dFR5cGUgPSAwOyAvLyAxIC0+IG51bWJlciBpbnB1dCwgMiAtPiBudW1iZXIgcmFuZ2UgaW5wdXQsIDMtPiBkYXRlIGlucHV0LCA0IC0+IHJhbmdlIGRhdGUgaW5wdXQsIDUgLT4gdGV4dCBpbnB1dFxyXG4gIGlucHV0VmFsdWUxOiBhbnk7XHJcbiAgaW5wdXRWYWx1ZTI6IGFueTtcclxuICB0eXBlc0xpc3Q6IGFueVtdO1xyXG4gIGRyb3Bkb3duVmFsdWVzID0gJyc7XHJcbiAgcmVhZE9ubHkgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgbGFiZWxTYXZlID0gJyc7XHJcbiAgQElucHV0KCkgaXRlbXM6IGFueTtcclxuICBASW5wdXQoKSBmaWVsZDogRmllbGQ7XHJcbiAgQE91dHB1dCgpIG9uRmllbGRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxFZGl0Q29sdW1uQWN0aW9uPigpO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWFkT25seSA9IHRoaXMuZmllbGQucmVhZG9ubHk7XHJcbiAgICB0aGlzLnR5cGVzTGlzdCA9IHRoaXMuaXRlbXMuY29sdW1uT3B0aW9uc1swXS5zdWJNZW51LmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgIT09IENvbHVtbk1lbnVUeXBlLkFkdmFuY2VkQ29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgLy8gc2V0IGluaXRpYWwgdmFsdWVzIGJhc2VkIG9uIHRoZSBmaWVsZCBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLnNlbGVjdGVkRmllbGRUZW1wbGF0ZSA9IHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlPy50b1N0cmluZygpO1xyXG4gICAgdGhpcy5zZWxlY3RlZFZhbGlkYXRpb24gPSB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlO1xyXG4gICAgdGhpcy5pbml0QWR2YW5jZWRDb25maWd1cmF0aW9uKHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlKTtcclxuICAgIGlmICgodGhpcy5pbnB1dFR5cGUgPT09IDEgfHwgdGhpcy5pbnB1dFR5cGUgPT09IDMpICYmXHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIHdlIG5lZWQgdG8gc2V0IHRoZSBmaXJzdCB2YWx1ZVxyXG4gICAgICB0aGlzLmlucHV0VmFsdWUxID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gMiAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUxID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdO1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUyID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzFdO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gNCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUxID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gNSAmJiB0aGlzLmZpZWxkLnNlbGVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIHNldCB0aGUgdmFsdWVzIGZvciB0aGUgb3B0aW9ucyBvZiB0aGUgZHJvcGRvd25cclxuICAgICAgbGV0IHZhbHVlcyA9ICcnO1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5maWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmZpZWxkLnNlbGVjdC5zZWxlY3REYXRhW2luZGV4XTtcclxuICAgICAgICB2YWx1ZXMgKz0gYCR7b3B0aW9uLnZhbHVlfTtgO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZHJvcGRvd25WYWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICAgIHRoaXMuZHJvcGRvd25WYWx1ZXMgPSB0aGlzLmRyb3Bkb3duVmFsdWVzLnNwbGl0KCc7Jykuam9pbignLCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgIHRoaXMub25TZXR0aW5nU2F2ZWQoKTtcclxuICB9XHJcblxyXG4gIGZpZWxkQ2hhbmdlZCh2YWx1ZTogQ29sdW1uTWVudVR5cGUpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gQ29sdW1uTWVudVR5cGUuUmVzdHJpY3RFZGl0KSB7XHJcbiAgICAgIHRoaXMuaXNSZXN0cmljdEVkaXQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gQ29sdW1uTWVudVR5cGUuQWR2YW5jZWRDb25maWd1cmF0aW9uICYmIHZhbHVlICE9PSBDb2x1bW5NZW51VHlwZS5TZWxlY3QpIHtcclxuICAgICAgY29uc3QgbmV3VHlwZSA9IHRoaXMuZ2V0VGVtcGxhdGVUeXBlKHZhbHVlKTtcclxuICAgICAgaWYgKG5ld1R5cGUgIT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9IG5ld1R5cGU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uUnVsZSA9ICcnO1xyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgPSBbXTtcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW107XHJcbiAgICAgIHRoaXMub25GaWVsZENoYW5nZWQuZW1pdCh7IGZpZWxkOiB0aGlzLmZpZWxkLCBjb2x1bW5NZW51OiBOdW1iZXIodmFsdWUpIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEZpZWxkVGVtcGxhdGUgPSB0aGlzLmdldENvbHVtblR5cGUodGhpcy5maWVsZC5lZGl0VGVtcGxhdGUudG9TdHJpbmcoKSk/LnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWxpZGF0aW9uID0gdGhpcy5maWVsZC52YWxpZGF0aW9uUnVsZSA/IHRoaXMuZmllbGQudmFsaWRhdGlvblJ1bGUgOiAnJztcclxuICAgICAgaWYgKHZhbHVlICE9PSBDb2x1bW5NZW51VHlwZS5BZHZhbmNlZENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICAvLyBpbiB0aGlzIGNhc2UgYSB0eXBlIHdhcyBzZWxlY3RlZCBzbyB3ZSBuZWVkIHRvIHNldCBpdCBvbiB0aGUgZmllbGRcclxuICAgICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9IHRoaXMuZ2V0VGVtcGxhdGVUeXBlKHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5maWVsZC5lZGl0VGVtcGxhdGUpIHtcclxuICAgICAgICB0aGlzLnNldEFkdmFuY2VkQ29uZmlndXJhdGlvbih0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUZW1wbGF0ZVR5cGUodmFsdWU6IENvbHVtbk1lbnVUeXBlKTogVGVtcGxhdGVUeXBlIHwgbnVsbCB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuRGF0ZTogcmV0dXJuIFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkJvb2xlYW46IHJldHVybiBUZW1wbGF0ZVR5cGUuQm9vbGVhbjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5OdW1iZXI6IHJldHVybiBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlNlbGVjdDogcmV0dXJuIFRlbXBsYXRlVHlwZS5TZWxlY3Q7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuRGF0ZTogcmV0dXJuIFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlN0cmluZzogcmV0dXJuIFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuVGltZTogcmV0dXJuIFRlbXBsYXRlVHlwZS5UaW1lO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkF0dGFjaG1lbnQ6IHJldHVybiBUZW1wbGF0ZVR5cGUuQXR0YWNobWVudDsgICAgICBcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDb2x1bW5UeXBlKHZhbHVlOiBzdHJpbmcpOiBDb2x1bW5NZW51VHlwZSB8IG51bGwge1xyXG4gICAgY29uc3QgdGVtcGxhdGVUeXBlID0gTnVtYmVyKHZhbHVlKTtcclxuICAgIHN3aXRjaCAodGVtcGxhdGVUeXBlKSB7XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLkRhdGU6IHJldHVybiBDb2x1bW5NZW51VHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5Cb29sZWFuOiByZXR1cm4gQ29sdW1uTWVudVR5cGUuQm9vbGVhbjtcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuTnVtYmVyOiByZXR1cm4gQ29sdW1uTWVudVR5cGUuTnVtYmVyO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TZWxlY3Q6IHJldHVybiBDb2x1bW5NZW51VHlwZS5TZWxlY3Q7XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLkRhdGU6IHJldHVybiBDb2x1bW5NZW51VHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TdHJpbmc6IHJldHVybiBDb2x1bW5NZW51VHlwZS5TdHJpbmc7XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlRpbWU6IHJldHVybiBDb2x1bW5NZW51VHlwZS5UaW1lO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5BdHRhY2htZW50OiByZXR1cm4gQ29sdW1uTWVudVR5cGUuQXR0YWNobWVudDsgIFxyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQodmFsdWU6IENvbHVtbk1lbnVUeXBlLCB0ZW1wbGF0ZVR5cGU6IFRlbXBsYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgLy8gaXQgd2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgdHlwZSBvZiB0aGUgdGVtcGxhdGUgbWF0Y2hlcyB0aGUgY29sdW1uIHR5cGVcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5Cb29sZWFuOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuQm9vbGVhbjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5OdW1iZXI6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5OdW1iZXI7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU2VsZWN0OiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlN0cmluZzogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlN0cmluZztcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5UaW1lOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5BdHRhY2htZW50OiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuQXR0YWNobWVudDtcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgY29sdW1uVHlwZSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZVR5cGUgPSB0aGlzLmdldFRlbXBsYXRlVHlwZShjb2x1bW5UeXBlKTtcclxuICAgIHRoaXMuc2V0QWR2YW5jZWRDb25maWd1cmF0aW9uKHRlbXBsYXRlVHlwZSk7XHJcbiAgfVxyXG5cclxuICBpbml0QWR2YW5jZWRDb25maWd1cmF0aW9uKHRlbXBsYXRlVHlwZTogVGVtcGxhdGVUeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkRmllbGRUZW1wbGF0ZSA9IHRoaXMuZ2V0Q29sdW1uVHlwZSh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZS50b1N0cmluZygpKT8udG9TdHJpbmcoKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRlbXBsYXRlVHlwZSkge1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5Cb29sZWFuOlxyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOlxyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5OdW1iZXI6XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlBob25lOlxyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TdHJpbmc6XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlRpbWU6XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TZWxlY3Q6XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSA1O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5BdHRhY2htZW50OlxyXG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3dpdGNoICh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSkge1xyXG4gICAgICBjYXNlIDA6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IHRoaXMuaXRlbXMudmFsaWRhdGlvblJ1bGVzLmRhdGU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDI6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IHRoaXMuaXRlbXMudmFsaWRhdGlvblJ1bGVzLm51bWJlcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDM6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IHRoaXMuaXRlbXMudmFsaWRhdGlvblJ1bGVzLnRleHQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA0OiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDU6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNzoge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uVmFsaWRhdGlvbkNoYW5nZSgpO1xyXG5cclxuICB9XHJcblxyXG4gIHNldEFkdmFuY2VkQ29uZmlndXJhdGlvbih0ZW1wbGF0ZVR5cGU6IFRlbXBsYXRlVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPSB0ZW1wbGF0ZVR5cGU7XHJcbiAgICB0aGlzLnNlbGVjdGVkRmllbGRUZW1wbGF0ZSA9IHRoaXMuZ2V0Q29sdW1uVHlwZSh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZS50b1N0cmluZygpKT8udG9TdHJpbmcoKTtcclxuICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblJ1bGUgPSB0aGlzLnNlbGVjdGVkVmFsaWRhdGlvbjtcclxuICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyA9IFtdO1xyXG5cclxuICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgdGVtcGxhdGUgdHlwZSB3ZSB3aWxsIHNldCB0aGUgdmFsdWVzIG9uIHRoZSBhZHZhbmNlIGNvbmZpZ3VyYXRpb24gcG9wdXBcclxuICAgIHN3aXRjaCAodGVtcGxhdGVUeXBlKSB7XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLkJvb2xlYW46XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLkRhdGU6XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLk51bWJlcjpcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuUGhvbmU6XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlN0cmluZzpcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuVGltZTpcclxuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlNlbGVjdDpcclxuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IDU7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5BdHRhY2htZW50OlxyXG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gMDtcclxuXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFZhbGlkYXRpb25SdWxlcyh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSk7XHJcbiAgICB0aGlzLm9uVmFsaWRhdGlvbkNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsaWRhdGlvblJ1bGVzKHZhbHVlOiBUZW1wbGF0ZVR5cGUpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSAwOiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy5kYXRlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMToge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAyOiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy5udW1iZXI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAzOiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy50ZXh0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNDoge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA1OiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDc6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblZhbGlkYXRpb25DaGFuZ2UoKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRWYWxpZGF0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ25vbmUnOiB7XHJcbiAgICAgICAgdGhpcy5zZXRGaWVsZFZhbGlkYXRvcigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2lzLW5vdC1lbXB0eSc6IHtcclxuICAgICAgICB0aGlzLnNldEZpZWxkVmFsaWRhdG9yKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnYWZ0ZXItZGF0ZSc6IHtcclxuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IDM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnYmVmb3JlLWRhdGUnOiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSAzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2lzLWVxdWFsLXRvJzoge1xyXG4gICAgICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZSA/IHRoaXMuaW5wdXRUeXBlID0gMyA6IHRoaXMuaW5wdXRUeXBlID0gMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpcy1ub3QtZXF1YWwtdG8nOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlID8gdGhpcy5pbnB1dFR5cGUgPSAzIDogdGhpcy5pbnB1dFR5cGUgPSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ3JhbmdlJzoge1xyXG4gICAgICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZSA/IHRoaXMuaW5wdXRUeXBlID0gNCA6IHRoaXMuaW5wdXRUeXBlID0gMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdncmVhdGVyLXRoYW4nOiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2xlc3MtdGhhbic6IHtcclxuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHRoaXMuc2V0RmllbGRWYWxpZGF0b3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JbnB1dFZhbHVlQ2hhbmdlMSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAvLyBmaXJzdCBpbnB1dCB2YWx1ZSB3YXMgY2hhbmdlZFxyXG4gICAgaWYgKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdGhlcmUgaXMgbm8gdmFsdWVzIHNhdmVkIHNvIHdlIGNyZWF0ZWQgYSBuZXcgYXJyYXlcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzID0gW3ZhbHVlXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSBzZXQgdGhlIHZhbGlkYXRvciBvbiB0aGUgZmllbGQgYmFzZSBkb24gdGhlIHNlbGVjdGVkIHJ1bGUgYW5kIHNlbGVjdGVkIHZhbHVlXHJcbiAgICB0aGlzLnNldEZpZWxkVmFsaWRhdG9yKCk7XHJcbiAgfVxyXG5cclxuICBvbkRyb3Bkb3duVmFsdWVzQ2hhbmdlZCh2YWx1ZXM6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgLy8gd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhlIHRlbXBsYXRlIHR5cGUgaXMgc2VsZWN0IGJlZm9yZSBhZGRpbmcgdGhlIGRyb3Bkb3duIHZhbHVlc1xyXG4gICAgaWYgKHZhbHVlcyAhPT0gJycgJiYgdmFsdWVzICE9PSB1bmRlZmluZWQgJiYgdmFsdWVzICE9PSBudWxsICYmIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgIC8vIHBvc3NpYmxlIHZhbHVlcyBvZiB0aGUgc2VsZWN0IHdpbGwgYmUgYWRkZWQgdXNpbmcgYSAnLCcgYXMgc2VwYXJhdG9yXHJcblxyXG4gICAgICBjb25zdCB2YWx1ZXNBcnJheSA9IHZhbHVlcy5zcGxpdCgnLCcpO1xyXG4gICAgICBjb25zdCBzZWxlY3RDb25maWc6IFNlbGVjdENvbmZpZyA9IHtcclxuICAgICAgICBsYWJlbDogJ2xhYmVsJyxcclxuICAgICAgICB2YWx1ZTogJ3ZhbHVlJyxcclxuICAgICAgICBzZWxlY3REYXRhOiBbXVxyXG4gICAgICB9O1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsdWVzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdmFsdWVzQXJyYXlbaW5kZXhdPy50cmltKCk7XHJcbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gJycgfHwgb3B0aW9uID09PSBudWxsIHx8IG9wdGlvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBjb250aW51ZTsgLy8gaWdub3JlIG5vdCB2YWxpZCB2YWx1ZXNcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0Q29uZmlnLnNlbGVjdERhdGEucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxyXG4gICAgICAgICAgbGFiZWw6IG9wdGlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmZpZWxkLnNlbGVjdCA9IHNlbGVjdENvbmZpZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUmVzdHJpY3RlZEVkaXQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZmllbGQucmVhZG9ubHkgPSB2YWx1ZTtcclxuICAgIHRoaXMuZmllbGQuZWRpdGFibGUgPSAhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBvbkRhdGVSYW5nZUNoYW5nZWQodmFsdWU6IERhdGVbXSk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzID0gdmFsdWU7XHJcbiAgICAgIC8vIHdlIHNldCB0aGUgdmFsaWRhdG9yIG9uIHRoZSBmaWVsZCBiYXNlIGRvbiB0aGUgc2VsZWN0ZWQgcnVsZSBhbmQgc2VsZWN0ZWQgdmFsdWVcclxuICAgICAgdGhpcy5zZXRGaWVsZFZhbGlkYXRvcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JbnB1dFZhbHVlQ2hhbmdlMih2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAvLyBzZWNvbmQgaW5wdXQgdmFsdWUgd2FzIGNoYW5nZWRcclxuICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMV0gPSB2YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gdGhlIGFycmF5IGhhcyBvbmUgdmFsdWUgc28gd2UgYWRkIGl0IGF0IHRoZSBlbmRcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzLnB1c2godmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdGhlcmUgaXMgbm8gdmFsdWVzIHNhdmVkIHNvIHdlIGNyZWF0ZWQgYSBuZXcgYXJyYXlcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzID0gW251bGwsIHZhbHVlXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSBzZXQgdGhlIHZhbGlkYXRvciBvbiB0aGUgZmllbGQgYmFzZSBkb24gdGhlIHNlbGVjdGVkIHJ1bGUgYW5kIHNlbGVjdGVkIHZhbHVlXHJcbiAgICB0aGlzLnNldEZpZWxkVmFsaWRhdG9yKCk7XHJcbiAgfVxyXG5cclxuICBzZXRGaWVsZFZhbGlkYXRvcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkVmFsaWRhdGlvbiA9PT0gJycpIHtcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uUnVsZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdG9ycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdlIHNldCB0aGUgdmFsaWRhdG9yIG9uIHRoZSBmaWVsZCBiYXNlIGRvbiB0aGUgc2VsZWN0ZWQgcnVsZSBhbmQgc2VsZWN0ZWQgdmFsdWVcclxuICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblJ1bGUgPSB0aGlzLnNlbGVjdGVkVmFsaWRhdGlvbjtcclxuICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZFZhbGlkYXRpb24pIHtcclxuICAgICAgY2FzZSAnbm9uZSc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbXTsgLy8gdGhpcyB3aWxsIG5vdCBhcHBseSBhbnkgcnVsZVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2lzLW5vdC1lbXB0eSc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbVmFsaWRhdG9ycy5yZXF1aXJlZF07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnYWZ0ZXItZGF0ZSc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbYWZ0ZXJEYXRlKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2JlZm9yZS1kYXRlJzoge1xyXG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdG9ycyA9IFtiZWZvcmVEYXRlKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2lzLWVxdWFsLXRvJzoge1xyXG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdG9ycyA9IHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZSA/XHJcbiAgICAgICAgICBbaXNFcXVhbFRvRGF0ZSh0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXSA6XHJcbiAgICAgICAgICBbaXNFcXVhbFRvTnVtYmVyKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2lzLW5vdC1lcXVhbC10byc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgP1xyXG4gICAgICAgICAgW2lzTm90RXF1YWxUb0RhdGUodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV0gOlxyXG4gICAgICAgICAgW2lzTm90RXF1YWxUb051bWJlcih0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdyYW5nZSc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgP1xyXG4gICAgICAgICAgW3JhbmdlRGF0ZSh0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0sIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1sxXSldIDpcclxuICAgICAgICAgIFtyYW5nZU51bWJlcih0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0sIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1sxXSldO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2dyZWF0ZXItdGhhbic6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbZ3JlYXRlclRoYW4odGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnbGVzcy10aGFuJzoge1xyXG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdG9ycyA9IFtsZXNzVGhhbih0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2V0dGluZ1NhdmVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkZpZWxkQ2hhbmdlZC5lbWl0KHsgZmllbGQ6IHRoaXMuZmllbGQsIGNvbHVtbk1lbnU6IHRoaXMuZ2V0Q29sdW1uVHlwZSh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZS50b1N0cmluZygpKSB9KTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgaWQ9XCJjb21wYWN0VGFibGVDb2x1bW5Nb3JlXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmVcIiAqbmdJZj1cIiFpc0FkdmFuY2VkQ29uZmlndXJhdGlvbiAmJiAhaXNSZXN0cmljdEVkaXRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhcnJvdy11cFwiPjwvZGl2PlxyXG4gICAgPCEtLSByZWd1bGFyIGNvbHVtbiBvcHRpb25zIC0tPlxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNtYWNzLW1lbnUgY2xhc3M9XCJjbWFjcy1jb250ZXh0LW1lbnUtY29tcGFjdC10YWJsZVwiIHN0eWxlPVwicGFkZGluZy10b3A6IDJweDsgbWluLXdpZHRoOiAxNTVweFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXMuY29sdW1uT3B0aW9uc1wiPlxyXG4gICAgICAgICAgPGxpIGNtYWNzLXN1Ym1lbnUgW21lbnVXcmFwcGVyQ2xhc3NOYW1lXT1cIidjb21wYWN0LXRhYmxlLW1vcmUtc3VibWVudS11bC13cmFwcGVyJ1wiXHJcbiAgICAgICAgICAgIFttZW51Q2xhc3NOYW1lXT1cIidjb21wYWN0LXRhYmxlLW1vcmUtc3VibWVudS11bCdcIiBjbWFjc0NvbnRleHRNZW51XHJcbiAgICAgICAgICAgICpuZ0lmPVwiaXRlbS5zdWJNZW51Lmxlbmd0aDsgZWxzZSBtZW51VGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gdGl0bGU+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ7e2l0ZW0uaWNvbn19XCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb21wYWN0VGFibGVDb2x1bW5Nb3JlXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY21hY3MtY29udGV4dC1tZW51LWNvbXBhY3QtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbWFjcy1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IHN1Ym1lbnUgb2YgaXRlbS5zdWJNZW51XCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkLWl0ZW1dPVwiaXNTZWxlY3RlZChzdWJtZW51LnZhbHVlLCBmaWVsZC5lZGl0VGVtcGxhdGUpXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImZpZWxkQ2hhbmdlZChzdWJtZW51LnZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInt7c3VibWVudS5pY29ufX1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tzdWJtZW51LmxhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNtZW51VGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxsaSBjbWFjcy1tZW51LWl0ZW0gKGNsaWNrKT1cImZpZWxkQ2hhbmdlZChpdGVtLnZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ7e2l0ZW0uaWNvbn19XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3tpdGVtLmxhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiYWRkaXRpb25hbC1wYXJhbWV0ZXJzXCIgKm5nSWY9XCJpc0FkdmFuY2VkQ29uZmlndXJhdGlvblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFycm93LXVwXCI+PC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImN1c3RvbS1ub2RlXCI+XHJcbiAgICAgICAgPGRpdiBuei1yb3c+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCIyNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGVwYW5lbC1zdWJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbXMuYWR2YW5jZWRDb25maWd1cmF0aW9uLmxhYmVsVHlwZX19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGNtYWNzLXNlbGVjdCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkRmllbGRUZW1wbGF0ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy1vcHRpb24gKm5nRm9yPVwibGV0IF9pdGVtIG9mIHR5cGVzTGlzdFwiIHZhbHVlPVwie3tfaXRlbS52YWx1ZX19XCIgbGFiZWw9XCJ7e19pdGVtLmxhYmVsfX1cIj5cclxuICAgICAgICAgICAgICAgIDwvY21hY3Mtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvY21hY3Mtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIiAqbmdJZj1cInZhbGlkYXRpb25SdWxlcy5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZXBhbmVsLXN1YmhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtcy5hZHZhbmNlZENvbmZpZ3VyYXRpb24ubGFiZWxWYWxpZGF0aW9ufX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Y21hY3Mtc2VsZWN0IFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWxpZGF0aW9uXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25WYWxpZGF0aW9uQ2hhbmdlKClcIj5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy1vcHRpb24gKm5nRm9yPVwibGV0IHJ1bGUgb2YgdmFsaWRhdGlvblJ1bGVzXCIgdmFsdWU9XCJ7e3J1bGUudmFsdWV9fVwiIGxhYmVsPVwie3tydWxlLmxhYmVsfX1cIj5cclxuICAgICAgICAgICAgICAgIDwvY21hY3Mtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvY21hY3Mtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIiAqbmdJZj1cImlucHV0VHlwZSA9PT0gMVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGVwYW5lbC1zdWJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbXMuYWR2YW5jZWRDb25maWd1cmF0aW9uLmxhYmVsTnVtYmVyfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Y21hY3MtaW5wdXQtbnVtYmVyIGNsYXNzPVwidmFsaWRhdGlvbi1pbnB1dFwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZTFcIlxyXG4gICAgICAgICAgICAgICAgKG9uTW9kZWxDaGFuZ2UpPVwib25JbnB1dFZhbHVlQ2hhbmdlMSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1pbnB1dC1udW1iZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCIyNFwiICpuZ0lmPVwiaW5wdXRUeXBlID09PSAyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnRcIiBuei1yb3cgbnpHdXR0ZXI9XCIyNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlcGFuZWwtc3ViaGVhZGVyXCIgbnotY29sIG56U3Bhbj1cIjI0XCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5sYWJlbE51bWJlcn19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy1pbnB1dC1udW1iZXIgY2xhc3M9XCJ2YWxpZGF0aW9uLWlucHV0XCIgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlMVwiXHJcbiAgICAgICAgICAgICAgICAgIChvbk1vZGVsQ2hhbmdlKT1cIm9uSW5wdXRWYWx1ZUNoYW5nZTEoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPC9jbWFjcy1pbnB1dC1udW1iZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy1pbnB1dC1udW1iZXIgY2xhc3M9XCJ2YWxpZGF0aW9uLWlucHV0XCIgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlMlwiXHJcbiAgICAgICAgICAgICAgICAgIChvbk1vZGVsQ2hhbmdlKT1cIm9uSW5wdXRWYWx1ZUNoYW5nZTIoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPC9jbWFjcy1pbnB1dC1udW1iZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCIyNFwiICpuZ0lmPVwiaW5wdXRUeXBlID09PSAzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZXBhbmVsLXN1YmhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtcy5hZHZhbmNlZENvbmZpZ3VyYXRpb24ubGFiZWxEYXRlfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Y21hY3MtZGF0ZS1waWNrZXIgY2xhc3M9XCJ2YWxpZGF0aW9uLWlucHV0XCIgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlMVwiXHJcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0VmFsdWVDaGFuZ2UxKCRldmVudClcIj5cclxuICAgICAgICAgICAgICA8L2NtYWNzLWRhdGUtcGlja2VyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIiAqbmdJZj1cImlucHV0VHlwZSA9PT0gNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGVwYW5lbC1zdWJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbXMuYWR2YW5jZWRDb25maWd1cmF0aW9uLmxhYmVsRGF0ZX19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGNtYWNzLXJhbmdlLXBpY2tlciBjbGFzcz1cInZhbGlkYXRpb24taW5wdXRcIiBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWUxXCJcclxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uRGF0ZVJhbmdlQ2hhbmdlZCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1yYW5nZS1waWNrZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCIyNFwiICpuZ0lmPVwiaW5wdXRUeXBlID09PSA1XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY21hY3MtaW5wdXQgW3BsYWNlaG9sZGVyXT1cIml0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5wbGFjZWhvbGRlclwiIFsobmdNb2RlbCldPVwiZHJvcGRvd25WYWx1ZXNcIiAobmdNb2RlbENoYW5nZSk9XCJvbkRyb3Bkb3duVmFsdWVzQ2hhbmdlZCgkZXZlbnQpXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGQtaW5zdHJ1Y3RcIj57e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5kcm9wZG93bkRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjI0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiUHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25TZXR0aW5nU2F2ZWQoKVwiPnt7bGFiZWxTYXZlfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJhZGRpdGlvbmFsLXBhcmFtZXRlcnNcIiAqbmdJZj1cImlzUmVzdHJpY3RFZGl0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXJyb3ctdXBcIj48L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tbm9kZVwiPlxyXG4gICAgICAgIDxkaXYgbnotcm93IG56VHlwZT1cImZsZXhcIiBuekp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT1cInBhZGRpbmctdG9wOiA1cHg7XCI+e3tpdGVtcy5yZXN0cmljdEVkaXQubGFiZWxSZWFkT25seX19PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxjbWFjcy1zd2l0Y2ggWyhuZ01vZGVsKV09XCJyZWFkT25seVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmVzdHJpY3RlZEVkaXQoJGV2ZW50KVwiPjwvY21hY3Mtc3dpdGNoPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iXX0=