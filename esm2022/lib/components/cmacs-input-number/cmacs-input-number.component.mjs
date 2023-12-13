import { __decorate } from "tslib";
import { DOWN_ARROW, ENTER, UP_ARROW } from '@angular/cdk/keycodes';
import { forwardRef, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
const _c0 = ["inputElement"];
export class CmacsInputNumberComponent {
    updateAutoFocus() {
        if (this.autoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    }
    onValueChange(value) {
        this.actualValue = this.parser(value
            .trim()
            .replace(/。/g, '.')
        //.replace(/[^\w\.-]+/g, '')
        );
        this.onModelChange.emit(Number(this.actualValue));
    }
    getCurrentValidValue(value) {
        let val = value;
        if (val === '') {
            val = '';
        }
        else if (!this.isNotCompleteNumber(val)) {
            val = this.getValidValue(val);
        }
        else {
            val = this.value;
        }
        return this.toNumber(val);
    }
    // '1.' '1x' 'xx' '' => are not complete numbers
    isNotCompleteNumber(num) {
        return (isNaN(num) ||
            num === '' ||
            num === null ||
            !!(num && num.toString().indexOf('.') === num.toString().length - 1));
    }
    getValidValue(value) {
        let val = parseFloat(value);
        if (isNaN(val)) {
            return value;
        }
        if (val < this.min) {
            val = this.min;
        }
        if (val > this.max) {
            val = this.max;
        }
        return val;
    }
    toNumber(num) {
        if (this.isNotCompleteNumber(num)) {
            return num;
        }
        if (isNotNil(this.precision)) {
            return Number(Number(num).toFixed(this.precision));
        }
        return Number(num);
    }
    setValidateValue() {
        const value = this.getCurrentValidValue(this.actualValue);
        this.setValue(value, `${this.value}` !== `${value}`);
    }
    onBlur() {
        this.isFocused = false;
        this.setValidateValue();
    }
    onFocus() {
        this.isFocused = true;
    }
    getRatio(e) {
        let ratio = 1;
        if (e.metaKey || e.ctrlKey) {
            ratio = 0.1;
        }
        else if (e.shiftKey) {
            ratio = 10;
        }
        return ratio;
    }
    down(e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('down', e, ratio);
    }
    up(e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('up', e, ratio);
    }
    getPrecision(value) {
        const valueString = value.toString();
        if (valueString.indexOf('e-') >= 0) {
            return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
        }
        let precision = 0;
        if (valueString.indexOf('.') >= 0) {
            precision = valueString.length - valueString.indexOf('.') - 1;
        }
        return precision;
    }
    getMaxPrecision(currentValue, ratio) {
        if (isNotNil(this.precision)) {
            return this.precision;
        }
        const ratioPrecision = this.getPrecision(ratio);
        const stepPrecision = this.getPrecision(this.cmacsStep);
        const currentValuePrecision = this.getPrecision(currentValue);
        if (!currentValue) {
            return ratioPrecision + stepPrecision;
        }
        return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    }
    getPrecisionFactor(currentValue, ratio) {
        const precision = this.getMaxPrecision(currentValue, ratio);
        return Math.pow(10, precision);
    }
    upStep(val, rat) {
        const precisionFactor = this.getPrecisionFactor(val, rat);
        const precision = Math.abs(this.getMaxPrecision(val, rat));
        let result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val + precisionFactor * this.cmacsStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.min === -Infinity ? this.cmacsStep : this.min;
        }
        return this.toNumber(result);
    }
    downStep(val, rat) {
        const precisionFactor = this.getPrecisionFactor(val, rat);
        const precision = Math.abs(this.getMaxPrecision(val, rat));
        let result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val - precisionFactor * this.cmacsStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.min === -Infinity ? -this.cmacsStep : this.min;
        }
        return this.toNumber(result);
    }
    step(type, e, ratio = 1) {
        this.stop();
        e.preventDefault();
        if (this.disabled) {
            return;
        }
        const value = this.getCurrentValidValue(this.actualValue) || 0;
        let val = 0;
        if (type === 'up') {
            val = this.upStep(value, ratio);
        }
        else if (type === 'down') {
            val = this.downStep(value, ratio);
        }
        const outOfRange = val > this.max || val < this.min;
        if (val > this.max) {
            val = this.max;
        }
        else if (val < this.min) {
            val = this.min;
        }
        this.setValue(val, true);
        this.isFocused = true;
        if (outOfRange) {
            return;
        }
        this.autoStepTimer = window.setTimeout(() => {
            this[type](e, ratio, true);
        }, 600);
    }
    stop() {
        if (this.autoStepTimer) {
            clearTimeout(this.autoStepTimer);
        }
    }
    setValue(value, emit) {
        if (emit && `${this.value}` !== `${value}`) {
            this.onChange(value);
        }
        this.value = value;
        this.actualValue = value;
        this.onModelChange.emit(Number(this.actualValue));
        const displayValue = isNotNil(this.formatter(this.value)) ? this.formatter(this.value) : '';
        this.displayValue = displayValue;
        this.inputElement.nativeElement.value = displayValue;
        this.disabledUp = this.disabledDown = false;
        if (value || value === 0) {
            const val = Number(value);
            if (val >= this.max) {
                this.disabledUp = true;
            }
            if (val <= this.min) {
                this.disabledDown = true;
            }
        }
    }
    onKeyDown(e) {
        // tslint:disable-next-line: deprecation
        if (e.code === 'ArrowUp' || e.keyCode === UP_ARROW) {
            const ratio = this.getRatio(e);
            this.up(e, ratio);
            this.stop();
            // tslint:disable-next-line: deprecation
        }
        else if (e.code === 'ArrowDown' || e.keyCode === DOWN_ARROW) {
            const ratio = this.getRatio(e);
            this.down(e, ratio);
            this.stop();
            // tslint:disable-next-line: deprecation
        }
        else if (e.keyCode === ENTER) {
            this.setValidateValue();
        }
    }
    onKeyUp() {
        this.stop();
    }
    writeValue(value) {
        this.setValue(value, false);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    constructor(elementRef, renderer, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.isFocused = false;
        this.disabledUp = false;
        this.disabledDown = false;
        this.onChange = () => null;
        this.onTouched = () => null;
        this.cmacsBlur = new EventEmitter();
        this.cmacsFocus = new EventEmitter();
        this.onModelChange = new EventEmitter();
        this.size = 'default';
        this.min = -Infinity;
        this.max = Infinity;
        this.parser = (value) => value;
        this.placeHolder = '';
        this.cmacsStep = 1;
        this.disabled = false;
        this.autoFocus = false;
        this.formatter = value => value;
        renderer.addClass(elementRef.nativeElement, 'ant-input-number');
    }
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                this.onBlur();
                this.cmacsBlur.emit();
                Promise.resolve().then(() => this.onTouched());
            }
            else {
                this.onFocus();
                this.cmacsFocus.emit();
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.autoFocus) {
            this.updateAutoFocus();
        }
        if (changes.formatter) {
            const value = this.getCurrentValidValue(this.actualValue);
            this.setValue(value, true);
        }
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
    static { this.ɵfac = function CmacsInputNumberComponent_Factory(t) { return new (t || CmacsInputNumberComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.FocusMonitor)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsInputNumberComponent, selectors: [["cmacs-input-number"]], viewQuery: function CmacsInputNumberComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        } }, hostVars: 8, hostBindings: function CmacsInputNumberComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-input-number-focused", ctx.isFocused)("ant-input-number-lg", ctx.size === "large")("ant-input-number-sm", ctx.size === "small")("ant-input-number-disabled", ctx.disabled);
        } }, inputs: { size: "size", min: "min", max: "max", parser: "parser", precision: "precision", placeHolder: "placeHolder", cmacsStep: "cmacsStep", disabled: "disabled", autoFocus: "autoFocus", formatter: "formatter" }, outputs: { cmacsBlur: "cmacsBlur", cmacsFocus: "cmacsFocus", onModelChange: "onModelChange" }, exportAs: ["cmacsInputNumber"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => CmacsInputNumberComponent),
                    multi: true
                }
            ]), i0.ɵɵNgOnChangesFeature], decls: 8, vars: 10, consts: [[1, "ant-input-number-handler-wrap"], ["unselectable", "unselectable", 1, "ant-input-number-handler", "ant-input-number-handler-up", 3, "mousedown", "mouseup", "mouseleave"], ["nz-icon", "", "nzType", "caret-up", 1, "ant-input-number-handler-up-inner"], ["unselectable", "unselectable", 1, "ant-input-number-handler", "ant-input-number-handler-down", 3, "mousedown", "mouseup", "mouseleave"], ["nz-icon", "", "nzType", "caret-down", 1, "ant-input-number-handler-down-inner"], [1, "ant-input-number-input-wrap"], ["autocomplete", "off", 1, "ant-input-number-input", 3, "disabled", "placeholder", "ngModel", "keydown", "keyup", "ngModelChange"], ["inputElement", ""]], template: function CmacsInputNumberComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "span", 1);
            i0.ɵɵlistener("mousedown", function CmacsInputNumberComponent_Template_span_mousedown_1_listener($event) { return ctx.up($event); })("mouseup", function CmacsInputNumberComponent_Template_span_mouseup_1_listener() { return ctx.stop(); })("mouseleave", function CmacsInputNumberComponent_Template_span_mouseleave_1_listener() { return ctx.stop(); });
            i0.ɵɵelement(2, "i", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span", 3);
            i0.ɵɵlistener("mousedown", function CmacsInputNumberComponent_Template_span_mousedown_3_listener($event) { return ctx.down($event); })("mouseup", function CmacsInputNumberComponent_Template_span_mouseup_3_listener() { return ctx.stop(); })("mouseleave", function CmacsInputNumberComponent_Template_span_mouseleave_3_listener() { return ctx.stop(); });
            i0.ɵɵelement(4, "i", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 5)(6, "input", 6, 7);
            i0.ɵɵlistener("keydown", function CmacsInputNumberComponent_Template_input_keydown_6_listener($event) { return ctx.onKeyDown($event); })("keyup", function CmacsInputNumberComponent_Template_input_keyup_6_listener() { return ctx.onKeyUp(); })("ngModelChange", function CmacsInputNumberComponent_Template_input_ngModelChange_6_listener($event) { return ctx.onValueChange($event); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("ant-input-number-handler-up-disabled", ctx.disabledUp);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("ant-input-number-handler-down-disabled", ctx.disabledDown);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.disabled)("placeholder", ctx.placeHolder)("ngModel", ctx.displayValue);
            i0.ɵɵattribute("min", ctx.min)("max", ctx.max)("step", ctx.step);
        } }, dependencies: [i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.ɵNzTransitionPatchDirective, i4.NzIconDirective], styles: [".ant-input-number-handler-wrap{opacity:1!important;border:none}.ant-input-number-handler-down{border:none}.ant-input-number-handler-up-inner,.ant-input-number-handler-down-inner{color:#bec4cd;font-size:12px!important}.ant-input-number-handler{border-left:none!important}.ant-input-number:not(.cmacs-datetime-picker-input-number){height:34px;border:solid 1px #dee0e5;color:#acb3bf;box-shadow:none;outline:none;border-radius:3px;width:100%;overflow:hidden}.ant-input-number:focus-within{color:#656c79;border:solid 1px #dee0e5;box-shadow:none}.ant-input-number:hover{border:solid 1px #bec4cd;box-shadow:none}.ant-input-number:hover .ant-input-number-handler-up-inner svg,.ant-input-number:hover .ant-input-number-handler-down-inner svg{color:#656c79;box-shadow:none}.ant-input-number:focus-within .ant-input-number-handler-up-inner svg,.ant-input-number:focus-within .ant-input-number-handler-down-inner svg{color:#656c79;box-shadow:none}.ant-input-number-handler-up-inner svg:hover{color:#2a7cff!important}.ant-input-number-handler-down-inner svg:hover{color:#2a7cff!important}.ant-input-number-disabled{background-color:#f6f7fb!important;border-color:#dee0e5;cursor:not-allowed}.ant-input-number-disabled:hover{border-color:#dee0e5}.ant-input-number-disabled .ant-input-number-handler-wrap{display:inherit;background-color:#f6f7fb}.ant-input-number-handler-wrap:hover .ant-input-number-handler{height:50%}.ant-input-number-handler-down:hover,.ant-input-number-handler-up:hover{height:50%!important}.ant-input-number-disabled .ant-input-number-handler-wrap .ant-input-number-handler-up svg{color:#bec4cd!important}.ant-input-number-disabled .ant-input-number-handler-wrap .ant-input-number-handler-down svg{color:#bec4cd!important}.ant-input-number-disabled .ant-input-number-handler-wrap .ant-input-number-handler:hover{cursor:not-allowed!important}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsInputNumberComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsInputNumberComponent.prototype, "autoFocus", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsInputNumberComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-input-number', exportAs: 'cmacsInputNumber', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsInputNumberComponent),
                        multi: true
                    }
                ], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                    '[class.ant-input-number-focused]': 'isFocused',
                    '[class.ant-input-number-lg]': `size === 'large'`,
                    '[class.ant-input-number-sm]': `size === 'small'`,
                    '[class.ant-input-number-disabled]': 'disabled'
                }, template: "<div class=\"ant-input-number-handler-wrap\">\r\n  <span unselectable=\"unselectable\"\r\n    class=\"ant-input-number-handler ant-input-number-handler-up\"\r\n    (mousedown)=\"up($event)\"\r\n    (mouseup)=\"stop()\"\r\n    (mouseleave)=\"stop()\"\r\n    [class.ant-input-number-handler-up-disabled]=\"disabledUp\">\r\n    <i nz-icon nzType=\"caret-up\" class=\"ant-input-number-handler-up-inner\"></i>\r\n  </span>\r\n  <span unselectable=\"unselectable\"\r\n    class=\"ant-input-number-handler ant-input-number-handler-down\"\r\n    (mousedown)=\"down($event)\"\r\n    (mouseup)=\"stop()\"\r\n    (mouseleave)=\"stop()\"\r\n    [class.ant-input-number-handler-down-disabled]=\"disabledDown\">\r\n    <i nz-icon nzType=\"caret-down\" class=\"ant-input-number-handler-down-inner\"></i>\r\n  </span>\r\n</div>\r\n<div class=\"ant-input-number-input-wrap\">\r\n  <input #inputElement\r\n    autocomplete=\"off\"\r\n    class=\"ant-input-number-input\"\r\n    [disabled]=\"disabled\"\r\n    [attr.min]=\"min\"\r\n    [attr.max]=\"max\"\r\n    [placeholder]=\"placeHolder\"\r\n    [attr.step]=\"step\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp()\"\r\n    [ngModel]=\"displayValue\"\r\n    (ngModelChange)=\"onValueChange($event)\"/>\r\n</div>\r\n", styles: [".ant-input-number-handler-wrap{opacity:1!important;border:none}.ant-input-number-handler-down{border:none}.ant-input-number-handler-up-inner,.ant-input-number-handler-down-inner{color:#bec4cd;font-size:12px!important}.ant-input-number-handler{border-left:none!important}.ant-input-number:not(.cmacs-datetime-picker-input-number){height:34px;border:solid 1px #dee0e5;color:#acb3bf;box-shadow:none;outline:none;border-radius:3px;width:100%;overflow:hidden}.ant-input-number:focus-within{color:#656c79;border:solid 1px #dee0e5;box-shadow:none}.ant-input-number:hover{border:solid 1px #bec4cd;box-shadow:none}.ant-input-number:hover .ant-input-number-handler-up-inner svg,.ant-input-number:hover .ant-input-number-handler-down-inner svg{color:#656c79;box-shadow:none}.ant-input-number:focus-within .ant-input-number-handler-up-inner svg,.ant-input-number:focus-within .ant-input-number-handler-down-inner svg{color:#656c79;box-shadow:none}.ant-input-number-handler-up-inner svg:hover{color:#2a7cff!important}.ant-input-number-handler-down-inner svg:hover{color:#2a7cff!important}.ant-input-number-disabled{background-color:#f6f7fb!important;border-color:#dee0e5;cursor:not-allowed}.ant-input-number-disabled:hover{border-color:#dee0e5}.ant-input-number-disabled .ant-input-number-handler-wrap{display:inherit;background-color:#f6f7fb}.ant-input-number-handler-wrap:hover .ant-input-number-handler{height:50%}.ant-input-number-handler-down:hover,.ant-input-number-handler-up:hover{height:50%!important}.ant-input-number-disabled .ant-input-number-handler-wrap .ant-input-number-handler-up svg{color:#bec4cd!important}.ant-input-number-disabled .ant-input-number-handler-wrap .ant-input-number-handler-down svg{color:#bec4cd!important}.ant-input-number-disabled .ant-input-number-handler-wrap .ant-input-number-handler:hover{cursor:not-allowed!important}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i1.FocusMonitor }]; }, { cmacsBlur: [{
            type: Output
        }], cmacsFocus: [{
            type: Output
        }], onModelChange: [{
            type: Output
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], size: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], parser: [{
            type: Input
        }], precision: [{
            type: Input
        }], placeHolder: [{
            type: Input
        }], cmacsStep: [{
            type: Input
        }], disabled: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }], formatter: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1pbnB1dC1udW1iZXIvY21hY3MtaW5wdXQtbnVtYmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1pbnB1dC1udW1iZXIvY21hY3MtaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHekUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztBQXlCakUsTUFBTSxPQUFPLHlCQUF5QjtJQTJCcEMsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDdkY7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzdFO0lBQ0gsQ0FB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VDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSwwQkFBMEIsQ0FBQzt3QkFDeEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0YsbUJBQ2dCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksUUFFL0I7b0JBQ0osa0NBQWtDLEVBQUUsV0FBVztvQkFDL0MsNkJBQTZCLEVBQUUsa0JBQWtCO29CQUNqRCw2QkFBNkIsRUFBRSxrQkFBa0I7b0JBQ2pELG1DQUFtQyxFQUFFLFVBQVU7aUJBQ2hEO2dKQWFrQixTQUFTO2tCQUEzQixNQUFNO1lBQ1ksVUFBVTtrQkFBNUIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDc0MsWUFBWTtrQkFBeEQsU0FBUzttQkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ2xDLElBQUk7a0JBQVosS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLFNBQVM7a0JBQWpDLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3MtaW5wdXQtbnVtYmVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzSW5wdXROdW1iZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1pbnB1dC1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NJbnB1dE51bWJlckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1mb2N1c2VkXSc6ICdpc0ZvY3VzZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWxnXSc6IGBzaXplID09PSAnbGFyZ2UnYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1zbV0nOiBgc2l6ZSA9PT0gJ3NtYWxsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1udW1iZXItZGlzYWJsZWRdJzogJ2Rpc2FibGVkJ1xyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzSW5wdXROdW1iZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBhdXRvU3RlcFRpbWVyOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBhY3R1YWxWYWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIHByaXZhdGUgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBkaXNwbGF5VmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBpc0ZvY3VzZWQgPSBmYWxzZTtcclxuICBkaXNhYmxlZFVwID0gZmFsc2U7XHJcbiAgZGlzYWJsZWREb3duID0gZmFsc2U7XHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc0JsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBtaW4gPSAtSW5maW5pdHk7XHJcbiAgQElucHV0KCkgbWF4ID0gSW5maW5pdHk7XHJcbiAgQElucHV0KCkgcGFyc2VyID0gKHZhbHVlOiBhbnkpID0+IHZhbHVlO1xyXG4gIEBJbnB1dCgpIHByZWNpc2lvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyID0gJyc7XHJcbiAgQElucHV0KCkgY21hY3NTdGVwID0gMTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b0ZvY3VzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nIHwgbnVtYmVyID0gdmFsdWUgPT4gdmFsdWU7XHJcblxyXG4gIFtwcm9wZXJ0eTogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG5cclxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3R1YWxWYWx1ZSA9IHRoaXMucGFyc2VyKFxyXG4gICAgICB2YWx1ZVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAucmVwbGFjZSgv44CCL2csICcuJylcclxuICAgICAgICAvLy5yZXBsYWNlKC9bXlxcd1xcLi1dKy9nLCAnJylcclxuICAgICk7XHJcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UuZW1pdChOdW1iZXIodGhpcy5hY3R1YWxWYWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudFZhbGlkVmFsdWUodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgdmFsID0gdmFsdWU7XHJcbiAgICBpZiAodmFsID09PSAnJykge1xyXG4gICAgICB2YWwgPSAnJztcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNOb3RDb21wbGV0ZU51bWJlcih2YWwpKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMuZ2V0VmFsaWRWYWx1ZSh2YWwpIGFzIHN0cmluZztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbCA9IHRoaXMudmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b051bWJlcih2YWwpO1xyXG4gIH1cclxuXHJcbiAgLy8gJzEuJyAnMXgnICd4eCcgJycgPT4gYXJlIG5vdCBjb21wbGV0ZSBudW1iZXJzXHJcbiAgaXNOb3RDb21wbGV0ZU51bWJlcihudW06IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgaXNOYU4obnVtIGFzIG51bWJlcikgfHxcclxuICAgICAgbnVtID09PSAnJyB8fFxyXG4gICAgICBudW0gPT09IG51bGwgfHxcclxuICAgICAgISEobnVtICYmIG51bS50b1N0cmluZygpLmluZGV4T2YoJy4nKSA9PT0gbnVtLnRvU3RyaW5nKCkubGVuZ3RoIC0gMSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRWYWxpZFZhbHVlKHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgIGxldCB2YWwgPSBwYXJzZUZsb2F0KHZhbHVlIGFzIHN0cmluZyk7XHJcbiAgICBpZiAoaXNOYU4odmFsKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsIDwgdGhpcy5taW4pIHtcclxuICAgICAgdmFsID0gdGhpcy5taW47XHJcbiAgICB9XHJcbiAgICBpZiAodmFsID4gdGhpcy5tYXgpIHtcclxuICAgICAgdmFsID0gdGhpcy5tYXg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuXHJcbiAgdG9OdW1iZXIobnVtOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuaXNOb3RDb21wbGV0ZU51bWJlcihudW0pKSB7XHJcbiAgICAgIHJldHVybiBudW0gYXMgbnVtYmVyO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTm90TmlsKHRoaXMucHJlY2lzaW9uKSkge1xyXG4gICAgICByZXR1cm4gTnVtYmVyKE51bWJlcihudW0pLnRvRml4ZWQodGhpcy5wcmVjaXNpb24pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBOdW1iZXIobnVtKTtcclxuICB9XHJcblxyXG4gIHNldFZhbGlkYXRlVmFsdWUoKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbGlkVmFsdWUodGhpcy5hY3R1YWxWYWx1ZSk7XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCBgJHt0aGlzLnZhbHVlfWAgIT09IGAke3ZhbHVlfWApO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc2V0VmFsaWRhdGVWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldFJhdGlvKGU6IEtleWJvYXJkRXZlbnQpOiBudW1iZXIge1xyXG4gICAgbGV0IHJhdGlvID0gMTtcclxuICAgIGlmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSB7XHJcbiAgICAgIHJhdGlvID0gMC4xO1xyXG4gICAgfSBlbHNlIGlmIChlLnNoaWZ0S2V5KSB7XHJcbiAgICAgIHJhdGlvID0gMTA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmF0aW87XHJcbiAgfVxyXG5cclxuICBkb3duKGU6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50LCByYXRpbz86IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0ZXAoJ2Rvd24nLCBlLCByYXRpbyk7XHJcbiAgfVxyXG5cclxuICB1cChlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW8/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGVwKCd1cCcsIGUsIHJhdGlvKTtcclxuICB9XHJcblxyXG4gIGdldFByZWNpc2lvbih2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgIGlmICh2YWx1ZVN0cmluZy5pbmRleE9mKCdlLScpID49IDApIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlU3RyaW5nLnNsaWNlKHZhbHVlU3RyaW5nLmluZGV4T2YoJ2UtJykgKyAyKSwgMTApO1xyXG4gICAgfVxyXG4gICAgbGV0IHByZWNpc2lvbiA9IDA7XHJcbiAgICBpZiAodmFsdWVTdHJpbmcuaW5kZXhPZignLicpID49IDApIHtcclxuICAgICAgcHJlY2lzaW9uID0gdmFsdWVTdHJpbmcubGVuZ3RoIC0gdmFsdWVTdHJpbmcuaW5kZXhPZignLicpIC0gMTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcmVjaXNpb247XHJcbiAgfVxyXG5cclxuICBnZXRNYXhQcmVjaXNpb24oY3VycmVudFZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJhdGlvOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKGlzTm90TmlsKHRoaXMucHJlY2lzaW9uKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcmVjaXNpb247XHJcbiAgICB9XHJcbiAgICBjb25zdCByYXRpb1ByZWNpc2lvbiA9IHRoaXMuZ2V0UHJlY2lzaW9uKHJhdGlvKTtcclxuICAgIGNvbnN0IHN0ZXBQcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbih0aGlzLmNtYWNzU3RlcCk7XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWVQcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbihjdXJyZW50VmFsdWUgYXMgbnVtYmVyKTtcclxuICAgIGlmICghY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHJldHVybiByYXRpb1ByZWNpc2lvbiArIHN0ZXBQcmVjaXNpb247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoY3VycmVudFZhbHVlUHJlY2lzaW9uLCByYXRpb1ByZWNpc2lvbiArIHN0ZXBQcmVjaXNpb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJlY2lzaW9uRmFjdG9yKGN1cnJlbnRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyLCByYXRpbzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHByZWNpc2lvbiA9IHRoaXMuZ2V0TWF4UHJlY2lzaW9uKGN1cnJlbnRWYWx1ZSwgcmF0aW8pO1xyXG4gICAgcmV0dXJuIE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xyXG4gIH1cclxuXHJcbiAgdXBTdGVwKHZhbDogc3RyaW5nIHwgbnVtYmVyLCByYXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBwcmVjaXNpb25GYWN0b3IgPSB0aGlzLmdldFByZWNpc2lvbkZhY3Rvcih2YWwsIHJhdCk7XHJcbiAgICBjb25zdCBwcmVjaXNpb24gPSBNYXRoLmFicyh0aGlzLmdldE1heFByZWNpc2lvbih2YWwsIHJhdCkpO1xyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xyXG4gICAgICByZXN1bHQgPSAoKHByZWNpc2lvbkZhY3RvciAqIHZhbCArIHByZWNpc2lvbkZhY3RvciAqIHRoaXMuY21hY3NTdGVwICogcmF0KSAvIHByZWNpc2lvbkZhY3RvcikudG9GaXhlZChwcmVjaXNpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5taW4gPT09IC1JbmZpbml0eSA/IHRoaXMuY21hY3NTdGVwIDogdGhpcy5taW47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b051bWJlcihyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgZG93blN0ZXAodmFsOiBzdHJpbmcgfCBudW1iZXIsIHJhdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHByZWNpc2lvbkZhY3RvciA9IHRoaXMuZ2V0UHJlY2lzaW9uRmFjdG9yKHZhbCwgcmF0KTtcclxuICAgIGNvbnN0IHByZWNpc2lvbiA9IE1hdGguYWJzKHRoaXMuZ2V0TWF4UHJlY2lzaW9uKHZhbCwgcmF0KSk7XHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJlc3VsdCA9ICgocHJlY2lzaW9uRmFjdG9yICogdmFsIC0gcHJlY2lzaW9uRmFjdG9yICogdGhpcy5jbWFjc1N0ZXAgKiByYXQpIC8gcHJlY2lzaW9uRmFjdG9yKS50b0ZpeGVkKHByZWNpc2lvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLm1pbiA9PT0gLUluZmluaXR5ID8gLXRoaXMuY21hY3NTdGVwIDogdGhpcy5taW47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b051bWJlcihyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgc3RlcCh0eXBlOiBzdHJpbmcsIGU6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50LCByYXRpbzogbnVtYmVyID0gMSk6IHZvaWQge1xyXG4gICAgdGhpcy5zdG9wKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbGlkVmFsdWUodGhpcy5hY3R1YWxWYWx1ZSkgfHwgMDtcclxuICAgIGxldCB2YWwgPSAwO1xyXG4gICAgaWYgKHR5cGUgPT09ICd1cCcpIHtcclxuICAgICAgdmFsID0gdGhpcy51cFN0ZXAodmFsdWUsIHJhdGlvKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Rvd24nKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMuZG93blN0ZXAodmFsdWUsIHJhdGlvKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG91dE9mUmFuZ2UgPSB2YWwgPiB0aGlzLm1heCB8fCB2YWwgPCB0aGlzLm1pbjtcclxuICAgIGlmICh2YWwgPiB0aGlzLm1heCkge1xyXG4gICAgICB2YWwgPSB0aGlzLm1heDtcclxuICAgIH0gZWxzZSBpZiAodmFsIDwgdGhpcy5taW4pIHtcclxuICAgICAgdmFsID0gdGhpcy5taW47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbCwgdHJ1ZSk7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICBpZiAob3V0T2ZSYW5nZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmF1dG9TdGVwVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXNbdHlwZV0oZSwgcmF0aW8sIHRydWUpO1xyXG4gICAgfSwgNjAwKTtcclxuICB9XHJcblxyXG4gIHN0b3AoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvU3RlcFRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmF1dG9TdGVwVGltZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IG51bWJlciwgZW1pdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGVtaXQgJiYgYCR7dGhpcy52YWx1ZX1gICE9PSBgJHt2YWx1ZX1gKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5hY3R1YWxWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlLmVtaXQoTnVtYmVyKHRoaXMuYWN0dWFsVmFsdWUpKTtcclxuICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IGlzTm90TmlsKHRoaXMuZm9ybWF0dGVyKHRoaXMudmFsdWUpKSA/IHRoaXMuZm9ybWF0dGVyKHRoaXMudmFsdWUpIDogJyc7XHJcbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IGRpc3BsYXlWYWx1ZTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBkaXNwbGF5VmFsdWU7XHJcbiAgICB0aGlzLmRpc2FibGVkVXAgPSB0aGlzLmRpc2FibGVkRG93biA9IGZhbHNlO1xyXG4gICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICAgIGlmICh2YWwgPj0gdGhpcy5tYXgpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkVXAgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWwgPD0gdGhpcy5taW4pIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkRG93biA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cclxuICAgIGlmIChlLmNvZGUgPT09ICdBcnJvd1VwJyB8fCBlLmtleUNvZGUgPT09IFVQX0FSUk9XKSB7XHJcbiAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5nZXRSYXRpbyhlKTtcclxuICAgICAgdGhpcy51cChlLCByYXRpbyk7XHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXHJcbiAgICB9IGVsc2UgaWYgKGUuY29kZSA9PT0gJ0Fycm93RG93bicgfHwgZS5rZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XHJcbiAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5nZXRSYXRpbyhlKTtcclxuICAgICAgdGhpcy5kb3duKGUsIHJhdGlvKTtcclxuICAgICAgdGhpcy5zdG9wKCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICB0aGlzLnNldFZhbGlkYXRlVmFsdWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5VXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3AoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5pbnB1dEVsZW1lbnQsICdrZXlib2FyZCcpO1xyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtaW5wdXQtbnVtYmVyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKS5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xyXG4gICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XHJcbiAgICAgICAgdGhpcy5vbkJsdXIoKTtcclxuICAgICAgICB0aGlzLmNtYWNzQmx1ci5lbWl0KCk7XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9uRm9jdXMoKTtcclxuICAgICAgICB0aGlzLmNtYWNzRm9jdXMuZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuZm9ybWF0dGVyKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsaWRWYWx1ZSh0aGlzLmFjdHVhbFZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnRSZWYpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1oYW5kbGVyLXdyYXBcIj5cclxuICA8c3BhbiB1bnNlbGVjdGFibGU9XCJ1bnNlbGVjdGFibGVcIlxyXG4gICAgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXIgYW50LWlucHV0LW51bWJlci1oYW5kbGVyLXVwXCJcclxuICAgIChtb3VzZWRvd24pPVwidXAoJGV2ZW50KVwiXHJcbiAgICAobW91c2V1cCk9XCJzdG9wKClcIlxyXG4gICAgKG1vdXNlbGVhdmUpPVwic3RvcCgpXCJcclxuICAgIFtjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXItdXAtZGlzYWJsZWRdPVwiZGlzYWJsZWRVcFwiPlxyXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJjYXJldC11cFwiIGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1oYW5kbGVyLXVwLWlubmVyXCI+PC9pPlxyXG4gIDwvc3Bhbj5cclxuICA8c3BhbiB1bnNlbGVjdGFibGU9XCJ1bnNlbGVjdGFibGVcIlxyXG4gICAgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXIgYW50LWlucHV0LW51bWJlci1oYW5kbGVyLWRvd25cIlxyXG4gICAgKG1vdXNlZG93bik9XCJkb3duKCRldmVudClcIlxyXG4gICAgKG1vdXNldXApPVwic3RvcCgpXCJcclxuICAgIChtb3VzZWxlYXZlKT1cInN0b3AoKVwiXHJcbiAgICBbY2xhc3MuYW50LWlucHV0LW51bWJlci1oYW5kbGVyLWRvd24tZGlzYWJsZWRdPVwiZGlzYWJsZWREb3duXCI+XHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cImNhcmV0LWRvd25cIiBjbGFzcz1cImFudC1pbnB1dC1udW1iZXItaGFuZGxlci1kb3duLWlubmVyXCI+PC9pPlxyXG4gIDwvc3Bhbj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWlucHV0LXdyYXBcIj5cclxuICA8aW5wdXQgI2lucHV0RWxlbWVudFxyXG4gICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuICAgIGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1pbnB1dFwiXHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgW2F0dHIubWluXT1cIm1pblwiXHJcbiAgICBbYXR0ci5tYXhdPVwibWF4XCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZUhvbGRlclwiXHJcbiAgICBbYXR0ci5zdGVwXT1cInN0ZXBcIlxyXG4gICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxyXG4gICAgKGtleXVwKT1cIm9uS2V5VXAoKVwiXHJcbiAgICBbbmdNb2RlbF09XCJkaXNwbGF5VmFsdWVcIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQpXCIvPlxyXG48L2Rpdj5cclxuIl19