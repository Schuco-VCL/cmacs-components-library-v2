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
        this.hasError.emit(this.telOutputObj.isValidNumber());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1waG9uZS1udW1iZXIvY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1waG9uZS1udW1iZXIvY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUdsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLFlBQVksTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVcxQyxNQUFNLE9BQU8seUJBQXlCO0lBWXBDLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBVGpDLHNCQUFpQixHQUF1QixJQUFJLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RSxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZELGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDekQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVyRSxpQkFBWSxHQUFXLE9BQU8sQ0FBQztRQUMvQixpQkFBWSxHQUFRLElBQUksQ0FBQztRQUd2QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHO2dCQUNWLFdBQVcsRUFBRSx1QkFBdUI7YUFDckMsQ0FBQTtTQUNGO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyx1QkFBdUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXZDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1lBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQU07UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUFNO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ25FLHVDQUF1QztZQUN2QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVqQywwQ0FBMEM7WUFDMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQix1Q0FBdUM7Z0JBQ3ZDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7MEZBekRVLHlCQUF5QjtvRUFBekIseUJBQXlCO1lDWnRDLGdDQUlrQztZQUEzQixxR0FBUyxtQkFBZSxJQUFDO1lBSmhDLGlCQUlrQzs7WUFIM0IscUNBQW1CLHNDQUFBOzs7dUZEV2IseUJBQXlCO2NBVHJDLFNBQVM7MkJBQ0Usb0JBQW9CLFlBQ3BCLGtCQUFrQixtQkFFWCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLHVCQUNoQixLQUFLO29FQUtqQixJQUFJO2tCQUFaLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDSSxRQUFRO2tCQUFqQixNQUFNO1lBQ0csU0FBUztrQkFBbEIsTUFBTTtZQUNHLFdBQVc7a0JBQXBCLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dCxcclxuICBJbnB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBPbkluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVW50eXBlZEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgaW50bFRlbElucHV0IGZyb20gJ2ludGwtdGVsLWlucHV0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtcGhvbmUtbnVtYmVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzUGhvbmVOdW1iZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1waG9uZS1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzUGhvbmVOdW1iZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gIEBJbnB1dCgpIGluaXQ6IG9iamVjdDtcclxuICBASW5wdXQoKSBmb3JtQ29udHJvbEN1c3RvbTogVW50eXBlZEZvcm1Db250cm9sID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbCgnJywgW10pO1xyXG4gIEBPdXRwdXQoKSBoYXNFcnJvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgdGVsT3V0cHV0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBpbnB1dE9iamVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY291bnRyeUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcGhvbmVJbnB1dElEOiBzdHJpbmcgPSAncGhvbmUnO1xyXG4gIHRlbE91dHB1dE9iajogYW55ID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB0aGlzLnBob25lSW5wdXRJRCA9IHRoaXMudXVpZHY0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5waG9uZUlucHV0SUQpO1xyXG4gICAgaWYgKHRoaXMuaW5pdCA9PT0gbnVsbCB8fCB0aGlzLmluaXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmluaXQgPSB7XHJcbiAgICAgICAgdXRpbHNTY3JpcHQ6IFwiYXNzZXRzL2J1aWxkL3V0aWxzLmpzXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pbml0Wyd1dGlsc1NjcmlwdCddID0gXCJhc3NldHMvYnVpbGQvdXRpbHMuanNcIjtcclxuICAgIHRoaXMudGVsT3V0cHV0T2JqID0gaW50bFRlbElucHV0KGlucHV0LCB0aGlzLmluaXQpO1xyXG4gICAgdGhpcy50ZWxJbnB1dE9iamVjdCh0aGlzLnRlbE91dHB1dE9iaik7XHJcblxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNvdW50cnljaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uQ291bnRyeUNoYW5nZSh0aGlzLnRlbE91dHB1dE9iai5nZXRTZWxlY3RlZENvdW50cnlEYXRhKCkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0ZWxJbnB1dE9iamVjdCgkZXZlbnQpe1xyXG4gICAgdGhpcy5pbnB1dE9iamVjdC5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkNvdW50cnlDaGFuZ2UoJGV2ZW50KXtcclxuICAgIHRoaXMuY291bnRyeUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgICB0aGlzLmhhc0Vycm9yRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIGhhc0Vycm9yRXZlbnQoKXtcclxuICAgIHRoaXMuaGFzRXJyb3IuZW1pdCh0aGlzLnRlbE91dHB1dE9iai5pc1ZhbGlkTnVtYmVyKCkpO1xyXG4gIH1cclxuXHJcbiAgdXVpZHY0KCkge1xyXG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgICAgIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xyXG5cclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB0cmlwbGUtZXF1YWxzXHJcbiAgICAgIGNvbnN0IHYgPSBjID09ICd4JyA/XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgICAgICAgciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8IS0tPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgIG5nMlRlbElucHV0XHJcbiAgICAgICBjbWFjcy1pbnB1dFxyXG4gICAgICAgW25nMlRlbElucHV0T3B0aW9uc109XCJpbml0XCJcclxuICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbEN1c3RvbVwiXHJcbiAgICAgICAoaGFzRXJyb3IpPVwiaGFzRXJyb3JFdmVudCgkZXZlbnQpXCJcclxuICAgICAgIChuZzJUZWxPdXRwdXQpPVwiZ2V0TnVtYmVyKCRldmVudClcIlxyXG4gICAgICAgKGludGxUZWxJbnB1dE9iamVjdCk9XCJ0ZWxJbnB1dE9iamVjdCgkZXZlbnQpXCJcclxuICAgICAgIChjb3VudHJ5Q2hhbmdlKT1cIm9uQ291bnRyeUNoYW5nZSgkZXZlbnQpXCJcclxuLz4tLT5cclxuXHJcbjxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICBbaWRdPVwicGhvbmVJbnB1dElEXCJcclxuICAgICAgIGNtYWNzLWlucHV0XHJcbiAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xDdXN0b21cIlxyXG4gICAgICAgKGtleXVwKT1cImhhc0Vycm9yRXZlbnQoKVwiLz5cclxuIl19