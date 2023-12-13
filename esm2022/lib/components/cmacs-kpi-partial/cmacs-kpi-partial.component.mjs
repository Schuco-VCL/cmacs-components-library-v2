import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/skeleton";
import * as i3 from "ng-zorro-antd/grid";
import * as i4 from "../cmacs-kpioverview/cmacs-kpioverview.component";
import * as i5 from "../cmacs-compact-table/cmacs-compact-table.component";
const _c0 = function () { return [400, 400]; };
function CmacsKpiPartialComponent_cmacs_kpi_overview_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-kpi-overview", 6);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("view", i0.ɵɵpureFunction0(6, _c0))("showLegend", false)("data", ctx_r0.kpi)("titleKPI", ctx_r0.data.partLabel.charAt(0).toUpperCase() + ctx_r0.data.partLabel.slice(1))("colors", ctx_r0.colorsScheme)("titleValue", ctx_r0.data.part);
} }
function CmacsKpiPartialComponent_cmacs_compact_table_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-compact-table", 7);
    i0.ɵɵlistener("configChange", function CmacsKpiPartialComponent_cmacs_compact_table_4_Template_cmacs_compact_table_configChange_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.configuration = $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("data", ctx_r1.dataTable)("config", ctx_r1.configuration)("indentSize", 40)("logs", true)("expandable", true)("scroll", ctx_r1.scroll)("frontPagination", false)("showPagination", false);
} }
const _c1 = function () { return { rows: 8 }; };
function CmacsKpiPartialComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-skeleton", 8);
} if (rf & 2) {
    i0.ɵɵproperty("nzActive", true)("nzParagraph", i0.ɵɵpureFunction0(2, _c1));
} }
export class CmacsKpiPartialComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.scrollY = 200;
        this.scroll = { x: '434px', y: this.scrollY + 'px' };
        this.p = 1;
        this.loading = true;
        this.col2 = 150;
        this.col3 = 70;
        // chart
        this.minWidth = 434;
    }
    ngOnInit() {
        this.fillKPI();
    }
    ngOnChanges() {
        this.setScroll();
        this.p = 1;
        if (this.view && this.view.length === 2) {
            this.p = this.view[0] > this.minWidth ? this.view[0] / this.minWidth : 1;
            if (this.renderer) {
                this.resize();
            }
        }
        setTimeout(() => {
            this.setConfiguration();
            this.setData();
        }, 0);
    }
    setScroll() {
        let p = 1;
        if (this.view && this.view.length === 2) {
            p = this.view[1] * 0.5 > this.scrollY ? this.view[1] * 0.5 / this.scrollY : 1;
        }
        this.scroll = { x: '300px', y: this.scrollY * p + 'px' };
    }
    resize() {
        const width = this.view[0];
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${width}px`);
    }
    ngAfterViewInit() {
        this.resize();
    }
    fillKPI() {
        this.colorsScheme = ['#e6e6e6', this.data.color];
        this.kpi = [
            { count: this.data.total - this.data.part, description: '' },
            { count: this.data.part, description: '' }
        ];
    }
    setConfiguration() {
        this.configuration = {
            fields: [
                {
                    celdType: 0,
                    display: this.columnsHeader[0],
                    property: 'name',
                    editTemplate: 3,
                    width: `${this.col2 * this.p}px`,
                    minWidth: this.col2 * this.p - 10,
                    maxWidth: this.col2 * this.p + 100,
                    resizable: true
                },
                {
                    celdType: 0,
                    display: this.columnsHeader[1],
                    property: 'date',
                    width: `${this.col3 * this.p}px`,
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
        this.dataTable = [];
        this.data.children.forEach(x => {
            this.dataTable.push(this.getItemTable(x));
        });
        setTimeout(() => {
            this.loading = false;
        }, 0);
    }
    getItemTable(x) {
        return {
            key: x.key,
            name: x.name,
            date: x.date,
            children: x.children.length > 0 ? x.children.map(c => this.getItemTable(c)) : undefined
        };
    }
    static { this.ɵfac = function CmacsKpiPartialComponent_Factory(t) { return new (t || CmacsKpiPartialComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsKpiPartialComponent, selectors: [["cmacs-kpi-partial"]], inputs: { view: "view", data: "data", columnsHeader: "columnsHeader" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 3, consts: [[1, "sd-content"], ["nz-row", "", 1, "chart-content"], ["type", "doughnut", 3, "view", "showLegend", "data", "titleKPI", "colors", "titleValue", 4, "ngIf"], ["nz-row", "", 1, "chart-data-table"], [3, "data", "config", "indentSize", "logs", "expandable", "scroll", "frontPagination", "showPagination", "configChange", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["type", "doughnut", 3, "view", "showLegend", "data", "titleKPI", "colors", "titleValue"], [3, "data", "config", "indentSize", "logs", "expandable", "scroll", "frontPagination", "showPagination", "configChange"], [3, "nzActive", "nzParagraph"]], template: function CmacsKpiPartialComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, CmacsKpiPartialComponent_cmacs_kpi_overview_2_Template, 1, 7, "cmacs-kpi-overview", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, CmacsKpiPartialComponent_cmacs_compact_table_4_Template, 1, 8, "cmacs-compact-table", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(5, CmacsKpiPartialComponent_ng_template_5_Template, 1, 3, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r2 = i0.ɵɵreference(6);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.kpi);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.loading && ctx.dataTable)("ngIfElse", _r2);
        } }, dependencies: [i1.NgIf, i2.NzSkeletonComponent, i3.NzRowDirective, i4.CmacsKPIOverviewComponent, i5.CmacsCompactTableComponent], styles: [".chart-content[_ngcontent-%COMP%]{display:flex!important;align-items:center;justify-content:center}.sd-content[_ngcontent-%COMP%]{position:relative}  .chart-data-table cmacs-compact-table .cmacs-compact-table-input-number-icon-view{display:none}  .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs,   .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font,   .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font:hover,   .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#fff!important}  .chart-data-table .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-header-logs)>td,   .chart-data-table .cmacs-compact-table .ant-table-header,   .chart-data-table .cmacs-compact-table .ant-table-thead>tr>th{background-color:#f6f7fb!important}  .chart-content cmacs-kpi-overview{min-width:unset;display:unset!important;min-width:unset!important;min-height:unset!important;padding:unset!important;background-color:unset;margin-top:unset}  .chart-content .cmacs-kpi-overview-wrapper{height:unset!important;padding-top:0!important;margin-left:unset!important;margin-top:unset!important}  .chart-content .cmacs-kpi-overview-chart{top:-12px!important}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsKpiPartialComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-kpi-partial', template: "<div class=\"sd-content\">\r\n  <!-- Chart -->\r\n  <div nz-row class=\"chart-content\">\r\n    <cmacs-kpi-overview *ngIf=\"kpi\" type=\"doughnut\" [view]=\"[400, 400]\" [showLegend]=\"false\" [data]=\"kpi\"\r\n      [titleKPI]=\"data.partLabel.charAt(0).toUpperCase() + data.partLabel.slice(1)\" [colors]=\"colorsScheme\" [titleValue]=\"data.part\">\r\n    </cmacs-kpi-overview>\r\n  </div>\r\n  <!-- Data Table -->\r\n  <div nz-row class=\"chart-data-table\">\r\n    <cmacs-compact-table *ngIf=\"!loading && dataTable; else elseBlock\" [data]=\"dataTable\" [(config)]=\"configuration\"\r\n      [indentSize]=\"40\" [logs]=\"true\" [expandable]=\"true\" [scroll]=\"scroll\" [frontPagination]=\"false\"\r\n      [showPagination]=\"false\"></cmacs-compact-table>\r\n  </div>\r\n</div>\r\n\r\n<!-- loading -->\r\n<ng-template #elseBlock>\r\n  <nz-skeleton [nzActive]=\"true\" [nzParagraph]=\"{ rows: 8 }\"></nz-skeleton>\r\n</ng-template>", styles: [".chart-content{display:flex!important;align-items:center;justify-content:center}.sd-content{position:relative}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-input-number-icon-view{display:none}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font:hover,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#fff!important}::ng-deep .chart-data-table .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-header-logs)>td,::ng-deep .chart-data-table .cmacs-compact-table .ant-table-header,::ng-deep .chart-data-table .cmacs-compact-table .ant-table-thead>tr>th{background-color:#f6f7fb!important}::ng-deep .chart-content cmacs-kpi-overview{min-width:unset;display:unset!important;min-width:unset!important;min-height:unset!important;padding:unset!important;background-color:unset;margin-top:unset}::ng-deep .chart-content .cmacs-kpi-overview-wrapper{height:unset!important;padding-top:0!important;margin-left:unset!important;margin-top:unset!important}::ng-deep .chart-content .cmacs-kpi-overview-chart{top:-12px!important}\n"] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { view: [{
            type: Input
        }], data: [{
            type: Input
        }], columnsHeader: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLXBhcnRpYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWtwaS1wYXJ0aWFsL2NtYWNzLWtwaS1wYXJ0aWFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGktcGFydGlhbC9jbWFjcy1rcGktcGFydGlhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNHdEcsd0NBRXFCOzs7SUFGMkIsaURBQW1CLHFCQUFBLG9CQUFBLDRGQUFBLCtCQUFBLGdDQUFBOzs7O0lBTW5FLDhDQUUyQjtJQUYyRCx1UUFBMEI7SUFFckYsaUJBQXNCOzs7SUFGa0IsdUNBQWtCLGdDQUFBLGtCQUFBLGNBQUEsb0JBQUEseUJBQUEsMEJBQUEseUJBQUE7Ozs7SUFRdkYsaUNBQXlFOztJQUE1RCwrQkFBaUIsMkNBQUE7O0FET2hDLE1BQU0sT0FBTyx3QkFBd0I7SUF1Qm5DLFlBQ1UsUUFBbUIsRUFDbkIsVUFBc0I7UUFEdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBZGhDLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFDZCxXQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ2hELE1BQUMsR0FBRyxDQUFDLENBQUM7UUFDTixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUNYLFNB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QUUsQ0FBQyxDQUFDLElBQUk7WUFDWixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUN4RixDQUFBO0lBQ0gsQ0FBQzt5RkF4SFUsd0JBQXdCO29FQUF4Qix3QkFBd0I7WUN4QnJDLDhCQUF3QixhQUFBO1lBR3BCLHVHQUVxQjtZQUN2QixpQkFBTTtZQUVOLDhCQUFxQztZQUNuQyx5R0FFaUQ7WUFDbkQsaUJBQU0sRUFBQTtZQUlSLDBIQUVjOzs7WUFmVyxlQUFTO1lBQVQsOEJBQVM7WUFNUixlQUE2QjtZQUE3QixvREFBNkIsaUJBQUE7Ozt1RkRlMUMsd0JBQXdCO2NBTHBDLFNBQVM7MkJBQ0UsbUJBQW1CO3FGQU9wQixJQUFJO2tCQUFaLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgS1BJIH0gZnJvbSAnLi4vY21hY3Mta3BpL2NtYWNzLWtwaS5jb21wb25lbnQnO1xyXG5cclxuaW50ZXJmYWNlIEtQSVBhcnRpYWxSb3cge1xyXG4gIGtleTogc3RyaW5nLFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBkYXRlOiBzdHJpbmcgfCBudWxsLFxyXG4gIGNoaWxkcmVuOiBLUElQYXJ0aWFsUm93W11cclxufVxyXG5cclxuaW50ZXJmYWNlIEtQSVBhcnRpYWwge1xyXG4gIHRvdGFsOiBudW1iZXIsXHJcbiAgcGFydDogbnVtYmVyLFxyXG4gIHBhcnRMYWJlbDogc3RyaW5nLFxyXG4gIGNvbG9yOiBzdHJpbmcsXHJcbiAgY2hpbGRyZW46IEtQSVBhcnRpYWxSb3dbXVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWtwaS1wYXJ0aWFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mta3BpLXBhcnRpYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWtwaS1wYXJ0aWFsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NLcGlQYXJ0aWFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAvLyBjb250ZW50XHJcbiAgQElucHV0KCkgdmlldyE6IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIGRhdGEhOiBLUElQYXJ0aWFsO1xyXG4gIEBJbnB1dCgpIGNvbHVtbnNIZWFkZXI6IHN0cmluZ1tdO1xyXG5cclxuICAvLyB0YWJsZVxyXG4gIGRhdGFUYWJsZSE6IGFueVtdO1xyXG4gIGNvbmZpZ3VyYXRpb24hOiBHcmlkQ29uZmlnO1xyXG5cclxuICBzY3JvbGxZID0gMjAwO1xyXG4gIHNjcm9sbCA9IHsgeDogJzQzNHB4JywgeTogdGhpcy5zY3JvbGxZICsgJ3B4JyB9O1xyXG4gIHAgPSAxO1xyXG4gIGxvYWRpbmcgPSB0cnVlO1xyXG4gIGNvbDIgPSAxNTA7XHJcbiAgY29sMyA9IDcwO1xyXG5cclxuICAvLyBjaGFydFxyXG4gIG1pbldpZHRoID0gNDM0O1xyXG4gIGNvbG9yc1NjaGVtZSE6IHN0cmluZ1tdO1xyXG4gIGtwaSE6IEtQSVtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZmlsbEtQSSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFNjcm9sbCgpO1xyXG5cclxuICAgIHRoaXMucCA9IDE7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5wID0gdGhpcy52aWV3WzBdID4gdGhpcy5taW5XaWR0aCA/IHRoaXMudmlld1swXSAvIHRoaXMubWluV2lkdGggOiAxO1xyXG4gICAgICBpZiAodGhpcy5yZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRDb25maWd1cmF0aW9uKCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSgpO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBzZXRTY3JvbGwoKTogdm9pZCB7XHJcbiAgICBsZXQgcCA9IDE7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgcCA9IHRoaXMudmlld1sxXSAqIDAuNSA+IHRoaXMuc2Nyb2xsWSA/IHRoaXMudmlld1sxXSAqIDAuNSAvIHRoaXMuc2Nyb2xsWSA6IDE7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNjcm9sbCA9IHsgeDogJzMwMHB4JywgeTogdGhpcy5zY3JvbGxZICogcCArICdweCcgfTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy52aWV3WzBdO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7d2lkdGh9cHhgKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVzaXplKCk7XHJcbiAgfVxyXG5cclxuICBmaWxsS1BJKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb2xvcnNTY2hlbWUgPSBbJyNlNmU2ZTYnLCB0aGlzLmRhdGEuY29sb3JdO1xyXG4gICAgdGhpcy5rcGkgPSBbXHJcbiAgICAgIHsgY291bnQ6IHRoaXMuZGF0YS50b3RhbCAtIHRoaXMuZGF0YS5wYXJ0LCBkZXNjcmlwdGlvbjogJycgfSxcclxuICAgICAgeyBjb3VudDogdGhpcy5kYXRhLnBhcnQsIGRlc2NyaXB0aW9uOiAnJyB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29uZmlndXJhdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHtcclxuICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2VsZFR5cGU6IDAsXHJcbiAgICAgICAgICBkaXNwbGF5OiB0aGlzLmNvbHVtbnNIZWFkZXJbMF0sXHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ25hbWUnLFxyXG4gICAgICAgICAgZWRpdFRlbXBsYXRlOiAzLFxyXG4gICAgICAgICAgd2lkdGg6IGAke3RoaXMuY29sMiAqIHRoaXMucH1weGAsXHJcbiAgICAgICAgICBtaW5XaWR0aDogdGhpcy5jb2wyICogdGhpcy5wIC0gMTAsXHJcbiAgICAgICAgICBtYXhXaWR0aDogdGhpcy5jb2wyICogdGhpcy5wICsgMTAwLFxyXG4gICAgICAgICAgcmVzaXphYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMCxcclxuICAgICAgICAgIGRpc3BsYXk6IHRoaXMuY29sdW1uc0hlYWRlclsxXSxcclxuICAgICAgICAgIHByb3BlcnR5OiAnZGF0ZScsXHJcbiAgICAgICAgICB3aWR0aDogYCR7dGhpcy5jb2wzICogdGhpcy5wfXB4YCxcclxuICAgICAgICAgIG1pbldpZHRoOiB0aGlzLmNvbDMgKiB0aGlzLnAgLSAxMCxcclxuICAgICAgICAgIGVkaXRUZW1wbGF0ZTogMixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgZmllbGRJZDogJ2tleScsXHJcbiAgICAgIGZpZWxkUmF0ZTogJ2ZhdidcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldERhdGEoKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5kYXRhVGFibGUgPSBbXTtcclxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbi5mb3JFYWNoKHggPT4ge1xyXG4gICAgICB0aGlzLmRhdGFUYWJsZS5wdXNoKHRoaXMuZ2V0SXRlbVRhYmxlKHgpKTtcclxuICAgIH0pXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIGdldEl0ZW1UYWJsZSh4OiBLUElQYXJ0aWFsUm93KTogYW55IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGtleTogeC5rZXksXHJcbiAgICAgIG5hbWU6IHgubmFtZSxcclxuICAgICAgZGF0ZTogeC5kYXRlLFxyXG4gICAgICBjaGlsZHJlbjogeC5jaGlsZHJlbi5sZW5ndGggPiAwID8geC5jaGlsZHJlbi5tYXAoYyA9PiB0aGlzLmdldEl0ZW1UYWJsZShjKSkgOiB1bmRlZmluZWRcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInNkLWNvbnRlbnRcIj5cclxuICA8IS0tIENoYXJ0IC0tPlxyXG4gIDxkaXYgbnotcm93IGNsYXNzPVwiY2hhcnQtY29udGVudFwiPlxyXG4gICAgPGNtYWNzLWtwaS1vdmVydmlldyAqbmdJZj1cImtwaVwiIHR5cGU9XCJkb3VnaG51dFwiIFt2aWV3XT1cIls0MDAsIDQwMF1cIiBbc2hvd0xlZ2VuZF09XCJmYWxzZVwiIFtkYXRhXT1cImtwaVwiXHJcbiAgICAgIFt0aXRsZUtQSV09XCJkYXRhLnBhcnRMYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGRhdGEucGFydExhYmVsLnNsaWNlKDEpXCIgW2NvbG9yc109XCJjb2xvcnNTY2hlbWVcIiBbdGl0bGVWYWx1ZV09XCJkYXRhLnBhcnRcIj5cclxuICAgIDwvY21hY3Mta3BpLW92ZXJ2aWV3PlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gRGF0YSBUYWJsZSAtLT5cclxuICA8ZGl2IG56LXJvdyBjbGFzcz1cImNoYXJ0LWRhdGEtdGFibGVcIj5cclxuICAgIDxjbWFjcy1jb21wYWN0LXRhYmxlICpuZ0lmPVwiIWxvYWRpbmcgJiYgZGF0YVRhYmxlOyBlbHNlIGVsc2VCbG9ja1wiIFtkYXRhXT1cImRhdGFUYWJsZVwiIFsoY29uZmlnKV09XCJjb25maWd1cmF0aW9uXCJcclxuICAgICAgW2luZGVudFNpemVdPVwiNDBcIiBbbG9nc109XCJ0cnVlXCIgW2V4cGFuZGFibGVdPVwidHJ1ZVwiIFtzY3JvbGxdPVwic2Nyb2xsXCIgW2Zyb250UGFnaW5hdGlvbl09XCJmYWxzZVwiXHJcbiAgICAgIFtzaG93UGFnaW5hdGlvbl09XCJmYWxzZVwiPjwvY21hY3MtY29tcGFjdC10YWJsZT5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48IS0tIGxvYWRpbmcgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPlxyXG4gIDxuei1za2VsZXRvbiBbbnpBY3RpdmVdPVwidHJ1ZVwiIFtuelBhcmFncmFwaF09XCJ7IHJvd3M6IDggfVwiPjwvbnotc2tlbGV0b24+XHJcbjwvbmctdGVtcGxhdGU+Il19