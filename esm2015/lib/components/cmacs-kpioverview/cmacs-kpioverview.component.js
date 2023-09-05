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
            var _a, _b;
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
                    ctx.fillText(((_a = this.titleValue) !== null && _a !== void 0 ? _a : this.getTotalCount()).toFixed(this.fixed), canvas.width / 2, canvas.width / 2);
                    // and text
                    ctx.font = this.fontChartNumber * this.p / 2.5 + 'px Roboto-Regular ';
                    ctx.fillStyle = '#3b3f46';
                    ctx.textAlign = 'center';
                    ctx.fillText(this.titleKPI, canvas.width / 2, canvas.width / 2 + this.fontChartNumber * this.p / 2);
                }
                else {
                    // draw only value
                    ctx.fillText(((_b = this.titleValue) !== null && _b !== void 0 ? _b : this.getTotalCount()).toFixed(this.fixed), canvas.width / 2, canvas.width / 2 + 8);
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
    } }, inputs: { showLegend: "showLegend", data: "data", title: "title", titleKPI: "titleKPI", titleValue: "titleValue", view: "view", fixed: "fixed", colors: "colors" }, features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 1, consts: [[1, "cmacs-kpi-overview-row"], ["nz-col", "", 1, "cmacs-kpi-overview-container"], [1, "cmacs-kpi-overview-wrapper"], [1, "cmacs-kpi-overview-count-wrapper"], [1, "cmacs-kpi-overview-total-count"], [1, "cmacs-kpi-overview-chart"], ["canvas", ""], ["nz-col", "", "class", "cmacs-kpi-overview-legend-wrapper", 4, "ngIf"], ["legend", ""], ["nz-col", "", 1, "cmacs-kpi-overview-legend-wrapper"], [4, "ngTemplateOutlet"], [1, "cmacs-kpi-overview-title"], ["class", "cmacs-kpi-legend-wrapper", 4, "ngFor", "ngForOf"], [1, "cmacs-kpi-legend-wrapper"], [1, "cmacs-kpi-count"], [1, "cmacs-kpi-description"]], template: function CmacsKPIOverviewComponent_Template(rf, ctx) { if (rf & 1) {
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
        }], titleValue: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3Bpb3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWtwaW92ZXJ2aWV3L2NtYWNzLWtwaW92ZXJ2aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGlvdmVydmlldy9jbWFjcy1rcGlvdmVydmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQU8sVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7SUNTOUQsd0JBQXdEOzs7SUFEM0QsOEJBQXlFO0lBQ3RFLG1HQUF3RDtJQUMzRCxpQkFBTTs7OztJQURZLGVBQXdCO0lBQXhCLHNDQUF3Qjs7O0lBSzFDLCtCQUdDO0lBQ0MsK0JBQzZDO0lBQUEsWUFBNEI7SUFBQSxpQkFBTTtJQUMvRSwrQkFBbUM7SUFBQSxZQUFtQjtJQUFBLGlCQUFNO0lBQzlELGlCQUFNOzs7O0lBSHlCLGVBQXlCO0lBQXpCLHFDQUF5QixpREFBQTtJQUNULGVBQTRCO0lBQTVCLHdEQUE0QjtJQUN0QyxlQUFtQjtJQUFuQix3Q0FBbUI7OztJQVB4RCwrQkFBc0M7SUFBQSxZQUFTO0lBQUEsaUJBQU07SUFDckQseUZBT007OztJQVJnQyxlQUFTO0lBQVQsa0NBQVM7SUFHN0IsZUFBcUI7SUFBckIsaURBQXFCOztBRFJ6QyxNQUFNLE9BQU8seUJBQXlCO0lBa0JwQyxZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBaEJsQyxl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Q0FBQzthQUNqRDsrREFHVSxVQUFVO2tCQUFsQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFNRyxNQUFNO2tCQUFkLEtBQUs7WUFFb0QsU0FBUztrQkFBbEUsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtQSSwgS1BJX0NPTE9SUyB9IGZyb20gJy4uL2NtYWNzLWtwaS9jbWFjcy1rcGkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWtwaS1vdmVydmlldycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWtwaW92ZXJ2aWV3LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1rcGlvdmVydmlldy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzS1BJT3ZlcnZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBzaG93TGVnZW5kID0gdHJ1ZTtcclxuICBASW5wdXQoKSBkYXRhOiBLUElbXTtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpdGxlS1BJOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGl0bGVWYWx1ZSE6IG51bWJlcjtcclxuICBASW5wdXQoKSB2aWV3ITogbnVtYmVyW107XHJcbiAgQElucHV0KCkgZml4ZWQgPSAwO1xyXG4gIG1pbldpZHRoID0gMzAwO1xyXG4gIGZvbnRDaGFydE51bWJlciA9IDIwO1xyXG4gIGNoYXJ0V2lkdGggPSA4NDtcclxuICBwID0gMTtcclxuICB0eXBlID0gJ2RvdWdobnV0JztcclxuICBASW5wdXQoKSBjb2xvcnM6IHN0cmluZ1tdID0gS1BJX0NPTE9SUztcclxuXHJcbiAgQFZpZXdDaGlsZCgnY2FudmFzJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIGNhbnZhc1JlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgLy9cclxuICAgIHRoaXMucCA9IDE7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5wID0gdGhpcy52aWV3WzBdID4gdGhpcy5taW5XaWR0aCA/IHRoaXMudmlld1swXSAvIHRoaXMubWluV2lkdGggOiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jYW52YXNSZWYpIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhc1JlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAqIHRoaXMucDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5jaGFydFdpZHRoICogdGhpcy5wO1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IDA7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0Q29sb3JlZERhdGEoKTtcclxuICAgICAgICBpZiAodGhpcy5nZXRUb3RhbENvdW50KCkgPiAwKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGNhdGVnIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gY2F0ZWcuY291bnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlQW5nbGUgPSAyICogTWF0aC5QSSAqIHZhbCAvIHRoaXMuZ2V0VG90YWxDb3VudCgpO1xyXG4gICAgICAgICAgICBpZiAoc2xpY2VBbmdsZSA+IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgIE1hdGgubWluKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0QW5nbGUsXHJcbiAgICAgICAgICAgICAgICBzdGFydEFuZ2xlICsgc2xpY2VBbmdsZSAtIDAuMDUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZy5jb2xvclxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSArPSBzbGljZUFuZ2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiksXHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUsXHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUgKyAyICogTWF0aC5QSSxcclxuICAgICAgICAgICAgJyNkZWUwZTUnXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkcmF3aW5nIGEgd2hpdGUgY2lyY2xlIG92ZXIgdGhlIGNoYXJ0XHJcbiAgICAgICAgLy8gdG8gY3JlYXRlIHRoZSBkb3VnaG51dCBjaGFydFxyXG4gICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgY2FudmFzLndpZHRoIC8gMixcclxuICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgMC44ICogTWF0aC5taW4oY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDIgKiBNYXRoLlBJLFxyXG4gICAgICAgICAgJyNmZmZmZmYnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjdHguZm9udCA9IHRoaXMuZm9udENoYXJ0TnVtYmVyICogdGhpcy5wICsgJ3B4IFJvYm90by1SZWd1bGFyICc7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjM2IzZjQ2JztcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgaWYgKHRoaXMudGl0bGVLUEkgJiYgdGhpcy50aXRsZUtQSS50cmltKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgLy8gZHJhdyB2YWx1ZVxyXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCh0aGlzLnRpdGxlVmFsdWUgPz8gdGhpcy5nZXRUb3RhbENvdW50KCkpLnRvRml4ZWQodGhpcy5maXhlZCksIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgLy8gYW5kIHRleHRcclxuICAgICAgICAgIGN0eC5mb250ID0gdGhpcy5mb250Q2hhcnROdW1iZXIgKiB0aGlzLnAgLyAyLjUgKyAncHggUm9ib3RvLVJlZ3VsYXIgJztcclxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzNiM2Y0Nic7XHJcbiAgICAgICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy50aXRsZUtQSSwgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLndpZHRoIC8gMiArIHRoaXMuZm9udENoYXJ0TnVtYmVyICogdGhpcy5wIC8gMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGRyYXcgb25seSB2YWx1ZVxyXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCh0aGlzLnRpdGxlVmFsdWUgPz8gdGhpcy5nZXRUb3RhbENvdW50KCkpLnRvRml4ZWQodGhpcy5maXhlZCksIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy53aWR0aCAvIDIgKyA4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9LCA1MCk7XHJcbiAgfVxyXG5cclxuICBkcmF3UGllU2xpY2UoY3R4OiBhbnksIGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyLCBjb2xvcjogYW55KTogdm9pZCB7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKGNlbnRlclgsIGNlbnRlclkpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUgLSBNYXRoLlBJIC8gMiwgZW5kQW5nbGUgLSBNYXRoLlBJIC8gMiwgZmFsc2UpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICB9XHJcblxyXG4gIGRyYXdBcmMoY3R4OiBhbnksIGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgc2FuaXRpemVTdHlsZShzdHlsZTogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoc3R5bGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG90YWxDb3VudCgpOiBudW1iZXIge1xyXG4gICAgbGV0IHRvdGFsID0gMDtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHRvdGFsICs9IGl0ZW0uY291bnQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0b3RhbDtcclxuICB9XHJcblxyXG4gIGdldFdpZHRoKGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGNvdW50ICE9PSAwID8gTWF0aC50cnVuYyhjb3VudCAqIDEwMCAvIHRoaXMuZ2V0VG90YWxDb3VudCgpKSAtIDIgOiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29sb3JlZERhdGEoKTogYW55IHtcclxuICAgIGNvbnN0IGNvbG9yZWREYXRhOiBhbnkgPSBbXTtcclxuICAgIGNvbnN0IHJlbWFpbmluZyA9IHRoaXMuZGF0YS5sZW5ndGggJSB0aGlzLmNvbG9ycy5sZW5ndGg7XHJcbiAgICBsZXQgcmF0ZSA9IHRoaXMuZGF0YS5sZW5ndGggLyB0aGlzLmNvbG9ycy5sZW5ndGg7XHJcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xyXG4gICAgICByYXRlID0gTWF0aC50cnVuYyhyYXRlKSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRlbXBSYXRlID0gcmF0ZTtcclxuICAgIGxldCBvcGFjaXR5ID0gMTtcclxuICAgIGxldCBjb2xvckluZGV4ID0gMDtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICh0ZW1wUmF0ZSA9PT0gMCkge1xyXG4gICAgICAgIHRlbXBSYXRlID0gcmF0ZTtcclxuICAgICAgICBjb2xvckluZGV4ICs9IDE7XHJcbiAgICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb2xvckluZGV4ID49IHRoaXMuY29sb3JzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbG9ySW5kZXggPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAob3BhY2l0eSA9PT0gMC40KSB7XHJcbiAgICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbG9yZWREYXRhLnB1c2goe1xyXG4gICAgICAgIGNvdW50OiBpdGVtLmNvdW50LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yc1tjb2xvckluZGV4XSxcclxuICAgICAgICBvcGFjaXR5XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgb3BhY2l0eSA9IG9wYWNpdHkgLSAwLjI7XHJcbiAgICAgIHRlbXBSYXRlLS07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29sb3JlZERhdGE7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjbWFjcy1rcGktb3ZlcnZpZXctcm93XCI+XHJcbiAgPGRpdiBuei1jb2wgY2xhc3M9XCJjbWFjcy1rcGktb3ZlcnZpZXctY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLW92ZXJ2aWV3LXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1vdmVydmlldy1jb3VudC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1vdmVydmlldy10b3RhbC1jb3VudFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGNhbnZhcyAjY2FudmFzIGNsYXNzPVwiY21hY3Mta3BpLW92ZXJ2aWV3LWNoYXJ0XCI+PC9jYW52YXM+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IG56LWNvbCBjbGFzcz1cImNtYWNzLWtwaS1vdmVydmlldy1sZWdlbmQtd3JhcHBlclwiICpuZ0lmPVwic2hvd0xlZ2VuZFwiPlxyXG4gICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsZWdlbmRcIj48L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxuZy10ZW1wbGF0ZSAjbGVnZW5kPlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktb3ZlcnZpZXctdGl0bGVcIj57e3RpdGxlfX08L2Rpdj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImNtYWNzLWtwaS1sZWdlbmQtd3JhcHBlclwiXHJcbiAgICAqbmdGb3I9XCJsZXQga3BpIG9mIGdldENvbG9yZWREYXRhKCk7IGluZGV4IGFzIGlcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktY291bnRcIiBbc3R5bGUuY29sb3JdPVwia3BpLmNvbG9yXCJcclxuICAgIFtzdHlsZS5vcGFjaXR5XT1cInNhbml0aXplU3R5bGUoa3BpLm9wYWNpdHkpXCI+e3trcGkuY291bnQudG9GaXhlZChmaXhlZCl9fTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1kZXNjcmlwdGlvblwiPnt7a3BpLmRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT4iXX0=