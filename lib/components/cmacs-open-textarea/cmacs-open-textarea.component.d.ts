import { AfterViewInit, ElementRef } from '@angular/core';
import { UntypedFormControl } from "@angular/forms";
import * as i0 from "@angular/core";
export declare class CmacsOpenTextareaComponent implements AfterViewInit {
    formControlCustom: UntypedFormControl;
    width: number;
    placeholder: string;
    disabled: boolean;
    allowEdition: boolean;
    enableDivider: boolean;
    textarea: ElementRef;
    constructor();
    onClick(event: Event): void;
    isEnabled(): boolean;
    isTextEnabled(): any;
    startEdition($event: Event): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsOpenTextareaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsOpenTextareaComponent, "cmacs-open-textarea", ["cmacsOpenTextarea"], { "formControlCustom": { "alias": "formControlCustom"; "required": false; }; "width": { "alias": "width"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=cmacs-open-textarea.component.d.ts.map