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
                if (wrongSortOrder(selectedValue)) {
                    nextPart = this.reversedPart(checkedPart);
                    selectedValue[this.datePickerService.getActiveIndex(nextPart)] = null;
                    this.checkedPartArr[this.datePickerService.getActiveIndex(nextPart)] = false;
                }
                this.datePickerService.setValue(selectedValue);
                /**
                 * range date usually selected paired,
                 * so we emit the date value only both date is allowed and both part are checked
                 */
                if (this.isBothAllowed(selectedValue) && this.checkedPartArr[0] && this.checkedPartArr[1]) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBZ0QsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHN0gsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFZM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztJQWMzQyx3QkFBOEY7OztJQUM5Rix3QkFBK0Y7OztJQUVqRyx3QkFBMkQ7Ozs7O0lBUmpFLDZCQUFnRDtJQUM5QywyQkFBOEU7SUFDNUUsc0JBQThGO0lBQzlGLDJCQUE2QyxVQUFBO0lBRXpDLHlHQUE4RjtJQUM5Rix5R0FBK0Y7SUFDakcsaUJBQU07SUFDTix5R0FBMkQ7SUFDN0QsaUJBQU0sRUFBQTtJQUVWLDBCQUFlOzs7OztJQVZSLGVBQXdFO0lBQXhFLDJHQUF3RTtJQUN0RSxlQUFtQztJQUFuQywrREFBbUM7SUFBQywwR0FBOEM7SUFDbEYsZUFBdUM7SUFBdkMsbUVBQXVDO0lBQ3JDLGVBQThCO0lBQTlCLDBEQUE4QjtJQUNsQixlQUFpQztJQUFqQyxzQ0FBaUMs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O3VGQWpDVSx1QkFBdUI7Y0E3Rm5DLFNBQVM7ZUFBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0ZUO2dCQUNELElBQUksRUFBRTtvQkFDSixhQUFhLEVBQUUscUJBQXFCO2lCQUNyQzthQUNGO29HQUVVLE9BQU87a0JBQWYsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNhLGVBQWU7a0JBQWpDLE1BQU07WUFDWSxjQUFjO2tCQUFoQyxNQUFNO1lBQ1ksUUFBUTtrQkFBMUIsTUFBTTtZQUNFLEdBQUc7a0JBQVgsS0FBSztZQVlGLGNBQWM7a0JBRGpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlLCBjbG9uZURhdGUsIENvbXBhdGlibGVWYWx1ZSwgTm9ybWFsaXplZE1vZGUsIFNpbmdsZVZhbHVlLCB3cm9uZ1NvcnRPcmRlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcclxuaW1wb3J0IHsgRnVuY3Rpb25Qcm9wIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2RhdGUtcGlja2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQge1xyXG4gIENvbXBhdGlibGVEYXRlLFxyXG4gIERpc2FibGVkRGF0ZUZuLFxyXG4gIERpc2FibGVkVGltZUZuLFxyXG4gIERpc2FibGVkVGltZVBhcnRpYWwsXHJcbiAgTnpEYXRlTW9kZSxcclxuICBQcmVzZXRSYW5nZXMsXHJcbiAgUmFuZ2VQYXJ0VHlwZSxcclxuICBTdXBwb3J0VGltZU9wdGlvbnNcclxufSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcclxuaW1wb3J0IHsgZ2V0VGltZUNvbmZpZywgaXNBbGxvd2VkRGF0ZSwgUFJFRklYX0NMQVNTIH0gZnJvbSAnLi91dGlsJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdkYXRlLXJhbmdlLXBvcHVwJyxcclxuICBleHBvcnRBczogJ2RhdGVSYW5nZVBvcHVwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzUmFuZ2U7IGVsc2Ugc2luZ2xlUGFuZWxcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1yYW5nZS13cmFwcGVyIHt7IHByZWZpeENscyB9fS1kYXRlLXJhbmdlLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXJhbmdlLWFycm93XCIgW3N0eWxlLmxlZnQucHhdPVwiZGF0ZVBpY2tlclNlcnZpY2U/LmFycm93TGVmdFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcGFuZWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXBhbmVsc1wiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsSW5uZXJQb3B1cDsgY29udGV4dDogeyBwYXJ0VHlwZTogJ2xlZnQnIH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbElubmVyUG9wdXA7IGNvbnRleHQ6IHsgcGFydFR5cGU6ICdyaWdodCcgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsRm9vdGVyXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctdGVtcGxhdGUgI3NpbmdsZVBhbmVsPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcGFuZWwtY29udGFpbmVyIHt7IHNob3dXZWVrID8gcHJlZml4Q2xzICsgJy13ZWVrLW51bWJlcicgOiAnJyB9fSB7e1xyXG4gICAgICAgICAgaGFzVGltZVBpY2tlciA/IHByZWZpeENscyArICctdGltZScgOiAnJ1xyXG4gICAgICAgIH19IHt7IGlzUmFuZ2UgPyBwcmVmaXhDbHMgKyAnLXJhbmdlJyA6ICcnIH19XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcGFuZWxcIiBbY2xhc3MuYW50LXBpY2tlci1wYW5lbC1ydGxdPVwiZGlyID09PSAncnRsJ1wiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgIDwhLS0gU2luZ2xlIE9OTFkgLS0+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsSW5uZXJQb3B1cFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbEZvb3RlclwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPG5nLXRlbXBsYXRlICN0cGxJbm5lclBvcHVwIGxldC1wYXJ0VHlwZT1cInBhcnRUeXBlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcGFuZWxcIiBbY2xhc3MuYW50LXBpY2tlci1wYW5lbC1ydGxdPVwiZGlyID09PSAncnRsJ1wiIFtzdHlsZS5kaXNwbGF5XT1cInNob3cocGFydFR5cGUpID8gJ2Jsb2NrJyA6ICdub25lJ1wiPlxyXG4gICAgICAgIDwhLS0gVE9ETyhAd2VucWk3MykgW3NlbGVjdGVkVmFsdWVdIFtob3ZlclZhbHVlXSB0eXBlcy0tPlxyXG4gICAgICAgIDxpbm5lci1wb3B1cFxyXG4gICAgICAgICAgW3Nob3dXZWVrXT1cInNob3dXZWVrXCJcclxuICAgICAgICAgIFtzaG93V2Vla0N1c3RvbV09XCJzaG93V2Vla0N1c3RvbVwiXHJcbiAgICAgICAgICBbZW5kUGFuZWxNb2RlXT1cImdldFBhbmVsTW9kZShlbmRQYW5lbE1vZGUsIHBhcnRUeXBlKVwiXHJcbiAgICAgICAgICBbcGFydFR5cGVdPVwicGFydFR5cGVcIlxyXG4gICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGUhXCJcclxuICAgICAgICAgIFtzaG93VGltZVBpY2tlcl09XCJoYXNUaW1lUGlja2VyXCJcclxuICAgICAgICAgIFt0aW1lT3B0aW9uc109XCJnZXRUaW1lT3B0aW9ucyhwYXJ0VHlwZSlcIlxyXG4gICAgICAgICAgW3BhbmVsTW9kZV09XCJnZXRQYW5lbE1vZGUocGFuZWxNb2RlLCBwYXJ0VHlwZSlcIlxyXG4gICAgICAgICAgKHBhbmVsTW9kZUNoYW5nZSk9XCJvblBhbmVsTW9kZUNoYW5nZSgkZXZlbnQsIHBhcnRUeXBlKVwiXHJcbiAgICAgICAgICBbYWN0aXZlRGF0ZV09XCJnZXRBY3RpdmVEYXRlKHBhcnRUeXBlKVwiXHJcbiAgICAgICAgICBbdmFsdWVdPVwiZ2V0VmFsdWUocGFydFR5cGUpXCJcclxuICAgICAgICAgIFtkaXNhYmxlZERhdGVdPVwiZGlzYWJsZWREYXRlXCJcclxuICAgICAgICAgIFtkYXRlUmVuZGVyXT1cImRhdGVSZW5kZXJcIlxyXG4gICAgICAgICAgW3NlbGVjdGVkVmFsdWVdPVwiJGFueShkYXRlUGlja2VyU2VydmljZT8udmFsdWUpXCJcclxuICAgICAgICAgIFtob3ZlclZhbHVlXT1cIiRhbnkoaG92ZXJWYWx1ZSlcIlxyXG4gICAgICAgICAgKGNlbGxIb3Zlcik9XCJvbkNlbGxIb3ZlcigkZXZlbnQpXCJcclxuICAgICAgICAgIChzZWxlY3REYXRlKT1cImNoYW5nZVZhbHVlRnJvbVNlbGVjdCgkZXZlbnQsICFzaG93VGltZSlcIlxyXG4gICAgICAgICAgKHNlbGVjdFRpbWUpPVwib25TZWxlY3RUaW1lKCRldmVudCwgcGFydFR5cGUpXCJcclxuICAgICAgICAgIChoZWFkZXJDaGFuZ2UpPVwib25BY3RpdmVEYXRlQ2hhbmdlKCRldmVudCwgcGFydFR5cGUpXCJcclxuICAgICAgICA+PC9pbm5lci1wb3B1cD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgIDxuZy10ZW1wbGF0ZSAjdHBsRm9vdGVyPlxyXG4gICAgICA8Y2FsZW5kYXItZm9vdGVyXHJcbiAgICAgICAgKm5nSWY9XCJoYXNGb290ZXJcIlxyXG4gICAgICAgIFtsb2NhbGVdPVwibG9jYWxlIVwiXHJcbiAgICAgICAgW2lzUmFuZ2VdPVwiaXNSYW5nZVwiXHJcbiAgICAgICAgW3Nob3dUb2RheV09XCJzaG93VG9kYXlcIlxyXG4gICAgICAgIFtzaG93Tm93XT1cInNob3dOb3dcIlxyXG4gICAgICAgIFtoYXNUaW1lUGlja2VyXT1cImhhc1RpbWVQaWNrZXJcIlxyXG4gICAgICAgIFtva0Rpc2FibGVkXT1cIiFpc0FsbG93ZWQoJGFueShkYXRlUGlja2VyU2VydmljZT8udmFsdWUpKVwiXHJcbiAgICAgICAgW2V4dHJhRm9vdGVyXT1cImV4dHJhRm9vdGVyXCJcclxuICAgICAgICBbcmFuZ2VRdWlja1NlbGVjdG9yXT1cInJhbmdlcyA/IHRwbFJhbmdlUXVpY2tTZWxlY3RvciA6IG51bGxcIlxyXG4gICAgICAgIChjbGlja09rKT1cIm9uQ2xpY2tPaygpXCJcclxuICAgICAgICAoY2xpY2tUb2RheSk9XCJvbkNsaWNrVG9kYXkoJGV2ZW50KVwiXHJcbiAgICAgID48L2NhbGVuZGFyLWZvb3Rlcj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPCEtLSBSYW5nZSBPTkxZOiBSYW5nZSBRdWljayBTZWxlY3RvciAtLT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjdHBsUmFuZ2VRdWlja1NlbGVjdG9yPlxyXG4gICAgICA8bGlcclxuICAgICAgICAqbmdGb3I9XCJsZXQgbmFtZSBvZiBnZXRPYmplY3RLZXlzKHJhbmdlcylcIlxyXG4gICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXByZXNldFwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tQcmVzZXRSYW5nZShyYW5nZXMhW25hbWVdKVwiXHJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwib25Ib3ZlclByZXNldFJhbmdlKHJhbmdlcyFbbmFtZV0pXCJcclxuICAgICAgICAobW91c2VsZWF2ZSk9XCJvblByZXNldFJhbmdlTW91c2VMZWF2ZSgpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXRhZyBhbnQtdGFnLWJsdWVcIj57eyBuYW1lIH19PC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgICcobW91c2Vkb3duKSc6ICdvbk1vdXNlZG93bigkZXZlbnQpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgaXNSYW5nZSE6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd1dlZWshOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRpbWVsaW5lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbG9jYWxlITogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlPzogRGlzYWJsZWREYXRlRm47XHJcbiAgQElucHV0KCkgZGlzYWJsZWRUaW1lPzogRGlzYWJsZWRUaW1lRm47IC8vIFRoaXMgd2lsbCBsZWFkIHRvIHJlYnVpbGQgdGltZSBvcHRpb25zXHJcbiAgQElucHV0KCkgc2hvd1RvZGF5ITogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93Tm93ITogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93VGltZSE6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZXh0cmFGb290ZXI/OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcclxuICBASW5wdXQoKSByYW5nZXM/OiBQcmVzZXRSYW5nZXM7XHJcbiAgQElucHV0KCkgZGF0ZVJlbmRlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPERhdGU+IHwgRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBwYW5lbE1vZGUhOiBOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRQaWNrZXJWYWx1ZSE6IENvbXBhdGlibGVEYXRlIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjYWxlbmRhckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZVZhbHVlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSByZXN1bHRPayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gRW1pdHRlZCB3aGVuIGRvbmUgd2l0aCBkYXRlIHNlbGVjdGluZ1xyXG4gIEBJbnB1dCgpIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcblxyXG4gIHByZWZpeENsczogc3RyaW5nID0gUFJFRklYX0NMQVNTO1xyXG4gIGVuZFBhbmVsTW9kZTogTnpEYXRlTW9kZSB8IE56RGF0ZU1vZGVbXSA9ICdkYXRlJztcclxuICB0aW1lT3B0aW9uczogU3VwcG9ydFRpbWVPcHRpb25zIHwgU3VwcG9ydFRpbWVPcHRpb25zW10gfCBudWxsID0gbnVsbDtcclxuICBob3ZlclZhbHVlOiBTaW5nbGVWYWx1ZVtdID0gW107IC8vIFJhbmdlIE9OTFlcclxuICBjaGVja2VkUGFydEFycjogYm9vbGVhbltdID0gW2ZhbHNlLCBmYWxzZV07XHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIF9zaG93V2Vla0N1c3RvbSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKClcclxuICBzZXQgc2hvd1dlZWtDdXN0b20odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Nob3dXZWVrQ3VzdG9tID0gKCghQXJyYXkuaXNBcnJheSh0aGlzLnBhbmVsTW9kZSkgJiYgdGhpcy5wYW5lbE1vZGUgIT09ICd3ZWVrJykgfHxcclxuICAgICAgKEFycmF5LmlzQXJyYXkodGhpcy5wYW5lbE1vZGUpICYmIHRoaXMucGFuZWxNb2RlWzBdICE9PSAnd2VlaycpKTtcclxuICB9XHJcblxyXG4gIGdldCBzaG93V2Vla0N1c3RvbSgpIHtcclxuICAgIHJldHVybiAoKCFBcnJheS5pc0FycmF5KHRoaXMucGFuZWxNb2RlKSAmJiB0aGlzLnBhbmVsTW9kZSAhPT0gJ3dlZWsnKSB8fFxyXG4gICAgICAoQXJyYXkuaXNBcnJheSh0aGlzLnBhbmVsTW9kZSkgJiYgdGhpcy5wYW5lbE1vZGVbMF0gIT09ICd3ZWVrJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc1RpbWVQaWNrZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLnNob3dUaW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc0Zvb3RlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNob3dUb2RheSB8fCB0aGlzLmhhc1RpbWVQaWNrZXIgfHwgISF0aGlzLmV4dHJhRm9vdGVyIHx8ICEhdGhpcy5yYW5nZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0ZVBpY2tlclNlcnZpY2U6IERhdGVQaWNrZXJTZXJ2aWNlLCBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlQ2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVBY3RpdmVEYXRlKCk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAvLyBQYXJzZSBzaG93VGltZSBvcHRpb25zXHJcbiAgICBpZiAoY2hhbmdlcy5zaG93VGltZSB8fCBjaGFuZ2VzLmRpc2FibGVkVGltZSkge1xyXG4gICAgICBpZiAodGhpcy5zaG93VGltZSkge1xyXG4gICAgICAgIHRoaXMuYnVpbGRUaW1lT3B0aW9ucygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5wYW5lbE1vZGUpIHtcclxuICAgICAgdGhpcy5lbmRQYW5lbE1vZGUgPSB0aGlzLnBhbmVsTW9kZTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLmRlZmF1bHRQaWNrZXJWYWx1ZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZURhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQWN0aXZlRGF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGFjdGl2ZURhdGUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmhhc1ZhbHVlKClcclxuICAgICAgPyB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlXHJcbiAgICAgIDogdGhpcy5kYXRlUGlja2VyU2VydmljZS5tYWtlVmFsdWUodGhpcy5kZWZhdWx0UGlja2VyVmFsdWUhKTtcclxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0QWN0aXZlRGF0ZShhY3RpdmVEYXRlLCB0aGlzLmhhc1RpbWVQaWNrZXIsIHRoaXMuZ2V0UGFuZWxNb2RlKHRoaXMuZW5kUGFuZWxNb2RlKSBhcyBOb3JtYWxpemVkTW9kZSk7XHJcbiAgfVxyXG5cclxuICBpbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2VkUGFydEFyciA9IFtmYWxzZSwgZmFsc2VdO1xyXG4gICAgdGhpcy51cGRhdGVBY3RpdmVEYXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmV2ZW50IGlucHV0IGxvc2luZyBmb2N1cyB3aGVuIGNsaWNrIHBhbmVsXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgb25Nb3VzZWRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrT2soKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbnB1dEluZGV4ID0geyBsZWZ0OiAwLCByaWdodDogMSB9W3RoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXRdO1xyXG4gICAgY29uc3QgdmFsdWU6IENhbmR5RGF0ZSA9IHRoaXMuaXNSYW5nZVxyXG4gICAgICA/ICh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZVtdKVtpbnB1dEluZGV4XVxyXG4gICAgICA6ICh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZSk7XHJcbiAgICB0aGlzLmNoYW5nZVZhbHVlRnJvbVNlbGVjdCh2YWx1ZSk7XHJcbiAgICB0aGlzLnJlc3VsdE9rLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tUb2RheSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVZhbHVlRnJvbVNlbGVjdCh2YWx1ZSwgIXRoaXMuc2hvd1RpbWUpO1xyXG4gIH1cclxuXHJcbiAgb25DZWxsSG92ZXIodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3RoZXJJbnB1dEluZGV4ID0geyBsZWZ0OiAxLCByaWdodDogMCB9W3RoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXRdO1xyXG4gICAgY29uc3QgYmFzZSA9ICh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZVtdKVtvdGhlcklucHV0SW5kZXhdITtcclxuICAgIGlmIChiYXNlKSB7XHJcbiAgICAgIGlmIChiYXNlLmlzQmVmb3JlRGF5KHZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFtiYXNlLCB2YWx1ZV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gW3ZhbHVlLCBiYXNlXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QYW5lbE1vZGVDaGFuZ2UobW9kZTogTnpEYXRlTW9kZSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSk7XHJcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxNb2RlID0gW21vZGUsIHRoaXMucGFuZWxNb2RlWzFdXSBhcyBOekRhdGVNb2RlW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbE1vZGUgPSBbdGhpcy5wYW5lbE1vZGVbMF0sIG1vZGVdIGFzIE56RGF0ZU1vZGVbXTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYW5lbE1vZGUgPSBtb2RlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdCh0aGlzLnBhbmVsTW9kZSk7XHJcbiAgfVxyXG5cclxuICBvbkFjdGl2ZURhdGVDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZSwgcGFydFR5cGU6IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgYWN0aXZlRGF0ZTogU2luZ2xlVmFsdWVbXSA9IFtdO1xyXG4gICAgICBhY3RpdmVEYXRlW3RoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZ2V0QWN0aXZlSW5kZXgocGFydFR5cGUpXSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldEFjdGl2ZURhdGUoXHJcbiAgICAgICAgYWN0aXZlRGF0ZSxcclxuICAgICAgICB0aGlzLmhhc1RpbWVQaWNrZXIsXHJcbiAgICAgICAgdGhpcy5nZXRQYW5lbE1vZGUodGhpcy5lbmRQYW5lbE1vZGUsIHBhcnRUeXBlKSBhcyBOb3JtYWxpemVkTW9kZVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRBY3RpdmVEYXRlKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0VGltZSh2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjbG9uZURhdGUodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkgYXMgU2luZ2xlVmFsdWVbXTtcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KHBhcnRUeXBlKTtcclxuICAgICAgbmV3VmFsdWVbaW5kZXhdID0gdGhpcy5vdmVycmlkZUhtcyh2YWx1ZSwgbmV3VmFsdWVbaW5kZXhdKTtcclxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMub3ZlcnJpZGVIbXModmFsdWUsIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlKTtcclxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZShuZXdWYWx1ZSk7IC8vIElmIG5vdCBzZWxlY3QgYSBkYXRlIGN1cnJlbnRseSwgdXNlIHRvZGF5XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmlucHV0UGFydENoYW5nZSQubmV4dChudWxsKTtcclxuICAgIHRoaXMuYnVpbGRUaW1lT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlVmFsdWVGcm9tU2VsZWN0KHZhbHVlOiBDYW5keURhdGUsIGVtaXRWYWx1ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZTogU2luZ2xlVmFsdWVbXSA9IGNsb25lRGF0ZSh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlKSBhcyBDYW5keURhdGVbXTtcclxuICAgICAgY29uc3QgY2hlY2tlZFBhcnQ6IFJhbmdlUGFydFR5cGUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0O1xyXG4gICAgICBsZXQgbmV4dFBhcnQ6IFJhbmdlUGFydFR5cGUgPSBjaGVja2VkUGFydDtcclxuXHJcbiAgICAgIHNlbGVjdGVkVmFsdWVbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChjaGVja2VkUGFydCldID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuY2hlY2tlZFBhcnRBcnJbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChjaGVja2VkUGFydCldID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ob3ZlclZhbHVlID0gc2VsZWN0ZWRWYWx1ZTtcclxuXHJcbiAgICAgIGlmIChlbWl0VmFsdWUpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBpZiBzb3J0IG9yZGVyIGlzIHdyb25nLCBjbGVhciB0aGUgb3RoZXIgcGFydCdzIHZhbHVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKHdyb25nU29ydE9yZGVyKHNlbGVjdGVkVmFsdWUpKSB7XHJcbiAgICAgICAgICBuZXh0UGFydCA9IHRoaXMucmV2ZXJzZWRQYXJ0KGNoZWNrZWRQYXJ0KTtcclxuICAgICAgICAgIHNlbGVjdGVkVmFsdWVbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChuZXh0UGFydCldID0gbnVsbDtcclxuICAgICAgICAgIHRoaXMuY2hlY2tlZFBhcnRBcnJbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChuZXh0UGFydCldID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKHNlbGVjdGVkVmFsdWUpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiByYW5nZSBkYXRlIHVzdWFsbHkgc2VsZWN0ZWQgcGFpcmVkLFxyXG4gICAgICAgICAqIHNvIHdlIGVtaXQgdGhlIGRhdGUgdmFsdWUgb25seSBib3RoIGRhdGUgaXMgYWxsb3dlZCBhbmQgYm90aCBwYXJ0IGFyZSBjaGVja2VkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKHRoaXMuaXNCb3RoQWxsb3dlZChzZWxlY3RlZFZhbHVlKSAmJiB0aGlzLmNoZWNrZWRQYXJ0QXJyWzBdICYmIHRoaXMuY2hlY2tlZFBhcnRBcnJbMV0pIHtcclxuICAgICAgICAgIHRoaXMuY2FsZW5kYXJDaGFuZ2UuZW1pdChzZWxlY3RlZFZhbHVlKTtcclxuICAgICAgICAgIHRoaXMuY2xlYXJIb3ZlclZhbHVlKCk7XHJcbiAgICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmVtaXRWYWx1ZSQubmV4dCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FsbG93ZWQoc2VsZWN0ZWRWYWx1ZSkpIHtcclxuICAgICAgICAgIG5leHRQYXJ0ID0gdGhpcy5yZXZlcnNlZFBhcnQoY2hlY2tlZFBhcnQpO1xyXG4gICAgICAgICAgdGhpcy5jYWxlbmRhckNoYW5nZS5lbWl0KFt2YWx1ZS5jbG9uZSgpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0VmFsdWUoc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbnB1dFBhcnRDaGFuZ2UkLm5leHQobmV4dFBhcnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5wdXRQYXJ0Q2hhbmdlJC5uZXh0KG51bGwpO1xyXG5cclxuICAgICAgaWYgKGVtaXRWYWx1ZSAmJiB0aGlzLmlzQWxsb3dlZCh2YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmVtaXRWYWx1ZSQubmV4dCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXZlcnNlZFBhcnQocGFydDogUmFuZ2VQYXJ0VHlwZSk6IFJhbmdlUGFydFR5cGUge1xyXG4gICAgcmV0dXJuIHBhcnQgPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XHJcbiAgfVxyXG5cclxuICBnZXRQYW5lbE1vZGUocGFuZWxNb2RlOiBOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBOekRhdGVNb2RlIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuIHBhbmVsTW9kZVt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KHBhcnRUeXBlKV0gYXMgTnpEYXRlTW9kZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBwYW5lbE1vZGUgYXMgTnpEYXRlTW9kZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEdldCBzaW5nbGUgdmFsdWUgb3IgcGFydCB2YWx1ZSBvZiBhIHJhbmdlXHJcbiAgZ2V0VmFsdWUocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogQ2FuZHlEYXRlIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuICgodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSBhcyBDYW5keURhdGVbXSkgfHwgW10pW3RoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZ2V0QWN0aXZlSW5kZXgocGFydFR5cGUpXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFjdGl2ZURhdGUocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogQ2FuZHlEYXRlIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZURhdGUgYXMgQ2FuZHlEYXRlW10pW3RoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZ2V0QWN0aXZlSW5kZXgocGFydFR5cGUpXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZURhdGUgYXMgQ2FuZHlEYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzYWJsZWRTdGFydFRpbWU6IERpc2FibGVkVGltZUZuID0gKHZhbHVlOiBEYXRlIHwgRGF0ZVtdKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZFRpbWUgJiYgdGhpcy5kaXNhYmxlZFRpbWUodmFsdWUsICdzdGFydCcpO1xyXG4gIH07XHJcblxyXG4gIGRpc2FibGVkRW5kVGltZTogRGlzYWJsZWRUaW1lRm4gPSAodmFsdWU6IERhdGUgfCBEYXRlW10pID0+IHtcclxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkVGltZSAmJiB0aGlzLmRpc2FibGVkVGltZSh2YWx1ZSwgJ2VuZCcpO1xyXG4gIH07XHJcblxyXG4gIGlzT25lQWxsb3dlZChzZWxlY3RlZFZhbHVlOiBTaW5nbGVWYWx1ZVtdKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZ2V0QWN0aXZlSW5kZXgoKTtcclxuICAgIGNvbnN0IGRpc2FibGVkVGltZUFyciA9IFt0aGlzLmRpc2FibGVkU3RhcnRUaW1lLCB0aGlzLmRpc2FibGVkRW5kVGltZV07XHJcbiAgICByZXR1cm4gaXNBbGxvd2VkRGF0ZShzZWxlY3RlZFZhbHVlW2luZGV4XSEsIHRoaXMuZGlzYWJsZWREYXRlLCBkaXNhYmxlZFRpbWVBcnJbaW5kZXhdKTtcclxuICB9XHJcblxyXG4gIGlzQm90aEFsbG93ZWQoc2VsZWN0ZWRWYWx1ZTogU2luZ2xlVmFsdWVbXSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgaXNBbGxvd2VkRGF0ZShzZWxlY3RlZFZhbHVlWzBdISwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRTdGFydFRpbWUpICYmXHJcbiAgICAgIGlzQWxsb3dlZERhdGUoc2VsZWN0ZWRWYWx1ZVsxXSEsIHRoaXMuZGlzYWJsZWREYXRlLCB0aGlzLmRpc2FibGVkRW5kVGltZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpc0FsbG93ZWQodmFsdWU6IENvbXBhdGlibGVWYWx1ZSwgaXNCb3RoOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuIGlzQm90aCA/IHRoaXMuaXNCb3RoQWxsb3dlZCh2YWx1ZSBhcyBDYW5keURhdGVbXSkgOiB0aGlzLmlzT25lQWxsb3dlZCh2YWx1ZSBhcyBDYW5keURhdGVbXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaXNBbGxvd2VkRGF0ZSh2YWx1ZSBhcyBDYW5keURhdGUsIHRoaXMuZGlzYWJsZWREYXRlLCB0aGlzLmRpc2FibGVkVGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUaW1lT3B0aW9ucyhwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBudWxsIHtcclxuICAgIGlmICh0aGlzLnNob3dUaW1lICYmIHRoaXMudGltZU9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGltZU9wdGlvbnMgaW5zdGFuY2VvZiBBcnJheSA/IHRoaXMudGltZU9wdGlvbnNbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSldIDogdGhpcy50aW1lT3B0aW9ucztcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja1ByZXNldFJhbmdlKHZhbDogUHJlc2V0UmFuZ2VzW2tleW9mIFByZXNldFJhbmdlc10pOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHZhbCgpIDogdmFsO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0VmFsdWUoW25ldyBDYW5keURhdGUodmFsdWVbMF0pLCBuZXcgQ2FuZHlEYXRlKHZhbHVlWzFdKV0pO1xyXG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmVtaXRWYWx1ZSQubmV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QcmVzZXRSYW5nZU1vdXNlTGVhdmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFySG92ZXJWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Ib3ZlclByZXNldFJhbmdlKHZhbDogUHJlc2V0UmFuZ2VzW2tleW9mIFByZXNldFJhbmdlc10pOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFtuZXcgQ2FuZHlEYXRlKHZhbFswXSksIG5ldyBDYW5keURhdGUodmFsWzFdKV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRPYmplY3RLZXlzKG9iaj86IFByZXNldFJhbmdlcyk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopIDogW107XHJcbiAgfVxyXG5cclxuICBzaG93KHBhcnRUeXBlOiBSYW5nZVBhcnRUeXBlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBoaWRlID0gdGhpcy5zaG93VGltZSAmJiB0aGlzLmlzUmFuZ2UgJiYgdGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dCAhPT0gcGFydFR5cGU7XHJcbiAgICByZXR1cm4gIWhpZGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFySG92ZXJWYWx1ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZFRpbWVPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2hvd1RpbWUpIHtcclxuICAgICAgY29uc3Qgc2hvd1RpbWUgPSB0eXBlb2YgdGhpcy5zaG93VGltZSA9PT0gJ29iamVjdCcgPyB0aGlzLnNob3dUaW1lIDoge307XHJcbiAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlW107XHJcbiAgICAgICAgdGhpcy50aW1lT3B0aW9ucyA9IFt0aGlzLm92ZXJyaWRlVGltZU9wdGlvbnMoc2hvd1RpbWUsIHZhbHVlWzBdLCAnc3RhcnQnKSwgdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB2YWx1ZVsxXSwgJ2VuZCcpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRpbWVPcHRpb25zID0gdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGltZU9wdGlvbnMgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvdmVycmlkZVRpbWVPcHRpb25zKG9yaWdpbjogU3VwcG9ydFRpbWVPcHRpb25zLCB2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0aWFsPzogRGlzYWJsZWRUaW1lUGFydGlhbCk6IFN1cHBvcnRUaW1lT3B0aW9ucyB7XHJcbiAgICBsZXQgZGlzYWJsZWRUaW1lRm47XHJcbiAgICBpZiAocGFydGlhbCkge1xyXG4gICAgICBkaXNhYmxlZFRpbWVGbiA9IHBhcnRpYWwgPT09ICdzdGFydCcgPyB0aGlzLmRpc2FibGVkU3RhcnRUaW1lIDogdGhpcy5kaXNhYmxlZEVuZFRpbWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNhYmxlZFRpbWVGbiA9IHRoaXMuZGlzYWJsZWRUaW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgLi4ub3JpZ2luLCAuLi5nZXRUaW1lQ29uZmlnKHZhbHVlLCBkaXNhYmxlZFRpbWVGbikgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3ZlcnJpZGVIbXMobmV3VmFsdWU6IENhbmR5RGF0ZSB8IG51bGwsIG9sZFZhbHVlOiBDYW5keURhdGUgfCBudWxsKTogQ2FuZHlEYXRlIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50XHJcbiAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlIHx8IG5ldyBDYW5keURhdGUoKTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50XHJcbiAgICBvbGRWYWx1ZSA9IG9sZFZhbHVlIHx8IG5ldyBDYW5keURhdGUoKTtcclxuICAgIHJldHVybiBvbGRWYWx1ZS5zZXRIbXMobmV3VmFsdWUuZ2V0SG91cnMoKSwgbmV3VmFsdWUuZ2V0TWludXRlcygpLCBuZXdWYWx1ZS5nZXRTZWNvbmRzKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=