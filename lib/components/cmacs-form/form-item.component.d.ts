import { ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export type NzFormControlStatusType = 'success' | 'error' | 'warning' | 'validating' | null;
/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
export declare class CmacsFormItemComponent implements OnDestroy, OnDestroy {
    private cdr;
    status: NzFormControlStatusType;
    hasFeedback: boolean;
    withHelpClass: boolean;
    private destroy$;
    setWithHelpViaTips(value: boolean): void;
    setStatus(status: NzFormControlStatusType): void;
    setHasFeedback(hasFeedback: boolean): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsFormItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsFormItemComponent, "cmacs-form-item", ["cmacsFormItem"], {}, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=form-item.component.d.ts.map