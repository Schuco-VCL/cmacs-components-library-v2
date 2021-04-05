import { ChangeDetectionStrategy, Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from "@angular/forms";
import * as i0 from "@angular/core";
import * as i1 from "../cmacs-input/cmacs-input.directive";
import * as i2 from "@angular/forms";
import * as i3 from "ng2-tel-input";
export class CmacsPhoneNumberComponent {
    constructor() {
        this.formControlCustom = new FormControl('', []);
        this.hasError = new EventEmitter();
        this.telOutput = new EventEmitter();
        this.inputObject = new EventEmitter();
        this.countryChange = new EventEmitter();
    }
    getNumber($event) {
        this.telOutput.emit($event);
    }
    telInputObject($event) {
        this.inputObject.emit($event);
    }
    onCountryChange($event) {
        this.countryChange.emit($event);
    }
    hasErrorEvent($event) {
        this.hasError.emit($event);
    }
}
CmacsPhoneNumberComponent.ɵfac = function CmacsPhoneNumberComponent_Factory(t) { return new (t || CmacsPhoneNumberComponent)(); };
CmacsPhoneNumberComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsPhoneNumberComponent, selectors: [["cmacs-phone-number"]], inputs: { init: "init", formControlCustom: "formControlCustom" }, outputs: { hasError: "hasError", telOutput: "telOutput", inputObject: "inputObject", countryChange: "countryChange" }, exportAs: ["cmacsPhoneNumber"], decls: 1, vars: 2, consts: [["type", "text", "ng2TelInput", "", "cmacs-input", "", 3, "ng2TelInputOptions", "formControl", "hasError", "ng2TelOutput", "intlTelInputObject", "countryChange"]], template: function CmacsPhoneNumberComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "input", 0);
        i0.ɵɵlistener("hasError", function CmacsPhoneNumberComponent_Template_input_hasError_0_listener($event) { return ctx.hasErrorEvent($event); })("ng2TelOutput", function CmacsPhoneNumberComponent_Template_input_ng2TelOutput_0_listener($event) { return ctx.getNumber($event); })("intlTelInputObject", function CmacsPhoneNumberComponent_Template_input_intlTelInputObject_0_listener($event) { return ctx.telInputObject($event); })("countryChange", function CmacsPhoneNumberComponent_Template_input_countryChange_0_listener($event) { return ctx.onCountryChange($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ng2TelInputOptions", ctx.init)("formControl", ctx.formControlCustom);
    } }, directives: [i1.CmacsInputDirective, i2.DefaultValueAccessor, i3.Ng2TelInput, i2.NgControlStatus, i2.FormControlDirective], styles: [".iti__country-list{position:absolute}.iti__selected-flag{border-right:1px solid #dee0e5}.iti--allow-dropdown input,.iti--allow-dropdown input[type=text]{padding-left:60px}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsPhoneNumberComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-phone-number',
                exportAs: 'cmacsPhoneNumber',
                templateUrl: './cmacs-phone-number.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styleUrls: ['./cmacs-phone-number.component.css'],
            }]
    }], function () { return []; }, { init: [{
            type: Input
        }], formControlCustom: [{
            type: Input
        }], hasError: [{
            type: Output
        }], telOutput: [{
            type: Output
        }], inputObject: [{
            type: Output
        }], countryChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1waG9uZS1udW1iZXIvY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1waG9uZS1udW1iZXIvY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBVzNDLE1BQU0sT0FBTyx5QkFBeUI7SUFTcEM7UUFOUyxzQkFBaUIsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RCxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkQsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6RCxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRXRELENBQUM7SUFFaEIsU0FBUyxDQUFDLE1BQU07UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsY0FBYyxDQUFDLE1BQU07UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELGVBQWUsQ0FBQyxNQUFNO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxhQUFhLENBQUMsTUFBTTtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOztrR0F0QlUseUJBQXlCOzhEQUF6Qix5QkFBeUI7UUNuQnRDLGdDQVNFO1FBSkssaUhBQVkseUJBQXFCLElBQUMsNEdBQ2xCLHFCQUFpQixJQURDLHdIQUVaLDBCQUFzQixJQUZWLDhHQUdqQiwyQkFBdUIsSUFITjtRQUx6QyxpQkFTRTs7UUFOSyw2Q0FBMkIsc0NBQUE7O3VGRGdCckIseUJBQXlCO2NBVHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEO3NDQUdVLElBQUk7a0JBQVosS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNJLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT3V0cHV0LFxyXG4gIElucHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1waG9uZS1udW1iZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NQaG9uZU51bWJlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXBob25lLW51bWJlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1waG9uZS1udW1iZXIuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NQaG9uZU51bWJlckNvbXBvbmVudHtcclxuXHJcbiAgQElucHV0KCkgaW5pdDogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIGZvcm1Db250cm9sQ3VzdG9tOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW10pO1xyXG4gIEBPdXRwdXQoKSBoYXNFcnJvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgdGVsT3V0cHV0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBpbnB1dE9iamVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY291bnRyeUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBnZXROdW1iZXIoJGV2ZW50KXtcclxuICAgIHRoaXMudGVsT3V0cHV0LmVtaXQoJGV2ZW50KTtcclxuICB9XHJcbiAgdGVsSW5wdXRPYmplY3QoJGV2ZW50KXtcclxuICAgIHRoaXMuaW5wdXRPYmplY3QuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuICBvbkNvdW50cnlDaGFuZ2UoJGV2ZW50KXtcclxuICAgIHRoaXMuY291bnRyeUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG4gIGhhc0Vycm9yRXZlbnQoJGV2ZW50KXtcclxuICAgIHRoaXMuaGFzRXJyb3IuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgIG5nMlRlbElucHV0XHJcbiAgICAgICBjbWFjcy1pbnB1dFxyXG4gICAgICAgW25nMlRlbElucHV0T3B0aW9uc109XCJpbml0XCJcclxuICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbEN1c3RvbVwiXHJcbiAgICAgICAoaGFzRXJyb3IpPVwiaGFzRXJyb3JFdmVudCgkZXZlbnQpXCJcclxuICAgICAgIChuZzJUZWxPdXRwdXQpPVwiZ2V0TnVtYmVyKCRldmVudClcIlxyXG4gICAgICAgKGludGxUZWxJbnB1dE9iamVjdCk9XCJ0ZWxJbnB1dE9iamVjdCgkZXZlbnQpXCJcclxuICAgICAgIChjb3VudHJ5Q2hhbmdlKT1cIm9uQ291bnRyeUNoYW5nZSgkZXZlbnQpXCJcclxuLz5cclxuIl19