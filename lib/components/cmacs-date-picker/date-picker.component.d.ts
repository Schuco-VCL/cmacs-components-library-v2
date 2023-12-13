import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { CompatibleValue } from 'ng-zorro-antd/core/time';
import { FunctionProp, NzSafeAny, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { DateHelperService, NzDatePickerI18nInterface, NzI18nService } from 'ng-zorro-antd/i18n';
import { DatePickerService } from './date-picker.service';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { CmacsPickerComponent } from './picker.component';
import { CompatibleDate, DisabledTimeFn, NzDateMode, PresetRanges, SupportTimeOptions } from './standard-types';
import * as i0 from "@angular/core";
export type NzDatePickerSizeType = 'large' | 'default' | 'small';
/**
 * The base picker for all common APIs
 */
export declare class CmacsDatePickerComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
    nzConfigService: NzConfigService;
    datePickerService: DatePickerService;
    protected i18n: NzI18nService;
    protected cdr: ChangeDetectorRef;
    private renderer;
    private elementRef;
    protected dateHelper: DateHelperService;
    private directionality;
    noAnimation?: NzNoAnimationDirective;
    isRange: boolean;
    focused: boolean;
    extraFooter?: TemplateRef<NzSafeAny> | string;
    dir: Direction;
    panelMode: NzDateMode | NzDateMode[];
    private destroyed$;
    private isCustomPlaceHolder;
    private isCustomFormat;
    private nzShowTime;
    allowClear: boolean;
    timeline: boolean;
    autoFocus: boolean;
    disabled: boolean;
    borderless: boolean;
    inputReadOnly: boolean;
    nzOpen?: boolean;
    cmacsOpen?: boolean;
    disabledDate?: (d: Date) => boolean;
    locale: NzDatePickerI18nInterface;
    placeHolder: string | string[];
    popupStyle: object;
    dropdownClassName?: string;
    size: NzDatePickerSizeType;
    format: string;
    dateRender?: TemplateRef<NzSafeAny> | string | FunctionProp<TemplateRef<Date> | string>;
    disabledTime?: DisabledTimeFn;
    nzRenderExtraFooter?: TemplateRef<NzSafeAny> | string | FunctionProp<TemplateRef<NzSafeAny> | string>;
    showToday: boolean;
    mode: NzDateMode;
    showNow: boolean;
    ranges?: PresetRanges;
    defaultPickerValue: CompatibleDate | null;
    separator?: string;
    suffixIcon: string | TemplateRef<NzSafeAny>;
    nzId: string | null;
    width: any;
    private _showWeekCustom;
    readonly onPanelChange: EventEmitter<string | string[] | NzDateMode[]>;
    readonly onCalendarChange: EventEmitter<Date[]>;
    readonly onOk: EventEmitter<CompatibleDate>;
    readonly onOpenChange: EventEmitter<boolean>;
    openPickerTitle: string;
    openPickerSubtitle: string;
    openPickerLeftRangeSub: string;
    openPickerRightRangeSub: string;
    picker: CmacsPickerComponent;
    get showTime(): SupportTimeOptions | boolean;
    set showWeekCustom(value: boolean);
    get showWeekCustom(): boolean;
    set showTime(value: SupportTimeOptions | boolean);
    parseDate(): string | any[];
    constructor(nzConfigService: NzConfigService, datePickerService: DatePickerService, i18n: NzI18nService, cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef, dateHelper: DateHelperService, directionality: Directionality, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    setModeAndFormat(): void;
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    nzOnOpenChange(open: boolean): void;
    open(): void;
    close(): void;
    onChangeFn: OnChangeType;
    onTouchedFn: OnTouchedType;
    writeValue(value: CompatibleDate): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    setDisabledState(isDisabled: boolean): void;
    private setLocale;
    private setDefaultPlaceHolder;
    private getPropertyOfLocale;
    private setValue;
    onFocusChange(value: boolean): void;
    onPanelModeChange(panelMode: NzDateMode | NzDateMode[]): void;
    nzOnCalendarChange(value: CompatibleValue): void;
    onResultOk(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsDatePickerComponent, [null, null, null, null, null, null, null, { optional: true; }, { optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsDatePickerComponent, "cmacs-date-picker,cmacs-week-picker,cmacs-month-picker,cmacs-year-picker,cmacs-range-picker", ["cmacsDatePicker"], { "allowClear": { "alias": "allowClear"; "required": false; }; "timeline": { "alias": "timeline"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "borderless": { "alias": "borderless"; "required": false; }; "inputReadOnly": { "alias": "inputReadOnly"; "required": false; }; "nzOpen": { "alias": "nzOpen"; "required": false; }; "cmacsOpen": { "alias": "cmacsOpen"; "required": false; }; "disabledDate": { "alias": "disabledDate"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "placeHolder": { "alias": "placeHolder"; "required": false; }; "popupStyle": { "alias": "popupStyle"; "required": false; }; "dropdownClassName": { "alias": "dropdownClassName"; "required": false; }; "size": { "alias": "size"; "required": false; }; "format": { "alias": "format"; "required": false; }; "dateRender": { "alias": "dateRender"; "required": false; }; "disabledTime": { "alias": "disabledTime"; "required": false; }; "nzRenderExtraFooter": { "alias": "nzRenderExtraFooter"; "required": false; }; "showToday": { "alias": "showToday"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "showNow": { "alias": "showNow"; "required": false; }; "ranges": { "alias": "ranges"; "required": false; }; "defaultPickerValue": { "alias": "defaultPickerValue"; "required": false; }; "separator": { "alias": "separator"; "required": false; }; "suffixIcon": { "alias": "suffixIcon"; "required": false; }; "nzId": { "alias": "nzId"; "required": false; }; "width": { "alias": "width"; "required": false; }; "openPickerTitle": { "alias": "openPickerTitle"; "required": false; }; "openPickerSubtitle": { "alias": "openPickerSubtitle"; "required": false; }; "openPickerLeftRangeSub": { "alias": "openPickerLeftRangeSub"; "required": false; }; "openPickerRightRangeSub": { "alias": "openPickerRightRangeSub"; "required": false; }; "showTime": { "alias": "showTime"; "required": false; }; "showWeekCustom": { "alias": "showWeekCustom"; "required": false; }; }, { "onPanelChange": "onPanelChange"; "onCalendarChange": "onCalendarChange"; "onOk": "onOk"; "onOpenChange": "onOpenChange"; }, never, never, false, never>;
}
//# sourceMappingURL=date-picker.component.d.ts.map