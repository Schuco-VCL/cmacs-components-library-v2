import { AfterViewInit, ElementRef, OnChanges, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { KPI } from '../cmacs-kpi/cmacs-kpi.component';
import { GridConfig } from '../core/interfaces/grid-config';
import * as i0 from "@angular/core";
interface RowInput {
    id: string;
    label: string;
    values: number[];
    isChild: boolean;
    children: RowInput[];
    color: string;
}
interface ColumnInput {
    name: string;
    nameKpi: string;
    hasKpi: boolean;
}
export declare class CmacsKpiVsComponent implements OnInit, OnChanges, AfterViewInit {
    private renderer;
    private elementRef;
    columnTemplate: TemplateRef<{}>;
    view: number[];
    data: {
        columns: ColumnInput[];
        rows: RowInput[];
    };
    dataTable: any[];
    configuration: GridConfig;
    scrollY: number;
    scroll: {
        x: string;
        y: string;
    };
    p: number;
    col2: number;
    col3: number;
    loading: boolean;
    showChart: boolean;
    minWidth: number;
    listKpi: KPI[][];
    kpiColumns: ColumnInput[];
    colorsScheme: string[];
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(): void;
    setScroll(): void;
    resize(): void;
    ngAfterViewInit(): void;
    fillKPI(): void;
    setConfiguration(): void;
    setData(): void;
    getItemTable(x: RowInput): any;
    static ɵfac: i0.ɵɵFactoryDef<CmacsKpiVsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsKpiVsComponent, "cmacs-kpi-vs", never, { "view": "view"; "data": "data"; }, {}, never, never>;
}
export {};
//# sourceMappingURL=cmacs-kpi-vs.component.d.ts.map