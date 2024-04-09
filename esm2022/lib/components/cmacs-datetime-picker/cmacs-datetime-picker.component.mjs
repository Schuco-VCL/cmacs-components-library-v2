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
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/core/overlay";
import * as i7 from "@angular/forms";
import * as i8 from "ng-zorro-antd/core/transition-patch";
import * as i9 from "ng-zorro-antd/icon";
import * as i10 from "@angular/cdk/overlay";
import * as i11 from "ng-zorro-antd/core/outlet";
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
    i0.ɵɵlistener("click", function CmacsDateTimePickerComponent_span_6_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onClickClearBtn($event)); });
    i0.ɵɵelement(1, "i", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", ctx_r2.clearText)("title", ctx_r2.clearText);
} }
function CmacsDateTimePickerComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "cmacs-datetime-picker-panel", 13);
    i0.ɵɵlistener("ngModelChange", function CmacsDateTimePickerComponent_ng_template_7_Template_cmacs_datetime_picker_panel_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.value = $event); })("ngModelChange", function CmacsDateTimePickerComponent_ng_template_7_Template_cmacs_datetime_picker_panel_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.onPanelValueChange($event)); })("closePanel", function CmacsDateTimePickerComponent_ng_template_7_Template_cmacs_datetime_picker_panel_closePanel_3_listener() { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.setCurrentValueAndClose()); });
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@slideMotion", "enter");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r3.popupClassName)("format", ctx_r3.format)("nzHourStep", ctx_r3.hourStep)("nzMinuteStep", ctx_r3.minuteStep)("nzSecondStep", ctx_r3.secondStep)("hideSeconds", ctx_r3.hideSeconds)("nzDisabledHours", ctx_r3.disabledHours)("nzDisabledMinutes", ctx_r3.disabledMinutes)("nzDisabledSeconds", ctx_r3.disabledSeconds)("nzPlaceHolder", ctx_r3.placeHolder || i0.ɵɵpipeBind1(4, 20, ctx_r3.i18nPlaceHolder$))("nzHideDisabledOptions", ctx_r3.hideDisabledOptions)("nzUse12Hours", ctx_r3.use12Hours)("nzDefaultOpenValue", ctx_r3.defaultOpenValue)("nzAddOn", ctx_r3.addOn)("nzClearText", ctx_r3.clearText)("nzNowText", ctx_r3.nowText)("nzOkText", ctx_r3.okText)("nzAllowEmpty", ctx_r3.allowEmpty)("ngModel", ctx_r3.value);
} }
const _c1 = function () { return ["cmacs-datetime-picker-dropdown"]; };
const NZ_CONFIG_MODULE_NAME = 'timePicker';
export class CmacsDateTimePickerComponent {
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
    ngOnInit() {
        this.inputSize = Math.max(8, this.format.length) + 2;
        this.origin = new CdkOverlayOrigin(this.element);
        this.i18nPlaceHolder$ = this.i18n.localeChange.pipe(map((nzLocale) => nzLocale.TimePicker.placeholder));
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
    static { this.ɵfac = function CmacsDateTimePickerComponent_Factory(t) { return new (t || CmacsDateTimePickerComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i2.NzI18nService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.DateHelperService), i0.ɵɵdirectiveInject(i3.Platform), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i4.Directionality, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsDateTimePickerComponent, selectors: [["cmacs-datetime-picker"]], viewQuery: function CmacsDateTimePickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputRef = _t.first);
        } }, hostVars: 12, hostBindings: function CmacsDateTimePickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function CmacsDateTimePickerComponent_click_HostBindingHandler() { return ctx.open(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-picker-large", ctx.size === "large")("ant-picker-small", ctx.size === "small")("ant-picker-disabled", ctx.disabled)("ant-picker-focused", ctx.focused)("cmacs-time-picker-opened", ctx.cmacsOpen)("ant-picker-rtl", ctx.dir === "rtl");
        } }, inputs: { size: "size", hourStep: "hourStep", minuteStep: "minuteStep", secondStep: "secondStep", clearText: "clearText", nowText: "nowText", okText: "okText", popupClassName: "popupClassName", placeHolder: "placeHolder", addOn: "addOn", defaultOpenValue: "defaultOpenValue", disabledHours: "disabledHours", disabledMinutes: "disabledMinutes", disabledSeconds: "disabledSeconds", format: "format", cmacsOpen: "cmacsOpen", use12Hours: "use12Hours", suffixIcon: "suffixIcon", hideDisabledOptions: "hideDisabledOptions", hideSeconds: "hideSeconds", allowEmpty: "allowEmpty", disabled: "disabled", autoFocus: "autoFocus" }, outputs: { openChange: "openChange" }, exportAs: ["cmacsDateTimePicker"], features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: CmacsDateTimePickerComponent, multi: true }]), i0.ɵɵNgOnChangesFeature], decls: 8, vars: 16, consts: [[1, "ant-picker-input"], ["type", "text", 1, "cmacs-date-time-picker-input", 3, "size", "placeholder", "ngModel", "disabled", "ngModelChange", "focus", "blur", "keyup.enter", "keyup.escape"], ["inputElement", ""], [1, "ant-picker-suffix"], [4, "nzStringTemplateOutlet"], ["class", "ant-picker-clear", 3, "click", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayTransformOriginOn", "detach", "overlayOutsideClick"], ["nz-icon", "", 3, "nzType"], [1, "ant-picker-clear", 3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], [1, "ant-picker-dropdown"], [1, "ant-picker-panel-container"], ["tabindex", "-1", 1, "ant-picker-panel", "cmacs-datetime-picker-panel-wrapper"], [3, "ngClass", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "hideSeconds", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzPlaceHolder", "nzHideDisabledOptions", "nzUse12Hours", "nzDefaultOpenValue", "nzAddOn", "nzClearText", "nzNowText", "nzOkText", "nzAllowEmpty", "ngModel", "ngModelChange", "closePanel"]], template: function CmacsDateTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "input", 1, 2);
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
        } }, dependencies: [i5.NgClass, i5.NgIf, i6.NzConnectedOverlayDirective, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel, i8.ɵNzTransitionPatchDirective, i9.NzIconDirective, i10.CdkConnectedOverlay, i11.NzStringTemplateOutletDirective, i12.CmacsDatetimePickerPanelComponent, i5.AsyncPipe], styles: [".cmacs-datetime-picker-input-number{width:55px;height:30px!important;margin:11px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif}.cmacs-date-time-picker-input{color:#acb3bf!important}.ant-picker-input .ant-picker-suffix{color:#656c79!important}.cmacs-datetime-picker-panel-wrapper .ant-picker-time-panel .ant-picker-content{height:unset;overflow-x:auto;width:calc(100% - 2px)}::ng-deep cmacs-datetime-picker.ant-time-picker .ant-time-picker-input[disabled]{background:#f6f7fb;cursor:default;border:1px solid #DEE0E5}::ng-deep cmacs-datetime-picker.ant-time-picker .ant-time-picker-input[disabled]+.ant-time-picker-icon{color:#bec4cd;cursor:default}.cmacs-datetime-dividers{display:inline-block;position:relative;top:-3px}.cmacs-datetime-picker .ant-time-picker-panel-inner{width:224px!important}.cmacs-datetime-picker .ampmdropdown{width:calc(100% - 156px)}::ng-deep .cmacs-datetime-picker .ant-time-picker-panel-inner cmacs-select.ant-select{height:30px!important;margin:12px 0!important;display:inline-flex;width:auto!important}.cmacs-datetime-picker .ant-time-picker-panel-inner.cmacs-datetime-picker-noseconds{width:148px!important}.ant-time-picker-panel-narrow .cmacs-datetime-picker .ant-time-picker-panel-input-wrap{max-width:unset}.ant-time-picker-clear.datetime-picker-clear-disabled{opacity:0!important;z-index:0!important}\n"], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 }); }
}
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
        args: [{ encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: 'cmacs-datetime-picker', exportAs: 'cmacsDateTimePicker', host: {
                    '[class.ant-picker-large]': `size === 'large'`,
                    '[class.ant-picker-small]': `size === 'small'`,
                    '[class.ant-picker-disabled]': `disabled`,
                    '[class.ant-picker-focused]': `focused`,
                    '[class.cmacs-time-picker-opened]': `cmacsOpen`,
                    '[class.ant-picker-rtl]': `dir === 'rtl'`,
                    '(click)': 'open()'
                }, animations: [slideMotion], providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: CmacsDateTimePickerComponent, multi: true }], template: "<div class=\"ant-picker-input\">\r\n  <input #inputElement\r\n         type=\"text\"\r\n         class=\"cmacs-date-time-picker-input\"\r\n         [size]=\"inputSize\"\r\n         [placeholder]=\"placeHolder || (i18nPlaceHolder$ | async)\"\r\n         [(ngModel)]=\"inputValue\"\r\n         [disabled]=\"disabled\"\r\n         (focus)=\"onFocus(true)\"\r\n         (blur)=\"onFocus(false)\"\r\n         (keyup.enter)=\"onKeyupEnter()\"\r\n         (keyup.escape)=\"onKeyupEsc()\"\r\n         (ngModelChange)=\"onInputChange($event)\" />\r\n  <span class=\"ant-picker-suffix\">\r\n    <ng-container *nzStringTemplateOutlet=\"suffixIcon; let suffixIcon\">\r\n      <i nz-icon [nzType]=\"suffixIcon\"></i>\r\n    </ng-container>\r\n  </span>\r\n  <span *ngIf=\"allowEmpty && !disabled && value\" class=\"ant-picker-clear\" (click)=\"onClickClearBtn($event)\">\r\n    <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" [attr.aria-label]=\"clearText\" [attr.title]=\"clearText\"></i>\r\n  </span>\r\n</div>\r\n\r\n<ng-template cdkConnectedOverlay\r\n             nzConnectedOverlay\r\n             [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n             [cdkConnectedOverlayOrigin]=\"origin\"\r\n             [cdkConnectedOverlayOpen]=\"cmacsOpen\"\r\n             [cdkConnectedOverlayOffsetY]=\"-2\"\r\n             [cdkConnectedOverlayWidth]=\"calcWidth\"\r\n             [cdkConnectedOverlayPanelClass]=\"['cmacs-datetime-picker-dropdown']\"\r\n             [cdkConnectedOverlayTransformOriginOn]=\"'.ant-picker-dropdown'\"\r\n             (detach)=\"close()\"\r\n             (overlayOutsideClick)=\"onClickOutside($event)\">\r\n  <div [@slideMotion]=\"'enter'\" class=\"ant-picker-dropdown\">\r\n    <div class=\"ant-picker-panel-container\">\r\n      <div tabindex=\"-1\" class=\"ant-picker-panel cmacs-datetime-picker-panel-wrapper\">\r\n        <cmacs-datetime-picker-panel [ngClass]=\"popupClassName\"\r\n                              [format]=\"format\"\r\n                              [nzHourStep]=\"hourStep\"\r\n                              [nzMinuteStep]=\"minuteStep\"\r\n                              [nzSecondStep]=\"secondStep\"\r\n                              [hideSeconds]=\"hideSeconds\"\r\n                              [nzDisabledHours]=\"disabledHours\"\r\n                              [nzDisabledMinutes]=\"disabledMinutes\"\r\n                              [nzDisabledSeconds]=\"disabledSeconds\"\r\n                              [nzPlaceHolder]=\"placeHolder || (i18nPlaceHolder$ | async)\"\r\n                              [nzHideDisabledOptions]=\"hideDisabledOptions\"\r\n                              [nzUse12Hours]=\"use12Hours\"\r\n                              [nzDefaultOpenValue]=\"defaultOpenValue\"\r\n                              [nzAddOn]=\"addOn\"\r\n                              [nzClearText]=\"clearText\"\r\n                              [nzNowText]=\"nowText\"\r\n                              [nzOkText]=\"okText\"\r\n                              [nzAllowEmpty]=\"allowEmpty\"\r\n                              [(ngModel)]=\"value\"\r\n                              (ngModelChange)=\"onPanelValueChange($event)\"\r\n                              (closePanel)=\"setCurrentValueAndClose()\"></cmacs-datetime-picker-panel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: [".cmacs-datetime-picker-input-number{width:55px;height:30px!important;margin:11px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif}.cmacs-date-time-picker-input{color:#acb3bf!important}.ant-picker-input .ant-picker-suffix{color:#656c79!important}.cmacs-datetime-picker-panel-wrapper .ant-picker-time-panel .ant-picker-content{height:unset;overflow-x:auto;width:calc(100% - 2px)}::ng-deep cmacs-datetime-picker.ant-time-picker .ant-time-picker-input[disabled]{background:#f6f7fb;cursor:default;border:1px solid #DEE0E5}::ng-deep cmacs-datetime-picker.ant-time-picker .ant-time-picker-input[disabled]+.ant-time-picker-icon{color:#bec4cd;cursor:default}.cmacs-datetime-dividers{display:inline-block;position:relative;top:-3px}.cmacs-datetime-picker .ant-time-picker-panel-inner{width:224px!important}.cmacs-datetime-picker .ampmdropdown{width:calc(100% - 156px)}::ng-deep .cmacs-datetime-picker .ant-time-picker-panel-inner cmacs-select.ant-select{height:30px!important;margin:12px 0!important;display:inline-flex;width:auto!important}.cmacs-datetime-picker .ant-time-picker-panel-inner.cmacs-datetime-picker-noseconds{width:148px!important}.ant-time-picker-panel-narrow .cmacs-datetime-picker .ant-time-picker-panel-input-wrap{max-width:unset}.ant-time-picker-clear.datetime-picker-clear-disabled{opacity:0!important;z-index:0!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRldGltZS1waWNrZXIvY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRldGltZS1waWNrZXIvY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7QUFFaEYsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUlOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTNELE9BQU8sRUFBZ0MsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpELE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0Is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LEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDOztzQkEwS2hHLFFBQVE7d0JBaEprQyxRQUFRO2tCQUFwRCxTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDbEMsSUFBSTtrQkFBWixLQUFLO1lBQ2lCLFFBQVE7a0JBQTlCLEtBQUs7WUFDaUIsVUFBVTtrQkFBaEMsS0FBSztZQUNpQixVQUFVO2tCQUFoQyxLQUFLO1lBQ2lCLFNBQVM7a0JBQS9CLEtBQUs7WUFDaUIsT0FBTztrQkFBN0IsS0FBSztZQUNpQixNQUFNO2tCQUE1QixLQUFLO1lBQ2lCLGNBQWM7a0JBQXBDLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ2lCLE1BQU07a0JBQTVCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ2lDLFVBQVU7a0JBQWhELEtBQUs7WUFDaUIsVUFBVTtrQkFBaEMsS0FBSztZQUVhLFVBQVU7a0JBQTVCLE1BQU07WUFFa0IsbUJBQW1CO2tCQUEzQyxLQUFLO1lBQ21CLFdBQVc7a0JBQW5DLEtBQUs7WUFDaUMsVUFBVTtrQkFBaEQsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLFNBQVM7a0JBQWpDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQgeyBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGlzVmFsaWQgfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCB7IHNsaWRlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcblxyXG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XHJcbmltcG9ydCB7IHdhcm4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcclxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIGlzTmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpJMThuSW50ZXJmYWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ3RpbWVQaWNrZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ2NtYWNzLWRhdGV0aW1lLXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0RhdGVUaW1lUGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1kYXRldGltZS1waWNrZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXBpY2tlci1sYXJnZV0nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1waWNrZXItc21hbGxdJzogYHNpemUgPT09ICdzbWFsbCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLWRpc2FibGVkXSc6IGBkaXNhYmxlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1waWNrZXItZm9jdXNlZF0nOiBgZm9jdXNlZGAsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRpbWUtcGlja2VyLW9wZW5lZF0nOiBgY21hY3NPcGVuYCxcclxuICAgICdbY2xhc3MuYW50LXBpY2tlci1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxyXG4gICAgJyhjbGljayknOiAnb3BlbigpJ1xyXG4gIH0sXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogQ21hY3NEYXRlVGltZVBpY2tlckNvbXBvbmVudCwgbXVsdGk6IHRydWUgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgX29uQ2hhbmdlPzogKHZhbHVlOiBEYXRlIHwgbnVsbCkgPT4gdm9pZDtcclxuICBwcml2YXRlIF9vblRvdWNoZWQ/OiAoKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIGlzSW5pdCA9IGZhbHNlO1xyXG4gIGZvY3VzZWQgPSBmYWxzZTtcclxuICBpbnB1dFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICB2YWx1ZTogRGF0ZSB8IG51bGwgPSBudWxsO1xyXG4gIHByZVZhbHVlOiBEYXRlIHwgbnVsbCA9IG51bGw7XHJcbiAgb3JpZ2luITogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICBpbnB1dFNpemU/OiBudW1iZXI7XHJcbiAgY2FsY1dpZHRoOiBudW1iZXIgPSAwO1xyXG4gIGkxOG5QbGFjZUhvbGRlciQ6IE9ic2VydmFibGU8c3RyaW5nIHwgdW5kZWZpbmVkPiA9IG9mKHVuZGVmaW5lZCk7XHJcbiAgb3ZlcmxheVBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gW1xyXG4gICAge1xyXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgIG92ZXJsYXlZOiAndG9wJyxcclxuICAgICAgb2Zmc2V0WTogM1xyXG4gICAgfVxyXG4gIF07XHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuXHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRSZWYhOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgaG91clN0ZXA6IG51bWJlciA9IDE7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBtaW51dGVTdGVwOiBudW1iZXIgPSAxO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgc2Vjb25kU3RlcDogbnVtYmVyID0gMTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIGNsZWFyVGV4dDogc3RyaW5nID0gJ2NsZWFyJztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG5vd1RleHQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgb2tUZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIHBvcHVwQ2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIGFkZE9uPzogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgZGVmYXVsdE9wZW5WYWx1ZT86IERhdGU7XHJcbiAgQElucHV0KCkgZGlzYWJsZWRIb3Vycz86ICgpID0+IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkTWludXRlcz86IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkU2Vjb25kcz86IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIGZvcm1hdDogc3RyaW5nID0gJ0hIOm1tOnNzJztcclxuICBASW5wdXQoKSBjbWFjc09wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSB1c2UxMkhvdXJzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBzdWZmaXhJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+ID0gJ2Nsb2NrLWNpcmNsZSc7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZURpc2FibGVkT3B0aW9ucyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlU2Vjb25kcyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0Qm9vbGVhbigpIGFsbG93RW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvRm9jdXMgPSBmYWxzZTtcclxuXHJcbiAgZW1pdFZhbHVlKHZhbHVlOiBEYXRlIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9vblRvdWNoZWQpIHtcclxuICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZTogRGF0ZSB8IG51bGwsIHN5bmNQcmVWYWx1ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAoc3luY1ByZVZhbHVlKSB7XHJcbiAgICAgIHRoaXMucHJlVmFsdWUgPSBpc1ZhbGlkKHZhbHVlKSA/IG5ldyBEYXRlKHZhbHVlISkgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZSA9IGlzVmFsaWQodmFsdWUpID8gbmV3IERhdGUodmFsdWUhKSA6IG51bGw7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHZhbHVlLCB0aGlzLmZvcm1hdCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmNtYWNzT3Blbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB0aGlzLnNldFBhbmVsV2lkdGgoKTtcclxuICAgIHRoaXMuY21hY3NPcGVuID0gdHJ1ZTtcclxuICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMuY21hY3NPcGVuKTtcclxuICB9XHJcblxyXG4gIHNldFBhbmVsV2lkdGgoKSB7XHJcbiAgICB0aGlzLmNhbGNXaWR0aCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNtYWNzT3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLmNtYWNzT3Blbik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0luaXQgJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrQ2xlYXJCdG4oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5lbWl0VmFsdWUobnVsbCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrT3V0c2lkZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgIHRoaXMuc2V0Q3VycmVudFZhbHVlQW5kQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRm9jdXModmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5dXBFc2MoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMucHJlVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25LZXl1cEVudGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY21hY3NPcGVuICYmIGlzVmFsaWQodGhpcy52YWx1ZSkpIHtcclxuICAgICAgdGhpcy5zZXRDdXJyZW50VmFsdWVBbmRDbG9zZSgpO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5jbWFjc09wZW4pIHtcclxuICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbklucHV0Q2hhbmdlKHN0cjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uVFJJREVOVCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgIHRoaXMucGFyc2VUaW1lU3RyaW5nKHN0cik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBhbmVsVmFsdWVDaGFuZ2UodmFsdWU6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VycmVudFZhbHVlQW5kQ2xvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVtaXRWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxyXG4gICkge1xyXG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtcGlja2VyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRTaXplID0gTWF0aC5tYXgoOCwgdGhpcy5mb3JtYXQubGVuZ3RoKSArIDI7XHJcbiAgICB0aGlzLm9yaWdpbiA9IG5ldyBDZGtPdmVybGF5T3JpZ2luKHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5pMThuUGxhY2VIb2xkZXIkID0gdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKG1hcCgobnpMb2NhbGU6IE56STE4bkludGVyZmFjZSkgPT4gbnpMb2NhbGUuVGltZVBpY2tlci5wbGFjZWhvbGRlcikpO1xyXG5cclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpVc2UxMkhvdXJzLCBmb3JtYXQsIGRpc2FibGVkLCBhdXRvRm9jdXMgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAobnpVc2UxMkhvdXJzICYmICFuelVzZTEySG91cnMucHJldmlvdXNWYWx1ZSAmJiBuelVzZTEySG91cnMuY3VycmVudFZhbHVlICYmICFmb3JtYXQpIHtcclxuICAgICAgdGhpcy5mb3JtYXQgPSAnaDptbTpzcyBhJztcclxuICAgIH1cclxuICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGRpc2FibGVkLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXQsICdkaXNhYmxlZCcsICcnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShpbnB1dCwgJ2Rpc2FibGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChhdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBhcnNlVGltZVN0cmluZyhzdHI6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGVIZWxwZXIucGFyc2VUaW1lKHN0ciwgdGhpcy5mb3JtYXQpIHx8IG51bGw7XHJcbiAgICBpZiAoaXNWYWxpZCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcclxuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHRpbWU6IERhdGUgfCBudWxsIHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBsZXQgcmVzdWx0OiBEYXRlIHwgbnVsbDtcclxuXHJcbiAgICBpZiAodGltZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgcmVzdWx0ID0gdGltZTtcclxuICAgIH0gZWxzZSBpZiAoaXNOaWwodGltZSkpIHtcclxuICAgICAgcmVzdWx0ID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdhcm4oJ05vbi1EYXRlIHR5cGUgaXMgbm90IHJlY29tbWVuZGVkIGZvciB0aW1lLXBpY2tlciwgdXNlIFwiRGF0ZVwiIHR5cGUuJyk7XHJcbiAgICAgIHJlc3VsdCA9IG5ldyBEYXRlKHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0VmFsdWUocmVzdWx0LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh0aW1lOiBEYXRlIHwgbnVsbCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtcGlja2VyLWlucHV0XCI+XHJcbiAgPGlucHV0ICNpbnB1dEVsZW1lbnRcclxuICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICBjbGFzcz1cImNtYWNzLWRhdGUtdGltZS1waWNrZXItaW5wdXRcIlxyXG4gICAgICAgICBbc2l6ZV09XCJpbnB1dFNpemVcIlxyXG4gICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2VIb2xkZXIgfHwgKGkxOG5QbGFjZUhvbGRlciQgfCBhc3luYylcIlxyXG4gICAgICAgICBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVcIlxyXG4gICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAoZm9jdXMpPVwib25Gb2N1cyh0cnVlKVwiXHJcbiAgICAgICAgIChibHVyKT1cIm9uRm9jdXMoZmFsc2UpXCJcclxuICAgICAgICAgKGtleXVwLmVudGVyKT1cIm9uS2V5dXBFbnRlcigpXCJcclxuICAgICAgICAgKGtleXVwLmVzY2FwZSk9XCJvbktleXVwRXNjKClcIlxyXG4gICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIiAvPlxyXG4gIDxzcGFuIGNsYXNzPVwiYW50LXBpY2tlci1zdWZmaXhcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJzdWZmaXhJY29uOyBsZXQgc3VmZml4SWNvblwiPlxyXG4gICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwic3VmZml4SWNvblwiPjwvaT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvc3Bhbj5cclxuICA8c3BhbiAqbmdJZj1cImFsbG93RW1wdHkgJiYgIWRpc2FibGVkICYmIHZhbHVlXCIgY2xhc3M9XCJhbnQtcGlja2VyLWNsZWFyXCIgKGNsaWNrKT1cIm9uQ2xpY2tDbGVhckJ0bigkZXZlbnQpXCI+XHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiIG56VGhlbWU9XCJmaWxsXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJjbGVhclRleHRcIiBbYXR0ci50aXRsZV09XCJjbGVhclRleHRcIj48L2k+XHJcbiAgPC9zcGFuPlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSBjZGtDb25uZWN0ZWRPdmVybGF5XHJcbiAgICAgICAgICAgICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgICAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIm92ZXJsYXlQb3NpdGlvbnNcIlxyXG4gICAgICAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcclxuICAgICAgICAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJjbWFjc09wZW5cIlxyXG4gICAgICAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPZmZzZXRZXT1cIi0yXCJcclxuICAgICAgICAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5V2lkdGhdPVwiY2FsY1dpZHRoXCJcclxuICAgICAgICAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UGFuZWxDbGFzc109XCJbJ2NtYWNzLWRhdGV0aW1lLXBpY2tlci1kcm9wZG93biddXCJcclxuICAgICAgICAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5VHJhbnNmb3JtT3JpZ2luT25dPVwiJy5hbnQtcGlja2VyLWRyb3Bkb3duJ1wiXHJcbiAgICAgICAgICAgICAoZGV0YWNoKT1cImNsb3NlKClcIlxyXG4gICAgICAgICAgICAgKG92ZXJsYXlPdXRzaWRlQ2xpY2spPVwib25DbGlja091dHNpZGUoJGV2ZW50KVwiPlxyXG4gIDxkaXYgW0BzbGlkZU1vdGlvbl09XCInZW50ZXInXCIgY2xhc3M9XCJhbnQtcGlja2VyLWRyb3Bkb3duXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci1wYW5lbC1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJhbnQtcGlja2VyLXBhbmVsIGNtYWNzLWRhdGV0aW1lLXBpY2tlci1wYW5lbC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGNtYWNzLWRhdGV0aW1lLXBpY2tlci1wYW5lbCBbbmdDbGFzc109XCJwb3B1cENsYXNzTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXRdPVwiZm9ybWF0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256SG91clN0ZXBdPVwiaG91clN0ZXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpNaW51dGVTdGVwXT1cIm1pbnV0ZVN0ZXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpTZWNvbmRTdGVwXT1cInNlY29uZFN0ZXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGlkZVNlY29uZHNdPVwiaGlkZVNlY29uZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpEaXNhYmxlZEhvdXJzXT1cImRpc2FibGVkSG91cnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpEaXNhYmxlZE1pbnV0ZXNdPVwiZGlzYWJsZWRNaW51dGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256RGlzYWJsZWRTZWNvbmRzXT1cImRpc2FibGVkU2Vjb25kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInBsYWNlSG9sZGVyIHx8IChpMThuUGxhY2VIb2xkZXIkIHwgYXN5bmMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256SGlkZURpc2FibGVkT3B0aW9uc109XCJoaWRlRGlzYWJsZWRPcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256VXNlMTJIb3Vyc109XCJ1c2UxMkhvdXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256RGVmYXVsdE9wZW5WYWx1ZV09XCJkZWZhdWx0T3BlblZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256QWRkT25dPVwiYWRkT25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpDbGVhclRleHRdPVwiY2xlYXJUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256Tm93VGV4dF09XCJub3dUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256T2tUZXh0XT1cIm9rVGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekFsbG93RW1wdHldPVwiYWxsb3dFbXB0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblBhbmVsVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbG9zZVBhbmVsKT1cInNldEN1cnJlbnRWYWx1ZUFuZENsb3NlKClcIj48L2NtYWNzLWRhdGV0aW1lLXBpY2tlci1wYW5lbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19