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
//const POPUP_STYLE_PATCH = { position: 'relative' };  Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
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
        this.showWeekCustom = false;
        this.inputReadOnly = false;
        this.placeHolder = '';
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
        // if (changes.popupStyle) {
        // Always assign the popup style patch
        //  this.popupStyle = this.popupStyle ? { ...this.popupStyle, ...POPUP_STYLE_PATCH } : POPUP_STYLE_PATCH;
        // }
        var _a, _b;
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
    } }, inputs: { allowClear: "allowClear", timeline: "timeline", autoFocus: "autoFocus", disabled: "disabled", borderless: "borderless", showWeekCustom: "showWeekCustom", inputReadOnly: "inputReadOnly", nzOpen: "nzOpen", cmacsOpen: "cmacsOpen", disabledDate: "disabledDate", locale: "locale", placeHolder: "placeHolder", dropdownClassName: "dropdownClassName", size: "size", format: "format", dateRender: "dateRender", disabledTime: "disabledTime", nzRenderExtraFooter: "nzRenderExtraFooter", showToday: "showToday", mode: "mode", showNow: "showNow", ranges: "ranges", defaultPickerValue: "defaultPickerValue", separator: "separator", suffixIcon: "suffixIcon", nzId: "nzId", width: "width", openPickerTitle: "openPickerTitle", openPickerSubtitle: "openPickerSubtitle", openPickerLeftRangeSub: "openPickerLeftRangeSub", openPickerRightRangeSub: "openPickerRightRangeSub", showTime: "showTime" }, outputs: { onPanelChange: "onPanelChange", onCalendarChange: "onCalendarChange", onOk: "onOk", onOpenChange: "onOpenChange" }, exportAs: ["cmacsDatePicker"], features: [i0.ɵɵProvidersFeature([
            DatePickerService,
            {
                provide: NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: forwardRef(() => CmacsDatePickerComponent)
            }
        ]), i0.ɵɵNgOnChangesFeature], decls: 5, vars: 38, consts: [[4, "ngIf"], ["cmacs-picker", "", 2, "display", "inherit", "align-items", "center", "width", "100%", 3, "isRange", "open", "timeline", "cmacsOpen", "dir", "separator", "disabled", "inputReadOnly", "format", "allowClear", "autoFocus", "placeholder", "dropdownClassName", "noAnimation", "suffixIcon", "id", "openChange", "focusChange"], [3, "isRange", "timeline", "defaultPickerValue", "showWeek", "showWeekCustom", "panelMode", "locale", "showToday", "showNow", "showTime", "dateRender", "disabledDate", "disabledTime", "extraFooter", "ranges", "dir", "panelModeChange", "calendarChange", "resultOk"], [1, "cmacs-open-date-title"], [1, "cmacs-open-date-subtitle"], [1, "cmacs-open-date-picker-placeholder"], [1, "cmacs-open-range-picker-left"], [1, "cmacs-open-range-picker-right"]], template: function CmacsDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵproperty("isRange", ctx.isRange)("open", ctx.nzOpen)("timeline", ctx.timeline)("cmacsOpen", ctx.cmacsOpen)("dir", ctx.dir)("separator", ctx.separator)("disabled", ctx.disabled)("inputReadOnly", ctx.inputReadOnly)("format", ctx.format)("allowClear", ctx.allowClear)("autoFocus", ctx.autoFocus)("placeholder", ctx.placeHolder)("dropdownClassName", ctx.dropdownClassName)("noAnimation", !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("suffixIcon", ctx.suffixIcon)("id", ctx.nzId);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("isRange", ctx.isRange)("timeline", ctx.timeline)("defaultPickerValue", ctx.defaultPickerValue)("showWeek", ctx.mode === "week" || ctx.showWeekCustom)("showWeekCustom", ctx.showWeekCustom)("panelMode", ctx.panelMode)("locale", ctx.locale == null ? null : ctx.locale.lang)("showToday", ctx.mode === "date" && ctx.showToday && !ctx.isRange && !ctx.showTime)("showNow", ctx.mode === "date" && ctx.showNow && !ctx.isRange && !!ctx.showTime)("showTime", ctx.showTime)("dateRender", ctx.dateRender)("disabledDate", ctx.disabledDate)("disabledTime", ctx.disabledTime)("extraFooter", ctx.extraFooter)("ranges", ctx.ranges)("dir", ctx.dir);
    } }, directives: [i6.NgIf, i7.CmacsPickerComponent, i4.Dir, i8.DateRangePopupComponent], styles: [".ant-picker-datetime-panel .ant-picker-date-panel{width:calc(100% - 125px)!important;display:inline-flex;font-size:12px}.ant-picker-content{border-collapse:separate;border-spacing:0 8px}.ant-picker-content th{font-size:12px}.ant-picker-datetime-panel .ant-picker-time-panel{width:125px!important;display:inline-flex;font-size:12px}.ant-picker-time-panel .ant-picker-content{display:inline-flex}.ant-picker-date-panel{width:308px}.ant-picker-cell-in-view.ant-picker-cell-in-range:before{background:#f3f3f4;height:30px}.ant-picker-cell{margin:3px 0}.ant-picker-cell-range-end .ant-picker-cell-inner{background-color:#fff!important;color:#656c79!important;border:1px solid #2a7cff!important;font-weight:500!important;border-radius:3px!important}.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single):before,.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single):before{background:#f3f3f4;height:30px}.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end:before,.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start:before,.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover:before,.ant-picker-cell-in-view.ant-picker-cell-range-end.ant-picker-cell-range-hover:before,.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single).ant-picker-cell-range-hover-end:before,.ant-picker-cell-in-view.ant-picker-cell-range-start.ant-picker-cell-range-hover:before,.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single).ant-picker-cell-range-hover-start:before{background:#f3f3f4}.ant-picker-date-panel .ant-picker-content th{max-width:30px!important;max-height:30px!important;height:auto!important}.ant-picker-date-range-wrapper .ant-picker-panel{width:50%}.ant-picker-date-panel .ant-picker-content th{max-width:36px!important;width:auto!important}.ant-picker-date-panel,.ant-picker-decade-panel,.ant-picker-month-panel,.ant-picker-quarter-panel,.ant-picker-week-panel,.ant-picker-year-panel{width:auto!important}.ant-picker-date-panel .ant-picker-header-super-next-btn,.ant-picker-date-panel .ant-picker-header-super-prev-btn,.ant-picker-week-panel .ant-picker-header-super-next-btn,.ant-picker-week-panel .ant-picker-header-super-prev-btn{display:none!important}.ant-picker-cell-week,.ant-picker-date-panel .ant-picker-content th{width:30px;height:30px;font-size:12px}.ant-picker-week-panel-row:not(.cmacs-picker-week-panel-row) .ant-picker-cell-in-view.ant-picker-cell-in-range:before{background:#bae7ff!important}.ant-picker-datetime-panel .ant-picker-time-panel-column:after{height:0}.ant-picker-super-next-icon:after,.ant-picker-super-prev-icon:after{content:unset}.ant-picker-input>input{color:#656c79}.ant-picker-separator i{display:none}.ant-picker-separator:after{content:\"~\"}.ant-picker-input>input-focused,.ant-picker-input>input:focus{border-color:transparent;border-right-width:1px!important;outline:0;box-shadow:none}.ant-picker-range .ant-picker-active-bar{background:transparent}.ant-picker-focused:not(.ant-picker-disabled),.ant-picker:not(.ant-picker-disabled):hover{border-color:#bec4cd!important;border-right-width:1px!important;box-shadow:none}.ant-picker-decade-panel,.ant-picker-month-panel,.ant-picker-quarter-panel,.ant-picker-year-panel{width:auto}.ant-picker-header>button{width:20px;font-size:14px;line-height:6px;height:20px;position:relative;border-radius:3px}.ant-picker-header>button:hover{background-color:#f6f7fb;color:#656c79}.ant-picker-super-next-icon:before{font-family:ArrowLarge!important;content:\"\\e916\"}.ant-picker-super-prev-icon:before{font-family:ArrowLarge!important;content:\"\\e915\"}.ant-picker-next-icon:before{font-family:ArrowLarge!important;content:\"\\e916\"}.ant-picker-prev-icon:before{font-family:ArrowLarge!important;content:\"\\e915\"}.ant-picker-decade-panel .ant-picker-cell-inner{line-height:2.5!important}.ant-picker-panel .ant-picker-footer{border-top:none}.ant-picker-date-panel .ant-picker-content{width:100%;margin-right:0}.ant-picker-content th{color:#97a0ae;padding:0;width:30px}.ant-picker-week-panel-row{margin-top:8px}.ant-picker-week-panel-row td{padding:0;width:30px;height:30px}.ant-picker-header-view button:hover{color:#2a7cff}.ant-picker-next-icon:before,.ant-picker-prev-icon:before,.ant-picker-super-next-icon:before,.ant-picker-super-prev-icon:before{position:absolute;display:inline-block;width:20px;height:20px;font-size:20px;border:none;color:#3b3f46;line-height:20px}.ant-picker-next-icon,.ant-picker-prev-icon,.ant-picker-super-next-icon,.ant-picker-super-prev-icon{transform:none;width:20px;height:20px}.ant-picker-week-panel-row-selected td{font-weight:700;background:#cde1ff;color:#656c79}.ant-picker-cell-week{color:#acb3bf!important;font-weight:400!important}.ant-picker-week-panel-row-selected td .ant-picker-cell-inner{color:#656c79;font-weight:400}.ant-picker-week-panel-row-selected:hover td,.ant-picker-week-panel-row-selected td,.ant-picker-week-panel-row:hover td{background:#f6f7fb}.ant-picker-header{border-bottom:none;padding:17px 7px 6px}.ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner,.ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,.ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner{color:#fff;background:#2a7cff;border-radius:3px!important}.ant-picker-cell>.ant-picker-cell-inner{width:30px;color:#656c79;font-size:13px;line-height:30px}.ant-picker-date-panel .ant-picker-body,.ant-picker-week-panel .ant-picker-body{padding:11px 7px}.ant-picker-month-panel .ant-picker-cell-inner,.ant-picker-quarter-panel .ant-picker-cell-inner,.ant-picker-year-panel .ant-picker-cell-inner{min-width:32px!important;width:auto;line-height:2.5}.ant-picker-week-panel-row-selected:hover td .ant-picker-cell-inner{color:rgba(0,0,0,.65)}.ant-picker-week-panel .ant-picker-cell-selected .ant-picker-cell-inner,.ant-picker-week-panel .ant-picker-cell-selected:hover .ant-picker-cell-inner{color:#fff!important;background-color:#2a7cff!important;border-color:#2a7cff!important;font-weight:700;width:30px;height:30px}.cmacs-open-date-title{font-size:12px;font-weight:600;margin-bottom:10px}.cmacs-open-range-picker:hover .ant-calendar-range-picker-input{color:transparent}.cmacs-open-range-picker:hover .ant-calendar-picker-clear{opacity:0;display:none}.cmacs-open-date-subtitle{font-size:12px;color:#acb3bf;margin-bottom:10px}.cmacs-open-date-picker-placeholder{font-size:12px;font-weight:600;color:#acb3bf}.cmacs-open-date-picker-selected-value{color:#2a7cff}.cmacs-open-date-picker:hover .ant-calendar-picker-clear{opacity:0}.cmacs-open-range-picker-left,.cmacs-open-range-picker-right{display:inline-block}.cmacs-open-range-picker-right{float:right}.cmacs-open-range-picker-left{float:left}.ant-calendar-picker-input{box-shadow:none}.ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled){border-color:#bec4cd;color:#bec4cd}.ant-picker-cell-today:not(.ant-calendar-selected-day):not(.ant-picker-cell-disabled) .ant-picker-cell-inner{display:grid}.ant-picker-cell{color:#acb3bf}.ant-picker-cell-in-view{color:#656c79}.ant-picker-cell:before{width:30px;height:30px}.ant-picker-header-view{line-height:20px}.ant-picker-header-view button{color:#3b3f46;line-height:20px;font-size:14px}.ant-picker-cell-today:not(.ant-calendar-selected-day):not(.ant-picker-cell-disabled) .ant-picker-cell-inner{background-color:transparent;border-color:transparent;color:#656c79}.ant-picker-cell-disabled .ant-picker-cell-inner{color:#acb3bf}.ant-picker-cell-disabled:before,.ant-picker-decade-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-month-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-quarter-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-year-panel .ant-picker-cell-disabled .ant-picker-cell-inner{background:#f3f3f4}.ant-picker-cell-today:not(.ant-calendar-selected-day):not(.ant-picker-cell-disabled) .ant-picker-cell-inner:after{content:\"\u25CF\";color:#2a7cff;margin-top:-19px;font-size:10px}.ant-calendar-selected-day:not(.ant-picker-cell-disabled) .ant-picker-cell-inner{color:#fff!important;background-color:#2a7cff!important;border-color:#2a7cff}.ant-picker-time-panel-column{width:auto}.ant-picker-panel-container.ant-picker-time.ant-picker-week-number .ant-picker-panel{overflow-y:auto}.ant-picker-cell>.ant-picker-cell-inner{min-width:unset;height:30px;width:100%}.ant-calendar-header{margin-top:17px;margin-bottom:17px;border:none;height:17px;line-height:17px}.ant-calendar-header a{line-height:17px!important}.ant-calendar th{padding-top:0;padding-bottom:12px}.ant-picker-cell-inner:hover{background-color:#f6f7fb}.ant-calendar-picker-icon{color:#656c79;cursor:pointer}.ant-calendar-picker-clear,.ant-calendar-picker-icon,.ant-calendar-picker i svg{height:16px;width:16px}.ant-picker-cell-disabled.ant-picker-cell-today .ant-picker-cell-inner:before{width:30px;height:30px;left:0}.cmacs-timeline-range-popup calendar-footer{display:none}.ant-picker-cell-disabled.ant-calendar-selected-day .ant-picker-cell-inner:before{position:absolute;top:-1px;left:-1px;width:30px;height:30px}.ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner:before{content:unset}.datepickerwidth,cmacs-date-picker,cmacs-month-picker,cmacs-range-picker,cmacs-week-picker,cmacs-year-picker{width:100%}.datepickerwidth .ant-input-disabled,.datepickerwidth .ant-input[disabled]{background:#f6f7fb;cursor:default;border:1px solid #dee0e5}.datepickerwidth .ant-input-disabled+.ant-calendar-picker-icon,.datepickerwidth .ant-input[disabled]+.ant-calendar-picker-icon{color:#bec4cd;cursor:default}.cmacs-open-date-picker-input,.cmacs-open-date-picker-input:focus,.cmacs-open-date-picker-input:hover{border-top-color:transparent!important;border-left-color:transparent!important;border-right-color:transparent!important;border-radius:unset}.ant-calendar-picker:hover .cmacs-open-date-picker-icon,.cmacs-open-date-picker-icon,.cmacs-open-date-picker:hover .ant-calendar-picker-clear{color:transparent!important;display:none!important;opacity:0!important}.cmacs-open-date-picker-input{padding:0;font-size:12px;height:0;color:transparent}.cmacs-open-date-picker-input .ant-calendar-range-picker-input,.cmacs-open-date-picker-input .ant-calendar-range-picker-separator,.cmacs-open-date-picker:hover .ant-calendar-range-picker-input{color:transparent}"], encapsulation: 2, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBSU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQW1CLE1BQU0seUJBQXlCLENBQUM7QUFFaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVyRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcxRCxPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzFELE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7OztJQW1CMUIsNkJBQTRDO0lBQzFDLDhCQUFtQztJQUNqQyxZQUNGO0lBQUEsaUJBQU07SUFDTiw4QkFBc0M7SUFDcEMsWUFBd0I7SUFBQSwrQkFBdUc7SUFDL0gsWUFBcUM7SUFBQSxpQkFBTztJQUM5QyxpQkFBTTtJ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O1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsVUFBVTtrQkFBbEMsS0FBSztZQUNtQixjQUFjO2tCQUF0QyxLQUFLO1lBQ21CLGFBQWE7a0JBQXJDLEtBQUs7WUFDbUIsTUFBTTtrQkFBOUIsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFFRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ21CLE9BQU87a0JBQS9CLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDaUIsU0FBUztrQkFBL0IsS0FBSztZQUNpQixVQUFVO2tCQUFoQyxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBR2EsYUFBYTtrQkFBL0IsTUFBTTtZQUNZLGdCQUFnQjtrQkFBbEMsTUFBTTtZQUNZLElBQUk7a0JBQXRCLE1BQU07WUFDWSxZQUFZO2tCQUE5QixNQUFNO1lBRUUsZUFBZTtrQkFBdkIsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLHNCQUFzQjtrQkFBOUIsS0FBSztZQUNHLHVCQUF1QjtrQkFBL0IsS0FBSztZQUU2QyxNQUFNO2tCQUF4RCxTQUFTO21CQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUVwQyxRQUFRO2tCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSwgY2xvbmVEYXRlLCBDb21wYXRpYmxlVmFsdWUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgRnVuY3Rpb25Qcm9wLCBOelNhZmVBbnksIE9uQ2hhbmdlVHlwZSwgT25Ub3VjaGVkVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgdG9Cb29sZWFuLCB2YWx1ZUZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56RGF0ZVBpY2tlckkxOG5JbnRlcmZhY2UsIE56RGF0ZVBpY2tlckxhbmdJMThuSW50ZXJmYWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IE56Q29uZmlnS2V5LCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcclxuaW1wb3J0IHsgQ21hY3NQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3BpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wYXRpYmxlRGF0ZSwgRGlzYWJsZWRUaW1lRm4sIE56RGF0ZU1vZGUsIFByZXNldFJhbmdlcywgU3VwcG9ydFRpbWVPcHRpb25zIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XHJcblxyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcblxyXG4vL2NvbnN0IFBPUFVQX1NUWUxFX1BBVENIID0geyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9OyAgQWltIHRvIG92ZXJyaWRlIGFudGQncyBzdHlsZSB0byBzdXBwb3J0IG92ZXJsYXkncyBwb3NpdGlvbiBzdHJhdGVneSAocG9zaXRpb246YWJzb2x1dGUgd2lsbCBjYXVzZSBpdCBub3Qgd29ya2luZyBiZWFjdXNlIHRoZSBvdmVybGF5IGNhbid0IGdldCB0aGUgaGVpZ2h0L3dpZHRoIG9mIGl0J3MgY29udGVudClcclxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdkYXRlUGlja2VyJztcclxuXHJcbmV4cG9ydCB0eXBlIE56RGF0ZVBpY2tlclNpemVUeXBlID0gJ2xhcmdlJyB8ICdkZWZhdWx0JyB8ICdzbWFsbCc7XHJcblxyXG4vKipcclxuICogVGhlIGJhc2UgcGlja2VyIGZvciBhbGwgY29tbW9uIEFQSXNcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1kYXRlLXBpY2tlcixjbWFjcy13ZWVrLXBpY2tlcixjbWFjcy1tb250aC1waWNrZXIsY21hY3MteWVhci1waWNrZXIsY21hY3MtcmFuZ2UtcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzRGF0ZVBpY2tlcicsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc09wZW4gJiYgIWlzUmFuZ2VcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1vcGVuLWRhdGUtdGl0bGVcIj5cclxuICAgICAgICAgICAge3tvcGVuUGlja2VyVGl0bGV9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtb3Blbi1kYXRlLXN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgIHt7b3BlblBpY2tlclN1YnRpdGxlfX06IDxzcGFuIGNsYXNzPVwiY21hY3Mtb3Blbi1kYXRlLXBpY2tlci1wbGFjZWhvbGRlclwiIFtjbGFzcy5jbWFjcy1vcGVuLWRhdGUtcGlja2VyLXNlbGVjdGVkLXZhbHVlXT1cInZhbHVlXCI+XHJcbiAgICAgICAgICAgIHt7dmFsdWUgPyBwYXJzZURhdGUoKSA6IHBsYWNlSG9sZGVyfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzT3BlbiAmJiBpc1JhbmdlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtb3Blbi1kYXRlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIHt7b3BlblBpY2tlclRpdGxlfX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLW9wZW4tcmFuZ2UtcGlja2VyLWxlZnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLW9wZW4tZGF0ZS1zdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgIHt7b3BlblBpY2tlckxlZnRSYW5nZVN1Yn19OiA8c3BhbiBjbGFzcz1cImNtYWNzLW9wZW4tZGF0ZS1waWNrZXItcGxhY2Vob2xkZXJcIiBbY2xhc3MuY21hY3Mtb3Blbi1kYXRlLXBpY2tlci1zZWxlY3RlZC12YWx1ZV09XCJ2YWx1ZSAmJiB2YWx1ZS5sZW5ndGhcIj5cclxuICAgICAgICAgICAge3t2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPyBwYXJzZURhdGUoKVswXSA6IHBsYWNlSG9sZGVyfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtb3Blbi1yYW5nZS1waWNrZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLW9wZW4tZGF0ZS1zdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgIHt7b3BlblBpY2tlclJpZ2h0UmFuZ2VTdWJ9fTogPHNwYW4gY2xhc3M9XCJjbWFjcy1vcGVuLWRhdGUtcGlja2VyLXBsYWNlaG9sZGVyXCIgW2NsYXNzLmNtYWNzLW9wZW4tZGF0ZS1waWNrZXItc2VsZWN0ZWQtdmFsdWVdPVwidmFsdWUgJiYgdmFsdWUubGVuZ3RoXCI+XHJcbiAgICAgICAgICAgIHt7dmFsdWUgJiYgdmFsdWUubGVuZ3RoID8gcGFyc2VEYXRlKClbMV0gOiBwbGFjZUhvbGRlcn19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNtYWNzLXBpY2tlclxyXG4gICAgICBbaXNSYW5nZV09XCJpc1JhbmdlXCJcclxuICAgICAgW29wZW5dPVwibnpPcGVuXCJcclxuICAgICAgW3RpbWVsaW5lXT1cInRpbWVsaW5lXCJcclxuICAgICAgW2NtYWNzT3Blbl09XCJjbWFjc09wZW5cIlxyXG4gICAgICBbZGlyXT1cImRpclwiXHJcbiAgICAgIFtzZXBhcmF0b3JdPVwic2VwYXJhdG9yXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW2lucHV0UmVhZE9ubHldPVwiaW5wdXRSZWFkT25seVwiXHJcbiAgICAgIFtmb3JtYXRdPVwiZm9ybWF0XCJcclxuICAgICAgW2FsbG93Q2xlYXJdPVwiYWxsb3dDbGVhclwiXHJcbiAgICAgIFthdXRvRm9jdXNdPVwiYXV0b0ZvY3VzXCJcclxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyXCJcclxuICAgICAgc3R5bGU9XCJkaXNwbGF5OiBpbmhlcml0OyBhbGlnbi1pdGVtczogY2VudGVyOyB3aWR0aDogMTAwJTtcIlxyXG4gICAgICBbZHJvcGRvd25DbGFzc05hbWVdPVwiZHJvcGRvd25DbGFzc05hbWVcIlxyXG4gICAgICBbY2xhc3MuYW50LXBpY2tlci1kcm9wZG93bi1ydGxdPVwiZGlyID09PSAncnRsJ1wiXHJcbiAgICAgIFtub0FuaW1hdGlvbl09XCIhIW5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgW3N1ZmZpeEljb25dPVwic3VmZml4SWNvblwiXHJcbiAgICAgIChvcGVuQ2hhbmdlKT1cIm56T25PcGVuQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAoZm9jdXNDaGFuZ2UpPVwib25Gb2N1c0NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgW2lkXT1cIm56SWRcIlxyXG4gICAgPlxyXG4gICAgICA8ZGF0ZS1yYW5nZS1wb3B1cFxyXG4gICAgICAgIFtpc1JhbmdlXT1cImlzUmFuZ2VcIlxyXG4gICAgICAgIFt0aW1lbGluZV09XCJ0aW1lbGluZVwiXHJcbiAgICAgICAgW2RlZmF1bHRQaWNrZXJWYWx1ZV09XCJkZWZhdWx0UGlja2VyVmFsdWVcIlxyXG4gICAgICAgIFtzaG93V2Vla109XCJtb2RlID09PSAnd2VlaycgfHwgc2hvd1dlZWtDdXN0b21cIlxyXG4gICAgICAgIFtzaG93V2Vla0N1c3RvbV09XCJzaG93V2Vla0N1c3RvbVwiXHJcbiAgICAgICAgW3BhbmVsTW9kZV09XCJwYW5lbE1vZGVcIlxyXG4gICAgICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwib25QYW5lbE1vZGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKGNhbGVuZGFyQ2hhbmdlKT1cIm56T25DYWxlbmRhckNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbbG9jYWxlXT1cImxvY2FsZT8ubGFuZyFcIlxyXG4gICAgICAgIFtzaG93VG9kYXldPVwibW9kZSA9PT0gJ2RhdGUnICYmIHNob3dUb2RheSAmJiAhaXNSYW5nZSAmJiAhc2hvd1RpbWVcIlxyXG4gICAgICAgIFtzaG93Tm93XT1cIm1vZGUgPT09ICdkYXRlJyAmJiBzaG93Tm93ICYmICFpc1JhbmdlICYmICEhc2hvd1RpbWVcIlxyXG4gICAgICAgIFtzaG93VGltZV09XCJzaG93VGltZVwiXHJcbiAgICAgICAgW2RhdGVSZW5kZXJdPVwiZGF0ZVJlbmRlclwiXHJcbiAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxyXG4gICAgICAgIFtkaXNhYmxlZFRpbWVdPVwiZGlzYWJsZWRUaW1lXCJcclxuICAgICAgICBbZXh0cmFGb290ZXJdPVwiZXh0cmFGb290ZXJcIlxyXG4gICAgICAgIFtyYW5nZXNdPVwicmFuZ2VzXCJcclxuICAgICAgICBbZGlyXT1cImRpclwiXHJcbiAgICAgICAgKHJlc3VsdE9rKT1cIm9uUmVzdWx0T2soKVwiXHJcbiAgICAgID48L2RhdGUtcmFuZ2UtcG9wdXA+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXBpY2tlci1yYW5nZV0nOiBgaXNSYW5nZWAsXHJcbiAgICAnW2NsYXNzLmFudC1waWNrZXItbGFyZ2VdJzogYHNpemUgPT09ICdsYXJnZSdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXNtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcclxuICAgICdbY2xhc3MuYW50LXBpY2tlci1kaXNhYmxlZF0nOiBgZGlzYWJsZWRgLFxyXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1waWNrZXItYm9yZGVybGVzc10nOiBgYm9yZGVybGVzc2AsXHJcbiAgICAnW2NsYXNzLmNtYWNzLW9wZW4tZGF0ZS1waWNrZXJdJzogJ2NtYWNzT3BlbicsXHJcbiAgICAnKGNsaWNrKSc6ICdwaWNrZXIub25DbGlja0lucHV0Qm94KCRldmVudCknXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIERhdGVQaWNrZXJTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzRGF0ZVBpY2tlckNvbXBvbmVudClcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0RhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTsgLy8gSW5kaWNhdGUgd2hldGhlciB0aGUgdmFsdWUgaXMgYSByYW5nZSB2YWx1ZVxyXG4gIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBleHRyYUZvb3Rlcj86IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBzdHJpbmc7XHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuXHJcbiAgcHVibGljIHBhbmVsTW9kZTogTnpEYXRlTW9kZSB8IE56RGF0ZU1vZGVbXSA9ICdkYXRlJztcclxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgaXNDdXN0b21QbGFjZUhvbGRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaXNDdXN0b21Gb3JtYXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIG56U2hvd1RpbWU6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLy8gLS0tIENvbW1vbiBBUElcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbGVhcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRpbWVsaW5lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJsZXNzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dXZWVrQ3VzdG9tOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlucHV0UmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpPcGVuPzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY21hY3NPcGVuPzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU/OiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBsb2NhbGUhOiBOekRhdGVQaWNrZXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmcgfCBzdHJpbmdbXSA9ICcnO1xyXG4gIC8vQElucHV0KCkgcG9wdXBTdHlsZTogb2JqZWN0ID0gUE9QVVBfU1RZTEVfUEFUQ0g7XHJcbiAgQElucHV0KCkgZHJvcGRvd25DbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2l6ZTogTnpEYXRlUGlja2VyU2l6ZVR5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgZm9ybWF0ITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRhdGVSZW5kZXI/OiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgc3RyaW5nIHwgRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBkaXNhYmxlZFRpbWU/OiBEaXNhYmxlZFRpbWVGbjtcclxuICBASW5wdXQoKSBuelJlbmRlckV4dHJhRm9vdGVyPzogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZyB8IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1RvZGF5OiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBtb2RlOiBOekRhdGVNb2RlID0gJ2RhdGUnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93Tm93OiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSByYW5nZXM/OiBQcmVzZXRSYW5nZXM7XHJcbiAgQElucHV0KCkgZGVmYXVsdFBpY2tlclZhbHVlOiBDb21wYXRpYmxlRGF0ZSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgc2VwYXJhdG9yPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgc3VmZml4SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdjYWxlbmRhcic7XHJcbiAgQElucHV0KCkgbnpJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgd2lkdGg6IGFueTtcclxuXHJcbiAgLy8gVE9ETyhAd2VucWk3MykgVGhlIFBhbmVsTW9kZSBuZWVkIG5hbWVkIGZvciBlYWNoIHBpY2tlcnMgYW5kIGV4cG9ydFxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblBhbmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdIHwgc3RyaW5nIHwgc3RyaW5nW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2FsZW5kYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PERhdGUgfCBudWxsPj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25PayA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZURhdGUgfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbk9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgpIG9wZW5QaWNrZXJUaXRsZSA9ICcnO1xyXG4gIEBJbnB1dCgpIG9wZW5QaWNrZXJTdWJ0aXRsZSA9ICcnO1xyXG4gIEBJbnB1dCgpIG9wZW5QaWNrZXJMZWZ0UmFuZ2VTdWIgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyUmlnaHRSYW5nZVN1YiA9ICcnO1xyXG5cclxuICBAVmlld0NoaWxkKENtYWNzUGlja2VyQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBwaWNrZXIhOiBDbWFjc1BpY2tlckNvbXBvbmVudDtcclxuXHJcbiAgQElucHV0KCkgZ2V0IHNob3dUaW1lKCk6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTaG93VGltZTtcclxuICB9XHJcblxyXG4gIHNldCBzaG93VGltZSh2YWx1ZTogU3VwcG9ydFRpbWVPcHRpb25zIHwgYm9vbGVhbikge1xyXG4gICAgdGhpcy5uelNob3dUaW1lID0gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDogdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHBhcnNlRGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSBhcyBDYW5keURhdGU7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBtb21lbnQocGFyc2VkVmFsdWUubmF0aXZlRGF0ZSkubG9jYWxlKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUpO1xyXG4gICAgICByZXR1cm4gZGF0ZS5mb3JtYXQodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/ICdERC4gTU1NIFlZWVknIDogJ01NTSBERCwgWVlZWScpO1xyXG4gICAgfVxyXG4gICAgbGV0IHBhcnNlZFZhbHVlcyA9IFtdO1xyXG4gICAgY29uc3QgY29lcmNlVmFsdWVzID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSBhcyBDYW5keURhdGVbXTtcclxuXHJcbiAgICBmb3IgKGxldCB2YWwgb2YgY29lcmNlVmFsdWVzKSB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gdmFsIGFzIENhbmR5RGF0ZTtcclxuICAgICAgY29uc3QgZGF0ZSA9IG1vbWVudChwYXJzZWRWYWx1ZS5uYXRpdmVEYXRlKS5sb2NhbGUodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSk7XHJcbiAgICAgIHBhcnNlZFZhbHVlcy5wdXNoKGRhdGUuZm9ybWF0KHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnREQuIE1NTSBZWVlZJyA6ICdNTU0gREQsIFlZWVknKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VkVmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwdWJsaWMgZGF0ZVBpY2tlclNlcnZpY2U6IERhdGVQaWNrZXJTZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByb3RlY3RlZCBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1waWNrZXInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gU3Vic2NyaWJlIHRoZSBldmVyeSBsb2NhbGUgY2hhbmdlIGlmIHRoZSBsb2NhbGUgaXMgbm90IGhhbmRsZWQgYnkgdXNlclxyXG4gICAgaWYgKCF0aGlzLmxvY2FsZSkge1xyXG4gICAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldExvY2FsZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmlzUmFuZ2UgPSB0aGlzLmlzUmFuZ2U7XHJcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmluaXRWYWx1ZSgpO1xyXG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5lbWl0VmFsdWUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpLnN1YnNjcmliZShfID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlO1xyXG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmluaXRpYWxWYWx1ZSA9IGNsb25lRGF0ZSh2YWx1ZSk7XHJcbiAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgICBjb25zdCB2QXNSYW5nZSA9IHZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG4gICAgICAgIGlmICh2QXNSYW5nZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMub25DaGFuZ2VGbihbdkFzUmFuZ2VbMF0/Lm5hdGl2ZURhdGUgPz8gbnVsbCwgdkFzUmFuZ2VbMV0/Lm5hdGl2ZURhdGUgPz8gbnVsbF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMub25DaGFuZ2VGbigodmFsdWUgYXMgQ2FuZHlEYXRlKS5uYXRpdmVEYXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUZuKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uVG91Y2hlZEZuKCk7XHJcbiAgICAgIC8vIFdoZW4gdmFsdWUgZW1pdHRlZCwgb3ZlcmxheSB3aWxsIGJlIGNsb3NlZFxyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldE1vZGVBbmRGb3JtYXQoKTtcclxuXHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgIC8vIGlmIChjaGFuZ2VzLnBvcHVwU3R5bGUpIHtcclxuICAgICAgLy8gQWx3YXlzIGFzc2lnbiB0aGUgcG9wdXAgc3R5bGUgcGF0Y2hcclxuICAgIC8vICB0aGlzLnBvcHVwU3R5bGUgPSB0aGlzLnBvcHVwU3R5bGUgPyB7IC4uLnRoaXMucG9wdXBTdHlsZSwgLi4uUE9QVVBfU1RZTEVfUEFUQ0ggfSA6IFBPUFVQX1NUWUxFX1BBVENIO1xyXG4gICAvLyB9XHJcblxyXG4gICAgLy8gTWFyayBhcyBjdXN0b21pemVkIHBsYWNlaG9sZGVyIGJ5IHVzZXIgb25jZSBwbGFjZUhvbGRlciBhc3NpZ25lZCBhdCB0aGUgZmlyc3QgdGltZVxyXG4gICAgaWYgKGNoYW5nZXMucGxhY2VIb2xkZXI/LmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmlzQ3VzdG9tUGxhY2VIb2xkZXIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmZvcm1hdD8uY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaXNDdXN0b21Gb3JtYXQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmxvY2FsZSkge1xyXG4gICAgICAvLyBUaGUgbG9jYWxlIGlzIGN1cnJlbnRseSBoYW5kbGVkIGJ5IHVzZXJcclxuICAgICAgdGhpcy5zZXREZWZhdWx0UGxhY2VIb2xkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5uelJlbmRlckV4dHJhRm9vdGVyKSB7XHJcbiAgICAgIHRoaXMuZXh0cmFGb290ZXIgPSB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLm56UmVuZGVyRXh0cmFGb290ZXIhKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5tb2RlKSB7XHJcbiAgICAgIHRoaXMuc2V0RGVmYXVsdFBsYWNlSG9sZGVyKCk7XHJcbiAgICAgIHRoaXMuc2V0TW9kZUFuZEZvcm1hdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95ZWQkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRNb2RlQW5kRm9ybWF0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5wdXRGb3JtYXRzOiB7IFtrZXkgaW4gTnpEYXRlTW9kZV0/OiBzdHJpbmcgfSA9IHtcclxuICAgICAgeWVhcjogJ3l5eXknLFxyXG4gICAgICBtb250aDogJ3l5eXktTU0nLFxyXG4gICAgICB3ZWVrOiB0aGlzLmkxOG4uZ2V0RGF0ZUxvY2FsZSgpID8gJ1JSUlItSUknIDogJ3l5eXktd3cnLCAvLyBGb3JtYXQgZm9yIHdlZWtcclxuICAgICAgZGF0ZTogdGhpcy5zaG93VGltZSA/ICd5eXl5LU1NLWRkIEhIOm1tOnNzJyA6ICd5eXl5LU1NLWRkJ1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXRoaXMubW9kZSkge1xyXG4gICAgICB0aGlzLm1vZGUgPSAnZGF0ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYW5lbE1vZGUgPSB0aGlzLmlzUmFuZ2UgPyBbdGhpcy5tb2RlLCB0aGlzLm1vZGVdIDogdGhpcy5tb2RlO1xyXG5cclxuICAgIC8vIERlZmF1bHQgZm9ybWF0IHdoZW4gaXQncyBlbXB0eVxyXG4gICAgaWYgKCF0aGlzLmlzQ3VzdG9tRm9ybWF0KSB7XHJcbiAgICAgIHRoaXMuZm9ybWF0ID0gaW5wdXRGb3JtYXRzW3RoaXMubW9kZSBhcyBOekRhdGVNb2RlXSE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyZWQgd2hlbiBvdmVybGF5T3BlbiBjaGFuZ2VzIChkaWZmZXJlbnQgd2l0aCByZWFsT3BlblN0YXRlKVxyXG4gICAqIEBwYXJhbSBvcGVuIFRoZSBvdmVybGF5T3BlbiBpbiBwaWNrZXIgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbnpPbk9wZW5DaGFuZ2Uob3BlbjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5vbk9wZW5DaGFuZ2UuZW1pdChvcGVuKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5waWNrZXIuc2hvd092ZXJsYXkoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMucGlja2VyLmhpZGVPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IENvbnRyb2wgdmFsdWUgYWNjZXNzb3IgaW1wbGVtZW50c1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAvLyBOT1RFOiBvbkNoYW5nZUZuL29uVG91Y2hlZEZuIHdpbGwgbm90IGJlIGFzc2lnbmVkIGlmIHVzZXIgbm90IHVzZSBhcyBuZ01vZGVsXHJcbiAgb25DaGFuZ2VGbjogT25DaGFuZ2VUeXBlID0gKCkgPT4gdm9pZCAwO1xyXG4gIG9uVG91Y2hlZEZuOiBPblRvdWNoZWRUeXBlID0gKCkgPT4gdm9pZCAwO1xyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBDb21wYXRpYmxlRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IE9uQ2hhbmdlVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogT25Ub3VjaGVkVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWRGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gfCBJbnRlcm5hbCBtZXRob2RzXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIC8vIFJlbG9hZCBsb2NhbGUgZnJvbSBpMThuIHdpdGggc2lkZSBlZmZlY3RzXHJcbiAgcHJpdmF0ZSBzZXRMb2NhbGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdEYXRlUGlja2VyJywge30pO1xyXG4gICAgdGhpcy5zZXREZWZhdWx0UGxhY2VIb2xkZXIoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXREZWZhdWx0UGxhY2VIb2xkZXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21QbGFjZUhvbGRlciAmJiB0aGlzLmxvY2FsZSkge1xyXG4gICAgICBjb25zdCBkZWZhdWx0UGxhY2Vob2xkZXI6IHsgW2tleSBpbiBOekRhdGVNb2RlXT86IHN0cmluZyB9ID0ge1xyXG4gICAgICAgIHllYXI6IHRoaXMuZ2V0UHJvcGVydHlPZkxvY2FsZSgneWVhclBsYWNlaG9sZGVyJyksXHJcbiAgICAgICAgbW9udGg6IHRoaXMuZ2V0UHJvcGVydHlPZkxvY2FsZSgnbW9udGhQbGFjZWhvbGRlcicpLFxyXG4gICAgICAgIHdlZWs6IHRoaXMuZ2V0UHJvcGVydHlPZkxvY2FsZSgnd2Vla1BsYWNlaG9sZGVyJyksXHJcbiAgICAgICAgZGF0ZTogdGhpcy5nZXRQcm9wZXJ0eU9mTG9jYWxlKCdwbGFjZWhvbGRlcicpXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBkZWZhdWx0UmFuZ2VQbGFjZWhvbGRlcjogeyBba2V5IGluIE56RGF0ZU1vZGVdPzogc3RyaW5nW10gfSA9IHtcclxuICAgICAgICB5ZWFyOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3JhbmdlWWVhclBsYWNlaG9sZGVyJyksXHJcbiAgICAgICAgbW9udGg6IHRoaXMuZ2V0UHJvcGVydHlPZkxvY2FsZSgncmFuZ2VNb250aFBsYWNlaG9sZGVyJyksXHJcbiAgICAgICAgd2VlazogdGhpcy5nZXRQcm9wZXJ0eU9mTG9jYWxlKCdyYW5nZVdlZWtQbGFjZWhvbGRlcicpLFxyXG4gICAgICAgIGRhdGU6IHRoaXMuZ2V0UHJvcGVydHlPZkxvY2FsZSgncmFuZ2VQbGFjZWhvbGRlcicpXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLnBsYWNlSG9sZGVyID0gdGhpcy5pc1JhbmdlXHJcbiAgICAgICAgPyBkZWZhdWx0UmFuZ2VQbGFjZWhvbGRlclt0aGlzLm1vZGUgYXMgTnpEYXRlTW9kZV0hXHJcbiAgICAgICAgOiBkZWZhdWx0UGxhY2Vob2xkZXJbdGhpcy5tb2RlIGFzIE56RGF0ZU1vZGVdITtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UHJvcGVydHlPZkxvY2FsZTxUIGV4dGVuZHMga2V5b2YgTnpEYXRlUGlja2VyTGFuZ0kxOG5JbnRlcmZhY2U+KHR5cGU6IFQpOiBOekRhdGVQaWNrZXJMYW5nSTE4bkludGVyZmFjZVtUXSB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2NhbGUubGFuZ1t0eXBlXSB8fCB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YShgRGF0ZVBpY2tlci5sYW5nLiR7dHlwZX1gKTtcclxuICB9XHJcblxyXG4gIC8vIFNhZmUgd2F5IG9mIHNldHRpbmcgdmFsdWUgd2l0aCBkZWZhdWx0XHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWx1ZTogQ29tcGF0aWJsZURhdGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlOiBDb21wYXRpYmxlVmFsdWUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLm1ha2VWYWx1ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5pdGlhbFZhbHVlID0gbmV3VmFsdWU7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzQ2hhbmdlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzZWQgPSB2YWx1ZTtcclxuICAgIC8vIFRPRE86IGF2b2lkIGF1dG9Gb2N1cyBjYXVzZSBjaGFuZ2UgYWZ0ZXIgY2hlY2tlZCBlcnJvclxyXG4gICAgaWYgKHRoaXMuZm9jdXNlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXBpY2tlci1mb2N1c2VkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXBpY2tlci1mb2N1c2VkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBhbmVsTW9kZUNoYW5nZShwYW5lbE1vZGU6IE56RGF0ZU1vZGUgfCBOekRhdGVNb2RlW10pOiB2b2lkIHtcclxuICAgIHRoaXMub25QYW5lbENoYW5nZS5lbWl0KHBhbmVsTW9kZSk7XHJcbiAgfVxyXG5cclxuICAvLyBFbWl0IG9uQ2FsZW5kYXJDaGFuZ2Ugd2hlbiBzZWxlY3QgZGF0ZSBieSBuei1yYW5nZS1waWNrZXJcclxuICBuek9uQ2FsZW5kYXJDaGFuZ2UodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICBjb25zdCByYW5nZVZhbHVlID0gdmFsdWUuZmlsdGVyKHggPT4geCBpbnN0YW5jZW9mIENhbmR5RGF0ZSkubWFwKHggPT4geCEubmF0aXZlRGF0ZSk7XHJcbiAgICAgIHRoaXMub25DYWxlbmRhckNoYW5nZS5lbWl0KHJhbmdlVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25SZXN1bHRPaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG4gICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5vbk9rLmVtaXQoW3ZhbHVlWzBdPy5uYXRpdmVEYXRlIHx8IG51bGwsIHZhbHVlWzFdPy5uYXRpdmVEYXRlIHx8IG51bGxdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9uT2suZW1pdChbXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5vbk9rLmVtaXQoKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlKS5uYXRpdmVEYXRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9uT2suZW1pdChudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=