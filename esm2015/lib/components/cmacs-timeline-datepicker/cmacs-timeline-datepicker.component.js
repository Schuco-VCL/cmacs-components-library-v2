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
                    d.setDate(weeks === 52 ? d.getDate() + ((index) * 7) : d.getDate() + (index * 7));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUVsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWdDLFFBQVEsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNqRSxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDWnRELDhCQUE2RjtJQUExQix5T0FBeUI7SUFDMUYsd0JBQXdFO0lBQ3hFLDRCQUFNO0lBQUEsWUFBZ0I7SUFBQSxpQkFBTztJQUMvQixpQkFBSzs7O0lBRkEsZUFBeUM7SUFBekMscURBQXlDO0lBQ3RDLGVBQWdC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QUNGO2lKQVdVLE1BQU07a0JBQWQsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNtQixZQUFZO2tCQUFwQyxLQUFLO1lBQ21CLE1BQU07a0JBQTlCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ2EsV0FBVztrQkFBN0IsTUFBTTtZQUNZLFdBQVc7a0JBQTdCLE1BQU07WUFFWSxZQUFZO2tCQUE5QixNQUFNO1lBQ1ksbUJBQW1CO2tCQUFyQyxNQUFNO1lBQ1ksVUFBVTtrQkFBNUIsTUFBTTtZQUNZLFdBQVc7a0JBQTdCLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNO1lBV0gsYUFBYTtrQkFEaEIsS0FBSztZQVVGLGlCQUFpQjtrQkFEcEIsS0FBSztZQVVGLElBQUk7a0JBRFAsS0FBSztZQWVGLEtBQUs7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7Z2V0SVNPV2VlaywgZ2V0SVNPV2Vla3NJblllYXIsIGdldE1vbnRofSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZW4taWUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpUYWJDaGFuZ2VFdmVudCB9IGZyb20gJy4uL2NtYWNzLXRhYnMvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IENtYWNzVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3MtdGFicy90YWIuY29tcG9uZW50JztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuXHJcbmV4cG9ydCB0eXBlIENtYWNzVGltZWxpbmVEYXRlUGlja2VyTW9kZSA9ICd3ZWVrJyB8ICdxdWFydGVyJyB8ICdtb250aCcgfCAnd2Vlay1yYW5nZScgfCAnbW9udGgtcmFuZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzVGltZWxpbmVEYXRlcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCAwIHJnYmEoNTksIDYzLCA3MCwgMC4xNSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMCA0cHggMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC10YWJzXSc6ICd0cnVlJyxcclxuICAgICdbY2xhc3MuYW50LXRhYnMtbGluZV0nOiAndHJ1ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RpbWVsaW5lRGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgaW5kZXhUb1NlbGVjdDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkUmFuZ2VJZHhzOiBudW1iZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2RhdGU6IERhdGUgfCBudWxsID0gbmV3IERhdGUoKTtcclxuICBwcml2YXRlIF9yYW5nZTogRGF0ZVtdID0gW107XHJcbiAgbGlzdE9mTnpUYWJDb21wb25lbnQ6IGFueVtdO1xyXG5cclxuICBASW5wdXQoKSBndXR0ZXI6IG51bWJlciA9IDI7XHJcbiAgQElucHV0KCkgbW9kZTogQ21hY3NUaW1lbGluZURhdGVQaWNrZXJNb2RlID0gJ3dlZWsnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXN0cmljdE1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmFuZ2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgd2Vla0xvY2FsZSA9IHt3ZWVrIDoge2RvdyA6IDcsIGRveTogMTF9fTtcclxuICBASW5wdXQoKSBsb2NhbGUgPSAnZW4nO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbk5leHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOelRhYkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUYWJDaGFuZ2VFdmVudD4odHJ1ZSk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmFuZ2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlW10+KCk7XHJcbiAgQE91dHB1dCgpIG1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHNob3dQcmV2aW91c1llYXJXZWVrID0gZmFsc2U7XHJcbiAgcHJldmlvdXNZZWFyV2VlayA9IG51bGw7XHJcblxyXG4gIG1vZGVPcHRpb25zID0gW1xyXG4gICAge3RpdGxlOiAnV2VlaycsIHZhbHVlOiAnd2VlaycsIHNlbGVjdGVkOiB0cnVlfSxcclxuICAgIHt0aXRsZTogJ01vbnRoJywgdmFsdWU6ICdtb250aCcsIHNlbGVjdGVkOiBmYWxzZX1cclxuICAgIF07XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5pbmRleFRvU2VsZWN0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRJbmRleCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWxlY3RlZFJhbmdlSWR4cyh2YWx1ZTogbnVtYmVyW10pIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkUmFuZ2VJZHhzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRSYW5nZUlkeHMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkUmFuZ2VJZHhzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0ZSh2YWx1ZTogRGF0ZSB8IG51bGwpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLl9kYXRlID0gdmFsdWU7XHJcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJykge1xyXG4gICAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgPSB0aGlzLmdldFdlZWtzSW5ZZWFyKHRoaXMuZGF0ZSk7XHJcbiAgICAgICAgdGhpcy5zaG93UHJldmlvdXNZZWFyV2VlayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZ2V0V2Vla051bWJlcih2YWx1ZSkgLSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHZhbHVlLmdldE1vbnRoKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJhbmdlKHJhbmdlOiBEYXRlW10pIHtcclxuICAgIGlmIChyYW5nZSAhPT0gbnVsbCAmJiByYW5nZS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zaG93UHJldmlvdXNZZWFyV2VlayA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9yYW5nZSA9IHJhbmdlO1xyXG4gICAgICBsZXQgc3REYXRlWWVhciA9IG1vbWVudCh0aGlzLnJhbmdlWzBdKS55ZWFyKCk7XHJcbiAgICAgIGNvbnN0IG5kRGF0ZVllYXIgPSBtb21lbnQodGhpcy5yYW5nZVsxXSkueWVhcigpO1xyXG4gICAgICBpZiAobW9tZW50KHRoaXMucmFuZ2VbMF0pLnllYXIoKSA9PT0gbW9tZW50KHRoaXMucmFuZ2VbMV0pLnllYXIoKSkge1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJykge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJhbmdlSWR4cyA9IFt0aGlzLmdldFdlZWtOdW1iZXIodGhpcy5fcmFuZ2VbMF0pIC0gMSwgdGhpcy5nZXRXZWVrTnVtYmVyKHRoaXMuX3JhbmdlWzFdKSAtIDFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUmFuZ2VJZHhzID0gW2dldE1vbnRoKHRoaXMuX3JhbmdlWzBdKSwgZ2V0TW9udGgodGhpcy5fcmFuZ2VbMV0pXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnKSB7XHJcbiAgICAgICAgICBsZXQgc3VtV2Vla3MgPSAwO1xyXG4gICAgICAgICAgd2hpbGUobmREYXRlWWVhciAtIHN0RGF0ZVllYXIpIHtcclxuICAgICAgICAgICAgc3VtV2Vla3MgKz0gdGhpcy5nZXRXZWVrc0luWWVhckN1c3RvbShuZXcgRGF0ZShzdERhdGVZZWFyKSk7XHJcbiAgICAgICAgICAgIHN0RGF0ZVllYXIrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHMgPSBbdGhpcy5nZXRXZWVrTnVtYmVyKHRoaXMuX3JhbmdlWzBdKSAtIDEsIHN1bVdlZWtzICsgdGhpcy5nZXRXZWVrTnVtYmVyKHRoaXMuX3JhbmdlWzFdKSAtIDFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUmFuZ2VJZHhzID0gW2dldE1vbnRoKHRoaXMuX3JhbmdlWzBdKSwgMTIqKG5kRGF0ZVllYXIgLSBzdERhdGVZZWFyKSArIGdldE1vbnRoKHRoaXMuX3JhbmdlWzFdKV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuX3NlbGVjdGVkUmFuZ2VJZHhzWzBdO1xyXG5cclxuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCA9IHRoaXMuZ2V0VmFsdWVzU2xpZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcmFuZ2UoKTogRGF0ZVtdIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmFuZ2U7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShyYW5nZTogRGF0ZVtdKTogdm9pZCB7XHJcbiAgICBpZiAocmFuZ2UgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlO1xyXG4gICAgICB0aGlzLnJhbmdlQ2hhbmdlLmVtaXQocmFuZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRhdGUoKTogRGF0ZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrKHJlc3VsdDogRGF0ZSk6IHZvaWQge1xyXG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdChyZXN1bHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0V2Vla051bWJlcihkYXRlKSB7XHJcbiAgICBjb25zdCBtb250aCA9IG1vbWVudChkYXRlKS5tb250aCgpO1xyXG4gICAgbW9tZW50LnVwZGF0ZUxvY2FsZSh0aGlzLmxvY2FsZSwgdGhpcy53ZWVrTG9jYWxlKTtcclxuICAgIGNvbnN0IHdlZWsgPSBtb21lbnQoZGF0ZSkud2VlaygpO1xyXG4gICAgY29uc3Qgd2Vla3NJblllYXIgPSB0aGlzLmdldFdlZWtzSW5ZZWFyQ3VzdG9tKGRhdGUpO1xyXG4gICAgaWYgKG1vbnRoID09PSAxMSAmJiB3ZWVrID09PSAxKSB7XHJcbiAgICAgIHJldHVybiB3ZWVrc0luWWVhcjtcclxuICAgIH1cclxuICAgIGlmIChtb250aCA9PT0gMCAmJiAod2VlayA9PT0gNTMgfHwgd2VlayA9PT0gNTIpKSB7XHJcbiAgICAgIHRoaXMuc2hvd1ByZXZpb3VzWWVhcldlZWsgPSB0cnVlO1xyXG4gICAgICB0aGlzLnByZXZpb3VzWWVhcldlZWsgPSB3ZWVrO1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2VlaztcclxuICB9XHJcblxyXG4gIGdldFdlZWtzSW5ZZWFyQ3VzdG9tKGRhdGUpIHtcclxuICAgIG1vbWVudC51cGRhdGVMb2NhbGUodGhpcy5sb2NhbGUsIHRoaXMud2Vla0xvY2FsZSk7XHJcbiAgICByZXR1cm4gbW9tZW50KGRhdGUpLmlzb1dlZWtzSW5ZZWFyKClcclxuICB9XHJcblxyXG4gIGNsaWNrTGFiZWwoaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICghZGlzYWJsZWQgJiYgdGhpcy5fZGF0ZSAhPT0gbnVsbCkge1xyXG4gICAgICBpZiAoIXRoaXMucmFuZ2VkKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnKSB7XHJcbiAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICAgIGNvbnN0IHdlZWtzID0gdGhpcy5nZXRXZWVrc0luWWVhckN1c3RvbShkKTtcclxuICAgICAgICAgIGQuc2V0RGF0ZSh3ZWVrcyA9PT0gNTIgPyBkLmdldERhdGUoKSArICgoaW5kZXgpICogNykgOiBkLmdldERhdGUoKSArIChpbmRleCAqIDcpKTtcclxuICAgICAgICAgIHRoaXMuZGF0ZSA9IGQ7XHJcbiAgICAgICAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdCh0aGlzLmRhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSwgaW5kZXgsIDEpO1xyXG4gICAgICAgICAgdGhpcy5kYXRlID0gZDtcclxuICAgICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHMgPSBbaW5kZXgsIGluZGV4XTtcclxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycpIHtcclxuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xyXG4gICAgICAgICAgY29uc3Qgd2Vla3MgPSB0aGlzLmdldFdlZWtzSW5ZZWFyQ3VzdG9tKGQpO1xyXG4gICAgICAgICAgZC5zZXREYXRlKHdlZWtzID09PSA1MiA/IGQuZ2V0RGF0ZSgpICsgKChpbmRleCkgKiA3KSA6IGQuZ2V0RGF0ZSgpICsgKGluZGV4ICogNykpO1xyXG4gICAgICAgICAgdGhpcy5yYW5nZSA9IFtkLCBkXTtcclxuICAgICAgICAgIHRoaXMucmFuZ2VDaGFuZ2UuZW1pdCh0aGlzLnJhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksIGluZGV4LCAxKTtcclxuICAgICAgICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSwgaW5kZXggKyAxLCAwKTtcclxuICAgICAgICAgIHRoaXMucmFuZ2UgPSBbc3RhcnQsIGVuZF07XHJcbiAgICAgICAgICB0aGlzLnJhbmdlQ2hhbmdlLmVtaXQodGhpcy5yYW5nZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDaGFuZ2VFdmVudChpbmRleDogbnVtYmVyKTogTnpUYWJDaGFuZ2VFdmVudCB7XHJcbiAgICBjb25zdCBldmVudCA9IG5ldyBOelRhYkNoYW5nZUV2ZW50KCk7XHJcbiAgICBldmVudC5pbmRleCA9IGluZGV4O1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGgpIHtcclxuICAgICAgZXZlbnQudGFiID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudFtpbmRleF07XHJcbiAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIGlmIChpICE9PSBpbmRleCkge1xyXG4gICAgICAgICAgaXRlbS5kZXNlbGVjdC5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZXZlbnQudGFiLnNlbGVjdC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXZlbnQ7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xhbXBzIHRoZSBnaXZlbiBpbmRleCB0byB0aGUgYm91bmRzIG9mIDAgYW5kIHRoZSB0YWJzIGxlbmd0aC4gKi9cclxuICBwcml2YXRlIGNsYW1wVGFiSW5kZXgoaW5kZXg6IG51bWJlciB8IG51bGwpOiBudW1iZXIge1xyXG4gICAgLy8gTm90ZSB0aGUgYHx8IDBgLCB3aGljaCBlbnN1cmVzIHRoYXQgdmFsdWVzIGxpa2UgTmFOIGNhbid0IGdldCB0aHJvdWdoXHJcbiAgICAvLyBhbmQgd2hpY2ggd291bGQgb3RoZXJ3aXNlIHRocm93IHRoZSBjb21wb25lbnQgaW50byBhbiBpbmZpbml0ZSBsb29wXHJcbiAgICAvLyAoc2luY2UgTWF0aC5tYXgoTmFOLCAwKSA9PT0gTmFOKS5cclxuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCAtIDEsIE1hdGgubWF4KGluZGV4IHx8IDAsIDApKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMud2Vla0xvY2FsZSA9IHtcclxuICAgICAgd2Vlazoge1xyXG4gICAgICAgIGRvdzogbW9tZW50LmxvY2FsZURhdGEodGhpcy5sb2NhbGUpLmZpcnN0RGF5T2ZXZWVrKCksXHJcbiAgICAgICAgZG95OiBtb21lbnQubG9jYWxlRGF0YSh0aGlzLmxvY2FsZSkuZmlyc3REYXlPZlllYXIoKVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZGUnOlxyXG4gICAgICAgICAgdGhpcy5tb2RlT3B0aW9uc1swXS50aXRsZSA9ICdXb2NoZSc7XHJcbiAgICAgICAgICB0aGlzLm1vZGVPcHRpb25zWzFdLnRpdGxlID0gJ01vbmF0JztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2VuJzpcclxuICAgICAgICAgIHRoaXMubW9kZU9wdGlvbnNbMF0udGl0bGUgPSAnV2Vlayc7XHJcbiAgICAgICAgICB0aGlzLm1vZGVPcHRpb25zWzFdLnRpdGxlID0gJ01vbnRoJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aGlzLm1vZGVPcHRpb25zWzBdLnRpdGxlID0gJ1dlZWsnO1xyXG4gICAgICAgICAgdGhpcy5tb2RlT3B0aW9uc1sxXS50aXRsZSA9ICdNb250aCc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRNb2RlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKXtcclxuICAgIGlmIChjaGFuZ2VzLm1vZGUpIHtcclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE1vZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlbGVjdGVkTW9kZSgpe1xyXG4gICAgdGhpcy5tb2RlT3B0aW9ucy5mb3JFYWNoKG1vZGUgPT4ge1xyXG4gICAgICBtb2RlLnNlbGVjdGVkID0gbW9kZS52YWx1ZSA9PT0gdGhpcy5tb2RlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ID0gdGhpcy5nZXRWYWx1ZXNTbGlkZXIoKTtcclxuICAgIGlmICh0aGlzLnJhbmdlZCkge1xyXG4gICAgICB0aGlzLnJhbmdlID0gdGhpcy5yYW5nZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFZhbHVlc1NsaWRlcigpIHtcclxuICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJyAmJiAhdGhpcy5yYW5nZWQpIHtcclxuICAgICAgdGhpcy5kYXRlID0gdGhpcy5kYXRlO1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRXZWVrc0luWWVhcih0aGlzLmRhdGUpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdtb250aCcpIHtcclxuICAgICAgdGhpcy5kYXRlID0gdGhpcy5kYXRlO1xyXG4gICAgICBpZiAodGhpcy5yYW5nZS5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgc3REYXRlWWVhciA9IG1vbWVudCh0aGlzLnJhbmdlWzBdKS55ZWFyKCk7XHJcbiAgICAgICAgY29uc3QgbmREYXRlWWVhciA9IG1vbWVudCh0aGlzLnJhbmdlWzFdKS55ZWFyKCk7XHJcbiAgICAgICAgaWYgKHN0RGF0ZVllYXIgIT09IG5kRGF0ZVllYXIpIHtcclxuICAgICAgICAgIGxldCByYW5nZWRNb250aCA9IHRoaXMuZ2V0RGVmYXVsdE1vbnRocygpO1xyXG4gICAgICAgICAgd2hpbGUobmREYXRlWWVhciAtIHN0RGF0ZVllYXIpIHtcclxuICAgICAgICAgICAgc3REYXRlWWVhcisrO1xyXG4gICAgICAgICAgICByYW5nZWRNb250aCA9IHJhbmdlZE1vbnRoLmNvbmNhdCh0aGlzLmdldERlZmF1bHRNb250aHMoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmFuZ2VkTW9udGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRNb250aHMoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0TW9udGhzKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnICYmIHRoaXMucmFuZ2VkKSB7XHJcbiAgICAgIGlmICh0aGlzLnJhbmdlLmxlbmd0aCkge1xyXG4gICAgICAgIGxldCBzdERhdGVZZWFyID0gbW9tZW50KHRoaXMucmFuZ2VbMF0pLnllYXIoKTtcclxuICAgICAgICBjb25zdCBuZERhdGVZZWFyID0gbW9tZW50KHRoaXMucmFuZ2VbMV0pLnllYXIoKTtcclxuICAgICAgICBpZiAoc3REYXRlWWVhciAhPT0gbmREYXRlWWVhcikge1xyXG4gICAgICAgICAgbGV0IHJhbmdlZFdlZWtzID0gdGhpcy5nZXRXZWVrc0luWWVhcihuZXcgRGF0ZShzdERhdGVZZWFyKSk7XHJcbiAgICAgICAgICB3aGlsZShuZERhdGVZZWFyIC0gc3REYXRlWWVhcikge1xyXG4gICAgICAgICAgICByYW5nZWRXZWVrcyA9IHJhbmdlZFdlZWtzLmNvbmNhdCh0aGlzLmdldFdlZWtzSW5ZZWFyKG5ldyBEYXRlKHN0RGF0ZVllYXIpKSk7XHJcbiAgICAgICAgICAgIHN0RGF0ZVllYXIrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByYW5nZWRXZWVrcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0V2Vla3NJblllYXIodGhpcy5yYW5nZVswXSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0V2Vla3NJblllYXIobmV3IERhdGUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXREZWZhdWx0TW9udGhzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyBbeyB0aXRsZTogJ0phbi4nIH0sIHsgdGl0bGU6ICdGZWIuJyB9LCB7IHRpdGxlOiAnTcOkcnonIH0sIHsgdGl0bGU6ICdBcHIuJyB9LCB7IHRpdGxlOiAnTWFpJyB9LCB7IHRpdGxlOiAnSnVuaSd9LFxyXG4gICAgICB7IHRpdGxlOiAnSnVsaScgfSwgeyB0aXRsZTogJ0F1Zy4nIH0sIHsgdGl0bGU6ICdTZXB0LicgfSwgeyB0aXRsZTogJ09rdC4nIH0sIHsgdGl0bGU6ICdOb3YuJyB9LCB7IHRpdGxlOiAnRGV6LicgfV0gOlxyXG4gICAgW3sgdGl0bGU6ICdKYW4nIH0sIHsgdGl0bGU6ICdGZWInIH0sIHsgdGl0bGU6ICdNYXInIH0sIHsgdGl0bGU6ICdBcHInIH0sIHsgdGl0bGU6ICdNYXknIH0sIHsgdGl0bGU6ICdKdW4nIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdKdWwnIH0sIHsgdGl0bGU6ICdBdWcnIH0sIHsgdGl0bGU6ICdTZXAnIH0sIHsgdGl0bGU6ICdPY3QnIH0sIHsgdGl0bGU6ICdOb3YnIH0sIHsgdGl0bGU6ICdEZWMnIH1dO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2Vla3NJblllYXIoZGF0ZTogRGF0ZSkge1xyXG4gICAgbGV0IHRlbXAgPSBbXTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0V2Vla3NJblllYXJDdXN0b20oZGF0ZSk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGVtcC5wdXNoKHt0aXRsZTogdGhpcy5mb3JtYXRXZWVrTnVtYmVyKGkgKyAxKX0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXA7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRXZWVrTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiAoXCIwXCIgKyB2YWx1ZSkuc2xpY2UoLTIpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgLy90aGlzLnVwZGF0ZVNsaWRlcigpO1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGgpIHtcclxuICAgICAgLy8gRG9uJ3QgY2xhbXAgdGhlIGBpbmRleFRvU2VsZWN0YCBpbW1lZGlhdGVseSBpbiB0aGUgc2V0dGVyIGJlY2F1c2UgaXQgY2FuIGhhcHBlbiB0aGF0XHJcbiAgICAgIC8vIHRoZSBhbW91bnQgb2YgdGFicyBjaGFuZ2VzIGJlZm9yZSB0aGUgYWN0dWFsIGNoYW5nZSBkZXRlY3Rpb24gcnVucy5cclxuICAgICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9ICh0aGlzLmluZGV4VG9TZWxlY3QgPSB0aGlzLmNsYW1wVGFiSW5kZXgodGhpcy5pbmRleFRvU2VsZWN0KSk7XHJcbiAgICAgIC8vIElmIHRoZXJlIGlzIGEgY2hhbmdlIGluIHNlbGVjdGVkIGluZGV4LCBlbWl0IGEgY2hhbmdlIGV2ZW50LiBTaG91bGQgbm90IHRyaWdnZXIgaWZcclxuICAgICAgLy8gdGhlIHNlbGVjdGVkIGluZGV4IGhhcyBub3QgeWV0IGJlZW4gaW5pdGlhbGl6ZWQuXHJcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgaXNGaXJzdFJ1biA9IHRoaXMuX3NlbGVjdGVkSW5kZXggPT0gbnVsbDtcclxuICAgICAgICAvKmlmICghaXNGaXJzdFJ1bikge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RDaGFuZ2UuZW1pdCh0aGlzLmNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4VG9TZWxlY3QpKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgLy8gQ2hhbmdpbmcgdGhlc2UgdmFsdWVzIGFmdGVyIGNoYW5nZSBkZXRlY3Rpb24gaGFzIHJ1blxyXG4gICAgICAgIC8vIHNpbmNlIHRoZSBjaGVja2VkIGNvbnRlbnQgbWF5IGNvbnRhaW4gcmVmZXJlbmNlcyB0byB0aGVtLlxyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiAodGFiLmlzQWN0aXZlID0gaW5kZXggPT09IGluZGV4VG9TZWxlY3QpKTtcclxuXHJcbiAgICAgICAgICBpZiAoIWlzRmlyc3RSdW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQoaW5kZXhUb1NlbGVjdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFNldHVwIHRoZSBwb3NpdGlvbiBmb3IgZWFjaCB0YWIgYW5kIG9wdGlvbmFsbHkgc2V0dXAgYW4gb3JpZ2luIG9uIHRoZSBuZXh0IHNlbGVjdGVkIHRhYi5cclxuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKCh0YWI6IENtYWNzVGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGFiLnBvc2l0aW9uID0gaW5kZXggLSBpbmRleFRvU2VsZWN0O1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VsZWN0ZWQgdGFiLCB0aGVuIHNldCB1cCBhbiBvcmlnaW4gZm9yIHRoZSBuZXh0IHNlbGVjdGVkIHRhYlxyXG4gICAgICAgIC8vIGlmIGl0IGRvZXNuJ3QgaGF2ZSBvbmUgYWxyZWFkeS5cclxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPSBudWxsICYmIHRhYi5wb3NpdGlvbiA9PT0gMCAmJiAhdGFiLm9yaWdpbikge1xyXG4gICAgICAgICAgdGFiLm9yaWdpbiA9IGluZGV4VG9TZWxlY3QgLSB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhUb1NlbGVjdCkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleFRvU2VsZWN0O1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjdXN0b21TZWxlY3QoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5tb2RlT3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubW9kZU9wdGlvbnNbaW5kZXhdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMubW9kZSA9IHRoaXMubW9kZU9wdGlvbnNbaW5kZXhdLnZhbHVlIGFzIENtYWNzVGltZWxpbmVEYXRlUGlja2VyTW9kZTtcclxuICAgIHRoaXMubW9kZUNoYW5nZS5lbWl0KHRoaXMubW9kZSk7XHJcbiAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ID0gdGhpcy5nZXRWYWx1ZXNTbGlkZXIoKTtcclxuICAgIGlmICh0aGlzLnJhbmdlZCkge1xyXG4gICAgICB0aGlzLnJhbmdlID0gdGhpcy5yYW5nZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkKCl7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlT3B0aW9ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoKHJlc3VsdDogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja0FjdGl2ZVRhYihpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMucmFuZ2VkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSW5kZXggPj0gMCAmJiAhdGhpcy5zaG93UHJldmlvdXNZZWFyV2VlayAmJiB0aGlzLnNlbGVjdGVkSW5kZXggPT09IGluZGV4O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHMubGVuZ3RoID8gaW5kZXggPj0gdGhpcy5zZWxlY3RlZFJhbmdlSWR4c1swXSAmJiBpbmRleCA8PSB0aGlzLnNlbGVjdGVkUmFuZ2VJZHhzWzFdIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWl0ZW0gY21hY3MtdGltZWxpbmUtaXRlbS1kcm9wZG93blwiICpuZ0lmPVwiIXJlc3RyaWN0TW9kZVwiPlxyXG5cclxuICA8YSBjbWFjcy1kcm9wZG93biBjbGFzcz1cImNtYWNzLWRyb3Bkb3dtLXRpbWVsaW5lLWRhdGVwaWNrZXJcIiBbY21hY3NUcmlnZ2VyXT1cIidjbGljaydcIlxyXG4gICAgIFtjbWFjc09wZW5dPVwidHJ1ZVwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWZsZXhcIiBbZHJvcGRvd25NZW51XT1cIm1lbnVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1vcGVuLWRyb3Bkb3duLXdyYXBwZXJcIiBzdHlsZT1cIndpZHRoOiA4MHB4O1wiPlxyXG4gICAgICB7e2dldFNlbGVjdGVkKCkubGVuZ3RoID8gZ2V0U2VsZWN0ZWQoKVswXS50aXRsZSA6ICdTZWxlY3QnfX0gPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1Tb2xpZC1Eb3duXCI+PC9pPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9hPlxyXG4gIDxjbWFjcy1kcm9wZG93bi1tZW51ICNtZW51PVwiY21hY3NEcm9wZG93bk1lbnVcIj5cclxuICAgIDx1bCBjbWFjcy1tZW51IHN0eWxlPVwibWluLXdpZHRoOiAxMjVweFwiPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBtb2RlT3B0aW9uczsgaW5kZXggYXMgaVwiIGNtYWNzLW1lbnUtaXRlbSAoY2xpY2spPVwiY3VzdG9tU2VsZWN0KGkpXCI+XHJcbiAgICAgICAgPGkgW3N0eWxlLm9wYWNpdHldPVwib3B0aW9uLnNlbGVjdGVkID8gMSA6IDBcIiBuei1pY29uIG56VHlwZT1cImNoZWNrXCI+PC9pPlxyXG4gICAgICAgIDxzcGFuPnt7b3B0aW9uLnRpdGxlfX08L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvY21hY3MtZHJvcGRvd24tbWVudT5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtaXRlbSBjbWFjcy10aW1lbGluZS1pdGVtLWRyb3Bkb3duXCIgKm5nSWY9XCJyZXN0cmljdE1vZGVcIj5cclxuICA8YSBjbGFzcz1cImNtYWNzLWRyb3Bkb3dtLXRpbWVsaW5lLWRhdGVwaWNrZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1vcGVuLWRyb3Bkb3duLXdyYXBwZXJcIiBzdHlsZT1cIndpZHRoOiA4MHB4O1wiPlxyXG4gICAgICB7e2dldFNlbGVjdGVkKCkubGVuZ3RoID8gZ2V0U2VsZWN0ZWQoKVswXS50aXRsZSA6ICdTZWxlY3QnfX1cclxuICAgIDwvZGl2PlxyXG4gIDwvYT5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtaXRlbVwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4OyBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDE2MHB4IC0gMTZweCk7XCI+XHJcbiAgPHB0Yi10YWJzLW5hdiByb2xlPVwidGFibGlzdFwiXHJcbiAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiYW50LXRhYnMtYmFyIGFudC10YWJzLXRvcC1iYXIgY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci1zbGlkZXJcIlxyXG4gICAgICAgICAgICAgICBbbnpUeXBlXT1cIidsaW5lJ1wiXHJcbiAgICAgICAgICAgICAgIFtuelNob3dQYWdpbmF0aW9uXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICBbbnpQb3NpdGlvbk1vZGVdPVwiJ2hvcml6b250YWwnXCJcclxuICAgICAgICAgICAgICAgW256QW5pbWF0ZWRdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgIFtuekhpZGVCYXJdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgIFtzZWxlY3RlZEluZGV4XT1cInNlbGVjdGVkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAobnpPbk5leHRDbGljayk9XCJvbk5leHRDbGljay5lbWl0KClcIlxyXG4gICAgICAgICAgICAgICAobnpPblByZXZDbGljayk9XCJvblByZXZDbGljay5lbWl0KClcIj5cclxuICAgIDxkaXYgcHRiLXRhYi1sYWJlbFxyXG4gICAgICAgICByb2xlPVwidGFiXCJcclxuICAgICAgICAgW3N0eWxlLm1hcmdpbi1yaWdodC5weF09XCJndXR0ZXJcIlxyXG4gICAgICAgICBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXItbGFiZWxcIlxyXG4gICAgICAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWFjdGl2ZV09XCJ0cnVlXCJcclxuICAgICAgICAgKm5nSWY9XCJzaG93UHJldmlvdXNZZWFyV2Vla1wiPlxyXG4gICAgICB7eyBwcmV2aW91c1llYXJXZWVrIH19XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgcHRiLXRhYi1sYWJlbFxyXG4gICAgICAgICByb2xlPVwidGFiXCJcclxuICAgICAgICAgW3N0eWxlLm1hcmdpbi1yaWdodC5weF09XCJndXR0ZXJcIlxyXG4gICAgICAgICBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXItbGFiZWxcIlxyXG4gICAgICAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWFjdGl2ZV09XCJjaGVja0FjdGl2ZVRhYihpKVwiXHJcbiAgICAgICAgIFtkaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxyXG4gICAgICAgICAoY2xpY2spPVwiY2xpY2tMYWJlbChpLHRhYi5kaXNhYmxlZClcIlxyXG4gICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIGxpc3RPZk56VGFiQ29tcG9uZW50OyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0YWIudGl0bGVcIj57eyB0YWIudGl0bGUgfX08L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvcHRiLXRhYnMtbmF2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1pdGVtXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1vZGUgPT09ICd3ZWVrJyAmJiAhcmFuZ2VkXCI+XHJcbiAgICA8Y21hY3Mtd2Vlay1waWNrZXIgWyhuZ01vZGVsKV09XCJkYXRlXCIgW2Ryb3Bkb3duQ2xhc3NOYW1lXT1cIidjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLXBhbmVsJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZ2V0V2VlaygkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbdGltZWxpbmVdPVwidHJ1ZVwiIHBsYWNlSG9sZGVyPVwiXCI+PC9jbWFjcy13ZWVrLXBpY2tlcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibW9kZSA9PT0gJ21vbnRoJyAmJiAhcmFuZ2VkXCI+XHJcbiAgICA8Y21hY3MtbW9udGgtcGlja2VyXHJcbiAgICAgIFtkcm9wZG93bkNsYXNzTmFtZV09XCInY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci1wYW5lbCdcIlxyXG4gICAgICBbdGltZWxpbmVdPVwidHJ1ZVwiXHJcbiAgICAgIFsobmdNb2RlbCldPVwiZGF0ZVwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImdldE1vbnRoKCRldmVudClcIlxyXG4gICAgICBwbGFjZUhvbGRlcj1cIlwiXHJcbiAgICA+PC9jbWFjcy1tb250aC1waWNrZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihtb2RlID09PSAnd2VlaycgfHwgbW9kZSA9PT0gJ21vbnRoJykgJiYgcmFuZ2VkXCI+XHJcbiAgICA8Y21hY3MtcmFuZ2UtcGlja2VyXHJcbiAgICAgIFsobmdNb2RlbCldPVwicmFuZ2VcIlxyXG4gICAgICBbbW9kZV09XCInd2VlaydcIlxyXG4gICAgICBwbGFjZUhvbGRlcj1cIlwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIj5cclxuICAgIDwvY21hY3MtcmFuZ2UtcGlja2VyPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuIl19