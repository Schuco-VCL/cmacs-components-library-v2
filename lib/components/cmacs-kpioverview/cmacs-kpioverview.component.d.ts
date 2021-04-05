import { ElementRef, OnChanges } from '@angular/core';
import { KPI } from '../cmacs-kpi/cmacs-kpi.component';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class CmacsKPIOverviewComponent implements OnChanges {
    private sanitizer;
    data: KPI[];
    title: string;
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
    sanitizeStyle(style: string): import("@angular/platform-browser").SafeStyle;
    getTotalCount(): number;
    getWidth(count: number): number;
    getColoredData(): any;
    static ɵfac: i0.ɵɵFactoryDef<CmacsKPIOverviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsKPIOverviewComponent, "cmacs-kpi-overview", never, { "data": "data"; "title": "title"; "view": "view"; "fixed": "fixed"; "colors": "colors"; }, {}, never, never>;
}
//# sourceMappingURL=cmacs-kpioverview.component.d.ts.map