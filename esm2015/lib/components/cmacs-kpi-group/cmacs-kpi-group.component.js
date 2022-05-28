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
function CmacsKpiGroupComponent_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵlistener("click", function CmacsKpiGroupComponent_div_0_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.scrollRight(); });
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵelementEnd();
} }
function CmacsKpiGroupComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵlistener("click", function CmacsKpiGroupComponent_div_0_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r15); const item_r13 = ctx.$implicit; const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.changeData(item_r13.key); });
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
function CmacsKpiGroupComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵlistener("click", function CmacsKpiGroupComponent_div_0_span_6_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.scrollLeft(); });
    i0.ɵɵelement(1, "i", 21);
    i0.ɵɵelementEnd();
} }
function CmacsKpiGroupComponent_div_0_cmacs_compact_table_11_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-compact-table", 22);
    i0.ɵɵlistener("configChange", function CmacsKpiGroupComponent_div_0_cmacs_compact_table_11_Template_cmacs_compact_table_configChange_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.configurationExpandableRows = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", ctx_r10.dataTable)("config", ctx_r10.configurationExpandableRows)("indentSize", 40)("logs", true)("expandable", true)("scroll", ctx_r10.scroll)("frontPagination", false)("showPagination", false);
} }
function CmacsKpiGroupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
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
}
CmacsKpiGroupComponent.ɵfac = function CmacsKpiGroupComponent_Factory(t) { return new (t || CmacsKpiGroupComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.UtilService)); };
CmacsKpiGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsKpiGroupComponent, selectors: [["cmacs-kpi-group"]], viewQuery: function CmacsKpiGroupComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1, TemplateRef);
        i0.ɵɵviewQuery(_c1, 1, ElementRef);
        i0.ɵɵviewQuery(_c2, 1, ElementRef);
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
    } }, directives: [i2.NgIf, i3.NzRowDirective, i2.NgForOf, i4.CmacsCompactTableComponent, i5.NzSkeletonComponent], styles: [".legend-column[_ngcontent-%COMP%]{display:table-cell;float:left;font-family:Roboto-Regular;font-size:12px;color:#656c79;cursor:pointer;white-space:nowrap;padding-top:8px}.legend-left-icon[_ngcontent-%COMP%], .legend-right-icon[_ngcontent-%COMP%]{top:5px;font-size:19px;padding-left:5px;padding-right:5px;cursor:pointer}.legend-left-icon[_ngcontent-%COMP%]{position:absolute;z-index:2;left:0;top:0}.legend-right-icon[_ngcontent-%COMP%]{position:absolute;right:0;top:0}.legend-text[_ngcontent-%COMP%]{padding-left:6px;padding-right:20px}.legend-column[_ngcontent-%COMP%]:last-child   .legend-text[_ngcontent-%COMP%]{padding-right:0}.legend-bar[_ngcontent-%COMP%]{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row[_ngcontent-%COMP%]{width:100%;margin-bottom:32px;display:flex;place-content:flex-end}.legend-data[_ngcontent-%COMP%]{display:flex;overflow:hidden;margin-right:28px;text-align:right;margin-left:25px}.chart-content[_ngcontent-%COMP%]{text-align:center;margin-bottom:25px}.chart-dot[_ngcontent-%COMP%]{width:9px;height:9px;border-radius:5px;display:inline-block;margin-left:13px}.sd-content[_ngcontent-%COMP%]{position:relative}  .chart-data-table cmacs-compact-table .cmacs-compact-table-input-number-icon-view{display:none}  .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs,   .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs .ant-table-row-expand-icon,   .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font,   .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font:hover{background-color:#fff!important}  .chart-data-table .cmacs-compact-table .ant-table-header,   .chart-data-table .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-header-logs)>td,   .chart-data-table .cmacs-compact-table .ant-table-thead>tr>th{background-color:#f6f7fb!important}.chart-content[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{margin:0 auto}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsKpiGroupComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-kpi-group',
                templateUrl: './cmacs-kpi-group.component.html',
                styleUrls: ['./cmacs-kpi-group.component.css']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGktZ3JvdXAvY21hY3Mta3BpLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGktZ3JvdXAvY21hY3Mta3BpLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBaUIsVUFBVSxFQUEyQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0lDR3ZLLGdDQUFnRjtJQUFqRCxvTUFBdUI7SUFDcEQsd0JBQTJDO0lBQzdDLGlCQUFPOzs7O0lBRUwsZ0NBQXFGO0lBQS9CLCtPQUE4QjtJQUNsRiwyQkFBc0U7SUFDdEUsZ0NBQTBCO0lBQUEsWUFBYTtJQUFBLGlCQUFPO0lBQ2hELGlCQUFPOzs7SUFGQyxlQUFxQztJQUFyQyxrREFBcUM7SUFDakIsZUFBYTtJQUFiLG1DQUFhOzs7O0lBRzNDLGdDQUFnRjtJQUExRSxtTUFBc0I7SUFDMUIsd0JBQTRDO0lBQzlDLGlCQUFPOzs7O0lBT1AsK0NBRXVFO0lBRHJFLDhRQUF3QztJQUM2QixpQkFBc0I7OztJQUYxQix3Q0FBa0IsK0NBQUEsa0JBQUEsY0FBQSxvQkFBQSwwQkFBQSwwQkFBQSx5QkFBQTs7O0lBckJ6Riw4QkFBMEM7SUFFeEMsOEJBQStCO0lBQzdCLCtFQUVPO0lBQ1AsaUNBQXdDO0lBQ3RDLCtFQUdPO0lBQ1QsaUJBQU07SUFDTiwrRUFFTztJQUNULGlCQUFNO0lBRU4sK0JBQWtDO0lB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RixTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ0YsU0FBUztrQkFBdkUsU0FBUzttQkFBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDVyxhQUFhO2tCQUFwRixTQUFTO21CQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUVyRCxTQUFTO2tCQUFsQixNQUFNO1lBR0UsVUFBVTtrQkFBbEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBSUcsSUFBSTtrQkFBWixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXaWRnZXRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtYWN0aW9uLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91dGlsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1rcGktZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rcGktZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWtwaS1ncm91cC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzS3BpR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbHVtblRlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiBmYWxzZSB9KSBjb2x1bW5UZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+O1xyXG4gIEBWaWV3Q2hpbGQoJ2NoYXJ0Y2FudmFzJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIGNhbnZhc1JlZjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdsZWdlbmRDb250ZW50JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIHB1YmxpYyBsZWdlbmRDb250ZW50OiBFbGVtZW50UmVmPGFueT47XHJcblxyXG4gIEBPdXRwdXQoKSBjbGlja01lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLy8gY29udGFpbmVyXHJcbiAgQElucHV0KCkgaGVhZGVyVGV4dCA9ICcnO1xyXG4gIEBJbnB1dCgpIGZvb3RlclRleHQgPSAnJztcclxuICBASW5wdXQoKSBmb290ZXJWYWx1ZSA9ICcnO1xyXG5cclxuICAvLyBjb250ZW50XHJcbiAgLy8gd2lkdGgsIGhlaWdodFxyXG4gIEBJbnB1dCgpIHZpZXchOiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBkYXRhITogYW55W107XHJcbiAgQElucHV0KCkgY29sdW1uc0hlYWRlcjogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgZGlzcGxheUFycm93QnRucyA9IHRydWU7XHJcblxyXG4gIC8vIGNoYXJ0XHJcbiAgY2hhcnRXaWR0aCA9IDEwNDtcclxuICBmb250Q2hhcnROdW1iZXIgPSAyMDtcclxuICBjb2wyID0gMTUwO1xyXG4gIGNvbDMgPSA3MDtcclxuICBtaW5XaWR0aCA9IDMwMDtcclxuICBzaG93Q2hhcnQgPSBmYWxzZTtcclxuICBzY3JvbGxZID0gMjAwO1xyXG4gIHAgPSAxO1xyXG4gIHNjcm9sbCA9IHt4OiAnMzAwcHgnLCB5OiB0aGlzLnNjcm9sbFkgKyAncHgnIH07XHJcblxyXG4gIGRhdGFUYWJsZTogYW55W107XHJcbiAgY29uZmlndXJhdGlvbkV4cGFuZGFibGVSb3dzOiBhbnk7XHJcbiAgbG9hZGluZyA9IHRydWU7XHJcbiAgc2VsZWN0ZWRJdGVtITogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHV0aWxTZXJ2aWNlOiBVdGlsU2VydmljZVxyXG4gICAgLy9cclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5zZXRTY3JvbGwoKTtcclxuICAgIC8vXHJcbiAgICB0aGlzLnAgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMucCA9IHRoaXMudmlld1swXSA+IHRoaXMubWluV2lkdGggPyB0aGlzLnZpZXdbMF0gLyB0aGlzLm1pbldpZHRoIDogMTtcclxuICAgICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL1xyXG4gICAgdGhpcy5zaG93Q2hhcnQgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuZGF0YVswXS5rZXk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kcmF3Q2FudmFzKCk7XHJcbiAgICAgIHRoaXMuc2V0Q29uZmlndXJhdGlvbigpO1xyXG4gICAgICB0aGlzLnNldERhdGEoKTtcclxuICAgIH0sIDApO1xyXG4gICAgdGhpcy5zaG93Q2hhcnQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2hvd0Fycm93QnRucygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5yZXNpemUoKTtcclxuICAgIHRoaXMuc2hvd0Fycm93QnRucygpO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplKCkge1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnZpZXdbMF07XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt3aWR0aH1weGApO1xyXG4gIH1cclxuICAvL1xyXG5cclxuICBzZXRTY3JvbGwoKSB7XHJcbiAgICBsZXQgcCA9IDE7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgcCA9IHRoaXMudmlld1sxXSAqIDAuNSA+IHRoaXMuc2Nyb2xsWSA/IHRoaXMudmlld1sxXSAqIDAuNSAvIHRoaXMuc2Nyb2xsWSA6IDE7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNjcm9sbCA9IHt4OiAnMzAwcHgnLCB5OiB0aGlzLnNjcm9sbFkgKiBwICsgJ3B4JyB9O1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsUmlnaHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6ICh0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0IC0gNDApLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxMZWZ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiAodGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCArIDQwKSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcbiAgZHJhd0NhbnZhcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmRhdGEuZmluZCh4ID0+IHgua2V5ID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XHJcbiAgICBpZiAodGhpcy5jYW52YXNSZWYgJiYgaXRlbSkge1xyXG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhc1JlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5jaGFydFdpZHRoICogdGhpcy5wO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5jaGFydFdpZHRoICogdGhpcy5wO1xyXG4gICAgICAvL1xyXG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgLy8gdG90YWxzXHJcbiAgICAgIGNvbnN0IHRvdGFsU2hvdyA9IHRoaXMuZ2V0VG90YWxDYXRlZyhpdGVtLmRhdGEpO1xyXG4gICAgICBjb25zdCB0b3RhbCA9IHRoaXMuZGF0YS5tYXAoeCA9PiB0aGlzLmdldFRvdGFsQ2F0ZWcoeC5kYXRhKSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgICAgIGxldCBzdGFydEFuZ2xlID0gMDtcclxuXHJcbiAgICAgIC8vIGRyYXcgZGF0YVxyXG4gICAgICBmb3IgKGNvbnN0IGNhdGVnIG9mIHRoaXMuZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsRyA9ICB0aGlzLmdldFRvdGFsQ2F0ZWcoY2F0ZWcuZGF0YSk7XHJcbiAgICAgICAgY29uc3Qgc2xpY2VBbmdsZSA9IDIgKiBNYXRoLlBJICogdG90YWxHIC8gdG90YWw7XHJcbiAgICAgICAgaWYgKHNsaWNlQW5nbGUgPiAwICkge1xyXG4gICAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoIC8gMixcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgIE1hdGgubWluKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKSAtICgodGhpcy5zZWxlY3RlZEl0ZW0gPT09IGNhdGVnLmtleSkgPyAxMCAqIHRoaXMucCA6IDYgKiB0aGlzLnApLFxyXG4gICAgICAgICAgICBzdGFydEFuZ2xlLFxyXG4gICAgICAgICAgICBzdGFydEFuZ2xlICsgc2xpY2VBbmdsZSAtIDAuMDUsXHJcbiAgICAgICAgICAgIGNhdGVnLmNvbG9yLFxyXG4gICAgICAgICAgICAodGhpcy5zZWxlY3RlZEl0ZW0gPT09IGNhdGVnLmtleSkgPyAxNSAqIHRoaXMucCA6IDcgKiB0aGlzLnBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzdGFydEFuZ2xlICs9IHNsaWNlQW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIGRyYXcgdmFsdWVcclxuICAgICAgY3R4LmZvbnQgPSB0aGlzLmZvbnRDaGFydE51bWJlciAqIHRoaXMucCArICdweCBSb2JvdG8tUmVndWxhciAnO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gJyMzYjNmNDYnO1xyXG4gICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnJyArIHRvdGFsU2hvdywgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLndpZHRoIC8gMiArIDUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd1BpZVNsaWNlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlcixcclxuICAgICAgICAgICAgICAgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlciwgY29sb3I6IGFueSwgbGluZVdpZHRoOiBudW1iZXIgKSB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSAtIE1hdGguUEkgLyAyLCBlbmRBbmdsZSAtIE1hdGguUEkgLyAyLCBmYWxzZSk7XHJcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRUb3RhbENhdGVnKGRhdGE6IGFueVtdKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBkYXRhLm1hcCh4ID0+IHgudmFsdWUpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29uZmlndXJhdGlvbigpOiB2b2lkIHtcclxuICAgIC8vXHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb25FeHBhbmRhYmxlUm93cyA9IHtcclxuICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2VsZFR5cGU6IDMsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnJyxcclxuICAgICAgICAgIHByb3BlcnR5OiAnY29sb3InLFxyXG4gICAgICAgICAgd2lkdGg6ICc2MHB4JyxcclxuICAgICAgICAgIG1pbldpZHRoOiA2MCxcclxuICAgICAgICAgIG1heFdpZHRoOiAxMjAsXHJcbiAgICAgICAgICByZXNpemFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAwLFxyXG4gICAgICAgICAgZGlzcGxheTogdGhpcy5jb2x1bW5zSGVhZGVyWzBdLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICduYW1lJyxcclxuICAgICAgICAgIGVkaXRUZW1wbGF0ZTogMyxcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLmNvbDIgKiB0aGlzLnAgKyAncHgnLFxyXG4gICAgICAgICAgbWluV2lkdGg6IHRoaXMuY29sMiAqIHRoaXMucCAtIDEwLFxyXG4gICAgICAgICAgbWF4V2lkdGg6IHRoaXMuY29sMiAqIHRoaXMucCArIDEwMCxcclxuICAgICAgICAgIHJlc2l6YWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2VsZFR5cGU6IDAsXHJcbiAgICAgICAgICBkaXNwbGF5OiB0aGlzLmNvbHVtbnNIZWFkZXJbMV0sXHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ3ZhbHVlJyxcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLmNvbDMgKiB0aGlzLnAgKyAncHgnLFxyXG4gICAgICAgICAgbWluV2lkdGg6IHRoaXMuY29sMyAqIHRoaXMucCAtIDEwLFxyXG4gICAgICAgICAgZWRpdFRlbXBsYXRlOiAyLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBmaWVsZElkOiAna2V5JyxcclxuICAgICAgZmllbGRSYXRlOiAnZmF2J1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldERhdGEoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgY29uc3QgdGVtcDogYW55W10gPSBbXTtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSkge1xyXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLmZpbmQoeCA9PiB4LmtleSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgICAgIGtleTogaXRlbS5rZXksXHJcbiAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICBjb2xvcjogIHtcclxuICAgICAgICAgICAgcmVmOiB0aGlzLmNvbHVtblRlbXBsYXRlLFxyXG4gICAgICAgICAgICBjb250ZXh0OiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGRhdGEuY29sb3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0Q2hpbGRyZW4oaXRlbS5yb3dzKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGVtcC5wdXNoKG5ld0l0ZW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGF0YVRhYmxlID0gdGVtcDtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBnZXRDaGlsZHJlbihpdGVtczogYW55W10pOiBhbnlbXSB7XHJcbiAgICBjb25zdCBvdXRwdXQ6IGFueVtdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgb3V0cHV0LnB1c2goe1xyXG4gICAgICAgIGtleTogaXRlbS5rZXksXHJcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgIGNvbG9yOiB7fSxcclxuICAgICAgICB2YWx1ZTogJydcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH1cclxuXHJcbiAgbWVudUNsaWNrKHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tNZW51LmVtaXQodHlwZSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VEYXRhKGtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGtleTtcclxuICAgIHRoaXMuc2V0RGF0YSgpO1xyXG4gICAgdGhpcy5kcmF3Q2FudmFzKCk7XHJcbiAgfVxyXG5cclxuICBzaG93QXJyb3dCdG5zKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGV4dCA9IHRoaXMuZGF0YS5tYXAoaSA9PiBpLm5hbWUgKyAnc3BhY2UnKTtcclxuICAgIGNvbnN0IHRzaXplID0gdGhpcy51dGlsU2VydmljZS5nZXRfdGV4X3NpemUodGV4dCwgJzEycHggUm9ib3RvLVJlZ3VsYXInKTtcclxuICAgIHRoaXMuZGlzcGxheUFycm93QnRucyA9IHRzaXplLndpZHRoID4gdGhpcy52aWV3WzBdIC0gMTU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0YVRhYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uRXhwYW5kYWJsZVJvd3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2hhcnRJbWFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNhbnZhc1JlZi5uYXRpdmVFbGVtZW50LnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwic2QtY29udGVudFwiICpuZ0lmPVwic2hvd0NoYXJ0XCI+XHJcbiAgPCEtLSBMZWdlbmQgLS0+XHJcbiAgPGRpdiBuei1yb3cgY2xhc3M9XCJsZWdlbmQtcm93XCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC1sZWZ0LWljb25cIiAoY2xpY2spPVwic2Nyb2xsUmlnaHQoKVwiICpuZ0lmPVwiZGlzcGxheUFycm93QnRuc1wiPlxyXG4gICAgICA8aSBjbGFzcz1cImljb25BcnJvd0xhcmdlLUNoZXZyb24tTGVmdFwiPjwvaT5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxkaXYgI2xlZ2VuZENvbnRlbnQgY2xhc3M9XCJsZWdlbmQtZGF0YVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC1jb2x1bW5cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhXCIgKGNsaWNrKT1cImNoYW5nZURhdGEoaXRlbS5rZXkpXCI+XHJcbiAgICAgICAgPHNwYW4gW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiaXRlbS5jb2xvclwiIGNsYXNzPVwibGVnZW5kLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC10ZXh0XCI+e3tpdGVtLm5hbWV9fTwvc3Bhbj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3BhbiAoY2xpY2spPVwic2Nyb2xsTGVmdCgpXCIgY2xhc3M9XCJsZWdlbmQtcmlnaHQtaWNvblwiICpuZ0lmPVwiZGlzcGxheUFycm93QnRuc1wiPlxyXG4gICAgICA8aSBjbGFzcz1cImljb25BcnJvd0xhcmdlLUNoZXZyb24tUmlnaHRcIj48L2k+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLSBDaGFydCAtLT5cclxuICA8ZGl2IG56LXJvdyBjbGFzcz1cImNoYXJ0LWNvbnRlbnRcIj5cclxuICAgIDxjYW52YXMgI2NoYXJ0Y2FudmFzIGNsYXNzPVwiY2hhcnQtY2FudmFzXCI+PC9jYW52YXM+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBuei1yb3cgY2xhc3M9XCJjaGFydC1kYXRhLXRhYmxlXCI+XHJcbiAgICA8Y21hY3MtY29tcGFjdC10YWJsZSAqbmdJZj1cIiFsb2FkaW5nICYmIGRhdGFUYWJsZTsgZWxzZSBlbHNlQmxvY2tcIiBbZGF0YV09XCJkYXRhVGFibGVcIlxyXG4gICAgICBbKGNvbmZpZyldPVwiY29uZmlndXJhdGlvbkV4cGFuZGFibGVSb3dzXCIgW2luZGVudFNpemVdPVwiNDBcIiBbbG9nc109XCJ0cnVlXCIgW2V4cGFuZGFibGVdPVwidHJ1ZVwiXHJcbiAgICAgIFtzY3JvbGxdPVwic2Nyb2xsXCIgW2Zyb250UGFnaW5hdGlvbl09XCJmYWxzZVwiIFtzaG93UGFnaW5hdGlvbl09XCJmYWxzZVwiPjwvY21hY3MtY29tcGFjdC10YWJsZT5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxuZy10ZW1wbGF0ZSAjY29sdW1uVGVtcGxhdGUgbGV0LWNvbG9yPVwiY29sb3JcIj5cclxuICA8ZGl2IGNsYXNzPVwiY2hhcnQtZG90XCIgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sb3JcIj48L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPlxyXG4gIDxuei1za2VsZXRvbiBbbnpBY3RpdmVdPVwidHJ1ZVwiIFtuelBhcmFncmFwaF09XCJ7IHJvd3M6IDggfVwiPjwvbnotc2tlbGV0b24+XHJcbjwvbmctdGVtcGxhdGU+Il19