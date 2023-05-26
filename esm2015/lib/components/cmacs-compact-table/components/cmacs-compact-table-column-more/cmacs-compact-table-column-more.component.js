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
function CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_li_1_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵlistener("click", function CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_li_1_li_7_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r10); const submenu_r8 = ctx.$implicit; const ctx_r9 = i0.ɵɵnextContext(4); return ctx_r9.fieldChanged(submenu_r8.value); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const submenu_r8 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("selected-item", ctx_r7.isSelected(submenu_r8.value, ctx_r7.field.editTemplate));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(submenu_r8.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(submenu_r8.label);
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
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("menuWrapperClassName", "compact-table-more-submenu-ul-wrapper")("menuClassName", "compact-table-more-submenu-ul");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(item_r3.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.label);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", item_r3.subMenu);
} }
function CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵlistener("click", function CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_ng_template_2_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r14); const item_r3 = i0.ɵɵnextContext().$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.fieldChanged(item_r3.value); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(item_r3.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_li_1_Template, 8, 7, "li", 7);
    i0.ɵɵtemplate(2, CmacsCompactTableColumnMoreComponent_div_1_ng_container_4_ng_template_2_Template, 5, 4, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const _r5 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r3.subMenu.length)("ngIfElse", _r5);
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
    const _item_r23 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", _item_r23.value);
    i0.ɵɵpropertyInterpolate("label", _item_r23.label);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_11_cmacs_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 24);
} if (rf & 2) {
    const rule_r25 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", rule_r25.value);
    i0.ɵɵpropertyInterpolate("label", rule_r25.label);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "div", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "cmacs-select", 20);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_11_Template_cmacs_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.selectedValidation = $event; })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_11_Template_cmacs_select_ngModelChange_4_listener() { i0.ɵɵrestoreView(_r27); const ctx_r28 = i0.ɵɵnextContext(2); return ctx_r28.onValidationChange(); });
    i0.ɵɵtemplate(5, CmacsCompactTableColumnMoreComponent_div_2_div_11_cmacs_option_5_Template, 1, 2, "cmacs-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r17.items.advancedConfiguration.labelValidation, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r17.selectedValidation);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r17.validationRules);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "div", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "cmacs-input-number", 25);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_12_Template_cmacs_input_number_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.inputValue1 = $event; })("onModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_12_Template_cmacs_input_number_onModelChange_4_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.onInputValueChange1($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r18.items.advancedConfiguration.labelNumber, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r18.inputValue1);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵelementStart(2, "div", 27);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 28);
    i0.ɵɵelementStart(5, "cmacs-input-number", 25);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.inputValue1 = $event; })("onModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_onModelChange_5_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.onInputValueChange1($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 28);
    i0.ɵɵelementStart(7, "cmacs-input-number", 25);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.inputValue2 = $event; })("onModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_onModelChange_7_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.onInputValueChange2($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r19.items.advancedConfiguration.labelNumber, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r19.inputValue1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r19.inputValue2);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "div", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "cmacs-date-picker", 29);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_14_Template_cmacs_date_picker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.inputValue1 = $event; })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_14_Template_cmacs_date_picker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.onInputValueChange1($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.items.advancedConfiguration.labelDate, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r20.inputValue1);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "div", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "cmacs-range-picker", 29);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_15_Template_cmacs_range_picker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.inputValue1 = $event; })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_15_Template_cmacs_range_picker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r42 = i0.ɵɵnextContext(2); return ctx_r42.onDateRangeChanged($event); });
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
function CmacsCompactTableColumnMoreComponent_div_2_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "input", 30);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_16_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.dropdownValues = $event; })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_16_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r45 = i0.ɵɵnextContext(2); return ctx_r45.onDropdownValuesChanged($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 31);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r22.dropdownValues);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r22.items.advancedConfiguration.dropdownDescription);
} }
function CmacsCompactTableColumnMoreComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_Template_cmacs_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r47); const ctx_r46 = i0.ɵɵnextContext(); return ctx_r46.selectedFieldTemplate = $event; })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_Template_cmacs_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r47); const ctx_r48 = i0.ɵɵnextContext(); return ctx_r48.onChange($event); });
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
    i0.ɵɵlistener("click", function CmacsCompactTableColumnMoreComponent_div_2_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r47); const ctx_r49 = i0.ɵɵnextContext(); return ctx_r49.onSettingSaved(); });
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
export class CmacsCompactTableColumnMoreComponent {
    constructor() {
        this.isAdvancedConfiguration = false;
        this.selectedValidation = 'none';
        this.selectedFieldTemplate = TemplateType.String.toString();
        this.validationRules = [];
        this.inputType = 0; // 1 -> number input, 2 -> number range input, 3-> date input, 4 -> range date input, 5 -> text input
        this.dropdownValues = '';
        this.labelSave = '';
        this.onFieldChanged = new EventEmitter();
    }
    ngOnInit() {
        var _a;
        this.typesList = this.items.columnOptions[0].subMenu.filter(item => item.value !== ColumnMenuType.AdvancedConfiguration);
        // set initial values based on the field properties
        this.selectedFieldTemplate = (_a = this.field.editTemplate) === null || _a === void 0 ? void 0 : _a.toString();
        this.selectedValidation = this.field.validationRule;
        this.initAdvancedConfiguration(this.field.editTemplate);
        if ((this.inputType === 1 || this.inputType === 3) && this.field.validationValues !== undefined && this.field.validationValues.length > 0) {
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
    fieldChanged(value) {
        var _a;
        if (value !== ColumnMenuType.AdvancedConfiguration && value !== ColumnMenuType.Select) {
            let newType = this.getTemplateType(value);
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
            if (this.field.editTemplate)
                this.setAdvancedConfiguration(this.field.editTemplate);
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
            case TemplateType.Boolean,
                TemplateType.Date,
                TemplateType.Number,
                TemplateType.Phone,
                TemplateType.String,
                TemplateType.Time:
                {
                    this.inputType = 0;
                    break;
                }
            case TemplateType.Select: {
                this.inputType = 5;
                break;
            }
            case TemplateType.Attachment: {
                this.inputType = 0;
            }
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
            case TemplateType.Boolean,
                TemplateType.Date,
                TemplateType.Number,
                TemplateType.Phone,
                TemplateType.String,
                TemplateType.Time:
                {
                    this.inputType = 0;
                    break;
                }
            case TemplateType.Select: {
                this.inputType = 5;
                break;
            }
            case TemplateType.Attachment: {
                this.inputType = 0;
            }
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
            let valuesArray = values.split(',');
            let selectConfig = {
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
                    'value': option,
                    'label': option
                });
            }
            this.field.select = selectConfig;
        }
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
                this.field.editTemplate === TemplateType.Date ? this.field.validators = [isEqualToDate(this.field.validationValues[0])] : [isEqualToNumber(this.field.validationValues[0])];
                break;
            }
            case 'is-not-equal-to': {
                this.field.editTemplate === TemplateType.Date ? this.field.validators = [isNotEqualToDate(this.field.validationValues[0])] : [isNotEqualToNumber(this.field.validationValues[0])];
                break;
            }
            case 'range': {
                this.field.editTemplate === TemplateType.Date ? this.field.validators = [rangeDate(this.field.validationValues[0], this.field.validationValues[1])] : [rangeNumber(this.field.validationValues[0], this.field.validationValues[1])];
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
CmacsCompactTableColumnMoreComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableColumnMoreComponent, selectors: [["cmacs-compact-table-column-more"]], inputs: { labelSave: "labelSave", items: "items", field: "field" }, outputs: { onFieldChanged: "onFieldChanged" }, decls: 3, vars: 2, consts: [["id", "compactTableColumnMore"], ["class", "cmacs-compact-table-column-more", 4, "ngIf"], ["class", "additional-parameters", 4, "ngIf"], [1, "cmacs-compact-table-column-more"], [1, "arrow-up"], ["cmacs-menu", "", 1, "cmacs-context-menu-compact-table", 2, "padding-top", "2px", "min-width", "155px"], [4, "ngFor", "ngForOf"], ["cmacs-submenu", "", "cmacsContextMenu", "", 3, "menuWrapperClassName", "menuClassName", 4, "ngIf", "ngIfElse"], ["menuTemplate", ""], ["cmacs-submenu", "", "cmacsContextMenu", "", 3, "menuWrapperClassName", "menuClassName"], ["title", ""], [1, "cmacs-context-menu-compact-table"], ["cmacs-menu-item", "", 3, "selected-item", "click", 4, "ngFor", "ngForOf"], ["cmacs-menu-item", "", 3, "click"], [1, "additional-parameters"], [1, "custom-node"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], [1, "section-content"], [1, "sidepanel-subheader"], [3, "ngModel", "ngModelChange"], [3, "value", "label", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["cmacs-button", "", "type", "primary", "role", "button", "aria-label", "Primary", 3, "click"], [3, "value", "label"], [1, "validation-input", 3, "ngModel", "ngModelChange", "onModelChange"], ["nz-row", "", "nzGutter", "24", 1, "section-content"], ["nz-col", "", "nzSpan", "24", 1, "sidepanel-subheader"], ["nz-col", "", "nzSpan", "12"], [1, "validation-input", 3, "ngModel", "ngModelChange"], ["cmacs-input", "", 3, "ngModel", "ngModelChange"], [1, "dd-instruct"]], template: function CmacsCompactTableColumnMoreComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, CmacsCompactTableColumnMoreComponent_div_1_Template, 5, 1, "div", 1);
        i0.ɵɵtemplate(2, CmacsCompactTableColumnMoreComponent_div_2_Template, 21, 10, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isAdvancedConfiguration);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isAdvancedConfiguration);
    } }, directives: [i1.NgIf, i2.CmacsMenuDirective, i1.NgForOf, i3.CmacsSubMenuComponent, i4.CmacsMenuItemDirective, i5.NzRowDirective, i5.NzColDirective, i6.CmacsSelectComponent, i7.NgControlStatus, i7.NgModel, i8.CmacsButtonComponent, i9.CmacsOptionComponent, i10.CmacsInputNumberComponent, i11.CmacsDatePickerComponent, i12.CmacsRangePickerComponent, i13.CmacsInputDirective, i7.DefaultValueAccessor], styles: [".cmacs-compact-table-column-more[_ngcontent-%COMP%]{background-color:#fff;position:absolute;left:calc(100% - 226px/2 - .5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11;box-shadow:0 3px 7px rgb(59 63 70/20%)!important;border-radius:3px;border:1px solid #dee0e5;min-width:190px}.cmacs-compact-table-column-more[_ngcontent-%COMP%]   .arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-19px;margin-left:-8px;border:10px solid transparent;border-bottom-color:#fff;z-index:1}.additional-parameters[_ngcontent-%COMP%]{padding:12px 20px;width:245px;background-color:#fff;position:absolute;left:calc(100% - 282px/2 - .5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11;box-shadow:0 3px 7px rgb(59 63 70/20%)!important;border-radius:3px;border:1px solid #dee0e5}.additional-parameters[_ngcontent-%COMP%]   .arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-31px;margin-left:-8px;border:10px solid transparent;border-bottom-color:#fff;z-index:1}.custom-node[_ngcontent-%COMP%]{cursor:default;width:100%;line-height:22px;display:inline-block}.custom-node[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-flex}.tooltip-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:12px;height:28px}.selected-item[_ngcontent-%COMP%]{color:#2a7cff}.section-content[_ngcontent-%COMP%]{margin-bottom:20px}.sidepanel-subheader[_ngcontent-%COMP%]{color:#acb3bf}.section-content[_ngcontent-%COMP%]   cmacs-select[_ngcontent-%COMP%]{width:100%}.dd-instruct[_ngcontent-%COMP%]{color:#acb3bf;font-style:italic}.validation-input[_ngcontent-%COMP%]{margin-bottom:0!important;margin-left:0!important}  .menu-item .ant-menu-submenu-arrow{display:none}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0seUNBQXlDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDV3BMLDhCQUV3QztJQUF0QyxtUkFBcUM7SUFDckMsNEJBQU07SUFDSixvQkFBZ0M7SUFDaEMs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RSxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0SCxDQUFDOzt3SEF2WVUsb0NBQW9DO3lFQUFwQyxvQ0FBb0M7UUNYakQsOEJBQWlDO1FBQy9CLHFGQXFDTTtRQUVOLHVGQXlGTTtRQUNSLGlCQUFNOztRQWpJMEMsZUFBOEI7UUFBOUIsbURBQThCO1FBdUN4QyxlQUE2QjtRQUE3QixrREFBNkI7O3VGRDdCdEQsb0NBQW9DO2NBTGhELFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxXQUFXLEVBQUUsa0RBQWtEO2dCQUMvRCxTQUFTLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQzthQUMvRDtzQ0FZVSxTQUFTO2tCQUFqQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sdW1uTWVudVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zL2NvbHVtbk1lbnVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zL1RlbXBsYXRlVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgRWRpdENvbHVtbkFjdGlvbiwgRmllbGQsIFNlbGVjdENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGFmdGVyRGF0ZSwgYmVmb3JlRGF0ZSwgZ3JlYXRlclRoYW4sIGlzRXF1YWxUb0RhdGUsIGlzRXF1YWxUb051bWJlciwgaXNOb3RFcXVhbFRvRGF0ZSwgaXNOb3RFcXVhbFRvTnVtYmVyLCBsZXNzVGhhbiwgcmFuZ2VEYXRlLCByYW5nZU51bWJlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvY3VzdG9tVmFsaWRhdG9ycydcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQ29sdW1uTW9yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXNBZHZhbmNlZENvbmZpZ3VyYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzZWxlY3RlZFZhbGlkYXRpb246IHN0cmluZyA9ICdub25lJztcclxuICBzZWxlY3RlZEZpZWxkVGVtcGxhdGU6IHN0cmluZyA9IFRlbXBsYXRlVHlwZS5TdHJpbmcudG9TdHJpbmcoKTtcclxuICB2YWxpZGF0aW9uUnVsZXM6IHN0cmluZ1tdID0gW107XHJcbiAgaW5wdXRUeXBlOiBudW1iZXIgPSAwOyAvLyAxIC0+IG51bWJlciBpbnB1dCwgMiAtPiBudW1iZXIgcmFuZ2UgaW5wdXQsIDMtPiBkYXRlIGlucHV0LCA0IC0+IHJhbmdlIGRhdGUgaW5wdXQsIDUgLT4gdGV4dCBpbnB1dFxyXG4gIGlucHV0VmFsdWUxOiBhbnk7XHJcbiAgaW5wdXRWYWx1ZTI6IGFueTtcclxuICB0eXBlc0xpc3Q6IGFueVtdO1xyXG4gIGRyb3Bkb3duVmFsdWVzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQElucHV0KCkgbGFiZWxTYXZlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpdGVtczogYW55O1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBGaWVsZDtcclxuICBAT3V0cHV0KCkgb25GaWVsZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEVkaXRDb2x1bW5BY3Rpb24+KCk7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnR5cGVzTGlzdCA9IHRoaXMuaXRlbXMuY29sdW1uT3B0aW9uc1swXS5zdWJNZW51LmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgIT09IENvbHVtbk1lbnVUeXBlLkFkdmFuY2VkQ29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgLy8gc2V0IGluaXRpYWwgdmFsdWVzIGJhc2VkIG9uIHRoZSBmaWVsZCBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLnNlbGVjdGVkRmllbGRUZW1wbGF0ZSA9IHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlPy50b1N0cmluZygpO1xyXG4gICAgdGhpcy5zZWxlY3RlZFZhbGlkYXRpb24gPSB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlO1xyXG4gICAgdGhpcy5pbml0QWR2YW5jZWRDb25maWd1cmF0aW9uKHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlKTtcclxuICAgIGlmICgodGhpcy5pbnB1dFR5cGUgPT09IDEgfHwgdGhpcy5pbnB1dFR5cGUgPT09IDMpICYmIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIHdlIG5lZWQgdG8gc2V0IHRoZSBmaXJzdCB2YWx1ZVxyXG4gICAgICB0aGlzLmlucHV0VmFsdWUxID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gMiAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUxID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdO1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUyID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzFdO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gNCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUxID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gNSAmJiB0aGlzLmZpZWxkLnNlbGVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIHNldCB0aGUgdmFsdWVzIGZvciB0aGUgb3B0aW9ucyBvZiB0aGUgZHJvcGRvd25cclxuICAgICAgbGV0IHZhbHVlcyA9ICcnO1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5maWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmZpZWxkLnNlbGVjdC5zZWxlY3REYXRhW2luZGV4XTtcclxuICAgICAgICB2YWx1ZXMgKz0gYCR7b3B0aW9uLnZhbHVlfTtgO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZHJvcGRvd25WYWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaWVsZENoYW5nZWQodmFsdWU6IENvbHVtbk1lbnVUeXBlKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IENvbHVtbk1lbnVUeXBlLkFkdmFuY2VkQ29uZmlndXJhdGlvbiAmJiB2YWx1ZSAhPT0gQ29sdW1uTWVudVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgIGxldCBuZXdUeXBlID0gdGhpcy5nZXRUZW1wbGF0ZVR5cGUodmFsdWUpO1xyXG4gICAgICBpZiAobmV3VHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID0gbmV3VHlwZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlID0gJyc7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyA9IFtdO1xyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbXTtcclxuICAgICAgdGhpcy5vbkZpZWxkQ2hhbmdlZC5lbWl0KHsgZmllbGQ6IHRoaXMuZmllbGQsIGNvbHVtbk1lbnU6IE51bWJlcih2YWx1ZSkgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkRmllbGRUZW1wbGF0ZSA9IHRoaXMuZ2V0Q29sdW1uVHlwZSh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZS50b1N0cmluZygpKT8udG9TdHJpbmcoKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbGlkYXRpb24gPSB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlID8gdGhpcy5maWVsZC52YWxpZGF0aW9uUnVsZSA6ICcnO1xyXG4gICAgICBpZiAodmFsdWUgIT09IENvbHVtbk1lbnVUeXBlLkFkdmFuY2VkQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIC8vIGluIHRoaXMgY2FzZSBhIHR5cGUgd2FzIHNlbGVjdGVkIHNvIHdlIG5lZWQgdG8gc2V0IGl0IG9uIHRoZSBmaWVsZFxyXG4gICAgICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID0gdGhpcy5nZXRUZW1wbGF0ZVR5cGUodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSlcclxuICAgICAgICB0aGlzLnNldEFkdmFuY2VkQ29uZmlndXJhdGlvbih0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSk7XHJcbiAgICAgIHRoaXMuaXNBZHZhbmNlZENvbmZpZ3VyYXRpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGVtcGxhdGVUeXBlKHZhbHVlOiBDb2x1bW5NZW51VHlwZSk6IFRlbXBsYXRlVHlwZSB8IG51bGwge1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5Cb29sZWFuOiByZXR1cm4gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuTnVtYmVyOiByZXR1cm4gVGVtcGxhdGVUeXBlLk51bWJlcjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TZWxlY3Q6IHJldHVybiBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TdHJpbmc6IHJldHVybiBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlRpbWU6IHJldHVybiBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDb2x1bW5UeXBlKHZhbHVlOiBzdHJpbmcpOiBDb2x1bW5NZW51VHlwZSB8IG51bGwge1xyXG4gICAgY29uc3QgdGVtcGxhdGVUeXBlID0gTnVtYmVyKHZhbHVlKTtcclxuICAgIHN3aXRjaCAodGVtcGxhdGVUeXBlKSB7XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLkRhdGU6IHJldHVybiBDb2x1bW5NZW51VHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5Cb29sZWFuOiByZXR1cm4gQ29sdW1uTWVudVR5cGUuQm9vbGVhbjtcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuTnVtYmVyOiByZXR1cm4gQ29sdW1uTWVudVR5cGUuTnVtYmVyO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TZWxlY3Q6IHJldHVybiBDb2x1bW5NZW51VHlwZS5TZWxlY3Q7XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLkRhdGU6IHJldHVybiBDb2x1bW5NZW51VHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TdHJpbmc6IHJldHVybiBDb2x1bW5NZW51VHlwZS5TdHJpbmc7XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlRpbWU6IHJldHVybiBDb2x1bW5NZW51VHlwZS5UaW1lO1xyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQodmFsdWU6IENvbHVtbk1lbnVUeXBlLCB0ZW1wbGF0ZVR5cGU6IFRlbXBsYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgLy8gaXQgd2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgdHlwZSBvZiB0aGUgdGVtcGxhdGUgbWF0Y2hlcyB0aGUgY29sdW1uIHR5cGVcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5Cb29sZWFuOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuQm9vbGVhbjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5OdW1iZXI6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5OdW1iZXI7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU2VsZWN0OiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlN0cmluZzogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlN0cmluZztcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5UaW1lOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgY29sdW1uVHlwZSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZVR5cGUgPSB0aGlzLmdldFRlbXBsYXRlVHlwZShjb2x1bW5UeXBlKTtcclxuICAgIHRoaXMuc2V0QWR2YW5jZWRDb25maWd1cmF0aW9uKHRlbXBsYXRlVHlwZSk7XHJcbiAgfVxyXG5cclxuICBpbml0QWR2YW5jZWRDb25maWd1cmF0aW9uKHRlbXBsYXRlVHlwZTogVGVtcGxhdGVUeXBlKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkRmllbGRUZW1wbGF0ZSA9IHRoaXMuZ2V0Q29sdW1uVHlwZSh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZS50b1N0cmluZygpKT8udG9TdHJpbmcoKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRlbXBsYXRlVHlwZSkge1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5Cb29sZWFuLFxyXG4gICAgICAgIFRlbXBsYXRlVHlwZS5EYXRlLFxyXG4gICAgICAgIFRlbXBsYXRlVHlwZS5OdW1iZXIsXHJcbiAgICAgICAgVGVtcGxhdGVUeXBlLlBob25lLFxyXG4gICAgICAgIFRlbXBsYXRlVHlwZS5TdHJpbmcsXHJcbiAgICAgICAgVGVtcGxhdGVUeXBlLlRpbWU6IHtcclxuICAgICAgICAgIHRoaXMuaW5wdXRUeXBlID0gMDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU2VsZWN0OiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSA1O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLkF0dGFjaG1lbnQ6IHtcclxuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgc3dpdGNoICh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSkge1xyXG4gICAgICBjYXNlIDA6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IHRoaXMuaXRlbXMudmFsaWRhdGlvblJ1bGVzLmRhdGU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDI6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IHRoaXMuaXRlbXMudmFsaWRhdGlvblJ1bGVzLm51bWJlcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDM6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IHRoaXMuaXRlbXMudmFsaWRhdGlvblJ1bGVzLnRleHQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA0OiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDU6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNzoge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uVmFsaWRhdGlvbkNoYW5nZSgpO1xyXG5cclxuICB9XHJcblxyXG4gIHNldEFkdmFuY2VkQ29uZmlndXJhdGlvbih0ZW1wbGF0ZVR5cGU6IFRlbXBsYXRlVHlwZSkge1xyXG4gICAgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPSB0ZW1wbGF0ZVR5cGU7XHJcbiAgICB0aGlzLnNlbGVjdGVkRmllbGRUZW1wbGF0ZSA9IHRoaXMuZ2V0Q29sdW1uVHlwZSh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZS50b1N0cmluZygpKT8udG9TdHJpbmcoKTtcclxuICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblJ1bGUgPSB0aGlzLnNlbGVjdGVkVmFsaWRhdGlvbjtcclxuICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyA9IFtdO1xyXG5cclxuICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgdGVtcGxhdGUgdHlwZSB3ZSB3aWxsIHNldCB0aGUgdmFsdWVzIG9uIHRoZSBhZHZhbmNlIGNvbmZpZ3VyYXRpb24gcG9wdXAgXHJcbiAgICBzd2l0Y2ggKHRlbXBsYXRlVHlwZSkge1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5Cb29sZWFuLFxyXG4gICAgICAgIFRlbXBsYXRlVHlwZS5EYXRlLFxyXG4gICAgICAgIFRlbXBsYXRlVHlwZS5OdW1iZXIsXHJcbiAgICAgICAgVGVtcGxhdGVUeXBlLlBob25lLFxyXG4gICAgICAgIFRlbXBsYXRlVHlwZS5TdHJpbmcsXHJcbiAgICAgICAgVGVtcGxhdGVUeXBlLlRpbWU6IHtcclxuICAgICAgICAgIHRoaXMuaW5wdXRUeXBlID0gMDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU2VsZWN0OiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSA1O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLkF0dGFjaG1lbnQ6IHtcclxuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2V0VmFsaWRhdGlvblJ1bGVzKHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlKTtcclxuICAgIHRoaXMub25WYWxpZGF0aW9uQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRWYWxpZGF0aW9uUnVsZXModmFsdWU6IFRlbXBsYXRlVHlwZSkge1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlIDA6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IHRoaXMuaXRlbXMudmFsaWRhdGlvblJ1bGVzLmRhdGU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDI6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IHRoaXMuaXRlbXMudmFsaWRhdGlvblJ1bGVzLm51bWJlcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDM6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IHRoaXMuaXRlbXMudmFsaWRhdGlvblJ1bGVzLnRleHQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA0OiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDU6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNzoge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVmFsaWRhdGlvbkNoYW5nZSgpIHtcclxuICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZFZhbGlkYXRpb24pIHtcclxuICAgICAgY2FzZSAnbm9uZSc6IHtcclxuICAgICAgICB0aGlzLnNldEZpZWxkVmFsaWRhdG9yKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnaXMtbm90LWVtcHR5Jzoge1xyXG4gICAgICAgIHRoaXMuc2V0RmllbGRWYWxpZGF0b3IoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdhZnRlci1kYXRlJzoge1xyXG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gMztcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdiZWZvcmUtZGF0ZSc6IHtcclxuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IDM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnaXMtZXF1YWwtdG8nOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlID8gdGhpcy5pbnB1dFR5cGUgPSAzIDogdGhpcy5pbnB1dFR5cGUgPSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2lzLW5vdC1lcXVhbC10byc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgPyB0aGlzLmlucHV0VHlwZSA9IDMgOiB0aGlzLmlucHV0VHlwZSA9IDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAncmFuZ2UnOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlID8gdGhpcy5pbnB1dFR5cGUgPSA0IDogdGhpcy5pbnB1dFR5cGUgPSAyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2dyZWF0ZXItdGhhbic6IHtcclxuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnbGVzcy10aGFuJzoge1xyXG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgdGhpcy5zZXRGaWVsZFZhbGlkYXRvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbklucHV0VmFsdWVDaGFuZ2UxKHZhbHVlOiBhbnkpIHtcclxuICAgIC8vIGZpcnN0IGlucHV0IHZhbHVlIHdhcyBjaGFuZ2VkXHJcbiAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB0aGVyZSBpcyBubyB2YWx1ZXMgc2F2ZWQgc28gd2UgY3JlYXRlZCBhIG5ldyBhcnJheVxyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgPSBbdmFsdWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdlIHNldCB0aGUgdmFsaWRhdG9yIG9uIHRoZSBmaWVsZCBiYXNlIGRvbiB0aGUgc2VsZWN0ZWQgcnVsZSBhbmQgc2VsZWN0ZWQgdmFsdWVcclxuICAgIHRoaXMuc2V0RmllbGRWYWxpZGF0b3IoKTtcclxuICB9XHJcblxyXG4gIG9uRHJvcGRvd25WYWx1ZXNDaGFuZ2VkKHZhbHVlczogc3RyaW5nKSB7XHJcbiAgICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGUgdGVtcGxhdGUgdHlwZSBpcyBzZWxlY3QgYmVmb3JlIGFkZGluZyB0aGUgZHJvcGRvd24gdmFsdWVzXHJcbiAgICBpZiAodmFsdWVzICE9PSAnJyAmJiB2YWx1ZXMgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZXMgIT09IG51bGwgJiYgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3QpIHtcclxuICAgICAgLy8gcG9zc2libGUgdmFsdWVzIG9mIHRoZSBzZWxlY3Qgd2lsbCBiZSBhZGRlZCB1c2luZyBhICcsJyBhcyBzZXBhcmF0b3JcclxuXHJcbiAgICAgIGxldCB2YWx1ZXNBcnJheSA9IHZhbHVlcy5zcGxpdCgnLCcpO1xyXG4gICAgICBsZXQgc2VsZWN0Q29uZmlnOiBTZWxlY3RDb25maWcgPSB7XHJcbiAgICAgICAgbGFiZWw6ICdsYWJlbCcsXHJcbiAgICAgICAgdmFsdWU6ICd2YWx1ZScsXHJcbiAgICAgICAgc2VsZWN0RGF0YTogW11cclxuICAgICAgfTtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlc0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHZhbHVlc0FycmF5W2luZGV4XT8udHJpbSgpO1xyXG4gICAgICAgIGlmIChvcHRpb24gPT09ICcnIHx8IG9wdGlvbiA9PT0gbnVsbCB8fCBvcHRpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY29udGludWU7IC8vIGlnbm9yZSBub3QgdmFsaWQgdmFsdWVzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdENvbmZpZy5zZWxlY3REYXRhLnB1c2goe1xyXG4gICAgICAgICAgJ3ZhbHVlJzogb3B0aW9uLFxyXG4gICAgICAgICAgJ2xhYmVsJzogb3B0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZmllbGQuc2VsZWN0ID0gc2VsZWN0Q29uZmlnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25EYXRlUmFuZ2VDaGFuZ2VkKHZhbHVlOiBEYXRlW10pIHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyA9IHZhbHVlO1xyXG4gICAgICAvLyB3ZSBzZXQgdGhlIHZhbGlkYXRvciBvbiB0aGUgZmllbGQgYmFzZSBkb24gdGhlIHNlbGVjdGVkIHJ1bGUgYW5kIHNlbGVjdGVkIHZhbHVlXHJcbiAgICAgIHRoaXMuc2V0RmllbGRWYWxpZGF0b3IoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW5wdXRWYWx1ZUNoYW5nZTIodmFsdWU6IGFueSkge1xyXG4gICAgLy8gc2Vjb25kIGlucHV0IHZhbHVlIHdhcyBjaGFuZ2VkXHJcbiAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzFdID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIHRoZSBhcnJheSBoYXMgb25lIHZhbHVlIHNvIHdlIGFkZCBpdCBhdCB0aGUgZW5kXHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcy5wdXNoKHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHRoZXJlIGlzIG5vIHZhbHVlcyBzYXZlZCBzbyB3ZSBjcmVhdGVkIGEgbmV3IGFycmF5XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyA9IFtudWxsLCB2YWx1ZV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2Ugc2V0IHRoZSB2YWxpZGF0b3Igb24gdGhlIGZpZWxkIGJhc2UgZG9uIHRoZSBzZWxlY3RlZCBydWxlIGFuZCBzZWxlY3RlZCB2YWx1ZVxyXG4gICAgdGhpcy5zZXRGaWVsZFZhbGlkYXRvcigpO1xyXG4gIH1cclxuXHJcbiAgc2V0RmllbGRWYWxpZGF0b3IoKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFZhbGlkYXRpb24gPT09ICcnKSB7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblJ1bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSBzZXQgdGhlIHZhbGlkYXRvciBvbiB0aGUgZmllbGQgYmFzZSBkb24gdGhlIHNlbGVjdGVkIHJ1bGUgYW5kIHNlbGVjdGVkIHZhbHVlXHJcbiAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlID0gdGhpcy5zZWxlY3RlZFZhbGlkYXRpb247XHJcbiAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRWYWxpZGF0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ25vbmUnOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW107IC8vIHRoaXMgd2lsbCBub3QgYXBwbHkgYW55IHJ1bGVcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpcy1ub3QtZW1wdHknOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW1ZhbGlkYXRvcnMucmVxdWlyZWRdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2FmdGVyLWRhdGUnOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW2FmdGVyRGF0ZSh0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdiZWZvcmUtZGF0ZSc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbYmVmb3JlRGF0ZSh0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpcy1lcXVhbC10byc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgPyB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbaXNFcXVhbFRvRGF0ZSh0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXSA6IFtpc0VxdWFsVG9OdW1iZXIodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnaXMtbm90LWVxdWFsLXRvJzoge1xyXG4gICAgICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZSA/IHRoaXMuZmllbGQudmFsaWRhdG9ycyA9IFtpc05vdEVxdWFsVG9EYXRlKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldIDogW2lzTm90RXF1YWxUb051bWJlcih0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdyYW5nZSc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgPyB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbcmFuZ2VEYXRlKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSwgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzFdKV0gOiBbcmFuZ2VOdW1iZXIodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdLCB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMV0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdncmVhdGVyLXRoYW4nOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW2dyZWF0ZXJUaGFuKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2xlc3MtdGhhbic6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbbGVzc1RoYW4odGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDogdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNldHRpbmdTYXZlZCgpIHtcclxuICAgIHRoaXMub25GaWVsZENoYW5nZWQuZW1pdCh7IGZpZWxkOiB0aGlzLmZpZWxkLCBjb2x1bW5NZW51OiB0aGlzLmdldENvbHVtblR5cGUodGhpcy5maWVsZC5lZGl0VGVtcGxhdGUudG9TdHJpbmcoKSkgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGlkPVwiY29tcGFjdFRhYmxlQ29sdW1uTW9yZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlXCIgKm5nSWY9XCIhaXNBZHZhbmNlZENvbmZpZ3VyYXRpb25cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhcnJvdy11cFwiPjwvZGl2PlxyXG4gICAgPCEtLSByZWd1bGFyIGNvbHVtbiBvcHRpb25zIC0tPlxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNtYWNzLW1lbnUgY2xhc3M9XCJjbWFjcy1jb250ZXh0LW1lbnUtY29tcGFjdC10YWJsZVwiIHN0eWxlPVwicGFkZGluZy10b3A6IDJweDsgbWluLXdpZHRoOiAxNTVweFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXMuY29sdW1uT3B0aW9uc1wiPlxyXG4gICAgICAgICAgPGxpIGNtYWNzLXN1Ym1lbnUgW21lbnVXcmFwcGVyQ2xhc3NOYW1lXT1cIidjb21wYWN0LXRhYmxlLW1vcmUtc3VibWVudS11bC13cmFwcGVyJ1wiXHJcbiAgICAgICAgICAgIFttZW51Q2xhc3NOYW1lXT1cIidjb21wYWN0LXRhYmxlLW1vcmUtc3VibWVudS11bCdcIiBjbWFjc0NvbnRleHRNZW51XHJcbiAgICAgICAgICAgICpuZ0lmPVwiaXRlbS5zdWJNZW51Lmxlbmd0aDsgZWxzZSBtZW51VGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gdGl0bGU+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ7e2l0ZW0uaWNvbn19XCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb21wYWN0VGFibGVDb2x1bW5Nb3JlXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY21hY3MtY29udGV4dC1tZW51LWNvbXBhY3QtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbWFjcy1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IHN1Ym1lbnUgb2YgaXRlbS5zdWJNZW51XCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkLWl0ZW1dPVwiaXNTZWxlY3RlZChzdWJtZW51LnZhbHVlLCBmaWVsZC5lZGl0VGVtcGxhdGUpXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImZpZWxkQ2hhbmdlZChzdWJtZW51LnZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInt7c3VibWVudS5pY29ufX1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tzdWJtZW51LmxhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNtZW51VGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxsaSBjbWFjcy1tZW51LWl0ZW0gKGNsaWNrKT1cImZpZWxkQ2hhbmdlZChpdGVtLnZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ7e2l0ZW0uaWNvbn19XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3tpdGVtLmxhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiYWRkaXRpb25hbC1wYXJhbWV0ZXJzXCIgKm5nSWY9XCJpc0FkdmFuY2VkQ29uZmlndXJhdGlvblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFycm93LXVwXCI+PC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImN1c3RvbS1ub2RlXCI+XHJcbiAgICAgICAgPGRpdiBuei1yb3c+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCIyNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGVwYW5lbC1zdWJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbXMuYWR2YW5jZWRDb25maWd1cmF0aW9uLmxhYmVsVHlwZX19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGNtYWNzLXNlbGVjdCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkRmllbGRUZW1wbGF0ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy1vcHRpb24gKm5nRm9yPVwibGV0IF9pdGVtIG9mIHR5cGVzTGlzdFwiIHZhbHVlPVwie3tfaXRlbS52YWx1ZX19XCIgbGFiZWw9XCJ7e19pdGVtLmxhYmVsfX1cIj5cclxuICAgICAgICAgICAgICAgIDwvY21hY3Mtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvY21hY3Mtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIiAqbmdJZj1cInZhbGlkYXRpb25SdWxlcy5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZXBhbmVsLXN1YmhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtcy5hZHZhbmNlZENvbmZpZ3VyYXRpb24ubGFiZWxWYWxpZGF0aW9ufX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Y21hY3Mtc2VsZWN0IFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWxpZGF0aW9uXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25WYWxpZGF0aW9uQ2hhbmdlKClcIj5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy1vcHRpb24gKm5nRm9yPVwibGV0IHJ1bGUgb2YgdmFsaWRhdGlvblJ1bGVzXCIgdmFsdWU9XCJ7e3J1bGUudmFsdWV9fVwiIGxhYmVsPVwie3tydWxlLmxhYmVsfX1cIj5cclxuICAgICAgICAgICAgICAgIDwvY21hY3Mtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvY21hY3Mtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIiAqbmdJZj1cImlucHV0VHlwZSA9PT0gMVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGVwYW5lbC1zdWJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbXMuYWR2YW5jZWRDb25maWd1cmF0aW9uLmxhYmVsTnVtYmVyfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Y21hY3MtaW5wdXQtbnVtYmVyIGNsYXNzPVwidmFsaWRhdGlvbi1pbnB1dFwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZTFcIlxyXG4gICAgICAgICAgICAgICAgKG9uTW9kZWxDaGFuZ2UpPVwib25JbnB1dFZhbHVlQ2hhbmdlMSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1pbnB1dC1udW1iZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCIyNFwiICpuZ0lmPVwiaW5wdXRUeXBlID09PSAyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnRcIiBuei1yb3cgbnpHdXR0ZXI9XCIyNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGVwYW5lbC1zdWJoZWFkZXJcIiBuei1jb2wgbnpTcGFuPVwiMjRcIj5cclxuICAgICAgICAgICAgICAgICAge3tpdGVtcy5hZHZhbmNlZENvbmZpZ3VyYXRpb24ubGFiZWxOdW1iZXJ9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCIxMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8Y21hY3MtaW5wdXQtbnVtYmVyIGNsYXNzPVwidmFsaWRhdGlvbi1pbnB1dFwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZTFcIlxyXG4gICAgICAgICAgICAgICAgICAob25Nb2RlbENoYW5nZSk9XCJvbklucHV0VmFsdWVDaGFuZ2UxKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCIxMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8Y21hY3MtaW5wdXQtbnVtYmVyIGNsYXNzPVwidmFsaWRhdGlvbi1pbnB1dFwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZTJcIlxyXG4gICAgICAgICAgICAgICAgICAob25Nb2RlbENoYW5nZSk9XCJvbklucHV0VmFsdWVDaGFuZ2UyKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCIyNFwiICpuZ0lmPVwiaW5wdXRUeXBlID09PSAzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZXBhbmVsLXN1YmhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtcy5hZHZhbmNlZENvbmZpZ3VyYXRpb24ubGFiZWxEYXRlfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Y21hY3MtZGF0ZS1waWNrZXIgY2xhc3M9XCJ2YWxpZGF0aW9uLWlucHV0XCIgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlMVwiXHJcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0VmFsdWVDaGFuZ2UxKCRldmVudClcIj5cclxuICAgICAgICAgICAgICA8L2NtYWNzLWRhdGUtcGlja2VyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIiAqbmdJZj1cImlucHV0VHlwZSA9PT0gNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGVwYW5lbC1zdWJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbXMuYWR2YW5jZWRDb25maWd1cmF0aW9uLmxhYmVsRGF0ZX19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGNtYWNzLXJhbmdlLXBpY2tlciBjbGFzcz1cInZhbGlkYXRpb24taW5wdXRcIiBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWUxXCJcclxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uRGF0ZVJhbmdlQ2hhbmdlZCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1yYW5nZS1waWNrZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCIyNFwiICpuZ0lmPVwiaW5wdXRUeXBlID09PSA1XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY21hY3MtaW5wdXQgWyhuZ01vZGVsKV09XCJkcm9wZG93blZhbHVlc1wiIChuZ01vZGVsQ2hhbmdlKT1cIm9uRHJvcGRvd25WYWx1ZXNDaGFuZ2VkKCRldmVudClcIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZC1pbnN0cnVjdFwiPnt7aXRlbXMuYWR2YW5jZWRDb25maWd1cmF0aW9uLmRyb3Bkb3duRGVzY3JpcHRpb259fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY21hY3MtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJQcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvblNldHRpbmdTYXZlZCgpXCI+e3tsYWJlbFNhdmV9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+Il19