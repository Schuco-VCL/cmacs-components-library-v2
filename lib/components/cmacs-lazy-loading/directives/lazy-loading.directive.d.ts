import { OnInit, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { DoomSensorService } from '../services/doom-sensor.service';
import * as i0 from "@angular/core";
export declare class LazyLoadingDirective implements OnInit, AfterViewInit, OnDestroy {
    private readonly _doomSensorService;
    private readonly _elementRef;
    xsBreakpoint: number;
    smBreakpoint: number;
    mdBreakpoint: number;
    lgBreakpoint: number;
    xsSrc: string;
    smSrc: string;
    mdSrc: string;
    lgSrc: string;
    xlSrc: string;
    src: string;
    load: boolean;
    private _currentResolution;
    constructor(_doomSensorService: DoomSensorService, _elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private _setSrc;
    private _isInViewPort;
    static ɵfac: i0.ɵɵFactoryDeclaration<LazyLoadingDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LazyLoadingDirective, "img[lazy-loading]", never, { "xsBreakpoint": { "alias": "xs-breakpoint"; "required": false; }; "smBreakpoint": { "alias": "sm-breakpoint"; "required": false; }; "mdBreakpoint": { "alias": "md-breakpoint"; "required": false; }; "lgBreakpoint": { "alias": "lg-breakpoint"; "required": false; }; "xsSrc": { "alias": "xs-src"; "required": false; }; "smSrc": { "alias": "sm-src"; "required": false; }; "mdSrc": { "alias": "md-src"; "required": false; }; "lgSrc": { "alias": "lg-src"; "required": false; }; "xlSrc": { "alias": "xl-src"; "required": false; }; "src": { "alias": "src"; "required": false; }; "load": { "alias": "load"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=lazy-loading.directive.d.ts.map