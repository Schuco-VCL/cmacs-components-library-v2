import { Direction, Directionality } from '@angular/cdk/bidi';
import { ElementRef, OnDestroy, OnInit, QueryList } from '@angular/core';
import { CmacsButtonComponent } from './cmacs-button.component';
import * as i0 from "@angular/core";
export declare type NzButtonGroupSize = 'large' | 'default' | 'small';
export declare class CmacsButtonGroupComponent implements OnInit, OnDestroy {
    private elementRef;
    private directionality;
    size: NzButtonGroupSize;
    overlap: boolean;
    disabled: boolean;
    disabledNav: boolean;
    dir: Direction;
    private destroy$;
    buttons: CmacsButtonComponent[];
    indexBtn: number;
    contentButtons: QueryList<CmacsButtonComponent>;
    constructor(elementRef: ElementRef, directionality: Directionality);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    moveLeft(): void;
    moveRight(): void;
    isDisableLeft(): boolean;
    isDisableRight(): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsButtonGroupComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsButtonGroupComponent, "cmacs-button-group", ["cmacsButtonGroup"], { "size": "size"; "overlap": "overlap"; "disabled": "disabled"; "disabledNav": "disabledNav"; }, {}, ["contentButtons"], ["*"]>;
}
//# sourceMappingURL=cmacs-button-group.component.d.ts.map