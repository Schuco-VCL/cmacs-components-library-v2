import { OnInit, OnChanges, SimpleChanges, ChangeDetectorRef, OnDestroy } from '@angular/core';
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
    showMinAxis: boolean;
    private destroy$;
    options: any;
    set colors(colors: any);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    checkLang(): void;
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService);
    operateData(): void;
    createCustomTooltip(data: any, color: any): string;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsTimelineChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsTimelineChartComponent, "cmacs-timeline-chart", never, { "legendLabels": { "alias": "legendLabels"; "required": false; }; "colNames": { "alias": "colNames"; "required": false; }; "data": { "alias": "data"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "showMinAxis": { "alias": "showMinAxis"; "required": false; }; "colors": { "alias": "colors"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=cmacs-timeline-chart.component.d.ts.map