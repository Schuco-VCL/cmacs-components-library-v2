import { ElementRef, NgZone, Renderer2 } from '@angular/core';
import { NzTabPositionMode } from 'ng-zorro-antd/tabs';
import * as i0 from "@angular/core";
export declare class PtbTabsInkBarDirective {
    private renderer;
    private elementRef;
    private ngZone;
    nzAnimated: boolean;
    nzPositionMode: NzTabPositionMode;
    constructor(renderer: Renderer2, elementRef: ElementRef, ngZone: NgZone);
    alignToElement(element: HTMLElement): void;
    setStyles(element: HTMLElement): void;
    getLeftPosition(element: HTMLElement): string;
    getElementWidth(element: HTMLElement): string;
    getTopPosition(element: HTMLElement): string;
    getElementHeight(element: HTMLElement): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PtbTabsInkBarDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PtbTabsInkBarDirective, "[ptb-tabs-ink-bar]", ["ptbTabsInkBar"], { "nzAnimated": { "alias": "nzAnimated"; "required": false; }; "nzPositionMode": { "alias": "nzPositionMode"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=ptb-tabs-ink-bar.directive.d.ts.map