import { AfterViewInit, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";
import * as i0 from "@angular/core";
export declare class CmacsOpenTextareaComponent implements AfterViewInit {
    formControlCustom: FormControl;
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
    static ɵfac: i0.ɵɵFactoryDef<CmacsOpenTextareaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsOpenTextareaComponent, "cmacs-open-textarea", ["cmacsOpenTextarea"], { "formControlCustom": "formControlCustom"; "width": "width"; "placeholder": "placeholder"; "disabled": "disabled"; }, {}, never, never>;
}
//# sourceMappingURL=cmacs-open-textarea.component.d.ts.map