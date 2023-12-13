import { AfterViewInit, ElementRef, Renderer2, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare function MenuGroupFactory(isMenuInsideDropDownToken: boolean): boolean;
export declare class CmacsMenuGroupComponent implements AfterViewInit {
    elementRef: ElementRef;
    private renderer;
    isMenuInsideDropDown: boolean;
    title?: string | TemplateRef<void>;
    titleElement?: ElementRef;
    constructor(elementRef: ElementRef, renderer: Renderer2, isMenuInsideDropDown: boolean);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsMenuGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsMenuGroupComponent, "[cmacs-menu-group]", ["cmacsMenuGroup"], { "title": { "alias": "title"; "required": false; }; }, {}, never, ["[title]", "*"], false, never>;
}
//# sourceMappingURL=menu-group.component.d.ts.map