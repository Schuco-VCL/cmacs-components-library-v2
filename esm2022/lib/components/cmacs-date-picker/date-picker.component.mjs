import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CandyDate, cloneDate } from 'ng-zorro-antd/core/time';
import { InputBoolean, toBoolean, valueFunctionProp } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DatePickerService } from './date-picker.service';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { CmacsPickerComponent } from './picker.component';
import moment from 'moment';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
import * as i2 from "./date-picker.service";
import * as i3 from "ng-zorro-antd/i18n";
import * as i4 from "@angular/cdk/bidi";
import * as i5 from "ng-zorro-antd/core/no-animation";
import * as i6 from "@angular/common";
import * as i7 from "./picker.component";
import * as i8 from "./date-range-popup.component";
function CmacsDatePickerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementStart(5, "span", 5);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.openPickerTitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.openPickerSubtitle, ": ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-open-date-picker-selected-value", ctx_r0.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.value ? ctx_r0.parseDate() : ctx_r0.placeHolder, "");
} }
function CmacsDatePickerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 6)(4, "div", 4);
    i0.ɵɵtext(5);
    i0.ɵɵelementStart(6, "span", 5);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 7)(9, "div", 4);
    i0.ɵɵtext(10);
    i0.ɵɵelementStart(11, "span", 5);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.openPickerTitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.openPickerLeftRangeSub, ": ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-open-date-picker-selected-value", ctx_r1.value && ctx_r1.value.length);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.value && ctx_r1.value.length ? ctx_r1.parseDate()[0] : ctx_r1.placeHolder, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.openPickerRightRangeSub, ": ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-open-date-picker-selected-value", ctx_r1.value && ctx_r1.value.length);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.value && ctx_r1.value.length ? ctx_r1.parseDate()[1] : ctx_r1.placeHolder, "");
} }
const POPUP_STYLE_PATCH = { position: 'relative' }; //Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
const NZ_CONFIG_MODULE_NAME = 'datePicker';
/**
 * The base picker for all common APIs
 */
