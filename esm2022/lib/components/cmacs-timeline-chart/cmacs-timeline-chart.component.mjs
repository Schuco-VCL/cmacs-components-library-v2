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
        this.destroy$ = new Subject();
        this.options = {
            colors: ['#2a7cff', '#ffa234'],
            backgroundColor: '#ffffff',
            avoidOverlappingGridLines: false,
            tooltip: {
                isHtml: true,
            },
            timeline: {
                rowLabelStyle: {
                    color: '#656c79',
                    fontName: 'Roboto-Regular',
                    fontSize: '12'
                }
            }
        };
    }
    operateData() {
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
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTimelineChartComponent, selectors: [["cmacs-timeline-chart"]], inputs: { legendLabels: "legendLabels", colNames: "colNames", data: "data", width: "width", height: "height", colors: "colors" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 6, consts: [[1, "cmacs-timeline-chart-legend-wrapper"], [4, "ngFor", "ngForOf"], [1, "cmacs-timeline-chart-wrapper"], ["type", "Timeline", 1, "cmacs-timeline-chart", 3, "height", "width", "columns", "options", "data"], [1, "cmacs-timeline-chart-legend-marker"], [1, "cmacs-timeline-chart-legend-label"]], template: function CmacsTimelineChartComponent_Template(rf, ctx) { if (rf & 1) {
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
        }], colors: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRpbWVsaW5lLWNoYXJ0L2NtYWNzLXRpbWVsaW5lLWNoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10aW1lbGluZS1jaGFydC9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQyxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0lDRjdCLDZCQUE2RDtJQUMzRCwwQkFBb0c7SUFDcEcsK0JBQWdEO0lBQUEsWUFBUztJQUFBLGlCQUFPO0lBQ2xFLDBCQUFlOzs7OztJQUZvQyxlQUEyQztJQUEzQywrREFBMkM7SUFDNUMsZUFBUztJQUFULDhCQUFTOztBRFM3RCxNQUFNLE9BQU8sMkJBQTJCO0lBMEJ0QyxJQUNJLE1BQU0sQ0FBQyxNQUFNO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNuRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUztRQUNQLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDbEMsS0FBSyxJQUFJO2dCQUNMLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RSxNQUFNO1lBQ1YsS0FBSyxJQUFJO2dCQUNMLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RSxNQUFNO1lBQ1YsS0FBSyxJQUFJO2dCQUNMLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RSxNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDN0U7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFF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LE1BQU0sQ0FBQyxXQUFXLENBQUUsRUFBRTs7cUVBRXhWLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVzswRUFDdkcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNOztPQUV6a0IsQ0FBQztJQUNSLENBQUM7SUFFQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzRGQWpHVSwyQkFBMkI7b0VBQTNCLDJCQUEyQjtZQ1p4Qyw4QkFBaUQ7WUFDL0MsOEZBR2U7WUFDakIsaUJBQU07WUFDTiw4QkFBMEM7WUFDeEMsa0NBT2U7WUFDakIsaUJBQU07O1lBZDRCLGVBQWlCO1lBQWpCLDBDQUFpQjtZQVFuQyxlQUFpQjtZQUFqQixtQ0FBaUIsb0JBQUEseUJBQUEsd0JBQUEsa0JBQUE7Ozt1RkRHcEIsMkJBQTJCO2NBTHZDLFNBQVM7MkJBQ0Usc0JBQXNCO2dHQU12QixZQUFZO2tCQUFwQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQXFCRixNQUFNO2tCQURULEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuZGVjbGFyZSB2YXIgZ29vZ2xlOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRpbWVsaW5lLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdGltZWxpbmUtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRpbWVsaW5lLWNoYXJ0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUaW1lbGluZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpIGxlZ2VuZExhYmVscyA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbE5hbWVzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgQElucHV0KCkgZGF0YTogQXJyYXk8YW55PiA9IFtdO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBvcHRpb25zID0ge1xyXG4gICAgY29sb3JzOiBbJyMyYTdjZmYnLCAnI2ZmYTIzNCddLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBhdm9pZE92ZXJsYXBwaW5nR3JpZExpbmVzOiBmYWxzZSxcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgaXNIdG1sOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHRpbWVsaW5lOiB7XHJcbiAgICAgIHJvd0xhYmVsU3R5bGU6IHtcclxuICAgICAgICBjb2xvcjogJyM2NTZjNzknLFxyXG4gICAgICAgIGZvbnROYW1lOiAnUm9ib3RvLVJlZ3VsYXInLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTInXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjb2xvcnMoY29sb3JzKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMuY29sb3JzID0gY29sb3JzO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuZGF0YSkge1xyXG4gICAgICB0aGlzLm9wZXJhdGVEYXRhKCk7XHJcbiAgICB9ICAgXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLm9wZXJhdGVEYXRhKCk7XHJcbiAgICB0aGlzLmNoZWNrTGFuZygpO1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jaGVja0xhbmcoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tMYW5nKCkge1xyXG4gICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZGUnOlxyXG4gICAgICAgICAgICBnb29nbGUuY2hhcnRzLmxvYWQoJzQ2JywgeyBwYWNrYWdlczogWydjb3JlY2hhcnQnXSwgbGFuZ3VhZ2U6ICdkZScgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2VuJzpcclxuICAgICAgICAgICAgZ29vZ2xlLmNoYXJ0cy5sb2FkKCc0NicsIHsgcGFja2FnZXM6IFsnY29yZWNoYXJ0J10sIGxhbmd1YWdlOiAnZW4nIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdqYSc6XHJcbiAgICAgICAgICAgIGdvb2dsZS5jaGFydHMubG9hZCgnNDYnLCB7IHBhY2thZ2VzOiBbJ2NvcmVjaGFydCddLCBsYW5ndWFnZTogJ2phJyB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgZ29vZ2xlLmNoYXJ0cy5sb2FkKCc0NicsIHsgcGFja2FnZXM6IFsnY29yZWNoYXJ0J10sIGxhbmd1YWdlOiAnZW4nIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbn1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG9wZXJhdGVEYXRhKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZGF0YVtpXTtcclxuICAgICAgY29uc3QgY29sb3JJZHggPSB0aGlzLmxlZ2VuZExhYmVscy5maW5kSW5kZXgoYyA9PiBjID09PSBpdGVtWzFdKTtcclxuICAgICAgbGV0IGNvbG9yID0gJyc7XHJcbiAgICAgIGlmIChjb2xvcklkeCA+PSAwKSB7XHJcbiAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3JzW2NvbG9ySWR4XTtcclxuICAgICAgfVxyXG4gICAgICBpdGVtWzJdID0gdGhpcy5jcmVhdGVDdXN0b21Ub29sdGlwKGl0ZW0sIGNvbG9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ3VzdG9tVG9vbHRpcChkYXRhLCBjb2xvcikge1xyXG4gICAgY29uc3QgZHVyYXRpb24gPSBtb21lbnQuZHVyYXRpb24obW9tZW50KGRhdGFbNF0pLmRpZmYobW9tZW50KGRhdGFbM10pKSk7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXdyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXRpdGxlXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC1sZWdlbmQtbWFya2VyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LWxlZ2VuZC1sYWJlbFwiPiR7ZGF0YVsxXX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtdGl0bGVcIj4ke2RhdGFbMF19OjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtcHJvamVjdC1kYXRlc1wiPiR7dGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/IGAke21vbWVudChkYXRhWzNdKS5sb2NhbGUoJ2RlJykuZm9ybWF0KCdNTU0gWVlZWScpfSAtICR7bW9tZW50KGRhdGFbNF0pLmxvY2FsZSgnZGUnKS5mb3JtYXQoJ01NTSBZWVlZJyl9YCA6IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdqYScgPyBgJHttb21lbnQoZGF0YVszXSkuZm9ybWF0KCdZWVlZ5bm0TeaciCcpfSAtICR7bW9tZW50KGRhdGFbNF0pLmZvcm1hdCgnWVlZWeW5tE3mnIgnKX1gIDogYCR7bW9tZW50KGRhdGFbM10pLmZvcm1hdCgnTU1NLCBZWVlZJyl9IC0gJHsgbW9tZW50KGRhdGFbNF0pLmZvcm1hdCgnTU1NLCBZWVlZJykgfWB9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LWR1cmF0aW9uLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LWR1cmF0aW9uXCI+JHt0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ0RhdWVyJyA6IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdqYScgPyAn5pyf6ZaTJyA6ICdEdXJhdGlvbicgfTo8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LWR1cmF0aW9uLWRhdGVcIj4ke2R1cmF0aW9uLmdldCgneWVhcnMnKX0gJHt0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnIHx8IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdqYScgPyB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ0phaHJlJyA6ICflubQnIDogJ3llYXJzJ30sICR7ZHVyYXRpb24uZ2V0KCdtb250aHMnKX0gJHt0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnIHx8IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdqYScgPyB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ01vbmF0ZScgOiAn44O25pyIJyA6ICdtb250aHMnfSwgJHtkdXJhdGlvbi5nZXQoJ2RheXMnKX0gJHt0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnIHx8IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdqYScgPyB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ1RhZ2UnIDogJ+aXpScgOiAnZGF5cyd9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YDtcclxufVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC1sZWdlbmQtd3JhcHBlclwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGxhYmVsIG9mIGxlZ2VuZExhYmVsczsgaW5kZXggYXMgaVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC1sZWdlbmQtbWFya2VyXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJvcHRpb25zLmNvbG9yc1tpXVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtbGVnZW5kLWxhYmVsXCI+e3tsYWJlbH19PC9zcGFuPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXdyYXBwZXJcIj5cclxuICA8Z29vZ2xlLWNoYXJ0IHR5cGU9XCJUaW1lbGluZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0XCJcclxuICAgICAgICAgICAgICAgIFtoZWlnaHRdPVwiaGVpZ2h0XCJcclxuICAgICAgICAgICAgICAgIFt3aWR0aF09XCJ3aWR0aFwiXHJcbiAgICAgICAgICAgICAgICBbY29sdW1uc109XCJjb2xOYW1lc1wiXHJcbiAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zXCJcclxuICAgICAgICAgICAgICAgIFtkYXRhXT1cImRhdGFcIj5cclxuICA8L2dvb2dsZS1jaGFydD5cclxuPC9kaXY+XHJcbiJdfQ==