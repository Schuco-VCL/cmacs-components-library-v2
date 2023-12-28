import { Component, ViewChild, TemplateRef, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/util.service";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/skeleton";
import * as i4 from "ng-zorro-antd/grid";
import * as i5 from "../cmacs-compact-table/cmacs-compact-table.component";
const _c0 = ["columnTemplate"];
const _c1 = ["chartcanvas"];
const _c2 = ["legendContent"];
function CmacsKpiGroupComponent_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵlistener("click", function CmacsKpiGroupComponent_div_0_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.scrollRight()); });
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵelementEnd();
} }
function CmacsKpiGroupComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵlistener("click", function CmacsKpiGroupComponent_div_0_span_5_Template_span_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r15); const item_r13 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.changeData(item_r13.key)); });
    i0.ɵɵelement(1, "span", 18);
    i0.ɵɵelementStart(2, "span", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", item_r13.color);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r13.name);
} }
function CmacsKpiGroupComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵlistener("click", function CmacsKpiGroupComponent_div_0_span_6_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.scrollLeft()); });
    i0.ɵɵelement(1, "i", 21);
    i0.ɵɵelementEnd();
} }
function CmacsKpiGroupComponent_div_0_cmacs_compact_table_11_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-compact-table", 22);
    i0.ɵɵlistener("configChange", function CmacsKpiGroupComponent_div_0_cmacs_compact_table_11_Template_cmacs_compact_table_configChange_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r18.configurationExpandableRows = $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", ctx_r10.dataTable)("config", ctx_r10.configurationExpandableRows)("indentSize", 40)("logs", true)("expandable", true)("scroll", ctx_r10.scroll)("frontPagination", false)("showPagination", false);
} }
function CmacsKpiGroupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4);
    i0.ɵɵtemplate(2, CmacsKpiGroupComponent_div_0_span_2_Template, 2, 0, "span", 5);
    i0.ɵɵelementStart(3, "div", 6, 7);
    i0.ɵɵtemplate(5, CmacsKpiGroupComponent_div_0_span_5_Template, 4, 3, "span", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CmacsKpiGroupComponent_div_0_span_6_Template, 2, 0, "span", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 10);
    i0.ɵɵelement(8, "canvas", 11, 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 13);
    i0.ɵɵtemplate(11, CmacsKpiGroupComponent_div_0_cmacs_compact_table_11_Template, 1, 8, "cmacs-compact-table", 14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.displayArrowBtns);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.data);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.displayArrowBtns);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", !ctx_r0.loading && ctx_r0.dataTable)("ngIfElse", _r3);
} }
function CmacsKpiGroupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 23);
} if (rf & 2) {
    const color_r20 = ctx.color;
    i0.ɵɵstyleProp("background-color", color_r20);
} }
const _c3 = function () { return { rows: 8 }; };
function CmacsKpiGroupComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-skeleton", 24);
} if (rf & 2) {
    i0.ɵɵproperty("nzActive", true)("nzParagraph", i0.ɵɵpureFunction0(2, _c3));
} }
export class CmacsKpiGroupComponent {
    constructor(
    //
    renderer, elementRef, utilService
    //
    ) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.utilService = utilService;
        this.clickMenu = new EventEmitter();
        // container
        this.headerText = '';
        this.footerText = '';
        this.footerValue = '';
        this.columnsHeader = [];
        this.displayArrowBtns = true;
        // chart
        this.chartWidth = 104;
        this.fontChartNumber = 20;
        this.col2 = 150;
        this.col3 = 70;
        this.minWidth = 300;
        this.showChart = false;
        this.scrollY = 200;
        this.p = 1;
        this.scroll = { x: '300px', y: this.scrollY + 'px' };
        this.loading = true;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.setScroll();
        //
        this.p = 1;
        if (this.view && this.view.length === 2) {
            this.p = this.view[0] > this.minWidth ? this.view[0] / this.minWidth : 1;
            if (this.renderer) {
                this.resize();
            }
        }
        //
        this.showChart = false;
        setTimeout(() => {
            if (this.data.length > 0) {
                this.selectedItem = this.data[0].key;
            }
            this.drawCanvas();
            this.setConfiguration();
            this.setData();
        }, 0);
        this.showChart = true;
        this.showArrowBtns();
    }
    ngAfterViewInit() {
        this.resize();
        this.showArrowBtns();
    }
    resize() {
        const width = this.view[0];
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${width}px`);
    }
    //
    setScroll() {
        let p = 1;
        if (this.view && this.view.length === 2) {
            p = this.view[1] * 0.5 > this.scrollY ? this.view[1] * 0.5 / this.scrollY : 1;
        }
        this.scroll = { x: '300px', y: this.scrollY * p + 'px' };
    }
    scrollRight() {
        this.legendContent.nativeElement.scrollTo({ left: (this.legendContent.nativeElement.scrollLeft - 40), behavior: 'smooth' });
    }
    scrollLeft() {
        this.legendContent.nativeElement.scrollTo({ left: (this.legendContent.nativeElement.scrollLeft + 40), behavior: 'smooth' });
    }
    drawCanvas() {
        const item = this.data.find(x => x.key === this.selectedItem);
        if (this.canvasRef && item) {
            const canvas = this.canvasRef.nativeElement;
            canvas.width = this.chartWidth * this.p;
            canvas.height = this.chartWidth * this.p;
            //
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // totals
            const totalShow = this.getTotalCateg(item.data);
            const total = this.data.map(x => this.getTotalCateg(x.data)).reduce((a, b) => a + b, 0);
            let startAngle = 0;
            // draw data
            for (const categ of this.data) {
                const totalG = this.getTotalCateg(categ.data);
                const sliceAngle = 2 * Math.PI * totalG / total;
                if (sliceAngle > 0) {
                    this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2) - ((this.selectedItem === categ.key) ? 10 * this.p : 6 * this.p), startAngle, startAngle + sliceAngle - 0.05, categ.color, (this.selectedItem === categ.key) ? 15 * this.p : 7 * this.p);
                    startAngle += sliceAngle;
                }
            }
            // draw value
            ctx.font = this.fontChartNumber * this.p + 'px Roboto-Regular ';
            ctx.fillStyle = '#3b3f46';
            ctx.textAlign = 'center';
            ctx.fillText('' + totalShow, canvas.width / 2, canvas.width / 2 + 5);
        }
    }
    drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color, lineWidth) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle - Math.PI / 2, endAngle - Math.PI / 2, false);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    getTotalCateg(data) {
        return data.map(x => x.value).reduce((a, b) => a + b, 0);
    }
    setConfiguration() {
        //
        this.configurationExpandableRows = {
            fields: [
                {
                    celdType: 3,
                    display: '',
                    property: 'color',
                    width: '60px',
                    minWidth: 60,
                    maxWidth: 120,
                    resizable: true
                },
                {
                    celdType: 0,
                    display: this.columnsHeader[0],
                    property: 'name',
                    editTemplate: 3,
                    width: this.col2 * this.p + 'px',
                    minWidth: this.col2 * this.p - 10,
                    maxWidth: this.col2 * this.p + 100,
                    resizable: true
                },
                {
                    celdType: 0,
                    display: this.columnsHeader[1],
                    property: 'value',
                    width: this.col3 * this.p + 'px',
                    minWidth: this.col3 * this.p - 10,
                    editTemplate: 2,
                    editable: false
                }
            ],
            fieldId: 'key',
            fieldRate: 'fav'
        };
    }
    setData() {
        this.loading = true;
        const temp = [];
        if (this.selectedItem) {
            const data = this.data.find(x => x.key === this.selectedItem);
            for (const item of data.data) {
                const newItem = {
                    key: item.key,
                    name: item.name,
                    color: {
                        ref: this.columnTemplate,
                        context: {
                            color: data.color
                        }
                    },
                    value: item.value,
                    children: this.getChildren(item.rows)
                };
                temp.push(newItem);
            }
            this.dataTable = temp;
        }
        setTimeout(() => {
            this.loading = false;
        }, 0);
    }
    getChildren(items) {
        const output = [];
        for (const item of items) {
            output.push({
                key: item.key,
                name: item.name,
                color: {},
                value: ''
            });
        }
        return output;
    }
    menuClick(type) {
        this.clickMenu.emit(type);
    }
    changeData(key) {
        this.selectedItem = key;
        this.setData();
        this.drawCanvas();
    }
    showArrowBtns() {
        const text = this.data.map(i => i.name + 'space');
        const tsize = this.utilService.get_tex_size(text, '12px Roboto-Regular');
        this.displayArrowBtns = tsize.width > this.view[0] - 15;
    }
    getDataTable() {
        return this.dataTable;
    }
    getConfiguration() {
        return this.configurationExpandableRows;
    }
    getChartImage() {
        return this.canvasRef.nativeElement.toDataURL('image/png');
    }
    static { this.ɵfac = function CmacsKpiGroupComponent_Factory(t) { return new (t || CmacsKpiGroupComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.UtilService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsKpiGroupComponent, selectors: [["cmacs-kpi-group"]], viewQuery: function CmacsKpiGroupComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5, TemplateRef);
            i0.ɵɵviewQuery(_c1, 5, ElementRef);
            i0.ɵɵviewQuery(_c2, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columnTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvasRef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.legendContent = _t.first);
        } }, inputs: { headerText: "headerText", footerText: "footerText", footerValue: "footerValue", view: "view", data: "data", columnsHeader: "columnsHeader" }, outputs: { clickMenu: "clickMenu" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 1, consts: [["class", "sd-content", 4, "ngIf"], ["columnTemplate", ""], ["elseBlock", ""], [1, "sd-content"], ["nz-row", "", 1, "legend-row"], ["class", "legend-left-icon", 3, "click", 4, "ngIf"], [1, "legend-data"], ["legendContent", ""], ["class", "legend-column", 3, "click", 4, "ngFor", "ngForOf"], ["class", "legend-right-icon", 3, "click", 4, "ngIf"], ["nz-row", "", 1, "chart-content"], [1, "chart-canvas"], ["chartcanvas", ""], ["nz-row", "", 1, "chart-data-table"], [3, "data", "config", "indentSize", "logs", "expandable", "scroll", "frontPagination", "showPagination", "configChange", 4, "ngIf", "ngIfElse"], [1, "legend-left-icon", 3, "click"], [1, "iconArrowLarge-Chevron-Left"], [1, "legend-column", 3, "click"], [1, "legend-bar"], [1, "legend-text"], [1, "legend-right-icon", 3, "click"], [1, "iconArrowLarge-Chevron-Right"], [3, "data", "config", "indentSize", "logs", "expandable", "scroll", "frontPagination", "showPagination", "configChange"], [1, "chart-dot"], [3, "nzActive", "nzParagraph"]], template: function CmacsKpiGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsKpiGroupComponent_div_0_Template, 12, 5, "div", 0);
            i0.ɵɵtemplate(1, CmacsKpiGroupComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, CmacsKpiGroupComponent_ng_template_3_Template, 1, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showChart);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.NzSkeletonComponent, i4.NzRowDirective, i5.CmacsCompactTableComponent], styles: [".legend-column[_ngcontent-%COMP%]{display:table-cell;float:left;font-family:Roboto-Regular;font-size:12px;color:#656c79;cursor:pointer;white-space:nowrap;padding-top:8px}.legend-left-icon[_ngcontent-%COMP%], .legend-right-icon[_ngcontent-%COMP%]{top:5px;font-size:19px;padding-left:5px;padding-right:5px;cursor:pointer}.legend-left-icon[_ngcontent-%COMP%]{position:absolute;z-index:2;left:0;top:0}.legend-right-icon[_ngcontent-%COMP%]{position:absolute;right:0;top:0}.legend-text[_ngcontent-%COMP%]{padding-left:6px;padding-right:20px}.legend-column[_ngcontent-%COMP%]:last-child   .legend-text[_ngcontent-%COMP%]{padding-right:0}.legend-bar[_ngcontent-%COMP%]{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row[_ngcontent-%COMP%]{width:100%;margin-bottom:32px;display:flex;place-content:flex-end}.legend-data[_ngcontent-%COMP%]{display:flex;overflow:hidden;margin-right:28px;text-align:right;margin-left:25px}.chart-content[_ngcontent-%COMP%]{text-align:center;margin-bottom:25px}.chart-dot[_ngcontent-%COMP%]{width:9px;height:9px;border-radius:5px;display:inline-block;margin-left:13px}.sd-content[_ngcontent-%COMP%]{position:relative}  .chart-data-table cmacs-compact-table .cmacs-compact-table-input-number-icon-view{display:none}  .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs,   .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font,   .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font:hover,   .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#fff!important}  .chart-data-table .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-header-logs)>td,   .chart-data-table .cmacs-compact-table .ant-table-header,   .chart-data-table .cmacs-compact-table .ant-table-thead>tr>th{background-color:#f6f7fb!important}.chart-content[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{margin:0 auto}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsKpiGroupComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-kpi-group', template: "<div class=\"sd-content\" *ngIf=\"showChart\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <span class=\"legend-left-icon\" (click)=\"scrollRight()\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Left\"></i>\r\n    </span>\r\n    <div #legendContent class=\"legend-data\">\r\n      <span class=\"legend-column\" *ngFor=\"let item of data\" (click)=\"changeData(item.key)\">\r\n        <span [style.background-color]=\"item.color\" class=\"legend-bar\"></span>\r\n        <span class=\"legend-text\">{{item.name}}</span>\r\n      </span>\r\n    </div>\r\n    <span (click)=\"scrollLeft()\" class=\"legend-right-icon\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Right\"></i>\r\n    </span>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"chart-content\">\r\n    <canvas #chartcanvas class=\"chart-canvas\"></canvas>\r\n  </div>\r\n  <div nz-row class=\"chart-data-table\">\r\n    <cmacs-compact-table *ngIf=\"!loading && dataTable; else elseBlock\" [data]=\"dataTable\"\r\n      [(config)]=\"configurationExpandableRows\" [indentSize]=\"40\" [logs]=\"true\" [expandable]=\"true\"\r\n      [scroll]=\"scroll\" [frontPagination]=\"false\" [showPagination]=\"false\"></cmacs-compact-table>\r\n  </div>\r\n</div>\r\n<ng-template #columnTemplate let-color=\"color\">\r\n  <div class=\"chart-dot\" [style.background-color]=\"color\"></div>\r\n</ng-template>\r\n\r\n<ng-template #elseBlock>\r\n  <nz-skeleton [nzActive]=\"true\" [nzParagraph]=\"{ rows: 8 }\"></nz-skeleton>\r\n</ng-template>", styles: [".legend-column{display:table-cell;float:left;font-family:Roboto-Regular;font-size:12px;color:#656c79;cursor:pointer;white-space:nowrap;padding-top:8px}.legend-left-icon,.legend-right-icon{top:5px;font-size:19px;padding-left:5px;padding-right:5px;cursor:pointer}.legend-left-icon{position:absolute;z-index:2;left:0;top:0}.legend-right-icon{position:absolute;right:0;top:0}.legend-text{padding-left:6px;padding-right:20px}.legend-column:last-child .legend-text{padding-right:0}.legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%;margin-bottom:32px;display:flex;place-content:flex-end}.legend-data{display:flex;overflow:hidden;margin-right:28px;text-align:right;margin-left:25px}.chart-content{text-align:center;margin-bottom:25px}.chart-dot{width:9px;height:9px;border-radius:5px;display:inline-block;margin-left:13px}.sd-content{position:relative}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-input-number-icon-view{display:none}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font:hover,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#fff!important}::ng-deep .chart-data-table .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-header-logs)>td,::ng-deep .chart-data-table .cmacs-compact-table .ant-table-header,::ng-deep .chart-data-table .cmacs-compact-table .ant-table-thead>tr>th{background-color:#f6f7fb!important}.chart-content canvas{margin:0 auto}\n"] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.UtilService }]; }, { columnTemplate: [{
            type: ViewChild,
            args: ['columnTemplate', { read: TemplateRef, static: false }]
        }], canvasRef: [{
            type: ViewChild,
            args: ['chartcanvas', { read: ElementRef, static: false }]
        }], legendContent: [{
            type: ViewChild,
            args: ['legendContent', { read: ElementRef, static: false }]
        }], clickMenu: [{
            type: Output
        }], headerText: [{
            type: Input
        }], footerText: [{
            type: Input
        }], footerValue: [{
            type: Input
        }], view: [{
            type: Input
        }], data: [{
            type: Input
        }], columnsHeader: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGktZ3JvdXAvY21hY3Mta3BpLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGktZ3JvdXAvY21hY3Mta3BpLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBaUIsVUFBVSxFQUEyQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0lDR3ZLLGdDQUFnRjtJQUFqRCwyS0FBUyxlQUFBLHFCQUFhLENBQUEsSUFBQztJQUNwRCx3QkFBMkM7SUFDN0MsaUJBQU87Ozs7SUFFTCxnQ0FBcUY7SUFBL0IsdU9BQVMsZUFBQSxnQ0FBb0IsQ0FBQSxJQUFDO0lBQ2xGLDJCQUFzRTtJQUN0RSxnQ0FBMEI7SUFBQSxZQUFhO0lBQUEsaUJBQU8sRUFBQTs7O0lBRHhDLGVBQXFDO0lBQXJDLGtEQUFxQztJQUNqQixlQUFhO0lBQWIsbUNBQWE7Ozs7SUFHM0MsZ0NBQWdGO0lBQTFFLDJLQUFTLGVBQUEsb0JBQVksQ0FBQSxJQUFDO0lBQzFCLHdCQUE0QztJQUM5QyxpQkFBTzs7OztJQU9QLCtDQUV1RTtJQURyRSw4UkFBd0M7SUFDNkIsaUJBQXNCOzs7SUFGMUIsd0NBQWtCLCtDQUFBLGtCQUFBLGNBQUEsb0JBQUEsMEJBQUEsMEJBQUEseUJBQUE7OztJQXJCekYsOEJBQTBDLGFBQUE7SUFHdEMsK0VBRU87SUFDUCxpQ0FBd0M7SUFDdEMsK0VBR087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RSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNGLFNBQVM7a0JBQXZFLFNBQVM7bUJBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ1csYUFBYTtrQkFBcEYsU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFFckQsU0FBUztrQkFBbEIsTUFBTTtZQUdFLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUlHLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2lkZ2V0QWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvd2lkZ2V0LWFjdGlvbi10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXRpbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mta3BpLWdyb3VwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mta3BpLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1rcGktZ3JvdXAuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0twaUdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBAVmlld0NoaWxkKCdjb2x1bW5UZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSkgY29sdW1uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHt9PjtcclxuICBAVmlld0NoaWxkKCdjaGFydGNhbnZhcycsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBjYW52YXNSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnbGVnZW5kQ29udGVudCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgbGVnZW5kQ29udGVudDogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vIGNvbnRhaW5lclxyXG4gIEBJbnB1dCgpIGhlYWRlclRleHQgPSAnJztcclxuICBASW5wdXQoKSBmb290ZXJUZXh0ID0gJyc7XHJcbiAgQElucHV0KCkgZm9vdGVyVmFsdWUgPSAnJztcclxuXHJcbiAgLy8gY29udGVudFxyXG4gIC8vIHdpZHRoLCBoZWlnaHRcclxuICBASW5wdXQoKSB2aWV3ITogbnVtYmVyW107XHJcbiAgQElucHV0KCkgZGF0YSE6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNvbHVtbnNIZWFkZXI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGRpc3BsYXlBcnJvd0J0bnMgPSB0cnVlO1xyXG5cclxuICAvLyBjaGFydFxyXG4gIGNoYXJ0V2lkdGggPSAxMDQ7XHJcbiAgZm9udENoYXJ0TnVtYmVyID0gMjA7XHJcbiAgY29sMiA9IDE1MDtcclxuICBjb2wzID0gNzA7XHJcbiAgbWluV2lkdGggPSAzMDA7XHJcbiAgc2hvd0NoYXJ0ID0gZmFsc2U7XHJcbiAgc2Nyb2xsWSA9IDIwMDtcclxuICBwID0gMTtcclxuICBzY3JvbGwgPSB7eDogJzMwMHB4JywgeTogdGhpcy5zY3JvbGxZICsgJ3B4JyB9O1xyXG5cclxuICBkYXRhVGFibGU6IGFueVtdO1xyXG4gIGNvbmZpZ3VyYXRpb25FeHBhbmRhYmxlUm93czogYW55O1xyXG4gIGxvYWRpbmcgPSB0cnVlO1xyXG4gIHNlbGVjdGVkSXRlbSE6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2VcclxuICAgIC8vXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuc2V0U2Nyb2xsKCk7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5wID0gMTtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLnAgPSB0aGlzLnZpZXdbMF0gPiB0aGlzLm1pbldpZHRoID8gdGhpcy52aWV3WzBdIC8gdGhpcy5taW5XaWR0aCA6IDE7XHJcbiAgICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIHRoaXMuc2hvd0NoYXJ0ID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLmRhdGFbMF0ua2V5O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZHJhd0NhbnZhcygpO1xyXG4gICAgICB0aGlzLnNldENvbmZpZ3VyYXRpb24oKTtcclxuICAgICAgdGhpcy5zZXREYXRhKCk7XHJcbiAgICB9LCAwKTtcclxuICAgIHRoaXMuc2hvd0NoYXJ0ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnNob3dBcnJvd0J0bnMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICB0aGlzLnNob3dBcnJvd0J0bnMoKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy52aWV3WzBdO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7d2lkdGh9cHhgKTtcclxuICB9XHJcbiAgLy9cclxuXHJcbiAgc2V0U2Nyb2xsKCkge1xyXG4gICAgbGV0IHAgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHAgPSB0aGlzLnZpZXdbMV0gKiAwLjUgPiB0aGlzLnNjcm9sbFkgPyB0aGlzLnZpZXdbMV0gKiAwLjUgLyB0aGlzLnNjcm9sbFkgOiAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zY3JvbGwgPSB7eDogJzMwMHB4JywgeTogdGhpcy5zY3JvbGxZICogcCArICdweCcgfTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFJpZ2h0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiAodGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCAtIDQwKSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsTGVmdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvKHsgbGVmdDogKHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgKyA0MCksIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG4gIGRyYXdDYW52YXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5kYXRhLmZpbmQoeCA9PiB4LmtleSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgaWYgKHRoaXMuY2FudmFzUmVmICYmIGl0ZW0pIHtcclxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAqIHRoaXMucDtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY2hhcnRXaWR0aCAqIHRoaXMucDtcclxuICAgICAgLy9cclxuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIHRvdGFsc1xyXG4gICAgICBjb25zdCB0b3RhbFNob3cgPSB0aGlzLmdldFRvdGFsQ2F0ZWcoaXRlbS5kYXRhKTtcclxuICAgICAgY29uc3QgdG90YWwgPSB0aGlzLmRhdGEubWFwKHggPT4gdGhpcy5nZXRUb3RhbENhdGVnKHguZGF0YSkpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gICAgICBsZXQgc3RhcnRBbmdsZSA9IDA7XHJcblxyXG4gICAgICAvLyBkcmF3IGRhdGFcclxuICAgICAgZm9yIChjb25zdCBjYXRlZyBvZiB0aGlzLmRhdGEpIHtcclxuICAgICAgICBjb25zdCB0b3RhbEcgPSAgdGhpcy5nZXRUb3RhbENhdGVnKGNhdGVnLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHNsaWNlQW5nbGUgPSAyICogTWF0aC5QSSAqIHRvdGFsRyAvIHRvdGFsO1xyXG4gICAgICAgIGlmIChzbGljZUFuZ2xlID4gMCApIHtcclxuICAgICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMikgLSAoKHRoaXMuc2VsZWN0ZWRJdGVtID09PSBjYXRlZy5rZXkpID8gMTAgKiB0aGlzLnAgOiA2ICogdGhpcy5wKSxcclxuICAgICAgICAgICAgc3RhcnRBbmdsZSxcclxuICAgICAgICAgICAgc3RhcnRBbmdsZSArIHNsaWNlQW5nbGUgLSAwLjA1LFxyXG4gICAgICAgICAgICBjYXRlZy5jb2xvcixcclxuICAgICAgICAgICAgKHRoaXMuc2VsZWN0ZWRJdGVtID09PSBjYXRlZy5rZXkpID8gMTUgKiB0aGlzLnAgOiA3ICogdGhpcy5wXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc3RhcnRBbmdsZSArPSBzbGljZUFuZ2xlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBkcmF3IHZhbHVlXHJcbiAgICAgIGN0eC5mb250ID0gdGhpcy5mb250Q2hhcnROdW1iZXIgKiB0aGlzLnAgKyAncHggUm9ib3RvLVJlZ3VsYXIgJztcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjM2IzZjQ2JztcclxuICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICBjdHguZmlsbFRleHQoJycgKyB0b3RhbFNob3csIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy53aWR0aCAvIDIgKyA1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdQaWVTbGljZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIsIGNvbG9yOiBhbnksIGxpbmVXaWR0aDogbnVtYmVyICkge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUgLSBNYXRoLlBJIC8gMiwgZW5kQW5nbGUgLSBNYXRoLlBJIC8gMiwgZmFsc2UpO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG90YWxDYXRlZyhkYXRhOiBhbnlbXSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZGF0YS5tYXAoeCA9PiB4LnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICB9XHJcblxyXG4gIHNldENvbmZpZ3VyYXRpb24oKTogdm9pZCB7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uRXhwYW5kYWJsZVJvd3MgPSB7XHJcbiAgICAgIGZpZWxkczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAzLFxyXG4gICAgICAgICAgZGlzcGxheTogJycsXHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ2NvbG9yJyxcclxuICAgICAgICAgIHdpZHRoOiAnNjBweCcsXHJcbiAgICAgICAgICBtaW5XaWR0aDogNjAsXHJcbiAgICAgICAgICBtYXhXaWR0aDogMTIwLFxyXG4gICAgICAgICAgcmVzaXphYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMCxcclxuICAgICAgICAgIGRpc3BsYXk6IHRoaXMuY29sdW1uc0hlYWRlclswXSxcclxuICAgICAgICAgIHByb3BlcnR5OiAnbmFtZScsXHJcbiAgICAgICAgICBlZGl0VGVtcGxhdGU6IDMsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5jb2wyICogdGhpcy5wICsgJ3B4JyxcclxuICAgICAgICAgIG1pbldpZHRoOiB0aGlzLmNvbDIgKiB0aGlzLnAgLSAxMCxcclxuICAgICAgICAgIG1heFdpZHRoOiB0aGlzLmNvbDIgKiB0aGlzLnAgKyAxMDAsXHJcbiAgICAgICAgICByZXNpemFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAwLFxyXG4gICAgICAgICAgZGlzcGxheTogdGhpcy5jb2x1bW5zSGVhZGVyWzFdLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICd2YWx1ZScsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5jb2wzICogdGhpcy5wICsgJ3B4JyxcclxuICAgICAgICAgIG1pbldpZHRoOiB0aGlzLmNvbDMgKiB0aGlzLnAgLSAxMCxcclxuICAgICAgICAgIGVkaXRUZW1wbGF0ZTogMixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgZmllbGRJZDogJ2tleScsXHJcbiAgICAgIGZpZWxkUmF0ZTogJ2ZhdidcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXREYXRhKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnN0IHRlbXA6IGFueVtdID0gW107XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5maW5kKHggPT4geC5rZXkgPT09IHRoaXMuc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEuZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7XHJcbiAgICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgY29sb3I6ICB7XHJcbiAgICAgICAgICAgIHJlZjogdGhpcy5jb2x1bW5UZW1wbGF0ZSxcclxuICAgICAgICAgICAgY29udGV4dDoge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBkYXRhLmNvbG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLmdldENoaWxkcmVuKGl0ZW0ucm93cylcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRlbXAucHVzaChuZXdJdGVtKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhdGFUYWJsZSA9IHRlbXA7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgZ2V0Q2hpbGRyZW4oaXRlbXM6IGFueVtdKTogYW55W10ge1xyXG4gICAgY29uc3Qgb3V0cHV0OiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgIG91dHB1dC5wdXNoKHtcclxuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgICBjb2xvcjoge30sXHJcbiAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxuICB9XHJcblxyXG4gIG1lbnVDbGljayh0eXBlOiBXaWRnZXRBY3Rpb25UeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrTWVudS5lbWl0KHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRGF0YShrZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBrZXk7XHJcbiAgICB0aGlzLnNldERhdGEoKTtcclxuICAgIHRoaXMuZHJhd0NhbnZhcygpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0Fycm93QnRucygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRleHQgPSB0aGlzLmRhdGEubWFwKGkgPT4gaS5uYW1lICsgJ3NwYWNlJyk7XHJcbiAgICBjb25zdCB0c2l6ZSA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0X3RleF9zaXplKHRleHQsICcxMnB4IFJvYm90by1SZWd1bGFyJyk7XHJcbiAgICB0aGlzLmRpc3BsYXlBcnJvd0J0bnMgPSB0c2l6ZS53aWR0aCA+IHRoaXMudmlld1swXSAtIDE1O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERhdGFUYWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb25maWd1cmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbkV4cGFuZGFibGVSb3dzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENoYXJ0SW1hZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudC50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInNkLWNvbnRlbnRcIiAqbmdJZj1cInNob3dDaGFydFwiPlxyXG4gIDwhLS0gTGVnZW5kIC0tPlxyXG4gIDxkaXYgbnotcm93IGNsYXNzPVwibGVnZW5kLXJvd1wiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJsZWdlbmQtbGVmdC1pY29uXCIgKGNsaWNrKT1cInNjcm9sbFJpZ2h0KClcIiAqbmdJZj1cImRpc3BsYXlBcnJvd0J0bnNcIj5cclxuICAgICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1DaGV2cm9uLUxlZnRcIj48L2k+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8ZGl2ICNsZWdlbmRDb250ZW50IGNsYXNzPVwibGVnZW5kLWRhdGFcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJsZWdlbmQtY29sdW1uXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiIChjbGljayk9XCJjaGFuZ2VEYXRhKGl0ZW0ua2V5KVwiPlxyXG4gICAgICAgIDxzcGFuIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cIml0ZW0uY29sb3JcIiBjbGFzcz1cImxlZ2VuZC1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsZWdlbmQtdGV4dFwiPnt7aXRlbS5uYW1lfX08L3NwYW4+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHNwYW4gKGNsaWNrKT1cInNjcm9sbExlZnQoKVwiIGNsYXNzPVwibGVnZW5kLXJpZ2h0LWljb25cIiAqbmdJZj1cImRpc3BsYXlBcnJvd0J0bnNcIj5cclxuICAgICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1DaGV2cm9uLVJpZ2h0XCI+PC9pPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gQ2hhcnQgLS0+XHJcbiAgPGRpdiBuei1yb3cgY2xhc3M9XCJjaGFydC1jb250ZW50XCI+XHJcbiAgICA8Y2FudmFzICNjaGFydGNhbnZhcyBjbGFzcz1cImNoYXJ0LWNhbnZhc1wiPjwvY2FudmFzPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgbnotcm93IGNsYXNzPVwiY2hhcnQtZGF0YS10YWJsZVwiPlxyXG4gICAgPGNtYWNzLWNvbXBhY3QtdGFibGUgKm5nSWY9XCIhbG9hZGluZyAmJiBkYXRhVGFibGU7IGVsc2UgZWxzZUJsb2NrXCIgW2RhdGFdPVwiZGF0YVRhYmxlXCJcclxuICAgICAgWyhjb25maWcpXT1cImNvbmZpZ3VyYXRpb25FeHBhbmRhYmxlUm93c1wiIFtpbmRlbnRTaXplXT1cIjQwXCIgW2xvZ3NdPVwidHJ1ZVwiIFtleHBhbmRhYmxlXT1cInRydWVcIlxyXG4gICAgICBbc2Nyb2xsXT1cInNjcm9sbFwiIFtmcm9udFBhZ2luYXRpb25dPVwiZmFsc2VcIiBbc2hvd1BhZ2luYXRpb25dPVwiZmFsc2VcIj48L2NtYWNzLWNvbXBhY3QtdGFibGU+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48bmctdGVtcGxhdGUgI2NvbHVtblRlbXBsYXRlIGxldC1jb2xvcj1cImNvbG9yXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNoYXJ0LWRvdFwiIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbG9yXCI+PC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cclxuICA8bnotc2tlbGV0b24gW256QWN0aXZlXT1cInRydWVcIiBbbnpQYXJhZ3JhcGhdPVwieyByb3dzOiA4IH1cIj48L256LXNrZWxldG9uPlxyXG48L25nLXRlbXBsYXRlPiJdfQ==