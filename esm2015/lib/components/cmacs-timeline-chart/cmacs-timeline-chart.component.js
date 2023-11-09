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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRpbWVsaW5lLWNoYXJ0L2NtYWNzLXRpbWVsaW5lLWNoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10aW1lbGluZS1jaGFydC9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQyxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLE9BQU8scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7OztJQ0g3Qiw2QkFBNkQ7SUFDM0QsMEJBQW9HO0lBQ3BHLCtCQUFnRDtJQUFBLFlBQVM7SUFBQSxpQkFBTztJQUNsRSwwQkFBZTs7Ozs7SUFGb0MsZUFBMkM7SUFBM0MsK0RBQTJDO0lBQzVDLGVBQVM7SUFBVCw4QkFBUzs7QURHN0QsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBUXZCLE1BQU0sT0FBTywyQkFBMkI7SUErRHRDLFlBQW9CLEdBQXNCLEVBQVUsSUFBbUI7UUFBbkQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlO1FBN0Q5RCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQWUsRUFBRSxDQUFDO1FBQzFCLFNBQUksR0FBZSxFQUFFLENB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LENBQUMsV0FBVyxDQUFDLE1BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUUsRUFBRTs7cUVBRXhWLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVzswRUFDdkcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNOztPQUV6a0IsQ0FBQztJQUNSLENBQUM7SUFFQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O3NHQWpHVSwyQkFBMkI7Z0VBQTNCLDJCQUEyQjtRQ2R4Qyw4QkFBaUQ7UUFDL0MsOEZBR2U7UUFDakIsaUJBQU07UUFDTiw4QkFBMEM7UUFDeEMsa0NBT2U7UUFDakIsaUJBQU07O1FBZDRCLGVBQWlCO1FBQWpCLDBDQUFpQjtRQVFuQyxlQUFpQjtRQUFqQixtQ0FBaUIsb0JBQUEseUJBQUEsd0JBQUEsa0JBQUE7O3VGREtwQiwyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3BEO2dHQUdVLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBcUJGLE1BQU07a0JBRFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWllJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5kZWNsYXJlIHZhciBnb29nbGU6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdGltZWxpbmUtY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdGltZWxpbmUtY2hhcnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RpbWVsaW5lQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgbGVnZW5kTGFiZWxzID0gW107XHJcbiAgQElucHV0KCkgY29sTmFtZXM6IEFycmF5PGFueT4gPSBbXTtcclxuICBASW5wdXQoKSBkYXRhOiBBcnJheTxhbnk+ID0gW107XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIG9wdGlvbnMgPSB7XHJcbiAgICBjb2xvcnM6IFsnIzJhN2NmZicsICcjZmZhMjM0J10sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgIGF2b2lkT3ZlcmxhcHBpbmdHcmlkTGluZXM6IGZhbHNlLFxyXG4gICAgdG9vbHRpcDoge1xyXG4gICAgICBpc0h0bWw6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdGltZWxpbmU6IHtcclxuICAgICAgcm93TGFiZWxTdHlsZToge1xyXG4gICAgICAgIGNvbG9yOiAnIzY1NmM3OScsXHJcbiAgICAgICAgZm9udE5hbWU6ICdSb2JvdG8tUmVndWxhcicsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbG9ycyhjb2xvcnMpIHtcclxuICAgIHRoaXMub3B0aW9ucy5jb2xvcnMgPSBjb2xvcnM7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XHJcbiAgICAgIHRoaXMub3BlcmF0ZURhdGEoKTtcclxuICAgIH0gICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMub3BlcmF0ZURhdGEoKTtcclxuICAgIHRoaXMuY2hlY2tMYW5nKCk7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrTGFuZygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja0xhbmcoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdkZSc6XHJcbiAgICAgICAgICAgIGdvb2dsZS5jaGFydHMubG9hZCgnNDYnLCB7IHBhY2thZ2VzOiBbJ2NvcmVjaGFydCddLCBsYW5ndWFnZTogJ2RlJyB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZW4nOlxyXG4gICAgICAgICAgICBnb29nbGUuY2hhcnRzLmxvYWQoJzQ2JywgeyBwYWNrYWdlczogWydjb3JlY2hhcnQnXSwgbGFuZ3VhZ2U6ICdlbicgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2phJzpcclxuICAgICAgICAgICAgZ29vZ2xlLmNoYXJ0cy5sb2FkKCc0NicsIHsgcGFja2FnZXM6IFsnY29yZWNoYXJ0J10sIGxhbmd1YWdlOiAnamEnIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBnb29nbGUuY2hhcnRzLmxvYWQoJzQ2JywgeyBwYWNrYWdlczogWydjb3JlY2hhcnQnXSwgbGFuZ3VhZ2U6ICdlbicgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxufVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgb3BlcmF0ZURhdGEoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5kYXRhW2ldO1xyXG4gICAgICBjb25zdCBjb2xvcklkeCA9IHRoaXMubGVnZW5kTGFiZWxzLmZpbmRJbmRleChjID0+IGMgPT09IGl0ZW1bMV0pO1xyXG4gICAgICBsZXQgY29sb3IgPSAnJztcclxuICAgICAgaWYgKGNvbG9ySWR4ID49IDApIHtcclxuICAgICAgICBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvcnNbY29sb3JJZHhdO1xyXG4gICAgICB9XHJcbiAgICAgIGl0ZW1bMl0gPSB0aGlzLmNyZWF0ZUN1c3RvbVRvb2x0aXAoaXRlbSwgY29sb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDdXN0b21Ub29sdGlwKGRhdGEsIGNvbG9yKSB7XHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IG1vbWVudC5kdXJhdGlvbihtb21lbnQoZGF0YVs0XSkuZGlmZihtb21lbnQoZGF0YVszXSkpKTtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtd3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtdGl0bGVcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LWxlZ2VuZC1tYXJrZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9XCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtbGVnZW5kLWxhYmVsXCI+JHtkYXRhWzFdfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtcHJvamVjdC10aXRsZVwiPiR7ZGF0YVswXX06PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LWRhdGVzXCI+JHt0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gYCR7bW9tZW50KGRhdGFbM10pLmxvY2FsZSgnZGUnKS5mb3JtYXQoJ01NTSBZWVlZJyl9IC0gJHttb21lbnQoZGF0YVs0XSkubG9jYWxlKCdkZScpLmZvcm1hdCgnTU1NIFlZWVknKX1gIDogdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2phJyA/IGAke21vbWVudChkYXRhWzNdKS5mb3JtYXQoJ1lZWVnlubRN5pyIJyl9IC0gJHttb21lbnQoZGF0YVs0XSkuZm9ybWF0KCdZWVlZ5bm0TeaciCcpfWAgOiBgJHttb21lbnQoZGF0YVszXSkuZm9ybWF0KCdNTU0sIFlZWVknKX0gLSAkeyBtb21lbnQoZGF0YVs0XSkuZm9ybWF0KCdNTU0sIFlZWVknKSB9YH08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtZHVyYXRpb24td3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtZHVyYXRpb25cIj4ke3RoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnRGF1ZXInIDogdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2phJyA/ICfmnJ/plpMnIDogJ0R1cmF0aW9uJyB9OjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtZHVyYXRpb24tZGF0ZVwiPiR7ZHVyYXRpb24uZ2V0KCd5ZWFycycpfSAke3RoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgfHwgdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2phJyA/IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnSmFocmUnIDogJ+W5tCcgOiAneWVhcnMnfSwgJHtkdXJhdGlvbi5nZXQoJ21vbnRocycpfSAke3RoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgfHwgdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2phJyA/IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnTW9uYXRlJyA6ICfjg7bmnIgnIDogJ21vbnRocyd9LCAke2R1cmF0aW9uLmdldCgnZGF5cycpfSAke3RoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgfHwgdGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2phJyA/IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnVGFnZScgOiAn5pelJyA6ICdkYXlzJ308L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG59XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtbGVnZW5kLXdyYXBwZXJcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBsYWJlbCBvZiBsZWdlbmRMYWJlbHM7IGluZGV4IGFzIGlcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtbGVnZW5kLW1hcmtlclwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwib3B0aW9ucy5jb2xvcnNbaV1cIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LWxlZ2VuZC1sYWJlbFwiPnt7bGFiZWx9fTwvc3Bhbj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC13cmFwcGVyXCI+XHJcbiAgPGdvb2dsZS1jaGFydCB0eXBlPVwiVGltZWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydFwiXHJcbiAgICAgICAgICAgICAgICBbaGVpZ2h0XT1cImhlaWdodFwiXHJcbiAgICAgICAgICAgICAgICBbd2lkdGhdPVwid2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgW2NvbHVtbnNdPVwiY29sTmFtZXNcIlxyXG4gICAgICAgICAgICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICBbZGF0YV09XCJkYXRhXCI+XHJcbiAgPC9nb29nbGUtY2hhcnQ+XHJcbjwvZGl2PlxyXG4iXX0=