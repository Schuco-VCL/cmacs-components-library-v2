import { ElementRef, OnChanges } from '@angular/core';
import { KPI } from '../cmacs-kpi/cmacs-kpi.component';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class CmacsKPIOverviewComponent implements OnChanges {
    private sanitizer;
    showLegend: boolean;
    data: KPI[];
    title: string;
    titleKPI: string;
    titleValue: number;
    view: number[];
    fixed: number;
    minWidth: number;
    fontChartNumber: number;
    chartWidth: number;
    p: number;
    type: string;
    colors: string[];
    canvasRef: ElementRef;
    constructor(sanitizer: DomSanitizer);
    ngOnChanges(): void;
    drawPieSlice(ctx: any, centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number, color: any): void;
    drawArc(ctx: any, centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number): void;
    sanitizeStyle(style: string): any;
    getTotalCount(): number;
    getWidth(count: number): number;
    getColoredData(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsKPIOverviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsKPIOverviewComponent, "cmacs-kpi-overview", never, { "showLegend": { "alias": "showLegend"; "required": false; }; "data": { "alias": "data"; "required": false; }; "title": { "alias": "title"; "required": false; }; "titleKPI": { "alias": "titleKPI"; "required": false; }; "titleValue": { "alias": "titleValue"; "required": false; }; "view": { "alias": "view"; "required": false; }; "fixed": { "alias": "fixed"; "required": false; }; "colors": { "alias": "colors"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=cmacs-kpioverview.component.d.ts.map