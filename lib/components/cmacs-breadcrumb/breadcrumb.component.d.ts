import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ElementRef, Injector, NgZone, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Params } from '@angular/router';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export interface BreadcrumbOption {
    label: string;
    params: Params;
    url: string;
}
export declare class CmacsBreadCrumbComponent implements OnInit, OnDestroy {
    private injector;
    private ngZone;
    private cdr;
    private elementRef;
    private renderer;
    private directionality;
    static ngAcceptInputType_autoGenerate: BooleanInput;
    autoGenerate: boolean;
    separator: string | TemplateRef<void> | null;
    routeLabel: string;
    routeLabelFn: (label: string) => string;
    breadcrumbs: BreadcrumbOption[];
    dir: Direction;
    private destroy$;
    constructor(injector: Injector, ngZone: NgZone, cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2, directionality: Directionality);
    ngOnInit(): void;
    ngOnDestroy(): void;
    navigate(url: string, e: MouseEvent): void;
    private registerRouterChange;
    private getBreadcrumbs;
    private prepareComponentForRtl;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsBreadCrumbComponent, [null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsBreadCrumbComponent, "cmacs-breadcrumb", ["cmacsBreadcrumb"], { "autoGenerate": { "alias": "autoGenerate"; "required": false; }; "separator": { "alias": "separator"; "required": false; }; "routeLabel": { "alias": "routeLabel"; "required": false; }; "routeLabelFn": { "alias": "routeLabelFn"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=breadcrumb.component.d.ts.map