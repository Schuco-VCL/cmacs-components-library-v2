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
import * as i3 from "@angular/forms";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/core/outlet";
import * as i7 from "../cmacs-tabs/ptb-tab-label.directive";
import * as i8 from "../cmacs-tabs/ptb-tabs-nav.component";
import * as i9 from "../cmacs-menu/menu.directive";
import * as i10 from "../cmacs-menu/menu-item.directive";
import * as i11 from "../cmacs-dropdown/dropdown.directive";
import * as i12 from "../cmacs-dropdown/dropdown-a.directive";
import * as i13 from "../cmacs-dropdown/dropdown-menu.component";
import * as i14 from "../cmacs-date-picker/date-picker.component";
import * as i15 from "../cmacs-date-picker/month-picker.component";
import * as i16 from "../cmacs-date-picker/week-picker.component";
import * as i17 from "../cmacs-date-picker/range-picker.component";
function CmacsTimelineDatepickerComponent_div_0_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 14);
    i0.ɵɵlistener("click", function CmacsTimelineDatepickerComponent_div_0_li_8_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const i_r10 = restoredCtx.index; const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.customSelect(i_r10)); });
    i0.ɵɵelement(1, "i", 15);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", option_r9.selected ? 1 : 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r9.title);
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
    const _r7 = i0.ɵɵreference(6);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cmacsTrigger", "click")("cmacsOpen", true)("dropdownMenu", _r7);
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
    const tab_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tab_r13.title);
} }
function CmacsTimelineDatepickerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵlistener("click", function CmacsTimelineDatepickerComponent_div_5_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r18); const i_r14 = restoredCtx.index; const tab_r13 = restoredCtx.$implicit; const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.clickLabel(i_r14, tab_r13.disabled)); });
    i0.ɵɵtemplate(1, CmacsTimelineDatepickerComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("margin-right", ctx_r3.gutter, "px");
    i0.ɵɵclassProp("ant-tabs-tab-active", ctx_r3.checkActiveTab(i_r14));
    i0.ɵɵproperty("disabled", tab_r13.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", tab_r13.title);
} }
function CmacsTimelineDatepickerComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "cmacs-week-picker", 20);
    i0.ɵɵlistener("ngModelChange", function CmacsTimelineDatepickerComponent_ng_container_7_Template_cmacs_week_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.date = $event); })("ngModelChange", function CmacsTimelineDatepickerComponent_ng_container_7_Template_cmacs_week_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r21.getWeek($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r4.date)("dropdownClassName", "cmacs-timeline-datepicker-panel")("timeline", true);
} }
function CmacsTimelineDatepickerComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "cmacs-month-picker", 21);
    i0.ɵɵlistener("ngModelChange", function CmacsTimelineDatepickerComponent_ng_container_8_Template_cmacs_month_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.date = $event); })("ngModelChange", function CmacsTimelineDatepickerComponent_ng_container_8_Template_cmacs_month_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24.getMonth($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dropdownClassName", "cmacs-timeline-datepicker-panel")("timeline", true)("ngModel", ctx_r5.date);
} }
function CmacsTimelineDatepickerComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "cmacs-range-picker", 22);
    i0.ɵɵlistener("ngModelChange", function CmacsTimelineDatepickerComponent_ng_container_9_Template_cmacs_range_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.range = $event); })("ngModelChange", function CmacsTimelineDatepickerComponent_ng_container_9_Template_cmacs_range_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r27 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r27.onChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r6.range)("mode", "week");
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
        } }, inputs: { gutter: "gutter", mode: "mode", restrictMode: "restrictMode", ranged: "ranged", weekLocale: "weekLocale", locale: "locale", selectedIndex: "selectedIndex", selectedRangeIdxs: "selectedRangeIdxs", date: "date", range: "range" }, outputs: { onNextClick: "onNextClick", onPrevClick: "onPrevClick", selectChange: "selectChange", selectedIndexChange: "selectedIndexChange", dateChange: "dateChange", rangeChange: "rangeChange", modeChange: "modeChange" }, exportAs: ["cmacsTimelineDatepicker"], features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 13, consts: [["class", "cmacs-timeline-item cmacs-timeline-item-dropdown", 4, "ngIf"], [1, "cmacs-timeline-item", 2, "margin-right", "10px", "max-width", "calc(100% - 160px - 16px)"], ["role", "tablist", "tabindex", "0", 1, "ant-tabs-bar", "ant-tabs-top-bar", "cmacs-timeline-datepicker-slider", 3, "nzType", "nzShowPagination", "nzPositionMode", "nzAnimated", "nzHideBar", "selectedIndex", "nzOnNextClick", "nzOnPrevClick"], ["ptb-tab-label", "", "role", "tab", "class", "cmacs-timeline-datepicker-label", 3, "margin-right", "ant-tabs-tab-active", 4, "ngIf"], ["ptb-tab-label", "", "role", "tab", "class", "cmacs-timeline-datepicker-label", 3, "margin-right", "ant-tabs-tab-active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "cmacs-timeline-item"], [4, "ngIf"], [1, "cmacs-timeline-item", "cmacs-timeline-item-dropdown"], ["cmacs-dropdown", "", 1, "cmacs-dropdowm-timeline-datepicker", 2, "display", "inline-flex", 3, "cmacsTrigger", "cmacsOpen", "dropdownMenu"], [1, "cmacs-open-dropdown-wrapper", 2, "width", "80px"], [1, "iconArrowLarge-Solid-Down"], ["menu", "cmacsDropdownMenu"], ["cmacs-menu", "", 2, "min-width", "125px"], ["cmacs-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["cmacs-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "check"], [1, "cmacs-dropdowm-timeline-datepicker"], ["ptb-tab-label", "", "role", "tab", 1, "cmacs-timeline-datepicker-label"], ["ptb-tab-label", "", "role", "tab", 1, "cmacs-timeline-datepicker-label", 3, "disabled", "click"], [4, "nzStringTemplateOutlet"], ["placeHolder", "", 3, "ngModel", "dropdownClassName", "timeline", "ngModelChange"], ["placeHolder", "", 3, "dropdownClassName", "timeline", "ngModel", "ngModelChange"], ["placeHolder", "", 3, "ngModel", "mode", "ngModelChange"]], template: function CmacsTimelineDatepickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsTimelineDatepickerComponent_div_0_Template, 9, 5, "div", 0);
            i0.ɵɵtemplate(1, CmacsTimelineDatepickerComponent_div_1_Template, 4, 1, "div", 0);
            i0.ɵɵelementStart(2, "div", 1)(3, "ptb-tabs-nav", 2);
            i0.ɵɵlistener("nzOnNextClick", function CmacsTimelineDatepickerComponent_Template_ptb_tabs_nav_nzOnNextClick_3_listener() { return ctx.onNextClick.emit(); })("nzOnPrevClick", function CmacsTimelineDatepickerComponent_Template_ptb_tabs_nav_nzOnPrevClick_3_listener() { return ctx.onPrevClick.emit(); });
            i0.ɵɵtemplate(4, CmacsTimelineDatepickerComponent_div_4_Template, 2, 5, "div", 3);
            i0.ɵɵtemplate(5, CmacsTimelineDatepickerComponent_div_5_Template, 2, 6, "div", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵtemplate(7, CmacsTimelineDatepickerComponent_ng_container_7_Template, 2, 3, "ng-container", 6);
            i0.ɵɵtemplate(8, CmacsTimelineDatepickerComponent_ng_container_8_Template, 2, 3, "ng-container", 6);
            i0.ɵɵtemplate(9, CmacsTimelineDatepickerComponent_ng_container_9_Template, 2, 2, "ng-container", 6);
            i0.ɵɵelementEnd();
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
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.mode === "week" && !ctx.ranged);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.mode === "month" && !ctx.ranged);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (ctx.mode === "week" || ctx.mode === "month") && ctx.ranged);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.NgControlStatus, i3.NgModel, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective, i6.NzStringTemplateOutletDirective, i7.PtbTabLabelDirective, i8.PtbTabsNavComponent, i9.CmacsMenuDirective, i10.CmacsMenuItemDirective, i11.CmacsDropDownDirective, i12.CmacsDropDownADirective, i13.CmacsDropdownMenuComponent, i14.CmacsDatePickerComponent, i15.CmacsMonthPickerComponent, i16.CmacsWeekPickerComponent, i17.CmacsRangePickerComponent], styles: [".cmacs-timeline-item .ant-tabs-bar{margin:0 0 16px;border-bottom:1px solid #DEE0E5;outline:none;transition:padding .3s cubic-bezier(.645,.045,.355,1)}::ng-deep .cmacs-timeline-item .ant-tabs{display:block!important}.cmacs-timeline-item .ant-tabs-ink-bar{position:absolute;bottom:1px;left:0;z-index:1;box-sizing:border-box;height:2px;background-color:#2a7cff;transform-origin:0 0}[hidden]{display:none!important}.cmacs-timeline-item .ant-tabs-nav{position:relative;display:inline-block;box-sizing:border-box;margin:0;padding-left:0;list-style:none;transition:transform .3s cubic-bezier(.645,.045,.355,1)}.cmacs-timeline-item .ant-tabs-nav .ant-tabs-tab{position:relative;display:inline-block;box-sizing:border-box;height:100%;margin:0 32px 0 0;padding:12px 16px;text-decoration:none;cursor:pointer;transition:color .3s cubic-bezier(.645,.045,.355,1)}.cmacs-timeline-item .ant-tabs-nav-container-scrolling{padding-right:32px;padding-left:32px}.cmacs-timeline-item .ant-tabs-nav-container{position:relative;box-sizing:border-box;margin-bottom:-1px;overflow:hidden;font-size:14px;line-height:1.5;white-space:nowrap;transition:padding .3s cubic-bezier(.645,.045,.355,1);zoom:1}.cmacs-timeline-item .ant-tabs-tab-prev.ant-tabs-tab-arrow-show,.cmacs-timeline-item .ant-tabs-tab-next.ant-tabs-tab-arrow-show{width:32px;height:100%;opacity:1;pointer-events:auto}.cmacs-timeline-item .ant-tabs-tab-prev{left:0}.cmacs-timeline-item .ant-tabs-nav-scroll{overflow:hidden;white-space:nowrap}.cmacs-timeline-item .ant-tabs-tab-next{right:2px}.cmacs-timeline-item .ant-tabs-nav-wrap{margin-bottom:-1px;overflow:hidden}.cmacs-timeline-item .ant-tabs-tab-prev,.cmacs-timeline-item .ant-tabs-tab-next{position:absolute;z-index:2;width:0;height:100%;color:#656c79;text-align:center;background-color:transparent;border:0;cursor:pointer;opacity:0;transition:width .3s cubic-bezier(.645,.045,.355,1),opacity .3s cubic-bezier(.645,.045,.355,1),color .3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;user-select:none;pointer-events:none}.cmacs-timeline-datepicker-label.ant-tabs-tab{padding:5px 9px!important;border-radius:3px;font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-timeline-datepicker-label.ant-tabs-tab-active{color:#fff!important;padding:6px 7px!important;border-radius:3px 3px 4px 4px;box-shadow:0 6px 10px #3b3f4626;background-color:#2a7cff}.cmacs-timeline-item .anticon.ant-tabs-tab-prev-icon-target.anticon-left,.cmacs-timeline-item .anticon.ant-tabs-tab-next-icon-target.anticon-right{color:#656c79;font-size:11px;top:3px;position:relative}.cmacs-timeline-datepicker-slider.ant-tabs-bar{border-bottom:none;margin-bottom:0}.cmacs-timeline-item{display:inline-block}.cmacs-timeline-item-dropdown{position:relative;margin:0 20px}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker{font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#3b3f46}.cmacs-timeline-datepicker-label.ant-tabs-tab-active:hover{color:#fff}.cmacs-timeline-item .ant-picker-input input{width:16px;display:inline-block;-webkit-user-select:none;user-select:none;cursor:pointer;border:none;height:16px;position:absolute;opacity:0;left:3px}.cmacs-timeline-item .ant-picker:hover,.cmacs-timeline-item .ant-picker,.cmacs-timeline-item .ant-picker:focus{border:none;box-shadow:none;position:relative;top:-3px;color:#656c79;padding:0;cursor:pointer}.cmacs-timeline-item .ant-picker-suffix{color:#656c79;font-size:16px}.cmacs-timeline-item .ant-picker-input:hover .ant-picker-clear,.cmacs-timeline-item .ant-picker-range:hover .ant-picker-clear{opacity:0;display:none}.cmacs-timeline-item .ant-picker-icon{font-size:16px;position:relative;top:-7px}.cmacs-timeline-item .ant-picker-icon:hover{cursor:pointer}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper{border:none;width:auto!important;color:#3b3f46;font-size:14px;font-weight:500;line-height:1.8}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper i{margin-left:10px;color:#3b3f46;top:6px;position:relative}.cmacs-timeline-item .ant-picker:focus .ant-picker-input input:not(.ant-input-disabled){box-shadow:none}.cmacs-timeline-item .ant-picker-range .ant-picker-range-separator,.cmacs-timeline-item .ant-picker-range .ant-picker-input input{display:none}\n", "cmacs-timeline-datepicker{display:block;border-radius:3px;box-shadow:0 3px 7px #3b3f4626;background-color:#fff;padding:7px 0 4px!important;max-width:100%}\n"], encapsulation: 2, changeDetection: 0 }); }
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
                }, template: "<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"!restrictMode\">\r\n\r\n  <a cmacs-dropdown class=\"cmacs-dropdowm-timeline-datepicker\" [cmacsTrigger]=\"'click'\"\r\n     [cmacsOpen]=\"true\" style=\"display: inline-flex\" [dropdownMenu]=\"menu\">\r\n    <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n      {{getSelected().length ? getSelected()[0].title : 'Select'}} <i class=\"iconArrowLarge-Solid-Down\"></i>\r\n    </div>\r\n  </a>\r\n  <cmacs-dropdown-menu #menu=\"cmacsDropdownMenu\">\r\n    <ul cmacs-menu style=\"min-width: 125px\">\r\n      <li *ngFor=\"let option of modeOptions; index as i\" cmacs-menu-item (click)=\"customSelect(i)\">\r\n        <i [style.opacity]=\"option.selected ? 1 : 0\" nz-icon nzType=\"check\"></i>\r\n        <span>{{option.title}}</span>\r\n      </li>\r\n    </ul>\r\n  </cmacs-dropdown-menu>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"restrictMode\">\r\n  <a class=\"cmacs-dropdowm-timeline-datepicker\">\r\n    <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n      {{getSelected().length ? getSelected()[0].title : 'Select'}}\r\n    </div>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\" style=\"margin-right: 10px; max-width: calc(100% - 160px - 16px);\">\r\n  <ptb-tabs-nav role=\"tablist\"\r\n               tabindex=\"0\"\r\n               class=\"ant-tabs-bar ant-tabs-top-bar cmacs-timeline-datepicker-slider\"\r\n               [nzType]=\"'line'\"\r\n               [nzShowPagination]=\"true\"\r\n               [nzPositionMode]=\"'horizontal'\"\r\n               [nzAnimated]=\"true\"\r\n               [nzHideBar]=\"true\"\r\n               [selectedIndex]=\"selectedIndex\"\r\n               (nzOnNextClick)=\"onNextClick.emit()\"\r\n               (nzOnPrevClick)=\"onPrevClick.emit()\">\r\n    <div ptb-tab-label\r\n         role=\"tab\"\r\n         [style.margin-right.px]=\"gutter\"\r\n         class=\"cmacs-timeline-datepicker-label\"\r\n         [class.ant-tabs-tab-active]=\"true\"\r\n         *ngIf=\"showPreviousYearWeek\">\r\n      {{ previousYearWeek }}\r\n    </div>\r\n    <div ptb-tab-label\r\n         role=\"tab\"\r\n         [style.margin-right.px]=\"gutter\"\r\n         class=\"cmacs-timeline-datepicker-label\"\r\n         [class.ant-tabs-tab-active]=\"checkActiveTab(i)\"\r\n         [disabled]=\"tab.disabled\"\r\n         (click)=\"clickLabel(i,tab.disabled)\"\r\n         *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\r\n      <ng-container *nzStringTemplateOutlet=\"tab.title\">{{ tab.title }}</ng-container>\r\n    </div>\r\n  </ptb-tabs-nav>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\">\r\n  <ng-container *ngIf=\"mode === 'week' && !ranged\">\r\n    <cmacs-week-picker [(ngModel)]=\"date\" [dropdownClassName]=\"'cmacs-timeline-datepicker-panel'\"\r\n                       (ngModelChange)=\"getWeek($event)\"\r\n                       [timeline]=\"true\" placeHolder=\"\"></cmacs-week-picker>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"mode === 'month' && !ranged\">\r\n    <cmacs-month-picker\r\n      [dropdownClassName]=\"'cmacs-timeline-datepicker-panel'\"\r\n      [timeline]=\"true\"\r\n      [(ngModel)]=\"date\"\r\n      (ngModelChange)=\"getMonth($event)\"\r\n      placeHolder=\"\"\r\n    ></cmacs-month-picker>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"(mode === 'week' || mode === 'month') && ranged\">\r\n    <cmacs-range-picker\r\n      [(ngModel)]=\"range\"\r\n      [mode]=\"'week'\"\r\n      placeHolder=\"\"\r\n      (ngModelChange)=\"onChange($event)\">\r\n    </cmacs-range-picker>\r\n  </ng-container>\r\n</div>\r\n", styles: [".cmacs-timeline-item .ant-tabs-bar{margin:0 0 16px;border-bottom:1px solid #DEE0E5;outline:none;transition:padding .3s cubic-bezier(.645,.045,.355,1)}::ng-deep .cmacs-timeline-item .ant-tabs{display:block!important}.cmacs-timeline-item .ant-tabs-ink-bar{position:absolute;bottom:1px;left:0;z-index:1;box-sizing:border-box;height:2px;background-color:#2a7cff;transform-origin:0 0}[hidden]{display:none!important}.cmacs-timeline-item .ant-tabs-nav{position:relative;display:inline-block;box-sizing:border-box;margin:0;padding-left:0;list-style:none;transition:transform .3s cubic-bezier(.645,.045,.355,1)}.cmacs-timeline-item .ant-tabs-nav .ant-tabs-tab{position:relative;display:inline-block;box-sizing:border-box;height:100%;margin:0 32px 0 0;padding:12px 16px;text-decoration:none;cursor:pointer;transition:color .3s cubic-bezier(.645,.045,.355,1)}.cmacs-timeline-item .ant-tabs-nav-container-scrolling{padding-right:32px;padding-left:32px}.cmacs-timeline-item .ant-tabs-nav-container{position:relative;box-sizing:border-box;margin-bottom:-1px;overflow:hidden;font-size:14px;line-height:1.5;white-space:nowrap;transition:padding .3s cubic-bezier(.645,.045,.355,1);zoom:1}.cmacs-timeline-item .ant-tabs-tab-prev.ant-tabs-tab-arrow-show,.cmacs-timeline-item .ant-tabs-tab-next.ant-tabs-tab-arrow-show{width:32px;height:100%;opacity:1;pointer-events:auto}.cmacs-timeline-item .ant-tabs-tab-prev{left:0}.cmacs-timeline-item .ant-tabs-nav-scroll{overflow:hidden;white-space:nowrap}.cmacs-timeline-item .ant-tabs-tab-next{right:2px}.cmacs-timeline-item .ant-tabs-nav-wrap{margin-bottom:-1px;overflow:hidden}.cmacs-timeline-item .ant-tabs-tab-prev,.cmacs-timeline-item .ant-tabs-tab-next{position:absolute;z-index:2;width:0;height:100%;color:#656c79;text-align:center;background-color:transparent;border:0;cursor:pointer;opacity:0;transition:width .3s cubic-bezier(.645,.045,.355,1),opacity .3s cubic-bezier(.645,.045,.355,1),color .3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;user-select:none;pointer-events:none}.cmacs-timeline-datepicker-label.ant-tabs-tab{padding:5px 9px!important;border-radius:3px;font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-timeline-datepicker-label.ant-tabs-tab-active{color:#fff!important;padding:6px 7px!important;border-radius:3px 3px 4px 4px;box-shadow:0 6px 10px #3b3f4626;background-color:#2a7cff}.cmacs-timeline-item .anticon.ant-tabs-tab-prev-icon-target.anticon-left,.cmacs-timeline-item .anticon.ant-tabs-tab-next-icon-target.anticon-right{color:#656c79;font-size:11px;top:3px;position:relative}.cmacs-timeline-datepicker-slider.ant-tabs-bar{border-bottom:none;margin-bottom:0}.cmacs-timeline-item{display:inline-block}.cmacs-timeline-item-dropdown{position:relative;margin:0 20px}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker{font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#3b3f46}.cmacs-timeline-datepicker-label.ant-tabs-tab-active:hover{color:#fff}.cmacs-timeline-item .ant-picker-input input{width:16px;display:inline-block;-webkit-user-select:none;user-select:none;cursor:pointer;border:none;height:16px;position:absolute;opacity:0;left:3px}.cmacs-timeline-item .ant-picker:hover,.cmacs-timeline-item .ant-picker,.cmacs-timeline-item .ant-picker:focus{border:none;box-shadow:none;position:relative;top:-3px;color:#656c79;padding:0;cursor:pointer}.cmacs-timeline-item .ant-picker-suffix{color:#656c79;font-size:16px}.cmacs-timeline-item .ant-picker-input:hover .ant-picker-clear,.cmacs-timeline-item .ant-picker-range:hover .ant-picker-clear{opacity:0;display:none}.cmacs-timeline-item .ant-picker-icon{font-size:16px;position:relative;top:-7px}.cmacs-timeline-item .ant-picker-icon:hover{cursor:pointer}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper{border:none;width:auto!important;color:#3b3f46;font-size:14px;font-weight:500;line-height:1.8}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper i{margin-left:10px;color:#3b3f46;top:6px;position:relative}.cmacs-timeline-item .ant-picker:focus .ant-picker-input input:not(.ant-input-disabled){box-shadow:none}.cmacs-timeline-item .ant-picker-range .ant-picker-range-separator,.cmacs-timeline-item .ant-picker-range .ant-picker-input input{display:none}\n", "cmacs-timeline-datepicker{display:block;border-radius:3px;box-shadow:0 3px 7px #3b3f4626;background-color:#fff;padding:7px 0 4px!important;max-width:100%}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUVsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWdDLFFBQVEsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFNUQsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNadEIsOEJBQTZGO0lBQTFCLHNPQUFTLGVBQUEsMkJBQWUsQ0FBQSxJQUFDO0lBQzFGLHdCQUF3RTtJQUN4RSw0QkFBTTtJQUFBLFlBQWdCO0lBQUEsaUJBQU8sRUFBQTs7O0lBRDFCLGVBQXlDO0lBQXpDLHFEQUF5QztJQUN0QyxlQUFnQjtJQUFoQixxQ0FBZ0I7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LEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7Z0JBQzNJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDOUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7b0JBQ3pHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbEgsQ0FBQztJQUVDLGNBQWMsQ0FBQyxJQUFVO1FBQ3ZCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVB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QWtCO1lBQWxCLHVDQUFrQjtZQVlsRSxlQUFpQjtZQUFqQiwrQkFBaUIsMEJBQUEsZ0NBQUEsb0JBQUEsbUJBQUEsb0NBQUE7WUFhdEIsZUFBMEI7WUFBMUIsK0NBQTBCO1lBVVgsZUFBeUI7WUFBekIsa0RBQXlCO1lBT2pDLGVBQWdDO1lBQWhDLHlEQUFnQztZQUtoQyxlQUFpQztZQUFqQywwREFBaUM7WUFTakMsZUFBcUQ7WUFBckQsa0ZBQXFEOzs7QURYM0M7SUFBZixZQUFZLEVBQUU7c0VBQXNCO0FBQ3JCO0lBQWYsWUFBWSxFQUFFO2dFQUFnQjt1RkFiN0IsZ0NBQWdDO2NBekI1QyxTQUFTOzJCQUNFLDJCQUEyQixZQUMzQix5QkFBeUIsbUJBRWxCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksdUJBQ2hCLEtBQUssUUFjcEI7b0JBQ0osa0JBQWtCLEVBQUUsTUFBTTtvQkFDMUIsdUJBQXVCLEVBQUUsTUFBTTtpQkFDaEM7aUpBWVEsTUFBTTtrQkFBZCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ21CLFlBQVk7a0JBQXBDLEtBQUs7WUFDbUIsTUFBTTtrQkFBOUIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDYSxXQUFXO2tCQUE3QixNQUFNO1lBQ1ksV0FBVztrQkFBN0IsTUFBTTtZQUVZLFlBQVk7a0JBQTlCLE1BQU07WUFDWSxtQkFBbUI7a0JBQXJDLE1BQU07WUFDWSxVQUFVO2tCQUE1QixNQUFNO1lBQ1ksV0FBVztrQkFBN0IsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU07WUFXSCxhQUFhO2tCQURoQixLQUFLO1lBVUYsaUJBQWlCO2tCQURwQixLQUFLO1lBVUYsSUFBSTtrQkFEUCxLQUFLO1lBZUYsS0FBSztrQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCwgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIE9uRGVzdHJveVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtnZXRJU09XZWVrLCBnZXRJU09XZWVrc0luWWVhciwgZ2V0TW9udGh9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpUYWJDaGFuZ2VFdmVudCB9IGZyb20gJy4uL2NtYWNzLXRhYnMvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IENtYWNzVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3MtdGFicy90YWIuY29tcG9uZW50JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ21hY3NUaW1lbGluZURhdGVQaWNrZXJNb2RlID0gJ3dlZWsnIHwgJ3F1YXJ0ZXInIHwgJ21vbnRoJyB8ICd3ZWVrLXJhbmdlJyB8ICdtb250aC1yYW5nZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUaW1lbGluZURhdGVwaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggN3B4IDAgcmdiYSg1OSwgNjMsIDcwLCAwLjE1KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAwIDRweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC10YWJzXSc6ICd0cnVlJyxcclxuICAgICdbY2xhc3MuYW50LXRhYnMtbGluZV0nOiAndHJ1ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RpbWVsaW5lRGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgaW5kZXhUb1NlbGVjdDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkUmFuZ2VJZHhzOiBudW1iZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2RhdGU6IERhdGUgfCBudWxsID0gbmV3IERhdGUoKTtcclxuICBwcml2YXRlIF9yYW5nZTogRGF0ZVtdID0gW107XHJcbiAgbGlzdE9mTnpUYWJDb21wb25lbnQ6IGFueVtdO1xyXG5cclxuICBASW5wdXQoKSBndXR0ZXI6IG51bWJlciA9IDI7XHJcbiAgQElucHV0KCkgbW9kZTogQ21hY3NUaW1lbGluZURhdGVQaWNrZXJNb2RlID0gJ3dlZWsnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXN0cmljdE1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmFuZ2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgd2Vla0xvY2FsZSA9IHt3ZWVrIDoge2RvdyA6IDcsIGRveTogMTF9fTtcclxuICBASW5wdXQoKSBsb2NhbGUgPSAnZW4nO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbk5leHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOelRhYkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUYWJDaGFuZ2VFdmVudD4odHJ1ZSk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmFuZ2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlW10+KCk7XHJcbiAgQE91dHB1dCgpIG1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHNob3dQcmV2aW91c1llYXJXZWVrID0gZmFsc2U7XHJcbiAgcHJldmlvdXNZZWFyV2VlayA9IG51bGw7XHJcblxyXG4gIG1vZGVPcHRpb25zID0gW1xyXG4gICAge3RpdGxlOiAnV2VlaycsIHZhbHVlOiAnd2VlaycsIHNlbGVjdGVkOiB0cnVlfSxcclxuICAgIHt0aXRsZTogJ01vbnRoJywgdmFsdWU6ICdtb250aCcsIHNlbGVjdGVkOiBmYWxzZX1cclxuICAgIF07XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5pbmRleFRvU2VsZWN0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRJbmRleCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWxlY3RlZFJhbmdlSWR4cyh2YWx1ZTogbnVtYmVyW10pIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkUmFuZ2VJZHhzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRSYW5nZUlkeHMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkUmFuZ2VJZHhzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0ZSh2YWx1ZTogRGF0ZSB8IG51bGwpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLl9kYXRlID0gdmFsdWU7XHJcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJykge1xyXG4gICAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgPSB0aGlzLmdldFdlZWtzSW5ZZWFyKHRoaXMuZGF0ZSk7XHJcbiAgICAgICAgdGhpcy5zaG93UHJldmlvdXNZZWFyV2VlayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZ2V0V2Vla051bWJlcih2YWx1ZSkgLSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHZhbHVlLmdldE1vbnRoKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJhbmdlKHJhbmdlOiBEYXRlW10pIHtcclxuICAgIGlmIChyYW5nZSAhPT0gbnVsbCAmJiByYW5nZS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zaG93UHJldmlvdXNZZWFyV2VlayA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9yYW5nZSA9IHJhbmdlO1xyXG4gICAgICBsZXQgc3REYXRlWWVhciA9IG1vbWVudCh0aGlzLnJhbmdlWzBdKS55ZWFyKCk7XHJcbiAgICAgIGNvbnN0IG5kRGF0ZVllYXIgPSBtb21lbnQodGhpcy5yYW5nZVsxXSkueWVhcigpO1xyXG4gICAgICBpZiAobW9tZW50KHRoaXMucmFuZ2VbMF0pLnllYXIoKSA9PT0gbW9tZW50KHRoaXMucmFuZ2VbMV0pLnllYXIoKSkge1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJykge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJhbmdlSWR4cyA9IFt0aGlzLmdldFdlZWtOdW1iZXIodGhpcy5fcmFuZ2VbMF0pIC0gMSwgdGhpcy5nZXRXZWVrTnVtYmVyKHRoaXMuX3JhbmdlWzFdKSAtIDFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUmFuZ2VJZHhzID0gW2dldE1vbnRoKHRoaXMuX3JhbmdlWzBdKSwgZ2V0TW9udGgodGhpcy5fcmFuZ2VbMV0pXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnKSB7XHJcbiAgICAgICAgICBsZXQgc3VtV2Vla3MgPSAwO1xyXG4gICAgICAgICAgd2hpbGUobmREYXRlWWVhciAtIHN0RGF0ZVllYXIpIHtcclxuICAgICAgICAgICAgc3VtV2Vla3MgKz0gdGhpcy5nZXRXZWVrc0luWWVhckN1c3RvbShuZXcgRGF0ZShzdERhdGVZZWFyKSk7XHJcbiAgICAgICAgICAgIHN0RGF0ZVllYXIrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHMgPSBbdGhpcy5nZXRXZWVrTnVtYmVyKHRoaXMuX3JhbmdlWzBdKSAtIDEsIHN1bVdlZWtzICsgdGhpcy5nZXRXZWVrTnVtYmVyKHRoaXMuX3JhbmdlWzFdKSAtIDFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUmFuZ2VJZHhzID0gW2dldE1vbnRoKHRoaXMuX3JhbmdlWzBdKSwgMTIqKG5kRGF0ZVllYXIgLSBzdERhdGVZZWFyKSArIGdldE1vbnRoKHRoaXMuX3JhbmdlWzFdKV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuX3NlbGVjdGVkUmFuZ2VJZHhzWzBdO1xyXG5cclxuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCA9IHRoaXMuZ2V0VmFsdWVzU2xpZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcmFuZ2UoKTogRGF0ZVtdIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmFuZ2U7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShyYW5nZTogRGF0ZVtdKTogdm9pZCB7XHJcbiAgICBpZiAocmFuZ2UgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlO1xyXG4gICAgICB0aGlzLnJhbmdlQ2hhbmdlLmVtaXQocmFuZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRhdGUoKTogRGF0ZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrKHJlc3VsdDogRGF0ZSk6IHZvaWQge1xyXG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdChyZXN1bHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0V2Vla051bWJlcihkYXRlKSB7XHJcbiAgICBjb25zdCBtb250aCA9IG1vbWVudChkYXRlKS5tb250aCgpO1xyXG4gICAgbW9tZW50LnVwZGF0ZUxvY2FsZSh0aGlzLmxvY2FsZSwgdGhpcy53ZWVrTG9jYWxlKTtcclxuICAgIGNvbnN0IHdlZWsgPSBtb21lbnQoZGF0ZSkud2VlaygpO1xyXG4gICAgY29uc3Qgd2Vla3NJblllYXIgPSB0aGlzLmdldFdlZWtzSW5ZZWFyQ3VzdG9tKGRhdGUpO1xyXG4gICAgaWYgKG1vbnRoID09PSAxMSAmJiB3ZWVrID09PSAxKSB7XHJcbiAgICAgIHJldHVybiB3ZWVrc0luWWVhcjtcclxuICAgIH1cclxuICAgIGlmIChtb250aCA9PT0gMCAmJiAod2VlayA9PT0gNTMgfHwgd2VlayA9PT0gNTIpKSB7XHJcbiAgICAgIHRoaXMuc2hvd1ByZXZpb3VzWWVhcldlZWsgPSB0cnVlO1xyXG4gICAgICB0aGlzLnByZXZpb3VzWWVhcldlZWsgPSB3ZWVrO1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2VlaztcclxuICB9XHJcblxyXG4gIGdldFdlZWtzSW5ZZWFyQ3VzdG9tKGRhdGUpIHtcclxuICAgIG1vbWVudC51cGRhdGVMb2NhbGUodGhpcy5sb2NhbGUsIHRoaXMud2Vla0xvY2FsZSk7XHJcbiAgICByZXR1cm4gbW9tZW50KGRhdGUpLmlzb1dlZWtzSW5ZZWFyKClcclxuICB9XHJcblxyXG4gIGNsaWNrTGFiZWwoaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICghZGlzYWJsZWQgJiYgdGhpcy5fZGF0ZSAhPT0gbnVsbCkge1xyXG4gICAgICBpZiAoIXRoaXMucmFuZ2VkKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnKSB7XHJcbiAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICAgIGNvbnN0IHdlZWtzID0gdGhpcy5nZXRXZWVrc0luWWVhckN1c3RvbShkKTtcclxuICAgICAgICAgIGQuc2V0RGF0ZSh3ZWVrcyA9PT0gNTIgPyBkLmdldERhdGUoKSArICgoaW5kZXgpICogNykgOiBkLmdldERhdGUoKSArIChpbmRleCAqIDcpKTtcclxuICAgICAgICAgIHRoaXMuZGF0ZSA9IGQ7XHJcbiAgICAgICAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdCh0aGlzLmRhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSwgaW5kZXgsIDEpO1xyXG4gICAgICAgICAgdGhpcy5kYXRlID0gZDtcclxuICAgICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHMgPSBbaW5kZXgsIGluZGV4XTtcclxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycpIHtcclxuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xyXG4gICAgICAgICAgY29uc3Qgd2Vla3MgPSB0aGlzLmdldFdlZWtzSW5ZZWFyQ3VzdG9tKGQpO1xyXG4gICAgICAgICAgZC5zZXREYXRlKHdlZWtzID09PSA1MiA/IGQuZ2V0RGF0ZSgpICsgKChpbmRleCArIDEpICogNy0xKSA6IGQuZ2V0RGF0ZSgpICsgKGluZGV4ICogNyktMSk7XHJcbiAgICAgICAgICB0aGlzLnJhbmdlID0gW2QsIGRdO1xyXG4gICAgICAgICAgdGhpcy5yYW5nZUNoYW5nZS5lbWl0KHRoaXMucmFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSwgaW5kZXgsIDEpO1xyXG4gICAgICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpLCBpbmRleCArIDEsIDApO1xyXG4gICAgICAgICAgdGhpcy5yYW5nZSA9IFtzdGFydCwgZW5kXTtcclxuICAgICAgICAgIHRoaXMucmFuZ2VDaGFuZ2UuZW1pdCh0aGlzLnJhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4OiBudW1iZXIpOiBOelRhYkNoYW5nZUV2ZW50IHtcclxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE56VGFiQ2hhbmdlRXZlbnQoKTtcclxuICAgIGV2ZW50LmluZGV4ID0gaW5kZXg7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCkge1xyXG4gICAgICBldmVudC50YWIgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50W2luZGV4XTtcclxuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XHJcbiAgICAgICAgICBpdGVtLmRlc2VsZWN0LmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBldmVudC50YWIuc2VsZWN0LmVtaXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBldmVudDtcclxuICB9XHJcblxyXG4gIC8qKiBDbGFtcHMgdGhlIGdpdmVuIGluZGV4IHRvIHRoZSBib3VuZHMgb2YgMCBhbmQgdGhlIHRhYnMgbGVuZ3RoLiAqL1xyXG4gIHByaXZhdGUgY2xhbXBUYWJJbmRleChpbmRleDogbnVtYmVyIHwgbnVsbCk6IG51bWJlciB7XHJcbiAgICAvLyBOb3RlIHRoZSBgfHwgMGAsIHdoaWNoIGVuc3VyZXMgdGhhdCB2YWx1ZXMgbGlrZSBOYU4gY2FuJ3QgZ2V0IHRocm91Z2hcclxuICAgIC8vIGFuZCB3aGljaCB3b3VsZCBvdGhlcndpc2UgdGhyb3cgdGhlIGNvbXBvbmVudCBpbnRvIGFuIGluZmluaXRlIGxvb3BcclxuICAgIC8vIChzaW5jZSBNYXRoLm1heChOYU4sIDApID09PSBOYU4pLlxyXG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoIC0gMSwgTWF0aC5tYXgoaW5kZXggfHwgMCwgMCkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy53ZWVrTG9jYWxlID0ge1xyXG4gICAgICB3ZWVrOiB7XHJcbiAgICAgICAgZG93OiBtb21lbnQubG9jYWxlRGF0YSh0aGlzLmxvY2FsZSkuZmlyc3REYXlPZldlZWsoKSxcclxuICAgICAgICBkb3k6IG1vbWVudC5sb2NhbGVEYXRhKHRoaXMubG9jYWxlKS5maXJzdERheU9mWWVhcigpXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdkZSc6XHJcbiAgICAgICAgICB0aGlzLm1vZGVPcHRpb25zWzBdLnRpdGxlID0gJ1dvY2hlJztcclxuICAgICAgICAgIHRoaXMubW9kZU9wdGlvbnNbMV0udGl0bGUgPSAnTW9uYXQnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZW4nOlxyXG4gICAgICAgICAgdGhpcy5tb2RlT3B0aW9uc1swXS50aXRsZSA9ICdXZWVrJztcclxuICAgICAgICAgIHRoaXMubW9kZU9wdGlvbnNbMV0udGl0bGUgPSAnTW9udGgnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdqYSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVPcHRpb25zWzBdLnRpdGxlID0gJ+mAsSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVPcHRpb25zWzFdLnRpdGxlID0gJ+aciCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5tb2RlT3B0aW9uc1swXS50aXRsZSA9ICdXZWVrJztcclxuICAgICAgICAgIHRoaXMubW9kZU9wdGlvbnNbMV0udGl0bGUgPSAnTW9udGgnO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTW9kZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyl7XHJcbiAgICBpZiAoY2hhbmdlcy5tb2RlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRNb2RlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZE1vZGUoKXtcclxuICAgIHRoaXMubW9kZU9wdGlvbnMuZm9yRWFjaChtb2RlID0+IHtcclxuICAgICAgbW9kZS5zZWxlY3RlZCA9IG1vZGUudmFsdWUgPT09IHRoaXMubW9kZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCA9IHRoaXMuZ2V0VmFsdWVzU2xpZGVyKCk7XHJcbiAgICBpZiAodGhpcy5yYW5nZWQpIHtcclxuICAgICAgdGhpcy5yYW5nZSA9IHRoaXMucmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZXNTbGlkZXIoKSB7XHJcbiAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycgJiYgIXRoaXMucmFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuZGF0ZSA9IHRoaXMuZGF0ZTtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0V2Vla3NJblllYXIodGhpcy5kYXRlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICAgIHRoaXMuZGF0ZSA9IHRoaXMuZGF0ZTtcclxuICAgICAgaWYgKHRoaXMucmFuZ2UubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IHN0RGF0ZVllYXIgPSBtb21lbnQodGhpcy5yYW5nZVswXSkueWVhcigpO1xyXG4gICAgICAgIGNvbnN0IG5kRGF0ZVllYXIgPSBtb21lbnQodGhpcy5yYW5nZVsxXSkueWVhcigpO1xyXG4gICAgICAgIGlmIChzdERhdGVZZWFyICE9PSBuZERhdGVZZWFyKSB7XHJcbiAgICAgICAgICBsZXQgcmFuZ2VkTW9udGggPSB0aGlzLmdldERlZmF1bHRNb250aHMoKTtcclxuICAgICAgICAgIHdoaWxlKG5kRGF0ZVllYXIgLSBzdERhdGVZZWFyKSB7XHJcbiAgICAgICAgICAgIHN0RGF0ZVllYXIrKztcclxuICAgICAgICAgICAgcmFuZ2VkTW9udGggPSByYW5nZWRNb250aC5jb25jYXQodGhpcy5nZXREZWZhdWx0TW9udGhzKCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJhbmdlZE1vbnRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0TW9udGhzKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVmYXVsdE1vbnRocygpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJyAmJiB0aGlzLnJhbmdlZCkge1xyXG4gICAgICBpZiAodGhpcy5yYW5nZS5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgc3REYXRlWWVhciA9IG1vbWVudCh0aGlzLnJhbmdlWzBdKS55ZWFyKCk7XHJcbiAgICAgICAgY29uc3QgbmREYXRlWWVhciA9IG1vbWVudCh0aGlzLnJhbmdlWzFdKS55ZWFyKCk7XHJcbiAgICAgICAgaWYgKHN0RGF0ZVllYXIgIT09IG5kRGF0ZVllYXIpIHtcclxuICAgICAgICAgIGxldCByYW5nZWRXZWVrcyA9IHRoaXMuZ2V0V2Vla3NJblllYXIobmV3IERhdGUoc3REYXRlWWVhcikpO1xyXG4gICAgICAgICAgd2hpbGUobmREYXRlWWVhciAtIHN0RGF0ZVllYXIpIHtcclxuICAgICAgICAgICAgcmFuZ2VkV2Vla3MgPSByYW5nZWRXZWVrcy5jb25jYXQodGhpcy5nZXRXZWVrc0luWWVhcihuZXcgRGF0ZShzdERhdGVZZWFyKSkpO1xyXG4gICAgICAgICAgICBzdERhdGVZZWFyKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmFuZ2VkV2Vla3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFdlZWtzSW5ZZWFyKHRoaXMucmFuZ2VbMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmdldFdlZWtzSW5ZZWFyKG5ldyBEYXRlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdE1vbnRocygpIHtcclxuICAgIHJldHVybiB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gW3sgdGl0bGU6ICdKYW4uJyB9LCB7IHRpdGxlOiAnRmViLicgfSwgeyB0aXRsZTogJ03DpHJ6JyB9LCB7IHRpdGxlOiAnQXByLicgfSwgeyB0aXRsZTogJ01haScgfSwgeyB0aXRsZTogJ0p1bmknfSxcclxuICAgICAgeyB0aXRsZTogJ0p1bGknIH0sIHsgdGl0bGU6ICdBdWcuJyB9LCB7IHRpdGxlOiAnU2VwdC4nIH0sIHsgdGl0bGU6ICdPa3QuJyB9LCB7IHRpdGxlOiAnTm92LicgfSwgeyB0aXRsZTogJ0Rlei4nIH1dIDpcclxuICAgICAgdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2phJyA/IFt7IHRpdGxlOiAnMeaciCcgfSwgeyB0aXRsZTogJzLmnIgnIH0sIHsgdGl0bGU6ICcz5pyIJyB9LCB7IHRpdGxlOiAnNOaciCcgfSwgeyB0aXRsZTogJzXmnIgnIH0sIHsgdGl0bGU6ICc25pyIJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICc35pyIJyB9LCB7IHRpdGxlOiAnOOaciCcgfSwgeyB0aXRsZTogJznmnIgnIH0sIHsgdGl0bGU6ICcxMOaciCcgfSwgeyB0aXRsZTogJzEx5pyIJyB9LCB7IHRpdGxlOiAnMTLmnIgnIH1dIDpcclxuICAgIFt7IHRpdGxlOiAnSmFuJyB9LCB7IHRpdGxlOiAnRmViJyB9LCB7IHRpdGxlOiAnTWFyJyB9LCB7IHRpdGxlOiAnQXByJyB9LCB7IHRpdGxlOiAnTWF5JyB9LCB7IHRpdGxlOiAnSnVuJyB9LFxyXG4gICAgICB7IHRpdGxlOiAnSnVsJyB9LCB7IHRpdGxlOiAnQXVnJyB9LCB7IHRpdGxlOiAnU2VwJyB9LCB7IHRpdGxlOiAnT2N0JyB9LCB7IHRpdGxlOiAnTm92JyB9LCB7IHRpdGxlOiAnRGVjJyB9XTtcclxufVxyXG5cclxuICBnZXRXZWVrc0luWWVhcihkYXRlOiBEYXRlKSB7XHJcbiAgICBsZXQgdGVtcCA9IFtdO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRXZWVrc0luWWVhckN1c3RvbShkYXRlKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICB0ZW1wLnB1c2goe3RpdGxlOiB0aGlzLmZvcm1hdFdlZWtOdW1iZXIoaSArIDEpfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGVtcDtcclxuICB9XHJcblxyXG4gIGZvcm1hdFdlZWtOdW1iZXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChcIjBcIiArIHZhbHVlKS5zbGljZSgtMik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICAvL3RoaXMudXBkYXRlU2xpZGVyKCk7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCkge1xyXG4gICAgICAvLyBEb24ndCBjbGFtcCB0aGUgYGluZGV4VG9TZWxlY3RgIGltbWVkaWF0ZWx5IGluIHRoZSBzZXR0ZXIgYmVjYXVzZSBpdCBjYW4gaGFwcGVuIHRoYXRcclxuICAgICAgLy8gdGhlIGFtb3VudCBvZiB0YWJzIGNoYW5nZXMgYmVmb3JlIHRoZSBhY3R1YWwgY2hhbmdlIGRldGVjdGlvbiBydW5zLlxyXG4gICAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gKHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpKTtcclxuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBjaGFuZ2UgaW4gc2VsZWN0ZWQgaW5kZXgsIGVtaXQgYSBjaGFuZ2UgZXZlbnQuIFNob3VsZCBub3QgdHJpZ2dlciBpZlxyXG4gICAgICAvLyB0aGUgc2VsZWN0ZWQgaW5kZXggaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXplZC5cclxuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QpIHtcclxuICAgICAgICBjb25zdCBpc0ZpcnN0UnVuID0gdGhpcy5fc2VsZWN0ZWRJbmRleCA9PSBudWxsO1xyXG4gICAgICAgIC8qaWYgKCFpc0ZpcnN0UnVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdENoYW5nZS5lbWl0KHRoaXMuY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXhUb1NlbGVjdCkpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2luZyB0aGVzZSB2YWx1ZXMgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvbiBoYXMgcnVuXHJcbiAgICAgICAgLy8gc2luY2UgdGhlIGNoZWNrZWQgY29udGVudCBtYXkgY29udGFpbiByZWZlcmVuY2VzIHRvIHRoZW0uXHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYiwgaW5kZXgpID0+ICh0YWIuaXNBY3RpdmUgPSBpbmRleCA9PT0gaW5kZXhUb1NlbGVjdCkpO1xyXG5cclxuICAgICAgICAgIGlmICghaXNGaXJzdFJ1bikge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleFRvU2VsZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2V0dXAgdGhlIHBvc2l0aW9uIGZvciBlYWNoIHRhYiBhbmQgb3B0aW9uYWxseSBzZXR1cCBhbiBvcmlnaW4gb24gdGhlIG5leHQgc2VsZWN0ZWQgdGFiLlxyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYjogQ21hY3NUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICB0YWIucG9zaXRpb24gPSBpbmRleCAtIGluZGV4VG9TZWxlY3Q7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZWxlY3RlZCB0YWIsIHRoZW4gc2V0IHVwIGFuIG9yaWdpbiBmb3IgdGhlIG5leHQgc2VsZWN0ZWQgdGFiXHJcbiAgICAgICAgLy8gaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBhbHJlYWR5LlxyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9IG51bGwgJiYgdGFiLnBvc2l0aW9uID09PSAwICYmICF0YWIub3JpZ2luKSB7XHJcbiAgICAgICAgICB0YWIub3JpZ2luID0gaW5kZXhUb1NlbGVjdCAtIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4VG9TZWxlY3Q7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN1c3RvbVNlbGVjdChpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm1vZGVPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tb2RlT3B0aW9uc1tpbmRleF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5tb2RlID0gdGhpcy5tb2RlT3B0aW9uc1tpbmRleF0udmFsdWUgYXMgQ21hY3NUaW1lbGluZURhdGVQaWNrZXJNb2RlO1xyXG4gICAgdGhpcy5tb2RlQ2hhbmdlLmVtaXQodGhpcy5tb2RlKTtcclxuICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgPSB0aGlzLmdldFZhbHVlc1NsaWRlcigpO1xyXG4gICAgaWYgKHRoaXMucmFuZ2VkKSB7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWQoKXtcclxuICAgIHJldHVybiB0aGlzLm1vZGVPcHRpb25zLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGgocmVzdWx0OiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdChyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja0FjdGl2ZVRhYihpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMucmFuZ2VkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSW5kZXggPj0gMCAmJiAhdGhpcy5zaG93UHJldmlvdXNZZWFyV2VlayAmJiB0aGlzLnNlbGVjdGVkSW5kZXggPT09IGluZGV4O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHMubGVuZ3RoID8gaW5kZXggPj0gdGhpcy5zZWxlY3RlZFJhbmdlSWR4c1swXSAmJiBpbmRleCA8PSB0aGlzLnNlbGVjdGVkUmFuZ2VJZHhzWzFdIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWl0ZW0gY21hY3MtdGltZWxpbmUtaXRlbS1kcm9wZG93blwiICpuZ0lmPVwiIXJlc3RyaWN0TW9kZVwiPlxyXG5cclxuICA8YSBjbWFjcy1kcm9wZG93biBjbGFzcz1cImNtYWNzLWRyb3Bkb3dtLXRpbWVsaW5lLWRhdGVwaWNrZXJcIiBbY21hY3NUcmlnZ2VyXT1cIidjbGljaydcIlxyXG4gICAgIFtjbWFjc09wZW5dPVwidHJ1ZVwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWZsZXhcIiBbZHJvcGRvd25NZW51XT1cIm1lbnVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1vcGVuLWRyb3Bkb3duLXdyYXBwZXJcIiBzdHlsZT1cIndpZHRoOiA4MHB4O1wiPlxyXG4gICAgICB7e2dldFNlbGVjdGVkKCkubGVuZ3RoID8gZ2V0U2VsZWN0ZWQoKVswXS50aXRsZSA6ICdTZWxlY3QnfX0gPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1Tb2xpZC1Eb3duXCI+PC9pPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9hPlxyXG4gIDxjbWFjcy1kcm9wZG93bi1tZW51ICNtZW51PVwiY21hY3NEcm9wZG93bk1lbnVcIj5cclxuICAgIDx1bCBjbWFjcy1tZW51IHN0eWxlPVwibWluLXdpZHRoOiAxMjVweFwiPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBtb2RlT3B0aW9uczsgaW5kZXggYXMgaVwiIGNtYWNzLW1lbnUtaXRlbSAoY2xpY2spPVwiY3VzdG9tU2VsZWN0KGkpXCI+XHJcbiAgICAgICAgPGkgW3N0eWxlLm9wYWNpdHldPVwib3B0aW9uLnNlbGVjdGVkID8gMSA6IDBcIiBuei1pY29uIG56VHlwZT1cImNoZWNrXCI+PC9pPlxyXG4gICAgICAgIDxzcGFuPnt7b3B0aW9uLnRpdGxlfX08L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvY21hY3MtZHJvcGRvd24tbWVudT5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtaXRlbSBjbWFjcy10aW1lbGluZS1pdGVtLWRyb3Bkb3duXCIgKm5nSWY9XCJyZXN0cmljdE1vZGVcIj5cclxuICA8YSBjbGFzcz1cImNtYWNzLWRyb3Bkb3dtLXRpbWVsaW5lLWRhdGVwaWNrZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1vcGVuLWRyb3Bkb3duLXdyYXBwZXJcIiBzdHlsZT1cIndpZHRoOiA4MHB4O1wiPlxyXG4gICAgICB7e2dldFNlbGVjdGVkKCkubGVuZ3RoID8gZ2V0U2VsZWN0ZWQoKVswXS50aXRsZSA6ICdTZWxlY3QnfX1cclxuICAgIDwvZGl2PlxyXG4gIDwvYT5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtaXRlbVwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4OyBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDE2MHB4IC0gMTZweCk7XCI+XHJcbiAgPHB0Yi10YWJzLW5hdiByb2xlPVwidGFibGlzdFwiXHJcbiAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiYW50LXRhYnMtYmFyIGFudC10YWJzLXRvcC1iYXIgY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci1zbGlkZXJcIlxyXG4gICAgICAgICAgICAgICBbbnpUeXBlXT1cIidsaW5lJ1wiXHJcbiAgICAgICAgICAgICAgIFtuelNob3dQYWdpbmF0aW9uXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICBbbnpQb3NpdGlvbk1vZGVdPVwiJ2hvcml6b250YWwnXCJcclxuICAgICAgICAgICAgICAgW256QW5pbWF0ZWRdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgIFtuekhpZGVCYXJdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgIFtzZWxlY3RlZEluZGV4XT1cInNlbGVjdGVkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAobnpPbk5leHRDbGljayk9XCJvbk5leHRDbGljay5lbWl0KClcIlxyXG4gICAgICAgICAgICAgICAobnpPblByZXZDbGljayk9XCJvblByZXZDbGljay5lbWl0KClcIj5cclxuICAgIDxkaXYgcHRiLXRhYi1sYWJlbFxyXG4gICAgICAgICByb2xlPVwidGFiXCJcclxuICAgICAgICAgW3N0eWxlLm1hcmdpbi1yaWdodC5weF09XCJndXR0ZXJcIlxyXG4gICAgICAgICBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXItbGFiZWxcIlxyXG4gICAgICAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWFjdGl2ZV09XCJ0cnVlXCJcclxuICAgICAgICAgKm5nSWY9XCJzaG93UHJldmlvdXNZZWFyV2Vla1wiPlxyXG4gICAgICB7eyBwcmV2aW91c1llYXJXZWVrIH19XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgcHRiLXRhYi1sYWJlbFxyXG4gICAgICAgICByb2xlPVwidGFiXCJcclxuICAgICAgICAgW3N0eWxlLm1hcmdpbi1yaWdodC5weF09XCJndXR0ZXJcIlxyXG4gICAgICAgICBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXItbGFiZWxcIlxyXG4gICAgICAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWFjdGl2ZV09XCJjaGVja0FjdGl2ZVRhYihpKVwiXHJcbiAgICAgICAgIFtkaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxyXG4gICAgICAgICAoY2xpY2spPVwiY2xpY2tMYWJlbChpLHRhYi5kaXNhYmxlZClcIlxyXG4gICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIGxpc3RPZk56VGFiQ29tcG9uZW50OyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0YWIudGl0bGVcIj57eyB0YWIudGl0bGUgfX08L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvcHRiLXRhYnMtbmF2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1pdGVtXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1vZGUgPT09ICd3ZWVrJyAmJiAhcmFuZ2VkXCI+XHJcbiAgICA8Y21hY3Mtd2Vlay1waWNrZXIgWyhuZ01vZGVsKV09XCJkYXRlXCIgW2Ryb3Bkb3duQ2xhc3NOYW1lXT1cIidjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLXBhbmVsJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZ2V0V2VlaygkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbdGltZWxpbmVdPVwidHJ1ZVwiIHBsYWNlSG9sZGVyPVwiXCI+PC9jbWFjcy13ZWVrLXBpY2tlcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibW9kZSA9PT0gJ21vbnRoJyAmJiAhcmFuZ2VkXCI+XHJcbiAgICA8Y21hY3MtbW9udGgtcGlja2VyXHJcbiAgICAgIFtkcm9wZG93bkNsYXNzTmFtZV09XCInY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci1wYW5lbCdcIlxyXG4gICAgICBbdGltZWxpbmVdPVwidHJ1ZVwiXHJcbiAgICAgIFsobmdNb2RlbCldPVwiZGF0ZVwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImdldE1vbnRoKCRldmVudClcIlxyXG4gICAgICBwbGFjZUhvbGRlcj1cIlwiXHJcbiAgICA+PC9jbWFjcy1tb250aC1waWNrZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihtb2RlID09PSAnd2VlaycgfHwgbW9kZSA9PT0gJ21vbnRoJykgJiYgcmFuZ2VkXCI+XHJcbiAgICA8Y21hY3MtcmFuZ2UtcGlja2VyXHJcbiAgICAgIFsobmdNb2RlbCldPVwicmFuZ2VcIlxyXG4gICAgICBbbW9kZV09XCInd2VlaydcIlxyXG4gICAgICBwbGFjZUhvbGRlcj1cIlwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIj5cclxuICAgIDwvY21hY3MtcmFuZ2UtcGlja2VyPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuIl19