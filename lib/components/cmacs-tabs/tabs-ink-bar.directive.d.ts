import { ElementRef, NgZone } from '@angular/core';
import { NzTabPositionMode } from './interfaces';
import * as i0 from "@angular/core";
export declare class CmacsTabsInkBarDirective {
    private elementRef;
    private ngZone;
    animationMode?: string;
    position: NzTabPositionMode;
    animated: boolean;
    get _animated(): boolean;
    constructor(elementRef: ElementRef<HTMLElement>, ngZone: NgZone, animationMode?: string);
    alignToElement(element: HTMLElement): void;
    setStyles(element: HTMLElement): void;
    getLeftPosition(element: HTMLElement): string;
    getElementWidth(element: HTMLElement): string;
    getTopPosition(element: HTMLElement): string;
    getElementHeight(element: HTMLElement): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsTabsInkBarDirective, [null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CmacsTabsInkBarDirective, "cmacs-tabs-ink-bar, [cmacs-tabs-ink-bar]", never, { "position": { "alias": "position"; "required": false; }; "animated": { "alias": "animated"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=tabs-ink-bar.directive.d.ts.map