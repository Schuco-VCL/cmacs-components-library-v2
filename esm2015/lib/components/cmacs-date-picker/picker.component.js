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
const _c6 = ["*"];
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
        this.inputReadOnly = false;
        this.popupStyle = null;
        this.dir = 'ltr';
        this.id = null;
        this.cmacsOpen = false;
        this.focusChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.openChange = new EventEmitter(); // Emitted when overlay's open state change
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
        return this.isOpenHandledByUser() ? !!this.open : this.overlayOpen;
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
    } }, inputs: { noAnimation: "noAnimation", isRange: "isRange", open: "open", disabled: "disabled", inputReadOnly: "inputReadOnly", placeholder: "placeholder", allowClear: "allowClear", autoFocus: "autoFocus", format: "format", separator: "separator", popupStyle: "popupStyle", dropdownClassName: "dropdownClassName", suffixIcon: "suffixIcon", dir: "dir", id: "id", cmacsOpen: "cmacsOpen" }, outputs: { focusChange: "focusChange", valueChange: "valueChange", openChange: "openChange" }, exportAs: ["cmacsPicker"], features: [i0.ɵɵNgOnChangesFeature], attrs: _c3, ngContentSelectors: _c6, decls: 7, vars: 6, consts: [[3, "class", 4, "ngIf"], [4, "ngIf"], ["tplRangeInput", ""], ["tplRightRest", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayTransformOriginOn", "positionChange", "detach", "overlayKeydown", "overlayOutsideClick"], [3, "disabled", "readOnly", "ngModel", "placeholder", "size", "ngModelChange", "focus", "blur", "keyup.enter"], ["pickerInput", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["separatorElement", ""], [4, "ngIf", "ngIfElse"], ["defaultSeparator", ""], ["nz-icon", "", "nzType", "swap-right", "nzTheme", "outline"], [3, "disabled", "readOnly", "size", "ngModel", "placeholder", "click", "blur", "focus", "keyup.enter", "ngModelChange"], ["rangePickerInput", ""], [3, "ngStyle"], [3, "class", "click", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], ["nz-icon", "", 3, "nzType"], [1, "ant-picker-wrapper", 2, "position", "relative", 3, "nzNoAnimation"]], template: function CmacsPickerComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.realOpenState)("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayTransformOriginOn", ".ant-picker-wrapper");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUtqQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBRVosWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBSUwsTUFBTSxFQUlOLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUkzRCxPQUFPLEVBQUUsU0FBUyxFQUFtQixjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUdyRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBd0JoQyx3QkFBOEQ7Ozs7SUFoQmhFLDJCQUFvRDtJQUNsRCxtQ0FjRTtJQVBBLHFOQUF3QixzTEFBQSxtTEFBQSw0TUFBQSx1TUFBQTtJQVAxQixpQkFjRTtJQUNGLDZGQUE4RDtJQUNoRSxpQkFBTTs7OztJQWpCZ0IseURBQTZC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RyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ0csRUFBRTtrQkFBVixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUVhLFdBQVc7a0JBQTdCLE1BQU07WUFDWSxXQUFXO2tCQUE3QixNQUFNO1lBQ1ksVUFBVTtrQkFBNUIsTUFBTTtZQUU0QyxtQkFBbUI7a0JBQXJFLFNBQVM7bUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ0MsZ0JBQWdCO2tCQUFqRSxTQUFTO21CQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNILFdBQVc7a0JBQXZELFNBQVM7bUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNULGlCQUFpQjtrQkFBbEQsWUFBWTttQkFBQyxrQkFBa0I7WUFDTyxLQUFLO2tCQUEzQyxZQUFZO21CQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBDZGtDb25uZWN0ZWRPdmVybGF5LFxuICBDZGtPdmVybGF5T3JpZ2luLFxuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIEhvcml6b250YWxDb25uZWN0aW9uUG9zLFxuICBWZXJ0aWNhbENvbm5lY3Rpb25Qb3Ncbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNsaWRlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOelJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3Jlc2l6ZS1vYnNlcnZlcnMnO1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBDYW5keURhdGUsIENvbXBhdGlibGVWYWx1ZSwgd3JvbmdTb3J0T3JkZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XG5pbXBvcnQgeyBOZ1N0eWxlSW50ZXJmYWNlLCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2RhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcG9wdXAuY29tcG9uZW50JztcbmltcG9ydCB7IFJhbmdlUGFydFR5cGUgfSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcbmltcG9ydCB7IFBSRUZJWF9DTEFTUyB9IGZyb20gJy4vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ1tjbWFjcy1waWNrZXJdJyxcbiAgZXhwb3J0QXM6ICdjbWFjc1BpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLSBDb250ZW50IG9mIHNpbmdsZSBwaWNrZXIgLS0+XG4gICAgPGRpdiAqbmdJZj1cIiFpc1JhbmdlXCIgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0taW5wdXRcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICAjcGlja2VySW5wdXRcbiAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgICBbY2xhc3MuY21hY3Mtb3Blbi1kYXRlLXBpY2tlci1pbnB1dF09XCJjbWFjc09wZW5cIlxuICAgICAgICBbY2xhc3MuYW50LWlucHV0LWRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW3JlYWRPbmx5XT1cImlucHV0UmVhZE9ubHlcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInt7IGdldFBsYWNlaG9sZGVyKCkgfX1cIlxuICAgICAgICBbc2l6ZV09XCJpbnB1dFNpemVcIlxuICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxuICAgICAgICAoa2V5dXAuZW50ZXIpPVwib25LZXl1cEVudGVyKCRldmVudClcIlxuICAgICAgLz5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxSaWdodFJlc3RcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gQ29udGVudCBvZiByYW5nZSBwaWNrZXIgLS0+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzUmFuZ2VcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0taW5wdXRcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJhbmdlSW5wdXQ7IGNvbnRleHQ6IHsgcGFydFR5cGU6ICdsZWZ0JyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgI3NlcGFyYXRvckVsZW1lbnQgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcmFuZ2Utc2VwYXJhdG9yXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXNlcGFyYXRvclwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzZXBhcmF0b3I7IGVsc2UgZGVmYXVsdFNlcGFyYXRvclwiPnt7IHNlcGFyYXRvciB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFNlcGFyYXRvcj5cbiAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cInN3YXAtcmlnaHRcIiBuelRoZW1lPVwib3V0bGluZVwiPjwvaT5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1pbnB1dFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsUmFuZ2VJbnB1dDsgY29udGV4dDogeyBwYXJ0VHlwZTogJ3JpZ2h0JyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxSaWdodFJlc3RcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8IS0tIElucHV0IGZvciBSYW5nZSBPTkxZIC0tPlxuICAgIDxuZy10ZW1wbGF0ZSAjdHBsUmFuZ2VJbnB1dCBsZXQtcGFydFR5cGU9XCJwYXJ0VHlwZVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgICNyYW5nZVBpY2tlcklucHV0XG4gICAgICAgIFtjbGFzcy5jbWFjcy1vcGVuLWRhdGUtcGlja2VyLWlucHV0XT1cImNtYWNzT3BlblwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtyZWFkT25seV09XCJpbnB1dFJlYWRPbmx5XCJcbiAgICAgICAgW3NpemVdPVwiaW5wdXRTaXplXCJcbiAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tJbnB1dEJveCgkZXZlbnQpXCJcbiAgICAgICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxuICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQsIHBhcnRUeXBlKVwiXG4gICAgICAgIChrZXl1cC5lbnRlcik9XCJvbktleXVwRW50ZXIoJGV2ZW50KVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVtkYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSldXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25JbnB1dENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBnZXRQbGFjZWhvbGRlcihwYXJ0VHlwZSkgfX1cIlxuICAgICAgLz5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLSBSaWdodCBvcGVyYXRvciBpY29ucyAtLT5cbiAgICA8bmctdGVtcGxhdGUgI3RwbFJpZ2h0UmVzdD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tYWN0aXZlLWJhclwiIFtuZ1N0eWxlXT1cImFjdGl2ZUJhclN0eWxlXCI+PC9kaXY+XG4gICAgICA8c3BhbiAqbmdJZj1cInNob3dDbGVhcigpXCIgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tY2xlYXJcIlxuICAgICAgICAoY2xpY2spPVwib25DbGlja0NsZWFyKCRldmVudClcIj5cbiAgICAgICAgPGkgbnotaWNvbiBbY2xhc3MuY21hY3Mtb3Blbi1kYXRlLXBpY2tlci1pY29uXT1cImNtYWNzT3BlblwiIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiIG56VGhlbWU9XCJmaWxsXCI+PC9pPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tc3VmZml4XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJzdWZmaXhJY29uOyBsZXQgc3VmZml4SWNvblwiPlxuICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJzdWZmaXhJY29uXCI+PC9pPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLSBPdmVybGF5IC0tPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxuICAgICAgbnpDb25uZWN0ZWRPdmVybGF5XG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvcmlnaW5cIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cInJlYWxPcGVuU3RhdGVcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwib3ZlcmxheVBvc2l0aW9uc1wiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVRyYW5zZm9ybU9yaWdpbk9uXT1cIicuYW50LXBpY2tlci13cmFwcGVyJ1wiXG4gICAgICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChkZXRhY2gpPVwib25PdmVybGF5RGV0YWNoKClcIlxuICAgICAgKG92ZXJsYXlLZXlkb3duKT1cIm9uT3ZlcmxheUtleWRvd24oJGV2ZW50KVwiXG4gICAgICAob3ZlcmxheU91dHNpZGVDbGljayk9XCJvbkNsaWNrT3V0c2lkZSgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci13cmFwcGVyXCIgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb25cIiBbQHNsaWRlTW90aW9uXT1cIidlbnRlcidcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRyb3Bkb3duIHt7IGRyb3Bkb3duQ2xhc3NOYW1lIH19XCJcbiAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1kcm9wZG93bi1ydGxdPVwiZGlyID09PSAncnRsJ1wiXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRdPVwiY3VycmVudFBvc2l0aW9uWSA9PT0gJ2JvdHRvbScgJiYgY3VycmVudFBvc2l0aW9uWCA9PT0gJ3N0YXJ0J1wiXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnRdPVwiY3VycmVudFBvc2l0aW9uWSA9PT0gJ3RvcCcgJiYgY3VycmVudFBvc2l0aW9uWCA9PT0gJ3N0YXJ0J1wiXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbVJpZ2h0XT1cImN1cnJlbnRQb3NpdGlvblkgPT09ICdib3R0b20nICYmIGN1cnJlbnRQb3NpdGlvblggPT09ICdlbmQnXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1kcm9wZG93bi1wbGFjZW1lbnQtdG9wUmlnaHRdPVwiY3VycmVudFBvc2l0aW9uWSA9PT0gJ3RvcCcgJiYgY3VycmVudFBvc2l0aW9uWCA9PT0gJ2VuZCdcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWRyb3Bkb3duLXJhbmdlXT1cImlzUmFuZ2VcIlxuICAgICAgICAgIFtuZ1N0eWxlXT1cInBvcHVwU3R5bGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPCEtLSBDb21wYXRpYmxlIGZvciBvdmVybGF5IHRoYXQgbm90IHN1cHBvcnQgb2Zmc2V0IGR5bmFtaWNhbGx5IGFuZCBpbW1lZGlhdGVseSAtLT5cbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbm9BbmltYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBvcGVuOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpbnB1dFJlYWRPbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyITogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBJbnB1dCgpIGFsbG93Q2xlYXI/OiBib29sZWFuO1xuICBASW5wdXQoKSBhdXRvRm9jdXM/OiBib29sZWFuO1xuICBASW5wdXQoKSBmb3JtYXQhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlcGFyYXRvcj86IHN0cmluZztcbiAgQElucHV0KCkgcG9wdXBTdHlsZTogTmdTdHlsZUludGVyZmFjZSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBkcm9wZG93bkNsYXNzTmFtZT86IHN0cmluZztcbiAgQElucHV0KCkgc3VmZml4SWNvbj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XG4gIEBJbnB1dCgpIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgY21hY3NPcGVuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvY3VzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdIHwgbnVsbD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7IC8vIEVtaXR0ZWQgd2hlbiBvdmVybGF5J3Mgb3BlbiBzdGF0ZSBjaGFuZ2VcblxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXksIHsgc3RhdGljOiBmYWxzZSB9KSBjZGtDb25uZWN0ZWRPdmVybGF5PzogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcbiAgQFZpZXdDaGlsZCgnc2VwYXJhdG9yRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBzZXBhcmF0b3JFbGVtZW50PzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncGlja2VySW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgcGlja2VySW5wdXQ/OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkcmVuKCdyYW5nZVBpY2tlcklucHV0JykgcmFuZ2VQaWNrZXJJbnB1dHM/OiBRdWVyeUxpc3Q8RWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50Pj47XG4gIEBDb250ZW50Q2hpbGQoRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQpIHBhbmVsITogRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQ7XG5cbiAgb3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICBkb2N1bWVudDogRG9jdW1lbnQ7XG4gIGlucHV0U2l6ZTogbnVtYmVyID0gMTI7XG4gIGlucHV0V2lkdGg/OiBudW1iZXI7XG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJlZml4Q2xzID0gUFJFRklYX0NMQVNTO1xuICBpbnB1dFZhbHVlITogTnpTYWZlQW55O1xuICBhY3RpdmVCYXJTdHlsZTogb2JqZWN0ID0ge307XG4gIG92ZXJsYXlPcGVuOiBib29sZWFuID0gZmFsc2U7IC8vIEF2YWlsYWJsZSB3aGVuIFwib3BlblwiPXVuZGVmaW5lZFxuICBvdmVybGF5UG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbXG4gICAge1xuICAgICAgb2Zmc2V0WDogLTEyLFxuICAgICAgb2Zmc2V0WTogOCxcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgb3ZlcmxheVk6ICd0b3AnXG4gICAgfSxcbiAgICB7XG4gICAgICBvZmZzZXRYOiAtMTIsXG4gICAgICBvZmZzZXRZOiAtOCxcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgb3ZlcmxheVk6ICdib3R0b20nXG4gICAgfSxcbiAgICB7XG4gICAgICBvZmZzZXRYOiAxMixcbiAgICAgIG9mZnNldFk6IDgsXG4gICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgICAgb3ZlcmxheVk6ICd0b3AnXG4gICAgfSxcbiAgICB7XG4gICAgICBvZmZzZXRYOiAxMixcbiAgICAgIG9mZnNldFk6IC04LFxuICAgICAgb3JpZ2luWDogJ2VuZCcsXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICAgIH1cbiAgXSBhcyBDb25uZWN0aW9uUG9zaXRpb25QYWlyW107XG4gIGN1cnJlbnRQb3NpdGlvblg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zID0gJ3N0YXJ0JztcbiAgY3VycmVudFBvc2l0aW9uWTogVmVydGljYWxDb25uZWN0aW9uUG9zID0gJ2JvdHRvbSc7XG5cbiAgZ2V0IHJlYWxPcGVuU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgLy8gVGhlIHZhbHVlIHRoYXQgcmVhbGx5IGRlY2lkZSB0aGUgb3BlbiBzdGF0ZSBvZiBvdmVybGF5XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuSGFuZGxlZEJ5VXNlcigpID8gISF0aGlzLm9wZW4gOiB0aGlzLm92ZXJsYXlPcGVuO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgbnpSZXNpemVPYnNlcnZlcjogTnpSZXNpemVPYnNlcnZlcixcbiAgICBwdWJsaWMgZGF0ZVBpY2tlclNlcnZpY2U6IERhdGVQaWNrZXJTZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvYzogTnpTYWZlQW55XG4gICkge1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2M7XG4gICAgdGhpcy5vcmlnaW4gPSBuZXcgQ2RrT3ZlcmxheU9yaWdpbih0aGlzLmVsZW1lbnRSZWYpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5pc1JhbmdlID8gWycnLCAnJ10gOiAnJztcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlQ2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUmFuZ2UgJiYgdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMubnpSZXNpemVPYnNlcnZlclxuICAgICAgICAub2JzZXJ2ZSh0aGlzLmVsZW1lbnRSZWYpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVJbnB1dFdpZHRoQW5kQXJyb3dMZWZ0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5wdXRQYXJ0Q2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHBhcnRUeXBlID0+IHtcbiAgICAgIGlmIChwYXJ0VHlwZSkge1xuICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0ID0gcGFydFR5cGU7XG4gICAgICB9XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGhBbmRBcnJvd0xlZnQoKTtcbiAgICAgIHRoaXMucGFuZWw/LnVwZGF0ZUFjdGl2ZURhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5mb3JtYXQ/LmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcy5mb3JtYXQ/LnByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXRTaXplID0gTWF0aC5tYXgoMTAsIHRoaXMuZm9ybWF0Lmxlbmd0aCkgKyAyO1xuICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSW5wdXRXaWR0aEFuZEFycm93TGVmdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0V2lkdGggPSB0aGlzLnJhbmdlUGlja2VySW5wdXRzPy5maXJzdD8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwO1xuXG4gICAgY29uc3QgYmFzZVN0eWxlID0geyBwb3NpdGlvbjogJ2Fic29sdXRlJywgd2lkdGg6IGAke3RoaXMuaW5wdXRXaWR0aH1weGAgfTtcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFycm93TGVmdCA9XG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0ID09PSAnbGVmdCcgPyAwIDogdGhpcy5pbnB1dFdpZHRoICsgdGhpcy5zZXBhcmF0b3JFbGVtZW50Py5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIHx8IDA7XG5cbiAgICBpZiAodGhpcy5kaXIgPT09ICdydGwnKSB7XG4gICAgICB0aGlzLmFjdGl2ZUJhclN0eWxlID0geyAuLi5iYXNlU3R5bGUsIHJpZ2h0OiBgJHt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFycm93TGVmdH1weGAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVCYXJTdHlsZSA9IHsgLi4uYmFzZVN0eWxlLCBsZWZ0OiBgJHt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFycm93TGVmdH1weGAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnBhbmVsLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldElucHV0KHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmlzUmFuZ2VcbiAgICAgID8gcGFydFR5cGUgPT09ICdsZWZ0J1xuICAgICAgICA/IHRoaXMucmFuZ2VQaWNrZXJJbnB1dHM/LmZpcnN0Lm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgOiB0aGlzLnJhbmdlUGlja2VySW5wdXRzPy5sYXN0Lm5hdGl2ZUVsZW1lbnRcbiAgICAgIDogdGhpcy5waWNrZXJJbnB1dCEubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIGNvbnN0IGFjdGl2ZUlucHV0RWxlbWVudCA9IHRoaXMuZ2V0SW5wdXQodGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dCk7XG4gICAgaWYgKHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gYWN0aXZlSW5wdXRFbGVtZW50KSB7XG4gICAgICBhY3RpdmVJbnB1dEVsZW1lbnQ/LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1cyhldmVudDogRm9jdXNFdmVudCwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmZvY3VzQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgaWYgKHBhcnRUeXBlKSB7XG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmlucHV0UGFydENoYW5nZSQubmV4dChwYXJ0VHlwZSk7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmZvY3VzQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgLy8gU2hvdyBvdmVybGF5IGNvbnRlbnRcbiAgc2hvd092ZXJsYXkoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJlYWxPcGVuU3RhdGUgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aEFuZEFycm93TGVmdCgpO1xuICAgICAgdGhpcy5vdmVybGF5T3BlbiA9IHRydWU7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB0aGlzLnBhbmVsLmluaXQoKTtcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZU92ZXJsYXkoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVhbE9wZW5TdGF0ZSkge1xuICAgICAgdGhpcy5vdmVybGF5T3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dDbGVhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuaXNFbXB0eVZhbHVlKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUpICYmICEhdGhpcy5hbGxvd0NsZWFyO1xuICB9XG5cbiAgb25DbGlja0lucHV0Qm94KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5mb2N1cygpO1xuICAgIGlmICghdGhpcy5pc09wZW5IYW5kbGVkQnlVc2VyKCkpIHtcbiAgICAgIHRoaXMuc2hvd092ZXJsYXkoKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrT3V0c2lkZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFuZWwuaXNBbGxvd2VkKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUhLCB0cnVlKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkgJiYgd3JvbmdTb3J0T3JkZXIodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXQpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWVbaW5kZXhdO1xuICAgICAgICB0aGlzLnBhbmVsLmNoYW5nZVZhbHVlRnJvbVNlbGVjdCh2YWx1ZSEsIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUoKTtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZW1pdFZhbHVlJC5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0VmFsdWUodGhpcy5kYXRlUGlja2VyU2VydmljZS5pbml0aWFsVmFsdWUhKTtcbiAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICB9XG4gIH1cblxuICBvbk92ZXJsYXlEZXRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICB9XG5cbiAgb25PdmVybGF5S2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEUpIHtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0VmFsdWUodGhpcy5kYXRlUGlja2VyU2VydmljZS5pbml0aWFsVmFsdWUhKTtcbiAgICB9XG4gIH1cblxuICAvLyBOT1RFOiBBIGlzc3VlIGhlcmUsIHRoZSBmaXJzdCB0aW1lIHBvc2l0aW9uIGNoYW5nZSwgdGhlIGFuaW1hdGlvbiB3aWxsIG5vdCBiZSB0cmlnZ2VyZWQuXG4gIC8vIEJlY2F1c2UgdGhlIG92ZXJsYXkncyBcInBvc2l0aW9uQ2hhbmdlXCIgZXZlbnQgaXMgZW1pdHRlZCBhZnRlciB0aGUgY29udGVudCdzIGZ1bGwgc2hvd24gdXAuXG4gIC8vIEFsbCBvdGhlciBjb21wb25lbnRzIGxpa2UgXCJuei1kcm9wZG93blwiIHdoaWNoIGRlcGVuZHMgb24gb3ZlcmxheSBhbHNvIGhhcyB0aGUgc2FtZSBpc3N1ZS5cbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMTQyOVxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvblggPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5YO1xuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uWSA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpOyAvLyBUYWtlIHNpZGUtZWZmZWN0cyB0byBwb3NpdGlvbiBzdHlsZXNcbiAgfVxuXG4gIG9uQ2xpY2tDbGVhcihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKHRoaXMuaXNSYW5nZSA/IFtdIDogbnVsbCk7XG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5lbWl0VmFsdWUkLm5leHQoKTtcbiAgfVxuXG4gIHVwZGF0ZUlucHV0VmFsdWUoKTogdm9pZCB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlO1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IG5ld1ZhbHVlID8gKG5ld1ZhbHVlIGFzIENhbmR5RGF0ZVtdKS5tYXAodiA9PiB0aGlzLmZvcm1hdFZhbHVlKHYpKSA6IFsnJywgJyddO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmZvcm1hdFZhbHVlKG5ld1ZhbHVlIGFzIENhbmR5RGF0ZSk7XG4gICAgfVxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZm9ybWF0VmFsdWUodmFsdWU6IENhbmR5RGF0ZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQodmFsdWUgJiYgKHZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSwgdGhpcy5mb3JtYXQpO1xuICB9XG5cbiAgb25JbnB1dENoYW5nZSh2YWx1ZTogc3RyaW5nLCBpc0VudGVyOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICAvKipcbiAgICAgKiBpbiBJRTExIGZvY3VzL2JsdXIgd2lsbCB0cmlnZ2VyIG5nTW9kZWxDaGFuZ2UgaWYgaGFzIHBsYWNlaG9sZGVyXG4gICAgICogc28gd2UgZm9yYmlkZGVuIElFMTEgdG8gb3BlbiBwYW5lbCB0aHJvdWdoIGlucHV0IGNoYW5nZVxuICAgICAqL1xuICAgIGlmIChcbiAgICAgICF0aGlzLnBsYXRmb3JtLlRSSURFTlQgJiZcbiAgICAgIHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5nZXRJbnB1dCh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0KSAmJlxuICAgICAgIXRoaXMucmVhbE9wZW5TdGF0ZVxuICAgICkge1xuICAgICAgdGhpcy5zaG93T3ZlcmxheSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmNoZWNrVmFsaWREYXRlKHZhbHVlKTtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgdGhpcy5wYW5lbC5jaGFuZ2VWYWx1ZUZyb21TZWxlY3QoZGF0ZSwgaXNFbnRlcik7XG4gICAgfVxuICB9XG5cbiAgb25LZXl1cEVudGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMub25JbnB1dENoYW5nZSgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tWYWxpZERhdGUodmFsdWU6IHN0cmluZyk6IENhbmR5RGF0ZSB8IG51bGwge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgQ2FuZHlEYXRlKHRoaXMuZGF0ZUhlbHBlci5wYXJzZURhdGUodmFsdWUsIHRoaXMuZm9ybWF0KSk7XG5cbiAgICBpZiAoIWRhdGUuaXNWYWxpZCgpIHx8IHZhbHVlICE9PSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUubmF0aXZlRGF0ZSwgdGhpcy5mb3JtYXQpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaXNSYW5nZSA/IHRoaXMucGxhY2Vob2xkZXJbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSEpXSA6ICh0aGlzLnBsYWNlaG9sZGVyIGFzIHN0cmluZyk7XG4gIH1cblxuICBpc0VtcHR5VmFsdWUodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IGJvb2xlYW4ge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHJldHVybiAhdmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmV2ZXJ5KHZhbCA9PiAhdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICF2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBXaGV0aGVyIG9wZW4gc3RhdGUgaXMgcGVybWFuZW50bHkgY29udHJvbGxlZCBieSB1c2VyIGhpbXNlbGZcbiAgaXNPcGVuSGFuZGxlZEJ5VXNlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vcGVuICE9PSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==