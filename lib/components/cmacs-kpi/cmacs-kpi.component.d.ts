import { ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import * as i0 from "@angular/core";
export declare const KPI_COLORS: string[];
export declare const KPI_PRIORITY_COLORS: {
    high: string;
    medium: string;
    low: string;
};
export interface KPI {
    count: number;
    description: string;
    priority?: 'low' | 'high' | 'medium';
}
export declare class CmacsKpiComponent implements AfterViewInit {
    private sanitizer;
    private cdr;
    showLegend: boolean;
    data: KPI[];
    title: string;
    priority: boolean;
    type: 'line' | 'doughnut';
    width: number;
    showTotalCount: boolean;
    fixed: number;
    canvasImgRef: ElementRef;
    constructor(sanitizer: DomSanitizer, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    getColoredDataPriority(): any[];
    drawPieSlice(ctx: any, centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number, color: any): void;
    drawLine(ctx: any, startX: number, startY: number, endX: number, endY: number): void;
    drawArc(ctx: any, centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number): void;
    sanitizeStyle(style: string): import("@angular/platform-browser").SafeStyle;
    getTotalCount(): number;
    getWidth(count: number): number;
    getTotalWidth(): number;
    getColoredData(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsKpiComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsKpiComponent, "cmacs-kpi", ["cmacsKpi"], { "showLegend": { "alias": "showLegend"; "required": false; }; "data": { "alias": "data"; "required": false; }; "title": { "alias": "title"; "required": false; }; "priority": { "alias": "priority"; "required": false; }; "type": { "alias": "type"; "required": false; }; "width": { "alias": "width"; "required": false; }; "showTotalCount": { "alias": "showTotalCount"; "required": false; }; "fixed": { "alias": "fixed"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=cmacs-kpi.component.d.ts.map