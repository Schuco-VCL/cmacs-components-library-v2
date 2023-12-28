import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate, cloneDate, wrongSortOrder } from 'ng-zorro-antd/core/time';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getTimeConfig, isAllowedDate, PREFIX_CLASS } from './util';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "./date-picker.service";
import * as i2 from "@angular/common";
import * as i3 from "./calendar-footer.component";
import * as i4 from "./inner-popup.component";
function DateRangePopupComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function () { return { partType: "left" }; };
const _c1 = function () { return { partType: "right" }; };
function DateRangePopupComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "div");
    i0.ɵɵelementStart(3, "div")(4, "div");
    i0.ɵɵtemplate(5, DateRangePopupComponent_ng_container_0_ng_container_5_Template, 1, 0, "ng-container", 5);
    i0.ɵɵtemplate(6, DateRangePopupComponent_ng_container_0_ng_container_6_Template, 1, 0, "ng-container", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, DateRangePopupComponent_ng_container_0_ng_container_7_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(4);
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate2("", ctx_r0.prefixCls, "-range-wrapper ", ctx_r0.prefixCls, "-date-range-wrapper");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-range-arrow");
    i0.ɵɵstyleProp("left", ctx_r0.datePickerService == null ? null : ctx_r0.datePickerService.arrowLeft, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-panel-container");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-panels");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction0(20, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction0(21, _c1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function DateRangePopupComponent_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 7);
    i0.ɵɵtemplate(2, DateRangePopupComponent_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    i0.ɵɵtemplate(3, DateRangePopupComponent_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(4);
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵclassMapInterpolate4("", ctx_r2.prefixCls, "-panel-container ", ctx_r2.showWeek ? ctx_r2.prefixCls + "-week-number" : "", " ", ctx_r2.hasTimePicker ? ctx_r2.prefixCls + "-time" : "", " ", ctx_r2.isRange ? ctx_r2.prefixCls + "-range" : "", "");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-panel");
    i0.ɵɵclassProp("ant-picker-panel-rtl", ctx_r2.dir === "rtl");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function DateRangePopupComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "inner-popup", 8);
    i0.ɵɵlistener("panelModeChange", function DateRangePopupComponent_ng_template_3_Template_inner_popup_panelModeChange_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r16); const partType_r14 = restoredCtx.partType; const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.onPanelModeChange($event, partType_r14)); })("cellHover", function DateRangePopupComponent_ng_template_3_Template_inner_popup_cellHover_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.onCellHover($event)); })("selectDate", function DateRangePopupComponent_ng_template_3_Template_inner_popup_selectDate_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.changeValueFromSelect($event, !ctx_r18.showTime)); })("selectTime", function DateRangePopupComponent_ng_template_3_Template_inner_popup_selectTime_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r16); const partType_r14 = restoredCtx.partType; const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.onSelectTime($event, partType_r14)); })("headerChange", function DateRangePopupComponent_ng_template_3_Template_inner_popup_headerChange_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r16); const partType_r14 = restoredCtx.partType; const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.onActiveDateChange($event, partType_r14)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const partType_r14 = ctx.partType;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r4.prefixCls, "-panel");
    i0.ɵɵstyleProp("display", ctx_r4.show(partType_r14) ? "block" : "none");
    i0.ɵɵclassProp("ant-picker-panel-rtl", ctx_r4.dir === "rtl");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showWeek", ctx_r4.showWeek)("showWeekCustom", ctx_r4.showWeekCustom)("endPanelMode", ctx_r4.getPanelMode(ctx_r4.endPanelMode, partType_r14))("partType", partType_r14)("locale", ctx_r4.locale)("showTimePicker", ctx_r4.hasTimePicker)("timeOptions", ctx_r4.getTimeOptions(partType_r14))("panelMode", ctx_r4.getPanelMode(ctx_r4.panelMode, partType_r14))("activeDate", ctx_r4.getActiveDate(partType_r14))("value", ctx_r4.getValue(partType_r14))("disabledDate", ctx_r4.disabledDate)("dateRender", ctx_r4.dateRender)("selectedValue", ctx_r4.datePickerService == null ? null : ctx_r4.datePickerService.value)("hoverValue", ctx_r4.hoverValue);
} }
function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "calendar-footer", 10);
    i0.ɵɵlistener("clickOk", function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template_calendar_footer_clickOk_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r22.onClickOk()); })("clickToday", function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template_calendar_footer_clickToday_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r24.onClickToday($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    const _r7 = i0.ɵɵreference(8);
    i0.ɵɵproperty("locale", ctx_r21.locale)("isRange", ctx_r21.isRange)("showToday", ctx_r21.showToday)("showNow", ctx_r21.showNow)("hasTimePicker", ctx_r21.hasTimePicker)("okDisabled", !ctx_r21.isAllowed(ctx_r21.datePickerService == null ? null : ctx_r21.datePickerService.value))("extraFooter", ctx_r21.extraFooter)("rangeQuickSelector", ctx_r21.ranges ? _r7 : null);
} }
function DateRangePopupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DateRangePopupComponent_ng_template_5_calendar_footer_0_Template, 1, 8, "calendar-footer", 9);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r6.hasFooter);
} }
function DateRangePopupComponent_ng_template_7_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 12);
    i0.ɵɵlistener("click", function DateRangePopupComponent_ng_template_7_li_0_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r28); const name_r26 = restoredCtx.$implicit; const ctx_r27 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r27.onClickPresetRange(ctx_r27.ranges[name_r26])); })("mouseenter", function DateRangePopupComponent_ng_template_7_li_0_Template_li_mouseenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r28); const name_r26 = restoredCtx.$implicit; const ctx_r29 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r29.onHoverPresetRange(ctx_r29.ranges[name_r26])); })("mouseleave", function DateRangePopupComponent_ng_template_7_li_0_Template_li_mouseleave_0_listener() { i0.ɵɵrestoreView(_r28); const ctx_r30 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r30.onPresetRangeMouseLeave()); });
    i0.ɵɵelementStart(1, "span", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const name_r26 = ctx.$implicit;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r25.prefixCls, "-preset");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(name_r26);
} }
function DateRangePopupComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DateRangePopupComponent_ng_template_7_li_0_Template, 3, 4, "li", 11);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r8.getObjectKeys(ctx_r8.ranges));
} }
export class DateRangePopupComponent {
    set showWeekCustom(value) {
        this._showWeekCustom = ((!Array.isArray(this.panelMode) && this.panelMode !== 'week') ||
            (Array.isArray(this.panelMode) && this.panelMode[0] !== 'week'));
    }
    get showWeekCustom() {
        return ((!Array.isArray(this.panelMode) && this.panelMode !== 'week') ||
            (Array.isArray(this.panelMode) && this.panelMode[0] !== 'week'));
    }
    get hasTimePicker() {
        return !!this.showTime;
    }
    get hasFooter() {
        return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
    }
    constructor(datePickerService, cdr) {
        this.datePickerService = datePickerService;
        this.cdr = cdr;
        this.timeline = false;
        this.panelModeChange = new EventEmitter();
        this.calendarChange = new EventEmitter();
        this.resultOk = new EventEmitter(); // Emitted when done with date selecting
        this.dir = 'ltr';
        this.prefixCls = PREFIX_CLASS;
        this.endPanelMode = 'date';
        this.timeOptions = null;
        this.hoverValue = []; // Range ONLY
        this.checkedPartArr = [false, false];
        this.destroy$ = new Subject();
        this._showWeekCustom = false;
        this.disabledStartTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'start');
        };
        this.disabledEndTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'end');
        };
    }
    ngOnInit() {
        this.datePickerService.valueChange$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.updateActiveDate();
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        // Parse showTime options
        if (changes.showTime || changes.disabledTime) {
            if (this.showTime) {
                this.buildTimeOptions();
            }
        }
        if (changes.panelMode) {
            this.endPanelMode = this.panelMode;
        }
        if (changes.defaultPickerValue) {
            this.updateActiveDate();
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    updateActiveDate() {
        const activeDate = this.datePickerService.hasValue()
            ? this.datePickerService.value
            : this.datePickerService.makeValue(this.defaultPickerValue);
        this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode));
    }
    init() {
        this.checkedPartArr = [false, false];
        this.updateActiveDate();
    }
    /**
     * Prevent input losing focus when click panel
     * @param event
     */
    onMousedown(event) {
        event.preventDefault();
    }
    onClickOk() {
        const inputIndex = { left: 0, right: 1 }[this.datePickerService.activeInput];
        const value = this.isRange
            ? this.datePickerService.value[inputIndex]
            : this.datePickerService.value;
        this.changeValueFromSelect(value);
        this.resultOk.emit();
    }
    onClickToday(value) {
        this.changeValueFromSelect(value, !this.showTime);
    }
    onCellHover(value) {
        if (!this.isRange) {
            return;
        }
        const otherInputIndex = { left: 1, right: 0 }[this.datePickerService.activeInput];
        const base = this.datePickerService.value[otherInputIndex];
        if (base) {
            if (base.isBeforeDay(value)) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    }
    onPanelModeChange(mode, partType) {
        if (this.isRange) {
            const index = this.datePickerService.getActiveIndex(partType);
            if (index === 0) {
                this.panelMode = [mode, this.panelMode[1]];
            }
            else {
                this.panelMode = [this.panelMode[0], mode];
            }
        }
        else {
            this.panelMode = mode;
        }
        this.panelModeChange.emit(this.panelMode);
    }
    onActiveDateChange(value, partType) {
        if (this.isRange) {
            const activeDate = [];
            activeDate[this.datePickerService.getActiveIndex(partType)] = value;
            this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode, partType));
        }
        else {
            this.datePickerService.setActiveDate(value);
        }
    }
    onSelectTime(value, partType) {
        if (this.isRange) {
            const newValue = cloneDate(this.datePickerService.value);
            const index = this.datePickerService.getActiveIndex(partType);
            newValue[index] = this.overrideHms(value, newValue[index]);
            this.datePickerService.setValue(newValue);
        }
        else {
            const newValue = this.overrideHms(value, this.datePickerService.value);
            this.datePickerService.setValue(newValue); // If not select a date currently, use today
        }
        this.datePickerService.inputPartChange$.next(null);
        this.buildTimeOptions();
    }
    changeValueFromSelect(value, emitValue = true) {
        if (this.isRange) {
            const selectedValue = cloneDate(this.datePickerService.value);
            const checkedPart = this.datePickerService.activeInput;
            let nextPart = checkedPart;
            selectedValue[this.datePickerService.getActiveIndex(checkedPart)] = value;
            this.checkedPartArr[this.datePickerService.getActiveIndex(checkedPart)] = true;
            this.hoverValue = selectedValue;
            if (emitValue) {
                /**
                 * if sort order is wrong, clear the other part's value
                 */
                let isWrong = false;
                if (wrongSortOrder(selectedValue)) {
                    isWrong = true;
                    nextPart = this.reversedPart(checkedPart);
                    selectedValue[this.datePickerService.getActiveIndex(nextPart)] = null;
                    this.checkedPartArr[this.datePickerService.getActiveIndex(nextPart)] = false;
                }
                this.datePickerService.setValue(selectedValue);
                /**
                 * range date usually selected paired,
                 * so we emit the date value only both date is allowed and both part are checked
                 */
                if ((this.isBothAllowed(selectedValue) && this.checkedPartArr[0] && this.checkedPartArr[1]) || (selectedValue.length > 1 && !isWrong && selectedValue[0] !== undefined)) {
                    this.calendarChange.emit(selectedValue);
                    this.clearHoverValue();
                    this.datePickerService.emitValue$.next();
                }
                else if (this.isAllowed(selectedValue)) {
                    nextPart = this.reversedPart(checkedPart);
                    this.calendarChange.emit([value.clone()]);
                }
            }
            else {
                this.datePickerService.setValue(selectedValue);
            }
            this.datePickerService.inputPartChange$.next(nextPart);
        }
        else {
            this.datePickerService.setValue(value);
            this.datePickerService.inputPartChange$.next(null);
            if (emitValue && this.isAllowed(value)) {
                this.datePickerService.emitValue$.next();
            }
        }
    }
    reversedPart(part) {
        return part === 'left' ? 'right' : 'left';
    }
    getPanelMode(panelMode, partType) {
        if (this.isRange) {
            return panelMode[this.datePickerService.getActiveIndex(partType)];
        }
        else {
            return panelMode;
        }
    }
    // Get single value or part value of a range
    getValue(partType) {
        if (this.isRange) {
            return (this.datePickerService.value || [])[this.datePickerService.getActiveIndex(partType)];
        }
        else {
            return this.datePickerService.value;
        }
    }
    getActiveDate(partType) {
        if (this.isRange) {
            return this.datePickerService.activeDate[this.datePickerService.getActiveIndex(partType)];
        }
        else {
            return this.datePickerService.activeDate;
        }
    }
    isOneAllowed(selectedValue) {
        const index = this.datePickerService.getActiveIndex();
        const disabledTimeArr = [this.disabledStartTime, this.disabledEndTime];
        return isAllowedDate(selectedValue[index], this.disabledDate, disabledTimeArr[index]);
    }
    isBothAllowed(selectedValue) {
        return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
            isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
    }
    isAllowed(value, isBoth = false) {
        if (this.isRange) {
            return isBoth ? this.isBothAllowed(value) : this.isOneAllowed(value);
        }
        else {
            return isAllowedDate(value, this.disabledDate, this.disabledTime);
        }
    }
    getTimeOptions(partType) {
        if (this.showTime && this.timeOptions) {
            return this.timeOptions instanceof Array ? this.timeOptions[this.datePickerService.getActiveIndex(partType)] : this.timeOptions;
        }
        return null;
    }
    onClickPresetRange(val) {
        const value = typeof val === 'function' ? val() : val;
        if (value) {
            this.datePickerService.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
            this.datePickerService.emitValue$.next();
        }
    }
    onPresetRangeMouseLeave() {
        this.clearHoverValue();
    }
    onHoverPresetRange(val) {
        if (typeof val !== 'function') {
            this.hoverValue = [new CandyDate(val[0]), new CandyDate(val[1])];
        }
    }
    getObjectKeys(obj) {
        return obj ? Object.keys(obj) : [];
    }
    show(partType) {
        const hide = this.showTime && this.isRange && this.datePickerService.activeInput !== partType;
        return !hide;
    }
    clearHoverValue() {
        this.hoverValue = [];
    }
    buildTimeOptions() {
        if (this.showTime) {
            const showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                const value = this.datePickerService.value;
                this.timeOptions = [this.overrideTimeOptions(showTime, value[0], 'start'), this.overrideTimeOptions(showTime, value[1], 'end')];
            }
            else {
                this.timeOptions = this.overrideTimeOptions(showTime, this.datePickerService.value);
            }
        }
        else {
            this.timeOptions = null;
        }
    }
    overrideTimeOptions(origin, value, partial) {
        let disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return { ...origin, ...getTimeConfig(value, disabledTimeFn) };
    }
    overrideHms(newValue, oldValue) {
        // tslint:disable-next-line:no-parameter-reassignment
        newValue = newValue || new CandyDate();
        // tslint:disable-next-line:no-parameter-reassignment
        oldValue = oldValue || new CandyDate();
        return oldValue.setHms(newValue.getHours(), newValue.getMinutes(), newValue.getSeconds());
    }
    static { this.ɵfac = function DateRangePopupComponent_Factory(t) { return new (t || DateRangePopupComponent)(i0.ɵɵdirectiveInject(i1.DatePickerService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateRangePopupComponent, selectors: [["date-range-popup"]], hostBindings: function DateRangePopupComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mousedown", function DateRangePopupComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); });
        } }, inputs: { isRange: "isRange", showWeek: "showWeek", timeline: "timeline", locale: "locale", disabledDate: "disabledDate", disabledTime: "disabledTime", showToday: "showToday", showNow: "showNow", showTime: "showTime", extraFooter: "extraFooter", ranges: "ranges", dateRender: "dateRender", panelMode: "panelMode", defaultPickerValue: "defaultPickerValue", dir: "dir", showWeekCustom: "showWeekCustom" }, outputs: { panelModeChange: "panelModeChange", calendarChange: "calendarChange", resultOk: "resultOk" }, exportAs: ["dateRangePopup"], features: [i0.ɵɵNgOnChangesFeature], decls: 9, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["singlePanel", ""], ["tplInnerPopup", ""], ["tplFooter", ""], ["tplRangeQuickSelector", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], ["tabindex", "-1"], [3, "showWeek", "showWeekCustom", "endPanelMode", "partType", "locale", "showTimePicker", "timeOptions", "panelMode", "activeDate", "value", "disabledDate", "dateRender", "selectedValue", "hoverValue", "panelModeChange", "cellHover", "selectDate", "selectTime", "headerChange"], [3, "locale", "isRange", "showToday", "showNow", "hasTimePicker", "okDisabled", "extraFooter", "rangeQuickSelector", "clickOk", "clickToday", 4, "ngIf"], [3, "locale", "isRange", "showToday", "showNow", "hasTimePicker", "okDisabled", "extraFooter", "rangeQuickSelector", "clickOk", "clickToday"], [3, "class", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter", "mouseleave"], [1, "ant-tag", "ant-tag-blue"]], template: function DateRangePopupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DateRangePopupComponent_ng_container_0_Template, 8, 22, "ng-container", 0);
            i0.ɵɵtemplate(1, DateRangePopupComponent_ng_template_1_Template, 4, 13, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, DateRangePopupComponent_ng_template_3_Template, 2, 21, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(5, DateRangePopupComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(7, DateRangePopupComponent_ng_template_7_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r1 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.isRange)("ngIfElse", _r1);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.CalendarFooterComponent, i4.InnerPopupComponent], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], DateRangePopupComponent.prototype, "showWeekCustom", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateRangePopupComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-range-popup',
                exportAs: 'dateRangePopup',
                template: `
    <ng-container *ngIf="isRange; else singlePanel">
      <div class="{{ prefixCls }}-range-wrapper {{ prefixCls }}-date-range-wrapper">
        <div class="{{ prefixCls }}-range-arrow" [style.left.px]="datePickerService?.arrowLeft"></div>
        <div class="{{ prefixCls }}-panel-container">
          <div class="{{ prefixCls }}-panels">
            <ng-container *ngTemplateOutlet="tplInnerPopup; context: { partType: 'left' }"></ng-container>
            <ng-container *ngTemplateOutlet="tplInnerPopup; context: { partType: 'right' }"></ng-container>
          </div>
          <ng-container *ngTemplateOutlet="tplFooter"></ng-container>
        </div>
      </div>
    </ng-container>
    <ng-template #singlePanel>
      <div
        class="{{ prefixCls }}-panel-container {{ showWeek ? prefixCls + '-week-number' : '' }} {{
          hasTimePicker ? prefixCls + '-time' : ''
        }} {{ isRange ? prefixCls + '-range' : '' }}"
      >
        <div class="{{ prefixCls }}-panel" [class.ant-picker-panel-rtl]="dir === 'rtl'" tabindex="-1">
          <!-- Single ONLY -->
          <ng-container *ngTemplateOutlet="tplInnerPopup"></ng-container>
          <ng-container *ngTemplateOutlet="tplFooter"></ng-container>
        </div>
      </div>
    </ng-template>

    <ng-template #tplInnerPopup let-partType="partType">
      <div class="{{ prefixCls }}-panel" [class.ant-picker-panel-rtl]="dir === 'rtl'" [style.display]="show(partType) ? 'block' : 'none'">
        <!-- TODO(@wenqi73) [selectedValue] [hoverValue] types-->
        <inner-popup
          [showWeek]="showWeek"
          [showWeekCustom]="showWeekCustom"
          [endPanelMode]="getPanelMode(endPanelMode, partType)"
          [partType]="partType"
          [locale]="locale!"
          [showTimePicker]="hasTimePicker"
          [timeOptions]="getTimeOptions(partType)"
          [panelMode]="getPanelMode(panelMode, partType)"
          (panelModeChange)="onPanelModeChange($event, partType)"
          [activeDate]="getActiveDate(partType)"
          [value]="getValue(partType)"
          [disabledDate]="disabledDate"
          [dateRender]="dateRender"
          [selectedValue]="$any(datePickerService?.value)"
          [hoverValue]="$any(hoverValue)"
          (cellHover)="onCellHover($event)"
          (selectDate)="changeValueFromSelect($event, !showTime)"
          (selectTime)="onSelectTime($event, partType)"
          (headerChange)="onActiveDateChange($event, partType)"
        ></inner-popup>
      </div>
    </ng-template>

    <ng-template #tplFooter>
      <calendar-footer
        *ngIf="hasFooter"
        [locale]="locale!"
        [isRange]="isRange"
        [showToday]="showToday"
        [showNow]="showNow"
        [hasTimePicker]="hasTimePicker"
        [okDisabled]="!isAllowed($any(datePickerService?.value))"
        [extraFooter]="extraFooter"
        [rangeQuickSelector]="ranges ? tplRangeQuickSelector : null"
        (clickOk)="onClickOk()"
        (clickToday)="onClickToday($event)"
      ></calendar-footer>
    </ng-template>

    <!-- Range ONLY: Range Quick Selector -->
    <ng-template #tplRangeQuickSelector>
      <li
        *ngFor="let name of getObjectKeys(ranges)"
        class="{{ prefixCls }}-preset"
        (click)="onClickPresetRange(ranges![name])"
        (mouseenter)="onHoverPresetRange(ranges![name])"
        (mouseleave)="onPresetRangeMouseLeave()"
      >
        <span class="ant-tag ant-tag-blue">{{ name }}</span>
      </li>
    </ng-template>
  `,
                host: {
                    '(mousedown)': 'onMousedown($event)'
                }
            }]
    }], function () { return [{ type: i1.DatePickerService }, { type: i0.ChangeDetectorRef }]; }, { isRange: [{
            type: Input
        }], showWeek: [{
            type: Input
        }], timeline: [{
            type: Input
        }], locale: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], disabledTime: [{
            type: Input
        }], showToday: [{
            type: Input
        }], showNow: [{
            type: Input
        }], showTime: [{
            type: Input
        }], extraFooter: [{
            type: Input
        }], ranges: [{
            type: Input
        }], dateRender: [{
            type: Input
        }], panelMode: [{
            type: Input
        }], defaultPickerValue: [{
            type: Input
        }], panelModeChange: [{
            type: Output
        }], calendarChange: [{
            type: Output
        }], resultOk: [{
            type: Output
        }], dir: [{
            type: Input
        }], showWeekCustom: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBZ0QsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHN0gsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFZM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztJQWMzQyx3QkFBOEY7OztJQUM5Rix3QkFBK0Y7OztJQUVqRyx3QkFBMkQ7Ozs7O0lBUmpFLDZCQUFnRDtJQUM5QywyQkFBOEU7SUFDNUUsc0JBQThGO0lBQzlGLDJCQUE2QyxVQUFBO0lBRXpDLHlHQUE4RjtJQUM5Rix5R0FBK0Y7SUFDakcsaUJBQU07SUFDTix5R0FBMkQ7SUFDN0QsaUJBQU0sRUFBQTtJQUVWLDBCQUFlOzs7OztJQVZSLGVBQXdFO0lBQXhFLDJHQUF3RTtJQUN0RSxlQUFtQztJQUFuQywrREFBbUM7SUFBQywwR0FBOEM7SUFDbEYsZUFBdUM7SUFBdkMsbUVBQXVDO0lBQ3JDLGVBQThCO0lBQTlCLDBEQUE4QjtJQUNsQixlQUFpQztJQUFqQyxzQ0FBaUMs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b250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQgeyBDYW5keURhdGUsIGNsb25lRGF0ZSwgQ29tcGF0aWJsZVZhbHVlLCBOb3JtYWxpemVkTW9kZSwgU2luZ2xlVmFsdWUsIHdyb25nU29ydE9yZGVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xyXG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZGF0ZS1waWNrZXIuc2VydmljZSc7XHJcbmltcG9ydCB7XHJcbiAgQ29tcGF0aWJsZURhdGUsXHJcbiAgRGlzYWJsZWREYXRlRm4sXHJcbiAgRGlzYWJsZWRUaW1lRm4sXHJcbiAgRGlzYWJsZWRUaW1lUGFydGlhbCxcclxuICBOekRhdGVNb2RlLFxyXG4gIFByZXNldFJhbmdlcyxcclxuICBSYW5nZVBhcnRUeXBlLFxyXG4gIFN1cHBvcnRUaW1lT3B0aW9uc1xyXG59IGZyb20gJy4vc3RhbmRhcmQtdHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRUaW1lQ29uZmlnLCBpc0FsbG93ZWREYXRlLCBQUkVGSVhfQ0xBU1MgfSBmcm9tICcuL3V0aWwnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2RhdGUtcmFuZ2UtcG9wdXAnLFxyXG4gIGV4cG9ydEFzOiAnZGF0ZVJhbmdlUG9wdXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNSYW5nZTsgZWxzZSBzaW5nbGVQYW5lbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXJhbmdlLXdyYXBwZXIge3sgcHJlZml4Q2xzIH19LWRhdGUtcmFuZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcmFuZ2UtYXJyb3dcIiBbc3R5bGUubGVmdC5weF09XCJkYXRlUGlja2VyU2VydmljZT8uYXJyb3dMZWZ0XCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wYW5lbC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcGFuZWxzXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxJbm5lclBvcHVwOyBjb250ZXh0OiB7IHBhcnRUeXBlOiAnbGVmdCcgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsSW5uZXJQb3B1cDsgY29udGV4dDogeyBwYXJ0VHlwZTogJ3JpZ2h0JyB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxGb290ZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjc2luZ2xlUGFuZWw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wYW5lbC1jb250YWluZXIge3sgc2hvd1dlZWsgPyBwcmVmaXhDbHMgKyAnLXdlZWstbnVtYmVyJyA6ICcnIH19IHt7XHJcbiAgICAgICAgICBoYXNUaW1lUGlja2VyID8gcHJlZml4Q2xzICsgJy10aW1lJyA6ICcnXHJcbiAgICAgICAgfX0ge3sgaXNSYW5nZSA/IHByZWZpeENscyArICctcmFuZ2UnIDogJycgfX1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wYW5lbFwiIFtjbGFzcy5hbnQtcGlja2VyLXBhbmVsLXJ0bF09XCJkaXIgPT09ICdydGwnXCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgPCEtLSBTaW5nbGUgT05MWSAtLT5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxJbm5lclBvcHVwXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsRm9vdGVyXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICA8bmctdGVtcGxhdGUgI3RwbElubmVyUG9wdXAgbGV0LXBhcnRUeXBlPVwicGFydFR5cGVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wYW5lbFwiIFtjbGFzcy5hbnQtcGlja2VyLXBhbmVsLXJ0bF09XCJkaXIgPT09ICdydGwnXCIgW3N0eWxlLmRpc3BsYXldPVwic2hvdyhwYXJ0VHlwZSkgPyAnYmxvY2snIDogJ25vbmUnXCI+XHJcbiAgICAgICAgPCEtLSBUT0RPKEB3ZW5xaTczKSBbc2VsZWN0ZWRWYWx1ZV0gW2hvdmVyVmFsdWVdIHR5cGVzLS0+XHJcbiAgICAgICAgPGlubmVyLXBvcHVwXHJcbiAgICAgICAgICBbc2hvd1dlZWtdPVwic2hvd1dlZWtcIlxyXG4gICAgICAgICAgW3Nob3dXZWVrQ3VzdG9tXT1cInNob3dXZWVrQ3VzdG9tXCJcclxuICAgICAgICAgIFtlbmRQYW5lbE1vZGVdPVwiZ2V0UGFuZWxNb2RlKGVuZFBhbmVsTW9kZSwgcGFydFR5cGUpXCJcclxuICAgICAgICAgIFtwYXJ0VHlwZV09XCJwYXJ0VHlwZVwiXHJcbiAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZSFcIlxyXG4gICAgICAgICAgW3Nob3dUaW1lUGlja2VyXT1cImhhc1RpbWVQaWNrZXJcIlxyXG4gICAgICAgICAgW3RpbWVPcHRpb25zXT1cImdldFRpbWVPcHRpb25zKHBhcnRUeXBlKVwiXHJcbiAgICAgICAgICBbcGFuZWxNb2RlXT1cImdldFBhbmVsTW9kZShwYW5lbE1vZGUsIHBhcnRUeXBlKVwiXHJcbiAgICAgICAgICAocGFuZWxNb2RlQ2hhbmdlKT1cIm9uUGFuZWxNb2RlQ2hhbmdlKCRldmVudCwgcGFydFR5cGUpXCJcclxuICAgICAgICAgIFthY3RpdmVEYXRlXT1cImdldEFjdGl2ZURhdGUocGFydFR5cGUpXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJnZXRWYWx1ZShwYXJ0VHlwZSlcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxyXG4gICAgICAgICAgW2RhdGVSZW5kZXJdPVwiZGF0ZVJlbmRlclwiXHJcbiAgICAgICAgICBbc2VsZWN0ZWRWYWx1ZV09XCIkYW55KGRhdGVQaWNrZXJTZXJ2aWNlPy52YWx1ZSlcIlxyXG4gICAgICAgICAgW2hvdmVyVmFsdWVdPVwiJGFueShob3ZlclZhbHVlKVwiXHJcbiAgICAgICAgICAoY2VsbEhvdmVyKT1cIm9uQ2VsbEhvdmVyKCRldmVudClcIlxyXG4gICAgICAgICAgKHNlbGVjdERhdGUpPVwiY2hhbmdlVmFsdWVGcm9tU2VsZWN0KCRldmVudCwgIXNob3dUaW1lKVwiXHJcbiAgICAgICAgICAoc2VsZWN0VGltZSk9XCJvblNlbGVjdFRpbWUoJGV2ZW50LCBwYXJ0VHlwZSlcIlxyXG4gICAgICAgICAgKGhlYWRlckNoYW5nZSk9XCJvbkFjdGl2ZURhdGVDaGFuZ2UoJGV2ZW50LCBwYXJ0VHlwZSlcIlxyXG4gICAgICAgID48L2lubmVyLXBvcHVwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPG5nLXRlbXBsYXRlICN0cGxGb290ZXI+XHJcbiAgICAgIDxjYWxlbmRhci1mb290ZXJcclxuICAgICAgICAqbmdJZj1cImhhc0Zvb3RlclwiXHJcbiAgICAgICAgW2xvY2FsZV09XCJsb2NhbGUhXCJcclxuICAgICAgICBbaXNSYW5nZV09XCJpc1JhbmdlXCJcclxuICAgICAgICBbc2hvd1RvZGF5XT1cInNob3dUb2RheVwiXHJcbiAgICAgICAgW3Nob3dOb3ddPVwic2hvd05vd1wiXHJcbiAgICAgICAgW2hhc1RpbWVQaWNrZXJdPVwiaGFzVGltZVBpY2tlclwiXHJcbiAgICAgICAgW29rRGlzYWJsZWRdPVwiIWlzQWxsb3dlZCgkYW55KGRhdGVQaWNrZXJTZXJ2aWNlPy52YWx1ZSkpXCJcclxuICAgICAgICBbZXh0cmFGb290ZXJdPVwiZXh0cmFGb290ZXJcIlxyXG4gICAgICAgIFtyYW5nZVF1aWNrU2VsZWN0b3JdPVwicmFuZ2VzID8gdHBsUmFuZ2VRdWlja1NlbGVjdG9yIDogbnVsbFwiXHJcbiAgICAgICAgKGNsaWNrT2spPVwib25DbGlja09rKClcIlxyXG4gICAgICAgIChjbGlja1RvZGF5KT1cIm9uQ2xpY2tUb2RheSgkZXZlbnQpXCJcclxuICAgICAgPjwvY2FsZW5kYXItZm9vdGVyPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICA8IS0tIFJhbmdlIE9OTFk6IFJhbmdlIFF1aWNrIFNlbGVjdG9yIC0tPlxyXG4gICAgPG5nLXRlbXBsYXRlICN0cGxSYW5nZVF1aWNrU2VsZWN0b3I+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBuYW1lIG9mIGdldE9iamVjdEtleXMocmFuZ2VzKVwiXHJcbiAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcHJlc2V0XCJcclxuICAgICAgICAoY2xpY2spPVwib25DbGlja1ByZXNldFJhbmdlKHJhbmdlcyFbbmFtZV0pXCJcclxuICAgICAgICAobW91c2VlbnRlcik9XCJvbkhvdmVyUHJlc2V0UmFuZ2UocmFuZ2VzIVtuYW1lXSlcIlxyXG4gICAgICAgIChtb3VzZWxlYXZlKT1cIm9uUHJlc2V0UmFuZ2VNb3VzZUxlYXZlKClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtdGFnIGFudC10YWctYmx1ZVwiPnt7IG5hbWUgfX08L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhtb3VzZWRvd24pJzogJ29uTW91c2Vkb3duKCRldmVudCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBpc1JhbmdlITogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93V2VlayE6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdGltZWxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBsb2NhbGUhOiBOekNhbGVuZGFySTE4bkludGVyZmFjZSB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU/OiBEaXNhYmxlZERhdGVGbjtcclxuICBASW5wdXQoKSBkaXNhYmxlZFRpbWU/OiBEaXNhYmxlZFRpbWVGbjsgLy8gVGhpcyB3aWxsIGxlYWQgdG8gcmVidWlsZCB0aW1lIG9wdGlvbnNcclxuICBASW5wdXQoKSBzaG93VG9kYXkhOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dOb3chOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dUaW1lITogU3VwcG9ydFRpbWVPcHRpb25zIHwgYm9vbGVhbjtcclxuICBASW5wdXQoKSBleHRyYUZvb3Rlcj86IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJhbmdlcz86IFByZXNldFJhbmdlcztcclxuICBASW5wdXQoKSBkYXRlUmVuZGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8RGF0ZT4gfCBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIHBhbmVsTW9kZSE6IE56RGF0ZU1vZGUgfCBOekRhdGVNb2RlW107XHJcbiAgQElucHV0KCkgZGVmYXVsdFBpY2tlclZhbHVlITogQ29tcGF0aWJsZURhdGUgfCB1bmRlZmluZWQgfCBudWxsO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBwYW5lbE1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56RGF0ZU1vZGUgfCBOekRhdGVNb2RlW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNhbGVuZGFyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlVmFsdWU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlc3VsdE9rID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpOyAvLyBFbWl0dGVkIHdoZW4gZG9uZSB3aXRoIGRhdGUgc2VsZWN0aW5nXHJcbiAgQElucHV0KCkgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSBQUkVGSVhfQ0xBU1M7XHJcbiAgZW5kUGFuZWxNb2RlOiBOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdID0gJ2RhdGUnO1xyXG4gIHRpbWVPcHRpb25zOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBTdXBwb3J0VGltZU9wdGlvbnNbXSB8IG51bGwgPSBudWxsO1xyXG4gIGhvdmVyVmFsdWU6IFNpbmdsZVZhbHVlW10gPSBbXTsgLy8gUmFuZ2UgT05MWVxyXG4gIGNoZWNrZWRQYXJ0QXJyOiBib29sZWFuW10gPSBbZmFsc2UsIGZhbHNlXTtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByaXZhdGUgX3Nob3dXZWVrQ3VzdG9tID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKVxyXG4gIHNldCBzaG93V2Vla0N1c3RvbSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2hvd1dlZWtDdXN0b20gPSAoKCFBcnJheS5pc0FycmF5KHRoaXMucGFuZWxNb2RlKSAmJiB0aGlzLnBhbmVsTW9kZSAhPT0gJ3dlZWsnKSB8fFxyXG4gICAgICAoQXJyYXkuaXNBcnJheSh0aGlzLnBhbmVsTW9kZSkgJiYgdGhpcy5wYW5lbE1vZGVbMF0gIT09ICd3ZWVrJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dXZWVrQ3VzdG9tKCkge1xyXG4gICAgcmV0dXJuICgoIUFycmF5LmlzQXJyYXkodGhpcy5wYW5lbE1vZGUpICYmIHRoaXMucGFuZWxNb2RlICE9PSAnd2VlaycpIHx8XHJcbiAgICAgIChBcnJheS5pc0FycmF5KHRoaXMucGFuZWxNb2RlKSAmJiB0aGlzLnBhbmVsTW9kZVswXSAhPT0gJ3dlZWsnKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzVGltZVBpY2tlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMuc2hvd1RpbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzRm9vdGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvd1RvZGF5IHx8IHRoaXMuaGFzVGltZVBpY2tlciB8fCAhIXRoaXMuZXh0cmFGb290ZXIgfHwgISF0aGlzLnJhbmdlcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRlUGlja2VyU2VydmljZTogRGF0ZVBpY2tlclNlcnZpY2UsIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWVDaGFuZ2UkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZURhdGUoKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIC8vIFBhcnNlIHNob3dUaW1lIG9wdGlvbnNcclxuICAgIGlmIChjaGFuZ2VzLnNob3dUaW1lIHx8IGNoYW5nZXMuZGlzYWJsZWRUaW1lKSB7XHJcbiAgICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgICAgdGhpcy5idWlsZFRpbWVPcHRpb25zKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLnBhbmVsTW9kZSkge1xyXG4gICAgICB0aGlzLmVuZFBhbmVsTW9kZSA9IHRoaXMucGFuZWxNb2RlO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuZGVmYXVsdFBpY2tlclZhbHVlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlRGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBY3RpdmVEYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgYWN0aXZlRGF0ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaGFzVmFsdWUoKVxyXG4gICAgICA/IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWVcclxuICAgICAgOiB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLm1ha2VWYWx1ZSh0aGlzLmRlZmF1bHRQaWNrZXJWYWx1ZSEpO1xyXG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRBY3RpdmVEYXRlKGFjdGl2ZURhdGUsIHRoaXMuaGFzVGltZVBpY2tlciwgdGhpcy5nZXRQYW5lbE1vZGUodGhpcy5lbmRQYW5lbE1vZGUpIGFzIE5vcm1hbGl6ZWRNb2RlKTtcclxuICB9XHJcblxyXG4gIGluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrZWRQYXJ0QXJyID0gW2ZhbHNlLCBmYWxzZV07XHJcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZURhdGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXZlbnQgaW5wdXQgbG9zaW5nIGZvY3VzIHdoZW4gY2xpY2sgcGFuZWxcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tPaygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlucHV0SW5kZXggPSB7IGxlZnQ6IDAsIHJpZ2h0OiAxIH1bdGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dF07XHJcbiAgICBjb25zdCB2YWx1ZTogQ2FuZHlEYXRlID0gdGhpcy5pc1JhbmdlXHJcbiAgICAgID8gKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlW10pW2lucHV0SW5kZXhdXHJcbiAgICAgIDogKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlKTtcclxuICAgIHRoaXMuY2hhbmdlVmFsdWVGcm9tU2VsZWN0KHZhbHVlKTtcclxuICAgIHRoaXMucmVzdWx0T2suZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja1RvZGF5KHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmFsdWVGcm9tU2VsZWN0KHZhbHVlLCAhdGhpcy5zaG93VGltZSk7XHJcbiAgfVxyXG5cclxuICBvbkNlbGxIb3Zlcih2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNSYW5nZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBvdGhlcklucHV0SW5kZXggPSB7IGxlZnQ6IDEsIHJpZ2h0OiAwIH1bdGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dF07XHJcbiAgICBjb25zdCBiYXNlID0gKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlW10pW290aGVySW5wdXRJbmRleF0hO1xyXG4gICAgaWYgKGJhc2UpIHtcclxuICAgICAgaWYgKGJhc2UuaXNCZWZvcmVEYXkodmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gW2Jhc2UsIHZhbHVlXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhvdmVyVmFsdWUgPSBbdmFsdWUsIGJhc2VdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBhbmVsTW9kZUNoYW5nZShtb2RlOiBOekRhdGVNb2RlLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KHBhcnRUeXBlKTtcclxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbE1vZGUgPSBbbW9kZSwgdGhpcy5wYW5lbE1vZGVbMV1dIGFzIE56RGF0ZU1vZGVbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBhbmVsTW9kZSA9IFt0aGlzLnBhbmVsTW9kZVswXSwgbW9kZV0gYXMgTnpEYXRlTW9kZVtdO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBhbmVsTW9kZSA9IG1vZGU7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KHRoaXMucGFuZWxNb2RlKTtcclxuICB9XHJcblxyXG4gIG9uQWN0aXZlRGF0ZUNoYW5nZSh2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0VHlwZTogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCBhY3RpdmVEYXRlOiBTaW5nbGVWYWx1ZVtdID0gW107XHJcbiAgICAgIGFjdGl2ZURhdGVbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSldID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0QWN0aXZlRGF0ZShcclxuICAgICAgICBhY3RpdmVEYXRlLFxyXG4gICAgICAgIHRoaXMuaGFzVGltZVBpY2tlcixcclxuICAgICAgICB0aGlzLmdldFBhbmVsTW9kZSh0aGlzLmVuZFBhbmVsTW9kZSwgcGFydFR5cGUpIGFzIE5vcm1hbGl6ZWRNb2RlXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldEFjdGl2ZURhdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RUaW1lKHZhbHVlOiBDYW5keURhdGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGNsb25lRGF0ZSh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlKSBhcyBTaW5nbGVWYWx1ZVtdO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZ2V0QWN0aXZlSW5kZXgocGFydFR5cGUpO1xyXG4gICAgICBuZXdWYWx1ZVtpbmRleF0gPSB0aGlzLm92ZXJyaWRlSG1zKHZhbHVlLCBuZXdWYWx1ZVtpbmRleF0pO1xyXG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5vdmVycmlkZUhtcyh2YWx1ZSwgdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSBhcyBDYW5keURhdGUpO1xyXG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKG5ld1ZhbHVlKTsgLy8gSWYgbm90IHNlbGVjdCBhIGRhdGUgY3VycmVudGx5LCB1c2UgdG9kYXlcclxuICAgIH1cclxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5wdXRQYXJ0Q2hhbmdlJC5uZXh0KG51bGwpO1xyXG4gICAgdGhpcy5idWlsZFRpbWVPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VWYWx1ZUZyb21TZWxlY3QodmFsdWU6IENhbmR5RGF0ZSwgZW1pdFZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZFZhbHVlOiBTaW5nbGVWYWx1ZVtdID0gY2xvbmVEYXRlKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUpIGFzIENhbmR5RGF0ZVtdO1xyXG4gICAgICBjb25zdCBjaGVja2VkUGFydDogUmFuZ2VQYXJ0VHlwZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXQ7XHJcbiAgICAgIGxldCBuZXh0UGFydDogUmFuZ2VQYXJ0VHlwZSA9IGNoZWNrZWRQYXJ0O1xyXG5cclxuICAgICAgc2VsZWN0ZWRWYWx1ZVt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KGNoZWNrZWRQYXJ0KV0gPSB2YWx1ZTtcclxuICAgICAgdGhpcy5jaGVja2VkUGFydEFyclt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KGNoZWNrZWRQYXJ0KV0gPSB0cnVlO1xyXG4gICAgICB0aGlzLmhvdmVyVmFsdWUgPSBzZWxlY3RlZFZhbHVlO1xyXG5cclxuICAgICAgaWYgKGVtaXRWYWx1ZSkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGlmIHNvcnQgb3JkZXIgaXMgd3JvbmcsIGNsZWFyIHRoZSBvdGhlciBwYXJ0J3MgdmFsdWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgaXNXcm9uZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh3cm9uZ1NvcnRPcmRlcihzZWxlY3RlZFZhbHVlKSkge1xyXG4gICAgICAgICAgaXNXcm9uZyA9IHRydWU7XHJcbiAgICAgICAgICBuZXh0UGFydCA9IHRoaXMucmV2ZXJzZWRQYXJ0KGNoZWNrZWRQYXJ0KTtcclxuICAgICAgICAgIHNlbGVjdGVkVmFsdWVbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChuZXh0UGFydCldID0gbnVsbDtcclxuICAgICAgICAgIHRoaXMuY2hlY2tlZFBhcnRBcnJbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChuZXh0UGFydCldID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKHNlbGVjdGVkVmFsdWUpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiByYW5nZSBkYXRlIHVzdWFsbHkgc2VsZWN0ZWQgcGFpcmVkLFxyXG4gICAgICAgICAqIHNvIHdlIGVtaXQgdGhlIGRhdGUgdmFsdWUgb25seSBib3RoIGRhdGUgaXMgYWxsb3dlZCBhbmQgYm90aCBwYXJ0IGFyZSBjaGVja2VkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKCh0aGlzLmlzQm90aEFsbG93ZWQoc2VsZWN0ZWRWYWx1ZSkgJiYgdGhpcy5jaGVja2VkUGFydEFyclswXSAmJiB0aGlzLmNoZWNrZWRQYXJ0QXJyWzFdKSB8fCAoc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiAxICYmICFpc1dyb25nICYmIHNlbGVjdGVkVmFsdWVbMF0gIT09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgICAgIHRoaXMuY2FsZW5kYXJDaGFuZ2UuZW1pdChzZWxlY3RlZFZhbHVlKTtcclxuICAgICAgICAgIHRoaXMuY2xlYXJIb3ZlclZhbHVlKCk7XHJcbiAgICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmVtaXRWYWx1ZSQubmV4dCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FsbG93ZWQoc2VsZWN0ZWRWYWx1ZSkpIHtcclxuICAgICAgICAgIG5leHRQYXJ0ID0gdGhpcy5yZXZlcnNlZFBhcnQoY2hlY2tlZFBhcnQpO1xyXG4gICAgICAgICAgdGhpcy5jYWxlbmRhckNoYW5nZS5lbWl0KFt2YWx1ZS5jbG9uZSgpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0VmFsdWUoc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbnB1dFBhcnRDaGFuZ2UkLm5leHQobmV4dFBhcnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5wdXRQYXJ0Q2hhbmdlJC5uZXh0KG51bGwpO1xyXG5cclxuICAgICAgaWYgKGVtaXRWYWx1ZSAmJiB0aGlzLmlzQWxsb3dlZCh2YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmVtaXRWYWx1ZSQubmV4dCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXZlcnNlZFBhcnQocGFydDogUmFuZ2VQYXJ0VHlwZSk6IFJhbmdlUGFydFR5cGUge1xyXG4gICAgcmV0dXJuIHBhcnQgPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XHJcbiAgfVxyXG5cclxuICBnZXRQYW5lbE1vZGUocGFuZWxNb2RlOiBOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBOekRhdGVNb2RlIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuIHBhbmVsTW9kZVt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KHBhcnRUeXBlKV0gYXMgTnpEYXRlTW9kZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBwYW5lbE1vZGUgYXMgTnpEYXRlTW9kZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEdldCBzaW5nbGUgdmFsdWUgb3IgcGFydCB2YWx1ZSBvZiBhIHJhbmdlXHJcbiAgZ2V0VmFsdWUocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogQ2FuZHlEYXRlIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuICgodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSBhcyBDYW5keURhdGVbXSkgfHwgW10pW3RoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZ2V0QWN0aXZlSW5kZXgocGFydFR5cGUpXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFjdGl2ZURhdGUocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogQ2FuZHlEYXRlIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZURhdGUgYXMgQ2FuZHlEYXRlW10pW3RoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZ2V0QWN0aXZlSW5kZXgocGFydFR5cGUpXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZURhdGUgYXMgQ2FuZHlEYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzYWJsZWRTdGFydFRpbWU6IERpc2FibGVkVGltZUZuID0gKHZhbHVlOiBEYXRlIHwgRGF0ZVtdKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZFRpbWUgJiYgdGhpcy5kaXNhYmxlZFRpbWUodmFsdWUsICdzdGFydCcpO1xyXG4gIH07XHJcblxyXG4gIGRpc2FibGVkRW5kVGltZTogRGlzYWJsZWRUaW1lRm4gPSAodmFsdWU6IERhdGUgfCBEYXRlW10pID0+IHtcclxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkVGltZSAmJiB0aGlzLmRpc2FibGVkVGltZSh2YWx1ZSwgJ2VuZCcpO1xyXG4gIH07XHJcblxyXG4gIGlzT25lQWxsb3dlZChzZWxlY3RlZFZhbHVlOiBTaW5nbGVWYWx1ZVtdKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZ2V0QWN0aXZlSW5kZXgoKTtcclxuICAgIGNvbnN0IGRpc2FibGVkVGltZUFyciA9IFt0aGlzLmRpc2FibGVkU3RhcnRUaW1lLCB0aGlzLmRpc2FibGVkRW5kVGltZV07XHJcbiAgICByZXR1cm4gaXNBbGxvd2VkRGF0ZShzZWxlY3RlZFZhbHVlW2luZGV4XSEsIHRoaXMuZGlzYWJsZWREYXRlLCBkaXNhYmxlZFRpbWVBcnJbaW5kZXhdKTtcclxuICB9XHJcblxyXG4gIGlzQm90aEFsbG93ZWQoc2VsZWN0ZWRWYWx1ZTogU2luZ2xlVmFsdWVbXSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgaXNBbGxvd2VkRGF0ZShzZWxlY3RlZFZhbHVlWzBdISwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRTdGFydFRpbWUpICYmXHJcbiAgICAgIGlzQWxsb3dlZERhdGUoc2VsZWN0ZWRWYWx1ZVsxXSEsIHRoaXMuZGlzYWJsZWREYXRlLCB0aGlzLmRpc2FibGVkRW5kVGltZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpc0FsbG93ZWQodmFsdWU6IENvbXBhdGlibGVWYWx1ZSwgaXNCb3RoOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuIGlzQm90aCA/IHRoaXMuaXNCb3RoQWxsb3dlZCh2YWx1ZSBhcyBDYW5keURhdGVbXSkgOiB0aGlzLmlzT25lQWxsb3dlZCh2YWx1ZSBhcyBDYW5keURhdGVbXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaXNBbGxvd2VkRGF0ZSh2YWx1ZSBhcyBDYW5keURhdGUsIHRoaXMuZGlzYWJsZWREYXRlLCB0aGlzLmRpc2FibGVkVGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUaW1lT3B0aW9ucyhwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBudWxsIHtcclxuICAgIGlmICh0aGlzLnNob3dUaW1lICYmIHRoaXMudGltZU9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGltZU9wdGlvbnMgaW5zdGFuY2VvZiBBcnJheSA/IHRoaXMudGltZU9wdGlvbnNbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSldIDogdGhpcy50aW1lT3B0aW9ucztcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja1ByZXNldFJhbmdlKHZhbDogUHJlc2V0UmFuZ2VzW2tleW9mIFByZXNldFJhbmdlc10pOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHZhbCgpIDogdmFsO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0VmFsdWUoW25ldyBDYW5keURhdGUodmFsdWVbMF0pLCBuZXcgQ2FuZHlEYXRlKHZhbHVlWzFdKV0pO1xyXG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmVtaXRWYWx1ZSQubmV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QcmVzZXRSYW5nZU1vdXNlTGVhdmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFySG92ZXJWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Ib3ZlclByZXNldFJhbmdlKHZhbDogUHJlc2V0UmFuZ2VzW2tleW9mIFByZXNldFJhbmdlc10pOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFtuZXcgQ2FuZHlEYXRlKHZhbFswXSksIG5ldyBDYW5keURhdGUodmFsWzFdKV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRPYmplY3RLZXlzKG9iaj86IFByZXNldFJhbmdlcyk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopIDogW107XHJcbiAgfVxyXG5cclxuICBzaG93KHBhcnRUeXBlOiBSYW5nZVBhcnRUeXBlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBoaWRlID0gdGhpcy5zaG93VGltZSAmJiB0aGlzLmlzUmFuZ2UgJiYgdGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dCAhPT0gcGFydFR5cGU7XHJcbiAgICByZXR1cm4gIWhpZGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFySG92ZXJWYWx1ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZFRpbWVPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2hvd1RpbWUpIHtcclxuICAgICAgY29uc3Qgc2hvd1RpbWUgPSB0eXBlb2YgdGhpcy5zaG93VGltZSA9PT0gJ29iamVjdCcgPyB0aGlzLnNob3dUaW1lIDoge307XHJcbiAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlW107XHJcbiAgICAgICAgdGhpcy50aW1lT3B0aW9ucyA9IFt0aGlzLm92ZXJyaWRlVGltZU9wdGlvbnMoc2hvd1RpbWUsIHZhbHVlWzBdLCAnc3RhcnQnKSwgdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB2YWx1ZVsxXSwgJ2VuZCcpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRpbWVPcHRpb25zID0gdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGltZU9wdGlvbnMgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvdmVycmlkZVRpbWVPcHRpb25zKG9yaWdpbjogU3VwcG9ydFRpbWVPcHRpb25zLCB2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0aWFsPzogRGlzYWJsZWRUaW1lUGFydGlhbCk6IFN1cHBvcnRUaW1lT3B0aW9ucyB7XHJcbiAgICBsZXQgZGlzYWJsZWRUaW1lRm47XHJcbiAgICBpZiAocGFydGlhbCkge1xyXG4gICAgICBkaXNhYmxlZFRpbWVGbiA9IHBhcnRpYWwgPT09ICdzdGFydCcgPyB0aGlzLmRpc2FibGVkU3RhcnRUaW1lIDogdGhpcy5kaXNhYmxlZEVuZFRpbWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNhYmxlZFRpbWVGbiA9IHRoaXMuZGlzYWJsZWRUaW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgLi4ub3JpZ2luLCAuLi5nZXRUaW1lQ29uZmlnKHZhbHVlLCBkaXNhYmxlZFRpbWVGbikgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3ZlcnJpZGVIbXMobmV3VmFsdWU6IENhbmR5RGF0ZSB8IG51bGwsIG9sZFZhbHVlOiBDYW5keURhdGUgfCBudWxsKTogQ2FuZHlEYXRlIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50XHJcbiAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlIHx8IG5ldyBDYW5keURhdGUoKTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50XHJcbiAgICBvbGRWYWx1ZSA9IG9sZFZhbHVlIHx8IG5ldyBDYW5keURhdGUoKTtcclxuICAgIHJldHVybiBvbGRWYWx1ZS5zZXRIbXMobmV3VmFsdWUuZ2V0SG91cnMoKSwgbmV3VmFsdWUuZ2V0TWludXRlcygpLCBuZXdWYWx1ZS5nZXRTZWNvbmRzKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=