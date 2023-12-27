import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import * as i0 from "@angular/core";
/**
 * @deprecated `danger` not supported, use `nzDanger` instead
 * @breaking-change 12.0.0
 */
type NzLegacyButtonType = 'primary' | 'default' | 'dashed' | 'danger' | 'link' | 'text' | null;
export type NzButtonType = NzLegacyButtonType;
export type NzButtonShape = 'circle' | 'round' | null;
export type NzButtonSize = 'large' | 'default' | 'small';
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
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsButtonComponent, [null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsButtonComponent, "button[cmacs-button], a[cmacs-button]", ["cmacsButton"], { "block": { "alias": "block"; "required": false; }; "ghost": { "alias": "ghost"; "required": false; }; "search": { "alias": "search"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "danger": { "alias": "danger"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "tabIndex": { "alias": "tabIndex"; "required": false; }; "type": { "alias": "type"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "size": { "alias": "size"; "required": false; }; "action": { "alias": "action"; "required": false; }; }, {}, ["nzIconDirectiveElement"], ["*"], false, never>;
}
export {};
//# sourceMappingURL=cmacs-button.component.d.ts.map