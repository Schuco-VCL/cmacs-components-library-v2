import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core/util';
import { TimeHolder } from './time-holder';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
import * as i3 from "../cmacs-input-number/cmacs-input-number.component";
import * as i4 from "@angular/forms";
import * as i5 from "../cmacs-select/cmacs-select.component";
import * as i6 from "../cmacs-select/cmacs-option.component";
const _c0 = ["hourListElement"];
const _c1 = ["minuteListElement"];
const _c2 = ["secondListElement"];
const _c3 = ["use12HoursListElement"];
function CmacsDatetimePickerPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.dateHelper.format(ctx_r0.time == null ? null : ctx_r0.time.value, ctx_r0.format) || "\u00A0");
} }
function CmacsDatetimePickerPanelComponent_cmacs_select_7_cmacs_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 12);
    i0.ɵɵpipe(1, "uppercase");
} if (rf & 2) {
    const range2_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", range2_r5.value)("label", i0.ɵɵpipeBind1(1, 2, range2_r5.value));
} }
function CmacsDatetimePickerPanelComponent_cmacs_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-select", 10);
    i0.ɵɵlistener("ngModelChange", function CmacsDatetimePickerPanelComponent_cmacs_select_7_Template_cmacs_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.range = $event; })("ngModelChange", function CmacsDatetimePickerPanelComponent_cmacs_select_7_Template_cmacs_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.select12Hours($event); });
    i0.ɵɵtemplate(1, CmacsDatetimePickerPanelComponent_cmacs_select_7_cmacs_option_1_Template, 2, 4, "cmacs-option", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r1.range);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.use12HoursRange);
} }
function CmacsDatetimePickerPanelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, ":");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CmacsDatetimePickerPanelComponent_cmacs_input_number_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 4);
    i0.ɵɵlistener("ngModelChange", function CmacsDatetimePickerPanelComponent_cmacs_input_number_9_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.seconds = $event; })("ngModelChange", function CmacsDatetimePickerPanelComponent_cmacs_input_number_9_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.updateTime($event, "seconds"); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("min", 0)("max", 59)("ngModel", ctx_r3.seconds);
} }
function makeRange(length, step = 1, start = 0) {
    return new Array(Math.ceil(length / step)).fill(0).map((_, i) => (i + start) * step);
}
export class CmacsDatetimePickerPanelComponent {
    constructor(cdr, dateHelper, elementRef) {
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this.elementRef = elementRef;
        this._nzHourStep = 1;
        this._nzMinuteStep = 1;
        this._nzSecondStep = 1;
        this.unsubscribe$ = new Subject();
        this._format = 'HH:mm:ss';
        this._disabledHours = () => [];
        this._disabledMinutes = () => [];
        this._disabledSeconds = () => [];
        this._allowEmpty = true;
        this.time = new TimeHolder();
        this.hourEnabled = true;
        this.minuteEnabled = true;
        this.secondEnabled = true;
        this.firstScrolled = false;
        this.enabledColumns = 3;
        this.nzInDatePicker = false; // If inside a date-picker, more diff works need to be done
        this.nzHideDisabledOptions = false;
        this.nzUse12Hours = false;
        this.hideSeconds = false;
        this.closePanel = new EventEmitter();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-picker-time-panel');
    }
    set nzAllowEmpty(value) {
        if (isNotNil(value)) {
            this._allowEmpty = value;
        }
    }
    get nzAllowEmpty() {
        return this._allowEmpty;
    }
    set nzDisabledHours(value) {
        this._disabledHours = value;
        if (!!this._disabledHours) {
            this.buildHours();
        }
    }
    get nzDisabledHours() {
        return this._disabledHours;
    }
    set nzDisabledMinutes(value) {
        if (isNotNil(value)) {
            this._disabledMinutes = value;
            this.buildMinutes();
        }
    }
    get nzDisabledMinutes() {
        return this._disabledMinutes;
    }
    set nzDisabledSeconds(value) {
        if (isNotNil(value)) {
            this._disabledSeconds = value;
            this.buildSeconds();
        }
    }
    get nzDisabledSeconds() {
        return this._disabledSeconds;
    }
    set format(value) {
        if (isNotNil(value)) {
            this._format = value;
            this.enabledColumns = 0;
            const charSet = new Set(value);
            this.hourEnabled = charSet.has('H') || charSet.has('h');
            this.minuteEnabled = charSet.has('m');
            this.secondEnabled = charSet.has('s');
            if (this.hourEnabled) {
                this.enabledColumns++;
            }
            if (this.minuteEnabled) {
                this.enabledColumns++;
            }
            if (this.secondEnabled) {
                this.enabledColumns++;
            }
            if (this.nzUse12Hours) {
                this.build12Hours();
            }
        }
    }
    get format() {
        return this._format;
    }
    set nzHourStep(value) {
        if (isNotNil(value)) {
            this._nzHourStep = value;
            this.buildHours();
        }
    }
    get nzHourStep() {
        return this._nzHourStep;
    }
    set nzMinuteStep(value) {
        if (isNotNil(value)) {
            this._nzMinuteStep = value;
            this.buildMinutes();
        }
    }
    get nzMinuteStep() {
        return this._nzMinuteStep;
    }
    set nzSecondStep(value) {
        if (isNotNil(value)) {
            this._nzSecondStep = value;
            this.buildSeconds();
        }
    }
    get nzSecondStep() {
        return this._nzSecondStep;
    }
    trackByFn(index) {
        return index;
    }
    buildHours() {
        if (this.nzUse12Hours) {
            this.hours = (((this.time.hours ? this.time.hours : this.defaultHours) + 11) % 12 + 1);
        }
        else {
            this.hours = this.time.hours ? this.time.hours : this.defaultHours;
        }
    }
    buildMinutes() {
        this.minutes = this.time.minutes ? this.time.minutes : this.defaultMinutes;
    }
    buildSeconds() {
        this.seconds = this.time.seconds ? this.time.seconds : this.defaultSeconds;
    }
    build12Hours() {
        const isUpperFormat = this._format.includes('A');
        this.use12HoursRange = [
            {
                index: 0,
                value: isUpperFormat ? 'AM' : 'am'
            },
            {
                index: 1,
                value: isUpperFormat ? 'PM' : 'pm'
            }
        ];
        if (this.time.selected12Hours) {
            this.range = isUpperFormat ? this.time.selected12Hours.toUpperCase() : this.time.selected12Hours.toLowerCase();
        }
        else {
            this.range = isUpperFormat ? this.default12Hours.toUpperCase() : this.default12Hours.toLowerCase();
        }
    }
    get defaultHours() {
        return this.time.hours;
    }
    get defaultMinutes() {
        return this.time.minutes;
    }
    get defaultSeconds() {
        return this.time.seconds;
    }
    get default12Hours() {
        return this.time.hours >= 12 ? 'PM' : 'AM';
    }
    buildTimes() {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
        this.build12Hours();
    }
    select12Hours(value) {
        this.time.setSelected12Hours(value);
    }
    scrollToTime(delay = 0) {
        if (this.hourEnabled && this.hourListElement) {
            this.scrollToSelected(this.hourListElement.nativeElement, this.time.viewHours, delay, 'hour');
        }
        if (this.minuteEnabled && this.minuteListElement) {
            this.scrollToSelected(this.minuteListElement.nativeElement, this.time.minutes, delay, 'minute');
        }
        if (this.secondEnabled && this.secondListElement) {
            this.scrollToSelected(this.secondListElement.nativeElement, this.time.seconds, delay, 'second');
        }
        if (this.nzUse12Hours && this.use12HoursListElement) {
            const selectedHours = this.time.selected12Hours;
            const index = selectedHours === 'AM' ? 0 : 1;
            this.scrollToSelected(this.use12HoursListElement.nativeElement, index, delay, '12-hour');
        }
    }
    selectHour(hour) {
        this.time.setHours(hour.index, hour.disabled);
        if (!!this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    }
    selectMinute(minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        if (!!this._disabledSeconds) {
            this.buildSeconds();
        }
    }
    selectSecond(second) {
        this.time.setSeconds(second.index, second.disabled);
    }
    scrollToSelected(instance, index, duration = 0, unit) {
        if (!instance) {
            return;
        }
        const transIndex = this.translateIndex(index, unit);
        const currentOption = (instance.children[transIndex] || instance.children[0]);
        this.scrollTo(instance, currentOption.offsetTop, duration);
    }
    translateIndex(index, unit) {
        var _a, _b, _c;
        if (unit === 'hour') {
            return this.calcIndex((_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this), this.hourRange.map(item => item.index).indexOf(index));
        }
        else if (unit === 'minute') {
            return this.calcIndex((_b = this.nzDisabledMinutes) === null || _b === void 0 ? void 0 : _b.call(this, this.time.hours), this.minuteRange.map(item => item.index).indexOf(index));
        }
        else if (unit === 'second') {
            // second
            return this.calcIndex((_c = this.nzDisabledSeconds) === null || _c === void 0 ? void 0 : _c.call(this, this.time.hours, this.time.minutes), this.secondRange.map(item => item.index).indexOf(index));
        }
        else {
            // 12-hour
            return this.calcIndex([], this.use12HoursRange.map(item => item.index).indexOf(index));
        }
    }
    scrollTo(element, to, duration) {
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        const difference = to - element.scrollTop;
        const perTick = (difference / duration) * 10;
        reqAnimFrame(() => {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            this.scrollTo(element, to, duration - 10);
        });
    }
    calcIndex(array, index) {
        if ((array === null || array === void 0 ? void 0 : array.length) && this.nzHideDisabledOptions) {
            return (index -
                array.reduce((pre, value) => {
                    return pre + (value < index ? 1 : 0);
                }, 0));
        }
        else {
            return index;
        }
    }
    changed() {
        if (this.onChange) {
            this.onChange(this.time.value);
        }
    }
    touched() {
        if (this.onTouch) {
            this.onTouch();
        }
    }
    timeDisabled(value) {
        var _a, _b, _c, _d, _e, _f;
        const hour = value.getHours();
        const minute = value.getMinutes();
        const second = value.getSeconds();
        return (((_b = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this).indexOf(hour)) !== null && _b !== void 0 ? _b : -1) > -1 ||
            ((_d = (_c = this.nzDisabledMinutes) === null || _c === void 0 ? void 0 : _c.call(this, hour).indexOf(minute)) !== null && _d !== void 0 ? _d : -1) > -1 ||
            ((_f = (_e = this.nzDisabledSeconds) === null || _e === void 0 ? void 0 : _e.call(this, hour, minute).indexOf(second)) !== null && _f !== void 0 ? _f : -1) > -1);
    }
    onClickNow() {
        const now = new Date();
        if (this.timeDisabled(now)) {
            return;
        }
        this.time.setValue(now);
        this.changed();
        this.closePanel.emit();
    }
    onClickOk() {
        this.closePanel.emit();
    }
    isSelectedHour(hour) {
        return hour.index === this.time.viewHours;
    }
    isSelectedMinute(minute) {
        return minute.index === this.time.minutes;
    }
    isSelectedSecond(second) {
        return second.index === this.time.seconds;
    }
    isSelected12Hours(value) {
        return value.value.toUpperCase() === this.time.selected12Hours;
    }
    ngOnInit() {
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.changed();
            this.touched();
            this.scrollToTime(120);
        });
        this.buildTimes();
        setTimeout(() => {
            this.scrollToTime();
            this.firstScrolled = true;
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    ngOnChanges(changes) {
        const { nzUse12Hours, nzDefaultOpenValue } = changes;
        if (!(nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.previousValue) && (nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.currentValue)) {
            this.build12Hours();
            this.enabledColumns++;
        }
        if (nzDefaultOpenValue === null || nzDefaultOpenValue === void 0 ? void 0 : nzDefaultOpenValue.currentValue) {
            this.time.setDefaultOpenValue(this.nzDefaultOpenValue || new Date());
        }
    }
    writeValue(value) {
        this.time.setValue(value, this.nzUse12Hours);
        this.buildTimes();
        if (value && this.firstScrolled) {
            this.scrollToTime(120);
        }
        // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /**
     * Prevent input losing focus when click panel
     * @param event
     */
    onMousedown(event) {
        //event.preventDefault();
    }
    /* Customized code */
    updateTime($event, type) {
        if (type === 'hours') {
            this.time.setHours($event, false);
        }
        if (type === 'minutes') {
            this.time.setMinutes($event, false);
        }
        if (type === 'seconds') {
            this.time.setSeconds($event, false);
        }
    }
}
CmacsDatetimePickerPanelComponent.ɵfac = function CmacsDatetimePickerPanelComponent_Factory(t) { return new (t || CmacsDatetimePickerPanelComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
CmacsDatetimePickerPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsDatetimePickerPanelComponent, selectors: [["cmacs-datetime-picker-panel"]], viewQuery: function CmacsDatetimePickerPanelComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
        i0.ɵɵviewQuery(_c1, 1);
        i0.ɵɵviewQuery(_c2, 1);
        i0.ɵɵviewQuery(_c3, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.hourListElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.minuteListElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.secondListElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.use12HoursListElement = _t.first);
    } }, hostBindings: function CmacsDatetimePickerPanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mousedown", function CmacsDatetimePickerPanelComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } }, inputs: { nzInDatePicker: "nzInDatePicker", nzAddOn: "nzAddOn", nzHideDisabledOptions: "nzHideDisabledOptions", nzClearText: "nzClearText", nzNowText: "nzNowText", nzOkText: "nzOkText", nzPlaceHolder: "nzPlaceHolder", nzUse12Hours: "nzUse12Hours", hideSeconds: "hideSeconds", nzDefaultOpenValue: "nzDefaultOpenValue", nzAllowEmpty: "nzAllowEmpty", nzDisabledHours: "nzDisabledHours", nzDisabledMinutes: "nzDisabledMinutes", nzDisabledSeconds: "nzDisabledSeconds", format: "format", nzHourStep: "nzHourStep", nzMinuteStep: "nzMinuteStep", nzSecondStep: "nzSecondStep" }, outputs: { closePanel: "closePanel" }, exportAs: ["cmacsDateTimePickerPanel"], features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: CmacsDatetimePickerPanelComponent, multi: true }]), i0.ɵɵNgOnChangesFeature], decls: 10, vars: 12, consts: [["class", "ant-picker-header", 4, "ngIf"], [1, "ant-picker-content", "cmacs-datetime-picker"], [1, "cmacs-datetime-picker-input-number", 2, "margin-right", "5px", 3, "min", "max", "ngModel", "ngModelChange"], [1, "cmacs-datetime-dividers"], [1, "cmacs-datetime-picker-input-number", 2, "margin-left", "5px", 3, "min", "max", "ngModel", "ngModelChange"], ["class", "ampmdropdown", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "cmacs-datetime-dividers", "style", "position: relative; left: -2px;", 4, "ngIf"], ["style", "margin-left: 5px", "class", "cmacs-datetime-picker-input-number", 3, "min", "max", "ngModel", "ngModelChange", 4, "ngIf"], [1, "ant-picker-header"], [1, "ant-picker-header-view"], [1, "ampmdropdown", 3, "ngModel", "ngModelChange"], [3, "value", "label", 4, "ngFor", "ngForOf"], [3, "value", "label"], [1, "cmacs-datetime-dividers", 2, "position", "relative", "left", "-2px"]], template: function CmacsDatetimePickerPanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsDatetimePickerPanelComponent_div_0_Template, 3, 1, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "cmacs-input-number", 2);
        i0.ɵɵlistener("ngModelChange", function CmacsDatetimePickerPanelComponent_Template_cmacs_input_number_ngModelChange_2_listener($event) { return ctx.hours = $event; })("ngModelChange", function CmacsDatetimePickerPanelComponent_Template_cmacs_input_number_ngModelChange_2_listener($event) { return ctx.updateTime($event, "hours"); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "span");
        i0.ɵɵtext(5, ":");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "cmacs-input-number", 4);
        i0.ɵɵlistener("ngModelChange", function CmacsDatetimePickerPanelComponent_Template_cmacs_input_number_ngModelChange_6_listener($event) { return ctx.minutes = $event; })("ngModelChange", function CmacsDatetimePickerPanelComponent_Template_cmacs_input_number_ngModelChange_6_listener($event) { return ctx.updateTime($event, "minutes"); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, CmacsDatetimePickerPanelComponent_cmacs_select_7_Template, 2, 2, "cmacs-select", 5);
        i0.ɵɵtemplate(8, CmacsDatetimePickerPanelComponent_div_8_Template, 3, 0, "div", 6);
        i0.ɵɵtemplate(9, CmacsDatetimePickerPanelComponent_cmacs_input_number_9_Template, 1, 3, "cmacs-input-number", 7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.nzInDatePicker);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("cmacs-datetime-picker-noseconds", ctx.hideSeconds && !ctx.nzUse12Hours);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("min", ctx.nzUse12Hours ? 1 : 0)("max", ctx.nzUse12Hours ? 12 : 23)("ngModel", ctx.hours);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("min", 0)("max", 59)("ngModel", ctx.minutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzUse12Hours);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.nzUse12Hours && !ctx.hideSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.nzUse12Hours && !ctx.hideSeconds);
    } }, directives: [i2.NgIf, i3.CmacsInputNumberComponent, i4.NgControlStatus, i4.NgModel, i5.CmacsSelectComponent, i2.NgForOf, i6.CmacsOptionComponent], pipes: [i2.UpperCasePipe], styles: [".cmacs-datetime-picker-input-number[_ngcontent-%COMP%]{width:auto;height:30px!important;margin:11px}  .cmacs-datetime-picker cmacs-select .ant-select-selection{height:30px}  cmacs-datetime-picker.ant-time-picker .ant-time-picker-input[disabled]{background:#f6f7fb;cursor:default;border:1px solid #dee0e5}  cmacs-datetime-picker.ant-time-picker .ant-time-picker-input[disabled]+.ant-time-picker-icon{color:#bec4cd;cursor:default}.cmacs-datetime-dividers[_ngcontent-%COMP%]{display:inline-block;position:relative;top:-3px;padding:15px 0}.cmacs-datetime-picker[_ngcontent-%COMP%]   .ant-time-picker-panel-inner[_ngcontent-%COMP%]{width:224px!important}.cmacs-datetime-picker[_ngcontent-%COMP%]   .ampmdropdown[_ngcontent-%COMP%]{width:calc(100% - 156px);height:30px;margin:11px 11px 11px 0}  .cmacs-datetime-picker .ant-time-picker-panel-inner cmacs-select.ant-select{height:30px!important;margin:12px 0!important;display:inline-flex;width:auto!important}.cmacs-datetime-picker[_ngcontent-%COMP%]   .ant-time-picker-panel-inner.cmacs-datetime-picker-noseconds[_ngcontent-%COMP%]{width:148px!important}.ant-time-picker-panel-narrow[_ngcontent-%COMP%]   .cmacs-datetime-picker[_ngcontent-%COMP%]   .ant-time-picker-panel-input-wrap[_ngcontent-%COMP%]{max-width:unset}"], changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsDatetimePickerPanelComponent.prototype, "nzUse12Hours", void 0);
