import { ChangeDetectorRef, ComponentFactory, ComponentFactoryResolver, ElementRef, EventEmitter, Renderer2, ViewContainerRef } from '@angular/core';
import { NzPresetColor } from 'ng-zorro-antd/core/color';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NgStyleInterface, NzTSType } from 'ng-zorro-antd/core/types';
import { Directionality } from '@angular/cdk/bidi';
import { CmacsTooltipBaseComponent, NzTooltipBaseDirective, NzTooltipTrigger, PropertyMapping } from './base';
import * as i0 from "@angular/core";
export declare class CmacsTooltipDirective extends NzTooltipBaseDirective {
    title?: NzTSType | null;
    directiveTitle?: NzTSType | null;
    trigger?: NzTooltipTrigger;
    placement?: string | string[];
    origin?: ElementRef<HTMLElement>;
    visible?: boolean;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    overlayClassName?: string;
    overlayStyle?: NgStyleInterface;
    cmacsTooltipColor?: string;
    readonly visibleChange: EventEmitter<boolean>;
    componentFactory: ComponentFactory<CmacsToolTipComponent>;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, noAnimation?: NzNoAnimationDirective);
    protected getProxyPropertyMap(): PropertyMapping;
    static ɵfac: i0.ɵɵFactoryDef<CmacsTooltipDirective, [null, null, null, null, { optional: true; host: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CmacsTooltipDirective, "[cmacs-tooltip]", ["cmacsTooltip"], { "title": "cmacsTooltipTitle"; "directiveTitle": "cmacs-tooltip"; "trigger": "cmacsTooltipTrigger"; "placement": "cmacsTooltipPlacement"; "origin": "cmacsTooltipOrigin"; "visible": "cmacsTooltipVisible"; "mouseEnterDelay": "cmacsTooltipMouseEnterDelay"; "mouseLeaveDelay": "cmacsTooltipMouseLeaveDelay"; "overlayClassName": "cmacsTooltipOverlayClassName"; "overlayStyle": "cmacsTooltipOverlayStyle"; "cmacsTooltipColor": "cmacsTooltipColor"; }, { "visibleChange": "cmacsTooltipVisibleChange"; }, never>;
}
export declare class CmacsToolTipComponent extends CmacsTooltipBaseComponent {
    noAnimation?: NzNoAnimationDirective;
    cmacsTitle: NzTSType | null;
    cmacsColor?: string | NzPresetColor;
    _contentStyleMap: NgStyleInterface;
    constructor(cdr: ChangeDetectorRef, directionality: Directionality, noAnimation?: NzNoAnimationDirective);
    protected isEmpty(): boolean;
    updateStyles(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsToolTipComponent, [null, { optional: true; }, { optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsToolTipComponent, "cmacs-tooltip", ["cmacsTooltipComponent"], {}, {}, never, never>;
}
//# sourceMappingURL=tooltip.d.ts.map