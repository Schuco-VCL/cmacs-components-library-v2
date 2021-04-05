import { __decorate } from "tslib";
import { DOWN_ARROW, ENTER, UP_ARROW } from '@angular/cdk/keycodes';
import { forwardRef, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "ng-zorro-antd/core/transition-patch";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "@angular/forms";
const _c0 = ["inputElement"];
export class CmacsInputNumberComponent {
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
    updateAutoFocus() {
        if (this.autoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    }
    onModelChange(value) {
        this.actualValue = this.parser(value
            .trim()
            .replace(/。/g, '.')
        //.replace(/[^\w\.-]+/g, '')
        );
        //this.inputElement.nativeElement.value = this.actualValue;
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
}
CmacsInputNumberComponent.ɵfac = function CmacsInputNumberComponent_Factory(t) { return new (t || CmacsInputNumberComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.FocusMonitor)); };
CmacsInputNumberComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsInputNumberComponent, selectors: [["cmacs-input-number"]], viewQuery: function CmacsInputNumberComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, hostVars: 8, hostBindings: function CmacsInputNumberComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-input-number-focused", ctx.isFocused)("ant-input-number-lg", ctx.size === "large")("ant-input-number-sm", ctx.size === "small")("ant-input-number-disabled", ctx.disabled);
    } }, inputs: { size: "size", min: "min", max: "max", parser: "parser", precision: "precision", placeHolder: "placeHolder", cmacsStep: "cmacsStep", disabled: "disabled", autoFocus: "autoFocus", formatter: "formatter" }, outputs: { cmacsBlur: "cmacsBlur", cmacsFocus: "cmacsFocus" }, exportAs: ["cmacsInputNumber"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsInputNumberComponent),
                multi: true
            }
        ]), i0.ɵɵNgOnChangesFeature], decls: 8, vars: 10, consts: [[1, "ant-input-number-handler-wrap"], ["unselectable", "unselectable", 1, "ant-input-number-handler", "ant-input-number-handler-up", 3, "mousedown", "mouseup", "mouseleave"], ["nz-icon", "", "nzType", "caret-up", 1, "ant-input-number-handler-up-inner"], ["unselectable", "unselectable", 1, "ant-input-number-handler", "ant-input-number-handler-down", 3, "mousedown", "mouseup", "mouseleave"], ["nz-icon", "", "nzType", "caret-down", 1, "ant-input-number-handler-down-inner"], [1, "ant-input-number-input-wrap"], ["autocomplete", "off", 1, "ant-input-number-input", 3, "disabled", "placeholder", "ngModel", "keydown", "keyup", "ngModelChange"], ["inputElement", ""]], template: function CmacsInputNumberComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵlistener("mousedown", function CmacsInputNumberComponent_Template_span_mousedown_1_listener($event) { return ctx.up($event); })("mouseup", function CmacsInputNumberComponent_Template_span_mouseup_1_listener() { return ctx.stop(); })("mouseleave", function CmacsInputNumberComponent_Template_span_mouseleave_1_listener() { return ctx.stop(); });
        i0.ɵɵelement(2, "i", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵlistener("mousedown", function CmacsInputNumberComponent_Template_span_mousedown_3_listener($event) { return ctx.down($event); })("mouseup", function CmacsInputNumberComponent_Template_span_mouseup_3_listener() { return ctx.stop(); })("mouseleave", function CmacsInputNumberComponent_Template_span_mouseleave_3_listener() { return ctx.stop(); });
        i0.ɵɵelement(4, "i", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "input", 6, 7);
        i0.ɵɵlistener("keydown", function CmacsInputNumberComponent_Template_input_keydown_6_listener($event) { return ctx.onKeyDown($event); })("keyup", function CmacsInputNumberComponent_Template_input_keyup_6_listener() { return ctx.onKeyUp(); })("ngModelChange", function CmacsInputNumberComponent_Template_input_ngModelChange_6_listener($event) { return ctx.onModelChange($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("ant-input-number-handler-up-disabled", ctx.disabledUp);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("ant-input-number-handler-down-disabled", ctx.disabledDown);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", ctx.disabled)("placeholder", ctx.placeHolder)("ngModel", ctx.displayValue);
        i0.ɵɵattribute("min", ctx.min)("max", ctx.max)("step", ctx.step);
    } }, directives: [i2.ɵNzTransitionPatchDirective, i3.NzIconDirective, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel], styles: [".ant-input-number-handler-wrap{opacity:1!important;border:none}.ant-input-number-handler-down{border:none}.ant-input-number-handler-down-inner,.ant-input-number-handler-up-inner{color:#bec4cd;font-size:12px!important}.ant-input-number:not(.cmacs-datetime-picker-input-number){height:34px;border:1px solid #dee0e5;color:#acb3bf;box-shadow:none;outline:none;border-radius:3px;width:100%;overflow:hidden}.ant-input-number:focus-within{color:#656c79;border:1px solid #dee0e5;box-shadow:none}.ant-input-number:hover{border:1px solid #bec4cd;box-shadow:none}.ant-input-number:hover .ant-input-number-handler-down-inner svg,.ant-input-number:hover .ant-input-number-handler-up-inner svg{color:#656c79;box-shadow:none}.ant-input-number:focus-within .ant-input-number-handler-down-inner svg,.ant-input-number:focus-within .ant-input-number-handler-up-inner svg{color:#656c79;box-shadow:none}.ant-input-number-handler-down-inner svg:hover,.ant-input-number-handler-up-inner svg:hover{color:#2a7cff!important}.ant-input-number-disabled{background-color:#f6f7fb!important;border-color:#dee0e5;cursor:not-allowed}.ant-input-number-disabled:hover{border-color:#dee0e5}.ant-input-number-disabled .ant-input-number-handler-wrap{display:inherit;background-color:#f6f7fb}.ant-input-number-handler-wrap:hover .ant-input-number-handler{height:50%}.ant-input-number-handler-down:hover,.ant-input-number-handler-up:hover{height:50%!important}.ant-input-number-disabled .ant-input-number-handler-wrap .ant-input-number-handler-down svg,.ant-input-number-disabled .ant-input-number-handler-wrap .ant-input-number-handler-up svg{color:#bec4cd!important}.ant-input-number-disabled .ant-input-number-handler-wrap .ant-input-number-handler:hover{cursor:not-allowed!important}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsInputNumberComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsInputNumberComponent.prototype, "autoFocus", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsInputNumberComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-input-number',
                exportAs: 'cmacsInputNumber',
                templateUrl: './cmacs-input-number.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsInputNumberComponent),
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line: use-host-property-decorator
                host: {
                    '[class.ant-input-number-focused]': 'isFocused',
                    '[class.ant-input-number-lg]': `size === 'large'`,
                    '[class.ant-input-number-sm]': `size === 'small'`,
                    '[class.ant-input-number-disabled]': 'disabled'
                },
                styleUrls: ['./cmacs-input-number.component.css'],
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i1.FocusMonitor }]; }, { cmacsBlur: [{
            type: Output
        }], cmacsFocus: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1pbnB1dC1udW1iZXIvY21hY3MtaW5wdXQtbnVtYmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1pbnB1dC1udW1iZXIvY21hY3MtaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHekUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztBQXlCakUsTUFBTSxPQUFPLHlCQUF5QjtJQTZScEMsWUFDVSxVQUFzQixFQUN0QixRQUFtQixFQUNuQixHQUFzQixFQUN0QixZQUEwQjtRQUgxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUE1UnBDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixpQkFBWSxHQUFHLEtBQUssQ0FB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QkFDeEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUN2Qyx3REFBd0Q7Z0JBQ3RELElBQUksRUFBRTtvQkFDSixrQ0FBa0MsRUFBRSxXQUFXO29CQUMvQyw2QkFBNkIsRUFBRSxrQkFBa0I7b0JBQ2pELDZCQUE2QixFQUFFLGtCQUFrQjtvQkFDakQsbUNBQW1DLEVBQUUsVUFBVTtpQkFDaEQ7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7Z0pBV29CLFNBQVM7a0JBQTNCLE1BQU07WUFDWSxVQUFVO2tCQUE1QixNQUFNO1lBQ3NDLFlBQVk7a0JBQXhELFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNsQyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxHQUFHO2tCQUFYLEtBQUs7WUFDRyxHQUFHO2tCQUFYLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1pbnB1dC1udW1iZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NJbnB1dE51bWJlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWlucHV0LW51bWJlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWZvY3VzZWRdJzogJ2lzRm9jdXNlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1udW1iZXItbGddJzogYHNpemUgPT09ICdsYXJnZSdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLXNtXSc6IGBzaXplID09PSAnc21hbGwnYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnXHJcbiAgfSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1pbnB1dC1udW1iZXIuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NJbnB1dE51bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGF1dG9TdGVwVGltZXI6IG51bWJlcjtcclxuICBwcml2YXRlIGFjdHVhbFZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIGRpc3BsYXlWYWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gIGRpc2FibGVkVXAgPSBmYWxzZTtcclxuICBkaXNhYmxlZERvd24gPSBmYWxzZTtcclxuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NGb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBtaW4gPSAtSW5maW5pdHk7XHJcbiAgQElucHV0KCkgbWF4ID0gSW5maW5pdHk7XHJcbiAgQElucHV0KCkgcGFyc2VyID0gKHZhbHVlOiBhbnkpID0+IHZhbHVlOyBcclxuICBASW5wdXQoKSBwcmVjaXNpb246IG51bWJlcjtcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIGNtYWNzU3RlcCA9IDE7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9Gb2N1cyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZyB8IG51bWJlciA9IHZhbHVlID0+IHZhbHVlO1xyXG5cclxuICBbcHJvcGVydHk6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuXHJcbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk1vZGVsQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0dWFsVmFsdWUgPSB0aGlzLnBhcnNlcihcclxuICAgICAgdmFsdWVcclxuICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgLnJlcGxhY2UoL+OAgi9nLCAnLicpXHJcbiAgICAgICAgLy8ucmVwbGFjZSgvW15cXHdcXC4tXSsvZywgJycpXHJcbiAgICApO1xyXG4gICAgLy90aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5hY3R1YWxWYWx1ZTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRWYWxpZFZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IHZhbCA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbCA9PT0gJycpIHtcclxuICAgICAgdmFsID0gJyc7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzTm90Q29tcGxldGVOdW1iZXIodmFsKSkge1xyXG4gICAgICB2YWwgPSB0aGlzLmdldFZhbGlkVmFsdWUodmFsKSBhcyBzdHJpbmc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWwgPSB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIodmFsKTtcclxuICB9XHJcblxyXG4gIC8vICcxLicgJzF4JyAneHgnICcnID0+IGFyZSBub3QgY29tcGxldGUgbnVtYmVyc1xyXG4gIGlzTm90Q29tcGxldGVOdW1iZXIobnVtOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGlzTmFOKG51bSBhcyBudW1iZXIpIHx8XHJcbiAgICAgIG51bSA9PT0gJycgfHxcclxuICAgICAgbnVtID09PSBudWxsIHx8XHJcbiAgICAgICEhKG51bSAmJiBudW0udG9TdHJpbmcoKS5pbmRleE9mKCcuJykgPT09IG51bS50b1N0cmluZygpLmxlbmd0aCAtIDEpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsaWRWYWx1ZSh2YWx1ZT86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICBsZXQgdmFsID0gcGFyc2VGbG9hdCh2YWx1ZSBhcyBzdHJpbmcpO1xyXG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbCA8IHRoaXMubWluKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubWluO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbCA+IHRoaXMubWF4KSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubWF4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcblxyXG4gIHRvTnVtYmVyKG51bTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLmlzTm90Q29tcGxldGVOdW1iZXIobnVtKSkge1xyXG4gICAgICByZXR1cm4gbnVtIGFzIG51bWJlcjtcclxuICAgIH1cclxuICAgIGlmIChpc05vdE5pbCh0aGlzLnByZWNpc2lvbikpIHtcclxuICAgICAgcmV0dXJuIE51bWJlcihOdW1iZXIobnVtKS50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTnVtYmVyKG51bSk7XHJcbiAgfVxyXG5cclxuICBzZXRWYWxpZGF0ZVZhbHVlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMuYWN0dWFsVmFsdWUpO1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgYCR7dGhpcy52YWx1ZX1gICE9PSBgJHt2YWx1ZX1gKTtcclxuICB9XHJcblxyXG4gIG9uQmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNldFZhbGlkYXRlVmFsdWUoKTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXRSYXRpbyhlOiBLZXlib2FyZEV2ZW50KTogbnVtYmVyIHtcclxuICAgIGxldCByYXRpbyA9IDE7XHJcbiAgICBpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkge1xyXG4gICAgICByYXRpbyA9IDAuMTtcclxuICAgIH0gZWxzZSBpZiAoZS5zaGlmdEtleSkge1xyXG4gICAgICByYXRpbyA9IDEwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJhdGlvO1xyXG4gIH1cclxuXHJcbiAgZG93bihlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW8/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGVwKCdkb3duJywgZSwgcmF0aW8pO1xyXG4gIH1cclxuXHJcbiAgdXAoZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RlcCgndXAnLCBlLCByYXRpbyk7XHJcbiAgfVxyXG5cclxuICBnZXRQcmVjaXNpb24odmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAodmFsdWVTdHJpbmcuaW5kZXhPZignZS0nKSA+PSAwKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZVN0cmluZy5zbGljZSh2YWx1ZVN0cmluZy5pbmRleE9mKCdlLScpICsgMiksIDEwKTtcclxuICAgIH1cclxuICAgIGxldCBwcmVjaXNpb24gPSAwO1xyXG4gICAgaWYgKHZhbHVlU3RyaW5nLmluZGV4T2YoJy4nKSA+PSAwKSB7XHJcbiAgICAgIHByZWNpc2lvbiA9IHZhbHVlU3RyaW5nLmxlbmd0aCAtIHZhbHVlU3RyaW5nLmluZGV4T2YoJy4nKSAtIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJlY2lzaW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWF4UHJlY2lzaW9uKGN1cnJlbnRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyLCByYXRpbzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmIChpc05vdE5pbCh0aGlzLnByZWNpc2lvbikpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJlY2lzaW9uO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmF0aW9QcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbihyYXRpbyk7XHJcbiAgICBjb25zdCBzdGVwUHJlY2lzaW9uID0gdGhpcy5nZXRQcmVjaXNpb24odGhpcy5jbWFjc1N0ZXApO1xyXG4gICAgY29uc3QgY3VycmVudFZhbHVlUHJlY2lzaW9uID0gdGhpcy5nZXRQcmVjaXNpb24oY3VycmVudFZhbHVlIGFzIG51bWJlcik7XHJcbiAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICByZXR1cm4gcmF0aW9QcmVjaXNpb24gKyBzdGVwUHJlY2lzaW9uO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGgubWF4KGN1cnJlbnRWYWx1ZVByZWNpc2lvbiwgcmF0aW9QcmVjaXNpb24gKyBzdGVwUHJlY2lzaW9uKTtcclxuICB9XHJcblxyXG4gIGdldFByZWNpc2lvbkZhY3RvcihjdXJyZW50VmFsdWU6IHN0cmluZyB8IG51bWJlciwgcmF0aW86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBwcmVjaXNpb24gPSB0aGlzLmdldE1heFByZWNpc2lvbihjdXJyZW50VmFsdWUsIHJhdGlvKTtcclxuICAgIHJldHVybiBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcclxuICB9XHJcblxyXG4gIHVwU3RlcCh2YWw6IHN0cmluZyB8IG51bWJlciwgcmF0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgcHJlY2lzaW9uRmFjdG9yID0gdGhpcy5nZXRQcmVjaXNpb25GYWN0b3IodmFsLCByYXQpO1xyXG4gICAgY29uc3QgcHJlY2lzaW9uID0gTWF0aC5hYnModGhpcy5nZXRNYXhQcmVjaXNpb24odmFsLCByYXQpKTtcclxuICAgIGxldCByZXN1bHQ7XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgcmVzdWx0ID0gKChwcmVjaXNpb25GYWN0b3IgKiB2YWwgKyBwcmVjaXNpb25GYWN0b3IgKiB0aGlzLmNtYWNzU3RlcCAqIHJhdCkgLyBwcmVjaXNpb25GYWN0b3IpLnRvRml4ZWQocHJlY2lzaW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMubWluID09PSAtSW5maW5pdHkgPyB0aGlzLmNtYWNzU3RlcCA6IHRoaXMubWluO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIGRvd25TdGVwKHZhbDogc3RyaW5nIHwgbnVtYmVyLCByYXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBwcmVjaXNpb25GYWN0b3IgPSB0aGlzLmdldFByZWNpc2lvbkZhY3Rvcih2YWwsIHJhdCk7XHJcbiAgICBjb25zdCBwcmVjaXNpb24gPSBNYXRoLmFicyh0aGlzLmdldE1heFByZWNpc2lvbih2YWwsIHJhdCkpO1xyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xyXG4gICAgICByZXN1bHQgPSAoKHByZWNpc2lvbkZhY3RvciAqIHZhbCAtIHByZWNpc2lvbkZhY3RvciAqIHRoaXMuY21hY3NTdGVwICogcmF0KSAvIHByZWNpc2lvbkZhY3RvcikudG9GaXhlZChwcmVjaXNpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5taW4gPT09IC1JbmZpbml0eSA/IC10aGlzLmNtYWNzU3RlcCA6IHRoaXMubWluO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIHN0ZXAodHlwZTogc3RyaW5nLCBlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW86IG51bWJlciA9IDEpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMuYWN0dWFsVmFsdWUpIHx8IDA7XHJcbiAgICBsZXQgdmFsID0gMDtcclxuICAgIGlmICh0eXBlID09PSAndXAnKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMudXBTdGVwKHZhbHVlLCByYXRpbyk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkb3duJykge1xyXG4gICAgICB2YWwgPSB0aGlzLmRvd25TdGVwKHZhbHVlLCByYXRpbyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvdXRPZlJhbmdlID0gdmFsID4gdGhpcy5tYXggfHwgdmFsIDwgdGhpcy5taW47XHJcbiAgICBpZiAodmFsID4gdGhpcy5tYXgpIHtcclxuICAgICAgdmFsID0gdGhpcy5tYXg7XHJcbiAgICB9IGVsc2UgaWYgKHZhbCA8IHRoaXMubWluKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubWluO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWwsIHRydWUpO1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgaWYgKG91dE9mUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hdXRvU3RlcFRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzW3R5cGVdKGUsIHJhdGlvLCB0cnVlKTtcclxuICAgIH0sIDYwMCk7XHJcbiAgfVxyXG5cclxuICBzdG9wKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYXV0b1N0ZXBUaW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hdXRvU3RlcFRpbWVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlOiBudW1iZXIsIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChlbWl0ICYmIGAke3RoaXMudmFsdWV9YCAhPT0gYCR7dmFsdWV9YCkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuYWN0dWFsVmFsdWUgPSB2YWx1ZTtcclxuICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IGlzTm90TmlsKHRoaXMuZm9ybWF0dGVyKHRoaXMudmFsdWUpKSA/IHRoaXMuZm9ybWF0dGVyKHRoaXMudmFsdWUpIDogJyc7XHJcbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IGRpc3BsYXlWYWx1ZTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBkaXNwbGF5VmFsdWU7XHJcbiAgICB0aGlzLmRpc2FibGVkVXAgPSB0aGlzLmRpc2FibGVkRG93biA9IGZhbHNlO1xyXG4gICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICAgIGlmICh2YWwgPj0gdGhpcy5tYXgpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkVXAgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWwgPD0gdGhpcy5taW4pIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkRG93biA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cclxuICAgIGlmIChlLmNvZGUgPT09ICdBcnJvd1VwJyB8fCBlLmtleUNvZGUgPT09IFVQX0FSUk9XKSB7XHJcbiAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5nZXRSYXRpbyhlKTtcclxuICAgICAgdGhpcy51cChlLCByYXRpbyk7XHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXHJcbiAgICB9IGVsc2UgaWYgKGUuY29kZSA9PT0gJ0Fycm93RG93bicgfHwgZS5rZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XHJcbiAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5nZXRSYXRpbyhlKTtcclxuICAgICAgdGhpcy5kb3duKGUsIHJhdGlvKTtcclxuICAgICAgdGhpcy5zdG9wKCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICB0aGlzLnNldFZhbGlkYXRlVmFsdWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5VXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3AoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5pbnB1dEVsZW1lbnQsICdrZXlib2FyZCcpO1xyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtaW5wdXQtbnVtYmVyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKS5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xyXG4gICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XHJcbiAgICAgICAgdGhpcy5vbkJsdXIoKTtcclxuICAgICAgICB0aGlzLmNtYWNzQmx1ci5lbWl0KCk7XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9uRm9jdXMoKTtcclxuICAgICAgICB0aGlzLmNtYWNzRm9jdXMuZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuZm9ybWF0dGVyKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsaWRWYWx1ZSh0aGlzLmFjdHVhbFZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnRSZWYpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1oYW5kbGVyLXdyYXBcIj5cclxuICA8c3BhbiB1bnNlbGVjdGFibGU9XCJ1bnNlbGVjdGFibGVcIlxyXG4gICAgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXIgYW50LWlucHV0LW51bWJlci1oYW5kbGVyLXVwXCJcclxuICAgIChtb3VzZWRvd24pPVwidXAoJGV2ZW50KVwiXHJcbiAgICAobW91c2V1cCk9XCJzdG9wKClcIlxyXG4gICAgKG1vdXNlbGVhdmUpPVwic3RvcCgpXCJcclxuICAgIFtjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXItdXAtZGlzYWJsZWRdPVwiZGlzYWJsZWRVcFwiPlxyXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJjYXJldC11cFwiIGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1oYW5kbGVyLXVwLWlubmVyXCI+PC9pPlxyXG4gIDwvc3Bhbj5cclxuICA8c3BhbiB1bnNlbGVjdGFibGU9XCJ1bnNlbGVjdGFibGVcIlxyXG4gICAgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXIgYW50LWlucHV0LW51bWJlci1oYW5kbGVyLWRvd25cIlxyXG4gICAgKG1vdXNlZG93bik9XCJkb3duKCRldmVudClcIlxyXG4gICAgKG1vdXNldXApPVwic3RvcCgpXCJcclxuICAgIChtb3VzZWxlYXZlKT1cInN0b3AoKVwiXHJcbiAgICBbY2xhc3MuYW50LWlucHV0LW51bWJlci1oYW5kbGVyLWRvd24tZGlzYWJsZWRdPVwiZGlzYWJsZWREb3duXCI+XHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cImNhcmV0LWRvd25cIiBjbGFzcz1cImFudC1pbnB1dC1udW1iZXItaGFuZGxlci1kb3duLWlubmVyXCI+PC9pPlxyXG4gIDwvc3Bhbj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWlucHV0LXdyYXBcIj5cclxuICA8aW5wdXQgI2lucHV0RWxlbWVudFxyXG4gICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuICAgIGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1pbnB1dFwiXHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgW2F0dHIubWluXT1cIm1pblwiXHJcbiAgICBbYXR0ci5tYXhdPVwibWF4XCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZUhvbGRlclwiXHJcbiAgICBbYXR0ci5zdGVwXT1cInN0ZXBcIlxyXG4gICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxyXG4gICAgKGtleXVwKT1cIm9uS2V5VXAoKVwiXHJcbiAgICBbbmdNb2RlbF09XCJkaXNwbGF5VmFsdWVcIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwib25Nb2RlbENoYW5nZSgkZXZlbnQpXCIvPlxyXG48L2Rpdj5cclxuIl19