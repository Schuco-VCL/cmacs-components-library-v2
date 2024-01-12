import { EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
import { UntypedFormControl } from "@angular/forms";
import * as i0 from "@angular/core";
export declare class CmacsPhoneNumberComponent implements OnInit {
    private cdr;
    init: object;
    formControlCustom: UntypedFormControl;
    hasError: EventEmitter<any>;
    telOutput: EventEmitter<any>;
    inputObject: EventEmitter<any>;
    countryChange: EventEmitter<any>;
    phoneInputID: string;
    telOutputObj: any;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    telInputObject($event: any): void;
    onCountryChange($event: any): void;
    hasErrorEvent(): void;
    uuidv4(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsPhoneNumberComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsPhoneNumberComponent, "cmacs-phone-number", ["cmacsPhoneNumber"], { "init": { "alias": "init"; "required": false; }; "formControlCustom": { "alias": "formControlCustom"; "required": false; }; }, { "hasError": "hasError"; "telOutput": "telOutput"; "inputObject": "inputObject"; "countryChange": "countryChange"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-phone-number.component.d.ts.map