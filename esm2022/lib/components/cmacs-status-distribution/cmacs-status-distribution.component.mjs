import { Component, Output, EventEmitter, Input, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/util.service";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/grid";
import * as i4 from "../cmacs-compact-table/cmacs-compact-table.component";
const _c0 = ["columnTemplate"];
const _c1 = ["legendContent"];
function CmacsStatusDistributionComponent_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵlistener("click", function CmacsStatusDistributionComponent_div_0_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.scrollRight()); });
    i0.ɵɵelement(1, "i", 14);
    i0.ɵɵelementEnd();
} }
function CmacsStatusDistributionComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵelement(1, "span", 16);
    i0.ɵɵelementStart(2, "span", 17);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", item_r10.color);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r10.name);
} }
function CmacsStatusDistributionComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function CmacsStatusDistributionComponent_div_0_span_6_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.scrollLeft()); });
    i0.ɵɵelement(1, "i", 19);
    i0.ɵɵelementEnd();
} }
function CmacsStatusDistributionComponent_div_0_cmacs_compact_table_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-compact-table", 20);
    i0.ɵɵlistener("configChange", function CmacsStatusDistributionComponent_div_0_cmacs_compact_table_10_Template_cmacs_compact_table_configChange_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.configurationExpandableRows = $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", ctx_r7.dataTable)("config", ctx_r7.configurationExpandableRows)("indentSize", 40)("logs", true)("expandable", true)("scroll", ctx_r7.scroll)("frontPagination", false)("showPagination", false);
} }
function CmacsStatusDistributionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtemplate(2, CmacsStatusDistributionComponent_div_0_span_2_Template, 2, 0, "span", 4);
    i0.ɵɵelementStart(3, "div", 5, 6);
    i0.ɵɵtemplate(5, CmacsStatusDistributionComponent_div_0_span_5_Template, 4, 3, "span", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CmacsStatusDistributionComponent_div_0_span_6_Template, 2, 0, "span", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 9);
    i0.ɵɵelement(8, "canvas", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 11);
    i0.ɵɵtemplate(10, CmacsStatusDistributionComponent_div_0_cmacs_compact_table_10_Template, 1, 8, "cmacs-compact-table", 12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.displayArrowBtns);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.data);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.displayArrowBtns);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("id", "canvas-", ctx_r0.id, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.dataTable);
} }
function CmacsStatusDistributionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const color_r15 = ctx.color;
    i0.ɵɵstyleProp("background-color", color_r15);
} }
export class CmacsStatusDistributionComponent {
    constructor(renderer, elementRef, util) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.util = util;
        this.clickMenu = new EventEmitter();
        this.columnsHeader = [];
        this.displayArrowBtns = true;
        // chart
        this.col2 = 150;
        this.col3 = 70;
        this.minWidth = 300;
        this.chartWidth = 300;
        this.showChart = false;
        this.scrollY = 100;
        this.p = 1;
        this.scroll = { x: '300px', y: this.scrollY + 'px' };
        this.id = util.uuidv4();
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
            this.drawCanvas();
            this.setConfiguration();
            this.setData();
        }, 0);
        this.showChart = true;
        this.showArrowBtns();
    }
    ngAfterViewInit() {
        this.resize();
    }
    resize() {
        const width = this.view[0];
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${width}px`);
    }
    setScroll() {
        if (this.view && this.view.length === 2) {
            this.scrollY = this.view[1] - 100;
        }
        this.scroll = { x: '300px', y: this.scrollY + 'px' };
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
    setConfiguration() {
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
                    resizable: true,
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
        const temp = [];
        for (const item of this.data) {
            const newItem = {
                key: item.key,
                name: item.name,
                color: {
                    ref: this.columnTemplate,
                    context: {
                        color: item.color
                    }
                },
                value: item.value,
                children: []
            };
            for (let i = 0; i < item.rows.length; i++) {
                newItem.children.push({
                    key: item.key + '-' + i,
                    name: item.rows[i],
                    color: {},
                    value: ''
                });
            }
            temp.push(newItem);
        }
        this.dataTable = temp;
    }
    drawCanvas() {
        const canvas = document.getElementById('canvas-' + this.id);
        canvas.height = 40;
        canvas.width = this.view[0];
        if (canvas.getContext) {
            const context = canvas.getContext('2d');
            const total = this.data.map(x => x.value).reduce((a, b) => a + b, 0);
            let move = 0;
            for (const item of this.data) {
                if (item.value > 0) {
                    context.beginPath();
                    context.moveTo(move, 1);
                    context.lineWidth = 10;
                    const val = item.value;
                    move += val / total * canvas.width;
                    context.strokeStyle = item.color;
                    context.lineTo(move - 5, 1);
                    context.stroke();
                }
            }
        }
    }
    showArrowBtns() {
        const text = this.data.map(i => i.name + 'space');
        const tsize = this.util.get_tex_size(text, '12px Roboto-Regular');
        this.displayArrowBtns = tsize.width > this.view[0] - 15;
    }
    getDataTable() {
        return this.dataTable;
    }
    getConfiguration() {
        return this.configurationExpandableRows;
    }
    getChartImage() {
        const canvas = document.getElementById('canvas-' + this.id);
        return canvas.toDataURL('image/png');
    }
    static { this.ɵfac = function CmacsStatusDistributionComponent_Factory(t) { return new (t || CmacsStatusDistributionComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.UtilService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsStatusDistributionComponent, selectors: [["cmacs-status-distribution"]], viewQuery: function CmacsStatusDistributionComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5, TemplateRef);
            i0.ɵɵviewQuery(_c1, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columnTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.legendContent = _t.first);
        } }, inputs: { view: "view", data: "data", columnsHeader: "columnsHeader" }, outputs: { clickMenu: "clickMenu" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 1, consts: [["class", "sd-content", 4, "ngIf"], ["columnTemplate", ""], [1, "sd-content"], ["nz-row", "", 1, "legend-row"], ["class", "legend-left-icon", 3, "click", 4, "ngIf"], [1, "legend-data"], ["legendContent", ""], ["class", "legend-column", 4, "ngFor", "ngForOf"], ["class", "legend-right-icon", 3, "click", 4, "ngIf"], ["nz-row", "", 1, "char-content"], [1, "chart-canvas", 3, "id"], ["nz-row", "", 1, "chart-data-table"], [3, "data", "config", "indentSize", "logs", "expandable", "scroll", "frontPagination", "showPagination", "configChange", 4, "ngIf"], [1, "legend-left-icon", 3, "click"], [1, "iconArrowLarge-Chevron-Left"], [1, "legend-column"], [1, "legend-bar"], [1, "legend-text"], [1, "legend-right-icon", 3, "click"], [1, "iconArrowLarge-Chevron-Right"], [3, "data", "config", "indentSize", "logs", "expandable", "scroll", "frontPagination", "showPagination", "configChange"], [1, "chart-dot"]], template: function CmacsStatusDistributionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsStatusDistributionComponent_div_0_Template, 11, 5, "div", 0);
            i0.ɵɵtemplate(1, CmacsStatusDistributionComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showChart);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.NzRowDirective, i4.CmacsCompactTableComponent], styles: [".legend-column[_ngcontent-%COMP%]{display:table-cell;float:left;font-family:Roboto-Regular;font-size:12px;color:#656c79;white-space:nowrap;padding-top:8px}.legend-left-icon[_ngcontent-%COMP%], .legend-right-icon[_ngcontent-%COMP%]{top:5px;font-size:19px;padding-left:5px;padding-right:5px;cursor:pointer}.legend-left-icon[_ngcontent-%COMP%]{position:absolute;z-index:2;left:0}.legend-right-icon[_ngcontent-%COMP%]{position:absolute;right:0}.legend-text[_ngcontent-%COMP%]{padding-left:6px;padding-right:20px}.legend-column[_ngcontent-%COMP%]:last-child   .legend-text[_ngcontent-%COMP%]{padding-right:0}.legend-bar[_ngcontent-%COMP%]{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row[_ngcontent-%COMP%]{width:100%;margin-bottom:30px;display:flex;place-content:flex-end}.chart-content[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px}.legend-data[_ngcontent-%COMP%]{display:flex;overflow:hidden;margin-right:28px;text-align:right;margin-left:25px}.chart-dot[_ngcontent-%COMP%]{width:9px;height:9px;border-radius:5px;display:inline-block;margin-left:13px}  .chart-data-table cmacs-compact-table .cmacs-compact-table-input-number-icon-view{display:none}  .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs,   .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font,   .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font:hover,   .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#fff!important}  .chart-data-table .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-header-logs)>td,   .chart-data-table .cmacs-compact-table .ant-table-thead>tr>th{background-color:#f6f7fb!important}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsStatusDistributionComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-status-distribution', template: "<div class=\"sd-content\" *ngIf=\"showChart\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <span class=\"legend-left-icon\" (click)=\"scrollRight()\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Left\"></i>\r\n    </span>\r\n    <div #legendContent class=\"legend-data\">\r\n      <span  class=\"legend-column\" *ngFor=\"let item of data\">\r\n        <span [style.background-color]=\"item.color\" class=\"legend-bar\"></span>\r\n        <span class=\"legend-text\">{{item.name}}</span>\r\n      </span>\r\n    </div>\r\n    <span (click)=\"scrollLeft()\" class=\"legend-right-icon\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Right\"></i>\r\n    </span>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"char-content\">\r\n    <canvas id=\"canvas-{{id}}\" class=\"chart-canvas\"></canvas>\r\n  </div>\r\n  <div nz-row class=\"chart-data-table\">\r\n    <cmacs-compact-table *ngIf=\"dataTable\" [data]=\"dataTable\" [(config)]=\"configurationExpandableRows\" [indentSize]=\"40\"\r\n      [logs]=\"true\" [expandable]=\"true\" [scroll]=\"scroll\" [frontPagination]=\"false\" [showPagination]=\"false\">\r\n    </cmacs-compact-table>\r\n  </div>\r\n</div>\r\n<ng-template #columnTemplate let-color=\"color\">\r\n  <div class=\"chart-dot\" [style.background-color]=\"color\"></div>\r\n</ng-template>", styles: [".legend-column{display:table-cell;float:left;font-family:Roboto-Regular;font-size:12px;color:#656c79;white-space:nowrap;padding-top:8px}.legend-left-icon,.legend-right-icon{top:5px;font-size:19px;padding-left:5px;padding-right:5px;cursor:pointer}.legend-left-icon{position:absolute;z-index:2;left:0}.legend-right-icon{position:absolute;right:0}.legend-text{padding-left:6px;padding-right:20px}.legend-column:last-child .legend-text{padding-right:0}.legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%;margin-bottom:30px;display:flex;place-content:flex-end}.chart-content{text-align:center;margin-bottom:30px}.legend-data{display:flex;overflow:hidden;margin-right:28px;text-align:right;margin-left:25px}.chart-dot{width:9px;height:9px;border-radius:5px;display:inline-block;margin-left:13px}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-input-number-icon-view{display:none}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font:hover,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#fff!important}::ng-deep .chart-data-table .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-header-logs)>td,::ng-deep .chart-data-table .cmacs-compact-table .ant-table-thead>tr>th{background-color:#f6f7fb!important}\n"] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.UtilService }]; }, { columnTemplate: [{
            type: ViewChild,
            args: ['columnTemplate', { read: TemplateRef, static: false }]
        }], legendContent: [{
            type: ViewChild,
            args: ['legendContent', { read: ElementRef, static: false }]
        }], clickMenu: [{
            type: Output
        }], view: [{
            type: Input
        }], data: [{
            type: Input
        }], columnsHeader: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbi9jbWFjcy1zdGF0dXMtZGlzdHJpYnV0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zdGF0dXMtZGlzdHJpYnV0aW9uL2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBaUIsU0FBUyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUNHcEosZ0NBQWdGO0lBQWpELG1MQUFTLGVBQUEsb0JBQWEsQ0FBQSxJQUFDO0lBQ3BELHdCQUEyQztJQUM3QyxpQkFBTzs7O0lBRUwsZ0NBQXVEO0lBQ3JELDJCQUFzRTtJQUN0RSxnQ0FBMEI7SUFBQSxZQUFhO0lBQUEsaUJBQU8sRUFBQTs7O0lBRHhDLGVBQXFDO0lBQXJDLGtEQUFxQztJQUNqQixlQUFhO0lBQWIsbUNBQWE7Ozs7SUFHM0MsZ0NBQWdGO0lBQTFFLHFMQUFTLGVBQUEsb0JBQVksQ0FBQSxJQUFDO0lBQzFCLHdCQUE0QztJQUM5QyxpQkFBTzs7OztJQU9QLCtDQUN5RztJQUQvQyx3U0FBd0M7SUFFbEcsaUJBQXNCOzs7SUFGaUIsdUNBQWtCLDhDQUFBLGtCQUFBLGNBQUEsb0JBQUEseUJBQUEsMEJBQUEseUJBQUE7OztJQXJCN0QsOEJBQTBDLGFBQUE7SUFHdEMseUZBRU87SUFDUCxpQ0FBd0M7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SUFDMUMsQ0FBQztJQUVNLGFBQWE7UUFDbEIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBc0IsQ0FBQztRQUNqRixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztpR0FwTVUsZ0NBQWdDO29FQUFoQyxnQ0FBZ0M7bUNBRU4sV0FBVzttQ0FDWixVQUFVOzs7Ozs7WUNaaEQsa0ZBeUJNO1lBQ04sa0lBRWM7O1lBNUJXLG9DQUFlOzs7dUZEUzNCLGdDQUFnQztjQUw1QyxTQUFTOzJCQUNFLDJCQUEyQjsrR0FNOEIsY0FBYztrQkFBaEYsU0FBUzttQkFBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNPLGFBQWE7a0JBQXBGLFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBRXJELFNBQVM7a0JBQWxCLE1BQU07WUFHRSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiwgT25DaGFuZ2VzLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFdpZGdldEFjdGlvblR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3dpZGdldC1hY3Rpb24tdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1N0YXR1c0Rpc3RyaWJ1dGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29sdW1uVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IGZhbHNlIH0pIGNvbHVtblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7fT47XHJcbiAgQFZpZXdDaGlsZCgnbGVnZW5kQ29udGVudCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgbGVnZW5kQ29udGVudDogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vIGNvbnRlbnRcclxuICBASW5wdXQoKSB2aWV3ITogbnVtYmVyW107XHJcbiAgQElucHV0KCkgZGF0YSE6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNvbHVtbnNIZWFkZXI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGRpc3BsYXlBcnJvd0J0bnMgPSB0cnVlO1xyXG5cclxuICAvLyBjaGFydFxyXG4gIGNvbDIgPSAxNTA7XHJcbiAgY29sMyA9IDcwO1xyXG4gIG1pbldpZHRoID0gMzAwO1xyXG4gIGNoYXJ0V2lkdGggPSAzMDA7XHJcbiAgc2hvd0NoYXJ0ID0gZmFsc2U7XHJcbiAgc2Nyb2xsWSA9IDEwMDtcclxuICBwID0gMTtcclxuICBzY3JvbGwgPSB7eDogJzMwMHB4JywgeTogdGhpcy5zY3JvbGxZICsgJ3B4JyB9O1xyXG5cclxuICAvL1xyXG4gIGlkO1xyXG4gIGRhdGFUYWJsZTogYW55W107XHJcbiAgY29uZmlndXJhdGlvbkV4cGFuZGFibGVSb3dzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB1dGlsOiBVdGlsU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5pZCA9IHV0aWwudXVpZHY0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5zZXRTY3JvbGwoKTtcclxuICAgIC8vXHJcbiAgICB0aGlzLnAgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMucCA9IHRoaXMudmlld1swXSA+IHRoaXMubWluV2lkdGggPyB0aGlzLnZpZXdbMF0gLyB0aGlzLm1pbldpZHRoIDogMTtcclxuICAgICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL1xyXG4gICAgdGhpcy5zaG93Q2hhcnQgPSBmYWxzZTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5kcmF3Q2FudmFzKCk7XHJcbiAgICAgIHRoaXMuc2V0Q29uZmlndXJhdGlvbigpO1xyXG4gICAgICB0aGlzLnNldERhdGEoKTtcclxuICAgIH0sIDApO1xyXG4gICAgdGhpcy5zaG93Q2hhcnQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2hvd0Fycm93QnRucygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5yZXNpemUoKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy52aWV3WzBdO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7d2lkdGh9cHhgKTtcclxuICB9XHJcblxyXG4gIHNldFNjcm9sbCgpIHtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLnNjcm9sbFkgPSB0aGlzLnZpZXdbMV0gLSAxMDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNjcm9sbCA9IHt4OiAnMzAwcHgnLCB5OiB0aGlzLnNjcm9sbFkgKyAncHgnIH07XHJcbiAgfVxyXG5cclxuICBzY3JvbGxSaWdodCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvKHsgbGVmdDogKHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgLSA0MCksIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG4gIHNjcm9sbExlZnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6ICh0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ICsgNDApLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfVxyXG5cclxuICBtZW51Q2xpY2sodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGlja01lbnUuZW1pdCh0eXBlKTtcclxuICB9XHJcblxyXG4gIHNldENvbmZpZ3VyYXRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb25FeHBhbmRhYmxlUm93cyA9IHtcclxuICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2VsZFR5cGU6IDMsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnJyxcclxuICAgICAgICAgIHByb3BlcnR5OiAnY29sb3InLFxyXG4gICAgICAgICAgd2lkdGg6ICc2MHB4JyxcclxuICAgICAgICAgIG1pbldpZHRoOiA2MCxcclxuICAgICAgICAgIG1heFdpZHRoOiAxMjAsXHJcbiAgICAgICAgICByZXNpemFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAwLFxyXG4gICAgICAgICAgZGlzcGxheTogdGhpcy5jb2x1bW5zSGVhZGVyWzBdLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICduYW1lJyxcclxuICAgICAgICAgIGVkaXRUZW1wbGF0ZTogMyxcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLmNvbDIgKiB0aGlzLnAgKyAncHgnLFxyXG4gICAgICAgICAgbWluV2lkdGg6IHRoaXMuY29sMiAqIHRoaXMucCAtIDEwLFxyXG4gICAgICAgICAgbWF4V2lkdGg6IHRoaXMuY29sMiAqIHRoaXMucCArIDEwMCxcclxuICAgICAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAwLFxyXG4gICAgICAgICAgZGlzcGxheTogdGhpcy5jb2x1bW5zSGVhZGVyWzFdLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICd2YWx1ZScsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5jb2wzICogdGhpcy5wICsgJ3B4JyxcclxuICAgICAgICAgIG1pbldpZHRoOiB0aGlzLmNvbDMgKiB0aGlzLnAgLSAxMCxcclxuICAgICAgICAgIGVkaXRUZW1wbGF0ZTogMixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgZmllbGRJZDogJ2tleScsXHJcbiAgICAgIGZpZWxkUmF0ZTogJ2ZhdidcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXREYXRhKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGVtcDogYW55W10gPSBbXTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmRhdGEpIHtcclxuICAgICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgcmVmOiB0aGlzLmNvbHVtblRlbXBsYXRlLFxyXG4gICAgICAgICAgY29udGV4dDoge1xyXG4gICAgICAgICAgICBjb2xvcjogaXRlbS5jb2xvclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgICAgY2hpbGRyZW46IFtdXHJcbiAgICAgIH07XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbS5yb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbmV3SXRlbS5jaGlsZHJlbi5wdXNoKHtcclxuICAgICAgICAgIGtleTogaXRlbS5rZXkgKyAnLScgKyBpLFxyXG4gICAgICAgICAgbmFtZTogaXRlbS5yb3dzW2ldLFxyXG4gICAgICAgICAgY29sb3I6IHsgfSxcclxuICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRlbXAucHVzaChuZXdJdGVtKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YVRhYmxlID0gdGVtcDtcclxuICB9XHJcblxyXG4gIGRyYXdDYW52YXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzLScgKyB0aGlzLmlkKSAgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gNDA7XHJcbiAgICBjYW52YXMud2lkdGggPSB0aGlzLnZpZXdbMF07XHJcbiAgICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcclxuICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjb25zdCB0b3RhbCA9IHRoaXMuZGF0YS5tYXAoeCA9PiB4LnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgbGV0IG1vdmUgPSAwO1xyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5kYXRhKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0udmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgY29udGV4dC5tb3ZlVG8obW92ZSwgMSk7XHJcbiAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDEwO1xyXG4gICAgICAgICAgY29uc3QgdmFsID0gaXRlbS52YWx1ZTtcclxuICAgICAgICAgIG1vdmUgKz0gdmFsIC8gdG90YWwgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gaXRlbS5jb2xvcjtcclxuICAgICAgICAgIGNvbnRleHQubGluZVRvKG1vdmUgLSA1LCAxKTtcclxuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd0Fycm93QnRucygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRleHQgPSB0aGlzLmRhdGEubWFwKGkgPT4gaS5uYW1lICsgJ3NwYWNlJyk7XHJcbiAgICBjb25zdCB0c2l6ZSA9IHRoaXMudXRpbC5nZXRfdGV4X3NpemUodGV4dCwgJzEycHggUm9ib3RvLVJlZ3VsYXInKTtcclxuICAgIHRoaXMuZGlzcGxheUFycm93QnRucyA9IHRzaXplLndpZHRoID4gdGhpcy52aWV3WzBdIC0gMTU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0YVRhYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uRXhwYW5kYWJsZVJvd3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2hhcnRJbWFnZSgpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMtJyArIHRoaXMuaWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwic2QtY29udGVudFwiICpuZ0lmPVwic2hvd0NoYXJ0XCI+XHJcbiAgPCEtLSBMZWdlbmQgLS0+XHJcbiAgPGRpdiBuei1yb3cgY2xhc3M9XCJsZWdlbmQtcm93XCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC1sZWZ0LWljb25cIiAoY2xpY2spPVwic2Nyb2xsUmlnaHQoKVwiICpuZ0lmPVwiZGlzcGxheUFycm93QnRuc1wiPlxyXG4gICAgICA8aSBjbGFzcz1cImljb25BcnJvd0xhcmdlLUNoZXZyb24tTGVmdFwiPjwvaT5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxkaXYgI2xlZ2VuZENvbnRlbnQgY2xhc3M9XCJsZWdlbmQtZGF0YVwiPlxyXG4gICAgICA8c3BhbiAgY2xhc3M9XCJsZWdlbmQtY29sdW1uXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiPlxyXG4gICAgICAgIDxzcGFuIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cIml0ZW0uY29sb3JcIiBjbGFzcz1cImxlZ2VuZC1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsZWdlbmQtdGV4dFwiPnt7aXRlbS5uYW1lfX08L3NwYW4+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHNwYW4gKGNsaWNrKT1cInNjcm9sbExlZnQoKVwiIGNsYXNzPVwibGVnZW5kLXJpZ2h0LWljb25cIiAqbmdJZj1cImRpc3BsYXlBcnJvd0J0bnNcIj5cclxuICAgICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1DaGV2cm9uLVJpZ2h0XCI+PC9pPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gQ2hhcnQgLS0+XHJcbiAgPGRpdiBuei1yb3cgY2xhc3M9XCJjaGFyLWNvbnRlbnRcIj5cclxuICAgIDxjYW52YXMgaWQ9XCJjYW52YXMte3tpZH19XCIgY2xhc3M9XCJjaGFydC1jYW52YXNcIj48L2NhbnZhcz5cclxuICA8L2Rpdj5cclxuICA8ZGl2IG56LXJvdyBjbGFzcz1cImNoYXJ0LWRhdGEtdGFibGVcIj5cclxuICAgIDxjbWFjcy1jb21wYWN0LXRhYmxlICpuZ0lmPVwiZGF0YVRhYmxlXCIgW2RhdGFdPVwiZGF0YVRhYmxlXCIgWyhjb25maWcpXT1cImNvbmZpZ3VyYXRpb25FeHBhbmRhYmxlUm93c1wiIFtpbmRlbnRTaXplXT1cIjQwXCJcclxuICAgICAgW2xvZ3NdPVwidHJ1ZVwiIFtleHBhbmRhYmxlXT1cInRydWVcIiBbc2Nyb2xsXT1cInNjcm9sbFwiIFtmcm9udFBhZ2luYXRpb25dPVwiZmFsc2VcIiBbc2hvd1BhZ2luYXRpb25dPVwiZmFsc2VcIj5cclxuICAgIDwvY21hY3MtY29tcGFjdC10YWJsZT5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxuZy10ZW1wbGF0ZSAjY29sdW1uVGVtcGxhdGUgbGV0LWNvbG9yPVwiY29sb3JcIj5cclxuICA8ZGl2IGNsYXNzPVwiY2hhcnQtZG90XCIgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sb3JcIj48L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT4iXX0=