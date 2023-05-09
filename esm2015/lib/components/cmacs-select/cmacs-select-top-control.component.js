import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Host, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { ResizeObserver } from '@juggle/resize-observer';
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
    i0.ɵɵelementStart(0, "div", 20);
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
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵlistener("tap", function CmacsSelectTopControlComponent_ng_container_8_div_2_Template_div_tap_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.focusInput(); });
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_container_8_div_2_ng_template_2_Template, 0, 0, "ng-template", 23);
    i0.ɵɵelementStart(3, "span", 24);
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
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_container_8_div_3_ng_template_2_Template, 0, 0, "ng-template", 23);
    i0.ɵɵelementStart(3, "span", 24);
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
    i0.ɵɵtemplate(3, CmacsSelectTopControlComponent_ng_container_8_div_3_Template, 5, 4, "div", 19);
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
    i0.ɵɵelement(0, "i", 35);
} }
function CmacsSelectTopControlComponent_ul_9_ng_container_2_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("mousedown", function CmacsSelectTopControlComponent_ul_9_ng_container_2_ng_container_1_span_4_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsSelectTopControlComponent_ul_9_ng_container_2_ng_container_1_span_4_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r43); const option_r37 = i0.ɵɵnextContext().$implicit; const ctx_r41 = i0.ɵɵnextContext(3); return ctx_r41.removeSelectedValue(option_r37, $event); });
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_9_ng_container_2_ng_container_1_span_4_i_1_Template, 1, 0, "i", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r38.nzRemoveIcon)("ngIfElse", ctx_r38.nzRemoveIcon);
} }
function CmacsSelectTopControlComponent_ul_9_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 30);
    i0.ɵɵelementStart(2, "div", 31);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsSelectTopControlComponent_ul_9_ng_container_2_ng_container_1_span_4_Template, 2, 2, "span", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r37 = ctx.$implicit;
    const ctx_r35 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-select-selection__choice__disabled", option_r37.nzDisabled);
    i0.ɵɵproperty("nzNoAnimation", ctx_r35.noAnimation == null ? null : ctx_r35.noAnimation.nzNoAnimation);
    i0.ɵɵattribute("title", option_r37.nzLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r37.nzLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !option_r37.nzDisabled);
} }
function CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_ng_container_2_ng_template_1_Template(rf, ctx) { }
const _c5 = function (a0) { return { $implicit: a0 }; };
function CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 36);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r44.nzMaxTagPlaceholder)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c5, i0.ɵɵpipeBind2(2, 2, ctx_r44.nzSelectService.listOfSelectedValue, ctx_r44.nzMaxTagCount)));
} }
function CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" + ", ctx_r45.nzSelectService.listOfCachedSelectedOption.length - ctx_r45.nzMaxTagCount, " ... ");
} }
function CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 30);
    i0.ɵɵelementStart(1, "div", 31);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_ng_container_2_Template, 3, 7, "ng-container", 6);
    i0.ɵɵtemplate(3, CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_ng_container_3_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzNoAnimation", ctx_r36.noAnimation == null ? null : ctx_r36.noAnimation.nzNoAnimation);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r36.nzMaxTagPlaceholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r36.nzMaxTagPlaceholder);
} }
function CmacsSelectTopControlComponent_ul_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_9_ng_container_2_ng_container_1_Template, 5, 6, "ng-container", 28);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵtemplate(3, CmacsSelectTopControlComponent_ul_9_ng_container_2_li_3_Template, 4, 3, "li", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(2, 3, ctx_r33.listOfCachedSelectedOption, 0, ctx_r33.nzMaxTagCount))("ngForTrackBy", ctx_r33.trackValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r33.nzSelectService.listOfCachedSelectedOption.length > ctx_r33.nzMaxTagCount);
} }
function CmacsSelectTopControlComponent_ul_9_ng_template_4_Template(rf, ctx) { }
function CmacsSelectTopControlComponent_ul_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 26, 27);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ul_9_ng_container_2_Template, 4, 7, "ng-container", 6);
    i0.ɵɵelementStart(3, "li", 25);
    i0.ɵɵtemplate(4, CmacsSelectTopControlComponent_ul_9_ng_template_4_Template, 0, 0, "ng-template", 23);
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
    i0.ɵɵelement(0, "i", 39);
} }
function CmacsSelectTopControlComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 37);
    i0.ɵɵlistener("mousedown", function CmacsSelectTopControlComponent_span_10_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsSelectTopControlComponent_span_10_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r49 = i0.ɵɵnextContext(); return ctx_r49.onClearSelection($event); });
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_span_10_i_1_Template, 1, 0, "i", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-select-selection__clear-search", ctx_r9.showCustomSearch);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r9.nzClearIcon)("ngIfElse", ctx_r9.nzClearIcon);
} }
function CmacsSelectTopControlComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 40);
    i0.ɵɵelement(1, "i", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-selected-nodes", ctx_r10.getSelectedValues().length);
} }
function CmacsSelectTopControlComponent_ng_template_12_span_0_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 46);
} }
function CmacsSelectTopControlComponent_ng_template_12_span_0_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 48);
} }
function CmacsSelectTopControlComponent_ng_template_12_span_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsSelectTopControlComponent_ng_template_12_span_0_ng_template_2_i_0_Template, 1, 0, "i", 47);
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", !ctx_r54.nzSuffixIcon)("ngIfElse", ctx_r54.nzSuffixIcon);
} }
function CmacsSelectTopControlComponent_ng_template_12_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 43);
    i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ng_template_12_span_0_i_1_Template, 1, 0, "i", 44);
    i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_template_12_span_0_ng_template_2_Template, 1, 2, "ng-template", null, 45, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r53 = i0.ɵɵreference(3);
    const ctx_r51 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-select-action", ctx_r51.action);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r51.nzLoading)("ngIfElse", _r53);
} }
function CmacsSelectTopControlComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsSelectTopControlComponent_ng_template_12_span_0_Template, 4, 4, "span", 42);
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r12.nzShowArrow);
} }
export class CmacsSelectTopControlComponent {
    constructor(renderer, ref, nzSelectService, cdr, noAnimation) {
        this.renderer = renderer;
        this.ref = ref;
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
                const newLength = option.nzLabel.length * 8.6 + 34;
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
    focusInput() {
        setTimeout(() => {
            if (this.inputElement && this.nzOpen) {
                this.cdr.detectChanges();
                setTimeout(() => {
                    this.inputElement.nativeElement.focus();
                }, 100);
            }
        }, 300);
    }
    ngOnInit() {
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe(open => {
            if (this.inputElement && open) {
                this.cdr.detectChanges();
                setTimeout(() => {
                    this.inputElement.nativeElement.onclick = (e) => {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                        this.inputElement.nativeElement.focus();
                    };
                    this.inputElement.nativeElement.click();
                }, 300);
            }
            if (this.inputElement && this.cmacsOpen) {
                this.cdr.detectChanges();
                setTimeout(() => {
                    this.inputElement.nativeElement.onclick = (e) => {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                        this.inputElement.nativeElement.focus();
                    };
                    this.inputElement.nativeElement.click();
                }, 300);
            }
            if (this.inputElementCustom && open) {
                this.cdr.detectChanges();
                setTimeout(() => {
                    this.inputElementCustom.nativeElement.focus();
                }, 300);
            }
            if (this.inputElementCustom && this.cmacsOpen) {
                this.cdr.detectChanges();
                setTimeout(() => {
                    this.inputElementCustom.nativeElement.focus();
                }, 300);
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
        this.checkResizeEvent();
    }
    checkResizeEvent() {
        const ro = new ResizeObserver((entries, observer) => {
            this.checkWrapperSpace();
            this.cdr.markForCheck();
        });
        ro.observe(this.ref.nativeElement);
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
CmacsSelectTopControlComponent.ɵfac = function CmacsSelectTopControlComponent_Factory(t) { return new (t || CmacsSelectTopControlComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.CmacsSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); };
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
    } }, inputs: { searchValue: "searchValue", nzShowSearch: "nzShowSearch", showCustomSearch: "showCustomSearch", showCmacsSearch: "showCmacsSearch", nzPlaceHolder: "nzPlaceHolder", tagsOut: "tagsOut", nzOpen: "nzOpen", cmacsOpen: "cmacsOpen", cmacsEditable: "cmacsEditable", action: "action", nzMaxTagCount: "nzMaxTagCount", nzAllowClear: "nzAllowClear", nzShowArrow: "nzShowArrow", nzLoading: "nzLoading", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", userDropdown: "userDropdown", maxTagCountAuto: "maxTagCountAuto", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzTokenSeparators: "nzTokenSeparators" }, exportAs: ["cmacsSelectTopControl"], features: [i0.ɵɵNgOnChangesFeature], attrs: _c4, decls: 14, vars: 9, consts: [["inputTemplate", ""], ["customInputTemplate", ""], ["class", "ant-select-arrow cmacs-search-search-icon", "cmacs-select-unselectable", "", 4, "ngIf"], [1, "ant-select-selection__rendered"], ["cmacsSelectTagWrapper", ""], ["cmacs-select-unselectable", "", "class", "ant-select-selection__placeholder", 3, "display", 4, "ngIf"], [4, "ngIf"], ["class", "cmacs-select-tag-wrapper-inner", 4, "ngIf"], ["class", "ant-select-selection__clear", "cmacs-select-unselectable", "", 3, "ant-select-selection__clear-search", "mousedown", "click", 4, "ngIf"], ["class", "ant-select-arrow cmacs-search-arrow-right", "cmacs-select-unselectable", "", 3, "cmacs-selected-nodes", 4, "ngIf", "ngIfElse"], ["notCustomArrow", ""], ["autocomplete", "something-new", 1, "ant-select-search__field", 3, "ngStyle", "ngModel", "disabled", "compositionstart", "compositionend", "input", "ngModelChange"], ["inputElement", ""], ["inputElementCustom", ""], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-search-search-icon"], [1, "iconCreation-Search"], ["cmacs-select-unselectable", "", 1, "ant-select-selection__placeholder"], ["class", "ant-select-selection-selected-value", 3, "ngStyle", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", "tap", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", 4, "ngIf"], [1, "ant-select-selection-selected-value", 3, "ngStyle"], [1, "ant-select-search", "ant-select-search--inline", 3, "tap"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [1, "ant-select-search__field__mirror"], [1, "ant-select-search", "ant-select-search--inline"], [1, "cmacs-select-tag-wrapper-inner"], ["cmacsSelectTagWrapperInner", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 3, "nzNoAnimation", 4, "ngIf"], [1, "ant-select-selection__choice", 3, "nzNoAnimation"], [1, "ant-select-selection__choice__content"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close", "class", "ant-select-remove-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close", 1, "ant-select-remove-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cmacs-select-unselectable", "", 1, "ant-select-selection__clear", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close-circle", "theme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "theme", "fill", 1, "ant-select-close-icon"], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-search-arrow-right"], [1, "iconArrowLarge-Arrow-Right"], ["class", "ant-select-arrow cmacs-dropdown-arrow", "cmacs-select-unselectable", "", 3, "cmacs-select-action", 4, "ngIf"], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-dropdown-arrow"], ["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "nzType", "loading"], ["nz-icon", "", "nzType", "down", "class", "ant-select-arrow-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "down", 1, "ant-select-arrow-icon"]], template: function CmacsSelectTopControlComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("cmacs-select-user-dropdown", ctx.userDropdown);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.nzPlaceHolder);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzSelectService.isSingleMode || ctx.nzSelectService.isTagsSingleSelectMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzAllowClear && ctx.nzSelectService.listOfSelectedValue.length && !ctx.userDropdown);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCustomSearch)("ngIfElse", _r11);
    } }, directives: [i3.NgIf, i4.DefaultValueAccessor, i3.NgStyle, i4.NgControlStatus, i4.NgModel, i5.CmacsSelectUnselectableDirective, i3.NgTemplateOutlet, i3.NgForOf, i2.NzNoAnimationDirective, i6.ɵNzTransitionPatchDirective, i7.NzIconDirective], pipes: [i3.SlicePipe], styles: [".cmacs-select-action{border-left:1px solid #dee0e5}.cmacs-select-tag-wrapper-inner{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.ant-select-selection__rendered{margin-right:35px}.ant-select-selection--multiple .ant-select-arrow.cmacs-select-action:hover{padding:8px 10px 8px 11px;right:1px;top:7px!important}.ant-select-selection__rendered:hover .cmacs-select-action,.cmacs-select-action:hover{background-color:#f6f7fb}.cmacs-search-search-icon{left:11px;font-size:16px;top:14px}.cmacs-search-arrow-right,.cmacs-search-search-icon{right:unset;z-index:unset;opacity:1!important;margin-left:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cmacs-search-arrow-right{font-size:27px;top:7px!important;left:calc(100% - 43px);border-left:1px solid #dee0e5;padding:0 5px}cmacs-select:not(.ant-select-disabled) .cmacs-dropdown-arrow{cursor:pointer}cmacs-select .cmacs-dropdown-arrow{right:0;top:6px;padding:9px 11px}.ant-select-selection .ant-select-selection__clear{right:11px;top:12px!important;line-height:1.5}.ant-select-selection--multiple .ant-select-arrow,.ant-select-selection--multiple .ant-select-selection__clear{top:6px}.ant-select-selection:hover .cmacs-selected-nodes .iconArrowLarge-Arrow-Right:before{opacity:0}.ant-select-selection__clear-search{right:15px}.ant-select-search--inline .ant-select-search__field{max-width:94%}.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field.cmacs-select-selection-not-empty{padding-left:0!important}.ant-select-selection--single{height:34px}.ant-select-selection--single .ant-select-selection__rendered{line-height:32px}.cmacs-invisible{opacity:0}"], encapsulation: 2, changeDetection: 0 });
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
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.CmacsSelectService }, { type: i0.ChangeDetectorRef }, { type: i2.NzNoAnimationDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxJQUFJLEVBRUosS0FBSyxFQUdMLFFBQVEsRUFHUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNyQnZELHFDQUlDO0lBSEMsZ09BQWtDLElBQUksSUFBQywrTUFBaUMsS0FBSyxJQUF0QyxnTUFBQSw4TkFBQTtJQUR6QyxpQkFJQzs7O0lBREMsd0dBQWlGO0lBSGpDLHNEQUFpQyw4QkFBQSw2Q0FBQTs7OztJQVFuRixxQ0FHNkU7SUFGdEUsc09BQXdDLElBQUksSUFBQyxxTkFBdUMsS0FBSyxJQUE1QyxzTUFBQSxvT0FBQTtJQURwRCxpQkFHNkU7OztJQUF0RSxxRkFBcUU7SUFIcEIsc0RBQWlDLDBDQUFBLDZDQUFBOzs7SUFNM0YsZ0NB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VztrQkFBbkIsS0FBSztZQUlxQixZQUFZO2tCQUF0QyxTQUFTO21CQUFDLGNBQWM7WUFDUSxrQkFBa0I7a0JBQWxELFNBQVM7bUJBQUMsb0JBQW9CO1lBQ0sscUJBQXFCO2tCQUF4RCxTQUFTO21CQUFDLHVCQUF1QjtZQUNPLDBCQUEwQjtrQkFBbEUsU0FBUzttQkFBQyw0QkFBNEI7WUFDOUIsWUFBWTtrQkFBcEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUVHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ21CLFlBQVk7a0JBQXBDLEtBQUs7WUFDbUIsZUFBZTtrQkFBdkMsS0FBSztZQUVHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENtYWNzU2VsZWN0U2VydmljZSB9IGZyb20gJy4vY21hY3Mtc2VsZWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBSZXNpemVPYnNlcnZlciB9IGZyb20gJ0BqdWdnbGUvcmVzaXplLW9ic2VydmVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLXNlbGVjdC10b3AtY29udHJvbF0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTZWxlY3RUb3BDb250cm9sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBpbnB1dFZhbHVlRWRpdGFibGVNb2RlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIGlzQ29tcG9zaW5nID0gZmFsc2U7XHJcbiAgaXNDb21wb3NpbmdDdXN0b20gPSBmYWxzZTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50Q3VzdG9tJykgaW5wdXRFbGVtZW50Q3VzdG9tOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2NtYWNzU2VsZWN0VGFnV3JhcHBlcicpIGNtYWNzU2VsZWN0VGFnV3JhcHBlcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdjbWFjc1NlbGVjdFRhZ1dyYXBwZXJJbm5lcicpIGNtYWNzU2VsZWN0VGFnV3JhcHBlcklubmVyOiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIG56U2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dDdXN0b21TZWFyY2ggPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHNob3dDbWFjc1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSB0YWdzT3V0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpPcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY21hY3NPcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY21hY3NFZGl0YWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFjdGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56TWF4VGFnQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBuekFsbG93Q2xlYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelNob3dBcnJvdyA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpMb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpTdWZmaXhJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekNsZWFySWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpSZW1vdmVJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdXNlckRyb3Bkb3duID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG1heFRhZ0NvdW50QXV0byA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBuek1heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55W10gfT47XHJcbiAgQElucHV0KCkgbnpUb2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdID0gW107XHJcbiAgbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb246IGFueVtdID0gW107XHJcblxyXG4gIGNoZWNrV3JhcHBlclNwYWNlKCkge1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3MgJiYgdGhpcy5tYXhUYWdDb3VudEF1dG8pIHtcclxuICAgICAgdGhpcy5uek1heFRhZ0NvdW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgY29uc3QgdGFnc09yZGVyZWQgPSB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5zb3J0KChhLCBiKSA9PiBhLm56TGFiZWwubGVuZ3RoIC0gYi5uekxhYmVsLmxlbmd0aCk7XHJcbiAgICAgIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gPSBbLi4udGFnc09yZGVyZWRdO1xyXG4gICAgICBsZXQgdGFnc0xlbmd0aCA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFnc09yZGVyZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbltpXTtcclxuICAgICAgICBjb25zdCBuZXdMZW5ndGggPSBvcHRpb24ubnpMYWJlbC5sZW5ndGggKiA4LjYgKyAzNDtcclxuICAgICAgICB0YWdzTGVuZ3RoICs9IG5ld0xlbmd0aDtcclxuICAgICAgICBpZiAodGFnc0xlbmd0aCArIDM0ID4gdGhpcy5jbWFjc1NlbGVjdFRhZ1dyYXBwZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgICAgaWYgKHRhZ3NMZW5ndGggLSBuZXdMZW5ndGggKyAxMDQgPD0gdGhpcy5jbWFjc1NlbGVjdFRhZ1dyYXBwZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLm56TWF4VGFnQ291bnQgPSBpID8gaSA6IDA7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm56TWF4VGFnQ291bnQgPSBpID8gaSAtIDEgOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbiA9IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGVhclNlbGVjdGlvbihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbXSwgdHJ1ZSk7XHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlcnZpY2UuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSkge1xyXG4gICAgICB0aGlzLnNldElucHV0VmFsdWUoJycpO1xyXG4gICAgICB0aGlzLnNldElucHV0VmFsdWVDdXN0b20oJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRWYWx1ZXMoKXtcclxuICAgIHJldHVybiB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVTZWFyY2hWYWx1ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS50b2tlblNlcGFyYXRlKHRoaXMuaW5wdXRWYWx1ZSwgdGhpcy5uelRva2VuU2VwYXJhdG9ycyk7XHJcbiAgfVxyXG5cclxuICBzZXRJbnB1dFZhbHVlQ3VzdG9tKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudEN1c3RvbSkge1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudEN1c3RvbS5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlucHV0VmFsdWVFZGl0YWJsZU1vZGUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlV2lkdGhDdXN0b20oKTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUVkaXRlZFZhbHVlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBwbGFjZUhvbGRlckRpc3BsYXkoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmNtYWNzRWRpdGFibGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZSB8fCB0aGlzLmlzQ29tcG9zaW5nQ3VzdG9tIHx8IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnVzZXJEcm9wZG93bikge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcgPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlucHV0VmFsdWVFZGl0YWJsZU1vZGUgfHwgdGhpcy5pc0NvbXBvc2luZyB8fCB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRWYWx1ZVN0eWxlKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xyXG4gICAgbGV0IHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XHJcbiAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICBpZiAoIXRoaXMubnpTaG93U2VhcmNoICYmICF0aGlzLnNob3dDbWFjc1NlYXJjaCkge1xyXG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5uek9wZW4pIHtcclxuICAgICAgICBpZiAodGhpcy5jbWFjc0VkaXRhYmxlKSB7XHJcbiAgICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pc0NvbXBvc2luZ0N1c3RvbSB8fCB0aGlzLmlucHV0VmFsdWVFZGl0YWJsZU1vZGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvd1NlbGVjdGVkVmFsdWUpIHtcclxuICAgICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuY21hY3NFZGl0YWJsZSkge1xyXG4gICAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhKHRoaXMuaXNDb21wb3NpbmdDdXN0b20gfHwgdGhpcy5pbnB1dFZhbHVlRWRpdGFibGVNb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlcnZpY2UuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSAmJiB0aGlzLmlucHV0VmFsdWUpIHtcclxuICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlcnZpY2UuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSAmJiAhdGhpcy5pbnB1dFZhbHVlKSB7XHJcbiAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRpc3BsYXk6IHNob3dTZWxlY3RlZFZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJyxcclxuICAgICAgJ21hcmdpbi1sZWZ0LnB4JzogdGhpcy5zaG93Q3VzdG9tU2VhcmNoID8gJzE1JyA6ICcwJyxcclxuICAgICAgb3BhY2l0eTogYCR7b3BhY2l0eX1gXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dDdXN0b21TZWFyY2hTdHlsZSgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICdtYXJnaW4tbGVmdC5weCc6IHRoaXMuc2hvd0N1c3RvbVNlYXJjaCA/ICcxNScgOiAnMCcsXHJcbiAgICAgICdwYWRkaW5nLWxlZnQucHgnOiB0aGlzLnVzZXJEcm9wZG93biA/ICcwJyA6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCk6IGFueSB7XHJcbiAgICByZXR1cm4gb3B0aW9uLm56VmFsdWU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVXaWR0aCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzICYmIHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAgIGAke3RoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGh9cHhgXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVXaWR0aEN1c3RvbSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzICYmIHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tKSB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0VmFsdWVFZGl0YWJsZU1vZGUgfHwgdGhpcy5pc0NvbXBvc2luZ0N1c3RvbSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudEN1c3RvbS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAgIGAke3RoaXMuaW5wdXRFbGVtZW50Q3VzdG9tLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGh9cHhgXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVTZWxlY3RlZFZhbHVlKG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5yZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZChvcHRpb24pOyAgIFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyBuelNlbGVjdFNlcnZpY2U6IENtYWNzU2VsZWN0U2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkgeyB9XHJcblxyXG4gIGZvY3VzSW5wdXQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMubnpPcGVuKSB7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICAgIH0gICBcclxuICAgIH0sIDMwMCkgICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uub3BlbiQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShvcGVuID0+IHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmIG9wZW4pIHtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50Lm9uY2xpY2sgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5jbWFjc09wZW4pIHtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50Lm9uY2xpY2sgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRDdXN0b20gJiYgb3Blbikge1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudEN1c3RvbSAmJiB0aGlzLmNtYWNzT3Blbikge1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNsZWFySW5wdXQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBpZiAoISh0aGlzLmNtYWNzT3BlbiB8fCB0aGlzLm56U2VsZWN0U2VydmljZS5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlKSkge1xyXG4gICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgnJyk7XHJcbiAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlQ3VzdG9tKCcnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2tXcmFwcGVyU3BhY2UoKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hlY2tSZXNpemVFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tSZXNpemVFdmVudCgpIHtcclxuICAgIGNvbnN0IHJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrV3JhcHBlclNwYWNlKCk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICByby5vYnNlcnZlKHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICBpZiAoY2hhbmdlcy5zZWFyY2hWYWx1ZSAmJiBjaGFuZ2VzLnNlYXJjaFZhbHVlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShjaGFuZ2VzLnNlYXJjaFZhbHVlLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI2lucHV0VGVtcGxhdGU+XHJcbiAgPGlucHV0ICNpbnB1dEVsZW1lbnQgYXV0b2NvbXBsZXRlPVwic29tZXRoaW5nLW5ld1wiIFtuZ1N0eWxlXT1cInNob3dDdXN0b21TZWFyY2hTdHlsZVwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkXCJcclxuICAgIChjb21wb3NpdGlvbnN0YXJ0KT1cImlzQ29tcG9zaW5nID0gdHJ1ZVwiIChjb21wb3NpdGlvbmVuZCk9XCJpc0NvbXBvc2luZyA9IGZhbHNlXCIgKGlucHV0KT1cInVwZGF0ZVdpZHRoKClcIlxyXG4gICAgW25nTW9kZWxdPVwiaW5wdXRWYWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cInNldElucHV0VmFsdWUoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJuelNlbGVjdFNlcnZpY2UuZGlzYWJsZWRcIlxyXG4gICAgW2NsYXNzLmNtYWNzLXNlbGVjdC1zZWxlY3Rpb24tbm90LWVtcHR5XT1cImdldFNlbGVjdGVkVmFsdWVzKCkubGVuZ3RoICYmICF0YWdzT3V0XCJcclxuICA+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2N1c3RvbUlucHV0VGVtcGxhdGU+XHJcbiAgPGlucHV0ICNpbnB1dEVsZW1lbnRDdXN0b20gYXV0b2NvbXBsZXRlPVwic29tZXRoaW5nLW5ld1wiIFtuZ1N0eWxlXT1cInNob3dDdXN0b21TZWFyY2hTdHlsZVwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkXCJcclxuICAgICAgICAgKGNvbXBvc2l0aW9uc3RhcnQpPVwiaXNDb21wb3NpbmdDdXN0b20gPSB0cnVlXCIgKGNvbXBvc2l0aW9uZW5kKT1cImlzQ29tcG9zaW5nQ3VzdG9tID0gZmFsc2VcIiAoaW5wdXQpPVwidXBkYXRlV2lkdGhDdXN0b20oKVwiXHJcbiAgICAgICAgIFtuZ01vZGVsXT1cImlucHV0VmFsdWVFZGl0YWJsZU1vZGVcIiAobmdNb2RlbENoYW5nZSk9XCJzZXRJbnB1dFZhbHVlQ3VzdG9tKCRldmVudClcIiBbZGlzYWJsZWRdPVwibnpTZWxlY3RTZXJ2aWNlLmRpc2FibGVkXCJcclxuICAgICAgICAgW2NsYXNzLmNtYWNzLXNlbGVjdC1zZWxlY3Rpb24tbm90LWVtcHR5XT1cImdldFNlbGVjdGVkVmFsdWVzKCkubGVuZ3RoXCI+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48c3BhbiBjbGFzcz1cImFudC1zZWxlY3QtYXJyb3cgY21hY3Mtc2VhcmNoLXNlYXJjaC1pY29uXCIgY21hY3Mtc2VsZWN0LXVuc2VsZWN0YWJsZVxyXG4gICpuZ0lmPVwic2hvd0N1c3RvbVNlYXJjaFwiPlxyXG4gIDxpIGNsYXNzPVwiaWNvbkNyZWF0aW9uLVNlYXJjaFwiPjwvaT5cclxuPC9zcGFuPlxyXG48ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX3JlbmRlcmVkXCIgI2NtYWNzU2VsZWN0VGFnV3JhcHBlciBbY2xhc3MuY21hY3Mtc2VsZWN0LXVzZXItZHJvcGRvd25dPVwidXNlckRyb3Bkb3duXCI+XHJcbiAgPGRpdiAqbmdJZj1cIm56UGxhY2VIb2xkZXJcIiBjbWFjcy1zZWxlY3QtdW5zZWxlY3RhYmxlIFtzdHlsZS5kaXNwbGF5XT1cInBsYWNlSG9sZGVyRGlzcGxheVwiXHJcbiAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19wbGFjZWhvbGRlclwiPnt7IG56UGxhY2VIb2xkZXIgfX08L2Rpdj5cclxuICA8IS0tc2luZ2xlIG1vZGUtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmlzU2luZ2xlTW9kZSB8fCBuelNlbGVjdFNlcnZpY2UuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZVwiPlxyXG4gICAgPCEtLXNlbGVjdGVkIGxhYmVsLS0+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiIXVzZXJEcm9wZG93biAmJiBuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoICYmIG56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aFwiXHJcbiAgICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24tc2VsZWN0ZWQtdmFsdWVcIiBbYXR0ci50aXRsZV09XCJuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb25bMF0/Lm56TGFiZWxcIlxyXG4gICAgICAgICBbbmdTdHlsZV09XCJzZWxlY3RlZFZhbHVlU3R5bGVcIj5cclxuICAgICAge3sgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uWzBdPy5uekxhYmVsIH19XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS1zaG93IHNlYXJjaC0tPlxyXG4gICAgPGRpdiAqbmdJZj1cInNob3dDbWFjc1NlYXJjaFwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2ggYW50LXNlbGVjdC1zZWFyY2gtLWlubGluZVwiICh0YXApPVwiZm9jdXNJbnB1dCgpXCJcclxuICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwibnpPcGVuIHx8IG56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggPyAnYmxvY2snIDogJ25vbmUnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRfX3dyYXBcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaW5wdXRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRfX21pcnJvclwiPnt7aW5wdXRWYWx1ZX19Jm5ic3A7PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLXNob3cgY3VzdG9tIHNlYXJjaCBlZGl0YWJsZSBtb2RlLS0+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiY21hY3NFZGl0YWJsZVwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2ggYW50LXNlbGVjdC1zZWFyY2gtLWlubGluZVwiXHJcbiAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cIm56T3BlbiA/ICdibG9jaycgOiAnbm9uZSdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fd3JhcFwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21JbnB1dFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fbWlycm9yXCI+e3tpbnB1dFZhbHVlfX0mbmJzcDs8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPCEtLW11bHRpcGxlIG9yIHRhZ3MgbW9kZS0tPlxyXG4gIDx1bCAqbmdJZj1cIm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzXCIgI2NtYWNzU2VsZWN0VGFnV3JhcHBlcklubmVyIGNsYXNzPVwiY21hY3Mtc2VsZWN0LXRhZy13cmFwcGVyLWlubmVyXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXRhZ3NPdXQgJiYgIXVzZXJEcm9wZG93blwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gfCBzbGljZTogMCA6IG56TWF4VGFnQ291bnQ7IHRyYWNrQnk6dHJhY2tWYWx1ZTtcIj5cclxuICAgICAgICA8bGkgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIiBbYXR0ci50aXRsZV09XCJvcHRpb24ubnpMYWJlbFwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19kaXNhYmxlZF09XCJvcHRpb24ubnpEaXNhYmxlZFwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX2NvbnRlbnRcIj57eyBvcHRpb24ubnpMYWJlbCB9fTwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCIhb3B0aW9uLm56RGlzYWJsZWRcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCIgKGNsaWNrKT1cInJlbW92ZVNlbGVjdGVkVmFsdWUob3B0aW9uLCAkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2VcIiBjbGFzcz1cImFudC1zZWxlY3QtcmVtb3ZlLWljb25cIiAqbmdJZj1cIiFuelJlbW92ZUljb247IGVsc2UgbnpSZW1vdmVJY29uXCI+PC9pPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bGkgKm5nSWY9XCJuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoID4gbnpNYXhUYWdDb3VudFwiXHJcbiAgICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19jb250ZW50XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpNYXhUYWdQbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpNYXhUYWdQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBuelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZSB8IHNsaWNlOiBuek1heFRhZ0NvdW50fVwiPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW56TWF4VGFnUGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgKyB7eyBuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoIC0gbnpNYXhUYWdDb3VudCB9fSAuLi5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bGkgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaCBhbnQtc2VsZWN0LXNlYXJjaC0taW5saW5lXCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpbnB1dFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuICBcclxuPC9kaXY+XHJcbjxzcGFuICpuZ0lmPVwibnpBbGxvd0NsZWFyICYmIG56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCAmJiAhdXNlckRyb3Bkb3duXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2xlYXJcIlxyXG4gICAgICBbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb25fX2NsZWFyLXNlYXJjaF09XCJzaG93Q3VzdG9tU2VhcmNoXCJcclxuICBjbWFjcy1zZWxlY3QtdW5zZWxlY3RhYmxlIChtb3VzZWRvd24pPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIiAoY2xpY2spPVwib25DbGVhclNlbGVjdGlvbigkZXZlbnQpXCI+XHJcbiAgPGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZS1jaXJjbGVcIiB0aGVtZT1cImZpbGxcIiAqbmdJZj1cIiFuekNsZWFySWNvbjsgZWxzZSBuekNsZWFySWNvblwiIGNsYXNzPVwiYW50LXNlbGVjdC1jbG9zZS1pY29uXCI+PC9pPlxyXG48L3NwYW4+XHJcbjxzcGFuIGNsYXNzPVwiYW50LXNlbGVjdC1hcnJvdyBjbWFjcy1zZWFyY2gtYXJyb3ctcmlnaHRcIiBjbWFjcy1zZWxlY3QtdW5zZWxlY3RhYmxlXHJcbiAgICAgIFtjbGFzcy5jbWFjcy1zZWxlY3RlZC1ub2Rlc109XCJnZXRTZWxlY3RlZFZhbHVlcygpLmxlbmd0aFwiXHJcbiAgICAgICpuZ0lmPVwic2hvd0N1c3RvbVNlYXJjaDsgZWxzZSBub3RDdXN0b21BcnJvd1wiPlxyXG4gICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1BcnJvdy1SaWdodFwiPjwvaT5cclxuPC9zcGFuPlxyXG48bmctdGVtcGxhdGUgI25vdEN1c3RvbUFycm93PlxyXG4gIDxzcGFuIGNsYXNzPVwiYW50LXNlbGVjdC1hcnJvdyBjbWFjcy1kcm9wZG93bi1hcnJvd1wiIFtjbGFzcy5jbWFjcy1zZWxlY3QtYWN0aW9uXT1cImFjdGlvblwiIGNtYWNzLXNlbGVjdC11bnNlbGVjdGFibGUgKm5nSWY9XCJuelNob3dBcnJvd1wiPlxyXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCIgKm5nSWY9XCJuekxvYWRpbmc7IGVsc2UgZGVmYXVsdEFycm93XCI+PC9pPlxyXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0QXJyb3c+XHJcbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJkb3duXCIgY2xhc3M9XCJhbnQtc2VsZWN0LWFycm93LWljb25cIiAqbmdJZj1cIiFuelN1ZmZpeEljb247IGVsc2UgbnpTdWZmaXhJY29uXCI+PC9pPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICA8L3NwYW4+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==