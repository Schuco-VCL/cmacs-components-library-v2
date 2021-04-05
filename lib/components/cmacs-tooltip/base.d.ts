/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ComponentFactory, ComponentFactoryResolver, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NgClassInterface, NgStyleInterface, NzTSType } from 'ng-zorro-antd/core/types';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export interface PropertyMapping {
    [key: string]: [string, () => unknown];
}
export declare type NzTooltipTrigger = 'click' | 'focus' | 'hover' | null;
export declare abstract class NzTooltipBaseDirective implements OnChanges, OnDestroy, AfterViewInit {
    elementRef: ElementRef;
    protected hostView: ViewContainerRef;
    protected resolver: ComponentFactoryResolver;
    protected renderer: Renderer2;
    protected noAnimation?: NzNoAnimationDirective;
    directiveTitle?: NzTSType | null;
    directiveContent?: NzTSType | null;
    title?: NzTSType | null;
    content?: NzTSType | null;
    trigger?: NzTooltipTrigger;
    placement?: string | string[];
    origin?: ElementRef<HTMLElement>;
    visible?: boolean;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    overlayClassName?: string;
    overlayStyle?: NgStyleInterface;
    visibleChange: EventEmitter<boolean>;
    /**
     * For create tooltip dynamically. This should be override for each different component.
     */
    protected componentFactory: ComponentFactory<CmacsTooltipBaseComponent>;
    /**
     * This true title that would be used in other parts on this component.
     */
    protected get _title(): NzTSType | null;
    protected get _content(): NzTSType | null;
    protected get _trigger(): NzTooltipTrigger;
    protected get _placement(): string[];
    protected get _visible(): boolean;
    protected get _mouseEnterDelay(): number;
    protected get _mouseLeaveDelay(): number;
    protected get _overlayClassName(): string | null;
    protected get _overlayStyle(): NgStyleInterface | null;
    private internalVisible;
    protected getProxyPropertyMap(): PropertyMapping;
    component?: CmacsTooltipBaseComponent;
    protected readonly destroy$: Subject<void>;
    protected readonly triggerDisposables: Array<() => void>;
    private delayTimer?;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, noAnimation?: NzNoAnimationDirective);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    /**
     * Force the component to update its position.
     */
    updatePosition(): void;
    /**
     * Create a dynamic tooltip component. This method can be override.
     */
    protected createComponent(): void;
    protected registerTriggers(): void;
    private updatePropertiesByChanges;
    private updatePropertiesByKeys;
    private initProperties;
    private updateComponentValue;
    private delayEnterLeave;
    private removeTriggerListeners;
    private clearTogglingTimer;
    static ɵfac: i0.ɵɵFactoryDef<NzTooltipBaseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzTooltipBaseDirective, never, never, {}, {}, never>;
}
export declare abstract class CmacsTooltipBaseComponent implements OnDestroy, OnInit {
    cdr: ChangeDetectorRef;
    private directionality;
    noAnimation?: NzNoAnimationDirective;
    overlay: CdkConnectedOverlay;
    cmacsTitle: NzTSType | null;
    cmacsContent: NzTSType | null;
    cmacsOverlayClassName: string;
    cmacsOverlayStyle: NgStyleInterface;
    cmacsMouseEnterDelay?: number;
    cmacsMouseLeaveDelay?: number;
    cmacsVisibleChange: Subject<boolean>;
    set cmacsVisible(value: boolean);
    get cmacsVisible(): boolean;
    _visible: boolean;
    set cmacsTrigger(value: NzTooltipTrigger);
    get cmacsTrigger(): NzTooltipTrigger;
    protected _trigger: NzTooltipTrigger;
    set cmacsPlacement(value: string[]);
    preferredPlacement: string;
    origin: CdkOverlayOrigin;
    dir: Direction;
    _classMap: NgClassInterface;
    _hasBackdrop: boolean;
    _prefix: string;
    _positions: ConnectionPositionPair[];
    private destroy$;
    constructor(cdr: ChangeDetectorRef, directionality: Directionality, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    updateByDirective(): void;
    /**
     * Force the component to update its position.
     */
    updatePosition(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    updateStyles(): void;
    setOverlayOrigin(origin: CdkOverlayOrigin): void;
    onClickOutside(event: MouseEvent): void;
    /**
     * Hide the component while the content is empty.
     */
    private updateVisibilityByTitle;
    /**
     * Empty component cannot be opened.
     */
    protected abstract isEmpty(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<CmacsTooltipBaseComponent, [null, { optional: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CmacsTooltipBaseComponent, never, never, {}, {}, never>;
}
export declare function isTooltipEmpty(value: string | TemplateRef<void> | null): boolean;
//# sourceMappingURL=base.d.ts.map