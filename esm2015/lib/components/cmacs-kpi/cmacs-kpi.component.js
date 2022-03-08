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
    i0.ɵɵelement(7, "img", 16, 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 18);
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
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelement(1, "div", 21);
    i0.ɵɵelementStart(2, "div", 22);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 23);
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
    i0.ɵɵtemplate(0, CmacsKpiComponent_ng_template_2_div_0_Template, 6, 6, "div", 19);
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
}
CmacsKpiComponent.ɵfac = function CmacsKpiComponent_Factory(t) { return new (t || CmacsKpiComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CmacsKpiComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsKpiComponent, selectors: [["cmacs-kpi"]], viewQuery: function CmacsKpiComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvasImgRef = _t.first);
    } }, inputs: { data: "data", title: "title", priority: "priority", type: "type", width: "width", showTotalCount: "showTotalCount", fixed: "fixed" }, exportAs: ["cmacsKpi"], decls: 4, vars: 2, consts: [["class", "cmacs-kpi-wrapper", 4, "ngIf"], ["class", "cmacs-kpi-doughnut-container", 4, "ngIf"], ["legend", ""], [1, "cmacs-kpi-wrapper"], ["class", "cmacs-kpi-total-count", 4, "ngIf"], [2, "flex", "1 0 auto"], [1, "cmacs-kpi-title"], ["class", "cmacs-kpi-line", 3, "border-radius-left", "border-radius-right", "width", "background-color", "opacity", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet"], [1, "cmacs-kpi-total-count"], [1, "cmacs-kpi-line"], [1, "cmacs-kpi-doughnut-container"], [1, "cmacs-kpi-doughnut-title"], [1, "cmacs-kpi-doughnut-wrapper"], [1, "cmacs-kpi-total-count-wrapper"], [1, "cmacs-kpi-doughnut-total-count"], [1, "cmacs-kpi-canvas-toimage"], ["canvasImg", ""], [1, "cmacs-kpi-doughnut-legend-wrapper"], ["class", "cmacs-kpi-legend-wrapper", 4, "ngFor", "ngForOf"], [1, "cmacs-kpi-legend-wrapper"], [1, "cmacs-kpi-divider"], [1, "cmacs-kpi-count"], [1, "cmacs-kpi-description"]], template: function CmacsKpiComponent_Template(rf, ctx) { if (rf & 1) {
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
    }], function () { return [{ type: i1.DomSanitizer }, { type: i0.ChangeDetectorRef }]; }, { data: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGkvY21hY3Mta3BpLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGkvY21hY3Mta3BpLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztJQ05uRSw4QkFBMEQ7SUFBQSxZQUFrQztJQUFBLGlCQUFNOzs7SUFBeEMsZUFBa0M7SUFBbEMsa0VBQWtDOzs7SUFHMUYsMEJBU007Ozs7O0lBSkosMkRBQXFDLGtDQUFBLGlEQUFBO0lBRnJDLGdEQUFvQyxvRUFBQTs7O0lBT3RDLHdCQUF3RDs7O0lBZDVELDhCQUF1RDtJQUNyRCx3RUFBa0c7SUFDbEcsOEJBQTZCO0lBQzNCLDhCQUE2QjtJQUFBLFlBQVM7SUFBQSxpQkFBTTtJQUM1Qyx5RUFTTTtJQUNOLDBGQUF3RDtJQUMxRCxpQkFBTTtJQUNSLGlCQUFNOzs7O0lBZmdDLGVBQW9CO0lBQXBCLDRDQUFvQjtJQUV6QixlQUFTO0lBQVQsa0NBQVM7SUFFcEIsZUFBcUI7SUFBckIsaURBQXFCO0lBU3hCLGVBQXdCO0lBQXhCLHNDQUF3Qjs7O0lBYXZDLHdCQUF3RDs7O0lBVDVELCtCQUFzRTtJQUNwRSwrQkFBc0M7SUFBQSxZQUFTO0lBQUEsaUJBQU07SUFDckQsK0JBQTJFO0lBQ3pFLCtCQUEyQztJQUN6QywrQkFBNEM7SUFBQSxZQUFr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QUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLFdBQVcsQ0FBQztTQUNwQjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7O2tGQWpMVSxpQkFBaUI7c0RBQWpCLGlCQUFpQjsrQkFTSSxVQUFVOzs7OztRQ3RENUMsa0VBZ0JNO1FBRU4sbUVBV007UUFFTixtSEFZYzs7UUEzQ2tCLDBDQUFxQjtRQWtCVixlQUF5QjtRQUF6Qiw4Q0FBeUI7O0FEK0J6QztJQUFmLFlBQVksRUFBRTttREFBa0I7QUFHakI7SUFBZixZQUFZLEVBQUU7eURBQXdCO3VGQVByQyxpQkFBaUI7Y0FiN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3hDLE1BQU0sRUFBRTtvQkFDTjs7OztLQUlDO2lCQUNGO2FBQ0Y7K0ZBR1UsSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDbUIsY0FBYztrQkFBdEMsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUN3QyxZQUFZO2tCQUF6RCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IGdldFByZWNpc2lvbiwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEtQSV9DT0xPUlMgPSBbXHJcbiAgJyMyYTdjZmYnLFxyXG4gICcjMDBjZGExJyxcclxuICAnI2ZmYTIzNCcsXHJcbiAgJyNhMTAwY2QnLFxyXG4gICcjY2MyMjI5JyxcclxuICAnIzAwOWZlMycsXHJcbiAgJyM2ODhjZGEnLFxyXG4gICcjYmVjNGNkJ1xyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEtQSV9QUklPUklUWV9DT0xPUlMgPSB7XHJcbiAgaGlnaDogJyNmNjUwM2MnLFxyXG4gIG1lZGl1bTogJyNmZmM2MzQnLFxyXG4gIGxvdzogJyMwMGNlN2QnXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtQSSB7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHByaW9yaXR5PzogJ2xvdycgfCAnaGlnaCcgfCAnbWVkaXVtJztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1rcGknLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NLcGknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rcGkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWtwaS5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLWtwaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0twaUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSBkYXRhOiBLUElbXTtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBwcmlvcml0eSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHR5cGU6ICdsaW5lJyB8ICdkb3VnaG51dCcgPSAnbGluZSc7XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciA9IDg0O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93VG90YWxDb3VudCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGZpeGVkID0gMDtcclxuICBAVmlld0NoaWxkKCdjYW52YXNJbWcnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgY2FudmFzSW1nUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jYW52YXNJbWdSZWYpIHtcclxuICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuZ2V0VG90YWxXaWR0aCgpO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5nZXRUb3RhbFdpZHRoKCk7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICBsZXQgc3RhcnRfYW5nbGUgPSAwO1xyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0Q29sb3JlZERhdGEoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmdldFRvdGFsQ291bnQoKSA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBjYXRlZyBvZiBkYXRhKXtcclxuICAgICAgICAgIGxldCB2YWwgPSBjYXRlZy5jb3VudDtcclxuICAgICAgICAgIGxldCBzbGljZV9hbmdsZSA9IDIgKiBNYXRoLlBJICogKHZhbCAvIHRoaXMuZ2V0VG90YWxDb3VudCgpKTtcclxuICAgICAgICAgIGlmIChzbGljZV9hbmdsZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpLFxyXG4gICAgICAgICAgICAgIHN0YXJ0X2FuZ2xlLFxyXG4gICAgICAgICAgICAgIHN0YXJ0X2FuZ2xlICsgc2xpY2VfYW5nbGUgLSAwLjA1LFxyXG4gICAgICAgICAgICAgIGNhdGVnLmNvbG9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN0YXJ0X2FuZ2xlICs9IHNsaWNlX2FuZ2xlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICAgIGN0eCxcclxuICAgICAgICAgIGNhbnZhcy53aWR0aC8yLFxyXG4gICAgICAgICAgY2FudmFzLmhlaWdodC8yLFxyXG4gICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoLzIsIGNhbnZhcy5oZWlnaHQvMiksXHJcbiAgICAgICAgICBzdGFydF9hbmdsZSxcclxuICAgICAgICAgIHN0YXJ0X2FuZ2xlICsgMiAqIE1hdGguUEksXHJcbiAgICAgICAgICAnI2RlZTBlNSdcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy9kcmF3aW5nIGEgd2hpdGUgY2lyY2xlIG92ZXIgdGhlIGNoYXJ0XHJcbiAgICAgIC8vdG8gY3JlYXRlIHRoZSBkb3VnaG51dCBjaGFydFxyXG4gICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICBjdHgsXHJcbiAgICAgICAgY2FudmFzLndpZHRoLzIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodC8yLFxyXG4gICAgICAgIDAuOCAqIE1hdGgubWluKGNhbnZhcy53aWR0aC8yLCBjYW52YXMuaGVpZ2h0LzIpLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMiAqIE1hdGguUEksXHJcbiAgICAgICAgXCIjZmZmZmZmXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vY29udmVydCBjYW52YXMgdG8gaW1nXHJcbiAgICAgIGNvbnN0IGltZyA9IHRoaXMuY2FudmFzSW1nUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgaW1nLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcclxuICAgICAgY2FudmFzLnJlbW92ZSgpO1xyXG4gICAgICBpbWcud2lkdGggPSB0aGlzLmdldFRvdGFsV2lkdGgoKTtcclxuICAgICAgaW1nLmhlaWdodCA9IHRoaXMuZ2V0VG90YWxXaWR0aCgpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q29sb3JlZERhdGFQcmlvcml0eSgpIHtcclxuICAgIGxldCBjb2xvcmVkRGF0YSA9IFtdO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29sb3JlZERhdGEucHVzaCh7XHJcbiAgICAgICAgY291bnQ6IGl0ZW0uY291bnQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgY29sb3I6IEtQSV9QUklPUklUWV9DT0xPUlNbaXRlbS5wcmlvcml0eV0sXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbG9yZWREYXRhO1xyXG4gIH1cclxuXHJcbiAgZHJhd1BpZVNsaWNlKGN0eDogYW55LGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyLCBjb2xvcjogYW55ICl7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKGNlbnRlclgsIGNlbnRlclkpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUgLSBNYXRoLlBJIC8gMiwgZW5kQW5nbGUgLSBNYXRoLlBJIC8gMiwgZmFsc2UpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICB9XHJcblxyXG4gIGRyYXdMaW5lKGN0eDogYW55LCBzdGFydFg6IG51bWJlciwgc3RhcnRZOiBudW1iZXIsIGVuZFg6IG51bWJlciwgZW5kWTogbnVtYmVyKXtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oc3RhcnRYLHN0YXJ0WSk7XHJcbiAgICBjdHgubGluZVRvKGVuZFgsZW5kWSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3QXJjKGN0eDogYW55LCBjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlcil7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgc2FuaXRpemVTdHlsZShzdHlsZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlKTtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsQ291bnQoKSB7XHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgdG90YWwgKz0gaXRlbS5jb3VudDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2lkdGgoY291bnQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGNvdW50ICE9PSAwID8gTWF0aC50cnVuYyhjb3VudCAqIDEwMCAvIHRoaXMuZ2V0VG90YWxDb3VudCgpKSAtIDIgOiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG90YWxXaWR0aCgpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRUb3RhbENvdW50KCkudG9GaXhlZCh0aGlzLmZpeGVkKS50b1N0cmluZygpLmxlbmd0aCAqIDI1O1xyXG4gICAgcmV0dXJuIHdpZHRoIDw9IDg0ID8gODQgOiB3aWR0aDtcclxuICB9XHJcblxyXG4gIGdldENvbG9yZWREYXRhKCkge1xyXG4gICAgaWYgKCF0aGlzLnByaW9yaXR5KSB7XHJcbiAgICAgIGxldCBjb2xvcmVkRGF0YTogYW55ID0gW107XHJcbiAgICAgIGNvbnN0IHJlbWFpbmluZyA9IHRoaXMuZGF0YS5sZW5ndGggJSBLUElfQ09MT1JTLmxlbmd0aDtcclxuICAgICAgbGV0IHJhdGUgPSB0aGlzLmRhdGEubGVuZ3RoIC8gS1BJX0NPTE9SUy5sZW5ndGg7XHJcbiAgICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XHJcbiAgICAgICAgcmF0ZSA9IE1hdGgudHJ1bmMocmF0ZSkgKyAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICAgIGxldCBjb2xvckluZGV4ID0gMDtcclxuICAgICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAodGVtcFJhdGUgPT09IDApIHtcclxuICAgICAgICAgIHRlbXBSYXRlID0gcmF0ZTtcclxuICAgICAgICAgIGNvbG9ySW5kZXggKz0gMTtcclxuICAgICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbG9ySW5kZXggPj0gS1BJX0NPTE9SUy5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbG9ySW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgPT09IDAuNCkge1xyXG4gICAgICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb2xvcmVkRGF0YS5wdXNoKHtcclxuICAgICAgICAgIGNvdW50OiBpdGVtLmNvdW50LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBjb2xvcjogS1BJX0NPTE9SU1tjb2xvckluZGV4XSxcclxuICAgICAgICAgIG9wYWNpdHk6IG9wYWNpdHlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb3BhY2l0eSA9IG9wYWNpdHkgLSAwLjI7XHJcbiAgICAgICAgdGVtcFJhdGUtLTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gY29sb3JlZERhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRDb2xvcmVkRGF0YVByaW9yaXR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLXdyYXBwZXJcIiAqbmdJZj1cInR5cGUgPT09ICdsaW5lJ1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktdG90YWwtY291bnRcIiAqbmdJZj1cInNob3dUb3RhbENvdW50XCI+e3tnZXRUb3RhbENvdW50KCkudG9GaXhlZChmaXhlZCl9fTwvZGl2PlxyXG4gIDxkaXYgc3R5bGU9XCJmbGV4OiAxIDAgYXV0bztcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktdGl0bGVcIj57e3RpdGxlfX08L2Rpdj5cclxuICAgIDxkaXZcclxuICAgICAgKm5nRm9yPVwibGV0IGtwaSBvZiBnZXRDb2xvcmVkRGF0YSgpOyBpbmRleCBhcyBpXCJcclxuICAgICAgY2xhc3M9XCJjbWFjcy1rcGktbGluZVwiXHJcbiAgICAgIFtjbGFzcy5ib3JkZXItcmFkaXVzLWxlZnRdPVwiaSA9PT0gMFwiXHJcbiAgICAgIFtjbGFzcy5ib3JkZXItcmFkaXVzLXJpZ2h0XT1cImkgPT09IGdldENvbG9yZWREYXRhKCkubGVuZ2h0IC0gMVwiXHJcbiAgICAgIFtzdHlsZS53aWR0aC4lXT1cImdldFdpZHRoKGtwaS5jb3VudClcIlxyXG4gICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJrcGkuY29sb3JcIlxyXG4gICAgICBbc3R5bGUub3BhY2l0eV09XCJzYW5pdGl6ZVN0eWxlKGtwaS5vcGFjaXR5KVwiXHJcbiAgICAgID5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxlZ2VuZFwiPjwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJjbWFjcy1rcGktZG91Z2hudXQtY29udGFpbmVyXCIgKm5nSWY9XCJ0eXBlID09PSAnZG91Z2hudXQnXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1kb3VnaG51dC10aXRsZVwiPnt7dGl0bGV9fTwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktZG91Z2hudXQtd3JhcHBlclwiIFtzdHlsZS53aWR0aC5weF09XCJnZXRUb3RhbFdpZHRoKClcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktdG90YWwtY291bnQtd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mta3BpLWRvdWdobnV0LXRvdGFsLWNvdW50XCI+e3tnZXRUb3RhbENvdW50KCkudG9GaXhlZChmaXhlZCl9fTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aW1nICNjYW52YXNJbWcgY2xhc3M9XCJjbWFjcy1rcGktY2FudmFzLXRvaW1hZ2VcIi8+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1kb3VnaG51dC1sZWdlbmQtd3JhcHBlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxlZ2VuZFwiPjwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjbGVnZW5kPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiY21hY3Mta3BpLWxlZ2VuZC13cmFwcGVyXCJcclxuICAgICpuZ0Zvcj1cImxldCBrcGkgb2YgZ2V0Q29sb3JlZERhdGEoKTsgaW5kZXggYXMgaVwiXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1kaXZpZGVyXCJcclxuICAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwia3BpLmNvbG9yXCJcclxuICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwic2FuaXRpemVTdHlsZShrcGkub3BhY2l0eSlcIlxyXG4gICAgPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1jb3VudFwiPnt7a3BpLmNvdW50LnRvRml4ZWQoZml4ZWQpfX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1rcGktZGVzY3JpcHRpb25cIj57e2twaS5kZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==