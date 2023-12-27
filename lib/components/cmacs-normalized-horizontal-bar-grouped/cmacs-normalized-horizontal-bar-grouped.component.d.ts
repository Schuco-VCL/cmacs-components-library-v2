import { OnInit, EventEmitter, OnChanges } from '@angular/core';
import { ChartDataMulti } from '../core/interfaces/chart-data-interface';
import { UtilService } from '../core/services/util.service';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
import * as i0 from "@angular/core";
export declare class CmacsNormalizedHorizontalBarGroupedComponent implements OnInit, OnChanges {
    private util;
    clickMenu: EventEmitter<any>;
    data: ChartDataMulti[];
    colorScheme: {
        domain: string[];
    };
    id: any;
    legend: string[];
    selectList: string[];
    selectedValue: string;
    chartWidth: number;
    chartHeight: number;
    minWidth: number;
    minHeight: number;
    pw: number;
    ph: number;
    view: number[];
    constructor(util: UtilService);
    ngOnInit(): void;
    ngOnChanges(): void;
    menuClick(type: WidgetActionType): void;
    drawCanvas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsNormalizedHorizontalBarGroupedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsNormalizedHorizontalBarGroupedComponent, "cmacs-normalized-horizontal-bar-grouped", never, { "data": { "alias": "data"; "required": false; }; "colorScheme": { "alias": "colorScheme"; "required": false; }; "view": { "alias": "view"; "required": false; }; }, { "clickMenu": "clickMenu"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-normalized-horizontal-bar-grouped.component.d.ts.map