import { FocusableOption } from '@angular/cdk/a11y';
import { ElementRef } from '@angular/core';
import { CmacsTabComponent } from './tab.component';
import * as i0 from "@angular/core";
export declare class CmacsTabNavItemDirective implements FocusableOption {
    elementRef: ElementRef<HTMLElement>;
    disabled: boolean;
    tab: CmacsTabComponent;
    active: boolean;
    private el;
    private parentElement;
    constructor(elementRef: ElementRef<HTMLElement>);
    focus(): void;
    get width(): number;
    get height(): number;
    get left(): number;
    get top(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsTabNavItemDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CmacsTabNavItemDirective, "[cmacsTabNavItem]", never, { "disabled": { "alias": "disabled"; "required": false; }; "tab": { "alias": "tab"; "required": false; }; "active": { "alias": "active"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=tab-nav-item.directive.d.ts.map