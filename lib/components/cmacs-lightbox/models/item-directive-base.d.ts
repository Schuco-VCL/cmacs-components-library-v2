import { LightboxService } from '../services/lightbox.service';
import { ElementRef } from '@angular/core';
import { Item } from './item';
import * as i0 from "@angular/core";
export declare abstract class ItemDirectiveBase {
    protected readonly lightboxService: LightboxService;
    protected readonly elementRef: ElementRef;
    protected container: string;
    protected openOnClick: boolean;
    protected src: string;
    protected title: string;
    protected xsBreakpoint: number;
    protected smBreakpoint: number;
    protected mdBreakpoint: number;
    protected lgBreakpoint: number;
    protected xsSrc: string;
    protected smSrc: string;
    protected mdSrc: string;
    protected lgSrc: string;
    protected xlSrc: string;
    protected item: Item;
    protected cursor: 'pointer' | 'default';
    protected visibility: 'hidden' | 'visible';
    protected _loaded: boolean;
    constructor(lightboxService: LightboxService, elementRef: ElementRef);
    protected onClick(event: Event): void;
    protected onLoad(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDef<ItemDirectiveBase, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ItemDirectiveBase, never, never, { "container": "container"; "openOnClick": "openOnClick"; "src": "src"; "title": "title"; "xsBreakpoint": "xs-breakpoint"; "smBreakpoint": "sm-breakpoint"; "mdBreakpoint": "md-breakpoint"; "lgBreakpoint": "lg-breakpoint"; "xsSrc": "xs-src"; "smSrc": "sm-src"; "mdSrc": "md-src"; "lgSrc": "lg-src"; "xlSrc": "xl-src"; }, {}, never>;
}
//# sourceMappingURL=item-directive-base.d.ts.map