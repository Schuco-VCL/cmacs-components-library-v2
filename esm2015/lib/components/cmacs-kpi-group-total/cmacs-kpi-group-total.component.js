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
                },
                {
                    celdType: 0,
                    display: this.columnsHeader[0],
                    property: 'name',
                    editTemplate: 3,
                    width: this.col2 * this.p + 'px',
                },
                {
                    celdType: 0,
                    display: this.columnsHeader[1],
                    property: 'value',
                    width: this.col3 * this.p + 'px',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLWdyb3VwLXRvdGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGktZ3JvdXAtdG90YWwvY21hY3Mta3BpLWdyb3VwLXRvdGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGktZ3JvdXAtdG90YWwvY21hY3Mta3BpLWdyb3VwLXRvdGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBaUIsVUFBVSxFQUEyQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0lDR3JLLGdDQUFnRjtJQUFqRCx5TUFBdUI7SUFDcEQsd0JBQTJDO0lBQzdDLGlCQUFPOzs7O0lBRUwsZ0NBQXNGO0lBQWhDLHFQQUErQjtJQUNuRiwyQkFBc0U7SUFDdEUsZ0NBQTBCO0lBQUEsWUFBYTtJQUFBLGlCQUFPO0lBQ2hELGlCQUFPOzs7SUFGQyxlQUFxQztJQUFyQyxrREFBcUM7SUFDakIsZUFBYTtJQUFiLG1DQUFhOzs7O0lBRzNDLGdDQUFnRjtJQUExRSx3TUFBc0I7SUFDMUIsd0JBQTRDO0lBQzlDLGlCQUFPOzs7O0lBT1AsK0NBRXVFO0lBRHJFLG1SQUF3QztJQUM2QixpQkFBc0I7OztJQUYxQix3Q0FBa0IsK0NBQUEsa0JBQUEsY0FBQSxvQkFBQSwwQkFBQSwwQkFBQSx5QkFBQTs7O0lBckIzRiw4QkFBZ0U7SUFFNUQsOEJBQStCO0lBQzdCLG9GQUVPO0lBQ1AsaUNBQXdDO0lBQ3RDLG9GQUdPO0lBQ1QsaUJBQU07SUFDTixvRkFFTztJQUNULGlCQUFNO0lBRU4sK0JBQWtDO0lBQ2hDLGlDQUFtRDtJQUNyRCxpQkFBTTtJQUNOLGdDQUFxQztJQUNuQyxxSEFFNkY7SUFDL0YsaUJBQU07SUFDUixpQkFBTTs7OztJQXRCc0QsZUFBc0I7SUFBdEIsOENBQXNCO0lBSS9CLGVBQU87SUFBUCxxQ0FBTztJQUtFLGVBQXNCO0lBQXRCLDhDQUFzQjtJQVN4RCxlQUE2QjtJQUE3QiwwREFBNkIsaUJBQUE7OztJQU1yRCwwQkFBOEQ7OztJQUF2Qyw2Q0FBZ0M7Ozs7SUFJdkQsa0NBQXlFOztJQUE1RCwrQkFBaUIsMkNBQUE7O0FEdEJsQyxNQUFNLE9BQU8sMkJBQTJCO0lBcUN0QztJQUNFLEVBQUU7SUFDTSxRQUFtQixFQUNuQixVQUFzQixFQUN0QixXQUF3QjtJQUNoQyxFQUFFOztRQUhNLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQW5DeEIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFOUMsWUFBWTtRQUNILGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQU1qQixrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUV0QyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFFeEIsUUFBUTtRQUNSLGVBQVUsR0FBRyxHQUFHLENBQUM7UUFDakIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUNYLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixhQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2YsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixZQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2QsTUFBQyxHQUFHLENBQUMsQ0FBQztRQUNOLFdBQU0sR0FBRyxFQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFJL0MsWUFBTyxHQUFHLElBQUksQ0FBQztJQVNYLENBQUM7SUFFTCxRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsRUFBRTtRQUNGLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtTQUNGO1FBQ0QsRUFBRTtRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzthQUN0QztZQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFDRCxFQUFFO0lBRUYsU0FBUztRQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvRTtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM5SCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM5SCxDQUFDO0lBRUQsVUFBVTtRQUNSLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUQsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUMxQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWtDLENBQUM7WUFFakUsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekMsRUFBRTtZQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWpELFNBQVM7WUFDVCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFFbkIsWUFBWTtZQUNaLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDN0IsTUFBTSxNQUFNLEdBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sVUFBVSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2hELElBQUksVUFBVSxHQUFHLENBQUMsRUFBRztvQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FDZixHQUFHLEVBQ0gsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQ2hCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDOUcsVUFBVSxFQUNWLFVBQVUsR0FBRyxVQUFVLEdBQUcsSUFBSSxFQUM5QixLQUFLLENBQUMsS0FBSyxFQUNYLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FDN0QsQ0FBQztvQkFDRixVQUFVLElBQUksVUFBVSxDQUFDO2lCQUMxQjthQUNGO1lBQ0QsYUFBYTtZQUNiLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLG9CQUFvQixDQUFDO1lBQ2hFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzFCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLFNBQVMsRUFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVyRSxHQUFHO1lBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNyQixrREFBa0Q7Z0JBQ2xELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUM1QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFFL0IsZ0JBQWdCO2dCQUNoQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDL0MsTUFBTSxRQUFRLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRXRHLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQztnQkFDN0UsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNwQztZQUNILENBQUMsQ0FBQztTQUVIO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUE2QixFQUFFLE9BQWUsRUFBRSxPQUFlLEVBQy9ELE1BQWMsRUFBRSxVQUFrQixFQUFFLFFBQWdCLEVBQUUsS0FBVSxFQUFFLFNBQWlCO1FBQzlGLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0YsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDMUIsR0FBRyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDeEIsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFXO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxFQUFFO1FBQ0YsSUFBSSxDQUFDLDJCQUEyQixHQUFHO1lBQ2pDLE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxRQUFRLEVBQUUsQ0FBQztvQkFDWCxPQUFPLEVBQUUsRUFBRTtvQkFDWCxRQUFRLEVBQUUsT0FBTztvQkFDakIsS0FBSyxFQUFFLE1BQU07aUJBQ2Q7Z0JBQ0Q7b0JBQ0UsUUFBUSxFQUFFLENBQUM7b0JBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUM5QixRQUFRLEVBQUUsTUFBTTtvQkFDaEIsWUFBWSxFQUFFLENBQUM7b0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJO2lCQUNqQztnQkFDRDtvQkFDRSxRQUFRLEVBQUUsQ0FBQztvQkFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLFFBQVEsRUFBRSxPQUFPO29CQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUk7b0JBQ2hDLFlBQVksRUFBRSxDQUFDO29CQUNmLFFBQVEsRUFBRSxLQUFLO2lCQUNoQjthQUNGO1lBQ0QsT0FBTyxFQUFFLEtBQUs7WUFDZCxTQUFTLEVBQUUsS0FBSztTQUNqQixDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixNQUFNLElBQUksR0FBVSxFQUFFLENBQUM7UUFDdkIsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQzVCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDNUIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxPQUFPLEdBQUc7b0JBQ2QsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO29CQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixLQUFLLEVBQUc7d0JBQ04sR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjO3dCQUN4QixPQUFPLEVBQUU7NEJBQ1AsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO3lCQUNsQjtxQkFDRjtvQkFDRCxNQUFNLEVBQUUsVUFBVTtvQkFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUN0QyxDQUFDO2dCQUNGLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0U7U0FDRjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBQ0QsV0FBVyxDQUFDLEtBQVk7UUFDdEIsTUFBTSxNQUFNLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsRUFBRTthQUNWLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVyxDQUFDLEdBQVc7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGFBQWE7UUFDWCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDbEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVNLFlBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUM7SUFDMUMsQ0FBQztJQUVNLGFBQWE7UUFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7c0dBaFJVLDJCQUEyQjtnRUFBM0IsMkJBQTJCOytCQUVELFdBQVc7K0JBQ2QsVUFBVTsrQkFDUixVQUFVOzs7Ozs7O1FDYmhELDZFQXlCUTtRQUNOLDZIQUVjO1FBRWQsNkhBRWM7O1FBaEMrQixvQ0FBZTs7dUZEU2pELDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7YUFDckQ7K0dBR29FLGNBQWM7a0JBQWhGLFNBQVM7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDRixTQUFTO2tCQUF2RSxTQUFTO21CQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNXLGFBQWE7a0JBQXBGLFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBRXJELFNBQVM7a0JBQWxCLE1BQU07WUFHRSxVQUFVO2tCQUFsQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFJRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdpZGdldEFjdGlvblR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3dpZGdldC1hY3Rpb24tdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWtwaS1ncm91cC10b3RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWtwaS1ncm91cC10b3RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mta3BpLWdyb3VwLXRvdGFsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NLcGlHcm91cFRvdGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBAVmlld0NoaWxkKCdjb2x1bW5UZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSkgY29sdW1uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHt9PjtcclxuICBAVmlld0NoaWxkKCdjaGFydGNhbnZhcycsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBjYW52YXNSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnbGVnZW5kQ29udGVudCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgbGVnZW5kQ29udGVudDogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vIGNvbnRhaW5lclxyXG4gIEBJbnB1dCgpIGhlYWRlclRleHQgPSAnJztcclxuICBASW5wdXQoKSBmb290ZXJUZXh0ID0gJyc7XHJcbiAgQElucHV0KCkgZm9vdGVyVmFsdWUgPSAnJztcclxuXHJcbiAgLy8gY29udGVudFxyXG4gIC8vIHdpZHRoLCBoZWlnaHRcclxuICBASW5wdXQoKSB2aWV3ITogbnVtYmVyW107XHJcbiAgQElucHV0KCkgZGF0YSE6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNvbHVtbnNIZWFkZXI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGRpc3BsYXlBcnJvd0J0bnMgPSB0cnVlO1xyXG5cclxuICAvLyBjaGFydFxyXG4gIGNoYXJ0V2lkdGggPSAxMDQ7XHJcbiAgZm9udENoYXJ0TnVtYmVyID0gMjA7XHJcbiAgY29sMiA9IDE1MDtcclxuICBjb2wzID0gNzA7XHJcbiAgbWluV2lkdGggPSAzMDA7XHJcbiAgc2hvd0NoYXJ0ID0gZmFsc2U7XHJcbiAgc2Nyb2xsWSA9IDIwMDtcclxuICBwID0gMTtcclxuICBzY3JvbGwgPSB7eDogJzMwMHB4JywgeTogdGhpcy5zY3JvbGxZICsgJ3B4JyB9O1xyXG5cclxuICBkYXRhVGFibGU6IGFueVtdO1xyXG4gIGNvbmZpZ3VyYXRpb25FeHBhbmRhYmxlUm93czogYW55O1xyXG4gIGxvYWRpbmcgPSB0cnVlO1xyXG4gIHNlbGVjdGVkSXRlbSE6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2VcclxuICAgIC8vXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U2Nyb2xsKCk7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5wID0gMTtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLnAgPSB0aGlzLnZpZXdbMF0gPiB0aGlzLm1pbldpZHRoID8gdGhpcy52aWV3WzBdIC8gdGhpcy5taW5XaWR0aCA6IDE7XHJcbiAgICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIHRoaXMuc2hvd0NoYXJ0ID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLmRhdGFbMF0ua2V5O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZHJhd0NhbnZhcygpO1xyXG4gICAgICB0aGlzLnNldENvbmZpZ3VyYXRpb24oKTtcclxuICAgICAgdGhpcy5zZXREYXRhKCk7XHJcbiAgICB9LCAwKTtcclxuICAgIHRoaXMuc2hvd0NoYXJ0ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnNob3dBcnJvd0J0bnMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICB0aGlzLnNob3dBcnJvd0J0bnMoKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy52aWV3WzBdO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7d2lkdGh9cHhgKTtcclxuICB9XHJcbiAgLy9cclxuXHJcbiAgc2V0U2Nyb2xsKCk6IHZvaWQge1xyXG4gICAgbGV0IHAgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHAgPSB0aGlzLnZpZXdbMV0gKiAwLjUgPiB0aGlzLnNjcm9sbFkgPyB0aGlzLnZpZXdbMV0gKiAwLjUgLyB0aGlzLnNjcm9sbFkgOiAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zY3JvbGwgPSB7eDogJzMwMHB4JywgeTogdGhpcy5zY3JvbGxZICogcCArICdweCcgfTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFJpZ2h0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiAodGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCAtIDQwKSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsTGVmdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvKHsgbGVmdDogKHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgKyA0MCksIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG4gIGRyYXdDYW52YXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5kYXRhLmZpbmQoeCA9PiB4LmtleSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgaWYgKHRoaXMuY2FudmFzUmVmICYmIGl0ZW0pIHtcclxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAqIHRoaXMucDtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY2hhcnRXaWR0aCAqIHRoaXMucDtcclxuICAgICAgLy9cclxuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIHRvdGFsc1xyXG4gICAgICBjb25zdCB0b3RhbFNob3cgPSB0aGlzLmdldFRvdGFsQ2F0ZWcoaXRlbS5kYXRhKTtcclxuICAgICAgY29uc3QgdG90YWwgPSB0aGlzLmRhdGEubWFwKHggPT4gdGhpcy5nZXRUb3RhbENhdGVnKHguZGF0YSkpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gICAgICBsZXQgc3RhcnRBbmdsZSA9IDA7XHJcblxyXG4gICAgICAvLyBkcmF3IGRhdGFcclxuICAgICAgZm9yIChjb25zdCBjYXRlZyBvZiB0aGlzLmRhdGEpIHtcclxuICAgICAgICBjb25zdCB0b3RhbEcgPSAgdGhpcy5nZXRUb3RhbENhdGVnKGNhdGVnLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHNsaWNlQW5nbGUgPSAyICogTWF0aC5QSSAqIHRvdGFsRyAvIHRvdGFsO1xyXG4gICAgICAgIGlmIChzbGljZUFuZ2xlID4gMCApIHtcclxuICAgICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMikgLSAoKHRoaXMuc2VsZWN0ZWRJdGVtID09PSBjYXRlZy5rZXkpID8gMTAgKiB0aGlzLnAgOiA2ICogdGhpcy5wKSxcclxuICAgICAgICAgICAgc3RhcnRBbmdsZSxcclxuICAgICAgICAgICAgc3RhcnRBbmdsZSArIHNsaWNlQW5nbGUgLSAwLjA1LFxyXG4gICAgICAgICAgICBjYXRlZy5jb2xvcixcclxuICAgICAgICAgICAgKHRoaXMuc2VsZWN0ZWRJdGVtID09PSBjYXRlZy5rZXkpID8gMTUgKiB0aGlzLnAgOiA3ICogdGhpcy5wXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc3RhcnRBbmdsZSArPSBzbGljZUFuZ2xlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBkcmF3IHZhbHVlXHJcbiAgICAgIGN0eC5mb250ID0gdGhpcy5mb250Q2hhcnROdW1iZXIgKiB0aGlzLnAgKyAncHggUm9ib3RvLVJlZ3VsYXIgJztcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjM2IzZjQ2JztcclxuICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICBjdHguZmlsbFRleHQoJycgKyB0b3RhbFNob3csIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy53aWR0aCAvIDIgKyA1KTtcclxuXHJcbiAgICAgIC8vL1xyXG4gICAgICBjYW52YXMub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgLy8vIGFkanVzdCBtb3VzZSBwb3NpdGlvbiB0byBiZSByZWxhdGl2ZSB0byBjYW52YXNcclxuICAgICAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xyXG5cclxuICAgICAgICAvLy8gZ3JhYiBhIHBpeGVsXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoeCwgeSwgMSwgMSkuZGF0YTtcclxuICAgICAgICBjb25zdCByZ2JUb0hleCA9ICcjJyArIFtkYXRhWzBdLCBkYXRhWzFdLCBkYXRhWzJdXS5tYXAodyA9PiB3LnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbVNlbGVjdGVkID0gdGhpcy5kYXRhLmZpbmQoeiA9PiB6LmNvbG9yLnRvTG93ZXJDYXNlKCkgPT09IHJnYlRvSGV4KTtcclxuICAgICAgICBpZiAoaXRlbVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGFuZFRhYmxlKGl0ZW1TZWxlY3RlZC5rZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3UGllU2xpY2UoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyLCBjb2xvcjogYW55LCBsaW5lV2lkdGg6IG51bWJlciApOiB2b2lkIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCBzdGFydEFuZ2xlIC0gTWF0aC5QSSAvIDIsIGVuZEFuZ2xlIC0gTWF0aC5QSSAvIDIsIGZhbHNlKTtcclxuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsQ2F0ZWcoZGF0YTogYW55W10pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGRhdGEubWFwKHggPT4geC52YWx1ZSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgfVxyXG5cclxuICBzZXRDb25maWd1cmF0aW9uKCk6IHZvaWQge1xyXG4gICAgLy9cclxuICAgIHRoaXMuY29uZmlndXJhdGlvbkV4cGFuZGFibGVSb3dzID0ge1xyXG4gICAgICBmaWVsZHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMyxcclxuICAgICAgICAgIGRpc3BsYXk6ICcnLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICdjb2xvcicsXHJcbiAgICAgICAgICB3aWR0aDogJzYwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2VsZFR5cGU6IDAsXHJcbiAgICAgICAgICBkaXNwbGF5OiB0aGlzLmNvbHVtbnNIZWFkZXJbMF0sXHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ25hbWUnLFxyXG4gICAgICAgICAgZWRpdFRlbXBsYXRlOiAzLFxyXG4gICAgICAgICAgd2lkdGg6IHRoaXMuY29sMiAqIHRoaXMucCArICdweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMCxcclxuICAgICAgICAgIGRpc3BsYXk6IHRoaXMuY29sdW1uc0hlYWRlclsxXSxcclxuICAgICAgICAgIHByb3BlcnR5OiAndmFsdWUnLFxyXG4gICAgICAgICAgd2lkdGg6IHRoaXMuY29sMyAqIHRoaXMucCArICdweCcsXHJcbiAgICAgICAgICBlZGl0VGVtcGxhdGU6IDIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGZpZWxkSWQ6ICdrZXknLFxyXG4gICAgICBmaWVsZFJhdGU6ICdmYXYnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0YSgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YSkge1xyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgY29uc3QgaXNFeHBhbmRlZCA9IChkYXRhLmtleSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7XHJcbiAgICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgY29sb3I6ICB7XHJcbiAgICAgICAgICAgIHJlZjogdGhpcy5jb2x1bW5UZW1wbGF0ZSxcclxuICAgICAgICAgICAgY29udGV4dDoge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBkYXRhLmNvbG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBleHBhbmQ6IGlzRXhwYW5kZWQsXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLmdldENoaWxkcmVuKGl0ZW0ucm93cylcclxuICAgICAgICB9O1xyXG4gICAgICAgIChkYXRhLmtleSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pID8gdGVtcC51bnNoaWZ0KG5ld0l0ZW0pIDogdGVtcC5wdXNoKG5ld0l0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGFUYWJsZSA9IHRlbXA7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgZ2V0Q2hpbGRyZW4oaXRlbXM6IGFueVtdKTogYW55W10ge1xyXG4gICAgY29uc3Qgb3V0cHV0OiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgIG91dHB1dC5wdXNoKHtcclxuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgICBjb2xvcjoge30sXHJcbiAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxuICB9XHJcblxyXG4gIG1lbnVDbGljayh0eXBlOiBXaWRnZXRBY3Rpb25UeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrTWVudS5lbWl0KHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kVGFibGUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0ga2V5O1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICB0aGlzLnNldERhdGEoKTtcclxuICAgIH0sIDApO1xyXG4gICAgdGhpcy5kcmF3Q2FudmFzKCk7XHJcbiAgfVxyXG5cclxuICBzaG93QXJyb3dCdG5zKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGV4dCA9IHRoaXMuZGF0YS5tYXAoaSA9PiBpLm5hbWUgKyAnc3BhY2UnKTtcclxuICAgIGNvbnN0IHRzaXplID0gdGhpcy51dGlsU2VydmljZS5nZXRfdGV4X3NpemUodGV4dCwgJzEycHggUm9ib3RvLVJlZ3VsYXInKTtcclxuICAgIHRoaXMuZGlzcGxheUFycm93QnRucyA9IHRzaXplLndpZHRoID4gdGhpcy52aWV3WzBdIC0gMTU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0YVRhYmxlKCk6IGFueVtdIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb25maWd1cmF0aW9uKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uRXhwYW5kYWJsZVJvd3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2hhcnRJbWFnZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FudmFzUmVmLm5hdGl2ZUVsZW1lbnQudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjbWFjcy1rcGktZ3JvdXAtdG90YWwgc2QtY29udGVudFwiICpuZ0lmPVwic2hvd0NoYXJ0XCI+XHJcbiAgICA8IS0tIExlZ2VuZCAtLT5cclxuICAgIDxkaXYgbnotcm93IGNsYXNzPVwibGVnZW5kLXJvd1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC1sZWZ0LWljb25cIiAoY2xpY2spPVwic2Nyb2xsUmlnaHQoKVwiICpuZ0lmPVwiZGlzcGxheUFycm93QnRuc1wiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiaWNvbkFycm93TGFyZ2UtQ2hldnJvbi1MZWZ0XCI+PC9pPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxkaXYgI2xlZ2VuZENvbnRlbnQgY2xhc3M9XCJsZWdlbmQtZGF0YVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGVnZW5kLWNvbHVtblwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFcIiAoY2xpY2spPVwiZXhwYW5kVGFibGUoaXRlbS5rZXkpXCI+XHJcbiAgICAgICAgICA8c3BhbiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJpdGVtLmNvbG9yXCIgY2xhc3M9XCJsZWdlbmQtYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJsZWdlbmQtdGV4dFwiPnt7aXRlbS5uYW1lfX08L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gKGNsaWNrKT1cInNjcm9sbExlZnQoKVwiIGNsYXNzPVwibGVnZW5kLXJpZ2h0LWljb25cIiAqbmdJZj1cImRpc3BsYXlBcnJvd0J0bnNcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImljb25BcnJvd0xhcmdlLUNoZXZyb24tUmlnaHRcIj48L2k+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSBDaGFydCAtLT5cclxuICAgIDxkaXYgbnotcm93IGNsYXNzPVwiY2hhcnQtY29udGVudFwiPlxyXG4gICAgICA8Y2FudmFzICNjaGFydGNhbnZhcyBjbGFzcz1cImNoYXJ0LWNhbnZhc1wiPjwvY2FudmFzPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IG56LXJvdyBjbGFzcz1cImNoYXJ0LWRhdGEtdGFibGVcIj5cclxuICAgICAgPGNtYWNzLWNvbXBhY3QtdGFibGUgKm5nSWY9XCIhbG9hZGluZyAmJiBkYXRhVGFibGU7IGVsc2UgZWxzZUJsb2NrXCIgW2RhdGFdPVwiZGF0YVRhYmxlXCJcclxuICAgICAgICBbKGNvbmZpZyldPVwiY29uZmlndXJhdGlvbkV4cGFuZGFibGVSb3dzXCIgW2luZGVudFNpemVdPVwiNDBcIiBbbG9nc109XCJ0cnVlXCIgW2V4cGFuZGFibGVdPVwidHJ1ZVwiXHJcbiAgICAgICAgW3Njcm9sbF09XCJzY3JvbGxcIiBbZnJvbnRQYWdpbmF0aW9uXT1cImZhbHNlXCIgW3Nob3dQYWdpbmF0aW9uXT1cImZhbHNlXCI+PC9jbWFjcy1jb21wYWN0LXRhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPG5nLXRlbXBsYXRlICNjb2x1bW5UZW1wbGF0ZSBsZXQtY29sb3I9XCJjb2xvclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0LWRvdFwiIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbG9yXCI+PC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICBcclxuICA8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cclxuICAgIDxuei1za2VsZXRvbiBbbnpBY3RpdmVdPVwidHJ1ZVwiIFtuelBhcmFncmFwaF09XCJ7IHJvd3M6IDggfVwiPjwvbnotc2tlbGV0b24+XHJcbiAgPC9uZy10ZW1wbGF0ZT4iXX0=