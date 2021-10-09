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
import * as moment_ from 'moment';
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
    i0.ɵɵproperty("nzNoAnimation", ctx_r6.noAnimation)("@slideMotion", ctx_r6.state);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate2("", ctx_r6.prefixCls, "-dropdown ", ctx_r6.dropdownClassName, "");
    i0.ɵɵclassProp("ant-picker-dropdown-rtl", ctx_r6.dir === "rtl")("ant-picker-dropdown-placement-bottomLeft", ctx_r6.currentPositionY === "bottom" && ctx_r6.currentPositionX === "start")("ant-picker-dropdown-placement-topLeft", ctx_r6.currentPositionY === "top" && ctx_r6.currentPositionX === "start")("ant-picker-dropdown-placement-bottomRight", ctx_r6.currentPositionY === "bottom" && ctx_r6.currentPositionX === "end")("ant-picker-dropdown-placement-topRight", ctx_r6.currentPositionY === "top" && ctx_r6.currentPositionX === "end")("ant-picker-dropdown-range", ctx_r6.isRange);
    i0.ɵɵproperty("ngStyle", ctx_r6.popupStyle);
} }
const _c6 = function () { return ["cmacs-datetime-picker-dropdown"]; };
const _c7 = ["*"];
const moment = moment_;
export class CmacsPickerComponent {
    constructor(elementRef, dateHelper, i18n, cdr, platform, ngZone, nzResizeObserver, datePickerService, doc) {
        this.elementRef = elementRef;
        this.dateHelper = dateHelper;
        this.i18n = i18n;
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
        this.state = 'enter';
        this.scroll = (e) => {
            const target = e.target;
            if (!target.className || target.className.indexOf('ant-picker-time-panel-column') < 0) {
                this.ngZone.run(() => {
                    if (this.realOpenState) {
                        this.state = 'void';
                        this.cdr.detectChanges();
                        this.hideOverlay();
                        this.state = 'enter';
                    }
                });
            }
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
        const momentFormat = this.format.replace(/d/g, 'D');
        const date = new CandyDate(moment(value, momentFormat).toDate());
        if (!date.isValid() || (value.toLowerCase() !== moment(date.nativeDate).format(momentFormat).toLowerCase())) {
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
CmacsPickerComponent.ɵfac = function CmacsPickerComponent_Factory(t) { return new (t || CmacsPickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Platform), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i3.NzResizeObserver), i0.ɵɵdirectiveInject(i4.DatePickerService), i0.ɵɵdirectiveInject(DOCUMENT)); };
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
      <div class="ant-picker-wrapper" [nzNoAnimation]="noAnimation" [@slideMotion]="state" style="position: relative;">
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
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DateHelperService }, { type: i1.NzI18nService }, { type: i0.ChangeDetectorRef }, { type: i2.Platform }, { type: i0.NgZone }, { type: i3.NzResizeObserver }, { type: i4.DatePickerService }, { type: undefined, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUtqQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBRVosWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBS0wsTUFBTSxFQUlOLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUkzRCxPQUFPLEVBQUUsU0FBUyxFQUFtQixjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUdyRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBeUI1Qix3QkFBOEQ7Ozs7SUFoQmhFLDJCQUFvRDtJQUNsRCxtQ0FjRTtJQVBBLHFOQUF3QixzTEFBQSxtTEFBQSw0TUFBQSx1TUFBQTtJQVAxQixpQkFjRTtJQUNG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QUF1QixDQUFDLE1BQU07YUFDaEQ7O3NCQTZGSSxNQUFNO3VCQUFDLFFBQVE7d0JBM0ZULFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxHQUFHO2tCQUFYLEtBQUs7WUFDRyxFQUFFO2tCQUFWLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBRWEsV0FBVztrQkFBN0IsTUFBTTtZQUNZLFdBQVc7a0JBQTdCLE1BQU07WUFDWSxVQUFVO2tCQUE1QixNQUFNO1lBRTRDLG1CQUFtQjtrQkFBckUsU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDQyxnQkFBZ0I7a0JBQWpFLFNBQVM7bUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ0gsV0FBVztrQkFBdkQsU0FBUzttQkFBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ1QsaUJBQWlCO2tCQUFsRCxZQUFZO21CQUFDLGtCQUFrQjtZQUNPLEtBQUs7a0JBQTNDLFlBQVk7bUJBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBDZGtDb25uZWN0ZWRPdmVybGF5LFxyXG4gIENka092ZXJsYXlPcmlnaW4sXHJcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXHJcbiAgSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MsXHJcbiAgVmVydGljYWxDb25uZWN0aW9uUG9zXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDaGlsZHJlbixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBOelJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3Jlc2l6ZS1vYnNlcnZlcnMnO1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQgeyBDYW5keURhdGUsIENvbXBhdGlibGVWYWx1ZSwgd3JvbmdTb3J0T3JkZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XHJcbmltcG9ydCB7IE5nU3R5bGVJbnRlcmZhY2UsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcG9wdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmFuZ2VQYXJ0VHlwZSB9IGZyb20gJy4vc3RhbmRhcmQtdHlwZXMnO1xyXG5pbXBvcnQgeyBQUkVGSVhfQ0xBU1MgfSBmcm9tICcuL3V0aWwnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLXBpY2tlcl0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NQaWNrZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8IS0tIENvbnRlbnQgb2Ygc2luZ2xlIHBpY2tlciAtLT5cclxuICAgIDxkaXYgKm5nSWY9XCIhaXNSYW5nZVwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0XCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgICNwaWNrZXJJbnB1dFxyXG4gICAgICAgIFthdHRyLmlkXT1cImlkXCJcclxuICAgICAgICBbY2xhc3MuY21hY3Mtb3Blbi1kYXRlLXBpY2tlci1pbnB1dF09XCJjbWFjc09wZW5cIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW3JlYWRPbmx5XT1cImlucHV0UmVhZE9ubHlcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBnZXRQbGFjZWhvbGRlcigpIH19XCJcclxuICAgICAgICBbc2l6ZV09XCJpbnB1dFNpemVcIlxyXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxyXG4gICAgICAgIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcclxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChrZXl1cC5lbnRlcik9XCJvbktleXVwRW50ZXIoJGV2ZW50KVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxSaWdodFJlc3RcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gQ29udGVudCBvZiByYW5nZSBwaWNrZXIgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNSYW5nZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJhbmdlSW5wdXQ7IGNvbnRleHQ6IHsgcGFydFR5cGU6ICdsZWZ0JyB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ICNzZXBhcmF0b3JFbGVtZW50IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXJhbmdlLXNlcGFyYXRvclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXNlcGFyYXRvclwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlcGFyYXRvcjsgZWxzZSBkZWZhdWx0U2VwYXJhdG9yXCI+e3sgc2VwYXJhdG9yIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFNlcGFyYXRvcj5cclxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwic3dhcC1yaWdodFwiIG56VGhlbWU9XCJvdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJhbmdlSW5wdXQ7IGNvbnRleHQ6IHsgcGFydFR5cGU6ICdyaWdodCcgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJpZ2h0UmVzdFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8IS0tIElucHV0IGZvciBSYW5nZSBPTkxZIC0tPlxyXG4gICAgPG5nLXRlbXBsYXRlICN0cGxSYW5nZUlucHV0IGxldC1wYXJ0VHlwZT1cInBhcnRUeXBlXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgICNyYW5nZVBpY2tlcklucHV0XHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLW9wZW4tZGF0ZS1waWNrZXItaW5wdXRdPVwiY21hY3NPcGVuXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtyZWFkT25seV09XCJpbnB1dFJlYWRPbmx5XCJcclxuICAgICAgICBbc2l6ZV09XCJpbnB1dFNpemVcIlxyXG4gICAgICAgIChjbGljayk9XCJvbkNsaWNrSW5wdXRCb3goJGV2ZW50KVwiXHJcbiAgICAgICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxyXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudCwgcGFydFR5cGUpXCJcclxuICAgICAgICAoa2V5dXAuZW50ZXIpPVwib25LZXl1cEVudGVyKCRldmVudClcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVtkYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSldXCJcclxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwie3sgZ2V0UGxhY2Vob2xkZXIocGFydFR5cGUpIH19XCJcclxuICAgICAgLz5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPCEtLSBSaWdodCBvcGVyYXRvciBpY29ucyAtLT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjdHBsUmlnaHRSZXN0PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWFjdGl2ZS1iYXJcIiBbbmdTdHlsZV09XCJhY3RpdmVCYXJTdHlsZVwiPjwvZGl2PlxyXG4gICAgICA8c3BhbiAqbmdJZj1cInNob3dDbGVhcigpXCIgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tY2xlYXJcIlxyXG4gICAgICAgIChjbGljayk9XCJvbkNsaWNrQ2xlYXIoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxpIG56LWljb24gW2NsYXNzLmNtYWNzLW9wZW4tZGF0ZS1waWNrZXItaWNvbl09XCJjbWFjc09wZW5cIiBuelR5cGU9XCJjbG9zZS1jaXJjbGVcIiBuelRoZW1lPVwiZmlsbFwiPjwvaT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1zdWZmaXhcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwic3VmZml4SWNvbjsgbGV0IHN1ZmZpeEljb25cIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwie3tzdWZmaXhJY29ufX1cIj48L2k+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPCEtLSBPdmVybGF5IC0tPlxyXG4gICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UGFuZWxDbGFzc109XCJbJ2NtYWNzLWRhdGV0aW1lLXBpY2tlci1kcm9wZG93biddXCJcclxuICAgICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cInJlYWxPcGVuU3RhdGVcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJvdmVybGF5UG9zaXRpb25zXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlUcmFuc2Zvcm1PcmlnaW5Pbl09XCInLmFudC1waWNrZXItd3JhcHBlcidcIlxyXG4gICAgICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgKGRldGFjaCk9XCJvbk92ZXJsYXlEZXRhY2goKVwiXHJcbiAgICAgIChvdmVybGF5S2V5ZG93bik9XCJvbk92ZXJsYXlLZXlkb3duKCRldmVudClcIlxyXG4gICAgICAob3ZlcmxheU91dHNpZGVDbGljayk9XCJvbkNsaWNrT3V0c2lkZSgkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItd3JhcHBlclwiIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uXCIgW0BzbGlkZU1vdGlvbl09XCJzdGF0ZVwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRyb3Bkb3duIHt7IGRyb3Bkb3duQ2xhc3NOYW1lIH19XCJcclxuICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWRyb3Bkb3duLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcclxuICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0XT1cImN1cnJlbnRQb3NpdGlvblkgPT09ICdib3R0b20nICYmIGN1cnJlbnRQb3NpdGlvblggPT09ICdzdGFydCdcIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnRdPVwiY3VycmVudFBvc2l0aW9uWSA9PT0gJ3RvcCcgJiYgY3VycmVudFBvc2l0aW9uWCA9PT0gJ3N0YXJ0J1wiXHJcbiAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tUmlnaHRdPVwiY3VycmVudFBvc2l0aW9uWSA9PT0gJ2JvdHRvbScgJiYgY3VycmVudFBvc2l0aW9uWCA9PT0gJ2VuZCdcIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcGxhY2VtZW50LXRvcFJpZ2h0XT1cImN1cnJlbnRQb3NpdGlvblkgPT09ICd0b3AnICYmIGN1cnJlbnRQb3NpdGlvblggPT09ICdlbmQnXCJcclxuICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWRyb3Bkb3duLXJhbmdlXT1cImlzUmFuZ2VcIlxyXG4gICAgICAgICAgW25nU3R5bGVdPVwicG9wdXBTdHlsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPCEtLSBDb21wYXRpYmxlIGZvciBvdmVybGF5IHRoYXQgbm90IHN1cHBvcnQgb2Zmc2V0IGR5bmFtaWNhbGx5IGFuZCBpbW1lZGlhdGVseSAtLT5cclxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBub0FuaW1hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBvcGVuOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdGltZWxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbnB1dFJlYWRPbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIhOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBhbGxvd0NsZWFyPzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhdXRvRm9jdXM/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZvcm1hdCE6IHN0cmluZztcclxuICBASW5wdXQoKSBzZXBhcmF0b3I/OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcG9wdXBTdHlsZTogTmdTdHlsZUludGVyZmFjZSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN1ZmZpeEljb24/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+O1xyXG4gIEBJbnB1dCgpIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGNtYWNzT3BlbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9jdXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGUgfCBDYW5keURhdGVbXSB8IG51bGw+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7IC8vIEVtaXR0ZWQgd2hlbiBvdmVybGF5J3Mgb3BlbiBzdGF0ZSBjaGFuZ2VcclxuXHJcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5LCB7IHN0YXRpYzogZmFsc2UgfSkgY2RrQ29ubmVjdGVkT3ZlcmxheT86IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgQFZpZXdDaGlsZCgnc2VwYXJhdG9yRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBzZXBhcmF0b3JFbGVtZW50PzogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdwaWNrZXJJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwaWNrZXJJbnB1dD86IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZHJlbigncmFuZ2VQaWNrZXJJbnB1dCcpIHJhbmdlUGlja2VySW5wdXRzPzogUXVlcnlMaXN0PEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4+O1xyXG4gIEBDb250ZW50Q2hpbGQoRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQpIHBhbmVsITogRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQ7XHJcblxyXG4gIGNhbGNXaWR0aDogbnVtYmVyID0gMDtcclxuICBvcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgZG9jdW1lbnQ6IERvY3VtZW50O1xyXG4gIGlucHV0U2l6ZTogbnVtYmVyID0gMTI7XHJcbiAgaW5wdXRXaWR0aD86IG51bWJlcjtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJlZml4Q2xzID0gUFJFRklYX0NMQVNTO1xyXG4gIGlucHV0VmFsdWUhOiBOelNhZmVBbnk7XHJcbiAgYWN0aXZlQmFyU3R5bGU6IG9iamVjdCA9IHt9O1xyXG4gIG92ZXJsYXlPcGVuOiBib29sZWFuID0gZmFsc2U7IC8vIEF2YWlsYWJsZSB3aGVuIFwib3BlblwiPXVuZGVmaW5lZFxyXG4gIG92ZXJsYXlQb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFtcclxuICAgIHtcclxuICAgICAgb2Zmc2V0WDogLTEyLFxyXG4gICAgICBvZmZzZXRZOiA4LFxyXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgIG92ZXJsYXlZOiAndG9wJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb2Zmc2V0WDogLTEyLFxyXG4gICAgICBvZmZzZXRZOiAtOCxcclxuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9mZnNldFg6IDEyLFxyXG4gICAgICBvZmZzZXRZOiA4LFxyXG4gICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgb3ZlcmxheVk6ICd0b3AnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvZmZzZXRYOiAxMixcclxuICAgICAgb2Zmc2V0WTogLTgsXHJcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgIH1cclxuICBdIGFzIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXTtcclxuICBjdXJyZW50UG9zaXRpb25YOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyA9ICdzdGFydCc7XHJcbiAgY3VycmVudFBvc2l0aW9uWTogVmVydGljYWxDb25uZWN0aW9uUG9zID0gJ2JvdHRvbSc7XHJcbiAgc3RhdGU6IHN0cmluZyA9ICdlbnRlcic7XHJcblxyXG4gIGdldCByZWFsT3BlblN0YXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gVGhlIHZhbHVlIHRoYXQgcmVhbGx5IGRlY2lkZSB0aGUgb3BlbiBzdGF0ZSBvZiBvdmVybGF5XHJcbiAgICB0aGlzLnNldFBhbmVsV2lkdGgoKTtcclxuICAgIHJldHVybiB0aGlzLmlzT3BlbkhhbmRsZWRCeVVzZXIoKSA/ICEhdGhpcy5vcGVuIDogdGhpcy5vdmVybGF5T3BlbjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBuelJlc2l6ZU9ic2VydmVyOiBOelJlc2l6ZU9ic2VydmVyLFxyXG4gICAgcHVibGljIGRhdGVQaWNrZXJTZXJ2aWNlOiBEYXRlUGlja2VyU2VydmljZSxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvYzogTnpTYWZlQW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jO1xyXG4gICAgdGhpcy5vcmlnaW4gPSBuZXcgQ2RrT3ZlcmxheU9yaWdpbih0aGlzLmVsZW1lbnRSZWYpO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGwsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwgPSAoZTogRXZlbnQpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKCF0YXJnZXQuY2xhc3NOYW1lIHx8IHRhcmdldC5jbGFzc05hbWUuaW5kZXhPZignYW50LXBpY2tlci10aW1lLXBhbmVsLWNvbHVtbicpIDwgMCkge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWxPcGVuU3RhdGUpIHtcclxuICAgICAgICAgIHRoaXMuc3RhdGUgPSAndm9pZCc7XHJcbiAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlID0gJ2VudGVyJztcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgfSk7XHJcbiAgICB9ICAgXHJcbiAgfVxyXG5cclxuICBzZXRQYW5lbFdpZHRoKCkge1xyXG4gICAgdGhpcy5jYWxjV2lkdGggPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArIDI0O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmlzUmFuZ2UgPyBbJycsICcnXSA6ICcnO1xyXG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZUNoYW5nZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzUmFuZ2UgJiYgdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5uelJlc2l6ZU9ic2VydmVyXHJcbiAgICAgICAgLm9ic2VydmUodGhpcy5lbGVtZW50UmVmKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aEFuZEFycm93TGVmdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5wdXRQYXJ0Q2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHBhcnRUeXBlID0+IHtcclxuICAgICAgaWYgKHBhcnRUeXBlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dCA9IHBhcnRUeXBlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgdGhpcy51cGRhdGVJbnB1dFdpZHRoQW5kQXJyb3dMZWZ0KCk7XHJcbiAgICAgIHRoaXMucGFuZWw/LnVwZGF0ZUFjdGl2ZURhdGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5mb3JtYXQ/LmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcy5mb3JtYXQ/LnByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgdGhpcy5pbnB1dFNpemUgPSBNYXRoLm1heCgxMCwgdGhpcy5mb3JtYXQubGVuZ3RoKSArIDI7XHJcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXRXaWR0aEFuZEFycm93TGVmdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRXaWR0aCA9IHRoaXMucmFuZ2VQaWNrZXJJbnB1dHM/LmZpcnN0Py5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIHx8IDA7XHJcblxyXG4gICAgY29uc3QgYmFzZVN0eWxlID0geyBwb3NpdGlvbjogJ2Fic29sdXRlJywgd2lkdGg6IGAke3RoaXMuaW5wdXRXaWR0aH1weGAgfTtcclxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYXJyb3dMZWZ0ID1cclxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dCA9PT0gJ2xlZnQnID8gMCA6IHRoaXMuaW5wdXRXaWR0aCArIHRoaXMuc2VwYXJhdG9yRWxlbWVudD8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwO1xyXG5cclxuICAgIGlmICh0aGlzLmRpciA9PT0gJ3J0bCcpIHtcclxuICAgICAgdGhpcy5hY3RpdmVCYXJTdHlsZSA9IHsgLi4uYmFzZVN0eWxlLCByaWdodDogYCR7dGhpcy5kYXRlUGlja2VyU2VydmljZS5hcnJvd0xlZnR9cHhgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFjdGl2ZUJhclN0eWxlID0geyAuLi5iYXNlU3R5bGUsIGxlZnQ6IGAke3RoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYXJyb3dMZWZ0fXB4YCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFuZWwuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBnZXRJbnB1dChwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLmlzUmFuZ2VcclxuICAgICAgPyBwYXJ0VHlwZSA9PT0gJ2xlZnQnXHJcbiAgICAgICAgPyB0aGlzLnJhbmdlUGlja2VySW5wdXRzPy5maXJzdC5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgOiB0aGlzLnJhbmdlUGlja2VySW5wdXRzPy5sYXN0Lm5hdGl2ZUVsZW1lbnRcclxuICAgICAgOiB0aGlzLnBpY2tlcklucHV0IS5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBhY3RpdmVJbnB1dEVsZW1lbnQgPSB0aGlzLmdldElucHV0KHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXQpO1xyXG4gICAgaWYgKHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gYWN0aXZlSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGFjdGl2ZUlucHV0RWxlbWVudD8uZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZm9jdXNDaGFuZ2UuZW1pdCh0cnVlKTtcclxuICAgIGlmIChwYXJ0VHlwZSkge1xyXG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmlucHV0UGFydENoYW5nZSQubmV4dChwYXJ0VHlwZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvY3VzQ2hhbmdlLmVtaXQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2hvdyBvdmVybGF5IGNvbnRlbnRcclxuICBzaG93T3ZlcmxheSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5yZWFsT3BlblN0YXRlICYmICF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aEFuZEFycm93TGVmdCgpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlPcGVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgICB0aGlzLnBhbmVsLmluaXQoKTtcclxuICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZU92ZXJsYXkoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5yZWFsT3BlblN0YXRlKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheU9wZW4gPSBmYWxzZTtcclxuICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd0NsZWFyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmRpc2FibGVkICYmICF0aGlzLmlzRW1wdHlWYWx1ZSh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlKSAmJiAhIXRoaXMuYWxsb3dDbGVhcjtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tJbnB1dEJveChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICBpZiAoIXRoaXMuaXNPcGVuSGFuZGxlZEJ5VXNlcigpKSB7XHJcbiAgICAgIHRoaXMuc2hvd092ZXJsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tPdXRzaWRlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucGFuZWwuaXNBbGxvd2VkKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUhLCB0cnVlKSkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlKSAmJiB3cm9uZ1NvcnRPcmRlcih0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlKSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleCh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0KTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWVbaW5kZXhdO1xyXG4gICAgICAgIHRoaXMucGFuZWwuY2hhbmdlVmFsdWVGcm9tU2VsZWN0KHZhbHVlISwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSgpO1xyXG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmVtaXRWYWx1ZSQubmV4dCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZSh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmluaXRpYWxWYWx1ZSEpO1xyXG4gICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk92ZXJsYXlEZXRhY2goKTogdm9pZCB7XHJcbiAgICB0aGlzLmhpZGVPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICBvbk92ZXJsYXlLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFKSB7XHJcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0VmFsdWUodGhpcy5kYXRlUGlja2VyU2VydmljZS5pbml0aWFsVmFsdWUhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE5PVEU6IEEgaXNzdWUgaGVyZSwgdGhlIGZpcnN0IHRpbWUgcG9zaXRpb24gY2hhbmdlLCB0aGUgYW5pbWF0aW9uIHdpbGwgbm90IGJlIHRyaWdnZXJlZC5cclxuICAvLyBCZWNhdXNlIHRoZSBvdmVybGF5J3MgXCJwb3NpdGlvbkNoYW5nZVwiIGV2ZW50IGlzIGVtaXR0ZWQgYWZ0ZXIgdGhlIGNvbnRlbnQncyBmdWxsIHNob3duIHVwLlxyXG4gIC8vIEFsbCBvdGhlciBjb21wb25lbnRzIGxpa2UgXCJuei1kcm9wZG93blwiIHdoaWNoIGRlcGVuZHMgb24gb3ZlcmxheSBhbHNvIGhhcyB0aGUgc2FtZSBpc3N1ZS5cclxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8xNDI5XHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvblggPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5YO1xyXG4gICAgdGhpcy5jdXJyZW50UG9zaXRpb25ZID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTsgLy8gVGFrZSBzaWRlLWVmZmVjdHMgdG8gcG9zaXRpb24gc3R5bGVzXHJcbiAgfVxyXG5cclxuICBvbkNsaWNrQ2xlYXIoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKHRoaXMuaXNSYW5nZSA/IFtdIDogbnVsbCk7XHJcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmVtaXRWYWx1ZSQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXRWYWx1ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZTtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlID0gbmV3VmFsdWUgPyAobmV3VmFsdWUgYXMgQ2FuZHlEYXRlW10pLm1hcCh2ID0+IHRoaXMuZm9ybWF0VmFsdWUodikpIDogWycnLCAnJ107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmZvcm1hdFZhbHVlKG5ld1ZhbHVlIGFzIENhbmR5RGF0ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdFZhbHVlKHZhbHVlOiBDYW5keURhdGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQodmFsdWUgJiYgKHZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSwgdGhpcy5mb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dENoYW5nZSh2YWx1ZTogc3RyaW5nLCBpc0VudGVyOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIC8qKlxyXG4gICAgICogaW4gSUUxMSBmb2N1cy9ibHVyIHdpbGwgdHJpZ2dlciBuZ01vZGVsQ2hhbmdlIGlmIGhhcyBwbGFjZWhvbGRlclxyXG4gICAgICogc28gd2UgZm9yYmlkZGVuIElFMTEgdG8gb3BlbiBwYW5lbCB0aHJvdWdoIGlucHV0IGNoYW5nZVxyXG4gICAgICovXHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLnBsYXRmb3JtLlRSSURFTlQgJiZcclxuICAgICAgdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmdldElucHV0KHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXQpICYmXHJcbiAgICAgICF0aGlzLnJlYWxPcGVuU3RhdGVcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNob3dPdmVybGF5KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRlID0gdGhpcy5jaGVja1ZhbGlkRGF0ZSh2YWx1ZSk7XHJcbiAgICBpZiAoZGF0ZSkge1xyXG4gICAgICB0aGlzLnBhbmVsLmNoYW5nZVZhbHVlRnJvbVNlbGVjdChkYXRlLCBpc0VudGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5dXBFbnRlcihldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMub25JbnB1dENoYW5nZSgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tWYWxpZERhdGUodmFsdWU6IHN0cmluZyk6IENhbmR5RGF0ZSB8IG51bGwge1xyXG5cclxuICAgIGNvbnN0IG1vbWVudEZvcm1hdCA9IHRoaXMuZm9ybWF0LnJlcGxhY2UoL2QvZywgJ0QnKTsgICBcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgQ2FuZHlEYXRlKG1vbWVudCh2YWx1ZSwgbW9tZW50Rm9ybWF0KS50b0RhdGUoKSk7XHJcbiAgICBpZiAoIWRhdGUuaXNWYWxpZCgpIHx8ICh2YWx1ZSEudG9Mb3dlckNhc2UoKSAhPT0gbW9tZW50KGRhdGUubmF0aXZlRGF0ZSkuZm9ybWF0KG1vbWVudEZvcm1hdCkhLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxhY2Vob2xkZXIocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlzUmFuZ2UgPyB0aGlzLnBsYWNlaG9sZGVyW3RoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZ2V0QWN0aXZlSW5kZXgocGFydFR5cGUhKV0gOiAodGhpcy5wbGFjZWhvbGRlciBhcyBzdHJpbmcpO1xyXG4gIH1cclxuXHJcbiAgaXNFbXB0eVZhbHVlKHZhbHVlOiBDb21wYXRpYmxlVmFsdWUpOiBib29sZWFuIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHJldHVybiAhdmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmV2ZXJ5KHZhbCA9PiAhdmFsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAhdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBXaGV0aGVyIG9wZW4gc3RhdGUgaXMgcGVybWFuZW50bHkgY29udHJvbGxlZCBieSB1c2VyIGhpbXNlbGZcclxuICBpc09wZW5IYW5kbGVkQnlVc2VyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMub3BlbiAhPT0gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG4iXX0=