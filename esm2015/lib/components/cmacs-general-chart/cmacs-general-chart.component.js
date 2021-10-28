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
function CmacsGeneralChartComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 11);
    i0.ɵɵelementStart(2, "span", 12);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const label_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", ctx_r9.colorScheme.domain[i_r11]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(label_r10);
} }
function CmacsGeneralChartComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵtemplate(2, CmacsGeneralChartComponent_ng_container_2_ng_container_2_Template, 4, 3, "ng-container", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵelement(4, "ngx-charts-line-chart", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.getLegendLabels());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("view", ctx_r2.view)("scheme", ctx_r2.colorScheme)("results", ctx_r2.data)("xAxis", ctx_r2.showXAxis)("yAxis", ctx_r2.showYAxis)("legend", false)("showXAxisLabel", ctx_r2.showXAxisLabel)("showYAxisLabel", ctx_r2.showYAxisLabel)("xAxisLabel", ctx_r2.xAxisLabel)("yAxisLabel", ctx_r2.yAxisLabel)("legendTitle", ctx_r2.legendTitle)("roundDomains", true)("legendPosition", ctx_r2.legendPosition);
} }
function CmacsGeneralChartComponent_ngx_charts_bar_vertical_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-bar-vertical", 13);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("view", ctx_r3.view)("scheme", ctx_r3.colorScheme)("results", ctx_r3.data)("xAxis", ctx_r3.showXAxis)("yAxis", ctx_r3.showYAxis)("legend", ctx_r3.showLegend)("showXAxisLabel", ctx_r3.showXAxisLabel)("showYAxisLabel", ctx_r3.showYAxisLabel)("xAxisLabel", ctx_r3.xAxisLabel)("yAxisLabel", ctx_r3.yAxisLabel)("legendTitle", ctx_r3.legendTitle)("roundEdges", false)("trimXAxisTicks", true)("roundDomains", true)("legendPosition", ctx_r3.legendPosition);
} }
function CmacsGeneralChartComponent_ngx_charts_bar_horizontal_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-bar-horizontal", 13);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("view", ctx_r4.view)("scheme", ctx_r4.colorScheme)("results", ctx_r4.data)("xAxis", ctx_r4.showXAxis)("yAxis", ctx_r4.showYAxis)("legend", ctx_r4.showLegend)("showXAxisLabel", ctx_r4.showXAxisLabel)("showYAxisLabel", ctx_r4.showYAxisLabel)("xAxisLabel", ctx_r4.xAxisLabel)("yAxisLabel", ctx_r4.yAxisLabel)("legendTitle", ctx_r4.legendTitle)("roundEdges", false)("trimXAxisTicks", true)("roundDomains", true)("legendPosition", ctx_r4.legendPosition);
} }
function CmacsGeneralChartComponent_ngx_charts_pie_chart_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-pie-chart", 14);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("view", ctx_r5.view)("scheme", ctx_r5.colorScheme)("results", ctx_r5.data)("legend", ctx_r5.showLegend)("legendTitle", ctx_r5.legendTitle)("doughnut", "true")("labels", "true")("legendPosition", ctx_r5.legendPosition);
} }
function CmacsGeneralChartComponent_ngx_charts_gauge_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-gauge", 15);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("view", ctx_r6.view)("scheme", ctx_r6.colorScheme)("results", ctx_r6.data)("legend", ctx_r6.showLegend)("legendTitle", ctx_r6.legendTitle)("legendPosition", ctx_r6.legendPosition)("bigSegments", 3)("smallSegments", 0);
} }
function CmacsGeneralChartComponent_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 11);
    i0.ɵɵelementStart(2, "span", 12);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const label_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", ctx_r12.colorScheme.domain[i_r16]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(label_r15);
} }
const _c0 = function (a0) { return { model: a0 }; };
function CmacsGeneralChartComponent_ng_container_7_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 20);
} if (rf & 2) {
    const model_r17 = i0.ɵɵnextContext().model;
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r18.customTooltipTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, model_r17));
} }
function CmacsGeneralChartComponent_ng_container_7_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementStart(1, "span", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const model_r17 = i0.ɵɵnextContext().model;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", model_r17.name, ":");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(model_r17.value);
} }
function CmacsGeneralChartComponent_ng_container_7_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsGeneralChartComponent_ng_container_7_ng_template_5_ng_container_0_Template, 1, 4, "ng-container", 18);
    i0.ɵɵtemplate(1, CmacsGeneralChartComponent_ng_container_7_ng_template_5_div_1_Template, 5, 2, "div", 19);
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r14.customTooltipTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r14.customTooltipTemplate);
} }
function CmacsGeneralChartComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵtemplate(2, CmacsGeneralChartComponent_ng_container_7_ng_container_2_Template, 4, 3, "ng-container", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵelementStart(4, "ngx-charts-bar-horizontal-stacked", 16);
    i0.ɵɵtemplate(5, CmacsGeneralChartComponent_ng_container_7_ng_template_5_Template, 2, 2, "ng-template", null, 17, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r7.getLegendLabels());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("view", ctx_r7.view)("scheme", ctx_r7.colorScheme)("results", ctx_r7.data)("xAxis", ctx_r7.showXAxis)("yAxis", ctx_r7.showYAxis)("rotateXAxisTicks", false)("legend", false)("showXAxisLabel", ctx_r7.showXAxisLabel)("showYAxisLabel", ctx_r7.showYAxisLabel)("xAxisLabel", ctx_r7.xAxisLabel)("yAxisLabel", ctx_r7.yAxisLabel);
} }
function CmacsGeneralChartComponent_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 11);
    i0.ɵɵelementStart(2, "span", 12);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const label_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", ctx_r22.colorScheme.domain[i_r26]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(label_r25);
} }
function CmacsGeneralChartComponent_ng_container_8_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 20);
} if (rf & 2) {
    const model_r27 = i0.ɵɵnextContext().model;
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r28.customTooltipTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, model_r27));
} }
function CmacsGeneralChartComponent_ng_container_8_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementStart(1, "span", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const model_r27 = i0.ɵɵnextContext().model;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", model_r27.name, ":");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(model_r27.value);
} }
function CmacsGeneralChartComponent_ng_container_8_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsGeneralChartComponent_ng_container_8_ng_template_5_ng_container_0_Template, 1, 4, "ng-container", 18);
    i0.ɵɵtemplate(1, CmacsGeneralChartComponent_ng_container_8_ng_template_5_div_1_Template, 5, 2, "div", 19);
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r24.customTooltipTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r24.customTooltipTemplate);
} }
function CmacsGeneralChartComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵtemplate(2, CmacsGeneralChartComponent_ng_container_8_ng_container_2_Template, 4, 3, "ng-container", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵelementStart(4, "ngx-charts-bar-vertical-stacked", 16);
    i0.ɵɵtemplate(5, CmacsGeneralChartComponent_ng_container_8_ng_template_5_Template, 2, 2, "ng-template", null, 17, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r8.getLegendLabels());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("view", ctx_r8.view)("scheme", ctx_r8.colorScheme)("results", ctx_r8.data)("xAxis", ctx_r8.showXAxis)("yAxis", ctx_r8.showYAxis)("rotateXAxisTicks", false)("legend", false)("showXAxisLabel", ctx_r8.showXAxisLabel)("showYAxisLabel", ctx_r8.showYAxisLabel)("xAxisLabel", ctx_r8.xAxisLabel)("yAxisLabel", ctx_r8.yAxisLabel);
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
        this.customTooltipTemplate = null;
        this.colorScheme = {
            domain: ['#5AA454', '#C7B42C', '#AAAAAA']
        };
        this.legendPosition = 'below';
        this.WidgetActionTypeEnum = WidgetActionType;
        this.WidgetDataTypeEnum = WidgetDataType;
    }
    ngOnInit() {
    }
    getLegendLabels() {
        if (this.chartSelected === WidgetActionType.horizontalStackedBarChart
            || this.chartSelected === WidgetActionType.verticalStackedBarChart) {
            if (this.isNull(this.data) || this.isEmpty(this.data) || this.isNull(this.data[0].series)) {
                return [];
            }
            return this.data[0].series.map(el => el.name);
        }
        if (this.chartSelected === WidgetActionType.lineChart) {
            if (this.isNull(this.data) || this.isEmpty(this.data)) {
                return [];
            }
            return this.data.map(el => el.name);
        }
        return [];
    }
    isNull(el) {
        return el === null || el === undefined;
    }
    isEmpty(el) {
        return !el.length;
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
CmacsGeneralChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsGeneralChartComponent, selectors: [["cmacs-general-chart"]], inputs: { data: "data", chartSelected: "chartSelected", dataType: "dataType", showXAxis: "showXAxis", showXAxisLabel: "showXAxisLabel", xAxisLabel: "xAxisLabel", showYAxis: "showYAxis", showYAxisLabel: "showYAxisLabel", yAxisLabel: "yAxisLabel", showLegend: "showLegend", legendTitle: "legendTitle", customTooltipTemplate: "customTooltipTemplate", view: "view", colorScheme: "colorScheme" }, decls: 9, vars: 9, consts: [[3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "legendPosition", "yAxisLabel", "legendTitle", "roundEdges", "trimXAxisTicks", "roundDomains", "groupPadding", "barPadding", 4, "ngIf"], [3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "legendTitle", "roundEdges", "trimXAxisTicks", "roundDomains", "legendPosition", "groupPadding", "barPadding", 4, "ngIf"], [4, "ngIf"], [3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "legendTitle", "roundEdges", "trimXAxisTicks", "roundDomains", "legendPosition", 4, "ngIf"], [3, "view", "scheme", "results", "legend", "legendTitle", "doughnut", "labels", "legendPosition", 4, "ngIf"], [3, "view", "scheme", "results", "legend", "legendTitle", "legendPosition", "bigSegments", "smallSegments", 4, "ngIf"], [3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "legendPosition", "yAxisLabel", "legendTitle", "roundEdges", "trimXAxisTicks", "roundDomains", "groupPadding", "barPadding"], [3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "legendTitle", "roundEdges", "trimXAxisTicks", "roundDomains", "legendPosition", "groupPadding", "barPadding"], [1, "cmacs-stacked-bar-chart-legend-wrapper"], [4, "ngFor", "ngForOf"], [3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "legendTitle", "roundDomains", "legendPosition"], [1, "cmacs-stacked-chart-legend-marker"], [1, "cmacs-stacked-chart-legend-label"], [3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "legendTitle", "roundEdges", "trimXAxisTicks", "roundDomains", "legendPosition"], [3, "view", "scheme", "results", "legend", "legendTitle", "doughnut", "labels", "legendPosition"], [3, "view", "scheme", "results", "legend", "legendTitle", "legendPosition", "bigSegments", "smallSegments"], [1, "cmacs-stacked-bar-char", 3, "view", "scheme", "results", "xAxis", "yAxis", "rotateXAxisTicks", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel"], ["tooltipTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["style", "padding: 5px", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [2, "padding", "5px"], [2, "margin-right", "5px"]], template: function CmacsGeneralChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsGeneralChartComponent_ngx_charts_bar_vertical_2d_0_Template, 1, 17, "ngx-charts-bar-vertical-2d", 0);
        i0.ɵɵtemplate(1, CmacsGeneralChartComponent_ngx_charts_bar_horizontal_2d_1_Template, 1, 17, "ngx-charts-bar-horizontal-2d", 1);
        i0.ɵɵtemplate(2, CmacsGeneralChartComponent_ng_container_2_Template, 5, 14, "ng-container", 2);
        i0.ɵɵtemplate(3, CmacsGeneralChartComponent_ngx_charts_bar_vertical_3_Template, 1, 15, "ngx-charts-bar-vertical", 3);
        i0.ɵɵtemplate(4, CmacsGeneralChartComponent_ngx_charts_bar_horizontal_4_Template, 1, 15, "ngx-charts-bar-horizontal", 3);
        i0.ɵɵtemplate(5, CmacsGeneralChartComponent_ngx_charts_pie_chart_5_Template, 1, 8, "ngx-charts-pie-chart", 4);
        i0.ɵɵtemplate(6, CmacsGeneralChartComponent_ngx_charts_gauge_6_Template, 1, 8, "ngx-charts-gauge", 5);
        i0.ɵɵtemplate(7, CmacsGeneralChartComponent_ng_container_7_Template, 7, 12, "ng-container", 2);
        i0.ɵɵtemplate(8, CmacsGeneralChartComponent_ng_container_8_Template, 7, 12, "ng-container", 2);
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
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.chartSelected === ctx.WidgetActionTypeEnum.horizontalStackedBarChart && ctx.view && ctx.view.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.chartSelected === ctx.WidgetActionTypeEnum.verticalStackedBarChart && ctx.view && ctx.view.length > 0);
    } }, directives: [i1.NgIf, i2.BarVertical2DComponent, i2.BarHorizontal2DComponent, i1.NgForOf, i2.LineChartComponent, i2.BarVerticalComponent, i2.BarHorizontalComponent, i2.PieChartComponent, i2.GaugeComponent, i2.BarHorizontalStackedComponent, i1.NgTemplateOutlet, i2.BarVerticalStackedComponent], styles: [".cmacs-stacked-bar-chart-legend-wrapper[_ngcontent-%COMP%]{padding-bottom:10px;text-align:right;border:none!important}.cmacs-stacked-chart-legend-marker[_ngcontent-%COMP%]{width:4px;height:10px;border-radius:5px;display:inline-block}.cmacs-stacked-chart-legend-label[_ngcontent-%COMP%]{padding-left:6px;padding-right:20px;font-family:Roboto-Regular;font-size:12px;color:#acb3bf}  .cmacs-stacked-bar-char .tick text{fill:#3b3f46;font-family:Roboto-Medium;font-weight:500}"] });
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
        }], customTooltipTemplate: [{
            type: Input
        }], view: [{
            type: Input
        }], colorScheme: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZ2VuZXJhbC1jaGFydC9jbWFjcy1nZW5lcmFsLWNoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1nZW5lcmFsLWNoYXJ0L2NtYWNzLWdlbmVyYWwtY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXNDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7SUNBaEUsZ0RBSzZCOzs7SUFMbUksa0NBQWEsOEJBQUEsd0JBQUEsMkJBQUEsMkJBQUEsNkJBQUEseUNBQUEseUNBQUEsaUNBQUEseUNBQUEsaUNBQUEsbUNBQUEscUJBQUEsd0JBQUEsc0JBQUEsbUJBQUEsaUJBQUE7OztJQU83SyxrREFLK0I7OztJQUpELGtDQUFhLDhCQUFBLHdCQUFBLDJCQUFBLDJCQUFBLDZCQUFBLHlDQUFBLHlDQUFBLGlDQUFBLGlDQUFBLG1DQUFBLHFCQUFBLHdCQUFBLHNCQUFBLHlDQUFBLG1CQUFBLGlCQUFBOzs7SUFRdkMsNkJBQWtFO0lBQ2hFLDJCQUF1RztJQUN2RyxnQ0FBK0M7SUFBQSxZQUFTO0lBQUEsaUJBQU87SUFDakUsMEJBQWU7Ozs7O0lBRm1DLGVBQStDO0lBQS9DLG9FQUErQztJQUNoRCxlQUFTO0lBQVQsK0JBQVM7OztJQUo5RCw2QkFBMkk7SUFDekksOEJBQW9E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RTdCLDhIQUsrQjtRQUUvQiw4RkFhZTtRQUlmLG9IQUswQjtRQUUxQix3SEFLNEI7UUFFNUIsNkdBR3VCO1FBRXZCLHFHQUU2RztRQUc3Ryw4RkE0QmU7UUFHZiw4RkE0QmU7O1FBbEhjLDBLQUFpSTtRQU8vSCxlQUFxSTtRQUFySSw0S0FBcUk7UUFPckosZUFBMEg7UUFBMUgsbUtBQTBIO1FBaUIvRyxlQUFrSTtRQUFsSSwyS0FBa0k7UUFPaEksZUFBc0k7UUFBdEksNktBQXNJO1FBTzNJLGVBQTJIO1FBQTNILG1LQUEySDtRQUsvSCxlQUF1SDtRQUF2SCxnS0FBdUg7UUFLM0gsZUFBaUc7UUFBakcsa0lBQWlHO1FBK0JqRyxlQUErRjtRQUEvRixnSUFBK0Y7O3VGRC9FakcsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNuRDtzQ0FJVSxJQUFJO2tCQUFaLEtBQUs7WUFHRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBR0csSUFBSTtrQkFBWixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXaWRnZXRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtYWN0aW9uLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFdpZGdldERhdGFUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZ2VuZXJhbC1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWdlbmVyYWwtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWdlbmVyYWwtY2hhcnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0dlbmVyYWxDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vIGNvbnRlbnRcclxuICBASW5wdXQoKSBkYXRhOiBhbnlbXSA9IFtdO1xyXG5cclxuICAvLyBvcHRpb25zXHJcbiAgQElucHV0KCkgY2hhcnRTZWxlY3RlZDogV2lkZ2V0QWN0aW9uVHlwZSA9IFdpZGdldEFjdGlvblR5cGUudmVydGljYWxCYXJDaGFydDtcclxuICBASW5wdXQoKSBkYXRhVHlwZSA9IFdpZGdldERhdGFUeXBlLnNpbmdsZTtcclxuICBASW5wdXQoKSBzaG93WEF4aXMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNob3dYQXhpc0xhYmVsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgeEF4aXNMYWJlbCA9ICcnO1xyXG4gIEBJbnB1dCgpIHNob3dZQXhpcyA9IHRydWU7XHJcbiAgQElucHV0KCkgc2hvd1lBeGlzTGFiZWwgPSBmYWxzZTtcclxuICBASW5wdXQoKSB5QXhpc0xhYmVsID0gJyc7XHJcbiAgQElucHV0KCkgc2hvd0xlZ2VuZCA9IHRydWU7XHJcbiAgQElucHV0KCkgbGVnZW5kVGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBjdXN0b21Ub29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xyXG5cclxuICAvL1xyXG4gIEBJbnB1dCgpIHZpZXchOiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBjb2xvclNjaGVtZSA9IHtcclxuICAgIGRvbWFpbjogWycjNUFBNDU0JywgJyNDN0I0MkMnLCAnI0FBQUFBQSddXHJcbiAgfTtcclxuXHJcbiAgbGVnZW5kUG9zaXRpb24gPSAnYmVsb3cnO1xyXG4gIFdpZGdldEFjdGlvblR5cGVFbnVtID0gV2lkZ2V0QWN0aW9uVHlwZTtcclxuICBXaWRnZXREYXRhVHlwZUVudW0gPSBXaWRnZXREYXRhVHlwZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBnZXRMZWdlbmRMYWJlbHMoKSB7XHJcbiAgICBpZiAodGhpcy5jaGFydFNlbGVjdGVkID09PSBXaWRnZXRBY3Rpb25UeXBlLmhvcml6b250YWxTdGFja2VkQmFyQ2hhcnRcclxuICAgICAgfHwgdGhpcy5jaGFydFNlbGVjdGVkID09PSBXaWRnZXRBY3Rpb25UeXBlLnZlcnRpY2FsU3RhY2tlZEJhckNoYXJ0KSB7XHJcbiAgICAgIGlmICh0aGlzLmlzTnVsbCh0aGlzLmRhdGEpIHx8IHRoaXMuaXNFbXB0eSh0aGlzLmRhdGEpIHx8IHRoaXMuaXNOdWxsKHRoaXMuZGF0YVswXS5zZXJpZXMpKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGFbMF0uc2VyaWVzLm1hcChlbCA9PiBlbC5uYW1lKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNoYXJ0U2VsZWN0ZWQgPT09IFdpZGdldEFjdGlvblR5cGUubGluZUNoYXJ0KSB7XHJcbiAgICAgIGlmICh0aGlzLmlzTnVsbCh0aGlzLmRhdGEpIHx8IHRoaXMuaXNFbXB0eSh0aGlzLmRhdGEpKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGEubWFwKGVsID0+IGVsLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgaXNOdWxsKGVsOiBhbnkpIHtcclxuICAgIHJldHVybiBlbCA9PT0gbnVsbCB8fCBlbCA9PT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaXNFbXB0eShlbDogYW55KSB7XHJcbiAgICByZXR1cm4gIWVsLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIG1lbnVDbGljayh0eXBlOiBXaWRnZXRBY3Rpb25UeXBlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0NoYXJ0VHlwZU1lbnUodHlwZSkpIHtcclxuICAgICAgdGhpcy5jaGFydFNlbGVjdGVkID0gdHlwZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzQ2hhcnRUeXBlTWVudSh0eXBlOiBXaWRnZXRBY3Rpb25UeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZSA9PT0gV2lkZ2V0QWN0aW9uVHlwZS52ZXJ0aWNhbEJhckNoYXJ0IHx8IHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUuaG9yaXpvbnRhbEJhckNoYXJ0XHJcbiAgICAgIHx8IHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUucGllQ2hhcnQgfHwgdHlwZSA9PT0gV2lkZ2V0QWN0aW9uVHlwZS5saW5lQ2hhcnQgfHwgdHlwZSA9PT0gV2lkZ2V0QWN0aW9uVHlwZS5nYXVnZTtcclxuICB9XHJcblxyXG59XHJcbiIsIjwhLS0gR3JvdXBlZCBDaGFydCAtLT5cclxuPCEtLSBuZ3gtY2hhcnRzLWJhci12ZXJ0aWNhbC0yZCAtLT5cclxuPG5neC1jaGFydHMtYmFyLXZlcnRpY2FsLTJkICpuZ0lmPVwiY2hhcnRTZWxlY3RlZCA9PT0gV2lkZ2V0QWN0aW9uVHlwZUVudW0udmVydGljYWxCYXJDaGFydCAmJiBkYXRhVHlwZSA9PT0gV2lkZ2V0RGF0YVR5cGVFbnVtLm11bHRpICYmIHZpZXcgJiYgdmlldy5sZW5ndGggPiAwXCIgW3ZpZXddPVwidmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2NoZW1lXT1cImNvbG9yU2NoZW1lXCIgW3Jlc3VsdHNdPVwiZGF0YVwiIFt4QXhpc109XCJzaG93WEF4aXNcIiBbeUF4aXNdPVwic2hvd1lBeGlzXCIgW2xlZ2VuZF09XCJzaG93TGVnZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93WEF4aXNMYWJlbF09XCJzaG93WEF4aXNMYWJlbFwiIFtzaG93WUF4aXNMYWJlbF09XCJzaG93WUF4aXNMYWJlbFwiIFt4QXhpc0xhYmVsXT1cInhBeGlzTGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlZ2VuZFBvc2l0aW9uXT1cImxlZ2VuZFBvc2l0aW9uXCIgW3lBeGlzTGFiZWxdPVwieUF4aXNMYWJlbFwiIFtsZWdlbmRUaXRsZV09XCJsZWdlbmRUaXRsZVwiIFtyb3VuZEVkZ2VzXT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0cmltWEF4aXNUaWNrc109XCJ0cnVlXCIgW3JvdW5kRG9tYWluc109XCJ0cnVlXCIgW2dyb3VwUGFkZGluZ109XCIxXCIgW2JhclBhZGRpbmddPVwiMVwiPlxyXG48L25neC1jaGFydHMtYmFyLXZlcnRpY2FsLTJkPlxyXG48IS0tIG5neC1jaGFydHMtYmFyLWhvcml6b250YWwtMmQgLS0+XHJcbjxuZ3gtY2hhcnRzLWJhci1ob3Jpem9udGFsLTJkICpuZ0lmPVwiY2hhcnRTZWxlY3RlZCA9PT0gV2lkZ2V0QWN0aW9uVHlwZUVudW0uaG9yaXpvbnRhbEJhckNoYXJ0ICAmJiBkYXRhVHlwZSA9PT0gV2lkZ2V0RGF0YVR5cGVFbnVtLm11bHRpICAmJiB2aWV3ICYmIHZpZXcubGVuZ3RoID4gMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2aWV3XT1cInZpZXdcIiBbc2NoZW1lXT1cImNvbG9yU2NoZW1lXCIgW3Jlc3VsdHNdPVwiZGF0YVwiIFt4QXhpc109XCJzaG93WEF4aXNcIiBbeUF4aXNdPVwic2hvd1lBeGlzXCIgW2xlZ2VuZF09XCJzaG93TGVnZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dYQXhpc0xhYmVsXT1cInNob3dYQXhpc0xhYmVsXCIgW3Nob3dZQXhpc0xhYmVsXT1cInNob3dZQXhpc0xhYmVsXCIgW3hBeGlzTGFiZWxdPVwieEF4aXNMYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt5QXhpc0xhYmVsXT1cInlBeGlzTGFiZWxcIiBbbGVnZW5kVGl0bGVdPVwibGVnZW5kVGl0bGVcIiBbcm91bmRFZGdlc109XCJmYWxzZVwiIFt0cmltWEF4aXNUaWNrc109XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JvdW5kRG9tYWluc109XCJ0cnVlXCIgW2xlZ2VuZFBvc2l0aW9uXT1cImxlZ2VuZFBvc2l0aW9uXCIgW2dyb3VwUGFkZGluZ109XCIxXCIgW2JhclBhZGRpbmddPVwiMVwiPlxyXG48L25neC1jaGFydHMtYmFyLWhvcml6b250YWwtMmQ+XHJcbjwhLS0gbmd4LWNoYXJ0cy1saW5lLWNoYXJ0IC0tPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiY2hhcnRTZWxlY3RlZCA9PT0gV2lkZ2V0QWN0aW9uVHlwZUVudW0ubGluZUNoYXJ0ICYmIGRhdGFUeXBlID09PSBXaWRnZXREYXRhVHlwZUVudW0ubXVsdGkgJiYgdmlldyAmJiB2aWV3Lmxlbmd0aCA+IDBcIj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3Mtc3RhY2tlZC1iYXItY2hhcnQtbGVnZW5kLXdyYXBwZXJcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGxhYmVsIG9mIGdldExlZ2VuZExhYmVscygpOyBpbmRleCBhcyBpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3Mtc3RhY2tlZC1jaGFydC1sZWdlbmQtbWFya2VyXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJjb2xvclNjaGVtZS5kb21haW5baV1cIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3Mtc3RhY2tlZC1jaGFydC1sZWdlbmQtbGFiZWxcIj57e2xhYmVsfX08L3NwYW4+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG5neC1jaGFydHMtbGluZS1jaGFydCBbdmlld109XCJ2aWV3XCIgW3NjaGVtZV09XCJjb2xvclNjaGVtZVwiIFtyZXN1bHRzXT1cImRhdGFcIiBbeEF4aXNdPVwic2hvd1hBeGlzXCIgW3lBeGlzXT1cInNob3dZQXhpc1wiIFtsZWdlbmRdPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hvd1hBeGlzTGFiZWxdPVwic2hvd1hBeGlzTGFiZWxcIiBbc2hvd1lBeGlzTGFiZWxdPVwic2hvd1lBeGlzTGFiZWxcIiBbeEF4aXNMYWJlbF09XCJ4QXhpc0xhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3lBeGlzTGFiZWxdPVwieUF4aXNMYWJlbFwiIFtsZWdlbmRUaXRsZV09XCJsZWdlbmRUaXRsZVwiIFtyb3VuZERvbWFpbnNdPVwidHJ1ZVwiIFtsZWdlbmRQb3NpdGlvbl09XCJsZWdlbmRQb3NpdGlvblwiPlxyXG4gICAgPC9uZ3gtY2hhcnRzLWxpbmUtY2hhcnQ+XHJcbiAgPC9kaXY+IFxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjwhLS0gU2luZ2xlIENoYXJ0IC0tPlxyXG48IS0tIG5neC1jaGFydHMtYmFyLXZlcnRpY2FsIC0tPlxyXG48bmd4LWNoYXJ0cy1iYXItdmVydGljYWwgKm5nSWY9XCJjaGFydFNlbGVjdGVkID09PSBXaWRnZXRBY3Rpb25UeXBlRW51bS52ZXJ0aWNhbEJhckNoYXJ0ICYmIGRhdGFUeXBlID09PSBXaWRnZXREYXRhVHlwZUVudW0uc2luZ2xlICYmIHZpZXcgJiYgdmlldy5sZW5ndGggPiAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFt2aWV3XT1cInZpZXdcIiBbc2NoZW1lXT1cImNvbG9yU2NoZW1lXCIgW3Jlc3VsdHNdPVwiZGF0YVwiIFt4QXhpc109XCJzaG93WEF4aXNcIiBbeUF4aXNdPVwic2hvd1lBeGlzXCIgW2xlZ2VuZF09XCJzaG93TGVnZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93WEF4aXNMYWJlbF09XCJzaG93WEF4aXNMYWJlbFwiIFtzaG93WUF4aXNMYWJlbF09XCJzaG93WUF4aXNMYWJlbFwiIFt4QXhpc0xhYmVsXT1cInhBeGlzTGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3lBeGlzTGFiZWxdPVwieUF4aXNMYWJlbFwiIFtsZWdlbmRUaXRsZV09XCJsZWdlbmRUaXRsZVwiIFtyb3VuZEVkZ2VzXT1cImZhbHNlXCIgW3RyaW1YQXhpc1RpY2tzXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3JvdW5kRG9tYWluc109XCJ0cnVlXCIgW2xlZ2VuZFBvc2l0aW9uXT1cImxlZ2VuZFBvc2l0aW9uXCI+XHJcbjwvbmd4LWNoYXJ0cy1iYXItdmVydGljYWw+XHJcbjwhLS0gbmd4LWNoYXJ0cy1iYXItaG9yaXpvbnRhbCAtLT5cclxuPG5neC1jaGFydHMtYmFyLWhvcml6b250YWwgKm5nSWY9XCJjaGFydFNlbGVjdGVkID09PSBXaWRnZXRBY3Rpb25UeXBlRW51bS5ob3Jpem9udGFsQmFyQ2hhcnQgICYmIGRhdGFUeXBlID09PSBXaWRnZXREYXRhVHlwZUVudW0uc2luZ2xlICAmJiB2aWV3ICYmIHZpZXcubGVuZ3RoID4gMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2aWV3XT1cInZpZXdcIiBbc2NoZW1lXT1cImNvbG9yU2NoZW1lXCIgW3Jlc3VsdHNdPVwiZGF0YVwiIFt4QXhpc109XCJzaG93WEF4aXNcIiBbeUF4aXNdPVwic2hvd1lBeGlzXCIgW2xlZ2VuZF09XCJzaG93TGVnZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dYQXhpc0xhYmVsXT1cInNob3dYQXhpc0xhYmVsXCIgW3Nob3dZQXhpc0xhYmVsXT1cInNob3dZQXhpc0xhYmVsXCIgW3hBeGlzTGFiZWxdPVwieEF4aXNMYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt5QXhpc0xhYmVsXT1cInlBeGlzTGFiZWxcIiBbbGVnZW5kVGl0bGVdPVwibGVnZW5kVGl0bGVcIiBbcm91bmRFZGdlc109XCJmYWxzZVwiIFt0cmltWEF4aXNUaWNrc109XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JvdW5kRG9tYWluc109XCJ0cnVlXCIgW2xlZ2VuZFBvc2l0aW9uXT1cImxlZ2VuZFBvc2l0aW9uXCI+XHJcbjwvbmd4LWNoYXJ0cy1iYXItaG9yaXpvbnRhbD5cclxuPCEtLSBuZ3gtY2hhcnRzLXBpZS1jaGFydCAtLT5cclxuPG5neC1jaGFydHMtcGllLWNoYXJ0ICpuZ0lmPVwiY2hhcnRTZWxlY3RlZCA9PT0gV2lkZ2V0QWN0aW9uVHlwZUVudW0ucGllQ2hhcnQgICYmIGRhdGFUeXBlID09PSBXaWRnZXREYXRhVHlwZUVudW0uc2luZ2xlICYmIHZpZXcgJiYgdmlldy5sZW5ndGggPiAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFt2aWV3XT1cInZpZXdcIiBbc2NoZW1lXT1cImNvbG9yU2NoZW1lXCIgW3Jlc3VsdHNdPVwiZGF0YVwiIFtsZWdlbmRdPVwic2hvd0xlZ2VuZFwiIFtsZWdlbmRUaXRsZV09XCJsZWdlbmRUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZG91Z2hudXRdPVwiJ3RydWUnXCIgW2xhYmVsc109XCIndHJ1ZSdcIiBbbGVnZW5kUG9zaXRpb25dPVwibGVnZW5kUG9zaXRpb25cIj5cclxuPC9uZ3gtY2hhcnRzLXBpZS1jaGFydD5cclxuPCEtLSBuZ3gtY2hhcnRzLWdhdWdlIC0tPlxyXG48bmd4LWNoYXJ0cy1nYXVnZSAqbmdJZj1cImNoYXJ0U2VsZWN0ZWQgPT09IFdpZGdldEFjdGlvblR5cGVFbnVtLmdhdWdlICYmIGRhdGFUeXBlID09PSBXaWRnZXREYXRhVHlwZUVudW0uc2luZ2xlICYmIHZpZXcgJiYgdmlldy5sZW5ndGggPiAwXCJcclxuICAgICAgICAgICAgICAgICAgW3ZpZXddPVwidmlld1wiIFtzY2hlbWVdPVwiY29sb3JTY2hlbWVcIiBbcmVzdWx0c109XCJkYXRhXCIgW2xlZ2VuZF09XCJzaG93TGVnZW5kXCIgW2xlZ2VuZFRpdGxlXT1cImxlZ2VuZFRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgW2xlZ2VuZFBvc2l0aW9uXT1cImxlZ2VuZFBvc2l0aW9uXCIgW2JpZ1NlZ21lbnRzXT1cIjNcIiBbc21hbGxTZWdtZW50c109XCIwXCI+PC9uZ3gtY2hhcnRzLWdhdWdlPlxyXG5cclxuPCEtLSBuZ3gtY2hhcnRzLWJhci1ob3Jpem9udGFsLXN0YWNrZWQtLT5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImNoYXJ0U2VsZWN0ZWQgPT09IFdpZGdldEFjdGlvblR5cGVFbnVtLmhvcml6b250YWxTdGFja2VkQmFyQ2hhcnQgJiYgdmlldyAmJiB2aWV3Lmxlbmd0aCA+IDBcIj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3Mtc3RhY2tlZC1iYXItY2hhcnQtbGVnZW5kLXdyYXBwZXJcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGxhYmVsIG9mIGdldExlZ2VuZExhYmVscygpOyBpbmRleCBhcyBpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3Mtc3RhY2tlZC1jaGFydC1sZWdlbmQtbWFya2VyXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJjb2xvclNjaGVtZS5kb21haW5baV1cIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3Mtc3RhY2tlZC1jaGFydC1sZWdlbmQtbGFiZWxcIj57e2xhYmVsfX08L3NwYW4+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG5neC1jaGFydHMtYmFyLWhvcml6b250YWwtc3RhY2tlZCBbdmlld109XCJ2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NjaGVtZV09XCJjb2xvclNjaGVtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3Mtc3RhY2tlZC1iYXItY2hhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXN1bHRzXT1cImRhdGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbeEF4aXNdPVwic2hvd1hBeGlzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3lBeGlzXT1cInNob3dZQXhpc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3RhdGVYQXhpc1RpY2tzXT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlZ2VuZF09XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93WEF4aXNMYWJlbF09XCJzaG93WEF4aXNMYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93WUF4aXNMYWJlbF09XCJzaG93WUF4aXNMYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt4QXhpc0xhYmVsXT1cInhBeGlzTGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbeUF4aXNMYWJlbF09XCJ5QXhpc0xhYmVsXCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjdG9vbHRpcFRlbXBsYXRlIGxldC1tb2RlbD1cIm1vZGVsXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImN1c3RvbVRvb2x0aXBUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRvb2x0aXBUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7bW9kZWw6IG1vZGVsfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nOiA1cHhcIiAqbmdJZj1cIiFjdXN0b21Ub29sdGlwVGVtcGxhdGVcIj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiA1cHhcIj57e21vZGVsLm5hbWV9fTo8L3NwYW4+PHNwYW4+e3sgbW9kZWwudmFsdWUgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L25neC1jaGFydHMtYmFyLWhvcml6b250YWwtc3RhY2tlZD5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48IS0tIG5neC1jaGFydHMtYmFyLXZlcnRpY2FsLXN0YWNrZWQtLT5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImNoYXJ0U2VsZWN0ZWQgPT09IFdpZGdldEFjdGlvblR5cGVFbnVtLnZlcnRpY2FsU3RhY2tlZEJhckNoYXJ0ICYmIHZpZXcgJiYgdmlldy5sZW5ndGggPiAwXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLXN0YWNrZWQtYmFyLWNoYXJ0LWxlZ2VuZC13cmFwcGVyXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBsYWJlbCBvZiBnZXRMZWdlbmRMYWJlbHMoKTsgaW5kZXggYXMgaVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXN0YWNrZWQtY2hhcnQtbGVnZW5kLW1hcmtlclwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiY29sb3JTY2hlbWUuZG9tYWluW2ldXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXN0YWNrZWQtY2hhcnQtbGVnZW5kLWxhYmVsXCI+e3tsYWJlbH19PC9zcGFuPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxuZ3gtY2hhcnRzLWJhci12ZXJ0aWNhbC1zdGFja2VkIFt2aWV3XT1cInZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2NoZW1lXT1cImNvbG9yU2NoZW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1zdGFja2VkLWJhci1jaGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc3VsdHNdPVwiZGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt4QXhpc109XCJzaG93WEF4aXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbeUF4aXNdPVwic2hvd1lBeGlzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JvdGF0ZVhBeGlzVGlja3NdPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVnZW5kXT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dYQXhpc0xhYmVsXT1cInNob3dYQXhpc0xhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dZQXhpc0xhYmVsXT1cInNob3dZQXhpc0xhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3hBeGlzTGFiZWxdPVwieEF4aXNMYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt5QXhpc0xhYmVsXT1cInlBeGlzTGFiZWxcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlICN0b29sdGlwVGVtcGxhdGUgbGV0LW1vZGVsPVwibW9kZWxcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY3VzdG9tVG9vbHRpcFRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVG9vbHRpcFRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInttb2RlbDogbW9kZWx9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDVweFwiICpuZ0lmPVwiIWN1c3RvbVRvb2x0aXBUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDVweFwiPnt7bW9kZWwubmFtZX19Ojwvc3Bhbj48c3Bhbj57eyBtb2RlbC52YWx1ZSB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmd4LWNoYXJ0cy1iYXItdmVydGljYWwtc3RhY2tlZD5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==