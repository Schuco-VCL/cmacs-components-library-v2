import { __decorate } from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
const _c0 = ["canvas"];
function CmacsKpiComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.getTotalCount().toFixed(ctx_r4.fixed));
} }
function CmacsKpiComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 10);
} if (rf & 2) {
    const kpi_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", ctx_r5.getWidth(kpi_r7.count), "%")("background-color", kpi_r7.color)("opacity", ctx_r5.sanitizeStyle(kpi_r7.opacity));
    i0.ɵɵclassProp("border-radius-left", i_r8 === 0)("border-radius-right", i_r8 === ctx_r5.getColoredData().lenght - 1);
} }
function CmacsKpiComponent_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsKpiComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, CmacsKpiComponent_div_0_div_1_Template, 2, 1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CmacsKpiComponent_div_0_div_5_Template, 1, 10, "div", 7);
    i0.ɵɵtemplate(6, CmacsKpiComponent_div_0_ng_container_6_Template, 1, 0, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showTotalCount);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.getColoredData());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function CmacsKpiComponent_div_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsKpiComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 13);
    i0.ɵɵelementStart(4, "div", 14);
    i0.ɵɵelementStart(5, "div", 15);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "canvas", null, 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 17);
    i0.ɵɵtemplate(10, CmacsKpiComponent_div_1_ng_container_10_Template, 1, 0, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.title);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("width", ctx_r1.getTotalWidth(), "px");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.getTotalCount().toFixed(ctx_r1.fixed));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function CmacsKpiComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "div", 20);
    i0.ɵɵelementStart(2, "div", 21);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 22);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const kpi_r12 = ctx.$implicit;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", kpi_r12.color)("opacity", ctx_r11.sanitizeStyle(kpi_r12.opacity));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(kpi_r12.count.toFixed(ctx_r11.fixed));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(kpi_r12.description);
} }
function CmacsKpiComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsKpiComponent_ng_template_2_div_0_Template, 6, 6, "div", 18);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r3.getColoredData());
} }
export const KPI_COLORS = [
    '#2a7cff',
    '#00cda1',
    '#ffa234',
    '#a100cd',
    '#cc2229',
    '#009fe3',
    '#688cda',
    '#bec4cd'
];
export const KPI_PRIORITY_COLORS = {
    high: '#f6503c',
    medium: '#ffc634',
    low: '#00ce7d'
};
export class CmacsKpiComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.priority = false;
        this.type = 'line';
        this.width = 84;
        this.showTotalCount = false;
        this.fixed = 0;
    }
    ngAfterViewInit() {
        if (this.canvasRef) {
            const canvas = this.canvasRef.nativeElement;
            canvas.width = this.getTotalWidth();
            canvas.height = this.getTotalWidth();
            const ctx = canvas.getContext("2d");
            let start_angle = 0;
            let data = this.getColoredData();
            if (this.getTotalCount() > 0) {
                for (let categ of data) {
                    let val = categ.count;
                    let slice_angle = 2 * Math.PI * (val / this.getTotalCount());
                    if (slice_angle > 0) {
                        this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), start_angle, start_angle + slice_angle - 0.05, categ.color);
                        start_angle += slice_angle;
                    }
                }
            }
            else {
                this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), start_angle, start_angle + 2 * Math.PI, '#dee0e5');
            }
            //drawing a white circle over the chart
            //to create the doughnut chart
            this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, 0.8 * Math.min(canvas.width / 2, canvas.height / 2), 0, 2 * Math.PI, "#ffffff");
        }
    }
    getColoredDataPriority() {
        let coloredData = [];
        this.data.forEach((item) => {
            coloredData.push({
                count: item.count,
                description: item.description,
                color: KPI_PRIORITY_COLORS[item.priority],
                opacity: 1
            });
        });
        return coloredData;
    }
    drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle - Math.PI / 2, endAngle - Math.PI / 2, false);
        ctx.closePath();
        ctx.fill();
    }
    drawLine(ctx, startX, startY, endX, endY) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
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
    getTotalWidth() {
        const width = this.getTotalCount().toFixed(this.fixed).toString().length * 20;
        return width <= 84 ? 84 : width;
    }
    getColoredData() {
        if (!this.priority) {
            let coloredData = [];
            const remaining = this.data.length % KPI_COLORS.length;
            let rate = this.data.length / KPI_COLORS.length;
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
                if (colorIndex >= KPI_COLORS.length) {
                    colorIndex = 0;
                }
                if (opacity === 0.4) {
                    opacity = 1;
                }
                coloredData.push({
                    count: item.count,
                    description: item.description,
                    color: KPI_COLORS[colorIndex],
                    opacity: opacity
                });
                opacity = opacity - 0.2;
                tempRate--;
            });
            return coloredData;
        }
        else {
            return this.getColoredDataPriority();
        }
    }
}
CmacsKpiComponent.ɵfac = function CmacsKpiComponent_Factory(t) { return new (t || CmacsKpiComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
CmacsKpiComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsKpiComponent, selectors: [["cmacs-kpi"]], viewQuery: function CmacsKpiComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvasRef = _t.first);
    } }, inputs: { data: "data", title: "title", priority: "priority", type: "type", width: "width", showTotalCount: "showTotalCount", fixed: "fixed" }, exportAs: ["cmacsKpi"], decls: 4, vars: 2, consts: [["class", "cmacs-kpi-wrapper", 4, "ngIf"], ["class", "cmacs-kpi-doughnut-container", 4, "ngIf"], ["legend", ""], [1, "cmacs-kpi-wrapper"], ["class", "cmacs-kpi-total-count", 4, "ngIf"], [2, "flex", "1 0 auto"], [1, "cmacs-kpi-title"], ["class", "cmacs-kpi-line", 3, "border-radius-left", "border-radius-right", "width", "background-color", "opacity", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet"], [1, "cmacs-kpi-total-count"], [1, "cmacs-kpi-line"], [1, "cmacs-kpi-doughnut-container"], [1, "cmacs-kpi-doughnut-title"], [1, "cmacs-kpi-doughnut-wrapper"], [1, "cmacs-kpi-total-count-wrapper"], [1, "cmacs-kpi-doughnut-total-count"], ["canvas", ""], [1, "cmacs-kpi-doughnut-legend-wrapper"], ["class", "cmacs-kpi-legend-wrapper", 4, "ngFor", "ngForOf"], [1, "cmacs-kpi-legend-wrapper"], [1, "cmacs-kpi-divider"], [1, "cmacs-kpi-count"], [1, "cmacs-kpi-description"]], template: function CmacsKpiComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsKpiComponent_div_0_Template, 7, 4, "div", 0);
        i0.ɵɵtemplate(1, CmacsKpiComponent_div_1_Template, 11, 5, "div", 1);
        i0.ɵɵtemplate(2, CmacsKpiComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.type === "line");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type === "doughnut");
    } }, directives: [i2.NgIf, i2.NgForOf, i2.NgTemplateOutlet], styles: [".cmacs-kpi-line[_ngcontent-%COMP%]{height:6px;margin-right:4px;display:inline-block}.cmacs-kpi-total-count[_ngcontent-%COMP%]{margin-right:10px;margin-top:-2px;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left[_ngcontent-%COMP%]{border-radius:100px 0 0 100px}.border-radius-right[_ngcontent-%COMP%]{border-radius:0 100px 100px 0}.cmacs-kpi-divider[_ngcontent-%COMP%]{display:inline-block;margin-top:4px;width:3px;height:10px;border-radius:10px;margin-right:8px}.cmacs-kpi-count[_ngcontent-%COMP%]{font-weight:600;color:#3b4043;margin-right:4px;min-width:20px}.cmacs-kpi-count[_ngcontent-%COMP%], .cmacs-kpi-description[_ngcontent-%COMP%]{display:inline-block;font-family:Roboto,sans-serif;font-size:12px;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal}.cmacs-kpi-description[_ngcontent-%COMP%]{font-weight:400;color:#656c79}.cmacs-kpi-legend-wrapper[_ngcontent-%COMP%]{margin-bottom:11px;display:flex}.cmacs-kpi-wrapper[_ngcontent-%COMP%]{display:flex}.cmacs-kpi-title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-kpi-doughnut-wrapper[_ngcontent-%COMP%]{position:absolute;margin-top:24px;margin-left:30px;float:left;display:inline-block}.cmacs-kpi-doughnut-total-count[_ngcontent-%COMP%]{position:relative;left:-50%;font-size:20px;font-weight:600;color:#3b4043}.cmacs-kpi-total-count-wrapper[_ngcontent-%COMP%]{top:calc(50% - 17px);left:50%;position:absolute}.cmacs-kpi-doughnut-legend-wrapper[_ngcontent-%COMP%]{float:right;display:inline-block;margin-top:24px}", "cmacs-kpi[_ngcontent-%COMP%] {\n        display: block;\n      }"] });
