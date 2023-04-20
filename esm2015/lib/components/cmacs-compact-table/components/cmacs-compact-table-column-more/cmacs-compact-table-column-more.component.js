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
    const _item_r22 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", _item_r22.value);
    i0.ɵɵpropertyInterpolate("label", _item_r22.label);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_11_cmacs_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 24);
} if (rf & 2) {
    const rule_r24 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", rule_r24.value);
    i0.ɵɵpropertyInterpolate("label", rule_r24.label);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "div", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "cmacs-select", 20);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_11_Template_cmacs_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.selectedValidation = $event; })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_11_Template_cmacs_select_ngModelChange_4_listener() { i0.ɵɵrestoreView(_r26); const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.onValidationChange(); });
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
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "cmacs-input-number", 25);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_12_Template_cmacs_input_number_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(2); return ctx_r28.inputValue1 = $event; })("onModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_12_Template_cmacs_input_number_onModelChange_2_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.onInputValueChange1($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r18.inputValue1);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "cmacs-input-number", 25);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.inputValue1 = $event; })("onModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_onModelChange_2_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.onInputValueChange1($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "cmacs-input-number", 25);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.inputValue2 = $event; })("onModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_13_Template_cmacs_input_number_onModelChange_3_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.onInputValueChange2($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r19.inputValue1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r19.inputValue2);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "cmacs-date-picker", 26);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_14_Template_cmacs_date_picker_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.inputValue1 = $event; })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_14_Template_cmacs_date_picker_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.onInputValueChange1($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r20.inputValue1);
} }
function CmacsCompactTableColumnMoreComponent_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "cmacs-range-picker", 26);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_15_Template_cmacs_range_picker_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.inputValue1 = $event; })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_div_15_Template_cmacs_range_picker_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r41 = i0.ɵɵnextContext(2); return ctx_r41.onDateRangeChanged($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r21.inputValue1);
} }
function CmacsCompactTableColumnMoreComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_Template_cmacs_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.selectedFieldTemplate = $event; })("ngModelChange", function CmacsCompactTableColumnMoreComponent_div_2_Template_cmacs_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.onChange($event); });
    i0.ɵɵtemplate(10, CmacsCompactTableColumnMoreComponent_div_2_cmacs_option_10_Template, 1, 2, "cmacs-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, CmacsCompactTableColumnMoreComponent_div_2_div_11_Template, 6, 3, "div", 22);
    i0.ɵɵtemplate(12, CmacsCompactTableColumnMoreComponent_div_2_div_12_Template, 3, 1, "div", 22);
    i0.ɵɵtemplate(13, CmacsCompactTableColumnMoreComponent_div_2_div_13_Template, 4, 2, "div", 22);
    i0.ɵɵtemplate(14, CmacsCompactTableColumnMoreComponent_div_2_div_14_Template, 3, 1, "div", 22);
    i0.ɵɵtemplate(15, CmacsCompactTableColumnMoreComponent_div_2_div_15_Template, 3, 1, "div", 22);
    i0.ɵɵelementStart(16, "div", 17);
    i0.ɵɵelementStart(17, "div", 18);
    i0.ɵɵelementStart(18, "button", 23);
    i0.ɵɵlistener("click", function CmacsCompactTableColumnMoreComponent_div_2_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r43); const ctx_r45 = i0.ɵɵnextContext(); return ctx_r45.onSettingSaved(); });
    i0.ɵɵtext(19);
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
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.labelSave);
} }
export class CmacsCompactTableColumnMoreComponent {
    constructor() {
        this.isAdvancedConfiguration = false;
        this.selectedValidation = 'none';
        this.selectedFieldTemplate = TemplateType.String.toString();
        this.validationRules = [];
        this.inputType = 0; // 1 -> number input, 2 -> number range input, 3-> date input, 4 -> range date input
        this.labelSave = '';
        this.onFieldChanged = new EventEmitter();
    }
    ngOnInit() {
        var _a;
        this.typesList = this.items.columnOptions[0].subMenu.filter(item => item.value !== ColumnMenuType.AdvancedConfiguration);
        // set initial values based on the field properties
        this.selectedFieldTemplate = (_a = this.field.editTemplate) === null || _a === void 0 ? void 0 : _a.toString();
        this.setValidationRules(this.field.editTemplate);
        this.selectedValidation = this.field.validationRule;
        this.onValidationChange();
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
    }
    fieldChanged(value) {
        var _a;
        if (value !== ColumnMenuType.AdvancedConfiguration) {
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
            if (this.field.editTemplate)
                this.setValidationRules(this.field.editTemplate);
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
        const templateType = Number(value);
        this.field.editTemplate = this.getTemplateType(templateType);
        this.selectedValidation = '';
        this.field.validationRule = this.selectedValidation;
        this.field.validationValues = [];
        this.inputType = 0;
        this.setValidationRules(this.field.editTemplate);
        this.onValidationChange();
    }
    setValidationRules(value) {
        switch (value) {
            case 0: {
                this.validationRules = this.items.validationRules.date;
                this.selectedValidation = 'none';
                break;
            }
            case 1: {
                this.validationRules = [];
                break;
            }
            case 2: {
                this.validationRules = this.items.validationRules.number;
                this.selectedValidation = 'none';
                break;
            }
            case 3: {
                this.validationRules = this.items.validationRules.text;
                this.selectedValidation = 'none';
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
                break;
            }
            case 'is-not-empty': {
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
            default: { }
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
CmacsCompactTableColumnMoreComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableColumnMoreComponent, selectors: [["cmacs-compact-table-column-more"]], inputs: { labelSave: "labelSave", items: "items", field: "field" }, outputs: { onFieldChanged: "onFieldChanged" }, decls: 3, vars: 2, consts: [["id", "compactTableColumnMore"], ["class", "cmacs-compact-table-column-more", 4, "ngIf"], ["class", "additional-parameters", 4, "ngIf"], [1, "cmacs-compact-table-column-more"], [1, "arrow-up"], ["cmacs-menu", "", 1, "cmacs-context-menu-compact-table", 2, "padding-top", "2px", "min-width", "155px"], [4, "ngFor", "ngForOf"], ["cmacs-submenu", "", "cmacsContextMenu", "", 3, "menuWrapperClassName", "menuClassName", 4, "ngIf", "ngIfElse"], ["menuTemplate", ""], ["cmacs-submenu", "", "cmacsContextMenu", "", 3, "menuWrapperClassName", "menuClassName"], ["title", ""], [1, "cmacs-context-menu-compact-table"], ["cmacs-menu-item", "", 3, "selected-item", "click", 4, "ngFor", "ngForOf"], ["cmacs-menu-item", "", 3, "click"], [1, "additional-parameters"], [1, "custom-node"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], [1, "section-content"], [1, "sidepanel-subheader"], [3, "ngModel", "ngModelChange"], [3, "value", "label", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["cmacs-button", "", "type", "primary", "role", "button", "aria-label", "Primary", 3, "click"], [3, "value", "label"], [1, "validation-input", 3, "ngModel", "ngModelChange", "onModelChange"], [1, "validation-input", 3, "ngModel", "ngModelChange"]], template: function CmacsCompactTableColumnMoreComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, CmacsCompactTableColumnMoreComponent_div_1_Template, 5, 1, "div", 1);
        i0.ɵɵtemplate(2, CmacsCompactTableColumnMoreComponent_div_2_Template, 20, 9, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isAdvancedConfiguration);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isAdvancedConfiguration);
    } }, directives: [i1.NgIf, i2.CmacsMenuDirective, i1.NgForOf, i3.CmacsSubMenuComponent, i4.CmacsMenuItemDirective, i5.NzRowDirective, i5.NzColDirective, i6.CmacsSelectComponent, i7.NgControlStatus, i7.NgModel, i8.CmacsButtonComponent, i9.CmacsOptionComponent, i10.CmacsInputNumberComponent, i11.CmacsDatePickerComponent, i12.CmacsRangePickerComponent], styles: [".cmacs-compact-table-column-more[_ngcontent-%COMP%]{background-color:#fff;position:absolute;left:calc(100% - 226px/2 - .5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11;box-shadow:0 3px 7px rgb(59 63 70/20%)!important;border-radius:3px;border:1px solid #dee0e5;min-width:190px}.cmacs-compact-table-column-more[_ngcontent-%COMP%]   .arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-19px;margin-left:-8px;border:10px solid transparent;border-bottom-color:#fff;z-index:1}.additional-parameters[_ngcontent-%COMP%]{padding:12px 20px;width:245px;background-color:#fff;position:absolute;left:calc(100% - 282px/2 - .5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11;box-shadow:0 3px 7px rgb(59 63 70/20%)!important;border-radius:3px;border:1px solid #dee0e5}.additional-parameters[_ngcontent-%COMP%]   .arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-31px;margin-left:-8px;border:10px solid transparent;border-bottom-color:#fff;z-index:1}.custom-node[_ngcontent-%COMP%]{cursor:default;width:100%;line-height:22px;display:inline-block}.custom-node[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-flex}.tooltip-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:12px;height:28px}.selected-item[_ngcontent-%COMP%]{color:#2a7cff}.section-content[_ngcontent-%COMP%]{margin-bottom:20px}.sidepanel-subheader[_ngcontent-%COMP%]{color:#acb3bf}.section-content[_ngcontent-%COMP%]   cmacs-select[_ngcontent-%COMP%]{width:100%}  .menu-item .ant-menu-submenu-arrow{display:none}.validation-input[_ngcontent-%COMP%]{margin-bottom:0!important;margin-left:0!important}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0seUNBQXlDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUNXcEwsOEJBRXdDO0lBQXRDLG1SQUFxQztJQUNyQyw0QkFBTTtJQUNKLG9CQUFnQztJQUNoQyw0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QUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RILENBQUM7O3dIQS9RVSxvQ0FBb0M7eUVBQXBDLG9DQUFvQztRQ1hqRCw4QkFBaUM7UUFDL0IscUZBcUNNO1FBRU4sc0ZBNkRNO1FBQ1IsaUJBQU07O1FBckcwQyxlQUE4QjtRQUE5QixtREFBOEI7UUF1Q3hDLGVBQTZCO1FBQTdCLGtEQUE2Qjs7dUZEN0J0RCxvQ0FBb0M7Y0FMaEQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLFdBQVcsRUFBRSxrREFBa0Q7Z0JBQy9ELFNBQVMsRUFBRSxDQUFDLGlEQUFpRCxDQUFDO2FBQy9EO3NDQVdVLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDSSxjQUFjO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2x1bW5NZW51VHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZW51bXMvY29sdW1uTWVudVR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZW51bXMvVGVtcGxhdGVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBFZGl0Q29sdW1uQWN0aW9uLCBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGFmdGVyRGF0ZSwgYmVmb3JlRGF0ZSwgZ3JlYXRlclRoYW4sIGlzRXF1YWxUb0RhdGUsIGlzRXF1YWxUb051bWJlciwgaXNOb3RFcXVhbFRvRGF0ZSwgaXNOb3RFcXVhbFRvTnVtYmVyLCBsZXNzVGhhbiwgcmFuZ2VEYXRlLCByYW5nZU51bWJlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvY3VzdG9tVmFsaWRhdG9ycydcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQ29sdW1uTW9yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXNBZHZhbmNlZENvbmZpZ3VyYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzZWxlY3RlZFZhbGlkYXRpb246IHN0cmluZyA9ICdub25lJztcclxuICBzZWxlY3RlZEZpZWxkVGVtcGxhdGU6IHN0cmluZyA9IFRlbXBsYXRlVHlwZS5TdHJpbmcudG9TdHJpbmcoKTtcclxuICB2YWxpZGF0aW9uUnVsZXM6IHN0cmluZ1tdID0gW107XHJcbiAgaW5wdXRUeXBlOiBudW1iZXIgPSAwOyAvLyAxIC0+IG51bWJlciBpbnB1dCwgMiAtPiBudW1iZXIgcmFuZ2UgaW5wdXQsIDMtPiBkYXRlIGlucHV0LCA0IC0+IHJhbmdlIGRhdGUgaW5wdXRcclxuICBpbnB1dFZhbHVlMTogYW55O1xyXG4gIGlucHV0VmFsdWUyOiBhbnk7XHJcbiAgdHlwZXNMaXN0OiBhbnlbXTtcclxuXHJcbiAgQElucHV0KCkgbGFiZWxTYXZlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpdGVtczogYW55O1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBGaWVsZDtcclxuICBAT3V0cHV0KCkgb25GaWVsZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEVkaXRDb2x1bW5BY3Rpb24+KCk7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnR5cGVzTGlzdCA9IHRoaXMuaXRlbXMuY29sdW1uT3B0aW9uc1swXS5zdWJNZW51LmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgIT09IENvbHVtbk1lbnVUeXBlLkFkdmFuY2VkQ29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgLy8gc2V0IGluaXRpYWwgdmFsdWVzIGJhc2VkIG9uIHRoZSBmaWVsZCBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLnNlbGVjdGVkRmllbGRUZW1wbGF0ZSA9IHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlPy50b1N0cmluZygpO1xyXG4gICAgdGhpcy5zZXRWYWxpZGF0aW9uUnVsZXModGhpcy5maWVsZC5lZGl0VGVtcGxhdGUpO1xyXG4gICAgdGhpcy5zZWxlY3RlZFZhbGlkYXRpb24gPSB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlO1xyXG4gICAgdGhpcy5vblZhbGlkYXRpb25DaGFuZ2UoKTtcclxuICAgIGlmICgodGhpcy5pbnB1dFR5cGUgPT09IDEgfHwgdGhpcy5pbnB1dFR5cGUgPT09IDMpICYmIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIHdlIG5lZWQgdG8gc2V0IHRoZSBmaXJzdCB2YWx1ZVxyXG4gICAgICB0aGlzLmlucHV0VmFsdWUxID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gMiAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUxID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdO1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUyID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzFdO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gNCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUxID0gdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmllbGRDaGFuZ2VkKHZhbHVlOiBDb2x1bW5NZW51VHlwZSkge1xyXG4gICAgaWYgKHZhbHVlICE9PSBDb2x1bW5NZW51VHlwZS5BZHZhbmNlZENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgbGV0IG5ld1R5cGUgPSB0aGlzLmdldFRlbXBsYXRlVHlwZSh2YWx1ZSk7XHJcbiAgICAgIGlmIChuZXdUeXBlICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPSBuZXdUeXBlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblJ1bGUgPSAnJztcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzID0gW107XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdG9ycyA9IFtdO1xyXG4gICAgICB0aGlzLm9uRmllbGRDaGFuZ2VkLmVtaXQoeyBmaWVsZDogdGhpcy5maWVsZCwgY29sdW1uTWVudTogTnVtYmVyKHZhbHVlKSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWVsZFRlbXBsYXRlID0gdGhpcy5nZXRDb2x1bW5UeXBlKHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlLnRvU3RyaW5nKCkpPy50b1N0cmluZygpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVmFsaWRhdGlvbiA9IHRoaXMuZmllbGQudmFsaWRhdGlvblJ1bGUgPyB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlIDogJyc7XHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSlcclxuICAgICAgICB0aGlzLnNldFZhbGlkYXRpb25SdWxlcyh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSk7XHJcbiAgICAgIHRoaXMuaXNBZHZhbmNlZENvbmZpZ3VyYXRpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGVtcGxhdGVUeXBlKHZhbHVlOiBDb2x1bW5NZW51VHlwZSk6IFRlbXBsYXRlVHlwZSB8IG51bGwge1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5Cb29sZWFuOiByZXR1cm4gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuTnVtYmVyOiByZXR1cm4gVGVtcGxhdGVUeXBlLk51bWJlcjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TZWxlY3Q6IHJldHVybiBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TdHJpbmc6IHJldHVybiBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlRpbWU6IHJldHVybiBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDb2x1bW5UeXBlKHZhbHVlOiBzdHJpbmcpOiBDb2x1bW5NZW51VHlwZSB8IG51bGwge1xyXG4gICAgY29uc3QgdGVtcGxhdGVUeXBlID0gTnVtYmVyKHZhbHVlKTtcclxuICAgIHN3aXRjaCAodGVtcGxhdGVUeXBlKSB7XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLkRhdGU6IHJldHVybiBDb2x1bW5NZW51VHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5Cb29sZWFuOiByZXR1cm4gQ29sdW1uTWVudVR5cGUuQm9vbGVhbjtcclxuICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuTnVtYmVyOiByZXR1cm4gQ29sdW1uTWVudVR5cGUuTnVtYmVyO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TZWxlY3Q6IHJldHVybiBDb2x1bW5NZW51VHlwZS5TZWxlY3Q7XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLkRhdGU6IHJldHVybiBDb2x1bW5NZW51VHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TdHJpbmc6IHJldHVybiBDb2x1bW5NZW51VHlwZS5TdHJpbmc7XHJcbiAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlRpbWU6IHJldHVybiBDb2x1bW5NZW51VHlwZS5UaW1lO1xyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQodmFsdWU6IENvbHVtbk1lbnVUeXBlLCB0ZW1wbGF0ZVR5cGU6IFRlbXBsYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgLy8gaXQgd2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgdHlwZSBvZiB0aGUgdGVtcGxhdGUgbWF0Y2hlcyB0aGUgY29sdW1uIHR5cGVcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5Cb29sZWFuOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuQm9vbGVhbjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5OdW1iZXI6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5OdW1iZXI7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU2VsZWN0OiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlN0cmluZzogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlN0cmluZztcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5UaW1lOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgdGVtcGxhdGVUeXBlID0gTnVtYmVyKHZhbHVlKTtcclxuICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID0gdGhpcy5nZXRUZW1wbGF0ZVR5cGUodGVtcGxhdGVUeXBlKTtcclxuICAgIHRoaXMuc2VsZWN0ZWRWYWxpZGF0aW9uID0gJyc7XHJcbiAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25SdWxlID0gdGhpcy5zZWxlY3RlZFZhbGlkYXRpb247XHJcbiAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgPSBbXTtcclxuICAgIHRoaXMuaW5wdXRUeXBlID0gMDtcclxuICAgIHRoaXMuc2V0VmFsaWRhdGlvblJ1bGVzKHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlKTtcclxuICAgIHRoaXMub25WYWxpZGF0aW9uQ2hhbmdlKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0VmFsaWRhdGlvblJ1bGVzKHZhbHVlOiBUZW1wbGF0ZVR5cGUpIHtcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSAwOiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy5kYXRlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWxpZGF0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMToge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAyOiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy5udW1iZXI7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbGlkYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAzOiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy50ZXh0O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWxpZGF0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNDoge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJ1bGVzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA1OiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUnVsZXMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDc6IHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SdWxlcyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblZhbGlkYXRpb25DaGFuZ2UoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRWYWxpZGF0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ25vbmUnOiB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnaXMtbm90LWVtcHR5Jzoge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2FmdGVyLWRhdGUnOiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSAzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2JlZm9yZS1kYXRlJzoge1xyXG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gMztcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpcy1lcXVhbC10byc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgPyB0aGlzLmlucHV0VHlwZSA9IDMgOiB0aGlzLmlucHV0VHlwZSA9IDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnaXMtbm90LWVxdWFsLXRvJzoge1xyXG4gICAgICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZSA/IHRoaXMuaW5wdXRUeXBlID0gMyA6IHRoaXMuaW5wdXRUeXBlID0gMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdyYW5nZSc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGUgPyB0aGlzLmlucHV0VHlwZSA9IDQgOiB0aGlzLmlucHV0VHlwZSA9IDI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnZ3JlYXRlci10aGFuJzoge1xyXG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdsZXNzLXRoYW4nOiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHsgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JbnB1dFZhbHVlQ2hhbmdlMSh2YWx1ZTogYW55KSB7XHJcbiAgICAvLyBmaXJzdCBpbnB1dCB2YWx1ZSB3YXMgY2hhbmdlZFxyXG4gICAgaWYgKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdGhlcmUgaXMgbm8gdmFsdWVzIHNhdmVkIHNvIHdlIGNyZWF0ZWQgYSBuZXcgYXJyYXlcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzID0gW3ZhbHVlXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSBzZXQgdGhlIHZhbGlkYXRvciBvbiB0aGUgZmllbGQgYmFzZSBkb24gdGhlIHNlbGVjdGVkIHJ1bGUgYW5kIHNlbGVjdGVkIHZhbHVlXHJcbiAgICB0aGlzLnNldEZpZWxkVmFsaWRhdG9yKCk7XHJcbiAgfVxyXG5cclxuICBvbkRhdGVSYW5nZUNoYW5nZWQodmFsdWU6IERhdGVbXSkge1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzID0gdmFsdWU7XHJcbiAgICAgIC8vIHdlIHNldCB0aGUgdmFsaWRhdG9yIG9uIHRoZSBmaWVsZCBiYXNlIGRvbiB0aGUgc2VsZWN0ZWQgcnVsZSBhbmQgc2VsZWN0ZWQgdmFsdWVcclxuICAgICAgdGhpcy5zZXRGaWVsZFZhbGlkYXRvcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JbnB1dFZhbHVlQ2hhbmdlMih2YWx1ZTogYW55KSB7XHJcbiAgICAvLyBzZWNvbmQgaW5wdXQgdmFsdWUgd2FzIGNoYW5nZWRcclxuICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMV0gPSB2YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gdGhlIGFycmF5IGhhcyBvbmUgdmFsdWUgc28gd2UgYWRkIGl0IGF0IHRoZSBlbmRcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzLnB1c2godmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdGhlcmUgaXMgbm8gdmFsdWVzIHNhdmVkIHNvIHdlIGNyZWF0ZWQgYSBuZXcgYXJyYXlcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzID0gW251bGwsIHZhbHVlXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSBzZXQgdGhlIHZhbGlkYXRvciBvbiB0aGUgZmllbGQgYmFzZSBkb24gdGhlIHNlbGVjdGVkIHJ1bGUgYW5kIHNlbGVjdGVkIHZhbHVlXHJcbiAgICB0aGlzLnNldEZpZWxkVmFsaWRhdG9yKCk7XHJcbiAgfVxyXG5cclxuICBzZXRGaWVsZFZhbGlkYXRvcigpIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkVmFsaWRhdGlvbiA9PT0gJycpIHtcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uUnVsZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdG9ycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdlIHNldCB0aGUgdmFsaWRhdG9yIG9uIHRoZSBmaWVsZCBiYXNlIGRvbiB0aGUgc2VsZWN0ZWQgcnVsZSBhbmQgc2VsZWN0ZWQgdmFsdWVcclxuICAgIHRoaXMuZmllbGQudmFsaWRhdGlvblJ1bGUgPSB0aGlzLnNlbGVjdGVkVmFsaWRhdGlvbjtcclxuICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZFZhbGlkYXRpb24pIHtcclxuICAgICAgY2FzZSAnbm9uZSc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbXTsgLy8gdGhpcyB3aWxsIG5vdCBhcHBseSBhbnkgcnVsZVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2lzLW5vdC1lbXB0eSc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbVmFsaWRhdG9ycy5yZXF1aXJlZF07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnYWZ0ZXItZGF0ZSc6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbYWZ0ZXJEYXRlKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2JlZm9yZS1kYXRlJzoge1xyXG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdG9ycyA9IFtiZWZvcmVEYXRlKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2lzLWVxdWFsLXRvJzoge1xyXG4gICAgICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZSA/IHRoaXMuZmllbGQudmFsaWRhdG9ycyA9IFtpc0VxdWFsVG9EYXRlKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldIDogW2lzRXF1YWxUb051bWJlcih0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpcy1ub3QtZXF1YWwtdG8nOiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlID8gdGhpcy5maWVsZC52YWxpZGF0b3JzID0gW2lzTm90RXF1YWxUb0RhdGUodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV0gOiBbaXNOb3RFcXVhbFRvTnVtYmVyKHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1swXSldO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ3JhbmdlJzoge1xyXG4gICAgICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZSA/IHRoaXMuZmllbGQudmFsaWRhdG9ycyA9IFtyYW5nZURhdGUodGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdLCB0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMV0pXSA6IFtyYW5nZU51bWJlcih0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0sIHRoaXMuZmllbGQudmFsaWRhdGlvblZhbHVlc1sxXSldO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2dyZWF0ZXItdGhhbic6IHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbZ3JlYXRlclRoYW4odGhpcy5maWVsZC52YWxpZGF0aW9uVmFsdWVzWzBdKV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnbGVzcy10aGFuJzoge1xyXG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdG9ycyA9IFtsZXNzVGhhbih0aGlzLmZpZWxkLnZhbGlkYXRpb25WYWx1ZXNbMF0pXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2V0dGluZ1NhdmVkKCkge1xyXG4gICAgdGhpcy5vbkZpZWxkQ2hhbmdlZC5lbWl0KHsgZmllbGQ6IHRoaXMuZmllbGQsIGNvbHVtbk1lbnU6IHRoaXMuZ2V0Q29sdW1uVHlwZSh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZS50b1N0cmluZygpKSB9KTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgaWQ9XCJjb21wYWN0VGFibGVDb2x1bW5Nb3JlXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmVcIiAqbmdJZj1cIiFpc0FkdmFuY2VkQ29uZmlndXJhdGlvblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFycm93LXVwXCI+PC9kaXY+XHJcbiAgICA8IS0tIHJlZ3VsYXIgY29sdW1uIG9wdGlvbnMgLS0+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWwgY21hY3MtbWVudSBjbGFzcz1cImNtYWNzLWNvbnRleHQtbWVudS1jb21wYWN0LXRhYmxlXCIgc3R5bGU9XCJwYWRkaW5nLXRvcDogMnB4OyBtaW4td2lkdGg6IDE1NXB4XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtcy5jb2x1bW5PcHRpb25zXCI+XHJcbiAgICAgICAgICA8bGkgY21hY3Mtc3VibWVudSBbbWVudVdyYXBwZXJDbGFzc05hbWVdPVwiJ2NvbXBhY3QtdGFibGUtbW9yZS1zdWJtZW51LXVsLXdyYXBwZXInXCJcclxuICAgICAgICAgICAgW21lbnVDbGFzc05hbWVdPVwiJ2NvbXBhY3QtdGFibGUtbW9yZS1zdWJtZW51LXVsJ1wiIGNtYWNzQ29udGV4dE1lbnVcclxuICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnN1Yk1lbnUubGVuZ3RoOyBlbHNlIG1lbnVUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiB0aXRsZT5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cInt7aXRlbS5pY29ufX1cIj48L2k+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3tpdGVtLmxhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbXBhY3RUYWJsZUNvbHVtbk1vcmVcIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjbWFjcy1jb250ZXh0LW1lbnUtY29tcGFjdC10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNtYWNzLW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgc3VibWVudSBvZiBpdGVtLnN1Yk1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWQtaXRlbV09XCJpc1NlbGVjdGVkKHN1Ym1lbnUudmFsdWUsIGZpZWxkLmVkaXRUZW1wbGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZmllbGRDaGFuZ2VkKHN1Ym1lbnUudmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwie3tzdWJtZW51Lmljb259fVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3N1Ym1lbnUubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgI21lbnVUZW1wbGF0ZT5cclxuICAgICAgICAgICAgPGxpIGNtYWNzLW1lbnUtaXRlbSAoY2xpY2spPVwiZmllbGRDaGFuZ2VkKGl0ZW0udmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInt7aXRlbS5pY29ufX1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJhZGRpdGlvbmFsLXBhcmFtZXRlcnNcIiAqbmdJZj1cImlzQWR2YW5jZWRDb25maWd1cmF0aW9uXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXJyb3ctdXBcIj48L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY3VzdG9tLW5vZGVcIj5cclxuICAgICAgICA8ZGl2IG56LXJvdz5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjI0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZXBhbmVsLXN1YmhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtcy5hZHZhbmNlZENvbmZpZ3VyYXRpb24ubGFiZWxUeXBlfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Y21hY3Mtc2VsZWN0IFsobmdNb2RlbCldPVwic2VsZWN0ZWRGaWVsZFRlbXBsYXRlXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPGNtYWNzLW9wdGlvbiAqbmdGb3I9XCJsZXQgX2l0ZW0gb2YgdHlwZXNMaXN0XCIgdmFsdWU9XCJ7e19pdGVtLnZhbHVlfX1cIiBsYWJlbD1cInt7X2l0ZW0ubGFiZWx9fVwiPlxyXG4gICAgICAgICAgICAgICAgPC9jbWFjcy1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCIyNFwiICpuZ0lmPVwidmFsaWRhdGlvblJ1bGVzLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlcGFuZWwtc3ViaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5sYWJlbFZhbGlkYXRpb259fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxjbWFjcy1zZWxlY3QgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhbGlkYXRpb25cIiAobmdNb2RlbENoYW5nZSk9XCJvblZhbGlkYXRpb25DaGFuZ2UoKVwiPlxyXG4gICAgICAgICAgICAgICAgPGNtYWNzLW9wdGlvbiAqbmdGb3I9XCJsZXQgcnVsZSBvZiB2YWxpZGF0aW9uUnVsZXNcIiB2YWx1ZT1cInt7cnVsZS52YWx1ZX19XCIgbGFiZWw9XCJ7e3J1bGUubGFiZWx9fVwiPlxyXG4gICAgICAgICAgICAgICAgPC9jbWFjcy1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCIyNFwiICpuZ0lmPVwiaW5wdXRUeXBlID09PSAxXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8Y21hY3MtaW5wdXQtbnVtYmVyIGNsYXNzPVwidmFsaWRhdGlvbi1pbnB1dFwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZTFcIiAob25Nb2RlbENoYW5nZSk9XCJvbklucHV0VmFsdWVDaGFuZ2UxKCRldmVudClcIj5cclxuICAgICAgICAgICAgICA8L2NtYWNzLWlucHV0LW51bWJlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjI0XCIgKm5nSWY9XCJpbnB1dFR5cGUgPT09IDJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxjbWFjcy1pbnB1dC1udW1iZXIgY2xhc3M9XCJ2YWxpZGF0aW9uLWlucHV0XCIgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlMVwiIChvbk1vZGVsQ2hhbmdlKT1cIm9uSW5wdXRWYWx1ZUNoYW5nZTEoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG4gICAgICAgICAgICAgIDxjbWFjcy1pbnB1dC1udW1iZXIgY2xhc3M9XCJ2YWxpZGF0aW9uLWlucHV0XCIgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlMlwiIChvbk1vZGVsQ2hhbmdlKT1cIm9uSW5wdXRWYWx1ZUNoYW5nZTIoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgIDwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIiAqbmdJZj1cImlucHV0VHlwZSA9PT0gM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGNtYWNzLWRhdGUtcGlja2VyIGNsYXNzPVwidmFsaWRhdGlvbi1pbnB1dFwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZTFcIiAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0VmFsdWVDaGFuZ2UxKCRldmVudClcIj5cclxuICAgICAgICAgICAgICA8L2NtYWNzLWRhdGUtcGlja2VyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMjRcIiAqbmdJZj1cImlucHV0VHlwZSA9PT0gNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGNtYWNzLXJhbmdlLXBpY2tlciBjbGFzcz1cInZhbGlkYXRpb24taW5wdXRcIiBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWUxXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25EYXRlUmFuZ2VDaGFuZ2VkKCRldmVudClcIj5cclxuICAgICAgICAgICAgICA8L2NtYWNzLXJhbmdlLXBpY2tlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjI0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiUHJpbWFyeVwiIChjbGljayk9XCJvblNldHRpbmdTYXZlZCgpXCI+e3tsYWJlbFNhdmV9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+Il19