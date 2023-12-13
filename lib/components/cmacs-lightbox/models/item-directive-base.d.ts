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
    static ɵfac: i0.ɵɵFactoryDeclaration<ItemDirectiveBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ItemDirectiveBase, never, never, { "container": { "alias": "container"; "required": false; }; "openOnClick": { "alias": "openOnClick"; "required": false; }; "src": { "alias": "src"; "required": false; }; "title": { "alias": "title"; "required": false; }; "xsBreakpoint": { "alias": "xs-breakpoint"; "required": false; }; "smBreakpoint": { "alias": "sm-breakpoint"; "required": false; }; "mdBreakpoint": { "alias": "md-breakpoint"; "required": false; }; "lgBreakpoint": { "alias": "lg-breakpoint"; "required": false; }; "xsSrc": { "alias": "xs-src"; "required": false; }; "smSrc": { "alias": "sm-src"; "required": false; }; "mdSrc": { "alias": "md-src"; "required": false; }; "lgSrc": { "alias": "lg-src"; "required": false; }; "xlSrc": { "alias": "xl-src"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=item-directive-base.d.ts.map