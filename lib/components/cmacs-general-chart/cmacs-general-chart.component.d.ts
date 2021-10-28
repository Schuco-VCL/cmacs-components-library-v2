import { OnInit, TemplateRef } from '@angular/core';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
import { WidgetDataType } from '../core/enums/widget-type.enum';
import * as i0 from "@angular/core";
export declare class CmacsGeneralChartComponent implements OnInit {
    data: any[];
    chartSelected: WidgetActionType;
    dataType: WidgetDataType;
    showXAxis: boolean;
    showXAxisLabel: boolean;
    xAxisLabel: string;
    showYAxis: boolean;
    showYAxisLabel: boolean;
    yAxisLabel: string;
    showLegend: boolean;
    legendTitle: string;
    customTooltipTemplate: TemplateRef<any>;
    view: number[];
    colorScheme: {
        domain: string[];
    };
    legendPosition: string;
    WidgetActionTypeEnum: typeof WidgetActionType;
    WidgetDataTypeEnum: typeof WidgetDataType;
    constructor();
    ngOnInit(): void;
    getLegendLabels(): any;
    isNull(el: any): boolean;
    isEmpty(el: any): boolean;
    menuClick(type: WidgetActionType): void;
    isChartTypeMenu(type: WidgetActionType): boolean;
    static ɵfac: i0.ɵɵFactoryDef<CmacsGeneralChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsGeneralChartComponent, "cmacs-general-chart", never, { "data": "data"; "chartSelected": "chartSelected"; "dataType": "dataType"; "showXAxis": "showXAxis"; "showXAxisLabel": "showXAxisLabel"; "xAxisLabel": "xAxisLabel"; "showYAxis": "showYAxis"; "showYAxisLabel": "showYAxisLabel"; "yAxisLabel": "yAxisLabel"; "showLegend": "showLegend"; "legendTitle": "legendTitle"; "customTooltipTemplate": "customTooltipTemplate"; "view": "view"; "colorScheme": "colorScheme"; }, {}, never, never>;
}
//# sourceMappingURL=cmacs-general-chart.component.d.ts.map