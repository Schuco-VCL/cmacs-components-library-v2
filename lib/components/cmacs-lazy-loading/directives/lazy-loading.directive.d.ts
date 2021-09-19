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
    static ɵfac: i0.ɵɵFactoryDef<LazyLoadingDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<LazyLoadingDirective, "img[lazy-loading]", never, { "xsBreakpoint": "xs-breakpoint"; "smBreakpoint": "sm-breakpoint"; "mdBreakpoint": "md-breakpoint"; "lgBreakpoint": "lg-breakpoint"; "xsSrc": "xs-src"; "smSrc": "sm-src"; "mdSrc": "md-src"; "lgSrc": "lg-src"; "xlSrc": "xl-src"; "src": "src"; "load": "load"; }, {}, never>;
}
//# sourceMappingURL=lazy-loading.directive.d.ts.map