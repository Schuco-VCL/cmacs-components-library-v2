import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { CeldType } from '../core/enums/CeldType.enum';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/grid";
import * as i2 from "@angular/common";
import * as i3 from "../cmacs-kpioverview/cmacs-kpioverview.component";
import * as i4 from "../cmacs-compact-table/cmacs-compact-table.component";
import * as i5 from "ng-zorro-antd/skeleton";
const _c0 = ["columnTemplate"];
const _c1 = function () { return [300, 300]; };
function CmacsKpiVsComponent_cmacs_kpi_overview_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-kpi-overview", 7);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("view", i0.ɵɵpureFunction0(5, _c1))("data", item_r6)("colors", ctx_r0.colorsScheme)("showLegend", false)("titleKPI", ctx_r0.kpiColumns[i_r7].nameKpi);
} }
function CmacsKpiVsComponent_cmacs_compact_table_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-compact-table", 8);
    i0.ɵɵlistener("configChange", function CmacsKpiVsComponent_cmacs_compact_table_4_Template_cmacs_compact_table_configChange_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.configuration = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("data", ctx_r1.dataTable)("config", ctx_r1.configuration)("indentSize", 40)("logs", true)("expandable", true)("scroll", ctx_r1.scroll)("frontPagination", false)("showPagination", false);
} }
const _c2 = function () { return { rows: 8 }; };
function CmacsKpiVsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-skeleton", 9);
} if (rf & 2) {
    i0.ɵɵproperty("nzActive", true)("nzParagraph", i0.ɵɵpureFunction0(2, _c2));
} }
function CmacsKpiVsComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 10);
} if (rf & 2) {
    const color_r10 = ctx.color;
    i0.ɵɵstyleProp("background-color", color_r10);
} }
export class CmacsKpiVsComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.scrollY = 200;
        this.scroll = { x: '434px', y: this.scrollY + 'px' };
        this.p = 1;
        this.col2 = 150;
        this.col3 = 70;
        this.loading = true;
        // chart
        this.showChart = false;
        this.minWidth = 434;
        this.listKpi = [];
        this.colorsScheme = [];
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
        this.colorsScheme = this.data.rows.map(x => x.color);
        this.kpiColumns = this.data.columns.filter(d => d.hasKpi);
        this.kpiColumns.forEach((c, index) => {
            this.listKpi.push(this.data.rows.map(r => ({ count: r.values[index], description: '' })));
        });
    }
    setConfiguration() {
        this.configuration = {
            // column with dot
            fields: [
                {
                    celdType: CeldType.TemplateRef,
                    display: '',
                    property: 'color',
                    editTemplate: 3,
                    width: '70px',
                    minWidth: 70,
                    maxWidth: 120,
                    resizable: true
                },
            ],
            fieldId: 'key',
            fieldRate: 'fav'
        };
        this.data.columns.forEach((x, index) => {
            const colWidth = (x.hasKpi ? this.col3 : this.col2);
            this.configuration.fields.push({
                celdType: CeldType.Default,
                editTemplate: 3,
                display: x.name,
                property: x.hasKpi ? `prop${index}` : 'name',
                editable: false,
                width: colWidth * this.p + 'px',
                minWidth: colWidth * this.p - 10,
                maxWidth: colWidth * this.p + 100,
                resizable: true,
            });
        });
    }
    setData() {
        this.loading = true;
        this.dataTable = [];
        this.data.rows.forEach(x => {
            this.dataTable.push(this.getItemTable(x));
        });
        setTimeout(() => {
            this.loading = false;
        }, 0);
    }
    getItemTable(x) {
        const newItem = {
            key: x.id,
            color: {
                ref: this.columnTemplate,
                context: {
                    color: x.color
                }
            },
            name: x.label
        };
        if (x.children.length > 0 || !x.isChild) {
            newItem.children = x.children.map(e => this.getItemTable(e));
        }
        x.values.forEach((v, i) => {
            newItem[`prop${i + 1}`] = v.toFixed(2);
        });
        return newItem;
    }
}
CmacsKpiVsComponent.ɵfac = function CmacsKpiVsComponent_Factory(t) { return new (t || CmacsKpiVsComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
CmacsKpiVsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsKpiVsComponent, selectors: [["cmacs-kpi-vs"]], viewQuery: function CmacsKpiVsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1, TemplateRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columnTemplate = _t.first);
    } }, inputs: { view: "view", data: "data" }, features: [i0.ɵɵNgOnChangesFeature], decls: 9, vars: 3, consts: [[1, "sd-content"], ["nz-row", "", 1, "chart-content"], ["type", "doughnut", 3, "view", "data", "colors", "showLegend", "titleKPI", 4, "ngFor", "ngForOf"], ["nz-row", "", 1, "chart-data-table"], [3, "data", "config", "indentSize", "logs", "expandable", "scroll", "frontPagination", "showPagination", "configChange", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["columnTemplate", ""], ["type", "doughnut", 3, "view", "data", "colors", "showLegend", "titleKPI"], [3, "data", "config", "indentSize", "logs", "expandable", "scroll", "frontPagination", "showPagination", "configChange"], [3, "nzActive", "nzParagraph"], [1, "chart-dot"]], template: function CmacsKpiVsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, CmacsKpiVsComponent_cmacs_kpi_overview_2_Template, 1, 6, "cmacs-kpi-overview", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, CmacsKpiVsComponent_cmacs_compact_table_4_Template, 1, 8, "cmacs-compact-table", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, CmacsKpiVsComponent_ng_template_5_Template, 1, 3, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(7, CmacsKpiVsComponent_ng_template_7_Template, 1, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(6);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.listKpi);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.dataTable)("ngIfElse", _r2);
    } }, directives: [i1.NzRowDirective, i2.NgForOf, i2.NgIf, i3.CmacsKPIOverviewComponent, i4.CmacsCompactTableComponent, i5.NzSkeletonComponent], styles: [".chart-dot[_ngcontent-%COMP%]{width:9px;height:9px;border-radius:5px;display:inline-block;margin-left:13px}.chart-content[_ngcontent-%COMP%]{display:flex!important;align-items:center;justify-content:center}.sd-content[_ngcontent-%COMP%]{position:relative}  .chart-data-table cmacs-compact-table .cmacs-compact-table-input-number-icon-view{display:none}  .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs,   .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs .ant-table-row-expand-icon,   .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font,   .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font:hover{background-color:#fff!important}  .chart-data-table .cmacs-compact-table .ant-table-header,   .chart-data-table .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-header-logs)>td,   .chart-data-table .cmacs-compact-table .ant-table-thead>tr>th{background-color:#f6f7fb!important}  .chart-content cmacs-kpi-overview{min-width:unset;display:unset!important;min-width:unset!important;min-height:unset!important;padding:unset!important;background-color:unset;margin-top:unset}  .chart-content .cmacs-kpi-overview-wrapper{height:unset!important;padding-top:0!important;margin-left:unset!important;margin-top:unset!important}  .chart-content .cmacs-kpi-overview-chart{top:-12px!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsKpiVsComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-kpi-vs',
                templateUrl: './cmacs-kpi-vs.component.html',
                styleUrls: ['./cmacs-kpi-vs.component.css']
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { columnTemplate: [{
            type: ViewChild,
            args: ['columnTemplate', { read: TemplateRef, static: false }]
        }], view: [{
            type: Input
        }], data: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLXZzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGktdnMvY21hY3Mta3BpLXZzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGktdnMvY21hY3Mta3BpLXZzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFjLEtBQUssRUFBZ0MsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsSSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7SUNDbkQsd0NBRXFCOzs7OztJQUYyRCxpREFBbUIsaUJBQUEsK0JBQUEscUJBQUEsNkNBQUE7Ozs7SUFNbkcsOENBRTJCO0lBRjJELGtQQUEwQjtJQUVyRixpQkFBc0I7OztJQUZrQix1Q0FBa0IsZ0NBQUEsa0JBQUEsY0FBQSxvQkFBQSx5QkFBQSwwQkFBQSx5QkFBQTs7OztJQU92RixpQ0FBeUU7O0lBQTVELCtCQUFpQiwyQ0FBQTs7O0lBSTlCLDBCQUE4RDs7O0lBQXZDLDZDQUFnQzs7QURNekQsTUFBTSxPQUFPLG1CQUFtQjtJQTJCOUIsWUFDVSxRQUFtQixFQUNuQixVQUFzQjtRQUR0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFqQmhDLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFDZCxXQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ2hELE1BQUMsR0FBRyxDQUFDLENBQUM7UUFFTixTQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1gsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFFZixRQUFRO1FBQ1IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2YsWUFBTyxHQUFZLEVBQUUsQ0FBQztRQUV0QixpQkFBWSxHQUFhLEVBQUUsQ0FBQztJQUt4QixDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7U0FDRjtRQUNELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0U7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FB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QUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O3NGQTdJVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjsrQkFFTyxXQUFXOzs7OztRQzVCbEQsOEJBQXdCO1FBRXRCLDhCQUFrQztRQUNoQyxrR0FFcUI7UUFDdkIsaUJBQU07UUFFTiw4QkFBcUM7UUFDbkMsb0dBRWlEO1FBQ25ELGlCQUFNO1FBQ1IsaUJBQU07UUFFTixxSEFFYztRQUVkLHFIQUVjOzs7UUFsQjJCLGVBQVk7UUFBWixxQ0FBWTtRQU0zQixlQUE2QjtRQUE3QixvREFBNkIsaUJBQUE7O3VGRGlCMUMsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7cUZBR29FLGNBQWM7a0JBQWhGLFNBQVM7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFHeEQsSUFBSTtrQkFBWixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLUEkgfSBmcm9tICcuLi9jbWFjcy1rcGkvY21hY3Mta3BpLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENlbGRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9DZWxkVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgR3JpZENvbmZpZyB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcblxyXG5pbnRlcmZhY2UgUm93SW5wdXQge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICB2YWx1ZXM6IG51bWJlcltdO1xyXG4gIGlzQ2hpbGQ6IGJvb2xlYW47XHJcbiAgY2hpbGRyZW46IFJvd0lucHV0W107XHJcbiAgY29sb3I6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIENvbHVtbklucHV0IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbmFtZUtwaTogc3RyaW5nO1xyXG4gIGhhc0twaTogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mta3BpLXZzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mta3BpLXZzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1rcGktdnMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0twaVZzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdjb2x1bW5UZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSkgY29sdW1uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHt9PjtcclxuXHJcbiAgLy8gY29udGVudFxyXG4gIEBJbnB1dCgpIHZpZXchOiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBkYXRhITogeyBjb2x1bW5zOiBDb2x1bW5JbnB1dFtdLCByb3dzOiBSb3dJbnB1dFtdIH07XHJcblxyXG4gIC8vIHRhYmxlXHJcbiAgZGF0YVRhYmxlITogYW55W107XHJcbiAgY29uZmlndXJhdGlvbiE6IEdyaWRDb25maWc7XHJcblxyXG4gIHNjcm9sbFkgPSAyMDA7XHJcbiAgc2Nyb2xsID0geyB4OiAnNDM0cHgnLCB5OiB0aGlzLnNjcm9sbFkgKyAncHgnIH07XHJcbiAgcCA9IDE7XHJcblxyXG4gIGNvbDIgPSAxNTA7XHJcbiAgY29sMyA9IDcwO1xyXG4gIGxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAvLyBjaGFydFxyXG4gIHNob3dDaGFydCA9IGZhbHNlO1xyXG4gIG1pbldpZHRoID0gNDM0O1xyXG4gIGxpc3RLcGk6IEtQSVtdW10gPSBbXTtcclxuICBrcGlDb2x1bW5zOiBDb2x1bW5JbnB1dFtdO1xyXG4gIGNvbG9yc1NjaGVtZTogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZpbGxLUEkoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTY3JvbGwoKTtcclxuXHJcbiAgICB0aGlzLnAgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMucCA9IHRoaXMudmlld1swXSA+IHRoaXMubWluV2lkdGggPyB0aGlzLnZpZXdbMF0gLyB0aGlzLm1pbldpZHRoIDogMTtcclxuICAgICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRDb25maWd1cmF0aW9uKCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSgpO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBzZXRTY3JvbGwoKTogdm9pZCB7XHJcbiAgICBsZXQgcCA9IDE7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgcCA9IHRoaXMudmlld1sxXSAqIDAuNSA+IHRoaXMuc2Nyb2xsWSA/IHRoaXMudmlld1sxXSAqIDAuNSAvIHRoaXMuc2Nyb2xsWSA6IDE7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNjcm9sbCA9IHsgeDogJzMwMHB4JywgeTogdGhpcy5zY3JvbGxZICogcCArICdweCcgfTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy52aWV3WzBdO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7d2lkdGh9cHhgKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVzaXplKCk7XHJcbiAgfVxyXG5cclxuICBmaWxsS1BJKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb2xvcnNTY2hlbWUgPSB0aGlzLmRhdGEucm93cy5tYXAoeCA9PiB4LmNvbG9yKTtcclxuICAgIHRoaXMua3BpQ29sdW1ucyA9IHRoaXMuZGF0YS5jb2x1bW5zLmZpbHRlcihkID0+IGQuaGFzS3BpKTtcclxuICAgIHRoaXMua3BpQ29sdW1ucy5mb3JFYWNoKChjLCBpbmRleCkgPT4ge1xyXG4gICAgICB0aGlzLmxpc3RLcGkucHVzaCh0aGlzLmRhdGEucm93cy5tYXAociA9PiAoeyBjb3VudDogci52YWx1ZXNbaW5kZXhdLCBkZXNjcmlwdGlvbjogJycgfSBhcyBLUEkpKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldENvbmZpZ3VyYXRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB7XHJcbiAgICAgIC8vIGNvbHVtbiB3aXRoIGRvdFxyXG4gICAgICBmaWVsZHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogQ2VsZFR5cGUuVGVtcGxhdGVSZWYsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnJyxcclxuICAgICAgICAgIHByb3BlcnR5OiAnY29sb3InLFxyXG4gICAgICAgICAgZWRpdFRlbXBsYXRlOiAzLFxyXG4gICAgICAgICAgd2lkdGg6ICc3MHB4JyxcclxuICAgICAgICAgIG1pbldpZHRoOiA3MCxcclxuICAgICAgICAgIG1heFdpZHRoOiAxMjAsXHJcbiAgICAgICAgICByZXNpemFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBmaWVsZElkOiAna2V5JyxcclxuICAgICAgZmllbGRSYXRlOiAnZmF2J1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRhdGEuY29sdW1ucy5mb3JFYWNoKCh4LCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBjb2xXaWR0aCA9ICh4Lmhhc0twaSA/IHRoaXMuY29sMyA6IHRoaXMuY29sMik7XHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5maWVsZHMucHVzaCh7XHJcbiAgICAgICAgY2VsZFR5cGU6IENlbGRUeXBlLkRlZmF1bHQsXHJcbiAgICAgICAgZWRpdFRlbXBsYXRlOiAzLFxyXG4gICAgICAgIGRpc3BsYXk6IHgubmFtZSxcclxuICAgICAgICBwcm9wZXJ0eTogeC5oYXNLcGkgPyBgcHJvcCR7aW5kZXh9YCA6ICduYW1lJyxcclxuICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgd2lkdGg6IGNvbFdpZHRoICogdGhpcy5wICsgJ3B4JyxcclxuICAgICAgICBtaW5XaWR0aDogY29sV2lkdGggKiB0aGlzLnAgLSAxMCxcclxuICAgICAgICBtYXhXaWR0aDogY29sV2lkdGggKiB0aGlzLnAgKyAxMDAsXHJcbiAgICAgICAgcmVzaXphYmxlOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0YSgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmRhdGFUYWJsZSA9IFtdO1xyXG4gICAgdGhpcy5kYXRhLnJvd3MuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgdGhpcy5kYXRhVGFibGUucHVzaCh0aGlzLmdldEl0ZW1UYWJsZSh4KSk7XHJcbiAgICB9KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbVRhYmxlKHg6IFJvd0lucHV0KTogYW55IHtcclxuICAgIGNvbnN0IG5ld0l0ZW06IGFueSA9IHtcclxuICAgICAga2V5OiB4LmlkLFxyXG4gICAgICBjb2xvcjoge1xyXG4gICAgICAgIHJlZjogdGhpcy5jb2x1bW5UZW1wbGF0ZSxcclxuICAgICAgICBjb250ZXh0OiB7XHJcbiAgICAgICAgICBjb2xvcjogeC5jb2xvclxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbmFtZTogeC5sYWJlbFxyXG4gICAgfTtcclxuICAgIGlmICh4LmNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgIXguaXNDaGlsZCkge1xyXG4gICAgICBuZXdJdGVtLmNoaWxkcmVuID0geC5jaGlsZHJlbi5tYXAoZSA9PiB0aGlzLmdldEl0ZW1UYWJsZShlKSk7XHJcbiAgICB9XHJcbiAgICB4LnZhbHVlcy5mb3JFYWNoKCh2LCBpKSA9PiB7XHJcbiAgICAgIG5ld0l0ZW1bYHByb3Ake2kgKyAxfWBdID0gdi50b0ZpeGVkKDIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmV3SXRlbTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInNkLWNvbnRlbnRcIj5cclxuICA8IS0tIENoYXJ0IC0tPlxyXG4gIDxkaXYgbnotcm93IGNsYXNzPVwiY2hhcnQtY29udGVudFwiPlxyXG4gICAgPGNtYWNzLWtwaS1vdmVydmlldyAqbmdGb3I9XCJsZXQgaXRlbSBvZiBsaXN0S3BpOyBsZXQgaSA9IGluZGV4XCIgdHlwZT1cImRvdWdobnV0XCIgW3ZpZXddPVwiWzMwMCwgMzAwXVwiIFtkYXRhXT1cIml0ZW1cIiBbY29sb3JzXT1cImNvbG9yc1NjaGVtZVwiXHJcbiAgICAgIFtzaG93TGVnZW5kXT1cImZhbHNlXCIgW3RpdGxlS1BJXT1cImtwaUNvbHVtbnNbaV0ubmFtZUtwaVwiID5cclxuICAgIDwvY21hY3Mta3BpLW92ZXJ2aWV3PlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gZGF0YSB0YWJsZSAtLT5cclxuICA8ZGl2IG56LXJvdyBjbGFzcz1cImNoYXJ0LWRhdGEtdGFibGVcIj5cclxuICAgIDxjbWFjcy1jb21wYWN0LXRhYmxlICpuZ0lmPVwiIWxvYWRpbmcgJiYgZGF0YVRhYmxlOyBlbHNlIGVsc2VCbG9ja1wiIFtkYXRhXT1cImRhdGFUYWJsZVwiIFsoY29uZmlnKV09XCJjb25maWd1cmF0aW9uXCJcclxuICAgICAgW2luZGVudFNpemVdPVwiNDBcIiBbbG9nc109XCJ0cnVlXCIgW2V4cGFuZGFibGVdPVwidHJ1ZVwiIFtzY3JvbGxdPVwic2Nyb2xsXCIgW2Zyb250UGFnaW5hdGlvbl09XCJmYWxzZVwiXHJcbiAgICAgIFtzaG93UGFnaW5hdGlvbl09XCJmYWxzZVwiPjwvY21hY3MtY29tcGFjdC10YWJsZT5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cclxuICA8bnotc2tlbGV0b24gW256QWN0aXZlXT1cInRydWVcIiBbbnpQYXJhZ3JhcGhdPVwieyByb3dzOiA4IH1cIj48L256LXNrZWxldG9uPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNjb2x1bW5UZW1wbGF0ZSBsZXQtY29sb3I9XCJjb2xvclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjaGFydC1kb3RcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJjb2xvclwiPjwvZGl2PlxyXG48L25nLXRlbXBsYXRlPiJdfQ==