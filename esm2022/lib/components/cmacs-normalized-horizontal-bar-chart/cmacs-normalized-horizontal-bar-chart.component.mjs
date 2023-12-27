import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/util.service";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/grid";
import * as i4 from "../cmacs-tooltip/tooltip";
const _c0 = ["legendContent"];
const _c1 = ["chartcanvas"];
function CmacsNormalizedHorizontalBarChartComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵlistener("click", function CmacsNormalizedHorizontalBarChartComponent_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.scrollRight()); });
    i0.ɵɵelement(1, "i", 10);
    i0.ɵɵelementEnd();
} }
function CmacsNormalizedHorizontalBarChartComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵelement(1, "span", 12);
    i0.ɵɵelementStart(2, "span", 13);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const l_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", ctx_r2.colorScheme.domain[i_r8]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(l_r7);
} }
function CmacsNormalizedHorizontalBarChartComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵlistener("click", function CmacsNormalizedHorizontalBarChartComponent_span_6_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.scrollLeft()); });
    i0.ɵɵelement(1, "i", 15);
    i0.ɵɵelementEnd();
} }
const _c2 = function (a0) { return { model: a0 }; };
function CmacsNormalizedHorizontalBarChartComponent_div_8_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 22);
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.chartTooltip)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c2, item_r11));
} }
function CmacsNormalizedHorizontalBarChartComponent_div_8_ng_template_7_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r11.tooltip_title, " ");
} }
function CmacsNormalizedHorizontalBarChartComponent_div_8_ng_template_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "span", 12);
    i0.ɵɵelementStart(2, "span", 13);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 27);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const label_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const item_r11 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", ctx_r20.colorScheme.domain[i_r23]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(label_r22);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r20.getSeriesValue(item_r11, label_r22));
} }
function CmacsNormalizedHorizontalBarChartComponent_div_8_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsNormalizedHorizontalBarChartComponent_div_8_ng_template_7_div_0_Template, 2, 1, "div", 23);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵtemplate(2, CmacsNormalizedHorizontalBarChartComponent_div_8_ng_template_7_div_2_Template, 6, 4, "div", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r17 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", item_r11.tooltip_title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r17.legend);
} }
function CmacsNormalizedHorizontalBarChartComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "canvas", 18, 19);
    i0.ɵɵtemplate(5, CmacsNormalizedHorizontalBarChartComponent_div_8_ng_template_5_Template, 1, 4, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(7, CmacsNormalizedHorizontalBarChartComponent_div_8_ng_template_7_Template, 3, 2, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const _r14 = i0.ɵɵreference(6);
    const _r16 = i0.ɵɵreference(8);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r11.name);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate2("id", "canvas-", ctx_r4.id, "-", i_r12, "");
    i0.ɵɵproperty("cmacsTooltipOverlayClassName", "cmacs-normalized-chart-tooltip")("cmacsTooltipTitle", ctx_r4.chartTooltip ? _r14 : _r16);
} }
export class CmacsNormalizedHorizontalBarChartComponent {
    constructor(renderer, elementRef, util) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.util = util;
        this.clickMenu = new EventEmitter();
        this.width = 275;
        this.height = 300;
        this.displayArrowBtns = true;
        // otpions
        this.colorScheme = {
            domain: ['#00CE7D', '#FFC634', '#F6503C']
        };
        this.id = util.uuidv4();
    }
    ngOnInit() {
        let temp = [];
        this.data.map(d => d.series.map(x => x.name)).forEach((x) => temp = [...temp, ...x]);
        this.legend = Array.from(new Set([...temp]));
    }
    ngOnChanges() {
        if (this.view && this.view.length === 2) {
            this.width = this.view[0];
            this.height = this.view[1] - 70;
            if (this.renderer) {
                this.resize();
            }
        }
        setTimeout(() => {
            for (let index = 0; index < this.data.length; index++) {
                const canvas = document.getElementById('canvas-' + this.id + '-' + index);
                if (canvas.getContext) {
                    //
                    const context = canvas.getContext('2d');
                    const val = this.view[0] - 146;
                    canvas.width = (val > 0) ? val : 0;
                    canvas.height = 20;
                    const total = this.data[index].series.map(s => s.value).reduce((a, b) => a + b, 0);
                    let move = 0;
                    //
                    const elems = this.data[index].series.sort((a, b) => this.legend.findIndex(y => y === a.name) - this.legend.findIndex(y => y === b.name));
                    for (let j = 0; j < elems.length; j++) {
                        // Reset the current path
                        context.beginPath();
                        context.moveTo(move, 0);
                        context.lineWidth = 15;
                        const val = elems[j].value;
                        if (val) {
                            move += val / total * canvas.width;
                            context.strokeStyle = this.colorScheme.domain[j];
                            context.lineTo(move - 5, 0);
                            context.stroke();
                        }
                    }
                }
            }
        }, 0);
        this.showArrowBtns();
    }
    resize() {
        const width = this.view[0] - 15;
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${width}px`);
    }
    scrollRight() {
        this.legendContent.nativeElement.scrollTo({ left: (this.legendContent.nativeElement.scrollLeft - 40), behavior: 'smooth' });
    }
    scrollLeft() {
        this.legendContent.nativeElement.scrollTo({ left: (this.legendContent.nativeElement.scrollLeft + 40), behavior: 'smooth' });
    }
    menuClick(type) {
        this.clickMenu.emit(type);
    }
    showArrowBtns() {
        if (this.legend) {
            const text = this.legend.map(i => i + 'space');
            const tsize = this.util.get_tex_size(text, '12px Roboto-Regular');
            this.displayArrowBtns = tsize.width > this.view[0] - 35;
        }
    }
    getSeriesValue(item, label) {
        const elem = item.series.find(e => e.name === label);
        return elem.value;
    }
    getDataTable() {
        return this.data;
    }
    getChartImage() {
        return this.canvas;
    }
    getLegend() {
        return this.legend;
    }
    static { this.ɵfac = function CmacsNormalizedHorizontalBarChartComponent_Factory(t) { return new (t || CmacsNormalizedHorizontalBarChartComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.UtilService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsNormalizedHorizontalBarChartComponent, selectors: [["cmacs-normalized-horizontal-bar-chart"]], viewQuery: function CmacsNormalizedHorizontalBarChartComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5, ElementRef);
            i0.ɵɵviewQuery(_c1, 5, ElementRef);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.legendContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvasRef = _t);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvas = _t);
        } }, inputs: { chartTooltip: "chartTooltip", data: "data", view: "view", colorScheme: "colorScheme" }, outputs: { clickMenu: "clickMenu" }, features: [i0.ɵɵNgOnChangesFeature], decls: 9, vars: 6, consts: [[1, "sd-content"], ["nz-row", "", 1, "legend-row"], ["class", "legend-left-icon", 3, "click", 4, "ngIf"], [1, "legend-data"], ["legendContent", ""], ["class", "legend-column", 4, "ngFor", "ngForOf"], ["class", "legend-right-icon", 3, "click", 4, "ngIf"], ["nz-row", "", 1, "chart-content"], ["nz-row", "", "class", "chart-content-row", 4, "ngFor", "ngForOf"], [1, "legend-left-icon", 3, "click"], [1, "iconArrowLarge-Chevron-Left"], [1, "legend-column"], [1, "legend-bar"], [1, "legend-text"], [1, "legend-right-icon", 3, "click"], [1, "iconArrowLarge-Chevron-Right"], ["nz-row", "", 1, "chart-content-row"], ["nz-col", "", 1, "chart-content-text"], ["cmacs-tooltip", "", 1, "chart-content-canvas", 2, "display", "inline-block", "margin-top", "4px", 3, "id", "cmacsTooltipOverlayClassName", "cmacsTooltipTitle"], ["chartcanvas", ""], ["chartTemplate", ""], ["chartCustomTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cmacs-normalized-horizontal-bar-chart-tooltip-title", 4, "ngIf"], [1, "cmacs-normalized-horizontal-bar-chart-tooltip-wrapper"], [4, "ngFor", "ngForOf"], [1, "cmacs-normalized-horizontal-bar-chart-tooltip-title"], [1, "legend-value"]], template: function CmacsNormalizedHorizontalBarChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, CmacsNormalizedHorizontalBarChartComponent_span_2_Template, 2, 0, "span", 2);
            i0.ɵɵelementStart(3, "div", 3, 4);
            i0.ɵɵtemplate(5, CmacsNormalizedHorizontalBarChartComponent_span_5_Template, 4, 3, "span", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, CmacsNormalizedHorizontalBarChartComponent_span_6_Template, 2, 0, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 7);
            i0.ɵɵtemplate(8, CmacsNormalizedHorizontalBarChartComponent_div_8_Template, 9, 5, "div", 8);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.displayArrowBtns);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.legend);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.displayArrowBtns);
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("height", ctx.height, "px");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.data);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.NzColDirective, i3.NzRowDirective, i4.CmacsTooltipDirective], styles: ["[_nghost-%COMP%]{display:block}.legend-data[_ngcontent-%COMP%]{display:flex;overflow:hidden;margin-right:28px;margin-left:25px}.legend-column[_ngcontent-%COMP%]{display:table-cell;font-family:Roboto-Regular;font-size:12px;color:#656c79;white-space:nowrap;padding-top:8px}.legend-left-icon[_ngcontent-%COMP%], .legend-right-icon[_ngcontent-%COMP%]{top:5px;font-size:19px;padding-left:5px;padding-right:5px;cursor:pointer}.legend-left-icon[_ngcontent-%COMP%]{position:absolute;z-index:2;left:0}.legend-right-icon[_ngcontent-%COMP%]{position:absolute;right:0}.legend-text[_ngcontent-%COMP%]{padding-left:6px;padding-right:20px}.legend-column[_ngcontent-%COMP%]:last-child   .legend-text[_ngcontent-%COMP%]{padding-right:0}.legend-bar[_ngcontent-%COMP%]{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row[_ngcontent-%COMP%]{width:100%;margin-bottom:30px;display:flex;place-content:flex-end}.chart-content[_ngcontent-%COMP%]{overflow-x:auto}.chart-content-row[_ngcontent-%COMP%]{margin-bottom:15px;font-family:Roboto-Regular;font-size:12px;letter-spacing:.12px;color:#656c79;width:100%;height:28px;display:block}.chart-content-text[_ngcontent-%COMP%]{width:110px;display:inline-block;vertical-align:top;margin-right:5px}  .cmacs-normalized-chart-tooltip .ant-tooltip-content,   .cmacs-normalized-chart-tooltip .ant-tooltip-inner{background-color:#0000008c!important}  .cmacs-normalized-chart-tooltip.ant-tooltip-placement-top .ant-tooltip-arrow{border-top-color:#000000b3!important;opacity:1!important}.legend-value[_ngcontent-%COMP%]{float:right}.cmacs-normalized-horizontal-bar-chart-tooltip-wrapper[_ngcontent-%COMP%]{font-family:Roboto-Regular;font-size:13px}.cmacs-normalized-horizontal-bar-chart-tooltip-wrapper[_ngcontent-%COMP%]   .legend-text[_ngcontent-%COMP%]{color:#bec4cd}.cmacs-normalized-horizontal-bar-chart-tooltip-title[_ngcontent-%COMP%]{color:#bec4cd;font-size:13px;border-bottom:1px solid #bec4cd;padding:4px 0;margin-bottom:7px}  .sd-content .ant-row{position:relative;height:auto;margin-right:0;margin-left:0;zoom:1;display:block;box-sizing:border-box}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsNormalizedHorizontalBarChartComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-normalized-horizontal-bar-chart', template: "<div class=\"sd-content\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <span class=\"legend-left-icon\" (click)=\"scrollRight()\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Left\"></i>\r\n    </span>\r\n    <div #legendContent class=\"legend-data\">\r\n      <span class=\"legend-column\" *ngFor=\"let l of legend; let i = index;\">\r\n        <span [style.background-color]=\"colorScheme.domain[i]\" class=\"legend-bar\"> </span>\r\n        <span class=\"legend-text\">{{l}}</span>\r\n      </span>\r\n    </div>\r\n    <span (click)=\"scrollLeft()\" class=\"legend-right-icon\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Right\"></i>\r\n    </span>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"chart-content\" [style.height.px]=\"height\">\r\n    <div *ngFor=\"let item of data; let i = index\" nz-row class=\"chart-content-row\">\r\n      <div nz-col class=\"chart-content-text\">{{item.name}}</div>\r\n      <canvas style=\"display: inline-block; margin-top: 4px;\"\r\n              id=\"canvas-{{id}}-{{i}}\"\r\n              #chartcanvas\r\n              cmacs-tooltip\r\n              [cmacsTooltipOverlayClassName]=\"'cmacs-normalized-chart-tooltip'\"\r\n              [cmacsTooltipTitle]=\"chartTooltip ? chartTemplate : chartCustomTemplate\"\r\n              class=\"chart-content-canvas\">\r\n        <ng-template #chartTemplate>\r\n           <ng-container [ngTemplateOutlet]=\"chartTooltip\"\r\n                         [ngTemplateOutletContext]=\"{model: item}\"\r\n           ></ng-container>\r\n        </ng-template>\r\n\r\n        <ng-template #chartCustomTemplate>\r\n          <div *ngIf=\"item.tooltip_title\" class=\"cmacs-normalized-horizontal-bar-chart-tooltip-title\">\r\n            {{item.tooltip_title}}\r\n          </div>\r\n          <div class=\"cmacs-normalized-horizontal-bar-chart-tooltip-wrapper\">\r\n            <div *ngFor=\"let label of legend; index as i;\">\r\n              <span class=\"legend-bar\" [style.backgroundColor]=\"colorScheme.domain[i]\"></span>\r\n              <span class=\"legend-text\">{{label}}</span>\r\n              <span class=\"legend-value\">{{getSeriesValue(item, label)}}</span>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </canvas>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [":host(){display:block}.legend-data{display:flex;overflow:hidden;margin-right:28px;margin-left:25px}.legend-column{display:table-cell;font-family:Roboto-Regular;font-size:12px;color:#656c79;white-space:nowrap;padding-top:8px}.legend-left-icon,.legend-right-icon{top:5px;font-size:19px;padding-left:5px;padding-right:5px;cursor:pointer}.legend-left-icon{position:absolute;z-index:2;left:0}.legend-right-icon{position:absolute;right:0}.legend-text{padding-left:6px;padding-right:20px}.legend-column:last-child .legend-text{padding-right:0}.legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%;margin-bottom:30px;display:flex;place-content:flex-end}.chart-content{overflow-x:auto}.chart-content-row{margin-bottom:15px;font-family:Roboto-Regular;font-size:12px;letter-spacing:.12px;color:#656c79;width:100%;height:28px;display:block}.chart-content-text{width:110px;display:inline-block;vertical-align:top;margin-right:5px}::ng-deep .cmacs-normalized-chart-tooltip .ant-tooltip-content,::ng-deep .cmacs-normalized-chart-tooltip .ant-tooltip-inner{background-color:#0000008c!important}::ng-deep .cmacs-normalized-chart-tooltip.ant-tooltip-placement-top .ant-tooltip-arrow{border-top-color:#000000b3!important;opacity:1!important}.legend-value{float:right}.cmacs-normalized-horizontal-bar-chart-tooltip-wrapper{font-family:Roboto-Regular;font-size:13px}.cmacs-normalized-horizontal-bar-chart-tooltip-wrapper .legend-text{color:#bec4cd}.cmacs-normalized-horizontal-bar-chart-tooltip-title{color:#bec4cd;font-size:13px;border-bottom:1px solid #bec4cd;padding:4px 0;margin-bottom:7px}::ng-deep .sd-content .ant-row{position:relative;height:auto;margin-right:0;margin-left:0;zoom:1;display:block;box-sizing:border-box}\n"] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.UtilService }]; }, { clickMenu: [{
            type: Output
        }], legendContent: [{
            type: ViewChild,
            args: ['legendContent', { read: ElementRef, static: false }]
        }], canvasRef: [{
            type: ViewChildren,
            args: ['chartcanvas', { read: ElementRef }]
        }], canvas: [{
            type: ViewChildren,
            args: ['chartcanvas']
        }], chartTooltip: [{
            type: Input
        }], data: [{
            type: Input
        }], view: [{
            type: Input
        }], colorScheme: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWNoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWNoYXJ0L2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWlCLE1BQU0sRUFBRSxZQUFZLEVBQXdCLFVBQVUsRUFBRSxTQUFTLEVBQWUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0lDRzdLLCtCQUFnRjtJQUFqRCxzTEFBUyxlQUFBLG9CQUFhLENBQUEsSUFBQztJQUNwRCx3QkFBMkM7SUFDN0MsaUJBQU87OztJQUVMLGdDQUFxRTtJQUNuRSwyQkFBa0Y7SUFDbEYsZ0NBQTBCO0lBQUEsWUFBSztJQUFBLGlCQUFPLEVBQUE7Ozs7O0lBRGhDLGVBQWdEO0lBQWhELG1FQUFnRDtJQUM1QixlQUFLO0lBQUwsMEJBQUs7Ozs7SUFHbkMsZ0NBQWdGO0lBQTFFLHVMQUFTLGVBQUEsbUJBQVksQ0FBQSxJQUFDO0lBQzFCLHdCQUE0QztJQUM5QyxpQkFBTzs7OztJQWNBLDRCQUVnQjs7OztJQUZGLHVEQUFpQyxpRUFBQTs7O0lBTWhELCtCQUE0RjtJQUMxRixZQUNGO0lBQUEsaUJBQU07OztJQURK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Q2RqRCw4QkFBd0IsYUFBQTtZQUdwQiw2RkFFTztZQUNQLGlDQUF3QztZQUN0Qyw2RkFHTztZQUNULGlCQUFNO1lBQ04sNkZBRU87WUFDVCxpQkFBTTtZQUVOLDhCQUE2RDtZQUMzRCwyRkE0Qk07WUFDUixpQkFBTSxFQUFBOztZQTVDb0QsZUFBc0I7WUFBdEIsMkNBQXNCO1lBSWxDLGVBQVc7WUFBWCxvQ0FBVztZQUtDLGVBQXNCO1lBQXRCLDJDQUFzQjtZQUs5QyxlQUEwQjtZQUExQiwwQ0FBMEI7WUFDcEMsZUFBUztZQUFULGtDQUFTOzs7dUZEUnRCLDBDQUEwQztjQUx0RCxTQUFTOzJCQUNFLHVDQUF1QzsrR0FNdkMsU0FBUztrQkFBbEIsTUFBTTtZQUNpRSxhQUFhO2tCQUFwRixTQUFTO21CQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNaLFNBQVM7a0JBQTNELFlBQVk7bUJBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNwQixNQUFNO2tCQUFsQyxZQUFZO21CQUFDLGFBQWE7WUFDbEIsWUFBWTtrQkFBcEIsS0FBSztZQUdHLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQU9HLFdBQVc7a0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2lkZ2V0QWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvd2lkZ2V0LWFjdGlvbi10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBDaGFydERhdGFNdWx0aSB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9jaGFydC1kYXRhLWludGVyZmFjZSc7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91dGlsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTm9ybWFsaXplZEhvcml6b250YWxCYXJDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQE91dHB1dCgpIGNsaWNrTWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBWaWV3Q2hpbGQoJ2xlZ2VuZENvbnRlbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSkgcHVibGljIGxlZ2VuZENvbnRlbnQ6IEVsZW1lbnRSZWY8YW55PjtcclxuICBAVmlld0NoaWxkcmVuKCdjaGFydGNhbnZhcycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBjYW52YXNSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZHJlbignY2hhcnRjYW52YXMnKSBjYW52YXMhOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XHJcbiAgQElucHV0KCkgY2hhcnRUb29sdGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XHJcblxyXG4gIC8vIGNvbnRlbnRcclxuICBASW5wdXQoKSBkYXRhITogQ2hhcnREYXRhTXVsdGlbXTtcclxuICBASW5wdXQoKSB2aWV3ITogbnVtYmVyW107XHJcbiAgd2lkdGggPSAyNzU7XHJcbiAgaGVpZ2h0ID0gMzAwO1xyXG5cclxuICBkaXNwbGF5QXJyb3dCdG5zID0gdHJ1ZTtcclxuXHJcbiAgLy8gb3RwaW9uc1xyXG4gIEBJbnB1dCgpIGNvbG9yU2NoZW1lID0ge1xyXG4gICAgZG9tYWluOiBbJyMwMENFN0QnLCAnI0ZGQzYzNCcsICcjRjY1MDNDJ11cclxuICB9O1xyXG5cclxuICBpZDtcclxuXHJcbiAgbGVnZW5kITogc3RyaW5nW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB1dGlsOiBVdGlsU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5pZCA9IHV0aWwudXVpZHY0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGxldCB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgdGhpcy5kYXRhLm1hcChkID0+IGQuc2VyaWVzLm1hcCh4ID0+IHgubmFtZSkpLmZvckVhY2goKHgpID0+IHRlbXAgPSBbLi4udGVtcCwgLi4ueF0pO1xyXG4gICAgdGhpcy5sZWdlbmQgID0gQXJyYXkuZnJvbShuZXcgU2V0KFsuLi50ZW1wXSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMudmlld1swXTtcclxuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnZpZXdbMV0gLSA3MDtcclxuXHJcbiAgICAgIGlmKHRoaXMucmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcy0nICsgdGhpcy5pZCArICctJyArIGluZGV4KSAgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgaWYgKGNhbnZhcy5nZXRDb250ZXh0KSB7XHJcbiAgICAgICAgICAvL1xyXG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgY29uc3QgdmFsID0gdGhpcy52aWV3WzBdIC0gMTQ2O1xyXG4gICAgICAgICAgY2FudmFzLndpZHRoID0gKHZhbCA+IDApID8gdmFsIDogMDtcclxuICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAyMDtcclxuICAgICAgICAgIGNvbnN0IHRvdGFsID0gdGhpcy5kYXRhW2luZGV4XS5zZXJpZXMubWFwKHMgPT4gcy52YWx1ZSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgICAgICAgICBsZXQgbW92ZSA9IDA7XHJcbiAgICAgICAgICAvL1xyXG4gICAgICAgICAgY29uc3QgZWxlbXMgPSB0aGlzLmRhdGFbaW5kZXhdLnNlcmllcy5zb3J0KChhLCBiKSA9PlxyXG4gICAgICAgICAgICB0aGlzLmxlZ2VuZC5maW5kSW5kZXgoeSA9PiB5ID09PSBhLm5hbWUpIC0gdGhpcy5sZWdlbmQuZmluZEluZGV4KHkgPT4geSA9PT0gYi5uYW1lKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZWxlbXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgcGF0aFxyXG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhtb3ZlLCAwKTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxNTtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gZWxlbXNbal0udmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh2YWwpIHtcclxuICAgICAgICAgICAgICBtb3ZlICs9IHZhbCAvIHRvdGFsICogY2FudmFzLndpZHRoO1xyXG4gICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yU2NoZW1lLmRvbWFpbltqXTtcclxuICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhtb3ZlIC0gNSwgMCk7XHJcbiAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgdGhpcy5zaG93QXJyb3dCdG5zKCk7XHJcbiAgfVxyXG5cclxuICByZXNpemUoKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMudmlld1swXSAtIDE1O1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7d2lkdGh9cHhgKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFJpZ2h0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiAodGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCAtIDQwKSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsTGVmdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvKHsgbGVmdDogKHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgKyA0MCksIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG5cclxuICBtZW51Q2xpY2sodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGlja01lbnUuZW1pdCh0eXBlKTtcclxuICB9XHJcblxyXG4gIHNob3dBcnJvd0J0bnMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5sZWdlbmQpIHtcclxuICAgICAgY29uc3QgdGV4dCA9IHRoaXMubGVnZW5kLm1hcChpID0+IGkgKyAnc3BhY2UnKTtcclxuICAgICAgY29uc3QgdHNpemUgPSB0aGlzLnV0aWwuZ2V0X3RleF9zaXplKHRleHQsICcxMnB4IFJvYm90by1SZWd1bGFyJyk7XHJcbiAgICAgIHRoaXMuZGlzcGxheUFycm93QnRucyA9IHRzaXplLndpZHRoID4gdGhpcy52aWV3WzBdIC0gMzU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTZXJpZXNWYWx1ZShpdGVtLCBsYWJlbCkge1xyXG4gICAgY29uc3QgZWxlbSA9IGl0ZW0uc2VyaWVzLmZpbmQoZSA9PiBlLm5hbWUgPT09IGxhYmVsKTtcclxuICAgIHJldHVybiBlbGVtLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERhdGFUYWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2hhcnRJbWFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNhbnZhcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMZWdlbmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sZWdlbmQ7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJzZC1jb250ZW50XCI+XHJcbiAgPCEtLSBMZWdlbmQgLS0+XHJcbiAgPGRpdiBuei1yb3cgY2xhc3M9XCJsZWdlbmQtcm93XCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC1sZWZ0LWljb25cIiAoY2xpY2spPVwic2Nyb2xsUmlnaHQoKVwiICpuZ0lmPVwiZGlzcGxheUFycm93QnRuc1wiPlxyXG4gICAgICA8aSBjbGFzcz1cImljb25BcnJvd0xhcmdlLUNoZXZyb24tTGVmdFwiPjwvaT5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxkaXYgI2xlZ2VuZENvbnRlbnQgY2xhc3M9XCJsZWdlbmQtZGF0YVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC1jb2x1bW5cIiAqbmdGb3I9XCJsZXQgbCBvZiBsZWdlbmQ7IGxldCBpID0gaW5kZXg7XCI+XHJcbiAgICAgICAgPHNwYW4gW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sb3JTY2hlbWUuZG9tYWluW2ldXCIgY2xhc3M9XCJsZWdlbmQtYmFyXCI+IDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC10ZXh0XCI+e3tsfX08L3NwYW4+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHNwYW4gKGNsaWNrKT1cInNjcm9sbExlZnQoKVwiIGNsYXNzPVwibGVnZW5kLXJpZ2h0LWljb25cIiAqbmdJZj1cImRpc3BsYXlBcnJvd0J0bnNcIj5cclxuICAgICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1DaGV2cm9uLVJpZ2h0XCI+PC9pPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gQ2hhcnQgLS0+XHJcbiAgPGRpdiBuei1yb3cgY2xhc3M9XCJjaGFydC1jb250ZW50XCIgW3N0eWxlLmhlaWdodC5weF09XCJoZWlnaHRcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YTsgbGV0IGkgPSBpbmRleFwiIG56LXJvdyBjbGFzcz1cImNoYXJ0LWNvbnRlbnQtcm93XCI+XHJcbiAgICAgIDxkaXYgbnotY29sIGNsYXNzPVwiY2hhcnQtY29udGVudC10ZXh0XCI+e3tpdGVtLm5hbWV9fTwvZGl2PlxyXG4gICAgICA8Y2FudmFzIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW4tdG9wOiA0cHg7XCJcclxuICAgICAgICAgICAgICBpZD1cImNhbnZhcy17e2lkfX0te3tpfX1cIlxyXG4gICAgICAgICAgICAgICNjaGFydGNhbnZhc1xyXG4gICAgICAgICAgICAgIGNtYWNzLXRvb2x0aXBcclxuICAgICAgICAgICAgICBbY21hY3NUb29sdGlwT3ZlcmxheUNsYXNzTmFtZV09XCInY21hY3Mtbm9ybWFsaXplZC1jaGFydC10b29sdGlwJ1wiXHJcbiAgICAgICAgICAgICAgW2NtYWNzVG9vbHRpcFRpdGxlXT1cImNoYXJ0VG9vbHRpcCA/IGNoYXJ0VGVtcGxhdGUgOiBjaGFydEN1c3RvbVRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImNoYXJ0LWNvbnRlbnQtY2FudmFzXCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNjaGFydFRlbXBsYXRlPlxyXG4gICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2hhcnRUb29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7bW9kZWw6IGl0ZW19XCJcclxuICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNjaGFydEN1c3RvbVRlbXBsYXRlPlxyXG4gICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udG9vbHRpcF90aXRsZVwiIGNsYXNzPVwiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC10b29sdGlwLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIHt7aXRlbS50b29sdGlwX3RpdGxlfX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQtdG9vbHRpcC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGxhYmVsIG9mIGxlZ2VuZDsgaW5kZXggYXMgaTtcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC1iYXJcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImNvbG9yU2NoZW1lLmRvbWFpbltpXVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC10ZXh0XCI+e3tsYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGVnZW5kLXZhbHVlXCI+e3tnZXRTZXJpZXNWYWx1ZShpdGVtLCBsYWJlbCl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2NhbnZhcz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19