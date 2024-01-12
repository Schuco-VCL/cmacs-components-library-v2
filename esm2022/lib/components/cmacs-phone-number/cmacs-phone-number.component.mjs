import { ChangeDetectionStrategy, Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl } from "@angular/forms";
import intlTelInput from 'intl-tel-input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../cmacs-input/cmacs-input.directive";
export class CmacsPhoneNumberComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.formControlCustom = new UntypedFormControl('', []);
        this.hasError = new EventEmitter();
        this.telOutput = new EventEmitter();
        this.inputObject = new EventEmitter();
        this.countryChange = new EventEmitter();
        this.phoneInputID = 'phone';
        this.telOutputObj = null;
        this.phoneInputID = this.uuidv4();
    }
    ngOnInit() {
        this.cdr.detectChanges();
        const input = document.getElementById(this.phoneInputID);
        if (this.init === null || this.init === undefined) {
            this.init = {
                utilsScript: "assets/build/utils.js"
            };
        }
        this.init['utilsScript'] = "assets/build/utils.js";
        this.telOutputObj = intlTelInput(input, this.init);
        this.telInputObject(this.telOutputObj);
        input.addEventListener("countrychange", () => {
            this.onCountryChange(this.telOutputObj.getSelectedCountryData());
        });
    }
    telInputObject($event) {
        this.inputObject.emit($event);
    }
    onCountryChange($event) {
        this.countryChange.emit($event);
        this.hasErrorEvent();
    }
    hasErrorEvent() {
        this.hasError.emit(!this.telOutputObj.isValidNumber());
    }
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            // tslint:disable-next-line: no-bitwise
            const r = Math.random() * 16 | 0;
            // tslint:disable-next-line: triple-equals
            const v = c == 'x' ?
                // tslint:disable-next-line: no-bitwise
                r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    static { this.ɵfac = function CmacsPhoneNumberComponent_Factory(t) { return new (t || CmacsPhoneNumberComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsPhoneNumberComponent, selectors: [["cmacs-phone-number"]], inputs: { init: "init", formControlCustom: "formControlCustom" }, outputs: { hasError: "hasError", telOutput: "telOutput", inputObject: "inputObject", countryChange: "countryChange" }, exportAs: ["cmacsPhoneNumber"], decls: 1, vars: 2, consts: [["type", "text", "cmacs-input", "", 3, "id", "formControl", "keyup"]], template: function CmacsPhoneNumberComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0);
            i0.ɵɵlistener("keyup", function CmacsPhoneNumberComponent_Template_input_keyup_0_listener() { return ctx.hasErrorEvent(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("id", ctx.phoneInputID)("formControl", ctx.formControlCustom);
        } }, dependencies: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i2.CmacsInputDirective], styles: [".iti__country-list{position:absolute}.iti__selected-flag{border-right:1px solid #dee0e5}.iti--allow-dropdown input,.iti--allow-dropdown input[type=text]{padding-left:60px}\n"], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsPhoneNumberComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-phone-number', exportAs: 'cmacsPhoneNumber', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, template: "<!--<input type=\"text\"\r\n       ng2TelInput\r\n       cmacs-input\r\n       [ng2TelInputOptions]=\"init\"\r\n       [formControl]=\"formControlCustom\"\r\n       (hasError)=\"hasErrorEvent($event)\"\r\n       (ng2TelOutput)=\"getNumber($event)\"\r\n       (intlTelInputObject)=\"telInputObject($event)\"\r\n       (countryChange)=\"onCountryChange($event)\"\r\n/>-->\r\n\r\n<input type=\"text\"\r\n       [id]=\"phoneInputID\"\r\n       cmacs-input\r\n       [formControl]=\"formControlCustom\"\r\n       (keyup)=\"hasErrorEvent()\"/>\r\n", styles: [".iti__country-list{position:absolute}.iti__selected-flag{border-right:1px solid #dee0e5}.iti--allow-dropdown input,.iti--allow-dropdown input[type=text]{padding-left:60px}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { init: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1waG9uZS1udW1iZXIvY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1waG9uZS1udW1iZXIvY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUdsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLFlBQVksTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVcxQyxNQUFNLE9BQU8seUJBQXlCO0lBWXBDLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBVGpDLHNCQUFpQixHQUF1QixJQUFJLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RSxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZELGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDekQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVyRSxpQkFBWSxHQUFXLE9BQU8sQ0FBQztRQUMvQixpQkFBWSxHQUFRLElBQUksQ0FBQztRQUd2QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHO2dCQUNWLFdBQVcsRUFBRSx1QkFBdUI7YUFDckMsQ0FBQTtTQUNGO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyx1QkFBdUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXZDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1lBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQU07UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUFNO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDbkUsdUNBQXVDO1lBQ3ZDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRWpDLDBDQUEwQztZQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLHVDQUF1QztnQkFDdkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzswRkF6RFUseUJBQXlCO29FQUF6Qix5QkFBeUI7WUNadEMsZ0NBSWtDO1lBQTNCLHFHQUFTLG1CQUFlLElBQUM7WUFKaEMsaUJBSWtDOztZQUgzQixxQ0FBbUIsc0NBQUE7Ozt1RkRXYix5QkFBeUI7Y0FUckMsU0FBUzsyQkFDRSxvQkFBb0IsWUFDcEIsa0JBQWtCLG1CQUVYLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksdUJBQ2hCLEtBQUs7b0VBS2pCLElBQUk7a0JBQVosS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNJLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT3V0cHV0LFxyXG4gIElucHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIE9uSW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbnR5cGVkRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCBpbnRsVGVsSW5wdXQgZnJvbSAnaW50bC10ZWwtaW5wdXQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1waG9uZS1udW1iZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NQaG9uZU51bWJlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXBob25lLW51bWJlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1waG9uZS1udW1iZXIuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NQaG9uZU51bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgQElucHV0KCkgaW5pdDogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIGZvcm1Db250cm9sQ3VzdG9tOiBVbnR5cGVkRm9ybUNvbnRyb2wgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKCcnLCBbXSk7XHJcbiAgQE91dHB1dCgpIGhhc0Vycm9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSB0ZWxPdXRwdXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGlucHV0T2JqZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBjb3VudHJ5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBwaG9uZUlucHV0SUQ6IHN0cmluZyA9ICdwaG9uZSc7XHJcbiAgdGVsT3V0cHV0T2JqOiBhbnkgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHRoaXMucGhvbmVJbnB1dElEID0gdGhpcy51dWlkdjQoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBob25lSW5wdXRJRCk7XHJcbiAgICBpZiAodGhpcy5pbml0ID09PSBudWxsIHx8IHRoaXMuaW5pdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdCA9IHtcclxuICAgICAgICB1dGlsc1NjcmlwdDogXCJhc3NldHMvYnVpbGQvdXRpbHMuanNcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmluaXRbJ3V0aWxzU2NyaXB0J10gPSBcImFzc2V0cy9idWlsZC91dGlscy5qc1wiO1xyXG4gICAgdGhpcy50ZWxPdXRwdXRPYmogPSBpbnRsVGVsSW5wdXQoaW5wdXQsIHRoaXMuaW5pdCk7XHJcbiAgICB0aGlzLnRlbElucHV0T2JqZWN0KHRoaXMudGVsT3V0cHV0T2JqKTtcclxuXHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY291bnRyeWNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMub25Db3VudHJ5Q2hhbmdlKHRoaXMudGVsT3V0cHV0T2JqLmdldFNlbGVjdGVkQ291bnRyeURhdGEoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRlbElucHV0T2JqZWN0KCRldmVudCl7XHJcbiAgICB0aGlzLmlucHV0T2JqZWN0LmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uQ291bnRyeUNoYW5nZSgkZXZlbnQpe1xyXG4gICAgdGhpcy5jb3VudHJ5Q2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICAgIHRoaXMuaGFzRXJyb3JFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgaGFzRXJyb3JFdmVudCgpe1xyXG4gICAgdGhpcy5oYXNFcnJvci5lbWl0KCF0aGlzLnRlbE91dHB1dE9iai5pc1ZhbGlkTnVtYmVyKCkpO1xyXG4gIH1cclxuXHJcbiAgdXVpZHY0KCkge1xyXG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgICAgIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xyXG5cclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB0cmlwbGUtZXF1YWxzXHJcbiAgICAgIGNvbnN0IHYgPSBjID09ICd4JyA/XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgICAgICAgciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8IS0tPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgIG5nMlRlbElucHV0XHJcbiAgICAgICBjbWFjcy1pbnB1dFxyXG4gICAgICAgW25nMlRlbElucHV0T3B0aW9uc109XCJpbml0XCJcclxuICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbEN1c3RvbVwiXHJcbiAgICAgICAoaGFzRXJyb3IpPVwiaGFzRXJyb3JFdmVudCgkZXZlbnQpXCJcclxuICAgICAgIChuZzJUZWxPdXRwdXQpPVwiZ2V0TnVtYmVyKCRldmVudClcIlxyXG4gICAgICAgKGludGxUZWxJbnB1dE9iamVjdCk9XCJ0ZWxJbnB1dE9iamVjdCgkZXZlbnQpXCJcclxuICAgICAgIChjb3VudHJ5Q2hhbmdlKT1cIm9uQ291bnRyeUNoYW5nZSgkZXZlbnQpXCJcclxuLz4tLT5cclxuXHJcbjxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICBbaWRdPVwicGhvbmVJbnB1dElEXCJcclxuICAgICAgIGNtYWNzLWlucHV0XHJcbiAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xDdXN0b21cIlxyXG4gICAgICAgKGtleXVwKT1cImhhc0Vycm9yRXZlbnQoKVwiLz5cclxuIl19