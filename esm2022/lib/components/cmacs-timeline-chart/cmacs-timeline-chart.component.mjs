import { Component, Input } from '@angular/core';
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
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
const moment = moment_;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRpbWVsaW5lLWNoYXJ0L2NtYWNzLXRpbWVsaW5lLWNoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10aW1lbGluZS1jaGFydC9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQyxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLE9BQU8scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7OztJQ0g3Qiw2QkFBNkQ7SUFDM0QsMEJBQW9HO0lBQ3BHLCtCQUFnRDtJQUFBLFlBQVM7SUFBQSxpQkFBTztJQUNsRSwwQkFBZTs7Ozs7SUFGb0MsZUFBMkM7SUFBM0MsK0RBQTJDO0lBQzVDLGVBQVM7SUFBVCw4QkFBUzs7QURHN0QsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBUXZCLE1BQU0sT0FBTywyQkFBMkI7SUEwQnRDLElBQ0ksTUFBTSxDQUFDLE1BQU07UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FB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Q0FBQyxXQUFXLENBQUMsTUFBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBRSxFQUFFOztxRUFFeFYsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFXOzBFQUN2RyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU07O09BRXprQixDQUFDO0lBQ1IsQ0FBQztJQUVDLFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7NEZBakdVLDJCQUEyQjtvRUFBM0IsMkJBQTJCO1lDZHhDLDhCQUFpRDtZQUMvQyw4RkFHZTtZQUNqQixpQkFBTTtZQUNOLDhCQUEwQztZQUN4QyxrQ0FPZTtZQUNqQixpQkFBTTs7WUFkNEIsZUFBaUI7WUFBakIsMENBQWlCO1lBUW5DLGVBQWlCO1lBQWpCLG1DQUFpQixvQkFBQSx5QkFBQSx3QkFBQSxrQkFBQTs7O3VGREtwQiwyQkFBMkI7Y0FMdkMsU0FBUzsyQkFDRSxzQkFBc0I7Z0dBTXZCLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBcUJGLE1BQU07a0JBRFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWllJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5kZWNsYXJlIHZhciBnb29nbGU6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdGltZWxpbmUtY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdGltZWxpbmUtY2hhcnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RpbWVsaW5lQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgbGVnZW5kTGFiZWxzID0gW107XHJcbiAgQElucHV0KCkgY29sTmFtZXM6IEFycmF5PGFueT4gPSBbXTtcclxuICBASW5wdXQoKSBkYXRhOiBBcnJheTxhbnk+ID0gW107XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIG9wdGlvbnMgPSB7XHJcbiAgICBjb2xvcnM6IFsnIzJhN2NmZicsICcjZmZhMjM0J10sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgIGF2b2lkT3ZlcmxhcHBpbmdHcmlkTGluZXM6IGZhbHNlLFxyXG4gICAgdG9vbHRpcDoge1xyXG4gICAgICBpc0h0bWw6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdGltZWxpbmU6IHtcclxuICAgICAgcm93TGFiZWxTdHlsZToge1xyXG4gICAgICAgIGNvbG9yOiAnIzY1NmM3OScsXHJcbiAgICAgICAgZm9udE5hbWU6ICdSb2JvdG8tUmVndWxhcicsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbG9ycyhjb2xvcnMpIHtcclxuICAgIHRoaXMub3B0aW9ucy5jb2xvcnMgPSBjb2xvcnM7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XHJcbiAgICAgIHRoaXMub3BlcmF0ZURhdGEoKTtcclxuICAgIH0gICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMub3BlcmF0ZURhdGEoKTtcclxuICAgIHRoaXMuY2hlY2tMYW5nKCk7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrTGFuZygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja0xhbmcoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdkZSc6XHJcbiAgICAgICAgICAgIGdvb2dsZS5jaGFydHMubG9hZCgnNDYnLCB7IHBhY2thZ2VzOiBbJ2NvcmVjaGFydCddLCBsYW5ndWFnZTogJ2RlJyB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZW4nOlxyXG4gICAgICAgICAgICBnb29nbGUuY2hhcnRzLmxvYWQoJzQ2JywgeyBwYWNrYWdlczogWydjb3JlY2hhcnQnXSwgbGFuZ3VhZ2U6ICdlbicgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2phJzpcclxuICAgICAgICAgICAgZ29vZ2xlLmNoYXJ0cy5sb2FkKCc0NicsIHsgcGFja2FnZXM6IFsnY29yZWNoYXJ0J10sIGxhbmd1YWdlOiAnamEnIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBnb29nbGUuY2hhcnRzLmxvYWQoJzQ2JywgeyBwYWNrYWdlczogWydjb3JlY2hhcnQnXSwgbGFuZ3VhZ2U6ICdlbicgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxufVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgb3BlcmF0ZURhdGEoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5kYXRhW2ldO1xyXG4gICAgICBjb25zdCBjb2xvcklkeCA9IHRoaXMubGVnZW5kTGFiZWxzLmZpbmRJbmRleChjID0+IGMgPT09IGl0ZW1bMV0pO1xyXG4gICAgICBsZXQgY29sb3IgPSAnJztcclxuICAgICAgaWYgKGNvbG9ySWR4ID49IDApIHtcclxuICAgICAgICBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvcnNbY29sb3JJZHhdO1xyXG4gICAgICB9XHJcbiAgICAgIGl0ZW1bMl0gPSB0aGlzLmNyZWF0ZUN1c3RvbVRvb2x0aXAoaXRlbSwgY29sb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDdXN0b21Ub29sdGlwKGRhdGEsIGNvbG9yKSB7XHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IG1vbWVudC5kdXJhdGlvbihtb21lbnQoZGF0YVs0XSkuZGlmZihtb21lbnQoZGF0YVszXSkpKTtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtd3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtdGl0bGVcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LWxlZ2VuZC1tYXJrZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9XCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtbGVnZW5kLWxhYmVsXCI+JHtkYXRhWzFdfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtcHJvamVjdC10aXRsZVwiPiR7ZGF0YVswXX06PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LWRhdGVzXCI+JHt0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gYCR7bW9tZW50KGRhdGFbM10pLmxvY2FsZSgnZGUnKS5mb3JtYXQoJ01NTSBZWVlZJyl9IC0gJHttb21lbnQoZGF0YVs0XSkubG9jYWxlKCdkZScpLmZvcm1hdCgnTU1NIFlZWVknKX1gIDogdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2phJyA/IGAke21vbWVudChkYXRhWzNdKS5mb3JtYXQoJ1lZWVnlubRN5pyIJyl9IC0gJHttb21lbnQoZGF0YVs0XSkuZm9ybWF0KCdZWVlZ5bm0TeaciCcpfWAgOiBgJHttb21lbnQoZGF0YVszXSkuZm9ybWF0KCdNTU0sIFlZWVknKX0gLSAkeyBtb21lbnQoZGF0YVs0XSkuZm9ybWF0KCdNTU0sIFlZWVknKSB9YH08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtZHVyYXRpb24td3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtZHVyYXRpb25cIj4ke3RoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnRGF1ZXInIDogdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2phJyA/ICfmnJ/plpMnIDogJ0R1cmF0aW9uJyB9OjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtZHVyYXRpb24tZGF0ZVwiPiR7ZHVyYXRpb24uZ2V0KCd5ZWFycycpfSAke3RoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgfHwgdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2phJyA/IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnSmFocmUnIDogJ+W5tCcgOiAneWVhcnMnfSwgJHtkdXJhdGlvbi5nZXQoJ21vbnRocycpfSAke3RoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgfHwgdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2phJyA/IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnTW9uYXRlJyA6ICfjg7bmnIgnIDogJ21vbnRocyd9LCAke2R1cmF0aW9uLmdldCgnZGF5cycpfSAke3RoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgfHwgdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2phJyA/IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnVGFnZScgOiAn5pelJyA6ICdkYXlzJ308L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG59XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LWxlZ2VuZC13cmFwcGVyXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbGFiZWwgb2YgbGVnZW5kTGFiZWxzOyBpbmRleCBhcyBpXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LWxlZ2VuZC1tYXJrZXJcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cIm9wdGlvbnMuY29sb3JzW2ldXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC1sZWdlbmQtbGFiZWxcIj57e2xhYmVsfX08L3NwYW4+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtd3JhcHBlclwiPlxyXG4gIDxnb29nbGUtY2hhcnQgdHlwZT1cIlRpbWVsaW5lXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnRcIlxyXG4gICAgICAgICAgICAgICAgW2hlaWdodF09XCJoZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgW3dpZHRoXT1cIndpZHRoXCJcclxuICAgICAgICAgICAgICAgIFtjb2x1bW5zXT1cImNvbE5hbWVzXCJcclxuICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgW2RhdGFdPVwiZGF0YVwiPlxyXG4gIDwvZ29vZ2xlLWNoYXJ0PlxyXG48L2Rpdj5cclxuIl19