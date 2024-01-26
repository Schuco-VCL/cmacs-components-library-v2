import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { getMonth } from "date-fns";
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzTabChangeEvent } from '../cmacs-tabs/interfaces';
import moment from 'moment';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/date-picker";
import * as i4 from "@angular/forms";
import * as i5 from "ng-zorro-antd/core/transition-patch";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/core/outlet";
import * as i8 from "../cmacs-tabs/ptb-tab-label.directive";
import * as i9 from "../cmacs-tabs/ptb-tabs-nav.component";
import * as i10 from "../cmacs-popover/popover";
import * as i11 from "../cmacs-button/cmacs-button.component";
import * as i12 from "../cmacs-menu/menu.directive";
import * as i13 from "../cmacs-menu/menu-item.directive";
import * as i14 from "../cmacs-dropdown/dropdown.directive";
import * as i15 from "../cmacs-dropdown/dropdown-a.directive";
import * as i16 from "../cmacs-dropdown/dropdown-menu.component";
import * as i17 from "../cmacs-date-picker/date-picker.component";
import * as i18 from "../cmacs-date-picker/month-picker.component";
import * as i19 from "../cmacs-date-picker/week-picker.component";
function CmacsTimelineDatepickerComponent_div_0_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 14);
    i0.ɵɵlistener("click", function CmacsTimelineDatepickerComponent_div_0_li_8_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const i_r11 = restoredCtx.index; const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.customSelect(i_r11)); });
    i0.ɵɵelement(1, "i", 15);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", option_r10.selected ? 1 : 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r10.title);
} }
function CmacsTimelineDatepickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "a", 8)(2, "div", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelement(4, "i", 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "cmacs-dropdown-menu", null, 11)(7, "ul", 12);
    i0.ɵɵtemplate(8, CmacsTimelineDatepickerComponent_div_0_li_8_Template, 4, 3, "li", 13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const _r8 = i0.ɵɵreference(6);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cmacsTrigger", "click")("cmacsOpen", true)("dropdownMenu", _r8);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getSelected().length ? ctx_r0.getSelected()[0].title : "Select", " ");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.modeOptions);
} }
function CmacsTimelineDatepickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "a", 16)(2, "div", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getSelected().length ? ctx_r1.getSelected()[0].title : "Select", " ");
} }
function CmacsTimelineDatepickerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("margin-right", ctx_r2.gutter, "px");
    i0.ɵɵclassProp("ant-tabs-tab-active", true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.previousYearWeek, " ");
} }
function CmacsTimelineDatepickerComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tab_r14.title);
} }
function CmacsTimelineDatepickerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵlistener("click", function CmacsTimelineDatepickerComponent_div_5_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const i_r15 = restoredCtx.index; const tab_r14 = restoredCtx.$implicit; const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.clickLabel(i_r15, tab_r14.disabled)); });
    i0.ɵɵtemplate(1, CmacsTimelineDatepickerComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("margin-right", ctx_r3.gutter, "px");
    i0.ɵɵclassProp("ant-tabs-tab-active", ctx_r3.checkActiveTab(i_r15));
    i0.ɵɵproperty("disabled", tab_r14.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", tab_r14.title);
} }
function CmacsTimelineDatepickerComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "cmacs-week-picker", 22);
    i0.ɵɵlistener("ngModelChange", function CmacsTimelineDatepickerComponent_div_6_ng_container_1_Template_cmacs_week_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r22.date = $event); })("ngModelChange", function CmacsTimelineDatepickerComponent_div_6_ng_container_1_Template_cmacs_week_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r24.getWeek($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r20.date)("dropdownClassName", "cmacs-timeline-datepicker-panel")("timeline", true);
} }
function CmacsTimelineDatepickerComponent_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "cmacs-month-picker", 23);
    i0.ɵɵlistener("ngModelChange", function CmacsTimelineDatepickerComponent_div_6_ng_container_2_Template_cmacs_month_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r25.date = $event); })("ngModelChange", function CmacsTimelineDatepickerComponent_div_6_ng_container_2_Template_cmacs_month_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r27 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r27.getMonth($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dropdownClassName", "cmacs-timeline-datepicker-panel")("timeline", true)("ngModel", ctx_r21.date);
} }
function CmacsTimelineDatepickerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CmacsTimelineDatepickerComponent_div_6_ng_container_1_Template, 2, 3, "ng-container", 21);
    i0.ɵɵtemplate(2, CmacsTimelineDatepickerComponent_div_6_ng_container_2_Template, 2, 3, "ng-container", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.mode === "week");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.mode === "month");
} }
function CmacsTimelineDatepickerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "i", 24);
    i0.ɵɵlistener("cmacsPopoverVisibleChange", function CmacsTimelineDatepickerComponent_div_7_Template_i_cmacsPopoverVisibleChange_1_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.rangePopoverVisible = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    const _r6 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cmacsPopoverVisible", ctx_r5.rangePopoverVisible)("cmacsPopoverOverlayClassName", "timeline-datepicker-custom-range-picker-popup")("cmacsPopoverContent", _r6);
} }
function CmacsTimelineDatepickerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25)(1, "nz-range-picker", 26);
    i0.ɵɵlistener("ngModelChange", function CmacsTimelineDatepickerComponent_ng_template_8_Template_nz_range_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r30.range = $event); })("ngModelChange", function CmacsTimelineDatepickerComponent_ng_template_8_Template_nz_range_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r32 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r32.onChange($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(2, "div", 27)(3, "button", 28);
    i0.ɵɵlistener("click", function CmacsTimelineDatepickerComponent_ng_template_8_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r31); const ctx_r33 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r33.onClosePopover()); });
    i0.ɵɵtext(4, "OK");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r7.range);
} }
export class CmacsTimelineDatepickerComponent {
    set selectedIndex(value) {
        this.indexToSelect = value;
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedRangeIdxs(value) {
        this._selectedRangeIdxs = value;
    }
    get selectedRangeIdxs() {
        return this._selectedRangeIdxs;
    }
    set date(value) {
        if (value !== null) {
            this._date = value;
            if (this.mode === 'week') {
                this.listOfNzTabComponent = this.getWeeksInYear(this.date);
                this.showPreviousYearWeek = false;
                this.selectedIndex = this.getWeekNumber(value) - 1;
            }
            else if (this.mode === 'month') {
                this.selectedIndex = value.getMonth();
            }
        }
    }
    set range(range) {
        if (range !== null && range.length) {
            this.showPreviousYearWeek = false;
            this._range = range;
            let stDateYear = moment(this.range[0]).year();
            const ndDateYear = moment(this.range[1]).year();
            if (moment(this.range[0]).year() === moment(this.range[1]).year()) {
                if (this.mode === 'week') {
                    this.selectedRangeIdxs = [this.getWeekNumber(this._range[0]) - 1, this.getWeekNumber(this._range[1]) - 1];
                }
                else {
                    this.selectedRangeIdxs = [getMonth(this._range[0]), getMonth(this._range[1])];
                }
            }
            else {
                if (this.mode === 'week') {
                    let sumWeeks = 0;
                    while (ndDateYear - stDateYear) {
                        sumWeeks += this.getWeeksInYearCustom(new Date(stDateYear));
                        stDateYear++;
                    }
                    this.selectedRangeIdxs = [this.getWeekNumber(this._range[0]) - 1, sumWeeks + this.getWeekNumber(this._range[1]) - 1];
                }
                else {
                    this.selectedRangeIdxs = [getMonth(this._range[0]), 12 * (ndDateYear - stDateYear) + getMonth(this._range[1])];
                }
            }
            this.selectedIndex = this._selectedRangeIdxs[0];
            this.listOfNzTabComponent = this.getValuesSlider();
        }
    }
    get range() {
        return this._range;
    }
    onChange(range) {
        if (range !== null) {
            this.range = range;
            this.rangeChange.emit(range);
        }
    }
    get date() {
        return this._date;
    }
    getWeek(result) {
        if (result !== null) {
            this.dateChange.emit(result);
        }
    }
    getWeekNumber(date) {
        const month = moment(date).month();
        moment.updateLocale(this.locale, this.weekLocale);
        const week = moment(date).week();
        const weeksInYear = this.getWeeksInYearCustom(date);
        if (month === 11 && week === 1) {
            return weeksInYear;
        }
        if (month === 0 && (week === 53 || week === 52)) {
            this.showPreviousYearWeek = true;
            this.previousYearWeek = week;
            return -1;
        }
        return week;
    }
    getWeeksInYearCustom(date) {
        moment.updateLocale(this.locale, this.weekLocale);
        return moment(date).isoWeeksInYear();
    }
    clickLabel(index, disabled) {
        if (!disabled && this._date !== null) {
            if (!this.ranged) {
                this.selectedIndex = index;
                if (this.mode === 'week') {
                    const d = new Date(this._date.getFullYear(), 0, 1);
                    const weeks = this.getWeeksInYearCustom(d);
                    d.setDate(weeks === 52 ? d.getDate() + ((index) * 7) : d.getDate() + (index * 7));
                    this.date = d;
                    this.dateChange.emit(this.date);
                }
                if (this.mode === 'month') {
                    const d = new Date(this._date.getFullYear(), index, 1);
                    this.date = d;
                    this.dateChange.emit(this.date);
                }
            }
            else {
                this.selectedRangeIdxs = [index, index];
                if (this.mode === 'week') {
                    const d = new Date(this._date.getFullYear(), 0, 1);
                    const weeks = this.getWeeksInYearCustom(d);
                    d.setDate(weeks === 52 ? d.getDate() + ((index + 1) * 7 - 1) : d.getDate() + (index * 7) - 1);
                    this.range = [d, d];
                    this.rangeChange.emit(this.range);
                }
                if (this.mode === 'month') {
                    const start = new Date(this._date.getFullYear(), index, 1);
                    const end = new Date(this._date.getFullYear(), index + 1, 0);
                    this.range = [start, end];
                    this.rangeChange.emit(this.range);
                }
            }
        }
    }
    createChangeEvent(index) {
        const event = new NzTabChangeEvent();
        event.index = index;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent[index];
            this.listOfNzTabComponent.forEach((item, i) => {
                if (i !== index) {
                    item.deselect.emit();
                }
            });
            event.tab.select.emit();
        }
        return event;
    }
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    clampTabIndex(index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
    }
    constructor(renderer, elementRef, i18n, cdr) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.i18n = i18n;
        this.cdr = cdr;
        this.indexToSelect = null;
        this.destroy$ = new Subject();
        this.el = this.elementRef.nativeElement;
        this._selectedIndex = null;
        this._selectedRangeIdxs = [];
        this._date = new Date();
        this._range = [];
        this.gutter = 2;
        this.mode = 'week';
        this.restrictMode = false;
        this.ranged = false;
        this.weekLocale = { week: { dow: 7, doy: 11 } };
        this.locale = 'en';
        this.onNextClick = new EventEmitter();
        this.onPrevClick = new EventEmitter();
        this.selectChange = new EventEmitter(true);
        this.selectedIndexChange = new EventEmitter();
        this.dateChange = new EventEmitter();
        this.rangeChange = new EventEmitter();
        this.modeChange = new EventEmitter();
        this.showPreviousYearWeek = false;
        this.previousYearWeek = null;
        this.rangePopoverVisible = false;
        this.modeOptions = [
            { title: 'Week', value: 'week', selected: true },
            { title: 'Month', value: 'month', selected: false }
        ];
    }
    ngOnInit() {
        this.weekLocale = {
            week: {
                dow: moment.localeData(this.locale).firstDayOfWeek(),
                doy: moment.localeData(this.locale).firstDayOfYear()
            }
        };
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            switch (this.i18n.getLocale().locale) {
                case 'de':
                    this.modeOptions[0].title = 'Woche';
                    this.modeOptions[1].title = 'Monat';
                    break;
                case 'en':
                    this.modeOptions[0].title = 'Week';
                    this.modeOptions[1].title = 'Month';
                    break;
                case 'ja':
                    this.modeOptions[0].title = '週';
                    this.modeOptions[1].title = '月';
                    break;
                default:
                    this.modeOptions[0].title = 'Week';
                    this.modeOptions[1].title = 'Month';
            }
            this.cdr.markForCheck();
        });
        this.updateSelectedMode();
    }
    onClosePopover() {
        this.rangePopoverVisible = false;
    }
    ngOnChanges(changes) {
        if (changes.mode) {
            this.updateSelectedMode();
        }
    }
    updateSelectedMode() {
        this.modeOptions.forEach(mode => {
            mode.selected = mode.value === this.mode;
        });
        this.listOfNzTabComponent = this.getValuesSlider();
        if (this.ranged) {
            this.range = this.range;
        }
    }
    getValuesSlider() {
        if (this.mode === 'week' && !this.ranged) {
            this.date = this.date;
            return this.getWeeksInYear(this.date);
        }
        else if (this.mode === 'month') {
            this.date = this.date;
            if (this.range.length) {
                let stDateYear = moment(this.range[0]).year();
                const ndDateYear = moment(this.range[1]).year();
                if (stDateYear !== ndDateYear) {
                    let rangedMonth = this.getDefaultMonths();
                    while (ndDateYear - stDateYear) {
                        stDateYear++;
                        rangedMonth = rangedMonth.concat(this.getDefaultMonths());
                    }
                    return rangedMonth;
                }
                return this.getDefaultMonths();
            }
            return this.getDefaultMonths();
        }
        else if (this.mode === 'week' && this.ranged) {
            if (this.range.length) {
                let stDateYear = moment(this.range[0]).year();
                const ndDateYear = moment(this.range[1]).year();
                if (stDateYear !== ndDateYear) {
                    let rangedWeeks = this.getWeeksInYear(new Date(stDateYear));
                    while (ndDateYear - stDateYear) {
                        rangedWeeks = rangedWeeks.concat(this.getWeeksInYear(new Date(stDateYear)));
                        stDateYear++;
                    }
                    return rangedWeeks;
                }
                return this.getWeeksInYear(this.range[0]);
            }
            return this.getWeeksInYear(new Date());
        }
    }
    getDefaultMonths() {
        return this.i18n.getLocale().locale === 'de' ? [{ title: 'Jan.' }, { title: 'Feb.' }, { title: 'März' }, { title: 'Apr.' }, { title: 'Mai' }, { title: 'Juni' },
            { title: 'Juli' }, { title: 'Aug.' }, { title: 'Sept.' }, { title: 'Okt.' }, { title: 'Nov.' }, { title: 'Dez.' }] :
            this.i18n.getLocale().locale === 'ja' ? [{ title: '1月' }, { title: '2月' }, { title: '3月' }, { title: '4月' }, { title: '5月' }, { title: '6月' },
                { title: '7月' }, { title: '8月' }, { title: '9月' }, { title: '10月' }, { title: '11月' }, { title: '12月' }] :
                [{ title: 'Jan' }, { title: 'Feb' }, { title: 'Mar' }, { title: 'Apr' }, { title: 'May' }, { title: 'Jun' },
                    { title: 'Jul' }, { title: 'Aug' }, { title: 'Sep' }, { title: 'Oct' }, { title: 'Nov' }, { title: 'Dec' }];
    }
    getWeeksInYear(date) {
        let temp = [];
        const length = this.getWeeksInYearCustom(date);
        for (let i = 0; i < length; i++) {
            temp.push({ title: this.formatWeekNumber(i + 1) });
        }
        return temp;
    }
    formatWeekNumber(value) {
        return ("0" + value).slice(-2);
    }
    ngAfterContentChecked() {
        //this.updateSlider();
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            const indexToSelect = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this._selectedIndex !== indexToSelect) {
                const isFirstRun = this._selectedIndex == null;
                /*if (!isFirstRun) {
                  this.selectChange.emit(this.createChangeEvent(indexToSelect));
                }*/
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then(() => {
                    this.listOfNzTabComponent.forEach((tab, index) => (tab.isActive = index === indexToSelect));
                    if (!isFirstRun) {
                        this.selectedIndexChange.emit(indexToSelect);
                    }
                });
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this.listOfNzTabComponent.forEach((tab, index) => {
                tab.position = index - indexToSelect;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                    tab.origin = indexToSelect - this._selectedIndex;
                }
            });
            if (this._selectedIndex !== indexToSelect) {
                this._selectedIndex = indexToSelect;
                this.cdr.markForCheck();
            }
        }
    }
    customSelect(index) {
        this.modeOptions.forEach((option) => {
            option.selected = false;
        });
        this.modeOptions[index].selected = true;
        this.mode = this.modeOptions[index].value;
        this.modeChange.emit(this.mode);
        this.listOfNzTabComponent = this.getValuesSlider();
        if (this.ranged) {
            this.range = this.range;
        }
    }
    getSelected() {
        return this.modeOptions.filter(item => item.selected);
    }
    getMonth(result) {
        this.dateChange.emit(result);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    checkActiveTab(index) {
        if (!this.ranged) {
            return this.selectedIndex >= 0 && !this.showPreviousYearWeek && this.selectedIndex === index;
        }
        else {
            return this.selectedRangeIdxs.length ? index >= this.selectedRangeIdxs[0] && index <= this.selectedRangeIdxs[1] : false;
        }
    }
    static { this.ɵfac = function CmacsTimelineDatepickerComponent_Factory(t) { return new (t || CmacsTimelineDatepickerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTimelineDatepickerComponent, selectors: [["cmacs-timeline-datepicker"]], hostVars: 4, hostBindings: function CmacsTimelineDatepickerComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-tabs", true)("ant-tabs-line", true);
        } }, inputs: { gutter: "gutter", mode: "mode", restrictMode: "restrictMode", ranged: "ranged", weekLocale: "weekLocale", locale: "locale", selectedIndex: "selectedIndex", selectedRangeIdxs: "selectedRangeIdxs", date: "date", range: "range" }, outputs: { onNextClick: "onNextClick", onPrevClick: "onPrevClick", selectChange: "selectChange", selectedIndexChange: "selectedIndexChange", dateChange: "dateChange", rangeChange: "rangeChange", modeChange: "modeChange" }, exportAs: ["cmacsTimelineDatepicker"], features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 12, consts: [["class", "cmacs-timeline-item cmacs-timeline-item-dropdown", 4, "ngIf"], [1, "cmacs-timeline-item", 2, "margin-right", "10px", "max-width", "calc(100% - 160px - 16px)"], ["role", "tablist", "tabindex", "0", 1, "ant-tabs-bar", "ant-tabs-top-bar", "cmacs-timeline-datepicker-slider", 3, "nzType", "nzShowPagination", "nzPositionMode", "nzAnimated", "nzHideBar", "selectedIndex", "nzOnNextClick", "nzOnPrevClick"], ["ptb-tab-label", "", "role", "tab", "class", "cmacs-timeline-datepicker-label", 3, "margin-right", "ant-tabs-tab-active", 4, "ngIf"], ["ptb-tab-label", "", "role", "tab", "class", "cmacs-timeline-datepicker-label", 3, "margin-right", "ant-tabs-tab-active", "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "cmacs-timeline-item", 4, "ngIf"], ["contentTemplateRangePicker", ""], [1, "cmacs-timeline-item", "cmacs-timeline-item-dropdown"], ["cmacs-dropdown", "", 1, "cmacs-dropdowm-timeline-datepicker", 2, "display", "inline-flex", 3, "cmacsTrigger", "cmacsOpen", "dropdownMenu"], [1, "cmacs-open-dropdown-wrapper", 2, "width", "80px"], [1, "iconArrowLarge-Solid-Down"], ["menu", "cmacsDropdownMenu"], ["cmacs-menu", "", 2, "min-width", "125px"], ["cmacs-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["cmacs-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "check"], [1, "cmacs-dropdowm-timeline-datepicker"], ["ptb-tab-label", "", "role", "tab", 1, "cmacs-timeline-datepicker-label"], ["ptb-tab-label", "", "role", "tab", 1, "cmacs-timeline-datepicker-label", 3, "disabled", "click"], [4, "nzStringTemplateOutlet"], [1, "cmacs-timeline-item"], [4, "ngIf"], ["placeHolder", "", 3, "ngModel", "dropdownClassName", "timeline", "ngModelChange"], ["placeHolder", "", 3, "dropdownClassName", "timeline", "ngModel", "ngModelChange"], ["cmacs-popover", "", "cmacsPopoverTrigger", "click", "cmacsPopoverPlacement", "bottomLeft", 1, "iconUISmall-Calender", 3, "cmacsPopoverVisible", "cmacsPopoverOverlayClassName", "cmacsPopoverContent", "cmacsPopoverVisibleChange"], [1, "timeline-date-range-wrapper"], ["nzInline", "", "nzPlaceHolder", "", 3, "ngModel", "ngModelChange"], [2, "text-align", "right", "display", "block"], ["cmacs-button", "", "type", "primary", 3, "click"]], template: function CmacsTimelineDatepickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsTimelineDatepickerComponent_div_0_Template, 9, 5, "div", 0);
            i0.ɵɵtemplate(1, CmacsTimelineDatepickerComponent_div_1_Template, 4, 1, "div", 0);
            i0.ɵɵelementStart(2, "div", 1)(3, "ptb-tabs-nav", 2);
            i0.ɵɵlistener("nzOnNextClick", function CmacsTimelineDatepickerComponent_Template_ptb_tabs_nav_nzOnNextClick_3_listener() { return ctx.onNextClick.emit(); })("nzOnPrevClick", function CmacsTimelineDatepickerComponent_Template_ptb_tabs_nav_nzOnPrevClick_3_listener() { return ctx.onPrevClick.emit(); });
            i0.ɵɵtemplate(4, CmacsTimelineDatepickerComponent_div_4_Template, 2, 5, "div", 3);
            i0.ɵɵtemplate(5, CmacsTimelineDatepickerComponent_div_5_Template, 2, 6, "div", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(6, CmacsTimelineDatepickerComponent_div_6_Template, 3, 2, "div", 5);
            i0.ɵɵtemplate(7, CmacsTimelineDatepickerComponent_div_7_Template, 2, 3, "div", 5);
            i0.ɵɵtemplate(8, CmacsTimelineDatepickerComponent_ng_template_8_Template, 5, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.restrictMode);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.restrictMode);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzType", "line")("nzShowPagination", true)("nzPositionMode", "horizontal")("nzAnimated", true)("nzHideBar", true)("selectedIndex", ctx.selectedIndex);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showPreviousYearWeek);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.listOfNzTabComponent);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.ranged);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (ctx.mode === "week" || ctx.mode === "month") && ctx.ranged);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.NzDatePickerComponent, i3.NzRangePickerComponent, i4.NgControlStatus, i4.NgModel, i5.ɵNzTransitionPatchDirective, i6.NzIconDirective, i7.NzStringTemplateOutletDirective, i8.PtbTabLabelDirective, i9.PtbTabsNavComponent, i10.CmacsPopoverDirective, i11.CmacsButtonComponent, i12.CmacsMenuDirective, i13.CmacsMenuItemDirective, i14.CmacsDropDownDirective, i15.CmacsDropDownADirective, i16.CmacsDropdownMenuComponent, i17.CmacsDatePickerComponent, i18.CmacsMonthPickerComponent, i19.CmacsWeekPickerComponent], styles: [".cmacs-timeline-item .ant-tabs-bar{margin:0 0 16px;border-bottom:1px solid #DEE0E5;outline:none;transition:padding .3s cubic-bezier(.645,.045,.355,1)}.timeline-datepicker-custom-range-picker-popup .ant-picker-cell-in-view.ant-picker-cell-in-range:before{background:#f3f3f4!important;height:30px!important}.timeline-datepicker-custom-range-picker-popup{margin:20px}.timeline-datepicker-custom-range-picker-popup .ant-picker-cell-in-range{background:transparent!important}.timeline-datepicker-custom-range-picker-popup .ant-picker-panel-container{box-shadow:none!important}.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end .ant-picker-cell-inner:after,.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start .ant-picker-cell-inner:after{position:absolute;top:0;bottom:0;z-index:-1;background:transparent!important;transition:all .3s;content:\"\"}.timeline-date-range-wrapper{height:348px}.cmacs-timeline-item i.iconUISmall-Calender{position:relative;top:4px;font-size:15px;cursor:pointer}.timeline-datepicker-custom-range-picker-popup .ant-popover-inner-content{max-width:unset!important;max-height:unset!important;height:420px;overflow:hidden;padding:23px 15px 0}.timeline-datepicker-custom-range-picker-popup .ant-popover-arrow{display:none}::ng-deep .cmacs-timeline-item .ant-tabs{display:block!important}.cmacs-timeline-item .ant-tabs-ink-bar{position:absolute;bottom:1px;left:0;z-index:1;box-sizing:border-box;height:2px;background-color:#2a7cff;transform-origin:0 0}[hidden]{display:none!important}.cmacs-timeline-item .ant-tabs-nav{position:relative;display:inline-block;box-sizing:border-box;margin:0;padding-left:0;list-style:none;transition:transform .3s cubic-bezier(.645,.045,.355,1)}.cmacs-timeline-item .ant-tabs-nav .ant-tabs-tab{position:relative;display:inline-block;box-sizing:border-box;height:100%;margin:0 32px 0 0;padding:12px 16px;text-decoration:none;cursor:pointer;transition:color .3s cubic-bezier(.645,.045,.355,1)}.cmacs-timeline-item .ant-tabs-nav-container-scrolling{padding-right:32px;padding-left:32px}.cmacs-timeline-item .ant-tabs-nav-container{position:relative;box-sizing:border-box;margin-bottom:-1px;overflow:hidden;font-size:14px;line-height:1.5;white-space:nowrap;transition:padding .3s cubic-bezier(.645,.045,.355,1);zoom:1}.cmacs-timeline-item .ant-tabs-tab-prev.ant-tabs-tab-arrow-show,.cmacs-timeline-item .ant-tabs-tab-next.ant-tabs-tab-arrow-show{width:32px;height:100%;opacity:1;pointer-events:auto}.cmacs-timeline-item .ant-tabs-tab-prev{left:0}.cmacs-timeline-item .ant-tabs-nav-scroll{overflow:hidden;white-space:nowrap}.cmacs-timeline-item .ant-tabs-tab-next{right:2px}.cmacs-timeline-item .ant-tabs-nav-wrap{margin-bottom:-1px;overflow:hidden}.cmacs-timeline-item .ant-tabs-tab-prev,.cmacs-timeline-item .ant-tabs-tab-next{position:absolute;z-index:2;width:0;height:100%;color:#656c79;text-align:center;background-color:transparent;border:0;cursor:pointer;opacity:0;transition:width .3s cubic-bezier(.645,.045,.355,1),opacity .3s cubic-bezier(.645,.045,.355,1),color .3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;user-select:none;pointer-events:none}.cmacs-timeline-datepicker-label.ant-tabs-tab{padding:5px 9px!important;border-radius:3px;font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-timeline-datepicker-label.ant-tabs-tab-active{color:#fff!important;padding:6px 7px!important;border-radius:3px 3px 4px 4px;box-shadow:0 6px 10px #3b3f4626;background-color:#2a7cff}.cmacs-timeline-item .anticon.ant-tabs-tab-prev-icon-target.anticon-left,.cmacs-timeline-item .anticon.ant-tabs-tab-next-icon-target.anticon-right{color:#656c79;font-size:11px;top:3px;position:relative}.cmacs-timeline-datepicker-slider.ant-tabs-bar{border-bottom:none;margin-bottom:0}.cmacs-timeline-item{display:inline-block}.cmacs-timeline-item-dropdown{position:relative;margin:0 20px}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker{font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#3b3f46}.cmacs-timeline-datepicker-label.ant-tabs-tab-active:hover{color:#fff}.cmacs-timeline-item .ant-picker-input input{width:16px;display:inline-block;-webkit-user-select:none;user-select:none;cursor:pointer;border:none;height:16px;position:absolute;opacity:0;left:3px}.cmacs-timeline-item .ant-picker:hover,.cmacs-timeline-item .ant-picker,.cmacs-timeline-item .ant-picker:focus{border:none;box-shadow:none;position:relative;top:-3px;color:#656c79;padding:0;cursor:pointer}.cmacs-timeline-item .ant-picker-suffix{color:#656c79;font-size:16px}.cmacs-timeline-item .ant-picker-input:hover .ant-picker-clear,.cmacs-timeline-item .ant-picker-range:hover .ant-picker-clear{opacity:0;display:none}.cmacs-timeline-item .ant-picker-icon{font-size:16px;position:relative;top:-7px}.cmacs-timeline-item .ant-picker-icon:hover{cursor:pointer}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper{border:none;width:auto!important;color:#3b3f46;font-size:14px;font-weight:500;line-height:1.8}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper i{margin-left:10px;color:#3b3f46;top:6px;position:relative}.cmacs-timeline-item .ant-picker:focus .ant-picker-input input:not(.ant-input-disabled){box-shadow:none}.cmacs-timeline-item .ant-picker-range .ant-picker-range-separator,.cmacs-timeline-item .ant-picker-range .ant-picker-input input{display:none}\n", "cmacs-timeline-datepicker{display:block;border-radius:3px;box-shadow:0 3px 7px #3b3f4626;background-color:#fff;padding:7px 0 4px!important;max-width:100%}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsTimelineDatepickerComponent.prototype, "restrictMode", void 0);
__decorate([
    InputBoolean()
], CmacsTimelineDatepickerComponent.prototype, "ranged", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTimelineDatepickerComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-timeline-datepicker', exportAs: 'cmacsTimelineDatepicker', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, host: {
                    '[class.ant-tabs]': 'true',
                    '[class.ant-tabs-line]': 'true'
                }, template: "<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"!restrictMode\">\r\n\r\n  <a cmacs-dropdown class=\"cmacs-dropdowm-timeline-datepicker\" [cmacsTrigger]=\"'click'\"\r\n     [cmacsOpen]=\"true\" style=\"display: inline-flex\" [dropdownMenu]=\"menu\">\r\n    <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n      {{getSelected().length ? getSelected()[0].title : 'Select'}} <i class=\"iconArrowLarge-Solid-Down\"></i>\r\n    </div>\r\n  </a>\r\n  <cmacs-dropdown-menu #menu=\"cmacsDropdownMenu\">\r\n    <ul cmacs-menu style=\"min-width: 125px\">\r\n      <li *ngFor=\"let option of modeOptions; index as i\" cmacs-menu-item (click)=\"customSelect(i)\">\r\n        <i [style.opacity]=\"option.selected ? 1 : 0\" nz-icon nzType=\"check\"></i>\r\n        <span>{{option.title}}</span>\r\n      </li>\r\n    </ul>\r\n  </cmacs-dropdown-menu>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"restrictMode\">\r\n  <a class=\"cmacs-dropdowm-timeline-datepicker\">\r\n    <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n      {{getSelected().length ? getSelected()[0].title : 'Select'}}\r\n    </div>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\" style=\"margin-right: 10px; max-width: calc(100% - 160px - 16px);\">\r\n  <ptb-tabs-nav role=\"tablist\"\r\n               tabindex=\"0\"\r\n               class=\"ant-tabs-bar ant-tabs-top-bar cmacs-timeline-datepicker-slider\"\r\n               [nzType]=\"'line'\"\r\n               [nzShowPagination]=\"true\"\r\n               [nzPositionMode]=\"'horizontal'\"\r\n               [nzAnimated]=\"true\"\r\n               [nzHideBar]=\"true\"\r\n               [selectedIndex]=\"selectedIndex\"\r\n               (nzOnNextClick)=\"onNextClick.emit()\"\r\n               (nzOnPrevClick)=\"onPrevClick.emit()\">\r\n    <div ptb-tab-label\r\n         role=\"tab\"\r\n         [style.margin-right.px]=\"gutter\"\r\n         class=\"cmacs-timeline-datepicker-label\"\r\n         [class.ant-tabs-tab-active]=\"true\"\r\n         *ngIf=\"showPreviousYearWeek\">\r\n      {{ previousYearWeek }}\r\n    </div>\r\n    <div ptb-tab-label\r\n         role=\"tab\"\r\n         [style.margin-right.px]=\"gutter\"\r\n         class=\"cmacs-timeline-datepicker-label\"\r\n         [class.ant-tabs-tab-active]=\"checkActiveTab(i)\"\r\n         [disabled]=\"tab.disabled\"\r\n         (click)=\"clickLabel(i,tab.disabled)\"\r\n         *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\r\n      <ng-container *nzStringTemplateOutlet=\"tab.title\">{{ tab.title }}</ng-container>\r\n    </div>\r\n  </ptb-tabs-nav>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\" *ngIf=\"!ranged\">\r\n  <ng-container *ngIf=\"mode === 'week'\">\r\n    <cmacs-week-picker [(ngModel)]=\"date\" [dropdownClassName]=\"'cmacs-timeline-datepicker-panel'\"\r\n                       (ngModelChange)=\"getWeek($event)\"\r\n                       [timeline]=\"true\" placeHolder=\"\"></cmacs-week-picker>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"mode === 'month'\">\r\n    <cmacs-month-picker\r\n      [dropdownClassName]=\"'cmacs-timeline-datepicker-panel'\"\r\n      [timeline]=\"true\"\r\n      [(ngModel)]=\"date\"\r\n      (ngModelChange)=\"getMonth($event)\"\r\n      placeHolder=\"\"\r\n    ></cmacs-month-picker>\r\n  </ng-container>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\" *ngIf=\"(mode === 'week' || mode === 'month') && ranged\">\r\n  <i class=\"iconUISmall-Calender\" \r\n     cmacs-popover \r\n     [(cmacsPopoverVisible)]=\"rangePopoverVisible\"\r\n     [cmacsPopoverOverlayClassName]=\"'timeline-datepicker-custom-range-picker-popup'\"\r\n     cmacsPopoverTrigger=\"click\"\r\n     [cmacsPopoverContent]=\"contentTemplateRangePicker\" \r\n     cmacsPopoverPlacement=\"bottomLeft\"></i>\r\n</div>\r\n<ng-template #contentTemplateRangePicker>\r\n  <div class=\"timeline-date-range-wrapper\">\r\n    <nz-range-picker\r\n      nzInline   \r\n      nzPlaceHolder=\"\"\r\n      [(ngModel)]=\"range\"\r\n      (ngModelChange)=\"onChange($event)\"\r\n    ></nz-range-picker>\r\n  </div>\r\n  <div style=\"text-align: right; display: block;\">\r\n    <button cmacs-button (click)=\"onClosePopover()\" type=\"primary\">OK</button>\r\n  </div>\r\n</ng-template>\r\n", styles: [".cmacs-timeline-item .ant-tabs-bar{margin:0 0 16px;border-bottom:1px solid #DEE0E5;outline:none;transition:padding .3s cubic-bezier(.645,.045,.355,1)}.timeline-datepicker-custom-range-picker-popup .ant-picker-cell-in-view.ant-picker-cell-in-range:before{background:#f3f3f4!important;height:30px!important}.timeline-datepicker-custom-range-picker-popup{margin:20px}.timeline-datepicker-custom-range-picker-popup .ant-picker-cell-in-range{background:transparent!important}.timeline-datepicker-custom-range-picker-popup .ant-picker-panel-container{box-shadow:none!important}.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end .ant-picker-cell-inner:after,.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start .ant-picker-cell-inner:after{position:absolute;top:0;bottom:0;z-index:-1;background:transparent!important;transition:all .3s;content:\"\"}.timeline-date-range-wrapper{height:348px}.cmacs-timeline-item i.iconUISmall-Calender{position:relative;top:4px;font-size:15px;cursor:pointer}.timeline-datepicker-custom-range-picker-popup .ant-popover-inner-content{max-width:unset!important;max-height:unset!important;height:420px;overflow:hidden;padding:23px 15px 0}.timeline-datepicker-custom-range-picker-popup .ant-popover-arrow{display:none}::ng-deep .cmacs-timeline-item .ant-tabs{display:block!important}.cmacs-timeline-item .ant-tabs-ink-bar{position:absolute;bottom:1px;left:0;z-index:1;box-sizing:border-box;height:2px;background-color:#2a7cff;transform-origin:0 0}[hidden]{display:none!important}.cmacs-timeline-item .ant-tabs-nav{position:relative;display:inline-block;box-sizing:border-box;margin:0;padding-left:0;list-style:none;transition:transform .3s cubic-bezier(.645,.045,.355,1)}.cmacs-timeline-item .ant-tabs-nav .ant-tabs-tab{position:relative;display:inline-block;box-sizing:border-box;height:100%;margin:0 32px 0 0;padding:12px 16px;text-decoration:none;cursor:pointer;transition:color .3s cubic-bezier(.645,.045,.355,1)}.cmacs-timeline-item .ant-tabs-nav-container-scrolling{padding-right:32px;padding-left:32px}.cmacs-timeline-item .ant-tabs-nav-container{position:relative;box-sizing:border-box;margin-bottom:-1px;overflow:hidden;font-size:14px;line-height:1.5;white-space:nowrap;transition:padding .3s cubic-bezier(.645,.045,.355,1);zoom:1}.cmacs-timeline-item .ant-tabs-tab-prev.ant-tabs-tab-arrow-show,.cmacs-timeline-item .ant-tabs-tab-next.ant-tabs-tab-arrow-show{width:32px;height:100%;opacity:1;pointer-events:auto}.cmacs-timeline-item .ant-tabs-tab-prev{left:0}.cmacs-timeline-item .ant-tabs-nav-scroll{overflow:hidden;white-space:nowrap}.cmacs-timeline-item .ant-tabs-tab-next{right:2px}.cmacs-timeline-item .ant-tabs-nav-wrap{margin-bottom:-1px;overflow:hidden}.cmacs-timeline-item .ant-tabs-tab-prev,.cmacs-timeline-item .ant-tabs-tab-next{position:absolute;z-index:2;width:0;height:100%;color:#656c79;text-align:center;background-color:transparent;border:0;cursor:pointer;opacity:0;transition:width .3s cubic-bezier(.645,.045,.355,1),opacity .3s cubic-bezier(.645,.045,.355,1),color .3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;user-select:none;pointer-events:none}.cmacs-timeline-datepicker-label.ant-tabs-tab{padding:5px 9px!important;border-radius:3px;font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-timeline-datepicker-label.ant-tabs-tab-active{color:#fff!important;padding:6px 7px!important;border-radius:3px 3px 4px 4px;box-shadow:0 6px 10px #3b3f4626;background-color:#2a7cff}.cmacs-timeline-item .anticon.ant-tabs-tab-prev-icon-target.anticon-left,.cmacs-timeline-item .anticon.ant-tabs-tab-next-icon-target.anticon-right{color:#656c79;font-size:11px;top:3px;position:relative}.cmacs-timeline-datepicker-slider.ant-tabs-bar{border-bottom:none;margin-bottom:0}.cmacs-timeline-item{display:inline-block}.cmacs-timeline-item-dropdown{position:relative;margin:0 20px}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker{font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#3b3f46}.cmacs-timeline-datepicker-label.ant-tabs-tab-active:hover{color:#fff}.cmacs-timeline-item .ant-picker-input input{width:16px;display:inline-block;-webkit-user-select:none;user-select:none;cursor:pointer;border:none;height:16px;position:absolute;opacity:0;left:3px}.cmacs-timeline-item .ant-picker:hover,.cmacs-timeline-item .ant-picker,.cmacs-timeline-item .ant-picker:focus{border:none;box-shadow:none;position:relative;top:-3px;color:#656c79;padding:0;cursor:pointer}.cmacs-timeline-item .ant-picker-suffix{color:#656c79;font-size:16px}.cmacs-timeline-item .ant-picker-input:hover .ant-picker-clear,.cmacs-timeline-item .ant-picker-range:hover .ant-picker-clear{opacity:0;display:none}.cmacs-timeline-item .ant-picker-icon{font-size:16px;position:relative;top:-7px}.cmacs-timeline-item .ant-picker-icon:hover{cursor:pointer}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper{border:none;width:auto!important;color:#3b3f46;font-size:14px;font-weight:500;line-height:1.8}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper i{margin-left:10px;color:#3b3f46;top:6px;position:relative}.cmacs-timeline-item .ant-picker:focus .ant-picker-input input:not(.ant-input-disabled){box-shadow:none}.cmacs-timeline-item .ant-picker-range .ant-picker-range-separator,.cmacs-timeline-item .ant-picker-range .ant-picker-input input{display:none}\n", "cmacs-timeline-datepicker{display:block;border-radius:3px;box-shadow:0 3px 7px #3b3f4626;background-color:#fff;padding:7px 0 4px!important;max-width:100%}\n"] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.NzI18nService }, { type: i0.ChangeDetectorRef }]; }, { gutter: [{
            type: Input
        }], mode: [{
            type: Input
        }], restrictMode: [{
            type: Input
        }], ranged: [{
            type: Input
        }], weekLocale: [{
            type: Input
        }], locale: [{
            type: Input
        }], onNextClick: [{
            type: Output
        }], onPrevClick: [{
            type: Output
        }], selectChange: [{
            type: Output
        }], selectedIndexChange: [{
            type: Output
        }], dateChange: [{
            type: Output
        }], rangeChange: [{
            type: Output
        }], modeChange: [{
            type: Output
        }], selectedIndex: [{
            type: Input
        }], selectedRangeIdxs: [{
            type: Input
        }], date: [{
            type: Input
        }], range: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUVsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWdDLFFBQVEsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFNUQsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1p0Qiw4QkFBNkY7SUFBMUIsc09BQVMsZUFBQSwyQkFBZSxDQUFBLElBQUM7SUFDMUYsd0JBQXdFO0lBQ3hFLDRCQUFNO0lBQUEsWUFBZ0I7SUFBQSxpQkFBTyxFQUFBOzs7SUFEMUIsZUFBeUM7SUFBekMsc0RBQXlDO0lBQ3RDLGVBQWdCO0lBQWhCLHNDQUFn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LEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEgsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtnQkFDM0ksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM5RyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtvQkFDekcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsSCxDQUFDO0lBRUMsY0FBYyxDQUFDLElBQVU7UUFDdkIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUNsRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQWE7UUFDNUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQscUJBQXFCO1FBQ25CLHNCQUFzQjtRQUN0QixJQUFJLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFO1lBQ2pFLHVGQUF1RjtZQUN2RixzRUFBc0U7WUFDdEUsTUFBTSxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDcEYscUZBQXFGO1lBQ3JGLG1EQUFtRDtZQUNuRCxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssYUFBYSxFQUFFO2dCQUN6QyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQztnQkFDL0M7O21CQUVHO2dCQUVILHVEQUF1RDtnQkFDdkQsNERBQTREO2dCQUM1RCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFFNUYsSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDZixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3FCQUM5QztnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1lBRUQsMkZBQTJGO1lBQzNGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFzQixFQUFFLEtBQWEsRUFBRSxFQUFFO2dCQUMxRSxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxhQUFhLENBQUM7Z0JBRXJDLHNGQUFzRjtnQkFDdEYsa0NBQWtDO2dCQUNsQyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtvQkFDcEUsR0FBRyxDQUFDLE1BQU0sR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztpQkFDbEQ7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxhQUFhLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3pCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNsQyxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBb0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNuRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFZO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssQ0FBQztTQUM5RjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUN6SDtJQUNILENBQUM7aUdBdFlVLGdDQUFnQztvRUFBaEMsZ0NBQWdDOzs7WUNuRDdDLGlGQWdCTTtZQUVOLGlGQU1NO1lBRU4sOEJBQW1HLHNCQUFBO1lBVXBGLG1JQUFpQixzQkFBa0IsSUFBQyxzSEFDbkIsc0JBQWtCLElBREM7WUFFL0MsaUZBT007WUFDTixpRkFTTTtZQUNSLGlCQUFlLEVBQUE7WUFHakIsaUZBZU07WUFFTixpRkFRTTtZQUNOLGtJQVljOztZQWpHaUQsd0NBQW1CO1lBa0JuQixlQUFrQjtZQUFsQix1Q0FBa0I7WUFZbEUsZUFBaUI7WUFBakIsK0JBQWlCLDBCQUFBLGdDQUFBLG9CQUFBLG1CQUFBLG9DQUFBO1lBYXRCLGVBQTBCO1lBQTFCLCtDQUEwQjtZQVVYLGVBQXlCO1lBQXpCLGtEQUF5QjtZQU1oQixlQUFhO1lBQWIsa0NBQWE7WUFpQmIsZUFBcUQ7WUFBckQsa0ZBQXFEOzs7QURiNUQ7SUFBZixZQUFZLEVBQUU7c0VBQXNCO0FBQ3JCO0lBQWYsWUFBWSxFQUFFO2dFQUFnQjt1RkFiN0IsZ0NBQWdDO2NBekI1QyxTQUFTOzJCQUNFLDJCQUEyQixZQUMzQix5QkFBeUIsbUJBRWxCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksdUJBQ2hCLEtBQUssUUFjcEI7b0JBQ0osa0JBQWtCLEVBQUUsTUFBTTtvQkFDMUIsdUJBQXVCLEVBQUUsTUFBTTtpQkFDaEM7aUpBWVEsTUFBTTtrQkFBZCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ21CLFlBQVk7a0JBQXBDLEtBQUs7WUFDbUIsTUFBTTtrQkFBOUIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDYSxXQUFXO2tCQUE3QixNQUFNO1lBQ1ksV0FBVztrQkFBN0IsTUFBTTtZQUVZLFlBQVk7a0JBQTlCLE1BQU07WUFDWSxtQkFBbUI7a0JBQXJDLE1BQU07WUFDWSxVQUFVO2tCQUE1QixNQUFNO1lBQ1ksV0FBVztrQkFBN0IsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU07WUFZSCxhQUFhO2tCQURoQixLQUFLO1lBVUYsaUJBQWlCO2tCQURwQixLQUFLO1lBVUYsSUFBSTtrQkFEUCxLQUFLO1lBZUYsS0FBSztrQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCwgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIE9uRGVzdHJveVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtnZXRJU09XZWVrLCBnZXRJU09XZWVrc0luWWVhciwgZ2V0TW9udGh9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpUYWJDaGFuZ2VFdmVudCB9IGZyb20gJy4uL2NtYWNzLXRhYnMvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IENtYWNzVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3MtdGFicy90YWIuY29tcG9uZW50JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ21hY3NUaW1lbGluZURhdGVQaWNrZXJNb2RlID0gJ3dlZWsnIHwgJ3F1YXJ0ZXInIHwgJ21vbnRoJyB8ICd3ZWVrLXJhbmdlJyB8ICdtb250aC1yYW5nZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUaW1lbGluZURhdGVwaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggN3B4IDAgcmdiYSg1OSwgNjMsIDcwLCAwLjE1KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAwIDRweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC10YWJzXSc6ICd0cnVlJyxcclxuICAgICdbY2xhc3MuYW50LXRhYnMtbGluZV0nOiAndHJ1ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RpbWVsaW5lRGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgaW5kZXhUb1NlbGVjdDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkUmFuZ2VJZHhzOiBudW1iZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2RhdGU6IERhdGUgfCBudWxsID0gbmV3IERhdGUoKTtcclxuICBwcml2YXRlIF9yYW5nZTogRGF0ZVtdID0gW107XHJcbiAgbGlzdE9mTnpUYWJDb21wb25lbnQ6IGFueVtdO1xyXG5cclxuICBASW5wdXQoKSBndXR0ZXI6IG51bWJlciA9IDI7XHJcbiAgQElucHV0KCkgbW9kZTogQ21hY3NUaW1lbGluZURhdGVQaWNrZXJNb2RlID0gJ3dlZWsnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXN0cmljdE1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmFuZ2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgd2Vla0xvY2FsZSA9IHt3ZWVrIDoge2RvdyA6IDcsIGRveTogMTF9fTtcclxuICBASW5wdXQoKSBsb2NhbGUgPSAnZW4nO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbk5leHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOelRhYkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUYWJDaGFuZ2VFdmVudD4odHJ1ZSk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmFuZ2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlW10+KCk7XHJcbiAgQE91dHB1dCgpIG1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHNob3dQcmV2aW91c1llYXJXZWVrID0gZmFsc2U7XHJcbiAgcHJldmlvdXNZZWFyV2VlayA9IG51bGw7XHJcbiAgcmFuZ2VQb3BvdmVyVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBtb2RlT3B0aW9ucyA9IFtcclxuICAgIHt0aXRsZTogJ1dlZWsnLCB2YWx1ZTogJ3dlZWsnLCBzZWxlY3RlZDogdHJ1ZX0sXHJcbiAgICB7dGl0bGU6ICdNb250aCcsIHZhbHVlOiAnbW9udGgnLCBzZWxlY3RlZDogZmFsc2V9XHJcbiAgICBdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuaW5kZXhUb1NlbGVjdCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VsZWN0ZWRSYW5nZUlkeHModmFsdWU6IG51bWJlcltdKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZFJhbmdlSWR4cyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkUmFuZ2VJZHhzKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFJhbmdlSWR4cztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRhdGUodmFsdWU6IERhdGUgfCBudWxsKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5fZGF0ZSA9IHZhbHVlO1xyXG4gICAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycpIHtcclxuICAgICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ID0gdGhpcy5nZXRXZWVrc0luWWVhcih0aGlzLmRhdGUpO1xyXG4gICAgICAgIHRoaXMuc2hvd1ByZXZpb3VzWWVhcldlZWsgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmdldFdlZWtOdW1iZXIodmFsdWUpIC0gMTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdtb250aCcpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB2YWx1ZS5nZXRNb250aCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCByYW5nZShyYW5nZTogRGF0ZVtdKSB7XHJcbiAgICBpZiAocmFuZ2UgIT09IG51bGwgJiYgcmFuZ2UubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2hvd1ByZXZpb3VzWWVhcldlZWsgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fcmFuZ2UgPSByYW5nZTtcclxuICAgICAgbGV0IHN0RGF0ZVllYXIgPSBtb21lbnQodGhpcy5yYW5nZVswXSkueWVhcigpO1xyXG4gICAgICBjb25zdCBuZERhdGVZZWFyID0gbW9tZW50KHRoaXMucmFuZ2VbMV0pLnllYXIoKTtcclxuICAgICAgaWYgKG1vbWVudCh0aGlzLnJhbmdlWzBdKS55ZWFyKCkgPT09IG1vbWVudCh0aGlzLnJhbmdlWzFdKS55ZWFyKCkpIHtcclxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHMgPSBbdGhpcy5nZXRXZWVrTnVtYmVyKHRoaXMuX3JhbmdlWzBdKSAtIDEsIHRoaXMuZ2V0V2Vla051bWJlcih0aGlzLl9yYW5nZVsxXSkgLSAxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJhbmdlSWR4cyA9IFtnZXRNb250aCh0aGlzLl9yYW5nZVswXSksIGdldE1vbnRoKHRoaXMuX3JhbmdlWzFdKV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJykge1xyXG4gICAgICAgICAgbGV0IHN1bVdlZWtzID0gMDtcclxuICAgICAgICAgIHdoaWxlKG5kRGF0ZVllYXIgLSBzdERhdGVZZWFyKSB7XHJcbiAgICAgICAgICAgIHN1bVdlZWtzICs9IHRoaXMuZ2V0V2Vla3NJblllYXJDdXN0b20obmV3IERhdGUoc3REYXRlWWVhcikpO1xyXG4gICAgICAgICAgICBzdERhdGVZZWFyKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUmFuZ2VJZHhzID0gW3RoaXMuZ2V0V2Vla051bWJlcih0aGlzLl9yYW5nZVswXSkgLSAxLCBzdW1XZWVrcyArIHRoaXMuZ2V0V2Vla051bWJlcih0aGlzLl9yYW5nZVsxXSkgLSAxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJhbmdlSWR4cyA9IFtnZXRNb250aCh0aGlzLl9yYW5nZVswXSksIDEyKihuZERhdGVZZWFyIC0gc3REYXRlWWVhcikgKyBnZXRNb250aCh0aGlzLl9yYW5nZVsxXSldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl9zZWxlY3RlZFJhbmdlSWR4c1swXTtcclxuXHJcbiAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgPSB0aGlzLmdldFZhbHVlc1NsaWRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHJhbmdlKCk6IERhdGVbXSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UocmFuZ2U6IERhdGVbXSk6IHZvaWQge1xyXG4gICAgaWYgKHJhbmdlICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSByYW5nZTtcclxuICAgICAgdGhpcy5yYW5nZUNoYW5nZS5lbWl0KHJhbmdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkYXRlKCk6IERhdGUgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2VlayhyZXN1bHQ6IERhdGUpOiB2b2lkIHtcclxuICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQocmVzdWx0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFdlZWtOdW1iZXIoZGF0ZSkge1xyXG4gICAgY29uc3QgbW9udGggPSBtb21lbnQoZGF0ZSkubW9udGgoKTtcclxuICAgIG1vbWVudC51cGRhdGVMb2NhbGUodGhpcy5sb2NhbGUsIHRoaXMud2Vla0xvY2FsZSk7XHJcbiAgICBjb25zdCB3ZWVrID0gbW9tZW50KGRhdGUpLndlZWsoKTtcclxuICAgIGNvbnN0IHdlZWtzSW5ZZWFyID0gdGhpcy5nZXRXZWVrc0luWWVhckN1c3RvbShkYXRlKTtcclxuICAgIGlmIChtb250aCA9PT0gMTEgJiYgd2VlayA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gd2Vla3NJblllYXI7XHJcbiAgICB9XHJcbiAgICBpZiAobW9udGggPT09IDAgJiYgKHdlZWsgPT09IDUzIHx8IHdlZWsgPT09IDUyKSkge1xyXG4gICAgICB0aGlzLnNob3dQcmV2aW91c1llYXJXZWVrID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wcmV2aW91c1llYXJXZWVrID0gd2VlaztcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdlZWs7XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrc0luWWVhckN1c3RvbShkYXRlKSB7XHJcbiAgICBtb21lbnQudXBkYXRlTG9jYWxlKHRoaXMubG9jYWxlLCB0aGlzLndlZWtMb2NhbGUpO1xyXG4gICAgcmV0dXJuIG1vbWVudChkYXRlKS5pc29XZWVrc0luWWVhcigpXHJcbiAgfVxyXG5cclxuICBjbGlja0xhYmVsKGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIWRpc2FibGVkICYmIHRoaXMuX2RhdGUgIT09IG51bGwpIHtcclxuICAgICAgaWYgKCF0aGlzLnJhbmdlZCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJykge1xyXG4gICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XHJcbiAgICAgICAgICBjb25zdCB3ZWVrcyA9IHRoaXMuZ2V0V2Vla3NJblllYXJDdXN0b20oZCk7XHJcbiAgICAgICAgICBkLnNldERhdGUod2Vla3MgPT09IDUyID8gZC5nZXREYXRlKCkgKyAoKGluZGV4KSAqIDcpIDogZC5nZXREYXRlKCkgKyAoaW5kZXggKiA3KSk7XHJcbiAgICAgICAgICB0aGlzLmRhdGUgPSBkO1xyXG4gICAgICAgICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQodGhpcy5kYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdtb250aCcpIHtcclxuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksIGluZGV4LCAxKTtcclxuICAgICAgICAgIHRoaXMuZGF0ZSA9IGQ7XHJcbiAgICAgICAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdCh0aGlzLmRhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUmFuZ2VJZHhzID0gW2luZGV4LCBpbmRleF07XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnKSB7XHJcbiAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICAgIGNvbnN0IHdlZWtzID0gdGhpcy5nZXRXZWVrc0luWWVhckN1c3RvbShkKTtcclxuICAgICAgICAgIGQuc2V0RGF0ZSh3ZWVrcyA9PT0gNTIgPyBkLmdldERhdGUoKSArICgoaW5kZXggKyAxKSAqIDctMSkgOiBkLmdldERhdGUoKSArIChpbmRleCAqIDcpLTEpO1xyXG4gICAgICAgICAgdGhpcy5yYW5nZSA9IFtkLCBkXTtcclxuICAgICAgICAgIHRoaXMucmFuZ2VDaGFuZ2UuZW1pdCh0aGlzLnJhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksIGluZGV4LCAxKTtcclxuICAgICAgICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSwgaW5kZXggKyAxLCAwKTtcclxuICAgICAgICAgIHRoaXMucmFuZ2UgPSBbc3RhcnQsIGVuZF07XHJcbiAgICAgICAgICB0aGlzLnJhbmdlQ2hhbmdlLmVtaXQodGhpcy5yYW5nZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDaGFuZ2VFdmVudChpbmRleDogbnVtYmVyKTogTnpUYWJDaGFuZ2VFdmVudCB7XHJcbiAgICBjb25zdCBldmVudCA9IG5ldyBOelRhYkNoYW5nZUV2ZW50KCk7XHJcbiAgICBldmVudC5pbmRleCA9IGluZGV4O1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGgpIHtcclxuICAgICAgZXZlbnQudGFiID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudFtpbmRleF07XHJcbiAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIGlmIChpICE9PSBpbmRleCkge1xyXG4gICAgICAgICAgaXRlbS5kZXNlbGVjdC5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZXZlbnQudGFiLnNlbGVjdC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXZlbnQ7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xhbXBzIHRoZSBnaXZlbiBpbmRleCB0byB0aGUgYm91bmRzIG9mIDAgYW5kIHRoZSB0YWJzIGxlbmd0aC4gKi9cclxuICBwcml2YXRlIGNsYW1wVGFiSW5kZXgoaW5kZXg6IG51bWJlciB8IG51bGwpOiBudW1iZXIge1xyXG4gICAgLy8gTm90ZSB0aGUgYHx8IDBgLCB3aGljaCBlbnN1cmVzIHRoYXQgdmFsdWVzIGxpa2UgTmFOIGNhbid0IGdldCB0aHJvdWdoXHJcbiAgICAvLyBhbmQgd2hpY2ggd291bGQgb3RoZXJ3aXNlIHRocm93IHRoZSBjb21wb25lbnQgaW50byBhbiBpbmZpbml0ZSBsb29wXHJcbiAgICAvLyAoc2luY2UgTWF0aC5tYXgoTmFOLCAwKSA9PT0gTmFOKS5cclxuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCAtIDEsIE1hdGgubWF4KGluZGV4IHx8IDAsIDApKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMud2Vla0xvY2FsZSA9IHtcclxuICAgICAgd2Vlazoge1xyXG4gICAgICAgIGRvdzogbW9tZW50LmxvY2FsZURhdGEodGhpcy5sb2NhbGUpLmZpcnN0RGF5T2ZXZWVrKCksXHJcbiAgICAgICAgZG95OiBtb21lbnQubG9jYWxlRGF0YSh0aGlzLmxvY2FsZSkuZmlyc3REYXlPZlllYXIoKVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZGUnOlxyXG4gICAgICAgICAgdGhpcy5tb2RlT3B0aW9uc1swXS50aXRsZSA9ICdXb2NoZSc7XHJcbiAgICAgICAgICB0aGlzLm1vZGVPcHRpb25zWzFdLnRpdGxlID0gJ01vbmF0JztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2VuJzpcclxuICAgICAgICAgIHRoaXMubW9kZU9wdGlvbnNbMF0udGl0bGUgPSAnV2Vlayc7XHJcbiAgICAgICAgICB0aGlzLm1vZGVPcHRpb25zWzFdLnRpdGxlID0gJ01vbnRoJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnamEnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlT3B0aW9uc1swXS50aXRsZSA9ICfpgLEnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlT3B0aW9uc1sxXS50aXRsZSA9ICfmnIgnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMubW9kZU9wdGlvbnNbMF0udGl0bGUgPSAnV2Vlayc7XHJcbiAgICAgICAgICB0aGlzLm1vZGVPcHRpb25zWzFdLnRpdGxlID0gJ01vbnRoJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZE1vZGUoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xvc2VQb3BvdmVyKCkge1xyXG4gICAgdGhpcy5yYW5nZVBvcG92ZXJWaXNpYmxlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKXtcclxuICAgIGlmIChjaGFuZ2VzLm1vZGUpIHtcclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE1vZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlbGVjdGVkTW9kZSgpe1xyXG4gICAgdGhpcy5tb2RlT3B0aW9ucy5mb3JFYWNoKG1vZGUgPT4ge1xyXG4gICAgICBtb2RlLnNlbGVjdGVkID0gbW9kZS52YWx1ZSA9PT0gdGhpcy5tb2RlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ID0gdGhpcy5nZXRWYWx1ZXNTbGlkZXIoKTtcclxuICAgIGlmICh0aGlzLnJhbmdlZCkge1xyXG4gICAgICB0aGlzLnJhbmdlID0gdGhpcy5yYW5nZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFZhbHVlc1NsaWRlcigpIHtcclxuICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJyAmJiAhdGhpcy5yYW5nZWQpIHtcclxuICAgICAgdGhpcy5kYXRlID0gdGhpcy5kYXRlO1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRXZWVrc0luWWVhcih0aGlzLmRhdGUpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdtb250aCcpIHtcclxuICAgICAgdGhpcy5kYXRlID0gdGhpcy5kYXRlO1xyXG4gICAgICBpZiAodGhpcy5yYW5nZS5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgc3REYXRlWWVhciA9IG1vbWVudCh0aGlzLnJhbmdlWzBdKS55ZWFyKCk7XHJcbiAgICAgICAgY29uc3QgbmREYXRlWWVhciA9IG1vbWVudCh0aGlzLnJhbmdlWzFdKS55ZWFyKCk7XHJcbiAgICAgICAgaWYgKHN0RGF0ZVllYXIgIT09IG5kRGF0ZVllYXIpIHtcclxuICAgICAgICAgIGxldCByYW5nZWRNb250aCA9IHRoaXMuZ2V0RGVmYXVsdE1vbnRocygpO1xyXG4gICAgICAgICAgd2hpbGUobmREYXRlWWVhciAtIHN0RGF0ZVllYXIpIHtcclxuICAgICAgICAgICAgc3REYXRlWWVhcisrO1xyXG4gICAgICAgICAgICByYW5nZWRNb250aCA9IHJhbmdlZE1vbnRoLmNvbmNhdCh0aGlzLmdldERlZmF1bHRNb250aHMoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmFuZ2VkTW9udGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRNb250aHMoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0TW9udGhzKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnICYmIHRoaXMucmFuZ2VkKSB7XHJcbiAgICAgIGlmICh0aGlzLnJhbmdlLmxlbmd0aCkge1xyXG4gICAgICAgIGxldCBzdERhdGVZZWFyID0gbW9tZW50KHRoaXMucmFuZ2VbMF0pLnllYXIoKTtcclxuICAgICAgICBjb25zdCBuZERhdGVZZWFyID0gbW9tZW50KHRoaXMucmFuZ2VbMV0pLnllYXIoKTtcclxuICAgICAgICBpZiAoc3REYXRlWWVhciAhPT0gbmREYXRlWWVhcikge1xyXG4gICAgICAgICAgbGV0IHJhbmdlZFdlZWtzID0gdGhpcy5nZXRXZWVrc0luWWVhcihuZXcgRGF0ZShzdERhdGVZZWFyKSk7XHJcbiAgICAgICAgICB3aGlsZShuZERhdGVZZWFyIC0gc3REYXRlWWVhcikge1xyXG4gICAgICAgICAgICByYW5nZWRXZWVrcyA9IHJhbmdlZFdlZWtzLmNvbmNhdCh0aGlzLmdldFdlZWtzSW5ZZWFyKG5ldyBEYXRlKHN0RGF0ZVllYXIpKSk7XHJcbiAgICAgICAgICAgIHN0RGF0ZVllYXIrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByYW5nZWRXZWVrcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0V2Vla3NJblllYXIodGhpcy5yYW5nZVswXSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0V2Vla3NJblllYXIobmV3IERhdGUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXREZWZhdWx0TW9udGhzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyBbeyB0aXRsZTogJ0phbi4nIH0sIHsgdGl0bGU6ICdGZWIuJyB9LCB7IHRpdGxlOiAnTcOkcnonIH0sIHsgdGl0bGU6ICdBcHIuJyB9LCB7IHRpdGxlOiAnTWFpJyB9LCB7IHRpdGxlOiAnSnVuaSd9LFxyXG4gICAgICB7IHRpdGxlOiAnSnVsaScgfSwgeyB0aXRsZTogJ0F1Zy4nIH0sIHsgdGl0bGU6ICdTZXB0LicgfSwgeyB0aXRsZTogJ09rdC4nIH0sIHsgdGl0bGU6ICdOb3YuJyB9LCB7IHRpdGxlOiAnRGV6LicgfV0gOlxyXG4gICAgICB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnamEnID8gW3sgdGl0bGU6ICcx5pyIJyB9LCB7IHRpdGxlOiAnMuaciCcgfSwgeyB0aXRsZTogJzPmnIgnIH0sIHsgdGl0bGU6ICc05pyIJyB9LCB7IHRpdGxlOiAnNeaciCcgfSwgeyB0aXRsZTogJzbmnIgnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJzfmnIgnIH0sIHsgdGl0bGU6ICc45pyIJyB9LCB7IHRpdGxlOiAnOeaciCcgfSwgeyB0aXRsZTogJzEw5pyIJyB9LCB7IHRpdGxlOiAnMTHmnIgnIH0sIHsgdGl0bGU6ICcxMuaciCcgfV0gOlxyXG4gICAgW3sgdGl0bGU6ICdKYW4nIH0sIHsgdGl0bGU6ICdGZWInIH0sIHsgdGl0bGU6ICdNYXInIH0sIHsgdGl0bGU6ICdBcHInIH0sIHsgdGl0bGU6ICdNYXknIH0sIHsgdGl0bGU6ICdKdW4nIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdKdWwnIH0sIHsgdGl0bGU6ICdBdWcnIH0sIHsgdGl0bGU6ICdTZXAnIH0sIHsgdGl0bGU6ICdPY3QnIH0sIHsgdGl0bGU6ICdOb3YnIH0sIHsgdGl0bGU6ICdEZWMnIH1dO1xyXG59XHJcblxyXG4gIGdldFdlZWtzSW5ZZWFyKGRhdGU6IERhdGUpIHtcclxuICAgIGxldCB0ZW1wID0gW107XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldFdlZWtzSW5ZZWFyQ3VzdG9tKGRhdGUpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRlbXAucHVzaCh7dGl0bGU6IHRoaXMuZm9ybWF0V2Vla051bWJlcihpICsgMSl9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZW1wO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0V2Vla051bWJlcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKFwiMFwiICsgdmFsdWUpLnNsaWNlKC0yKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIC8vdGhpcy51cGRhdGVTbGlkZXIoKTtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoKSB7XHJcbiAgICAgIC8vIERvbid0IGNsYW1wIHRoZSBgaW5kZXhUb1NlbGVjdGAgaW1tZWRpYXRlbHkgaW4gdGhlIHNldHRlciBiZWNhdXNlIGl0IGNhbiBoYXBwZW4gdGhhdFxyXG4gICAgICAvLyB0aGUgYW1vdW50IG9mIHRhYnMgY2hhbmdlcyBiZWZvcmUgdGhlIGFjdHVhbCBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMuXHJcbiAgICAgIGNvbnN0IGluZGV4VG9TZWxlY3QgPSAodGhpcy5pbmRleFRvU2VsZWN0ID0gdGhpcy5jbGFtcFRhYkluZGV4KHRoaXMuaW5kZXhUb1NlbGVjdCkpO1xyXG4gICAgICAvLyBJZiB0aGVyZSBpcyBhIGNoYW5nZSBpbiBzZWxlY3RlZCBpbmRleCwgZW1pdCBhIGNoYW5nZSBldmVudC4gU2hvdWxkIG5vdCB0cmlnZ2VyIGlmXHJcbiAgICAgIC8vIHRoZSBzZWxlY3RlZCBpbmRleCBoYXMgbm90IHlldCBiZWVuIGluaXRpYWxpemVkLlxyXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhUb1NlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IGlzRmlyc3RSdW4gPSB0aGlzLl9zZWxlY3RlZEluZGV4ID09IG51bGw7XHJcbiAgICAgICAgLyppZiAoIWlzRmlyc3RSdW4pIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0Q2hhbmdlLmVtaXQodGhpcy5jcmVhdGVDaGFuZ2VFdmVudChpbmRleFRvU2VsZWN0KSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIC8vIENoYW5naW5nIHRoZXNlIHZhbHVlcyBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIGhhcyBydW5cclxuICAgICAgICAvLyBzaW5jZSB0aGUgY2hlY2tlZCBjb250ZW50IG1heSBjb250YWluIHJlZmVyZW5jZXMgdG8gdGhlbS5cclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4gKHRhYi5pc0FjdGl2ZSA9IGluZGV4ID09PSBpbmRleFRvU2VsZWN0KSk7XHJcblxyXG4gICAgICAgICAgaWYgKCFpc0ZpcnN0UnVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4VG9TZWxlY3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTZXR1cCB0aGUgcG9zaXRpb24gZm9yIGVhY2ggdGFiIGFuZCBvcHRpb25hbGx5IHNldHVwIGFuIG9yaWdpbiBvbiB0aGUgbmV4dCBzZWxlY3RlZCB0YWIuXHJcbiAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgodGFiOiBDbWFjc1RhYkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRhYi5wb3NpdGlvbiA9IGluZGV4IC0gaW5kZXhUb1NlbGVjdDtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlbGVjdGVkIHRhYiwgdGhlbiBzZXQgdXAgYW4gb3JpZ2luIGZvciB0aGUgbmV4dCBzZWxlY3RlZCB0YWJcclxuICAgICAgICAvLyBpZiBpdCBkb2Vzbid0IGhhdmUgb25lIGFscmVhZHkuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT0gbnVsbCAmJiB0YWIucG9zaXRpb24gPT09IDAgJiYgIXRhYi5vcmlnaW4pIHtcclxuICAgICAgICAgIHRhYi5vcmlnaW4gPSBpbmRleFRvU2VsZWN0IC0gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QpIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaW5kZXhUb1NlbGVjdDtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3VzdG9tU2VsZWN0KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMubW9kZU9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1vZGVPcHRpb25zW2luZGV4XS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB0aGlzLm1vZGUgPSB0aGlzLm1vZGVPcHRpb25zW2luZGV4XS52YWx1ZSBhcyBDbWFjc1RpbWVsaW5lRGF0ZVBpY2tlck1vZGU7XHJcbiAgICB0aGlzLm1vZGVDaGFuZ2UuZW1pdCh0aGlzLm1vZGUpO1xyXG4gICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCA9IHRoaXMuZ2V0VmFsdWVzU2xpZGVyKCk7XHJcbiAgICBpZiAodGhpcy5yYW5nZWQpIHtcclxuICAgICAgdGhpcy5yYW5nZSA9IHRoaXMucmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZCgpe1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZU9wdGlvbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aChyZXN1bHQ6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrQWN0aXZlVGFiKGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5yYW5nZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJbmRleCA+PSAwICYmICF0aGlzLnNob3dQcmV2aW91c1llYXJXZWVrICYmIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFJhbmdlSWR4cy5sZW5ndGggPyBpbmRleCA+PSB0aGlzLnNlbGVjdGVkUmFuZ2VJZHhzWzBdICYmIGluZGV4IDw9IHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHNbMV0gOiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCI8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtaXRlbSBjbWFjcy10aW1lbGluZS1pdGVtLWRyb3Bkb3duXCIgKm5nSWY9XCIhcmVzdHJpY3RNb2RlXCI+XHJcblxyXG4gIDxhIGNtYWNzLWRyb3Bkb3duIGNsYXNzPVwiY21hY3MtZHJvcGRvd20tdGltZWxpbmUtZGF0ZXBpY2tlclwiIFtjbWFjc1RyaWdnZXJdPVwiJ2NsaWNrJ1wiXHJcbiAgICAgW2NtYWNzT3Blbl09XCJ0cnVlXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtZmxleFwiIFtkcm9wZG93bk1lbnVdPVwibWVudVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLW9wZW4tZHJvcGRvd24td3JhcHBlclwiIHN0eWxlPVwid2lkdGg6IDgwcHg7XCI+XHJcbiAgICAgIHt7Z2V0U2VsZWN0ZWQoKS5sZW5ndGggPyBnZXRTZWxlY3RlZCgpWzBdLnRpdGxlIDogJ1NlbGVjdCd9fSA8aSBjbGFzcz1cImljb25BcnJvd0xhcmdlLVNvbGlkLURvd25cIj48L2k+XHJcbiAgICA8L2Rpdj5cclxuICA8L2E+XHJcbiAgPGNtYWNzLWRyb3Bkb3duLW1lbnUgI21lbnU9XCJjbWFjc0Ryb3Bkb3duTWVudVwiPlxyXG4gICAgPHVsIGNtYWNzLW1lbnUgc3R5bGU9XCJtaW4td2lkdGg6IDEyNXB4XCI+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG1vZGVPcHRpb25zOyBpbmRleCBhcyBpXCIgY21hY3MtbWVudS1pdGVtIChjbGljayk9XCJjdXN0b21TZWxlY3QoaSlcIj5cclxuICAgICAgICA8aSBbc3R5bGUub3BhY2l0eV09XCJvcHRpb24uc2VsZWN0ZWQgPyAxIDogMFwiIG56LWljb24gbnpUeXBlPVwiY2hlY2tcIj48L2k+XHJcbiAgICAgICAgPHNwYW4+e3tvcHRpb24udGl0bGV9fTwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9jbWFjcy1kcm9wZG93bi1tZW51PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1pdGVtIGNtYWNzLXRpbWVsaW5lLWl0ZW0tZHJvcGRvd25cIiAqbmdJZj1cInJlc3RyaWN0TW9kZVwiPlxyXG4gIDxhIGNsYXNzPVwiY21hY3MtZHJvcGRvd20tdGltZWxpbmUtZGF0ZXBpY2tlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLW9wZW4tZHJvcGRvd24td3JhcHBlclwiIHN0eWxlPVwid2lkdGg6IDgwcHg7XCI+XHJcbiAgICAgIHt7Z2V0U2VsZWN0ZWQoKS5sZW5ndGggPyBnZXRTZWxlY3RlZCgpWzBdLnRpdGxlIDogJ1NlbGVjdCd9fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9hPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1pdGVtXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHg7IG1heC13aWR0aDogY2FsYygxMDAlIC0gMTYwcHggLSAxNnB4KTtcIj5cclxuICA8cHRiLXRhYnMtbmF2IHJvbGU9XCJ0YWJsaXN0XCJcclxuICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgICAgY2xhc3M9XCJhbnQtdGFicy1iYXIgYW50LXRhYnMtdG9wLWJhciBjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLXNsaWRlclwiXHJcbiAgICAgICAgICAgICAgIFtuelR5cGVdPVwiJ2xpbmUnXCJcclxuICAgICAgICAgICAgICAgW256U2hvd1BhZ2luYXRpb25dPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgIFtuelBvc2l0aW9uTW9kZV09XCInaG9yaXpvbnRhbCdcIlxyXG4gICAgICAgICAgICAgICBbbnpBbmltYXRlZF09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgW256SGlkZUJhcl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgW3NlbGVjdGVkSW5kZXhdPVwic2VsZWN0ZWRJbmRleFwiXHJcbiAgICAgICAgICAgICAgIChuek9uTmV4dENsaWNrKT1cIm9uTmV4dENsaWNrLmVtaXQoKVwiXHJcbiAgICAgICAgICAgICAgIChuek9uUHJldkNsaWNrKT1cIm9uUHJldkNsaWNrLmVtaXQoKVwiPlxyXG4gICAgPGRpdiBwdGItdGFiLWxhYmVsXHJcbiAgICAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICBbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XT1cImd1dHRlclwiXHJcbiAgICAgICAgIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci1sYWJlbFwiXHJcbiAgICAgICAgIFtjbGFzcy5hbnQtdGFicy10YWItYWN0aXZlXT1cInRydWVcIlxyXG4gICAgICAgICAqbmdJZj1cInNob3dQcmV2aW91c1llYXJXZWVrXCI+XHJcbiAgICAgIHt7IHByZXZpb3VzWWVhcldlZWsgfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBwdGItdGFiLWxhYmVsXHJcbiAgICAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICBbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XT1cImd1dHRlclwiXHJcbiAgICAgICAgIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci1sYWJlbFwiXHJcbiAgICAgICAgIFtjbGFzcy5hbnQtdGFicy10YWItYWN0aXZlXT1cImNoZWNrQWN0aXZlVGFiKGkpXCJcclxuICAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXHJcbiAgICAgICAgIChjbGljayk9XCJjbGlja0xhYmVsKGksdGFiLmRpc2FibGVkKVwiXHJcbiAgICAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgbGlzdE9mTnpUYWJDb21wb25lbnQ7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRhYi50aXRsZVwiPnt7IHRhYi50aXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9wdGItdGFicy1uYXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWl0ZW1cIiAqbmdJZj1cIiFyYW5nZWRcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibW9kZSA9PT0gJ3dlZWsnXCI+XHJcbiAgICA8Y21hY3Mtd2Vlay1waWNrZXIgWyhuZ01vZGVsKV09XCJkYXRlXCIgW2Ryb3Bkb3duQ2xhc3NOYW1lXT1cIidjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLXBhbmVsJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZ2V0V2VlaygkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbdGltZWxpbmVdPVwidHJ1ZVwiIHBsYWNlSG9sZGVyPVwiXCI+PC9jbWFjcy13ZWVrLXBpY2tlcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibW9kZSA9PT0gJ21vbnRoJ1wiPlxyXG4gICAgPGNtYWNzLW1vbnRoLXBpY2tlclxyXG4gICAgICBbZHJvcGRvd25DbGFzc05hbWVdPVwiJ2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXItcGFuZWwnXCJcclxuICAgICAgW3RpbWVsaW5lXT1cInRydWVcIlxyXG4gICAgICBbKG5nTW9kZWwpXT1cImRhdGVcIlxyXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJnZXRNb250aCgkZXZlbnQpXCJcclxuICAgICAgcGxhY2VIb2xkZXI9XCJcIlxyXG4gICAgPjwvY21hY3MtbW9udGgtcGlja2VyPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1pdGVtXCIgKm5nSWY9XCIobW9kZSA9PT0gJ3dlZWsnIHx8IG1vZGUgPT09ICdtb250aCcpICYmIHJhbmdlZFwiPlxyXG4gIDxpIGNsYXNzPVwiaWNvblVJU21hbGwtQ2FsZW5kZXJcIiBcclxuICAgICBjbWFjcy1wb3BvdmVyIFxyXG4gICAgIFsoY21hY3NQb3BvdmVyVmlzaWJsZSldPVwicmFuZ2VQb3BvdmVyVmlzaWJsZVwiXHJcbiAgICAgW2NtYWNzUG9wb3Zlck92ZXJsYXlDbGFzc05hbWVdPVwiJ3RpbWVsaW5lLWRhdGVwaWNrZXItY3VzdG9tLXJhbmdlLXBpY2tlci1wb3B1cCdcIlxyXG4gICAgIGNtYWNzUG9wb3ZlclRyaWdnZXI9XCJjbGlja1wiXHJcbiAgICAgW2NtYWNzUG9wb3ZlckNvbnRlbnRdPVwiY29udGVudFRlbXBsYXRlUmFuZ2VQaWNrZXJcIiBcclxuICAgICBjbWFjc1BvcG92ZXJQbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCI+PC9pPlxyXG48L2Rpdj5cclxuPG5nLXRlbXBsYXRlICNjb250ZW50VGVtcGxhdGVSYW5nZVBpY2tlcj5cclxuICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtZGF0ZS1yYW5nZS13cmFwcGVyXCI+XHJcbiAgICA8bnotcmFuZ2UtcGlja2VyXHJcbiAgICAgIG56SW5saW5lICAgXHJcbiAgICAgIG56UGxhY2VIb2xkZXI9XCJcIlxyXG4gICAgICBbKG5nTW9kZWwpXT1cInJhbmdlXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICA+PC9uei1yYW5nZS1waWNrZXI+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0OyBkaXNwbGF5OiBibG9jaztcIj5cclxuICAgIDxidXR0b24gY21hY3MtYnV0dG9uIChjbGljayk9XCJvbkNsb3NlUG9wb3ZlcigpXCIgdHlwZT1cInByaW1hcnlcIj5PSzwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=