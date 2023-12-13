import { Directive, Host, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./date-picker.component";
// tslint:disable-next-line:directive-class-suffix
export class CmacsMonthPickerComponent {
    constructor(datePicker) {
        this.datePicker = datePicker;
        this.datePicker.mode = 'month';
    }
    static { this.ɵfac = function CmacsMonthPickerComponent_Factory(t) { return new (t || CmacsMonthPickerComponent)(i0.ɵɵdirectiveInject(i1.CmacsDatePickerComponent, 9)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsMonthPickerComponent, selectors: [["cmacs-month-picker"]], exportAs: ["cmacsMonthPicker"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsMonthPickerComponent, [{
        type: Directive,
        args: [{
                selector: 'cmacs-month-picker',
                exportAs: 'cmacsMonthPicker'
            }]
    }], function () { return [{ type: i1.CmacsDatePickerComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9tb250aC1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTzFELGtEQUFrRDtBQUNsRCxNQUFNLE9BQU8seUJBQXlCO0lBQ3BDLFlBQXVDLFVBQW9DO1FBQXBDLGVBQVUsR0FBVixVQUFVLENBQTBCO1FBQ3pFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUNqQyxDQUFDOzBGQUhVLHlCQUF5QjtvRUFBekIseUJBQXlCOzt1RkFBekIseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOztzQkFHYyxRQUFROztzQkFBSSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21hY3NEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdjbWFjcy1tb250aC1waWNrZXInLFxuICBleHBvcnRBczogJ2NtYWNzTW9udGhQaWNrZXInXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBDbWFjc01vbnRoUGlja2VyQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgZGF0ZVBpY2tlcjogQ21hY3NEYXRlUGlja2VyQ29tcG9uZW50KSB7XG4gICAgdGhpcy5kYXRlUGlja2VyLm1vZGUgPSAnbW9udGgnO1xuICB9XG59XG4iXX0=