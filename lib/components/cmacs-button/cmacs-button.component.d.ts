import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import * as i0 from "@angular/core";
/**
 * @deprecated `danger` not supported, use `nzDanger` instead
 * @breaking-change 12.0.0
 */
declare type NzLegacyButtonType = 'primary' | 'default' | 'dashed' | 'danger' | 'link' | 'text' | null;
export declare type NzButtonType = NzLegacyButtonType;
export declare type NzButtonShape = 'circle' | 'round' | null;
export declare type NzButtonSize = 'large' | 'default' | 'small';
export declare class CmacsButtonComponent implements AfterContentInit, AfterViewInit, OnInit, OnDestroy, OnChanges {
    private elementRef;
    private cdr;
    private renderer;
    nzConfigService: NzConfigService;
    private directionality;
    nzIconDirectiveElement: ElementRef;
    block: boolean;
    ghost: boolean;
    search: boolean;
    loading: boolean;
    danger: boolean;
    disabled: boolean;
    tabIndex: number | string | null;
    type: NzButtonType;
    shape: NzButtonShape;
    size: NzButtonSize;
    action: boolean;
    dir: Direction;
    private destroy$;
    private loading$;
    contentElement: ElementRef;
    insertSpan(nodes: NodeList, renderer: Renderer2): void;
    assertIconOnly(element: HTMLButtonElement, renderer: Renderer2): void;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, renderer: Renderer2, nzConfigService: NzConfigService, directionality: Directionality);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    imageWrapper(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    hideBtn(): void;
    showBtn(): void;
    disabledBtn(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsButtonComponent, [null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsButtonComponent, "button[cmacs-button], a[cmacs-button]", ["cmacsButton"], { "block": "block"; "ghost": "ghost"; "search": "search"; "loading": "loading"; "danger": "danger"; "disabled": "disabled"; "tabIndex": "tabIndex"; "type": "type"; "shape": "shape"; "size": "size"; "action": "action"; }, {}, ["nzIconDirectiveElement"], ["*"]>;
}
export {};
//# sourceMappingURL=cmacs-button.component.d.ts.map