import { __decorate } from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
const _c0 = ["canvasImg"];
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
function CmacsKpiComponent_div_0_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsKpiComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsKpiComponent_div_0_div_6_ng_container_1_Template, 1, 0, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function CmacsKpiComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, CmacsKpiComponent_div_0_div_1_Template, 2, 1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5)(3, "div", 6);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CmacsKpiComponent_div_0_div_5_Template, 1, 10, "div", 7);
    i0.ɵɵtemplate(6, CmacsKpiComponent_div_0_div_6_Template, 2, 1, "div", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showTotalCount);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.getColoredData());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showLegend);
} }
function CmacsKpiComponent_div_1_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsKpiComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CmacsKpiComponent_div_1_div_9_ng_container_1_Template, 1, 0, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function CmacsKpiComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14)(4, "div", 15)(5, "div", 16);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(7, "img", 17, 18);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CmacsKpiComponent_div_1_div_9_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.title);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("width", ctx_r1.getTotalWidth(), "px");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.getTotalCount().toFixed(ctx_r1.fixed));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.showLegend);
} }
function CmacsKpiComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelement(1, "div", 23);
    i0.ɵɵelementStart(2, "div", 24);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 25);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const kpi_r14 = ctx.$implicit;
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", kpi_r14.color)("opacity", ctx_r13.sanitizeStyle(kpi_r14.opacity));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(kpi_r14.count.toFixed(ctx_r13.fixed));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(kpi_r14.description);
} }
function CmacsKpiComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsKpiComponent_ng_template_2_div_0_Template, 6, 6, "div", 21);
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
    constructor(sanitizer, cdr) {
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.showLegend = true;
        this.priority = false;
        this.type = 'line';
        this.width = 84;
        this.showTotalCount = false;
        this.fixed = 0;
    }
    ngAfterViewInit() {
        if (this.canvasImgRef) {
            const canvas = document.createElement('canvas');
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
            //convert canvas to img
            const img = this.canvasImgRef.nativeElement;
            img.src = canvas.toDataURL();
            canvas.remove();
            img.width = this.getTotalWidth();
            img.height = this.getTotalWidth();
            this.cdr.detectChanges();
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
        const width = this.getTotalCount().toFixed(this.fixed).toString().length * 25;
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
    static { this.ɵfac = function CmacsKpiComponent_Factory(t) { return new (t || CmacsKpiComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsKpiComponent, selectors: [["cmacs-kpi"]], viewQuery: function CmacsKpiComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvasImgRef = _t.first);
        } }, inputs: { showLegend: "showLegend", data: "data", title: "title", priority: "priority", type: "type", width: "width", showTotalCount: "showTotalCount", fixed: "fixed" }, exportAs: ["cmacsKpi"], decls: 4, vars: 2, consts: [["class", "cmacs-kpi-wrapper", 4, "ngIf"], ["class", "cmacs-kpi-doughnut-container", 4, "ngIf"], ["legend", ""], [1, "cmacs-kpi-wrapper"], ["class", "cmacs-kpi-total-count", 4, "ngIf"], [2, "flex", "1 0 auto"], [1, "cmacs-kpi-title"], ["class", "cmacs-kpi-line", 3, "border-radius-left", "border-radius-right", "width", "background-color", "opacity", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "cmacs-kpi-total-count"], [1, "cmacs-kpi-line"], [4, "ngTemplateOutlet"], [1, "cmacs-kpi-doughnut-container"], [1, "cmacs-kpi-doughnut-title"], [1, "cmacs-kpi-doughnut-wrapper"], [1, "cmacs-kpi-total-count-wrapper"], [1, "cmacs-kpi-doughnut-total-count"], [1, "cmacs-kpi-canvas-toimage"], ["canvasImg", ""], ["class", "cmacs-kpi-doughnut-legend-wrapper", 4, "ngIf"], [1, "cmacs-kpi-doughnut-legend-wrapper"], ["class", "cmacs-kpi-legend-wrapper", 4, "ngFor", "ngForOf"], [1, "cmacs-kpi-legend-wrapper"], [1, "cmacs-kpi-divider"], [1, "cmacs-kpi-count"], [1, "cmacs-kpi-description"]], template: function CmacsKpiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsKpiComponent_div_0_Template, 7, 4, "div", 0);
            i0.ɵɵtemplate(1, CmacsKpiComponent_div_1_Template, 10, 5, "div", 1);
            i0.ɵɵtemplate(2, CmacsKpiComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.type === "line");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.type === "doughnut");
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet], styles: [".cmacs-kpi-line[_ngcontent-%COMP%]{height:6px;margin-right:4px;display:inline-block}.cmacs-kpi-total-count[_ngcontent-%COMP%]{margin-right:10px;margin-top:-2px;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left[_ngcontent-%COMP%]{border-radius:100px 0 0 100px}.border-radius-right[_ngcontent-%COMP%]{border-radius:0 100px 100px 0}.cmacs-kpi-divider[_ngcontent-%COMP%]{display:inline-block;margin-top:4px;width:3px;height:10px;border-radius:10px;margin-right:8px}.cmacs-kpi-count[_ngcontent-%COMP%]{display:inline-block;font-family:Roboto,sans-serif;font-size:12px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px;min-width:20px}.cmacs-kpi-description[_ngcontent-%COMP%]{display:inline-block;font-family:Roboto,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-legend-wrapper[_ngcontent-%COMP%]{margin-bottom:11px;display:flex}.cmacs-kpi-wrapper[_ngcontent-%COMP%]{display:flex}.cmacs-kpi-title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-kpi-doughnut-wrapper[_ngcontent-%COMP%]{position:absolute;margin-top:24px;margin-left:30px;float:left;display:inline-block}.cmacs-kpi-doughnut-total-count[_ngcontent-%COMP%]{position:relative;left:-50%;font-size:20px;font-weight:600;color:#3b4043}.cmacs-kpi-total-count-wrapper[_ngcontent-%COMP%]{top:calc(50% - 17px);left:50%;position:absolute}.cmacs-kpi-doughnut-legend-wrapper[_ngcontent-%COMP%]{float:right;display:inline-block;margin-top:24px}", "cmacs-kpi[_ngcontent-%COMP%]{display:block}"] }); }
}
__decorate([
    InputBoolean()
], CmacsKpiComponent.prototype, "priority", void 0);
__decorate([
    InputBoolean()
], CmacsKpiComponent.prototype, "showTotalCount", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsKpiComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-kpi', exportAs: 'cmacsKpi', template: "<div class=\"cmacs-kpi-wrapper\" *ngIf=\"type === 'line'\">\r\n  <div class=\"cmacs-kpi-total-count\" *ngIf=\"showTotalCount\">{{getTotalCount().toFixed(fixed)}}</div>\r\n  <div style=\"flex: 1 0 auto;\">\r\n    <div class=\"cmacs-kpi-title\">{{title}}</div>\r\n    <div *ngFor=\"let kpi of getColoredData(); index as i\" class=\"cmacs-kpi-line\" [class.border-radius-left]=\"i === 0\"\r\n      [class.border-radius-right]=\"i === getColoredData().lenght - 1\" [style.width.%]=\"getWidth(kpi.count)\"\r\n      [style.background-color]=\"kpi.color\" [style.opacity]=\"sanitizeStyle(kpi.opacity)\">\r\n    </div>\r\n    <div *ngIf=\"showLegend\">\r\n      <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"cmacs-kpi-doughnut-container\" *ngIf=\"type === 'doughnut'\">\r\n  <div class=\"cmacs-kpi-doughnut-title\">{{title}}</div>\r\n  <div class=\"cmacs-kpi-doughnut-wrapper\" [style.width.px]=\"getTotalWidth()\">\r\n    <div class=\"cmacs-kpi-total-count-wrapper\">\r\n      <div class=\"cmacs-kpi-doughnut-total-count\">{{getTotalCount().toFixed(fixed)}}</div>\r\n    </div>\r\n    <img #canvasImg class=\"cmacs-kpi-canvas-toimage\" />\r\n  </div>\r\n  <div class=\"cmacs-kpi-doughnut-legend-wrapper\" *ngIf=\"showLegend\">\r\n    <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #legend>\r\n  <div class=\"cmacs-kpi-legend-wrapper\" *ngFor=\"let kpi of getColoredData(); index as i\">\r\n    <div class=\"cmacs-kpi-divider\" [style.background-color]=\"kpi.color\" [style.opacity]=\"sanitizeStyle(kpi.opacity)\">\r\n    </div>\r\n    <div class=\"cmacs-kpi-count\">{{kpi.count.toFixed(fixed)}}</div>\r\n    <div class=\"cmacs-kpi-description\">{{kpi.description}}</div>\r\n  </div>\r\n</ng-template>", styles: [".cmacs-kpi-line{height:6px;margin-right:4px;display:inline-block}.cmacs-kpi-total-count{margin-right:10px;margin-top:-2px;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left{border-radius:100px 0 0 100px}.border-radius-right{border-radius:0 100px 100px 0}.cmacs-kpi-divider{display:inline-block;margin-top:4px;width:3px;height:10px;border-radius:10px;margin-right:8px}.cmacs-kpi-count{display:inline-block;font-family:Roboto,sans-serif;font-size:12px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px;min-width:20px}.cmacs-kpi-description{display:inline-block;font-family:Roboto,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-legend-wrapper{margin-bottom:11px;display:flex}.cmacs-kpi-wrapper{display:flex}.cmacs-kpi-title{font-family:Roboto,sans-serif;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-kpi-doughnut-wrapper{position:absolute;margin-top:24px;margin-left:30px;float:left;display:inline-block}.cmacs-kpi-doughnut-total-count{position:relative;left:-50%;font-size:20px;font-weight:600;color:#3b4043}.cmacs-kpi-total-count-wrapper{top:calc(50% - 17px);left:50%;position:absolute}.cmacs-kpi-doughnut-legend-wrapper{float:right;display:inline-block;margin-top:24px}\n", "cmacs-kpi{display:block}\n"] }]
    }], function () { return [{ type: i1.DomSanitizer }, { type: i0.ChangeDetectorRef }]; }, { showLegend: [{
            type: Input
        }], data: [{
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
        }], canvasImgRef: [{
            type: ViewChild,
            args: ['canvasImg', { read: ElementRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGkvY21hY3Mta3BpLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGkvY21hY3Mta3BpLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztJQ05uRSw4QkFBMEQ7SUFBQSxZQUFrQztJQUFBLGlCQUFNOzs7SUFBeEMsZUFBa0M7SUFBbEMsa0VBQWtDOzs7SUFHMUYsMEJBR007Ozs7O0lBRjRELDJEQUFxQyxrQ0FBQSxpREFBQTtJQUQxQixnREFBb0Msb0VBQUE7OztJQUsvRyx3QkFBd0Q7OztJQUQxRCwyQkFBd0I7SUFDdEIsaUdBQXdEO0lBQzFELGlCQUFNOzs7O0lBRFcsZUFBd0I7SUFBeEIsc0NBQXdCOzs7SUFUN0MsOEJBQXVEO0lBQ3JELHdFQUFrRztJQUNsRyw4QkFBNkIsYUFBQTtJQUNFLFlBQVM7SUFBQSxpQkFBTTtJQUM1Qyx5RUFHTTtJQUNOLHdFQUVNO0lBQ1IsaUJBQU0sRUFBQTs7O0lBVjhCLGVBQW9CO0lBQXBCLDRDQUFvQjtJQUV6QixlQUFTO0lBQVQsa0NBQVM7SUFDakIsZUFBcUI7SUFBckIsaURBQXFCO0lBSXBDLGVBQWdCO0lBQWhCLHdDQUFnQjs7O0lBZXRCLHdCQUF3RDs7O0lBRDFELCtCQUFrRTtJQUNoRSxpR0FBd0Q7SUFDMUQsaUJBQU07Ozs7SUFE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LE9BQU8sRUFBRSxPQUFPO2lCQUNqQixDQUFDLENBQUM7Z0JBRUgsT0FBTyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQ3hCLFFBQVEsRUFBRSxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLFdBQVcsQ0FBQztTQUNwQjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7a0ZBbExVLGlCQUFpQjtvRUFBakIsaUJBQWlCO21DQVVJLFVBQVU7Ozs7O1lDdkQ1QyxrRUFZTTtZQUVOLG1FQVdNO1lBRU4sbUhBT2M7O1lBbENrQiwwQ0FBcUI7WUFjVixlQUF5QjtZQUF6Qiw4Q0FBeUI7OztBRG9DekM7SUFBZixZQUFZLEVBQUU7bURBQWtCO0FBR2pCO0lBQWYsWUFBWSxFQUFFO3lEQUF3Qjt1RkFSckMsaUJBQWlCO2NBYjdCLFNBQVM7MkJBQ0UsV0FBVyxZQUNYLFVBQVU7K0ZBYVgsVUFBVTtrQkFBbEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ21CLGNBQWM7a0JBQXRDLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDd0MsWUFBWTtrQkFBekQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBnZXRQcmVjaXNpb24sIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmV4cG9ydCBjb25zdCBLUElfQ09MT1JTID0gW1xyXG4gICcjMmE3Y2ZmJyxcclxuICAnIzAwY2RhMScsXHJcbiAgJyNmZmEyMzQnLFxyXG4gICcjYTEwMGNkJyxcclxuICAnI2NjMjIyOScsXHJcbiAgJyMwMDlmZTMnLFxyXG4gICcjNjg4Y2RhJyxcclxuICAnI2JlYzRjZCdcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBLUElfUFJJT1JJVFlfQ09MT1JTID0ge1xyXG4gIGhpZ2g6ICcjZjY1MDNjJyxcclxuICBtZWRpdW06ICcjZmZjNjM0JyxcclxuICBsb3c6ICcjMDBjZTdkJ1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLUEkge1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBwcmlvcml0eT86ICdsb3cnIHwgJ2hpZ2gnIHwgJ21lZGl1bSc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mta3BpJyxcclxuICBleHBvcnRBczogJ2NtYWNzS3BpJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mta3BpLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1rcGkuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1rcGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NLcGlDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCkgc2hvd0xlZ2VuZCA9IHRydWU7XHJcbiAgQElucHV0KCkgZGF0YTogS1BJW107XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcHJpb3JpdHkgPSBmYWxzZTtcclxuICBASW5wdXQoKSB0eXBlOiAnbGluZScgfCAnZG91Z2hudXQnID0gJ2xpbmUnO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgPSA4NDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1RvdGFsQ291bnQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBmaXhlZCA9IDA7XHJcbiAgQFZpZXdDaGlsZCgnY2FudmFzSW1nJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGNhbnZhc0ltZ1JlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY2FudmFzSW1nUmVmKSB7XHJcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBjYW52YXMud2lkdGggPSB0aGlzLmdldFRvdGFsV2lkdGgoKTtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuZ2V0VG90YWxXaWR0aCgpO1xyXG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgbGV0IHN0YXJ0X2FuZ2xlID0gMDtcclxuICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldENvbG9yZWREYXRhKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5nZXRUb3RhbENvdW50KCkgPiAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgY2F0ZWcgb2YgZGF0YSl7XHJcbiAgICAgICAgICBsZXQgdmFsID0gY2F0ZWcuY291bnQ7XHJcbiAgICAgICAgICBsZXQgc2xpY2VfYW5nbGUgPSAyICogTWF0aC5QSSAqICh2YWwgLyB0aGlzLmdldFRvdGFsQ291bnQoKSk7XHJcbiAgICAgICAgICBpZiAoc2xpY2VfYW5nbGUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgICBjYW52YXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgIE1hdGgubWluKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKSxcclxuICAgICAgICAgICAgICBzdGFydF9hbmdsZSxcclxuICAgICAgICAgICAgICBzdGFydF9hbmdsZSArIHNsaWNlX2FuZ2xlIC0gMC4wNSxcclxuICAgICAgICAgICAgICBjYXRlZy5jb2xvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzdGFydF9hbmdsZSArPSBzbGljZV9hbmdsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICBjYW52YXMud2lkdGgvMixcclxuICAgICAgICAgIGNhbnZhcy5oZWlnaHQvMixcclxuICAgICAgICAgIE1hdGgubWluKGNhbnZhcy53aWR0aC8yLCBjYW52YXMuaGVpZ2h0LzIpLFxyXG4gICAgICAgICAgc3RhcnRfYW5nbGUsXHJcbiAgICAgICAgICBzdGFydF9hbmdsZSArIDIgKiBNYXRoLlBJLFxyXG4gICAgICAgICAgJyNkZWUwZTUnXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC8vZHJhd2luZyBhIHdoaXRlIGNpcmNsZSBvdmVyIHRoZSBjaGFydFxyXG4gICAgICAvL3RvIGNyZWF0ZSB0aGUgZG91Z2hudXQgY2hhcnRcclxuICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgY3R4LFxyXG4gICAgICAgIGNhbnZhcy53aWR0aC8yLFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQvMixcclxuICAgICAgICAwLjggKiBNYXRoLm1pbihjYW52YXMud2lkdGgvMiwgY2FudmFzLmhlaWdodC8yKSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDIgKiBNYXRoLlBJLFxyXG4gICAgICAgIFwiI2ZmZmZmZlwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvL2NvbnZlcnQgY2FudmFzIHRvIGltZ1xyXG4gICAgICBjb25zdCBpbWcgPSB0aGlzLmNhbnZhc0ltZ1JlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgIGltZy5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICAgIGNhbnZhcy5yZW1vdmUoKTtcclxuICAgICAgaW1nLndpZHRoID0gdGhpcy5nZXRUb3RhbFdpZHRoKCk7XHJcbiAgICAgIGltZy5oZWlnaHQgPSB0aGlzLmdldFRvdGFsV2lkdGgoKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldENvbG9yZWREYXRhUHJpb3JpdHkoKSB7XHJcbiAgICBsZXQgY29sb3JlZERhdGEgPSBbXTtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbG9yZWREYXRhLnB1c2goe1xyXG4gICAgICAgIGNvdW50OiBpdGVtLmNvdW50LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGNvbG9yOiBLUElfUFJJT1JJVFlfQ09MT1JTW2l0ZW0ucHJpb3JpdHldLFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb2xvcmVkRGF0YTtcclxuICB9XHJcblxyXG4gIGRyYXdQaWVTbGljZShjdHg6IGFueSxjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlciwgY29sb3I6IGFueSApe1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbyhjZW50ZXJYLCBjZW50ZXJZKTtcclxuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCBzdGFydEFuZ2xlIC0gTWF0aC5QSSAvIDIsIGVuZEFuZ2xlIC0gTWF0aC5QSSAvIDIsIGZhbHNlKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3TGluZShjdHg6IGFueSwgc3RhcnRYOiBudW1iZXIsIHN0YXJ0WTogbnVtYmVyLCBlbmRYOiBudW1iZXIsIGVuZFk6IG51bWJlcil7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKHN0YXJ0WCxzdGFydFkpO1xyXG4gICAgY3R4LmxpbmVUbyhlbmRYLGVuZFkpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0FyYyhjdHg6IGFueSwgY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIpe1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIHNhbml0aXplU3R5bGUoc3R5bGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShzdHlsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRUb3RhbENvdW50KCkge1xyXG4gICAgbGV0IHRvdGFsID0gMDtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHRvdGFsICs9IGl0ZW0uY291bnQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0b3RhbDtcclxuICB9XHJcblxyXG4gIGdldFdpZHRoKGNvdW50OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBjb3VudCAhPT0gMCA/IE1hdGgudHJ1bmMoY291bnQgKiAxMDAgLyB0aGlzLmdldFRvdGFsQ291bnQoKSkgLSAyIDogMDtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsV2lkdGgoKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0VG90YWxDb3VudCgpLnRvRml4ZWQodGhpcy5maXhlZCkudG9TdHJpbmcoKS5sZW5ndGggKiAyNTtcclxuICAgIHJldHVybiB3aWR0aCA8PSA4NCA/IDg0IDogd2lkdGg7XHJcbiAgfVxyXG5cclxuICBnZXRDb2xvcmVkRGF0YSgpIHtcclxuICAgIGlmICghdGhpcy5wcmlvcml0eSkge1xyXG4gICAgICBsZXQgY29sb3JlZERhdGE6IGFueSA9IFtdO1xyXG4gICAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmRhdGEubGVuZ3RoICUgS1BJX0NPTE9SUy5sZW5ndGg7XHJcbiAgICAgIGxldCByYXRlID0gdGhpcy5kYXRhLmxlbmd0aCAvIEtQSV9DT0xPUlMubGVuZ3RoO1xyXG4gICAgICBpZiAocmVtYWluaW5nID4gMCkge1xyXG4gICAgICAgIHJhdGUgPSBNYXRoLnRydW5jKHJhdGUpICsgMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHRlbXBSYXRlID0gcmF0ZTtcclxuICAgICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgICBsZXQgY29sb3JJbmRleCA9IDA7XHJcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKHRlbXBSYXRlID09PSAwKSB7XHJcbiAgICAgICAgICB0ZW1wUmF0ZSA9IHJhdGU7XHJcbiAgICAgICAgICBjb2xvckluZGV4ICs9IDE7XHJcbiAgICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2xvckluZGV4ID49IEtQSV9DT0xPUlMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBjb2xvckluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcGFjaXR5ID09PSAwLjQpIHtcclxuICAgICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29sb3JlZERhdGEucHVzaCh7XHJcbiAgICAgICAgICBjb3VudDogaXRlbS5jb3VudCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgY29sb3I6IEtQSV9DT0xPUlNbY29sb3JJbmRleF0sXHJcbiAgICAgICAgICBvcGFjaXR5OiBvcGFjaXR5XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9wYWNpdHkgPSBvcGFjaXR5IC0gMC4yO1xyXG4gICAgICAgIHRlbXBSYXRlLS07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbG9yZWREYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sb3JlZERhdGFQcmlvcml0eSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNtYWNzLWtwaS13cmFwcGVyXCIgKm5nSWY9XCJ0eXBlID09PSAnbGluZSdcIj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLXRvdGFsLWNvdW50XCIgKm5nSWY9XCJzaG93VG90YWxDb3VudFwiPnt7Z2V0VG90YWxDb3VudCgpLnRvRml4ZWQoZml4ZWQpfX08L2Rpdj5cclxuICA8ZGl2IHN0eWxlPVwiZmxleDogMSAwIGF1dG87XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBrcGkgb2YgZ2V0Q29sb3JlZERhdGEoKTsgaW5kZXggYXMgaVwiIGNsYXNzPVwiY21hY3Mta3BpLWxpbmVcIiBbY2xhc3MuYm9yZGVyLXJhZGl1cy1sZWZ0XT1cImkgPT09IDBcIlxyXG4gICAgICBbY2xhc3MuYm9yZGVyLXJhZGl1cy1yaWdodF09XCJpID09PSBnZXRDb2xvcmVkRGF0YSgpLmxlbmdodCAtIDFcIiBbc3R5bGUud2lkdGguJV09XCJnZXRXaWR0aChrcGkuY291bnQpXCJcclxuICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwia3BpLmNvbG9yXCIgW3N0eWxlLm9wYWNpdHldPVwic2FuaXRpemVTdHlsZShrcGkub3BhY2l0eSlcIj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cInNob3dMZWdlbmRcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxlZ2VuZFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1kb3VnaG51dC1jb250YWluZXJcIiAqbmdJZj1cInR5cGUgPT09ICdkb3VnaG51dCdcIj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLWRvdWdobnV0LXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1kb3VnaG51dC13cmFwcGVyXCIgW3N0eWxlLndpZHRoLnB4XT1cImdldFRvdGFsV2lkdGgoKVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS10b3RhbC1jb3VudC13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktZG91Z2hudXQtdG90YWwtY291bnRcIj57e2dldFRvdGFsQ291bnQoKS50b0ZpeGVkKGZpeGVkKX19PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxpbWcgI2NhbnZhc0ltZyBjbGFzcz1cImNtYWNzLWtwaS1jYW52YXMtdG9pbWFnZVwiIC8+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1kb3VnaG51dC1sZWdlbmQtd3JhcHBlclwiICpuZ0lmPVwic2hvd0xlZ2VuZFwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxlZ2VuZFwiPjwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjbGVnZW5kPlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktbGVnZW5kLXdyYXBwZXJcIiAqbmdGb3I9XCJsZXQga3BpIG9mIGdldENvbG9yZWREYXRhKCk7IGluZGV4IGFzIGlcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktZGl2aWRlclwiIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImtwaS5jb2xvclwiIFtzdHlsZS5vcGFjaXR5XT1cInNhbml0aXplU3R5bGUoa3BpLm9wYWNpdHkpXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktY291bnRcIj57e2twaS5jb3VudC50b0ZpeGVkKGZpeGVkKX19PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLWRlc2NyaXB0aW9uXCI+e3trcGkuZGVzY3JpcHRpb259fTwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPiJdfQ==