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
import * as moment_ from 'moment';
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
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵtext(5);
    i0.ɵɵelementStart(6, "span", 5);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 7);
    i0.ɵɵelementStart(9, "div", 4);
    i0.ɵɵtext(10);
    i0.ɵɵelementStart(11, "span", 5);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
const moment = moment_;
const POPUP_STYLE_PATCH = { position: 'relative' }; // Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
const NZ_CONFIG_MODULE_NAME = 'datePicker';
/**
 * The base picker for all common APIs
 */
export class CmacsDatePickerComponent {
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
        this.autoFocus = false;
        this.disabled = false;
        this.borderless = false;
        this.showWeekCustom = false;
        this.inputReadOnly = false;
        this.placeHolder = '';
        this.popupStyle = POPUP_STYLE_PATCH;
        this.size = 'default';
        this.showToday = true;
        this.mode = 'date';
        this.showNow = true;
        this.defaultPickerValue = null;
        this.separator = undefined;
        this.suffixIcon = 'calendar';
        this.nzId = null;
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
    get showTime() {
        return this.nzShowTime;
    }
    set showTime(value) {
        this.nzShowTime = typeof value === 'object' ? value : toBoolean(value);
    }
    parseDate() {
        if (!this.isRange) {
            const parsedValue = this.datePickerService.value;
            const date = moment(parsedValue.nativeDate).locale(this.i18n.getLocale().locale);
            return date.format(this.i18n.getLocale().locale === 'de' ? 'DD. MMM YYYY' : 'MMM DD, YYYY');
        }
        let parsedValues = [];
        const coerceValues = this.datePickerService.value;
        for (let val of coerceValues) {
            const parsedValue = val;
            const date = moment(parsedValue.nativeDate).locale(this.i18n.getLocale().locale);
            parsedValues.push(date.format(this.i18n.getLocale().locale === 'de' ? 'DD. MMM YYYY' : 'MMM DD, YYYY'));
        }
        return parsedValues;
    }
    ngOnInit() {
        var _a;
        // Subscribe the every locale change if the locale is not handled by user
        if (!this.locale) {
            this.i18n.localeChange.pipe(takeUntil(this.destroyed$)).subscribe(() => this.setLocale());
        }
        // Default value
        this.datePickerService.isRange = this.isRange;
        this.datePickerService.initValue();
        this.datePickerService.emitValue$.pipe(takeUntil(this.destroyed$)).subscribe(_ => {
            var _a, _b, _c, _d;
            const value = this.datePickerService.value;
            this.datePickerService.initialValue = cloneDate(value);
            if (this.isRange) {
                const vAsRange = value;
                if (vAsRange.length) {
                    this.onChangeFn([(_b = (_a = vAsRange[0]) === null || _a === void 0 ? void 0 : _a.nativeDate) !== null && _b !== void 0 ? _b : null, (_d = (_c = vAsRange[1]) === null || _c === void 0 ? void 0 : _c.nativeDate) !== null && _d !== void 0 ? _d : null]);
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
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroyed$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        var _a, _b;
        if (changes.popupStyle) {
            // Always assign the popup style patch
            this.popupStyle = this.popupStyle ? Object.assign(Object.assign({}, this.popupStyle), POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once placeHolder assigned at the first time
        if ((_a = changes.placeHolder) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.isCustomPlaceHolder = true;
        }
        if ((_b = changes.format) === null || _b === void 0 ? void 0 : _b.currentValue) {
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
            month: 'yyyy-MM',
            week: this.i18n.getDateLocale() ? 'RRRR-II' : 'yyyy-ww',
            date: this.showTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd'
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
        var _a, _b;
        if (this.isRange) {
            const value = this.datePickerService.value;
            if (value.length) {
                this.onOk.emit([((_a = value[0]) === null || _a === void 0 ? void 0 : _a.nativeDate) || null, ((_b = value[1]) === null || _b === void 0 ? void 0 : _b.nativeDate) || null]);
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
}
CmacsDatePickerComponent.ɵfac = function CmacsDatePickerComponent_Factory(t) { return new (t || CmacsDatePickerComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i2.DatePickerService), i0.ɵɵdirectiveInject(i3.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.DateHelperService), i0.ɵɵdirectiveInject(i4.Directionality, 8), i0.ɵɵdirectiveInject(i5.NzNoAnimationDirective, 9)); };
CmacsDatePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsDatePickerComponent, selectors: [["cmacs-date-picker"], ["cmacs-week-picker"], ["cmacs-month-picker"], ["cmacs-year-picker"], ["cmacs-range-picker"]], viewQuery: function CmacsDatePickerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(CmacsPickerComponent, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.picker = _t.first);
    } }, hostVars: 14, hostBindings: function CmacsDatePickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CmacsDatePickerComponent_click_HostBindingHandler($event) { return ctx.picker.onClickInputBox($event); });
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-picker-range", ctx.isRange)("ant-picker-large", ctx.size === "large")("ant-picker-small", ctx.size === "small")("ant-picker-disabled", ctx.disabled)("ant-picker-rtl", ctx.dir === "rtl")("ant-picker-borderless", ctx.borderless)("cmacs-open-date-picker", ctx.cmacsOpen);
    } }, inputs: { allowClear: "allowClear", autoFocus: "autoFocus", disabled: "disabled", borderless: "borderless", showWeekCustom: "showWeekCustom", inputReadOnly: "inputReadOnly", nzOpen: "nzOpen", cmacsOpen: "cmacsOpen", disabledDate: "disabledDate", locale: "locale", placeHolder: "placeHolder", popupStyle: "popupStyle", dropdownClassName: "dropdownClassName", size: "size", format: "format", dateRender: "dateRender", disabledTime: "disabledTime", nzRenderExtraFooter: "nzRenderExtraFooter", showToday: "showToday", mode: "mode", showNow: "showNow", ranges: "ranges", defaultPickerValue: "defaultPickerValue", separator: "separator", suffixIcon: "suffixIcon", nzId: "nzId", width: "width", openPickerTitle: "openPickerTitle", openPickerSubtitle: "openPickerSubtitle", openPickerLeftRangeSub: "openPickerLeftRangeSub", openPickerRightRangeSub: "openPickerRightRangeSub", showTime: "showTime" }, outputs: { onPanelChange: "onPanelChange", onCalendarChange: "onCalendarChange", onOk: "onOk", onOpenChange: "onOpenChange" }, exportAs: ["cmacsDatePicker"], features: [i0.ɵɵProvidersFeature([
            DatePickerService,
            {
                provide: NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: forwardRef(() => CmacsDatePickerComponent)
            }
        ]), i0.ɵɵNgOnChangesFeature], decls: 5, vars: 37, consts: [[4, "ngIf"], ["cmacs-picker", "", 2, "display", "inherit", "align-items", "center", "width", "100%", 3, "isRange", "open", "cmacsOpen", "dir", "separator", "disabled", "inputReadOnly", "format", "allowClear", "autoFocus", "placeholder", "dropdownClassName", "popupStyle", "noAnimation", "suffixIcon", "id", "openChange", "focusChange"], [3, "isRange", "defaultPickerValue", "showWeek", "showWeekCustom", "panelMode", "locale", "showToday", "showNow", "showTime", "dateRender", "disabledDate", "disabledTime", "extraFooter", "ranges", "dir", "panelModeChange", "calendarChange", "resultOk"], [1, "cmacs-open-date-title"], [1, "cmacs-open-date-subtitle"], [1, "cmacs-open-date-picker-placeholder"], [1, "cmacs-open-range-picker-left"], [1, "cmacs-open-range-picker-right"]], template: function CmacsDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, CmacsDatePickerComponent_ng_container_1_Template, 7, 5, "ng-container", 0);
        i0.ɵɵtemplate(2, CmacsDatePickerComponent_ng_container_2_Template, 13, 9, "ng-container", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵlistener("openChange", function CmacsDatePickerComponent_Template_div_openChange_3_listener($event) { return ctx.nzOnOpenChange($event); })("focusChange", function CmacsDatePickerComponent_Template_div_focusChange_3_listener($event) { return ctx.onFocusChange($event); });
        i0.ɵɵelementStart(4, "date-range-popup", 2);
        i0.ɵɵlistener("panelModeChange", function CmacsDatePickerComponent_Template_date_range_popup_panelModeChange_4_listener($event) { return ctx.onPanelModeChange($event); })("calendarChange", function CmacsDatePickerComponent_Template_date_range_popup_calendarChange_4_listener($event) { return ctx.nzOnCalendarChange($event); })("resultOk", function CmacsDatePickerComponent_Template_date_range_popup_resultOk_4_listener() { return ctx.onResultOk(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.width);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.cmacsOpen && !ctx.isRange);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.cmacsOpen && ctx.isRange);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("ant-picker-dropdown-rtl", ctx.dir === "rtl");
        i0.ɵɵproperty("isRange", ctx.isRange)("open", ctx.nzOpen)("cmacsOpen", ctx.cmacsOpen)("dir", ctx.dir)("separator", ctx.separator)("disabled", ctx.disabled)("inputReadOnly", ctx.inputReadOnly)("format", ctx.format)("allowClear", ctx.allowClear)("autoFocus", ctx.autoFocus)("placeholder", ctx.placeHolder)("dropdownClassName", ctx.dropdownClassName)("popupStyle", ctx.popupStyle)("noAnimation", !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("suffixIcon", ctx.suffixIcon)("id", ctx.nzId);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("isRange", ctx.isRange)("defaultPickerValue", ctx.defaultPickerValue)("showWeek", ctx.mode === "week" || ctx.showWeekCustom)("showWeekCustom", ctx.showWeekCustom)("panelMode", ctx.panelMode)("locale", ctx.locale == null ? null : ctx.locale.lang)("showToday", ctx.mode === "date" && ctx.showToday && !ctx.isRange && !ctx.showTime)("showNow", ctx.mode === "date" && ctx.showNow && !ctx.isRange && !!ctx.showTime)("showTime", ctx.showTime)("dateRender", ctx.dateRender)("disabledDate", ctx.disabledDate)("disabledTime", ctx.disabledTime)("extraFooter", ctx.extraFooter)("ranges", ctx.ranges)("dir", ctx.dir);
    } }, directives: [i6.NgIf, i7.CmacsPickerComponent, i4.Dir, i8.DateRangePopupComponent], styles: [".ant-picker-date-panel{width:308px}.cmacs-open-date-title{font-size:12px;font-weight:600;margin-bottom:10px}.cmacs-open-range-picker:hover .ant-calendar-range-picker-input{color:transparent}.cmacs-open-range-picker:hover .ant-calendar-picker-clear{opacity:0;display:none}.cmacs-open-date-subtitle{font-size:12px;color:#acb3bf;margin-bottom:10px}.cmacs-open-date-picker-placeholder{font-size:12px;font-weight:600;color:#acb3bf}.cmacs-open-date-picker-selected-value{color:#2a7cff}.cmacs-open-date-picker:hover .ant-calendar-picker-clear{opacity:0}.cmacs-open-range-picker-left,.cmacs-open-range-picker-right{display:inline-block}.cmacs-open-range-picker-right{float:right}.cmacs-open-range-picker-left{float:left}.ant-calendar-picker-input{box-shadow:none}.ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled){border-color:#bec4cd;color:#bec4cd}.ant-picker-cell-inner{padding-top:2px}.ant-picker-cell-today:not(.ant-calendar-selected-day):not(.ant-picker-cell-disabled) .ant-picker-cell-inner{display:grid;background-color:transparent;border-color:transparent;color:rgba(0,0,0,.65)}.ant-picker-cell-today:not(.ant-calendar-selected-day):not(.ant-picker-cell-disabled) .ant-picker-cell-inner:after{content:\"\u25CF\";color:#2a7cff;margin-top:-13px;font-size:10px}.ant-calendar-selected-day:not(.ant-picker-cell-disabled) .ant-picker-cell-inner{color:#fff!important;background-color:#2a7cff!important;border-color:#2a7cff}.ant-picker-cell>.ant-picker-cell-inner{min-width:30px;height:30px}.ant-calendar-header{margin-top:17px;margin-bottom:17px;border:none;height:17px;line-height:17px}.ant-calendar-header a{line-height:17px!important}.ant-calendar th{padding-top:0;padding-bottom:12px}.ant-picker-cell-inner:hover{background-color:#f6f7fb}.ant-calendar-picker-icon{color:#656c79;cursor:pointer}.ant-calendar-picker-clear,.ant-calendar-picker-icon,.ant-calendar-picker i svg{height:16px;width:16px}.ant-picker-cell-disabled.ant-picker-cell-today .ant-picker-cell-inner:before{width:30px;height:30px;left:0}.cmacs-timeline-range-popup calendar-footer{display:none}.ant-picker-cell-disabled.ant-calendar-selected-day .ant-picker-cell-inner:before{position:absolute;top:-1px;left:-1px;width:30px;height:30px}.ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner:before{content:unset}.datepickerwidth,cmacs-date-picker,cmacs-month-picker,cmacs-range-picker,cmacs-week-picker,cmacs-year-picker{width:100%}.datepickerwidth .ant-input-disabled,.datepickerwidth .ant-input[disabled]{background:#f6f7fb;cursor:default;border:1px solid #dee0e5}.datepickerwidth .ant-input-disabled+.ant-calendar-picker-icon,.datepickerwidth .ant-input[disabled]+.ant-calendar-picker-icon{color:#bec4cd;cursor:default}.cmacs-open-date-picker-input,.cmacs-open-date-picker-input:focus,.cmacs-open-date-picker-input:hover{border-top-color:transparent!important;border-left-color:transparent!important;border-right-color:transparent!important;border-radius:unset}.ant-calendar-picker:hover .cmacs-open-date-picker-icon,.cmacs-open-date-picker-icon,.cmacs-open-date-picker:hover .ant-calendar-picker-clear{color:transparent!important;display:none!important;opacity:0!important}.cmacs-open-date-picker-input{padding:0;font-size:12px;height:0;color:transparent}.cmacs-open-date-picker-input .ant-calendar-range-picker-input,.cmacs-open-date-picker-input .ant-calendar-range-picker-separator,.cmacs-open-date-picker:hover .ant-calendar-range-picker-input{color:transparent}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsDatePickerComponent.prototype, "allowClear", void 0);
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
], CmacsDatePickerComponent.prototype, "showWeekCustom", void 0);
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsDatePickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'cmacs-date-picker,cmacs-week-picker,cmacs-month-picker,cmacs-year-picker,cmacs-range-picker',
                exportAs: 'cmacsDatePicker',
                styleUrls: ['./date-picker.component.css'],
                template: `
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
      [popupStyle]="popupStyle"
      [noAnimation]="!!noAnimation?.nzNoAnimation"
      [suffixIcon]="suffixIcon"
      (openChange)="nzOnOpenChange($event)"
      (focusChange)="onFocusChange($event)"
      [id]="nzId"
    >
      <date-range-popup
        [isRange]="isRange"
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
  `,
                host: {
                    '[class.ant-picker-range]': `isRange`,
                    '[class.ant-picker-large]': `size === 'large'`,
                    '[class.ant-picker-small]': `size === 'small'`,
                    '[class.ant-picker-disabled]': `disabled`,
                    '[class.ant-picker-rtl]': `dir === 'rtl'`,
                    '[class.ant-picker-borderless]': `borderless`,
                    '[class.cmacs-open-date-picker]': 'cmacsOpen',
                    '(click)': 'picker.onClickInputBox($event)'
                },
                providers: [
                    DatePickerService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => CmacsDatePickerComponent)
                    }
                ]
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i2.DatePickerService }, { type: i3.NzI18nService }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i3.DateHelperService }, { type: i4.Directionality, decorators: [{
                type: Optional
            }] }, { type: i5.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { allowClear: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }], disabled: [{
            type: Input
        }], borderless: [{
            type: Input
        }], showWeekCustom: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBSU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQW1CLE1BQU0seUJBQXlCLENBQUM7QUFFaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVyRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcxRCxPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzFELE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7OztJQW1CMUIsNkJBQTRDO0lBQzFDLDhCQUFtQztJQUNqQyxZQUNGO0lBQUEsaUJBQU07SUFDTiw4QkFBc0M7SUFDcEMsWUFBd0I7SUFBQSwrQkFBdUc7SUFDL0gsWUFBcUM7SUFBQSxpQkFBTztJQUM5QyxpQkFBTTtJ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TSxFQUFFLElBQUksRUFBRTtZQUVwQyxRQUFRO2tCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBDYW5keURhdGUsIGNsb25lRGF0ZSwgQ29tcGF0aWJsZVZhbHVlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBGdW5jdGlvblByb3AsIE56U2FmZUFueSwgT25DaGFuZ2VUeXBlLCBPblRvdWNoZWRUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgdG9Cb29sZWFuLCB2YWx1ZUZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekRhdGVQaWNrZXJJMThuSW50ZXJmYWNlLCBOekRhdGVQaWNrZXJMYW5nSTE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZGF0ZS1waWNrZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBDbWFjc1BpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wYXRpYmxlRGF0ZSwgRGlzYWJsZWRUaW1lRm4sIE56RGF0ZU1vZGUsIFByZXNldFJhbmdlcywgU3VwcG9ydFRpbWVPcHRpb25zIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XG5cbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcblxuY29uc3QgUE9QVVBfU1RZTEVfUEFUQ0ggPSB7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH07IC8vIEFpbSB0byBvdmVycmlkZSBhbnRkJ3Mgc3R5bGUgdG8gc3VwcG9ydCBvdmVybGF5J3MgcG9zaXRpb24gc3RyYXRlZ3kgKHBvc2l0aW9uOmFic29sdXRlIHdpbGwgY2F1c2UgaXQgbm90IHdvcmtpbmcgYmVhY3VzZSB0aGUgb3ZlcmxheSBjYW4ndCBnZXQgdGhlIGhlaWdodC93aWR0aCBvZiBpdCdzIGNvbnRlbnQpXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ2RhdGVQaWNrZXInO1xuXG5leHBvcnQgdHlwZSBOekRhdGVQaWNrZXJTaXplVHlwZSA9ICdsYXJnZScgfCAnZGVmYXVsdCcgfCAnc21hbGwnO1xuXG4vKipcbiAqIFRoZSBiYXNlIHBpY2tlciBmb3IgYWxsIGNvbW1vbiBBUElzXG4gKi9cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICdjbWFjcy1kYXRlLXBpY2tlcixjbWFjcy13ZWVrLXBpY2tlcixjbWFjcy1tb250aC1waWNrZXIsY21hY3MteWVhci1waWNrZXIsY21hY3MtcmFuZ2UtcGlja2VyJyxcbiAgZXhwb3J0QXM6ICdjbWFjc0RhdGVQaWNrZXInLFxuICBzdHlsZVVybHM6IFsnLi9kYXRlLXBpY2tlci5jb21wb25lbnQuY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbc3R5bGUud2lkdGhdPVwid2lkdGhcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzT3BlbiAmJiAhaXNSYW5nZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLW9wZW4tZGF0ZS10aXRsZVwiPlxyXG4gICAgICAgICAgICB7e29wZW5QaWNrZXJUaXRsZX19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1vcGVuLWRhdGUtc3VidGl0bGVcIj5cclxuICAgICAgICAgICAge3tvcGVuUGlja2VyU3VidGl0bGV9fTogPHNwYW4gY2xhc3M9XCJjbWFjcy1vcGVuLWRhdGUtcGlja2VyLXBsYWNlaG9sZGVyXCIgW2NsYXNzLmNtYWNzLW9wZW4tZGF0ZS1waWNrZXItc2VsZWN0ZWQtdmFsdWVdPVwidmFsdWVcIj5cclxuICAgICAgICAgICAge3t2YWx1ZSA/IHBhcnNlRGF0ZSgpIDogcGxhY2VIb2xkZXJ9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NPcGVuICYmIGlzUmFuZ2VcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1vcGVuLWRhdGUtdGl0bGVcIj5cclxuICAgICAgICAgICAge3tvcGVuUGlja2VyVGl0bGV9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtb3Blbi1yYW5nZS1waWNrZXItbGVmdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtb3Blbi1kYXRlLXN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAge3tvcGVuUGlja2VyTGVmdFJhbmdlU3VifX06IDxzcGFuIGNsYXNzPVwiY21hY3Mtb3Blbi1kYXRlLXBpY2tlci1wbGFjZWhvbGRlclwiIFtjbGFzcy5jbWFjcy1vcGVuLWRhdGUtcGlja2VyLXNlbGVjdGVkLXZhbHVlXT1cInZhbHVlICYmIHZhbHVlLmxlbmd0aFwiPlxyXG4gICAgICAgICAgICB7e3ZhbHVlICYmIHZhbHVlLmxlbmd0aCA/IHBhcnNlRGF0ZSgpWzBdIDogcGxhY2VIb2xkZXJ9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1vcGVuLXJhbmdlLXBpY2tlci1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtb3Blbi1kYXRlLXN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAge3tvcGVuUGlja2VyUmlnaHRSYW5nZVN1Yn19OiA8c3BhbiBjbGFzcz1cImNtYWNzLW9wZW4tZGF0ZS1waWNrZXItcGxhY2Vob2xkZXJcIiBbY2xhc3MuY21hY3Mtb3Blbi1kYXRlLXBpY2tlci1zZWxlY3RlZC12YWx1ZV09XCJ2YWx1ZSAmJiB2YWx1ZS5sZW5ndGhcIj5cclxuICAgICAgICAgICAge3t2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPyBwYXJzZURhdGUoKVsxXSA6IHBsYWNlSG9sZGVyfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY21hY3MtcGlja2VyXG4gICAgICBbaXNSYW5nZV09XCJpc1JhbmdlXCJcbiAgICAgIFtvcGVuXT1cIm56T3BlblwiXG4gICAgICBbY21hY3NPcGVuXT1cImNtYWNzT3BlblwiXG4gICAgICBbZGlyXT1cImRpclwiXG4gICAgICBbc2VwYXJhdG9yXT1cInNlcGFyYXRvclwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW2lucHV0UmVhZE9ubHldPVwiaW5wdXRSZWFkT25seVwiXG4gICAgICBbZm9ybWF0XT1cImZvcm1hdFwiXG4gICAgICBbYWxsb3dDbGVhcl09XCJhbGxvd0NsZWFyXCJcbiAgICAgIFthdXRvRm9jdXNdPVwiYXV0b0ZvY3VzXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZUhvbGRlclwiXG4gICAgICBzdHlsZT1cImRpc3BsYXk6IGluaGVyaXQ7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHdpZHRoOiAxMDAlO1wiXG4gICAgICBbZHJvcGRvd25DbGFzc05hbWVdPVwiZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxuICAgICAgW3BvcHVwU3R5bGVdPVwicG9wdXBTdHlsZVwiXG4gICAgICBbbm9BbmltYXRpb25dPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICBbc3VmZml4SWNvbl09XCJzdWZmaXhJY29uXCJcbiAgICAgIChvcGVuQ2hhbmdlKT1cIm56T25PcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgKGZvY3VzQ2hhbmdlKT1cIm9uRm9jdXNDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbaWRdPVwibnpJZFwiXG4gICAgPlxuICAgICAgPGRhdGUtcmFuZ2UtcG9wdXBcbiAgICAgICAgW2lzUmFuZ2VdPVwiaXNSYW5nZVwiXG4gICAgICAgIFtkZWZhdWx0UGlja2VyVmFsdWVdPVwiZGVmYXVsdFBpY2tlclZhbHVlXCJcbiAgICAgICAgW3Nob3dXZWVrXT1cIm1vZGUgPT09ICd3ZWVrJyB8fCBzaG93V2Vla0N1c3RvbVwiXG4gICAgICAgIFtzaG93V2Vla0N1c3RvbV09XCJzaG93V2Vla0N1c3RvbVwiXG4gICAgICAgIFtwYW5lbE1vZGVdPVwicGFuZWxNb2RlXCJcbiAgICAgICAgKHBhbmVsTW9kZUNoYW5nZSk9XCJvblBhbmVsTW9kZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgKGNhbGVuZGFyQ2hhbmdlKT1cIm56T25DYWxlbmRhckNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW2xvY2FsZV09XCJsb2NhbGU/LmxhbmchXCJcbiAgICAgICAgW3Nob3dUb2RheV09XCJtb2RlID09PSAnZGF0ZScgJiYgc2hvd1RvZGF5ICYmICFpc1JhbmdlICYmICFzaG93VGltZVwiXG4gICAgICAgIFtzaG93Tm93XT1cIm1vZGUgPT09ICdkYXRlJyAmJiBzaG93Tm93ICYmICFpc1JhbmdlICYmICEhc2hvd1RpbWVcIlxuICAgICAgICBbc2hvd1RpbWVdPVwic2hvd1RpbWVcIlxuICAgICAgICBbZGF0ZVJlbmRlcl09XCJkYXRlUmVuZGVyXCJcbiAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxuICAgICAgICBbZGlzYWJsZWRUaW1lXT1cImRpc2FibGVkVGltZVwiXG4gICAgICAgIFtleHRyYUZvb3Rlcl09XCJleHRyYUZvb3RlclwiXG4gICAgICAgIFtyYW5nZXNdPVwicmFuZ2VzXCJcbiAgICAgICAgW2Rpcl09XCJkaXJcIlxuICAgICAgICAocmVzdWx0T2spPVwib25SZXN1bHRPaygpXCJcbiAgICAgID48L2RhdGUtcmFuZ2UtcG9wdXA+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1waWNrZXItcmFuZ2VdJzogYGlzUmFuZ2VgLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci1sYXJnZV0nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2AsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXNtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItZGlzYWJsZWRdJzogYGRpc2FibGVkYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItYm9yZGVybGVzc10nOiBgYm9yZGVybGVzc2AsXG4gICAgJ1tjbGFzcy5jbWFjcy1vcGVuLWRhdGUtcGlja2VyXSc6ICdjbWFjc09wZW4nLFxuICAgICcoY2xpY2spJzogJ3BpY2tlci5vbkNsaWNrSW5wdXRCb3goJGV2ZW50KSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRGF0ZVBpY2tlclNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzRGF0ZVBpY2tlckNvbXBvbmVudClcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTsgLy8gSW5kaWNhdGUgd2hldGhlciB0aGUgdmFsdWUgaXMgYSByYW5nZSB2YWx1ZVxuICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIGV4dHJhRm9vdGVyPzogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZztcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBwdWJsaWMgcGFuZWxNb2RlOiBOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdID0gJ2RhdGUnO1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGlzQ3VzdG9tUGxhY2VIb2xkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc0N1c3RvbUZvcm1hdDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIG56U2hvd1RpbWU6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyAtLS0gQ29tbW9uIEFQSVxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbGVhcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJsZXNzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93V2Vla0N1c3RvbTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5wdXRSZWFkT25seTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpPcGVuPzogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzT3Blbj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZT86IChkOiBEYXRlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBsb2NhbGUhOiBOekRhdGVQaWNrZXJJMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSBwbGFjZUhvbGRlcjogc3RyaW5nIHwgc3RyaW5nW10gPSAnJztcbiAgQElucHV0KCkgcG9wdXBTdHlsZTogb2JqZWN0ID0gUE9QVVBfU1RZTEVfUEFUQ0g7XG4gIEBJbnB1dCgpIGRyb3Bkb3duQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBOekRhdGVQaWNrZXJTaXplVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgZm9ybWF0ITogc3RyaW5nO1xuICBASW5wdXQoKSBkYXRlUmVuZGVyPzogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZyB8IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIGRpc2FibGVkVGltZT86IERpc2FibGVkVGltZUZuO1xuICBASW5wdXQoKSBuelJlbmRlckV4dHJhRm9vdGVyPzogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZyB8IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgc3RyaW5nPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dUb2RheTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG1vZGU6IE56RGF0ZU1vZGUgPSAnZGF0ZSc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93Tm93OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgcmFuZ2VzPzogUHJlc2V0UmFuZ2VzO1xuICBASW5wdXQoKSBkZWZhdWx0UGlja2VyVmFsdWU6IENvbXBhdGlibGVEYXRlIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgc2VwYXJhdG9yPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIHN1ZmZpeEljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gPSAnY2FsZW5kYXInO1xuICBASW5wdXQoKSBueklkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgd2lkdGg6IGFueTtcblxuICAvLyBUT0RPKEB3ZW5xaTczKSBUaGUgUGFuZWxNb2RlIG5lZWQgbmFtZWQgZm9yIGVhY2ggcGlja2VycyBhbmQgZXhwb3J0XG4gIEBPdXRwdXQoKSByZWFkb25seSBvblBhbmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdIHwgc3RyaW5nIHwgc3RyaW5nW10+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNhbGVuZGFyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxEYXRlIHwgbnVsbD4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBvbk9rID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlRGF0ZSB8IG51bGw+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBvbk9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkgb3BlblBpY2tlclRpdGxlID0gJyc7XHJcbiAgQElucHV0KCkgb3BlblBpY2tlclN1YnRpdGxlID0gJyc7XHJcbiAgQElucHV0KCkgb3BlblBpY2tlckxlZnRSYW5nZVN1YiA9ICcnO1xyXG4gIEBJbnB1dCgpIG9wZW5QaWNrZXJSaWdodFJhbmdlU3ViID0gJyc7XG5cbiAgQFZpZXdDaGlsZChDbWFjc1BpY2tlckNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgcGlja2VyITogQ21hY3NQaWNrZXJDb21wb25lbnQ7XG5cbiAgQElucHV0KCkgZ2V0IHNob3dUaW1lKCk6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56U2hvd1RpbWU7XG4gIH1cblxuICBzZXQgc2hvd1RpbWUodmFsdWU6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW4pIHtcbiAgICB0aGlzLm56U2hvd1RpbWUgPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgcGFyc2VEYXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgcGFyc2VkVmFsdWUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZTtcclxuICAgICAgY29uc3QgZGF0ZSA9IG1vbWVudChwYXJzZWRWYWx1ZS5uYXRpdmVEYXRlKS5sb2NhbGUodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSk7XHJcbiAgICAgIHJldHVybiBkYXRlLmZvcm1hdCh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ0RELiBNTU0gWVlZWScgOiAnTU1NIERELCBZWVlZJyk7XHJcbiAgICB9XHJcbiAgICBsZXQgcGFyc2VkVmFsdWVzID0gW107XHJcbiAgICBjb25zdCBjb2VyY2VWYWx1ZXMgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG5cclxuICAgIGZvciAobGV0IHZhbCBvZiBjb2VyY2VWYWx1ZXMpIHtcclxuICAgICAgY29uc3QgcGFyc2VkVmFsdWUgPSB2YWwgYXMgQ2FuZHlEYXRlO1xyXG4gICAgICBjb25zdCBkYXRlID0gbW9tZW50KHBhcnNlZFZhbHVlLm5hdGl2ZURhdGUpLmxvY2FsZSh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKTtcclxuICAgICAgcGFyc2VkVmFsdWVzLnB1c2goZGF0ZS5mb3JtYXQodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/ICdERC4gTU1NIFlZWVknIDogJ01NTSBERCwgWVlZWScpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZWRWYWx1ZXM7XHJcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwdWJsaWMgZGF0ZVBpY2tlclNlcnZpY2U6IERhdGVQaWNrZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBpMThuOiBOekkxOG5TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtcGlja2VyJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBTdWJzY3JpYmUgdGhlIGV2ZXJ5IGxvY2FsZSBjaGFuZ2UgaWYgdGhlIGxvY2FsZSBpcyBub3QgaGFuZGxlZCBieSB1c2VyXG4gICAgaWYgKCF0aGlzLmxvY2FsZSkge1xuICAgICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRMb2NhbGUoKSk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaXNSYW5nZSA9IHRoaXMuaXNSYW5nZTtcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmluaXRWYWx1ZSgpO1xuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZW1pdFZhbHVlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKS5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWU7XG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmluaXRpYWxWYWx1ZSA9IGNsb25lRGF0ZSh2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICAgIGNvbnN0IHZBc1JhbmdlID0gdmFsdWUgYXMgQ2FuZHlEYXRlW107XG4gICAgICAgIGlmICh2QXNSYW5nZS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oW3ZBc1JhbmdlWzBdPy5uYXRpdmVEYXRlID8/IG51bGwsIHZBc1JhbmdlWzFdPy5uYXRpdmVEYXRlID8/IG51bGxdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oW10pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oKHZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUZuKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm9uVG91Y2hlZEZuKCk7XG4gICAgICAvLyBXaGVuIHZhbHVlIGVtaXR0ZWQsIG92ZXJsYXkgd2lsbCBiZSBjbG9zZWRcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0TW9kZUFuZEZvcm1hdCgpO1xuXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5wb3B1cFN0eWxlKSB7XG4gICAgICAvLyBBbHdheXMgYXNzaWduIHRoZSBwb3B1cCBzdHlsZSBwYXRjaFxuICAgICAgdGhpcy5wb3B1cFN0eWxlID0gdGhpcy5wb3B1cFN0eWxlID8geyAuLi50aGlzLnBvcHVwU3R5bGUsIC4uLlBPUFVQX1NUWUxFX1BBVENIIH0gOiBQT1BVUF9TVFlMRV9QQVRDSDtcbiAgICB9XG5cbiAgICAvLyBNYXJrIGFzIGN1c3RvbWl6ZWQgcGxhY2Vob2xkZXIgYnkgdXNlciBvbmNlIHBsYWNlSG9sZGVyIGFzc2lnbmVkIGF0IHRoZSBmaXJzdCB0aW1lXG4gICAgaWYgKGNoYW5nZXMucGxhY2VIb2xkZXI/LmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5pc0N1c3RvbVBsYWNlSG9sZGVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5mb3JtYXQ/LmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5pc0N1c3RvbUZvcm1hdCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubG9jYWxlKSB7XG4gICAgICAvLyBUaGUgbG9jYWxlIGlzIGN1cnJlbnRseSBoYW5kbGVkIGJ5IHVzZXJcbiAgICAgIHRoaXMuc2V0RGVmYXVsdFBsYWNlSG9sZGVyKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubnpSZW5kZXJFeHRyYUZvb3Rlcikge1xuICAgICAgdGhpcy5leHRyYUZvb3RlciA9IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMubnpSZW5kZXJFeHRyYUZvb3RlciEpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm1vZGUpIHtcbiAgICAgIHRoaXMuc2V0RGVmYXVsdFBsYWNlSG9sZGVyKCk7XG4gICAgICB0aGlzLnNldE1vZGVBbmRGb3JtYXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgc2V0TW9kZUFuZEZvcm1hdCgpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dEZvcm1hdHM6IHsgW2tleSBpbiBOekRhdGVNb2RlXT86IHN0cmluZyB9ID0ge1xuICAgICAgeWVhcjogJ3l5eXknLFxuICAgICAgbW9udGg6ICd5eXl5LU1NJyxcbiAgICAgIHdlZWs6IHRoaXMuaTE4bi5nZXREYXRlTG9jYWxlKCkgPyAnUlJSUi1JSScgOiAneXl5eS13dycsIC8vIEZvcm1hdCBmb3Igd2Vla1xuICAgICAgZGF0ZTogdGhpcy5zaG93VGltZSA/ICd5eXl5LU1NLWRkIEhIOm1tOnNzJyA6ICd5eXl5LU1NLWRkJ1xuICAgIH07XG5cbiAgICBpZiAoIXRoaXMubW9kZSkge1xuICAgICAgdGhpcy5tb2RlID0gJ2RhdGUnO1xuICAgIH1cblxuICAgIHRoaXMucGFuZWxNb2RlID0gdGhpcy5pc1JhbmdlID8gW3RoaXMubW9kZSwgdGhpcy5tb2RlXSA6IHRoaXMubW9kZTtcblxuICAgIC8vIERlZmF1bHQgZm9ybWF0IHdoZW4gaXQncyBlbXB0eVxuICAgIGlmICghdGhpcy5pc0N1c3RvbUZvcm1hdCkge1xuICAgICAgdGhpcy5mb3JtYXQgPSBpbnB1dEZvcm1hdHNbdGhpcy5tb2RlIGFzIE56RGF0ZU1vZGVdITtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcmVkIHdoZW4gb3ZlcmxheU9wZW4gY2hhbmdlcyAoZGlmZmVyZW50IHdpdGggcmVhbE9wZW5TdGF0ZSlcbiAgICogQHBhcmFtIG9wZW4gVGhlIG92ZXJsYXlPcGVuIGluIHBpY2tlciBjb21wb25lbnRcbiAgICovXG4gIG56T25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9uT3BlbkNoYW5nZS5lbWl0KG9wZW4pO1xuICB9XG5cbiAgcHVibGljIG9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy5waWNrZXIuc2hvd092ZXJsYXkoKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLnBpY2tlci5oaWRlT3ZlcmxheSgpO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgQ29udHJvbCB2YWx1ZSBhY2Nlc3NvciBpbXBsZW1lbnRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIE5PVEU6IG9uQ2hhbmdlRm4vb25Ub3VjaGVkRm4gd2lsbCBub3QgYmUgYXNzaWduZWQgaWYgdXNlciBub3QgdXNlIGFzIG5nTW9kZWxcbiAgb25DaGFuZ2VGbjogT25DaGFuZ2VUeXBlID0gKCkgPT4gdm9pZCAwO1xuICBvblRvdWNoZWRGbjogT25Ub3VjaGVkVHlwZSA9ICgpID0+IHZvaWQgMDtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBDb21wYXRpYmxlRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogT25DaGFuZ2VUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogT25Ub3VjaGVkVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgSW50ZXJuYWwgbWV0aG9kc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSZWxvYWQgbG9jYWxlIGZyb20gaTE4biB3aXRoIHNpZGUgZWZmZWN0c1xuICBwcml2YXRlIHNldExvY2FsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdEYXRlUGlja2VyJywge30pO1xuICAgIHRoaXMuc2V0RGVmYXVsdFBsYWNlSG9sZGVyKCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIHNldERlZmF1bHRQbGFjZUhvbGRlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21QbGFjZUhvbGRlciAmJiB0aGlzLmxvY2FsZSkge1xuICAgICAgY29uc3QgZGVmYXVsdFBsYWNlaG9sZGVyOiB7IFtrZXkgaW4gTnpEYXRlTW9kZV0/OiBzdHJpbmcgfSA9IHtcbiAgICAgICAgeWVhcjogdGhpcy5nZXRQcm9wZXJ0eU9mTG9jYWxlKCd5ZWFyUGxhY2Vob2xkZXInKSxcbiAgICAgICAgbW9udGg6IHRoaXMuZ2V0UHJvcGVydHlPZkxvY2FsZSgnbW9udGhQbGFjZWhvbGRlcicpLFxuICAgICAgICB3ZWVrOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3dlZWtQbGFjZWhvbGRlcicpLFxuICAgICAgICBkYXRlOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3BsYWNlaG9sZGVyJylcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGRlZmF1bHRSYW5nZVBsYWNlaG9sZGVyOiB7IFtrZXkgaW4gTnpEYXRlTW9kZV0/OiBzdHJpbmdbXSB9ID0ge1xuICAgICAgICB5ZWFyOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3JhbmdlWWVhclBsYWNlaG9sZGVyJyksXG4gICAgICAgIG1vbnRoOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3JhbmdlTW9udGhQbGFjZWhvbGRlcicpLFxuICAgICAgICB3ZWVrOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3JhbmdlV2Vla1BsYWNlaG9sZGVyJyksXG4gICAgICAgIGRhdGU6IHRoaXMuZ2V0UHJvcGVydHlPZkxvY2FsZSgncmFuZ2VQbGFjZWhvbGRlcicpXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnBsYWNlSG9sZGVyID0gdGhpcy5pc1JhbmdlXG4gICAgICAgID8gZGVmYXVsdFJhbmdlUGxhY2Vob2xkZXJbdGhpcy5tb2RlIGFzIE56RGF0ZU1vZGVdIVxuICAgICAgICA6IGRlZmF1bHRQbGFjZWhvbGRlclt0aGlzLm1vZGUgYXMgTnpEYXRlTW9kZV0hO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvcGVydHlPZkxvY2FsZTxUIGV4dGVuZHMga2V5b2YgTnpEYXRlUGlja2VyTGFuZ0kxOG5JbnRlcmZhY2U+KHR5cGU6IFQpOiBOekRhdGVQaWNrZXJMYW5nSTE4bkludGVyZmFjZVtUXSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlLmxhbmdbdHlwZV0gfHwgdGhpcy5pMThuLmdldExvY2FsZURhdGEoYERhdGVQaWNrZXIubGFuZy4ke3R5cGV9YCk7XG4gIH1cblxuICAvLyBTYWZlIHdheSBvZiBzZXR0aW5nIHZhbHVlIHdpdGggZGVmYXVsdFxuICBwcml2YXRlIHNldFZhbHVlKHZhbHVlOiBDb21wYXRpYmxlRGF0ZSk6IHZvaWQge1xuICAgIGNvbnN0IG5ld1ZhbHVlOiBDb21wYXRpYmxlVmFsdWUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLm1ha2VWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbml0aWFsVmFsdWUgPSBuZXdWYWx1ZTtcbiAgfVxuXG4gIG9uRm9jdXNDaGFuZ2UodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWQgPSB2YWx1ZTtcbiAgICAvLyBUT0RPOiBhdm9pZCBhdXRvRm9jdXMgY2F1c2UgY2hhbmdlIGFmdGVyIGNoZWNrZWQgZXJyb3JcbiAgICBpZiAodGhpcy5mb2N1c2VkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXBpY2tlci1mb2N1c2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtcGlja2VyLWZvY3VzZWQnKTtcbiAgICB9XG4gIH1cblxuICBvblBhbmVsTW9kZUNoYW5nZShwYW5lbE1vZGU6IE56RGF0ZU1vZGUgfCBOekRhdGVNb2RlW10pOiB2b2lkIHtcbiAgICB0aGlzLm9uUGFuZWxDaGFuZ2UuZW1pdChwYW5lbE1vZGUpO1xuICB9XG5cbiAgLy8gRW1pdCBvbkNhbGVuZGFyQ2hhbmdlIHdoZW4gc2VsZWN0IGRhdGUgYnkgbnotcmFuZ2UtcGlja2VyXG4gIG56T25DYWxlbmRhckNoYW5nZSh2YWx1ZTogQ29tcGF0aWJsZVZhbHVlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgY29uc3QgcmFuZ2VWYWx1ZSA9IHZhbHVlLmZpbHRlcih4ID0+IHggaW5zdGFuY2VvZiBDYW5keURhdGUpLm1hcCh4ID0+IHghLm5hdGl2ZURhdGUpO1xuICAgICAgdGhpcy5vbkNhbGVuZGFyQ2hhbmdlLmVtaXQocmFuZ2VWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25SZXN1bHRPaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlW107XG4gICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub25Pay5lbWl0KFt2YWx1ZVswXT8ubmF0aXZlRGF0ZSB8fCBudWxsLCB2YWx1ZVsxXT8ubmF0aXZlRGF0ZSB8fCBudWxsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uT2suZW1pdChbXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlKSB7XG4gICAgICAgIHRoaXMub25Pay5lbWl0KCh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uT2suZW1pdChudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==