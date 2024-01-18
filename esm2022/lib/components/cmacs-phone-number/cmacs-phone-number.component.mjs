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
        this.telOutput.emit(this.telOutputObj.getNumber());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1waG9uZS1udW1iZXIvY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1waG9uZS1udW1iZXIvY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUdsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLFlBQVksTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVcxQyxNQUFNLE9BQU8seUJBQXlCO0lBWXBDLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBVGpDLHNCQUFpQixHQUF1QixJQUFJLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RSxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZELGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDekQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVyRSxpQkFBWSxHQUFXLE9BQU8sQ0FBQztRQUMvQixpQkFBWSxHQUFRLElBQUksQ0FBQztRQUd2QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHO2dCQUNWLFdBQVcsRUFBRSx1QkFBdUI7YUFDckMsQ0FBQTtTQUNGO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyx1QkFBdUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXZDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1lBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQU07UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUFNO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNuRSx1Q0FBdUM7WUFDdkMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFakMsMENBQTBDO1lBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDbEIsdUNBQXVDO2dCQUN2QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzBGQTFEVSx5QkFBeUI7b0VBQXpCLHlCQUF5QjtZQ1p0QyxnQ0FJa0M7WUFBM0IscUdBQVMsbUJBQWUsSUFBQztZQUpoQyxpQkFJa0M7O1lBSDNCLHFDQUFtQixzQ0FBQTs7O3VGRFdiLHlCQUF5QjtjQVRyQyxTQUFTOzJCQUNFLG9CQUFvQixZQUNwQixrQkFBa0IsbUJBRVgsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSx1QkFDaEIsS0FBSztvRUFLakIsSUFBSTtrQkFBWixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0ksUUFBUTtrQkFBakIsTUFBTTtZQUNHLFNBQVM7a0JBQWxCLE1BQU07WUFDRyxXQUFXO2tCQUFwQixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPdXRwdXQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgT25Jbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IGludGxUZWxJbnB1dCBmcm9tICdpbnRsLXRlbC1pbnB1dCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXBob25lLW51bWJlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1Bob25lTnVtYmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXBob25lLW51bWJlci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1Bob25lTnVtYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICBASW5wdXQoKSBpbml0OiBvYmplY3Q7XHJcbiAgQElucHV0KCkgZm9ybUNvbnRyb2xDdXN0b206IFVudHlwZWRGb3JtQ29udHJvbCA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woJycsIFtdKTtcclxuICBAT3V0cHV0KCkgaGFzRXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHRlbE91dHB1dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgaW5wdXRPYmplY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGNvdW50cnlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHBob25lSW5wdXRJRDogc3RyaW5nID0gJ3Bob25lJztcclxuICB0ZWxPdXRwdXRPYmo6IGFueSA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgdGhpcy5waG9uZUlucHV0SUQgPSB0aGlzLnV1aWR2NCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGhvbmVJbnB1dElEKTtcclxuICAgIGlmICh0aGlzLmluaXQgPT09IG51bGwgfHwgdGhpcy5pbml0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5pbml0ID0ge1xyXG4gICAgICAgIHV0aWxzU2NyaXB0OiBcImFzc2V0cy9idWlsZC91dGlscy5qc1wiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaW5pdFsndXRpbHNTY3JpcHQnXSA9IFwiYXNzZXRzL2J1aWxkL3V0aWxzLmpzXCI7XHJcbiAgICB0aGlzLnRlbE91dHB1dE9iaiA9IGludGxUZWxJbnB1dChpbnB1dCwgdGhpcy5pbml0KTtcclxuICAgIHRoaXMudGVsSW5wdXRPYmplY3QodGhpcy50ZWxPdXRwdXRPYmopO1xyXG5cclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjb3VudHJ5Y2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5vbkNvdW50cnlDaGFuZ2UodGhpcy50ZWxPdXRwdXRPYmouZ2V0U2VsZWN0ZWRDb3VudHJ5RGF0YSgpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdGVsSW5wdXRPYmplY3QoJGV2ZW50KXtcclxuICAgIHRoaXMuaW5wdXRPYmplY3QuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25Db3VudHJ5Q2hhbmdlKCRldmVudCl7XHJcbiAgICB0aGlzLmNvdW50cnlDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gICAgdGhpcy5oYXNFcnJvckV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBoYXNFcnJvckV2ZW50KCl7XHJcbiAgICB0aGlzLmhhc0Vycm9yLmVtaXQodGhpcy50ZWxPdXRwdXRPYmouaXNWYWxpZE51bWJlcigpKTtcclxuICAgIHRoaXMudGVsT3V0cHV0LmVtaXQodGhpcy50ZWxPdXRwdXRPYmouZ2V0TnVtYmVyKCkpO1xyXG4gIH1cclxuXHJcbiAgdXVpZHY0KCkge1xyXG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgICAgIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xyXG5cclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB0cmlwbGUtZXF1YWxzXHJcbiAgICAgIGNvbnN0IHYgPSBjID09ICd4JyA/XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgICAgICAgciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8IS0tPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgIG5nMlRlbElucHV0XHJcbiAgICAgICBjbWFjcy1pbnB1dFxyXG4gICAgICAgW25nMlRlbElucHV0T3B0aW9uc109XCJpbml0XCJcclxuICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbEN1c3RvbVwiXHJcbiAgICAgICAoaGFzRXJyb3IpPVwiaGFzRXJyb3JFdmVudCgkZXZlbnQpXCJcclxuICAgICAgIChuZzJUZWxPdXRwdXQpPVwiZ2V0TnVtYmVyKCRldmVudClcIlxyXG4gICAgICAgKGludGxUZWxJbnB1dE9iamVjdCk9XCJ0ZWxJbnB1dE9iamVjdCgkZXZlbnQpXCJcclxuICAgICAgIChjb3VudHJ5Q2hhbmdlKT1cIm9uQ291bnRyeUNoYW5nZSgkZXZlbnQpXCJcclxuLz4tLT5cclxuXHJcbjxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICBbaWRdPVwicGhvbmVJbnB1dElEXCJcclxuICAgICAgIGNtYWNzLWlucHV0XHJcbiAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xDdXN0b21cIlxyXG4gICAgICAgKGtleXVwKT1cImhhc0Vycm9yRXZlbnQoKVwiLz5cclxuIl19