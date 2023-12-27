import { ElementRef, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TabTemplateContext } from './interfaces';
import * as i0 from "@angular/core";
/**
 * Fix https://github.com/angular/angular/issues/8563
 */
export declare class CmacsTabLinkTemplateDirective {
    templateRef: TemplateRef<TabTemplateContext>;
    constructor(templateRef: TemplateRef<TabTemplateContext>);
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsTabLinkTemplateDirective, [{ host: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CmacsTabLinkTemplateDirective, "ng-template[cmacsTabLink]", ["cmacsTabLinkTemplate"], {}, {}, never, never, false, never>;
}
/**
 * This component is for catching `routerLink` directive.
 */
export declare class CmacsTabLinkDirective {
    elementRef: ElementRef<HTMLAnchorElement>;
    routerLink?: RouterLink;
    routerLinkWithHref?: RouterLink;
    constructor(elementRef: ElementRef<HTMLAnchorElement>, routerLink?: RouterLink, routerLinkWithHref?: RouterLink);
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsTabLinkDirective, [null, { optional: true; self: true; }, { optional: true; self: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CmacsTabLinkDirective, "a[cmacs-tab-link]", ["cmacsTabLink"], {}, {}, never, never, false, never>;
}
//# sourceMappingURL=tab-link.directive.d.ts.map