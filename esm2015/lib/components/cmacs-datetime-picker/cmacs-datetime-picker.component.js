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
    } }, inputs: { size: "size", hourStep: "hourStep", minuteStep: "minuteStep", secondStep: "secondStep", clearText: "clearText", nowText: "nowText", okText: "okText", popupClassName: "popupClassName", placeHolder: "placeHolder", addOn: "addOn", defaultOpenValue: "defaultOpenValue", disabledHours: "disabledHours", disabledMinutes: "disabledMinutes", disabledSeconds: "disabledSeconds", format: "format", cmacsOpen: "cmacsOpen", use12Hours: "use12Hours", suffixIcon: "suffixIcon", hideDisabledOptions: "hideDisabledOptions", hideSeconds: "hideSeconds", allowEmpty: "allowEmpty", disabled: "disabled", autoFocus: "autoFocus" }, outputs: { openChange: "openChange" }, exportAs: ["cmacsDateTimePicker"], features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: CmacsDateTimePickerComponent, multi: true }]), i0.ɵɵNgOnChangesFeature], decls: 8, vars: 16, consts: [[1, "ant-picker-input"], ["type", "text", 1, "cmacs-date-time-picker-input", 3, "size", "placeholder", "ngModel", "disabled", "ngModelChange", "focus", "blur", "keyup.enter", "keyup.escape"], ["inputElement", ""], [1, "ant-picker-suffix"], [4, "nzStringTemplateOutlet"], ["class", "ant-picker-clear", 3, "click", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayTransformOriginOn", "detach", "overlayOutsideClick"], ["nz-icon", "", 3, "nzType"], [1, "ant-picker-clear", 3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], [1, "ant-picker-dropdown"], [1, "ant-picker-panel-container"], ["tabindex", "-1", 1, "ant-picker-panel", "cmacs-datetime-picker-panel-wrapper"], [3, "ngClass", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "hideSeconds", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzPlaceHolder", "nzHideDisabledOptions", "nzUse12Hours", "nzDefaultOpenValue", "nzAddOn", "nzClearText", "nzNowText", "nzOkText", "nzAllowEmpty", "ngModel", "ngModelChange", "closePanel"]], template: function CmacsDateTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i6.NzStringTemplateOutletDirective, i7.NgIf, i8.CdkConnectedOverlay, i9.NzConnectedOverlayDirective, i10.ɵNzTransitionPatchDirective, i11.NzIconDirective, i12.CmacsDatetimePickerPanelComponent, i7.NgClass], pipes: [i7.AsyncPipe], styles: [".cmacs-datetime-picker-input-number{width:55px;height:30px!important;margin:11px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif}.cmacs-date-time-picker-input{color:#acb3bf!important}.ant-picker-input .ant-picker-suffix{color:#656c79!important}.cmacs-datetime-picker-panel-wrapper .ant-picker-time-panel .ant-picker-content{height:unset;overflow-x:auto;width:calc(100% - 2px)}::ng-deep cmacs-datetime-picker.ant-time-picker .ant-time-picker-input[disabled]{background:#f6f7fb;cursor:default;border:1px solid #dee0e5}::ng-deep cmacs-datetime-picker.ant-time-picker .ant-time-picker-input[disabled]+.ant-time-picker-icon{color:#bec4cd;cursor:default}.cmacs-datetime-dividers{display:inline-block;position:relative;top:-3px}.cmacs-datetime-picker .ant-time-picker-panel-inner{width:224px!important}.cmacs-datetime-picker .ampmdropdown{width:calc(100% - 156px)}::ng-deep .cmacs-datetime-picker .ant-time-picker-panel-inner cmacs-select.ant-select{height:30px!important;margin:12px 0!important;display:inline-flex;width:auto!important}.cmacs-datetime-picker .ant-time-picker-panel-inner.cmacs-datetime-picker-noseconds{width:148px!important}.ant-time-picker-panel-narrow .cmacs-datetime-picker .ant-time-picker-panel-input-wrap{max-width:unset}.ant-time-picker-clear.datetime-picker-clear-disabled{opacity:0!important;z-index:0!important}"], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRldGltZS1waWNrZXIvY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRldGltZS1waWNrZXIvY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7QUFFaEYsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUlOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTNELE9BQU8sRUFBZ0MsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpELE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0Is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QkFDekMsU0FBUyxFQUFFLFFBQVE7aUJBQ3BCO2dCQUNELFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDekIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyw4QkFBOEIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDcEc7O3NCQXlLSSxRQUFRO3dCQWhKa0MsUUFBUTtrQkFBcEQsU0FBUzttQkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ2xDLElBQUk7a0JBQVosS0FBSztZQUNpQixRQUFRO2tCQUE5QixLQUFLO1lBQ2lCLFVBQVU7a0JBQWhDLEtBQUs7WUFDaUIsVUFBVTtrQkFBaEMsS0FBSztZQUNpQixTQUFTO2tCQUEvQixLQUFLO1lBQ2lCLE9BQU87a0JBQTdCLEtBQUs7WUFDaUIsTUFBTTtrQkFBNUIsS0FBSztZQUNpQixjQUFjO2tCQUFwQyxLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNpQixNQUFNO2tCQUE1QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNpQyxVQUFVO2tCQUFoRCxLQUFLO1lBQ2lCLFVBQVU7a0JBQWhDLEtBQUs7WUFFYSxVQUFVO2tCQUE1QixNQUFNO1lBRWtCLG1CQUFtQjtrQkFBM0MsS0FBSztZQUNtQixXQUFXO2tCQUFuQyxLQUFLO1lBQ2lDLFVBQVU7a0JBQWhELEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHsgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xyXG5cclxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xyXG5pbXBvcnQgeyB3YXJuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBpc05pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICd0aW1lUGlja2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1kYXRldGltZS1waWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NEYXRlVGltZVBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWRhdGV0aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5jc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1waWNrZXItbGFyZ2VdJzogYHNpemUgPT09ICdsYXJnZSdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXNtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcclxuICAgICdbY2xhc3MuYW50LXBpY2tlci1kaXNhYmxlZF0nOiBgZGlzYWJsZWRgLFxyXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLWZvY3VzZWRdJzogYGZvY3VzZWRgLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10aW1lLXBpY2tlci1vcGVuZWRdJzogYGNtYWNzT3BlbmAsXHJcbiAgICAnW2NsYXNzLmFudC1waWNrZXItcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcclxuICAgICcoY2xpY2spJzogJ29wZW4oKSdcclxuICB9LFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IENtYWNzRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQsIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0RhdGVUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIF9vbkNoYW5nZT86ICh2YWx1ZTogRGF0ZSB8IG51bGwpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkPzogKCkgPT4gdm9pZDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBpc0luaXQgPSBmYWxzZTtcclxuICBmb2N1c2VkID0gZmFsc2U7XHJcbiAgaW5wdXRWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgdmFsdWU6IERhdGUgfCBudWxsID0gbnVsbDtcclxuICBwcmVWYWx1ZTogRGF0ZSB8IG51bGwgPSBudWxsO1xyXG4gIG9yaWdpbiE6IENka092ZXJsYXlPcmlnaW47XHJcbiAgaW5wdXRTaXplPzogbnVtYmVyO1xyXG4gIGNhbGNXaWR0aDogbnVtYmVyID0gMDtcclxuICBpMThuUGxhY2VIb2xkZXIkOiBPYnNlcnZhYmxlPHN0cmluZyB8IHVuZGVmaW5lZD4gPSBvZih1bmRlZmluZWQpO1xyXG4gIG92ZXJsYXlQb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFtcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICBvdmVybGF5WTogJ3RvcCcsXHJcbiAgICAgIG9mZnNldFk6IDNcclxuICAgIH1cclxuICBdO1xyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0UmVmITogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICBASW5wdXQoKSBzaXplOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIGhvdXJTdGVwOiBudW1iZXIgPSAxO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgbWludXRlU3RlcDogbnVtYmVyID0gMTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIHNlY29uZFN0ZXA6IG51bWJlciA9IDE7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBjbGVhclRleHQ6IHN0cmluZyA9ICdjbGVhcic7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBub3dUZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG9rVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBwb3B1cENsYXNzTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBhZGRPbj86IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRPcGVuVmFsdWU/OiBEYXRlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkSG91cnM/OiAoKSA9PiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZE1pbnV0ZXM/OiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZFNlY29uZHM/OiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW107XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBmb3JtYXQ6IHN0cmluZyA9ICdISDptbTpzcyc7XHJcbiAgQElucHV0KCkgY21hY3NPcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBASW5wdXRCb29sZWFuKCkgdXNlMTJIb3VyczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgc3VmZml4SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdjbG9jay1jaXJjbGUnO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVEaXNhYmxlZE9wdGlvbnMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZVNlY29uZHMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSBhbGxvd0VtcHR5OiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b0ZvY3VzID0gZmFsc2U7XHJcblxyXG4gIGVtaXRWYWx1ZSh2YWx1ZTogRGF0ZSB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xyXG5cclxuICAgIGlmICh0aGlzLl9vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fb25Ub3VjaGVkKSB7XHJcbiAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IERhdGUgfCBudWxsLCBzeW5jUHJlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKHN5bmNQcmVWYWx1ZSkge1xyXG4gICAgICB0aGlzLnByZVZhbHVlID0gaXNWYWxpZCh2YWx1ZSkgPyBuZXcgRGF0ZSh2YWx1ZSEpIDogbnVsbDtcclxuICAgIH1cclxuICAgIHRoaXMudmFsdWUgPSBpc1ZhbGlkKHZhbHVlKSA/IG5ldyBEYXRlKHZhbHVlISkgOiBudWxsO1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh2YWx1ZSwgdGhpcy5mb3JtYXQpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5jbWFjc09wZW4pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb2N1cygpO1xyXG4gICAgdGhpcy5zZXRQYW5lbFdpZHRoKCk7XHJcbiAgICB0aGlzLmNtYWNzT3BlbiA9IHRydWU7XHJcbiAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLmNtYWNzT3Blbik7XHJcbiAgfVxyXG5cclxuICBzZXRQYW5lbFdpZHRoKCkge1xyXG4gICAgdGhpcy5jYWxjV2lkdGggPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbWFjc09wZW4gPSBmYWxzZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodGhpcy5jbWFjc09wZW4pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNJbml0ICYmICF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGlja0NsZWFyQnRuKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZW1pdFZhbHVlKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICB0aGlzLnNldEN1cnJlbnRWYWx1ZUFuZENsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzZWQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleXVwRXNjKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnByZVZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uS2V5dXBFbnRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNtYWNzT3BlbiAmJiBpc1ZhbGlkKHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuc2V0Q3VycmVudFZhbHVlQW5kQ2xvc2UoKTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuY21hY3NPcGVuKSB7XHJcbiAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JbnB1dENoYW5nZShzdHI6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLlRSSURFTlQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICB0aGlzLnBhcnNlVGltZVN0cmluZyhzdHIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QYW5lbFZhbHVlQ2hhbmdlKHZhbHVlOiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIHNldEN1cnJlbnRWYWx1ZUFuZENsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbWl0VmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcclxuICApIHtcclxuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXBpY2tlcicpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0U2l6ZSA9IE1hdGgubWF4KDgsIHRoaXMuZm9ybWF0Lmxlbmd0aCkgKyAyO1xyXG4gICAgdGhpcy5vcmlnaW4gPSBuZXcgQ2RrT3ZlcmxheU9yaWdpbih0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuaTE4blBsYWNlSG9sZGVyJCA9IHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZShtYXAoKG56TG9jYWxlOiBOekkxOG5JbnRlcmZhY2UpID0+IG56TG9jYWxlLlRpbWVQaWNrZXIucGxhY2Vob2xkZXIpKTtcclxuXHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56VXNlMTJIb3VycywgZm9ybWF0LCBkaXNhYmxlZCwgYXV0b0ZvY3VzIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKG56VXNlMTJIb3VycyAmJiAhbnpVc2UxMkhvdXJzLnByZXZpb3VzVmFsdWUgJiYgbnpVc2UxMkhvdXJzLmN1cnJlbnRWYWx1ZSAmJiAhZm9ybWF0KSB7XHJcbiAgICAgIHRoaXMuZm9ybWF0ID0gJ2g6bW06c3MgYSc7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlzYWJsZWQpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBkaXNhYmxlZC5jdXJyZW50VmFsdWU7XHJcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0LCAnZGlzYWJsZWQnLCAnJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoaW5wdXQsICdkaXNhYmxlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwYXJzZVRpbWVTdHJpbmcoc3RyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRlSGVscGVyLnBhcnNlVGltZShzdHIsIHRoaXMuZm9ybWF0KSB8fCBudWxsO1xyXG4gICAgaWYgKGlzVmFsaWQodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XHJcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh0aW1lOiBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgbGV0IHJlc3VsdDogRGF0ZSB8IG51bGw7XHJcblxyXG4gICAgaWYgKHRpbWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgIHJlc3VsdCA9IHRpbWU7XHJcbiAgICB9IGVsc2UgaWYgKGlzTmlsKHRpbWUpKSB7XHJcbiAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3YXJuKCdOb24tRGF0ZSB0eXBlIGlzIG5vdCByZWNvbW1lbmRlZCBmb3IgdGltZS1waWNrZXIsIHVzZSBcIkRhdGVcIiB0eXBlLicpO1xyXG4gICAgICByZXN1bHQgPSBuZXcgRGF0ZSh0aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFZhbHVlKHJlc3VsdCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodGltZTogRGF0ZSB8IG51bGwpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci1pbnB1dFwiPlxyXG4gIDxpbnB1dCAjaW5wdXRFbGVtZW50XHJcbiAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgY2xhc3M9XCJjbWFjcy1kYXRlLXRpbWUtcGlja2VyLWlucHV0XCJcclxuICAgICAgICAgW3NpemVdPVwiaW5wdXRTaXplXCJcclxuICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyIHx8IChpMThuUGxhY2VIb2xkZXIkIHwgYXN5bmMpXCJcclxuICAgICAgICAgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCJcclxuICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXModHJ1ZSlcIlxyXG4gICAgICAgICAoYmx1cik9XCJvbkZvY3VzKGZhbHNlKVwiXHJcbiAgICAgICAgIChrZXl1cC5lbnRlcik9XCJvbktleXVwRW50ZXIoKVwiXHJcbiAgICAgICAgIChrZXl1cC5lc2NhcGUpPVwib25LZXl1cEVzYygpXCJcclxuICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25JbnB1dENoYW5nZSgkZXZlbnQpXCIgLz5cclxuICA8c3BhbiBjbGFzcz1cImFudC1waWNrZXItc3VmZml4XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwic3VmZml4SWNvbjsgbGV0IHN1ZmZpeEljb25cIj5cclxuICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cInN1ZmZpeEljb25cIj48L2k+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L3NwYW4+XHJcbiAgPHNwYW4gKm5nSWY9XCJhbGxvd0VtcHR5ICYmICFkaXNhYmxlZCAmJiB2YWx1ZVwiIGNsYXNzPVwiYW50LXBpY2tlci1jbGVhclwiIChjbGljayk9XCJvbkNsaWNrQ2xlYXJCdG4oJGV2ZW50KVwiPlxyXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZS1jaXJjbGVcIiBuelRoZW1lPVwiZmlsbFwiIFthdHRyLmFyaWEtbGFiZWxdPVwiY2xlYXJUZXh0XCIgW2F0dHIudGl0bGVdPVwiY2xlYXJUZXh0XCI+PC9pPlxyXG4gIDwvc3Bhbj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gICAgICAgICAgICAgbnpDb25uZWN0ZWRPdmVybGF5XHJcbiAgICAgICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJvdmVybGF5UG9zaXRpb25zXCJcclxuICAgICAgICAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXHJcbiAgICAgICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiY21hY3NPcGVuXCJcclxuICAgICAgICAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T2Zmc2V0WV09XCItMlwiXHJcbiAgICAgICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVdpZHRoXT1cImNhbGNXaWR0aFwiXHJcbiAgICAgICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBhbmVsQ2xhc3NdPVwiWydjbWFjcy1kYXRldGltZS1waWNrZXItZHJvcGRvd24nXVwiXHJcbiAgICAgICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVRyYW5zZm9ybU9yaWdpbk9uXT1cIicuYW50LXBpY2tlci1kcm9wZG93bidcIlxyXG4gICAgICAgICAgICAgKGRldGFjaCk9XCJjbG9zZSgpXCJcclxuICAgICAgICAgICAgIChvdmVybGF5T3V0c2lkZUNsaWNrKT1cIm9uQ2xpY2tPdXRzaWRlKCRldmVudClcIj5cclxuICA8ZGl2IFtAc2xpZGVNb3Rpb25dPVwiJ2VudGVyJ1wiIGNsYXNzPVwiYW50LXBpY2tlci1kcm9wZG93blwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItcGFuZWwtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwiYW50LXBpY2tlci1wYW5lbCBjbWFjcy1kYXRldGltZS1waWNrZXItcGFuZWwtd3JhcHBlclwiPlxyXG4gICAgICAgIDxjbWFjcy1kYXRldGltZS1waWNrZXItcGFuZWwgW25nQ2xhc3NdPVwicG9wdXBDbGFzc05hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0XT1cImZvcm1hdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekhvdXJTdGVwXT1cImhvdXJTdGVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256TWludXRlU3RlcF09XCJtaW51dGVTdGVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256U2Vjb25kU3RlcF09XCJzZWNvbmRTdGVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cImhpZGVTZWNvbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256RGlzYWJsZWRIb3Vyc109XCJkaXNhYmxlZEhvdXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256RGlzYWJsZWRNaW51dGVzXT1cImRpc2FibGVkTWludXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekRpc2FibGVkU2Vjb25kc109XCJkaXNhYmxlZFNlY29uZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJwbGFjZUhvbGRlciB8fCAoaTE4blBsYWNlSG9sZGVyJCB8IGFzeW5jKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekhpZGVEaXNhYmxlZE9wdGlvbnNdPVwiaGlkZURpc2FibGVkT3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuelVzZTEySG91cnNdPVwidXNlMTJIb3Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekRlZmF1bHRPcGVuVmFsdWVdPVwiZGVmYXVsdE9wZW5WYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekFkZE9uXT1cImFkZE9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256Q2xlYXJUZXh0XT1cImNsZWFyVGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuek5vd1RleHRdPVwibm93VGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuek9rVGV4dF09XCJva1RleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpBbGxvd0VtcHR5XT1cImFsbG93RW1wdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25QYW5lbFZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xvc2VQYW5lbCk9XCJzZXRDdXJyZW50VmFsdWVBbmRDbG9zZSgpXCI+PC9jbWFjcy1kYXRldGltZS1waWNrZXItcGFuZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==