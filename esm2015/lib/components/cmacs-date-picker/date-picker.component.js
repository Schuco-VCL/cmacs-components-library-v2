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
const POPUP_STYLE_PATCH = { position: 'relative' }; //Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
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
        i0.ɵɵproperty("isRange", ctx.isRange)("open", ctx.nzOpen)("timeline", ctx.timeline)("cmacsOpen", ctx.cmacsOpen)("dir", ctx.dir)("separator", ctx.separator)("disabled", ctx.disabled)("inputReadOnly", ctx.inputReadOnly)("format", ctx.format)("allowClear", ctx.allowClear)("autoFocus", ctx.autoFocus)("placeholder", ctx.placeHolder)("dropdownClassName", ctx.dropdownClassName)("noAnimation", !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("popupStyle", ctx.popupStyle)("suffixIcon", ctx.suffixIcon)("id", ctx.nzId);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("isRange", ctx.isRange)("timeline", ctx.timeline)("defaultPickerValue", ctx.defaultPickerValue)("showWeek", ctx.mode === "week" || ctx.showWeekCustom)("showWeekCustom", ctx.showWeekCustom)("panelMode", ctx.panelMode)("locale", ctx.locale == null ? null : ctx.locale.lang)("showToday", ctx.mode === "date" && ctx.showToday && !ctx.isRange && !ctx.showTime)("showNow", ctx.mode === "date" && ctx.showNow && !ctx.isRange && !!ctx.showTime)("showTime", ctx.showTime)("dateRender", ctx.dateRender)("disabledDate", ctx.disabledDate)("disabledTime", ctx.disabledTime)("extraFooter", ctx.extraFooter)("ranges", ctx.ranges)("dir", ctx.dir);
    } }, directives: [i6.NgIf, i7.CmacsPickerComponent, i4.Dir, i8.DateRangePopupComponent], styles: [".ant-picker-suffix i{font-size:16px;color:#656c79}.ant-picker-dropdown-placement-topLeft,.ant-picker-dropdown-placement-topRight{top:3px!important;-webkit-clip-path:inset(-10% -10% 0 -10%)!important;clip-path:inset(-10% -10% 0 -10%)!important;border-radius:3px 3px 0 0!important}.ant-picker-cell:before{left:2px!important}.ant-picker-datetime-panel .ant-picker-date-panel{display:inline-flex;font-size:12px}.ant-picker-content{border-collapse:separate;border-spacing:0 8px}.ant-picker-content th{font-size:12px}.ant-picker-datetime-panel .ant-picker-time-panel{width:125px!important;display:inline-flex;font-size:12px}.ant-picker-time-panel .ant-picker-content{display:inline-flex}.ant-picker-cell-in-view.ant-picker-cell-in-range:before{background:#f3f3f4;height:30px}.ant-picker-cell{margin:3px 0}.ant-picker-cell-range-end.ant-picker-cell-in-view .ant-picker-cell-inner{background-color:#fff!important;color:#656c79!important;border:1px solid #2a7cff!important;font-weight:500!important;border-radius:3px!important}.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single):before,.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single):before{background:#f3f3f4;height:30px}.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end:before,.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start:before,.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover:before,.ant-picker-cell-in-view.ant-picker-cell-range-end.ant-picker-cell-range-hover:before,.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single).ant-picker-cell-range-hover-end:before,.ant-picker-cell-in-view.ant-picker-cell-range-start.ant-picker-cell-range-hover:before,.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single).ant-picker-cell-range-hover-start:before{background:#f3f3f4}.ant-picker-date-panel .ant-picker-content th{max-width:30px!important;max-height:30px!important;height:auto!important}.ant-picker-date-range-wrapper .ant-picker-panel{width:50%}.ant-picker-date-panel .ant-picker-content th{max-width:36px!important;width:auto!important}.ant-picker-date-panel .ant-picker-header-super-next-btn,.ant-picker-date-panel .ant-picker-header-super-prev-btn,.ant-picker-week-panel .ant-picker-header-super-next-btn,.ant-picker-week-panel .ant-picker-header-super-prev-btn{display:none!important}.ant-picker-cell-week{color:#656c79!important}.ant-picker-cell-week,.ant-picker-date-panel .ant-picker-content th{width:30px;height:30px;font-size:12px}.ant-picker-week-panel-row:not(.cmacs-picker-week-panel-row) .ant-picker-cell-in-view.ant-picker-cell-in-range:before{background:#bae7ff!important}.ant-picker-datetime-panel .ant-picker-time-panel-column:after{height:0}.ant-picker-super-next-icon:after,.ant-picker-super-prev-icon:after{content:unset}.ant-picker-input>input{color:#656c79}.ant-picker-separator i{display:none}.ant-picker-separator:after{content:\"~\"}.ant-picker-input>input-focused,.ant-picker-input>input:focus{border-color:transparent;border-right-width:1px!important;outline:0;box-shadow:none}.ant-picker-range .ant-picker-active-bar{background:transparent}.ant-picker-focused:not(.ant-picker-disabled),.ant-picker:not(.ant-picker-disabled):hover{border-color:#bec4cd!important;border-right-width:1px!important;box-shadow:none}.ant-picker-header>button{width:20px;font-size:14px;line-height:6px;height:20px;position:relative;border-radius:3px}.ant-picker-header>button:hover{background-color:#f6f7fb;color:#656c79}.ant-picker-super-next-icon:before{font-family:ArrowLarge!important;content:\"\\e916\"}.ant-picker-super-prev-icon:before{font-family:ArrowLarge!important;content:\"\\e915\"}.ant-picker-next-icon:before{font-family:ArrowLarge!important;content:\"\\e916\"}.ant-picker-prev-icon:before{font-family:ArrowLarge!important;content:\"\\e915\"}.ant-picker-decade-panel .ant-picker-cell-inner{line-height:2.5!important}.ant-picker-panel .ant-picker-footer{border-top:none;border-bottom:none;line-height:1.4;padding-bottom:14px}.ant-picker-ranges{line-height:24px}.ant-picker-date-panel .ant-picker-content{width:100%;margin-right:0}.ant-picker-content th{color:#97a0ae;padding:0;width:30px}.ant-picker-week-panel-row{margin-top:8px}.ant-picker-week-panel-row td{padding:0;width:30px;height:30px}.ant-picker-header-view button:hover{color:#2a7cff;text-decoration:underline}.ant-picker-next-icon:before,.ant-picker-prev-icon:before,.ant-picker-super-next-icon:before,.ant-picker-super-prev-icon:before{position:absolute;display:inline-block;width:20px;height:20px;font-size:20px;border:none;color:#3b3f46;line-height:20px}.ant-picker-next-icon,.ant-picker-prev-icon,.ant-picker-super-next-icon,.ant-picker-super-prev-icon{transform:none;width:20px;height:20px}.ant-picker-week-panel-row-selected td{font-weight:700;background:#cde1ff;color:#656c79}.ant-picker-panel-container.ant-picker-week-number .ant-picker-week-panel-row-selected td{font-weight:700;background:#fff;color:#656c79}.ant-picker-cell-week{color:#97a0ae!important;font-weight:400!important}.ant-picker-week-panel-row-selected td .ant-picker-cell-inner{color:#656c79;font-weight:400}.ant-picker-week-panel-row-selected:hover td,.ant-picker-week-panel-row-selected td,.ant-picker-week-panel-row:hover td{background:#f6f7fb}.ant-picker-panel-container.ant-picker-week-number.ant-picker-week-panel-row-selected:hover td,.ant-picker-panel-container.ant-picker-week-number.ant-picker-week-panel-row-selected td,.ant-picker-panel-container.ant-picker-week-number .ant-picker-week-panel-row:hover td{background:#fff}.ant-picker-header{border-bottom:none;padding:17px 7px 6px}.ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner,.ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,.ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner{color:#fff;background:#2a7cff;border-radius:3px!important;font-family:Roboto-Medium;font-weight:500}.ant-picker-cell>.ant-picker-cell-inner{width:30px;height:30px;color:#656c79;font-size:13px;line-height:30px}.ant-picker-date-panel .ant-picker-body,.ant-picker-week-panel .ant-picker-body{padding:11px 7px}.ant-picker-week-panel-row-selected:hover td .ant-picker-cell-inner{color:#656c79}.ant-picker-week-panel .ant-picker-cell-selected .ant-picker-cell-inner,.ant-picker-week-panel .ant-picker-cell-selected:hover .ant-picker-cell-inner{color:#fff!important;background-color:#2a7cff!important;border-color:#2a7cff!important;font-weight:700;width:30px;height:30px}.cmacs-open-date-title{font-size:12px;font-weight:600;margin-bottom:10px}.cmacs-open-range-picker:hover .ant-calendar-range-picker-input{color:transparent}.cmacs-open-range-picker:hover .ant-calendar-picker-clear{opacity:0;display:none}.cmacs-open-date-subtitle{font-size:12px;color:#acb3bf;margin-bottom:10px}.cmacs-open-date-picker-placeholder{font-size:12px;font-weight:600;color:#acb3bf}.cmacs-open-date-picker-selected-value{color:#2a7cff}.cmacs-open-date-picker:hover .ant-calendar-picker-clear{opacity:0}.cmacs-open-range-picker-left,.cmacs-open-range-picker-right{display:inline-block}.cmacs-open-range-picker-right{float:right}.cmacs-open-range-picker-left{float:left}.ant-calendar-picker-input{box-shadow:none}.ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled){border-color:#bec4cd;color:#bec4cd}.ant-picker-cell-today:not(.ant-calendar-selected-day):not(.ant-picker-cell-disabled) .ant-picker-cell-inner{display:grid;margin:0 auto}.ant-picker-cell:not(.ant-picker-cell-in-view) .ant-picker-cell-inner{color:#acb3bf}.ant-picker-cell-in-view{color:#656c79}.ant-picker-cell:before{width:30px;height:30px}.ant-picker-header-view{line-height:20px;padding:0 11px}.ant-picker-header-view button{color:#3b3f46;line-height:20px;font-size:14px;font-family:Roboto-Medium;font-weight:500}.ant-picker-cell-today:not(.ant-calendar-selected-day):not(.ant-picker-cell-disabled) .ant-picker-cell-inner{background-color:transparent;border-color:transparent;color:#656c79}.ant-picker-cell-disabled .ant-picker-cell-inner{color:#acb3bf}.ant-picker-cell-disabled:before{background:none}.ant-picker-date-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-decade-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-month-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-quarter-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-year-panel .ant-picker-cell-disabled .ant-picker-cell-inner{background:#f3f3f4}.ant-picker-cell-in-view.ant-picker-cell-today:not(.ant-calendar-selected-day):not(.ant-picker-cell-disabled) .ant-picker-cell-inner:after{content:\"\u25CF\";color:#2a7cff;margin-top:-19px;font-size:10px}.ant-calendar-selected-day:not(.ant-picker-cell-disabled) .ant-picker-cell-inner{color:#fff!important;background-color:#2a7cff!important;border-color:#2a7cff}.ant-picker-time-panel-column{width:auto}.ant-picker-panel-container.ant-picker-time.ant-picker-week-number .ant-picker-panel{overflow-y:auto}month-table .ant-picker-cell>.ant-picker-cell-inner,year-table .ant-picker-cell>.ant-picker-cell-inner{min-width:unset;width:42px;height:32px;padding:0;line-height:32px}.ant-calendar-header{margin-top:17px;margin-bottom:17px;border:none;height:17px;line-height:17px}.ant-calendar-header a{line-height:17px!important}.ant-calendar th{padding-top:0;padding-bottom:12px}.ant-picker-cell-inner:hover{background-color:#f6f7fb}.ant-picker-panel-container.ant-picker-week-number .ant-picker-week-panel .ant-picker-cell:not(.ant-picker-cell-selected):hover .ant-picker-cell-inner{background-color:#f6f7fb!important}.ant-calendar-picker-icon{color:#656c79;cursor:pointer}.ant-calendar-picker-clear,.ant-calendar-picker-icon,.ant-calendar-picker i svg{height:16px;width:16px}.ant-picker-cell-disabled.ant-picker-cell-today .ant-picker-cell-inner:before{width:30px;height:30px;left:0}.cmacs-timeline-range-popup calendar-footer{display:none}.ant-picker-cell-disabled.ant-calendar-selected-day .ant-picker-cell-inner:before{position:absolute;top:-1px;left:-1px;width:30px;height:30px}.ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner:before{content:unset}.datepickerwidth,cmacs-date-picker,cmacs-month-picker,cmacs-range-picker,cmacs-week-picker,cmacs-year-picker{width:100%}.datepickerwidth .ant-input-disabled,.datepickerwidth .ant-input[disabled]{background:#f6f7fb;cursor:default;border:1px solid #dee0e5}.datepickerwidth .ant-input-disabled+.ant-calendar-picker-icon,.datepickerwidth .ant-input[disabled]+.ant-calendar-picker-icon{color:#bec4cd;cursor:default}.cmacs-open-date-picker-input,.cmacs-open-date-picker-input:focus,.cmacs-open-date-picker-input:hover{border-top-color:transparent!important;border-left-color:transparent!important;border-right-color:transparent!important;border-radius:unset}.ant-calendar-picker:hover .cmacs-open-date-picker-icon,.cmacs-open-date-picker-icon,.cmacs-open-date-picker:hover .ant-calendar-picker-clear{color:transparent!important;display:none!important;opacity:0!important}.cmacs-open-date-picker-input{padding:0;font-size:12px;height:0;color:transparent}.cmacs-open-date-picker-input .ant-calendar-range-picker-input,.cmacs-open-date-picker-input .ant-calendar-range-picker-separator,.cmacs-open-date-picker:hover .ant-calendar-range-picker-input{color:transparent}.ant-picker-now-btn,.ant-picker-today-btn{color:#2a7cff}.ant-picker-now-btn:hover,.ant-picker-today-btn:hover{color:#2164c9}.ant-picker-time-panel-column>li.ant-picker-time-panel-cell-selected .ant-picker-time-panel-cell-inner{color:#fff;background:#2a7cff}.ant-picker-time-panel-column:hover{overflow-y:auto;scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}.ant-picker-time-panel-column::-webkit-scrollbar{width:6px;height:6px}.ant-picker-time-panel-column::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}.ant-picker-time-panel-column::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}"], encapsulation: 2, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBSU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQW1CLE1BQU0seUJBQXlCLENBQUM7QUFFaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVyRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcxRCxPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzFELE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7OztJQW1CMUIsNkJBQTRDO0lBQzFDLDhCQUFtQztJQUNqQyxZQUNGO0lBQUEsaUJBQU07SUFDTiw4QkFBc0M7SUFDcEMsWUFBd0I7SUFBQSwrQkFBdUc7SUFDL0gsWUFBcUM7SUFBQSxpQkFBTztJQUM5QyxpQkFBTTtJ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QkFBcEIsS0FBSztZQUNHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ21CLE9BQU87a0JBQS9CLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDaUIsU0FBUztrQkFBL0IsS0FBSztZQUNpQixVQUFVO2tCQUFoQyxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBS2EsYUFBYTtrQkFBL0IsTUFBTTtZQUNZLGdCQUFnQjtrQkFBbEMsTUFBTTtZQUNZLElBQUk7a0JBQXRCLE1BQU07WUFDWSxZQUFZO2tCQUE5QixNQUFNO1lBRUUsZUFBZTtrQkFBdkIsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLHNCQUFzQjtrQkFBOUIsS0FBSztZQUNHLHVCQUF1QjtrQkFBL0IsS0FBSztZQUU2QyxNQUFNO2tCQUF4RCxTQUFTO21CQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUVwQyxRQUFRO2tCQUFwQixLQUFLO1lBS0YsY0FBYztrQkFEakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBDYW5keURhdGUsIGNsb25lRGF0ZSwgQ29tcGF0aWJsZVZhbHVlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIEZ1bmN0aW9uUHJvcCwgTnpTYWZlQW55LCBPbkNoYW5nZVR5cGUsIE9uVG91Y2hlZFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIHRvQm9vbGVhbiwgdmFsdWVGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekRhdGVQaWNrZXJJMThuSW50ZXJmYWNlLCBOekRhdGVQaWNrZXJMYW5nSTE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZGF0ZS1waWNrZXIuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XHJcbmltcG9ydCB7IENtYWNzUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcGF0aWJsZURhdGUsIERpc2FibGVkVGltZUZuLCBOekRhdGVNb2RlLCBQcmVzZXRSYW5nZXMsIFN1cHBvcnRUaW1lT3B0aW9ucyB9IGZyb20gJy4vc3RhbmRhcmQtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuY29uc3QgUE9QVVBfU1RZTEVfUEFUQ0ggPSB7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH07IC8vQWltIHRvIG92ZXJyaWRlIGFudGQncyBzdHlsZSB0byBzdXBwb3J0IG92ZXJsYXkncyBwb3NpdGlvbiBzdHJhdGVneSAocG9zaXRpb246YWJzb2x1dGUgd2lsbCBjYXVzZSBpdCBub3Qgd29ya2luZyBiZWFjdXNlIHRoZSBvdmVybGF5IGNhbid0IGdldCB0aGUgaGVpZ2h0L3dpZHRoIG9mIGl0J3MgY29udGVudClcclxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdkYXRlUGlja2VyJztcclxuXHJcbmV4cG9ydCB0eXBlIE56RGF0ZVBpY2tlclNpemVUeXBlID0gJ2xhcmdlJyB8ICdkZWZhdWx0JyB8ICdzbWFsbCc7XHJcblxyXG4vKipcclxuICogVGhlIGJhc2UgcGlja2VyIGZvciBhbGwgY29tbW9uIEFQSXNcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1kYXRlLXBpY2tlcixjbWFjcy13ZWVrLXBpY2tlcixjbWFjcy1tb250aC1waWNrZXIsY21hY3MteWVhci1waWNrZXIsY21hY3MtcmFuZ2UtcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzRGF0ZVBpY2tlcicsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc09wZW4gJiYgIWlzUmFuZ2VcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1vcGVuLWRhdGUtdGl0bGVcIj5cclxuICAgICAgICAgICAge3tvcGVuUGlja2VyVGl0bGV9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtb3Blbi1kYXRlLXN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgIHt7b3BlblBpY2tlclN1YnRpdGxlfX06IDxzcGFuIGNsYXNzPVwiY21hY3Mtb3Blbi1kYXRlLXBpY2tlci1wbGFjZWhvbGRlclwiIFtjbGFzcy5jbWFjcy1vcGVuLWRhdGUtcGlja2VyLXNlbGVjdGVkLXZhbHVlXT1cInZhbHVlXCI+XHJcbiAgICAgICAgICAgIHt7dmFsdWUgPyBwYXJzZURhdGUoKSA6IHBsYWNlSG9sZGVyfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzT3BlbiAmJiBpc1JhbmdlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtb3Blbi1kYXRlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIHt7b3BlblBpY2tlclRpdGxlfX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLW9wZW4tcmFuZ2UtcGlja2VyLWxlZnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLW9wZW4tZGF0ZS1zdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgIHt7b3BlblBpY2tlckxlZnRSYW5nZVN1Yn19OiA8c3BhbiBjbGFzcz1cImNtYWNzLW9wZW4tZGF0ZS1waWNrZXItcGxhY2Vob2xkZXJcIiBbY2xhc3MuY21hY3Mtb3Blbi1kYXRlLXBpY2tlci1zZWxlY3RlZC12YWx1ZV09XCJ2YWx1ZSAmJiB2YWx1ZS5sZW5ndGhcIj5cclxuICAgICAgICAgICAge3t2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPyBwYXJzZURhdGUoKVswXSA6IHBsYWNlSG9sZGVyfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtb3Blbi1yYW5nZS1waWNrZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLW9wZW4tZGF0ZS1zdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgIHt7b3BlblBpY2tlclJpZ2h0UmFuZ2VTdWJ9fTogPHNwYW4gY2xhc3M9XCJjbWFjcy1vcGVuLWRhdGUtcGlja2VyLXBsYWNlaG9sZGVyXCIgW2NsYXNzLmNtYWNzLW9wZW4tZGF0ZS1waWNrZXItc2VsZWN0ZWQtdmFsdWVdPVwidmFsdWUgJiYgdmFsdWUubGVuZ3RoXCI+XHJcbiAgICAgICAgICAgIHt7dmFsdWUgJiYgdmFsdWUubGVuZ3RoID8gcGFyc2VEYXRlKClbMV0gOiBwbGFjZUhvbGRlcn19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNtYWNzLXBpY2tlclxyXG4gICAgICBbaXNSYW5nZV09XCJpc1JhbmdlXCJcclxuICAgICAgW29wZW5dPVwibnpPcGVuXCJcclxuICAgICAgW3RpbWVsaW5lXT1cInRpbWVsaW5lXCJcclxuICAgICAgW2NtYWNzT3Blbl09XCJjbWFjc09wZW5cIlxyXG4gICAgICBbZGlyXT1cImRpclwiXHJcbiAgICAgIFtzZXBhcmF0b3JdPVwic2VwYXJhdG9yXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW2lucHV0UmVhZE9ubHldPVwiaW5wdXRSZWFkT25seVwiXHJcbiAgICAgIFtmb3JtYXRdPVwiZm9ybWF0XCJcclxuICAgICAgW2FsbG93Q2xlYXJdPVwiYWxsb3dDbGVhclwiXHJcbiAgICAgIFthdXRvRm9jdXNdPVwiYXV0b0ZvY3VzXCJcclxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyXCJcclxuICAgICAgc3R5bGU9XCJkaXNwbGF5OiBpbmhlcml0OyBhbGlnbi1pdGVtczogY2VudGVyOyB3aWR0aDogMTAwJTtcIlxyXG4gICAgICBbZHJvcGRvd25DbGFzc05hbWVdPVwiZHJvcGRvd25DbGFzc05hbWVcIlxyXG4gICAgICBbY2xhc3MuYW50LXBpY2tlci1kcm9wZG93bi1ydGxdPVwiZGlyID09PSAncnRsJ1wiXHJcbiAgICAgIFtub0FuaW1hdGlvbl09XCIhIW5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgW3BvcHVwU3R5bGVdPVwicG9wdXBTdHlsZVwiXHJcbiAgICAgIFtzdWZmaXhJY29uXT1cInN1ZmZpeEljb25cIlxyXG4gICAgICAob3BlbkNoYW5nZSk9XCJuek9uT3BlbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgKGZvY3VzQ2hhbmdlKT1cIm9uRm9jdXNDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIFtpZF09XCJueklkXCJcclxuICAgID5cclxuICAgICAgPGRhdGUtcmFuZ2UtcG9wdXBcclxuICAgICAgICBbaXNSYW5nZV09XCJpc1JhbmdlXCJcclxuICAgICAgICBbdGltZWxpbmVdPVwidGltZWxpbmVcIlxyXG4gICAgICAgIFtkZWZhdWx0UGlja2VyVmFsdWVdPVwiZGVmYXVsdFBpY2tlclZhbHVlXCJcclxuICAgICAgICBbc2hvd1dlZWtdPVwibW9kZSA9PT0gJ3dlZWsnIHx8IHNob3dXZWVrQ3VzdG9tXCJcclxuICAgICAgICBbc2hvd1dlZWtDdXN0b21dPVwic2hvd1dlZWtDdXN0b21cIlxyXG4gICAgICAgIFtwYW5lbE1vZGVdPVwicGFuZWxNb2RlXCJcclxuICAgICAgICAocGFuZWxNb2RlQ2hhbmdlKT1cIm9uUGFuZWxNb2RlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChjYWxlbmRhckNoYW5nZSk9XCJuek9uQ2FsZW5kYXJDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW2xvY2FsZV09XCJsb2NhbGU/LmxhbmchXCJcclxuICAgICAgICBbc2hvd1RvZGF5XT1cIm1vZGUgPT09ICdkYXRlJyAmJiBzaG93VG9kYXkgJiYgIWlzUmFuZ2UgJiYgIXNob3dUaW1lXCJcclxuICAgICAgICBbc2hvd05vd109XCJtb2RlID09PSAnZGF0ZScgJiYgc2hvd05vdyAmJiAhaXNSYW5nZSAmJiAhIXNob3dUaW1lXCJcclxuICAgICAgICBbc2hvd1RpbWVdPVwic2hvd1RpbWVcIlxyXG4gICAgICAgIFtkYXRlUmVuZGVyXT1cImRhdGVSZW5kZXJcIlxyXG4gICAgICAgIFtkaXNhYmxlZERhdGVdPVwiZGlzYWJsZWREYXRlXCJcclxuICAgICAgICBbZGlzYWJsZWRUaW1lXT1cImRpc2FibGVkVGltZVwiXHJcbiAgICAgICAgW2V4dHJhRm9vdGVyXT1cImV4dHJhRm9vdGVyXCJcclxuICAgICAgICBbcmFuZ2VzXT1cInJhbmdlc1wiXHJcbiAgICAgICAgW2Rpcl09XCJkaXJcIlxyXG4gICAgICAgIChyZXN1bHRPayk9XCJvblJlc3VsdE9rKClcIlxyXG4gICAgICA+PC9kYXRlLXJhbmdlLXBvcHVwPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1waWNrZXItcmFuZ2VdJzogYGlzUmFuZ2VgLFxyXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLWxhcmdlXSc6IGBzaXplID09PSAnbGFyZ2UnYCxcclxuICAgICdbY2xhc3MuYW50LXBpY2tlci1zbWFsbF0nOiBgc2l6ZSA9PT0gJ3NtYWxsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1waWNrZXItZGlzYWJsZWRdJzogYGRpc2FibGVkYCxcclxuICAgICdbY2xhc3MuYW50LXBpY2tlci1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLWJvcmRlcmxlc3NdJzogYGJvcmRlcmxlc3NgLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1vcGVuLWRhdGUtcGlja2VyXSc6ICdjbWFjc09wZW4nLFxyXG4gICAgJyhjbGljayknOiAncGlja2VyLm9uQ2xpY2tJbnB1dEJveCgkZXZlbnQpJ1xyXG4gIH0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBEYXRlUGlja2VyU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc0RhdGVQaWNrZXJDb21wb25lbnQpXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICBpc1JhbmdlOiBib29sZWFuID0gZmFsc2U7IC8vIEluZGljYXRlIHdoZXRoZXIgdGhlIHZhbHVlIGlzIGEgcmFuZ2UgdmFsdWVcclxuICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgZXh0cmFGb290ZXI/OiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgc3RyaW5nO1xyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcblxyXG4gIHB1YmxpYyBwYW5lbE1vZGU6IE56RGF0ZU1vZGUgfCBOekRhdGVNb2RlW10gPSAnZGF0ZSc7XHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGlzQ3VzdG9tUGxhY2VIb2xkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGlzQ3VzdG9tRm9ybWF0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBuelNob3dUaW1lOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8vIC0tLSBDb21tb24gQVBJXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93Q2xlYXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0aW1lbGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVybGVzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbnB1dFJlYWRPbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T3Blbj86IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzT3Blbj86IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlPzogKGQ6IERhdGUpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbG9jYWxlITogTnpEYXRlUGlja2VySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlcjogc3RyaW5nIHwgc3RyaW5nW10gPSAnJztcclxuICBASW5wdXQoKSBwb3B1cFN0eWxlOiBvYmplY3QgPSBQT1BVUF9TVFlMRV9QQVRDSDtcclxuICBASW5wdXQoKSBkcm9wZG93bkNsYXNzTmFtZT86IHN0cmluZztcclxuICBASW5wdXQoKSBzaXplOiBOekRhdGVQaWNrZXJTaXplVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBmb3JtYXQhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGF0ZVJlbmRlcj86IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBzdHJpbmcgfCBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkVGltZT86IERpc2FibGVkVGltZUZuO1xyXG4gIEBJbnB1dCgpIG56UmVuZGVyRXh0cmFGb290ZXI/OiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgc3RyaW5nIHwgRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93VG9kYXk6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG1vZGU6IE56RGF0ZU1vZGUgPSAnZGF0ZSc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dOb3c6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHJhbmdlcz86IFByZXNldFJhbmdlcztcclxuICBASW5wdXQoKSBkZWZhdWx0UGlja2VyVmFsdWU6IENvbXBhdGlibGVEYXRlIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBzZXBhcmF0b3I/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBzdWZmaXhJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+ID0gJ2ljb25VSVNtYWxsLUNhbGVuZGVyJztcclxuICBASW5wdXQoKSBueklkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSB3aWR0aDogYW55O1xyXG5cclxuICBwcml2YXRlIF9zaG93V2Vla0N1c3RvbSA9IGZhbHNlO1xyXG5cclxuICAvLyBUT0RPKEB3ZW5xaTczKSBUaGUgUGFuZWxNb2RlIG5lZWQgbmFtZWQgZm9yIGVhY2ggcGlja2VycyBhbmQgZXhwb3J0XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uUGFuZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56RGF0ZU1vZGUgfCBOekRhdGVNb2RlW10gfCBzdHJpbmcgfCBzdHJpbmdbXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DYWxlbmRhckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8RGF0ZSB8IG51bGw+PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbk9rID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlRGF0ZSB8IG51bGw+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KCkgb3BlblBpY2tlclRpdGxlID0gJyc7XHJcbiAgQElucHV0KCkgb3BlblBpY2tlclN1YnRpdGxlID0gJyc7XHJcbiAgQElucHV0KCkgb3BlblBpY2tlckxlZnRSYW5nZVN1YiA9ICcnO1xyXG4gIEBJbnB1dCgpIG9wZW5QaWNrZXJSaWdodFJhbmdlU3ViID0gJyc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoQ21hY3NQaWNrZXJDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIHBpY2tlciE6IENtYWNzUGlja2VyQ29tcG9uZW50O1xyXG5cclxuICBASW5wdXQoKSBnZXQgc2hvd1RpbWUoKTogU3VwcG9ydFRpbWVPcHRpb25zIHwgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelNob3dUaW1lO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpXHJcbiAgc2V0IHNob3dXZWVrQ3VzdG9tKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93V2Vla0N1c3RvbSA9ICgoIUFycmF5LmlzQXJyYXkodGhpcy5wYW5lbE1vZGUpICYmIHRoaXMucGFuZWxNb2RlICE9PSAnd2VlaycpIHx8IChBcnJheS5pc0FycmF5KHRoaXMucGFuZWxNb2RlKSAmJiB0aGlzLnBhbmVsTW9kZVswXSAhPT0gJ3dlZWsnKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1dlZWtDdXN0b20oKSB7XHJcbiAgICByZXR1cm4gKCghQXJyYXkuaXNBcnJheSh0aGlzLnBhbmVsTW9kZSkgJiYgdGhpcy5wYW5lbE1vZGUgIT09ICd3ZWVrJykgfHwgKEFycmF5LmlzQXJyYXkodGhpcy5wYW5lbE1vZGUpICYmIHRoaXMucGFuZWxNb2RlWzBdICE9PSAnd2VlaycpKTtcclxuICB9XHJcblxyXG4gIHNldCBzaG93VGltZSh2YWx1ZTogU3VwcG9ydFRpbWVPcHRpb25zIHwgYm9vbGVhbikge1xyXG4gICAgdGhpcy5uelNob3dUaW1lID0gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDogdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHBhcnNlRGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkVmFsdWUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZTtcclxuICAgICAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBtb21lbnQocGFyc2VkVmFsdWUubmF0aXZlRGF0ZSkubG9jYWxlKGxvY2FsZSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KGxvY2FsZSA9PT0gJ2RlJyA/ICdERC4gTU1NIFlZWVknIDogbG9jYWxlID09PSAnamEnID8gJ1lZWVnlubRN5pyIROaXpScgOiAnTU1NIERELCBZWVlZJyk7XHJcbiAgICB9XHJcbiAgICBsZXQgcGFyc2VkVmFsdWVzID0gW107XHJcbiAgICBjb25zdCBjb2VyY2VWYWx1ZXMgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG5cclxuICAgIGZvciAobGV0IHZhbCBvZiBjb2VyY2VWYWx1ZXMpIHtcclxuICAgICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHZhbCBhcyBDYW5keURhdGU7XHJcbiAgICAgICAgY29uc3QgbG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZTtcclxuICAgICAgICBjb25zdCBkYXRlID0gbW9tZW50KHBhcnNlZFZhbHVlLm5hdGl2ZURhdGUpLmxvY2FsZShsb2NhbGUpO1xyXG4gICAgICAgIHBhcnNlZFZhbHVlcy5wdXNoKGRhdGUuZm9ybWF0KGxvY2FsZSA9PT0gJ2RlJyA/ICdERC4gTU1NIFlZWVknIDogbG9jYWxlID09PSAnamEnID8gJ1lZWVnlubRN5pyIROaXpScgOiAnTU1NIERELCBZWVlZJykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlZFZhbHVlcztcclxufVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHB1YmxpYyBkYXRlUGlja2VyU2VydmljZTogRGF0ZVBpY2tlclNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJvdGVjdGVkIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXBpY2tlcicpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBTdWJzY3JpYmUgdGhlIGV2ZXJ5IGxvY2FsZSBjaGFuZ2UgaWYgdGhlIGxvY2FsZSBpcyBub3QgaGFuZGxlZCBieSB1c2VyXHJcbiAgICBpZiAoIXRoaXMubG9jYWxlKSB7XHJcbiAgICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0TG9jYWxlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmF1bHQgdmFsdWVcclxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaXNSYW5nZSA9IHRoaXMuaXNSYW5nZTtcclxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5pdFZhbHVlKCk7XHJcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmVtaXRWYWx1ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSkuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWU7XHJcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5pdGlhbFZhbHVlID0gY2xvbmVEYXRlKHZhbHVlKTtcclxuICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICAgIGNvbnN0IHZBc1JhbmdlID0gdmFsdWUgYXMgQ2FuZHlEYXRlW107XHJcbiAgICAgICAgaWYgKHZBc1JhbmdlLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUZuKFt2QXNSYW5nZVswXT8ubmF0aXZlRGF0ZSA/PyBudWxsLCB2QXNSYW5nZVsxXT8ubmF0aXZlRGF0ZSA/PyBudWxsXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMub25DaGFuZ2VGbihbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUZuKCh2YWx1ZSBhcyBDYW5keURhdGUpLm5hdGl2ZURhdGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm4obnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25Ub3VjaGVkRm4oKTtcclxuICAgICAgLy8gV2hlbiB2YWx1ZSBlbWl0dGVkLCBvdmVybGF5IHdpbGwgYmUgY2xvc2VkXHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0TW9kZUFuZEZvcm1hdCgpO1xyXG5cclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnBvcHVwU3R5bGUpIHtcclxuICAgICAgLy8gQWx3YXlzIGFzc2lnbiB0aGUgcG9wdXAgc3R5bGUgcGF0Y2hcclxuICAgICAgdGhpcy5wb3B1cFN0eWxlID0gdGhpcy5wb3B1cFN0eWxlID8geyAuLi50aGlzLnBvcHVwU3R5bGUsIC4uLlBPUFVQX1NUWUxFX1BBVENIIH0gOiBQT1BVUF9TVFlMRV9QQVRDSDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYXJrIGFzIGN1c3RvbWl6ZWQgcGxhY2Vob2xkZXIgYnkgdXNlciBvbmNlIHBsYWNlSG9sZGVyIGFzc2lnbmVkIGF0IHRoZSBmaXJzdCB0aW1lXHJcbiAgICBpZiAoY2hhbmdlcy5wbGFjZUhvbGRlcj8uY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaXNDdXN0b21QbGFjZUhvbGRlciA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuZm9ybWF0Py5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5pc0N1c3RvbUZvcm1hdCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubG9jYWxlKSB7XHJcbiAgICAgIC8vIFRoZSBsb2NhbGUgaXMgY3VycmVudGx5IGhhbmRsZWQgYnkgdXNlclxyXG4gICAgICB0aGlzLnNldERlZmF1bHRQbGFjZUhvbGRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLm56UmVuZGVyRXh0cmFGb290ZXIpIHtcclxuICAgICAgdGhpcy5leHRyYUZvb3RlciA9IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMubnpSZW5kZXJFeHRyYUZvb3RlciEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLm1vZGUpIHtcclxuICAgICAgdGhpcy5zZXREZWZhdWx0UGxhY2VIb2xkZXIoKTtcclxuICAgICAgdGhpcy5zZXRNb2RlQW5kRm9ybWF0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHNldE1vZGVBbmRGb3JtYXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbnB1dEZvcm1hdHM6IHsgW2tleSBpbiBOekRhdGVNb2RlXT86IHN0cmluZyB9ID0ge1xyXG4gICAgICAgIHllYXI6ICd5eXl5JyxcclxuICAgICAgICBtb250aDogdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/ICdNTS55eXl5JyA6IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdqYScgPyAneXl5eeW5tE3mnIgnIDogJ01NL3l5eXknLFxyXG4gICAgICAgIHdlZWs6IHRoaXMuaTE4bi5nZXREYXRlTG9jYWxlKCkgPyAnUlJSUi1JSScgOlxyXG4gICAgICAgICAgICB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ3d3Lnl5eXknIDogdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2phJyA/ICd5eXl55bm0V3d36YCxJyA6ICd3dy95eXl5JyxcclxuICAgICAgICBkYXRlOiB0aGlzLnNob3dUaW1lID8gKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnZGQuTU0ueXl5eSBISDptbTpzcycgOiB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnamEnID8gJ3l5eXnlubRN5pyIZOaXpSBI5pmCbeWIhnPnp5InIDogJ01NL2RkL3l5eXkgSEg6bW06c3MnKSA6XHJcbiAgICAgICAgICAgICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ2RkLk1NLnl5eXknIDogdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2phJyA/ICd5eXl55bm0TeaciGTml6UnIDogJ01NL2RkL3l5eXknKVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXRoaXMubW9kZSkge1xyXG4gICAgICAgIHRoaXMubW9kZSA9ICdkYXRlJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhbmVsTW9kZSA9IHRoaXMuaXNSYW5nZSA/IFt0aGlzLm1vZGUsIHRoaXMubW9kZV0gOiB0aGlzLm1vZGU7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBmb3JtYXQgd2hlbiBpdCdzIGVtcHR5XHJcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21Gb3JtYXQpIHtcclxuICAgICAgICB0aGlzLmZvcm1hdCA9IGlucHV0Rm9ybWF0c1t0aGlzLm1vZGUgYXMgTnpEYXRlTW9kZV0hO1xyXG4gICAgfVxyXG59XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXJlZCB3aGVuIG92ZXJsYXlPcGVuIGNoYW5nZXMgKGRpZmZlcmVudCB3aXRoIHJlYWxPcGVuU3RhdGUpXHJcbiAgICogQHBhcmFtIG9wZW4gVGhlIG92ZXJsYXlPcGVuIGluIHBpY2tlciBjb21wb25lbnRcclxuICAgKi9cclxuICBuek9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uT3BlbkNoYW5nZS5lbWl0KG9wZW4pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLnBpY2tlci5zaG93T3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5waWNrZXIuaGlkZU92ZXJsYXkoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIHwgQ29udHJvbCB2YWx1ZSBhY2Nlc3NvciBpbXBsZW1lbnRzXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIC8vIE5PVEU6IG9uQ2hhbmdlRm4vb25Ub3VjaGVkRm4gd2lsbCBub3QgYmUgYXNzaWduZWQgaWYgdXNlciBub3QgdXNlIGFzIG5nTW9kZWxcclxuICBvbkNoYW5nZUZuOiBPbkNoYW5nZVR5cGUgPSAoKSA9PiB2b2lkIDA7XHJcbiAgb25Ub3VjaGVkRm46IE9uVG91Y2hlZFR5cGUgPSAoKSA9PiB2b2lkIDA7XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IENvbXBhdGlibGVEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogT25DaGFuZ2VUeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBPblRvdWNoZWRUeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZEZuID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IEludGVybmFsIG1ldGhvZHNcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgLy8gUmVsb2FkIGxvY2FsZSBmcm9tIGkxOG4gd2l0aCBzaWRlIGVmZmVjdHNcclxuICBwcml2YXRlIHNldExvY2FsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ0RhdGVQaWNrZXInLCB7fSk7XHJcbiAgICB0aGlzLnNldERlZmF1bHRQbGFjZUhvbGRlcigpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldERlZmF1bHRQbGFjZUhvbGRlcigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0N1c3RvbVBsYWNlSG9sZGVyICYmIHRoaXMubG9jYWxlKSB7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRQbGFjZWhvbGRlcjogeyBba2V5IGluIE56RGF0ZU1vZGVdPzogc3RyaW5nIH0gPSB7XHJcbiAgICAgICAgeWVhcjogdGhpcy5nZXRQcm9wZXJ0eU9mTG9jYWxlKCd5ZWFyUGxhY2Vob2xkZXInKSxcclxuICAgICAgICBtb250aDogdGhpcy5nZXRQcm9wZXJ0eU9mTG9jYWxlKCdtb250aFBsYWNlaG9sZGVyJyksXHJcbiAgICAgICAgd2VlazogdGhpcy5nZXRQcm9wZXJ0eU9mTG9jYWxlKCd3ZWVrUGxhY2Vob2xkZXInKSxcclxuICAgICAgICBkYXRlOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3BsYWNlaG9sZGVyJylcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGRlZmF1bHRSYW5nZVBsYWNlaG9sZGVyOiB7IFtrZXkgaW4gTnpEYXRlTW9kZV0/OiBzdHJpbmdbXSB9ID0ge1xyXG4gICAgICAgIHllYXI6IHRoaXMuZ2V0UHJvcGVydHlPZkxvY2FsZSgncmFuZ2VZZWFyUGxhY2Vob2xkZXInKSxcclxuICAgICAgICBtb250aDogdGhpcy5nZXRQcm9wZXJ0eU9mTG9jYWxlKCdyYW5nZU1vbnRoUGxhY2Vob2xkZXInKSxcclxuICAgICAgICB3ZWVrOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3JhbmdlV2Vla1BsYWNlaG9sZGVyJyksXHJcbiAgICAgICAgZGF0ZTogdGhpcy5nZXRQcm9wZXJ0eU9mTG9jYWxlKCdyYW5nZVBsYWNlaG9sZGVyJylcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMucGxhY2VIb2xkZXIgPSB0aGlzLmlzUmFuZ2VcclxuICAgICAgICA/IGRlZmF1bHRSYW5nZVBsYWNlaG9sZGVyW3RoaXMubW9kZSBhcyBOekRhdGVNb2RlXSFcclxuICAgICAgICA6IGRlZmF1bHRQbGFjZWhvbGRlclt0aGlzLm1vZGUgYXMgTnpEYXRlTW9kZV0hO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQcm9wZXJ0eU9mTG9jYWxlPFQgZXh0ZW5kcyBrZXlvZiBOekRhdGVQaWNrZXJMYW5nSTE4bkludGVyZmFjZT4odHlwZTogVCk6IE56RGF0ZVBpY2tlckxhbmdJMThuSW50ZXJmYWNlW1RdIHtcclxuICAgIHJldHVybiB0aGlzLmxvY2FsZS5sYW5nW3R5cGVdIHx8IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKGBEYXRlUGlja2VyLmxhbmcuJHt0eXBlfWApO1xyXG4gIH1cclxuXHJcbiAgLy8gU2FmZSB3YXkgb2Ygc2V0dGluZyB2YWx1ZSB3aXRoIGRlZmF1bHRcclxuICBwcml2YXRlIHNldFZhbHVlKHZhbHVlOiBDb21wYXRpYmxlRGF0ZSk6IHZvaWQge1xyXG4gICAgY29uc3QgbmV3VmFsdWU6IENvbXBhdGlibGVWYWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UubWFrZVZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbml0aWFsVmFsdWUgPSBuZXdWYWx1ZTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXNDaGFuZ2UodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNlZCA9IHZhbHVlO1xyXG4gICAgLy8gVE9ETzogYXZvaWQgYXV0b0ZvY3VzIGNhdXNlIGNoYW5nZSBhZnRlciBjaGVja2VkIGVycm9yXHJcbiAgICBpZiAodGhpcy5mb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtcGlja2VyLWZvY3VzZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtcGlja2VyLWZvY3VzZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUGFuZWxNb2RlQ2hhbmdlKHBhbmVsTW9kZTogTnpEYXRlTW9kZSB8IE56RGF0ZU1vZGVbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblBhbmVsQ2hhbmdlLmVtaXQocGFuZWxNb2RlKTtcclxuICB9XHJcblxyXG4gIC8vIEVtaXQgb25DYWxlbmRhckNoYW5nZSB3aGVuIHNlbGVjdCBkYXRlIGJ5IG56LXJhbmdlLXBpY2tlclxyXG4gIG56T25DYWxlbmRhckNoYW5nZSh2YWx1ZTogQ29tcGF0aWJsZVZhbHVlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIGNvbnN0IHJhbmdlVmFsdWUgPSB2YWx1ZS5maWx0ZXIoeCA9PiB4IGluc3RhbmNlb2YgQ2FuZHlEYXRlKS5tYXAoeCA9PiB4IS5uYXRpdmVEYXRlKTtcclxuICAgICAgdGhpcy5vbkNhbGVuZGFyQ2hhbmdlLmVtaXQocmFuZ2VWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJlc3VsdE9rKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlW107XHJcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLm9uT2suZW1pdChbdmFsdWVbMF0/Lm5hdGl2ZURhdGUgfHwgbnVsbCwgdmFsdWVbMV0/Lm5hdGl2ZURhdGUgfHwgbnVsbF0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub25Pay5lbWl0KFtdKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUpIHtcclxuICAgICAgICB0aGlzLm9uT2suZW1pdCgodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSBhcyBDYW5keURhdGUpLm5hdGl2ZURhdGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub25Pay5lbWl0KG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==