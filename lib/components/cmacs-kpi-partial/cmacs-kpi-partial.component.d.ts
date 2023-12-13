import { AfterViewInit, ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { GridConfig } from '../core/interfaces/grid-config';
import { KPI } from '../cmacs-kpi/cmacs-kpi.component';
import * as i0 from "@angular/core";
interface KPIPartialRow {
    key: string;
    name: string;
    date: string | null;
    children: KPIPartialRow[];
}
interface KPIPartial {
    total: number;
    part: number;
    partLabel: string;
    color: string;
    children: KPIPartialRow[];
}
export declare class CmacsKpiPartialComponent implements OnInit, OnChanges, AfterViewInit {
    private renderer;
    private elementRef;
    view: number[];
    data: KPIPartial;
    columnsHeader: string[];
    dataTable: any[];
    configuration: GridConfig;
    scrollY: number;
    scroll: {
        x: string;
        y: string;
    };
    p: number;
    loading: boolean;
    col2: number;
    col3: number;
    minWidth: number;
    colorsScheme: string[];
    kpi: KPI[];
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(): void;
    setScroll(): void;
    resize(): void;
    ngAfterViewInit(): void;
    fillKPI(): void;
    setConfiguration(): void;
    setData(): void;
    getItemTable(x: KPIPartialRow): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsKpiPartialComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsKpiPartialComponent, "cmacs-kpi-partial", never, { "view": { "alias": "view"; "required": false; }; "data": { "alias": "data"; "required": false; }; "columnsHeader": { "alias": "columnsHeader"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
//# sourceMappingURL=cmacs-kpi-partial.component.d.ts.map