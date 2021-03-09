import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { CmacsMenuItemDirective } from './menu-item.directive';
import { MenuService } from './menu.service';
import { CmacsMenuModeType, CmacsMenuThemeType } from './menu.types';
import { CmacsSubMenuComponent } from './submenu.component';
import * as i0 from "@angular/core";
export declare function MenuServiceFactory(serviceInsideDropDown: MenuService, serviceOutsideDropDown: MenuService): MenuService;
export declare function MenuDropDownTokenFactory(isMenuInsideDropDownToken: boolean): boolean;
export declare class CmacsMenuDirective implements AfterContentInit, OnInit, OnChanges, OnDestroy {
    private nzMenuService;
    isMenuInsideDropDown: boolean;
    private cdr;
    private directionality;
    listOfNzMenuItemDirective: QueryList<CmacsMenuItemDirective>;
    listOfCmacsSubMenuComponent: QueryList<CmacsSubMenuComponent>;
    inlineIndent: number;
    theme: CmacsMenuThemeType;
    mode: CmacsMenuModeType;
    inlineCollapsed: boolean;
    selectable: boolean;
    readonly cmacsClick: EventEmitter<CmacsMenuItemDirective>;
    actualMode: CmacsMenuModeType;
    dir: Direction;
    private inlineCollapsed$;
    private mode$;
    private destroy$;
    private listOfOpenedCmacsSubMenuComponent;
    setInlineCollapsed(inlineCollapsed: boolean): void;
    updateInlineCollapse(): void;
    constructor(nzMenuService: MenuService, isMenuInsideDropDown: boolean, cdr: ChangeDetectorRef, directionality: Directionality);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsMenuDirective, [null, null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CmacsMenuDirective, "[cmacs-menu]", ["cmacsMenu"], { "inlineIndent": "inlineIndent"; "theme": "theme"; "mode": "mode"; "inlineCollapsed": "inlineCollapsed"; "selectable": "selectable"; }, { "cmacsClick": "cmacsClick"; }, ["listOfNzMenuItemDirective", "listOfCmacsSubMenuComponent"]>;
}
//# sourceMappingURL=menu.directive.d.ts.map