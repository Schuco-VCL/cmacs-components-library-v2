import { AfterContentInit, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { CmacsInputDirective } from './cmacs-input.directive';
import * as i0 from "@angular/core";
export declare class CmacsTextareaCountComponent implements AfterContentInit, OnDestroy {
    private renderer;
    private elementRef;
    nzInputDirective: CmacsInputDirective;
    maxCharacterCount: number;
    computeCharacterCount: (v: string) => number;
    formatter: (cur: number, max: number) => string;
    private configChange$;
    private destroy$;
    constructor(renderer: Renderer2, elementRef: ElementRef<HTMLElement>);
    ngAfterContentInit(): void;
    setDataCount(value: string): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsTextareaCountComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsTextareaCountComponent, "cmacs-textarea-count", never, { "maxCharacterCount": "maxCharacterCount"; "computeCharacterCount": "computeCharacterCount"; "formatter": "formatter"; }, {}, ["nzInputDirective"], ["textarea[cmacs-input]"]>;
}
//# sourceMappingURL=textarea-count.component.d.ts.map