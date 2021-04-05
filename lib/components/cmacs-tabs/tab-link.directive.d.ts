import { ElementRef, TemplateRef } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { TabTemplateContext } from './interfaces';
import * as i0 from "@angular/core";
/**
 * Fix https://github.com/angular/angular/issues/8563
 */
export declare class CmacsTabLinkTemplateDirective {
    templateRef: TemplateRef<TabTemplateContext>;
    constructor(templateRef: TemplateRef<TabTemplateContext>);
    static ɵfac: i0.ɵɵFactoryDef<CmacsTabLinkTemplateDirective, [{ host: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CmacsTabLinkTemplateDirective, "ng-template[cmacsTabLink]", ["cmacsTabLinkTemplate"], {}, {}, never>;
}
/**
 * This component is for catching `routerLink` directive.
 */
export declare class CmacsTabLinkDirective {
    elementRef: ElementRef<HTMLAnchorElement>;
    routerLink?: RouterLink;
    routerLinkWithHref?: RouterLinkWithHref;
    constructor(elementRef: ElementRef<HTMLAnchorElement>, routerLink?: RouterLink, routerLinkWithHref?: RouterLinkWithHref);
    static ɵfac: i0.ɵɵFactoryDef<CmacsTabLinkDirective, [null, { optional: true; self: true; }, { optional: true; self: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CmacsTabLinkDirective, "a[cmacs-tab-link]", ["cmacsTabLink"], {}, {}, never>;
}
//# sourceMappingURL=tab-link.directive.d.ts.map