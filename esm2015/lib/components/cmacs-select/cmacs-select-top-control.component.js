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
        if (this.nzSelectService.isMultipleOrTags && this.maxTagCountAuto) {
            this.nzMaxTagCount = undefined;
            this.cdr.markForCheck();
            const tagsOrdered = this.nzSelectService.listOfCachedSelectedOption.sort((a, b) => a.nzLabel.length - b.nzLabel.length);
            this.listOfCachedSelectedOption = [...tagsOrdered];
            let tagsLength = 0;
            for (let i = 0; i < tagsOrdered.length; i++) {
                const option = this.nzSelectService.listOfCachedSelectedOption[i];
                const newLength = option.nzLabel.length * 7.6 + 30;
                tagsLength += newLength;
                if (tagsLength + 34 > this.cmacsSelectTagWrapper.nativeElement.offsetWidth) {
                    if (tagsLength - newLength + 104 <= this.cmacsSelectTagWrapper.nativeElement.offsetWidth) {
                        this.nzMaxTagCount = i ? i : 0;
                    }
                    else {
                        this.nzMaxTagCount = i ? i - 1 : 0;
                    }
                    this.cdr.detectChanges();
                    return;
                }
            }
        }
        else {
            this.listOfCachedSelectedOption = this.nzSelectService.listOfCachedSelectedOption;
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
            this.checkWrapperSpace();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxJQUFJLEVBQ0osS0FBSyxFQUdMLFFBQVEsRUFHUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQ2xCckQscUNBSUM7SUFIQyxnT0FBa0MsSUFBSSxJQUFDLCtNQUFpQyxLQUFLLElBQXRDLGdNQUFBLDhOQUFBO0lBRHpDLGlCQUlDOzs7SUFETSx3R0FBaUY7SUFIdEMsc0RBQWlDLDhCQUFBLDZDQUFBOzs7O0lBUW5GLHFDQUc2RTtJQUZ0RSxzT0FBd0MsSUFBSSxJQUFDLHFOQUF1QyxLQUFLLElBQTVDLHNNQUFBLG9PQUFBO0lBRHBELGlCQUc2RTs7O0lBQXRFLHFGQUFxRTtJQUhwQixzREFBaUMsMENBQUEsNkNBQUE7OztJQU0zRixnQ0FDMkI7SUFDekIsd0JBQW1DO0lBQ3JDLGlCQUFPOzs7SUFFTCwrQkFDNEM7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QVk7a0JBQXBDLEtBQUs7WUFDbUIsZUFBZTtrQkFBdkMsS0FBSztZQUVHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCwgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ21hY3NTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1zZWxlY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1zZWxlY3QtdG9wLWNvbnRyb2xdJyxcclxuICBleHBvcnRBczogJ2NtYWNzU2VsZWN0VG9wQ29udHJvbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlYXJjaFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xyXG4gIGlzQ29tcG9zaW5nQ3VzdG9tID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudEN1c3RvbScpIGlucHV0RWxlbWVudEN1c3RvbTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdjbWFjc1NlbGVjdFRhZ1dyYXBwZXInKSBjbWFjc1NlbGVjdFRhZ1dyYXBwZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY21hY3NTZWxlY3RUYWdXcmFwcGVySW5uZXInKSBjbWFjc1NlbGVjdFRhZ1dyYXBwZXJJbm5lcjogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBuelNob3dTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93Q3VzdG9tU2VhcmNoID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBzaG93Q21hY3NTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFnc091dCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNtYWNzT3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNtYWNzRWRpdGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBhY3Rpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek1heFRhZ0NvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpBbGxvd0NsZWFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpTaG93QXJyb3cgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56TG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56U3VmZml4SWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpDbGVhckljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56UmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHVzZXJEcm9wZG93biA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtYXhUYWdDb3VudEF1dG8gPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgbnpNYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueVtdIH0+O1xyXG4gIEBJbnB1dCgpIG56VG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uOiBhbnlbXSA9IFtdO1xyXG5cclxuICBjaGVja1dyYXBwZXJTcGFjZSgpIHtcclxuICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzICYmIHRoaXMubWF4VGFnQ291bnRBdXRvKSB7XHJcbiAgICAgIHRoaXMubnpNYXhUYWdDb3VudCA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIGNvbnN0IHRhZ3NPcmRlcmVkID0gdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24uc29ydCgoYSwgYikgPT4gYS5uekxhYmVsLmxlbmd0aCAtIGIubnpMYWJlbC5sZW5ndGgpO1xyXG4gICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gWy4uLnRhZ3NPcmRlcmVkXTtcclxuICAgICAgbGV0IHRhZ3NMZW5ndGggPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ3NPcmRlcmVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb25baV07XHJcbiAgICAgICAgY29uc3QgbmV3TGVuZ3RoID0gb3B0aW9uLm56TGFiZWwubGVuZ3RoICogNy42ICsgMzBcclxuICAgICAgICB0YWdzTGVuZ3RoICs9IG5ld0xlbmd0aDtcclxuICAgICAgICBpZiAodGFnc0xlbmd0aCArIDM0ID4gdGhpcy5jbWFjc1NlbGVjdFRhZ1dyYXBwZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgICAgaWYgKHRhZ3NMZW5ndGggLSBuZXdMZW5ndGggKyAxMDQgPD0gdGhpcy5jbWFjc1NlbGVjdFRhZ1dyYXBwZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLm56TWF4VGFnQ291bnQgPSBpID8gaSA6IDA7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm56TWF4VGFnQ291bnQgPSBpID8gaSAtIDEgOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbiA9IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGVhclNlbGVjdGlvbihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbXSwgdHJ1ZSk7XHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlcnZpY2UuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSkge1xyXG4gICAgICB0aGlzLnNldElucHV0VmFsdWUoJycpO1xyXG4gICAgICB0aGlzLnNldElucHV0VmFsdWVDdXN0b20oJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRWYWx1ZXMoKXtcclxuICAgIHJldHVybiB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVTZWFyY2hWYWx1ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS50b2tlblNlcGFyYXRlKHRoaXMuaW5wdXRWYWx1ZSwgdGhpcy5uelRva2VuU2VwYXJhdG9ycyk7XHJcbiAgfVxyXG5cclxuICBzZXRJbnB1dFZhbHVlQ3VzdG9tKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudEN1c3RvbSkge1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudEN1c3RvbS5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlucHV0VmFsdWVFZGl0YWJsZU1vZGUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlV2lkdGhDdXN0b20oKTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUVkaXRlZFZhbHVlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBwbGFjZUhvbGRlckRpc3BsYXkoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmNtYWNzRWRpdGFibGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZSB8fCB0aGlzLmlzQ29tcG9zaW5nQ3VzdG9tIHx8IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnVzZXJEcm9wZG93bikge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcgPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlucHV0VmFsdWVFZGl0YWJsZU1vZGUgfHwgdGhpcy5pc0NvbXBvc2luZyB8fCB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRWYWx1ZVN0eWxlKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xyXG4gICAgbGV0IHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XHJcbiAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICBpZiAoIXRoaXMubnpTaG93U2VhcmNoICYmICF0aGlzLnNob3dDbWFjc1NlYXJjaCkge1xyXG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5uek9wZW4pIHtcclxuICAgICAgICBpZiAodGhpcy5jbWFjc0VkaXRhYmxlKSB7XHJcbiAgICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pc0NvbXBvc2luZ0N1c3RvbSB8fCB0aGlzLmlucHV0VmFsdWVFZGl0YWJsZU1vZGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvd1NlbGVjdGVkVmFsdWUpIHtcclxuICAgICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuY21hY3NFZGl0YWJsZSkge1xyXG4gICAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhKHRoaXMuaXNDb21wb3NpbmdDdXN0b20gfHwgdGhpcy5pbnB1dFZhbHVlRWRpdGFibGVNb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlcnZpY2UuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSAmJiB0aGlzLmlucHV0VmFsdWUpIHtcclxuICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlcnZpY2UuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSAmJiAhdGhpcy5pbnB1dFZhbHVlKSB7XHJcbiAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRpc3BsYXk6IHNob3dTZWxlY3RlZFZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJyxcclxuICAgICAgJ21hcmdpbi1sZWZ0LnB4JzogdGhpcy5zaG93Q3VzdG9tU2VhcmNoID8gJzE1JyA6ICcwJyxcclxuICAgICAgb3BhY2l0eTogYCR7b3BhY2l0eX1gXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dDdXN0b21TZWFyY2hTdHlsZSgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICdtYXJnaW4tbGVmdC5weCc6IHRoaXMuc2hvd0N1c3RvbVNlYXJjaCA/ICcxNScgOiAnMCcsXHJcbiAgICAgICdwYWRkaW5nLWxlZnQucHgnOiB0aGlzLnVzZXJEcm9wZG93biA/ICcwJyA6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCk6IGFueSB7XHJcbiAgICByZXR1cm4gb3B0aW9uLm56VmFsdWU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVXaWR0aCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzICYmIHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAgIGAke3RoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGh9cHhgXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVXaWR0aEN1c3RvbSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzICYmIHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tKSB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0VmFsdWVFZGl0YWJsZU1vZGUgfHwgdGhpcy5pc0NvbXBvc2luZ0N1c3RvbSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudEN1c3RvbS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAgIGAke3RoaXMuaW5wdXRFbGVtZW50Q3VzdG9tLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGh9cHhgXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVTZWxlY3RlZFZhbHVlKG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5yZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZChvcHRpb24pOyAgIFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBDbWFjc1NlbGVjdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uub3BlbiQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShvcGVuID0+IHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmIG9wZW4pIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMuY21hY3NPcGVuKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudEN1c3RvbSAmJiBvcGVuKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlucHV0RWxlbWVudEN1c3RvbS5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudEN1c3RvbSAmJiB0aGlzLmNtYWNzT3Blbikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dEVsZW1lbnRDdXN0b20ubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jbGVhcklucHV0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgaWYgKCEodGhpcy5jbWFjc09wZW4gfHwgdGhpcy5uelNlbGVjdFNlcnZpY2UuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSkpIHtcclxuICAgICAgICB0aGlzLnNldElucHV0VmFsdWUoJycpO1xyXG4gICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZUN1c3RvbSgnJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2skLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrV3JhcHBlclNwYWNlKCk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgIGlmIChjaGFuZ2VzLnNlYXJjaFZhbHVlICYmIGNoYW5nZXMuc2VhcmNoVmFsdWUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKGNoYW5nZXMuc2VhcmNoVmFsdWUuY3VycmVudFZhbHVlKTtcclxuICAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZSAjaW5wdXRUZW1wbGF0ZT5cclxuICA8aW5wdXQgI2lucHV0RWxlbWVudCBhdXRvY29tcGxldGU9XCJzb21ldGhpbmctbmV3XCIgW25nU3R5bGVdPVwic2hvd0N1c3RvbVNlYXJjaFN0eWxlXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRcIlxyXG4gICAgKGNvbXBvc2l0aW9uc3RhcnQpPVwiaXNDb21wb3NpbmcgPSB0cnVlXCIgKGNvbXBvc2l0aW9uZW5kKT1cImlzQ29tcG9zaW5nID0gZmFsc2VcIiAoaW5wdXQpPVwidXBkYXRlV2lkdGgoKVwiXHJcbiAgICBbbmdNb2RlbF09XCJpbnB1dFZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwic2V0SW5wdXRWYWx1ZSgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cIm56U2VsZWN0U2VydmljZS5kaXNhYmxlZFwiXHJcbiAgICAgICAgIFtjbGFzcy5jbWFjcy1zZWxlY3Qtc2VsZWN0aW9uLW5vdC1lbXB0eV09XCJnZXRTZWxlY3RlZFZhbHVlcygpLmxlbmd0aCAmJiAhdGFnc091dFwiXHJcbiAgPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNjdXN0b21JbnB1dFRlbXBsYXRlPlxyXG4gIDxpbnB1dCAjaW5wdXRFbGVtZW50Q3VzdG9tIGF1dG9jb21wbGV0ZT1cInNvbWV0aGluZy1uZXdcIiBbbmdTdHlsZV09XCJzaG93Q3VzdG9tU2VhcmNoU3R5bGVcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZFwiXHJcbiAgICAgICAgIChjb21wb3NpdGlvbnN0YXJ0KT1cImlzQ29tcG9zaW5nQ3VzdG9tID0gdHJ1ZVwiIChjb21wb3NpdGlvbmVuZCk9XCJpc0NvbXBvc2luZ0N1c3RvbSA9IGZhbHNlXCIgKGlucHV0KT1cInVwZGF0ZVdpZHRoQ3VzdG9tKClcIlxyXG4gICAgICAgICBbbmdNb2RlbF09XCJpbnB1dFZhbHVlRWRpdGFibGVNb2RlXCIgKG5nTW9kZWxDaGFuZ2UpPVwic2V0SW5wdXRWYWx1ZUN1c3RvbSgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cIm56U2VsZWN0U2VydmljZS5kaXNhYmxlZFwiXHJcbiAgICAgICAgIFtjbGFzcy5jbWFjcy1zZWxlY3Qtc2VsZWN0aW9uLW5vdC1lbXB0eV09XCJnZXRTZWxlY3RlZFZhbHVlcygpLmxlbmd0aFwiPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LWFycm93IGNtYWNzLXNlYXJjaC1zZWFyY2gtaWNvblwiIGNtYWNzLXNlbGVjdC11bnNlbGVjdGFibGVcclxuICAqbmdJZj1cInNob3dDdXN0b21TZWFyY2hcIj5cclxuICA8aSBjbGFzcz1cImljb25DcmVhdGlvbi1TZWFyY2hcIj48L2k+XHJcbjwvc3Bhbj5cclxuPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZFwiICNjbWFjc1NlbGVjdFRhZ1dyYXBwZXI+XHJcbiAgPGRpdiAqbmdJZj1cIm56UGxhY2VIb2xkZXJcIiBjbWFjcy1zZWxlY3QtdW5zZWxlY3RhYmxlIFtzdHlsZS5kaXNwbGF5XT1cInBsYWNlSG9sZGVyRGlzcGxheVwiXHJcbiAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19wbGFjZWhvbGRlclwiPnt7IG56UGxhY2VIb2xkZXIgfX08L2Rpdj5cclxuICA8IS0tc2luZ2xlIG1vZGUtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmlzU2luZ2xlTW9kZSB8fCBuelNlbGVjdFNlcnZpY2UuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZVwiPlxyXG4gICAgPCEtLXNlbGVjdGVkIGxhYmVsLS0+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiIXVzZXJEcm9wZG93biAmJiBuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoICYmIG56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aFwiXHJcbiAgICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24tc2VsZWN0ZWQtdmFsdWVcIiBbYXR0ci50aXRsZV09XCJuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb25bMF0/Lm56TGFiZWxcIlxyXG4gICAgICAgICBbbmdTdHlsZV09XCJzZWxlY3RlZFZhbHVlU3R5bGVcIj5cclxuICAgICAge3sgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uWzBdPy5uekxhYmVsIH19XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS1zaG93IHNlYXJjaC0tPlxyXG4gICAgPGRpdiAqbmdJZj1cInNob3dDbWFjc1NlYXJjaFwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2ggYW50LXNlbGVjdC1zZWFyY2gtLWlubGluZVwiXHJcbiAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cIm56T3BlbiB8fCBuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoID8gJ2Jsb2NrJyA6ICdub25lJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkX193cmFwXCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlucHV0VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkX19taXJyb3JcIj57e2lucHV0VmFsdWV9fSZuYnNwOzwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS1zaG93IGN1c3RvbSBzZWFyY2ggZWRpdGFibGUgbW9kZS0tPlxyXG4gICAgPGRpdiAqbmdJZj1cImNtYWNzRWRpdGFibGVcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoIGFudC1zZWxlY3Qtc2VhcmNoLS1pbmxpbmVcIlxyXG4gICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJuek9wZW4gPyAnYmxvY2snIDogJ25vbmUnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRfX3dyYXBcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tSW5wdXRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRfX21pcnJvclwiPnt7aW5wdXRWYWx1ZX19Jm5ic3A7PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDwhLS1tdWx0aXBsZSBvciB0YWdzIG1vZGUtLT5cclxuICA8dWwgKm5nSWY9XCJuelNlbGVjdFNlcnZpY2UuaXNNdWx0aXBsZU9yVGFnc1wiICNjbWFjc1NlbGVjdFRhZ1dyYXBwZXJJbm5lciBjbGFzcz1cImNtYWNzLXNlbGVjdC10YWctd3JhcHBlci1pbm5lclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0YWdzT3V0ICYmICF1c2VyRHJvcGRvd25cIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uIHwgc2xpY2U6IDAgOiBuek1heFRhZ0NvdW50OyB0cmFja0J5OnRyYWNrVmFsdWU7XCI+XHJcbiAgICAgICAgPGxpIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCIgW2F0dHIudGl0bGVdPVwib3B0aW9uLm56TGFiZWxcIlxyXG4gICAgICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fZGlzYWJsZWRdPVwib3B0aW9uLm56RGlzYWJsZWRcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19jb250ZW50XCI+e3sgb3B0aW9uLm56TGFiZWwgfX08L2Rpdj5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIW9wdGlvbi5uekRpc2FibGVkXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmVcIlxyXG4gICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiIChjbGljayk9XCJyZW1vdmVTZWxlY3RlZFZhbHVlKG9wdGlvbiwgJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXJlbW92ZS1pY29uXCIgKm5nSWY9XCIhbnpSZW1vdmVJY29uOyBlbHNlIG56UmVtb3ZlSWNvblwiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPGxpICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCA+IG56TWF4VGFnQ291bnRcIlxyXG4gICAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fY29udGVudFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56TWF4VGFnUGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56TWF4VGFnUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWUgfCBzbGljZTogbnpNYXhUYWdDb3VudH1cIj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuek1heFRhZ1BsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICsge3sgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCAtIG56TWF4VGFnQ291bnQgfX0gLi4uXHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPGxpIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2ggYW50LXNlbGVjdC1zZWFyY2gtLWlubGluZVwiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaW5wdXRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbiAgXHJcbjwvZGl2PlxyXG48c3BhbiAqbmdJZj1cIm56QWxsb3dDbGVhciAmJiBuelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggJiYgIXVzZXJEcm9wZG93blwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2NsZWFyXCJcclxuICAgICAgW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19jbGVhci1zZWFyY2hdPVwic2hvd0N1c3RvbVNlYXJjaFwiXHJcbiAgY21hY3Mtc2VsZWN0LXVuc2VsZWN0YWJsZSAobW91c2Vkb3duKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCIgKGNsaWNrKT1cIm9uQ2xlYXJTZWxlY3Rpb24oJGV2ZW50KVwiPlxyXG4gIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCIgdGhlbWU9XCJmaWxsXCIgKm5nSWY9XCIhbnpDbGVhckljb247IGVsc2UgbnpDbGVhckljb25cIiBjbGFzcz1cImFudC1zZWxlY3QtY2xvc2UtaWNvblwiPjwvaT5cclxuPC9zcGFuPlxyXG48c3BhbiBjbGFzcz1cImFudC1zZWxlY3QtYXJyb3cgY21hY3Mtc2VhcmNoLWFycm93LXJpZ2h0XCIgY21hY3Mtc2VsZWN0LXVuc2VsZWN0YWJsZVxyXG4gICAgICBbY2xhc3MuY21hY3Mtc2VsZWN0ZWQtbm9kZXNdPVwiZ2V0U2VsZWN0ZWRWYWx1ZXMoKS5sZW5ndGhcIlxyXG4gICAgICAqbmdJZj1cInNob3dDdXN0b21TZWFyY2g7IGVsc2Ugbm90Q3VzdG9tQXJyb3dcIj5cclxuICAgIDxpIGNsYXNzPVwiaWNvbkFycm93TGFyZ2UtQXJyb3ctUmlnaHRcIj48L2k+XHJcbjwvc3Bhbj5cclxuPG5nLXRlbXBsYXRlICNub3RDdXN0b21BcnJvdz5cclxuICA8c3BhbiBjbGFzcz1cImFudC1zZWxlY3QtYXJyb3cgY21hY3MtZHJvcGRvd24tYXJyb3dcIiBbY2xhc3MuY21hY3Mtc2VsZWN0LWFjdGlvbl09XCJhY3Rpb25cIiBjbWFjcy1zZWxlY3QtdW5zZWxlY3RhYmxlICpuZ0lmPVwibnpTaG93QXJyb3dcIj5cclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiICpuZ0lmPVwibnpMb2FkaW5nOyBlbHNlIGRlZmF1bHRBcnJvd1wiPjwvaT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdEFycm93PlxyXG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZG93blwiIGNsYXNzPVwiYW50LXNlbGVjdC1hcnJvdy1pY29uXCIgKm5nSWY9XCIhbnpTdWZmaXhJY29uOyBlbHNlIG56U3VmZml4SWNvblwiPjwvaT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgPC9zcGFuPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=