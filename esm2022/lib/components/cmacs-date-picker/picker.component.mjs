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
import * as i3 from "ng-zorro-antd/cdk/resize-observer";
import * as i4 from "./date-picker.service";
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/core/overlay";
import * as i7 from "@angular/forms";
import * as i8 from "ng-zorro-antd/core/transition-patch";
import * as i9 from "ng-zorro-antd/icon";
import * as i10 from "@angular/cdk/overlay";
import * as i11 from "ng-zorro-antd/core/no-animation";
import * as i12 from "ng-zorro-antd/core/outlet";
const _c0 = ["separatorElement"];
const _c1 = ["pickerInput"];
const _c2 = ["rangePickerInput"];
const _c3 = ["cmacs-picker", ""];
function CmacsPickerComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsPickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "input", 5, 6);
    i0.ɵɵlistener("ngModelChange", function CmacsPickerComponent_div_0_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.inputValue = $event); })("focus", function CmacsPickerComponent_div_0_Template_input_focus_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.onFocus($event)); })("blur", function CmacsPickerComponent_div_0_Template_input_blur_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.onBlur($event)); })("ngModelChange", function CmacsPickerComponent_div_0_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.onInputChange($event)); })("keyup.enter", function CmacsPickerComponent_div_0_Template_input_keyup_enter_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.onKeyupEnter($event)); });
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
    i0.ɵɵelementStart(3, "div", null, 9)(5, "span");
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
    i0.ɵɵlistener("click", function CmacsPickerComponent_ng_template_2_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24.onClickInputBox($event)); })("blur", function CmacsPickerComponent_ng_template_2_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r26.onBlur($event)); })("focus", function CmacsPickerComponent_ng_template_2_Template_input_focus_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r25); const partType_r22 = restoredCtx.partType; const ctx_r27 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r27.onFocus($event, partType_r22)); })("keyup.enter", function CmacsPickerComponent_ng_template_2_Template_input_keyup_enter_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.onKeyupEnter($event)); })("ngModelChange", function CmacsPickerComponent_ng_template_2_Template_input_ngModelChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r25); const partType_r22 = restoredCtx.partType; const ctx_r29 = i0.ɵɵnextContext(); return i0.ɵɵresetView((ctx_r29.inputValue[ctx_r29.datePickerService.getActiveIndex(partType_r22)] = $event)); })("ngModelChange", function CmacsPickerComponent_ng_template_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r30 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r30.onInputChange($event)); });
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
    i0.ɵɵlistener("click", function CmacsPickerComponent_ng_template_4_span_1_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r33.onClickClear($event)); });
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
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 15);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd()();
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
    get realOpenState() {
        // The value that really decide the open state of overlay
        this.setPanelWidth();
        return this.isOpenHandledByUser() ? !!this.open : this.overlayOpen;
    }
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
            if (partType) {
                this.datePickerService.activeInput = partType;
            }
            this.focus();
            this.updateInputWidthAndArrowLeft();
            this.panel?.updateActiveDate();
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        window.removeEventListener('scroll', this.scroll, true);
    }
    ngOnChanges(changes) {
        if (changes.format?.currentValue !== changes.format?.previousValue) {
            this.inputSize = Math.max(10, this.format.length) + 2;
            this.updateInputValue();
        }
    }
    updateInputWidthAndArrowLeft() {
        this.inputWidth = this.rangePickerInputs?.first?.nativeElement.offsetWidth || 0;
        const baseStyle = { position: 'absolute', width: `${this.inputWidth}px` };
        this.datePickerService.arrowLeft =
            this.datePickerService.activeInput === 'left' ? 0 : this.inputWidth + this.separatorElement?.nativeElement.offsetWidth || 0;
        if (this.dir === 'rtl') {
            this.activeBarStyle = { ...baseStyle, right: `${this.datePickerService.arrowLeft}px` };
        }
        else {
            this.activeBarStyle = { ...baseStyle, left: `${this.datePickerService.arrowLeft}px` };
        }
        this.panel.cdr.markForCheck();
        this.cdr.markForCheck();
    }
    getInput(partType) {
        return this.isRange
            ? partType === 'left'
                ? this.rangePickerInputs?.first.nativeElement
                : this.rangePickerInputs?.last.nativeElement
            : this.pickerInput.nativeElement;
    }
    focus() {
        const activeInputElement = this.getInput(this.datePickerService.activeInput);
        if (this.document.activeElement !== activeInputElement) {
            activeInputElement?.focus();
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
    static { this.ɵfac = function CmacsPickerComponent_Factory(t) { return new (t || CmacsPickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Platform), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i3.NzResizeObserver), i0.ɵɵdirectiveInject(i4.DatePickerService), i0.ɵɵdirectiveInject(DOCUMENT)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsPickerComponent, selectors: [["", "cmacs-picker", ""]], contentQueries: function CmacsPickerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, DateRangePopupComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.panel = _t.first);
        } }, viewQuery: function CmacsPickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(CdkConnectedOverlay, 5);
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
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
        } }, dependencies: [i5.NgIf, i5.NgTemplateOutlet, i5.NgStyle, i6.NzConnectedOverlayDirective, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel, i8.ɵNzTransitionPatchDirective, i9.NzIconDirective, i10.CdkConnectedOverlay, i11.NzNoAnimationDirective, i12.NzStringTemplateOutletDirective], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 }); }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUtqQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBRVosWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBS0wsTUFBTSxFQUlOLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUczRCxPQUFPLEVBQUUsU0FBUyxFQUFtQixjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUdyRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEI1Qix3QkFBOEQ7Ozs7SUFoQmhFLDJCQUFvRCxrQkFBQTtJQVFoRCxxT0FBd0IsMkpBR2YsZUFBQSx1QkFBZSxDQUFBLElBSEEseUpBSWhCLGVBQUEsc0JBQWMs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QkFBM0MsWUFBWTttQkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIENka0Nvbm5lY3RlZE92ZXJsYXksXHJcbiAgQ2RrT3ZlcmxheU9yaWdpbixcclxuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcclxuICBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyxcclxuICBWZXJ0aWNhbENvbm5lY3Rpb25Qb3NcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NoaWxkcmVuLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNsaWRlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcblxyXG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSwgQ29tcGF0aWJsZVZhbHVlLCB3cm9uZ1NvcnRPcmRlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcclxuaW1wb3J0IHsgTmdTdHlsZUludGVyZmFjZSwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2RhdGUtcGlja2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRlUmFuZ2VQb3B1cENvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYW5nZVBhcnRUeXBlIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XHJcbmltcG9ydCB7IFBSRUZJWF9DTEFTUyB9IGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgTnpSZXNpemVPYnNlcnZlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2RrL3Jlc2l6ZS1vYnNlcnZlcic7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLXBpY2tlcl0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NQaWNrZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8IS0tIENvbnRlbnQgb2Ygc2luZ2xlIHBpY2tlciAtLT5cclxuICAgIDxkaXYgKm5nSWY9XCIhaXNSYW5nZVwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0XCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgICNwaWNrZXJJbnB1dFxyXG4gICAgICAgIFthdHRyLmlkXT1cImlkXCJcclxuICAgICAgICBbY2xhc3MuY21hY3Mtb3Blbi1kYXRlLXBpY2tlci1pbnB1dF09XCJjbWFjc09wZW5cIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW3JlYWRPbmx5XT1cImlucHV0UmVhZE9ubHlcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBnZXRQbGFjZWhvbGRlcigpIH19XCJcclxuICAgICAgICBbc2l6ZV09XCJpbnB1dFNpemVcIlxyXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxyXG4gICAgICAgIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcclxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChrZXl1cC5lbnRlcik9XCJvbktleXVwRW50ZXIoJGV2ZW50KVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxSaWdodFJlc3RcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gQ29udGVudCBvZiByYW5nZSBwaWNrZXIgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNSYW5nZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJhbmdlSW5wdXQ7IGNvbnRleHQ6IHsgcGFydFR5cGU6ICdsZWZ0JyB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ICNzZXBhcmF0b3JFbGVtZW50IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXJhbmdlLXNlcGFyYXRvclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXNlcGFyYXRvclwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlcGFyYXRvcjsgZWxzZSBkZWZhdWx0U2VwYXJhdG9yXCI+e3sgc2VwYXJhdG9yIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFNlcGFyYXRvcj5cclxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwic3dhcC1yaWdodFwiIG56VGhlbWU9XCJvdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJhbmdlSW5wdXQ7IGNvbnRleHQ6IHsgcGFydFR5cGU6ICdyaWdodCcgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJpZ2h0UmVzdFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8IS0tIElucHV0IGZvciBSYW5nZSBPTkxZIC0tPlxyXG4gICAgPG5nLXRlbXBsYXRlICN0cGxSYW5nZUlucHV0IGxldC1wYXJ0VHlwZT1cInBhcnRUeXBlXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgICNyYW5nZVBpY2tlcklucHV0XHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLW9wZW4tZGF0ZS1waWNrZXItaW5wdXRdPVwiY21hY3NPcGVuXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtyZWFkT25seV09XCJpbnB1dFJlYWRPbmx5XCJcclxuICAgICAgICBbc2l6ZV09XCJpbnB1dFNpemVcIlxyXG4gICAgICAgIChjbGljayk9XCJvbkNsaWNrSW5wdXRCb3goJGV2ZW50KVwiXHJcbiAgICAgICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxyXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudCwgcGFydFR5cGUpXCJcclxuICAgICAgICAoa2V5dXAuZW50ZXIpPVwib25LZXl1cEVudGVyKCRldmVudClcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVtkYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSldXCJcclxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwie3sgZ2V0UGxhY2Vob2xkZXIocGFydFR5cGUpIH19XCJcclxuICAgICAgLz5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPCEtLSBSaWdodCBvcGVyYXRvciBpY29ucyAtLT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjdHBsUmlnaHRSZXN0PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWFjdGl2ZS1iYXJcIiBbbmdTdHlsZV09XCJhY3RpdmVCYXJTdHlsZVwiPjwvZGl2PlxyXG4gICAgICA8c3BhbiAqbmdJZj1cInNob3dDbGVhcigpXCIgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tY2xlYXJcIlxyXG4gICAgICAgIChjbGljayk9XCJvbkNsaWNrQ2xlYXIoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxpIG56LWljb24gW2NsYXNzLmNtYWNzLW9wZW4tZGF0ZS1waWNrZXItaWNvbl09XCJjbWFjc09wZW5cIiBuelR5cGU9XCJjbG9zZS1jaXJjbGVcIiBuelRoZW1lPVwiZmlsbFwiPjwvaT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1zdWZmaXhcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwic3VmZml4SWNvbjsgbGV0IHN1ZmZpeEljb25cIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwie3tzdWZmaXhJY29ufX1cIj48L2k+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPCEtLSBPdmVybGF5IC0tPlxyXG4gICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UGFuZWxDbGFzc109XCJbJ2NtYWNzLWRhdGV0aW1lLXBpY2tlci1kcm9wZG93biddXCJcclxuICAgICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cInJlYWxPcGVuU3RhdGVcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJvdmVybGF5UG9zaXRpb25zXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlUcmFuc2Zvcm1PcmlnaW5Pbl09XCInLmFudC1waWNrZXItd3JhcHBlcidcIlxyXG4gICAgICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgKGRldGFjaCk9XCJvbk92ZXJsYXlEZXRhY2goKVwiXHJcbiAgICAgIChvdmVybGF5S2V5ZG93bik9XCJvbk92ZXJsYXlLZXlkb3duKCRldmVudClcIlxyXG4gICAgICAob3ZlcmxheU91dHNpZGVDbGljayk9XCJvbkNsaWNrT3V0c2lkZSgkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItd3JhcHBlclwiIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uXCIgW0BzbGlkZU1vdGlvbl09XCJzdGF0ZVwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRyb3Bkb3duIHt7IGRyb3Bkb3duQ2xhc3NOYW1lIH19XCJcclxuICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWRyb3Bkb3duLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcclxuICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0XT1cImN1cnJlbnRQb3NpdGlvblkgPT09ICdib3R0b20nICYmIGN1cnJlbnRQb3NpdGlvblggPT09ICdzdGFydCdcIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnRdPVwiY3VycmVudFBvc2l0aW9uWSA9PT0gJ3RvcCcgJiYgY3VycmVudFBvc2l0aW9uWCA9PT0gJ3N0YXJ0J1wiXHJcbiAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tUmlnaHRdPVwiY3VycmVudFBvc2l0aW9uWSA9PT0gJ2JvdHRvbScgJiYgY3VycmVudFBvc2l0aW9uWCA9PT0gJ2VuZCdcIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcGxhY2VtZW50LXRvcFJpZ2h0XT1cImN1cnJlbnRQb3NpdGlvblkgPT09ICd0b3AnICYmIGN1cnJlbnRQb3NpdGlvblggPT09ICdlbmQnXCJcclxuICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWRyb3Bkb3duLXJhbmdlXT1cImlzUmFuZ2VcIlxyXG4gICAgICAgICAgW25nU3R5bGVdPVwicG9wdXBTdHlsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPCEtLSBDb21wYXRpYmxlIGZvciBvdmVybGF5IHRoYXQgbm90IHN1cHBvcnQgb2Zmc2V0IGR5bmFtaWNhbGx5IGFuZCBpbW1lZGlhdGVseSAtLT5cclxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBub0FuaW1hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBvcGVuOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdGltZWxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbnB1dFJlYWRPbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIhOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBhbGxvd0NsZWFyPzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhdXRvRm9jdXM/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZvcm1hdCE6IHN0cmluZztcclxuICBASW5wdXQoKSBzZXBhcmF0b3I/OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcG9wdXBTdHlsZTogTmdTdHlsZUludGVyZmFjZSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN1ZmZpeEljb24/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+O1xyXG4gIEBJbnB1dCgpIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGNtYWNzT3BlbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9jdXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGUgfCBDYW5keURhdGVbXSB8IG51bGw+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7IC8vIEVtaXR0ZWQgd2hlbiBvdmVybGF5J3Mgb3BlbiBzdGF0ZSBjaGFuZ2VcclxuXHJcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5LCB7IHN0YXRpYzogZmFsc2UgfSkgY2RrQ29ubmVjdGVkT3ZlcmxheT86IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgQFZpZXdDaGlsZCgnc2VwYXJhdG9yRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBzZXBhcmF0b3JFbGVtZW50PzogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdwaWNrZXJJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwaWNrZXJJbnB1dD86IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZHJlbigncmFuZ2VQaWNrZXJJbnB1dCcpIHJhbmdlUGlja2VySW5wdXRzPzogUXVlcnlMaXN0PEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4+O1xyXG4gIEBDb250ZW50Q2hpbGQoRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQpIHBhbmVsITogRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQ7XHJcblxyXG4gIGNhbGNXaWR0aDogbnVtYmVyID0gMDtcclxuICBvcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgZG9jdW1lbnQ6IERvY3VtZW50O1xyXG4gIGlucHV0U2l6ZTogbnVtYmVyID0gMTI7XHJcbiAgaW5wdXRXaWR0aD86IG51bWJlcjtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJlZml4Q2xzID0gUFJFRklYX0NMQVNTO1xyXG4gIGlucHV0VmFsdWUhOiBOelNhZmVBbnk7XHJcbiAgYWN0aXZlQmFyU3R5bGU6IG9iamVjdCA9IHt9O1xyXG4gIG92ZXJsYXlPcGVuOiBib29sZWFuID0gZmFsc2U7IC8vIEF2YWlsYWJsZSB3aGVuIFwib3BlblwiPXVuZGVmaW5lZFxyXG4gIG92ZXJsYXlQb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFtcclxuICAgIHtcclxuICAgICAgb2Zmc2V0WDogLTEyLFxyXG4gICAgICBvZmZzZXRZOiA4LFxyXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgIG92ZXJsYXlZOiAndG9wJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb2Zmc2V0WDogLTEyLFxyXG4gICAgICBvZmZzZXRZOiAtOCxcclxuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9mZnNldFg6IDEyLFxyXG4gICAgICBvZmZzZXRZOiA4LFxyXG4gICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgb3ZlcmxheVk6ICd0b3AnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvZmZzZXRYOiAxMixcclxuICAgICAgb2Zmc2V0WTogLTgsXHJcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgIH1cclxuICBdIGFzIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXTtcclxuICBjdXJyZW50UG9zaXRpb25YOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyA9ICdzdGFydCc7XHJcbiAgY3VycmVudFBvc2l0aW9uWTogVmVydGljYWxDb25uZWN0aW9uUG9zID0gJ2JvdHRvbSc7XHJcbiAgc3RhdGU6IHN0cmluZyA9ICdlbnRlcic7XHJcblxyXG4gIGdldCByZWFsT3BlblN0YXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gVGhlIHZhbHVlIHRoYXQgcmVhbGx5IGRlY2lkZSB0aGUgb3BlbiBzdGF0ZSBvZiBvdmVybGF5XHJcbiAgICB0aGlzLnNldFBhbmVsV2lkdGgoKTtcclxuICAgIHJldHVybiB0aGlzLmlzT3BlbkhhbmRsZWRCeVVzZXIoKSA/ICEhdGhpcy5vcGVuIDogdGhpcy5vdmVybGF5T3BlbjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBuelJlc2l6ZU9ic2VydmVyOiBOelJlc2l6ZU9ic2VydmVyLFxyXG4gICAgcHVibGljIGRhdGVQaWNrZXJTZXJ2aWNlOiBEYXRlUGlja2VyU2VydmljZSxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvYzogTnpTYWZlQW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jO1xyXG4gICAgdGhpcy5vcmlnaW4gPSBuZXcgQ2RrT3ZlcmxheU9yaWdpbih0aGlzLmVsZW1lbnRSZWYpO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGwsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwgPSAoZTogRXZlbnQpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKCF0YXJnZXQuY2xhc3NOYW1lIHx8IHRhcmdldC5jbGFzc05hbWUuaW5kZXhPZignYW50LXBpY2tlci10aW1lLXBhbmVsLWNvbHVtbicpIDwgMCkge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWxPcGVuU3RhdGUpIHtcclxuICAgICAgICAgIHRoaXMuc3RhdGUgPSAndm9pZCc7XHJcbiAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlID0gJ2VudGVyJztcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgfSk7XHJcbiAgICB9ICAgXHJcbiAgfVxyXG5cclxuICBzZXRQYW5lbFdpZHRoKCkge1xyXG4gICAgdGhpcy5jYWxjV2lkdGggPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArIDI0O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmlzUmFuZ2UgPyBbJycsICcnXSA6ICcnO1xyXG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZUNoYW5nZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzUmFuZ2UgJiYgdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5uelJlc2l6ZU9ic2VydmVyXHJcbiAgICAgICAgLm9ic2VydmUodGhpcy5lbGVtZW50UmVmKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aEFuZEFycm93TGVmdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5wdXRQYXJ0Q2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHBhcnRUeXBlID0+IHtcclxuICAgICAgaWYgKHBhcnRUeXBlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dCA9IHBhcnRUeXBlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgdGhpcy51cGRhdGVJbnB1dFdpZHRoQW5kQXJyb3dMZWZ0KCk7XHJcbiAgICAgIHRoaXMucGFuZWw/LnVwZGF0ZUFjdGl2ZURhdGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGwsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuZm9ybWF0Py5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXMuZm9ybWF0Py5wcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRTaXplID0gTWF0aC5tYXgoMTAsIHRoaXMuZm9ybWF0Lmxlbmd0aCkgKyAyO1xyXG4gICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUlucHV0V2lkdGhBbmRBcnJvd0xlZnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0V2lkdGggPSB0aGlzLnJhbmdlUGlja2VySW5wdXRzPy5maXJzdD8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwO1xyXG5cclxuICAgIGNvbnN0IGJhc2VTdHlsZSA9IHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHdpZHRoOiBgJHt0aGlzLmlucHV0V2lkdGh9cHhgIH07XHJcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFycm93TGVmdCA9XHJcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXQgPT09ICdsZWZ0JyA/IDAgOiB0aGlzLmlucHV0V2lkdGggKyB0aGlzLnNlcGFyYXRvckVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMDtcclxuXHJcbiAgICBpZiAodGhpcy5kaXIgPT09ICdydGwnKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlQmFyU3R5bGUgPSB7IC4uLmJhc2VTdHlsZSwgcmlnaHQ6IGAke3RoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYXJyb3dMZWZ0fXB4YCB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hY3RpdmVCYXJTdHlsZSA9IHsgLi4uYmFzZVN0eWxlLCBsZWZ0OiBgJHt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFycm93TGVmdH1weGAgfTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhbmVsLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5wdXQocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1JhbmdlXHJcbiAgICAgID8gcGFydFR5cGUgPT09ICdsZWZ0J1xyXG4gICAgICAgID8gdGhpcy5yYW5nZVBpY2tlcklucHV0cz8uZmlyc3QubmF0aXZlRWxlbWVudFxyXG4gICAgICAgIDogdGhpcy5yYW5nZVBpY2tlcklucHV0cz8ubGFzdC5uYXRpdmVFbGVtZW50XHJcbiAgICAgIDogdGhpcy5waWNrZXJJbnB1dCEubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgYWN0aXZlSW5wdXRFbGVtZW50ID0gdGhpcy5nZXRJbnB1dCh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0KTtcclxuICAgIGlmICh0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGFjdGl2ZUlucHV0RWxlbWVudCkge1xyXG4gICAgICBhY3RpdmVJbnB1dEVsZW1lbnQ/LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50LCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvY3VzQ2hhbmdlLmVtaXQodHJ1ZSk7XHJcbiAgICBpZiAocGFydFR5cGUpIHtcclxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbnB1dFBhcnRDaGFuZ2UkLm5leHQocGFydFR5cGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CbHVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5mb2N1c0NoYW5nZS5lbWl0KGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8vIFNob3cgb3ZlcmxheSBjb250ZW50XHJcbiAgc2hvd092ZXJsYXkoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucmVhbE9wZW5TdGF0ZSAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGhBbmRBcnJvd0xlZnQoKTtcclxuICAgICAgdGhpcy5vdmVybGF5T3BlbiA9IHRydWU7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgdGhpcy5wYW5lbC5pbml0KCk7XHJcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRydWUpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZGVPdmVybGF5KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucmVhbE9wZW5TdGF0ZSkge1xyXG4gICAgICB0aGlzLm92ZXJsYXlPcGVuID0gZmFsc2U7XHJcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dDbGVhcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5pc0VtcHR5VmFsdWUodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkgJiYgISF0aGlzLmFsbG93Q2xlYXI7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrSW5wdXRCb3goZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5mb2N1cygpO1xyXG4gICAgaWYgKCF0aGlzLmlzT3BlbkhhbmRsZWRCeVVzZXIoKSkge1xyXG4gICAgICB0aGlzLnNob3dPdmVybGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrT3V0c2lkZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBhbmVsLmlzQWxsb3dlZCh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlISwgdHJ1ZSkpIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkgJiYgd3JvbmdTb3J0T3JkZXIodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZ2V0QWN0aXZlSW5kZXgodGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlW2luZGV4XTtcclxuICAgICAgICB0aGlzLnBhbmVsLmNoYW5nZVZhbHVlRnJvbVNlbGVjdCh2YWx1ZSEsIHRydWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUoKTtcclxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5lbWl0VmFsdWUkLm5leHQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0VmFsdWUodGhpcy5kYXRlUGlja2VyU2VydmljZS5pbml0aWFsVmFsdWUhKTtcclxuICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25PdmVybGF5RGV0YWNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgb25PdmVybGF5S2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSkge1xyXG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5pdGlhbFZhbHVlISk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBOT1RFOiBBIGlzc3VlIGhlcmUsIHRoZSBmaXJzdCB0aW1lIHBvc2l0aW9uIGNoYW5nZSwgdGhlIGFuaW1hdGlvbiB3aWxsIG5vdCBiZSB0cmlnZ2VyZWQuXHJcbiAgLy8gQmVjYXVzZSB0aGUgb3ZlcmxheSdzIFwicG9zaXRpb25DaGFuZ2VcIiBldmVudCBpcyBlbWl0dGVkIGFmdGVyIHRoZSBjb250ZW50J3MgZnVsbCBzaG93biB1cC5cclxuICAvLyBBbGwgb3RoZXIgY29tcG9uZW50cyBsaWtlIFwibnotZHJvcGRvd25cIiB3aGljaCBkZXBlbmRzIG9uIG92ZXJsYXkgYWxzbyBoYXMgdGhlIHNhbWUgaXNzdWUuXHJcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMTQyOVxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jdXJyZW50UG9zaXRpb25YID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWDtcclxuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uWSA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7IC8vIFRha2Ugc2lkZS1lZmZlY3RzIHRvIHBvc2l0aW9uIHN0eWxlc1xyXG4gIH1cclxuXHJcbiAgb25DbGlja0NsZWFyKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZSh0aGlzLmlzUmFuZ2UgPyBbXSA6IG51bGwpO1xyXG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5lbWl0VmFsdWUkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUlucHV0VmFsdWUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWU7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IG5ld1ZhbHVlID8gKG5ld1ZhbHVlIGFzIENhbmR5RGF0ZVtdKS5tYXAodiA9PiB0aGlzLmZvcm1hdFZhbHVlKHYpKSA6IFsnJywgJyddO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZShuZXdWYWx1ZSBhcyBDYW5keURhdGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRWYWx1ZSh2YWx1ZTogQ2FuZHlEYXRlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHZhbHVlICYmICh2YWx1ZSBhcyBDYW5keURhdGUpLm5hdGl2ZURhdGUsIHRoaXMuZm9ybWF0KTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRDaGFuZ2UodmFsdWU6IHN0cmluZywgaXNFbnRlcjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAvKipcclxuICAgICAqIGluIElFMTEgZm9jdXMvYmx1ciB3aWxsIHRyaWdnZXIgbmdNb2RlbENoYW5nZSBpZiBoYXMgcGxhY2Vob2xkZXJcclxuICAgICAqIHNvIHdlIGZvcmJpZGRlbiBJRTExIHRvIG9wZW4gcGFuZWwgdGhyb3VnaCBpbnB1dCBjaGFuZ2VcclxuICAgICAqL1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5wbGF0Zm9ybS5UUklERU5UICYmXHJcbiAgICAgIHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5nZXRJbnB1dCh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0KSAmJlxyXG4gICAgICAhdGhpcy5yZWFsT3BlblN0YXRlXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zaG93T3ZlcmxheSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuY2hlY2tWYWxpZERhdGUodmFsdWUpO1xyXG4gICAgaWYgKGRhdGUpIHtcclxuICAgICAgdGhpcy5wYW5lbC5jaGFuZ2VWYWx1ZUZyb21TZWxlY3QoZGF0ZSwgaXNFbnRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleXVwRW50ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uSW5wdXRDaGFuZ2UoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrVmFsaWREYXRlKHZhbHVlOiBzdHJpbmcpOiBDYW5keURhdGUgfCBudWxsIHtcclxuXHJcbiAgICBjb25zdCBtb21lbnRGb3JtYXQgPSB0aGlzLmZvcm1hdC5yZXBsYWNlKC9kL2csICdEJyk7ICAgXHJcbiAgICBjb25zdCBkYXRlID0gbmV3IENhbmR5RGF0ZShtb21lbnQodmFsdWUsIG1vbWVudEZvcm1hdCkudG9EYXRlKCkpO1xyXG4gICAgaWYgKCFkYXRlLmlzVmFsaWQoKSB8fCAodmFsdWUhLnRvTG93ZXJDYXNlKCkgIT09IG1vbWVudChkYXRlLm5hdGl2ZURhdGUpLmZvcm1hdChtb21lbnRGb3JtYXQpIS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0ZTtcclxuICB9XHJcblxyXG4gIGdldFBsYWNlaG9sZGVyKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1JhbmdlID8gdGhpcy5wbGFjZWhvbGRlclt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KHBhcnRUeXBlISldIDogKHRoaXMucGxhY2Vob2xkZXIgYXMgc3RyaW5nKTtcclxuICB9XHJcblxyXG4gIGlzRW1wdHlWYWx1ZSh2YWx1ZTogQ29tcGF0aWJsZVZhbHVlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICByZXR1cm4gIXZhbHVlIHx8ICFBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZS5ldmVyeSh2YWwgPT4gIXZhbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gIXZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gV2hldGhlciBvcGVuIHN0YXRlIGlzIHBlcm1hbmVudGx5IGNvbnRyb2xsZWQgYnkgdXNlciBoaW1zZWxmXHJcbiAgaXNPcGVuSGFuZGxlZEJ5VXNlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm9wZW4gIT09IHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIl19