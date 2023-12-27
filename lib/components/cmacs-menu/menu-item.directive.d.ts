import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { MenuService } from './menu.service';
import { NzSubmenuService } from './submenu.service';
import * as i0 from "@angular/core";
export declare class CmacsMenuItemDirective implements OnInit, OnChanges, OnDestroy, AfterContentInit {
    private nzMenuService;
    private cdr;
    private nzSubmenuService;
    isMenuInsideDropDown: boolean;
    private directionality;
    private routerLink?;
    private routerLinkWithHref?;
    private router?;
    private destroy$;
    level: number;
    selected$: Subject<boolean>;
    inlinePaddingLeft: number | null;
    dir: Direction;
    paddingLeft?: number;
    disabled: boolean;
    selected: boolean;
    danger: boolean;
    matchRouterExact: boolean;
    matchRouter: boolean;
    listOfRouterLink: QueryList<RouterLink>;
    listOfRouterLinkWithHref: QueryList<RouterLink>;
    /** clear all item selected status except this */
    clickMenuItem(e: MouseEvent): void;
    setSelectedState(value: boolean): void;
    private updateRouterActive;
    private hasActiveLinks;
    private isLinkActive;
    constructor(nzMenuService: MenuService, cdr: ChangeDetectorRef, nzSubmenuService: NzSubmenuService, isMenuInsideDropDown: boolean, directionality: Directionality, routerLink?: RouterLink, routerLinkWithHref?: RouterLink, router?: Router);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsMenuItemDirective, [null, null, { optional: true; }, null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CmacsMenuItemDirective, "[cmacs-menu-item]", ["cmacsMenuItem"], { "paddingLeft": { "alias": "paddingLeft"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "danger": { "alias": "danger"; "required": false; }; "matchRouterExact": { "alias": "matchRouterExact"; "required": false; }; "matchRouter": { "alias": "matchRouter"; "required": false; }; }, {}, ["listOfRouterLink", "listOfRouterLinkWithHref"], never, false, never>;
}
//# sourceMappingURL=menu-item.directive.d.ts.map