__decorate([
    InputBoolean()
], CmacsDatetimePickerPanelComponent.prototype, "hideSeconds", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsDatetimePickerPanelComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'cmacs-datetime-picker-panel',
                exportAs: 'cmacsDateTimePickerPanel',
                templateUrl: './cmacs-datetime-picker-panel.component.html',
                styleUrls: ['./cmacs-datetime-picker-panel.component.css'],
                host: {
                    '(mousedown)': 'onMousedown($event)'
                },
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: CmacsDatetimePickerPanelComponent, multi: true }]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.DateHelperService }, { type: i0.ElementRef }]; }, { hourListElement: [{
            type: ViewChild,
            args: ['hourListElement', { static: false }]
        }], minuteListElement: [{
            type: ViewChild,
            args: ['minuteListElement', { static: false }]
        }], secondListElement: [{
            type: ViewChild,
            args: ['secondListElement', { static: false }]
        }], use12HoursListElement: [{
            type: ViewChild,
            args: ['use12HoursListElement', { static: false }]
        }], nzInDatePicker: [{
            type: Input
        }], nzAddOn: [{
            type: Input
        }], nzHideDisabledOptions: [{
            type: Input
        }], nzClearText: [{
            type: Input
        }], nzNowText: [{
            type: Input
        }], nzOkText: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzUse12Hours: [{
            type: Input
        }], hideSeconds: [{
            type: Input
        }], nzDefaultOpenValue: [{
            type: Input
        }], closePanel: [{
            type: Output
        }], nzAllowEmpty: [{
            type: Input
        }], nzDisabledHours: [{
            type: Input
        }], nzDisabledMinutes: [{
            type: Input
        }], nzDisabledSeconds: [{
            type: Input
        }], format: [{
            type: Input
        }], nzHourStep: [{
            type: Input
        }], nzMinuteStep: [{
            type: Input
        }], nzSecondStep: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGF0ZXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRldGltZS1waWNrZXIvY21hY3MtZGF0ZXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRldGltZS1waWNrZXIvY21hY3MtZGF0ZXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFHVCxLQUFLLEVBTUwsU0FBUyxFQUdULE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFTLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFvQixRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVuRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7O0lDeEIzQyw4QkFBc0Q7SUFDcEQsOEJBQW9DO0lBQUEsWUFBOEQ7SUFBQSxpQkFBTTtJQUMxRyxpQkFBTTs7O0lBRGdDLGVBQThEO0lBQTlELHlIQUE4RDs7O0lBVTlGLG1DQUNlOzs7O0lBRHNDLHVDQUFzQixnREFBQTs7OztJQUQ3RSx3Q0FBb0g7SUFBNUQsNE9BQW1CLHNPQUFBO0lBQ3pFLG9IQUNlO0lBQ2pCLGlCQUFlOzs7SUFIeUMsc0NBQW1CO0lBQ3hDLGVBQWtCO0lBQWxCLGdEQUFrQjs7O0lBR3JELCtCQUFtSDtJQUFBLDRCQUFNO0lBQUEsaUJBQUM7SUFBQSxpQkFBTztJQUFBLGlCQUFNOzs7O0lBQ3ZJLDZDQUlvRTtJQUQzQiwyUEFBcUIsK09BQ04sU0FBUyxLQURIO0lBQ00saUJBQXFCOzs7SUFEckUsdUJBQVMsV0FBQSwyQkFBQTs7QURTakMsU0FBUyxTQUFTLENBQUMsTUFBYyxFQUFFLE9BQWUsQ0FBQyxFQUFFLFFBQWdCLENBQUM7SUFDcEUsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUN2RixDQUFDO0FBZUQsTUFBTSxPQUFPLGlDQUFpQztJQW9YNUMsWUFBb0IsR0FBc0IsRUFBUyxVQUE2QixFQUFVLFVBQXNCO1FBQTVGLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBblh4RyxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFHbkMsWUFBTyxHQUFHLFVBQVUsQ0FBQztRQUNyQixtQkFBYyxHQUFvQixHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDM0MscUJBQWdCLEdBQWdDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN6RCxxQkFBZ0IsR0FBZ0QsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3pFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzNCLFNBQUksR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBaUJWLG1CQUFjLEdBQVksS0FBSyxDQUFDLENBQUMsMkRBQTJEO1FBRTVGLDBCQUFxQixHQUFHLEtBQUssQ0FBQztRQUtkLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBRzFCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBd1V2RCxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUF4VUQsSUFDSSxZQUFZLENBQUMsS0FBYztRQUM3QixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQ0ksZUFBZSxDQUFDLEtBQW1DO1FBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQ0ksaUJBQWlCLENBQUMsS0FBK0M7UUFDbkUsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQ0ksaUJBQWlCLENBQUMsS0FBK0Q7UUFDbkYsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQ0ksTUFBTSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDeEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2QjtZQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3ZCO1lBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdkI7WUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjtTQUNGO0lBQ0gsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFDSSxVQUFVLENBQUMsS0FBYTtRQUMxQixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUNJLFlBQVksQ0FBQyxLQUFhO1FBQzVCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQ0ksWUFBWSxDQUFDLEtBQWE7UUFDNUIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWE7UUFDckIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4RjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDcEU7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdFLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0UsQ0FBQztJQUVELFlBQVk7UUFDVixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHO1lBQ3JCO2dCQUNFLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTthQUNuQztZQUNEO2dCQUNFLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTthQUNuQztTQUNGLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEg7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BHO0lBRUgsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3QyxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsWUFBWSxDQUFDLFFBQWdCLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBVSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNoRztRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2xHO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbEc7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQ25ELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ2hELE1BQU0sS0FBSyxHQUFHLGFBQWEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDMUY7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQTBDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUE0QztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUE0QztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsUUFBcUIsRUFBRSxLQUFhLEVBQUUsV0FBbUIsQ0FBQyxFQUFFLElBQXNCO1FBQ2pHLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPO1NBQ1I7UUFDRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRCxNQUFNLGFBQWEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztRQUM3RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxjQUFjLENBQUMsS0FBYSxFQUFFLElBQXNCOztRQUNsRCxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUMsU0FBUyxPQUFDLElBQUksQ0FBQyxlQUFlLCtDQUFwQixJQUFJLEdBQXVCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3pHO2FBQU0sSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLFNBQVMsT0FBQyxJQUFJLENBQUMsaUJBQWlCLCtDQUF0QixJQUFJLEVBQXNCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzdIO2FBQU0sSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLFNBQVM7WUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLE9BQ25CLElBQUksQ0FBQyxpQkFBaUIsK0NBQXRCLElBQUksRUFBc0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFRLEdBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FDeEQsQ0FBQztTQUNIO2FBQU07WUFDTCxVQUFVO1lBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN4RjtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsT0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBZ0I7UUFDekQsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87U0FDUjtRQUNELE1BQU0sVUFBVSxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQzFDLE1BQU0sT0FBTyxHQUFHLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUU3QyxZQUFZLENBQUMsR0FBRyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDaEQsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtnQkFDNUIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBMkIsRUFBRSxLQUFhO1FBQ2xELElBQUksQ0FBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUcsTUFBTSxLQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUNoRCxPQUFPLENBQ0wsS0FBSztnQkFDTCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUMxQixPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDTixDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRVMsT0FBTztRQUNmLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBTSxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRVMsT0FBTztRQUNmLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVc7O1FBQ3RCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FDTCxhQUFDLElBQUksQ0FBQyxlQUFlLCtDQUFwQixJQUFJLEVBQXNCLE9BQU8sQ0FBQyxJQUFJLG9DQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELGFBQUMsSUFBSSxDQUFDLGlCQUFpQiwrQ0FBdEIsSUFBSSxFQUFzQixJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sb0NBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUQsYUFBQyxJQUFJLENBQUMsaUJBQWlCLCtDQUF0QixJQUFJLEVBQXNCLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sb0NBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDckUsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVO1FBQ1IsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDMUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUEwQztRQUN2RCxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDNUMsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQTRDO1FBQzNELE9BQU8sTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUM1QyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsTUFBNEM7UUFDM0QsT0FBTyxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzVDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUF1QztRQUN2RCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDakUsQ0FBQztJQU9ELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDbEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3JELElBQUksRUFBQyxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUcsYUFBYSxDQUFBLEtBQUksWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFHLFlBQVksQ0FBQSxFQUFFO1lBQ2hFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7UUFDRCxJQUFJLGtCQUFrQixhQUFsQixrQkFBa0IsdUJBQWxCLGtCQUFrQixDQUFHLFlBQVksRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVc7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO1FBQ0Qsc0lBQXNJO1FBQ3RJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQXlCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFjO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsS0FBaUI7UUFDM0IseUJBQXlCO0lBQzNCLENBQUM7SUFFRCxxQkFBcUI7SUFDckIsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFZO1FBQzdCLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7UUFDRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7O2tIQTViVSxpQ0FBaUM7c0VBQWpDLGlDQUFpQzs7Ozs7Ozs7Ozs7OzRIQUFqQyx1QkFBbUI7bXJCQUZuQixDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxpQ0FBaUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7UUMxQzFHLGtGQUVNO1FBQ04sOEJBQTZIO1FBQ3pILDZDQUVrRTtRQURmLHNLQUFtQixtSUFDakMsdUJBQW1CLE9BQU8sQ0FBQyxJQURNO1FBQ0osaUJBQXFCO1FBQ3ZGLDhCQUFxQztRQUFBLDRCQUFNO1FBQUEsaUJBQUM7UUFBQSxpQkFBTztRQUFBLGlCQUFNO1FBQ3pELDZDQUNvRTtRQUR5Qyx3S0FBcUIsbUlBQzdGLHVCQUFtQixTQUFTLENBQUMsSUFEZ0U7UUFDOUQsaUJBQXFCO1FBQ3pGLG9HQUdlO1FBQ2Ysa0ZBQXVJO1FBQ3ZJLGdIQUl5RjtRQUM3RixpQkFBTTs7UUFwQkEseUNBQW9CO1FBRzRCLGVBQXNFO1FBQXRFLHVGQUFzRTtRQUMvQixlQUE0QjtRQUE1Qiw4Q0FBNEIsbUNBQUEsc0JBQUE7UUFJN0IsZUFBUztRQUFULHVCQUFTLFdBQUEsd0JBQUE7UUFFbEYsZUFBa0I7UUFBbEIsdUNBQWtCO1FBSTNCLGVBQW1DO1FBQW5DLDREQUFtQztRQUNwQixlQUFtQztRQUFuQyw0REFBbUM7O0FEc0VqQztJQUFmLFlBQVksRUFBRTt1RUFBc0I7QUFDckI7SUFBZixZQUFZLEVBQUU7c0VBQXFCO3VGQTFDbEMsaUNBQWlDO2NBWDdDLFNBQVM7ZUFBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLDhDQUE4QztnQkFDM0QsU0FBUyxFQUFFLENBQUMsNkNBQTZDLENBQUM7Z0JBQzFELElBQUksRUFBRTtvQkFDSixhQUFhLEVBQUUscUJBQXFCO2lCQUNyQztnQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLG1DQUFtQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUN6Rzs2SEE4QkMsZUFBZTtrQkFEZCxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUVJLGlCQUFpQjtrQkFBbkUsU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDRSxpQkFBaUI7a0JBQW5FLFNBQVM7bUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ00scUJBQXFCO2tCQUEzRSxTQUFTO21CQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUU1QyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNtQixZQUFZO2tCQUFwQyxLQUFLO1lBQ21CLFdBQVc7a0JBQW5DLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFFYSxVQUFVO2tCQUE1QixNQUFNO1lBR0gsWUFBWTtrQkFEZixLQUFLO1lBWUYsZUFBZTtrQkFEbEIsS0FBSztZQWFGLGlCQUFpQjtrQkFEcEIsS0FBSztZQWFGLGlCQUFpQjtrQkFEcEIsS0FBSztZQWFGLE1BQU07a0JBRFQsS0FBSztZQTZCRixVQUFVO2tCQURiLEtBQUs7WUFhRixZQUFZO2tCQURmLEtBQUs7WUFhRixZQUFZO2tCQURmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBEZWJ1Z0VsZW1lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgcmVxQW5pbUZyYW1lIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3BvbHlmaWxsJztcclxuaW1wb3J0IHsgU3ViamVjdCwgcmFuZ2UgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIGlzTmlsLCB0b0Jvb2xlYW4sIGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBDbWFjc0RhdGV0aW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSB9IGZyb20gJy4vY21hY3MtZGF0ZXRpbWUtdmFsdWUtYWNjZXNzb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGltZUhvbGRlciB9IGZyb20gJy4vdGltZS1ob2xkZXInO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5mdW5jdGlvbiBtYWtlUmFuZ2UobGVuZ3RoOiBudW1iZXIsIHN0ZXA6IG51bWJlciA9IDEsIHN0YXJ0OiBudW1iZXIgPSAwKTogbnVtYmVyW10ge1xyXG4gIHJldHVybiBuZXcgQXJyYXkoTWF0aC5jZWlsKGxlbmd0aCAvIHN0ZXApKS5maWxsKDApLm1hcCgoXywgaSkgPT4gKGkgKyBzdGFydCkgKiBzdGVwKTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTnpUaW1lUGlja2VyVW5pdCA9ICdob3VyJyB8ICdtaW51dGUnIHwgJ3NlY29uZCcgfCAnMTItaG91cic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ2NtYWNzLWRhdGV0aW1lLXBpY2tlci1wYW5lbCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0RhdGVUaW1lUGlja2VyUGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1kYXRldGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWRhdGV0aW1lLXBpY2tlci1wYW5lbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgaG9zdDoge1xuICAgICcobW91c2Vkb3duKSc6ICdvbk1vdXNlZG93bigkZXZlbnQpJ1xuICB9LFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBDbWFjc0RhdGV0aW1lUGlja2VyUGFuZWxDb21wb25lbnQsIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0RhdGV0aW1lUGlja2VyUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBfbnpIb3VyU3RlcCA9IDE7XG4gIHByaXZhdGUgX256TWludXRlU3RlcCA9IDE7XG4gIHByaXZhdGUgX256U2Vjb25kU3RlcCA9IDE7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBvbkNoYW5nZT86ICh2YWx1ZTogRGF0ZSkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBvblRvdWNoPzogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfZm9ybWF0ID0gJ0hIOm1tOnNzJztcbiAgcHJpdmF0ZSBfZGlzYWJsZWRIb3Vycz86ICgpID0+IG51bWJlcltdID0gKCkgPT4gW107XG4gIHByaXZhdGUgX2Rpc2FibGVkTWludXRlcz86IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdID0gKCkgPT4gW107XG4gIHByaXZhdGUgX2Rpc2FibGVkU2Vjb25kcz86IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXSA9ICgpID0+IFtdO1xuICBwcml2YXRlIF9hbGxvd0VtcHR5ID0gdHJ1ZTtcbiAgdGltZSA9IG5ldyBUaW1lSG9sZGVyKCk7XG4gIGhvdXJFbmFibGVkID0gdHJ1ZTtcbiAgbWludXRlRW5hYmxlZCA9IHRydWU7XG4gIHNlY29uZEVuYWJsZWQgPSB0cnVlO1xuICBmaXJzdFNjcm9sbGVkID0gZmFsc2U7XG4gIGVuYWJsZWRDb2x1bW5zID0gMztcbiAgaG91clJhbmdlITogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0+O1xuICBtaW51dGVSYW5nZSE6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9PjtcbiAgc2Vjb25kUmFuZ2UhOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfT47XG4gIHVzZTEySG91cnNSYW5nZSE6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0+O1xuXHJcbiAgaG91cnM6IG51bWJlcjtcclxuICBzZWNvbmRzIDogbnVtYmVyO1xyXG4gIG1pbnV0ZXMgOiBudW1iZXI7XHJcbiAgcmFuZ2U6IGFueTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnaG91ckxpc3RFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIGhvdXJMaXN0RWxlbWVudD86IERlYnVnRWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnbWludXRlTGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbWludXRlTGlzdEVsZW1lbnQ/OiBEZWJ1Z0VsZW1lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3NlY29uZExpc3RFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHNlY29uZExpc3RFbGVtZW50PzogRGVidWdFbGVtZW50O1xuICBAVmlld0NoaWxkKCd1c2UxMkhvdXJzTGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgdXNlMTJIb3Vyc0xpc3RFbGVtZW50PzogRGVidWdFbGVtZW50O1xuXG4gIEBJbnB1dCgpIG56SW5EYXRlUGlja2VyOiBib29sZWFuID0gZmFsc2U7IC8vIElmIGluc2lkZSBhIGRhdGUtcGlja2VyLCBtb3JlIGRpZmYgd29ya3MgbmVlZCB0byBiZSBkb25lXG4gIEBJbnB1dCgpIG56QWRkT24/OiBUZW1wbGF0ZVJlZjx2b2lkPjsgIFxuICBASW5wdXQoKSBuekhpZGVEaXNhYmxlZE9wdGlvbnMgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDbGVhclRleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56Tm93VGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgbnpPa1RleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI/OiBzdHJpbmcgfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpVc2UxMkhvdXJzID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlU2Vjb25kcyA9IGZhbHNlO1xuICBASW5wdXQoKSBuekRlZmF1bHRPcGVuVmFsdWU/OiBEYXRlO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbG9zZVBhbmVsID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBASW5wdXQoKVxuICBzZXQgbnpBbGxvd0VtcHR5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fYWxsb3dFbXB0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekFsbG93RW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93RW1wdHk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZEhvdXJzKHZhbHVlOiB1bmRlZmluZWQgfCAoKCkgPT4gbnVtYmVyW10pKSB7XG4gICAgdGhpcy5fZGlzYWJsZWRIb3VycyA9IHZhbHVlO1xuICAgIGlmICghIXRoaXMuX2Rpc2FibGVkSG91cnMpIHtcbiAgICAgIHRoaXMuYnVpbGRIb3VycygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekRpc2FibGVkSG91cnMoKTogdW5kZWZpbmVkIHwgKCgpID0+IG51bWJlcltdKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkSG91cnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZE1pbnV0ZXModmFsdWU6IHVuZGVmaW5lZCB8ICgoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXSkpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZE1pbnV0ZXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWRNaW51dGVzKCk6IHVuZGVmaW5lZCB8ICgoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXSkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZE1pbnV0ZXM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZFNlY29uZHModmFsdWU6IHVuZGVmaW5lZCB8ICgoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW10pKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZWRTZWNvbmRzID0gdmFsdWU7XG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekRpc2FibGVkU2Vjb25kcygpOiB1bmRlZmluZWQgfCAoKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkU2Vjb25kcztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtYXQodmFsdWU6IHN0cmluZykge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2Zvcm1hdCA9IHZhbHVlO1xuICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucyA9IDA7XG4gICAgICBjb25zdCBjaGFyU2V0ID0gbmV3IFNldCh2YWx1ZSk7XG4gICAgICB0aGlzLmhvdXJFbmFibGVkID0gY2hhclNldC5oYXMoJ0gnKSB8fCBjaGFyU2V0LmhhcygnaCcpO1xuICAgICAgdGhpcy5taW51dGVFbmFibGVkID0gY2hhclNldC5oYXMoJ20nKTtcbiAgICAgIHRoaXMuc2Vjb25kRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdzJyk7XG4gICAgICBpZiAodGhpcy5ob3VyRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5taW51dGVFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlY29uZEVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubnpVc2UxMkhvdXJzKSB7XG4gICAgICAgIHRoaXMuYnVpbGQxMkhvdXJzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGZvcm1hdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpIb3VyU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fbnpIb3VyU3RlcCA9IHZhbHVlO1xuICAgICAgdGhpcy5idWlsZEhvdXJzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56SG91clN0ZXAoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbnpIb3VyU3RlcDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek1pbnV0ZVN0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX256TWludXRlU3RlcCA9IHZhbHVlO1xuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpNaW51dGVTdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX256TWludXRlU3RlcDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNlY29uZFN0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX256U2Vjb25kU3RlcCA9IHZhbHVlO1xuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpTZWNvbmRTdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX256U2Vjb25kU3RlcDtcbiAgfVxuXG4gIHRyYWNrQnlGbihpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cclxuXHJcbiAgYnVpbGRIb3VycygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56VXNlMTJIb3Vycykge1xyXG4gICAgICB0aGlzLmhvdXJzID0gKCgodGhpcy50aW1lLmhvdXJzID8gdGhpcy50aW1lLmhvdXJzIDogdGhpcy5kZWZhdWx0SG91cnMpICsgMTEpICUgMTIgKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaG91cnMgPSB0aGlzLnRpbWUuaG91cnMgPyB0aGlzLnRpbWUuaG91cnMgOiB0aGlzLmRlZmF1bHRIb3VycztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1aWxkTWludXRlcygpOiB2b2lkIHtcclxuICAgIHRoaXMubWludXRlcyA9IHRoaXMudGltZS5taW51dGVzID8gdGhpcy50aW1lLm1pbnV0ZXMgOiB0aGlzLmRlZmF1bHRNaW51dGVzO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRTZWNvbmRzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWNvbmRzID0gdGhpcy50aW1lLnNlY29uZHMgPyB0aGlzLnRpbWUuc2Vjb25kcyA6IHRoaXMuZGVmYXVsdFNlY29uZHM7XHJcbiAgfVxyXG5cclxuICBidWlsZDEySG91cnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc1VwcGVyRm9ybWF0ID0gdGhpcy5fZm9ybWF0LmluY2x1ZGVzKCdBJyk7XG4gICAgdGhpcy51c2UxMkhvdXJzUmFuZ2UgPSBbXG4gICAgICB7XG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICB2YWx1ZTogaXNVcHBlckZvcm1hdCA/ICdBTScgOiAnYW0nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleDogMSxcbiAgICAgICAgdmFsdWU6IGlzVXBwZXJGb3JtYXQgPyAnUE0nIDogJ3BtJ1xuICAgICAgfVxuICAgIF07XHJcbiAgICBpZiAodGhpcy50aW1lLnNlbGVjdGVkMTJIb3Vycykge1xyXG4gICAgICB0aGlzLnJhbmdlID0gaXNVcHBlckZvcm1hdCA/IHRoaXMudGltZS5zZWxlY3RlZDEySG91cnMudG9VcHBlckNhc2UoKSA6IHRoaXMudGltZS5zZWxlY3RlZDEySG91cnMudG9Mb3dlckNhc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSBpc1VwcGVyRm9ybWF0ID8gdGhpcy5kZWZhdWx0MTJIb3Vycy50b1VwcGVyQ2FzZSgpIDogdGhpcy5kZWZhdWx0MTJIb3Vycy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldCBkZWZhdWx0SG91cnMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnRpbWUuaG91cnM7XHJcbiAgfVxyXG5cclxuICBnZXQgZGVmYXVsdE1pbnV0ZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnRpbWUubWludXRlcztcclxuICB9XHJcblxyXG4gIGdldCBkZWZhdWx0U2Vjb25kcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMudGltZS5zZWNvbmRzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHQxMkhvdXJzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy50aW1lLmhvdXJzID49IDEyID8gJ1BNJyA6ICdBTSc7XHJcbiAgfVxyXG5cclxuICBidWlsZFRpbWVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5idWlsZEhvdXJzKCk7XHJcbiAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xyXG4gICAgdGhpcy5idWlsZFNlY29uZHMoKTtcclxuICAgIHRoaXMuYnVpbGQxMkhvdXJzKCk7XHJcbiAgfSBcclxuXHJcbiAgc2VsZWN0MTJIb3Vycyh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWUuc2V0U2VsZWN0ZWQxMkhvdXJzKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFRvVGltZShkZWxheTogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmhvdXJFbmFibGVkICYmIHRoaXMuaG91ckxpc3RFbGVtZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5ob3VyTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLnZpZXdIb3VycyEsIGRlbGF5LCAnaG91cicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5taW51dGVFbmFibGVkICYmIHRoaXMubWludXRlTGlzdEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLm1pbnV0ZUxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5taW51dGVzISwgZGVsYXksICdtaW51dGUnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2Vjb25kRW5hYmxlZCAmJiB0aGlzLnNlY29uZExpc3RFbGVtZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5zZWNvbmRMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUuc2Vjb25kcyEsIGRlbGF5LCAnc2Vjb25kJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLm56VXNlMTJIb3VycyAmJiB0aGlzLnVzZTEySG91cnNMaXN0RWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRIb3VycyA9IHRoaXMudGltZS5zZWxlY3RlZDEySG91cnM7XG4gICAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkSG91cnMgPT09ICdBTScgPyAwIDogMTtcbiAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnVzZTEySG91cnNMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBpbmRleCwgZGVsYXksICcxMi1ob3VyJyk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0SG91cihob3VyOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUuc2V0SG91cnMoaG91ci5pbmRleCwgaG91ci5kaXNhYmxlZCk7XG4gICAgaWYgKCEhdGhpcy5fZGlzYWJsZWRNaW51dGVzKSB7XG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGlzYWJsZWRTZWNvbmRzIHx8IHRoaXMuX2Rpc2FibGVkTWludXRlcykge1xuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RNaW51dGUobWludXRlOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUuc2V0TWludXRlcyhtaW51dGUuaW5kZXgsIG1pbnV0ZS5kaXNhYmxlZCk7XG4gICAgaWYgKCEhdGhpcy5fZGlzYWJsZWRTZWNvbmRzKSB7XG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFNlY29uZChzZWNvbmQ6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IHZvaWQge1xuICAgIHRoaXMudGltZS5zZXRTZWNvbmRzKHNlY29uZC5pbmRleCwgc2Vjb25kLmRpc2FibGVkKTtcbiAgfVxuXG4gIHNjcm9sbFRvU2VsZWN0ZWQoaW5zdGFuY2U6IEhUTUxFbGVtZW50LCBpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMCwgdW5pdDogTnpUaW1lUGlja2VyVW5pdCk6IHZvaWQge1xuICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdHJhbnNJbmRleCA9IHRoaXMudHJhbnNsYXRlSW5kZXgoaW5kZXgsIHVuaXQpO1xuICAgIGNvbnN0IGN1cnJlbnRPcHRpb24gPSAoaW5zdGFuY2UuY2hpbGRyZW5bdHJhbnNJbmRleF0gfHwgaW5zdGFuY2UuY2hpbGRyZW5bMF0pIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMuc2Nyb2xsVG8oaW5zdGFuY2UsIGN1cnJlbnRPcHRpb24ub2Zmc2V0VG9wLCBkdXJhdGlvbik7XG4gIH1cblxuICB0cmFuc2xhdGVJbmRleChpbmRleDogbnVtYmVyLCB1bml0OiBOelRpbWVQaWNrZXJVbml0KTogbnVtYmVyIHtcbiAgICBpZiAodW5pdCA9PT0gJ2hvdXInKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxjSW5kZXgodGhpcy5uekRpc2FibGVkSG91cnMgPy4oKSwgdGhpcy5ob3VyUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21pbnV0ZScpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleCh0aGlzLm56RGlzYWJsZWRNaW51dGVzID8uKHRoaXMudGltZS5ob3VycyEpLCB0aGlzLm1pbnV0ZVJhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpKTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdzZWNvbmQnKSB7XG4gICAgICAvLyBzZWNvbmRcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChcbiAgICAgICAgdGhpcy5uekRpc2FibGVkU2Vjb25kcyA/Lih0aGlzLnRpbWUuaG91cnMhLCB0aGlzLnRpbWUubWludXRlcyEpLFxuICAgICAgICB0aGlzLnNlY29uZFJhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAxMi1ob3VyXG4gICAgICByZXR1cm4gdGhpcy5jYWxjSW5kZXgoW10sIHRoaXMudXNlMTJIb3Vyc1JhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUbyhlbGVtZW50OiBIVE1MRWxlbWVudCwgdG86IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHRvO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkaWZmZXJlbmNlID0gdG8gLSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICBjb25zdCBwZXJUaWNrID0gKGRpZmZlcmVuY2UgLyBkdXJhdGlvbikgKiAxMDtcblxuICAgIHJlcUFuaW1GcmFtZSgoKSA9PiB7XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wICsgcGVyVGljaztcbiAgICAgIGlmIChlbGVtZW50LnNjcm9sbFRvcCA9PT0gdG8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24gLSAxMCk7XG4gICAgfSk7XG4gIH1cblxuICBjYWxjSW5kZXgoYXJyYXk6IG51bWJlcltdIHwgdW5kZWZpbmVkLCBpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoYXJyYXkgPy5sZW5ndGggJiYgdGhpcy5uekhpZGVEaXNhYmxlZE9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGluZGV4IC1cbiAgICAgICAgYXJyYXkucmVkdWNlKChwcmUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByZSArICh2YWx1ZSA8IGluZGV4ID8gMSA6IDApO1xuICAgICAgICB9LCAwKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjaGFuZ2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudGltZS52YWx1ZSEpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB0b3VjaGVkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9uVG91Y2gpIHtcbiAgICAgIHRoaXMub25Ub3VjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHRpbWVEaXNhYmxlZCh2YWx1ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGhvdXIgPSB2YWx1ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IG1pbnV0ZSA9IHZhbHVlLmdldE1pbnV0ZXMoKTtcbiAgICBjb25zdCBzZWNvbmQgPSB2YWx1ZS5nZXRTZWNvbmRzKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLm56RGlzYWJsZWRIb3VycyA/LigpLmluZGV4T2YoaG91cikgPz8gLTEpID4gLTEgfHxcbiAgICAgICh0aGlzLm56RGlzYWJsZWRNaW51dGVzID8uKGhvdXIpLmluZGV4T2YobWludXRlKSA/PyAtMSkgPiAtMSB8fFxuICAgICAgKHRoaXMubnpEaXNhYmxlZFNlY29uZHMgPy4oaG91ciwgbWludXRlKS5pbmRleE9mKHNlY29uZCkgPz8gLTEpID4gLTFcbiAgICApO1xuICB9XG5cbiAgb25DbGlja05vdygpOiB2b2lkIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGlmICh0aGlzLnRpbWVEaXNhYmxlZChub3cpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGltZS5zZXRWYWx1ZShub3cpO1xuICAgIHRoaXMuY2hhbmdlZCgpO1xuICAgIHRoaXMuY2xvc2VQYW5lbC5lbWl0KCk7XG4gIH1cblxuICBvbkNsaWNrT2soKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZVBhbmVsLmVtaXQoKTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWRIb3VyKGhvdXI6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBob3VyLmluZGV4ID09PSB0aGlzLnRpbWUudmlld0hvdXJzO1xuICB9XG5cbiAgaXNTZWxlY3RlZE1pbnV0ZShtaW51dGU6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtaW51dGUuaW5kZXggPT09IHRoaXMudGltZS5taW51dGVzO1xuICB9XG5cbiAgaXNTZWxlY3RlZFNlY29uZChzZWNvbmQ6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBzZWNvbmQuaW5kZXggPT09IHRoaXMudGltZS5zZWNvbmRzO1xuICB9XG5cbiAgaXNTZWxlY3RlZDEySG91cnModmFsdWU6IHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlLnZhbHVlLnRvVXBwZXJDYXNlKCkgPT09IHRoaXMudGltZS5zZWxlY3RlZDEySG91cnM7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXBpY2tlci10aW1lLXBhbmVsJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZWQoKTtcbiAgICAgIHRoaXMudG91Y2hlZCgpO1xuICAgICAgdGhpcy5zY3JvbGxUb1RpbWUoMTIwKTtcbiAgICB9KTtcbiAgICB0aGlzLmJ1aWxkVGltZXMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9UaW1lKCk7XG4gICAgICB0aGlzLmZpcnN0U2Nyb2xsZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuelVzZTEySG91cnMsIG56RGVmYXVsdE9wZW5WYWx1ZSB9ID0gY2hhbmdlcztcbiAgICBpZiAoIW56VXNlMTJIb3VycyA/LnByZXZpb3VzVmFsdWUgJiYgbnpVc2UxMkhvdXJzID8uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmJ1aWxkMTJIb3VycygpO1xuICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xuICAgIH1cbiAgICBpZiAobnpEZWZhdWx0T3BlblZhbHVlID8uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLnRpbWUuc2V0RGVmYXVsdE9wZW5WYWx1ZSh0aGlzLm56RGVmYXVsdE9wZW5WYWx1ZSB8fCBuZXcgRGF0ZSgpKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy50aW1lLnNldFZhbHVlKHZhbHVlLCB0aGlzLm56VXNlMTJIb3Vycyk7XG4gICAgdGhpcy5idWlsZFRpbWVzKCk7XG5cbiAgICBpZiAodmFsdWUgJiYgdGhpcy5maXJzdFNjcm9sbGVkKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvVGltZSgxMjApO1xuICAgIH1cbiAgICAvLyBNYXJrIHRoaXMgY29tcG9uZW50IHRvIGJlIGNoZWNrZWQgbWFudWFsbHkgd2l0aCBpbnRlcm5hbCBwcm9wZXJ0aWVzIGNoYW5naW5nIChzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwODE2KVxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmV2ZW50IGlucHV0IGxvc2luZyBmb2N1cyB3aGVuIGNsaWNrIHBhbmVsXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgb25Nb3VzZWRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cclxuXHJcbiAgLyogQ3VzdG9taXplZCBjb2RlICovXHJcbiAgdXBkYXRlVGltZSgkZXZlbnQsIHR5cGU6IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGUgPT09ICdob3VycycpIHtcclxuICAgICAgdGhpcy50aW1lLnNldEhvdXJzKCRldmVudCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICdtaW51dGVzJykge1xyXG4gICAgICB0aGlzLnRpbWUuc2V0TWludXRlcygkZXZlbnQsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09PSAnc2Vjb25kcycpIHtcclxuICAgICAgdGhpcy50aW1lLnNldFNlY29uZHMoJGV2ZW50LCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwibnpJbkRhdGVQaWNrZXJcIiBjbGFzcz1cImFudC1waWNrZXItaGVhZGVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItaGVhZGVyLXZpZXdcIj57eyBkYXRlSGVscGVyLmZvcm1hdCgkYW55KHRpbWU/LnZhbHVlKSwgZm9ybWF0KSB8fCAnJm5ic3A7JyB9fTwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImFudC1waWNrZXItY29udGVudCBjbWFjcy1kYXRldGltZS1waWNrZXJcIiBbY2xhc3MuY21hY3MtZGF0ZXRpbWUtcGlja2VyLW5vc2Vjb25kc109XCJoaWRlU2Vjb25kcyAmJiAhbnpVc2UxMkhvdXJzXCI+XHJcbiAgICA8Y21hY3MtaW5wdXQtbnVtYmVyIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiA1cHhcIiBjbGFzcz1cImNtYWNzLWRhdGV0aW1lLXBpY2tlci1pbnB1dC1udW1iZXJcIiBbbWluXT1cIm56VXNlMTJIb3VycyA/IDEgOiAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW21heF09XCJuelVzZTEySG91cnMgPyAxMiA6IDIzXCIgWyhuZ01vZGVsKV09XCJob3Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZVRpbWUoJGV2ZW50LCAnaG91cnMnKVwiPjwvY21hY3MtaW5wdXQtbnVtYmVyPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWRhdGV0aW1lLWRpdmlkZXJzXCI+PHNwYW4+Ojwvc3Bhbj48L2Rpdj5cclxuICAgIDxjbWFjcy1pbnB1dC1udW1iZXIgc3R5bGU9XCJtYXJnaW4tbGVmdDogNXB4XCIgY2xhc3M9XCJjbWFjcy1kYXRldGltZS1waWNrZXItaW5wdXQtbnVtYmVyXCIgW21pbl09XCIwXCIgW21heF09XCI1OVwiIFsobmdNb2RlbCldPVwibWludXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZVRpbWUoJGV2ZW50LCAnbWludXRlcycpXCI+PC9jbWFjcy1pbnB1dC1udW1iZXI+XHJcbiAgICA8Y21hY3Mtc2VsZWN0ICpuZ0lmPVwibnpVc2UxMkhvdXJzXCIgY2xhc3M9XCJhbXBtZHJvcGRvd25cIiBbKG5nTW9kZWwpXT1cInJhbmdlXCIgKG5nTW9kZWxDaGFuZ2UpPVwic2VsZWN0MTJIb3VycygkZXZlbnQpXCI+XHJcbiAgICAgIDxjbWFjcy1vcHRpb24gKm5nRm9yPVwibGV0IHJhbmdlMiBvZiB1c2UxMkhvdXJzUmFuZ2VcIiBbdmFsdWVdPVwicmFuZ2UyLnZhbHVlXCIgW2xhYmVsXT1cInJhbmdlMi52YWx1ZSB8IHVwcGVyY2FzZVwiPlxyXG4gICAgICA8L2NtYWNzLW9wdGlvbj5cclxuICAgIDwvY21hY3Mtc2VsZWN0PlxyXG4gICAgPGRpdiAqbmdJZj1cIiFuelVzZTEySG91cnMgJiYgIWhpZGVTZWNvbmRzXCIgY2xhc3M9XCJjbWFjcy1kYXRldGltZS1kaXZpZGVyc1wiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlOyBsZWZ0OiAtMnB4O1wiPjxzcGFuPjo8L3NwYW4+PC9kaXY+XHJcbiAgICA8Y21hY3MtaW5wdXQtbnVtYmVyICpuZ0lmPVwiIW56VXNlMTJIb3VycyAmJiAhaGlkZVNlY29uZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWRhdGV0aW1lLXBpY2tlci1pbnB1dC1udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbWluXT1cIjBcIiBbbWF4XT1cIjU5XCIgWyhuZ01vZGVsKV09XCJzZWNvbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlVGltZSgkZXZlbnQsICdzZWNvbmRzJylcIj48L2NtYWNzLWlucHV0LW51bWJlcj5cclxuPC9kaXY+XHJcbiJdfQ==