import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { CmacsMenuModeType } from './menu.types';
import * as i0 from "@angular/core";
export declare class NzSubMenuTitleComponent implements OnDestroy, OnInit {
    private cdr;
    private directionality;
    icon: string | null;
    cmacsIcon: string | null;
    title: string | TemplateRef<void> | null;
    isMenuInsideDropDown: boolean;
    disabled: boolean;
    paddingLeft: number | null;
    mode: CmacsMenuModeType;
    readonly toggleSubMenu: EventEmitter<any>;
    readonly subMenuMouseState: EventEmitter<boolean>;
    dir: Direction;
    private destroy$;
    constructor(cdr: ChangeDetectorRef, directionality: Directionality);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setMouseState(state: boolean): void;
    clickTitle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzSubMenuTitleComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NzSubMenuTitleComponent, "[cmacs-submenu-title]", ["cmacsSubmenuTitle"], { "icon": { "alias": "icon"; "required": false; }; "cmacsIcon": { "alias": "cmacsIcon"; "required": false; }; "title": { "alias": "title"; "required": false; }; "isMenuInsideDropDown": { "alias": "isMenuInsideDropDown"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "paddingLeft": { "alias": "paddingLeft"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "toggleSubMenu": "toggleSubMenu"; "subMenuMouseState": "subMenuMouseState"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=submenu-title.component.d.ts.map