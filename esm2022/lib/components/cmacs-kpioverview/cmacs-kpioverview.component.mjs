import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { KPI_COLORS } from '../cmacs-kpi/cmacs-kpi.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/grid";
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
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 15);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
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
                    ctx.fillText((this.titleValue ?? this.getTotalCount()).toFixed(this.fixed), canvas.width / 2, canvas.width / 2);
                    // and text
                    ctx.font = this.fontChartNumber * this.p / 2.5 + 'px Roboto-Regular ';
                    ctx.fillStyle = '#3b3f46';
                    ctx.textAlign = 'center';
                    ctx.fillText(this.titleKPI, canvas.width / 2, canvas.width / 2 + this.fontChartNumber * this.p / 2);
                }
                else {
                    // draw only value
                    ctx.fillText((this.titleValue ?? this.getTotalCount()).toFixed(this.fixed), canvas.width / 2, canvas.width / 2 + 8);
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
    static { this.ɵfac = function CmacsKPIOverviewComponent_Factory(t) { return new (t || CmacsKPIOverviewComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsKPIOverviewComponent, selectors: [["cmacs-kpi-overview"]], viewQuery: function CmacsKPIOverviewComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvasRef = _t.first);
        } }, inputs: { showLegend: "showLegend", data: "data", title: "title", titleKPI: "titleKPI", titleValue: "titleValue", view: "view", fixed: "fixed", colors: "colors" }, features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 1, consts: [[1, "cmacs-kpi-overview-row"], ["nz-col", "", 1, "cmacs-kpi-overview-container"], [1, "cmacs-kpi-overview-wrapper"], [1, "cmacs-kpi-overview-count-wrapper"], [1, "cmacs-kpi-overview-total-count"], [1, "cmacs-kpi-overview-chart"], ["canvas", ""], ["nz-col", "", "class", "cmacs-kpi-overview-legend-wrapper", 4, "ngIf"], ["legend", ""], ["nz-col", "", 1, "cmacs-kpi-overview-legend-wrapper"], [4, "ngTemplateOutlet"], [1, "cmacs-kpi-overview-title"], ["class", "cmacs-kpi-legend-wrapper", 4, "ngFor", "ngForOf"], [1, "cmacs-kpi-legend-wrapper"], [1, "cmacs-kpi-count"], [1, "cmacs-kpi-description"]], template: function CmacsKPIOverviewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵelement(4, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "canvas", 5, 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, CmacsKPIOverviewComponent_div_7_Template, 2, 1, "div", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, CmacsKPIOverviewComponent_ng_template_8_Template, 3, 2, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.showLegend);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.NzColDirective], styles: ["[_nghost-%COMP%]{display:flex;min-width:223px;min-height:120px;height:100%;padding:33px;background-color:#fff}.cmacs-kpi-overview-container[_ngcontent-%COMP%]{margin-right:25px}.cmacs-kpi-total-count[_ngcontent-%COMP%]{margin-right:10px;margin-top:-2px;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left[_ngcontent-%COMP%]{border-radius:100px 0 0 100px}.border-radius-right[_ngcontent-%COMP%]{border-radius:0 100px 100px 0}.cmacs-kpi-overview-row[_ngcontent-%COMP%]{display:flex}.cmacs-kpi-overview-chart[_ngcontent-%COMP%]{position:relative;top:-31px}.cmacs-kpi-divider[_ngcontent-%COMP%]{display:inline-block;width:2px;height:9px;border-radius:100px;margin-right:8px}.cmacs-kpi-count[_ngcontent-%COMP%]{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px;min-width:20px}.cmacs-kpi-description[_ngcontent-%COMP%]{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-wrapper[_ngcontent-%COMP%]{display:flex}.cmacs-kpi-overview-title[_ngcontent-%COMP%]{font-family:Roboto-Regular;font-size:14px;line-height:1.29;letter-spacing:normal;color:#3b3f46;margin-bottom:10px;font-weight:700}.cmacs-kpi-overview-wrapper[_ngcontent-%COMP%]{margin-top:3px;margin-left:5px;height:30px;padding-top:25px}.cmacs-kpi-overview-total-count[_ngcontent-%COMP%]{position:relative;font-size:20px;font-weight:600;color:#3b4043;text-align:center;top:28px;z-index:100}.cmacs-kpi-overview-legend-wrapper[_ngcontent-%COMP%]{float:right;display:inline-block;margin:4px}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsKPIOverviewComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-kpi-overview', template: "<div class=\"cmacs-kpi-overview-row\">\r\n  <div nz-col class=\"cmacs-kpi-overview-container\">\r\n    <div class=\"cmacs-kpi-overview-wrapper\">\r\n      <div class=\"cmacs-kpi-overview-count-wrapper\">\r\n        <div class=\"cmacs-kpi-overview-total-count\"></div>\r\n      </div>\r\n      <canvas #canvas class=\"cmacs-kpi-overview-chart\"></canvas>\r\n    </div>\r\n  </div>\r\n  <div nz-col class=\"cmacs-kpi-overview-legend-wrapper\" *ngIf=\"showLegend\">\r\n     <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n  </div>\r\n</div>\r\n<ng-template #legend>\r\n  <div class=\"cmacs-kpi-overview-title\">{{title}}</div>\r\n  <div\r\n    class=\"cmacs-kpi-legend-wrapper\"\r\n    *ngFor=\"let kpi of getColoredData(); index as i\"\r\n  >\r\n    <div class=\"cmacs-kpi-count\" [style.color]=\"kpi.color\"\r\n    [style.opacity]=\"sanitizeStyle(kpi.opacity)\">{{kpi.count.toFixed(fixed)}}</div>\r\n    <div class=\"cmacs-kpi-description\">{{kpi.description}}</div>\r\n  </div>\r\n</ng-template>", styles: [":host{display:flex;min-width:223px;min-height:120px;height:100%;padding:33px;background-color:#fff}.cmacs-kpi-overview-container{margin-right:25px}.cmacs-kpi-total-count{margin-right:10px;margin-top:-2px;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left{border-radius:100px 0 0 100px}.border-radius-right{border-radius:0 100px 100px 0}.cmacs-kpi-overview-row{display:flex}.cmacs-kpi-overview-chart{position:relative;top:-31px}.cmacs-kpi-divider{display:inline-block;width:2px;height:9px;border-radius:100px;margin-right:8px}.cmacs-kpi-count{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px;min-width:20px}.cmacs-kpi-description{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-wrapper{display:flex}.cmacs-kpi-overview-title{font-family:Roboto-Regular;font-size:14px;line-height:1.29;letter-spacing:normal;color:#3b3f46;margin-bottom:10px;font-weight:700}.cmacs-kpi-overview-wrapper{margin-top:3px;margin-left:5px;height:30px;padding-top:25px}.cmacs-kpi-overview-total-count{position:relative;font-size:20px;font-weight:600;color:#3b4043;text-align:center;top:28px;z-index:100}.cmacs-kpi-overview-legend-wrapper{float:right;display:inline-block;margin:4px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3Bpb3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWtwaW92ZXJ2aWV3L2NtYWNzLWtwaW92ZXJ2aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGlvdmVydmlldy9jbWFjcy1rcGlvdmVydmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQU8sVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7SUNTOUQsd0JBQXdEOzs7SUFEM0QsOEJBQXlFO0lBQ3RFLG1HQUF3RDtJQUMzRCxpQkFBTTs7OztJQURZLGVBQXdCO0lBQXhCLHNDQUF3Qjs7O0lBSzFDLCtCQUdDLGNBQUE7SUFFOEMsWUFBNEI7SUFBQSxpQkFBTTtJQUMvRSwrQkFBbUM7SUFBQSxZQUFtQjtJQUFBLGlCQUFNLEVBQUE7Ozs7SUFGL0IsZUFBeUI7SUFBekIscUNBQXlCLGlEQUFBO0lBQ1QsZUFBNEI7SUFBNUIsd0RBQTRCO0lBQ3RDLGVBQW1CO0lBQW5CLHdDQUFtQjs7O0lBUHhELCtCQUFzQztJQUFBLFlBQVM7SUFBQSxpQkFBTTtJQUNyRCx5RkFPTTs7O0lBUmdDLGVBQVM7SUFBVCxrQ0FBUztJQUc3QixlQUFxQjtJQUFyQixpREFBcUI7O0FEUnpDLE1BQU0sT0FBTyx5QkFBeUI7SUFrQnBDLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFoQmxDLGVBQVUsR0FBRyxJQUFJ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LElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQU1HLE1BQU07a0JBQWQsS0FBSztZQUVvRCxTQUFTO2tCQUFsRSxTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS1BJLCBLUElfQ09MT1JTIH0gZnJvbSAnLi4vY21hY3Mta3BpL2NtYWNzLWtwaS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mta3BpLW92ZXJ2aWV3JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mta3Bpb3ZlcnZpZXcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWtwaW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NLUElPdmVydmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIHNob3dMZWdlbmQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGRhdGE6IEtQSVtdO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGl0bGVLUEk6IHN0cmluZztcclxuICBASW5wdXQoKSB0aXRsZVZhbHVlITogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHZpZXchOiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBmaXhlZCA9IDA7XHJcbiAgbWluV2lkdGggPSAzMDA7XHJcbiAgZm9udENoYXJ0TnVtYmVyID0gMjA7XHJcbiAgY2hhcnRXaWR0aCA9IDg0O1xyXG4gIHAgPSAxO1xyXG4gIHR5cGUgPSAnZG91Z2hudXQnO1xyXG4gIEBJbnB1dCgpIGNvbG9yczogc3RyaW5nW10gPSBLUElfQ09MT1JTO1xyXG5cclxuICBAVmlld0NoaWxkKCdjYW52YXMnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSkgY2FudmFzUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5wID0gMTtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLnAgPSB0aGlzLnZpZXdbMF0gPiB0aGlzLm1pbldpZHRoID8gdGhpcy52aWV3WzBdIC8gdGhpcy5taW5XaWR0aCA6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNhbnZhc1JlZikge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5jaGFydFdpZHRoICogdGhpcy5wO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmNoYXJ0V2lkdGggKiB0aGlzLnA7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIGxldCBzdGFydEFuZ2xlID0gMDtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRDb2xvcmVkRGF0YSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmdldFRvdGFsQ291bnQoKSA+IDApIHtcclxuICAgICAgICAgIGZvciAoY29uc3QgY2F0ZWcgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBjYXRlZy5jb3VudDtcclxuICAgICAgICAgICAgY29uc3Qgc2xpY2VBbmdsZSA9IDIgKiBNYXRoLlBJICogdmFsIC8gdGhpcy5nZXRUb3RhbENvdW50KCk7XHJcbiAgICAgICAgICAgIGlmIChzbGljZUFuZ2xlID4gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRBbmdsZSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0QW5nbGUgKyBzbGljZUFuZ2xlIC0gMC4wNSxcclxuICAgICAgICAgICAgICAgIGNhdGVnLmNvbG9yXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBzdGFydEFuZ2xlICs9IHNsaWNlQW5nbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoIC8gMixcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgIE1hdGgubWluKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKSxcclxuICAgICAgICAgICAgc3RhcnRBbmdsZSxcclxuICAgICAgICAgICAgc3RhcnRBbmdsZSArIDIgKiBNYXRoLlBJLFxyXG4gICAgICAgICAgICAnI2RlZTBlNSdcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGRyYXdpbmcgYSB3aGl0ZSBjaXJjbGUgb3ZlciB0aGUgY2hhcnRcclxuICAgICAgICAvLyB0byBjcmVhdGUgdGhlIGRvdWdobnV0IGNoYXJ0XHJcbiAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICBjYW52YXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAwLjggKiBNYXRoLm1pbihjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiksXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMiAqIE1hdGguUEksXHJcbiAgICAgICAgICAnI2ZmZmZmZidcclxuICAgICAgICApO1xyXG4gICAgICAgIGN0eC5mb250ID0gdGhpcy5mb250Q2hhcnROdW1iZXIgKiB0aGlzLnAgKyAncHggUm9ib3RvLVJlZ3VsYXIgJztcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMzYjNmNDYnO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICBpZiAodGhpcy50aXRsZUtQSSAmJiB0aGlzLnRpdGxlS1BJLnRyaW0oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAvLyBkcmF3IHZhbHVlXHJcbiAgICAgICAgICBjdHguZmlsbFRleHQoKHRoaXMudGl0bGVWYWx1ZSA/PyB0aGlzLmdldFRvdGFsQ291bnQoKSkudG9GaXhlZCh0aGlzLmZpeGVkKSwgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLndpZHRoIC8gMik7XHJcbiAgICAgICAgICAvLyBhbmQgdGV4dFxyXG4gICAgICAgICAgY3R4LmZvbnQgPSB0aGlzLmZvbnRDaGFydE51bWJlciAqIHRoaXMucCAvIDIuNSArICdweCBSb2JvdG8tUmVndWxhciAnO1xyXG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjM2IzZjQ2JztcclxuICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnRpdGxlS1BJLCBjYW52YXMud2lkdGggLyAyLCBjYW52YXMud2lkdGggLyAyICsgdGhpcy5mb250Q2hhcnROdW1iZXIgKiB0aGlzLnAgLyAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gZHJhdyBvbmx5IHZhbHVlXHJcbiAgICAgICAgICBjdHguZmlsbFRleHQoKHRoaXMudGl0bGVWYWx1ZSA/PyB0aGlzLmdldFRvdGFsQ291bnQoKSkudG9GaXhlZCh0aGlzLmZpeGVkKSwgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLndpZHRoIC8gMiArIDgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH0sIDUwKTtcclxuICB9XHJcblxyXG4gIGRyYXdQaWVTbGljZShjdHg6IGFueSwgY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIsIGNvbG9yOiBhbnkpOiB2b2lkIHtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSAtIE1hdGguUEkgLyAyLCBlbmRBbmdsZSAtIE1hdGguUEkgLyAyLCBmYWxzZSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0FyYyhjdHg6IGFueSwgY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBzYW5pdGl6ZVN0eWxlKHN0eWxlOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShzdHlsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRUb3RhbENvdW50KCk6IG51bWJlciB7XHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgdG90YWwgKz0gaXRlbS5jb3VudDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2lkdGgoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gY291bnQgIT09IDAgPyBNYXRoLnRydW5jKGNvdW50ICogMTAwIC8gdGhpcy5nZXRUb3RhbENvdW50KCkpIC0gMiA6IDA7XHJcbiAgfVxyXG5cclxuICBnZXRDb2xvcmVkRGF0YSgpOiBhbnkge1xyXG4gICAgY29uc3QgY29sb3JlZERhdGE6IGFueSA9IFtdO1xyXG4gICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5kYXRhLmxlbmd0aCAlIHRoaXMuY29sb3JzLmxlbmd0aDtcclxuICAgIGxldCByYXRlID0gdGhpcy5kYXRhLmxlbmd0aCAvIHRoaXMuY29sb3JzLmxlbmd0aDtcclxuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XHJcbiAgICAgIHJhdGUgPSBNYXRoLnRydW5jKHJhdGUpICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgbGV0IGNvbG9ySW5kZXggPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKHRlbXBSYXRlID09PSAwKSB7XHJcbiAgICAgICAgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgICAgIGNvbG9ySW5kZXggKz0gMTtcclxuICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbG9ySW5kZXggPj0gdGhpcy5jb2xvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29sb3JJbmRleCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcGFjaXR5ID09PSAwLjQpIHtcclxuICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29sb3JlZERhdGEucHVzaCh7XHJcbiAgICAgICAgY291bnQ6IGl0ZW0uY291bnQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgY29sb3I6IHRoaXMuY29sb3JzW2NvbG9ySW5kZXhdLFxyXG4gICAgICAgIG9wYWNpdHlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBvcGFjaXR5ID0gb3BhY2l0eSAtIDAuMjtcclxuICAgICAgdGVtcFJhdGUtLTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb2xvcmVkRGF0YTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1vdmVydmlldy1yb3dcIj5cclxuICA8ZGl2IG56LWNvbCBjbGFzcz1cImNtYWNzLWtwaS1vdmVydmlldy1jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktb3ZlcnZpZXctd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLW92ZXJ2aWV3LWNvdW50LXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLW92ZXJ2aWV3LXRvdGFsLWNvdW50XCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Y2FudmFzICNjYW52YXMgY2xhc3M9XCJjbWFjcy1rcGktb3ZlcnZpZXctY2hhcnRcIj48L2NhbnZhcz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgbnotY29sIGNsYXNzPVwiY21hY3Mta3BpLW92ZXJ2aWV3LWxlZ2VuZC13cmFwcGVyXCIgKm5nSWY9XCJzaG93TGVnZW5kXCI+XHJcbiAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxlZ2VuZFwiPjwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPG5nLXRlbXBsYXRlICNsZWdlbmQ+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1vdmVydmlldy10aXRsZVwiPnt7dGl0bGV9fTwvZGl2PlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiY21hY3Mta3BpLWxlZ2VuZC13cmFwcGVyXCJcclxuICAgICpuZ0Zvcj1cImxldCBrcGkgb2YgZ2V0Q29sb3JlZERhdGEoKTsgaW5kZXggYXMgaVwiXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1jb3VudFwiIFtzdHlsZS5jb2xvcl09XCJrcGkuY29sb3JcIlxyXG4gICAgW3N0eWxlLm9wYWNpdHldPVwic2FuaXRpemVTdHlsZShrcGkub3BhY2l0eSlcIj57e2twaS5jb3VudC50b0ZpeGVkKGZpeGVkKX19PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLWRlc2NyaXB0aW9uXCI+e3trcGkuZGVzY3JpcHRpb259fTwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPiJdfQ==