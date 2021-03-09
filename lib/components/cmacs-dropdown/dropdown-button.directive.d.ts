import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CmacsButtonGroupComponent } from '../cmacs-button/cmacs-button-group.component';
import * as i0 from "@angular/core";
export declare class CmacsDropdownButtonDirective implements AfterViewInit {
    private renderer;
    private nzButtonGroupComponent;
    private elementRef;
    constructor(renderer: Renderer2, nzButtonGroupComponent: CmacsButtonGroupComponent, elementRef: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsDropdownButtonDirective, [null, { optional: true; host: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CmacsDropdownButtonDirective, "[cmacs-button][cmacs-dropdown]", never, {}, {}, never>;
}
//# sourceMappingURL=dropdown-button.directive.d.ts.map