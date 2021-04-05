import { EventEmitter } from '@angular/core';
import { FormControl } from "@angular/forms";
import * as i0 from "@angular/core";
export declare class CmacsPhoneNumberComponent {
    init: object;
    formControlCustom: FormControl;
    hasError: EventEmitter<any>;
    telOutput: EventEmitter<any>;
    inputObject: EventEmitter<any>;
    countryChange: EventEmitter<any>;
    constructor();
    getNumber($event: any): void;
    telInputObject($event: any): void;
    onCountryChange($event: any): void;
    hasErrorEvent($event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsPhoneNumberComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsPhoneNumberComponent, "cmacs-phone-number", ["cmacsPhoneNumber"], { "init": "init"; "formControlCustom": "formControlCustom"; }, { "hasError": "hasError"; "telOutput": "telOutput"; "inputObject": "inputObject"; "countryChange": "countryChange"; }, never, never>;
}
//# sourceMappingURL=cmacs-phone-number.component.d.ts.map