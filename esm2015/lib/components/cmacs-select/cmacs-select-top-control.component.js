import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Host, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "./cmacs-select.service";
import * as i2 from "ng-zorro-antd/core/no-animation";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "./cmacs-select-unselectable.directive";
import * as i6 from "ng-zorro-antd/core/transition-patch";
import * as i7 from "ng-zorro-antd/icon";
const _c0 = ["inputElement"];
const _c1 = ["inputElementCustom"];
const _c2 = ["cmacsSelectTagWrapper"];
const _c3 = ["cmacsSelectTagWrapperInner"];
const _c4 = ["cmacs-select-top-control", ""];
function CmacsSelectTopControlComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 11, 12);
    i0.ɵɵlistener("compositionstart", function CmacsSelectTopControlComponent_ng_template_0_Template_input_compositionstart_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.isComposing = true; })("compositionend", function CmacsSelectTopControlComponent_ng_template_0_Template_input_compositionend_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.isComposing = false; })("input", function CmacsSelectTopControlComponent_ng_template_0_Template_input_input_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.updateWidth(); })("ngModelChange", function CmacsSelectTopControlComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.setInputValue($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-select-selection-not-empty", ctx_r1.getSelectedValues().length && !ctx_r1.tagsOut);
    i0.ɵɵproperty("ngStyle", ctx_r1.showCustomSearchStyle)("ngModel", ctx_r1.inputValue)("disabled", ctx_r1.nzSelectService.disabled);
} }
function CmacsSelectTopControlComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 11, 13);
    i0.ɵɵlistener("compositionstart", function CmacsSelectTopControlComponent_ng_template_2_Template_input_compositionstart_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.isComposingCustom = true; })("compositionend", function CmacsSelectTopControlComponent_ng_template_2_Template_input_compositionend_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.isComposingCustom = false; })("input", function CmacsSelectTopControlComponent_ng_template_2_Template_input_input_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.updateWidthCustom(); })("ngModelChange", function CmacsSelectTopControlComponent_ng_template_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.setInputValueCustom($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-select-selection-not-empty", ctx_r3.getSelectedValues().length);
    i0.ɵɵproperty("ngStyle", ctx_r3.showCustomSearchStyle)("ngModel", ctx_r3.inputValueEditableMode)("disabled", ctx_r3.nzSelectService.disabled);
} }
function CmacsSelectTopControlComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵelement(1, "i", 15);
    i0.ɵɵelementEnd();
} }
function CmacsSelectTopControlComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("display", ctx_r6.placeHolderDisplay);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6.nzPlaceHolder);
} }
function CmacsSelectTopControlComponent_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r25.selectedValueStyle);
    i0.ɵɵattribute("title", ctx_r25.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r25.nzSelectService.listOfCachedSelectedOption[0].nzLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r25.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r25.nzSelectService.listOfCachedSelectedOption[0].nzLabel, " ");
} }
function CmacsSelectTopControlComponent_ng_container_8_div_2_ng_template_2_Template(rf, ctx) { }
function CmacsSelectTopControlComponent_ng_container_8_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "div", 21);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_container_8_div_2_ng_template_2_Template, 0, 0, "ng-template", 22);
    i0.ɵɵelementStart(3, "span", 23);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵstyleProp("display", ctx_r26.nzOpen || ctx_r26.nzSelectService.listOfCachedSelectedOption.length ? "block" : "none");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r26.inputValue, "\u00A0");
} }
function CmacsSelectTopControlComponent_ng_container_8_div_3_ng_template_2_Template(rf, ctx) { }
function CmacsSelectTopControlComponent_ng_container_8_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "div", 21);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_container_8_div_3_ng_template_2_Template, 0, 0, "ng-template", 22);
    i0.ɵɵelementStart(3, "span", 23);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵstyleProp("display", ctx_r27.nzOpen ? "block" : "none");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r27.inputValue, "\u00A0");
} }
function CmacsSelectTopControlComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ng_container_8_div_1_Template, 2, 3, "div", 17);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_container_8_div_2_Template, 5, 4, "div", 18);
    i0.ɵɵtemplate(3, CmacsSelectTopControlComponent_ng_container_8_div_3_Template, 5, 4, "div", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r7.userDropdown && ctx_r7.nzSelectService.listOfCachedSelectedOption.length && ctx_r7.nzSelectService.listOfSelectedValue.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.showCmacsSearch);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.cmacsEditable);
} }
function CmacsSelectTopControlComponent_ul_9_ng_container_2_ng_container_1_span_4_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 33);
} }
function CmacsSelectTopControlComponent_ul_9_ng_container_2_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵlistener("mousedown", function CmacsSelectTopControlComponent_ul_9_ng_container_2_ng_container_1_span_4_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsSelectTopControlComponent_ul_9_ng_container_2_ng_container_1_span_4_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r41); const option_r35 = i0.ɵɵnextContext().$implicit; const ctx_r39 = i0.ɵɵnextContext(3); return ctx_r39.removeSelectedValue(option_r35, $event); });
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_9_ng_container_2_ng_container_1_span_4_i_1_Template, 1, 0, "i", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r36.nzRemoveIcon)("ngIfElse", ctx_r36.nzRemoveIcon);
} }
function CmacsSelectTopControlComponent_ul_9_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 28);
    i0.ɵɵelementStart(2, "div", 29);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsSelectTopControlComponent_ul_9_ng_container_2_ng_container_1_span_4_Template, 2, 2, "span", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r35 = ctx.$implicit;
    const ctx_r33 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-select-selection__choice__disabled", option_r35.nzDisabled);
    i0.ɵɵproperty("nzNoAnimation", ctx_r33.noAnimation == null ? null : ctx_r33.noAnimation.nzNoAnimation);
    i0.ɵɵattribute("title", option_r35.nzLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r35.nzLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !option_r35.nzDisabled);
} }
function CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_ng_container_2_ng_template_1_Template(rf, ctx) { }
const _c5 = function (a0) { return { $implicit: a0 }; };
function CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 34);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r42.nzMaxTagPlaceholder)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c5, i0.ɵɵpipeBind2(2, 2, ctx_r42.nzSelectService.listOfSelectedValue, ctx_r42.nzMaxTagCount)));
} }
function CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r43 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" + ", ctx_r43.nzSelectService.listOfCachedSelectedOption.length - ctx_r43.nzMaxTagCount, " ... ");
} }
function CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 28);
    i0.ɵɵelementStart(1, "div", 29);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_ng_container_2_Template, 3, 7, "ng-container", 6);
    i0.ɵɵtemplate(3, CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_ng_container_3_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzNoAnimation", ctx_r34.noAnimation == null ? null : ctx_r34.noAnimation.nzNoAnimation);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r34.nzMaxTagPlaceholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r34.nzMaxTagPlaceholder);
} }
function CmacsSelectTopControlComponent_ul_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_9_ng_container_2_ng_container_1_Template, 5, 6, "ng-container", 26);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵtemplate(3, CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_Template, 4, 3, "li", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(2, 3, ctx_r31.listOfCachedSelectedOption, 0, ctx_r31.nzMaxTagCount))("ngForTrackBy", ctx_r31.trackValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r31.nzSelectService.listOfCachedSelectedOption.length > ctx_r31.nzMaxTagCount);
} }
function CmacsSelectTopControlComponent_ul_9_ng_template_4_Template(rf, ctx) { }
function CmacsSelectTopControlComponent_ul_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 24, 25);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ul_9_ng_container_2_Template, 4, 7, "ng-container", 6);
    i0.ɵɵelementStart(3, "li", 20);
    i0.ɵɵtemplate(4, CmacsSelectTopControlComponent_ul_9_ng_template_4_Template, 0, 0, "ng-template", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r8.tagsOut && !ctx_r8.userDropdown);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsSelectTopControlComponent_span_10_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 37);
} }
function CmacsSelectTopControlComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵlistener("mousedown", function CmacsSelectTopControlComponent_span_10_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsSelectTopControlComponent_span_10_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(); return ctx_r47.onClearSelection($event); });
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_span_10_i_1_Template, 1, 0, "i", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-select-selection__clear-search", ctx_r9.showCustomSearch);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r9.nzClearIcon)("ngIfElse", ctx_r9.nzClearIcon);
} }
function CmacsSelectTopControlComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38);
    i0.ɵɵelement(1, "i", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-selected-nodes", ctx_r10.getSelectedValues().length);
} }
function CmacsSelectTopControlComponent_ng_template_12_span_0_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 44);
} }
function CmacsSelectTopControlComponent_ng_template_12_span_0_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 46);
} }
function CmacsSelectTopControlComponent_ng_template_12_span_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsSelectTopControlComponent_ng_template_12_span_0_ng_template_2_i_0_Template, 1, 0, "i", 45);
} if (rf & 2) {
    const ctx_r52 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", !ctx_r52.nzSuffixIcon)("ngIfElse", ctx_r52.nzSuffixIcon);
} }
function CmacsSelectTopControlComponent_ng_template_12_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ng_template_12_span_0_i_1_Template, 1, 0, "i", 42);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_template_12_span_0_ng_template_2_Template, 1, 2, "ng-template", null, 43, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r51 = i0.ɵɵreference(3);
    const ctx_r49 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-select-action", ctx_r49.action);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r49.nzLoading)("ngIfElse", _r51);
} }
function CmacsSelectTopControlComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsSelectTopControlComponent_ng_template_12_span_0_Template, 4, 4, "span", 40);
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r12.nzShowArrow);
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
        this.maxTagCountAuto = false;
        this.nzTokenSeparators = [];
        this.listOfCachedSelectedOption = [];
    }
    checkWrapperSpace() {
        if (!this.nzSelectService.isMultipleOrTags || !this.maxTagCountAuto) {
            return;
        }
        let tagsLength = 0;
        for (let i = 0; i < this.nzSelectService.listOfCachedSelectedOption.length; i++) {
            const option = this.nzSelectService.listOfCachedSelectedOption[i];
            tagsLength += option.nzLabel.length * 7.6 + 30;
            if (tagsLength + 34 > this.cmacsSelectTagWrapper.nativeElement.offsetWidth) {
                this.nzMaxTagCount = i ? i - 1 : 0;
                this.cdr.detectChanges();
                return;
            }
        }
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
        e.stopPropagation();
        this.nzSelectService.removeValueFormSelected(option);
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
        this.nzSelectService.listOfSelectedValue$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.checkWrapperSpace();
            this.listOfCachedSelectedOption = this.nzSelectService.listOfCachedSelectedOption;
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
        i0.ɵɵviewQuery(_c2, 1);
        i0.ɵɵviewQuery(_c3, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElementCustom = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cmacsSelectTagWrapper = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cmacsSelectTagWrapperInner = _t.first);
    } }, inputs: { searchValue: "searchValue", nzShowSearch: "nzShowSearch", showCustomSearch: "showCustomSearch", showCmacsSearch: "showCmacsSearch", nzPlaceHolder: "nzPlaceHolder", tagsOut: "tagsOut", nzOpen: "nzOpen", cmacsOpen: "cmacsOpen", cmacsEditable: "cmacsEditable", action: "action", nzMaxTagCount: "nzMaxTagCount", nzAllowClear: "nzAllowClear", nzShowArrow: "nzShowArrow", nzLoading: "nzLoading", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", userDropdown: "userDropdown", maxTagCountAuto: "maxTagCountAuto", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzTokenSeparators: "nzTokenSeparators" }, exportAs: ["cmacsSelectTopControl"], features: [i0.ɵɵNgOnChangesFeature], attrs: _c4, decls: 14, vars: 7, consts: [["inputTemplate", ""], ["customInputTemplate", ""], ["class", "ant-select-arrow cmacs-search-search-icon", "cmacs-select-unselectable", "", 4, "ngIf"], [1, "ant-select-selection__rendered"], ["cmacsSelectTagWrapper", ""], ["cmacs-select-unselectable", "", "class", "ant-select-selection__placeholder", 3, "display", 4, "ngIf"], [4, "ngIf"], ["class", "cmacs-select-tag-wrapper-inner", 4, "ngIf"], ["class", "ant-select-selection__clear", "cmacs-select-unselectable", "", 3, "ant-select-selection__clear-search", "mousedown", "click", 4, "ngIf"], ["class", "ant-select-arrow cmacs-search-arrow-right", "cmacs-select-unselectable", "", 3, "cmacs-selected-nodes", 4, "ngIf", "ngIfElse"], ["notCustomArrow", ""], ["autocomplete", "something-new", 1, "ant-select-search__field", 3, "ngStyle", "ngModel", "disabled", "compositionstart", "compositionend", "input", "ngModelChange"], ["inputElement", ""], ["inputElementCustom", ""], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-search-search-icon"], [1, "iconCreation-Search"], ["cmacs-select-unselectable", "", 1, "ant-select-selection__placeholder"], ["class", "ant-select-selection-selected-value", 3, "ngStyle", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", 4, "ngIf"], [1, "ant-select-selection-selected-value", 3, "ngStyle"], [1, "ant-select-search", "ant-select-search--inline"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [1, "ant-select-search__field__mirror"], [1, "cmacs-select-tag-wrapper-inner"], ["cmacsSelectTagWrapperInner", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 3, "nzNoAnimation", 4, "ngIf"], [1, "ant-select-selection__choice", 3, "nzNoAnimation"], [1, "ant-select-selection__choice__content"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close", "class", "ant-select-remove-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close", 1, "ant-select-remove-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cmacs-select-unselectable", "", 1, "ant-select-selection__clear", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close-circle", "theme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "theme", "fill", 1, "ant-select-close-icon"], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-search-arrow-right"], [1, "iconArrowLarge-Arrow-Right"], ["class", "ant-select-arrow cmacs-dropdown-arrow", "cmacs-select-unselectable", "", 3, "cmacs-select-action", 4, "ngIf"], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-dropdown-arrow"], ["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "nzType", "loading"], ["nz-icon", "", "nzType", "down", "class", "ant-select-arrow-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "down", 1, "ant-select-arrow-icon"]], template: function CmacsSelectTopControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsSelectTopControlComponent_ng_template_0_Template, 2, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_template_2_Template, 2, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, CmacsSelectTopControlComponent_span_4_Template, 2, 0, "span", 2);
        i0.ɵɵelementStart(5, "div", 3, 4);
        i0.ɵɵtemplate(7, CmacsSelectTopControlComponent_div_7_Template, 2, 3, "div", 5);
        i0.ɵɵtemplate(8, CmacsSelectTopControlComponent_ng_container_8_Template, 4, 3, "ng-container", 6);
        i0.ɵɵtemplate(9, CmacsSelectTopControlComponent_ul_9_Template, 5, 2, "ul", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, CmacsSelectTopControlComponent_span_10_Template, 2, 4, "span", 8);
        i0.ɵɵtemplate(11, CmacsSelectTopControlComponent_span_11_Template, 2, 2, "span", 9);
        i0.ɵɵtemplate(12, CmacsSelectTopControlComponent_ng_template_12_Template, 1, 1, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r11 = i0.ɵɵreference(13);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.showCustomSearch);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.nzPlaceHolder);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzSelectService.isSingleMode || ctx.nzSelectService.isTagsSingleSelectMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzAllowClear && ctx.nzSelectService.listOfSelectedValue.length && !ctx.userDropdown);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCustomSearch)("ngIfElse", _r11);
    } }, directives: [i3.NgIf, i4.DefaultValueAccessor, i3.NgStyle, i4.NgControlStatus, i4.NgModel, i5.CmacsSelectUnselectableDirective, i3.NgTemplateOutlet, i3.NgForOf, i2.NzNoAnimationDirective, i6.ɵNzTransitionPatchDirective, i7.NzIconDirective], pipes: [i3.SlicePipe], styles: [".cmacs-select-action{border-left:1px solid #dee0e5}.cmacs-select-tag-wrapper-inner{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.ant-select-selection__rendered{margin-right:35px}.ant-select-selection--multiple .ant-select-arrow.cmacs-select-action:hover{padding:8px 10px 8px 11px;right:1px;top:7px!important}.ant-select-selection__rendered:hover .cmacs-select-action,.cmacs-select-action:hover{background-color:#f6f7fb}.cmacs-search-search-icon{left:11px;font-size:16px;top:14px}.cmacs-search-arrow-right,.cmacs-search-search-icon{right:unset;z-index:unset;opacity:1!important;margin-left:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cmacs-search-arrow-right{font-size:27px;top:7px!important;left:calc(100% - 43px);border-left:1px solid #dee0e5;padding:0 5px}cmacs-select:not(.ant-select-disabled) .cmacs-dropdown-arrow{cursor:pointer}cmacs-select .cmacs-dropdown-arrow{right:0;top:6px;padding:9px 11px}.ant-select-selection .ant-select-selection__clear{right:10px;top:12px!important;line-height:1.5}.ant-select-selection--multiple .ant-select-arrow,.ant-select-selection--multiple .ant-select-selection__clear{top:6px}.ant-select-selection:hover .cmacs-selected-nodes .iconArrowLarge-Arrow-Right:before{opacity:0}.ant-select-selection__clear-search{right:15px}.ant-select-search--inline .ant-select-search__field{max-width:94%}.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field.cmacs-select-selection-not-empty{padding-left:0!important}.ant-select-selection--single{height:34px}.ant-select-selection--single .ant-select-selection__rendered{line-height:32px}.cmacs-invisible{opacity:0}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsSelectTopControlComponent.prototype, "userDropdown", void 0);
__decorate([
    InputBoolean()
], CmacsSelectTopControlComponent.prototype, "maxTagCountAuto", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSelectTopControlComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-select-top-control]',
                exportAs: 'cmacsSelectTopControl',
                preserveWhitespaces: false,
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
        }], cmacsSelectTagWrapper: [{
            type: ViewChild,
            args: ['cmacsSelectTagWrapper']
        }], cmacsSelectTagWrapperInner: [{
            type: ViewChild,
            args: ['cmacsSelectTagWrapperInner']
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
        }], maxTagCountAuto: [{
            type: Input
        }], nzMaxTagPlaceholder: [{
            type: Input
        }], nzTokenSeparators: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxJQUFJLEVBQ0osS0FBSyxFQUdMLFFBQVEsRUFHUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQ2xCckQscUNBSUM7SUFIQyxnT0FBa0MsSUFBSSxJQUFDLCtNQUFpQyxLQUFLLElBQXRDLGdNQUFBLDhOQUFBO0lBRHpDLGlCQUlDOzs7SUFETSx3R0FBaUY7SUFIdEMsc0RBQWlDLDhCQUFBLDZDQUFBOzs7O0lBUW5GLHFDQUc2RTtJQUZ0RSxzT0FBd0MsSUFBSSxJQUFDLHFOQUF1QyxLQUFLLElBQTVDLHNNQUFBLG9PQUFBO0lBRHBELGlCQUc2RTs7O0lBQXRFLHFGQUFxRTtJQUhwQixzREFBaUMsMENBQUEsNkNBQUE7OztJQU0zRixnQ0FDMkI7SUFDekIsd0JBQW1DO0lBQ3JDLGlCQUFPOzs7SUFFTCwrQkFDNEM7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QkFxTEksSUFBSTs7c0JBQUksUUFBUTt3QkFqTFYsV0FBVztrQkFBbkIsS0FBSztZQUlxQixZQUFZO2tCQUF0QyxTQUFTO21CQUFDLGNBQWM7WUFDUSxrQkFBa0I7a0JBQWxELFNBQVM7bUJBQUMsb0JBQW9CO1lBQ0sscUJBQXFCO2tCQUF4RCxTQUFTO21CQUFDLHVCQUF1QjtZQUNPLDBCQUEwQjtrQkFBbEUsU0FBUzttQkFBQyw0QkFBNEI7WUFDOUIsWUFBWTtrQkFBcEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUVHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ21CLFlBQVk7a0JBQXBDLEtBQUs7WUFDbUIsZUFBZTtrQkFBdkMsS0FBSztZQUVHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCwgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ21hY3NTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1zZWxlY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1zZWxlY3QtdG9wLWNvbnRyb2xdJyxcclxuICBleHBvcnRBczogJ2NtYWNzU2VsZWN0VG9wQ29udHJvbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlYXJjaFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xyXG4gIGlzQ29tcG9zaW5nQ3VzdG9tID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudEN1c3RvbScpIGlucHV0RWxlbWVudEN1c3RvbTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdjbWFjc1NlbGVjdFRhZ1dyYXBwZXInKSBjbWFjc1NlbGVjdFRhZ1dyYXBwZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY21hY3NTZWxlY3RUYWdXcmFwcGVySW5uZXInKSBjbWFjc1NlbGVjdFRhZ1dyYXBwZXJJbm5lcjogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBuelNob3dTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93Q3VzdG9tU2VhcmNoID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBzaG93Q21hY3NTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFnc091dCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNtYWNzT3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNtYWNzRWRpdGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBhY3Rpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek1heFRhZ0NvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpBbGxvd0NsZWFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpTaG93QXJyb3cgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56TG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56U3VmZml4SWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpDbGVhckljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56UmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHVzZXJEcm9wZG93biA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtYXhUYWdDb3VudEF1dG8gPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgbnpNYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueVtdIH0+O1xyXG4gIEBJbnB1dCgpIG56VG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uOiBhbnlbXSA9IFtdO1xyXG5cclxuICBjaGVja1dyYXBwZXJTcGFjZSgpIHtcclxuICAgIGlmICghdGhpcy5uelNlbGVjdFNlcnZpY2UuaXNNdWx0aXBsZU9yVGFncyB8fCAhdGhpcy5tYXhUYWdDb3VudEF1dG8pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHRhZ3NMZW5ndGggPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbltpXTtcclxuICAgICAgdGFnc0xlbmd0aCArPSBvcHRpb24ubnpMYWJlbC5sZW5ndGggKiA3LjYgKyAzMDtcclxuICAgICAgaWYgKHRhZ3NMZW5ndGggKyAzNCA+IHRoaXMuY21hY3NTZWxlY3RUYWdXcmFwcGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICB0aGlzLm56TWF4VGFnQ291bnQgPSBpID8gaSAtIDEgOiAwO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xlYXJTZWxlY3Rpb24oZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoW10sIHRydWUpO1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUpIHtcclxuICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKCcnKTtcclxuICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlQ3VzdG9tKCcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkVmFsdWVzKCl7XHJcbiAgICByZXR1cm4gdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZTtcclxuICB9XHJcblxyXG4gIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVXaWR0aCgpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlU2VhcmNoVmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudG9rZW5TZXBhcmF0ZSh0aGlzLmlucHV0VmFsdWUsIHRoaXMubnpUb2tlblNlcGFyYXRvcnMpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZUN1c3RvbSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRDdXN0b20pIHtcclxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnRDdXN0b20ubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnB1dFZhbHVlRWRpdGFibGVNb2RlID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZVdpZHRoQ3VzdG9tKCk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVFZGl0ZWRWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5jbWFjc0VkaXRhYmxlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWVFZGl0YWJsZU1vZGUgfHwgdGhpcy5pc0NvbXBvc2luZ0N1c3RvbSB8fCB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy51c2VyRHJvcGRvd24pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pbnB1dFZhbHVlRWRpdGFibGVNb2RlIHx8IHRoaXMuaXNDb21wb3NpbmcgfHwgdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkVmFsdWVTdHlsZSgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgIGxldCBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgaWYgKCF0aGlzLm56U2hvd1NlYXJjaCAmJiAhdGhpcy5zaG93Q21hY3NTZWFyY2gpIHtcclxuICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMubnpPcGVuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY21hY3NFZGl0YWJsZSkge1xyXG4gICAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhKHRoaXMuaXNDb21wb3NpbmdDdXN0b20gfHwgdGhpcy5pbnB1dFZhbHVlRWRpdGFibGVNb2RlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNob3dTZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmNtYWNzRWRpdGFibGUpIHtcclxuICAgICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlzQ29tcG9zaW5nQ3VzdG9tIHx8IHRoaXMuaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUgJiYgdGhpcy5pbnB1dFZhbHVlKSB7XHJcbiAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUgJiYgIXRoaXMuaW5wdXRWYWx1ZSkge1xyXG4gICAgICBvcGFjaXR5ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkaXNwbGF5OiBzaG93U2VsZWN0ZWRWYWx1ZSA/ICdibG9jaycgOiAnbm9uZScsXHJcbiAgICAgICdtYXJnaW4tbGVmdC5weCc6IHRoaXMuc2hvd0N1c3RvbVNlYXJjaCA/ICcxNScgOiAnMCcsXHJcbiAgICAgIG9wYWNpdHk6IGAke29wYWNpdHl9YFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBzaG93Q3VzdG9tU2VhcmNoU3R5bGUoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAnbWFyZ2luLWxlZnQucHgnOiB0aGlzLnNob3dDdXN0b21TZWFyY2ggPyAnMTUnIDogJzAnLFxyXG4gICAgICAncGFkZGluZy1sZWZ0LnB4JzogdGhpcy51c2VyRHJvcGRvd24gPyAnMCcgOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQpOiBhbnkge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uelZhbHVlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlV2lkdGgoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlcnZpY2UuaXNNdWx0aXBsZU9yVGFncyAmJiB0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICd3aWR0aCcsXHJcbiAgICAgICAgICBgJHt0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRofXB4YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlV2lkdGhDdXN0b20oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlcnZpY2UuaXNNdWx0aXBsZU9yVGFncyAmJiB0aGlzLmlucHV0RWxlbWVudEN1c3RvbSkge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dFZhbHVlRWRpdGFibGVNb2RlIHx8IHRoaXMuaXNDb21wb3NpbmdDdXN0b20pIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRDdXN0b20ubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICd3aWR0aCcsXHJcbiAgICAgICAgICBgJHt0aGlzLmlucHV0RWxlbWVudEN1c3RvbS5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRofXB4YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmlucHV0RWxlbWVudEN1c3RvbS5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0ZWRWYWx1ZShvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50LCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQob3B0aW9uKTsgICBcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHVibGljIG56U2VsZWN0U2VydmljZTogQ21hY3NTZWxlY3RTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm9wZW4kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUob3BlbiA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCAmJiBvcGVuKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmNtYWNzT3Blbikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRDdXN0b20gJiYgb3Blbikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dEVsZW1lbnRDdXN0b20ubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRDdXN0b20gJiYgdGhpcy5jbWFjc09wZW4pIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2xlYXJJbnB1dCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGlmICghKHRoaXMuY21hY3NPcGVuIHx8IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKCcnKTtcclxuICAgICAgICB0aGlzLnNldElucHV0VmFsdWVDdXN0b20oJycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrV3JhcHBlclNwYWNlKCk7XHJcbiAgICAgIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gPSB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICBpZiAoY2hhbmdlcy5zZWFyY2hWYWx1ZSAmJiBjaGFuZ2VzLnNlYXJjaFZhbHVlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShjaGFuZ2VzLnNlYXJjaFZhbHVlLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI2lucHV0VGVtcGxhdGU+XHJcbiAgPGlucHV0ICNpbnB1dEVsZW1lbnQgYXV0b2NvbXBsZXRlPVwic29tZXRoaW5nLW5ld1wiIFtuZ1N0eWxlXT1cInNob3dDdXN0b21TZWFyY2hTdHlsZVwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkXCJcclxuICAgIChjb21wb3NpdGlvbnN0YXJ0KT1cImlzQ29tcG9zaW5nID0gdHJ1ZVwiIChjb21wb3NpdGlvbmVuZCk9XCJpc0NvbXBvc2luZyA9IGZhbHNlXCIgKGlucHV0KT1cInVwZGF0ZVdpZHRoKClcIlxyXG4gICAgW25nTW9kZWxdPVwiaW5wdXRWYWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cInNldElucHV0VmFsdWUoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJuelNlbGVjdFNlcnZpY2UuZGlzYWJsZWRcIlxyXG4gICAgICAgICBbY2xhc3MuY21hY3Mtc2VsZWN0LXNlbGVjdGlvbi1ub3QtZW1wdHldPVwiZ2V0U2VsZWN0ZWRWYWx1ZXMoKS5sZW5ndGggJiYgIXRhZ3NPdXRcIlxyXG4gID5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjY3VzdG9tSW5wdXRUZW1wbGF0ZT5cclxuICA8aW5wdXQgI2lucHV0RWxlbWVudEN1c3RvbSBhdXRvY29tcGxldGU9XCJzb21ldGhpbmctbmV3XCIgW25nU3R5bGVdPVwic2hvd0N1c3RvbVNlYXJjaFN0eWxlXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRcIlxyXG4gICAgICAgICAoY29tcG9zaXRpb25zdGFydCk9XCJpc0NvbXBvc2luZ0N1c3RvbSA9IHRydWVcIiAoY29tcG9zaXRpb25lbmQpPVwiaXNDb21wb3NpbmdDdXN0b20gPSBmYWxzZVwiIChpbnB1dCk9XCJ1cGRhdGVXaWR0aEN1c3RvbSgpXCJcclxuICAgICAgICAgW25nTW9kZWxdPVwiaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZVwiIChuZ01vZGVsQ2hhbmdlKT1cInNldElucHV0VmFsdWVDdXN0b20oJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJuelNlbGVjdFNlcnZpY2UuZGlzYWJsZWRcIlxyXG4gICAgICAgICBbY2xhc3MuY21hY3Mtc2VsZWN0LXNlbGVjdGlvbi1ub3QtZW1wdHldPVwiZ2V0U2VsZWN0ZWRWYWx1ZXMoKS5sZW5ndGhcIj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxzcGFuIGNsYXNzPVwiYW50LXNlbGVjdC1hcnJvdyBjbWFjcy1zZWFyY2gtc2VhcmNoLWljb25cIiBjbWFjcy1zZWxlY3QtdW5zZWxlY3RhYmxlXHJcbiAgKm5nSWY9XCJzaG93Q3VzdG9tU2VhcmNoXCI+XHJcbiAgPGkgY2xhc3M9XCJpY29uQ3JlYXRpb24tU2VhcmNoXCI+PC9pPlxyXG48L3NwYW4+XHJcbjxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fcmVuZGVyZWRcIiAjY21hY3NTZWxlY3RUYWdXcmFwcGVyPlxyXG4gIDxkaXYgKm5nSWY9XCJuelBsYWNlSG9sZGVyXCIgY21hY3Mtc2VsZWN0LXVuc2VsZWN0YWJsZSBbc3R5bGUuZGlzcGxheV09XCJwbGFjZUhvbGRlckRpc3BsYXlcIlxyXG4gICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fcGxhY2Vob2xkZXJcIj57eyBuelBsYWNlSG9sZGVyIH19PC9kaXY+XHJcbiAgPCEtLXNpbmdsZSBtb2RlLS0+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56U2VsZWN0U2VydmljZS5pc1NpbmdsZU1vZGUgfHwgbnpTZWxlY3RTZXJ2aWNlLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGVcIj5cclxuICAgIDwhLS1zZWxlY3RlZCBsYWJlbC0tPlxyXG4gICAgPGRpdiAqbmdJZj1cIiF1c2VyRHJvcGRvd24gJiYgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCAmJiBuelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGhcIlxyXG4gICAgICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLXNlbGVjdGVkLXZhbHVlXCIgW2F0dHIudGl0bGVdPVwibnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uWzBdPy5uekxhYmVsXCJcclxuICAgICAgICAgW25nU3R5bGVdPVwic2VsZWN0ZWRWYWx1ZVN0eWxlXCI+XHJcbiAgICAgIHt7IG56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvblswXT8ubnpMYWJlbCB9fVxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tc2hvdyBzZWFyY2gtLT5cclxuICAgIDxkaXYgKm5nSWY9XCJzaG93Q21hY3NTZWFyY2hcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoIGFudC1zZWxlY3Qtc2VhcmNoLS1pbmxpbmVcIlxyXG4gICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJuek9wZW4gfHwgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCA/ICdibG9jaycgOiAnbm9uZSdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fd3JhcFwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpbnB1dFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fbWlycm9yXCI+e3tpbnB1dFZhbHVlfX0mbmJzcDs8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tc2hvdyBjdXN0b20gc2VhcmNoIGVkaXRhYmxlIG1vZGUtLT5cclxuICAgIDxkaXYgKm5nSWY9XCJjbWFjc0VkaXRhYmxlXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaCBhbnQtc2VsZWN0LXNlYXJjaC0taW5saW5lXCJcclxuICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwibnpPcGVuID8gJ2Jsb2NrJyA6ICdub25lJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkX193cmFwXCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbUlucHV0VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkX19taXJyb3JcIj57e2lucHV0VmFsdWV9fSZuYnNwOzwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8IS0tbXVsdGlwbGUgb3IgdGFncyBtb2RlLS0+XHJcbiAgPHVsICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3NcIiAjY21hY3NTZWxlY3RUYWdXcmFwcGVySW5uZXIgY2xhc3M9XCJjbWFjcy1zZWxlY3QtdGFnLXdyYXBwZXItaW5uZXJcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdGFnc091dCAmJiAhdXNlckRyb3Bkb3duXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbiB8IHNsaWNlOiAwIDogbnpNYXhUYWdDb3VudDsgdHJhY2tCeTp0cmFja1ZhbHVlO1wiPlxyXG4gICAgICAgIDxsaSBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiIFthdHRyLnRpdGxlXT1cIm9wdGlvbi5uekxhYmVsXCJcclxuICAgICAgICAgICAgW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX2Rpc2FibGVkXT1cIm9wdGlvbi5uekRpc2FibGVkXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fY29udGVudFwiPnt7IG9wdGlvbi5uekxhYmVsIH19PC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFvcHRpb24ubnpEaXNhYmxlZFwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlXCJcclxuICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIiAoY2xpY2spPVwicmVtb3ZlU2VsZWN0ZWRWYWx1ZShvcHRpb24sICRldmVudClcIj5cclxuICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZVwiIGNsYXNzPVwiYW50LXNlbGVjdC1yZW1vdmUtaWNvblwiICpuZ0lmPVwiIW56UmVtb3ZlSWNvbjsgZWxzZSBuelJlbW92ZUljb25cIj48L2k+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxsaSAqbmdJZj1cIm56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggPiBuek1heFRhZ0NvdW50XCJcclxuICAgICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuek1heFRhZ1BsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuek1heFRhZ1BsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IG56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlIHwgc2xpY2U6IG56TWF4VGFnQ291bnR9XCI+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbnpNYXhUYWdQbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICArIHt7IG56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggLSBuek1heFRhZ0NvdW50IH19IC4uLlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxsaSBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoIGFudC1zZWxlY3Qtc2VhcmNoLS1pbmxpbmVcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlucHV0VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG4gIFxyXG48L2Rpdj5cclxuPHNwYW4gKm5nSWY9XCJuekFsbG93Q2xlYXIgJiYgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoICYmICF1c2VyRHJvcGRvd25cIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jbGVhclwiXHJcbiAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2xlYXItc2VhcmNoXT1cInNob3dDdXN0b21TZWFyY2hcIlxyXG4gIGNtYWNzLXNlbGVjdC11bnNlbGVjdGFibGUgKG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiIChjbGljayk9XCJvbkNsZWFyU2VsZWN0aW9uKCRldmVudClcIj5cclxuICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiIHRoZW1lPVwiZmlsbFwiICpuZ0lmPVwiIW56Q2xlYXJJY29uOyBlbHNlIG56Q2xlYXJJY29uXCIgY2xhc3M9XCJhbnQtc2VsZWN0LWNsb3NlLWljb25cIj48L2k+XHJcbjwvc3Bhbj5cclxuPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LWFycm93IGNtYWNzLXNlYXJjaC1hcnJvdy1yaWdodFwiIGNtYWNzLXNlbGVjdC11bnNlbGVjdGFibGVcclxuICAgICAgW2NsYXNzLmNtYWNzLXNlbGVjdGVkLW5vZGVzXT1cImdldFNlbGVjdGVkVmFsdWVzKCkubGVuZ3RoXCJcclxuICAgICAgKm5nSWY9XCJzaG93Q3VzdG9tU2VhcmNoOyBlbHNlIG5vdEN1c3RvbUFycm93XCI+XHJcbiAgICA8aSBjbGFzcz1cImljb25BcnJvd0xhcmdlLUFycm93LVJpZ2h0XCI+PC9pPlxyXG48L3NwYW4+XHJcbjxuZy10ZW1wbGF0ZSAjbm90Q3VzdG9tQXJyb3c+XHJcbiAgPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LWFycm93IGNtYWNzLWRyb3Bkb3duLWFycm93XCIgW2NsYXNzLmNtYWNzLXNlbGVjdC1hY3Rpb25dPVwiYWN0aW9uXCIgY21hY3Mtc2VsZWN0LXVuc2VsZWN0YWJsZSAqbmdJZj1cIm56U2hvd0Fycm93XCI+XHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIiAqbmdJZj1cIm56TG9hZGluZzsgZWxzZSBkZWZhdWx0QXJyb3dcIj48L2k+XHJcbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRBcnJvdz5cclxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIiBjbGFzcz1cImFudC1zZWxlY3QtYXJyb3ctaWNvblwiICpuZ0lmPVwiIW56U3VmZml4SWNvbjsgZWxzZSBuelN1ZmZpeEljb25cIj48L2k+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIDwvc3Bhbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19