import { ChangeDetectorRef, ComponentFactory, ComponentFactoryResolver, ElementRef, EventEmitter, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NgStyleInterface, NzTSType } from 'ng-zorro-antd/core/types';
import { Directionality } from '@angular/cdk/bidi';
import { NzTooltipTrigger, NzTooltipBaseDirective } from '../cmacs-tooltip/base';
import { CmacsToolTipComponent } from '../cmacs-tooltip/tooltip';
import * as i0 from "@angular/core";
export declare class CmacsPopoverDirective extends NzTooltipBaseDirective {
    noAnimation?: NzNoAnimationDirective;
    title?: NzTSType;
    content?: NzTSType;
    directiveTitle?: NzTSType | null;
    trigger?: NzTooltipTrigger;
    placement?: string | string[];
    origin?: ElementRef<HTMLElement>;
    visible?: boolean;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    overlayClassName?: string;
    overlayStyle?: NgStyleInterface;
    readonly visibleChange: EventEmitter<boolean>;
    componentFactory: ComponentFactory<CmacsPopoverComponent>;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, noAnimation?: NzNoAnimationDirective);
    static ɵfac: i0.ɵɵFactoryDef<CmacsPopoverDirective, [null, null, null, null, { optional: true; host: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CmacsPopoverDirective, "[cmacs-popover]", ["cmacsPopover"], { "title": "cmacsPopoverTitle"; "content": "cmacsPopoverContent"; "directiveTitle": "cmacs-popover"; "trigger": "cmacsPopoverTrigger"; "placement": "cmacsPopoverPlacement"; "origin": "cmacsPopoverOrigin"; "visible": "cmacsPopoverVisible"; "mouseEnterDelay": "cmacsPopoverMouseEnterDelay"; "mouseLeaveDelay": "cmacsPopoverMouseLeaveDelay"; "overlayClassName": "cmacsPopoverOverlayClassName"; "overlayStyle": "cmacsPopoverOverlayStyle"; }, { "visibleChange": "cmacsPopoverVisibleChange"; }, never>;
}
export declare class CmacsPopoverComponent extends CmacsToolTipComponent {
    noAnimation?: NzNoAnimationDirective;
    _prefix: string;
    constructor(cdr: ChangeDetectorRef, directionality: Directionality, noAnimation?: NzNoAnimationDirective);
    protected isEmpty(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<CmacsPopoverComponent, [null, { optional: true; }, { optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsPopoverComponent, "cmacs-popover", ["CmacsPopoverComponent"], {}, {}, never, never>;
}
//# sourceMappingURL=popover.d.ts.map