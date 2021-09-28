import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Host, HostListener, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
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
    onResize(event) {
        this.checkWrapperSpace();
        this.cdr.markForCheck();
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
    } }, hostBindings: function CmacsSelectTopControlComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function CmacsSelectTopControlComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { searchValue: "searchValue", nzShowSearch: "nzShowSearch", showCustomSearch: "showCustomSearch", showCmacsSearch: "showCmacsSearch", nzPlaceHolder: "nzPlaceHolder", tagsOut: "tagsOut", nzOpen: "nzOpen", cmacsOpen: "cmacsOpen", cmacsEditable: "cmacsEditable", action: "action", nzMaxTagCount: "nzMaxTagCount", nzAllowClear: "nzAllowClear", nzShowArrow: "nzShowArrow", nzLoading: "nzLoading", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", userDropdown: "userDropdown", maxTagCountAuto: "maxTagCountAuto", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzTokenSeparators: "nzTokenSeparators" }, exportAs: ["cmacsSelectTopControl"], features: [i0.ɵɵNgOnChangesFeature], attrs: _c4, decls: 14, vars: 9, consts: [["inputTemplate", ""], ["customInputTemplate", ""], ["class", "ant-select-arrow cmacs-search-search-icon", "cmacs-select-unselectable", "", 4, "ngIf"], [1, "ant-select-selection__rendered"], ["cmacsSelectTagWrapper", ""], ["cmacs-select-unselectable", "", "class", "ant-select-selection__placeholder", 3, "display", 4, "ngIf"], [4, "ngIf"], ["class", "cmacs-select-tag-wrapper-inner", 4, "ngIf"], ["class", "ant-select-selection__clear", "cmacs-select-unselectable", "", 3, "ant-select-selection__clear-search", "mousedown", "click", 4, "ngIf"], ["class", "ant-select-arrow cmacs-search-arrow-right", "cmacs-select-unselectable", "", 3, "cmacs-selected-nodes", 4, "ngIf", "ngIfElse"], ["notCustomArrow", ""], ["autocomplete", "something-new", 1, "ant-select-search__field", 3, "ngStyle", "ngModel", "disabled", "compositionstart", "compositionend", "input", "ngModelChange"], ["inputElement", ""], ["inputElementCustom", ""], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-search-search-icon"], [1, "iconCreation-Search"], ["cmacs-select-unselectable", "", 1, "ant-select-selection__placeholder"], ["class", "ant-select-selection-selected-value", 3, "ngStyle", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", 4, "ngIf"], [1, "ant-select-selection-selected-value", 3, "ngStyle"], [1, "ant-select-search", "ant-select-search--inline"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [1, "ant-select-search__field__mirror"], [1, "cmacs-select-tag-wrapper-inner"], ["cmacsSelectTagWrapperInner", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 3, "nzNoAnimation", 4, "ngIf"], [1, "ant-select-selection__choice", 3, "nzNoAnimation"], [1, "ant-select-selection__choice__content"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close", "class", "ant-select-remove-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close", 1, "ant-select-remove-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cmacs-select-unselectable", "", 1, "ant-select-selection__clear", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close-circle", "theme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "theme", "fill", 1, "ant-select-close-icon"], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-search-arrow-right"], [1, "iconArrowLarge-Arrow-Right"], ["class", "ant-select-arrow cmacs-dropdown-arrow", "cmacs-select-unselectable", "", 3, "cmacs-select-action", 4, "ngIf"], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-dropdown-arrow"], ["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "nzType", "loading"], ["nz-icon", "", "nzType", "down", "class", "ant-select-arrow-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "down", 1, "ant-select-arrow-icon"]], template: function CmacsSelectTopControlComponent_Template(rf, ctx) { if (rf & 1) {
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
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxJQUFJLEVBQ0osWUFBWSxFQUNaLEtBQUssRUFHTCxRQUFRLEVBR1IsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNuQnJELHFDQUlDO0lBSEMsZ09BQWtDLElBQUksSUFBQywrTUFBaUMsS0FBSyxJQUF0QyxnTUFBQSw4TkFBQTtJQUR6QyxpQkFJQzs7O0lBREMsd0dBQWlGO0lBSGpDLHNEQUFpQyw4QkFBQSw2Q0FBQTs7OztJQVFuRixxQ0FHNkU7SUFGdEUsc09BQXdDLElBQUksSUFBQyxxTkFBdUMsS0FBSyxJQUE1QyxzTUFBQSxvT0FBQTtJQURwRCxpQkFHNkU7OztJQUF0RSxxRkFBcUU7SUFIcEIsc0RBQWlDLDBDQUFBLDZDQUFBOzs7SUFNM0YsZ0NBQzJCO0lBQ3pCLHdCQUFtQztJQUNyQyxpQkFBTzs7O0lB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YTtrQkFBckIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNtQixZQUFZO2tCQUFwQyxLQUFLO1lBQ21CLGVBQWU7a0JBQXZDLEtBQUs7WUFFRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFJTixRQUFRO2tCQURQLFlBQVk7bUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCwgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ21hY3NTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1zZWxlY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1zZWxlY3QtdG9wLWNvbnRyb2xdJyxcclxuICBleHBvcnRBczogJ2NtYWNzU2VsZWN0VG9wQ29udHJvbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlYXJjaFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xyXG4gIGlzQ29tcG9zaW5nQ3VzdG9tID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudEN1c3RvbScpIGlucHV0RWxlbWVudEN1c3RvbTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdjbWFjc1NlbGVjdFRhZ1dyYXBwZXInKSBjbWFjc1NlbGVjdFRhZ1dyYXBwZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY21hY3NTZWxlY3RUYWdXcmFwcGVySW5uZXInKSBjbWFjc1NlbGVjdFRhZ1dyYXBwZXJJbm5lcjogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBuelNob3dTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93Q3VzdG9tU2VhcmNoID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBzaG93Q21hY3NTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFnc091dCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNtYWNzT3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNtYWNzRWRpdGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBhY3Rpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek1heFRhZ0NvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpBbGxvd0NsZWFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpTaG93QXJyb3cgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56TG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56U3VmZml4SWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpDbGVhckljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56UmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHVzZXJEcm9wZG93biA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtYXhUYWdDb3VudEF1dG8gPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgbnpNYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueVtdIH0+O1xyXG4gIEBJbnB1dCgpIG56VG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uOiBhbnlbXSA9IFtdO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcclxuICBvblJlc2l6ZShldmVudCkge1xyXG4gICAgdGhpcy5jaGVja1dyYXBwZXJTcGFjZSgpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja1dyYXBwZXJTcGFjZSgpIHtcclxuICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzICYmIHRoaXMubWF4VGFnQ291bnRBdXRvKSB7XHJcbiAgICAgIHRoaXMubnpNYXhUYWdDb3VudCA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIGNvbnN0IHRhZ3NPcmRlcmVkID0gdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24uc29ydCgoYSwgYikgPT4gYS5uekxhYmVsLmxlbmd0aCAtIGIubnpMYWJlbC5sZW5ndGgpO1xyXG4gICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gWy4uLnRhZ3NPcmRlcmVkXTtcclxuICAgICAgbGV0IHRhZ3NMZW5ndGggPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ3NPcmRlcmVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb25baV07XHJcbiAgICAgICAgY29uc3QgbmV3TGVuZ3RoID0gb3B0aW9uLm56TGFiZWwubGVuZ3RoICogOC42ICsgMzQ7XHJcbiAgICAgICAgdGFnc0xlbmd0aCArPSBuZXdMZW5ndGg7XHJcbiAgICAgICAgaWYgKHRhZ3NMZW5ndGggKyAzNCA+IHRoaXMuY21hY3NTZWxlY3RUYWdXcmFwcGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICAgIGlmICh0YWdzTGVuZ3RoIC0gbmV3TGVuZ3RoICsgMTA0IDw9IHRoaXMuY21hY3NTZWxlY3RUYWdXcmFwcGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5uek1heFRhZ0NvdW50ID0gaSA/IGkgOiAwO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uek1heFRhZ0NvdW50ID0gaSA/IGkgLSAxIDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gPSB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xlYXJTZWxlY3Rpb24oZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoW10sIHRydWUpO1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUpIHtcclxuICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKCcnKTtcclxuICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlQ3VzdG9tKCcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkVmFsdWVzKCl7XHJcbiAgICByZXR1cm4gdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZTtcclxuICB9XHJcblxyXG4gIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVXaWR0aCgpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlU2VhcmNoVmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudG9rZW5TZXBhcmF0ZSh0aGlzLmlucHV0VmFsdWUsIHRoaXMubnpUb2tlblNlcGFyYXRvcnMpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZUN1c3RvbSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRDdXN0b20pIHtcclxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnRDdXN0b20ubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnB1dFZhbHVlRWRpdGFibGVNb2RlID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZVdpZHRoQ3VzdG9tKCk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVFZGl0ZWRWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5jbWFjc0VkaXRhYmxlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWVFZGl0YWJsZU1vZGUgfHwgdGhpcy5pc0NvbXBvc2luZ0N1c3RvbSB8fCB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy51c2VyRHJvcGRvd24pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pbnB1dFZhbHVlRWRpdGFibGVNb2RlIHx8IHRoaXMuaXNDb21wb3NpbmcgfHwgdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkVmFsdWVTdHlsZSgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgIGxldCBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgaWYgKCF0aGlzLm56U2hvd1NlYXJjaCAmJiAhdGhpcy5zaG93Q21hY3NTZWFyY2gpIHtcclxuICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMubnpPcGVuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY21hY3NFZGl0YWJsZSkge1xyXG4gICAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhKHRoaXMuaXNDb21wb3NpbmdDdXN0b20gfHwgdGhpcy5pbnB1dFZhbHVlRWRpdGFibGVNb2RlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNob3dTZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmNtYWNzRWRpdGFibGUpIHtcclxuICAgICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlzQ29tcG9zaW5nQ3VzdG9tIHx8IHRoaXMuaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUgJiYgdGhpcy5pbnB1dFZhbHVlKSB7XHJcbiAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUgJiYgIXRoaXMuaW5wdXRWYWx1ZSkge1xyXG4gICAgICBvcGFjaXR5ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkaXNwbGF5OiBzaG93U2VsZWN0ZWRWYWx1ZSA/ICdibG9jaycgOiAnbm9uZScsXHJcbiAgICAgICdtYXJnaW4tbGVmdC5weCc6IHRoaXMuc2hvd0N1c3RvbVNlYXJjaCA/ICcxNScgOiAnMCcsXHJcbiAgICAgIG9wYWNpdHk6IGAke29wYWNpdHl9YFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBzaG93Q3VzdG9tU2VhcmNoU3R5bGUoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAnbWFyZ2luLWxlZnQucHgnOiB0aGlzLnNob3dDdXN0b21TZWFyY2ggPyAnMTUnIDogJzAnLFxyXG4gICAgICAncGFkZGluZy1sZWZ0LnB4JzogdGhpcy51c2VyRHJvcGRvd24gPyAnMCcgOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQpOiBhbnkge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uelZhbHVlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlV2lkdGgoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlcnZpY2UuaXNNdWx0aXBsZU9yVGFncyAmJiB0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICd3aWR0aCcsXHJcbiAgICAgICAgICBgJHt0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRofXB4YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlV2lkdGhDdXN0b20oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlcnZpY2UuaXNNdWx0aXBsZU9yVGFncyAmJiB0aGlzLmlucHV0RWxlbWVudEN1c3RvbSkge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dFZhbHVlRWRpdGFibGVNb2RlIHx8IHRoaXMuaXNDb21wb3NpbmdDdXN0b20pIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRDdXN0b20ubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICd3aWR0aCcsXHJcbiAgICAgICAgICBgJHt0aGlzLmlucHV0RWxlbWVudEN1c3RvbS5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRofXB4YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmlucHV0RWxlbWVudEN1c3RvbS5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0ZWRWYWx1ZShvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50LCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQob3B0aW9uKTsgICBcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHVibGljIG56U2VsZWN0U2VydmljZTogQ21hY3NTZWxlY3RTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm9wZW4kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUob3BlbiA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCAmJiBvcGVuKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmNtYWNzT3Blbikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRDdXN0b20gJiYgb3Blbikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dEVsZW1lbnRDdXN0b20ubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRDdXN0b20gJiYgdGhpcy5jbWFjc09wZW4pIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2xlYXJJbnB1dCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGlmICghKHRoaXMuY21hY3NPcGVuIHx8IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKCcnKTtcclxuICAgICAgICB0aGlzLnNldElucHV0VmFsdWVDdXN0b20oJycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jaGVja1dyYXBwZXJTcGFjZSgpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICBpZiAoY2hhbmdlcy5zZWFyY2hWYWx1ZSAmJiBjaGFuZ2VzLnNlYXJjaFZhbHVlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShjaGFuZ2VzLnNlYXJjaFZhbHVlLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI2lucHV0VGVtcGxhdGU+XHJcbiAgPGlucHV0ICNpbnB1dEVsZW1lbnQgYXV0b2NvbXBsZXRlPVwic29tZXRoaW5nLW5ld1wiIFtuZ1N0eWxlXT1cInNob3dDdXN0b21TZWFyY2hTdHlsZVwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkXCJcclxuICAgIChjb21wb3NpdGlvbnN0YXJ0KT1cImlzQ29tcG9zaW5nID0gdHJ1ZVwiIChjb21wb3NpdGlvbmVuZCk9XCJpc0NvbXBvc2luZyA9IGZhbHNlXCIgKGlucHV0KT1cInVwZGF0ZVdpZHRoKClcIlxyXG4gICAgW25nTW9kZWxdPVwiaW5wdXRWYWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cInNldElucHV0VmFsdWUoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJuelNlbGVjdFNlcnZpY2UuZGlzYWJsZWRcIlxyXG4gICAgW2NsYXNzLmNtYWNzLXNlbGVjdC1zZWxlY3Rpb24tbm90LWVtcHR5XT1cImdldFNlbGVjdGVkVmFsdWVzKCkubGVuZ3RoICYmICF0YWdzT3V0XCJcclxuICA+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2N1c3RvbUlucHV0VGVtcGxhdGU+XHJcbiAgPGlucHV0ICNpbnB1dEVsZW1lbnRDdXN0b20gYXV0b2NvbXBsZXRlPVwic29tZXRoaW5nLW5ld1wiIFtuZ1N0eWxlXT1cInNob3dDdXN0b21TZWFyY2hTdHlsZVwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkXCJcclxuICAgICAgICAgKGNvbXBvc2l0aW9uc3RhcnQpPVwiaXNDb21wb3NpbmdDdXN0b20gPSB0cnVlXCIgKGNvbXBvc2l0aW9uZW5kKT1cImlzQ29tcG9zaW5nQ3VzdG9tID0gZmFsc2VcIiAoaW5wdXQpPVwidXBkYXRlV2lkdGhDdXN0b20oKVwiXHJcbiAgICAgICAgIFtuZ01vZGVsXT1cImlucHV0VmFsdWVFZGl0YWJsZU1vZGVcIiAobmdNb2RlbENoYW5nZSk9XCJzZXRJbnB1dFZhbHVlQ3VzdG9tKCRldmVudClcIiBbZGlzYWJsZWRdPVwibnpTZWxlY3RTZXJ2aWNlLmRpc2FibGVkXCJcclxuICAgICAgICAgW2NsYXNzLmNtYWNzLXNlbGVjdC1zZWxlY3Rpb24tbm90LWVtcHR5XT1cImdldFNlbGVjdGVkVmFsdWVzKCkubGVuZ3RoXCI+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48c3BhbiBjbGFzcz1cImFudC1zZWxlY3QtYXJyb3cgY21hY3Mtc2VhcmNoLXNlYXJjaC1pY29uXCIgY21hY3Mtc2VsZWN0LXVuc2VsZWN0YWJsZVxyXG4gICpuZ0lmPVwic2hvd0N1c3RvbVNlYXJjaFwiPlxyXG4gIDxpIGNsYXNzPVwiaWNvbkNyZWF0aW9uLVNlYXJjaFwiPjwvaT5cclxuPC9zcGFuPlxyXG48ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX3JlbmRlcmVkXCIgI2NtYWNzU2VsZWN0VGFnV3JhcHBlciBbY2xhc3MuY21hY3Mtc2VsZWN0LXVzZXItZHJvcGRvd25dPVwidXNlckRyb3Bkb3duXCI+XHJcbiAgPGRpdiAqbmdJZj1cIm56UGxhY2VIb2xkZXJcIiBjbWFjcy1zZWxlY3QtdW5zZWxlY3RhYmxlIFtzdHlsZS5kaXNwbGF5XT1cInBsYWNlSG9sZGVyRGlzcGxheVwiXHJcbiAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19wbGFjZWhvbGRlclwiPnt7IG56UGxhY2VIb2xkZXIgfX08L2Rpdj5cclxuICA8IS0tc2luZ2xlIG1vZGUtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmlzU2luZ2xlTW9kZSB8fCBuelNlbGVjdFNlcnZpY2UuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZVwiPlxyXG4gICAgPCEtLXNlbGVjdGVkIGxhYmVsLS0+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiIXVzZXJEcm9wZG93biAmJiBuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoICYmIG56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aFwiXHJcbiAgICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24tc2VsZWN0ZWQtdmFsdWVcIiBbYXR0ci50aXRsZV09XCJuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb25bMF0/Lm56TGFiZWxcIlxyXG4gICAgICAgICBbbmdTdHlsZV09XCJzZWxlY3RlZFZhbHVlU3R5bGVcIj5cclxuICAgICAge3sgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uWzBdPy5uekxhYmVsIH19XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS1zaG93IHNlYXJjaC0tPlxyXG4gICAgPGRpdiAqbmdJZj1cInNob3dDbWFjc1NlYXJjaFwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2ggYW50LXNlbGVjdC1zZWFyY2gtLWlubGluZVwiXHJcbiAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cIm56T3BlbiB8fCBuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoID8gJ2Jsb2NrJyA6ICdub25lJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkX193cmFwXCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlucHV0VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkX19taXJyb3JcIj57e2lucHV0VmFsdWV9fSZuYnNwOzwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS1zaG93IGN1c3RvbSBzZWFyY2ggZWRpdGFibGUgbW9kZS0tPlxyXG4gICAgPGRpdiAqbmdJZj1cImNtYWNzRWRpdGFibGVcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoIGFudC1zZWxlY3Qtc2VhcmNoLS1pbmxpbmVcIlxyXG4gICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJuek9wZW4gPyAnYmxvY2snIDogJ25vbmUnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRfX3dyYXBcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tSW5wdXRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRfX21pcnJvclwiPnt7aW5wdXRWYWx1ZX19Jm5ic3A7PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDwhLS1tdWx0aXBsZSBvciB0YWdzIG1vZGUtLT5cclxuICA8dWwgKm5nSWY9XCJuelNlbGVjdFNlcnZpY2UuaXNNdWx0aXBsZU9yVGFnc1wiICNjbWFjc1NlbGVjdFRhZ1dyYXBwZXJJbm5lciBjbGFzcz1cImNtYWNzLXNlbGVjdC10YWctd3JhcHBlci1pbm5lclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0YWdzT3V0ICYmICF1c2VyRHJvcGRvd25cIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uIHwgc2xpY2U6IDAgOiBuek1heFRhZ0NvdW50OyB0cmFja0J5OnRyYWNrVmFsdWU7XCI+XHJcbiAgICAgICAgPGxpIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCIgW2F0dHIudGl0bGVdPVwib3B0aW9uLm56TGFiZWxcIlxyXG4gICAgICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fZGlzYWJsZWRdPVwib3B0aW9uLm56RGlzYWJsZWRcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19jb250ZW50XCI+e3sgb3B0aW9uLm56TGFiZWwgfX08L2Rpdj5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIW9wdGlvbi5uekRpc2FibGVkXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmVcIlxyXG4gICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiIChjbGljayk9XCJyZW1vdmVTZWxlY3RlZFZhbHVlKG9wdGlvbiwgJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXJlbW92ZS1pY29uXCIgKm5nSWY9XCIhbnpSZW1vdmVJY29uOyBlbHNlIG56UmVtb3ZlSWNvblwiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPGxpICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCA+IG56TWF4VGFnQ291bnRcIlxyXG4gICAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fY29udGVudFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56TWF4VGFnUGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56TWF4VGFnUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWUgfCBzbGljZTogbnpNYXhUYWdDb3VudH1cIj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuek1heFRhZ1BsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICsge3sgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCAtIG56TWF4VGFnQ291bnQgfX0gLi4uXHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPGxpIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2ggYW50LXNlbGVjdC1zZWFyY2gtLWlubGluZVwiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaW5wdXRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbiAgXHJcbjwvZGl2PlxyXG48c3BhbiAqbmdJZj1cIm56QWxsb3dDbGVhciAmJiBuelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggJiYgIXVzZXJEcm9wZG93blwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2NsZWFyXCJcclxuICAgICAgW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19jbGVhci1zZWFyY2hdPVwic2hvd0N1c3RvbVNlYXJjaFwiXHJcbiAgY21hY3Mtc2VsZWN0LXVuc2VsZWN0YWJsZSAobW91c2Vkb3duKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCIgKGNsaWNrKT1cIm9uQ2xlYXJTZWxlY3Rpb24oJGV2ZW50KVwiPlxyXG4gIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCIgdGhlbWU9XCJmaWxsXCIgKm5nSWY9XCIhbnpDbGVhckljb247IGVsc2UgbnpDbGVhckljb25cIiBjbGFzcz1cImFudC1zZWxlY3QtY2xvc2UtaWNvblwiPjwvaT5cclxuPC9zcGFuPlxyXG48c3BhbiBjbGFzcz1cImFudC1zZWxlY3QtYXJyb3cgY21hY3Mtc2VhcmNoLWFycm93LXJpZ2h0XCIgY21hY3Mtc2VsZWN0LXVuc2VsZWN0YWJsZVxyXG4gICAgICBbY2xhc3MuY21hY3Mtc2VsZWN0ZWQtbm9kZXNdPVwiZ2V0U2VsZWN0ZWRWYWx1ZXMoKS5sZW5ndGhcIlxyXG4gICAgICAqbmdJZj1cInNob3dDdXN0b21TZWFyY2g7IGVsc2Ugbm90Q3VzdG9tQXJyb3dcIj5cclxuICAgIDxpIGNsYXNzPVwiaWNvbkFycm93TGFyZ2UtQXJyb3ctUmlnaHRcIj48L2k+XHJcbjwvc3Bhbj5cclxuPG5nLXRlbXBsYXRlICNub3RDdXN0b21BcnJvdz5cclxuICA8c3BhbiBjbGFzcz1cImFudC1zZWxlY3QtYXJyb3cgY21hY3MtZHJvcGRvd24tYXJyb3dcIiBbY2xhc3MuY21hY3Mtc2VsZWN0LWFjdGlvbl09XCJhY3Rpb25cIiBjbWFjcy1zZWxlY3QtdW5zZWxlY3RhYmxlICpuZ0lmPVwibnpTaG93QXJyb3dcIj5cclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiICpuZ0lmPVwibnpMb2FkaW5nOyBlbHNlIGRlZmF1bHRBcnJvd1wiPjwvaT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdEFycm93PlxyXG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZG93blwiIGNsYXNzPVwiYW50LXNlbGVjdC1hcnJvdy1pY29uXCIgKm5nSWY9XCIhbnpTdWZmaXhJY29uOyBlbHNlIG56U3VmZml4SWNvblwiPjwvaT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgPC9zcGFuPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=