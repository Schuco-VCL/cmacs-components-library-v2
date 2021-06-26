import { __decorate } from "tslib";
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isValid } from 'date-fns';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { warn } from 'ng-zorro-antd/core/logger';
import { InputBoolean, isNil } from 'ng-zorro-antd/core/util';
import { of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "@angular/cdk/bidi";
import * as i5 from "@angular/forms";
import * as i6 from "ng-zorro-antd/core/outlet";
import * as i7 from "@angular/common";
import * as i8 from "@angular/cdk/overlay";
import * as i9 from "ng-zorro-antd/core/overlay";
import * as i10 from "ng-zorro-antd/core/transition-patch";
import * as i11 from "ng-zorro-antd/icon";
import * as i12 from "./cmacs-datetime-picker-panel.component";
const _c0 = ["inputElement"];
function CmacsDateTimePickerComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suffixIcon_r4 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", suffixIcon_r4);
} }
function CmacsDateTimePickerComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵlistener("click", function CmacsDateTimePickerComponent_span_6_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onClickClearBtn($event); });
    i0.ɵɵelement(1, "i", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", ctx_r2.clearText)("title", ctx_r2.clearText);
} }
function CmacsDateTimePickerComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵelementStart(2, "div", 12);
    i0.ɵɵelementStart(3, "cmacs-datetime-picker-panel", 13);
    i0.ɵɵlistener("ngModelChange", function CmacsDateTimePickerComponent_ng_template_7_Template_cmacs_datetime_picker_panel_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.value = $event; })("ngModelChange", function CmacsDateTimePickerComponent_ng_template_7_Template_cmacs_datetime_picker_panel_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onPanelValueChange($event); })("closePanel", function CmacsDateTimePickerComponent_ng_template_7_Template_cmacs_datetime_picker_panel_closePanel_3_listener() { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.setCurrentValueAndClose(); });
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@slideMotion", "enter");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r3.popupClassName)("format", ctx_r3.format)("nzHourStep", ctx_r3.hourStep)("nzMinuteStep", ctx_r3.minuteStep)("nzSecondStep", ctx_r3.secondStep)("hideSeconds", ctx_r3.hideSeconds)("nzDisabledHours", ctx_r3.disabledHours)("nzDisabledMinutes", ctx_r3.disabledMinutes)("nzDisabledSeconds", ctx_r3.disabledSeconds)("nzPlaceHolder", ctx_r3.placeHolder || i0.ɵɵpipeBind1(4, 20, ctx_r3.i18nPlaceHolder$))("nzHideDisabledOptions", ctx_r3.hideDisabledOptions)("nzUse12Hours", ctx_r3.use12Hours)("nzDefaultOpenValue", ctx_r3.defaultOpenValue)("nzAddOn", ctx_r3.addOn)("nzClearText", ctx_r3.clearText)("nzNowText", ctx_r3.nowText)("nzOkText", ctx_r3.okText)("nzAllowEmpty", ctx_r3.allowEmpty)("ngModel", ctx_r3.value);
} }
const _c1 = function () { return ["cmacs-datetime-picker-dropdown"]; };
const NZ_CONFIG_MODULE_NAME = 'timePicker';
export class CmacsDateTimePickerComponent {
    constructor(nzConfigService, i18n, element, renderer, cdr, dateHelper, platform, elementRef, directionality) {
        this.nzConfigService = nzConfigService;
        this.i18n = i18n;
        this.element = element;
        this.renderer = renderer;
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this.platform = platform;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.destroy$ = new Subject();
        this.isInit = false;
        this.focused = false;
        this.inputValue = '';
        this.value = null;
        this.preValue = null;
        this.calcWidth = 0;
        this.i18nPlaceHolder$ = of(undefined);
        this.overlayPositions = [
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
                offsetY: 3
            }
        ];
        this.dir = 'ltr';
        this.size = null;
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.clearText = 'clear';
        this.nowText = '';
        this.okText = '';
        this.popupClassName = '';
        this.placeHolder = '';
        this.format = 'HH:mm:ss';
        this.cmacsOpen = false;
        this.use12Hours = false;
        this.suffixIcon = 'clock-circle';
        this.openChange = new EventEmitter();
        this.hideDisabledOptions = false;
        this.hideSeconds = false;
        this.allowEmpty = true;
        this.disabled = false;
        this.autoFocus = false;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-picker');
    }
    emitValue(value) {
        this.setValue(value, true);
        if (this._onChange) {
            this._onChange(this.value);
        }
        if (this._onTouched) {
            this._onTouched();
        }
    }
    setValue(value, syncPreValue = false) {
        if (syncPreValue) {
            this.preValue = isValid(value) ? new Date(value) : null;
        }
        this.value = isValid(value) ? new Date(value) : null;
        this.inputValue = this.dateHelper.format(value, this.format);
        this.cdr.markForCheck();
    }
    open() {
        if (this.disabled || this.cmacsOpen) {
            return;
        }
        this.focus();
        this.setPanelWidth();
        this.cmacsOpen = true;
        this.openChange.emit(this.cmacsOpen);
    }
    setPanelWidth() {
        this.calcWidth = this.elementRef.nativeElement.offsetWidth;
    }
    close() {
        this.cmacsOpen = false;
        this.cdr.markForCheck();
        this.openChange.emit(this.cmacsOpen);
    }
    updateAutoFocus() {
        if (this.isInit && !this.disabled) {
            if (this.autoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    }
    onClickClearBtn(event) {
        event.stopPropagation();
        this.emitValue(null);
    }
    onClickOutside(event) {
        if (!this.element.nativeElement.contains(event.target)) {
            this.setCurrentValueAndClose();
        }
    }
    onFocus(value) {
        this.focused = value;
    }
    focus() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    }
    blur() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    }
    onKeyupEsc() {
        this.setValue(this.preValue);
    }
    onKeyupEnter() {
        if (this.cmacsOpen && isValid(this.value)) {
            this.setCurrentValueAndClose();
        }
        else if (!this.cmacsOpen) {
            this.open();
        }
    }
    onInputChange(str) {
        if (!this.platform.TRIDENT && document.activeElement === this.inputRef.nativeElement) {
            this.open();
            this.parseTimeString(str);
        }
    }
    onPanelValueChange(value) {
        this.setValue(value);
        this.focus();
    }
    setCurrentValueAndClose() {
        this.emitValue(this.value);
        this.close();
    }
    ngOnInit() {
        var _a;
        this.inputSize = Math.max(8, this.format.length) + 2;
        this.origin = new CdkOverlayOrigin(this.element);
        this.i18nPlaceHolder$ = this.i18n.localeChange.pipe(map((nzLocale) => nzLocale.TimePicker.placeholder));
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnChanges(changes) {
        const { nzUse12Hours, format, disabled, autoFocus } = changes;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !format) {
            this.format = 'h:mm:ss a';
        }
        if (disabled) {
            const value = disabled.currentValue;
            const input = this.inputRef.nativeElement;
            if (value) {
                this.renderer.setAttribute(input, 'disabled', '');
            }
            else {
                this.renderer.removeAttribute(input, 'disabled');
            }
        }
        if (autoFocus) {
            this.updateAutoFocus();
        }
    }
    parseTimeString(str) {
        const value = this.dateHelper.parseTime(str, this.format) || null;
        if (isValid(value)) {
            this.value = value;
            this.cdr.markForCheck();
        }
    }
    ngAfterViewInit() {
        this.isInit = true;
        this.updateAutoFocus();
    }
    writeValue(time) {
        let result;
        if (time instanceof Date) {
            result = time;
        }
        else if (isNil(time)) {
            result = null;
        }
        else {
            warn('Non-Date type is not recommended for time-picker, use "Date" type.');
            result = new Date(time);
        }
        this.setValue(result, true);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    }
}
CmacsDateTimePickerComponent.ɵfac = function CmacsDateTimePickerComponent_Factory(t) { return new (t || CmacsDateTimePickerComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i2.NzI18nService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.DateHelperService), i0.ɵɵdirectiveInject(i3.Platform), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i4.Directionality, 8)); };
CmacsDateTimePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsDateTimePickerComponent, selectors: [["cmacs-datetime-picker"]], viewQuery: function CmacsDateTimePickerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputRef = _t.first);
    } }, hostVars: 12, hostBindings: function CmacsDateTimePickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CmacsDateTimePickerComponent_click_HostBindingHandler() { return ctx.open(); });
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-picker-large", ctx.size === "large")("ant-picker-small", ctx.size === "small")("ant-picker-disabled", ctx.disabled)("ant-picker-focused", ctx.focused)("cmacs-time-picker-opened", ctx.cmacsOpen)("ant-picker-rtl", ctx.dir === "rtl");
    } }, inputs: { size: "size", hourStep: "hourStep", minuteStep: "minuteStep", secondStep: "secondStep", clearText: "clearText", nowText: "nowText", okText: "okText", popupClassName: "popupClassName", placeHolder: "placeHolder", addOn: "addOn", defaultOpenValue: "defaultOpenValue", disabledHours: "disabledHours", disabledMinutes: "disabledMinutes", disabledSeconds: "disabledSeconds", format: "format", cmacsOpen: "cmacsOpen", use12Hours: "use12Hours", suffixIcon: "suffixIcon", hideDisabledOptions: "hideDisabledOptions", hideSeconds: "hideSeconds", allowEmpty: "allowEmpty", disabled: "disabled", autoFocus: "autoFocus" }, outputs: { openChange: "openChange" }, exportAs: ["cmacsDateTimePicker"], features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: CmacsDateTimePickerComponent, multi: true }]), i0.ɵɵNgOnChangesFeature], decls: 8, vars: 16, consts: [[1, "ant-picker-input"], ["type", "text", 1, "cmacs-date-time-picker-input", 3, "size", "placeholder", "ngModel", "disabled", "ngModelChange", "focus", "blur", "keyup.enter", "keyup.escape"], ["inputElement", ""], [1, "ant-picker-suffix"], [4, "nzStringTemplateOutlet"], ["class", "ant-picker-clear", 3, "click", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayTransformOriginOn", "detach", "overlayOutsideClick"], ["nz-icon", "", 3, "nzType"], [1, "ant-picker-clear", 3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], [1, "ant-picker-dropdown"], [1, "ant-picker-panel-container"], ["tabindex", "-1", 1, "ant-picker-panel"], [3, "ngClass", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "hideSeconds", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzPlaceHolder", "nzHideDisabledOptions", "nzUse12Hours", "nzDefaultOpenValue", "nzAddOn", "nzClearText", "nzNowText", "nzOkText", "nzAllowEmpty", "ngModel", "ngModelChange", "closePanel"]], template: function CmacsDateTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "input", 1, 2);
        i0.ɵɵlistener("ngModelChange", function CmacsDateTimePickerComponent_Template_input_ngModelChange_1_listener($event) { return ctx.inputValue = $event; })("focus", function CmacsDateTimePickerComponent_Template_input_focus_1_listener() { return ctx.onFocus(true); })("blur", function CmacsDateTimePickerComponent_Template_input_blur_1_listener() { return ctx.onFocus(false); })("keyup.enter", function CmacsDateTimePickerComponent_Template_input_keyup_enter_1_listener() { return ctx.onKeyupEnter(); })("keyup.escape", function CmacsDateTimePickerComponent_Template_input_keyup_escape_1_listener() { return ctx.onKeyupEsc(); })("ngModelChange", function CmacsDateTimePickerComponent_Template_input_ngModelChange_1_listener($event) { return ctx.onInputChange($event); });
        i0.ɵɵpipe(3, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "span", 3);
        i0.ɵɵtemplate(5, CmacsDateTimePickerComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, CmacsDateTimePickerComponent_span_6_Template, 2, 2, "span", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, CmacsDateTimePickerComponent_ng_template_7_Template, 5, 22, "ng-template", 6);
        i0.ɵɵlistener("detach", function CmacsDateTimePickerComponent_Template_ng_template_detach_7_listener() { return ctx.close(); })("overlayOutsideClick", function CmacsDateTimePickerComponent_Template_ng_template_overlayOutsideClick_7_listener($event) { return ctx.onClickOutside($event); });
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("size", ctx.inputSize)("placeholder", ctx.placeHolder || i0.ɵɵpipeBind1(3, 13, ctx.i18nPlaceHolder$))("ngModel", ctx.inputValue)("disabled", ctx.disabled);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.suffixIcon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.allowEmpty && !ctx.disabled && ctx.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.cmacsOpen)("cdkConnectedOverlayOffsetY", -2)("cdkConnectedOverlayWidth", ctx.calcWidth)("cdkConnectedOverlayPanelClass", i0.ɵɵpureFunction0(15, _c1))("cdkConnectedOverlayTransformOriginOn", ".ant-picker-dropdown");
    } }, directives: [i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i6.NzStringTemplateOutletDirective, i7.NgIf, i8.CdkConnectedOverlay, i9.NzConnectedOverlayDirective, i10.ɵNzTransitionPatchDirective, i11.NzIconDirective, i12.CmacsDatetimePickerPanelComponent, i7.NgClass], pipes: [i7.AsyncPipe], styles: [".cmacs-datetime-picker-input-number{width:55px;height:30px!important;margin:11px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif}.cmacs-date-time-picker-input{color:#acb3bf!important}.ant-picker-input .ant-picker-suffix{color:#656c79!important}.ant-picker-time-panel .ant-picker-content{height:unset}cmacs-select .ant-select-selection{height:30px}::ng-deep cmacs-datetime-picker.ant-time-picker .ant-time-picker-input[disabled]{background:#f6f7fb;cursor:default;border:1px solid #dee0e5}::ng-deep cmacs-datetime-picker.ant-time-picker .ant-time-picker-input[disabled]+.ant-time-picker-icon{color:#bec4cd;cursor:default}.cmacs-datetime-dividers{display:inline-block;position:relative;top:-3px}.cmacs-datetime-picker .ant-time-picker-panel-inner{width:224px!important}.cmacs-datetime-picker .ampmdropdown{width:calc(100% - 156px)}::ng-deep .cmacs-datetime-picker .ant-time-picker-panel-inner cmacs-select.ant-select{height:30px!important;margin:12px 0!important;display:inline-flex;width:auto!important}.cmacs-datetime-picker .ant-time-picker-panel-inner.cmacs-datetime-picker-noseconds{width:148px!important}.ant-time-picker-panel-narrow .cmacs-datetime-picker .ant-time-picker-panel-input-wrap{max-width:unset}.ant-time-picker-clear.datetime-picker-clear-disabled{opacity:0!important;z-index:0!important}"], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
