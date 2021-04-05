import { Component, Input } from '@angular/core';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
import { WidgetDataType } from '../core/enums/widget-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@swimlane/ngx-charts";
function CmacsGeneralChartComponent_ngx_charts_bar_vertical_2d_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-bar-vertical-2d", 6);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("view", ctx_r0.view)("scheme", ctx_r0.colorScheme)("results", ctx_r0.data)("xAxis", ctx_r0.showXAxis)("yAxis", ctx_r0.showYAxis)("legend", ctx_r0.showLegend)("showXAxisLabel", ctx_r0.showXAxisLabel)("showYAxisLabel", ctx_r0.showYAxisLabel)("xAxisLabel", ctx_r0.xAxisLabel)("legendPosition", ctx_r0.legendPosition)("yAxisLabel", ctx_r0.yAxisLabel)("legendTitle", ctx_r0.legendTitle)("roundEdges", false)("trimXAxisTicks", true)("roundDomains", true)("groupPadding", 1)("barPadding", 1);
} }
function CmacsGeneralChartComponent_ngx_charts_bar_horizontal_2d_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-bar-horizontal-2d", 7);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("view", ctx_r1.view)("scheme", ctx_r1.colorScheme)("results", ctx_r1.data)("xAxis", ctx_r1.showXAxis)("yAxis", ctx_r1.showYAxis)("legend", ctx_r1.showLegend)("showXAxisLabel", ctx_r1.showXAxisLabel)("showYAxisLabel", ctx_r1.showYAxisLabel)("xAxisLabel", ctx_r1.xAxisLabel)("yAxisLabel", ctx_r1.yAxisLabel)("legendTitle", ctx_r1.legendTitle)("roundEdges", false)("trimXAxisTicks", true)("roundDomains", true)("legendPosition", ctx_r1.legendPosition)("groupPadding", 1)("barPadding", 1);
} }
function CmacsGeneralChartComponent_ngx_charts_line_chart_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-line-chart", 8);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("view", ctx_r2.view)("scheme", ctx_r2.colorScheme)("results", ctx_r2.data)("xAxis", ctx_r2.showXAxis)("yAxis", ctx_r2.showYAxis)("legend", ctx_r2.showLegend)("showXAxisLabel", ctx_r2.showXAxisLabel)("showYAxisLabel", ctx_r2.showYAxisLabel)("xAxisLabel", ctx_r2.xAxisLabel)("yAxisLabel", ctx_r2.yAxisLabel)("legendTitle", ctx_r2.legendTitle)("roundDomains", true)("legendPosition", ctx_r2.legendPosition);
} }
function CmacsGeneralChartComponent_ngx_charts_bar_vertical_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-bar-vertical", 9);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("view", ctx_r3.view)("scheme", ctx_r3.colorScheme)("results", ctx_r3.data)("xAxis", ctx_r3.showXAxis)("yAxis", ctx_r3.showYAxis)("legend", ctx_r3.showLegend)("showXAxisLabel", ctx_r3.showXAxisLabel)("showYAxisLabel", ctx_r3.showYAxisLabel)("xAxisLabel", ctx_r3.xAxisLabel)("yAxisLabel", ctx_r3.yAxisLabel)("legendTitle", ctx_r3.legendTitle)("roundEdges", false)("trimXAxisTicks", true)("roundDomains", true)("legendPosition", ctx_r3.legendPosition);
} }
function CmacsGeneralChartComponent_ngx_charts_bar_horizontal_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-bar-horizontal", 9);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("view", ctx_r4.view)("scheme", ctx_r4.colorScheme)("results", ctx_r4.data)("xAxis", ctx_r4.showXAxis)("yAxis", ctx_r4.showYAxis)("legend", ctx_r4.showLegend)("showXAxisLabel", ctx_r4.showXAxisLabel)("showYAxisLabel", ctx_r4.showYAxisLabel)("xAxisLabel", ctx_r4.xAxisLabel)("yAxisLabel", ctx_r4.yAxisLabel)("legendTitle", ctx_r4.legendTitle)("roundEdges", false)("trimXAxisTicks", true)("roundDomains", true)("legendPosition", ctx_r4.legendPosition);
} }
function CmacsGeneralChartComponent_ngx_charts_pie_chart_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-pie-chart", 10);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("view", ctx_r5.view)("scheme", ctx_r5.colorScheme)("results", ctx_r5.data)("legend", ctx_r5.showLegend)("legendTitle", ctx_r5.legendTitle)("doughnut", "true")("labels", "true")("legendPosition", ctx_r5.legendPosition);
} }
function CmacsGeneralChartComponent_ngx_charts_gauge_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-gauge", 11);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("view", ctx_r6.view)("scheme", ctx_r6.colorScheme)("results", ctx_r6.data)("legend", ctx_r6.showLegend)("legendTitle", ctx_r6.legendTitle)("legendPosition", ctx_r6.legendPosition)("bigSegments", 3)("smallSegments", 0);
} }
export class CmacsGeneralChartComponent {
    constructor() {
        // content
        this.data = [];
        // options
        this.chartSelected = WidgetActionType.verticalBarChart;
        this.dataType = WidgetDataType.single;
        this.showXAxis = true;
        this.showXAxisLabel = false;
        this.xAxisLabel = '';
        this.showYAxis = true;
        this.showYAxisLabel = false;
        this.yAxisLabel = '';
        this.showLegend = true;
        this.legendTitle = '';
        this.colorScheme = {
            domain: ['#5AA454', '#C7B42C', '#AAAAAA']
        };
        this.legendPosition = 'below';
        this.WidgetActionTypeEnum = WidgetActionType;
        this.WidgetDataTypeEnum = WidgetDataType;
    }
    ngOnInit() {
    }
    menuClick(type) {
        if (this.isChartTypeMenu(type)) {
            this.chartSelected = type;
        }
    }
    isChartTypeMenu(type) {
        return type === WidgetActionType.verticalBarChart || type === WidgetActionType.horizontalBarChart
            || type === WidgetActionType.pieChart || type === WidgetActionType.lineChart || type === WidgetActionType.gauge;
    }
}
CmacsGeneralChartComponent.ɵfac = function CmacsGeneralChartComponent_Factory(t) { return new (t || CmacsGeneralChartComponent)(); };
CmacsGeneralChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsGeneralChartComponent, selectors: [["cmacs-general-chart"]], inputs: { data: "data", chartSelected: "chartSelected", dataType: "dataType", showXAxis: "showXAxis", showXAxisLabel: "showXAxisLabel", xAxisLabel: "xAxisLabel", showYAxis: "showYAxis", showYAxisLabel: "showYAxisLabel", yAxisLabel: "yAxisLabel", showLegend: "showLegend", legendTitle: "legendTitle", view: "view", colorScheme: "colorScheme" }, decls: 7, vars: 7, consts: [[3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "legendPosition", "yAxisLabel", "legendTitle", "roundEdges", "trimXAxisTicks", "roundDomains", "groupPadding", "barPadding", 4, "ngIf"], [3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "legendTitle", "roundEdges", "trimXAxisTicks", "roundDomains", "legendPosition", "groupPadding", "barPadding", 4, "ngIf"], [3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "legendTitle", "roundDomains", "legendPosition", 4, "ngIf"], [3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "legendTitle", "roundEdges", "trimXAxisTicks", "roundDomains", "legendPosition", 4, "ngIf"], [3, "view", "scheme", "results", "legend", "legendTitle", "doughnut", "labels", "legendPosition", 4, "ngIf"], [3, "view", "scheme", "results", "legend", "legendTitle", "legendPosition", "bigSegments", "smallSegments", 4, "ngIf"], [3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "legendPosition", "yAxisLabel", "legendTitle", "roundEdges", "trimXAxisTicks", "roundDomains", "groupPadding", "barPadding"], [3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "legendTitle", "roundEdges", "trimXAxisTicks", "roundDomains", "legendPosition", "groupPadding", "barPadding"], [3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "legendTitle", "roundDomains", "legendPosition"], [3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "legendTitle", "roundEdges", "trimXAxisTicks", "roundDomains", "legendPosition"], [3, "view", "scheme", "results", "legend", "legendTitle", "doughnut", "labels", "legendPosition"], [3, "view", "scheme", "results", "legend", "legendTitle", "legendPosition", "bigSegments", "smallSegments"]], template: function CmacsGeneralChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsGeneralChartComponent_ngx_charts_bar_vertical_2d_0_Template, 1, 17, "ngx-charts-bar-vertical-2d", 0);
        i0.ɵɵtemplate(1, CmacsGeneralChartComponent_ngx_charts_bar_horizontal_2d_1_Template, 1, 17, "ngx-charts-bar-horizontal-2d", 1);
        i0.ɵɵtemplate(2, CmacsGeneralChartComponent_ngx_charts_line_chart_2_Template, 1, 13, "ngx-charts-line-chart", 2);
        i0.ɵɵtemplate(3, CmacsGeneralChartComponent_ngx_charts_bar_vertical_3_Template, 1, 15, "ngx-charts-bar-vertical", 3);
        i0.ɵɵtemplate(4, CmacsGeneralChartComponent_ngx_charts_bar_horizontal_4_Template, 1, 15, "ngx-charts-bar-horizontal", 3);
        i0.ɵɵtemplate(5, CmacsGeneralChartComponent_ngx_charts_pie_chart_5_Template, 1, 8, "ngx-charts-pie-chart", 4);
        i0.ɵɵtemplate(6, CmacsGeneralChartComponent_ngx_charts_gauge_6_Template, 1, 8, "ngx-charts-gauge", 5);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.chartSelected === ctx.WidgetActionTypeEnum.verticalBarChart && ctx.dataType === ctx.WidgetDataTypeEnum.multi && ctx.view && ctx.view.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.chartSelected === ctx.WidgetActionTypeEnum.horizontalBarChart && ctx.dataType === ctx.WidgetDataTypeEnum.multi && ctx.view && ctx.view.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.chartSelected === ctx.WidgetActionTypeEnum.lineChart && ctx.dataType === ctx.WidgetDataTypeEnum.multi && ctx.view && ctx.view.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.chartSelected === ctx.WidgetActionTypeEnum.verticalBarChart && ctx.dataType === ctx.WidgetDataTypeEnum.single && ctx.view && ctx.view.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.chartSelected === ctx.WidgetActionTypeEnum.horizontalBarChart && ctx.dataType === ctx.WidgetDataTypeEnum.single && ctx.view && ctx.view.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.chartSelected === ctx.WidgetActionTypeEnum.pieChart && ctx.dataType === ctx.WidgetDataTypeEnum.single && ctx.view && ctx.view.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.chartSelected === ctx.WidgetActionTypeEnum.gauge && ctx.dataType === ctx.WidgetDataTypeEnum.single && ctx.view && ctx.view.length > 0);
    } }, directives: [i1.NgIf, i2.BarVertical2DComponent, i2.BarHorizontal2DComponent, i2.LineChartComponent, i2.BarVerticalComponent, i2.BarHorizontalComponent, i2.PieChartComponent, i2.GaugeComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsGeneralChartComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-general-chart',
                templateUrl: './cmacs-general-chart.component.html',
                styleUrls: ['./cmacs-general-chart.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: Input
        }], chartSelected: [{
            type: Input
        }], dataType: [{
            type: Input
        }], showXAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], showYAxis: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], showLegend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], view: [{
            type: Input
        }], colorScheme: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZ2VuZXJhbC1jaGFydC9jbWFjcy1nZW5lcmFsLWNoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1nZW5lcmFsLWNoYXJ0L2NtYWNzLWdlbmVyYWwtY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7OztJQ0FoRSxnREFNNkI7OztJQUx5RyxrQ0FBYSw4QkFBQSx3QkFBQSwyQkFBQSwyQkFBQSw2QkFBQSx5Q0FBQSx5Q0FBQSxpQ0FBQSx5Q0FBQSxpQ0FBQSxtQ0FBQSxxQkFBQSx3QkFBQSxzQkFBQSxtQkFBQSxpQkFBQTs7O0lBT25KLGtEQU0rQjs7O0lBSjdCLGtDQUFhLDhCQUFBLHdCQUFBLDJCQUFBLDJCQUFBLDZCQUFBLHlDQUFBLHlDQUFBLGlDQUFBLGlDQUFBLG1DQUFBLHFCQUFBLHdCQUFBLHNCQUFBLHlDQUFBLG1CQUFBLGlCQUFBOzs7SUFNZiwyQ0FJd0I7OztJQUh0QixrQ0FBYSw4QkFBQSx3QkFBQSwyQkFBQSwyQkFBQSw2QkFBQSx5Q0FBQSx5Q0FBQSxpQ0FBQSxpQ0FBQSxtQ0FBQSxzQkFBQSx5Q0FBQTs7O0lBTWYsNkNBTTBCOzs7SUFKeEIsa0NBQWEsOEJBQUEsd0JBQUEsMkJBQUEsMkJBQUEs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SztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBR0csSUFBSTtrQkFBWixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdpZGdldEFjdGlvblR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3dpZGdldC1hY3Rpb24tdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgV2lkZ2V0RGF0YVR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3dpZGdldC10eXBlLmVudW0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1nZW5lcmFsLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzR2VuZXJhbENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgLy8gY29udGVudFxyXG4gIEBJbnB1dCgpIGRhdGE6IGFueVtdID0gW107XHJcblxyXG4gIC8vIG9wdGlvbnNcclxuICBASW5wdXQoKSBjaGFydFNlbGVjdGVkOiBXaWRnZXRBY3Rpb25UeXBlID0gV2lkZ2V0QWN0aW9uVHlwZS52ZXJ0aWNhbEJhckNoYXJ0O1xyXG4gIEBJbnB1dCgpIGRhdGFUeXBlID0gV2lkZ2V0RGF0YVR5cGUuc2luZ2xlO1xyXG4gIEBJbnB1dCgpIHNob3dYQXhpcyA9IHRydWU7XHJcbiAgQElucHV0KCkgc2hvd1hBeGlzTGFiZWwgPSBmYWxzZTtcclxuICBASW5wdXQoKSB4QXhpc0xhYmVsID0gJyc7XHJcbiAgQElucHV0KCkgc2hvd1lBeGlzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzaG93WUF4aXNMYWJlbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHlBeGlzTGFiZWwgPSAnJztcclxuICBASW5wdXQoKSBzaG93TGVnZW5kID0gdHJ1ZTtcclxuICBASW5wdXQoKSBsZWdlbmRUaXRsZSA9ICcnO1xyXG5cclxuICAvL1xyXG4gIEBJbnB1dCgpIHZpZXchOiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBjb2xvclNjaGVtZSA9IHtcclxuICAgIGRvbWFpbjogWycjNUFBNDU0JywgJyNDN0I0MkMnLCAnI0FBQUFBQSddXHJcbiAgfTtcclxuXHJcbiAgbGVnZW5kUG9zaXRpb24gPSAnYmVsb3cnO1xyXG4gIFdpZGdldEFjdGlvblR5cGVFbnVtID0gV2lkZ2V0QWN0aW9uVHlwZTtcclxuICBXaWRnZXREYXRhVHlwZUVudW0gPSBXaWRnZXREYXRhVHlwZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBtZW51Q2xpY2sodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNDaGFydFR5cGVNZW51KHR5cGUpKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRTZWxlY3RlZCA9IHR5cGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0NoYXJ0VHlwZU1lbnUodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUudmVydGljYWxCYXJDaGFydCB8fCB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLmhvcml6b250YWxCYXJDaGFydFxyXG4gICAgICB8fCB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLnBpZUNoYXJ0IHx8IHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUubGluZUNoYXJ0IHx8IHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUuZ2F1Z2U7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8IS0tIEdyb3VwZWQgQ2hhcnQgLS0+XHJcbjwhLS0gbmd4LWNoYXJ0cy1iYXItdmVydGljYWwtMmQgLS0+XHJcbjxuZ3gtY2hhcnRzLWJhci12ZXJ0aWNhbC0yZFxyXG4gICpuZ0lmPVwiY2hhcnRTZWxlY3RlZCA9PT0gV2lkZ2V0QWN0aW9uVHlwZUVudW0udmVydGljYWxCYXJDaGFydCAmJiBkYXRhVHlwZSA9PT0gV2lkZ2V0RGF0YVR5cGVFbnVtLm11bHRpICYmIHZpZXcgJiYgdmlldy5sZW5ndGggPiAwXCIgW3ZpZXddPVwidmlld1wiXHJcbiAgW3NjaGVtZV09XCJjb2xvclNjaGVtZVwiIFtyZXN1bHRzXT1cImRhdGFcIiBbeEF4aXNdPVwic2hvd1hBeGlzXCIgW3lBeGlzXT1cInNob3dZQXhpc1wiIFtsZWdlbmRdPVwic2hvd0xlZ2VuZFwiXHJcbiAgW3Nob3dYQXhpc0xhYmVsXT1cInNob3dYQXhpc0xhYmVsXCIgW3Nob3dZQXhpc0xhYmVsXT1cInNob3dZQXhpc0xhYmVsXCIgW3hBeGlzTGFiZWxdPVwieEF4aXNMYWJlbFwiXHJcbiAgW2xlZ2VuZFBvc2l0aW9uXT1cImxlZ2VuZFBvc2l0aW9uXCIgW3lBeGlzTGFiZWxdPVwieUF4aXNMYWJlbFwiIFtsZWdlbmRUaXRsZV09XCJsZWdlbmRUaXRsZVwiIFtyb3VuZEVkZ2VzXT1cImZhbHNlXCJcclxuICBbdHJpbVhBeGlzVGlja3NdPVwidHJ1ZVwiIFtyb3VuZERvbWFpbnNdPVwidHJ1ZVwiIFtncm91cFBhZGRpbmddPVwiMVwiIFtiYXJQYWRkaW5nXT1cIjFcIj5cclxuPC9uZ3gtY2hhcnRzLWJhci12ZXJ0aWNhbC0yZD5cclxuPCEtLSBuZ3gtY2hhcnRzLWJhci1ob3Jpem9udGFsLTJkIC0tPlxyXG48bmd4LWNoYXJ0cy1iYXItaG9yaXpvbnRhbC0yZFxyXG4gICpuZ0lmPVwiY2hhcnRTZWxlY3RlZCA9PT0gV2lkZ2V0QWN0aW9uVHlwZUVudW0uaG9yaXpvbnRhbEJhckNoYXJ0ICAmJiBkYXRhVHlwZSA9PT0gV2lkZ2V0RGF0YVR5cGVFbnVtLm11bHRpICAmJiB2aWV3ICYmIHZpZXcubGVuZ3RoID4gMFwiXHJcbiAgW3ZpZXddPVwidmlld1wiIFtzY2hlbWVdPVwiY29sb3JTY2hlbWVcIiBbcmVzdWx0c109XCJkYXRhXCIgW3hBeGlzXT1cInNob3dYQXhpc1wiIFt5QXhpc109XCJzaG93WUF4aXNcIiBbbGVnZW5kXT1cInNob3dMZWdlbmRcIlxyXG4gIFtzaG93WEF4aXNMYWJlbF09XCJzaG93WEF4aXNMYWJlbFwiIFtzaG93WUF4aXNMYWJlbF09XCJzaG93WUF4aXNMYWJlbFwiIFt4QXhpc0xhYmVsXT1cInhBeGlzTGFiZWxcIlxyXG4gIFt5QXhpc0xhYmVsXT1cInlBeGlzTGFiZWxcIiBbbGVnZW5kVGl0bGVdPVwibGVnZW5kVGl0bGVcIiBbcm91bmRFZGdlc109XCJmYWxzZVwiIFt0cmltWEF4aXNUaWNrc109XCJ0cnVlXCJcclxuICBbcm91bmREb21haW5zXT1cInRydWVcIiBbbGVnZW5kUG9zaXRpb25dPVwibGVnZW5kUG9zaXRpb25cIiBbZ3JvdXBQYWRkaW5nXT1cIjFcIiBbYmFyUGFkZGluZ109XCIxXCI+XHJcbjwvbmd4LWNoYXJ0cy1iYXItaG9yaXpvbnRhbC0yZD5cclxuPCEtLSBuZ3gtY2hhcnRzLWxpbmUtY2hhcnQgLS0+XHJcbjxuZ3gtY2hhcnRzLWxpbmUtY2hhcnQgKm5nSWY9XCJjaGFydFNlbGVjdGVkID09PSBXaWRnZXRBY3Rpb25UeXBlRW51bS5saW5lQ2hhcnQgJiYgZGF0YVR5cGUgPT09IFdpZGdldERhdGFUeXBlRW51bS5tdWx0aSAmJiB2aWV3ICYmIHZpZXcubGVuZ3RoID4gMFwiXHJcbiAgW3ZpZXddPVwidmlld1wiIFtzY2hlbWVdPVwiY29sb3JTY2hlbWVcIiBbcmVzdWx0c109XCJkYXRhXCIgW3hBeGlzXT1cInNob3dYQXhpc1wiIFt5QXhpc109XCJzaG93WUF4aXNcIiBbbGVnZW5kXT1cInNob3dMZWdlbmRcIlxyXG4gIFtzaG93WEF4aXNMYWJlbF09XCJzaG93WEF4aXNMYWJlbFwiIFtzaG93WUF4aXNMYWJlbF09XCJzaG93WUF4aXNMYWJlbFwiIFt4QXhpc0xhYmVsXT1cInhBeGlzTGFiZWxcIlxyXG4gIFt5QXhpc0xhYmVsXT1cInlBeGlzTGFiZWxcIiBbbGVnZW5kVGl0bGVdPVwibGVnZW5kVGl0bGVcIiBbcm91bmREb21haW5zXT1cInRydWVcIiBbbGVnZW5kUG9zaXRpb25dPVwibGVnZW5kUG9zaXRpb25cIj5cclxuPC9uZ3gtY2hhcnRzLWxpbmUtY2hhcnQ+XHJcbjwhLS0gU2luZ2xlIENoYXJ0IC0tPlxyXG48IS0tIG5neC1jaGFydHMtYmFyLXZlcnRpY2FsIC0tPlxyXG48bmd4LWNoYXJ0cy1iYXItdmVydGljYWxcclxuICAqbmdJZj1cImNoYXJ0U2VsZWN0ZWQgPT09IFdpZGdldEFjdGlvblR5cGVFbnVtLnZlcnRpY2FsQmFyQ2hhcnQgJiYgZGF0YVR5cGUgPT09IFdpZGdldERhdGFUeXBlRW51bS5zaW5nbGUgJiYgdmlldyAmJiB2aWV3Lmxlbmd0aCA+IDBcIlxyXG4gIFt2aWV3XT1cInZpZXdcIiBbc2NoZW1lXT1cImNvbG9yU2NoZW1lXCIgW3Jlc3VsdHNdPVwiZGF0YVwiIFt4QXhpc109XCJzaG93WEF4aXNcIiBbeUF4aXNdPVwic2hvd1lBeGlzXCIgW2xlZ2VuZF09XCJzaG93TGVnZW5kXCJcclxuICBbc2hvd1hBeGlzTGFiZWxdPVwic2hvd1hBeGlzTGFiZWxcIiBbc2hvd1lBeGlzTGFiZWxdPVwic2hvd1lBeGlzTGFiZWxcIiBbeEF4aXNMYWJlbF09XCJ4QXhpc0xhYmVsXCJcclxuICBbeUF4aXNMYWJlbF09XCJ5QXhpc0xhYmVsXCIgW2xlZ2VuZFRpdGxlXT1cImxlZ2VuZFRpdGxlXCIgW3JvdW5kRWRnZXNdPVwiZmFsc2VcIiBbdHJpbVhBeGlzVGlja3NdPVwidHJ1ZVwiXHJcbiAgW3JvdW5kRG9tYWluc109XCJ0cnVlXCIgW2xlZ2VuZFBvc2l0aW9uXT1cImxlZ2VuZFBvc2l0aW9uXCI+XHJcbjwvbmd4LWNoYXJ0cy1iYXItdmVydGljYWw+XHJcbjwhLS0gbmd4LWNoYXJ0cy1iYXItaG9yaXpvbnRhbCAtLT5cclxuPG5neC1jaGFydHMtYmFyLWhvcml6b250YWxcclxuICAqbmdJZj1cImNoYXJ0U2VsZWN0ZWQgPT09IFdpZGdldEFjdGlvblR5cGVFbnVtLmhvcml6b250YWxCYXJDaGFydCAgJiYgZGF0YVR5cGUgPT09IFdpZGdldERhdGFUeXBlRW51bS5zaW5nbGUgICYmIHZpZXcgJiYgdmlldy5sZW5ndGggPiAwXCJcclxuICBbdmlld109XCJ2aWV3XCIgW3NjaGVtZV09XCJjb2xvclNjaGVtZVwiIFtyZXN1bHRzXT1cImRhdGFcIiBbeEF4aXNdPVwic2hvd1hBeGlzXCIgW3lBeGlzXT1cInNob3dZQXhpc1wiIFtsZWdlbmRdPVwic2hvd0xlZ2VuZFwiXHJcbiAgW3Nob3dYQXhpc0xhYmVsXT1cInNob3dYQXhpc0xhYmVsXCIgW3Nob3dZQXhpc0xhYmVsXT1cInNob3dZQXhpc0xhYmVsXCIgW3hBeGlzTGFiZWxdPVwieEF4aXNMYWJlbFwiXHJcbiAgW3lBeGlzTGFiZWxdPVwieUF4aXNMYWJlbFwiIFtsZWdlbmRUaXRsZV09XCJsZWdlbmRUaXRsZVwiIFtyb3VuZEVkZ2VzXT1cImZhbHNlXCIgW3RyaW1YQXhpc1RpY2tzXT1cInRydWVcIlxyXG4gIFtyb3VuZERvbWFpbnNdPVwidHJ1ZVwiIFtsZWdlbmRQb3NpdGlvbl09XCJsZWdlbmRQb3NpdGlvblwiPlxyXG48L25neC1jaGFydHMtYmFyLWhvcml6b250YWw+XHJcbjwhLS0gbmd4LWNoYXJ0cy1waWUtY2hhcnQgLS0+XHJcbjxuZ3gtY2hhcnRzLXBpZS1jaGFydCAqbmdJZj1cImNoYXJ0U2VsZWN0ZWQgPT09IFdpZGdldEFjdGlvblR5cGVFbnVtLnBpZUNoYXJ0ICAmJiBkYXRhVHlwZSA9PT0gV2lkZ2V0RGF0YVR5cGVFbnVtLnNpbmdsZSAmJiB2aWV3ICYmIHZpZXcubGVuZ3RoID4gMFwiXHJcbiAgW3ZpZXddPVwidmlld1wiIFtzY2hlbWVdPVwiY29sb3JTY2hlbWVcIiBbcmVzdWx0c109XCJkYXRhXCIgW2xlZ2VuZF09XCJzaG93TGVnZW5kXCIgW2xlZ2VuZFRpdGxlXT1cImxlZ2VuZFRpdGxlXCJcclxuICBbZG91Z2hudXRdPVwiJ3RydWUnXCIgW2xhYmVsc109XCIndHJ1ZSdcIiBbbGVnZW5kUG9zaXRpb25dPVwibGVnZW5kUG9zaXRpb25cIj5cclxuPC9uZ3gtY2hhcnRzLXBpZS1jaGFydD5cclxuPCEtLSBuZ3gtY2hhcnRzLWdhdWdlIC0tPlxyXG48bmd4LWNoYXJ0cy1nYXVnZSAqbmdJZj1cImNoYXJ0U2VsZWN0ZWQgPT09IFdpZGdldEFjdGlvblR5cGVFbnVtLmdhdWdlICYmIGRhdGFUeXBlID09PSBXaWRnZXREYXRhVHlwZUVudW0uc2luZ2xlICYmIHZpZXcgJiYgdmlldy5sZW5ndGggPiAwXCJcclxuICBbdmlld109XCJ2aWV3XCIgW3NjaGVtZV09XCJjb2xvclNjaGVtZVwiIFtyZXN1bHRzXT1cImRhdGFcIiBbbGVnZW5kXT1cInNob3dMZWdlbmRcIiBbbGVnZW5kVGl0bGVdPVwibGVnZW5kVGl0bGVcIlxyXG4gIFtsZWdlbmRQb3NpdGlvbl09XCJsZWdlbmRQb3NpdGlvblwiIFtiaWdTZWdtZW50c109XCIzXCIgW3NtYWxsU2VnbWVudHNdPVwiMFwiPjwvbmd4LWNoYXJ0cy1nYXVnZT4iXX0=