__decorate([
    InputBoolean()
], CmacsKpiComponent.prototype, "priority", void 0);
__decorate([
    InputBoolean()
], CmacsKpiComponent.prototype, "showTotalCount", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsKpiComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-kpi',
                exportAs: 'cmacsKpi',
                templateUrl: './cmacs-kpi.component.html',
                styleUrls: ['./cmacs-kpi.component.css'],
                styles: [
                    `
      cmacs-kpi {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, { data: [{
            type: Input
        }], title: [{
            type: Input
        }], priority: [{
            type: Input
        }], type: [{
            type: Input
        }], width: [{
            type: Input
        }], showTotalCount: [{
            type: Input
        }], fixed: [{
            type: Input
        }], canvasRef: [{
            type: ViewChild,
            args: ['canvas', { read: ElementRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGkvY21hY3Mta3BpLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGkvY21hY3Mta3BpLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztJQ05uRSw4QkFBMEQ7SUFBQSxZQUFrQztJQUFBLGlCQUFNOzs7SUFBeEMsZUFBa0M7SUFBbEMsa0VBQWtDOzs7SUFHMUYsMEJBU007Ozs7O0lBSkosMkRBQXFDLGtDQUFBLGlEQUFBO0lBRnJDLGdEQUFvQyxvRUFBQTs7O0lBT3RDLHdCQUF3RDs7O0lBZDVELDhCQUF1RDtJQUNyRCx3RUFBa0c7SUFDbEcsOEJBQTZCO0lBQzNCLDhCQUE2QjtJQUFBLFlBQVM7SUFBQSxpQkFBTTtJQUM1Qyx5RUFTTTtJQUNOLDBGQUF3RDtJQUMxRCxpQkFBTTtJQUNSLGlCQUFNOzs7O0lBZmdDLGVBQW9CO0lBQXBCLDRDQUFvQjtJQUV6QixlQUFTO0lBQVQsa0NBQVM7SUFFcEIsZUFBcUI7SUFBckIsaURBQXFCO0lBU3hCLGVBQXdCO0lBQXhCLHNDQUF3Qjs7O0lBYXZDLHdCQUF3RDs7O0lBVDVELCtCQUFzRTtJQUNwRSwrQkFBc0M7SUFBQSxZQUFTO0lBQUEsaUJBQU07SUFDckQsK0JBQTJFO0lBQ3pFLCtCQUEyQztJQUN6QywrQkFBNEM7SUFBQSxZQUFrQztJQUFBLGlCQUFNO0lBQ3RGLGlCQUFNO0lBQ04sbUNBQXlCO0lBQzNCLGlCQUFNO0lBQ04sK0JBQStDO0lBQzdDLDRGQUF3RDtJQUMxRCxpQkFBTTtJQUNSLGlCQUFNOzs7O0lBVmtDLGVBQVM7SUFBVCxrQ0FBUztJQUNQLGVBQWtDO0lBQWxDLHFEQUFrQztJQUUxQixlQUFrQztJQUFsQyxrRUFBa0M7SUFLakUsZUFBd0I7SUFBeEIsc0NBQXdCOzs7SUFLekMsK0JBR0M7SUFDQywwQkFHTztJQUNQLCtCQUE2QjtJQUFBLFlBQTRCO0lBQUEsaUJBQU07SUFDL0QsK0JBQW1DO0lBQUEsWUFBbUI7SUFBQSxpQkFBTTtJQUM5RCxpQkFBTTs7OztJQUxDLGVBQW9DO0lBQXBDLGlEQUFvQyxtREFBQTtJQUdaLGVBQTRCO0lBQTVCLDBEQUE0QjtJQUN0QixlQUFtQjtJQUFuQix5Q0FBbUI7OztJQVR4RCxpRkFVTTs7O0lBUlksaURBQXFCOztBRHpCekMsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHO0lBQ3hCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0NBQ1YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHO0lBQ2pDLElBQUksRUFBRSxTQUFTO0lBQ2YsTUFBTSxFQUFFLFNBQVM7SUFDakIsR0FBRyxFQUFFLFNBQVM7Q0FDZixDQUFDO0FBcUJGLE1BQU0sT0FBTyxpQkFBaUI7SUFXNUIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQVBsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLFNBQUksR0FBd0IsTUFBTSxDQUFDO1FBQ25DLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDSCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QyxVQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRzRCLENBQUM7SUFFaEQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWtDLENBQUM7WUFDakUsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDcEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckMsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVwQyxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRWpDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDNUIsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUM7b0JBQ3JCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7b0JBQ3RCLElBQUksV0FBVyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO29CQUM3RCxJQUFJLFdBQVcsR0FBRyxDQUFDLEVBQUU7d0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQ2YsR0FBRyxFQUNILE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUNoQixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUM3QyxXQUFXLEVBQ1gsV0FBVyxHQUFHLFdBQVcsR0FBRyxJQUFJLEVBQ2hDLEtBQUssQ0FBQyxLQUFLLENBQ1osQ0FBQzt3QkFDRixXQUFXLElBQUksV0FBVyxDQUFDO3FCQUM1QjtpQkFDRjthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQ2YsR0FBRyxFQUNILE1BQU0sQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUNkLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsRUFDekMsV0FBVyxFQUNYLFdBQVcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFDekIsU0FBUyxDQUNWLENBQUM7YUFDSDtZQUdELHVDQUF1QztZQUN2Qyw4QkFBOEI7WUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FDZixHQUFHLEVBQ0gsTUFBTSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQ2QsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQ2YsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsRUFDL0MsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUNYLFNBQVMsQ0FDVixDQUFDO1NBQ0g7SUFFSCxDQUFDO0lBRUQsc0JBQXNCO1FBQ3BCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3pCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQzdCLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQzthQUNYLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFRLEVBQUMsT0FBZSxFQUFFLE9BQWUsRUFBRSxNQUFjLEVBQUUsVUFBa0IsRUFBRSxRQUFnQixFQUFFLEtBQVU7UUFDdEgsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzRixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFRLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBRSxJQUFZLEVBQUUsSUFBWTtRQUMzRSxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFRLEVBQUUsT0FBZSxFQUFFLE9BQWUsRUFBRSxNQUFjLEVBQUUsVUFBa0IsRUFBRSxRQUFnQjtRQUN0RyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEQsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDekIsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNwQixPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsYUFBYTtRQUNYLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDOUUsT0FBTyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksV0FBVyxHQUFRLEVBQUUsQ0FBQztZQUMxQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ3ZELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDaEQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0I7WUFFRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUN6QixJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7b0JBQ2xCLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ2hCLFVBQVUsSUFBSSxDQUFDLENBQUM7b0JBQ2hCLE9BQU8sR0FBRyxDQUFDLENBQUM7aUJBQ2I7Z0JBRUQsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtvQkFDbkMsVUFBVSxHQUFHLENBQUMsQ0FBQztpQkFDaEI7Z0JBRUQsSUFBSSxPQUFPLEtBQUssR0FBRyxFQUFFO29CQUNuQixPQUFPLEdBQUcsQ0FBQyxDQUFDO2lCQUNiO2dCQUVELFdBQVcsQ0FBQyxJQUFJLENBQUM7b0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7b0JBQzdCLEtBQUssRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDO29CQUM3QixPQUFPLEVBQUUsT0FBTztpQkFDakIsQ0FBQyxDQUFDO2dCQUVILE9BQU8sR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUN4QixRQUFRLEVBQUUsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxXQUFXLENBQUM7U0FDcEI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDdEM7SUFDSCxDQUFDOztrRkF0S1UsaUJBQWlCO3NEQUFqQixpQkFBaUI7K0JBU0MsVUFBVTs7Ozs7UUN0RHpDLGtFQWdCTTtRQUVOLG1FQVdNO1FBRU4sbUhBWWM7O1FBM0NrQiwwQ0FBcUI7UUFrQlYsZUFBeUI7UUFBekIsOENBQXlCOztBRCtCekM7SUFBZixZQUFZLEVBQUU7bURBQWtCO0FBR2pCO0lBQWYsWUFBWSxFQUFFO3lEQUF3Qjt1RkFQckMsaUJBQWlCO2NBYjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxNQUFNLEVBQUU7b0JBQ047Ozs7S0FJQztpQkFDRjthQUNGOytEQUdVLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ21CLGNBQWM7a0JBQXRDLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDcUMsU0FBUztrQkFBbkQsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IGdldFByZWNpc2lvbiwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEtQSV9DT0xPUlMgPSBbXHJcbiAgJyMyYTdjZmYnLFxyXG4gICcjMDBjZGExJyxcclxuICAnI2ZmYTIzNCcsXHJcbiAgJyNhMTAwY2QnLFxyXG4gICcjY2MyMjI5JyxcclxuICAnIzAwOWZlMycsXHJcbiAgJyM2ODhjZGEnLFxyXG4gICcjYmVjNGNkJ1xyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEtQSV9QUklPUklUWV9DT0xPUlMgPSB7XHJcbiAgaGlnaDogJyNmNjUwM2MnLFxyXG4gIG1lZGl1bTogJyNmZmM2MzQnLFxyXG4gIGxvdzogJyMwMGNlN2QnXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtQSSB7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHByaW9yaXR5PzogJ2xvdycgfCAnaGlnaCcgfCAnbWVkaXVtJztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1rcGknLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NLcGknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rcGkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWtwaS5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLWtwaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0twaUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSBkYXRhOiBLUElbXTtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBwcmlvcml0eSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHR5cGU6ICdsaW5lJyB8ICdkb3VnaG51dCcgPSAnbGluZSc7XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciA9IDg0O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93VG90YWxDb3VudCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGZpeGVkID0gMDtcclxuICBAVmlld0NoaWxkKCdjYW52YXMnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgY2FudmFzUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY2FudmFzUmVmKSB7XHJcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuZ2V0VG90YWxXaWR0aCgpO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5nZXRUb3RhbFdpZHRoKCk7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICBsZXQgc3RhcnRfYW5nbGUgPSAwO1xyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0Q29sb3JlZERhdGEoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmdldFRvdGFsQ291bnQoKSA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBjYXRlZyBvZiBkYXRhKXtcclxuICAgICAgICAgIGxldCB2YWwgPSBjYXRlZy5jb3VudDtcclxuICAgICAgICAgIGxldCBzbGljZV9hbmdsZSA9IDIgKiBNYXRoLlBJICogKHZhbCAvIHRoaXMuZ2V0VG90YWxDb3VudCgpKTtcclxuICAgICAgICAgIGlmIChzbGljZV9hbmdsZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpLFxyXG4gICAgICAgICAgICAgIHN0YXJ0X2FuZ2xlLFxyXG4gICAgICAgICAgICAgIHN0YXJ0X2FuZ2xlICsgc2xpY2VfYW5nbGUgLSAwLjA1LFxyXG4gICAgICAgICAgICAgIGNhdGVnLmNvbG9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN0YXJ0X2FuZ2xlICs9IHNsaWNlX2FuZ2xlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICAgIGN0eCxcclxuICAgICAgICAgIGNhbnZhcy53aWR0aC8yLFxyXG4gICAgICAgICAgY2FudmFzLmhlaWdodC8yLFxyXG4gICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoLzIsIGNhbnZhcy5oZWlnaHQvMiksXHJcbiAgICAgICAgICBzdGFydF9hbmdsZSxcclxuICAgICAgICAgIHN0YXJ0X2FuZ2xlICsgMiAqIE1hdGguUEksXHJcbiAgICAgICAgICAnI2RlZTBlNSdcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy9kcmF3aW5nIGEgd2hpdGUgY2lyY2xlIG92ZXIgdGhlIGNoYXJ0XHJcbiAgICAgIC8vdG8gY3JlYXRlIHRoZSBkb3VnaG51dCBjaGFydFxyXG4gICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICBjdHgsXHJcbiAgICAgICAgY2FudmFzLndpZHRoLzIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodC8yLFxyXG4gICAgICAgIDAuOCAqIE1hdGgubWluKGNhbnZhcy53aWR0aC8yLCBjYW52YXMuaGVpZ2h0LzIpLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMiAqIE1hdGguUEksXHJcbiAgICAgICAgXCIjZmZmZmZmXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXRDb2xvcmVkRGF0YVByaW9yaXR5KCkge1xyXG4gICAgbGV0IGNvbG9yZWREYXRhID0gW107XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb2xvcmVkRGF0YS5wdXNoKHtcclxuICAgICAgICBjb3VudDogaXRlbS5jb3VudCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICBjb2xvcjogS1BJX1BSSU9SSVRZX0NPTE9SU1tpdGVtLnByaW9yaXR5XSxcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY29sb3JlZERhdGE7XHJcbiAgfVxyXG5cclxuICBkcmF3UGllU2xpY2UoY3R4OiBhbnksY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIsIGNvbG9yOiBhbnkgKXtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSAtIE1hdGguUEkgLyAyLCBlbmRBbmdsZSAtIE1hdGguUEkgLyAyLCBmYWxzZSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0xpbmUoY3R4OiBhbnksIHN0YXJ0WDogbnVtYmVyLCBzdGFydFk6IG51bWJlciwgZW5kWDogbnVtYmVyLCBlbmRZOiBudW1iZXIpe1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbyhzdGFydFgsc3RhcnRZKTtcclxuICAgIGN0eC5saW5lVG8oZW5kWCxlbmRZKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGRyYXdBcmMoY3R4OiBhbnksIGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyKXtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBzYW5pdGl6ZVN0eWxlKHN0eWxlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoc3R5bGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG90YWxDb3VudCgpIHtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICB0b3RhbCArPSBpdGVtLmNvdW50O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdG90YWw7XHJcbiAgfVxyXG5cclxuICBnZXRXaWR0aChjb3VudDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gY291bnQgIT09IDAgPyBNYXRoLnRydW5jKGNvdW50ICogMTAwIC8gdGhpcy5nZXRUb3RhbENvdW50KCkpIC0gMiA6IDA7XHJcbiAgfVxyXG5cclxuICBnZXRUb3RhbFdpZHRoKCkge1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFRvdGFsQ291bnQoKS50b0ZpeGVkKHRoaXMuZml4ZWQpLnRvU3RyaW5nKCkubGVuZ3RoICogMjA7XHJcbiAgICByZXR1cm4gd2lkdGggPD0gODQgPyA4NCA6IHdpZHRoO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29sb3JlZERhdGEoKSB7XHJcbiAgICBpZiAoIXRoaXMucHJpb3JpdHkpIHtcclxuICAgICAgbGV0IGNvbG9yZWREYXRhOiBhbnkgPSBbXTtcclxuICAgICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5kYXRhLmxlbmd0aCAlIEtQSV9DT0xPUlMubGVuZ3RoO1xyXG4gICAgICBsZXQgcmF0ZSA9IHRoaXMuZGF0YS5sZW5ndGggLyBLUElfQ09MT1JTLmxlbmd0aDtcclxuICAgICAgaWYgKHJlbWFpbmluZyA+IDApIHtcclxuICAgICAgICByYXRlID0gTWF0aC50cnVuYyhyYXRlKSArIDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB0ZW1wUmF0ZSA9IHJhdGU7XHJcbiAgICAgIGxldCBvcGFjaXR5ID0gMTtcclxuICAgICAgbGV0IGNvbG9ySW5kZXggPSAwO1xyXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmICh0ZW1wUmF0ZSA9PT0gMCkge1xyXG4gICAgICAgICAgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgICAgICAgY29sb3JJbmRleCArPSAxO1xyXG4gICAgICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29sb3JJbmRleCA+PSBLUElfQ09MT1JTLmxlbmd0aCkge1xyXG4gICAgICAgICAgY29sb3JJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3BhY2l0eSA9PT0gMC40KSB7XHJcbiAgICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbG9yZWREYXRhLnB1c2goe1xyXG4gICAgICAgICAgY291bnQ6IGl0ZW0uY291bnQsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIGNvbG9yOiBLUElfQ09MT1JTW2NvbG9ySW5kZXhdLFxyXG4gICAgICAgICAgb3BhY2l0eTogb3BhY2l0eVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvcGFjaXR5ID0gb3BhY2l0eSAtIDAuMjtcclxuICAgICAgICB0ZW1wUmF0ZS0tO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBjb2xvcmVkRGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvbG9yZWREYXRhUHJpb3JpdHkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjbWFjcy1rcGktd3JhcHBlclwiICpuZ0lmPVwidHlwZSA9PT0gJ2xpbmUnXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS10b3RhbC1jb3VudFwiICpuZ0lmPVwic2hvd1RvdGFsQ291bnRcIj57e2dldFRvdGFsQ291bnQoKS50b0ZpeGVkKGZpeGVkKX19PC9kaXY+XHJcbiAgPGRpdiBzdHlsZT1cImZsZXg6IDEgMCBhdXRvO1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS10aXRsZVwiPnt7dGl0bGV9fTwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICAqbmdGb3I9XCJsZXQga3BpIG9mIGdldENvbG9yZWREYXRhKCk7IGluZGV4IGFzIGlcIlxyXG4gICAgICBjbGFzcz1cImNtYWNzLWtwaS1saW5lXCJcclxuICAgICAgW2NsYXNzLmJvcmRlci1yYWRpdXMtbGVmdF09XCJpID09PSAwXCJcclxuICAgICAgW2NsYXNzLmJvcmRlci1yYWRpdXMtcmlnaHRdPVwiaSA9PT0gZ2V0Q29sb3JlZERhdGEoKS5sZW5naHQgLSAxXCJcclxuICAgICAgW3N0eWxlLndpZHRoLiVdPVwiZ2V0V2lkdGgoa3BpLmNvdW50KVwiXHJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImtwaS5jb2xvclwiXHJcbiAgICAgIFtzdHlsZS5vcGFjaXR5XT1cInNhbml0aXplU3R5bGUoa3BpLm9wYWNpdHkpXCJcclxuICAgICAgPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGVnZW5kXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1kb3VnaG51dC1jb250YWluZXJcIiAqbmdJZj1cInR5cGUgPT09ICdkb3VnaG51dCdcIj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLWRvdWdobnV0LXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1kb3VnaG51dC13cmFwcGVyXCIgW3N0eWxlLndpZHRoLnB4XT1cImdldFRvdGFsV2lkdGgoKVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS10b3RhbC1jb3VudC13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktZG91Z2hudXQtdG90YWwtY291bnRcIj57e2dldFRvdGFsQ291bnQoKS50b0ZpeGVkKGZpeGVkKX19PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxjYW52YXMgI2NhbnZhcz48L2NhbnZhcz5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLWRvdWdobnV0LWxlZ2VuZC13cmFwcGVyXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGVnZW5kXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNsZWdlbmQ+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJjbWFjcy1rcGktbGVnZW5kLXdyYXBwZXJcIlxyXG4gICAgKm5nRm9yPVwibGV0IGtwaSBvZiBnZXRDb2xvcmVkRGF0YSgpOyBpbmRleCBhcyBpXCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLWRpdmlkZXJcIlxyXG4gICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJrcGkuY29sb3JcIlxyXG4gICAgICAgICBbc3R5bGUub3BhY2l0eV09XCJzYW5pdGl6ZVN0eWxlKGtwaS5vcGFjaXR5KVwiXHJcbiAgICA+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLWNvdW50XCI+e3trcGkuY291bnQudG9GaXhlZChmaXhlZCl9fTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1kZXNjcmlwdGlvblwiPnt7a3BpLmRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19