__decorate([
    WithConfig()
], CmacsDateTimePickerComponent.prototype, "hourStep", void 0);
__decorate([
    WithConfig()
], CmacsDateTimePickerComponent.prototype, "minuteStep", void 0);
__decorate([
    WithConfig()
], CmacsDateTimePickerComponent.prototype, "secondStep", void 0);
__decorate([
    WithConfig()
], CmacsDateTimePickerComponent.prototype, "clearText", void 0);
__decorate([
    WithConfig()
], CmacsDateTimePickerComponent.prototype, "nowText", void 0);
__decorate([
    WithConfig()
], CmacsDateTimePickerComponent.prototype, "okText", void 0);
__decorate([
    WithConfig()
], CmacsDateTimePickerComponent.prototype, "popupClassName", void 0);
__decorate([
    WithConfig()
], CmacsDateTimePickerComponent.prototype, "format", void 0);
__decorate([
    WithConfig(),
    InputBoolean()
], CmacsDateTimePickerComponent.prototype, "use12Hours", void 0);
__decorate([
    WithConfig()
], CmacsDateTimePickerComponent.prototype, "suffixIcon", void 0);
__decorate([
    InputBoolean()
], CmacsDateTimePickerComponent.prototype, "hideDisabledOptions", void 0);
__decorate([
    InputBoolean()
], CmacsDateTimePickerComponent.prototype, "hideSeconds", void 0);
__decorate([
    WithConfig(),
    InputBoolean()
], CmacsDateTimePickerComponent.prototype, "allowEmpty", void 0);
__decorate([
    InputBoolean()
], CmacsDateTimePickerComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsDateTimePickerComponent.prototype, "autoFocus", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsDateTimePickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'cmacs-datetime-picker',
                exportAs: 'cmacsDateTimePicker',
                templateUrl: './cmacs-datetime-picker.component.html',
                styleUrls: ['./cmacs-datetime-picker.component.css'],
                host: {
                    '[class.ant-picker-large]': `size === 'large'`,
                    '[class.ant-picker-small]': `size === 'small'`,
                    '[class.ant-picker-disabled]': `disabled`,
                    '[class.ant-picker-focused]': `focused`,
                    '[class.cmacs-time-picker-opened]': `cmacsOpen`,
                    '[class.ant-picker-rtl]': `dir === 'rtl'`,
                    '(click)': 'open()'
                },
                animations: [slideMotion],
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: CmacsDateTimePickerComponent, multi: true }]
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i2.NzI18nService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i2.DateHelperService }, { type: i3.Platform }, { type: i0.ElementRef }, { type: i4.Directionality, decorators: [{
                type: Optional
            }] }]; }, { inputRef: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], size: [{
            type: Input
        }], hourStep: [{
            type: Input
        }], minuteStep: [{
            type: Input
        }], secondStep: [{
            type: Input
        }], clearText: [{
            type: Input
        }], nowText: [{
            type: Input
        }], okText: [{
            type: Input
        }], popupClassName: [{
            type: Input
        }], placeHolder: [{
            type: Input
        }], addOn: [{
            type: Input
        }], defaultOpenValue: [{
            type: Input
        }], disabledHours: [{
            type: Input
        }], disabledMinutes: [{
            type: Input
        }], disabledSeconds: [{
            type: Input
        }], format: [{
            type: Input
        }], cmacsOpen: [{
            type: Input
        }], use12Hours: [{
            type: Input
        }], suffixIcon: [{
            type: Input
        }], openChange: [{
            type: Output
        }], hideDisabledOptions: [{
            type: Input
        }], hideSeconds: [{
            type: Input
        }], allowEmpty: [{
            type: Input
        }], disabled: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRldGltZS1waWNrZXIvY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRldGltZS1waWNrZXIvY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7QUFFaEYsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUlOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTNELE9BQU8sRUFBZ0MsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpELE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0Is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QkFDekMsU0FBUyxFQUFFLFFBQVE7aUJBQ3BCO2dCQUNELFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDekIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyw4QkFBOEIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDcEc7O3NCQXlLSSxRQUFRO3dCQWhKa0MsUUFBUTtrQkFBcEQsU0FBUzttQkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ2xDLElBQUk7a0JBQVosS0FBSztZQUNpQixRQUFRO2tCQUE5QixLQUFLO1lBQ2lCLFVBQVU7a0JBQWhDLEtBQUs7WUFDaUIsVUFBVTtrQkFBaEMsS0FBSztZQUNpQixTQUFTO2tCQUEvQixLQUFLO1lBQ2lCLE9BQU87a0JBQTdCLEtBQUs7WUFDaUIsTUFBTTtrQkFBNUIsS0FBSztZQUNpQixjQUFjO2tCQUFwQyxLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNpQixNQUFNO2tCQUE1QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNpQyxVQUFVO2tCQUFoRCxLQUFLO1lBQ2lCLFVBQVU7a0JBQWhDLEtBQUs7WUFFYSxVQUFVO2tCQUE1QixNQUFNO1lBRWtCLG1CQUFtQjtrQkFBM0MsS0FBSztZQUNtQixXQUFXO2tCQUFuQyxLQUFLO1lBQ2lDLFVBQVU7a0JBQWhELEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENka092ZXJsYXlPcmlnaW4sIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzVmFsaWQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuXG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyB3YXJuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIGlzTmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAndGltZVBpY2tlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHNlbGVjdG9yOiAnY21hY3MtZGF0ZXRpbWUtcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzRGF0ZVRpbWVQaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1kYXRldGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWRhdGV0aW1lLXBpY2tlci5jb21wb25lbnQuY3NzJ10sXHJcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXBpY2tlci1sYXJnZV0nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2AsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXNtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItZGlzYWJsZWRdJzogYGRpc2FibGVkYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItZm9jdXNlZF0nOiBgZm9jdXNlZGAsXG4gICAgJ1tjbGFzcy5jbWFjcy10aW1lLXBpY2tlci1vcGVuZWRdJzogYGNtYWNzT3BlbmAsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gICAgJyhjbGljayknOiAnb3BlbigpJ1xuICB9LFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IENtYWNzRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQsIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0RhdGVUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIF9vbkNoYW5nZT86ICh2YWx1ZTogRGF0ZSB8IG51bGwpID0+IHZvaWQ7XG4gIHByaXZhdGUgX29uVG91Y2hlZD86ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBpc0luaXQgPSBmYWxzZTtcbiAgZm9jdXNlZCA9IGZhbHNlO1xuICBpbnB1dFZhbHVlOiBzdHJpbmcgPSAnJztcbiAgdmFsdWU6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgcHJlVmFsdWU6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgb3JpZ2luITogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgaW5wdXRTaXplPzogbnVtYmVyO1xuICBjYWxjV2lkdGg6IG51bWJlciA9IDA7XG4gIGkxOG5QbGFjZUhvbGRlciQ6IE9ic2VydmFibGU8c3RyaW5nIHwgdW5kZWZpbmVkPiA9IG9mKHVuZGVmaW5lZCk7XG4gIG92ZXJsYXlQb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFtcbiAgICB7XG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXG4gICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgICAgIG9mZnNldFk6IDNcbiAgICB9XG4gIF07XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRSZWYhOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBob3VyU3RlcDogbnVtYmVyID0gMTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBtaW51dGVTdGVwOiBudW1iZXIgPSAxO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIHNlY29uZFN0ZXA6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgY2xlYXJUZXh0OiBzdHJpbmcgPSAnY2xlYXInO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG5vd1RleHQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG9rVGV4dDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgcG9wdXBDbGFzc05hbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBwbGFjZUhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBhZGRPbj86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBkZWZhdWx0T3BlblZhbHVlPzogRGF0ZTtcbiAgQElucHV0KCkgZGlzYWJsZWRIb3Vycz86ICgpID0+IG51bWJlcltdO1xuICBASW5wdXQoKSBkaXNhYmxlZE1pbnV0ZXM/OiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXTtcbiAgQElucHV0KCkgZGlzYWJsZWRTZWNvbmRzPzogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIGZvcm1hdDogc3RyaW5nID0gJ0hIOm1tOnNzJztcbiAgQElucHV0KCkgY21hY3NPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0Qm9vbGVhbigpIHVzZTEySG91cnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBzdWZmaXhJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+ID0gJ2Nsb2NrLWNpcmNsZSc7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVEaXNhYmxlZE9wdGlvbnMgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVTZWNvbmRzID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0Qm9vbGVhbigpIGFsbG93RW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9Gb2N1cyA9IGZhbHNlO1xuXG4gIGVtaXRWYWx1ZSh2YWx1ZTogRGF0ZSB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCB0cnVlKTtcblxuICAgIGlmICh0aGlzLl9vbkNoYW5nZSkge1xuICAgICAgdGhpcy5fb25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29uVG91Y2hlZCkge1xuICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IERhdGUgfCBudWxsLCBzeW5jUHJlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmIChzeW5jUHJlVmFsdWUpIHtcbiAgICAgIHRoaXMucHJlVmFsdWUgPSBpc1ZhbGlkKHZhbHVlKSA/IG5ldyBEYXRlKHZhbHVlISkgOiBudWxsO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gaXNWYWxpZCh2YWx1ZSkgPyBuZXcgRGF0ZSh2YWx1ZSEpIDogbnVsbDtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHZhbHVlLCB0aGlzLmZvcm1hdCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuY21hY3NPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZm9jdXMoKTtcbiAgICB0aGlzLnNldFBhbmVsV2lkdGgoKTtcbiAgICB0aGlzLmNtYWNzT3BlbiA9IHRydWU7XG4gICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodGhpcy5jbWFjc09wZW4pO1xuICB9XG5cbiAgc2V0UGFuZWxXaWR0aCgpIHtcbiAgICB0aGlzLmNhbGNXaWR0aCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNtYWNzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMuY21hY3NPcGVuKTtcbiAgfVxuXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0luaXQgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrQ2xlYXJCdG4oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVtaXRWYWx1ZShudWxsKTtcbiAgfVxuXG4gIG9uQ2xpY2tPdXRzaWRlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNldEN1cnJlbnRWYWx1ZUFuZENsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1cyh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IHZhbHVlO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5dXBFc2MoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnByZVZhbHVlKTtcbiAgfVxuXG4gIG9uS2V5dXBFbnRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbWFjc09wZW4gJiYgaXNWYWxpZCh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy5zZXRDdXJyZW50VmFsdWVBbmRDbG9zZSgpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuY21hY3NPcGVuKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKHN0cjogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLlRSSURFTlQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIHRoaXMucGFyc2VUaW1lU3RyaW5nKHN0cik7XG4gICAgfVxuICB9XG5cbiAgb25QYW5lbFZhbHVlQ2hhbmdlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5mb2N1cygpO1xuICB9XG5cbiAgc2V0Q3VycmVudFZhbHVlQW5kQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBpMThuOiBOekkxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1waWNrZXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRTaXplID0gTWF0aC5tYXgoOCwgdGhpcy5mb3JtYXQubGVuZ3RoKSArIDI7XG4gICAgdGhpcy5vcmlnaW4gPSBuZXcgQ2RrT3ZlcmxheU9yaWdpbih0aGlzLmVsZW1lbnQpO1xuXG4gICAgdGhpcy5pMThuUGxhY2VIb2xkZXIkID0gdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKG1hcCgobnpMb2NhbGU6IE56STE4bkludGVyZmFjZSkgPT4gbnpMb2NhbGUuVGltZVBpY2tlci5wbGFjZWhvbGRlcikpO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuelVzZTEySG91cnMsIGZvcm1hdCwgZGlzYWJsZWQsIGF1dG9Gb2N1cyB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpVc2UxMkhvdXJzICYmICFuelVzZTEySG91cnMucHJldmlvdXNWYWx1ZSAmJiBuelVzZTEySG91cnMuY3VycmVudFZhbHVlICYmICFmb3JtYXQpIHtcbiAgICAgIHRoaXMuZm9ybWF0ID0gJ2g6bW06c3MgYSc7XG4gICAgfVxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBkaXNhYmxlZC5jdXJyZW50VmFsdWU7XG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0LCAnZGlzYWJsZWQnLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShpbnB1dCwgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VUaW1lU3RyaW5nKHN0cjogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGVIZWxwZXIucGFyc2VUaW1lKHN0ciwgdGhpcy5mb3JtYXQpIHx8IG51bGw7XG4gICAgaWYgKGlzVmFsaWQodmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHRpbWU6IERhdGUgfCBudWxsIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgbGV0IHJlc3VsdDogRGF0ZSB8IG51bGw7XG5cbiAgICBpZiAodGltZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHJlc3VsdCA9IHRpbWU7XG4gICAgfSBlbHNlIGlmIChpc05pbCh0aW1lKSkge1xuICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgd2FybignTm9uLURhdGUgdHlwZSBpcyBub3QgcmVjb21tZW5kZWQgZm9yIHRpbWUtcGlja2VyLCB1c2UgXCJEYXRlXCIgdHlwZS4nKTtcbiAgICAgIHJlc3VsdCA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0VmFsdWUocmVzdWx0LCB0cnVlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh0aW1lOiBEYXRlIHwgbnVsbCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFudC1waWNrZXItaW5wdXRcIj5cclxuICA8aW5wdXQgI2lucHV0RWxlbWVudFxyXG4gICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgIGNsYXNzPVwiY21hY3MtZGF0ZS10aW1lLXBpY2tlci1pbnB1dFwiXHJcbiAgICAgICAgIFtzaXplXT1cImlucHV0U2l6ZVwiXHJcbiAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZUhvbGRlciB8fCAoaTE4blBsYWNlSG9sZGVyJCB8IGFzeW5jKVwiXHJcbiAgICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiXHJcbiAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKHRydWUpXCJcclxuICAgICAgICAgKGJsdXIpPVwib25Gb2N1cyhmYWxzZSlcIlxyXG4gICAgICAgICAoa2V5dXAuZW50ZXIpPVwib25LZXl1cEVudGVyKClcIlxyXG4gICAgICAgICAoa2V5dXAuZXNjYXBlKT1cIm9uS2V5dXBFc2MoKVwiXHJcbiAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uSW5wdXRDaGFuZ2UoJGV2ZW50KVwiIC8+XHJcbiAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLXN1ZmZpeFwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInN1ZmZpeEljb247IGxldCBzdWZmaXhJY29uXCI+XHJcbiAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJzdWZmaXhJY29uXCI+PC9pPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9zcGFuPlxyXG4gIDxzcGFuICpuZ0lmPVwiYWxsb3dFbXB0eSAmJiAhZGlzYWJsZWQgJiYgdmFsdWVcIiBjbGFzcz1cImFudC1waWNrZXItY2xlYXJcIiAoY2xpY2spPVwib25DbGlja0NsZWFyQnRuKCRldmVudClcIj5cclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCIgbnpUaGVtZT1cImZpbGxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImNsZWFyVGV4dFwiIFthdHRyLnRpdGxlXT1cImNsZWFyVGV4dFwiPjwvaT5cclxuICA8L3NwYW4+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgICAgICAgIG56Q29ubmVjdGVkT3ZlcmxheVxyXG4gICAgICAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwib3ZlcmxheVBvc2l0aW9uc1wiXHJcbiAgICAgICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvcmlnaW5cIlxyXG4gICAgICAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cImNtYWNzT3BlblwiXHJcbiAgICAgICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9mZnNldFldPVwiLTJcIlxyXG4gICAgICAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlXaWR0aF09XCJjYWxjV2lkdGhcIlxyXG4gICAgICAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQYW5lbENsYXNzXT1cIlsnY21hY3MtZGF0ZXRpbWUtcGlja2VyLWRyb3Bkb3duJ11cIlxyXG4gICAgICAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlUcmFuc2Zvcm1PcmlnaW5Pbl09XCInLmFudC1waWNrZXItZHJvcGRvd24nXCJcclxuICAgICAgICAgICAgIChkZXRhY2gpPVwiY2xvc2UoKVwiXHJcbiAgICAgICAgICAgICAob3ZlcmxheU91dHNpZGVDbGljayk9XCJvbkNsaWNrT3V0c2lkZSgkZXZlbnQpXCI+XHJcbiAgPGRpdiBbQHNsaWRlTW90aW9uXT1cIidlbnRlcidcIiBjbGFzcz1cImFudC1waWNrZXItZHJvcGRvd25cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtcGlja2VyLXBhbmVsLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IHRhYmluZGV4PVwiLTFcIiBjbGFzcz1cImFudC1waWNrZXItcGFuZWxcIj5cclxuICAgICAgICA8Y21hY3MtZGF0ZXRpbWUtcGlja2VyLXBhbmVsIFtuZ0NsYXNzXT1cInBvcHVwQ2xhc3NOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdF09XCJmb3JtYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpIb3VyU3RlcF09XCJob3VyU3RlcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuek1pbnV0ZVN0ZXBdPVwibWludXRlU3RlcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuelNlY29uZFN0ZXBdPVwic2Vjb25kU3RlcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoaWRlU2Vjb25kc109XCJoaWRlU2Vjb25kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekRpc2FibGVkSG91cnNdPVwiZGlzYWJsZWRIb3Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekRpc2FibGVkTWludXRlc109XCJkaXNhYmxlZE1pbnV0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpEaXNhYmxlZFNlY29uZHNdPVwiZGlzYWJsZWRTZWNvbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256UGxhY2VIb2xkZXJdPVwicGxhY2VIb2xkZXIgfHwgKGkxOG5QbGFjZUhvbGRlciQgfCBhc3luYylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpIaWRlRGlzYWJsZWRPcHRpb25zXT1cImhpZGVEaXNhYmxlZE9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpVc2UxMkhvdXJzXT1cInVzZTEySG91cnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpEZWZhdWx0T3BlblZhbHVlXT1cImRlZmF1bHRPcGVuVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpBZGRPbl09XCJhZGRPblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekNsZWFyVGV4dF09XCJjbGVhclRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpOb3dUZXh0XT1cIm5vd1RleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpPa1RleHRdPVwib2tUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256QWxsb3dFbXB0eV09XCJhbGxvd0VtcHR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUGFuZWxWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsb3NlUGFuZWwpPVwic2V0Q3VycmVudFZhbHVlQW5kQ2xvc2UoKVwiPjwvY21hY3MtZGF0ZXRpbWUtcGlja2VyLXBhbmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=