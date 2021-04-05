import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { KPI_COLORS } from '../cmacs-kpi/cmacs-kpi.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "ng-zorro-antd/grid";
import * as i3 from "@angular/common";
const _c0 = ["canvas"];
function CmacsKPIOverviewComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsKPIOverviewComponent_ng_template_9_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "div", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const kpi_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("color", kpi_r5.color)("opacity", ctx_r4.sanitizeStyle(kpi_r5.opacity));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(kpi_r5.count.toFixed(ctx_r4.fixed));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(kpi_r5.description);
} }
function CmacsKPIOverviewComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, CmacsKPIOverviewComponent_ng_template_9_div_2_Template, 5, 6, "div", 11);
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
                // draw value
                ctx.font = this.fontChartNumber * this.p + 'px Roboto-Regular ';
                ctx.fillStyle = '#3b3f46';
                ctx.textAlign = 'center';
                ctx.fillText(this.getTotalCount().toFixed(this.fixed), canvas.width / 2, canvas.width / 2 + 8);
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
                opacity: opacity
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
    } }, inputs: { data: "data", title: "title", view: "view", fixed: "fixed", colors: "colors" }, features: [i0.ɵɵNgOnChangesFeature], decls: 11, vars: 1, consts: [[1, "cmacs-kpi-overview-row"], ["nz-col", "", 1, "cmacs-kpi-overview-container"], [1, "cmacs-kpi-overview-wrapper"], [1, "cmacs-kpi-overview-count-wrapper"], [1, "cmacs-kpi-overview-total-count"], [1, "cmacs-kpi-overview-chart"], ["canvas", ""], ["nz-col", "", 1, "cmacs-kpi-overview-legend-wrapper"], [4, "ngTemplateOutlet"], ["legend", ""], [1, "cmacs-kpi-overview-title"], ["class", "cmacs-kpi-legend-wrapper", 4, "ngFor", "ngForOf"], [1, "cmacs-kpi-legend-wrapper"], [1, "cmacs-kpi-count"], [1, "cmacs-kpi-description"]], template: function CmacsKPIOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelement(4, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "canvas", 5, 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 7);
        i0.ɵɵtemplate(8, CmacsKPIOverviewComponent_ng_container_8_Template, 1, 0, "ng-container", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, CmacsKPIOverviewComponent_ng_template_9_Template, 3, 2, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(10);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngTemplateOutlet", _r2);
    } }, directives: [i2.NzColDirective, i3.NgTemplateOutlet, i3.NgForOf], styles: ["[_nghost-%COMP%]{display:flex;min-width:223px;min-height:120px;height:100%;padding:33px;background-color:#fff}.cmacs-kpi-overview-container[_ngcontent-%COMP%]{margin-right:25px}.cmacs-kpi-total-count[_ngcontent-%COMP%]{margin-right:10px;margin-top:-2px;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left[_ngcontent-%COMP%]{border-radius:100px 0 0 100px}.border-radius-right[_ngcontent-%COMP%]{border-radius:0 100px 100px 0}.cmacs-kpi-overview-row[_ngcontent-%COMP%]{display:flex}.cmacs-kpi-overview-chart[_ngcontent-%COMP%]{position:relative;top:-31px}.cmacs-kpi-divider[_ngcontent-%COMP%]{display:inline-block;width:2px;height:9px;border-radius:100px;margin-right:8px}.cmacs-kpi-count[_ngcontent-%COMP%]{font-weight:600;color:#3b4043;margin-right:4px;min-width:20px}.cmacs-kpi-count[_ngcontent-%COMP%], .cmacs-kpi-description[_ngcontent-%COMP%]{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal}.cmacs-kpi-description[_ngcontent-%COMP%]{font-weight:400;color:#656c79}.cmacs-kpi-wrapper[_ngcontent-%COMP%]{display:flex}.cmacs-kpi-overview-title[_ngcontent-%COMP%]{font-family:Roboto-Regular;font-size:14px;line-height:1.29;letter-spacing:normal;color:#3b3f46;margin-bottom:10px;font-weight:700}.cmacs-kpi-overview-wrapper[_ngcontent-%COMP%]{margin-top:3px;margin-left:5px;height:30px;padding-top:25px}.cmacs-kpi-overview-total-count[_ngcontent-%COMP%]{position:relative;font-size:20px;font-weight:600;color:#3b4043;text-align:center;top:28px;z-index:100}.cmacs-kpi-overview-legend-wrapper[_ngcontent-%COMP%]{float:right;display:inline-block;margin:4px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsKPIOverviewComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-kpi-overview',
                templateUrl: './cmacs-kpioverview.component.html',
                styleUrls: ['./cmacs-kpioverview.component.css']
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, { data: [{
            type: Input
        }], title: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3Bpb3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWtwaW92ZXJ2aWV3L2NtYWNzLWtwaW92ZXJ2aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGlvdmVydmlldy9jbWFjcy1rcGlvdmVydmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQU8sVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7SUNTOUQsd0JBQXdEOzs7SUFLM0QsK0JBR0M7SUFDQywrQkFDNkM7SUFBQSxZQUE0QjtJQUFBLGlCQUFNO0lBQy9FLCtCQUFtQztJQUFBLFlBQW1CO0lBQUEsaUJBQU07SUFDOUQsaUJBQU07Ozs7SUFIeUIsZUFBeUI7SUFBekIscUNBQXlCLGlEQUFBO0lBQ1QsZUFBNEI7SUFBNUIsd0RBQTRCO0lBQ3RDLGVBQW1CO0lBQW5CLHdDQUFtQjs7O0lBUHhELCtCQUFzQztJQUFBLFlBQVM7SUFBQSxpQkFBTTtJQUNyRCx5RkFPTTs7O0lBUmdDLGVBQVM7SUFBVCxrQ0FBUztJQUc3QixlQUFxQjtJQUFyQixpREFBcUI7O0FEUnpDLE1BQU0sT0FBTyx5QkFBeUI7SUFlcEMsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQVZsQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixvQkFBZSxHQUFHLEVBQUUsQ0FB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QXdEO1FBQzNELGlCQUFNO1FBQ1IsaUJBQU07UUFDTiwySEFVYzs7O1FBYk0sZUFBd0I7UUFBeEIsc0NBQXdCOzt1RkREL0IseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRDsrREFHVSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFNRyxNQUFNO2tCQUFkLEtBQUs7WUFFa0QsU0FBUztrQkFBaEUsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtQSSwgS1BJX0NPTE9SUyB9IGZyb20gJy4uL2NtYWNzLWtwaS9jbWFjcy1rcGkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWtwaS1vdmVydmlldycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWtwaW92ZXJ2aWV3LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1rcGlvdmVydmlldy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzS1BJT3ZlcnZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBkYXRhOiBLUElbXTtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZpZXchOiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBmaXhlZCA9IDA7XHJcbiAgbWluV2lkdGggPSAzMDA7XHJcbiAgZm9udENoYXJ0TnVtYmVyID0gMjA7XHJcbiAgY2hhcnRXaWR0aCA9IDg0O1xyXG4gIHAgPSAxO1xyXG4gIHR5cGUgPSAnZG91Z2hudXQnO1xyXG4gIEBJbnB1dCgpIGNvbG9yczogc3RyaW5nW10gPSBLUElfQ09MT1JTO1xyXG5cclxuICBAVmlld0NoaWxkKCdjYW52YXMnLCB7cmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZX0pIGNhbnZhc1JlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgLy9cclxuICAgIHRoaXMucCA9IDE7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5wID0gdGhpcy52aWV3WzBdID4gdGhpcy5taW5XaWR0aCA/IHRoaXMudmlld1swXSAvIHRoaXMubWluV2lkdGggOiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jYW52YXNSZWYpIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhc1JlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAqIHRoaXMucDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5jaGFydFdpZHRoICogdGhpcy5wO1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IDA7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0Q29sb3JlZERhdGEoKTtcclxuICAgICAgICBpZiAodGhpcy5nZXRUb3RhbENvdW50KCkgPiAwKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGNhdGVnIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gY2F0ZWcuY291bnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlQW5nbGUgPSAyICogTWF0aC5QSSAqIHZhbCAvIHRoaXMuZ2V0VG90YWxDb3VudCgpO1xyXG4gICAgICAgICAgICBpZiAoc2xpY2VBbmdsZSA+IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgIE1hdGgubWluKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0QW5nbGUsXHJcbiAgICAgICAgICAgICAgICBzdGFydEFuZ2xlICsgc2xpY2VBbmdsZSAtIDAuMDUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZy5jb2xvclxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSArPSBzbGljZUFuZ2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiksXHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUsXHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUgKyAyICogTWF0aC5QSSxcclxuICAgICAgICAgICAgJyNkZWUwZTUnXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkcmF3aW5nIGEgd2hpdGUgY2lyY2xlIG92ZXIgdGhlIGNoYXJ0XHJcbiAgICAgICAgLy8gdG8gY3JlYXRlIHRoZSBkb3VnaG51dCBjaGFydFxyXG4gICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgY2FudmFzLndpZHRoIC8gMixcclxuICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgMC44ICogTWF0aC5taW4oY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDIgKiBNYXRoLlBJLFxyXG4gICAgICAgICAgJyNmZmZmZmYnXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBkcmF3IHZhbHVlXHJcbiAgICAgICAgY3R4LmZvbnQgPSB0aGlzLmZvbnRDaGFydE51bWJlciAqIHRoaXMucCArICdweCBSb2JvdG8tUmVndWxhciAnO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzNiM2Y0Nic7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmdldFRvdGFsQ291bnQoKS50b0ZpeGVkKHRoaXMuZml4ZWQpLCBjYW52YXMud2lkdGggLyAyLCBjYW52YXMud2lkdGggLyAyICsgOCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDUwKTtcclxuICB9XHJcblxyXG4gIGRyYXdQaWVTbGljZShjdHg6IGFueSwgY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIsIGNvbG9yOiBhbnkgKXtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSAtIE1hdGguUEkgLyAyLCBlbmRBbmdsZSAtIE1hdGguUEkgLyAyLCBmYWxzZSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0FyYyhjdHg6IGFueSwgY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIpIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBzYW5pdGl6ZVN0eWxlKHN0eWxlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoc3R5bGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG90YWxDb3VudCgpIHtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICB0b3RhbCArPSBpdGVtLmNvdW50O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdG90YWw7XHJcbiAgfVxyXG5cclxuICBnZXRXaWR0aChjb3VudDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gY291bnQgIT09IDAgPyBNYXRoLnRydW5jKGNvdW50ICogMTAwIC8gdGhpcy5nZXRUb3RhbENvdW50KCkpIC0gMiA6IDA7XHJcbiAgfVxyXG5cclxuICBnZXRDb2xvcmVkRGF0YSgpIHtcclxuICAgIGNvbnN0IGNvbG9yZWREYXRhOiBhbnkgPSBbXTtcclxuICAgIGNvbnN0IHJlbWFpbmluZyA9IHRoaXMuZGF0YS5sZW5ndGggJSB0aGlzLmNvbG9ycy5sZW5ndGg7XHJcbiAgICBsZXQgcmF0ZSA9IHRoaXMuZGF0YS5sZW5ndGggLyB0aGlzLmNvbG9ycy5sZW5ndGg7XHJcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xyXG4gICAgICByYXRlID0gTWF0aC50cnVuYyhyYXRlKSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRlbXBSYXRlID0gcmF0ZTtcclxuICAgIGxldCBvcGFjaXR5ID0gMTtcclxuICAgIGxldCBjb2xvckluZGV4ID0gMDtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICh0ZW1wUmF0ZSA9PT0gMCkge1xyXG4gICAgICAgIHRlbXBSYXRlID0gcmF0ZTtcclxuICAgICAgICBjb2xvckluZGV4ICs9IDE7XHJcbiAgICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb2xvckluZGV4ID49IHRoaXMuY29sb3JzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbG9ySW5kZXggPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAob3BhY2l0eSA9PT0gMC40KSB7XHJcbiAgICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbG9yZWREYXRhLnB1c2goe1xyXG4gICAgICAgIGNvdW50OiBpdGVtLmNvdW50LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yc1tjb2xvckluZGV4XSxcclxuICAgICAgICBvcGFjaXR5OiBvcGFjaXR5XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgb3BhY2l0eSA9IG9wYWNpdHkgLSAwLjI7XHJcbiAgICAgIHRlbXBSYXRlLS07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29sb3JlZERhdGE7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjbWFjcy1rcGktb3ZlcnZpZXctcm93XCI+XHJcbiAgPGRpdiBuei1jb2wgY2xhc3M9XCJjbWFjcy1rcGktb3ZlcnZpZXctY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLW92ZXJ2aWV3LXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1vdmVydmlldy1jb3VudC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1vdmVydmlldy10b3RhbC1jb3VudFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGNhbnZhcyAjY2FudmFzIGNsYXNzPVwiY21hY3Mta3BpLW92ZXJ2aWV3LWNoYXJ0XCI+PC9jYW52YXM+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IG56LWNvbCBjbGFzcz1cImNtYWNzLWtwaS1vdmVydmlldy1sZWdlbmQtd3JhcHBlclwiPlxyXG4gICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsZWdlbmRcIj48L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxuZy10ZW1wbGF0ZSAjbGVnZW5kPlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktb3ZlcnZpZXctdGl0bGVcIj57e3RpdGxlfX08L2Rpdj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImNtYWNzLWtwaS1sZWdlbmQtd3JhcHBlclwiXHJcbiAgICAqbmdGb3I9XCJsZXQga3BpIG9mIGdldENvbG9yZWREYXRhKCk7IGluZGV4IGFzIGlcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktY291bnRcIiBbc3R5bGUuY29sb3JdPVwia3BpLmNvbG9yXCJcclxuICAgIFtzdHlsZS5vcGFjaXR5XT1cInNhbml0aXplU3R5bGUoa3BpLm9wYWNpdHkpXCI+e3trcGkuY291bnQudG9GaXhlZChmaXhlZCl9fTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1kZXNjcmlwdGlvblwiPnt7a3BpLmRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT4iXX0=