import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, forwardRef, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "./radio.service";
import * as i4 from "./radio-button.directive";
const _c0 = ["inputElement"];
const _c1 = ["cmacs-radio", ""];
const _c2 = ["*"];
export class CmacsRadioComponent {
    /* tslint:disable-next-line:no-any */
    onHostClick(event) {
        /** prevent label click triggered twice. **/
        event.stopPropagation();
        event.preventDefault();
        if (!this.disabled && !this.isChecked) {
            if (this.nzRadioService) {
                this.nzRadioService.select(this.value);
            }
            if (this.isNgModel) {
                this.isChecked = true;
                this.onChange(true);
            }
        }
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    constructor(elementRef, cdr, focusMonitor, directionality, nzRadioService, nzRadioButtonDirective) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this.nzRadioService = nzRadioService;
        this.nzRadioButtonDirective = nzRadioButtonDirective;
        this.isNgModel = false;
        this.destroy$ = new Subject();
        this.isChecked = false;
        this.name = null;
        this.isRadioButton = !!this.nzRadioButtonDirective;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.value = null;
        this.disabled = false;
        this.autoFocus = false;
        this.dir = 'ltr';
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
        this.cdr.markForCheck();
    }
    writeValue(value) {
        this.isChecked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.isNgModel = true;
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    ngOnInit() {
        if (this.nzRadioService) {
            this.nzRadioService.name$.pipe(takeUntil(this.destroy$)).subscribe(name => {
                this.name = name;
                this.cdr.markForCheck();
            });
            this.nzRadioService.disabled$.pipe(takeUntil(this.destroy$)).subscribe(disabled => {
                this.disabled = disabled;
                this.cdr.markForCheck();
            });
            this.nzRadioService.selected$.pipe(takeUntil(this.destroy$)).subscribe(value => {
                this.isChecked = this.value === value;
                this.cdr.markForCheck();
            });
        }
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
                if (this.nzRadioService) {
                    this.nzRadioService.touch();
                }
            }
        });
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
    static { this.ɵfac = function CmacsRadioComponent_Factory(t) { return new (t || CmacsRadioComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i3.NzRadioService, 8), i0.ɵɵdirectiveInject(i4.CmacsRadioButtonDirective, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsRadioComponent, selectors: [["", "cmacs-radio", ""], ["", "cmacs-radio-button", ""]], viewQuery: function CmacsRadioComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        } }, hostVars: 16, hostBindings: function CmacsRadioComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function CmacsRadioComponent_click_HostBindingHandler($event) { return ctx.onHostClick($event); });
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-radio-wrapper", !ctx.isRadioButton)("ant-radio-button-wrapper", ctx.isRadioButton)("ant-radio-wrapper-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-button-wrapper-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-wrapper-disabled", ctx.disabled && !ctx.isRadioButton)("ant-radio-button-wrapper-disabled", ctx.disabled && ctx.isRadioButton)("ant-radio-wrapper-rtl", !ctx.isRadioButton && ctx.dir === "rtl")("ant-radio-button-wrapper-rtl", ctx.isRadioButton && ctx.dir === "rtl");
        } }, inputs: { value: "value", disabled: "disabled", autoFocus: "autoFocus" }, exportAs: ["cmacsRadio"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => CmacsRadioComponent),
                    multi: true
                }
            ])], attrs: _c1, ngContentSelectors: _c2, decls: 6, vars: 24, consts: [["type", "radio", 3, "disabled", "checked"], ["inputElement", ""]], template: function CmacsRadioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelement(1, "input", 0, 1)(3, "span");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-radio", !ctx.isRadioButton)("ant-radio-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-disabled", ctx.disabled && !ctx.isRadioButton)("ant-radio-button", ctx.isRadioButton)("ant-radio-button-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-button-disabled", ctx.disabled && ctx.isRadioButton);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("ant-radio-input", !ctx.isRadioButton)("ant-radio-button-input", ctx.isRadioButton);
            i0.ɵɵproperty("disabled", ctx.disabled)("checked", ctx.isChecked);
            i0.ɵɵattribute("autofocus", ctx.autoFocus ? "autofocus" : null)("name", ctx.name);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("ant-radio-inner", !ctx.isRadioButton)("ant-radio-button-inner", ctx.isRadioButton);
        } }, styles: [".ant-radio-inner:after{transform:scale(.7)!important;overflow:visible;background-color:#2a7cff}.ant-radio-checked .ant-radio-inner,.ant-radio-checked .ant-radio-inner:focus{border-color:#dee0e5}.ant-radio-wrapper:hover .ant-radio,.ant-radio:hover .ant-radio-inner,.ant-radio-input:focus+.ant-radio-inner{border-color:#bec4cd}.ant-radio-input:focus+.ant-radio-inner{box-shadow:0 0 0 3px #bec4cd14}.ant-radio-checked:hover .ant-radio-inner{border-color:#2a7cff}.ant-radio-wrapper{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:#97a0ae}.ant-radio-wrapper.ant-radio-wrapper-disabled{cursor:default}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsRadioComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsRadioComponent.prototype, "autoFocus", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsRadioComponent, [{
        type: Component,
        args: [{ selector: '[cmacs-radio],[cmacs-radio-button]', exportAs: 'cmacsRadio', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsRadioComponent),
                        multi: true
                    }
                ], host: {
                    '[class.ant-radio-wrapper]': '!isRadioButton',
                    '[class.ant-radio-button-wrapper]': 'isRadioButton',
                    '[class.ant-radio-wrapper-checked]': 'isChecked && !isRadioButton',
                    '[class.ant-radio-button-wrapper-checked]': 'isChecked && isRadioButton',
                    '[class.ant-radio-wrapper-disabled]': 'disabled && !isRadioButton',
                    '[class.ant-radio-button-wrapper-disabled]': 'disabled && isRadioButton',
                    '[class.ant-radio-wrapper-rtl]': `!isRadioButton && dir === 'rtl'`,
                    '[class.ant-radio-button-wrapper-rtl]': `isRadioButton && dir === 'rtl'`,
                    '(click)': 'onHostClick($event)'
                }, template: "<span\r\n      [class.ant-radio]=\"!isRadioButton\"\n      [class.ant-radio-checked]=\"isChecked && !isRadioButton\"\n      [class.ant-radio-disabled]=\"disabled && !isRadioButton\"\n      [class.ant-radio-button]=\"isRadioButton\"\n      [class.ant-radio-button-checked]=\"isChecked && isRadioButton\"\n      [class.ant-radio-button-disabled]=\"disabled && isRadioButton\">\r\n  <input\r\n        #inputElement\r\n        type=\"radio\"\r\n        [attr.autofocus]=\"autoFocus ? 'autofocus' : null\"\n        [class.ant-radio-input]=\"!isRadioButton\"\n        [class.ant-radio-button-input]=\"isRadioButton\"\n        [disabled]=\"disabled\"\n        [checked]=\"isChecked\"\n        [attr.name]=\"name\">\r\n  <span [class.ant-radio-inner]=\"!isRadioButton\" [class.ant-radio-button-inner]=\"isRadioButton\"></span>\r\n</span>\r\n<span><ng-content></ng-content></span>\r\n", styles: [".ant-radio-inner:after{transform:scale(.7)!important;overflow:visible;background-color:#2a7cff}.ant-radio-checked .ant-radio-inner,.ant-radio-checked .ant-radio-inner:focus{border-color:#dee0e5}.ant-radio-wrapper:hover .ant-radio,.ant-radio:hover .ant-radio-inner,.ant-radio-input:focus+.ant-radio-inner{border-color:#bec4cd}.ant-radio-input:focus+.ant-radio-inner{box-shadow:0 0 0 3px #bec4cd14}.ant-radio-checked:hover .ant-radio-inner{border-color:#2a7cff}.ant-radio-wrapper{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:#97a0ae}.ant-radio-wrapper.ant-radio-wrapper-disabled{cursor:default}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.FocusMonitor }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }, { type: i3.NzRadioService, decorators: [{
                type: Optional
            }] }, { type: i4.CmacsRadioButtonDirective, decorators: [{
                type: Optional
            }] }]; }, { inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: false }]
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXJhZGlvL2NtYWNzLXJhZGlvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1yYWRpby9jbWFjcy1yYWRpby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsVUFBVSxFQUNWLEtBQUssRUFHTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7QUFpQzNDLE1BQU0sT0FBTyxtQkFBbUI7SUFlaEMscUNBQXFDO0lBRW5DLFdBQVcsQ0FBQyxLQUFpQjtRQUMzQiw0Q0FBNEM7UUFDNUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDckMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEM7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RSwwQ0FBMEMsRUFBRSw0QkFBNEI7b0JBQ3hFLG9DQUFvQyxFQUFFLDRCQUE0QjtvQkFDbEUsMkNBQTJDLEVBQUUsMkJBQTJCO29CQUN4RSwrQkFBK0IsRUFBRSxpQ0FBaUM7b0JBQ2xFLHNDQUFzQyxFQUFFLGdDQUFnQztvQkFDeEUsU0FBUyxFQUFFLHFCQUFxQjtpQkFDakM7O3NCQThDRSxRQUFROztzQkFDUixRQUFROztzQkFDUixRQUFRO3dCQXJDbUMsWUFBWTtrQkFBekQsU0FBUzttQkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ25DLEtBQUs7a0JBQWIsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLFNBQVM7a0JBQWpDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55LCBPbkNoYW5nZVR5cGUsIE9uVG91Y2hlZFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21hY3NSYWRpb0J1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vcmFkaW8tYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelJhZGlvU2VydmljZSB9IGZyb20gJy4vcmFkaW8uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1yYWRpb10sW2NtYWNzLXJhZGlvLWJ1dHRvbl0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NSYWRpbycsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXJhZGlvLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1yYWRpby5jb21wb25lbnQuY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzUmFkaW9Db21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8td3JhcHBlcl0nOiAnIWlzUmFkaW9CdXR0b24nLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyXSc6ICdpc1JhZGlvQnV0dG9uJyxcbiAgICAnW2NsYXNzLmFudC1yYWRpby13cmFwcGVyLWNoZWNrZWRdJzogJ2lzQ2hlY2tlZCAmJiAhaXNSYWRpb0J1dHRvbicsXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZF0nOiAnaXNDaGVja2VkICYmIGlzUmFkaW9CdXR0b24nLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLXdyYXBwZXItZGlzYWJsZWRdJzogJ2Rpc2FibGVkICYmICFpc1JhZGlvQnV0dG9uJyxcbiAgICAnW2NsYXNzLmFudC1yYWRpby1idXR0b24td3JhcHBlci1kaXNhYmxlZF0nOiAnZGlzYWJsZWQgJiYgaXNSYWRpb0J1dHRvbicsXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8td3JhcHBlci1ydGxdJzogYCFpc1JhZGlvQnV0dG9uICYmIGRpciA9PT0gJ3J0bCdgLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLXJ0bF0nOiBgaXNSYWRpb0J1dHRvbiAmJiBkaXIgPT09ICdydGwnYCxcbiAgICAnKGNsaWNrKSc6ICdvbkhvc3RDbGljaygkZXZlbnQpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBpc05nTW9kZWwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGlzQ2hlY2tlZCA9IGZhbHNlO1xuICBuYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgaXNSYWRpb0J1dHRvbiA9ICEhdGhpcy5uelJhZGlvQnV0dG9uRGlyZWN0aXZlO1xuICBvbkNoYW5nZTogT25DaGFuZ2VUeXBlID0gKCkgPT4geyB9O1xuICBvblRvdWNoZWQ6IE9uVG91Y2hlZFR5cGUgPSAoKSA9PiB7IH07XG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBpbnB1dEVsZW1lbnQ/OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSB2YWx1ZTogTnpTYWZlQW55IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b0ZvY3VzID0gZmFsc2U7XG5cbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG5cclxuICBvbkhvc3RDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8qKiBwcmV2ZW50IGxhYmVsIGNsaWNrIHRyaWdnZXJlZCB0d2ljZS4gKiovXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuaXNDaGVja2VkKSB7XG4gICAgICBpZiAodGhpcy5uelJhZGlvU2VydmljZSkge1xuICAgICAgICB0aGlzLm56UmFkaW9TZXJ2aWNlLnNlbGVjdCh0aGlzLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzTmdNb2RlbCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5pbnB1dEVsZW1lbnQhLCAna2V5Ym9hcmQnKTtcbiAgfVxuXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQhLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbnpSYWRpb1NlcnZpY2U6IE56UmFkaW9TZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbnpSYWRpb0J1dHRvbkRpcmVjdGl2ZTogQ21hY3NSYWRpb0J1dHRvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogT25DaGFuZ2VUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5pc05nTW9kZWwgPSB0cnVlO1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBPblRvdWNoZWRUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56UmFkaW9TZXJ2aWNlKSB7XG4gICAgICB0aGlzLm56UmFkaW9TZXJ2aWNlLm5hbWUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobmFtZSA9PiB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm56UmFkaW9TZXJ2aWNlLmRpc2FibGVkJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGRpc2FibGVkID0+IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5uelJhZGlvU2VydmljZS5zZWxlY3RlZCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gdGhpcy52YWx1ZSA9PT0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKS5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xuICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xuICAgICAgICBpZiAodGhpcy5uelJhZGlvU2VydmljZSkge1xuICAgICAgICAgIHRoaXMubnpSYWRpb1NlcnZpY2UudG91Y2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5lbGVtZW50UmVmKTtcbiAgfVxyXG59XHJcbiIsIjxzcGFuXHJcbiAgICAgIFtjbGFzcy5hbnQtcmFkaW9dPVwiIWlzUmFkaW9CdXR0b25cIlxuICAgICAgW2NsYXNzLmFudC1yYWRpby1jaGVja2VkXT1cImlzQ2hlY2tlZCAmJiAhaXNSYWRpb0J1dHRvblwiXG4gICAgICBbY2xhc3MuYW50LXJhZGlvLWRpc2FibGVkXT1cImRpc2FibGVkICYmICFpc1JhZGlvQnV0dG9uXCJcbiAgICAgIFtjbGFzcy5hbnQtcmFkaW8tYnV0dG9uXT1cImlzUmFkaW9CdXR0b25cIlxuICAgICAgW2NsYXNzLmFudC1yYWRpby1idXR0b24tY2hlY2tlZF09XCJpc0NoZWNrZWQgJiYgaXNSYWRpb0J1dHRvblwiXG4gICAgICBbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi1kaXNhYmxlZF09XCJkaXNhYmxlZCAmJiBpc1JhZGlvQnV0dG9uXCI+XHJcbiAgPGlucHV0XHJcbiAgICAgICAgI2lucHV0RWxlbWVudFxyXG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgW2F0dHIuYXV0b2ZvY3VzXT1cImF1dG9Gb2N1cyA/ICdhdXRvZm9jdXMnIDogbnVsbFwiXG4gICAgICAgIFtjbGFzcy5hbnQtcmFkaW8taW5wdXRdPVwiIWlzUmFkaW9CdXR0b25cIlxuICAgICAgICBbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi1pbnB1dF09XCJpc1JhZGlvQnV0dG9uXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2NoZWNrZWRdPVwiaXNDaGVja2VkXCJcbiAgICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCI+XHJcbiAgPHNwYW4gW2NsYXNzLmFudC1yYWRpby1pbm5lcl09XCIhaXNSYWRpb0J1dHRvblwiIFtjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLWlubmVyXT1cImlzUmFkaW9CdXR0b25cIj48L3NwYW4+XHJcbjwvc3Bhbj5cclxuPHNwYW4+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cclxuIl19