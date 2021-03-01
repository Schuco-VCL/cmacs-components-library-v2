import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Host, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { zoomMotion } from 'ng-zorro-antd/core/animation';
import * as i0 from "@angular/core";
import * as i1 from "./cmacs-select.service";
import * as i2 from "ng-zorro-antd/core/no-animation";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "./cmacs-select-unselectable.directive";
import * as i6 from "ng-zorro-antd/core/transition-patch";
const _c0 = ["inputElement"];
const _c1 = ["inputElementCustom"];
const _c2 = ["cmacs-select-top-control", ""];
function CmacsSelectTopControlComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 9, 10);
    i0.ɵɵlistener("compositionstart", function CmacsSelectTopControlComponent_ng_template_0_Template_input_compositionstart_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.isComposing = true; })("compositionend", function CmacsSelectTopControlComponent_ng_template_0_Template_input_compositionend_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.isComposing = false; })("input", function CmacsSelectTopControlComponent_ng_template_0_Template_input_input_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.updateWidth(); })("ngModelChange", function CmacsSelectTopControlComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.setInputValue($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-select-selection-not-empty", ctx_r1.getSelectedValues().length && !ctx_r1.tagsOut);
    i0.ɵɵproperty("ngStyle", ctx_r1.showCustomSearchStyle)("ngModel", ctx_r1.inputValue)("disabled", ctx_r1.nzSelectService.disabled);
} }
function CmacsSelectTopControlComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 9, 11);
    i0.ɵɵlistener("compositionstart", function CmacsSelectTopControlComponent_ng_template_2_Template_input_compositionstart_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.isComposingCustom = true; })("compositionend", function CmacsSelectTopControlComponent_ng_template_2_Template_input_compositionend_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.isComposingCustom = false; })("input", function CmacsSelectTopControlComponent_ng_template_2_Template_input_input_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.updateWidthCustom(); })("ngModelChange", function CmacsSelectTopControlComponent_ng_template_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.setInputValueCustom($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-select-selection-not-empty", ctx_r3.getSelectedValues().length);
    i0.ɵɵproperty("ngStyle", ctx_r3.showCustomSearchStyle)("ngModel", ctx_r3.inputValueEditableMode)("disabled", ctx_r3.nzSelectService.disabled);
} }
function CmacsSelectTopControlComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵelementEnd();
} }
function CmacsSelectTopControlComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("display", ctx_r5.placeHolderDisplay);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r5.nzPlaceHolder);
} }
function CmacsSelectTopControlComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r24.selectedValueStyle);
    i0.ɵɵattribute("title", ctx_r24.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r24.nzSelectService.listOfCachedSelectedOption[0].nzLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r24.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r24.nzSelectService.listOfCachedSelectedOption[0].nzLabel, " ");
} }
function CmacsSelectTopControlComponent_ng_container_7_div_2_ng_template_2_Template(rf, ctx) { }
function CmacsSelectTopControlComponent_ng_container_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_container_7_div_2_ng_template_2_Template, 0, 0, "ng-template", 20);
    i0.ɵɵelementStart(3, "span", 21);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵstyleProp("display", ctx_r25.nzOpen || ctx_r25.nzSelectService.listOfCachedSelectedOption.length ? "block" : "none");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r25.inputValue, "\u00A0");
} }
function CmacsSelectTopControlComponent_ng_container_7_div_3_ng_template_2_Template(rf, ctx) { }
function CmacsSelectTopControlComponent_ng_container_7_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_container_7_div_3_ng_template_2_Template, 0, 0, "ng-template", 20);
    i0.ɵɵelementStart(3, "span", 21);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵstyleProp("display", ctx_r26.nzOpen ? "block" : "none");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r26.inputValue, "\u00A0");
} }
function CmacsSelectTopControlComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ng_container_7_div_1_Template, 2, 3, "div", 15);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_container_7_div_2_Template, 5, 4, "div", 16);
    i0.ɵɵtemplate(3, CmacsSelectTopControlComponent_ng_container_7_div_3_Template, 5, 4, "div", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.userDropdown && ctx_r6.nzSelectService.listOfCachedSelectedOption.length && ctx_r6.nzSelectService.listOfSelectedValue.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.showCmacsSearch);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.cmacsEditable);
} }
function CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 29);
} }
function CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵlistener("mousedown", function CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r39); const option_r33 = i0.ɵɵnextContext().$implicit; const ctx_r37 = i0.ɵɵnextContext(3); return ctx_r37.removeSelectedValue(option_r33, $event); });
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_i_1_Template, 1, 0, "i", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r34.nzRemoveIcon)("ngIfElse", ctx_r34.nzRemoveIcon);
} }
function CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 24);
    i0.ɵɵelementStart(2, "div", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_Template, 2, 2, "span", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r33 = ctx.$implicit;
    const ctx_r31 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-select-selection__choice__disabled", option_r33.nzDisabled);
    i0.ɵɵproperty("@zoomMotion", undefined)("nzNoAnimation", ctx_r31.noAnimation == null ? null : ctx_r31.noAnimation.nzNoAnimation);
    i0.ɵɵattribute("title", option_r33.nzLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r33.nzLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !option_r33.nzDisabled);
} }
function CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_2_ng_template_1_Template(rf, ctx) { }
const _c3 = function (a0) { return { $implicit: a0 }; };
function CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 30);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r40.nzMaxTagPlaceholder)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c3, i0.ɵɵpipeBind2(2, 2, ctx_r40.nzSelectService.listOfSelectedValue, ctx_r40.nzMaxTagCount)));
} }
function CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r41 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" + ", ctx_r41.nzSelectService.listOfCachedSelectedOption.length - ctx_r41.nzMaxTagCount, " ... ");
} }
function CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 24);
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_2_Template, 3, 7, "ng-container", 5);
    i0.ɵɵtemplate(3, CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_3_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("@zoomMotion", undefined)("nzNoAnimation", ctx_r32.noAnimation == null ? null : ctx_r32.noAnimation.nzNoAnimation);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r32.nzMaxTagPlaceholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r32.nzMaxTagPlaceholder);
} }
function CmacsSelectTopControlComponent_ul_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_Template, 5, 7, "ng-container", 22);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵtemplate(3, CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_Template, 4, 4, "li", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(2, 3, ctx_r29.nzSelectService.listOfCachedSelectedOption, 0, ctx_r29.nzMaxTagCount))("ngForTrackBy", ctx_r29.trackValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r29.nzSelectService.listOfCachedSelectedOption.length > ctx_r29.nzMaxTagCount);
} }
function CmacsSelectTopControlComponent_ul_8_ng_template_3_Template(rf, ctx) { }
function CmacsSelectTopControlComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_8_ng_container_1_Template, 4, 7, "ng-container", 5);
    i0.ɵɵelementStart(2, "li", 18);
    i0.ɵɵtemplate(3, CmacsSelectTopControlComponent_ul_8_ng_template_3_Template, 0, 0, "ng-template", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r7.tagsOut && !ctx_r7.userDropdown);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsSelectTopControlComponent_span_9_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 33);
} }
function CmacsSelectTopControlComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵlistener("mousedown", function CmacsSelectTopControlComponent_span_9_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsSelectTopControlComponent_span_9_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(); return ctx_r45.onClearSelection($event); });
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_span_9_i_1_Template, 1, 0, "i", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-select-selection__clear-search", ctx_r8.showCustomSearch);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r8.nzClearIcon)("ngIfElse", ctx_r8.nzClearIcon);
} }
function CmacsSelectTopControlComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "i", 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-selected-nodes", ctx_r9.getSelectedValues().length);
} }
function CmacsSelectTopControlComponent_ng_template_11_span_0_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 40);
} }
function CmacsSelectTopControlComponent_ng_template_11_span_0_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function CmacsSelectTopControlComponent_ng_template_11_span_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsSelectTopControlComponent_ng_template_11_span_0_ng_template_2_i_0_Template, 1, 0, "i", 41);
} if (rf & 2) {
    const ctx_r50 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", !ctx_r50.nzSuffixIcon)("ngIfElse", ctx_r50.nzSuffixIcon);
} }
function CmacsSelectTopControlComponent_ng_template_11_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 37);
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ng_template_11_span_0_i_1_Template, 1, 0, "i", 38);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_template_11_span_0_ng_template_2_Template, 1, 2, "ng-template", null, 39, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r49 = i0.ɵɵreference(3);
    const ctx_r47 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-select-action", ctx_r47.action);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r47.nzLoading)("ngIfElse", _r49);
} }
function CmacsSelectTopControlComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsSelectTopControlComponent_ng_template_11_span_0_Template, 4, 4, "span", 36);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r11.nzShowArrow);
} }
export class CmacsSelectTopControlComponent {
    constructor(renderer, nzSelectService, cdr, noAnimation) {
        this.renderer = renderer;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.searchValue = '';
        this.isComposing = false;
        this.isComposingCustom = false;
        this.destroy$ = new Subject();
        this.nzShowSearch = false;
        this.showCustomSearch = false;
        // tslint:disable-next-line: member-ordering
        this.showCmacsSearch = false;
        this.tagsOut = false;
        this.nzOpen = false;
        this.cmacsOpen = false;
        this.cmacsEditable = false;
        this.action = false;
        this.nzAllowClear = false;
        this.nzShowArrow = true;
        this.nzLoading = false;
        this.userDropdown = false;
        this.nzTokenSeparators = [];
    }
    onClearSelection(e) {
        e.stopPropagation();
        this.nzSelectService.updateListOfSelectedValue([], true);
        if (this.nzSelectService.isTagsSingleSelectMode) {
            this.setInputValue('');
            this.setInputValueCustom('');
        }
    }
    getSelectedValues() {
        return this.nzSelectService.listOfSelectedValue;
    }
    setInputValue(value) {
        if (this.inputElement) {
            this.inputElement.nativeElement.value = value;
        }
        this.inputValue = value;
        this.updateWidth();
        this.nzSelectService.updateSearchValue(value);
        this.nzSelectService.tokenSeparate(this.inputValue, this.nzTokenSeparators);
    }
    setInputValueCustom(value) {
        if (this.inputElementCustom) {
            this.inputElementCustom.nativeElement.value = value;
        }
        this.inputValueEditableMode = value;
        this.updateWidthCustom();
        this.nzSelectService.updateEditedValue(value);
    }
    get placeHolderDisplay() {
        if (this.cmacsEditable) {
            return this.inputValueEditableMode || this.isComposingCustom || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
        }
        if (this.userDropdown) {
            return this.inputValue || this.isComposing ? 'none' : 'block';
        }
        return this.inputValue || this.inputValueEditableMode || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
    }
    get selectedValueStyle() {
        let showSelectedValue = false;
        let opacity = 1;
        if (!this.nzShowSearch && !this.showCmacsSearch) {
            showSelectedValue = true;
        }
        else {
            if (this.nzOpen) {
                if (this.cmacsEditable) {
                    showSelectedValue = !(this.isComposingCustom || this.inputValueEditableMode);
                }
                else {
                    showSelectedValue = !(this.inputValue || this.isComposing);
                }
                if (showSelectedValue) {
                    opacity = 1;
                }
            }
            else {
                showSelectedValue = true;
                if (this.cmacsEditable) {
                    showSelectedValue = !(this.isComposingCustom || this.inputValueEditableMode);
                }
            }
        }
        if (this.nzSelectService.isTagsSingleSelectMode && this.inputValue) {
            showSelectedValue = false;
        }
        if (this.nzSelectService.isTagsSingleSelectMode && !this.inputValue) {
            opacity = 1;
        }
        return {
            display: showSelectedValue ? 'block' : 'none',
            'margin-left.px': this.showCustomSearch ? '15' : '0',
            opacity: `${opacity}`
        };
    }
    get showCustomSearchStyle() {
        return {
            'margin-left.px': this.showCustomSearch ? '15' : '0',
            'padding-left.px': this.userDropdown ? '0' : null
        };
    }
    // tslint:disable-next-line:no-any
    trackValue(_index, option) {
        return option.nzValue;
    }
    updateWidth() {
        if (this.nzSelectService.isMultipleOrTags && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', `${this.inputElement.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    }
    updateWidthCustom() {
        if (this.nzSelectService.isMultipleOrTags && this.inputElementCustom) {
            if (this.inputValueEditableMode || this.isComposingCustom) {
                this.renderer.setStyle(this.inputElementCustom.nativeElement, 'width', `${this.inputElementCustom.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElementCustom.nativeElement, 'width');
            }
        }
    }
    removeSelectedValue(option, e) {
        this.nzSelectService.removeValueFormSelected(option);
        e.stopPropagation();
    }
    ngOnInit() {
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe(open => {
            if (this.inputElement && open) {
                setTimeout(() => this.inputElement.nativeElement.focus());
            }
            if (this.inputElement && this.cmacsOpen) {
                setTimeout(() => this.inputElement.nativeElement.focus());
            }
            if (this.inputElementCustom && open) {
                setTimeout(() => this.inputElementCustom.nativeElement.focus());
            }
            if (this.inputElementCustom && this.cmacsOpen) {
                setTimeout(() => this.inputElementCustom.nativeElement.focus());
            }
        });
        this.nzSelectService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            if (!(this.cmacsOpen || this.nzSelectService.isTagsSingleSelectMode)) {
                this.setInputValue('');
                this.setInputValueCustom('');
            }
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnChanges(changes) {
        if (changes.searchValue && changes.searchValue.currentValue !== undefined) {
            this.setInputValue(changes.searchValue.currentValue);
        }
    }
}
CmacsSelectTopControlComponent.ɵfac = function CmacsSelectTopControlComponent_Factory(t) { return new (t || CmacsSelectTopControlComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.CmacsSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); };
CmacsSelectTopControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSelectTopControlComponent, selectors: [["", "cmacs-select-top-control", ""]], viewQuery: function CmacsSelectTopControlComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
        i0.ɵɵviewQuery(_c1, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElementCustom = _t.first);
    } }, inputs: { searchValue: "searchValue", nzShowSearch: "nzShowSearch", showCustomSearch: "showCustomSearch", showCmacsSearch: "showCmacsSearch", nzPlaceHolder: "nzPlaceHolder", tagsOut: "tagsOut", nzOpen: "nzOpen", cmacsOpen: "cmacsOpen", cmacsEditable: "cmacsEditable", action: "action", nzMaxTagCount: "nzMaxTagCount", nzAllowClear: "nzAllowClear", nzShowArrow: "nzShowArrow", nzLoading: "nzLoading", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", userDropdown: "userDropdown", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzTokenSeparators: "nzTokenSeparators" }, exportAs: ["cmacsSelectTopControl"], features: [i0.ɵɵNgOnChangesFeature], attrs: _c2, decls: 13, vars: 7, consts: [["inputTemplate", ""], ["customInputTemplate", ""], ["class", "ant-select-arrow cmacs-search-search-icon", "cmacs-select-unselectable", "", 4, "ngIf"], [1, "ant-select-selection__rendered"], ["cmacs-select-unselectable", "", "class", "ant-select-selection__placeholder", 3, "display", 4, "ngIf"], [4, "ngIf"], ["class", "ant-select-selection__clear", "cmacs-select-unselectable", "", 3, "ant-select-selection__clear-search", "mousedown", "click", 4, "ngIf"], ["class", "ant-select-arrow cmacs-search-arrow-right", "cmacs-select-unselectable", "", 3, "cmacs-selected-nodes", 4, "ngIf", "ngIfElse"], ["notCustomArrow", ""], ["autocomplete", "something-new", 1, "ant-select-search__field", 3, "ngStyle", "ngModel", "disabled", "compositionstart", "compositionend", "input", "ngModelChange"], ["inputElement", ""], ["inputElementCustom", ""], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-search-search-icon"], [1, "iconCreation-Search"], ["cmacs-select-unselectable", "", 1, "ant-select-selection__placeholder"], ["class", "ant-select-selection-selected-value", 3, "ngStyle", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", 4, "ngIf"], [1, "ant-select-selection-selected-value", 3, "ngStyle"], [1, "ant-select-search", "ant-select-search--inline"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [1, "ant-select-search__field__mirror"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 3, "nzNoAnimation", 4, "ngIf"], [1, "ant-select-selection__choice", 3, "nzNoAnimation"], [1, "ant-select-selection__choice__content"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "type", "close", "class", "ant-select-remove-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "type", "close", 1, "ant-select-remove-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cmacs-select-unselectable", "", 1, "ant-select-selection__clear", 3, "mousedown", "click"], ["nz-icon", "", "type", "close-circle", "theme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "type", "close-circle", "theme", "fill", 1, "ant-select-close-icon"], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-search-arrow-right"], [1, "iconArrowLarge-Arrow-Right"], ["class", "ant-select-arrow cmacs-dropdown-arrow", "cmacs-select-unselectable", "", 3, "cmacs-select-action", 4, "ngIf"], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-dropdown-arrow"], ["nz-icon", "", "type", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "type", "loading"], ["nz-icon", "", "type", "down", "class", "ant-select-arrow-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "type", "down", 1, "ant-select-arrow-icon"]], template: function CmacsSelectTopControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsSelectTopControlComponent_ng_template_0_Template, 2, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_template_2_Template, 2, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, CmacsSelectTopControlComponent_span_4_Template, 2, 0, "span", 2);
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵtemplate(6, CmacsSelectTopControlComponent_div_6_Template, 2, 3, "div", 4);
        i0.ɵɵtemplate(7, CmacsSelectTopControlComponent_ng_container_7_Template, 4, 3, "ng-container", 5);
        i0.ɵɵtemplate(8, CmacsSelectTopControlComponent_ul_8_Template, 4, 2, "ul", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, CmacsSelectTopControlComponent_span_9_Template, 2, 4, "span", 6);
        i0.ɵɵtemplate(10, CmacsSelectTopControlComponent_span_10_Template, 2, 2, "span", 7);
        i0.ɵɵtemplate(11, CmacsSelectTopControlComponent_ng_template_11_Template, 1, 1, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r10 = i0.ɵɵreference(12);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.showCustomSearch);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.nzPlaceHolder);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzSelectService.isSingleMode || ctx.nzSelectService.isTagsSingleSelectMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzAllowClear && ctx.nzSelectService.listOfSelectedValue.length && !ctx.userDropdown);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCustomSearch)("ngIfElse", _r10);
    } }, directives: [i3.NgIf, i4.DefaultValueAccessor, i3.NgStyle, i4.NgControlStatus, i4.NgModel, i5.CmacsSelectUnselectableDirective, i3.NgTemplateOutlet, i3.NgForOf, i6.ɵNzTransitionPatchDirective], pipes: [i3.SlicePipe], styles: [".cmacs-select-action{border-left:1px solid #dee0e5}.ant-select-selection__rendered{margin-right:35px}.ant-select-selection--multiple .ant-select-arrow.cmacs-select-action:hover{padding:8px 10px 8px 11px;right:1px;top:7px!important}.ant-select-selection__rendered:hover .cmacs-select-action,.cmacs-select-action:hover{background-color:#f6f7fb}.cmacs-search-search-icon{left:11px;font-size:16px;top:14px}.cmacs-search-arrow-right,.cmacs-search-search-icon{right:unset;z-index:unset;opacity:1!important;margin-left:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cmacs-search-arrow-right{font-size:27px;top:7px!important;left:calc(100% - 43px);border-left:1px solid #dee0e5;padding:0 5px}cmacs-select:not(.ant-select-disabled) .cmacs-dropdown-arrow{cursor:pointer}cmacs-select .cmacs-dropdown-arrow{right:0;top:6px;padding:9px 11px}.ant-select-selection .ant-select-selection__clear{right:10px;top:12px!important;line-height:1.5}.ant-select-selection--multiple .ant-select-arrow,.ant-select-selection--multiple .ant-select-selection__clear{top:6px}.ant-select-selection:hover .cmacs-selected-nodes .iconArrowLarge-Arrow-Right:before{opacity:0}.ant-select-selection__clear-search{right:15px}.ant-select-search--inline .ant-select-search__field{max-width:94%}.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field.cmacs-select-selection-not-empty{padding-left:0!important}.ant-select-selection--single{height:34px}.ant-select-selection--single .ant-select-selection__rendered{line-height:32px}.cmacs-invisible{opacity:0}"], encapsulation: 2, data: { animation: [zoomMotion] }, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsSelectTopControlComponent.prototype, "userDropdown", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSelectTopControlComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-select-top-control]',
                exportAs: 'cmacsSelectTopControl',
                preserveWhitespaces: false,
                animations: [zoomMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './cmacs-select-top-control.component.html',
                styleUrls: ['./cmacs-select-top-control.component.css']
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.CmacsSelectService }, { type: i0.ChangeDetectorRef }, { type: i2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { searchValue: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement']
        }], inputElementCustom: [{
            type: ViewChild,
            args: ['inputElementCustom']
        }], nzShowSearch: [{
            type: Input
        }], showCustomSearch: [{
            type: Input
        }], showCmacsSearch: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], tagsOut: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], cmacsOpen: [{
            type: Input
        }], cmacsEditable: [{
            type: Input
        }], action: [{
            type: Input
        }], nzMaxTagCount: [{
            type: Input
        }], nzAllowClear: [{
            type: Input
        }], nzShowArrow: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzSuffixIcon: [{
            type: Input
        }], nzClearIcon: [{
            type: Input
        }], nzRemoveIcon: [{
            type: Input
        }], userDropdown: [{
            type: Input
        }], nzMaxTagPlaceholder: [{
            type: Input
        }], nzTokenSeparators: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxJQUFJLEVBQ0osS0FBSyxFQUdMLFFBQVEsRUFHUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNwQnhELG9DQUlDO0lBSEMsZ09BQWtDLElBQUksSUFBQywrTUFBaUMsS0FBSyxJQUF0QyxnTUFBQSw4TkFBQTtJQUR6QyxpQkFJQzs7O0lBRE0sd0dBQWlGO0lBSHRDLHNEQUFpQyw4QkFBQSw2Q0FBQTs7OztJQVFuRixvQ0FHNkU7SUFGdEUsc09BQXdDLElBQUksSUFBQyxxTkFBdUMsS0FBSyxJQUE1QyxzTUFBQSxvT0FBQTtJQURwRCxpQkFHNkU7OztJQUF0RSxxRkFBcUU7SUFIcEIsc0RBQWlDLDBDQUFBLDZDQUFBOzs7SUFNM0YsZ0NBQzJC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Qy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxXQUFXLEVBQUUsMkNBQTJDO2dCQUN4RCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQzthQUN4RDs7c0JBaUtJLElBQUk7O3NCQUFJLFFBQVE7d0JBN0pWLFdBQVc7a0JBQW5CLEtBQUs7WUFJcUIsWUFBWTtrQkFBdEMsU0FBUzttQkFBQyxjQUFjO1lBQ1Esa0JBQWtCO2tCQUFsRCxTQUFTO21CQUFDLG9CQUFvQjtZQUN0QixZQUFZO2tCQUFwQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBRUcsZUFBZTtrQkFBdkIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDbUIsWUFBWTtrQkFBcEMsS0FBSztZQUVHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCwgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ21hY3NTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1zZWxlY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IHpvb21Nb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1zZWxlY3QtdG9wLWNvbnRyb2xdJyxcclxuICBleHBvcnRBczogJ2NtYWNzU2VsZWN0VG9wQ29udHJvbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9uczogW3pvb21Nb3Rpb25dLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgaW5wdXRWYWx1ZTogc3RyaW5nO1xyXG4gIGlucHV0VmFsdWVFZGl0YWJsZU1vZGU6IHN0cmluZztcclxuICBASW5wdXQoKSBzZWFyY2hWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgaXNDb21wb3NpbmcgPSBmYWxzZTtcclxuICBpc0NvbXBvc2luZ0N1c3RvbSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnRDdXN0b20nKSBpbnB1dEVsZW1lbnRDdXN0b206IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgbnpTaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd0N1c3RvbVNlYXJjaCA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgc2hvd0NtYWNzU2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRhZ3NPdXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek9wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBjbWFjc09wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBjbWFjc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYWN0aW9uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpNYXhUYWdDb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56QWxsb3dDbGVhciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56U2hvd0Fycm93ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuekxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelN1ZmZpeEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56Q2xlYXJJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelJlbW92ZUljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB1c2VyRHJvcGRvd24gPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgbnpNYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueVtdIH0+O1xyXG4gIEBJbnB1dCgpIG56VG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBvbkNsZWFyU2VsZWN0aW9uKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFtdLCB0cnVlKTtcclxuICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlKSB7XHJcbiAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgnJyk7XHJcbiAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZUN1c3RvbSgnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZFZhbHVlcygpe1xyXG4gICAgcmV0dXJuIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZVNlYXJjaFZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnRva2VuU2VwYXJhdGUodGhpcy5pbnB1dFZhbHVlLCB0aGlzLm56VG9rZW5TZXBhcmF0b3JzKTtcclxuICB9XHJcblxyXG4gIHNldElucHV0VmFsdWVDdXN0b20odmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVXaWR0aEN1c3RvbSgpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlRWRpdGVkVmFsdWUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYWNlSG9sZGVyRGlzcGxheSgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuY21hY3NFZGl0YWJsZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlRWRpdGFibGVNb2RlIHx8IHRoaXMuaXNDb21wb3NpbmdDdXN0b20gfHwgdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudXNlckRyb3Bkb3duKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZSB8fCB0aGlzLmlzQ29tcG9zaW5nIHx8IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZFZhbHVlU3R5bGUoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XHJcbiAgICBsZXQgc2hvd1NlbGVjdGVkVmFsdWUgPSBmYWxzZTtcclxuICAgIGxldCBvcGFjaXR5ID0gMTtcclxuICAgIGlmICghdGhpcy5uelNob3dTZWFyY2ggJiYgIXRoaXMuc2hvd0NtYWNzU2VhcmNoKSB7XHJcbiAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLm56T3Blbikge1xyXG4gICAgICAgIGlmICh0aGlzLmNtYWNzRWRpdGFibGUpIHtcclxuICAgICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlzQ29tcG9zaW5nQ3VzdG9tIHx8IHRoaXMuaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG93U2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5jbWFjc0VkaXRhYmxlKSB7XHJcbiAgICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pc0NvbXBvc2luZ0N1c3RvbSB8fCB0aGlzLmlucHV0VmFsdWVFZGl0YWJsZU1vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlICYmIHRoaXMuaW5wdXRWYWx1ZSkge1xyXG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlICYmICF0aGlzLmlucHV0VmFsdWUpIHtcclxuICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGlzcGxheTogc2hvd1NlbGVjdGVkVmFsdWUgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgICAnbWFyZ2luLWxlZnQucHgnOiB0aGlzLnNob3dDdXN0b21TZWFyY2ggPyAnMTUnIDogJzAnLFxyXG4gICAgICBvcGFjaXR5OiBgJHtvcGFjaXR5fWBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd0N1c3RvbVNlYXJjaFN0eWxlKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgJ21hcmdpbi1sZWZ0LnB4JzogdGhpcy5zaG93Q3VzdG9tU2VhcmNoID8gJzE1JyA6ICcwJyxcclxuICAgICAgJ3BhZGRpbmctbGVmdC5weCc6IHRoaXMudXNlckRyb3Bkb3duID8gJzAnIDogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogYW55IHtcclxuICAgIHJldHVybiBvcHRpb24ubnpWYWx1ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVdpZHRoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3MgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICAgYCR7dGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aH1weGBcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVdpZHRoQ3VzdG9tKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3MgJiYgdGhpcy5pbnB1dEVsZW1lbnRDdXN0b20pIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZSB8fCB0aGlzLmlzQ29tcG9zaW5nQ3VzdG9tKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICAgYCR7dGhpcy5pbnB1dEVsZW1lbnRDdXN0b20ubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aH1weGBcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dEVsZW1lbnRDdXN0b20ubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGVkVmFsdWUob3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCwgZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQob3B0aW9uKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyBuelNlbGVjdFNlcnZpY2U6IENtYWNzU2VsZWN0U2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5vcGVuJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG9wZW4gPT4ge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiYgb3Blbikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5jbWFjc09wZW4pIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tICYmIG9wZW4pIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tICYmIHRoaXMuY21hY3NPcGVuKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlucHV0RWxlbWVudEN1c3RvbS5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNsZWFySW5wdXQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBpZiAoISh0aGlzLmNtYWNzT3BlbiB8fCB0aGlzLm56U2VsZWN0U2VydmljZS5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlKSkge1xyXG4gICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgnJyk7XHJcbiAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlQ3VzdG9tKCcnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgIGlmIChjaGFuZ2VzLnNlYXJjaFZhbHVlICYmIGNoYW5nZXMuc2VhcmNoVmFsdWUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKGNoYW5nZXMuc2VhcmNoVmFsdWUuY3VycmVudFZhbHVlKTtcclxuICAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZSAjaW5wdXRUZW1wbGF0ZT5cclxuICA8aW5wdXQgI2lucHV0RWxlbWVudCBhdXRvY29tcGxldGU9XCJzb21ldGhpbmctbmV3XCIgW25nU3R5bGVdPVwic2hvd0N1c3RvbVNlYXJjaFN0eWxlXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRcIlxyXG4gICAgKGNvbXBvc2l0aW9uc3RhcnQpPVwiaXNDb21wb3NpbmcgPSB0cnVlXCIgKGNvbXBvc2l0aW9uZW5kKT1cImlzQ29tcG9zaW5nID0gZmFsc2VcIiAoaW5wdXQpPVwidXBkYXRlV2lkdGgoKVwiXHJcbiAgICBbbmdNb2RlbF09XCJpbnB1dFZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwic2V0SW5wdXRWYWx1ZSgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cIm56U2VsZWN0U2VydmljZS5kaXNhYmxlZFwiXHJcbiAgICAgICAgIFtjbGFzcy5jbWFjcy1zZWxlY3Qtc2VsZWN0aW9uLW5vdC1lbXB0eV09XCJnZXRTZWxlY3RlZFZhbHVlcygpLmxlbmd0aCAmJiAhdGFnc091dFwiXHJcbiAgPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNjdXN0b21JbnB1dFRlbXBsYXRlPlxyXG4gIDxpbnB1dCAjaW5wdXRFbGVtZW50Q3VzdG9tIGF1dG9jb21wbGV0ZT1cInNvbWV0aGluZy1uZXdcIiBbbmdTdHlsZV09XCJzaG93Q3VzdG9tU2VhcmNoU3R5bGVcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZFwiXHJcbiAgICAgICAgIChjb21wb3NpdGlvbnN0YXJ0KT1cImlzQ29tcG9zaW5nQ3VzdG9tID0gdHJ1ZVwiIChjb21wb3NpdGlvbmVuZCk9XCJpc0NvbXBvc2luZ0N1c3RvbSA9IGZhbHNlXCIgKGlucHV0KT1cInVwZGF0ZVdpZHRoQ3VzdG9tKClcIlxyXG4gICAgICAgICBbbmdNb2RlbF09XCJpbnB1dFZhbHVlRWRpdGFibGVNb2RlXCIgKG5nTW9kZWxDaGFuZ2UpPVwic2V0SW5wdXRWYWx1ZUN1c3RvbSgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cIm56U2VsZWN0U2VydmljZS5kaXNhYmxlZFwiXHJcbiAgICAgICAgIFtjbGFzcy5jbWFjcy1zZWxlY3Qtc2VsZWN0aW9uLW5vdC1lbXB0eV09XCJnZXRTZWxlY3RlZFZhbHVlcygpLmxlbmd0aFwiPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LWFycm93IGNtYWNzLXNlYXJjaC1zZWFyY2gtaWNvblwiIGNtYWNzLXNlbGVjdC11bnNlbGVjdGFibGVcclxuICAqbmdJZj1cInNob3dDdXN0b21TZWFyY2hcIj5cclxuICA8aSBjbGFzcz1cImljb25DcmVhdGlvbi1TZWFyY2hcIj48L2k+XHJcbjwvc3Bhbj5cclxuPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZFwiPlxyXG4gIDxkaXYgKm5nSWY9XCJuelBsYWNlSG9sZGVyXCIgY21hY3Mtc2VsZWN0LXVuc2VsZWN0YWJsZSBbc3R5bGUuZGlzcGxheV09XCJwbGFjZUhvbGRlckRpc3BsYXlcIlxyXG4gICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fcGxhY2Vob2xkZXJcIj57eyBuelBsYWNlSG9sZGVyIH19PC9kaXY+XHJcbiAgPCEtLXNpbmdsZSBtb2RlLS0+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56U2VsZWN0U2VydmljZS5pc1NpbmdsZU1vZGUgfHwgbnpTZWxlY3RTZXJ2aWNlLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGVcIj5cclxuICAgIDwhLS1zZWxlY3RlZCBsYWJlbC0tPlxyXG4gICAgPGRpdiAqbmdJZj1cIiF1c2VyRHJvcGRvd24gJiYgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCAmJiBuelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGhcIlxyXG4gICAgICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLXNlbGVjdGVkLXZhbHVlXCIgW2F0dHIudGl0bGVdPVwibnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uWzBdPy5uekxhYmVsXCJcclxuICAgICAgICAgW25nU3R5bGVdPVwic2VsZWN0ZWRWYWx1ZVN0eWxlXCI+XHJcbiAgICAgIHt7IG56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvblswXT8ubnpMYWJlbCB9fVxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tc2hvdyBzZWFyY2gtLT5cclxuICAgIDxkaXYgKm5nSWY9XCJzaG93Q21hY3NTZWFyY2hcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoIGFudC1zZWxlY3Qtc2VhcmNoLS1pbmxpbmVcIlxyXG4gICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJuek9wZW4gfHwgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCA/ICdibG9jaycgOiAnbm9uZSdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fd3JhcFwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpbnB1dFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fbWlycm9yXCI+e3tpbnB1dFZhbHVlfX0mbmJzcDs8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tc2hvdyBjdXN0b20gc2VhcmNoIGVkaXRhYmxlIG1vZGUtLT5cclxuICAgIDxkaXYgKm5nSWY9XCJjbWFjc0VkaXRhYmxlXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaCBhbnQtc2VsZWN0LXNlYXJjaC0taW5saW5lXCJcclxuICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwibnpPcGVuID8gJ2Jsb2NrJyA6ICdub25lJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkX193cmFwXCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbUlucHV0VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkX19taXJyb3JcIj57e2lucHV0VmFsdWV9fSZuYnNwOzwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8IS0tbXVsdGlwbGUgb3IgdGFncyBtb2RlLS0+XHJcbiAgPHVsICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3NcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdGFnc091dCAmJiAhdXNlckRyb3Bkb3duXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbiB8IHNsaWNlOiAwIDogbnpNYXhUYWdDb3VudDt0cmFja0J5OnRyYWNrVmFsdWU7XCI+XHJcbiAgICAgICAgPGxpIFtAem9vbU1vdGlvbl0gW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIiBbYXR0ci50aXRsZV09XCJvcHRpb24ubnpMYWJlbFwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19kaXNhYmxlZF09XCJvcHRpb24ubnpEaXNhYmxlZFwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX2NvbnRlbnRcIj57eyBvcHRpb24ubnpMYWJlbCB9fTwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCIhb3B0aW9uLm56RGlzYWJsZWRcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCIgKGNsaWNrKT1cInJlbW92ZVNlbGVjdGVkVmFsdWUob3B0aW9uLCAkZXZlbnQpXCI+XHJcbiAgICAgICAgICA8aSBuei1pY29uIHR5cGU9XCJjbG9zZVwiIGNsYXNzPVwiYW50LXNlbGVjdC1yZW1vdmUtaWNvblwiICpuZ0lmPVwiIW56UmVtb3ZlSWNvbjsgZWxzZSBuelJlbW92ZUljb25cIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bGkgKm5nSWY9XCJuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoID4gbnpNYXhUYWdDb3VudFwiIFtAem9vbU1vdGlvbl1cclxuICAgICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuek1heFRhZ1BsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuek1heFRhZ1BsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWUgfCBzbGljZTogbnpNYXhUYWdDb3VudH1cIj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuek1heFRhZ1BsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICsge3sgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCAtIG56TWF4VGFnQ291bnQgfX0gLi4uXHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPGxpIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2ggYW50LXNlbGVjdC1zZWFyY2gtLWlubGluZVwiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaW5wdXRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvZGl2PlxyXG48c3BhbiAqbmdJZj1cIm56QWxsb3dDbGVhciAmJiBuelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggJiYgIXVzZXJEcm9wZG93blwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2NsZWFyXCJcclxuICAgICAgW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19jbGVhci1zZWFyY2hdPVwic2hvd0N1c3RvbVNlYXJjaFwiXHJcbiAgY21hY3Mtc2VsZWN0LXVuc2VsZWN0YWJsZSAobW91c2Vkb3duKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCIgKGNsaWNrKT1cIm9uQ2xlYXJTZWxlY3Rpb24oJGV2ZW50KVwiPlxyXG4gIDxpIG56LWljb24gdHlwZT1cImNsb3NlLWNpcmNsZVwiIHRoZW1lPVwiZmlsbFwiICpuZ0lmPVwiIW56Q2xlYXJJY29uOyBlbHNlIG56Q2xlYXJJY29uXCIgY2xhc3M9XCJhbnQtc2VsZWN0LWNsb3NlLWljb25cIj48L2k+XHJcbjwvc3Bhbj5cclxuPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LWFycm93IGNtYWNzLXNlYXJjaC1hcnJvdy1yaWdodFwiIGNtYWNzLXNlbGVjdC11bnNlbGVjdGFibGVcclxuICAgICAgW2NsYXNzLmNtYWNzLXNlbGVjdGVkLW5vZGVzXT1cImdldFNlbGVjdGVkVmFsdWVzKCkubGVuZ3RoXCJcclxuICAgICAgKm5nSWY9XCJzaG93Q3VzdG9tU2VhcmNoOyBlbHNlIG5vdEN1c3RvbUFycm93XCI+XHJcbiAgICA8aSBjbGFzcz1cImljb25BcnJvd0xhcmdlLUFycm93LVJpZ2h0XCI+PC9pPlxyXG48L3NwYW4+XHJcbjxuZy10ZW1wbGF0ZSAjbm90Q3VzdG9tQXJyb3c+XHJcbiAgPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LWFycm93IGNtYWNzLWRyb3Bkb3duLWFycm93XCIgW2NsYXNzLmNtYWNzLXNlbGVjdC1hY3Rpb25dPVwiYWN0aW9uXCIgY21hY3Mtc2VsZWN0LXVuc2VsZWN0YWJsZSAqbmdJZj1cIm56U2hvd0Fycm93XCI+XHJcbiAgICA8aSBuei1pY29uIHR5cGU9XCJsb2FkaW5nXCIgKm5nSWY9XCJuekxvYWRpbmc7IGVsc2UgZGVmYXVsdEFycm93XCI+PC9pPlxyXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0QXJyb3c+XHJcbiAgICAgICAgPGkgbnotaWNvbiB0eXBlPVwiZG93blwiIGNsYXNzPVwiYW50LXNlbGVjdC1hcnJvdy1pY29uXCIgKm5nSWY9XCIhbnpTdWZmaXhJY29uOyBlbHNlIG56U3VmZml4SWNvblwiPjwvaT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgPC9zcGFuPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=