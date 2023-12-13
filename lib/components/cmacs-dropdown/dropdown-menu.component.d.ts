import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterContentInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { IndexableObject, NzSafeAny } from 'ng-zorro-antd/core/types';
import { MenuService } from '../cmacs-menu/menu.service';
import { BehaviorSubject, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export type NzPlacementType = 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
export declare class CmacsDropdownMenuComponent implements AfterContentInit, OnDestroy, OnInit {
    private cdr;
    private elementRef;
    private renderer;
    viewContainerRef: ViewContainerRef;
    nzMenuService: MenuService;
    private directionality;
    noAnimation?: NzNoAnimationDirective;
    mouseState$: BehaviorSubject<boolean>;
    isChildSubMenuOpen$: BehaviorSubject<boolean>;
    descendantMenuItemClick$: Subject<any>;
    overlayClassName: string;
    overlayStyle: IndexableObject;
    templateRef: TemplateRef<NzSafeAny>;
    cmacsOpen: boolean;
    dir: Direction;
    private destroy$;
    setMouseState(visible: boolean): void;
    setValue<T extends keyof CmacsDropdownMenuComponent>(key: T, value: this[T]): void;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2, viewContainerRef: ViewContainerRef, nzMenuService: MenuService, directionality: Directionality, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsDropdownMenuComponent, [null, null, null, null, null, { optional: true; }, { optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsDropdownMenuComponent, "cmacs-dropdown-menu", ["cmacsDropdownMenu"], { "cmacsOpen": { "alias": "cmacsOpen"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=dropdown-menu.component.d.ts.map