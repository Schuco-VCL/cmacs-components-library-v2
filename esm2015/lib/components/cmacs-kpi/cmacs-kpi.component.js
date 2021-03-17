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
    i0.ɵɵstyleProp("width", ctx_r1.width, "px");
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
            canvas.width = this.width;
            canvas.height = this.width;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGkvY21hY3Mta3BpLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGkvY21hY3Mta3BpLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7O0lDTnJELDhCQUEwRDtJQUFBLFlBQWtDO0lBQUEsaUJBQU07OztJQUF4QyxlQUFrQztJQUFsQyxrRUFBa0M7OztJQUcxRiwwQkFTTTs7Ozs7SUFKSiwyREFBcUMsa0NBQUEsaURBQUE7SUFGckMsZ0RBQW9DLG9FQUFBOzs7SUFPdEMsd0JBQXdEOzs7SUFkNUQsOEJBQXVEO0lBQ3JELHdFQUFrRztJQUNsRyw4QkFBNkI7SUFDM0IsOEJBQTZCO0lBQUEsWUFBUztJQUFBLGlCQUFNO0lBQzVDLHlFQVNNO0lBQ04sMEZBQXdEO0lBQzFELGlCQUFNO0lBQ1IsaUJBQU07Ozs7SUFmZ0MsZUFBb0I7SUFBcEIsNENBQW9CO0lBRXpCLGVBQVM7SUFBVCxrQ0FBUztJQUVwQixlQUFxQjtJQUFyQixpREFBcUI7SUFTeEIsZUFBd0I7SUFBeEIsc0NBQXdCOzs7SUFhdkMsd0JBQXdEOzs7SUFUNUQsK0JBQXNFO0lBQ3BFLCtCQUFzQztJQUFBLFlBQVM7SUFBQSxpQkFBTTtJQUNyRCwrQkFBaUU7SUFDL0QsK0JBQTJDO0lBQ3pDLCtCQUE0QztJQUFBLFlBQWtDO0lBQUEsaUJBQU07SUFDdEYsaUJBQU07SUFDTixtQ0FBeUI7SUFDM0IsaUJBQU07SUFDTiwrQkFBK0M7SUFDN0MsNEZBQXdEO0lBQzFELGlCQUFNO0lBQ1IsaUJBQU07Ozs7SUFWa0MsZUFBUztJQUFULGtDQUFTO0lBQ1AsZUFBd0I7SUFBeEIsMkNBQXdCO0lBRWhCLGVBQWtDO0lBQWxDLGtFQUFrQztJQUtqRSxlQUF3QjtJQUF4QixzQ0FBd0I7OztJQUt6QywrQkFHQztJQUNDLDBCQUdPO0lBQ1AsK0JBQTZCO0lBQUEsWUFBNEI7SUFBQSxpQkFBTTtJQUMvRCwrQkFBbUM7SUFBQSxZQUFtQjtJQUFBLGlCQUFNO0lBQzlELGlCQUFNOzs7O0lBTEMsZUFBb0M7SUFBcEMsaURBQW9DLG1EQUFBO0lBR1osZUFBNEI7SUFBNUIsMERBQTRCO0lBQ3RCLGVBQW1CO0lBQW5CLHlDQUFtQjs7O0lBVHhELGlGQVVNOzs7SUFSWSxpREFBcUI7O0FEekJ6QyxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUc7SUFDeEIsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7Q0FDVixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUc7SUFDakMsSUFBSSxFQUFFLFNBQVM7SUFDZixNQUFNLEVBQUUsU0FBUztJQUNqQixHQUFHLEVBQUUsU0FBUztDQUNmLENBQUM7QUFxQkYsTUFBTSxPQUFPLGlCQUFpQjtJQVc1QixZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBUGxCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakMsU0FBSSxHQUF3QixNQUFNLENBQUM7UUFDbkMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNILG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLFVBQUssR0FBRyxDQUFDLENBQUM7SUFHNEIsQ0FBQztJQUVoRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBa0MsQ0FBQztZQUNqRSxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDMUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzNCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFcEMsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVqQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxFQUFDO29CQUNyQixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUN0QixJQUFJLFdBQVcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxXQUFXLEdBQUcsQ0FBQyxFQUFFO3dCQUNuQixJQUFJLENBQUMsWUFBWSxDQUNmLEdBQUcsRUFDSCxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDaEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFDN0MsV0FBVyxFQUNYLFdBQVcsR0FBRyxXQUFXLEdBQUcsSUFBSSxFQUNoQyxLQUFLLENBQUMsS0FBSyxDQUNaLENBQUM7d0JBQ0YsV0FBVyxJQUFJLFdBQVcsQ0FBQztxQkFDNUI7aUJBQ0Y7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUNmLEdBQUcsRUFDSCxNQUFNLENBQUMsS0FBSyxHQUFDLENBQUMsRUFDZCxNQUFNLENBQUMsTUFBTSxHQUFDLENBQUMsRUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLEVBQ3pDLFdBQVcsRUFDWCxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQ3pCLFNBQVMsQ0FDVixDQUFDO2FBQ0g7WUFHRCx1Q0FBdUM7WUFDdkMsOEJBQThCO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQ2YsR0FBRyxFQUNILE1BQU0sQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUNkLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUNmLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLEVBQy9DLENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFDWCxTQUFTLENBQ1YsQ0FBQztTQUNIO0lBRUgsQ0FBQztJQUVELHNCQUFzQjtRQUNwQixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN6QixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM3QixLQUFLLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUM7YUFDWCxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBUSxFQUFDLE9BQWUsRUFBRSxPQUFlLEVBQUUsTUFBYyxFQUFFLFVBQWtCLEVBQUUsUUFBZ0IsRUFBRSxLQUFVO1FBQ3RILEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0YsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBUSxFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsSUFBWSxFQUFFLElBQVk7UUFDM0UsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBUSxFQUFFLE9BQWUsRUFBRSxPQUFlLEVBQUUsTUFBYyxFQUFFLFVBQWtCLEVBQUUsUUFBZ0I7UUFDdEcsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3pCLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLFdBQVcsR0FBUSxFQUFFLENBQUM7WUFDMUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUN2RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ2hELElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtnQkFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdCO1lBRUQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO29CQUNsQixRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNoQixVQUFVLElBQUksQ0FBQyxDQUFDO29CQUNoQixPQUFPLEdBQUcsQ0FBQyxDQUFDO2lCQUNiO2dCQUVELElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7b0JBQ25DLFVBQVUsR0FBRyxDQUFDLENBQUM7aUJBQ2hCO2dCQUVELElBQUksT0FBTyxLQUFLLEdBQUcsRUFBRTtvQkFDbkIsT0FBTyxHQUFHLENBQUMsQ0FBQztpQkFDYjtnQkFFRCxXQUFXLENBQUMsSUFBSSxDQUFDO29CQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUM3QixLQUFLLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxFQUFFLE9BQU87aUJBQ2pCLENBQUMsQ0FBQztnQkFFSCxPQUFPLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDeEIsUUFBUSxFQUFFLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sV0FBVyxDQUFDO1NBQ3BCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7a0ZBaktVLGlCQUFpQjtzREFBakIsaUJBQWlCOytCQVNDLFVBQVU7Ozs7O1FDdER6QyxrRUFnQk07UUFFTixtRUFXTTtRQUVOLG1IQVljOztRQTNDa0IsMENBQXFCO1FBa0JWLGVBQXlCO1FBQXpCLDhDQUF5Qjs7QUQrQnpDO0lBQWYsWUFBWSxFQUFFO21EQUFrQjtBQUdqQjtJQUFmLFlBQVksRUFBRTt5REFBd0I7dUZBUHJDLGlCQUFpQjtjQWI3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDeEMsTUFBTSxFQUFFO29CQUNOOzs7O0tBSUM7aUJBQ0Y7YUFDRjsrREFHVSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNtQixjQUFjO2tCQUF0QyxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ3FDLFNBQVM7a0JBQW5ELFNBQVM7bUJBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5leHBvcnQgY29uc3QgS1BJX0NPTE9SUyA9IFtcclxuICAnIzJhN2NmZicsXHJcbiAgJyMwMGNkYTEnLFxyXG4gICcjZmZhMjM0JyxcclxuICAnI2ExMDBjZCcsXHJcbiAgJyNjYzIyMjknLFxyXG4gICcjMDA5ZmUzJyxcclxuICAnIzY4OGNkYScsXHJcbiAgJyNiZWM0Y2QnXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgS1BJX1BSSU9SSVRZX0NPTE9SUyA9IHtcclxuICBoaWdoOiAnI2Y2NTAzYycsXHJcbiAgbWVkaXVtOiAnI2ZmYzYzNCcsXHJcbiAgbG93OiAnIzAwY2U3ZCdcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS1BJIHtcclxuICBjb3VudDogbnVtYmVyO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpb3JpdHk/OiAnbG93JyB8ICdoaWdoJyB8ICdtZWRpdW0nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWtwaScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0twaScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWtwaS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mta3BpLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3Mta3BpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzS3BpQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGRhdGE6IEtQSVtdO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHByaW9yaXR5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHlwZTogJ2xpbmUnIHwgJ2RvdWdobnV0JyA9ICdsaW5lJztcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyID0gODQ7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dUb3RhbENvdW50ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZml4ZWQgPSAwO1xyXG4gIEBWaWV3Q2hpbGQoJ2NhbnZhcycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBjYW52YXNSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jYW52YXNSZWYpIHtcclxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICBsZXQgc3RhcnRfYW5nbGUgPSAwO1xyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0Q29sb3JlZERhdGEoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmdldFRvdGFsQ291bnQoKSA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBjYXRlZyBvZiBkYXRhKXtcclxuICAgICAgICAgIGxldCB2YWwgPSBjYXRlZy5jb3VudDtcclxuICAgICAgICAgIGxldCBzbGljZV9hbmdsZSA9IDIgKiBNYXRoLlBJICogKHZhbCAvIHRoaXMuZ2V0VG90YWxDb3VudCgpKTtcclxuICAgICAgICAgIGlmIChzbGljZV9hbmdsZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpLFxyXG4gICAgICAgICAgICAgIHN0YXJ0X2FuZ2xlLFxyXG4gICAgICAgICAgICAgIHN0YXJ0X2FuZ2xlICsgc2xpY2VfYW5nbGUgLSAwLjA1LFxyXG4gICAgICAgICAgICAgIGNhdGVnLmNvbG9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN0YXJ0X2FuZ2xlICs9IHNsaWNlX2FuZ2xlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICAgIGN0eCxcclxuICAgICAgICAgIGNhbnZhcy53aWR0aC8yLFxyXG4gICAgICAgICAgY2FudmFzLmhlaWdodC8yLFxyXG4gICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoLzIsIGNhbnZhcy5oZWlnaHQvMiksXHJcbiAgICAgICAgICBzdGFydF9hbmdsZSxcclxuICAgICAgICAgIHN0YXJ0X2FuZ2xlICsgMiAqIE1hdGguUEksXHJcbiAgICAgICAgICAnI2RlZTBlNSdcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy9kcmF3aW5nIGEgd2hpdGUgY2lyY2xlIG92ZXIgdGhlIGNoYXJ0XHJcbiAgICAgIC8vdG8gY3JlYXRlIHRoZSBkb3VnaG51dCBjaGFydFxyXG4gICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICBjdHgsXHJcbiAgICAgICAgY2FudmFzLndpZHRoLzIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodC8yLFxyXG4gICAgICAgIDAuOCAqIE1hdGgubWluKGNhbnZhcy53aWR0aC8yLCBjYW52YXMuaGVpZ2h0LzIpLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMiAqIE1hdGguUEksXHJcbiAgICAgICAgXCIjZmZmZmZmXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXRDb2xvcmVkRGF0YVByaW9yaXR5KCkge1xyXG4gICAgbGV0IGNvbG9yZWREYXRhID0gW107XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb2xvcmVkRGF0YS5wdXNoKHtcclxuICAgICAgICBjb3VudDogaXRlbS5jb3VudCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICBjb2xvcjogS1BJX1BSSU9SSVRZX0NPTE9SU1tpdGVtLnByaW9yaXR5XSxcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY29sb3JlZERhdGE7XHJcbiAgfVxyXG5cclxuICBkcmF3UGllU2xpY2UoY3R4OiBhbnksY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIsIGNvbG9yOiBhbnkgKXtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSAtIE1hdGguUEkgLyAyLCBlbmRBbmdsZSAtIE1hdGguUEkgLyAyLCBmYWxzZSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0xpbmUoY3R4OiBhbnksIHN0YXJ0WDogbnVtYmVyLCBzdGFydFk6IG51bWJlciwgZW5kWDogbnVtYmVyLCBlbmRZOiBudW1iZXIpe1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbyhzdGFydFgsc3RhcnRZKTtcclxuICAgIGN0eC5saW5lVG8oZW5kWCxlbmRZKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGRyYXdBcmMoY3R4OiBhbnksIGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyKXtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBzYW5pdGl6ZVN0eWxlKHN0eWxlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoc3R5bGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG90YWxDb3VudCgpIHtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICB0b3RhbCArPSBpdGVtLmNvdW50O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdG90YWw7XHJcbiAgfVxyXG5cclxuICBnZXRXaWR0aChjb3VudDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gY291bnQgIT09IDAgPyBNYXRoLnRydW5jKGNvdW50ICogMTAwIC8gdGhpcy5nZXRUb3RhbENvdW50KCkpIC0gMiA6IDA7XHJcbiAgfVxyXG5cclxuICBnZXRDb2xvcmVkRGF0YSgpIHtcclxuICAgIGlmICghdGhpcy5wcmlvcml0eSkge1xyXG4gICAgICBsZXQgY29sb3JlZERhdGE6IGFueSA9IFtdO1xyXG4gICAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmRhdGEubGVuZ3RoICUgS1BJX0NPTE9SUy5sZW5ndGg7XHJcbiAgICAgIGxldCByYXRlID0gdGhpcy5kYXRhLmxlbmd0aCAvIEtQSV9DT0xPUlMubGVuZ3RoO1xyXG4gICAgICBpZiAocmVtYWluaW5nID4gMCkge1xyXG4gICAgICAgIHJhdGUgPSBNYXRoLnRydW5jKHJhdGUpICsgMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHRlbXBSYXRlID0gcmF0ZTtcclxuICAgICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgICBsZXQgY29sb3JJbmRleCA9IDA7XHJcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKHRlbXBSYXRlID09PSAwKSB7XHJcbiAgICAgICAgICB0ZW1wUmF0ZSA9IHJhdGU7XHJcbiAgICAgICAgICBjb2xvckluZGV4ICs9IDE7XHJcbiAgICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2xvckluZGV4ID49IEtQSV9DT0xPUlMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBjb2xvckluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcGFjaXR5ID09PSAwLjQpIHtcclxuICAgICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29sb3JlZERhdGEucHVzaCh7XHJcbiAgICAgICAgICBjb3VudDogaXRlbS5jb3VudCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgY29sb3I6IEtQSV9DT0xPUlNbY29sb3JJbmRleF0sXHJcbiAgICAgICAgICBvcGFjaXR5OiBvcGFjaXR5XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9wYWNpdHkgPSBvcGFjaXR5IC0gMC4yO1xyXG4gICAgICAgIHRlbXBSYXRlLS07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbG9yZWREYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sb3JlZERhdGFQcmlvcml0eSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNtYWNzLWtwaS13cmFwcGVyXCIgKm5nSWY9XCJ0eXBlID09PSAnbGluZSdcIj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLXRvdGFsLWNvdW50XCIgKm5nSWY9XCJzaG93VG90YWxDb3VudFwiPnt7Z2V0VG90YWxDb3VudCgpLnRvRml4ZWQoZml4ZWQpfX08L2Rpdj5cclxuICA8ZGl2IHN0eWxlPVwiZmxleDogMSAwIGF1dG87XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgICpuZ0Zvcj1cImxldCBrcGkgb2YgZ2V0Q29sb3JlZERhdGEoKTsgaW5kZXggYXMgaVwiXHJcbiAgICAgIGNsYXNzPVwiY21hY3Mta3BpLWxpbmVcIlxyXG4gICAgICBbY2xhc3MuYm9yZGVyLXJhZGl1cy1sZWZ0XT1cImkgPT09IDBcIlxyXG4gICAgICBbY2xhc3MuYm9yZGVyLXJhZGl1cy1yaWdodF09XCJpID09PSBnZXRDb2xvcmVkRGF0YSgpLmxlbmdodCAtIDFcIlxyXG4gICAgICBbc3R5bGUud2lkdGguJV09XCJnZXRXaWR0aChrcGkuY291bnQpXCJcclxuICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwia3BpLmNvbG9yXCJcclxuICAgICAgW3N0eWxlLm9wYWNpdHldPVwic2FuaXRpemVTdHlsZShrcGkub3BhY2l0eSlcIlxyXG4gICAgICA+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsZWdlbmRcIj48L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiY21hY3Mta3BpLWRvdWdobnV0LWNvbnRhaW5lclwiICpuZ0lmPVwidHlwZSA9PT0gJ2RvdWdobnV0J1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktZG91Z2hudXQtdGl0bGVcIj57e3RpdGxlfX08L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLWRvdWdobnV0LXdyYXBwZXJcIiBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktdG90YWwtY291bnQtd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLWRvdWdobnV0LXRvdGFsLWNvdW50XCI+e3tnZXRUb3RhbENvdW50KCkudG9GaXhlZChmaXhlZCl9fTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Y2FudmFzICNjYW52YXM+PC9jYW52YXM+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1kb3VnaG51dC1sZWdlbmQtd3JhcHBlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxlZ2VuZFwiPjwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjbGVnZW5kPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiY21hY3Mta3BpLWxlZ2VuZC13cmFwcGVyXCJcclxuICAgICpuZ0Zvcj1cImxldCBrcGkgb2YgZ2V0Q29sb3JlZERhdGEoKTsgaW5kZXggYXMgaVwiXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1kaXZpZGVyXCJcclxuICAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwia3BpLmNvbG9yXCJcclxuICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwic2FuaXRpemVTdHlsZShrcGkub3BhY2l0eSlcIlxyXG4gICAgPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1jb3VudFwiPnt7a3BpLmNvdW50LnRvRml4ZWQoZml4ZWQpfX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktZGVzY3JpcHRpb25cIj57e2twaS5kZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==