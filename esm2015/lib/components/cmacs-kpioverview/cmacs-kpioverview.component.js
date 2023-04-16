import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { KPI_COLORS } from '../cmacs-kpi/cmacs-kpi.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "ng-zorro-antd/grid";
import * as i3 from "@angular/common";
const _c0 = ["canvas"];
function CmacsKPIOverviewComponent_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsKPIOverviewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, CmacsKPIOverviewComponent_div_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function CmacsKPIOverviewComponent_ng_template_8_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 15);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const kpi_r6 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("color", kpi_r6.color)("opacity", ctx_r5.sanitizeStyle(kpi_r6.opacity));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(kpi_r6.count.toFixed(ctx_r5.fixed));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(kpi_r6.description);
} }
function CmacsKPIOverviewComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, CmacsKPIOverviewComponent_ng_template_8_div_2_Template, 5, 6, "div", 12);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.getColoredData());
} }
export class CmacsKPIOverviewComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.showLegend = true;
        this.fixed = 0;
        this.minWidth = 300;
        this.fontChartNumber = 20;
        this.chartWidth = 84;
        this.p = 1;
        this.type = 'doughnut';
        this.colors = KPI_COLORS;
    }
    ngOnChanges() {
        //
        this.p = 1;
        if (this.view && this.view.length === 2) {
            this.p = this.view[0] > this.minWidth ? this.view[0] / this.minWidth : 1;
        }
        setTimeout(() => {
            if (this.canvasRef) {
                const canvas = this.canvasRef.nativeElement;
                canvas.width = this.chartWidth * this.p;
                canvas.height = this.chartWidth * this.p;
                const ctx = canvas.getContext('2d');
                let startAngle = 0;
                const data = this.getColoredData();
                if (this.getTotalCount() > 0) {
                    for (const categ of data) {
                        const val = categ.count;
                        const sliceAngle = 2 * Math.PI * val / this.getTotalCount();
                        if (sliceAngle > 0) {
                            this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), startAngle, startAngle + sliceAngle - 0.05, categ.color);
                            startAngle += sliceAngle;
                        }
                    }
                }
                else {
                    this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), startAngle, startAngle + 2 * Math.PI, '#dee0e5');
                }
                // drawing a white circle over the chart
                // to create the doughnut chart
                this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, 0.8 * Math.min(canvas.width / 2, canvas.height / 2), 0, 2 * Math.PI, '#ffffff');
                ctx.font = this.fontChartNumber * this.p + 'px Roboto-Regular ';
                ctx.fillStyle = '#3b3f46';
                ctx.textAlign = 'center';
                if (this.titleKPI && this.titleKPI.trim().length > 0) {
                    // draw value
                    ctx.fillText(this.getTotalCount().toFixed(this.fixed), canvas.width / 2, canvas.width / 2);
                    // and text
                    ctx.font = this.fontChartNumber * this.p / 2.5 + 'px Roboto-Regular ';
                    ctx.fillStyle = '#3b3f46';
                    ctx.textAlign = 'center';
                    ctx.fillText(this.titleKPI, canvas.width / 2, canvas.width / 2 + this.fontChartNumber * this.p / 2);
                }
                else {
                    // draw only value
                    ctx.fillText(this.getTotalCount().toFixed(this.fixed), canvas.width / 2, canvas.width / 2 + 8);
                }
            }
        }, 50);
    }
    drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle - Math.PI / 2, endAngle - Math.PI / 2, false);
        ctx.closePath();
        ctx.fill();
    }
    drawArc(ctx, centerX, centerY, radius, startAngle, endAngle) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.stroke();
    }
    sanitizeStyle(style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
    getTotalCount() {
        let total = 0;
        this.data.forEach((item) => {
            total += item.count;
        });
        return total;
    }
    getWidth(count) {
        return count !== 0 ? Math.trunc(count * 100 / this.getTotalCount()) - 2 : 0;
    }
    getColoredData() {
        const coloredData = [];
        const remaining = this.data.length % this.colors.length;
        let rate = this.data.length / this.colors.length;
        if (remaining > 0) {
            rate = Math.trunc(rate) + 1;
        }
        let tempRate = rate;
        let opacity = 1;
        let colorIndex = 0;
        this.data.forEach((item) => {
            if (tempRate === 0) {
                tempRate = rate;
                colorIndex += 1;
                opacity = 1;
            }
            if (colorIndex >= this.colors.length) {
                colorIndex = 0;
            }
            if (opacity === 0.4) {
                opacity = 1;
            }
            coloredData.push({
                count: item.count,
                description: item.description,
                color: this.colors[colorIndex],
                opacity
            });
            opacity = opacity - 0.2;
            tempRate--;
        });
        return coloredData;
    }
}
CmacsKPIOverviewComponent.ɵfac = function CmacsKPIOverviewComponent_Factory(t) { return new (t || CmacsKPIOverviewComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
CmacsKPIOverviewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsKPIOverviewComponent, selectors: [["cmacs-kpi-overview"]], viewQuery: function CmacsKPIOverviewComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvasRef = _t.first);
    } }, inputs: { showLegend: "showLegend", data: "data", title: "title", titleKPI: "titleKPI", view: "view", fixed: "fixed", colors: "colors" }, features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 1, consts: [[1, "cmacs-kpi-overview-row"], ["nz-col", "", 1, "cmacs-kpi-overview-container"], [1, "cmacs-kpi-overview-wrapper"], [1, "cmacs-kpi-overview-count-wrapper"], [1, "cmacs-kpi-overview-total-count"], [1, "cmacs-kpi-overview-chart"], ["canvas", ""], ["nz-col", "", "class", "cmacs-kpi-overview-legend-wrapper", 4, "ngIf"], ["legend", ""], ["nz-col", "", 1, "cmacs-kpi-overview-legend-wrapper"], [4, "ngTemplateOutlet"], [1, "cmacs-kpi-overview-title"], ["class", "cmacs-kpi-legend-wrapper", 4, "ngFor", "ngForOf"], [1, "cmacs-kpi-legend-wrapper"], [1, "cmacs-kpi-count"], [1, "cmacs-kpi-description"]], template: function CmacsKPIOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelement(4, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "canvas", 5, 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, CmacsKPIOverviewComponent_div_7_Template, 2, 1, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, CmacsKPIOverviewComponent_ng_template_8_Template, 3, 2, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.showLegend);
    } }, directives: [i2.NzColDirective, i3.NgIf, i3.NgTemplateOutlet, i3.NgForOf], styles: ["[_nghost-%COMP%]{display:flex;min-width:223px;min-height:120px;height:100%;padding:33px;background-color:#fff}.cmacs-kpi-overview-container[_ngcontent-%COMP%]{margin-right:25px}.cmacs-kpi-total-count[_ngcontent-%COMP%]{margin-right:10px;margin-top:-2px;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left[_ngcontent-%COMP%]{border-radius:100px 0 0 100px}.border-radius-right[_ngcontent-%COMP%]{border-radius:0 100px 100px 0}.cmacs-kpi-overview-row[_ngcontent-%COMP%]{display:flex}.cmacs-kpi-overview-chart[_ngcontent-%COMP%]{position:relative;top:-31px}.cmacs-kpi-divider[_ngcontent-%COMP%]{display:inline-block;width:2px;height:9px;border-radius:100px;margin-right:8px}.cmacs-kpi-count[_ngcontent-%COMP%]{font-weight:600;color:#3b4043;margin-right:4px;min-width:20px}.cmacs-kpi-count[_ngcontent-%COMP%], .cmacs-kpi-description[_ngcontent-%COMP%]{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal}.cmacs-kpi-description[_ngcontent-%COMP%]{font-weight:400;color:#656c79}.cmacs-kpi-wrapper[_ngcontent-%COMP%]{display:flex}.cmacs-kpi-overview-title[_ngcontent-%COMP%]{font-family:Roboto-Regular;font-size:14px;line-height:1.29;letter-spacing:normal;color:#3b3f46;margin-bottom:10px;font-weight:700}.cmacs-kpi-overview-wrapper[_ngcontent-%COMP%]{margin-top:3px;margin-left:5px;height:30px;padding-top:25px}.cmacs-kpi-overview-total-count[_ngcontent-%COMP%]{position:relative;font-size:20px;font-weight:600;color:#3b4043;text-align:center;top:28px;z-index:100}.cmacs-kpi-overview-legend-wrapper[_ngcontent-%COMP%]{float:right;display:inline-block;margin:4px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsKPIOverviewComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-kpi-overview',
                templateUrl: './cmacs-kpioverview.component.html',
                styleUrls: ['./cmacs-kpioverview.component.css']
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, { showLegend: [{
            type: Input
        }], data: [{
            type: Input
        }], title: [{
            type: Input
        }], titleKPI: [{
            type: Input
        }], view: [{
            type: Input
        }], fixed: [{
            type: Input
        }], colors: [{
            type: Input
        }], canvasRef: [{
            type: ViewChild,
            args: ['canvas', { read: ElementRef, static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3Bpb3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWtwaW92ZXJ2aWV3L2NtYWNzLWtwaW92ZXJ2aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGlvdmVydmlldy9jbWFjcy1rcGlvdmVydmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQU8sVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7SUNTOUQsd0JBQXdEOzs7SUFEM0QsOEJBQXlFO0lBQ3RFLG1HQUF3RDtJQUMzRCxpQkFBTTs7OztJQURZLGVBQXdCO0lBQXhCLHNDQUF3Qjs7O0lBSzFDLCtCQUdDO0lBQ0MsK0JBQzZDO0lBQUEsWUFBNEI7SUFBQSxpQkFBTTtJQUMvRSwrQkFBbUM7SUFBQSxZQUFtQjtJQUFBLGlCQUFNO0lBQzlELGlCQUFNOzs7O0lBSHlCLGVBQXlCO0lBQXpCLHFDQUF5QixpREFBQTtJQUNULGVBQTRCO0lBQTVCLHdEQUE0QjtJQUN0QyxlQUFtQjtJQUFuQix3Q0FBbUI7OztJQVB4RCwrQkFBc0M7SUFBQSxZQUFTO0lBQUEsaUJBQU07SUFDckQseUZBT007OztJQVJnQyxlQUFTO0lBQVQsa0NBQVM7SUFHN0IsZUFBcUI7SUFBckIsaURBQXFCOztBRFJ6QyxNQUFNLE9BQU8seUJBQXlCO0lBaUJwQyxZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBZmxDLGVB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a0JBQWIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFNRyxNQUFNO2tCQUFkLEtBQUs7WUFFb0QsU0FBUztrQkFBbEUsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtQSSwgS1BJX0NPTE9SUyB9IGZyb20gJy4uL2NtYWNzLWtwaS9jbWFjcy1rcGkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWtwaS1vdmVydmlldycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWtwaW92ZXJ2aWV3LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1rcGlvdmVydmlldy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzS1BJT3ZlcnZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBzaG93TGVnZW5kID0gdHJ1ZTtcclxuICBASW5wdXQoKSBkYXRhOiBLUElbXTtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpdGxlS1BJOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmlldyE6IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIGZpeGVkID0gMDtcclxuICBtaW5XaWR0aCA9IDMwMDtcclxuICBmb250Q2hhcnROdW1iZXIgPSAyMDtcclxuICBjaGFydFdpZHRoID0gODQ7XHJcbiAgcCA9IDE7XHJcbiAgdHlwZSA9ICdkb3VnaG51dCc7XHJcbiAgQElucHV0KCkgY29sb3JzOiBzdHJpbmdbXSA9IEtQSV9DT0xPUlM7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NhbnZhcycsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBjYW52YXNSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIC8vXHJcbiAgICB0aGlzLnAgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMucCA9IHRoaXMudmlld1swXSA+IHRoaXMubWluV2lkdGggPyB0aGlzLnZpZXdbMF0gLyB0aGlzLm1pbldpZHRoIDogMTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2FudmFzUmVmKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmNoYXJ0V2lkdGggKiB0aGlzLnA7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY2hhcnRXaWR0aCAqIHRoaXMucDtcclxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSAwO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldENvbG9yZWREYXRhKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0VG90YWxDb3VudCgpID4gMCkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBjYXRlZyBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGNhdGVnLmNvdW50O1xyXG4gICAgICAgICAgICBjb25zdCBzbGljZUFuZ2xlID0gMiAqIE1hdGguUEkgKiB2YWwgLyB0aGlzLmdldFRvdGFsQ291bnQoKTtcclxuICAgICAgICAgICAgaWYgKHNsaWNlQW5nbGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICBNYXRoLm1pbihjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiksXHJcbiAgICAgICAgICAgICAgICBzdGFydEFuZ2xlLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRBbmdsZSArIHNsaWNlQW5nbGUgLSAwLjA1LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWcuY29sb3JcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUgKz0gc2xpY2VBbmdsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpLFxyXG4gICAgICAgICAgICBzdGFydEFuZ2xlLFxyXG4gICAgICAgICAgICBzdGFydEFuZ2xlICsgMiAqIE1hdGguUEksXHJcbiAgICAgICAgICAgICcjZGVlMGU1J1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZHJhd2luZyBhIHdoaXRlIGNpcmNsZSBvdmVyIHRoZSBjaGFydFxyXG4gICAgICAgIC8vIHRvIGNyZWF0ZSB0aGUgZG91Z2hudXQgY2hhcnRcclxuICAgICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICAgIGN0eCxcclxuICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMixcclxuICAgICAgICAgIDAuOCAqIE1hdGgubWluKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKSxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAyICogTWF0aC5QSSxcclxuICAgICAgICAgICcjZmZmZmZmJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgY3R4LmZvbnQgPSB0aGlzLmZvbnRDaGFydE51bWJlciAqIHRoaXMucCArICdweCBSb2JvdG8tUmVndWxhciAnO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzNiM2Y0Nic7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgIGlmICh0aGlzLnRpdGxlS1BJICYmIHRoaXMudGl0bGVLUEkudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIC8vIGRyYXcgdmFsdWVcclxuICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmdldFRvdGFsQ291bnQoKS50b0ZpeGVkKHRoaXMuZml4ZWQpLCBjYW52YXMud2lkdGggLyAyLCBjYW52YXMud2lkdGggLyAyKTtcclxuICAgICAgICAgIC8vIGFuZCB0ZXh0XHJcbiAgICAgICAgICBjdHguZm9udCA9IHRoaXMuZm9udENoYXJ0TnVtYmVyICogdGhpcy5wIC8gMi41ICsgJ3B4IFJvYm90by1SZWd1bGFyICc7XHJcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMzYjNmNDYnO1xyXG4gICAgICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGl0bGVLUEksIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy53aWR0aCAvIDIgKyB0aGlzLmZvbnRDaGFydE51bWJlciAqIHRoaXMucCAvIDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBkcmF3IG9ubHkgdmFsdWVcclxuICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmdldFRvdGFsQ291bnQoKS50b0ZpeGVkKHRoaXMuZml4ZWQpLCBjYW52YXMud2lkdGggLyAyLCBjYW52YXMud2lkdGggLyAyICsgOCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfSwgNTApO1xyXG4gIH1cclxuXHJcbiAgZHJhd1BpZVNsaWNlKGN0eDogYW55LCBjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlciwgY29sb3I6IGFueSk6IHZvaWQge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbyhjZW50ZXJYLCBjZW50ZXJZKTtcclxuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCBzdGFydEFuZ2xlIC0gTWF0aC5QSSAvIDIsIGVuZEFuZ2xlIC0gTWF0aC5QSSAvIDIsIGZhbHNlKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3QXJjKGN0eDogYW55LCBjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIHNhbml0aXplU3R5bGUoc3R5bGU6IHN0cmluZyk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlKTtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsQ291bnQoKTogbnVtYmVyIHtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICB0b3RhbCArPSBpdGVtLmNvdW50O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdG90YWw7XHJcbiAgfVxyXG5cclxuICBnZXRXaWR0aChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBjb3VudCAhPT0gMCA/IE1hdGgudHJ1bmMoY291bnQgKiAxMDAgLyB0aGlzLmdldFRvdGFsQ291bnQoKSkgLSAyIDogMDtcclxuICB9XHJcblxyXG4gIGdldENvbG9yZWREYXRhKCk6IGFueSB7XHJcbiAgICBjb25zdCBjb2xvcmVkRGF0YTogYW55ID0gW107XHJcbiAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmRhdGEubGVuZ3RoICUgdGhpcy5jb2xvcnMubGVuZ3RoO1xyXG4gICAgbGV0IHJhdGUgPSB0aGlzLmRhdGEubGVuZ3RoIC8gdGhpcy5jb2xvcnMubGVuZ3RoO1xyXG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcclxuICAgICAgcmF0ZSA9IE1hdGgudHJ1bmMocmF0ZSkgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0ZW1wUmF0ZSA9IHJhdGU7XHJcbiAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICBsZXQgY29sb3JJbmRleCA9IDA7XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAodGVtcFJhdGUgPT09IDApIHtcclxuICAgICAgICB0ZW1wUmF0ZSA9IHJhdGU7XHJcbiAgICAgICAgY29sb3JJbmRleCArPSAxO1xyXG4gICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29sb3JJbmRleCA+PSB0aGlzLmNvbG9ycy5sZW5ndGgpIHtcclxuICAgICAgICBjb2xvckluZGV4ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG9wYWNpdHkgPT09IDAuNCkge1xyXG4gICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb2xvcmVkRGF0YS5wdXNoKHtcclxuICAgICAgICBjb3VudDogaXRlbS5jb3VudCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICBjb2xvcjogdGhpcy5jb2xvcnNbY29sb3JJbmRleF0sXHJcbiAgICAgICAgb3BhY2l0eVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG9wYWNpdHkgPSBvcGFjaXR5IC0gMC4yO1xyXG4gICAgICB0ZW1wUmF0ZS0tO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbG9yZWREYXRhO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLW92ZXJ2aWV3LXJvd1wiPlxyXG4gIDxkaXYgbnotY29sIGNsYXNzPVwiY21hY3Mta3BpLW92ZXJ2aWV3LWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1vdmVydmlldy13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktb3ZlcnZpZXctY291bnQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktb3ZlcnZpZXctdG90YWwtY291bnRcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxjYW52YXMgI2NhbnZhcyBjbGFzcz1cImNtYWNzLWtwaS1vdmVydmlldy1jaGFydFwiPjwvY2FudmFzPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBuei1jb2wgY2xhc3M9XCJjbWFjcy1rcGktb3ZlcnZpZXctbGVnZW5kLXdyYXBwZXJcIiAqbmdJZj1cInNob3dMZWdlbmRcIj5cclxuICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGVnZW5kXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48bmctdGVtcGxhdGUgI2xlZ2VuZD5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLW92ZXJ2aWV3LXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJjbWFjcy1rcGktbGVnZW5kLXdyYXBwZXJcIlxyXG4gICAgKm5nRm9yPVwibGV0IGtwaSBvZiBnZXRDb2xvcmVkRGF0YSgpOyBpbmRleCBhcyBpXCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLWNvdW50XCIgW3N0eWxlLmNvbG9yXT1cImtwaS5jb2xvclwiXHJcbiAgICBbc3R5bGUub3BhY2l0eV09XCJzYW5pdGl6ZVN0eWxlKGtwaS5vcGFjaXR5KVwiPnt7a3BpLmNvdW50LnRvRml4ZWQoZml4ZWQpfX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktZGVzY3JpcHRpb25cIj57e2twaS5kZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+Il19