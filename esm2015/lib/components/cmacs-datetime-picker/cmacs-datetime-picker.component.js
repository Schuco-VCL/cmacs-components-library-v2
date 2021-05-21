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
        this.cmacsOpen = true;
        this.openChange.emit(this.cmacsOpen);
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
    } }, hostVars: 10, hostBindings: function CmacsDateTimePickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CmacsDateTimePickerComponent_click_HostBindingHandler() { return ctx.open(); });
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-picker-large", ctx.size === "large")("ant-picker-small", ctx.size === "small")("ant-picker-disabled", ctx.disabled)("ant-picker-focused", ctx.focused)("ant-picker-rtl", ctx.dir === "rtl");
    } }, inputs: { size: "size", hourStep: "hourStep", minuteStep: "minuteStep", secondStep: "secondStep", clearText: "clearText", nowText: "nowText", okText: "okText", popupClassName: "popupClassName", placeHolder: "placeHolder", addOn: "addOn", defaultOpenValue: "defaultOpenValue", disabledHours: "disabledHours", disabledMinutes: "disabledMinutes", disabledSeconds: "disabledSeconds", format: "format", cmacsOpen: "cmacsOpen", use12Hours: "use12Hours", suffixIcon: "suffixIcon", hideDisabledOptions: "hideDisabledOptions", hideSeconds: "hideSeconds", allowEmpty: "allowEmpty", disabled: "disabled", autoFocus: "autoFocus" }, outputs: { openChange: "openChange" }, exportAs: ["cmacsDateTimePicker"], features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: CmacsDateTimePickerComponent, multi: true }]), i0.ɵɵNgOnChangesFeature], decls: 8, vars: 13, consts: [[1, "ant-picker-input"], ["type", "text", 3, "size", "placeholder", "ngModel", "disabled", "ngModelChange", "focus", "blur", "keyup.enter", "keyup.escape"], ["inputElement", ""], [1, "ant-picker-suffix"], [4, "nzStringTemplateOutlet"], ["class", "ant-picker-clear", 3, "click", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayTransformOriginOn", "detach", "overlayOutsideClick"], ["nz-icon", "", 3, "nzType"], [1, "ant-picker-clear", 3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], [1, "ant-picker-dropdown"], [1, "ant-picker-panel-container"], ["tabindex", "-1", 1, "ant-picker-panel"], [3, "ngClass", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "hideSeconds", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzPlaceHolder", "nzHideDisabledOptions", "nzUse12Hours", "nzDefaultOpenValue", "nzAddOn", "nzClearText", "nzNowText", "nzOkText", "nzAllowEmpty", "ngModel", "ngModelChange", "closePanel"]], template: function CmacsDateTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵproperty("size", ctx.inputSize)("placeholder", ctx.placeHolder || i0.ɵɵpipeBind1(3, 11, ctx.i18nPlaceHolder$))("ngModel", ctx.inputValue)("disabled", ctx.disabled);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.suffixIcon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.allowEmpty && !ctx.disabled && ctx.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.cmacsOpen)("cdkConnectedOverlayOffsetY", -2)("cdkConnectedOverlayTransformOriginOn", ".ant-picker-dropdown");
    } }, directives: [i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i6.NzStringTemplateOutletDirective, i7.NgIf, i8.CdkConnectedOverlay, i9.NzConnectedOverlayDirective, i10.ɵNzTransitionPatchDirective, i11.NzIconDirective, i12.CmacsDatetimePickerPanelComponent, i7.NgClass], pipes: [i7.AsyncPipe], styles: [".cmacs-datetime-picker-input-number{width:55px;height:30px!important;margin:11px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif}.ant-picker-time-panel .ant-picker-content{height:unset}cmacs-select .ant-select-selection{height:30px}::ng-deep cmacs-datetime-picker.ant-time-picker .ant-time-picker-input[disabled]{background:#f6f7fb;cursor:default;border:1px solid #dee0e5}::ng-deep cmacs-datetime-picker.ant-time-picker .ant-time-picker-input[disabled]+.ant-time-picker-icon{color:#bec4cd;cursor:default}.cmacs-datetime-dividers{display:inline-block;position:relative;top:-3px}.cmacs-datetime-picker .ant-time-picker-panel-inner{width:224px!important}.cmacs-datetime-picker .ampmdropdown{width:calc(100% - 156px)}::ng-deep .cmacs-datetime-picker .ant-time-picker-panel-inner cmacs-select.ant-select{height:30px!important;margin:12px 0!important;display:inline-flex;width:auto!important}.cmacs-datetime-picker .ant-time-picker-panel-inner.cmacs-datetime-picker-noseconds{width:148px!important}.ant-time-picker-panel-narrow .cmacs-datetime-picker .ant-time-picker-panel-input-wrap{max-width:unset}.ant-time-picker-clear.datetime-picker-clear-disabled{opacity:0!important;z-index:0!important}"], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRldGltZS1waWNrZXIvY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRldGltZS1waWNrZXIvY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7QUFFaEYsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUlOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTNELE9BQU8sRUFBZ0MsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpELE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0Is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UTtrQkFBcEQsU0FBUzttQkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ2xDLElBQUk7a0JBQVosS0FBSztZQUNpQixRQUFRO2tCQUE5QixLQUFLO1lBQ2lCLFVBQVU7a0JBQWhDLEtBQUs7WUFDaUIsVUFBVTtrQkFBaEMsS0FBSztZQUNpQixTQUFTO2tCQUEvQixLQUFLO1lBQ2lCLE9BQU87a0JBQTdCLEtBQUs7WUFDaUIsTUFBTTtrQkFBNUIsS0FBSztZQUNpQixjQUFjO2tCQUFwQyxLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNpQixNQUFNO2tCQUE1QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNpQyxVQUFVO2tCQUFoRCxLQUFLO1lBQ2lCLFVBQVU7a0JBQWhDLEtBQUs7WUFFYSxVQUFVO2tCQUE1QixNQUFNO1lBRWtCLG1CQUFtQjtrQkFBM0MsS0FBSztZQUNtQixXQUFXO2tCQUFuQyxLQUFLO1lBQ2lDLFVBQVU7a0JBQWhELEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENka092ZXJsYXlPcmlnaW4sIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzVmFsaWQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuXG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyB3YXJuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIGlzTmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAndGltZVBpY2tlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHNlbGVjdG9yOiAnY21hY3MtZGF0ZXRpbWUtcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzRGF0ZVRpbWVQaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1kYXRldGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWRhdGV0aW1lLXBpY2tlci5jb21wb25lbnQuY3NzJ10sXHJcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXBpY2tlci1sYXJnZV0nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2AsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXNtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItZGlzYWJsZWRdJzogYGRpc2FibGVkYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItZm9jdXNlZF0nOiBgZm9jdXNlZGAsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gICAgJyhjbGljayknOiAnb3BlbigpJ1xuICB9LFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IENtYWNzRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQsIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0RhdGVUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIF9vbkNoYW5nZT86ICh2YWx1ZTogRGF0ZSB8IG51bGwpID0+IHZvaWQ7XG4gIHByaXZhdGUgX29uVG91Y2hlZD86ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBpc0luaXQgPSBmYWxzZTtcbiAgZm9jdXNlZCA9IGZhbHNlO1xuICBpbnB1dFZhbHVlOiBzdHJpbmcgPSAnJztcbiAgdmFsdWU6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgcHJlVmFsdWU6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgb3JpZ2luITogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgaW5wdXRTaXplPzogbnVtYmVyO1xuICBpMThuUGxhY2VIb2xkZXIkOiBPYnNlcnZhYmxlPHN0cmluZyB8IHVuZGVmaW5lZD4gPSBvZih1bmRlZmluZWQpO1xuICBvdmVybGF5UG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbXG4gICAge1xuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICBvdmVybGF5WTogJ3RvcCcsXG4gICAgICBvZmZzZXRZOiAzXG4gICAgfVxuICBdO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0UmVmITogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgaG91clN0ZXA6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgbWludXRlU3RlcDogbnVtYmVyID0gMTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBzZWNvbmRTdGVwOiBudW1iZXIgPSAxO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIGNsZWFyVGV4dDogc3RyaW5nID0gJ2NsZWFyJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBub3dUZXh0OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBva1RleHQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIHBvcHVwQ2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgcGxhY2VIb2xkZXIgPSAnJztcbiAgQElucHV0KCkgYWRkT24/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZGVmYXVsdE9wZW5WYWx1ZT86IERhdGU7XG4gIEBJbnB1dCgpIGRpc2FibGVkSG91cnM/OiAoKSA9PiBudW1iZXJbXTtcbiAgQElucHV0KCkgZGlzYWJsZWRNaW51dGVzPzogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW107XG4gIEBJbnB1dCgpIGRpc2FibGVkU2Vjb25kcz86IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBmb3JtYXQ6IHN0cmluZyA9ICdISDptbTpzcyc7XG4gIEBJbnB1dCgpIGNtYWNzT3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSB1c2UxMkhvdXJzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgc3VmZml4SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdjbG9jay1jaXJjbGUnO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlRGlzYWJsZWRPcHRpb25zID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlU2Vjb25kcyA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSBhbGxvd0VtcHR5OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvRm9jdXMgPSBmYWxzZTtcblxuICBlbWl0VmFsdWUodmFsdWU6IERhdGUgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG5cbiAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vblRvdWNoZWQpIHtcbiAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBEYXRlIHwgbnVsbCwgc3luY1ByZVZhbHVlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoc3luY1ByZVZhbHVlKSB7XG4gICAgICB0aGlzLnByZVZhbHVlID0gaXNWYWxpZCh2YWx1ZSkgPyBuZXcgRGF0ZSh2YWx1ZSEpIDogbnVsbDtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IGlzVmFsaWQodmFsdWUpID8gbmV3IERhdGUodmFsdWUhKSA6IG51bGw7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh2YWx1ZSwgdGhpcy5mb3JtYXQpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb3BlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmNtYWNzT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZvY3VzKCk7XG4gICAgdGhpcy5jbWFjc09wZW4gPSB0cnVlO1xuICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMuY21hY3NPcGVuKTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY21hY3NPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodGhpcy5jbWFjc09wZW4pO1xuICB9XG5cbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzSW5pdCAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tDbGVhckJ0bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZW1pdFZhbHVlKG51bGwpO1xuICB9XG5cbiAgb25DbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0Q3VycmVudFZhbHVlQW5kQ2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBvbkZvY3VzKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkID0gdmFsdWU7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXl1cEVzYygpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMucHJlVmFsdWUpO1xuICB9XG5cbiAgb25LZXl1cEVudGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNtYWNzT3BlbiAmJiBpc1ZhbGlkKHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnNldEN1cnJlbnRWYWx1ZUFuZENsb3NlKCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5jbWFjc09wZW4pIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2Uoc3RyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uVFJJREVOVCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgICAgdGhpcy5wYXJzZVRpbWVTdHJpbmcoc3RyKTtcbiAgICB9XG4gIH1cblxuICBvblBhbmVsVmFsdWVDaGFuZ2UodmFsdWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLmZvY3VzKCk7XG4gIH1cblxuICBzZXRDdXJyZW50VmFsdWVBbmRDbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGkxOG46IE56STE4blNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcbiAgKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXBpY2tlcicpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dFNpemUgPSBNYXRoLm1heCg4LCB0aGlzLmZvcm1hdC5sZW5ndGgpICsgMjtcbiAgICB0aGlzLm9yaWdpbiA9IG5ldyBDZGtPdmVybGF5T3JpZ2luKHRoaXMuZWxlbWVudCk7XG5cbiAgICB0aGlzLmkxOG5QbGFjZUhvbGRlciQgPSB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUobWFwKChuekxvY2FsZTogTnpJMThuSW50ZXJmYWNlKSA9PiBuekxvY2FsZS5UaW1lUGlja2VyLnBsYWNlaG9sZGVyKSk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56VXNlMTJIb3VycywgZm9ybWF0LCBkaXNhYmxlZCwgYXV0b0ZvY3VzIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuelVzZTEySG91cnMgJiYgIW56VXNlMTJIb3Vycy5wcmV2aW91c1ZhbHVlICYmIG56VXNlMTJIb3Vycy5jdXJyZW50VmFsdWUgJiYgIWZvcm1hdCkge1xuICAgICAgdGhpcy5mb3JtYXQgPSAnaDptbTpzcyBhJztcbiAgICB9XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRpc2FibGVkLmN1cnJlbnRWYWx1ZTtcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXQsICdkaXNhYmxlZCcsICcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGlucHV0LCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwYXJzZVRpbWVTdHJpbmcoc3RyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0ZUhlbHBlci5wYXJzZVRpbWUoc3RyLCB0aGlzLmZvcm1hdCkgfHwgbnVsbDtcbiAgICBpZiAoaXNWYWxpZCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodGltZTogRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICBsZXQgcmVzdWx0OiBEYXRlIHwgbnVsbDtcblxuICAgIGlmICh0aW1lIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmVzdWx0ID0gdGltZTtcbiAgICB9IGVsc2UgaWYgKGlzTmlsKHRpbWUpKSB7XG4gICAgICByZXN1bHQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKCdOb24tRGF0ZSB0eXBlIGlzIG5vdCByZWNvbW1lbmRlZCBmb3IgdGltZS1waWNrZXIsIHVzZSBcIkRhdGVcIiB0eXBlLicpO1xuICAgICAgcmVzdWx0ID0gbmV3IERhdGUodGltZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZShyZXN1bHQsIHRydWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHRpbWU6IERhdGUgfCBudWxsKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci1pbnB1dFwiPlxyXG4gIDxpbnB1dCAjaW5wdXRFbGVtZW50XHJcbiAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgW3NpemVdPVwiaW5wdXRTaXplXCJcclxuICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyIHx8IChpMThuUGxhY2VIb2xkZXIkIHwgYXN5bmMpXCJcclxuICAgICAgICAgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCJcclxuICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXModHJ1ZSlcIlxyXG4gICAgICAgICAoYmx1cik9XCJvbkZvY3VzKGZhbHNlKVwiXHJcbiAgICAgICAgIChrZXl1cC5lbnRlcik9XCJvbktleXVwRW50ZXIoKVwiXHJcbiAgICAgICAgIChrZXl1cC5lc2NhcGUpPVwib25LZXl1cEVzYygpXCJcclxuICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25JbnB1dENoYW5nZSgkZXZlbnQpXCIgLz5cclxuICA8c3BhbiBjbGFzcz1cImFudC1waWNrZXItc3VmZml4XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwic3VmZml4SWNvbjsgbGV0IHN1ZmZpeEljb25cIj5cclxuICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cInN1ZmZpeEljb25cIj48L2k+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L3NwYW4+XHJcbiAgPHNwYW4gKm5nSWY9XCJhbGxvd0VtcHR5ICYmICFkaXNhYmxlZCAmJiB2YWx1ZVwiIGNsYXNzPVwiYW50LXBpY2tlci1jbGVhclwiIChjbGljayk9XCJvbkNsaWNrQ2xlYXJCdG4oJGV2ZW50KVwiPlxyXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZS1jaXJjbGVcIiBuelRoZW1lPVwiZmlsbFwiIFthdHRyLmFyaWEtbGFiZWxdPVwiY2xlYXJUZXh0XCIgW2F0dHIudGl0bGVdPVwiY2xlYXJUZXh0XCI+PC9pPlxyXG4gIDwvc3Bhbj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gICAgICAgICAgICAgbnpDb25uZWN0ZWRPdmVybGF5XHJcbiAgICAgICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJvdmVybGF5UG9zaXRpb25zXCJcclxuICAgICAgICAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXHJcbiAgICAgICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiY21hY3NPcGVuXCJcclxuICAgICAgICAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T2Zmc2V0WV09XCItMlwiXHJcbiAgICAgICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVRyYW5zZm9ybU9yaWdpbk9uXT1cIicuYW50LXBpY2tlci1kcm9wZG93bidcIlxyXG4gICAgICAgICAgICAgKGRldGFjaCk9XCJjbG9zZSgpXCJcclxuICAgICAgICAgICAgIChvdmVybGF5T3V0c2lkZUNsaWNrKT1cIm9uQ2xpY2tPdXRzaWRlKCRldmVudClcIj5cclxuICA8ZGl2IFtAc2xpZGVNb3Rpb25dPVwiJ2VudGVyJ1wiIGNsYXNzPVwiYW50LXBpY2tlci1kcm9wZG93blwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItcGFuZWwtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwiYW50LXBpY2tlci1wYW5lbFwiPlxyXG4gICAgICAgIDxjbWFjcy1kYXRldGltZS1waWNrZXItcGFuZWwgW25nQ2xhc3NdPVwicG9wdXBDbGFzc05hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0XT1cImZvcm1hdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekhvdXJTdGVwXT1cImhvdXJTdGVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256TWludXRlU3RlcF09XCJtaW51dGVTdGVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256U2Vjb25kU3RlcF09XCJzZWNvbmRTdGVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cImhpZGVTZWNvbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256RGlzYWJsZWRIb3Vyc109XCJkaXNhYmxlZEhvdXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256RGlzYWJsZWRNaW51dGVzXT1cImRpc2FibGVkTWludXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekRpc2FibGVkU2Vjb25kc109XCJkaXNhYmxlZFNlY29uZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJwbGFjZUhvbGRlciB8fCAoaTE4blBsYWNlSG9sZGVyJCB8IGFzeW5jKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekhpZGVEaXNhYmxlZE9wdGlvbnNdPVwiaGlkZURpc2FibGVkT3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuelVzZTEySG91cnNdPVwidXNlMTJIb3Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekRlZmF1bHRPcGVuVmFsdWVdPVwiZGVmYXVsdE9wZW5WYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekFkZE9uXT1cImFkZE9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256Q2xlYXJUZXh0XT1cImNsZWFyVGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuek5vd1RleHRdPVwibm93VGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuek9rVGV4dF09XCJva1RleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpBbGxvd0VtcHR5XT1cImFsbG93RW1wdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25QYW5lbFZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xvc2VQYW5lbCk9XCJzZXRDdXJyZW50VmFsdWVBbmRDbG9zZSgpXCI+PC9jbWFjcy1kYXRldGltZS1waWNrZXItcGFuZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==