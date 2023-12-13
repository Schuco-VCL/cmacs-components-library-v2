import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, Renderer2, ViewContainerRef } from '@angular/core';
import { NzConfigKey, NzConfigService } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { BooleanInput, NgStyleInterface, NzTSType } from 'ng-zorro-antd/core/types';
import { CmacsToolTipComponent } from '../cmacs-tooltip/tooltip';
import { NzTooltipBaseDirective, NzTooltipTrigger, PropertyMapping } from './../cmacs-tooltip/base';
import * as i0 from "@angular/core";
export declare class CmacsPopoverDirective extends NzTooltipBaseDirective {
    static ngAcceptInputType_cmacsPopoverArrowPointAtCenter: BooleanInput;
    readonly _nzModuleName: NzConfigKey;
    arrowPointAtCenter?: boolean;
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
    cmacsPopoverBackdrop?: boolean;
    readonly visibleChange: EventEmitter<boolean>;
    componentRef: ComponentRef<CmacsPopoverComponent>;
    protected getProxyPropertyMap(): PropertyMapping;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, noAnimation?: NzNoAnimationDirective, nzConfigService?: NzConfigService);
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsPopoverDirective, [null, null, null, null, { optional: true; host: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CmacsPopoverDirective, "[cmacs-popover]", ["cmacsPopover"], { "arrowPointAtCenter": { "alias": "cmacsPopoverArrowPointAtCenter"; "required": false; }; "title": { "alias": "cmacsPopoverTitle"; "required": false; }; "content": { "alias": "cmacsPopoverContent"; "required": false; }; "directiveTitle": { "alias": "cmacs-popover"; "required": false; }; "trigger": { "alias": "cmacsPopoverTrigger"; "required": false; }; "placement": { "alias": "cmacsPopoverPlacement"; "required": false; }; "origin": { "alias": "cmacsPopoverOrigin"; "required": false; }; "visible": { "alias": "cmacsPopoverVisible"; "required": false; }; "mouseEnterDelay": { "alias": "cmacsPopoverMouseEnterDelay"; "required": false; }; "mouseLeaveDelay": { "alias": "cmacsPopoverMouseLeaveDelay"; "required": false; }; "overlayClassName": { "alias": "cmacsPopoverOverlayClassName"; "required": false; }; "overlayStyle": { "alias": "cmacsPopoverOverlayStyle"; "required": false; }; "cmacsPopoverBackdrop": { "alias": "cmacsPopoverBackdrop"; "required": false; }; }, { "visibleChange": "cmacsPopoverVisibleChange"; }, never, never, false, never>;
}
export declare class CmacsPopoverComponent extends CmacsToolTipComponent {
    _prefix: string;
    constructor(cdr: ChangeDetectorRef, directionality: Directionality, noAnimation?: NzNoAnimationDirective);
    get hasBackdrop(): boolean;
    protected isEmpty(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsPopoverComponent, [null, { optional: true; }, { optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsPopoverComponent, "cmacs-popover", ["cmacsPopoverComponent"], {}, {}, never, never, false, never>;
}
//# sourceMappingURL=popover.d.ts.map