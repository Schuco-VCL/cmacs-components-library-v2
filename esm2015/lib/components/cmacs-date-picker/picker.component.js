import { ESCAPE } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Inject, Input, Output, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { CandyDate, wrongSortOrder } from 'ng-zorro-antd/core/time';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DateRangePopupComponent } from './date-range-popup.component';
import { PREFIX_CLASS } from './util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "ng-zorro-antd/core/resize-observers";
import * as i4 from "./date-picker.service";
import * as i5 from "@angular/common";
import * as i6 from "@angular/cdk/overlay";
import * as i7 from "ng-zorro-antd/core/overlay";
import * as i8 from "@angular/forms";
import * as i9 from "ng-zorro-antd/core/transition-patch";
import * as i10 from "ng-zorro-antd/icon";
import * as i11 from "ng-zorro-antd/core/outlet";
import * as i12 from "ng-zorro-antd/core/no-animation";
const _c0 = ["separatorElement"];
const _c1 = ["pickerInput"];
const _c2 = ["rangePickerInput"];
const _c3 = ["cmacs-picker", ""];
function CmacsPickerComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsPickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 5, 6);
    i0.ɵɵlistener("ngModelChange", function CmacsPickerComponent_div_0_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.inputValue = $event; })("focus", function CmacsPickerComponent_div_0_Template_input_focus_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onFocus($event); })("blur", function CmacsPickerComponent_div_0_Template_input_blur_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onBlur($event); })("ngModelChange", function CmacsPickerComponent_div_0_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onInputChange($event); })("keyup.enter", function CmacsPickerComponent_div_0_Template_input_keyup_enter_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onKeyupEnter($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsPickerComponent_div_0_ng_container_3_Template, 1, 0, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(5);
    i0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-input");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-open-date-picker-input", ctx_r0.cmacsOpen)("ant-input-disabled", ctx_r0.disabled);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.getPlaceholder());
    i0.ɵɵproperty("disabled", ctx_r0.disabled)("readOnly", ctx_r0.inputReadOnly)("ngModel", ctx_r0.inputValue)("size", ctx_r0.inputSize);
    i0.ɵɵattribute("id", ctx_r0.id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
function CmacsPickerComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsPickerComponent_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r17.separator);
} }
function CmacsPickerComponent_ng_container_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 12);
} }
function CmacsPickerComponent_ng_container_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsPickerComponent_ng_container_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c4 = function () { return { partType: "left" }; };
const _c5 = function () { return { partType: "right" }; };
function CmacsPickerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CmacsPickerComponent_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", null, 9);
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtemplate(6, CmacsPickerComponent_ng_container_1_ng_container_6_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CmacsPickerComponent_ng_container_1_ng_template_7_Template, 1, 0, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div");
    i0.ɵɵtemplate(10, CmacsPickerComponent_ng_container_1_ng_container_10_Template, 1, 0, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, CmacsPickerComponent_ng_container_1_ng_container_11_Template, 1, 0, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r18 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    const _r4 = i0.ɵɵreference(5);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-input");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2)("ngTemplateOutletContext", i0.ɵɵpureFunction0(19, _c4));
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-range-separator");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-separator");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.separator)("ngIfElse", _r18);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-input");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2)("ngTemplateOutletContext", i0.ɵɵpureFunction0(20, _c5));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
function CmacsPickerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 13, 14);
    i0.ɵɵlistener("click", function CmacsPickerComponent_ng_template_2_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.onClickInputBox($event); })("blur", function CmacsPickerComponent_ng_template_2_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.onBlur($event); })("focus", function CmacsPickerComponent_ng_template_2_Template_input_focus_0_listener($event) { i0.ɵɵrestoreView(_r25); const partType_r22 = ctx.partType; const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.onFocus($event, partType_r22); })("keyup.enter", function CmacsPickerComponent_ng_template_2_Template_input_keyup_enter_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.onKeyupEnter($event); })("ngModelChange", function CmacsPickerComponent_ng_template_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r25); const partType_r22 = ctx.partType; const ctx_r29 = i0.ɵɵnextContext(); return (ctx_r29.inputValue[ctx_r29.datePickerService.getActiveIndex(partType_r22)] = $event); })("ngModelChange", function CmacsPickerComponent_ng_template_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.onInputChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const partType_r22 = ctx.partType;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-open-date-picker-input", ctx_r3.cmacsOpen);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r3.getPlaceholder(partType_r22));
    i0.ɵɵproperty("disabled", ctx_r3.disabled)("readOnly", ctx_r3.inputReadOnly)("size", ctx_r3.inputSize)("ngModel", ctx_r3.inputValue[ctx_r3.datePickerService.getActiveIndex(partType_r22)]);
} }
function CmacsPickerComponent_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function CmacsPickerComponent_ng_template_4_span_1_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.onClickClear($event); });
    i0.ɵɵelement(1, "i", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r31.prefixCls, "-clear");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-open-date-picker-icon", ctx_r31.cmacsOpen);
} }
function CmacsPickerComponent_ng_template_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 20);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suffixIcon_r35 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", suffixIcon_r35);
} }
function CmacsPickerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
    i0.ɵɵtemplate(1, CmacsPickerComponent_ng_template_4_span_1_Template, 2, 5, "span", 16);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtemplate(3, CmacsPickerComponent_ng_template_4_ng_container_3_Template, 2, 1, "ng-container", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r5.prefixCls, "-active-bar");
    i0.ɵɵproperty("ngStyle", ctx_r5.activeBarStyle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showClear());
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r5.prefixCls, "-suffix");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r5.suffixIcon);
} }
function CmacsPickerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementStart(1, "div", 15);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzNoAnimation", ctx_r6.noAnimation)("@slideMotion", "enter");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate2("", ctx_r6.prefixCls, "-dropdown ", ctx_r6.dropdownClassName, "");
    i0.ɵɵclassProp("ant-picker-dropdown-rtl", ctx_r6.dir === "rtl")("ant-picker-dropdown-placement-bottomLeft", ctx_r6.currentPositionY === "bottom" && ctx_r6.currentPositionX === "start")("ant-picker-dropdown-placement-topLeft", ctx_r6.currentPositionY === "top" && ctx_r6.currentPositionX === "start")("ant-picker-dropdown-placement-bottomRight", ctx_r6.currentPositionY === "bottom" && ctx_r6.currentPositionX === "end")("ant-picker-dropdown-placement-topRight", ctx_r6.currentPositionY === "top" && ctx_r6.currentPositionX === "end")("ant-picker-dropdown-range", ctx_r6.isRange);
    i0.ɵɵproperty("ngStyle", ctx_r6.popupStyle);
} }
const _c6 = function () { return ["cmacs-datetime-picker-dropdown"]; };
const _c7 = ["*"];
export class CmacsPickerComponent {
    constructor(elementRef, dateHelper, cdr, platform, nzResizeObserver, datePickerService, doc) {
        this.elementRef = elementRef;
        this.dateHelper = dateHelper;
        this.cdr = cdr;
        this.platform = platform;
        this.nzResizeObserver = nzResizeObserver;
        this.datePickerService = datePickerService;
        this.noAnimation = false;
        this.isRange = false;
        this.open = undefined;
        this.disabled = false;
        this.timeline = false;
        this.inputReadOnly = false;
        this.popupStyle = null;
        this.dir = 'ltr';
        this.id = null;
        this.cmacsOpen = false;
        this.focusChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.openChange = new EventEmitter(); // Emitted when overlay's open state change
        this.calcWidth = 0;
        this.inputSize = 12;
        this.destroy$ = new Subject();
        this.prefixCls = PREFIX_CLASS;
        this.activeBarStyle = {};
        this.overlayOpen = false; // Available when "open"=undefined
        this.overlayPositions = [
            {
                offsetX: -12,
                offsetY: 8,
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                offsetX: -12,
                offsetY: -8,
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                offsetX: 12,
                offsetY: 8,
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                offsetX: 12,
                offsetY: -8,
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ];
        this.currentPositionX = 'start';
        this.currentPositionY = 'bottom';
        this.document = doc;
        this.origin = new CdkOverlayOrigin(this.elementRef);
    }
    get realOpenState() {
        // The value that really decide the open state of overlay
        this.setPanelWidth();
        return this.isOpenHandledByUser() ? !!this.open : this.overlayOpen;
    }
    setPanelWidth() {
        this.calcWidth = this.elementRef.nativeElement.offsetWidth + 24;
    }
    ngOnInit() {
        this.inputValue = this.isRange ? ['', ''] : '';
        this.datePickerService.valueChange$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.updateInputValue();
        });
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
        if (this.isRange && this.platform.isBrowser) {
            this.nzResizeObserver
                .observe(this.elementRef)
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.updateInputWidthAndArrowLeft();
            });
        }
        this.datePickerService.inputPartChange$.pipe(takeUntil(this.destroy$)).subscribe(partType => {
            var _a;
            if (partType) {
                this.datePickerService.activeInput = partType;
            }
            this.focus();
            this.updateInputWidthAndArrowLeft();
            (_a = this.panel) === null || _a === void 0 ? void 0 : _a.updateActiveDate();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnChanges(changes) {
        var _a, _b;
        if (((_a = changes.format) === null || _a === void 0 ? void 0 : _a.currentValue) !== ((_b = changes.format) === null || _b === void 0 ? void 0 : _b.previousValue)) {
            this.inputSize = Math.max(10, this.format.length) + 2;
            this.updateInputValue();
        }
    }
    updateInputWidthAndArrowLeft() {
        var _a, _b, _c;
        this.inputWidth = ((_b = (_a = this.rangePickerInputs) === null || _a === void 0 ? void 0 : _a.first) === null || _b === void 0 ? void 0 : _b.nativeElement.offsetWidth) || 0;
        const baseStyle = { position: 'absolute', width: `${this.inputWidth}px` };
        this.datePickerService.arrowLeft =
            this.datePickerService.activeInput === 'left' ? 0 : this.inputWidth + ((_c = this.separatorElement) === null || _c === void 0 ? void 0 : _c.nativeElement.offsetWidth) || 0;
        if (this.dir === 'rtl') {
            this.activeBarStyle = Object.assign(Object.assign({}, baseStyle), { right: `${this.datePickerService.arrowLeft}px` });
        }
        else {
            this.activeBarStyle = Object.assign(Object.assign({}, baseStyle), { left: `${this.datePickerService.arrowLeft}px` });
        }
        this.panel.cdr.markForCheck();
        this.cdr.markForCheck();
    }
    getInput(partType) {
        var _a, _b;
        return this.isRange
            ? partType === 'left'
                ? (_a = this.rangePickerInputs) === null || _a === void 0 ? void 0 : _a.first.nativeElement : (_b = this.rangePickerInputs) === null || _b === void 0 ? void 0 : _b.last.nativeElement
            : this.pickerInput.nativeElement;
    }
    focus() {
        const activeInputElement = this.getInput(this.datePickerService.activeInput);
        if (this.document.activeElement !== activeInputElement) {
            activeInputElement === null || activeInputElement === void 0 ? void 0 : activeInputElement.focus();
        }
    }
    onFocus(event, partType) {
        event.preventDefault();
        this.focusChange.emit(true);
        if (partType) {
            this.datePickerService.inputPartChange$.next(partType);
        }
    }
    onBlur(event) {
        event.preventDefault();
        this.focusChange.emit(false);
    }
    // Show overlay content
    showOverlay() {
        if (!this.realOpenState && !this.disabled) {
            this.updateInputWidthAndArrowLeft();
            this.overlayOpen = true;
            this.focus();
            this.panel.init();
            this.openChange.emit(true);
            this.cdr.markForCheck();
        }
    }
    hideOverlay() {
        if (this.realOpenState) {
            this.overlayOpen = false;
            this.openChange.emit(false);
        }
    }
    showClear() {
        return !this.disabled && !this.isEmptyValue(this.datePickerService.value) && !!this.allowClear;
    }
    onClickInputBox(event) {
        event.stopPropagation();
        this.focus();
        if (!this.isOpenHandledByUser()) {
            this.showOverlay();
        }
    }
    onClickOutside(event) {
        if (this.elementRef.nativeElement.contains(event.target)) {
            return;
        }
        if (this.panel.isAllowed(this.datePickerService.value, true)) {
            if (Array.isArray(this.datePickerService.value) && wrongSortOrder(this.datePickerService.value)) {
                const index = this.datePickerService.getActiveIndex(this.datePickerService.activeInput);
                const value = this.datePickerService.value[index];
                this.panel.changeValueFromSelect(value, true);
                return;
            }
            this.updateInputValue();
            this.datePickerService.emitValue$.next();
        }
        else {
            this.datePickerService.setValue(this.datePickerService.initialValue);
            this.hideOverlay();
        }
    }
    onOverlayDetach() {
        this.hideOverlay();
    }
    onOverlayKeydown(event) {
        if (event.keyCode === ESCAPE) {
            this.datePickerService.setValue(this.datePickerService.initialValue);
        }
    }
    // NOTE: A issue here, the first time position change, the animation will not be triggered.
    // Because the overlay's "positionChange" event is emitted after the content's full shown up.
    // All other components like "nz-dropdown" which depends on overlay also has the same issue.
    // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
    onPositionChange(position) {
        this.currentPositionX = position.connectionPair.originX;
        this.currentPositionY = position.connectionPair.originY;
        this.cdr.detectChanges(); // Take side-effects to position styles
    }
    onClickClear(event) {
        event.preventDefault();
        event.stopPropagation();
        this.datePickerService.setValue(this.isRange ? [] : null);
        this.datePickerService.emitValue$.next();
    }
    updateInputValue() {
        const newValue = this.datePickerService.value;
        if (this.isRange) {
            this.inputValue = newValue ? newValue.map(v => this.formatValue(v)) : ['', ''];
        }
        else {
            this.inputValue = this.formatValue(newValue);
        }
        this.cdr.markForCheck();
    }
    formatValue(value) {
        return this.dateHelper.format(value && value.nativeDate, this.format);
    }
    onInputChange(value, isEnter = false) {
        /**
         * in IE11 focus/blur will trigger ngModelChange if has placeholder
         * so we forbidden IE11 to open panel through input change
         */
        if (!this.platform.TRIDENT &&
            this.document.activeElement === this.getInput(this.datePickerService.activeInput) &&
            !this.realOpenState) {
            this.showOverlay();
            return;
        }
        const date = this.checkValidDate(value);
        if (date) {
            this.panel.changeValueFromSelect(date, isEnter);
        }
    }
    onKeyupEnter(event) {
        this.onInputChange(event.target.value, true);
    }
    checkValidDate(value) {
        const date = new CandyDate(this.dateHelper.parseDate(value, this.format));
        if (!date.isValid() || value !== this.dateHelper.format(date.nativeDate, this.format)) {
            return null;
        }
        return date;
    }
    getPlaceholder(partType) {
        return this.isRange ? this.placeholder[this.datePickerService.getActiveIndex(partType)] : this.placeholder;
    }
    isEmptyValue(value) {
        if (value === null) {
            return true;
        }
        else if (this.isRange) {
            return !value || !Array.isArray(value) || value.every(val => !val);
        }
        else {
            return !value;
        }
    }
    // Whether open state is permanently controlled by user himself
    isOpenHandledByUser() {
        return this.open !== undefined;
    }
}
CmacsPickerComponent.ɵfac = function CmacsPickerComponent_Factory(t) { return new (t || CmacsPickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Platform), i0.ɵɵdirectiveInject(i3.NzResizeObserver), i0.ɵɵdirectiveInject(i4.DatePickerService), i0.ɵɵdirectiveInject(DOCUMENT)); };
CmacsPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsPickerComponent, selectors: [["", "cmacs-picker", ""]], contentQueries: function CmacsPickerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, DateRangePopupComponent, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.panel = _t.first);
    } }, viewQuery: function CmacsPickerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(CdkConnectedOverlay, 1);
        i0.ɵɵviewQuery(_c0, 1);
        i0.ɵɵviewQuery(_c1, 1);
        i0.ɵɵviewQuery(_c2, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.separatorElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pickerInput = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rangePickerInputs = _t);
    } }, inputs: { noAnimation: "noAnimation", isRange: "isRange", open: "open", disabled: "disabled", timeline: "timeline", inputReadOnly: "inputReadOnly", placeholder: "placeholder", allowClear: "allowClear", autoFocus: "autoFocus", format: "format", separator: "separator", popupStyle: "popupStyle", dropdownClassName: "dropdownClassName", suffixIcon: "suffixIcon", dir: "dir", id: "id", cmacsOpen: "cmacsOpen" }, outputs: { focusChange: "focusChange", valueChange: "valueChange", openChange: "openChange" }, exportAs: ["cmacsPicker"], features: [i0.ɵɵNgOnChangesFeature], attrs: _c3, ngContentSelectors: _c7, decls: 7, vars: 8, consts: [[3, "class", 4, "ngIf"], [4, "ngIf"], ["tplRangeInput", ""], ["tplRightRest", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayTransformOriginOn", "positionChange", "detach", "overlayKeydown", "overlayOutsideClick"], [3, "disabled", "readOnly", "ngModel", "placeholder", "size", "ngModelChange", "focus", "blur", "keyup.enter"], ["pickerInput", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["separatorElement", ""], [4, "ngIf", "ngIfElse"], ["defaultSeparator", ""], ["nz-icon", "", "nzType", "swap-right", "nzTheme", "outline"], [3, "disabled", "readOnly", "size", "ngModel", "placeholder", "click", "blur", "focus", "keyup.enter", "ngModelChange"], ["rangePickerInput", ""], [3, "ngStyle"], [3, "class", "click", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], ["nz-icon", "", 3, "nzType"], [1, "ant-picker-wrapper", 2, "position", "relative", 3, "nzNoAnimation"]], template: function CmacsPickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, CmacsPickerComponent_div_0_Template, 4, 14, "div", 0);
        i0.ɵɵtemplate(1, CmacsPickerComponent_ng_container_1_Template, 12, 21, "ng-container", 1);
        i0.ɵɵtemplate(2, CmacsPickerComponent_ng_template_2_Template, 2, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, CmacsPickerComponent_ng_template_4_Template, 4, 9, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, CmacsPickerComponent_ng_template_6_Template, 3, 19, "ng-template", 4);
        i0.ɵɵlistener("positionChange", function CmacsPickerComponent_Template_ng_template_positionChange_6_listener($event) { return ctx.onPositionChange($event); })("detach", function CmacsPickerComponent_Template_ng_template_detach_6_listener() { return ctx.onOverlayDetach(); })("overlayKeydown", function CmacsPickerComponent_Template_ng_template_overlayKeydown_6_listener($event) { return ctx.onOverlayKeydown($event); })("overlayOutsideClick", function CmacsPickerComponent_Template_ng_template_overlayOutsideClick_6_listener($event) { return ctx.onClickOutside($event); });
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.isRange);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isRange);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("cdkConnectedOverlayPanelClass", i0.ɵɵpureFunction0(7, _c6))("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.realOpenState)("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayTransformOriginOn", ".ant-picker-wrapper");
    } }, directives: [i5.NgIf, i6.CdkConnectedOverlay, i7.NzConnectedOverlayDirective, i8.DefaultValueAccessor, i8.NgControlStatus, i8.NgModel, i5.NgTemplateOutlet, i9.ɵNzTransitionPatchDirective, i10.NzIconDirective, i5.NgStyle, i11.NzStringTemplateOutletDirective, i12.NzNoAnimationDirective], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsPickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                selector: '[cmacs-picker]',
                exportAs: 'cmacsPicker',
                template: `
    <!-- Content of single picker -->
    <div *ngIf="!isRange" class="{{ prefixCls }}-input">
      <input
        #pickerInput
        [attr.id]="id"
        [class.cmacs-open-date-picker-input]="cmacsOpen"
        [class.ant-input-disabled]="disabled"
        [disabled]="disabled"
        [readOnly]="inputReadOnly"
        [(ngModel)]="inputValue"
        placeholder="{{ getPlaceholder() }}"
        [size]="inputSize"
        (focus)="onFocus($event)"
        (blur)="onBlur($event)"
        (ngModelChange)="onInputChange($event)"
        (keyup.enter)="onKeyupEnter($event)"
      />
      <ng-container *ngTemplateOutlet="tplRightRest"></ng-container>
    </div>

    <!-- Content of range picker -->
    <ng-container *ngIf="isRange">
      <div class="{{ prefixCls }}-input">
        <ng-container *ngTemplateOutlet="tplRangeInput; context: { partType: 'left' }"></ng-container>
      </div>
      <div #separatorElement class="{{ prefixCls }}-range-separator">
        <span class="{{ prefixCls }}-separator">
          <ng-container *ngIf="separator; else defaultSeparator">{{ separator }}</ng-container>
        </span>
        <ng-template #defaultSeparator>
          <i nz-icon nzType="swap-right" nzTheme="outline"></i>
        </ng-template>
      </div>
      <div class="{{ prefixCls }}-input">
        <ng-container *ngTemplateOutlet="tplRangeInput; context: { partType: 'right' }"></ng-container>
      </div>
      <ng-container *ngTemplateOutlet="tplRightRest"></ng-container>
    </ng-container>
    <!-- Input for Range ONLY -->
    <ng-template #tplRangeInput let-partType="partType">
      <input
        #rangePickerInput
        [class.cmacs-open-date-picker-input]="cmacsOpen"
        [disabled]="disabled"
        [readOnly]="inputReadOnly"
        [size]="inputSize"
        (click)="onClickInputBox($event)"
        (blur)="onBlur($event)"
        (focus)="onFocus($event, partType)"
        (keyup.enter)="onKeyupEnter($event)"
        [(ngModel)]="inputValue[datePickerService.getActiveIndex(partType)]"
        (ngModelChange)="onInputChange($event)"
        placeholder="{{ getPlaceholder(partType) }}"
      />
    </ng-template>

    <!-- Right operator icons -->
    <ng-template #tplRightRest>
      <div class="{{ prefixCls }}-active-bar" [ngStyle]="activeBarStyle"></div>
      <span *ngIf="showClear()" class="{{ prefixCls }}-clear"
        (click)="onClickClear($event)">
        <i nz-icon [class.cmacs-open-date-picker-icon]="cmacsOpen" nzType="close-circle" nzTheme="fill"></i>
      </span>
      <span class="{{ prefixCls }}-suffix">
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <i nz-icon [nzType]="suffixIcon"></i>
        </ng-container>
      </span>
    </ng-template>

    <!-- Overlay -->
    <ng-template
      [cdkConnectedOverlayPanelClass]="['cmacs-datetime-picker-dropdown']"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="realOpenState"
      [cdkConnectedOverlayPositions]="overlayPositions"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-picker-wrapper'"
      (positionChange)="onPositionChange($event)"
      (detach)="onOverlayDetach()"
      (overlayKeydown)="onOverlayKeydown($event)"
      (overlayOutsideClick)="onClickOutside($event)"
    >
      <div class="ant-picker-wrapper" [nzNoAnimation]="noAnimation" [@slideMotion]="'enter'" style="position: relative;">
        <div
          class="{{ prefixCls }}-dropdown {{ dropdownClassName }}"
          [class.ant-picker-dropdown-rtl]="dir === 'rtl'"
          [class.ant-picker-dropdown-placement-bottomLeft]="currentPositionY === 'bottom' && currentPositionX === 'start'"
          [class.ant-picker-dropdown-placement-topLeft]="currentPositionY === 'top' && currentPositionX === 'start'"
          [class.ant-picker-dropdown-placement-bottomRight]="currentPositionY === 'bottom' && currentPositionX === 'end'"
          [class.ant-picker-dropdown-placement-topRight]="currentPositionY === 'top' && currentPositionX === 'end'"
          [class.ant-picker-dropdown-range]="isRange"
          [ngStyle]="popupStyle"
        >
          <!-- Compatible for overlay that not support offset dynamically and immediately -->
          <ng-content></ng-content>
        </div>
      </div>
    </ng-template>
  `,
                animations: [slideMotion],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DateHelperService }, { type: i0.ChangeDetectorRef }, { type: i2.Platform }, { type: i3.NzResizeObserver }, { type: i4.DatePickerService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { noAnimation: [{
            type: Input
        }], isRange: [{
            type: Input
        }], open: [{
            type: Input
        }], disabled: [{
            type: Input
        }], timeline: [{
            type: Input
        }], inputReadOnly: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], allowClear: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }], format: [{
            type: Input
        }], separator: [{
            type: Input
        }], popupStyle: [{
            type: Input
        }], dropdownClassName: [{
            type: Input
        }], suffixIcon: [{
            type: Input
        }], dir: [{
            type: Input
        }], id: [{
            type: Input
        }], cmacsOpen: [{
            type: Input
        }], focusChange: [{
            type: Output
        }], valueChange: [{
            type: Output
        }], openChange: [{
            type: Output
        }], cdkConnectedOverlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay, { static: false }]
        }], separatorElement: [{
            type: ViewChild,
            args: ['separatorElement', { static: false }]
        }], pickerInput: [{
            type: ViewChild,
            args: ['pickerInput', { static: false }]
        }], rangePickerInputs: [{
            type: ViewChildren,
            args: ['rangePickerInput']
        }], panel: [{
            type: ContentChild,
            args: [DateRangePopupComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUtqQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBRVosWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBSUwsTUFBTSxFQUlOLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUkzRCxPQUFPLEVBQUUsU0FBUyxFQUFtQixjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUdyRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBd0JoQyx3QkFBOEQ7Ozs7SUFoQmhFLDJCQUFvRDtJQUNsRCxtQ0FjRTtJQVBBLHFOQUF3QixzTEFBQSxtTEFBQSw0TUFBQSx1TUFBQTtJQVAxQixpQkFjRTtJQUNGLDZGQUE4RDtJQUNoRSxpQkFBTTs7OztJQWpCZ0IseURBQTZC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YUFDaEQ7O3NCQTBGSSxNQUFNO3VCQUFDLFFBQVE7d0JBeEZULFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxHQUFHO2tCQUFYLEtBQUs7WUFDRyxFQUFFO2tCQUFWLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBRWEsV0FBVztrQkFBN0IsTUFBTTtZQUNZLFdBQVc7a0JBQTdCLE1BQU07WUFDWSxVQUFVO2tCQUE1QixNQUFNO1lBRTRDLG1CQUFtQjtrQkFBckUsU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDQyxnQkFBZ0I7a0JBQWpFLFNBQVM7bUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ0gsV0FBVztrQkFBdkQsU0FBUzttQkFBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ1QsaUJBQWlCO2tCQUFsRCxZQUFZO21CQUFDLGtCQUFrQjtZQUNPLEtBQUs7a0JBQTNDLFlBQVk7bUJBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIENka0Nvbm5lY3RlZE92ZXJsYXksXG4gIENka092ZXJsYXlPcmlnaW4sXG4gIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSxcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbiAgSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MsXG4gIFZlcnRpY2FsQ29ubmVjdGlvblBvc1xufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2xpZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IE56UmVzaXplT2JzZXJ2ZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvcmVzaXplLW9ic2VydmVycyc7XG5cbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENhbmR5RGF0ZSwgQ29tcGF0aWJsZVZhbHVlLCB3cm9uZ1NvcnRPcmRlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcbmltcG9ydCB7IE5nU3R5bGVJbnRlcmZhY2UsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZGF0ZS1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlUmFuZ2VQb3B1cENvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFuZ2VQYXJ0VHlwZSB9IGZyb20gJy4vc3RhbmRhcmQtdHlwZXMnO1xuaW1wb3J0IHsgUFJFRklYX0NMQVNTIH0gZnJvbSAnLi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnW2NtYWNzLXBpY2tlcl0nLFxuICBleHBvcnRBczogJ2NtYWNzUGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tIENvbnRlbnQgb2Ygc2luZ2xlIHBpY2tlciAtLT5cbiAgICA8ZGl2ICpuZ0lmPVwiIWlzUmFuZ2VcIiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1pbnB1dFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgICNwaWNrZXJJbnB1dFxuICAgICAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgICAgIFtjbGFzcy5jbWFjcy1vcGVuLWRhdGUtcGlja2VyLWlucHV0XT1cImNtYWNzT3BlblwiXG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbcmVhZE9ubHldPVwiaW5wdXRSZWFkT25seVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwie3sgZ2V0UGxhY2Vob2xkZXIoKSB9fVwiXG4gICAgICAgIFtzaXplXT1cImlucHV0U2l6ZVwiXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uSW5wdXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIChrZXl1cC5lbnRlcik9XCJvbktleXVwRW50ZXIoJGV2ZW50KVwiXG4gICAgICAvPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJpZ2h0UmVzdFwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBDb250ZW50IG9mIHJhbmdlIHBpY2tlciAtLT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNSYW5nZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1pbnB1dFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsUmFuZ2VJbnB1dDsgY29udGV4dDogeyBwYXJ0VHlwZTogJ2xlZnQnIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAjc2VwYXJhdG9yRWxlbWVudCBjbGFzcz1cInt7IHByZWZpeENscyB9fS1yYW5nZS1zZXBhcmF0b3JcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tc2VwYXJhdG9yXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlcGFyYXRvcjsgZWxzZSBkZWZhdWx0U2VwYXJhdG9yXCI+e3sgc2VwYXJhdG9yIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0U2VwYXJhdG9yPlxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwic3dhcC1yaWdodFwiIG56VGhlbWU9XCJvdXRsaW5lXCI+PC9pPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxSYW5nZUlucHV0OyBjb250ZXh0OiB7IHBhcnRUeXBlOiAncmlnaHQnIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJpZ2h0UmVzdFwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwhLS0gSW5wdXQgZm9yIFJhbmdlIE9OTFkgLS0+XG4gICAgPG5nLXRlbXBsYXRlICN0cGxSYW5nZUlucHV0IGxldC1wYXJ0VHlwZT1cInBhcnRUeXBlXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgI3JhbmdlUGlja2VySW5wdXRcbiAgICAgICAgW2NsYXNzLmNtYWNzLW9wZW4tZGF0ZS1waWNrZXItaW5wdXRdPVwiY21hY3NPcGVuXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW3JlYWRPbmx5XT1cImlucHV0UmVhZE9ubHlcIlxuICAgICAgICBbc2l6ZV09XCJpbnB1dFNpemVcIlxuICAgICAgICAoY2xpY2spPVwib25DbGlja0lucHV0Qm94KCRldmVudClcIlxuICAgICAgICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudCwgcGFydFR5cGUpXCJcbiAgICAgICAgKGtleXVwLmVudGVyKT1cIm9uS2V5dXBFbnRlcigkZXZlbnQpXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlW2RhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KHBhcnRUeXBlKV1cIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInt7IGdldFBsYWNlaG9sZGVyKHBhcnRUeXBlKSB9fVwiXG4gICAgICAvPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tIFJpZ2h0IG9wZXJhdG9yIGljb25zIC0tPlxuICAgIDxuZy10ZW1wbGF0ZSAjdHBsUmlnaHRSZXN0PlxuICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1hY3RpdmUtYmFyXCIgW25nU3R5bGVdPVwiYWN0aXZlQmFyU3R5bGVcIj48L2Rpdj5cbiAgICAgIDxzcGFuICpuZ0lmPVwic2hvd0NsZWFyKClcIiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1jbGVhclwiXG4gICAgICAgIChjbGljayk9XCJvbkNsaWNrQ2xlYXIoJGV2ZW50KVwiPlxuICAgICAgICA8aSBuei1pY29uIFtjbGFzcy5jbWFjcy1vcGVuLWRhdGUtcGlja2VyLWljb25dPVwiY21hY3NPcGVuXCIgbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCIgbnpUaGVtZT1cImZpbGxcIj48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1zdWZmaXhcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInN1ZmZpeEljb247IGxldCBzdWZmaXhJY29uXCI+XG4gICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cInN1ZmZpeEljb25cIj48L2k+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tIE92ZXJsYXkgLS0+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBhbmVsQ2xhc3NdPVwiWydjbWFjcy1kYXRldGltZS1waWNrZXItZHJvcGRvd24nXVwiXG4gICAgICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwicmVhbE9wZW5TdGF0ZVwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJvdmVybGF5UG9zaXRpb25zXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5VHJhbnNmb3JtT3JpZ2luT25dPVwiJy5hbnQtcGlja2VyLXdyYXBwZXInXCJcbiAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgKGRldGFjaCk9XCJvbk92ZXJsYXlEZXRhY2goKVwiXG4gICAgICAob3ZlcmxheUtleWRvd24pPVwib25PdmVybGF5S2V5ZG93bigkZXZlbnQpXCJcbiAgICAgIChvdmVybGF5T3V0c2lkZUNsaWNrKT1cIm9uQ2xpY2tPdXRzaWRlKCRldmVudClcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcGlja2VyLXdyYXBwZXJcIiBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvblwiIFtAc2xpZGVNb3Rpb25dPVwiJ2VudGVyJ1wiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZHJvcGRvd24ge3sgZHJvcGRvd25DbGFzc05hbWUgfX1cIlxuICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWRyb3Bkb3duLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tTGVmdF09XCJjdXJyZW50UG9zaXRpb25ZID09PSAnYm90dG9tJyAmJiBjdXJyZW50UG9zaXRpb25YID09PSAnc3RhcnQnXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1kcm9wZG93bi1wbGFjZW1lbnQtdG9wTGVmdF09XCJjdXJyZW50UG9zaXRpb25ZID09PSAndG9wJyAmJiBjdXJyZW50UG9zaXRpb25YID09PSAnc3RhcnQnXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tUmlnaHRdPVwiY3VycmVudFBvc2l0aW9uWSA9PT0gJ2JvdHRvbScgJiYgY3VycmVudFBvc2l0aW9uWCA9PT0gJ2VuZCdcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWRyb3Bkb3duLXBsYWNlbWVudC10b3BSaWdodF09XCJjdXJyZW50UG9zaXRpb25ZID09PSAndG9wJyAmJiBjdXJyZW50UG9zaXRpb25YID09PSAnZW5kJ1wiXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcmFuZ2VdPVwiaXNSYW5nZVwiXG4gICAgICAgICAgW25nU3R5bGVdPVwicG9wdXBTdHlsZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8IS0tIENvbXBhdGlibGUgZm9yIG92ZXJsYXkgdGhhdCBub3Qgc3VwcG9ydCBvZmZzZXQgZHluYW1pY2FsbHkgYW5kIGltbWVkaWF0ZWx5IC0tPlxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc1BpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBub0FuaW1hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc1JhbmdlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG9wZW46IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRpbWVsaW5lOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlucHV0UmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIhOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgQElucHV0KCkgYWxsb3dDbGVhcj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGF1dG9Gb2N1cz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZvcm1hdCE6IHN0cmluZztcbiAgQElucHV0KCkgc2VwYXJhdG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBwb3B1cFN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGRyb3Bkb3duQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBASW5wdXQoKSBzdWZmaXhJY29uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PjtcbiAgQElucHV0KCkgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgQElucHV0KCkgaWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBjbWFjc09wZW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9jdXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gfCBudWxsPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTsgLy8gRW1pdHRlZCB3aGVuIG92ZXJsYXkncyBvcGVuIHN0YXRlIGNoYW5nZVxuXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSwgeyBzdGF0aWM6IGZhbHNlIH0pIGNka0Nvbm5lY3RlZE92ZXJsYXk/OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuICBAVmlld0NoaWxkKCdzZXBhcmF0b3JFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHNlcGFyYXRvckVsZW1lbnQ/OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdwaWNrZXJJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwaWNrZXJJbnB1dD86IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG4gIEBWaWV3Q2hpbGRyZW4oJ3JhbmdlUGlja2VySW5wdXQnKSByYW5nZVBpY2tlcklucHV0cz86IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+PjtcbiAgQENvbnRlbnRDaGlsZChEYXRlUmFuZ2VQb3B1cENvbXBvbmVudCkgcGFuZWwhOiBEYXRlUmFuZ2VQb3B1cENvbXBvbmVudDtcblxuICBjYWxjV2lkdGg6IG51bWJlciA9IDA7XG4gIG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgZG9jdW1lbnQ6IERvY3VtZW50O1xuICBpbnB1dFNpemU6IG51bWJlciA9IDEyO1xuICBpbnB1dFdpZHRoPzogbnVtYmVyO1xuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByZWZpeENscyA9IFBSRUZJWF9DTEFTUztcbiAgaW5wdXRWYWx1ZSE6IE56U2FmZUFueTtcbiAgYWN0aXZlQmFyU3R5bGU6IG9iamVjdCA9IHt9O1xuICBvdmVybGF5T3BlbjogYm9vbGVhbiA9IGZhbHNlOyAvLyBBdmFpbGFibGUgd2hlbiBcIm9wZW5cIj11bmRlZmluZWRcbiAgb3ZlcmxheVBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gW1xuICAgIHtcbiAgICAgIG9mZnNldFg6IC0xMixcbiAgICAgIG9mZnNldFk6IDgsXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXG4gICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgIG92ZXJsYXlZOiAndG9wJ1xuICAgIH0sXG4gICAge1xuICAgICAgb2Zmc2V0WDogLTEyLFxuICAgICAgb2Zmc2V0WTogLTgsXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICAgIH0sXG4gICAge1xuICAgICAgb2Zmc2V0WDogMTIsXG4gICAgICBvZmZzZXRZOiA4LFxuICAgICAgb3JpZ2luWDogJ2VuZCcsXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgIG92ZXJsYXlZOiAndG9wJ1xuICAgIH0sXG4gICAge1xuICAgICAgb2Zmc2V0WDogMTIsXG4gICAgICBvZmZzZXRZOiAtOCxcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxuICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcbiAgICB9XG4gIF0gYXMgQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdO1xuICBjdXJyZW50UG9zaXRpb25YOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyA9ICdzdGFydCc7XG4gIGN1cnJlbnRQb3NpdGlvblk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyA9ICdib3R0b20nO1xuXG4gIGdldCByZWFsT3BlblN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIC8vIFRoZSB2YWx1ZSB0aGF0IHJlYWxseSBkZWNpZGUgdGhlIG9wZW4gc3RhdGUgb2Ygb3ZlcmxheVxuICAgIHRoaXMuc2V0UGFuZWxXaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLmlzT3BlbkhhbmRsZWRCeVVzZXIoKSA/ICEhdGhpcy5vcGVuIDogdGhpcy5vdmVybGF5T3BlbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIG56UmVzaXplT2JzZXJ2ZXI6IE56UmVzaXplT2JzZXJ2ZXIsXG4gICAgcHVibGljIGRhdGVQaWNrZXJTZXJ2aWNlOiBEYXRlUGlja2VyU2VydmljZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2M6IE56U2FmZUFueVxuICApIHtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jO1xuICAgIHRoaXMub3JpZ2luID0gbmV3IENka092ZXJsYXlPcmlnaW4odGhpcy5lbGVtZW50UmVmKTtcbiAgfVxuXG4gIHNldFBhbmVsV2lkdGgoKSB7XG4gICAgdGhpcy5jYWxjV2lkdGggPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArIDI0O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5pc1JhbmdlID8gWycnLCAnJ10gOiAnJztcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlQ2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUmFuZ2UgJiYgdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMubnpSZXNpemVPYnNlcnZlclxuICAgICAgICAub2JzZXJ2ZSh0aGlzLmVsZW1lbnRSZWYpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVJbnB1dFdpZHRoQW5kQXJyb3dMZWZ0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5wdXRQYXJ0Q2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHBhcnRUeXBlID0+IHtcbiAgICAgIGlmIChwYXJ0VHlwZSkge1xuICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0ID0gcGFydFR5cGU7XG4gICAgICB9XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGhBbmRBcnJvd0xlZnQoKTtcbiAgICAgIHRoaXMucGFuZWw/LnVwZGF0ZUFjdGl2ZURhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5mb3JtYXQ/LmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcy5mb3JtYXQ/LnByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXRTaXplID0gTWF0aC5tYXgoMTAsIHRoaXMuZm9ybWF0Lmxlbmd0aCkgKyAyO1xuICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSW5wdXRXaWR0aEFuZEFycm93TGVmdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0V2lkdGggPSB0aGlzLnJhbmdlUGlja2VySW5wdXRzPy5maXJzdD8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwO1xuXG4gICAgY29uc3QgYmFzZVN0eWxlID0geyBwb3NpdGlvbjogJ2Fic29sdXRlJywgd2lkdGg6IGAke3RoaXMuaW5wdXRXaWR0aH1weGAgfTtcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFycm93TGVmdCA9XG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0ID09PSAnbGVmdCcgPyAwIDogdGhpcy5pbnB1dFdpZHRoICsgdGhpcy5zZXBhcmF0b3JFbGVtZW50Py5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIHx8IDA7XG5cbiAgICBpZiAodGhpcy5kaXIgPT09ICdydGwnKSB7XG4gICAgICB0aGlzLmFjdGl2ZUJhclN0eWxlID0geyAuLi5iYXNlU3R5bGUsIHJpZ2h0OiBgJHt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFycm93TGVmdH1weGAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVCYXJTdHlsZSA9IHsgLi4uYmFzZVN0eWxlLCBsZWZ0OiBgJHt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFycm93TGVmdH1weGAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnBhbmVsLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldElucHV0KHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmlzUmFuZ2VcbiAgICAgID8gcGFydFR5cGUgPT09ICdsZWZ0J1xuICAgICAgICA/IHRoaXMucmFuZ2VQaWNrZXJJbnB1dHM/LmZpcnN0Lm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgOiB0aGlzLnJhbmdlUGlja2VySW5wdXRzPy5sYXN0Lm5hdGl2ZUVsZW1lbnRcbiAgICAgIDogdGhpcy5waWNrZXJJbnB1dCEubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIGNvbnN0IGFjdGl2ZUlucHV0RWxlbWVudCA9IHRoaXMuZ2V0SW5wdXQodGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dCk7XG4gICAgaWYgKHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gYWN0aXZlSW5wdXRFbGVtZW50KSB7XG4gICAgICBhY3RpdmVJbnB1dEVsZW1lbnQ/LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1cyhldmVudDogRm9jdXNFdmVudCwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmZvY3VzQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgaWYgKHBhcnRUeXBlKSB7XG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmlucHV0UGFydENoYW5nZSQubmV4dChwYXJ0VHlwZSk7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmZvY3VzQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgLy8gU2hvdyBvdmVybGF5IGNvbnRlbnRcbiAgc2hvd092ZXJsYXkoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJlYWxPcGVuU3RhdGUgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aEFuZEFycm93TGVmdCgpO1xuICAgICAgdGhpcy5vdmVybGF5T3BlbiA9IHRydWU7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB0aGlzLnBhbmVsLmluaXQoKTtcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZU92ZXJsYXkoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVhbE9wZW5TdGF0ZSkge1xuICAgICAgdGhpcy5vdmVybGF5T3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dDbGVhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuaXNFbXB0eVZhbHVlKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUpICYmICEhdGhpcy5hbGxvd0NsZWFyO1xuICB9XG5cbiAgb25DbGlja0lucHV0Qm94KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5mb2N1cygpO1xuICAgIGlmICghdGhpcy5pc09wZW5IYW5kbGVkQnlVc2VyKCkpIHtcbiAgICAgIHRoaXMuc2hvd092ZXJsYXkoKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrT3V0c2lkZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFuZWwuaXNBbGxvd2VkKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUhLCB0cnVlKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkgJiYgd3JvbmdTb3J0T3JkZXIodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXQpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWVbaW5kZXhdO1xuICAgICAgICB0aGlzLnBhbmVsLmNoYW5nZVZhbHVlRnJvbVNlbGVjdCh2YWx1ZSEsIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUoKTtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZW1pdFZhbHVlJC5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0VmFsdWUodGhpcy5kYXRlUGlja2VyU2VydmljZS5pbml0aWFsVmFsdWUhKTtcbiAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICB9XG4gIH1cblxuICBvbk92ZXJsYXlEZXRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICB9XG5cbiAgb25PdmVybGF5S2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEUpIHtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0VmFsdWUodGhpcy5kYXRlUGlja2VyU2VydmljZS5pbml0aWFsVmFsdWUhKTtcbiAgICB9XG4gIH1cblxuICAvLyBOT1RFOiBBIGlzc3VlIGhlcmUsIHRoZSBmaXJzdCB0aW1lIHBvc2l0aW9uIGNoYW5nZSwgdGhlIGFuaW1hdGlvbiB3aWxsIG5vdCBiZSB0cmlnZ2VyZWQuXG4gIC8vIEJlY2F1c2UgdGhlIG92ZXJsYXkncyBcInBvc2l0aW9uQ2hhbmdlXCIgZXZlbnQgaXMgZW1pdHRlZCBhZnRlciB0aGUgY29udGVudCdzIGZ1bGwgc2hvd24gdXAuXG4gIC8vIEFsbCBvdGhlciBjb21wb25lbnRzIGxpa2UgXCJuei1kcm9wZG93blwiIHdoaWNoIGRlcGVuZHMgb24gb3ZlcmxheSBhbHNvIGhhcyB0aGUgc2FtZSBpc3N1ZS5cbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMTQyOVxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvblggPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5YO1xuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uWSA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpOyAvLyBUYWtlIHNpZGUtZWZmZWN0cyB0byBwb3NpdGlvbiBzdHlsZXNcbiAgfVxuXG4gIG9uQ2xpY2tDbGVhcihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKHRoaXMuaXNSYW5nZSA/IFtdIDogbnVsbCk7XG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5lbWl0VmFsdWUkLm5leHQoKTtcbiAgfVxuXG4gIHVwZGF0ZUlucHV0VmFsdWUoKTogdm9pZCB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlO1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IG5ld1ZhbHVlID8gKG5ld1ZhbHVlIGFzIENhbmR5RGF0ZVtdKS5tYXAodiA9PiB0aGlzLmZvcm1hdFZhbHVlKHYpKSA6IFsnJywgJyddO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmZvcm1hdFZhbHVlKG5ld1ZhbHVlIGFzIENhbmR5RGF0ZSk7XG4gICAgfVxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZm9ybWF0VmFsdWUodmFsdWU6IENhbmR5RGF0ZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQodmFsdWUgJiYgKHZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSwgdGhpcy5mb3JtYXQpO1xuICB9XG5cbiAgb25JbnB1dENoYW5nZSh2YWx1ZTogc3RyaW5nLCBpc0VudGVyOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICAvKipcbiAgICAgKiBpbiBJRTExIGZvY3VzL2JsdXIgd2lsbCB0cmlnZ2VyIG5nTW9kZWxDaGFuZ2UgaWYgaGFzIHBsYWNlaG9sZGVyXG4gICAgICogc28gd2UgZm9yYmlkZGVuIElFMTEgdG8gb3BlbiBwYW5lbCB0aHJvdWdoIGlucHV0IGNoYW5nZVxuICAgICAqL1xuICAgIGlmIChcbiAgICAgICF0aGlzLnBsYXRmb3JtLlRSSURFTlQgJiZcbiAgICAgIHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5nZXRJbnB1dCh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0KSAmJlxuICAgICAgIXRoaXMucmVhbE9wZW5TdGF0ZVxuICAgICkge1xuICAgICAgdGhpcy5zaG93T3ZlcmxheSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmNoZWNrVmFsaWREYXRlKHZhbHVlKTtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgdGhpcy5wYW5lbC5jaGFuZ2VWYWx1ZUZyb21TZWxlY3QoZGF0ZSwgaXNFbnRlcik7XG4gICAgfVxuICB9XG5cbiAgb25LZXl1cEVudGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMub25JbnB1dENoYW5nZSgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tWYWxpZERhdGUodmFsdWU6IHN0cmluZyk6IENhbmR5RGF0ZSB8IG51bGwge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgQ2FuZHlEYXRlKHRoaXMuZGF0ZUhlbHBlci5wYXJzZURhdGUodmFsdWUsIHRoaXMuZm9ybWF0KSk7XG5cbiAgICBpZiAoIWRhdGUuaXNWYWxpZCgpIHx8IHZhbHVlICE9PSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUubmF0aXZlRGF0ZSwgdGhpcy5mb3JtYXQpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaXNSYW5nZSA/IHRoaXMucGxhY2Vob2xkZXJbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSEpXSA6ICh0aGlzLnBsYWNlaG9sZGVyIGFzIHN0cmluZyk7XG4gIH1cblxuICBpc0VtcHR5VmFsdWUodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IGJvb2xlYW4ge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHJldHVybiAhdmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmV2ZXJ5KHZhbCA9PiAhdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICF2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBXaGV0aGVyIG9wZW4gc3RhdGUgaXMgcGVybWFuZW50bHkgY29udHJvbGxlZCBieSB1c2VyIGhpbXNlbGZcbiAgaXNPcGVuSGFuZGxlZEJ5VXNlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vcGVuICE9PSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==