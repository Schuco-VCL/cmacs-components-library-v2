import { Direction, Directionality } from '@angular/cdk/bidi';
import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { CmacsMenuModeType, CmacsMenuThemeType } from './menu.types';
import * as i0 from "@angular/core";
export declare class NzSubmenuNoneInlineChildComponent implements OnDestroy, OnInit, OnChanges {
    private elementRef;
    private directionality;
    menuClass: string;
    theme: CmacsMenuThemeType;
    templateOutlet: TemplateRef<NzSafeAny> | null;
    isMenuInsideDropDown: boolean;
    mode: CmacsMenuModeType;
    position: string;
    disabled: boolean;
    open: boolean;
    readonly subMenuMouseState: EventEmitter<boolean>;
    constructor(elementRef: ElementRef, directionality: Directionality);
    setMouseState(state: boolean): void;
    expandState: string;
    dir: Direction;
    private destroy$;
    ngOnDestroy(): void;
    calcMotionState(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzSubmenuNoneInlineChildComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NzSubmenuNoneInlineChildComponent, "[cmacs-submenu-none-inline-child]", ["cmacsSubmenuNoneInlineChild"], { "menuClass": { "alias": "menuClass"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; "templateOutlet": { "alias": "templateOutlet"; "required": false; }; "isMenuInsideDropDown": { "alias": "isMenuInsideDropDown"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "position": { "alias": "position"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "open": { "alias": "open"; "required": false; }; }, { "subMenuMouseState": "subMenuMouseState"; }, never, never, false, never>;
}
//# sourceMappingURL=submenu-non-inline-child.component.d.ts.map