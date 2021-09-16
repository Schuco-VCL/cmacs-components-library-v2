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
import * as i3 from "../cmacs-tabs/ptb-tabs-nav.component";
import * as i4 from "../cmacs-dropdown/dropdown-a.directive";
import * as i5 from "../cmacs-dropdown/dropdown.directive";
import * as i6 from "../cmacs-dropdown/dropdown-menu.component";
import * as i7 from "../cmacs-menu/menu.directive";
import * as i8 from "../cmacs-menu/menu-item.directive";
import * as i9 from "ng-zorro-antd/core/transition-patch";
import * as i10 from "ng-zorro-antd/icon";
import * as i11 from "../cmacs-tabs/ptb-tab-label.directive";
import * as i12 from "ng-zorro-antd/core/outlet";
import * as i13 from "../cmacs-date-picker/date-picker.component";
import * as i14 from "../cmacs-date-picker/week-picker.component";
import * as i15 from "@angular/forms";
import * as i16 from "../cmacs-date-picker/month-picker.component";
import * as i17 from "../cmacs-date-picker/range-picker.component";
function CmacsTimelineDatepickerComponent_div_0_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 14);
    i0.ɵɵlistener("click", function CmacsTimelineDatepickerComponent_div_0_li_8_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r12); const i_r10 = ctx.index; const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.customSelect(i_r10); });
    i0.ɵɵelement(1, "i", 15);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", option_r9.selected ? 1 : 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r9.title);
} }
function CmacsTimelineDatepickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "a", 8);
    i0.ɵɵelementStart(2, "div", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelement(4, "i", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "cmacs-dropdown-menu", null, 11);
    i0.ɵɵelementStart(7, "ul", 12);
    i0.ɵɵtemplate(8, CmacsTimelineDatepickerComponent_div_0_li_8_Template, 4, 3, "li", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "a", 16);
    i0.ɵɵelementStart(2, "div", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵlistener("click", function CmacsTimelineDatepickerComponent_div_5_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r18); const i_r14 = ctx.index; const tab_r13 = ctx.$implicit; const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.clickLabel(i_r14, tab_r13.disabled); });
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
    i0.ɵɵlistener("ngModelChange", function CmacsTimelineDatepickerComponent_ng_container_7_Template_cmacs_week_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.date = $event; })("ngModelChange", function CmacsTimelineDatepickerComponent_ng_container_7_Template_cmacs_week_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.getWeek($event); });
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
    i0.ɵɵlistener("ngModelChange", function CmacsTimelineDatepickerComponent_ng_container_8_Template_cmacs_month_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.date = $event; })("ngModelChange", function CmacsTimelineDatepickerComponent_ng_container_8_Template_cmacs_month_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.getMonth($event); });
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
    i0.ɵɵlistener("ngModelChange", function CmacsTimelineDatepickerComponent_ng_container_9_Template_cmacs_range_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.range = $event; })("ngModelChange", function CmacsTimelineDatepickerComponent_ng_container_9_Template_cmacs_range_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.onChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r6.range)("mode", "week");
} }
const moment = moment_;
export class CmacsTimelineDatepickerComponent {
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
                    d.setDate(weeks === 52 ? d.getDate() + ((index + 1) * 7) : d.getDate() + (index * 7));
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
                    d.setDate(weeks === 52 ? d.getDate() + ((index + 1) * 7) : d.getDate() + (index * 7));
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
        this.destroy$.next();
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
}
CmacsTimelineDatepickerComponent.ɵfac = function CmacsTimelineDatepickerComponent_Factory(t) { return new (t || CmacsTimelineDatepickerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CmacsTimelineDatepickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTimelineDatepickerComponent, selectors: [["cmacs-timeline-datepicker"]], hostVars: 4, hostBindings: function CmacsTimelineDatepickerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-tabs", true)("ant-tabs-line", true);
    } }, inputs: { gutter: "gutter", mode: "mode", restrictMode: "restrictMode", ranged: "ranged", weekLocale: "weekLocale", locale: "locale", selectedIndex: "selectedIndex", selectedRangeIdxs: "selectedRangeIdxs", date: "date", range: "range" }, outputs: { onNextClick: "onNextClick", onPrevClick: "onPrevClick", selectChange: "selectChange", selectedIndexChange: "selectedIndexChange", dateChange: "dateChange", rangeChange: "rangeChange", modeChange: "modeChange" }, exportAs: ["cmacsTimelineDatepicker"], features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 13, consts: [["class", "cmacs-timeline-item cmacs-timeline-item-dropdown", 4, "ngIf"], [1, "cmacs-timeline-item", 2, "margin-right", "10px", "max-width", "calc(100% - 160px - 16px)"], ["role", "tablist", "tabindex", "0", 1, "ant-tabs-bar", "ant-tabs-top-bar", "cmacs-timeline-datepicker-slider", 3, "nzType", "nzShowPagination", "nzPositionMode", "nzAnimated", "nzHideBar", "selectedIndex", "nzOnNextClick", "nzOnPrevClick"], ["ptb-tab-label", "", "role", "tab", "class", "cmacs-timeline-datepicker-label", 3, "margin-right", "ant-tabs-tab-active", 4, "ngIf"], ["ptb-tab-label", "", "role", "tab", "class", "cmacs-timeline-datepicker-label", 3, "margin-right", "ant-tabs-tab-active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "cmacs-timeline-item"], [4, "ngIf"], [1, "cmacs-timeline-item", "cmacs-timeline-item-dropdown"], ["cmacs-dropdown", "", 1, "cmacs-dropdowm-timeline-datepicker", 2, "display", "inline-flex", 3, "cmacsTrigger", "cmacsOpen", "dropdownMenu"], [1, "cmacs-open-dropdown-wrapper", 2, "width", "80px"], [1, "iconArrowLarge-Solid-Down"], ["menu", "cmacsDropdownMenu"], ["cmacs-menu", "", 2, "min-width", "125px"], ["cmacs-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["cmacs-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "check"], [1, "cmacs-dropdowm-timeline-datepicker"], ["ptb-tab-label", "", "role", "tab", 1, "cmacs-timeline-datepicker-label"], ["ptb-tab-label", "", "role", "tab", 1, "cmacs-timeline-datepicker-label", 3, "disabled", "click"], [4, "nzStringTemplateOutlet"], ["placeHolder", "", 3, "ngModel", "dropdownClassName", "timeline", "ngModelChange"], ["placeHolder", "", 3, "dropdownClassName", "timeline", "ngModel", "ngModelChange"], ["placeHolder", "", 3, "ngModel", "mode", "ngModelChange"]], template: function CmacsTimelineDatepickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsTimelineDatepickerComponent_div_0_Template, 9, 5, "div", 0);
        i0.ɵɵtemplate(1, CmacsTimelineDatepickerComponent_div_1_Template, 4, 1, "div", 0);
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "ptb-tabs-nav", 2);
        i0.ɵɵlistener("nzOnNextClick", function CmacsTimelineDatepickerComponent_Template_ptb_tabs_nav_nzOnNextClick_3_listener() { return ctx.onNextClick.emit(); })("nzOnPrevClick", function CmacsTimelineDatepickerComponent_Template_ptb_tabs_nav_nzOnPrevClick_3_listener() { return ctx.onPrevClick.emit(); });
        i0.ɵɵtemplate(4, CmacsTimelineDatepickerComponent_div_4_Template, 2, 5, "div", 3);
        i0.ɵɵtemplate(5, CmacsTimelineDatepickerComponent_div_5_Template, 2, 6, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
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
    } }, directives: [i2.NgIf, i3.PtbTabsNavComponent, i2.NgForOf, i4.CmacsDropDownADirective, i5.CmacsDropDownDirective, i6.CmacsDropdownMenuComponent, i7.CmacsMenuDirective, i8.CmacsMenuItemDirective, i9.ɵNzTransitionPatchDirective, i10.NzIconDirective, i11.PtbTabLabelDirective, i12.NzStringTemplateOutletDirective, i13.CmacsDatePickerComponent, i14.CmacsWeekPickerComponent, i15.NgControlStatus, i15.NgModel, i16.CmacsMonthPickerComponent, i17.CmacsRangePickerComponent], styles: [".cmacs-timeline-item .ant-tabs-bar{margin:0 0 16px;border-bottom:1px solid #dee0e5;outline:none;transition:padding .3s cubic-bezier(.645,.045,.355,1)}::ng-deep .cmacs-timeline-item .ant-tabs{display:block!important}.cmacs-timeline-item .ant-tabs-ink-bar{position:absolute;bottom:1px;left:0;z-index:1;box-sizing:border-box;height:2px;background-color:#2a7cff;transform-origin:0 0}[hidden]{display:none!important}.cmacs-timeline-item .ant-tabs-nav{position:relative;display:inline-block;box-sizing:border-box;margin:0;padding-left:0;list-style:none;transition:transform .3s cubic-bezier(.645,.045,.355,1)}.cmacs-timeline-item .ant-tabs-nav .ant-tabs-tab{position:relative;display:inline-block;box-sizing:border-box;height:100%;margin:0 32px 0 0;padding:12px 16px;text-decoration:none;cursor:pointer;transition:color .3s cubic-bezier(.645,.045,.355,1)}.cmacs-timeline-item .ant-tabs-nav-container-scrolling{padding-right:32px;padding-left:32px}.cmacs-timeline-item .ant-tabs-nav-container{position:relative;box-sizing:border-box;margin-bottom:-1px;overflow:hidden;font-size:14px;line-height:1.5;white-space:nowrap;transition:padding .3s cubic-bezier(.645,.045,.355,1);zoom:1}.cmacs-timeline-item .ant-tabs-tab-next.ant-tabs-tab-arrow-show,.cmacs-timeline-item .ant-tabs-tab-prev.ant-tabs-tab-arrow-show{width:32px;height:100%;opacity:1;pointer-events:auto}.cmacs-timeline-item .ant-tabs-tab-prev{left:0}.cmacs-timeline-item .ant-tabs-nav-scroll{overflow:hidden;white-space:nowrap}.cmacs-timeline-item .ant-tabs-tab-next{right:2px}.cmacs-timeline-item .ant-tabs-nav-wrap{margin-bottom:-1px;overflow:hidden}.cmacs-timeline-item .ant-tabs-tab-next,.cmacs-timeline-item .ant-tabs-tab-prev{position:absolute;z-index:2;width:0;height:100%;color:#656c79;text-align:center;background-color:transparent;border:0;cursor:pointer;opacity:0;transition:width .3s cubic-bezier(.645,.045,.355,1),opacity .3s cubic-bezier(.645,.045,.355,1),color .3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.cmacs-timeline-datepicker-label.ant-tabs-tab{padding:5px 9px!important;border-radius:3px;font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-timeline-datepicker-label.ant-tabs-tab-active{color:#fff!important;padding:6px 7px!important;border-radius:3px 3px 4px 4px;box-shadow:0 6px 10px 0 rgb(59 63 70/15%);background-color:#2a7cff}.cmacs-timeline-item .anticon.ant-tabs-tab-next-icon-target.anticon-right,.cmacs-timeline-item .anticon.ant-tabs-tab-prev-icon-target.anticon-left{color:#656c79;font-size:11px;top:3px;position:relative}.cmacs-timeline-datepicker-slider.ant-tabs-bar{border-bottom:none;margin-bottom:0}.cmacs-timeline-item{display:inline-block}.cmacs-timeline-item-dropdown{position:relative;margin:0 20px}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker{font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#3b3f46}.cmacs-timeline-datepicker-label.ant-tabs-tab-active:hover{color:#fff}.cmacs-timeline-item .ant-picker-input input{width:16px;display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;border:none;height:16px;position:absolute;opacity:0;left:3px}.cmacs-timeline-item .ant-picker,.cmacs-timeline-item .ant-picker:focus,.cmacs-timeline-item .ant-picker:hover{border:none;box-shadow:none;position:relative;top:-3px;color:#656c79;padding:0;cursor:pointer}.cmacs-timeline-item .ant-picker-suffix{color:#656c79;font-size:16px}.cmacs-timeline-item .ant-picker-input:hover .ant-picker-clear,.cmacs-timeline-item .ant-picker-range:hover .ant-picker-clear{opacity:0;display:none}.cmacs-timeline-item .ant-picker-icon{font-size:16px;position:relative;top:-7px}.cmacs-timeline-item .ant-picker-icon:hover{cursor:pointer}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper{border:none;width:auto!important;color:#3b3f46;font-size:14px;font-weight:500;line-height:1.8}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper i{margin-left:10px;color:#3b3f46;top:6px;position:relative}.cmacs-timeline-item .ant-picker:focus .ant-picker-input input:not(.ant-input-disabled){box-shadow:none}.cmacs-timeline-item .ant-picker-range .ant-picker-input input,.cmacs-timeline-item .ant-picker-range .ant-picker-range-separator{display:none}", "\n      cmacs-timeline-datepicker {\n        display: block;\n        border-radius: 3px;\n        box-shadow: 0 3px 7px 0 rgba(59, 63, 70, 0.15);\n        background-color: #ffffff;\n        padding: 7px 0 4px 0 !important;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsTimelineDatepickerComponent.prototype, "restrictMode", void 0);
__decorate([
    InputBoolean()
], CmacsTimelineDatepickerComponent.prototype, "ranged", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTimelineDatepickerComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-timeline-datepicker',
                exportAs: 'cmacsTimelineDatepicker',
                templateUrl: './cmacs-timeline-datepicker.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styleUrls: ['./cmacs-timeline-datepicker.component.css'],
                styles: [
                    `
      cmacs-timeline-datepicker {
        display: block;
        border-radius: 3px;
        box-shadow: 0 3px 7px 0 rgba(59, 63, 70, 0.15);
        background-color: #ffffff;
        padding: 7px 0 4px 0 !important;
      }
    `
                ],
                host: {
                    '[class.ant-tabs]': 'true',
                    '[class.ant-tabs-line]': 'true'
                }
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUVsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWdDLFFBQVEsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNqRSxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDWnRELDhCQUE2RjtJQUExQix5T0FBeUI7SUFDMUYsd0JBQXdFO0lBQ3hFLDRCQUFNO0lBQUEsWUFBZ0I7SUFBQSxpQkFBTztJQUMvQixpQkFBSzs7O0lBRkEsZUFBeUM7SUFBekMscURBQXlDO0lBQ3RDLGVBQWdC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QixFQUFFLE1BQU07aUJBQ2hDO2FBQ0Y7aUpBV1UsTUFBTTtrQkFBZCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ21CLFlBQVk7a0JBQXBDLEtBQUs7WUFDbUIsTUFBTTtrQkFBOUIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDYSxXQUFXO2tCQUE3QixNQUFNO1lBQ1ksV0FBVztrQkFBN0IsTUFBTTtZQUVZLFlBQVk7a0JBQTlCLE1BQU07WUFDWSxtQkFBbUI7a0JBQXJDLE1BQU07WUFDWSxVQUFVO2tCQUE1QixNQUFNO1lBQ1ksV0FBVztrQkFBN0IsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU07WUFXSCxhQUFhO2tCQURoQixLQUFLO1lBVUYsaUJBQWlCO2tCQURwQixLQUFLO1lBVUYsSUFBSTtrQkFEUCxLQUFLO1lBZUYsS0FBSztrQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCwgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIE9uRGVzdHJveVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtnZXRJU09XZWVrLCBnZXRJU09XZWVrc0luWWVhciwgZ2V0TW9udGh9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9lbi1pZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOelRhYkNoYW5nZUV2ZW50IH0gZnJvbSAnLi4vY21hY3MtdGFicy9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgQ21hY3NUYWJDb21wb25lbnQgfSBmcm9tICcuLi9jbWFjcy10YWJzL3RhYi5jb21wb25lbnQnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuZXhwb3J0IHR5cGUgQ21hY3NUaW1lbGluZURhdGVQaWNrZXJNb2RlID0gJ3dlZWsnIHwgJ3F1YXJ0ZXInIHwgJ21vbnRoJyB8ICd3ZWVrLXJhbmdlJyB8ICdtb250aC1yYW5nZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUaW1lbGluZURhdGVwaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggN3B4IDAgcmdiYSg1OSwgNjMsIDcwLCAwLjE1KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAwIDRweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRhYnNdJzogJ3RydWUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1saW5lXSc6ICd0cnVlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGltZWxpbmVEYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBpbmRleFRvU2VsZWN0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRSYW5nZUlkeHM6IG51bWJlcltdID0gW107XHJcbiAgcHJpdmF0ZSBfZGF0ZTogRGF0ZSB8IG51bGwgPSBuZXcgRGF0ZSgpO1xyXG4gIHByaXZhdGUgX3JhbmdlOiBEYXRlW10gPSBbXTtcclxuICBsaXN0T2ZOelRhYkNvbXBvbmVudDogYW55W107XHJcblxyXG4gIEBJbnB1dCgpIGd1dHRlcjogbnVtYmVyID0gMjtcclxuICBASW5wdXQoKSBtb2RlOiBDbWFjc1RpbWVsaW5lRGF0ZVBpY2tlck1vZGUgPSAnd2Vlayc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlc3RyaWN0TW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByYW5nZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB3ZWVrTG9jYWxlID0ge3dlZWsgOiB7ZG93IDogNywgZG95OiAxMX19O1xyXG4gIEBJbnB1dCgpIGxvY2FsZSA9ICdlbic7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uTmV4dENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblByZXZDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOelRhYkNoYW5nZUV2ZW50Pih0cnVlKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSByYW5nZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVbXT4oKTtcclxuICBAT3V0cHV0KCkgbW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgc2hvd1ByZXZpb3VzWWVhcldlZWsgPSBmYWxzZTtcclxuICBwcmV2aW91c1llYXJXZWVrID0gbnVsbDtcclxuXHJcbiAgbW9kZU9wdGlvbnMgPSBbXHJcbiAgICB7dGl0bGU6ICdXZWVrJywgdmFsdWU6ICd3ZWVrJywgc2VsZWN0ZWQ6IHRydWV9LFxyXG4gICAge3RpdGxlOiAnTW9udGgnLCB2YWx1ZTogJ21vbnRoJywgc2VsZWN0ZWQ6IGZhbHNlfVxyXG4gICAgXTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZEluZGV4KCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlbGVjdGVkUmFuZ2VJZHhzKHZhbHVlOiBudW1iZXJbXSkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRSYW5nZUlkeHMgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZFJhbmdlSWR4cygpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRSYW5nZUlkeHM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkYXRlKHZhbHVlOiBEYXRlIHwgbnVsbCkge1xyXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX2RhdGUgPSB2YWx1ZTtcclxuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnKSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCA9IHRoaXMuZ2V0V2Vla3NJblllYXIodGhpcy5kYXRlKTtcclxuICAgICAgICB0aGlzLnNob3dQcmV2aW91c1llYXJXZWVrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5nZXRXZWVrTnVtYmVyKHZhbHVlKSAtIDE7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdmFsdWUuZ2V0TW9udGgoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgcmFuZ2UocmFuZ2U6IERhdGVbXSkge1xyXG4gICAgaWYgKHJhbmdlICE9PSBudWxsICYmIHJhbmdlLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNob3dQcmV2aW91c1llYXJXZWVrID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX3JhbmdlID0gcmFuZ2U7XHJcbiAgICAgIGxldCBzdERhdGVZZWFyID0gbW9tZW50KHRoaXMucmFuZ2VbMF0pLnllYXIoKTtcclxuICAgICAgY29uc3QgbmREYXRlWWVhciA9IG1vbWVudCh0aGlzLnJhbmdlWzFdKS55ZWFyKCk7XHJcbiAgICAgIGlmIChtb21lbnQodGhpcy5yYW5nZVswXSkueWVhcigpID09PSBtb21lbnQodGhpcy5yYW5nZVsxXSkueWVhcigpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUmFuZ2VJZHhzID0gW3RoaXMuZ2V0V2Vla051bWJlcih0aGlzLl9yYW5nZVswXSkgLSAxLCB0aGlzLmdldFdlZWtOdW1iZXIodGhpcy5fcmFuZ2VbMV0pIC0gMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHMgPSBbZ2V0TW9udGgodGhpcy5fcmFuZ2VbMF0pLCBnZXRNb250aCh0aGlzLl9yYW5nZVsxXSldO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycpIHtcclxuICAgICAgICAgIGxldCBzdW1XZWVrcyA9IDA7XHJcbiAgICAgICAgICB3aGlsZShuZERhdGVZZWFyIC0gc3REYXRlWWVhcikge1xyXG4gICAgICAgICAgICBzdW1XZWVrcyArPSB0aGlzLmdldFdlZWtzSW5ZZWFyQ3VzdG9tKG5ldyBEYXRlKHN0RGF0ZVllYXIpKTtcclxuICAgICAgICAgICAgc3REYXRlWWVhcisrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJhbmdlSWR4cyA9IFt0aGlzLmdldFdlZWtOdW1iZXIodGhpcy5fcmFuZ2VbMF0pIC0gMSwgc3VtV2Vla3MgKyB0aGlzLmdldFdlZWtOdW1iZXIodGhpcy5fcmFuZ2VbMV0pIC0gMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHMgPSBbZ2V0TW9udGgodGhpcy5fcmFuZ2VbMF0pLCAxMioobmREYXRlWWVhciAtIHN0RGF0ZVllYXIpICsgZ2V0TW9udGgodGhpcy5fcmFuZ2VbMV0pXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fc2VsZWN0ZWRSYW5nZUlkeHNbMF07XHJcblxyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ID0gdGhpcy5nZXRWYWx1ZXNTbGlkZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCByYW5nZSgpOiBEYXRlW10gfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9yYW5nZTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKHJhbmdlOiBEYXRlW10pOiB2b2lkIHtcclxuICAgIGlmIChyYW5nZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJhbmdlID0gcmFuZ2U7XHJcbiAgICAgIHRoaXMucmFuZ2VDaGFuZ2UuZW1pdChyYW5nZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0ZSgpOiBEYXRlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0ZTtcclxuICB9XHJcblxyXG4gIGdldFdlZWsocmVzdWx0OiBEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrTnVtYmVyKGRhdGUpIHtcclxuICAgIGNvbnN0IG1vbnRoID0gbW9tZW50KGRhdGUpLm1vbnRoKCk7XHJcbiAgICBtb21lbnQudXBkYXRlTG9jYWxlKHRoaXMubG9jYWxlLCB0aGlzLndlZWtMb2NhbGUpO1xyXG4gICAgY29uc3Qgd2VlayA9IG1vbWVudChkYXRlKS53ZWVrKCk7XHJcbiAgICBjb25zdCB3ZWVrc0luWWVhciA9IHRoaXMuZ2V0V2Vla3NJblllYXJDdXN0b20oZGF0ZSk7XHJcbiAgICBpZiAobW9udGggPT09IDExICYmIHdlZWsgPT09IDEpIHtcclxuICAgICAgcmV0dXJuIHdlZWtzSW5ZZWFyO1xyXG4gICAgfVxyXG4gICAgaWYgKG1vbnRoID09PSAwICYmICh3ZWVrID09PSA1MyB8fCB3ZWVrID09PSA1MikpIHtcclxuICAgICAgdGhpcy5zaG93UHJldmlvdXNZZWFyV2VlayA9IHRydWU7XHJcbiAgICAgIHRoaXMucHJldmlvdXNZZWFyV2VlayA9IHdlZWs7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIHJldHVybiB3ZWVrO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2Vla3NJblllYXJDdXN0b20oZGF0ZSkge1xyXG4gICAgbW9tZW50LnVwZGF0ZUxvY2FsZSh0aGlzLmxvY2FsZSwgdGhpcy53ZWVrTG9jYWxlKTtcclxuICAgIHJldHVybiBtb21lbnQoZGF0ZSkuaXNvV2Vla3NJblllYXIoKVxyXG4gIH1cclxuXHJcbiAgY2xpY2tMYWJlbChpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCFkaXNhYmxlZCAmJiB0aGlzLl9kYXRlICE9PSBudWxsKSB7XHJcbiAgICAgIGlmICghdGhpcy5yYW5nZWQpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycpIHtcclxuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xyXG4gICAgICAgICAgY29uc3Qgd2Vla3MgPSB0aGlzLmdldFdlZWtzSW5ZZWFyQ3VzdG9tKGQpO1xyXG4gICAgICAgICAgZC5zZXREYXRlKHdlZWtzID09PSA1MiA/IGQuZ2V0RGF0ZSgpICsgKChpbmRleCArIDEpICogNykgOiBkLmdldERhdGUoKSArIChpbmRleCAqIDcpKTtcclxuICAgICAgICAgIHRoaXMuZGF0ZSA9IGQ7XHJcbiAgICAgICAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdCh0aGlzLmRhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSwgaW5kZXgsIDEpO1xyXG4gICAgICAgICAgdGhpcy5kYXRlID0gZDtcclxuICAgICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHMgPSBbaW5kZXgsIGluZGV4XTtcclxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycpIHtcclxuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xyXG4gICAgICAgICAgY29uc3Qgd2Vla3MgPSB0aGlzLmdldFdlZWtzSW5ZZWFyQ3VzdG9tKGQpO1xyXG4gICAgICAgICAgZC5zZXREYXRlKHdlZWtzID09PSA1MiA/IGQuZ2V0RGF0ZSgpICsgKChpbmRleCArIDEpICogNykgOiBkLmdldERhdGUoKSArIChpbmRleCAqIDcpKTtcclxuICAgICAgICAgIHRoaXMucmFuZ2UgPSBbZCwgZF07XHJcbiAgICAgICAgICB0aGlzLnJhbmdlQ2hhbmdlLmVtaXQodGhpcy5yYW5nZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdtb250aCcpIHtcclxuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpLCBpbmRleCwgMSk7XHJcbiAgICAgICAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksIGluZGV4ICsgMSwgMCk7XHJcbiAgICAgICAgICB0aGlzLnJhbmdlID0gW3N0YXJ0LCBlbmRdO1xyXG4gICAgICAgICAgdGhpcy5yYW5nZUNoYW5nZS5lbWl0KHRoaXMucmFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXg6IG51bWJlcik6IE56VGFiQ2hhbmdlRXZlbnQge1xyXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgTnpUYWJDaGFuZ2VFdmVudCgpO1xyXG4gICAgZXZlbnQuaW5kZXggPSBpbmRleDtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoKSB7XHJcbiAgICAgIGV2ZW50LnRhYiA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnRbaW5kZXhdO1xyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICBpZiAoaSAhPT0gaW5kZXgpIHtcclxuICAgICAgICAgIGl0ZW0uZGVzZWxlY3QuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGV2ZW50LnRhYi5zZWxlY3QuZW1pdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqIENsYW1wcyB0aGUgZ2l2ZW4gaW5kZXggdG8gdGhlIGJvdW5kcyBvZiAwIGFuZCB0aGUgdGFicyBsZW5ndGguICovXHJcbiAgcHJpdmF0ZSBjbGFtcFRhYkluZGV4KGluZGV4OiBudW1iZXIgfCBudWxsKTogbnVtYmVyIHtcclxuICAgIC8vIE5vdGUgdGhlIGB8fCAwYCwgd2hpY2ggZW5zdXJlcyB0aGF0IHZhbHVlcyBsaWtlIE5hTiBjYW4ndCBnZXQgdGhyb3VnaFxyXG4gICAgLy8gYW5kIHdoaWNoIHdvdWxkIG90aGVyd2lzZSB0aHJvdyB0aGUgY29tcG9uZW50IGludG8gYW4gaW5maW5pdGUgbG9vcFxyXG4gICAgLy8gKHNpbmNlIE1hdGgubWF4KE5hTiwgMCkgPT09IE5hTikuXHJcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGggLSAxLCBNYXRoLm1heChpbmRleCB8fCAwLCAwKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLndlZWtMb2NhbGUgPSB7XHJcbiAgICAgIHdlZWs6IHtcclxuICAgICAgICBkb3c6IG1vbWVudC5sb2NhbGVEYXRhKHRoaXMubG9jYWxlKS5maXJzdERheU9mV2VlaygpLFxyXG4gICAgICAgIGRveTogbW9tZW50LmxvY2FsZURhdGEodGhpcy5sb2NhbGUpLmZpcnN0RGF5T2ZZZWFyKClcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSkge1xyXG4gICAgICAgIGNhc2UgJ2RlJzpcclxuICAgICAgICAgIHRoaXMubW9kZU9wdGlvbnNbMF0udGl0bGUgPSAnV29jaGUnO1xyXG4gICAgICAgICAgdGhpcy5tb2RlT3B0aW9uc1sxXS50aXRsZSA9ICdNb25hdCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdlbic6XHJcbiAgICAgICAgICB0aGlzLm1vZGVPcHRpb25zWzBdLnRpdGxlID0gJ1dlZWsnO1xyXG4gICAgICAgICAgdGhpcy5tb2RlT3B0aW9uc1sxXS50aXRsZSA9ICdNb250aCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5tb2RlT3B0aW9uc1swXS50aXRsZSA9ICdXZWVrJztcclxuICAgICAgICAgIHRoaXMubW9kZU9wdGlvbnNbMV0udGl0bGUgPSAnTW9udGgnO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTW9kZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyl7XHJcbiAgICBpZiAoY2hhbmdlcy5tb2RlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRNb2RlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZE1vZGUoKXtcclxuICAgIHRoaXMubW9kZU9wdGlvbnMuZm9yRWFjaChtb2RlID0+IHtcclxuICAgICAgbW9kZS5zZWxlY3RlZCA9IG1vZGUudmFsdWUgPT09IHRoaXMubW9kZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCA9IHRoaXMuZ2V0VmFsdWVzU2xpZGVyKCk7XHJcbiAgICBpZiAodGhpcy5yYW5nZWQpIHtcclxuICAgICAgdGhpcy5yYW5nZSA9IHRoaXMucmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZXNTbGlkZXIoKSB7XHJcbiAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycgJiYgIXRoaXMucmFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuZGF0ZSA9IHRoaXMuZGF0ZTtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0V2Vla3NJblllYXIodGhpcy5kYXRlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICAgIHRoaXMuZGF0ZSA9IHRoaXMuZGF0ZTtcclxuICAgICAgaWYgKHRoaXMucmFuZ2UubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IHN0RGF0ZVllYXIgPSBtb21lbnQodGhpcy5yYW5nZVswXSkueWVhcigpO1xyXG4gICAgICAgIGNvbnN0IG5kRGF0ZVllYXIgPSBtb21lbnQodGhpcy5yYW5nZVsxXSkueWVhcigpO1xyXG4gICAgICAgIGlmIChzdERhdGVZZWFyICE9PSBuZERhdGVZZWFyKSB7XHJcbiAgICAgICAgICBsZXQgcmFuZ2VkTW9udGggPSB0aGlzLmdldERlZmF1bHRNb250aHMoKTtcclxuICAgICAgICAgIHdoaWxlKG5kRGF0ZVllYXIgLSBzdERhdGVZZWFyKSB7XHJcbiAgICAgICAgICAgIHN0RGF0ZVllYXIrKztcclxuICAgICAgICAgICAgcmFuZ2VkTW9udGggPSByYW5nZWRNb250aC5jb25jYXQodGhpcy5nZXREZWZhdWx0TW9udGhzKCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJhbmdlZE1vbnRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0TW9udGhzKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVmYXVsdE1vbnRocygpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJyAmJiB0aGlzLnJhbmdlZCkge1xyXG4gICAgICBpZiAodGhpcy5yYW5nZS5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgc3REYXRlWWVhciA9IG1vbWVudCh0aGlzLnJhbmdlWzBdKS55ZWFyKCk7XHJcbiAgICAgICAgY29uc3QgbmREYXRlWWVhciA9IG1vbWVudCh0aGlzLnJhbmdlWzFdKS55ZWFyKCk7XHJcbiAgICAgICAgaWYgKHN0RGF0ZVllYXIgIT09IG5kRGF0ZVllYXIpIHtcclxuICAgICAgICAgIGxldCByYW5nZWRXZWVrcyA9IHRoaXMuZ2V0V2Vla3NJblllYXIobmV3IERhdGUoc3REYXRlWWVhcikpO1xyXG4gICAgICAgICAgd2hpbGUobmREYXRlWWVhciAtIHN0RGF0ZVllYXIpIHtcclxuICAgICAgICAgICAgcmFuZ2VkV2Vla3MgPSByYW5nZWRXZWVrcy5jb25jYXQodGhpcy5nZXRXZWVrc0luWWVhcihuZXcgRGF0ZShzdERhdGVZZWFyKSkpO1xyXG4gICAgICAgICAgICBzdERhdGVZZWFyKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmFuZ2VkV2Vla3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFdlZWtzSW5ZZWFyKHRoaXMucmFuZ2VbMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmdldFdlZWtzSW5ZZWFyKG5ldyBEYXRlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdE1vbnRocygpIHtcdFx0XHJcbiAgICByZXR1cm4gdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/IFt7IHRpdGxlOiAnSmFuLicgfSwgeyB0aXRsZTogJ0ZlYi4nIH0sIHsgdGl0bGU6ICdNw6RyeicgfSwgeyB0aXRsZTogJ0Fwci4nIH0sIHsgdGl0bGU6ICdNYWknIH0sIHsgdGl0bGU6ICdKdW5pJ30sXHJcbiAgICAgIHsgdGl0bGU6ICdKdWxpJyB9LCB7IHRpdGxlOiAnQXVnLicgfSwgeyB0aXRsZTogJ1NlcHQuJyB9LCB7IHRpdGxlOiAnT2t0LicgfSwgeyB0aXRsZTogJ05vdi4nIH0sIHsgdGl0bGU6ICdEZXouJyB9XSA6XHJcbiAgICBbeyB0aXRsZTogJ0phbicgfSwgeyB0aXRsZTogJ0ZlYicgfSwgeyB0aXRsZTogJ01hcicgfSwgeyB0aXRsZTogJ0FwcicgfSwgeyB0aXRsZTogJ01heScgfSwgeyB0aXRsZTogJ0p1bicgfSxcclxuICAgICAgeyB0aXRsZTogJ0p1bCcgfSwgeyB0aXRsZTogJ0F1ZycgfSwgeyB0aXRsZTogJ1NlcCcgfSwgeyB0aXRsZTogJ09jdCcgfSwgeyB0aXRsZTogJ05vdicgfSwgeyB0aXRsZTogJ0RlYycgfV07XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrc0luWWVhcihkYXRlOiBEYXRlKSB7XHJcbiAgICBsZXQgdGVtcCA9IFtdO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRXZWVrc0luWWVhckN1c3RvbShkYXRlKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICB0ZW1wLnB1c2goe3RpdGxlOiB0aGlzLmZvcm1hdFdlZWtOdW1iZXIoaSArIDEpfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGVtcDtcclxuICB9XHJcblxyXG4gIGZvcm1hdFdlZWtOdW1iZXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChcIjBcIiArIHZhbHVlKS5zbGljZSgtMik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICAvL3RoaXMudXBkYXRlU2xpZGVyKCk7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCkge1xyXG4gICAgICAvLyBEb24ndCBjbGFtcCB0aGUgYGluZGV4VG9TZWxlY3RgIGltbWVkaWF0ZWx5IGluIHRoZSBzZXR0ZXIgYmVjYXVzZSBpdCBjYW4gaGFwcGVuIHRoYXRcclxuICAgICAgLy8gdGhlIGFtb3VudCBvZiB0YWJzIGNoYW5nZXMgYmVmb3JlIHRoZSBhY3R1YWwgY2hhbmdlIGRldGVjdGlvbiBydW5zLlxyXG4gICAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gKHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpKTtcclxuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBjaGFuZ2UgaW4gc2VsZWN0ZWQgaW5kZXgsIGVtaXQgYSBjaGFuZ2UgZXZlbnQuIFNob3VsZCBub3QgdHJpZ2dlciBpZlxyXG4gICAgICAvLyB0aGUgc2VsZWN0ZWQgaW5kZXggaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXplZC5cclxuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QpIHtcclxuICAgICAgICBjb25zdCBpc0ZpcnN0UnVuID0gdGhpcy5fc2VsZWN0ZWRJbmRleCA9PSBudWxsO1xyXG4gICAgICAgIC8qaWYgKCFpc0ZpcnN0UnVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdENoYW5nZS5lbWl0KHRoaXMuY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXhUb1NlbGVjdCkpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2luZyB0aGVzZSB2YWx1ZXMgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvbiBoYXMgcnVuXHJcbiAgICAgICAgLy8gc2luY2UgdGhlIGNoZWNrZWQgY29udGVudCBtYXkgY29udGFpbiByZWZlcmVuY2VzIHRvIHRoZW0uXHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYiwgaW5kZXgpID0+ICh0YWIuaXNBY3RpdmUgPSBpbmRleCA9PT0gaW5kZXhUb1NlbGVjdCkpO1xyXG5cclxuICAgICAgICAgIGlmICghaXNGaXJzdFJ1bikge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleFRvU2VsZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2V0dXAgdGhlIHBvc2l0aW9uIGZvciBlYWNoIHRhYiBhbmQgb3B0aW9uYWxseSBzZXR1cCBhbiBvcmlnaW4gb24gdGhlIG5leHQgc2VsZWN0ZWQgdGFiLlxyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYjogQ21hY3NUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICB0YWIucG9zaXRpb24gPSBpbmRleCAtIGluZGV4VG9TZWxlY3Q7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZWxlY3RlZCB0YWIsIHRoZW4gc2V0IHVwIGFuIG9yaWdpbiBmb3IgdGhlIG5leHQgc2VsZWN0ZWQgdGFiXHJcbiAgICAgICAgLy8gaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBhbHJlYWR5LlxyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9IG51bGwgJiYgdGFiLnBvc2l0aW9uID09PSAwICYmICF0YWIub3JpZ2luKSB7XHJcbiAgICAgICAgICB0YWIub3JpZ2luID0gaW5kZXhUb1NlbGVjdCAtIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4VG9TZWxlY3Q7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN1c3RvbVNlbGVjdChpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm1vZGVPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tb2RlT3B0aW9uc1tpbmRleF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5tb2RlID0gdGhpcy5tb2RlT3B0aW9uc1tpbmRleF0udmFsdWUgYXMgQ21hY3NUaW1lbGluZURhdGVQaWNrZXJNb2RlO1xyXG4gICAgdGhpcy5tb2RlQ2hhbmdlLmVtaXQodGhpcy5tb2RlKTtcclxuICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgPSB0aGlzLmdldFZhbHVlc1NsaWRlcigpO1xyXG4gICAgaWYgKHRoaXMucmFuZ2VkKSB7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWQoKXtcclxuICAgIHJldHVybiB0aGlzLm1vZGVPcHRpb25zLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGgocmVzdWx0OiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdChyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrQWN0aXZlVGFiKGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5yYW5nZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJbmRleCA+PSAwICYmICF0aGlzLnNob3dQcmV2aW91c1llYXJXZWVrICYmIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFJhbmdlSWR4cy5sZW5ndGggPyBpbmRleCA+PSB0aGlzLnNlbGVjdGVkUmFuZ2VJZHhzWzBdICYmIGluZGV4IDw9IHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHNbMV0gOiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCI8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtaXRlbSBjbWFjcy10aW1lbGluZS1pdGVtLWRyb3Bkb3duXCIgKm5nSWY9XCIhcmVzdHJpY3RNb2RlXCI+XHJcblxyXG4gIDxhIGNtYWNzLWRyb3Bkb3duIGNsYXNzPVwiY21hY3MtZHJvcGRvd20tdGltZWxpbmUtZGF0ZXBpY2tlclwiIFtjbWFjc1RyaWdnZXJdPVwiJ2NsaWNrJ1wiXHJcbiAgICAgW2NtYWNzT3Blbl09XCJ0cnVlXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtZmxleFwiIFtkcm9wZG93bk1lbnVdPVwibWVudVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLW9wZW4tZHJvcGRvd24td3JhcHBlclwiIHN0eWxlPVwid2lkdGg6IDgwcHg7XCI+XHJcbiAgICAgIHt7Z2V0U2VsZWN0ZWQoKS5sZW5ndGggPyBnZXRTZWxlY3RlZCgpWzBdLnRpdGxlIDogJ1NlbGVjdCd9fSA8aSBjbGFzcz1cImljb25BcnJvd0xhcmdlLVNvbGlkLURvd25cIj48L2k+XHJcbiAgICA8L2Rpdj5cclxuICA8L2E+XHJcbiAgPGNtYWNzLWRyb3Bkb3duLW1lbnUgI21lbnU9XCJjbWFjc0Ryb3Bkb3duTWVudVwiPlxyXG4gICAgPHVsIGNtYWNzLW1lbnUgc3R5bGU9XCJtaW4td2lkdGg6IDEyNXB4XCI+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG1vZGVPcHRpb25zOyBpbmRleCBhcyBpXCIgY21hY3MtbWVudS1pdGVtIChjbGljayk9XCJjdXN0b21TZWxlY3QoaSlcIj5cclxuICAgICAgICA8aSBbc3R5bGUub3BhY2l0eV09XCJvcHRpb24uc2VsZWN0ZWQgPyAxIDogMFwiIG56LWljb24gbnpUeXBlPVwiY2hlY2tcIj48L2k+XHJcbiAgICAgICAgPHNwYW4+e3tvcHRpb24udGl0bGV9fTwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9jbWFjcy1kcm9wZG93bi1tZW51PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1pdGVtIGNtYWNzLXRpbWVsaW5lLWl0ZW0tZHJvcGRvd25cIiAqbmdJZj1cInJlc3RyaWN0TW9kZVwiPlxyXG4gIDxhIGNsYXNzPVwiY21hY3MtZHJvcGRvd20tdGltZWxpbmUtZGF0ZXBpY2tlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLW9wZW4tZHJvcGRvd24td3JhcHBlclwiIHN0eWxlPVwid2lkdGg6IDgwcHg7XCI+XHJcbiAgICAgIHt7Z2V0U2VsZWN0ZWQoKS5sZW5ndGggPyBnZXRTZWxlY3RlZCgpWzBdLnRpdGxlIDogJ1NlbGVjdCd9fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9hPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1pdGVtXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHg7IG1heC13aWR0aDogY2FsYygxMDAlIC0gMTYwcHggLSAxNnB4KTtcIj5cclxuICA8cHRiLXRhYnMtbmF2IHJvbGU9XCJ0YWJsaXN0XCJcclxuICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgICAgY2xhc3M9XCJhbnQtdGFicy1iYXIgYW50LXRhYnMtdG9wLWJhciBjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLXNsaWRlclwiXHJcbiAgICAgICAgICAgICAgIFtuelR5cGVdPVwiJ2xpbmUnXCJcclxuICAgICAgICAgICAgICAgW256U2hvd1BhZ2luYXRpb25dPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgIFtuelBvc2l0aW9uTW9kZV09XCInaG9yaXpvbnRhbCdcIlxyXG4gICAgICAgICAgICAgICBbbnpBbmltYXRlZF09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgW256SGlkZUJhcl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgW3NlbGVjdGVkSW5kZXhdPVwic2VsZWN0ZWRJbmRleFwiXHJcbiAgICAgICAgICAgICAgIChuek9uTmV4dENsaWNrKT1cIm9uTmV4dENsaWNrLmVtaXQoKVwiXHJcbiAgICAgICAgICAgICAgIChuek9uUHJldkNsaWNrKT1cIm9uUHJldkNsaWNrLmVtaXQoKVwiPlxyXG4gICAgPGRpdiBwdGItdGFiLWxhYmVsXHJcbiAgICAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICBbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XT1cImd1dHRlclwiXHJcbiAgICAgICAgIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci1sYWJlbFwiXHJcbiAgICAgICAgIFtjbGFzcy5hbnQtdGFicy10YWItYWN0aXZlXT1cInRydWVcIlxyXG4gICAgICAgICAqbmdJZj1cInNob3dQcmV2aW91c1llYXJXZWVrXCI+XHJcbiAgICAgIHt7IHByZXZpb3VzWWVhcldlZWsgfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBwdGItdGFiLWxhYmVsXHJcbiAgICAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICBbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XT1cImd1dHRlclwiXHJcbiAgICAgICAgIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci1sYWJlbFwiXHJcbiAgICAgICAgIFtjbGFzcy5hbnQtdGFicy10YWItYWN0aXZlXT1cImNoZWNrQWN0aXZlVGFiKGkpXCJcclxuICAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXHJcbiAgICAgICAgIChjbGljayk9XCJjbGlja0xhYmVsKGksdGFiLmRpc2FibGVkKVwiXHJcbiAgICAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgbGlzdE9mTnpUYWJDb21wb25lbnQ7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRhYi50aXRsZVwiPnt7IHRhYi50aXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9wdGItdGFicy1uYXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWl0ZW1cIj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibW9kZSA9PT0gJ3dlZWsnICYmICFyYW5nZWRcIj5cclxuICAgIDxjbWFjcy13ZWVrLXBpY2tlciBbKG5nTW9kZWwpXT1cImRhdGVcIiBbZHJvcGRvd25DbGFzc05hbWVdPVwiJ2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXItcGFuZWwnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJnZXRXZWVrKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFt0aW1lbGluZV09XCJ0cnVlXCIgcGxhY2VIb2xkZXI9XCJcIj48L2NtYWNzLXdlZWstcGlja2VyPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJtb2RlID09PSAnbW9udGgnICYmICFyYW5nZWRcIj5cclxuICAgIDxjbWFjcy1tb250aC1waWNrZXJcclxuICAgICAgW2Ryb3Bkb3duQ2xhc3NOYW1lXT1cIidjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLXBhbmVsJ1wiXHJcbiAgICAgIFt0aW1lbGluZV09XCJ0cnVlXCJcclxuICAgICAgWyhuZ01vZGVsKV09XCJkYXRlXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZ2V0TW9udGgoJGV2ZW50KVwiXHJcbiAgICAgIHBsYWNlSG9sZGVyPVwiXCJcclxuICAgID48L2NtYWNzLW1vbnRoLXBpY2tlcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiKG1vZGUgPT09ICd3ZWVrJyB8fCBtb2RlID09PSAnbW9udGgnKSAmJiByYW5nZWRcIj5cclxuICAgIDxjbWFjcy1yYW5nZS1waWNrZXJcclxuICAgICAgWyhuZ01vZGVsKV09XCJyYW5nZVwiXHJcbiAgICAgIFttb2RlXT1cIid3ZWVrJ1wiXHJcbiAgICAgIHBsYWNlSG9sZGVyPVwiXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgPC9jbWFjcy1yYW5nZS1waWNrZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG4iXX0=