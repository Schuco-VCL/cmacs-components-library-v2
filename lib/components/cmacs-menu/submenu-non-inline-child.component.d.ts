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
    static ɵfac: i0.ɵɵFactoryDef<NzSubmenuNoneInlineChildComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzSubmenuNoneInlineChildComponent, "[cmacs-submenu-none-inline-child]", ["cmacsSubmenuNoneInlineChild"], { "menuClass": "menuClass"; "theme": "theme"; "templateOutlet": "templateOutlet"; "isMenuInsideDropDown": "isMenuInsideDropDown"; "mode": "mode"; "position": "position"; "disabled": "disabled"; "open": "open"; }, { "subMenuMouseState": "subMenuMouseState"; }, never, never>;
}
//# sourceMappingURL=submenu-non-inline-child.component.d.ts.map