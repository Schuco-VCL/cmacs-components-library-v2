import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { getMonth } from "date-fns";
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzTabChangeEvent } from '../cmacs-tabs/interfaces';
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
const moment = moment_;
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
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.NgControlStatus, i3.NgModel, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective, i6.NzStringTemplateOutletDirective, i7.PtbTabLabelDirective, i8.PtbTabsNavComponent, i9.CmacsMenuDirective, i10.CmacsMenuItemDirective, i11.CmacsDropDownDirective, i12.CmacsDropDownADirective, i13.CmacsDropdownMenuComponent, i14.CmacsDatePickerComponent, i15.CmacsMonthPickerComponent, i16.CmacsWeekPickerComponent, i17.CmacsRangePickerComponent], styles: [".cmacs-timeline-item .ant-tabs-bar{margin:0 0 16px;border-bottom:1px solid #DEE0E5;outline:none;transition:padding .3s cubic-bezier(.645,.045,.355,1)}::ng-deep .cmacs-timeline-item .ant-tabs{display:block!important}.cmacs-timeline-item .ant-tabs-ink-bar{position:absolute;bottom:1px;left:0;z-index:1;box-sizing:border-box;height:2px;background-color:#2a7cff;transform-origin:0 0}[hidden]{display:none!important}.cmacs-timeline-item .ant-tabs-nav{position:relative;display:inline-block;box-sizing:border-box;margin:0;padding-left:0;list-style:none;transition:transform .3s cubic-bezier(.645,.045,.355,1)}.cmacs-timeline-item .ant-tabs-nav .ant-tabs-tab{position:relative;display:inline-block;box-sizing:border-box;height:100%;margin:0 32px 0 0;padding:12px 16px;text-decoration:none;cursor:pointer;transition:color .3s cubic-bezier(.645,.045,.355,1)}.cmacs-timeline-item .ant-tabs-nav-container-scrolling{padding-right:32px;padding-left:32px}.cmacs-timeline-item .ant-tabs-nav-container{position:relative;box-sizing:border-box;margin-bottom:-1px;overflow:hidden;font-size:14px;line-height:1.5;white-space:nowrap;transition:padding .3s cubic-bezier(.645,.045,.355,1);zoom:1}.cmacs-timeline-item .ant-tabs-tab-prev.ant-tabs-tab-arrow-show,.cmacs-timeline-item .ant-tabs-tab-next.ant-tabs-tab-arrow-show{width:32px;height:100%;opacity:1;pointer-events:auto}.cmacs-timeline-item .ant-tabs-tab-prev{left:0}.cmacs-timeline-item .ant-tabs-nav-scroll{overflow:hidden;white-space:nowrap}.cmacs-timeline-item .ant-tabs-tab-next{right:2px}.cmacs-timeline-item .ant-tabs-nav-wrap{margin-bottom:-1px;overflow:hidden}.cmacs-timeline-item .ant-tabs-tab-prev,.cmacs-timeline-item .ant-tabs-tab-next{position:absolute;z-index:2;width:0;height:100%;color:#656c79;text-align:center;background-color:transparent;border:0;cursor:pointer;opacity:0;transition:width .3s cubic-bezier(.645,.045,.355,1),opacity .3s cubic-bezier(.645,.045,.355,1),color .3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;user-select:none;pointer-events:none}.cmacs-timeline-datepicker-label.ant-tabs-tab{padding:5px 9px!important;border-radius:3px;font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-timeline-datepicker-label.ant-tabs-tab-active{color:#fff!important;padding:6px 7px!important;border-radius:3px 3px 4px 4px;box-shadow:0 6px 10px #3b3f4626;background-color:#2a7cff}.cmacs-timeline-item .anticon.ant-tabs-tab-prev-icon-target.anticon-left,.cmacs-timeline-item .anticon.ant-tabs-tab-next-icon-target.anticon-right{color:#656c79;font-size:11px;top:3px;position:relative}.cmacs-timeline-datepicker-slider.ant-tabs-bar{border-bottom:none;margin-bottom:0}.cmacs-timeline-item{display:inline-block}.cmacs-timeline-item-dropdown{position:relative;margin:0 20px}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker{font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#3b3f46}.cmacs-timeline-datepicker-label.ant-tabs-tab-active:hover{color:#fff}.cmacs-timeline-item .ant-picker-input input{width:16px;display:inline-block;-webkit-user-select:none;user-select:none;cursor:pointer;border:none;height:16px;position:absolute;opacity:0;left:3px}.cmacs-timeline-item .ant-picker:hover,.cmacs-timeline-item .ant-picker,.cmacs-timeline-item .ant-picker:focus{border:none;box-shadow:none;position:relative;top:-3px;color:#656c79;padding:0;cursor:pointer}.cmacs-timeline-item .ant-picker-suffix{color:#656c79;font-size:16px}.cmacs-timeline-item .ant-picker-input:hover .ant-picker-clear,.cmacs-timeline-item .ant-picker-range:hover .ant-picker-clear{opacity:0;display:none}.cmacs-timeline-item .ant-picker-icon{font-size:16px;position:relative;top:-7px}.cmacs-timeline-item .ant-picker-icon:hover{cursor:pointer}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper{border:none;width:auto!important;color:#3b3f46;font-size:14px;font-weight:500;line-height:1.8}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper i{margin-left:10px;color:#3b3f46;top:6px;position:relative}.cmacs-timeline-item .ant-picker:focus .ant-picker-input input:not(.ant-input-disabled){box-shadow:none}.cmacs-timeline-item .ant-picker-range .ant-picker-range-separator,.cmacs-timeline-item .ant-picker-range .ant-picker-input input{display:none}\n", "cmacs-timeline-datepicker{display:block;border-radius:3px;box-shadow:0 3px 7px #3b3f4626;background-color:#fff;padding:7px 0 4px!important}\n"], encapsulation: 2, changeDetection: 0 }); }
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
                }, template: "<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"!restrictMode\">\r\n\r\n  <a cmacs-dropdown class=\"cmacs-dropdowm-timeline-datepicker\" [cmacsTrigger]=\"'click'\"\r\n     [cmacsOpen]=\"true\" style=\"display: inline-flex\" [dropdownMenu]=\"menu\">\r\n    <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n      {{getSelected().length ? getSelected()[0].title : 'Select'}} <i class=\"iconArrowLarge-Solid-Down\"></i>\r\n    </div>\r\n  </a>\r\n  <cmacs-dropdown-menu #menu=\"cmacsDropdownMenu\">\r\n    <ul cmacs-menu style=\"min-width: 125px\">\r\n      <li *ngFor=\"let option of modeOptions; index as i\" cmacs-menu-item (click)=\"customSelect(i)\">\r\n        <i [style.opacity]=\"option.selected ? 1 : 0\" nz-icon nzType=\"check\"></i>\r\n        <span>{{option.title}}</span>\r\n      </li>\r\n    </ul>\r\n  </cmacs-dropdown-menu>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"restrictMode\">\r\n  <a class=\"cmacs-dropdowm-timeline-datepicker\">\r\n    <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n      {{getSelected().length ? getSelected()[0].title : 'Select'}}\r\n    </div>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\" style=\"margin-right: 10px; max-width: calc(100% - 160px - 16px);\">\r\n  <ptb-tabs-nav role=\"tablist\"\r\n               tabindex=\"0\"\r\n               class=\"ant-tabs-bar ant-tabs-top-bar cmacs-timeline-datepicker-slider\"\r\n               [nzType]=\"'line'\"\r\n               [nzShowPagination]=\"true\"\r\n               [nzPositionMode]=\"'horizontal'\"\r\n               [nzAnimated]=\"true\"\r\n               [nzHideBar]=\"true\"\r\n               [selectedIndex]=\"selectedIndex\"\r\n               (nzOnNextClick)=\"onNextClick.emit()\"\r\n               (nzOnPrevClick)=\"onPrevClick.emit()\">\r\n    <div ptb-tab-label\r\n         role=\"tab\"\r\n         [style.margin-right.px]=\"gutter\"\r\n         class=\"cmacs-timeline-datepicker-label\"\r\n         [class.ant-tabs-tab-active]=\"true\"\r\n         *ngIf=\"showPreviousYearWeek\">\r\n      {{ previousYearWeek }}\r\n    </div>\r\n    <div ptb-tab-label\r\n         role=\"tab\"\r\n         [style.margin-right.px]=\"gutter\"\r\n         class=\"cmacs-timeline-datepicker-label\"\r\n         [class.ant-tabs-tab-active]=\"checkActiveTab(i)\"\r\n         [disabled]=\"tab.disabled\"\r\n         (click)=\"clickLabel(i,tab.disabled)\"\r\n         *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\r\n      <ng-container *nzStringTemplateOutlet=\"tab.title\">{{ tab.title }}</ng-container>\r\n    </div>\r\n  </ptb-tabs-nav>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\">\r\n  <ng-container *ngIf=\"mode === 'week' && !ranged\">\r\n    <cmacs-week-picker [(ngModel)]=\"date\" [dropdownClassName]=\"'cmacs-timeline-datepicker-panel'\"\r\n                       (ngModelChange)=\"getWeek($event)\"\r\n                       [timeline]=\"true\" placeHolder=\"\"></cmacs-week-picker>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"mode === 'month' && !ranged\">\r\n    <cmacs-month-picker\r\n      [dropdownClassName]=\"'cmacs-timeline-datepicker-panel'\"\r\n      [timeline]=\"true\"\r\n      [(ngModel)]=\"date\"\r\n      (ngModelChange)=\"getMonth($event)\"\r\n      placeHolder=\"\"\r\n    ></cmacs-month-picker>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"(mode === 'week' || mode === 'month') && ranged\">\r\n    <cmacs-range-picker\r\n      [(ngModel)]=\"range\"\r\n      [mode]=\"'week'\"\r\n      placeHolder=\"\"\r\n      (ngModelChange)=\"onChange($event)\">\r\n    </cmacs-range-picker>\r\n  </ng-container>\r\n</div>\r\n", styles: [".cmacs-timeline-item .ant-tabs-bar{margin:0 0 16px;border-bottom:1px solid #DEE0E5;outline:none;transition:padding .3s cubic-bezier(.645,.045,.355,1)}::ng-deep .cmacs-timeline-item .ant-tabs{display:block!important}.cmacs-timeline-item .ant-tabs-ink-bar{position:absolute;bottom:1px;left:0;z-index:1;box-sizing:border-box;height:2px;background-color:#2a7cff;transform-origin:0 0}[hidden]{display:none!important}.cmacs-timeline-item .ant-tabs-nav{position:relative;display:inline-block;box-sizing:border-box;margin:0;padding-left:0;list-style:none;transition:transform .3s cubic-bezier(.645,.045,.355,1)}.cmacs-timeline-item .ant-tabs-nav .ant-tabs-tab{position:relative;display:inline-block;box-sizing:border-box;height:100%;margin:0 32px 0 0;padding:12px 16px;text-decoration:none;cursor:pointer;transition:color .3s cubic-bezier(.645,.045,.355,1)}.cmacs-timeline-item .ant-tabs-nav-container-scrolling{padding-right:32px;padding-left:32px}.cmacs-timeline-item .ant-tabs-nav-container{position:relative;box-sizing:border-box;margin-bottom:-1px;overflow:hidden;font-size:14px;line-height:1.5;white-space:nowrap;transition:padding .3s cubic-bezier(.645,.045,.355,1);zoom:1}.cmacs-timeline-item .ant-tabs-tab-prev.ant-tabs-tab-arrow-show,.cmacs-timeline-item .ant-tabs-tab-next.ant-tabs-tab-arrow-show{width:32px;height:100%;opacity:1;pointer-events:auto}.cmacs-timeline-item .ant-tabs-tab-prev{left:0}.cmacs-timeline-item .ant-tabs-nav-scroll{overflow:hidden;white-space:nowrap}.cmacs-timeline-item .ant-tabs-tab-next{right:2px}.cmacs-timeline-item .ant-tabs-nav-wrap{margin-bottom:-1px;overflow:hidden}.cmacs-timeline-item .ant-tabs-tab-prev,.cmacs-timeline-item .ant-tabs-tab-next{position:absolute;z-index:2;width:0;height:100%;color:#656c79;text-align:center;background-color:transparent;border:0;cursor:pointer;opacity:0;transition:width .3s cubic-bezier(.645,.045,.355,1),opacity .3s cubic-bezier(.645,.045,.355,1),color .3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;user-select:none;pointer-events:none}.cmacs-timeline-datepicker-label.ant-tabs-tab{padding:5px 9px!important;border-radius:3px;font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-timeline-datepicker-label.ant-tabs-tab-active{color:#fff!important;padding:6px 7px!important;border-radius:3px 3px 4px 4px;box-shadow:0 6px 10px #3b3f4626;background-color:#2a7cff}.cmacs-timeline-item .anticon.ant-tabs-tab-prev-icon-target.anticon-left,.cmacs-timeline-item .anticon.ant-tabs-tab-next-icon-target.anticon-right{color:#656c79;font-size:11px;top:3px;position:relative}.cmacs-timeline-datepicker-slider.ant-tabs-bar{border-bottom:none;margin-bottom:0}.cmacs-timeline-item{display:inline-block}.cmacs-timeline-item-dropdown{position:relative;margin:0 20px}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker{font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#3b3f46}.cmacs-timeline-datepicker-label.ant-tabs-tab-active:hover{color:#fff}.cmacs-timeline-item .ant-picker-input input{width:16px;display:inline-block;-webkit-user-select:none;user-select:none;cursor:pointer;border:none;height:16px;position:absolute;opacity:0;left:3px}.cmacs-timeline-item .ant-picker:hover,.cmacs-timeline-item .ant-picker,.cmacs-timeline-item .ant-picker:focus{border:none;box-shadow:none;position:relative;top:-3px;color:#656c79;padding:0;cursor:pointer}.cmacs-timeline-item .ant-picker-suffix{color:#656c79;font-size:16px}.cmacs-timeline-item .ant-picker-input:hover .ant-picker-clear,.cmacs-timeline-item .ant-picker-range:hover .ant-picker-clear{opacity:0;display:none}.cmacs-timeline-item .ant-picker-icon{font-size:16px;position:relative;top:-7px}.cmacs-timeline-item .ant-picker-icon:hover{cursor:pointer}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper{border:none;width:auto!important;color:#3b3f46;font-size:14px;font-weight:500;line-height:1.8}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper i{margin-left:10px;color:#3b3f46;top:6px;position:relative}.cmacs-timeline-item .ant-picker:focus .ant-picker-input input:not(.ant-input-disabled){box-shadow:none}.cmacs-timeline-item .ant-picker-range .ant-picker-range-separator,.cmacs-timeline-item .ant-picker-range .ant-picker-input input{display:none}\n", "cmacs-timeline-datepicker{display:block;border-radius:3px;box-shadow:0 3px 7px #3b3f4626;background-color:#fff;padding:7px 0 4px!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUVsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWdDLFFBQVEsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNqRSxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDWnRELDhCQUE2RjtJQUExQixzT0FBUyxlQUFBLDJCQUFlLENBQUEsSUFBQztJQUMxRix3QkFBd0U7SUFDeEUsNEJBQU07SUFBQSxZQUFnQjtJQUFBLGlCQUFPLEVBQUE7OztJQUQxQixlQUF5QztJQUF6QyxxREFB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RyxNQUFNO2tCQUFkLEtBQUs7WUFDYSxXQUFXO2tCQUE3QixNQUFNO1lBQ1ksV0FBVztrQkFBN0IsTUFBTTtZQUVZLFlBQVk7a0JBQTlCLE1BQU07WUFDWSxtQkFBbUI7a0JBQXJDLE1BQU07WUFDWSxVQUFVO2tCQUE1QixNQUFNO1lBQ1ksV0FBVztrQkFBN0IsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU07WUFXSCxhQUFhO2tCQURoQixLQUFLO1lBVUYsaUJBQWlCO2tCQURwQixLQUFLO1lBVUYsSUFBSTtrQkFEUCxLQUFLO1lBZUYsS0FBSztrQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCwgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIE9uRGVzdHJveVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtnZXRJU09XZWVrLCBnZXRJU09XZWVrc0luWWVhciwgZ2V0TW9udGh9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9lbi1pZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOelRhYkNoYW5nZUV2ZW50IH0gZnJvbSAnLi4vY21hY3MtdGFicy9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgQ21hY3NUYWJDb21wb25lbnQgfSBmcm9tICcuLi9jbWFjcy10YWJzL3RhYi5jb21wb25lbnQnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuZXhwb3J0IHR5cGUgQ21hY3NUaW1lbGluZURhdGVQaWNrZXJNb2RlID0gJ3dlZWsnIHwgJ3F1YXJ0ZXInIHwgJ21vbnRoJyB8ICd3ZWVrLXJhbmdlJyB8ICdtb250aC1yYW5nZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUaW1lbGluZURhdGVwaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggN3B4IDAgcmdiYSg1OSwgNjMsIDcwLCAwLjE1KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAwIDRweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRhYnNdJzogJ3RydWUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1saW5lXSc6ICd0cnVlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGltZWxpbmVEYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBpbmRleFRvU2VsZWN0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRSYW5nZUlkeHM6IG51bWJlcltdID0gW107XHJcbiAgcHJpdmF0ZSBfZGF0ZTogRGF0ZSB8IG51bGwgPSBuZXcgRGF0ZSgpO1xyXG4gIHByaXZhdGUgX3JhbmdlOiBEYXRlW10gPSBbXTtcclxuICBsaXN0T2ZOelRhYkNvbXBvbmVudDogYW55W107XHJcblxyXG4gIEBJbnB1dCgpIGd1dHRlcjogbnVtYmVyID0gMjtcclxuICBASW5wdXQoKSBtb2RlOiBDbWFjc1RpbWVsaW5lRGF0ZVBpY2tlck1vZGUgPSAnd2Vlayc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlc3RyaWN0TW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByYW5nZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB3ZWVrTG9jYWxlID0ge3dlZWsgOiB7ZG93IDogNywgZG95OiAxMX19O1xyXG4gIEBJbnB1dCgpIGxvY2FsZSA9ICdlbic7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uTmV4dENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblByZXZDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOelRhYkNoYW5nZUV2ZW50Pih0cnVlKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSByYW5nZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVbXT4oKTtcclxuICBAT3V0cHV0KCkgbW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgc2hvd1ByZXZpb3VzWWVhcldlZWsgPSBmYWxzZTtcclxuICBwcmV2aW91c1llYXJXZWVrID0gbnVsbDtcclxuXHJcbiAgbW9kZU9wdGlvbnMgPSBbXHJcbiAgICB7dGl0bGU6ICdXZWVrJywgdmFsdWU6ICd3ZWVrJywgc2VsZWN0ZWQ6IHRydWV9LFxyXG4gICAge3RpdGxlOiAnTW9udGgnLCB2YWx1ZTogJ21vbnRoJywgc2VsZWN0ZWQ6IGZhbHNlfVxyXG4gICAgXTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZEluZGV4KCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlbGVjdGVkUmFuZ2VJZHhzKHZhbHVlOiBudW1iZXJbXSkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRSYW5nZUlkeHMgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZFJhbmdlSWR4cygpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRSYW5nZUlkeHM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkYXRlKHZhbHVlOiBEYXRlIHwgbnVsbCkge1xyXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX2RhdGUgPSB2YWx1ZTtcclxuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnKSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCA9IHRoaXMuZ2V0V2Vla3NJblllYXIodGhpcy5kYXRlKTtcclxuICAgICAgICB0aGlzLnNob3dQcmV2aW91c1llYXJXZWVrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5nZXRXZWVrTnVtYmVyKHZhbHVlKSAtIDE7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdmFsdWUuZ2V0TW9udGgoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgcmFuZ2UocmFuZ2U6IERhdGVbXSkge1xyXG4gICAgaWYgKHJhbmdlICE9PSBudWxsICYmIHJhbmdlLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNob3dQcmV2aW91c1llYXJXZWVrID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX3JhbmdlID0gcmFuZ2U7XHJcbiAgICAgIGxldCBzdERhdGVZZWFyID0gbW9tZW50KHRoaXMucmFuZ2VbMF0pLnllYXIoKTtcclxuICAgICAgY29uc3QgbmREYXRlWWVhciA9IG1vbWVudCh0aGlzLnJhbmdlWzFdKS55ZWFyKCk7XHJcbiAgICAgIGlmIChtb21lbnQodGhpcy5yYW5nZVswXSkueWVhcigpID09PSBtb21lbnQodGhpcy5yYW5nZVsxXSkueWVhcigpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUmFuZ2VJZHhzID0gW3RoaXMuZ2V0V2Vla051bWJlcih0aGlzLl9yYW5nZVswXSkgLSAxLCB0aGlzLmdldFdlZWtOdW1iZXIodGhpcy5fcmFuZ2VbMV0pIC0gMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHMgPSBbZ2V0TW9udGgodGhpcy5fcmFuZ2VbMF0pLCBnZXRNb250aCh0aGlzLl9yYW5nZVsxXSldO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycpIHtcclxuICAgICAgICAgIGxldCBzdW1XZWVrcyA9IDA7XHJcbiAgICAgICAgICB3aGlsZShuZERhdGVZZWFyIC0gc3REYXRlWWVhcikge1xyXG4gICAgICAgICAgICBzdW1XZWVrcyArPSB0aGlzLmdldFdlZWtzSW5ZZWFyQ3VzdG9tKG5ldyBEYXRlKHN0RGF0ZVllYXIpKTtcclxuICAgICAgICAgICAgc3REYXRlWWVhcisrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJhbmdlSWR4cyA9IFt0aGlzLmdldFdlZWtOdW1iZXIodGhpcy5fcmFuZ2VbMF0pIC0gMSwgc3VtV2Vla3MgKyB0aGlzLmdldFdlZWtOdW1iZXIodGhpcy5fcmFuZ2VbMV0pIC0gMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHMgPSBbZ2V0TW9udGgodGhpcy5fcmFuZ2VbMF0pLCAxMioobmREYXRlWWVhciAtIHN0RGF0ZVllYXIpICsgZ2V0TW9udGgodGhpcy5fcmFuZ2VbMV0pXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fc2VsZWN0ZWRSYW5nZUlkeHNbMF07XHJcblxyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ID0gdGhpcy5nZXRWYWx1ZXNTbGlkZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCByYW5nZSgpOiBEYXRlW10gfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9yYW5nZTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKHJhbmdlOiBEYXRlW10pOiB2b2lkIHtcclxuICAgIGlmIChyYW5nZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJhbmdlID0gcmFuZ2U7XHJcbiAgICAgIHRoaXMucmFuZ2VDaGFuZ2UuZW1pdChyYW5nZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0ZSgpOiBEYXRlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0ZTtcclxuICB9XHJcblxyXG4gIGdldFdlZWsocmVzdWx0OiBEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrTnVtYmVyKGRhdGUpIHtcclxuICAgIGNvbnN0IG1vbnRoID0gbW9tZW50KGRhdGUpLm1vbnRoKCk7XHJcbiAgICBtb21lbnQudXBkYXRlTG9jYWxlKHRoaXMubG9jYWxlLCB0aGlzLndlZWtMb2NhbGUpO1xyXG4gICAgY29uc3Qgd2VlayA9IG1vbWVudChkYXRlKS53ZWVrKCk7XHJcbiAgICBjb25zdCB3ZWVrc0luWWVhciA9IHRoaXMuZ2V0V2Vla3NJblllYXJDdXN0b20oZGF0ZSk7XHJcbiAgICBpZiAobW9udGggPT09IDExICYmIHdlZWsgPT09IDEpIHtcclxuICAgICAgcmV0dXJuIHdlZWtzSW5ZZWFyO1xyXG4gICAgfVxyXG4gICAgaWYgKG1vbnRoID09PSAwICYmICh3ZWVrID09PSA1MyB8fCB3ZWVrID09PSA1MikpIHtcclxuICAgICAgdGhpcy5zaG93UHJldmlvdXNZZWFyV2VlayA9IHRydWU7XHJcbiAgICAgIHRoaXMucHJldmlvdXNZZWFyV2VlayA9IHdlZWs7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIHJldHVybiB3ZWVrO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2Vla3NJblllYXJDdXN0b20oZGF0ZSkge1xyXG4gICAgbW9tZW50LnVwZGF0ZUxvY2FsZSh0aGlzLmxvY2FsZSwgdGhpcy53ZWVrTG9jYWxlKTtcclxuICAgIHJldHVybiBtb21lbnQoZGF0ZSkuaXNvV2Vla3NJblllYXIoKVxyXG4gIH1cclxuXHJcbiAgY2xpY2tMYWJlbChpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCFkaXNhYmxlZCAmJiB0aGlzLl9kYXRlICE9PSBudWxsKSB7XHJcbiAgICAgIGlmICghdGhpcy5yYW5nZWQpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycpIHtcclxuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xyXG4gICAgICAgICAgY29uc3Qgd2Vla3MgPSB0aGlzLmdldFdlZWtzSW5ZZWFyQ3VzdG9tKGQpO1xyXG4gICAgICAgICAgZC5zZXREYXRlKHdlZWtzID09PSA1MiA/IGQuZ2V0RGF0ZSgpICsgKChpbmRleCkgKiA3KSA6IGQuZ2V0RGF0ZSgpICsgKGluZGV4ICogNykpO1xyXG4gICAgICAgICAgdGhpcy5kYXRlID0gZDtcclxuICAgICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpLCBpbmRleCwgMSk7XHJcbiAgICAgICAgICB0aGlzLmRhdGUgPSBkO1xyXG4gICAgICAgICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQodGhpcy5kYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJhbmdlSWR4cyA9IFtpbmRleCwgaW5kZXhdO1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJykge1xyXG4gICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XHJcbiAgICAgICAgICBjb25zdCB3ZWVrcyA9IHRoaXMuZ2V0V2Vla3NJblllYXJDdXN0b20oZCk7XHJcbiAgICAgICAgICBkLnNldERhdGUod2Vla3MgPT09IDUyID8gZC5nZXREYXRlKCkgKyAoKGluZGV4ICsgMSkgKiA3LTEpIDogZC5nZXREYXRlKCkgKyAoaW5kZXggKiA3KS0xKTtcclxuICAgICAgICAgIHRoaXMucmFuZ2UgPSBbZCwgZF07XHJcbiAgICAgICAgICB0aGlzLnJhbmdlQ2hhbmdlLmVtaXQodGhpcy5yYW5nZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdtb250aCcpIHtcclxuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpLCBpbmRleCwgMSk7XHJcbiAgICAgICAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksIGluZGV4ICsgMSwgMCk7XHJcbiAgICAgICAgICB0aGlzLnJhbmdlID0gW3N0YXJ0LCBlbmRdO1xyXG4gICAgICAgICAgdGhpcy5yYW5nZUNoYW5nZS5lbWl0KHRoaXMucmFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXg6IG51bWJlcik6IE56VGFiQ2hhbmdlRXZlbnQge1xyXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgTnpUYWJDaGFuZ2VFdmVudCgpO1xyXG4gICAgZXZlbnQuaW5kZXggPSBpbmRleDtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoKSB7XHJcbiAgICAgIGV2ZW50LnRhYiA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnRbaW5kZXhdO1xyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICBpZiAoaSAhPT0gaW5kZXgpIHtcclxuICAgICAgICAgIGl0ZW0uZGVzZWxlY3QuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGV2ZW50LnRhYi5zZWxlY3QuZW1pdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqIENsYW1wcyB0aGUgZ2l2ZW4gaW5kZXggdG8gdGhlIGJvdW5kcyBvZiAwIGFuZCB0aGUgdGFicyBsZW5ndGguICovXHJcbiAgcHJpdmF0ZSBjbGFtcFRhYkluZGV4KGluZGV4OiBudW1iZXIgfCBudWxsKTogbnVtYmVyIHtcclxuICAgIC8vIE5vdGUgdGhlIGB8fCAwYCwgd2hpY2ggZW5zdXJlcyB0aGF0IHZhbHVlcyBsaWtlIE5hTiBjYW4ndCBnZXQgdGhyb3VnaFxyXG4gICAgLy8gYW5kIHdoaWNoIHdvdWxkIG90aGVyd2lzZSB0aHJvdyB0aGUgY29tcG9uZW50IGludG8gYW4gaW5maW5pdGUgbG9vcFxyXG4gICAgLy8gKHNpbmNlIE1hdGgubWF4KE5hTiwgMCkgPT09IE5hTikuXHJcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGggLSAxLCBNYXRoLm1heChpbmRleCB8fCAwLCAwKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLndlZWtMb2NhbGUgPSB7XHJcbiAgICAgIHdlZWs6IHtcclxuICAgICAgICBkb3c6IG1vbWVudC5sb2NhbGVEYXRhKHRoaXMubG9jYWxlKS5maXJzdERheU9mV2VlaygpLFxyXG4gICAgICAgIGRveTogbW9tZW50LmxvY2FsZURhdGEodGhpcy5sb2NhbGUpLmZpcnN0RGF5T2ZZZWFyKClcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSkge1xyXG4gICAgICAgIGNhc2UgJ2RlJzpcclxuICAgICAgICAgIHRoaXMubW9kZU9wdGlvbnNbMF0udGl0bGUgPSAnV29jaGUnO1xyXG4gICAgICAgICAgdGhpcy5tb2RlT3B0aW9uc1sxXS50aXRsZSA9ICdNb25hdCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdlbic6XHJcbiAgICAgICAgICB0aGlzLm1vZGVPcHRpb25zWzBdLnRpdGxlID0gJ1dlZWsnO1xyXG4gICAgICAgICAgdGhpcy5tb2RlT3B0aW9uc1sxXS50aXRsZSA9ICdNb250aCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5tb2RlT3B0aW9uc1swXS50aXRsZSA9ICdXZWVrJztcclxuICAgICAgICAgIHRoaXMubW9kZU9wdGlvbnNbMV0udGl0bGUgPSAnTW9udGgnO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTW9kZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyl7XHJcbiAgICBpZiAoY2hhbmdlcy5tb2RlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRNb2RlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZE1vZGUoKXtcclxuICAgIHRoaXMubW9kZU9wdGlvbnMuZm9yRWFjaChtb2RlID0+IHtcclxuICAgICAgbW9kZS5zZWxlY3RlZCA9IG1vZGUudmFsdWUgPT09IHRoaXMubW9kZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCA9IHRoaXMuZ2V0VmFsdWVzU2xpZGVyKCk7XHJcbiAgICBpZiAodGhpcy5yYW5nZWQpIHtcclxuICAgICAgdGhpcy5yYW5nZSA9IHRoaXMucmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZXNTbGlkZXIoKSB7XHJcbiAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycgJiYgIXRoaXMucmFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuZGF0ZSA9IHRoaXMuZGF0ZTtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0V2Vla3NJblllYXIodGhpcy5kYXRlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICAgIHRoaXMuZGF0ZSA9IHRoaXMuZGF0ZTtcclxuICAgICAgaWYgKHRoaXMucmFuZ2UubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IHN0RGF0ZVllYXIgPSBtb21lbnQodGhpcy5yYW5nZVswXSkueWVhcigpO1xyXG4gICAgICAgIGNvbnN0IG5kRGF0ZVllYXIgPSBtb21lbnQodGhpcy5yYW5nZVsxXSkueWVhcigpO1xyXG4gICAgICAgIGlmIChzdERhdGVZZWFyICE9PSBuZERhdGVZZWFyKSB7XHJcbiAgICAgICAgICBsZXQgcmFuZ2VkTW9udGggPSB0aGlzLmdldERlZmF1bHRNb250aHMoKTtcclxuICAgICAgICAgIHdoaWxlKG5kRGF0ZVllYXIgLSBzdERhdGVZZWFyKSB7XHJcbiAgICAgICAgICAgIHN0RGF0ZVllYXIrKztcclxuICAgICAgICAgICAgcmFuZ2VkTW9udGggPSByYW5nZWRNb250aC5jb25jYXQodGhpcy5nZXREZWZhdWx0TW9udGhzKCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJhbmdlZE1vbnRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0TW9udGhzKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVmYXVsdE1vbnRocygpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJyAmJiB0aGlzLnJhbmdlZCkge1xyXG4gICAgICBpZiAodGhpcy5yYW5nZS5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgc3REYXRlWWVhciA9IG1vbWVudCh0aGlzLnJhbmdlWzBdKS55ZWFyKCk7XHJcbiAgICAgICAgY29uc3QgbmREYXRlWWVhciA9IG1vbWVudCh0aGlzLnJhbmdlWzFdKS55ZWFyKCk7XHJcbiAgICAgICAgaWYgKHN0RGF0ZVllYXIgIT09IG5kRGF0ZVllYXIpIHtcclxuICAgICAgICAgIGxldCByYW5nZWRXZWVrcyA9IHRoaXMuZ2V0V2Vla3NJblllYXIobmV3IERhdGUoc3REYXRlWWVhcikpO1xyXG4gICAgICAgICAgd2hpbGUobmREYXRlWWVhciAtIHN0RGF0ZVllYXIpIHtcclxuICAgICAgICAgICAgcmFuZ2VkV2Vla3MgPSByYW5nZWRXZWVrcy5jb25jYXQodGhpcy5nZXRXZWVrc0luWWVhcihuZXcgRGF0ZShzdERhdGVZZWFyKSkpO1xyXG4gICAgICAgICAgICBzdERhdGVZZWFyKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmFuZ2VkV2Vla3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFdlZWtzSW5ZZWFyKHRoaXMucmFuZ2VbMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmdldFdlZWtzSW5ZZWFyKG5ldyBEYXRlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdE1vbnRocygpIHtcclxuICAgIHJldHVybiB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gW3sgdGl0bGU6ICdKYW4uJyB9LCB7IHRpdGxlOiAnRmViLicgfSwgeyB0aXRsZTogJ03DpHJ6JyB9LCB7IHRpdGxlOiAnQXByLicgfSwgeyB0aXRsZTogJ01haScgfSwgeyB0aXRsZTogJ0p1bmknfSxcclxuICAgICAgeyB0aXRsZTogJ0p1bGknIH0sIHsgdGl0bGU6ICdBdWcuJyB9LCB7IHRpdGxlOiAnU2VwdC4nIH0sIHsgdGl0bGU6ICdPa3QuJyB9LCB7IHRpdGxlOiAnTm92LicgfSwgeyB0aXRsZTogJ0Rlei4nIH1dIDpcclxuICAgIFt7IHRpdGxlOiAnSmFuJyB9LCB7IHRpdGxlOiAnRmViJyB9LCB7IHRpdGxlOiAnTWFyJyB9LCB7IHRpdGxlOiAnQXByJyB9LCB7IHRpdGxlOiAnTWF5JyB9LCB7IHRpdGxlOiAnSnVuJyB9LFxyXG4gICAgICB7IHRpdGxlOiAnSnVsJyB9LCB7IHRpdGxlOiAnQXVnJyB9LCB7IHRpdGxlOiAnU2VwJyB9LCB7IHRpdGxlOiAnT2N0JyB9LCB7IHRpdGxlOiAnTm92JyB9LCB7IHRpdGxlOiAnRGVjJyB9XTtcclxuICB9XHJcblxyXG4gIGdldFdlZWtzSW5ZZWFyKGRhdGU6IERhdGUpIHtcclxuICAgIGxldCB0ZW1wID0gW107XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldFdlZWtzSW5ZZWFyQ3VzdG9tKGRhdGUpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRlbXAucHVzaCh7dGl0bGU6IHRoaXMuZm9ybWF0V2Vla051bWJlcihpICsgMSl9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZW1wO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0V2Vla051bWJlcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKFwiMFwiICsgdmFsdWUpLnNsaWNlKC0yKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIC8vdGhpcy51cGRhdGVTbGlkZXIoKTtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoKSB7XHJcbiAgICAgIC8vIERvbid0IGNsYW1wIHRoZSBgaW5kZXhUb1NlbGVjdGAgaW1tZWRpYXRlbHkgaW4gdGhlIHNldHRlciBiZWNhdXNlIGl0IGNhbiBoYXBwZW4gdGhhdFxyXG4gICAgICAvLyB0aGUgYW1vdW50IG9mIHRhYnMgY2hhbmdlcyBiZWZvcmUgdGhlIGFjdHVhbCBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMuXHJcbiAgICAgIGNvbnN0IGluZGV4VG9TZWxlY3QgPSAodGhpcy5pbmRleFRvU2VsZWN0ID0gdGhpcy5jbGFtcFRhYkluZGV4KHRoaXMuaW5kZXhUb1NlbGVjdCkpO1xyXG4gICAgICAvLyBJZiB0aGVyZSBpcyBhIGNoYW5nZSBpbiBzZWxlY3RlZCBpbmRleCwgZW1pdCBhIGNoYW5nZSBldmVudC4gU2hvdWxkIG5vdCB0cmlnZ2VyIGlmXHJcbiAgICAgIC8vIHRoZSBzZWxlY3RlZCBpbmRleCBoYXMgbm90IHlldCBiZWVuIGluaXRpYWxpemVkLlxyXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhUb1NlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IGlzRmlyc3RSdW4gPSB0aGlzLl9zZWxlY3RlZEluZGV4ID09IG51bGw7XHJcbiAgICAgICAgLyppZiAoIWlzRmlyc3RSdW4pIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0Q2hhbmdlLmVtaXQodGhpcy5jcmVhdGVDaGFuZ2VFdmVudChpbmRleFRvU2VsZWN0KSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIC8vIENoYW5naW5nIHRoZXNlIHZhbHVlcyBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIGhhcyBydW5cclxuICAgICAgICAvLyBzaW5jZSB0aGUgY2hlY2tlZCBjb250ZW50IG1heSBjb250YWluIHJlZmVyZW5jZXMgdG8gdGhlbS5cclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4gKHRhYi5pc0FjdGl2ZSA9IGluZGV4ID09PSBpbmRleFRvU2VsZWN0KSk7XHJcblxyXG4gICAgICAgICAgaWYgKCFpc0ZpcnN0UnVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4VG9TZWxlY3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTZXR1cCB0aGUgcG9zaXRpb24gZm9yIGVhY2ggdGFiIGFuZCBvcHRpb25hbGx5IHNldHVwIGFuIG9yaWdpbiBvbiB0aGUgbmV4dCBzZWxlY3RlZCB0YWIuXHJcbiAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgodGFiOiBDbWFjc1RhYkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRhYi5wb3NpdGlvbiA9IGluZGV4IC0gaW5kZXhUb1NlbGVjdDtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlbGVjdGVkIHRhYiwgdGhlbiBzZXQgdXAgYW4gb3JpZ2luIGZvciB0aGUgbmV4dCBzZWxlY3RlZCB0YWJcclxuICAgICAgICAvLyBpZiBpdCBkb2Vzbid0IGhhdmUgb25lIGFscmVhZHkuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT0gbnVsbCAmJiB0YWIucG9zaXRpb24gPT09IDAgJiYgIXRhYi5vcmlnaW4pIHtcclxuICAgICAgICAgIHRhYi5vcmlnaW4gPSBpbmRleFRvU2VsZWN0IC0gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QpIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaW5kZXhUb1NlbGVjdDtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3VzdG9tU2VsZWN0KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMubW9kZU9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1vZGVPcHRpb25zW2luZGV4XS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB0aGlzLm1vZGUgPSB0aGlzLm1vZGVPcHRpb25zW2luZGV4XS52YWx1ZSBhcyBDbWFjc1RpbWVsaW5lRGF0ZVBpY2tlck1vZGU7XHJcbiAgICB0aGlzLm1vZGVDaGFuZ2UuZW1pdCh0aGlzLm1vZGUpO1xyXG4gICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCA9IHRoaXMuZ2V0VmFsdWVzU2xpZGVyKCk7XHJcbiAgICBpZiAodGhpcy5yYW5nZWQpIHtcclxuICAgICAgdGhpcy5yYW5nZSA9IHRoaXMucmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZCgpe1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZU9wdGlvbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aChyZXN1bHQ6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrQWN0aXZlVGFiKGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5yYW5nZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJbmRleCA+PSAwICYmICF0aGlzLnNob3dQcmV2aW91c1llYXJXZWVrICYmIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFJhbmdlSWR4cy5sZW5ndGggPyBpbmRleCA+PSB0aGlzLnNlbGVjdGVkUmFuZ2VJZHhzWzBdICYmIGluZGV4IDw9IHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHNbMV0gOiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCI8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtaXRlbSBjbWFjcy10aW1lbGluZS1pdGVtLWRyb3Bkb3duXCIgKm5nSWY9XCIhcmVzdHJpY3RNb2RlXCI+XHJcblxyXG4gIDxhIGNtYWNzLWRyb3Bkb3duIGNsYXNzPVwiY21hY3MtZHJvcGRvd20tdGltZWxpbmUtZGF0ZXBpY2tlclwiIFtjbWFjc1RyaWdnZXJdPVwiJ2NsaWNrJ1wiXHJcbiAgICAgW2NtYWNzT3Blbl09XCJ0cnVlXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtZmxleFwiIFtkcm9wZG93bk1lbnVdPVwibWVudVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLW9wZW4tZHJvcGRvd24td3JhcHBlclwiIHN0eWxlPVwid2lkdGg6IDgwcHg7XCI+XHJcbiAgICAgIHt7Z2V0U2VsZWN0ZWQoKS5sZW5ndGggPyBnZXRTZWxlY3RlZCgpWzBdLnRpdGxlIDogJ1NlbGVjdCd9fSA8aSBjbGFzcz1cImljb25BcnJvd0xhcmdlLVNvbGlkLURvd25cIj48L2k+XHJcbiAgICA8L2Rpdj5cclxuICA8L2E+XHJcbiAgPGNtYWNzLWRyb3Bkb3duLW1lbnUgI21lbnU9XCJjbWFjc0Ryb3Bkb3duTWVudVwiPlxyXG4gICAgPHVsIGNtYWNzLW1lbnUgc3R5bGU9XCJtaW4td2lkdGg6IDEyNXB4XCI+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG1vZGVPcHRpb25zOyBpbmRleCBhcyBpXCIgY21hY3MtbWVudS1pdGVtIChjbGljayk9XCJjdXN0b21TZWxlY3QoaSlcIj5cclxuICAgICAgICA8aSBbc3R5bGUub3BhY2l0eV09XCJvcHRpb24uc2VsZWN0ZWQgPyAxIDogMFwiIG56LWljb24gbnpUeXBlPVwiY2hlY2tcIj48L2k+XHJcbiAgICAgICAgPHNwYW4+e3tvcHRpb24udGl0bGV9fTwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9jbWFjcy1kcm9wZG93bi1tZW51PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1pdGVtIGNtYWNzLXRpbWVsaW5lLWl0ZW0tZHJvcGRvd25cIiAqbmdJZj1cInJlc3RyaWN0TW9kZVwiPlxyXG4gIDxhIGNsYXNzPVwiY21hY3MtZHJvcGRvd20tdGltZWxpbmUtZGF0ZXBpY2tlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLW9wZW4tZHJvcGRvd24td3JhcHBlclwiIHN0eWxlPVwid2lkdGg6IDgwcHg7XCI+XHJcbiAgICAgIHt7Z2V0U2VsZWN0ZWQoKS5sZW5ndGggPyBnZXRTZWxlY3RlZCgpWzBdLnRpdGxlIDogJ1NlbGVjdCd9fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9hPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1pdGVtXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHg7IG1heC13aWR0aDogY2FsYygxMDAlIC0gMTYwcHggLSAxNnB4KTtcIj5cclxuICA8cHRiLXRhYnMtbmF2IHJvbGU9XCJ0YWJsaXN0XCJcclxuICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgICAgY2xhc3M9XCJhbnQtdGFicy1iYXIgYW50LXRhYnMtdG9wLWJhciBjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLXNsaWRlclwiXHJcbiAgICAgICAgICAgICAgIFtuelR5cGVdPVwiJ2xpbmUnXCJcclxuICAgICAgICAgICAgICAgW256U2hvd1BhZ2luYXRpb25dPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgIFtuelBvc2l0aW9uTW9kZV09XCInaG9yaXpvbnRhbCdcIlxyXG4gICAgICAgICAgICAgICBbbnpBbmltYXRlZF09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgW256SGlkZUJhcl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgW3NlbGVjdGVkSW5kZXhdPVwic2VsZWN0ZWRJbmRleFwiXHJcbiAgICAgICAgICAgICAgIChuek9uTmV4dENsaWNrKT1cIm9uTmV4dENsaWNrLmVtaXQoKVwiXHJcbiAgICAgICAgICAgICAgIChuek9uUHJldkNsaWNrKT1cIm9uUHJldkNsaWNrLmVtaXQoKVwiPlxyXG4gICAgPGRpdiBwdGItdGFiLWxhYmVsXHJcbiAgICAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICBbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XT1cImd1dHRlclwiXHJcbiAgICAgICAgIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci1sYWJlbFwiXHJcbiAgICAgICAgIFtjbGFzcy5hbnQtdGFicy10YWItYWN0aXZlXT1cInRydWVcIlxyXG4gICAgICAgICAqbmdJZj1cInNob3dQcmV2aW91c1llYXJXZWVrXCI+XHJcbiAgICAgIHt7IHByZXZpb3VzWWVhcldlZWsgfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBwdGItdGFiLWxhYmVsXHJcbiAgICAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICBbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XT1cImd1dHRlclwiXHJcbiAgICAgICAgIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci1sYWJlbFwiXHJcbiAgICAgICAgIFtjbGFzcy5hbnQtdGFicy10YWItYWN0aXZlXT1cImNoZWNrQWN0aXZlVGFiKGkpXCJcclxuICAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXHJcbiAgICAgICAgIChjbGljayk9XCJjbGlja0xhYmVsKGksdGFiLmRpc2FibGVkKVwiXHJcbiAgICAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgbGlzdE9mTnpUYWJDb21wb25lbnQ7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRhYi50aXRsZVwiPnt7IHRhYi50aXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9wdGItdGFicy1uYXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWl0ZW1cIj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibW9kZSA9PT0gJ3dlZWsnICYmICFyYW5nZWRcIj5cclxuICAgIDxjbWFjcy13ZWVrLXBpY2tlciBbKG5nTW9kZWwpXT1cImRhdGVcIiBbZHJvcGRvd25DbGFzc05hbWVdPVwiJ2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXItcGFuZWwnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJnZXRXZWVrKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFt0aW1lbGluZV09XCJ0cnVlXCIgcGxhY2VIb2xkZXI9XCJcIj48L2NtYWNzLXdlZWstcGlja2VyPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJtb2RlID09PSAnbW9udGgnICYmICFyYW5nZWRcIj5cclxuICAgIDxjbWFjcy1tb250aC1waWNrZXJcclxuICAgICAgW2Ryb3Bkb3duQ2xhc3NOYW1lXT1cIidjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLXBhbmVsJ1wiXHJcbiAgICAgIFt0aW1lbGluZV09XCJ0cnVlXCJcclxuICAgICAgWyhuZ01vZGVsKV09XCJkYXRlXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZ2V0TW9udGgoJGV2ZW50KVwiXHJcbiAgICAgIHBsYWNlSG9sZGVyPVwiXCJcclxuICAgID48L2NtYWNzLW1vbnRoLXBpY2tlcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiKG1vZGUgPT09ICd3ZWVrJyB8fCBtb2RlID09PSAnbW9udGgnKSAmJiByYW5nZWRcIj5cclxuICAgIDxjbWFjcy1yYW5nZS1waWNrZXJcclxuICAgICAgWyhuZ01vZGVsKV09XCJyYW5nZVwiXHJcbiAgICAgIFttb2RlXT1cIid3ZWVrJ1wiXHJcbiAgICAgIHBsYWNlSG9sZGVyPVwiXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgPC9jbWFjcy1yYW5nZS1waWNrZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG4iXX0=