import { Component, Input } from '@angular/core';
import moment from 'moment';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "angular-google-charts";
import * as i3 from "@angular/common";
function CmacsTimelineChartComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 4);
    i0.ɵɵelementStart(2, "span", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const label_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", ctx_r0.options.colors[i_r2]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(label_r1);
} }
export class CmacsTimelineChartComponent {
    set colors(colors) {
        this.options.colors = colors;
        this.cdr.detectChanges();
    }
    ngOnChanges(changes) {
        if (changes.data) {
            this.operateData();
        }
    }
    ngOnInit() {
        this.operateData();
        this.checkLang();
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.checkLang();
        });
    }
    checkLang() {
        switch (this.i18n.getLocale().locale) {
            case 'de':
                google.charts.load('46', { packages: ['corechart'], language: 'de' });
                break;
            case 'en':
                google.charts.load('46', { packages: ['corechart'], language: 'en' });
                break;
            case 'ja':
                google.charts.load('46', { packages: ['corechart'], language: 'ja' });
                break;
            default:
                google.charts.load('46', { packages: ['corechart'], language: 'en' });
        }
        this.cdr.markForCheck();
    }
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.legendLabels = [];
        this.colNames = [];
        this.data = [];
        this.showMinAxis = true;
        this.destroy$ = new Subject();
        this.options = {
            colors: ['#2a7cff', '#ffa234'],
            backgroundColor: '#ffffff',
            tooltip: {
                isHtml: true,
            },
            timeline: {
                rowLabelStyle: {
                    color: '#656c79',
                    fontName: 'Roboto-Regular',
                    fontSize: '12'
                }
            },
        };
    }
    operateData() {
        // show min axis
        if (this.showMinAxis) {
            const dates = this.data.map(x => x[3]);
            const lowestDate = new Date(Math.min(...dates));
            // Get the year and month of the lowest date
            const year = lowestDate.getFullYear();
            const month = lowestDate.getMonth();
            // Create a new Date object with the year and month of the lowest date
            // and set the day to 1
            const firstDayOfMonth = new Date(year, month, 1);
            this.options['hAxis'] = { minValue: firstDayOfMonth };
            console.log(this.options);
        }
        for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
            const colorIdx = this.legendLabels.findIndex(c => c === item[1]);
            let color = '';
            if (colorIdx >= 0) {
                color = this.options.colors[colorIdx];
            }
            item[2] = this.createCustomTooltip(item, color);
        }
    }
    createCustomTooltip(data, color) {
        const duration = moment.duration(moment(data[4]).diff(moment(data[3])));
        return `<div class="cmacs-timeline-chart-tooltip-wrapper">
    <div class="cmacs-timeline-chart-tooltip-title">
        <span class="cmacs-timeline-chart-legend-marker" style="background-color: ${color}"></span>
        <span class="cmacs-timeline-chart-legend-label">${data[1]}</span>
    </div>
    <div class="cmacs-timeline-chart-tooltip-project-title">${data[0]}:</div>
    <div class="cmacs-timeline-chart-tooltip-project-dates">${this.i18n.getLocale().locale === 'de' ? `${moment(data[3]).locale('de').format('MMM YYYY')} - ${moment(data[4]).locale('de').format('MMM YYYY')}` : this.i18n.getLocale().locale === 'ja' ? `${moment(data[3]).format('YYYY年M月')} - ${moment(data[4]).format('YYYY年M月')}` : `${moment(data[3]).format('MMM, YYYY')} - ${moment(data[4]).format('MMM, YYYY')}`}</div>
    <div class="cmacs-timeline-chart-tooltip-project-duration-wrapper">
        <div class="cmacs-timeline-chart-tooltip-project-duration">${this.i18n.getLocale().locale === 'de' ? 'Dauer' : this.i18n.getLocale().locale === 'ja' ? '期間' : 'Duration'}:</div>
        <div class="cmacs-timeline-chart-tooltip-project-duration-date">${duration.get('years')} ${this.i18n.getLocale().locale === 'de' || this.i18n.getLocale().locale === 'ja' ? this.i18n.getLocale().locale === 'de' ? 'Jahre' : '年' : 'years'}, ${duration.get('months')} ${this.i18n.getLocale().locale === 'de' || this.i18n.getLocale().locale === 'ja' ? this.i18n.getLocale().locale === 'de' ? 'Monate' : 'ヶ月' : 'months'}, ${duration.get('days')} ${this.i18n.getLocale().locale === 'de' || this.i18n.getLocale().locale === 'ja' ? this.i18n.getLocale().locale === 'de' ? 'Tage' : '日' : 'days'}</div>
    </div>
</div>`;
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = function CmacsTimelineChartComponent_Factory(t) { return new (t || CmacsTimelineChartComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTimelineChartComponent, selectors: [["cmacs-timeline-chart"]], inputs: { legendLabels: "legendLabels", colNames: "colNames", data: "data", width: "width", height: "height", showMinAxis: "showMinAxis", colors: "colors" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 6, consts: [[1, "cmacs-timeline-chart-legend-wrapper"], [4, "ngFor", "ngForOf"], [1, "cmacs-timeline-chart-wrapper"], ["type", "Timeline", 1, "cmacs-timeline-chart", 3, "height", "width", "columns", "options", "data"], [1, "cmacs-timeline-chart-legend-marker"], [1, "cmacs-timeline-chart-legend-label"]], template: function CmacsTimelineChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, CmacsTimelineChartComponent_ng_container_1_Template, 4, 3, "ng-container", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelement(3, "google-chart", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.legendLabels);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("height", ctx.height)("width", ctx.width)("columns", ctx.colNames)("options", ctx.options)("data", ctx.data);
        } }, dependencies: [i2.GoogleChartComponent, i3.NgForOf], styles: [".cmacs-timeline-chart div div div div svg g:nth-of-type(1) rect{stroke:#bec4cd;stroke-width:.5px;fill:none}  .cmacs-timeline-chart div div div div svg g:nth-of-type(1) path{stroke:none}  .cmacs-timeline-chart div div div div svg g:nth-of-type(3) text{fill:none}  .cmacs-timeline-chart div div div div svg g:nth-of-type(5) text{fill:none}  .cmacs-timeline-chart div div div div svg g:nth-of-type(3) rect{height:15px;transform:translateY(4px)}  .cmacs-timeline-chart div div div div svg g:nth-of-type(5) rect{height:15px;transform:translateY(4px)}  .cmacs-timeline-chart div div div svg g:nth-of-type(4) text{fill:none}  .cmacs-timeline-chart div div div svg g:nth-of-type(6) text{fill:none}  .cmacs-timeline-chart div div div svg g:nth-of-type(4) rect{height:15px;transform:translateY(4px)}  .cmacs-timeline-chart div div div svg g:nth-of-type(6) rect{height:15px;transform:translateY(4px)}  .cmacs-timeline-chart div div div svg g:nth-of-type(1) rect{stroke:#bec4cd;stroke-width:.5px;fill:none}  .cmacs-timeline-chart div div div svg g:nth-of-type(1) path{stroke:none}  .cmacs-timeline-chart ::-webkit-scrollbar{width:6px;height:6px}  .cmacs-timeline-chart ::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}  .cmacs-timeline-chart ::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}  .cmacs-timeline-chart div div div svg g:nth-of-type(1) text{fill:#656c79}  .cmacs-timeline-chart div div div svg g:nth-of-type(2) text{fill:#656c79}  .cmacs-timeline-chart-legend-marker{width:4px;height:10px;border-radius:5px;display:inline-block}.cmacs-timeline-chart-legend-label[_ngcontent-%COMP%]{padding-left:6px;padding-right:20px;font-family:Roboto-Regular;font-size:12px;color:#656c79}.cmacs-timeline-chart-legend-wrapper[_ngcontent-%COMP%]{padding-bottom:10px;text-align:right;border:none!important}  .cmacs-timeline-chart-tooltip-wrapper{background-color:#000000bf!important;color:#fff;font-size:12px;font-family:Roboto-Regular;padding:10px 14px;border-radius:2px}  .cmacs-timeline-chart-tooltip-project-title,   .cmacs-timeline-chart-tooltip-project-dates,   .cmacs-timeline-chart-tooltip-project-duration,   .cmacs-timeline-chart-tooltip-project-duration-date{display:inline-block}  .cmacs-timeline-chart-tooltip-project-duration-date,   .cmacs-timeline-chart-tooltip-project-dates{padding-left:5px;color:#bec4cd}  .cmacs-timeline-chart-tooltip-title{border-bottom:1px solid #bec4cd;padding:2px 0 5px;margin-bottom:8px}  .cmacs-timeline-chart-tooltip-title .cmacs-timeline-chart-legend-label{color:#fff!important;padding-left:5px}  div.google-visualization-tooltip{border:none;width:235px}  .cmacs-timeline-chart-tooltip-project-duration-wrapper{padding-top:5px}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTimelineChartComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-timeline-chart', template: "<div class=\"cmacs-timeline-chart-legend-wrapper\">\r\n  <ng-container *ngFor=\"let label of legendLabels; index as i\">\r\n    <span class=\"cmacs-timeline-chart-legend-marker\" [style.backgroundColor]=\"options.colors[i]\"></span>\r\n    <span class=\"cmacs-timeline-chart-legend-label\">{{label}}</span>\r\n  </ng-container>\r\n</div>\r\n<div class=\"cmacs-timeline-chart-wrapper\">\r\n  <google-chart type=\"Timeline\"\r\n                class=\"cmacs-timeline-chart\"\r\n                [height]=\"height\"\r\n                [width]=\"width\"\r\n                [columns]=\"colNames\"\r\n                [options]=\"options\"\r\n                [data]=\"data\">\r\n  </google-chart>\r\n</div>\r\n", styles: ["::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(1) rect{stroke:#bec4cd;stroke-width:.5px;fill:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(1) path{stroke:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(3) text{fill:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(5) text{fill:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(3) rect{height:15px;transform:translateY(4px)}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(5) rect{height:15px;transform:translateY(4px)}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(4) text{fill:none}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(6) text{fill:none}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(4) rect{height:15px;transform:translateY(4px)}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(6) rect{height:15px;transform:translateY(4px)}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(1) rect{stroke:#bec4cd;stroke-width:.5px;fill:none}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(1) path{stroke:none}::ng-deep .cmacs-timeline-chart ::-webkit-scrollbar{width:6px;height:6px}::ng-deep .cmacs-timeline-chart ::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::ng-deep .cmacs-timeline-chart ::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(1) text{fill:#656c79}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(2) text{fill:#656c79}::ng-deep .cmacs-timeline-chart-legend-marker{width:4px;height:10px;border-radius:5px;display:inline-block}.cmacs-timeline-chart-legend-label{padding-left:6px;padding-right:20px;font-family:Roboto-Regular;font-size:12px;color:#656c79}.cmacs-timeline-chart-legend-wrapper{padding-bottom:10px;text-align:right;border:none!important}::ng-deep .cmacs-timeline-chart-tooltip-wrapper{background-color:#000000bf!important;color:#fff;font-size:12px;font-family:Roboto-Regular;padding:10px 14px;border-radius:2px}::ng-deep .cmacs-timeline-chart-tooltip-project-title,::ng-deep .cmacs-timeline-chart-tooltip-project-dates,::ng-deep .cmacs-timeline-chart-tooltip-project-duration,::ng-deep .cmacs-timeline-chart-tooltip-project-duration-date{display:inline-block}::ng-deep .cmacs-timeline-chart-tooltip-project-duration-date,::ng-deep .cmacs-timeline-chart-tooltip-project-dates{padding-left:5px;color:#bec4cd}::ng-deep .cmacs-timeline-chart-tooltip-title{border-bottom:1px solid #bec4cd;padding:2px 0 5px;margin-bottom:8px}::ng-deep .cmacs-timeline-chart-tooltip-title .cmacs-timeline-chart-legend-label{color:#fff!important;padding-left:5px}::ng-deep div.google-visualization-tooltip{border:none;width:235px}::ng-deep .cmacs-timeline-chart-tooltip-project-duration-wrapper{padding-top:5px}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzI18nService }]; }, { legendLabels: [{
            type: Input
        }], colNames: [{
            type: Input
        }], data: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], showMinAxis: [{
            type: Input
        }], colors: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRpbWVsaW5lLWNoYXJ0L2NtYWNzLXRpbWVsaW5lLWNoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10aW1lbGluZS1jaGFydC9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQyxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0lDRjdCLDZCQUE2RDtJQUMzRCwwQkFBb0c7SUFDcEcsK0JBQWdEO0lBQUEsWUFBUztJQUFBLGlCQUFPO0lBQ2xFLDBCQUFlOzs7OztJQUZvQyxlQUEyQztJQUEzQywrREFBMkM7SUFDNUMsZUFBUztJQUFULDhCQUFTOztBRFU3RCxNQUFNLE9BQU8sMkJBQTJCO0lBMEJ0QyxJQUNJLE1BQU0sQ0FBQyxNQUFNO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNuRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUztRQUNQLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsS0FBSyxJQUFJO2dCQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RSxNQUFNO1lBQ1IsS0FBSyxJQUFJO2dCQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RSxNQUFNO1lBQ1IsS0FBSyxJQUFJO2dCQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RSxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDekU7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFF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Q0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7O3FFQUV0VixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVU7MEVBQ3RHLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTTs7T0FFemtCLENBQUM7SUFDTixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs0RkFqSFUsMkJBQTJCO29FQUEzQiwyQkFBMkI7WUNieEMsOEJBQWlEO1lBQy9DLDhGQUdlO1lBQ2pCLGlCQUFNO1lBQ04sOEJBQTBDO1lBQ3hDLGtDQU9lO1lBQ2pCLGlCQUFNOztZQWQ0QixlQUFpQjtZQUFqQiwwQ0FBaUI7WUFRbkMsZUFBaUI7WUFBakIsbUNBQWlCLG9CQUFBLHlCQUFBLHdCQUFBLGtCQUFBOzs7dUZESXBCLDJCQUEyQjtjQUx2QyxTQUFTOzJCQUNFLHNCQUFzQjtnR0FNdkIsWUFBWTtrQkFBcEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBb0JGLE1BQU07a0JBRFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10aW1lbGluZS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRpbWVsaW5lLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGltZWxpbmVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBsZWdlbmRMYWJlbHMgPSBbXTtcclxuICBASW5wdXQoKSBjb2xOYW1lczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIEBJbnB1dCgpIGRhdGE6IEFycmF5PGFueT4gPSBbXTtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHNob3dNaW5BeGlzID0gdHJ1ZTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIG9wdGlvbnM6IGFueSA9IHtcclxuICAgIGNvbG9yczogWycjMmE3Y2ZmJywgJyNmZmEyMzQnXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgdG9vbHRpcDoge1xyXG4gICAgICBpc0h0bWw6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdGltZWxpbmU6IHtcclxuICAgICAgcm93TGFiZWxTdHlsZToge1xyXG4gICAgICAgIGNvbG9yOiAnIzY1NmM3OScsXHJcbiAgICAgICAgZm9udE5hbWU6ICdSb2JvdG8tUmVndWxhcicsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMidcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjb2xvcnMoY29sb3JzKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMuY29sb3JzID0gY29sb3JzO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuZGF0YSkge1xyXG4gICAgICB0aGlzLm9wZXJhdGVEYXRhKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub3BlcmF0ZURhdGEoKTtcclxuICAgIHRoaXMuY2hlY2tMYW5nKCk7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrTGFuZygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja0xhbmcoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUpIHtcclxuICAgICAgY2FzZSAnZGUnOlxyXG4gICAgICAgIGdvb2dsZS5jaGFydHMubG9hZCgnNDYnLCB7IHBhY2thZ2VzOiBbJ2NvcmVjaGFydCddLCBsYW5ndWFnZTogJ2RlJyB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZW4nOlxyXG4gICAgICAgIGdvb2dsZS5jaGFydHMubG9hZCgnNDYnLCB7IHBhY2thZ2VzOiBbJ2NvcmVjaGFydCddLCBsYW5ndWFnZTogJ2VuJyB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnamEnOlxyXG4gICAgICAgIGdvb2dsZS5jaGFydHMubG9hZCgnNDYnLCB7IHBhY2thZ2VzOiBbJ2NvcmVjaGFydCddLCBsYW5ndWFnZTogJ2phJyB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBnb29nbGUuY2hhcnRzLmxvYWQoJzQ2JywgeyBwYWNrYWdlczogWydjb3JlY2hhcnQnXSwgbGFuZ3VhZ2U6ICdlbicgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBvcGVyYXRlRGF0YSgpIHtcclxuICAgIC8vIHNob3cgbWluIGF4aXNcclxuICAgIGlmICh0aGlzLnNob3dNaW5BeGlzKSB7XHJcbiAgICAgIGNvbnN0IGRhdGVzID0gdGhpcy5kYXRhLm1hcCh4ID0+IHhbM10pO1xyXG4gICAgICBjb25zdCBsb3dlc3REYXRlID0gbmV3IERhdGUoTWF0aC5taW4oLi4uZGF0ZXMpKTtcclxuXHJcbiAgICAgIC8vIEdldCB0aGUgeWVhciBhbmQgbW9udGggb2YgdGhlIGxvd2VzdCBkYXRlXHJcbiAgICAgIGNvbnN0IHllYXIgPSBsb3dlc3REYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgIGNvbnN0IG1vbnRoID0gbG93ZXN0RGF0ZS5nZXRNb250aCgpO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IERhdGUgb2JqZWN0IHdpdGggdGhlIHllYXIgYW5kIG1vbnRoIG9mIHRoZSBsb3dlc3QgZGF0ZVxyXG4gICAgICAvLyBhbmQgc2V0IHRoZSBkYXkgdG8gMVxyXG4gICAgICBjb25zdCBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSk7XHJcbiAgICAgIHRoaXMub3B0aW9uc1snaEF4aXMnXSA9IHsgbWluVmFsdWU6IGZpcnN0RGF5T2ZNb250aCB9O1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmRhdGFbaV07XHJcbiAgICAgIGNvbnN0IGNvbG9ySWR4ID0gdGhpcy5sZWdlbmRMYWJlbHMuZmluZEluZGV4KGMgPT4gYyA9PT0gaXRlbVsxXSk7XHJcbiAgICAgIGxldCBjb2xvciA9ICcnO1xyXG4gICAgICBpZiAoY29sb3JJZHggPj0gMCkge1xyXG4gICAgICAgIGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yc1tjb2xvcklkeF07XHJcbiAgICAgIH1cclxuICAgICAgaXRlbVsyXSA9IHRoaXMuY3JlYXRlQ3VzdG9tVG9vbHRpcChpdGVtLCBjb2xvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUN1c3RvbVRvb2x0aXAoZGF0YSwgY29sb3IpIHtcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gbW9tZW50LmR1cmF0aW9uKG1vbWVudChkYXRhWzRdKS5kaWZmKG1vbWVudChkYXRhWzNdKSkpO1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC13cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC10aXRsZVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtbGVnZW5kLW1hcmtlclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn1cIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC1sZWdlbmQtbGFiZWxcIj4ke2RhdGFbMV19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LXRpdGxlXCI+JHtkYXRhWzBdfTo8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtZGF0ZXNcIj4ke3RoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyBgJHttb21lbnQoZGF0YVszXSkubG9jYWxlKCdkZScpLmZvcm1hdCgnTU1NIFlZWVknKX0gLSAke21vbWVudChkYXRhWzRdKS5sb2NhbGUoJ2RlJykuZm9ybWF0KCdNTU0gWVlZWScpfWAgOiB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnamEnID8gYCR7bW9tZW50KGRhdGFbM10pLmZvcm1hdCgnWVlZWeW5tE3mnIgnKX0gLSAke21vbWVudChkYXRhWzRdKS5mb3JtYXQoJ1lZWVnlubRN5pyIJyl9YCA6IGAke21vbWVudChkYXRhWzNdKS5mb3JtYXQoJ01NTSwgWVlZWScpfSAtICR7bW9tZW50KGRhdGFbNF0pLmZvcm1hdCgnTU1NLCBZWVlZJyl9YH08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtZHVyYXRpb24td3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtZHVyYXRpb25cIj4ke3RoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnRGF1ZXInIDogdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2phJyA/ICfmnJ/plpMnIDogJ0R1cmF0aW9uJ306PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtcHJvamVjdC1kdXJhdGlvbi1kYXRlXCI+JHtkdXJhdGlvbi5nZXQoJ3llYXJzJyl9ICR7dGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyB8fCB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnamEnID8gdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/ICdKYWhyZScgOiAn5bm0JyA6ICd5ZWFycyd9LCAke2R1cmF0aW9uLmdldCgnbW9udGhzJyl9ICR7dGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyB8fCB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnamEnID8gdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/ICdNb25hdGUnIDogJ+ODtuaciCcgOiAnbW9udGhzJ30sICR7ZHVyYXRpb24uZ2V0KCdkYXlzJyl9ICR7dGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyB8fCB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnamEnID8gdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/ICdUYWdlJyA6ICfml6UnIDogJ2RheXMnfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC1sZWdlbmQtd3JhcHBlclwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGxhYmVsIG9mIGxlZ2VuZExhYmVsczsgaW5kZXggYXMgaVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC1sZWdlbmQtbWFya2VyXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJvcHRpb25zLmNvbG9yc1tpXVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtbGVnZW5kLWxhYmVsXCI+e3tsYWJlbH19PC9zcGFuPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXdyYXBwZXJcIj5cclxuICA8Z29vZ2xlLWNoYXJ0IHR5cGU9XCJUaW1lbGluZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0XCJcclxuICAgICAgICAgICAgICAgIFtoZWlnaHRdPVwiaGVpZ2h0XCJcclxuICAgICAgICAgICAgICAgIFt3aWR0aF09XCJ3aWR0aFwiXHJcbiAgICAgICAgICAgICAgICBbY29sdW1uc109XCJjb2xOYW1lc1wiXHJcbiAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zXCJcclxuICAgICAgICAgICAgICAgIFtkYXRhXT1cImRhdGFcIj5cclxuICA8L2dvb2dsZS1jaGFydD5cclxuPC9kaXY+XHJcbiJdfQ==