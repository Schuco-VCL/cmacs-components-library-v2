import { Component, Input } from '@angular/core';
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
import * as i3 from "angular-google-charts";
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
const moment = moment_;
export class CmacsTimelineChartComponent {
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
                google.charts.load('46', { 'packages': ['corechart'], 'language': 'de' });
                break;
            case 'en':
                google.charts.load('46', { 'packages': ['corechart'], 'language': 'en' });
                break;
            default:
                google.charts.load('46', { 'packages': ['corechart'], 'language': 'en' });
        }
        this.cdr.markForCheck();
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
  <div class="cmacs-timeline-chart-tooltip-project-dates">${this.i18n.getLocale().locale === 'de' ? `${moment(data[3]).locale('de').format('MMM YYYY')} - ${moment(data[4]).locale('de').format('MMM YYYY')}` : `${moment(data[3]).format('MMM, YYYY')} - ${moment(data[4]).format('MMM, YYYY')}`} </div>
  <div class="cmacs-timeline-chart-tooltip-project-duration-wrapper">
    <div class="cmacs-timeline-chart-tooltip-project-duration">${this.i18n.getLocale().locale === 'de' ? 'Dauer' : 'Duration'}:</div>
    <div class="cmacs-timeline-chart-tooltip-project-duration-date">${duration.get('years')} ${this.i18n.getLocale().locale === 'de' ? 'Jahre' : 'years'}, ${duration.get('months')} ${this.i18n.getLocale().locale === 'de' ? 'Monate' : 'months'}, ${duration.get('days')} ${this.i18n.getLocale().locale === 'de' ? 'Tage' : 'days'}</div>
  </div>
