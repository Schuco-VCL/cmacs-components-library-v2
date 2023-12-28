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
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsGeneralChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsGeneralChartComponent, "cmacs-general-chart", never, { "data": { "alias": "data"; "required": false; }; "chartSelected": { "alias": "chartSelected"; "required": false; }; "dataType": { "alias": "dataType"; "required": false; }; "showXAxis": { "alias": "showXAxis"; "required": false; }; "showXAxisLabel": { "alias": "showXAxisLabel"; "required": false; }; "xAxisLabel": { "alias": "xAxisLabel"; "required": false; }; "showYAxis": { "alias": "showYAxis"; "required": false; }; "showYAxisLabel": { "alias": "showYAxisLabel"; "required": false; }; "yAxisLabel": { "alias": "yAxisLabel"; "required": false; }; "showLegend": { "alias": "showLegend"; "required": false; }; "legendTitle": { "alias": "legendTitle"; "required": false; }; "customTooltipTemplate": { "alias": "customTooltipTemplate"; "required": false; }; "view": { "alias": "view"; "required": false; }; "colorScheme": { "alias": "colorScheme"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=cmacs-general-chart.component.d.ts.map