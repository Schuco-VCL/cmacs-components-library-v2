import { Component, ViewChild, TemplateRef, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/util.service";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/grid";
import * as i4 from "../cmacs-compact-table/cmacs-compact-table.component";
import * as i5 from "ng-zorro-antd/skeleton";
const _c0 = ["columnTemplate"];
const _c1 = ["chartcanvas"];
const _c2 = ["legendContent"];
function CmacsKpiGroupTotalComponent_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵlistener("click", function CmacsKpiGroupTotalComponent_div_0_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.scrollRight(); });
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵelementEnd();
} }
function CmacsKpiGroupTotalComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵlistener("click", function CmacsKpiGroupTotalComponent_div_0_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r15); const item_r13 = ctx.$implicit; const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.expandTable(item_r13.key); });
    i0.ɵɵelement(1, "span", 18);
    i0.ɵɵelementStart(2, "span", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", item_r13.color);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r13.name);
} }
function CmacsKpiGroupTotalComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵlistener("click", function CmacsKpiGroupTotalComponent_div_0_span_6_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.scrollLeft(); });
    i0.ɵɵelement(1, "i", 21);
    i0.ɵɵelementEnd();
} }
function CmacsKpiGroupTotalComponent_div_0_cmacs_compact_table_11_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-compact-table", 22);
    i0.ɵɵlistener("configChange", function CmacsKpiGroupTotalComponent_div_0_cmacs_compact_table_11_Template_cmacs_compact_table_configChange_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.configurationExpandableRows = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", ctx_r10.dataTable)("config", ctx_r10.configurationExpandableRows)("indentSize", 40)("logs", true)("expandable", true)("scroll", ctx_r10.scroll)("frontPagination", false)("showPagination", false);
} }
function CmacsKpiGroupTotalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵtemplate(2, CmacsKpiGroupTotalComponent_div_0_span_2_Template, 2, 0, "span", 5);
    i0.ɵɵelementStart(3, "div", 6, 7);
    i0.ɵɵtemplate(5, CmacsKpiGroupTotalComponent_div_0_span_5_Template, 4, 3, "span", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CmacsKpiGroupTotalComponent_div_0_span_6_Template, 2, 0, "span", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 10);
    i0.ɵɵelement(8, "canvas", 11, 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 13);
    i0.ɵɵtemplate(11, CmacsKpiGroupTotalComponent_div_0_cmacs_compact_table_11_Template, 1, 8, "cmacs-compact-table", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
function CmacsKpiGroupTotalComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 23);
} if (rf & 2) {
    const color_r20 = ctx.color;
    i0.ɵɵstyleProp("background-color", color_r20);
} }
const _c3 = function () { return { rows: 8 }; };
function CmacsKpiGroupTotalComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-skeleton", 24);
} if (rf & 2) {
    i0.ɵɵproperty("nzActive", true)("nzParagraph", i0.ɵɵpureFunction0(2, _c3));
} }
export class CmacsKpiGroupTotalComponent {
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
            ///
            canvas.onclick = (e) => {
                /// adjust mouse position to be relative to canvas
                const rect = canvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                /// grab a pixel
                const data = ctx.getImageData(x, y, 1, 1).data;
                const rgbToHex = '#' + [data[0], data[1], data[2]].map(w => w.toString(16).padStart(2, '0')).join('');
                const itemSelected = this.data.find(z => z.color.toLowerCase() === rgbToHex);
                if (itemSelected) {
                    this.expandTable(itemSelected.key);
                }
            };
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
        for (const data of this.data) {
            for (const item of data.data) {
                const isExpanded = (data.key === this.selectedItem);
                const newItem = {
                    key: item.key,
                    name: item.name,
                    color: {
                        ref: this.columnTemplate,
                        context: {
                            color: data.color
                        }
                    },
                    expand: isExpanded,
                    value: item.value,
                    children: this.getChildren(item.rows)
                };
                (data.key === this.selectedItem) ? temp.unshift(newItem) : temp.push(newItem);
            }
        }
        this.dataTable = temp;
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
    expandTable(key) {
        this.selectedItem = key;
        setTimeout(() => {
            this.setData();
        }, 0);
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
}
CmacsKpiGroupTotalComponent.ɵfac = function CmacsKpiGroupTotalComponent_Factory(t) { return new (t || CmacsKpiGroupTotalComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.UtilService)); };
CmacsKpiGroupTotalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsKpiGroupTotalComponent, selectors: [["cmacs-kpi-group-total"]], viewQuery: function CmacsKpiGroupTotalComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1, TemplateRef);
        i0.ɵɵviewQuery(_c1, 1, ElementRef);
        i0.ɵɵviewQuery(_c2, 1, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columnTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvasRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.legendContent = _t.first);
    } }, inputs: { headerText: "headerText", footerText: "footerText", footerValue: "footerValue", view: "view", data: "data", columnsHeader: "columnsHeader" }, outputs: { clickMenu: "clickMenu" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 1, consts: [["class", "cmacs-kpi-group-total sd-content", 4, "ngIf"], ["columnTemplate", ""], ["elseBlock", ""], [1, "cmacs-kpi-group-total", "sd-content"], ["nz-row", "", 1, "legend-row"], ["class", "legend-left-icon", 3, "click", 4, "ngIf"], [1, "legend-data"], ["legendContent", ""], ["class", "legend-column", 3, "click", 4, "ngFor", "ngForOf"], ["class", "legend-right-icon", 3, "click", 4, "ngIf"], ["nz-row", "", 1, "chart-content"], [1, "chart-canvas"], ["chartcanvas", ""], ["nz-row", "", 1, "chart-data-table"], [3, "data", "config", "indentSize", "logs", "expandable", "scroll", "frontPagination", "showPagination", "configChange", 4, "ngIf", "ngIfElse"], [1, "legend-left-icon", 3, "click"], [1, "iconArrowLarge-Chevron-Left"], [1, "legend-column", 3, "click"], [1, "legend-bar"], [1, "legend-text"], [1, "legend-right-icon", 3, "click"], [1, "iconArrowLarge-Chevron-Right"], [3, "data", "config", "indentSize", "logs", "expandable", "scroll", "frontPagination", "showPagination", "configChange"], [1, "chart-dot"], [3, "nzActive", "nzParagraph"]], template: function CmacsKpiGroupTotalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsKpiGroupTotalComponent_div_0_Template, 12, 5, "div", 0);
        i0.ɵɵtemplate(1, CmacsKpiGroupTotalComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, CmacsKpiGroupTotalComponent_ng_template_3_Template, 1, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.showChart);
    } }, directives: [i2.NgIf, i3.NzRowDirective, i2.NgForOf, i4.CmacsCompactTableComponent, i5.NzSkeletonComponent], styles: [".legend-column[_ngcontent-%COMP%]{display:table-cell;float:left;font-family:Roboto-Regular;font-size:12px;color:#656c79;cursor:pointer;white-space:nowrap;padding-top:8px}.legend-left-icon[_ngcontent-%COMP%], .legend-right-icon[_ngcontent-%COMP%]{top:5px;font-size:19px;padding-left:5px;padding-right:5px;cursor:pointer}.legend-left-icon[_ngcontent-%COMP%]{position:absolute;z-index:2;left:0;top:0}.legend-right-icon[_ngcontent-%COMP%]{position:absolute;right:0;top:0}.legend-text[_ngcontent-%COMP%]{padding-left:6px;padding-right:20px}.legend-column[_ngcontent-%COMP%]:last-child   .legend-text[_ngcontent-%COMP%]{padding-right:0}.legend-bar[_ngcontent-%COMP%]{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row[_ngcontent-%COMP%]{width:100%;margin-bottom:32px;display:flex;place-content:flex-end}.legend-data[_ngcontent-%COMP%]{display:flex;overflow:hidden;margin-right:28px;text-align:right;margin-left:25px}.chart-content[_ngcontent-%COMP%]{text-align:center;margin-bottom:25px;cursor:pointer}.chart-dot[_ngcontent-%COMP%]{width:9px;height:9px;border-radius:5px;display:inline-block;margin-left:13px}.sd-content[_ngcontent-%COMP%]{position:relative}  .cmacs-kpi-group-total .chart-data-table cmacs-compact-table .cmacs-compact-table-input-number-icon-view{display:none}  .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs .ant-table-row-expand-icon,   .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font,   .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font:hover,   .cmacs-kpi-group-total .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs{background-color:#fff!important}  .cmacs-kpi-group-total .chart-data-table .cmacs-compact-table .ant-table-header,   .cmacs-kpi-group-total .chart-data-table .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-header-logs)>td,   .cmacs-kpi-group-total .chart-data-table .cmacs-compact-table .ant-table-thead>tr>th{background-color:#f6f7fb!important}.chart-content[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{margin:0 auto}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsKpiGroupTotalComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-kpi-group-total',
                templateUrl: './cmacs-kpi-group-total.component.html',
                styleUrls: ['./cmacs-kpi-group-total.component.css']
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLWdyb3VwLXRvdGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGktZ3JvdXAtdG90YWwvY21hY3Mta3BpLWdyb3VwLXRvdGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGktZ3JvdXAtdG90YWwvY21hY3Mta3BpLWdyb3VwLXRvdGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBaUIsVUFBVSxFQUEyQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0lDR3JLLGdDQUFnRjtJQUFqRCx5TUFBdUI7SUFDcEQsd0JBQTJDO0lBQzdDLGlCQUFPOzs7O0lBRUwsZ0NBQXNGO0lBQWhDLHFQQUErQjtJQUNuRiwyQkFBc0U7SUFDdEUsZ0NBQTBCO0lBQUEsWUFBYTtJQUFBLGlCQUFPO0lBQ2hELGlCQUFPOzs7SUFGQyxlQUFxQztJQUFyQyxrREFBcUM7SUFDakIsZUFBYTtJQUFiLG1DQUFhOzs7O0lBRzNDLGdDQUFnRjtJQUExRSx3TUFBc0I7SUFDMUIsd0JBQTRDO0lBQzlDLGlCQUFPOzs7O0lBT1AsK0NBRXVFO0lBRHJFLG1SQUF3QztJQUM2QixpQkFBc0I7OztJQUYxQix3Q0FBa0IsK0NBQUEsa0JBQUEsY0FBQSxvQkFBQSwwQkFBQSwwQkFBQSx5QkFBQTs7O0lBckIzRiw4QkFBZ0U7SUFFNUQsOEJBQStCO0lBQzdCLG9GQUVPO0lBQ1AsaUNBQXdDO0lBQ3RDLG9GQUdPO0lBQ1QsaUJBQU07SUFDTixv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QkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsd0NBQXdDO2dCQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQzthQUNyRDsrR0FHb0UsY0FBYztrQkFBaEYsU0FBUzttQkFBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNGLFNBQVM7a0JBQXZFLFNBQVM7bUJBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ1csYUFBYTtrQkFBcEYsU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFFckQsU0FBUztrQkFBbEIsTUFBTTtZQUdFLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUlHLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2lkZ2V0QWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvd2lkZ2V0LWFjdGlvbi10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXRpbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mta3BpLWdyb3VwLXRvdGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mta3BpLWdyb3VwLXRvdGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1rcGktZ3JvdXAtdG90YWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0twaUdyb3VwVG90YWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbHVtblRlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiBmYWxzZSB9KSBjb2x1bW5UZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+O1xyXG4gIEBWaWV3Q2hpbGQoJ2NoYXJ0Y2FudmFzJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIGNhbnZhc1JlZjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdsZWdlbmRDb250ZW50JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIHB1YmxpYyBsZWdlbmRDb250ZW50OiBFbGVtZW50UmVmPGFueT47XHJcblxyXG4gIEBPdXRwdXQoKSBjbGlja01lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLy8gY29udGFpbmVyXHJcbiAgQElucHV0KCkgaGVhZGVyVGV4dCA9ICcnO1xyXG4gIEBJbnB1dCgpIGZvb3RlclRleHQgPSAnJztcclxuICBASW5wdXQoKSBmb290ZXJWYWx1ZSA9ICcnO1xyXG5cclxuICAvLyBjb250ZW50XHJcbiAgLy8gd2lkdGgsIGhlaWdodFxyXG4gIEBJbnB1dCgpIHZpZXchOiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBkYXRhITogYW55W107XHJcbiAgQElucHV0KCkgY29sdW1uc0hlYWRlcjogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgZGlzcGxheUFycm93QnRucyA9IHRydWU7XHJcblxyXG4gIC8vIGNoYXJ0XHJcbiAgY2hhcnRXaWR0aCA9IDEwNDtcclxuICBmb250Q2hhcnROdW1iZXIgPSAyMDtcclxuICBjb2wyID0gMTUwO1xyXG4gIGNvbDMgPSA3MDtcclxuICBtaW5XaWR0aCA9IDMwMDtcclxuICBzaG93Q2hhcnQgPSBmYWxzZTtcclxuICBzY3JvbGxZID0gMjAwO1xyXG4gIHAgPSAxO1xyXG4gIHNjcm9sbCA9IHt4OiAnMzAwcHgnLCB5OiB0aGlzLnNjcm9sbFkgKyAncHgnIH07XHJcblxyXG4gIGRhdGFUYWJsZTogYW55W107XHJcbiAgY29uZmlndXJhdGlvbkV4cGFuZGFibGVSb3dzOiBhbnk7XHJcbiAgbG9hZGluZyA9IHRydWU7XHJcbiAgc2VsZWN0ZWRJdGVtITogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHV0aWxTZXJ2aWNlOiBVdGlsU2VydmljZVxyXG4gICAgLy9cclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTY3JvbGwoKTtcclxuICAgIC8vXHJcbiAgICB0aGlzLnAgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMucCA9IHRoaXMudmlld1swXSA+IHRoaXMubWluV2lkdGggPyB0aGlzLnZpZXdbMF0gLyB0aGlzLm1pbldpZHRoIDogMTtcclxuICAgICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL1xyXG4gICAgdGhpcy5zaG93Q2hhcnQgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuZGF0YVswXS5rZXk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kcmF3Q2FudmFzKCk7XHJcbiAgICAgIHRoaXMuc2V0Q29uZmlndXJhdGlvbigpO1xyXG4gICAgICB0aGlzLnNldERhdGEoKTtcclxuICAgIH0sIDApO1xyXG4gICAgdGhpcy5zaG93Q2hhcnQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2hvd0Fycm93QnRucygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNpemUoKTtcclxuICAgIHRoaXMuc2hvd0Fycm93QnRucygpO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnZpZXdbMF07XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt3aWR0aH1weGApO1xyXG4gIH1cclxuICAvL1xyXG5cclxuICBzZXRTY3JvbGwoKTogdm9pZCB7XHJcbiAgICBsZXQgcCA9IDE7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgcCA9IHRoaXMudmlld1sxXSAqIDAuNSA+IHRoaXMuc2Nyb2xsWSA/IHRoaXMudmlld1sxXSAqIDAuNSAvIHRoaXMuc2Nyb2xsWSA6IDE7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNjcm9sbCA9IHt4OiAnMzAwcHgnLCB5OiB0aGlzLnNjcm9sbFkgKiBwICsgJ3B4JyB9O1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsUmlnaHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6ICh0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0IC0gNDApLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxMZWZ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiAodGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCArIDQwKSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcbiAgZHJhd0NhbnZhcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmRhdGEuZmluZCh4ID0+IHgua2V5ID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XHJcbiAgICBpZiAodGhpcy5jYW52YXNSZWYgJiYgaXRlbSkge1xyXG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhc1JlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5jaGFydFdpZHRoICogdGhpcy5wO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5jaGFydFdpZHRoICogdGhpcy5wO1xyXG4gICAgICAvL1xyXG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgLy8gdG90YWxzXHJcbiAgICAgIGNvbnN0IHRvdGFsU2hvdyA9IHRoaXMuZ2V0VG90YWxDYXRlZyhpdGVtLmRhdGEpO1xyXG4gICAgICBjb25zdCB0b3RhbCA9IHRoaXMuZGF0YS5tYXAoeCA9PiB0aGlzLmdldFRvdGFsQ2F0ZWcoeC5kYXRhKSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgICAgIGxldCBzdGFydEFuZ2xlID0gMDtcclxuXHJcbiAgICAgIC8vIGRyYXcgZGF0YVxyXG4gICAgICBmb3IgKGNvbnN0IGNhdGVnIG9mIHRoaXMuZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsRyA9ICB0aGlzLmdldFRvdGFsQ2F0ZWcoY2F0ZWcuZGF0YSk7XHJcbiAgICAgICAgY29uc3Qgc2xpY2VBbmdsZSA9IDIgKiBNYXRoLlBJICogdG90YWxHIC8gdG90YWw7XHJcbiAgICAgICAgaWYgKHNsaWNlQW5nbGUgPiAwICkge1xyXG4gICAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoIC8gMixcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgIE1hdGgubWluKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKSAtICgodGhpcy5zZWxlY3RlZEl0ZW0gPT09IGNhdGVnLmtleSkgPyAxMCAqIHRoaXMucCA6IDYgKiB0aGlzLnApLFxyXG4gICAgICAgICAgICBzdGFydEFuZ2xlLFxyXG4gICAgICAgICAgICBzdGFydEFuZ2xlICsgc2xpY2VBbmdsZSAtIDAuMDUsXHJcbiAgICAgICAgICAgIGNhdGVnLmNvbG9yLFxyXG4gICAgICAgICAgICAodGhpcy5zZWxlY3RlZEl0ZW0gPT09IGNhdGVnLmtleSkgPyAxNSAqIHRoaXMucCA6IDcgKiB0aGlzLnBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzdGFydEFuZ2xlICs9IHNsaWNlQW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIGRyYXcgdmFsdWVcclxuICAgICAgY3R4LmZvbnQgPSB0aGlzLmZvbnRDaGFydE51bWJlciAqIHRoaXMucCArICdweCBSb2JvdG8tUmVndWxhciAnO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gJyMzYjNmNDYnO1xyXG4gICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnJyArIHRvdGFsU2hvdywgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLndpZHRoIC8gMiArIDUpO1xyXG5cclxuICAgICAgLy8vXHJcbiAgICAgIGNhbnZhcy5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAvLy8gYWRqdXN0IG1vdXNlIHBvc2l0aW9uIHRvIGJlIHJlbGF0aXZlIHRvIGNhbnZhc1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuICAgICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XHJcblxyXG4gICAgICAgIC8vLyBncmFiIGEgcGl4ZWxcclxuICAgICAgICBjb25zdCBkYXRhID0gY3R4LmdldEltYWdlRGF0YSh4LCB5LCAxLCAxKS5kYXRhO1xyXG4gICAgICAgIGNvbnN0IHJnYlRvSGV4ID0gJyMnICsgW2RhdGFbMF0sIGRhdGFbMV0sIGRhdGFbMl1dLm1hcCh3ID0+IHcudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtU2VsZWN0ZWQgPSB0aGlzLmRhdGEuZmluZCh6ID0+IHouY29sb3IudG9Mb3dlckNhc2UoKSA9PT0gcmdiVG9IZXgpO1xyXG4gICAgICAgIGlmIChpdGVtU2VsZWN0ZWQpIHtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kVGFibGUoaXRlbVNlbGVjdGVkLmtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdQaWVTbGljZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIsIGNvbG9yOiBhbnksIGxpbmVXaWR0aDogbnVtYmVyICk6IHZvaWQge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUgLSBNYXRoLlBJIC8gMiwgZW5kQW5nbGUgLSBNYXRoLlBJIC8gMiwgZmFsc2UpO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG90YWxDYXRlZyhkYXRhOiBhbnlbXSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZGF0YS5tYXAoeCA9PiB4LnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICB9XHJcblxyXG4gIHNldENvbmZpZ3VyYXRpb24oKTogdm9pZCB7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uRXhwYW5kYWJsZVJvd3MgPSB7XHJcbiAgICAgIGZpZWxkczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAzLFxyXG4gICAgICAgICAgZGlzcGxheTogJycsXHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ2NvbG9yJyxcclxuICAgICAgICAgIHdpZHRoOiAnNjBweCcsXHJcbiAgICAgICAgICBtaW5XaWR0aDogNjAsXHJcbiAgICAgICAgICBtYXhXaWR0aDogMTIwLFxyXG4gICAgICAgICAgcmVzaXphYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMCxcclxuICAgICAgICAgIGRpc3BsYXk6IHRoaXMuY29sdW1uc0hlYWRlclswXSxcclxuICAgICAgICAgIHByb3BlcnR5OiAnbmFtZScsXHJcbiAgICAgICAgICBlZGl0VGVtcGxhdGU6IDMsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5jb2wyICogdGhpcy5wICsgJ3B4JyxcclxuICAgICAgICAgIG1pbldpZHRoOiB0aGlzLmNvbDIgKiB0aGlzLnAgLSAxMCxcclxuICAgICAgICAgIG1heFdpZHRoOiB0aGlzLmNvbDIgKiB0aGlzLnAgKyAxMDAsXHJcbiAgICAgICAgICByZXNpemFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAwLFxyXG4gICAgICAgICAgZGlzcGxheTogdGhpcy5jb2x1bW5zSGVhZGVyWzFdLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICd2YWx1ZScsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5jb2wzICogdGhpcy5wICsgJ3B4JyxcclxuICAgICAgICAgIG1pbldpZHRoOiB0aGlzLmNvbDMgKiB0aGlzLnAgLSAxMCxcclxuICAgICAgICAgIGVkaXRUZW1wbGF0ZTogMixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgZmllbGRJZDogJ2tleScsXHJcbiAgICAgIGZpZWxkUmF0ZTogJ2ZhdidcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXREYXRhKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnN0IHRlbXA6IGFueVtdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5kYXRhKSB7XHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhLmRhdGEpIHtcclxuICAgICAgICBjb25zdCBpc0V4cGFuZGVkID0gKGRhdGEua2V5ID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgICAgIGtleTogaXRlbS5rZXksXHJcbiAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICBjb2xvcjogIHtcclxuICAgICAgICAgICAgcmVmOiB0aGlzLmNvbHVtblRlbXBsYXRlLFxyXG4gICAgICAgICAgICBjb250ZXh0OiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGRhdGEuY29sb3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGV4cGFuZDogaXNFeHBhbmRlZCxcclxuICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0Q2hpbGRyZW4oaXRlbS5yb3dzKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgKGRhdGEua2V5ID09PSB0aGlzLnNlbGVjdGVkSXRlbSkgPyB0ZW1wLnVuc2hpZnQobmV3SXRlbSkgOiB0ZW1wLnB1c2gobmV3SXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZGF0YVRhYmxlID0gdGVtcDtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBnZXRDaGlsZHJlbihpdGVtczogYW55W10pOiBhbnlbXSB7XHJcbiAgICBjb25zdCBvdXRwdXQ6IGFueVtdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgb3V0cHV0LnB1c2goe1xyXG4gICAgICAgIGtleTogaXRlbS5rZXksXHJcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgIGNvbG9yOiB7fSxcclxuICAgICAgICB2YWx1ZTogJydcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH1cclxuXHJcbiAgbWVudUNsaWNrKHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tNZW51LmVtaXQodHlwZSk7XHJcbiAgfVxyXG5cclxuICBleHBhbmRUYWJsZShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBrZXk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgIHRoaXMuc2V0RGF0YSgpO1xyXG4gICAgfSwgMCk7XHJcbiAgICB0aGlzLmRyYXdDYW52YXMoKTtcclxuICB9XHJcblxyXG4gIHNob3dBcnJvd0J0bnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5kYXRhLm1hcChpID0+IGkubmFtZSArICdzcGFjZScpO1xyXG4gICAgY29uc3QgdHNpemUgPSB0aGlzLnV0aWxTZXJ2aWNlLmdldF90ZXhfc2l6ZSh0ZXh0LCAnMTJweCBSb2JvdG8tUmVndWxhcicpO1xyXG4gICAgdGhpcy5kaXNwbGF5QXJyb3dCdG5zID0gdHNpemUud2lkdGggPiB0aGlzLnZpZXdbMF0gLSAxNTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXREYXRhVGFibGUoKTogYW55W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbmZpZ3VyYXRpb24oKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25FeHBhbmRhYmxlUm93cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDaGFydEltYWdlKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudC50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNtYWNzLWtwaS1ncm91cC10b3RhbCBzZC1jb250ZW50XCIgKm5nSWY9XCJzaG93Q2hhcnRcIj5cclxuICAgIDwhLS0gTGVnZW5kIC0tPlxyXG4gICAgPGRpdiBuei1yb3cgY2xhc3M9XCJsZWdlbmQtcm93XCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibGVnZW5kLWxlZnQtaWNvblwiIChjbGljayk9XCJzY3JvbGxSaWdodCgpXCIgKm5nSWY9XCJkaXNwbGF5QXJyb3dCdG5zXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1DaGV2cm9uLUxlZnRcIj48L2k+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGRpdiAjbGVnZW5kQ29udGVudCBjbGFzcz1cImxlZ2VuZC1kYXRhXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsZWdlbmQtY29sdW1uXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiIChjbGljayk9XCJleHBhbmRUYWJsZShpdGVtLmtleSlcIj5cclxuICAgICAgICAgIDxzcGFuIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cIml0ZW0uY29sb3JcIiBjbGFzcz1cImxlZ2VuZC1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC10ZXh0XCI+e3tpdGVtLm5hbWV9fTwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiAoY2xpY2spPVwic2Nyb2xsTGVmdCgpXCIgY2xhc3M9XCJsZWdlbmQtcmlnaHQtaWNvblwiICpuZ0lmPVwiZGlzcGxheUFycm93QnRuc1wiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiaWNvbkFycm93TGFyZ2UtQ2hldnJvbi1SaWdodFwiPjwvaT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIENoYXJ0IC0tPlxyXG4gICAgPGRpdiBuei1yb3cgY2xhc3M9XCJjaGFydC1jb250ZW50XCI+XHJcbiAgICAgIDxjYW52YXMgI2NoYXJ0Y2FudmFzIGNsYXNzPVwiY2hhcnQtY2FudmFzXCI+PC9jYW52YXM+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgbnotcm93IGNsYXNzPVwiY2hhcnQtZGF0YS10YWJsZVwiPlxyXG4gICAgICA8Y21hY3MtY29tcGFjdC10YWJsZSAqbmdJZj1cIiFsb2FkaW5nICYmIGRhdGFUYWJsZTsgZWxzZSBlbHNlQmxvY2tcIiBbZGF0YV09XCJkYXRhVGFibGVcIlxyXG4gICAgICAgIFsoY29uZmlnKV09XCJjb25maWd1cmF0aW9uRXhwYW5kYWJsZVJvd3NcIiBbaW5kZW50U2l6ZV09XCI0MFwiIFtsb2dzXT1cInRydWVcIiBbZXhwYW5kYWJsZV09XCJ0cnVlXCJcclxuICAgICAgICBbc2Nyb2xsXT1cInNjcm9sbFwiIFtmcm9udFBhZ2luYXRpb25dPVwiZmFsc2VcIiBbc2hvd1BhZ2luYXRpb25dPVwiZmFsc2VcIj48L2NtYWNzLWNvbXBhY3QtdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8bmctdGVtcGxhdGUgI2NvbHVtblRlbXBsYXRlIGxldC1jb2xvcj1cImNvbG9yXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtZG90XCIgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sb3JcIj48L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIFxyXG4gIDxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPlxyXG4gICAgPG56LXNrZWxldG9uIFtuekFjdGl2ZV09XCJ0cnVlXCIgW256UGFyYWdyYXBoXT1cInsgcm93czogOCB9XCI+PC9uei1za2VsZXRvbj5cclxuICA8L25nLXRlbXBsYXRlPiJdfQ==