export class CmacsDatePickerComponent {
    get showTime() {
        return this.nzShowTime;
    }
    set showWeekCustom(value) {
        this._showWeekCustom = ((!Array.isArray(this.panelMode) && this.panelMode !== 'week') || (Array.isArray(this.panelMode) && this.panelMode[0] !== 'week'));
    }
    get showWeekCustom() {
        return ((!Array.isArray(this.panelMode) && this.panelMode !== 'week') || (Array.isArray(this.panelMode) && this.panelMode[0] !== 'week'));
    }
    set showTime(value) {
        this.nzShowTime = typeof value === 'object' ? value : toBoolean(value);
    }
    parseDate() {
        if (!this.isRange) {
            const parsedValue = this.datePickerService.value;
            const locale = this.i18n.getLocale().locale;
            const date = moment(parsedValue.nativeDate).locale(locale);
            return date.format(locale === 'de' ? 'DD. MMM YYYY' : locale === 'ja' ? 'YYYY年M月D日' : 'MMM DD, YYYY');
        }
        let parsedValues = [];
        const coerceValues = this.datePickerService.value;
        for (let val of coerceValues) {
            const parsedValue = val;
            const locale = this.i18n.getLocale().locale;
            const date = moment(parsedValue.nativeDate).locale(locale);
            parsedValues.push(date.format(locale === 'de' ? 'DD. MMM YYYY' : locale === 'ja' ? 'YYYY年M月D日' : 'MMM DD, YYYY'));
        }
        return parsedValues;
    }
    constructor(nzConfigService, datePickerService, i18n, cdr, renderer, elementRef, dateHelper, directionality, noAnimation) {
        this.nzConfigService = nzConfigService;
        this.datePickerService = datePickerService;
        this.i18n = i18n;
        this.cdr = cdr;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dateHelper = dateHelper;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.isRange = false; // Indicate whether the value is a range value
        this.focused = false;
        this.dir = 'ltr';
        this.panelMode = 'date';
        this.destroyed$ = new Subject();
        this.isCustomPlaceHolder = false;
        this.isCustomFormat = false;
        this.nzShowTime = false;
        // --- Common API
        this.allowClear = true;
        this.timeline = false;
        this.autoFocus = false;
        this.disabled = false;
        this.borderless = false;
        this.inputReadOnly = false;
        this.placeHolder = '';
        this.popupStyle = POPUP_STYLE_PATCH;
        this.size = 'default';
        this.showToday = true;
        this.mode = 'date';
        this.showNow = true;
        this.defaultPickerValue = null;
        this.separator = undefined;
        this.suffixIcon = 'iconUISmall-Calender';
        this.nzId = null;
        this._showWeekCustom = false;
        // TODO(@wenqi73) The PanelMode need named for each pickers and export
        this.onPanelChange = new EventEmitter();
        this.onCalendarChange = new EventEmitter();
        this.onOk = new EventEmitter();
        this.onOpenChange = new EventEmitter();
        this.openPickerTitle = '';
        this.openPickerSubtitle = '';
        this.openPickerLeftRangeSub = '';
        this.openPickerRightRangeSub = '';
        // ------------------------------------------------------------------------
        // | Control value accessor implements
        // ------------------------------------------------------------------------
        // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
        this.onChangeFn = () => void 0;
        this.onTouchedFn = () => void 0;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-picker');
    }
    ngOnInit() {
        // Subscribe the every locale change if the locale is not handled by user
        if (!this.locale) {
            this.i18n.localeChange.pipe(takeUntil(this.destroyed$)).subscribe(() => this.setLocale());
        }
        // Default value
        this.datePickerService.isRange = this.isRange;
        this.datePickerService.initValue();
        this.datePickerService.emitValue$.pipe(takeUntil(this.destroyed$)).subscribe(_ => {
            const value = this.datePickerService.value;
            this.datePickerService.initialValue = cloneDate(value);
            if (this.isRange) {
                const vAsRange = value;
                if (vAsRange.length) {
                    this.onChangeFn([vAsRange[0]?.nativeDate ?? null, vAsRange[1]?.nativeDate ?? null]);
                }
                else {
                    this.onChangeFn([]);
                }
            }
            else {
                if (value) {
                    this.onChangeFn(value.nativeDate);
                }
                else {
                    this.onChangeFn(null);
                }
            }
            this.onTouchedFn();
            // When value emitted, overlay will be closed
            this.close();
        });
        this.setModeAndFormat();
        this.directionality.change?.pipe(takeUntil(this.destroyed$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        if (changes.popupStyle) {
            // Always assign the popup style patch
            this.popupStyle = this.popupStyle ? { ...this.popupStyle, ...POPUP_STYLE_PATCH } : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once placeHolder assigned at the first time
        if (changes.placeHolder?.currentValue) {
            this.isCustomPlaceHolder = true;
        }
        if (changes.format?.currentValue) {
            this.isCustomFormat = true;
        }
        if (changes.locale) {
            // The locale is currently handled by user
            this.setDefaultPlaceHolder();
        }
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
        if (changes.mode) {
            this.setDefaultPlaceHolder();
            this.setModeAndFormat();
        }
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    setModeAndFormat() {
        const inputFormats = {
            year: 'yyyy',
            month: this.i18n.getLocale().locale === 'de' ? 'MM.yyyy' : this.i18n.getLocale().locale === 'ja' ? 'yyyy年M月' : 'MM/yyyy',
            week: this.i18n.getDateLocale() ? 'RRRR-II' :
                this.i18n.getLocale().locale === 'de' ? 'ww.yyyy' : this.i18n.getLocale().locale === 'ja' ? 'yyyy年Www週' : 'ww/yyyy',
            date: this.showTime ? (this.i18n.getLocale().locale === 'de' ? 'dd.MM.yyyy HH:mm:ss' : this.i18n.getLocale().locale === 'ja' ? 'yyyy年M月d日 H時m分s秒' : 'MM/dd/yyyy HH:mm:ss') :
                (this.i18n.getLocale().locale === 'de' ? 'dd.MM.yyyy' : this.i18n.getLocale().locale === 'ja' ? 'yyyy年M月d日' : 'MM/dd/yyyy')
        };
        if (!this.mode) {
            this.mode = 'date';
        }
        this.panelMode = this.isRange ? [this.mode, this.mode] : this.mode;
        // Default format when it's empty
        if (!this.isCustomFormat) {
            this.format = inputFormats[this.mode];
        }
    }
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    nzOnOpenChange(open) {
        this.onOpenChange.emit(open);
    }
    open() {
        this.picker.showOverlay();
    }
    close() {
        this.picker.hideOverlay();
    }
    writeValue(value) {
        this.setValue(value);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    }
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    setLocale() {
        this.locale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
        this.cdr.markForCheck();
    }
    setDefaultPlaceHolder() {
        if (!this.isCustomPlaceHolder && this.locale) {
            const defaultPlaceholder = {
                year: this.getPropertyOfLocale('yearPlaceholder'),
                month: this.getPropertyOfLocale('monthPlaceholder'),
                week: this.getPropertyOfLocale('weekPlaceholder'),
                date: this.getPropertyOfLocale('placeholder')
            };
            const defaultRangePlaceholder = {
                year: this.getPropertyOfLocale('rangeYearPlaceholder'),
                month: this.getPropertyOfLocale('rangeMonthPlaceholder'),
                week: this.getPropertyOfLocale('rangeWeekPlaceholder'),
                date: this.getPropertyOfLocale('rangePlaceholder')
            };
            this.placeHolder = this.isRange
                ? defaultRangePlaceholder[this.mode]
                : defaultPlaceholder[this.mode];
        }
    }
    getPropertyOfLocale(type) {
        return this.locale.lang[type] || this.i18n.getLocaleData(`DatePicker.lang.${type}`);
    }
    // Safe way of setting value with default
    setValue(value) {
        const newValue = this.datePickerService.makeValue(value);
        this.datePickerService.setValue(newValue);
        this.datePickerService.initialValue = newValue;
    }
    onFocusChange(value) {
        this.focused = value;
        // TODO: avoid autoFocus cause change after checked error
        if (this.focused) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-picker-focused');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-picker-focused');
        }
    }
    onPanelModeChange(panelMode) {
        this.onPanelChange.emit(panelMode);
    }
    // Emit onCalendarChange when select date by nz-range-picker
    nzOnCalendarChange(value) {
        if (this.isRange && Array.isArray(value)) {
            const rangeValue = value.filter(x => x instanceof CandyDate).map(x => x.nativeDate);
            this.onCalendarChange.emit(rangeValue);
        }
    }
    onResultOk() {
        if (this.isRange) {
            const value = this.datePickerService.value;
            if (value.length) {
                this.onOk.emit([value[0]?.nativeDate || null, value[1]?.nativeDate || null]);
            }
            else {
                this.onOk.emit([]);
            }
        }
        else {
            if (this.datePickerService.value) {
                this.onOk.emit(this.datePickerService.value.nativeDate);
            }
            else {
                this.onOk.emit(null);
            }
        }
    }
    static { this.ɵfac = function CmacsDatePickerComponent_Factory(t) { return new (t || CmacsDatePickerComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i2.DatePickerService), i0.ɵɵdirectiveInject(i3.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.DateHelperService), i0.ɵɵdirectiveInject(i4.Directionality, 8), i0.ɵɵdirectiveInject(i5.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsDatePickerComponent, selectors: [["cmacs-date-picker"], ["cmacs-week-picker"], ["cmacs-month-picker"], ["cmacs-year-picker"], ["cmacs-range-picker"]], viewQuery: function CmacsDatePickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(CmacsPickerComponent, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.picker = _t.first);
        } }, hostVars: 14, hostBindings: function CmacsDatePickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function CmacsDatePickerComponent_click_HostBindingHandler($event) { return ctx.picker.onClickInputBox($event); });
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-picker-range", ctx.isRange)("ant-picker-large", ctx.size === "large")("ant-picker-small", ctx.size === "small")("ant-picker-disabled", ctx.disabled)("ant-picker-rtl", ctx.dir === "rtl")("ant-picker-borderless", ctx.borderless)("cmacs-open-date-picker", ctx.cmacsOpen);
        } }, inputs: { allowClear: "allowClear", timeline: "timeline", autoFocus: "autoFocus", disabled: "disabled", borderless: "borderless", inputReadOnly: "inputReadOnly", nzOpen: "nzOpen", cmacsOpen: "cmacsOpen", disabledDate: "disabledDate", locale: "locale", placeHolder: "placeHolder", popupStyle: "popupStyle", dropdownClassName: "dropdownClassName", size: "size", format: "format", dateRender: "dateRender", disabledTime: "disabledTime", nzRenderExtraFooter: "nzRenderExtraFooter", showToday: "showToday", mode: "mode", showNow: "showNow", ranges: "ranges", defaultPickerValue: "defaultPickerValue", separator: "separator", suffixIcon: "suffixIcon", nzId: "nzId", width: "width", openPickerTitle: "openPickerTitle", openPickerSubtitle: "openPickerSubtitle", openPickerLeftRangeSub: "openPickerLeftRangeSub", openPickerRightRangeSub: "openPickerRightRangeSub", showTime: "showTime", showWeekCustom: "showWeekCustom" }, outputs: { onPanelChange: "onPanelChange", onCalendarChange: "onCalendarChange", onOk: "onOk", onOpenChange: "onOpenChange" }, exportAs: ["cmacsDatePicker"], features: [i0.ɵɵProvidersFeature([
                DatePickerService,
                {
                    provide: NG_VALUE_ACCESSOR,
                    multi: true,
                    useExisting: forwardRef(() => CmacsDatePickerComponent)
                }
            ]), i0.ɵɵNgOnChangesFeature], decls: 5, vars: 39, consts: [[4, "ngIf"], ["cmacs-picker", "", 2, "display", "inherit", "align-items", "center", "width", "100%", 3, "isRange", "open", "timeline", "cmacsOpen", "dir", "separator", "disabled", "inputReadOnly", "format", "allowClear", "autoFocus", "placeholder", "dropdownClassName", "noAnimation", "popupStyle", "suffixIcon", "id", "openChange", "focusChange"], [3, "isRange", "timeline", "defaultPickerValue", "showWeek", "showWeekCustom", "panelMode", "locale", "showToday", "showNow", "showTime", "dateRender", "disabledDate", "disabledTime", "extraFooter", "ranges", "dir", "panelModeChange", "calendarChange", "resultOk"], [1, "cmacs-open-date-title"], [1, "cmacs-open-date-subtitle"], [1, "cmacs-open-date-picker-placeholder"], [1, "cmacs-open-range-picker-left"], [1, "cmacs-open-range-picker-right"]], template: function CmacsDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, CmacsDatePickerComponent_ng_container_1_Template, 7, 5, "ng-container", 0);
            i0.ɵɵtemplate(2, CmacsDatePickerComponent_ng_container_2_Template, 13, 9, "ng-container", 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵlistener("openChange", function CmacsDatePickerComponent_Template_div_openChange_3_listener($event) { return ctx.nzOnOpenChange($event); })("focusChange", function CmacsDatePickerComponent_Template_div_focusChange_3_listener($event) { return ctx.onFocusChange($event); });
            i0.ɵɵelementStart(4, "date-range-popup", 2);
            i0.ɵɵlistener("panelModeChange", function CmacsDatePickerComponent_Template_date_range_popup_panelModeChange_4_listener($event) { return ctx.onPanelModeChange($event); })("calendarChange", function CmacsDatePickerComponent_Template_date_range_popup_calendarChange_4_listener($event) { return ctx.nzOnCalendarChange($event); })("resultOk", function CmacsDatePickerComponent_Template_date_range_popup_resultOk_4_listener() { return ctx.onResultOk(); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.width);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.cmacsOpen && !ctx.isRange);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.cmacsOpen && ctx.isRange);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("ant-picker-dropdown-rtl", ctx.dir === "rtl");
            i0.ɵɵproperty("isRange", ctx.isRange)("open", ctx.nzOpen)("timeline", ctx.timeline)("cmacsOpen", ctx.cmacsOpen)("dir", ctx.dir)("separator", ctx.separator)("disabled", ctx.disabled)("inputReadOnly", ctx.inputReadOnly)("format", ctx.format)("allowClear", ctx.allowClear)("autoFocus", ctx.autoFocus)("placeholder", ctx.placeHolder)("dropdownClassName", ctx.dropdownClassName)("noAnimation", !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("popupStyle", ctx.popupStyle)("suffixIcon", ctx.suffixIcon)("id", ctx.nzId);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("isRange", ctx.isRange)("timeline", ctx.timeline)("defaultPickerValue", ctx.defaultPickerValue)("showWeek", ctx.mode === "week" || ctx.showWeekCustom)("showWeekCustom", ctx.showWeekCustom)("panelMode", ctx.panelMode)("locale", ctx.locale == null ? null : ctx.locale.lang)("showToday", ctx.mode === "date" && ctx.showToday && !ctx.isRange && !ctx.showTime)("showNow", ctx.mode === "date" && ctx.showNow && !ctx.isRange && !!ctx.showTime)("showTime", ctx.showTime)("dateRender", ctx.dateRender)("disabledDate", ctx.disabledDate)("disabledTime", ctx.disabledTime)("extraFooter", ctx.extraFooter)("ranges", ctx.ranges)("dir", ctx.dir);
        } }, dependencies: [i4.Dir, i6.NgIf, i7.CmacsPickerComponent, i8.DateRangePopupComponent], styles: [".ant-picker-suffix i{font-size:16px;color:#656c79}.ant-picker-dropdown-placement-topLeft,.ant-picker-dropdown-placement-topRight{top:3px!important;clip-path:inset(-10% -10% 0 -10%)!important;border-radius:3px 3px 0 0!important}.ant-picker-content td,.ant-picker-content th{border:none!important}.ant-picker-cell:before{left:2px!important}.ant-picker-datetime-panel .ant-picker-date-panel{display:inline-flex;font-size:12px}.ant-picker-content{border-collapse:separate;border-spacing:0px 8px}.ant-picker-content th{font-size:12px}.ant-picker-datetime-panel .ant-picker-time-panel{width:125px!important;display:inline-flex;font-size:12px}.ant-picker-time-panel .ant-picker-content{display:inline-flex}.ant-picker-cell-in-view.ant-picker-cell-in-range:before{background:#f3f3f4;height:30px}.ant-picker-cell{margin:3px 0}.ant-picker-cell-range-end.ant-picker-cell-in-view .ant-picker-cell-inner{background-color:#fff!important;color:#656c79!important;border:1px solid #2a7cff!important;font-weight:500!important;border-radius:3px!important}.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single):before,.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single):before{background:#f3f3f4;height:30px}.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover:before,.ant-picker-cell-in-view.ant-picker-cell-range-end.ant-picker-cell-range-hover:before,.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single).ant-picker-cell-range-hover-end:before,.ant-picker-cell-in-view.ant-picker-cell-range-start.ant-picker-cell-range-hover:before,.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single).ant-picker-cell-range-hover-start:before,.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end:before,.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start:before{background:#f3f3f4}.ant-picker-date-panel .ant-picker-content th{max-width:30px!important;max-height:30px!important;font-size:12px;width:auto!important;height:auto!important}.ant-picker-date-range-wrapper .ant-picker-panel{width:50%}.ant-picker-date-panel .ant-picker-content th{max-width:36px!important;width:auto!important}.ant-picker-week-panel .ant-picker-header-super-prev-btn,.ant-picker-week-panel .ant-picker-header-super-next-btn,.ant-picker-date-panel .ant-picker-header-super-prev-btn,.ant-picker-date-panel .ant-picker-header-super-next-btn{display:none!important}.ant-picker-cell-week{width:30px;height:30px;color:#656c79!important;font-weight:400!important;font-size:12px}.ant-picker-date-panel .ant-picker-content th{width:30px;height:30px;font-size:12px}.ant-picker-week-panel-row:not(.cmacs-picker-week-panel-row) .ant-picker-cell-in-view.ant-picker-cell-in-range:before{background:#bae7ff!important}.ant-picker-datetime-panel .ant-picker-time-panel-column:after{height:0}.ant-picker-super-next-icon:after,.ant-picker-super-prev-icon:after{content:unset}.ant-picker-input>input{color:#656c79}.ant-picker-separator i{display:none}.ant-picker-separator:after{content:\"~\"}.ant-picker-input>input-focused,.ant-picker-input>input:focus{border-color:transparent;border-right-width:1px!important;outline:0;box-shadow:none}.ant-picker-range .ant-picker-active-bar{background:transparent}.ant-picker-focused:not(.ant-picker-disabled),.ant-picker:not(.ant-picker-disabled):hover{border-color:#bec4cd!important;border-right-width:1px!important;box-shadow:none}.ant-picker-header>button{width:20px;font-size:14px;line-height:6px;height:20px;position:relative;border-radius:3px}.ant-picker-header>button:hover{background-color:#f6f7fb;color:#656c79}.ant-picker-super-next-icon:before{font-family:ArrowLarge!important;content:\"\\e916\"}.ant-picker-super-prev-icon:before{font-family:ArrowLarge!important;content:\"\\e915\"}.ant-picker-next-icon:before{font-family:ArrowLarge!important;content:\"\\e916\"}.ant-picker-prev-icon:before{font-family:ArrowLarge!important;content:\"\\e915\"}.ant-picker-decade-panel .ant-picker-cell-inner{line-height:2.5!important}.ant-picker-panel .ant-picker-footer{border-top:none;border-bottom:none;line-height:1.4;padding-bottom:14px}.ant-picker-ranges{line-height:24px}.ant-picker-date-panel .ant-picker-content{width:100%;margin-right:0}.ant-picker-content th{color:#97a0ae;padding:0;width:30px}.ant-picker-week-panel-row{margin-top:8px}.ant-picker-week-panel-row td{padding:0;width:30px;height:30px}.ant-picker-header-view button:hover{color:#2a7cff;text-decoration:underline}.ant-picker-next-icon:before,.ant-picker-prev-icon:before,.ant-picker-super-next-icon:before,.ant-picker-super-prev-icon:before{position:absolute;display:inline-block;width:20px;height:20px;font-size:20px;border-width:unset;border:none;color:#3b3f46;line-height:20px}.ant-picker-next-icon,.ant-picker-prev-icon,.ant-picker-super-prev-icon,.ant-picker-super-next-icon{transform:none;width:20px;height:20px}.ant-picker-week-panel-row-selected td{font-weight:700;background:#cde1ff;color:#656c79}.ant-picker-panel-container.ant-picker-week-number .ant-picker-week-panel-row-selected td{font-weight:700;background:#fff;color:#656c79}.ant-picker-cell-week{color:#97a0ae!important;font-weight:400!important}.ant-picker-week-panel-row-selected td .ant-picker-cell-inner{color:#656c79;font-weight:400}.ant-picker-week-panel-row:hover td,.ant-picker-week-panel-row-selected td,.ant-picker-week-panel-row-selected:hover td{background:#f6f7fb}.ant-picker-panel-container.ant-picker-week-number .ant-picker-week-panel-row:hover td,.ant-picker-panel-container.ant-picker-week-number.ant-picker-week-panel-row-selected td,.ant-picker-panel-container.ant-picker-week-number.ant-picker-week-panel-row-selected:hover td{background:#fff}.ant-picker-header{border-bottom:none;padding:17px 7px 6px}.ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner,.ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,.ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner{color:#fff;background:#2a7cff;border-radius:3px!important;font-family:Roboto-Medium;font-weight:500}.ant-picker-cell>.ant-picker-cell-inner{width:30px;height:30px;color:#656c79;font-size:13px;line-height:30px}.ant-picker-date-panel .ant-picker-body,.ant-picker-week-panel .ant-picker-body{padding:11px 7px}.ant-picker-week-panel-row-selected:hover td .ant-picker-cell-inner{color:#656c79}.ant-picker-week-panel .ant-picker-cell-selected .ant-picker-cell-inner,.ant-picker-week-panel .ant-picker-cell-selected:hover .ant-picker-cell-inner{color:#fff!important;background-color:#2a7cff!important;border-color:#2a7cff!important;font-weight:700;width:30px;height:30px}.cmacs-open-date-title{font-size:12px;font-weight:600;margin-bottom:10px}.cmacs-open-range-picker:hover .ant-calendar-range-picker-input{color:transparent}.cmacs-open-range-picker:hover .ant-calendar-picker-clear{opacity:0;display:none}.cmacs-open-date-subtitle{font-size:12px;color:#acb3bf;margin-bottom:10px}.cmacs-open-date-picker-placeholder{font-size:12px;font-weight:600;color:#acb3bf}.cmacs-open-date-picker-selected-value{color:#2a7cff}.cmacs-open-date-picker:hover .ant-calendar-picker-clear{opacity:0}.cmacs-open-range-picker-left,.cmacs-open-range-picker-right{display:inline-block}.cmacs-open-range-picker-right{float:right}.cmacs-open-range-picker-left{float:left}.ant-calendar-picker-input{box-shadow:none}.ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled){border-color:#bec4cd;color:#bec4cd}.ant-picker-cell-today:not(.ant-calendar-selected-day):not(.ant-picker-cell-disabled) .ant-picker-cell-inner{display:grid;margin:0 auto}.ant-picker-cell:not(.ant-picker-cell-in-view) .ant-picker-cell-inner{color:#acb3bf}.ant-picker-cell-in-view{color:#656c79}.ant-picker-cell:before{width:30px;height:30px}.ant-picker-header-view{line-height:20px;padding:0 11px}.ant-picker-header-view button{color:#3b3f46;line-height:20px;font-size:14px;font-family:Roboto-Medium;font-weight:500}.ant-picker-cell-today:not(.ant-calendar-selected-day):not(.ant-picker-cell-disabled) .ant-picker-cell-inner{background-color:transparent;border-color:transparent;color:#656c79}.ant-picker-cell-disabled .ant-picker-cell-inner{color:#acb3bf}.ant-picker-cell-disabled:before{background:none}.ant-picker-date-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-decade-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-month-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-quarter-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-year-panel .ant-picker-cell-disabled .ant-picker-cell-inner{background:#f3f3f4}.ant-picker-cell-in-view.ant-picker-cell-today:not(.ant-calendar-selected-day):not(.ant-picker-cell-disabled) .ant-picker-cell-inner:after{content:\"\\25cf\";color:#2a7cff;margin-top:-19px;font-size:10px}.ant-calendar-selected-day:not(.ant-picker-cell-disabled) .ant-picker-cell-inner{color:#fff!important;background-color:#2a7cff!important;border-color:#2a7cff}.ant-picker-time-panel-column{width:auto}.ant-picker-panel-container.ant-picker-time.ant-picker-week-number .ant-picker-panel{overflow-y:auto}year-table .ant-picker-cell>.ant-picker-cell-inner{min-width:unset;width:42px;height:32px;padding:0;line-height:32px}month-table .ant-picker-cell>.ant-picker-cell-inner{min-width:unset;width:42px;height:32px;padding:0;line-height:32px}.ant-calendar-header{margin-top:17px;margin-bottom:17px;border:none;height:17px;line-height:17px}.ant-calendar-header a{line-height:17px!important}.ant-calendar th{padding-top:0;padding-bottom:12px}.ant-picker-cell-inner:hover{background-color:#f6f7fb}.ant-picker-panel-container.ant-picker-week-number .ant-picker-week-panel .ant-picker-cell:not(.ant-picker-cell-selected):hover .ant-picker-cell-inner{background-color:#f6f7fb!important}.ant-calendar-picker-icon{color:#656c79;cursor:pointer}.ant-calendar-picker i svg{height:16px;width:16px}.ant-calendar-picker-clear,.ant-calendar-picker-icon{width:16px;height:16px}.ant-picker-cell-disabled.ant-picker-cell-today .ant-picker-cell-inner:before{width:30px;height:30px;left:0}.cmacs-timeline-range-popup calendar-footer{display:none}.ant-picker-cell-disabled.ant-calendar-selected-day .ant-picker-cell-inner:before{position:absolute;top:-1px;left:-1px;width:30px;height:30px}.ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner:before{content:unset}cmacs-date-picker,cmacs-week-picker,cmacs-month-picker,cmacs-year-picker,cmacs-range-picker,.datepickerwidth{width:100%}.datepickerwidth .ant-input-disabled,.datepickerwidth .ant-input[disabled]{background:#f6f7fb;cursor:default;border:1px solid #DEE0E5}.datepickerwidth .ant-input-disabled+.ant-calendar-picker-icon,.datepickerwidth .ant-input[disabled]+.ant-calendar-picker-icon{color:#bec4cd;cursor:default}.cmacs-open-date-picker-input,.cmacs-open-date-picker-input:hover,.cmacs-open-date-picker-input:focus{border-top-color:transparent!important;border-left-color:transparent!important;border-right-color:transparent!important;border-radius:unset}.cmacs-open-date-picker-icon,.ant-calendar-picker:hover .cmacs-open-date-picker-icon,.cmacs-open-date-picker:hover .ant-calendar-picker-clear{color:transparent!important;display:none!important;opacity:0!important}.cmacs-open-date-picker-input{padding:0;font-size:12px;height:0;color:transparent}.cmacs-open-date-picker-input .ant-calendar-range-picker-separator,.cmacs-open-date-picker:hover .ant-calendar-range-picker-input,.cmacs-open-date-picker-input .ant-calendar-range-picker-input{color:transparent}.ant-picker-today-btn,.ant-picker-now-btn{color:#2a7cff}.ant-picker-today-btn:hover,.ant-picker-now-btn:hover{color:#2164c9}.ant-picker-time-panel-column>li.ant-picker-time-panel-cell-selected .ant-picker-time-panel-cell-inner{color:#fff;background:#2a7cff}.ant-picker-time-panel-column:hover{overflow-y:auto;scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}.ant-picker-time-panel-column::-webkit-scrollbar{width:6px;height:6px}.ant-picker-time-panel-column::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}.ant-picker-time-panel-column::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsDatePickerComponent.prototype, "allowClear", void 0);
__decorate([
    InputBoolean()
], CmacsDatePickerComponent.prototype, "timeline", void 0);
__decorate([
    InputBoolean()
], CmacsDatePickerComponent.prototype, "autoFocus", void 0);
__decorate([
    InputBoolean()
], CmacsDatePickerComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsDatePickerComponent.prototype, "borderless", void 0);
__decorate([
    InputBoolean()
], CmacsDatePickerComponent.prototype, "inputReadOnly", void 0);
__decorate([
    InputBoolean()
], CmacsDatePickerComponent.prototype, "nzOpen", void 0);
__decorate([
    InputBoolean()
], CmacsDatePickerComponent.prototype, "cmacsOpen", void 0);
__decorate([
    InputBoolean()
], CmacsDatePickerComponent.prototype, "showToday", void 0);
__decorate([
    InputBoolean()
], CmacsDatePickerComponent.prototype, "showNow", void 0);
__decorate([
    WithConfig()
], CmacsDatePickerComponent.prototype, "separator", void 0);
__decorate([
    WithConfig()
], CmacsDatePickerComponent.prototype, "suffixIcon", void 0);
__decorate([
    InputBoolean()
], CmacsDatePickerComponent.prototype, "showWeekCustom", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsDatePickerComponent, [{
        type: Component,
        args: [{ encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: 'cmacs-date-picker,cmacs-week-picker,cmacs-month-picker,cmacs-year-picker,cmacs-range-picker', exportAs: 'cmacsDatePicker', template: `
    <div [style.width]="width">
        <ng-container *ngIf="cmacsOpen && !isRange">
          <div class="cmacs-open-date-title">
            {{openPickerTitle}}
          </div>
          <div class="cmacs-open-date-subtitle">
            {{openPickerSubtitle}}: <span class="cmacs-open-date-picker-placeholder" [class.cmacs-open-date-picker-selected-value]="value">
            {{value ? parseDate() : placeHolder}}</span>
          </div>
        </ng-container>

        <ng-container *ngIf="cmacsOpen && isRange">
          <div class="cmacs-open-date-title">
            {{openPickerTitle}}
          </div>
          <div class="cmacs-open-range-picker-left">
            <div class="cmacs-open-date-subtitle">
              {{openPickerLeftRangeSub}}: <span class="cmacs-open-date-picker-placeholder" [class.cmacs-open-date-picker-selected-value]="value && value.length">
            {{value && value.length ? parseDate()[0] : placeHolder}}</span>
            </div>
          </div>
          <div class="cmacs-open-range-picker-right">
            <div class="cmacs-open-date-subtitle">
              {{openPickerRightRangeSub}}: <span class="cmacs-open-date-picker-placeholder" [class.cmacs-open-date-picker-selected-value]="value && value.length">
            {{value && value.length ? parseDate()[1] : placeHolder}}</span>
            </div>
          </div>
        </ng-container>
    </div>
    <div
      cmacs-picker
      [isRange]="isRange"
      [open]="nzOpen"
      [timeline]="timeline"
      [cmacsOpen]="cmacsOpen"
      [dir]="dir"
      [separator]="separator"
      [disabled]="disabled"
      [inputReadOnly]="inputReadOnly"
      [format]="format"
      [allowClear]="allowClear"
      [autoFocus]="autoFocus"
      [placeholder]="placeHolder"
      style="display: inherit; align-items: center; width: 100%;"
      [dropdownClassName]="dropdownClassName"
      [class.ant-picker-dropdown-rtl]="dir === 'rtl'"
      [noAnimation]="!!noAnimation?.nzNoAnimation"
      [popupStyle]="popupStyle"
      [suffixIcon]="suffixIcon"
      (openChange)="nzOnOpenChange($event)"
      (focusChange)="onFocusChange($event)"
      [id]="nzId"
    >
      <date-range-popup
        [isRange]="isRange"
        [timeline]="timeline"
        [defaultPickerValue]="defaultPickerValue"
        [showWeek]="mode === 'week' || showWeekCustom"
        [showWeekCustom]="showWeekCustom"
        [panelMode]="panelMode"
        (panelModeChange)="onPanelModeChange($event)"
        (calendarChange)="nzOnCalendarChange($event)"
        [locale]="locale?.lang!"
        [showToday]="mode === 'date' && showToday && !isRange && !showTime"
        [showNow]="mode === 'date' && showNow && !isRange && !!showTime"
        [showTime]="showTime"
        [dateRender]="dateRender"
        [disabledDate]="disabledDate"
        [disabledTime]="disabledTime"
        [extraFooter]="extraFooter"
        [ranges]="ranges"
        [dir]="dir"
        (resultOk)="onResultOk()"
      ></date-range-popup>
    </div>
  `, host: {
                    '[class.ant-picker-range]': `isRange`,
                    '[class.ant-picker-large]': `size === 'large'`,
                    '[class.ant-picker-small]': `size === 'small'`,
                    '[class.ant-picker-disabled]': `disabled`,
                    '[class.ant-picker-rtl]': `dir === 'rtl'`,
                    '[class.ant-picker-borderless]': `borderless`,
                    '[class.cmacs-open-date-picker]': 'cmacsOpen',
                    '(click)': 'picker.onClickInputBox($event)'
                }, providers: [
                    DatePickerService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => CmacsDatePickerComponent)
                    }
                ], styles: [".ant-picker-suffix i{font-size:16px;color:#656c79}.ant-picker-dropdown-placement-topLeft,.ant-picker-dropdown-placement-topRight{top:3px!important;clip-path:inset(-10% -10% 0 -10%)!important;border-radius:3px 3px 0 0!important}.ant-picker-content td,.ant-picker-content th{border:none!important}.ant-picker-cell:before{left:2px!important}.ant-picker-datetime-panel .ant-picker-date-panel{display:inline-flex;font-size:12px}.ant-picker-content{border-collapse:separate;border-spacing:0px 8px}.ant-picker-content th{font-size:12px}.ant-picker-datetime-panel .ant-picker-time-panel{width:125px!important;display:inline-flex;font-size:12px}.ant-picker-time-panel .ant-picker-content{display:inline-flex}.ant-picker-cell-in-view.ant-picker-cell-in-range:before{background:#f3f3f4;height:30px}.ant-picker-cell{margin:3px 0}.ant-picker-cell-range-end.ant-picker-cell-in-view .ant-picker-cell-inner{background-color:#fff!important;color:#656c79!important;border:1px solid #2a7cff!important;font-weight:500!important;border-radius:3px!important}.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single):before,.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single):before{background:#f3f3f4;height:30px}.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover:before,.ant-picker-cell-in-view.ant-picker-cell-range-end.ant-picker-cell-range-hover:before,.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single).ant-picker-cell-range-hover-end:before,.ant-picker-cell-in-view.ant-picker-cell-range-start.ant-picker-cell-range-hover:before,.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single).ant-picker-cell-range-hover-start:before,.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end:before,.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start:before{background:#f3f3f4}.ant-picker-date-panel .ant-picker-content th{max-width:30px!important;max-height:30px!important;font-size:12px;width:auto!important;height:auto!important}.ant-picker-date-range-wrapper .ant-picker-panel{width:50%}.ant-picker-date-panel .ant-picker-content th{max-width:36px!important;width:auto!important}.ant-picker-week-panel .ant-picker-header-super-prev-btn,.ant-picker-week-panel .ant-picker-header-super-next-btn,.ant-picker-date-panel .ant-picker-header-super-prev-btn,.ant-picker-date-panel .ant-picker-header-super-next-btn{display:none!important}.ant-picker-cell-week{width:30px;height:30px;color:#656c79!important;font-weight:400!important;font-size:12px}.ant-picker-date-panel .ant-picker-content th{width:30px;height:30px;font-size:12px}.ant-picker-week-panel-row:not(.cmacs-picker-week-panel-row) .ant-picker-cell-in-view.ant-picker-cell-in-range:before{background:#bae7ff!important}.ant-picker-datetime-panel .ant-picker-time-panel-column:after{height:0}.ant-picker-super-next-icon:after,.ant-picker-super-prev-icon:after{content:unset}.ant-picker-input>input{color:#656c79}.ant-picker-separator i{display:none}.ant-picker-separator:after{content:\"~\"}.ant-picker-input>input-focused,.ant-picker-input>input:focus{border-color:transparent;border-right-width:1px!important;outline:0;box-shadow:none}.ant-picker-range .ant-picker-active-bar{background:transparent}.ant-picker-focused:not(.ant-picker-disabled),.ant-picker:not(.ant-picker-disabled):hover{border-color:#bec4cd!important;border-right-width:1px!important;box-shadow:none}.ant-picker-header>button{width:20px;font-size:14px;line-height:6px;height:20px;position:relative;border-radius:3px}.ant-picker-header>button:hover{background-color:#f6f7fb;color:#656c79}.ant-picker-super-next-icon:before{font-family:ArrowLarge!important;content:\"\\e916\"}.ant-picker-super-prev-icon:before{font-family:ArrowLarge!important;content:\"\\e915\"}.ant-picker-next-icon:before{font-family:ArrowLarge!important;content:\"\\e916\"}.ant-picker-prev-icon:before{font-family:ArrowLarge!important;content:\"\\e915\"}.ant-picker-decade-panel .ant-picker-cell-inner{line-height:2.5!important}.ant-picker-panel .ant-picker-footer{border-top:none;border-bottom:none;line-height:1.4;padding-bottom:14px}.ant-picker-ranges{line-height:24px}.ant-picker-date-panel .ant-picker-content{width:100%;margin-right:0}.ant-picker-content th{color:#97a0ae;padding:0;width:30px}.ant-picker-week-panel-row{margin-top:8px}.ant-picker-week-panel-row td{padding:0;width:30px;height:30px}.ant-picker-header-view button:hover{color:#2a7cff;text-decoration:underline}.ant-picker-next-icon:before,.ant-picker-prev-icon:before,.ant-picker-super-next-icon:before,.ant-picker-super-prev-icon:before{position:absolute;display:inline-block;width:20px;height:20px;font-size:20px;border-width:unset;border:none;color:#3b3f46;line-height:20px}.ant-picker-next-icon,.ant-picker-prev-icon,.ant-picker-super-prev-icon,.ant-picker-super-next-icon{transform:none;width:20px;height:20px}.ant-picker-week-panel-row-selected td{font-weight:700;background:#cde1ff;color:#656c79}.ant-picker-panel-container.ant-picker-week-number .ant-picker-week-panel-row-selected td{font-weight:700;background:#fff;color:#656c79}.ant-picker-cell-week{color:#97a0ae!important;font-weight:400!important}.ant-picker-week-panel-row-selected td .ant-picker-cell-inner{color:#656c79;font-weight:400}.ant-picker-week-panel-row:hover td,.ant-picker-week-panel-row-selected td,.ant-picker-week-panel-row-selected:hover td{background:#f6f7fb}.ant-picker-panel-container.ant-picker-week-number .ant-picker-week-panel-row:hover td,.ant-picker-panel-container.ant-picker-week-number.ant-picker-week-panel-row-selected td,.ant-picker-panel-container.ant-picker-week-number.ant-picker-week-panel-row-selected:hover td{background:#fff}.ant-picker-header{border-bottom:none;padding:17px 7px 6px}.ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner,.ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,.ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner{color:#fff;background:#2a7cff;border-radius:3px!important;font-family:Roboto-Medium;font-weight:500}.ant-picker-cell>.ant-picker-cell-inner{width:30px;height:30px;color:#656c79;font-size:13px;line-height:30px}.ant-picker-date-panel .ant-picker-body,.ant-picker-week-panel .ant-picker-body{padding:11px 7px}.ant-picker-week-panel-row-selected:hover td .ant-picker-cell-inner{color:#656c79}.ant-picker-week-panel .ant-picker-cell-selected .ant-picker-cell-inner,.ant-picker-week-panel .ant-picker-cell-selected:hover .ant-picker-cell-inner{color:#fff!important;background-color:#2a7cff!important;border-color:#2a7cff!important;font-weight:700;width:30px;height:30px}.cmacs-open-date-title{font-size:12px;font-weight:600;margin-bottom:10px}.cmacs-open-range-picker:hover .ant-calendar-range-picker-input{color:transparent}.cmacs-open-range-picker:hover .ant-calendar-picker-clear{opacity:0;display:none}.cmacs-open-date-subtitle{font-size:12px;color:#acb3bf;margin-bottom:10px}.cmacs-open-date-picker-placeholder{font-size:12px;font-weight:600;color:#acb3bf}.cmacs-open-date-picker-selected-value{color:#2a7cff}.cmacs-open-date-picker:hover .ant-calendar-picker-clear{opacity:0}.cmacs-open-range-picker-left,.cmacs-open-range-picker-right{display:inline-block}.cmacs-open-range-picker-right{float:right}.cmacs-open-range-picker-left{float:left}.ant-calendar-picker-input{box-shadow:none}.ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled){border-color:#bec4cd;color:#bec4cd}.ant-picker-cell-today:not(.ant-calendar-selected-day):not(.ant-picker-cell-disabled) .ant-picker-cell-inner{display:grid;margin:0 auto}.ant-picker-cell:not(.ant-picker-cell-in-view) .ant-picker-cell-inner{color:#acb3bf}.ant-picker-cell-in-view{color:#656c79}.ant-picker-cell:before{width:30px;height:30px}.ant-picker-header-view{line-height:20px;padding:0 11px}.ant-picker-header-view button{color:#3b3f46;line-height:20px;font-size:14px;font-family:Roboto-Medium;font-weight:500}.ant-picker-cell-today:not(.ant-calendar-selected-day):not(.ant-picker-cell-disabled) .ant-picker-cell-inner{background-color:transparent;border-color:transparent;color:#656c79}.ant-picker-cell-disabled .ant-picker-cell-inner{color:#acb3bf}.ant-picker-cell-disabled:before{background:none}.ant-picker-date-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-decade-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-month-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-quarter-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-year-panel .ant-picker-cell-disabled .ant-picker-cell-inner{background:#f3f3f4}.ant-picker-cell-in-view.ant-picker-cell-today:not(.ant-calendar-selected-day):not(.ant-picker-cell-disabled) .ant-picker-cell-inner:after{content:\"\\25cf\";color:#2a7cff;margin-top:-19px;font-size:10px}.ant-calendar-selected-day:not(.ant-picker-cell-disabled) .ant-picker-cell-inner{color:#fff!important;background-color:#2a7cff!important;border-color:#2a7cff}.ant-picker-time-panel-column{width:auto}.ant-picker-panel-container.ant-picker-time.ant-picker-week-number .ant-picker-panel{overflow-y:auto}year-table .ant-picker-cell>.ant-picker-cell-inner{min-width:unset;width:42px;height:32px;padding:0;line-height:32px}month-table .ant-picker-cell>.ant-picker-cell-inner{min-width:unset;width:42px;height:32px;padding:0;line-height:32px}.ant-calendar-header{margin-top:17px;margin-bottom:17px;border:none;height:17px;line-height:17px}.ant-calendar-header a{line-height:17px!important}.ant-calendar th{padding-top:0;padding-bottom:12px}.ant-picker-cell-inner:hover{background-color:#f6f7fb}.ant-picker-panel-container.ant-picker-week-number .ant-picker-week-panel .ant-picker-cell:not(.ant-picker-cell-selected):hover .ant-picker-cell-inner{background-color:#f6f7fb!important}.ant-calendar-picker-icon{color:#656c79;cursor:pointer}.ant-calendar-picker i svg{height:16px;width:16px}.ant-calendar-picker-clear,.ant-calendar-picker-icon{width:16px;height:16px}.ant-picker-cell-disabled.ant-picker-cell-today .ant-picker-cell-inner:before{width:30px;height:30px;left:0}.cmacs-timeline-range-popup calendar-footer{display:none}.ant-picker-cell-disabled.ant-calendar-selected-day .ant-picker-cell-inner:before{position:absolute;top:-1px;left:-1px;width:30px;height:30px}.ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner:before{content:unset}cmacs-date-picker,cmacs-week-picker,cmacs-month-picker,cmacs-year-picker,cmacs-range-picker,.datepickerwidth{width:100%}.datepickerwidth .ant-input-disabled,.datepickerwidth .ant-input[disabled]{background:#f6f7fb;cursor:default;border:1px solid #DEE0E5}.datepickerwidth .ant-input-disabled+.ant-calendar-picker-icon,.datepickerwidth .ant-input[disabled]+.ant-calendar-picker-icon{color:#bec4cd;cursor:default}.cmacs-open-date-picker-input,.cmacs-open-date-picker-input:hover,.cmacs-open-date-picker-input:focus{border-top-color:transparent!important;border-left-color:transparent!important;border-right-color:transparent!important;border-radius:unset}.cmacs-open-date-picker-icon,.ant-calendar-picker:hover .cmacs-open-date-picker-icon,.cmacs-open-date-picker:hover .ant-calendar-picker-clear{color:transparent!important;display:none!important;opacity:0!important}.cmacs-open-date-picker-input{padding:0;font-size:12px;height:0;color:transparent}.cmacs-open-date-picker-input .ant-calendar-range-picker-separator,.cmacs-open-date-picker:hover .ant-calendar-range-picker-input,.cmacs-open-date-picker-input .ant-calendar-range-picker-input{color:transparent}.ant-picker-today-btn,.ant-picker-now-btn{color:#2a7cff}.ant-picker-today-btn:hover,.ant-picker-now-btn:hover{color:#2164c9}.ant-picker-time-panel-column>li.ant-picker-time-panel-cell-selected .ant-picker-time-panel-cell-inner{color:#fff;background:#2a7cff}.ant-picker-time-panel-column:hover{overflow-y:auto;scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}.ant-picker-time-panel-column::-webkit-scrollbar{width:6px;height:6px}.ant-picker-time-panel-column::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}.ant-picker-time-panel-column::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}\n"] }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i2.DatePickerService }, { type: i3.NzI18nService }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i3.DateHelperService }, { type: i4.Directionality, decorators: [{
                type: Optional
            }] }, { type: i5.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { allowClear: [{
            type: Input
        }], timeline: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }], disabled: [{
            type: Input
        }], borderless: [{
            type: Input
        }], inputReadOnly: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], cmacsOpen: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], locale: [{
            type: Input
        }], placeHolder: [{
            type: Input
        }], popupStyle: [{
            type: Input
        }], dropdownClassName: [{
            type: Input
        }], size: [{
            type: Input
        }], format: [{
            type: Input
        }], dateRender: [{
            type: Input
        }], disabledTime: [{
            type: Input
        }], nzRenderExtraFooter: [{
            type: Input
        }], showToday: [{
            type: Input
        }], mode: [{
            type: Input
        }], showNow: [{
            type: Input
        }], ranges: [{
            type: Input
        }], defaultPickerValue: [{
            type: Input
        }], separator: [{
            type: Input
        }], suffixIcon: [{
            type: Input
        }], nzId: [{
            type: Input
        }], width: [{
            type: Input
        }], onPanelChange: [{
            type: Output
        }], onCalendarChange: [{
            type: Output
        }], onOk: [{
            type: Output
        }], onOpenChange: [{
            type: Output
        }], openPickerTitle: [{
            type: Input
        }], openPickerSubtitle: [{
            type: Input
        }], openPickerLeftRangeSub: [{
            type: Input
        }], openPickerRightRangeSub: [{
            type: Input
        }], picker: [{
            type: ViewChild,
            args: [CmacsPickerComponent, { static: true }]
        }], showTime: [{
            type: Input
        }], showWeekCustom: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBSU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQW1CLE1BQU0seUJBQXlCLENBQUM7QUFFaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVyRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcxRCxPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzFELE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7SUFrQnBCLDZCQUE0QztJQUMxQyw4QkFBbUM7SUFDakMsWUFDRjtJQUFBLGlCQUFNO0lBQ04sOEJBQXNDO0lBQ3BDLFlBQXdCO0lBQUEsK0JBQXVHO0lBQy9ILFlBQXFDO0lBQUEsaUJBQU8sRUFBQTtJQUVoRCwwQkFBZTs7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QUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFLYSxhQUFhO2tCQUEvQixNQUFNO1lBQ1ksZ0JBQWdCO2tCQUFsQyxNQUFNO1lBQ1ksSUFBSTtrQkFBdEIsTUFBTTtZQUNZLFlBQVk7a0JBQTlCLE1BQU07WUFFRSxlQUFlO2tCQUF2QixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csc0JBQXNCO2tCQUE5QixLQUFLO1lBQ0csdUJBQXVCO2tCQUEvQixLQUFLO1lBRTZDLE1BQU07a0JBQXhELFNBQVM7bUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBRXBDLFFBQVE7a0JBQXBCLEtBQUs7WUFLRixjQUFjO2tCQURqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSwgY2xvbmVEYXRlLCBDb21wYXRpYmxlVmFsdWUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgRnVuY3Rpb25Qcm9wLCBOelNhZmVBbnksIE9uQ2hhbmdlVHlwZSwgT25Ub3VjaGVkVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgdG9Cb29sZWFuLCB2YWx1ZUZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56RGF0ZVBpY2tlckkxOG5JbnRlcmZhY2UsIE56RGF0ZVBpY2tlckxhbmdJMThuSW50ZXJmYWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IE56Q29uZmlnS2V5LCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcclxuaW1wb3J0IHsgQ21hY3NQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3BpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wYXRpYmxlRGF0ZSwgRGlzYWJsZWRUaW1lRm4sIE56RGF0ZU1vZGUsIFByZXNldFJhbmdlcywgU3VwcG9ydFRpbWVPcHRpb25zIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XHJcblxyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBQT1BVUF9TVFlMRV9QQVRDSCA9IHsgcG9zaXRpb246ICdyZWxhdGl2ZScgfTsgLy9BaW0gdG8gb3ZlcnJpZGUgYW50ZCdzIHN0eWxlIHRvIHN1cHBvcnQgb3ZlcmxheSdzIHBvc2l0aW9uIHN0cmF0ZWd5IChwb3NpdGlvbjphYnNvbHV0ZSB3aWxsIGNhdXNlIGl0IG5vdCB3b3JraW5nIGJlYWN1c2UgdGhlIG92ZXJsYXkgY2FuJ3QgZ2V0IHRoZSBoZWlnaHQvd2lkdGggb2YgaXQncyBjb250ZW50KVxyXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ2RhdGVQaWNrZXInO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpEYXRlUGlja2VyU2l6ZVR5cGUgPSAnbGFyZ2UnIHwgJ2RlZmF1bHQnIHwgJ3NtYWxsJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBwaWNrZXIgZm9yIGFsbCBjb21tb24gQVBJc1xyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ2NtYWNzLWRhdGUtcGlja2VyLGNtYWNzLXdlZWstcGlja2VyLGNtYWNzLW1vbnRoLXBpY2tlcixjbWFjcy15ZWFyLXBpY2tlcixjbWFjcy1yYW5nZS1waWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NEYXRlUGlja2VyJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXRlLXBpY2tlci5jb21wb25lbnQuY3NzJ10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgW3N0eWxlLndpZHRoXT1cIndpZHRoXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzT3BlbiAmJiAhaXNSYW5nZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLW9wZW4tZGF0ZS10aXRsZVwiPlxyXG4gICAgICAgICAgICB7e29wZW5QaWNrZXJUaXRsZX19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1vcGVuLWRhdGUtc3VidGl0bGVcIj5cclxuICAgICAgICAgICAge3tvcGVuUGlja2VyU3VidGl0bGV9fTogPHNwYW4gY2xhc3M9XCJjbWFjcy1vcGVuLWRhdGUtcGlja2VyLXBsYWNlaG9sZGVyXCIgW2NsYXNzLmNtYWNzLW9wZW4tZGF0ZS1waWNrZXItc2VsZWN0ZWQtdmFsdWVdPVwidmFsdWVcIj5cclxuICAgICAgICAgICAge3t2YWx1ZSA/IHBhcnNlRGF0ZSgpIDogcGxhY2VIb2xkZXJ9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NPcGVuICYmIGlzUmFuZ2VcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1vcGVuLWRhdGUtdGl0bGVcIj5cclxuICAgICAgICAgICAge3tvcGVuUGlja2VyVGl0bGV9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtb3Blbi1yYW5nZS1waWNrZXItbGVmdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtb3Blbi1kYXRlLXN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAge3tvcGVuUGlja2VyTGVmdFJhbmdlU3VifX06IDxzcGFuIGNsYXNzPVwiY21hY3Mtb3Blbi1kYXRlLXBpY2tlci1wbGFjZWhvbGRlclwiIFtjbGFzcy5jbWFjcy1vcGVuLWRhdGUtcGlja2VyLXNlbGVjdGVkLXZhbHVlXT1cInZhbHVlICYmIHZhbHVlLmxlbmd0aFwiPlxyXG4gICAgICAgICAgICB7e3ZhbHVlICYmIHZhbHVlLmxlbmd0aCA/IHBhcnNlRGF0ZSgpWzBdIDogcGxhY2VIb2xkZXJ9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1vcGVuLXJhbmdlLXBpY2tlci1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtb3Blbi1kYXRlLXN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAge3tvcGVuUGlja2VyUmlnaHRSYW5nZVN1Yn19OiA8c3BhbiBjbGFzcz1cImNtYWNzLW9wZW4tZGF0ZS1waWNrZXItcGxhY2Vob2xkZXJcIiBbY2xhc3MuY21hY3Mtb3Blbi1kYXRlLXBpY2tlci1zZWxlY3RlZC12YWx1ZV09XCJ2YWx1ZSAmJiB2YWx1ZS5sZW5ndGhcIj5cclxuICAgICAgICAgICAge3t2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPyBwYXJzZURhdGUoKVsxXSA6IHBsYWNlSG9sZGVyfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXZcclxuICAgICAgY21hY3MtcGlja2VyXHJcbiAgICAgIFtpc1JhbmdlXT1cImlzUmFuZ2VcIlxyXG4gICAgICBbb3Blbl09XCJuek9wZW5cIlxyXG4gICAgICBbdGltZWxpbmVdPVwidGltZWxpbmVcIlxyXG4gICAgICBbY21hY3NPcGVuXT1cImNtYWNzT3BlblwiXHJcbiAgICAgIFtkaXJdPVwiZGlyXCJcclxuICAgICAgW3NlcGFyYXRvcl09XCJzZXBhcmF0b3JcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbaW5wdXRSZWFkT25seV09XCJpbnB1dFJlYWRPbmx5XCJcclxuICAgICAgW2Zvcm1hdF09XCJmb3JtYXRcIlxyXG4gICAgICBbYWxsb3dDbGVhcl09XCJhbGxvd0NsZWFyXCJcclxuICAgICAgW2F1dG9Gb2N1c109XCJhdXRvRm9jdXNcIlxyXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2VIb2xkZXJcIlxyXG4gICAgICBzdHlsZT1cImRpc3BsYXk6IGluaGVyaXQ7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHdpZHRoOiAxMDAlO1wiXHJcbiAgICAgIFtkcm9wZG93bkNsYXNzTmFtZV09XCJkcm9wZG93bkNsYXNzTmFtZVwiXHJcbiAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWRyb3Bkb3duLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcclxuICAgICAgW25vQW5pbWF0aW9uXT1cIiEhbm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICBbcG9wdXBTdHlsZV09XCJwb3B1cFN0eWxlXCJcclxuICAgICAgW3N1ZmZpeEljb25dPVwic3VmZml4SWNvblwiXHJcbiAgICAgIChvcGVuQ2hhbmdlKT1cIm56T25PcGVuQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAoZm9jdXNDaGFuZ2UpPVwib25Gb2N1c0NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgW2lkXT1cIm56SWRcIlxyXG4gICAgPlxyXG4gICAgICA8ZGF0ZS1yYW5nZS1wb3B1cFxyXG4gICAgICAgIFtpc1JhbmdlXT1cImlzUmFuZ2VcIlxyXG4gICAgICAgIFt0aW1lbGluZV09XCJ0aW1lbGluZVwiXHJcbiAgICAgICAgW2RlZmF1bHRQaWNrZXJWYWx1ZV09XCJkZWZhdWx0UGlja2VyVmFsdWVcIlxyXG4gICAgICAgIFtzaG93V2Vla109XCJtb2RlID09PSAnd2VlaycgfHwgc2hvd1dlZWtDdXN0b21cIlxyXG4gICAgICAgIFtzaG93V2Vla0N1c3RvbV09XCJzaG93V2Vla0N1c3RvbVwiXHJcbiAgICAgICAgW3BhbmVsTW9kZV09XCJwYW5lbE1vZGVcIlxyXG4gICAgICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwib25QYW5lbE1vZGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKGNhbGVuZGFyQ2hhbmdlKT1cIm56T25DYWxlbmRhckNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbbG9jYWxlXT1cImxvY2FsZT8ubGFuZyFcIlxyXG4gICAgICAgIFtzaG93VG9kYXldPVwibW9kZSA9PT0gJ2RhdGUnICYmIHNob3dUb2RheSAmJiAhaXNSYW5nZSAmJiAhc2hvd1RpbWVcIlxyXG4gICAgICAgIFtzaG93Tm93XT1cIm1vZGUgPT09ICdkYXRlJyAmJiBzaG93Tm93ICYmICFpc1JhbmdlICYmICEhc2hvd1RpbWVcIlxyXG4gICAgICAgIFtzaG93VGltZV09XCJzaG93VGltZVwiXHJcbiAgICAgICAgW2RhdGVSZW5kZXJdPVwiZGF0ZVJlbmRlclwiXHJcbiAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxyXG4gICAgICAgIFtkaXNhYmxlZFRpbWVdPVwiZGlzYWJsZWRUaW1lXCJcclxuICAgICAgICBbZXh0cmFGb290ZXJdPVwiZXh0cmFGb290ZXJcIlxyXG4gICAgICAgIFtyYW5nZXNdPVwicmFuZ2VzXCJcclxuICAgICAgICBbZGlyXT1cImRpclwiXHJcbiAgICAgICAgKHJlc3VsdE9rKT1cIm9uUmVzdWx0T2soKVwiXHJcbiAgICAgID48L2RhdGUtcmFuZ2UtcG9wdXA+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXBpY2tlci1yYW5nZV0nOiBgaXNSYW5nZWAsXHJcbiAgICAnW2NsYXNzLmFudC1waWNrZXItbGFyZ2VdJzogYHNpemUgPT09ICdsYXJnZSdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXNtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcclxuICAgICdbY2xhc3MuYW50LXBpY2tlci1kaXNhYmxlZF0nOiBgZGlzYWJsZWRgLFxyXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1waWNrZXItYm9yZGVybGVzc10nOiBgYm9yZGVybGVzc2AsXHJcbiAgICAnW2NsYXNzLmNtYWNzLW9wZW4tZGF0ZS1waWNrZXJdJzogJ2NtYWNzT3BlbicsXHJcbiAgICAnKGNsaWNrKSc6ICdwaWNrZXIub25DbGlja0lucHV0Qm94KCRldmVudCknXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIERhdGVQaWNrZXJTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzRGF0ZVBpY2tlckNvbXBvbmVudClcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0RhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTsgLy8gSW5kaWNhdGUgd2hldGhlciB0aGUgdmFsdWUgaXMgYSByYW5nZSB2YWx1ZVxyXG4gIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBleHRyYUZvb3Rlcj86IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBzdHJpbmc7XHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuXHJcbiAgcHVibGljIHBhbmVsTW9kZTogTnpEYXRlTW9kZSB8IE56RGF0ZU1vZGVbXSA9ICdkYXRlJztcclxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgaXNDdXN0b21QbGFjZUhvbGRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaXNDdXN0b21Gb3JtYXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIG56U2hvd1RpbWU6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLy8gLS0tIENvbW1vbiBBUElcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbGVhcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRpbWVsaW5lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJsZXNzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlucHV0UmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpPcGVuPzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY21hY3NPcGVuPzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU/OiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBsb2NhbGUhOiBOekRhdGVQaWNrZXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmcgfCBzdHJpbmdbXSA9ICcnO1xyXG4gIEBJbnB1dCgpIHBvcHVwU3R5bGU6IG9iamVjdCA9IFBPUFVQX1NUWUxFX1BBVENIO1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6IE56RGF0ZVBpY2tlclNpemVUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGZvcm1hdCE6IHN0cmluZztcclxuICBASW5wdXQoKSBkYXRlUmVuZGVyPzogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZyB8IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XHJcbiAgQElucHV0KCkgZGlzYWJsZWRUaW1lPzogRGlzYWJsZWRUaW1lRm47XHJcbiAgQElucHV0KCkgbnpSZW5kZXJFeHRyYUZvb3Rlcj86IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBzdHJpbmcgfCBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZz47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dUb2RheTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgbW9kZTogTnpEYXRlTW9kZSA9ICdkYXRlJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd05vdzogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgcmFuZ2VzPzogUHJlc2V0UmFuZ2VzO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRQaWNrZXJWYWx1ZTogQ29tcGF0aWJsZURhdGUgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIHNlcGFyYXRvcj86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIHN1ZmZpeEljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gPSAnaWNvblVJU21hbGwtQ2FsZW5kZXInO1xyXG4gIEBJbnB1dCgpIG56SWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgX3Nob3dXZWVrQ3VzdG9tID0gZmFsc2U7XHJcblxyXG4gIC8vIFRPRE8oQHdlbnFpNzMpIFRoZSBQYW5lbE1vZGUgbmVlZCBuYW1lZCBmb3IgZWFjaCBwaWNrZXJzIGFuZCBleHBvcnRcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25QYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpEYXRlTW9kZSB8IE56RGF0ZU1vZGVbXSB8IHN0cmluZyB8IHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNhbGVuZGFyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxEYXRlIHwgbnVsbD4+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uT2sgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBhdGlibGVEYXRlIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25PcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKSBvcGVuUGlja2VyVGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyU3VidGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyTGVmdFJhbmdlU3ViID0gJyc7XHJcbiAgQElucHV0KCkgb3BlblBpY2tlclJpZ2h0UmFuZ2VTdWIgPSAnJztcclxuXHJcbiAgQFZpZXdDaGlsZChDbWFjc1BpY2tlckNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgcGlja2VyITogQ21hY3NQaWNrZXJDb21wb25lbnQ7XHJcblxyXG4gIEBJbnB1dCgpIGdldCBzaG93VGltZSgpOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56U2hvd1RpbWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKClcclxuICBzZXQgc2hvd1dlZWtDdXN0b20odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Nob3dXZWVrQ3VzdG9tID0gKCghQXJyYXkuaXNBcnJheSh0aGlzLnBhbmVsTW9kZSkgJiYgdGhpcy5wYW5lbE1vZGUgIT09ICd3ZWVrJykgfHwgKEFycmF5LmlzQXJyYXkodGhpcy5wYW5lbE1vZGUpICYmIHRoaXMucGFuZWxNb2RlWzBdICE9PSAnd2VlaycpKTtcclxuICB9XHJcblxyXG4gIGdldCBzaG93V2Vla0N1c3RvbSgpIHtcclxuICAgIHJldHVybiAoKCFBcnJheS5pc0FycmF5KHRoaXMucGFuZWxNb2RlKSAmJiB0aGlzLnBhbmVsTW9kZSAhPT0gJ3dlZWsnKSB8fCAoQXJyYXkuaXNBcnJheSh0aGlzLnBhbmVsTW9kZSkgJiYgdGhpcy5wYW5lbE1vZGVbMF0gIT09ICd3ZWVrJykpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNob3dUaW1lKHZhbHVlOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBib29sZWFuKSB7XHJcbiAgICB0aGlzLm56U2hvd1RpbWUgPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VEYXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGU7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG1vbWVudChwYXJzZWRWYWx1ZS5uYXRpdmVEYXRlKS5sb2NhbGUobG9jYWxlKTtcclxuICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQobG9jYWxlID09PSAnZGUnID8gJ0RELiBNTU0gWVlZWScgOiBsb2NhbGUgPT09ICdqYScgPyAnWVlZWeW5tE3mnIhE5pelJyA6ICdNTU0gREQsIFlZWVknKTtcclxuICAgIH1cclxuICAgIGxldCBwYXJzZWRWYWx1ZXMgPSBbXTtcclxuICAgIGNvbnN0IGNvZXJjZVZhbHVlcyA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlW107XHJcblxyXG4gICAgZm9yIChsZXQgdmFsIG9mIGNvZXJjZVZhbHVlcykge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gdmFsIGFzIENhbmR5RGF0ZTtcclxuICAgICAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBtb21lbnQocGFyc2VkVmFsdWUubmF0aXZlRGF0ZSkubG9jYWxlKGxvY2FsZSk7XHJcbiAgICAgICAgcGFyc2VkVmFsdWVzLnB1c2goZGF0ZS5mb3JtYXQobG9jYWxlID09PSAnZGUnID8gJ0RELiBNTU0gWVlZWScgOiBsb2NhbGUgPT09ICdqYScgPyAnWVlZWeW5tE3mnIhE5pelJyA6ICdNTU0gREQsIFlZWVknKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VkVmFsdWVzO1xyXG59XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHVibGljIGRhdGVQaWNrZXJTZXJ2aWNlOiBEYXRlUGlja2VyU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcm90ZWN0ZWQgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtcGlja2VyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIFN1YnNjcmliZSB0aGUgZXZlcnkgbG9jYWxlIGNoYW5nZSBpZiB0aGUgbG9jYWxlIGlzIG5vdCBoYW5kbGVkIGJ5IHVzZXJcclxuICAgIGlmICghdGhpcy5sb2NhbGUpIHtcclxuICAgICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRMb2NhbGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pc1JhbmdlID0gdGhpcy5pc1JhbmdlO1xyXG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbml0VmFsdWUoKTtcclxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZW1pdFZhbHVlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKS5zdWJzY3JpYmUoXyA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZTtcclxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbml0aWFsVmFsdWUgPSBjbG9uZURhdGUodmFsdWUpO1xyXG4gICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgICAgY29uc3QgdkFzUmFuZ2UgPSB2YWx1ZSBhcyBDYW5keURhdGVbXTtcclxuICAgICAgICBpZiAodkFzUmFuZ2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oW3ZBc1JhbmdlWzBdPy5uYXRpdmVEYXRlID8/IG51bGwsIHZBc1JhbmdlWzFdPy5uYXRpdmVEYXRlID8/IG51bGxdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUZuKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oKHZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMub25DaGFuZ2VGbihudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vblRvdWNoZWRGbigpO1xyXG4gICAgICAvLyBXaGVuIHZhbHVlIGVtaXR0ZWQsIG92ZXJsYXkgd2lsbCBiZSBjbG9zZWRcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRNb2RlQW5kRm9ybWF0KCk7XHJcblxyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMucG9wdXBTdHlsZSkge1xyXG4gICAgICAvLyBBbHdheXMgYXNzaWduIHRoZSBwb3B1cCBzdHlsZSBwYXRjaFxyXG4gICAgICB0aGlzLnBvcHVwU3R5bGUgPSB0aGlzLnBvcHVwU3R5bGUgPyB7IC4uLnRoaXMucG9wdXBTdHlsZSwgLi4uUE9QVVBfU1RZTEVfUEFUQ0ggfSA6IFBPUFVQX1NUWUxFX1BBVENIO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1hcmsgYXMgY3VzdG9taXplZCBwbGFjZWhvbGRlciBieSB1c2VyIG9uY2UgcGxhY2VIb2xkZXIgYXNzaWduZWQgYXQgdGhlIGZpcnN0IHRpbWVcclxuICAgIGlmIChjaGFuZ2VzLnBsYWNlSG9sZGVyPy5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5pc0N1c3RvbVBsYWNlSG9sZGVyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5mb3JtYXQ/LmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmlzQ3VzdG9tRm9ybWF0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5sb2NhbGUpIHtcclxuICAgICAgLy8gVGhlIGxvY2FsZSBpcyBjdXJyZW50bHkgaGFuZGxlZCBieSB1c2VyXHJcbiAgICAgIHRoaXMuc2V0RGVmYXVsdFBsYWNlSG9sZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubnpSZW5kZXJFeHRyYUZvb3Rlcikge1xyXG4gICAgICB0aGlzLmV4dHJhRm9vdGVyID0gdmFsdWVGdW5jdGlvblByb3AodGhpcy5uelJlbmRlckV4dHJhRm9vdGVyISk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubW9kZSkge1xyXG4gICAgICB0aGlzLnNldERlZmF1bHRQbGFjZUhvbGRlcigpO1xyXG4gICAgICB0aGlzLnNldE1vZGVBbmRGb3JtYXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0TW9kZUFuZEZvcm1hdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlucHV0Rm9ybWF0czogeyBba2V5IGluIE56RGF0ZU1vZGVdPzogc3RyaW5nIH0gPSB7XHJcbiAgICAgICAgeWVhcjogJ3l5eXknLFxyXG4gICAgICAgIG1vbnRoOiB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ01NLnl5eXknIDogdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2phJyA/ICd5eXl55bm0TeaciCcgOiAnTU0veXl5eScsXHJcbiAgICAgICAgd2VlazogdGhpcy5pMThuLmdldERhdGVMb2NhbGUoKSA/ICdSUlJSLUlJJyA6XHJcbiAgICAgICAgICAgIHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnd3cueXl5eScgOiB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnamEnID8gJ3l5eXnlubRXd3fpgLEnIDogJ3d3L3l5eXknLFxyXG4gICAgICAgIGRhdGU6IHRoaXMuc2hvd1RpbWUgPyAodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/ICdkZC5NTS55eXl5IEhIOm1tOnNzJyA6IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdqYScgPyAneXl5eeW5tE3mnIhk5pelIEjmmYJt5YiGc+enkicgOiAnTU0vZGQveXl5eSBISDptbTpzcycpIDpcclxuICAgICAgICAgICAgKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnZGQuTU0ueXl5eScgOiB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnamEnID8gJ3l5eXnlubRN5pyIZOaXpScgOiAnTU0vZGQveXl5eScpXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghdGhpcy5tb2RlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlID0gJ2RhdGUnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFuZWxNb2RlID0gdGhpcy5pc1JhbmdlID8gW3RoaXMubW9kZSwgdGhpcy5tb2RlXSA6IHRoaXMubW9kZTtcclxuXHJcbiAgICAvLyBEZWZhdWx0IGZvcm1hdCB3aGVuIGl0J3MgZW1wdHlcclxuICAgIGlmICghdGhpcy5pc0N1c3RvbUZvcm1hdCkge1xyXG4gICAgICAgIHRoaXMuZm9ybWF0ID0gaW5wdXRGb3JtYXRzW3RoaXMubW9kZSBhcyBOekRhdGVNb2RlXSE7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlcmVkIHdoZW4gb3ZlcmxheU9wZW4gY2hhbmdlcyAoZGlmZmVyZW50IHdpdGggcmVhbE9wZW5TdGF0ZSlcclxuICAgKiBAcGFyYW0gb3BlbiBUaGUgb3ZlcmxheU9wZW4gaW4gcGlja2VyIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIG56T25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMub25PcGVuQ2hhbmdlLmVtaXQob3Blbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbigpOiB2b2lkIHtcclxuICAgIHRoaXMucGlja2VyLnNob3dPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBpY2tlci5oaWRlT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gfCBDb250cm9sIHZhbHVlIGFjY2Vzc29yIGltcGxlbWVudHNcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgLy8gTk9URTogb25DaGFuZ2VGbi9vblRvdWNoZWRGbiB3aWxsIG5vdCBiZSBhc3NpZ25lZCBpZiB1c2VyIG5vdCB1c2UgYXMgbmdNb2RlbFxyXG4gIG9uQ2hhbmdlRm46IE9uQ2hhbmdlVHlwZSA9ICgpID0+IHZvaWQgMDtcclxuICBvblRvdWNoZWRGbjogT25Ub3VjaGVkVHlwZSA9ICgpID0+IHZvaWQgMDtcclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogQ29tcGF0aWJsZURhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBPbkNoYW5nZVR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IE9uVG91Y2hlZFR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIHwgSW50ZXJuYWwgbWV0aG9kc1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAvLyBSZWxvYWQgbG9jYWxlIGZyb20gaTE4biB3aXRoIHNpZGUgZWZmZWN0c1xyXG4gIHByaXZhdGUgc2V0TG9jYWxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRGF0ZVBpY2tlcicsIHt9KTtcclxuICAgIHRoaXMuc2V0RGVmYXVsdFBsYWNlSG9sZGVyKCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RGVmYXVsdFBsYWNlSG9sZGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzQ3VzdG9tUGxhY2VIb2xkZXIgJiYgdGhpcy5sb2NhbGUpIHtcclxuICAgICAgY29uc3QgZGVmYXVsdFBsYWNlaG9sZGVyOiB7IFtrZXkgaW4gTnpEYXRlTW9kZV0/OiBzdHJpbmcgfSA9IHtcclxuICAgICAgICB5ZWFyOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3llYXJQbGFjZWhvbGRlcicpLFxyXG4gICAgICAgIG1vbnRoOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ21vbnRoUGxhY2Vob2xkZXInKSxcclxuICAgICAgICB3ZWVrOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3dlZWtQbGFjZWhvbGRlcicpLFxyXG4gICAgICAgIGRhdGU6IHRoaXMuZ2V0UHJvcGVydHlPZkxvY2FsZSgncGxhY2Vob2xkZXInKVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgZGVmYXVsdFJhbmdlUGxhY2Vob2xkZXI6IHsgW2tleSBpbiBOekRhdGVNb2RlXT86IHN0cmluZ1tdIH0gPSB7XHJcbiAgICAgICAgeWVhcjogdGhpcy5nZXRQcm9wZXJ0eU9mTG9jYWxlKCdyYW5nZVllYXJQbGFjZWhvbGRlcicpLFxyXG4gICAgICAgIG1vbnRoOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3JhbmdlTW9udGhQbGFjZWhvbGRlcicpLFxyXG4gICAgICAgIHdlZWs6IHRoaXMuZ2V0UHJvcGVydHlPZkxvY2FsZSgncmFuZ2VXZWVrUGxhY2Vob2xkZXInKSxcclxuICAgICAgICBkYXRlOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3JhbmdlUGxhY2Vob2xkZXInKVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5wbGFjZUhvbGRlciA9IHRoaXMuaXNSYW5nZVxyXG4gICAgICAgID8gZGVmYXVsdFJhbmdlUGxhY2Vob2xkZXJbdGhpcy5tb2RlIGFzIE56RGF0ZU1vZGVdIVxyXG4gICAgICAgIDogZGVmYXVsdFBsYWNlaG9sZGVyW3RoaXMubW9kZSBhcyBOekRhdGVNb2RlXSE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFByb3BlcnR5T2ZMb2NhbGU8VCBleHRlbmRzIGtleW9mIE56RGF0ZVBpY2tlckxhbmdJMThuSW50ZXJmYWNlPih0eXBlOiBUKTogTnpEYXRlUGlja2VyTGFuZ0kxOG5JbnRlcmZhY2VbVF0ge1xyXG4gICAgcmV0dXJuIHRoaXMubG9jYWxlLmxhbmdbdHlwZV0gfHwgdGhpcy5pMThuLmdldExvY2FsZURhdGEoYERhdGVQaWNrZXIubGFuZy4ke3R5cGV9YCk7XHJcbiAgfVxyXG5cclxuICAvLyBTYWZlIHdheSBvZiBzZXR0aW5nIHZhbHVlIHdpdGggZGVmYXVsdFxyXG4gIHByaXZhdGUgc2V0VmFsdWUodmFsdWU6IENvbXBhdGlibGVEYXRlKTogdm9pZCB7XHJcbiAgICBjb25zdCBuZXdWYWx1ZTogQ29tcGF0aWJsZVZhbHVlID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS5tYWtlVmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmluaXRpYWxWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1c0NoYW5nZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c2VkID0gdmFsdWU7XHJcbiAgICAvLyBUT0RPOiBhdm9pZCBhdXRvRm9jdXMgY2F1c2UgY2hhbmdlIGFmdGVyIGNoZWNrZWQgZXJyb3JcclxuICAgIGlmICh0aGlzLmZvY3VzZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1waWNrZXItZm9jdXNlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1waWNrZXItZm9jdXNlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QYW5lbE1vZGVDaGFuZ2UocGFuZWxNb2RlOiBOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uUGFuZWxDaGFuZ2UuZW1pdChwYW5lbE1vZGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gRW1pdCBvbkNhbGVuZGFyQ2hhbmdlIHdoZW4gc2VsZWN0IGRhdGUgYnkgbnotcmFuZ2UtcGlja2VyXHJcbiAgbnpPbkNhbGVuZGFyQ2hhbmdlKHZhbHVlOiBDb21wYXRpYmxlVmFsdWUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgY29uc3QgcmFuZ2VWYWx1ZSA9IHZhbHVlLmZpbHRlcih4ID0+IHggaW5zdGFuY2VvZiBDYW5keURhdGUpLm1hcCh4ID0+IHghLm5hdGl2ZURhdGUpO1xyXG4gICAgICB0aGlzLm9uQ2FsZW5kYXJDaGFuZ2UuZW1pdChyYW5nZVZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUmVzdWx0T2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSBhcyBDYW5keURhdGVbXTtcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMub25Pay5lbWl0KFt2YWx1ZVswXT8ubmF0aXZlRGF0ZSB8fCBudWxsLCB2YWx1ZVsxXT8ubmF0aXZlRGF0ZSB8fCBudWxsXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vbk9rLmVtaXQoW10pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMub25Pay5lbWl0KCh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vbk9rLmVtaXQobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19