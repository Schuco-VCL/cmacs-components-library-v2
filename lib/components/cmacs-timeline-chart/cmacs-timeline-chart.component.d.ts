import { OnInit, OnChanges, SimpleChanges, ChangeDetectorRef, OnDestroy } from '@angular/core';
import 'moment/locale/en-ie';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export declare class CmacsTimelineChartComponent implements OnInit, OnChanges, OnDestroy {
    private cdr;
    private i18n;
    legendLabels: any[];
    colNames: Array<any>;
    data: Array<any>;
    width: number;
    height: number;
    private destroy$;
    options: {
        colors: string[];
        backgroundColor: string;
        avoidOverlappingGridLines: boolean;
        tooltip: {
            isHtml: boolean;
        };
        timeline: {
            rowLabelStyle: {
                color: string;
                fontName: string;
                fontSize: string;
            };
        };
    };
    set colors(colors: any);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    checkLang(): void;
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService);
    operateData(): void;
    createCustomTooltip(data: any, color: any): string;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsTimelineChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsTimelineChartComponent, "cmacs-timeline-chart", never, { "legendLabels": "legendLabels"; "colNames": "colNames"; "data": "data"; "width": "width"; "height": "height"; "colors": "colors"; }, {}, never, never>;
}
//# sourceMappingURL=cmacs-timeline-chart.component.d.ts.map