</div>`;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsTimelineChartComponent.ɵfac = function CmacsTimelineChartComponent_Factory(t) { return new (t || CmacsTimelineChartComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService)); };
CmacsTimelineChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTimelineChartComponent, selectors: [["cmacs-timeline-chart"]], inputs: { legendLabels: "legendLabels", colNames: "colNames", data: "data", width: "width", height: "height", colors: "colors" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 6, consts: [[1, "cmacs-timeline-chart-legend-wrapper"], [4, "ngFor", "ngForOf"], [1, "cmacs-timeline-chart-wrapper"], ["type", "Timeline", 1, "cmacs-timeline-chart", 3, "height", "width", "columns", "options", "data"], [1, "cmacs-timeline-chart-legend-marker"], [1, "cmacs-timeline-chart-legend-label"]], template: function CmacsTimelineChartComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i2.NgForOf, i3.GoogleChartComponent], styles: [".cmacs-timeline-chart div div div div svg g:first-of-type rect{stroke:#bec4cd;stroke-width:.5px;fill:none}  .cmacs-timeline-chart div div div div svg g:first-of-type path{stroke:none}  .cmacs-timeline-chart div div div div svg g:nth-of-type(3) text,   .cmacs-timeline-chart div div div div svg g:nth-of-type(5) text{fill:none}  .cmacs-timeline-chart div div div div svg g:nth-of-type(3) rect,   .cmacs-timeline-chart div div div div svg g:nth-of-type(5) rect{height:15px;transform:translateY(4px)}  .cmacs-timeline-chart div div div svg g:nth-of-type(4) text,   .cmacs-timeline-chart div div div svg g:nth-of-type(6) text{fill:none}  .cmacs-timeline-chart div div div svg g:nth-of-type(4) rect,   .cmacs-timeline-chart div div div svg g:nth-of-type(6) rect{height:15px;transform:translateY(4px)}  .cmacs-timeline-chart div div div svg g:first-of-type rect{stroke:#bec4cd;stroke-width:.5px;fill:none}  .cmacs-timeline-chart div div div svg g:first-of-type path{stroke:none}  .cmacs-timeline-chart ::-webkit-scrollbar{width:6px;height:6px}  .cmacs-timeline-chart ::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}  .cmacs-timeline-chart ::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}  .cmacs-timeline-chart div div div svg g:first-of-type text,   .cmacs-timeline-chart div div div svg g:nth-of-type(2) text{fill:#656c79}  .cmacs-timeline-chart-legend-marker{width:4px;height:10px;border-radius:5px;display:inline-block}.cmacs-timeline-chart-legend-label[_ngcontent-%COMP%]{padding-left:6px;padding-right:20px;font-family:Roboto-Regular;font-size:12px;color:#656c79}.cmacs-timeline-chart-legend-wrapper[_ngcontent-%COMP%]{padding-bottom:10px;text-align:right;border:none!important}  .cmacs-timeline-chart-tooltip-wrapper{background-color:rgba(0,0,0,.75)!important;color:#fff;font-size:12px;font-family:Roboto-Regular;padding:10px 14px;border-radius:2px}  .cmacs-timeline-chart-tooltip-project-dates,   .cmacs-timeline-chart-tooltip-project-duration,   .cmacs-timeline-chart-tooltip-project-duration-date,   .cmacs-timeline-chart-tooltip-project-title{display:inline-block}  .cmacs-timeline-chart-tooltip-project-dates,   .cmacs-timeline-chart-tooltip-project-duration-date{padding-left:5px;color:#bec4cd}  .cmacs-timeline-chart-tooltip-title{border-bottom:1px solid #bec4cd;padding:2px 0 5px;margin-bottom:8px}  .cmacs-timeline-chart-tooltip-title .cmacs-timeline-chart-legend-label{color:#fff!important;padding-left:5px}  div.google-visualization-tooltip{border:none;width:235px}  .cmacs-timeline-chart-tooltip-project-duration-wrapper{padding-top:5px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTimelineChartComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-timeline-chart',
                templateUrl: './cmacs-timeline-chart.component.html',
                styleUrls: ['./cmacs-timeline-chart.component.css']
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRpbWVsaW5lLWNoYXJ0L2NtYWNzLXRpbWVsaW5lLWNoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10aW1lbGluZS1jaGFydC9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQyxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLE9BQU8scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7OztJQ0g3Qiw2QkFBNkQ7SUFDM0QsMEJBQW9HO0lBQ3BHLCtCQUFnRDtJQUFBLFlBQVM7SUFBQSxpQkFBTztJQUNsRSwwQkFBZTs7Ozs7SUFGb0MsZUFBMkM7SUFBM0MsK0RBQTJDO0lBQzVDLGVBQVM7SUFBVCw4QkFBUzs7QURHN0QsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBUXZCLE1BQU0sT0FBTywyQkFBMkI7SUE0RHRDLFlBQW9CLEdBQXNCLEVBQVUsSUFBbUI7UUFBbkQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlO1FBMUQ5RCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQWUsRUFBRSxDQUFDO1FBQzFCLFNBQUksR0FBZSxFQUFFLENB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QUUsS0FBSztRQUM3QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxPQUFPOztnRkFFcUUsS0FBSztzREFDL0IsSUFBSSxDQUFDLENBQUMsQ0FBQzs7NERBRUQsSUFBSSxDQUFDLENBQUMsQ0FBQzs0REFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFFLEVBQUU7O2lFQUVsTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVztzRUFDeEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNOztPQUUvVCxDQUFDO0lBQ04sQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7c0dBOUZVLDJCQUEyQjtnRUFBM0IsMkJBQTJCO1FDZHhDLDhCQUFpRDtRQUMvQyw4RkFHZTtRQUNqQixpQkFBTTtRQUNOLDhCQUEwQztRQUN4QyxrQ0FPZTtRQUNqQixpQkFBTTs7UUFkNEIsZUFBaUI7UUFBakIsMENBQWlCO1FBUW5DLGVBQWlCO1FBQWpCLG1DQUFpQixvQkFBQSx5QkFBQSx3QkFBQSxrQkFBQTs7dUZES3BCLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7YUFDcEQ7Z0dBR1UsWUFBWTtrQkFBcEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFxQkYsTUFBTTtrQkFEVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZW4taWUnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcbmRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10aW1lbGluZS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRpbWVsaW5lLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGltZWxpbmVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBsZWdlbmRMYWJlbHMgPSBbXTtcclxuICBASW5wdXQoKSBjb2xOYW1lczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIEBJbnB1dCgpIGRhdGE6IEFycmF5PGFueT4gPSBbXTtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgb3B0aW9ucyA9IHtcclxuICAgIGNvbG9yczogWycjMmE3Y2ZmJywgJyNmZmEyMzQnXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgYXZvaWRPdmVybGFwcGluZ0dyaWRMaW5lczogZmFsc2UsXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIGlzSHRtbDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB0aW1lbGluZToge1xyXG4gICAgICByb3dMYWJlbFN0eWxlOiB7XHJcbiAgICAgICAgY29sb3I6ICcjNjU2Yzc5JyxcclxuICAgICAgICBmb250TmFtZTogJ1JvYm90by1SZWd1bGFyJyxcclxuICAgICAgICBmb250U2l6ZTogJzEyJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY29sb3JzKGNvbG9ycykge1xyXG4gICAgdGhpcy5vcHRpb25zLmNvbG9ycyA9IGNvbG9ycztcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmRhdGEpIHtcclxuICAgICAgdGhpcy5vcGVyYXRlRGF0YSgpO1xyXG4gICAgfSAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy5vcGVyYXRlRGF0YSgpO1xyXG4gICAgdGhpcy5jaGVja0xhbmcoKTtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2tMYW5nKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrTGFuZygpIHtcclxuICAgIHN3aXRjaCAodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSkge1xyXG4gICAgICBjYXNlICdkZSc6XHJcbiAgICAgICAgZ29vZ2xlLmNoYXJ0cy5sb2FkKCc0NicsIHsgJ3BhY2thZ2VzJzogWydjb3JlY2hhcnQnXSwgJ2xhbmd1YWdlJzogJ2RlJyB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZW4nOlxyXG4gICAgICAgIGdvb2dsZS5jaGFydHMubG9hZCgnNDYnLCB7ICdwYWNrYWdlcyc6IFsnY29yZWNoYXJ0J10sICdsYW5ndWFnZSc6ICdlbicgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZ29vZ2xlLmNoYXJ0cy5sb2FkKCc0NicsIHsgJ3BhY2thZ2VzJzogWydjb3JlY2hhcnQnXSwgJ2xhbmd1YWdlJzogJ2VuJyB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG9wZXJhdGVEYXRhKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZGF0YVtpXTtcclxuICAgICAgY29uc3QgY29sb3JJZHggPSB0aGlzLmxlZ2VuZExhYmVscy5maW5kSW5kZXgoYyA9PiBjID09PSBpdGVtWzFdKTtcclxuICAgICAgbGV0IGNvbG9yID0gJyc7XHJcbiAgICAgIGlmIChjb2xvcklkeCA+PSAwKSB7XHJcbiAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3JzW2NvbG9ySWR4XTtcclxuICAgICAgfVxyXG4gICAgICBpdGVtWzJdID0gdGhpcy5jcmVhdGVDdXN0b21Ub29sdGlwKGl0ZW0sIGNvbG9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ3VzdG9tVG9vbHRpcChkYXRhLCBjb2xvcikge1xyXG4gICAgY29uc3QgZHVyYXRpb24gPSBtb21lbnQuZHVyYXRpb24obW9tZW50KGRhdGFbNF0pLmRpZmYobW9tZW50KGRhdGFbM10pKSk7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXdyYXBwZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC10aXRsZVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC1sZWdlbmQtbWFya2VyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtbGVnZW5kLWxhYmVsXCI+JHtkYXRhWzFdfTwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LXRpdGxlXCI+JHtkYXRhWzBdfTo8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LWRhdGVzXCI+JHt0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gYCR7bW9tZW50KGRhdGFbM10pLmxvY2FsZSgnZGUnKS5mb3JtYXQoJ01NTSBZWVlZJyl9IC0gJHttb21lbnQoZGF0YVs0XSkubG9jYWxlKCdkZScpLmZvcm1hdCgnTU1NIFlZWVknKX1gIDogYCR7bW9tZW50KGRhdGFbM10pLmZvcm1hdCgnTU1NLCBZWVlZJyl9IC0gJHsgbW9tZW50KGRhdGFbNF0pLmZvcm1hdCgnTU1NLCBZWVlZJykgfWB9IDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtZHVyYXRpb24td3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtcHJvamVjdC1kdXJhdGlvblwiPiR7dGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/ICdEYXVlcicgOiAnRHVyYXRpb24nIH06PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LWR1cmF0aW9uLWRhdGVcIj4ke2R1cmF0aW9uLmdldCgneWVhcnMnKX0gJHt0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ0phaHJlJyA6ICd5ZWFycyd9LCAke2R1cmF0aW9uLmdldCgnbW9udGhzJyl9ICR7dGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/ICdNb25hdGUnIDogJ21vbnRocyd9LCAke2R1cmF0aW9uLmdldCgnZGF5cycpfSAke3RoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnVGFnZScgOiAnZGF5cyd9PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LWxlZ2VuZC13cmFwcGVyXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbGFiZWwgb2YgbGVnZW5kTGFiZWxzOyBpbmRleCBhcyBpXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LWxlZ2VuZC1tYXJrZXJcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cIm9wdGlvbnMuY29sb3JzW2ldXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC1sZWdlbmQtbGFiZWxcIj57e2xhYmVsfX08L3NwYW4+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtd3JhcHBlclwiPlxyXG4gIDxnb29nbGUtY2hhcnQgdHlwZT1cIlRpbWVsaW5lXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnRcIlxyXG4gICAgICAgICAgICAgICAgW2hlaWdodF09XCJoZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgW3dpZHRoXT1cIndpZHRoXCJcclxuICAgICAgICAgICAgICAgIFtjb2x1bW5zXT1cImNvbE5hbWVzXCJcclxuICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgW2RhdGFdPVwiZGF0YVwiPlxyXG4gIDwvZ29vZ2xlLWNoYXJ0PlxyXG48L2Rpdj5cclxuIl19