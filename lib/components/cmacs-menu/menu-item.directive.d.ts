import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
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
    listOfRouterLinkWithHref: QueryList<RouterLinkWithHref>;
    /** clear all item selected status except this */
    clickMenuItem(e: MouseEvent): void;
    setSelectedState(value: boolean): void;
    private updateRouterActive;
    private hasActiveLinks;
    private isLinkActive;
    constructor(nzMenuService: MenuService, cdr: ChangeDetectorRef, nzSubmenuService: NzSubmenuService, isMenuInsideDropDown: boolean, directionality: Directionality, routerLink?: RouterLink, routerLinkWithHref?: RouterLinkWithHref, router?: Router);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsMenuItemDirective, [null, null, { optional: true; }, null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CmacsMenuItemDirective, "[cmacs-menu-item]", ["cmacsMenuItem"], { "paddingLeft": "paddingLeft"; "disabled": "disabled"; "selected": "selected"; "danger": "danger"; "matchRouterExact": "matchRouterExact"; "matchRouter": "matchRouter"; }, {}, ["listOfRouterLink", "listOfRouterLinkWithHref"]>;
}
//# sourceMappingURL=menu-item.directive.d.ts.map