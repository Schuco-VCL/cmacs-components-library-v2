import { ChangeDetectionStrategy, Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl } from "@angular/forms";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../cmacs-input/cmacs-input.directive";
export class CmacsPhoneNumberComponent {
    constructor() {
        this.formControlCustom = new UntypedFormControl('', []);
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
    static { this.ɵfac = function CmacsPhoneNumberComponent_Factory(t) { return new (t || CmacsPhoneNumberComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsPhoneNumberComponent, selectors: [["cmacs-phone-number"]], inputs: { init: "init", formControlCustom: "formControlCustom" }, outputs: { hasError: "hasError", telOutput: "telOutput", inputObject: "inputObject", countryChange: "countryChange" }, exportAs: ["cmacsPhoneNumber"], decls: 1, vars: 1, consts: [["type", "text", "cmacs-input", "", 3, "formControl", "hasError", "intlTelInputObject", "countryChange"]], template: function CmacsPhoneNumberComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0);
            i0.ɵɵlistener("hasError", function CmacsPhoneNumberComponent_Template_input_hasError_0_listener($event) { return ctx.hasErrorEvent($event); })("intlTelInputObject", function CmacsPhoneNumberComponent_Template_input_intlTelInputObject_0_listener($event) { return ctx.telInputObject($event); })("countryChange", function CmacsPhoneNumberComponent_Template_input_countryChange_0_listener($event) { return ctx.onCountryChange($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("formControl", ctx.formControlCustom);
        } }, dependencies: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i2.CmacsInputDirective], styles: [".iti__country-list{position:absolute}.iti__selected-flag{border-right:1px solid #dee0e5}.iti--allow-dropdown input,.iti--allow-dropdown input[type=text]{padding-left:60px}\n"], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsPhoneNumberComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-phone-number', exportAs: 'cmacsPhoneNumber', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, template: "<!--<input type=\"text\"\r\n       ng2TelInput\r\n       cmacs-input\r\n       [ng2TelInputOptions]=\"init\"\r\n       [formControl]=\"formControlCustom\"\r\n       (hasError)=\"hasErrorEvent($event)\"\r\n       (ng2TelOutput)=\"getNumber($event)\"\r\n       (intlTelInputObject)=\"telInputObject($event)\"\r\n       (countryChange)=\"onCountryChange($event)\"\r\n/>-->\r\n\r\n<input type=\"text\"\r\n       cmacs-input\r\n       [formControl]=\"formControlCustom\"\r\n       (hasError)=\"hasErrorEvent($event)\"\r\n       (intlTelInputObject)=\"telInputObject($event)\"\r\n       (countryChange)=\"onCountryChange($event)\" />\r\n", styles: [".iti__country-list{position:absolute}.iti__selected-flag{border-right:1px solid #dee0e5}.iti--allow-dropdown input,.iti--allow-dropdown input[type=text]{padding-left:60px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1waG9uZS1udW1iZXIvY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1waG9uZS1udW1iZXIvY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVdsRCxNQUFNLE9BQU8seUJBQXlCO0lBU3BDO1FBTlMsc0JBQWlCLEdBQXVCLElBQUksa0JBQWtCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RCxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkQsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6RCxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRXRELENBQUM7SUFFaEIsU0FBUyxDQUFDLE1BQU07UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsY0FBYyxDQUFDLE1BQU07UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELGVBQWUsQ0FBQyxNQUFNO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxhQUFhLENBQUMsTUFBTTtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOzBGQXRCVSx5QkFBeUI7b0VBQXpCLHlCQUF5QjtZQ1J0QyxnQ0FLbUQ7WUFGNUMsaUhBQVkseUJBQXFCLElBQUMsd0hBQ1osMEJBQXNCLElBRFYsOEdBRWpCLDJCQUF1QixJQUZOO1lBSHpDLGlCQUttRDs7WUFINUMsbURBQWlDOzs7dUZETTNCLHlCQUF5QjtjQVRyQyxTQUFTOzJCQUNFLG9CQUFvQixZQUNwQixrQkFBa0IsbUJBRVgsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSx1QkFDaEIsS0FBSztzQ0FLakIsSUFBSTtrQkFBWixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0ksUUFBUTtrQkFBakIsTUFBTTtZQUNHLFNBQVM7a0JBQWxCLE1BQU07WUFDRyxXQUFXO2tCQUFwQixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPdXRwdXQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtVbnR5cGVkRm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1waG9uZS1udW1iZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NQaG9uZU51bWJlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXBob25lLW51bWJlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1waG9uZS1udW1iZXIuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NQaG9uZU51bWJlckNvbXBvbmVudHtcclxuXHJcbiAgQElucHV0KCkgaW5pdDogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIGZvcm1Db250cm9sQ3VzdG9tOiBVbnR5cGVkRm9ybUNvbnRyb2wgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKCcnLCBbXSk7XHJcbiAgQE91dHB1dCgpIGhhc0Vycm9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSB0ZWxPdXRwdXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGlucHV0T2JqZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBjb3VudHJ5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGdldE51bWJlcigkZXZlbnQpe1xyXG4gICAgdGhpcy50ZWxPdXRwdXQuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuICB0ZWxJbnB1dE9iamVjdCgkZXZlbnQpe1xyXG4gICAgdGhpcy5pbnB1dE9iamVjdC5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG4gIG9uQ291bnRyeUNoYW5nZSgkZXZlbnQpe1xyXG4gICAgdGhpcy5jb3VudHJ5Q2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcbiAgaGFzRXJyb3JFdmVudCgkZXZlbnQpe1xyXG4gICAgdGhpcy5oYXNFcnJvci5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8IS0tPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgIG5nMlRlbElucHV0XHJcbiAgICAgICBjbWFjcy1pbnB1dFxyXG4gICAgICAgW25nMlRlbElucHV0T3B0aW9uc109XCJpbml0XCJcclxuICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbEN1c3RvbVwiXHJcbiAgICAgICAoaGFzRXJyb3IpPVwiaGFzRXJyb3JFdmVudCgkZXZlbnQpXCJcclxuICAgICAgIChuZzJUZWxPdXRwdXQpPVwiZ2V0TnVtYmVyKCRldmVudClcIlxyXG4gICAgICAgKGludGxUZWxJbnB1dE9iamVjdCk9XCJ0ZWxJbnB1dE9iamVjdCgkZXZlbnQpXCJcclxuICAgICAgIChjb3VudHJ5Q2hhbmdlKT1cIm9uQ291bnRyeUNoYW5nZSgkZXZlbnQpXCJcclxuLz4tLT5cclxuXHJcbjxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICBjbWFjcy1pbnB1dFxyXG4gICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sQ3VzdG9tXCJcclxuICAgICAgIChoYXNFcnJvcik9XCJoYXNFcnJvckV2ZW50KCRldmVudClcIlxyXG4gICAgICAgKGludGxUZWxJbnB1dE9iamVjdCk9XCJ0ZWxJbnB1dE9iamVjdCgkZXZlbnQpXCJcclxuICAgICAgIChjb3VudHJ5Q2hhbmdlKT1cIm9uQ291bnRyeUNoYW5nZSgkZXZlbnQpXCIgLz5cclxuIl19