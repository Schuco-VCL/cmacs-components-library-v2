import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, Renderer2, ViewContainerRef } from '@angular/core';
import { NzPresetColor } from 'ng-zorro-antd/core/color';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { BooleanInput, NgStyleInterface, NzTSType } from 'ng-zorro-antd/core/types';
import { CmacsTooltipBaseComponent, NzTooltipBaseDirective, NzTooltipTrigger, PropertyMapping } from './base';
import * as i0 from "@angular/core";
export declare class CmacsTooltipDirective extends NzTooltipBaseDirective {
    static ngAcceptInputType_cmacsTooltipArrowPointAtCenter: BooleanInput;
    title?: NzTSType | null;
    titleContext?: Object | null;
    directiveTitle?: NzTSType | null;
    trigger?: NzTooltipTrigger;
    placement?: string | string[];
    origin?: ElementRef<HTMLElement>;
    visible?: boolean;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    overlayClassName?: string;
    overlayStyle?: NgStyleInterface;
    arrowPointAtCenter?: boolean;
    cmacsTooltipColor?: string;
    readonly visibleChange: EventEmitter<boolean>;
    componentRef: ComponentRef<CmacsToolTipComponent>;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, noAnimation?: NzNoAnimationDirective);
    protected getProxyPropertyMap(): PropertyMapping;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsTooltipDirective, [null, null, null, null, { optional: true; host: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CmacsTooltipDirective, "[cmacs-tooltip]", ["cmacsTooltip"], { "title": { "alias": "cmacsTooltipTitle"; "required": false; }; "titleContext": { "alias": "cmacsTooltipTitleContext"; "required": false; }; "directiveTitle": { "alias": "cmacs-tooltip"; "required": false; }; "trigger": { "alias": "cmacsTooltipTrigger"; "required": false; }; "placement": { "alias": "cmacsTooltipPlacement"; "required": false; }; "origin": { "alias": "cmacsTooltipOrigin"; "required": false; }; "visible": { "alias": "cmacsTooltipVisible"; "required": false; }; "mouseEnterDelay": { "alias": "cmacsTooltipMouseEnterDelay"; "required": false; }; "mouseLeaveDelay": { "alias": "cmacsTooltipMouseLeaveDelay"; "required": false; }; "overlayClassName": { "alias": "cmacsTooltipOverlayClassName"; "required": false; }; "overlayStyle": { "alias": "cmacsTooltipOverlayStyle"; "required": false; }; "arrowPointAtCenter": { "alias": "cmacsTooltipArrowPointAtCenter"; "required": false; }; "cmacsTooltipColor": { "alias": "cmacsTooltipColor"; "required": false; }; }, { "visibleChange": "cmacsTooltipVisibleChange"; }, never, never, false, never>;
}
export declare class CmacsToolTipComponent extends CmacsTooltipBaseComponent {
    cmacsTitle: NzTSType | null;
    cmacsTitleContext: Object | null;
    cmacsColor?: string | NzPresetColor;
    _contentStyleMap: NgStyleInterface;
    constructor(cdr: ChangeDetectorRef, directionality: Directionality, noAnimation?: NzNoAnimationDirective);
    protected isEmpty(): boolean;
    protected updateStyles(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsToolTipComponent, [null, { optional: true; }, { optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsToolTipComponent, "cmacs-tooltip", ["cmacsTooltipComponent"], {}, {}, never, never, false, never>;
}
//# sourceMappingURL=tooltip.d.ts.map