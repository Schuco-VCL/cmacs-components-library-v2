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
    i0.ɵɵelement(1, "i");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suffixIcon_r35 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(suffixIcon_r35);
} }
function CmacsPickerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
    i0.ɵɵtemplate(1, CmacsPickerComponent_ng_template_4_span_1_Template, 2, 5, "span", 16);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtemplate(3, CmacsPickerComponent_ng_template_4_ng_container_3_Template, 2, 3, "ng-container", 17);
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
    i0.ɵɵelementStart(0, "div", 20);
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
    constructor(elementRef, dateHelper, cdr, platform, ngZone, nzResizeObserver, datePickerService, doc) {
        this.elementRef = elementRef;
        this.dateHelper = dateHelper;
        this.cdr = cdr;
        this.platform = platform;
        this.ngZone = ngZone;
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
        this.scroll = () => {
            this.ngZone.run(() => {
                this.hideOverlay();
            });
        };
        this.document = doc;
        this.origin = new CdkOverlayOrigin(this.elementRef);
        this.ngZone.runOutsideAngular(() => {
            window.addEventListener('scroll', this.scroll, true);
        });
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
        window.removeEventListener('scroll', this.scroll, true);
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
CmacsPickerComponent.ɵfac = function CmacsPickerComponent_Factory(t) { return new (t || CmacsPickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Platform), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i3.NzResizeObserver), i0.ɵɵdirectiveInject(i4.DatePickerService), i0.ɵɵdirectiveInject(DOCUMENT)); };
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
    } }, inputs: { noAnimation: "noAnimation", isRange: "isRange", open: "open", disabled: "disabled", timeline: "timeline", inputReadOnly: "inputReadOnly", placeholder: "placeholder", allowClear: "allowClear", autoFocus: "autoFocus", format: "format", separator: "separator", popupStyle: "popupStyle", dropdownClassName: "dropdownClassName", suffixIcon: "suffixIcon", dir: "dir", id: "id", cmacsOpen: "cmacsOpen" }, outputs: { focusChange: "focusChange", valueChange: "valueChange", openChange: "openChange" }, exportAs: ["cmacsPicker"], features: [i0.ɵɵNgOnChangesFeature], attrs: _c3, ngContentSelectors: _c7, decls: 7, vars: 8, consts: [[3, "class", 4, "ngIf"], [4, "ngIf"], ["tplRangeInput", ""], ["tplRightRest", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayTransformOriginOn", "positionChange", "detach", "overlayKeydown", "overlayOutsideClick"], [3, "disabled", "readOnly", "ngModel", "placeholder", "size", "ngModelChange", "focus", "blur", "keyup.enter"], ["pickerInput", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["separatorElement", ""], [4, "ngIf", "ngIfElse"], ["defaultSeparator", ""], ["nz-icon", "", "nzType", "swap-right", "nzTheme", "outline"], [3, "disabled", "readOnly", "size", "ngModel", "placeholder", "click", "blur", "focus", "keyup.enter", "ngModelChange"], ["rangePickerInput", ""], [3, "ngStyle"], [3, "class", "click", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], [1, "ant-picker-wrapper", 2, "position", "relative", 3, "nzNoAnimation"]], template: function CmacsPickerComponent_Template(rf, ctx) { if (rf & 1) {
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
          <i class="{{suffixIcon}}"></i>
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
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DateHelperService }, { type: i0.ChangeDetectorRef }, { type: i2.Platform }, { type: i0.NgZone }, { type: i3.NzResizeObserver }, { type: i4.DatePickerService }, { type: undefined, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUtqQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBRVosWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBS0wsTUFBTSxFQUlOLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUkzRCxPQUFPLEVBQUUsU0FBUyxFQUFtQixjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUdyRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBd0JoQyx3QkFBOEQ7Ozs7SUFoQmhFLDJCQUFvRDtJQUNsRCxtQ0FjRTtJQVBBLHFOQUF3QixzTEFBQSxtTEFBQSw0TUFBQSx1TUFBQTtJQVAxQixpQkFjRTtJQUNGLDZGQUE4RDtJQUNoRSxpQkFBTTs7OztJQWpCZ0IseURBQTZC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LEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNDLGdCQUFnQjtrQkFBakUsU0FBUzttQkFBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDSCxXQUFXO2tCQUF2RCxTQUFTO21CQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDVCxpQkFBaUI7a0JBQWxELFlBQVk7bUJBQUMsa0JBQWtCO1lBQ08sS0FBSztrQkFBM0MsWUFBWTttQkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIENka0Nvbm5lY3RlZE92ZXJsYXksXHJcbiAgQ2RrT3ZlcmxheU9yaWdpbixcclxuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcclxuICBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyxcclxuICBWZXJ0aWNhbENvbm5lY3Rpb25Qb3NcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NoaWxkcmVuLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNsaWRlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IE56UmVzaXplT2JzZXJ2ZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvcmVzaXplLW9ic2VydmVycyc7XHJcblxyXG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSwgQ29tcGF0aWJsZVZhbHVlLCB3cm9uZ1NvcnRPcmRlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcclxuaW1wb3J0IHsgTmdTdHlsZUludGVyZmFjZSwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2RhdGUtcGlja2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRlUmFuZ2VQb3B1cENvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYW5nZVBhcnRUeXBlIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XHJcbmltcG9ydCB7IFBSRUZJWF9DTEFTUyB9IGZyb20gJy4vdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLXBpY2tlcl0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NQaWNrZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8IS0tIENvbnRlbnQgb2Ygc2luZ2xlIHBpY2tlciAtLT5cclxuICAgIDxkaXYgKm5nSWY9XCIhaXNSYW5nZVwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0XCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgICNwaWNrZXJJbnB1dFxyXG4gICAgICAgIFthdHRyLmlkXT1cImlkXCJcclxuICAgICAgICBbY2xhc3MuY21hY3Mtb3Blbi1kYXRlLXBpY2tlci1pbnB1dF09XCJjbWFjc09wZW5cIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW3JlYWRPbmx5XT1cImlucHV0UmVhZE9ubHlcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBnZXRQbGFjZWhvbGRlcigpIH19XCJcclxuICAgICAgICBbc2l6ZV09XCJpbnB1dFNpemVcIlxyXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxyXG4gICAgICAgIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcclxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChrZXl1cC5lbnRlcik9XCJvbktleXVwRW50ZXIoJGV2ZW50KVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxSaWdodFJlc3RcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gQ29udGVudCBvZiByYW5nZSBwaWNrZXIgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNSYW5nZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJhbmdlSW5wdXQ7IGNvbnRleHQ6IHsgcGFydFR5cGU6ICdsZWZ0JyB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ICNzZXBhcmF0b3JFbGVtZW50IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXJhbmdlLXNlcGFyYXRvclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXNlcGFyYXRvclwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlcGFyYXRvcjsgZWxzZSBkZWZhdWx0U2VwYXJhdG9yXCI+e3sgc2VwYXJhdG9yIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFNlcGFyYXRvcj5cclxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwic3dhcC1yaWdodFwiIG56VGhlbWU9XCJvdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJhbmdlSW5wdXQ7IGNvbnRleHQ6IHsgcGFydFR5cGU6ICdyaWdodCcgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJpZ2h0UmVzdFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8IS0tIElucHV0IGZvciBSYW5nZSBPTkxZIC0tPlxyXG4gICAgPG5nLXRlbXBsYXRlICN0cGxSYW5nZUlucHV0IGxldC1wYXJ0VHlwZT1cInBhcnRUeXBlXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgICNyYW5nZVBpY2tlcklucHV0XHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLW9wZW4tZGF0ZS1waWNrZXItaW5wdXRdPVwiY21hY3NPcGVuXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtyZWFkT25seV09XCJpbnB1dFJlYWRPbmx5XCJcclxuICAgICAgICBbc2l6ZV09XCJpbnB1dFNpemVcIlxyXG4gICAgICAgIChjbGljayk9XCJvbkNsaWNrSW5wdXRCb3goJGV2ZW50KVwiXHJcbiAgICAgICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxyXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudCwgcGFydFR5cGUpXCJcclxuICAgICAgICAoa2V5dXAuZW50ZXIpPVwib25LZXl1cEVudGVyKCRldmVudClcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVtkYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSldXCJcclxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwie3sgZ2V0UGxhY2Vob2xkZXIocGFydFR5cGUpIH19XCJcclxuICAgICAgLz5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPCEtLSBSaWdodCBvcGVyYXRvciBpY29ucyAtLT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjdHBsUmlnaHRSZXN0PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWFjdGl2ZS1iYXJcIiBbbmdTdHlsZV09XCJhY3RpdmVCYXJTdHlsZVwiPjwvZGl2PlxyXG4gICAgICA8c3BhbiAqbmdJZj1cInNob3dDbGVhcigpXCIgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tY2xlYXJcIlxyXG4gICAgICAgIChjbGljayk9XCJvbkNsaWNrQ2xlYXIoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxpIG56LWljb24gW2NsYXNzLmNtYWNzLW9wZW4tZGF0ZS1waWNrZXItaWNvbl09XCJjbWFjc09wZW5cIiBuelR5cGU9XCJjbG9zZS1jaXJjbGVcIiBuelRoZW1lPVwiZmlsbFwiPjwvaT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1zdWZmaXhcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwic3VmZml4SWNvbjsgbGV0IHN1ZmZpeEljb25cIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwie3tzdWZmaXhJY29ufX1cIj48L2k+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPCEtLSBPdmVybGF5IC0tPlxyXG4gICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UGFuZWxDbGFzc109XCJbJ2NtYWNzLWRhdGV0aW1lLXBpY2tlci1kcm9wZG93biddXCJcclxuICAgICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cInJlYWxPcGVuU3RhdGVcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJvdmVybGF5UG9zaXRpb25zXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlUcmFuc2Zvcm1PcmlnaW5Pbl09XCInLmFudC1waWNrZXItd3JhcHBlcidcIlxyXG4gICAgICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgKGRldGFjaCk9XCJvbk92ZXJsYXlEZXRhY2goKVwiXHJcbiAgICAgIChvdmVybGF5S2V5ZG93bik9XCJvbk92ZXJsYXlLZXlkb3duKCRldmVudClcIlxyXG4gICAgICAob3ZlcmxheU91dHNpZGVDbGljayk9XCJvbkNsaWNrT3V0c2lkZSgkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItd3JhcHBlclwiIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uXCIgW0BzbGlkZU1vdGlvbl09XCInZW50ZXInXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZHJvcGRvd24ge3sgZHJvcGRvd25DbGFzc05hbWUgfX1cIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRdPVwiY3VycmVudFBvc2l0aW9uWSA9PT0gJ2JvdHRvbScgJiYgY3VycmVudFBvc2l0aW9uWCA9PT0gJ3N0YXJ0J1wiXHJcbiAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1kcm9wZG93bi1wbGFjZW1lbnQtdG9wTGVmdF09XCJjdXJyZW50UG9zaXRpb25ZID09PSAndG9wJyAmJiBjdXJyZW50UG9zaXRpb25YID09PSAnc3RhcnQnXCJcclxuICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21SaWdodF09XCJjdXJyZW50UG9zaXRpb25ZID09PSAnYm90dG9tJyAmJiBjdXJyZW50UG9zaXRpb25YID09PSAnZW5kJ1wiXHJcbiAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1kcm9wZG93bi1wbGFjZW1lbnQtdG9wUmlnaHRdPVwiY3VycmVudFBvc2l0aW9uWSA9PT0gJ3RvcCcgJiYgY3VycmVudFBvc2l0aW9uWCA9PT0gJ2VuZCdcIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcmFuZ2VdPVwiaXNSYW5nZVwiXHJcbiAgICAgICAgICBbbmdTdHlsZV09XCJwb3B1cFN0eWxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8IS0tIENvbXBhdGlibGUgZm9yIG92ZXJsYXkgdGhhdCBub3Qgc3VwcG9ydCBvZmZzZXQgZHluYW1pY2FsbHkgYW5kIGltbWVkaWF0ZWx5IC0tPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1BpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIG5vQW5pbWF0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG9wZW46IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB0aW1lbGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlucHV0UmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciE6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGFsbG93Q2xlYXI/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGF1dG9Gb2N1cz86IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZm9ybWF0ITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlcGFyYXRvcj86IHN0cmluZztcclxuICBASW5wdXQoKSBwb3B1cFN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgZHJvcGRvd25DbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3VmZml4SWNvbj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XHJcbiAgQElucHV0KCkgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuICBASW5wdXQoKSBpZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgY21hY3NPcGVuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBmb2N1c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTsgLy8gRW1pdHRlZCB3aGVuIG92ZXJsYXkncyBvcGVuIHN0YXRlIGNoYW5nZVxyXG5cclxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXksIHsgc3RhdGljOiBmYWxzZSB9KSBjZGtDb25uZWN0ZWRPdmVybGF5PzogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuICBAVmlld0NoaWxkKCdzZXBhcmF0b3JFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHNlcGFyYXRvckVsZW1lbnQ/OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3BpY2tlcklucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIHBpY2tlcklucHV0PzogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICBAVmlld0NoaWxkcmVuKCdyYW5nZVBpY2tlcklucHV0JykgcmFuZ2VQaWNrZXJJbnB1dHM/OiBRdWVyeUxpc3Q8RWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50Pj47XHJcbiAgQENvbnRlbnRDaGlsZChEYXRlUmFuZ2VQb3B1cENvbXBvbmVudCkgcGFuZWwhOiBEYXRlUmFuZ2VQb3B1cENvbXBvbmVudDtcclxuXHJcbiAgY2FsY1dpZHRoOiBudW1iZXIgPSAwO1xyXG4gIG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICBkb2N1bWVudDogRG9jdW1lbnQ7XHJcbiAgaW5wdXRTaXplOiBudW1iZXIgPSAxMjtcclxuICBpbnB1dFdpZHRoPzogbnVtYmVyO1xyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcmVmaXhDbHMgPSBQUkVGSVhfQ0xBU1M7XHJcbiAgaW5wdXRWYWx1ZSE6IE56U2FmZUFueTtcclxuICBhY3RpdmVCYXJTdHlsZTogb2JqZWN0ID0ge307XHJcbiAgb3ZlcmxheU9wZW46IGJvb2xlYW4gPSBmYWxzZTsgLy8gQXZhaWxhYmxlIHdoZW4gXCJvcGVuXCI9dW5kZWZpbmVkXHJcbiAgb3ZlcmxheVBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gW1xyXG4gICAge1xyXG4gICAgICBvZmZzZXRYOiAtMTIsXHJcbiAgICAgIG9mZnNldFk6IDgsXHJcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgIG9yaWdpblk6ICdib3R0b20nLFxyXG4gICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgb3ZlcmxheVk6ICd0b3AnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvZmZzZXRYOiAtMTIsXHJcbiAgICAgIG9mZnNldFk6IC04LFxyXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb2Zmc2V0WDogMTIsXHJcbiAgICAgIG9mZnNldFk6IDgsXHJcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICBvdmVybGF5WTogJ3RvcCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9mZnNldFg6IDEyLFxyXG4gICAgICBvZmZzZXRZOiAtOCxcclxuICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xyXG4gICAgfVxyXG4gIF0gYXMgQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdO1xyXG4gIGN1cnJlbnRQb3NpdGlvblg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zID0gJ3N0YXJ0JztcclxuICBjdXJyZW50UG9zaXRpb25ZOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MgPSAnYm90dG9tJztcclxuXHJcbiAgZ2V0IHJlYWxPcGVuU3RhdGUoKTogYm9vbGVhbiB7XHJcbiAgICAvLyBUaGUgdmFsdWUgdGhhdCByZWFsbHkgZGVjaWRlIHRoZSBvcGVuIHN0YXRlIG9mIG92ZXJsYXlcclxuICAgIHRoaXMuc2V0UGFuZWxXaWR0aCgpO1xyXG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuSGFuZGxlZEJ5VXNlcigpID8gISF0aGlzLm9wZW4gOiB0aGlzLm92ZXJsYXlPcGVuO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBuelJlc2l6ZU9ic2VydmVyOiBOelJlc2l6ZU9ic2VydmVyLFxyXG4gICAgcHVibGljIGRhdGVQaWNrZXJTZXJ2aWNlOiBEYXRlUGlja2VyU2VydmljZSxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvYzogTnpTYWZlQW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jO1xyXG4gICAgdGhpcy5vcmlnaW4gPSBuZXcgQ2RrT3ZlcmxheU9yaWdpbih0aGlzLmVsZW1lbnRSZWYpO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGwsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwgPSAoKTogdm9pZCA9PiB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFBhbmVsV2lkdGgoKSB7XHJcbiAgICB0aGlzLmNhbGNXaWR0aCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICsgMjQ7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuaXNSYW5nZSA/IFsnJywgJyddIDogJyc7XHJcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlQ2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSAmJiB0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLm56UmVzaXplT2JzZXJ2ZXJcclxuICAgICAgICAub2JzZXJ2ZSh0aGlzLmVsZW1lbnRSZWYpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVJbnB1dFdpZHRoQW5kQXJyb3dMZWZ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbnB1dFBhcnRDaGFuZ2UkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUocGFydFR5cGUgPT4ge1xyXG4gICAgICBpZiAocGFydFR5cGUpIHtcclxuICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0ID0gcGFydFR5cGU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGhBbmRBcnJvd0xlZnQoKTtcclxuICAgICAgdGhpcy5wYW5lbD8udXBkYXRlQWN0aXZlRGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmZvcm1hdD8uY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzLmZvcm1hdD8ucHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICB0aGlzLmlucHV0U2l6ZSA9IE1hdGgubWF4KDEwLCB0aGlzLmZvcm1hdC5sZW5ndGgpICsgMjtcclxuICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbnB1dFdpZHRoQW5kQXJyb3dMZWZ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dFdpZHRoID0gdGhpcy5yYW5nZVBpY2tlcklucHV0cz8uZmlyc3Q/Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMDtcclxuXHJcbiAgICBjb25zdCBiYXNlU3R5bGUgPSB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB3aWR0aDogYCR7dGhpcy5pbnB1dFdpZHRofXB4YCB9O1xyXG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5hcnJvd0xlZnQgPVxyXG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0ID09PSAnbGVmdCcgPyAwIDogdGhpcy5pbnB1dFdpZHRoICsgdGhpcy5zZXBhcmF0b3JFbGVtZW50Py5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIHx8IDA7XHJcblxyXG4gICAgaWYgKHRoaXMuZGlyID09PSAncnRsJykge1xyXG4gICAgICB0aGlzLmFjdGl2ZUJhclN0eWxlID0geyAuLi5iYXNlU3R5bGUsIHJpZ2h0OiBgJHt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFycm93TGVmdH1weGAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlQmFyU3R5bGUgPSB7IC4uLmJhc2VTdHlsZSwgbGVmdDogYCR7dGhpcy5kYXRlUGlja2VyU2VydmljZS5hcnJvd0xlZnR9cHhgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYW5lbC5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGdldElucHV0KHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNSYW5nZVxyXG4gICAgICA/IHBhcnRUeXBlID09PSAnbGVmdCdcclxuICAgICAgICA/IHRoaXMucmFuZ2VQaWNrZXJJbnB1dHM/LmZpcnN0Lm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICA6IHRoaXMucmFuZ2VQaWNrZXJJbnB1dHM/Lmxhc3QubmF0aXZlRWxlbWVudFxyXG4gICAgICA6IHRoaXMucGlja2VySW5wdXQhLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGFjdGl2ZUlucHV0RWxlbWVudCA9IHRoaXMuZ2V0SW5wdXQodGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dCk7XHJcbiAgICBpZiAodGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBhY3RpdmVJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgYWN0aXZlSW5wdXRFbGVtZW50Py5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Gb2N1cyhldmVudDogRm9jdXNFdmVudCwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5mb2N1c0NoYW5nZS5lbWl0KHRydWUpO1xyXG4gICAgaWYgKHBhcnRUeXBlKSB7XHJcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5wdXRQYXJ0Q2hhbmdlJC5uZXh0KHBhcnRUeXBlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1cihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZm9jdXNDaGFuZ2UuZW1pdChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvLyBTaG93IG92ZXJsYXkgY29udGVudFxyXG4gIHNob3dPdmVybGF5KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnJlYWxPcGVuU3RhdGUgJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy51cGRhdGVJbnB1dFdpZHRoQW5kQXJyb3dMZWZ0KCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheU9wZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICAgIHRoaXMucGFuZWwuaW5pdCgpO1xyXG4gICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlT3ZlcmxheSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnJlYWxPcGVuU3RhdGUpIHtcclxuICAgICAgdGhpcy5vdmVybGF5T3BlbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93Q2xlYXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuaXNFbXB0eVZhbHVlKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUpICYmICEhdGhpcy5hbGxvd0NsZWFyO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja0lucHV0Qm94KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIGlmICghdGhpcy5pc09wZW5IYW5kbGVkQnlVc2VyKCkpIHtcclxuICAgICAgdGhpcy5zaG93T3ZlcmxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wYW5lbC5pc0FsbG93ZWQodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSEsIHRydWUpKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUpICYmIHdyb25nU29ydE9yZGVyKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUpKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZVtpbmRleF07XHJcbiAgICAgICAgdGhpcy5wYW5lbC5jaGFuZ2VWYWx1ZUZyb21TZWxlY3QodmFsdWUhLCB0cnVlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XHJcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZW1pdFZhbHVlJC5uZXh0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5pdGlhbFZhbHVlISk7XHJcbiAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uT3ZlcmxheURldGFjaCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcclxuICB9XHJcblxyXG4gIG9uT3ZlcmxheUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEUpIHtcclxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZSh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmluaXRpYWxWYWx1ZSEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTk9URTogQSBpc3N1ZSBoZXJlLCB0aGUgZmlyc3QgdGltZSBwb3NpdGlvbiBjaGFuZ2UsIHRoZSBhbmltYXRpb24gd2lsbCBub3QgYmUgdHJpZ2dlcmVkLlxyXG4gIC8vIEJlY2F1c2UgdGhlIG92ZXJsYXkncyBcInBvc2l0aW9uQ2hhbmdlXCIgZXZlbnQgaXMgZW1pdHRlZCBhZnRlciB0aGUgY29udGVudCdzIGZ1bGwgc2hvd24gdXAuXHJcbiAgLy8gQWxsIG90aGVyIGNvbXBvbmVudHMgbGlrZSBcIm56LWRyb3Bkb3duXCIgd2hpY2ggZGVwZW5kcyBvbiBvdmVybGF5IGFsc28gaGFzIHRoZSBzYW1lIGlzc3VlLlxyXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzE0MjlcclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uWCA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblg7XHJcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvblkgPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpOyAvLyBUYWtlIHNpZGUtZWZmZWN0cyB0byBwb3NpdGlvbiBzdHlsZXNcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tDbGVhcihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0VmFsdWUodGhpcy5pc1JhbmdlID8gW10gOiBudWxsKTtcclxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZW1pdFZhbHVlJC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbnB1dFZhbHVlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlO1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSBuZXdWYWx1ZSA/IChuZXdWYWx1ZSBhcyBDYW5keURhdGVbXSkubWFwKHYgPT4gdGhpcy5mb3JtYXRWYWx1ZSh2KSkgOiBbJycsICcnXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZm9ybWF0VmFsdWUobmV3VmFsdWUgYXMgQ2FuZHlEYXRlKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0VmFsdWUodmFsdWU6IENhbmR5RGF0ZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh2YWx1ZSAmJiAodmFsdWUgYXMgQ2FuZHlEYXRlKS5uYXRpdmVEYXRlLCB0aGlzLmZvcm1hdCk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0Q2hhbmdlKHZhbHVlOiBzdHJpbmcsIGlzRW50ZXI6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBpbiBJRTExIGZvY3VzL2JsdXIgd2lsbCB0cmlnZ2VyIG5nTW9kZWxDaGFuZ2UgaWYgaGFzIHBsYWNlaG9sZGVyXHJcbiAgICAgKiBzbyB3ZSBmb3JiaWRkZW4gSUUxMSB0byBvcGVuIHBhbmVsIHRocm91Z2ggaW5wdXQgY2hhbmdlXHJcbiAgICAgKi9cclxuICAgIGlmIChcclxuICAgICAgIXRoaXMucGxhdGZvcm0uVFJJREVOVCAmJlxyXG4gICAgICB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZ2V0SW5wdXQodGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dCkgJiZcclxuICAgICAgIXRoaXMucmVhbE9wZW5TdGF0ZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2hvd092ZXJsYXkoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmNoZWNrVmFsaWREYXRlKHZhbHVlKTtcclxuICAgIGlmIChkYXRlKSB7XHJcbiAgICAgIHRoaXMucGFuZWwuY2hhbmdlVmFsdWVGcm9tU2VsZWN0KGRhdGUsIGlzRW50ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXl1cEVudGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbklucHV0Q2hhbmdlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1ZhbGlkRGF0ZSh2YWx1ZTogc3RyaW5nKTogQ2FuZHlEYXRlIHwgbnVsbCB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IENhbmR5RGF0ZSh0aGlzLmRhdGVIZWxwZXIucGFyc2VEYXRlKHZhbHVlLCB0aGlzLmZvcm1hdCkpO1xyXG5cclxuICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkgfHwgdmFsdWUgIT09IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZS5uYXRpdmVEYXRlLCB0aGlzLmZvcm1hdCkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRQbGFjZWhvbGRlcihwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNSYW5nZSA/IHRoaXMucGxhY2Vob2xkZXJbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSEpXSA6ICh0aGlzLnBsYWNlaG9sZGVyIGFzIHN0cmluZyk7XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5VmFsdWUodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuICF2YWx1ZSB8fCAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUuZXZlcnkodmFsID0+ICF2YWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICF2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFdoZXRoZXIgb3BlbiBzdGF0ZSBpcyBwZXJtYW5lbnRseSBjb250cm9sbGVkIGJ5IHVzZXIgaGltc2VsZlxyXG4gIGlzT3BlbkhhbmRsZWRCeVVzZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5vcGVuICE9PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==